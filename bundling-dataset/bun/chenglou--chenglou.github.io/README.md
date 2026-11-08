# chenglou/chenglou.github.io

Commit `4f0d972320af1b0a112d9af33616d3bc915a482a`. Build tool: Bun. Engine: Bun.

The upstream build script omits source maps; the recipe adds `--sourcemap=linked`.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/chenglou/chenglou.github.io/tar.gz/4f0d972320af1b0a112d9af33616d3bc915a482a -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/chenglou--chenglou.github.io:4f0d972320af source
docker run --rm -p 127.0.0.1:8080:80 recall70/chenglou--chenglou.github.io:4f0d972320af
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
