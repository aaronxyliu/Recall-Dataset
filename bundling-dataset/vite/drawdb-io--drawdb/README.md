# drawdb-io/drawdb

Commit `a249c7fb730c2de9b5c2ce6e863f2ea7344ac372`. Build tool: Vite. Engine: Rolldown.

The upstream Dockerfile uses Node 20 Alpine, npm ci, npm run build, and Nginx with runtime backend configuration. This recipe follows it with one local deployment adjustment. Requests under /_vercel/ return 404 so the SPA fallback does not serve HTML as an analytics script. The optional backend was left unset for this editor smoke test. [Dockerfile](https://github.com/drawdb-io/drawdb/blob/a249c7fb730c2de9b5c2ce6e863f2ea7344ac372/Dockerfile) · [README.md](https://github.com/drawdb-io/drawdb/blob/a249c7fb730c2de9b5c2ce6e863f2ea7344ac372/README.md) · [.github/workflows/build.yml](https://github.com/drawdb-io/drawdb/blob/a249c7fb730c2de9b5c2ce6e863f2ea7344ac372/.github/workflows/build.yml)

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/drawdb-io/drawdb/tar.gz/a249c7fb730c2de9b5c2ce6e863f2ea7344ac372 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/drawdb-io--drawdb:a249c7fb730c source
docker run --rm -p 127.0.0.1:8080:80 recall70/drawdb-io--drawdb:a249c7fb730c
```

Open http://127.0.0.1:8080/editor.
