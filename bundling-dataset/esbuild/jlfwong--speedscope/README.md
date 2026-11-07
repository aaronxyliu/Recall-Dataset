# jlfwong/speedscope

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `fe804e6281cf847713448c2c3e0faec3e1f62b2d`. Tool: esbuild. Engine: esbuild.

scripts/deploy.sh builds an HTTP release with prepack.sh before pushing GitHub Pages. Run only the local build step. [Pinned source](https://github.com/jlfwong/speedscope/blob/fe804e6281cf847713448c2c3e0faec3e1f62b2d/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/jlfwong--speedscope:fe804e6281cf -f bundling-dataset/esbuild/jlfwong--speedscope/Dockerfile builds/esbuild/jlfwong--speedscope
docker run --rm -p 127.0.0.1:8080:80 recall-web/jlfwong--speedscope:fe804e6281cf
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
