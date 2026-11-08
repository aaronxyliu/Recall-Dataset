FROM node:22-bookworm AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
RUN --mount=type=cache,target=/root/.npm npm install -g pnpm@10.33.4
COPY . .
COPY --from=recipe enable-maps.cjs /tmp/recall-enable-maps.cjs
RUN node /tmp/recall-enable-maps.cjs
RUN --mount=type=cache,id=recall-pnpm,target=/pnpm-store pnpm install --frozen-lockfile --store-dir=/pnpm-store
RUN mkdir -p node_modules/@next \
    && ln -s ../.pnpm/@next+eslint-plugin-next@15.4.10/node_modules/@next/eslint-plugin-next node_modules/@next/eslint-plugin-next
# Next.js imports these server modules during page-data collection.
RUN BETTER_AUTH_SECRET=recall-build-only-better-auth-placeholder \
    POLAR_WEBHOOK_SECRET=recall-build-only-polar-placeholder \
    pnpm run build && test -s .next/BUILD_ID

FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
COPY --from=build /app /app
EXPOSE 3000
CMD ["node","node_modules/next/dist/bin/next","start","--hostname","0.0.0.0"]
