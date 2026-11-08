FROM node:24-bookworm AS build
WORKDIR /app
COPY . .
RUN corepack enable
RUN corepack install
RUN pnpm install --frozen-lockfile
RUN pnpm exec rspack build --config scripts/rspack/rspack.prod.ts

FROM nginx:1.27-alpine
COPY --from=build /app/public/build/ /usr/share/nginx/html/
