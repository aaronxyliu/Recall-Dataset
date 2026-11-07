FROM node:24-bookworm AS build
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
RUN npx --no-install gulp generic
FROM nginx:1.27-alpine
COPY --from=build /app/build/generic/ /usr/share/nginx/html//
RUN printf '%s\n' 'server { listen 80; root /usr/share/nginx/html; location ~ \.mjs$ { default_type application/javascript; } }' > /etc/nginx/conf.d/default.conf
