# micahkepe/jsongrep

Commit `2c913fa21c2a264311ff8b1c44ed5fd4f68363e5`. Build tool: Bun. Engine: Bun.

The playground build compiles a Rust WebAssembly module and transpiles it with jco before bundling with Bun.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/micahkepe/jsongrep/tar.gz/2c913fa21c2a264311ff8b1c44ed5fd4f68363e5 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/micahkepe--jsongrep:2c913fa21c2a source
docker run --rm -p 127.0.0.1:8080:80 recall70/micahkepe--jsongrep:2c913fa21c2a
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
