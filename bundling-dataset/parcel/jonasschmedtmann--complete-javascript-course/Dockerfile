FROM node:20-bookworm AS build
WORKDIR /app
COPY . .
WORKDIR /app/17-Modern-JS-Modules-Tooling/final
RUN npm install --no-audit --no-fund
RUN npx parcel build index.html

FROM nginx:1.27-alpine
COPY --from=build /app/17-Modern-JS-Modules-Tooling/final/dist/ /usr/share/nginx/html/
