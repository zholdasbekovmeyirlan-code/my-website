/* BilimPath ҰБТ — offline cache. Bump VERSION when files change. */
const VERSION = "bilimpath-v3";
const SHELL = [
  "./",
  "./index.html",
  "./css/style.css",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./js/app.js",
  "./js/bank-core.js",
  "./js/bank/biology.js",
  "./js/bank/chemistry.js",
  "./js/bank/english.js",
  "./js/bank/geography.js",
  "./js/bank/history.js",
  "./js/bank/informatics.js",
  "./js/bank/kazlang.js",
  "./js/bank/kazlit.js",
  "./js/bank/law.js",
  "./js/bank/math.js",
  "./js/bank/mathlit.js",
  "./js/bank/physics.js",
  "./js/bank/readlit.js",
  "./js/bank/worldhistory.js",
  "./js/fx.js",
  "./js/generators.js",
  "./js/konspekt.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // App files: network first so a new deploy is never mixed with old files; cache when offline
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req.mode === "navigate" ? "./index.html" : req, copy)); }
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || (req.mode === "navigate" ? caches.match("./index.html") : Response.error())))
    );
    return;
  }

  // Google Fonts: serve from cache, refresh in the background
  if (url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    e.respondWith(
      caches.open(VERSION).then((cache) =>
        cache.match(req).then((hit) => {
          const net = fetch(req).then((res) => { if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone()); return res; }).catch(() => hit);
          return hit || net;
        })
      )
    );
  }
});
