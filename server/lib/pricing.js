'use strict';
// Tariffs and fare rules. The server is the only place prices are calculated.

const TARIFFS = {
  ride: [
    { id: 'econom', n: ['Эконом', 'Эконом'], e: '🚗', base: 400, km: 110, min: 12, floor: 700, eta: 4, classes: ['econom', 'comfort', 'business'] },
    { id: 'comfort', n: ['Комфорт', 'Комфорт'], e: '🚙', base: 600, km: 140, min: 15, floor: 1000, eta: 6, classes: ['comfort', 'business'] },
    { id: 'kids', n: ['Балалар', 'Детский'], e: '🧸', base: 700, km: 130, min: 15, floor: 1100, eta: 8, w: ['Кресло бар', 'С креслом'], childSeat: true, classes: ['econom', 'comfort', 'business'] },
    { id: 'business', n: ['Бизнес', 'Бизнес'], e: '🚘', base: 1300, km: 260, min: 25, floor: 2500, eta: 9, classes: ['business'] },
    { id: 'social', n: ['Әлеуметтік', 'Социальный'], e: '🤝', base: 400, km: 110, min: 12, floor: 700, eta: 6, discount: 0.3, social: true, classes: ['econom', 'comfort', 'business'] },
  ],
  parcel: [
    { id: 'walk', n: ['Жаяу', 'Пеший'], e: '🚶', base: 600, km: 100, min: 0, floor: 800, eta: 10, w: ['5 кг дейін', 'до 5 кг'], vehicles: ['walk', 'bike', 'scooter', 'car', 'truck'] },
    { id: 'car', n: ['Көлікпен', 'На авто'], e: '🚗', base: 900, km: 120, min: 0, floor: 1200, eta: 12, w: ['20 кг дейін', 'до 20 кг'], vehicles: ['car', 'truck'] },
    { id: 'cargo', n: ['Жүк көлігі', 'Грузовой'], e: '🚚', base: 3500, km: 300, min: 0, floor: 5000, eta: 25, w: ['1,5 т дейін', 'до 1,5 т'], vehicles: ['truck'] },
  ],
};

const WORKER_SHARE = 0.9;
const ROUND_UP_TO = 500;

function hav(a, b) {
  const R = 6371, rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

// Until a routing service is connected, distance follows a stepped path (Almaty's grid) plus 10%.
function trip(a, b) {
  const mid = { lat: (a.lat + b.lat) / 2, lng: a.lng };
  const mid2 = { lat: mid.lat, lng: b.lng };
  const d = hav(a, mid) + hav(mid, mid2) + hav(mid2, b);
  const km = Math.max(0.8, d * 1.1);
  return { km: Math.round(km * 10) / 10, minutes: Math.round((km / 24) * 60 + 3) };
}

function fare(tariff, t) {
  let p = tariff.base + tariff.km * t.km + (tariff.min || 0) * t.minutes;
  p = Math.max(p, tariff.floor);
  if (tariff.discount) p *= 1 - tariff.discount;
  return Math.round(p / 10) * 10;
}

const roundUp = (total) => Math.ceil(total / ROUND_UP_TO) * ROUND_UP_TO - total;
const workerShare = (amount) => Math.round(amount * WORKER_SHARE);

module.exports = { TARIFFS, WORKER_SHARE, hav, trip, fare, roundUp, workerShare };
