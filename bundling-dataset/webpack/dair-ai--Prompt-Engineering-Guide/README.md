# dair-ai/Prompt-Engineering-Guide

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `57673726396dd94acb23bdb1e67f27c78ee85a8e`. Tool: webpack. Engine: webpack.

The root Nextra package uses Next 13. Compile the documentation using its build script and serve it using its start script. [Pinned source](https://github.com/dair-ai/Prompt-Engineering-Guide/blob/57673726396dd94acb23bdb1e67f27c78ee85a8e/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/dair-ai--prompt-engineering-guide:57673726396d -f bundling-dataset/webpack/dair-ai--Prompt-Engineering-Guide/Dockerfile builds/webpack/dair-ai--Prompt-Engineering-Guide
docker run --rm -p 127.0.0.1:8080:3000 recall-web/dair-ai--prompt-engineering-guide:57673726396d
```

Local URL: http://127.0.0.1:8080/

Chrome rendered the guide homepage with the final image. The local Next server disables automatic locale selection to prevent a redirect loop when the browser sends a Chinese language preference.

[Verification record](result.json)
