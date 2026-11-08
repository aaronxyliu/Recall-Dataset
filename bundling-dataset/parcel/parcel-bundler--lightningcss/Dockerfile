FROM node:24-bookworm AS build
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y --no-install-recommends binaryen curl ca-certificates build-essential python3
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
RUN npm install -g yarn@1.22.22 --force
RUN find /app -name yarn.lock -exec sed -i 's@https://registry.yarnpkg.com/@https://registry.npmjs.org/@g' {} \;
RUN yarn config set registry https://registry.npmjs.org
ENV PUPPETEER_SKIP_DOWNLOAD=true PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
RUN yarn install --network-concurrency 4 --network-timeout 120000 --frozen-lockfile --ignore-engines
RUN npm install lightningcss@1.33.0 --no-save
RUN PATH="/root/.cargo/bin:$PATH" rustup target add wasm32-unknown-unknown
RUN PATH="/root/.cargo/bin:$PATH" cargo build --release --target wasm32-unknown-unknown -p lightningcss_node
RUN wasm-opt target/wasm32-unknown-unknown/release/lightningcss_node.wasm --asyncify --pass-arg=asyncify-imports@env.await_promise_sync -Oz -o wasm/lightningcss_node.wasm
RUN node scripts/build-wasm.js
RUN node node_modules/parcel/lib/bin.js build 'website/*.html' website/playground/index.html --dist-dir website/dist --public-url ./

FROM nginx:1.27-alpine
COPY --from=build /app/website/dist/ /usr/share/nginx/html/
