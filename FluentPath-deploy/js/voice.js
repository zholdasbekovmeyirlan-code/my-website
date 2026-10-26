/* FluentPath — voices. Recorded neural voices (audio/<voice>/<hash>.mp3, made by scripts/build-audio.mjs) play when a
   clip exists; anything else (AI chat replies, offline misses) uses the device's best English voice of the same gender.
   Girls and women speak with female voices, boys and men with male ones. */
window.FP_VOICE = (() => {
  // Voice ids used across the app → recorded Kokoro voice and gender.
  const VOICES = {
    nar: { kokoro: "af_heart", g: "f" }, // lesson narrator: words, examples, phrases
    f1: { kokoro: "af_bella", g: "f" },
    f2: { kokoro: "bf_emma", g: "f" },
    m1: { kokoro: "am_michael", g: "m" },
    m2: { kokoro: "am_fenrir", g: "m" },
    boy: { kokoro: "am_puck", g: "m" },
  };

  // Listening tracks take turns between a woman's and a man's voice.
  const TRACK_CYCLE = ["nar", "m1", "f2", "m2"];
  const trackVoice = (index) => TRACK_CYCLE[index % TRACK_CYCLE.length];

  // Story characters: gender from the emoji, with names the emoji does not settle.
  const FEMALE_EMOJI = /👧|👩|👵/u;
  const GIRL_EMOJI = /👧/u;
  const BOY_EMOJI = /👦/u;
  const SEX = { st2: { Arman: "m", Waiter: "m" }, st5: { Manager: "m" }, st6: { Yerlan: "m" } };
  function storyVoices(story) {
    const out = {};
    const used = { f: 0, m: 0 };
    Object.entries(story.cast || {}).forEach(([name, emoji]) => {
      const sex = (SEX[story.id] || {})[name];
      if (sex !== "m" && GIRL_EMOJI.test(emoji)) out[name] = "f1";
      else if (sex !== "f" && BOY_EMOJI.test(emoji)) out[name] = "boy";
      else if (sex === "f" || (!sex && FEMALE_EMOJI.test(emoji))) out[name] = ["f1", "f2"][used.f++ % 2];
      else out[name] = ["m1", "m2"][used.m++ % 2];
    });
    return out;
  }

  const norm = (text) => String(text || "").replace(/\s+/g, " ").trim();
  function hash(str) {
    let h = 2166136261;
    for (const c of str) h = Math.imul(h ^ c.codePointAt(0), 16777619) >>> 0;
    return h.toString(16).padStart(8, "0");
  }
  const clipId = (voice, text) => hash(`${voice}|${norm(text)}`);

  let index = null;
  function have(voice, text) {
    if (!index) {
      index = {};
      const src = (typeof window !== "undefined" && window.FP_AUDIO) || {};
      Object.keys(src).forEach((v) => (index[v] = new Set(String(src[v]).split(" ").filter(Boolean))));
    }
    return !!(index[voice] && index[voice].has(clipId(voice, text)));
  }

  /* ---------- device voices (fallback) ---------- */
  const FEMALE_NAME =
    /female|woman|samantha|karen|moira|tessa|fiona|victoria|allison|\bava\b|susan|zira|aria|jenny|michelle|sonia|libby|emma|hazel|serena|\bkate\b|nicky|joanna|salli|kimberly|\bivy\b|\bamy\b|linda|heather|catherine|natasha|clara|emily|\bsara|zoe|olivia|google us english/i;
  const MALE_NAME =
    /\bmale\b|daniel|\balex\b|\bfred\b|oliver|\btom\b|aaron|arthur|david|\bmark\b|\bguy\b|ryan|christopher|\beric\b|roger|thomas|george|gordon|\blee\b|rishi|james|brian|matthew|justin|joey|liam|william|andrew|brandon|steffan|connor|davis|\btony\b|jason/i;
  const genderOf = (v) => (FEMALE_NAME.test(v.name) ? "f" : MALE_NAME.test(v.name) ? "m" : null);
  let voiceCache = {};

  function deviceVoice(g) {
    if (!window.speechSynthesis) return null;
    if (voiceCache[g] !== undefined) return voiceCache[g];
    const list = (speechSynthesis.getVoices() || []).filter((v) => /^en/i.test(v.lang));
    let best = null;
    let bestScore = -1e9;
    list.forEach((v) => {
      const vg = genderOf(v);
      let s = /en[-_](US|GB)/i.test(v.lang) ? 3 : 1;
      if (/natural|neural|online|premium|enhanced/i.test(v.name)) s += 5;
      if (/google/i.test(v.name)) s += 3;
      if (/compact|espeak/i.test(v.name)) s -= 4;
      s += vg === g ? 6 : vg ? -6 : 0;
      if (s > bestScore) {
        bestScore = s;
        best = v;
      }
    });
    if (!list.length) return null; // voices not loaded yet; try again next time
    const vg = best ? genderOf(best) : null;
    // A voice of the other (or unknown) gender is nudged towards the right one.
    const pitch = vg === g ? 1 : g === "f" ? (vg ? 1.3 : 1.1) : vg ? 0.72 : 0.86;
    voiceCache[g] = { voice: best, pitch };
    return voiceCache[g];
  }
  if (typeof window !== "undefined" && window.speechSynthesis) {
    speechSynthesis.addEventListener?.("voiceschanged", () => (voiceCache = {}));
  }

  /* ---------- playback ---------- */
  let audio = null;
  let token = 0;
  let current = null; // { kind: "clip"|"tts", paused }
  const blobs = new Map(); // url → object URL (small LRU)

  function el() {
    if (!audio) {
      audio = new Audio();
      audio.preload = "auto";
    }
    return audio;
  }

  // Hosts that limit the number of files can serve clips bundled in a few JSON packs (window.FP_AUDIO_PACKS).
  const packs = {};
  async function fromPack(url) {
    const P = window.FP_AUDIO_PACKS;
    const key = url.replace(/^audio\//, "").replace(/\.mp3$/, "");
    const n = P.where[key];
    if (n === undefined) throw new Error("not packed");
    if (!packs[n]) packs[n] = fetch(P.files[n]).then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))));
    const pack = await packs[n].catch((e) => {
      delete packs[n];
      throw e;
    });
    const bin = atob(pack[key]);
    return new Blob([Uint8Array.from(bin, (c) => c.charCodeAt(0))], { type: "audio/mpeg" });
  }

  async function load(url) {
    if (blobs.has(url)) {
      const u = blobs.get(url);
      blobs.delete(url);
      blobs.set(url, u);
      return u;
    }
    let blob;
    if (window.FP_AUDIO_PACKS) blob = await fromPack(url);
    else {
      const res = await fetch(url);
      if (!res.ok) throw new Error(String(res.status));
      blob = await res.blob();
    }
    const obj = URL.createObjectURL(blob);
    blobs.set(url, obj);
    if (blobs.size > 80) {
      const [old, u] = blobs.entries().next().value;
      URL.revokeObjectURL(u);
      blobs.delete(old);
    }
    return obj;
  }

  const clipUrl = (voice, text) => `audio/${voice}/${clipId(voice, text)}.mp3`;

  function preload(voice, text) {
    if (have(voice, text)) load(clipUrl(voice, text)).catch(() => {});
  }

  function stop() {
    token += 1;
    current = null;
    if (audio) {
      audio.onended = null;
      audio.onerror = null;
      audio.pause();
    }
    if (window.speechSynthesis) speechSynthesis.cancel();
  }

  function speakDevice(text, opts, my, done) {
    if (!window.speechSynthesis) {
      done();
      return;
    }
    const g = opts.gender || (VOICES[opts.voice] || VOICES.nar).g;
    const pick = deviceVoice(g);
    const u = new SpeechSynthesisUtterance(text);
    u.lang = (pick && pick.voice && pick.voice.lang) || "en-US";
    if (pick && pick.voice) u.voice = pick.voice;
    u.rate = opts.rate || 1;
    u.pitch = Math.min(2, (opts.pitch || 1) * (pick ? pick.pitch : 1));
    u.onstart = () => my === token && opts.onstart && opts.onstart();
    u.onend = done;
    u.onerror = done;
    current = { kind: "tts", paused: false };
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  // say(text, { voice, rate, pitch, gender, onstart, onend }) — stops whatever was playing first.
  function say(text, opts = {}) {
    text = norm(text);
    if (!text) return false;
    stop();
    const my = token;
    const voice = VOICES[opts.voice] ? opts.voice : "nar";
    const done = () => {
      if (my !== token) return;
      current = null;
      if (opts.onend) opts.onend();
    };
    const fallback = () => my === token && speakDevice(text, { ...opts, voice }, my, done);
    if (!have(voice, text)) {
      fallback();
      return !!window.speechSynthesis;
    }
    current = { kind: "clip", paused: false };
    load(clipUrl(voice, text))
      .then((obj) => {
        if (my !== token) return;
        const a = el();
        a.onended = done;
        a.onerror = fallback;
        a.src = obj;
        a.playbackRate = opts.rate || 1;
        a.preservesPitch = true;
        a.webkitPreservesPitch = true;
        return a.play().then(() => my === token && opts.onstart && opts.onstart());
      })
      .catch(fallback);
    return true;
  }

  function pause() {
    if (!current || current.paused) return;
    current.paused = true;
    if (current.kind === "clip") audio && audio.pause();
    else if (window.speechSynthesis) speechSynthesis.pause();
  }

  function resume() {
    if (!current || !current.paused) return;
    current.paused = false;
    if (current.kind === "clip") audio && audio.play().catch(() => {});
    else if (window.speechSynthesis) speechSynthesis.resume();
  }

  // iPhone only lets a page play sound that started from a tap: unlock the shared player on the first tap.
  if (typeof document !== "undefined") {
    const SILENT = "data:audio/mpeg;base64,//NExAAAAANIAAAAAExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExFMAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKYAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
    const unlock = () => {
      document.removeEventListener("pointerdown", unlock, true);
      const a = el();
      if (a.src) return;
      a.muted = true;
      a.src = SILENT;
      const done = () => {
        if (a.src === SILENT) a.pause();
        a.muted = false;
      };
      a.play().then(done, done);
    };
    document.addEventListener("pointerdown", unlock, true);
  }

  return {
    VOICES,
    say,
    stop,
    pause,
    resume,
    preload,
    isPaused: () => !!(current && current.paused),
    isSpeaking: () => !!(current && !current.paused),
    hasClips: () => !!(typeof window !== "undefined" && window.FP_AUDIO),
    trackVoice,
    storyVoices,
    clipId,
    norm,
  };
})();
