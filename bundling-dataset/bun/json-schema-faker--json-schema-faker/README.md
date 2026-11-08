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

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
