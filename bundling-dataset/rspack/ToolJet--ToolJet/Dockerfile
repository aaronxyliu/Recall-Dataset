FROM node:22.23.4-bookworm AS builder

# Fix for JS heap limit allocation issue
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm i -g npm@10.9.9
RUN mkdir -p /app

WORKDIR /app

# Scripts for building
COPY ./package.json ./package.json

# Build plugins
COPY ./plugins/package.json ./plugins/package-lock.json ./plugins/
ENV npm_config_maxsockets=8 npm_config_fetch_retries=4 npm_config_fetch_retry_mintimeout=3000 npm_config_fetch_retry_maxtimeout=30000
RUN --mount=type=cache,id=recall-tooljet-npm,target=/root/.npm npm --prefix plugins ci
COPY ./plugins/ ./plugins/
ENV NX_DAEMON=false NX_ISOLATE_PLUGINS=false NX_NATIVE_COMMAND_RUNNER=false NX_TASKS_RUNNER_DYNAMIC_OUTPUT=false
COPY --from=recipe build-plugin-projects.cjs /tmp/recall-build-plugin-projects.cjs
RUN node -e "const fs=require('fs'),p='plugins/package.json',j=JSON.parse(fs.readFileSync(p)); if(j.scripts['build:packages']!=='node build-packages.js'||j.scripts['clean:packages']!=='node clean-packages.js') throw Error('upstream task changed'); j.scripts['build:packages']='node /tmp/recall-build-plugin-projects.cjs build'; j.scripts['clean:packages']='node /tmp/recall-build-plugin-projects.cjs clean'; fs.writeFileSync(p,JSON.stringify(j,null,2));"
RUN NODE_ENV=production npm --prefix plugins run build
RUN npm --prefix plugins prune --omit=dev

# Copy shared widget-definitions package (required by frontend + server file: dependency)
COPY ./packages/widget-definitions/package.json ./packages/widget-definitions/package.json
COPY ./packages/widget-definitions/src/ ./packages/widget-definitions/src/


ENV NODE_ENV=production

# Build server
COPY ./server/package.json ./server/package-lock.json ./server/
RUN --mount=type=cache,id=recall-tooljet-npm,target=/root/.npm npm_config_jobs=2 npm --prefix server ci --include=dev --foreground-scripts
COPY ./server/ ./server/
RUN node server/scripts/compress-templates.js
RUN npm --prefix server run build

# Browser assets are architecture-independent; build them on the host platform.
# The backend remains amd64 because its IBM driver does not support Linux arm64.
FROM --platform=$BUILDPLATFORM node:22.23.4-bookworm AS frontend-builder
WORKDIR /app
ENV NODE_OPTIONS=--max-old-space-size=4096
ENV npm_config_maxsockets=8 npm_config_fetch_retries=4 npm_config_fetch_retry_mintimeout=3000 npm_config_fetch_retry_maxtimeout=30000
RUN npm i -g npm@10.9.9
COPY ./packages/widget-definitions/package.json ./packages/widget-definitions/package.json
COPY ./packages/widget-definitions/src/ ./packages/widget-definitions/src/
# Build frontend
COPY ./frontend/package.json ./frontend/package-lock.json ./frontend/
RUN --mount=type=cache,id=recall-tooljet-npm,target=/root/.npm npm --prefix frontend ci
COPY ./frontend/ ./frontend/
COPY --from=builder /app/plugins/client.js /app/plugins/package.json ./plugins/
COPY --from=builder /app/plugins/packages ./plugins/packages
COPY --from=recipe enable-maps.cjs /tmp/recall-enable-maps.cjs
COPY --from=recipe attach-recorder-maps.cjs media-encoder-host-8.1.0.worker.js.map extendable-media-recorder-wav-encoder-7.0.135.worker.js.map /tmp/recall-maps/
RUN node /tmp/recall-enable-maps.cjs \
    && node /tmp/recall-maps/attach-recorder-maps.cjs \
    && NODE_ENV=production TOOLJET_EDITION=ce TOOLJET_SERVER_URL=/ ASSET_PATH=/ RAYON_NUM_THREADS=3 npm --prefix frontend run build \
    && find frontend/build -maxdepth 1 -name '*.js.map' -print -quit | grep -q .



