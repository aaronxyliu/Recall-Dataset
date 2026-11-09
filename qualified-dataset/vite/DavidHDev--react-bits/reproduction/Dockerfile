FROM node:24-bookworm AS build
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
ENV NODE_OPTIONS=--max-old-space-size=7168
RUN node -e 'const fs=require('"'"'fs'"'"'),p=require('"'"'./package.json'"'"');p.scripts.build=p.scripts.build.replace('"'"'vite build'"'"','"'"'vite build --sourcemap'"'"');fs.writeFileSync('"'"'package.json'"'"',JSON.stringify(p))'
RUN npm run build
FROM nginx:1.27-alpine
COPY --from=build /app/dist/ /usr/share/nginx/html//
