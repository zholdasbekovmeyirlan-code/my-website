'use strict';
// Photos from partners (venue covers, dishes): JPEG, PNG or WebP up to 1.5 MB.
// The app resizes photos before sending; the server checks the real file type and stores it under a random name.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { fail, SECURITY_HEADERS } = require('./http');

const MAX_BYTES = 1.5 * 1024 * 1024;
const DATA_URL = /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)$/;
const NAME = /^[a-f0-9]{32}\.(jpg|png|webp)$/;
const TYPES = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };
// Pictures shipped with the app (bari/img) may also be used.
const BUNDLED = /^\/img\/[a-z0-9_/-]+\.(jpg|png|webp|svg)$/;

function sniff(buf) {
  if (buf.length > 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpg';
  if (buf.length > 8 && buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'png';
  if (buf.length > 12 && buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') return 'webp';
  return null;
}

function createUploads(dir) {
  return {
    saveImage(dataUrl) {
      const m = typeof dataUrl === 'string' && dataUrl.match(DATA_URL);
      if (!m) fail(400, 'invalid', 'image');
      const buf = Buffer.from(m[2], 'base64');
      if (!buf.length || buf.length > MAX_BYTES) fail(400, 'invalid', 'image');
      const ext = sniff(buf);
      if (!ext) fail(400, 'invalid', 'image');
      fs.mkdirSync(dir, { recursive: true });
      const name = crypto.randomBytes(16).toString('hex') + '.' + ext;
      fs.writeFileSync(path.join(dir, name), buf);
      return '/uploads/' + name;
    },
    // A photo URL a partner may attach: one of ours, a bundled picture, or nothing.
    isOwnUrl(url) {
      if (typeof url !== 'string') return false;
      if (BUNDLED.test(url) && !url.includes('..')) return true;
      const m = url.match(/^\/uploads\/(.+)$/);
      return !!(m && NAME.test(m[1]) && fs.existsSync(path.join(dir, m[1])));
    },
    serve(req, res, pathname) {
      const name = decodeURIComponent(pathname.slice('/uploads/'.length));
      if (!NAME.test(name)) return false;
      const file = path.join(dir, name);
      let stat;
      try { stat = fs.statSync(file); } catch (e) { return false; }
      res.writeHead(200, {
        ...SECURITY_HEADERS,
        'Content-Type': TYPES[name.split('.').pop()],
        'Content-Length': stat.size,
        'Cache-Control': 'public, max-age=31536000, immutable',
      });
      if (req.method === 'HEAD') { res.end(); return true; }
      fs.createReadStream(file).pipe(res);
      return true;
    },
  };
}

module.exports = { createUploads, BUNDLED };
