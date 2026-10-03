# 推荐 python 官方归档核验

- 实际读取：2026-10-03（UTC）。
- 数据：`runtimes/recommended.json#python`，版本 `3.14.8`。
- 官方来源：[官方摘要清单](https://api.github.com/repos/astral-sh/python-build-standalone/releases/tags/20261001)。
- 官方 release：tag `20261001`，published_at `2026-10-01T22:37:31Z`；非 draft/prerelease。逐平台精确资产名称、uploaded 状态和 API `digest` 均与推荐值一致。

| 平台 | 精确归档路径 | 官方 SHA-256（与本仓一致） |
| --- | --- | --- |
| darwin-arm64 | `20261001/cpython-3.14.8+20261001-aarch64-apple-darwin-install_only_stripped.tar.gz` | `69e48cd7f54261df5b6abbd374f69fe6e496fa781d271592aeef49cd5ffbea6c` |
| darwin-x64 | `20261001/cpython-3.14.8+20261001-x86_64-apple-darwin-install_only_stripped.tar.gz` | `d613a1cb9e31dd512298c73fd300975e689938cc39d1486250cf47918963061c` |
| win32-x64 | `20261001/cpython-3.14.8+20261001-x86_64-pc-windows-msvc-install_only_stripped.tar.gz` | `b7ff8b700995379e425b39abce9b087d84a45aa265ea465c0069c2747ea5b2ea` |
| win32-arm64 | `20261001/cpython-3.14.8+20261001-aarch64-pc-windows-msvc-install_only_stripped.tar.gz` | `607b19be2bfcdbd0ba51dd4d225a6eeaa9b0c32c85d5b0521ced135033af5ecf` |
| linux-x64 | `20261001/cpython-3.14.8+20261001-x86_64-unknown-linux-gnu-install_only_stripped.tar.gz` | `b373a4a4e4e70fc05f368c9b53d7738bf37637682b650d96c742805d2da26c32` |
| linux-arm64 | `20261001/cpython-3.14.8+20261001-aarch64-unknown-linux-gnu-install_only_stripped.tar.gz` | `4395ae16388f9d3409cba7e20161753ed3359b13d959345415029f874f675162` |

本轮仅核对官方发布目录/摘要，没有下载六个平台的整个归档，也没有在六个平台运行安装；不将此核验声明为下载字节复算、解压或客户端验收。推荐版本与 `minClientVersion` 保留原值。

安装契约尚需闭环：当前核查的 DesireCore 远端 main 仍内置 Hatch 1.16.5，其 3.14 pin 是 3.14.0。推荐归档虽有真实官网依据，但不能据此证明旧安装器后续更新判断兼容；详见 [Python fallback 来源](python-fallback.md)。在客户端升级/定制源策略与实测前，不提高核验状态为账号或安装实测通过。
