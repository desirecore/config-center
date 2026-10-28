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
    }
  ]
}
```
<!-- source-metadata:end -->
