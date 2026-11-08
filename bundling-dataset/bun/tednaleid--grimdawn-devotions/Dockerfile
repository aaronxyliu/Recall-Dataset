FROM node:22.23.4-bookworm AS build
WORKDIR /app
COPY . .
WORKDIR /app/web
RUN npm i -g bun@1.4.4
RUN bun install --frozen-lockfile || bun install
RUN bun build src/app/main.ts --outdir dist --target browser --sourcemap=linked
RUN cp index.html dist/index.html

FROM nginx:1.27-alpine
COPY --from=build /app/web/dist/ /usr/share/nginx/html/
