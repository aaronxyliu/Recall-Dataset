FROM node:16-bullseye AS build
WORKDIR /app
RUN npm install -g npm@6.14.18
ENV npm_config_nodedir=/usr/local
COPY . .
WORKDIR /app/18-forkify/final
RUN npm ci --no-audit --no-fund
# Locked source-map addon uses NAPI_MODULE_INIT and omits the node-addon-api 2.x global.
# Node 16 does not require the pre-10.15.3 destructor workaround, so initialize it false.
RUN node -e 'require("fs").appendFileSync("node_modules/@parcel/source-map/src/napi/SourceMap.cpp", "\nnamespace Napi { namespace details { std::atomic_bool needs_objectwrap_destructor_fix(false); } }\n")'
RUN node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js rebuild --directory node_modules/@parcel/source-map --nodedir=/usr/local
RUN npx parcel build index.html

FROM nginx:1.27-alpine
COPY --from=build /app/18-forkify/final/dist/ /usr/share/nginx/html/
