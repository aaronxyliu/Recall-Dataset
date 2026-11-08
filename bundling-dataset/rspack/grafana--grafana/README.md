# grafana/grafana

Commit `68df7b6065f9724a7273e90987615b0aaa25355c`. Build tool: Rspack. Engine: Rspack.

Only the frontend assets are built; a running Grafana backend is required for a full page. The recipe invokes Rspack directly instead of going through `nx exec`.

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/grafana/grafana/tar.gz/68df7b6065f9724a7273e90987615b0aaa25355c -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/grafana--grafana:68df7b6065f9 source
docker run --rm -p 127.0.0.1:8080:80 recall70/grafana--grafana:68df7b6065f9
```

Open http://127.0.0.1:8080/.

Observed result: build-verified. The container served the landing route over loopback (HTTP 200) and the script/source-map pair was fetched from the same origin. Browser smoke test pending.

[Verification record](result.json)
