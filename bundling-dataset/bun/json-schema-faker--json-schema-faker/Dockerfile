FROM node:22.23.4-bookworm AS build
WORKDIR /app
COPY . .
RUN npm i -g bun@1.4.4
RUN bun install --frozen-lockfile || bun install
RUN bun run build
RUN bun build ./src/browser.ts --outfile=./public/jsf.bundle.js --target=browser --minify --format=iife --sourcemap=linked --external:@faker-js/faker --external:chance

FROM nginx:1.27-alpine
COPY --from=build /app/public/ /usr/share/nginx/html/
