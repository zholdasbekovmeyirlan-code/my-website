'use strict';
// A database created by an earlier version gets the new columns on start, without losing rows.
const test = require('node:test');
const assert = require('node:assert/strict');
const os = require('node:os');
const path = require('node:path');
const fs = require('node:fs');
const { DatabaseSync } = require('node:sqlite');
const { open } = require('../lib/db');

test('old databases are migrated in place', () => {
  const file = path.join(os.tmpdir(), `bari-old-${process.pid}-${Date.now()}.db`);
  const old = new DatabaseSync(file);
  old.exec(`CREATE TABLE venues (id INTEGER PRIMARY KEY, owner_id INTEGER, type TEXT NOT NULL, name TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL, created_at INTEGER NOT NULL);
            CREATE TABLE items (id INTEGER PRIMARY KEY, venue_id INTEGER NOT NULL, name TEXT NOT NULL, price INTEGER NOT NULL);
            INSERT INTO venues (type, name, lat, lng, created_at) VALUES ('food', 'Ескі', 43.2, 76.9, 1);`);
  old.close();
  const db = open(file);
  try {
    const cols = (t) => db.all(`PRAGMA table_info(${t})`).map((c) => c.name);
    assert.ok(cols('venues').includes('cover_url'));
    assert.ok(cols('items').includes('photo_url'));
    assert.equal(db.one('SELECT name FROM venues').name, 'Ескі');
  } finally {
    db.close();
    fs.rmSync(file, { force: true });
    fs.rmSync(file + '-wal', { force: true });
    fs.rmSync(file + '-shm', { force: true });
  }
});
