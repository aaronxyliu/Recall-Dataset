FROM node:20-bookworm AS build
WORKDIR /app
COPY . .
RUN corepack enable
RUN corepack prepare yarn@1.22.22 --activate
RUN yarn install --frozen-lockfile --ignore-engines
RUN yarn build
RUN cd packages/emoji-mart-website && npx parcel build index.html --no-autoinstall --public-url ./ --dist-dir emoji-mart

FROM nginx:1.27-alpine
COPY --from=build /app/packages/emoji-mart-website/emoji-mart/ /usr/share/nginx/html/
