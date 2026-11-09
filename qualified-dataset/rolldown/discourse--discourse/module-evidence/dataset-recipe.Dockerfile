ARG RECALL_RUNTIME_BASE=build
FROM discourse/base:release@sha256:7a9939472b66a4adada01617be443a24606c9b1e3bc2502bb0fdb87b249d2c07 AS build
USER root
RUN ruby --version && gem install bundler --version 4.0.23 --no-document \
    && npm install --global pnpm@12.11.2
WORKDIR /src
RUN chown discourse:discourse /src
COPY --chown=discourse:discourse . .
USER discourse
RUN --mount=type=cache,id=recall-discourse-rubygems,target=/home/discourse/.bundle/cache,uid=1000,gid=1000 \
    bundle config set --local path vendor/bundle \
    && bundle config set --local without development:test \
    && sed -i 's/\r$//' Gemfile.lock \
    && grep -Fx '  ruby 4.0.7' Gemfile.lock \
    && ruby -e 'abort unless RUBY_VERSION == "4.0.9"' \
    && sed -i '/^RUBY VERSION$/{n;s/^  ruby 4\.0\.7$/  ruby 4.0.9/;}' Gemfile.lock \
    && bundle config set --local frozen true \
    && bundle install --jobs=2 --retry=3
RUN --mount=type=cache,id=recall-discourse-pnpm,target=/tmp/pnpm-store,uid=1000,gid=1000 \
    sed -i 's/\r$//' pnpm-lock.yaml \
    && pnpm install --frozen-lockfile --store-dir=/tmp/pnpm-store \
    && ruby -e 'abort "Installed pnpm lock differs" unless File.read("node_modules/.pnpm/lock.yaml") == File.read("pnpm-lock.yaml").split(/^---\n/).last'
ARG RECALL_COMMIT
RUN --mount=from=sourcegit,target=/tmp/recall-sourcegit \
    sed -i 's/\r$//' bin/rake bin/rails script/assemble_ember_build.rb \
    && chmod +x bin/rake bin/rails script/assemble_ember_build.rb \
    && git init --quiet \
    && for entry in HEAD index objects refs packed-refs shallow; do \
        if test -e "/tmp/recall-sourcegit/$entry"; then cp -a "/tmp/recall-sourcegit/$entry" .git/; fi; \
    done \
    && test "$(git rev-parse HEAD)" = "$RECALL_COMMIT" \
    && RAILS_ENV=production EMBER_ENV=production NODE_ENV=production \
    DISCOURSE_DOWNLOAD_PRE_BUILT_ASSETS=0 SKIP_DB_AND_REDIS=1 \
    bundle exec rake assets:precompile \
    && test -s frontend/discourse/dist/manifest/manifest.json \
    && test -d public/assets \
    && rm -rf .git
ENV RAILS_ENV=production NODE_ENV=production
ENV DISCOURSE_SERVE_STATIC_ASSETS=true
ENV UNICORN_LISTENER=0.0.0.0:3000 UNICORN_WORKERS=1 UNICORN_SIDEKIQS=1
RUN printf '{"git_version":"%s"}\n' "$RECALL_COMMIT" > config/git-utils-overrides.json \
    && sed -i 's/\r$//' script/discourse_vips_worker \
    && chmod +x script/discourse_vips_worker
EXPOSE 3000
ENTRYPOINT []
CMD ["sh", "-c", "bundle exec rake db:migrate db:seed && exec bundle exec pitchfork -c config/pitchfork.conf.rb"]

FROM ${RECALL_RUNTIME_BASE} AS browser-maps
RUN --network=none \
    --mount=from=maptools,source=/identity-map.cjs,target=/tmp/recall-map.cjs \
    --mount=from=recipe,source=/publish-browser-maps.rb,target=/tmp/publish-browser-maps.rb \
    printf '%s\n' \
      'b20de4122cfdffdc457098b29269b00ee7b60838e633010c3e3c6a99679de5ea  frontend/discourse/scripts/js/browser-detect.js' \
      '99d8444465945ecc8c52b4af0c6a230a3ebd6bea1570bcfcfebb364745064672  frontend/discourse/scripts/js/browser-update.js' | sha256sum -c - \
    && for file in frontend/discourse/scripts/js/browser-detect.js frontend/discourse/scripts/js/browser-update.js; do \
         node /tmp/recall-map.cjs "$file" "$file" "$file" || exit; \
       done \
    && SKIP_DB_AND_REDIS=1 bundle exec rails runner /tmp/publish-browser-maps.rb
