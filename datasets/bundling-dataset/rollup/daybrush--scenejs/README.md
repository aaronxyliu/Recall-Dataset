# daybrush/scenejs

打包器 **Rollup**。锁定提交 `8db057b6be85de03c5e997b53a82cb1407d6f659`。

镜像标签 `recall/daybrush--scenejs:8db057b6be85de03c5e997b53a82cb1407d6f659-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43116/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43116:80')
if (Test-Path 'builds/_runtime/daybrush--scenejs.env') { $options += @('--env-file', 'builds/_runtime/daybrush--scenejs.env') }
docker run @options 'sha256:1572cbfca8eda98c67e1d1db6ccbb31014824247412f272e454ea176fdfd20b2'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'daybrush--scenejs'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'daybrush--scenejs'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'daybrush--scenejs'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/daybrush--scenejs/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/daybrush--scenejs/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/daybrush--scenejs/browser/page.png) · [Source map 目录](source-map/README.md)
