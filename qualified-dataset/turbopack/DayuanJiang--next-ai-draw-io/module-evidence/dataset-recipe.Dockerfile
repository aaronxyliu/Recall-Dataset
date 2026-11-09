# Multi-stage Dockerfile for Next.js
ARG RECALL_RUNTIME_BASE=runner

# Stage 1: Install dependencies
FROM node:24-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
ARG ELECTRON_SKIP_BINARY_DOWNLOAD=1
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund

# Stage 2: Build application
FROM node:24-alpine AS builder
WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY --from=recipe enable-maps.cjs /tmp/recall-enable-maps.cjs
RUN node /tmp/recall-enable-maps.cjs

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1 NODE_USE_ENV_PROXY=1 RAYON_NUM_THREADS=3 NODE_OPTIONS=--max-old-space-size=4096

# Build-time argument for an external draw.io URL. Leave empty to use the
# copy bundled into public/drawio (downloaded by `npm run build`)
ARG NEXT_PUBLIC_DRAWIO_BASE_URL=""
ENV NEXT_PUBLIC_DRAWIO_BASE_URL=${NEXT_PUBLIC_DRAWIO_BASE_URL}

# Build-time argument to show About link and Notice icon
ARG NEXT_PUBLIC_SHOW_ABOUT_AND_NOTICE=false
ENV NEXT_PUBLIC_SHOW_ABOUT_AND_NOTICE=${NEXT_PUBLIC_SHOW_ABOUT_AND_NOTICE}

# Build-time argument for subdirectory deployment (e.g., /nextaidrawio)
ARG NEXT_PUBLIC_BASE_PATH=""
ENV NEXT_PUBLIC_BASE_PATH=${NEXT_PUBLIC_BASE_PATH}

# Control sponsorship and self-hosting messaging in quota notifications.
# Set NEXT_PUBLIC_SELFHOSTED="true" in self-hosted deployments to hide sponsorship/self-host links and related text in quota popups.
ARG NEXT_PUBLIC_SELFHOSTED=""
ENV NEXT_PUBLIC_SELFHOSTED="${NEXT_PUBLIC_SELFHOSTED}"

# Build Next.js application (standalone mode)
RUN npm run build

# Stage 3: Production runtime
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /app/public ./public

# Copy standalone build output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Writable dir for admin panel settings (data/settings.json)
RUN mkdir -p /app/data && chown nextjs:nodejs /app/data

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application (HOSTNAME override needed for AWS App Runner)
CMD ["sh", "-c", "HOSTNAME=0.0.0.0 exec node server.js"]

FROM ${RECALL_RUNTIME_BASE} AS browser-maps
USER root
COPY --from=recipe drawio-original-js.sha256 /tmp/drawio-original-js.sha256
RUN --mount=from=maptools,source=/identity-map.cjs,target=/tmp/recall-map.cjs \
    sha256sum -c /tmp/drawio-original-js.sha256 \
    && for file in bootstrap.js main.js PreConfig.js PostConfig.js; do \
         node /tmp/recall-map.cjs "public/drawio/js/$file" "public/drawio/js/$file" \
           "https://raw.githubusercontent.com/jgraph/drawio/v32.0.2/src/main/webapp/js/$file" || exit; \
       done
USER nextjs

