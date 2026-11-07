
      try {
        const preference = JSON.parse(localStorage.getItem('immich-ui-theme'));
        const prefersDark = globalThis.matchMedia('(prefers-color-scheme: dark)').matches;
        if (preference === 'light' || (preference !== 'dark' && !prefersDark)) {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
        }
      } catch {
        // noop
      }
    