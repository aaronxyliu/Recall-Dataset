# mikehadlow/gtr-cof

Commit `7fa1f50f9a849bc251c6cbc9637fc4bbb0cf2b89`. Build tool: Bun. Engine: Bun.

The upstream script runs a type check that requires a newer Node API than the container provides, so the recipe builds the JS and CSS assets directly. The page HTML lives in `docs/`.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/mikehadlow/gtr-cof/tar.gz/7fa1f50f9a849bc251c6cbc9637fc4bbb0cf2b89 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/mikehadlow--gtr-cof:7fa1f50f9a84 source
docker run --rm -p 127.0.0.1:8080:80 recall70/mikehadlow--gtr-cof:7fa1f50f9a84
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
