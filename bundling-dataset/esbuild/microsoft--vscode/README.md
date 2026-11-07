# microsoft/vscode

Source commit `e13716ce975fc4597cb8c2228471ac4783bf4529`. Tool: esbuild. Engine: esbuild.

Use Node and pnpm pinned by the repository and the vscode-web-min Gulp task. It compiles the workbench with esbuild and packages web extensions. Its test-web server accepts the local output through the static-build cache. [Pinned source](https://github.com/microsoft/vscode/blob/e13716ce975fc4597cb8c2228471ac4783bf4529/package.json)

From the ReCall Dataset root, using the checkout at the commit above:

```sh
docker build -t recall-web/microsoft--vscode:e13716ce975f -f bundling-dataset/esbuild/microsoft--vscode/Dockerfile builds/esbuild/microsoft--vscode
docker run --rm -p 127.0.0.1:8080:3000 recall-web/microsoft--vscode:e13716ce975f
```

Local URL: http://127.0.0.1:8080/

Verified locally: Chrome displayed the Code–OSS Web Welcome screen and Explorer. It loaded /static/build/out/vs/workbench/workbench.web.main.internal.js and the extension worker from the locally compiled image. The test server reuses that output via its static cache; the recipe verifies the Electron typings checksum and skips downloading browsers used only for upstream tests.

[Verification record](result.json)
