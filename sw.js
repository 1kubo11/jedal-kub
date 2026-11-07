/* Service worker – aby aplikácia fungovala aj úplne bez internetu.
   Pri každej zmene súborov zvýš číslo verzie, inak si telefón nechá staré. */
const VERZIA = "jedalnicek-v1";

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

// po aktivácii vyhodíme staré verzie
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(mena => Promise.all(mena.filter(m => m !== VERZIA).map(m => caches.delete(m))))
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
        .catch(() => caches.match("./index.html").then(r => r || caches.match("./")))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(ulozene => {
      if (ulozene) return ulozene;
      return fetch(req).then(r => {
        if (r && r.ok && r.type === "basic") {
          const kopia = r.clone();
          caches.open(VERZIA).then(c => c.put(req, kopia));
        }
        return r;
      });
    })
  );
});
