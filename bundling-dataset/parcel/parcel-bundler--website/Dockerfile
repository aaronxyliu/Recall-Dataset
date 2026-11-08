FROM node:20-bookworm AS build
WORKDIR /app
COPY . .
RUN corepack enable
RUN yarn install
RUN find . -name '*.md' -not -path './node_modules/*' -exec sed -i 's/\r$//' {} +
RUN yarn build

FROM nginx:1.27-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html/
