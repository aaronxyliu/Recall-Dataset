# syntax=docker/dockerfile:1
FROM node:24.22.1-bookworm-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN corepack prepare pnpm@10.22.0 --activate

FROM base AS build
# The upstream slim base lacks the CA bundle needed for the signed HTTPS mirror.
COPY --from=node:24.22.1-bookworm /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN sed -i -e "s|http://deb.debian.org|https://mirrors.aliyun.com|g" -e "s|https://deb.debian.org|https://mirrors.aliyun.com|g" /etc/apt/sources.list.d/debian.sources && apt-get update && apt-get install -y python3 make g++ git python3-pip pkg-config libsecret-1-dev && rm -rf /var/lib/apt/lists/*

# Node 24 headers require C++20 for native ARM64 dependencies.
ENV CXXFLAGS=-std=gnu++20
# Install dependencies
# Recent pnpm versions read the registry from the workspace configuration.
RUN printf '\nregistry: https://registry.npmmirror.com\n' >> pnpm-workspace.yaml && printf '\nregistry=https://registry.npmmirror.com\n' >> .npmrc && test "$(pnpm config get registry | sed 's|/$||')" = https://registry.npmmirror.com
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Deploy only the dokploy app

ENV NODE_ENV=production
RUN pnpm --filter=@dokploy/server build
# Use pinned local copies of the same font families for an offline Next.js build.
ADD --checksum=sha256:d26710dd38e7217484a1d47ee76c024977ec550548876f26d06ed1844af09a14 https://registry.npmmirror.com/@fontsource-variable/inter/-/inter-5.3.0.tgz /tmp/inter.tgz
RUN mkdir -p /tmp/font-inter apps/dokploy/local-fonts && tar xzf /tmp/inter.tgz -C /tmp/font-inter && cp /tmp/font-inter/package/files/inter-latin-wght-*.woff2 apps/dokploy/local-fonts/ && cp /tmp/font-inter/package/LICENSE apps/dokploy/local-fonts/inter-LICENSE
ADD --checksum=sha256:c8bff30211fb6683f7c4c6fa0c298d1f1c7d4e811767de92d26a199c273235fb https://registry.npmmirror.com/@fontsource-variable/fraunces/-/fraunces-5.3.0.tgz /tmp/fraunces.tgz
RUN mkdir -p /tmp/font-fraunces apps/dokploy/local-fonts && tar xzf /tmp/fraunces.tgz -C /tmp/font-fraunces && cp /tmp/font-fraunces/package/files/fraunces-latin-wght-*.woff2 apps/dokploy/local-fonts/ && cp /tmp/font-fraunces/package/LICENSE apps/dokploy/local-fonts/fraunces-LICENSE
RUN python3 - <<'PYTHON'
from pathlib import Path
p = Path("apps/dokploy/pages/_app.tsx")
s = p.read_text().replace('import { Inter } from "next/font/google";', 'import localFont from "next/font/local";')
old = 'Inter({ subsets: ["latin"] })'
assert old in s
p.write_text(s.replace(old, 'localFont({ src: "../local-fonts/inter-latin-wght-normal.woff2", weight: "100 900", display: "swap" })'))
PYTHON
COPY <<'FONT_CONFIG' /usr/src/app/apps/dokploy/components/dashboard/onboarding/font.ts
import localFont from "next/font/local";
export const displayFont = localFont({
    src: [
        { path: "../../../local-fonts/fraunces-latin-wght-normal.woff2", weight: "600", style: "normal" },
        { path: "../../../local-fonts/fraunces-latin-wght-italic.woff2", weight: "600", style: "italic" },
    ],
    display: "swap",
});
FONT_CONFIG
RUN sed -i 's|const nextConfig = {|const nextConfig = {productionBrowserSourceMaps:true,|' apps/dokploy/next.config.mjs
RUN pnpm --filter=./apps/dokploy run build

# Serve only the compiled panel. Deployment administration requires external services.
WORKDIR /usr/src/app/apps/dokploy
EXPOSE 3000
CMD ["pnpm", "exec", "next", "start", "-H", "0.0.0.0", "-p", "3000"]
