try {
        function setTheme(theme) {
          if (theme === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }

        function getTheme() {
          const theme = window.localStorage.getItem("excalidraw-theme");

          if (theme && theme === "system") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light";
          } else {
            return theme || "light";
          }
        }

        setTheme(getTheme());
      } catch (e) {
        console.error("Error setting dark mode", e);
      }