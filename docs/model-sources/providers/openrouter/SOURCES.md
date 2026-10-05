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
    }
  ]
}
```
<!-- source-metadata:end -->
