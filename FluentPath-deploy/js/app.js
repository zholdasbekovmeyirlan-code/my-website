/* FluentPath — premium app logic */
(() => {
  const DATA = window.FP_DATA;
  const SRS = window.FP_SRS;
  const STORAGE_KEY = "fluentpath_v2";
  const LANGS = ["kk", "ru"];
  const LOCALES = { kk: "kk-KZ", ru: "ru-RU" };
  const GOALS = [10, 20, 30, 50];

  const defaultState = () => ({
    xp: 0,
    streak: 0,
    bestStreak: 0,
    lastActive: null,
    xpLog: {},
    goalXp: 20,
    goalHitDate: null,
    known: {},
    learning: {},
    lessonDone: {},
    quizHistory: [],
    drafts: {},
    path: {},
    srs: {},
    awarded: { date: null, keys: {} },
    lessonsDone: 0,
    perfectLessons: 0,
    listenOffUntil: 0,
    sound: true,
    srsMigrated: false,
    theme: "dark",
    lang: "kk",
  });

  let state = loadState();
  let currentView = "home";
  let vocabQueue = [];
  let vocabIndex = 0;
  let flashFlipped = false;
  let quiz = null;
  let listenTrack = null;
  let listenRate = 1;
  let listenShowText = false;
  let speakTimer = null;
  let listenSentences = [];
  let listenSentIndex = 0;
  let listenPlayingAll = false;
  let vocabMode = "all"; // all | weak | known
  let vocabTopic = "all";
  let speakTimerId = null;
  let speakLeft = 0;
  let speakPhase = null; // prep | talk
  let writeTimerId = null;
  let writeLeft = 0;
  let writeRunning = false;
  let focusTimerId = null;
  let focusLeft = 25 * 60;
  let focusRunning = false;
  let currentSpeak = null;
  let currentWrite = null;
  let installPrompt = null;
  let audioCtx = null;

  function t(key) {
    const pack = (window.FP_I18N && window.FP_I18N[state.lang]) || {};
    const fallback = (window.FP_I18N && window.FP_I18N.kk) || {};
    return pack[key] || fallback[key] || key;
  }

  function fmt(s, vars = {}) {
    return String(s).replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ""));
  }

  const locale = () => LOCALES[state.lang] || "kk-KZ";

  // Own weekday names: some browsers ship without Kazakh locale data.
  // Points: «15 ұпай» in Kazakh, «15 баллов» in Russian.
  function xpText(n) {
    if (state.lang !== "ru") return `${n} ${t("xp_unit")}`;
    const a = Math.abs(n) % 10;
    const b = Math.abs(n) % 100;
    const form = a === 1 && b !== 11 ? "балл" : a >= 2 && a <= 4 && (b < 12 || b > 14) ? "балла" : "баллов";
    return `${n} ${form}`;
  }

  // Data labels written in English: "Part 2" → «2-бөлім», "≈1.5 min" → «≈1.5 мин».
  const partLabel = (p) => String(p || "").replace(/Part\s*(\d)/i, (_, n) => fmt(t("part_n"), { n }));
  const minLabel = (d) => String(d || "").replace(/\bmin\b/, t("write_min"));
  const taskLabel = (x) =>
    String(x || "").replace(/Task\s*(\d)( practice)?/i, (_, n, pr) => fmt(t(pr ? "task_n_practice" : "task_n"), { n }));

  // Icons from the sprite in js/icons.js; iconLabel(el, icon, text) fills a button with an icon and a caption.
  const ic = (name, cls) => window.FP_IC(name, cls);
  function iconLabel(el, icon, text) {
    if (el) el.innerHTML = `${ic(icon)}<span>${escapeHtml(text)}</span>`;
  }

  function weekday(d, style = "short") {
    const names = t(style === "long" ? "wd_long" : "wd_short").split(",");
    return names[d.getDay()] || d.toLocaleDateString(locale(), { weekday: style });
  }
  const course = () => window.FP_COURSE;

  function applyI18n() {
    document.documentElement.lang = state.lang;
    $all("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });
    $all("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(key));
    });
    $all("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key) {
        el.setAttribute("title", t(key));
        el.setAttribute("aria-label", t(key));
      }
    });
    const sel = $("#langSelect");
    if (sel) sel.value = state.lang;
    initWotd();
    updateChrome();
    if (currentView === "listening" && listenTrack && !$("#listeningActive").classList.contains("hidden")) {
      openListening(listenTrack.id, true);
    } else {
      renderView(currentView);
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("fluentpath_v1");
      if (!raw) return defaultState();
      return normalizeState(JSON.parse(raw));
    } catch {
      return defaultState();
    }
  }

  function normalizeState(data) {
    const base = defaultState();
    const s = { ...base, ...(data && typeof data === "object" ? data : {}) };
    ["known", "learning", "lessonDone", "drafts", "path", "srs", "xpLog"].forEach((k) => {
      if (!s[k] || typeof s[k] !== "object" || Array.isArray(s[k])) s[k] = {};
    });
    if (!Array.isArray(s.quizHistory)) s.quizHistory = [];
    if (!s.awarded || typeof s.awarded !== "object") s.awarded = base.awarded;
    if (!GOALS.includes(s.goalXp)) s.goalXp = base.goalXp;
    if (!LANGS.includes(s.lang)) s.lang = "kk";
    return s;
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage full or blocked — keep working in memory */
    }
    window.FP_CLOUD?.onLocalChange();
  }

  // Cloud sync hands back a merged save; keep this device's settings and redraw.
  function replaceState(next) {
    state = normalizeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
    updateChrome();
    renderView(currentView);
  }

  // Local calendar day (YYYY-MM-DD). toISOString() would switch days at 05:00 in Kazakhstan.
  function localDay(d = new Date()) {
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${m}-${day}`;
  }

  function dayDiff(a, b) {
    const [y1, m1, d1] = a.split("-").map(Number);
    const [y2, m2, d2] = b.split("-").map(Number);
    return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
  }

  // A streak survives until the end of the day after the last active day.
  // Streak freezes (earned every 7 days, max 2) cover missed days automatically.
  function refreshStreak() {
    if (!state.lastActive || !state.streak) return;
    const missed = dayDiff(state.lastActive, localDay()) - 1;
    if (missed <= 0) return;
    if ((state.freezes || 0) >= missed) {
      state.freezes -= missed;
      const y = new Date();
      y.setDate(y.getDate() - 1);
      state.lastActive = localDay(y);
      toast(fmt(t("freeze_used"), { n: missed }));
    } else {
      state.streak = 0;
    }
    saveState();
  }

  function todayXp() {
    return (state.xpLog || {})[localDay()] || 0;
  }

  function goalReached() {
    return todayXp() >= state.goalXp;
  }

  function markActivity(xp = 5, opts = {}) {
    const today = localDay();
    if (state.lastActive !== today) {
      const diff = state.lastActive ? dayDiff(state.lastActive, today) : null;
      state.streak = diff === 1 ? (state.streak || 0) + 1 : 1;
      state.lastActive = today;
      if (state.streak % 7 === 0 && (state.freezes || 0) < 2) {
        state.freezes = (state.freezes || 0) + 1;
        setTimeout(() => toast(t("freeze_earned")), 2800);
      }
    }
    if (!state.streak) state.streak = 1;
    state.bestStreak = Math.max(state.bestStreak || 0, state.streak);
    state.xp += xp;
    state.xpLog[today] = (state.xpLog[today] || 0) + xp;
    const keys = Object.keys(state.xpLog).sort();
    keys.slice(0, Math.max(0, keys.length - 90)).forEach((k) => delete state.xpLog[k]);
    if (state.xpLog[today] >= state.goalXp && state.goalHitDate !== today) {
      state.goalHitDate = today;
      if (!course()?.isLessonOpen()) {
        toast(t("goal_done"));
        burstConfetti();
      }
    }
    saveState();
    updateChrome();
    if (!opts.noQuest) window.FP_QUESTS?.onXp(xp);
  }

  // XP for tools that can be re-submitted (speaking, writing, reading…) is paid once per item per day.
  function awardOnce(key, xp) {
    const today = localDay();
    if (!state.awarded || state.awarded.date !== today) state.awarded = { date: today, keys: {} };
    if (state.awarded.keys[key]) return false;
    state.awarded.keys[key] = true;
    markActivity(xp);
    return true;
  }

  // In-page confirmation (native confirm() is blocked in some embedded viewers and looks out of place).
  function askConfirm(text, { yes = t("ask_yes"), no = t("ask_no"), danger = false } = {}) {
    const box = $("#askDialog");
    if (!box) return Promise.resolve(window.confirm(text));
    return new Promise((resolve) => {
      const yesBtn = $("#askYes");
      const noBtn = $("#askNo");
      $("#askText").textContent = text;
      yesBtn.textContent = yes;
      noBtn.textContent = no;
      yesBtn.classList.toggle("is-danger", danger);
      box.classList.remove("hidden");
      document.body.classList.add("ask-open");
      const done = (val) => {
        box.classList.add("hidden");
        document.body.classList.remove("ask-open");
        yesBtn.onclick = noBtn.onclick = $("#askBackdrop").onclick = null;
        document.removeEventListener("keydown", onKey, true);
        resolve(val);
      };
      const onKey = (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          done(false);
        } else if (e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
          done(true);
        }
      };
      yesBtn.onclick = () => done(true);
      noBtn.onclick = () => done(false);
      $("#askBackdrop").onclick = () => done(false);
      document.addEventListener("keydown", onKey, true);
      setTimeout(() => noBtn.focus(), 30);
    });
  }

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.remove("hidden");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.add("hidden"), 2600);
  }

  function $(sel) {
    return document.querySelector(sel);
  }
  function $all(sel) {
    return [...document.querySelectorAll(sel)];
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Confetti */
  function burstConfetti() {
    const c = $("#fxCanvas");
    if (!c || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    const parts = Array.from({ length: 90 }, () => ({
      x: c.width * 0.5 + (Math.random() - 0.5) * 80,
      y: c.height * 0.35,
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * -9 - 3,
      g: 0.18 + Math.random() * 0.08,
      s: 4 + Math.random() * 6,
      color: ["#7c9bff", "#a78bfa", "#22d3ee", "#34d399", "#fbbf24"][(Math.random() * 5) | 0],
      life: (70 + Math.random() * 30) | 0,
    }));
    let frame = 0;
    function tick() {
      frame++;
      ctx.clearRect(0, 0, c.width, c.height);
      parts.forEach((p) => {
        p.vy += p.g;
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        ctx.globalAlpha = Math.max(0, p.life / 80);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.s, p.s * 0.6);
      });
      if (frame < 90) requestAnimationFrame(tick);
      else {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.globalAlpha = 1;
      }
    }
    tick();
  }

  /* Sound effects (generated, no audio files) */
  function playSfx(kind) {
    if (state.sound === false) return;
    const notes = {
      ok: [[660, 0], [880, 0.09]],
      bad: [[220, 0], [165, 0.12]],
      done: [[523, 0], [659, 0.1], [784, 0.2], [1047, 0.32]],
      tap: [[520, 0]],
    }[kind];
    if (!notes) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      notes.forEach(([freq, at]) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = kind === "bad" ? "triangle" : "sine";
        osc.frequency.value = freq;
        const t0 = audioCtx.currentTime + at;
        const peak = kind === "tap" ? 0.05 : 0.16;
        gain.gain.setValueAtTime(0.0001, t0);
        gain.gain.exponentialRampToValueAtTime(peak, t0 + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + (kind === "tap" ? 0.08 : 0.2));
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(t0);
        osc.stop(t0 + 0.22);
      });
    } catch {
      /* audio not available */
    }
  }

  /* Text to speech — recorded voices with a device-voice fallback (js/voice.js) */
  const VOICE = window.FP_VOICE;
  const canSpeakAloud = () => !!window.speechSynthesis || VOICE.hasClips();

  function speakText(text, opts = {}) {
    if (!text) return false;
    listenPlayingAll = false;
    return VOICE.say(text, opts);
  }

  function stopSpeech() {
    VOICE.stop();
  }

  /* Hover / tap tooltips for charts */
  function bindTips(root) {
    const tip = $("#vizTip");
    if (!tip || !root) return;
    root.querySelectorAll("[data-tip]").forEach((el) => {
      const show = () => {
        tip.textContent = el.dataset.tip;
        tip.classList.remove("hidden");
        const r = el.getBoundingClientRect();
        const w = tip.offsetWidth;
        const x = Math.min(window.innerWidth - w - 8, Math.max(8, r.left + r.width / 2 - w / 2));
        tip.style.left = `${x}px`;
        tip.style.top = `${Math.max(8, r.top - tip.offsetHeight - 8)}px`;
      };
      const hide = () => tip.classList.add("hidden");
      el.addEventListener("mouseenter", show);
      el.addEventListener("mouseleave", hide);
      el.addEventListener("click", show);
      el.setAttribute("tabindex", "0");
      el.addEventListener("focus", show);
      el.addEventListener("blur", hide);
    });
  }

  const DOCK_MAIN = new Set(["home", "learn", "review", "vocab", "practice"]);

  function closeMoreSheet() {
    $("#moreSheet")?.classList.add("hidden");
  }

  function openMoreSheet() {
    $("#moreSheet")?.classList.remove("hidden");
  }

  /* Navigation */
  function showView(name, opts = {}) {
    if (!document.getElementById(`view-${name}`)) name = "home";
    $all(".view").forEach((v) => v.classList.remove("active"));
    document.getElementById(`view-${name}`).classList.add("active");
    $all(".nav button").forEach((b) => b.classList.toggle("active", b.dataset.nav === name));
    $all(".dock-item[data-nav]").forEach((b) => b.classList.toggle("active", b.dataset.nav === name));
    $("#dockMoreBtn")?.classList.toggle("active", !DOCK_MAIN.has(name));
    closeMoreSheet();
    if (name !== "chat") document.body.classList.remove("chat-open");
    $("#mainNav")?.classList.remove("open");
    $("#burger")?.setAttribute("aria-expanded", "false");
    const changed = currentView !== name;
    if (changed && (currentView === "mock" || currentView === "unt")) window.FP_EXAMS?.leave(currentView);
    currentView = name;
    if (opts.push !== false && location.hash !== `#${name}`) {
      try {
        history.pushState({ view: name }, "", `#${name}`);
      } catch {
        /* file:// may block history */
      }
    }
    if (changed || opts.scroll) window.scrollTo({ top: 0 });
    stopListening();
    if (name === "listening") initListeningList();
    renderView(name);
  }

  function renderView(name) {
    if (name === "home") course()?.renderHome();
    if (name === "learn") course()?.renderPath();
    if (name === "review") course()?.renderReview();
    if (name === "vocab") initVocab();
    if (name === "grammar") initGrammar();
    if (name === "reading") initReadingList();
    if (name === "speaking") initSpeaking();
    if (name === "writing") initWriting();
    if (name === "phrases") initPhrases();
    if (name === "practice") renderPractice();
    if (name === "chat") window.FP_AIUI?.render();
    if (name === "stories") window.FP_STORIES?.render();
    if (name === "mock") window.FP_EXAMS?.renderMock();
    if (name === "unt") window.FP_EXAMS?.renderUnt();
    if (name === "account" || name === "league" || name === "class") window.FP_CLOUD_UI?.render(name);
    if (name !== "speaking" && speakPhase === "talk") {
      clearSpeakTimer();
      stopSpeakRec();
      speakPhase = "idle";
    }
    if (name === "progress") renderProgress();
    if (name === "quiz" && !quiz) resetQuizUI();
  }

  function viewFromHash() {
    const name = (location.hash || "").replace(/^#/, "");
    return document.getElementById(`view-${name}`) ? name : "home";
  }

  function applyTheme() {
    const theme = state.theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#fafafa" : "#09090b");
    const btn = $("#themeToggle");
    if (btn) btn.innerHTML = ic(theme === "light" ? "moon" : "sun");
  }

  /* Word of day */
  function initWotd() {
    const start = new Date(new Date().getFullYear(), 0, 0);
    const dayOfYear = Math.floor((Date.now() - start) / 86400000);
    const pool = DATA.wordOfDayPool || [];
    const item = pool[dayOfYear % pool.length] || { word: "crucial", ipa: "", meaning: "", example: "" };
    const found = DATA.vocab.find((w) => w.en.toLowerCase() === item.word.toLowerCase());
    $("#wotdWord").textContent = item.word;
    $("#wotdIpa").textContent = item.ipa;
    $("#wotdMeaning").textContent = item.meaning;
    $("#wotdExample").textContent = `“${item.example}”`;
    $("#wotdLevel").textContent = found ? `${found.level} · ${t(`topic_${found.topic}`)}` : "B2";
    $("#wotdSay").onclick = () => speakText(item.word);
    $("#wotdSave").onclick = () => {
      if (found) {
        SRS.grade(state.srs, found.id, false);
        state.learning[found.id] = true;
        delete state.known[found.id];
      }
      awardOnce("wotd", 3);
      saveState();
      updateChrome();
      toast(`“${item.word}” ${t("toast_saved")}`);
    };
  }

  /* Vocab */
  function wordStatus(w) {
    const card = state.srs[w.id];
    if (card) return card.b >= 4 ? "known" : "learning";
    if (state.known[w.id]) return "known";
    if (state.learning[w.id]) return "learning";
    return "new";
  }

  function filteredVocab() {
    const level = $("#vocabLevel")?.value || "all";
    const topic = vocabTopic;
    const q = ($("#vocabSearch")?.value || "").trim().toLowerCase();
    return DATA.vocab.filter((w) => {
      if (level !== "all" && w.level !== level) return false;
      if (topic !== "all" && w.topic !== topic) return false;
      const st = wordStatus(w);
      if (vocabMode === "weak" && st !== "learning") return false;
      if (vocabMode === "known" && st !== "known") return false;
      if (q) {
        const hay = `${w.en} ${w.kk} ${w.topic} ${w.example}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function setVocabMode(mode) {
    vocabMode = mode;
    $("#modeAll")?.classList.toggle("active", mode === "all");
    $("#modeWeak")?.classList.toggle("active", mode === "weak");
    $("#modeKnown")?.classList.toggle("active", mode === "known");
    initVocab();
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function topicLabel(id) {
    const key = `topic_${id}`;
    const label = t(key);
    if (label !== key) return label;
    return (DATA.topics.find((x) => x.id === id) || {}).label || id;
  }

  function buildTopicChips() {
    const box = $("#topicChips");
    if (!box) return;
    const current = vocabTopic;
    box.innerHTML = DATA.topics
      .map(
        (x) =>
          `<button type="button" data-topic="${x.id}" class="${x.id === current ? "active" : ""}">${escapeHtml(
            x.id === "all" ? t("mode_all") : topicLabel(x.id)
          )}</button>`
      )
      .join("");
    box.querySelectorAll("button").forEach((btn) => {
      btn.onclick = () => {
        vocabTopic = btn.dataset.topic;
        initVocab();
      };
    });
  }

  function initVocab() {
    buildTopicChips();
    const list = filteredVocab();
    vocabQueue = shuffle(list);
    vocabIndex = 0;
    flashFlipped = false;
    $("#flashCard")?.classList.remove("flipped");
    renderFlash();
    renderVocabTable(list);
    if ($("#vocabStats")) {
      $("#vocabStats").textContent = fmt(t("vocab_count"), { n: list.length, total: DATA.vocab.length });
    }
    if ($("#listCount")) $("#listCount").textContent = String(list.length);
  }

  function renderFlash() {
    const w = vocabQueue[vocabIndex];
    const empty = !w;
    $("#flashWrap")?.classList.toggle("is-empty", empty);
    if (empty) {
      $("#flashEmpty").textContent =
        vocabMode === "weak" ? t("empty_weak") : vocabMode === "known" ? t("empty_known") : t("empty_search");
      $("#flashCount").textContent = "0 / 0";
      return;
    }
    $("#flashMeta").textContent = `${w.level} · ${topicLabel(w.topic)}`;
    $("#flashWord").textContent = w.en;
    $("#flashTr").textContent = w.kk;
    $("#flashEx").textContent = w.example;
    $("#flashCount").textContent = `${vocabIndex + 1} / ${vocabQueue.length}`;
  }

  function nextFlash() {
    if (!vocabQueue.length) return;
    flashFlipped = false;
    $("#flashCard").classList.remove("flipped");
    vocabIndex = (vocabIndex + 1) % vocabQueue.length;
    renderFlash();
  }

  function gradeFlash(ok) {
    const w = vocabQueue[vocabIndex];
    if (!w) return;
    SRS.grade(state.srs, w.id, ok);
    if (ok) {
      state.known[w.id] = true;
      delete state.learning[w.id];
      toast(w.en);
    } else {
      state.learning[w.id] = true;
      delete state.known[w.id];
    }
    saveState();
    markActivity(ok ? 2 : 1);
    nextFlash();
    renderVocabTable(filteredVocab());
  }

  function renderVocabTable(list) {
    const tbody = $("#vocabTable tbody");
    if (!tbody) return;
    const rows = list.slice(0, 200);
    tbody.innerHTML = rows
      .map((w) => {
        const status = wordStatus(w);
        return `<tr>
          <td><button type="button" class="say small" data-say="${escapeHtml(w.en)}" aria-label="Play">${ic("volume-2")}</button><strong>${escapeHtml(
            w.en
          )}</strong></td>
          <td>${escapeHtml(w.kk)}</td>
          <td>${w.level}</td>
          <td>${escapeHtml(topicLabel(w.topic))}</td>
          <td><span class="badge badge-${status}">${t(`status_${status}`)}</span></td>
        </tr>`;
      })
      .join("");
    tbody.querySelectorAll("[data-say]").forEach((b) => (b.onclick = () => speakText(b.dataset.say)));
    if ($("#listMore")) {
      $("#listMore").textContent = list.length > rows.length ? fmt(t("list_more"), { n: rows.length, total: list.length }) : "";
    }
  }

  /* Grammar */
  function initGrammar() {
    const list = $("#lessonList");
    list.innerHTML = DATA.lessons
      .map(
        (l, i) =>
          `<button type="button" data-i="${i}"><span class="lesson-check">${
            state.lessonDone[l.id] ? ic("check") : ""
          }</span>${escapeHtml(l.title)} <span class="muted">· ${l.level}</span></button>`
      )
      .join("");
    list.querySelectorAll("button").forEach((btn) => {
      btn.onclick = () => openLesson(+btn.dataset.i);
    });
    openLesson(0);
  }

  function openLesson(i) {
    const l = DATA.lessons[i];
    $all("#lessonList button").forEach((b, idx) => b.classList.toggle("active", idx === i));
    const body = $("#lessonBody");
    const p = l.practice;
    body.innerHTML = `
      ${l.body}
      <div class="mini-q">
        <h3>${escapeHtml(t("mini_practice"))}</h3>
        <p><strong>${escapeHtml(p.q)}</strong></p>
        <div class="options" id="lessonOptions">
          ${p.options
            .map((o, idx) => `<button type="button" class="option" data-i="${idx}">${escapeHtml(o)}</button>`)
            .join("")}
        </div>
        <p class="explain hidden" id="lessonExplain"></p>
      </div>
    `;
    body.querySelectorAll(".option").forEach((btn) => {
      btn.onclick = () => {
        const choice = +btn.dataset.i;
        const correct = choice === p.answer;
        body.querySelectorAll(".option").forEach((b) => {
          b.disabled = true;
          if (+b.dataset.i === p.answer) b.classList.add("correct");
          else if (+b.dataset.i === choice) b.classList.add("wrong");
        });
        const exp = $("#lessonExplain");
        exp.textContent = (correct ? t("correct") + " " : t("wrong") + " ") + p.explain;
        exp.classList.remove("hidden");
        playSfx(correct ? "ok" : "bad");
        if (correct) {
          // Update the list in place — re-rendering here used to wipe the feedback.
          state.lessonDone[l.id] = true;
          const mark = $(`#lessonList button[data-i="${i}"] .lesson-check`);
          if (mark) mark.innerHTML = ic("check");
          awardOnce(`gram:${l.id}`, 15);
          saveState();
        }
      };
    });
  }

  /* Quiz */
  const QUIZ_NAMES = { placement: "quiz_place", vocab: "quiz_vocab", grammar: "quiz_gram", mixed: "quiz_mixed" };

  function resetQuizUI() {
    $("#quizSetup").classList.remove("hidden");
    $("#quizPlay").classList.add("hidden");
    $("#quizResult").classList.add("hidden");
    quiz = null;
  }

  function startQuiz(mode) {
    let bank = [];
    if (mode === "placement") bank = DATA.quizBanks.placement;
    else if (mode === "vocab") bank = DATA.quizBanks.vocab;
    else if (mode === "grammar") bank = DATA.quizBanks.grammar;
    else {
      bank = shuffle([...DATA.quizBanks.vocab, ...DATA.quizBanks.grammar, ...DATA.quizBanks.placement.slice(0, 5)]);
    }
    const questions = shuffle(bank).slice(0, mode === "placement" ? 15 : mode === "mixed" ? 12 : 10);
    quiz = { mode, questions, i: 0, score: 0, answered: false };
    $("#quizSetup").classList.add("hidden");
    $("#quizResult").classList.add("hidden");
    $("#quizPlay").classList.remove("hidden");
    renderQuizQ();
  }

  function renderQuizQ() {
    const item = quiz.questions[quiz.i];
    quiz.answered = false;
    $("#quizProgress").textContent = `${quiz.i + 1} / ${quiz.questions.length}`;
    $("#quizFill").style.width = `${(quiz.i / quiz.questions.length) * 100}%`;
    $("#quizQuestion").textContent = item.q;
    $("#quizExplain").classList.add("hidden");
    $("#quizNext").classList.add("hidden");
    const box = $("#quizOptions");
    box.innerHTML = item.options
      .map((o, idx) => `<button type="button" class="option" data-i="${idx}">${escapeHtml(o)}</button>`)
      .join("");
    box.querySelectorAll(".option").forEach((btn) => {
      btn.onclick = () => answerQuiz(+btn.dataset.i);
    });
  }

  function answerQuiz(choice) {
    if (quiz.answered) return;
    quiz.answered = true;
    const item = quiz.questions[quiz.i];
    const correct = choice === item.a;
    if (correct) quiz.score += 1;
    playSfx(correct ? "ok" : "bad");
    $all("#quizOptions .option").forEach((b) => {
      b.disabled = true;
      if (+b.dataset.i === item.a) b.classList.add("correct");
      else if (+b.dataset.i === choice) b.classList.add("wrong");
    });
    const exp = $("#quizExplain");
    exp.textContent = item.exp || "";
    exp.classList.toggle("hidden", !item.exp);
    $("#quizNext").classList.remove("hidden");
    const last = quiz.i + 1 >= quiz.questions.length;
    $("#quizNext").innerHTML = `<span>${escapeHtml(last ? t("quiz_result") : t("quiz_next"))}</span>${ic(last ? "flag" : "arrow-right")}`;
  }

  function nextQuiz() {
    if (quiz.i + 1 >= quiz.questions.length) {
      finishQuiz();
      return;
    }
    quiz.i += 1;
    renderQuizQ();
  }

  function finishQuiz() {
    const total = quiz.questions.length;
    const pct = Math.round((quiz.score / total) * 100);
    $("#quizPlay").classList.add("hidden");
    $("#quizResult").classList.remove("hidden");
    $("#quizScore").textContent = `${pct}%`;
    let key;
    if (quiz.mode === "placement") {
      key = pct >= 85 ? "quiz_lvl_b2" : pct >= 70 ? "quiz_lvl_b1" : pct >= 50 ? "quiz_lvl_a2" : "quiz_lvl_a1";
    } else key = pct >= 80 ? "quiz_hint_great" : pct >= 60 ? "quiz_hint_good" : "quiz_hint_low";
    $("#quizLevelHint").textContent = `${fmt(t("quiz_correct_of"), { n: quiz.score, total })} ${t(key)}`;

    state.quizHistory.unshift({ mode: quiz.mode, score: pct, date: localDay(), detail: `${quiz.score}/${total}` });
    state.quizHistory = state.quizHistory.slice(0, 20);
    markActivity(Math.max(10, Math.round(pct / 4)));
    saveState();
    if (pct >= 70) burstConfetti();
    quiz = null;
  }

  /* Speaking */
  function fmtTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  let speakRec = null;
  let speakTalkStart = 0;

  function clearSpeakTimer() {
    clearInterval(speakTimerId);
    speakTimerId = null;
  }

  function stopSpeakRec() {
    const rec = speakRec;
    speakRec = null;
    if (rec) {
      try {
        rec.stop();
      } catch {
        /* already stopped */
      }
    }
  }

  // Live speech-to-text (Chrome/Edge/Safari). Chrome ends the session on silence, so restart it.
  function startSpeechRec(onText, { continuous = true } = {}) {
    if (!SpeechRec) return null;
    const rec = new SpeechRec();
    rec.lang = "en-US";
    rec.continuous = continuous;
    rec.interimResults = true;
    let finalText = "";
    let restarts = 0;
    let dead = false;
    rec.onresult = (e) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) finalText += `${r[0].transcript.trim()} `;
        else interim += r[0].transcript;
      }
      onText(finalText.trim(), interim.trim());
    };
    rec.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") toast(t("mic_denied"));
      if (e.error !== "no-speech") dead = true;
    };
    rec.onend = () => {
      if (continuous && !dead && speakRec === rec && restarts++ < 40) {
        try {
          rec.start();
        } catch {
          /* ignore */
        }
      }
    };
    try {
      rec.start();
      return rec;
    } catch {
      return null;
    }
  }

  function initSpeaking() {
    const list = $("#speakList");
    const items = DATA.speaking || [];
    const bands = state.speakBands || {};
    list.innerHTML = items
      .map(
        (s) =>
          `<button type="button" data-id="${s.id}" class="${currentSpeak && currentSpeak.id === s.id ? "active" : ""}"><strong>${escapeHtml(
            s.title
          )}</strong><span class="muted small">${escapeHtml(partLabel(s.part))}${
            bands[s.id] ? ` · <b class="band-chip">${bands[s.id]}</b>` : ""
          }</span></button>`
      )
      .join("");
    list.querySelectorAll("button").forEach((b) => {
      b.onclick = () => {
        list.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        openSpeak(b.dataset.id);
        revealPanel("#speakPanel");
      };
    });
    if (currentSpeak && speakPhase !== "talk") openSpeak(currentSpeak.id);
  }

  function openSpeak(id) {
    const s = (DATA.speaking || []).find((x) => x.id === id);
    if (!s) return;
    currentSpeak = s;
    clearSpeakTimer();
    stopSpeakRec();
    const panel = $("#speakPanel");
    panel.innerHTML = `
      <span class="pill">${escapeHtml(partLabel(s.part))}</span>
      <h2>${escapeHtml(s.title)}</h2>
      <p class="muted small">${escapeHtml(t("speak_cue"))}</p>
      <ul class="cue-list">
        ${s.cue.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}
      </ul>
      <div class="timer-box">
        <p class="phase-label" id="speakPhaseLabel"></p>
        <div class="timer-display" id="speakClock"></div>
        <div class="progress-bar slim"><div class="progress-fill" id="speakFill" style="width:0%"></div></div>
        <div class="speak-actions">
          <button type="button" class="btn-3d" id="speakMain"></button>
          <button type="button" class="btn btn-ghost btn-sm" id="speakReset">${ic("rotate-ccw")}<span>${escapeHtml(t("speak_reset"))}</span></button>
        </div>
        <p class="speak-live hidden" id="speakLive"></p>
      </div>
      <div class="speak-after hidden" id="speakAfter">
        <label class="muted small" for="speakText">${escapeHtml(t(SpeechRec ? "speak_transcript" : "speak_type"))}</label>
        <textarea id="speakText" class="write-area" rows="5" placeholder="${escapeHtml(t("speak_text_ph"))}"></textarea>
        <div class="speak-actions">
          <button type="button" class="btn-3d" id="speakAi">${ic("sparkles")}<span>${escapeHtml(t("ai_check_speak"))}</span></button>
        </div>
        <div id="speakFb"></div>
      </div>
    `;
    const main = $("#speakMain");
    const label = $("#speakPhaseLabel");
    const clock = $("#speakClock");
    const fill = $("#speakFill");
    const live = $("#speakLive");

    const runTimer = (seconds, onDone) => {
      clearSpeakTimer();
      speakLeft = seconds;
      clock.textContent = fmtTime(speakLeft);
      fill.style.width = "0%";
      speakTimerId = setInterval(() => {
        speakLeft -= 1;
        clock.textContent = fmtTime(Math.max(0, speakLeft));
        fill.style.width = `${((seconds - speakLeft) / seconds) * 100}%`;
        if (speakLeft <= 0) {
          clearSpeakTimer();
          onDone();
        }
      }, 1000);
    };

    const setPhase = (phase) => {
      speakPhase = phase;
      $("#speakPanel .timer-box").dataset.phase = phase;
      main.classList.toggle("hidden", phase === "done");
      if (phase === "idle") {
        label.textContent = t("speak_ready");
        clock.textContent = fmtTime(s.prep);
        fill.style.width = "0%";
        iconLabel(main, "play", fmt(t("speak_start_prep"), { n: Math.round(s.prep / 60) || 1 }));
        live.classList.add("hidden");
        $("#speakAfter").classList.add("hidden");
      } else if (phase === "prep") {
        label.textContent = t("speak_prep");
        iconLabel(main, "mic", t("speak_start_talk"));
        runTimer(s.prep, () => {
          playSfx("tap");
          setPhase("talk");
        });
      } else if (phase === "talk") {
        label.textContent = t("speak_talk");
        iconLabel(main, "square", t("speak_finish"));
        speakTalkStart = Date.now();
        const area = $("#speakText");
        area.value = "";
        speakRec = startSpeechRec((final, interim) => {
          area.value = final;
          live.textContent = `${final} ${interim}`.trim() || "…";
        });
        live.classList.toggle("hidden", !speakRec);
        if (speakRec) live.textContent = t("speak_listening");
        runTimer(s.speak, () => setPhase("done"));
      } else if (phase === "done") {
        clearSpeakTimer();
        stopSpeakRec();
        label.textContent = t("speak_done_label");
        fill.style.width = "100%";
        live.classList.add("hidden");
        $("#speakAfter").classList.remove("hidden");
        playSfx("done");
        if (awardOnce(`speak:${s.id}`, 20)) toast(`${t("speak_done_ok")} +${xpText(20)}`);
      }
    };

    main.onclick = () => {
      if (speakPhase === "idle") setPhase("prep");
      else if (speakPhase === "prep") setPhase("talk");
      else if (speakPhase === "talk") setPhase("done");
    };
    $("#speakReset").onclick = () => {
      clearSpeakTimer();
      stopSpeakRec();
      setPhase("idle");
    };
    $("#speakAi").onclick = async () => {
      const transcript = $("#speakText").value;
      if (countWords(transcript) < 15) {
        toast(t("ai_err_short"));
        return;
      }
      const seconds = speakTalkStart ? Math.round((Date.now() - speakTalkStart) / 1000) : s.speak;
      const data = await window.FP_AIUI.runFeedback(
        "speaking",
        { topic: s.title, cue: s.cue, transcript, seconds: Math.min(seconds, s.speak) },
        $("#speakFb"),
        $("#speakAi")
      );
      if (data) {
        if (!state.speakBands) state.speakBands = {};
        state.speakBands[s.id] = data.overall;
        saveState();
      }
    };
    setPhase("idle");
  }

  /* Writing */
  function clearWriteTimer() {
    clearInterval(writeTimerId);
    writeTimerId = null;
    writeRunning = false;
  }

  function initWriting() {
    const list = $("#writeList");
    const items = DATA.writing || [];
    const bands = state.writeBands || {};
    list.innerHTML = items
      .map(
        (w) =>
          `<button type="button" data-id="${w.id}" class="${currentWrite && currentWrite.id === w.id ? "active" : ""}"><strong>${escapeHtml(
            w.title
          )}</strong><span class="muted small">${escapeHtml(taskLabel(w.task))}${
            bands[w.id] ? ` · <b class="band-chip">${bands[w.id]}</b>` : ""
          }</span></button>`
      )
      .join("");
    list.querySelectorAll("button").forEach((b) => {
      b.onclick = () => {
        list.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        openWrite(b.dataset.id);
        revealPanel("#writePanel");
      };
    });
    if (currentWrite && !writeRunning) openWrite(currentWrite.id);
  }

  // On phones the topic list sits above the panel, so bring the panel into view after a pick.
  function revealPanel(sel) {
    if (window.innerWidth <= 900) $(sel)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function countWords(text) {
    return (String(text).trim().match(/\S+/g) || []).length;
  }

  function openWrite(id) {
    const w = (DATA.writing || []).find((x) => x.id === id);
    if (!w) return;
    currentWrite = w;
    clearWriteTimer();
    writeLeft = (w.minutes || 40) * 60;
    const saved = (state.drafts && state.drafts[w.id]) || "";
    const panel = $("#writePanel");
    panel.innerHTML = `
      <span class="pill">${escapeHtml(taskLabel(w.task))} · ${w.minutes || 40} ${escapeHtml(t("write_min"))}</span>
      <h2>${escapeHtml(w.title)}</h2>
      <p class="prompt-box">${escapeHtml(w.prompt)}</p>
      <div class="write-meta">
        <div class="write-timer">
          <button type="button" class="btn btn-ghost btn-sm" id="writeTimer"></button>
          <button type="button" class="btn btn-ghost btn-sm" id="writeReset" aria-label="${escapeHtml(t("write_reset"))}" title="${escapeHtml(
            t("write_reset")
          )}">${ic("rotate-ccw")}</button>
        </div>
        <span id="writeWordCount"></span>
      </div>
      <textarea id="writeArea" class="write-area" rows="12" placeholder="${escapeHtml(t("write_ph"))}">${escapeHtml(saved)}</textarea>
      <p class="muted small" id="writeAutosave">${escapeHtml(saved ? t("write_autosaved") : t("write_autosave_hint"))}</p>
      <div class="write-actions">
        <button type="button" class="btn-3d" id="writeAi">${ic("sparkles")}<span>${escapeHtml(t("ai_check_write"))}</span></button>
        <button type="button" class="btn btn-ghost" id="writeDone">${escapeHtml(t("write_done"))}</button>
      </div>
      <div id="writeFb"></div>
      <details class="tips-box">
        <summary>${escapeHtml(t("write_tips"))}</summary>
        <ul>${w.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}</ul>
      </details>
    `;
    const area = $("#writeArea");
    const timerBtn = $("#writeTimer");
    let saveT;
    const persist = () => {
      state.drafts[w.id] = area.value;
      saveState();
    };
    const drawTimer = () => {
      iconLabel(timerBtn, writeRunning ? "pause" : "timer", fmtTime(Math.max(0, writeLeft)));
      timerBtn.classList.toggle("is-running", writeRunning);
    };
    const updateCount = () => {
      const n = countWords(area.value);
      const el = $("#writeWordCount");
      el.textContent = `${n} / ${w.minWords} ${t("write_words")}`;
      el.classList.toggle("ok", n >= w.minWords);
    };
    area.addEventListener("input", () => {
      updateCount();
      clearTimeout(saveT);
      saveT = setTimeout(() => {
        persist();
        $("#writeAutosave").textContent = t("write_autosaved");
      }, 800);
    });
    updateCount();
    drawTimer();

    timerBtn.onclick = () => {
      if (writeRunning) {
        clearWriteTimer();
        drawTimer();
        return;
      }
      if (writeLeft <= 0) writeLeft = (w.minutes || 40) * 60;
      writeRunning = true;
      drawTimer();
      writeTimerId = setInterval(() => {
        writeLeft -= 1;
        if (writeLeft <= 0) {
          clearWriteTimer();
          toast(t("write_time_up"));
          playSfx("done");
        }
        drawTimer();
      }, 1000);
    };
    $("#writeReset").onclick = () => {
      clearWriteTimer();
      writeLeft = (w.minutes || 40) * 60;
      drawTimer();
    };
    const longEnough = () => {
      const min = Math.min(50, w.minWords);
      if (countWords(area.value) >= min) return true;
      toast(fmt(t("write_too_short"), { n: min }));
      return false;
    };
    $("#writeDone").onclick = () => {
      persist();
      if (!longEnough()) return;
      clearWriteTimer();
      drawTimer();
      toast(awardOnce(`write:${w.id}`, 25) ? `${t("write_done_ok")} +${xpText(25)}` : t("toast_already"));
    };
    $("#writeAi").onclick = async () => {
      persist();
      if (!longEnough()) return;
      const data = await window.FP_AIUI.runFeedback(
        "writing",
        { text: area.value, prompt: w.prompt, minWords: w.minWords, task: w.task },
        $("#writeFb"),
        $("#writeAi")
      );
      if (data) {
        if (!state.writeBands) state.writeBands = {};
        state.writeBands[w.id] = data.overall;
        saveState();
        if (awardOnce(`write:${w.id}`, 25)) toast(`${t("write_done_ok")} +${xpText(25)}`);
      }
    };
  }

  /* Phrases */
  function initPhrases() {
    const grid = $("#phraseGrid");
    const items = DATA.phrases || [];
    grid.innerHTML = items
      .map(
        (p) => `
      <article class="phrase-card glass">
        <p class="phrase-en">${escapeHtml(p.en)}</p>
        <p class="muted">${escapeHtml(p.kk)}</p>
        <p class="phrase-use">${escapeHtml(p.use)}</p>
        <div class="phrase-actions">
          <button type="button" class="btn btn-ghost btn-sm" data-say="${escapeHtml(p.en)}" aria-label="Play">${ic("volume-2")}</button>
          <button type="button" class="btn btn-secondary btn-sm" data-copy="${escapeHtml(p.en)}">${escapeHtml(t("phrase_copy"))}</button>
        </div>
      </article>`
      )
      .join("");
    grid.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.onclick = async () => {
        try {
          await navigator.clipboard.writeText(btn.dataset.copy);
          toast(t("phrase_copied"));
        } catch {
          toast(btn.dataset.copy);
        }
      };
    });
    grid.querySelectorAll("[data-say]").forEach((btn) => (btn.onclick = () => speakText(btn.dataset.say)));
  }

  /* Practice hub */
  function renderPractice() {
    const set = (sel, v) => {
      const el = $(sel);
      if (el) el.textContent = v;
    };
    set("#pcGrammar", fmt(t("pc_lessons"), { n: DATA.lessons.length }));
    set("#pcListening", fmt(t("pc_tracks"), { n: (DATA.listening || []).length }));
    set("#pcReading", fmt(t("pc_texts"), { n: (DATA.readings || []).length }));
    set("#pcSpeaking", fmt(t("pc_topics"), { n: (DATA.speaking || []).length }));
    set("#pcWriting", fmt(t("pc_tasks"), { n: (DATA.writing || []).length }));
    set("#pcPhrases", fmt(t("pc_phrases"), { n: (DATA.phrases || []).length }));
    set("#pcVocab", fmt(t("pc_words"), { n: DATA.vocab.length }));
    set("#pcStories", fmt(t("pc_stories"), { n: (DATA.stories || []).length }));
  }

  /* Focus pomodoro */
  function updateFocusClock() {
    if ($("#focusClock")) $("#focusClock").textContent = fmtTime(focusLeft);
  }

  function clearFocus() {
    clearInterval(focusTimerId);
    focusTimerId = null;
    focusRunning = false;
  }

  /* Export / import */
  function exportProgress() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `fluentpath-progress-${localDay()}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast(t("export_ok"));
  }

  function importProgress(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!data || typeof data !== "object" || typeof data.xp !== "number") throw new Error("bad file");
        state = normalizeState(data);
        saveState();
        applyTheme();
        applyI18n();
        toast(t("import_ok"));
      } catch {
        toast(t("import_fail"));
      }
    };
    reader.readAsText(file);
  }

  /* Listening (Web Speech API TTS) — sentence-by-sentence */
  function splitSentences(text) {
    return text
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }

  function stopListening() {
    listenPlayingAll = false;
    VOICE.stop();
    clearInterval(speakTimer);
    $("#eqAnim")?.classList.remove("playing");
    if ($("#listenFill")) $("#listenFill").style.width = "0%";
  }

  function updateListenProgress() {
    const total = listenSentences.length || 1;
    const p = Math.min(100, (listenSentIndex / total) * 100);
    if ($("#listenFill")) $("#listenFill").style.width = `${p}%`;
    if ($("#listenSentInfo")) {
      $("#listenSentInfo").textContent = fmt(t("listen_sentence"), { n: Math.min(listenSentIndex + 1, total), total });
    }
    const cur = $("#listenCurrentSent");
    if (cur && listenSentences[listenSentIndex]) {
      cur.classList.toggle("hidden", !listenShowText);
      cur.textContent = listenSentences[listenSentIndex];
    }
  }

  function renderTranscriptHighlight() {
    const el = $("#listenTranscript");
    if (!el || !listenSentences.length) return;
    el.innerHTML = listenSentences
      .map((s, i) => {
        const cls = i === listenSentIndex ? "sent active" : i < listenSentIndex ? "sent done" : "sent";
        return `<span class="${cls}">${escapeHtml(s)}</span> `;
      })
      .join("");
  }

  function initListeningList() {
    const box = $("#listeningPick");
    if (!box) return;
    box.classList.remove("hidden");
    $("#listeningActive")?.classList.add("hidden");
    const tracks = DATA.listening || [];
    box.innerHTML = tracks
      .map(
        (tr, i) => `
      <button type="button" data-id="${tr.id}">
        <span class="track-title">${ic("headphones")}<strong>${i + 1}. ${escapeHtml(tr.title)}</strong></span>
        <span class="track-meta">${escapeHtml(tr.level)} · ${escapeHtml(minLabel(tr.duration))}</span>
      </button>`
      )
      .join("");
    box.querySelectorAll("button").forEach((b) => {
      b.onclick = () => openListening(b.dataset.id);
    });
  }

  function openListening(id, keepLangOnly = false) {
    const tr = (DATA.listening || []).find((x) => x.id === id);
    if (!tr) return;
    listenTrack = tr;
    listenSentences = splitSentences(tr.text);
    if (!keepLangOnly) {
      listenShowText = false;
      listenSentIndex = 0;
      stopListening();
    }
    $("#listeningPick").classList.add("hidden");
    $("#listeningActive").classList.remove("hidden");
    updatePlayBtn();
    $("#listenTitle").textContent = tr.title;
    $("#listenMeta").textContent = `${tr.level} · ${minLabel(tr.duration)} · ${fmt(t("listen_sentences"), {
      n: listenSentences.length,
    })}`;
    renderTranscriptHighlight();
    $("#listenTranscript").classList.toggle("hidden", !listenShowText);
    const tog = $("#listenToggleText");
    if (tog) tog.textContent = listenShowText ? t("listen_hide") : t("listen_show");
    $("#listenScore")?.classList.add("hidden");
    updateListenProgress();
    $("#listenQs").innerHTML = tr.questions
      .map(
        (qq, qi) => `
      <div class="rq">
        <p>${qi + 1}. ${escapeHtml(qq.q)}</p>
        ${qq.options
          .map((o, oi) => `<label><input type="radio" name="lq${qi}" value="${oi}" /> ${escapeHtml(o)}</label>`)
          .join("")}
      </div>`
      )
      .join("");
  }

  const trackVoice = () => VOICE.trackVoice(Math.max(0, (DATA.listening || []).indexOf(listenTrack)));

  function speakSentence(index, thenNext) {
    if (!listenTrack || !canSpeakAloud()) {
      toast(t("speek_unsupported"));
      return;
    }
    if (index < 0 || index >= listenSentences.length) {
      listenPlayingAll = false;
      listenSentIndex = Math.max(0, listenSentences.length - 1);
      $("#eqAnim")?.classList.remove("playing");
      if ($("#listenFill")) $("#listenFill").style.width = "100%";
      updatePlayBtn();
      return;
    }
    listenSentIndex = index;
    updateListenProgress();
    renderTranscriptHighlight();
    const voice = trackVoice();
    VOICE.say(listenSentences[index], {
      voice,
      rate: listenRate,
      onstart: () => {
        $("#eqAnim")?.classList.add("playing");
        updatePlayBtn();
        if (listenSentences[index + 1]) VOICE.preload(voice, listenSentences[index + 1]);
      },
      onend: () => {
        if (thenNext && listenPlayingAll) {
          speakSentence(index + 1, true);
        } else {
          $("#eqAnim")?.classList.remove("playing");
          updatePlayBtn();
        }
      },
    });
  }

  function playListening() {
    if (!listenTrack) return;
    if (!canSpeakAloud()) {
      toast(t("speek_unsupported"));
      return;
    }
    if (VOICE.isPaused()) {
      VOICE.resume();
      listenPlayingAll = true;
      $("#eqAnim")?.classList.add("playing");
      updatePlayBtn();
      return;
    }
    listenPlayingAll = true;
    const startAt = listenSentIndex >= listenSentences.length - 1 && !VOICE.isSpeaking() ? 0 : listenSentIndex;
    speakSentence(startAt, true);
  }

  function pauseListening() {
    if (VOICE.isSpeaking()) {
      VOICE.pause();
      $("#eqAnim")?.classList.remove("playing");
      listenPlayingAll = false;
    } else if (VOICE.isPaused()) {
      VOICE.resume();
      $("#eqAnim")?.classList.add("playing");
      listenPlayingAll = true;
    }
    updatePlayBtn();
  }

  function updatePlayBtn() {
    const btn = $("#listenPlay");
    if (!btn) return;
    const playing = VOICE.isSpeaking() && listenPlayingAll;
    iconLabel(btn, playing ? "pause" : "play", playing ? t("listen_pause") : t("listen_play"));
  }

  function replaySentence() {
    listenPlayingAll = false;
    speakSentence(listenSentIndex, false);
  }

  function checkListening() {
    if (!listenTrack) return;
    let score = 0;
    listenTrack.questions.forEach((qq, qi) => {
      const picked = document.querySelector(`input[name="lq${qi}"]:checked`);
      if (picked && +picked.value === qq.a) score += 1;
    });
    const el = $("#listenScore");
    el.classList.remove("hidden");
    el.textContent = `${t("result_score")}: ${score} / ${listenTrack.questions.length}`;
    awardOnce(`listen:${listenTrack.id}`, score * 6 + 8);
    window.FP_QUESTS?.bump("listen");
    playSfx(score === listenTrack.questions.length ? "done" : "ok");
    if (score === listenTrack.questions.length) burstConfetti();
  }

  /* Reading */
  function initReadingList() {
    $("#readingPick").classList.remove("hidden");
    $("#readingActive").classList.add("hidden");
    const done = state.readDone || {};
    $("#readingPick").innerHTML = DATA.readings
      .map(
        (r) =>
          `<button type="button" data-id="${r.id}">
            <span class="track-title">${ic("book-open-text")}<strong>${escapeHtml(r.title)}</strong></span>
            <span class="track-meta">${r.level} · ${fmt(t("read_questions"), { n: r.questions.length })}${
              done[r.id] != null ? ` · <b class="done-chip">${ic("check")} ${done[r.id]}/${r.questions.length}</b>` : ""
            }</span>
          </button>`
      )
      .join("");
    $all("#readingPick button").forEach((b) => {
      b.onclick = () => openReading(b.dataset.id);
    });
  }

  function openReading(id) {
    const r = DATA.readings.find((x) => x.id === id);
    if (!r) return;
    $("#readingPick").classList.add("hidden");
    $("#readingActive").classList.remove("hidden");
    $("#readingScore").classList.add("hidden");
    $("#passageText").innerHTML = `<h2>${escapeHtml(r.title)}</h2><p>${escapeHtml(r.text).replace(
      /\n\n/g,
      "</p><p>"
    )}</p>`;
    $("#readingQs").innerHTML = r.questions
      .map(
        (qq, qi) => `
      <div class="rq">
        <p>${qi + 1}. ${escapeHtml(qq.q)}</p>
        ${qq.options
          .map((o, oi) => `<label><input type="radio" name="rq${qi}" value="${oi}" /> ${escapeHtml(o)}</label>`)
          .join("")}
      </div>`
      )
      .join("");
    $("#readingCheck").onclick = () => {
      let score = 0;
      r.questions.forEach((qq, qi) => {
        const picked = document.querySelector(`input[name="rq${qi}"]:checked`);
        if (picked && +picked.value === qq.a) score += 1;
      });
      const el = $("#readingScore");
      el.classList.remove("hidden");
      el.textContent = `${t("result_score")}: ${score} / ${r.questions.length}`;
      awardOnce(`read:${r.id}`, score * 5 + 5);
      if (!state.readDone) state.readDone = {};
      state.readDone[r.id] = Math.max(state.readDone[r.id] || 0, score);
      saveState();
      window.FP_QUESTS?.bump("read");
      playSfx(score === r.questions.length ? "done" : "ok");
      if (score === r.questions.length) burstConfetti();
    };
  }

  /* Progress */
  const ACHIEVEMENTS = [
    { id: "first", icon: "footprints", test: (s) => (s.lessonsDone || 0) >= 1 },
    { id: "lessons10", icon: "book-check", test: (s) => (s.lessonsDone || 0) >= 10 },
    { id: "perfect", icon: "badge-check", test: (s) => (s.perfectLessons || 0) >= 1 },
    { id: "streak3", icon: "flame", test: (s) => (s.bestStreak || 0) >= 3 },
    { id: "streak7", icon: "calendar-check", test: (s) => (s.bestStreak || 0) >= 7 },
    { id: "words50", icon: "brain", test: (s) => Object.keys(s.srs || {}).length >= 50 },
    { id: "words200", icon: "library", test: (s) => Object.keys(s.srs || {}).length >= 200 },
    { id: "xp1000", icon: "gem", test: (s) => (s.xp || 0) >= 1000 },
    { id: "a1", icon: "sprout", test: () => (course()?.sectionsDone() || []).includes("A1") },
    { id: "b2", icon: "graduation-cap", test: () => (course()?.sectionsDone() || []).includes("B2") },
  ];

  function renderWeekChart() {
    const box = $("#weekChart");
    if (!box) return;
    const days = [];
    const now = new Date();
    for (let i = 6; i >= 0; i--) days.push(new Date(now.getFullYear(), now.getMonth(), now.getDate() - i));
    const vals = days.map((d) => state.xpLog[localDay(d)] || 0);
    const max = Math.max(state.goalXp, ...vals);
    const labels = days.map((d, i) =>
      i === 6 ? t("c_today_short") : weekday(d)
    );
    const total = vals.reduce((a, b) => a + b, 0);
    $("#weekTotal").textContent = fmt(t("week_total"), { n: total });
    $("#weekGoal").textContent = fmt(t("week_goal_legend"), { n: state.goalXp });
    box.innerHTML = `<div class="cols" role="img" aria-label="${escapeHtml(
      labels.map((l, i) => `${l}: ${xpText(vals[i])}`).join(", ")
    )}">
      <div class="cols-plot">
        <span class="goal-line" style="bottom:calc((100% - 18px) * ${state.goalXp / max})"></span>
        ${vals
          .map(
            (v, i) => `<div class="col" data-tip="${escapeHtml(labels[i])}: ${xpText(v)}">
              <span class="col-val">${i === 6 && v ? v : ""}</span>
              <span class="col-bar" style="height:${v ? Math.max(4, (v / max) * 100) : 0}%"></span>
            </div>`
          )
          .join("")}
      </div>
      <div class="cols-lbls">${labels
        .map((l, i) => `<span class="${i === 6 ? "is-today" : ""}">${escapeHtml(l)}</span>`)
        .join("")}</div>
    </div>
    <table class="sr-only"><tr>${labels.map((l) => `<th>${escapeHtml(l)}</th>`).join("")}</tr><tr>${vals
      .map((v) => `<td>${v}</td>`)
      .join("")}</tr></table>`;
    bindTips(box);
  }

  function renderProgress() {
    $("#pXp").textContent = state.xp;
    $("#pStreak").textContent = state.streak;
    $("#pBest").textContent = fmt(t("progress_best"), { n: state.bestStreak || 0 });
    $("#pKnown").textContent = Object.keys(state.srs).length;
    if (state.quizHistory.length) {
      const avg = Math.round(state.quizHistory.reduce((s, h) => s + h.score, 0) / state.quizHistory.length);
      $("#pQuiz").textContent = `${avg}%`;
    } else $("#pQuiz").textContent = "—";

    const cs = course()?.courseStats();
    if (cs) {
      $("#pCourse").textContent = `${cs.pct}%`;
      $("#pCourseFill").style.width = `${cs.pct}%`;
      $("#pCourseMeta").textContent = fmt(t("c_course_lessons"), { d: cs.done, n: cs.total });
    }
    renderWeekChart();

    const ach = $("#achGrid");
    if (ach) {
      ach.innerHTML = ACHIEVEMENTS.map((a) => {
        const on = a.test(state);
        return `<div class="ach${on ? " on" : ""}">
          <span class="ach-ico">${ic(a.icon)}</span>
          <strong>${escapeHtml(t(`ach_${a.id}_t`))}</strong>
          <span class="muted">${escapeHtml(t(`ach_${a.id}_d`))}</span>
        </div>`;
      }).join("");
    }

    const hist = $("#quizHistory");
    if (!state.quizHistory.length) {
      hist.innerHTML = `<li class="muted">${escapeHtml(t("no_quiz"))}</li>`;
    } else {
      hist.innerHTML = state.quizHistory
        .map(
          (h) =>
            `<li><span>${escapeHtml(t(QUIZ_NAMES[h.mode] || h.mode))} · ${h.date}</span><strong>${h.score}% <span class="muted">(${
              h.detail
            })</span></strong></li>`
        )
        .join("");
    }
    renderGoalChips();
    renderAiSettings();
  }

  function renderAiSettings() {
    const AI = window.FP_AI;
    if (!AI || !$("#aiStatus")) return;
    const key = AI.getKey();
    $("#aiStatus").textContent = key ? t("ai_status_own") : t("ai_status_server");
    $("#aiKey").value = key ? "••••••••" + key.slice(-4) : "";
    $("#aiModel").value = AI.getModel();
    $("#aiModel").placeholder = AI.defaultModel;
    $("#aiKeyClear").classList.toggle("hidden", !key);
    // When the site already has AI on its server, a personal key is not needed: keep the settings simple.
    window.FP_CLOUD?.config().then((c) => $("#aiBlock")?.classList.toggle("hidden", !!(c && c.ai) && !key));
  }

  function renderGoalChips() {
    $all("[data-goal]").forEach((b) => b.classList.toggle("active", +b.dataset.goal === state.goalXp));
  }

  function updateChrome() {
    refreshStreak();
    const set = (sel, v) => {
      const el = $(sel);
      if (el) el.textContent = v;
    };
    set("#statWords", String(DATA.vocab.length));
    set("#statLessons", String(course()?.totalLessons() || DATA.lessons.length));
    set("#statStreak", String(state.streak));
    set("#xpChip", String(state.xp));
    set("#streakChip", String(state.streak));
    set("#xpLabel", String(todayXp()));
    $all(".js-streak").forEach((el) => (el.textContent = String(state.streak)));
    $all(".js-xp-today").forEach((el) => (el.textContent = String(todayXp())));
    $all(".js-goal").forEach((el) => (el.textContent = String(state.goalXp)));

    const goal = state.goalXp;
    const done = todayXp();
    const pct = Math.min(100, (done / goal) * 100);
    set("#dailyDone", String(Math.min(done, 999)));
    set("#dailyGoal", String(goal));
    if ($("#dailyFill")) $("#dailyFill").style.width = `${pct}%`;
    $("#dailyRing")?.setAttribute("stroke-dasharray", `${pct}, 100`);
    $("#goalCard")?.classList.toggle("is-hit", done >= goal);

    const due = course()?.dueCount() || 0;
    $all(".due-badge").forEach((b) => {
      b.textContent = due > 99 ? "99+" : String(due);
      b.classList.toggle("hidden", due === 0);
    });
    $all(".js-due").forEach((el) => (el.textContent = String(due)));
    $all(".js-freeze").forEach((el) => (el.textContent = String(state.freezes || 0)));
    window.FP_QUESTS?.render();
    course()?.updateSide();
    renderGoalChips();
  }

  // Older saves only had known/learning flags — give those words SRS cards once.
  function migrateToSrs() {
    if (state.srsMigrated) return;
    const now = Date.now();
    Object.keys(state.known).forEach((id) => {
      if (!state.srs[id]) state.srs[id] = { b: 4, due: now + 3 * SRS.DAY, n: 1, w: 0, last: now };
    });
    Object.keys(state.learning).forEach((id) => {
      if (!state.srs[id]) state.srs[id] = { b: 1, due: now, n: 1, w: 1, last: now };
    });
    state.srsMigrated = true;
    saveState();
  }

  /* PWA */
  function setupPwa() {
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").catch(() => {});
      });
    }
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
    const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const showInstall = (on) => $all(".install-btn").forEach((b) => b.classList.toggle("hidden", !on));
    showInstall(!standalone && isIos);
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      installPrompt = e;
      showInstall(true);
    });
    window.addEventListener("appinstalled", () => {
      installPrompt = null;
      showInstall(false);
      toast(t("install_done"));
    });
    $all(".install-btn").forEach((b) =>
      b.addEventListener("click", async () => {
        if (installPrompt) {
          installPrompt.prompt();
          await installPrompt.userChoice.catch(() => null);
          installPrompt = null;
          showInstall(false);
        } else if (isIos) {
          toast(t("install_ios"));
        }
      })
    );
  }

  function bind() {
    // Delegated so buttons rendered later (path, review, home cards) navigate too.
    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-nav]");
      if (!el) return;
      const name = el.getAttribute("data-nav");
      if (!name) return;
      e.preventDefault();
      if (name === "quiz") resetQuizUI();
      showView(name, { scroll: true });
    });

    window.addEventListener("popstate", (e) => {
      if (course()?.isLessonOpen()) return;
      const name = (e.state && e.state.view) || viewFromHash();
      showView(name, { push: false });
    });

    $("#dockMoreBtn")?.addEventListener("click", (e) => {
      e.preventDefault();
      const sheet = $("#moreSheet");
      if (sheet?.classList.contains("hidden")) openMoreSheet();
      else closeMoreSheet();
    });
    $("#moreBackdrop")?.addEventListener("click", closeMoreSheet);
    $("#moreClose")?.addEventListener("click", closeMoreSheet);

    $("#burger")?.addEventListener("click", () => {
      const open = $("#mainNav").classList.toggle("open");
      $("#burger").setAttribute("aria-expanded", String(open));
    });

    // YouTube study music widget
    const musicPanel = $("#musicPanel");
    const musicFrame = $("#musicFrame");
    const musicOpenTab = $("#musicOpenTab");
    $("#musicToggle")?.addEventListener("click", () => {
      musicPanel?.classList.toggle("hidden");
    });
    $("#musicClose")?.addEventListener("click", () => {
      musicPanel?.classList.add("hidden");
    });
    $all("[data-yt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.yt;
        if (!id || !musicFrame) return;
        $all("[data-yt]").forEach((b) => b.classList.toggle("active", b === btn));
        musicFrame.src = `https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0&autoplay=1`;
        if (musicOpenTab) musicOpenTab.href = `https://www.youtube.com/watch?v=${id}`;
      });
    });

    $("#themeToggle")?.addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      applyTheme();
      saveState();
    });

    $("#langSelect")?.addEventListener("change", (e) => {
      state.lang = e.target.value || "kk";
      saveState();
      applyI18n();
    });

    $all("[data-goal]").forEach((b) =>
      b.addEventListener("click", () => {
        state.goalXp = +b.dataset.goal;
        saveState();
        updateChrome();
        if (currentView === "progress") renderWeekChart();
        toast(fmt(t("goal_set"), { n: state.goalXp }));
      })
    );

    // Listening controls
    $("#listenPlay")?.addEventListener("click", () => {
      if ((VOICE.isSpeaking() || VOICE.isPaused()) && listenTrack) pauseListening();
      else playListening();
      updatePlayBtn();
    });
    $("#listenReplaySent")?.addEventListener("click", replaySentence);
    $("#listeningBack")?.addEventListener("click", () => {
      stopListening();
      initListeningList();
    });
    $("#listenCheck")?.addEventListener("click", checkListening);
    $("#listenToggleText")?.addEventListener("click", () => {
      listenShowText = !listenShowText;
      $("#listenTranscript")?.classList.toggle("hidden", !listenShowText);
      if (listenShowText) renderTranscriptHighlight();
      updateListenProgress();
      const tog = $("#listenToggleText");
      if (tog) tog.textContent = listenShowText ? t("listen_hide") : t("listen_show");
    });
    $all("[data-rate]").forEach((btn) => {
      if (btn.closest("#lesson")) return;
      btn.addEventListener("click", () => {
        listenRate = parseFloat(btn.dataset.rate) || 1;
        $all(".speed-row [data-rate]").forEach((b) => b.classList.toggle("active", b === btn));
        if (VOICE.isSpeaking() || VOICE.isPaused()) {
          listenPlayingAll = true;
          speakSentence(listenSentIndex, true);
        }
      });
    });

    const flip = () => {
      if (!vocabQueue.length) return;
      flashFlipped = !flashFlipped;
      $("#flashCard").classList.toggle("flipped", flashFlipped);
    };
    $("#flashCard")?.addEventListener("click", flip);
    $("#flashSay")?.addEventListener("click", (e) => {
      e.stopPropagation();
      const w = vocabQueue[vocabIndex];
      if (w) speakText(w.en);
    });
    $("#flashEasy")?.addEventListener("click", () => gradeFlash(true));
    $("#flashHard")?.addEventListener("click", () => gradeFlash(false));
    $("#flashSkip")?.addEventListener("click", nextFlash);

    $("#modeAll")?.addEventListener("click", () => setVocabMode("all"));
    $("#modeWeak")?.addEventListener("click", () => setVocabMode("weak"));
    $("#modeKnown")?.addEventListener("click", () => setVocabMode("known"));

    // Flashcard keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (currentView !== "vocab" || document.body.classList.contains("lesson-open")) return;
      const tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || tag === "BUTTON") return;
      if (e.code === "Space") {
        e.preventDefault();
        flip();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        gradeFlash(false);
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        gradeFlash(true);
      }
    });

    // Focus timer
    $("#focusStart")?.addEventListener("click", () => {
      if (focusRunning) return;
      if (focusLeft <= 0) focusLeft = 25 * 60;
      focusRunning = true;
      focusTimerId = setInterval(() => {
        focusLeft -= 1;
        updateFocusClock();
        if (focusLeft <= 0) {
          clearFocus();
          toast(t("focus_done"));
          playSfx("done");
          markActivity(30);
          burstConfetti();
          focusLeft = 25 * 60;
          updateFocusClock();
        }
      }, 1000);
    });
    $("#focusPause")?.addEventListener("click", () => clearFocus());
    $("#focusReset")?.addEventListener("click", () => {
      clearFocus();
      focusLeft = 25 * 60;
      updateFocusClock();
    });

    // AI settings (personal Gemini key, saved only on this device)
    $("#aiKeySave")?.addEventListener("click", () => {
      const key = $("#aiKey").value.trim();
      if (key && !key.startsWith("••")) window.FP_AI.setKey(key);
      window.FP_AI.setModel($("#aiModel").value);
      renderAiSettings();
      toast(t("ai_key_saved"));
    });
    $("#aiKeyClear")?.addEventListener("click", () => {
      window.FP_AI.setKey("");
      renderAiSettings();
      toast(t("ai_key_removed"));
    });

    // Export / import
    $("#exportProgress")?.addEventListener("click", exportProgress);
    $("#importProgress")?.addEventListener("change", (e) => {
      const f = e.target.files && e.target.files[0];
      if (f) importProgress(f);
      e.target.value = "";
    });

    let searchT;
    $("#vocabSearch")?.addEventListener("input", () => {
      clearTimeout(searchT);
      searchT = setTimeout(initVocab, 120);
    });
    $("#vocabLevel")?.addEventListener("change", initVocab);

    $all("[data-quiz]").forEach((btn) => {
      btn.addEventListener("click", () => startQuiz(btn.dataset.quiz));
    });
    $("#quizNext")?.addEventListener("click", nextQuiz);
    $("#quizRetry")?.addEventListener("click", resetQuizUI);
    $("#readingBack")?.addEventListener("click", initReadingList);

    $("#resetProgress")?.addEventListener("click", async () => {
      if (await askConfirm(t("reset_confirm"), { yes: t("progress_reset"), no: t("ask_no"), danger: true })) {
        const keep = { theme: state.theme, lang: state.lang };
        state = { ...defaultState(), ...keep, srsMigrated: true };
        saveState();
        applyTheme();
        updateChrome();
        renderProgress();
        toast(t("toast_reset"));
      }
    });

    // scroll top progress
    window.addEventListener(
      "scroll",
      () => {
        const el = $("#scrollProgress");
        if (!el) return;
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        el.style.width = `${max > 0 ? (h.scrollTop / max) * 100 : 0}%`;
      },
      { passive: true }
    );
  }

  // Core API for course.js (lesson path, player, review).
  window.FP = {
    get state() {
      return state;
    },
    save: saveState,
    replaceState,
    t,
    toast,
    confirm: askConfirm,
    escapeHtml,
    shuffle,
    addXp: markActivity,
    awardOnce,
    fmt,
    xp: xpText,
    startSpeechRec,
    hasSpeechRec: () => !!SpeechRec,
    goalReached,
    confetti: burstConfetti,
    speak: speakText,
    stopSpeech,
    hasTTS: canSpeakAloud,
    sfx: playSfx,
    showView,
    refresh: updateChrome,
    localDay,
    locale,
    weekday,
    bindTips,
  };

  function init() {
    if (!DATA || !DATA.vocab) {
      console.error("FP_DATA missing");
      return;
    }
    migrateToSrs();
    refreshStreak();
    applyTheme();
    bind();
    course()?.init();
    setupPwa();
    const first = viewFromHash();
    currentView = first;
    try {
      history.replaceState({ view: first }, "", `#${first}`);
    } catch {
      /* ignore */
    }
    applyI18n();
    updateFocusClock();
    showView(first, { push: false });
    window.FP_CLOUD_UI?.init();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
