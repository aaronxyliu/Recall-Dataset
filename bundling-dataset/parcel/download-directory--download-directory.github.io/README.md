# download-directory/download-directory.github.io

Commit `eee887009ab94640d163a66047a7e33778190902`. Build tool: Parcel. Engine: Parcel.

The production build runs `run-s build:*`; only `build:bundle` (`parcel build --dist-dir public --no-scope-hoist`) is needed for the browser output. The Dockerfile installs dependencies, runs that step, and serves `public/` with Nginx. [package.json](https://github.com/download-directory/download-directory.github.io/blob/eee887009ab94640d163a66047a7e33778190902/package.json)

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/download-directory/download-directory.github.io/tar.gz/eee887009ab94640d163a66047a7e33778190902 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/download-directory--download-directory.github.io:eee887009ab9 source
docker run --rm -p 127.0.0.1:8080:80 recall70/download-directory--download-directory.github.io:eee887009ab9
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. Container served HTTP 200 with title `Download GitHub directory`; script and source map fetched from the same origin. Browser smoke test was not run in this environment.

[Verification record](result.json)
