/* Бәрі — local preferences, formatting and geo helpers shared by all apps. */
(function () {
  const B = window.Bari;
  const KEY = 'bari:prefs:v2';

  function defaults() {
    return {
      lang: 'kk',
      theme: 'system',
      roundUp: true,
      addr: 'home',
      addresses: { home: null, work: null },
      cart: null, // { venue: {...snapshot}, items: { [itemId]: { q, name, name_ru, price, emoji, stock } } }
    };
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return Object.assign(defaults(), JSON.parse(raw));
    } catch (e) { /* storage unavailable */ }
    return defaults();
  }
  B.state = load();
  B.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(B.state)); } catch (e) { /* ignore */ }
  };

  /* ---------- formatting ---------- */
  const nf = new Intl.NumberFormat('ru-RU');
  B.money = (n) => nf.format(Math.round(n || 0)) + ' ₸';
  B.dec = (x, d) => Number(x).toFixed(d).replace('.', ',');
  // Stars only when someone has rated; otherwise "new". Never an invented 5.0.
  B.rating = (x, d) => (x && x.rating != null && x.rating_count
    ? `${B.ic('star', 'ic-star')}<b>${B.dec(x.rating, d || 1)}</b>`
    : `<span class="tag tag-new">${B.t('rating.new')}</span>`);
  // "+77071234567" → "+7 707 123 45 67"
  B.phone = (p) => {
    const d = String(p || '').replace(/\D/g, '');
    return d.length === 11 ? `+${d[0]} ${d.slice(1, 4)} ${d.slice(4, 7)} ${d.slice(7, 9)} ${d.slice(9)}` : String(p || '');
  };
  B.compactMoney = (n) => (n >= 1e6 ? B.dec(n / 1e6, 1) + ' ' + B.t('mln') + ' ₸' : B.money(n));
  B.esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // A server record's name in the current language: name_ru is used for Russian when present.
  B.N = (o, field) => {
    if (!o) return '';
    field = field || 'name';
    return (B.state.lang === 'ru' && o[field + '_ru']) || o[field] || '';
  };

  // Formatted by hand: not every browser ships Kazakh locale data.
  const MONTHS = {
    kk: ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан'],
    ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  };
  B.hm = (ts) => {
    const d = new Date(ts);
    return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  };
  B.time = function (ts) {
    const d = new Date(ts);
    return `${d.getDate()} ${MONTHS[B.state.lang === 'ru' ? 'ru' : 'kk'][d.getMonth()]}, ${B.hm(ts)}`;
  };

  /* ---------- geo ---------- */
  const la = (p) => (p.lat != null ? p.lat : p[0]);
  const lo = (p) => (p.lng != null ? p.lng : p[1]);
  B.ll = (p) => [la(p), lo(p)];
  B.hav = function (a, b) {
    const R = 6371, rad = Math.PI / 180;
    const dLat = (la(b) - la(a)) * rad, dLng = (lo(b) - lo(a)) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(la(a) * rad) * Math.cos(la(b) * rad) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  };
  // Almaty's streets run mostly north–south and east–west, so a stepped path reads like a real route.
  B.routePts = function (a, b) {
    const mid = (la(a) + la(b)) / 2;
    return [[la(a), lo(a)], [mid, lo(a)], [mid, lo(b)], [la(b), lo(b)]];
  };
  // Same estimate as the server (lib/pricing.js) so the price shown before ordering matches.
  B.trip = function (a, b) {
    const pts = B.routePts(a, b);
    let d = 0;
    for (let i = 1; i < pts.length; i++) d += B.hav(pts[i - 1], pts[i]);
    const km = Math.round(Math.max(0.8, d * 1.1) * 10) / 10;
    return { pts, km, min: Math.round((Math.max(0.8, d * 1.1) / 24) * 60 + 3) };
  };
  B.fare = function (tar, trip) {
    let p = trip ? tar.base + tar.km * trip.km + (tar.min || 0) * trip.min : tar.floor;
    p = Math.max(p, tar.floor);
    if (tar.discount) p *= 1 - tar.discount;
    return Math.round(p / 10) * 10;
  };
  B.minutesTo = (a, b) => Math.max(1, Math.round((B.hav(a, b) * 1.3 / 24) * 60));
  B.roundUpAmount = (total) => Math.ceil(total / 500) * 500 - total;

  // A place the user picked → the shape the server expects.
  B.toPoint = (pl) => ({ n: B.L(pl.n) || '', a: B.L(pl.a) || '', lat: la(pl), lng: lo(pl) });
  B.addressOf = (key) => B.state.addresses[key];

  /* ---------- cart ---------- */
  B.cartCount = () => (B.state.cart ? Object.values(B.state.cart.items).reduce((a, l) => a + l.q, 0) : 0);
  B.cartSubtotal = () => (B.state.cart ? Object.values(B.state.cart.items).reduce((a, l) => a + l.price * l.q, 0) : 0);
  B.cartQty = (id) => (B.state.cart && B.state.cart.items[id] ? B.state.cart.items[id].q : 0);

  /* ---------- orders ---------- */
  B.ACTIVE = {
    ride: ['searching', 'accepted', 'arrived', 'riding'],
    parcel: ['searching', 'accepted', 'picked'],
    delivery: ['new', 'cooking', 'ready', 'delivering'],
  };
  B.isActive = (o) => B.ACTIVE[o.kind].includes(o.status);
  B.statusText = function (o) {
    const k = 'st.' + o.kind + '.' + o.status;
    return B.has(k) ? B.t(k) : B.t('st.' + o.status);
  };
  B.progress = (o) => {
    const list = B.ACTIVE[o.kind];
    if (o.status === 'done') return 1;
    const i = list.indexOf(o.status);
    return i < 0 ? 0 : (i + 0.5) / list.length;
  };
  B.tariffOf = (kind, id) => ((B.cfg && B.cfg.tariffs[kind]) || []).find((x) => x.id === id);
  B.orderTitle = function (o) {
    if (o.kind === 'delivery') return o.venue ? B.N(o.venue) : '';
    const tar = B.tariffOf(o.kind, o.tariff);
    return B.t(o.kind === 'ride' ? 'svc.taxi' : 'svc.courier') + (tar ? ' · ' + B.L(tar.n) : '');
  };
  B.orderEmoji = (o) => (o.kind === 'ride' ? '🚕' : o.kind === 'parcel' ? '📦' : (o.venue && o.venue.emoji) || '🧾');
  B.cancelText = (o) => {
    const r = o.cancel_reason;
    if (!r) return '';
    const k = 'reason.' + r;
    return B.has(k) ? B.t(k) : r;
  };
})();
