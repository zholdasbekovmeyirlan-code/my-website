/* EntryX — install as an app (PWA).
   Registers the service worker and exposes window.PWA for the install button:
   Chrome / Edge / Android get the browser's own install prompt; iPhone and iPad get step-by-step instructions. */
(function () {
  'use strict';
  const secure = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if ('serviceWorker' in navigator && secure) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => { /* private mode etc. */ }); });
  }

  let deferred = null, installed = false;
  const subs = [];
  const notify = () => subs.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferred = e; notify(); });
  window.addEventListener('appinstalled', () => { deferred = null; installed = true; notify(); });

  const standalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  window.PWA = {
    get standalone() { return standalone(); },
    get ios() { return ios; },
    get mobile() { return ios || /android|mobile/i.test(navigator.userAgent); },
    /** true when we can offer an install: a browser prompt is ready, or on iPhone/iPad (manual steps) */
    get available() { return !installed && !standalone() && (!!deferred || ios); },
    onChange(fn) { subs.push(fn); },
    /** 'accepted' | 'dismissed' from the browser prompt, or 'ios' when the caller should show the steps */
    async install() {
      if (deferred) {
        const d = deferred; deferred = null;
        d.prompt();
        const choice = await d.userChoice.catch(() => ({ outcome: 'dismissed' }));
        if (choice.outcome === 'accepted') installed = true;
        notify();
        return choice.outcome;
      }
      return ios ? 'ios' : 'unavailable';
    },
  };
})();
