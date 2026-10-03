# Python 离线版本列表

- 核查日期：2026-10-03（UTC）。
- 数据：`runtimes/versions-fallback.json#python`，12 条映射，本轮保留原值。
- 官方来源：[Hatch 1.16.5 distribution 表](https://github.com/pypa/hatch/blob/b998d2b755bc0dca20054f96da8981532444fc2a/src/hatch/python/distributions.py)。`hatch-v1.16.5` 官方 tag 指向该 commit；本轮实际读取 raw 正文，全部 12 条版本均在该表中。
- 客户端依据：[DesireCore runtime-manager.ts](https://github.com/desirecore/desirecore/blob/412e05b043656d1f3ba2b56307ef5ceabbf8a77a/packages/agent-service/src/session/runtime-manager.ts) 与 [静态打包脚本](https://github.com/desirecore/desirecore/blob/412e05b043656d1f3ba2b56307ef5ceabbf8a77a/scripts/prepare-static.ts)。本轮 fetch 后 `origin/main` SHA 为 `412e05b043656d1f3ba2b56307ef5ceabbf8a77a`，两处 `HATCH_VERSION = '1.16.5'`。

`listAvailablePythonVersions` 使用 `hatch python show`，该命令读取内置映射，不向 Python 官网实时查询；二进制缺失或命令失败时才返回本文件。`name` 是安装实参，`version` 是该 Hatch 版本对该 name 的发行版映射。

因此 `3.14 → 3.14.0` 与推荐归档 `3.14.8` 不同，**并不能单凭最新 Standalone 目录将 fallback 改成 3.14.8**。安装器升级或可靠自定义源策略完成前，必须保留真实 pin 语义。待完成：确认推荐 3.14.8 的首启导入、后续 Hatch 安装/更新幂等判断及受门控客户端版本是否已支持；本轮不将官方归档存在等同于客户端安装验收。

| 名称 | 内置 pin |
| --- | --- |
| 3.7 | 3.7.9 |
| 3.8 | 3.8.20 |
| 3.9 | 3.9.24 |
| 3.10 | 3.10.19 |
| 3.11 | 3.11.14 |
| 3.12 | 3.12.12 |
| 3.13 | 3.13.9 |
| 3.14 | 3.14.0 |
| pypy2.7 | 7.3.20 |
| pypy3.9 | 7.3.16 |
| pypy3.10 | 7.3.19 |
| pypy3.11 | 7.3.20 |
