FROM node:22.23.4-bookworm AS build
WORKDIR /app
COPY . .
WORKDIR /app/playground
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates build-essential
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
RUN PATH="/root/.cargo/bin:$PATH" bash -lc "rustup target add wasm32-wasip2"
RUN npm i -g bun@1.4.4
RUN bun install --frozen-lockfile || bun install
RUN PATH="/root/.cargo/bin:$PATH" bash -lc "bun run build"

FROM nginx:1.27-alpine
COPY --from=build /app/playground/dist/ /usr/share/nginx/html/
