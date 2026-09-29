/* Edgebook — dependency-free SVG charts */
(function () {
  'use strict';

  function niceTicks(min, max, count) {
    if (min === max) { min -= 1; max += 1; }
    const span = max - min;
    const raw = span / (count || 4);
    const mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const norm = raw / mag;
    const step = (norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10) * mag;
    const lo = Math.floor(min / step) * step;
    const hi = Math.ceil(max / step) * step;
    const out = [];
    for (let v = lo; v <= hi + step / 2; v += step) out.push(Math.abs(v) < step / 1e6 ? 0 : +v.toPrecision(12));
    return out;
  }

  function tipEl(host) {
    let d = host.querySelector('.chart-tip');
    if (!d) { d = document.createElement('div'); d.className = 'chart-tip'; host.appendChild(d); }
    return d;
  }

  function placeTip(host, tip, px, py) {
    const hw = host.clientWidth;
    const tw = tip.offsetWidth;
    let left = px + 14;
    if (left + tw > hw - 4) left = px - tw - 14;
    tip.style.left = Math.max(4, left) + 'px';
    tip.style.top = Math.max(0, py - tip.offsetHeight - 10) + 'px';
  }

  function empty(host, text) {
    host.innerHTML = '<div class="chart-empty">' + text + '</div>';
  }

  /* Area line chart with crosshair tooltip */
  function line(host, pts, o) {
    o = Object.assign({ height: 280, fmt: v => v, label: () => '', tip: () => '', base: null, empty: '—' }, o);
    if (!host) return;
    if (pts.length < 2) return empty(host, o.empty);
    const W = Math.max(host.clientWidth, 280), H = o.height;
    const P = { l: 70, r: 12, t: 16, b: 30 };
    const ys = pts.map(p => p.y);
    let min = Math.min(...ys), max = Math.max(...ys);
    if (o.base != null) { min = Math.min(min, o.base); max = Math.max(max, o.base); }
    const ticks = niceTicks(min, max, 4);
    min = ticks[0]; max = ticks[ticks.length - 1];
    const x = i => P.l + (W - P.l - P.r) * i / (pts.length - 1);
    const y = v => P.t + (H - P.t - P.b) * (1 - (v - min) / (max - min || 1));
    const d = pts.map((p, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(p.y).toFixed(1)).join(' ');
    const area = d + ' L' + x(pts.length - 1).toFixed(1) + ' ' + (H - P.b) + ' L' + P.l + ' ' + (H - P.b) + ' Z';
    const gid = 'g' + Math.random().toString(36).slice(2, 8);
    const up = pts[pts.length - 1].y >= (o.base != null ? o.base : pts[0].y);
    let s = '<svg class="chart-svg" viewBox="0 0 ' + W + ' ' + H + '" width="100%" height="' + H + '" role="img">';
    s += '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" class="' + (up ? 'st-up' : 'st-down') + '" style="stop-opacity:.32"/>' +
      '<stop offset="1" class="' + (up ? 'st-up' : 'st-down') + '" style="stop-opacity:0"/></linearGradient></defs>';
    ticks.forEach(v => {
      s += '<line class="grid" x1="' + P.l + '" x2="' + (W - P.r) + '" y1="' + y(v) + '" y2="' + y(v) + '"/>';
      s += '<text class="axis" x="' + (P.l - 12) + '" y="' + (y(v) + 4) + '" text-anchor="end">' + o.fmt(v) + '</text>';
    });
    if (o.base != null) s += '<line class="baseline" x1="' + P.l + '" x2="' + (W - P.r) + '" y1="' + y(o.base) + '" y2="' + y(o.base) + '"/>';
    const n = Math.min(6, pts.length);
    for (let k = 0; k < n; k++) {
      const i = Math.round(k * (pts.length - 1) / (n - 1));
      s += '<text class="axis" x="' + x(i) + '" y="' + (H - 8) + '" text-anchor="' + (k === 0 ? 'start' : k === n - 1 ? 'end' : 'middle') + '">' + o.label(pts[i], i) + '</text>';
    }
    s += '<path d="' + area + '" fill="url(#' + gid + ')"/>';
    s += '<path d="' + d + '" class="line ' + (up ? 'up' : 'down') + '"/>';
    s += '<line class="cross" x1="0" x2="0" y1="' + P.t + '" y2="' + (H - P.b) + '" style="opacity:0"/>';
    s += '<circle class="dot ' + (up ? 'up' : 'down') + '" r="5" cx="0" cy="0" style="opacity:0"/>';
    s += '<rect class="hit" x="' + P.l + '" y="0" width="' + (W - P.l - P.r) + '" height="' + H + '" fill="transparent"/></svg>';
    host.innerHTML = s;
    host.classList.add('chart-host');

    const svg = host.querySelector('svg'), cross = svg.querySelector('.cross'), dot = svg.querySelector('.dot');
    const tip = tipEl(host);
    const move = e => {
      const rect = svg.getBoundingClientRect();
      const cx = ((e.touches ? e.touches[0].clientX : e.clientX) - rect.left) * (W / rect.width);
      const i = Math.max(0, Math.min(pts.length - 1, Math.round((cx - P.l) / (W - P.l - P.r) * (pts.length - 1))));
      const px = x(i), py = y(pts[i].y);
      cross.setAttribute('x1', px); cross.setAttribute('x2', px); cross.style.opacity = 1;
      dot.setAttribute('cx', px); dot.setAttribute('cy', py); dot.style.opacity = 1;
      tip.innerHTML = o.tip(pts[i], i);
      tip.classList.add('show');
      placeTip(host, tip, px * rect.width / W, py * rect.height / H);
    };
    const leave = () => { cross.style.opacity = 0; dot.style.opacity = 0; tip.classList.remove('show'); };
    svg.addEventListener('mousemove', move);
    svg.addEventListener('touchmove', move, { passive: true });
    svg.addEventListener('mouseleave', leave);
    svg.addEventListener('touchend', leave);
  }

  /* Vertical +/- columns around zero */
  function columns(host, items, o) {
    o = Object.assign({ height: 220, fmt: v => v, tip: it => it.label, empty: '—', labelEvery: 0, neutral: false }, o);
    if (!host) return;
    if (!items.length || items.every(it => !it.value && !it.count)) return empty(host, o.empty);
    const W = Math.max(host.clientWidth, 260), H = o.height;
    const P = { l: 58, r: 8, t: 12, b: 28 };
    const vals = items.map(i => i.value);
    const ticks = niceTicks(Math.min(0, ...vals), Math.max(0, ...vals), 4);
    const min = ticks[0], max = ticks[ticks.length - 1];
    const y = v => P.t + (H - P.t - P.b) * (1 - (v - min) / (max - min || 1));
    const bw = (W - P.l - P.r) / items.length;
    const gap = Math.min(10, bw * 0.28);
    let s = '<svg class="chart-svg" viewBox="0 0 ' + W + ' ' + H + '" width="100%" height="' + H + '">';
    ticks.forEach(v => {
      s += '<line class="grid" x1="' + P.l + '" x2="' + (W - P.r) + '" y1="' + y(v) + '" y2="' + y(v) + '"/>';
      s += '<text class="axis" x="' + (P.l - 10) + '" y="' + (y(v) + 4) + '" text-anchor="end">' + o.fmt(v) + '</text>';
    });
    s += '<line class="baseline" x1="' + P.l + '" x2="' + (W - P.r) + '" y1="' + y(0) + '" y2="' + y(0) + '"/>';
    const every = o.labelEvery || Math.max(1, Math.ceil(items.length / Math.floor((W - P.l) / 42)));
    items.forEach((it, i) => {
      const x0 = P.l + i * bw + gap / 2, w = Math.max(1.5, bw - gap);
      const y0 = y(Math.max(0, it.value)), h = Math.max(it.value ? 1.5 : 0, Math.abs(y(it.value) - y(0)));
      const cls = o.neutral ? 'neu' : it.value >= 0 ? 'up' : 'down';
      s += '<rect class="col ' + cls + '" data-i="' + i + '" x="' + x0.toFixed(1) + '" y="' + y0.toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + h.toFixed(1) + '" rx="' + Math.min(4, w / 3) + '"/>';
      if (i % every === 0) s += '<text class="axis" x="' + (x0 + w / 2).toFixed(1) + '" y="' + (H - 8) + '" text-anchor="middle">' + it.label + '</text>';
      s += '<rect class="hit" data-i="' + i + '" x="' + (P.l + i * bw).toFixed(1) + '" y="0" width="' + bw.toFixed(1) + '" height="' + H + '" fill="transparent"/>';
    });
    s += '</svg>';
    host.innerHTML = s;
    host.classList.add('chart-host');
    const svg = host.querySelector('svg');
    const tip = tipEl(host);
    svg.addEventListener('mousemove', e => {
      const hit = e.target.closest('[data-i]');
      svg.querySelectorAll('.col.hover').forEach(c => c.classList.remove('hover'));
      if (!hit) { tip.classList.remove('show'); return; }
      const i = +hit.dataset.i;
      const col = svg.querySelector('.col[data-i="' + i + '"]');
      col.classList.add('hover');
      tip.innerHTML = o.tip(items[i], i);
      tip.classList.add('show');
      const rect = svg.getBoundingClientRect();
      const cx = (P.l + (i + 0.5) * bw) * rect.width / W;
      const cy = Math.min(y(items[i].value), y(0)) * rect.height / H;
      placeTip(host, tip, cx, cy);
    });
    svg.addEventListener('mouseleave', () => {
      tip.classList.remove('show');
      svg.querySelectorAll('.col.hover').forEach(c => c.classList.remove('hover'));
    });
  }

  /* HTML horizontal +/- bars */
  function hbars(host, items, o) {
    o = Object.assign({ fmt: v => v, empty: '—' }, o);
    if (!host) return;
    if (!items.length) return empty(host, o.empty);
    const max = Math.max(...items.map(i => Math.abs(i.value)), 1e-9);
    host.innerHTML = '<div class="hbars">' + items.map(it => {
      const w = Math.abs(it.value) / max * 100;
      return '<div class="hbar"><div class="hbar-label"><span>' + it.label + '</span>' + (it.sub ? '<small>' + it.sub + '</small>' : '') + '</div>' +
        '<div class="hbar-track"><span class="hbar-fill ' + (it.value >= 0 ? 'up' : 'down') + '" style="width:' + w.toFixed(1) + '%"></span></div>' +
        '<div class="hbar-val ' + (it.value >= 0 ? 'pos' : 'neg') + '">' + o.fmt(it.value) + '</div></div>';
    }).join('') + '</div>';
  }

  /* Donut ring (returns SVG markup) */
  function donut(parts, size, stroke) {
    size = size || 120; stroke = stroke || 12;
    const r = (size - stroke) / 2, c = 2 * Math.PI * r;
    const total = parts.reduce((a, p) => a + p.value, 0) || 1;
    let off = 0;
    let s = '<svg class="donut" viewBox="0 0 ' + size + ' ' + size + '" width="' + size + '" height="' + size + '">';
    s += '<circle class="donut-track" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke-width="' + stroke + '" fill="none"/>';
    parts.forEach(p => {
      const len = c * p.value / total;
      if (len <= 0) return;
      const gapLen = parts.filter(q => q.value > 0).length > 1 ? Math.min(3, len / 2) : 0;
      s += '<circle class="donut-seg ' + p.cls + '" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke-width="' + stroke + '" fill="none" ' +
        'stroke-dasharray="' + Math.max(0, len - gapLen).toFixed(2) + ' ' + (c - len + gapLen).toFixed(2) + '" stroke-dashoffset="' + (-off).toFixed(2) + '" ' +
        'transform="rotate(-90 ' + size / 2 + ' ' + size / 2 + ')" stroke-linecap="round"/>';
      off += len;
    });
    return s + '</svg>';
  }

  /* Tiny sparkline (returns SVG markup) */
  function spark(values, w, h) {
    w = w || 120; h = h || 34;
    if (values.length < 2) return '';
    const min = Math.min(...values), max = Math.max(...values);
    const x = i => i * w / (values.length - 1);
    const y = v => h - 3 - (h - 6) * (v - min) / (max - min || 1);
    const d = values.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
    const up = values[values.length - 1] >= values[0];
    return '<svg class="spark ' + (up ? 'up' : 'down') + '" viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" preserveAspectRatio="none"><path d="' + d + '"/></svg>';
  }

  window.Charts = { line, columns, hbars, donut, spark, niceTicks };
})();
