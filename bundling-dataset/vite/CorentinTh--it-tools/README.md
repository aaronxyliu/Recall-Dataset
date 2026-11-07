# CorentinTh/it-tools

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `d505845f918e946ec300af7b36efc107e2f66e9e`. Tool: Vite. Engine: Rollup.

The README documents pnpm build and the upstream Dockerfile serves the resulting dist directory. [Pinned source](https://github.com/CorentinTh/it-tools/blob/d505845f918e946ec300af7b36efc107e2f66e9e/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/corentinth--it-tools:d505845f918e -f bundling-dataset/vite/CorentinTh--it-tools/Dockerfile builds/vite/CorentinTh--it-tools
docker run --rm -p 127.0.0.1:8080:80 recall-web/corentinth--it-tools:d505845f918e
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
