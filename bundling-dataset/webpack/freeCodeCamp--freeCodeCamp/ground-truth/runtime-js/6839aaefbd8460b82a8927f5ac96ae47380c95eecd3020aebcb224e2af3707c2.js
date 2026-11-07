
(function(){
  let theme = 'light';
  const localTheme = localStorage.getItem('theme');

  if (localTheme !== null) {
    theme = localTheme === 'dark' ? 'dark' : 'light';
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    theme = 'dark';
  }

  const bodyEl = document && document.body;

  if (bodyEl && bodyEl.classList) {
    bodyEl.classList.remove('light-palette');
    bodyEl.classList.remove('dark-palette');
    bodyEl.classList.add(theme + '-palette');
  }
})();