// Parser surovín + slovník oddelení v obchode
(function () {
  const ODDELENIA = {
    maso:      { nazov: "Mäso, ryby, údeniny", ikona: "🥩", poradie: 1 },
    mliecne:   { nazov: "Mliečne a vajcia",     ikona: "🧀", poradie: 2 },
    zelenina:  { nazov: "Zelenina a ovocie",    ikona: "🥦", poradie: 3 },
    pecivo:    { nazov: "Pečivo",               ikona: "🥖", poradie: 4 },
    mrazene:   { nazov: "Mrazené",              ikona: "🧊", poradie: 5 },
    konzervy:  { nazov: "Konzervy a omáčky",    ikona: "🥫", poradie: 6 },
    trvanlive: { nazov: "Trvanlivé a suché",    ikona: "🌾", poradie: 7 },
    koreniny:  { nazov: "Koreniny, oleje, základy", ikona: "🧂", poradie: 8 },
    pomocky:   { nazov: "Pomôcky (netreba kupovať)", ikona: "🧰", poradie: 9 },
    ine:       { nazov: "Ostatné",              ikona: "🛒", poradie: 10 }
  };

  // [kľúčové slovo, kanonický názov, oddelenie]  – hľadá sa najdlhšia zhoda
  const SLOVNIK = [
    // ——— MÄSO, RYBY, ÚDENINY ———
    ["kuracích pŕs", "Kuracie prsia", "maso"],
    ["kuracie prsia", "Kuracie prsia", "maso"],
    ["kuracie prso", "Kuracie prsia", "maso"],
    ["mletého kuracieho", "Mleté kuracie mäso", "maso"],
    ["kuracích stehien", "Kuracie stehná (vykostené)", "maso"],
    ["kuracie stehná", "Kuracie stehná (vykostené)", "maso"],
    ["stehenné rezne", "Kuracie stehenné rezne", "maso"],
    ["stehenných rezňov", "Kuracie stehenné rezne", "maso"],
    ["kuracie štvrte", "Kuracie štvrte", "maso"],
    ["kuracích krídel", "Kuracie krídelká", "maso"],
    ["morčacích pŕs", "Morčacie prsia", "maso"],
    ["mletých morčacích", "Mleté morčacie mäso", "maso"],
    ["mletého morčacieho", "Mleté morčacie mäso", "maso"],
    ["morčacej šunky", "Morčacia šunka", "maso"],
    ["mletého hovädzieho", "Mleté hovädzie mäso", "maso"],
    ["mleté hovädzie", "Mleté hovädzie mäso", "maso"],
    ["hovädzieho zadného", "Hovädzie zadné", "maso"],
    ["hovädzie zadné", "Hovädzie zadné", "maso"],
    ["hovädzia roštenka", "Hovädzia roštenka", "maso"],
    ["hovädzej roštenky", "Hovädzia roštenka", "maso"],
    ["roštenec", "Hovädzí roštenec", "maso"],
    ["hovädzia sviečkovica", "Hovädzia sviečkovica", "maso"],
    ["falošná sviečková", "Hovädzie – falošná sviečková", "maso"],
    ["flank steak", "Flank steak", "maso"],
    ["rib eye", "Rib Eye steak", "maso"],
    ["hovädzí krk", "Hovädzí krk", "maso"],
    ["hovädzí steak", "Hovädzí steak", "maso"],
    ["vysoký steak", "Hovädzí steak (hrubý)", "maso"],
    ["new york strip", "Steak New York Strip", "maso"],
    ["chudého hovädzieho", "Chudé hovädzie mäso", "maso"],
    ["hovädzie mäso", "Hovädzie mäso", "maso"],
    ["hovädzej šunky", "Hovädzia šunka", "maso"],
    ["roastbeefu", "Roastbeef", "maso"],
    ["bravčovej panenky", "Bravčová panenka", "maso"],
    ["bravčová panenka", "Bravčová panenka", "maso"],
    ["bravčového karé", "Bravčové karé", "maso"],
    ["bravčového stehna", "Bravčové stehno", "maso"],
    ["krkovičky", "Bravčová krkovička", "maso"],
    ["bravčová kotleta", "Bravčová kotleta s kosťou", "maso"],
    ["bravčových rebier", "Bravčové rebrá", "maso"],
    ["bravčového mäsa", "Bravčové mäso", "maso"],
    ["mletého bravčového", "Mleté bravčové mäso", "maso"],
    ["jahňacieho", "Jahňacie mäso", "maso"],
    ["mletého mäsa mix", "Mleté mäso mix", "maso"],
    ["mix mletého mäsa", "Mleté mäso mix", "maso"],
    ["mletého mäsa", "Mleté mäso", "maso"],
    ["mleté mäso", "Mleté mäso", "maso"],
    ["údeného mäsa", "Údené mäso", "maso"],
    ["údeného mäsa", "Údené mäso", "maso"],
    ["schwarzwaldská šunka", "Schwarzwaldská šunka", "maso"],
    ["kuracej šunky", "Kuracia šunka", "maso"],
    ["šunky", "Šunka", "maso"],
    ["šunka", "Šunka", "maso"],
    ["slaniny", "Slanina", "maso"],
    ["klobásy chorizo", "Klobása chorizo", "maso"],
    ["chorizo", "Klobása chorizo", "maso"],
    ["klobásky", "Klobásky", "maso"],
    ["klobásy", "Klobása", "maso"],
    ["klobása", "Klobása", "maso"],
    ["párky", "Párky", "maso"],
    ["salámy", "Saláma", "maso"],
    ["údeného lososa", "Údený losos", "maso"],
    ["lososového fil", "Losos (filet)", "maso"],
    ["mletého lososa", "Losos (mletý)", "maso"],
    ["lososa", "Losos", "maso"],
    ["pstruhových", "Pstruh (filety)", "maso"],
    ["tresky", "Treska (filety)", "maso"],
    ["tuniakových steakov", "Tuniakové steaky", "maso"],
    ["tuniaka", "Tuniak v konzerve", "konzervy"],
    ["kreviet", "Krevety", "mrazene"],
    ["krevety", "Krevety", "mrazene"],
    ["morských plodov", "Morské plody (mrazené)", "mrazene"],

    // ——— MLIEČNE A VAJCIA ———
    ["vajíčka", "Vajcia", "mliecne"],
    ["vajíčko", "Vajcia", "mliecne"],
    ["vajcia", "Vajcia", "mliecne"],
    ["vajce", "Vajcia", "mliecne"],
    ["vajec", "Vajcia", "mliecne"],
    ["bielok", "Vajcia", "mliecne"],
    ["žĺtok", "Vajcia", "mliecne"],
    ["hrudkovitého tvarohu", "Tvaroh hrudkovitý", "mliecne"],
    ["jemného odtučneného tvarohu", "Tvaroh jemný odtučnený", "mliecne"],
    ["odtučneného tvarohu", "Tvaroh jemný odtučnený", "mliecne"],
    ["polotučného tvarohu", "Tvaroh polotučný", "mliecne"],
    ["jemného tvarohu", "Tvaroh jemný", "mliecne"],
    ["tvarohu", "Tvaroh", "mliecne"],
    ["gréckeho jogurtu", "Grécky jogurt", "mliecne"],
    ["bieleho jogurtu", "Biely jogurt", "mliecne"],
    ["biely jogurt", "Biely jogurt", "mliecne"],
    ["jogurtu", "Biely jogurt", "mliecne"],
    ["kyslej smotany", "Kyslá smotana 10 %", "mliecne"],
    ["kyslú smotanu", "Kyslá smotana 10 %", "mliecne"],
    ["smotany na šľahanie", "Smotana na šľahanie", "mliecne"],
    ["smotany na varenie", "Smotana na varenie 10–12 %", "mliecne"],
    ["smotanu", "Smotana na varenie 10–12 %", "mliecne"],
    ["polotučného mlieka", "Mlieko polotučné", "mliecne"],
    ["horúceho mlieka", "Mlieko", "mliecne"],
    ["mlieka", "Mlieko", "mliecne"],
    ["zmäknutého masla", "Maslo", "mliecne"],
    ["masla", "Maslo", "mliecne"],
    ["maslo", "Maslo", "mliecne"],
    ["syra čedar", "Čedar", "mliecne"],
    ["čedaru", "Čedar", "mliecne"],
    ["mozzarell", "Mozzarella", "mliecne"],
    ["syra feta", "Feta", "mliecne"],
    ["syru feta", "Feta", "mliecne"],
    ["syra feta", "Feta", "mliecne"],
    [" feta", "Feta", "mliecne"],
    ["balkánskeho syra", "Balkánsky syr", "mliecne"],
    ["syra eidam", "Eidam", "mliecne"],
    ["gouda", "Gouda", "mliecne"],
    ["parmezán", "Parmezán", "mliecne"],
    ["ementál", "Ementál", "mliecne"],
    ["halloumi", "Halloumi", "mliecne"],
    ["ricott", "Ricotta", "mliecne"],
    ["cottage cheese", "Cottage cheese", "mliecne"],
    ["cottage syra", "Cottage cheese", "mliecne"],
    ["krémového syra", "Krémový syr (Lučina)", "mliecne"],
    ["krémový syr", "Krémový syr (Lučina)", "mliecne"],
    ["bryndze", "Bryndza", "mliecne"],
    ["camembert", "Camembert / Hermelín", "mliecne"],
    ["modrého syra", "Syr s modrou plesňou", "mliecne"],
    ["modrý syr", "Syr s modrou plesňou", "mliecne"],
    ["provolone", "Provolone", "mliecne"],
    ["tvrdého syra", "Tvrdý syr", "mliecne"],
    ["mascarpone", "Mascarpone light", "mliecne"],
    ["plátky syra", "Syr (plátky)", "mliecne"],
    ["strúhaného syra", "Strúhaný syr", "mliecne"],
    ["strúhaný syr", "Strúhaný syr", "mliecne"],
    ["syra", "Syr", "mliecne"],

    // ——— ZELENINA A OVOCIE ———
    ["jarná cibuľka", "Jarná cibuľka", "zelenina"],
    ["jarnú cibuľku", "Jarná cibuľka", "zelenina"],
    ["červená cibuľa", "Červená cibuľa", "zelenina"],
    ["červenej cibule", "Červená cibuľa", "zelenina"],
    ["červené cibule", "Červená cibuľa", "zelenina"],
    ["cibuľa", "Cibuľa", "zelenina"],
    ["cibule", "Cibuľa", "zelenina"],
    ["cibuľu", "Cibuľa", "zelenina"],
    ["cesnaku", "Cesnak", "zelenina"],
    ["cesnak", "Cesnak", "zelenina"],
    ["cherry paradajok", "Cherry paradajky", "zelenina"],
    ["mäsité paradajky", "Paradajky", "zelenina"],
    ["zrelých paradajok", "Paradajky", "zelenina"],
    ["paradajka", "Paradajky", "zelenina"],
    ["sušených paradajok", "Sušené paradajky", "konzervy"],
    ["sušené paradajky", "Sušené paradajky", "konzervy"],
    ["farebné papriky", "Farebné papriky", "zelenina"],
    ["farebných paprík", "Farebné papriky", "zelenina"],
    ["chilli paprička", "Chilli paprička", "zelenina"],
    ["papriky", "Paprika", "zelenina"],
    ["paprika", "Paprika", "zelenina"],
    ["cuket", "Cuketa", "zelenina"],
    ["brokolic", "Brokolica", "zelenina"],
    ["karfiol", "Karfiol", "zelenina"],
    ["ružičkového kelu", "Ružičkový kel", "zelenina"],
    ["červenej hlávkovej kapusty", "Červená kapusta", "zelenina"],
    ["kvasenej kapusty", "Kvasená kapusta", "konzervy"],
    ["mrkv", "Mrkva", "zelenina"],
    ["petržlen", "Petržlen", "zelenina"],
    ["zeler", "Zeler (bulva)", "zelenina"],
    ["batat", "Batáty (sladké zemiaky)", "zelenina"],
    ["batát", "Batáty (sladké zemiaky)", "zelenina"],
    ["zemiak", "Zemiaky", "zelenina"],
    ["šampiňón", "Šampiňóny", "zelenina"],
    ["dubák", "Sušené dubáky", "trvanlive"],
    ["baby špenátu", "Baby špenát", "zelenina"],
    ["špenát", "Špenát", "zelenina"],
    ["ľadového šalátu", "Ľadový šalát", "zelenina"],
    ["ľadový šalát", "Ľadový šalát", "zelenina"],
    ["listových šalátov", "Listový šalát", "zelenina"],
    ["listového šalátu", "Listový šalát", "zelenina"],
    ["šalátu", "Šalát", "zelenina"],
    ["rukol", "Rukola", "zelenina"],
    ["poľníčka", "Poľníček", "zelenina"],
    ["kyslé uhorky", "Kyslé uhorky", "konzervy"],
    ["kyslá uhorka", "Kyslé uhorky", "konzervy"],
    ["kyslej uhorky", "Kyslé uhorky", "konzervy"],
    ["zavárané uhorky", "Kyslé uhorky", "konzervy"],
    ["šalátovej uhorky", "Šalátová uhorka", "zelenina"],
    ["šalátová uhorka", "Šalátová uhorka", "zelenina"],
    ["uhork", "Šalátová uhorka", "zelenina"],
    ["avokád", "Avokádo", "zelenina"],
    ["maslovej tekvice", "Maslová tekvica", "zelenina"],
    ["tekvice hokkaido", "Tekvica Hokkaido", "zelenina"],
    ["tekvice", "Tekvica", "zelenina"],
    ["tekvicového pyré", "Tekvicové pyré", "trvanlive"],
    ["zelených fazuľových luskov", "Zelené fazuľky", "zelenina"],
    ["zelenej fazuľky", "Zelené fazuľky", "zelenina"],
    ["zelená fazuľka", "Zelené fazuľky", "zelenina"],
    ["zelených fazuliek", "Zelené fazuľky", "zelenina"],
    ["špargl", "Špargľa", "zelenina"],
    ["cukrového hrášku", "Cukrový hrášok", "zelenina"],
    ["mrazeného hrášku", "Mrazený hrášok", "mrazene"],
    ["mrazenej kukurice a hrášku", "Mrazená zmes (hrášok, kukurica)", "mrazene"],
    ["zeleného hrášku", "Mrazený hrášok", "mrazene"],
    ["hrášku", "Hrášok", "mrazene"],
    ["kukurice", "Kukurica (konzerva)", "konzervy"],
    ["kukurica", "Kukurica (konzerva)", "konzervy"],
    ["predvarenej kukurice", "Kukurica (klasy)", "zelenina"],
    ["cvikl", "Cvikla (predvarená)", "zelenina"],
    ["ananás", "Ananás", "zelenina"],
    ["mango", "Mango", "zelenina"],
    ["banán", "Banán", "zelenina"],
    ["jabl", "Jablká", "zelenina"],
    ["hrušk", "Hrušky", "zelenina"],
    ["slivk", "Slivky", "zelenina"],
    ["citrón", "Citrón", "zelenina"],
    ["limetk", "Limetka", "zelenina"],
    ["pomaranč", "Pomaranč", "zelenina"],
    ["jahôd", "Jahody", "zelenina"],
    ["jahody", "Jahody", "zelenina"],
    ["čučoriedk", "Čučoriedky", "zelenina"],
    ["malin", "Maliny", "zelenina"],
    ["drobného ovocia", "Drobné ovocie", "zelenina"],
    ["lesného ovocia", "Mrazené lesné ovocie", "mrazene"],
    ["lesná zmes", "Mrazené lesné ovocie", "mrazene"],
    ["mrazených čerešní", "Mrazené čerešne / marhule", "mrazene"],
    ["mix ovocia", "Ovocie (mix)", "zelenina"],
    ["čerstvej bazalky", "Čerstvá bazalka", "zelenina"],
    ["čerstvá bazalka", "Čerstvá bazalka", "zelenina"],
    ["bazalky", "Čerstvá bazalka", "zelenina"],
    ["koriandra", "Čerstvý koriander", "zelenina"],
    ["pažítk", "Pažítka", "zelenina"],
    ["čerstvý tymian", "Čerstvý tymian", "zelenina"],
    ["čerstvého tymianu", "Čerstvý tymian", "zelenina"],
    ["rozmarín", "Čerstvý rozmarín", "zelenina"],
    ["kôpr", "Kôpor", "zelenina"],
    ["petržlenovej vňate", "Petržlenová vňať", "zelenina"],
    ["petržlenová vňať", "Petržlenová vňať", "zelenina"],
    ["zázvor", "Čerstvý zázvor", "zelenina"],
    ["olív", "Čierne olivy", "konzervy"],
    ["mungo klíčk", "Mungo klíčky", "zelenina"],
    ["bambusových výhonkov", "Bambusové výhonky", "konzervy"],
    ["edamame", "Edamame (mrazené)", "mrazene"],
    ["miešanej zeleniny", "Miešaná zelenina", "zelenina"],
    ["mrazenej ázijskej zeleniny", "Mrazená ázijská zelenina", "mrazene"],
    ["mrazenej zeleniny", "Mrazená zelenina", "mrazene"],
    ["mrazenej zeleninovej zmesi", "Mrazená zeleninová zmes", "mrazene"],
    ["mrazenej zmesi", "Mrazená zeleninová zmes", "mrazene"],
    ["zeleniny", "Zelenina (mix)", "zelenina"],

    // ——— PEČIVO ———
    ["kváskového chleba", "Kváskový chlieb", "pecivo"],
    ["ražného chleba", "Ražný chlieb", "pecivo"],
    ["celozrnného chleba", "Celozrnný chlieb", "pecivo"],
    ["toastového chleba", "Toastový chlieb", "pecivo"],
    ["turecké chleby", "Turecký chlieb", "pecivo"],
    ["fit chleba", "Fit chlieb", "pecivo"],
    ["chleba", "Chlieb", "pecivo"],
    ["brioškov", "Brioškové žemle", "pecivo"],
    ["žemle", "Žemle", "pecivo"],
    ["rožk", "Rožky", "pecivo"],
    ["bagety", "Bageta", "pecivo"],
    ["bageta", "Bageta", "pecivo"],
    ["bagetu", "Bageta", "pecivo"],
    ["ciabatta", "Ciabatta", "pecivo"],
    ["tortill", "Celozrnné tortilly", "pecivo"],
    ["pita", "Pita chlieb", "pecivo"],
    ["taco mušle", "Taco mušle", "pecivo"],
    ["piškót", "Celozrnné piškóty", "pecivo"],
    ["sušienok", "Celozrnné sušienky", "pecivo"],

    // ——— TRVANLIVÉ A SUCHÉ ———
    ["jazmínovej ryže", "Ryža jazmínová", "trvanlive"],
    ["naturálnej ryže", "Ryža naturálna", "trvanlive"],
    ["ryže basmati", "Ryža basmati", "trvanlive"],
    ["guľatozrnnej", "Ryža guľatozrnná", "trvanlive"],
    ["ryžových rezancov", "Ryžové rezance", "trvanlive"],
    ["ryžové rezance", "Ryžové rezance", "trvanlive"],
    ["uvarenej ryže", "Ryža (varená, zo včera)", "trvanlive"],
    ["varenej ryže", "Ryža (varená, zo včera)", "trvanlive"],
    ["ryže", "Ryža", "trvanlive"],
    ["ryžu", "Ryža", "trvanlive"],
    ["celozrnných špagiet", "Špagety celozrnné", "trvanlive"],
    ["špagiet", "Špagety", "trvanlive"],
    ["celozrnných penne", "Penne celozrnné", "trvanlive"],
    ["penne", "Penne", "trvanlive"],
    ["fusilli", "Fusilli", "trvanlive"],
    ["farfalle", "Farfalle", "trvanlive"],
    ["rigatoni", "Rigatoni", "trvanlive"],
    ["tagliatelle", "Tagliatelle", "trvanlive"],
    ["makarón", "Makaróny / kolienka", "trvanlive"],
    ["kolienok", "Makaróny / kolienka", "trvanlive"],
    ["orzo", "Orzo / tarhoňa", "trvanlive"],
    ["udon rezancov", "Udon rezance", "trvanlive"],
    ["soba rezancov", "Soba rezance", "trvanlive"],
    ["rezancov", "Rezance", "trvanlive"],
    ["cestovín", "Cestoviny", "trvanlive"],
    ["cestoviny", "Cestoviny", "trvanlive"],
    ["gnocchi", "Zemiakové gnocchi", "trvanlive"],
    ["celozrnného kuskusu", "Kuskus celozrnný", "trvanlive"],
    ["kuskus", "Kuskus", "trvanlive"],
    ["bulgur", "Bulgur", "trvanlive"],
    ["quino", "Quinoa", "trvanlive"],
    ["pohánk", "Pohánka", "trvanlive"],
    ["červenej šošovice", "Červená šošovica", "trvanlive"],
    ["hnedej šošovice", "Hnedá šošovica", "trvanlive"],
    ["šošovic", "Šošovica", "trvanlive"],
    ["poleného hrachu", "Žltý polený hrach", "trvanlive"],
    ["ovsených vločiek", "Ovsené vločky", "trvanlive"],
    ["špaldovej", "Špaldová múka", "trvanlive"],
    ["ovsenej múky", "Ovsená múka", "trvanlive"],
    ["múky", "Múka", "trvanlive"],
    ["krupice", "Detská krupica", "trvanlive"],
    ["proteínu", "Proteín (prášok)", "trvanlive"],
    ["proteín", "Proteín (prášok)", "trvanlive"],
    ["kakaa", "Kakao", "trvanlive"],
    ["kakao", "Kakao", "trvanlive"],
    ["pudingového prášku", "Pudingový prášok", "trvanlive"],
    ["prášku do pečiva", "Prášok do pečiva", "trvanlive"],
    ["kypriaceho prášku", "Prášok do pečiva", "trvanlive"],
    ["kukuričného škrobu", "Kukuričný škrob", "trvanlive"],
    ["arašidového masla", "Arašidové maslo 100 %", "trvanlive"],
    ["medu", "Med", "trvanlive"],
    ["med", "Med", "trvanlive"],
    ["javorového sirupu", "Javorový sirup", "trvanlive"],
    ["čakankového sirupu", "Čakankový sirup", "trvanlive"],
    ["mletého maku", "Mletý mak", "trvanlive"],
    ["vlašských orechov", "Vlašské orechy", "trvanlive"],
    ["orechov", "Orechy", "trvanlive"],
    ["arašid", "Arašidy nesolené", "trvanlive"],
    ["mandl", "Mandle", "trvanlive"],
    ["strúhaného kokosu", "Strúhaný kokos", "trvanlive"],
    ["kokosu", "Strúhaný kokos", "trvanlive"],
    ["slnečnicových semienok", "Slnečnicové semienka", "trvanlive"],
    ["tekvicových semienok", "Tekvicové semienka", "trvanlive"],
    ["ľanových semienok", "Ľanové semienka", "trvanlive"],
    ["sezamových semienok", "Sezamové semienka", "trvanlive"],
    ["sezamu", "Sezam", "trvanlive"],
    ["sezam", "Sezam", "trvanlive"],
    ["chia", "Chia semienka", "trvanlive"],
    ["horkej čokolády", "Horká čokoláda", "trvanlive"],
    ["kukuričných lupienkov", "Cornflakes nesladené", "trvanlive"],
    ["cornflakes", "Cornflakes nesladené", "trvanlive"],
    ["hummus", "Hummus", "konzervy"],
    ["pevného tofu", "Tofu pevné", "mliecne"],
    ["bieleho tofu", "Tofu pevné", "mliecne"],
    ["údeného tofu", "Tofu údené", "mliecne"],
    ["tofu", "Tofu", "mliecne"],
    ["brusnicového džemu", "Brusnicový džem", "konzervy"],
    ["jablkové pyré", "Jablkové pyré (detská výživa)", "konzervy"],
    ["detskej výživy", "Jablkové pyré (detská výživa)", "konzervy"],
    ["jablkovej šťavy", "Jablkový mušt 100 %", "konzervy"],
    ["jablkový mušt", "Jablkový mušt 100 %", "konzervy"],
    ["espresso", "Káva / espresso", "trvanlive"],
    ["bieleho suchého vína", "Biele suché vína", "konzervy"],

    // ——— KONZERVY A OMÁČKY ———
    ["pasírovaných paradajok", "Passata (pasírované paradajky)", "konzervy"],
    ["paradajkovej passaty", "Passata (pasírované paradajky)", "konzervy"],
    ["paradajková passata", "Passata (pasírované paradajky)", "konzervy"],
    ["passata", "Passata (pasírované paradajky)", "konzervy"],
    ["lúpaných paradajok", "Lúpané paradajky (konzerva)", "konzervy"],
    ["krájaných paradajok", "Krájané paradajky (konzerva)", "konzervy"],
    ["paradajkového pretlaku", "Paradajkový pretlak", "konzervy"],
    ["paradajkový pretlak", "Paradajkový pretlak", "konzervy"],
    ["paradajkovej šťavy", "Paradajková šťava", "konzervy"],
    ["paradajkového džúsu", "Paradajková šťava", "konzervy"],
    ["paradajkového pyré", "Paradajkové pyré", "konzervy"],
    ["pretlaku", "Paradajkový pretlak", "konzervy"],
    ["salsy", "Paradajková salsa", "konzervy"],
    ["salsa", "Paradajková salsa", "konzervy"],
    ["červenej fazule", "Červená fazuľa (konzerva)", "konzervy"],
    ["bielej fazule", "Biela fazuľa (konzerva)", "konzervy"],
    ["čiernej fazule", "Čierna fazuľa (konzerva)", "konzervy"],
    ["tmavej fazule", "Čierna fazuľa (konzerva)", "konzervy"],
    ["strakatej fazule", "Strakatá fazuľa (konzerva)", "konzervy"],
    ["fazule", "Fazuľa (konzerva)", "konzervy"],
    ["cíceru", "Cícer (konzerva)", "konzervy"],
    ["cícer", "Cícer (konzerva)", "konzervy"],
    ["kokosového mlieka", "Kokosové mlieko", "konzervy"],
    ["tmavej sójovej omáčky", "Sójová omáčka tmavá", "konzervy"],
    ["sójovej omáčky", "Sójová omáčka", "konzervy"],
    ["sójovou omáčkou", "Sójová omáčka", "konzervy"],
    ["teriyaki", "Teriyaki omáčka", "konzervy"],
    ["hoisin", "Hoisin omáčka", "konzervy"],
    ["ustricovej", "Ustricová omáčka", "konzervy"],
    ["sriracha", "Sriracha", "konzervy"],
    ["pálivej omáčky", "Pálivá omáčka (Sriracha/Tabasco)", "konzervy"],
    ["sweet chili", "Sladká chilli omáčka", "konzervy"],
    ["sladkej chilli omáčky", "Sladká chilli omáčka", "konzervy"],
    ["sladkú čili omáčku", "Sladká chilli omáčka", "konzervy"],
    ["bbq omáčky", "BBQ omáčka", "konzervy"],
    ["worcesterskej", "Worcesterská omáčka", "konzervy"],
    ["rybej", "Rybia omáčka", "konzervy"],
    ["dijonskej horčice", "Dijonská horčica", "konzervy"],
    ["plnotučnej horčice", "Plnotučná horčica", "konzervy"],
    ["horčic", "Horčica", "konzervy"],
    ["majonéz", "Majonéza (light)", "konzervy"],
    ["kečup", "Kečup", "konzervy"],
    ["thousand island", "Dresing Thousand Island", "konzervy"],
    ["jogurtového dresingu", "Jogurtový dresing", "konzervy"],
    ["jogurtovým dresingom", "Jogurtový dresing", "konzervy"],
    ["cesnakového jogurtového", "Cesnakový jogurtový dresing", "konzervy"],
    ["balzamikového", "Balzamikový ocot", "konzervy"],
    ["balzamikov", "Balzamiková redukcia", "konzervy"],
    ["jablčného octu", "Jablčný ocot", "konzervy"],
    ["vínneho octu", "Červený vínny ocot", "konzervy"],
    ["octu", "Ocot", "konzervy"],
    ["kari pasty", "Kari pasta", "konzervy"],
    ["chipotle pasty", "Chipotle pasta", "konzervy"],
    ["bazalkového pesta", "Bazalkové pesto", "konzervy"],
    ["pesta", "Bazalkové pesto", "konzervy"],
    ["tzatziki", "Tzatziki", "konzervy"],
    ["jalapeño", "Jalapeños (nakladané)", "konzervy"],
    ["vývar", "Vývar (kurací / hovädzí / zeleninový)", "konzervy"],

    // ——— KORENINY, OLEJE, ZÁKLADY ———
    ["olivového oleja", "Olivový olej", "koreniny"],
    ["olivový olej", "Olivový olej", "koreniny"],
    ["sezamového oleja", "Sezamový olej", "koreniny"],
    ["kokosového oleja", "Kokosový olej", "koreniny"],
    ["bravčovej masti", "Bravčová masť", "koreniny"],
    ["oleja", "Olej", "koreniny"],
    ["olej", "Olej", "koreniny"],
    ["údenej papriky", "Údená paprika", "koreniny"],
    ["údenej mletej papriky", "Údená paprika", "koreniny"],
    ["mletej sladkej papriky", "Sladká mletá paprika", "koreniny"],
    ["sladkej mletej papriky", "Sladká mletá paprika", "koreniny"],
    ["mletej červenej papriky", "Mletá červená paprika", "koreniny"],
    ["mletej papriky", "Mletá paprika", "koreniny"],
    ["mletá paprika", "Mletá paprika", "koreniny"],
    ["sušeného cesnaku", "Sušený cesnak", "koreniny"],
    ["cesnakový prášok", "Cesnakový prášok", "koreniny"],
    ["sušená cibuľa", "Sušená cibuľa", "koreniny"],
    ["sušený cesnak", "Sušený cesnak", "koreniny"],
    ["gyros", "Gyros / kebab korenie", "koreniny"],
    ["kebab korenia", "Gyros / kebab korenie", "koreniny"],
    ["grilovacie korenie", "Grilovacie korenie", "koreniny"],
    ["grilovacieho korenia", "Grilovacie korenie", "koreniny"],
    ["mexick", "Mexické / taco korenie", "koreniny"],
    ["taco", "Mexické / taco korenie", "koreniny"],
    ["fajita", "Fajita korenie", "koreniny"],
    ["cajun", "Cajun korenie", "koreniny"],
    ["garam masala", "Garam Masala", "koreniny"],
    ["kari koren", "Kari korenie", "koreniny"],
    ["žltého kari", "Kari korenie", "koreniny"],
    ["kari", "Kari korenie", "koreniny"],
    ["chilli korenie", "Chilli korenie", "koreniny"],
    ["chilli vločiek", "Chilli vločky", "koreniny"],
    ["čili vločiek", "Chilli vločky", "koreniny"],
    ["chilli", "Chilli", "koreniny"],
    ["čili", "Chilli", "koreniny"],
    ["rímska rasca", "Rímska rasca", "koreniny"],
    ["rímskej rasce", "Rímska rasca", "koreniny"],
    ["rasc", "Rasca", "koreniny"],
    ["oregán", "Oregano", "koreniny"],
    ["oregano", "Oregano", "koreniny"],
    ["majorán", "Majoránka", "koreniny"],
    ["tymian", "Tymian", "koreniny"],
    ["škoric", "Škorica", "koreniny"],
    ["kurkum", "Kurkuma", "koreniny"],
    ["perníkového korenia", "Perníkové korenie", "koreniny"],
    ["muškátov", "Muškátový oriešok", "koreniny"],
    ["bobkov", "Bobkový list", "koreniny"],
    ["nové korenie", "Nové korenie", "koreniny"],
    ["klinček", "Klinčeky", "koreniny"],
    ["badyán", "Badyán", "koreniny"],
    ["vanilk", "Vanilkový extrakt", "koreniny"],
    ["citrónové korenie", "Citrónové korenie", "koreniny"],
    ["talianske", "Talianske bylinky", "koreniny"],
    ["gréckeho korenia", "Grécke korenie", "koreniny"],
    ["korenie na kura", "Korenie na kura", "koreniny"],
    ["korenia na pečené", "Korenie na pečené mäso", "koreniny"],
    ["erytritol", "Erytritol / stévia", "koreniny"],
    ["stévi", "Erytritol / stévia", "koreniny"],
    ["sladidlo", "Sladidlo", "koreniny"],
    ["trstinového cukru", "Trstinový cukor", "koreniny"],
    ["cukru", "Cukor", "koreniny"],
    ["sušené bylinky", "Sušené bylinky", "koreniny"],
    ["bylinky", "Bylinky", "koreniny"],
    ["hrubozrnná soľ", "Soľ hrubozrnná", "koreniny"],
    ["morská soľ", "Soľ morská", "koreniny"],
    ["kala namak", "Čierna soľ Kala Namak", "koreniny"],
    ["čierne korenie", "Čierne korenie", "koreniny"],
    ["biele korenie", "Biele korenie", "koreniny"],
    ["korenie", "Korenie", "koreniny"],
    ["soľ", "Soľ", "koreniny"],
    ["citrónová šťava", "Citrónová šťava", "zelenina"],
    ["citrónovej šťavy", "Citrónová šťava", "zelenina"],
    ["citrónovej kôry", "Citrónová kôra", "zelenina"],
    ["citrónová kôra", "Citrónová kôra", "zelenina"],
    ["limetkovej šťavy", "Limetková šťava", "zelenina"],
    ["vody", "Voda", "koreniny"],

    // ——— POMÔCKY ———
    ["potravinárska fólia", "Potravinárska fólia", "pomocky"],
    ["alobal", "Alobal", "pomocky"],
    ["papier", "Papier na pečenie", "pomocky"],
    ["forma na muffiny", "Forma na muffiny", "pomocky"],
    ["formu na muffiny", "Forma na muffiny", "pomocky"],
    ["košíčky na muffiny", "Košíčky na muffiny", "pomocky"],
    ["haluškovač", "Haluškovač", "pomocky"],

    // ——— DOPLNKY (tvary slov, ktoré vyššie nesedeli) ———
    ["tortíl", "Celozrnné tortilly", "pecivo"],
    ["slanin", "Slanina", "maso"],
    ["karí pasty", "Kari pasta", "konzervy"],
    ["karí", "Kari korenie", "koreniny"],
    ["vajíčok", "Vajcia", "mliecne"],
    ["tvaroh", "Tvaroh", "mliecne"],
    ["mrazeného ovocia", "Mrazené ovocie", "mrazene"],
    ["mrazených hranolčekov", "Mrazené hranolky", "mrazene"],
    ["hranolčekov", "Mrazené hranolky", "mrazene"],
    ["espress", "Káva / espresso", "trvanlive"],
    ["srirach", "Sriracha", "konzervy"],
    ["sliv", "Slivky", "zelenina"],
    ["sójová omáčka", "Sójová omáčka", "konzervy"],
    ["koriand", "Čerstvý koriander", "zelenina"],
    ["bielou plesňou", "Camembert / Hermelín", "mliecne"],
    ["cibuľky", "Jarná cibuľka", "zelenina"],
    ["z uhoriek", "Kyslé uhorky", "konzervy"],
    ["čierneho korenia", "Čierne korenie", "koreniny"],
    ["steak", "Hovädzí steak", "maso"],
    ["soli", "Soľ", "koreniny"]
  ].sort((a, b) => b[0].length - a[0].length);

  // jednotky: [regex, kanonická jednotka] – dlhšie/viacslovné najprv, aby "plátkov" neskončilo ako "PL"
  const K = "(?![a-záäčďéěíľĺňóôŕřšťúůýž])"; // koniec slova aj pred diakritikou
  const JEDNOTKY = [
    [new RegExp("^(plátkov|plátkami|plátky|plátok)" + K, "i"), "plátok"],
    [new RegExp("^(krajcov|krajce|krajec)" + K, "i"), "krajec"],
    [new RegExp("^(konzervy|konzervu|konzerva|konzerv)" + K, "i"), "konzerva"],
    [new RegExp("^(plechovky|plechoviek|plechovka)" + K, "i"), "plechovka"],
    [new RegExp("^(balenia|balenie|balení)" + K, "i"), "balenie"],
    [new RegExp("^(tégliky|téglikov|téglik)" + K, "i"), "téglik"],
    [new RegExp("^(odmerky|odmeriek|odmerka)" + K, "i"), "odmerka"],
    [new RegExp("^(strúčiky|strúčikov|strúčik)" + K, "i"), "strúčik"],
    [new RegExp("^(hrnčeky|hrnčekov|hrnček)" + K, "i"), "hrnček"],
    [new RegExp("^(porcie|porcií|porcia)" + K, "i"), "porcia"],
    [new RegExp("^(vetvičky|vetvičiek|vetvička)" + K, "i"), "vetvička"],
    [new RegExp("^(zväzky|zväzok)" + K, "i"), "zväzok"],
    [new RegExp("^(hlávky|hlávka|hlavičky|hlavička)" + K, "i"), "hlávka"],
    [new RegExp("^(hrste|hrsti|hrsť)" + K, "i"), "hrsť"],
    [new RegExp("^(šálky|šálku|šálka)" + K, "i"), "šálka"],
    [new RegExp("^(balíčka|balíček)" + K, "i"), "balíček"],
    [new RegExp("^(kg)" + K, "i"), "kg"],
    [new RegExp("^(dcl)" + K, "i"), "dcl"],
    [new RegExp("^(ml)" + K, "i"), "ml"],
    [new RegExp("^(PL)" + K, "i"), "PL"],
    [new RegExp("^(ČL|CL)" + K, "i"), "ČL"],
    [new RegExp("^(ks)" + K, "i"), "ks"],
    [new RegExp("^(g)" + K, "i"), "g"],
    [new RegExp("^(l)" + K, "i"), "l"]
  ];

  function cisloZTextu(s) {
    s = s.replace(",", ".").trim();
    if (s.includes("/")) {
      const [a, b] = s.split("/").map(Number);
      if (b) return a / b;
    }
    const n = parseFloat(s);
    return isNaN(n) ? null : n;
  }

  // "400 g kuracích pŕs" -> {qty:400, qtyDo:null, unit:"g", nazov:"kuracích pŕs", raw:...}
  function parseSurovinu(raw) {
    let t = raw.trim();
    const m = t.match(/^(?:cca\s+)?(\d+(?:[.,]\d+)?|\d+\/\d+)(?:\s*[–\-]\s*(\d+(?:[.,]\d+)?))?\s+(.*)$/);
    if (!m) return { qty: null, qtyDo: null, unit: null, nazov: t, raw };
    const qty = cisloZTextu(m[1]);
    const qtyDo = m[2] ? cisloZTextu(m[2]) : null;
    let zvysok = m[3];
    let unit = null;
    for (const [re, u] of JEDNOTKY) {
      if (re.test(zvysok)) { unit = u; zvysok = zvysok.replace(re, "").trim(); break; }
    }
    if (!unit) unit = "ks";
    return { qty, qtyDo, unit, nazov: zvysok, raw };
  }

  function normalizuj(s) {
    return s.toLowerCase().replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();
  }

  // priradí kanonický názov a oddelenie
  function zaradSurovinu(raw) {
    const n = normalizuj(raw);
    for (const [kluc, nazov, odd] of SLOVNIK) {
      if (n.includes(kluc)) return { kanon: nazov, odd };
    }
    return { kanon: raw.trim(), odd: "ine" };
  }

  function fmtCislo(n) {
    if (n === null || n === undefined) return "";
    const r = Math.round(n * 100) / 100;
    if (Math.abs(r - Math.round(r)) < 0.01) return String(Math.round(r));
    return String(r).replace(".", ",");
  }

  function zaokruhli(n, unit) {
    if (unit === "g" || unit === "ml") {
      if (n >= 100) return Math.round(n / 10) * 10;
      if (n >= 20) return Math.round(n / 5) * 5;
      return Math.round(n);
    }
    if (unit === "kg" || unit === "l") return Math.round(n * 100) / 100;
    return Math.round(n * 4) / 4; // ks, PL, ČL… na štvrtiny
  }

  // vráti text suroviny prepočítaný koeficientom
  function surovinaText(raw, koef) {
    const p = parseSurovinu(raw);
    if (p.qty === null || Math.abs(koef - 1) < 0.001) return raw;
    const q = zaokruhli(p.qty * koef, p.unit);
    const qd = p.qtyDo !== null ? zaokruhli(p.qtyDo * koef, p.unit) : null;
    const cislo = qd !== null ? fmtCislo(q) + "–" + fmtCislo(qd) : fmtCislo(q);
    const jed = p.unit === "ks" ? "" : sklonuj(p.unit, qd !== null ? qd : q) + " ";
    return cislo + " " + jed + p.nazov;
  }

  // 1 plechovka / 2 plechovky / 5 plechoviek
  const SKLON = {
    "plechovka": ["plechovka", "plechovky", "plechoviek"],
    "konzerva": ["konzerva", "konzervy", "konzerv"],
    "plátok": ["plátok", "plátky", "plátkov"],
    "krajec": ["krajec", "krajce", "krajcov"],
    "balenie": ["balenie", "balenia", "balení"],
    "téglik": ["téglik", "tégliky", "téglikov"],
    "strúčik": ["strúčik", "strúčiky", "strúčikov"],
    "hlávka": ["hlávka", "hlávky", "hlávok"],
    "zväzok": ["zväzok", "zväzky", "zväzkov"],
    "balíček": ["balíček", "balíčky", "balíčkov"],
    "odmerka": ["odmerka", "odmerky", "odmeriek"],
    "vetvička": ["vetvička", "vetvičky", "vetvičiek"],
    "porcia": ["porcia", "porcie", "porcií"],
    "hrsť": ["hrsť", "hrste", "hrstí"],
    "šálka": ["šálka", "šálky", "šálok"],
    "hrnček": ["hrnček", "hrnčeky", "hrnčekov"]
  };
  function sklonuj(unit, n) {
    const f = SKLON[unit];
    if (!f) return unit;
    if (n === 1) return f[0];
    if (n >= 2 && n <= 4 && Number.isInteger(n)) return f[1];
    return f[2];
  }

  // zlúči suroviny z viacerých jedál do nákupného zoznamu
  // vstup: [{raw, koef}] -> výstup: {oddelenie: [{kanon, polozky:[...], text}]}
  function nakupnyZoznam(zaznamy) {
    const mapa = new Map(); // key = kanon + "|" + unit
    for (const z of zaznamy) {
      const p = parseSurovinu(z.raw);
      // zjednotenie príbuzných jednotiek, nech nevznikajú dva riadky na tú istú vec
      if (p.unit === "ČL" && p.qty !== null) { p.qty = p.qty / 3; p.unit = "PL"; }
      if (p.unit === "dcl" && p.qty !== null) { p.qty = p.qty * 100; p.unit = "ml"; }
      if (p.unit === "kg" && p.qty !== null) { p.qty = p.qty * 1000; p.unit = "g"; }
      if (p.unit === "l" && p.qty !== null) { p.qty = p.qty * 1000; p.unit = "ml"; }
      const { kanon, odd } = zaradSurovinu(z.raw);
      const bezMnozstva = p.qty === null || odd === "koreniny" || odd === "pomocky";
      const key = kanon + "|" + (bezMnozstva ? "-" : p.unit);
      if (!mapa.has(key)) {
        mapa.set(key, { kanon, odd, unit: bezMnozstva ? null : p.unit, suma: 0, bezMnozstva, zdroje: new Set() });
      }
      const e = mapa.get(key);
      if (!bezMnozstva) e.suma += p.qty * z.koef;
      if (z.recept) e.zdroje.add(z.recept);
    }
    // kusové veci sa nedajú kúpiť na polovice – v nákupe zaokrúhlime nahor
    const KUSOVE = ["ks", "plátok", "krajec", "konzerva", "plechovka", "balenie", "téglik", "strúčik", "hlávka", "zväzok", "balíček", "odmerka", "vetvička"];
    const vysledok = {};
    for (const e of mapa.values()) {
      let text = e.kanon;
      if (!e.bezMnozstva) {
        let suma = e.suma, unit = e.unit;
        if (unit === "g" && suma >= 1000) { suma = suma / 1000; unit = "kg"; }
        if (unit === "ml" && suma >= 1000) { suma = suma / 1000; unit = "l"; }
        const mn = KUSOVE.includes(unit) ? Math.max(1, Math.ceil(suma - 0.05)) : zaokruhli(suma, unit);
        text = e.kanon + " — " + fmtCislo(mn) + " " + sklonuj(unit, mn);
      }
      (vysledok[e.odd] = vysledok[e.odd] || []).push({
        id: e.kanon + "|" + (e.unit || "-"), kanon: e.kanon, text, odd: e.odd,
        zdroje: [...e.zdroje].sort()
      });
    }
    for (const k in vysledok) vysledok[k].sort((a, b) => a.kanon.localeCompare(b.kanon, "sk"));
    return vysledok;
  }

  window.SUROVINY = {
    ODDELENIA, parseSurovinu, zaradSurovinu, surovinaText, nakupnyZoznam, normalizuj, fmtCislo, zaokruhli
  };
})();
