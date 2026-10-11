'use strict';
// Server-Sent Events: each signed-in screen keeps one open stream and gets pushes.
const { SECURITY_HEADERS } = require('./http');

const streams = new Map(); // userId -> Set<res>

function attach(req, res, userId) {
  res.writeHead(200, {
    ...SECURITY_HEADERS,
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-store',
    Connection: 'keep-alive',
    'X-Accel-Buffering': 'no',
  });
  res.write('retry: 3000\n\n');
  let set = streams.get(userId);
  if (!set) streams.set(userId, (set = new Set()));
  set.add(res);
  req.on('close', () => {
    set.delete(res);
    if (!set.size) streams.delete(userId);
  });
}

function send(userId, type, data) {
  const set = streams.get(userId);
  if (!set) return;
  const msg = `event: ${type}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const res of set) res.write(msg);
}

const isConnected = (userId) => streams.has(userId);

const timer = setInterval(() => {
  for (const set of streams.values()) for (const res of set) res.write(': ping\n\n');
}, 25000);
timer.unref();

function closeAll() {
  for (const set of streams.values()) for (const res of set) res.end();
  streams.clear();
}

module.exports = { attach, send, isConnected, closeAll };
