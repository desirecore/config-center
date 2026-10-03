# OpenAI：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### openai-models

- 入口：[openai-models](https://developers.openai.com/api/docs/models)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`OpenAI 直连 API 模型目录；价格为 USD，订阅可用性另核`。
### openai-sol61

- 入口：[openai-sol61](https://developers.openai.com/api/docs/models/gpt-6.1-sol.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`OpenAI 直连 API；标准 USD token 计价；内在规格可跨接入面参考`。
### whisper

- 入口：[whisper](https://github.com/openai/whisper)
- 类型：`official-repository`；当前读取状态：`fetched`；地域/接入面：`OpenAI 官方开源仓库；本地模型安装与实际服务另核`。

### gpt-5-5-api

- 入口：[gpt-5-5-api](https://developers.openai.com/api/docs/models/gpt-5.5.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

### gpt-5-5-pro-api

- 入口：[gpt-5-5-pro-api](https://developers.openai.com/api/docs/models/gpt-5.5-pro.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

### gpt-5-4-api

- 入口：[gpt-5-4-api](https://developers.openai.com/api/docs/models/gpt-5.4.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

### gpt-5-4-pro-api

- 入口：[gpt-5-4-pro-api](https://developers.openai.com/api/docs/models/gpt-5.4-pro.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

### gpt-5-4-mini-api

- 入口：[gpt-5-4-mini-api](https://developers.openai.com/api/docs/models/gpt-5.4-mini.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

### gpt-5-4-nano-api

- 入口：[gpt-5-4-nano-api](https://developers.openai.com/api/docs/models/gpt-5.4-nano.md)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性。

## 已知边界与核验说明

GPT-6.1 Sol 的窗口、输出、推理档位与直连计价已再次核对。API 参数不能自动套用到订阅后端；订阅的档位限制保留接入面记录。其他旧型号尚未在本次逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

`extra.responsesOnly` 是为工具调用采用的保守协议收紧。官网要求工具调用走 Responses；普通无工具的 Chat Completions 仍支持，不能把此配置理解为原厂完全不支持 Chat Completions。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "openai",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "openai-models",
      "url": "https://developers.openai.com/api/docs/models",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API 模型目录；价格为 USD，订阅可用性另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f67d25aba18df1639fa04c9f56d4c06a22bc374a1b2251b5a7d6506ee4197edc",
      "resolvedUrl": "https://developers.openai.com/api/docs/models"
    },
    {
      "id": "openai-sol61",
      "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；标准 USD token 计价；内在规格可跨接入面参考",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "972f4265295eea723d5332016dc22cde03f46173fafcbcba5c23b24c8cee90c6",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-6.1-sol.md"
    },
    {
      "id": "whisper",
      "url": "https://github.com/openai/whisper",
      "kind": "official-repository",
      "scope": "OpenAI 官方开源仓库；本地模型安装与实际服务另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "00141f69ddad540f79bf3c2e89420f204a3350a940848574d6c26879a261a925",
      "resolvedUrl": "https://github.com/openai/whisper"
    },
    {
      "id": "gpt-5-5-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.5.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "fdb0fc8fe9ea7f276716c2a5b49b902e7e676ff262bb8adfdf2d5b8911bad3ba",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.5.md"
    },
    {
      "id": "gpt-5-5-pro-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.5-pro.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "a61a55e1d58cfbbf56fa075936c77fbfd59e41df4463f41056f9c6a7461f1b57",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.5-pro.md"
    },
    {
      "id": "gpt-5-4-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.4.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "c30e86b38bc6ceacb3d6db269aa6ba4a09c3c5e1322bfaf90f924fddce4013a5",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.4.md"
    },
    {
      "id": "gpt-5-4-pro-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.4-pro.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "7d4e6f56440cf9cebd56c7384118be317d30d3d2f0c33e1254c4b906fb972e22",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.4-pro.md"
    },
    {
      "id": "gpt-5-4-mini-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.4-mini.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "97dbda29af4009ed275112e92037a5b46f313caf0d1232ff9b54b899b4fb65a7",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.4-mini.md"
    },
    {
      "id": "gpt-5-4-nano-api",
      "url": "https://developers.openai.com/api/docs/models/gpt-5.4-nano.md",
      "kind": "official-doc",
      "scope": "OpenAI 直连 API；USD 每百万 token，不能证明 Codex 订阅窗口或可用性",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "3dd20e2c95f09f3efb19c6255387a4e07d4d7c213367cca0a015e162a8f5b4e0",
      "resolvedUrl": "https://developers.openai.com/api/docs/models/gpt-5.4-nano.md"
    }
  ]
}
```
<!-- source-metadata:end -->

## 本轮增量核验与临时模型边界

2026-10-03 逐一读取 GPT-5.5、5.5 Pro、5.4、5.4 Pro、5.4 Mini/Nano 明文规格页。已核字段见各单模型记录；这不能证明 Codex 订阅的参数或可用性。Mini/Nano 的总窗口 400000 与最大输入 272000 是两个不同限制，当前 schema 未声明独立最大输入字段，先记录此边界，不把 400000 宣称为可发送的输入上限。

GPT-Reserve 的官方模型页本次无法读取，官方模型搜索没有取得参数证据。保留既有手动配置和假定参数供明确选择，不删除用户先前要求的模型；共享规格将 eligibleForAgent 设为 false，正式规格取得前不参与 Agent 自动选型。1050000 共享假定窗口与 Codex 272000 接入限制仍分别待核，不能互相作为证据。
