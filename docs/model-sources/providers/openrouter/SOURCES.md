# OpenRouter：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### openrouter-api

- 入口：[openrouter-api](https://openrouter.ai/api/v1/models)
- 类型：`official-api`；当前读取状态：`fetched`；地域/接入面：`OpenRouter 公共 Models API 快照；USD/token 换算为 USD/百万 token`。

### openrouter-models-tools

- 入口：[openrouter-models-tools](https://openrouter.ai/api/v1/models)
- 类型：`official-api`；读取状态：`fetched`；适用范围：OpenRouter 官方模型目录 API；2026-10-05 只核对 openrouter/auto 的 supported_parameters。

## 已知边界与核验说明

只使用平台自己的 Models API 解释该接入面的 ID、窗口和 token 价格。API 的价格单位是 USD/token，配置乘以 1000000；-1 表示动态路由占位，不代表免费。当前目录缺少 stealth/ox-alpha、openai/gpt-oss-120b:free、qwen/qwen3-coder:free，已从该 Provider 移除并添加 tombstones。缺少于目录只证明此次未列出，不推断原厂模型退役。

2026-10-05 工具调用核对：以上 `openrouter-models-tools` 只用于核对函数 / 工具调用是否受支持，读取日期 2026-10-05；没有借此复核窗口、价格等其他字段，也没有做账号调用验收。能力标签里只有 `tool_use` 一项以这些来源为依据。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 2026-10-28 新型号核对

只新增 gpt-6.1-terra、claude-haiku-5.5、minimax-m3.1-flash、kimi-k3.1-pro、gemini-4-argon 和 mistral-large-4-0 六个托管条目，不添加 batch 变体、Terra Pro 或本次未取得原厂精确身份证明的其他目录项。价格以 Decimal 等价十进制换算 USD/token × 1000000；不得把媒体、search 单位视为 token 费。MiniMax 平台窗口 1048576 与原厂 1000000 不同，Kimi/Argon 输出 943718 均为独立平台合同；无账号调用验收。

### openrouter-20261028

- 入口：[openrouter-20261028](https://openrouter.ai/api/v1/models)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://openrouter.ai/api/v1/models。
- 适用范围：仅核对本批六个新型号的 OpenRouter ID、输入模态、工具、窗口/输出和 USD/token 价格；不刷新存量条目或推断厂家退役。

## 2026-11-16 新型号增量核对

新增 Qwen4 Max、Gemini 4 Carbon/Hydrogen、HY4、GLM Legal 及百度两条平台专属入口。百度两条使用 access-local 精确接入合同，不绑定尚未确认的国内原厂 API ID、不继承家族规格。Fable 5.2 的历史消息 prefix 校验仍待客户端适配验证，本批不新增其接入；Gemini Omni 视频协议与 batch 变体也不放入当前聊天 Provider。其他新供应商条目不在本轮已配置供应商的增量范围。未执行账号调用。

### openrouter-20261116

- 入口：[openrouter-20261116](https://openrouter.ai/api/v1/models)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://openrouter.ai/api/v1/models。
- 适用范围：本批七条新接入的独立平台 ID、输入模态、工具、推理档位、窗口与输出以及 USD/token 价格；不证明原厂端点或订阅可用性。

## 2026-11-18 新型号增量核对

本批分别记录 GPT-6.2 Sol、Astra 与两个 OpenRouter Pro listings。四条普通聊天接入均为 1050000 总窗口、128000 最大输出；OpenAI endpoint 明确最大输入 922000，不能仅从窗口减法推导，也不能把总窗口称为最大输入。输入模态为文件、图片和文本，输出文本；工具调用与结构化输出有独立平台声明。推理始终开启，low/medium/high/xhigh/max，默认 medium；不添加 none 或默认 temperature/top_p。supported_parameters 未列 temperature/top_p，default_parameters 为空；本仓据此保守禁发采样参数，不把 extra.samplingParametersDeprecated 标记称为网关明文宣布废弃的证明。未执行账号调用。

Standard 单价按 USD/token 乘 1000000：Sol 及其 Pro 输入/输出/缓存读/写为 2/10/0.1/2.5，Astra 及其 Pro 为 8/40/0.4/10。Models API 的长输入覆盖字段为 min_prompt_tokens=272000，Sol 对应 4/15/0.2/5，Astra 16/60/0.8/20。原始覆盖合同保存在 canonical metadata 与来源；V1 仅以已有定价说明完整记录，不声称客户端会按此自动估算。Fast/Ultrafast 是不同 Provider endpoint，token 单价分别是 Standard 的 2/3 倍，不属于新模型 ID，也不混入普通 Standard 计价。其他工具计量项与 token 单位分开；本批未从单价字段猜测其收费单位。

官方 Reasoning Mode 文档明确两种等价请求：普通模型加 mode=pro，或直接调用 *-pro listing；后者不需要本客户端新增 reasoning.mode 请求键。mode 独立于请求级 effort，Pro 通常消耗更多推理 tokens；不能与原生的会话内 configuration_update 同用。两个 Pro 条目使用 access-local、modelRef=null，不制造原厂 Pro API 模型身份，也不继承原厂家族或扩大自动路由。四个 :batch 变体只有批处理端点，本批不放入普通聊天。

### openrouter-20261118

- 入口：[openrouter-20261118](https://openrouter.ai/api/v1/models)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://openrouter.ai/api/v1/models。
- 适用范围：OpenRouter GPT-6.2 Sol/Astra 及平台 Pro listings 的独立ID、模态、tools、推理与Standard USD/token计价；不证明原厂Pro API模型或Codex订阅。

### openrouter-pro-mode-20261118

- 入口：[openrouter-pro-mode-20261118](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://openrouter.ai/docs/guides/best-practices/reasoning-tokens。
- 适用范围：OpenRouter Reasoning Mode 明确standard+mode=pro与直接*-pro listing等价；request-level effort独立；不证明原厂存在-pro模型ID。

### openrouter-gpt-6.2-sol-endpoints-20261118

- 入口：[openrouter-gpt-6.2-sol-endpoints-20261118](https://openrouter.ai/api/v1/models/openai/gpt-6.2-sol/endpoints)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://openrouter.ai/api/v1/models/openai/gpt-6.2-sol/endpoints。
- 适用范围：OpenRouter gpt-6.2-sol 各独立Provider endpoint最大输入922000及Standard/Fast/Ultrafast价格；地域价差不混入普通Standard价格。

### openrouter-gpt-6.2-astra-endpoints-20261118

- 入口：[openrouter-gpt-6.2-astra-endpoints-20261118](https://openrouter.ai/api/v1/models/openai/gpt-6.2-astra/endpoints)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://openrouter.ai/api/v1/models/openai/gpt-6.2-astra/endpoints。
- 适用范围：OpenRouter gpt-6.2-astra 各独立Provider endpoint最大输入922000及Standard/Fast/Ultrafast价格；地域价差不混入普通Standard价格。

### openrouter-gpt-6.2-sol-pro-endpoints-20261118

- 入口：[openrouter-gpt-6.2-sol-pro-endpoints-20261118](https://openrouter.ai/api/v1/models/openai/gpt-6.2-sol-pro/endpoints)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://openrouter.ai/api/v1/models/openai/gpt-6.2-sol-pro/endpoints。
- 适用范围：OpenRouter gpt-6.2-sol-pro 各独立Provider endpoint最大输入922000及Standard/Fast/Ultrafast价格；地域价差不混入普通Standard价格。

### openrouter-gpt-6.2-astra-pro-endpoints-20261118

- 入口：[openrouter-gpt-6.2-astra-pro-endpoints-20261118](https://openrouter.ai/api/v1/models/openai/gpt-6.2-astra-pro/endpoints)。
- 读取日期：2026-11-18；状态：`fetched`；最终地址：https://openrouter.ai/api/v1/models/openai/gpt-6.2-astra-pro/endpoints。
- 适用范围：OpenRouter gpt-6.2-astra-pro 各独立Provider endpoint最大输入922000及Standard/Fast/Ultrafast价格；地域价差不混入普通Standard价格。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openrouter",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "openrouter-api",
      "url": "https://openrouter.ai/api/v1/models",
      "kind": "official-api",
      "scope": "OpenRouter 公共 Models API 快照；USD/token 换算为 USD/百万 token",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "17f5cbde8c7bbac639e17cabd2f90dcb82499e9b6bbff38d234ca0c7129b96c2",
      "resolvedUrl": "https://openrouter.ai/api/v1/models"
    },
    {
      "id": "openrouter-models-tools",
      "url": "https://openrouter.ai/api/v1/models",
      "kind": "official-api",
      "scope": "OpenRouter 官方模型目录 API；2026-10-05 只核对 openrouter/auto 的 supported_parameters",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "e417af0907c15237d9f86fd1eb6344902b50129aa38539c14a74244b1d11a199",
      "resolvedUrl": "https://openrouter.ai/api/v1/models"
    },
    {
      "id": "openrouter-20261028",
      "url": "https://openrouter.ai/api/v1/models",
      "kind": "official-api",
      "scope": "仅核对本批六个新型号的 OpenRouter ID、输入模态、工具、窗口/输出和 USD/token 价格；不刷新存量条目或推断厂家退役",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "aa52ebd64de8f9a479134c57cf643e7285d86326196de02a93495c2c4059c02c",
      "resolvedUrl": "https://openrouter.ai/api/v1/models"
    },
    {
      "id": "openrouter-20261116",
      "url": "https://openrouter.ai/api/v1/models",
      "kind": "official-api",
      "scope": "本批七条新接入的独立平台 ID、输入模态、工具、推理档位、窗口与输出以及 USD/token 价格；不证明原厂端点或订阅可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "60cf92112c1cae56e073a4f95de19a2cda1d799844f31e15266da8bd5f6d6b5a",
      "resolvedUrl": "https://openrouter.ai/api/v1/models"
    },
    {
      "id": "openrouter-20261118",
      "url": "https://openrouter.ai/api/v1/models",
      "resolvedUrl": "https://openrouter.ai/api/v1/models",
      "checkedAt": "2026-11-18",
      "retrieval": "fetched",
      "kind": "official-api",
      "contentSha256": "55355d4c247b25ad1a5b86402358162881cabecec211299e1fd543cec795cabd",
      "scope": "OpenRouter GPT-6.2 Sol/Astra 及平台 Pro listings 的独立ID、模态、tools、推理与Standard USD/token计价；不证明原厂Pro API模型或Codex订阅"
    },
    {
      "id": "openrouter-pro-mode-20261118",
      "url": "https://openrouter.ai/docs/guides/best-practices/reasoning-tokens",
      "resolvedUrl": "https://openrouter.ai/docs/guides/best-practices/reasoning-tokens",
      "checkedAt": "2026-11-18",
      "retrieval": "fetched",
      "kind": "official-doc",
      "contentSha256": "6ef6084007874c69d43b734f6c648be8060aae0d2343b2bf0b80d580a17b76c8",
      "scope": "OpenRouter Reasoning Mode 明确standard+mode=pro与直接*-pro listing等价；request-level effort独立；不证明原厂存在-pro模型ID"
    },
    {
      "id": "openrouter-gpt-6.2-sol-endpoints-20261118",
      "url": "https://openrouter.ai/api/v1/models/openai/gpt-6.2-sol/endpoints",
      "resolvedUrl": "https://openrouter.ai/api/v1/models/openai/gpt-6.2-sol/endpoints",
      "checkedAt": "2026-11-18",
      "retrieval": "fetched",
      "kind": "official-api",
      "contentSha256": "774ad9c1e6b5739a9f394ace00be9e2d553c921b45406ca9a2a0730033483abc",
      "scope": "OpenRouter gpt-6.2-sol 各独立Provider endpoint最大输入922000及Standard/Fast/Ultrafast价格；地域价差不混入普通Standard价格"
    },
    {
      "id": "openrouter-gpt-6.2-astra-endpoints-20261118",
      "url": "https://openrouter.ai/api/v1/models/openai/gpt-6.2-astra/endpoints",
      "resolvedUrl": "https://openrouter.ai/api/v1/models/openai/gpt-6.2-astra/endpoints",
      "checkedAt": "2026-11-18",
      "retrieval": "fetched",
      "kind": "official-api",
      "contentSha256": "9b6a4ed04503ce81876bc780eea019f37e6cc5fbdc77a401c19346abe9be9b61",
      "scope": "OpenRouter gpt-6.2-astra 各独立Provider endpoint最大输入922000及Standard/Fast/Ultrafast价格；地域价差不混入普通Standard价格"
    },
    {
      "id": "openrouter-gpt-6.2-sol-pro-endpoints-20261118",
      "url": "https://openrouter.ai/api/v1/models/openai/gpt-6.2-sol-pro/endpoints",
      "resolvedUrl": "https://openrouter.ai/api/v1/models/openai/gpt-6.2-sol-pro/endpoints",
      "checkedAt": "2026-11-18",
      "retrieval": "fetched",
      "kind": "official-api",
      "contentSha256": "96859bb90c3831955ce30698e9f8cb1717f18ccbcd03aa5cb6e8cf4601517c85",
      "scope": "OpenRouter gpt-6.2-sol-pro 各独立Provider endpoint最大输入922000及Standard/Fast/Ultrafast价格；地域价差不混入普通Standard价格"
    },
    {
      "id": "openrouter-gpt-6.2-astra-pro-endpoints-20261118",
      "url": "https://openrouter.ai/api/v1/models/openai/gpt-6.2-astra-pro/endpoints",
      "resolvedUrl": "https://openrouter.ai/api/v1/models/openai/gpt-6.2-astra-pro/endpoints",
      "checkedAt": "2026-11-18",
      "retrieval": "fetched",
      "kind": "official-api",
      "contentSha256": "4339977c5d6a5b561d876e07dc181d67b428881f63c30e3f0d4fc50a58e65e46",
      "scope": "OpenRouter gpt-6.2-astra-pro 各独立Provider endpoint最大输入922000及Standard/Fast/Ultrafast价格；地域价差不混入普通Standard价格"
    }
  ]
}
```
<!-- source-metadata:end -->
