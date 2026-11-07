# freeCodeCamp/freeCodeCamp

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `a7292b4f26e37f59ba12d670e53d8806d5c2527f`. Tool: webpack. Engine: webpack.

The deployment workflow compiles the Gatsby client into client/public. The recipe uses Node 24, pinned pnpm, and sample.env. It disables the test browser download, selects the client Turbo build, and limits Gatsby and Turbo to one worker each. Gatsby generated 19,488 static pages. [Pinned source](https://github.com/freeCodeCamp/freeCodeCamp/blob/a7292b4f26e37f59ba12d670e53d8806d5c2527f/client/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/freecodecamp:a7292b4 -f bundling-dataset/webpack/freeCodeCamp--freeCodeCamp/Dockerfile builds/webpack/freeCodeCamp--freeCodeCamp
docker run --rm -p 127.0.0.1:8080:80 recall-web/freecodecamp:a7292b4
```

Local URL: http://127.0.0.1:8080/learn/

Chrome rendered the curriculum at /learn/ and loaded its webpack runtime. Account sign-in and saving progress require the separate API.

[Verification record](result.json)
