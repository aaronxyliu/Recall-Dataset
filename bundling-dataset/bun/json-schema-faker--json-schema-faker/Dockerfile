FROM node:22.23.4-bookworm AS build
WORKDIR /app
RUN npm i -g bun@1.4.4
COPY . .
RUN bun install --frozen-lockfile || bun install
RUN bun run build
RUN bun build ./src/browser.ts --outfile=/app/public/jsf.bundle.js --target=browser --minify --format=iife --sourcemap=linked --external:@faker-js/faker --external:chance

RUN cp /app/src/jsf.bundle.js /app/src/jsf.bundle.js.map /app/public/

FROM nginx:1.27-alpine
COPY --from=build /app/public/ /usr/share/nginx/html/
