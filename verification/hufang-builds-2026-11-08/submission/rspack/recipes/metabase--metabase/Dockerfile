FROM eclipse-temurin:25.0.3_9-jdk-noble AS java
FROM oven/bun:1.3.14 AS bun
FROM ghcr.io/astral-sh/uv:0.10.2 AS uv
FROM node:22.23.4-bookworm AS builder
WORKDIR /home/node
COPY --from=java /opt/java/openjdk /opt/java/openjdk
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
COPY --from=uv /uv /usr/local/bin/uv
ENV JAVA_HOME=/opt/java/openjdk
ENV PATH=/opt/java/openjdk/bin:$PATH
RUN curl -fSL --retry 3 https://download.clojure.org/install/clojure-tools-1.12.0.1488.tar.gz -o /tmp/clojure-tools.tar.gz \
    && tar -xzf /tmp/clojure-tools.tar.gz -C /tmp \
    && cd /tmp/clojure-tools \
    && install -Dm644 deps.edn /usr/local/lib/clojure/deps.edn \
    && install -m644 example-deps.edn tools.edn /usr/local/lib/clojure/ \
    && install -d /usr/local/lib/clojure/libexec \
    && install -m644 ./*.jar /usr/local/lib/clojure/libexec/ \
    && sed -i 's|PREFIX|/usr/local/lib/clojure|g' clojure \
    && install -m755 clojure /usr/local/bin/clojure \
    && clojure -Sdescribe
COPY . .
RUN --mount=type=cache,id=recall-metabase-bun,target=/root/.bun/install/cache bun install --frozen-lockfile
ARG RECALL_COMMIT
ENV CI=true INTERACTIVE=false MB_EDITION=oss RAYON_NUM_THREADS=3
RUN --mount=from=sourcegit,target=/home/node/.git \
    --mount=type=cache,id=recall-metabase-m2,target=/root/.m2/repository \
    --mount=type=cache,id=recall-metabase-gitdeps,target=/root/.gitlibs \
    git config --global --add safe.directory /home/node \
    && test "$(git rev-parse HEAD)" = "$RECALL_COMMIT" \
    && chmod +x bin/build.sh \
    && JAVA_TOOL_OPTIONS='-XX:ActiveProcessorCount=4 -XX:MaxRAMPercentage=35' NODE_OPTIONS=--max-old-space-size=3584 bin/build.sh :version v0.65.3
RUN test -s target/uberjar/metabase.jar \
    && jar tf target/uberjar/metabase.jar >/tmp/recall-jar-contents \
    && grep -m 1 -E '^frontend_client/app/dist/.+\.js\.map$' /tmp/recall-jar-contents

FROM eclipse-temurin:25-jre-alpine AS runner

ENV FC_LANG=en-US LC_CTYPE=en_US.UTF-8

# copy certs before the RUN so keytool can import them
COPY bin/docker/DigiCertGlobalRootG2.crt.pem /app/certs/DigiCertGlobalRootG2.crt.pem

# dependencies
RUN apk add -U bash fontconfig curl font-noto font-noto-arabic font-noto-hebrew font-noto-cjk java-cacerts && \
    apk upgrade && \
    rm -rf /var/cache/apk/* && \
    sed -i 's|^mozilla/emSign_ECC_Root_CA_-_G3.crt|!&|' /etc/ca-certificates.conf && \
    update-ca-certificates && \
    /opt/java/openjdk/bin/keytool -list -v -cacerts -storepass changeit | awk '/^Alias name:/{a=substr($0,13)} /^Owner: CN=emSign ECC Root CA - G3,/{print a}' | while read -r a; do /opt/java/openjdk/bin/keytool -delete -cacerts -storepass changeit -alias "$a"; done && \
    mkdir -p /app/certs && \
    curl https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem -o /app/certs/rds-combined-ca-bundle.pem  && \
    /opt/java/openjdk/bin/keytool -noprompt -import -trustcacerts -alias aws-rds -file /app/certs/rds-combined-ca-bundle.pem -keystore /etc/ssl/certs/java/cacerts -keypass changeit -storepass changeit && \
    /opt/java/openjdk/bin/keytool -noprompt -import -trustcacerts -alias azure-cert -file /app/certs/DigiCertGlobalRootG2.crt.pem -keystore /etc/ssl/certs/java/cacerts -keypass changeit -storepass changeit && \
    mkdir -p /plugins && chmod a+rwx /plugins

COPY bin/docker/blocked.certs /app/certs/
RUN cat /app/certs/blocked.certs >> /opt/java/openjdk/lib/security/blocked.certs

# add Metabase script and uberjar
COPY --from=builder /home/node/target/uberjar/metabase.jar /app/
COPY bin/docker/run_metabase.sh /app/

# expose our default runtime port
EXPOSE 3000

# run it
ENTRYPOINT ["/app/run_metabase.sh"]
