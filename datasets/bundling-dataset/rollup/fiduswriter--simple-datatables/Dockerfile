FROM node:24-bookworm AS build
WORKDIR /app
COPY . .
COPY --from=recipe package-lock.json ./package-lock.json
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
RUN test -s docs/demos/dist/module.js && test -s docs/demos/dist/css/style.css


FROM nginx:stable-alpine AS runtime
COPY --from=build /app/docs/ /usr/share/nginx/html/

COPY --from=build /app/package-lock.json /usr/share/recall-build/package-lock.json
