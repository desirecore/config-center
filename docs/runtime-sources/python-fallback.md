# Python 离线版本列表

- 核查日期：2026-10-03（UTC）。
- 数据：`runtimes/versions-fallback.json#python`，12 条映射，本轮保留原值。
- 官方来源：[Hatch 1.16.5 distribution 表](https://github.com/pypa/hatch/blob/b998d2b755bc0dca20054f96da8981532444fc2a/src/hatch/python/distributions.py)。`hatch-v1.16.5` 官方 tag 指向该 commit；本轮实际读取 raw 正文，全部 12 条版本均在该表中。
- 客户端依据：[DesireCore runtime-manager.ts](https://github.com/desirecore/desirecore/blob/412e05b043656d1f3ba2b56307ef5ceabbf8a77a/packages/agent-service/src/session/runtime-manager.ts) 与 [静态打包脚本](https://github.com/desirecore/desirecore/blob/412e05b043656d1f3ba2b56307ef5ceabbf8a77a/scripts/prepare-static.ts)。本轮 fetch 后 `origin/main` SHA 为 `412e05b043656d1f3ba2b56307ef5ceabbf8a77a`，两处 `HATCH_VERSION = '1.16.5'`。

`listAvailablePythonVersions` 使用 `hatch python show`，该命令读取内置映射，不向 Python 官网实时查询；二进制缺失或命令失败时才返回本文件。`name` 是安装实参，`version` 是该 Hatch 版本对该 name 的发行版映射。

此前推荐归档 `3.14.8` 与 `3.14 → 3.14.0` pin 不同，不能据此将 fallback 改成 3.14.8。本次兼容性修复将默认推荐恢复为 `3.13 → 3.13.9`，与现有 Office cp313 profile 保持一致；该表仍保留原始 3.14 pin 及其他版本，不删除已安装运行时，不变更用户显式选择。本轮六平台归档字节验证与 Linux x64 Office 实测范围见推荐来源记录，其他平台安装仍未验收。

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
