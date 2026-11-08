FROM node:20-bookworm AS build
WORKDIR /src
RUN npm install --global pnpm@9.8.0
COPY . .
RUN pnpm install --frozen-lockfile
RUN node -e "const fs=require('fs');const p='tsup.config.ts';const s=fs.readFileSync(p,'utf8');if(!s.includes('defineConfig({'))throw Error('config anchor missing');fs.writeFileSync(p,s.replace('defineConfig({','defineConfig({sourcemap: true,'));"
RUN pnpm run build \
    && test -s examples/index.html \
    && test -s examples/iife/demo.js \
    && test -s examples/iife/demo.js.map

FROM nginx:stable-alpine AS runtime
COPY --from=build /src/examples/index.html /usr/share/nginx/html/index.html
COPY --from=build /src/examples/iife/ /usr/share/nginx/html/iife/
