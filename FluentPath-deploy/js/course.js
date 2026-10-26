/* FluentPath — lesson path, lesson player and spaced-repetition review.
   Uses the core API that app.js exposes as window.FP. */
(() => {
  const D = window.FP_DATA;
  const SRS = window.FP_SRS;
  const FP = () => window.FP;
  const t = (k) => FP().t(k);
  const S = () => FP().state;
  const $ = (s, root = document) => root.querySelector(s);
  const $all = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = (s) => FP().escapeHtml(s);
  const fmt = (s, vars = {}) => String(s).replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ""));
  const shuffle = (a) => FP().shuffle(a);
  const pick = (a) => a[Math.floor(Math.random() * a.length)];

  const LEVELS = [
    { id: "A1", color: "#34d399", icon: "sprout" },
    { id: "A2", color: "#22d3ee", icon: "compass" },
    { id: "B1", color: "#a78bfa", icon: "rocket" },
    { id: "B2", color: "#7c9bff", icon: "graduation-cap" },
  ];
  // Beginner units follow a teaching order; B1/B2 interleave topics instead.
  const TOPIC_ORDER = {
    A1: ["daily", "family", "food", "home", "time", "describe", "actions"],
    A2: ["city", "shopping", "education", "work", "health", "nature", "feelings", "hobby"],
  };
  const WORDS_PER_LESSON = 6;
  const WORDS_PER_UNIT = 30;
  const XP_BASE = { words: 10, grammar: 12, review: 15 };
  const NODE_OFFSETS = [0, 44, 70, 44, 0, -44, -70, -44];
  const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

  const byId = new Map(D.vocab.map((w) => [w.id, w]));

  /* ---------- Course structure ---------- */
  function sectionOfLevel(level) {
    const s = String(level);
    if (s.startsWith("B1–B2")) return "B2";
    return s.slice(0, 2);
  }

  function chunkEven(list, parts) {
    const out = [];
    const size = list.length / parts;
    for (let i = 0; i < parts; i++) {
      out.push(list.slice(Math.round(i * size), Math.round((i + 1) * size)));
    }
    return out.filter((c) => c.length);
  }

  function orderUnits(level, units) {
    const pref = TOPIC_ORDER[level];
    if (pref) {
      const rank = (u) => (u.topic === "mixed" ? 999 : pref.indexOf(u.topic) + 1 || 500);
      return units.slice().sort((a, b) => rank(a) - rank(b) || a.part - b.part);
    }
    const byTopic = new Map();
    units.forEach((u) => {
      if (u.topic === "mixed") return;
      if (!byTopic.has(u.topic)) byTopic.set(u.topic, []);
      byTopic.get(u.topic).push(u);
    });
    const queues = [...byTopic.values()].sort((a, b) => b.length - a.length);
    const out = [];
    while (queues.some((q) => q.length)) {
      queues.forEach((q) => {
        if (q.length) out.push(q.shift());
      });
    }
    const mixed = units.find((u) => u.topic === "mixed");
    if (mixed) out.push(mixed);
    return out;
  }

  function buildCourse() {
    const nodes = [];
    const sections = [];
    LEVELS.forEach((lv, si) => {
      const groups = new Map();
      D.vocab
        .filter((w) => w.level === lv.id)
        .forEach((w) => {
          if (!groups.has(w.topic)) groups.set(w.topic, []);
          groups.get(w.topic).push(w);
        });
      const raw = [];
      const mixed = [];
      groups.forEach((list, topic) => {
        if (list.length < 6) {
          mixed.push(...list);
          return;
        }
        const n = Math.ceil(list.length / WORDS_PER_UNIT);
        chunkEven(list, n).forEach((words, k) =>
          raw.push({ topic, part: n > 1 ? k + 1 : 0, words })
        );
      });
      if (mixed.length) raw.push({ topic: "mixed", part: 0, words: mixed });
      const units = orderUnits(lv.id, raw);
      const grammar = D.lessons.filter((l) => sectionOfLevel(l.level) === lv.id);
      const section = { ...lv, index: si, units: [], nodes: [], words: [] };

      units.forEach((u, ui) => {
        const unit = { ...u, index: ui, section, nodes: [], id: `${lv.id}.${u.topic}.${u.part}` };
        const lessons = chunkEven(u.words, Math.ceil(u.words.length / WORDS_PER_LESSON));
        const grammarHere = grammar.filter(
          (g, gi) => Math.floor((gi * units.length) / grammar.length) === ui
        );
        const mid = Math.ceil(lessons.length / 2);
        lessons.forEach((words, li) => {
          unit.nodes.push({ id: `${unit.id}.L${li}`, type: "words", words, n: li + 1 });
          if (li + 1 === mid) {
            grammarHere.forEach((g) =>
              unit.nodes.push({ id: `G.${g.id}`, type: "grammar", lesson: g })
            );
          }
        });
        unit.nodes.push({ id: `${unit.id}.R`, type: "review", words: u.words });
        unit.nodes.forEach((nd) => {
          nd.unit = unit;
          nd.section = section;
          nd.index = nodes.length;
          nodes.push(nd);
          section.nodes.push(nd);
        });
        section.units.push(unit);
        section.words.push(...u.words);
      });
      sections.push(section);
    });
    return { sections, nodes };
  }

  let COURSE = null;
  const course = () => COURSE || (COURSE = buildCourse());

  function prog() {
    const s = S();
    if (!s.path) s.path = {};
    return s.path;
  }
  const isDone = (nd) => !!prog()[nd.id]?.done;

  function currentIndex() {
    const i = course().nodes.findIndex((n) => !isDone(n));
    return i === -1 ? course().nodes.length : i;
  }

  function nodeState(nd, cur) {
    if (isDone(nd)) return "done";
    return nd.index === cur ? "current" : "locked";
  }

  function unitTitle(unit) {
    const base = t(`topic_${unit.topic}`);
    return unit.part ? `${base} ${ROMAN[unit.part] || unit.part}` : base;
  }

  function nodeTitle(nd) {
    if (nd.type === "grammar") return nd.lesson.title;
    if (nd.type === "review") return t("c_node_review");
    return fmt(t("c_node_words"), { n: nd.n });
  }

  function courseStats() {
    const c = course();
    const done = c.nodes.filter(isDone).length;
    return { done, total: c.nodes.length, pct: Math.round((done / c.nodes.length) * 100) };
  }

  const ic = (name, cls) => window.FP_IC(name, cls);
  const starRow = (n, cls = "") => Array.from({ length: n }, () => ic("star", `ic-fill ${cls}`)).join("");

  /* ---------- Path view ---------- */
  function nodeHtml(nd, cur, k) {
    const st = nodeState(nd, cur);
    const p = prog()[nd.id];
    let icon = "star";
    if (nd.type === "grammar") icon = "book";
    else if (nd.type === "review") icon = "trophy";
    else if (st === "done") icon = "check";
    if (st === "locked") icon = nd.type === "words" ? "lock" : icon;
    const stars =
      st === "done" && p && p.stars
        ? `<div class="node-stars" aria-hidden="true">${starRow(p.stars || 1)}<span>${starRow(3 - (p.stars || 1))}</span></div>`
        : "";
    return `<div class="node-wrap" style="--x:${NODE_OFFSETS[k % NODE_OFFSETS.length]}px">
      ${st === "current" ? `<div class="node-bubble">${esc(t("c_bubble_start"))}</div>` : ""}
      <button type="button" class="node node-${nd.type} is-${st}" data-node="${nd.index}" aria-label="${esc(
        nodeTitle(nd)
      )}"><span class="node-ico">${ic(icon)}</span></button>
      ${stars}
    </div>`;
  }

  let scrollToCurrent = true;

  function renderPath() {
    const host = $("#pathMain");
    if (!host) return;
    const c = course();
    const cur = currentIndex();
    const curSection = c.nodes[cur] ? c.nodes[cur].section.index : LEVELS.length;
    let unitNo = 0;
    host.innerHTML = c.sections
      .map((sec) => {
        const done = sec.nodes.filter(isDone).length;
        const pct = Math.round((done / sec.nodes.length) * 100);
        const lessons = sec.nodes.length;
        const canJump = sec.index > curSection;
        const units = sec.units
          .map((u) => {
            unitNo += 1;
            return `<div class="unit">
              <div class="unit-head"><span>${esc(fmt(t("c_unit_n"), { n: unitNo }))}</span><strong>${esc(
                unitTitle(u)
              )}</strong></div>
              <div class="unit-nodes">${u.nodes.map((nd, k) => nodeHtml(nd, cur, k)).join("")}</div>
            </div>`;
          })
          .join("");
        return `<section class="sec${canJump ? " is-ahead" : ""}" style="--sec:${sec.color}" id="sec-${sec.id}">
          <header class="sec-head">
            <div class="sec-copy">
              <p class="sec-eyebrow">${ic(sec.icon)} ${sec.id} · ${esc(fmt(t("c_section_n"), { n: sec.index + 1 }))}</p>
              <h2>${esc(t("c_sec_" + sec.id))}</h2>
              <p class="sec-meta">${esc(fmt(t("c_lessons_words"), { l: lessons, w: sec.words.length }))}</p>
            </div>
            <div class="sec-side">
              <strong class="sec-pct">${pct}%</strong>
              ${
                canJump
                  ? `<button type="button" class="btn-3d btn-3d-light btn-3d-sm" data-jump="${sec.index}" title="${esc(
                      t("c_jump_desc")
                    )}">${esc(t("c_jump"))}</button>`
                  : ""
              }
            </div>
            <div class="progress-bar slim sec-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
          </header>
          ${units}
        </section>`;
      })
      .join("");

    $all(".node", host).forEach((b) =>
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleNodePop(+b.dataset.node);
      })
    );
    $all("[data-jump]", host).forEach((b) =>
      b.addEventListener("click", async () => {
        if (await FP().confirm(t("c_jump_desc"), { yes: t("c_jump_yes"), no: t("c_cancel") })) startJump(+b.dataset.jump);
      })
    );
    updateSide();
    if (scrollToCurrent) {
      scrollToCurrent = false;
      const curEl = $(".node.is-current", host);
      if (curEl && cur > 2) {
        setTimeout(() => curEl.scrollIntoView({ block: "center", behavior: "smooth" }), 350);
      }
    }
  }

  function closeNodePop() {
    $("#nodePop")?.remove();
  }

  function toggleNodePop(index) {
    const open = $("#nodePop");
    if (open && +open.dataset.node === index) {
      closeNodePop();
      return;
    }
    closeNodePop();
    const nd = course().nodes[index];
    const st = nodeState(nd, currentIndex());
    const wrap = $(`.node[data-node="${index}"]`)?.closest(".node-wrap");
    if (!wrap) return;
    const pop = document.createElement("div");
    pop.className = `node-pop is-${st}`;
    pop.id = "nodePop";
    pop.dataset.node = String(index);
    const words =
      nd.type !== "grammar"
        ? `<div class="pop-words">${nd.words
            .slice(0, 8)
            .map((w) => `<span>${esc(w.en)}</span>`)
            .join("")}${nd.words.length > 8 ? `<span>+${nd.words.length - 8}</span>` : ""}</div>`
        : "";
    const desc =
      nd.type === "grammar"
        ? t("c_node_grammar_desc")
        : nd.type === "review"
        ? t("c_node_review_desc")
        : t("c_new_words");
    const btn =
      st === "locked"
        ? `<button type="button" class="btn-3d btn-3d-block" disabled>${esc(t("c_locked"))}</button>`
        : `<button type="button" class="btn-3d btn-3d-block" data-start="${index}">${esc(
            st === "done" ? t("c_redo") : fmt(t("c_start_xp"), { xp: XP_BASE[nd.type] })
          )}</button>`;
    pop.innerHTML = `<p class="pop-eyebrow">${esc(unitTitle(nd.unit))}</p>
      <h3>${esc(nodeTitle(nd))}</h3>
      <p class="pop-desc">${esc(desc)}</p>
      ${words}
      ${btn}`;
    pop.addEventListener("click", (e) => e.stopPropagation());
    wrap.appendChild(pop);
    pop.querySelector("[data-start]")?.addEventListener("click", () => startNode(index));
  }

  function weekDays() {
    const out = [];
    const now = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      out.push(d);
    }
    return out;
  }

  function updateSide() {
    const s = S();
    const stats = courseStats();
    const due = dueCount();
    const setText = (sel, v) => {
      const el = $(sel);
      if (el) el.textContent = v;
    };
    setText("#sideStreak", String(s.streak || 0));
    setText("#sideDue", String(due));
    setText("#sideCourse", `${stats.done} / ${stats.total}`);
    const fill = $("#sideCourseFill");
    if (fill) fill.style.width = `${stats.pct}%`;
    const dueBtn = $("#sideDueBtn");
    if (dueBtn) dueBtn.disabled = due === 0;
    const week = $("#sideWeek");
    if (week) {
      const log = s.xpLog || {};
      week.innerHTML = weekDays()
        .map((d) => {
          const key = FP().localDay(d);
          const on = (log[key] || 0) > 0;
          return `<span class="wk${on ? " on" : ""}${key === FP().localDay() ? " today" : ""}" title="${esc(
            FP().weekday(d, "long")
          )}"><i>${on ? ic("flame") : ""}</i><b>${esc(FP().weekday(d))}</b></span>`;
        })
        .join("");
    }
  }

  /* Home: continue card + level overview */
  function renderHome() {
    const box = $("#homeContinue");
    const c = course();
    const cur = currentIndex();
    const stats = courseStats();
    if (box) {
      const nd = c.nodes[cur];
      if (!nd) {
        box.innerHTML = `<p class="cont-eyebrow">${ic("graduation-cap")} ${esc(t("c_course_done"))}</p>
          <h3>${esc(t("c_course_done_sub"))}</h3>
          <button type="button" class="btn-3d btn-3d-block" data-nav="review">${esc(t("c_rev_start"))}</button>`;
      } else {
        box.style.setProperty("--sec", nd.section.color);
        box.innerHTML = `<p class="cont-eyebrow">${ic(nd.section.icon)} ${nd.section.id} · ${esc(
          t("c_sec_" + nd.section.id)
        )}</p>
          <h3>${esc(unitTitle(nd.unit))} · ${esc(nodeTitle(nd))}</h3>
          <div class="cont-prog"><div class="progress-bar slim"><div class="progress-fill" style="width:${
            stats.pct
          }%"></div></div><span>${stats.pct}%</span></div>
          <p class="cont-meta">${esc(fmt(t("c_course_lessons"), { d: stats.done, n: stats.total }))}</p>
          <button type="button" class="btn-3d btn-3d-block" id="homeContinueBtn">${esc(
            cur === 0 ? t("c_start_first") : t("c_continue_lesson")
          )}</button>`;
        $("#homeContinueBtn")?.addEventListener("click", () => startNode(cur));
      }
    }
    const lv = $("#homeLevels");
    if (lv) {
      lv.innerHTML = c.sections
        .map((sec) => {
          const done = sec.nodes.filter(isDone).length;
          const pct = Math.round((done / sec.nodes.length) * 100);
          return `<button type="button" class="level-card" style="--sec:${sec.color}" data-level="${sec.id}">
            <span class="level-ico">${ic(sec.icon)}</span>
            <span class="level-id">${sec.id}</span>
            <strong>${esc(t("c_sec_" + sec.id))}</strong>
            <span class="level-meta">${esc(fmt(t("c_lessons_words"), {
              l: sec.nodes.length,
              w: sec.words.length,
            }))}</span>
            <span class="progress-bar slim"><span class="progress-fill" style="width:${pct}%"></span></span>
          </button>`;
        })
        .join("");
      $all("[data-level]", lv).forEach((b) =>
        b.addEventListener("click", () => {
          FP().showView("learn");
          setTimeout(() => $(`#sec-${b.dataset.level}`)?.scrollIntoView({ behavior: "smooth" }), 380);
        })
      );
    }
  }

  /* ---------- Exercise generation ---------- */
  const canListen = () => FP().hasTTS() && Date.now() > (S().listenOffUntil || 0);
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  const canSpeak = () => !!SpeechRec && Date.now() > (S().speakOffUntil || 0);

  // Pronunciation: say a word (lessons) or a short sentence (unit reviews) into the microphone.
  function exSpeak(w, sentence = false) {
    const text = sentence && tokenize(w.example).length <= 7 ? w.example : w.en;
    return { type: "speak", word: w, wordIds: [w.id], text, requeue: false };
  }

  function meaningTokens(kk) {
    return String(kk)
      .toLowerCase()
      .replace(/\(.*?\)/g, "")
      .split(/[,;/]/)
      .map((s) => s.trim())
      .filter(Boolean);
  }

  function sameMeaning(a, b) {
    if (a.en.toLowerCase() === b.en.toLowerCase()) return true;
    const A = meaningTokens(a.kk);
    return meaningTokens(b.kk).some((x) => A.includes(x));
  }

  function distractors(word, n, preferOtherTopic = false) {
    const lvl = D.vocab.filter((w) => w.level === word.level);
    const pools = preferOtherTopic
      ? [lvl.filter((w) => w.topic !== word.topic), lvl, D.vocab]
      : [lvl.filter((w) => w.topic === word.topic), lvl, D.vocab];
    const out = [];
    for (const pool of pools) {
      for (const w of shuffle(pool)) {
        if (out.length >= n) break;
        if (sameMeaning(word, w) || out.some((o) => sameMeaning(o, w))) continue;
        out.push(w);
      }
      if (out.length >= n) break;
    }
    return out;
  }

  function tokenize(sentence) {
    return String(sentence)
      .split(/\s+/)
      .map((s) => s.replace(/^[^\p{L}\p{N}']+|[^\p{L}\p{N}']+$/gu, ""))
      .filter(Boolean);
  }

  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  function findWord(w) {
    const re = new RegExp(`(^|[^\\p{L}'])(${escRe(w.en)})(?![\\p{L}'])`, "iu");
    const m = w.example.match(re);
    if (!m) return null;
    const start = m.index + m[1].length;
    return {
      before: w.example.slice(0, start),
      text: m[2],
      after: w.example.slice(start + m[2].length),
    };
  }

  function exChoice(w, type) {
    const opts = shuffle([w, ...distractors(w, 3)]);
    const field = type === "choose_kk" ? "kk" : "en";
    return {
      type,
      word: w,
      wordIds: [w.id],
      options: opts.map((o) => o[field]),
      a: opts.indexOf(w),
      speakOption: type === "choose_en",
    };
  }

  function exFill(w) {
    const m = findWord(w);
    if (!m) return null;
    const opts = shuffle([w, ...distractors(w, 3, true)]);
    return {
      type: "fill",
      word: w,
      wordIds: [w.id],
      before: m.before,
      after: m.after,
      text: m.text,
      options: opts.map((o) => o.en),
      a: opts.indexOf(w),
    };
  }

  function extraTiles(toks, n) {
    const have = new Set(toks.map((x) => x.toLowerCase()));
    const out = [];
    for (const w of shuffle(D.vocab).slice(0, 40)) {
      for (const tok of tokenize(w.example)) {
        const low = tok.toLowerCase();
        if (out.length >= n) return out;
        if (!have.has(low) && low.length > 2) {
          have.add(low);
          out.push(low);
        }
      }
    }
    return out;
  }

  function exBuild(w) {
    const toks = tokenize(w.example);
    if (toks.length < 3 || toks.length > 9) return null;
    return {
      type: "build",
      word: w,
      wordIds: [w.id],
      sentence: w.example,
      target: toks,
      tiles: shuffle([...toks, ...extraTiles(toks, 2)]),
    };
  }

  const GRAMMAR_TILES = ["is", "are", "am", "do", "does", "did", "was", "were", "will", "have", "has", "to", "the", "a", "an", "not", "been", "would", "more", "than", "which", "in", "on"];

  function exBuildKk(d) {
    const toks = tokenize(d.en);
    const have = new Set(toks.map((x) => x.toLowerCase()));
    const extra = shuffle(GRAMMAR_TILES.filter((g) => !have.has(g))).slice(0, 3);
    return {
      type: "build_kk",
      kk: d.kk,
      sentence: d.en,
      target: toks,
      tiles: shuffle([...toks, ...extra]),
    };
  }

  function exMcq(q) {
    const order = shuffle(q.options.map((_, i) => i));
    return {
      type: "mcq",
      q: q.q,
      options: order.map((i) => q.options[i]),
      a: order.indexOf(q.a),
      exp: q.exp || "",
    };
  }

  function exMatch(words) {
    const chosen = [];
    for (const w of shuffle(words)) {
      if (chosen.length >= 5) break;
      if (!chosen.some((c) => sameMeaning(c, w))) chosen.push(w);
    }
    return {
      type: "match",
      pairs: chosen,
      left: shuffle(chosen),
      right: shuffle(chosen),
      wordIds: chosen.map((w) => w.id),
      requeue: false,
    };
  }

  function make(type, w) {
    switch (type) {
      case "choose_kk":
      case "choose_en":
      case "listen_choose":
        return exChoice(w, type);
      case "listen_type":
      case "type_en":
        return { type, word: w, wordIds: [w.id] };
      case "fill":
        return exFill(w);
      case "build":
        return exBuild(w);
      default:
        return null;
    }
  }

  function firstOf(types, w) {
    for (const type of types) {
      const ex = make(type, w);
      if (ex) return ex;
    }
    return exChoice(w, "choose_en");
  }

  function genWords(words) {
    const srs = S().srs || {};
    const listen = canListen();
    const basic = listen ? ["choose_kk", "choose_en", "listen_choose"] : ["choose_kk", "choose_en"];
    const items = [];
    for (let i = 0; i < words.length; i += 2) {
      const pair = words.slice(i, i + 2);
      pair.forEach((w) => {
        if (!srs[w.id]) items.push({ type: "intro", word: w, scored: false });
      });
      pair.forEach((w, k) => items.push(exChoice(w, k === 0 ? "choose_kk" : pick(basic))));
    }
    if (words.length >= 4) items.push(exMatch(words));
    const harder = listen ? ["fill", "build", "listen_type", "type_en"] : ["fill", "type_en"];
    shuffle(words)
      .slice(0, 5)
      .forEach((w) => items.push(firstOf(shuffle(harder), w)));
    if (canSpeak()) items.splice(items.length - 2, 0, exSpeak(pick(words)));
    return items;
  }

  function genUnitReview(words) {
    const listen = canListen();
    const types = listen
      ? ["type_en", "fill", "build", "listen_type", "choose_en", "listen_choose"]
      : ["type_en", "fill", "choose_en", "choose_kk"];
    const sample = shuffle(words).slice(0, 10);
    const items = sample.map((w) => firstOf(shuffle(types), w));
    if (words.length >= 4) items.splice(3, 0, exMatch(shuffle(words).slice(0, 8)));
    if (canSpeak()) items.splice(6, 0, exSpeak(pick(words), true));
    return items;
  }

  function genGrammar(lesson) {
    const items = [{ type: "tip", lesson, scored: false }];
    if (lesson.practice) {
      const p = lesson.practice;
      items.push(exMcq({ q: p.q, options: p.options, a: p.answer, exp: p.explain }));
    }
    shuffle(lesson.drills || []).forEach((d) =>
      items.push(d.type === "build" ? exBuildKk(d) : exMcq(d))
    );
    return items;
  }

  function exForStrength(w) {
    const c = (S().srs || {})[w.id];
    const b = c ? c.b : 1;
    const listen = canListen();
    let pool;
    if (b <= 1) pool = ["choose_kk", "choose_en", listen && "listen_choose"];
    else if (b <= 3) pool = ["fill", "choose_en", listen && "listen_type", "type_en"];
    else pool = ["type_en", listen && "listen_type", listen && "build", "fill"];
    return firstOf(shuffle(pool.filter(Boolean)), w);
  }

  /* ---------- Lesson player ---------- */
  let L = null;
  const LISTEN_TYPES = new Set(["listen_choose", "listen_type", "build"]);
  const UNSCORED = new Set(["intro", "tip"]);

  function startNode(index) {
    const nd = course().nodes[index];
    if (!nd) return;
    let items;
    if (nd.type === "words") items = genWords(nd.words);
    else if (nd.type === "grammar") items = genGrammar(nd.lesson);
    else items = genUnitReview(nd.words);
    openLesson({ kind: nd.type, node: nd, items, xp: XP_BASE[nd.type] });
  }

  function startReview(ids, kind = "srs") {
    const words = ids.map((id) => byId.get(id)).filter(Boolean).slice(0, 15);
    if (!words.length) {
      FP().toast(t("c_rev_empty"));
      return;
    }
    openLesson({ kind, items: shuffle(words).map(exForStrength), xp: Math.max(5, words.length) });
  }

  function startJump(targetIndex) {
    const c = course();
    const cur = currentIndex();
    const fromSection = c.nodes[cur] ? c.nodes[cur].section.index : 0;
    const skipped = c.sections.slice(fromSection, targetIndex);
    const words = skipped.flatMap((s) => s.words);
    const grammar = skipped.flatMap((s) =>
      s.nodes.filter((n) => n.type === "grammar").map((n) => n.lesson)
    );
    const items = shuffle(words)
      .slice(0, 12)
      .map((w) => firstOf(shuffle(["choose_kk", "choose_en", "fill", "type_en"]), w));
    shuffle(grammar.flatMap((l) => (l.drills || []).filter((d) => d.type === "mcq")))
      .slice(0, 3)
      .forEach((d) => items.push(exMcq(d)));
    openLesson({
      kind: "jump",
      items: shuffle(items).map((ex) => ({ ...ex, requeue: false })),
      xp: 20,
      test: { max: 3, target: targetIndex },
    });
  }

  function openLesson(cfg) {
    closeNodePop();
    FP().stopSpeech();
    L = {
      ...cfg,
      queue: cfg.items.slice(),
      done: 0,
      total: cfg.items.length,
      correct: 0,
      scored: 0,
      combo: 0,
      maxCombo: 0,
      mistakes: 0,
      started: Date.now(),
      results: {},
      step: null,
      mode: "check",
      finished: false,
      pushed: false,
    };
    const el = $("#lesson");
    el.classList.remove("hidden");
    el.classList.toggle("is-test", !!L.test);
    document.body.classList.add("lesson-open");
    try {
      history.pushState({ fpLesson: true }, "", location.href);
      L.pushed = true;
    } catch {
      /* history may be unavailable (file://) */
    }
    updateSoundBtn();
    renderHearts();
    nextStep();
  }

  function closeLesson(viaPop = false) {
    if (!L) return;
    const pushed = L.pushed;
    L = null;
    FP().stopSpeech();
    $("#lesson").classList.add("hidden");
    document.body.classList.remove("lesson-open");
    if (pushed && !viaPop && history.state && history.state.fpLesson) history.back();
    refreshViews();
  }

  async function askClose() {
    if (!L) return;
    if (L.finished || L.done === 0) {
      closeLesson();
      return;
    }
    const session = L;
    const quit = await FP().confirm(t("c_quit_confirm"), { yes: t("c_quit_yes"), no: t("c_quit_no") });
    if (quit && L === session) closeLesson();
  }

  function refreshViews() {
    renderPath();
    renderReview();
    renderHome();
    FP().refresh();
  }

  function renderBar() {
    const pct = L.finished ? 100 : Math.min(100, (L.done / Math.max(1, L.total)) * 100);
    $("#lessonBar").style.width = `${pct}%`;
    const combo = $("#lessonCombo");
    if (L.combo >= 3 && !L.finished) {
      combo.innerHTML = `${ic("flame")}${L.combo}`;
      combo.classList.remove("pop");
      void combo.offsetWidth;
      combo.classList.add("pop", "on");
    } else combo.classList.remove("on");
  }

  function renderHearts() {
    const el = $("#lessonHearts");
    if (!L.test) {
      el.classList.add("hidden");
      return;
    }
    const left = Math.max(0, L.test.max + 1 - L.mistakes);
    el.classList.remove("hidden");
    el.innerHTML = `${ic("heart", "ic-fill")}${left}`;
  }

  function nextStep() {
    if (!L) return;
    if (L.testFailed) return finish();
    const ex = L.queue.shift();
    if (!ex) return finish();
    L.step = { ex, ready: false, checked: false, answer: null };
    renderBar();
    renderExercise(ex);
  }

  function setFoot(mode, html = "", ok = null) {
    L.mode = mode;
    const foot = $("#lessonFoot");
    foot.classList.remove("is-ok", "is-bad");
    if (ok === true) foot.classList.add("is-ok");
    if (ok === false) foot.classList.add("is-bad");
    const check = $("#lessonCheck");
    const skip = $("#lessonSkip");
    $("#lessonFeedback").innerHTML = html;
    if (mode === "check") {
      check.textContent = t("c_check");
      check.disabled = !L.step.ready;
      const type = L.step.ex.type;
      skip.classList.toggle("hidden", !LISTEN_TYPES.has(type) && type !== "speak");
      skip.textContent = t(type === "speak" ? "c_cant_speak" : "c_cant_listen");
    } else {
      check.textContent = t("c_continue");
      check.disabled = false;
      skip.classList.add("hidden");
    }
  }

  function setReady(v) {
    L.step.ready = v;
    if (L.mode === "check") $("#lessonCheck").disabled = !v;
  }

  function onPrimary() {
    if (!L || !L.step) return;
    if (L.mode === "check") {
      if (L.step.ready) doCheck();
    } else if (L.mode === "continue") {
      L.done += 1;
      nextStep();
    } else if (L.mode === "result") {
      nextStep();
    } else if (L.mode === "summary") {
      const kind = L.kind;
      closeLesson();
      if (kind === "srs" || kind === "weak") FP().showView("review");
    }
  }

  // "I can't listen / speak now": switch those exercises off for an hour and swap them for reading ones.
  function onSkip() {
    if (!L) return;
    turnOff(L.step.ex.type === "speak" ? "speak" : "listen");
  }

  function turnOff(kind) {
    if (!L) return;
    const off = kind === "speak" ? (ex) => ex.type === "speak" : (ex) => LISTEN_TYPES.has(ex.type);
    S()[kind === "speak" ? "speakOffUntil" : "listenOffUntil"] = Date.now() + 60 * 60000;
    FP().save();
    FP().toast(t(kind === "speak" ? "c_speak_off" : "c_listen_off"));
    const swap = (ex) => {
      if (!off(ex)) return ex;
      const alt = ex.word ? exChoice(ex.word, "choose_en") : ex;
      return { ...alt, retry: ex.retry, tries: ex.tries, requeue: ex.requeue };
    };
    L.queue = L.queue.map(swap);
    const cur = swap(L.step.ex);
    L.step = { ex: cur, ready: false, checked: false, answer: null };
    renderExercise(cur);
  }

  function speakBtn(text, cls = "") {
    return `<button type="button" class="say ${cls}" data-say="${esc(text)}" aria-label="Play">${ic("volume-2")}</button>`;
  }

  function listenBtns(text) {
    return `<div class="listen-btns">
      <button type="button" class="say huge" data-say="${esc(text)}" aria-label="Play">${ic("volume-2")}</button>
      <button type="button" class="say slow" data-say="${esc(text)}" data-rate="0.6" aria-label="Slow">${ic("snail")}</button>
    </div>`;
  }

  function choicesHtml(options, cls = "") {
    return `<div class="choices ${cls}">${options
      .map(
        (o, i) =>
          `<button type="button" class="choice" data-i="${i}"><span class="choice-key">${
            i + 1
          }</span><span class="choice-txt">${esc(o)}</span></button>`
      )
      .join("")}</div>`;
  }

  function buildHtml() {
    return `<div class="build">
      <div class="build-answer" id="buildAnswer" aria-live="polite"></div>
      <div class="build-bank" id="buildBank"></div>
    </div>`;
  }

  const VIEWS = {
    intro: (ex) => {
      const w = ex.word;
      return `<div class="intro-card">
        <span class="intro-badge">${esc(t("c_new_word"))}</span>
        <div class="intro-word"><span>${esc(w.en)}</span>${speakBtn(w.en)}</div>
        <p class="intro-kk">${esc(w.kk)}</p>
        <p class="intro-ex"><span>“${esc(w.example)}”</span>${speakBtn(w.example, "small")}</p>
        <p class="intro-meta">${esc(w.level)} · ${esc(t("topic_" + w.topic))}</p>
      </div>`;
    },
    choose_kk: (ex) =>
      `<div class="prompt-word">${speakBtn(ex.word.en, "big")}<span>${esc(ex.word.en)}</span></div>${choicesHtml(
        ex.options
      )}`,
    choose_en: (ex) => `<div class="prompt-kk">«${esc(ex.word.kk)}»</div>${choicesHtml(ex.options)}`,
    listen_choose: (ex) => `${listenBtns(ex.word.en)}${choicesHtml(ex.options)}`,
    listen_type: (ex) =>
      `${listenBtns(ex.word.en)}<input type="text" class="ex-input" id="exInput" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${esc(
        t("c_type_ph")
      )}" />`,
    type_en: (ex) =>
      `<div class="prompt-kk">«${esc(ex.word.kk)}»</div><input type="text" class="ex-input" id="exInput" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${esc(
        t("c_type_ph")
      )}" />`,
    fill: (ex) =>
      `<p class="fill-sent">${esc(ex.before)}<span class="blank" id="fillBlank">&nbsp;</span>${esc(
        ex.after
      )}</p>${choicesHtml(ex.options)}`,
    build: (ex) => `${listenBtns(ex.sentence)}${buildHtml()}`,
    build_kk: (ex) => `<div class="prompt-kk sentence">«${esc(ex.kk)}»</div>${buildHtml()}`,
    mcq: (ex) =>
      `<p class="mcq-q">${esc(ex.q).replace(/_{2,}/g, '<span class="blank">&nbsp;</span>')}</p>${choicesHtml(
        ex.options
      )}`,
    match: (ex) => `<div class="match">
      <div class="match-col">${ex.left
        .map((w) => `<button type="button" class="match-btn" data-side="l" data-id="${w.id}">${esc(w.en)}</button>`)
        .join("")}</div>
      <div class="match-col">${ex.right
        .map((w) => `<button type="button" class="match-btn" data-side="r" data-id="${w.id}">${esc(w.kk)}</button>`)
        .join("")}</div>
    </div>`,
    tip: (ex) => `<div class="tip-card">${ex.lesson.body}</div>`,
    speak: (ex) => `<div class="prompt-word speak-prompt">${speakBtn(ex.text, "big")}<span>${esc(ex.text)}</span></div>
      ${ex.word ? `<p class="speak-kk">${esc(ex.word.kk)}</p>` : ""}
      <button type="button" class="mic-big" id="micBtn" aria-label="Microphone">${ic("mic")}</button>
      <p class="mic-hint" id="micHint">${esc(t("c_mic_tap"))}</p>`,
  };

  function renderExercise(ex) {
    const stage = $("#lessonStage");
    stage.classList.remove("is-locked", "anim-in");
    void stage.offsetWidth;
    stage.classList.add("anim-in");
    stage.innerHTML = `<div class="ex ex-${ex.type}">
      <p class="ex-title">${ex.retry ? `<span class="ex-retry">${esc(t("c_retry"))}</span>` : ""}${esc(
        t("c_ex_" + ex.type)
      )}</p>
      ${VIEWS[ex.type](ex)}
    </div>`;
    stage.scrollTop = 0;
    setFoot(UNSCORED.has(ex.type) ? "continue" : "check");
    bindExercise(ex, stage);
  }

  function bindExercise(ex, stage) {
    $all("[data-say]", stage).forEach((b) =>
      b.addEventListener("click", () => FP().speak(b.dataset.say, { rate: +b.dataset.rate || 1 }))
    );
    const autoText =
      ex.type === "intro" || ex.type === "choose_kk" || ex.type === "listen_choose" || ex.type === "listen_type"
        ? ex.word.en
        : ex.type === "build"
        ? ex.sentence
        : null;
    if (autoText) setTimeout(() => L && L.step && L.step.ex === ex && FP().speak(autoText), 250);

    $all(".choice", stage).forEach((b) =>
      b.addEventListener("click", () => {
        if (L.step.checked) return;
        $all(".choice", stage).forEach((x) => x.classList.toggle("is-sel", x === b));
        L.step.answer = +b.dataset.i;
        if (ex.type === "fill") $("#fillBlank").textContent = ex.options[L.step.answer];
        if (ex.speakOption) FP().speak(ex.options[L.step.answer]);
        setReady(true);
      })
    );

    const input = $("#exInput", stage);
    if (input) {
      input.addEventListener("input", () => setReady(input.value.trim().length > 0));
      setTimeout(() => input.focus(), 60);
    }

    if (ex.type === "build" || ex.type === "build_kk") bindBuild(ex, stage);
    if (ex.type === "match") bindMatch(ex, stage);
    if (ex.type === "speak") bindSpeak(ex, stage);
  }

  function bindBuild(ex, stage) {
    L.step.picked = [];
    const bank = $("#buildBank", stage);
    const answer = $("#buildAnswer", stage);
    const draw = () => {
      bank.innerHTML = ex.tiles
        .map(
          (tile, k) =>
            `<button type="button" class="tile${L.step.picked.includes(k) ? " is-used" : ""}" data-k="${k}">${esc(
              tile
            )}</button>`
        )
        .join("");
      answer.innerHTML = L.step.picked
        .map((k) => `<button type="button" class="tile" data-k="${k}">${esc(ex.tiles[k])}</button>`)
        .join("");
      $all(".tile", bank).forEach((b) =>
        b.addEventListener("click", () => {
          if (L.step.checked || b.classList.contains("is-used")) return;
          L.step.picked.push(+b.dataset.k);
          FP().sfx("tap");
          draw();
        })
      );
      $all(".tile", answer).forEach((b) =>
        b.addEventListener("click", () => {
          if (L.step.checked) return;
          L.step.picked = L.step.picked.filter((k) => k !== +b.dataset.k);
          draw();
        })
      );
      setReady(L.step.picked.length > 0);
    };
    draw();
  }

  function bindMatch(ex, stage) {
    let sel = null;
    let matched = 0;
    L.step.slips = 0;
    const btns = $all(".match-btn", stage);
    btns.forEach((b) =>
      b.addEventListener("click", () => {
        if (b.classList.contains("is-done")) return;
        if (b.dataset.side === "l") FP().speak(byId.get(b.dataset.id)?.en || "");
        if (!sel || sel.dataset.side === b.dataset.side) {
          btns.forEach((x) => x.classList.toggle("is-sel", x === b));
          sel = b;
          return;
        }
        if (sel.dataset.id === b.dataset.id) {
          [sel, b].forEach((x) => {
            x.classList.remove("is-sel");
            x.classList.add("is-done");
            x.disabled = true;
          });
          FP().sfx("tap");
          matched += 1;
          sel = null;
          if (matched === ex.pairs.length) {
            setReady(true);
            setTimeout(() => L && L.step && L.step.ex === ex && doCheck(), 250);
          }
        } else {
          L.step.slips += 1;
          L.results[sel.dataset.id] = false;
          L.results[b.dataset.id] = false;
          const pair = [sel, b];
          pair.forEach((x) => x.classList.add("is-bad"));
          FP().sfx("bad");
          setTimeout(() => pair.forEach((x) => x.classList.remove("is-bad", "is-sel")), 450);
          sel = null;
        }
      })
    );
  }

  function bindSpeak(ex, stage) {
    const btn = $("#micBtn", stage);
    const hint = $("#micHint", stage);
    btn.addEventListener("click", () => {
      if (!L || L.step.checked) return;
      if (L.step.rec) {
        try {
          L.step.rec.stop();
        } catch {
          /* already stopped */
        }
        return;
      }
      FP().stopSpeech();
      const rec = new SpeechRec();
      rec.lang = "en-US";
      rec.interimResults = false;
      rec.continuous = false;
      rec.maxAlternatives = 5;
      let heard = false;
      L.step.rec = rec;
      btn.classList.add("is-rec");
      hint.textContent = t("c_mic_listening");
      rec.onresult = (e) => {
        const alts = [];
        for (const r of e.results) for (let i = 0; i < r.length; i++) alts.push(r[i].transcript);
        if (!alts.length || !L || L.step.ex !== ex) return;
        heard = true;
        L.step.heard = alts;
        setReady(true);
        doCheck();
      };
      rec.onerror = (e) => {
        if (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "audio-capture") {
          L.step.rec = null;
          turnOff("speak");
        }
      };
      rec.onend = () => {
        btn.classList.remove("is-rec");
        if (L && L.step.ex === ex) {
          L.step.rec = null;
          if (!heard) hint.textContent = t("c_mic_nothing");
        }
      };
      try {
        rec.start();
      } catch {
        L.step.rec = null;
        btn.classList.remove("is-rec");
      }
    });
  }

  // Speech recognition is imperfect, so accept a close match (≥ 75% similar) among its alternatives.
  function gradeSpeak(ex) {
    const target = norm(ex.text);
    let best = 0;
    let bestText = "";
    (L.step.heard || []).forEach((h) => {
      const n = norm(h);
      const sim = 1 - lev(n, target) / Math.max(n.length, target.length, 1);
      if (sim > best) {
        best = sim;
        bestText = h;
      }
    });
    const ok = best >= 0.75;
    if (ok) window.FP_QUESTS?.bump("speak");
    return { ok, answer: ex.text, note: fmt(t("c_heard"), { w: bestText || "—" }) };
  }

  function norm(s) {
    return String(s)
      .toLowerCase()
      .replace(/[’`]/g, "'")
      .replace(/[^\p{L}\p{N}' ]+/gu, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^(to|a|an|the) /, "");
  }

  function lev(a, b) {
    const dp = Array.from({ length: b.length + 1 }, (_, j) => j);
    for (let i = 1; i <= a.length; i++) {
      let prev = dp[0];
      dp[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const tmp = dp[j];
        dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
        prev = tmp;
      }
    }
    return dp[b.length];
  }

  function gradeChoice(ex, stage) {
    const ok = L.step.answer === ex.a;
    $all(".choice", stage).forEach((b) => {
      const i = +b.dataset.i;
      b.classList.remove("is-sel");
      if (i === ex.a) b.classList.add("is-ok");
      else if (i === L.step.answer) b.classList.add("is-bad");
    });
    return { ok, answer: ex.options[ex.a] };
  }

  const GRADERS = {
    choose_kk: (ex, stage) => gradeChoice(ex, stage),
    choose_en: (ex, stage) => gradeChoice(ex, stage),
    listen_choose: (ex, stage) => ({ ...gradeChoice(ex, stage), note: `${ex.word.en} — ${ex.word.kk}` }),
    mcq: (ex, stage) => ({ ...gradeChoice(ex, stage), note: ex.exp }),
    fill: (ex, stage) => {
      const r = gradeChoice(ex, stage);
      $("#fillBlank").textContent = ex.text;
      $("#fillBlank").classList.add(r.ok ? "is-ok" : "is-bad");
      FP().speak(ex.word.example);
      return { ...r, answer: ex.word.en, note: `${ex.word.en} — ${ex.word.kk}` };
    },
    listen_type: (ex, stage) => gradeTyped(ex, stage),
    type_en: (ex, stage) => gradeTyped(ex, stage),
    build: (ex) => gradeBuild(ex),
    build_kk: (ex) => gradeBuild(ex),
    match: () => ({ ok: (L.step.slips || 0) <= 1, answer: "", note: "" }),
    speak: (ex) => gradeSpeak(ex),
  };

  function gradeTyped(ex, stage) {
    const input = $("#exInput", stage);
    const value = input.value;
    input.disabled = true;
    const a = norm(value);
    const b = norm(ex.word.en);
    let res;
    if (a === b) res = { ok: true };
    else if (b.length >= 5 && lev(a, b) <= 1) res = { ok: true, note: fmt(t("c_typo"), { w: ex.word.en }) };
    else res = { ok: false, answer: ex.word.en };
    input.classList.add(res.ok ? "is-ok" : "is-bad");
    res.note = res.note || `${ex.word.en} — ${ex.word.kk}`;
    return res;
  }

  function gradeBuild(ex) {
    const got = L.step.picked.map((k) => ex.tiles[k].toLowerCase()).join(" ");
    const want = ex.target.map((x) => x.toLowerCase()).join(" ");
    const ok = got === want;
    $("#buildAnswer").classList.add(ok ? "is-ok" : "is-bad");
    if (ex.type === "build_kk") FP().speak(ex.sentence);
    return { ok, answer: ex.sentence };
  }

  const OK_TITLES = ["c_ok1", "c_ok2", "c_ok3", "c_ok4"];

  function doCheck() {
    const ex = L.step.ex;
    const stage = $("#lessonStage");
    const res = GRADERS[ex.type](ex, stage);
    L.step.checked = true;
    stage.classList.add("is-locked");
    if (!ex.retry) {
      L.scored += 1;
      if (res.ok) L.correct += 1;
    }
    (ex.wordIds || []).forEach((id) => {
      if (!res.ok) L.results[id] = false;
      else if (L.results[id] === undefined) L.results[id] = true;
    });
    if (res.ok) {
      L.done += 1;
      L.combo += 1;
      L.maxCombo = Math.max(L.maxCombo, L.combo);
      FP().sfx("ok");
    } else {
      L.combo = 0;
      L.mistakes += 1;
      FP().sfx("bad");
      const tries = ex.tries || 0;
      if (L.test) {
        L.done += 1;
        if (L.mistakes > L.test.max) L.testFailed = true;
        renderHearts();
      } else if (ex.requeue !== false && tries < 2) {
        L.queue.push({ ...ex, retry: true, tries: tries + 1 });
      } else {
        L.done += 1;
      }
    }
    const note = res.note ? `<p class="fb-note">${esc(res.note)}</p>` : "";
    const html = res.ok
      ? `<span class="fb-ico">${ic("check")}</span><div><strong>${esc(t(pick(OK_TITLES)))}</strong>${note}</div>`
      : `<span class="fb-ico">${ic("x")}</span><div><strong>${esc(t("c_bad_title"))}</strong>${
          res.answer ? `<p class="fb-answer">${esc(res.answer)}</p>` : ""
        }${note}</div>`;
    setFoot("result", html, res.ok);
    renderBar();
    if (ex.type === "match" && res.ok) setTimeout(() => L && L.mode === "result" && L.step.ex === ex && nextStep(), 700);
  }

  function finish() {
    const s = S();
    if (!s.srs) s.srs = {};
    L.finished = true;
    const acc = L.scored ? L.correct / L.scored : 1;
    const secs = Math.round((Date.now() - L.started) / 1000);
    const perfect = L.mistakes === 0 && L.scored > 0;
    const stars = acc >= 0.95 ? 3 : acc >= 0.8 ? 2 : 1;
    let xp = 0;
    let title = perfect ? t("c_perfect") : t("c_done_title");
    let sub = "";
    let emoji = perfect ? "badge-check" : "party-popper";
    const now = Date.now();

    if (L.kind === "jump") {
      if (L.testFailed) {
        title = t("c_test_fail_t");
        sub = t("c_test_fail");
        emoji = "rotate-ccw";
      } else {
        const target = L.test.target;
        course().nodes.forEach((nd) => {
          if (nd.section.index < target && !isDone(nd)) prog()[nd.id] = { done: true, stars: 0, acc: 0, n: 0, skipped: true };
        });
        xp = L.xp;
        title = t("c_test_pass");
        emoji = "rocket";
        scrollToCurrent = true;
      }
    } else {
      xp = L.xp + (perfect ? 5 : 0);
      Object.keys(L.results).forEach((id) => {
        if (L.kind === "words") {
          if (!s.srs[id]) SRS.learn(s.srs, id, now);
          if (L.results[id] === false) SRS.grade(s.srs, id, false, now);
        } else if (L.kind !== "grammar") {
          SRS.grade(s.srs, id, L.results[id], now);
        }
      });
      if (L.node) {
        const p = prog()[L.node.id] || {};
        prog()[L.node.id] = {
          done: true,
          stars: Math.max(p.stars || 0, stars),
          acc: Math.max(p.acc || 0, Math.round(acc * 100)),
          n: (p.n || 0) + 1,
        };
      }
      if (perfect) s.perfectLessons = (s.perfectLessons || 0) + 1;
      s.lessonsDone = (s.lessonsDone || 0) + 1;
      const Q = window.FP_QUESTS;
      if (Q) {
        if (L.node) Q.bump("lesson");
        if (perfect && L.node) Q.bump("perfect");
        if (L.kind === "srs" || L.kind === "weak") Q.bump("review", Object.keys(L.results).length);
      }
    }
    FP().save();
    const goalBefore = FP().goalReached();
    if (xp) FP().addXp(xp);
    const goalHit = !goalBefore && FP().goalReached();

    const showStars = !!L.node;
    const mm = Math.floor(secs / 60);
    const ss = String(secs % 60).padStart(2, "0");
    $("#lessonStage").innerHTML = `<div class="summary">
      <div class="summary-emoji">${ic(emoji)}</div>
      <h2>${esc(title)}</h2>
      ${sub ? `<p class="muted">${esc(sub)}</p>` : ""}
      ${
        showStars
          ? `<div class="summary-stars" aria-label="${stars}/3">${[1, 2, 3]
              .map((i) => `<span class="${i <= stars ? "on" : ""}" style="--d:${i * 0.12}s">${ic("star", "ic-fill")}</span>`)
              .join("")}</div>`
          : ""
      }
      <div class="summary-tiles">
        <div class="sum-tile sum-xp"><span>${esc(t("c_done_xp"))}</span><strong>+${xp}</strong></div>
        <div class="sum-tile sum-acc"><span>${esc(t("c_done_acc"))}</span><strong>${Math.round(acc * 100)}%</strong></div>
        <div class="sum-tile sum-time"><span>${esc(t("c_done_time"))}</span><strong>${mm}:${ss}</strong></div>
      </div>
      ${goalHit ? `<p class="summary-goal">${esc(t("c_goal_hit"))}</p>` : ""}
    </div>`;
    L.step = { ex: { type: "summary" }, ready: true, checked: true };
    setFoot("summary");
    renderBar();
    $("#lessonCombo").classList.remove("on");
    if (!L.testFailed) {
      FP().sfx("done");
      FP().confetti();
    }
  }

  function updateSoundBtn() {
    const b = $("#lessonSound");
    if (!b) return;
    const on = S().sound !== false;
    b.innerHTML = ic(on ? "volume-2" : "volume-x");
    b.setAttribute("aria-pressed", String(on));
    b.title = on ? t("c_sound_on") : t("c_sound_off");
  }

  /* ---------- Review view ---------- */
  function dueCount() {
    return SRS.dueIds(S().srs || {}).length;
  }

  function whenLabel(ts) {
    const diff = ts - Date.now();
    if (diff <= 0) return t("c_now");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Math.floor((ts - today.getTime()) / SRS.DAY);
    if (days <= 0) {
      const h = Math.max(1, Math.round(diff / 3600000));
      return fmt(t("c_in_hours"), { n: h });
    }
    if (days === 1) return t("c_tomorrow");
    return fmt(t("c_in_days"), { n: days });
  }

  function renderReview() {
    const host = $("#reviewMain");
    if (!host) return;
    const srs = S().srs || {};
    const ids = Object.keys(srs);
    const due = SRS.dueIds(srs);
    const tiers = [0, 0, 0, 0];
    ids.forEach((id) => {
      const k = SRS.tier(srs[id]);
      if (k) tiers[k - 1] += 1;
    });
    const fc = SRS.forecast(srs, 7);
    const weak = ids
      .filter((id) => byId.has(id) && (srs[id].w > 0 || srs[id].b <= 1))
      .sort((a, b) => srs[b].w - srs[a].w || srs[a].b - srs[b].b)
      .slice(0, 12);

    let hero;
    if (!ids.length) {
      hero = `<div class="rev-hero glass is-empty">
        <div class="rev-emoji">${ic("sprout")}</div>
        <div><h2>${esc(t("c_rev_none"))}</h2><p class="muted">${esc(t("c_rev_none_sub"))}</p></div>
        <button type="button" class="btn-3d" data-nav="learn">${esc(t("c_start_first"))}</button>
      </div>`;
    } else if (!due.length) {
      const next = SRS.nextDue(srs);
      hero = `<div class="rev-hero glass is-empty">
        <div class="rev-emoji">${ic("circle-check")}</div>
        <div><h2>${esc(t("c_rev_empty"))}</h2><p class="muted">${esc(
          fmt(t("c_rev_next"), { when: next ? whenLabel(next) : "—" })
        )}</p></div>
        <button type="button" class="btn-3d btn-3d-light" data-nav="learn">${esc(t("c_continue_lesson"))}</button>
      </div>`;
    } else {
      hero = `<div class="rev-hero glass">
        <div class="rev-count"><strong>${due.length}</strong><span>${esc(t("c_rev_due"))}</span></div>
        <p class="muted">${esc(t("c_rev_hint"))}</p>
        <button type="button" class="btn-3d" id="revStart">${esc(t("c_rev_start"))} · ${Math.min(15, due.length)}</button>
      </div>`;
    }

    const total = Math.max(1, ids.length);
    const tierNames = ["c_rev_tier1", "c_rev_tier2", "c_rev_tier3", "c_rev_tier4"];
    const strength = `<div class="rev-card glass">
      <h3>${esc(t("c_rev_strength"))}</h3>
      <p class="muted small">${esc(fmt(t("c_rev_total"), { n: ids.length }))}</p>
      <div class="stack-bar" role="img" aria-label="${esc(
        tierNames.map((k, i) => `${t(k)}: ${tiers[i]}`).join(", ")
      )}">${tiers
        .map((n, i) =>
          n
            ? `<span class="seg tier-${i + 1}" style="flex:${n / total}" data-tip="${esc(t(tierNames[i]))}: ${n}"></span>`
            : ""
        )
        .join("")}</div>
      <ul class="legend">${tiers
        .map(
          (n, i) =>
            `<li><i class="sw tier-${i + 1}"></i><span>${esc(t(tierNames[i]))}</span><strong>${n}</strong></li>`
        )
        .join("")}</ul>
    </div>`;

    const max = Math.max(1, ...fc);
    const days = [...Array(7)].map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return i === 0 ? t("c_today_short") : FP().weekday(d);
    });
    const maxIdx = fc.indexOf(Math.max(...fc));
    const forecast = `<div class="rev-card glass">
      <h3>${esc(t("c_rev_forecast"))}</h3>
      <p class="muted small">${esc(t("c_rev_forecast_sub"))}</p>
      <div class="cols" role="img" aria-label="${esc(days.map((d, i) => `${d}: ${fc[i]}`).join(", "))}">
        <div class="cols-plot">${fc
          .map(
            (n, i) => `<div class="col" data-tip="${esc(days[i])}: ${n}">
              <span class="col-val">${(i === 0 || i === maxIdx) && n ? n : ""}</span>
              <span class="col-bar" style="height:${n ? Math.max(4, (n / max) * 100) : 0}%"></span>
            </div>`
          )
          .join("")}</div>
        <div class="cols-lbls">${days.map((d, i) => `<span class="${i === 0 ? "is-today" : ""}">${esc(d)}</span>`).join("")}</div>
      </div>
      <table class="sr-only"><tr>${days.map((d) => `<th>${esc(d)}</th>`).join("")}</tr><tr>${fc
        .map((n) => `<td>${n}</td>`)
        .join("")}</tr></table>
    </div>`;

    const weakCard = `<div class="rev-card glass rev-weak">
      <h3>${esc(t("c_rev_weak"))}</h3>
      ${
        weak.length
          ? `<ul class="weak-list">${weak
              .map((id) => {
                const w = byId.get(id);
                return `<li><button type="button" class="say small" data-say="${esc(w.en)}" aria-label="Play">${ic("volume-2")}</button><strong>${esc(
                  w.en
                )}</strong><span>${esc(w.kk)}</span>${srs[id].w ? `<em>${ic("x")}${srs[id].w}</em>` : ""}</li>`;
              })
              .join("")}</ul>
            <button type="button" class="btn-3d btn-3d-light btn-3d-block" id="revWeak">${esc(t("c_rev_weak_btn"))}</button>`
          : `<p class="muted">${esc(t("c_rev_weak_empty"))}</p>`
      }
    </div>`;

    // Before the first lesson there is nothing to chart: show only the invitation.
    host.innerHTML = ids.length ? `${hero}<div class="rev-grid">${strength}${forecast}</div>${weakCard}` : hero;
    $("#revStart", host)?.addEventListener("click", () => startReview(due, "srs"));
    $("#revWeak", host)?.addEventListener("click", () => startReview(weak, "weak"));
    $all("[data-say]", host).forEach((b) => b.addEventListener("click", () => FP().speak(b.dataset.say)));
    FP().bindTips(host);
  }

  /* ---------- Wiring ---------- */
  function bind() {
    $("#lessonCheck")?.addEventListener("click", onPrimary);
    $("#lessonSkip")?.addEventListener("click", onSkip);
    $("#lessonClose")?.addEventListener("click", askClose);
    $("#lessonSound")?.addEventListener("click", () => {
      S().sound = S().sound === false;
      FP().save();
      updateSoundBtn();
    });
    $("#sideDueBtn")?.addEventListener("click", () => startReview(SRS.dueIds(S().srs || {}), "srs"));
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".node-pop")) closeNodePop();
    });
    window.addEventListener("popstate", () => {
      if (L) closeLesson(true);
    });
    document.addEventListener("keydown", (e) => {
      if (!L || document.body.classList.contains("ask-open")) return;
      const typing = e.target && e.target.tagName === "INPUT";
      if (e.key === "Escape") {
        e.preventDefault();
        askClose();
      } else if (e.key === "Enter") {
        e.preventDefault();
        onPrimary();
      } else if (!typing && /^[1-9]$/.test(e.key) && L.mode === "check") {
        const btn = $all("#lessonStage .choice")[+e.key - 1];
        if (btn) btn.click();
      }
    });
  }

  window.FP_COURSE = {
    init: bind,
    renderPath,
    renderReview,
    renderHome,
    updateSide,
    dueCount,
    courseStats,
    startReview,
    isLessonOpen: () => !!L,
    sectionsDone: () => course().sections.filter((s) => s.nodes.every(isDone)).map((s) => s.id),
    totalLessons: () => course().nodes.length,
    // Level of the next lesson on the path (B2 once everything is done).
    currentLevel: () => course().nodes[currentIndex()]?.section.id || "B2",
  };
})();
