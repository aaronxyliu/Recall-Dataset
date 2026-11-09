FROM node:22-bookworm AS build
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --frozen-lockfile
RUN node <<'NODE'
const fs = require('fs');
const file = 'apps/showcase/angular.json';
const workspace = JSON.parse(fs.readFileSync(file));
const project = workspace.projects['showcase'];
const build = (project.architect || project.targets).build;
for (const options of [build.options, ...Object.values(build.configurations || {})]) {
  options.sourceMap = { scripts: true, styles: false, vendor: true, hidden: false };
}
fs.writeFileSync(file, JSON.stringify(workspace));
NODE
RUN pnpm build:lib && pnpm build:themes && pnpm build:docs && pnpm build:showcase
FROM nginx:1.27-alpine
COPY --from=build /app/apps/showcase/dist/showcase/browser/ /usr/share/nginx/html//
