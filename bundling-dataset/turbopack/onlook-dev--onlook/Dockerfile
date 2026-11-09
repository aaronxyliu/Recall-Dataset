# Build Onlook web client
FROM oven/bun:1.3.1 AS build

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV STANDALONE_BUILD=true

# Copy everything (monorepo structure)
COPY . .
COPY --from=recipe enable-maps.cjs /tmp/recall-enable-maps.cjs
RUN bun /tmp/recall-enable-maps.cjs
COPY --from=recipe repair-local-homepage.cjs /tmp/recall-repair-local-homepage.cjs
RUN bun /tmp/recall-repair-local-homepage.cjs
ENV NEXT_PUBLIC_RECALL_LOCAL_CAPTURE=1

# The published email-domain package already includes domains.json. Skip its
# network refresh and other dependency scripts for the public frontend build.
COPY --from=recipe bun.public.lock /tmp/recall-public-bun.lock
RUN --mount=type=cache,id=recall-onlook-bun,target=/root/.bun/install/cache \
    if [ ! -f apps/admin/package.json ]; then cp /tmp/recall-public-bun.lock bun.lock || exit 1; fi \
    && sha256sum bun.lock \
    && bun install --frozen-lockfile --ignore-scripts \
    && test -s node_modules/free-email-domains/domains.json
ARG NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY=local-build-placeholder
RUN cd apps/web/client \
    && SKIP_ENV_VALIDATION=1 bun run build:standalone \
    && test -s .next/standalone/apps/web/client/server.js

FROM oven/bun:1.3.1 AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
COPY --from=build /app/apps/web/client/.next/standalone/ ./
COPY --from=build /app/bun.lock /usr/share/recall-build/bun.lock

# Expose the application port
EXPOSE 3000

# Health check to ensure the application is running
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD bun -e "fetch('http://localhost:3000').then(r => r.ok ? process.exit(0) : process.exit(1)).catch(() => process.exit(1))"

# Start the Next.js server
CMD ["bun", "apps/web/client/server.js"]
