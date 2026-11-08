FROM node:22.23.4-bookworm AS build
WORKDIR /app
COPY . .
RUN npm i -g bun@1.4.4
RUN bun install --frozen-lockfile || bun install
RUN bun build ./src/index.ts --outfile ./docs/gtr-cof.js --target=browser --sourcemap=linked
RUN bun build ./src/styles/index.css --outfile ./docs/gtr-cof.css

FROM nginx:1.27-alpine
COPY --from=build /app/docs/ /usr/share/nginx/html/
