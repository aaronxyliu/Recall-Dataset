FROM node:22-bookworm AS build
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
RUN ./scripts/prepack.sh --outdir /app/dist/http-release --protocol http
FROM nginx:1.27-alpine
COPY --from=build /app/dist/http-release/ /usr/share/nginx/html//
