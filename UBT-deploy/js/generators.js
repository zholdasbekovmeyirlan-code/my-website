/* BilimPath ҰБТ — randomized problem generators.
 * Each generator returns { q, o: [right, wrong, wrong, wrong], e }; numbers are computed, so answers are always exact.
 */
(() => {
  const G = UBT.gen;
  const ri = (r, a, b) => a + Math.floor(r() * (b - a + 1));
  const pickR = (r, arr) => arr[Math.floor(r() * arr.length)];
  const MINUS = "−";

  // 2,5 style decimals; thousands grouped with a no-break space
  function num(x, digits = 3) {
    const v = Math.round(x * 10 ** digits) / 10 ** digits;
    const neg = v < 0;
    const [i, f] = Math.abs(v).toString().split(".");
    const grouped = i.length > 4 ? i.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : i;
    return (neg ? MINUS : "") + grouped + (f ? "," + f : "");
  }
  const SUP = { 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹", "-": "⁻" };
  const SUB = { 0: "₀", 1: "₁", 2: "₂", 3: "₃", 4: "₄", 5: "₅", 6: "₆", 7: "₇", 8: "₈", 9: "₉" };
  const par = (x) => (x < 0 ? `(${num(x)})` : num(x));
  const sup = (n) => String(n).split("").map((c) => SUP[c] || c).join("");
  const sub = (n) => String(n).split("").map((c) => SUB[c] || c).join("");

  // Three distinct wrong values around the right one
  function near(right, deltas, r, fmt = num) {
    const out = [];
    const used = new Set([fmt(right)]);
    const pool = deltas.slice().sort(() => r() - 0.5);
    for (const d of pool) {
      const v = typeof d === "function" ? d(right) : right + d;
      const s = fmt(v);
      if (!used.has(s) && Number.isFinite(v)) { used.add(s); out.push(s); }
      if (out.length === 3) break;
    }
    // Fallback when the deltas collide: step away from the answer on its own scale
    const mag = Math.abs(right) >= 100 ? 10 ** (Math.floor(Math.log10(Math.abs(right))) - 1) : Number.isInteger(right) ? 1 : 0.5;
    for (let k = 1; out.length < 3 && k < 40; k++) {
      const v = right + (k % 2 ? 1 : -1) * Math.ceil(k / 2) * mag;
      const s = fmt(v);
      if (!used.has(s)) { used.add(s); out.push(s); }
    }
    return [fmt(right), ...out];
  }

  // a·x + b, with proper signs
  function lin(a, b, v = "x") {
    const head = a === 1 ? v : a === -1 ? MINUS + v : num(a) + v;
    if (b === 0) return head;
    return `${head} ${b > 0 ? "+" : MINUS} ${num(Math.abs(b))}`;
  }
  function poly(coefs) {
    const deg = coefs.length - 1;
    let s = "";
    coefs.forEach((c, i) => {
      if (c === 0) return;
      const p = deg - i;
      const abs = Math.abs(c);
      const body = p === 0 ? num(abs) : (abs === 1 ? "" : num(abs)) + "x" + (p > 1 ? sup(p) : "");
      if (!s) s = (c < 0 ? MINUS : "") + body;
      else s += (c < 0 ? ` ${MINUS} ` : " + ") + body;
    });
    return s || "0";
  }

  /* ================= МАТЕМАТИКА ================= */
  G("math", "Теңдеулер", (r) => {
    const x = pickR(r, [-8, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9]);
    const a = pickR(r, [2, 3, 4, 5, 6, 7, -2, -3, -4]);
    const b = ri(r, -20, 20);
    const c = a * x + b;
    return {
      q: `Теңдеуді шеш: ${lin(a, b)} = ${num(c)}`,
      o: near(x, [-2 * x, 1, -1, 2, (v) => (c + b) / a, (v) => -v], r),
      e: `${num(a)}x = ${num(c)} ${b >= 0 ? MINUS : "+"} ${num(Math.abs(b))} = ${num(c - b)}, x = ${num(x)}.`,
    };
  });

  G("math", "Теңдеулер", (r) => {
    let x1 = ri(r, -7, 7), x2 = ri(r, -7, 7);
    if (x1 === x2 || x1 === 0 || x2 === 0) x2 = x1 + ri(r, 1, 5);
    const s = x1 + x2, p = x1 * x2;
    const ask = pickR(r, ["sum", "prod", "max"]);
    const eq = `${poly([1, -s, p])} = 0`;
    if (ask === "sum") {
      return { q: `${eq} теңдеуінің түбірлерінің қосындысын тап.`, o: near(s, [(v) => -v, p, (v) => v + 1, (v) => v - 2], r), e: `Виет теоремасы бойынша x₁ + x₂ = ${num(s)} (түбірлері ${num(x1)} және ${num(x2)}).` };
    }
    if (ask === "prod") {
      return { q: `${eq} теңдеуінің түбірлерінің көбейтіндісін тап.`, o: near(p, [(v) => -v, s, (v) => v + 2, (v) => v - 1], r), e: `Виет теоремасы бойынша x₁ · x₂ = ${num(p)} (түбірлері ${num(x1)} және ${num(x2)}).` };
    }
    const mx = Math.max(x1, x2), mn = Math.min(x1, x2);
    return { q: `${eq} теңдеуінің үлкен түбірін тап.`, o: near(mx, [(v) => mn, (v) => -mx, (v) => -mn, (v) => mx + 1], r), e: `Түбірлері: ${num(x1)} және ${num(x2)}. Үлкені — ${num(mx)}.` };
  });

  G("math", "Теңдеулер", (r) => {
    const x = ri(r, 1, 9), y = ri(r, -6, 9);
    const s = x + y, d = x - y;
    return {
      q: `Теңдеулер жүйесін шеш: x + y = ${num(s)}, x ${MINUS} y = ${num(d)}. x · y көбейтіндісін тап.`,
      o: near(x * y, [(v) => x + y, (v) => -v, (v) => v + x, (v) => v - y, (v) => x * x], r),
      e: `Қоссақ: 2x = ${num(s + d)}, x = ${num(x)}; y = ${num(y)}. x · y = ${num(x * y)}.`,
    };
  });

  G("math", "Теңсіздіктер", (r) => {
    const a = pickR(r, [2, 3, 4, 5]);
    const k = ri(r, -4, 9);
    const b = ri(r, -10, 10);
    const c = a * k + b; // a·x + b < c  ⇔ x < k
    return {
      q: `${lin(a, b)} < ${num(c)} теңсіздігінің ең үлкен бүтін шешімін тап.`,
      o: near(k - 1, [1, -1, 2, (v) => -v], r),
      e: `${num(a)}x < ${num(c - b)}, x < ${num(k)}. Ең үлкен бүтін шешім — ${num(k - 1)}.`,
    };
  });

  G("math", "Прогрессиялар", (r) => {
    const a1 = ri(r, -10, 15), d = pickR(r, [-4, -3, -2, 2, 3, 4, 5, 6]), n = ri(r, 8, 25);
    if (r() < 0.5) {
      const an = a1 + (n - 1) * d;
      return { q: `Арифметикалық прогрессияда a₁ = ${num(a1)}, d = ${num(d)}. a${sub(n)} мүшесін тап.`, o: near(an, [d, -d, (v) => a1 + n * d, (v) => a1 * n], r), e: `aₙ = a₁ + (n ${MINUS} 1)d = ${num(a1)} + ${n - 1} · ${par(d)} = ${num(an)}.` };
    }
    const S = (n * (2 * a1 + (n - 1) * d)) / 2;
    return { q: `Арифметикалық прогрессияда a₁ = ${num(a1)}, d = ${num(d)}. Алғашқы ${n} мүшесінің қосындысын тап.`, o: near(S, [d * n, -d * n, (v) => a1 + (n - 1) * d, (v) => n * (a1 + n * d)], r), e: `Sₙ = (2a₁ + (n ${MINUS} 1)d) · n / 2 = (${num(2 * a1)} + ${par((n - 1) * d)}) · ${n} / 2 = ${num(S)}.` };
  });

  G("math", "Прогрессиялар", (r) => {
    const b1 = pickR(r, [1, 2, 3, 4, 5, -2, -3]), q = pickR(r, [2, 3, -2]), n = ri(r, 4, 6);
    const bn = b1 * q ** (n - 1);
    return { q: `Геометриялық прогрессияда b₁ = ${num(b1)}, q = ${num(q)}. b${sub(n)} мүшесін тап.`, o: near(bn, [(v) => b1 * q ** n, (v) => b1 * q ** (n - 2), (v) => -v, (v) => b1 * q * n], r), e: `bₙ = b₁ · qⁿ⁻¹ = ${num(b1)} · (${num(q)})${sup(n - 1)} = ${num(bn)}.` };
  });

  G("math", "Пайыз және қатынас", (r) => {
    const p = pickR(r, [5, 10, 12, 15, 20, 25, 30, 40, 60, 75]);
    const x = pickR(r, [40, 60, 80, 120, 160, 200, 240, 300, 400, 500, 600, 800]);
    const part = (x * p) / 100;
    return { q: `Белгісіз санның ${p} пайызы ${num(part)} болса, сол сан нешеге тең?`, o: near(x, [(v) => (part * p) / 100, (v) => part + p, (v) => v / 2, (v) => v * 2, (v) => part * p], r), e: `x = ${num(part)} · 100 / ${p} = ${num(x)}.` };
  });

  G("math", "Логарифм және дәреже", (r) => {
    const a = pickR(r, [2, 3, 5]);
    const k1 = ri(r, 1, 3), k2 = ri(r, 1, 3);
    const m = a ** k1, n = a ** k2;
    if (r() < 0.5) {
      return { q: `log${sub(a)}${num(m)} + log${sub(a)}${num(n)} өрнегінің мәнін тап.`, o: near(k1 + k2, [(v) => k1 * k2, (v) => m + n, 1, -1], r), e: `log${sub(a)}(${num(m)} · ${num(n)}) = log${sub(a)}${num(m * n)} = ${k1 + k2}.` };
    }
    const big = a ** (k1 + k2);
    return { q: `log${sub(a)}${num(big)} ${MINUS} log${sub(a)}${num(n)} өрнегінің мәнін тап.`, o: near(k1, [(v) => k1 + k2, (v) => big - n, 1, -1, (v) => k2 + 2], r), e: `log${sub(a)}(${num(big)} : ${num(n)}) = log${sub(a)}${num(m)} = ${k1}.` };
  });

  G("math", "Логарифм және дәреже", (r) => {
    const a = pickR(r, [2, 3]);
    const p = ri(r, 3, 7), q = ri(r, 2, 5), s = ri(r, 2, p + q - 1);
    const e = p + q - s;
    const v = a ** e;
    return { q: `${a}${sup(p)} · ${a}${sup(q)} : ${a}${sup(s)} өрнегінің мәнін тап.`, o: near(v, [(x) => a ** (e + 1), (x) => a ** (e - 1), (x) => a * e, (x) => a ** (p * q - s)], r), e: `Көрсеткіштер: ${p} + ${q} ${MINUS} ${s} = ${e}; ${a}${sup(e)} = ${num(v)}.` };
  });

  G("math", "Туынды", (r) => {
    const a = pickR(r, [1, 2, -1, 3]), b = ri(r, -4, 4), c = ri(r, -6, 6), d = ri(r, -9, 9), x0 = pickR(r, [-2, -1, 1, 2, 3]);
    const dv = 3 * a * x0 * x0 + 2 * b * x0 + c;
    const fv = a * x0 ** 3 + b * x0 * x0 + c * x0 + d;
    return { q: `f(x) = ${poly([a, b, c, d])} функциясы берілген. f′(${num(x0)}) мәнін тап.`, o: near(dv, [(v) => fv, (v) => 3 * a * x0 + 2 * b + c, (v) => v + 2 * b, (v) => -v, 3], r), e: `f′(x) = ${poly([3 * a, 2 * b, c])}; f′(${num(x0)}) = ${num(dv)}.` };
  });

  G("math", "Интеграл", (r) => {
    const a = pickR(r, [2, 4, 6]), b = ri(r, -3, 5), k = ri(r, 1, 4);
    const val = (a * k * k) / 2 + b * k;
    return { q: `∫ (${lin(a, b)}) dx интегралын [0; ${k}] аралығында есепте.`, o: near(val, [(v) => a * k * k + b * k, (v) => a * k + b, (v) => (a * k * k) / 2, 1, -2], r), e: `Алғашқы функция F(x) = ${poly([a / 2, b, 0])}; F(${k}) ${MINUS} F(0) = ${num(val)}.` };
  });

  G("math", "Геометрия", (r) => {
    const [p, q, h] = pickR(r, [[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10], [7, 24, 25], [9, 12, 15]]);
    const k = pickR(r, [1, 2, 3]);
    const A = p * k, B = q * k, C = h * k;
    if (r() < 0.5) return { q: `Тікбұрышты үшбұрыштың катеттері ${A} см және ${B} см. Гипотенузасын тап.`, o: near(C, [(v) => A + B, (v) => v + k, (v) => v - k, (v) => (A * B) / 2], r).map((s) => s + " см"), e: `c = √(${A}² + ${B}²) = √${A * A + B * B} = ${C} см.` };
    return { q: `Тікбұрышты үшбұрыштың гипотенузасы ${C} см, бір катеті ${A} см. Ауданын тап.`, o: near((A * B) / 2, [(v) => A * B, (v) => A * C / 2, (v) => B * C / 2, (v) => v + A], r).map((s) => s + " см²"), e: `Екінші катет √(${C}² ${MINUS} ${A}²) = ${B} см. S = ${A} · ${B} / 2 = ${num((A * B) / 2)} см².` };
  });

  G("math", "Геометрия", (r) => {
    const a = ri(r, 3, 12), b = a + ri(r, 2, 10), h = pickR(r, [2, 4, 6, 8, 10]);
    const S = ((a + b) / 2) * h;
    return { q: `Трапецияның табандары ${a} см және ${b} см, биіктігі ${h} см. Ауданын тап.`, o: near(S, [(v) => (a + b) * h, (v) => a * b, (v) => (a + b + h), (v) => b * h], r).map((s) => s + " см²"), e: `S = (a + b) / 2 · h = (${a} + ${b}) / 2 · ${h} = ${num(S)} см².` };
  });

  G("math", "Геометрия", (r) => {
    const R = ri(r, 2, 9);
    const fmt = (v) => (v === 1 ? "π" : num(v) + "π");
    if (r() < 0.5) return { q: `Радиусы ${R} см шеңбердің ұзындығын тап.`, o: near(2 * R, [(v) => R * R, (v) => R, (v) => 4 * R], r, fmt).map((s, i) => s + " см"), e: `C = 2πR = ${2 * R}π см.` };
    return { q: `Радиусы ${R} см дөңгелектің ауданын тап.`, o: near(R * R, [(v) => 2 * R, (v) => R, (v) => 4 * R * R], r, fmt).map((s) => s + " см²"), e: `S = πR² = ${R * R}π см².` };
  });

  G("math", "Геометрия", (r) => {
    const a = ri(r, 2, 9), b = ri(r, 2, 9), c = ri(r, 2, 9);
    if (r() < 0.5) return { q: `Тікбұрышты параллелепипедтің өлшемдері ${a} см, ${b} см, ${c} см. Көлемін тап.`, o: near(a * b * c, [(v) => 2 * (a * b + b * c + a * c), (v) => a + b + c, (v) => a * b + c, (v) => v + a * b], r).map((s) => s + " см³"), e: `V = abc = ${a} · ${b} · ${c} = ${a * b * c} см³.` };
    return { q: `Қыры ${a} см кубтың толық бетінің ауданын тап.`, o: near(6 * a * a, [(v) => a ** 3, (v) => 4 * a * a, (v) => 12 * a, (v) => a * a], r).map((s) => s + " см²"), e: `S = 6a² = 6 · ${a * a} = ${6 * a * a} см².` };
  });

  G("math", "Ықтималдық", (r) => {
    const red = ri(r, 2, 9), blue = ri(r, 2, 9), green = ri(r, 1, 6);
    const tot = red + blue + green;
    const g = gcd(red, tot);
    const frac = `${red / g}/${tot / g}`;
    const wrongs = [`${blue}/${tot}`, `${red}/${blue + green}`, `${green}/${tot}`, `1/${tot}`, `${tot - red}/${tot}`].map((s) => simplify(s)).filter((s) => s !== frac);
    const uniq = Array.from(new Set(wrongs)).slice(0, 3);
    if (uniq.length < 3) return null;
    return { q: `Қорапта ${red} қызыл, ${blue} көк және ${green} жасыл шар бар. Кездейсоқ алынған шардың қызыл болу ықтималдығы қандай?`, o: [frac, ...uniq], e: `P = ${red} / ${tot} = ${frac}.` };
  });

  function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
  function simplify(s) {
    const [p, q] = s.split("/").map(Number);
    const g = gcd(p, q);
    return `${p / g}/${q / g}`;
  }

  /* ================= МАТЕМАТИКАЛЫҚ САУАТТЫЛЫҚ ================= */
  G("mathlit", "Пайыз және жеңілдік", (r) => {
    const P = pickR(r, [4000, 6000, 8000, 9000, 12000, 15000, 18000, 24000, 36000]);
    const d = pickR(r, [10, 15, 20, 25, 30, 40]);
    const item = pickR(r, ["күртке", "кроссовка", "рюкзак", "құлаққап", "кітаптар жиынтығы"]);
    const res = P * (1 - d / 100);
    return { q: `Дүкенде бағасы ${num(P)} теңге болатын ${item} ${d}% жеңілдікпен сатылып жатыр. Жеңілдіктен кейінгі бағасы қанша?`, o: near(res, [(v) => (P * d) / 100, (v) => P * (1 + d / 100), (v) => P - d * 100, (v) => P - d * 10], r).map((s) => s + " тг"), e: `${num(P)} · (1 ${MINUS} ${d}/100) = ${num(res)} теңге.` };
  });

  G("mathlit", "Пайыз және жеңілдік", (r) => {
    const a = pickR(r, [200, 250, 300, 400, 500, 800]);
    const p = pickR(r, [5, 10, 15, 20, 25, 30, 40]);
    const up = r() < 0.6;
    const b = up ? a * (1 + p / 100) : a * (1 - p / 100);
    return { q: `Мектептегі оқушылар саны былтыр ${a} болды, биыл ${num(b)}. Оқушылар саны неше пайызға ${up ? "өсті" : "азайды"}?`, o: near(p, [(v) => Math.abs(b - a), (v) => Math.round((Math.abs(b - a) / b) * 1000) / 10, 5, -5, 10], r).map((s) => s + "%"), e: `|${num(b)} ${MINUS} ${a}| / ${a} · 100% = ${p}%.` };
  });

  G("mathlit", "Қозғалыс және уақыт", (r) => {
    const v = pickR(r, [45, 50, 60, 70, 72, 75, 80, 90]), t = pickR(r, [2, 3, 4, 5]);
    const s = v * t;
    return { q: `Автобус ${s} км жолды ${t} сағатта жүрді. Оның орташа жылдамдығы қандай?`, o: near(v, [(x) => s * t, 10, -10, (x) => s / (t + 1)], r).map((x) => x + " км/сағ"), e: `v = s / t = ${s} / ${t} = ${v} км/сағ.` };
  });

  G("mathlit", "Қозғалыс және уақыт", (r) => {
    const h = ri(r, 18, 23), m = pickR(r, [0, 10, 15, 20, 30, 40, 45, 50]);
    const dh = ri(r, 3, 9), dm = pickR(r, [5, 15, 20, 25, 35, 45, 50]);
    const total = (h * 60 + m + dh * 60 + dm) % (24 * 60);
    const fmt = (mins) => `${String(Math.floor(mins / 60) % 24).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}`;
    const t0 = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    return { q: `Пойыздың жолға шығу уақыты — ${t0}. Ол жолда ${dh} сағат ${dm} минут болды. Пойыз нешеде келеді?`, o: [fmt(total), fmt((total + 60) % 1440), fmt((total + 1440 - 60) % 1440), fmt((total + 1440 - 20) % 1440)], e: `${t0} + ${dh} сағ ${dm} мин = ${fmt(total)} (түн ортасынан өтсе, келесі тәулік).` };
  });

  G("mathlit", "Тариф және шығын", (r) => {
    const base = pickR(r, [300, 400, 500, 600]), perKm = pickR(r, [90, 100, 110, 120, 150]), km = ri(r, 4, 18);
    const cost = base + perKm * km;
    return { q: `Такси тарифі: отырғызу — ${base} тг, әр километр — ${perKm} тг. ${km} км жол қанша тұрады?`, o: near(cost, [(v) => perKm * km, (v) => (base + perKm) * km, (v) => v + perKm, (v) => v - base + perKm], r).map((s) => s + " тг"), e: `${base} + ${perKm} · ${km} = ${num(cost)} тг.` };
  });

  G("mathlit", "Тариф және шығын", (r) => {
    const kg = pickR(r, [2, 3, 4, 5]), price = pickR(r, [600, 800, 900, 1200, 1500]);
    const want = kg + ri(r, 1, 4);
    const unit = price / kg;
    if (!Number.isInteger(unit)) return null;
    const fruit = pickR(r, ["алма", "алмұрт", "қызанақ", "қияр", "сәбіз"]);
    return { q: `${kg} кг ${fruit} ${num(price)} теңге тұрады. ${want} кг ${fruit} қанша тұрады?`, o: near(unit * want, [(v) => price * want, (v) => price + want * 100, (v) => v - unit, (v) => v + unit], r).map((s) => s + " тг"), e: `1 кг = ${num(price)} : ${kg} = ${num(unit)} тг; ${want} кг = ${num(unit * want)} тг.` };
  });

  G("mathlit", "Банк және қаржы", (r) => {
    const S = pickR(r, [100000, 200000, 250000, 500000]), p = pickR(r, [8, 10, 12, 14, 15]);
    if (r() < 0.5) {
      const res = S * (1 + p / 100);
      return { q: `${num(S)} теңге жылдық ${p}% салымға 1 жылға салынды. Жыл соңында шотта қанша ақша болады?`, o: near(res, [(v) => (S * p) / 100, (v) => S * (1 + (2 * p) / 100), (v) => S + p * 1000, (v) => S * (1 + p / 1000)], r).map((s) => s + " тг"), e: `${num(S)} · ${num(1 + p / 100)} = ${num(res)} тг.` };
    }
    const res = S * (1 + p / 100) ** 2;
    return { q: `${num(S)} теңге жылдық ${p}% салымға 2 жылға салынды. Пайыз жыл сайын қосылып отырады (күрделі пайыз). 2 жылдан кейін шотта қанша болады?`, o: near(Math.round(res), [(v) => S * (1 + (2 * p) / 100), (v) => S * (1 + p / 100), (v) => (S * p * 2) / 100, (v) => v + 1000], r).map((s) => s + " тг"), e: `${num(S)} · ${num(1 + p / 100)}² = ${num(Math.round(res))} тг. Жай пайызбен ${num(S * (1 + (2 * p) / 100))} болар еді.` };
  });

  G("mathlit", "Аудан және материал", (r) => {
    const a = pickR(r, [3, 3.5, 4, 4.5, 5, 6]), b = pickR(r, [2.5, 3, 4, 5]), box = pickR(r, [1.5, 2, 2.5]);
    const area = a * b;
    const n = Math.ceil(area / box - 1e-9);
    if (Number.isInteger(area / box)) return null;
    return { q: `Бөлме еденінің өлшемі ${num(a)} м × ${num(b)} м. Ламинаттың бір қорабы ${num(box)} м² жабады. Еденге кемінде неше қорап керек?`, o: near(n, [-1, 1, 2, (v) => Math.round(area)], r).map((s) => s + " қорап"), e: `Ауданы ${num(area)} м²; ${num(area)} : ${num(box)} ≈ ${num(area / box, 2)}, демек ${n} қорап керек (жоғары қарай дөңгелектейміз).` };
  });

  G("mathlit", "Статистика", (r) => {
    const n = pickR(r, [5, 6]);
    const avg = ri(r, 3, 4) + (r() < 0.5 ? 0 : 0.5);
    let marks = [];
    for (let tries = 0; tries < 50; tries++) {
      marks = Array.from({ length: n }, () => ri(r, 2, 5));
      if (marks.reduce((a, b) => a + b, 0) / n === avg) break;
      marks = [];
    }
    if (!marks.length) return null;
    const sorted = marks.slice().sort((a, b) => a - b);
    const med = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
    if (r() < 0.6) return { q: `Оқушының тоқсандағы бағалары: ${marks.join(", ")}. Орташа бағасы қандай?`, o: near(avg, [0.5, -0.5, 1, (v) => marks.reduce((a, b) => a + b, 0)], r), e: `(${marks.join(" + ")}) / ${n} = ${num(avg)}.` };
    return { q: `Бағалар қатары: ${marks.join(", ")}. Осы қатардың медианасын тап.`, o: near(med, [0.5, -0.5, 1, -1, (v) => avg + 1], r), e: `Реттелген қатар: ${sorted.join(", ")}. Медиана — ${num(med)}.` };
  });

  G("mathlit", "Масштаб және өлшем", (r) => {
    const scale = pickR(r, [50000, 100000, 200000, 500000, 1000000]), cm = pickR(r, [2, 2.5, 3, 3.5, 4, 6, 7.5]);
    const km = (cm * scale) / 100000;
    return { q: `Масштабы 1 : ${num(scale)} картада екі елді мекеннің арақашықтығы ${num(cm)} см. Жердегі нақты арақашықтық қандай?`, o: near(km, [(v) => v * 10, (v) => v / 10, (v) => cm * 10, (v) => v + 1], r).map((s) => s + " км"), e: `1 см картада ${num(scale / 100000)} км. ${num(cm)} · ${num(scale / 100000)} = ${num(km)} км.` };
  });

  G("mathlit", "Масштаб және өлшем", (r) => {
    const vol = pickR(r, [1.5, 2, 3, 4.5, 5]), cup = pickR(r, [200, 250, 300, 500]);
    const n = (vol * 1000) / cup;
    if (!Number.isInteger(n)) return null;
    return { q: `Құмырада ${num(vol)} л шырын бар. Оны ${cup} мл-лік стақандарға құйса, неше толық стақан шығады?`, o: near(n, [1, -1, 2, (v) => (vol * 100) / cup * 10 + 1], r).map((s) => s + " стақан"), e: `${num(vol)} л = ${num(vol * 1000)} мл; ${num(vol * 1000)} : ${cup} = ${n}.` };
  });

  /* ================= ФИЗИКА ================= */
  G("physics", "Механика", (r) => {
    const kmh = pickR(r, [18, 36, 54, 72, 90, 108, 126]);
    return { q: `Автомобиль ${kmh} км/сағ жылдамдықпен қозғалып келеді. Бұл неше м/с?`, o: near(kmh / 3.6, [(v) => kmh * 3.6, (v) => kmh / 6, 5, (v) => kmh / 2], r).map((s) => s + " м/с"), e: `1 км/сағ = 1/3,6 м/с; ${kmh} : 3,6 = ${num(kmh / 3.6)} м/с.` };
  });

  G("physics", "Механика", (r) => {
    const v0 = pickR(r, [0, 2, 4, 5, 10]), a = pickR(r, [1, 2, 3, 4]), t = ri(r, 2, 8);
    if (r() < 0.5) {
      const v = v0 + a * t;
      return { q: `Дене бастапқы ${v0} м/с жылдамдықпен ${a} м/с² үдеумен қозғалады. ${t} с-тан кейінгі жылдамдығы қандай?`, o: near(v, [(x) => a * t * t, (x) => v0 * t, (x) => x + a, (x) => (a * t) / 2], r).map((s) => s + " м/с"), e: `v = v₀ + at = ${v0} + ${a} · ${t} = ${v} м/с.` };
    }
    const s = v0 * t + (a * t * t) / 2;
    return { q: `Дене бастапқы ${v0} м/с жылдамдықпен ${a} м/с² үдеумен ${t} с қозғалды. Жүрген жолы қандай?`, o: near(s, [(x) => v0 * t + a * t * t, (x) => (v0 + a) * t, (x) => x + a * t, (x) => (a * t * t) / 2 + v0], r).map((x) => x + " м"), e: `s = v₀t + at²/2 = ${v0 * t} + ${num((a * t * t) / 2)} = ${num(s)} м.` };
  });

  G("physics", "Механика", (r) => {
    const m = pickR(r, [0.5, 2, 3, 4, 5, 8, 10, 20]), a = pickR(r, [0.5, 1.5, 2, 3, 4]);
    const kind = r();
    if (kind < 0.4) return { q: `Массасы ${num(m)} кг денеге ${num(a)} м/с² үдеу беретін күш қандай?`, o: near(m * a, [(v) => m / a, (v) => m + a, (v) => m * 10, (v) => v * 2], r).map((s) => s + " Н"), e: `Ньютонның II заңы: F = ma = ${num(m)} · ${num(a)} = ${num(m * a)} Н.` };
    if (kind < 0.7) return { q: `Массасы ${num(m)} кг дененің ауырлық күші қандай? (g = 10 м/с²)`, o: near(m * 10, [(v) => m, (v) => m / 10, (v) => m * 9, (v) => m * 100], r).map((s) => s + " Н"), e: `F = mg = ${num(m)} · 10 = ${num(m * 10)} Н.` };
    const v = pickR(r, [2, 3, 4, 5, 10]);
    return { q: `Массасы ${num(m)} кг дене ${v} м/с жылдамдықпен қозғалады. Оның импульсі қандай?`, o: near(m * v, [(x) => (m * v * v) / 2, (x) => m + v, (x) => m / v, (x) => x * 2], r).map((s) => s + " кг·м/с"), e: `p = mv = ${num(m)} · ${v} = ${num(m * v)} кг·м/с.` };
  });

  G("physics", "Механика", (r) => {
    const m = pickR(r, [2, 4, 5, 10, 20, 50]), v = pickR(r, [2, 3, 4, 6, 10]), h = pickR(r, [2, 5, 10, 15, 20]);
    if (r() < 0.5) return { q: `Массасы ${m} кг дене ${v} м/с жылдамдықпен қозғалады. Кинетикалық энергиясы қандай?`, o: near((m * v * v) / 2, [(x) => m * v * v, (x) => m * v, (x) => (m * v) / 2, (x) => m * 10 * v], r).map((s) => s + " Дж"), e: `Eₖ = mv²/2 = ${m} · ${v * v} / 2 = ${num((m * v * v) / 2)} Дж.` };
    return { q: `Массасы ${m} кг дене ${h} м биіктікке көтерілді. Потенциалдық энергиясы қандай? (g = 10 м/с²)`, o: near(m * 10 * h, [(x) => m * h, (x) => (m * 10 * h) / 2, (x) => m * 10 + h, (x) => x * 10], r).map((s) => s + " Дж"), e: `Eₚ = mgh = ${m} · 10 · ${h} = ${num(m * 10 * h)} Дж.` };
  });

  G("physics", "Механика", (r) => {
    const F = pickR(r, [20, 50, 100, 150, 200, 400]), s = pickR(r, [2, 3, 5, 10, 12]), t = pickR(r, [2, 4, 5, 10]);
    const A = F * s;
    if (r() < 0.5) return { q: `${F} Н күш денені ${s} м-ге орын ауыстырды (күш қозғалыс бағытымен). Атқарылған жұмыс қандай?`, o: near(A, [(v) => F / s, (v) => F + s, (v) => v / 2, (v) => v * 10], r).map((x) => x + " Дж"), e: `A = Fs = ${F} · ${s} = ${num(A)} Дж.` };
    return { q: `${F} Н күш денені ${s} м-ге ${t} с ішінде орын ауыстырды. Қуаты қандай?`, o: near(A / t, [(v) => A * t, (v) => A, (v) => (F * t) / s, (v) => v * 2], r).map((x) => x + " Вт"), e: `N = A/t = ${num(A)} / ${t} = ${num(A / t)} Вт.` };
  });

  G("physics", "Механика", (r) => {
    const k = pickR(r, [50, 100, 200, 250, 400, 500]), x = pickR(r, [0.02, 0.04, 0.05, 0.1, 0.2]);
    return { q: `Қатаңдығы ${k} Н/м серіппе ${num(x * 100)} см-ге созылды. Серпімділік күші қандай?`, o: near(k * x, [(v) => k * x * 100, (v) => k / x, (v) => (k * x * x) / 2, (v) => v * 10], r).map((s) => s + " Н"), e: `Гук заңы: F = kx = ${k} · ${num(x)} = ${num(k * x)} Н.` };
  });

  G("physics", "Қысым және тығыздық", (r) => {
    const sub = pickR(r, [["су", 1000], ["керосин", 800], ["сынап", 13600], ["теңіз суы", 1030]]);
    const h = pickR(r, [0.2, 0.5, 1, 2, 5, 10]);
    const p = sub[1] * 10 * h;
    return { q: `Ыдыстағы ${sub[0]} бағанының биіктігі ${num(h)} м. Түбіне түсетін гидростатикалық қысым қандай? (ρ = ${num(sub[1])} кг/м³, g = 10 м/с²)`, o: near(p, [(v) => sub[1] * h, (v) => v / 10, (v) => v * 10, (v) => (sub[1] * 10) / h], r).map((s) => s + " Па"), e: `p = ρgh = ${num(sub[1])} · 10 · ${num(h)} = ${num(p)} Па.` };
  });

  G("physics", "Қысым және тығыздық", (r) => {
    const rho = pickR(r, [[ "алюминий", 2700], ["темір", 7800], ["мыс", 8900], ["мұз", 900]]);
    const V = pickR(r, [0.001, 0.002, 0.005, 0.01, 0.02]);
    if (r() < 0.5) return { q: `Көлемі ${num(V * 1e6)} см³ ${rho[0]} кесегінің массасы қандай? (ρ = ${num(rho[1])} кг/м³)`, o: near(rho[1] * V, [(v) => rho[1] / V / 1e6, (v) => v * 10, (v) => v / 10, (v) => v * 2], r).map((s) => s + " кг"), e: `${num(V * 1e6)} см³ = ${num(V)} м³; m = ρV = ${num(rho[1])} · ${num(V)} = ${num(rho[1] * V)} кг.` };
    const F = pickR(r, [200, 400, 600, 800, 1000]), S = pickR(r, [0.02, 0.04, 0.05, 0.1, 0.2]);
    return { q: `${F} Н күш ${num(S)} м² ауданға перпендикуляр әсер етеді. Қысым қандай?`, o: near(F / S, [(v) => F * S, (v) => v / 10, (v) => v * 10, (v) => F / S / 2], r).map((s) => s + " Па"), e: `p = F/S = ${F} / ${num(S)} = ${num(F / S)} Па.` };
  });

  G("physics", "Электр", (r) => {
    const R = pickR(r, [2, 4, 5, 6, 10, 12, 20]), I = pickR(r, [0.5, 1, 1.5, 2, 3]);
    const U = R * I;
    const ask = pickR(r, ["I", "U", "P"]);
    if (ask === "I") return { q: `Кедергісі ${R} Ом өткізгіштің ұштарындағы кернеу ${num(U)} В. Ток күші қандай?`, o: near(I, [(v) => U * R, (v) => R / U, (v) => v * 2, (v) => v + 1], r).map((s) => s + " А"), e: `Ом заңы: I = U/R = ${num(U)} / ${R} = ${num(I)} А.` };
    if (ask === "U") return { q: `Кедергісі ${R} Ом резистор арқылы ${num(I)} А ток өтеді. Кернеу қандай?`, o: near(U, [(v) => R / I, (v) => R + I, (v) => v * 2, (v) => v / 2], r).map((s) => s + " В"), e: `U = IR = ${num(I)} · ${R} = ${num(U)} В.` };
    return { q: `Кернеуі ${num(U)} В тізбектегі ток күші ${num(I)} А. Ток қуаты қандай?`, o: near(U * I, [(v) => U / I, (v) => U + I, (v) => v * 2, (v) => I * I * U], r).map((s) => s + " Вт"), e: `P = UI = ${num(U)} · ${num(I)} = ${num(U * I)} Вт.` };
  });

  G("physics", "Электр", (r) => {
    const pair = pickR(r, [[3, 6], [4, 12], [6, 12], [10, 15], [12, 24], [20, 30], [6, 3], [10, 40]]);
    const [a, b] = pair;
    if (r() < 0.5) return { q: `${a} Ом және ${b} Ом резисторлар тізбектей жалғанды. Жалпы кедергі қандай?`, o: near(a + b, [(v) => (a * b) / (a + b), (v) => a * b, (v) => Math.abs(a - b)], r).map((s) => s + " Ом"), e: `Тізбектей: R = R₁ + R₂ = ${a + b} Ом.` };
    return { q: `${a} Ом және ${b} Ом резисторлар параллель жалғанды. Жалпы кедергі қандай?`, o: near((a * b) / (a + b), [(v) => a + b, (v) => (a + b) / 2, (v) => Math.abs(a - b), (v) => a * b], r).map((s) => s + " Ом"), e: `Параллель: R = R₁R₂ / (R₁ + R₂) = ${a * b} / ${a + b} = ${num((a * b) / (a + b))} Ом.` };
  });

  G("physics", "Жылу", (r) => {
    const m = pickR(r, [0.5, 1, 2, 3, 5]), dt = pickR(r, [10, 20, 25, 40, 50, 80]);
    const Q = 4200 * m * dt;
    return { q: `Массасы ${num(m)} кг суды ${dt} °C-қа қыздыру үшін қанша жылу мөлшері қажет? (c = 4200 Дж/(кг·°C))`, o: near(Q / 1000, [(v) => (4200 * m) / 1000, (v) => (4200 * dt) / 1000, (v) => v * 10, (v) => v / 2], r).map((s) => s + " кДж"), e: `Q = cmΔt = 4200 · ${num(m)} · ${dt} = ${num(Q)} Дж = ${num(Q / 1000)} кДж.` };
  });

  G("physics", "Тербеліс және толқын", (r) => {
    const lam = pickR(r, [0.5, 1, 2, 4, 5, 10]), nu = pickR(r, [2, 5, 10, 20, 50, 100]);
    if (r() < 0.6) return { q: `Толқын ұзындығы ${num(lam)} м, жиілігі ${nu} Гц. Толқынның таралу жылдамдығы қандай?`, o: near(lam * nu, [(v) => lam / nu, (v) => nu / lam, (v) => lam + nu, (v) => v * 2], r).map((s) => s + " м/с"), e: `v = λν = ${num(lam)} · ${nu} = ${num(lam * nu)} м/с.` };
    const n = pickR(r, [10, 20, 40, 50]), t = pickR(r, [10, 20, 40]);
    return { q: `Маятник ${t} с ішінде ${n} толық тербеліс жасады. Тербеліс периоды қандай?`, o: near(t / n, [(v) => n / t, (v) => t * n, (v) => v * 2, (v) => v + 1], r).map((s) => s + " с"), e: `T = t/N = ${t} / ${n} = ${num(t / n)} с.` };
  });

  G("physics", "Оптика", (r) => {
    const F = pickR(r, [0.1, 0.2, 0.25, 0.4, 0.5, 2]);
    return { q: `Линзаның фокус аралығы ${num(F * 100)} см. Оптикалық күші қандай?`, o: near(1 / F, [(v) => F * 100, (v) => 100 / F / 100 + 1, (v) => -v, (v) => v * 2], r).map((s) => s + " дптр"), e: `D = 1/F = 1 / ${num(F)} м = ${num(1 / F)} дптр.` };
  });

  /* ================= ХИМИЯ ================= */
  const AR = { H: 1, C: 12, N: 14, O: 16, Na: 23, Mg: 24, Al: 27, S: 32, Cl: 35.5, K: 39, Ca: 40, Fe: 56, Cu: 64, Zn: 65, P: 31, Mn: 55, Ba: 137, Si: 28 };
  function molar(formula) {
    const tokens = formula.match(/[A-Z][a-z]?|\d+|\(|\)/g);
    const stack = [{}];
    let i = 0;
    const addTo = (obj, el, n) => { obj[el] = (obj[el] || 0) + n; };
    while (i < tokens.length) {
      const tk = tokens[i];
      if (tk === "(") { stack.push({}); i++; }
      else if (tk === ")") {
        const grp = stack.pop();
        let n = 1;
        if (/^\d+$/.test(tokens[i + 1] || "")) { n = Number(tokens[i + 1]); i++; }
        Object.entries(grp).forEach(([el, c]) => addTo(stack[stack.length - 1], el, c * n));
        i++;
      } else {
        let n = 1;
        if (/^\d+$/.test(tokens[i + 1] || "")) { n = Number(tokens[i + 1]); i++; }
        addTo(stack[stack.length - 1], tk, n);
        i++;
      }
    }
    const counts = stack[0];
    return { M: Object.entries(counts).reduce((a, [el, c]) => a + AR[el] * c, 0), counts };
  }
  const pretty = (f) => f.replace(/\d+/g, (d) => sub(d));
  const COMPOUNDS = ["H2O", "CO2", "NaCl", "H2SO4", "CaCO3", "NaOH", "HCl", "NH3", "CH4", "Fe2O3", "KMnO4", "C6H12O6", "HNO3", "Ca(OH)2", "MgO", "Al2O3", "C2H5OH", "SO2", "CuSO4", "Na2CO3", "KOH", "H3PO4", "Al(OH)3", "BaSO4", "ZnO", "SO3", "Na2SO4", "MgCl2", "FeCl3", "C2H4"];

  G("chemistry", "Есептер", (r) => {
    const f = pickR(r, COMPOUNDS);
    const { M, counts } = molar(f);
    const naive = Object.keys(counts).reduce((a, el) => a + AR[el], 0);
    return { q: `${pretty(f)} затының молярлық массасы қандай?`, o: near(M, [(v) => naive, (v) => v + 16, (v) => v - 1, (v) => v * 2, (v) => v + 2], r).map((s) => s + " г/моль"), e: `M(${pretty(f)}) = ${Object.entries(counts).map(([el, c]) => `${c > 1 ? c + "·" : ""}${num(AR[el])}`).join(" + ")} = ${num(M)} г/моль.` };
  });

  G("chemistry", "Есептер", (r) => {
    const f = pickR(r, ["H2O", "CO2", "NaOH", "CaCO3", "H2SO4", "NaCl", "CH4", "O2", "MgO", "HCl", "NH3", "C6H12O6"]);
    const { M } = molar(f);
    const n = pickR(r, [0.5, 1.5, 2, 3, 4, 5]);
    const m = n * M;
    return { q: `${num(m)} г ${pretty(f)} затының зат мөлшері қандай?`, o: near(n, [(v) => m * M, (v) => M / m, (v) => v * 2, (v) => v + 1, (v) => v / 2], r).map((s) => s + " моль"), e: `n = m/M = ${num(m)} / ${num(M)} = ${num(n)} моль.` };
  });

  G("chemistry", "Есептер", (r) => {
    const gas = pickR(r, ["O2", "H2", "N2", "CO2", "CH4", "NH3", "Cl2"]);
    const n = pickR(r, [0.5, 1.5, 2, 3, 4, 0.25]);
    return { q: `Қалыпты жағдайда ${num(n)} моль ${pretty(gas)} газы қандай көлем алады?`, o: near(n * 22.4, [(v) => 22.4 / n, (v) => n * 2.24, (v) => n * 22.4 * 2, (v) => n + 22.4], r).map((s) => s + " л"), e: `V = n · Vₘ = ${num(n)} · 22,4 = ${num(n * 22.4)} л.` };
  });

  G("chemistry", "Есептер", (r) => {
    const msol = pickR(r, [100, 150, 200, 250, 400, 500]), w = pickR(r, [5, 8, 10, 12, 15, 20, 25]);
    const ms = (msol * w) / 100;
    if (r() < 0.5) return { q: `${msol} г ерітіндіде ${num(ms)} г тұз бар. Тұздың массалық үлесі қандай?`, o: near(w, [(v) => Math.round((ms / (msol + ms)) * 1000) / 10, (v) => ms, (v) => v * 2, (v) => v + 5], r).map((s) => s + "%"), e: `ω = m(зат) / m(ерітінді) · 100% = ${num(ms)} / ${msol} · 100% = ${w}%.` };
    return { q: `${w}%-дық ${msol} г ерітінді дайындау үшін қанша грамм тұз қажет?`, o: near(ms, [(v) => msol - ms, (v) => w, (v) => v * 2, (v) => (w * 100) / msol], r).map((s) => s + " г"), e: `m(тұз) = ${msol} · ${w} / 100 = ${num(ms)} г.` };
  });

  G("chemistry", "Есептер", (r) => {
    const opts = [["H2O", "O"], ["CO2", "C"], ["NaOH", "Na"], ["CaCO3", "Ca"], ["SO2", "S"], ["Fe2O3", "Fe"], ["MgO", "Mg"], ["NH3", "N"], ["CH4", "H"], ["CuSO4", "Cu"]];
    const [f, el] = pickR(r, opts);
    const { M, counts } = molar(f);
    const w = (AR[el] * counts[el] * 100) / M;
    return { q: `${pretty(f)} құрамындағы ${el} элементінің массалық үлесі қандай?`, o: near(Math.round(w * 10) / 10, [(v) => Math.round((AR[el] * 1000) / M) / 10, (v) => Math.round((100 - v) * 10) / 10, (v) => v + 10, (v) => v - 7], r, (v) => num(v, 1)).map((s) => s + "%"), e: `ω(${el}) = ${counts[el] > 1 ? counts[el] + " · " : ""}${num(AR[el])} / ${num(M)} · 100% ≈ ${num(w, 1)}%.` };
  });

  /* ================= ИНФОРМАТИКА ================= */
  G("informatics", "Санау жүйелері", (r) => {
    const n = ri(r, 9, 200);
    const bin = n.toString(2);
    if (r() < 0.5) return { q: `${n}${sub(10)} санын екілік санау жүйесіне аудар.`, o: [bin, (n + 1).toString(2), (n - 1).toString(2), bin.split("").reverse().join("") === bin ? (n + 2).toString(2) : bin.split("").reverse().join("")], e: `${n} санын 2-ге қалдықпен бөліп, қалдықтарды кері ретпен жазамыз: ${bin}₂.` };
    return { q: `${bin}${sub(2)} санын ондық санау жүйесіне аудар.`, o: near(n, [1, -1, 2, (v) => parseInt(bin.split("").reverse().join(""), 2), (v) => bin.length], r), e: `${bin.split("").map((d, i) => `${d}·2${sup(bin.length - 1 - i)}`).join(" + ")} = ${n}.` };
  });

  G("informatics", "Санау жүйелері", (r) => {
    const n = ri(r, 17, 255);
    const hex = n.toString(16).toUpperCase();
    const alt = (n + 16).toString(16).toUpperCase(), alt2 = (n - 1).toString(16).toUpperCase(), alt3 = n.toString(8);
    if (r() < 0.5) return { q: `${n}${sub(10)} санын он алтылық санау жүйесіне аудар.`, o: [hex, alt, alt2, alt3], e: `${n} = ${Math.floor(n / 16)} · 16 + ${n % 16}; 16-лық цифрлар: ${hex}₁₆.` };
    return { q: `${hex}${sub(16)} санын ондық санау жүйесіне аудар.`, o: near(n, [16, -16, 1, (v) => Number(hex.replace(/[A-F]/g, "")) || v + 10], r), e: `${hex}₁₆ = ${Math.floor(n / 16)} · 16 + ${n % 16} = ${n}.` };
  });

  G("informatics", "Ақпарат өлшемі", (r) => {
    const i = pickR(r, [8, 16]), kb = pickR(r, [1, 2, 4, 8, 16]);
    const chars = (kb * 1024 * 8) / i;
    return { q: `Мәтін ${num(chars)} символдан тұрады, әр символ ${i} битпен кодталған. Мәтіннің ақпараттық көлемі неше Кбайт?`, o: near(kb, [(v) => v * 8, (v) => v * 2, (v) => v / 2, (v) => (chars * i) / 1000], r).map((s) => s + " Кбайт"), e: `${num(chars)} · ${i} бит = ${num(chars * i)} бит = ${num((chars * i) / 8)} байт = ${kb} Кбайт.` };
  });

  G("informatics", "Ақпарат өлшемі", (r) => {
    const i = ri(r, 3, 8), N = 2 ** i;
    return { q: `Алфавит ${N} символдан тұрады. Бір символдың ақпараттық салмағы қандай?`, o: near(i, [1, -1, (v) => N / 2, (v) => N / 8], r).map((s) => s + " бит"), e: `N = 2ⁱ: ${N} = 2${sup(i)}, демек i = ${i} бит.` };
  });

  G("informatics", "Ақпарат өлшемі", (r) => {
    const w = pickR(r, [64, 128, 256]), h = pickR(r, [64, 128, 256]), bits = pickR(r, [1, 4, 8]);
    const colors = 2 ** bits;
    const kb = (w * h * bits) / 8 / 1024;
    return { q: `Растрлық сурет өлшемі ${w}×${h} пиксель, палитрасы ${colors} түсті. Суреттің көлемі неше Кбайт?`, o: near(kb, [(v) => v * 8, (v) => (w * h * colors) / 8 / 1024, (v) => v * 2, (v) => v / 2], r).map((s) => s + " Кбайт"), e: `Бір пиксель ${bits} бит (${colors} = 2${sup(bits)}). ${w} · ${h} · ${bits} бит = ${num((w * h * bits) / 8)} байт = ${num(kb)} Кбайт.` };
  });

  G("informatics", "Ақпарат өлшемі", (r) => {
    const mb = pickR(r, [2, 4, 8, 16, 32]), speed = pickR(r, [256, 512, 1024, 2048]); // Кбит/с
    const t = (mb * 1024 * 8) / speed;
    return { q: `Көлемі ${mb} Мбайт файл ${speed} Кбит/с жылдамдықпен жіберіледі. Жіберу уақыты неше секунд?`, o: near(t, [(v) => v / 8, (v) => v * 2, (v) => (mb * 1000) / speed, (v) => v + 8], r).map((s) => s + " с"), e: `${mb} Мбайт = ${num(mb * 1024 * 8)} Кбит; ${num(mb * 1024 * 8)} : ${speed} = ${num(t)} с.` };
  });

  G("informatics", "Программалау (Python)", (r) => {
    const a = ri(r, 1, 5), b = ri(r, a + 3, a + 8), step = pickR(r, [1, 1, 2]);
    let s = 0;
    for (let i = a; i < b; i += step) s += i;
    const all = (b * (b + 1)) / 2 - (a * (a - 1)) / 2;
    const code = `s = 0<br>for i in range(${a}, ${b}${step > 1 ? ", " + step : ""}):<br>&nbsp;&nbsp;&nbsp;&nbsp;s += i<br>print(s)`;
    return { q: `Программа нәтижесі қандай?<br><code class="code">${code}</code>`, o: near(s, [(v) => all, (v) => v + b, (v) => v - a, (v) => v + 1], r), e: `range(${a}, ${b}${step > 1 ? ", " + step : ""}) соңғы мәнді (${b}) қамтымайды. Қосынды = ${s}.` };
  });

  G("informatics", "Программалау (Python)", (r) => {
    const x = ri(r, 2, 9), y = ri(r, 2, 9);
    const k = pickR(r, ["//", "%", "**"]);
    const val = k === "//" ? Math.floor((x * 10 + y) / x) : k === "%" ? (x * 10 + y) % x : x ** (y > 4 ? 2 : y);
    const right = k === "**" ? (y > 4 ? 2 : y) : x;
    const expr = k === "**" ? `${x} ** ${right}` : `${x * 10 + y} ${k} ${x}`;
    return { q: `Python тілінде <code>print(${expr})</code> командасы нені шығарады?`, o: near(val, [1, -1, (v) => (k === "**" ? x * right : (x * 10 + y) / x), (v) => v * 2, (v) => v + 2], r, (v) => (Number.isInteger(v) ? String(v) : String(Math.round(v * 100) / 100))), e: k === "//" ? "// — бүтін бөлу." : k === "%" ? "% — бөлгендегі қалдық." : "** — дәрежеге шығару." };
  });

  /* ================= ГЕОГРАФИЯ ================= */
  G("geography", "Картография", (r) => {
    const scale = pickR(r, [25000, 50000, 100000, 200000, 500000, 1000000]), cm = pickR(r, [1.5, 2, 3, 4, 5, 6.5, 8]);
    const km = (cm * scale) / 100000;
    return { q: `Масштабы 1 : ${num(scale)} картада өзеннің бір бөлігінің ұзындығы ${num(cm)} см. Жердегі нақты ұзындығы қандай?`, o: near(km, [(v) => v * 10, (v) => v / 10, (v) => v * 100, (v) => v + 2], r).map((s) => s + " км"), e: `Атаулы масштаб: 1 см — ${num(scale / 100000)} км. ${num(cm)} · ${num(scale / 100000)} = ${num(km)} км.` };
  });

  G("geography", "Атмосфера", (r) => {
    const t0 = ri(r, 14, 30), hkm = pickR(r, [1, 1.5, 2, 2.5, 3, 4, 5]);
    const t = t0 - 6 * hkm;
    return { q: `Тау етегінде ауа температурасы +${t0} °C. ${num(hkm * 1000)} м биіктікте температура қандай болады?`, o: near(t, [(v) => t0 - hkm, (v) => t0 - 10 * hkm, (v) => t0 + 6 * hkm, (v) => v + 3], r, (v) => (v > 0 ? "+" : "") + num(v)).map((s) => s + " °C"), e: `Тропосферада әр 1 км көтерілгенде температура шамамен 6 °C-қа төмендейді: ${t0} ${MINUS} 6 · ${num(hkm)} = ${num(t)} °C.` };
  });

  G("geography", "Атмосфера", (r) => {
    const k = pickR(r, [10, 20, 30, 40, 50, 60]);
    const h = k * 10.5;
    return { q: `Тау етегінде атмосфералық қысым 760 мм сын. бағ. Биіктігі ${num(h)} м шыңдағы қысым қандай? (әр 10,5 м сайын 1 мм-ге төмендейді)`, o: near(760 - k, [(v) => 760 - h / 10, (v) => 760 + k, (v) => 760 - 2 * k, (v) => v - 10], r).map((s) => s + " мм"), e: `${num(h)} : 10,5 = ${k} мм; 760 ${MINUS} ${k} = ${760 - k} мм сын. бағ.` };
  });

  G("geography", "Жер және уақыт", (r) => {
    const d = pickR(r, [15, 30, 45, 60, 75, 90, 105, 120]);
    if (r() < 0.5) return { q: `Екі қаланың географиялық бойлықтарының айырмасы ${d}°. Олардың жергілікті уақытының айырмасы қандай?`, o: near(d / 15, [1, -1, (v) => d / 10, (v) => v * 2], r).map((s) => s + " сағ"), e: `Жер 1 сағатта 15° бұрылады: ${d} : 15 = ${d / 15} сағат.` };
    const local = ri(r, 6, 14);
    const east = r() < 0.5;
    const res = local + (east ? d / 15 : -d / 15);
    const fmt = (v) => `${String(((v % 24) + 24) % 24).padStart(2, "0")}:00`;
    return { q: `A пунктінде жергілікті уақыт ${fmt(local)}. A-дан ${d}° ${east ? "шығысқа" : "батысқа"} қарай жатқан B пунктінде жергілікті уақыт қанша?`, o: [fmt(res), fmt(local + (east ? -d / 15 : d / 15)), fmt(res + 1), fmt(local + d / 10)], e: `${d}° = ${d / 15} сағ; шығыста уақыт алда, батыста кейін. Жауабы: ${fmt(res)}.` };
  });

  G("geography", "Халық", (r) => {
    const area = pickR(r, [50, 80, 100, 120, 150, 200, 250]), dens = pickR(r, [4, 6, 8, 10, 12, 15, 20]);
    const pop = area * dens;
    return { q: `Облыстың ауданы ${area} мың км², халқы ${num(pop / 1000, 2)} млн адам. Халықтың орташа тығыздығы қандай?`, o: near(dens, [(v) => v * 10, (v) => v / 2, (v) => v + 3, (v) => area / dens], r).map((s) => s + " адам/км²"), e: `${num(pop)} мың адам : ${area} мың км² = ${dens} адам/км².` };
  });

  G("geography", "Атмосфера", (r) => {
    const max = pickR(r, [10, 15, 17, 20, 30]), rel = pickR(r, [20, 40, 50, 60, 80]);
    const act = (max * rel) / 100;
    if (!Number.isInteger(act * 10)) return null;
    return { q: `Берілген температурада 1 м³ ауа ең көбі ${max} г су буын ұстай алады, ал іс жүзінде ${num(act)} г бар. Салыстырмалы ылғалдылық қандай?`, o: near(rel, [(v) => 100 - v, (v) => Math.round(max - act), 10, -10], r).map((s) => s + "%"), e: `φ = ${num(act)} / ${max} · 100% = ${rel}%.` };
  });
})();
