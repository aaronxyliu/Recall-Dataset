
    // ----- FONT LOADING UTILITIES -----
    const DEFAULT_FONT_WEIGHTS = ["400"];

    function extractFontFamily(fontFamilyValue) {
      if (!fontFamilyValue) return null;
      const firstFont = fontFamilyValue.split(",")[0].trim();
      const cleanFont = firstFont.replace(/['"]/g, "");
      const systemFonts = [
        "ui-sans-serif", "ui-serif", "ui-monospace", "system-ui",
        "sans-serif", "serif", "monospace", "cursive", "fantasy"
      ];
      if (systemFonts.includes(cleanFont.toLowerCase())) {
        return null;
      }
      return cleanFont;
    }

    function buildFontCssUrl(family, weights) {
      weights = weights || DEFAULT_FONT_WEIGHTS;
      const encodedFamily = encodeURIComponent(family);
      const weightsParam = weights.join(";"); 
      return `https://fonts.googleapis.com/css2?family=${encodedFamily}:wght@${weightsParam}&display=swap`;
    }

    function loadGoogleFont(family, weights) {
      weights = weights || DEFAULT_FONT_WEIGHTS;
      const href = buildFontCssUrl(family, weights);
      const existing = document.querySelector(`link[href="${href}"]`);
      if (existing) return;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }

    // ----- THEME INITIALIZATION -----
    (function() {
      const storageKey = "editor-storage";
      const root = document.documentElement;
      const defaultLightStyles = {"background":"oklch(1 0 0)","foreground":"oklch(0.145 0 0)","card":"oklch(1 0 0)","card-foreground":"oklch(0.145 0 0)","popover":"oklch(1 0 0)","popover-foreground":"oklch(0.145 0 0)","primary":"oklch(0.205 0 0)","primary-foreground":"oklch(0.985 0 0)","secondary":"oklch(0.97 0 0)","secondary-foreground":"oklch(0.205 0 0)","muted":"oklch(0.97 0 0)","muted-foreground":"oklch(0.556 0 0)","accent":"oklch(0.97 0 0)","accent-foreground":"oklch(0.205 0 0)","destructive":"oklch(0.577 0.245 27.325)","destructive-foreground":"oklch(1 0 0)","border":"oklch(0.922 0 0)","input":"oklch(0.922 0 0)","ring":"oklch(0.708 0 0)","chart-1":"oklch(0.81 0.10 252)","chart-2":"oklch(0.62 0.19 260)","chart-3":"oklch(0.55 0.22 263)","chart-4":"oklch(0.49 0.22 264)","chart-5":"oklch(0.42 0.18 266)","radius":"0.625rem","sidebar":"oklch(0.985 0 0)","sidebar-foreground":"oklch(0.145 0 0)","sidebar-primary":"oklch(0.205 0 0)","sidebar-primary-foreground":"oklch(0.985 0 0)","sidebar-accent":"oklch(0.97 0 0)","sidebar-accent-foreground":"oklch(0.205 0 0)","sidebar-border":"oklch(0.922 0 0)","sidebar-ring":"oklch(0.708 0 0)","font-sans":"ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'","font-serif":"ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif","font-mono":"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace","shadow-color":"oklch(0 0 0)","shadow-opacity":"0.1","shadow-blur":"3px","shadow-spread":"0px","shadow-offset-x":"0","shadow-offset-y":"1px","letter-spacing":"0em","spacing":"0.25rem"};
      const defaultDarkStyles = {"background":"oklch(0.145 0 0)","foreground":"oklch(0.985 0 0)","card":"oklch(0.205 0 0)","card-foreground":"oklch(0.985 0 0)","popover":"oklch(0.269 0 0)","popover-foreground":"oklch(0.985 0 0)","primary":"oklch(0.922 0 0)","primary-foreground":"oklch(0.205 0 0)","secondary":"oklch(0.269 0 0)","secondary-foreground":"oklch(0.985 0 0)","muted":"oklch(0.269 0 0)","muted-foreground":"oklch(0.708 0 0)","accent":"oklch(0.371 0 0)","accent-foreground":"oklch(0.985 0 0)","destructive":"oklch(0.704 0.191 22.216)","destructive-foreground":"oklch(0.985 0 0)","border":"oklch(0.275 0 0)","input":"oklch(0.325 0 0)","ring":"oklch(0.556 0 0)","chart-1":"oklch(0.81 0.10 252)","chart-2":"oklch(0.62 0.19 260)","chart-3":"oklch(0.55 0.22 263)","chart-4":"oklch(0.49 0.22 264)","chart-5":"oklch(0.42 0.18 266)","radius":"0.625rem","sidebar":"oklch(0.205 0 0)","sidebar-foreground":"oklch(0.985 0 0)","sidebar-primary":"oklch(0.488 0.243 264.376)","sidebar-primary-foreground":"oklch(0.985 0 0)","sidebar-accent":"oklch(0.269 0 0)","sidebar-accent-foreground":"oklch(0.985 0 0)","sidebar-border":"oklch(0.275 0 0)","sidebar-ring":"oklch(0.439 0 0)","font-sans":"ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'","font-serif":"ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif","font-mono":"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace","shadow-color":"oklch(0 0 0)","shadow-opacity":"0.1","shadow-blur":"3px","shadow-spread":"0px","shadow-offset-x":"0","shadow-offset-y":"1px","letter-spacing":"0em","spacing":"0.25rem"};

      let themeState = null;
      try {
        const persistedStateJSON = localStorage.getItem(storageKey);
        if (persistedStateJSON) {
          themeState = JSON.parse(persistedStateJSON)?.state?.themeState;
        }
      } catch (e) {
        console.warn("Theme initialization: Failed to read/parse localStorage:", e);
      }

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const mode = themeState?.currentMode ?? (prefersDark ? "dark" : "light");

      const activeStyles =
        mode === "dark"
          ? themeState?.styles?.dark || defaultDarkStyles
          : themeState?.styles?.light || defaultLightStyles;

      const stylesToApply = Object.keys(defaultLightStyles);

      // Apply Theme Styles properties
      for (const styleName of stylesToApply) {
        const value = activeStyles[styleName];
        if (value !== undefined) {
          root.style.setProperty(`--${styleName}`, value);
        }
      }

      // Load Google fonts *immediately*
      try {
        if (activeStyles) {
          const currentFonts = {
            sans: activeStyles["font-sans"],
            serif: activeStyles["font-serif"],
            mono: activeStyles["font-mono"],
          };

          Object.entries(currentFonts).forEach(([_type, fontValue]) => {
            const fontFamily = extractFontFamily(fontValue);
            if (fontFamily) {
              loadGoogleFont(fontFamily, DEFAULT_FONT_WEIGHTS);
            }
          });
        }
      } catch (e) {
        console.warn("Theme Script initialization: Failed to load Google fonts:", e);
      }
    })();
  