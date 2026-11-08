# peggyjs/peggy

打包器 **tsup**。锁定提交 `b4014fd62ce8ba46866bb19a648b09fceb91f8cd`。

镜像标签 `recall/peggyjs--peggy:b4014fd62ce8ba46866bb19a648b09fceb91f8cd-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43103/online.html)。

```powershell
$options = @('--rm', '-p', '127.0.0.1:43103:80')
if (Test-Path 'builds/_runtime/peggyjs--peggy.env') { $options += @('--env-file', 'builds/_runtime/peggyjs--peggy.env') }
docker run @options 'sha256:960e29e787c7f68cebd1ae2f4c2ddb588ac39a15fa024ddb4f9e8d08c511373e'
```

使用 `Ctrl+C` 停止容器。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'peggyjs--peggy'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'peggyjs--peggy'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'peggyjs--peggy'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/peggyjs--peggy/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/peggyjs--peggy/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/peggyjs--peggy/browser/page.png) · [Source map 目录](source-map/README.md)
