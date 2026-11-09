
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-1GF5NXTV27', {
        // Keeps the session intact when users cross over to the Pro app.
        linker: { domains: ['reactbits.dev', 'pro.reactbits.dev'] }
      });
    