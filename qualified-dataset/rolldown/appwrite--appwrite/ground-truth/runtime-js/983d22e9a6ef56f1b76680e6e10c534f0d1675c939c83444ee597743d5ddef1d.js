(function(){
  try {
    var cfg = window.__APP_CONFIG__ || {};
    var flag = String(cfg.preLaunch || '').toLowerCase().trim();
    var enabled = flag === 'true' || flag === '1' || flag === 'enabled';
    if (!enabled) return;
    var path = (location.pathname || '/').replace(/\/+$/, '') || '/';
    if (path === '/init' || path.indexOf('/init/') === 0) return;
    if (path === '/discord') return;
    if (path === '/og/init.png') return;
    if (path === '/debug' || path.indexOf('/debug/') === 0) return;
    // Keep legal pages crawlable for OAuth/app-store reviewers; mirrors LEGAL_ALLOWED_PATHS.
    if (path === '/privacy' || path === '/terms' || path === '/cookies') return;
    var auth = {
      '/sign-in': 1, '/sign-up': 1, '/sign-out': 1, '/recovery': 1, '/reset': 1,
      '/mfa': 1, '/verify-email': 1, '/auth/magic-url': 1,
      '/auth/oauth2/success': 1, '/auth/oauth2/failure': 1
    };
    if (auth[path]) return;
    location.replace('/init');
  } catch (e) {}
})();document.currentScript.remove()