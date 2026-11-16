# Google Gemini：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### google-models

- 入口：[google-models](https://ai.google.dev/gemini-api/docs/models)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`google 官方入口；具体地域与接入面待该页面逐字段确认`。
### google-embedding

- 入口：[google-embedding](https://ai.google.dev/gemini-api/docs/embeddings)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Gemini Developer API 原生 Embedding 2；输入限额与输出向量维度`。
### google-tts

- 入口：[google-tts](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Gemini Developer API 原生 TTS；输入和输出分别限额`。
### google-transcribe

- 入口：[google-transcribe](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Gemini Developer API 原生转写，客户端协议适配另核`。

### gemini-3-8-flash-limits

- 入口：[gemini-3-8-flash-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-7-flash-limits

- 入口：[gemini-3-7-flash-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-5-flash-lite-limits

- 入口：[gemini-3-5-flash-lite-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-5-flash-limits

- 入口：[gemini-3-5-flash-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-1-flash-lite-limits

- 入口：[gemini-3-1-flash-lite-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-1-pro-preview-limits

- 入口：[gemini-3-1-pro-preview-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-3-flash-preview-limits

- 入口：[gemini-3-flash-preview-limits](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-2-5-pro-limits

- 入口：[gemini-2-5-pro-limits](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

### gemini-2-5-flash-limits

- 入口：[gemini-2-5-flash-limits](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Gemini Developer API 精确模型页；input 与 output 限额独立。

## 已知边界与核验说明

Embedding 2 的最大输入 8192 和推荐维度 768/1536/3072 已再次核对。新 TTS 的输入 8192 与输出 16384 是分别的限制，不用 output<=input 判断错误。新音频协议只有共享规格，不能宣称客户端已适配。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 2026-10-28 新型号核对

Argon 原厂共享 1048576 窗口，GenerateContent 单次流式 65536、非流式 REST 32768。共享规格记录单次流式上限 65536，当前原生接入采用两种请求均可接受的 32768；百万输出需要额外 continuation 或 Interactions 后台执行，本次没有声明这项适配。推理 low/medium/high、默认 medium；移除采样入参，只使用隐式缓存。Standard 优惠 2/10/0.1 USD/M 至 2026-11-30；2026-12-01 起 4/20/0.2。没有把 Managed Agents/Antigravity 的可用性当本仓订阅接入证据。

### google-argon

- 入口：[google-argon](https://ai.google.dev/gemini-api/docs/models/gemini-4-argon)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://ai.google.dev/gemini-api/docs/models/gemini-4-argon。
- 适用范围：Gemini Developer API 精确模型页；统一 1048576 窗口、模态、函数调用及单次流式输出上限。

### google-argon-thinking

- 入口：[google-argon-thinking](https://ai.google.dev/gemini-api/docs/thinking)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://ai.google.dev/gemini-api/docs/thinking。
- 适用范围：Gemini 4 low/medium/high、默认 medium；不将后台长输出视为原生单次响应。

### google-argon-pricing

- 入口：[google-argon-pricing](https://ai.google.dev/gemini-api/docs/pricing)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://ai.google.dev/gemini-api/docs/pricing。
- 适用范围：Google Standard USD 价格；当前优惠截至 2026-11-30，2026-12-01 起恢复原价，无免费层、只支持隐式缓存。

### google-argon-latest

- 入口：[google-argon-latest](https://ai.google.dev/gemini-api/docs/latest-model)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://ai.google.dev/gemini-api/docs/latest-model。
- 适用范围：Gemini 4 采样参数被忽略、显式缓存不支持；生成与 Interactions 后台执行区别。

### google-argon-generate-content

- 入口：[google-argon-generate-content](https://ai.google.dev/gemini-api/docs/generate-content/long-decode)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://ai.google.dev/gemini-api/docs/generate-content/long-decode。
- 适用范围：GenerateContent 官方单次响应：流式 65536、非流式 REST 32768；long decode 必须额外 SDK/continuation 流程。

## 2026-11-16 新型号核对

Carbon 与 Hydrogen 的上下文是统一 1048576（输入、思考与输出共享），不能作为独立最大输入。Carbon 单次流式65536、非流式REST32768；Hydrogen两种请求均65536。百万输出须额外 continuation，当前接入不声明支持。Carbon默认medium，Hydrogen默认high且另支持xhigh；原厂与OpenRouter默认值分别记录。两者移除采样入参，只支持隐式缓存。Carbon Standard 优惠2/10/0.10 USD/M至2026-11-30，12月1日起4/20/0.20，无免费层；Hydrogen Standard付费1.50/7.50/0.075，另有免费层。Gemini Omni依赖Interactions视频合同，Nano Banana 2.1为图像模型；二者仅登记规格，不凭生成文本接口放行媒体调用。Google官方旧入口实际重定向至aistudio.google.com，以下新来源直接读取该官方文档域。

### google-carbon

- 入口：[google-carbon](https://aistudio.google.com/docs/models/gemini-4-carbon.md)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://aistudio.google.com/docs/models/gemini-4-carbon.md。
- 适用范围：Gemini Developer API Carbon；精确ID、统一1048576窗口、65536同步输出、模态和工具。

### google-hydrogen

- 入口：[google-hydrogen](https://aistudio.google.com/docs/models/gemini-4-hydrogen.md)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://aistudio.google.com/docs/models/gemini-4-hydrogen.md。
- 适用范围：Gemini Developer API Hydrogen；精确ID、统一1048576窗口、65536同步输出、模态和工具。

### google-carbon-generate-content

- 入口：[google-carbon-generate-content](https://aistudio.google.com/docs/whats-new-gemini-4-carbon.md?generate-content=true)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://aistudio.google.com/docs/whats-new-gemini-4-carbon.md?generate-content=true。
- 适用范围：Carbon原生GenerateContent；默认medium、low/medium/high、移除采样入参及thought signatures。

### google-hydrogen-generate-content

- 入口：[google-hydrogen-generate-content](https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen.md?generate-content=true)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen.md?generate-content=true。
- 适用范围：Hydrogen原生GenerateContent；默认high、四档effort、65536同步请求及移除采样入参。

### google-gemini4-pricing

- 入口：[google-gemini4-pricing](https://aistudio.google.com/docs/pricing.md)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://aistudio.google.com/docs/pricing.md。
- 适用范围：Google Standard USD每百万token；Carbon限时价格、Hydrogen平价、隐式缓存及各服务层分别计价。

### google-gemini4-generate-content

- 入口：[google-gemini4-generate-content](https://aistudio.google.com/docs/long-decode.md?generate-content=true)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://aistudio.google.com/docs/long-decode.md?generate-content=true。
- 适用范围：原生GenerateContent；Carbon流式65536/非流式32768，Hydrogen均65536；long decode须续传。

### google-omni-flash

- 入口：[google-omni-flash](https://aistudio.google.com/docs/models/gemini-omni-flash.md)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://aistudio.google.com/docs/models/gemini-omni-flash.md。
- 适用范围：Gemini Omni 1.1/1.2 Flash；独立输入131072/输出65536、模态、版本切换日；Interactions适配另核。

### google-nano-banana21

- 入口：[google-nano-banana21](https://aistudio.google.com/docs/models/gemini-nano-banana-2.1.md)。
- 读取日期：2026-11-16；状态：`fetched`；最终地址：https://aistudio.google.com/docs/models/gemini-nano-banana-2.1.md。
- 适用范围：Gemini Nano Banana 2.1；独立输入131072/输出32768、模态、函数调用不支持及图像能力。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "google",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "google-models",
      "url": "https://ai.google.dev/gemini-api/docs/models",
      "kind": "official-doc",
      "scope": "本轮读取 google 官方 google-models 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "6e733f05dd42bc5645b98f0c7e882d39992043a01ef70409c4046b44525b0f62",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models"
    },
    {
      "id": "google-embedding",
      "url": "https://ai.google.dev/gemini-api/docs/embeddings",
      "kind": "official-doc",
      "scope": "本轮读取 google 官方 google-embedding 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "8c689e5b0d6efc4877bf8bee2c47d86a6aa95a4759f753f70909b72d7731575d",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/embeddings"
    },
    {
      "id": "google-tts",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts",
      "kind": "official-doc",
      "scope": "本轮读取 google 官方 google-tts 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "85dd9fcd358abbfe7a60eddb2e555bd575e9e67f8619101cc221bdc8dbbb0e96",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts"
    },
    {
      "id": "google-transcribe",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe",
      "kind": "official-doc",
      "scope": "本轮读取 google 官方 google-transcribe 页面；按单模型记录限定字段与接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "5bc7197abb570de7d97328156ae6945e5ac2f4bc4f71b25241af356003779b63",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe"
    },
    {
      "id": "gemini-3-8-flash-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "501054658f82eef3a1b77fa07dba4f7e9a2707d2e05967edfd5c4f86d9cb8b94",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash"
    },
    {
      "id": "gemini-3-7-flash-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "cbf8b675f6646f7ad9531ded395231116852649da894b9dedfdc443649de2c4c",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash"
    },
    {
      "id": "gemini-3-5-flash-lite-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f882612c75dc5c05dd3a81731a74619b43ada1f6e0299d78410ef997735e4cdb",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite"
    },
    {
      "id": "gemini-3-5-flash-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "9064efb36a594cac683f0bc8e485ef9ed2af6d4819dc4519b371b880e91e05fc",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash"
    },
    {
      "id": "gemini-3-1-flash-lite-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "b3eb09cfc8702dec2304a0040d80da4340afbf9832b5420f7b9fa0b6c6ef629b",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite"
    },
    {
      "id": "gemini-3-1-pro-preview-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "a23d9b5e92d9bc2f600442b71e564758836c5f6581f447eed9d36e0a83b7e085",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview"
    },
    {
      "id": "gemini-3-flash-preview-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f2dfffd80a12490e9d5955adfd76243802237c118748f6f3aefa05109cab8732",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview"
    },
    {
      "id": "gemini-2-5-pro-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "0d16c0b445ced4f8999f6d1013ae2462b4f4415faf4928e3b94fc20e07bab418",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro"
    },
    {
      "id": "gemini-2-5-flash-limits",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；input 与 output 限额独立",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "e362b28bbf49e3baf48f6e8b97dd01c00456c0a23ca0f84badc5f5218eca8679",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash"
    },
    {
      "id": "google-argon",
      "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon",
      "kind": "official-doc",
      "scope": "Gemini Developer API 精确模型页；统一 1048576 窗口、模态、函数调用及单次流式输出上限",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "fa68a69cfa8c6753d0ac67779eba79ef31ba4c40be91219b057bfe6215fdf5ff",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon"
    },
    {
      "id": "google-argon-thinking",
      "url": "https://ai.google.dev/gemini-api/docs/thinking",
      "kind": "official-doc",
      "scope": "Gemini 4 low/medium/high、默认 medium；不将后台长输出视为原生单次响应",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "ed211ddce11d78053fb7649091e3b69bb7fc107c1022df4399bef46a2435ab6d",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/thinking"
    },
    {
      "id": "google-argon-pricing",
      "url": "https://ai.google.dev/gemini-api/docs/pricing",
      "kind": "official-doc",
      "scope": "Google Standard USD 价格；当前优惠截至 2026-11-30，2026-12-01 起恢复原价，无免费层、只支持隐式缓存",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "a61da7c818bba203efde249a8888b624ca0f6aa54d2f9563cfecc4124e0df0e5",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/pricing"
    },
    {
      "id": "google-argon-latest",
      "url": "https://ai.google.dev/gemini-api/docs/latest-model",
      "kind": "official-doc",
      "scope": "Gemini 4 采样参数被忽略、显式缓存不支持；生成与 Interactions 后台执行区别",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "dd120181253c58ac2d355d099b9fa7360570fd56cdea66cb6d282d66773a91a5",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/latest-model"
    },
    {
      "id": "google-argon-generate-content",
      "url": "https://ai.google.dev/gemini-api/docs/generate-content/long-decode",
      "kind": "official-doc",
      "scope": "GenerateContent 官方单次响应：流式 65536、非流式 REST 32768；long decode 必须额外 SDK/continuation 流程",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "d2813754f98f93ee1ae6932afd8650c9cf67f1cea9d9b352a0affc1f996779a6",
      "resolvedUrl": "https://ai.google.dev/gemini-api/docs/generate-content/long-decode"
    },
    {
      "id": "google-carbon",
      "url": "https://aistudio.google.com/docs/models/gemini-4-carbon.md",
      "kind": "official-doc",
      "scope": "Gemini Developer API Carbon；精确ID、统一1048576窗口、65536同步输出、模态和工具",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "eaec9eeec2cc6762b304ef3e1e023c6fa3c719fbbab65667aae40ae0594d953b",
      "resolvedUrl": "https://aistudio.google.com/docs/models/gemini-4-carbon.md"
    },
    {
      "id": "google-hydrogen",
      "url": "https://aistudio.google.com/docs/models/gemini-4-hydrogen.md",
      "kind": "official-doc",
      "scope": "Gemini Developer API Hydrogen；精确ID、统一1048576窗口、65536同步输出、模态和工具",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "a6092c96e31551c57259ccf4d51cdf894276e9f95a444d6dc2a858cfa0b6240f",
      "resolvedUrl": "https://aistudio.google.com/docs/models/gemini-4-hydrogen.md"
    },
    {
      "id": "google-carbon-generate-content",
      "url": "https://aistudio.google.com/docs/whats-new-gemini-4-carbon.md?generate-content=true",
      "kind": "official-doc",
      "scope": "Carbon原生GenerateContent；默认medium、low/medium/high、移除采样入参及thought signatures",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "c7a51ed39d1ffbf70a1194405286ab71fbc402548d4493a3bc15e0fde3540470",
      "resolvedUrl": "https://aistudio.google.com/docs/whats-new-gemini-4-carbon.md?generate-content=true"
    },
    {
      "id": "google-hydrogen-generate-content",
      "url": "https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen.md?generate-content=true",
      "kind": "official-doc",
      "scope": "Hydrogen原生GenerateContent；默认high、四档effort、65536同步请求及移除采样入参",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "137292bb6824662a754519b215433b65c626ec3114b53b1fe250340dcb0fa687",
      "resolvedUrl": "https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen.md?generate-content=true"
    },
    {
      "id": "google-gemini4-pricing",
      "url": "https://aistudio.google.com/docs/pricing.md",
      "kind": "official-doc",
      "scope": "Google Standard USD每百万token；Carbon限时价格、Hydrogen平价、隐式缓存及各服务层分别计价",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "1ddcee6adba7130c4fe1a6c40315f1bcae6e402a7262619b45d819cfcb021d8f",
      "resolvedUrl": "https://aistudio.google.com/docs/pricing.md"
    },
    {
      "id": "google-gemini4-generate-content",
      "url": "https://aistudio.google.com/docs/long-decode.md?generate-content=true",
      "kind": "official-doc",
      "scope": "原生GenerateContent；Carbon流式65536/非流式32768，Hydrogen均65536；long decode须续传",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "a2dac3d06531099814d42231c83823db773ebc8877526c74bd6383ffc5fbe4a1",
      "resolvedUrl": "https://aistudio.google.com/docs/long-decode.md?generate-content=true"
    },
    {
      "id": "google-omni-flash",
      "url": "https://aistudio.google.com/docs/models/gemini-omni-flash.md",
      "kind": "official-doc",
      "scope": "Gemini Omni 1.1/1.2 Flash；独立输入131072/输出65536、模态、版本切换日；Interactions适配另核",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "1a7f0c22626b058bd0e401684fd25a00d367b4abe9eef2289662b12997155699",
      "resolvedUrl": "https://aistudio.google.com/docs/models/gemini-omni-flash.md"
    },
    {
      "id": "google-nano-banana21",
      "url": "https://aistudio.google.com/docs/models/gemini-nano-banana-2.1.md",
      "kind": "official-doc",
      "scope": "Gemini Nano Banana 2.1；独立输入131072/输出32768、模态、函数调用不支持及图像能力",
      "retrieval": "fetched",
      "checkedAt": "2026-11-16",
      "contentSha256": "19f5c3fb92311a1116e4011d59c22c1822634c44755aa2b83700d3666f392a2f",
      "resolvedUrl": "https://aistudio.google.com/docs/models/gemini-nano-banana-2.1.md"
    }
  ]
}
```
<!-- source-metadata:end -->
