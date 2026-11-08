FROM node:20-bookworm AS build
WORKDIR /app
COPY . .
RUN npm install -g yarn@1.22.22 --force
RUN find /app -name yarn.lock -exec sed -i 's@https://registry.yarnpkg.com/@https://registry.npmjs.org/@g' {} \;
RUN yarn config set registry https://registry.npmjs.org
RUN yarn install --network-concurrency 4 --network-timeout 120000 --frozen-lockfile --ignore-engines
RUN yarn build
RUN cd packages/emoji-mart-website && npx parcel build index.html --no-autoinstall --public-url ./ --dist-dir emoji-mart

FROM nginx:1.27-alpine
COPY --from=build /app/packages/emoji-mart-website/emoji-mart/ /usr/share/nginx/html/
