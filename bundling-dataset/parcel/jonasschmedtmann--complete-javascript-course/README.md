# jonasschmedtmann/complete-javascript-course

Commit `76b8b79b2994dd00298b2be105aa6bc721e40a22`. Build tool: Parcel. Engine: Parcel.

The selected target is the course's modern-JS tooling example. The local manifest was adjusted to Parcel 2 and the library-only `main` field removed; the Dockerfile builds the HTML entry and serves `dist/`.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/jonasschmedtmann/complete-javascript-course/tar.gz/76b8b79b2994dd00298b2be105aa6bc721e40a22 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/jonasschmedtmann--complete-javascript-course:76b8b79b2994 source
docker run --rm -p 127.0.0.1:8080:80 recall70/jonasschmedtmann--complete-javascript-course:76b8b79b2994
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
