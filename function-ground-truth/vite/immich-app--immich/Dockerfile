FROM node:26-bookworm AS web
WORKDIR /app
COPY . .
RUN npm install -g pnpm@12.16.1
RUN pnpm --filter @immich/sdk --filter immich-web install --frozen-lockfile
RUN sed -i 's|vite build|vite build --sourcemap|' web/package.json
RUN pnpm --filter @immich/sdk build && pnpm --filter immich-web build
FROM nginx:1.27-alpine
COPY --from=web /app/web/build/ /usr/share/nginx/html/
RUN printf '%s\n' 'server { listen 80; root /usr/share/nginx/html; location / { try_files $uri $uri/ /index.html; } location ^~ /api/ { return 503; } }' > /etc/nginx/conf.d/default.conf
