# parcel-bundler/lightningcss

Commit `4a1b083d0958987d9241899ea93f80a962a259a9`. Build tool: Parcel. Engine: Parcel.

The site needs a WebAssembly build of the CSS transformer. The recipe installs Rust and binaryen, builds the wasm module, then bundles the website with Parcel.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/parcel-bundler/lightningcss/tar.gz/4a1b083d0958987d9241899ea93f80a962a259a9 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/parcel-bundler--lightningcss:4a1b083d0958 source
docker run --rm -p 127.0.0.1:8080:80 recall70/parcel-bundler--lightningcss:4a1b083d0958
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
