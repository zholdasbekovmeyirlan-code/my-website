'use strict';
// Sending SMS codes.
//   SMS_MODE=demo     the code is only logged and shown on screen (testing only)
//   SMS_MODE=mobizon  Mobizon (mobizon.kz), needs MOBIZON_API_KEY
//   SMS_MODE=smsc     SMSC (smsc.kz), needs SMSC_LOGIN and SMSC_PASSWORD
// The provider calls follow the providers' public HTTP APIs; check them with your own account before launch.

async function sendMobizon(phone, text) {
  const key = process.env.MOBIZON_API_KEY;
  if (!key) throw new Error('MOBIZON_API_KEY is not set');
  const url = 'https://api.mobizon.kz/service/message/sendsmsmessage?output=json&api=v1&apiKey=' + encodeURIComponent(key);
  const res = await fetch(url, { method: 'POST', body: new URLSearchParams({ recipient: phone, text }) });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.code !== 0) throw new Error('Mobizon: ' + (data.message || res.status));
}

async function sendSmsc(phone, text) {
  const login = process.env.SMSC_LOGIN, psw = process.env.SMSC_PASSWORD;
  if (!login || !psw) throw new Error('SMSC_LOGIN / SMSC_PASSWORD are not set');
  const url = 'https://smsc.kz/sys/send.php?' + new URLSearchParams({ login, psw, phones: phone, mes: text, fmt: '3', charset: 'utf-8' });
  const res = await fetch(url);
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.error) throw new Error('SMSC: ' + (data.error || res.status));
}

const PROVIDERS = { mobizon: sendMobizon, smsc: sendSmsc };

async function sendCode(phone, code, mode) {
  const text = `Бәрі: кіру коды ${code}`;
  if (mode === 'demo') {
    console.log(`[sms demo] +${phone}: ${text}`);
    return { demoCode: code };
  }
  const send = PROVIDERS[mode];
  if (!send) throw new Error(`Unknown SMS_MODE "${mode}". Use demo, mobizon or smsc.`);
  await send(phone, text);
  return {};
}

module.exports = { sendCode, PROVIDERS };
