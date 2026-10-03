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
    }
  ]
}
```
<!-- source-metadata:end -->
