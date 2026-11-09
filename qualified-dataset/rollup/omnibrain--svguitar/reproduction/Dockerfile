FROM node:18-bookworm AS build
WORKDIR /app
ENV HUSKY=0
COPY . .
RUN --mount=type=cache,id=recall-yarn,target=/usr/local/share/.cache/yarn yarn install --frozen-lockfile --network-timeout 180000
RUN yarn run build && test -s demo/js/svguitar.umd.js


FROM nginx:stable-alpine AS runtime
COPY --from=build /app/demo/ /usr/share/nginx/html/
