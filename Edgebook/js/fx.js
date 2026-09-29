/* Edgebook — landing motion layer: intro, 3D wave, word reveals, live mock, micro-interactions */
(function () {
  'use strict';

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  const body = document.body;

  /* ---------- word splitting (keeps <em>, <br>, nested spans) ---------- */
  function split(el, cls) {
    let i = 0;
    const walk = node => {
      Array.from(node.childNodes).forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const s = document.createElement('span');
            s.className = cls;
            s.style.setProperty('--i', i++);
            s.textContent = part;
            frag.appendChild(s);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1 && !n.classList.contains(cls)) walk(n);
      });
    };
    walk(el);
    return i;
  }
  function keepSplit(el, cls, after) {
    if (!el) return;
    const run = () => { if (!el.querySelector('.' + cls)) { split(el, cls); if (after) after(); } };
    run();
    if ('MutationObserver' in window) new MutationObserver(run).observe(el, { childList: true });
  }

  keepSplit($('.hero-title'), 'hw');

  /* ---------- intro ---------- */
  const intro = $('#intro');
  let seen = false;
  try { seen = sessionStorage.getItem('eb-intro') === '1'; sessionStorage.setItem('eb-intro', '1'); } catch (e) { /* storage blocked */ }
  function ready() { body.classList.add('ready'); }
  if (!intro || reduce || seen) {
    if (intro) intro.remove();
    ready();
  } else {
    body.classList.add('intro-on');
    setTimeout(() => { intro.classList.add('out'); body.classList.remove('intro-on'); ready(); }, 1500);
    setTimeout(() => intro.remove(), 2500);
  }

  /* ---------- 3D wave field (canvas) ---------- */
  const cv = $('#wave');
  if (cv && cv.getContext) {
    const ctx = cv.getContext('2d');
    const COLS = 150, ROWS = 42, Z0 = 5, Z1 = 46, CAM = 2.4;
    let W = 0, H = 0, t = 0, running = true, raf = 0;
    const mouse = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4 };
    const size = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const horizon = H * 0.16, fx = W * 0.05, fy = H * 0.1;
      mouse.x += (mouse.tx - mouse.x) * 0.08; mouse.y += (mouse.ty - mouse.y) * 0.08;
      for (let r = ROWS - 1; r >= 0; r--) {
        const z = Z0 + (Z1 - Z0) * (r / (ROWS - 1));
        const sc = 1 / z;
        const depth = 1 - r / (ROWS - 1);
        for (let c = 0; c < COLS; c++) {
          const xw = (c - (COLS - 1) / 2) * 0.5;
          let h = Math.sin(c * 0.085 + t * 0.9) * 0.6 + Math.cos(r * 0.3 - t * 0.7) * 0.55 + Math.sin((c * 0.5 + r) * 0.07 + t * 0.4) * 0.4;
          const sx = W / 2 + xw * fx * sc * 6;
          let sy = horizon + (CAM - h) * fy * sc * 6;
          const dx = sx - mouse.x, dy = sy - mouse.y;
          const bump = Math.exp(-(dx * dx + dy * dy) / (2 * 140 * 140));
          if (bump > 0.01) { h += bump * 1.6; sy = horizon + (CAM - h) * fy * sc * 6; }
          if (sx < -10 || sx > W + 10 || sy > H + 10) continue;
          const edge = Math.min(1, Math.min(sx, W - sx) / (W * 0.22));
          const a = (0.18 + depth * 0.75) * edge * (0.55 + (h + 1.6) * 0.18);
          if (a <= 0.01) continue;
          const crest = h > 1.05 || bump > 0.25;
          ctx.fillStyle = crest ? 'rgba(241,217,160,' + Math.min(1, a * 1.3).toFixed(3) + ')' : 'rgba(200,190,165,' + (a * 0.5).toFixed(3) + ')';
          const s = Math.max(0.8, 1.9 * sc * 6 * (crest ? 1.3 : 1));
          ctx.fillRect(sx - s / 2, sy - s / 2, s, s);
        }
      }
    };
    const loop = () => {
      if (!running) { raf = 0; return; }
      t += 0.016;
      draw();
      raf = requestAnimationFrame(loop);
    };
    size();
    if (reduce) draw();
    else {
      raf = requestAnimationFrame(loop);
      const hero = $('.hero');
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(es => {
          running = es[0].isIntersecting && !document.hidden;
          if (running && !raf) raf = requestAnimationFrame(loop);
        }).observe(hero);
      }
      document.addEventListener('visibilitychange', () => {
        running = !document.hidden;
        if (running && !raf) raf = requestAnimationFrame(loop);
      });
      hero.addEventListener('pointermove', e => {
        const r = cv.getBoundingClientRect();
        mouse.tx = e.clientX - r.left; mouse.ty = e.clientY - r.top;
      });
      hero.addEventListener('pointerleave', () => { mouse.tx = mouse.ty = -1e4; });
    }
    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { size(); if (reduce) draw(); }, 120); });
  }

  /* ---------- manifesto: words light up with scroll ---------- */
  const man = $('.manifesto');
  function lightManifesto() {
    if (!man) return;
    const words = $$('.mw', man);
    if (reduce) { words.forEach(w => w.classList.add('lit')); return; }
    const r = man.getBoundingClientRect(), vh = window.innerHeight;
    const p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.3)));
    const n = Math.round(p * words.length * 1.05);
    words.forEach((w, i) => w.classList.toggle('lit', i < n));
  }
  keepSplit($('.manifesto p'), 'mw', () => lightManifesto());
  let mt = false;
  window.addEventListener('scroll', () => { if (!mt) { mt = true; requestAnimationFrame(() => { mt = false; lightManifesto(); }); } }, { passive: true });
  lightManifesto();

  /* ---------- live product mock ---------- */
  const eqHost = $('#mockEquity');
  if (eqHost && window.Charts) {
    const START = 14370.51;
    let seed = 42;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    let y = START;
    const pts = [{ y }];
    for (let i = 1; i < 90; i++) { y += 77 + (rnd() - 0.5) * 380; pts.push({ y }); }
    const fmt = v => (v < 0 ? '−' : '+') + '$' + Math.abs(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const plain = v => '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const drawEq = animate => Charts.line(eqHost, pts, {
      height: 190, base: START, animate,
      fmt: v => '$' + (v / 1000).toFixed(1) + 'k', label: () => '',
      tip: p => '<b class="mono">' + plain(p.y) + '</b>'
    });
    let lastNet = pts[pts.length - 1].y - START;
    const paintKpi = () => {
      const kb = $('#mockKpis .mock-kpi.main b');
      const net = pts[pts.length - 1].y - START;
      if (kb) {
        kb.textContent = fmt(net);
        kb.classList.remove('tick-up', 'tick-down'); void kb.offsetWidth;
        kb.classList.add(net >= lastNet ? 'tick-up' : 'tick-down');
      }
      const pc = $('.mock-chart .mock-card-head .mono');
      if (pc) pc.textContent = (net >= 0 ? '+' : '−') + Math.abs(net / 10000 * 100).toFixed(1) + '%';
      lastNet = net;
    };
    // Take over from the static mock once landing.js has rendered it
    setTimeout(() => { drawEq(true); paintKpi(); }, 50);

    const trades = [
      ['NVDA', 457.86, 2.14, 'Breakout'], ['BTCUSDT', 312.40, 1.62, 'Pullback'], ['XAUUSD', -96.20, -0.91, 'Reversal'],
      ['NAS100', 528.35, 2.71, 'Trend'], ['ETHUSDT', 163.89, 0.84, 'Range'], ['EURUSD', 241.10, 1.95, 'Breakout'], ['TSLA', -62.26, -0.58, 'News']
    ];
    let ti = 0;
    const f1 = $('.float.f1');
    const ok = '<path d="M20 6L9 17l-5-5"/>', bad = '<path d="M18 6L6 18M6 6l12 12"/>';
    const cycleTrade = () => {
      if (!f1) return;
      ti = (ti + 1) % trades.length;
      const tr = trades[ti], up = tr[1] >= 0;
      f1.classList.remove('swap'); void f1.offsetWidth; f1.classList.add('swap');
      const ic = $('.float-ic', f1);
      ic.className = 'float-ic ' + (up ? 'up' : 'down');
      $('svg', ic).innerHTML = up ? ok : bad;
      $('b', f1).innerHTML = tr[0] + ' <span class="mono ' + (up ? 'pos' : 'neg') + '">' + fmt(tr[1]) + '</span>';
      $('em', f1).textContent = (tr[2] >= 0 ? '+' : '−') + Math.abs(tr[2]).toFixed(2) + 'R · ' + tr[3];
    };

    const stage = $('#stage');
    let visible = true;
    if ('IntersectionObserver' in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(stage);
    if (!reduce) {
      let n = 0;
      setInterval(() => {
        if (!visible || document.hidden || !eqHost.isConnected) return;
        const last = pts[pts.length - 1].y;
        pts.push({ y: last + 40 + (rnd() - 0.45) * 300 });
        if (pts.length > 90) pts.shift();
        drawEq(false);
        paintKpi();
        if (++n % 3 === 0) cycleTrade();
      }, 1500);
    }
    let rs;
    window.addEventListener('resize', () => { clearTimeout(rs); rs = setTimeout(() => drawEq(false), 200); });
    // landing.js redraws the static chart on language change; take it back
    document.addEventListener('click', e => { if (e.target.closest('[data-lang]')) setTimeout(() => { drawEq(false); paintKpi(); }, 0); });
  }

  /* ---------- micro-interactions (desktop pointers only) ---------- */
  if (finePointer && !reduce) {
    // magnetic buttons
    $$('.btn-xl, .lp-nav-right .btn-primary').forEach(b => {
      b.classList.add('magnetic');
      b.addEventListener('pointermove', e => {
        const r = b.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.22, dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
        b.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)';
      });
      b.addEventListener('pointerleave', () => { b.style.transform = ''; });
    });
    // 3D tilt on feature tiles
    $$('.tile, .step, .price-card').forEach(tile => {
      tile.addEventListener('pointermove', e => {
        if (!tile.classList.contains('in') && tile.hasAttribute('data-reveal')) return;
        const r = tile.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -5, ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
        tile.style.transition = 'transform .35s cubic-bezier(.2,.8,.2,1), opacity 1s, filter 1s';
        tile.style.transform = 'perspective(1000px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateZ(0)';
      });
      tile.addEventListener('pointerleave', () => { tile.style.transform = ''; });
    });
    // soft cursor glow
    const glow = $('#cursorGlow');
    if (glow) {
      let gx = -600, gy = -600, tx = -600, ty = -600, on = false;
      window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; if (!on) { on = true; glow.classList.add('on'); tick(); } }, { passive: true });
      document.addEventListener('pointerleave', () => glow.classList.remove('on'));
      const tick = () => {
        gx += (tx - gx) * 0.14; gy += (ty - gy) * 0.14;
        glow.style.transform = 'translate3d(' + (gx - 300).toFixed(1) + 'px,' + (gy - 300).toFixed(1) + 'px,0)';
        if (Math.abs(tx - gx) + Math.abs(ty - gy) > 0.5) requestAnimationFrame(tick); else on = false;
      };
    }
  } else {
    const glow = $('#cursorGlow');
    if (glow) glow.remove();
  }
})();
