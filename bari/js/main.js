/* Бәрі — start the client app. */
(async function () {
  const B = window.Bari;
  B.tabs = [['home', 'home', 'nav.home'], ['orders', 'receipt', 'nav.orders'], ['together', 'heart', 'nav.together'], ['profile', 'user', 'nav.profile']];
  B.applyTheme();
  B.applyLang();
  await B.loadConfig();
  B.start('home');
  // Signing in loads the user's orders (see orders.js), then the screen refreshes.
  B.loadSession();
})();
