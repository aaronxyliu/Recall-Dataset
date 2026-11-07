# swimlane/ngx-charts

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `9625b8efea06a6edd1d6c7184241ded9442cf570`. Tool: esbuild. Engine: esbuild.

The predeploy script builds the library first and sets the demo URL prefix to ngx-charts. [Pinned source](https://github.com/swimlane/ngx-charts/blob/9625b8efea06a6edd1d6c7184241ded9442cf570/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/swimlane--ngx-charts:9625b8efea06 -f bundling-dataset/esbuild/swimlane--ngx-charts/Dockerfile builds/esbuild/swimlane--ngx-charts
docker run --rm -p 127.0.0.1:8080:80 recall-web/swimlane--ngx-charts:9625b8efea06
```

Local URL: http://127.0.0.1:8080/ngx-charts/

Observed result: page-opened.

[Verification record](result.json)