FROM node:22.23.4-bookworm AS runtime
RUN sed -i 's|http://deb.debian.org|https://deb.debian.org|g' /etc/apt/sources.list.d/debian.sources \
    && apt-get update -o Acquire::Retries=3 \
    && apt-get install -y --no-install-recommends postgresql-client freetds-dev libaio1 libxml2 redis-server tini procps \
    && rm -rf /var/lib/apt/lists/*
COPY ./docker/icu-tz /usr/local/share/icu-tz
ENV ICU_TIMEZONE_FILES_DIR=/usr/local/share/icu-tz
RUN node -e "if (process.versions.tz < '2026e') throw new Error('stale tz data: ' + process.versions.tz)"
ENV NODE_ENV=production NODE_OPTIONS=--max-old-space-size=4096 TOOLJET_EDITION=ce SERVE_CLIENT=true
WORKDIR /

RUN mkdir -p /app
# copy npm scripts
COPY --from=builder /app/package.json ./app/package.json
# copy plugins dependencies
COPY --from=builder /app/plugins/dist ./app/plugins/dist
COPY --from=builder /app/plugins/client.js ./app/plugins/client.js
COPY --from=builder /app/plugins/node_modules ./app/plugins/node_modules
COPY --from=builder /app/plugins/packages/common ./app/plugins/packages/common
COPY --from=builder /app/plugins/package.json ./app/plugins/package.json
# copy frontend build
COPY --from=frontend-builder /app/frontend/build ./app/frontend/build
# copy widget-definitions (server node_modules symlinks to this)
COPY --from=builder /app/packages/widget-definitions ./app/packages/widget-definitions

# copy server build
COPY --from=builder /app/server/package.json ./app/server/package.json
COPY --from=builder /app/server/.version ./app/server/.version
COPY --from=builder /app/server/node_modules ./app/server/node_modules
COPY --from=builder /app/server/templates ./app/server/templates
COPY --from=builder /app/server/scripts ./app/server/scripts
COPY --from=builder /app/server/dist ./app/server/dist

COPY ./docker/ce-entrypoint.sh ./app/server/entrypoint.sh
RUN sed -i 's/\r$//' /app/server/entrypoint.sh /app/server/scripts/wait-for-it.sh \
    && chmod +x /app/server/entrypoint.sh /app/server/scripts/wait-for-it.sh

# Define non-sudo user and set up Redis dirs in one layer (appuser must exist before chown)
RUN useradd --create-home --home-dir /home/appuser appuser \
    && chown -R appuser:0 /app \
    && chown -R appuser:0 /home/appuser \
    && chmod u+x /app \
    && chmod -R g=u /app \
    && mkdir -p /var/lib/redis /var/log/redis \
    && chown -R appuser:0 /var/lib/redis /var/log/redis \
    && chmod -R g=u /var/lib/redis /var/log/redis
# Configure Redis — bind to localhost only, daemonized, no persistence needed for CE single-instance
# Written to /app (appuser-owned) to avoid /etc/redis permission issues
RUN printf 'bind 127.0.0.1\nport 6379\nprotected-mode yes\ndaemonize yes\nlogfile /var/log/redis/redis.log\ndir /var/lib/redis\n' \
    > /app/redis.conf

# Set npm cache directory
ENV npm_config_cache /home/appuser/.npm

ENV HOME=/home/appuser
USER appuser

WORKDIR /app
# Dependencies for scripts outside nestjs
RUN npm install dotenv@10.0.0 joi@17.4.1

# Upstream map for the exact bundled Pyodide 0.23.2 distribution.
RUN echo '43f80dded4ea2241535d5541ad2f58d50f1814f6b2ae3a7b4b326ed865673316  frontend/build/assets/libs/pyodide-0.23.2/pyodide.js' | sha256sum -c -
COPY --from=recipe pyodide-0.23.2.js.map /app/frontend/build/assets/libs/pyodide-0.23.2/pyodide.js.map

ENTRYPOINT ["/usr/bin/tini", "-g", "--", "./server/entrypoint.sh"]

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
