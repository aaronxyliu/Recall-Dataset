# okikio/bundlejs

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `96033c66d7361f79e25bb9b511f4286805fcb9fb`. Tool: esbuild. Engine: esbuild.

The README describes a Gulp pipeline with esbuild. Use Node 25 from .nvmrc, the pinned pnpm manager, and the dist path recorded in vercel.json. [Pinned source](https://github.com/okikio/bundlejs/blob/96033c66d7361f79e25bb9b511f4286805fcb9fb/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/okikio--bundlejs:96033c66d736 -f bundling-dataset/esbuild/okikio--bundlejs/Dockerfile builds/esbuild/okikio--bundlejs
docker run --rm -p 127.0.0.1:8080:80 recall-web/okikio--bundlejs:96033c66d736
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
