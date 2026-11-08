FROM node:18-bookworm AS build
WORKDIR /app
COPY . .
WORKDIR /app/mnist
RUN npm install -g yarn@1.22.22 --force
RUN find /app -name yarn.lock -exec sed -i 's@https://registry.yarnpkg.com/@https://registry.npmjs.org/@g' {} \;
RUN yarn config set registry https://registry.npmjs.org
RUN yarn install --network-concurrency 4 --network-timeout 120000 --ignore-engines
RUN node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('package.json'));delete p.main;fs.writeFileSync('package.json',JSON.stringify(p,null,2));"
RUN npx parcel build --no-scope-hoist index.html --public-url ./

FROM nginx:1.27-alpine
COPY --from=build /app/mnist/dist/ /usr/share/nginx/html/
