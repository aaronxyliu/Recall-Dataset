# Dokploy panel

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Commit `fe9ae2a7db22730ff1ab72939e10806848c7cccd`. The upstream production build compiles the server workspace dependency, then the Next.js panel with webpack. This local recipe serves the panel with PostgreSQL, runs the migrations and leaves the host Docker socket unmounted. It uses C++20 for native dependencies and substitutes pinned local copies of Inter and Fraunces for the Google Fonts downloads. The Dockerfile records the font archive versions and checksums. [Upstream build](https://github.com/dokploy/dokploy/blob/fe9ae2a7db22730ff1ab72939e10806848c7cccd/Dockerfile)

From the dataset root:

```sh
mkdir -p builds/.runtime
if [ ! -f builds/.runtime/dokploy.env ]; then
  (umask 077; printf 'BETTER_AUTH_SECRET='; openssl rand -hex 32) > builds/.runtime/dokploy.env
  chmod 600 builds/.runtime/dokploy.env
fi
docker compose --env-file builds/.runtime/dokploy.env -p recall-dokploy-page -f bundling-dataset/webpack/dokploy--dokploy/compose.yaml up -d --build
```

Open http://127.0.0.1:8080/ once PostgreSQL is healthy and the panel has run its migrations. Chrome reached the initial registration form and loaded the local webpack runtime; see browser-stack.json. The check ended before account creation or deployment operations.

Stop the stack:

```sh
docker compose --env-file builds/.runtime/dokploy.env -p recall-dokploy-page -f bundling-dataset/webpack/dokploy--dokploy/compose.yaml down
```

[Verification record](result.json)
