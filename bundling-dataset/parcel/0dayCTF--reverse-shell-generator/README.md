# 0dayCTF/reverse-shell-generator

Commit `9fda27f91b1b1f370539dd534bc3bbb1f6b49bf6`. Build tool: Parcel. Engine: Parcel.

The pinned revision references `js/data.js`, but that file is absent from the repository and from the deployed site. The recipe cannot produce a working build without it; this directory records the blocked state.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/0dayCTF/reverse-shell-generator/tar.gz/9fda27f91b1b1f370539dd534bc3bbb1f6b49bf6 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/0dayCTF--reverse-shell-generator:9fda27f91b1b source
docker run --rm -p 127.0.0.1:8080:80 recall70/0dayCTF--reverse-shell-generator:9fda27f91b1b
```

Open http://127.0.0.1:8080/.

Observed result: blocked: the pinned revision does not contain `js/data.js`, so the production build fails before emitting assets.

[Verification record](result.json)
