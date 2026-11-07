# mozilla/pdf.js

Source commit `578fe15c435f7c91eb1fc4f30963b645e56e20ff`. Tool: webpack. Engine: webpack.

The README explicitly calls for gulp generic for a production viewer. Serve the generated generic distribution including the worker. [Pinned source](https://github.com/mozilla/pdf.js/blob/578fe15c435f7c91eb1fc4f30963b645e56e20ff/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/mozilla--pdf.js:578fe15c435f -f bundling-dataset/webpack/mozilla--pdf.js/Dockerfile builds/webpack/mozilla--pdf.js
docker run --rm -p 127.0.0.1:8080:80 recall-web/mozilla--pdf.js:578fe15c435f
```

Local URL: http://127.0.0.1:8080/web/viewer.html

Observed result: page-opened.

[Verification record](result.json)
