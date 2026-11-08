// need to load this script dynamically bcs. of iframe embed tracking
      var scriptEle = document.createElement("script");
      scriptEle.setAttribute(
        "src",
        "https://scripts.simpleanalyticscdn.com/latest.js",
      );
      scriptEle.setAttribute("type", "text/javascript");
      scriptEle.setAttribute("defer", true);
      scriptEle.setAttribute("async", true);
      // if iframe
      if (window.self !== window.top) {
        scriptEle.setAttribute("data-auto-collect", true);
      }

      document.body.appendChild(scriptEle);

      // if iframe
      if (window.self !== window.top) {
        scriptEle.addEventListener("load", () => {
          if (window.sa_pageview) {
            window.window.sa_event(action, {
              category: "iframe",
              label: "embed",
              value: window.location.pathname,
            });
          }
        });
      }