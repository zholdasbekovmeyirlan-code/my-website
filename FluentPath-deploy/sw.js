/* FluentPath service worker — offline cache.
   Bump VERSION together with the ?v= query strings in index.html on every release. */
const VERSION = "11";
const CACHE = `fluentpath-v${VERSION}`;
const FONT_CACHE = "fluentpath-fonts";
const AUDIO_CACHE = "fluentpath-audio"; // recorded voice clips: named by content hash, so they never go stale
const META_CACHE = "fluentpath-meta"; // small settings the page leaves for push (interface language)
const ASSETS = [
  "./",
  "index.html",
  `css/style.css?v=${VERSION}`,
  `css/theme.css?v=${VERSION}`,
  `js/icons.js?v=${VERSION}`,
  `js/data.js?v=${VERSION}`,
  `js/course-data.js?v=${VERSION}`,
  `js/content-extra.js?v=${VERSION}`,
  `js/i18n.js?v=${VERSION}`,
  `js/srs.js?v=${VERSION}`,
  `js/ai-prompts.js?v=${VERSION}`,
  `js/ai.js?v=${VERSION}`,
  `js/audio-index.js?v=${VERSION}`,
  `js/voice.js?v=${VERSION}`,
  `js/app.js?v=${VERSION}`,
  `js/course.js?v=${VERSION}`,
  `js/ai-ui.js?v=${VERSION}`,
  `js/quests.js?v=${VERSION}`,
  `js/stories.js?v=${VERSION}`,
  `js/exams.js?v=${VERSION}`,
  `js/cloud.js?v=${VERSION}`,
  `js/cloud-ui.js?v=${VERSION}`,
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
      .then((keys) => Promise.all(keys.filter((k) => ![CACHE, FONT_CACHE, AUDIO_CACHE, META_CACHE].includes(k)).map((k) => caches.delete(k))))
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
  // Functions (site config, AI) are always live, never cached.
  if (url.pathname.startsWith("/.netlify/")) return;

  // Voice clips: cache first in their own long-lived cache (each one is fetched whole, never by range).
  if (url.pathname.includes("/audio/") && url.pathname.endsWith(".mp3")) {
    event.respondWith(
      caches.open(AUDIO_CACHE).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        // Only real audio: a missing clip comes back as the app page (see _redirects) and must not be kept.
        if (res.status === 200 && (res.headers.get("content-type") || "").startsWith("audio/")) cache.put(req, res.clone());
        return res;
      })
    );
    return;
  }

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

/* Daily reminder: the server sends an empty push, the text lives here. */
const REMINDER = {
  kk: { title: "FluentPath", body: "Бүгін әлі сабақ жасаған жоқсың. 5 минут оқысаң, қатарынан оқыған күндерің үзілмейді!" },
  ru: { title: "FluentPath", body: "Сегодня ещё не было занятия — 5 минут, и серия сохранится!" },
};

async function reminderText() {
  try {
    const hit = await (await caches.open(META_CACHE)).match("lang");
    const lang = hit ? await hit.text() : "kk";
    return REMINDER[lang] || REMINDER.kk;
  } catch {
    return REMINDER.kk;
  }
}

self.addEventListener("push", (event) => {
  event.waitUntil(
    reminderText().then((r) =>
      self.registration.showNotification(r.title, {
        body: r.body,
        icon: "icons/icon-192.png",
        badge: "icons/icon-192.png",
        tag: "daily-reminder",
        renotify: false,
      })
    )
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      const open = list.find((c) => new URL(c.url).origin === self.location.origin);
      if (open) {
        open.navigate("./#learn").catch(() => {});
        return open.focus();
      }
      return self.clients.openWindow("./#learn");
    })
  );
});
