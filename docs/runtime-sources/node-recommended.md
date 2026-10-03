# 推荐 node 官方归档核验

- 实际读取：2026-10-03（UTC）。
- 数据：`runtimes/recommended.json#node`，版本 `24.21.0`。
- 官方来源：[官方摘要清单](https://nodejs.org/dist/v24.21.0/SHASUMS256.txt)。
- 官方目录：[Node dist index](https://nodejs.org/dist/index.json) 记录 v24.21.0 于 2026-09-07 发布，LTS 名 Krypton；本轮与推荐值完全一致。

| 平台 | 精确归档路径 | 官方 SHA-256（与本仓一致） |
| --- | --- | --- |
| darwin-arm64 | `v24.21.0/node-v24.21.0-darwin-arm64.tar.gz` | `bed7eea5325e1108f32ce5228ddd6a5f0f08a499ee42aa7442aea583702f6057` |
| darwin-x64 | `v24.21.0/node-v24.21.0-darwin-x64.tar.gz` | `1462cb3b3046b815cf8ea436d3da450ec1a9f11dac7e5a46b0ada5305d7e8097` |
| win32-x64 | `v24.21.0/node-v24.21.0-win-x64.zip` | `158f7685b44de51f6c0df1d153526cbcd3e1bc739a8dfc607721cef75de9e541` |
| win32-arm64 | `v24.21.0/node-v24.21.0-win-arm64.zip` | `8779b1bde1d39f8d420e3b57aa657b39891af434d3de44a919044cec06785921` |
| linux-x64 | `v24.21.0/node-v24.21.0-linux-x64.tar.gz` | `6e1db87ef58b8819e5d5402eff1536491b18edd8eb7bee5ef7897876e88dc5ff` |
| linux-arm64 | `v24.21.0/node-v24.21.0-linux-arm64.tar.gz` | `724282c3b43aec998aa9527380465b45d229e021b58035f5f4f63095eabfe5d5` |

本轮仅核对官方发布目录/摘要，没有下载六个平台的整个归档，也没有在六个平台运行安装；不将此核验声明为下载字节复算、解压或客户端验收。推荐版本与 `minClientVersion` 保留原值。
