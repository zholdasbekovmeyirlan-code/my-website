/* UBT App — subjects, exam format and the question-bank loader.
 *
 * Сұрақ қосу (bank/*.js файлдарында):
 *   UBT.add("math", "Тақырып", [ ...сұрақтар ]);
 *   UBT.ctx("math", "кілт", "Контекст мәтіні (HTML рұқсат)");
 *
 * Сұрақ түрлері — дұрыс жауап ӘРҚАШАН бірінші жазылады, нұсқалар қолданбада араластырылады:
 *   ["s", "Сұрақ", ["дұрыс", "қате", "қате", "қате"], "түсіндірме"]                 бір дұрыс жауап, 1 балл
 *   ["c", "кілт", "Сұрақ", ["дұрыс", "қате", "қате", "қате"], "түсіндірме"]          контекстік, 1 балл
 *   ["m", "Сұрақ", [["1-сол", "оның жұбы"], ["2-сол", "оның жұбы"]], ["артық", "артық"], "түсіндірме"]
 *                                                                                    сәйкестендіру, 2 балл
 *   ["x", "Сұрақ", ["дұрыс", "дұрыс", "қате", "қате", "қате", "қате"], 2, "түсіндірме"]
 *                                                                                    бір/бірнеше дұрыс жауап
 *                                                                                    (сан = алғашқы неше нұсқа дұрыс), 2 балл
 * Жаңа сұрақты тізімнің кез келген жеріне қосуға болады: id сұрақ мәтінінен есептеледі.
 */
(() => {
  const subjects = {
    history:      { name: "Қазақстан тарихы",          code: "ҚТ",  kind: "mandatory" },
    readlit:      { name: "Оқу сауаттылығы",           code: "ОС",  kind: "mandatory" },
    mathlit:      { name: "Математикалық сауаттылық",  code: "МС",  kind: "mandatory" },
    math:         { name: "Математика",                code: "МАТ", kind: "profile" },
    physics:      { name: "Физика",                    code: "ФИЗ", kind: "profile" },
    chemistry:    { name: "Химия",                     code: "ХИМ", kind: "profile" },
    biology:      { name: "Биология",                  code: "БИО", kind: "profile" },
    geography:    { name: "География",                 code: "ГЕО", kind: "profile" },
    worldhistory: { name: "Дүниежүзі тарихы",          code: "ДТ",  kind: "profile" },
    law:          { name: "Құқық негіздері",           code: "ҚН",  kind: "profile" },
    informatics:  { name: "Информатика",               code: "ИНФ", kind: "profile" },
    english:      { name: "Ағылшын тілі",              code: "ENG", kind: "profile" },
    kazlang:      { name: "Қазақ тілі",                code: "ҚТЛ", kind: "profile" },
    kazlit:       { name: "Қазақ әдебиеті",            code: "ҚӘ",  kind: "profile" },
  };

  // Common profile-subject pairs
  const combos = [
    ["math", "physics"],
    ["math", "informatics"],
    ["math", "geography"],
    ["physics", "chemistry"],
    ["biology", "chemistry"],
    ["biology", "geography"],
    ["geography", "worldhistory"],
    ["worldhistory", "law"],
    ["worldhistory", "english"],
    ["geography", "english"],
    ["kazlang", "kazlit"],
  ];

  // Mock exam plans: [type, count] per section, in the order tasks appear
  const plans = {
    full: {
      label: "Толық ҰБТ",
      minutes: 240,
      history: [["s", 15], ["c", 5]],
      readlit: [["c", 10]],
      mathlit: [["s", 10]],
      profile: [["s", 25], ["c", 5], ["m", 5], ["x", 5]],
    },
    mini: {
      label: "Мини-сынақ",
      minutes: 120,
      history: [["s", 8], ["c", 2]],
      readlit: [["c", 5]],
      mathlit: [["s", 5]],
      profile: [["s", 12], ["c", 3], ["m", 3], ["x", 2]],
    },
  };

  // Minimum points per section (general rule) and overall
  const thresholds = { history: 5, readlit: 3, mathlit: 3, profile: 5, total: 50 };

  const typeNames = { s: "Бір жауап", c: "Контекст", m: "Сәйкестендіру", x: "Бірнеше жауап" };

  const items = {};
  const contexts = {};
  const gens = {};
  const byId = {};
  const problems = [];

  Object.keys(subjects).forEach((k) => { items[k] = []; contexts[k] = {}; gens[k] = []; });

  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(36);
  }

  function normalize(subj, topic, raw) {
    const t = raw[0];
    let it = null;
    if (t === "s") {
      it = { t, q: raw[1], right: [raw[2][0]], wrong: raw[2].slice(1), ex: raw[3] || "" };
    } else if (t === "c") {
      it = { t, ctx: raw[1], q: raw[2], right: [raw[3][0]], wrong: raw[3].slice(1), ex: raw[4] || "" };
    } else if (t === "x") {
      const n = raw[3];
      it = { t, q: raw[1], right: raw[2].slice(0, n), wrong: raw[2].slice(n), ex: raw[4] || "" };
    } else if (t === "m") {
      it = { t, q: raw[1], pairs: raw[2], wrong: raw[3] || [], ex: raw[4] || "" };
    }
    if (!it) { problems.push(`${subj}: белгісіз түр ${t}`); return null; }
    it.subj = subj;
    it.topic = topic;
    const key = it.q + "|" + (it.right ? it.right[0] : it.pairs[0][0]);
    it.id = subj + ":" + hash(key);
    return it;
  }

  function add(subj, topic, list) {
    if (!items[subj]) { problems.push(`белгісіз пән: ${subj}`); return; }
    list.forEach((raw) => {
      const it = normalize(subj, topic, raw);
      if (!it) return;
      if (byId[it.id]) { problems.push(`қайталанған сұрақ: ${it.id} ${it.q.slice(0, 40)}`); return; }
      byId[it.id] = it;
      items[subj].push(it);
    });
  }

  function ctx(subj, key, text) {
    contexts[subj][key] = text;
  }

  // Generators: fn(rand) returns { q, o: [right, wrong, wrong, wrong], e } (single-choice)
  function gen(subj, topic, fn) {
    gens[subj].push({ subj, topic, fn });
  }

  function runGen(g, rand) {
    for (let tries = 0; tries < 12; tries++) {
      const out = g.fn(rand);
      if (!out) continue;
      const opts = out.o.map(String);
      if (new Set(opts).size !== opts.length) continue; // distractors collided — roll again
      const it = { t: "s", q: out.q, right: [opts[0]], wrong: opts.slice(1), ex: out.e || "", subj: g.subj, topic: g.topic, gen: true };
      it.id = "g:" + g.subj + ":" + hash(out.q + "|" + opts[0]);
      return it;
    }
    return null;
  }

  window.UBT = { subjects, combos, plans, thresholds, typeNames, items, contexts, gens, byId, problems, add, ctx, gen, runGen, hash };
})();
