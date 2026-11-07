FROM node:25-bookworm AS build
WORKDIR /app
COPY . .
RUN npm install -g pnpm@10.33.0 && pnpm install --frozen-lockfile
RUN pnpm build
FROM nginx:1.27-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html//
