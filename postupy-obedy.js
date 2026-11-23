/* Rozpísané postupy k obedom do krabičky.
   Kroky z ebookov sú telegrafické – tu je to isté poradie a tie isté suroviny,
   len rozpísané tak, ako by to vysvetlil niekto, kto stojí vedľa teba.
   Nič sa nepridáva ani nemení, len sa dopĺňajú časy, teploty a to,
   podľa čoho spoznáš, že krok je hotový.
   Kľúč je id receptu; recepty, ktoré tu nie sú, ukážu vysvetlenia z techniky.js. */
(function () {
  "use strict";

  window.POSTUPY = {

    ck11: [
      "Ryžu daj do sitka a prepláchni ju pod studenou vodou, kým z nej netečie skoro čistá voda. Zmyješ tým škrob, ktorý by ju zlepil do kaše. Potom ju daj variť do osolenej vody podľa návodu na obale – väčšinou 10 až 12 minút pod pokrievkou na najmenšom plameni.",
      "Kým sa ryža varí, rozober brokolicu na ružičky veľké asi ako orech. Hoď ich do vriacej osolenej vody a var presne päť minút. Majú ostať jasne zelené a pri prepichnutí mierne pružiť – do krabičky ich radšej nechaj o chlp tvrdšie, pri ohrievaní ešte zmäknú. Hneď ich zlej a prepláchni studenou vodou, tým zastavíš varenie.",
      "Kuracie prsia nakrájaj na plátky hrubé asi centimeter alebo na rovnako veľké kocky. Osuš ich papierovou utierkou – mokré mäso nezhnedne, len sa dusí. Potom osoľ a posyp mletou paprikou a čiernym korením.",
      "Panvicu nechaj na strednom až vyššom plameni dve minúty bez ničoho, až potom nalej olej. Keď sa olej po naklonení panvice rozbehne ako voda, rozlož mäso v jednej vrstve tak, aby sa kúsky nedotýkali. Ak sa ti tam nezmestia, opeč ich radšej na dvakrát.",
      "Prvých 90 sekúnd sa mäsa nedotýkaj – vtedy sa robí hnedá kôrka. Keď sa kúsky od panvice samy pustia, obráť ich a dopekaj. Celé to trvá asi osem minút; kuracie je hotové, keď je šťava po prepichnutí číra a nie ružová.",
      "Nechaj všetko vychladnúť na izbovú teplotu, maximálne hodinu, a až potom rozdeľ ryžu, mäso a brokolicu do dvoch krabičiek. Horúce jedlo v zatvorenej krabičke pustí paru, tá steká späť a do druhého dňa máš mokré dno."
    ],

    ck12: [
      "Rúru zapni na 200 °C a nechaj ju hriať aspoň desať minút. Kontrolka zhasne skôr, než je rúra naozaj pripravená, a keď dáš plech dnu priskoro, časy v recepte prestanú platiť.",
      "Bataty ošúp a nakrájaj na kocky zhruba dva centimetre – dôležitejšie než pekný tvar je, aby boli všetky rovnaké, inak sa menšie spália, kým väčšie dôjdu. Pokvapkaj ich polovicou oleja, osoľ a rozhádž po plechu tak, aby medzi nimi bolo vidieť papier. Natlačené kocky pustia vodu a upečú sa mäkké a bledé.",
      "V miske zmiešaj rukami mleté morčacie mäso, vajce, soľ a sušený cesnak. Miešaj len dovtedy, kým to drží pokope – čím dlhšie to miesiš, tým tuhšia a gumovejšia bude guľka.",
      "Ruky si namoč studenou vodou, cesto sa ti potom nebude lepiť, a vyformuj stredne veľké guľky zhruba ako vlašský orech. Z tohto množstva ich vyjde okolo desiatich.",
      "Guľky poukladaj na plech vedľa batatov, zase tak, aby sa nedotýkali. Ak nemáš miesto, dopeč ich radšej na panvici s druhou polovicou oleja.",
      "Peč všetko spolu 25 minút. Hotové je to, keď sú guľky vnútri úplne bez ružovej (mleté mäso potrebuje 71 °C) a batáty sa dajú prepichnúť nožom bez odporu, pričom na okrajoch sú tmavšie.",
      "Nechaj vychladnúť a rozdeľ do dvoch krabičiek."
    ],

    ck13: [
      "Rezance daj do misky, zalej ich vriacou vodou tak, aby boli celé ponorené, a nechaj zmäknúť podľa návodu – ryžové potrebujú zvyčajne 4 až 5 minút, soba o niečo viac. Potom ich zlej do sitka a prepláchni studenou vodou, aby sa ti neskôr nezlepili do jednej hrudy.",
      "Kuracie prsia nakrájaj na tenké rezance hrubé pol centimetra a osuš ich. Panvicu rozpáľ nasucho – mäso má dosť vlastného tuku – a rozlož kúsky v jednej vrstve.",
      "Nechaj ich chvíľu ležať bez miešania, kým zospodu nezhnednú, a až potom prehadzuj. Keď je mäso opečené dozlatista, prisyp mrazenú zeleninu a dus päť minút, kým sa nerozmrazí a neprehreje.",
      "Kým sa to dusí, v malej miske rozmiešaj arašidové maslo so sójovou omáčkou a prilej dve až tri lyžice horúcej vody. Miešaj, kým nevznikne hladká, tekutá omáčka – samotné arašidové maslo by sa v panvici len zhrudkovalo.",
      "Do panvice k mäsu pridaj rezance, zalej omáčkou a minútu poriadne premiešavaj, kým sa všetko neobalí. Ochutnaj a dosoľ len opatrne, sójová omáčka je už sama o sebe slaná.",
      "Nechaj vychladnúť a zabaľ do krabičiek. Pri ohrievaní v mikrovlnke pokvapkaj rezance lyžicou vody a prikry, inak vyschnú."
    ],

    ck14: [
      "Kuskus nasyp do misky, mierne osoľ a zalej vriacou vodou tak, aby hladina siahala tesne nad jeho povrch – zhruba jeden a pol diela vody na diel kuskusu. Prikry tanierom a nechaj päť minút stáť. Potom ho prevzdušni vidličkou, nie lyžicou, aby sa nezrazil do hrudy.",
      "Morčacie mäso nakrájaj na kocky asi dva centimetre, osuš papierovou utierkou a posyp grilovacím korením. Nechaj ho chvíľu postáť, nech korenie prilne.",
      "Panvicu rozpáľ, nalej olej a keď je tekutý ako voda, rozlož mäso v jednej vrstve. Prvú minútu a pol sa ho nedotýkaj.",
      "Po piatich minútach, keď je mäso zo všetkých strán opečené, pridaj cuketu a papriku nakrájané na kocky. Cuketu daj na väčšie kúsky než papriku – je mäkšia a rozvarila by sa skôr. Restuj spolu ďalších päť minút do zmäknutia.",
      "Nechaj vychladnúť, do krabičiek naporcuj kuskus, navrch mäso so zeleninou a celkom nakoniec rozmrv syr Feta. Feta sa nemá zapiecť ani ohriať, pri servírovaní z nej ostane príjemne slaný kontrast."
    ],

    ck15: [
      "Ryžu prepláchni a daj variť do osolenej vody podľa návodu. Kým sa varí, kuracie prsia polož na dosku, polož na ne dlaň a ostrým nožom ich prekroj naplocho na dva tenšie plátky. Tenší plátok sa prepečie rovnomerne, hrubý je zvonku suchý a vnútri surový.",
      "Plátky osuš, osoľ a posyp mletou rascou a korením.",
      "Na panvici rozpusť čajovú lyžičku masla a keď prestane peniť, polož doň kuracie plátky. Opekaj ich z každej strany tri až štyri minúty dozlatista a vyber na tanier. Z panvice ich neumývaj – tie pripečené hnedé kúsky na dne sú základ omáčky.",
      "Šampiňóny nakrájaj na plátky a hoď ich do tej istej panvice. Osoľ ich hneď, soľ z nich vytiahne vodu. Restuj, kým sa voda neodparí a huby nezačnú chytať farbu – to trvá päť až sedem minút a nedá sa to uponáhľať.",
      "Zalej smotanou a vareškou poriadne poškriab dno panvice, aby sa všetok výpek rozpustil do omáčky. Nechaj minútu prebublať, kým trochu nezhustne.",
      "Vráť mäso aj so šťavou, ktorá z neho na tanieri vytiekla, prehrej a odstav. Nechaj vychladnúť a rozdeľ do krabičiek spolu s ryžou – mäso s omáčkou daj radšej vedľa ryže, nie na ňu, nech ryža nerozmočí."
    ],

    ck16: [
      "Rúru zapni na 200 °C. Zemiaky ošúp a nakrájaj na menšie kocky, všetky rovnako veľké, osoľ ich a rozlož na plech vystlaný papierom na pečenie. Daj im na plechu miesto – natlačené zemiaky sa dusia a nikdy nebudú chrumkavé.",
      "Kuracie prsia prekroj pozdĺžne na tenšie rezne, osuš ich, osoľ a okoreň. Polož ich na plech vedľa zemiakov, nie na ne.",
      "Daj piecť na 15 minút. Zemiaky majú za ten čas začať chytať farbu na spodnej strane.",
      "Plech vyber, na každý kus mäsa ulož plátky mozzarelly a navrch prekrojené cherry paradajky. Posyp bazalkou. Syr sa dáva až teraz – keby bol v rúre od začiatku, vytlačí sa z neho tuk a ostane gumová hmota plávajúca v mastnote.",
      "Vráť do rúry na ďalších desať minút, kým sa syr neroztopí a nezačne bublať a zemiaky nie sú mäkké. Kuracie je hotové pri 74 °C vnútri.",
      "Nechaj vychladnúť a rozdeľ do dvoch krabičiek."
    ],

    ck18: [
      "Ryžu daj variť podľa návodu na obale. Cibuľu a cesnak nasekaj nadrobno, ale drž ich bokom od seba – cesnak ide do panvice oveľa neskôr než cibuľa.",
      "Panvicu rozpáľ nasucho, mleté morčacie pustí dosť vlastného tuku. Najprv hoď dnu cibuľu a restuj ju tri až päť minút na strednom plameni, kým nestratí bielu farbu a nezačne byť priehľadná. Vtedy už nie je štipľavá, ale sladkastá.",
      "Pridaj cesnak a hneď za ním mleté mäso. Cesnaku stačí necelá minúta, spálený je nepríjemne horký a tú horkosť už z omáčky nedostaneš. Mäso rozhabarkaj vareškou a restuj, kým úplne nezhnedne a nestratí ružovú farbu.",
      "Zasyp chilli korením a sladkou paprikou a nechaj ich pol minúty opražiť v tuku – sušené koreniny potrebujú teplo, aby sa rozvoňali. Potom zalej lúpanými paradajkami a roztlač ich vareškou.",
      "Dus na miernom ohni desať minút. Omáčka má pomaly bublinkovať po okrajoch, nie divoko vrieť. Je hotová, keď po prejdení vareškou po dne stopa na sekundu ostane prázdna.",
      "Fazuľu z konzervy preklop do sitka a prepláchni studenou vodou, kým neprestane peniť – nálev je slaný, škrobový a je hlavný dôvod nadúvania. Pridaj ju do panvice, nechaj dve minúty prehriať a dochuť soľou.",
      "Nechaj vychladnúť a naporcuj do krabičiek s ryžou. Soľ sa za dva dni v chladničke rozleží, takže radšej osoľ menej, než by si chcel dnes."
    ],

    ck19: [
      "Rúru zapni na 200 °C. Bataty ošúp a nakrájaj na hranolky hrubé asi centimeter a pol. Pokvapkaj ich olejom, osoľ a rozlož na plech v jednej vrstve – keď sa dotýkajú, voda z nich nemá kam odísť a ostanú mäkké.",
      "Vykostené kuracie stehná osuš papierovou utierkou a poriadne ich zo všetkých strán vtieraj do zmesi korenia na pečené kura. Stehná majú viac tuku než prsia, takže znesú výraznejšie korenie aj dlhšie pečenie bez toho, aby vyschli.",
      "Mäso ulož na plech k batátom, kožnou stranou nahor, nech sa na nej urobí chrumkavá vrstva.",
      "Peč 25 až 30 minút. Hotové je to, keď je mäso pri kosti bez ružovej a šťava z neho vyteká číra, zatiaľ čo bataty majú na okrajoch tmavé, pripečené hrany.",
      "Nechaj vychladnúť, rozdeľ do krabičiek a upečené batáty posyp rozmrvenou Fetou až na záver."
    ],

    ck20: [
      "Daj variť veľký hrniec vody – na 150 g cestovín počítaj aspoň liter a a pol – a keď naplno vrie, osoľ ju poriadnou lyžicou soli. Cestoviny sa dochucujú zvnútra a na vode ani soli sa tu neoplatí šetriť. Olej do vody nedávaj, omáčka by sa cestovín potom nechytila.",
      "Cestoviny var o minútu kratšie, než hovorí obal – dovaria sa na panvici a v krabičke do druhého dňa ešte zmäknú. Tesne pred zliatím naber do hrnčeka pol deci vody z varenia, tým sa dá pesto krásne spojiť.",
      "Kuracie prsia nakrájaj na kocky, osuš, osoľ a okoreň. Panvicu rozpáľ nasucho a rozlož mäso v jednej vrstve.",
      "Nechaj ho minútu a pol bez dotyku, aby sa urobila kôrka, potom prehadzuj a dopekaj dozlatista. Celé to trvá okolo šiestich minút.",
      "Stiahni plameň na minimum a až potom pridaj uvarené cestoviny, pesto, prekrojené cherry paradajky a trochu odloženej vody. Pesto nemá zovrieť, na vysokom teple stratí farbu aj vôňu.",
      "Premiešavaj, kým pesto neobalí každú cestovinu a omáčka sa nespojí – keď je priveľmi hustá, prilej ešte trochu vody z varenia. Nechaj vychladnúť a rozdeľ do krabičiek."
    ],

    ck21: [
      "Ryžu daj variť do osolenej vody podľa návodu, nech je hotová, keď bude mäso na panvici – tomuto jedlu trvá všetko dokopy pätnásť minút.",
      "Hovädzie mäso nakrájaj na tenké, krátke rezančeky naprieč vláknami. Naprieč je dôležité: keď krájaš po vlákne, mäso ostane tuhé aj po uvarení. Zľahka ho okoreň, ale zatiaľ nesoľ – soľ z neho vytiahne vodu a nezhnedne.",
      "Panvicu rozpáľ naozaj poriadne, nechaj ju na vyššom plameni dve minúty a až potom nalej olej. Kvapka vody musí na nej hneď zasyčať.",
      "Mäso rozlož v jednej vrstve a opekaj len tri až štyri minúty. Hovädzie na tenké rezance potrebuje prudko a krátko – keď ho prepečieš, bude gumené. Ak sa ti nezmestí naraz, urob to na dvakrát, inak teplota spadne a mäso sa začne dusiť vo vlastnej šťave.",
      "Prisyp mrazenú ázijskú zeleninu a opekaj ďalšie tri minúty, kým sa neprehreje a nestratí vodu.",
      "Zalej sójovou omáčkou, poriadne premiešaj a hneď odstav – od tejto chvíle sa už len prehrieva. Dosoľ až po ochutnaní. Nechaj vychladnúť a rozdeľ do krabičiek s ryžou."
    ],

    ck22: [
      "Rúru zapni na 200 °C. Bataty ošúp, nakrájaj na rovnaké kocky, pokvapkaj polovicou oleja, osoľ a rozlož na plech tak, aby mali okolo seba miesto.",
      "V miske zmiešaj mleté hovädzie so soľou, sušeným cesnakom a čiernym korením. Miešaj len dovtedy, kým sa suroviny spoja – dlhé miesenie urobí fašírku tuhou a gumovou.",
      "Namoč si ruky studenou vodou a vytvaruj štyri až šesť hrubších fašírok. Do stredu každej zatlač palcom plytkú jamku; fašírka sa pri pečení nevyklenie do gule a upečie sa rovnomerne.",
      "Fašírky potri zvyšným olejom a ulož na plech vedľa batatov.",
      "Peč všetko spolu 20 až 25 minút. Mleté hovädzie musí byť prepečené celé, nikde žiadna ružová – to je 71 °C vnútri.",
      "Mäso pustí počas pečenia šťavu s rozpustenou paprikou a cesnakom. Nelej ju preč, polej ňou v krabičke zemiaky. Všetko nechaj vychladnúť a až potom zatvor."
    ],

    ck23: [
      "Ryžu uvar v osolenej vode do mäkka. Fazuľové lusky hoď do vriacej osolenej vody a var presne päť minút – majú ostať jasne zelené a pri zahryznutí mierne chrumkať. Hneď ich zlej a prepláchni studenou vodou, aby sa dovarením nezmenili na olivovo zelenú kašu.",
      "Bravčové karé nakrájaj na plátky hrubé asi centimeter, polož medzi dve fólie a jemne naklep – nie na placku, len aby mali všade rovnakú hrúbku. Potom ich osuš, osoľ a posyp mletou rascou a korením.",
      "Panvicu rozpáľ, nalej olej a keď sa rozbehne po dne ako voda, polož naň mäso. Nechaj ho ležať, kým sa samo od panvice nepustí.",
      "Opekaj zhruba štyri minúty z každej strany dozlatista. Bravčové karé je hotové pri 63 °C vnútri – prepečené dosucha stratí všetku šťavu.",
      "Mäso vyber na dosku a do výpeku, ktorý ostal na panvici, hoď na minútu uvarené fazuľky. Poprehadzuj ich, nech naberú chuť z výpeku.",
      "Nechaj všetko vychladnúť a rozdeľ do krabičiek k ryži."
    ],

    ck24: [
      "Kuskus nasyp do misky, zasoľ, zalej vriacou vodou tesne nad jeho povrch, prikry tanierom a nechaj päť minút napučať. Potom ho prevzdušni vidličkou.",
      "Panvicu rozpáľ, nalej olej a pridaj mleté hovädzie. Rozhabarkaj ho vareškou na menšie kúsky a nechaj zhnednúť – nemieš ho stále dookola, nech má čas chytiť farbu. Keď stratí ružovú, je pripravené.",
      "Cuketu nakrájaj na malé kocky a pridaj k mäsu. Restuj spolu päť minút, kým cuketa nezmäkne a voda, ktorú pustí, sa neodparí.",
      "Prilej lúpané paradajky, roztlač ich vareškou, osoľ a zasyp oreganom. Sušené bylinky patria do omáčky na začiatku dusenia, majú čas sa rozvoňať.",
      "Dus na miernom ohni ďalších päť minút, kým omáčka nezhustne a neprestane byť vodnatá.",
      "Nechaj vychladnúť a v krabičkách daj mäsovú zmes vedľa kuskusu, nie naň – kuskus by sa rozmočil."
    ],

    ck25: [
      "Ryžu uvar vo vode podľa návodu a nechaj ju bokom pod pokrievkou.",
      "Panvicu rozpáľ nasucho, mleté hovädzie pustí dosť vlastného tuku. Mäso rozhabarkaj vareškou a nechaj ho zhnednúť dohneda – nie len zošednúť. Práve tá hnedá farba je rozdiel medzi chilli, ktoré chutí, a chilli, ktoré je mdlé.",
      "Zasyp chilli korením a sladkou paprikou a pol minúty ich opraž priamo v tuku, kým nezačnú voňať.",
      "Zalej lúpanými paradajkami, roztlač ich a nechaj na miernom ohni desať minút zhustnúť. Odkrytú panvicu a pomalé bublanie – voda sa odparí a chuť sa zosilní bez akéhokoľvek zahusťovadla.",
      "Fazuľu aj kukuricu preklop do sitka a prepláchni studenou vodou, kým nálev neprestane peniť. Potom ich vmiešaj do omáčky a nechaj dve minúty prehriať.",
      "Ochutnaj a dosoľ opatrne – soľ sa pri odparovaní skoncentrovala a v chladničke sa za dva dni ešte rozleží. To isté platí o pálivosti, v stredu bude chilli ostrejšie než v nedeľu.",
      "Nechaj vychladnúť a naporciuj do krabičiek k ryži."
    ],

    ck27: [
      "Rúru zapni na 200 °C a nechaj ju poriadne prehriať. Zemiaky ošúp, nakrájaj na mesiačiky, pokvapkaj polovicou oleja, osoľ a rozlož na plech. Pred pečením ich osuš – mokré zemiaky nikdy nebudú chrumkavé.",
      "Bravčovú panenku nechaj v celku, osuš papierovou utierkou, potri druhou polovicou oleja, osoľ a obaľ v zmesi korenia na pečené mäso.",
      "Panvicu rozpáľ naozaj dohoráca a panenku na nej sprudka opeč zo všetkých strán dohneda. Nejde o to upiecť ju, ide o kôrku – tá dodá chuť, ktorú by si v rúre nikdy nedosiahol. Každá strana potrebuje asi minútu a pol a medzitým sa mäsa nedotýkaj.",
      "Opečenú panenku prelož na plech k zemiakom a peč asi 20 minút.",
      "Na posledných päť minút prihoď k zemiakom cherry paradajky. Dlhšie by sa rozpadli na kašu.",
      "Mäso vyber a nechaj ho päť až desať minút odpočívať pod voľne položeným alobalom – nie natesno, inak kôrka zvlhne. Počas pečenia sa šťava stlačila do stredu a teraz sa rozíde späť. Až potom ho nakrájaj na medailóniky.",
      "Nechaj vychladnúť a rozdeľ do krabičiek."
    ],

    ck28: [
      "Ryžu uvar podľa návodu. Brokolicu rozober na ružičky a var vo vriacej osolenej vode asi päť minút, potom ju zlej a prepláchni studenou vodou.",
      "Mäso vyber z chladničky aspoň pätnásť minút pred pečením, ideálne aj pol hodiny. Studený steak má v strede ľadové jadro a kým sa prepečie dnu, zvonku je spálený.",
      "Steak osuš papierovou utierkou a poriadne ho zo všetkých strán posyp hrubozrnnou soľou a čerstvo mletým korením. Suchý povrch je podmienka toho, aby zhnedol.",
      "Panvicu rozpáľ naozaj dohoráca a daj na ňu maslo. Keď prestane peniť a začne voňať orieškovo, polož naň steaky a tri až štyri minúty sa ich nedotýkaj.",
      "Obráť a opekaj rovnako dlho z druhej strany. Medium rare je 55 až 60 °C vnútri, medium 60 až 65 °C. Bez teplomera: medium rare je na dotyk pružné ako brucho palca, keď sa dotkneš palcom prostredníka.",
      "Steak odlož na dosku a nechaj ho päť minút odpočívať. Keď ho rozrežeš hneď, šťava ti vytečie na dosku namiesto toho, aby ostala v mäse.",
      "Nakrájaj na plátky naprieč vláknami, nechaj vychladnúť a rozdeľ do krabičiek k ryži a brokolici."
    ],

    ck29: [
      "Cestoviny uvar vo veľkom hrnci dobre osolenej vody, o minútu kratšie, než hovorí obal.",
      "Hovädzie rezance osuš a panvicu rozpáľ s olejom dohoráca. Mäso rozlož v jednej vrstve a nechaj ho zatiahnuť bez miešania – ak dáš dnu všetko naraz a hneď prehadzuješ, pustí vodu a budeš ho dusiť.",
      "Keď je mäso zo všetkých strán zatiahnuté, osoľ, okoreň a pridaj drvenú rascu. Rasca sa krátko opraží v tuku a rozvonia.",
      "Šampiňóny nakrájaj na plátky a pridaj do panvice. Restuj, kým nepustia vodu a tá sa úplne neodparí – až potom začnú huby chytať farbu a to je tá chuť, o ktorú tu ide. Trvá to päť až sedem minút.",
      "Podlej trochou vody alebo hovädzieho vývaru a vareškou poškriab dno panvice, nech sa výpek rozpustí. Povar ešte päť minút, kým omáčka trochu nezhustne.",
      "Nechaj vychladnúť a daj mäso s omáčkou do krabičiek na cestoviny."
    ],

    ck30: [
      "Cestoviny uvar v osolenej vode o minútu kratšie, než hovorí obal, a zlej.",
      "Z mletého mäsa, soli a korenia vyformuj menšie guľky veľké asi ako vlašský orech. Zmes miešaj len dovtedy, kým drží pokope, a ruky si namoč studenou vodou, nebude sa ti lepiť.",
      "Cesnak pretlač. Na panvici rozohrej olej, hoď doň cesnak a hneď za ním guľky – cesnaku stačí pol minúty, spálený by celú omáčku pokazil horkosťou.",
      "Guľky opekaj zo všetkých strán, kým nezhnednú. Nesnaž sa ich prepiecť, dovaria sa v omáčke. Otáčaj ich opatrne, aby sa nerozpadli.",
      "Zalej lúpanými paradajkami, roztlač ich vareškou na omáčku, pridaj oregano a soľ. Vareškou poškriab dno, nech sa výpek dostane do omáčky.",
      "Prikry pokrievkou a dus na miernom ohni 10 až 15 minút. Omáčka má pomaly bublinkovať po okrajoch. Guľky sú hotové, keď sú vnútri bez ružovej.",
      "Nechaj vychladnúť a v krabičke dávaj guľky s omáčkou na uvarené cestoviny."
    ],

    ck31: [
      "Ryžu uvar v osolenej vode podľa návodu. Rúru zapni na 200 °C.",
      "Špargľu umy a chyť každý výhonok za oba konce – pri ohnutí sa sám zlomí presne tam, kde končí drevnatá časť. Tú spodnú vyhoď. Potom špargľu pokvapkaj olejom a osoľ.",
      "Lososa osuš papierovou utierkou, osoľ a okoreň. Poukladaj ho na plech kožou nadol a špargľu rozlož vedľa neho.",
      "Peč 12 až 15 minút. Losos je hotový skôr, než vyzerá, a po vybratí z rúry sa ešte chvíľu dopeká. Je akurát, keď sa dá vidličkou ľahko rozdeliť na plátky a v strede je ešte o odtieň tmavší – prepečený losos je suchý a drobivý.",
      "Nechaj vychladnúť, rozdeľ do dvoch krabičiek s ryžou a pokvapkaj citrónovou šťavou. Rybu v chladničke zjedz do dvoch dní, nie do štyroch ako mäso."
    ],

    ck33: [
      "Rezance zalej vriacou vodou, nechaj zmäknúť podľa návodu a zlej. Prepláchni ich studenou vodou, aby sa nezlepili.",
      "Krevety nechaj rozmraziť a potom ich poriadne osuš papierovou utierkou. Mokré krevety sa v panvici len varia vo vlastnej vode a ostanú gumové.",
      "Cesnak pretlač. Na panvici rozpáľ maslo spolu s olejom – samotné maslo by sa pri tejto teplote spálilo, olej mu pomôže to vydržať.",
      "Hoď dnu cesnak a hneď za ním krevety. Opekaj len dve až tri minúty, kým nie sú ružové a nestratia priehľadnosť. Krevety sú hotové skoro okamžite; keď ich prepečieš, scvrknú sa na gumu.",
      "Pridaj baby špenát a uvarené rezance a premiešavaj, kým špenát nezvädne – to trvá pár sekúnd, špenát sa scvrkne na zlomok objemu.",
      "Dochuť soľou a korením, nechaj vychladnúť a rozdeľ do krabičiek. Krevety v chladničke vydržia dva dni."
    ],

    ck34: [
      "Rúru zapni na 200 °C. Zemiaky nakrájaj na mesiačiky, osuš, pokvapkaj olejom, osoľ a rozlož na plech tak, aby mali okolo seba miesto. Peč 25 minút.",
      "Filety pstruha osuš papierovou utierkou – hlavne kožu, tá musí byť úplne suchá, inak nebude chrumkavá. Osoľ ich a okoreň až tesne pred pečením. Petržlenovú vňať nasekaj nadrobno a odlož bokom.",
      "Na panvici rozpáľ maslo a keď prestane peniť, polož filety kožou nadol. Pritlač ich na pár sekúnd obracačkou, aby sa koža nezvlnila a dotýkala sa panvice celou plochou.",
      "Opekaj kožou nadol asi štyri minúty – väčšinu času strávi ryba na tejto strane. Uvidíš, ako sa mäso od spodku nahor mení z priehľadného na biele.",
      "Otoč a dopeč len dve minúty. Potom odstav a vmiešaj petržlenovú vňať do masla na panvici – čerstvé bylinky idú do jedla až po odstavení, teplom by stratili všetko.",
      "Nechaj vychladnúť a rybu s upečenými zemiakmi rozdeľ do krabičiek."
    ],

    ck35: [
      "Kuskus zalej vriacou vodou tesne nad jeho povrch, prikry a nechaj päť minút napučať. Potom ho prevzdušni vidličkou.",
      "V miske zmiešaj mletého lososa, vajce, nasekané bylinky, nastrúhanú citrónovú kôru a štipku soli. Miešaj len dovtedy, kým to drží pokope.",
      "Namoč si ruky studenou vodou a vyformuj menšie guľky. Ak sa ti zmes rozpadáva, daj ju na desať minút do chladničky – stuhne a bude sa s ňou pracovať lepšie.",
      "Na panvici rozohrej olej a guľky opekaj zo všetkých strán do zlatista, asi desať minút dokopy. Otáčaj ich opatrne, rybacie guľky sú krehkejšie než mäsové.",
      "Nechaj vychladnúť, do krabičiek nalož kuskus a navrch ulož guľky. Zjedz ich do dvoch dní."
    ],

    ck36: [
      "Ryžu uvar v osolenej vode. Mrazenú zeleninu prelej horúcou vodou, aby sa rozmrazila a zbavila ľadu – inak by ti v panvici pustila vodu a všetko by sa dusilo.",
      "Krevety osuš papierovou utierkou. Panvicu rozpáľ a nalej sezamový olej.",
      "Hoď dnu krevety, posyp cesnakovým práškom a opekaj tri minúty, kým nie sú ružové. Dlhšie nie – krevety sa prepečením scvrknú a stvrdnú.",
      "Prisyp zeleninu, zalej sójovou omáčkou a premiešavaj ďalšie dve minúty, len aby sa všetko prehrialo.",
      "Ochutnaj a dosoľ opatrne, sójová omáčka je slaná sama o sebe.",
      "Nechaj vychladnúť a zmes buď zmiešaj s ryžou, alebo ju v krabičke daj vedľa nej – vedľa ostane ryža sypkejšia."
    ],

    ck37: [
      "Rúru zapni na 200 °C. Bataty nakrájaj na hranolky, pokvapkaj olejom, osoľ a peč na plechu 20 minút, rozložené tak, aby sa nedotýkali.",
      "Tuniakové steaky poriadne osuš papierovou utierkou z oboch strán. Pri tuniakovi to platí dvojnásobne – vlhký povrch znamená, že namiesto kôrky dostaneš sivé, vysušené mäso.",
      "Osoľ a okoreň ich až tesne pred pečením a panvicu rozpáľ naozaj dohoráca. Kvapka vody na nej musí okamžite zasyčať.",
      "Opekaj tuniaka presne minútu a pol až dve minúty z každej strany. Viac nie. Má ostať v strede ružový – prepečený tuniak je suchý a tuhý ako konzerva.",
      "Nechaj mäso minútu postáť, nakrájaj na plátky naprieč vláknami a ulož do krabičiek k pečeným batátom. Rybu zjedz do dvoch dní."
    ],

    ck38: [
      "Zemiaky umy a uvar ich v šupke v osolenej vode. Daj ich do studenej vody a až potom zapni platňu – keď ich hodíš do vriacej, povrch sa rozvarí skôr, než bude stred mäkký. Hotové sú, keď do nich nôž vojde bez odporu, asi po 20 minútach podľa veľkosti.",
      "Uvarené zemiaky nechaj trochu vychladnúť, ošúp ich a nakrájaj na kolieska hrubé pol centimetra. Teplé sa šúpu ľahšie, ale horúce sa ti rozpadnú.",
      "Filety tresky osuš papierovou utierkou, osoľ, okoreň a posyp mletou červenou paprikou.",
      "Do zapekacej misy alebo rovno do sklenených krabičiek vhodných do rúry poukladaj vrstvu zemiakových koliesok tak, aby sa prekrývali ako škridle. Na ne ulož tresku a navrch rovnomerne posyp nastrúhaným eidamom.",
      "Peč pri 190 °C asi 20 minút. Hotové je to, keď je syr roztopený, miestami zlatohnedý a treska sa dá vidličkou ľahko rozdeliť na plátky.",
      "Nechaj vychladnúť a zatvor. Rybu zjedz do dvoch dní, nie do štyroch ako mäso."
    ],

    ck39: [
      "Cestoviny uvar vo veľkom hrnci dobre osolenej vody o minútu kratšie, než hovorí obal. Morské plody nechaj úplne rozmraziť a potom ich poriadne osuš papierovou utierkou – mrazené pustia v panvici toľko vody, že sa budú variť namiesto opekať.",
      "Cesnak pretlač. Na panvici rozohrej olej a cesnak v ňom orestuj len pol minúty, kým nezačne voňať. Spálený cesnak je horký a tú horkosť už z omáčky nedostaneš.",
      "Pridaj morské plody a opekaj len tri minúty. Sú hotové skoro okamžite – kalamáre a krevety sa prepečením zmenia na gumu.",
      "Zalej lúpanými paradajkami, roztlač ich vareškou, pridaj bazalku, soľ a korenie. Povar na miernom ohni päť minút, kým omáčka nezhustne.",
      "Vmiešaj uvarené cestoviny, premiešaj, aby sa obalili, a odstav.",
      "Nechaj vychladnúť a rozdeľ do krabičiek. Morské plody zjedz do dvoch dní."
    ],

    ck40: [
      "Quinou daj do jemného sitka a prepláchni ju horúcou vodou. Má na povrchu horkú vrstvičku, ktorá sa inak dostane do celého jedla. Potom ju uvar v dvojnásobnom množstve osolenej vody 12 až 15 minút, kým nie sú zrnká priehľadné a nevyklíči z nich biela špirálka.",
      "Rúru zapni na 200 °C. Cuketu nakrájaj na polmesiačiky hrubé pol centimetra – tenšie by sa rozpadli.",
      "Lososa osuš papierovou utierkou, osoľ a posyp citrónovým korením.",
      "Na plech s papierom na pečenie polož lososa kožou nadol a vedľa neho rozlož cuketu v jednej vrstve. Všetko pokvapkaj olejom.",
      "Peč 15 minút. Losos je hotový, keď sa dá vidličkou ľahko rozdeliť na plátky a v strede je ešte o odtieň tmavší – po vybratí z rúry sa ešte chvíľu dopeká.",
      "Nechaj vychladnúť a rozdeľ do krabičiek s quinoou. Zjedz do dvoch dní."
    ],

    ck41: [
      "Rúru zapni na 200 °C a nechaj ju hriať aspoň desať minút. Zemiaky ošúp a nakrájaj na mesiačiky, kuracie prsia na väčšie kocky asi tri centimetre. Zemiaky daj na menšie kúsky než mäso – potrebujú dlhšie.",
      "Mäso aj zemiaky osuš a rozlož na plech vystlaný papierom na pečenie. Rozhádž ich tak, aby medzi kúskami bolo vidieť papier. Keby boli natlačené, voda z nich nemá kam odísť a všetko sa upečie bledé a mäkké.",
      "Pokvapkaj olivovým olejom, osoľ, okoreň a posyp mletou paprikou. Premiešaj rukami priamo na plechu, aby bol každý kúsok obalený, a potom ich znova rozlož do jednej vrstvy.",
      "Peč približne 30 minút. V polovici plech vyber a kúsky poprehadzuj obracačkou, nech zhnednú aj zospodu.",
      "Hotové je to, keď sú zemiaky na okrajoch tmavé a dajú sa prepichnúť bez odporu, a kuracie má vnútri 74 °C.",
      "Nechaj vychladnúť a rozdeľ do krabičiek."
    ],

    ck42: [
      "Rúru zapni na 200 °C. Zemiaky nakrájaj na kocky zhruba dva centimetre a bravčové karé na hrubšie plátky, aspoň centimeter a pol – tenké plátky by sa v rúre vysušili.",
      "Všetko osuš a rozlož na plech tak, aby sa kúsky nedotýkali. Pokvapkaj olejom, osoľ, posyp drvenou rascou a čiernym korením a rukami to na plechu premiešaj.",
      "Peč približne 30 minút a v polovici kúsky poprehadzuj.",
      "Bravčové karé je hotové pri 63 °C vnútri – vtedy je ešte šťavnaté. Keď ho prepečieš dosucha, už to nezachrániš. Zemiaky majú byť zlatisté a mäkké.",
      "Mäso nechaj po vybratí pár minút odpočívať, nech sa šťava rozíde späť, a potom ho nakrájaj. Nechaj vychladnúť a rozdeľ do dvoch krabičiek."
    ],

    ck43: [
      "Rúru zapni na 200 °C. Morčacie prsia nakrájaj na kocky asi tri centimetre. Zeleninu nakrájaj tak, aby bola hotová naraz: mrkvu na tenšie kolieska, papriku na väčšie kusy a cuketu na najhrubšie – mrkva je najtvrdšia a potrebuje najviac času.",
      "Všetko osuš a rozlož na plech v jednej vrstve, s miestom medzi kúskami. Cuketa a paprika pustia dosť vody a natlačené by sa len dusili.",
      "Pokvapkaj olejom, osoľ, pridaj sušený cesnak a oregano. Sušené bylinky znesú celý čas v rúre, majú čas sa rozvoňať.",
      "Poriadne premiešaj priamo na plechu a peč približne 25 minút. V polovici poprehadzuj.",
      "Hotové je to, keď je zelenina na okrajoch opečená a morčacie má vnútri 74 °C a šťava z neho vyteká číra.",
      "Nechaj vychladnúť a rozdeľ do dvoch krabičiek."
    ],

    ck44: [
      "Rúru zapni na 200 °C. Zemiaky nakrájaj na mesiačiky a klobásu na kolieska hrubé asi centimeter alebo na hrubšie polmesiace.",
      "Rozlož na plech v jednej vrstve. Klobása pustí počas pečenia dosť vlastného tuku, ktorý sa vsiakne do zemiakov – práve preto sa toto jedlo pečie spolu.",
      "Pokvapkaj olejom (stačí menej, ako by si dal inak, klobása tuku dodá), osoľ opatrne – klobása je už slaná – a posyp mletou paprikou a majoránom.",
      "Peč približne 30 minút. V polovici poprehadzuj, nech sa zemiaky obalia vo vypečenom tuku.",
      "Hotové je to, keď sú zemiaky na okrajoch chrumkavé a klobása má tmavé, miestami pripečené okraje.",
      "Nechaj vychladnúť a rozdeľ na dve rovnaké porcie."
    ],

    ck45: [
      "Rúru zapni na 200 °C. Mleté hovädzie zmiešaj v miske so soľou, čiernym korením a mletou rascou. Miešaj len dovtedy, kým to drží pokope – dlhé miesenie urobí fašírku gumovou.",
      "Namoč si ruky studenou vodou a vyformuj menšie ploché fašírky. Ploché sú tu dôležité: upečú sa za rovnaký čas ako zelenina, guľaté by potrebovali dlhšie.",
      "Brokolicu rozober na ružičky veľké ako orech a mrkvu nakrájaj na kolieska hrubé pol centimetra. Mrkva je tvrdšia, preto ide na tenšie kúsky než brokolica.",
      "Fašírky a zeleninu rozlož na plech tak, aby sa nedotýkali. Zeleninu pokvapkaj olejom a osoľ; fašírky majú dosť vlastného tuku.",
      "Peč približne 25 minút. Mleté hovädzie musí byť prepečené celé, nikde žiadna ružová – to je 71 °C vnútri.",
      "Nechaj vychladnúť a rozdeľ do krabičiek. Brokolica bude po ohriatí mäkšia, takže ju z rúry ber radšej o chlp tvrdšiu."
    ],

    ck46: [
      "Rúru zapni na 200 °C. Bataty ošúp a nakrájaj na rovnako veľké kocky – rovnaká veľkosť je dôležitejšia než pekný tvar, inak sa menšie spália, kým väčšie dôjdu.",
      "Kuracie stehná očisti od prebytočného tuku, osuš papierovou utierkou a poriadne ich zo všetkých strán vtieraj do grilovacieho korenia. Stehná majú viac tuku než prsia, takže znesú silnejšie korenie aj dlhšie pečenie.",
      "Rozlož bataty a mäso na plech vystlaný papierom na pečenie, s miestom medzi kúskami.",
      "Bataty pokvapkaj olejom a jemne osoľ. Stehná olej nepotrebujú, pustia svoj vlastný.",
      "Peč približne 30 minút. Hotové je to, keď sú bataty mäkké s tmavými okrajmi a šťava z mäsa vyteká číra, nie ružová.",
      "Nechaj vychladnúť a rozdeľ do krabičiek. Výpek z plechu nelej preč, polej ním bataty."
    ],

    ck47: [
      "Rúru zapni na 200 °C. Bataty nakrájaj na mesiačiky hrubé asi centimeter a pol.",
      "Bravčovú panenku nechaj v celku – nakrájaná by vyschla. Osuš ju, osoľ, okoreň a posyp rozmarínom. Rozmarín je výrazný, stačí ho menej, než by si čakal.",
      "Na plech rozlož bataty pokvapkané polovicou oleja a vedľa nich polož panenku potretú zvyšným olejom. Panenka je najtenšia na jednom konci – ten tenší koniec podviň pod seba a prichyť špajdľou, nech má celá rovnakú hrúbku a prepečie sa rovnomerne.",
      "Peč 20 až 25 minút. Panenka je hotová pri 63 °C vnútri; je to chudé mäso a pár minút navyše z nej urobí suchú tehlu.",
      "Mäso vyber a nechaj päť až desať minút odpočívať pod voľne položeným alobalom. Počas pečenia sa šťava stlačila do stredu a teraz sa rozíde späť – keby si ju rozrezal hneď, vytečie na dosku.",
      "Nakrájaj na plátky, nechaj vychladnúť a rozdeľ k batátom do krabičiek."
    ],

    ck48: [
      "Ryžu uvar v osolenej vode podľa návodu. Rúru zapni na 200 °C.",
      "Kuracie prsia, papriky aj cibuľu nakrájaj na rezance zhruba rovnakej hrúbky – o to pri fajitas ide, všetko má byť na dlhé prúžky, aby sa to upieklo naraz.",
      "Rozlož na plech v jednej vrstve. Toto je krok, kde sa fajitas najčastejšie pokazia: keď je plech preplnený, paprika s cibuľou pustia vodu a namiesto opečených prúžkov dostaneš dusenú zeleninu. Radšej použi dva plechy.",
      "Pokvapkaj olejom, posyp soľou, mletou paprikou a mexickým korením a rukami to premiešaj priamo na plechu.",
      "Peč 20 minút. Hotové je to, keď majú okraje papriky a cibule tmavé, miestami pripečené miesta – to je presne tá chuť, ktorú od fajitas chceš.",
      "Nechaj vychladnúť a rozdeľ do krabičiek s ryžou."
    ],

    ck49: [
      "Rúru zapni na 200 °C. Menšie zemiaky stačí umyť a prekrojiť na polovice, šupku nechaj – v rúre z nej bude chrumkavá vrstva. Šampiňóny nakrájaj na štvrtiny a morčacie prsia na kocky.",
      "Zemiaky polož na plech rezom nadol. Rezná plocha v kontakte s plechom pekne zhnedne a stane sa chrumkavou.",
      "Pridaj morčacie kocky a šampiňóny, pokvapkaj olejom, osoľ, okoreň a posyp tymianom.",
      "Dôkladne premiešaj a rozlož tak, aby mal každý kúsok okolo seba miesto. Šampiňóny pustia veľa vody a v preplnenom plechu by sa všetko dusilo.",
      "Peč zhruba 30 minút. Hotové je to, keď sú zemiaky mäkké, huby scvrknuté a opečené a morčacie má vnútri 74 °C.",
      "Nechaj vychladnúť a rozdeľ rovnomerne do dvoch krabičiek."
    ],

    ck50: [
      "Rúru zapni na 200 °C. Zemiaky nakrájaj na kocky, rozlož na plech, pokvapkaj olejom a osoľ. Kuracie prsia prekroj na tenšie plátky, osuš, osoľ a okoreň a polož ich na plech k zemiakom.",
      "Peč zemiaky s mäsom približne 20 minút.",
      "Plech vyber a na každý kus mäsa polož plátok slaniny a posyp nastrúhaným eidamom. Slanina aj syr idú až teraz – keby boli v rúre celý čas, slanina by zhorela a zo syra by sa vytlačil tuk.",
      "Vráť do rúry na desať minút, kým sa syr neroztopí a slanina nie je chrumkavá.",
      "Nechaj vychladnúť a rozdeľ do krabičiek. Dosoľuj opatrne, slanina aj syr sú slané a v chladničke sa slanosť za pár dní ešte zvýrazní."
    ],

    ck51: [
      "Ryžu uvar v osolenej vode podľa návodu na obale.",
      "Kuracie prsia nakrájaj na tenké rezance hrubé pol centimetra, osuš ich, osoľ a okoreň.",
      "Panvicu nechaj na vyššom plameni dve minúty a až potom nalej olej. Keď sa olej rozbehne po dne ako voda, rozlož mäso v jednej vrstve a nechaj ho minútu a pol ležať bez dotyku.",
      "Opekaj sprudka päť až sedem minút, kým nie je mäso dozlatista. Keď sa ti rezance na panvicu nezmestia v jednej vrstve, urob to na dvakrát – inak teplota spadne a mäso sa bude dusiť.",
      "Pridaj miešanú zeleninu, podlej troškou vody a prikry. Dus spolu päť minút, kým sa zelenina neprehreje a nezmäkne.",
      "Nechaj vychladnúť, zmiešaj s uvarenou ryžou a rozdeľ do krabičiek."
    ],

    ck52: [
      "Ryžu uvar v osolenej vode. Bravčové karé nakrájaj na tenké rezance naprieč vláknami – po vlákne by ostali tuhé.",
      "Mäso osuš a panvicu rozpáľ s olejom dohoráca.",
      "Rozlož rezance v jednej vrstve a opekaj asi štyri minúty, kým sa nezatiahnu a nechytia farbu. Nemiešaj ich hneď, nech majú čas zhnednúť.",
      "Papriky nakrájaj na rezance a pridaj ich k mäsu. Posyp mletou paprikou a osoľ.",
      "Opekaj za stáleho miešania ďalších päť minút, kým paprika nezmäkne, ale ešte mierne nechrumká. Mletá paprika sa ľahko pripáli a zhorkne, tak ju drž v pohybe a plameň radšej stiahni.",
      "Nechaj vychladnúť a rozdeľ do krabičiek s ryžou."
    ],

    ck53: [
      "Ryžu uvar v osolenej vode.",
      "Panvicu rozpáľ s olejom a pridaj mleté hovädzie. Rozhabarkaj ho vareškou a nechaj zhnednúť – nemiešaj ho stále dookola, potrebuje čas chytiť farbu. Hotové je, keď úplne stratí ružovú.",
      "Pridaj paradajkový pretlak a nechaj ho pol minúty opražiť priamo v tuku. Pretlak takto stratí kyslastú surovú chuť a zosladne.",
      "Fazuľu preklop do sitka a prepláchni studenou vodou, kým nálev neprestane peniť – je slaný, škrobový a je hlavný dôvod nadúvania. Potom ju pridaj do panvice spolu so soľou, korením a chilli.",
      "Premiešaj a prehrej na miernom ohni päť minút, nech chute prejdú dokopy.",
      "Ochutnaj a dosoľ opatrne – pálivosť v krabičke cez noc zosilnie, čo je dnes akurát, bude v stredu ostré. Nechaj vychladnúť a rozdeľ do krabičiek s ryžou."
    ],

    ck54: [
      "Ryžu uvar v osolenej vode. Morčacie prsia nakrájaj na kocky, osuš ich, osoľ a posyp cesnakovým práškom.",
      "Na panvici rozpusť maslo a keď prestane peniť, rozlož doň morčacie kocky v jednej vrstve.",
      "Opekaj asi šesť minút dozlatista, prvú minútu a pol bez miešania.",
      "Pridaj baby špenát – bude vyzerať, že sa ti na panvicu nezmestí, ale za pár sekúnd zvädne na zlomok objemu. Premiešaj a počkaj, kým celý neklesne.",
      "Odstav panvicu z platne a nechaj ju pol minúty vychladnúť, až potom prilej smotanu. Dvanásťpercentná smotana sa v príliš horúcej panvici môže zraziť. Potom vráť na mierny plameň a nechaj dve minúty prebublať.",
      "Nechaj vychladnúť a rozdeľ do krabičiek s ryžou – omáčku daj vedľa ryže, nie na ňu."
    ],

    ck55: [
      "Cibuľu nakrájaj nadrobno a klobásu na kolieska. Na panvici roztop maslo a najprv hoď dnu cibuľu.",
      "Restuj cibuľu tri až päť minút na strednom plameni, kým nestratí bielu farbu a nezačne byť priehľadná. Vtedy už nie je štipľavá, ale sladkastá – to je chuť, na ktorej celé jedlo stojí.",
      "Pridaj klobásu a opekaj ju do chrumkava. Klobása pustí svoj tuk a ten sa stane základom praženice.",
      "V miske rozšľahaj vajcia so soľou a korením. Soľ a korenie daj do vajec, nie až na panvicu – rozložia sa rovnomerne.",
      "Stiahni plameň na mierny a až potom vylej vajcia na klobásu s cibuľou. Miešaj pokojne a pomaly. Na vysokom plameni by z vajec do pol minúty boli tuhé kúsky plávajúce vo vode, ktorú pustili.",
      "Stiahni panvicu z platne, keď praženica vyzerá ešte trochu nedorobená – zvyškové teplo ju dokončí.",
      "Nechaj vychladnúť, rozdeľ do krabičiek a prilož ku každej plátok kváskového chleba. Chlieb daj zvlášť, nie na praženicu, inak zvlhne."
    ],

    ck56: [
      "Ryžu uvar v osolenej vode. Kuracie prsia nakrájaj na kocky a osuš ich papierovou utierkou.",
      "Panvicu rozpáľ, nalej olivový olej a rozlož mäso v jednej vrstve. Prvých 90 sekúnd sa ho nedotýkaj, aby sa urobila kôrka.",
      "Opekaj päť minút, kým nie je zo všetkých strán zlatisté.",
      "Pridaj cuketu nakrájanú na kocky a prekrojené cherry paradajky, osoľ a posyp oreganom.",
      "Dus spolu asi päť minút. Cuketa aj paradajky pustia šťavu a tá sa stane ľahkou omáčkou – nechaj ju trochu odpariť, nech nie je jedlo v krabičke vodnaté.",
      "Nechaj vychladnúť a rozdeľ do krabičiek s ryžou."
    ],

    ck57: [
      "Ryžu uvar v osolenej vode. Mrazený hrášok prelej teplou vodou, aby sa zbavil ľadu – inak by ti v panvici pustil vodu a všetko by sa dusilo.",
      "Hovädzie rezance osuš a panvicu rozpáľ s olejom naozaj dohoráca. Kvapka vody na nej musí hneď zasyčať.",
      "Mäso rozlož v jednej vrstve a opekaj sprudka štyri až päť minút. Hovädzie na tenké rezance potrebuje prudko a krátko, inak bude gumené. Ak sa nezmestí naraz, urob to na dvakrát.",
      "Pridaj hrášok, osoľ, okoreň a prisyp cesnakový prášok.",
      "Podlej trochou vody a vareškou poškriab dno panvice, nech sa výpek rozpustí do šťavy. Dus spolu štyri minúty.",
      "Nechaj vychladnúť, zmiešaj s ryžou a naporcuj do krabičiek."
    ],

    ck58: [
      "Ryžu uvar v osolenej vode. Bravčové karé nakrájaj na menšie plátky alebo kocky a osuš ich.",
      "Panvicu rozpáľ s olejom a mäso opeč z každej strany dozlatista, asi tri minúty na stranu. Nechaj ho ležať, kým sa samo od panvice nepustí.",
      "Šampiňóny nakrájaj na plátky a pridaj ich do panvice. Posyp rascou, osoľ a okoreň – soľ z húb vytiahne vodu.",
      "Opekaj spolu asi šesť minút. Najprv huby pustia vodu, potom sa voda odparí a až vtedy začnú chytať farbu. Práve tá posledná fáza je tá chutná, tak to neukonči priskoro.",
      "Bravčové karé je hotové pri 63 °C vnútri. Nechaj vychladnúť a rozdeľ do krabičiek s ryžou."
    ],

    ck59: [
      "Ryžu uvar v osolenej vode. Morčacie prsia nakrájaj na kocky a osuš.",
      "Panvicu rozpáľ s olejom a morčacie kocky opekaj päť minút, kým nie sú zo všetkých strán zatiahnuté a zlatisté.",
      "Posyp žltým kari korením, osoľ a okoreň. Nechaj kari pol minúty opražiť priamo v tuku, kým nezačne voňať – sušené koreniny potrebujú teplo, aby sa rozvoňali, a surové kari chutí múčne.",
      "Zalej kokosovým mliekom a vareškou poškriab dno panvice.",
      "Povar na miernom ohni tri minúty, kým omáčka mierne nezhustne. Nenechaj ju divoko vrieť – kokosové mlieko sa pri prudkom vare rozdelí na tuk a vodu.",
      "Nechaj vychladnúť a rozdeľ do krabičiek s ryžou."
    ],

    ck60: [
      "Ryžu uvar v osolenej vode.",
      "Panvicu rozpáľ s olejom a pridaj mleté mäso. Rozhabarkaj ho vareškou a nechaj zhnednúť dohneda, nie len zošednúť – tá hnedá farba je celý rozdiel medzi jedlom, ktoré chutí, a jedlom, ktoré je mdlé.",
      "Kukuricu z konzervy sceď a prepláchni. Pridaj ju k mäsu, osoľ, okoreň a posyp mletou paprikou.",
      "Premiešaj a prehrej tri až štyri minúty. Mletú papriku drž v pohybe a plameň stiahni – ľahko sa pripáli a zhorkne.",
      "Nechaj vychladnúť, zmiešaj s uvarenou ryžou a naplň krabičky."
    ],

    ck62: [
      "Kuracie prsia nakrájaj na drobné kocky, osuš ich a posyp mexickým korením. Na panvici s olejom ich sprudka opeč dozlatista, asi päť minút. Pridaj scedenú kukuricu, prehrej a odstav.",
      "Panvicu utri a daj na ňu nasucho tortillu. Žiadny olej – tortilla sa opečie vo vlastnom teple a ostane chrumkavá, nie mastná.",
      "Na jednu polovicu tortilly nasyp trochu nastrúhaného čedaru, na to mäsovú zmes a navrch zase syr. Syr má byť zospodu aj zvrchu – roztopený drží náplň pokope, inak sa ti quesadilla pri obracaní rozsype.",
      "Tortillu preklop na polmesiac a jemne pritlač obracačkou. Opekaj z oboch strán na strednom plameni, kým nie je chrumkavá a škvrnitá od hnedých fľakov a syr vnútri sa neroztopí – to je asi dve minúty na stranu.",
      "Hotovú quesadillu polož na dosku a nechaj ju minútu postáť, než ju nakrájaš na trojuholníky. Horúca by sa ti rozpadla.",
      "Nechaj úplne vychladnúť a až potom zabaľ. V krabičke tortilla trochu zmäkne; pri ohrievaní ju radšej daj na pár minút do rúry alebo na suchú panvicu než do mikrovlnky, vráti sa jej chrumkavosť."
    ],

    ck63: [
      "Rúru zapni na 220 °C – pri tortilla pizze ide o vysoké teplo a krátky čas, inak tortilla vyschne skôr, než sa syr roztopí. Tortilly polož na plech s papierom na pečenie.",
      "Paradajkový pretlak zmiešaj v miske s oreganom a bazalkou a až potom ním potri tortilly. Bylinky v pretlaku sa zohrejú a rozvoňajú; nasypané navrch by sa pri 220 °C len spálili.",
      "Pretlak rozotri tenko a nechaj okolo okraja asi centimeter voľný, nech sa dá okraj upiecť dochrumkava.",
      "Oblož plátkami šunky a zasyp nastrúhanou mozzarellou.",
      "Peč sedem až desať minút. Sleduj to – pri tejto teplote je rozdiel medzi zlatistým a spáleným asi minúta. Hotové je to, keď je syr roztopený a bublá a okraje tortilly sú tuhé a chrumkavé.",
      "Nechaj minútu postáť, nakrájaj na trojuholníky, nechaj vychladnúť a zabaľ. Pri ohrievaní daj radšej do rúry než do mikrovlnky – tá by z tortilly urobila gumu."
    ],

    ck64: [
      "Rúru zapni na 200 °C. Bataty nakrájaj na hranolky hrubé asi centimeter, osuš ich papierovou utierkou, pokvapkaj olejom a osoľ. Rozlož ich na plech v jednej vrstve – keď sa dotýkajú, nikdy nebudú chrumkavé, len mäkké.",
      "Peč 20 až 25 minút, v polovici ich obráť. Batáty majú viac cukru než obyčajné zemiaky, takže chytia farbu skôr, ale aj skôr zhoria – sleduj ich.",
      "Kým sa pečú, na suchej panvici orestuj mleté hovädzie. Rozhabarkaj ho vareškou a nechaj zhnednúť dohneda. Ochuť soľou, mletou paprikou a chilli a odstav.",
      "Upečené hranolky rozdeľ do krabičiek vhodných do mikrovlnky alebo rúry. Dôležité je, aby boli naspodku a v jednej vrstve.",
      "Na hranolky navrstvi mäsovú zmes a bohato posyp nastrúhaným čedarom. Syr sa roztopí až pri ohrievaní – alebo to daj ešte na tri minúty do rúry, ak to chceš jesť hneď.",
      "Nechaj vychladnúť a zatvor. Pri ohrievaní počítaj s tým, že hranolky spodku zmäknú; keď chceš chrumkavé, daj krabičku bez pokrievky do rúry."
    ],

    ck66: [
      "Rúru zapni na 200 °C. Zemiaky nakrájaj na hranolky, osuš, pokvapkaj olejom a osoľ. Rozlož ich len na jednu polovicu plechu – druhú nechaj voľnú pre mäso.",
      "Cornflakes nasyp do sáčku a rukou ich rozdrv na menšie kúsky, nie na prach. Hrubšie kúsky dajú chrumkavejší obal. Zmiešaj ich so soľou, sušeným cesnakom a mletou paprikou.",
      "Kuracie mäso nakrájaj na pásiky hrubé asi dva centimetre a osuš ich. Vajce rozšľahaj v miske.",
      "Každý pásik namoč vo vajíčku, nechaj prebytok odkvapkať a potom ho poriadne pritlač do podrvených lupienkov, aby sa obal prichytil. Odporúčam robiť to jednou rukou do vajíčka a druhou do lupienkov – inak sa ti obalia aj prsty.",
      "Stripsy ulož na druhú polovicu plechu tak, aby sa nedotýkali, a peč spolu so zemiakmi 20 až 25 minút.",
      "Hotové je to, keď je obal zlatohnedý a chrumkavý a mäso vnútri má 74 °C. Nechaj vychladnúť a zabaľ – v krabičke obal zmäkne, pri ohrievaní v rúre sa mu chrumkavosť čiastočne vráti."
    ],

    ck67: [
      "Cestoviny uvar v osolenej vode podľa návodu. Kolienka sú na toto ideálne, omáčka sa im zachytí vnútri. Vodu z varenia nelej hneď preč.",
      "Kuracie mäso nakrájaj na drobné kocky, osuš a opeč na suchej panvici dozlatista. Odlož bokom.",
      "V hrnci, kde sa varili cestoviny, roztop maslo a zalej mliekom. Nechaj ho zohriať, ale nie zovrieť – to je pri syrovej omáčke kľúčové.",
      "Stiahni hrniec z platne a až potom prisýpaj nastrúhaný čedar, po hrstiach, a každú nechaj rozpustiť, než pridáš ďalšiu. Keby si syr hodil do vriaceho mlieka, vytlačí sa z neho tuk a namiesto omáčky dostaneš gumovú hrudu plávajúcu v mastnote.",
      "Keď je omáčka hladká, vmiešaj uvarené cestoviny a opečené mäso. Ak je omáčka pridhustá, rozriediš ju lyžicou vody z varenia cestovín.",
      "Osoľ, okoreň a nechaj vychladnúť. Pri ohrievaní syrová omáčka zhustne – pokvapkaj ju lyžicou mlieka alebo vody a prikry."
    ],

    ck69: [
      "Ryžu uvar v osolenej vode a nechaj ju bokom.",
      "Klobásu nakrájaj na malé kocky a daj ju do hlbokej panvice nasucho. Pustí dosť vlastného tuku a práve ten je základom celého jedla – preto sa začína ňou, nie olejom.",
      "Keď klobása pustí tuk a chytí farbu, pridaj nadrobno nasekanú cibuľu a zelenú papriku. Restuj tri až päť minút, kým cibuľa nestratí bielu farbu a nebude priehľadná.",
      "Pridaj mleté hovädzie, rozhabarkaj ho vareškou a opekaj, kým úplne nestratí ružovú farbu a nezačne hnednúť.",
      "Bohato zasyp cajun korením a osoľ. Nechaj korenie pol minúty opražiť v tuku – sušené zmesi potrebujú teplo, aby sa rozvoňali.",
      "Vmiešaj uvarenú ryžu priamo do panvice a nechaj dve minúty prepojiť chute. Ryža sa obalí vypečeným tukom a korením, od toho má jedlo svoje meno.",
      "Nechaj vychladnúť a rozdeľ do krabičiek. Dosoľ opatrne, klobása je slaná a v chladničke sa to ešte zvýrazní."
    ],

    ck71: [
      "Quinou prepláchni v sitku horúcou vodou, aby si zmyl horkú vrstvičku na povrchu, a uvar ju v dvojnásobnom množstve osolenej vody asi 15 minút.",
      "Halloumi nakrájaj na hrubšie plátky, aspoň centimeter. Tenké plátky sa na panvici roztečú a pripália.",
      "Panvicu rozpáľ nasucho – halloumi má dosť vlastného tuku a žiadny olej nepotrebuje. Polož naň plátky a nehýb nimi.",
      "Opekaj z každej strany asi dve minúty, kým nie sú zlatohnedé a mriežkované. Halloumi sa netopí, len mäkne a hnedne; keď ho necháš dlhšie, stvrdne na gumu. Hotový vyber na tanier.",
      "Na tú istú panvicu daj trochu oleja a rýchlo orestuj prekrojené cherry paradajky, kým nezačnú praskať. Potom pridaj baby špenát a nechaj ho zvädnúť – to trvá pár sekúnd.",
      "Zmiešaj zeleninu s quinoou, posyp oreganom a navrch ulož plátky halloumi. Soľ pridávaj len do quinoy, syr je slaný až-až.",
      "Nechaj vychladnúť a rozdeľ do krabičiek. Halloumi je dobrý aj studený, takže toto jedlo ani nemusíš ohrievať."
    ],

    ck72: [
      "Vajcia vlož do hrnca so studenou vodou, priveď do varu a var presne osem minút. Potom ich hneď preleč studenou vodou – ľahšie sa šúpu a žĺtok nedostane sivozelený okraj. Ošúp ich a prekroj na polovice.",
      "Cibuľu a cesnak nasekaj nadrobno. Na oleji orestuj najprv cibuľu tri až päť minút, kým nebude priehľadná, a až potom pridaj cesnak na pol minúty.",
      "Zasyp mletou červenou paprikou a hneď, do pár sekúnd, premiešaj a prejdi k ďalšiemu kroku. Mletá paprika v horúcom tuku zhorkne rýchlejšie než čokoľvek iné v kuchyni – práve preto je v recepte to slovo „rýchlo“.",
      "Pridaj prepláchnutú červenú šošovicu a zalej vodou tak, aby bola tesne ponorená. Červená šošovica sa nemusí namáčať a varí sa rýchlo.",
      "Var asi 15 minút na miernom ohni. Šošovica sa postupne rozpadne a zmes zhustne na kašu. Občas premiešaj a poškriab dno, aby sa neprichytila – hustý prívarok sa pripaľuje veľmi ochotne.",
      "Dochuť soľou, čiernym korením a lyžicou octu. Ocot tu nie je ozdoba: hustý šošovicový prívarok je bez kyseliny ťažký a mdlý, ocot ho celý rozsvieti. Pridávaj ho po troškách a ochutnávaj.",
      "Rozdeľ do krabičiek a navrch ulož polovičky vajec. Prívarok v chladničke ešte zhustne – pri ohrievaní ho pokvapkaj vodou."
    ],

    ck73: [
      "Cestoviny uvar v dobre osolenej vode o minútu kratšie, než hovorí obal. Tesne pred zliatím odlož jeden deci horúcej vody z varenia – bez nej sa omáčka nespojí.",
      "Na veľkú panvicu daj kvapku oleja a pretlačený cesnak len na sekundu, nech zavonia. Hneď za ním hoď špenát a nechaj ho zvädnúť; vyzerá to ako obrovské množstvo, ale scvrkne sa na hrsť.",
      "Pridaj uvarené cestoviny, odloženú vodu z varenia a oba tégliky Cottage cheese.",
      "Stiahni plameň na minimum alebo panvicu rovno odstav. Toto je celý trik tohto jedla: Cottage cheese je tvarohový, a keď ho necháš zovrieť, zrazí sa na zrnká plávajúce vo vode. Už len prehrievaj a miešaj.",
      "Miešaj, kým sa syr nerozpustí okolo cestovín do krémovej omáčky. Keď je prihustá, prilej ešte trochu vody z varenia.",
      "Osoľ, okoreň a nechaj vychladnúť. Pri ohrievaní v mikrovlnke daj polovičný výkon a prikry – na plnom by sa omáčka opäť zrazila."
    ],

    ck74: [
      "Ryžu uvar v osolenej vode. Tofu vyber z balenia a poriadne ho osuš: polož ho medzi dve papierové utierky, navrch daj tanier a nechaj desať minút stáť. Čím viac vody z neho dostaneš, tým lepšie sa opečie – mokré tofu sa v panvici len dusí.",
      "Osušené tofu nakrájaj na kocky asi dva centimetre.",
      "Panvicu rozpáľ s olejom naozaj dohoráca a rozlož kocky v jednej vrstve. Potom sa ich dve až tri minúty nedotýkaj, kým sa zospodu neurobí zlatá kôrka, a až vtedy ich obráť. Tofu sa na začiatku lepí a pustí sa samo, keď je hotové – nesnaž sa ho odtrhnúť skôr.",
      "Keď je tofu opečené zo všetkých strán, zasyp ho korením garam masala a nechaj ho pol minúty opražiť v tuku, kým nezavonia.",
      "Zalej paradajkovým pretlakom a kokosovým mliekom a premiešaj.",
      "Nechaj päť minút prebublávať na miernom ohni, kým omáčka nezhustne. Nenechaj ju divoko vrieť, kokosové mlieko by sa rozdelilo na tuk a vodu. Dochuť soľou.",
      "Nechaj vychladnúť a rozdeľ do krabičiek s ryžou."
    ],

    ck75: [
      "Rúru zapni na 200 °C. Do stredu menšieho plechu alebo zapekacej misy polož celý blok Fety – nekrájaj ho, má sa upiecť vcelku a až potom rozmiačkať.",
      "Okolo Fety nasyp cherry paradajky a cícer z konzervy, prepláchnutý v sitku studenou vodou. Pokvapkaj všetko olejom a posyp oreganom. Soľ zatiaľ nedávaj, Feta je slaná dosť.",
      "Peč 20 až 25 minút. Hotové je to, keď paradajky popraskali a pustili šťavu a Feta je mäkká so zlatistými miestami navrchu.",
      "Kým sa to pečie, uvar cestoviny v osolenej vode, o minútu kratšie, než hovorí obal, a odlož si trochu vody z varenia.",
      "Pekáč vyber a vidličkou rozmiačkaj Fetu spolu s popraskanými paradajkami priamo v pekáči. Šťava z paradajok, olej a rozpadnutý syr sa spoja do omáčky sami – nič mixovať netreba.",
      "Primiešaj uvarené cestoviny a cícer, prípadne prilej trochu vody z varenia, ak je omáčka pridhustá. Ochutnaj a dosoľ.",
      "Nechaj vychladnúť a rozdeľ do krabičiek."
    ],

    ck76: [
      "Rúru zapni na 200 °C. Bataty ošúp, nakrájaj na malé kocky, pokvapkaj polovicou oleja, osoľ a peč 20 minút rozložené v jednej vrstve.",
      "Quinou prepláchni horúcou vodou a uvar v dvojnásobnom množstve osolenej vody asi 15 minút, kým z nej nevyklíči biela špirálka. (Ak použiješ ryžu, var ju podľa návodu.)",
      "Čiernu fazuľu preklop do sitka a prepláchni teplou vodou, kým nálev neprestane peniť. Zľahka ju osoľ.",
      "Na panvici so zvyšným olejom priprav štyri volské oká. Daj mierny plameň a prikry panvicu pokrievkou – para zvrchu zrazí bielok okolo žĺtka a nemusíš ich obracať.",
      "Avokádo prekroj, vyber kôstku a vykroj dužinu lyžicou. Nakrájaj ho na plátky až tesne pred balením, inak zhnedne.",
      "Do krabičiek vyskladaj vedľa seba quinou, pečené bataty, fazuľu a plátky avokáda – vedľa seba, nie na seba, aby sa chute v chladničke nezmiešali do jednej hmoty. Navrch polož volské oká.",
      "Nechaj vychladnúť a zatvor. Avokádo je najlepšie v prvý deň; keď varíš na viac dní, pridaj ho radšej až ráno."
    ],

    ck77: [
      "Ryžu uvar v osolenej vode.",
      "Tofu poriadne osuš – polož ho medzi papierové utierky, zaťaž tanierom a nechaj desať minút. Potom ho nakrájaj na kocky.",
      "Panvicu rozpáľ s olejom dohoráca, rozlož kocky tofu v jednej vrstve a nechaj ich dve až tri minúty bez dotyku, kým sa zospodu neurobí zlatá kôrka. Potom ich obráť a opeč aj z ostatných strán.",
      "Pridaj cícer prepláchnutý v sitku, posyp bohatou dávkou žltého kari a restuj minútu, nech sa korenie opraží v tuku a rozvonia.",
      "Zalej kokosovým mliekom a nechaj na miernom ohni asi päť minút zhustnúť. Prudký var by kokosové mlieko rozdelil na tuk a vodu, tak drž plameň nízko.",
      "Osoľ a nechaj vychladnúť. Rozdeľ do krabičiek s ryžou."
    ],

    ck78: [
      "Ryžu uvar vo vode. Ak máš guľatozrnnú alebo Arborio, môžeš ju robiť ako pravé rizoto – postupne podlievať horúcou vodou po naberačkách a miešať, kým ju nevpije. Guľaté zrno pustí škrob a rizoto bude samo od seba krémové.",
      "Hrášok spar vo vriacej vode dve až tri minúty, kým nie je jasne zelený a mäkký.",
      "Polovicu hrášku daj do vysokej nádoby a rozmixuj ponorným mixérom na hladké pyré. Druhú polovicu nechaj vcelku – pyré dá omáčke farbu a krémovosť, celé zrnká textúru.",
      "K uvarenej ryži priamo do hrnca vmiešaj maslo a nastrúhaný parmezán a miešaj, kým sa nerozpustia. Potom pridaj hráškové pyré aj celý hrášok.",
      "Odstav hrniec z platne a nechaj ho pol minúty vychladnúť. Až potom jemne vmiešaj Cottage cheese – v horúcom by sa zrazil na zrnká.",
      "Osoľ, okoreň a nechaj vychladnúť. Rizoto v chladničke zhustne; pri ohrievaní pokvapkaj lyžicou vody a prikry."
    ],

    ck79: [
      "Tofu osuš papierovými utierkami a v miske ho roztlač vidličkou na nepravidelné hrudky – má to vyzerať ako praženica, nie ako kaša, takže ho nerozotri dohladka.",
      "Panvicu rozpáľ s olejom a nasyp dnu tofu. Restuj tri minúty a nechávaj ho chvíľu ležať bez miešania, nech kúsky chytia trochu farby.",
      "Posyp kurkumou, osoľ a bohato okoreň čiernym korením. Kurkuma tu robí len farbu – chuť má zemitú a jemnú, ale bez nej je tofu mŕtvolne biele. Čierne korenie dávaj naozaj štedro, to je tu hlavná chuť.",
      "Podlej lyžicou vody a premiešaj. Tofu nemá vlastnú šťavu ako vajcia, takže bez tej vody by bolo suché.",
      "Avokádo nakrájaj na plátky až tesne pred balením, inak zhnedne.",
      "Praženicu rozdeľ do krabičiek, pridaj avokádo a plátok chleba zvlášť – chlieb v krabičke vedľa vlhkého jedla zvlhne."
    ],

    ck80: [
      "Ryžu uvar vo vode podľa návodu. Fazuľu z oboch konzerv preklop do sitka a dôkladne prepláchni studenou vodou, kým nálev neprestane peniť.",
      "Cibuľu nasekaj nadrobno a orestuj ju v hlbokej panvici nasucho alebo na kvapke oleja tri až päť minút, kým nestratí bielu farbu. Pri bezmäsitom chilli je táto fáza dôležitejšia než pri mäsovom – nemáš tu výpek z mäsa, takže všetka chuť musí prísť z cibule a korenia.",
      "Zasyp chilli korením a sladkou paprikou a nechaj ich pol minúty opražiť, kým nezavoňajú.",
      "Zalej lúpanými paradajkami, roztlač ich vareškou, pridaj fazuľu a osoľ.",
      "Nechaj desať minút mierne bublať, kým omáčka nezhustne a chute sa neprepoja. Keď prejdeš vareškou po dne, stopa má na sekundu ostať prázdna.",
      "Nechaj vychladnúť, naporciuj do krabičiek s ryžou a posyp nastrúhaným čedarom. Syr sa roztopí pri ohrievaní. Pálivosť v chladničke za pár dní zosilnie, tak chilli dávkuj s mierou."
    ],

    ck91: [
      "Kuskus nasyp do misky, pokvapkaj polovicou olivového oleja a premiešaj – olej obalí zrnká a tie sa potom nezlepia. Osoľ a zalej vriacou vodou tesne nad povrch kuskusu. Prikry tanierom a nechaj päť minút.",
      "Tuniaka zlej zo šťavy a v miske ho rozober vidličkou. Zmiešaj ho s gréckym jogurtom a scedenou kukuricou.",
      "Kuskus prekypri vidličkou, nie lyžicou – vidlička zrnká oddelí, lyžica ich stlačí do hrudy.",
      "Pridaj k nemu tuniakovú zmes a poriadne premiešaj.",
      "Dochuť čiernym korením a rozdeľ do dvoch krabičiek. Toto jedlo je dobré aj studené, takže ho v práci ani nemusíš ohrievať – a práve preto je dobré na dni, keď sa k mikrovlnke nedostaneš. V chladničke vydrží tri dni."
    ],

    ck92: [
      "Ryžu daj uvariť podľa návodu v osolenej vode.",
      "Panvicu rozpáľ s olejom a pridaj mleté hovädzie. Rozhabarkaj ho vareškou a nechaj zhnednúť – mäso najprv pustí šťavu, tá sa musí odpariť a až potom začne hnednúť. Neukonči to vo fáze, keď je mäso sivé a plávajúce vo vode.",
      "Osoľ a pridaj chilli.",
      "Pridaj prepláchnutú fazuľu a paradajkovú salsu. Prehrej a nechaj päť minút bublať, kým zmes nezhustne a neprestane byť vodnatá – inak ti v krabičke ryža rozmočí.",
      "Nechaj vychladnúť, do krabičiek nalož ryžu, pridaj mexické hovädzie a navrch posyp čedarom. Syr sa roztopí pri ohrievaní."
    ],

    ck93: [
      "Daj zovrieť osolenú vodu a hoď do nej gnocchi. Var ich len dovtedy, kým nevyplávajú na povrch – to sú dve až tri minúty. To je presne signál, že sú hotové; keď ich necháš dlhšie, rozpadnú sa na kašu. Hneď ich vyber dierovanou lyžicou.",
      "Kuracie prsia nakrájaj na kocky, osuš a opeč nasucho alebo na kvapke oleja dozlatista. Osoľ a okoreň.",
      "K mäsu pridaj prekrojené cherry paradajky a nechaj ich minútu zmäknúť.",
      "Stiahni plameň, pridaj uvarené gnocchi a bazalkové pesto a jemne premiešaj. Pesto nemá zovrieť, na vysokom teple stratí farbu aj vôňu.",
      "Nechaj vychladnúť, rozdeľ do krabičiek a navrch natrhaj kúsky mozzarelly. Gnocchi v chladničke stvrdnú – pri ohrievaní pokvapkaj lyžicou vody a prikry."
    ],

    ck94: [
      "Ryžu uvar v osolenej vode. Brokolicu rozober na ružičky a povar päť minút vo vriacej vode, potom ju zlej a prepláchni studenou, aby ostala jasne zelená.",
      "Morčacie mäso nakrájaj na kocky, osuš a osoľ. Panvicu rozpáľ s olejom a rozlož kúsky v jednej vrstve.",
      "Opekaj sprudka dozlatista, prvú minútu a pol bez miešania.",
      "Stiahni plameň na mierny a až potom pridaj sladkú chilli omáčku. Má v sebe veľa cukru a na vysokom plameni by sa do pár sekúnd pripálila a zhorkla.",
      "Minútu prehrievaj a prehadzuj, kým omáčka nezhustne a neobalí každý kúsok mäsa lepkavou vrstvou.",
      "Nechaj vychladnúť, do krabičiek rozdeľ ryžu, brokolicu a mäso a posyp nasekanými arašidmi. Arašidy daj až na záver, v omáčke by do druhého dňa zmäkli."
    ],

    ck95: [
      "Cestoviny uvar al dente v dobre osolenej vode, o minútu kratšie, než hovorí obal.",
      "Šunku nakrájaj na kocky a na hlbšej panvici ju spolu so scedenou kukuricou jemne opeč nasucho. Kukurica trochu chytí farbu a stratí konzervovú chuť.",
      "Zalej smotanou a nechaj ju zohriať, ale nie zovrieť.",
      "Odstav panvicu z platne a až potom primiešaj nastrúhaný syr. Miešaj, kým sa nerozpustí do hladkej omáčky. Keby si syr hodil do vriacej smotany, vytlačí sa z neho tuk a omáčka sa rozdelí.",
      "Prisyp uvarené cestoviny, dôkladne premiešaj a okoreň čiernym korením. Soľ skoro netreba, šunka aj syr sú slané.",
      "Nechaj vychladnúť a zabaľ. Smotanovo-syrová omáčka v chladničke zhustne – pri ohrievaní pokvapkaj mliekom a daj polovičný výkon mikrovlnky."
    ],

    ck96: [
      "Rúru zapni na 200 °C. Zemiaky nakrájaj na hranolky a kuracie mäso na väčšie kocky.",
      "Kvasenú kapustu poriadne vyžmýkaj v rukách nad drezom – nálev je veľmi slaný a kyslý a keby si ju dal na plech mokrú, všetko sa bude dusiť namiesto piecť. Rozlož ju po plechu ako podklad.",
      "Pridaj zemiaky a kuracie mäso navrch kapusty. Kapusta spodku pustí paru, ktorá mäso udrží šťavnaté, zatiaľ čo vrch sa pečie.",
      "Všetko pokvapkaj olejom, osoľ opatrne – kapusta aj slanina sú slané – bohato posyp rascou a mletou paprikou a pridaj kocky slaniny. Premiešaj rukami.",
      "Peč približne 30 minút. Hotové je to, keď je slanina chrumkavá, kapusta na vrchu miestami opečená dohneda a kuracie má vnútri 74 °C.",
      "Nechaj vychladnúť a rozdeľ do krabičiek. Toto jedlo je na druhý deň ešte lepšie, kyslosť kapusty sa prepojí s mäsom."
    ],

    ck97: [
      "Kuracie prsia nasekaj na úplne malé kúsky – čím drobnejšie, tým lepšie sa quesadilla preklopí a nebude sa rozpadať. Osuš ich, osoľ, posyp mexickým korením a sprudka opeč na oleji dozlatista.",
      "Na polovicu každej tortilly natri paradajkovú salsu. Natieraj ju tenko a nechaj okraj voľný; keď jej dáš veľa, vytečie pri opekaní von a pripáli sa.",
      "Na salsu ulož mäso a zasyp nastrúhaným syrom. Syr navrchu je dôležitý – roztopený drží náplň pokope.",
      "Tortillu prelož napoly a jemne pritlač obracačkou. Opekaj ju nasucho na strednom plameni z oboch strán, asi dve minúty na stranu, kým nie je chrumkavá so škvrnami a syr vnútri sa neroztopí.",
      "Nechaj dve minúty vychladnúť na doske a až potom rozkroj na trojuholníky – horúca by sa ti rozsypala.",
      "Nechaj úplne vychladnúť a ulož do krabičiek. Pri ohrievaní daj radšej do rúry alebo na suchú panvicu než do mikrovlnky."
    ],

    ck98: [
      "Ryžu uvar vo vode. Mrazený hrášok zalej vriacou vodou, nechaj tri minúty stáť a zlej – nevar ho, stratil by farbu aj pevnosť.",
      "V miske zmiešaj sójovú omáčku s medom a touto zmesou potri lososa zo všetkých strán.",
      "Lososa opeč na panvici nasucho (má dosť vlastného tuku) alebo ho polož na papier na pečenie a daj do rúry na 200 °C na 12 minút.",
      "Ak ho robíš na panvici, začni kožou nadol a väčšinu času ho nechaj na tejto strane – uvidíš, ako sa mäso od spodku nahor mení z priehľadného na ružovobiele. Otoč ho až na poslednú minútu. Pozor na med v marináde, na vysokom plameni sa rýchlo pripáli, tak drž stredný.",
      "Losos je hotový, keď sa dá vidličkou ľahko rozdeliť na plátky a v strede je ešte o odtieň tmavší.",
      "Nechaj vychladnúť, krabičku naplň ryžou zmiešanou s hráškom a navrch ulož lososa. Rybu zjedz do dvoch dní."
    ],

    ck99: [
      "Rezance uvar podľa návodu a zlej. V miske rozmiešaj arašidové maslo so sójovou omáčkou a tromi lyžicami horúcej vody, kým nevznikne hladká omáčka – samotné arašidové maslo by sa v panvici len zhrudkovalo.",
      "Panvicu rozpáľ s olejom a pridaj mleté mäso. Rozhabarkaj ho vareškou a opekaj, kým nestratí ružovú farbu a nezačne hnednúť.",
      "Pridaj mrazenú ázijskú zeleninu a restuj ďalšie štyri minúty, kým sa neprehreje a nezmäkne.",
      "Pridaj rezance, zalej arašidovou omáčkou a minútu poriadne premiešavaj, kým sa všetko neobalí.",
      "Ochutnaj a dosoľ len opatrne, sójová omáčka je slaná sama o sebe.",
      "Nechaj vychladnúť a zabaľ. Pri ohrievaní pokvapkaj rezance lyžicou vody a prikry – arašidová omáčka v chladničke zhustne."
    ],

    kbv1: [
      "Ryžu basmati prepláchni a uvar v osolenej vode – basmati potrebuje menej vody než bežná ryža, stačí pomer 1 : 1,5. Posledné tri minúty varenia prisyp mrazenú zeleninu, aby sa prehriala priamo v ryži. Potom sceď.",
      "Kuracie prsia nakrájaj na kocky a v miske ich zmiešaj s medom, horčicou, sójovou omáčkou, sušeným cesnakom, soľou a korením. Nechaj ich chvíľu postáť, kým sa venuješ ryži.",
      "Panvicu rozpáľ s olejom, ale drž stredný plameň, nie najvyšší. V marináde je med a ten sa na prudkom ohni pripáli skôr, než sa mäso prepečie.",
      "Mäso rozlož v jednej vrstve a opekaj 8 až 10 minút. Marináda sa postupne odparí a zmení na lepkavú, tmavú glazúru, ktorá obalí každý kúsok – to je ten skaramelizovaný povrch, o ktorý tu ide. Prehadzuj mäso každú minútu, aby sa glazúra nepripálila na dne.",
      "Nechaj vychladnúť a do každej z troch krabičiek daj tretinu ryže so zeleninou a vedľa nej medové kura.",
      "Pri ohrievaní v práci pridaj do ryže lyžičku vody – para ju krásne oživí."
    ],

    kbv2: [
      "Jazmínovú ryžu prepláchni a uvar v osolenej vode.",
      "Kuracie prsia, obe papriky aj červenú cibuľu nakrájaj na tenké pásiky zhruba rovnakej hrúbky. Pri fajitas je to celá podstata – všetko na prúžky, aby sa to opieklo naraz a dalo sa to jesť lyžicou.",
      "Panvicu rozpáľ s olejom a opeč najprv samotné kura s polovicou fajita korenia, asi päť minút. Mäso potrebuje vyššiu teplotu a dlhší čas než zelenina, preto ide prvé.",
      "Pridaj papriky s cibuľou a zvyšok korenia. Restuj ďalších päť až sedem minút. Zelenina má zmäknúť, ale ostať mierne chrumkavá – rozvarená paprika by v krabičke do druhého dňa pustila vodu.",
      "Odstav a pokvapkaj šťavou z limetky až teraz, po odstavení. Kyselina sa teplom stráca a práve tá limetka robí z obyčajného opečeného kuraťa fajitas.",
      "Nechaj vychladnúť, rozdeľ ryžu do troch krabičiek a vedľa nej navrstvi fajitas zmes. V mikrovlnke ohrievaj aspoň dve minúty a pred jedlom premiešaj."
    ],

    kbv3: [
      "Kuskus zalej vriacou vodou tesne nad jeho povrch, prikry a nechaj päť minút napučať. Potom ho prekypri vidličkou a nechaj vychladnúť, než doň vmiešaš rukolu – do horúceho kuskusu by zvädla.",
      "Každé kuracie prso polož naplocho na dosku, prilož naň dlaň a ostrým nožom narež do boku hlbokú kapsu. Nerež až cez druhú stranu, inak ti náplň vytečie. Mäso osoľ a okoreň zvnútra aj zvonka.",
      "Kapsu naplň nakrájanou mozzarellou a sušenými paradajkami. Neprepĺňaj ju – keď je napchatá, syr pri pečení vytečie. Otvor môžeš zapichnúť špáradlom.",
      "Panvicu rozpáľ s olejom a mäso sprudka opeč z oboch strán, asi tri minúty na stranu. Tu nejde o prepečenie, ale o kôrku; vnútro dorobí rúra.",
      "Prelož na plech a dopeč v rúre na 190 °C asi desať minút. Hotové je to, keď má mäso vnútri 74 °C – pri plnenom prse meraj do mäsa, nie do náplne.",
      "Nechaj vychladnúť. Na dno krabičky daj kuskus s rukolou a naň polož celé plnené prso.",
      "Pred ohrievaním si prso rovno v krabičke nakrájaj na plátky – prehreje sa rýchlejšie a nevysuší sa."
    ],

    kbv4: [
      "Rúru zapni na 200 °C. Zemiaky nakrájaj na kocky, osuš, pokvapkaj olejom, osoľ a peč 25 minút rozložené v jednej vrstve.",
      "Brokolicu rozober na ružičky a uvar v osolenej vode domäkka, asi päť minút. Potom ju zlej a prepláchni studenou vodou.",
      "Kuracie prsia nakrájaj na rezance, osuš a opeč na panvici dozlatista. Ochuť sušeným cesnakom, soľou a korením.",
      "Zalej smotanou, pridaj štipku muškátového orieška a nechaj zhustnúť. Muškátový oriešok strúhaj čerstvý a daj ho naozaj málo – je silný a v mliečnych omáčkach rýchlo prebije všetko ostatné.",
      "Keď omáčka zhustne tak, že obalí vareškou, vmiešaj uvarenú brokolicu a odstav.",
      "Nechaj vychladnúť a v krabičke daj na jednu stranu upečené zemiaky a na druhú krémovú mäsovú zmes. Nemiešaj ich dokopy – zemiaky by omáčku nasiakli a do druhého dňa by rozmäkli."
    ],

    kbv5: [
      "Ryžu basmati uvar v osolenej vode.",
      "Kuracie stehná nakrájaj na menšie kúsky. Cuketu a mrkvu nakrájaj na polmesiačiky, ale mrkvu na tenšie – je tvrdšia a potrebuje dlhšie.",
      "Na panvici rozohrej kokosový olej a orestuj v ňom kari pastu asi 30 sekúnd, kým nezačne voňať. Toto je najdôležitejší krok celého jedla: kari pasta pražená v tuku rozvinie chuť, ktorú by si len rozmiešaním v mlieku nikdy nedostal.",
      "Pridaj mäso a opekaj päť minút, kým sa nezatiahne.",
      "Vhoď nakrájanú zeleninu, zalej kokosovým mliekom a dus desať minút. Drž mierny plameň – pri prudkom vare sa kokosové mlieko rozdelí na tuk a vodu.",
      "Omáčka je hotová, keď zhustne natoľko, že obalí chrbát lyžice. Osoľ a nechaj vychladnúť.",
      "Rozdeľ ryžu do nádob a zalej ju kari. Kari je na krabičky ideálne – na druhý a tretí deň chutí ešte lepšie, ako sa korenie rozleží."
    ],

    kbv7: [
      "Jazmínovú ryžu uvar v osolenej vode.",
      "Brokolicu rozober na malé ružičky, daj do misky a zalej vriacou vodou. Nechaj päť minút stáť a potom sceď. Takto ju len zmäkčíš, nerozvaríš – a práve o to ide, lebo v mikrovlnke ešte zmäkne.",
      "Kuracie prsia nakrájaj na menšie kocky a osuš. Panvicu rozpáľ s olejom a mäso sprudka opekaj, kým nezozlatne.",
      "Stiahni oheň na minimum a až potom pridaj teriyaki omáčku. Má veľa cukru a na prudkom ohni sa do pár sekúnd pripáli a zhorkne.",
      "Nechaj omáčku minútu až dve obaliť mäso – bude hustnúť a lepiť sa. Potom pridaj brokolicu a premiešaj, nech sa obalí tiež.",
      "Nechaj vychladnúť, na dno krabičky ulož ryžu, navrch teriyaki kura s brokolicou a posyp sezamovými semienkami. Sezam daj až na záver, v omáčke by do druhého dňa zmäkol."
    ],

    kbv8: [
      "Quinou prepláchni horúcou vodou v jemnom sitku a uvar v dvojnásobnom množstve osolenej vody asi 15 minút.",
      "Zelenú fazuľku uvar v pare alebo vo vriacej vode päť až sedem minút domäkka, potom ju prepláchni studenou vodou, aby ostala zelená.",
      "Kuracie prsia nechaj vcelku, osuš ich, osoľ, okoreň a posyp sušeným oreganom. V celku ostanú šťavnatejšie než nakrájané.",
      "Panvicu rozpáľ s olejom a mäso opeč z oboch strán dozlatista, asi päť až šesť minút na stranu podľa hrúbky. Ku koncu pokvapkaj citrónovou šťavou a posyp nastrúhanou kôrou – kôra ide až na záver, teplom by zhorkla.",
      "Mäso nechaj minútu odpočinúť, aby sa šťava rozišla, a až potom ho nakrájaj na plátky.",
      "Rozdeľ quinou, vedľa polož fazuľku a navrch plátky citrónového kurčaťa. Quinoa drží štruktúru lepšie než ryža a nenasaje vlhkosť, takže toto jedlo vydrží aj do štvrtka."
    ],

    kbv9: [
      "Bulgur nasyp do misky, osoľ, zalej vriacou vodou tesne nad jeho povrch, prikry a nechaj 15 minút napučať. Bulgur sa nevarí, len napučiava – a práve preto v krabičke nerozmäkne na kašu ako ryža či zemiaky.",
      "Kuracie prsia nakrájaj na rezance, šampiňóny na plátky a cibuľu nadrobno.",
      "Na panvici s olejom orestuj cibuľu tri až päť minút, kým nestratí bielu farbu a nebude priehľadná.",
      "Pridaj mäso a sprudka ho opeč. Nechaj ho chvíľu ležať bez miešania, aby chytilo farbu.",
      "Pridaj šampiňóny, drvenú rascu, soľ a korenie. Restuj asi osem minút. Huby najprv pustia vodu, tá sa musí odpariť a až potom začnú hnednúť – to je tá chutná fáza, tak to neukonči priskoro.",
      "Zjemni smotanou, nechaj minútu prevrieť a odstav.",
      "Nechaj vychladnúť a do jednej polovice krabičky daj bulgur, do druhej mäso s hubami."
    ],

    kbv10: [
      "Ryžu basmati uvar klasicky v osolenej vode.",
      "Kuracie prsia polož naplocho, prilož dlaň a prekroj ich pozdĺžne na tenšie plátky. Osuš, osoľ a okoreň.",
      "Panvicu rozpáľ a mäso opeč z oboch strán dozlatista, asi tri minúty na stranu. Nemusí byť úplne prepečené, dorobí sa v rúre.",
      "Opečené mäso ulož na plech. Na každý kúsok polož plátok mozzarelly a nakrájané cherry paradajky a posyp sušenou bazalkou.",
      "Daj zapiecť do rúry na 200 °C asi na päť minút, len kým sa syr neroztečie. Dlhšie nie – z light mozzarelly by sa vytlačila voda a plávala by v nej.",
      "Nechaj vychladnúť, rozdeľ ryžu, vedľa polož zapečené Caprese a pokvapkaj balzamikovou redukciou. Redukciu dávaj až tesne pred zatvorením, inak sa všetko zafarbí dohneda.",
      "Mozzarella na mäse vytvorí pri ohrievaní šťavnatú čiapočku, ktorá kuracie chráni pred vysušením."
    ],

    kbv11: [
      "Ryžu (alebo quinou) uvar. Fazuľu aj kukuricu z konzervy preklop do sitka, prepláchni studenou vodou, kým nálev neprestane peniť, a zmiešaj ich dokopy.",
      "Kuracie prsia nakrájaj na kocky, osuš, osoľ a posyp mletou paprikou.",
      "Panvicu rozpáľ s olejom a mäso sprudka opeč. Rozlož ho v jednej vrstve a prvú minútu a pol sa ho nedotýkaj.",
      "Keď je mäso hotové, stiahni oheň na minimum a až potom pridaj BBQ omáčku. Je plná cukru a na prudkom ohni sa pripáli za pár sekúnd.",
      "Nechaj omáčku minútu zredukovať, kým nebude lepkavá a neobalí každý kúsok mäsa.",
      "Nechaj vychladnúť a do krabičky ulož ryžu, vedľa mix kukurice a fazule a do tretej tretiny BBQ mäso. Omáčka drží na mäse vlhkosť, takže toto jedlo vydrží bez vysušenia celé tri dni."
    ],

    kbv12: [
      "Zemiaky uvar v osolenej vode domäkka – daj ich do studenej vody a až potom zapni platňu, inak sa povrch rozvarí skôr, než bude stred mäkký. (Ak si vyberieš cestoviny, uvar ich al dente.)",
      "Kuracie stehná nakrájaj na kocky a cibuľu nadrobno.",
      "Na panvici s olejom orestuj cibuľu tri až päť minút, kým nebude priehľadná a sladkastá.",
      "Pridaj mäso a opeč ho zo všetkých strán.",
      "Teraz príde krok, na ktorom paprikáš stojí alebo padá. Stiahni plameň na minimum, zasyp mletou sladkou paprikou, dve sekundy premiešaj a hneď podlej asi 150 ml vody. Mletá paprika v horúcom tuku zhorkne rýchlejšie než čokoľvek iné a horkosť z omáčky už nedostaneš.",
      "Dus 15 minút na miernom ohni, kým mäso nezmäkne a omáčka sa nespojí.",
      "Vlej smotanu, nechaj prevrieť a odstav. Nechaj vychladnúť, rozdeľ zemiaky a prelej ich paprikášom. Omáčka pri chladnutí zhustne, po ohriatí bude opäť hladká."
    ],

    kbv13: [
      "Ryžu uvar. Brokolicu rozober na ružičky a jemne ju oblanšíruj – daj ju na dve až tri minúty do vriacej vody a hneď preleč studenou, aby ostala jasne zelená a pevná.",
      "V malej miske vymiešaj arašidové maslo, sójovú omáčku, med a dve až tri lyžice horúcej vody, kým nevznikne hladká krémová omáčka. Pridávaj vodu po troškách – arašidové maslo sa najprv zdanlivo zrazí a až potom sa rozriedi.",
      "Kuracie prsia nakrájaj na kúsky, osuš a opeč na panvici s olejom dozlatista.",
      "Stiahni plameň a ku koncu vylej na mäso arašidovú omáčku. Nechaj ju minútu zredukovať, kým neobalí každý kúsok. Pozor na med a prudký oheň, pripáli sa.",
      "Nechaj vychladnúť, na dno ulož ryžu a brokolicu a navrch kuracie kúsky v arašidovej omáčke.",
      "Arašidové maslo v omáčke nepustí vodu, takže sa nič nerozmočí. V lete môžeš toto jedlo zjesť aj studené."
    ],

    kbv14: [
      "Rúru zapni na 200 °C. Zemiaky nakrájaj na plátky, osoľ, pokvapkaj olejom a daj piecť asi 25 minút.",
      "Kuracie prsia nakrájaj na širšie plátky, osuš, osoľ a okoreň.",
      "Asi desať minút pred koncom pečenia zemiakov ulož plátky mäsa na plech vedľa nich. Nejde o klasické plnené a vyprážané Cordon Bleu, ale o rozloženú verziu – a práve preto bude dobré aj na tretí deň.",
      "Keď je mäso takmer upečené, polož na každý kúsok plátok šunky a na ňu plátok syra.",
      "Nechaj v rúre dopiecť, kým sa syr neroztopí, asi päť minút. Mäso je hotové pri 74 °C vnútri.",
      "Nechaj vychladnúť, rozdeľ pečené zemiaky a na ne polož zapečené mäso. Keďže tu nie je strúhanka, nič po ohriatí v mikrovlnke nerozmočí."
    ],

    kbv15: [
      "Jazmínovú ryžu uvar klasicky vo vode.",
      "Mäso, červenú papriku aj ananás nakrájaj na približne rovnako veľké kocky. Ak používaš ananás z konzervy, nechaj si šťavu – môžeš ňou nahradiť med.",
      "V miske zmiešaj paradajkový pretlak, med, sójovú omáčku a trošku vody. Ochutnaj: má to byť zároveň sladké aj kyslé. Keď prevláda jedno, dolaď druhým.",
      "Na panvici rozohrej olej a opeč kuracie mäso dozlatista. Potom pridaj papriku a ananás a restuj tri minúty. Ananás pustí šťavu a trochu skaramelizuje.",
      "Vylej omáčku a dus ešte dve minúty na miernom ohni, kým nezhustne a neobalí jedlo. Pozor, je sladká a pripaľuje sa.",
      "Nechaj vychladnúť, polovicu krabičky naplň ryžou a druhú sladkokyslým kuraťom. Ananás udrží jedlo šťavnaté po celý čas skladovania."
    ],

    kbv16: [
      "Celozrnné špagety uvar v dobre osolenej vode o minútu kratšie, než hovorí obal.",
      "Z mletého hovädzieho, soli a korenia vytvaruj 12 až 15 malých guličiek. Zmes miešaj len dovtedy, kým drží pokope, a ruky si namoč studenou vodou.",
      "Na panvici s olejom guľky opeč dozlatista zo všetkých strán. Otáčaj ich opatrne a nesnaž sa ich prepiecť – dovaria sa v omáčke.",
      "Pridaj pretlačený cesnak a oregano a nechaj ich pol minúty rozvoňať. Cesnak drž v pohybe, aby nezhorel.",
      "Zalej paradajkovou passatou a dus desať minút na miernom ohni, kým omáčka nezhustne. Vareškou poškriab dno, nech sa výpek dostane do omáčky.",
      "Špagety pred vložením do krabičky premiešaj s kvapkou oleja, aby sa nezlepili do jednej hrudy. Potom ich prelej omáčkou s guľkami a posyp parmezánom.",
      "Nechaj vychladnúť a zatvor."
    ],

    kbv17: [
      "Rúru zapni na 200 °C. Zemiaky nakrájaj na kocky a upeč 25 minút. Zelené fazuľky krátko uvar v pare.",
      "Mrkvu nastrúhaj najemno – nie nahrubo. Jemne nastrúhaná sa v mäse rozpustí a pustí vlhkosť, nahrubo by v sekanej ostali tvrdé kúsky.",
      "Mleté morčacie zmiešaj s mrkvou, vajíčkom, ovsenými vločkami, soľou a majoránkou. Vločky nasajú šťavu, ktorú by mäso inak pustilo, a udržia ju vnútri. Miešaj len dovtedy, kým to drží pokope.",
      "Vytvaruj menší bochník a polož ho na plech k zemiakom. Urob ho radšej nižší a širší než vysoký – prepečie sa rovnomerne.",
      "Peč asi 30 minút. Hotové je to pri 74 °C vnútri, mleté morčacie nesmie byť nikde ružové.",
      "Nechaj sekanú aspoň desať minút odpočinúť, až potom ju krájaj – horúca by sa ti rozpadla. Nakrájaj na hrubšie plátky a rozdeľ so zemiakmi a fazuľkami.",
      "Vďaka mrkve nebude morčacie suché ani na tretí deň."
    ],

    kbv18: [
      "Ryžu basmati uvar v osolenej vode.",
      "Panvicu rozpáľ a orestuj na nej mleté hovädzie nasucho – pustí dosť vlastného tuku. Rozhabarkaj ho vareškou a nechaj zhnednúť dohneda, nie len zošednúť.",
      "Zasyp čili a rímskou rascou a nechaj ich pol minúty opražiť priamo v tuku, kým nezavoňajú. Rímska rasca je tu kľúčová, bez nej je to len mäso s paradajkami.",
      "Fazuľu aj kukuricu prepláchni v sitku a pridaj ich spolu s pasírovanými paradajkami. Osoľ.",
      "Dus 15 minút na miernom ohni. Omáčka má pomaly bublinkovať po okrajoch a postupne hustnúť – keď prejdeš vareškou po dne, stopa má na sekundu ostať prázdna.",
      "Nechaj vychladnúť a daj polovicu krabičky ryžu, druhú polovicu chili. Toto jedlo po rozležaní chutí ešte lepšie; pálivosť však cez noc zosilnie, tak čili dávkuj s mierou."
    ],

    kbv19: [
      "Rúru zapni na 200 °C. Ryžu uvar.",
      "Mleté mäso zmiešaj s mletým zázvorom a pretlačeným cesnakom, osoľ a vytvaruj guličky. Miešaj len dovtedy, kým to drží pokope, inak budú gumové.",
      "Guľky rozlož na plech tak, aby sa nedotýkali, a peč 15 minút. V rúre sa upečú rovnomerne a nemusíš ich obracať ako na panvici.",
      "Na panvici zohrej sójovú omáčku s medom na miernom plameni. Nechaj to chvíľu bublať, kým zmes nezhustne – ale sleduj to, med sa pripáli veľmi rýchlo.",
      "Pridaj upečené guľky a prehadzuj ich v omáčke, kým ich neobalí lesklá, lepkavá glazúra.",
      "Nechaj vychladnúť, do krabičky daj ryžu a navrch glazované guľky posypané sezamom. Glazúra im nedovolí vyschnúť ani po ohriatí."
    ],

    kbv20: [
      "Ryžu predvar do polomäkka – asi polovicu času z návodu. Dovarí sa potom priamo v paprike. Keby si ju dal surovú, vytiahla by z mäsa všetku vlhkosť; keby bola uvarená domäkka, náplň by bola kašovitá.",
      "Predvarenú ryžu zmiešaj s mletým mäsom, soľou a korením.",
      "Paprikám odrež vršok, vyber jadrovník a vytras semienka. Naplň ich mäsovou zmesou, ale nie úplne po okraj – náplň pri varení napučí a vytlačila by sa von.",
      "Papriky postav do hrnca tak, aby stáli vedľa seba a nepadali, a zalej ich paradajkovou šťavou. Pridaj štipku cukru; paradajková šťava je kyslá a cukor jej kyslosť vyrovná.",
      "Dus 30 až 40 minút na miernom ohni pod pokrievkou. Hotové je to, keď sa paprika dá ľahko prepichnúť vidličkou a náplň vnútri nie je nikde ružová.",
      "Nechaj vychladnúť a do každej krabičky daj jednu papriku a bohatú porciu omáčky. Paprika funguje ako obal, ktorý mäso v mikrovlnke ochráni pred vysušením."
    ],

    kbv21: [
      "Zemiaky uvar v osolenej vode domäkka, zlej a popuč na kašu s trochou mlieka. Puč ich, kým sú ešte horúce – vychladnuté zemiaky sa roztlačia na lepkavú hmotu.",
      "Z mletého mäsa, nového korenia, soli a čierneho korenia vytvaruj guličky. Nové korenie je tu to, čo robí guľky švédskymi, tak ho neošidi.",
      "Na panvici guľky opeč zo všetkých strán dozlatista. Otáčaj ich opatrne.",
      "Pridaj smotanu a nechaj krátko prevrieť, kým nevznikne krémová omáčka. Vareškou poškriab dno, nech sa výpek z mäsa dostane do omáčky – to je celá chuť.",
      "Nechaj vychladnúť a do krabičky daj zemiakovú kašu, ktorú navrchu uhlaď lyžicou do rovnej plochy. Na ňu polož guľky s omáčkou. Uhladená kaša udrží omáčku na povrchu a nenasiakne ju celá.",
      "Lyžičku brusnicového džemu daj bokom, nie na kašu – v chladničke by sa rozpustil do nej."
    ],

    kbv22: [
      "Celozrnné penne uvar v dobre osolenej vode o minútu kratšie, než hovorí obal.",
      "Cibuľu nasekaj nadrobno a mrkvu nastrúhaj najemno. Jemne nastrúhaná mrkva sa v omáčke úplne rozpustí a dodá jej sladkosť bez toho, aby si musel pridávať cukor.",
      "Na panvici orestuj cibuľu, kým nestratí bielu farbu, potom pridaj mleté hovädzie a nechaj ho zhnednúť. Až nakoniec prisyp mrkvu a restuj ešte dve minúty.",
      "Pridaj passatu a talianske bylinky a dus 15 minút na miernom ohni. Sušené bylinky idú do omáčky hneď na začiatku, majú čas sa rozvoňať.",
      "Omáčka je hotová, keď zhustne natoľko, že po prejdení vareškou po dne stopa na sekundu ostane prázdna.",
      "Cestoviny zmiešaj priamo s omáčkou, nie vedľa nej – nasiaknu ju a v chladničke nevyschnú. Nechaj vychladnúť a rozdeľ do troch krabičiek.",
      "Po dvoch dňoch chutí toto jedlo ešte lepšie, ako sa chute preležia."
    ],

    kbv23: [
      "Rúru zapni na 200 °C. Batáty nakrájaj na hranolky, osuš, pokvapkaj olejom, osoľ a peč 20 minút rozložené v jednej vrstve.",
      "Z mletého hovädzieho vytvaruj tri väčšie placky. Mäso miešaj čo najmenej a placku urob o niečo širšiu než chceš – pri pečení sa stiahne. Do stredu zatlač palcom plytkú jamku, aby sa nevyklenula do gule.",
      "Panvicu rozpáľ naozaj dohoráca a placky na ňu polož. Potom sa ich dve až tri minúty nedotýkaj – burger si kôrku urobí len vtedy, keď ho necháš na pokoji. Neprilačaj ho obracačkou, vytlačíš z neho šťavu.",
      "Otoč a dopeč z druhej strany. Mleté hovädzie musí byť prepečené celé, 71 °C vnútri. Ku koncu potri mäso horčicou.",
      "Nechaj mäso chvíľu odpočinúť a všetko vychladnúť.",
      "Do krabičky daj na jednu stranu batáty, na druhú čerstvý ľadový šalát s cherry paradajkami a nakrájanou kyslou uhorkou a navrch polož mäso. Šalát nesmie prísť do kontaktu s horúcim jedlom, zvädol by.",
      "Pri ohrievaní si šalát a uhorky vyber na tanier a ohrievaj len mäso s batátmi."
    ],

    kbv24: [
      "Bulgur zalej vriacou osolenou vodou tesne nad jeho povrch, prikry a nechaj 15 minút napučať.",
      "Mleté mäso zmiešaj s rímskou rascou, škoricou a mletým koriandrom. Škorice daj naozaj málo – v slanom jedle má byť cítiť len na pozadí, nie ako v závine. Vytvaruj guľky.",
      "Na panvici guľky opeč zo všetkých strán dozlatista. Otáčaj ich opatrne.",
      "Pridaj paradajkový pretlak a nechaj ho pol minúty opražiť priamo v tuku, nech stratí surovú kyslastú chuť.",
      "Pridaj cícer prepláchnutý v sitku a trochu vody a nechaj päť minút prebublať, aby sa chute spojili a omáčka zhustla.",
      "Nechaj vychladnúť, do krabičky daj bulgur a navrch guľky s cícerom. Orientálne koreniny držia chuť aj za studena, takže toto jedlo nemusíš ani ohrievať."
    ],

    kbv25: [
      "Zemiaky uvar v osolenej vode domäkka – do studenej vody a až potom zapnúť platňu.",
      "Z mletého morčacieho a korenia vytvaruj guľky. Miešaj len dovtedy, kým to drží pokope.",
      "Guľky nevyprážaj, ale uvar ich priamo vo vriacej vode alebo vývare. Dávaj ich dnu po jednej a nemiešaj, kým sa nespevnia – inak sa ti rozpadnú. Hotové sú, keď vyplávajú na povrch a sú vnútri bez ružovej, asi po desiatich minútach.",
      "Guľky vyber dierovanou lyžicou a vývar, v ktorom sa varili, nevylievaj – je to základ omáčky.",
      "Vývar zjemni smotanou a nechaj prebublať. Potom pridaj nasekaný kôpor a odstav. Kôpor je čerstvá bylinka a teplom stratí všetko, čo má, tak ide až na záver.",
      "Dochuť štipkou octu a cukru. Kôprová omáčka stojí na tejto rovnováhe – bez octu je mdlá, bez cukru príliš ostrá. Pridávaj po kvapkách a ochutnávaj.",
      "Nechaj vychladnúť, do krabičky daj zemiaky, guľky a zalej omáčkou. Ak v chladničke príliš zhustne, prilej pred ohrevom lyžicu mlieka."
    ],

    kbv26: [
      "Rúru zapni na 200 °C. Ryžu uvar a posledné tri minúty prisyp mrazenú kukuricu a hrášok, nech sa prehrejú priamo v nej.",
      "Mleté mäso rozprestri na malý plech do rovnomernej vrstvy hrubej asi dva centimetre. Nestláčaj ho, len ho rozhrň.",
      "Peč 20 minút dozlatista. Mäso pustí šťavu a tuk – tie nelej preč, vsiaknu do ryže a dodajú jej chuť.",
      "Na upečené mäso navrstvi ryžu so zeleninou a rozhrň ju do rovnej plochy. Posyp nastrúhaným tvrdým syrom.",
      "Daj zapiecť ešte na päť minút, kým syr nevytvorí zlatistú kôrku. Tá kôrka nie je len na pohľad – uzavrie vlhkosť v ryži aj v mäse pod ňou.",
      "Nechaj vychladnúť a nákyp nakrájaj na tri časti. Krájaj ho až vychladnutý, horúci by sa rozsypal."
    ],

    kbv27: [
      "Ryžu basmati uvar v osolenej vode.",
      "Z mletého morčacieho vytvaruj guľky a opeč ich na panvici zo všetkých strán dozlatista.",
      "Guľky odsuň na kraj panvice, na voľné miesto daj karí pastu a nechaj ju 30 sekúnd opražiť v tuku, kým nezavonia. Karí pasta pražená v tuku chutí úplne inak než len rozmiešaná v mlieku.",
      "Zalej kokosovým mliekom a premiešaj. Drž mierny plameň – pri prudkom vare by sa kokosové mlieko rozdelilo na tuk a vodu.",
      "Pridaj špenátové listy a nechaj päť minút prevrieť, kým špenát nezvädne a omáčka nezhustne.",
      "Nechaj vychladnúť, do krabičky daj ryžu a prelej guľkami s omáčkou. Kokosové mlieko znáša ohrievanie veľmi dobre a dodá chudému morčaciemu tuk, ktorý mu chýba."
    ],

    kbv28: [
      "Celozrnné makaróny uvar v osolenej vode.",
      "Na panvici orestuj mleté hovädzie dohneda – nie len dosiva. Rozhabarkaj ho vareškou a daj mu čas chytiť farbu.",
      "Kukuricu aj čiernu fazuľu prepláchni v sitku a pridaj ich k mäsu spolu so salsou.",
      "Nechaj to pár minút prebublať a potom vmiešaj uvarené cestoviny priamo do panvice.",
      "Ak je zmes suchá, prilej trochu vody. Salsu používaj radšej redšiu – cestoviny v chladničke tekutinu nasiaknu a to, čo je dnes akurát, bude v stredu suché.",
      "Nechaj vychladnúť, rozdeľ na tri porcie a posyp nasekanou jarnou cibuľkou. Cibuľku daj až pred jedením, v krabičke by zvädla."
    ],

    kbv29: [
      "Rúru zapni na 190 °C. Mleté morčacie zmiešaj s vajíčkom a paradajkovým pretlakom a osoľ. Miešaj len dovtedy, kým to drží pokope.",
      "Zmes natlač do formy na muffiny – vyjde ti z nej šesť až deväť košíčkov. Formičky vytri olejom alebo použi papierové košíčky, morčacie sa inak prichytí.",
      "Mäso v každej formičke zľahka pritlač lyžicou, aby tam neostali vzduchové diery, ale nestláčaj ho nadoraz.",
      "Peč asi 20 minút. Hotové je to pri 74 °C vnútri; mleté morčacie nesmie byť nikde ružové.",
      "Na záver polož na každý košíček plátok syra a vráť do rúry na minútu, nech sa roztopí.",
      "Brokolicu uvar v osolenej vode domäkka a prepláchni studenou vodou.",
      "Nechaj vychladnúť a do každej krabičky daj dva až tri košíčky a porciu brokolice. Košíčky sú dobré aj studené ako desiata."
    ],

    kbv30: [
      "Ryžu uvar v osolenej vode.",
      "Z mletého hovädzieho vytvaruj guľky. Nijako ich neopekaj – uvaria sa priamo v omáčke a tá od nich zhustne.",
      "Paradajkový džús nalej do hrnca, ochuť ho štipkou škorice a klinčeka a priveď k miernemu varu. Oboch korenín daj naozaj málo, sú veľmi silné a ľahko prebijú všetko ostatné.",
      "Guľky vkladaj do omáčky po jednej a prvých päť minút nemiešaj, nech sa spevnia a nerozpadnú.",
      "Var ich asi 15 minút na miernom ohni. Hotové sú, keď sú vnútri bez ružovej. Omáčka medzitým zhustne tým, ako z guliek vytečie trochu šťavy.",
      "Nechaj vychladnúť a do krabičky daj ryžu a zalej ju paradajkovou omáčkou s guľkami. Omáčka drží mäso šťavnaté niekoľko dní."
    ],

    kbv32: [
      "Cestoviny uvar v dobre osolenej vode. Pred zliatím si odlož asi pol deci horúcej vody z varenia – bez nej sa pesto s cestovinami nespojí a ostane mastné.",
      "Kuracie prsia nakrájaj na kocky, osuš, osoľ a okoreň.",
      "Panvicu rozpáľ s olivovým olejom a mäso opekaj asi osem minút dozlatista. Prvú minútu a pol sa ho nedotýkaj.",
      "Stiahni plameň na minimum a až potom pridaj uvarené cestoviny, pesto a trochu odloženej vody. Pesto nemá zovrieť – stratilo by farbu aj vôňu.",
      "Dobre premiešaj, kým sa omáčka nespojí a neobalí každú cestovinu.",
      "Pridaj na polovice prekrojené cherry paradajky a len minútku prehrej.",
      "Nechaj vychladnúť a rozdeľ do troch nádob. Olej v peste zabráni tomu, aby sa cestoviny v chladničke zlepili."
    ],

    kbv33: [
      "Gnocchi hoď do vriacej osolenej vody a var len dovtedy, kým nevyplávajú na povrch – to sú asi dve minúty a je to presný signál, že sú hotové. Hneď ich vyber dierovanou lyžicou, dlhším varením sa rozpadnú na kašu.",
      "Na veľkej panvici rozohrej maslo a pridaj pretlačený cesnak. Hneď za ním, do pár sekúnd, vhoď špenát – cesnak sa v masle pripáli veľmi rýchlo.",
      "Nechaj špenát zvädnúť, asi minútu. Bude vyzerať, že sa ti na panvicu nezmestí, ale scvrkne sa na hrsť.",
      "Stiahni plameň a vmiešaj ricottu, soľ, korenie a štipku muškátového orieška. Muškátový oriešok strúhaj čerstvý a daj ho málo, je veľmi silný.",
      "Vhoď uvarené gnocchi a zľahka premiešaj – nemiešaj ich energicky, rozmačkali by sa.",
      "Nechaj vychladnúť a rovnomerne naporcuj. Ricotta je ľahšia než smotana a po ohriatí sa stane vláčnou."
    ],

    kbv34: [
      "Cestoviny uvar v osolenej vode domäkka a sceď.",
      "Maslovú tekvicu uvar domäkka a popuč na hladké pyré.",
      "V hrnci na miernom ohni zohrej mlieko a vmiešaj do neho tekvicové pyré. Nenechaj to zovrieť.",
      "Stiahni hrniec z platne a až potom prisýpaj nastrúhaný čedar, po hrstiach, a každú nechaj rozpustiť, než pridáš ďalšiu. Keby si syr hodil do vriaceho mlieka, vytlačí sa z neho tuk a dostaneš gumovú hrudu v mastnote.",
      "Dochuť soľou a štipkou údenej papriky.",
      "Vmiešaj uvarené makaróny priamo do omáčky.",
      "Nechaj vychladnúť a rozdeľ. Tekvicové pyré je tu tajná ingrediencia – drží omáčku tekutú, takže ani po ohriatí nestvrdne na syrovú tehlu."
    ],

    kbv35: [
      "Rúru zapni na 200 °C. Cherry paradajky polož v celku na plech, pridaj celé neošúpané strúčiky cesnaku, pokvapkaj olejom, osoľ a peč 20 minút.",
      "Paradajky nechaj celé, nekrájaj ich. Pri pečení popraskajú samy a šťava, ktorú pustia, sa zmieša s olejom – to je celá omáčka tohto jedla.",
      "Zatiaľ uvar celozrnné fusilli v osolenej vode.",
      "Upečený cesnak vytlač zo šupky a roztlač vidličkou priamo na plechu. Pečený cesnak je sladký a jemný, nie ostrý ako surový, preto sa ho tu môžu dať dva strúčiky.",
      "Zmiešaj roztlačený cesnak so šťavou z paradajok a pridaj uvarené cestoviny. Primiešaj hrsť natrhanej čerstvej bazalky až teraz, po odstavení – teplom by zhnedla a stratila vôňu.",
      "Nechaj vychladnúť, nalož do nádob a až navrch rozsyp guličky mini mozzarelly. V horúcom by sa roztopili a zmizli do omáčky."
    ],

    kbv36: [
      "Cestoviny farfalle uvar v osolenej vode. Tesne pred zliatím odober malú šálku horúcej vody z varenia, asi 50 ml.",
      "Údeného lososa nakrájaj na menšie pásiky. Je už hotový, takže sa nebude variť – len sa v teple prehreje.",
      "Horúce cestoviny vráť do hrnca mimo platne. Pridaj krémový syr a odloženú horúcu vodu a miešaj, kým sa syr nerozpustí do hladkej omáčky. Teplo z cestovín na to stačí, platňu nezapínaj.",
      "Pridaj kúsky lososa, citrónovú šťavu a nasekaný kôpor a jemne premiešaj. Údený losos je slaný, takže pravdepodobne nebudeš musieť vôbec soliť.",
      "Nechaj vychladnúť a rozdeľ do troch krabičiek.",
      "Pri ohrievaní zníž výkon mikrovlnky na stredný, asi 600 W. Údený losos sa na plnom výkone scvrkne a vyschne. A keďže je to ryba, zjedz to do dvoch dní."
    ],

    kbv37: [
      "Rúru zapni na 200 °C. Do stredu menšieho plechu polož celý blok fety. Nekrájaj ho – má sa upiecť vcelku a rozmiačkať až potom.",
      "Okolo fety rozsyp cherry paradajky v celku a celé neošúpané strúčiky cesnaku. Pokvapkaj olivovým olejom a posyp oreganom a korením. Soľ nepridávaj, feta je slaná dosť.",
      "Peč 25 až 30 minút. Hotové je to, keď paradajky popraskali a pustili šťavu a feta je mäkká so zlatistými miestami.",
      "Medzitým uvar cestoviny v osolenej vode a sceď ich.",
      "Misku vyber z rúry, cesnak vytlač zo šupky a vidličkou roztlač fetu, cesnak aj paradajky priamo v miske. Omáčka sa spojí sama od seba – roztopená feta funguje ako spojivo, nič mixovať netreba.",
      "Zmiešaj omáčku s uvarenými cestovinami. Nechaj vychladnúť a rozdeľ do krabičiek. Táto omáčka znáša chlad aj ohrev lepšie než smotanové."
    ],

    kbv38: [
      "Tagliatelle uvar v dobre osolenej vode domäkka.",
      "Cibuľu nakrájaj nadrobno a šampiňóny na plátky.",
      "Na panvici rozohrej olej a orestuj cibuľu tri až päť minút, kým nebude priehľadná. Cesnak pridaj až na posledných 30 sekúnd.",
      "Pridaj šampiňóny a opekaj ich sprudka. Najprv pustia vodu – nechaj ju úplne odpariť a až potom huby začnú hnednúť. Práve tá posledná fáza je tá chutná, tak to neukonči priskoro. Trvá to päť až sedem minút.",
      "Pridaj lístky čerstvého tymianu, soľ a korenie. Tymian je výnimka medzi čerstvými bylinkami – znesie teplo a v hubovej omáčke sa má krátko povariť.",
      "Zalej smotanou a nechaj dve minúty zredukovať.",
      "Vmiešaj cestoviny do omáčky, nechaj vychladnúť a rozdeľ. Široké rezance do seba pri skladovaní vtiahnu časť smotany – na druhý deň sú plné chuti."
    ],

    kbv39: [
      "Klasické špagety uvar v osolenej vode.",
      "Z cukety vytvor škrabkou alebo špiralizérom dlhé zoodles. Nesoľ ich vopred – soľ z nich vytiahne vodu a v panvici by sa potom len varili.",
      "Kuracie prsia nakrájaj na malé kocky, osuš a sprudka opeč na oleji. Ku koncu pridaj pretlačený cesnak a čili vločky a nechaj ich 30 sekúnd rozvoňať.",
      "Vhoď surové cuketové špagety a opekaj ich maximálne minútu, nanajvýš dve. Toto je celý trik tohto jedla: cuketa sa nemá uvariť, len prehriať. Po dvoch minútach pustí vodu a zmení sa na kašu.",
      "Vmiešaj klasické uvarené špagety, premiešaj a hneď odstav.",
      "Posyp parmezánom, nechaj vychladnúť a rozdeľ. Počítaj s tým, že cuketa v chladničke ešte trochu vody pustí – toto jedlo je najlepšie v prvý deň."
    ],

    kbv41: [
      "Cestoviny uvar v osolenej vode, ale nechaj ich výrazne tvrdšie než zvyčajne – v rúre ešte dôjdu a potom aj pri ohrievaní. Sceď ich.",
      "Vo veľkej miske zmiešaj cestoviny, cottage syr, passatu, pretlačený cesnak, talianske bylinky, soľ a baby špenát. Špenát pridaj surový, v rúre zvädne sám.",
      "Zmes prelož do menšej zapekacej misy a rozhrň ju do rovnej vrstvy.",
      "Vrch posyp strúhanou mozzarellou.",
      "Peč pri 200 °C asi 15 minút, kým syr nevytvorí zlatistú kôrku. Tá kôrka drží vo vnútri všetku vlhkosť – preto sú tieto cestoviny šťavnaté aj po ohriatí.",
      "Nechaj vychladnúť a až potom rozkroj na tri rovnaké časti. Horúce by sa rozsypali."
    ],

    kbv43: [
      "Rigatoni uvar v osolenej vode o minútu kratšie, než hovorí obal. Hrubé trubičky sú tu zámer – omáčka sa dostane dovnútra a jedlo sa v krabičke nerozmočí.",
      "Cibuľu nakrájaj a orestuj na panvici s olejom, kým nestratí bielu farbu.",
      "Pridaj mleté morčacie a sprudka ho opeč. Morčacie je veľmi chudé a ľahko vyschne, tak ho nerestuj dlhšie, než kým stratí ružovú farbu.",
      "Zalej pasírovanými paradajkami, pridaj talianske korenie a soľ a dus desať minút, kým omáčka nezhustne.",
      "Na záver vlej smotanu a nechaj minútu prebublať. Smotana tu nie je len na chuť – dodá chudému morčaciemu tuk, vďaka ktorému nebude v krabičke suché.",
      "Zmiešaj cestoviny priamo s omáčkou v panvici, nechaj vychladnúť a rozdeľ."
    ],

    kbv44: [
      "Do veľkého hrnca daj variť osolenú vodu a vlož do nej špagety. Keď im chýbajú tri minúty do konca, prihoď mrazený hrášok a malé ružičky brokolice – uvaria sa v tej istej vode a ušetríš si hrniec aj umývanie.",
      "Pred zliatím odober šálku horúcej vody z varenia, asi 100 ml. Bez nej sa omáčka nespojí.",
      "Do mixéra daj cottage syr, cesnak, citrónovú šťavu, soľ, korenie a polovicu odloženej vody. Rozmixuj na hladkú omáčku. Toto je ten trik: rozmixovaný cottage syr má textúru smotany, ale desaťkrát viac bielkovín.",
      "Špagety so zeleninou vráť do hrnca mimo platne a prelej ich omáčkou. Nezapínaj platňu – cottage syr by sa pri zahriatí zrazil na zrnká.",
      "Keď je omáčka prihustá, rozrieď ju zvyškom odloženej vody.",
      "Nalož do krabičiek a posyp parmezánom. Pri ohrievaní daj polovičný výkon mikrovlnky, nech sa omáčka nezrazí."
    ],

    kbv45: [
      "Cestoviny uvar domäkka. Kyslé uhorky nakrájaj na úplne drobné kocky – majú sa v omáčke stratiť a zanechať len kyslosť, nie sa dať vyloviť.",
      "Na panvici orestuj cibuľku s olejom, kým nebude priehľadná.",
      "Kuracie prsia nakrájaj na rezance, osuš a opeč ich na panvici.",
      "Pridaj nakrájané šampiňóny a opekaj, kým nepustia vodu, tá sa neodparí a huby nezačnú hnednúť.",
      "Stiahni oheň na minimum – alebo panvicu rovno odstav. Až potom pridaj horčicu, uhorky, kyslú smotanu, soľ a korenie. Kyslá smotana sa vo vriacej panvici zrazí na zrnká, tak už nevar, len prehrej.",
      "Zmiešaj s uvarenými cestovinami, nechaj vychladnúť a rozdeľ. Horčica a kyslé uhorky sa za deň v chladničke nádherne preležia – toto jedlo je na druhý deň lepšie než v prvý."
    ],

    kbv46: [
      "Ryžu uvar v osolenej vode podľa návodu.",
      "Na hlbšej panvici rozohrej olej a minútu na ňom orestuj kari pastu, kým nezavonia. Bez tohto kroku chutí kari ploško a surovo – pasta potrebuje tuk a teplo, aby sa rozvinula.",
      "Pridaj cícer prepláchnutý v sitku, krájané paradajky z konzervy a kokosové mlieko.",
      "Nechaj prebublávať desať minút na miernom ohni, kým omáčka nezhustne. Prudký var by kokosové mlieko rozdelil na tuk a vodu.",
      "Odstav z ohňa a až potom vhoď baby špenát. Zvädne za pár sekúnd zo zvyškového tepla; keby si ho varil, zošediveje.",
      "Nechaj vychladnúť a do jednej polovice krabičky daj ryžu, do druhej cícerové kari. Strukoviny v omáčke sú na meal prep to najlepšie – na tretí deň chutia najlepšie zo všetkého."
    ],

    kbv47: [
      "Tofu poriadne osuš: polož ho medzi papierové utierky, navrch dosku a na ňu niečo ťažké, a nechaj ho tak aspoň desať minút. Čím viac vody z neho vytlačíš, tým chrumkavejšie bude. Potom ho nakrájaj na kocky.",
      "Kocky daj do misky, zasyp kukuričným škrobom a opatrne pretrep, aby bola každá obalená tenkou bielou vrstvičkou. Škrob je celé tajomstvo chrumkavého tofu – vytvorí povrch, ktorý sa opečie dochrumkava a vydrží aj po ohriatí.",
      "Na panvici rozohrej olej a tofu opekaj zo všetkých strán 8 až 10 minút. Nehýb s ním, kým sa od panvice samo nepustí – obalené tofu sa na začiatku lepí a odtrhnutím by si z neho strhol kôrku.",
      "Zatiaľ uvar ryžu a brokolicu oblanšíruj vo vriacej vode asi štyri minúty.",
      "Sójovú omáčku zmiešaj s medom a vylej na opečené tofu. Rýchlo premiešaj – omáčka na horúcej panvici okamžite zhustne a obalí kocky lepkavou glazúrou. Je to otázka 20 sekúnd, tak to nenechaj bez dozoru.",
      "Nechaj vychladnúť a rozdeľ ryžu, brokolicu a lepkavé tofu."
    ],

    kbv48: [
      "Ryžu basmati uvar v osolenej vode. Červenú šošovicu prepláchni v sitku studenou vodou.",
      "Na hlbšej panvici orestuj na oleji nakrájanú cibuľu, kým nestratí bielu farbu, a pridaj cesnak na posledných 30 sekúnd.",
      "Zasyp korením Garam Masala a miešaj, kým nezačne voňať – asi pol minúty. Sušená zmes pražená v tuku je úplne iná vec než tá istá zmes nasypaná do omáčky.",
      "Pridaj prepláchnutú šošovicu, zalej ju passatou a zhruba 300 ml vody. Osoľ.",
      "Dus pod pokrievkou 15 až 20 minút. Červená šošovica sa postupne rozpadne a zmes zhustne na kašu. Občas premiešaj a poškriab dno – hustý dahl sa pripaľuje veľmi ochotne.",
      "Nechaj vychladnúť a do krabičiek naber ryžu a dahl. V chladničke ešte zhustne; pri ohrievaní vmiešaj dve lyžice teplej vody."
    ],

    kbv49: [
      "Ryžu uvar klasicky vo vode.",
      "Fazuľu aj kukuricu preklop do sitka a dôkladne prepláchni studenou vodou, kým nálev neprestane peniť. Nálev je slaný, škrobový a je hlavný dôvod nadúvania po strukovinách.",
      "Daj ich na panvicu a zalej paradajkovým pyré. Pridaj soľ, mletú sladkú papriku a štipku čili.",
      "Nechaj päť až sedem minút prebublávať na miernom ohni, kým chute nesplynú a zmes nezhustne. Fazuľa sa pritom čiastočne rozpadne a omáčku zahustí sama od seba.",
      "Nechaj vychladnúť, na dno krabičky daj ryžu a navrch fazuľovo-kukuričnú zmes.",
      "Avokádo do krabičky nekrájaj. Do druhého dňa by zhnedlo a zmäklo – zober si ho do práce vcelku a rozkroj ho až tam."
    ],

    kbv50: [
      "Rúru zapni na 200 °C. Batáty ošúp, nakrájaj na menšie kocky, jemne osoľ a peč 20 minút rozložené v jednej vrstve.",
      "Tofu osuš a rozdrob prstami na nepravidelné kúsky. Prstami, nie nožom – nepravidelné hrudky vyzerajú a aj sa správajú ako praženica.",
      "Na panvici rozohrej olej a orestuj nakrájanú cibuľu a červenú papriku, kým nezmäknú, asi päť minút.",
      "Pridaj rozdrobené tofu, zasyp kurkumou a dobre premiešaj. Kurkuma tu robí hlavne farbu – bez nej by bolo tofu mŕtvolne biele.",
      "Opekaj asi päť minút a nechávaj tofu chvíľu ležať bez miešania, nech chytí farbu. Dochuť soľou a korením; ak máš čiernu soľ Kala Namak, použi ju – má sírnu chuť, ktorá naozaj pripomína vajcia.",
      "Nechaj vychladnúť a rozdeľ upečené batáty a tofu praženicu."
    ],

    kbv51: [
      "Ryžové rezance zalej vriacou vodou a nechaj zmäknúť tri až päť minút. Sceď ich a prepláchni studenou vodou – zastavíš tým varenie a nezlepia sa do hrudy.",
      "Brokolicu rozober na malé ružičky, zalej vriacou vodou a nechaj tri minúty stáť. Nevar ju – v krabičke a pri ohrievaní ešte zmäkne.",
      "Tofu poriadne osuš, ideálne ho na desať minút zaťaž medzi papierovými utierkami, a nakrájaj na kocky.",
      "Na panvici so sezamovým olejom opekaj tofu dochrumkava. Nechaj kocky ležať bez dotyku, kým sa od panvice samy nepustia – vtedy majú kôrku a nerozpadnú sa pri obracaní.",
      "Vylej na tofu teriyaki omáčku a nechaj ju minútu skaramelizovať na miernom ohni. Má veľa cukru, na vysokom plameni by sa pripálila.",
      "Nechaj vychladnúť, na dno ulož rezance, na ne brokolicu a lepkavé tofu. Posyp sezamom.",
      "Rezance po scedení premasíruj pár kvapkami sezamového oleja – v krabičke sa potom nezlepia."
    ],

    kbv53: [
      "Rúru zapni na 200 °C. Zemiaky nakrájaj na mesiačiky, pokvapkaj olejom, osoľ a daj piecť 25 minút.",
      "Fazuľu prepláchni a potom ju poriadne osuš – rozlož ju na utierku a nechaj odkvapkať. Mokrá fazuľa znamená riedku hmotu, z ktorej sa fašírka rozpadne.",
      "V miske fazuľu roztlač vidličkou na hrubú kašu. Nerob z nej pyré, nechaj v nej kúsky – tie držia fašírku pohromade a dávajú jej textúru.",
      "Pridaj vajíčko, jemné ovsené vločky, sušený cesnak, mletú papriku, soľ a korenie a dobre vypracuj. Vločky nasajú prebytočnú vlhkosť; ak je hmota ešte riedka, nechaj ju desať minút postáť, napučia.",
      "Vlhkými rukami vytvaruj šesť fašírok a ulož ich na plech k zemiakom asi 15 minút pred koncom pečenia.",
      "Peč ich v rúre, nie na panvici. Na panvici by sa rozpadli a pustili mastnotu; v rúre sa spevnia a ostanú celé aj po ohriatí.",
      "Nechaj vychladnúť a do každej nádoby daj zemiaky a dve fašírky."
    ],

    kbv54: [
      "Žltý polený hrach prepláchni a daj variť do osolenej vody v pomere jeden diel hrachu na dva diely vody. Var na miernom ohni asi 25 minút. Polený hrach sa nemusí namáčať.",
      "Občas premiešaj a poškriab dno – hrachová kaša sa pripaľuje veľmi ochotne a pripálená chuť sa už nedá prekryť ničím.",
      "Medzitým na panvici rozohrej olej. Cibuľu nakrájaj na pásiky a údené tofu na malé kocky. Opekaj ich spolu, kým tofu neschrumkavie a cibuľa nezozlatne.",
      "Keď je hrach mäkký a rozvarený, pridaj k nemu pretlačený cesnak a majoránku a poriadne rozmiešaj. Majoránku rozotri medzi prstami, než ju pridáš – uvoľní tým vôňu.",
      "Cesnak sa pridáva až teraz, surový do horúcej kaše. Dlhým varením by stratil ostrosť, ktorá k hrachovej kaši patrí.",
      "Nechaj vychladnúť, rozdeľ kašu a vrch bohato posyp opečenou cibuľkou s tofu. Pred zohrievaním kašu pokvapkaj lyžicou vody, inak bude ako tehla."
    ],

    kbv55: [
      "Quinou prepláchni horúcou vodou v jemnom sitku a uvar asi 15 minút v dvojnásobnom množstve osolenej vody.",
      "Cuketu a červenú papriku nakrájaj na menšie kocky. Na panvici rozohrej olej a zeleninu opekaj asi päť minút, kým nezmäkne a voda z nej sa neodparí.",
      "Pridaj cícer prepláchnutý v sitku, zalej pasírovanými paradajkami a pridaj oregano, soľ a korenie.",
      "Nechaj päť až sedem minút prebublávať, kým omáčka nezhustne.",
      "Nechaj vychladnúť a do jednej časti krabičky ulož quinou, do druhej cícerovo-zeleninovú zmes.",
      "Quinoa nenasáva vlhkosť tak agresívne ako ryža a cícer drží štruktúru aj na štvrtý deň – toto jedlo je z celej knihy jedno z najtrvanlivejších."
    ],

    kbv56: [
      "Ryžu basmati uvar v osolenej vode.",
      "Tofu poriadne osuš a nakrájaj na kocky. Červenú papriku nakrájaj na menšie kúsky.",
      "Na panvici rozohrej olej a tofu opekaj dochrumkava asi osem minút. Nehýb s kockami, kým sa od panvice samy nepustia.",
      "Pridaj papriku a arašidy a opekaj ďalšie tri minúty. Arašidy sa v horúcej panvici krásne opražia a zosilnie im chuť – ale sleduj ich, z opražených sú spálené za chvíľu.",
      "V miske zmiešaj sójovú omáčku, med, ocot a čili vločky. Vylej zmes na panvicu a nechaj minútu až dve zredukovať, kým neobalí všetko lepkavou glazúrou.",
      "Nechaj vychladnúť a do jednej polovice ulož ryžu, do druhej Kung Pao s arašidmi. Lepkavá omáčka drží na tofu vlhkosť, takže v mikrovlnke nevyschne."
    ],

    kbv57: [
      "Celozrnné cestoviny uvar v osolenej vode domäkka.",
      "Cibuľu nakrájaj nadrobno a orestuj na oleji tri až päť minút, kým nebude priehľadná.",
      "Teraz príde krok, na ktorom to celé stojí. Stiahni oheň na minimum, zasyp cibuľu sladkou paprikou, dve sekundy premiešaj a ihneď podlej 150 ml vody. Mletá paprika v horúcom tuku zhorkne rýchlejšie než čokoľvek iné a horkosť sa už nedá odstrániť.",
      "Pridaj cícer prepláchnutý v sitku, osoľ a nechaj dusiť desať minút. Cícer sa čiastočne rozpadne a omáčku zahustí.",
      "Na záver vlej smotanu a nechaj prebublať.",
      "Nechaj vychladnúť, rozdeľ cestoviny a zalej ich omáčkou. V chladničke mierne zhustne – pred ohrievaním pridaj lyžicu vody."
    ],

    kbv58: [
      "Ryžu basmati uvar klasicky. Zelené fazuľky uvar v pare domäkka, asi päť až sedem minút.",
      "V malej miske vymiešaj arašidové maslo, sójovú omáčku, javorový sirup a trochu horúcej vody. Vodu pridávaj po troškách – zmes sa najprv zdanlivo zrazí na tuhú hrudu a až potom sa rozriedi na hladkú omáčku.",
      "Tofu rozdrob rukami alebo nakrájaj na kocky a opeč na panvici s olejom dozlatista.",
      "Stiahni plameň, zalej tofu arašidovou omáčkou a dobre premiešaj, aby sa obalilo.",
      "Nechaj vychladnúť, do krabičiek ulož ryžu, vedľa zelené fazuľky a navrch arašidové tofu.",
      "Arašidová omáčka je mimoriadne stabilná – nepustí vodu ani po troch dňoch a tofu v nej ostane šťavnaté."
    ],

    kbv59: [
      "Cestoviny uvar v osolenej vode domäkka a sceď.",
      "Mrkvu nastrúhaj najemno. Na panvici rozohrej olej a jemne ju orestuj s pretlačeným cesnakom – nastrúhaná mrkva sa v omáčke rozpustí a dodá jej sladkosť bez cukru.",
      "Pridaj bielu fazuľu prepláchnutú v sitku, zalej passatou, osoľ a pridaj talianske bylinky.",
      "Dus na miernom ohni asi desať minút. Biela fazuľa je mäkká a časť sa jej pri dusení rozpadne – práve tým ragú zhustne a získa konzistenciu, akú by si inak dosiahol len smotanou.",
      "Vmiešaj uvarené cestoviny priamo do ragú, nech ho nasiaknu.",
      "Nechaj vychladnúť a rozdeľ do troch krabičiek."
    ],

    kbv60: [
      "Zemiaky ošúp, nakrájaj na menšie kocky a daj variť do menšieho množstva osolenej vody spolu s bobkovým listom. Vodu nezlievaj – stane sa z nej omáčka, preto jej dávaj málo, len aby boli zemiaky tesne ponorené.",
      "Vajcia uvar natvrdo osem minút, preleč studenou vodou, ošúp a prekroj na polovice.",
      "Keď sú zemiaky mäkké, pridaj k nim fazuľu prepláchnutú v sitku.",
      "Vlej smotanu a nechaj tri minúty prebublať, kým sa nevytvorí hustejšia omáčka. Časť zemiakov môžeš vareškou rozotrieť o stenu hrnca – zahustia ju ešte viac.",
      "Odstav z ohňa, vyber bobkový list (po dlhšom státí by zhorkol) a dochuť lyžicou octu a čiernym korením. Ocot je tu podstata jedla, nie ozdoba – pridávaj po troškách a ochutnávaj.",
      "Nechaj vychladnúť, rozdeľ prívarok a na vrch každej krabičky polož prekrojené vajíčko. Prívarok v chladničke stuhne, čo je v poriadku – po ohriatí sa vráti."
    ],

    kbv76: [
      "Udon rezance uvar podľa návodu a sceď. Sú hrubé a mäsité, preto sa v mikrovlnke nerozvaria na kašu ako tenké rezance.",
      "Hovädzie mäso nakrájaj na tenké pásiky naprieč vláknami a osuš ich.",
      "Wok alebo veľkú panvicu rozpáľ naozaj dohoráca a nalej olej. Pridaj pretlačený cesnak a nastrúhaný zázvor a hneď za nimi mäso – cesnak so zázvorom horia za pár sekúnd, nesmú ostať v panvici samy.",
      "Mäso opekaj sprudka tri až štyri minúty. Rozlož ho v jednej vrstve; keď ho natlačíš, pustí vodu a budeš ho dusiť namiesto opekať.",
      "Pridaj nakrájanú papriku a cukrový hrášok a opekaj ďalšie tri minúty. Zelenina má ostať chrumkavá.",
      "Vhoď uvarené rezance, zalej sójovou a ustricovou omáčkou, zakvapkaj sezamovým olejom a premiešaj na silnom ohni. Sezamový olej ide až na záver, varením stráca vôňu.",
      "Nechaj vychladnúť a rozdeľ do krabičiek."
    ],

    kbv77: [
      "Ryžové rezance zalej vriacou vodou a nechaj zmäknúť, potom sceď. Nechaj ich radšej o chlp tvrdšie – ešte prejdú panvicou.",
      "V miske zmiešaj sójovú omáčku, med a limetkovú šťavu. Toto je celá omáčka Pad Thai: slané, sladké a kyslé v rovnováhe. Ochutnaj a dolaď.",
      "Kuracie prsia nakrájaj na malé kocky a opeč na panvici dozlatista.",
      "Mäso odhrň na okraj panvice, na voľné miesto rozbi vajíčka a rýchlo ich rozmiešaj vareškou. Keď sú skoro hotové, zmiešaj ich s mäsom – vajcia sa robia bokom práve preto, aby sa nerozptýlili po celom jedle.",
      "Pridaj zmäknuté rezance a omáčku a rýchlo všetko premiešaj na silnom ohni. Rezance sú krehké, tak ich prehadzuj radšej dvoma vareškami ako jednou.",
      "Vhoď mungo klíčky a hneď odstav – majú ostať chrumkavé.",
      "Nechaj vychladnúť, rozdeľ a posyp nasekanými arašidmi. Pribaľ si mesiačik čerstvej limetky a pokvapkaj ním jedlo až v práci po zohriatí."
    ],

    kbv78: [
      "Ryžu basmati uvar v osolenej vode. Zelené fazuľky uvar v pare domäkka.",
      "Bravčové mäso nakrájaj na úplne tenké rezančeky naprieč vláknami. Čím tenšie, tým rýchlejšie sa opečú a tým menej stihnú vyschnúť.",
      "Panvicu rozpáľ dohoráca, nalej olej, pridaj pretlačený cesnak a hneď za ním mäso. Sprudka opekaj a nechaj ho chvíľu ležať, nech chytí farbu.",
      "Zalej sójovou omáčkou a Hoisin a pridaj štipku čili. Hoisin je hustá a sladká, funguje ako ázijské BBQ – na miernom ohni obalí mäso lesklou vrstvou, na prudkom by sa pripálila.",
      "Vhoď zelené fazuľky a prehrej ich v omáčke minútu.",
      "Nechaj vychladnúť, na dno ulož ryžu a na ňu bravčové rezančeky."
    ],

    kbv79: [
      "Jazmínovú ryžu uvar klasicky vo vode. Cuketu nakrájaj na menšie kocky.",
      "Na hlbšej panvici orestuj na oleji zelenú kari pastu asi 30 sekúnd, kým nezavonia. Bez tohto kroku chutí kari surovo a plocho.",
      "Pridaj kuracie mäso nakrájané na kocky a opeč ho do zatiahnutia.",
      "Pridaj cuketu a zalej všetko kokosovým mliekom. Nechaj desať minút prebublávať na miernom ohni – prudký var by kokosové mlieko rozdelil na tuk a vodu.",
      "Odstav z ohňa a až potom vhoď baby špenát. Zvädne za pár sekúnd zo zvyškového tepla.",
      "Zakvapkaj limetkovou šťavou po odstavení, nie počas varenia – kyselina sa teplom stráca a práve ona drží zelené kari svieže.",
      "Nechaj vychladnúť a rozdeľ s ryžou. Kokosové mlieko si drží krémovú štruktúru aj v chladničke."
    ],

    kbv80: [
      "Ryžu uvar klasicky vo vode. Papriku a ananás nakrájaj na kocky.",
      "V miske zmiešaj pasírované paradajky, sójovú omáčku, med a jablčný ocot. Ochutnaj – má to byť zároveň sladké aj kyslé; keď prevláda jedno, dolaď druhým.",
      "Na panvici rozohrej olej a orestuj papriku s ananásom asi tri minúty. Ananás pustí šťavu a trochu skaramelizuje.",
      "Pridaj krevety a omáčku a opekaj spolu len tri minúty. Ak sú krevety predvarené, stačia dve – sú hotové, keď sú ružové a nepriehľadné, a každá ďalšia minúta z nich robí gumu.",
      "Nechaj vychladnúť a do každej nádoby daj ryžu a navrch krevetovú zmes.",
      "Ohrievaj na strednom výkone a čo najkratšie. Krevety v chladničke zjedz do dvoch dní."
    ],

    kbv81: [
      "Ryžu uvar vo vode. Papriku nakrájaj na menšie kocky.",
      "Z polovice pomaranča nastrúhaj kôru – len oranžovú vrstvu, biela pod ňou je horká. Potom vytlač šťavu z celého pomaranča.",
      "V miske rozmiešaj pomarančovú šťavu, kôru, sójovú omáčku, med a kukuričný škrob. Škrob rozmiešaj dôkladne v studenej tekutine; keby si ho sypal do horúcej panvice, urobil by hrudky.",
      "Kuracie prsia nakrájaj na kocky a orestuj na panvici s olejom. Keď sú prepečené, pridaj papriku a opekaj dve minúty.",
      "Zalej pomarančovou omáčkou a miešaj. Vďaka škrobu zhustne v priebehu pol minúty a získa lesk – nenechávaj to bez dozoru.",
      "Nechaj vychladnúť a do jednej polovice nádoby ulož ryžu, do druhej pomarančové kura. Škrob drží omáčku pokope, takže nestečie na dno a ryžu nerozmočí."
    ],

    kbv82: [
      "Ryžu basmati uvar klasicky. Šalátovú uhorku nakrájaj na úplne tenké plátky.",
      "Panvicu rozpáľ a opeč na nej mleté hovädzie nasucho – pustí dosť vlastného tuku. Rozbíjaj ho vareškou a nechaj zhnednúť.",
      "Keď je mäso prepečené, pridaj pretlačený cesnak a nastrúhaný čerstvý zázvor a nechaj ich pol minúty rozvoňať.",
      "Vlej sójovú omáčku, sezamový olej a med a opekaj dve až tri minúty, kým sa tekutina neodparí a mäso neskaramelizuje na lepkavo.",
      "Nechaj vychladnúť, nalož ryžu, na ňu kórejské mäso a vedľa surové plátky uhorky. Posyp sezamom.",
      "Uhorku pred ohrevom vyber – má byť studená a chrumkavá, to je celý zmysel toho kontrastu k sladkému mäsu."
    ],

    kbv83: [
      "Ryžu uvar podľa návodu. Mango ošúp a odkrájaj dužinu od kôstky.",
      "Polovicu manga rozmixuj na hladké pyré a druhú nakrájaj na kocky. Pyré ide do omáčky a dodá jej sladkosť a hustotu, kocky idú na záver a ostanú cítiť ako kúsky ovocia.",
      "Kuracie mäso nakrájaj na menšie kocky. Na panvici zohrej olej, orestuj v ňom žltú kari pastu asi 30 sekúnd a pridaj mäso. Sprudka ho opeč.",
      "Zalej kokosovým mliekom a mangovým pyré a nechaj desať minút prevrieť na miernom ohni, kým omáčka nezhustne.",
      "Po odstavení vmiešaj kocky manga a nasekaný koriander. Koriander je čerstvá bylinka a teplom stráca všetko, tak ide až na záver.",
      "Nechaj vychladnúť a rozdeľ s ryžou. Sladké mango sa s pikantnou kari pastou za noc v chladničke dokonale prepojí – na druhý deň je toto jedlo lepšie."
    ],

    kbv84: [
      "Ryžu uvar. Brokolicu rozober na malé ružičky a var v pare alebo vo vriacej vode štyri minúty, potom ju prepláchni studenou vodou.",
      "Lososa nakrájaj na väčšie kocky a osuš ich papierovou utierkou.",
      "Na panvici zohrej sezamový olej a kocky lososa opekaj zhruba dve minúty z každej strany. Dlhšie nie – losos sa dopeká aj po odstavení a prepečený je suchý a drobivý.",
      "Zalej rybu teriyaki omáčkou a panvicou len jemne potras. Nemiešaj vareškou, kocky lososa sú krehké a rozpadli by sa.",
      "Nechaj minútu karamelizovať na miernom ohni, kým omáčka neobalí kocky lesklou vrstvou.",
      "Nechaj vychladnúť, na dno ulož ryžu a brokolicu, navrch lososa a posyp sezamom.",
      "V práci nastav mikrovlnku na polovičný výkon a ohrievaj maximálne minútu a pol. Rybu zjedz do dvoch dní."
    ],

    kbv85: [
      "Ryžu uvar. Cukrový hrášok prepláchni vodou.",
      "Kuracie mäso nakrájaj na malé kocky, osuš ho a na rozpálenom oleji sprudka opeč. Prvú minútu a pol sa ho nedotýkaj.",
      "Keď je kura zlatisté, vhoď cukrový hrášok a opekaj ďalšie dve minúty. Lusky majú ostať chrumkavé a jasne zelené – to je celý zmysel tejto zeleniny.",
      "Sladkú čili omáčku zmiešaj so sójovou a vylej do panvice. Stiahni plameň; Sweet Chili je plná cukru a na prudkom ohni sa pripáli za pár sekúnd.",
      "Nechaj minútu prebublať, kým omáčka neobalí mäso.",
      "Nechaj vychladnúť, naber ryžu a navrch polož mäso s hráškom. Lusky schrumkajú aj po ohriatí."
    ],

    kbv86: [
      "Ryžu basmati uvar v osolenej vode.",
      "Morčacie mäso nakrájaj na kocky, papriku na tenké pásiky a bambusové výhonky prepláchni v sitku – nálev z konzervy má výraznú vlastnú chuť.",
      "Na hlbšej panvici orestuj červenú kari pastu na oleji asi 30 sekúnd, kým nezavonia.",
      "Pridaj morčacie mäso a sprudka ho opeč. Morčacie je veľmi chudé, tak ho nerestuj dlhšie, než kým stratí ružovú farbu.",
      "Pridaj papriku a bambusové výhonky, zalej kokosovým mliekom a dochuť kvapkou rybej alebo sójovej omáčky. Rybia omáčka smrdí z fľaše strašne, ale v kari sa zmení na hĺbku, ktorú ničím iným nenahradíš.",
      "Dus na miernom ohni asi desať minút, kým omáčka nezhustne.",
      "Nechaj vychladnúť a rozdeľ s ryžou. Tuk z kokosového mlieka drží chudé morčacie šťavnaté aj po ohriatí."
    ],

    kbv87: [
      "Jazmínovú ryžu uvar klasicky vo vode.",
      "Na panvici zohrej olej, pridaj pretlačený cesnak a štipku čili a hneď za nimi mleté kuracie mäso. Rozbíjaj ho vareškou na drobno.",
      "Keď je mäso prepečené, pridaj zelené fazuľky, sójovú omáčku a med. Restuj tri minúty na silnom ohni, nech sa tekutina odparí a mäso sa zlepí.",
      "Odstav z ohňa a až potom vhoď dve hrste čerstvej bazalky. Toto je celé jedlo: bazalka sa do neho dáva po odstavení a zvädne zo zvyškového tepla. Keby si ju varil, zhnedne a stratí presne tú vôňu, kvôli ktorej sa Pad Kra Pao robí.",
      "Premiešaj a nechaj vychladnúť.",
      "Rozdeľ ryžu a navrstvi na ňu bazalkové kura. Ak to chceš mať poriadne, pribaľ si do práce volské oko a polož ho navrch."
    ],

    kbv89: [
      "Ryžu uvar klasicky. Batáty ošúp a nakrájaj na menšie kocky – menšie preto, že sa budú dusiť v omáčke, nie piecť.",
      "Na hlbšej panvici orestuj na oleji žltú kari pastu asi 30 sekúnd.",
      "Pridaj nakrájané batáty a cícer prepláchnutý v sitku. Zalej kokosovým mliekom a trochou vody tak, aby boli batáty takmer ponorené. Osoľ.",
      "Dus pod pokrievkou 15 až 20 minút, kým batáty nezmäknú. Občas premiešaj; batáty sú sladké a na dne sa ľahko pripália.",
      "Hotové je to, keď do batátu vojde nôž bez odporu, ale kocka ešte drží tvar.",
      "Odstav, vhoď baby špenát a premiešaj – zvädne zo zvyškového tepla.",
      "Nechaj vychladnúť a rozdeľ s ryžou. Batáty v kari omáčke sa nesprávajú ako špongia, takže jedlo v mikrovlnke nevyschne."
    ],

    kbv90: [
      "Na praženú ryžu použi iba ryžu uvarenú deň vopred a úplne vychladnutú v chladničke. Toto nie je rada, ale podmienka: čerstvá teplá ryža je vlhká a na panvici sa z nej stane kaša. Studená má suchý povrch a zrnká sa oddelia.",
      "Studenú ryžu rozdrv vidličkou alebo rukami na jednotlivé zrnká. Mrazenú zeleninu prelej horúcou vodou a nechaj odkvapkať. Šunku nakrájaj na kocky.",
      "Na veľkej panvici rozohrej olej, nalej naň rozšľahané vajíčka a urob z nich rýchlu praženicu. Potom ich zhrň na bok panvice.",
      "Pridaj ryžu, zeleninu a šunku a opekaj na prudkom ohni tri až štyri minúty. Ryžu rozhrň do jednej vrstvy a nechaj ju chvíľu ležať, nech sa zospodu opečie – práve to robí praženú ryžu praženou.",
      "Zalej sójovou omáčkou a sezamovým olejom a opekaj ďalšie dve minúty, kým sa všetko neprepojí.",
      "Nechaj vychladnúť, rozdeľ a posyp nasekanou jarnou cibuľkou až pri servírovaní."
    ],

    jk11: [
      "Rúru vyhrej na 200 °C.",
      "V malej miske zmiešaj med, horčicu, olej, sójovú omáčku, soľ a korenie. Med s horčicou spolu robia glazúru, ktorá sa pri pečení skaramelizuje – horčica zároveň vyrovnáva sladkosť, aby to nebolo ako dezert.",
      "Mrkvu, batát aj červenú cibuľu nakrájaj na väčšie kocky. Väčšie preto, že sa pečú 40 minút a drobné kúsky by sa rozpadli.",
      "Na plech s papierom na pečenie rozlož zeleninu a kuracie stehná, polej marinádou a rukami to poriadne premiešaj, aby bol každý kúsok obalený.",
      "Rozlož všetko do jednej vrstvy. Keď je plech preplnený, marináda sa nemá kde odpariť a namiesto karamelizácie dostaneš varenú zeleninu v sladkej vode.",
      "Peč 35 až 40 minút. Hotové je to, keď je zelenina na okrajoch tmavá a skaramelizovaná a šťava z mäsa vyteká číra. Ak by glazúra začala horieť skôr, prikry plech alobalom.",
      "Nechaj vychladnúť a rozdeľ do troch krabičiek. Vykostené stehná sú do krabičiek lepšie než prsia – majú viac tuku a nevysušia sa ani po treťom ohriatí."
    ],

    jk12: [
      "Na panvici orestuj nadrobno nakrájanú cibuľu a cesnak, pridaj mleté hovädzie a opekaj, kým nezhnedne. Rozhabarkaj ho vareškou a daj mu čas chytiť farbu, nestačí, keď len zošedivie.",
      "Zalej krájanými paradajkami, osoľ, okoreň, pridaj oregano a var päť minút. Zmes má byť hustá, nie vodnatá – zapekačka s riedkou omáčkou sa pri krájaní rozpadne.",
      "Batáty ošúp a nakrájaj na tenké kolieska, ideálne na dva až tri milimetre. Tenké kolieska sa stihnú upiecť domäkka; hrubé by ostali tvrdé aj po 40 minútach.",
      "Na dno pekáča rozlož polovicu batátových koliesok tak, aby sa prekrývali ako škridle. Navrstvi mäsovú zmes a prikry druhou polovicou batátov.",
      "Prikry alobalom a peč na 190 °C asi 25 minút. Alobal je dôležitý – para pod ním batáty uvarí domäkka, bez neho by vrchná vrstva vyschla skôr, než spodná zmäkne.",
      "Potom alobal zlož, posyp syrom a daj zapiecť na ďalších desať minút dozlatista.",
      "Nechaj úplne vychladnúť, ideálne aj v chladničke. Po stuhnutí drží tvar a dá sa krájať na štyri úhľadné diely ako koláč – horúca by sa ti rozpadla."
    ],

    jk13: [
      "V miske zmiešaj ricottu, mlieko, pretlačený cesnak, parmezán, štipku muškátového orieška, soľ a korenie. Mlieko tu nie je navyše: samotná ricotta je príliš hustá a gnocchi by sa v nej pripiekli namiesto uvarili.",
      "Na pekáč vysyp gnocchi priamo z obalu, nevarené. Naozaj nevarené – napijú sa omáčky a zmäknú v nej, takže nasajú oveľa viac chuti, než keby si ich najprv uvaril vo vode.",
      "Pridaj čerstvý baby špenát a zalej všetko ricottovou zmesou. Dôkladne premiešaj, aby bolo každé gnoccho obalené; suché kúsky by v rúre stvrdli.",
      "Rozhrň do rovnej vrstvy a peč na 200 °C približne 20 minút.",
      "Hotové je to, keď omáčka po okrajoch prebublávala a vrchné gnocchi zhnedli. Ak by sa ti zdalo, že vrch schne skôr, než sa stred prepečie, prikry na pár minút alobalom.",
      "Nechaj vychladnúť a rozdeľ do troch krabičiek. Pri ohrievaní pokvapkaj lyžicou mlieka, omáčka v chladničke zhustne."
    ],

    jk14: [
      "Rúru vyhrej na 200 °C. Maslovú tekvicu ošúp a nakrájaj na menšie kocky. Daj ju na polovicu plechu, pokvapkaj olejom, osoľ a peč samotnú desať minút.",
      "Tekvica ide do rúry prvá, lebo je zo všetkého najtvrdšia. Keby si dal všetko naraz, losos by bol suchý skôr, než tekvica zmäkne.",
      "Potom plech vyber a k tekvici pridaj brokolicu rozobratú na malé ružičky a filety z lososa.",
      "Roztopené maslo zmiešaj s pretlačeným cesnakom a polej ním lososa aj brokolicu. Cesnak v masle sa v rúre neprepáli, lebo je rozriedený a chránený maslom.",
      "Vráť do rúry a peč ďalších 12 až 15 minút. Losos je hotový, keď sa dá vidličkou ľahko rozdeliť na plátky a v strede je ešte o odtieň tmavší – po vybratí sa ešte chvíľu dopeká.",
      "Po vybratí lososa pokvapkaj citrónom. Nechaj vychladnúť a rozdeľ do dvoch krabičiek.",
      "V práci lososa nikdy neohrievaj dlhšie než minútu a pol, inak zgumovatie. A keďže je to ryba, zjedz to do dvoch dní."
    ],

    jk15: [
      "Zemiaky predvar v šupke v osolenej vode, nechaj ich vychladnúť, ošúp a nakrájaj na plátky. Vychladnuté sa krájajú na pekné plátky, horúce sa ti rozpadnú.",
      "Vajcia uvar natvrdo osem minút, preleč studenou vodou, ošúp a nakrájaj na kolieska.",
      "Do pekáča vrstvi na striedačku zemiaky, surové ružičky karfiolu, nakrájanú šunku a vajcia. Karfiol ide surový – v zálievke a pod pokrievkou pary sa stihne upiecť a ostane pevnejší, než keby si ho predvaril.",
      "Každú vrstvu jemne osoľ a posyp mletou červenou paprikou. Soľ v každej vrstve je dôležitá; keby si solil len navrchu, spodok by bol mdlý.",
      "Dve surové vajcia rozšľahaj v smotane, pridaj nastrúhaný syr a zmes rovnomerne vylej do pekáča tak, aby zatiekla medzi vrstvy.",
      "Peč na 190 °C asi 30 minút do zlatej chrumkavej kôrky. Vaječná zálievka musí byť stuhnutá – keď zapichneš nôž do stredu, nesmie z neho tiecť tekutina.",
      "Nechaj vychladnúť a nakrájaj na štyri porcie. Polovica zemiakov je tu nahradená karfiolom, takže máš rovnaký objem jedla pri podstatne menej sacharidoch."
    ],

    jk16: [
      "Kuracie prsia polož naplocho, prilož dlaň a prekroj ich pozdĺžne na štyri tenšie plátky. Osoľ, okoreň a ulož na dno pekáča. Pokvapkaj olivovým olejom.",
      "Na každý kúsok mäsa ulož plátky mozzarelly a okolo mäsa rozsyp celé cherry paradajky.",
      "Paradajky nechaj celé, nekrájaj ich. Pri pečení popraskajú samy a šťava, ktorú pustia, sa na dne pekáča zmieša s olejom a výpekom z mäsa – to je celá omáčka tohto jedla.",
      "Peč na 200 °C približne 20 minút. Hotové je to, keď je syr roztopený a mäso má vnútri 74 °C.",
      "Po vybratí z rúry ozdob čerstvou bazalkou. Bazalka ide až teraz – v rúre by zhnedla a stratila vôňu.",
      "Bohato pokvapkaj balzamikovým krémom a nechaj vychladnúť. Krém sa zmieša so šťavou z paradajok a vznikne z toho hustá sladkokyslá omáčka.",
      "Rozdeľ do dvoch krabičiek aj so šťavou z pekáča."
    ],

    jk17: [
      "Bravčovú panenku odblan – tá strieborná blana sa pri pečení stiahne a mäso by sa skrútilo. Potom ju osuš, osoľ a okoreň.",
      "Panvicu rozpáľ naozaj dohoráca a panenku vcelku opeč z každej strany dve minúty. Tu nejde o prepečenie, ale o kôrku, ktorú by si v rúre nikdy nedosiahol.",
      "Jablká nakrájaj na mesiačiky bez jadrovníka a červenú cibuľu na hrubšie mesiačiky. Použi tvrdšie jablká – mäkké odrody by sa za 18 minút rozpadli na kašu.",
      "Na pekáč rozlož jablká a cibuľu, posyp tymianom, jemne osoľ a do stredu polož opečenú panenku.",
      "Peč na 190 °C presne 15 až 18 minút. Panenka musí ostať vnútri jemne ružová – to je 63 °C. Je to veľmi chudé mäso a pár minút navyše z nej urobí suchú tehlu.",
      "Vyber z rúry, mäso prikry voľne položeným alobalom a nechaj päť minút odpočívať. Šťava sa rozíde späť do mäsa namiesto toho, aby vytiekla na dosku.",
      "Až potom nakrájaj na hrubé plátky a rozdeľ s jablkami a cibuľou. Skaramelizované jablká nahradia akúkoľvek ťažkú omáčku."
    ],

    jk18: [
      "Tofu osuš papierovými utierkami a nakrájaj na kocky. Vlož ich do misky, posyp kukuričným škrobom a poriadne pretrep, aby bola každá kocka obalená tenkou bielou vrstvičkou.",
      "Škrob je tu celá podstata: v rúre z neho vznikne tenká chrumkavá škrupinka, ktorá vydrží aj po zaliatí omáčkou aj po ohriatí.",
      "Na plech rozlož obalené tofu aj mrazené zelené fazuľky, jemne pokvapkaj olejom a peč na 200 °C asi 15 minút. Rozlož ich tak, aby sa nedotýkali.",
      "Kým sa to pečie, v malej miske metličkou vyšľahaj arašidové maslo, sójovú omáčku, javorový sirup a srirachu dohladka. Ak je zmes pritvrdá, prilej lyžicu horúcej vody.",
      "Vyber plech, zalej horúce tofu a fazuľky arašidovou omáčkou a premiešaj priamo na plechu.",
      "Daj zapiecť na posledné tri minúty, nech omáčka zhustne a prilepí sa. Dlhšie nie – arašidové maslo sa pripáli a zhorkne.",
      "Nechaj vychladnúť a rozdeľ do dvoch krabičiek. Stačí pridať uvarenú ryžu a máš celý obed."
    ],

    jk19: [
      "Cícer preklop do sitka, prepláchni studenou vodou a potom ho poriadne osuš – rozlož ho na utierku a nechaj odkvapkať. Mokrý cícer sa v rúre uvarí, suchý sa opečie a bude chrumkať.",
      "Maslovú tekvicu nakrájaj na kocky a červenú cibuľu na hrubšie mesiačiky.",
      "Všetko daj na plech s papierom na pečenie, pokvapkaj olejom, posyp údenou paprikou a sušeným cesnakom, jemne osoľ a rukami premiešaj.",
      "Údená paprika je tu tá chuť, ktorá z bezmäsitého jedla urobí niečo výrazné – dodá dymovosť, akú by si inak dostal len zo slaniny.",
      "Rozlož do jednej vrstvy a peč na 200 °C asi 25 minút. Hotové je to, keď tekvica zmäkne a cícer je na povrchu chrumkavý a miestami popraskaný.",
      "Po vybratí z rúry posyp rozmrveným balkánskym syrom. Soľ pridávaj opatrne, syr je slaný.",
      "Nechaj vychladnúť a rozdeľ. Cícer sa nerozmočí ani po dvoch dňoch v chladničke."
    ],

    jk20: [
      "Ružičkový kel očisti, odrež tvrdý koniec a každú ružičku prekroj na polovice. Prekrojiť ich je dôležité – celé by sa zvonku spálili, kým vnútri ostanú surové, a práve surový kel chutí tak, ako si ho pamätáš zo školskej jedálne.",
      "Morčacie prsia nakrájaj na väčšie kocky a daj ich na plech spolu s kelom.",
      "Posyp to kúskami slaniny, pokvapkaj olejom a medom, osoľ a okoreň. Med tu nie je na sladkosť – zrazí prirodzenú horkosť kelu a pomôže mu skaramelizovať.",
      "Kel polož rezom nadol, tá plocha pekne zhnedne a zosladne.",
      "Peč na 200 °C 20 až 25 minút. V polovici plech vyber a všetko premiešaj, nech sa kúsky obalia vo vypečenej slanine.",
      "Hotové je to, keď sú vonkajšie listy kelu tmavé až čierne na okrajoch – to nie je spálené, to je presne tá chuť, o ktorú tu ide.",
      "Nechaj vychladnúť a rozdeľ do dvoch krabičiek."
    ],

    jk21: [
      "Kvasenú kapustu ochutnaj. Ak je veľmi kyslá, prepláchni ju studenou vodou a vyžmýkaj; ak je akurát, nechaj ju tak – nálev dodá guľášu chuť.",
      "Na masti orestuj nakrájanú cibuľu dosklovita, teda kým nestratí bielu farbu a nebude priehľadná. Nie dohneda.",
      "Pridaj mäso nakrájané na kocky a opekaj, kým sa nezatiahne zo všetkých strán.",
      "Teraz ten krok, na ktorom guláš stojí alebo padá: stiahni hrniec z ohňa, zasyp mletou paprikou, dve sekundy premiešaj a hneď zalej vodou tak, aby bolo mäso tesne zakryté. Paprika v horúcej masti zhorkne za pár sekúnd a horkosť sa už nedá odstrániť.",
      "Pridaj drvenú rascu, bobkový list a soľ a dus pod pokrievkou asi 20 minút, kým nie je mäso polomäkké.",
      "Pridaj kvasenú kapustu a dus ďalších 15 minút.",
      "Odober naberačku horúcej šťavy, rozmiešaj ju v miske so smotanou a až túto zmes vylej späť do hrnca. Keby si studenú smotanu lial priamo do vriaceho guláša, zrazila by sa. Nechaj minútu prebublať.",
      "Nechaj vychladnúť a do krabičky si prilož varené zemiaky alebo celozrnné cestoviny namiesto knedle."
    ],

    jk22: [
      "Sušené dubáky zalej horúcou vodou a nechaj 15 minút napučať. Vodu, v ktorej sa máčali, v žiadnom prípade nevylievaj – je to koncentrovaný hubový vývar a najväčšia časť chuti celého jedla.",
      "Naturálnu ryžu uvar vopred. Je to hnedá ryža, takže potrebuje dlhšie než biela, asi 35 až 40 minút.",
      "Na masle speni nakrájanú cibuľu a cesnak. Pridaj zmäknuté dubáky, nasekané na menšie kúsky, a chvíľu ich orestuj.",
      "Ak používaš víno, podlej ním hríby a nechaj ho úplne odpariť. Alkohol musí odísť, inak bude rizoto trpké.",
      "Pridaj uvarenú naturálnu ryžu a podlievaj ju po naberačkách vývarom z dubákov. Nalej, premiešaj, nechaj vpiť a až potom pridaj ďalšiu. Pri nalievaní dávaj pozor na usadeninu na dne – ostal v nej piesok z húb.",
      "Keď ryža nasaje chuť húb, odstav z ohňa a až potom vmiešaj smotanu a parmezán. Parmezán vo vriacom rizote by sa zrazil.",
      "Dochuť soľou, korením a nasekanou petržlenovou vňaťou. Nechaj vychladnúť a rozdeľ do štyroch krabičiek – naturálna ryža drží tvar, takže sa na druhý deň nezmení na kašu."
    ],

    jk23: [
      "Začni cestom na halušky. Zmiešaj tvaroh, vajce, špaldovú múku a štipku soli. Cesto musí byť lepkavé, ale nesmie tiecť – keď lyžicou naberieš a nakloníš ju, má sa pomaly zosúvať, nie kvapkať.",
      "Ak je cesto príliš riedke, prisyp múku po lyžiciach. Tvaroh má zakaždým inú vlhkosť, takže tých 60 g je len odhad.",
      "Cez haluškovač hádž cesto do vriacej osolenej vody. Var, kým halušky nevyplávajú na povrch, a potom ešte minútu. Sceď ich a prepláchni, aby sa nezlepili.",
      "Na perkelt orestuj cibuľu, pridaj mäso nakrájané na rezance a opraž ho.",
      "Stiahni z ohňa, pridaj mletú papriku, premiešaj a hneď zalej trochou vody. Paprika v horúcom tuku zhorkne okamžite – preto ten hrniec musí ísť dole z platne.",
      "Dus 15 minút do mäkka.",
      "V studenom mlieku rozmiešaj lyžicu kukuričného škrobu dohladka a vylej do mäsa. Škrob sa musí rozmiešať v studenom; nasypaný priamo do horúcej omáčky by urobil hrudky. Nechaj prevrieť, kým omáčka nezhustne.",
      "Nechaj vychladnúť a rozdeľ halušky a perkelt do troch krabičiek."
    ],

    jk24: [
      "Na tuku orestuj nakrájanú cibuľu až dotmavohneda, nie len dosklovita. Trvá to desať aj pätnásť minút na miernom ohni a je to jediný zdroj tmavej farby omáčky – znojemská omáčka sa nefarbí ničím iným.",
      "Pridaj hovädzie mäso nakrájané na rezance a sprudka ho opeč.",
      "Pridaj horčicu, drvenú rascu a čierne korenie a zalej hnedým vývarom tak, aby bolo mäso takmer zakryté.",
      "Dus na slabom plameni pod pokrievkou 40 až 50 minút. Hovädzie zadné je tuhé mäso plné kolagénu a ten sa musí pomaly rozpustiť na želatínu – uponáhľať sa to nedá, kratším varením by ostalo gumové.",
      "Hotové je, keď sa rezanec dá vidličkou ľahko pretrhnúť.",
      "Až na úplný záver pridaj nadrobno nakrájané kyslé uhorky a nechaj päť minút prebublať. Keby si ich dal skôr, rozvarili by sa na nič a stratili by chrumkavosť aj kyslosť.",
      "Nechaj vychladnúť a rozdeľ do troch krabičiek. Ako prílohu si zabaľ varené vajíčko alebo varenú pohánku."
    ],

    jk25: [
      "Kuracie štvrte z oboch strán poriadne osoľ a posyp celou rascou. Celá rasca, nie mletá – v rúre sa opraží a rozvonia, zatiaľ čo mletá by zhorela.",
      "Polož ich do pekáča kožou nahor, podlej trochou vody a peč zakryté na 190 °C asi 30 minút. Voda spodku vytvorí paru, ktorá mäso udrží šťavnaté.",
      "Potom odkry a peč ďalších 15 minút. Teraz sa voda odparí a koža sa začne prepekať dochrumkava – práve táto druhá fáza robí z kurčaťa falošnú kačku.",
      "Zatiaľ si na kvapke oleja orestuj nakrájanú cibuľu, pridaj najemno nakrájanú červenú kapustu, nastrúhané jablko a bobkový list a zalej pol pohárom vody.",
      "Dus pod pokrievkou do mäkka, asi 25 minút. Občas premiešaj.",
      "Na záver dochuť octom, sladidlom a malou štipkou škorice. Červená kapusta stojí na rovnováhe kyslého a sladkého – pridávaj po troškách a ochutnávaj. Ocot zároveň vráti kapuste sýtu farbu, ktorú varením stratila.",
      "Nechaj vychladnúť a rozdeľ. Namiesto parenej knedle si zabaľ placky z červenej šošovice."
    ],

    jk26: [
      "Mäso vcelku osoľ, okoreň a sprudka opraž na tuku zo všetkých strán dohneda. Potom ho vyber na tanier. Tá kôrka a výpek, ktorý po nej ostane na dne, sú základ chuti celej omáčky.",
      "Vo výpeku orestuj koreňovú zeleninu a cibuľu do zlatohneda. Nenáhli sa – zelenina musí chytiť farbu, inak bude omáčka bledá a mdlá.",
      "Vráť mäso, pridaj bobkový list, nové korenie a celé čierne korenie, podlej vodou alebo vývarom a dus pod pokrievkou do mäkka. Pri hovädzom počítaj s hodinou, pri panenke stačí 25 minút.",
      "Keď je mäso mäkké, vyber ho a vyber aj celé koreniny. Toto nepreskakuj – rozmixované nové korenie a bobkový list by omáčku zahorčili.",
      "Zvyšnú zeleninu so šťavou rozmixuj tyčovým mixérom na hladké pyré. Žiadna múka tu netreba, zelenina zahustí omáčku sama.",
      "Zjemni smotanou a dochuť citrónovou šťavou a sladidlom. Sviečková stojí na tomto pomere sladkej a kyslej – pridávaj po kvapkách a ochutnávaj.",
      "Mäso nakrájaj na plátky a vlož späť do omáčky. Nechaj vychladnúť a rozdeľ do štyroch krabičiek."
    ],

    jk27: [
      "Zmiešaj mleté mäso s nadrobno nakrájanou cibuľou, vajcom, surovým bulgurom, soľou a korením. Bulgur ide do náplne surový – počas 40 minút dusenia napučí a nasaje šťavu z mäsa, takže náplň nebude suchá.",
      "Papriky zrež navrchu, vyber jadrovník a vytras semienka. Naplň ich mäsovou zmesou, ale nie úplne po okraj – náplň pri varení napučí a vytlačila by sa von.",
      "V hrnci zohrej paradajkovú passatu s trochou vody, pridaj bobkový list a škoricu a dochuť sladidlom a soľou. Škorice daj naozaj málo, má byť cítiť len na pozadí.",
      "Do jemne vriacej omáčky postav naplnené papriky tak, aby stáli vedľa seba a nepadali.",
      "Dus pod pokrievkou na miernom ohni asi 40 minút. Nemá to divoko vrieť – papriky by sa rozvarili a rozpadli.",
      "Hotové je to, keď sa paprika dá ľahko prepichnúť vidličkou a náplň vnútri nie je nikde ružová.",
      "Ak ti zostala mäsová zmes, urob z nej malé guľky a hoď ich variť priamo do omáčky. Nechaj vychladnúť a rozdeľ do štyroch krabičiek."
    ],

    jk28: [
      "Kvasenú kapustu prepláchni studenou vodou a vyžmýkaj. Naturálnu ryžu uvar vopred.",
      "Na panvici orestuj nakrájanú cibuľu, pridaj mleté mäso a mletú červenú papriku, osoľ a opraž, kým mäso nie je hotové. Papriku pridaj až po stiahnutí plameňa, inak zhorkne.",
      "Do zapekacej misy vrstvi: polovicu kapusty, na ňu uvarenú ryžu, potom mäsovú zmes a zakonči druhou polovicou kapusty. Kapusta musí byť dole aj hore – spodná chráni ryžu pred pripálením, vrchná drží vlhkosť.",
      "Kyslú smotanu rozmiešaj s vajíčkom a zmesou polej vrch. Vajce v smotane je dôležité: pri pečení zálievku zviaže, takže sa z nej stane pevná vrstva a nie len kaluž.",
      "Peč na 190 °C približne 30 minút do zlatista.",
      "Nechaj úplne vychladnúť, ideálne aj v chladničke. Po stuhnutí sa dá krájať na štyri tehličky, ktoré sa pri prenose nerozpadnú."
    ],

    jk29: [
      "Slaninku nakrájaj na kocky a opeč ju nasucho na panvici dochrumkava. Vypečený tuk nevylievaj, pokvapkaj ním neskôr halušky. Slaninu odlož bokom.",
      "Z tvarohu, vajca, špaldovej múky a štipky soli vypracuj lepivé cesto. Má byť lepivé, ale držať tvar – keď je príliš riedke, prisyp múku po lyžiciach.",
      "Cez haluškovač hádž cesto do vriacej osolenej vody. Var, kým halušky nevyplávajú na povrch, potom ešte minútu, a sceď ich.",
      "V teplej miske rozmiešaj bryndzu s dvoma lyžicami jogurtu alebo mlieka na hladký krém. Misku predhrej horúcou vodou – v studenej by bryndza ostala tuhá a nedala by sa rozmiešať.",
      "Horúce halušky vmiešaj do bryndze a miešaj mimo platne. Bryndza sa nikdy nesmie variť: zahriatím sa zrazí na zrnká a pustí vodu.",
      "Posyp opečenou slaninkou a nasekanou pažítkou.",
      "Nechaj vychladnúť a rozdeľ do troch krabičiek. Do každej prilej jednu polievkovú lyžicu mlieka – po ohriatí budú halušky opäť krémové."
    ],

    jk30: [
      "Kuracie prsia rozkroj na tenké rezne a naklep ich. Naklepaj ich poriadne, aspoň na pol centimetra – tenší rezeň sa dá zrolovať pevne a nerozbalí sa.",
      "Rezne osoľ, okoreň a z jednej strany potri horčicou. Na každý ulož kúsok vajca natvrdo, prúžok kyslej uhorky a plátok šunky.",
      "Zabaľ do pevných roliek a zaisti špáradlom. Bočné okraje podviň dovnútra, aby náplň pri dusení nevypadla.",
      "Na oleji orestuj nakrájanú cibuľu. Pridaj rolky a sprudka ich opeč zo všetkých strán – otáčaj ich opatrne, aby sa neroztvorili.",
      "Zalej vývarom len do polovice výšky mäsa, nie úplne. Rolky sa majú dusiť, nie variť; spodok je v tekutine a vrch v pare.",
      "Dus pod pokrievkou asi 20 minút do mäkka.",
      "Rolky vyber a omáčku s cibuľou rozmixuj tyčovým mixérom na hladko. Pred balením nezabudni vybrať špáradlá a rolky prekroj na polovice.",
      "Nechaj vychladnúť a rozdeľ do dvoch krabičiek. Rolky sú veľmi sýte, takže stačí malá porcia ryže alebo pohánky."
    ],

    mbv4: [
      "Rozpáľ gril na nepriame grilovanie, teda tak, aby horelo len na jednej strane a mäso ležalo na druhej. Cieľová teplota pod poklopom je asi 150 °C. Ak nemáš gril, to isté urobí rúra.",
      "Celý kus hovädzieho potri soľou, čiernym korením a údenou paprikou. Nešetri soľou – je to kilový kus mäsa a soľ musí preniknúť dovnútra.",
      "Do hliníkovej misky alebo pekáča daj štvrťky cibule, polož na ne mäso a podlej vývarom alebo pivom. Mäso leží na cibuli, nie priamo v tekutine – cibuľa ho nadvihne a zároveň sa rozvarí do výpeku.",
      "Misku zakry alobalom, zatvor poklop grilu a peč tri a pol až štyri hodiny. Toto sa nedá urýchliť zvýšením teploty: kolagén v hovädzom krku sa začne meniť na želatínu až po hodinách pri nízkej teplote a práve tá robí mäso trhateľným.",
      "Neotváraj poklop zbytočne, každé otvorenie predĺži pečenie o desiatky minút.",
      "Hotové je to, keď do mäsa vojde vidlička bez odporu a kus sa pri potiahnutí sám rozpadáva na vlákna. Keď ešte drží pokope, potrebuje ďalšiu pol hodinu – nie je to nedovarené, je to nedoprepečené.",
      "Mäso rozober dvoma vidličkami na vlákna a zmiešaj s BBQ omáčkou a výpekom z misky. Nechaj vychladnúť a rozdeľ na štyri porcie."
    ],

    mbv8: [
      "Mleté hovädzie, dijonskú horčicu, sušený cesnak, sušenú cibuľu, soľ a korenie zmiešaj rukami v miske. Miešaj len dovtedy, kým to drží pokope – čím dlhšie to miesiš, tým tuhšia a gumovejšia bude guľka.",
      "Namoč si ruky studenou vodou a urob šesť až osem rovnako veľkých guliek. Rovnako veľké preto, aby boli hotové naraz.",
      "Panvicu rozpáľ s kvapkou oleja naozaj dohoráca a guľky na ňu polož. Potom sa ich minútu a pol nedotýkaj – vtedy sa robí hnedá kôrka.",
      "Opeč ich sprudka zo všetkých strán. Otáčaj ich klieštikmi alebo potriasaním panvicou, nie vareškou.",
      "Stiahni oheň na stredný, prikry pokrievkou a nechaj opekať desať minút. Pokrievka tu robí prácu: para dovarí guľky vnútri bez toho, aby zvonku zhoreli.",
      "Hotové sú, keď sú vnútri úplne bez ružovej, teda 71 °C.",
      "Nechaj vychladnúť a rozdeľ. Sú skvelé k pečeným zemiakom alebo s BBQ omáčkou do wrapu."
    ],

    mbv13: [
      "Do kuracích pŕs narež zboku hlbokú kapsu. Drž nôž vodorovne a rež do stredu hrúbky; dávaj pozor, aby si prso neprekrojil úplne na dve polovice.",
      "Dovnútra natlač plátky mozzarelly, sušené paradajky a bazalku. Neprepĺňaj kapsu – keď je napchatá, syr pri pečení vytlačí von a zostane ti prázdne prso.",
      "Otvor spoj dvoma špáradlami. Mäso zvonku osuš, osoľ, okoreň a posyp sušeným cesnakom.",
      "Na rozpálenej panvici s olejom opekaj päť minút na každú stranu dozlatova. Prso nestláčaj obracačkou, vytlačil by si z neho náplň aj šťavu.",
      "Potom panvicu prikry pokrievkou, stiahni oheň na mierny a nechaj dôjsť ďalších päť minút. Pod pokrievkou sa vytvorí para, ktorá mäso dovarí zvnútra bez toho, aby ho zvonku spálila.",
      "Hotové je to pri 74 °C vnútri – meraj do mäsa, nie do náplne, syr je horúci skôr.",
      "Nechaj mäso dve minúty odpočinúť, vyber špáradlá a nechaj vychladnúť. Pred ohrievaním si prso v krabičke nakrájaj na plátky."
    ],

    mbv14: [
      "V miske zmiešaj citrónovú šťavu, nastrúhanú kôru, pretlačený cesnak, nasekaný tymian a rozmarín a olivový olej.",
      "Stehná osoľ, okoreň a poriadne premiešaj v marináde. Nechaj ich marinovať 30 minút, nie dlhšie než dve hodiny – citrónová šťava je kyselina a po pár hodinách by začala mäso rozkladať na kašovité.",
      "Pred grilovaním mäso z marinády vyber a zotri z neho prebytočnú tekutinu. Mokrá koža nikdy nebude chrumkavá a cesnak v marináde by sa na grile spálil.",
      "Ulož stehná na stredne horúci gril kožou nadol a griluj desať minút. Nehýb nimi, nech sa koža stihne vyškvariť a odlepiť sama.",
      "Pozor na odkvapkávajúci tuk – robí plamene, ktoré mäso zvonku spália. Keď vyšľahnú, presuň stehná na chladnejšiu časť grilu.",
      "Otoč a peč ďalších osem až desať minút. Hotové je to, keď šťava z najhrubšieho miesta vyteká číra, teda pri 74 °C.",
      "Nechaj vychladnúť, pokvapkaj čerstvým citrónom a rozdeľ do dvoch krabičiek."
    ],

    mbv15: [
      "Kuracie mäso nakrájaj na úplne tenučké rezančeky. Čím tenšie, tým lepšie – gyros má byť na tenké prúžky, ktoré sa rýchlo opečú a na okrajoch zoschnú dochrumkava.",
      "Mäso osuš, zasyp soľou a gyros korením, polej olejom a rukami to poriadne premiešaj, aby bol každý rezanec obalený.",
      "Panvicu rozpáľ naozaj dohoráca a hoď na ňu mäso. Rozlož ho v jednej vrstve; keď sa ti nezmestí, urob to na dvakrát. Natlačené mäso pustí vodu a namiesto gyrosu budeš mať dusené kura.",
      "Nechaj ho sprudka opekať päť až sedem minút a miešaj len občas. Práve to občasné miešanie je dôležité – mäso potrebuje ležať, aby sa okraje opiekli.",
      "Kým sa mäso robí, zmiešaj grécky jogurt s pretlačeným cesnakom a štipkou soli.",
      "Nechaj vychladnúť a do krabičky daj mäso, ryžu alebo placku a kopu zeleniny. Jogurtový dip daj do samostatnej nádobky – v krabičke by sa ohrial a zrazil."
    ],

    mbv16: [
      "Mäso, očistený ananás a červenú cibuľu nakrájaj na rovnako veľké kocky, asi tri centimetre. Rovnaká veľkosť je tu dôležitejšia než inde: na špíze sa všetko pečie rovnako dlho, takže menšie kúsky by boli spálené, kým väčšie dôjdu.",
      "Mäso zmiešaj v miske so sójovou omáčkou, olejom, soľou a korením.",
      "Ak používaš drevené špajdle, namoč ich predtým na pol hodinu do vody, inak ti na grile zhoria.",
      "Na špajdle napichuj striedavo mäso, ananás a cibuľu. Kúsky k sebe pritlač, ale nie natesno – medzi nimi musí prúdiť teplo.",
      "Polož na rošt a griluj desať až dvanásť minút, pravidelne otáčaj, zhruba každé tri minúty.",
      "Ananás obsahuje veľa cukru, ktorý na grile skaramelizuje a dodá mäsu chuť – ale aj rýchlo horí. Keď začne černieť, presuň špízy na chladnejšiu časť roštu.",
      "Hotové je to, keď má kuracie vnútri 74 °C. Nechaj vychladnúť a rozdeľ do dvoch krabičiek."
    ]

  };
})();
