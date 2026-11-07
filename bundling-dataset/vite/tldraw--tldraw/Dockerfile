FROM node:24-bookworm AS build
WORKDIR /app
COPY . .
RUN sed -i 's|http://deb.debian.org|https://mirrors.aliyun.com|g' /etc/apt/sources.list.d/debian.sources && apt-get update && apt-get install -y libsecret-1-dev && rm -rf /var/lib/apt/lists/*
ENV npm_config_registry=https://registry.npmmirror.com
RUN npm install -g pnpm@12.16.1
# Recent pnpm versions read the registry from the workspace configuration.
RUN printf '\nregistry: https://registry.npmmirror.com\n' >> pnpm-workspace.yaml && test "$(pnpm config get registry | sed 's|/$||')" = https://registry.npmmirror.com
RUN --mount=type=cache,id=recall-tldraw-pnpm,target=/pnpm-store pnpm install --store-dir /pnpm-store --frozen-lockfile
ARG VITE_CLERK_PUBLISHABLE_KEY
ENV VITE_CLERK_PUBLISHABLE_KEY=${VITE_CLERK_PUBLISHABLE_KEY}
RUN pnpm exec turbo run build --filter=./apps/dotcom/client --concurrency=1
FROM nginx:1.27-alpine
COPY --from=build /app/apps/dotcom/client/dist/ /usr/share/nginx/html//
