FROM node:26-bookworm AS build
WORKDIR /app
COPY . .
RUN npm install --global pnpm@11.7.0
RUN pnpm install --frozen-lockfile
RUN make && test -s examples/iife/demo.js

FROM nginx:1.27-alpine
COPY --from=build /app/examples/ /usr/share/nginx/html/
