'use strict';
// Input checks. Each helper throws a 400 error with a field name the app can show.
const { fail } = require('./http');

const str = (v, field, { min = 0, max = 200, optional = false } = {}) => {
  if (v === undefined || v === null || v === '') {
    if (optional) return '';
    if (min > 0) fail(400, 'invalid', field);
    return '';
  }
  if (typeof v !== 'string') fail(400, 'invalid', field);
  const s = v.trim().replace(/\s+/g, ' ');
  if (s.length < min || s.length > max) fail(400, 'invalid', field);
  return s;
};
const int = (v, field, { min = -Infinity, max = Infinity, optional = false } = {}) => {
  if ((v === undefined || v === null || v === '') && optional) return null;
  const n = Number(v);
  if (!Number.isInteger(n) || n < min || n > max) fail(400, 'invalid', field);
  return n;
};
const oneOf = (v, field, list) => {
  if (!list.includes(v)) fail(400, 'invalid', field);
  return v;
};
const bool = (v) => v === true || v === 1 || v === '1';

// Almaty and surroundings; widen when new cities launch.
const AREA = { minLat: 42.9, maxLat: 43.6, minLng: 76.5, maxLng: 77.5 };
const point = (v, field) => {
  if (!v || typeof v !== 'object') fail(400, 'invalid', field);
  const lat = Number(v.lat), lng = Number(v.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) fail(400, 'invalid', field);
  if (lat < AREA.minLat || lat > AREA.maxLat || lng < AREA.minLng || lng > AREA.maxLng) fail(400, 'out_of_area', field);
  return {
    n: str(v.n, field + '.n', { max: 120, optional: true }) || 'Нүкте',
    a: str(v.a, field + '.a', { max: 160, optional: true }),
    lat: Math.round(lat * 1e6) / 1e6,
    lng: Math.round(lng * 1e6) / 1e6,
  };
};

// Kazakhstan mobile numbers: +7 7XX XXX XX XX → "77XXXXXXXXX".
const phone = (v) => {
  let d = String(v || '').replace(/\D/g, '');
  if (d.length === 11 && d[0] === '8') d = '7' + d.slice(1);
  if (d.length === 10 && d[0] === '7') d = '7' + d;
  if (!/^77\d{9}$/.test(d)) fail(400, 'invalid', 'phone');
  return d;
};

// A short icon chosen by a partner; markup characters are not allowed.
const emoji = (v, field) => {
  const s = str(v, field, { min: 1, max: 8 });
  if (/[<>&"'`=\\/]/.test(s)) fail(400, 'invalid', field);
  return s;
};

module.exports = { str, int, oneOf, bool, point, phone, emoji, AREA };
