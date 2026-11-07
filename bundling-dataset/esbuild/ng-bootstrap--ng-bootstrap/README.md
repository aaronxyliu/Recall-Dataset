# ng-bootstrap/ng-bootstrap

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `2a45c97082c66c955ac9c4865cf66d8d4dfd27fc`. Tool: esbuild. Engine: esbuild.

Use the package build which generates the Angular library before producing the documentation and StackBlitz examples for the demo. [Pinned source](https://github.com/ng-bootstrap/ng-bootstrap/blob/2a45c97082c66c955ac9c4865cf66d8d4dfd27fc/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/ng-bootstrap--ng-bootstrap:2a45c97082c6 -f bundling-dataset/esbuild/ng-bootstrap--ng-bootstrap/Dockerfile builds/esbuild/ng-bootstrap--ng-bootstrap
docker run --rm -p 127.0.0.1:8080:80 recall-web/ng-bootstrap--ng-bootstrap:2a45c97082c6
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
