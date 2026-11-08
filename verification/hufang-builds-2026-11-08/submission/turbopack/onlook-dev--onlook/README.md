# onlook-dev/onlook

打包器 **Turbopack**。锁定提交 `423e2e924366419e418ee049093872d535eea41a`。

镜像标签 `recall/onlook-dev--onlook:423e2e924366419e418ee049093872d535eea41a-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `partial-or-failed`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43109/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43109:3000', '--env', 'SKIP_ENV_VALIDATION=1', '--env', 'NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321', '--env', 'NEXT_PUBLIC_SUPABASE_ANON_KEY=local-build-placeholder')
if (Test-Path 'builds/_runtime/onlook-dev--onlook.env') { $options += @('--env-file', 'builds/_runtime/onlook-dev--onlook.env') }
docker run @options 'sha256:5124a4b12696ac89ec5b7c2bb28c9117e695678342ecae79346655e194e23695'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'onlook-dev--onlook'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'onlook-dev--onlook'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'onlook-dev--onlook'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/onlook-dev--onlook/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/onlook-dev--onlook/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/onlook-dev--onlook/browser/page.png) · [Source map 目录](source-map/README.md)
