# primefaces/primeng

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `fe82b291d6fedde177dc12c0af7ef1008dc1b1ff`. Tool: esbuild. Engine: esbuild.

Generate the Angular component library, theme and docs before building the showcase frontend. [Pinned source](https://github.com/primefaces/primeng/blob/fe82b291d6fedde177dc12c0af7ef1008dc1b1ff/apps/showcase/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/primefaces--primeng:fe82b291d6fe -f bundling-dataset/esbuild/primefaces--primeng/Dockerfile builds/esbuild/primefaces--primeng
docker run --rm -p 127.0.0.1:8080:80 recall-web/primefaces--primeng:fe82b291d6fe
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
