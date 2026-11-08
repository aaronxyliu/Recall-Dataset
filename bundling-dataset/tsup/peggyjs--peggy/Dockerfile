FROM node:24-bookworm@sha256:64af3819f9275802414d7cdc38c27e9d82bd564dec4d4da87d008255d36c63b4 AS build
WORKDIR /app
RUN --mount=type=cache,target=/root/.npm npm install -g pnpm@12.13.0
COPY . .
RUN --mount=type=cache,id=recall-pnpm,target=/pnpm-store pnpm install --frozen-lockfile --store-dir=/pnpm-store
COPY --from=recipe enable-maps.cjs /tmp/recall-enable-maps.cjs
RUN node /tmp/recall-enable-maps.cjs
RUN pnpm run make     && mkdir -p docs/_site/vendor/peggy     && cp docs/vendor/peggy/peggy.min.js docs/_site/vendor/peggy/ && cp browser/peggy.min.js.map docs/_site/vendor/peggy/     && test -s docs/_site/online.html     && test -s docs/_site/vendor/peggy/peggy.min.js
COPY --from=recipe copy-vendor-maps.cjs /tmp/recall-copy-vendor-maps.cjs
COPY --from=recipe inspect-3.3.4.js.map inspect-3.3.4.LICENSE /tmp/
RUN --mount=from=maptools,source=/identity-map.cjs,target=/tmp/recall-map.cjs \
    node /tmp/recall-copy-vendor-maps.cjs \
    && node /tmp/recall-map.cjs docs/js/online.js docs/_site/js/online.js docs/js/online.js \
    && node /tmp/recall-map.cjs docs/vendor/codemirror/lint.js docs/_site/vendor/codemirror/lint.js docs/vendor/codemirror/lint.js


FROM nginx:stable-alpine@sha256:583b7f2fce1cdb8da5ad5c39ebd3c33b98b87d493190e548bdee1fa8c619c311 AS runtime
COPY --from=build /app/docs/_site/ /usr/share/nginx/html/
