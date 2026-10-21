/* Bank validator: node tools/validate.js — checks every question and that each subject can fill a full mock */
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
global.window = {};
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]).filter((s) => !s.endsWith("app.js"));
for (const s of scripts) {
  require(path.join(root, s));
  if (s.endsWith("bank-core.js")) global.UBT = window.UBT;
}
const U = window.UBT;
const errors = [...U.problems];
const strip = (s) => String(s).replace(/<[^>]+>/g, "").trim();
let total = 0;
const rows = [];
for (const [subj, list] of Object.entries(U.items)) {
  const by = { s: 0, c: 0, m: 0, x: 0 };
  const groups = {};
  for (const it of list) {
    total++;
    by[it.t]++;
    const where = `${subj}/${it.topic}: «${strip(it.q).slice(0, 50)}»`;
    if (!strip(it.q)) errors.push(`${where} — бос сұрақ`);
    if (!it.ex) errors.push(`${where} — түсіндірме жоқ`);
    if (it.t === "s" || it.t === "c") {
      const all = [...it.right, ...it.wrong];
      if (all.length !== 4) errors.push(`${where} — 4 нұсқа керек, бар: ${all.length}`);
      if (new Set(all.map(strip)).size !== all.length) errors.push(`${where} — қайталанған нұсқа`);
    }
    if (it.t === "c") {
      if (!U.contexts[subj][it.ctx]) errors.push(`${where} — контекст жоқ: ${it.ctx}`);
      groups[it.ctx] = (groups[it.ctx] || 0) + 1;
    }
    if (it.t === "x") {
      const all = [...it.right, ...it.wrong];
      if (all.length !== 6) errors.push(`${where} — 6 нұсқа керек, бар: ${all.length}`);
      if (it.right.length < 1 || it.right.length > 3) errors.push(`${where} — дұрыс жауап 1–3 болуы керек`);
      if (new Set(all.map(strip)).size !== all.length) errors.push(`${where} — қайталанған нұсқа`);
    }
    if (it.t === "m") {
      if (it.pairs.length !== 2) errors.push(`${where} — 2 жұп керек`);
      const opts = [...it.pairs.map((p) => p[1]), ...it.wrong];
      if (opts.length !== 4) errors.push(`${where} — 4 нұсқа керек, бар: ${opts.length}`);
      if (new Set(opts.map(strip)).size !== opts.length) errors.push(`${where} — қайталанған нұсқа`);
    }
  }
  const kind = U.subjects[subj].kind;
  const plan = kind === "profile" ? U.plans.full.profile : U.plans.full[subj];
  const gens = U.gens[subj].length;
  for (const [t, n] of plan) {
    const have = by[t];
    const needStatic = t === "s" && gens ? n - Math.round(n * 0.3) : n;
    if (have < needStatic) errors.push(`${subj}: толық сынаққа «${t}» түрі жетпейді (${have} < ${needStatic})`);
  }
  Object.entries(groups).forEach(([k, n]) => { if (n < 3) errors.push(`${subj}: «${k}» контекстінде ${n} сұрақ ғана`); });
  rows.push(`${subj.padEnd(13)} ${String(list.length).padStart(3)}  s${String(by.s).padStart(3)} c${String(by.c).padStart(3)} m${String(by.m).padStart(3)} x${String(by.x).padStart(3)}  ген: ${gens}`);
}
console.log(rows.join("\n"));
console.log(`Барлығы: ${total} сұрақ, ${Object.values(U.gens).reduce((a, g) => a + g.length, 0)} генератор`);
if (errors.length) { console.log("\nҚАТЕЛЕР:\n" + errors.join("\n")); process.exit(1); }
console.log("Қате жоқ.");
