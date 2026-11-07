FROM node:20 AS build
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
RUN NODE_OPTIONS=--openssl-legacy-provider npm run build
RUN mkdir -p site/dist && cp -R demo site/ && cp dist/flv.min.js dist/flv.min.js.map site/dist/ && sed -i s@../dist/flv.js@../dist/flv.min.js@ site/demo/index.html
# Deterministic local media input for the upstream player's auto-load example.
RUN sed -i 's|http://127.0.0.1/flv/7182741-1.flv|/demo/sample.flv|' site/demo/index.html

FROM alpine:3.20 AS media
RUN sed -i 's|dl-cdn.alpinelinux.org|mirrors.aliyun.com|g' /etc/apk/repositories && apk add --no-cache ffmpeg
RUN ffmpeg -loglevel error -f lavfi -i testsrc2=size=128x72:rate=10 -f lavfi -i sine=frequency=440:sample_rate=44100 -t 4 -c:v libx264 -preset veryfast -pix_fmt yuv420p -c:a aac -f flv /sample.flv

FROM nginx:1.27-alpine
COPY --from=build /app/site/ /usr/share/nginx/html//
COPY --from=media /sample.flv /usr/share/nginx/html/demo/sample.flv
