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

### claude-fable51

- 入口：[claude-fable51](https://platform.claude.com/docs/en/models/fable-5-1/overview.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Anthropic 原厂 API 单型号规格/effort；不证明订阅账号权限`。

### claude-opus5

- 入口：[claude-opus5](https://platform.claude.com/docs/en/models/opus-5/overview.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Anthropic 原厂 API 单型号规格/effort；不证明订阅账号权限`。

### claude-sonnet5

- 入口：[claude-sonnet5](https://platform.claude.com/docs/en/models/sonnet-5/overview.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Anthropic 原厂 API 单型号规格/effort；不证明订阅账号权限`。

### claude-effort

- 入口：[claude-effort](https://platform.claude.com/docs/en/build-with-claude/effort.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Anthropic 原厂 API 单型号规格/effort；不证明订阅账号权限`。

### claude-haiku45

- 入口：[claude-haiku45](https://platform.claude.com/docs/en/models/haiku-4-5/overview.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Anthropic 原厂 API 单型号规格/effort；不证明订阅账号权限`。

## 已知边界与核验说明

Opus 5.5 和 Sonnet 5.5 的窗口、输出、默认 effort、强制工具选择限制已再次核对。订阅接入与直连价格分别记录；Opus 5/Sonnet 5 原厂默认均为 high，清除旧 xhigh 默认与重复扁平 defaultEffort；共享 routing 的 xhigh 仍是本仓策略，与 API 默认分开记录。未取得单型号证明的其他历史型号不据此声明已核实。

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
    },
    {
      "id": "claude-fable51",
      "url": "https://platform.claude.com/docs/en/models/fable-5-1/overview.md",
      "kind": "official-doc",
      "scope": "Anthropic 原厂 API 单型号规格/effort；不证明订阅账号权限",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "f32fbe39812dd73d0bfc8e58de18da67a59571ac5abb43a4c0bc645d9c8a8904",
      "resolvedUrl": "https://platform.claude.com/docs/en/models/fable-5-1/overview.md"
    },
    {
      "id": "claude-opus5",
      "url": "https://platform.claude.com/docs/en/models/opus-5/overview.md",
      "kind": "official-doc",
      "scope": "Anthropic 原厂 API 单型号规格/effort；不证明订阅账号权限",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "18a78d2967ab31b92fb5651ead59c539b45ece7c33b5e857a6f8f3e72c74272d",
      "resolvedUrl": "https://platform.claude.com/docs/en/models/opus-5/overview.md"
    },
    {
      "id": "claude-sonnet5",
      "url": "https://platform.claude.com/docs/en/models/sonnet-5/overview.md",
      "kind": "official-doc",
      "scope": "Anthropic 原厂 API 单型号规格/effort；不证明订阅账号权限",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "68f590298ac0f5e6271fd2d9707084e4f9d2e7e22358d4bfa8f5279cbd690708",
      "resolvedUrl": "https://platform.claude.com/docs/en/models/sonnet-5/overview.md"
    },
    {
      "id": "claude-effort",
      "url": "https://platform.claude.com/docs/en/build-with-claude/effort.md",
      "kind": "official-doc",
      "scope": "Anthropic 原厂 API 单型号规格/effort；不证明订阅账号权限",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "073ce24b7a8922388477281126b05dca553ed3d95efa86e3256402b55044bd64",
      "resolvedUrl": "https://platform.claude.com/docs/en/build-with-claude/effort.md"
    },
    {
      "id": "claude-haiku45",
      "url": "https://platform.claude.com/docs/en/models/haiku-4-5/overview.md",
      "kind": "official-doc",
      "scope": "Anthropic 原厂 API 单型号规格/effort；不证明订阅账号权限",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "be8631fdf43f4edd374e980f82d5578e9795a09637c9a0b70d353139a0fec173",
      "resolvedUrl": "https://platform.claude.com/docs/en/models/haiku-4-5/overview.md"
    }
  ]
}
```
<!-- source-metadata:end -->
