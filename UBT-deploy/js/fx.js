/* BilimPath ҰБТ — small delights: confetti burst and soft UI sounds (no assets, WebAudio only) */
(() => {
  const reduced = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let canvas = null, ctx = null, parts = [], raf = 0;
  const COLORS = ["#12a6d4", "#f4b41a", "#41d79d", "#f472b6", "#8b5cf6", "#ff8080"];

  function ensureCanvas() {
    if (canvas) return;
    canvas = document.createElement("canvas");
    canvas.className = "fx-confetti";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
  }

  function resize() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(document.documentElement.clientWidth * dpr);
    canvas.height = Math.round(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function confetti(opts = {}) {
    if (reduced()) return;
    ensureCanvas();
    resize();
    const n = opts.count || 120;
    const x0 = opts.x != null ? opts.x : window.innerWidth / 2;
    const y0 = opts.y != null ? opts.y : window.innerHeight * 0.32;
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.15;
      const sp = 6 + Math.random() * 9;
      parts.push({
        x: x0, y: y0,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        w: 6 + Math.random() * 6, h: 8 + Math.random() * 8,
        r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.35,
        c: COLORS[i % COLORS.length], life: 0, max: 90 + Math.random() * 50,
        round: Math.random() < 0.3,
      });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }

  function tick() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    parts = parts.filter((p) => p.life < p.max && p.y < window.innerHeight + 40);
    for (const p of parts) {
      p.life++;
      p.vy += 0.28;
      p.vx *= 0.985;
      p.vy *= 0.985;
      p.x += p.vx;
      p.y += p.vy;
      p.r += p.vr;
      const fade = Math.min(1, (p.max - p.life) / 25);
      ctx.save();
      ctx.globalAlpha = Math.max(0, fade);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      if (p.round) {
        ctx.beginPath();
        ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r * 1.5)) + 2);
      }
      ctx.restore();
    }
    if (parts.length) raf = requestAnimationFrame(tick);
    else { raf = 0; ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); }
  }

  let audio = null;
  function tone(freq, start, dur, type = "sine", vol = 0.07) {
    const o = audio.createOscillator();
    const g = audio.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, audio.currentTime + start);
    g.gain.exponentialRampToValueAtTime(vol, audio.currentTime + start + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + start + dur);
    o.connect(g).connect(audio.destination);
    o.start(audio.currentTime + start);
    o.stop(audio.currentTime + start + dur + 0.02);
  }

  const SOUNDS = {
    ok: () => { tone(659, 0, 0.12); tone(988, 0.08, 0.16); },
    bad: () => { tone(247, 0, 0.2, "triangle", 0.06); tone(196, 0.1, 0.22, "triangle", 0.05); },
    level: () => { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.09, 0.22)); },
    badge: () => { tone(784, 0, 0.14); tone(1175, 0.1, 0.26); },
    done: () => { [659, 784, 988].forEach((f, i) => tone(f, i * 0.1, 0.24)); },
  };

  function sound(kind) {
    try {
      if (!audio) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        audio = new AC();
      }
      if (audio.state === "suspended") audio.resume();
      (SOUNDS[kind] || SOUNDS.ok)();
    } catch (e) { /* audio unavailable */ }
  }

  window.BP_FX = { confetti, sound };
})();
