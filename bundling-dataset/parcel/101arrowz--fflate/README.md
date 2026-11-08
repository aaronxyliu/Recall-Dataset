# 101arrowz/fflate

Commit `dcb3714a6c25db3a2748641019c5277413d09714`. Build tool: Parcel. Engine: Parcel.

Only the library build and the demo bundle are needed. The upstream `build:demo` script ends with a GitHub Pages publish step that requires `git log HEAD~1`; the recipe stops before that step.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/101arrowz/fflate/tar.gz/dcb3714a6c25db3a2748641019c5277413d09714 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/101arrowz--fflate:dcb3714a6c25 source
docker run --rm -p 127.0.0.1:8080:80 recall70/101arrowz--fflate:dcb3714a6c25
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
