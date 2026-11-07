# bailicangdu/vue2-elm

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `b85ff0220366be863868269177a4abf74c7a85ca`. Tool: webpack. Engine: webpack.

README.md recommends Yarn, and config/index.js sets both output and URL prefix to elm. Use Node 10 for the historical node-sass dependency. [Pinned source](https://github.com/bailicangdu/vue2-elm/blob/b85ff0220366be863868269177a4abf74c7a85ca/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/bailicangdu--vue2-elm:b85ff0220366 -f bundling-dataset/webpack/bailicangdu--vue2-elm/Dockerfile builds/webpack/bailicangdu--vue2-elm
docker run --rm -p 127.0.0.1:8080:80 recall-web/bailicangdu--vue2-elm:b85ff0220366
```

Local URL: http://127.0.0.1:8080/elm/

Observed result: page-opened. The pinned Yarn lockfile fails frozen installation. The successful build used a non-frozen install inside Docker. Chrome rendered the city selection page at /elm/.

[Verification record](result.json)
