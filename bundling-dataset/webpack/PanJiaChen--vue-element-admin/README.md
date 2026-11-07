# PanJiaChen/vue-element-admin

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `6858a9ad67483025f6a9432a926beb9327037be3`. Tool: webpack. Engine: webpack.

README.md documents npm install followed by build:prod. vue.config.js emits dist with a root base. [Pinned source](https://github.com/PanJiaChen/vue-element-admin/blob/6858a9ad67483025f6a9432a926beb9327037be3/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/panjiachen--vue-element-admin:6858a9ad6748 -f bundling-dataset/webpack/PanJiaChen--vue-element-admin/Dockerfile builds/webpack/PanJiaChen--vue-element-admin
docker run --rm -p 127.0.0.1:8080:80 recall-web/panjiachen--vue-element-admin:6858a9ad6748
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
