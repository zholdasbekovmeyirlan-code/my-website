'use strict';
// Reads settings from environment variables, with an optional server/.env file.
const fs = require('node:fs');
const path = require('node:path');

const envFile = path.join(__dirname, '..', '.env');
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const env = process.env;
const flag = (v, def) => (v === undefined || v === '' ? def : v === '1' || v.toLowerCase() === 'true');

module.exports = {
  port: Number(env.PORT) || 3000,
  dbPath: path.resolve(__dirname, '..', env.DB_PATH || './data/bari.db'),
  uploadsDir: env.UPLOADS_DIR ? path.resolve(__dirname, '..', env.UPLOADS_DIR) : null,
  staticDir: path.resolve(__dirname, '..', '..', 'bari'),
  smsMode: env.SMS_MODE || 'demo',
  adminPhones: (env.ADMIN_PHONES || '').split(',').map((s) => s.replace(/\D/g, '')).filter(Boolean),
  seedDemo: flag(env.SEED_DEMO, true),
  simulate: flag(env.SIMULATE, true),
  otpSecret: env.OTP_SECRET || 'bari-dev-secret',
  // Pilot mode: only admins and phones the admin invited (or already known) can sign in.
  inviteOnly: flag(env.INVITE_ONLY, false),
  production: env.NODE_ENV === 'production',
};
