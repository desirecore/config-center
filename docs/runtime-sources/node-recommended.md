# 推荐 node 官方归档核验

- 实际读取：2026-11-04（UTC）。
- 数据：`runtimes/recommended.json#node`，版本 `24.22.2`。
- 官方来源：[官方摘要清单](https://nodejs.org/dist/v24.22.2/SHASUMS256.txt)。
- 官方目录：[Node dist index](https://nodejs.org/dist/index.json) 记录 v24.22.2 于 2026-10-27 发布，LTS 名 Krypton；本轮与推荐值完全一致。它是 24.x 线在安全发布 v24.22.1（2026-10-20，index `security: true`）之后的下一版，包含该安全修复。
- 摘要清单签名：`SHASUMS256.txt.asc`（明文签名）与 `SHASUMS256.txt.sig`（分离签名）均由发布密钥 `5BE8A3F6C8A5C01D106C0AD820B1A390B168D356`（Antoine du Hamel）验签通过；该指纹列在 nodejs/node `v24.22.2` 标签 README 的 Release keys 中，公钥取自 nodejs/release-keys 仓库。

| 平台 | 精确归档路径 | 官方 SHA-256（与本仓一致） |
| --- | --- | --- |
| darwin-arm64 | `v24.22.2/node-v24.22.2-darwin-arm64.tar.gz` | `aa9549349e47dffaa42dcf95d6e06ade8c4bdafc980979883b88767670df385a` |
| darwin-x64 | `v24.22.2/node-v24.22.2-darwin-x64.tar.gz` | `d5e336d588c45be0c37dbd52cc29895593009ca4997a77a1fd02815131ed0e52` |
| win32-x64 | `v24.22.2/node-v24.22.2-win-x64.zip` | `ca1bff5d8ead13c9f2ea404a176db46bd430704d5b5113734049fa365e7799e2` |
| win32-arm64 | `v24.22.2/node-v24.22.2-win-arm64.zip` | `f47968c213105077f64c6510f007632c0ca2574802a0b5067c327c49abe1c468` |
| linux-x64 | `v24.22.2/node-v24.22.2-linux-x64.tar.gz` | `361718c444e49af2ca5a110c83ba6a8901143f23ab285ebbef0341f391f482a9` |
| linux-arm64 | `v24.22.2/node-v24.22.2-linux-arm64.tar.gz` | `95c264150aceb7f3437a29fd6984924f5f8d1511ea3cbd6c508b83f6c555dae2` |

本轮从 nodejs.org 下载了六个平台的完整归档，本地复算的 SHA-256 与上表及签名过的摘要清单逐项一致；npmmirror 镜像的 `SHASUMS256.txt` 与官方逐字节相同。没有在六个平台运行安装，不将此核验声明为解压或客户端验收。

`minClientVersion` 从 `10.0.178` 提到 `10.0.200`：客户端首启离线导入按「远端优先」的推荐清单到安装包里找归档，而安装包只打包构建时内置种子里的版本。已发布客户端（≤ 10.0.199）打包的是 24.21.0，必须继续使用各自的内置种子；第一个随包携带 24.22.2 的客户端版本须不低于该门槛。
