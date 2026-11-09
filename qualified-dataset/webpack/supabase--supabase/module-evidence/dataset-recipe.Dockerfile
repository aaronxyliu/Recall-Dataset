FROM node:24-bookworm
WORKDIR /app
COPY . .
ENV npm_config_registry=https://registry.npmmirror.com
RUN npm install -g pnpm@11.13.1
# Recent pnpm versions read the registry from the workspace configuration.
RUN printf '\nregistry: https://registry.npmmirror.com\n' >> pnpm-workspace.yaml && test "$(pnpm config get registry | sed 's|/$||')" = https://registry.npmmirror.com
RUN --mount=type=cache,id=recall-supabase-pnpm,target=/pnpm-store pnpm install --store-dir /pnpm-store --frozen-lockfile --filter www...
ENV NODE_OPTIONS=--max-old-space-size=5120
ENV NEXT_TELEMETRY_DISABLED=1
ENV FORCE_ASSET_CDN=-1
# Follow the www README's example configuration for the public site; omit private service credentials.
ADD --checksum=sha256:9116ec25c31f162e6ffb5df94dc9498756a8e97c36ffcdc91809ffbabca45f4a https://raw.githubusercontent.com/supabase/supabase/aa9d04e4f77447e2b6aaf317b686007aff05aa96/apps/www/.env.local.example /tmp/recall-www.env.example
RUN awk '/^NEXT_PUBLIC_/ { print }' /tmp/recall-www.env.example > apps/www/.env.local
# Survey charts create their client at import time. Reuse the pinned generator's local development defaults.
RUN node - <<'JS'
const fs = require('node:fs');
const root = 'apps/www/';
const generator = fs.readFileSync(root + 'scripts/generate-state-of-startups-data.ts', 'utf8');
for (const [setting, variable] of [['URL', 'NEXT_PUBLIC_SURVEY_SUPABASE_URL'], ['KEY', 'NEXT_PUBLIC_SURVEY_SUPABASE_ANON_KEY']]) {
  const fallback = generator.match(new RegExp("const " + setting + " = [^\n]+?\\?\\? '([^']+)'"));
  if (!fallback) throw new Error('Missing pinned development setting: ' + setting);
  fs.appendFileSync(root + '.env.local', variable + '=' + fallback[1] + '\n');
}
JS
RUN pnpm --filter www run content:build:core
# The studio workspace at this commit ships the fonts requested by the marketing site.
RUN cp -R apps/studio/fonts/inter apps/studio/fonts/manrope apps/studio/fonts/source-code-pro apps/www/fonts/
COPY <<'FONT_CONFIG' /app/apps/www/fonts/index.ts
import localFont from 'next/font/local'

export const inter = localFont({
  src: './inter/InterVariable.woff2', weight: '100 900', display: 'swap', variable: '--font-inter',
  fallback: ['system-ui', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
})
export const manrope = localFont({
  src: './manrope/manrope-latin-wght-normal.woff2', weight: '200 800', display: 'swap', variable: '--font-manrope',
  fallback: ['system-ui', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
})
export const sourceCodePro = localFont({
  src: './source-code-pro/SourceCodePro-Variable.woff2', weight: '200 900', display: 'swap', variable: '--font-source-code-pro',
  fallback: ['Source Code Pro', 'Office Code Pro', 'Menlo', 'monospace'],
})
FONT_CONFIG
# Bound worker memory and omit Sentry upload maps from this local build.
RUN sed -i '/^  experimental: {/a\    cpus: 1, webpackMemoryOptimizations: true,' apps/www/next.config.mjs && sed -i 's/widenClientFileUpload: true,/widenClientFileUpload: false, sourcemaps: { disable: true },/' apps/www/next.config.mjs
RUN sed -i 's|const nextConfig = {|const nextConfig = {productionBrowserSourceMaps:true,|' apps/www/next.config.mjs
RUN pnpm --filter www run build:next
WORKDIR /app/apps/www
CMD ["pnpm","exec","next","start","-H","0.0.0.0"]
