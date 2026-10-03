# 模型数据来源维护

此目录记录 `compute/providers`、`compute/coding-plans`、`compute/model-specs` 的模型数据来源。每家供应商一份 Markdown，普通 API、订阅、套餐和共享规格在同一页分别列出。

## 本轮核验范围

- 核验日期：2026-10-03。
- 配置范围：28 个 Provider、11 个套餐、23 个共享规格文件。
- 当前模型记录：619 条（同一模型在不同接入面会分别计数）。
- 317 条 `partial`：只核实表中列出的字段，可能仅确认官网出现该 ID；不是整条规格全通过。
- 301 条 `pending`：登记官网入口，但尚未取得该条模型的字段级证明。
- 1 条 `historical`：匿名模型的历史兼容记录，不证明当前平台可用。

没有把所有存量数据写成已核实。当前确认的是本轮明确核对的字段、官网公共目录以及本地配置契约；没有执行逐供应商账号的收费模型调用。

## 统一记录规则

1. **来源必须是发布者的官网、官方文档、官方 API 或可验证的官方代码仓库。** 搜索摘要、聚合榜单、社区文章、第三方转载和本仓旧配置只能帮助定位，不是字段的主证据。官方域名上的用户文章也不等于官方公告。
2. **原厂与接入面分开。** 原厂存在某模型，不证明套餐可用；国际端点不证明国内端点可用；OpenRouter USD 价格不覆盖国内 CNY。
3. **数字写清含义。** 上下文窗口、最大输入、最大输出、默认输出参数分别记录。官网只写 K/M 时注明换算，优先使用明文整数；输入/输出独立限制不使用 output<=input 的通用断言。
4. **价格写清单位和条件。** 区分每百万 token、每张、每秒、每字符、search unit、按实例；原价、限时优惠、缓存命中/写入、峰谷、长上下文阶梯分别注明。未知价格省略；-1 等 API 占位值不转换成零价。
5. **日期写清用途。** `checkedAt` 是本轮实际访问日期；模型发布时间另行确认。读取了官网不代表所有模型字段都已核实，页面壳或登录墙不可标为证明。
6. **本仓策略不冒充官网参数。** `routing.tier`、`routingPriority`、`defaultReference`、产品能力标签、预设启用状态等是产品配置/工程判断；不要引用营销榜单来证明它们。
7. **官方来源也有边界。** 官方 API 的动态目录是某一时点的接入面快照；缺失表示本次未列出，不能自动推断原厂退役。官网参数核对不等于实际账号调用验收。来源元数据保存实际跳转地址与成功读取正文的 SHA-256，不保存完整网页原文；访问失败的 URL 明确记录。

## 目录索引

| 供应商 | 模型记录 | 有已核字段 | 待核实/历史 |
| --- | ---: | ---: | ---: |
| [OpenAI](providers/openai.md) | 93 | 13 | 80 |
| [Anthropic](providers/anthropic.md) | 21 | 9 | 12 |
| [GitHub Copilot](providers/github-copilot.md) | 0 | 0 | 0 |
| [DeepSeek](providers/deepseek.md) | 12 | 9 | 3 |
| [阿里云百炼 / Qwen / Wan / HappyHorse](providers/alibaba.md) | 118 | 103 | 15 |
| [火山引擎](providers/volcengine.md) | 66 | 0 | 66 |
| [月之暗面 Kimi](providers/moonshot.md) | 21 | 7 | 14 |
| [智谱](providers/zhipu.md) | 31 | 28 | 3 |
| [百川](providers/baichuan.md) | 8 | 0 | 8 |
| [MiniMax](providers/minimax.md) | 67 | 55 | 12 |
| [小米 MiMo](providers/xiaomi.md) | 25 | 7 | 18 |
| [百度千帆](providers/baidu.md) | 20 | 15 | 5 |
| [腾讯混元](providers/tencent.md) | 25 | 1 | 24 |
| [讯飞星火](providers/xunfei.md) | 4 | 2 | 2 |
| [硅基流动](providers/siliconflow.md) | 3 | 0 | 3 |
| [Ollama](providers/ollama.md) | 1 | 0 | 1 |
| [Google Gemini](providers/google.md) | 30 | 28 | 2 |
| [Mistral](providers/mistral.md) | 9 | 4 | 5 |
| [xAI](providers/xai.md) | 9 | 3 | 6 |
| [Cohere](providers/cohere.md) | 17 | 16 | 1 |
| [可灵](providers/kling.md) | 11 | 0 | 11 |
| [OpenRouter](providers/openrouter.md) | 15 | 15 | 0 |
| [Perplexity](providers/perplexity.md) | 6 | 2 | 4 |
| [Stability AI](providers/stability.md) | 3 | 0 | 3 |
| [匿名模型历史兼容](providers/stealth.md) | 1 | 0 | 1 |
| [无问芯穹](providers/infini.md) | 1 | 0 | 1 |
| [摩尔线程](providers/moorethread.md) | 1 | 0 | 1 |
| [快手 StreamLake Coding](providers/kwai.md) | 1 | 0 | 1 |

