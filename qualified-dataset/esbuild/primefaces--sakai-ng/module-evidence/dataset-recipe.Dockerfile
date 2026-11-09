FROM node:22-bookworm AS build
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
RUN node <<'NODE'
const fs = require('fs');
const file = 'angular.json';
const workspace = JSON.parse(fs.readFileSync(file));
const project = workspace.projects['sakai-ng'];
const build = (project.architect || project.targets).build;
for (const options of [build.options, ...Object.values(build.configurations || {})]) {
  options.sourceMap = { scripts: true, styles: false, vendor: true, hidden: false };
}
fs.writeFileSync(file, JSON.stringify(workspace));
NODE
RUN npm run build
FROM nginx:1.27-alpine
COPY --from=build /app/dist/sakai-ng/browser/ /usr/share/nginx/html//
