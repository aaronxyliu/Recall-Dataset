# swimlane/ngx-datatable

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `2d4f8f2b383d875d3e3dec45969f0e42a117fb3f`. Tool: esbuild. Engine: esbuild.

Use the build-docs target and retain its fixed base URL. angular.json puts browser output directly in dist/ngx-datatable. [Pinned source](https://github.com/swimlane/ngx-datatable/blob/2d4f8f2b383d875d3e3dec45969f0e42a117fb3f/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/swimlane--ngx-datatable:2d4f8f2b383d -f bundling-dataset/esbuild/swimlane--ngx-datatable/Dockerfile builds/esbuild/swimlane--ngx-datatable
docker run --rm -p 127.0.0.1:8080:80 recall-web/swimlane--ngx-datatable:2d4f8f2b383d
```

Local URL: http://127.0.0.1:8080/ngx-datatable/

Observed result: page-opened.

[Verification record](result.json)