## 文件格式

- `providers/<supplier-id>.md`：配置位置 → 官网证据 → 核验边界 → 当前参数表 → 更新步骤 → 机器可读来源元数据。
- [TEMPLATE.md](TEMPLATE.md)：新增供应商时复制这个格式；来源 ID 使用稳定的英文短名。
- 每个 `source-config` 段落对应一个 canonical JSON 文件；每一行对应一条 `models[].modelName` 或 `specs[].id`。
- “已核字段→来源”使用完整字段路径，必须指向成功读取的官网来源。未列出的字段仍未核实。ID 的核对要求完整标识符匹配，不能以 gpt-5.5 出现来证明 gpt-5；ID 出现也不证明该端点可调用。
- 行尾 SHA-256 是当前完整模型对象的指纹，用于发现配置已变而文档未复核。指纹不是官方签名，也不证明字段正确。

## 更新流程

1. 从供应商页面的官方入口打开对应模型、地域与接入面，读取正文/公共 API。把失败、页面壳或权限要求原样登记。
2. 将官网内容与现有 JSON 逐字段比较；发现差异时先记录含义、单位、限时/地域条件，再改配置。
3. 同步 Provider、共享规格、套餐名单及相关回归。删除某接入面不再列出的预置型号时添加该接入面的 tombstones；历史兼容规格是否保留单独判断。
4. 基于现有 Markdown 增量编辑受影响行和核验说明；不要整页重建或删除既有来源历史。更新实际核实的字段、日期和状态。
5. 运行 `node scripts/validate-sources.mjs --fingerprints`，将对应模型的新指纹写入文档，确认参数表与 JSON 一致。
6. 数据变化时递增 `manifest.json#presetDataVersion` 并更新日期；纯文档修订不需要假装发布数据更新。
7. 执行 `npm run validate`、`npm test` 和 `git diff --check`。必要时在已授权账号进行聚焦实测，并记录结果与限制。

```bash
npm run validate:sources
node scripts/validate-sources.mjs --fingerprints
npm run validate
npm test
```

来源校验不访问网络，也不消费模型额度：检查官方域名、引用、日期、全部模型覆盖、重复 ID、完整对象指纹和参数表是否与配置一致。更新数据后若来源记录陈旧，CI 会失败。

## 本轮修正记录

- Qwen3.7 Max：合并两个冲突的 canonical ID；官网明确纯文本、1000000 上下文、131072 最大输出，API/Token Plan 同步；北京隐式缓存命中价补为 2.4 元/百万 token。
- MiniMax Hailuo 2.3 Fast：合并只在大小写上不同的两个规格，保留 exact 别名及原有非 Agent 路由。
- Cohere Embed：兼容 API 官网明确不支持 dimensions 参数，移除该接入面可选维度列表；原生共享规格和默认响应维度保留。
- OpenRouter auto：移除原来的零价字段，明确官网 -1 是动态计价占位值。
- OpenRouter 当前目录未列出的三个旧预置：从该 Provider 移除并 tombstone，不将原厂模型或其他网关的历史兼容规格同步判为退役。

2026-10-02 的 [JSON 审计快照](../../reports/provider-model-audit-2026-10-02.json) 保留为历史结果；此目录是后续字段级来源记录入口。历史快照日期和计数不会因为本轮修正而重写。
