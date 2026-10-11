'use strict';
// SQLite storage (built into Node 22). One file, no extra services to run.
const fs = require('node:fs');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');

const SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  phone TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL DEFAULT '',
  is_admin INTEGER NOT NULL DEFAULT 0,
  social_status TEXT NOT NULL DEFAULT 'none',
  social_verified INTEGER NOT NULL DEFAULT 0,
  blocked INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS otps (
  phone TEXT PRIMARY KEY,
  code_hash TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  sent_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS workers (
  user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  kind TEXT NOT NULL CHECK (kind IN ('driver', 'courier')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'blocked')),
  car_model TEXT NOT NULL DEFAULT '',
  car_color TEXT NOT NULL DEFAULT '',
  car_plate TEXT NOT NULL DEFAULT '',
  car_class TEXT NOT NULL DEFAULT 'econom',
  child_seat INTEGER NOT NULL DEFAULT 0,
  vehicle TEXT NOT NULL DEFAULT 'car',
  online INTEGER NOT NULL DEFAULT 0,
  lat REAL,
  lng REAL,
  loc_at INTEGER,
  rating_sum INTEGER NOT NULL DEFAULT 0,
  rating_count INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS venues (
  id INTEGER PRIMARY KEY,
  owner_id INTEGER REFERENCES users(id),
  type TEXT NOT NULL CHECK (type IN ('food', 'shop', 'pharm')),
  name TEXT NOT NULL,
  name_ru TEXT,
  note TEXT,
  note_ru TEXT,
  cats TEXT NOT NULL DEFAULT '',
  emoji TEXT NOT NULL DEFAULT '🍽️',
  hue INTEGER NOT NULL DEFAULT 30,
  address TEXT NOT NULL DEFAULT '',
  lat REAL NOT NULL,
  lng REAL NOT NULL,
  eta_min INTEGER NOT NULL DEFAULT 30,
  eta_max INTEGER NOT NULL DEFAULT 45,
  delivery_fee INTEGER NOT NULL DEFAULT 390,
  min_order INTEGER NOT NULL DEFAULT 2000,
  commission REAL NOT NULL DEFAULT 0.1,
  local INTEGER NOT NULL DEFAULT 0,
  grid INTEGER NOT NULL DEFAULT 0,
  demo INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'blocked')),
  is_open INTEGER NOT NULL DEFAULT 1,
  rating_sum INTEGER NOT NULL DEFAULT 0,
  rating_count INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS sections (
  id INTEGER PRIMARY KEY,
  venue_id INTEGER NOT NULL REFERENCES venues(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_ru TEXT,
  sort INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY,
  venue_id INTEGER NOT NULL REFERENCES venues(id) ON DELETE CASCADE,
  section_id INTEGER REFERENCES sections(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  name_ru TEXT,
  descr TEXT NOT NULL DEFAULT '',
  descr_ru TEXT,
  price INTEGER NOT NULL CHECK (price > 0),
  old_price INTEGER,
  stock INTEGER,
  emoji TEXT NOT NULL DEFAULT '🍽️',
  available INTEGER NOT NULL DEFAULT 1,
  sort INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY,
  kind TEXT NOT NULL CHECK (kind IN ('ride', 'parcel', 'delivery')),
  status TEXT NOT NULL,
  client_id INTEGER NOT NULL REFERENCES users(id),
  worker_id INTEGER REFERENCES users(id),
  venue_id INTEGER REFERENCES venues(id),
  tariff TEXT,
  from_json TEXT NOT NULL,
  to_json TEXT NOT NULL,
  km REAL NOT NULL DEFAULT 0,
  minutes INTEGER NOT NULL DEFAULT 0,
  price INTEGER NOT NULL DEFAULT 0,
  items_json TEXT,
  subtotal INTEGER NOT NULL DEFAULT 0,
  delivery_fee INTEGER NOT NULL DEFAULT 0,
  donation INTEGER NOT NULL DEFAULT 0,
  total INTEGER NOT NULL DEFAULT 0,
  pay TEXT NOT NULL DEFAULT 'cash',
  comment TEXT NOT NULL DEFAULT '',
  pkg TEXT NOT NULL DEFAULT '',
  stars INTEGER,
  tip INTEGER NOT NULL DEFAULT 0,
  cancel_reason TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS orders_client ON orders(client_id, created_at);
CREATE INDEX IF NOT EXISTS orders_worker ON orders(worker_id, status);
CREATE INDEX IF NOT EXISTS orders_venue ON orders(venue_id, status);
CREATE INDEX IF NOT EXISTS orders_status ON orders(kind, status);
CREATE TABLE IF NOT EXISTS order_events (
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS order_events_order ON order_events(order_id);
`;

function open(file) {
  if (file !== ':memory:') fs.mkdirSync(path.dirname(file), { recursive: true });
  const raw = new DatabaseSync(file);
  raw.exec('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 3000;');
  raw.exec(SCHEMA);

  const cache = new Map();
  const stmt = (sql) => {
    let s = cache.get(sql);
    if (!s) { s = raw.prepare(sql); cache.set(sql, s); }
    return s;
  };
  const plain = (row) => (row ? { ...row } : row);

  return {
    raw,
    one: (sql, ...p) => plain(stmt(sql).get(...p)),
    all: (sql, ...p) => stmt(sql).all(...p).map(plain),
    run: (sql, ...p) => stmt(sql).run(...p),
    tx(fn) {
      raw.exec('BEGIN IMMEDIATE');
      try {
        const out = fn();
        raw.exec('COMMIT');
        return out;
      } catch (e) {
        raw.exec('ROLLBACK');
        throw e;
      }
    },
    close: () => raw.close(),
  };
}

module.exports = { open, SCHEMA };
