FROM node:24-bookworm AS build
WORKDIR /app
COPY . .
ENV npm_config_registry=https://registry.npmmirror.com
ENV DATABASE_URL=postgresql://placeholder:placeholder@localhost:5432/placeholder
RUN cp .env.example .env && npm install -g pnpm@10.34.5
# The backend postinstall generates gql-gen/backend-schema.gql for the frontend.
# Recent pnpm versions read the registry from the workspace configuration.
RUN printf '\nregistry: https://registry.npmmirror.com\n' >> pnpm-workspace.yaml && printf '\nregistry=https://registry.npmmirror.com\n' >> .npmrc && test "$(pnpm config get registry | sed 's|/$||')" = https://registry.npmmirror.com
RUN --mount=type=cache,id=recall-hoppscotch-pnpm,target=/pnpm-store pnpm --filter hoppscotch-backend... install --store-dir /pnpm-store --frozen-lockfile
RUN --mount=type=cache,id=recall-hoppscotch-pnpm,target=/pnpm-store pnpm install --store-dir /pnpm-store --frozen-lockfile
RUN pnpm --filter @hoppscotch/selfhost-web run generate
FROM nginx:1.27-alpine AS app
COPY --from=build /app/packages/hoppscotch-selfhost-web/dist/ /usr/share/nginx/html/
RUN printf '%s\n' 'server { listen 3000; root /usr/share/nginx/html; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
