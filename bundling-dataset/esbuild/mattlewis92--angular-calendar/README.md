# mattlewis92/angular-calendar

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `9ae06cf4e5bdb5ee538c0ff2e57a4ec4f7facc68`. Tool: esbuild. Engine: esbuild.

The README specifies pnpm. The Pages demos target invokes Angular production build and angular.json places output under dist/demos. [Pinned source](https://github.com/mattlewis92/angular-calendar/blob/9ae06cf4e5bdb5ee538c0ff2e57a4ec4f7facc68/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/mattlewis92--angular-calendar:9ae06cf4e5bd -f bundling-dataset/esbuild/mattlewis92--angular-calendar/Dockerfile builds/esbuild/mattlewis92--angular-calendar
docker run --rm -p 127.0.0.1:8080:80 recall-web/mattlewis92--angular-calendar:9ae06cf4e5bd
```

Local URL: http://127.0.0.1:8080/angular-calendar/

Observed result: page-opened.

[Verification record](result.json)
