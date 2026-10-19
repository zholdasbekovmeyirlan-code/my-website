/* EntryX — service worker.
   Makes the site installable as an app and keeps the last pages you opened available offline.
   Network first: every visit loads the latest deploy; the cache is only used when there is no network. */
const CACHE = 'entryx-v1';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  // Same-origin GETs only: Supabase, payments, fonts and charts always go straight to the network.
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res.ok && res.type === 'basic') {
        const copy = res.clone();
        e.waitUntil((async () => {
          const c = await caches.open(CACHE);
          await c.delete(req, { ignoreSearch: true }); // keep one copy per file, not one per ?v= deploy
          await c.put(req, copy);
        })());
      }
      return res;
    } catch (err) {
      const hit = await caches.match(req) || await caches.match(req, { ignoreSearch: true });
      if (hit) return hit;
      if (req.mode === 'navigate') { const app = await caches.match('app.html', { ignoreSearch: true }); if (app) return app; }
      throw err;
    }
  })());
});
