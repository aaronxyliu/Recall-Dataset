# syntax=docker.io/docker/dockerfile:1
ARG RECALL_RUNTIME_BASE=runner

FROM oven/bun:1.4.4-alpine AS bun

FROM node:24.22.1-alpine AS base

FROM base AS builder
WORKDIR /app
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
COPY . .
COPY --from=recipe enable-maps.cjs /tmp/recall-enable-maps.cjs
RUN node /tmp/recall-enable-maps.cjs

RUN --mount=type=cache,id=bun-1.4.4,target=/root/.bun/install/cache bun install --frozen-lockfile

ARG NEXT_PUBLIC_DOCKER_BUILD=true
ENV NEXT_PUBLIC_WEB_URL=http://localhost:3000

RUN bun run build:web


# 3. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001


# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public
COPY --from=builder --chown=nextjs:nodejs /app/packages/database/migrations ./apps/web/migrations


USER nextjs

EXPOSE 3000

CMD HOSTNAME="0.0.0.0" node apps/web/server.js

FROM ${RECALL_RUNTIME_BASE} AS browser-maps
USER root
RUN --mount=from=maptools,source=/identity-map.cjs,target=/tmp/recall-map.cjs \
    echo 'b74f95e029868e2f1d61f1751ff2a9bcc47e7963f16f74974024683e8d21d5c3  apps/web/public/theme-script.js' | sha256sum -c - \
    && node /tmp/recall-map.cjs apps/web/public/theme-script.js apps/web/public/theme-script.js apps/web/public/theme-script.js
USER nextjs
