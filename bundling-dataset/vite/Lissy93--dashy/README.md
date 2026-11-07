# Lissy93/dashy

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `002c6dd559c8d7ba662aeae9228164f6cf398c75`. Tool: Vite. Engine: Rolldown.

Use the upstream multi-stage Dockerfile to compile the Yarn frontend and start its configuration-aware Node server. [Pinned source](https://github.com/Lissy93/dashy/blob/002c6dd559c8d7ba662aeae9228164f6cf398c75/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/lissy93--dashy:002c6dd559c8 -f bundling-dataset/vite/Lissy93--dashy/Dockerfile builds/vite/Lissy93--dashy
docker run --rm -p 127.0.0.1:8080:8080 recall-web/lissy93--dashy:002c6dd559c8
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
