# formbricks/formbricks

打包器 **Turbopack**。锁定提交 `5dadbacb6a002e22fad45341ae0da75c896f3ccf`。

镜像标签 `recall/formbricks--formbricks:5dadbacb6a002e22fad45341ae0da75c896f3ccf-maps`。浏览器记录中的页面状态为 `rendered`，验收状态为 `verified-in-recorded-scope`。

## 打开本地页面

在工作区根目录用 PowerShell 执行。启动容器后访问 [本地页面](http://127.0.0.1:43112/setup/signup)。

应用需要 Compose 服务。若本机还没有验收生成的环境文件，先运行下方的浏览器复验命令。环境文件保存在 `builds/_runtime/`。

```powershell
$compose = @('--project-name', 'recall-maps-formbricks--formbricks', '--env-file', 'builds/_runtime/formbricks--formbricks.compose.env', '--file', 'bundling-dataset/rolldown-tsup-turbopack-rollup/recipes/formbricks--formbricks/compose.yaml')
docker compose @compose up --detach --wait --wait-timeout 600
```

结束后运行 `docker compose @compose down`。再次执行自动复验前，先停止手动启动的服务。

## 重建与浏览器复验

下面的命令使用原批次配方和锁文件。首次运行浏览器复验前，需准备 [Chromium 验收环境](../../rolldown-tsup-turbopack-rollup/verification/prepare.ps1)。复验结束后，脚本会清理临时容器。

```powershell
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" checkout 'formbricks--formbricks'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/run-builds.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" build 'formbricks--formbricks'
python "bundling-dataset/rolldown-tsup-turbopack-rollup/verify-page.py" --cohort-dir "bundling-dataset/rolldown-tsup-turbopack-rollup" 'formbricks--formbricks'
```

[构建记录](../../rolldown-tsup-turbopack-rollup/results/formbricks--formbricks/build.json) · [浏览器验收](../../rolldown-tsup-turbopack-rollup/results/formbricks--formbricks/browser/browser.json) · [页面截图](../../rolldown-tsup-turbopack-rollup/results/formbricks--formbricks/browser/page.png) · [Source map 目录](source-map/README.md)
