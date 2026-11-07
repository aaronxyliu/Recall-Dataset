# DavidHDev/react-bits

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `4dc7b5b7772e1217c8fb8d2a7aa074302180e5b4`. Tool: Vite. Engine: Rollup.

The production manifest generates props, sounds, registry, sitemap, and feeds before Vite. Use its entire build so the interactive gallery can load generated data. [Pinned source](https://github.com/DavidHDev/react-bits/blob/4dc7b5b7772e1217c8fb8d2a7aa074302180e5b4/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/davidhdev--react-bits:4dc7b5b7772e -f bundling-dataset/vite/DavidHDev--react-bits/Dockerfile builds/vite/DavidHDev--react-bits
docker run --rm -p 127.0.0.1:8080:80 recall-web/davidhdev--react-bits:4dc7b5b7772e
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
