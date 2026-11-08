
    // The hashed entry script (below) can 404 when a cached index.html outlives the deploy that replaced
    // its hash (GitHub Pages caps caching at 600s and keeps no old builds). A reload revalidates index.html
    // and picks up the new hash; sessionStorage guards against an infinite reload loop on a real failure.
    function bootFailed() {
      try {
        if (!sessionStorage.getItem("bootReloaded")) {
          sessionStorage.setItem("bootReloaded", "1");
          location.reload();
          return;
        }
      } catch (e) {}
      var el = document.getElementById("boot-loading");
      if (el)
        el.innerHTML =
          '<p>Couldn\'t load the planner.</p><button type="button" onclick="location.reload()">Reload</button>';
    }
  