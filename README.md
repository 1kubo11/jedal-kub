# Fitness jedálniček

Offline PWA na plánovanie jedálničkov z **312 receptov** vytiahnutých zo 7 fitness ebookov
(TeloZdravo – Chlapské krabičky, Krabičky bez výčitiek, Jesenné krabičky, Mäso bez výčitiek,
Namáčaj bez výčitiek). Celé po slovensky, robené na mobil, dáta zostávajú v zariadení.

## Čo appka vie

- **Jedálniček** na 1 deň alebo celý týždeň, **3 až 5 jedál denne**, trafí denný cieľ kalórií
  aj bielkovín s toleranciou ±5 %. Čerpá zo širokého výberu – 20 vygenerovaných týždňov
  použije okolo 200 z 312 receptov, nie stále tie isté. Obedy pondelok–piatok vyberá len z receptov vhodných
  na meal prep do mikrovlnky (1 alebo 2 recepty navarené vo väčšom, rovnaká veľkosť porcie
  v celej dávke). Každé jedlo sa dá jedným tlačidlom vymeniť za iné s podobnými kalóriami.
- **Obedy na týždeň** – vyberieš prílohu, na ktorú máš chuť (ryža, zemiaky, cestoviny, batáty,
  bulgur/kuskus/quinoa, strukoviny, pečivo, alebo bez prílohy), zadáš počet dní a porcií na deň
  a appka dohľadá celé obedy do krabičky, prepočíta suroviny na celú dávku a urobí nákup
  presne na toto varenie. Sleduje pritom kalórie aj bielkoviny v jednej porcii.
  Každý ďalší návrh dá iné recepty; tlačidlo *Vymeň* siaha ešte širšie, aj na recepty,
  ktoré cieľ trafia len tak-tak.
- **Recepty** – vyhľadávanie v názvoch aj surovinách, filtre (kategória, kalórie, bielkoviny,
  štítky, ebook), detail s postupom, prepočet surovín na ľubovoľný počet porcií
  a režim varenia s veľkým písmom.
- **Podrobný postup** – prepína sa Stručne / Podrobne. Všetkých **167 obedov do krabičky
  a 10 polievok** má postup rozpísaný ručne (`postupy-obedy.js`) – rovnaké suroviny a poradie ako v ebooku, len
  s časmi, teplotami a tým, podľa čoho spoznáš, že krok je hotový. Ostatné recepty dostanú
  vysvetlenia techník podľa kľúčových slov (`techniky.js`).
- **Obľúbené a zakázané suroviny** – obľúbené generátor uprednostňuje, recepty so zakázanou
  surovinou sa nikdy neponúknu ani nezobrazia.
- **Nákupný zoznam** – automaticky z celého týždňa, rovnaké suroviny spočítané a zoradené
  podľa oddelení v obchode, s odškrtávaním. Zvlášť zoznam na nedeľné varenie obedov.
- Funguje **úplne bez internetu** a dá sa pridať na plochu ako appka.

## Ako to je poskladané

Žiadny build, žiadne knižnice – čisté HTML, CSS a JavaScript. Stačí otvoriť `index.html`.

| Súbor | Čo v ňom je |
|---|---|
| `index.html` | kostra stránky a registrácia offline režimu |
| `style.css` | vzhľad, svetlý aj tmavý režim |
| `data-ck.js`, `data-kbv.js`, `data-jk.js`, `data-mbv.js` | recepty po ebookoch (100 + 105 + 50 + 57) |
| `data.js` | spojí recepty dokopy, zoznam ebookov, kategórií a štítkov |
| `suroviny.js` | rozpoznávanie surovín, prepočet množstiev, oddelenia obchodu, rozpoznanie prílohy |
| `techniky.js` | kuchárske vysvetlenia ku krokom postupu (podľa kľúčových slov) |
| `postupy-obedy.js` | ručne rozpísané postupy k obedom do krabičky a polievkam |
| `app.js` | generátor jedálnička, obedy na týždeň, obrazovky, ukladanie |
| `sw.js` | offline režim |

### Ako appka vyberá recepty

