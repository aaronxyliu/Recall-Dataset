# Source map

此处保留浏览器验收对应的 map 原始字节。`validated/` 收录通过校验的文件。`unvalidated/` 收录有文件但被拒绝或为空映射的记录。未取得文件的记录只列在表中。

镜像 ID `sha256:06c6e803a0676a742838d7086319d05de9c96157b06e8cf04c1cea582c0c6f38`。[原始浏览器记录及匹配的 JS 证据](../../results/metabase--metabase/browser/browser.json)

| 脚本 | 状态 | Map 文件 | 说明 |
| --- | --- | --- | --- |
| /app/dist/runtime.d9736ad639d363cc.js | `passed` | [打开 map](validated/cd5b79c38a664750616af3343d080b9664358cfb573fe03a5533edb18e59cae1.map.json) | 2,285 个映射段 |
| /app/dist/vendor.1db770a18e24864f.js | `passed` | [打开 map](validated/0d8397a6a94db6236caade61f96d11ec0838fc0943f9e097b0f4b0484fb7cb20.map.json) | 502,888 个映射段 |
| /app/dist/app-main.7eabbff4d49e68f7.js | `rejected` | [打开 map](unvalidated/d384e07c41fe17eeee0ec7da8ff92d1f995c07902b3d3b46834032ae96923168.map.json) | Unusable segments: 957 original position(s) outside source (623402/624359 retained) |
| /app/dist/3161.3a33455d5d1d795d.js | `passed` | [打开 map](validated/3cdb496902b11b7508682f69c1318bdcfd7f954a6c378bea9b1418fcc0bfd1d0.map.json) | 7,963 个映射段 |
| /app/dist/setup.16f434835d3f1150.js | `passed` | [打开 map](validated/1a6559e083745b943354ddd7134fc321dfff6823723dab680a07d9cee4a1f855.map.json) | 5,096 个映射段 |
