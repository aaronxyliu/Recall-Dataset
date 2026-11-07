# drawdb-io/drawdb

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `a249c7fb730c2de9b5c2ce6e863f2ea7344ac372`. Tool: Vite. Engine: Rolldown.

The upstream Dockerfile uses npm ci and Vite. The existing verified recipe includes the scoped local analytics fallback. [Pinned source](https://github.com/drawdb-io/drawdb/blob/a249c7fb730c2de9b5c2ce6e863f2ea7344ac372/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/drawdb-io--drawdb:a249c7fb730c -f bundling-dataset/vite/drawdb-io--drawdb/Dockerfile builds/vite/drawdb-io--drawdb
docker run --rm -p 127.0.0.1:8080:80 recall-web/drawdb-io--drawdb:a249c7fb730c
```

Local URL: http://127.0.0.1:8080/editor

Observed result: page-opened.

[Verification record](result.json)
