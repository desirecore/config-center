# DeepSeek：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [deepseek.json](../../../compute/providers/deepseek.json)
- [deepseek.json](../../../compute/model-specs/deepseek.json)

## 官网证据

### deepseek-pricing

- 入口：[deepseek-pricing](https://api-docs.deepseek.com/zh-cn/quick_start/pricing/)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`DeepSeek 国内 CNY 按量 API；峰谷价格分别列出`。
### deepseek-thinking

- 入口：[deepseek-thinking](https://api-docs.deepseek.com/guides/thinking_mode/)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`DeepSeek 原厂 Chat/Anthropic/Responses 的思考合同`。

## 核验结论与边界

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

官网窗口/输出使用 1M/384K 简写，本仓保留十进制 1000000/384000 的保守解释；不是官网返回的逐 token 精确整数。若未来 API 返回明文上限，应以对应接入面的明文值复核。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/deepseek.json

<!-- source-config: compute/providers/deepseek.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `deepseek-flash` | 1000000 / 384000 | CNY：1 / 4 | `contextWindow`→[deepseek-pricing](#deepseek-pricing), `extra.cacheHitPrice`→[deepseek-pricing](#deepseek-pricing), `extra.reasoning.defaultEffort`→[deepseek-thinking](#deepseek-thinking), `extra.reasoning.supportedEfforts`→[deepseek-thinking](#deepseek-thinking), `inputPrice`→[deepseek-pricing](#deepseek-pricing), `maxOutputTokens`→[deepseek-pricing](#deepseek-pricing), `modelName`→[deepseek-pricing](#deepseek-pricing), `outputPrice`→[deepseek-pricing](#deepseek-pricing) | [deepseek-pricing](#deepseek-pricing), [deepseek-thinking](#deepseek-thinking) | partial | `f622ba63ca8b88e5f5ba4f7b8c5483f761cfd3239455b4bafff1def3fc1c6aff` |
| `deepseek-v4-flash-vision-exp` | 1000000 / 384000 | CNY：1.008 / 2.016 | `modelName`→[deepseek-pricing](#deepseek-pricing) | [deepseek-pricing](#deepseek-pricing) | partial | `d4fdcc2e6a816ed5b77fd7db8f939c894362c81a0c200a411e34474cece46ccc` |
| `deepseek-v4-flash` | 1000000 / 384000 | CNY：1.008 / 2.016 | `modelName`→[deepseek-pricing](#deepseek-pricing) | [deepseek-pricing](#deepseek-pricing) | partial | `745285c735d07111a7469def29dca0a22b984736a2bb2d2e18b59129734c82f4` |
| `deepseek-v4-pro` | 1000000 / 384000 | CNY：3.132 / 6.264 | `contextWindow`→[deepseek-pricing](#deepseek-pricing), `extra.cacheHitPrice`→[deepseek-pricing](#deepseek-pricing), `extra.reasoning.defaultEffort`→[deepseek-thinking](#deepseek-thinking), `extra.reasoning.supportedEfforts`→[deepseek-thinking](#deepseek-thinking), `inputPrice`→[deepseek-pricing](#deepseek-pricing), `maxOutputTokens`→[deepseek-pricing](#deepseek-pricing), `modelName`→[deepseek-pricing](#deepseek-pricing), `outputPrice`→[deepseek-pricing](#deepseek-pricing) | [deepseek-pricing](#deepseek-pricing), [deepseek-thinking](#deepseek-thinking) | partial | `fedc0385f9c8a16b31b6b46b09c1239eecfc5abf4270967ea388c1747100a6f2` |

### compute/model-specs/deepseek.json

<!-- source-config: compute/model-specs/deepseek.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `deepseek-v4-pro` | 1000000 / 384000 | 非计价主数据 | `id`→[deepseek-pricing](#deepseek-pricing), `spec.contextWindow`→[deepseek-pricing](#deepseek-pricing), `spec.maxOutputTokens`→[deepseek-pricing](#deepseek-pricing) | [deepseek-pricing](#deepseek-pricing) | partial | `9982d1d745ebeb5ddbf605e022046c9045f889ffc3bba231218f9ae8aa3331ba` |
| `deepseek-v4-pro-0813` | 1000000 / 384000 | 非计价主数据 | `id`→[deepseek-pricing](#deepseek-pricing) | [deepseek-pricing](#deepseek-pricing) | partial | `046bdb28174244880767f8d83990424ec87d77c9350b000cb7212316386d9484` |
| `deepseek-chat` | 1000000 / 384000 | 非计价主数据 | 待核实 | [deepseek-pricing](#deepseek-pricing) | pending | `e8ecb0570e23d892693e82c624da021bccba27c0e815d2b30c299ffba2ecf1b5` |
| `deepseek-reasoner` | 1000000 / 384000 | 非计价主数据 | 待核实 | [deepseek-pricing](#deepseek-pricing) | pending | `8f2441d9d31de23051041e5616f3d2b0dc6268524f0bf8e6a1fa499264b23eda` |
| `deepseek-flash` | 1000000 / 384000 | 非计价主数据 | `id`→[deepseek-pricing](#deepseek-pricing), `spec.contextWindow`→[deepseek-pricing](#deepseek-pricing), `spec.maxOutputTokens`→[deepseek-pricing](#deepseek-pricing) | [deepseek-pricing](#deepseek-pricing) | partial | `9f54d6a5866645f9b7c988b8de8ef2a24b3f3a3541f93e0a884ce4584ee915f7` |
| `deepseek-v4-flash` | 1000000 / 384000 | 非计价主数据 | `id`→[deepseek-pricing](#deepseek-pricing) | [deepseek-pricing](#deepseek-pricing) | partial | `fe77285cdd450e9570e3bedc4390e5b0de4b61c39f569c7e77fcb4b0b08d2e58` |
| `deepseek-v4-flash-0731` | 1000000 / 384000 | 非计价主数据 | 待核实 | [deepseek-pricing](#deepseek-pricing) | pending | `a7e00817468dfc4f7b45e9de8fc3d9fabb4d417f1535ea36f03533855b0b0368` |
| `deepseek-v4-flash-vision-exp` | 1000000 / 384000 | 非计价主数据 | `id`→[deepseek-pricing](#deepseek-pricing) | [deepseek-pricing](#deepseek-pricing) | partial | `4e11824426156192ca1b1d5c1dd9f66ab664a16d6d2f68e2e33c233d95eefa23` |

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
  "supplier": "deepseek",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "deepseek-pricing",
      "url": "https://api-docs.deepseek.com/zh-cn/quick_start/pricing/",
      "kind": "official-doc",
      "scope": "DeepSeek 国内 CNY 按量 API；峰谷价格分别列出",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "5a7b1832592387340f2fc456399b34b89b05f3fa167c2e35909e2fa4afe021e3",
      "resolvedUrl": "https://api-docs.deepseek.com/zh-cn/quick_start/pricing/"
    },
    {
      "id": "deepseek-thinking",
      "url": "https://api-docs.deepseek.com/guides/thinking_mode/",
      "kind": "official-doc",
      "scope": "DeepSeek 原厂 Chat/Anthropic/Responses 的思考合同",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "35350389e59872d3733f7b7f99f5485c6cbc95f1bc2a71a47ba3ecf30bd7a060",
      "resolvedUrl": "https://api-docs.deepseek.com/guides/thinking_mode/"
    }
  ]
}
```
<!-- source-metadata:end -->
