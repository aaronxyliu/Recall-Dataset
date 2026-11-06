# cobiwave/simplefolio

Commit `af03c0cb90d03844de2b5a4cf2045aa0f72c2442`. Build tool: Parcel. Engine: Parcel.

The GitHub Pages workflow runs npm install and npm run-script build and deploys dist. The Dockerfile uses Node 16.14.2 from .nvmrc and serves dist locally with Nginx. The source manifest already specifies the Sass transformer. The page is a portfolio template with placeholder content. Record it separately from interactive web applications. [.nvmrc](https://github.com/cobiwave/simplefolio/blob/af03c0cb90d03844de2b5a4cf2045aa0f72c2442/.nvmrc) · [.github/workflows/gh-pages.yml](https://github.com/cobiwave/simplefolio/blob/af03c0cb90d03844de2b5a4cf2045aa0f72c2442/.github/workflows/gh-pages.yml) · [package.json](https://github.com/cobiwave/simplefolio/blob/af03c0cb90d03844de2b5a4cf2045aa0f72c2442/package.json)

From this folder, extract the pinned revision into an empty source directory and run:

```sh
mkdir source
curl -fLsS https://codeload.github.com/cobiwave/simplefolio/tar.gz/af03c0cb90d03844de2b5a4cf2045aa0f72c2442 -o source.tar.gz
tar xzf source.tar.gz --strip-components=1 -C source
docker build -f "$PWD/Dockerfile" -t recall70/cobiwave--simplefolio:af03c0cb90d0 source
docker run --rm -p 127.0.0.1:8080:80 recall70/cobiwave--simplefolio:af03c0cb90d0
```

Open http://127.0.0.1:8080/.
