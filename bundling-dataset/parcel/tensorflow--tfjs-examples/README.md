# tensorflow/tfjs-examples

Commit `51430d697acd332f9d89fefe6df2fd90537d9e96`. Build tool: Parcel. Engine: Parcel.

Only the `addition-rnn` example is built; the repository contains many more examples. The library-only `main` field is removed before Parcel runs because it conflicts with the HTML entry.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/tensorflow/tfjs-examples/tar.gz/51430d697acd332f9d89fefe6df2fd90537d9e96 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/tensorflow--tfjs-examples:51430d697acd source
docker run --rm -p 127.0.0.1:8080:80 recall70/tensorflow--tfjs-examples:51430d697acd
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
