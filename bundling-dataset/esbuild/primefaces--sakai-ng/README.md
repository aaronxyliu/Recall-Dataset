# primefaces/sakai-ng

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `96d71496d685b5c110efd2875abaa2bf89a56ad2`. Tool: esbuild. Engine: esbuild.

The README selects ng build; the Angular application build emits browser assets into dist/sakai-ng/browser. [Pinned source](https://github.com/primefaces/sakai-ng/blob/96d71496d685b5c110efd2875abaa2bf89a56ad2/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
git -C builds/esbuild/primefaces--sakai-ng submodule update --init --depth 1 -- src/assets
docker build -t recall-web/primefaces--sakai-ng:96d71496d685 -f bundling-dataset/esbuild/primefaces--sakai-ng/Dockerfile builds/esbuild/primefaces--sakai-ng
docker run --rm -p 127.0.0.1:8080:80 recall-web/primefaces--sakai-ng:96d71496d685
```

Local URL: http://127.0.0.1:8080/

Chrome rendered the dashboard. The stylesheet submodule at src/assets is required; the selected revision pins it to eaa70ece4cfa9aeb8f60b36dce5a422b6bae8003.

[Verification record](result.json)
