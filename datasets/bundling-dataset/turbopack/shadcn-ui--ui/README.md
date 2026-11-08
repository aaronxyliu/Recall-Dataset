# shadcn-ui/ui

打包器 **Turbopack**。锁定提交 `d549251bab2e57dbf72f7c909d6458c02c43f529`。

镜像标签 `recall/shadcn-ui--ui:d549251bab2e57dbf72f7c909d6458c02c43f529-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43104/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43104:4000')
if (Test-Path 'builds/_runtime/shadcn-ui--ui.env') { $options += @('--env-file', 'builds/_runtime/shadcn-ui--ui.env') }
docker run @options 'sha256:3fbd7e7aa7ef7ec029f380e53d87a4b11d38ad2cde45ffab24a9df8097651d0b'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'shadcn-ui--ui'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'shadcn-ui--ui'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'shadcn-ui--ui'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/shadcn-ui--ui/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/shadcn-ui--ui/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/shadcn-ui--ui/browser/page.png) · [Source map 目录](source-map/README.md)
