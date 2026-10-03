# Anthropic：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### claude-models

- 入口：[claude-models](https://platform.claude.com/docs/en/models/overview.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Anthropic 原厂 API 模型目录；订阅权限另核`。
### claude-opus55

- 入口：[claude-opus55](https://platform.claude.com/docs/en/models/opus-5-5/overview.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Anthropic 原厂 Opus 5.5；USD 标准价格`。
### claude-sonnet55

- 入口：[claude-sonnet55](https://platform.claude.com/docs/en/models/sonnet-5-5/overview.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Anthropic 原厂 Sonnet 5.5；USD 标准价格`。

## 已知边界与核验说明

Opus 5.5 和 Sonnet 5.5 的窗口、输出、默认 effort、强制工具选择限制已再次核对。订阅接入与直连价格分别记录；历史型号不据此声明已核实。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "anthropic",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "claude-models",
      "url": "https://platform.claude.com/docs/en/models/overview.md",
      "kind": "official-doc",
      "scope": "Anthropic 原厂 API 模型目录；订阅权限另核",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "9d3c37c0d62e0d466d461fad29a3cba34e7ea54a1d313e2a2c025864acdfe7f3",
      "resolvedUrl": "https://platform.claude.com/docs/en/models/overview.md"
    },
    {
      "id": "claude-opus55",
      "url": "https://platform.claude.com/docs/en/models/opus-5-5/overview.md",
      "kind": "official-doc",
      "scope": "Anthropic 原厂 Opus 5.5；USD 标准价格",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "42d880d368fbe9784c80828b482dcfd5cdd96dcf79704e3da732b3eff198553d",
      "resolvedUrl": "https://platform.claude.com/docs/en/models/opus-5-5/overview.md"
    },
    {
      "id": "claude-sonnet55",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview.md",
      "kind": "official-doc",
      "scope": "Anthropic 原厂 Sonnet 5.5；USD 标准价格",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "0d7f0d48ddb9a796caf739e677f5cf882089ffd70dcb3fdb400432af43b83120",
      "resolvedUrl": "https://platform.claude.com/docs/en/models/sonnet-5-5/overview.md"
    }
  ]
}
```
<!-- source-metadata:end -->
