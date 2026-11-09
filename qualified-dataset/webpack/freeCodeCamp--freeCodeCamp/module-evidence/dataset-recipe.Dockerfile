FROM node:24-bookworm AS build
WORKDIR /app
COPY . .
RUN cp sample.env .env && npm install -g pnpm@12.15.0
ENV PUPPETEER_SKIP_DOWNLOAD=true
RUN pnpm install --frozen-lockfile
RUN GATSBY_CPU_COUNT=1 pnpm exec turbo -F=@freecodecamp/client build --env-mode=loose --concurrency=1
FROM nginx:1.27-alpine
COPY --from=build /app/client/public/ /usr/share/nginx/html/
