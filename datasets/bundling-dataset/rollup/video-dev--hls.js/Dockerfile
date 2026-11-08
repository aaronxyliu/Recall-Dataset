FROM node:24-bookworm AS build
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
COPY --from=recipe fix-map-chain.cjs /tmp/recall-fix-map-chain.cjs
RUN node /tmp/recall-fix-map-chain.cjs \
    && npm run build:debug -- --configType worker \
    && test -s dist/hls.js && test -s dist/hls-demo.js && test -s dist/hls.worker.js.map
RUN --mount=from=maptools,source=/identity-map.cjs,target=/tmp/recall-map.cjs \
    node /tmp/recall-map.cjs demo/canvas.js demo/canvas.js demo/canvas.js \
    && node /tmp/recall-map.cjs demo/metrics.js demo/metrics.js demo/metrics.js


FROM nginx:stable-alpine AS runtime

COPY --from=build /app/demo/ /usr/share/nginx/html/demo/
COPY --from=build /app/dist/ /usr/share/nginx/html/dist/