Nehľadá niekoľko najpresnejších a potom medzi nimi vyberá – to by stále dávalo tie isté jedlá.
Zoberie **všetky recepty, ktoré sa do cieľa vmestia**, a medzi nimi vyberá náhodne. Väčšiu
šancu má recept, ktorý cieľ trafí presnejšie, a obľúbený recept; menšiu má ten, ktorý vyšiel
naposledy (`S.historia`, posledných 90 použitých receptov). Preto sa jedlá točia a opakujú
sa až vtedy, keď sa receptár naozaj vyčerpá.

Tolerancie:

| Kde | Kalórie | Bielkoviny |
|---|---|---|
| denný plán (porcie doladí súčet za deň) | ±20 % na jedlo | rieši sa až na úrovni dňa |
| návrh obedov na týždeň | ±10 % | smie chýbať najviac 16 % |
| ručná výmena obeda | ±15 % | smie chýbať najviac 25 % |

Zoznamy, z ktorých sa vyberá, sú širšie než kategórie v ebookoch:

- **raňajky: 36 receptov** namiesto 10. Ebooky majú v kategórii raňajok len desať jedál,
  takže k nim appka priberá sladké kaše, vločky a lievance a rýchle vajcové či wrapové jedlá
  z iných kategórií. Je to vlastný výber (`AJ_RANAJKY` v `app.js`), nie údaj z knihy, a také
  recepty majú v detaile štítok *aj na raňajky*.
- **polievky** sa dajú použiť ako obed alebo večera v dennom pláne. Do sekcie *Obedy na týždeň*
  zámerne nevstupujú – z jednej porcie polievky sa cieľ bielkovín vytiahnuť nedá.
- **omáčky, maslá a dipy** (kategória príloha) sa do jedálnička nedávajú vôbec, nie sú to
  samostatné jedlá.

Niektoré prílohy majú užší výber, než koľko receptov existuje: zo 33 strukovinových obedov
trafí Jakubov cieľ bielkovín asi pätnásť, zvyšok je na obed priveľmi chudý na bielkoviny.
To je vlastnosť receptov, nie chyba výberu – tlačidlo *Vymeň* sa k nim aj tak dostane.

### Ako sú uložené recepty

```js
{ id:"ck1", n:"Názov", c:"obed", p:8, s:2,        // c = kategória, p = strana v ebooku, s = porcie
  k:610, pr:45, ca:40, f:30, tm:15,               // kcal, bielkoviny, sacharidy, tuky, minúty
  ing:["6 vajec", "200 g bielej fazule"],          // suroviny tak, ako sú v ebooku
  st:["Na panvici rozohrej maslo…"],               // postup
  t:["mealprep","mikrovlnka","rychle"] }           // štítky
```

Kalórie a makrá sú **prevzaté z ebookov** (na 1 porciu), nie dopočítané – ebooky ich uvádzali
pri každom recepte. Jediná výnimka je omáčka *Domáca BBQ bez cukru*, ktorá mala v PDF
poškodené suroviny; má príznak `odhad:true` a poznámku priamo v appke.

### Štítky

`mealprep` (vydrží v chladničke), `mikrovlnka` (dá sa ohriať), `rychle` (do 20 minút),
`pikantne`, `studene` (netreba ohrievať), `bezmasa`.

## Úpravy

Keď zmeníš ktorýkoľvek súbor, **zvýš číslo verzie v `sw.js`** (`const VERZIA = PREFIX + "v5"`
→ `"v6"`), inak si telefón nechá starú verziu uloženú v pamäti. To isté platí aj pri testovaní
na localhoste – service worker servíruje z pamäte, takže zmeny neuvidíš, kým cache nevyčistíš.

Appka beží na adrese `1kubo11.github.io`, kde je aj *den-po-dni*, a pamäť prehliadača je pre
celú adresu spoločná. Preto `sw.js` maže iba cache s prefixom `jedalnicek-` a hľadá iba
vo vlastnej – nech si tie dve appky nelezú do offline režimu. Ten prefix nemeň.

Lokálne spustenie s offline režimom (service worker potrebuje server, nestačí dvojklik):

```bash
python3 -m http.server 4173
```

## Súkromie

Jedálniček, obľúbené recepty, zakázané suroviny aj odškrtnutý nákup sa ukladajú iba
do pamäte prehliadača (`localStorage`) na danom zariadení. Nikam sa nič neposiela,
appka nemá žiadny server ani účet.
