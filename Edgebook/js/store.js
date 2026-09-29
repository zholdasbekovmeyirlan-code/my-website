/* EntryX — data layer (localStorage) */
(function () {
  'use strict';

  // Journals are stored per signed-in account so people sharing a browser never see each
  // other's data. Without accounts (local mode) everything lives under the base key.
  const BASE = 'edgebook:v1';
  let KEY = BASE;

  const DEFAULT_SETUPS = ['Breakout', 'Pullback', 'Reversal', 'Range', 'Trend', 'News'];

  function defaults() {
    return {
      version: 1,
      trades: [],
      journal: {},
      settings: {
        name: '',
        balance: 10000,
        currency: 'USD',
        lang: 'kk',
        theme: 'dark',
        setups: DEFAULT_SETUPS.slice(),
        demo: false,
        seeded: false
      }
    };
  }

  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  const num = v => {
    if (v === '' || v == null) return null;
    const n = parseFloat(String(v).replace(',', '.'));
    return Number.isFinite(n) ? n : null;
  };

  function pad(n) { return String(n).padStart(2, '0'); }
  function dayKey(d) {
    const x = d instanceof Date ? d : new Date(d);
    return x.getFullYear() + '-' + pad(x.getMonth() + 1) + '-' + pad(x.getDate());
  }
  function toLocalInput(d) {
    return dayKey(d) + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  /* Derive P&L, R-multiple and status from a raw trade */
  function calc(t) {
    const entry = num(t.entry), exit = num(t.exit), qty = num(t.qty), stop = num(t.stop);
    const target = num(t.target), fees = num(t.fees) || 0, mult = num(t.mult) || 1;
    const dir = t.side === 'short' ? -1 : 1;
    const closed = entry != null && exit != null && qty != null;
    let gross = null, net = null, r = null, risk = null, plannedR = null;
    if (closed) { gross = (exit - entry) * qty * mult * dir; net = gross - fees; }
    if (entry != null && stop != null && qty != null && stop !== entry) risk = Math.abs(entry - stop) * qty * mult;
    if (closed && risk) r = net / risk;
    if (entry != null && stop != null && target != null && stop !== entry) plannedR = Math.abs(target - entry) / Math.abs(entry - stop);
    const opened = t.openedAt ? new Date(t.openedAt) : null;
    const closedAt = t.closedAt ? new Date(t.closedAt) : null;
    const holdMin = opened && closedAt ? Math.max(0, (closedAt - opened) / 60000) : null;
    let status = 'open';
    if (closed) status = Math.abs(net) < 0.005 ? 'be' : net > 0 ? 'win' : 'loss';
    const when = closedAt || opened || new Date(0);
    return Object.assign({}, t, {
      entryN: entry, exitN: exit, qtyN: qty, stopN: stop, targetN: target, feesN: fees, multN: mult,
      gross, net, r, risk, plannedR, closed, status, holdMin,
      when, day: dayKey(when), hour: opened ? opened.getHours() : null, weekday: (opened || when).getDay()
    });
  }

  const Store = {
    state: defaults(),
    _cache: null,
    listeners: [],

    load() {
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) {
          const data = JSON.parse(raw);
          const d = defaults();
          this.state = {
            version: 1,
            trades: Array.isArray(data.trades) ? data.trades : [],
            journal: data.journal && typeof data.journal === 'object' ? data.journal : {},
            settings: Object.assign(d.settings, data.settings || {})
          };
        }
      } catch (e) { console.warn('EntryX: load failed', e); }
      this._cache = null;
      return this.state;
    },

    save() {
      this._cache = null;
      try {
        localStorage.setItem(KEY, JSON.stringify(this.state));
        this.saveListeners.forEach(fn => { try { fn(); } catch (err) { console.warn(err); } });
        return true;
      } catch (e) {
        console.warn('EntryX: save failed', e);
        this.listeners.forEach(fn => fn('quota'));
        return false;
      }
    },

    onError(fn) { this.listeners.push(fn); },
    saveListeners: [],
    onSave(fn) { this.saveListeners.push(fn); },

    /* Computed trades, newest first */
    all() {
      if (!this._cache) this._cache = this.state.trades.map(calc).sort((a, b) => b.when - a.when);
      return this._cache;
    },

    get(id) { return this.all().find(t => t.id === id) || null; },
    raw(id) { return this.state.trades.find(t => t.id === id) || null; },

    upsert(trade) {
      const clean = Object.assign({}, trade);
      ['entryN', 'exitN', 'qtyN', 'stopN', 'targetN', 'feesN', 'multN', 'gross', 'net', 'r', 'risk',
        'plannedR', 'closed', 'status', 'holdMin', 'when', 'day', 'hour', 'weekday'].forEach(k => delete clean[k]);
      if (!clean.id) { clean.id = uid(); clean.createdAt = new Date().toISOString(); }
      clean.updatedAt = new Date().toISOString();
      const i = this.state.trades.findIndex(t => t.id === clean.id);
      if (i >= 0) this.state.trades[i] = clean; else this.state.trades.push(clean);
      return this.save() ? clean : null;
    },

    remove(id) {
      this.state.trades = this.state.trades.filter(t => t.id !== id);
      this.save();
    },

    journalFor(day) { return this.state.journal[day] || null; },
    setJournal(day, entry) {
      const empty = !entry || Object.values(entry).every(v => v === '' || v == null || v === 0);
      if (empty) delete this.state.journal[day]; else this.state.journal[day] = entry;
      return this.save();
    },

    set(key, value) { this.state.settings[key] = value; this.save(); },

    exportJSON() {
      return JSON.stringify({ app: 'EntryX', exportedAt: new Date().toISOString(), ...this.state }, null, 2);
    },

    importJSON(text) {
      const data = JSON.parse(text);
      if (!data || !Array.isArray(data.trades)) throw new Error('invalid');
      const d = defaults();
      this.state = {
        version: 1,
        trades: data.trades.filter(t => t && typeof t === 'object').map(t => Object.assign({ id: uid() }, t)),
        journal: data.journal && typeof data.journal === 'object' ? data.journal : {},
        settings: Object.assign(d.settings, data.settings || {}, { demo: false, seeded: true })
      };
      this.save();
    },

    clearAll() {
      const keep = this.state.settings;
      this.state = defaults();
      Object.assign(this.state.settings, { lang: keep.lang, theme: keep.theme, name: keep.name, currency: keep.currency, balance: keep.balance, setups: keep.setups, seeded: true, demo: false });
      this.save();
    },

    /* Realistic demo data with a genuine edge per setup, so analytics tell a story */
    seedDemo(lang) {
      let s = 20260929;
      const rnd = () => { s |= 0; s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
      const pick = (arr, w) => {
        if (!w) return arr[Math.floor(rnd() * arr.length)];
        let x = rnd() * w.reduce((a, b) => a + b, 0);
        for (let i = 0; i < arr.length; i++) { x -= w[i]; if (x <= 0) return arr[i]; }
        return arr[arr.length - 1];
      };
      const range = (a, b) => a + rnd() * (b - a);

      const symbols = [
        { s: 'BTCUSDT', m: 'crypto', p: 64000, dp: 1, qd: 3, w: 5 },
        { s: 'ETHUSDT', m: 'crypto', p: 3200, dp: 2, qd: 2, w: 4 },
        { s: 'SOLUSDT', m: 'crypto', p: 150, dp: 2, qd: 1, w: 2 },
        { s: 'XAUUSD', m: 'futures', p: 2450, dp: 2, qd: 1, w: 4 },
        { s: 'EURUSD', m: 'forex', p: 1.09, dp: 5, qd: -3, w: 3 },
        { s: 'NAS100', m: 'futures', p: 19800, dp: 1, qd: 1, w: 3 },
        { s: 'TSLA', m: 'stocks', p: 240, dp: 2, qd: 0, w: 2 },
        { s: 'NVDA', m: 'stocks', p: 120, dp: 2, qd: 0, w: 2 }
      ];
      const setups = { Breakout: 0.61, Pullback: 0.58, Trend: 0.55, Reversal: 0.42, Range: 0.5, News: 0.38 };
      const setupW = [5, 5, 3, 3, 2, 1];
      const emotions = ['calm', 'confident', 'fomo', 'fear', 'greed', 'revenge', 'bored'];
      const emotionW = [8, 5, 2, 2, 1, 1, 1];
      const emotionAdj = { calm: 0.05, confident: 0.03, fomo: -0.18, fear: -0.06, greed: -0.12, revenge: -0.25, bored: -0.1 };
      const mistakesPool = ['early_exit', 'late_entry', 'moved_stop', 'oversize', 'no_plan', 'chased'];

      const notes = lang === 'en' ? [
        'Clean setup, waited for the retest before entering.',
        'Entered on the 5m close above range high, volume confirmed.',
        'Stopped out before the move — stop was too tight for the volatility.',
        'Followed the plan. Partial at 1R, rest trailed.',
        'Chased the candle. Need to wait for my level.',
        'News spike, spread widened. Should have sat out.',
        'Great patience today — best trade of the week.',
        'Took profit too early out of fear, left 2R on the table.'
      ] : [
        'Таза сетап, кірер алдында ретестті күттім.',
        '5m свеча диапазоннан жоғары жабылғанда кірдім, көлем растады.',
        'Қозғалыс алдында стоп алып кетті — волатильдікке стоп тым жақын болды.',
        'Жоспар бойынша. 1R-да жартысын жаптым, қалғанын трейлинг.',
        'Свечаның артынан қудым. Өз деңгейімді күтуім керек.',
        'Жаңалық шыңы, спред кеңейді. Сауда жасамауым керек еді.',
        'Бүгін керемет шыдамдылық — аптаның ең жақсы мәмілесі.',
        'Қорқыныштан пайданы ерте алдым, 2R қалып қойды.'
      ];

      const riskUsd = 100;
      const trades = [];
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const days = 150;
      let price = {};
      symbols.forEach(x => { price[x.s] = x.p; });
      const warm = (i) => (i / days); // later trades slightly better: trader improving

      for (let d = days; d >= 1; d--) {
        const date = new Date(today); date.setDate(today.getDate() - d);
        const wd = date.getDay();
        const crypto = wd === 0 || wd === 6;
        if (crypto && rnd() < 0.7) continue;
        const n = pick([0, 1, 2, 3, 4], [2, 4, 4, 2, 1]);
        for (let k = 0; k < n; k++) {
          const sym = crypto ? pick(symbols.slice(0, 3)) : pick(symbols, symbols.map(x => x.w));
          price[sym.s] *= 1 + (rnd() - 0.48) * 0.02;
          const setup = pick(Object.keys(setups), setupW);
          const emotion = pick(emotions, emotionW);
          const side = rnd() < 0.58 ? 'long' : 'short';
          const dir = side === 'long' ? 1 : -1;
          const entry = +price[sym.s].toFixed(sym.dp);
          const stopDist = entry * range(0.003, 0.012);
          const stop = +(entry - dir * stopDist).toFixed(sym.dp);
          const plannedR = pick([1.5, 2, 2.5, 3], [2, 4, 2, 1]);
          const target = +(entry + dir * stopDist * plannedR).toFixed(sym.dp);
          const qtyRaw = riskUsd * range(0.8, 1.25) / Math.abs(entry - stop);
          const qd = sym.qd;
          const qty = qd >= 0 ? +qtyRaw.toFixed(qd) || +(1 / Math.pow(10, qd)).toFixed(qd) : Math.max(1000, Math.round(qtyRaw / 1000) * 1000);

          const hour = pick([8, 9, 10, 11, 13, 14, 15, 16, 17, 19], [1, 3, 4, 3, 2, 3, 4, 3, 2, 1]);
          const opened = new Date(date); opened.setHours(hour, Math.floor(rnd() * 60));
          const hold = Math.round(range(6, 240));
          const closed = new Date(opened.getTime() + hold * 60000);

          const p = setups[setup] + emotionAdj[emotion] + warm(days - d) * 0.06 + (hour >= 9 && hour <= 11 ? 0.04 : 0) + (hour >= 19 ? -0.1 : 0);
          const roll = rnd();
          let rMult;
          if (roll < 0.05) rMult = range(-0.05, 0.05);
          else if (roll < 0.05 + p) rMult = rnd() < 0.7 ? range(0.6, plannedR) : range(plannedR, plannedR + 1.5);
          else rMult = -range(0.55, 1.08) * (emotion === 'revenge' || emotion === 'greed' ? 1.35 : 1);
          const exit = +(entry + dir * Math.abs(entry - stop) * rMult).toFixed(sym.dp);
          const fees = +(Math.abs(entry * qty) * 0.0004).toFixed(2);

          const mistakes = [];
          if (emotion === 'fomo') mistakes.push('chased');
          if (emotion === 'revenge') mistakes.push('no_plan', 'oversize');
          if (emotion === 'fear' && rMult > 0 && rMult < plannedR) mistakes.push('early_exit');
          if (emotion === 'greed' && rMult < 0) mistakes.push('moved_stop');
          if (rnd() < 0.06) mistakes.push(pick(mistakesPool));

          const rating = Math.max(1, Math.min(5, Math.round(3.4 + emotionAdj[emotion] * 8 + (mistakes.length ? -0.8 : 0.4) + (rnd() - 0.5))));
          trades.push({
            id: uid() + trades.length,
            symbol: sym.s, market: sym.m, side, setup,
            openedAt: toLocalInput(opened), closedAt: toLocalInput(closed),
            entry, exit, qty, stop, target, fees, mult: 1,
            emotion, rating, mistakes: [...new Set(mistakes)],
            tags: rnd() < 0.3 ? [pick(['A+', 'london', 'ny-open', 'htf-level', 'scalp'])] : [],
            notes: rnd() < 0.45 ? pick(notes) : '',
            createdAt: opened.toISOString(), updatedAt: closed.toISOString()
          });
        }
      }

      // One open position to show live state
      const open = new Date(); open.setHours(Math.max(0, open.getHours() - 2), 12);
      trades.push({
        id: uid() + 'open', symbol: 'BTCUSDT', market: 'crypto', side: 'long', setup: 'Pullback',
        openedAt: toLocalInput(open), closedAt: '', entry: +price.BTCUSDT.toFixed(1), exit: '', qty: 0.15,
        stop: +(price.BTCUSDT * 0.992).toFixed(1), target: +(price.BTCUSDT * 1.018).toFixed(1), fees: 3.8, mult: 1,
        emotion: 'calm', rating: 4, mistakes: [], tags: ['htf-level'], notes: '', createdAt: open.toISOString()
      });

      const journal = {};
      const plans = lang === 'en'
        ? ['Only A+ setups at HTF levels. Max 3 trades. Stop after 2 losses.', 'CPI at 15:30 — no trades 30 min before and after.', 'Bias: long above VWAP. Focus on NAS100 and BTC.']
        : ['Тек HTF деңгейлердегі A+ сетаптар. Макс 3 мәміле. 2 шығыннан кейін тоқтау.', 'CPI 15:30-да — 30 минут бұрын және кейін сауда жоқ.', 'Бағыт: VWAP-тан жоғары long. NAS100 мен BTC-ке фокус.'];
      const reviews = lang === 'en'
        ? ['Executed the plan well. Patience paid off.', 'Overtraded after the first loss — need a hard daily stop.', 'Good risk management, one sloppy entry.']
        : ['Жоспарды жақсы орындадым. Шыдамдылық ақталды.', 'Бірінші шығыннан кейін овертрейд — күндік қатаң стоп керек.', 'Тәуекел басқару жақсы, бір салақ кіру.'];
      const lessons = lang === 'en'
        ? ['Wait for the candle close.', 'Size down on Fridays.', 'The best trades feel boring.']
        : ['Свеча жабылуын күт.', 'Жұмада көлемді азайт.', 'Ең жақсы мәмілелер жалықтырады.'];
      const daysWithTrades = [...new Set(trades.map(t => t.openedAt.slice(0, 10)))];
      daysWithTrades.forEach(dk => {
        if (rnd() < 0.35) journal[dk] = { plan: pick(plans), review: pick(reviews), lessons: pick(lessons), mood: 2 + Math.floor(rnd() * 4), focus: 2 + Math.floor(rnd() * 4) };
      });

      this.state.trades = trades;
      this.state.journal = journal;
      this.state.settings.demo = true;
      this.state.settings.seeded = true;
      this.state.settings.balance = 10000;
      this.save();
    }
  };

  /* Switch to the journal of a signed-in account (null = shared local journal).
     The first account to sign in on this browser inherits the pre-account journal. */
  Store.setUser = function (userId) {
    const next = userId ? BASE + ':' + userId : BASE;
    if (next === KEY) return;
    let prefs = {};
    try {
      const legacy = localStorage.getItem(BASE);
      if (legacy) { const s = (JSON.parse(legacy) || {}).settings || {}; prefs = { lang: s.lang, theme: s.theme, langChosen: s.langChosen }; }
      if (userId && !localStorage.getItem(next) && legacy && !localStorage.getItem(BASE + ':claimed')) {
        localStorage.setItem(next, legacy);
        localStorage.setItem(BASE + ':claimed', userId);
      }
    } catch (e) { /* storage blocked */ }
    KEY = next;
    this.state = defaults();
    Object.keys(prefs).forEach(k => { if (prefs[k] != null) this.state.settings[k] = prefs[k]; });
    this.load();
  };
  Store.key = () => KEY;

  Store.utils = { uid, num, dayKey, toLocalInput, pad, calc };
  window.Store = Store;
})();
