/* EntryX — retired service worker.
   The site briefly registered a service worker; this version removes itself from any browser that still
   has it, clears its cache, and leaves every request to the network as before. Keep this file deployed
   for a while so those browsers pick it up. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
  })());
});
