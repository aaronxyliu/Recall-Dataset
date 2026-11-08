FROM oven/bun:1.4 AS bun
FROM node:22-bookworm AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 PUPPETEER_SKIP_DOWNLOAD=true
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
RUN --mount=type=cache,target=/root/.npm npm install -g pnpm@10.33.4
COPY . .
COPY --from=recipe enable-maps.cjs /tmp/recall-enable-maps.cjs
RUN node /tmp/recall-enable-maps.cjs
RUN --mount=type=cache,id=recall-pnpm,target=/pnpm-store pnpm install --frozen-lockfile --store-dir=/pnpm-store
COPY --from=recipe pin-stars.cjs github-stars.json /tmp/recall/
RUN node /tmp/recall/pin-stars.cjs
RUN pnpm --filter=v4 run registry:build
RUN NODE_OPTIONS=--max-old-space-size=4096 pnpm --filter=v4 exec next build --turbopack --experimental-build-mode compile
COPY --from=recipe static-worker-heap.cjs /tmp/recall/
RUN node /tmp/recall/static-worker-heap.cjs apply \
    && NODE_OPTIONS=--max-old-space-size=4096 pnpm --filter=v4 exec next build --turbopack --experimental-build-mode generate \
    && node /tmp/recall/static-worker-heap.cjs restore \
    && test -s apps/v4/.next/BUILD_ID && test -s apps/v4/.next/prerender-manifest.json

FROM node:22-bookworm AS runtime
WORKDIR /app/apps/v4
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
COPY --from=build /app /app
EXPOSE 4000
CMD ["node","node_modules/next/dist/bin/next","start","--port","4000","--hostname","0.0.0.0"]
