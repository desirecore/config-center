# 运行时数据来源

这里记录运行时官方目录、推荐归档校验和客户端安装契约。数据文件仍在 `runtimes/`；模型来源另见 [模型来源目录](../model-sources/README.md)。

| 范围 | 来源及边界 |
| --- | --- |
| 推荐 Node | [版本、六平台官方校验和](node-recommended.md) |
| 推荐 Python | [Standalone 六平台官方资产摘要](python-recommended.md) |
| Node 离线列表 | [官方目录快照](node-snapshot.md) |
| Python 离线列表 | [内置 Hatch 精确版本映射](python-fallback.md) |
| npm | [官方发布快照](package-managers/npm-snapshot.md) |
| pnpm | [官方发布快照](package-managers/pnpm-snapshot.md) |
| Yarn | [官方 CLI 发布快照](package-managers/yarn-snapshot.md) |

## 更新流程

1. 先核查 DesireCore 最新远端 `origin/main` 的 `runtime-manager.ts`、静态打包脚本、运行时 schema 及客户端版本门槛。Python 离线列表来自**内置 Hatch 的 pin 表**，不能拿 Standalone 最新版本替代。
2. `node scripts/update-runtime-catalog.mjs` 只读取固定官网/API、验证推荐归档摘要并显示候选数量；`--write` 才更新 Node/包管理器离线列表及对应细分快照记录。任何来源读取失败、结构错误、推荐发布日期缺失/晚于核验时间或推荐摘要不一致都中止写入。
3. 更新推荐运行时时，先同步客户端安装器/打包器契约，再逐平台核对官方档名及摘要。当前脚本不会自动修改推荐版本、Python 离线映射或客户端门槛，也不会推算未知 SHA-256。
4. Node 每个大版本最多三条（从 16 开始），包括历史版本；包管理器读取各仓最近 100 个 releases，再筛选最多 30 个正式 CLI 版本。目录可安装性和操作系统支持仍需按目标平台测试，不能把目录存在视为安装验收。
5. 执行 `node scripts/validate-runtime-sources.mjs`、`npm run validate`、`npm test`、`git diff --check`。离线门禁检查 Node/包管理器快照条目指纹、日期、数量、首版、固定官方入口，以及 Python pin 表、推荐版本/LTS/tag、六平台档名与摘要表。它只证明本仓数据与来源记录一致；不能替代 updater 重新读取官网，也不证明安装成功。更新推荐参数时重新记录本文档的官方证据和读取日期。历史快照由 Git 保留。

`generatedAt` 表示本轮完整读取目录的时间，不表示推荐策略被重新选择。Python pin 因客户端安装契约保持不变，见单独来源记录；不为了让版本号“看起来同步”而改动该映射。
