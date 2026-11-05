# 推荐 node 官方归档核验

- 实际读取：2026-11-04（UTC）。
- 数据：`runtimes/recommended.json#node`，版本 `26.13.0`。
- 官方来源：[官方摘要清单](https://nodejs.org/dist/v26.13.0/SHASUMS256.txt)。
- 官方目录：[Node dist index](https://nodejs.org/dist/index.json) 记录 v26.13.0 于 2026-10-28 发布，LTS 名 Lithium；本轮与推荐值完全一致。它是 26.x 进入 LTS 后的第一个版本，也是读取时 index 中最新的 LTS；同线的 v26.12.1（2026-10-21，index `security: true`）是上一批安全发布。
- 摘要清单签名：`SHASUMS256.txt.asc`（明文签名）与 `SHASUMS256.txt.sig`（分离签名）均由发布密钥 `C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C`（Richard Lau）验签通过；该指纹列在 nodejs/node `v26.13.0` 标签 README 的 Release keys 中，公钥取自 nodejs/release-keys 仓库。

| 平台 | 精确归档路径 | 官方 SHA-256（与本仓一致） |
| --- | --- | --- |
| darwin-arm64 | `v26.13.0/node-v26.13.0-darwin-arm64.tar.gz` | `d38bd5e5a2ddce6bbb5ce45e46e208337da4d51fffe611e567fd32073d6439f6` |
| darwin-x64 | `v26.13.0/node-v26.13.0-darwin-x64.tar.gz` | `525c9b29bb0263d687de60a4cec0e2a6db876a8eb032369e5795eca71e7c358e` |
| win32-x64 | `v26.13.0/node-v26.13.0-win-x64.zip` | `dcc60d59a0746999f99064a01c020445d54d84228c691cdbf25b49ac3b59150a` |
| win32-arm64 | `v26.13.0/node-v26.13.0-win-arm64.zip` | `a9427139595156ef484e1fb08957676e09d4232368dd1743a2a9f93f3d241b14` |
| linux-x64 | `v26.13.0/node-v26.13.0-linux-x64.tar.gz` | `5848553868b402d3fabb5b09270649977780a390f832155721025a08b5104455` |
| linux-arm64 | `v26.13.0/node-v26.13.0-linux-arm64.tar.gz` | `439e9c438acdf6a6ffe47418da709153d66c4bed812e30a473faacb107dd2791` |

本轮从 nodejs.org 下载了六个平台的完整归档，本地复算的 SHA-256 与上表及签名过的摘要清单逐项一致。读取时 npmmirror 的 `v26.13.0/` 目录有归档但缺 `SHASUMS256.txt`；抽查其 darwin-arm64 与 win-x64 归档与官方逐字节相同。没有在六个平台运行安装，不将此核验声明为解压或客户端验收。

`minClientVersion` 从 `10.0.178` 提到 `10.0.201`：客户端首启离线导入按「远端优先」的推荐清单到安装包里找归档，而安装包只打包构建时内置种子里的版本。已发布客户端（≤ 10.0.200）打包的是 24.21.0，必须继续使用各自的内置种子；第一个随包携带 26.13.0 的客户端版本须不低于该门槛。v138 曾把门槛定为 `10.0.200`，但 10.0.200 发版时主仓尚未同步 26.13.0 种子，v139 将门槛顺延一版。

这是 24 → 26 的主版本切换（`NODE_MODULE_VERSION` 137 → 147）。Node 26 官方平台支持与 24 相同（Windows 10 / Server 2016 及以上、macOS 13.5 及以上、glibc 2.28 及以上），macOS x64 由 Tier 1 降为 Tier 2；官方归档不再包含 `corepack`。
