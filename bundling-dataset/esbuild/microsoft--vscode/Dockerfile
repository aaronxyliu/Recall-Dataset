FROM node:24.22.1-bookworm
WORKDIR /app
COPY . .
RUN sed -i -e "s|http://deb.debian.org|https://mirrors.aliyun.com|g" -e "s|https://deb.debian.org|https://mirrors.aliyun.com|g" /etc/apt/sources.list.d/debian.sources && apt-get update && apt-get install -y libx11-dev libxkbfile-dev libsecret-1-dev libkrb5-dev
ENV npm_config_registry=https://registry.npmmirror.com
ENV npm_config_store_dir=/pnpm-store
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
RUN npm install -g pnpm@12.16.0 && pnpm config set --global registry https://registry.npmmirror.com
# Seed the exact type file that postinstall verifies against build/checksums/electron.txt.
ADD --checksum=sha256:54f07e857a5762c9e246e759e0b5db936edb54a4116b10e457aac4cf81de744a https://registry.npmmirror.com/electron/-/electron-43.8.6.tgz /tmp/electron.tgz
RUN mkdir -p .build/typings && tar xOzf /tmp/electron.tgz package/electron.d.ts > .build/typings/electron.d.ts && cd .build/typings && grep ' \*electron.d.ts$' /app/build/checksums/electron.txt | sha256sum -c -
# Recent pnpm versions read the registry from the workspace configuration.
RUN printf '\nregistry: https://registry.npmmirror.com\nstoreDir: /pnpm-store\n' >> pnpm-workspace.yaml && test "$(pnpm config get registry | sed 's|/$||')" = https://registry.npmmirror.com
RUN --mount=type=cache,id=recall-vscode-pnpm,target=/pnpm-store pnpm install --store-dir /pnpm-store --frozen-lockfile
RUN --mount=type=cache,id=recall-vscode-pnpm,target=/pnpm-store pnpm run gulp vscode-web-min
# Register this local production output in the pinned test-web server's build cache.
RUN test -d /vscode-web/out && mkdir -p /local-builds && ln -s /vscode-web /local-builds/vscode-web-stable-e13716ce975fc4597cb8c2228471ac4783bf4529 && echo e13716ce975fc4597cb8c2228471ac4783bf4529 > /vscode-web/version
CMD ["pnpm","exec","vscode-test-web","--testRunnerDataDir","/local-builds","--quality","stable","--commit","e13716ce975fc4597cb8c2228471ac4783bf4529","--host","0.0.0.0","--port","3000","--browserType","none"]
