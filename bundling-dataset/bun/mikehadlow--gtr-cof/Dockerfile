FROM node:22.23.4-bookworm AS build
WORKDIR /app
RUN npm i -g bun@1.4.4
COPY . .
RUN bun install --frozen-lockfile || bun install
RUN bun build ./src/index.ts --outfile /app/docs/gtr-cof.js --target=browser --sourcemap=linked
RUN bun build ./src/styles/index.css --outfile /app/docs/gtr-cof.css

RUN cp /app/src/gtr-cof.js /app/src/gtr-cof.js.map /app/docs/ && find /app -name gtr-cof.css -not -path /app/docs/gtr-cof.css -exec cp {} /app/docs/ \;

FROM nginx:1.27-alpine
COPY --from=build /app/docs/ /usr/share/nginx/html/
