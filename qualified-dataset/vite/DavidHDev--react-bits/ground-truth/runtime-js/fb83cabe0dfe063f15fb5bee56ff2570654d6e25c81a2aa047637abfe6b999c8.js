
      (() => {
        const root = document.documentElement;
        let theme = 'dark';
        try {
          if (localStorage.getItem('react-bits-theme') === 'light') theme = 'light';
        } catch {}
        root.setAttribute('data-theme', theme);
        root.setAttribute('data-rb-boot', '');

        const finish = () => {
          clearTimeout(deadline);
          root.removeAttribute('data-rb-boot');
          document.getElementById('rb-boot-loader')?.remove();
          window.removeEventListener('pageshow', onPageShow);
          delete window.__RB_FINISH_BOOT__;
        };
        const onPageShow = event => {
          if (event.persisted) finish();
        };
        const deadline = setTimeout(finish, 10000);
        window.__RB_FINISH_BOOT__ = finish;
        window.addEventListener('pageshow', onPageShow);
      })();
    