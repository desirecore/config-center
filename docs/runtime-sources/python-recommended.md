# 推荐 Python 3.13 官方归档核验

- 实际读取：2026-10-13（UTC）。
- 数据：`runtimes/recommended.json#python`，版本 `3.13.9`。
- 官方来源：[官方摘要清单](https://api.github.com/repos/astral-sh/python-build-standalone/releases/tags/20251014)。
- 官方 release：tag `20251014`。本轮该 API 索引被环境代理返回 403；以下固定摘要来自 DesireCore 历史维护清单，并逐个平台实际下载官方 release 归档、重新计算 SHA-256 验证一致。未臆测发布状态或日期。

| 平台 | 精确归档路径 | 官方 SHA-256（与本仓一致） |
| --- | --- | --- |
| darwin-arm64 | `20251014/cpython-3.13.9+20251014-aarch64-apple-darwin-install_only_stripped.tar.gz` | `52721745b0fa3196e4d0381fa5c06dda1d54343b90d49d90c3bba52d1171bd98` |
| darwin-x64 | `20251014/cpython-3.13.9+20251014-x86_64-apple-darwin-install_only_stripped.tar.gz` | `7c33b153a69c6255e6f2659cf39738f316b03969d6230d7bc47c73b7fde9a0d4` |
| win32-x64 | `20251014/cpython-3.13.9+20251014-x86_64-pc-windows-msvc-install_only_stripped.tar.gz` | `76e0a9749c4deeb975a4b6b36d54be4e43f0c2a4c654bedab5d2e4d62dbc3006` |
| win32-arm64 | `20251014/cpython-3.13.9+20251014-aarch64-pc-windows-msvc-install_only_stripped.tar.gz` | `419cce7a099d21389fca32a9fd4f7364fc61b91a760369c803de57c6ee1ddb99` |
| linux-x64 | `20251014/cpython-3.13.9+20251014-x86_64-unknown-linux-gnu-install_only_stripped.tar.gz` | `c0ccda275948c79996e46993c2c5476ff5cca606dee530f1dea712179131b348` |
| linux-arm64 | `20251014/cpython-3.13.9+20251014-aarch64-unknown-linux-gnu-install_only_stripped.tar.gz` | `baa3d107d17e4328448e30c3c9c83cca0eb41ca7a37c10982e14d46a5c3db07d` |

本轮六平台下载字节均已核验；只有 Linux x64 执行安装/Office 验证，其他平台不宣称运行通过。3.13.9 与客户端随包 Hatch 1.16.5 的 3.13 pin、Office cp313 profile 一致。Python 离线映射和 minClientVersion 保持原契约，Node 推荐不变。

本次兼容性修复调整默认推荐，不自动移除已安装的 Python 3.14 或用户数据；现有运行时、Session pin 与用户明确版本选择仍按原逻辑保留。客户端内置种子和配置中心 ZIP 必须从合入本变更后的来源提交同步生成，不能只修改客户端显示文本。
