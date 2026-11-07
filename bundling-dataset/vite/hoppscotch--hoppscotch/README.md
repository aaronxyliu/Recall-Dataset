# hoppscotch/hoppscotch

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `55908a76a1d0555c9bbb5d74244c14173df95b06`. Tool: Vite. Engine: Rollup.

The backend postinstall generates the GraphQL schema used by the frontend code generator. Install that prerequisite, build the selfhost-web package using its documented generate command and serve its local Vite output on port 3000. [Pinned source](https://github.com/hoppscotch/hoppscotch/blob/55908a76a1d0555c9bbb5d74244c14173df95b06/packages/hoppscotch-selfhost-web/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build --target app -t recall-web/hoppscotch--hoppscotch:55908a76a1d0 -f bundling-dataset/vite/hoppscotch--hoppscotch/Dockerfile builds/vite/hoppscotch--hoppscotch
docker run --rm -p 127.0.0.1:8080:3000 recall-web/hoppscotch--hoppscotch:55908a76a1d0
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
