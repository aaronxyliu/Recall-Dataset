FROM node:22.23.4-bookworm AS build
WORKDIR /app
RUN npm i -g bun@1.4.4
COPY . .
WORKDIR /app/web
RUN bun install --frozen-lockfile || bun install
RUN bun scripts/bundle.ts
RUN cp -r /app/data /app/assets dist/ && cp -r src/i18n dist/i18n

FROM nginx:1.27-alpine
COPY --from=build /app/web/dist/ /usr/share/nginx/html/
