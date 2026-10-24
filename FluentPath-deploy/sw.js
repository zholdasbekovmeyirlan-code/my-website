/* FluentPath service worker — offline cache.
   Bump VERSION together with the ?v= query strings in index.html on every release. */
const VERSION = "4";
const CACHE = `fluentpath-v${VERSION}`;
const FONT_CACHE = "fluentpath-fonts";
const ASSETS = [
  "./",
  "index.html",
  `css/style.css?v=${VERSION}`,
  `js/data.js?v=${VERSION}`,
  `js/course-data.js?v=${VERSION}`,
  `js/i18n.js?v=${VERSION}`,
  `js/srs.js?v=${VERSION}`,
  `js/ai-prompts.js?v=${VERSION}`,
  `js/ai.js?v=${VERSION}`,
  `js/app.js?v=${VERSION}`,
  `js/course.js?v=${VERSION}`,
  `js/ai-ui.js?v=${VERSION}`,
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== FONT_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Google Fonts: cache-first, they never change for a given URL.
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(
      caches.open(FONT_CACHE).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok || res.type === "opaque") cache.put(req, res.clone());
        return res;
      })
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Pages: network first so updates arrive, cached shell when offline.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put("index.html", copy));
          return res;
        })
        .catch(() => caches.match("index.html"))
    );
    return;
  }

  // Versioned static files: cache first, fall back to network and store.
  event.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        })
    )
  );
});
