/* Edgebook — broker CSV import (pure logic, no DOM).
   Works with any trade-history CSV: columns are matched by name (Binance, Bybit,
   MT4/MT5 exports, TradingView, Edgebook's own CSV, spreadsheets) and can be
   remapped by the user before importing. */
(function () {
  'use strict';

  const FIELDS = [
    { key: 'symbol', req: true, names: ['symbol', 'pair', 'contract', 'contracts', 'instrument', 'ticker', 'market', 'asset', 'item', 'coin', 'securityid'] },
    { key: 'side', req: false, names: ['side', 'direction', 'positionside', 'type', 'position', 'tradetype', 'buysell', 'action', 'closingdirection', 'orderside'] },
    { key: 'openedAt', req: false, names: ['openedat', 'opentime', 'entrytime', 'opendate', 'timeopen', 'openingtime', 'createdtime', 'created', 'createtime', 'time', 'date', 'datetime', 'tradetime', 'dateutc', 'timeutc', 'dateutc0'] },
    { key: 'closedAt', req: false, names: ['closedat', 'closetime', 'exittime', 'closedate', 'timeclose', 'closingtime', 'updatedtime', 'updatetime'] },
    { key: 'entry', req: true, names: ['entry', 'entryprice', 'openprice', 'avgentryprice', 'averageentryprice', 'avgopenprice', 'priceopen', 'openingprice', 'price', 'avgprice', 'averageprice', 'fillprice'] },
    { key: 'exit', req: false, names: ['exit', 'exitprice', 'closeprice', 'avgexitprice', 'averageexitprice', 'avgcloseprice', 'averageclosingprice', 'priceclose', 'closingprice', 'avgclosingprice'] },
    { key: 'qty', req: true, names: ['qty', 'quantity', 'size', 'volume', 'amount', 'lots', 'lot', 'filledqty', 'closedqty', 'executedqty', 'executed', 'closedsize', 'positionsize', 'contractsqty'] },
    { key: 'pnl', req: false, names: ['pnl', 'closedpnl', 'realizedpnl', 'realisedpnl', 'netpnl', 'profit', 'netprofit', 'profitloss', 'result', 'realizedprofit', 'net'] },
    { key: 'fees', req: false, names: ['fees', 'fee', 'commission', 'commissions', 'tradingfee', 'tradingfees', 'totalfee'] },
    { key: 'stop', req: false, names: ['stop', 'stoploss', 'sl', 'stopprice'] },
    { key: 'setup', req: false, names: ['setup', 'strategy', 'playbook'] },
    { key: 'notes', req: false, names: ['notes', 'note', 'comment', 'comments', 'memo'] }
  ];

  const norm = h => String(h || '').toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]/g, '');

  /* ---------- CSV ---------- */
  function parseCSV(text) {
    text = String(text || '').replace(/^﻿/, '');
    const firstLine = text.split(/\r?\n/).find(l => l.trim()) || '';
    const delim = [',', ';', '\t', '|'].map(d => [d, firstLine.split(d).length]).sort((a, b) => b[1] - a[1])[0][0];
    const rows = [];
    let row = [], field = '', q = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (q) {
        if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else q = false; }
        else field += c;
      } else if (c === '"') q = true;
      else if (c === delim) { row.push(field); field = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(field); field = '';
        if (row.some(x => x.trim() !== '')) rows.push(row);
        row = [];
      } else field += c;
    }
    row.push(field);
    if (row.some(x => x.trim() !== '')) rows.push(row);
    // header = first row with at least 3 non-empty cells
    const hi = rows.findIndex(r => r.filter(x => x.trim()).length >= 3);
    if (hi < 0) return { headers: [], rows: [] };
    const headers = rows[hi].map(h => h.trim());
    const body = rows.slice(hi + 1).filter(r => r.filter(x => x.trim()).length >= 2);
    return { headers, rows: body, delimiter: delim };
  }

  /* ---------- mapping ---------- */
  function guessMapping(headers) {
    const map = {}, used = new Set();
    const H = headers.map(norm);
    const pick = (field, test) => {
      if (map[field.key] != null) return;
      for (const n of field.names) {
        const i = H.findIndex((h, j) => !used.has(j) && test(h, n));
        if (i >= 0) { map[field.key] = i; used.add(i); return; }
      }
    };
    // exact names first (more specific fields first so "price" doesn't steal "exitprice")
    const order = ['exit', 'closedAt', 'pnl', 'fees', 'stop', 'entry', 'openedAt', 'symbol', 'side', 'qty', 'setup', 'notes'];
    order.forEach(k => pick(FIELDS.find(f => f.key === k), (h, n) => h === n));
    order.forEach(k => pick(FIELDS.find(f => f.key === k), (h, n) => n.length >= 4 && h.indexOf(n) >= 0));
    // MT4/MT5 style: repeated "Time"/"Price" columns → the later one is the close
    [['openedAt', 'closedAt'], ['entry', 'exit']].forEach(([a, b]) => {
      if (map[a] == null) return;
      const again = H.findIndex((h, j) => j > map[a] && h === H[map[a]]);
      if (again >= 0 && (map[b] == null || map[b] < map[a])) { map[b] = again; used.add(again); }
    });
    return map;
  }

  /* ---------- value parsing ---------- */
  function num(v) {
    if (v == null) return null;
    let s = String(v).trim();
    if (!s || s === '-' || s === '--') return null;
    const neg = /^\(.*\)$/.test(s);
    s = s.replace(/[^\d,.\-+eE]/g, '');
    if (!s) return null;
    if (s.indexOf(',') >= 0 && s.indexOf('.') >= 0) {
      s = s.lastIndexOf(',') > s.lastIndexOf('.') ? s.replace(/\./g, '').replace(',', '.') : s.replace(/,/g, '');
    } else if (s.indexOf(',') >= 0) {
      const parts = s.split(',');
      s = parts.length === 2 && parts[1].length !== 3 ? s.replace(',', '.') : s.replace(/,/g, '');
    }
    const n = parseFloat(s);
    return isFinite(n) ? (neg ? -Math.abs(n) : n) : null;
  }

  function date(v) {
    const s = String(v == null ? '' : v).trim();
    if (!s) return null;
    if (/^\d{10}(\.\d+)?$/.test(s)) return new Date(parseFloat(s) * 1000);
    if (/^\d{13}$/.test(s)) return new Date(+s);
    if (/(Z|[+-]\d{2}:?\d{2})$/.test(s) && !isNaN(Date.parse(s))) return new Date(Date.parse(s));
    let m = s.match(/^(\d{4})[-./](\d{1,2})[-./](\d{1,2})(?:[ T,]+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
    if (m) return new Date(+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0), +(m[6] || 0));
    m = s.match(/^(\d{1,2})[-./](\d{1,2})[-./](\d{2,4})(?:[ T,]+(\d{1,2}):(\d{2})(?::(\d{2}))?\s*([AaPp][Mm])?)?/);
    if (m) {
      let d = +m[1], mo = +m[2], y = +m[3];
      if (y < 100) y += 2000;
      if (mo > 12 && d <= 12) { const t = d; d = mo; mo = t; }
      let h = +(m[4] || 0);
      if (m[7]) { const pm = /p/i.test(m[7]); if (pm && h < 12) h += 12; if (!pm && h === 12) h = 0; }
      return new Date(y, mo - 1, d, h, +(m[5] || 0), +(m[6] || 0));
    }
    const t = Date.parse(s);
    return isNaN(t) ? null : new Date(t);
  }

  function side(v) {
    const s = String(v || '').trim().toLowerCase();
    if (!s) return null;
    if (/short|sell|^s$|^-1$/.test(s)) return 'short';
    if (/long|buy|^b$|^1$/.test(s)) return 'long';
    return null;
  }

  function market(sym) {
    const s = String(sym).toUpperCase();
    if (/(USDT|USDC|BUSD|PERP|BTC|ETH)$/.test(s) && s.length > 5) return 'crypto';
    if (/^(XAU|XAG|XPT|US30|NAS|SPX|US500|GER|DAX|UK100|USOIL|UKOIL|ES|NQ|YM|CL|GC)/.test(s)) return 'futures';
    if (/^[A-Z]{6}$/.test(s) && /(USD|EUR|JPY|GBP|CHF|AUD|CAD|NZD)/.test(s)) return 'forex';
    if (/^[A-Z]{1,5}$/.test(s)) return 'stocks';
    return 'other';
  }

  const pad = n => String(n).padStart(2, '0');
  const local = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  const dedupeKey = t => [String(t.symbol).toUpperCase(), String(t.openedAt || '').slice(0, 16), +(+t.entry).toPrecision(8), +Math.abs(+t.qty).toPrecision(8)].join('|');

  /* ---------- rows → trades ---------- */
  function toTrades(parsed, map, opts) {
    opts = opts || {};
    const existing = new Set((opts.existing || []).map(dedupeKey));
    const seen = new Set();
    const out = { trades: [], skipped: 0, duplicates: 0, errors: [] };
    const cell = (r, k) => map[k] == null ? '' : r[map[k]];
    parsed.rows.forEach((r, i) => {
      const symbol = String(cell(r, 'symbol') || '').trim().toUpperCase().replace(/\s+/g, '');
      const entry = num(cell(r, 'entry'));
      let qty = num(cell(r, 'qty'));
      if (!symbol || entry == null || qty == null || qty === 0) { out.skipped++; if (out.errors.length < 5) out.errors.push(i + 2); return; }
      let sd = side(cell(r, 'side'));
      if (!sd) sd = qty < 0 ? 'short' : 'long';
      if (opts.invertSide) sd = sd === 'long' ? 'short' : 'long';
      qty = Math.abs(qty);
      const dir = sd === 'short' ? -1 : 1;
      const fees = Math.abs(num(cell(r, 'fees')) || 0);
      let exit = num(cell(r, 'exit'));
      const pnl = num(cell(r, 'pnl'));
      if (exit == null && pnl != null) exit = +(entry + (pnl + fees) / (qty * dir)).toPrecision(10);
      const o = date(cell(r, 'openedAt'));
      const c = date(cell(r, 'closedAt'));
      const opened = o || c || new Date();
      const closed = exit != null ? (c && c >= opened ? c : opened) : null;
      const t = {
        symbol, side: sd, market: market(symbol),
        openedAt: local(opened), closedAt: closed ? local(closed) : '',
        entry, exit: exit == null ? '' : exit, qty, fees: fees || '', mult: 1,
        stop: num(cell(r, 'stop')) == null ? '' : num(cell(r, 'stop')),
        setup: String(cell(r, 'setup') || '').trim(), notes: String(cell(r, 'notes') || '').trim(),
        tags: ['import'], mistakes: [], emotion: '', rating: 0
      };
      const key = dedupeKey(t);
      if (existing.has(key) || seen.has(key)) { out.duplicates++; return; }
      seen.add(key);
      out.trades.push(t);
    });
    return out;
  }

  window.Importer = { FIELDS, parseCSV, guessMapping, toTrades, num, date, side };
})();
