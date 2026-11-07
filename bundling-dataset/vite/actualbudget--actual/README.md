# actualbudget/actual

Source commit `92865f32f307ec04e0556a8c2052819d49e8e204`. Tool: Vite. Engine: Rolldown.

The upstream sync-server.Dockerfile builds the browser client and its sync server together. This local recipe uses the documented --skip-translations option to avoid pulling an unpinned translations checkout and sets ACTUAL_PORT=80. Chrome reached the welcome page, which reported matching client and server versions. [Pinned source](https://github.com/actualbudget/actual/blob/92865f32f307ec04e0556a8c2052819d49e8e204/packages/desktop-client/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/actualbudget--actual:92865f32f307 -f bundling-dataset/vite/actualbudget--actual/Dockerfile builds/vite/actualbudget--actual
docker run --rm -p 127.0.0.1:8080:80 recall-web/actualbudget--actual:92865f32f307
```

Local URL: http://127.0.0.1:8080/

Observed result: page-opened.

[Verification record](result.json)
