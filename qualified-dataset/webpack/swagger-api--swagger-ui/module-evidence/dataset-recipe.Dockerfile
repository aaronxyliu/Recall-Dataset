FROM node:24-bookworm AS build
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
RUN sed -i 's/sourcemaps: false/sourcemaps: true/' webpack/bundle.js webpack/standalone.js
RUN npm run build-stylesheets && npm run build:bundle && npm run build:standalone
RUN node <<'NODE'
const fs = require('fs');
for (const name of ['swagger-ui-bundle','swagger-ui-standalone-preset']) {
  const map = JSON.parse(fs.readFileSync('dist/' + name + '.js.map'));
  if (!map.sourcesContent?.some(Boolean)) throw Error('Missing original sources for ' + name);
}
NODE
FROM nginx:1.27-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html//
