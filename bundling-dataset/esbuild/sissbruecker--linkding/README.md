# sissbruecker/linkding

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `27b7303baf41bb28babc610ac8eaa486e1ddfab5`. Tool: esbuild. Engine: esbuild.

The default Dockerfile compiles the esbuild assets and starts the Django application with the default SQLite backend. [Pinned source](https://github.com/sissbruecker/linkding/blob/27b7303baf41bb28babc610ac8eaa486e1ddfab5/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/sissbruecker--linkding:27b7303baf41 -f bundling-dataset/esbuild/sissbruecker--linkding/Dockerfile builds/esbuild/sissbruecker--linkding
docker run --rm -p 127.0.0.1:8080:9090 recall-web/sissbruecker--linkding:27b7303baf41
```

Local URL: http://127.0.0.1:8080/login/

Observed result: page-opened.

[Verification record](result.json)
