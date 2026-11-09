FROM node:24-bookworm AS build
WORKDIR /app
RUN sed -i 's|http://deb.debian.org|https://deb.debian.org|g' /etc/apt/sources.list.d/debian.sources && apt-get -o Acquire::Retries=3 update && apt-get install -y --no-install-recommends rsync libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev && rm -rf /var/lib/apt/lists/*
COPY . .
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund
RUN npm run presite && test -s site/static/bundle.js

FROM ruby:3.4-bookworm AS site
WORKDIR /site
COPY --from=recipe bundler-2.6.3.gem /tmp/bundler-2.6.3.gem
RUN echo '29f9386f7b2688b2b4c5e9024058debd91ef88599f33489f62ebcc8898c8c8a3  /tmp/bundler-2.6.3.gem' | sha256sum -c - \
    && gem install --local /tmp/bundler-2.6.3.gem --no-document
COPY --from=build /app/site/ ./
RUN --mount=type=cache,target=/usr/local/bundle/cache \
    BUNDLE_FROZEN=true BUNDLE_TIMEOUT=20 bundle _2.6.3_ install --retry=3
RUN bundle _2.6.3_ exec jekyll build --destination /out --baseurl /vega-lite \
    && test -s /out/static/bundle.js && test -s /out/examples/bar.html


FROM nginx:stable-alpine AS runtime
COPY --from=site /out/ /usr/share/nginx/html/vega-lite/
