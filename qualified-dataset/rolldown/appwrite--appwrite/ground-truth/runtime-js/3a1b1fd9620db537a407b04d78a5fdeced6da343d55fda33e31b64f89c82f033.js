(function(){
  try {
    var t = localStorage.getItem('theme') || 'system';
    if (t === 'classic') { localStorage.setItem('theme', 'dark'); t = 'dark'; }
    var r = t === 'system' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : t;
    var e = document.documentElement;
    ['light','dark','system','crazy','stealth','classic','premium','high-contrast','barbie','nineties','legacy'].forEach(function(c){e.classList.remove(c);});
    e.classList.add(r);
    try {
      var langPref = localStorage.getItem('debug:language');
      var resolvedLang = 'en';
      var dir = 'ltr';
      if (langPref === 'he') {
        resolvedLang = 'he';
        dir = 'rtl';
      } else if (langPref === 'ja') {
        resolvedLang = 'ja';
      } else {
        var pd = localStorage.getItem('debug:pageDirection');
        if (pd === 'rtl') dir = 'rtl';
      }
      e.setAttribute('lang', resolvedLang);
      e.setAttribute('dir', dir);
    } catch (e3) {}
  } catch (e) {}
})();document.currentScript.remove()