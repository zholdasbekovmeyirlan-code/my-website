'use strict';
// Demo restaurants and shops for an empty database. They are marked demo = 1 and use a simulated kitchen.
const data = require('./seed-data.json');

const ADDRESSES = {
  dastarkhan: 'Абылай хан д-лы, 85',
  'samsa-uyi': 'Жібек жолы к-сі, 64',
  'burger-dala': 'Достық д-лы, 105',
  'pizza-nan': 'Тимирязев к-сі, 42',
  'sushi-aral': 'Әл-Фараби д-лы, 95',
  'kofe-tau': 'Қабанбай батыр к-сі, 40',
  zhasyl: 'Сәтбаев к-сі, 18',
  'shashlyk-khan': 'Төле би к-сі, 189',
  'bari-market': 'Абай д-лы, 68',
  darihana: 'Желтоқсан к-сі, 115',
};

function seed(db) {
  if (db.one('SELECT COUNT(*) AS n FROM venues').n) return false;
  const now = Date.now();
  db.tx(() => {
    for (const v of data) {
      const res = db.run(
        `INSERT INTO venues (type, name, name_ru, note, note_ru, cats, emoji, hue, address, lat, lng, eta_min, eta_max,
           delivery_fee, min_order, commission, local, grid, demo, status, is_open, rating_sum, rating_count, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 'approved', 1, ?, 20, ?)`,
        v.type, v.n[0], v.n[1], v.note ? v.note[0] : null, v.note ? v.note[1] : null, v.cat.join(','), v.e, v.h,
        ADDRESSES[v.id] || '', v.ll[0], v.ll[1], v.eta[0], v.eta[1], v.fee, v.minOrder, v.local ? 0 : 0.1,
        v.local ? 1 : 0, v.grid ? 1 : 0, Math.round(v.rating * 20), now
      );
      const venueId = Number(res.lastInsertRowid);
      let sort = 0;
      if (v.box) {
        db.run(
          `INSERT INTO items (venue_id, section_id, name, name_ru, descr, descr_ru, price, old_price, stock, emoji, sort)
           VALUES (?, NULL, ?, ?, ?, ?, ?, ?, ?, '🎁', ?)`,
          venueId, v.box.n[0], v.box.n[1], v.box.d[0], v.box.d[1], v.box.price, v.box.old, v.box.left, sort++
        );
      }
      v.sections.forEach((sec, i) => {
        const s = db.run('INSERT INTO sections (venue_id, name, name_ru, sort) VALUES (?, ?, ?, ?)', venueId, sec.n[0], sec.n[1], i + 1);
        const sectionId = Number(s.lastInsertRowid);
        for (const [, n, d, price, e] of sec.items) {
          db.run(
            `INSERT INTO items (venue_id, section_id, name, name_ru, descr, descr_ru, price, emoji, sort) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            venueId, sectionId, n[0], n[1], d[0], d[1], price, e, sort++
          );
        }
      });
    }
  });
  return true;
}

module.exports = { seed };
