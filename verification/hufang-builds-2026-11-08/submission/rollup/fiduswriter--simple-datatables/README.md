# fiduswriter/simple-datatables

打包器 **Rollup**。锁定提交 `ff80161244e78c10f2183e7a238f3a6c0cb14023`。

镜像标签 `recall/fiduswriter--simple-datatables:ff80161244e78c10f2183e7a238f3a6c0cb14023-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43118/demos/1-simple/)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43118:80')
if (Test-Path 'builds/_runtime/fiduswriter--simple-datatables.env') { $options += @('--env-file', 'builds/_runtime/fiduswriter--simple-datatables.env') }
docker run @options 'sha256:d7fd85b69fbdabdca71cef54e357838562f7ce7816980e0cfa186d40a5e99609'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

当前配方指纹与已验收镜像的记录不同。下方重建命令使用当前配方，重建后的镜像需重新验收。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'fiduswriter--simple-datatables'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'fiduswriter--simple-datatables'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'fiduswriter--simple-datatables'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/fiduswriter--simple-datatables/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/fiduswriter--simple-datatables/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/fiduswriter--simple-datatables/browser/page.png) · [Source map 目录](source-map/README.md)
