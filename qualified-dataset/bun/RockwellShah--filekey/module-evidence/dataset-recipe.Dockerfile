FROM node:22.23.4-bookworm AS build
WORKDIR /app
RUN npm i -g bun@1.4.4
COPY . .
WORKDIR /app/reference
RUN bun install --frozen-lockfile || bun install
RUN bun run web/gen-source.ts
RUN bun build web/app.ts web/worker.ts web/selftest.ts --outdir web/dist --target browser --minify --sourcemap=linked
RUN bun run web/build-recover.ts
RUN bun run web/build-blog.ts

FROM nginx:1.27-alpine
COPY --from=build /app/reference/web/ /usr/share/nginx/html/
