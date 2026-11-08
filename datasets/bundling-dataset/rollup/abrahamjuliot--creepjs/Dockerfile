FROM node:22-bookworm AS build
WORKDIR /app
RUN --mount=type=cache,target=/root/.npm npm install -g pnpm@10.33.4
COPY . .
RUN --mount=type=cache,id=recall-pnpm,target=/pnpm-store pnpm install --frozen-lockfile --store-dir=/pnpm-store
COPY --from=recipe enable-maps.cjs /tmp/recall-enable-maps.cjs
RUN node /tmp/recall-enable-maps.cjs
RUN pnpm run build && test -s docs/creep.js && test -s docs/style.min.css


FROM nginx:stable-alpine AS runtime
COPY --from=build /app/docs/ /usr/share/nginx/html/
