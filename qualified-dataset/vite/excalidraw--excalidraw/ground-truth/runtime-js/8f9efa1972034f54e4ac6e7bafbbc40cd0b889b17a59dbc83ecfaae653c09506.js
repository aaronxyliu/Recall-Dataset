// point into our CDN in prod, fallback to root (excalidraw.com) domain in case of issues
        window.EXCALIDRAW_ASSET_PATH = [
          "https://excalidraw.nyc3.cdn.digitaloceanspaces.com/oss/",
          "/",
        ];