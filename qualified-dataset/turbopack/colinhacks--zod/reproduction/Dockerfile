FROM node:24-bookworm AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 CI=true NUB_CONCURRENCY=8
RUN --mount=type=cache,target=/root/.npm npm install -g @nubjs/nub@0.8.3
COPY . .
RUN --mount=type=cache,id=recall-zod-nub-cache,target=/root/.cache/nub/pm \
    --mount=type=cache,id=recall-zod-nub-store,target=/root/.local/share/nub/store \
    for attempt in 1 2 3; do nub install --frozen-lockfile && exit 0; done; exit 1
RUN nub run build
COPY --from=recipe enable-maps.cjs /tmp/recall-enable-maps.cjs
RUN node /tmp/recall-enable-maps.cjs
COPY --from=recipe fonts/Inter-latin.woff2 /app/packages/docs/app/Inter-latin.woff2
COPY --from=recipe stars-loader.ts /app/packages/docs/loaders/stars.ts
COPY --from=recipe github-stars.json /app/packages/docs/loaders/github-stars.json
WORKDIR /app/packages/docs
RUN RAYON_NUM_THREADS=2 nub run build \
    || { cat /tmp/next-panic-*.log 2>/dev/null; exit 1; }
RUN test -s .next/BUILD_ID

FROM node:24-bookworm-slim AS runtime
WORKDIR /app/packages/docs
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
COPY --from=build /app /app
EXPOSE 3000
CMD ["node","node_modules/next/dist/bin/next","start","--hostname","0.0.0.0"]
