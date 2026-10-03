# Anthropic：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [anthropic-claude.json](../../../compute/providers/anthropic-claude.json)
- [anthropic.json](../../../compute/providers/anthropic.json)
- [anthropic.json](../../../compute/model-specs/anthropic.json)

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

## 核验结论与边界

Opus 5.5 和 Sonnet 5.5 的窗口、输出、默认 effort、强制工具选择限制已再次核对。订阅接入与直连价格分别记录；历史型号不据此声明已核实。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/anthropic-claude.json

<!-- source-config: compute/providers/anthropic-claude.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-opus-5-5` | 1000000 / 128000 | USD：未声明 / 未声明 | `contextWindow`→[claude-opus55](#claude-opus55), `extra.adaptiveThinking`→[claude-opus55](#claude-opus55), `extra.reasoning.defaultEffort`→[claude-opus55](#claude-opus55), `extra.thinkingOnly`→[claude-opus55](#claude-opus55), `maxOutputTokens`→[claude-opus55](#claude-opus55), `modelName`→[claude-models](#claude-models) | [claude-models](#claude-models), [claude-opus55](#claude-opus55) | partial | `0b8cbd3d1097c7d7474a32bcdab30bb2c24d433e810e9cf6ec34d0eb1c853d25` |
| `claude-fable-5-1` | 1000000 / 128000 | USD：未声明 / 未声明 | `modelName`→[claude-models](#claude-models) | [claude-models](#claude-models) | partial | `8676a78498c4b22fa8d9a383970c53c8a20da7a335a507290c4e5513c29d0e99` |
| `claude-opus-5` | 1000000 / 128000 | USD：未声明 / 未声明 | 待核实 | [claude-models](#claude-models) | pending | `4bd4586e538272194f94a15442412a1600a7c1e9a34413562b774e705f9180ec` |
| `claude-sonnet-5-5` | 1000000 / 128000 | USD：未声明 / 未声明 | `contextWindow`→[claude-sonnet55](#claude-sonnet55), `extra.adaptiveThinking`→[claude-sonnet55](#claude-sonnet55), `extra.forcedToolChoiceUnsupported`→[claude-sonnet55](#claude-sonnet55), `extra.reasoning.defaultEffort`→[claude-sonnet55](#claude-sonnet55), `maxOutputTokens`→[claude-sonnet55](#claude-sonnet55), `modelName`→[claude-models](#claude-models) | [claude-models](#claude-models), [claude-sonnet55](#claude-sonnet55) | partial | `deaa1823c6e0e828c96669746a571641da9d5878c7e7078834d326f290534255` |
| `claude-sonnet-5` | 1000000 / 128000 | USD：未声明 / 未声明 | 待核实 | [claude-models](#claude-models) | pending | `5fe127d1328fb81bb768e48a41fe1aeb5a1b84964d53ab31f4029e6332b350ef` |

### compute/providers/anthropic.json

<!-- source-config: compute/providers/anthropic.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-opus-5-5` | 1000000 / 128000 | USD：4 / 20 | `contextWindow`→[claude-opus55](#claude-opus55), `extra.adaptiveThinking`→[claude-opus55](#claude-opus55), `extra.forcedToolChoiceUnsupported`→[claude-opus55](#claude-opus55), `extra.reasoning.defaultEffort`→[claude-opus55](#claude-opus55), `extra.thinkingOnly`→[claude-opus55](#claude-opus55), `inputPrice`→[claude-opus55](#claude-opus55), `maxOutputTokens`→[claude-opus55](#claude-opus55), `modelName`→[claude-models](#claude-models), `outputPrice`→[claude-opus55](#claude-opus55) | [claude-models](#claude-models), [claude-opus55](#claude-opus55) | partial | `4104980fbc4161efe7f38cb45343ec308be4f5893d13733ebac51c0562ef1413` |
| `claude-fable-5-1` | 1000000 / 128000 | USD：10 / 50 | `modelName`→[claude-models](#claude-models) | [claude-models](#claude-models) | partial | `0c277612edfecf40cf814529cde3510488e8690ec2dc483d61ebd4fb354c352a` |
| `claude-opus-5` | 1000000 / 128000 | USD：5 / 25 | 待核实 | [claude-models](#claude-models) | pending | `0fd79697ff2f6a334afdb1d53631abd318cf15af2d29ad2652090b350ecc7d50` |
| `claude-sonnet-5-5` | 1000000 / 128000 | USD：2 / 10 | `contextWindow`→[claude-sonnet55](#claude-sonnet55), `extra.adaptiveThinking`→[claude-sonnet55](#claude-sonnet55), `extra.forcedToolChoiceUnsupported`→[claude-sonnet55](#claude-sonnet55), `extra.reasoning.defaultEffort`→[claude-sonnet55](#claude-sonnet55), `inputPrice`→[claude-sonnet55](#claude-sonnet55), `maxOutputTokens`→[claude-sonnet55](#claude-sonnet55), `modelName`→[claude-models](#claude-models), `outputPrice`→[claude-sonnet55](#claude-sonnet55) | [claude-models](#claude-models), [claude-sonnet55](#claude-sonnet55) | partial | `91493f5adabf726879df34330d61069199c0659e5cf5d5159508991522b847bb` |
| `claude-sonnet-5` | 1000000 / 128000 | USD：2 / 10 | 待核实 | [claude-models](#claude-models) | pending | `8bd2e7fbcf50edef6b02c4d40be10a94ffbbdc9183f40d026555383b23dbe1c8` |

### compute/model-specs/anthropic.json

<!-- source-config: compute/model-specs/anthropic.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-opus-5-5` | 1000000 / 128000 | 非计价主数据 | `id`→[claude-models](#claude-models), `spec.contextWindow`→[claude-opus55](#claude-opus55), `spec.extra.adaptiveThinking`→[claude-opus55](#claude-opus55), `spec.extra.forcedToolChoiceUnsupported`→[claude-opus55](#claude-opus55), `spec.extra.thinkingOnly`→[claude-opus55](#claude-opus55), `spec.maxOutputTokens`→[claude-opus55](#claude-opus55), `spec.releasedAt`→[claude-opus55](#claude-opus55) | [claude-models](#claude-models), [claude-opus55](#claude-opus55) | partial | `221e150e5cd55620f88f614fc65d95620a39463bbc27b387525254d4bc9bc143` |
| `claude-fable-5-1` | 1000000 / 128000 | 非计价主数据 | `id`→[claude-models](#claude-models) | [claude-models](#claude-models) | partial | `fc72b0d7c506d81052e9545c27713e6a0283730973b7df96bf64755a054c0b23` |
| `claude-opus-5` | 1000000 / 128000 | 非计价主数据 | 待核实 | [claude-models](#claude-models) | pending | `8e0685c775c05ce4b4682a8d41ac3ccc423c6bb714c01678a9a46518be4a3ce4` |
| `claude-opus-4-8` | 1000000 / 128000 | 非计价主数据 | 待核实 | [claude-models](#claude-models) | pending | `0d19e7ebc61e6500c8c04ba320a4b21d1b68e9a9c6313d5bfbdb11115c83ff2e` |
| `claude-opus-4-7` | 1000000 / 128000 | 非计价主数据 | 待核实 | [claude-models](#claude-models) | pending | `7e73e1d7ba286775b92316d273b78c61049702fedf594dc3f24d9bc9cd26c172` |
| `claude-opus` | 1000000 / 128000 | 非计价主数据 | 待核实 | [claude-models](#claude-models) | pending | `dcfa611a14501c353ede081302d5dcf601f4713daa7c9d66eed89b8398ef6991` |
| `claude-sonnet-5-5` | 1000000 / 128000 | 非计价主数据 | `id`→[claude-models](#claude-models), `spec.contextWindow`→[claude-sonnet55](#claude-sonnet55), `spec.extra.adaptiveThinking`→[claude-sonnet55](#claude-sonnet55), `spec.extra.forcedToolChoiceUnsupported`→[claude-sonnet55](#claude-sonnet55), `spec.maxOutputTokens`→[claude-sonnet55](#claude-sonnet55), `spec.releasedAt`→[claude-sonnet55](#claude-sonnet55) | [claude-models](#claude-models), [claude-sonnet55](#claude-sonnet55) | partial | `721b450117510321de0f49c3b45ec80e2b35091c8d4fa38ceeb99b958deea141` |
| `claude-sonnet-5` | 1000000 / 128000 | 非计价主数据 | 待核实 | [claude-models](#claude-models) | pending | `e740026b7275cd07ed37afa3044e12e6e6221a1723126aa100774ea167d53ba8` |
| `claude-sonnet-4-6` | 1000000 / 64000 | 非计价主数据 | 待核实 | [claude-models](#claude-models) | pending | `464028a4bb69a6fec2f73eaf02a252c059de06e7ee6b9dba0c12f66620397612` |
| `claude-sonnet-4-5` | 1000000 / 64000 | 非计价主数据 | 待核实 | [claude-models](#claude-models) | pending | `cc97cd7eca6305eb9f184a704229b310af9ba944048f0d6b511c97f5b92e9bef` |
| `claude-sonnet` | 1000000 / 128000 | 非计价主数据 | 待核实 | [claude-models](#claude-models) | pending | `bdaa3e39ce61e66080d750c4d14c9dbf68ab5be92b5295076f71b48859a44d30` |

## 待核实项与更新步骤

1. 按模型 ID 打开上面的官方页面，定位对应型号/地域/接入面，不以页脚日期或目录存在代替参数证明。
2. 先核对上下文、单次输出、推理和多模态输入，再核对计价单位；套餐可用性单独核对。
3. 修改 canonical JSON、对应 Provider 副本及本页中实际变化的记录；只更新真实核实字段及来源，不将 pending 批量改成 partial。
4. 用 `node scripts/validate-sources.mjs --fingerprints` 查看新指纹；同步本页受影响的表格行。
5. 运行 `npm run validate` 与 `npm test`，必要时在已授权账号做聚焦调用；无实测时保留限制说明。

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
