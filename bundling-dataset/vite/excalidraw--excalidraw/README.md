# excalidraw/excalidraw

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `701b901a0f1ba3d0b390d9cdf63d112e25abac4b`. Tool: Vite. Engine: Rollup.

The upstream Dockerfile runs build:app:docker from the Yarn monorepo and stages excalidraw-app/build into Nginx. [Pinned source](https://github.com/excalidraw/excalidraw/blob/701b901a0f1ba3d0b390d9cdf63d112e25abac4b/excalidraw-app/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/excalidraw--excalidraw:701b901a0f1b -f bundling-dataset/vite/excalidraw--excalidraw/Dockerfile builds/vite/excalidraw--excalidraw
docker run --rm -p 127.0.0.1:8080:80 recall-web/excalidraw--excalidraw:701b901a0f1b
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
