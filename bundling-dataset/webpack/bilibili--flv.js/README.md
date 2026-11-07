# bilibili/flv.js

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `42343088f22619cf014a057b3878fe3d320016a6`. Tool: webpack. Engine: webpack.

README.md documents the release build. Point the upstream player demo at the generated minified release file. [Pinned source](https://github.com/bilibili/flv.js/blob/42343088f22619cf014a057b3878fe3d320016a6/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/bilibili--flv.js:42343088f226 -f bundling-dataset/webpack/bilibili--flv.js/Dockerfile builds/webpack/bilibili--flv.js
docker run --rm -p 127.0.0.1:8080:80 recall-web/bilibili--flv.js:42343088f226
```

Local URL: http://127.0.0.1:8080/demo/

The recipe generates a local four-second FLV clip with audio and video. Open /demo/ and click **Start**. The saved image decoded 128×72 video and advanced the playback clock. See playback.json.

[Verification record](result.json)
