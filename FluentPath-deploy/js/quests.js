/* FluentPath — daily quests and the weekly XP challenge. Streak freezes live in app.js (streak logic). */
window.FP_QUESTS = (() => {
  const FP = () => window.FP;
  const t = (k) => FP().t(k);
  const esc = (s) => FP().escapeHtml(s);
  const QUEST_XP = 10;
  const WEEKLY_XP = 50;

  // Three slots so every day mixes a core task, a skill task and a fun task.
  const SLOTS = [
    [
      { id: "lesson1", type: "lesson", goal: 1, icon: "📗" },
      { id: "lesson2", type: "lesson", goal: 2, icon: "📚" },
      { id: "xp30", type: "xp", goal: 30, icon: "⚡" },
      { id: "xp50", type: "xp", goal: 50, icon: "⚡" },
    ],
    [
      { id: "review10", type: "review", goal: 10, icon: "🧠" },
      { id: "perfect1", type: "perfect", goal: 1, icon: "💯" },
      { id: "listen1", type: "listen", goal: 1, icon: "🎧" },
      { id: "read1", type: "read", goal: 1, icon: "📰" },
    ],
    [
      { id: "story1", type: "story", goal: 1, icon: "📖" },
      { id: "speak3", type: "speak", goal: 3, icon: "🎙", needsMic: true },
    ],
  ];
  const ALL = SLOTS.flat();
  const hasMic = () => !!(window.SpeechRecognition || window.webkitSpeechRecognition);

  function hash(str) {
    let h = 2166136261;
    for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
    return h;
  }

  function today() {
    const s = FP().state;
    const day = FP().localDay();
    if (!s.quests || s.quests.date !== day) {
      const h = hash(day);
      const list = SLOTS.map((slot, i) => {
        const options = slot.filter((q) => !q.needsMic || hasMic());
        const q = options[(h >>> (i * 4)) % options.length];
        return { id: q.id, progress: 0, done: false };
      });
      s.quests = { date: day, list };
    }
    return s.quests;
  }

  const def = (id) => ALL.find((q) => q.id === id);

  function weekStart(d = new Date()) {
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); // Monday
    return x;
  }

  function weekly() {
    const s = FP().state;
    const start = weekStart();
    const target = (s.goalXp || 20) * 5;
    let xp = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      xp += (s.xpLog || {})[FP().localDay(d)] || 0;
    }
    const key = FP().localDay(start);
    return { key, xp, target, claimed: s.weeklyClaimed === key };
  }

  function bump(type, n = 1) {
    if (!n) return;
    const q = today();
    let changed = false;
    q.list.forEach((item) => {
      const d = def(item.id);
      if (!d || d.type !== type || item.done) return;
      item.progress = Math.min(d.goal, item.progress + n);
      changed = true;
      if (item.progress >= d.goal) {
        item.done = true;
        FP().addXp(QUEST_XP, { noQuest: true });
        FP().toast(`✅ ${title(d)} · +${QUEST_XP} XP`);
        FP().sfx("done");
      }
    });
    if (changed) {
      FP().save();
      render();
    }
  }

  function onXp(xp) {
    bump("xp", xp);
    const w = weekly();
    if (!w.claimed && w.xp >= w.target) {
      FP().state.weeklyClaimed = w.key;
      FP().addXp(WEEKLY_XP, { noQuest: true });
      FP().toast(`🏅 ${t("q_weekly_done")} +${WEEKLY_XP} XP`);
      FP().confetti();
      FP().save();
    }
    render();
  }

  const title = (d) => FP().fmt(t(`q_${d.type}`), { n: d.goal });

  function render() {
    const boxes = document.querySelectorAll(".js-quests");
    if (!boxes.length || !FP()) return;
    const q = today();
    const w = weekly();
    const done = q.list.filter((x) => x.done).length;
    const html = `<div class="quests-head"><h3>${esc(t("q_title"))}</h3><span>${done} / ${q.list.length}</span></div>
      <ul class="quest-list">${q.list
        .map((item) => {
          const d = def(item.id);
          if (!d) return "";
          const pct = Math.round((item.progress / d.goal) * 100);
          return `<li class="quest${item.done ? " is-done" : ""}">
            <span class="q-ico">${item.done ? "✅" : d.icon}</span>
            <div class="q-body">
              <strong>${esc(title(d))}</strong>
              <div class="progress-bar slim"><div class="progress-fill" style="width:${pct}%"></div></div>
            </div>
            <em>${item.progress}/${d.goal}</em>
          </li>`;
        })
        .join("")}</ul>
      <div class="weekly${w.claimed ? " is-done" : ""}">
        <div class="weekly-top"><span>🏅 ${esc(t("q_weekly"))}</span><strong>${Math.min(w.xp, w.target)} / ${w.target} XP</strong></div>
        <div class="progress-bar slim"><div class="progress-fill" style="width:${Math.min(100, (w.xp / w.target) * 100)}%"></div></div>
        <p class="muted small">${esc(w.claimed ? t("q_weekly_claimed") : FP().fmt(t("q_weekly_sub"), { n: WEEKLY_XP }))}</p>
      </div>`;
    boxes.forEach((b) => (b.innerHTML = html));
  }

  return { bump, onXp, render, weekStart };
})();
