// Spojenie všetkých receptov + metadáta ebookov
window.BOOKS = {
  CK:  {nazov:"Chlapské krabičky (TeloZdravo)", kratko:"Chlapské krabičky", strany:116},
  KBV: {nazov:"Krabičky bez výčitiek", kratko:"Krabičky bez výčitiek", strany:115},
  JK:  {nazov:"Jesenné krabičky bez výčitiek", kratko:"Jesenné krabičky", strany:59},
  MBV: {nazov:"Mäso bez výčitiek", kratko:"Mäso bez výčitiek", strany:59},
  NBV: {nazov:"Namáčaj bez výčitiek!", kratko:"Namáčaj bez výčitiek", strany:8}
};

window.KATEGORIE = {
  ranajky:  "Raňajky",
  obed:     "Obed",
  vecera:   "Večera",
  desiata:  "Desiata",
  dezert:   "Dezert",
  polievka: "Polievka",
  priloha:  "Prílohy a omáčky",
  napoj:    "Nápoje"
};

window.STITKY = {
  pikantne:  "Pikantné",
  mealprep:  "Meal prep",
  mikrovlnka:"Mikrovlnka",
  rychle:    "Rýchle (do 20 min)",
  studene:   "Studené (bez ohrevu)",
  bezmasa:   "Bez mäsa"
};

window.RECEPTY = [].concat(
  (window.DB_CK  || []).map(r => Object.assign({b:"CK"},  r)),
  (window.DB_KBV || []).map(r => Object.assign({b:"KBV"}, r)),
  (window.DB_JK  || []).map(r => Object.assign({b:"JK"},  r)),
  (window.DB_MBV || []).map(r => Object.assign({b:"MBV"}, r)),
  (window.DB_NBV || []).map(r => Object.assign({b:"NBV"}, r))
);
