# Perplexity：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [perplexity.json](../../../compute/providers/perplexity.json)
- [perplexity.json](../../../compute/model-specs/perplexity.json)

## 官网证据

### perplexity

- 入口：[perplexity](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`perplexity 官方入口；具体地域与接入面待该页面逐字段确认`。

## 核验结论与边界

官网迁移文档确认平台正在转向 Agent API；旧 Sonar 型号规格与当前账号可调用性必须独立核对，不能只修改 model 字符串。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/perplexity.json

接入面配置快照：`openai-completions`；端点：`https://api.perplexity.ai`；币种：`USD`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/perplexity.json -->
<!-- source-config-fingerprint: 2e86809aa786094beabf698af599985f4ffcd34fec8f78c33c29ae9968081397 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `sonar-pro` | 200000 / 8192 | USD：3 / 15 | 待核实 | [perplexity](#perplexity) | pending | `2cc4bd973047d00f734e5ef7ec62baca0f83c8e34db26ef26283161610504be1` |
| `sonar-reasoning-pro` | 128000 / 8192 | USD：2 / 8 | 待核实 | [perplexity](#perplexity) | pending | `63d921844b0a02e0ba15de47b42aa28cba3beb2fc65ceec1b260849a720575d7` |
| `sonar` | 128000 / 4096 | USD：1 / 1 | `modelName`→[perplexity](#perplexity) | [perplexity](#perplexity) | partial | `01bc6e3f8a68692aca07ee7553db726873ef2366962379ee417956aca3402d71` |

### compute/model-specs/perplexity.json

<!-- source-config: compute/model-specs/perplexity.json -->
<!-- source-config-fingerprint: ff9eac633ae62936752669aef03f3f08e161d61fe0957c88ef987ea40693e78b -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `sonar-pro` | 200000 / 8192 | 非计价主数据 | 待核实 | [perplexity](#perplexity) | pending | `333bdfa39e2d5f1c07040e470408ed5a1efd68bc22d31a2ee524465cd84ca8d9` |
| `sonar-reasoning-pro` | 128000 / 8192 | 非计价主数据 | 待核实 | [perplexity](#perplexity) | pending | `7336594cf9d00c11e30c9dc426e3bf051969c2b1f61116cdf144fcacc457b3ef` |
| `sonar` | 128000 / 4096 | 非计价主数据 | `id`→[perplexity](#perplexity) | [perplexity](#perplexity) | partial | `2a42086b6b01ead6dab0e899b3d8a5581f04cba4769462fdede7b1053018e331` |

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
  "supplier": "perplexity",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "perplexity",
      "url": "https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview",
      "kind": "official-doc",
      "scope": "perplexity 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "1b0fcd7be3f09329357b1d99b50f41833d0614f57fccdf0aa367552018923cb8",
      "resolvedUrl": "https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview"
    }
  ]
}
```
<!-- source-metadata:end -->
