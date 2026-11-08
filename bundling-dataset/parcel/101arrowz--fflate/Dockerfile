FROM node:22.23.4-bookworm AS build
WORKDIR /app
COPY . .
RUN npm install --no-audit --no-fund
RUN npm run build:lib
RUN npx parcel build demo/index.html --no-cache --public-url ./ --dist-dir dist

FROM nginx:1.27-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html/
