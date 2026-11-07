FROM node:20-bookworm
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare pnpm@9.15.9 --activate && pnpm install --frozen-lockfile
RUN sed -i 's|withNextra({|withNextra({productionBrowserSourceMaps:true,|' next.config.js
RUN NODE_OPTIONS=--max-old-space-size=8192 npm run build
# Avoid redirecting /zh to itself when the local browser sends Accept-Language: zh.
RUN sed -i '/^  i18n: {/a\    localeDetection: false,' next.config.js
EXPOSE 3000
CMD ["npm","run","start","--","-H","0.0.0.0"]
