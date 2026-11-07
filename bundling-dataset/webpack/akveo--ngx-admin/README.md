# akveo/ngx-admin

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `dc6a442704bfef34b776b5eb15faf852d9e2f75c`. Tool: webpack. Engine: webpack.

The demo deployment publishes dist; the selected revision exposes build:prod for the Angular production target. [Pinned source](https://github.com/akveo/ngx-admin/blob/dc6a442704bfef34b776b5eb15faf852d9e2f75c/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/akveo--ngx-admin:dc6a442704bf -f bundling-dataset/webpack/akveo--ngx-admin/Dockerfile builds/webpack/akveo--ngx-admin
docker run --rm -p 127.0.0.1:8080:80 recall-web/akveo--ngx-admin:dc6a442704bf
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened. The upstream README requires Node 14.14 or later for its node-sass dependency. The verified recipe uses Node 14.21.3 and Chrome rendered the dashboard.

[Verification record](result.json)
