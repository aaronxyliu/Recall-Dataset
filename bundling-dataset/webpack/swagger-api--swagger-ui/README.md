# swagger-api/swagger-ui

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `d3296954a6b813898d298815ac3e68daa1cf7408`. Tool: webpack. Engine: webpack.

The upstream runtime Dockerfile copies dist. Recompile the JS and CSS first using the root build and the Node major selected by .nvmrc. [Pinned source](https://github.com/swagger-api/swagger-ui/blob/d3296954a6b813898d298815ac3e68daa1cf7408/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/swagger-api--swagger-ui:d3296954a6b8 -f bundling-dataset/webpack/swagger-api--swagger-ui/Dockerfile builds/webpack/swagger-api--swagger-ui
docker run --rm -p 127.0.0.1:8080:80 recall-web/swagger-api--swagger-ui:d3296954a6b8
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
