/* Service worker – aby aplikácia fungovala aj úplne bez internetu.
   Pri každej zmene súborov zvýš číslo verzie, inak si telefón nechá staré. */
const PREFIX = "jedalnicek-";
const VERZIA = PREFIX + "v2";

const SUBORY = [
  "./",
  "./index.html",
  "./style.css",
  "./data-ck.js",
  "./data-kbv.js",
  "./data-jk.js",
  "./data-mbv.js",
  "./data.js",
  "./suroviny.js",
  "./app.js",
  "./manifest.json",
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png"
];

// pri inštalácii stiahneme všetko do pamäte telefónu
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(VERZIA)
      .then(c => c.addAll(SUBORY))
      .then(() => self.skipWaiting())
  );
});

// Po aktivácii vyhodíme staré verzie – ale IBA tie naše.
// Na 1kubo11.github.io býva aj appka den-po-dni a pamäť je pre celú adresu spoločná,
// takže bez kontroly prefixu by sme jej vymazali offline režim.
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(mena => Promise.all(
        mena.filter(m => m.startsWith(PREFIX) && m !== VERZIA).map(m => caches.delete(m))
      ))
      .then(() => self.clients.claim())
  );
});

// najprv skúsime pamäť telefónu, až potom internet
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  // otvorenie aplikácie: keď nie je sieť, vrátime uloženú stránku
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(r => {
          const kopia = r.clone();
          caches.open(VERZIA).then(c => c.put("./index.html", kopia));
          return r;
        })
        .catch(() => caches.open(VERZIA).then(c => c.match("./index.html").then(r => r || c.match("./"))))
    );
    return;
  }

  // hľadáme len vo vlastnej pamäti, nie v pamäti ostatných appiek na tej istej adrese
  e.respondWith(
    caches.open(VERZIA).then(c => c.match(req).then(ulozene => {
      if (ulozene) return ulozene;
      return fetch(req).then(r => {
        if (r && r.ok && r.type === "basic") c.put(req, r.clone());
        return r;
      });
    }))
  );
});
