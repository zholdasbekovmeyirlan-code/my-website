/* BilimPath ҰБТ — app logic */
(() => {
  "use strict";
  const U = window.UBT;
  const SUBJ = U.subjects;
  const STORAGE_KEY = "bilimpath_ubt_v1";
  const L = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const VIEWS = ["home", "practice", "mock", "mistakes", "progress"];
  const SHORT = { history: "Тарих", readlit: "Оқу сауат.", mathlit: "Мат. сауат." };
  const FULL_MAX = { history: 20, readlit: 10, mathlit: 10, profile: 50 };

  const $ = (s, r = document) => r.querySelector(s);
  const $all = (s, r = document) => Array.from(r.querySelectorAll(s));

  const defaults = () => ({
    v: 1,
    theme: null,
    examDate: "",
    target: 100,
    goal: 30,
    combo: "math-physics",
    stats: {},
    topics: {},
    seen: {},
    mistakes: {},
    history: [],
    exam: null,
    last: null,
    day: { date: "", n: 0 },
    streak: { last: "", count: 0 },
  });

  let state = load();
  let view = "home";
  let P = null; // active practice session
  let mockScreen = "setup";
  let mockMode = "full";
  let reviewFilter = "wrong";
  let toastTimer = null;

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return Object.assign(defaults(), JSON.parse(raw));
    } catch (e) { /* storage unavailable */ }
    return defaults();
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
  }

  /* ---------- helpers ---------- */
  function shuffle(arr, rand = Math.random) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const pct = (ok, n) => (n ? Math.round((ok / n) * 100) : 0);

  function dayKey(d = new Date()) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  function yesterdayKey() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return dayKey(d);
  }
  const MONTHS = ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"];
  function fmtDate(ts) {
    const d = new Date(ts);
    return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
  }
  function fmtClock(ms) {
    const s = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }
  function comboName(key) {
    return key.split("-").map((k) => (SUBJ[k] ? SUBJ[k].name : k)).join(" – ");
  }
  function paras(text) {
    if (/<p[\s>]/.test(text)) return text;
    return text.split(/\n\s*\n/).map((p) => `<p>${p.trim()}</p>`).join("");
  }
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2400);
  }
  function streakNow() {
    const s = state.streak;
    return s.last === dayKey() || s.last === yesterdayKey() ? s.count : 0;
  }
  function bankSize(subj) {
    return U.items[subj].length;
  }

  /* ---------- theme ---------- */
  function applyTheme() {
    if (state.theme) document.documentElement.setAttribute("data-theme", state.theme);
  }
  function effectiveTheme() {
    const a = document.documentElement.getAttribute("data-theme");
    if (a === "dark" || a === "light") return a;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  /* ---------- questions ---------- */
  function instantiate(it, rand = Math.random) {
    const inst = { id: it.id, subj: it.subj, topic: it.topic, t: it.t, q: it.q, ex: it.ex, gen: !!it.gen };
    if (it.t === "m") {
      const tagged = it.pairs.map((p, i) => ({ text: p[1], k: i })).concat(it.wrong.map((w) => ({ text: w, k: -1 })));
      const sh = shuffle(tagged, rand);
      inst.left = it.pairs.map((p) => p[0]);
      inst.opts = sh.map((o) => o.text);
      inst.ans = it.pairs.map((_, i) => sh.findIndex((o) => o.k === i));
    } else {
      const tagged = it.right.map((x) => ({ text: x, ok: true })).concat(it.wrong.map((x) => ({ text: x, ok: false })));
      const sh = shuffle(tagged, rand);
      inst.opts = sh.map((o) => o.text);
      const idx = [];
      sh.forEach((o, i) => { if (o.ok) idx.push(i); });
      inst.ans = it.t === "x" ? idx : idx[0];
    }
    if (it.t === "c") {
      inst.ctxKey = it.ctx;
      inst.ctx = (U.contexts[it.subj] || {})[it.ctx] || "";
    }
    if (it.gen) inst.src = it;
    return inst;
  }

  function maxPts(inst) {
    if (inst.t === "m") return inst.left.length;
    return inst.t === "x" ? 2 : 1;
  }

  function isAnswered(inst, resp) {
    if (resp == null) return false;
    if (inst.t === "x") return resp.length > 0;
    if (inst.t === "m") return resp.every((v) => v != null);
    return true;
  }

  function grade(inst, resp) {
    const max = maxPts(inst);
    if (resp == null) return { pts: 0, max };
    if (inst.t === "x") {
      if (!resp.length) return { pts: 0, max };
      const want = new Set(inst.ans), got = new Set(resp);
      let err = 0;
      want.forEach((i) => { if (!got.has(i)) err++; });
      got.forEach((i) => { if (!want.has(i)) err++; });
      return { pts: err === 0 ? 2 : err === 1 ? 1 : 0, max };
    }
    if (inst.t === "m") {
      let p = 0;
      inst.ans.forEach((a, i) => { if (resp[i] === a) p++; });
      return { pts: p, max };
    }
    return { pts: resp === inst.ans ? 1 : 0, max };
  }

  function nextResp(inst, resp, el) {
    if (el.dataset.opt != null) {
      const i = Number(el.dataset.opt);
      if (inst.t === "x") {
        const cur = Array.isArray(resp) ? resp.slice() : [];
        const at = cur.indexOf(i);
        if (at >= 0) cur.splice(at, 1); else cur.push(i);
        return cur.sort((a, b) => a - b);
      }
      return i;
    }
    if (el.dataset.row != null) {
      const r = Number(el.dataset.row), c = Number(el.dataset.col);
      const cur = Array.isArray(resp) ? resp.slice() : inst.left.map(() => null);
      cur[r] = cur[r] === c ? null : c;
      return cur;
    }
    return resp;
  }

  function answerText(inst) {
    if (inst.t === "x") return "Дұрыс жауаптар: " + inst.ans.map((i) => L[i]).join(", ");
    if (inst.t === "m") return "Дұрыс сәйкестік: " + inst.ans.map((a, i) => `${i + 1}–${L[a]}`).join(", ");
    return "Дұрыс жауап: " + L[inst.ans];
  }

  function questionHTML(inst, o) {
    const resp = o.resp;
    const meta = `<div class="q-meta">
      ${o.num ? `<span class="q-num">№${o.num}</span>` : ""}
      <span class="q-topic">${SUBJ[inst.subj].name} · ${inst.topic}</span>
      <span class="pill pill-${inst.t}">${U.typeNames[inst.t]}</span>
      <span class="pill pill-pts">${maxPts(inst)} балл</span>
    </div>`;
    const ctx = inst.ctx ? `<div class="q-ctx"><div class="q-ctx-label">Мәтін</div>${paras(inst.ctx)}</div>` : "";
    let hint = "";
    if (inst.t === "x") hint = `<p class="q-hint">Бір немесе бірнеше дұрыс жауапты таңда.</p>`;
    if (inst.t === "m") hint = `<p class="q-hint">Әр тармаққа сәйкес жауапты таңда.</p>`;
    const dis = o.locked ? "disabled" : "";
    let body = "";
    if (inst.t === "m") {
      const list = inst.opts.map((txt, i) => `<div class="match-opt${o.reveal && inst.ans.includes(i) ? " right-ans" : ""}"><b>${L[i]}</b><span>${txt}</span></div>`).join("");
      const rows = inst.left.map((lt, r) => {
        const chosen = resp ? resp[r] : null;
        let rowCls = "match-row";
        if (o.reveal) rowCls += chosen === inst.ans[r] ? " right" : " wrong";
        const bubbles = inst.opts.map((_, i) => {
          let c = "mb";
          if (o.reveal) {
            if (i === inst.ans[r]) c += " right";
            else if (i === chosen) c += " wrong";
          } else if (i === chosen) c += " sel";
          return `<button type="button" class="${c}" data-row="${r}" data-col="${i}" ${dis} aria-label="${r + 1}-тармақ: ${L[i]}" aria-pressed="${i === chosen}">${L[i]}</button>`;
        }).join("");
        return `<div class="${rowCls}"><div class="match-left"><b>${r + 1}.</b>${lt}</div><div class="match-bubbles">${bubbles}</div></div>`;
      }).join("");
      body = `<div class="match-opts">${list}</div><div class="match-rows">${rows}</div>`;
    } else {
      const multi = inst.t === "x";
      const opts = inst.opts.map((txt, i) => {
        const chosen = multi ? (resp || []).includes(i) : resp === i;
        let cls = "opt";
        if (o.reveal) {
          const isRight = multi ? inst.ans.includes(i) : inst.ans === i;
          if (isRight && chosen) cls += " right";
          else if (isRight) cls += multi ? " missed" : " right";
          else if (chosen) cls += " wrong";
        } else if (chosen) cls += " sel";
        return `<button type="button" class="${cls}" data-opt="${i}" ${dis} aria-pressed="${chosen}"><span class="bubble">${L[i]}</span><span>${txt}</span></button>`;
      }).join("");
      body = `<div class="opts${multi ? " multi" : ""}">${opts}</div>`;
    }
    let explain = "";
    if (o.reveal && o.explain !== false) {
      const g = grade(inst, resp);
      const answered = isAnswered(inst, resp);
      const ok = g.pts === g.max;
      const verdict = !answered ? "Жауап берілмеді" : ok ? `Дұрыс · ${g.pts} балл` : g.pts > 0 ? `Жартылай дұрыс · ${g.pts} / ${g.max} балл` : `Қате · 0 / ${g.max} балл`;
      explain = `<div class="explain ${ok ? "ok" : "bad"}"><b class="verdict">${verdict}</b><p>${answerText(inst)}.${inst.ex ? " " + inst.ex : ""}</p></div>`;
    }
    return `<article class="q-card" data-qid="${inst.id}">${meta}${ctx}<p class="q-text">${inst.q}</p>${hint}${body}${o.actions || ""}${explain}</article>`;
  }

  /* ---------- progress bookkeeping ---------- */
  function bumpDay(k = 1) {
    const today = dayKey();
    if (state.day.date !== today) state.day = { date: today, n: 0 };
    state.day.n += k;
    if (state.streak.last !== today) {
      state.streak.count = state.streak.last === yesterdayKey() ? state.streak.count + 1 : 1;
      state.streak.last = today;
    }
  }

  function recordAnswer(inst, pts, max) {
    const ok = pts === max;
    const s = state.stats[inst.subj] || (state.stats[inst.subj] = { n: 0, ok: 0 });
    s.n++;
    if (ok) s.ok++;
    const tk = inst.subj + "|" + inst.topic;
    const ts = state.topics[tk] || (state.topics[tk] = { n: 0, ok: 0 });
    ts.n++;
    if (ok) ts.ok++;
    if (!inst.gen) state.seen[inst.id] = 1;
    let cleared = false;
    if (!ok) {
      state.mistakes[inst.id] = { id: inst.id, subj: inst.subj, at: Date.now(), item: inst.gen ? inst.src : undefined };
    } else if (state.mistakes[inst.id]) {
      delete state.mistakes[inst.id];
      cleared = true;
    }
    bumpDay();
    return cleared;
  }

  /* ---------- navigation ---------- */
  function go(next, opts = {}) {
    if (!VIEWS.includes(next)) next = "home";
    view = next;
    $all(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + next));
    $all(".nav [data-nav], .tabbar [data-nav]").forEach((b) => b.classList.toggle("active", b.dataset.nav === next));
    try { history.replaceState(null, "", "#" + next); } catch (e) { /* sandboxed */ }
    renderView();
    if (!opts.keepScroll) window.scrollTo(0, 0);
    if (opts.focus) {
      const el = document.getElementById(opts.focus);
      if (el) setTimeout(() => el.focus(), 60);
    }
  }

  function renderView() {
    if (view === "home") renderHome();
    else if (view === "practice") renderPractice();
    else if (view === "mock") renderMock();
    else if (view === "mistakes") renderMistakes();
    else if (view === "progress") renderProgress();
    updateChrome();
  }

  function updateChrome() {
    const n = Object.keys(state.mistakes).length;
    $("#navMistakes").textContent = n ? String(n) : "";
    $("#streakChip").textContent = `${streakNow()} күн`;
    const banner = $("#examBanner");
    banner.hidden = !(state.exam && view !== "mock");
    if (state.exam) $("#examBannerTime").textContent = fmtClock(state.exam.endAt - Date.now());
  }

  /* ---------- home ---------- */
  function bestScore() {
    const full = state.history.filter((h) => h.mode === "full");
    if (!full.length) return null;
    return Math.max(...full.map((h) => h.total));
  }

  function gaugeSVG(value, target) {
    const cx = 110, cy = 112, r = 88;
    const at = (f) => {
      const a = Math.PI - f * Math.PI;
      return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
    };
    const tick = (f, cls) => {
      const a = Math.PI - f * Math.PI;
      const x1 = cx + (r - 12) * Math.cos(a), y1 = cy - (r - 12) * Math.sin(a);
      const x2 = cx + (r + 12) * Math.cos(a), y2 = cy - (r + 12) * Math.sin(a);
      return `<line class="${cls}" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`;
    };
    const [sx, sy] = at(0);
    const [ex, ey] = at(1);
    let val = "";
    if (value != null && value > 0) {
      const [vx, vy] = at(Math.min(1, value / 140));
      val = `<path class="g-val" d="M ${sx} ${sy} A ${r} ${r} 0 0 1 ${vx.toFixed(1)} ${vy.toFixed(1)}"/>`;
    }
    return `<svg viewBox="0 0 220 136" role="img" aria-label="Үздік балл ${value == null ? "жоқ" : value} / 140">
      <path class="g-track" d="M ${sx} ${sy} A ${r} ${r} 0 0 1 ${ex} ${ey}"/>
      ${val}
      ${tick(50 / 140, "g-tick")}
      ${tick(Math.min(1, target / 140), "g-tick-target")}
      <text class="g-num" x="${cx}" y="${cy - 14}" text-anchor="middle">${value == null ? "—" : value}</text>
      <text class="g-cap" x="${cx}" y="${cy + 4}" text-anchor="middle">үздік балл / 140</text>
      <text class="g-lbl" x="${sx}" y="${cy + 20}" text-anchor="middle">0</text>
      <text class="g-lbl" x="${ex}" y="${cy + 20}" text-anchor="middle">140</text>
    </svg>`;
  }

  function weakTopics(limit = 5) {
    return Object.entries(state.topics)
      .filter(([, v]) => v.n >= 3 && v.ok / v.n < 0.8)
      .map(([k, v]) => ({ subj: k.split("|")[0], topic: k.split("|").slice(1).join("|"), n: v.n, acc: pct(v.ok, v.n) }))
      .filter((w) => SUBJ[w.subj])
      .sort((a, b) => a.acc - b.acc || b.n - a.n)
      .slice(0, limit);
  }

  function renderHome() {
    const totals = Object.values(state.stats).reduce((a, s) => ({ n: a.n + s.n, ok: a.ok + s.ok }), { n: 0, ok: 0 });
    const best = bestScore();
    $("#heroStats").innerHTML = `
      <div class="stat"><b>${totals.n}</b><span>шешілген сұрақ</span></div>
      <div class="stat"><b>${totals.n ? pct(totals.ok, totals.n) + "%" : "—"}</b><span>дәлдік</span></div>
      <div class="stat"><b>${state.history.length}</b><span>сынақ тапсырылды</span></div>`;

    const daysEl = $("#ticketDays"), subEl = $("#ticketSub");
    if (state.examDate) {
      const exam = new Date(state.examDate + "T00:00:00");
      const today = new Date(dayKey() + "T00:00:00");
      const days = Math.round((exam - today) / 86400000);
      if (days >= 0) {
        daysEl.innerHTML = `${days}<small>күн</small>`;
        subEl.textContent = `${exam.getDate()} ${MONTHS[exam.getMonth()]} ${exam.getFullYear()} · күніне ${Math.max(1, Math.ceil(400 / Math.max(days, 1)))} сұрақтан шешсең, 400 сұрақ жинайсың`;
      } else {
        daysEl.innerHTML = `0<small>күн</small>`;
        subEl.textContent = "Емтихан күні өтіп кетті. Жаңа күнді «Прогресс» бөлімінде қой.";
      }
    } else {
      daysEl.textContent = "—";
      subEl.textContent = "Емтихан күнін «Прогресс» бөлімінде қой";
    }
    $("#gauge").innerHTML = gaugeSVG(best, state.target);
    const last = state.history[state.history.length - 1];
    $("#ticketFoot").innerHTML = `<span>Мақсат: <b>${state.target}</b></span><span>Шек: <b>50</b></span><span>Соңғы: <b>${last ? `${last.total}/${last.max}` : "—"}</b></span>`;

    const goal = state.goal || 30;
    const done = state.day.date === dayKey() ? state.day.n : 0;
    const C = 2 * Math.PI * 40;
    const f = Math.min(1, done / goal);
    const nMist = Object.keys(state.mistakes).length;
    $("#todayBox").innerHTML = `
      <div class="ring"><svg viewBox="0 0 96 96" aria-hidden="true">
        <circle class="r-track" cx="48" cy="48" r="40"/>
        ${f > 0 ? `<circle class="r-val" cx="48" cy="48" r="40" stroke-dasharray="${(f * C).toFixed(1)} ${C.toFixed(1)}"/>` : ""}
        <text class="r-num" x="48" y="52" text-anchor="middle">${done}</text>
        <text class="r-cap" x="48" y="66" text-anchor="middle">/ ${goal}</text>
      </svg></div>
      <div class="today-text">
        <p>${done >= goal ? "Бүгінгі мақсат орындалды. Жарайсың!" : `Бүгін ${done} сұрақ шештің. Мақсатқа дейін ${goal - done} сұрақ қалды.`}</p>
        <div class="row">
          <button type="button" class="btn btn-primary btn-sm" data-nav="practice">Жаттығуға өту</button>
          ${nMist ? `<button type="button" class="btn btn-ghost btn-sm" data-act="mistakes-all">Қателерді қайталау · ${nMist}</button>` : ""}
        </div>
      </div>`;

    const weak = weakTopics();
    $("#weakTopics").innerHTML = weak.length
      ? weak.map((w) => `<button type="button" class="weak-item" data-act="weak" data-subj="${w.subj}" data-topic="${encodeURIComponent(w.topic)}"><span>${w.topic}</span><small>${SUBJ[w.subj].name} · ${w.n} жауап</small><b>${w.acc}%</b></button>`).join("")
      : `<p class="empty">Әр тақырыптан кемінде 3 сұрақ шешкенде, дәлдігі 80%-дан төмен тақырыптар осында шығады.</p>`;
  }

  /* ---------- practice ---------- */
  function subjectCard(k) {
    const s = SUBJ[k];
    const st = state.stats[k];
    const acc = st && st.n ? pct(st.ok, st.n) : null;
    const hasGen = U.gens[k].length > 0;
    return `<button type="button" class="subject-card" data-act="open-subj" data-subj="${k}">
      <div class="sc-top"><span class="sc-name">${s.name}</span><span class="sc-code">${s.code}</span></div>
      <div class="sc-meta"><span>${bankSize(k)} сұрақ</span>${hasGen ? `<span class="sc-gen">+ шексіз есеп</span>` : ""}<span>${acc == null ? "әлі шешілмеген" : `дәлдік ${acc}%`}</span></div>
      <div class="meter"><i style="width:${acc || 0}%"></i></div>
    </button>`;
  }

  function renderPractice() {
    const keys = Object.keys(SUBJ);
    $("#gridMandatory").innerHTML = keys.filter((k) => SUBJ[k].kind === "mandatory").map(subjectCard).join("");
    $("#gridProfile").innerHTML = keys.filter((k) => SUBJ[k].kind === "profile").map(subjectCard).join("");
    $("#subjectPicker").hidden = !!P;
    $("#practiceRun").hidden = !P;
    if (P) renderPracticeRun();
  }

  function openPractice(subj, opts = {}) {
    P = { subj, topic: opts.topic || null, mode: opts.mode || "all", n: 0, ok: 0, pts: 0, max: 0, recent: [], inst: null, resp: null, checked: false, queue: null };
    if (P.mode === "mistakes") P.queue = mistakeQueue(subj);
    if (view !== "practice") go("practice");
    nextPractice();
  }

  function mistakeQueue(subj) {
    return shuffle(Object.values(state.mistakes).filter((m) => subj === "all" || m.subj === subj));
  }

  function practiceTopics() {
    if (P.subj === "all") return [];
    if (P.mode === "gen") return Array.from(new Set(U.gens[P.subj].map((g) => g.topic))).map((t) => [t, 0]);
    const map = {};
    U.items[P.subj].forEach((it) => { map[it.topic] = (map[it.topic] || 0) + 1; });
    U.gens[P.subj].forEach((g) => { if (!(g.topic in map)) map[g.topic] = 0; });
    return Object.entries(map);
  }

  function pickPractice() {
    if (P.mode === "mistakes") {
      while (P.queue.length) {
        const m = P.queue.shift();
        const it = m.item || U.byId[m.id];
        if (it && state.mistakes[m.id]) return instantiate(it);
      }
      return null;
    }
    const items = U.items[P.subj].filter((it) => !P.topic || it.topic === P.topic);
    const gens = U.gens[P.subj].filter((g) => !P.topic || g.topic === P.topic);
    const genInst = () => {
      const it = U.runGen(pick(gens), Math.random);
      return it ? instantiate(it) : null;
    };
    if (P.mode === "gen" && gens.length) return genInst();
    let pool = items;
    if (P.mode === "new") {
      pool = items.filter((it) => !state.seen[it.id]);
      if (!pool.length) {
        toast("Бұл бөлімдегі барлық сұрақты шештің — енді барлығынан беріледі");
        P.mode = "all";
        pool = items;
      }
    }
    const lastInst = P.inst;
    if (lastInst && lastInst.t === "c") {
      const sib = pool.filter((it) => it.t === "c" && it.ctx === lastInst.ctxKey && !P.recent.includes(it.id));
      if (sib.length) return remember(sib[0], pool.length);
    }
    if (gens.length && P.mode === "all" && (Math.random() < 0.3 || !pool.length)) return genInst();
    if (!pool.length) return gens.length ? genInst() : null;
    const fresh = pool.filter((it) => !P.recent.includes(it.id));
    return remember(pick(fresh.length ? fresh : pool), pool.length);
  }

  function remember(it, poolSize) {
    P.recent.push(it.id);
    const cap = Math.min(40, Math.floor(poolSize * 0.7));
    while (P.recent.length > cap) P.recent.shift();
    return instantiate(it);
  }

  function nextPractice() {
    P.inst = pickPractice();
    P.resp = null;
    P.checked = false;
    renderPracticeRun();
    const card = $("#practiceCard");
    if (card && card.getBoundingClientRect().top < 60) card.scrollIntoView({ block: "start" });
  }

  function renderPracticeRun() {
    $("#subjectPicker").hidden = true;
    $("#practiceRun").hidden = false;
    $("#practiceSubject").textContent = P.subj === "all" ? "Барлық қателер" : SUBJ[P.subj].name;
    $("#practiceScore").textContent = `${P.ok} / ${P.n} дұрыс`;

    const nMist = Object.values(state.mistakes).filter((m) => P.subj === "all" || m.subj === P.subj).length;
    const modes = [];
    if (P.subj !== "all") {
      modes.push(["all", "Барлығы"], ["new", "Жаңа сұрақтар"]);
      if (U.gens[P.subj].length) modes.push(["gen", "Шексіз есептер"]);
    }
    if (nMist || P.mode === "mistakes") modes.push(["mistakes", `Қателер · ${nMist}`]);
    $("#practiceModes").innerHTML = modes.map(([k, label]) => `<button type="button" class="chip-btn${P.mode === k ? " active" : ""}" data-act="p-mode" data-mode="${k}">${label}</button>`).join("");

    const topics = P.mode === "mistakes" ? [] : practiceTopics();
    const topicsEl = $("#practiceTopics");
    topicsEl.hidden = topics.length < 2;
    topicsEl.innerHTML = `<button type="button" class="chip-btn${!P.topic ? " active" : ""}" data-act="p-topic" data-topic="">Барлық тақырып</button>` +
      topics.map(([t, n]) => `<button type="button" class="chip-btn${P.topic === t ? " active" : ""}" data-act="p-topic" data-topic="${encodeURIComponent(t)}">${t}<small>${n || "∞"}</small></button>`).join("");

    const card = $("#practiceCard");
    if (!P.inst) {
      card.innerHTML = P.mode === "mistakes"
        ? `<div class="empty-state"><p>Қателер тізімі бос. Барлығын дұрыс шештің!</p><button type="button" class="btn btn-primary" data-act="p-mode" data-mode="all"${P.subj === "all" ? " hidden" : ""}>Жаттығуды жалғастыру</button></div>`
        : `<div class="empty-state"><p>Бұл тақырыпта сұрақ жоқ.</p></div>`;
      return;
    }
    const inst = P.inst;
    const needsCheck = inst.t === "x" || inst.t === "m";
    let actions;
    if (!P.checked) {
      actions = `<div class="q-actions">
        ${needsCheck ? `<button type="button" class="btn btn-primary" data-act="p-check" ${isAnswered(inst, P.resp) ? "" : "disabled"}>Тексеру</button>` : ""}
        <button type="button" class="btn btn-ghost" data-act="p-skip">Өткізу</button>
        <span class="spacer"></span><span class="kbd-hint">1–${inst.opts.length} · Enter</span>
      </div>`;
    } else {
      actions = `<div class="q-actions"><button type="button" class="btn btn-primary" data-act="p-next">Келесі →</button><span class="spacer"></span><span class="kbd-hint">Enter</span></div>`;
    }
    card.innerHTML = questionHTML(inst, { resp: P.resp, reveal: P.checked, locked: P.checked, actions });
  }

  function practiceCheck() {
    if (!P || !P.inst || P.checked || !isAnswered(P.inst, P.resp)) return;
    const g = grade(P.inst, P.resp);
    P.checked = true;
    P.n++;
    P.pts += g.pts;
    P.max += g.max;
    if (g.pts === g.max) P.ok++;
    const cleared = recordAnswer(P.inst, g.pts, g.max);
    save();
    if (cleared) toast("Бұл сұрақ қателер тізімінен шықты");
    renderPracticeRun();
    updateChrome();
  }

  function practiceClick(el) {
    if (!P || !P.inst || P.checked) return;
    P.resp = nextResp(P.inst, P.resp, el);
    if (P.inst.t === "s" || P.inst.t === "c") practiceCheck();
    else renderPracticeRun();
  }

  /* ---------- mock exam ---------- */
  function buildSection(subj, plan) {
    const all = U.items[subj], gens = U.gens[subj];
    const used = new Set(), out = [];
    const take = (it) => { used.add(it.id); out.push(instantiate(it)); };
    const unused = (t) => shuffle(all.filter((it) => it.t === t && !used.has(it.id)));
    const genOne = () => {
      for (let k = 0; k < 8; k++) {
        const it = U.runGen(pick(gens), Math.random);
        if (it && !used.has(it.id)) return it;
      }
      return null;
    };
    function singles(n) {
      let want = n;
      const gTarget = gens.length ? Math.round(n * 0.3) : 0;
      unused("s").slice(0, n - gTarget).forEach((it) => { take(it); want--; });
      while (want > 0 && gens.length) {
        const it = genOne();
        if (!it) break;
        take(it);
        want--;
      }
      for (const t of ["s", "c", "m", "x"]) {
        if (want <= 0) break;
        unused(t).slice(0, want).forEach((it) => { take(it); want--; });
      }
    }
    plan.forEach(([t, n]) => {
      if (t === "s") { singles(n); return; }
      if (t === "c") {
        const groups = {};
        all.filter((it) => it.t === "c" && !used.has(it.id)).forEach((it) => { (groups[it.ctx] = groups[it.ctx] || []).push(it); });
        let need = n;
        shuffle(Object.values(groups)).forEach((g) => {
          if (need <= 0) return;
          g.slice(0, need).forEach((it) => { take(it); need--; });
        });
        if (need > 0) singles(need);
        return;
      }
      const list = unused(t).slice(0, n);
      list.forEach(take);
      if (list.length < n) singles(n - list.length);
    });
    return out;
  }

  function buildExam(comboKey, mode) {
    const plan = U.plans[mode];
    const [p1, p2] = comboKey.split("-");
    const sections = ["history", "readlit", "mathlit", p1, p2].map((subj) => ({
      subj,
      items: buildSection(subj, SUBJ[subj].kind === "profile" ? plan.profile : plan[subj]),
    }));
    const now = Date.now();
    return { id: now, combo: comboKey, mode, startedAt: now, endAt: now + plan.minutes * 60000, sections, resp: {}, flags: {}, cur: [0, 0] };
  }

  function planStats(mode) {
    const plan = U.plans[mode];
    const count = (pl) => pl.reduce((a, [, n]) => a + n, 0);
    const points = (pl) => pl.reduce((a, [t, n]) => a + n * (t === "m" || t === "x" ? 2 : 1), 0);
    const rows = [
      ["Қазақстан тарихы", count(plan.history), points(plan.history)],
      ["Оқу сауаттылығы", count(plan.readlit), points(plan.readlit)],
      ["Математикалық сауаттылық", count(plan.mathlit), points(plan.mathlit)],
      ["1-бейіндік пән", count(plan.profile), points(plan.profile)],
      ["2-бейіндік пән", count(plan.profile), points(plan.profile)],
    ];
    const tasks = rows.reduce((a, r) => a + r[1], 0);
    const pts = rows.reduce((a, r) => a + r[2], 0);
    return { rows, tasks, pts, minutes: plan.minutes };
  }

  function renderMock() {
    if (state.exam) mockScreen = "run";
    else if (mockScreen === "run") mockScreen = state.last ? "result" : "setup";
    if (mockScreen === "result" && !state.last) mockScreen = "setup";
    $("#mockSetup").hidden = mockScreen !== "setup";
    $("#mockRun").hidden = mockScreen !== "run";
    $("#mockResult").hidden = mockScreen !== "result";
    if (mockScreen === "setup") renderMockSetup();
    else if (mockScreen === "run") renderExam();
    else renderResult();
  }

  function renderMockSetup() {
    if (!U.combos.some((c) => c.join("-") === state.combo)) state.combo = U.combos[0].join("-");
    $("#comboList").innerHTML = U.combos.map((c) => {
      const key = c.join("-");
      return `<button type="button" class="radio-card" role="radio" aria-checked="${key === state.combo}" data-act="combo" data-combo="${key}">
        <span class="rc-body"><span>${comboName(key)}</span><small>Сұрақ банкі: ${bankSize(c[0])} + ${bankSize(c[1])}</small></span>
      </button>`;
    }).join("");
    $("#mockModes").innerHTML = ["full", "mini"].map((m) => {
      const st = planStats(m);
      return `<button type="button" class="radio-card" role="radio" aria-checked="${m === mockMode}" data-act="mock-mode" data-mode="${m}">
        <span class="rc-body"><span>${U.plans[m].label}</span><small>${st.tasks} тапсырма · ${st.pts} балл · ${st.minutes} минут</small></span>
      </button>`;
    }).join("");
    const st = planStats(mockMode);
    const [p1, p2] = state.combo.split("-");
    const names = ["Қазақстан тарихы", "Оқу сауаттылығы", "Математикалық сауаттылық", SUBJ[p1].name, SUBJ[p2].name];
    $("#mockSummary").innerHTML = `<table><tbody>${st.rows.map((r, i) => `<tr><td>${names[i]}</td><td class="num">${r[1]} · ${r[2]} б.</td></tr>`).join("")}
      <tr><td><b>Барлығы · ${st.minutes} мин</b></td><td class="num"><b>${st.tasks} · ${st.pts} б.</b></td></tr></tbody></table>`;
  }

  function startExam() {
    state.exam = buildExam(state.combo, mockMode);
    save();
    mockScreen = "run";
    renderMock();
    updateChrome();
    window.scrollTo(0, 0);
  }

  function examResp(i, j) {
    return state.exam.resp[i + "-" + j];
  }

  function answeredIn(i) {
    const sec = state.exam.sections[i];
    return sec.items.filter((inst, j) => isAnswered(inst, examResp(i, j))).length;
  }

  function renderExam() {
    const ex = state.exam;
    const [si, qi] = ex.cur;
    const sec = ex.sections[si];
    $("#examTabs").innerHTML = ex.sections.map((s, i) => `<button type="button" class="exam-tab${i === si ? " active" : ""}" role="tab" aria-selected="${i === si}" data-act="ex-sec" data-sec="${i}">${SHORT[s.subj] || SUBJ[s.subj].name}<small>${answeredIn(i)}/${s.items.length}</small></button>`).join("");
    $("#paletteTitle").textContent = `${SUBJ[sec.subj].name} · ${answeredIn(si)}/${sec.items.length}`;
    $("#examPalette").innerHTML = sec.items.map((inst, j) => {
      let c = "pal";
      if (isAnswered(inst, examResp(si, j))) c += " done";
      if (ex.flags[si + "-" + j]) c += " flag";
      if (j === qi) c += " cur";
      return `<button type="button" class="${c}" data-act="ex-q" data-q="${j}" aria-label="${j + 1}-сұрақ">${j + 1}</button>`;
    }).join("");
    const inst = sec.items[qi];
    $("#examCard").innerHTML = inst ? questionHTML(inst, { num: qi + 1, resp: examResp(si, qi), reveal: false, locked: false }) : "";
    $("#examPrev").disabled = si === 0 && qi === 0;
    const lastQ = si === ex.sections.length - 1 && qi === sec.items.length - 1;
    $("#examNext").textContent = lastQ ? "Аяқтау" : "Келесі →";
    const flagBtn = $("#examFlag");
    const flagged = !!ex.flags[si + "-" + qi];
    flagBtn.classList.toggle("on", flagged);
    flagBtn.textContent = flagged ? "Белгіні алу" : "Белгілеу";
    tickTimer();
  }

  function examMove(delta) {
    const ex = state.exam;
    let [si, qi] = ex.cur;
    qi += delta;
    if (qi < 0) {
      if (si === 0) return;
      si--;
      qi = ex.sections[si].items.length - 1;
    } else if (qi >= ex.sections[si].items.length) {
      if (si === ex.sections.length - 1) { askFinish(); return; }
      si++;
      qi = 0;
    }
    ex.cur = [si, qi];
    save();
    renderExam();
    scrollToCard("#examCard");
  }

  function scrollToCard(sel) {
    const el = $(sel);
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    if (top < 120 || top > window.innerHeight * 0.6) {
      window.scrollTo({ top: window.scrollY + top - 140, behavior: "auto" });
    }
  }

  function askFinish() {
    const ex = state.exam;
    const total = ex.sections.reduce((a, s) => a + s.items.length, 0);
    const answered = ex.sections.reduce((a, s, i) => a + answeredIn(i), 0);
    const left = total - answered;
    $("#examConfirmText").textContent = left
      ? `${left} тапсырмаға жауап берілмеген. Сынақты аяқтайсың ба?`
      : "Барлық тапсырмаға жауап бердің. Сынақты аяқтайсың ба?";
    $("#examConfirm").hidden = false;
    $("#examConfirm").scrollIntoView({ block: "nearest" });
  }

  function finishExam(auto) {
    const ex = state.exam;
    if (!ex) return;
    let total = 0, totalMax = 0;
    const parts = ex.sections.map((s, i) => {
      let pts = 0, max = 0;
      s.items.forEach((inst, j) => {
        const resp = examResp(i, j);
        const g = grade(inst, resp);
        pts += g.pts;
        max += g.max;
        if (isAnswered(inst, resp)) recordAnswer(inst, g.pts, g.max);
      });
      const kind = SUBJ[s.subj].kind === "profile" ? "profile" : s.subj;
      const min = Math.ceil((U.thresholds[kind] * max) / FULL_MAX[kind]);
      total += pts;
      totalMax += max;
      return { subj: s.subj, pts, max, min };
    });
    const totalMin = Math.ceil((U.thresholds.total * totalMax) / 140);
    const pass = total >= totalMin && parts.every((p) => p.pts >= p.min);
    const mins = Math.max(1, Math.round((Math.min(Date.now(), ex.endAt) - ex.startedAt) / 60000));
    state.history.push({ at: Date.now(), combo: ex.combo, mode: ex.mode, total, max: totalMax, pass, mins, parts: parts.map((p) => ({ s: p.subj, p: p.pts, m: p.max })) });
    if (state.history.length > 60) state.history = state.history.slice(-60);
    state.last = Object.assign({}, ex, { finishedAt: Date.now(), parts, total, totalMax, totalMin, pass, mins, auto: !!auto });
    state.exam = null;
    save();
    mockScreen = "result";
    reviewFilter = "wrong";
    $("#examConfirm").hidden = true;
    if (view === "mock") { renderMock(); window.scrollTo(0, 0); }
    updateChrome();
    if (auto) toast("Уақыт бітті — сынақ аяқталды");
  }

  function renderResult() {
    const r = state.last;
    const fails = r.parts.filter((p) => p.pts < p.min).map((p) => SUBJ[p.subj].name);
    let status;
    if (r.pass) status = `<span class="status ok">Шекті балдан өттің</span>`;
    else if (r.total < r.totalMin) status = `<span class="status bad">Шекті балға жетпеді: жалпы балл шекті мәннен (${r.totalMin}) төмен</span>`;
    else status = `<span class="status bad">Шекті балға жетпеді: ${fails.join(", ")}</span>`;
    const scale = r.mode === "full" ? "" : ` · 140 шкаласында ≈ ${Math.round((r.total / r.totalMax) * 140)}`;
    const gap = r.mode === "full" ? (r.total >= state.target ? "Мақсатқа жеттің!" : `Мақсатқа дейін ${state.target - r.total} балл`) : "";

    const parts = r.parts.map((p) => {
      const w = p.max ? (p.pts / p.max) * 100 : 0;
      const th = p.max ? (p.min / p.max) * 100 : 0;
      return `<div class="part">
        <div class="part-name">${SUBJ[p.subj].name}<small>шек: ${p.min}</small></div>
        <div class="part-bar"><i class="${p.pts < p.min ? "fail" : ""}" style="width:${w}%"></i><em style="left:${th}%"></em></div>
        <div class="part-pts">${p.pts}/${p.max}</div>
      </div>`;
    }).join("");

    const flat = [];
    r.sections.forEach((s, i) => s.items.forEach((inst, j) => flat.push({ inst, resp: r.resp[i + "-" + j], num: j + 1 })));
    const wrong = flat.filter((x) => { const g = grade(x.inst, x.resp); return g.pts < g.max; });
    const blank = flat.filter((x) => !isAnswered(x.inst, x.resp));
    const list = reviewFilter === "all" ? flat : reviewFilter === "blank" ? blank : wrong;
    const shown = list.slice(0, 150);

    $("#mockResult").innerHTML = `
      <div class="result-hero">
        <div class="score-big">${r.total}<small> / ${r.totalMax}</small></div>
        <div>
          ${status}
          <p>${U.plans[r.mode].label} · ${comboName(r.combo)} · ${r.mins} минут${scale}${gap ? " · " + gap : ""}</p>
          <div class="row wrap-row" style="margin-top:12px">
            <button type="button" class="btn btn-primary" data-act="mock-new">Жаңа сынақ</button>
            ${wrong.length ? `<button type="button" class="btn btn-ghost" data-act="mistakes-all">Қателерді жаттықтыру</button>` : ""}
          </div>
        </div>
      </div>
      <section class="panel"><h2 class="h3">Пәндер бойынша</h2><div class="part-list">${parts}</div></section>
      <div class="review-head">
        <h2 class="h2">Талдау</h2>
        <div class="chips" style="margin:0">
          <button type="button" class="chip-btn${reviewFilter === "wrong" ? " active" : ""}" data-act="rev" data-f="wrong">Қателер<small>${wrong.length}</small></button>
          <button type="button" class="chip-btn${reviewFilter === "blank" ? " active" : ""}" data-act="rev" data-f="blank">Жауапсыз<small>${blank.length}</small></button>
          <button type="button" class="chip-btn${reviewFilter === "all" ? " active" : ""}" data-act="rev" data-f="all">Барлығы<small>${flat.length}</small></button>
        </div>
      </div>
      <div class="review-list">${shown.length ? shown.map((x) => questionHTML(x.inst, { num: x.num, resp: x.resp, reveal: true, locked: true })).join("") : `<p class="empty">Бұл тізім бос.</p>`}</div>`;
  }

  function tickTimer() {
    if (!state.exam) return;
    const left = state.exam.endAt - Date.now();
    if (left <= 0) { finishExam(true); return; }
    const t = $("#examTimer");
    if (t && view === "mock") {
      t.textContent = fmtClock(left);
      t.classList.toggle("low", left < 10 * 60000);
    }
    const b = $("#examBannerTime");
    if (b) b.textContent = fmtClock(left);
  }

  /* ---------- mistakes ---------- */
  function renderMistakes() {
    const list = Object.values(state.mistakes);
    const body = $("#mistakesBody");
    if (!list.length) {
      body.innerHTML = `<div class="empty-state"><p>Қателер жоқ. Жаттығу немесе сынақ кезінде қате жауап берген сұрақтар осында жиналады.</p><button type="button" class="btn btn-primary" data-nav="practice">Жаттығуды бастау</button></div>`;
      return;
    }
    const by = {};
    list.forEach((m) => { by[m.subj] = (by[m.subj] || 0) + 1; });
    const cards = Object.keys(SUBJ).filter((k) => by[k]).map((k) => `<button type="button" class="mistake-card" data-act="mistakes-subj" data-subj="${k}"><b>${by[k]}</b><span>${SUBJ[k].name}</span><small>Қайта шешу →</small></button>`).join("");
    body.innerHTML = `<div class="mistake-grid">${cards}</div><button type="button" class="btn btn-primary btn-lg" data-act="mistakes-all">Барлығын қайта шешу · ${list.length}</button>`;
  }

  /* ---------- progress ---------- */
  function chartSVG(hist) {
    const box = $("#historyChart");
    const W = Math.max(300, Math.min(720, Math.round((box && box.clientWidth) || 600))), H = 220, l = 36, r = 18, t = 14, b = 26;
    const y = (v) => t + (1 - v / 140) * (H - t - b);
    const n = hist.length;
    const x = (i) => (n === 1 ? (l + W - r) / 2 : l + (i * (W - l - r)) / (n - 1));
    const vals = hist.map((h) => Math.round((h.total / h.max) * 140));
    const grid = [0, 50, 100, 140].map((v) => `<line class="c-grid" x1="${l}" x2="${W - r}" y1="${y(v)}" y2="${y(v)}"/><text class="c-lbl" x="${l - 6}" y="${y(v) + 4}" text-anchor="end">${v}</text>`).join("");
    const pts = vals.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`);
    const area = n > 1 ? `<path class="c-area" d="M ${x(0)} ${y(0)} L ${pts.join(" L ")} L ${x(n - 1)} ${y(0)} Z"/>` : "";
    const line = n > 1 ? `<polyline class="c-line" points="${pts.join(" ")}"/>` : "";
    const dots = vals.map((v, i) => `<circle class="c-dot${i === n - 1 ? " last" : ""}" cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="${i === n - 1 ? 5 : 4}"/>`).join("");
    const lastV = vals[n - 1];
    const lbl = `<text class="c-val" x="${Math.min(x(n - 1), W - r - 4)}" y="${y(lastV) - 10}" text-anchor="${n === 1 ? "middle" : "end"}">${lastV}</text>`;
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Сынақ балдарының динамикасы">
      ${grid}
      <line class="c-thr" x1="${l}" x2="${W - r}" y1="${y(50)}" y2="${y(50)}"/>
      <line class="c-tgt" x1="${l}" x2="${W - r}" y1="${y(state.target)}" y2="${y(state.target)}"/>
      ${area}${line}${dots}${lbl}
    </svg>`;
  }

  function renderProgress() {
    const hist = state.history.slice(-12);
    $("#historyChart").innerHTML = hist.length
      ? chartSVG(hist) + `<div class="legend"><span class="lg" style="background:var(--sky);border-color:var(--sky)"></span>балл (140 шкаласында) <span class="lg" style="background:var(--gold);border-color:var(--gold)"></span>мақсат ${state.target} <span class="lg" style="background:var(--bad);border-color:var(--bad)"></span>шек 50</div>`
      : `<div class="empty-state"><p>Әлі сынақ тапсырылған жоқ. Бірінші толық сынақтан кейін балл динамикасы осында шығады.</p><button type="button" class="btn btn-primary" data-nav="mock">Сынаққа өту</button></div>`;
    $("#historyList").innerHTML = state.history.slice(-8).reverse().map((h) => `<div class="history-item"><div>${comboName(h.combo)}<small>${fmtDate(h.at)} · ${U.plans[h.mode].label} · ${h.mins} мин</small></div><b>${h.total}/${h.max}</b></div>`).join("") +
      (state.last ? `<button type="button" class="link-btn" data-act="last-review" style="margin-top:8px">Соңғы сынақтың талдауын ашу →</button>` : "");

    $("#subjectBars").innerHTML = Object.keys(SUBJ).map((k) => {
      const s = state.stats[k];
      const acc = s && s.n ? pct(s.ok, s.n) : null;
      const cls = acc == null ? "" : acc >= 75 ? "" : acc >= 50 ? "mid" : "low";
      return `<div class="bar-row"><span>${SUBJ[k].name}</span><div class="bar"><i class="${cls}" style="width:${acc || 0}%"></i></div><b>${acc == null ? "—" : acc + "%"}<small>${s && s.n ? " · " + s.n : ""}</small></b></div>`;
    }).join("");

    $("#examDate").value = state.examDate || "";
    $("#targetScore").value = state.target;
    $("#dailyGoal").value = state.goal;
  }

  function exportState() {
    const json = JSON.stringify(state);
    const box = $("#exportBox");
    box.hidden = false;
    box.value = json;
    try {
      const blob = new Blob([json], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `bilimpath-ubt-${dayKey()}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch (e) { /* download blocked: the textarea still holds the JSON */ }
    box.select();
    toast("Прогресс JSON түрінде дайын");
  }

  function importState(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (!data || typeof data !== "object" || !("stats" in data)) throw new Error("bad");
        state = Object.assign(defaults(), data);
        save();
        applyTheme();
        P = null;
        toast("Прогресс жүктелді");
        renderView();
      } catch (e) {
        toast("Файл оқылмады: BilimPath-тен сақталған JSON файлын таңда");
      }
    };
    reader.readAsText(file);
  }

  /* ---------- events ---------- */
  document.addEventListener("click", (e) => {
    const nav = e.target.closest("[data-nav]");
    if (nav) {
      e.preventDefault();
      if (nav.dataset.nav === "practice" && view === "practice" && P) { P = null; renderPractice(); return; }
      go(nav.dataset.nav, { focus: nav.dataset.focus });
      return;
    }

    const optEl = e.target.closest("[data-opt], [data-row]");
    if (optEl && !optEl.disabled) {
      if (optEl.closest("#practiceCard")) { practiceClick(optEl); return; }
      if (optEl.closest("#examCard") && state.exam) {
        const ex = state.exam;
        const [si, qi] = ex.cur;
        const inst = ex.sections[si].items[qi];
        ex.resp[si + "-" + qi] = nextResp(inst, examResp(si, qi), optEl);
        save();
        renderExam();
        return;
      }
    }

    const act = e.target.closest("[data-act]");
    if (!act) return;
    const a = act.dataset.act;
    if (a === "open-subj") openPractice(act.dataset.subj);
    else if (a === "weak") openPractice(act.dataset.subj, { topic: decodeURIComponent(act.dataset.topic) });
    else if (a === "p-mode") {
      const mode = act.dataset.mode;
      P.mode = mode;
      if (mode === "gen" && P.topic && !U.gens[P.subj].some((g) => g.topic === P.topic)) P.topic = null;
      P.queue = mode === "mistakes" ? mistakeQueue(P.subj) : null;
      if (mode !== "mistakes" && P.subj === "all") { P = null; renderPractice(); return; }
      nextPractice();
    } else if (a === "p-topic") {
      P.topic = act.dataset.topic ? decodeURIComponent(act.dataset.topic) : null;
      P.recent = [];
      nextPractice();
    } else if (a === "p-check") practiceCheck();
    else if (a === "p-next" || a === "p-skip") nextPractice();
    else if (a === "mistakes-all") openPractice("all", { mode: "mistakes" });
    else if (a === "mistakes-subj") openPractice(act.dataset.subj, { mode: "mistakes" });
    else if (a === "combo") { state.combo = act.dataset.combo; save(); renderMockSetup(); }
    else if (a === "mock-mode") { mockMode = act.dataset.mode; renderMockSetup(); }
    else if (a === "ex-sec") { state.exam.cur = [Number(act.dataset.sec), 0]; save(); renderExam(); }
    else if (a === "ex-q") { state.exam.cur = [state.exam.cur[0], Number(act.dataset.q)]; save(); renderExam(); scrollToCard("#examCard"); }
    else if (a === "rev") { reviewFilter = act.dataset.f; renderResult(); }
    else if (a === "mock-new") { mockScreen = "setup"; renderMock(); window.scrollTo(0, 0); }
    else if (a === "last-review") { mockScreen = "result"; go("mock"); }
  });

  $("#practiceBack").addEventListener("click", () => { P = null; renderPractice(); window.scrollTo(0, 0); });
  $("#mockStart").addEventListener("click", startExam);
  $("#examPrev").addEventListener("click", () => examMove(-1));
  $("#examNext").addEventListener("click", () => examMove(1));
  $("#examFlag").addEventListener("click", () => {
    const ex = state.exam;
    const k = ex.cur[0] + "-" + ex.cur[1];
    if (ex.flags[k]) delete ex.flags[k]; else ex.flags[k] = 1;
    save();
    renderExam();
  });
  $("#examFinish").addEventListener("click", askFinish);
  $("#examConfirmYes").addEventListener("click", () => finishExam(false));
  $("#examConfirmNo").addEventListener("click", () => { $("#examConfirm").hidden = true; });

  $("#themeToggle").addEventListener("click", () => {
    state.theme = effectiveTheme() === "dark" ? "light" : "dark";
    applyTheme();
    save();
  });

  $("#examDate").addEventListener("change", (e) => { state.examDate = e.target.value; save(); toast("ҰБТ күні сақталды"); });
  $("#targetScore").addEventListener("change", (e) => {
    const v = Math.round(Number(e.target.value));
    state.target = Math.min(140, Math.max(50, Number.isFinite(v) ? v : 100));
    e.target.value = state.target;
    save();
    renderProgress();
  });
  $("#dailyGoal").addEventListener("change", (e) => {
    const v = Math.round(Number(e.target.value));
    state.goal = Math.min(300, Math.max(5, Number.isFinite(v) ? v : 30));
    e.target.value = state.goal;
    save();
  });
  $("#exportBtn").addEventListener("click", exportState);
  $("#importFile").addEventListener("change", (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) importState(f);
    e.target.value = "";
  });
  $("#resetBtn").addEventListener("click", () => { $("#resetConfirm").hidden = false; });
  $("#resetNo").addEventListener("click", () => { $("#resetConfirm").hidden = true; });
  $("#resetYes").addEventListener("click", () => {
    const theme = state.theme;
    state = defaults();
    state.theme = theme;
    save();
    P = null;
    mockScreen = "setup";
    $("#resetConfirm").hidden = true;
    toast("Прогресс өшірілді");
    renderView();
  });

  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select" || e.metaKey || e.ctrlKey || e.altKey) return;
    let card = null, inst = null;
    if (view === "practice" && P && P.inst) { card = $("#practiceCard"); inst = P.inst; }
    else if (view === "mock" && mockScreen === "run" && state.exam) {
      card = $("#examCard");
      const [si, qi] = state.exam.cur;
      inst = state.exam.sections[si].items[qi];
      if (e.key === "ArrowRight") { examMove(1); return; }
      if (e.key === "ArrowLeft") { examMove(-1); return; }
    }
    if (!card || !inst) return;
    const n = Number(e.key);
    if (n >= 1 && n <= inst.opts.length && inst.t !== "m") {
      const el = $(`[data-opt="${n - 1}"]`, card);
      if (el && !el.disabled) el.click();
      return;
    }
    if (e.key === "Enter" && view === "practice") {
      if (e.target.closest && e.target.closest("button")) return;
      e.preventDefault();
      if (P.checked) nextPractice(); else practiceCheck();
    }
  });

  /* ---------- init ---------- */
  applyTheme();
  if (U.problems.length && window.console) console.warn("UBT bank:", U.problems);
  if (state.exam && state.exam.endAt <= Date.now()) finishExam(true);
  const start = (location.hash || "").slice(1);
  go(VIEWS.includes(start) ? start : "home");
  setInterval(() => { if (state.exam) { tickTimer(); updateChrome(); } }, 1000);
})();
