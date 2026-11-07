# tldraw/tldraw

Source commit `bc3432915441bb53eb7429459b19d67c8f0c69d1`. Tool: Vite. Engine: Rolldown.

The upstream Turbo build for apps/dotcom/client orders build-types and build-api before its dependent packages. The dotcom application requires a Clerk publishable key for startup and credentials for its sync worker. [Pinned source](https://github.com/tldraw/tldraw/blob/bc3432915441bb53eb7429459b19d67c8f0c69d1/apps/dotcom/client/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build --build-arg VITE_CLERK_PUBLISHABLE_KEY="$VITE_CLERK_PUBLISHABLE_KEY" -t recall-web/tldraw--tldraw:bc3432915441 -f bundling-dataset/vite/tldraw--tldraw/Dockerfile builds/vite/tldraw--tldraw
docker run --rm -p 127.0.0.1:8080:80 recall-web/tldraw--tldraw:bc3432915441
```

Local URL: http://127.0.0.1:8080/

Verified build, configuration required for the whiteboard. The exact Turbo build completed and produced the production Vite assets. Chrome reported the missing Clerk publishable key and a missing sync-worker endpoint. Provide a publishable key for your Clerk development instance when building. The [upstream dotcom setup](https://github.com/tldraw/tldraw/blob/bc3432915441bb53eb7429459b19d67c8f0c69d1/apps/dotcom/README.md) also describes the secret-key configuration for the sync worker and the PostgreSQL, zero-cache and worker services. Keep the Clerk secret key on the worker side. The release image alone does not provide that stack. See browser-diagnostic.log.

[Verification record](result.json)
