FROM node:22.23.4-bookworm AS build
WORKDIR /app
COPY . .
WORKDIR /app/playground
RUN npm i -g bun@1.4.4
RUN bun install --frozen-lockfile || bun install
RUN bun build index.html --outdir=dist --target=browser --minify --public-path=./ --sourcemap=linked

FROM nginx:1.27-alpine
COPY --from=build /app/playground/dist/ /usr/share/nginx/html/
