// Redirect Excalidraw+ users which have auto-redirect enabled.
      //
      // Redirect only the bare root path, so link/room/library urls are not
      // redirected.
      //
      // Putting into index.html for best performance (can't redirect on server
      // due to location.hash checks).
      if (
        window.location.pathname === "/" &&
        !window.location.hash &&
        !window.location.search &&
        // if its present redirect
        document.cookie.includes("excplus-autoredirect=true")
      ) {
        window.location.href = "https://app.excalidraw.com";
      }