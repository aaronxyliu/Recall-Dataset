FROM node:16-bullseye AS build
WORKDIR /app
COPY . .
RUN git config --global url."https://github.com/".insteadOf ssh://git@github.com/
# Optional GitHub proxy for Docker hosts with restricted direct egress.
ARG GITHUB_GIT_PROXY=http://host.docker.internal:7897
RUN if [ -n "$GITHUB_GIT_PROXY" ] && curl --max-time 5 -fsS -x "$GITHUB_GIT_PROXY" -o /dev/null 'https://github.com/nhn/raphael.git/info/refs?service=git-upload-pack'; then git config --global http.https://github.com/.proxy "$GITHUB_GIT_PROXY"; fi && \
    npm install --legacy-peer-deps --no-audit --no-fund && \
    (git config --global --unset http.https://github.com/.proxy || true)
RUN sed -i "s/productionSourceMap: false/productionSourceMap: true/" vue.config.js
RUN npm run build:prod
FROM nginx:1.27-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html//
