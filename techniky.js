/* Kuchárske vysvetlenia – vrstva „ako v knihe“.
   Recepty v ebookoch sú písané telegraficky („Na panvici orestuj cibuľu.“).
   Tu je vysvetlené, čo sa pri tom deje, podľa čoho poznáš, že je to hotové,
   a kde sa to dá pokaziť. Vysvetlenia sa ku krokom priraďujú podľa kľúčových slov,
   takže platia pre všetky recepty naraz – nič sa nedopisuje do jednotlivých receptov. */
(function () {
  "use strict";

  const T = {
    /* ——— panvica a teplo ——— */
    rozpalenie: {
      nazov: "Prečo musí byť panvica naozaj horúca",
      re: /sprudka|rozpáľ|rozohrej|rozohriat|rozpálen|horúc\w* panv/i,
      text: "Studená panvica je najčastejší dôvod, prečo mäso vyzerá uvarené a nie opečené. " +
        "Panvicu nechaj na strednom až vyššom plameni aspoň dve minúty bez ničoho, až potom pridaj tuk. " +
        "Olej musí byť tekutý ako voda a po naklonení panvice sa rozbehne, nie lenivo tiecť.",
      hotovo: "Kvapka vody na panvici musí hneď zasyčať a odparí sa do sekundy. Keď len tak sedí a bublinkuje, panvica je studená.",
      pozor: "Olej nesmie dymiť. Keď začne, je prepálený – zlej ho preč, panvicu utri a začni znova, inak bude všetko horké."
    },
    opekanie: {
      nazov: "Opekanie mäsa: kôrka sa robí tichom, nie miešaním",
      re: /opekaj|opeč|opečen|opraž|prudko opeč|zo všetkých strán|z oboch strán/i,
      text: "Keď mäso položíš na horúcu panvicu, prvých 90 sekúnd sa ho nedotýkaj. V tom čase sa na spodku tvorí " +
        "hnedá kôrka – to je tá chuť, ktorú v hotovom jedle hľadáš. Keď ho budeš prehadzovať, kôrka sa nestihne vytvoriť " +
        "a mäso sa namiesto toho začne variť vo vlastnej šťave.",
      hotovo: "Mäso sa od panvice samo pustí. Kým sa lepí, ešte nie je hotové – nesnaž sa ho odtrhnúť.",
      pozor: "Nedávaj na panvicu všetko naraz. Keď sú kúsky nahustené, teplota spadne, pustia vodu a budeš ich dusiť. " +
        "Radšej na dvakrát – stratíš tri minúty, získaš celé jedlo."
    },
    restovanie: {
      nazov: "Restovanie cibule: nie dozlatista, ale dosklovita",
      re: /orestuj|restuj|cibuľu|cibuľku|sklovit/i,
      text: "Cibuľa má na začiatku ostrú, štipľavú chuť a tá sa teplom mení na sladkú. Potrebuje na to tri až päť minút " +
        "na strednom plameni a trochu tuku. Nie je to krok, ktorý sa dá uponáhľať zvýšením plameňa – vtedy sa cibuľa zvonku " +
        "spáli a vnútri ostane surová a štipľavá.",
      hotovo: "Kúsky zmäknú, stratia bielu farbu a začnú byť priehľadné. Keď ich ochutnáš, nepáli to, je to sladkasté.",
      pozor: "Keď je cibuľa už hnedá a tvrdá, prepálila sa a do jedla pustí horkosť. V tej fáze sa to nedá zachrániť."
    },
    cesnak: {
      nazov: "Cesnak ide do panvice posledný",
      re: /cesnak|cesnakov/i,
      text: "Cesnak sa pripáli oveľa rýchlejšie než cibuľa alebo zelenina – stačí mu necelá minúta. Preto ide na panvicu " +
        "až vtedy, keď je zvyšok takmer hotový. Spálený cesnak je nepríjemne horký a tú horkosť už z omáčky nedostaneš.",
      hotovo: "Akonáhle ho ucítiš – a ucítiš ho okamžite – je hotový. Vtedy hneď pridaj tekutinu alebo zníž plameň.",
      pozor: "Prelisovaný cesnak horí rýchlejšie ako nasekaný, a nasekaný rýchlejšie ako na plátky. Čím jemnejšie, tým viac pozornosti."
    },
    maillard: {
      nazov: "Dozlatista znamená hnedo, nie žlto",
      re: /dozlatista|zlatist|dohneda|opečen\w* dozlat/i,
      text: "Hnednutie nie je kozmetika. Pri ňom vzniká stovky nových chuťových látok – to je rozdiel medzi uvareným " +
        "kuracím a opečeným kuracím. Potrebuje na to dve veci: dosť vysokú teplotu a suchý povrch.",
      hotovo: "Farba lieskového orecha až tmavého medu. Keď je ešte bledobéžová, daj tomu ešte minútu.",
      pozor: "Mokrý povrch nezhnedne, len sa odparuje. Preto mäso pred opekaním vždy osuš papierovou utierkou."
    },

    /* ——— rúra ——— */
    predhriatie: {
      nazov: "Predhriatie rúry sa neoplatí preskakovať",
      re: /predhrej|predhriat|rozohrej rúru|rúru na \d/i,
      text: "Rúra potrebuje 10 až 15 minút, aby sa prehriali aj jej steny, nielen vzduch. Kontrolka zhasne skôr, " +
        "než je naozaj pripravená. Keď dáš jedlo dnu priskoro, prvých desať minút sa len pomaly ohrieva a časy v recepte prestanú platiť.",
      pozor: "Teplovzdušná rúra pečie rýchlejšie – ak máš ventilátor, uber asi 20 °C oproti receptu alebo skráť čas o pätinu."
    },
    plech: {
      nazov: "Jedlo z jedného plechu: priestor je dôležitejší než čas",
      re: /plech|pekáč|zapekac|z plechu|na plechu/i,
      text: "Zelenina aj mäso na plechu pustia vodu. Keď sú natlačené na sebe, voda nemá kam odísť a všetko sa upečie " +
        "mäkké a bledé. Rozlož kúsky tak, aby sa nedotýkali a aby bolo medzi nimi vidieť papier.",
      hotovo: "Okraje sú tmavšie a miestami pripečené, kúsky sa dajú ľahko prepichnúť vidličkou.",
      pozor: "Radšej dva plechy než jeden preplnený. A tvrdšiu zeleninu (mrkva, zemiak) daj dnu o 10 minút skôr než mäkkú (cuketa, paprika)."
    },

    /* ——— prílohy ——— */
    cestoviny: {
      nazov: "Cestoviny: veľa vody, poriadne soli, o minútu menej",
      re: /cestovin|špaget|penne|fusilli|rezanc|osolenej vode|al dente/i,
      text: "Na 100 g cestovín počítaj aspoň liter vody a do nej lyžicu soli – cestoviny sa dochucujú zvnútra, " +
        "pri vode sa šetriť neoplatí. Variť ich začni, až keď voda naplno vrie.",
      hotovo: "Uvar ich o minútu kratšie, než hovorí obal. Dovaria sa v omáčke a v krabičke do druhého dňa ešte zmäknú.",
      pozor: "Olej do vody nepatrí – omáčka sa potom cestovín nechytí. Pred zliatím si odlož hrnček vody z varenia, " +
        "tým sa dá omáčka krásne spojiť."
    },
    ryza: {
      nazov: "Ryža: prepláchnuť, odmerať, nedvíhať pokrievku",
      re: /ryž|basmati|rizot|risott/i,
      text: "Ryžu prepláchni v sitku, kým voda nie je skoro číra – zmyješ škrob, ktorý ju lepí do kaše. Potom pomer " +
        "jeden diel ryže na dva diely vody (basmati stačí 1 : 1,5), priveď do varu, stiahni na minimum a prikry.",
      hotovo: "Po 10–12 minútach odstav a nechaj ešte 10 minút stáť pod pokrievkou. Až potom premiešaj vidličkou, nie lyžicou.",
      pozor: "Každé nadvihnutie pokrievky pustí paru, ktorá ryžu varí. Nekukaj do nej."
    },
    zemiaky: {
      nazov: "Zemiaky: do studenej vody, nie do vriacej",
      re: /zemiak|hranolč|hranolk/i,
      text: "Zemiaky daj do hrnca so studenou osolenou vodou a až potom zapni platňu. Keď ich hodíš do vriacej, " +
        "povrch sa rozvarí skôr, než bude stred mäkký. Pri pečení platí opak – tie patria do už rozpálenej rúry.",
      hotovo: "Nôž alebo špajdľa vojde do stredu bez odporu a zemiak z nej skĺzne sám.",
      pozor: "Na pečenie ich pred vložením do rúry osuš a potri olejom – mokré zemiaky nikdy nebudú chrumkavé."
    },
    strukoviny: {
      nazov: "Strukoviny z konzervy vždy prepláchni",
      re: /šošovic|fazuľ|cícer|z konzervy|preplách/i,
      text: "Nálev v konzerve je slaný, škrobový a má svoju vlastnú chuť, ktorá prebije korenie v jedle. " +
        "Preklop obsah do sitka a prepláchni studenou vodou, kým neprestane peniť.",
      pozor: "Nálev je aj hlavný dôvod nadúvania. Minúta pod tečúcou vodou s tým urobí viac než čokoľvek iné."
    },

    /* ——— mäso ——— */
    kuracie: {
      nazov: "Kuracie prsia vysušíš za 60 sekúnd nepozornosti",
      re: /kuracie prsia|kuracích pŕs|kurací rez|kuracie mäso|morčacie/i,
      text: "Kuracie prsia sú chudé, takže medzi „hotové“ a „suché“ je naozaj krátka chvíľa. Pomáha, keď ich pred opekaním " +
        "trochu rozklepeš na rovnomernú hrúbku – inak je tenší koniec suchý, kým hrubší dôjde.",
      hotovo: "Vnútri 74 °C, šťava po prepichnutí vyteká číra, nie ružová. Bez teplomera: mäso je pružné, ale už nie mäkké ako surové.",
      pozor: "Po dopečení ho nechaj dve minúty ležať, než ho nakrájaš. Keď ho rozrežeš hneď, šťava ti vytečie na dosku."
    },
    mlete: {
      nazov: "Fašírky a guľky: nemiešaj ich dlhšie, než treba",
      re: /fašírk|guľk|mleté|mletého|meatball|karbanát/i,
      text: "Mleté mäso zmiešaj so zvyškom surovín len do chvíle, kým to drží pokope. Čím dlhšie ho miesiš, tým viac " +
        "sa bielkoviny previažu a tým tuhšia a gumovejšia bude výsledná guľka.",
      hotovo: "Mleté mäso musí byť prepečené celé – 71 °C vnútri, nikde žiadna ružová.",
      pozor: "Ruky si namoč studenou vodou, cesto sa ti potom nelepí a guľky vytvaruješ hladké."
    },
    ryby: {
      nazov: "Ryba potrebuje menej času, než si myslíš",
      re: /losos|ryb[aeyiu]|tresk|tuniak|filety|filé/i,
      text: "Ryba sa na rozdiel od mäsa dopeká aj po odstavení a je hotová skôr, než vyzerá. Opekaj ju najprv zo strany kože, " +
        "a to väčšinu času – otoč ju až na poslednú minútu.",
      hotovo: "Mäso sa dá vidličkou ľahko rozdeliť na plátky a v strede je ešte o odtieň tmavšie. Lososu to vôbec nevadí.",
      pozor: "Prepečený losos je suchý a drobivý. Radšej ho z panvice ber o pol minúty skôr."
    },
    odpocinok: {
      nazov: "Odpočinok mäsa po dopečení",
      re: /odpočí|nechaj.*odpočin|steak|panenk|roštenk|hovädzie/i,
      text: "Pri pečení sa šťava stlačí do stredu kusa. Keď mäso rozrežeš hneď, vytečie na dosku. Päť až desať minút " +
        "pod voľne položenou alobalovou čiapkou stačí na to, aby sa šťava rozišla späť.",
      pozor: "Neprikrývaj natesno – pod tesným alobalom kôrka zmäkne a zvlhne."
    },

    /* ——— omáčky a dochucovanie ——— */
    dusenie: {
      nazov: "Zalej a nechaj prejsť: dusenie",
      re: /zalej|podlej|duste|dus\b|pod pokrievkou|prikry/i,
      text: "Keď zalievaš opečený základ, nalej tekutinu a vareškou poriadne poškriab dno panvice. Tie pripečené hnedé " +
        "kúsky sú koncentrovaná chuť a rozpustia sa do omáčky – bez toho prídeš o polovicu výsledku.",
      hotovo: "Omáčka má bublinkovať pomaly po okrajoch, nie divoko vrieť. Prudký var mäso vysuší aj v tekutine."
    },
    redukcia: {
      nazov: "Zahustenie odparením",
      re: /zhustne|zahustí|zredukuj|nechaj odpariť|vyvar/i,
      text: "Najjednoduchší spôsob, ako zahustiť omáčku, je nechať z nej odísť vodu – bez múky a bez škrobu. " +
        "Odkry panvicu, zvýš plameň a nechaj to bublať. Zároveň sa tým chuť zosilní.",
      hotovo: "Keď vareškou prejdeš po dne, stopa po nej na sekundu ostane prázdna a až potom sa zaleje.",
      pozor: "S odparovaním sa koncentruje aj soľ. Dosoľuj až na konci, nie na začiatku."
    },
    korenie: {
      nazov: "Soľ priebežne, nie až na tanieri",
      re: /okoreň|osoľ|soľou|korením|dochuť|dochutí/i,
      text: "Keď osolíš každú vrstvu počas varenia – mäso pred opekaním, zeleninu pri restovaní, omáčku na konci – " +
        "jedlo chutí celé. Keď všetku soľ pridáš nakoniec, cítiť slanosť navrchu a pod ňou mdlú chuť.",
      pozor: "Pri krabičkách dosoľ radšej menej. Soľ sa za dva dni v chladničke „rozleží“ a jedlo bude chutiť slanšie než v deň varenia."
    },
    bylinky: {
      nazov: "Sušené na začiatok, čerstvé na koniec",
      re: /bylink|petržlen|bazalk|koriand|pažítk|tymian|oregan|rozmarín/i,
      text: "Sušené bylinky potrebujú teplo a čas, aby sa rozvoňali – patria do omáčky na začiatku. Čerstvé naopak " +
        "teplom stratia všetko, čo majú, a tak idú do jedla až po odstavení.",
      pozor: "Do krabičiek čerstvé bylinky radšej nedávaj vopred – do tretieho dňa zhnednú. Posyp ich až pri ohrievaní."
    },
    pikantne: {
      nazov: "Pálivosť pridávaj po troškách",
      re: /chilli|čili|sriracha|pálivé|pikant|kajen|jalapeñ|feferón/i,
      text: "Pálivosť sa v hotovom jedle nedá stiahnuť späť, dá sa už len riediť. Pridaj polovicu, ochutnaj, " +
        "a dopaľuj až potom.",
      pozor: "V krabičke pálivosť cez noc zosilnie. Čo je v nedeľu akurát, je v stredu ostré – počítaj s tým."
    },

    /* ——— mliečne a vajcia ——— */
    jogurt: {
      nazov: "Jogurt a tvaroh sa v horúcom zrazia",
      re: /jogurt|tvaroh|smotan|kyslá smotana|créme|cottage/i,
      text: "Keď hodíš grécky jogurt do vrúcej omáčky, bielkovina sa zrazí a omáčka bude vyzerať ako zrazené mlieko. " +
        "Panvicu najprv odstav, nechaj ju pol minúty vychladnúť a jogurt vmiešaj až potom.",
      pozor: "Pomáha, keď si jogurt najprv rozmiešaš s pár lyžicami horúcej omáčky bokom v miske a túto zmes až potom vrátiš do panvice."
    },
    syr: {
      nazov: "Syr sa topí nízko a nakoniec",
      re: /syr|mozzarell|parmez|čedar|cheddar|gratin|zapeč/i,
      text: "Vysoké teplo zo syra vytlačí tuk a ostane gumová hmota plávajúca v mastnote. Strúhaný syr vmiešaj " +
        "do odstavenej omáčky alebo ho daj navrch až na posledných pár minút pečenia.",
      pozor: "Predstrúhaný syr z vrecka má v sebe protihrudkovací škrob a topí sa horšie. Blok a strúhadlo urobia veľký rozdiel."
    },
    vajcia: {
      nazov: "Vajcia znesú menej tepla, než im dávame",
      re: /vajc|vajíčk|praženic|omelet|volské oko/i,
      text: "Miešané vajcia robené na miernom plameni a s pokojným miešaním vyjdú krémové. Na vysokom plameni " +
        "z nich do pol minúty budú tuhé kúsky plávajúce vo vode, ktorú pustili.",
      hotovo: "Stiahni ich z platne, keď vyzerajú ešte trochu nedokončené – zvyškové teplo ich dorobí."
    },

    /* ——— krabičky ——— */
    chladnutie: {
      nazov: "Do krabičky až vychladnuté",
      re: /vychladnúť|vychladn|rozdeľ do krabič|do krabičiek|krabič/i,
      text: "Horúce jedlo v zatvorenej krabičke vytvorí paru, tá skondenzuje a steká späť. Výsledkom je mokré dno, " +
        "rozmočená príloha a kratšia trvanlivosť. Nechaj jedlo vychladnúť na izbovú teplotu, maximálne hodinu, a až potom zatvor a daj do chladničky.",
      pozor: "Zároveň to nenechávaj vonku dlhšie ako dve hodiny – medzi 5 a 60 °C sa baktériám darí najlepšie."
    },
    skladovanie: {
      nazov: "Ako dlho to naozaj vydrží",
      re: /chladnič|vydrží|dni v chlad|skladuj/i,
      text: "Uvarené mäso, strukoviny a obilniny v chladničke bez problémov vydržia tri až štyri dni, ryba dva. " +
        "Čo plánuješ jesť vo štvrtok a piatok, radšej hneď v nedeľu daj do mrazničky a v stredu večer prelož do chladničky.",
      pozor: "Krabičky si označ dátumom. Po troch dňoch už podľa pohľadu nespoznáš, ktorá je z ktorého varenia."
    },
    mikrovlnka: {
      nazov: "Ohrievanie v mikrovlnke bez vysušenia",
      re: /mikrovln|ohrej|ohriať|ohrievaj/i,
      text: "Mikrovlnka ohrieva nerovnomerne a vysušuje. Pokvapkaj jedlo lyžicou vody, prikry ho pokrievkou alebo " +
        "navlhčenou utierkou a ohrievaj na polovičný výkon dlhšie, než na plný krátko.",
      hotovo: "Po polovici času premiešaj a rozhrň jedlo do kruhu s jamkou v strede – zohreje sa rovnomerne.",
      pozor: "Mäso a prílohu daj radšej vedľa seba, nie na seba. Ryža navrchu mäsa vyschne skôr, než sa mäso ohreje."
    },

    /* ——— príprava ——— */
    krajanie: {
      nazov: "Rovnaká veľkosť je dôležitejšia než pekný tvar",
      re: /nakrájaj|nakrájan|pokrájaj|na kocky|na plátky|na prúžky|nasekaj/i,
      text: "Kúsky rovnakej veľkosti sú hotové naraz. Keď sú rôzne, menšie sa prepečú, kým väčšie dôjdu – " +
        "a to je najčastejší dôvod, prečo je v jednom jedle zelenina zároveň rozvarená aj tvrdá.",
      pozor: "Tvrdšia zelenina (mrkva, zeler, zemiak) patrí na menšie kúsky než mäkká (cuketa, paprika), aby sa stihla."
    },
    marinovanie: {
      nazov: "Marináda: kyslá krátko, olejová dlho",
      re: /marin|nalož|nechaj v chladnič.*hodin|cez noc/i,
      text: "Marináda s citrónom, octom alebo jogurtom mäso zmäkčuje, ale po pár hodinách ho začne robiť kašovitým – " +
        "tej stačí 30 minút až 2 hodiny. Olejová s korením a bylinkami môže pokojne pôsobiť cez noc.",
      pozor: "Mäso z marinády pred opekaním osuš. Mokré sa nezhnedne a cukor z marinády sa na panvici spáli."
    },
    zelenina: {
      nazov: "Zelenina má ostať zelená a pevná",
      re: /brokolic|špargľ|fazuľk|hrášok|špenát|blanšír|kel\b|kapust/i,
      text: "Zelená zelenina stráca farbu aj textúru veľmi rýchlo. Dve až tri minúty vo vriacej osolenej vode stačia; " +
        "potom ju hneď preleč studenou vodou, čím zastavíš varenie.",
      hotovo: "Farba je jasne zelená, nie olivová. Pri prepichnutí mierny odpor – nie mäkko ako maslo.",
      pozor: "Do krabičky ju radšej nechaj o chlp tvrdšiu, pri ohrievaní ešte zmäkne."
    },
    cesto: {
      nazov: "Cesto nemá rado teplo a ponáhľanie",
      re: /cesto|zamies|vymies|nechaj kysnúť|kysnut/i,
      text: "Po zamiesení nechaj cesto odpočívať – lepok sa uvoľní a cesto sa prestane sťahovať späť. " +
        "Pri kysnutí platí, že teplejšie miesto znamená rýchlejšie, ale menej chuti.",
      hotovo: "Vykysnuté cesto po zatlačení prstom pomaly dorovná jamku. Keď sa vráti okamžite, potrebuje ešte čas."
    },
    odmeranie: {
      nazov: "Keď nemáš váhu",
      re: /\bPL\b|\bČL\b|lyžic|lyžičk|hrsť|štipka/i,
      text: "Polievková lyžica je asi 15 ml, čajová 5 ml. V gramoch to vychádza rôzne podľa suroviny: " +
        "PL oleja ≈ 14 g, PL masla ≈ 14 g, PL medu ≈ 21 g, PL múky ≈ 8 g, PL ryže ≈ 15 g. Hrsť orechov býva okolo 30 g.",
      pozor: "Pri bielkovinách a tukoch sa odhadom dá dosť pomýliť. Keď ti záleží na makrách, tieto dve veci si odváž."
    }
  };

  const PORADIE = Object.keys(T);

  /* Nájde vysvetlenia pre jeden krok. `uz` je zoznam kľúčov,
     ktoré už v recepte zazneli – to isté nevysvetľujeme dvakrát. */
  function kuKroku(text, uz) {
    const out = [];
    for (const k of PORADIE) {
      if (uz && uz.includes(k)) continue;
      if (T[k].re.test(text)) { out.push(k); if (out.length === 2) break; }
    }
    return out;
  }

  /* Bezpečné vnútorné teploty – zobrazia sa, keď recept obsahuje daný druh mäsa */
  const TEPLOTY = [
    [/kuracie|kurac|morčac|morka|hydin/i, "Hydina", "74 °C"],
    [/mleté|fašírk|guľk|burger|meatball/i, "Mleté mäso", "71 °C"],
    [/bravčov|panenk/i, "Bravčové", "63 °C a 3 minúty odpočinku"],
    [/losos|ryb|tresk|tuniak/i, "Ryby", "63 °C alebo kým sa nerozpadá na plátky"],
    [/hovädz|steak|roštenk/i, "Hovädzí steak", "medium rare 55–60 °C, medium 60–65 °C"]
  ];
  function teplotyReceptu(r) {
    const t = (r.ing.join(" ") + " " + r.n).toLowerCase();
    return TEPLOTY.filter(([re]) => re.test(t)).map(([, nazov, tep]) => ({ nazov, tep }));
  }

  window.TECHNIKY = { T, kuKroku, teplotyReceptu };
})();
