FROM node:10-buster AS build
WORKDIR /app
COPY . .
RUN yarn install --ignore-engines
RUN sed -i "s|//devtool:.*|devtool: 'source-map',|" build/webpack.prod.conf.js
RUN yarn build
FROM nginx:1.27-alpine
COPY --from=build /app/elm/ /usr/share/nginx/html/elm/
