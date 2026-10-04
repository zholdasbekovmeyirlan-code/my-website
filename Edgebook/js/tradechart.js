/* EntryX — price charts.
   • Trade replay: candles from Binance public market data with entry/exit markers and
     entry/exit/stop/target lines (TradingView Lightweight Charts, self-hosted in js/vendor).
   • Market chart: the official TradingView Advanced Chart widget for any symbol. */
(function () {
  'use strict';

  const LWC_SRC = 'js/vendor/lightweight-charts.js';
  const KLINES = ['https://data-api.binance.vision/api/v3/klines', 'https://api.binance.com/api/v3/klines'];
  const INTERVALS = [['1m', 60], ['3m', 180], ['5m', 300], ['15m', 900], ['30m', 1800], ['1h', 3600], ['2h', 7200], ['4h', 14400], ['1d', 86400]];
  const QUOTES = ['USDT', 'USDC', 'FDUSD', 'BUSD', 'BTC', 'ETH'];

  let lwcPromise = null;
  function loadLWC() {
    if (window.LightweightCharts) return Promise.resolve(window.LightweightCharts);
    if (!lwcPromise) lwcPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = LWC_SRC; s.async = true;
      s.onload = () => resolve(window.LightweightCharts);
      s.onerror = () => { lwcPromise = null; reject(new Error('lwc')); };
      document.head.appendChild(s);
    });
    return lwcPromise;
  }

  /* "BINANCE:btc/usdt.P" → "BTCUSDT"; returns null when it doesn't look like a Binance pair */
  function binanceSymbol(raw) {
    let s = String(raw || '').toUpperCase().replace(/^[A-Z]+:/, '').replace(/\.P$|PERP$|-PERP$|-SWAP$/, '').replace(/[\/\-_ ]/g, '');
    if (/^[A-Z0-9]{2,12}USD$/.test(s) && !/^(EUR|GBP|AUD|NZD|XAU|XAG|USD)/.test(s)) s += 'T';   // BTCUSD → BTCUSDT
    return QUOTES.some(q => s.endsWith(q) && s.length > q.length + 1) ? s : null;
  }
  /* Best-effort TradingView symbol for the widget */
  function tvSymbol(raw, market) {
    const s = String(raw || '').toUpperCase().replace(/\s+/g, '');
    if (!s) return 'BINANCE:BTCUSDT';
    if (s.includes(':')) return s;
    const b = binanceSymbol(s);
    if (b) return 'BINANCE:' + b;
    const plain = s.replace(/[\/\-_]/g, '');
    if (/^(XAU|XAG)(USD|EUR)$/.test(plain)) return 'OANDA:' + plain;
    if (market === 'forex' || /^(EUR|GBP|USD|AUD|NZD|CAD|CHF|JPY){2}$/.test(plain)) return 'FX:' + plain;
    return plain;
  }

  const sec = d => Math.floor(d.getTime() / 1000);
  const tzShift = d => -d.getTimezoneOffset() * 60;   // show candles in the trader's local time

  async function fetchKlines(symbol, interval, startMs, endMs) {
    let lastErr;
    for (const base of KLINES) {
      try {
        const res = await fetch(base + '?symbol=' + symbol + '&interval=' + interval + '&startTime=' + startMs + '&endTime=' + endMs + '&limit=1000');
        if (res.status === 400) throw Object.assign(new Error('symbol'), { fatal: true });
        if (!res.ok) throw new Error('http ' + res.status);
        return await res.json();
      } catch (e) { lastErr = e; if (e.fatal) break; }
    }
    throw lastErr;
  }

  function pickWindow(open, close) {
    const span = Math.max(60, (close - open) / 1000);
    const pad = Math.max(span * 1.5, 3600);
    const from = open.getTime() / 1000 - pad, to = Math.min(Date.now() / 1000, close.getTime() / 1000 + pad * 0.8);
    const iv = INTERVALS.find(([, s]) => (to - from) / s <= 320) || INTERVALS[INTERVALS.length - 1];
    return { from: from * 1000, to: to * 1000, interval: iv[0], step: iv[1] };
  }

  /* Draw a replay chart for one trade into `el`. Resolves to 'ok' | 'nodata' | 'unsupported'. */
  async function replay(el, trade, opts) {
    opts = opts || {};
    const sym = binanceSymbol(trade.symbol);
    const open = trade.openedAt ? new Date(trade.openedAt) : null;
    const close = trade.closedAt ? new Date(trade.closedAt) : open;
    if (!sym || !open || isNaN(open)) return 'unsupported';
    const w = pickWindow(open, close || open);
    const [LWC, raw] = await Promise.all([loadLWC(), fetchKlines(sym, w.interval, Math.floor(w.from), Math.floor(w.to))]);
    if (!Array.isArray(raw) || !raw.length) return 'nodata';
    const shift = tzShift(open);
    const candles = raw.map(k => ({ time: Math.floor(k[0] / 1000) + shift, open: +k[1], high: +k[2], low: +k[3], close: +k[4] }));

    const light = document.documentElement.getAttribute('data-theme') === 'light';
    const text = light ? '#4b4d57' : '#a4a39d', grid = light ? 'rgba(0,0,0,.05)' : 'rgba(255,255,255,.045)';
    el.innerHTML = '';
    const chart = LWC.createChart(el, {
      autoSize: true,
      layout: { background: { type: 'solid', color: 'transparent' }, textColor: text, fontFamily: 'Inter, system-ui, sans-serif' },
      grid: { vertLines: { color: grid }, horzLines: { color: grid } },
      rightPriceScale: { borderVisible: false },
      timeScale: { borderVisible: false, timeVisible: w.step < 86400, secondsVisible: false },
      crosshair: { mode: 0 },
    });
    const series = chart.addCandlestickSeries({
      upColor: '#3ddc97', downColor: '#ff5f6d', wickUpColor: '#3ddc97', wickDownColor: '#ff5f6d', borderVisible: false,
    });
    series.setData(candles);

    const long = trade.side !== 'short';
    const snap = d => { const t = sec(d) + shift; let best = candles[0].time; for (const c of candles) { if (c.time <= t) best = c.time; else break; } return best; };
    const markers = [{ time: snap(open), position: long ? 'belowBar' : 'aboveBar', color: '#a855f7', shape: long ? 'arrowUp' : 'arrowDown', text: (opts.labels && opts.labels.entry) || 'Entry' }];
    if (trade.closedAt && trade.exit !== '' && trade.exit != null) {
      const win = (trade.net || 0) >= 0;
      markers.push({ time: snap(close), position: long ? 'aboveBar' : 'belowBar', color: win ? '#3ddc97' : '#ff5f6d', shape: long ? 'arrowDown' : 'arrowUp', text: (opts.labels && opts.labels.exit) || 'Exit' });
    }
    series.setMarkers(markers.sort((a, b) => a.time - b.time));
    const line = (price, color, title, style) => { const p = Number(price); if (price !== '' && price != null && isFinite(p)) series.createPriceLine({ price: p, color, lineWidth: 1, lineStyle: style, axisLabelVisible: true, title }); };
    const L = opts.labels || {};
    line(trade.entry, '#a855f7', L.entry || 'Entry', 0);
    line(trade.exit, (trade.net || 0) >= 0 ? '#3ddc97' : '#ff5f6d', L.exit || 'Exit', 0);
    line(trade.stop, '#ff5f6d', L.stop || 'SL', 2);
    line(trade.target, '#3ddc97', L.target || 'TP', 2);
    chart.timeScale().fitContent();
    el._chart = chart;
    return 'ok';
  }

  /* Official TradingView widget (live market, all tools). */
  function widget(el, symbol, opts) {
    opts = opts || {};
    el.innerHTML = '';
    const box = document.createElement('div');
    box.className = 'tradingview-widget-container';
    box.style.height = '100%'; box.style.width = '100%';
    const inner = document.createElement('div');
    inner.className = 'tradingview-widget-container__widget';
    inner.style.height = '100%'; inner.style.width = '100%';
    box.appendChild(inner);
    const s = document.createElement('script');
    s.type = 'text/javascript'; s.async = true;
    s.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    s.text = JSON.stringify({
      autosize: true, symbol: tvSymbol(symbol, opts.market), interval: opts.interval || '60', timezone: 'Etc/UTC',
      theme: document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark', style: '1',
      locale: opts.lang === 'en' ? 'en' : 'ru', backgroundColor: 'rgba(0,0,0,0)', gridColor: 'rgba(255,255,255,0.04)',
      allow_symbol_change: opts.allowChange !== false, hide_side_toolbar: !!opts.compact, withdateranges: !opts.compact,
      save_image: true, calendar: false, support_host: 'https://www.tradingview.com',
    });
    box.appendChild(s);
    el.appendChild(box);
  }

  window.TradeChart = { replay, widget, binanceSymbol, tvSymbol, pickWindow };
})();
