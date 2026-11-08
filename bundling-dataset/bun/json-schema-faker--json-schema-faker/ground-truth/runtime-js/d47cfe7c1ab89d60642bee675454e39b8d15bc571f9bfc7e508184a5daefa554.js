
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js');
          }

          const formatCompact = (value) =>
            new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);

          async function hydrateProjectStats() {
            const starsEls = document.querySelectorAll("[data-stat='githubStarsStat']");
            const downloadsEls = document.querySelectorAll("[data-stat='npmDownloadsStat']");
            if (!starsEls.length || !downloadsEls.length) return;

            try {
              const [githubRes, npmRes] = await Promise.all([
                fetch("https://api.github.com/repos/json-schema-faker/json-schema-faker"),
                fetch("https://api.npmjs.org/downloads/point/last-month/json-schema-faker"),
              ]);

              if (githubRes.ok) {
                const github = await githubRes.json();
                const stars = Number(github?.stargazers_count ?? 0);
                if (Number.isFinite(stars) && stars >= 0) {
                  starsEls.forEach(el => { el.textContent = formatCompact(stars); });
                }
              }

              if (npmRes.ok) {
                const npm = await npmRes.json();
                const downloads = Number(npm?.downloads ?? 0);
                if (Number.isFinite(downloads) && downloads >= 0) {
                  downloadsEls.forEach(el => { el.textContent = formatCompact(downloads); });
                }
              }
            } catch {
              // Leave placeholders when network requests fail.
            }
          }

          hydrateProjectStats();
        