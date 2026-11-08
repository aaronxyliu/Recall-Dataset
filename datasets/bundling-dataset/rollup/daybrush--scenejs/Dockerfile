FROM node:16-bullseye AS build
WORKDIR /app
COPY . .
RUN --mount=type=cache,id=recall-yarn,target=/usr/local/share/.cache/yarn yarn install --frozen-lockfile --network-timeout 180000
COPY --from=recipe enable-maps.cjs /tmp/recall-enable-maps.cjs
RUN node /tmp/recall-enable-maps.cjs
RUN yarn workspace scenejs run build && yarn workspace demo run build \
    && test -s demo/dist/index.js && test -s packages/scenejs/dist/scene.min.js
COPY --from=recipe embed-sources.cjs /tmp/recall-embed-sources.cjs
RUN node /tmp/recall-embed-sources.cjs


FROM nginx:stable-alpine AS runtime
COPY --from=build /app/demo/ /usr/share/nginx/html/
COPY --from=build /app/packages/scenejs/dist/ /usr/share/nginx/html/release/latest/dist/
