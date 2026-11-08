# tednaleid/grimdawn-devotions

Commit `bd749c4e1f05c7f6d03a82798b685063e35c956a`. Build tool: Bun. Engine: Bun.

The upstream build omits source maps; the recipe adds `--sourcemap=linked` and copies the HTML entry into `dist/`.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/tednaleid/grimdawn-devotions/tar.gz/bd749c4e1f05c7f6d03a82798b685063e35c956a -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/tednaleid--grimdawn-devotions:bd749c4e1f05 source
docker run --rm -p 127.0.0.1:8080:80 recall70/tednaleid--grimdawn-devotions:bd749c4e1f05
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
