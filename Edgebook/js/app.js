/* Edgebook — application */
(function () {
  'use strict';

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const t = (k, v) => I18N.t(k, v);
  const U = Store.utils;

  const ICONS = {
    dashboard: '<rect x="3" y="3" width="7.5" height="9" rx="1.8"/><rect x="13.5" y="3" width="7.5" height="5" rx="1.8"/><rect x="13.5" y="11" width="7.5" height="10" rx="1.8"/><rect x="3" y="15" width="7.5" height="6" rx="1.8"/>',
    trades: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    calendar: '<rect x="3" y="4.5" width="18" height="16.5" rx="2.5"/><path d="M16 2.5v4M8 2.5v4M3 10h18"/>',
    analytics: '<path d="M4 20V11M10 20V5M16 20v-6M21 20H3"/>',
    journal: '<path d="M5 4.5A1.5 1.5 0 016.5 3H19v15H6.5A1.5 1.5 0 005 19.5z"/><path d="M5 19.5A1.5 1.5 0 006.5 21H19v-3"/><path d="M9 7.5h6M9 11h4"/>',
    settings: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    x: '<path d="M18 6L6 18M6 6l12 12"/>',
    chevL: '<path d="M15 18l-6-6 6-6"/>',
    chevR: '<path d="M9 18l6-6-6-6"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    upload: '<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-8 9"/>',
    star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.8z"/>',
    flame: '<path d="M12 21c-4 0-7-2.7-7-6.5 0-3 2-5 3.5-6.5.3 2 1.3 3 2.5 3.5C11 8 12 5 14.5 3c.3 3 4.5 5.5 4.5 11 0 4-3 7-7 7z"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    bolt: '<path d="M13 3L5 13.5h6L10 21l8-10.5h-6z"/>',
    shield: '<path d="M12 3l7.5 3v5.5c0 4.5-3.2 8.3-7.5 9.5-4.3-1.2-7.5-5-7.5-9.5V6z"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    arrowUp: '<path d="M7 17L17 7M9 7h8v8"/>',
    arrowDown: '<path d="M7 7l10 10M17 9v8H9"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
    logout: '<path d="M15 4h3a2 2 0 012 2v12a2 2 0 01-2 2h-3"/><path d="M10 17l-5-5 5-5M5 12h11"/>',
    keyboard: '<rect x="2.5" y="6" width="19" height="12" rx="2.5"/><path d="M6.5 10h.01M10 10h.01M13.5 10h.01M17 10h.01M7.5 14h9"/>'
  };
  const MAC = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || '');
  const MOD = MAC ? '⌘' : 'Ctrl ';
  const icon = (n, c) => '<svg class="ic ' + (c || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + '</svg>';

  const ROUTES = ['dashboard', 'trades', 'calendar', 'analytics', 'journal', 'settings'];
  const EMOTIONS = ['calm', 'confident', 'fomo', 'fear', 'greed', 'revenge', 'bored'];
  const MISTAKES = ['early_exit', 'late_entry', 'moved_stop', 'oversize', 'no_plan', 'chased'];
  const MARKETS = ['crypto', 'forex', 'stocks', 'futures', 'options', 'other'];
  const CURRENCIES = ['USD', 'EUR', 'KZT', 'RUB', 'USDT', 'GBP'];

  const ui = {
    route: 'dashboard',
    range: '90',
    calMonth: null,
    journalDay: null,
    tq: { q: '', side: 'all', status: 'all', setup: 'all', sort: 'when', dir: -1, page: 1 },
    charts: []
  };

  /* ---------- formatting ---------- */
  const S = () => Store.state.settings;

  function money(v, o) {
    o = o || {};
    if (v == null || !isFinite(v)) return '—';
    const cur = S().currency;
    const abs = Math.abs(v);
    let body;
    if (o.compact && abs >= 1000) {
      body = abs >= 1e6 ? (abs / 1e6).toFixed(abs >= 1e7 ? 1 : 2) + 'M' : (abs / 1000).toFixed(abs >= 1e5 ? 0 : 1) + 'k';
    } else {
      body = abs.toLocaleString('en-US', { minimumFractionDigits: o.int ? 0 : 2, maximumFractionDigits: o.int ? 0 : 2 });
    }
    const sym = { USD: '$', EUR: '€', GBP: '£', KZT: '₸', RUB: '₽' }[cur];
    const str = sym ? (cur === 'KZT' || cur === 'RUB' ? body + ' ' + sym : sym + body) : body + ' ' + cur;
    const sign = v < 0 ? '−' : (o.sign && v > 0 ? '+' : '');
    return sign + str;
  }
  const pct = (v, d) => v == null || !isFinite(v) ? '—' : (v * 100).toFixed(d == null ? 1 : d) + '%';
  const rfmt = (v, sign) => v == null || !isFinite(v) ? '—' : (v < 0 ? '−' : (sign && v > 0 ? '+' : '')) + Math.abs(v).toFixed(2) + 'R';
  const numfmt = (v, d) => v == null || !isFinite(v) ? '—' : (+v).toLocaleString('en-US', { maximumFractionDigits: d == null ? 6 : d });
  const cls = v => v == null ? '' : v > 0 ? 'pos' : v < 0 ? 'neg' : '';

  function dateLabel(d, o) {
    const x = d instanceof Date ? d : new Date(d);
    const m = I18N.months()[x.getMonth()];
    if (o === 'short') return x.getDate() + ' ' + m.slice(0, 3);
    if (o === 'full') return x.getDate() + ' ' + m + ' ' + x.getFullYear();
    if (o === 'time') return U.pad(x.getHours()) + ':' + U.pad(x.getMinutes());
    return x.getDate() + ' ' + m.slice(0, 3) + ', ' + U.pad(x.getHours()) + ':' + U.pad(x.getMinutes());
  }
  function holdLabel(min) {
    if (min == null) return '—';
    if (min < 60) return Math.round(min) + t('u_min');
    if (min < 1440) return Math.floor(min / 60) + t('u_h') + ' ' + Math.round(min % 60) + t('u_min');
    return (min / 1440).toFixed(1) + t('u_d');
  }

  /* ---------- analytics core ---------- */
  function inRange(list, range) {
    if (range === 'all') return list;
    const now = new Date();
    let from;
    if (range === 'ytd') from = new Date(now.getFullYear(), 0, 1);
    else { from = new Date(now); from.setHours(0, 0, 0, 0); from.setDate(from.getDate() - (+range - 1)); }
    return list.filter(x => x.when >= from);
  }

  function sum(a, f) { return a.reduce((s, x) => s + (f ? f(x) : x), 0); }

  function stats(list) {
    const closed = list.filter(x => x.closed).slice().sort((a, b) => a.when - b.when);
    const wins = closed.filter(x => x.status === 'win');
    const losses = closed.filter(x => x.status === 'loss');
    const bes = closed.filter(x => x.status === 'be');
    const gw = sum(wins, x => x.net), gl = Math.abs(sum(losses, x => x.net));
    const net = sum(closed, x => x.net);
    const rs = closed.filter(x => x.r != null).map(x => x.r);
    let maxW = 0, maxL = 0, cw = 0, cl = 0;
    closed.forEach(x => {
      if (x.status === 'win') { cw++; cl = 0; } else if (x.status === 'loss') { cl++; cw = 0; } else { cw = 0; cl = 0; }
      maxW = Math.max(maxW, cw); maxL = Math.max(maxL, cl);
    });
    const days = {};
    closed.forEach(x => { days[x.day] = (days[x.day] || 0) + x.net; });
    const dayVals = Object.values(days);
    const holds = closed.filter(x => x.holdMin != null).map(x => x.holdMin);
    const decided = wins.length + losses.length;
    return {
      count: list.length, closed: closed.length, open: list.length - closed.length,
      wins: wins.length, losses: losses.length, be: bes.length,
      net, gross: sum(closed, x => x.gross), fees: sum(closed, x => x.feesN || 0),
      winRate: decided ? wins.length / decided : null,
      pf: gl ? gw / gl : (gw > 0 ? Infinity : null),
      avgWin: wins.length ? gw / wins.length : null,
      avgLoss: losses.length ? -gl / losses.length : null,
      expectancy: closed.length ? net / closed.length : null,
      avgR: rs.length ? sum(rs) / rs.length : null,
      totalR: rs.length ? sum(rs) : null,
      best: closed.length ? closed.reduce((a, b) => (b.net > a.net ? b : a)) : null,
      worst: closed.length ? closed.reduce((a, b) => (b.net < a.net ? b : a)) : null,
      maxWinStreak: maxW, maxLossStreak: maxL,
      streak: cw ? { n: cw, type: 'win' } : cl ? { n: cl, type: 'loss' } : { n: 0, type: '' },
      tradingDays: dayVals.length, greenDays: dayVals.filter(v => v > 0).length,
      bestDay: dayVals.length ? Math.max(...dayVals) : null, worstDay: dayVals.length ? Math.min(...dayVals) : null,
      avgHold: holds.length ? sum(holds) / holds.length : null,
      closedList: closed
    };
  }

  /* Equity series over ALL closed trades, then sliced to range (keeps true account balance) */
  function equitySeries(range) {
    const all = Store.all().filter(x => x.closed).slice().sort((a, b) => a.when - b.when);
    const inR = new Set(inRange(all, range).map(x => x.id));
    let eq = +S().balance || 0;
    let start = null;
    const pts = [];
    all.forEach(x => {
      if (inR.has(x.id)) {
        if (start == null) { start = eq; pts.push({ y: eq, date: new Date(x.when.getTime() - 1), trade: null }); }
        eq += x.net;
        pts.push({ y: eq, date: x.when, trade: x });
      } else eq += x.net;
    });
    let peak = -Infinity, maxDD = 0, maxDDPct = 0;
    pts.forEach(p => {
      peak = Math.max(peak, p.y);
      const dd = peak - p.y;
      if (dd > maxDD) { maxDD = dd; maxDDPct = peak ? dd / peak : 0; }
    });
    return { pts, start: start == null ? eq : start, end: eq, maxDD, maxDDPct, current: pts.length ? peak - pts[pts.length - 1].y : 0 };
  }

  function groupBy(list, keyFn) {
    const m = new Map();
    list.forEach(x => {
      const keys = [].concat(keyFn(x)).filter(k => k != null && k !== '');
      keys.forEach(k => { if (!m.has(k)) m.set(k, []); m.get(k).push(x); });
    });
    return m;
  }

  /* ---------- shell ---------- */
  function renderSidebar() {
    const st = stats(Store.all());
    const eq = (+S().balance || 0) + st.net;
    const nav = ROUTES.map((r, i) =>
      '<a href="#/' + r + '" class="nav-item' + (ui.route === r ? ' active' : '') + '" data-route="' + r + '">' + icon(r) +
      '<span>' + t('nav_' + r) + '</span><kbd>' + (i + 1) + '</kbd></a>').join('');
    $('#sidebar').innerHTML =
      '<a class="brand" href="index.html" title="' + t('home') + '"><span class="brand-mark">' + icon('trades') + '</span><span class="brand-name">Edgebook<em>' + t('brand_sub') + (Cloud.isPro ? ' <b class="pro-badge">PRO</b>' : '') + '</em></span></a>' +
      '<nav class="nav" aria-label="Main">' + nav + '</nav>' +
      '<div class="side-card">' +
      '<div class="side-card-label">' + t('equity') + (Cloud.isPro ? '<span class="sync-dot s-' + Cloud.status + '" title="' + t('sync_' + Cloud.status) + '"></span>' : '') + '</div>' +
      '<div class="side-card-value mono">' + money(eq) + '</div>' +
      '<div class="side-card-sub ' + cls(st.net) + '">' + icon(st.net >= 0 ? 'arrowUp' : 'arrowDown') + money(st.net, { sign: true }) +
      ' <span>· ' + pct(S().balance ? st.net / S().balance : null) + '</span></div>' +
      '<div class="side-card-spark">' + Charts.spark(equitySeries('all').pts.map(p => p.y), 200, 38) + '</div>' +
      '</div>' +
      (Cloud.user ? '<div class="side-user"><span class="avatar">' + esc((Cloud.user.email || '?').charAt(0).toUpperCase()) + '</span><div class="side-user-info"><b>' + esc(Cloud.user.email || '') + '</b><small>' + (Cloud.isPro ? 'Pro' : 'Free') + '</small></div>' +
        '<button class="icon-btn sm" data-action="sign-out" title="' + t('sign_out') + '" aria-label="' + t('sign_out') + '">' + icon('logout') + '</button></div>' : '') +
      '<div class="side-foot"><button class="kbd-hint" data-action="shortcuts">' + icon('keyboard') + t('shortcuts') + '</button></div>';
  }

  function renderTopbar() {
    const showRange = ['dashboard', 'trades', 'analytics'].includes(ui.route);
    const ranges = [['7', '7D'], ['30', '30D'], ['90', '90D'], ['ytd', 'YTD'], ['all', t('range_all')]];
    const s = S();
    $('#topbar').innerHTML =
      '<div class="tb-title"><h1>' + t('title_' + ui.route) + '</h1><p>' + t('sub_' + ui.route) + '</p></div>' +
      '<div class="tb-actions">' +
      '<button class="cmdk-btn" data-action="palette" aria-label="' + t('search_btn') + '">' + icon('search') + '<span>' + t('search_short') + '</span><kbd>' + MOD + 'K</kbd></button>' +
      (showRange ? '<div class="seg range" role="tablist">' + ranges.map(r => '<button class="' + (ui.range === r[0] ? 'on' : '') + '" data-range="' + r[0] + '">' + r[1] + '</button>').join('') + '</div>' : '') +
      '<div class="seg seg-sm lang">' + ['kk', 'en'].map(l => '<button class="' + (s.lang === l ? 'on' : '') + '" data-lang="' + l + '">' + l.toUpperCase() + '</button>').join('') + '</div>' +
      '<button class="icon-btn" data-action="theme" title="' + t('theme') + '">' + icon(s.theme === 'dark' ? 'sun' : 'moon') + '</button>' +
      '<button class="btn btn-primary" data-action="new-trade">' + icon('plus') + '<span>' + t('new_trade') + '</span><kbd>N</kbd></button>' +
      '</div>';
  }

  function renderBanner() {
    const b = $('#demoBanner');
    if (S().demo) {
      b.hidden = false;
      b.innerHTML = icon('sparkle') + '<span>' + t('demo_banner') + '</span><button class="btn btn-ghost btn-sm" data-action="clear-demo">' + t('demo_clear') + '</button>';
    } else b.hidden = true;
  }

  function render() {
    document.documentElement.lang = S().lang;
    document.documentElement.dataset.theme = S().theme;
    renderSidebar();
    renderTopbar();
    renderBanner();
    const v = $('#view');
    v.className = 'view view-' + ui.route;
    VIEWS[ui.route](v);
    v.classList.remove('enter'); void v.offsetWidth; v.classList.add('enter');
  }

  function drawCharts() { ui.charts.forEach(fn => fn()); }

  /* ---------- widgets ---------- */
  function kpi(o) {
    return '<div class="kpi' + (o.hero ? ' kpi-hero' : '') + '">' +
      '<div class="kpi-head"><span class="kpi-ic">' + icon(o.icon) + '</span><span class="kpi-label">' + o.label + '</span>' + (o.help ? '<span class="help" data-tip="' + esc(o.help) + '">?</span>' : '') + '</div>' +
      '<div class="kpi-value mono ' + (o.cls || '') + '">' + o.value + '</div>' +
      (o.sub ? '<div class="kpi-sub">' + o.sub + '</div>' : '') +
      (o.extra || '') + '</div>';
  }

  function sideBadge(side) { return '<span class="badge side-' + side + '">' + (side === 'short' ? 'SHORT' : 'LONG') + '</span>'; }
  function statusBadge(st) { return '<span class="badge st-' + st + '">' + t('st_' + st) + '</span>'; }

  function tradeRows(list, compact) {
    return list.map(x =>
      '<tr data-trade="' + x.id + '">' +
      '<td><div class="sym"><span class="sym-dot mk-' + esc(x.market || 'other') + '"></span><div><b>' + esc(x.symbol) + '</b><small>' + dateLabel(x.openedAt || x.when) + '</small></div></div></td>' +
      '<td>' + sideBadge(x.side) + '</td>' +
      (compact ? '' : '<td class="muted hide-sm">' + esc(x.setup || '—') + '</td>') +
      (compact ? '' : '<td class="mono hide-sm">' + numfmt(x.entryN) + '</td><td class="mono hide-sm">' + numfmt(x.exitN) + '</td>') +
      (compact ? '' : '<td class="mono muted hide-sm">' + numfmt(x.qtyN) + '</td>') +
      '<td class="mono ' + cls(x.r) + '">' + rfmt(x.r, true) + '</td>' +
      '<td class="mono num ' + cls(x.net) + '">' + (x.closed ? money(x.net, { sign: true }) : statusBadge('open')) + '</td>' +
      '</tr>').join('');
  }

  function emptyState(title, text, actions) {
    return '<div class="empty"><div class="empty-art">' + icon('trades') + '</div><h3>' + title + '</h3><p>' + text + '</p><div class="empty-actions">' + (actions || '') + '</div></div>';
  }

  /* ---------- views ---------- */
  const VIEWS = {};

  VIEWS.dashboard = function (v) {
    ui.charts = [];
    const all = Store.all();
    if (!all.length) {
      v.innerHTML = emptyState(t('empty_title'), t('empty_text'),
        '<button class="btn btn-primary" data-action="new-trade">' + icon('plus') + t('new_trade') + '</button>' +
        '<button class="btn btn-ghost" data-action="seed">' + icon('sparkle') + t('load_demo') + '</button>');
      return;
    }
    const list = inRange(all, ui.range);
    const st = stats(list);
    const eq = equitySeries(ui.range);
    const bal = +S().balance || 1;
    const hour = new Date().getHours();
    const greet = t(hour < 5 ? 'greet_night' : hour < 12 ? 'greet_morning' : hour < 18 ? 'greet_day' : 'greet_evening');
    const name = S().name ? ', ' + esc(S().name) : '';

    const daily = {};
    st.closedList.forEach(x => { daily[x.day] = (daily[x.day] || 0) + x.net; });
    const dailyKeys = Object.keys(daily).sort().slice(-40);

    const bySetup = [...groupBy(st.closedList, x => x.setup || '—')].map(([k, a]) => {
      const s2 = stats(a);
      return { label: esc(k), value: s2.net, sub: a.length + ' · ' + pct(s2.winRate, 0) };
    }).sort((a, b) => b.value - a.value);

    const pfTxt = st.pf === Infinity ? '∞' : st.pf == null ? '—' : st.pf.toFixed(2);
    const winDonut = Charts.donut([{ value: st.wins, cls: 'up' }, { value: st.be, cls: 'neu' }, { value: st.losses, cls: 'down' }], 52, 6);
    const open = all.filter(x => !x.closed);

    v.innerHTML =
      '<div class="hello"><div><div class="eyebrow">' + dateLabel(new Date(), 'full') + '</div><h2 class="display">' + greet + name + '</h2></div>' +
      '<div class="hello-meta">' +
      '<div class="pill ' + (st.streak.type === 'win' ? 'pos' : st.streak.type === 'loss' ? 'neg' : '') + '">' + icon('flame') + t('streak') + ': <b>' + st.streak.n + ' ' + (st.streak.type ? t('st_' + st.streak.type).toLowerCase() : '') + '</b></div>' +
      '<div class="pill">' + icon('target') + t('trades_n', { n: st.closed }) + '</div>' +
      (open.length ? '<div class="pill accent">' + icon('bolt') + t('open_n', { n: open.length }) + '</div>' : '') +
      '</div></div>' +

      '<div class="grid kpis">' +
      kpi({ hero: true, icon: 'trades', label: t('net_pnl'), value: money(st.net, { sign: true }), cls: cls(st.net),
        sub: '<span class="' + cls(st.net) + '">' + pct(st.net / bal, 2) + '</span> ' + t('of_account') + ' · ' + t('fees') + ' ' + money(-st.fees),
        extra: '<div class="kpi-spark">' + Charts.spark(eq.pts.map(p => p.y), 400, 90) + '</div>' }) +
      kpi({ icon: 'target', label: t('win_rate'), value: pct(st.winRate), sub: '<span class="pos">' + st.wins + 'W</span> · <span class="muted">' + st.be + 'BE</span> · <span class="neg">' + st.losses + 'L</span>',
        extra: '<div class="kpi-donut">' + winDonut + '</div>' }) +
      kpi({ icon: 'bolt', label: t('profit_factor'), value: pfTxt, cls: st.pf != null && st.pf >= 1 ? 'pos' : st.pf != null ? 'neg' : '', sub: t('pf_sub'), help: t('pf_help'),
        extra: '<div class="meter"><span style="width:' + Math.min(100, (st.pf === Infinity ? 3 : st.pf || 0) / 3 * 100) + '%"></span><i style="left:33.3%"></i></div>' }) +
      kpi({ icon: 'sparkle', label: t('expectancy'), value: money(st.expectancy, { sign: true }), cls: cls(st.expectancy), sub: t('per_trade'), help: t('exp_help') }) +
      kpi({ icon: 'star', label: t('total_r'), value: rfmt(st.totalR, true), cls: cls(st.totalR), sub: t('avg_r') + ' <b class="' + cls(st.avgR) + '">' + rfmt(st.avgR, true) + '</b>', help: t('r_help') }) +
      kpi({ icon: 'arrowUp', label: t('avg_win_loss'), value: '<span class="pos">' + money(st.avgWin, { compact: true }) + '</span><span class="sep">/</span><span class="neg">' + money(st.avgLoss, { compact: true }) + '</span>',
        sub: t('ratio') + ' <b>' + (st.avgWin && st.avgLoss ? (st.avgWin / Math.abs(st.avgLoss)).toFixed(2) : '—') + '</b>' }) +
      kpi({ icon: 'shield', label: t('max_dd'), value: money(-eq.maxDD), cls: eq.maxDD ? 'neg' : '', sub: pct(-eq.maxDDPct, 2) + ' · ' + t('current') + ' ' + money(-eq.current, { compact: true }), help: t('dd_help') }) +
      '</div>' +

      '<div class="grid g-main">' +
      '<div class="card span-2"><div class="card-head"><div><h3>' + t('equity_curve') + '</h3><p>' + money(eq.start) + ' → <b class="' + cls(eq.end - eq.start) + '">' + money(eq.end) + '</b></p></div>' +
      '<div class="legend"><span><i class="lg-line"></i>' + t('equity') + '</span><span><i class="lg-dash"></i>' + t('start') + '</span></div></div>' +
      '<div class="chart" id="chEquity"></div></div>' +

      '<div class="card"><div class="card-head"><div><h3>' + t('performance') + '</h3><p>' + t('perf_sub') + '</p></div></div>' +
      '<ul class="stat-list">' +
      li(t('best_trade'), st.best ? '<span class="pos mono">' + money(st.best.net, { sign: true }) + '</span> <small>' + esc(st.best.symbol) + '</small>' : '—') +
      li(t('worst_trade'), st.worst ? '<span class="neg mono">' + money(st.worst.net, { sign: true }) + '</span> <small>' + esc(st.worst.symbol) + '</small>' : '—') +
      li(t('best_day'), '<span class="pos mono">' + money(st.bestDay, { sign: true }) + '</span>') +
      li(t('worst_day'), '<span class="neg mono">' + money(st.worstDay, { sign: true }) + '</span>') +
      li(t('green_days'), '<span class="mono">' + st.greenDays + ' / ' + st.tradingDays + '</span> <small>' + pct(st.tradingDays ? st.greenDays / st.tradingDays : null, 0) + '</small>') +
      li(t('max_streaks'), '<span class="pos mono">' + st.maxWinStreak + 'W</span> · <span class="neg mono">' + st.maxLossStreak + 'L</span>') +
      li(t('avg_hold'), '<span class="mono">' + holdLabel(st.avgHold) + '</span>') +
      '</ul></div>' +
      '</div>' +

      '<div class="grid g-2">' +
      '<div class="card"><div class="card-head"><div><h3>' + t('daily_pnl') + '</h3><p>' + t('daily_sub') + '</p></div></div><div class="chart" id="chDaily"></div></div>' +
      '<div class="card"><div class="card-head"><div><h3>' + t('by_setup') + '</h3><p>' + t('by_setup_sub') + '</p></div></div><div id="chSetup"></div></div>' +
      '</div>' +

      '<div class="card"><div class="card-head"><div><h3>' + t('recent_trades') + '</h3></div><a class="link" href="#/trades">' + t('view_all') + ' ' + icon('chevR') + '</a></div>' +
      '<div class="table-wrap"><table class="table"><thead><tr><th>' + t('col_symbol') + '</th><th>' + t('col_side') + '</th><th class="hide-sm">' + t('col_setup') + '</th><th class="hide-sm">' + t('col_entry') + '</th><th class="hide-sm">' + t('col_exit') + '</th><th class="hide-sm">' + t('col_qty') + '</th><th>R</th><th class="num">' + t('col_pnl') + '</th></tr></thead>' +
      '<tbody>' + tradeRows(all.slice(0, 7)) + '</tbody></table></div></div>';

    function li(a, b) { return '<li><span>' + a + '</span><span>' + b + '</span></li>'; }

    ui.charts.push(() => Charts.line($('#chEquity'), eq.pts, {
      height: 300, base: eq.start, empty: t('no_data'),
      fmt: v => money(v, { compact: true, int: true }),
      label: p => dateLabel(p.date, 'short'),
      tip: (p, i) => '<b class="mono">' + money(p.y) + '</b><span>' + dateLabel(p.date) + '</span>' +
        (p.trade ? '<span>' + esc(p.trade.symbol) + ' <em class="' + cls(p.trade.net) + '">' + money(p.trade.net, { sign: true }) + '</em></span>' : '')
    }));
    ui.charts.push(() => Charts.columns($('#chDaily'), dailyKeys.map(k => ({ label: +k.slice(8), value: daily[k], day: k })), {
      height: 240, empty: t('no_data'), fmt: v => money(v, { compact: true, int: true }),
      tip: it => '<b class="mono ' + cls(it.value) + '">' + money(it.value, { sign: true }) + '</b><span>' + dateLabel(new Date(it.day + 'T12:00'), 'full') + '</span>'
    }));
    ui.charts.push(() => Charts.hbars($('#chSetup'), bySetup, { fmt: v => money(v, { sign: true, compact: true }), empty: t('no_data') }));
    drawCharts();
    countUp(v);
  };

  VIEWS.trades = function (v) {
    ui.charts = [];
    const q = ui.tq;
    const all = inRange(Store.all(), ui.range);
    const setups = [...new Set(Store.all().map(x => x.setup).filter(Boolean))].sort();
    let list = all.filter(x => {
      if (q.side !== 'all' && x.side !== q.side) return false;
      if (q.status !== 'all' && x.status !== q.status) return false;
      if (q.setup !== 'all' && x.setup !== q.setup) return false;
      if (q.q) {
        const hay = [x.symbol, x.setup, x.notes, (x.tags || []).join(' '), x.market].join(' ').toLowerCase();
        if (!hay.includes(q.q.toLowerCase())) return false;
      }
      return true;
    });
    const key = { when: x => x.when, symbol: x => x.symbol, net: x => x.net == null ? -Infinity : x.net, r: x => x.r == null ? -Infinity : x.r, setup: x => x.setup || '' }[q.sort] || (x => x.when);
    list.sort((a, b) => { const A = key(a), B = key(b); return (A > B ? 1 : A < B ? -1 : 0) * q.dir; });
    const st = stats(list);
    const per = 25, pages = Math.max(1, Math.ceil(list.length / per));
    q.page = Math.min(q.page, pages);
    const pageList = list.slice((q.page - 1) * per, q.page * per);
    const th = (k, label, extra) => '<th class="sortable ' + (extra || '') + (q.sort === k ? ' sorted ' + (q.dir > 0 ? 'asc' : 'desc') : '') + '" data-sort="' + k + '">' + label + '</th>';
    const opt = (val, cur, label) => '<option value="' + esc(val) + '"' + (val === cur ? ' selected' : '') + '>' + esc(label) + '</option>';

    v.innerHTML =
      '<div class="toolbar">' +
      '<label class="search">' + icon('search') + '<input id="tq" type="search" placeholder="' + t('search_ph') + '" value="' + esc(q.q) + '"/><kbd>/</kbd></label>' +
      '<select class="select" data-filter="side">' + opt('all', q.side, t('all_sides')) + opt('long', q.side, 'Long') + opt('short', q.side, 'Short') + '</select>' +
      '<select class="select" data-filter="status">' + opt('all', q.status, t('all_status')) + ['win', 'loss', 'be', 'open'].map(s => opt(s, q.status, t('st_' + s))).join('') + '</select>' +
      '<select class="select" data-filter="setup">' + opt('all', q.setup, t('all_setups')) + setups.map(s => opt(s, q.setup, s)).join('') + '</select>' +
      '<div class="spacer"></div>' +
      '<button class="btn btn-ghost" data-action="import">' + icon('upload') + t('import') + (Cloud.enabled && !Cloud.isPro ? ' <b class="pro-badge">PRO</b>' : '') + '</button>' +
      '<button class="btn btn-ghost" data-action="export-csv">' + icon('download') + 'CSV</button>' +
      '</div>' +
      '<div class="summary-strip">' +
      strip(t('trades'), st.count) + strip(t('win_rate'), pct(st.winRate)) + strip(t('net_pnl'), '<span class="' + cls(st.net) + '">' + money(st.net, { sign: true }) + '</span>') +
      strip(t('profit_factor'), st.pf === Infinity ? '∞' : st.pf == null ? '—' : st.pf.toFixed(2)) + strip('Σ R', '<span class="' + cls(st.totalR) + '">' + rfmt(st.totalR, true) + '</span>') +
      '</div>' +
      (list.length ?
        '<div class="card flush"><div class="table-wrap"><table class="table table-lg"><thead><tr>' +
        th('symbol', t('col_symbol')) + '<th>' + t('col_side') + '</th>' + th('setup', t('col_setup'), 'hide-sm') + '<th class="hide-sm">' + t('col_entry') + '</th><th class="hide-sm">' + t('col_exit') + '</th><th class="hide-sm">' + t('col_qty') + '</th>' +
        th('r', 'R') + th('net', t('col_pnl'), 'num') + '</tr></thead><tbody>' + tradeRows(pageList) + '</tbody></table></div>' +
        (pages > 1 ? '<div class="pager"><button class="icon-btn" data-page="' + (q.page - 1) + '"' + (q.page <= 1 ? ' disabled' : '') + '>' + icon('chevL') + '</button><span>' + q.page + ' / ' + pages + '</span><button class="icon-btn" data-page="' + (q.page + 1) + '"' + (q.page >= pages ? ' disabled' : '') + '>' + icon('chevR') + '</button></div>' : '') +
        '</div>'
        : emptyState(t('no_trades_found'), t('no_trades_hint'), '<button class="btn btn-primary" data-action="new-trade">' + icon('plus') + t('new_trade') + '</button>'));

    function strip(a, b) { return '<div><span>' + a + '</span><b class="mono">' + b + '</b></div>'; }
  };

  VIEWS.calendar = function (v) {
    ui.charts = [];
    const now = new Date();
    if (!ui.calMonth) ui.calMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const m = ui.calMonth;
    const y = m.getFullYear(), mo = m.getMonth();
    const first = new Date(y, mo, 1);
    const startOffset = (first.getDay() + 6) % 7; // Monday-first
    const daysIn = new Date(y, mo + 1, 0).getDate();
    const monthTrades = Store.all().filter(x => x.when.getFullYear() === y && x.when.getMonth() === mo);
    const byDay = groupBy(monthTrades, x => x.day);
    const st = stats(monthTrades);
    const maxAbs = Math.max(1, ...[...byDay.values()].map(a => Math.abs(sum(a.filter(x => x.closed), x => x.net))));
    const today = U.dayKey(now);

    let cells = '';
    const weeks = Math.ceil((startOffset + daysIn) / 7);
    for (let w = 0; w < weeks; w++) {
      let wkNet = 0, wkN = 0;
      for (let d = 0; d < 7; d++) {
        const dayNum = w * 7 + d - startOffset + 1;
        if (dayNum < 1 || dayNum > daysIn) { cells += '<div class="cal-cell out"></div>'; continue; }
        const key = y + '-' + U.pad(mo + 1) + '-' + U.pad(dayNum);
        const list = byDay.get(key) || [];
        const closed = list.filter(x => x.closed);
        const net = sum(closed, x => x.net);
        wkNet += net; wkN += list.length;
        const intensity = closed.length ? 0.1 + 0.55 * Math.abs(net) / maxAbs : 0;
        const tone = !closed.length ? '' : net > 0 ? 'up' : net < 0 ? 'down' : 'flat';
        const hasNote = !!Store.journalFor(key);
        cells += '<button class="cal-cell ' + tone + (key === today ? ' today' : '') + (list.length ? ' has' : '') + '" data-day="' + key + '" style="--i:' + intensity.toFixed(3) + '">' +
          '<span class="cal-num">' + dayNum + (hasNote ? '<i class="note-dot" title="' + t('has_note') + '"></i>' : '') + '</span>' +
          (list.length ? '<span class="cal-pnl mono">' + (closed.length ? money(net, { sign: true, compact: true, int: true }) : '') + '</span><span class="cal-n">' + t('trades_n', { n: list.length }) + '</span>' : '') +
          '</button>';
      }
      cells += '<div class="cal-week"><span>' + t('week') + ' ' + (w + 1) + '</span><b class="mono ' + cls(wkNet) + '">' + (wkN ? money(wkNet, { sign: true, compact: true }) : '—') + '</b><small>' + (wkN ? t('trades_n', { n: wkN }) : '') + '</small></div>';
    }

    v.innerHTML =
      '<div class="cal-head">' +
      '<div class="cal-nav"><button class="icon-btn" data-cal="-1">' + icon('chevL') + '</button><h2 class="display">' + I18N.months()[mo] + ' <span>' + y + '</span></h2><button class="icon-btn" data-cal="1">' + icon('chevR') + '</button>' +
      '<button class="btn btn-ghost btn-sm" data-cal="0">' + t('today') + '</button></div>' +
      '<div class="summary-strip inline">' +
      '<div><span>' + t('net_pnl') + '</span><b class="mono ' + cls(st.net) + '">' + money(st.net, { sign: true }) + '</b></div>' +
      '<div><span>' + t('win_rate') + '</span><b class="mono">' + pct(st.winRate) + '</b></div>' +
      '<div><span>' + t('green_days') + '</span><b class="mono">' + st.greenDays + '/' + st.tradingDays + '</b></div>' +
      '<div><span>' + t('trades') + '</span><b class="mono">' + st.count + '</b></div>' +
      '</div></div>' +
      '<div class="card cal-card"><div class="cal-grid">' +
      I18N.weekdaysMon().map(d => '<div class="cal-dow">' + d + '</div>').join('') + '<div class="cal-dow">' + t('week') + '</div>' +
      cells + '</div></div>';
  };

  VIEWS.analytics = function (v) {
    ui.charts = [];
    const list = inRange(Store.all(), ui.range);
    const st = stats(list);
    const closed = st.closedList;
    if (!closed.length) { v.innerHTML = emptyState(t('no_data'), t('analytics_empty'), '<button class="btn btn-primary" data-action="new-trade">' + icon('plus') + t('new_trade') + '</button>'); return; }

    const wdOrder = [1, 2, 3, 4, 5, 6, 0];
    const wdNames = I18N.weekdaysMon();
    const byWd = groupBy(closed, x => x.weekday);
    const wdItems = wdOrder.map((d, i) => { const a = byWd.get(d) || []; return { label: wdNames[i], value: sum(a, x => x.net), count: a.length, wr: stats(a).winRate }; });

    const byHour = groupBy(closed.filter(x => x.hour != null), x => x.hour);
    const hours = [...byHour.keys()].sort((a, b) => a - b);
    const hMin = hours.length ? hours[0] : 8, hMax = hours.length ? hours[hours.length - 1] : 20;
    const hourItems = [];
    for (let h = hMin; h <= hMax; h++) { const a = byHour.get(h) || []; hourItems.push({ label: U.pad(h), value: sum(a, x => x.net), count: a.length, wr: stats(a).winRate }); }

    const bins = [[-Infinity, -1.5, '<−1.5'], [-1.5, -1, '−1.5'], [-1, -0.5, '−1'], [-0.5, 0, '−0.5'], [0, 0.5, '0'], [0.5, 1, '0.5'], [1, 1.5, '1'], [1.5, 2, '1.5'], [2, 3, '2'], [3, Infinity, '3+']];
    const rs = closed.filter(x => x.r != null);
    const rItems = bins.map(b => { const c = rs.filter(x => x.r >= b[0] && x.r < b[1]).length; return { label: b[2], value: b[1] <= 0 ? -c : c, count: c, raw: b }; });

    const longs = stats(closed.filter(x => x.side === 'long')), shorts = stats(closed.filter(x => x.side === 'short'));

    const table = (map, labelFn) => [...map].map(([k, a]) => ({ k, s: stats(a) })).sort((a, b) => b.s.net - a.s.net).map(({ k, s }) =>
      '<tr><td><b>' + (labelFn ? labelFn(k) : esc(k)) + '</b></td><td class="mono">' + s.closed + '</td><td class="mono">' + pct(s.winRate, 0) + '</td>' +
      '<td class="mono">' + (s.pf === Infinity ? '∞' : s.pf == null ? '—' : s.pf.toFixed(2)) + '</td><td class="mono ' + cls(s.avgR) + '">' + rfmt(s.avgR, true) + '</td>' +
      '<td class="mono num ' + cls(s.net) + '">' + money(s.net, { sign: true }) + '</td></tr>').join('');
    const thead = first => '<thead><tr><th>' + first + '</th><th>' + t('trades') + '</th><th>' + t('win_rate') + '</th><th>PF</th><th>' + t('avg_r') + '</th><th class="num">' + t('col_pnl') + '</th></tr></thead>';

    const bySym = groupBy(closed, x => x.symbol);
    const symItems = [...bySym].map(([k, a]) => ({ label: esc(k), value: sum(a, x => x.net), sub: a.length + ' · ' + pct(stats(a).winRate, 0) })).sort((a, b) => b.value - a.value).slice(0, 10);

    const mistakeMap = groupBy(closed, x => x.mistakes || []);
    const mistakeItems = [...mistakeMap].map(([k, a]) => ({ label: t('mk_' + k), value: sum(a, x => x.net), sub: t('times_n', { n: a.length }) })).sort((a, b) => a.value - b.value);
    const mistakeCost = sum(mistakeItems.filter(x => x.value < 0), x => x.value);

    const ratingMap = groupBy(closed.filter(x => x.rating), x => x.rating);
    const ratingItems = [1, 2, 3, 4, 5].map(r => { const a = ratingMap.get(r) || []; return { label: '★'.repeat(r), value: a.length ? sum(a, x => x.net) / a.length : 0, count: a.length }; });

    // Insights
    const best = arr => arr.filter(x => x.count >= 3).sort((a, b) => b.value - a.value)[0];
    const worst = arr => arr.filter(x => x.count >= 3).sort((a, b) => a.value - b.value)[0];
    const setupRank = [...groupBy(closed, x => x.setup || '—')].map(([k, a]) => ({ k, s: stats(a) })).filter(x => x.s.closed >= 5).sort((a, b) => (b.s.avgR || 0) - (a.s.avgR || 0));
    const emoRank = [...groupBy(closed, x => x.emotion)].map(([k, a]) => ({ k, s: stats(a) })).filter(x => x.s.closed >= 3).sort((a, b) => a.s.net - b.s.net);
    const insights = [];
    const bw = best(wdItems), ww = worst(wdItems), bh = best(hourItems);
    if (setupRank.length) insights.push({ tone: 'pos', ic: 'target', text: t('ins_best_setup', { s: esc(setupRank[0].k), r: rfmt(setupRank[0].s.avgR, true), w: pct(setupRank[0].s.winRate, 0) }) });
    if (setupRank.length > 1 && (setupRank[setupRank.length - 1].s.avgR || 0) < 0) { const s = setupRank[setupRank.length - 1]; insights.push({ tone: 'neg', ic: 'shield', text: t('ins_worst_setup', { s: esc(s.k), r: rfmt(s.s.avgR, true) }) }); }
    if (bw) insights.push({ tone: 'pos', ic: 'calendar', text: t('ins_best_day', { d: bw.label, v: money(bw.value, { sign: true }) }) });
    if (ww && ww.value < 0) insights.push({ tone: 'neg', ic: 'calendar', text: t('ins_worst_day', { d: ww.label, v: money(ww.value, { sign: true }) }) });
    if (bh) insights.push({ tone: 'pos', ic: 'clock', text: t('ins_best_hour', { h: bh.label + ':00', v: money(bh.value, { sign: true }) }) });
    if (emoRank.length && emoRank[0].s.net < 0) insights.push({ tone: 'neg', ic: 'flame', text: t('ins_emotion', { e: t('em_' + emoRank[0].k), v: money(emoRank[0].s.net, { sign: true }) }) });
    if (mistakeCost < 0) insights.push({ tone: 'neg', ic: 'bolt', text: t('ins_mistakes', { v: money(mistakeCost) }) });

    v.innerHTML =
      '<div class="insights">' + insights.slice(0, 6).map(i => '<div class="insight ' + i.tone + '">' + icon(i.ic) + '<p>' + i.text + '</p></div>').join('') + '</div>' +

      '<div class="grid g-2">' +
      '<div class="card"><div class="card-head"><div><h3>' + t('by_weekday') + '</h3><p>' + t('net_pnl') + '</p></div></div><div class="chart" id="chWd"></div></div>' +
      '<div class="card"><div class="card-head"><div><h3>' + t('by_hour') + '</h3><p>' + t('by_hour_sub') + '</p></div></div><div class="chart" id="chHour"></div></div>' +
      '</div>' +

      '<div class="grid g-2">' +
      '<div class="card"><div class="card-head"><div><h3>' + t('r_dist') + '</h3><p>' + t('r_dist_sub') + '</p></div></div><div class="chart" id="chR"></div></div>' +
      '<div class="card"><div class="card-head"><div><h3>' + t('long_short') + '</h3><p>' + t('long_short_sub') + '</p></div></div>' +
      '<div class="ls">' + lsCol('LONG', 'long', longs) + lsCol('SHORT', 'short', shorts) + '</div></div>' +
      '</div>' +

      '<div class="grid g-2">' +
      '<div class="card"><div class="card-head"><div><h3>' + t('by_symbol') + '</h3><p>' + t('top_10') + '</p></div></div><div id="chSym"></div></div>' +
      '<div class="card"><div class="card-head"><div><h3>' + t('mistakes_cost') + '</h3><p>' + t('mistakes_sub') + '</p></div><b class="mono neg big">' + money(mistakeCost) + '</b></div><div id="chMk"></div></div>' +
      '</div>' +

      '<div class="grid g-2">' +
      '<div class="card flush"><div class="card-head pad"><div><h3>' + t('by_setup') + '</h3></div></div><div class="table-wrap"><table class="table">' + thead(t('col_setup')) + '<tbody>' + table(groupBy(closed, x => x.setup || '—')) + '</tbody></table></div></div>' +
      '<div class="card flush"><div class="card-head pad"><div><h3>' + t('by_emotion') + '</h3></div></div><div class="table-wrap"><table class="table">' + thead(t('emotion')) + '<tbody>' + table(groupBy(closed, x => x.emotion), k => t('em_' + k)) + '</tbody></table></div></div>' +
      '</div>' +

      '<div class="card"><div class="card-head"><div><h3>' + t('by_rating') + '</h3><p>' + t('by_rating_sub') + '</p></div></div><div class="chart" id="chRating"></div></div>';

    function lsCol(title, side, s) {
      return '<div class="ls-col"><div class="ls-head">' + sideBadge(side) + '<b class="mono ' + cls(s.net) + '">' + money(s.net, { sign: true }) + '</b></div>' +
        '<ul class="stat-list">' +
        '<li><span>' + t('trades') + '</span><span class="mono">' + s.closed + '</span></li>' +
        '<li><span>' + t('win_rate') + '</span><span class="mono">' + pct(s.winRate) + '</span></li>' +
        '<li><span>' + t('profit_factor') + '</span><span class="mono">' + (s.pf === Infinity ? '∞' : s.pf == null ? '—' : s.pf.toFixed(2)) + '</span></li>' +
        '<li><span>' + t('avg_r') + '</span><span class="mono ' + cls(s.avgR) + '">' + rfmt(s.avgR, true) + '</span></li>' +
        '<li><span>' + t('expectancy') + '</span><span class="mono ' + cls(s.expectancy) + '">' + money(s.expectancy, { sign: true }) + '</span></li>' +
        '</ul></div>';
    }

    const tipGroup = it => '<b class="mono ' + cls(it.value) + '">' + money(it.value, { sign: true }) + '</b><span>' + it.label + ' · ' + t('trades_n', { n: it.count }) + (it.wr != null ? ' · ' + pct(it.wr, 0) : '') + '</span>';
    const fm = v => money(v, { compact: true, int: true });
    ui.charts.push(() => Charts.columns($('#chWd'), wdItems, { height: 230, fmt: fm, tip: tipGroup, labelEvery: 1 }));
    ui.charts.push(() => Charts.columns($('#chHour'), hourItems, { height: 230, fmt: fm, tip: it => tipGroup(Object.assign({}, it, { label: it.label + ':00' })) }));
    ui.charts.push(() => Charts.columns($('#chR'), rItems, { height: 230, fmt: v => Math.abs(v), labelEvery: 1, tip: it => '<b class="mono">' + it.count + '</b><span>R ∈ [' + (isFinite(it.raw[0]) ? it.raw[0] : '−∞') + ', ' + (isFinite(it.raw[1]) ? it.raw[1] : '∞') + ')</span>' }));
    ui.charts.push(() => Charts.hbars($('#chSym'), symItems, { fmt: v => money(v, { sign: true, compact: true }) }));
    ui.charts.push(() => Charts.hbars($('#chMk'), mistakeItems, { fmt: v => money(v, { sign: true, compact: true }), empty: t('no_mistakes') }));
    ui.charts.push(() => Charts.columns($('#chRating'), ratingItems, { height: 200, fmt: fm, labelEvery: 1, tip: it => '<b class="mono ' + cls(it.value) + '">' + money(it.value, { sign: true }) + '</b><span>' + t('avg_per_trade') + ' · ' + t('trades_n', { n: it.count }) + '</span>' }));
    drawCharts();
  };

  VIEWS.journal = function (v) {
    ui.charts = [];
    const all = Store.all();
    const today = U.dayKey(new Date());
    if (!ui.journalDay) ui.journalDay = today;
    const day = ui.journalDay;
    const days = new Set([today, day, ...Object.keys(Store.state.journal), ...all.map(x => x.day)]);
    const sorted = [...days].sort().reverse().slice(0, 90);
    const byDay = groupBy(all, x => x.day);
    const j = Store.journalFor(day) || {};
    const dayTrades = byDay.get(day) || [];
    const ds = stats(dayTrades);

    const scale = (name, val) => '<div class="scale" data-scale="' + name + '">' + [1, 2, 3, 4, 5].map(n => '<button type="button" class="' + (val >= n ? 'on' : '') + '" data-val="' + n + '" aria-label="' + n + '"></button>').join('') + '</div>';

    v.innerHTML =
      '<div class="journal">' +
      '<aside class="j-list card flush"><div class="j-list-head"><input type="date" class="input" id="jDate" value="' + day + '"/></div><div class="j-items">' +
      sorted.map(k => {
        const a = byDay.get(k) || [];
        const closed = a.filter(x => x.closed);
        const net = sum(closed, x => x.net);
        const has = !!Store.journalFor(k);
        return '<button class="j-item' + (k === day ? ' active' : '') + '" data-jday="' + k + '"><div><b>' + dateLabel(new Date(k + 'T12:00'), 'full') + '</b><small>' +
          (a.length ? t('trades_n', { n: a.length }) : t('no_trades_day')) + (has ? ' · ' + t('has_note') : '') + '</small></div>' +
          (closed.length ? '<span class="mono ' + cls(net) + '">' + money(net, { sign: true, compact: true }) + '</span>' : '') + '</button>';
      }).join('') + '</div></aside>' +

      '<div class="j-main">' +
      '<div class="card"><div class="card-head"><div><div class="eyebrow">' + I18N.weekdaysLong()[new Date(day + 'T12:00').getDay()] + '</div><h2 class="display">' + dateLabel(new Date(day + 'T12:00'), 'full') + '</h2></div>' +
      '<div class="j-day-stats"><div><span>' + t('net_pnl') + '</span><b class="mono ' + cls(ds.net) + '">' + (ds.closed ? money(ds.net, { sign: true }) : '—') + '</b></div><div><span>' + t('trades') + '</span><b class="mono">' + ds.count + '</b></div><div><span>' + t('win_rate') + '</span><b class="mono">' + pct(ds.winRate, 0) + '</b></div></div></div>' +
      '<form class="j-form" id="jForm">' +
      '<div class="j-scales"><label>' + t('mood') + scale('mood', j.mood || 0) + '</label><label>' + t('focus') + scale('focus', j.focus || 0) + '</label><span class="saved" id="jSaved">' + t('saved') + '</span></div>' +
      '<label class="field"><span>' + t('premarket_plan') + '</span><textarea name="plan" rows="4" placeholder="' + t('plan_ph') + '">' + esc(j.plan) + '</textarea></label>' +
      '<label class="field"><span>' + t('review') + '</span><textarea name="review" rows="4" placeholder="' + t('review_ph') + '">' + esc(j.review) + '</textarea></label>' +
      '<label class="field"><span>' + t('lessons') + '</span><textarea name="lessons" rows="3" placeholder="' + t('lessons_ph') + '">' + esc(j.lessons) + '</textarea></label>' +
      '</form></div>' +
      '<div class="card"><div class="card-head"><div><h3>' + t('day_trades') + '</h3></div><button class="btn btn-ghost btn-sm" data-action="new-trade" data-day="' + day + '">' + icon('plus') + t('add') + '</button></div>' +
      (dayTrades.length ? '<div class="table-wrap"><table class="table"><tbody>' + tradeRows(dayTrades, true) + '</tbody></table></div>' : '<p class="muted small">' + t('no_trades_day') + '</p>') +
      '</div></div></div>';

    const form = $('#jForm');
    let timer;
    const saveJ = () => {
      const fd = new FormData(form);
      const cur = Store.journalFor(day) || {};
      Store.setJournal(day, { plan: fd.get('plan').trim(), review: fd.get('review').trim(), lessons: fd.get('lessons').trim(), mood: cur.mood || 0, focus: cur.focus || 0 });
      const s = $('#jSaved'); s.classList.add('show'); clearTimeout(s._t); s._t = setTimeout(() => s.classList.remove('show'), 1400);
      const item = $('.j-item.active small');
      if (item) { const has = !!Store.journalFor(day); const base = dayTrades.length ? t('trades_n', { n: dayTrades.length }) : t('no_trades_day'); item.textContent = base + (has ? ' · ' + t('has_note') : ''); }
    };
    form.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(saveJ, 500); });
    $$('.scale', form).forEach(sc => sc.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      const cur = Object.assign({ plan: '', review: '', lessons: '', mood: 0, focus: 0 }, Store.journalFor(day) || {});
      const val = +b.dataset.val;
      cur[sc.dataset.scale] = cur[sc.dataset.scale] === val ? 0 : val;
      Store.setJournal(day, cur);
      $$('button', sc).forEach(x => x.classList.toggle('on', +x.dataset.val <= cur[sc.dataset.scale]));
      saveJ();
    }));
  };

  VIEWS.settings = function (v) {
    ui.charts = [];
    const s = S();
    let bytes = 0;
    try { bytes = new Blob([localStorage.getItem('edgebook:v1') || '']).size; } catch (e) { bytes = new Blob([JSON.stringify(Store.state)]).size; }
    v.innerHTML = accountCard() +
      '<div class="grid g-2 settings">' +
      '<div class="card"><div class="card-head"><div><h3>' + t('profile') + '</h3><p>' + t('profile_sub') + '</p></div></div>' +
      '<form id="setForm" class="form-grid">' +
      '<label class="field"><span>' + t('your_name') + '</span><input class="input" name="name" value="' + esc(s.name) + '" placeholder="Trader"/></label>' +
      '<label class="field"><span>' + t('start_balance') + '</span><input class="input mono" name="balance" type="number" step="any" value="' + esc(s.balance) + '"/></label>' +
      '<label class="field"><span>' + t('currency') + '</span><select class="select" name="currency">' + CURRENCIES.map(c => '<option' + (c === s.currency ? ' selected' : '') + '>' + c + '</option>').join('') + '</select></label>' +
      '<label class="field"><span>' + t('language') + '</span><select class="select" name="lang"><option value="kk"' + (s.lang === 'kk' ? ' selected' : '') + '>Қазақша</option><option value="en"' + (s.lang === 'en' ? ' selected' : '') + '>English</option></select></label>' +
      '<label class="field full"><span>' + t('setups_list') + '</span><input class="input" name="setups" value="' + esc((s.setups || []).join(', ')) + '"/><small>' + t('setups_hint') + '</small></label>' +
      '<div class="full"><button class="btn btn-primary" type="submit">' + t('save') + '</button></div>' +
      '</form></div>' +

      '<div class="card"><div class="card-head"><div><h3>' + t('data') + '</h3><p>' + t('data_sub', { n: Store.state.trades.length, kb: (bytes / 1024).toFixed(0) }) + '</p></div></div>' +
      '<div class="data-actions">' +
      dataBtn('download', t('export_json'), t('export_json_sub'), 'export-json') +
      dataBtn('upload', t('import'), t('imp_formats'), 'import') +
      dataBtn('upload', t('import_json'), t('import_json_sub'), 'import-json') +
      dataBtn('download', t('export_csv'), t('export_csv_sub'), 'export-csv') +
      dataBtn('sparkle', t('load_demo'), t('load_demo_sub'), 'seed') +
      dataBtn('trash', t('clear_all'), t('clear_all_sub'), 'clear-all', 'danger') +
      '</div><input type="file" id="importFile" accept="application/json,.json" hidden/></div>' +
      '</div>' +
      '<p class="privacy">' + icon('shield') + t('privacy') + '</p>';

    function dataBtn(ic, title, sub, action, extra) {
      return '<button class="data-btn ' + (extra || '') + '" data-action="' + action + '">' + icon(ic) + '<div><b>' + title + '</b><small>' + sub + '</small></div>' + icon('chevR', 'chev') + '</button>';
    }

    bindAccount();
    $('#setForm').addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.target);
      s.name = fd.get('name').trim().slice(0, 40);
      const b = U.num(fd.get('balance'));
      s.balance = b != null && b >= 0 ? b : s.balance;
      s.currency = fd.get('currency');
      if (s.lang !== fd.get('lang')) s.langChosen = true;
      s.lang = fd.get('lang');
      s.setups = fd.get('setups').split(',').map(x => x.trim()).filter(Boolean).slice(0, 30);
      Store.save();
      toast(t('saved'), 'ok');
      render();
    });
    $('#importFile').addEventListener('change', e => {
      const f = e.target.files[0]; if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        try { Store.importJSON(r.result); toast(t('import_ok', { n: Store.state.trades.length }), 'ok'); render(); }
        catch (err) { toast(t('import_err'), 'err'); }
      };
      r.readAsText(f);
    });
  };

  /* ---------- modal ---------- */
  let lastFocus = null, closeTimer = null;
  function openModal(html, size) {
    clearTimeout(closeTimer);
    if ($('#modal').hidden) lastFocus = document.activeElement;
    const m = $('#modal'), p = $('#modalPanel');
    p.className = 'modal-panel ' + (size || '');
    p.innerHTML = html;
    m.hidden = false;
    requestAnimationFrame(() => m.classList.add('open'));
    document.body.classList.add('no-scroll');
    const f = p.querySelector('[autofocus]') || p.querySelector('input, button');
    if (f) setTimeout(() => f.focus(), 60);
  }
  function closeModal() {
    const m = $('#modal');
    if (m.hidden) return;
    m.classList.remove('open');
    document.body.classList.remove('no-scroll');
    closeTimer = setTimeout(() => { m.hidden = true; $('#modalPanel').innerHTML = ''; }, 180);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function confirmBox(title, text, okLabel, onOk) {
    openModal('<div class="confirm"><div class="confirm-ic">' + icon('trash') + '</div><h3>' + title + '</h3><p>' + text + '</p>' +
      '<div class="modal-foot"><button class="btn btn-ghost" data-close>' + t('cancel') + '</button><button class="btn btn-danger" id="confirmOk">' + okLabel + '</button></div></div>', 'sm');
    $('#confirmOk').addEventListener('click', () => { closeModal(); onOk(); });
  }

  function tradeForm(id, presetDay, prefill) {
    const raw = id ? Store.raw(id) : null;
    const now = new Date();
    let openedDefault = U.toLocalInput(now);
    if (presetDay && presetDay !== U.dayKey(now)) openedDefault = presetDay + 'T10:00';
    const tr = Object.assign({ side: 'long', market: 'crypto', openedAt: openedDefault, closedAt: '', mult: 1, fees: '', emotion: 'calm', rating: 0, mistakes: [], tags: [] }, raw || prefill || {});
    const setups = [...new Set([...(S().setups || []), ...Store.all().map(x => x.setup).filter(Boolean)])];
    const symbols = [...new Set(Store.all().map(x => x.symbol))].slice(0, 40);
    const f = (name, label, type, extra) => '<label class="field"><span>' + label + '</span><input class="input' + (type === 'number' ? ' mono' : '') + '" name="' + name + '" type="' + (type || 'text') + '"' + (type === 'number' ? ' step="any" inputmode="decimal"' : '') + ' value="' + esc(tr[name]) + '"' + (extra || '') + '/></label>';

    openModal(
      '<form id="tradeForm" class="trade-form" novalidate>' +
      '<div class="modal-head"><div><div class="eyebrow">' + (raw ? t('edit_trade') : t('new_trade')) + '</div><h2 class="display">' + (raw ? esc(raw.symbol) : t('log_trade')) + '</h2></div><button type="button" class="icon-btn" data-close aria-label="close">' + icon('x') + '</button></div>' +
      '<div class="modal-body tf-body">' +
      '<div class="tf-main">' +
      '<div class="tf-row">' +
      '<label class="field grow"><span>' + t('col_symbol') + '</span><input class="input sym-input" name="symbol" list="symList" required autocomplete="off" value="' + esc(tr.symbol) + '" placeholder="BTCUSDT" autofocus/></label>' +
      '<datalist id="symList">' + symbols.map(s => '<option value="' + esc(s) + '">').join('') + '</datalist>' +
      '<div class="field"><span>' + t('col_side') + '</span><div class="seg side-seg"><button type="button" data-side="long" class="' + (tr.side === 'long' ? 'on' : '') + '">Long</button><button type="button" data-side="short" class="' + (tr.side === 'short' ? 'on' : '') + '">Short</button></div><input type="hidden" name="side" value="' + tr.side + '"/></div>' +
      '</div>' +
      '<div class="tf-grid">' +
      '<label class="field"><span>' + t('market') + '</span><select class="select" name="market">' + MARKETS.map(m => '<option value="' + m + '"' + (m === tr.market ? ' selected' : '') + '>' + t('mkt_' + m) + '</option>').join('') + '</select></label>' +
      '<label class="field"><span>' + t('col_setup') + '</span><input class="input" name="setup" list="setupList" value="' + esc(tr.setup) + '" placeholder="Breakout"/></label>' +
      '<datalist id="setupList">' + setups.map(s => '<option value="' + esc(s) + '">').join('') + '</datalist>' +
      f('openedAt', t('opened'), 'datetime-local') + f('closedAt', t('closed'), 'datetime-local') +
      f('entry', t('col_entry'), 'number', ' required') + f('exit', t('col_exit'), 'number', ' placeholder="' + t('open_hint') + '"') +
      f('qty', t('col_qty'), 'number', ' required') + f('stop', t('stop'), 'number') +
      f('target', t('target'), 'number') + f('fees', t('fees'), 'number', ' placeholder="0"') +
      f('mult', t('multiplier'), 'number') +
      '<label class="field"><span>' + t('tags') + '</span><input class="input" name="tags" value="' + esc((tr.tags || []).join(', ')) + '" placeholder="A+, london"/></label>' +
      '</div>' +
      '<div class="field"><span>' + t('emotion') + '</span><div class="chips" data-chips="emotion">' + EMOTIONS.map(e => '<button type="button" class="chip' + (tr.emotion === e ? ' on' : '') + '" data-val="' + e + '">' + t('em_' + e) + '</button>').join('') + '</div></div>' +
      '<div class="field"><span>' + t('mistakes') + '</span><div class="chips multi" data-chips="mistakes">' + MISTAKES.map(e => '<button type="button" class="chip warn' + ((tr.mistakes || []).includes(e) ? ' on' : '') + '" data-val="' + e + '">' + t('mk_' + e) + '</button>').join('') + '</div></div>' +
      '<div class="field"><span>' + t('execution') + '</span><div class="stars" data-rating="' + (tr.rating || 0) + '">' + [1, 2, 3, 4, 5].map(n => '<button type="button" data-val="' + n + '" class="' + ((tr.rating || 0) >= n ? 'on' : '') + '" aria-label="' + n + '">' + icon('star') + '</button>').join('') + '</div></div>' +
      '<label class="field"><span>' + t('notes') + '</span><textarea name="notes" rows="3" placeholder="' + t('notes_ph') + '">' + esc(tr.notes) + '</textarea></label>' +
      '<div class="field"><span>' + t('screenshot') + '</span><div class="shot" id="shot">' + (tr.image ? '<img src="' + esc(tr.image) + '" alt=""/><button type="button" class="icon-btn shot-rm" data-action="rm-shot">' + icon('x') + '</button>' : '<label class="shot-drop">' + icon('image') + '<span>' + t('shot_hint') + '</span><input type="file" accept="image/*" id="shotFile" hidden/></label>') + '</div></div>' +
      '</div>' +
      '<aside class="tf-preview" id="tfPreview"></aside>' +
      '</div>' +
      '<div class="modal-foot">' + (raw ? '<button type="button" class="btn btn-ghost danger-text" data-action="delete-trade" data-id="' + raw.id + '">' + icon('trash') + t('delete') + '</button>' : '') +
      '<div class="spacer"></div><button type="button" class="btn btn-ghost" data-close>' + t('cancel') + '</button><button type="submit" class="btn btn-primary">' + (raw ? t('save') : t('add_trade')) + '<kbd>' + MOD + '↵</kbd></button></div>' +
      '</form>', 'lg');

    const form = $('#tradeForm');
    let image = tr.image || '';
    const state = { emotion: tr.emotion, mistakes: (tr.mistakes || []).slice(), rating: tr.rating || 0 };

    const collect = () => {
      const fd = new FormData(form);
      const o = {};
      ['symbol', 'side', 'market', 'setup', 'openedAt', 'closedAt', 'entry', 'exit', 'qty', 'stop', 'target', 'fees', 'mult', 'notes'].forEach(k => { o[k] = (fd.get(k) || '').trim(); });
      o.symbol = o.symbol.toUpperCase();
      ['entry', 'exit', 'qty', 'stop', 'target', 'fees', 'mult'].forEach(k => { const n = U.num(o[k]); o[k] = n == null ? '' : n; });
      o.tags = (fd.get('tags') || '').split(',').map(x => x.trim()).filter(Boolean);
      o.emotion = state.emotion; o.mistakes = state.mistakes; o.rating = state.rating; o.image = image;
      if (o.exit !== '' && !o.closedAt) o.closedAt = o.openedAt;
      return Object.assign({}, raw || {}, o);
    };

    const preview = () => {
      const c = U.calc(collect());
      const bal = +S().balance || 0;
      const riskPct = c.risk && bal ? c.risk / (bal + stats(Store.all()).net) : null;
      $('#tfPreview').innerHTML =
        '<div class="pv-label">' + t('preview') + '</div>' +
        '<div class="pv-big mono ' + cls(c.net) + '">' + (c.closed ? money(c.net, { sign: true }) : '<span class="muted">' + t('st_open') + '</span>') + '</div>' +
        '<div class="pv-r mono ' + cls(c.r) + '">' + rfmt(c.r, true) + '</div>' +
        '<ul class="stat-list">' +
        '<li><span>' + t('risk') + '</span><span class="mono">' + money(c.risk) + (riskPct ? ' <small>' + pct(riskPct, 2) + '</small>' : '') + '</span></li>' +
        '<li><span>' + t('planned_rr') + '</span><span class="mono">' + (c.plannedR ? '1 : ' + c.plannedR.toFixed(2) : '—') + '</span></li>' +
        '<li><span>' + t('gross') + '</span><span class="mono ' + cls(c.gross) + '">' + money(c.gross, { sign: true }) + '</span></li>' +
        '<li><span>' + t('fees') + '</span><span class="mono">' + money(c.feesN ? -c.feesN : 0) + '</span></li>' +
        '<li><span>' + t('position') + '</span><span class="mono">' + (c.entryN != null && c.qtyN != null ? money(c.entryN * c.qtyN * c.multN, { compact: true }) : '—') + '</span></li>' +
        '<li><span>' + t('hold') + '</span><span class="mono">' + holdLabel(c.holdMin) + '</span></li>' +
        '</ul>' +
        (riskPct && riskPct > 0.02 ? '<div class="pv-warn">' + icon('shield') + t('risk_warn', { p: pct(riskPct, 1) }) + '</div>' : '');
    };
    preview();
    form.addEventListener('input', preview);

    $('.side-seg', form).addEventListener('click', e => {
      const b = e.target.closest('[data-side]'); if (!b) return;
      form.side.value = b.dataset.side;
      $$('.side-seg button', form).forEach(x => x.classList.toggle('on', x === b));
      preview();
    });
    $$('[data-chips]', form).forEach(g => g.addEventListener('click', e => {
      const b = e.target.closest('.chip'); if (!b) return;
      if (g.classList.contains('multi')) {
        b.classList.toggle('on');
        state.mistakes = $$('.chip.on', g).map(x => x.dataset.val);
      } else {
        const on = !b.classList.contains('on');
        $$('.chip', g).forEach(x => x.classList.remove('on'));
        if (on) b.classList.add('on');
        state.emotion = on ? b.dataset.val : '';
      }
    }));
    $('.stars', form).addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      const v = +b.dataset.val;
      state.rating = state.rating === v ? 0 : v;
      $$('.stars button', form).forEach(x => x.classList.toggle('on', +x.dataset.val <= state.rating));
    });

    const bindShot = () => {
      const inp = $('#shotFile');
      if (inp) inp.addEventListener('change', e => { const file = e.target.files[0]; if (file) loadImage(file); });
      const rm = $('[data-action="rm-shot"]', form);
      if (rm) rm.addEventListener('click', () => { image = ''; $('#shot').innerHTML = '<label class="shot-drop">' + icon('image') + '<span>' + t('shot_hint') + '</span><input type="file" accept="image/*" id="shotFile" hidden/></label>'; bindShot(); });
    };
    const loadImage = file => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const scale = Math.min(1, 1400 / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * scale); c.height = Math.round(img.height * scale);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        image = c.toDataURL('image/jpeg', 0.72);
        URL.revokeObjectURL(url);
        $('#shot').innerHTML = '<img src="' + image + '" alt=""/><button type="button" class="icon-btn shot-rm" data-action="rm-shot">' + icon('x') + '</button>';
        bindShot();
      };
      img.src = url;
    };
    bindShot();
    const shot = $('#shot');
    shot.addEventListener('dragover', e => { e.preventDefault(); shot.classList.add('drag'); });
    shot.addEventListener('dragleave', () => shot.classList.remove('drag'));
    shot.addEventListener('drop', e => { e.preventDefault(); shot.classList.remove('drag'); const file = e.dataTransfer.files[0]; if (file && file.type.startsWith('image/')) loadImage(file); });
    form.addEventListener('paste', e => {
      const item = [...(e.clipboardData || {}).items || []].find(i => i.type.startsWith('image/'));
      if (item) loadImage(item.getAsFile());
    });

    form.addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { e.preventDefault(); if (form.requestSubmit) form.requestSubmit(); else form.dispatchEvent(new Event('submit', { cancelable: true })); } });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const o = collect();
      const errs = [];
      if (!o.symbol) errs.push('symbol');
      if (o.entry === '') errs.push('entry');
      if (o.qty === '' || o.qty <= 0) errs.push('qty');
      $$('.input', form).forEach(i => i.classList.toggle('invalid', errs.includes(i.name)));
      if (errs.length) { toast(t('fill_required'), 'err'); return; }
      if (o.closedAt && o.openedAt && new Date(o.closedAt) < new Date(o.openedAt)) { toast(t('bad_dates'), 'err'); return; }
      const saved = Store.upsert(o);
      if (!saved) return;
      closeModal();
      toast(raw ? t('trade_updated') : t('trade_added'), 'ok');
      render();
    });
  }

  function tradeDetail(id) {
    const x = Store.get(id);
    if (!x) return;
    const row = (a, b) => '<li><span>' + a + '</span><span>' + b + '</span></li>';
    openModal(
      '<div class="modal-head"><div><div class="eyebrow">' + sideBadge(x.side) + ' ' + statusBadge(x.status) + ' <span class="muted">' + esc(t('mkt_' + (x.market || 'other'))) + '</span></div>' +
      '<h2 class="display">' + esc(x.symbol) + '</h2></div><button class="icon-btn" data-close aria-label="close">' + icon('x') + '</button></div>' +
      '<div class="modal-body">' +
      '<div class="td-hero"><div><span>' + t('col_pnl') + '</span><b class="mono ' + cls(x.net) + '">' + (x.closed ? money(x.net, { sign: true }) : '—') + '</b></div>' +
      '<div><span>R</span><b class="mono ' + cls(x.r) + '">' + rfmt(x.r, true) + '</b></div>' +
      '<div><span>' + t('hold') + '</span><b class="mono">' + holdLabel(x.holdMin) + '</b></div>' +
      '<div><span>' + t('execution') + '</span><b class="stars-ro">' + [1, 2, 3, 4, 5].map(n => '<i class="' + ((x.rating || 0) >= n ? 'on' : '') + '">' + icon('star') + '</i>').join('') + '</b></div></div>' +
      '<div class="td-grid"><ul class="stat-list">' +
      row(t('opened'), x.openedAt ? dateLabel(x.openedAt) : '—') + row(t('closed'), x.closedAt ? dateLabel(x.closedAt) : '—') +
      row(t('col_entry'), '<span class="mono">' + numfmt(x.entryN) + '</span>') + row(t('col_exit'), '<span class="mono">' + numfmt(x.exitN) + '</span>') +
      row(t('col_qty'), '<span class="mono">' + numfmt(x.qtyN) + (x.multN !== 1 ? ' × ' + x.multN : '') + '</span>') +
      '</ul><ul class="stat-list">' +
      row(t('stop'), '<span class="mono">' + numfmt(x.stopN) + '</span>') + row(t('target'), '<span class="mono">' + numfmt(x.targetN) + '</span>') +
      row(t('risk'), '<span class="mono">' + money(x.risk) + '</span>') + row(t('planned_rr'), '<span class="mono">' + (x.plannedR ? '1 : ' + x.plannedR.toFixed(2) : '—') + '</span>') +
      row(t('fees'), '<span class="mono">' + money(x.feesN ? -x.feesN : 0) + '</span>') +
      '</ul></div>' +
      '<div class="td-tags">' +
      (x.setup ? '<span class="chip on static">' + esc(x.setup) + '</span>' : '') +
      (x.emotion ? '<span class="chip static">' + t('em_' + x.emotion) + '</span>' : '') +
      (x.mistakes || []).map(m => '<span class="chip warn on static">' + t('mk_' + m) + '</span>').join('') +
      (x.tags || []).map(tg => '<span class="chip static">#' + esc(tg) + '</span>').join('') +
      '</div>' +
      (x.notes ? '<div class="td-notes"><span class="eyebrow">' + t('notes') + '</span><p>' + esc(x.notes).replace(/\n/g, '<br>') + '</p></div>' : '') +
      (x.image ? '<a class="td-img" href="' + esc(x.image) + '" target="_blank" rel="noopener"><img src="' + esc(x.image) + '" alt=""/></a>' : '') +
      '</div>' +
      '<div class="modal-foot"><button class="btn btn-ghost danger-text" data-action="delete-trade" data-id="' + x.id + '">' + icon('trash') + t('delete') + '</button><div class="spacer"></div>' +
      '<button class="btn btn-ghost" data-action="duplicate-trade" data-id="' + x.id + '">' + t('duplicate') + '</button>' +
      '<button class="btn btn-primary" data-action="edit-trade" data-id="' + x.id + '">' + icon('edit') + t('edit') + '</button></div>', 'md');
  }

  function dayDetail(day) {
    const list = Store.all().filter(x => x.day === day);
    const st = stats(list);
    const j = Store.journalFor(day);
    openModal(
      '<div class="modal-head"><div><div class="eyebrow">' + I18N.weekdaysLong()[new Date(day + 'T12:00').getDay()] + '</div><h2 class="display">' + dateLabel(new Date(day + 'T12:00'), 'full') + '</h2></div><button class="icon-btn" data-close aria-label="close">' + icon('x') + '</button></div>' +
      '<div class="modal-body">' +
      '<div class="td-hero"><div><span>' + t('net_pnl') + '</span><b class="mono ' + cls(st.net) + '">' + (st.closed ? money(st.net, { sign: true }) : '—') + '</b></div><div><span>' + t('trades') + '</span><b class="mono">' + st.count + '</b></div><div><span>' + t('win_rate') + '</span><b class="mono">' + pct(st.winRate, 0) + '</b></div><div><span>Σ R</span><b class="mono ' + cls(st.totalR) + '">' + rfmt(st.totalR, true) + '</b></div></div>' +
      (list.length ? '<div class="table-wrap"><table class="table"><tbody>' + tradeRows(list, true) + '</tbody></table></div>' : '<p class="muted">' + t('no_trades_day') + '</p>') +
      (j && (j.plan || j.review || j.lessons) ? '<div class="td-notes">' + (j.plan ? '<span class="eyebrow">' + t('premarket_plan') + '</span><p>' + esc(j.plan) + '</p>' : '') + (j.review ? '<span class="eyebrow">' + t('review') + '</span><p>' + esc(j.review) + '</p>' : '') + (j.lessons ? '<span class="eyebrow">' + t('lessons') + '</span><p>' + esc(j.lessons) + '</p>' : '') + '</div>' : '') +
      '</div>' +
      '<div class="modal-foot"><button class="btn btn-ghost" data-action="new-trade" data-day="' + day + '">' + icon('plus') + t('add') + '</button><div class="spacer"></div><a class="btn btn-primary" href="#/journal/' + day + '" data-close>' + icon('journal') + t('open_journal') + '</a></div>', 'md');
  }

  function shortcuts() {
    const k = [[MOD + 'K', t('cmd_title')], ['N', t('new_trade')], ['1 – 6', t('sc_nav')], ['/', t('sc_search')], ['T', t('theme')], ['Esc', t('sc_close')], [MOD + '↵', t('sc_save')]];
    openModal('<div class="modal-head"><div><h2 class="display">' + t('shortcuts') + '</h2></div><button class="icon-btn" data-close>' + icon('x') + '</button></div><div class="modal-body"><ul class="stat-list kbd-list">' +
      k.map(r => '<li><span>' + r[1] + '</span><kbd>' + r[0] + '</kbd></li>').join('') + '</ul></div>', 'sm');
  }

  /* ---------- broker CSV import (Pro) ---------- */
  function proUpsell(featureKey) {
    openModal('<div class="confirm"><div class="confirm-ic gold">' + icon('sparkle') + '</div><h3>' + t('pro_feature', { f: t(featureKey) }) + '</h3><p>' + t('pro_feature_text') + '</p>' +
      '<div class="modal-foot"><button class="btn btn-ghost" data-close>' + t('cancel') + '</button><a class="btn btn-primary" href="#/settings" data-close>' + t('see_pro') + '</a></div></div>', 'sm');
  }

  function importDialog() {
    if (Cloud.enabled && !Cloud.isPro) { proUpsell('pro_f3'); return; }
    const F = Importer.FIELDS;
    let parsed = null, map = {}, invert = false, clearDemo = !!S().demo, result = null;
    openModal('<div class="modal-head"><div><div class="eyebrow">PRO</div><h2 class="display">' + t('imp_title') + '</h2></div><button class="icon-btn" data-close aria-label="close">' + icon('x') + '</button></div>' +
      '<div class="modal-body" id="impBody"></div><div class="modal-foot" id="impFoot"></div>', 'lg');
    const body = $('#impBody'), foot = $('#impFoot');

    function step1() {
      body.innerHTML = '<label class="imp-drop" id="impDrop">' + icon('upload') + '<b>' + t('imp_drop') + '</b><small>' + t('imp_formats') + '</small><input type="file" accept=".csv,.txt,text/csv" id="impFile" hidden/></label>' +
        '<div class="imp-help"><h4>' + t('imp_how') + '</h4><ul><li>' + t('imp_h_binance') + '</li><li>' + t('imp_h_bybit') + '</li><li>' + t('imp_h_mt') + '</li><li>' + t('imp_h_any') + '</li></ul></div>';
      foot.innerHTML = '<div class="spacer"></div><button class="btn btn-ghost" data-close>' + t('cancel') + '</button>';
      const drop = $('#impDrop');
      $('#impFile').addEventListener('change', e => { if (e.target.files[0]) read(e.target.files[0]); });
      drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('drag'); });
      drop.addEventListener('dragleave', () => drop.classList.remove('drag'));
      drop.addEventListener('drop', e => { e.preventDefault(); drop.classList.remove('drag'); if (e.dataTransfer.files[0]) read(e.dataTransfer.files[0]); });
    }
    function read(file) {
      const r = new FileReader();
      r.onload = () => {
        parsed = Importer.parseCSV(r.result);
        if (!parsed.headers.length || !parsed.rows.length) { toast(t('imp_empty'), 'err'); return; }
        map = Importer.guessMapping(parsed.headers);
        step2();
      };
      r.readAsText(file);
    }
    function step2() {
      result = Importer.toTrades(parsed, map, { invertSide: invert, existing: clearDemo ? [] : Store.state.trades });
      const first = parsed.rows[0] || [];
      const missing = F.filter(f => f.req && map[f.key] == null);
      const opts = sel => '<option value="">—</option>' + parsed.headers.map((h, i) => '<option value="' + i + '"' + (sel === i ? ' selected' : '') + '>' + esc(h || '#' + (i + 1)) + '</option>').join('');
      const grid = F.map(f => '<label class="imp-field' + (f.req && map[f.key] == null ? ' bad' : '') + '"><span>' + t('imp_f_' + f.key) + (f.req ? ' <i>*</i>' : '') + '</span>' +
        '<select class="select" data-map="' + f.key + '">' + opts(map[f.key]) + '</select>' +
        '<small class="mono">' + (map[f.key] != null ? esc(String(first[map[f.key]] || '').slice(0, 28)) : '') + '</small></label>').join('');
      const prev = result.trades.slice(0, 6).map(x => {
        const c = U.calc(x);
        return '<tr><td><b>' + esc(x.symbol) + '</b></td><td>' + sideBadge(x.side) + '</td><td class="muted">' + dateLabel(x.openedAt) + '</td><td class="mono">' + numfmt(x.entry) + '</td><td class="mono">' + numfmt(c.exitN) + '</td><td class="mono">' + numfmt(x.qty) + '</td><td class="mono num ' + cls(c.net) + '">' + (c.closed ? money(c.net, { sign: true }) : statusBadge('open')) + '</td></tr>';
      }).join('');
      body.innerHTML =
        '<div class="imp-summary"><div><b class="mono">' + parsed.rows.length + '</b><span>' + t('imp_rows') + '</span></div><div class="ok"><b class="mono">' + result.trades.length + '</b><span>' + t('imp_new') + '</span></div>' +
        '<div><b class="mono">' + result.duplicates + '</b><span>' + t('imp_dupes') + '</span></div><div><b class="mono">' + result.skipped + '</b><span>' + t('imp_skipped') + '</span></div></div>' +
        '<h4 class="imp-h">' + t('imp_map') + '</h4><div class="imp-grid">' + grid + '</div>' +
        '<div class="imp-opts"><label class="check"><input type="checkbox" id="impInvert"' + (invert ? ' checked' : '') + '/><span>' + t('imp_invert') + '</span></label>' +
        (S().demo ? '<label class="check"><input type="checkbox" id="impDemo"' + (clearDemo ? ' checked' : '') + '/><span>' + t('imp_clear_demo') + '</span></label>' : '') + '</div>' +
        (missing.length ? '<p class="imp-warn">' + icon('shield') + t('imp_need', { f: missing.map(f => t('imp_f_' + f.key)).join(', ') }) + '</p>' : '') +
        (prev ? '<h4 class="imp-h">' + t('imp_preview') + '</h4><div class="table-wrap"><table class="table"><tbody>' + prev + '</tbody></table></div>' : '');
      foot.innerHTML = '<button class="btn btn-ghost" id="impBack">' + icon('chevL') + t('imp_back') + '</button><div class="spacer"></div>' +
        '<button class="btn btn-primary" id="impGo"' + (missing.length || !result.trades.length ? ' disabled' : '') + '>' + t('imp_go', { n: result.trades.length }) + '</button>';
      $$('[data-map]', body).forEach(sel => sel.addEventListener('change', () => {
        const v = sel.value === '' ? null : +sel.value;
        Object.keys(map).forEach(k => { if (map[k] === v && k !== sel.dataset.map) delete map[k]; });
        if (v == null) delete map[sel.dataset.map]; else map[sel.dataset.map] = v;
        step2();
      }));
      $('#impInvert').addEventListener('change', e => { invert = e.target.checked; step2(); });
      if ($('#impDemo')) $('#impDemo').addEventListener('change', e => { clearDemo = e.target.checked; step2(); });
      $('#impBack').addEventListener('click', step1);
      $('#impGo').addEventListener('click', doImport);
    }
    function doImport() {
      if (!result || !result.trades.length) return;
      if (clearDemo && S().demo) Store.clearAll();
      const now = new Date().toISOString();
      result.trades.forEach(x => Store.state.trades.push(Object.assign({ id: U.uid() + Math.random().toString(36).slice(2, 6), createdAt: now, updatedAt: now }, x)));
      if (!Store.save()) return;
      closeModal();
      toast(t('imp_done', { n: result.trades.length }), 'ok');
      ui.range = 'all';
      if (location.hash !== '#/trades') location.hash = '#/trades'; else render();
    }
    step1();
  }

  /* ---------- account & Pro ---------- */
  function accountCard() {
    const P = (window.EDGEBOOK_CONFIG || {}).pricing || { currency: '$', monthly: 12, yearly: 99 };
    const save = Math.round((1 - P.yearly / (P.monthly * 12)) * 100);
    const SOON = ['pro_f4', 'pro_f5'];
    const perks = '<ul class="acc-perks">' + ['pro_f1', 'pro_f2', 'pro_f3', 'pro_f4', 'pro_f5'].map(k =>
      '<li' + (SOON.includes(k) ? ' class="soon"' : '') + '>' + t(k) + (SOON.includes(k) ? ' <span class="soon-chip">' + t('soon') + '</span>' : '') + '</li>').join('') + '</ul>';
    const head = (sub, right) => '<div class="card-head"><div><h3>' + t('acc_title') + '</h3><p>' + sub + '</p></div>' + (right || '') + '</div>';

    if (!Cloud.enabled) {
      return '<div class="card acc-card">' + head(t('acc_local')) + '<div class="acc-grid"><div class="acc-upsell"><div class="acc-plan-name">Pro</div>' + perks + '</div>' +
        '<div class="acc-note">' + icon('shield') + '<p>' + t('acc_local_note') + '</p></div></div></div>';
    }
    if (!Cloud.ready) return '<div class="card acc-card">' + head(t('loading')) + '</div>';

    if (!Cloud.user) {
      const LOGOS = {
        google: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0012 23z"/><path fill="#FBBC05" d="M5.84 14.09a6.6 6.6 0 010-4.18V7.07H2.18a11 11 0 000 9.86l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 002.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/></svg>',
        github: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z"/></svg>',
        apple: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.37 12.62c-.03-2.68 2.19-3.97 2.29-4.03-1.25-1.82-3.19-2.07-3.88-2.1-1.65-.17-3.22.97-4.06.97-.84 0-2.13-.95-3.5-.92-1.8.03-3.46 1.05-4.39 2.66-1.87 3.25-.48 8.06 1.34 10.7.89 1.29 1.95 2.74 3.34 2.69 1.34-.05 1.85-.87 3.47-.87 1.62 0 2.08.87 3.5.84 1.44-.02 2.36-1.31 3.24-2.61 1.02-1.5 1.44-2.95 1.47-3.02-.03-.01-2.81-1.08-2.82-4.31zM13.7 4.74c.74-.9 1.24-2.14 1.1-3.38-1.06.04-2.35.71-3.12 1.6-.68.79-1.28 2.06-1.12 3.27 1.18.09 2.39-.6 3.14-1.49z"/></svg>'
      };
      const social = Cloud.providers().map(p => '<button type="button" class="btn btn-ghost social-btn" data-oauth="' + p + '">' + LOGOS[p] + '<span>' + t('continue_with', { p: p === 'github' ? 'GitHub' : p.charAt(0).toUpperCase() + p.slice(1) }) + '</span></button>').join('');
      return '<div class="card acc-card">' + head(t('acc_signin_sub')) +
        '<div class="acc-grid"><form id="authForm" class="acc-auth" novalidate>' +
        (social ? '<div class="social">' + social + '</div><div class="or"><span>' + t('or_email') + '</span></div>' : '') +
        '<label class="field"><span>Email</span><input class="input" name="email" type="email" autocomplete="email" required/></label>' +
        '<label class="field"><span>' + t('password') + '</span><input class="input" name="password" type="password" autocomplete="current-password" minlength="6" required/></label>' +
        '<div class="acc-actions"><button class="btn btn-primary" type="submit" data-mode="in">' + t('sign_in') + '</button><button class="btn btn-ghost" type="submit" data-mode="up">' + t('sign_up') + '</button></div>' +
        '<p class="acc-msg" id="authMsg"></p></form>' +
        '<div class="acc-upsell"><div class="acc-plan-name">Pro <span>' + P.currency + P.monthly + ' ' + t('per_month') + '</span></div>' + perks + '</div></div></div>';
    }

    const email = esc(Cloud.user.email || '');
    const badge = Cloud.isPro ? '<span class="plan-badge pro">PRO</span>' : '<span class="plan-badge">FREE</span>';
    if (Cloud.isPro) {
      const until = Cloud.profile && Cloud.profile.plan_until ? t('pro_until', { d: dateLabel(Cloud.profile.plan_until, 'full') }) : '';
      return '<div class="card acc-card is-pro">' + head(email + ' · ' + badge + (until ? ' · ' + until : '')) +
        '<div class="acc-sync"><span class="sync-dot s-' + Cloud.status + '"></span><div><b>' + t('sync_' + Cloud.status) + '</b><small>' +
        (Cloud.lastSync ? t('last_sync', { t: dateLabel(Cloud.lastSync) }) : '') + (Cloud.status === 'error' && Cloud.error ? ' · ' + esc(Cloud.error) : '') + '</small></div>' +
        '<div class="spacer"></div><button class="btn btn-ghost btn-sm" data-action="sync-now">' + t('sync_now') + '</button>' +
        '<a class="btn btn-ghost btn-sm" href="' + esc((window.EDGEBOOK_CONFIG || {}).billingPortal || '#') + '" target="_blank" rel="noopener">' + t('manage_sub') + '</a>' +
        '<button class="btn btn-ghost btn-sm" data-action="sign-out">' + t('sign_out') + '</button></div></div>';
    }
    return '<div class="card acc-card">' + head(email + ' · ' + badge, '<button class="btn btn-ghost btn-sm" data-action="sign-out">' + t('sign_out') + '</button>') +
      '<div class="acc-grid"><div class="acc-upsell"><div class="acc-plan-name">' + t('upgrade_title') + '</div>' + perks + '</div>' +
      '<div class="acc-buy">' +
      '<button class="plan-opt" data-action="upgrade" data-interval="monthly"><span>' + t('monthly') + '</span><b class="mono">' + P.currency + P.monthly + '</b><small>' + t('per_month') + '</small></button>' +
      '<button class="plan-opt best" data-action="upgrade" data-interval="yearly"><span>' + t('yearly') + ' <i>−' + save + '%</i></span><b class="mono">' + P.currency + P.yearly + '</b><small>' + t('per_year') + '</small></button>' +
      '<button class="btn btn-ghost btn-sm" data-action="refresh-plan">' + t('paid_check') + '</button></div></div></div>';
  }

  function bindAccount() {
    const f = $('#authForm');
    if (!f) return;
    $$('[data-oauth]', f).forEach(b => b.addEventListener('click', async () => {
      const msg = $('#authMsg');
      b.disabled = true;
      try { await Cloud.signInWith(b.dataset.oauth); }
      catch (err) { msg.textContent = t('auth_err', { m: err.message || '' }); msg.className = 'acc-msg err'; b.disabled = false; }
    }));
    let mode = 'in';
    $$('button[type="submit"]', f).forEach(b => b.addEventListener('click', () => { mode = b.dataset.mode; }));
    f.addEventListener('submit', async e => {
      e.preventDefault();
      const email = f.email.value.trim(), pw = f.password.value;
      const msg = $('#authMsg');
      if (!/^\S+@\S+\.\S+$/.test(email) || pw.length < 6) { msg.textContent = t('auth_invalid'); msg.className = 'acc-msg err'; return; }
      $$('button', f).forEach(b => { b.disabled = true; });
      try {
        if (mode === 'up') {
          const hasSession = await Cloud.signUp(email, pw);
          msg.textContent = hasSession ? t('signed_in') : t('check_email');
          msg.className = 'acc-msg ok';
        } else {
          await Cloud.signIn(email, pw);
          toast(t('signed_in'), 'ok');
        }
      } catch (err) {
        msg.textContent = t('auth_err', { m: err.message || '' }); msg.className = 'acc-msg err';
      } finally { $$('button', f).forEach(b => { b.disabled = false; }); }
    });
  }

  function conflictDialog() {
    const row = Cloud.conflict;
    if (!row) return;
    const cloudN = (row.data && row.data.trades || []).length, localN = Store.state.trades.length;
    openModal('<div class="confirm"><div class="confirm-ic gold">' + icon('upload') + '</div><h3>' + t('conflict_title') + '</h3><p>' + t('conflict_text') + '</p>' +
      '<div class="modal-foot"><button class="btn btn-ghost" id="useLocal">' + t('use_local', { n: localN }) + '</button><button class="btn btn-primary" id="useCloud">' + t('use_cloud', { n: cloudN }) + '</button></div></div>', 'sm');
    $('#useCloud').addEventListener('click', () => { closeModal(); Cloud.resolve('cloud'); });
    $('#useLocal').addEventListener('click', () => { closeModal(); Cloud.resolve('local'); });
  }

  let lastCloudKey = '';
  Cloud.on(() => {
    if (Cloud.conflict && $('#modal').hidden) conflictDialog();
    const key = [Cloud.ready, Cloud.user && Cloud.user.id, Cloud.isPro, Cloud.status, Cloud.lastSync].join('|');
    if (key === lastCloudKey) return;
    const dataChanged = Cloud.status === 'synced' && lastCloudKey.split('|')[3] === 'syncing';
    lastCloudKey = key;
    const typing = document.activeElement && document.activeElement.closest && document.activeElement.closest('form');
    if (typing && !dataChanged) { renderSidebar(); return; }
    render();
  });

  /* ---------- command palette ---------- */
  function palette() {
    const cmds = ROUTES.map((r, i) => ({ group: 'nav', icon: r, label: t('nav_' + r), hint: String(i + 1), run: () => { location.hash = '#/' + r; } })).concat([
      { group: 'act', icon: 'plus', label: t('new_trade'), hint: 'N', run: () => tradeForm() },
      { group: 'act', icon: S().theme === 'dark' ? 'sun' : 'moon', label: t('cmd_theme'), hint: 'T', run: () => { Store.set('theme', S().theme === 'dark' ? 'light' : 'dark'); render(); } },
      { group: 'act', icon: 'sparkle', label: t('cmd_lang'), run: () => { Store.set('lang', S().lang === 'kk' ? 'en' : 'kk'); Store.set('langChosen', true); render(); } },
      { group: 'act', icon: 'download', label: t('export_csv'), run: () => { exportCSV(); toast(t('exported'), 'ok'); } },
      { group: 'act', icon: 'download', label: t('export_json'), run: () => { download('edgebook-backup-' + U.dayKey(new Date()) + '.json', Store.exportJSON(), 'application/json'); toast(t('exported'), 'ok'); } },
      { group: 'act', icon: 'keyboard', label: t('shortcuts'), run: () => shortcuts() }
    ]);
    openModal('<div class="cmdk-input">' + icon('search') + '<input id="cmdkIn" placeholder="' + t('cmd_ph') + '" autocomplete="off" spellcheck="false" autofocus/><kbd>Esc</kbd></div>' +
      '<div class="cmdk-list" id="cmdkList"></div>' +
      '<div class="cmdk-foot"><span><kbd>↑</kbd><kbd>↓</kbd>' + t('cmd_move') + '</span><span><kbd>↵</kbd>' + t('cmd_run') + '</span></div>', 'palette');
    let sel = 0, items = [];
    const input = $('#cmdkIn'), list = $('#cmdkList');
    const draw = () => {
      const q = input.value.trim().toLowerCase();
      const cm = cmds.filter(c => !q || c.label.toLowerCase().includes(q));
      const tr = q ? Store.all().filter(x => [x.symbol, x.setup, (x.tags || []).join(' '), x.notes].join(' ').toLowerCase().includes(q)).slice(0, 8) : [];
      items = cm.concat(tr.map(x => ({ group: 'trades', trade: x, run: () => tradeDetail(x.id) })));
      sel = Math.max(0, Math.min(sel, items.length - 1));
      let html = '', last = '';
      items.forEach((it, i) => {
        if (it.group !== last) { html += '<div class="cmdk-group">' + t('cmd_g_' + it.group) + '</div>'; last = it.group; }
        const x = it.trade;
        html += '<button class="cmdk-item' + (i === sel ? ' on' : '') + '" data-ci="' + i + '">' +
          (x ? icon('trades') + '<b>' + esc(x.symbol) + '</b><span class="muted">' + dateLabel(x.openedAt || x.when) + '</span><small class="' + cls(x.net) + '">' + (x.closed ? money(x.net, { sign: true }) : t('st_open')) + '</small>'
            : icon(it.icon) + '<b>' + it.label + '</b>' + (it.hint ? '<small><kbd>' + it.hint + '</kbd></small>' : '')) + '</button>';
      });
      list.innerHTML = html || '<div class="cmdk-empty">' + t('cmd_empty') + '</div>';
      const on = $('.cmdk-item.on', list);
      if (on) on.scrollIntoView({ block: 'nearest' });
    };
    const run = i => { const it = items[i]; if (!it) return; closeModal(); it.run(); };
    input.addEventListener('input', () => { sel = 0; draw(); });
    input.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % Math.max(1, items.length); draw(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + items.length) % Math.max(1, items.length); draw(); }
      else if (e.key === 'Enter') { e.preventDefault(); run(sel); }
    });
    list.addEventListener('click', e => { const b = e.target.closest('[data-ci]'); if (b) run(+b.dataset.ci); });
    draw();
  }

  /* ---------- motion ---------- */
  function countUp(root) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    $$('.kpi-value', root).forEach(el => {
      if (el.children.length) return;
      const m = el.textContent.match(/^(.*?)([\d,]+(?:\.\d+)?)(.*)$/);
      if (!m) return;
      const dec = (m[2].split('.')[1] || '').length;
      const target = parseFloat(m[2].replace(/,/g, ''));
      if (!isFinite(target) || target === 0) return;
      const t0 = performance.now(), dur = 1100;
      const step = now => {
        const k = Math.min(1, (now - t0) / dur);
        const e = k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        el.textContent = m[1] + (target * e).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
        if (k < 1 && el.isConnected) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  document.addEventListener('pointermove', e => {
    const c = e.target.closest && e.target.closest('.card, .kpi');
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });

  /* ---------- toast ---------- */
  function toast(msg, type) {
    const el = document.createElement('div');
    el.className = 'toast ' + (type || '');
    el.innerHTML = '<span class="toast-dot"></span>' + esc(msg);
    $('#toasts').appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 2600);
  }

  /* ---------- export ---------- */
  function download(name, content, type) {
    const blob = new Blob([content], { type });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function exportCSV() {
    const cols = ['symbol', 'market', 'side', 'setup', 'openedAt', 'closedAt', 'entry', 'exit', 'qty', 'mult', 'stop', 'target', 'fees', 'net', 'r', 'status', 'emotion', 'rating', 'mistakes', 'tags', 'notes'];
    const q = v => { const s = Array.isArray(v) ? v.join('|') : v == null ? '' : typeof v === 'number' ? String(+v.toFixed(6)) : String(v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
    const rows = Store.all().map(x => cols.map(c => q(x[c])).join(','));
    download('edgebook-trades-' + U.dayKey(new Date()) + '.csv', '﻿' + cols.join(',') + '\n' + rows.join('\n'), 'text/csv;charset=utf-8');
  }

  /* ---------- routing & events ---------- */
  function parseHash() {
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    ui.route = ROUTES.includes(parts[0]) ? parts[0] : 'dashboard';
    if (ui.route === 'journal' && /^\d{4}-\d{2}-\d{2}$/.test(parts[1] || '')) ui.journalDay = parts[1];
  }
  window.addEventListener('hashchange', () => { parseHash(); render(); $('#view').focus({ preventScroll: true }); window.scrollTo({ top: 0 }); });

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-close],[data-action],[data-range],[data-lang],[data-trade],[data-sort],[data-page],[data-cal],[data-day],[data-jday]');
    if (!el) return;

    if (el.hasAttribute('data-close') && !el.dataset.action) {
      if (el.tagName !== 'A') e.preventDefault();
      closeModal(); return;
    }
    if (el.dataset.range) { ui.range = el.dataset.range; ui.tq.page = 1; render(); return; }
    if (el.dataset.lang) { Store.set('langChosen', true); Store.set('lang', el.dataset.lang); render(); return; }
    if (el.dataset.sort) { const k = el.dataset.sort; if (ui.tq.sort === k) ui.tq.dir *= -1; else { ui.tq.sort = k; ui.tq.dir = -1; } render(); return; }
    if (el.dataset.page) { ui.tq.page = +el.dataset.page; render(); return; }
    if (el.dataset.cal != null && el.hasAttribute('data-cal')) {
      const d = +el.dataset.cal;
      const now = new Date();
      ui.calMonth = d === 0 ? new Date(now.getFullYear(), now.getMonth(), 1) : new Date(ui.calMonth.getFullYear(), ui.calMonth.getMonth() + d, 1);
      render(); return;
    }
    if (el.dataset.jday) { location.hash = '#/journal/' + el.dataset.jday; return; }
    if (el.dataset.trade && !el.dataset.action) { tradeDetail(el.dataset.trade); return; }
    if (el.dataset.day && !el.dataset.action) { dayDetail(el.dataset.day); return; }

    const a = el.dataset.action;
    switch (a) {
      case 'new-trade': tradeForm(null, el.dataset.day); break;
      case 'edit-trade': tradeForm(el.dataset.id); break;
      case 'duplicate-trade': {
        const r = Store.raw(el.dataset.id); if (!r) break;
        const copy = Object.assign({}, r, { exit: '', closedAt: '', openedAt: U.toLocalInput(new Date()), notes: '', image: '', mistakes: [], rating: 0 });
        delete copy.id;
        closeModal(); setTimeout(() => { tradeForm(null, null, copy); }, 200); break;
      }
      case 'delete-trade': {
        const id = el.dataset.id;
        confirmBox(t('delete_q'), t('delete_text'), t('delete'), () => { Store.remove(id); toast(t('trade_deleted'), 'ok'); render(); });
        break;
      }
      case 'theme': Store.set('theme', S().theme === 'dark' ? 'light' : 'dark'); render(); break;
      case 'seed':
        if (Store.state.trades.length) confirmBox(t('load_demo'), t('seed_confirm'), t('load_demo'), () => { Store.seedDemo(S().lang); toast(t('demo_loaded'), 'ok'); render(); });
        else { Store.seedDemo(S().lang); toast(t('demo_loaded'), 'ok'); render(); }
        break;
      case 'clear-demo': confirmBox(t('demo_clear'), t('clear_demo_text'), t('demo_clear'), () => { Store.clearAll(); toast(t('cleared'), 'ok'); render(); }); break;
      case 'clear-all': confirmBox(t('clear_all'), t('clear_all_text'), t('clear_all'), () => { Store.clearAll(); toast(t('cleared'), 'ok'); render(); }); break;
      case 'export-json': download('edgebook-backup-' + U.dayKey(new Date()) + '.json', Store.exportJSON(), 'application/json'); toast(t('exported'), 'ok'); break;
      case 'import-json': $('#importFile').click(); break;
      case 'export-csv': exportCSV(); toast(t('exported'), 'ok'); break;
      case 'shortcuts': shortcuts(); break;
      case 'palette': palette(); break;
      case 'import': importDialog(); break;
      case 'upgrade': {
        const url = Cloud.checkoutUrl(el.dataset.interval);
        if (url) window.open(url, '_blank', 'noopener'); else toast(t('checkout_missing'), 'err');
        break;
      }
      case 'refresh-plan':
        Cloud.refreshProfile().then(p => { if (Cloud.isPro) { toast(t('plan_active'), 'ok'); Cloud.syncNow(); } else toast(t('still_free'), 'err'); });
        break;
      case 'sync-now': Cloud.syncNow(); break;
      case 'sign-out': Cloud.signOut().then(() => { location.replace('login.html'); }); break;
    }
  });

  document.addEventListener('change', e => {
    const f = e.target.closest('[data-filter]');
    if (f) { ui.tq[f.dataset.filter] = f.value; ui.tq.page = 1; render(); return; }
    if (e.target.id === 'jDate' && e.target.value) location.hash = '#/journal/' + e.target.value;
  });

  let searchTimer;
  document.addEventListener('input', e => {
    if (e.target.id !== 'tq') return;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      ui.tq.q = e.target.value; ui.tq.page = 1;
      const pos = e.target.selectionStart;
      render();
      const inp = $('#tq'); if (inp) { inp.focus(); inp.setSelectionRange(pos, pos); }
    }, 180);
  });

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if ($('#modalPanel').classList.contains('palette') && !$('#modal').hidden) closeModal(); else palette();
      return;
    }
    if (e.key === 'Escape') { closeModal(); return; }
    const tag = (e.target.tagName || '').toLowerCase();
    if (['input', 'textarea', 'select'].includes(tag) || e.target.isContentEditable || e.metaKey || e.ctrlKey || e.altKey) return;
    if (!$('#modal').hidden) return;
    if (e.key === 'n' || e.key === 'N') { e.preventDefault(); tradeForm(); }
    else if (e.key === 't' || e.key === 'T') { Store.set('theme', S().theme === 'dark' ? 'light' : 'dark'); render(); }
    else if (e.key === '/') {
      e.preventDefault();
      if (ui.route === 'trades') { const i = $('#tq'); if (i) i.focus(); }
      else { location.hash = '#/trades'; setTimeout(() => { const i = $('#tq'); if (i) i.focus(); }, 30); }
    }
    else if (/^[1-6]$/.test(e.key)) location.hash = '#/' + ROUTES[+e.key - 1];
  });

  let rsTimer, lastW = window.innerWidth;
  window.addEventListener('resize', () => {
    clearTimeout(rsTimer);
    rsTimer = setTimeout(() => { if (Math.abs(window.innerWidth - lastW) > 20) { lastW = window.innerWidth; drawCharts(); } }, 150);
  });

  /* Tooltip for help icons */
  document.addEventListener('mouseover', e => {
    const h = e.target.closest('.help'); if (!h) return;
    let tip = $('#helpTip');
    if (!tip) { tip = document.createElement('div'); tip.id = 'helpTip'; tip.className = 'help-tip'; document.body.appendChild(tip); }
    tip.textContent = h.dataset.tip;
    const r = h.getBoundingClientRect();
    tip.style.left = Math.min(window.innerWidth - 270, Math.max(8, r.left - 120)) + 'px';
    tip.style.top = (r.bottom + 8) + 'px';
    tip.classList.add('show');
    h.addEventListener('mouseleave', () => tip.classList.remove('show'), { once: true });
  });

  Store.onError(kind => { if (kind === 'quota') toast(t('quota'), 'err'); });

  /* ---------- boot ---------- */
  Store.load();
  if (!Store.state.settings.seeded) {
    if (!Store.state.settings.langChosen) {
      const navLang = (navigator.language || '').toLowerCase();
      Store.state.settings.lang = navLang.startsWith('en') ? 'en' : 'kk';
    }
    Store.seedDemo(Store.state.settings.lang);
  }
  I18N.use(() => S().lang);
  parseHash();
  // Auth gate: when accounts are configured, the journal requires sign-in
  let gated = false;
  if (Cloud.enabled) document.documentElement.classList.add('auth-pending');
  render();
  Cloud.init().then(() => {
    if (Cloud.enabled && !Cloud.user && Cloud.status !== 'error') { toLogin(); return; }
    gated = true;
    document.documentElement.classList.remove('auth-pending');
    render();
  });
  function toLogin() { location.replace('login.html?next=' + encodeURIComponent(location.hash || '#/dashboard')); }
  Cloud.on(() => { if (gated && Cloud.enabled && Cloud.ready && !Cloud.user) toLogin(); });
})();
