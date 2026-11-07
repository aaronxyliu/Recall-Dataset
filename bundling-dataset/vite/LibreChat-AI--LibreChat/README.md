# LibreChat

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Pinned commit `f4154b649efa37e1345ccc517a4d8d1ed2178c82`. The upstream Dockerfile runs the React/Vite production build and starts the Node API. The local recipe uses a mirror of the same signed Alpine packages. The Compose file starts the image with MongoDB 8.0.20 on an isolated network, as in the upstream deployment. [Upstream Dockerfile](https://github.com/LibreChat-AI/LibreChat/blob/f4154b649efa37e1345ccc517a4d8d1ed2178c82/client/Dockerfile)

Run from the ReCall Dataset root. Generate local secrets once and retain them with the database. The file is under the Git-ignored builds directory.

```sh
mkdir -p builds/.runtime
if [ ! -f builds/.runtime/librechat.env ]; then
  (umask 077
   for name in CREDS_KEY CREDS_IV JWT_SECRET JWT_REFRESH_SECRET; do
     bytes=32
     if [ "$name" = CREDS_IV ]; then bytes=16; fi
     printf '%s=' "$name"
     openssl rand -hex "$bytes"
   done > builds/.runtime/librechat.env)
fi
docker compose --env-file builds/.runtime/librechat.env -p recall-librechat-page -f bundling-dataset/vite/LibreChat-AI--LibreChat/compose.yaml up -d --build
```

Open http://127.0.0.1:8080/login once the API starts. Chrome rendered the email and password fields and loaded the local Vite bundles without uncaught exceptions. This check covers the login form; model inference and retrieval services were outside the check. See browser-stack.json.

To stop the stack:

```sh
docker compose --env-file builds/.runtime/librechat.env -p recall-librechat-page -f bundling-dataset/vite/LibreChat-AI--LibreChat/compose.yaml down
```

[Verification record](result.json)
