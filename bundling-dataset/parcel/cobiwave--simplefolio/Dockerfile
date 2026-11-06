FROM node:16.14.2-bullseye AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run-script build

FROM nginx:1.27-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html/
