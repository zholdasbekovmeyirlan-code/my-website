'use strict';
// The client's list of 3D pictures (bari/js/ui.js) must match the files in bari/img/art.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const bari = path.join(__dirname, '..', '..', 'bari');

test('every listed picture has a file and every file is listed', () => {
  const src = fs.readFileSync(path.join(bari, 'js', 'ui.js'), 'utf8');
  const m = src.match(/const ART = new Set\(\(([\s\S]*?)\)\.trim\(\)/);
  assert.ok(m, 'ART list not found in ui.js');
  const listed = new Set(m[1].replace(/['+\s]+/g, ' ').trim().split(' '));
  const files = new Set(fs.readdirSync(path.join(bari, 'img', 'art')).filter((f) => f.endsWith('.webp')).map((f) => f.slice(0, -5)));
  assert.deepStrictEqual([...listed].filter((k) => !files.has(k)), [], 'listed without a file');
  assert.deepStrictEqual([...files].filter((k) => !listed.has(k)), [], 'file not listed');
  assert.ok(fs.existsSync(path.join(bari, 'img', 'art', 'LICENSE')), 'license file is missing');
});

test('every emoji the app and the demo data use has a picture', () => {
  const src = fs.readFileSync(path.join(bari, 'js', 'ui.js'), 'utf8');
  const listed = new Set(src.match(/const ART = new Set\(\(([\s\S]*?)\)\.trim\(\)/)[1].replace(/['+\s]+/g, ' ').trim().split(' '));
  const key = (e) => [...e].map((c) => c.codePointAt(0)).filter((n) => n !== 0xfe0f && n !== 0xfe0e && (n < 0x1f3fb || n > 0x1f3ff)).map((n) => n.toString(16)).join('-');
  const seed = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'seed-data.json'), 'utf8'));
  const used = new Set();
  const walk = (v) => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => (k === 'emoji' || k === 'e' ? used.add(x) : walk(x)));
  };
  walk(seed);
  walk(require('../lib/pricing').TARIFFS);
  const missing = [...used].filter((e) => !listed.has(key(e)));
  assert.deepStrictEqual(missing, []);
});
