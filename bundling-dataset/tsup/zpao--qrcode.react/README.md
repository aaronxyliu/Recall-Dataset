# zpao/qrcode.react

Commit `bd6bec861c50d36a01c82193c8fcdc8a5e968465`. Build tool: tsup. Engine: esbuild.

The CI workflow reads Node 26 from .nvmrc, runs pnpm install and then make. The Makefile builds the library before the browser demo. The Dockerfile selects pnpm 11.7.0 from the manifest, installs from the lockfile, and serves the examples directory locally with Nginx. [.github/workflows/ci.yml](https://github.com/zpao/qrcode.react/blob/bd6bec861c50d36a01c82193c8fcdc8a5e968465/.github/workflows/ci.yml) · [.nvmrc](https://github.com/zpao/qrcode.react/blob/bd6bec861c50d36a01c82193c8fcdc8a5e968465/.nvmrc) · [Makefile](https://github.com/zpao/qrcode.react/blob/bd6bec861c50d36a01c82193c8fcdc8a5e968465/Makefile) · [package.json](https://github.com/zpao/qrcode.react/blob/bd6bec861c50d36a01c82193c8fcdc8a5e968465/package.json)

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/zpao/qrcode.react/tar.gz/bd6bec861c50d36a01c82193c8fcdc8a5e968465 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/zpao--qrcode.react:bd6bec861c50 source
docker run --rm -p 127.0.0.1:8080:80 recall70/zpao--qrcode.react:bd6bec861c50
```

Open http://127.0.0.1:8080/.
