/* EntryX — Pro features: welcome, share card, risk guard, prop firm tracker.
   Loaded before app.js; app.js calls ProFeatures(api) with its helpers. */
(function () {
  'use strict';

  window.ProFeatures = function (api) {
    const { t, esc, icon, money, pct, rfmt, cls, dateLabel, openModal, closeModal, toast, stats, S, U, $, $$ } = api;

    /* ---------- settings ---------- */
    const PRESETS = {
      ftmo1: { name: 'FTMO · Challenge', target: 10, daily: 5, max: 10, minDays: 4 },
      ftmo2: { name: 'FTMO · Verification', target: 5, daily: 5, max: 10, minDays: 4 },
      custom: { name: 'Custom', target: 8, daily: 5, max: 10, minDays: 3 }
    };
    function risk() { return Object.assign({ on: false, dailyLoss: 200, maxTrades: 3, riskPct: 1 }, S().risk || {}); }
    function prop() { return Object.assign({ on: false, preset: 'ftmo1', name: 'FTMO · Challenge', size: 100000, target: 10, daily: 5, max: 10, minDays: 4, start: U.dayKey(new Date()) }, S().prop || {}); }

    const closedTrades = () => Store.all().filter(x => x.closed);
    const sum = (a, f) => a.reduce((s, x) => s + f(x), 0);

    /* ---------- risk guard ---------- */
    function riskToday() {
      const r = risk();
      const today = U.dayKey(new Date());
      const list = Store.all().filter(x => (x.openedAt || '').slice(0, 10) === today || x.day === today);
      const net = sum(list.filter(x => x.closed), x => x.net);
      const count = list.length;
      const lossUsed = r.dailyLoss > 0 ? Math.max(0, -net) / r.dailyLoss : 0;
      const tradesUsed = r.maxTrades > 0 ? count / r.maxTrades : 0;
      return { r, net, count, lossUsed, tradesUsed, breached: r.on && (lossUsed >= 1 || tradesUsed >= 1), warn: r.on && (lossUsed >= 0.8 || tradesUsed >= 0.8) };
    }
    function riskPctLimit() { const r = risk(); return r.on && r.riskPct > 0 ? r.riskPct / 100 : 0.02; }

    /* ---------- prop firm tracker ---------- */
    function propStatus() {
      const p = prop();
      const start = new Date(p.start + 'T00:00');
      const list = closedTrades().filter(x => x.when >= start).sort((a, b) => a.when - b.when);
      const profit = sum(list, x => x.net);
      const days = {};
      list.forEach(x => { days[x.day] = (days[x.day] || 0) + x.net; });
      let eq = p.size, minEq = p.size;
      list.forEach(x => { eq += x.net; minEq = Math.min(minEq, eq); });
      const dailyLimit = p.size * p.daily / 100, maxLimit = p.size * p.max / 100, targetAmt = p.size * p.target / 100;
      const todayNet = days[U.dayKey(new Date())] || 0;
      const worstDay = Object.values(days).reduce((m, v) => Math.min(m, v), 0);
      const dailyFail = -worstDay >= dailyLimit && dailyLimit > 0;
      const maxFail = p.size - minEq >= maxLimit && maxLimit > 0;
      const tradingDays = Object.keys(days).length;
      const passed = !dailyFail && !maxFail && profit >= targetAmt && tradingDays >= p.minDays;
      return {
        p, profit, tradingDays, todayNet,
        targetUsed: targetAmt > 0 ? Math.max(0, profit) / targetAmt : 0,
        dailyUsed: dailyLimit > 0 ? Math.max(0, -todayNet) / dailyLimit : 0,
        maxUsed: maxLimit > 0 ? Math.max(0, p.size - Math.min(minEq, p.size + profit)) / maxLimit : 0,
        daysUsed: p.minDays > 0 ? tradingDays / p.minDays : 1,
        status: dailyFail || maxFail ? 'fail' : passed ? 'pass' : 'progress',
        failReason: dailyFail ? 'daily' : maxFail ? 'max' : ''
      };
    }

    const bar = (label, value, used, mode) => {
      // mode 'good' = filling is good (target); otherwise filling is danger
      const w = Math.max(0, Math.min(1, used)) * 100;
      const tone = mode === 'good' ? (used >= 1 ? 'ok' : 'prog') : used >= 1 ? 'bad' : used >= 0.8 ? 'warn' : 'ok';
      return '<div class="rbar"><div class="rbar-top"><span>' + label + '</span><b class="mono">' + value + '</b></div><div class="rbar-track"><i class="' + tone + '" style="width:' + w.toFixed(1) + '%"></i></div></div>';
    };

    function riskCard(rt) {
      return '<div class="card pro-card' + (rt.breached ? ' is-bad' : rt.warn ? ' is-warn' : '') + '"><div class="card-head"><div><h3>' + icon('shield') + t('rg_title') + '</h3><p>' + t('rg_today') + '</p></div>' +
        '<span class="rstate ' + (rt.breached ? 'bad' : rt.warn ? 'warn' : 'ok') + '">' + t(rt.breached ? 'rg_stop' : rt.warn ? 'rg_careful' : 'rg_ok') + '</span></div>' +
        (rt.r.dailyLoss > 0 ? bar(t('rg_loss'), money(Math.min(0, rt.net)) + ' / ' + money(-rt.r.dailyLoss, { int: true }), rt.lossUsed) : '') +
        (rt.r.maxTrades > 0 ? bar(t('rg_trades'), rt.count + ' / ' + rt.r.maxTrades, rt.tradesUsed) : '') + '</div>';
    }

    function propCard(ps) {
      const p = ps.p;
      const pill = '<span class="rstate ' + (ps.status === 'pass' ? 'ok' : ps.status === 'fail' ? 'bad' : 'prog') + '">' + t('prop_' + ps.status) + '</span>';
      return '<div class="card pro-card"><div class="card-head"><div><h3>' + icon('target') + esc(p.name) + '</h3><p>' + money(p.size, { int: true }) + ' · ' + t('prop_since', { d: dateLabel(new Date(p.start + 'T12:00'), 'full') }) + '</p></div>' + pill + '</div>' +
        bar(t('prop_target', { p: p.target }), money(ps.profit, { sign: true }) + ' / ' + money(p.size * p.target / 100, { int: true }), ps.targetUsed, 'good') +
        bar(t('prop_daily', { p: p.daily }), money(Math.min(0, ps.todayNet)) + ' / ' + money(-p.size * p.daily / 100, { int: true }), ps.dailyUsed) +
        bar(t('prop_max', { p: p.max }), pct(ps.maxUsed * p.max / 100, 2) + ' / ' + p.max + '%', ps.maxUsed) +
        bar(t('prop_days'), ps.tradingDays + ' / ' + p.minDays, ps.daysUsed, 'good') +
        (ps.failReason ? '<p class="pf-fail">' + icon('shield') + t('prop_fail_' + ps.failReason) + '</p>' : '') + '</div>';
    }

    function dashboardWidgets() {
      if (!api.hasPro()) return '';
      const r = risk(), p = prop();
      if (!r.on && !p.on) return '';
      const rt = riskToday();
      let html = rt.breached ? '<div class="stop-banner">' + icon('shield') + '<div><b>' + t('rg_banner_t') + '</b><span>' + t('rg_banner_x') + '</span></div></div>' : '';
      const cards = (r.on ? riskCard(rt) : '') + (p.on ? propCard(propStatus()) : '');
      html += '<div class="grid ' + (r.on && p.on ? 'g-2' : '') + ' pro-widgets">' + cards + '</div>';
      return html;
    }

    function guardNewTrade(proceed) {
      if (!api.hasPro()) return proceed();
      const rt = riskToday();
      if (!rt.breached) return proceed();
      openModal('<div class="confirm"><div class="confirm-ic">' + icon('shield') + '</div><h3>' + t('rg_block_t') + '</h3><p>' + t('rg_block_x') + '</p>' +
        '<div class="modal-foot"><button class="btn btn-ghost" id="rgAnyway">' + t('rg_anyway') + '</button><button class="btn btn-primary" data-close>' + t('rg_stop_btn') + '</button></div></div>', 'sm');
      $('#rgAnyway').addEventListener('click', () => { closeModal(); setTimeout(proceed, 0); });
    }

    /* ---------- rules page ---------- */
    function rulesView(v) {
      if (!api.hasPro()) {
        v.innerHTML = '<div class="empty pro-lock"><div class="empty-art">' + icon('shield') + '</div><h3>' + t('rules_lock_t') + '</h3><p>' + t('rules_lock_x') + '</p>' +
          '<div class="empty-actions"><a class="btn btn-primary" href="#/settings">' + icon('sparkle') + t('see_pro') + '</a></div></div>';
        return;
      }
      const r = risk(), p = prop();
      const num = (name, val, step, suffix) => '<label class="field"><span>' + t('rf_' + name) + '</span><div class="suffix"><input class="input mono" type="number" min="0" step="' + (step || 'any') + '" name="' + name + '" value="' + esc(val) + '"/>' + (suffix ? '<em>' + suffix + '</em>' : '') + '</div></label>';
      v.innerHTML =
        '<div class="grid g-2">' +
        '<form class="card" id="riskForm"><div class="card-head"><div><h3>' + t('rg_title') + '</h3><p>' + t('rg_sub') + '</p></div>' +
        '<label class="switch"><input type="checkbox" name="on"' + (r.on ? ' checked' : '') + '/><i></i></label></div>' +
        '<div class="form-grid">' + num('dailyLoss', r.dailyLoss, 'any', S().currency) + num('maxTrades', r.maxTrades, 1) + num('riskPct', r.riskPct, 0.1, '%') + '</div>' +
        '<p class="hint">' + t('rg_hint') + '</p><div id="riskLive"></div></form>' +

        '<form class="card" id="propForm"><div class="card-head"><div><h3>' + t('prop_title') + '</h3><p>' + t('prop_sub') + '</p></div>' +
        '<label class="switch"><input type="checkbox" name="on"' + (p.on ? ' checked' : '') + '/><i></i></label></div>' +
        '<div class="form-grid">' +
        '<label class="field full"><span>' + t('rf_preset') + '</span><select class="select" name="preset">' + Object.keys(PRESETS).map(k => '<option value="' + k + '"' + (p.preset === k ? ' selected' : '') + '>' + (k === 'custom' ? t('rf_custom') : PRESETS[k].name) + '</option>').join('') + '</select></label>' +
        num('size', p.size, 'any', S().currency) + '<label class="field"><span>' + t('rf_start') + '</span><input class="input" type="date" name="start" value="' + esc(p.start) + '"/></label>' +
        num('target', p.target, 0.1, '%') + num('daily', p.daily, 0.1, '%') + num('max', p.max, 0.1, '%') + num('minDays', p.minDays, 1) +
        '</div><p class="hint">' + t('prop_hint') + '</p><div id="propLive"></div></form>' +
        '</div>';

      const live = () => {
        $('#riskLive').innerHTML = risk().on ? riskCard(riskToday()).replace('class="card pro-card', 'class="pro-inline') : '';
        $('#propLive').innerHTML = prop().on ? propCard(propStatus()).replace('class="card pro-card', 'class="pro-inline') : '';
      };
      const read = f => { const o = {}; new FormData(f).forEach((val, k) => { o[k] = val; }); o.on = f.on.checked; return o; };
      $('#riskForm').addEventListener('input', e => {
        const o = read(e.currentTarget);
        S().risk = { on: o.on, dailyLoss: +o.dailyLoss || 0, maxTrades: Math.round(+o.maxTrades || 0), riskPct: +o.riskPct || 0 };
        Store.save(); live();
      });
      $('#propForm').addEventListener('input', e => {
        const f = e.currentTarget;
        if (e.target.name === 'preset' && PRESETS[e.target.value]) {
          const pr = PRESETS[e.target.value];
          ['target', 'daily', 'max', 'minDays'].forEach(k => { f[k].value = pr[k]; });
        }
        const o = read(f);
        const pr = PRESETS[o.preset] || PRESETS.custom;
        S().prop = { on: o.on, preset: o.preset, name: o.preset === 'custom' ? t('rf_custom') : pr.name, size: +o.size || 0, target: +o.target || 0, daily: +o.daily || 0, max: +o.max || 0, minDays: Math.round(+o.minDays || 0), start: o.start || U.dayKey(new Date()) };
        Store.save(); live();
      });
      $$('form', v).forEach(f => f.addEventListener('submit', e => e.preventDefault()));
      live();
    }

    /* ---------- P&L share card ---------- */
    const loadImg = src => new Promise(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });

    function periodTrades(period) {
      const now = new Date();
      let from = null;
      if (period === 'today') { from = new Date(now); from.setHours(0, 0, 0, 0); }
      else if (period === 'week') { from = new Date(now); from.setHours(0, 0, 0, 0); from.setDate(from.getDate() - 6); }
      else if (period === 'month') from = new Date(now.getFullYear(), now.getMonth(), 1);
      return closedTrades().filter(x => !from || x.when >= from).sort((a, b) => a.when - b.when);
    }

    function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }

    async function drawCard(canvas, period, hide) {
      const W = 1080, H = 1350;
      canvas.width = W; canvas.height = H;
      const c = canvas.getContext('2d');
      try { await Promise.all(['700 60px Inter', '600 40px Inter', '700 200px Onest', '400 40px Michroma', '600 40px "Geist Mono"'].map(f => document.fonts.load(f))); } catch (e) { /* offline fonts */ }
      const list = periodTrades(period);
      const st = stats(list);
      const bal = +S().balance || 0;
      const up = st.net >= 0;
      const GREEN = '#3ddc97', RED = '#ff5f6d', tone = up ? GREEN : RED;

      // background
      c.fillStyle = '#07060b'; c.fillRect(0, 0, W, H);
      let g = c.createRadialGradient(W * 0.55, -120, 40, W * 0.55, -120, 980);
      g.addColorStop(0, 'rgba(147, 51, 234, .6)'); g.addColorStop(1, 'rgba(147, 51, 234, 0)');
      c.fillStyle = g; c.fillRect(0, 0, W, H);
      g = c.createRadialGradient(W + 60, H + 60, 40, W + 60, H + 60, 760);
      g.addColorStop(0, up ? 'rgba(61, 220, 151, .2)' : 'rgba(255, 95, 109, .2)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = g; c.fillRect(0, 0, W, H);
      c.strokeStyle = 'rgba(255,255,255,.035)'; c.lineWidth = 1;
      for (let x = 0; x <= W; x += 72) { c.beginPath(); c.moveTo(x + .5, 0); c.lineTo(x + .5, H); c.stroke(); }
      for (let y = 0; y <= H; y += 72) { c.beginPath(); c.moveTo(0, y + .5); c.lineTo(W, y + .5); c.stroke(); }

      // brand
      const logo = await loadImg('img/entryx-mark.svg');
      if (logo) c.drawImage(logo, 80, 78, 92, 75);
      c.textBaseline = 'middle';
      if ('letterSpacing' in c) c.letterSpacing = '9px';
      c.font = '400 36px Michroma, Inter, sans-serif';
      const sg = c.createLinearGradient(0, 90, 0, 140); sg.addColorStop(0, '#ffffff'); sg.addColorStop(1, '#9ca0aa');
      c.fillStyle = sg; c.fillText('ENTRY', 196, 118);
      const ew = c.measureText('ENTRY').width;
      c.fillStyle = '#b86cff'; c.fillText('X', 196 + ew, 118);
      if ('letterSpacing' in c) c.letterSpacing = '0px';

      // period pill
      const plabel = t('sc_p_' + period);
      c.font = '600 28px Inter, sans-serif';
      const pw = c.measureText(plabel).width + 48;
      rr(c, W - 80 - pw, 92, pw, 54, 27); c.fillStyle = 'rgba(255,255,255,.06)'; c.fill(); c.strokeStyle = 'rgba(255,255,255,.12)'; c.stroke();
      c.fillStyle = 'rgba(255,255,255,.85)'; c.fillText(plabel, W - 80 - pw + 24, 120);

      // hero number
      c.textBaseline = 'alphabetic';
      c.font = '600 30px Inter, sans-serif'; c.fillStyle = 'rgba(255,255,255,.5)';
      c.fillText(t('net_pnl').toUpperCase(), 80, 318);
      const big = hide ? (bal ? (st.net >= 0 ? '+' : '−') + Math.abs(st.net / bal * 100).toFixed(2) + '%' : rfmt(st.totalR, true)) : money(st.net, { sign: true });
      let fs = 200;
      do { c.font = '700 ' + fs + 'px Onest, Inter, sans-serif'; fs -= 6; } while (c.measureText(big).width > W - 160 && fs > 80);
      const bg2 = c.createLinearGradient(0, 330, 0, 500); bg2.addColorStop(0, up ? '#8ff5c4' : '#ffa1a9'); bg2.addColorStop(1, tone);
      c.fillStyle = bg2; c.fillText(big, 74, 480);
      c.font = '500 32px "Geist Mono", monospace'; c.fillStyle = 'rgba(255,255,255,.62)';
      const subParts = [rfmt(st.totalR, true)];
      if (!hide && bal) subParts.push((st.net >= 0 ? '+' : '−') + Math.abs(st.net / bal * 100).toFixed(2) + '%');
      subParts.push(t('trades_n', { n: st.closed }));
      c.fillText(subParts.join('   ·   '), 82, 548);

      // equity line
      const pts = [0]; list.forEach(x => pts.push(pts[pts.length - 1] + x.net));
      const cx = 80, cy = 610, cw = W - 160, ch = 250;
      rr(c, cx - 20, cy - 20, cw + 40, ch + 40, 28); c.fillStyle = 'rgba(255,255,255,.03)'; c.fill(); c.strokeStyle = 'rgba(255,255,255,.07)'; c.stroke();
      if (pts.length > 1) {
        const mn = Math.min(...pts), mx = Math.max(...pts), span = mx - mn || 1;
        const X = i => cx + cw * i / (pts.length - 1), Y = v => cy + ch - ch * (v - mn) / span;
        c.beginPath(); pts.forEach((v, i) => (i ? c.lineTo(X(i), Y(v)) : c.moveTo(X(i), Y(v))));
        const area = c.createLinearGradient(0, cy, 0, cy + ch); area.addColorStop(0, up ? 'rgba(61,220,151,.35)' : 'rgba(255,95,109,.35)'); area.addColorStop(1, 'rgba(0,0,0,0)');
        c.save(); c.lineTo(X(pts.length - 1), cy + ch); c.lineTo(X(0), cy + ch); c.closePath(); c.fillStyle = area; c.fill(); c.restore();
        c.beginPath(); pts.forEach((v, i) => (i ? c.lineTo(X(i), Y(v)) : c.moveTo(X(i), Y(v))));
        c.strokeStyle = tone; c.lineWidth = 5; c.lineJoin = 'round'; c.lineCap = 'round'; c.shadowColor = tone; c.shadowBlur = 24; c.stroke(); c.shadowBlur = 0;
        c.beginPath(); c.arc(X(pts.length - 1), Y(pts[pts.length - 1]), 10, 0, Math.PI * 2); c.fillStyle = tone; c.fill();
      } else {
        c.font = '500 30px Inter, sans-serif'; c.fillStyle = 'rgba(255,255,255,.4)'; c.fillText(t('no_data'), cx + 20, cy + ch / 2);
      }

      // stats grid
      const pf = st.pf === Infinity ? '∞' : st.pf == null ? '—' : st.pf.toFixed(2);
      const best = st.best ? (hide ? rfmt(st.best.r, true) : money(st.best.net, { sign: true })) + '  ' + st.best.symbol : '—';
      const boxes = [[t('win_rate'), pct(st.winRate, 0)], [t('profit_factor'), pf], [t('avg_r'), rfmt(st.avgR, true)], [t('best_trade'), best]];
      const bw = (W - 160 - 24) / 2, bh = 150;
      boxes.forEach((b, i) => {
        const x = 80 + (i % 2) * (bw + 24), y = 920 + Math.floor(i / 2) * (bh + 24);
        rr(c, x, y, bw, bh, 26); c.fillStyle = 'rgba(255,255,255,.045)'; c.fill(); c.strokeStyle = 'rgba(255,255,255,.08)'; c.stroke();
        c.font = '600 24px Inter, sans-serif'; c.fillStyle = 'rgba(255,255,255,.5)'; c.fillText(b[0].toUpperCase(), x + 30, y + 52);
        let f2 = 52; do { c.font = '600 ' + f2 + 'px "Geist Mono", monospace'; f2 -= 2; } while (c.measureText(b[1]).width > bw - 60 && f2 > 24);
        c.fillStyle = '#ffffff'; c.fillText(b[1], x + 30, y + 115);
      });

      // footer
      c.font = '500 26px Inter, sans-serif'; c.fillStyle = 'rgba(255,255,255,.42)';
      c.fillText(t('sc_footer'), 80, H - 70);
      const dl = dateLabel(new Date(), 'full');
      c.fillText(dl, W - 80 - c.measureText(dl).width, H - 70);
      rr(c, 80, H - 118, W - 160, 2, 1); const lg = c.createLinearGradient(80, 0, W - 80, 0); lg.addColorStop(0, 'rgba(168,85,247,.8)'); lg.addColorStop(1, 'rgba(168,85,247,0)'); c.fillStyle = lg; c.fill();
      return canvas;
    }

    function shareDialog() {
      if (!api.hasPro()) { api.proUpsell('pro_f4'); return; }
      let period = 'month', hide = false;
      openModal('<div class="modal-head"><div><div class="eyebrow">PRO</div><h2 class="display">' + t('sc_title') + '</h2></div><button class="icon-btn" data-close aria-label="close">' + icon('x') + '</button></div>' +
        '<div class="modal-body sc-body"><div class="sc-preview"><canvas id="scCanvas"></canvas></div><div class="sc-side">' +
        '<div class="field"><span>' + t('sc_period') + '</span><div class="seg sc-seg">' + ['today', 'week', 'month', 'all'].map(p => '<button type="button" data-p="' + p + '" class="' + (p === period ? 'on' : '') + '">' + t('sc_p_' + p) + '</button>').join('') + '</div></div>' +
        '<label class="check"><input type="checkbox" id="scHide"/><span>' + t('sc_hide') + '</span></label>' +
        '<p class="hint">' + t('sc_hint') + '</p>' +
        '<div class="sc-actions"><button class="btn btn-primary" id="scDownload">' + icon('download') + t('sc_download') + '</button>' +
        (navigator.share ? '<button class="btn btn-ghost" id="scShare">' + icon('upload') + t('sc_share') + '</button>' : '') + '</div></div></div>', 'lg');
      const canvas = $('#scCanvas');
      const redraw = () => drawCard(canvas, period, hide);
      $$('.sc-seg button').forEach(b => b.addEventListener('click', () => { period = b.dataset.p; $$('.sc-seg button').forEach(x => x.classList.toggle('on', x === b)); redraw(); }));
      $('#scHide').addEventListener('change', e => { hide = e.target.checked; redraw(); });
      const blob = () => new Promise(res => canvas.toBlob(res, 'image/png'));
      $('#scDownload').addEventListener('click', async () => {
        const b = await blob(); const a = document.createElement('a');
        a.href = URL.createObjectURL(b); a.download = 'entryx-pnl-' + period + '.png';
        document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1500);
        toast(t('sc_saved'), 'ok');
      });
      const sh = $('#scShare');
      if (sh) sh.addEventListener('click', async () => {
        try {
          const file = new File([await blob()], 'entryx-pnl.png', { type: 'image/png' });
          if (navigator.canShare && navigator.canShare({ files: [file] })) await navigator.share({ files: [file], title: 'EntryX' });
          else $('#scDownload').click();
        } catch (e) { /* user cancelled */ }
      });
      redraw();
    }

    /* ---------- welcome to Pro ---------- */
    function confetti() {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const cv = document.createElement('canvas');
      cv.className = 'confetti'; document.body.appendChild(cv);
      const c = cv.getContext('2d'); const W = cv.width = innerWidth, H = cv.height = innerHeight;
      const colors = ['#a855f7', '#c084fc', '#e9d5ff', '#ffffff', '#d4d6dd', '#3ddc97'];
      const ps = Array.from({ length: 160 }, () => ({ x: W / 2 + (Math.random() - .5) * 200, y: H * .35, vx: (Math.random() - .5) * 16, vy: -Math.random() * 16 - 4, s: 5 + Math.random() * 7, r: Math.random() * 6, vr: (Math.random() - .5) * .3, c: colors[Math.floor(Math.random() * colors.length)] }));
      const t0 = performance.now();
      const step = now => {
        c.clearRect(0, 0, W, H);
        ps.forEach(p => { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; c.save(); c.translate(p.x, p.y); c.rotate(p.r); c.fillStyle = p.c; c.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); c.restore(); });
        if (now - t0 < 3200) requestAnimationFrame(step); else cv.remove();
      };
      requestAnimationFrame(step);
    }

    function maybeWelcome() {
      if (!window.Cloud || !Cloud.enabled || !Cloud.user || !Cloud.isPro) return;
      const kind = Cloud.isPaid ? 'paid' : 'trial';
      const key = 'entryx:welcome:' + Cloud.user.id + ':' + kind;
      try { if (localStorage.getItem(key)) return; localStorage.setItem(key, '1'); } catch (e) { return; }
      const feats = [['coach', 'wf_ai'], ['upload', 'wf_import'], ['image', 'wf_share'], ['shield', 'wf_risk'], ['target', 'wf_prop'], ['sparkle', 'wf_sync']];
      openModal('<div class="welcome"><div class="welcome-badge">PRO</div>' +
        '<h2 class="display">' + (kind === 'trial' ? t('wl_trial_t', { n: Cloud.trialDaysLeft }) : t('wl_paid_t')) + '</h2>' +
        '<p>' + t(kind === 'trial' ? 'wl_trial_x' : 'wl_paid_x') + '</p>' +
        '<ul class="welcome-list">' + feats.map(f => '<li>' + icon(f[0]) + '<span>' + t(f[1]) + '</span></li>').join('') + '</ul>' +
        '<div class="modal-foot"><a class="btn btn-ghost" href="#/rules" data-close>' + t('wl_rules') + '</a><button class="btn btn-primary" data-close>' + t('wl_go') + '</button></div></div>', 'md');
      confetti();
    }

    api.VIEWS.rules = rulesView;
    return { dashboardWidgets, guardNewTrade, riskPctLimit, shareDialog, maybeWelcome, riskToday };
  };
})();
