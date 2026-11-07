# supabase/supabase

The outer `Dockerfile` is the source-map-enabled build recipe used for this experiment. Build and launch it with the commands below. Captured JavaScript, source maps, and function mappings are stored in `ground-truth/`.

Source commit `aa9d04e4f77447e2b6aaf317b686007aff05aa96`. Tool: webpack. Engine: webpack.

Build the pinned www Next.js package with generated core content, local asset URLs, and its production webpack target. Disable deployment uploads. Dependency downloads use the lockfile and an npm mirror. [Pinned source](https://github.com/supabase/supabase/blob/aa9d04e4f77447e2b6aaf317b686007aff05aa96/apps/www/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/supabase--supabase:aa9d04e4f774 -f bundling-dataset/webpack/supabase--supabase/Dockerfile builds/webpack/supabase--supabase
docker run --rm -p 127.0.0.1:8080:3000 recall-web/supabase--supabase:aa9d04e4f774
```

Local URL: http://127.0.0.1:8080/

The local build limits Next.js to one worker, uses the matching Inter, Manrope, and Source Code Pro font files shipped in the studio workspace, and disables Sentry upload maps. It reads the public site settings from the pinned example environment and the survey client defaults from the repository’s data generator. Next.js generated all 944 static routes. Chrome rendered the marketing homepage and loaded its locally compiled webpack scripts. Survey interactions, account creation, and private backend services were outside this check.

[Verification record](result.json)
