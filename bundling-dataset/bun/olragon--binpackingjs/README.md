# olragon/binpackingjs

Commit `15c28a39e2b778bad70539b71835d352d08507e7`. Build tool: Bun. Engine: Bun.

The library build has no page; the playground under `playground/` is the browser target. Its build script omits source maps, so the recipe adds `--sourcemap=linked`.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/olragon/binpackingjs/tar.gz/15c28a39e2b778bad70539b71835d352d08507e7 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/olragon--binpackingjs:15c28a39e2b7 source
docker run --rm -p 127.0.0.1:8080:80 recall70/olragon--binpackingjs:15c28a39e2b7
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Independent Chrome evidence is recorded below.

[Verification record](result.json)

## Independent verification — 2026-11-08

Build status: **built**. Opened in Chrome; landing-route evidence saved. [Captured JS/maps and function records](ground-truth/func-mapping.json). [Build and browser evidence](../../../verification/student-builds-2026-11-08/bun/olragon--binpackingjs/verification.json). Full application workflows were not tested.
