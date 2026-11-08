FROM node:22.23.4-bookworm AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:bundle

FROM nginx:1.27-alpine
COPY --from=build /app/public/ /usr/share/nginx/html/
