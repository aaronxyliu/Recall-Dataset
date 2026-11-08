FROM node:18-bookworm AS build
WORKDIR /app
COPY . .
WORKDIR /app/addition-rnn
RUN corepack enable
RUN corepack prepare yarn@1.22.22 --activate
RUN yarn install --ignore-engines
RUN node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('package.json'));delete p.main;fs.writeFileSync('package.json',JSON.stringify(p,null,2));"
RUN npx parcel build --no-scope-hoist index.html --public-url ./

FROM nginx:1.27-alpine
COPY --from=build /app/addition-rnn/dist/ /usr/share/nginx/html/
