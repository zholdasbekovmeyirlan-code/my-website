/* Бәрі — app state, persistence and shared helpers. */
(function () {
  const B = window.Bari;
  const D = B.data;
  const KEY = 'bari:v1';

  function defaults() {
    return {
      v: 1,
      lang: 'kk',
      theme: 'system',
      profile: { name: 'Айгерім', phone: '+7 701 234 56 78', social: 'none' },
      pay: 'card',
      roundUp: true,
      addr: 'home',
      cart: { store: null, items: {} },
      orders: [],
      donated: 0,
      apps: [],
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (s && s.v === 1) return Object.assign(defaults(), s);
      }
    } catch (e) { /* storage unavailable */ }
    return defaults();
  }

  B.state = load();
  B.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(B.state)); } catch (e) { /* ignore */ }
  };
  B.resetState = function () {
    const lang = B.state.lang;
    B.state = defaults();
    B.state.lang = lang;
    B.save();
  };

  /* ---------- formatting ---------- */
  const nf = new Intl.NumberFormat('ru-RU');
  B.money = (n) => nf.format(Math.round(n)) + ' ₸';
  B.dec = (x, d) => Number(x).toFixed(d).replace('.', ',');
  B.compactMoney = (n) => (n >= 1e6 ? B.dec(n / 1e6, 1) + ' ' + B.t('mln') + ' ₸' : B.money(n));
  B.esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  B.uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  B.pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  // Formatted by hand: not every browser ships Kazakh locale data.
  const MONTHS = {
    kk: ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан'],
    ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  };
  B.time = function (ts) {
    const d = new Date(ts);
    const m = MONTHS[B.state.lang === 'ru' ? 'ru' : 'kk'][d.getMonth()];
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${d.getDate()} ${m}, ${hh}:${mm}`;
  };

  /* ---------- geo & fares ---------- */
  B.hav = function (a, b) {
    const R = 6371, rad = Math.PI / 180;
    const dLat = (b[0] - a[0]) * rad, dLng = (b[1] - a[1]) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  };
  // Almaty's streets run mostly north–south and east–west, so a stepped path reads like a real route.
  B.routePts = function (a, b) {
    const mid = (a[0] + b[0]) / 2;
    return [a, [mid, a[1]], [mid, b[1]], b];
  };
  B.trip = function (a, b) {
    const pts = B.routePts(a, b);
    let d = 0;
    for (let i = 1; i < pts.length; i++) d += B.hav(pts[i - 1], pts[i]);
    const km = Math.max(0.8, d * 1.1);
    return { pts, km, min: Math.round((km / 24) * 60 + 3) };
  };
  B.fare = function (tar, trip) {
    let p = trip ? tar.base + tar.km * trip.km + (tar.min || 0) * trip.min : tar.floor;
    p = Math.max(p, tar.floor);
    if (tar.discount) p *= 1 - tar.discount;
    return Math.round(p / 10) * 10;
  };
  B.nearby = (ll) => [ll[0] + (Math.random() - 0.5) * 0.022, ll[1] + (Math.random() - 0.5) * 0.028];
  B.eligibleSocial = () => B.state.profile.social !== 'none';

  function fakePhone() {
    const n = () => Math.floor(Math.random() * 10);
    return `+7 70${n()} ${n()}${n()}${n()} ${n()}${n()} ${n()}${n()}`;
  }
  function plate() {
    const letters = 'ABCDEFHKLMNOPSTXYZ';
    const num = String(100 + Math.floor(Math.random() * 900));
    const abc = Array.from({ length: 3 }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
    return { num: num + ' ' + abc, reg: '02' };
  }
  B.makeDriver = function (mode, tar) {
    const base = { rating: 4.75 + Math.random() * 0.24, h: Math.floor(Math.random() * 360), phone: fakePhone() };
    if (mode === 'courier' && tar.id === 'walk') {
      const [name, vehicle] = B.pick(D.couriers);
      return Object.assign(base, { name, vehicle: ['Жаяу курьер', 'Пеший курьер'] });
    }
    const list = tar.id === 'business' ? D.carsBiz : tar.id === 'cargo' ? D.carsCargo : D.cars;
    return Object.assign(base, { name: B.pick(D.driverNames), car: B.pick(list), color: B.pick(D.carColors), plate: plate() });
  };
  B.makeCourier = function () {
    const [name, vehicle] = B.pick(D.couriers);
    return { name, vehicle, rating: 4.8 + Math.random() * 0.19, h: Math.floor(Math.random() * 360) };
  };

  /* ---------- orders ---------- */
  // Demo timeline in seconds. Real orders would get status updates from a server.
  B.PHASES = {
    taxi: [['searching', 5], ['coming', 22], ['arrived', 8], ['riding', 32]],
    courier: [['searching', 5], ['pickup', 18], ['delivering', 28]],
    food: [['accepted', 5], ['cooking', 20], ['delivering', 28]],
    shop: [['accepted', 4], ['picking', 14], ['delivering', 24]],
    pharm: [['accepted', 4], ['picking', 12], ['delivering', 24]],
  };
  B.status = function (o, now) {
    now = now || Date.now();
    if (o.cancelled) return { key: 'cancelled', done: true, idx: -1, t: 0, p: 0 };
    const ph = B.PHASES[o.type];
    const total = ph.reduce((a, x) => a + x[1], 0);
    const el = (now - o.createdAt) / 1000;
    if (el >= total) return { key: 'done', done: true, idx: ph.length, t: 1, p: 1 };
    let acc = 0;
    for (let i = 0; i < ph.length; i++) {
      if (el < acc + ph[i][1]) return { key: ph[i][0], done: false, idx: i, t: (el - acc) / ph[i][1], p: el / total };
      acc += ph[i][1];
    }
    return { key: 'done', done: true, idx: ph.length, t: 1, p: 1 };
  };
  B.textType = (o) => (o.type === 'pharm' ? 'shop' : o.type);
  B.statusText = function (o, st) {
    const k = 'st.' + B.textType(o) + '.' + st.key;
    return B.has(k) ? B.t(k) : B.t('st.' + st.key);
  };
  B.findOrder = (id) => B.state.orders.find((o) => o.id === id);
  B.activeOrders = () => B.state.orders.filter((o) => !B.status(o).done);
  B.orderTitle = function (o) {
    if (o.type === 'taxi' || o.type === 'courier') {
      const tar = D.tariffs[o.type].find((x) => x.id === o.tariff);
      return B.t('svc.' + o.type) + ' · ' + B.L(tar.n);
    }
    const s = D.storeById[o.store];
    return s ? B.L(s.n) : '';
  };
  B.orderEmoji = function (o) {
    if (o.type === 'taxi') return '🚕';
    if (o.type === 'courier') return '📦';
    const s = D.storeById[o.store];
    return s ? s.e : '🧾';
  };
  B.orderTotal = (o) => (o.type === 'taxi' || o.type === 'courier' ? o.price + (o.tip || 0) : o.total);

  /* ---------- cart ---------- */
  B.cartCount = () => Object.values(B.state.cart.items).reduce((a, b) => a + b, 0);
  B.cartLines = () =>
    Object.entries(B.state.cart.items)
      .map(([id, q]) => ({ it: D.itemById[id], q }))
      .filter((l) => l.it && l.q > 0);
  B.cartSubtotal = () => B.cartLines().reduce((a, l) => a + l.it.p * l.q, 0);
  B.roundUpAmount = (total) => Math.ceil(total / 500) * 500 - total;
  B.communityDonated = () => 12480300 + B.state.donated;
})();
