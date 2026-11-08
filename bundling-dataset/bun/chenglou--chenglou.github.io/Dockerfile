FROM node:22.23.4-bookworm AS build
WORKDIR /app
RUN npm i -g bun@1.4.4
COPY . .
RUN bun install --frozen-lockfile || bun install
RUN bun build ./index.html --outdir=dist --minify --sourcemap=linked

FROM nginx:1.27-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html/
