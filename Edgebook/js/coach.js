/* EntryX — AI coach chat (Pro). Talks to the `coach` Supabase Edge Function, which
   checks Pro + monthly quota server-side and calls Claude. Loaded before app.js. */
(function () {
  'use strict';

  window.CoachFeature = function (api) {
    const { t, esc, icon, money, pct, rfmt, stats, S, U, $, $$, toast } = api;
    const C = window.EDGEBOOK_CONFIG || {};
    const endpoint = () => (C.supabaseUrl || '').replace(/\/$/, '') + '/functions/v1/coach';
    const HIST_MAX = 40;
    let busy = false;
    let usage = null;

    /* ---------- chat history (per account, per browser) ---------- */
    const histKey = () => Store.key() + ':coach';
    const loadHist = () => { try { return JSON.parse(localStorage.getItem(histKey())) || []; } catch (e) { return []; } };
    const saveHist = h => { try { localStorage.setItem(histKey(), JSON.stringify(h.slice(-HIST_MAX))); } catch (e) { /* full */ } };

    /* ---------- journal snapshot sent as context ---------- */
    const n2 = v => (v == null || !isFinite(v) ? '-' : (+v).toFixed(2));
    const line = (label, s) => label + ': trades ' + s.closed + ', win ' + pct(s.winRate, 0) + ', net ' + n2(s.net) + ', avgR ' + n2(s.avgR) + ', PF ' + (s.pf === Infinity ? 'inf' : n2(s.pf));
    function groupLines(list, keyFn, sortByNet) {
      const m = new Map();
      list.forEach(x => [].concat(keyFn(x)).filter(k => k != null && k !== '').forEach(k => { if (!m.has(k)) m.set(k, []); m.get(k).push(x); }));
      const rows = [...m].map(([k, a]) => [k, stats(a)]);
      rows.sort((a, b) => sortByNet ? b[1].net - a[1].net : String(a[0]).localeCompare(String(b[0])));
      return rows.map(([k, s]) => '- ' + line(String(k), s)).join('\n');
    }
    function journalContext() {
      const s = S();
      const all = Store.all();
      const closed = all.filter(x => x.closed).sort((a, b) => a.when - b.when);
      const st = stats(closed);
      const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const out = [];
      if (s.demo) out.push('NOTE: this journal currently contains DEMO sample data, not the trader\'s real trades.');
      out.push('Currency: ' + s.currency + '. Starting balance: ' + n2(+s.balance) + '. Today: ' + U.dayKey(new Date()) + '.');
      out.push('Open positions: ' + all.filter(x => !x.closed).length + '.');
      out.push('\n## Overall (closed trades)');
      out.push(line('All', st) + ', total R ' + n2(st.totalR) + ', expectancy ' + n2(st.expectancy) + ', avg win ' + n2(st.avgWin) + ', avg loss ' + n2(st.avgLoss) +
        ', fees ' + n2(st.fees) + ', max win streak ' + st.maxWinStreak + ', max loss streak ' + st.maxLossStreak + ', green days ' + st.greenDays + '/' + st.tradingDays +
        ', avg hold min ' + (st.avgHold == null ? '-' : Math.round(st.avgHold)));
      out.push('\n## By month\n' + groupLines(closed, x => x.day.slice(0, 7)));
      out.push('\n## By setup\n' + groupLines(closed, x => x.setup || '(none)', true));
      out.push('\n## By symbol\n' + groupLines(closed, x => x.symbol, true));
      out.push('\n## By side\n' + groupLines(closed, x => x.side, true));
      out.push('\n## By weekday (entry)\n' + groupLines(closed, x => wd[x.weekday]));
      out.push('\n## By entry hour\n' + groupLines(closed.filter(x => x.hour != null), x => String(x.hour).padStart(2, '0') + ':00'));
      out.push('\n## By emotion\n' + groupLines(closed, x => x.emotion || '(none)', true));
      out.push('\n## By mistake tag\n' + (groupLines(closed, x => x.mistakes || [], true) || '- none tagged'));
      out.push('\n## By execution rating (1-5)\n' + groupLines(closed.filter(x => x.rating), x => 'rating ' + x.rating));
      const r = s.risk || {}, p = s.prop || {};
      if (r.on) out.push('\n## Risk rules\nmax daily loss ' + r.dailyLoss + ', max trades/day ' + r.maxTrades + ', max risk/trade ' + r.riskPct + '%');
      if (p.on) out.push('\n## Prop challenge\n' + p.name + ', size ' + p.size + ', target ' + p.target + '%, daily loss ' + p.daily + '%, max loss ' + p.max + '%, min days ' + p.minDays + ', started ' + p.start);
      out.push('\n## Recent closed trades (newest last)\ndate,symbol,side,setup,entry,exit,size,net,R,hold_min,emotion,mistakes,rating,note');
      closed.slice(-80).forEach(x => out.push([x.day + ' ' + String(x.hour == null ? '' : x.hour).padStart(2, '0') + 'h', x.symbol, x.side, x.setup || '', x.entryN, x.exitN, x.qtyN, n2(x.net), n2(x.r),
        x.holdMin == null ? '' : Math.round(x.holdMin), x.emotion || '', (x.mistakes || []).join('|'), x.rating || '', (x.notes || '').replace(/[\n,]+/g, ' ').slice(0, 90)].join(',')));
      const days = Object.keys(Store.state.journal).sort().slice(-14);
      if (days.length) {
        out.push('\n## Journal notes (last ' + days.length + ' days)');
        days.forEach(d => { const j = Store.state.journal[d]; out.push('- ' + d + (j.mood ? ' mood ' + j.mood + '/5' : '') + (j.focus ? ' focus ' + j.focus + '/5' : '') +
          (j.plan ? ' | plan: ' + j.plan.slice(0, 160) : '') + (j.review ? ' | review: ' + j.review.slice(0, 160) : '') + (j.lessons ? ' | lessons: ' + j.lessons.slice(0, 120) : '')); });
      }
      return out.join('\n').slice(0, 78000);
    }

    /* ---------- light markdown → safe HTML ---------- */
    function md(text) {
      const lines = esc(text).split('\n');
      let html = '', list = null;
      const inline = s => s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`([^`]+)`/g, '<code>$1</code>');
      const close = () => { if (list) { html += '</' + list + '>'; list = null; } };
      lines.forEach(l => {
        let m;
        if ((m = l.match(/^\s*[-•*]\s+(.*)/))) { if (list !== 'ul') { close(); html += '<ul>'; list = 'ul'; } html += '<li>' + inline(m[1]) + '</li>'; }
        else if ((m = l.match(/^\s*\d+[.)]\s+(.*)/))) { if (list !== 'ol') { close(); html += '<ol>'; list = 'ol'; } html += '<li>' + inline(m[1]) + '</li>'; }
        else if ((m = l.match(/^#{1,4}\s+(.*)/))) { close(); html += '<h4>' + inline(m[1]) + '</h4>'; }
        else if (!l.trim()) { close(); }
        else { close(); html += '<p>' + inline(l) + '</p>'; }
      });
      close();
      return html;
    }

    /* ---------- view ---------- */
    function view(v) {
      if (!C.supabaseUrl) {
        v.innerHTML = '<div class="empty pro-lock"><div class="empty-art">' + icon('coach') + '</div><h3>' + t('ai_title') + '</h3><p>' + t('ai_needs_server') + '</p></div>';
        return;
      }
      if (!api.hasPro()) {
        v.innerHTML = '<div class="empty pro-lock"><div class="empty-art">' + icon('coach') + '</div><h3>' + t('ai_lock_t') + '</h3><p>' + t('ai_lock_x') + '</p>' +
          '<div class="empty-actions"><a class="btn btn-primary" href="#/settings">' + icon('sparkle') + t('see_pro') + '</a></div></div>';
        return;
      }
      const hist = loadHist();
      const chips = ['ai_q1', 'ai_q2', 'ai_q3', 'ai_q4', 'ai_q5'].map(k => '<button class="chip" data-ask="' + k + '">' + t(k) + '</button>').join('');
      v.innerHTML =
        '<div class="coach card flush">' +
        '<div class="coach-head"><div class="coach-avatar">' + icon('coach') + '</div><div><b>' + t('ai_name') + '</b><small>' + t('ai_tagline') + '</small></div>' +
        '<div class="spacer"></div><span class="coach-usage" id="coachUsage">' + (usage ? t('ai_usage', { n: usage.used, m: usage.limit }) : '') + '</span>' +
        '<button class="icon-btn sm" id="coachClear" title="' + t('ai_clear') + '" aria-label="' + t('ai_clear') + '">' + icon('trash') + '</button></div>' +
        '<div class="coach-log" id="coachLog"></div>' +
        '<div class="coach-chips" id="coachChips">' + chips + '</div>' +
        '<form class="coach-input" id="coachForm"><textarea id="coachText" rows="1" maxlength="2000" placeholder="' + t('ai_ph') + '"></textarea>' +
        '<button class="btn btn-primary" type="submit" id="coachSend" aria-label="' + t('ai_send') + '">' + icon('send') + '</button></form>' +
        '<p class="coach-note">' + t('ai_disclaimer') + '</p></div>';

      const log = $('#coachLog');
      const paint = () => {
        const h = loadHist();
        log.innerHTML = (h.length ? '' : '<div class="coach-empty">' + icon('coach') + '<h3 class="display">' + t('ai_hello_t') + '</h3><p>' + t('ai_hello_x') + '</p></div>') +
          h.map(m => '<div class="msg ' + m.role + (m.error ? ' err' : '') + '">' + (m.role === 'assistant' ? '<div class="msg-av">' + icon('coach') + '</div>' : '') + '<div class="bubble">' + (m.role === 'assistant' ? md(m.content) : esc(m.content).replace(/\n/g, '<br>')) + '</div></div>').join('') +
          (busy ? '<div class="msg assistant"><div class="msg-av">' + icon('coach') + '</div><div class="bubble typing"><i></i><i></i><i></i><span>' + t('ai_thinking') + '</span></div></div>' : '');
        log.scrollTop = log.scrollHeight;
        $('#coachChips').hidden = h.length > 0 || busy;
        $('#coachSend').disabled = busy;
      };
      const ta = $('#coachText');
      const grow = () => { ta.style.height = 'auto'; ta.style.height = Math.min(160, ta.scrollHeight) + 'px'; };
      ta.addEventListener('input', grow);
      ta.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); $('#coachForm').requestSubmit ? $('#coachForm').requestSubmit() : send(ta.value); } });
      $('#coachForm').addEventListener('submit', e => { e.preventDefault(); send(ta.value); });
      $$('[data-ask]', v).forEach(b => b.addEventListener('click', () => send(t(b.dataset.ask))));
      $('#coachClear').addEventListener('click', () => { saveHist([]); paint(); });

      async function send(text) {
        text = String(text || '').trim();
        if (!text || busy) return;
        const h = loadHist().filter(m => !m.error);
        if (h.length && h[h.length - 1].role === 'user') h.pop();   // drop a question that never got an answer
        h.push({ role: 'user', content: text });
        saveHist(h);
        ta.value = ''; grow();
        busy = true; paint();
        let reply = null, err = null;
        try {
          const token = await Cloud.accessToken();
          if (!token) throw Object.assign(new Error('auth'), { code: 'unauthorized' });
          const res = await fetch(endpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token, apikey: C.supabaseAnonKey },
            body: JSON.stringify({ lang: S().lang, context: journalContext(), messages: h.slice(-16).map(m => ({ role: m.role, content: m.content })) })
          });
          let data = {};
          try { data = await res.json(); } catch (e) { /* non-json */ }
          if (!res.ok) throw Object.assign(new Error(data.error || 'http_' + res.status), { code: data.error || 'http', data });
          if (data.used != null) usage = { used: data.used, limit: data.limit };
          reply = data.refused ? t('ai_refused') : (data.reply || t('ai_empty')) + (data.truncated ? '\n\n' + t('ai_truncated') : '');
        } catch (e) {
          err = e;
        }
        busy = false;
        const h2 = loadHist();
        if (reply) h2.push({ role: 'assistant', content: reply });
        else {
          const code = err && err.code;
          const msg = code === 'limit' ? t('ai_err_limit', { m: (err.data && err.data.limit) || '' }) : code === 'not_pro' ? t('ai_err_pro') : code === 'unauthorized' ? t('ai_err_auth') :
            code === 'busy' ? t('ai_err_busy') : err instanceof TypeError ? t('ai_err_net') + ' (code: network)' : t('ai_err_generic') + ' (code: ' + String(code || (err && err.message) || 'unknown') + ((err && err.data && err.data.status) ? ' ' + err.data.status : '') + ')';
          h2.push({ role: 'assistant', content: msg, error: true });
        }
        saveHist(h2);
        if (!document.body.contains(log)) return;
        paint();
        const u = $('#coachUsage'); if (u && usage) u.textContent = t('ai_usage', { n: usage.used, m: usage.limit });
        if (!reply && err && err.code === 'not_pro') toast(t('ai_err_pro'), 'err');
      }
      paint();
      setTimeout(() => ta.focus(), 50);
    }

    api.VIEWS.coach = view;
    return { journalContext };
  };
})();
