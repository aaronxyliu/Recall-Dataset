# Immich web frontend

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Commit `037e5bc0554074bfe91e20b802a6a4ef4a6dd6f9` (see subject.json for the authoritative revision). The web package builds a Vite/SvelteKit SPA. The recipe builds its SDK first, then compiles the frontend. Node 26 and pnpm 12.16.1 follow the root mise.toml. The frontend requires a working server API to show the welcome screen.

From the ReCall Dataset root:

```sh
docker build -t recall-web/immich-app--immich:037e5bc05540 -f bundling-dataset/vite/immich-app--immich/Dockerfile builds/vite/immich-app--immich
docker compose -p recall-immich-page -f bundling-dataset/vite/immich-app--immich/compose.yaml up -d
```

Open http://127.0.0.1:8080/ after the API starts. Chrome rendered the Immich welcome screen with setup and restore options. The frontend comes from the pinned checkout. Compose runs the published v3.3.0 backend by digest with local PostgreSQL and Valkey. The smoke test covers the welcome screen. browser-stack.json records the successful run; browser.log records the failed standalone frontend attempt.

Stop the local stack with:

```sh
docker compose -p recall-immich-page -f bundling-dataset/vite/immich-app--immich/compose.yaml down
```

[Verification record](result.json)
