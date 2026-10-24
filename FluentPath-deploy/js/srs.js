/* FluentPath — spaced repetition (Leitner boxes with growing intervals).
   A card is { b: box 1..7, due: ms timestamp, n: times seen, w: times wrong, last: ms }. */
window.FP_SRS = (() => {
  const DAY = 86400000;
  const INTERVALS = [0, 1, 2, 4, 7, 15, 30, 60]; // days to wait after reaching box i
  const MAX_BOX = INTERVALS.length - 1;

  // First time a word is learned in a lesson: see it again tomorrow.
  function learn(srs, id, now = Date.now()) {
    if (!srs[id]) srs[id] = { b: 1, due: now + DAY, n: 1, w: 0, last: now };
    return srs[id];
  }

  // Correct → move one box up and wait longer. Wrong → back to box 1, retry in 10 minutes.
  function grade(srs, id, ok, now = Date.now()) {
    const c = srs[id] || { b: 0, due: now, n: 0, w: 0, last: now };
    c.n += 1;
    c.last = now;
    if (ok) {
      c.b = Math.min(c.b + 1, MAX_BOX);
      c.due = now + INTERVALS[c.b] * DAY;
    } else {
      c.w += 1;
      c.b = 1;
      c.due = now + 10 * 60000;
    }
    srs[id] = c;
    return c;
  }

  function dueIds(srs, now = Date.now()) {
    return Object.keys(srs)
      .filter((id) => srs[id].due <= now)
      .sort((a, b) => srs[a].due - srs[b].due);
  }

  // 1 new · 2 familiar · 3 good · 4 solid
  function tier(card) {
    if (!card) return 0;
    if (card.b <= 1) return 1;
    if (card.b <= 3) return 2;
    if (card.b <= 5) return 3;
    return 4;
  }

  // Cards coming due on each of the next `days` days (index 0 = due now or later today).
  function forecast(srs, days = 7, now = Date.now()) {
    const out = Array(days).fill(0);
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);
    Object.values(srs).forEach((c) => {
      const d = Math.max(0, Math.floor((c.due - start.getTime()) / DAY));
      if (d < days) out[d] += 1;
    });
    return out;
  }

  function nextDue(srs) {
    let min = Infinity;
    Object.values(srs).forEach((c) => {
      if (c.due < min) min = c.due;
    });
    return Number.isFinite(min) ? min : null;
  }

  return { DAY, INTERVALS, learn, grade, dueIds, tier, forecast, nextDue };
})();
