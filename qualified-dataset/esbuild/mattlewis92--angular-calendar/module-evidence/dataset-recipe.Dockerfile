FROM node:24-bookworm AS build
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --frozen-lockfile
RUN node <<'NODE'
const fs = require('fs');
const file = 'angular.json';
const workspace = JSON.parse(fs.readFileSync(file));
const project = workspace.projects['demos'];
const build = (project.architect || project.targets).build;
for (const options of [build.options, ...Object.values(build.configurations || {})]) {
  options.sourceMap = { scripts: true, styles: false, vendor: true, hidden: false };
}
fs.writeFileSync(file, JSON.stringify(workspace));
NODE
RUN pnpm gh-pages:demos
FROM nginx:1.27-alpine
COPY --from=build /app/dist/demos/ /usr/share/nginx/html/angular-calendar/
