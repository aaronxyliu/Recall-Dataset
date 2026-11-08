const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_-o3cHJYVT.js","assets/index-ARRzLOvi.js","assets/index-CzzUskj_.css","assets/YoutubePlayerDialog-D78kqJq3.js","assets/brain-circuit-B5-uH4ME.js","assets/use-article-sticky-overlay-BmpZLZtS.js","assets/nav-styles-Bl4WbPP2.js","assets/nav-styles-y3R1GMPI.js","assets/ImagePreviewGallery-DrTbkPuP.js","assets/DocsLayout-CBI_0x51.js","assets/DocsSectionSubnav-BDRfbWK9.js","assets/navigation-BPXr6JMT.js","assets/agent-docs-feature-DZqo2FV3.js","assets/docs-container-BRXpuNDF.js","assets/Youtube-RAG0ZzzJ.js","assets/code-xml-pnMJjP_H.js","assets/command-J8Ge5sEv.js","assets/image-CD06jrpB.js","assets/layout-grid-2dp0Gx3W.js","assets/play-CU2MYVwO.js","assets/trophy-oSDJemYn.js","assets/type-DPvYJsRv.js","assets/DocsHeadingLink-BYpBZ1P7.js","assets/link-2-CLWFk7l3.js","assets/prose-link-BSplGJfw.js","assets/link-styles-BP7-GDhn.js","assets/prose-typography-D7HOqO0t.js","assets/markdoc-heading-N7wfNe2d.js","assets/slugify-aIbkugFs.js","assets/ide-k8h5gEyK.js","assets/home-content-DrfybW_x.js","assets/arrow-up-down-DFeOEWWL.js","assets/server-Cptdhyc_.js","assets/share-2-CjVscnOA.js","assets/parse-params-DRixauh_.js","assets/docs-scroll-DcjEGwKa.js","assets/docs-slug-C5RROyDR.js","assets/feature-gated-docs-CGR3YWeB.js","assets/route-meta-CMCRgMPg.js","assets/route-head-BQRfaoJg.js","assets/indexing-CWCsPP1b.js","assets/_-BVNRB2Op.js"])))=>i.map(i=>d[i]);
import{n as e,t}from"./lazyRouteComponent-DuwTJ5fo.js";import{En as n,Kp as r,Lit as i,Ms as a,Ns as o,Od as s,Rd as c,Tn as l,Uet as u,Wd as ee,_st as d,em as te,est as ne,g as re,jit as ie,kP as f,kd as ae,m as p,mst as m,pot as oe,pst as h,qet as g,qit as se,xst as _}from"./index-ARRzLOvi.js";import{t as v}from"./feature-gated-docs-CGR3YWeB.js";import{t as ce}from"./toc-BrPQZju3.js";import{n as le}from"./ImagePreviewGallery-DrTbkPuP.js";import{i as y,n as ue}from"./YoutubePlayerDialog-D78kqJq3.js";import{C as de,D as fe,E as pe,S as me,T as he,_ as ge,a as _e,b as ve,c as ye,d as b,f as x,g as S,h as C,i as w,l as T,m as E,n as D,o as O,p as k,r as A,s as j,t as M,u as N,v as P,w as be,x as xe,y as Se}from"./Youtube-RAG0ZzzJ.js";import{n as F}from"./json-ld-GMCG02Nl.js";import{i as Ce,n as we,r as Te,t as Ee}from"./route-meta-CMCRgMPg.js";const De=`docs-content-hmr`;var I=_(d(),1),L=_(ne(),1),R=(0,I.createContext)({promptText:null});function Oe({promptText:e,children:t}){return(0,L.jsx)(R.Provider,{value:{promptText:e},children:t})}function ke(){return(0,I.useContext)(R)}const Ae=[`postgresql`,`mariadb`,`mongodb`],je={combined:[`appwrite-worker`,`appwrite-task-scheduler`],separate:[`appwrite-worker-stats-usage`,`appwrite-worker-stats-resources`,`appwrite-task-stats-resources`,`appwrite-task-scheduler-maintenance`,`appwrite-worker-maintenance`,`appwrite-worker-webhooks`,`appwrite-worker-deletes`,`appwrite-worker-databases`,`appwrite-worker-builds`,`appwrite-worker-jobs`,`appwrite-worker-screenshots`,`appwrite-worker-certificates`,`appwrite-worker-executions`,`appwrite-worker-functions`,`appwrite-worker-mails`,`appwrite-worker-notifications`,`appwrite-worker-messaging`,`appwrite-worker-migrations`,`appwrite-task-scheduler-functions`,`appwrite-task-scheduler-executions`,`appwrite-task-scheduler-messages`]},z=`appwrite-autogravity`,Me={postgresql:[`appwrite-postgresql`],mariadb:[`appwrite-mariadb`],mongodb:[`appwrite-mongodb`,`appwrite-mongodb-keyfile`]},Ne=[{name:`traefik`,block:`  traefik:
    image: traefik:3.6
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-traefik
    command:
      - --providers.file.directory=/storage/config
      - --providers.file.watch=true
      - --providers.docker=true
      - --providers.docker.exposedByDefault=false
      - --providers.docker.constraints=Label(\`traefik.constraint-label-stack\`,\`appwrite\`)
      - --entrypoints.appwrite_web.address=:80
      - --entrypoints.appwrite_websecure.address=:443
      - --entrypoints.appwrite_mqtt.address=:8883
      - --entrypoints.appwrite_mqtt_ws.address=:8084
    ports:
      - \${_APP_HTTP_PORT:-80}:80
      - \${_APP_HTTPS_PORT:-443}:443
      - \${_APP_MQTT_PORT:-8883}:8883
      - \${_APP_MQTT_WSS_PORT:-8084}:8084
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - appwrite-config:/storage/config:ro
      - appwrite-certificates:/storage/certificates:ro
    depends_on:
      - appwrite
    networks:
      - gateway
      - appwrite`},{name:`appwrite`,block:`  appwrite:
    container_name: appwrite
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    image: appwrite/appwrite:2.6.2
    # The marker is APP_READINESS_MARKER, written by app/http.php once the core schema exists.
    healthcheck:
      test:
        - CMD-SHELL
        - 'test -f /tmp/.appwrite-ready && curl -fsS -o /dev/null -H "Host: $\${_APP_DOMAIN:-localhost}"
          http://localhost/v1/health/version'
      interval: 5s
      timeout: 5s
      retries: 12
      start_period: 120s
    networks:
      - appwrite
      - browser
    labels:
      - traefik.enable=true
      - traefik.constraint-label-stack=appwrite
      - traefik.docker.network=appwrite
      - traefik.http.services.appwrite_api.loadbalancer.server.port=80
      - traefik.http.routers.appwrite_api_http.entrypoints=appwrite_web
      - traefik.http.routers.appwrite_api_http.rule=PathPrefix(\`/\`)
      - traefik.http.routers.appwrite_api_http.service=appwrite_api
      - traefik.http.routers.appwrite_api_https.entrypoints=appwrite_websecure
      - traefik.http.routers.appwrite_api_https.rule=PathPrefix(\`/\`)
      - traefik.http.routers.appwrite_api_https.service=appwrite_api
      - traefik.http.routers.appwrite_api_https.tls=true
    volumes:
      - appwrite-uploads:/storage/uploads:rw
      - appwrite-imports:/storage/imports:rw
      - appwrite-cache:/storage/cache:rw
      - appwrite-config:/storage/config:rw
      - appwrite-certificates:/storage/certificates:rw
      - appwrite-functions:/storage/functions:rw
      - appwrite-sites:/storage/sites:rw
      - appwrite-builds:/storage/builds:rw
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
      - appwrite-geo
      - appwrite-autogravity
      - appwrite-exiftool
    environment:
      - _APP_DNS_EXTERNAL
      - _APP_ALLOWED_INTERNAL_ADDRESSES
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_USAGE_STATS
      - _APP_USAGE_PASS
      - _APP_CONNECTIONS_DB_USAGE
      - _APP_POOL_SIZE_USAGE
      - _APP_CONNECTIONS_DB_EXECUTIONS
      - _APP_POOL_SIZE_EXECUTIONS
      - _APP_MAINTENANCE_RETENTION_USAGE_TTL
      - _APP_STATS_USAGE_QUEUE_NAME
      - _APP_STATS_RESOURCES_QUEUE_NAME
      - _APP_STATS_RESOURCES_INTERVAL
      - _APP_EDITION
      - _APP_WORKER_PER_CORE
      - _APP_LOCALE
      - _APP_COMPRESSION_ENABLED
      - _APP_COMPRESSION_MIN_SIZE_BYTES
      - _APP_CONSOLE_WHITELIST_ROOT
      - _APP_CONSOLE_WHITELIST_EMAILS
      - _APP_CONSOLE_SESSION_ALERTS
      - _APP_CONSOLE_WHITELIST_IPS
      - _APP_CONSOLE_HOSTNAMES
      - _APP_CONSOLE_SCHEMA
      - _APP_CONSOLE_GITHUB_APP_ID
      - _APP_CONSOLE_GITHUB_SECRET
      - _APP_CONSOLE_GITLAB_APP_ID
      - _APP_CONSOLE_GITLAB_SECRET
      - _APP_CONSOLE_GITLAB_ENDPOINT
      - _APP_CONSOLE_BITBUCKET_APP_ID
      - _APP_CONSOLE_BITBUCKET_SECRET
      - _APP_CONSOLE_GOOGLE_APP_ID
      - _APP_CONSOLE_GOOGLE_SECRET
      - _APP_SYSTEM_EMAIL_NAME
      - _APP_SYSTEM_EMAIL_ADDRESS
      - _APP_SYSTEM_TEAM_EMAIL
      - _APP_EMAIL_SECURITY
      - _APP_SYSTEM_RESPONSE_FORMAT
      - _APP_OPTIONS_ABUSE
      - _APP_OPTIONS_ABUSE_INCREASED_LIMIT_PROJECTS
      - _APP_OPTIONS_ROUTER_PROTECTION
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_OPTIONS_ROUTER_FORCE_HTTPS
      - _APP_ROUTER_AUTO_CERTIFICATES
      - _APP_OPENSSL_KEY_V1
      - _APP_NOTIFICATIONS_TRACKING_SECRET
      - _APP_DOMAIN
      - _APP_CONSOLE_DOMAIN
      - _APP_CONSOLE_URL
      - _APP_CONSOLE_TRUSTED_PROJECTS
      - _APP_DOMAIN_TARGET_CNAME
      - _APP_DOMAIN_TARGET_AAAA
      - _APP_DOMAIN_TARGET_A
      - _APP_DOMAIN_TARGET_CAA
      - _APP_DNS
      - _APP_DOMAIN_FUNCTIONS
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_SMTP_HOST
      - _APP_SMTP_PORT
      - _APP_SMTP_SECURE
      - _APP_SMTP_USERNAME
      - _APP_SMTP_PASSWORD
      - _APP_STORAGE_LIMIT
      - _APP_STORAGE_PREVIEW_LIMIT
      - _APP_AUTOGRAVITY_HOST
      - _APP_EXIFTOOL_HOST
      - _APP_STORAGE_ANTIVIRUS
      - _APP_STORAGE_ANTIVIRUS_HOST
      - _APP_STORAGE_ANTIVIRUS_PORT
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_S3_ENDPOINT
      - _APP_STORAGE_S3_PATH_STYLE
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
      - _APP_COMPUTE_SIZE_LIMIT
      - _APP_COMPUTE_BUILD_SIZE_LIMIT
      - _APP_FUNCTIONS_TIMEOUT
      - _APP_SITES_TIMEOUT
      - _APP_COMPUTE_BUILD_TIMEOUT
      - _APP_COMPUTE_CPUS
      - _APP_COMPUTE_MEMORY
      - _APP_FUNCTIONS_RUNTIMES
      - _APP_SITES_RUNTIMES
      - _APP_DOMAIN_SITES
      - _APP_EXECUTOR_SECRET
      - _APP_EXECUTOR_HOST
      - _APP_BUILDS_VOLUME
      - _APP_JOBS_HOST
      - _APP_JOBS_SECRET
      - _APP_JOBS_ENDPOINT
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_LOCKING_ENABLED
      - _APP_MAINTENANCE_INTERVAL
      - _APP_MAINTENANCE_RETENTION_EXECUTION
      - _APP_MAINTENANCE_RETENTION_CACHE
      - _APP_MAINTENANCE_RETENTION_ABUSE
      - _APP_MAINTENANCE_RETENTION_AUDIT
      - _APP_MAINTENANCE_RETENTION_AUDIT_CONSOLE
      - _APP_MAINTENANCE_RETENTION_SCHEDULES
      - _APP_SMS_PROVIDER
      - _APP_SMS_FROM
      - _APP_GRAPHQL_INTROSPECTION
      - _APP_GRAPHQL_MAX_BATCH_SIZE
      - _APP_GRAPHQL_MAX_COMPLEXITY
      - _APP_GRAPHQL_MAX_DEPTH
      - _APP_VCS_GITHUB_APP_NAME
      - _APP_VCS_GITHUB_PRIVATE_KEY
      - _APP_VCS_GITHUB_APP_ID
      - _APP_VCS_GITHUB_WEBHOOK_SECRET
      - _APP_VCS_GITHUB_CLIENT_SECRET
      - _APP_VCS_GITHUB_CLIENT_ID
      - _APP_VCS_GITEA_ENDPOINT
      - _APP_VCS_GITEA_BROWSER_ENDPOINT
      - _APP_VCS_GITEA_CLIENT_ID
      - _APP_VCS_GITEA_CLIENT_SECRET
      - _APP_VCS_GITEA_WEBHOOK_SECRET
      - _APP_VCS_GITLAB_ENDPOINT
      - _APP_VCS_GITLAB_CLIENT_ID
      - _APP_VCS_GITLAB_CLIENT_SECRET
      - _APP_VCS_GITLAB_WEBHOOK_SECRET
      - _APP_VCS_BITBUCKET_CLIENT_ID
      - _APP_VCS_BITBUCKET_CLIENT_SECRET
      - _APP_VCS_BITBUCKET_WEBHOOK_SECRET
      - _APP_VCS_ORIGIN_CLIENT_ID
      - _APP_VCS_ORIGIN_PRIVATE_KEY
      - _APP_VCS_ENTIRE_PLUGIN
      - _APP_VCS_ENTIRE_PRIVATE_KEY
      - _APP_VCS_ENTIRE_ISSUER
      - _APP_VCS_ENTIRE_ENDPOINT
      - _APP_VCS_WEBHOOK_URL
      - _APP_MIGRATIONS_FIREBASE_CLIENT_ID
      - _APP_MIGRATIONS_FIREBASE_CLIENT_SECRET
      - _APP_CONSOLE_COUNTRIES_DENYLIST
      - _APP_DATABASE_SHARED_TABLES
      - _APP_DATABASE_SHARED_NAMESPACE
      - _APP_FUNCTIONS_CREATION_ABUSE_LIMIT
      - _APP_CUSTOM_DOMAIN_DENY_LIST
      - _APP_TRUSTED_HEADERS
      - _APP_TRUSTED_PROXIES
      - _APP_MIGRATION_HOST
      - _APP_GEO_SECRET
      - _APP_GEO_ENDPOINT
      - _APP_PWNED_PASSWORDS_DSN
      - _APP_LIMIT_DATABASE_BATCH
      - _APP_EMBEDDING`},{name:`appwrite-console`,block:'  appwrite-console:\n    logging:\n      driver: json-file\n      options:\n        max-file: "5"\n        max-size: 10m\n    container_name: appwrite-console\n    image: appwrite/new:1.2.108-self-hosted\n    restart: unless-stopped\n    networks:\n      - appwrite\n    environment:\n      - VITE_CONSOLE_PROFILE=self-hosted\n      - VITE_APPWRITE_VERSION=2.6.2\n      - APPWRITE_ENDPOINT_SAME_ORIGIN=true\n    labels:\n      - traefik.enable=true\n      - traefik.constraint-label-stack=appwrite\n      - traefik.docker.network=appwrite\n      - traefik.http.services.appwrite_console.loadbalancer.server.port=3000\n      - traefik.http.routers.appwrite_console_http.entrypoints=appwrite_web\n      - traefik.http.routers.appwrite_console_http.rule=(Host(`${_APP_DOMAIN:-localhost}`) || Host(`${_APP_CONSOLE_DOMAIN:-localhost}`)) && !PathPrefix(`/v1`) && !PathPrefix(`/.well-known`) && !HeaderRegexp(`x-appwrite-hostname`, `.+`)\n      - traefik.http.routers.appwrite_console_http.service=appwrite_console\n      - traefik.http.routers.appwrite_console_https.entrypoints=appwrite_websecure\n      - traefik.http.routers.appwrite_console_https.rule=(Host(`${_APP_DOMAIN:-localhost}`) || Host(`${_APP_CONSOLE_DOMAIN:-localhost}`)) && !PathPrefix(`/v1`) && !PathPrefix(`/.well-known`) && !HeaderRegexp(`x-appwrite-hostname`, `.+`)\n      - traefik.http.routers.appwrite_console_https.service=appwrite_console\n      - traefik.http.routers.appwrite_console_https.tls=true'},{name:`appwrite-realtime`,block:`  appwrite-realtime:
    entrypoint: realtime
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-realtime
    image: appwrite/appwrite:2.6.2
    restart: unless-stopped
    labels:
      - traefik.enable=true
      - traefik.constraint-label-stack=appwrite
      - traefik.docker.network=appwrite
      - traefik.http.services.appwrite_realtime.loadbalancer.server.port=80
      - traefik.http.routers.appwrite_realtime_ws.entrypoints=appwrite_web
      - traefik.http.routers.appwrite_realtime_ws.rule=PathPrefix(\`/v1/realtime\`)
      - traefik.http.routers.appwrite_realtime_ws.service=appwrite_realtime
      - traefik.http.routers.appwrite_realtime_wss.entrypoints=appwrite_websecure
      - traefik.http.routers.appwrite_realtime_wss.rule=PathPrefix(\`/v1/realtime\`)
      - traefik.http.routers.appwrite_realtime_wss.service=appwrite_realtime
      - traefik.http.routers.appwrite_realtime_wss.tls=true
    networks:
      - appwrite
    depends_on:
      - \${_APP_DB_HOST:-postgresql}
      - redis
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_USAGE_STATS
      - _APP_STATS_USAGE_QUEUE_NAME
      - _APP_WORKER_PER_CORE
      - _APP_OPTIONS_ABUSE
      - _APP_OPTIONS_ROUTER_PROTECTION
      - _APP_CONSOLE_HOSTNAMES
      - _APP_REALTIME_TAIL_RATE
      - _APP_LIMIT_REALTIME_SUBSCRIPTIONS
      - _APP_LIMIT_REALTIME_CHANNELS
      - _APP_LIMIT_REALTIME_QUERIES
      - _APP_OPENSSL_KEY_V1
      - _APP_TRUSTED_HEADERS
      - _APP_TRUSTED_PROXIES
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_DATABASE_SHARED_TABLES
      - _APP_LIMIT_DATABASE_BATCH
      - _APP_EMBEDDING`},{name:`appwrite-mqtt`,block:`  appwrite-mqtt:
    entrypoint: mqtt
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-mqtt
    image: appwrite/appwrite:2.6.2
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "php", "-r", "exit(@fsockopen('127.0.0.1', 1883) ? 0 : 1);"]
      interval: 5s
      timeout: 5s
      retries: 20
      start_period: 20s
    labels:
      - traefik.enable=true
      - traefik.constraint-label-stack=appwrite
      - traefik.docker.network=appwrite
      # TLS is terminated here (mqtts, :8883) and forwarded as plaintext MQTT to :1883,
      # mirroring how realtime's wss is terminated at the appwrite_websecure entrypoint.
      - traefik.tcp.routers.appwrite_mqtt.entrypoints=appwrite_mqtt
      - traefik.tcp.routers.appwrite_mqtt.rule=HostSNI(\`*\`)
      - traefik.tcp.routers.appwrite_mqtt.tls=true
      - traefik.tcp.routers.appwrite_mqtt.service=appwrite_mqtt
      - traefik.tcp.services.appwrite_mqtt.loadbalancer.server.port=1883
      # MQTT-over-WebSocket for browser clients: wss://<host>:8084 on its own TLS entrypoint
      # (a dedicated port, not a URL path), the WebSocket sibling of the mqtts TCP router. The
      # port identifies the broker, so a single push host serves both mqtts:// (:8883) and
      # wss:// (:8084). TLS-only, so the reusable CONNECT credential never crosses the wire in
      # the clear; TLS is terminated here and forwarded to the broker's WebSocket listener (:8083).
      - traefik.http.routers.appwrite_mqtt_ws.entrypoints=appwrite_mqtt_ws
      - traefik.http.routers.appwrite_mqtt_ws.rule=PathPrefix(\`/\`)
      - traefik.http.routers.appwrite_mqtt_ws.service=appwrite_mqtt_ws
      - traefik.http.routers.appwrite_mqtt_ws.tls=true
      - traefik.http.services.appwrite_mqtt_ws.loadbalancer.server.port=8083
    networks:
      - appwrite
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKER_PER_CORE
      - _APP_OPTIONS_ABUSE
      - _APP_OPTIONS_ROUTER_PROTECTION
      - _APP_REALTIME_TAIL_RATE
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_DATABASE_SHARED_TABLES
      - _APP_MQTT_REPLAY_DEPTH
      - _APP_MQTT_WS_PORT
      - _APP_MQTT_MAX_PACKET_SIZE`},{name:`appwrite-worker`,block:`  appwrite-worker:
    entrypoint: worker
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
      - browser
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    volumes:
      - appwrite-uploads:/storage/uploads:rw
      - appwrite-cache:/storage/cache:rw
      - appwrite-functions:/storage/functions:rw
      - appwrite-sites:/storage/sites:rw
      - appwrite-builds:/storage/builds:rw
      - appwrite-certificates:/storage/certificates:rw
      - appwrite-config:/storage/config:rw
      - appwrite-imports:/storage/imports:rw
    extra_hosts:
      - host.docker.internal:host-gateway
    environment:
      - _APP_DNS_EXTERNAL
      - _APP_ALLOWED_INTERNAL_ADDRESSES
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_USAGE_STATS
      - _APP_USAGE_PASS
      - _APP_CONNECTIONS_DB_USAGE
      - _APP_POOL_SIZE_USAGE
      - _APP_CONNECTIONS_DB_EXECUTIONS
      - _APP_POOL_SIZE_EXECUTIONS
      - _APP_MAINTENANCE_RETENTION_USAGE_TTL
      - _APP_STATS_USAGE_QUEUE_NAME
      - _APP_STATS_RESOURCES_QUEUE_NAME
      - _APP_MAINTENANCE_QUEUE_NAME
      - _APP_STATS_RESOURCES_INTERVAL
      - _APP_WORKERS_NUM=1
      # Pool sizing only (sum of per-queue caps). Each queue keeps its own maxCoroutines in PHP; databases and maintenance stay at 1.
      - _APP_WORKER_MAX_COROUTINES=75
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_EMAIL_SECURITY
      - _APP_EMAIL_CERTIFICATES
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_QUEUE_NAME
      - _APP_DATABASE_SHARED_TABLES
      - _APP_CONSOLE_DOMAIN
      - _APP_CONSOLE_URL
      - _APP_CONSOLE_TRUSTED_PROJECTS
      - _APP_DOMAIN
      - _APP_DOMAIN_TARGET_CNAME
      - _APP_DOMAIN_TARGET_AAAA
      - _APP_DOMAIN_TARGET_A
      - _APP_DOMAIN_TARGET_CAA
      - _APP_DNS
      - _APP_DOMAIN_FUNCTIONS
      - _APP_DOMAIN_SITES
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_OPTIONS_ROUTER_FORCE_HTTPS
      - _APP_WEBHOOK_MAX_FAILED_ATTEMPTS
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_S3_ENDPOINT
      - _APP_STORAGE_S3_PATH_STYLE
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
      - _APP_EXECUTOR_SECRET
      - _APP_EXECUTOR_HOST
      - _APP_DOCKER_HUB_USERNAME
      - _APP_DOCKER_HUB_PASSWORD
      - _APP_FUNCTIONS_TIMEOUT
      - _APP_SITES_TIMEOUT
      - _APP_COMPUTE_BUILD_TIMEOUT
      - _APP_COMPUTE_CPUS
      - _APP_COMPUTE_MEMORY
      - _APP_OPEN_RUNTIMES_NFT
      - _APP_COMPUTE_SIZE_LIMIT
      - _APP_COMPUTE_BUILD_SIZE_LIMIT
      - _APP_VCS_GITHUB_APP_NAME
      - _APP_VCS_GITHUB_PRIVATE_KEY
      - _APP_VCS_GITHUB_APP_ID
      - _APP_VCS_GITEA_ENDPOINT
      - _APP_VCS_GITEA_BROWSER_ENDPOINT
      - _APP_VCS_GITEA_CLIENT_ID
      - _APP_VCS_GITEA_CLIENT_SECRET
      - _APP_VCS_GITEA_WEBHOOK_SECRET
      - _APP_VCS_GITLAB_ENDPOINT
      - _APP_VCS_GITLAB_CLIENT_ID
      - _APP_VCS_GITLAB_CLIENT_SECRET
      - _APP_VCS_GITLAB_WEBHOOK_SECRET
      - _APP_VCS_BITBUCKET_CLIENT_ID
      - _APP_VCS_BITBUCKET_CLIENT_SECRET
      - _APP_VCS_BITBUCKET_WEBHOOK_SECRET
      - _APP_VCS_ORIGIN_CLIENT_ID
      - _APP_VCS_ORIGIN_PRIVATE_KEY
      - _APP_VCS_ENTIRE_PLUGIN
      - _APP_VCS_ENTIRE_PRIVATE_KEY
      - _APP_VCS_ENTIRE_ISSUER
      - _APP_VCS_ENTIRE_ENDPOINT
      - _APP_VCS_WEBHOOK_URL
      - _APP_BUILDS_VOLUME
      - _APP_JOBS_HOST
      - _APP_JOBS_SECRET
      - _APP_JOBS_ENDPOINT
      - _APP_BROWSER_HOST
      - _APP_WORKER_SCREENSHOTS_ROUTER
      - _APP_NOTIFICATIONS_TRACKING_SECRET
      - _APP_SYSTEM_EMAIL_NAME
      - _APP_SYSTEM_EMAIL_ADDRESS
      - _APP_SMTP_HOST
      - _APP_SMTP_PORT
      - _APP_SMTP_SECURE
      - _APP_SMTP_USERNAME
      - _APP_SMTP_PASSWORD
      - _APP_SMS_FROM
      - _APP_SMS_PROVIDER
      - _APP_SMS_PROJECTS_DENY_LIST
      - _APP_MIGRATIONS_FIREBASE_CLIENT_ID
      - _APP_MIGRATIONS_FIREBASE_CLIENT_SECRET
      - _APP_MIGRATION_HOST
      - _APP_MAINTENANCE_RETENTION_AUDIT
      - _APP_MAINTENANCE_RETENTION_AUDIT_CONSOLE
      - _APP_LIMIT_DATABASE_BATCH
      - _APP_EMBEDDING`},{name:`appwrite-task-scheduler`,block:`  appwrite-task-scheduler:
    entrypoint: schedule
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-task-scheduler
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - \${_APP_DB_HOST:-postgresql}
      - redis
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_USAGE_STATS
      - _APP_USAGE_PASS
      - _APP_CONNECTIONS_DB_USAGE
      - _APP_POOL_SIZE_USAGE
      - _APP_CONNECTIONS_DB_EXECUTIONS
      - _APP_POOL_SIZE_EXECUTIONS
      - _APP_MAINTENANCE_RETENTION_USAGE_TTL
      - _APP_STATS_USAGE_QUEUE_NAME
      - _APP_STATS_RESOURCES_QUEUE_NAME
      - _APP_MAINTENANCE_QUEUE_NAME
      - _APP_STATS_RESOURCES_INTERVAL
      - _APP_LOGGING_FORMAT
      # Combined mode runs functions/executions/messages timers + enqueue coroutines
      # against shared console/cache pools; floor must cover concurrent ticks.
      - _APP_WORKER_MAX_COROUTINES=8
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_DOMAIN
      - _APP_CONSOLE_DOMAIN
      - _APP_CONSOLE_SCHEMA
      - _APP_DOMAIN_FUNCTIONS
      - _APP_DOMAIN_SITES
      - _APP_MIGRATION_HOST
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_DATABASE_SHARED_TABLES
      - _APP_FUNCTIONS_SCHEDULE_SPREAD
      - _APP_MAINTENANCE_INTERVAL
      - _APP_MAINTENANCE_INACTIVE_INTERVAL`},{name:`appwrite-worker-stats-usage`,block:`  appwrite-worker-stats-usage:
    entrypoint: worker-stats-usage
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-stats-usage
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
      - browser
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    volumes:
      - appwrite-uploads:/storage/uploads:rw
      - appwrite-cache:/storage/cache:rw
      - appwrite-functions:/storage/functions:rw
      - appwrite-sites:/storage/sites:rw
      - appwrite-builds:/storage/builds:rw
      - appwrite-certificates:/storage/certificates:rw
      - appwrite-config:/storage/config:rw
      - appwrite-imports:/storage/imports:rw
    extra_hosts:
      - host.docker.internal:host-gateway
    environment:
      - _APP_DNS_EXTERNAL
      - _APP_ALLOWED_INTERNAL_ADDRESSES
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_USAGE_STATS
      - _APP_USAGE_PASS
      - _APP_CONNECTIONS_DB_USAGE
      - _APP_POOL_SIZE_USAGE
      - _APP_CONNECTIONS_DB_EXECUTIONS
      - _APP_POOL_SIZE_EXECUTIONS
      - _APP_MAINTENANCE_RETENTION_USAGE_TTL
      - _APP_STATS_USAGE_QUEUE_NAME
      - _APP_STATS_RESOURCES_QUEUE_NAME
      - _APP_MAINTENANCE_QUEUE_NAME
      - _APP_STATS_RESOURCES_INTERVAL
      - _APP_WORKERS_NUM=1
      # Pool sizing only (sum of per-queue caps). Each queue keeps its own maxCoroutines in PHP; databases and maintenance stay at 1.
      - _APP_WORKER_MAX_COROUTINES=75
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_EMAIL_SECURITY
      - _APP_EMAIL_CERTIFICATES
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_QUEUE_NAME
      - _APP_DATABASE_SHARED_TABLES
      - _APP_CONSOLE_DOMAIN
      - _APP_CONSOLE_URL
      - _APP_CONSOLE_TRUSTED_PROJECTS
      - _APP_DOMAIN
      - _APP_DOMAIN_TARGET_CNAME
      - _APP_DOMAIN_TARGET_AAAA
      - _APP_DOMAIN_TARGET_A
      - _APP_DOMAIN_TARGET_CAA
      - _APP_DNS
      - _APP_DOMAIN_FUNCTIONS
      - _APP_DOMAIN_SITES
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_OPTIONS_ROUTER_FORCE_HTTPS
      - _APP_WEBHOOK_MAX_FAILED_ATTEMPTS
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_S3_ENDPOINT
      - _APP_STORAGE_S3_PATH_STYLE
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
      - _APP_EXECUTOR_SECRET
      - _APP_EXECUTOR_HOST
      - _APP_DOCKER_HUB_USERNAME
      - _APP_DOCKER_HUB_PASSWORD
      - _APP_FUNCTIONS_TIMEOUT
      - _APP_SITES_TIMEOUT
      - _APP_COMPUTE_BUILD_TIMEOUT
      - _APP_COMPUTE_CPUS
      - _APP_COMPUTE_MEMORY
      - _APP_OPEN_RUNTIMES_NFT
      - _APP_COMPUTE_SIZE_LIMIT
      - _APP_COMPUTE_BUILD_SIZE_LIMIT
      - _APP_VCS_GITHUB_APP_NAME
      - _APP_VCS_GITHUB_PRIVATE_KEY
      - _APP_VCS_GITHUB_APP_ID
      - _APP_VCS_GITEA_ENDPOINT
      - _APP_VCS_GITEA_BROWSER_ENDPOINT
      - _APP_VCS_GITEA_CLIENT_ID
      - _APP_VCS_GITEA_CLIENT_SECRET
      - _APP_VCS_GITEA_WEBHOOK_SECRET
      - _APP_VCS_GITLAB_ENDPOINT
      - _APP_VCS_GITLAB_CLIENT_ID
      - _APP_VCS_GITLAB_CLIENT_SECRET
      - _APP_VCS_GITLAB_WEBHOOK_SECRET
      - _APP_VCS_BITBUCKET_CLIENT_ID
      - _APP_VCS_BITBUCKET_CLIENT_SECRET
      - _APP_VCS_BITBUCKET_WEBHOOK_SECRET
      - _APP_VCS_ORIGIN_CLIENT_ID
      - _APP_VCS_ORIGIN_PRIVATE_KEY
      - _APP_VCS_ENTIRE_PLUGIN
      - _APP_VCS_ENTIRE_PRIVATE_KEY
      - _APP_VCS_ENTIRE_ISSUER
      - _APP_VCS_ENTIRE_ENDPOINT
      - _APP_VCS_WEBHOOK_URL
      - _APP_BUILDS_VOLUME
      - _APP_JOBS_HOST
      - _APP_JOBS_SECRET
      - _APP_JOBS_ENDPOINT
      - _APP_BROWSER_HOST
      - _APP_WORKER_SCREENSHOTS_ROUTER
      - _APP_NOTIFICATIONS_TRACKING_SECRET
      - _APP_SYSTEM_EMAIL_NAME
      - _APP_SYSTEM_EMAIL_ADDRESS
      - _APP_SMTP_HOST
      - _APP_SMTP_PORT
      - _APP_SMTP_SECURE
      - _APP_SMTP_USERNAME
      - _APP_SMTP_PASSWORD
      - _APP_SMS_FROM
      - _APP_SMS_PROVIDER
      - _APP_SMS_PROJECTS_DENY_LIST
      - _APP_MIGRATIONS_FIREBASE_CLIENT_ID
      - _APP_MIGRATIONS_FIREBASE_CLIENT_SECRET
      - _APP_MIGRATION_HOST
      - _APP_MAINTENANCE_RETENTION_AUDIT
      - _APP_MAINTENANCE_RETENTION_AUDIT_CONSOLE
      - _APP_LIMIT_DATABASE_BATCH
      - _APP_EMBEDDING`},{name:`appwrite-worker-stats-resources`,block:`  appwrite-worker-stats-resources:
    entrypoint: worker-stats-resources
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-stats-resources
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
      - browser
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    volumes:
      - appwrite-uploads:/storage/uploads:rw
      - appwrite-cache:/storage/cache:rw
      - appwrite-functions:/storage/functions:rw
      - appwrite-sites:/storage/sites:rw
      - appwrite-builds:/storage/builds:rw
      - appwrite-certificates:/storage/certificates:rw
      - appwrite-config:/storage/config:rw
      - appwrite-imports:/storage/imports:rw
    extra_hosts:
      - host.docker.internal:host-gateway
    environment:
      - _APP_DNS_EXTERNAL
      - _APP_ALLOWED_INTERNAL_ADDRESSES
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_USAGE_STATS
      - _APP_USAGE_PASS
      - _APP_CONNECTIONS_DB_USAGE
      - _APP_POOL_SIZE_USAGE
      - _APP_CONNECTIONS_DB_EXECUTIONS
      - _APP_POOL_SIZE_EXECUTIONS
      - _APP_MAINTENANCE_RETENTION_USAGE_TTL
      - _APP_STATS_USAGE_QUEUE_NAME
      - _APP_STATS_RESOURCES_QUEUE_NAME
      - _APP_MAINTENANCE_QUEUE_NAME
      - _APP_STATS_RESOURCES_INTERVAL
      - _APP_WORKERS_NUM=1
      # Pool sizing only (sum of per-queue caps). Each queue keeps its own maxCoroutines in PHP; databases and maintenance stay at 1.
      - _APP_WORKER_MAX_COROUTINES=75
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_EMAIL_SECURITY
      - _APP_EMAIL_CERTIFICATES
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_QUEUE_NAME
      - _APP_DATABASE_SHARED_TABLES
      - _APP_CONSOLE_DOMAIN
      - _APP_CONSOLE_URL
      - _APP_CONSOLE_TRUSTED_PROJECTS
      - _APP_DOMAIN
      - _APP_DOMAIN_TARGET_CNAME
      - _APP_DOMAIN_TARGET_AAAA
      - _APP_DOMAIN_TARGET_A
      - _APP_DOMAIN_TARGET_CAA
      - _APP_DNS
      - _APP_DOMAIN_FUNCTIONS
      - _APP_DOMAIN_SITES
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_OPTIONS_ROUTER_FORCE_HTTPS
      - _APP_WEBHOOK_MAX_FAILED_ATTEMPTS
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_S3_ENDPOINT
      - _APP_STORAGE_S3_PATH_STYLE
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
      - _APP_EXECUTOR_SECRET
      - _APP_EXECUTOR_HOST
      - _APP_DOCKER_HUB_USERNAME
      - _APP_DOCKER_HUB_PASSWORD
      - _APP_FUNCTIONS_TIMEOUT
      - _APP_SITES_TIMEOUT
      - _APP_COMPUTE_BUILD_TIMEOUT
      - _APP_COMPUTE_CPUS
      - _APP_COMPUTE_MEMORY
      - _APP_OPEN_RUNTIMES_NFT
      - _APP_COMPUTE_SIZE_LIMIT
      - _APP_COMPUTE_BUILD_SIZE_LIMIT
      - _APP_VCS_GITHUB_APP_NAME
      - _APP_VCS_GITHUB_PRIVATE_KEY
      - _APP_VCS_GITHUB_APP_ID
      - _APP_VCS_GITEA_ENDPOINT
      - _APP_VCS_GITEA_BROWSER_ENDPOINT
      - _APP_VCS_GITEA_CLIENT_ID
      - _APP_VCS_GITEA_CLIENT_SECRET
      - _APP_VCS_GITEA_WEBHOOK_SECRET
      - _APP_VCS_GITLAB_ENDPOINT
      - _APP_VCS_GITLAB_CLIENT_ID
      - _APP_VCS_GITLAB_CLIENT_SECRET
      - _APP_VCS_GITLAB_WEBHOOK_SECRET
      - _APP_VCS_BITBUCKET_CLIENT_ID
      - _APP_VCS_BITBUCKET_CLIENT_SECRET
      - _APP_VCS_BITBUCKET_WEBHOOK_SECRET
      - _APP_VCS_ORIGIN_CLIENT_ID
      - _APP_VCS_ORIGIN_PRIVATE_KEY
      - _APP_VCS_ENTIRE_PLUGIN
      - _APP_VCS_ENTIRE_PRIVATE_KEY
      - _APP_VCS_ENTIRE_ISSUER
      - _APP_VCS_ENTIRE_ENDPOINT
      - _APP_VCS_WEBHOOK_URL
      - _APP_BUILDS_VOLUME
      - _APP_JOBS_HOST
      - _APP_JOBS_SECRET
      - _APP_JOBS_ENDPOINT
      - _APP_BROWSER_HOST
      - _APP_WORKER_SCREENSHOTS_ROUTER
      - _APP_NOTIFICATIONS_TRACKING_SECRET
      - _APP_SYSTEM_EMAIL_NAME
      - _APP_SYSTEM_EMAIL_ADDRESS
      - _APP_SMTP_HOST
      - _APP_SMTP_PORT
      - _APP_SMTP_SECURE
      - _APP_SMTP_USERNAME
      - _APP_SMTP_PASSWORD
      - _APP_SMS_FROM
      - _APP_SMS_PROVIDER
      - _APP_SMS_PROJECTS_DENY_LIST
      - _APP_MIGRATIONS_FIREBASE_CLIENT_ID
      - _APP_MIGRATIONS_FIREBASE_CLIENT_SECRET
      - _APP_MIGRATION_HOST
      - _APP_MAINTENANCE_RETENTION_AUDIT
      - _APP_MAINTENANCE_RETENTION_AUDIT_CONSOLE
      - _APP_LIMIT_DATABASE_BATCH
      - _APP_EMBEDDING`},{name:`appwrite-task-stats-resources`,block:`  appwrite-task-stats-resources:
    entrypoint: stats-resources
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-task-stats-resources
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - \${_APP_DB_HOST:-postgresql}
      - redis
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_USAGE_STATS
      - _APP_USAGE_PASS
      - _APP_CONNECTIONS_DB_USAGE
      - _APP_POOL_SIZE_USAGE
      - _APP_CONNECTIONS_DB_EXECUTIONS
      - _APP_POOL_SIZE_EXECUTIONS
      - _APP_MAINTENANCE_RETENTION_USAGE_TTL
      - _APP_STATS_USAGE_QUEUE_NAME
      - _APP_STATS_RESOURCES_QUEUE_NAME
      - _APP_MAINTENANCE_QUEUE_NAME
      - _APP_STATS_RESOURCES_INTERVAL
      - _APP_LOGGING_FORMAT
      # Combined mode runs functions/executions/messages timers + enqueue coroutines
      # against shared console/cache pools; floor must cover concurrent ticks.
      - _APP_WORKER_MAX_COROUTINES=8
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_DOMAIN
      - _APP_CONSOLE_DOMAIN
      - _APP_CONSOLE_SCHEMA
      - _APP_DOMAIN_FUNCTIONS
      - _APP_DOMAIN_SITES
      - _APP_MIGRATION_HOST
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_DATABASE_SHARED_TABLES
      - _APP_FUNCTIONS_SCHEDULE_SPREAD
      - _APP_MAINTENANCE_INTERVAL
      - _APP_MAINTENANCE_INACTIVE_INTERVAL`},{name:`appwrite-task-scheduler-maintenance`,block:`  appwrite-task-scheduler-maintenance:
    entrypoint: schedule-maintenance
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-task-scheduler-maintenance
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - \${_APP_DB_HOST:-postgresql}
      - redis
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_USAGE_STATS
      - _APP_USAGE_PASS
      - _APP_CONNECTIONS_DB_USAGE
      - _APP_POOL_SIZE_USAGE
      - _APP_CONNECTIONS_DB_EXECUTIONS
      - _APP_POOL_SIZE_EXECUTIONS
      - _APP_MAINTENANCE_RETENTION_USAGE_TTL
      - _APP_STATS_USAGE_QUEUE_NAME
      - _APP_STATS_RESOURCES_QUEUE_NAME
      - _APP_MAINTENANCE_QUEUE_NAME
      - _APP_STATS_RESOURCES_INTERVAL
      - _APP_LOGGING_FORMAT
      # Combined mode runs functions/executions/messages timers + enqueue coroutines
      # against shared console/cache pools; floor must cover concurrent ticks.
      - _APP_WORKER_MAX_COROUTINES=8
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_DOMAIN
      - _APP_CONSOLE_DOMAIN
      - _APP_CONSOLE_SCHEMA
      - _APP_DOMAIN_FUNCTIONS
      - _APP_DOMAIN_SITES
      - _APP_MIGRATION_HOST
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_DATABASE_SHARED_TABLES
      - _APP_FUNCTIONS_SCHEDULE_SPREAD
      - _APP_MAINTENANCE_INTERVAL
      - _APP_MAINTENANCE_INACTIVE_INTERVAL`},{name:`appwrite-worker-maintenance`,block:`  appwrite-worker-maintenance:
    entrypoint: worker-maintenance
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-maintenance
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    environment:
      - _APP_ENV
      - _APP_WORKERS_NUM=1
      # One slot at a time: each job re-checks the deletes backlog before every block.
      - _APP_WORKER_MAX_COROUTINES=1
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_DATABASE_SHARED_TABLES
      - _APP_MAINTENANCE_QUEUE_NAME`},{name:`appwrite-worker-webhooks`,block:`  appwrite-worker-webhooks:
    entrypoint: worker-webhooks
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-webhooks
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    environment:
      - _APP_DNS_EXTERNAL
      - _APP_ALLOWED_INTERNAL_ADDRESSES
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=8
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_EMAIL_SECURITY
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_WEBHOOK_MAX_FAILED_ATTEMPTS
      - _APP_DATABASE_SHARED_TABLES
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_DOMAIN
      - _APP_CONSOLE_DOMAIN
      - _APP_CONSOLE_URL`},{name:`appwrite-worker-deletes`,block:`  appwrite-worker-deletes:
    entrypoint: worker-deletes
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-deletes
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    volumes:
      - appwrite-uploads:/storage/uploads:rw
      - appwrite-cache:/storage/cache:rw
      - appwrite-functions:/storage/functions:rw
      - appwrite-sites:/storage/sites:rw
      - appwrite-builds:/storage/builds:rw
      - appwrite-certificates:/storage/certificates:rw
      - appwrite-imports:/storage/imports:rw
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_USAGE_PASS
      - _APP_CONNECTIONS_DB_USAGE
      - _APP_CONNECTIONS_DB_EXECUTIONS
      - _APP_POOL_SIZE_EXECUTIONS
      - _APP_MAINTENANCE_RETENTION_EXECUTION
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=8
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_S3_ENDPOINT
      - _APP_STORAGE_S3_PATH_STYLE
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_EXECUTOR_SECRET
      - _APP_EXECUTOR_HOST
      - _APP_DATABASE_SHARED_TABLES
      - _APP_EMAIL_CERTIFICATES
      - _APP_MAINTENANCE_RETENTION_AUDIT
      - _APP_MAINTENANCE_RETENTION_AUDIT_CONSOLE`},{name:`appwrite-worker-databases`,block:`  appwrite-worker-databases:
    entrypoint: worker-databases
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-databases
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=1
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_QUEUE_NAME
      - _APP_DATABASE_SHARED_TABLES
      - _APP_LIMIT_DATABASE_BATCH
      - _APP_EMBEDDING`},{name:`appwrite-worker-builds`,block:`  appwrite-worker-builds:
    entrypoint: worker-builds
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-builds
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    volumes:
      - appwrite-functions:/storage/functions:rw
      - appwrite-sites:/storage/sites:rw
      - appwrite-builds:/storage/builds:rw
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=8
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_EXECUTOR_SECRET
      - _APP_EXECUTOR_HOST
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_VCS_GITHUB_APP_NAME
      - _APP_VCS_GITHUB_PRIVATE_KEY
      - _APP_VCS_GITHUB_APP_ID
      - _APP_VCS_GITEA_ENDPOINT
      - _APP_VCS_GITEA_BROWSER_ENDPOINT
      - _APP_VCS_GITEA_CLIENT_ID
      - _APP_VCS_GITEA_CLIENT_SECRET
      - _APP_VCS_GITEA_WEBHOOK_SECRET
      - _APP_VCS_GITLAB_ENDPOINT
      - _APP_VCS_GITLAB_CLIENT_ID
      - _APP_VCS_GITLAB_CLIENT_SECRET
      - _APP_VCS_GITLAB_WEBHOOK_SECRET
      - _APP_VCS_BITBUCKET_CLIENT_ID
      - _APP_VCS_BITBUCKET_CLIENT_SECRET
      - _APP_VCS_BITBUCKET_WEBHOOK_SECRET
      - _APP_VCS_ORIGIN_CLIENT_ID
      - _APP_VCS_ORIGIN_PRIVATE_KEY
      - _APP_VCS_ENTIRE_PLUGIN
      - _APP_VCS_ENTIRE_PRIVATE_KEY
      - _APP_VCS_ENTIRE_ISSUER
      - _APP_VCS_ENTIRE_ENDPOINT
      - _APP_VCS_WEBHOOK_URL
      - _APP_FUNCTIONS_TIMEOUT
      - _APP_SITES_TIMEOUT
      - _APP_COMPUTE_BUILD_TIMEOUT
      - _APP_COMPUTE_CPUS
      - _APP_COMPUTE_MEMORY
      - _APP_OPEN_RUNTIMES_NFT
      - _APP_COMPUTE_SIZE_LIMIT
      - _APP_COMPUTE_BUILD_SIZE_LIMIT
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_OPTIONS_ROUTER_FORCE_HTTPS
      - _APP_DOMAIN
      - _APP_CONSOLE_DOMAIN
      - _APP_CONSOLE_URL
      - _APP_CONSOLE_TRUSTED_PROJECTS
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_S3_ENDPOINT
      - _APP_STORAGE_S3_PATH_STYLE
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
      - _APP_DATABASE_SHARED_TABLES
      - _APP_DOMAIN_SITES
      - _APP_BUILDS_VOLUME
      - _APP_JOBS_HOST
      - _APP_JOBS_SECRET
      - _APP_JOBS_ENDPOINT
    extra_hosts:
      - host.docker.internal:host-gateway`},{name:`appwrite-worker-jobs`,block:`  appwrite-worker-jobs:
    entrypoint: worker-jobs
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-jobs
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    volumes:
      - appwrite-functions:/storage/functions:rw
      - appwrite-sites:/storage/sites:rw
      - appwrite-builds:/storage/builds:rw
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=8
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_S3_ENDPOINT
      - _APP_STORAGE_S3_PATH_STYLE
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
      - _APP_JOBS_HOST
      - _APP_JOBS_SECRET
      - _APP_COMPUTE_BUILD_SIZE_LIMIT
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_DATABASE_SHARED_TABLES
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_DOMAIN
      - _APP_CONSOLE_DOMAIN
      - _APP_CONSOLE_URL
    extra_hosts:
      - host.docker.internal:host-gateway`},{name:`appwrite-worker-screenshots`,block:`  appwrite-worker-screenshots:
    entrypoint: worker-screenshots
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-screenshots
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
      - browser
    volumes:
      - appwrite-uploads:/storage/uploads:rw
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    environment:
      - _APP_BROWSER_HOST
      - _APP_SITES_TIMEOUT
      - _APP_WORKER_SCREENSHOTS_ROUTER
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=4
      - _APP_WORKER_PER_CORE
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_DATABASE_SHARED_TABLES
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_S3_ENDPOINT
      - _APP_STORAGE_S3_PATH_STYLE
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
    extra_hosts:
      - host.docker.internal:host-gateway`},{name:`appwrite-worker-certificates`,block:`  appwrite-worker-certificates:
    entrypoint: worker-certificates
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-certificates
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    volumes:
      - appwrite-config:/storage/config:rw
      - appwrite-certificates:/storage/certificates:rw
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=8
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_DOMAIN
      - _APP_DOMAIN_TARGET_CNAME
      - _APP_DOMAIN_TARGET_AAAA
      - _APP_DOMAIN_TARGET_A
      - _APP_DOMAIN_TARGET_CAA
      - _APP_DNS
      - _APP_DOMAIN_FUNCTIONS
      - _APP_DOMAIN_SITES
      - _APP_EMAIL_CERTIFICATES
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_DATABASE_SHARED_TABLES`},{name:`appwrite-worker-executions`,block:`  appwrite-worker-executions:
    entrypoint: worker-executions
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-executions
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_USAGE_PASS
      - _APP_CONNECTIONS_DB_USAGE
      - _APP_CONNECTIONS_DB_EXECUTIONS
      - _APP_POOL_SIZE_EXECUTIONS
      - _APP_MAINTENANCE_RETENTION_EXECUTION
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=8
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_DATABASE_SHARED_TABLES`},{name:`appwrite-worker-functions`,block:`  appwrite-worker-functions:
    entrypoint: worker-functions
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-functions
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - \${_APP_DB_HOST:-postgresql}
      - redis
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=8
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_DOMAIN
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_FUNCTIONS_TIMEOUT
      - _APP_SITES_TIMEOUT
      - _APP_COMPUTE_BUILD_TIMEOUT
      - _APP_COMPUTE_CPUS
      - _APP_COMPUTE_MEMORY
      - _APP_EXECUTOR_SECRET
      - _APP_EXECUTOR_HOST
      - _APP_DOCKER_HUB_USERNAME
      - _APP_DOCKER_HUB_PASSWORD
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_DATABASE_SHARED_TABLES`},{name:`appwrite-worker-mails`,block:`  appwrite-worker-mails:
    entrypoint: worker-mails
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-mails
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    environment:
      - _APP_DNS_EXTERNAL
      - _APP_DNS
      - _APP_ALLOWED_INTERNAL_ADDRESSES
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=6
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_NOTIFICATIONS_TRACKING_SECRET
      - _APP_SYSTEM_EMAIL_NAME
      - _APP_SYSTEM_EMAIL_ADDRESS
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_DB_ADAPTER
      - _APP_SMTP_HOST
      - _APP_SMTP_PORT
      - _APP_SMTP_SECURE
      - _APP_SMTP_USERNAME
      - _APP_SMTP_PASSWORD
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_DOMAIN
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_DATABASE_SHARED_TABLES`},{name:`appwrite-worker-notifications`,block:`  appwrite-worker-notifications:
    entrypoint: worker-notifications
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-notifications
    restart: unless-stopped
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - redis
      - \${_APP_DB_HOST:-postgresql}
    environment:
      - _APP_DNS_EXTERNAL
      - _APP_DNS
      - _APP_ALLOWED_INTERNAL_ADDRESSES
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_NOTIFICATIONS_TRACKING_SECRET
      - _APP_SYSTEM_EMAIL_NAME
      - _APP_SYSTEM_EMAIL_ADDRESS
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_DB_ADAPTER
      - _APP_SMTP_HOST
      - _APP_SMTP_PORT
      - _APP_SMTP_SECURE
      - _APP_SMTP_USERNAME
      - _APP_SMTP_PASSWORD
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_DOMAIN
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_DATABASE_SHARED_TABLES`},{name:`appwrite-worker-messaging`,block:`  appwrite-worker-messaging:
    entrypoint: worker-messaging
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-messaging
    restart: unless-stopped
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    volumes:
      - appwrite-uploads:/storage/uploads:rw
    depends_on:
      - redis
    environment:
      - _APP_DNS_EXTERNAL
      - _APP_DNS
      - _APP_ALLOWED_INTERNAL_ADDRESSES
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=1
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_SMS_FROM
      - _APP_SMS_PROVIDER
      - _APP_SMS_PROJECTS_DENY_LIST
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_S3_ENDPOINT
      - _APP_STORAGE_S3_PATH_STYLE
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
      - _APP_DATABASE_SHARED_TABLES`},{name:`appwrite-worker-migrations`,block:`  appwrite-worker-migrations:
    entrypoint: worker-migrations
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-worker-migrations
    restart: unless-stopped
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    volumes:
      - appwrite-imports:/storage/imports:rw
      - appwrite-uploads:/storage/uploads:rw
    depends_on:
      - \${_APP_DB_HOST:-postgresql}
    environment:
      - _APP_DNS_EXTERNAL
      - _APP_ALLOWED_INTERNAL_ADDRESSES
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_WORKERS_NUM=1
      - _APP_WORKER_MAX_COROUTINES=1
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_DOMAIN
      - _APP_DOMAIN_TARGET_CNAME
      - _APP_DOMAIN_TARGET_AAAA
      - _APP_DOMAIN_TARGET_A
      - _APP_DOMAIN_TARGET_CAA
      - _APP_DNS
      - _APP_EMAIL_SECURITY
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_CONFIG
      - _APP_LOGGING_FORMAT
      - _APP_MIGRATIONS_FIREBASE_CLIENT_ID
      - _APP_MIGRATIONS_FIREBASE_CLIENT_SECRET
      - _APP_DATABASE_SHARED_TABLES
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_MIGRATION_HOST`},{name:`appwrite-task-maintenance`,block:`  appwrite-task-maintenance:
    entrypoint: maintenance
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-task-maintenance
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - \${_APP_DB_HOST:-postgresql}
      - redis
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_LOGGING_FORMAT
      - _APP_WORKER_PER_CORE
      - _APP_DOMAIN
      - _APP_DOMAIN_TARGET_CNAME
      - _APP_DOMAIN_TARGET_AAAA
      - _APP_DOMAIN_TARGET_A
      - _APP_DOMAIN_TARGET_CAA
      - _APP_DNS
      - _APP_DOMAIN_FUNCTIONS
      - _APP_EDITION
      - _APP_ROUTER_AUTO_CERTIFICATES
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_MAINTENANCE_INTERVAL
      - _APP_MAINTENANCE_RETENTION_EXECUTION
      - _APP_MAINTENANCE_RETENTION_CACHE
      - _APP_MAINTENANCE_RETENTION_ABUSE
      - _APP_MAINTENANCE_RETENTION_AUDIT
      - _APP_MAINTENANCE_RETENTION_AUDIT_CONSOLE
      - _APP_MAINTENANCE_RETENTION_SCHEDULES
      - _APP_MAINTENANCE_START_TIME
      - _APP_DATABASE_SHARED_TABLES`},{name:`appwrite-task-interval`,block:`  appwrite-task-interval:
    entrypoint: interval
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-task-interval
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - \${_APP_DB_HOST:-postgresql}
      - redis
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_LOGGING_FORMAT
      - _APP_WORKER_PER_CORE
      - _APP_DOMAIN
      - _APP_DOMAIN_TARGET_CNAME
      - _APP_DOMAIN_TARGET_AAAA
      - _APP_DOMAIN_TARGET_A
      - _APP_DOMAIN_TARGET_CAA
      - _APP_DNS
      - _APP_DOMAIN_FUNCTIONS
      - _APP_DOMAIN_SITES
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_DATABASE_SHARED_TABLES
      - _APP_INTERVAL_DOMAIN_VERIFICATION
      - _APP_INTERVAL_CLEANUP_STALE_EXECUTIONS`},{name:`appwrite-task-scheduler-functions`,block:`  appwrite-task-scheduler-functions:
    entrypoint: schedule-functions
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-task-scheduler-functions
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - \${_APP_DB_HOST:-postgresql}
      - redis
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_LOGGING_FORMAT
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_DOMAIN
      - _APP_CONSOLE_DOMAIN
      - _APP_DOMAIN_FUNCTIONS
      - _APP_DOMAIN_SITES
      - _APP_MIGRATION_HOST
      - _APP_CONSOLE_SCHEMA
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_DATABASE_SHARED_TABLES
      - _APP_FUNCTIONS_SCHEDULE_SPREAD`},{name:`appwrite-task-scheduler-executions`,block:`  appwrite-task-scheduler-executions:
    entrypoint: schedule-executions
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-task-scheduler-executions
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - \${_APP_DB_HOST:-postgresql}
      - redis
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_LOGGING_FORMAT
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_DOMAIN
      - _APP_CONSOLE_DOMAIN
      - _APP_DOMAIN_FUNCTIONS
      - _APP_DOMAIN_SITES
      - _APP_MIGRATION_HOST
      - _APP_CONSOLE_SCHEMA
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_DATABASE_SHARED_TABLES`},{name:`appwrite-task-scheduler-messages`,block:`  appwrite-task-scheduler-messages:
    entrypoint: schedule-messages
    restart: unless-stopped
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-task-scheduler-messages
    image: appwrite/appwrite:2.6.2
    networks:
      - appwrite
    depends_on:
      - \${_APP_DB_HOST:-postgresql}
      - redis
    environment:
      - _APP_ENV
      - _APP_MEMORY_LIMIT
      - _APP_LOGGING_FORMAT
      - _APP_WORKER_PER_CORE
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_ADAPTER
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_DATABASE_SHARED_TABLES`},{name:`appwrite-browser`,block:`  appwrite-browser:
    container_name: appwrite-browser
    image: appwrite/browser:0.3.10
    networks:
      - browser
    environment:
      - ALLOWED_HOSTS=appwrite
    # Public resolvers only, so the browser cannot resolve internal service
    # names (e.g. redis, appwrite-mariadb) and render them via a user URL.
    dns:
      - 1.1.1.1
      - 8.8.8.8`},{name:`appwrite-autogravity`,block:`  appwrite-autogravity:
    container_name: appwrite-autogravity
    image: ghcr.io/appwrite/autogravity:0.0.11
    environment:
      - MODEL_BACKEND=focalnet
    restart: unless-stopped
    networks:
      - appwrite`},{name:`appwrite-exiftool`,block:`  appwrite-exiftool:
    container_name: appwrite-exiftool
    image: ghcr.io/appwrite/exiftool:0.1.1
    restart: unless-stopped
    networks:
      - appwrite`},{name:`clickhouse`,block:`  clickhouse:
    image: clickhouse/clickhouse-server:26.4.3-alpine
    restart: unless-stopped
    networks:
      - appwrite
    environment:
      - CLICKHOUSE_DB=appwrite
      - CLICKHOUSE_USER=appwrite
      - CLICKHOUSE_PASSWORD=\${_APP_USAGE_PASS:-appwrite}
      - CLICKHOUSE_DEFAULT_ACCESS_MANAGEMENT=1
      - CLICKHOUSE_ALWAYS_RUN_INITDB_SCRIPTS=1
    volumes:
      - appwrite-clickhouse:/var/lib/clickhouse:rw
      - ./clickhouse-config.xml:/etc/clickhouse-server/config.d/appwrite.xml:ro
      - ./clickhouse-init.sh:/docker-entrypoint-initdb.d/clickhouse-init.sh:ro
    ulimits:
      nofile:
        soft: 262144
        hard: 262144
    healthcheck:
      test:
        - CMD-SHELL
        - 'clickhouse-client --user "$$CLICKHOUSE_USER" --password "$$CLICKHOUSE_PASSWORD" --query "SELECT 1" >/dev/null'
      interval: 5s
      timeout: 5s
      retries: 20
      start_period: 30s`},{name:`appwrite-geo`,block:`  appwrite-geo:
    container_name: appwrite-geo
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    image: appwrite/geo:0.3.2
    restart: unless-stopped
    networks:
      - appwrite
    environment:
      - GEO_SECRET=$_APP_GEO_SECRET
    healthcheck:
      test: 'php -r "exit(json_decode(file_get_contents(''http://localhost/v1/health''))->status === ''ok'' ? 0 : 1);"'
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 5s`},{name:`openruntimes-executor`,block:`  openruntimes-executor:
    container_name: exc1
    hostname: exc1
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    stop_signal: SIGINT
    image: openruntimes/executor:1.1.2
    restart: unless-stopped
    networks:
      - appwrite
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - appwrite-builds:/storage/builds:rw
      - appwrite-functions:/storage/functions:rw
      - appwrite-sites:/storage/sites:rw
      - /tmp:/tmp:rw
    environment:
      - OPR_EXECUTOR_IMAGES=$_APP_EXECUTOR_IMAGES
      - OPR_EXECUTOR_INACTIVE_THRESHOLD=$_APP_COMPUTE_INACTIVE_THRESHOLD
      - OPR_EXECUTOR_MAINTENANCE_INTERVAL=$_APP_COMPUTE_MAINTENANCE_INTERVAL
      - OPR_EXECUTOR_NETWORK=$_APP_COMPUTE_RUNTIMES_NETWORK
      - OPR_EXECUTOR_DOCKER_HUB_USERNAME=$_APP_DOCKER_HUB_USERNAME
      - OPR_EXECUTOR_DOCKER_HUB_PASSWORD=$_APP_DOCKER_HUB_PASSWORD
      - OPR_EXECUTOR_ENV=$_APP_ENV
      - OPR_EXECUTOR_RUNTIMES=$_APP_FUNCTIONS_RUNTIMES,$_APP_SITES_RUNTIMES
      - OPR_EXECUTOR_SECRET=$_APP_EXECUTOR_SECRET
      - OPR_EXECUTOR_RUNTIME_VERSIONS=v5
      - OPEN_RUNTIMES_NFT=$_APP_OPEN_RUNTIMES_NFT
      - OPR_EXECUTOR_LOGGING_CONFIG=$_APP_LOGGING_CONFIG
      - OPR_EXECUTOR_CONNECTION_STORAGE=\${_APP_EXECUTOR_CONNECTION_STORAGE:-local://localhost}
      - OPR_EXECUTOR_CONNECTION_BUILD_CACHE_STORAGE=
    healthcheck:
      test:
        - CMD-SHELL
        - 'curl -fsS -H "Authorization: Bearer $$OPR_EXECUTOR_SECRET" http://localhost/v1/health
          >/dev/null'
      interval: 5s
      timeout: 3s
      retries: 20
      start_period: 5s`},{name:`orchestrator`,block:`  orchestrator:
    container_name: orchestrator
    hostname: orchestrator
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    # One image carrying every orchestrator control plane. Appwrite drives the
    # jobs plane today; the per-plane images exist for Kubernetes, where each
    # scales, fails and gets RBAC on its own.
    image: ghcr.io/open-runtimes/orchestrator/orchestrator:2.2.4
    restart: unless-stopped
    user: root
    networks:
      - appwrite
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - ORCHESTRATOR_BACKEND=docker
      # The jobs plane and the serving planes read the network under different
      # names; both name the network the workload containers join.
      - ORCHESTRATOR_NETWORK=appwrite
      - DOCKER_NETWORK=appwrite
      - ARTIFACT_ENDPOINT=http://orchestrator:8080
      - S3_ENDPOINT=\${_APP_STORAGE_S3_ENDPOINT:-}
      - S3_REGION=\${_APP_STORAGE_S3_REGION:-us-east-1}
      - S3_ACCESS_KEY_ID=\${_APP_STORAGE_S3_ACCESS_KEY:-}
      - S3_SECRET_ACCESS_KEY=\${_APP_STORAGE_S3_SECRET:-}`},{name:`mariadb`,block:`  mariadb:
    image: mariadb:10.11
    container_name: appwrite-mariadb
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    restart: unless-stopped
    networks:
      - appwrite
    volumes:
      - appwrite-mariadb:/var/lib/mysql:rw
    environment:
      - MYSQL_ROOT_PASSWORD=\${_APP_DB_ROOT_PASS}
      - MYSQL_DATABASE=\${_APP_DB_SCHEMA}
      - MYSQL_USER=\${_APP_DB_USER}
      - MYSQL_PASSWORD=\${_APP_DB_PASS}
      - MARIADB_AUTO_UPGRADE=1
    command:
      - mysqld
      - --innodb-flush-method=fsync
    healthcheck:
      test:
        - CMD-SHELL
        - mariadb --protocol=tcp -h127.0.0.1 -uroot -p"$$MYSQL_ROOT_PASSWORD" --silent -e "SELECT 1"
      interval: 5s
      timeout: 5s
      retries: 12
      start_period: 10s`},{name:`mongodb`,block:`  mongodb:
    image: mongo:8.2.5
    container_name: appwrite-mongodb
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    restart: unless-stopped
    networks:
      - appwrite
    volumes:
      - appwrite-mongodb:/data/db
      - appwrite-mongodb-keyfile:/data/keyfile
      - ./mongo-init.js:/mongo-init.js:ro
      - ./mongo-entrypoint.sh:/mongo-entrypoint.sh:ro
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=\${_APP_DB_ROOT_PASS}
      - MONGO_INITDB_DATABASE=\${_APP_DB_SCHEMA}
      - MONGO_INITDB_USERNAME=\${_APP_DB_USER}
      - MONGO_INITDB_PASSWORD=\${_APP_DB_PASS}
    entrypoint:
      - /bin/bash
      - /mongo-entrypoint.sh
    healthcheck:
      test: |
        bash -c "
          mongosh -u root -p \${_APP_DB_ROOT_PASS} --authenticationDatabase admin --quiet --eval \\"
            try {
              const hello = db.adminCommand({hello: 1});
              if (hello.isWritablePrimary && hello.setName === 'rs0') {
                quit(0);
              }
            } catch (e) {}

            try {
              rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'appwrite-mongodb:27017'}]});
            } catch (e) {}

            quit(1);
          \\" 2>/dev/null
        "
      interval: 10s
      timeout: 10s
      retries: 10
      start_period: 60s`},{name:`postgresql`,block:`  postgresql:
    image: appwrite/postgres:0.1.0
    container_name: appwrite-postgresql
    init: true
    shm_size: 1g
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    networks:
      - appwrite
    volumes:
      - appwrite-postgresql:/var/lib/postgresql:rw
    environment:
      - POSTGRES_DB=\${_APP_DB_SCHEMA}
      - POSTGRES_USER=\${_APP_DB_USER}
      - POSTGRES_PASSWORD=\${_APP_DB_PASS}
    healthcheck:
      test:
        - CMD-SHELL
        - pg_isready -U \${_APP_DB_USER} -d \${_APP_DB_SCHEMA}
      interval: 5s
      timeout: 5s
      retries: 10
      start_period: 10s
    command:
      - postgres
      # Every HTTP worker and worker coroutine pools its own connections; the default of 100 runs out under load
      - -c
      - max_connections=\${_APP_DB_MAX_CONNECTIONS:-500}`},{name:`appwrite-embedding`,block:`  appwrite-embedding:
    image: appwrite/embedding:0.3.1
    profiles:
      - embedding
    environment:
      EMBEDDING_MODELS: \${_APP_EMBEDDING_MODELS:-nomic-embed-text}
    container_name: appwrite-embedding
    restart: unless-stopped
    volumes:
      - appwrite-models:/home/embedder/models
    networks:
      - appwrite`},{name:`redis`,block:`  redis:
    image: redis:7.4.7-alpine
    logging:
      driver: json-file
      options:
        max-file: "5"
        max-size: 10m
    container_name: appwrite-redis
    command:
      - redis-server
      - --maxmemory
      - 512mb
      - --maxmemory-policy
      - allkeys-lru
      - --maxmemory-samples
      - "5"
    networks:
      - appwrite
    volumes:
      - appwrite-redis:/data:rw
    healthcheck:
      test:
        - CMD
        - redis-cli
        - ping
      interval: 5s
      timeout: 5s
      retries: 12`}],Pe=[{name:`appwrite-mariadb`,block:`  appwrite-mariadb: null`},{name:`appwrite-mongodb`,block:`  appwrite-mongodb: null`},{name:`appwrite-mongodb-keyfile`,block:`  appwrite-mongodb-keyfile: null`},{name:`appwrite-postgresql`,block:`  appwrite-postgresql: null`},{name:`appwrite-redis`,block:`  appwrite-redis: null`},{name:`appwrite-cache`,block:`  appwrite-cache: null`},{name:`appwrite-clickhouse`,block:`  appwrite-clickhouse: null`},{name:`appwrite-uploads`,block:`  appwrite-uploads: null`},{name:`appwrite-imports`,block:`  appwrite-imports: null`},{name:`appwrite-certificates`,block:`  appwrite-certificates: null`},{name:`appwrite-functions`,block:`  appwrite-functions: null`},{name:`appwrite-sites`,block:`  appwrite-sites: null
  # Pinned name (unprefixed) so the jobs-service can attach it to build workers
  # by a stable name across environments (see _APP_BUILDS_VOLUME).`},{name:`appwrite-builds`,block:`  appwrite-builds:
    name: appwrite-builds`},{name:`appwrite-config`,block:`  appwrite-config: null`},{name:`appwrite-models`,block:`  appwrite-models: null`},{name:`openruntimes-node-modules-cache`,block:`  openruntimes-node-modules-cache: null`}];var Fe=`http://${z}:8080`,Ie={postgresql:`5432`,mariadb:`3306`,mongodb:`27017`};function Le({database:e,topology:t,autogravity:n}){let r=new Set([...Ae.filter(t=>t!==e),...je[t===`combined`?`separate`:`combined`]]);n||r.add(z);let i=new Set(Object.entries(Me).filter(([t])=>t!==e).flatMap(([,e])=>e));return`x-logging:
  logging:
    driver: json-file
    options:
      max-file: "5"
      max-size: 10m
services:\n${Ne.filter(e=>!r.has(e.name)).map(e=>n?e.block:e.block.replace(RegExp(`^[ \\t]+- ${z}\\n`,`m`),``)).join(`
`)}\nnetworks:
  gateway:
    name: gateway
  appwrite:
    name: appwrite
  runtimes:
    name: runtimes
  browser:
    name: browser\nvolumes:\n${Pe.filter(e=>!i.has(e.name)).map(e=>e.block).join(`
`)}\n`.replaceAll("${_APP_DB_HOST:-postgresql}",e)}function Re(){let e=new Uint8Array(32);return globalThis.crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}function ze({database:e,autogravity:t}){return`_APP_ENV=development
_APP_EDITION=self-hosted
_APP_LOCALE=en
_APP_OPENSSL_KEY_V1=your-secret-key
_APP_NOTIFICATIONS_TRACKING_SECRET=your-secret-key
_APP_RULES_FORMAT=md5
_APP_SYSTEM_RESPONSE_FORMAT=
_APP_TRUSTED_HEADERS=x-forwarded-for
_APP_TRUSTED_PROXIES=127.0.0.1,::1,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16
_APP_WORKER_PER_CORE=6
_APP_WORKERS_NUM=1
_APP_WORKER_MAX_COROUTINES=1
_APP_MEMORY_LIMIT=512M
_APP_WORKER_SCREENSHOTS_ROUTER=http://appwrite
_APP_REALTIME_TAIL_RATE=50
_APP_COMPRESSION_ENABLED=enabled
_APP_COMPRESSION_MIN_SIZE_BYTES=1024
_APP_DOMAIN=appwrite.test
_APP_DOMAIN_FUNCTIONS=functions.localhost
_APP_DOMAIN_SITES=sites.localhost,rebranded.localhost
_APP_DOMAIN_TARGET_A=203.0.0.1
_APP_DOMAIN_TARGET_AAAA=::1
_APP_DOMAIN_TARGET_CAA=digicert.com
_APP_DOMAIN_TARGET_CNAME=cname.localhost
_APP_CUSTOM_DOMAIN_DENY_LIST=
_APP_DNS=172.16.238.100
_APP_DNS_EXTERNAL=127.0.0.11
_APP_ALLOWED_INTERNAL_ADDRESSES=172.16.238.0/24,127.0.0.1,::1
_APP_OPTIONS_FORCE_HTTPS=disabled
_APP_OPTIONS_ROUTER_FORCE_HTTPS=disabled
_APP_OPTIONS_ROUTER_PROTECTION=disabled
_APP_OPTIONS_ABUSE=disabled
_APP_OPTIONS_ABUSE_INCREASED_LIMIT_PROJECTS=increased-limit-project
_APP_CONSOLE_DOMAIN=localhost
_APP_CONSOLE_URL=
_APP_CONSOLE_HOSTNAMES=localhost,appwrite.io,*.appwrite.io
_APP_CONSOLE_SCHEMA=appwriteio
_APP_CONSOLE_SESSION_ALERTS=enabled
_APP_CONSOLE_TRUSTED_PROJECTS=trusted-project,another-trusted-project
_APP_CONSOLE_COUNTRIES_DENYLIST=AQ
_APP_CONSOLE_WHITELIST_EMAILS=
_APP_CONSOLE_WHITELIST_IPS=
_APP_CONSOLE_WHITELIST_ROOT=disabled
_APP_CONSOLE_GITHUB_APP_ID=
_APP_CONSOLE_GITHUB_SECRET=
_APP_CONSOLE_GITLAB_APP_ID=
_APP_CONSOLE_GITLAB_SECRET=
_APP_CONSOLE_GITLAB_ENDPOINT=
_APP_CONSOLE_BITBUCKET_APP_ID=
_APP_CONSOLE_BITBUCKET_SECRET=
_APP_CONSOLE_GOOGLE_APP_ID=
_APP_CONSOLE_GOOGLE_SECRET=
_APP_DB_ADAPTER=postgresql
_APP_DB_HOST=postgresql
_APP_DB_PORT=5432
_APP_DB_SCHEMA=appwrite
_APP_DB_USER=user
_APP_DB_PASS=password
_APP_DB_ROOT_PASS=rootsecretpassword
_APP_DATABASE_SHARED_NAMESPACE=
_APP_DATABASE_SHARED_TABLES=
_APP_MQTT_REPLAY_DEPTH=5
_APP_REDIS_HOST=redis
_APP_REDIS_PORT=6379
_APP_REDIS_USER=
_APP_REDIS_PASS=
_APP_EMBEDDING=disabled
_APP_EMBEDDING_ENDPOINT='http://appwrite-embedding:3000/embed'
_APP_EMBEDDING_MODELS=nomic-embed-text
_APP_EMBEDDING_TIMEOUT=30000
_APP_STORAGE_DEVICE=Local
_APP_STORAGE_LIMIT=30000000
_APP_STORAGE_PREVIEW_LIMIT=20000000
_APP_AUTOGRAVITY_HOST=http://appwrite-autogravity:8080
_APP_EXIFTOOL_HOST=http://appwrite-exiftool:8080
_APP_STORAGE_ANTIVIRUS=disabled
_APP_STORAGE_ANTIVIRUS_HOST=clamav
_APP_STORAGE_ANTIVIRUS_PORT=3310
_APP_STORAGE_S3_ACCESS_KEY=
_APP_STORAGE_S3_SECRET=
_APP_STORAGE_S3_REGION=us-east-1
_APP_STORAGE_S3_BUCKET=
_APP_STORAGE_S3_ENDPOINT=
_APP_STORAGE_S3_PATH_STYLE=
_APP_STORAGE_DO_SPACES_ACCESS_KEY=
_APP_STORAGE_DO_SPACES_SECRET=
_APP_STORAGE_DO_SPACES_REGION=us-east-1
_APP_STORAGE_DO_SPACES_BUCKET=
_APP_STORAGE_BACKBLAZE_ACCESS_KEY=
_APP_STORAGE_BACKBLAZE_SECRET=
_APP_STORAGE_BACKBLAZE_REGION=us-west-004
_APP_STORAGE_BACKBLAZE_BUCKET=
_APP_STORAGE_LINODE_ACCESS_KEY=
_APP_STORAGE_LINODE_SECRET=
_APP_STORAGE_LINODE_REGION=eu-central-1
_APP_STORAGE_LINODE_BUCKET=
_APP_STORAGE_WASABI_ACCESS_KEY=
_APP_STORAGE_WASABI_SECRET=
_APP_STORAGE_WASABI_REGION=eu-central-1
_APP_STORAGE_WASABI_BUCKET=
_APP_SYSTEM_EMAIL_NAME=Appwrite
_APP_SYSTEM_EMAIL_ADDRESS=noreply@appwrite.io
_APP_SYSTEM_TEAM_EMAIL=team@appwrite.io
_APP_EMAIL_SECURITY=security@appwrite.io
_APP_EMAIL_CERTIFICATES=certificates@appwrite.io
_APP_SMTP_HOST=maildev
_APP_SMTP_PORT=1025
_APP_SMTP_SECURE=
_APP_SMTP_USERNAME=user
_APP_SMTP_PASSWORD=password
_APP_SMS_PROVIDER=sms://username:password@mock
_APP_SMS_FROM=+123456789
_APP_SMS_PROJECTS_DENY_LIST=
_APP_MESSAGE_EMAIL_TEST_DSN=
_APP_MESSAGE_PUSH_TEST_DSN=
_APP_MESSAGE_SMS_TEST_DSN=
_APP_COMPUTE_SIZE_LIMIT=30000000
_APP_COMPUTE_BUILD_SIZE_LIMIT=2000000000
_APP_COMPUTE_BUILD_TIMEOUT=900
_APP_COMPUTE_CPUS=8
_APP_COMPUTE_MEMORY=8192
_APP_COMPUTE_INACTIVE_THRESHOLD=600
_APP_COMPUTE_MAINTENANCE_INTERVAL=600
_APP_COMPUTE_RUNTIMES_NETWORK=runtimes
_APP_OPEN_RUNTIMES_NFT=enabled
_APP_FUNCTIONS_RUNTIMES=node-22
_APP_FUNCTIONS_TIMEOUT=900
_APP_FUNCTIONS_CREATION_ABUSE_LIMIT=5000
_APP_SITES_RUNTIMES=static-1,node-22
_APP_SITES_TIMEOUT=60
_APP_EXECUTOR_HOST=http://exc1/v1
_APP_EXECUTOR_SECRET=your-secret-key
_APP_EXECUTOR_IMAGES=openruntimes/node:v5-22,openruntimes/static:v5-1
_APP_EXECUTOR_CONNECTION_STORAGE=local://localhost
_APP_BUILDS_VOLUME=appwrite-builds
_APP_JOBS_HOST=http://orchestrator:8080
_APP_JOBS_SECRET=41a51c959d1027bd9f40e86217ddad25f4567b4e07af16f54a1c556bad7ddaf8
_APP_JOBS_ENDPOINT=http://appwrite
_APP_BROWSER_HOST=http://appwrite-browser:3000/v1
_APP_DOCKER_HUB_USERNAME=
_APP_DOCKER_HUB_PASSWORD=
_APP_MAINTENANCE_INTERVAL=86400
_APP_MAINTENANCE_INACTIVE_INTERVAL=604800
_APP_MAINTENANCE_START_TIME=12:00
_APP_MAINTENANCE_RETENTION_ABUSE=86400
_APP_MAINTENANCE_RETENTION_AUDIT=1209600
_APP_MAINTENANCE_RETENTION_AUDIT_CONSOLE=15778800
_APP_MAINTENANCE_RETENTION_CACHE=2592000
_APP_MAINTENANCE_RETENTION_EXECUTION=1209600
_APP_MAINTENANCE_RETENTION_SCHEDULES=86400
_APP_USAGE_STATS=enabled
_APP_USAGE_PASS=appwrite
_APP_CONNECTIONS_DB_USAGE=http://appwrite:appwrite@clickhouse:8123/appwrite
_APP_POOL_SIZE_USAGE=2
_APP_CONNECTIONS_DB_EXECUTIONS=http://appwrite:appwrite@clickhouse:8123/appwrite
_APP_POOL_SIZE_EXECUTIONS=2
_APP_MAINTENANCE_RETENTION_USAGE_TTL=180
_APP_STATS_USAGE_QUEUE_NAME=v1-stats-usage
_APP_STATS_RESOURCES_QUEUE_NAME=v1-stats-resources
_APP_MAINTENANCE_QUEUE_NAME=v1-maintenance
_APP_STATS_RESOURCES_INTERVAL=3600
_APP_INTERVAL_CLEANUP_STALE_EXECUTIONS=300
_APP_INTERVAL_DOMAIN_VERIFICATION=120
_APP_GRAPHQL_INTROSPECTION=enabled
_APP_GRAPHQL_MAX_BATCH_SIZE=10
_APP_GRAPHQL_MAX_COMPLEXITY=250
_APP_GRAPHQL_MAX_DEPTH=4
_APP_LOGGING_CONFIG=
_APP_LOGGING_FORMAT=pretty
_APP_MIGRATION_HOST=appwrite
_APP_MIGRATIONS_FIREBASE_CLIENT_ID=
_APP_MIGRATIONS_FIREBASE_CLIENT_SECRET=
_APP_PROJECT_REGIONS=default
_APP_GEO_SECRET=your-secret-key
_APP_GEO_ENDPOINT=http://appwrite-geo/v1
_APP_PWNED_PASSWORDS_DSN=mock://localhost
_APP_VCS_GITHUB_APP_ID=
_APP_VCS_GITHUB_APP_NAME=
_APP_VCS_GITHUB_CLIENT_ID=
_APP_VCS_GITHUB_CLIENT_SECRET=
_APP_VCS_GITHUB_PRIVATE_KEY=disabled
_APP_VCS_GITHUB_WEBHOOK_SECRET=github-webhook-secret
_APP_VCS_GITEA_ENDPOINT=http://gitea:3000
_APP_VCS_GITEA_BROWSER_ENDPOINT=http://localhost:9515
_APP_VCS_GITEA_CLIENT_ID=
_APP_VCS_GITEA_CLIENT_SECRET=
_APP_VCS_GITEA_WEBHOOK_SECRET=gitea-webhook-secret
_APP_VCS_GITLAB_ENDPOINT=
_APP_VCS_GITLAB_CLIENT_ID=
_APP_VCS_GITLAB_CLIENT_SECRET=
_APP_VCS_GITLAB_WEBHOOK_SECRET=
_APP_VCS_BITBUCKET_CLIENT_ID=
_APP_VCS_BITBUCKET_CLIENT_SECRET=
_APP_VCS_BITBUCKET_WEBHOOK_SECRET=
_APP_VCS_ORIGIN_CLIENT_ID=
_APP_VCS_ORIGIN_PRIVATE_KEY=
_APP_VCS_ENTIRE_PLUGIN=
_APP_VCS_ENTIRE_PRIVATE_KEY=
_APP_VCS_ENTIRE_ISSUER=
_APP_VCS_ENTIRE_ENDPOINT=
_APP_VCS_WEBHOOK_URL=http://appwrite/v1
_APP_WEBHOOK_MAX_FAILED_ATTEMPTS=10
`.replace(/^_APP_DB_ADAPTER=.*$/m,`_APP_DB_ADAPTER=${e}`).replace(/^_APP_DB_HOST=.*$/m,`_APP_DB_HOST=${e}`).replace(/^_APP_DB_PORT=.*$/m,`_APP_DB_PORT=${Ie[e]}`).replace(/^_APP_AUTOGRAVITY_HOST=.*$/m,`_APP_AUTOGRAVITY_HOST=${t?Fe:``}`).replace(/^_APP_PWNED_PASSWORDS_DSN=.*$/m,`_APP_PWNED_PASSWORDS_DSN=none://localhost`).replace(/^_APP_JOBS_SECRET=.*$/m,`_APP_JOBS_SECRET=${Re()}`)}function Be(e){let t=[{filename:`docker-compose.yml`,content:Le(e),language:`yaml`},{filename:`.env`,content:ze(e),language:`bash`},{filename:`clickhouse-config.xml`,content:`<?xml version="1.0"?>
<!--
    Retention for ClickHouse's own system log tables.

    Every <ttl> in the image's config.xml sits inside an XML comment, so these
    tables keep every row forever, and the metric ones add a row per second
    whether or not the instance serves traffic. Left alone they outgrow the
    usage data they sit next to and fill the volume.

    When a window here changes, ClickHouse replaces the table on the next
    restart and keeps the old one, rows and all, as <log>_<N>.
    clickhouse-init.sh gives those old tables the same window.
-->
<clickhouse>
    <!-- The metric, trace and profile logs sample the server every second whether
         or not Appwrite serves traffic, and nothing reads them back, so their
         writes and the merges behind them are pure overhead. -->
    <asynchronous_metric_log remove="1"/>
    <metric_log remove="1"/>
    <histogram_metric_log remove="1"/>
    <query_metric_log remove="1"/>
    <processors_profile_log remove="1"/>
    <trace_log remove="1"/>
    <!-- text_log repeats the server log the container already writes. -->
    <text_log remove="1"/>

    <!-- Kept for debugging, capped so they cannot fill the volume. -->
    <asynchronous_insert_log><ttl>event_date + INTERVAL 3 DAY DELETE</ttl></asynchronous_insert_log>
    <query_log><ttl>event_date + INTERVAL 7 DAY DELETE</ttl></query_log>
    <query_views_log><ttl>event_date + INTERVAL 7 DAY DELETE</ttl></query_views_log>
    <query_thread_log><ttl>event_date + INTERVAL 7 DAY DELETE</ttl></query_thread_log>
    <part_log><ttl>event_date + INTERVAL 7 DAY DELETE</ttl></part_log>
    <background_schedule_pool_log><ttl>event_date + INTERVAL 7 DAY DELETE</ttl></background_schedule_pool_log>

    <!-- Longer, so it still covers a report that reaches us late. crash_log is
         deliberately left alone: it is tiny and worth keeping. -->
    <error_log><ttl>event_date + INTERVAL 14 DAY DELETE</ttl></error_log>
</clickhouse>
`,language:`markup`},{filename:`clickhouse-init.sh`,content:`#!/bin/bash
# The ClickHouse entrypoint sources this file, so a subshell keeps these options out of it.
(
  set -euo pipefail

  client() {
    clickhouse-client --host 127.0.0.1 --user "$CLICKHOUSE_USER" --password "$CLICKHOUSE_PASSWORD" "$@"
  }

  # Flushing replaces log tables whose definition changed, keeping each old table as <log>_<N>.
  client --query 'SYSTEM FLUSH LOGS'

  # Tables left behind never expire on their own: take the TTL of the log that
  # replaced this one, or a week when the log is no longer written at all.
  # The named logs must match the ones clickhouse-config.xml removes: a log that
  # is still written gets replaced on the next restart if its TTL is altered here.
  client --format TSVRaw <<'SQL' | client --multiquery
SELECT concat('ALTER TABLE system.', stale.name, ' MODIFY TTL ', if(active.name = '', 'event_date + INTERVAL 7 DAY DELETE', splitByString(' SETTINGS ', splitByString(' TTL ', active.engine_full)[2])[1]), ';')
FROM (
  SELECT name, splitByChar('_', name)[-1] AS suffix, arrayStringConcat(arrayPopBack(splitByChar('_', name)), '_') AS log
  FROM system.tables
  WHERE database = 'system'
    AND position(engine_full, ' TTL ') = 0
    AND endsWith(engine, 'MergeTree')
    AND name IN (SELECT table FROM system.columns WHERE database = 'system' AND name = 'event_date' AND type = 'Date')
) AS stale
LEFT JOIN system.tables AS active
  ON active.database = 'system'
  AND active.name = stale.log
  AND position(active.engine_full, ' TTL ') > 0
WHERE (endsWith(stale.log, '_log') AND toUInt64OrNull(stale.suffix) IS NOT NULL)
  OR stale.name IN ('asynchronous_metric_log', 'metric_log', 'histogram_metric_log', 'query_metric_log', 'processors_profile_log', 'trace_log', 'text_log')
SQL
)
`,language:`bash`}];return e.database===`mongodb`&&t.push({filename:`mongo-init.js`,content:`// mongo-init.js

// Switch to the admin database
const adminDb = db.getSiblingDB("admin");

// Get username and password from environment variables
const username = process.env.MONGO_INITDB_USERNAME;
const password = process.env.MONGO_INITDB_PASSWORD;
const database = process.env.MONGO_INITDB_DATABASE;

// Create the user
if (adminDb.getUser(username) === null) {
  adminDb.createUser({
    user: username,
    pwd: password,
    roles: [{ role: "readWrite", db: database }],
  });
}
`,language:`javascript`},{filename:`mongo-entrypoint.sh`,content:`#!/bin/bash
set -e

# Fix keyfile permissions if mounted from volume
KEYFILE_PATH="/data/keyfile/mongo-keyfile"

if [ ! -f "$KEYFILE_PATH" ]; then
  echo "Generating random MongoDB keyfile..."
  mkdir -p /data/keyfile
  openssl rand -base64 756 > "$KEYFILE_PATH"
fi

chmod 400 "$KEYFILE_PATH"
chown mongodb:mongodb "$KEYFILE_PATH" 2>/dev/null || chown 999:999 "$KEYFILE_PATH"

# The standard entrypoint initialises an empty data directory with a second mongod
# on 27017, stopped with \`mongod --shutdown\`. That returns once the server clears
# <dbpath>/mongod.lock, several steps before it exits and releases the port, and
# the real server binds a millisecond after it starts -- so a slow shutdown tail
# leaves it exiting 48, "Address already in use", taking the container with it.
# Initialise here instead, on a port the real server never binds, and hand over a
# directory the standard entrypoint has nothing left to do to.
#
# The marker is written only once every user exists, because mongod creates the
# data directory long before that: keying off the directory would let a first boot
# interrupted midway come back up with authentication on and no one to authenticate
# as. Each step below is skippable, so a resumed initialisation finishes the part
# that did not happen.
INIT_MARKER=/data/db/.appwrite-initialised

if [ ! -e "$INIT_MARKER" ]; then
  INIT_PORT=27018

  echo "Initialising MongoDB data directory..."
  find -L /data/db \\! -user mongodb -exec chown mongodb '{}' +
  export MONGO_INITDB_DATABASE="\${MONGO_INITDB_DATABASE:-test}"

  gosu mongodb mongod --dbpath /data/db --bind_ip 127.0.0.1 --port "$INIT_PORT" &
  INIT_SERVER=$!

  READY=
  for _ in $(seq 1 30); do
    if mongosh --host 127.0.0.1 --port "$INIT_PORT" --quiet --eval 'quit(0)' > /dev/null 2>&1; then
      READY=1
      break
    fi
    if ! kill -0 "$INIT_SERVER" 2>/dev/null; then
      break
    fi
    sleep 1
  done

  if [ -z "$READY" ]; then
    echo "MongoDB did not accept connections for initialisation" >&2
    exit 1
  fi

  mongosh --host 127.0.0.1 --port "$INIT_PORT" --quiet admin --eval '
    const username = process.env.MONGO_INITDB_ROOT_USERNAME;

    if (db.getUser(username) === null) {
      db.createUser({
        user: username,
        pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
        roles: [{ role: "root", db: "admin" }]
      });
    }
  '
  mongosh --host 127.0.0.1 --port "$INIT_PORT" --quiet "$MONGO_INITDB_DATABASE" /mongo-init.js

  touch "$INIT_MARKER"

  kill -TERM "$INIT_SERVER"
  wait "$INIT_SERVER"
  echo "MongoDB data directory initialised."
fi

# Use MongoDB's standard entrypoint with our command
exec docker-entrypoint.sh mongod --replSet rs0 --bind_ip_all --auth --keyFile "$KEYFILE_PATH"
`,language:`bash`}),t}var Ve=[{value:`postgresql`,label:`PostgreSQL`,description:`Relational SQL database (default)`},{value:`mariadb`,label:`MariaDB`,description:`Relational SQL database`},{value:`mongodb`,label:`MongoDB`,description:`Document database`}],He=[{value:`combined`,label:`Combined`,description:`One worker and one scheduler (recommended)`},{value:`separate`,label:`Separate`,description:`One container per queue for scale-out`}],Ue=[{value:`enabled`,label:`Enabled`,description:`Focal point detection for gravity=auto image previews`},{value:`disabled`,label:`Disabled`,description:`No AutoGravity container`}];function B({groupId:e,label:t,options:n,value:r,onChange:i}){return(0,L.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,L.jsx)(`span`,{className:`text-sm font-medium text-foreground`,children:t}),(0,L.jsx)(s,{value:r,onValueChange:e=>i(e),"aria-label":t,className:`grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,children:n.map(t=>{let n=`${e}-${t.value}`;return(0,L.jsxs)(`div`,{className:g(`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors`,t.value===r?`border-primary bg-card`:`border-border bg-card/50 hover:border-primary/30`),onClick:()=>i(t.value),children:[(0,L.jsx)(ae,{value:t.value,id:n,className:`mt-0.5 shrink-0 pointer-events-none`}),(0,L.jsxs)(c,{htmlFor:n,className:`pointer-events-none flex min-w-0 flex-1 cursor-pointer flex-col items-start gap-0.5 text-left`,children:[(0,L.jsx)(`span`,{className:`text-sm font-medium text-foreground`,children:t.label}),(0,L.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:t.description})]})]},t.value)})})]})}function We(e,t){let n=new Blob([t],{type:`text/plain`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}function Ge(){let[e,t]=(0,I.useState)(`postgresql`),[n,a]=(0,I.useState)(`combined`),[o,s]=(0,I.useState)(!0),[c,l]=(0,I.useState)(`docker-compose.yml`),u=(0,I.useMemo)(()=>Be({database:e,topology:n,autogravity:o}),[e,n,o]),d=u.find(e=>e.filename===c)??u[0];return(0,L.jsxs)(`section`,{className:`not-prose my-6 flex flex-col gap-6`,children:[(0,L.jsx)(B,{groupId:`compose-database`,label:`Database`,options:Ve,value:e,onChange:t}),(0,L.jsx)(B,{groupId:`compose-topology`,label:`Workers and schedulers`,options:He,value:n,onChange:a}),(0,L.jsx)(B,{groupId:`compose-autogravity`,label:`AutoGravity`,options:Ue,value:o?`enabled`:`disabled`,onChange:e=>s(e===`enabled`)}),(0,L.jsx)(ee,{code:d.content,language:d.language,tabs:u.map(e=>({id:e.filename,label:e.filename})),activeTabId:d.filename,onTabChange:l,selectorAriaLabel:`Configuration file`,fixedHeight:`24rem`,actions:(0,L.jsx)(r,{variant:`ghost`,size:`icon`,"aria-label":`Download ${d.filename}`,onClick:()=>We(d.filename,d.content),children:(0,L.jsx)(i,{"aria-hidden":`true`})})})]})}function V(e){return e?.trim()?e.split(`,`).map(e=>e.trim()).filter(Boolean):[]}function Ke({anyOf:e,allOf:t,children:n}){let{features:r}=te(),i=V(e),a=V(t);return i.length>0&&!i.some(e=>!!r[e])||a.length>0&&!a.every(e=>!!r[e])?null:(0,L.jsx)(L.Fragment,{children:n})}function qe(){let{promptText:e}=ke();return e?.trim()?H(e,!1):null}var Je={ComposeGenerator:Ge,FeatureGate:Ke,MultiCode:xe,Fence:he,Tabs:D,TabsItem:A,MarkdocIcon:de,MarkdocIconImage:be,Link:j,Image:ve,OnlyLight:ge,OnlyDark:S,Blockquote:O,MarkdocTableTag:C,MarkdocTableRoot:k,MarkdocTableHeader:x,MarkdocTableBody:T,MarkdocTableRow:E,MarkdocTableHead:b,MarkdocTableCell:N,Section:()=>null,ArrowLink:({href:e,title:t,children:n})=>(0,L.jsx)(`div`,{className:`my-4 [&_p]:m-0 [&_p]:inline`,children:(0,L.jsxs)(j,{href:e,children:[t??n,(0,L.jsx)(oe,{className:`ms-1 inline size-3.5 align-[-2px]`,"aria-hidden":!0})]})}),CallToAction:({href:e,title:t})=>(0,L.jsx)(`div`,{className:`not-prose my-6`,children:(0,L.jsx)(`a`,{href:e,className:`inline-flex items-center rounded-lg bg-[var(--brand-cta)] px-4 py-2 text-[13px] font-medium text-white hover:opacity-90`,children:t})}),PromptContent:qe,IndexLookupAnimation:Se,RateLimitStrategyAnimation:P,Video:({src:e,title:t})=>(0,L.jsx)(`div`,{className:`not-prose my-6 overflow-hidden rounded-xl border border-border`,children:(0,L.jsx)(`video`,{src:e,controls:!0,className:`w-full`,title:t})}),Youtube:M};function Ye(e){return{...Je,Info:t=>(0,L.jsx)(me,{...t,compact:e}),Cards:pe,CardsItem:t=>(0,L.jsx)(fe,{...t,compact:e}),Heading:t=>(0,L.jsx)(ye,{...t,compact:e}),Accordion:w,AccordionItem:t=>(0,L.jsx)(_e,{...t,compact:e})}}function H(e,t=!1){let n=y.parse(e),r=y.transform(n,ue);return y.renderers.react(r,I.default,{components:Ye(t)})}function Xe({content:e,compact:t=!1}){let n=(0,I.useMemo)(()=>H(e,t),[e,t]);return(0,L.jsx)(le,{children:(0,L.jsx)(`div`,{className:g(o,...a,t&&`text-[14px] leading-[1.65] @[480px]:text-[15px]`),children:n})})}function Ze({slug:e,buttonClassName:t=`h-9 text-[13px]`,showCopyPage:n=!0}){let[i,a]=(0,I.useState)(!1),o=e?`/docs/${e}.md`:`/docs.md`;return(0,L.jsx)(L.Fragment,{children:n?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(r,{variant:`outline`,size:`sm`,className:t,onClick:async()=>{a(!0);try{let e=await(await fetch(o)).text();await navigator.clipboard.writeText(e),f.success(`Copied to clipboard`)}catch{f.error(`Failed to copy`)}finally{a(!1)}},disabled:i,children:[(0,L.jsx)(se,{className:`me-1.5 size-3.5`}),`Copy`]}),(0,L.jsx)(r,{variant:`outline`,size:`sm`,className:t,asChild:!0,children:(0,L.jsxs)(`a`,{href:o,target:`_blank`,rel:`noopener noreferrer`,children:[(0,L.jsx)(ie,{className:`me-1.5 size-3.5`}),`Raw`]})})]}):null})}var U={"/src/content/docs-partials/account-vs-user.md":()=>u(()=>import(`./account-vs-user-BQf4-fV6.js`),[]).then(e=>e.default),"/src/content/docs-partials/auth-events.md":()=>u(()=>import(`./auth-events-e-KXQhJH.js`),[]).then(e=>e.default),"/src/content/docs-partials/auth-security.md":()=>u(()=>import(`./auth-security-DH1bQAqW.js`),[]).then(e=>e.default),"/src/content/docs-partials/cli-disclaimer.md":()=>u(()=>import(`./cli-disclaimer-Dxu3qB7v.js`),[]).then(e=>e.default),"/src/content/docs-partials/cli-function.md":()=>u(()=>import(`./cli-function-C9SrZSZs.js`),[]).then(e=>e.default),"/src/content/docs-partials/cli-push-command.md":()=>u(()=>import(`./cli-push-command-DtG9qtaA.js`),[]).then(e=>e.default),"/src/content/docs-partials/cli-sites.md":()=>u(()=>import(`./cli-sites-D6XwG6vH.js`),[]).then(e=>e.default),"/src/content/docs-partials/configure-github-app.md":()=>u(()=>import(`./configure-github-app-DARPI4rQ.js`),[]).then(e=>e.default),"/src/content/docs-partials/databases-events.md":()=>u(()=>import(`./databases-events-CUs4Zfgc.js`),[]).then(e=>e.default),"/src/content/docs-partials/functions-env-vars.md":()=>u(()=>import(`./functions-env-vars-BPoMMsR3.js`),[]).then(e=>e.default),"/src/content/docs-partials/functions-events.md":()=>u(()=>import(`./functions-events-C7jx3Yg3.js`),[]).then(e=>e.default),"/src/content/docs-partials/git-glob-patterns.md":()=>u(()=>import(`./git-glob-patterns-PGRTAsfP.js`),[]).then(e=>e.default),"/src/content/docs-partials/mcp-add-ides-tools.md":()=>u(()=>import(`./mcp-add-ides-tools-DOx8zhK8.js`),[]).then(e=>e.default),"/src/content/docs-partials/messaging-events.md":()=>u(()=>import(`./messaging-events-BxAhhFeW.js`),[]).then(e=>e.default),"/src/content/docs-partials/note-on-cors.md":()=>u(()=>import(`./note-on-cors-CGl1cn9b.js`),[]).then(e=>e.default),"/src/content/docs-partials/policy-contact-us.md":()=>u(()=>import(`./policy-contact-us-B1IWPTPv.js`),[]).then(e=>e.default),"/src/content/docs-partials/policy-modifications.md":()=>u(()=>import(`./policy-modifications-DJw5zZdo.js`),[]).then(e=>e.default),"/src/content/docs-partials/prohibited-activities.md":()=>u(()=>import(`./prohibited-activities-CXFapxfE.js`),[]).then(e=>e.default),"/src/content/docs-partials/resource-limits.md":()=>u(()=>import(`./resource-limits-DpFjwbj4.js`),[]).then(e=>e.default),"/src/content/docs-partials/sites-env-vars.md":()=>u(()=>import(`./sites-env-vars-B7QMW-5T.js`),[]).then(e=>e.default),"/src/content/docs-partials/sites-events.md":()=>u(()=>import(`./sites-events-BqrOSM3r.js`),[]).then(e=>e.default),"/src/content/docs-partials/storage-events.md":()=>u(()=>import(`./storage-events-BqlSsxYo.js`),[]).then(e=>e.default),"/src/content/docs-partials/test.md":()=>u(()=>import(`./test-DDofBSZL.js`),[]).then(e=>e.default),"/src/content/docs-partials/update-variables.md":()=>u(()=>import(`./update-variables-BoVxtmql.js`),[]).then(e=>e.default)},W=new Map;for(let e of Object.keys(U)){let t=e.split(`/`).pop();t&&W.set(t,e)}var G=new Map;async function Qe(e){{let t=G.get(e);if(t!==void 0)return t}let t=W.get(e);if(!t)return G.set(e,``),``;let n=U[t];if(!n)return G.set(e,``),``;let r=await n();return G.set(e,r),r}function $e(e){return e.replace(/\{%\s*partial\s+file="([^"]+)"\s*\/%\}/g,(e,t)=>G.get(t)??``)}async function et(e){let t=/\{%\s*partial\s+file="([^"]+)"\s*\/%\}/g,n=new Set;for(let r of e.matchAll(t))n.add(r[1]);await Promise.all([...n].map(e=>Qe(e)))}var K={"/src/content/docs/advanced/billing/abuse/index.markdoc":()=>u(()=>import(`./abuse-ZVa7fjar.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/compute/index.markdoc":()=>u(()=>import(`./compute-DEHY3VQR.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/database-reads-and-writes/index.markdoc":()=>u(()=>import(`./database-reads-and-writes-oHo3QnV-.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/embeddings/index.markdoc":()=>u(()=>import(`./embeddings-UQH3zrDk.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/enterprise/index.markdoc":()=>u(()=>import(`./enterprise-DgRo_veW.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/fair-use-policy/index.markdoc":()=>u(()=>import(`./fair-use-policy-DQ8Kz7EU.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/free/index.markdoc":()=>u(()=>import(`./free-Q0GPKYoU.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/image-transformations/index.markdoc":()=>u(()=>import(`./image-transformations-CRAV5D99.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/index.markdoc":()=>u(()=>import(`./billing-CrfscEvh.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/oss/index.markdoc":()=>u(()=>import(`./oss-D0kIZhq7.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/payments/index.markdoc":()=>u(()=>import(`./payments-xDYdydsb.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/phone-otp/index.markdoc":()=>u(()=>import(`./phone-otp-B8T9ei5E.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/premium-geo-db/index.markdoc":()=>u(()=>import(`./premium-geo-db-DNMFCTe4.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/pro/index.markdoc":()=>u(()=>import(`./pro-ZLIBSEsC.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/refund-policy/index.markdoc":()=>u(()=>import(`./refund-policy-zO74HOZB.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/support-sla/index.markdoc":()=>u(()=>import(`./support-sla-Cpbr9Wy8.js`),[]).then(e=>e.default),"/src/content/docs/advanced/billing/uptime-sla/index.markdoc":()=>u(()=>import(`./uptime-sla-id-VoZGS.js`),[]).then(e=>e.default),"/src/content/docs/advanced/migrations/cloud/index.markdoc":()=>u(()=>import(`./cloud-DmHyvoGp.js`),[]).then(e=>e.default),"/src/content/docs/advanced/migrations/firebase/index.markdoc":()=>u(()=>import(`./firebase-BcN0YUgV.js`),[]).then(e=>e.default),"/src/content/docs/advanced/migrations/index.markdoc":()=>u(()=>import(`./migrations-CP2t4XgS.js`),[]).then(e=>e.default),"/src/content/docs/advanced/migrations/nhost/index.markdoc":()=>u(()=>import(`./nhost-b4m6kGTj.js`),[]).then(e=>e.default),"/src/content/docs/advanced/migrations/self-hosted/index.markdoc":()=>u(()=>import(`./self-hosted-D94HJTzf.js`),[]).then(e=>e.default),"/src/content/docs/advanced/migrations/supabase/index.markdoc":()=>u(()=>import(`./supabase-DDKnLvWd.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/abuse-protection/index.markdoc":()=>u(()=>import(`./abuse-protection-DFTQvoXy.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/audit-logs/index.markdoc":()=>u(()=>import(`./audit-logs-C7QNf8Mp.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/authentication/index.markdoc":()=>u(()=>import(`./authentication-DumJQPXG.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/backups/index.markdoc":()=>u(()=>import(`./backups-CjKPWNsh.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/ccpa/index.markdoc":()=>u(()=>import(`./ccpa-BHSFmXIM.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/encryption/index.markdoc":()=>u(()=>import(`./encryption-Cjs95Mx0.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/gdpr/index.markdoc":()=>u(()=>import(`./gdpr-DHKoyXHH.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/hipaa/index.markdoc":()=>u(()=>import(`./hipaa-D_Wl5t04.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/https/index.markdoc":()=>u(()=>import(`./https-BjZB-Tsl.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/index.markdoc":()=>u(()=>import(`./security-DTn8lLVk.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/mfa/index.markdoc":()=>u(()=>import(`./mfa-0Y3JV8uI.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/pci/index.markdoc":()=>u(()=>import(`./pci-DJnPnXzg.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/penetration-tests/index.markdoc":()=>u(()=>import(`./penetration-tests-BiM5isEz.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/permissions/index.markdoc":()=>u(()=>import(`./permissions-Dn1p7UIr.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/rate-limits/index.markdoc":()=>u(()=>import(`./rate-limits-CggFSbbL.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/roles/index.markdoc":()=>u(()=>import(`./roles-BEuNS6Fk.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/soc2/index.markdoc":()=>u(()=>import(`./soc2-BLM1INXU.js`),[]).then(e=>e.default),"/src/content/docs/advanced/security/tls/index.markdoc":()=>u(()=>import(`./tls-CAtUnUKt.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/configuration/breached-passwords/index.markdoc":()=>u(()=>import(`./breached-passwords-BbcTdP8o.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/configuration/databases/index.markdoc":()=>u(()=>import(`./databases-CbXvYhXg.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/configuration/email/index.markdoc":()=>u(()=>import(`./email-CCm3ro5c.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/configuration/environment-variables/index.markdoc":()=>u(()=>import(`./environment-variables-BIhPhr0S.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/configuration/functions/index.markdoc":()=>u(()=>import(`./functions-Ctnc5zUW.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/configuration/sites/index.markdoc":()=>u(()=>import(`./sites-fjKN_fjT.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/configuration/sms/index.markdoc":()=>u(()=>import(`./sms-uYzwM0x6.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/configuration/storage/index.markdoc":()=>u(()=>import(`./storage-DpAnFPB9.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/configuration/tls-certificates/index.markdoc":()=>u(()=>import(`./tls-certificates-CZdttfHp.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/configuration/topologies/index.markdoc":()=>u(()=>import(`./topologies-Bqq_0xnX.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/configuration/version-control/index.markdoc":()=>u(()=>import(`./version-control-Bcjw9EOl.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/index.markdoc":()=>u(()=>import(`./self-hosting-CkDco-RI.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/installation/index.markdoc":()=>u(()=>import(`./installation-BHD2mSuG.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/mcp/index.markdoc":()=>u(()=>import(`./mcp-Bsmi7eeK.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/platforms/aws/index.markdoc":()=>u(()=>import(`./aws-D-wRTlSf.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/platforms/azure/index.markdoc":()=>u(()=>import(`./azure-W8q6xcfJ.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/platforms/coolify/index.markdoc":()=>u(()=>import(`./coolify-DtOSWHZs.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/platforms/digitalocean/index.markdoc":()=>u(()=>import(`./digitalocean-FEzR2Dtj.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/platforms/dokploy/index.markdoc":()=>u(()=>import(`./dokploy-CtwkKpQ5.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/platforms/google-cloud/index.markdoc":()=>u(()=>import(`./google-cloud-Co2IkIOD.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/platforms/kubernetes/index.markdoc":()=>u(()=>import(`./kubernetes-DHFSpE68.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/production/backups/index.markdoc":()=>u(()=>import(`./backups-CxIaS504.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/production/debugging/index.markdoc":()=>u(()=>import(`./debugging-D2VCEaCj.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/production/emails/index.markdoc":()=>u(()=>import(`./emails-C9O8ItEG.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/production/errors/index.markdoc":()=>u(()=>import(`./errors-Dk7Ty7HB.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/production/index.markdoc":()=>u(()=>import(`./production-D1Oc9GrM.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/production/rate-limits/index.markdoc":()=>u(()=>import(`./rate-limits-DdIjJqT5.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/production/scaling/index.markdoc":()=>u(()=>import(`./scaling-DKuVqoZ4.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/production/security/index.markdoc":()=>u(()=>import(`./security-D0dIy6cu.js`),[]).then(e=>e.default),"/src/content/docs/advanced/self-hosting/production/updates/index.markdoc":()=>u(()=>import(`./updates-DVvectCR.js`),[]).then(e=>e.default),"/src/content/docs/apis/events/index.markdoc":()=>u(()=>import(`./events-LO4DBN14.js`),[]).then(e=>e.default),"/src/content/docs/apis/graphql/index.markdoc":()=>u(()=>import(`./graphql-iQrlwaL6.js`),[]).then(e=>e.default),"/src/content/docs/apis/index.markdoc":()=>u(()=>import(`./apis-DYY7K_w5.js`),[]).then(e=>e.default),"/src/content/docs/apis/realtime/authentication/index.markdoc":()=>u(()=>import(`./authentication-BjOXGzxb.js`),[]).then(e=>e.default),"/src/content/docs/apis/realtime/channels/index.markdoc":()=>u(()=>import(`./channels-DCtG9vI4.js`),[]).then(e=>e.default),"/src/content/docs/apis/realtime/custom-endpoint/index.markdoc":()=>u(()=>import(`./custom-endpoint-XPONfyl5.js`),[]).then(e=>e.default),"/src/content/docs/apis/realtime/index.markdoc":()=>u(()=>import(`./realtime-B6y-Y5Kx.js`),[]).then(e=>e.default),"/src/content/docs/apis/realtime/payload/index.markdoc":()=>u(()=>import(`./payload-DpNhRqe1.js`),[]).then(e=>e.default),"/src/content/docs/apis/realtime/presences/index.markdoc":()=>u(()=>import(`./presences-BIKc85qI.js`),[]).then(e=>e.default),"/src/content/docs/apis/realtime/queries/index.markdoc":()=>u(()=>import(`./queries-8mAoYRUG.js`),[]).then(e=>e.default),"/src/content/docs/apis/realtime/subscribe/index.markdoc":()=>u(()=>import(`./subscribe-BdcYNzmC.js`),[]).then(e=>e.default),"/src/content/docs/apis/release-policy/index.markdoc":()=>u(()=>import(`./release-policy-BWcG1Ehh.js`),[]).then(e=>e.default),"/src/content/docs/apis/response-codes/index.markdoc":()=>u(()=>import(`./response-codes-BZu5yM6A.js`),[]).then(e=>e.default),"/src/content/docs/apis/rest/index.markdoc":()=>u(()=>import(`./rest-lN20wHW1.js`),[]).then(e=>e.default),"/src/content/docs/apis/webhooks/index.markdoc":()=>u(()=>import(`./webhooks-yUx8QvVa.js`),[]).then(e=>e.default),"/src/content/docs/partners/apps/consent/index.markdoc":()=>u(()=>import(`./consent-DZuYx3wG.js`),[]).then(e=>e.default),"/src/content/docs/partners/apps/device-flow/index.markdoc":()=>u(()=>import(`./device-flow-RnqpH1A7.js`),[]).then(e=>e.default),"/src/content/docs/partners/apps/index.markdoc":()=>u(()=>import(`./apps-DR0sad2a.js`),[]).then(e=>e.default),"/src/content/docs/partners/apps/installations/index.markdoc":()=>u(()=>import(`./installations-D_u_DeLZ.js`),[]).then(e=>e.default),"/src/content/docs/partners/apps/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-BZzTCZw3.js`),[]).then(e=>e.default),"/src/content/docs/partners/apps/registration/index.markdoc":()=>u(()=>import(`./registration-CyAjrVlh.js`),[]).then(e=>e.default),"/src/content/docs/partners/apps/scopes/index.markdoc":()=>u(()=>import(`./scopes-DKcIexB2.js`),[]).then(e=>e.default),"/src/content/docs/partners/apps/tokens/index.markdoc":()=>u(()=>import(`./tokens-BxrfIzyF.js`),[]).then(e=>e.default),"/src/content/docs/partners/architecture/index.markdoc":()=>u(()=>import(`./architecture-CJDjWanO.js`),[]).then(e=>e.default),"/src/content/docs/partners/domains/index.markdoc":()=>u(()=>import(`./domains-DEgwNYQn.js`),[]).then(e=>e.default),"/src/content/docs/partners/guides/marketplaces/index.markdoc":()=>u(()=>import(`./marketplaces-BsUgEdmF.js`),[]).then(e=>e.default),"/src/content/docs/partners/guides/multi-tenancy/index.markdoc":()=>u(()=>import(`./multi-tenancy-CfOuxqVM.js`),[]).then(e=>e.default),"/src/content/docs/partners/guides/provisioning/index.markdoc":()=>u(()=>import(`./provisioning-ahhKWpR3.js`),[]).then(e=>e.default),"/src/content/docs/partners/index.markdoc":()=>u(()=>import(`./partners-CAfMXbFT.js`),[]).then(e=>e.default),"/src/content/docs/partners/oauth-connect/index.markdoc":()=>u(()=>import(`./oauth-connect-B93D6TSH.js`),[]).then(e=>e.default),"/src/content/docs/partners/oauth-connect/scopes/index.markdoc":()=>u(()=>import(`./scopes-CqZBeqTi.js`),[]).then(e=>e.default),"/src/content/docs/partners/oauth-connect/setup/index.markdoc":()=>u(()=>import(`./setup-C-d-dpS2.js`),[]).then(e=>e.default),"/src/content/docs/partners/org-api-keys/index.markdoc":()=>u(()=>import(`./org-api-keys-Xd9bo0Ps.js`),[]).then(e=>e.default),"/src/content/docs/partners/organizations/index.markdoc":()=>u(()=>import(`./organizations-syj95OIx.js`),[]).then(e=>e.default),"/src/content/docs/partners/organizations/manage/index.markdoc":()=>u(()=>import(`./manage-BeEdnrWB.js`),[]).then(e=>e.default),"/src/content/docs/partners/organizations/members/index.markdoc":()=>u(()=>import(`./members-DlWdMXV9.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/api-keys/index.markdoc":()=>u(()=>import(`./api-keys-ZMpDPrY6.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/auth-methods/index.markdoc":()=>u(()=>import(`./auth-methods-D53c8kIy.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/branded-emails/index.markdoc":()=>u(()=>import(`./branded-emails-DhwE_j5q.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/create/index.markdoc":()=>u(()=>import(`./create-Di2kb2oF.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/email-templates/index.markdoc":()=>u(()=>import(`./email-templates-BFa9oNCY.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/environment-variables/index.markdoc":()=>u(()=>import(`./environment-variables-DFaXpuEz.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/index.markdoc":()=>u(()=>import(`./project-CbUdSNcC.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/key-rotation/index.markdoc":()=>u(()=>import(`./key-rotation-DJHKeSIb.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/labels/index.markdoc":()=>u(()=>import(`./labels-C8jAAGQZ.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/mock-phones/index.markdoc":()=>u(()=>import(`./mock-phones-D46JfRWd.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/oauth/index.markdoc":()=>u(()=>import(`./oauth-DdENcoo8.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/platforms/index.markdoc":()=>u(()=>import(`./platforms-C85qu65W.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/policies/index.markdoc":()=>u(()=>import(`./policies-BuGIsITw.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/protocols/index.markdoc":()=>u(()=>import(`./protocols-CiLog_rC.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/provisioning/index.markdoc":()=>u(()=>import(`./provisioning-CbVSliaI.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/services/index.markdoc":()=>u(()=>import(`./services-CZksDujK.js`),[]).then(e=>e.default),"/src/content/docs/partners/project/smtp/index.markdoc":()=>u(()=>import(`./smtp-9aW1oy7_.js`),[]).then(e=>e.default),"/src/content/docs/partners/proxy/index.markdoc":()=>u(()=>import(`./proxy-CxelrxDa.js`),[]).then(e=>e.default),"/src/content/docs/partners/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-BBFR45Ev.js`),[]).then(e=>e.default),"/src/content/docs/partners/usage/index.markdoc":()=>u(()=>import(`./usage-CUQpBoQX.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/actions/index.markdoc":()=>u(()=>import(`./actions-CkyX58bs.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/add-memory/index.markdoc":()=>u(()=>import(`./add-memory-DEuoCNrJ.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/add-model/index.markdoc":()=>u(()=>import(`./add-model-BXAg_J6t.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/automations/index.markdoc":()=>u(()=>import(`./automations-COdYaBjj.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/chat/index.markdoc":()=>u(()=>import(`./chat-CMpT34mz.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/connect-mcp/index.markdoc":()=>u(()=>import(`./connect-mcp-CVSSAg9-.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/conversations/index.markdoc":()=>u(()=>import(`./conversations-BXtgcl9i.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/create-automation/index.markdoc":()=>u(()=>import(`./create-automation-BKMQf_Ve.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/index.markdoc":()=>u(()=>import(`./agent-B9PvDgXq.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/mcp/index.markdoc":()=>u(()=>import(`./mcp-CGMF3zVo.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/memory/index.markdoc":()=>u(()=>import(`./memory-D8CPnnBC.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/models/index.markdoc":()=>u(()=>import(`./models-DXYZWWlF.js`),[]).then(e=>e.default),"/src/content/docs/products/agent/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-BdTFD52e.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/audio-processing/index.markdoc":()=>u(()=>import(`./audio-processing-B8TS9MzH.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/computer-vision/index.markdoc":()=>u(()=>import(`./computer-vision-DQnRBpI0.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/index.markdoc":()=>u(()=>import(`./ai-bGnk8ze5.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/integrations/anyscale/index.markdoc":()=>u(()=>import(`./anyscale-Ckdt2Zlw.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/integrations/elevenlabs/index.markdoc":()=>u(()=>import(`./elevenlabs-CXzXDX0K.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/integrations/fal-ai/index.markdoc":()=>u(()=>import(`./fal-ai-Bf-fpw8D.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/integrations/langchain/index.markdoc":()=>u(()=>import(`./langchain-BHEhYSgk.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/integrations/lmnt/index.markdoc":()=>u(()=>import(`./lmnt-DdQUqu5-.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/integrations/openai/index.markdoc":()=>u(()=>import(`./openai-Bt7kV3Gx.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/integrations/perplexity/index.markdoc":()=>u(()=>import(`./perplexity-CZ1aGj8m.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/integrations/pinecone/index.markdoc":()=>u(()=>import(`./pinecone-Dz9f6Kmc.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/integrations/replicate/index.markdoc":()=>u(()=>import(`./replicate-CF6CuM-I.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/integrations/tensorflow/index.markdoc":()=>u(()=>import(`./tensorflow-CuwpQnkk.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/integrations/togetherai/index.markdoc":()=>u(()=>import(`./togetherai-C5Jj3Dnw.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/natural-language/index.markdoc":()=>u(()=>import(`./natural-language-D2PDGSvk.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/tutorials/image-classification/index.markdoc":()=>u(()=>import(`./image-classification-DI8EvJNz.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/tutorials/language-translation/index.markdoc":()=>u(()=>import(`./language-translation-CSeV90yC.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/tutorials/music-generation/index.markdoc":()=>u(()=>import(`./music-generation-COzUIPmu.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/tutorials/object-detection/index.markdoc":()=>u(()=>import(`./object-detection-BznlaQaq.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/tutorials/speech-recognition/index.markdoc":()=>u(()=>import(`./speech-recognition-B7yDKs82.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/tutorials/text-generation/index.markdoc":()=>u(()=>import(`./text-generation-ioBsRGjv.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/tutorials/text-to-speech/index.markdoc":()=>u(()=>import(`./text-to-speech-DeFox12o.js`),[]).then(e=>e.default),"/src/content/docs/products/ai/video-processing/index.markdoc":()=>u(()=>import(`./video-processing-C3aDnAIT.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/bots/index.markdoc":()=>u(()=>import(`./bots-BvVEvh0W.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/custom-events/index.markdoc":()=>u(()=>import(`./custom-events-DsBXL6bt.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/dashboard/index.markdoc":()=>u(()=>import(`./dashboard-CrleN-xx.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/events/index.markdoc":()=>u(()=>import(`./events-BsHtIgpQ.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/export/index.markdoc":()=>u(()=>import(`./export-qBQVeRch.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/filters/index.markdoc":()=>u(()=>import(`./filters-BCNsgffE.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/firewall/index.markdoc":()=>u(()=>import(`./firewall-r_3DhZRQ.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/flutter/index.markdoc":()=>u(()=>import(`./flutter-DY3EQdsQ.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/index.markdoc":()=>u(()=>import(`./analytics-CrgKxooQ.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/limits/index.markdoc":()=>u(()=>import(`./limits-BQP1BF39.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/metrics/index.markdoc":()=>u(()=>import(`./metrics-Ce0bZiio.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/own-domain/index.markdoc":()=>u(()=>import(`./own-domain-32kze0m6.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/privacy/index.markdoc":()=>u(()=>import(`./privacy-Bn_3ODTV.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/properties/index.markdoc":()=>u(()=>import(`./properties-BPRVBn9F.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-DrD-N-EJ.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/rest/index.markdoc":()=>u(()=>import(`./rest-Dwt3bp8C.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/server-side/index.markdoc":()=>u(()=>import(`./server-side-BhO-3SXZ.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/sources/index.markdoc":()=>u(()=>import(`./sources-DNOKNphD.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/visitors/index.markdoc":()=>u(()=>import(`./visitors-BI8Iaph9.js`),[]).then(e=>e.default),"/src/content/docs/products/analytics/web/index.markdoc":()=>u(()=>import(`./web-CT28snKE.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/accounts/index.markdoc":()=>u(()=>import(`./accounts-Dhl6MGLn.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/anonymous/index.markdoc":()=>u(()=>import(`./anonymous-B7woCOWa.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/checking-auth-status/index.markdoc":()=>u(()=>import(`./checking-auth-status-CtVUFj2_.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/custom-token/index.markdoc":()=>u(()=>import(`./custom-token-BiVaTJ-K.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/email-otp/index.markdoc":()=>u(()=>import(`./email-otp-BwOS7Voh.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/email-password/index.markdoc":()=>u(()=>import(`./email-password-B4nrTyM0.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/email-policies/index.markdoc":()=>u(()=>import(`./email-policies-BPxRBbOo.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/identities/index.markdoc":()=>u(()=>import(`./identities-B6z4oNGO.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/impersonation/index.markdoc":()=>u(()=>import(`./impersonation-DnX0J5bS.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/index.markdoc":()=>u(()=>import(`./auth-Cb6C-Jeg.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/jwt/index.markdoc":()=>u(()=>import(`./jwt-D_DrqJ9p.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/labels/index.markdoc":()=>u(()=>import(`./labels-B0_n6teC.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/magic-url/index.markdoc":()=>u(()=>import(`./magic-url-CUClOZUH.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/message-templates/index.markdoc":()=>u(()=>import(`./message-templates-BmH0ko31.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/mfa/index.markdoc":()=>u(()=>import(`./mfa-BZZOEkpf.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/multi-tenancy/index.markdoc":()=>u(()=>import(`./multi-tenancy-D-4a-u8V.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/native-sign-in/index.markdoc":()=>u(()=>import(`./native-sign-in-8S8sebVa.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/authorization/index.markdoc":()=>u(()=>import(`./authorization-CDWXbGLC.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/clients/index.markdoc":()=>u(()=>import(`./clients-DGg287kA.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/custom-scopes/step-1/index.markdoc":()=>u(()=>import(`./step-1-D_a1-Ul4.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/custom-scopes/step-2/index.markdoc":()=>u(()=>import(`./step-2-DMG100Pn.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/custom-scopes/step-3/index.markdoc":()=>u(()=>import(`./step-3-BL6WjI7q.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/custom-scopes/step-4/index.markdoc":()=>u(()=>import(`./step-4-Bw4vUppw.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/custom-scopes/step-5/index.markdoc":()=>u(()=>import(`./step-5-Bw6MK0gM.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/custom-scopes/step-6/index.markdoc":()=>u(()=>import(`./step-6-Bb9kQEqw.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/custom-scopes/step-7/index.markdoc":()=>u(()=>import(`./step-7-vvwqv5m3.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/device-flow/index.markdoc":()=>u(()=>import(`./device-flow-DCHHfsFp.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/index.markdoc":()=>u(()=>import(`./oauth-server-B1HOsbUH.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/installations/index.markdoc":()=>u(()=>import(`./installations-WXjZeNFo.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-JMqsXAct.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/scopes/index.markdoc":()=>u(()=>import(`./scopes-C5tsmAYO.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-1/index.markdoc":()=>u(()=>import(`./step-1-V3R1YxFo.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-2/index.markdoc":()=>u(()=>import(`./step-2-Cn5rBH3L.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-3/index.markdoc":()=>u(()=>import(`./step-3-DrRZGUIK.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-4/index.markdoc":()=>u(()=>import(`./step-4-VfpoGjMv.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-5/index.markdoc":()=>u(()=>import(`./step-5-5uXfO-mP.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-6/index.markdoc":()=>u(()=>import(`./step-6-l7KLsuxX.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/sign-in-with-your-product/step-7/index.markdoc":()=>u(()=>import(`./step-7-DzKwa0YD.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth-server/tokens/index.markdoc":()=>u(()=>import(`./tokens-BN5ffV0K.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/oauth2/index.markdoc":()=>u(()=>import(`./oauth2-C4UXKp5l.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/passkeys/index.markdoc":()=>u(()=>import(`./passkeys-CGI6dkLa.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/phone-sms/index.markdoc":()=>u(()=>import(`./phone-sms-bWpTdgN4.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/preferences/index.markdoc":()=>u(()=>import(`./preferences-Cjlhekvl.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/presences/index.markdoc":()=>u(()=>import(`./presences-B8tlF_fx.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-IxJdeCfu.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/react/index.markdoc":()=>u(()=>import(`./react-DMFMvmGc.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/security/index.markdoc":()=>u(()=>import(`./security-DJAXkMsR.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/server-side-rendering/index.markdoc":()=>u(()=>import(`./server-side-rendering-DegjqSlf.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/sign-in-with-appwrite/index.markdoc":()=>u(()=>import(`./sign-in-with-appwrite-Cp6fF-cT.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/team-invites/index.markdoc":()=>u(()=>import(`./team-invites-BzIKBFpM.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/teams/index.markdoc":()=>u(()=>import(`./teams-DyrsccX4.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/tokens/index.markdoc":()=>u(()=>import(`./tokens-CLoNjdaP.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/users/index.markdoc":()=>u(()=>import(`./users-frnAMQNS.js`),[]).then(e=>e.default),"/src/content/docs/products/auth/verify-user/index.markdoc":()=>u(()=>import(`./verify-user-BxwJQO-j.js`),[]).then(e=>e.default),"/src/content/docs/products/avatars/browsers/index.markdoc":()=>u(()=>import(`./browsers-DZ9ZgDJS.js`),[]).then(e=>e.default),"/src/content/docs/products/avatars/favicons/index.markdoc":()=>u(()=>import(`./favicons-DvpPDQgG.js`),[]).then(e=>e.default),"/src/content/docs/products/avatars/flags/index.markdoc":()=>u(()=>import(`./flags-DUI7phI1.js`),[]).then(e=>e.default),"/src/content/docs/products/avatars/image-manipulation/index.markdoc":()=>u(()=>import(`./image-manipulation-DPWwduKw.js`),[]).then(e=>e.default),"/src/content/docs/products/avatars/index.markdoc":()=>u(()=>import(`./avatars-CV0za2G6.js`),[]).then(e=>e.default),"/src/content/docs/products/avatars/initials/index.markdoc":()=>u(()=>import(`./initials-CY0JWJ34.js`),[]).then(e=>e.default),"/src/content/docs/products/avatars/payment-methods/index.markdoc":()=>u(()=>import(`./payment-methods-DFCCZJ71.js`),[]).then(e=>e.default),"/src/content/docs/products/avatars/qr-codes/index.markdoc":()=>u(()=>import(`./qr-codes-Ci5_IbC3.js`),[]).then(e=>e.default),"/src/content/docs/products/avatars/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-ULRE-PRk.js`),[]).then(e=>e.default),"/src/content/docs/products/avatars/screenshots/index.markdoc":()=>u(()=>import(`./screenshots-CcNeu9HN.js`),[]).then(e=>e.default),"/src/content/docs/products/avatars/user-photos/index.markdoc":()=>u(()=>import(`./user-photos-Cz5gnmcK.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/atomic-numeric-operations/index.markdoc":()=>u(()=>import(`./atomic-numeric-operations-4wasfsVO.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/backups/index.markdoc":()=>u(()=>import(`./backups-B2V3j5kw.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/bulk-operations/index.markdoc":()=>u(()=>import(`./bulk-operations-BpjmuZgH.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/collections/index.markdoc":()=>u(()=>import(`./collections-0-nbbRma.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/databases/index.markdoc":()=>u(()=>import(`./databases-D_nXPUcs.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/documents/index.markdoc":()=>u(()=>import(`./documents-DOWJywIs.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/index.markdoc":()=>u(()=>import(`./documentsdb-BTGZB3f2.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/json-exports/index.markdoc":()=>u(()=>import(`./json-exports-ea9AwE-5.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/json-imports/index.markdoc":()=>u(()=>import(`./json-imports-38GWwSYQ.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/order/index.markdoc":()=>u(()=>import(`./order-BKVn30iJ.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/pagination/index.markdoc":()=>u(()=>import(`./pagination-Ae7fvvLM.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/permissions/index.markdoc":()=>u(()=>import(`./permissions-CrB_36VO.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/queries/index.markdoc":()=>u(()=>import(`./queries-CiIoi1gC.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-C3eK4AJf.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/timestamp-overrides/index.markdoc":()=>u(()=>import(`./timestamp-overrides-DSnBopnj.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/documentsdb/transactions/index.markdoc":()=>u(()=>import(`./transactions-Gr-yTx1r.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/index.markdoc":()=>u(()=>import(`./databases-D4Qnyxx-.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/backups/index.markdoc":()=>u(()=>import(`./backups-fIRP2xSh.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/branches/index.markdoc":()=>u(()=>import(`./branches-CEYB23y6.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/concepts/access-control/index.markdoc":()=>u(()=>import(`./access-control-DQ2EqUg5.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/concepts/data-modeling/index.markdoc":()=>u(()=>import(`./data-modeling-vcdh2-d0.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/concepts/indexes/index.markdoc":()=>u(()=>import(`./indexes-BPQrIXzL.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/concepts/joins/index.markdoc":()=>u(()=>import(`./joins-4teIM9GW.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/concepts/queries/index.markdoc":()=>u(()=>import(`./queries-BLJrVUps.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/concepts/tables/index.markdoc":()=>u(()=>import(`./tables-B25wpEpY.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/concepts/transactions/index.markdoc":()=>u(()=>import(`./transactions-2rVEtvWi.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/connection-pooling/index.markdoc":()=>u(()=>import(`./connection-pooling-BmnVwy7l.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/connections/index.markdoc":()=>u(()=>import(`./connections-BAEVUrXV.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/high-availability/index.markdoc":()=>u(()=>import(`./high-availability-D4K9v2_z.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/index.markdoc":()=>u(()=>import(`./mysql-B6K_j2ZP.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/auth-js/index.markdoc":()=>u(()=>import(`./auth-js-BeUsWKGm.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/better-auth/index.markdoc":()=>u(()=>import(`./better-auth-CHGitTYJ.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/dbt/index.markdoc":()=>u(()=>import(`./dbt-D-QhxBUM.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/django/index.markdoc":()=>u(()=>import(`./django-CCiHmrh4.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/drivers/index.markdoc":()=>u(()=>import(`./drivers-B_zAJTV9.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/drizzle/index.markdoc":()=>u(()=>import(`./drizzle-D-2DVc4d.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/ef-core/index.markdoc":()=>u(()=>import(`./ef-core-DQz_hqsx.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/fastapi/index.markdoc":()=>u(()=>import(`./fastapi-CI_TXkYw.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/gorm/index.markdoc":()=>u(()=>import(`./gorm-CxhE8fke.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/grafana/index.markdoc":()=>u(()=>import(`./grafana-CKDuEgZx.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/knex/index.markdoc":()=>u(()=>import(`./knex-B3NGde8Q.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/kysely/index.markdoc":()=>u(()=>import(`./kysely-BF0ArYON.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/laravel/index.markdoc":()=>u(()=>import(`./laravel-CFMzyIH-.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/metabase/index.markdoc":()=>u(()=>import(`./metabase-M95ntVeS.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/nextjs/index.markdoc":()=>u(()=>import(`./nextjs-BhAMbsPJ.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/prisma/index.markdoc":()=>u(()=>import(`./prisma-DwFrsry9.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/rails/index.markdoc":()=>u(()=>import(`./rails-Cuy41lBM.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/retool/index.markdoc":()=>u(()=>import(`./retool-D7oRhd_6.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/sequelize/index.markdoc":()=>u(()=>import(`./sequelize-DDU0fknV.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/spring-boot/index.markdoc":()=>u(()=>import(`./spring-boot-B3ZdjNez.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/integrations/typeorm/index.markdoc":()=>u(()=>import(`./typeorm-PS4JtdyV.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/maintenance/index.markdoc":()=>u(()=>import(`./maintenance-CgkVM6uZ.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/monitoring/index.markdoc":()=>u(()=>import(`./monitoring-Dk6dgA_q.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/network-security/index.markdoc":()=>u(()=>import(`./network-security-BMlTP2o5.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-PH1w0vtx.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/mysql/scaling/index.markdoc":()=>u(()=>import(`./scaling-DlUD7G2t.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/backups/index.markdoc":()=>u(()=>import(`./backups-L_28I9I5.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/branches/index.markdoc":()=>u(()=>import(`./branches-BFSK6G8r.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/concepts/access-control/index.markdoc":()=>u(()=>import(`./access-control-xwYT9cfp.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/concepts/data-modeling/index.markdoc":()=>u(()=>import(`./data-modeling-B5rkVOAK.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/concepts/indexes/index.markdoc":()=>u(()=>import(`./indexes-vmobyElz.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/concepts/joins/index.markdoc":()=>u(()=>import(`./joins-CKthv-cH.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/concepts/queries/index.markdoc":()=>u(()=>import(`./queries-B30kOtBA.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/concepts/tables/index.markdoc":()=>u(()=>import(`./tables-DyK8HyoS.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/concepts/transactions/index.markdoc":()=>u(()=>import(`./transactions-BtZ0s090.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/connection-pooling/index.markdoc":()=>u(()=>import(`./connection-pooling-fGGmBTC_.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/connections/index.markdoc":()=>u(()=>import(`./connections-Bt0ZxYMl.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/extensions/index.markdoc":()=>u(()=>import(`./extensions-DdsUhtzz.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/high-availability/index.markdoc":()=>u(()=>import(`./high-availability-BT1bkZfO.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/index.markdoc":()=>u(()=>import(`./postgresql-Bt4-XqkN.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/auth-js/index.markdoc":()=>u(()=>import(`./auth-js-CZ2w2OAr.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/better-auth/index.markdoc":()=>u(()=>import(`./better-auth-BlmHCraQ.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/dbt/index.markdoc":()=>u(()=>import(`./dbt-C-K9CcKj.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/django/index.markdoc":()=>u(()=>import(`./django-DNFtTf54.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/drivers/index.markdoc":()=>u(()=>import(`./drivers-GM1leKL2.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/drizzle/index.markdoc":()=>u(()=>import(`./drizzle-BZPZZ9FZ.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/ef-core/index.markdoc":()=>u(()=>import(`./ef-core-BUDq8Lul.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/fastapi/index.markdoc":()=>u(()=>import(`./fastapi-1mV0fRgp.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/gorm/index.markdoc":()=>u(()=>import(`./gorm-DyZQvk-g.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/grafana/index.markdoc":()=>u(()=>import(`./grafana-DTWbExAS.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/knex/index.markdoc":()=>u(()=>import(`./knex-BL5FWghm.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/kysely/index.markdoc":()=>u(()=>import(`./kysely-Czuc7Jnz.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/laravel/index.markdoc":()=>u(()=>import(`./laravel-ccHtBfBa.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/metabase/index.markdoc":()=>u(()=>import(`./metabase-DR0SqCSG.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/nextjs/index.markdoc":()=>u(()=>import(`./nextjs-e-F5YmTu.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/prisma/index.markdoc":()=>u(()=>import(`./prisma-Dcb80JYO.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/rails/index.markdoc":()=>u(()=>import(`./rails-CzvLW_Vd.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/retool/index.markdoc":()=>u(()=>import(`./retool-DQQ_IFz8.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/sequelize/index.markdoc":()=>u(()=>import(`./sequelize-BCORiHD_.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/spring-boot/index.markdoc":()=>u(()=>import(`./spring-boot-CfPIz90p.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/integrations/typeorm/index.markdoc":()=>u(()=>import(`./typeorm-CHwT13z4.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/maintenance/index.markdoc":()=>u(()=>import(`./maintenance-CS3Tq_Ft.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/monitoring/index.markdoc":()=>u(()=>import(`./monitoring-BnZynCnA.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/network-security/index.markdoc":()=>u(()=>import(`./network-security-Ce1LiyuI.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-Fy6XzLjl.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/postgresql/scaling/index.markdoc":()=>u(()=>import(`./scaling-D6gC1wpu.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/ai-suggestions/index.markdoc":()=>u(()=>import(`./ai-suggestions-CMv46QTQ.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/atomic-numeric-operations/index.markdoc":()=>u(()=>import(`./atomic-numeric-operations-waa-QzLN.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/backups/index.markdoc":()=>u(()=>import(`./backups-BwuZf-pM.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/bulk-operations/index.markdoc":()=>u(()=>import(`./bulk-operations-gjAGLPbJ.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/csv-exports/index.markdoc":()=>u(()=>import(`./csv-exports-w4cNxuUI.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/csv-imports/index.markdoc":()=>u(()=>import(`./csv-imports-PYAh-qIS.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/databases/index.markdoc":()=>u(()=>import(`./databases-CA9WmmVu.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/geo-queries/index.markdoc":()=>u(()=>import(`./geo-queries-BOv5prgv.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/index.markdoc":()=>u(()=>import(`./tablesdb-BJZ6wiV0.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/atomic-numeric-operations/index.markdoc":()=>u(()=>import(`./atomic-numeric-operations-BZptZrMo.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/bulk-operations/index.markdoc":()=>u(()=>import(`./bulk-operations-COC8rw6I.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/collections/index.markdoc":()=>u(()=>import(`./collections-B93jDU7F.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/databases/index.markdoc":()=>u(()=>import(`./databases-DA-e08_F.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/documents/index.markdoc":()=>u(()=>import(`./documents-0GHibu9h.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/order/index.markdoc":()=>u(()=>import(`./order-DXI_jqlc.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/pagination/index.markdoc":()=>u(()=>import(`./pagination-BbGeprjm.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/permissions/index.markdoc":()=>u(()=>import(`./permissions-DxiP_i2X.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/queries/index.markdoc":()=>u(()=>import(`./queries-C1OL_bR3.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-ByVQCP0x.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/relationships/index.markdoc":()=>u(()=>import(`./relationships-Dolx6iCO.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/legacy/type-generation/index.markdoc":()=>u(()=>import(`./type-generation-BoomNYhq.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/offline/index.markdoc":()=>u(()=>import(`./offline-Cmofo6FX.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/operators/index.markdoc":()=>u(()=>import(`./operators-5d40Q_Mu.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/order/index.markdoc":()=>u(()=>import(`./order-C6lxDq1S.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/pagination/index.markdoc":()=>u(()=>import(`./pagination-D1R4XPIV.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/permissions/index.markdoc":()=>u(()=>import(`./permissions-Cz53SvdD.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/queries/index.markdoc":()=>u(()=>import(`./queries-BNT-BtaE.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-Hp7UFw3n.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/relationships/index.markdoc":()=>u(()=>import(`./relationships-B5t4-7Ek.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/rows/index.markdoc":()=>u(()=>import(`./rows-CwuTUfEH.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/tables/index.markdoc":()=>u(()=>import(`./tables-DrHBkVFM.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/timestamp-overrides/index.markdoc":()=>u(()=>import(`./timestamp-overrides-D3ssa8mV.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/transactions/index.markdoc":()=>u(()=>import(`./transactions-BtGwE6M7.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/tablesdb/type-generation/index.markdoc":()=>u(()=>import(`./type-generation-BqYVo5ee.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/backups/index.markdoc":()=>u(()=>import(`./backups-CJotJZL_.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/bulk-operations/index.markdoc":()=>u(()=>import(`./bulk-operations-CwcAsjk8.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/collections/index.markdoc":()=>u(()=>import(`./collections-mi_GrbtZ.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/csv-exports/index.markdoc":()=>u(()=>import(`./csv-exports-DIqg-3ZX.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/csv-imports/index.markdoc":()=>u(()=>import(`./csv-imports-_FmcRh8T.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/databases/index.markdoc":()=>u(()=>import(`./databases-Cbqu_rPk.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/documents/index.markdoc":()=>u(()=>import(`./documents-D7qJ-RM3.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/embeddings/index.markdoc":()=>u(()=>import(`./embeddings-CWos9-Jo.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/index.markdoc":()=>u(()=>import(`./vectorsdb-BAu3WZcu.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/order/index.markdoc":()=>u(()=>import(`./order-BEnMEPkI.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/pagination/index.markdoc":()=>u(()=>import(`./pagination-PZiHfBof.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/permissions/index.markdoc":()=>u(()=>import(`./permissions-DG0it8ob.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/queries/index.markdoc":()=>u(()=>import(`./queries-BiIbrapT.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-JFr4KPTF.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/timestamp-overrides/index.markdoc":()=>u(()=>import(`./timestamp-overrides-UR0rgxBy.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/transactions/index.markdoc":()=>u(()=>import(`./transactions-Bp9NaVA6.js`),[]).then(e=>e.default),"/src/content/docs/products/databases/vectorsdb/vector-search/index.markdoc":()=>u(()=>import(`./vector-search-BV5w7Dg7.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/change-organization/index.markdoc":()=>u(()=>import(`./change-organization-CjgiR_cr.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/connect/index.markdoc":()=>u(()=>import(`./connect-Dw-wSzCm.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/delete/index.markdoc":()=>u(()=>import(`./delete-DTN3cuiQ.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/dns/index.markdoc":()=>u(()=>import(`./dns-cU_rrMac.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/external/index.markdoc":()=>u(()=>import(`./external-IrRWds1F.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/index.markdoc":()=>u(()=>import(`./domains-Du6nR5Zi.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/manage-dns/index.markdoc":()=>u(()=>import(`./manage-dns-DEx2RFOU.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/presets/index.markdoc":()=>u(()=>import(`./presets-BX7xvB51.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/pricing/index.markdoc":()=>u(()=>import(`./pricing-DqTY5mWm.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-uThScj9V.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/register/index.markdoc":()=>u(()=>import(`./register-CPfIqpsg.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/registration/index.markdoc":()=>u(()=>import(`./registration-l2oTIReE.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/renewal/index.markdoc":()=>u(()=>import(`./renewal-C_uOCevV.js`),[]).then(e=>e.default),"/src/content/docs/products/domains/transfer/index.markdoc":()=>u(()=>import(`./transfer-pjvJ8Jja.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/actions/index.markdoc":()=>u(()=>import(`./actions-BQcp0nb-.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/allowlist-ips/index.markdoc":()=>u(()=>import(`./allowlist-ips-Yjkj6a_X.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/attack-mode/index.markdoc":()=>u(()=>import(`./attack-mode-DLEkGjm-.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/block-countries/index.markdoc":()=>u(()=>import(`./block-countries-Ch7CEdKM.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/challenge-bots/index.markdoc":()=>u(()=>import(`./challenge-bots-DDsyMTs_.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/conditions/index.markdoc":()=>u(()=>import(`./conditions-yuWOvZwx.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/index.markdoc":()=>u(()=>import(`./firewall-BS3tLH74.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/monitor/index.markdoc":()=>u(()=>import(`./monitor-DcOlQxe4.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/priority/index.markdoc":()=>u(()=>import(`./priority-NEJ11Hw4.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-CJQaymGb.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/rate-limit-auth/index.markdoc":()=>u(()=>import(`./rate-limit-auth-D_7gmEKf.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/rules/index.markdoc":()=>u(()=>import(`./rules-mIQQ3eMZ.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/scopes/index.markdoc":()=>u(()=>import(`./scopes-fD1dHwHe.js`),[]).then(e=>e.default),"/src/content/docs/products/firewall/site-maintenance/index.markdoc":()=>u(()=>import(`./site-maintenance-DZcODmZ4.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/deploy-from-git/index.markdoc":()=>u(()=>import(`./deploy-from-git-CjSCTdfg.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/deploy-manually/index.markdoc":()=>u(()=>import(`./deploy-manually-D3mY48OU.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/deployments/index.markdoc":()=>u(()=>import(`./deployments-DKBNsrm6.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/develop/index.markdoc":()=>u(()=>import(`./develop-BoFccG6x.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/develop-locally/index.markdoc":()=>u(()=>import(`./develop-locally-ChyIEp6O.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/domains/index.markdoc":()=>u(()=>import(`./domains-cpLQqNwW.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/email/index.markdoc":()=>u(()=>import(`./email-BBuy2F3r.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/environment-variables/index.markdoc":()=>u(()=>import(`./environment-variables-C3PwYiG4.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/examples/index.markdoc":()=>u(()=>import(`./examples-EZjFsGdQ.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/execute/index.markdoc":()=>u(()=>import(`./execute-Wcl7fuWD.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/executions/index.markdoc":()=>u(()=>import(`./executions-u3abPz9Z.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/functions/index.markdoc":()=>u(()=>import(`./functions-ukEjaAM6.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/index.markdoc":()=>u(()=>import(`./functions-DWDP85IZ.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-BUc3ybbr.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/runtimes/index.markdoc":()=>u(()=>import(`./runtimes-C33Geoz4.js`),[]).then(e=>e.default),"/src/content/docs/products/functions/templates/index.markdoc":()=>u(()=>import(`./templates-D12Fsq_p.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/apns/index.markdoc":()=>u(()=>import(`./apns-CtBYAuMw.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/fcm/index.markdoc":()=>u(()=>import(`./fcm-BpDlvblx.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/index.markdoc":()=>u(()=>import(`./messaging-BqoyVKMl.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/mailgun/index.markdoc":()=>u(()=>import(`./mailgun-CsCikNAD.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/messages/index.markdoc":()=>u(()=>import(`./messages-5n0-tkhe.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/msg91/index.markdoc":()=>u(()=>import(`./msg91-BMJfR-mi.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/providers/index.markdoc":()=>u(()=>import(`./providers-DFtTPWGp.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/resend/index.markdoc":()=>u(()=>import(`./resend-BDKJLHWM.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/send-email-messages/index.markdoc":()=>u(()=>import(`./send-email-messages-BttcL9RI.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/send-push-notifications/index.markdoc":()=>u(()=>import(`./send-push-notifications-CyHyJlJm.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/send-sms-messages/index.markdoc":()=>u(()=>import(`./send-sms-messages-C3EnYLYV.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/sendgrid/index.markdoc":()=>u(()=>import(`./sendgrid-CSS2VKbs.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/ses/index.markdoc":()=>u(()=>import(`./ses-BJb_dOd0.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/smtp/index.markdoc":()=>u(()=>import(`./smtp-C9DCnS9u.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/targets/index.markdoc":()=>u(()=>import(`./targets-qUIycKco.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/telesign/index.markdoc":()=>u(()=>import(`./telesign-BkXovmrU.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/textmagic/index.markdoc":()=>u(()=>import(`./textmagic-B071zhW5.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/topics/index.markdoc":()=>u(()=>import(`./topics-CR3xQIo7.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/twilio/index.markdoc":()=>u(()=>import(`./twilio-D8H99MyP.js`),[]).then(e=>e.default),"/src/content/docs/products/messaging/vonage/index.markdoc":()=>u(()=>import(`./vonage-BAkBBfbS.js`),[]).then(e=>e.default),"/src/content/docs/products/network/caa-records/index.markdoc":()=>u(()=>import(`./caa-records-C3gs07Jz.js`),[]).then(e=>e.default),"/src/content/docs/products/network/caching/index.markdoc":()=>u(()=>import(`./caching-C8dRbGl9.js`),[]).then(e=>e.default),"/src/content/docs/products/network/cdn/index.markdoc":()=>u(()=>import(`./cdn-BHRQrTwq.js`),[]).then(e=>e.default),"/src/content/docs/products/network/compression/index.markdoc":()=>u(()=>import(`./compression-DDfRvnPW.js`),[]).then(e=>e.default),"/src/content/docs/products/network/custom-domains/index.markdoc":()=>u(()=>import(`./custom-domains-BGFfIR5C.js`),[]).then(e=>e.default),"/src/content/docs/products/network/ddos/index.markdoc":()=>u(()=>import(`./ddos-Mlaiq-zZ.js`),[]).then(e=>e.default),"/src/content/docs/products/network/dns/index.markdoc":()=>u(()=>import(`./dns-CVPqw0qA.js`),[]).then(e=>e.default),"/src/content/docs/products/network/edges/index.markdoc":()=>u(()=>import(`./edges-CPF3YiCN.js`),[]).then(e=>e.default),"/src/content/docs/products/network/endpoints/index.markdoc":()=>u(()=>import(`./endpoints-CynVcDJM.js`),[]).then(e=>e.default),"/src/content/docs/products/network/index.markdoc":()=>u(()=>import(`./network-C8FqPsmF.js`),[]).then(e=>e.default),"/src/content/docs/products/network/regions/index.markdoc":()=>u(()=>import(`./regions-1zBqGiYZ.js`),[]).then(e=>e.default),"/src/content/docs/products/network/tls/index.markdoc":()=>u(()=>import(`./tls-C9UmlWWY.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/deploy-from-cli/index.markdoc":()=>u(()=>import(`./deploy-from-cli-DnddBm3T.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/deploy-from-git/index.markdoc":()=>u(()=>import(`./deploy-from-git-7CXfi16o.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/deploy-manually/index.markdoc":()=>u(()=>import(`./deploy-manually-noP8ElcF.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/deployments/index.markdoc":()=>u(()=>import(`./deployments-CHVa7LtH.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/develop/index.markdoc":()=>u(()=>import(`./develop-B3A6txh4.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/domains/index.markdoc":()=>u(()=>import(`./domains-Bt4QyKcC.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/environment-variables/index.markdoc":()=>u(()=>import(`./environment-variables-BueAMevx.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/frameworks/index.markdoc":()=>u(()=>import(`./frameworks-DqodYs4Q.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/index.markdoc":()=>u(()=>import(`./sites-C4-lXO4Z.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/instant-rollbacks/index.markdoc":()=>u(()=>import(`./instant-rollbacks-fnwf_ipY.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/logs/index.markdoc":()=>u(()=>import(`./logs-DaHsnm3Q.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/migrations/vercel/index.markdoc":()=>u(()=>import(`./vercel-rg8CeGPb.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/previews/index.markdoc":()=>u(()=>import(`./previews-IdCXf9y8.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/angular/index.markdoc":()=>u(()=>import(`./angular-boVkJmWW.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/astro/index.markdoc":()=>u(()=>import(`./astro-CgG_dLdv.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/flutter/index.markdoc":()=>u(()=>import(`./flutter-6oEiCnKM.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-25BR259r.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/jaspr/index.markdoc":()=>u(()=>import(`./jaspr-D_WfNKT4.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/nextjs/index.markdoc":()=>u(()=>import(`./nextjs-6ltoWnnL.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/nuxt/index.markdoc":()=>u(()=>import(`./nuxt-CaZd9jdi.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/react/index.markdoc":()=>u(()=>import(`./react-Byo_YUtb.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/react-native/index.markdoc":()=>u(()=>import(`./react-native-5gHntRiv.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/remix/index.markdoc":()=>u(()=>import(`./remix-CA2q5eXx.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/sveltekit/index.markdoc":()=>u(()=>import(`./sveltekit-CYbCNOA-.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/tanstack-start/index.markdoc":()=>u(()=>import(`./tanstack-start-Duhj13JT.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/vanilla/index.markdoc":()=>u(()=>import(`./vanilla-D-t4nWTg.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/quick-start/vue/index.markdoc":()=>u(()=>import(`./vue-BQ0CvqRF.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/rendering/index.markdoc":()=>u(()=>import(`./rendering-BviOgwBV.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/rendering/ssr/index.markdoc":()=>u(()=>import(`./ssr-x4ZDW99Z.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/rendering/static/index.markdoc":()=>u(()=>import(`./static-Dx5ZHJna.js`),[]).then(e=>e.default),"/src/content/docs/products/sites/templates/index.markdoc":()=>u(()=>import(`./templates-toZm-96H.js`),[]).then(e=>e.default),"/src/content/docs/products/storage/buckets/index.markdoc":()=>u(()=>import(`./buckets-DVsDdJdg.js`),[]).then(e=>e.default),"/src/content/docs/products/storage/file-tokens/index.markdoc":()=>u(()=>import(`./file-tokens-RT8PrtP_.js`),[]).then(e=>e.default),"/src/content/docs/products/storage/folders/index.markdoc":()=>u(()=>import(`./folders-BKna-d8h.js`),[]).then(e=>e.default),"/src/content/docs/products/storage/images/index.markdoc":()=>u(()=>import(`./images-BfhR1e9G.js`),[]).then(e=>e.default),"/src/content/docs/products/storage/index.markdoc":()=>u(()=>import(`./storage-B5GnofHg.js`),[]).then(e=>e.default),"/src/content/docs/products/storage/permissions/index.markdoc":()=>u(()=>import(`./permissions-Dacc26tN.js`),[]).then(e=>e.default),"/src/content/docs/products/storage/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-19gqI1V2.js`),[]).then(e=>e.default),"/src/content/docs/products/storage/s3/index.markdoc":()=>u(()=>import(`./s3-CaPqgXqr.js`),[]).then(e=>e.default),"/src/content/docs/products/storage/upload-download/index.markdoc":()=>u(()=>import(`./upload-download-D1Cb49Ul.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/android/index.markdoc":()=>u(()=>import(`./android-DZ4D5rUT.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/android-java/index.markdoc":()=>u(()=>import(`./android-java-DQ1JwaXs.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/angular/index.markdoc":()=>u(()=>import(`./angular-CWXbS-dl.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/apple/index.markdoc":()=>u(()=>import(`./apple-BmeZOFhG.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/astro/index.markdoc":()=>u(()=>import(`./astro-B5mcMdVR.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/dart/index.markdoc":()=>u(()=>import(`./dart-D7zdaSCK.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/deno/index.markdoc":()=>u(()=>import(`./deno-FDpWlkhc.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/dotnet/index.markdoc":()=>u(()=>import(`./dotnet-BG69aOTD.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/flutter/index.markdoc":()=>u(()=>import(`./flutter-CB302Sbx.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/go/index.markdoc":()=>u(()=>import(`./go-VPW3PMMU.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/kotlin/index.markdoc":()=>u(()=>import(`./kotlin-sXr3HlYA.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/nextjs/index.markdoc":()=>u(()=>import(`./nextjs-CXCoQ-Np.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/node/index.markdoc":()=>u(()=>import(`./node-DG6gcZti.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/nuxt/index.markdoc":()=>u(()=>import(`./nuxt-Bp1f8Sdd.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/php/index.markdoc":()=>u(()=>import(`./php-BycgHfUJ.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/python/index.markdoc":()=>u(()=>import(`./python-B3vGBowO.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/qwik/index.markdoc":()=>u(()=>import(`./qwik-LHcXQ7Ag.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/react/index.markdoc":()=>u(()=>import(`./react-cv2-Om96.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/react-native/index.markdoc":()=>u(()=>import(`./react-native-DJdcFf09.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/refine/index.markdoc":()=>u(()=>import(`./refine-C9xV9DuU.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/ruby/index.markdoc":()=>u(()=>import(`./ruby-CEJyo256.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/rust/index.markdoc":()=>u(()=>import(`./rust-DJaLygEd.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/solid/index.markdoc":()=>u(()=>import(`./solid-Ul7YwJq6.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/sveltekit/index.markdoc":()=>u(()=>import(`./sveltekit-PQV06z31.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/swift/index.markdoc":()=>u(()=>import(`./swift-DMq-1yUh.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/tanstack-start/index.markdoc":()=>u(()=>import(`./tanstack-start-_mlWksyH.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/vue/index.markdoc":()=>u(()=>import(`./vue-CjJMXJF-.js`),[]).then(e=>e.default),"/src/content/docs/quick-starts/web/index.markdoc":()=>u(()=>import(`./web-DELaCz95.js`),[]).then(e=>e.default),"/src/content/docs/references/index.markdoc":()=>u(()=>import(`./references-CPSEiO5a.js`),[]).then(e=>e.default),"/src/content/docs/references/quick-start/index.markdoc":()=>u(()=>import(`./quick-start-CpM9QAeI.js`),[]).then(e=>e.default),"/src/content/docs/sdks/index.markdoc":()=>u(()=>import(`./sdks-BR7nU3Au.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents/antigravity/index.markdoc":()=>u(()=>import(`./antigravity-rQ5BSufg.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents/chatgpt/index.markdoc":()=>u(()=>import(`./chatgpt-C67Vve4s.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents/claude-code/index.markdoc":()=>u(()=>import(`./claude-code-uPOaLZ3n.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents/codex/index.markdoc":()=>u(()=>import(`./codex-Cul0Q-B_.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents/cursor/index.markdoc":()=>u(()=>import(`./cursor-B-AYka2M.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents/grok-build/index.markdoc":()=>u(()=>import(`./grok-build-DfkAcwkJ.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents/opencode/index.markdoc":()=>u(()=>import(`./opencode-BpGKIRmU.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents/pi/index.markdoc":()=>u(()=>import(`./pi-9FdmRxew.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents/vscode/index.markdoc":()=>u(()=>import(`./vscode-LHYC9DMc.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents/windsurf/index.markdoc":()=>u(()=>import(`./windsurf-DVwENyCr.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents/zed/index.markdoc":()=>u(()=>import(`./zed-D4MLE4pY.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/agents-md/index.markdoc":()=>u(()=>import(`./agents-md-C9g-mk1T.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/ai-in-functions/index.markdoc":()=>u(()=>import(`./ai-in-functions-Dvz0_9qS.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/arena/index.markdoc":()=>u(()=>import(`./arena-n-kyltup.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/assistant/index.markdoc":()=>u(()=>import(`./assistant-zXI8GmPf.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/backend-for-agents/index.markdoc":()=>u(()=>import(`./backend-for-agents-Dp_pnswy.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/docs-as-markdown/index.markdoc":()=>u(()=>import(`./docs-as-markdown-HdDNe8pX.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/mcp-servers/index.markdoc":()=>u(()=>import(`./mcp-servers-Z-8S5ht0.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/persistent-agents-with-realtime/index.markdoc":()=>u(()=>import(`./persistent-agents-with-realtime-pQYLaU7z.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/android-java/index.markdoc":()=>u(()=>import(`./android-java-CWt2NeST.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/android-kotlin/index.markdoc":()=>u(()=>import(`./android-kotlin-BAizwjeq.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/angular/index.markdoc":()=>u(()=>import(`./angular-ChC4rMde.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/apple/index.markdoc":()=>u(()=>import(`./apple-BpjARwXt.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/dart/index.markdoc":()=>u(()=>import(`./dart-BYA344lU.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/deno/index.markdoc":()=>u(()=>import(`./deno-D3wZAQJ5.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/dotnet/index.markdoc":()=>u(()=>import(`./dotnet-B-dBL7hs.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/flutter/index.markdoc":()=>u(()=>import(`./flutter-4O85sYCI.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/go/index.markdoc":()=>u(()=>import(`./go-4ztj4WGd.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/index.markdoc":()=>u(()=>import(`./quickstart-prompts-BReIIzEG.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/kotlin/index.markdoc":()=>u(()=>import(`./kotlin-CL0Oca36.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/nextjs/index.markdoc":()=>u(()=>import(`./nextjs-VzScZwtq.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/node/index.markdoc":()=>u(()=>import(`./node-BGFWkNWv.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/nuxt/index.markdoc":()=>u(()=>import(`./nuxt-xcyYIVZv.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/php/index.markdoc":()=>u(()=>import(`./php-BPN3y_pc.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/python/index.markdoc":()=>u(()=>import(`./python-CV2Mpt03.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/react/index.markdoc":()=>u(()=>import(`./react-r1bBpw0g.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/react-native/index.markdoc":()=>u(()=>import(`./react-native-D2KWECBp.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/refine/index.markdoc":()=>u(()=>import(`./refine-_Xvx-y25.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/ruby/index.markdoc":()=>u(()=>import(`./ruby-CmveGjuL.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/rust/index.markdoc":()=>u(()=>import(`./rust-BBoWL6By.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/solid/index.markdoc":()=>u(()=>import(`./solid-BPwHyJJu.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/sveltekit/index.markdoc":()=>u(()=>import(`./sveltekit-D4sSn7Ck.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/swift/index.markdoc":()=>u(()=>import(`./swift-BwgtrPzp.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/tanstack-start/index.markdoc":()=>u(()=>import(`./tanstack-start-CI8yARA1.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/vue/index.markdoc":()=>u(()=>import(`./vue-CtjuprrH.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/quickstart-prompts/web/index.markdoc":()=>u(()=>import(`./web-BiJAGkIM.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/responsible-ai/index.markdoc":()=>u(()=>import(`./responsible-ai-DKPEff1o.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/skills/index.markdoc":()=>u(()=>import(`./skills-pq_8g9Ez.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/vector-db-and-embeddings/index.markdoc":()=>u(()=>import(`./vector-db-and-embeddings-BKKcYFFI.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/vibe-coding/bolt/index.markdoc":()=>u(()=>import(`./bolt-BxPC8CKN.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/vibe-coding/claude-desktop/index.markdoc":()=>u(()=>import(`./claude-desktop-Cl-Ngbni.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/vibe-coding/emergent/index.markdoc":()=>u(()=>import(`./emergent-gdiIvxnV.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/vibe-coding/lovable/index.markdoc":()=>u(()=>import(`./lovable-0nq833mL.js`),[]).then(e=>e.default),"/src/content/docs/tooling/ai/vibe-coding/zenflow/index.markdoc":()=>u(()=>import(`./zenflow-CmEz_x_Y.js`),[]).then(e=>e.default),"/src/content/docs/tooling/appwriter/index.markdoc":()=>u(()=>import(`./appwriter-90dwrevc.js`),[]).then(e=>e.default),"/src/content/docs/tooling/arena/index.markdoc":()=>u(()=>import(`./arena-BrOvefm5.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-center/index.markdoc":()=>u(()=>import(`./command-center-D4J_cKDj.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-center/shortcuts/index.markdoc":()=>u(()=>import(`./shortcuts-CVgdQ0A4.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-line/buckets/index.markdoc":()=>u(()=>import(`./buckets-D-wrBe6G.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-line/commands/index.markdoc":()=>u(()=>import(`./commands-Cr7jb3gO.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-line/functions/index.markdoc":()=>u(()=>import(`./functions-BbEdeuKi.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-line/generate/index.markdoc":()=>u(()=>import(`./generate-CNa88Xdw.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-line/installation/index.markdoc":()=>u(()=>import(`./installation-B-JGEwkd.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-line/non-interactive/index.markdoc":()=>u(()=>import(`./non-interactive-Dgiu-0yt.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-line/sites/index.markdoc":()=>u(()=>import(`./sites-Bhaa0-CL.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-line/tables/index.markdoc":()=>u(()=>import(`./tables-C1foDzDC.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-line/teams/index.markdoc":()=>u(()=>import(`./teams-BWKSv-ji.js`),[]).then(e=>e.default),"/src/content/docs/tooling/command-line/topics/index.markdoc":()=>u(()=>import(`./topics-C9b8Kp1i.js`),[]).then(e=>e.default),"/src/content/docs/tooling/index.markdoc":()=>u(()=>import(`./tooling-vJXHlR3R.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/index.markdoc":()=>u(()=>import(`./terraform-By-qfOpD.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/provider/index.markdoc":()=>u(()=>import(`./provider-DdqhAAaj.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/auth/index.markdoc":()=>u(()=>import(`./auth-CTygRJI3.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/backups/index.markdoc":()=>u(()=>import(`./backups-EfomGohW.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/databases/index.markdoc":()=>u(()=>import(`./databases-g2IqvWgO.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/dedicated-databases/index.markdoc":()=>u(()=>import(`./dedicated-databases-CM57iil9.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/documentsdb/index.markdoc":()=>u(()=>import(`./documentsdb-DU0pnnbq.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/domains/index.markdoc":()=>u(()=>import(`./domains-CX3yWxPG.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/functions/index.markdoc":()=>u(()=>import(`./functions-DeBaC1iG.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/messaging/index.markdoc":()=>u(()=>import(`./messaging-2Rhq8dQQ.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/sites/index.markdoc":()=>u(()=>import(`./sites-Cb88A39x.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/storage/index.markdoc":()=>u(()=>import(`./storage-D-GJ0UF3.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/vectorsdb/index.markdoc":()=>u(()=>import(`./vectorsdb-CCBLlQeY.js`),[]).then(e=>e.default),"/src/content/docs/tooling/terraform/resources/webhooks/index.markdoc":()=>u(()=>import(`./webhooks-C84Llr8-.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/android/step-1/index.markdoc":()=>u(()=>import(`./step-1-DfGnwr-f.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/android/step-2/index.markdoc":()=>u(()=>import(`./step-2-B4bd1j7S.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/android/step-3/index.markdoc":()=>u(()=>import(`./step-3-CGfQKyl7.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/android/step-4/index.markdoc":()=>u(()=>import(`./step-4-V5dkvBc0.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/android/step-5/index.markdoc":()=>u(()=>import(`./step-5-DoNMes9K.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/android/step-6/index.markdoc":()=>u(()=>import(`./step-6-Cvz38npX.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/android/step-7/index.markdoc":()=>u(()=>import(`./step-7-DMqFUmUp.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/android/step-8/index.markdoc":()=>u(()=>import(`./step-8-C9W8_DjS.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/apple/step-1/index.markdoc":()=>u(()=>import(`./step-1-CGqjS0YB.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/astro-ssr-auth/step-1/index.markdoc":()=>u(()=>import(`./step-1-Csd9m1li.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/astro-ssr-auth/step-2/index.markdoc":()=>u(()=>import(`./step-2-t3oOYn7E.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/astro-ssr-auth/step-3/index.markdoc":()=>u(()=>import(`./step-3-CpBCmTP7.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/astro-ssr-auth/step-4/index.markdoc":()=>u(()=>import(`./step-4-CRRo5Olw.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/astro-ssr-auth/step-5/index.markdoc":()=>u(()=>import(`./step-5-CsFJqe48.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/astro-ssr-auth/step-6/index.markdoc":()=>u(()=>import(`./step-6-DoRK3p6L.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/astro-ssr-auth/step-7/index.markdoc":()=>u(()=>import(`./step-7-ZIVcHSlp.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/astro-ssr-auth/step-8/index.markdoc":()=>u(()=>import(`./step-8-o6d4VVcV.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/flutter/step-1/index.markdoc":()=>u(()=>import(`./step-1-CTy7JLAi.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs/step-1/index.markdoc":()=>u(()=>import(`./step-1-D-fjVqOy.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs/step-2/index.markdoc":()=>u(()=>import(`./step-2-BekEGb3P.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs/step-3/index.markdoc":()=>u(()=>import(`./step-3-DAXn_nCe.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs/step-4/index.markdoc":()=>u(()=>import(`./step-4-BwFAdhFG.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs/step-5/index.markdoc":()=>u(()=>import(`./step-5-C4uNMk4C.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs/step-6/index.markdoc":()=>u(()=>import(`./step-6-BhcqNiJA.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs/step-7/index.markdoc":()=>u(()=>import(`./step-7-DPmCsbad.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs/step-8/index.markdoc":()=>u(()=>import(`./step-8-Dw_XO9vn.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs-ssr-auth/step-1/index.markdoc":()=>u(()=>import(`./step-1-Bhy9C45A.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs-ssr-auth/step-2/index.markdoc":()=>u(()=>import(`./step-2-DLhfz4Vn.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs-ssr-auth/step-3/index.markdoc":()=>u(()=>import(`./step-3-AqEf6OUu.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs-ssr-auth/step-4/index.markdoc":()=>u(()=>import(`./step-4-BkypTaGL.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs-ssr-auth/step-5/index.markdoc":()=>u(()=>import(`./step-5-Ba3m97fq.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs-ssr-auth/step-6/index.markdoc":()=>u(()=>import(`./step-6-kntikc4n.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs-ssr-auth/step-7/index.markdoc":()=>u(()=>import(`./step-7-D_qatOnb.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nextjs-ssr-auth/step-8/index.markdoc":()=>u(()=>import(`./step-8-DDNdOwjP.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt/step-1/index.markdoc":()=>u(()=>import(`./step-1-RlQxwDqo.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt/step-2/index.markdoc":()=>u(()=>import(`./step-2-CewUe3yy.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt/step-3/index.markdoc":()=>u(()=>import(`./step-3-BOd4fRRJ.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt/step-4/index.markdoc":()=>u(()=>import(`./step-4-aN3S6H_n.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt/step-5/index.markdoc":()=>u(()=>import(`./step-5-Div-mZEV.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt/step-6/index.markdoc":()=>u(()=>import(`./step-6-Cdif-lNL.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt/step-7/index.markdoc":()=>u(()=>import(`./step-7-DhIKW6te.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt/step-8/index.markdoc":()=>u(()=>import(`./step-8-8B8nkH4p.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt-ssr-auth/step-1/index.markdoc":()=>u(()=>import(`./step-1-kW0nCJ9f.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt-ssr-auth/step-2/index.markdoc":()=>u(()=>import(`./step-2-CKeKwjl0.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt-ssr-auth/step-3/index.markdoc":()=>u(()=>import(`./step-3-bvySN1kX.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt-ssr-auth/step-4/index.markdoc":()=>u(()=>import(`./step-4-rvq7R6Ls.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt-ssr-auth/step-5/index.markdoc":()=>u(()=>import(`./step-5-4pkMvBpo.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt-ssr-auth/step-6/index.markdoc":()=>u(()=>import(`./step-6-nUyGOdr5.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt-ssr-auth/step-7/index.markdoc":()=>u(()=>import(`./step-7-78PhlTRH.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt-ssr-auth/step-8/index.markdoc":()=>u(()=>import(`./step-8-C401K5oy.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/nuxt-ssr-auth/step-9/index.markdoc":()=>u(()=>import(`./step-9-C-RpsfeO.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react/step-1/index.markdoc":()=>u(()=>import(`./step-1-DUmaTwjS.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react/step-2/index.markdoc":()=>u(()=>import(`./step-2-oK7CT5SP.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react/step-3/index.markdoc":()=>u(()=>import(`./step-3-CW-MPfEn.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react/step-4/index.markdoc":()=>u(()=>import(`./step-4-nABaIgGE.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react/step-5/index.markdoc":()=>u(()=>import(`./step-5-BNz0cKTU.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react/step-6/index.markdoc":()=>u(()=>import(`./step-6-Cd8i89Va.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react/step-7/index.markdoc":()=>u(()=>import(`./step-7-YnWj1S5f.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react/step-8/index.markdoc":()=>u(()=>import(`./step-8-BeQek4rk.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react-native/step-1/index.markdoc":()=>u(()=>import(`./step-1-D85FRfW5.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react-native/step-2/index.markdoc":()=>u(()=>import(`./step-2-CUEr11Tg.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react-native/step-3/index.markdoc":()=>u(()=>import(`./step-3--lh25uTe.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react-native/step-4/index.markdoc":()=>u(()=>import(`./step-4-Uet8wQ3r.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react-native/step-5/index.markdoc":()=>u(()=>import(`./step-5-BwaP0VFH.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react-native/step-6/index.markdoc":()=>u(()=>import(`./step-6-DhmZWZt4.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react-native/step-7/index.markdoc":()=>u(()=>import(`./step-7-YoEWqYCH.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/react-native/step-8/index.markdoc":()=>u(()=>import(`./step-8-cRbjMIJ0.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/refine/step-1/index.markdoc":()=>u(()=>import(`./step-1-BLChK5wa.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/refine/step-2/index.markdoc":()=>u(()=>import(`./step-2-t_dkF1qP.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/refine/step-3/index.markdoc":()=>u(()=>import(`./step-3-CUctsbji.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/refine/step-4/index.markdoc":()=>u(()=>import(`./step-4-BhoT60wg.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/refine/step-5/index.markdoc":()=>u(()=>import(`./step-5-B7ZiGd9r.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/refine/step-6/index.markdoc":()=>u(()=>import(`./step-6-BqLYZyF8.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/refine/step-7/index.markdoc":()=>u(()=>import(`./step-7-BwD3GjO7.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/subscriptions-with-stripe/step-1/index.markdoc":()=>u(()=>import(`./step-1-BxbSYszg.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/subscriptions-with-stripe/step-2/index.markdoc":()=>u(()=>import(`./step-2-DTSiUpRA.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/subscriptions-with-stripe/step-3/index.markdoc":()=>u(()=>import(`./step-3-BoXRuRBO.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/subscriptions-with-stripe/step-4/index.markdoc":()=>u(()=>import(`./step-4-BbUglESP.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/subscriptions-with-stripe/step-5/index.markdoc":()=>u(()=>import(`./step-5-BryqSDn0.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit/step-1/index.markdoc":()=>u(()=>import(`./step-1-DWTrLvsX.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit/step-2/index.markdoc":()=>u(()=>import(`./step-2-DJ-hD_pq.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit/step-3/index.markdoc":()=>u(()=>import(`./step-3-B7MtRTAg.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit/step-4/index.markdoc":()=>u(()=>import(`./step-4-C-opGO6a.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit/step-5/index.markdoc":()=>u(()=>import(`./step-5-m0Tq-f62.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit/step-6/index.markdoc":()=>u(()=>import(`./step-6-BC9-u5Kl.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit/step-7/index.markdoc":()=>u(()=>import(`./step-7-BFhfKwl5.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-csr-auth/step-1/index.markdoc":()=>u(()=>import(`./step-1-DrC0xE8A.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-csr-auth/step-2/index.markdoc":()=>u(()=>import(`./step-2-BjJfwXEZ.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-csr-auth/step-3/index.markdoc":()=>u(()=>import(`./step-3-DAshn3QG.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-csr-auth/step-4/index.markdoc":()=>u(()=>import(`./step-4-B_Lc89Ob.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-csr-auth/step-5/index.markdoc":()=>u(()=>import(`./step-5-BSp1kRcG.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-csr-auth/step-6/index.markdoc":()=>u(()=>import(`./step-6-DWbdzg-I.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-csr-auth/step-7/index.markdoc":()=>u(()=>import(`./step-7-Cf_gVwaL.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-ssr-auth/step-1/index.markdoc":()=>u(()=>import(`./step-1-D8mY4IqX.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-ssr-auth/step-2/index.markdoc":()=>u(()=>import(`./step-2-DKx5tQ9B.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-ssr-auth/step-3/index.markdoc":()=>u(()=>import(`./step-3-9K0iPK-_.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-ssr-auth/step-4/index.markdoc":()=>u(()=>import(`./step-4-DGGTYFxI.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-ssr-auth/step-5/index.markdoc":()=>u(()=>import(`./step-5-DJaG9kJ_.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-ssr-auth/step-6/index.markdoc":()=>u(()=>import(`./step-6-1cl6bl1Y.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-ssr-auth/step-7/index.markdoc":()=>u(()=>import(`./step-7-Cdnx7PCw.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/sveltekit-ssr-auth/step-8/index.markdoc":()=>u(()=>import(`./step-8-DGHMTxkT.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/vue/step-1/index.markdoc":()=>u(()=>import(`./step-1-DTL6zELn.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/vue/step-2/index.markdoc":()=>u(()=>import(`./step-2-BjN-js8U.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/vue/step-3/index.markdoc":()=>u(()=>import(`./step-3-NPlo-b03.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/vue/step-4/index.markdoc":()=>u(()=>import(`./step-4-3TLkXqRU.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/vue/step-5/index.markdoc":()=>u(()=>import(`./step-5-CUpbmrk0.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/vue/step-6/index.markdoc":()=>u(()=>import(`./step-6-CeYkQGYf.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/vue/step-7/index.markdoc":()=>u(()=>import(`./step-7-CVQPZ5YN.js`),[]).then(e=>e.default),"/src/content/docs/tutorials/vue/step-8/index.markdoc":()=>u(()=>import(`./step-8-C0rBb2ql.js`),[]).then(e=>e.default)};function q(e){let t=e.match(/\/src\/content\/docs\/(.*)\/index\.markdoc$/);return t?t[1]:``}var J=new Map;for(let e of Object.keys(K))J.set(q(e),e);var Y=new Map,tt=64;function X(e,t){if(Y.has(e))Y.delete(e);else if(Y.size>=tt){let e=Y.keys().next().value;e!==void 0&&Y.delete(e)}return Y.set(e,t),t}async function nt(e){let t=J.get(e);if(!t)return null;{let t=Y.get(e);if(t!==void 0)return X(e,t)}let n=K[t];return n?X(e,await n()):null}function rt(e){let t=e;return t=t.replace(/^(#{1,6})\s+(.+?)\s*\{%\s*#([-\w]+)\s*%\}\s*$/gm,(e,t,n,r)=>`${t} ${n} {#${r}}`),t=t.replace(/\{%\s*section\s+([^%]+?)\s*%\}/g,(e,t)=>{let n=t.match(/#([-\w]+)/),r=t.match(/\btitle="([^"]*)"/),i=t.match(/\bstep=(\d+)\b/);if(!n)return``;let a=r?.[1]??n[1];return`\n## ${i?`${i[1]}. `:``}${a} {#${n[1]}}\n`}),t}function it(e,t){let r=$e(t),i=n(rt(r)),a=l(r,`prompt`);return{meta:e,content:i,rawContent:r,toc:ce(r),...a?{promptPath:a}:{}}}function at(e){return re[e]??null}async function Z(e){let t=at(e);if(!t)return null;let n=await nt(e);return n?(await et(n),it(t,n)):null}var ot={references:`references/cloud/client-web/account`,"references/quick-start":`references/cloud/client-web/account`,"tooling/command-line":`tooling/command-line/installation`,"tooling/assistant":`products/agent`,"tooling/ai":`tooling`,"tooling/ai/assistant":`products/agent`,"tooling/skills":`tooling/ai/skills`,"products/databases/spatial":`products/databases/tablesdb/geo-queries#spatial-columns`,"tutorials/android":`tutorials/android/step-1`,"tutorials/apple":`tutorials/apple/step-1`,"tutorials/astro-ssr-auth":`tutorials/astro-ssr-auth/step-1`,"tutorials/flutter":`tutorials/flutter/step-1`,"tutorials/nextjs":`tutorials/nextjs/step-1`,"tutorials/nextjs-ssr-auth":`tutorials/nextjs-ssr-auth/step-1`,"tutorials/nuxt":`tutorials/nuxt/step-1`,"tutorials/nuxt-ssr-auth":`tutorials/nuxt-ssr-auth/step-1`,"tutorials/react":`tutorials/react/step-1`,"tutorials/react-native":`tutorials/react-native/step-1`,"tutorials/refine":`tutorials/refine/step-1`,"tutorials/subscriptions-with-stripe":`tutorials/subscriptions-with-stripe/step-1`,"tutorials/sveltekit":`tutorials/sveltekit/step-1`,"tutorials/sveltekit-csr-auth":`tutorials/sveltekit-csr-auth/step-1`,"tutorials/sveltekit-ssr-auth":`tutorials/sveltekit-ssr-auth/step-1`,"tutorials/vue":`tutorials/vue/step-1`,"partners/guides/manage-domains":`partners/domains`,"partners/guides/provision-projects":`partners/guides/provisioning`,"partners/guides/marketplace":`partners/guides/marketplaces`,"partners/guides/multi-tenant":`partners/guides/multi-tenancy`,"products/network/waf":`products/firewall`,"products/firewall/create":`products/firewall/quick-start`,"products/firewall/update":`products/firewall/rules`,"products/firewall/delete":`products/firewall/rules`,"tooling/ai/mcp-servers/api":`tooling/ai/mcp-servers`,"tooling/ai/mcp-servers/docs":`tooling/ai/mcp-servers`};function Q(e){let t=e.indexOf(`#`);return t===-1?{pathname:e}:{pathname:e.slice(0,t),hash:e.slice(t+1)}}function st(e){let t=e.replace(/^\/+|\/+$/g,``),n=ot[t];if(n)return Q(`/docs/${n.replace(/\/+$/,``)}`);let r=p(`/docs/${t}`);return r?.startsWith(`/docs`)?Q(r):null}var ct=()=>u(()=>import(`./_-o3cHJYVT.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40])),lt=()=>u(()=>import(`./_-BVNRB2Op.js`),__vite__mapDeps([41,1,2])),$=`llms.txt`;const ut=e(`/docs/$`)({notFoundComponent:t(lt,`notFoundComponent`),beforeLoad:({params:e})=>{let t=e._splat??``;if(!(t===$||t.endsWith(`.md`))&&v(t,{deferPartnersOnServer:!0,deferAnalyticsOnServer:!0}))throw h({to:`/docs`,replace:!0})},loader:async({params:e})=>{let t=e._splat??``;if(t===$||t.endsWith(`.md`))throw m();let n=st(t);if(n)throw v(n.pathname.replace(/^\/docs\/?/,``).replace(/\/+$/,``),{deferPartnersOnServer:!0,deferAnalyticsOnServer:!0})?h({to:`/docs`,replace:!0}):h({to:n.pathname,hash:n.hash,replace:!0});let r=await Z(t);if(!r)throw m();return{page:r}},head:({loaderData:e})=>{if(!e?.page)return{};let{meta:t,slug:n}={meta:e.page.meta,slug:e.page.meta.slug},r=Ee({...t,slug:n});return{...r,links:[...r.links,...n?[{rel:`alternate`,type:`text/markdown`,href:`/docs/${n}.md`}]:[]],scripts:[{type:`application/ld+json`,children:F(Te(t,n))},{type:`application/ld+json`,children:F(we(t,n))},...t.faqs?.length?[{type:`application/ld+json`,children:F(Ce(t.faqs))}]:[]]}},component:t(ct,`component`)});export{Oe as a,Xe as i,Z as n,De as o,Ze as r,ut as t};
//# sourceMappingURL=_-CGxhajH-.js.map