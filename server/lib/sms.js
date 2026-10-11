'use strict';
// Sending SMS codes. In "demo" mode the code is only logged and shown on screen.
// To go live, sign a contract with an SMS provider in Kazakhstan and implement sendProvider().
async function sendProvider(phone, text) {
  // Example shape for an HTTP SMS API:
  // await fetch('https://sms-provider.example/api/send', {
  //   method: 'POST',
  //   headers: { Authorization: 'Bearer ' + process.env.SMS_API_KEY, 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ to: '+' + phone, text }),
  // });
  throw new Error('SMS provider is not configured. Set SMS_MODE=demo or implement lib/sms.js');
}

async function sendCode(phone, code, mode) {
  const text = `Бәрі: кіру коды ${code}`;
  if (mode === 'demo') {
    console.log(`[sms demo] +${phone}: ${text}`);
    return { demoCode: code };
  }
  await sendProvider(phone, text);
  return {};
}

module.exports = { sendCode };
