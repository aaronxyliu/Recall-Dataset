# RockwellShah/filekey

Commit `4f148f6f55e61d8bbeed7a812f31756cdbae12af`. Build tool: Bun. Engine: Bun.

The upstream build script omits source maps; the recipe adds `--sourcemap=linked`. The page root also contains the generated blog and recovery pages, so the whole `web/` directory is served.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/RockwellShah/filekey/tar.gz/4f148f6f55e61d8bbeed7a812f31756cdbae12af -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/RockwellShah--filekey:4f148f6f55e6 source
docker run --rm -p 127.0.0.1:8080:80 recall70/RockwellShah--filekey:4f148f6f55e6
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
