# missive/emoji-mart

Commit `16978d04a766eec6455e2e8bb21cd8dc0b3c7436`. Build tool: Parcel. Engine: Parcel.

The library and the website are separate workspaces. The website build normally hard-codes the production CDN URL; the recipe rebuilds it with a relative public URL so the container can serve it locally.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/missive/emoji-mart/tar.gz/16978d04a766eec6455e2e8bb21cd8dc0b3c7436 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/missive--emoji-mart:16978d04a766 source
docker run --rm -p 127.0.0.1:8080:80 recall70/missive--emoji-mart:16978d04a766
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
