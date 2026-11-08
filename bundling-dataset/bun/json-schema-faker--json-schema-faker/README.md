# json-schema-faker/json-schema-faker

Commit `1f407f32e572a3403da7329f9567fa52cf455e24`. Build tool: Bun. Engine: Bun.

The package build targets Node; the playground page needs a separate browser bundle, which the recipe emits into `public/` with a source map.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/json-schema-faker/json-schema-faker/tar.gz/1f407f32e572a3403da7329f9567fa52cf455e24 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/json-schema-faker--json-schema-faker:1f407f32e572 source
docker run --rm -p 127.0.0.1:8080:80 recall70/json-schema-faker--json-schema-faker:1f407f32e572
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Independent Chrome evidence is recorded below.

[Verification record](result.json)

## Independent verification — 2026-11-08

Build status: **built**. Opened in Chrome; landing-route evidence saved. [Captured JS/maps and function records](ground-truth/func-mapping.json). [Build and browser evidence](../../../verification/student-builds-2026-11-08/bun/json-schema-faker--json-schema-faker/verification.json). Full application workflows were not tested.
