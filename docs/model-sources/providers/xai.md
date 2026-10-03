# xAI：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [xai.json](../../../compute/providers/xai.json)
- [xai.json](../../../compute/model-specs/xai.json)

## 官网证据

### xai

- 入口：[xai](https://docs.x.ai/developers/release-notes)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`xai 官方入口；具体地域与接入面待该页面逐字段确认`。

## 核验结论与边界

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/xai.json

接入面配置快照：`openai-completions`；端点：`https://api.x.ai/v1`；币种：`USD`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/xai.json -->
<!-- source-config-fingerprint: 0201d4cd147c510c9bd8540ad292b29d4afffc67e42566f4bf0aee3a1f8f77a2 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `grok-4.7` | 500000 / 未声明 | USD：2 / 6 | `modelName`→[xai](#xai) | [xai](#xai) | partial | `5fd96154879e4600be87236cf9a12b2c3026dd6286d4288afcb70edd7e9e6661` |
| `grok-4.3` | 1000000 / 未声明 | USD：1.25 / 2.5 | 待核实 | [xai](#xai) | pending | `bd07b22c70b23607ba3a86737f6ae7b54ea1ca53949ddbb693724bfad1d627d9` |
| `grok-build-0.1` | 256000 / 未声明 | USD：1 / 2 | `modelName`→[xai](#xai) | [xai](#xai) | partial | `3a28f38bc86c8f91091c92e616466f353a21fa64dd088e60ce2261ea9011f75c` |
| `grok-4.20-0309-reasoning` | 1000000 / 16384 | USD：1.25 / 2.5 | 待核实 | [xai](#xai) | pending | `851263210eebad330fe7ca416787515facad734fb78327e18e7bda7c343b209e` |

### compute/model-specs/xai.json

<!-- source-config: compute/model-specs/xai.json -->
<!-- source-config-fingerprint: ab649074aabf20358bd272f5701af07c36aa7cd7e029f54b1e287f2926234628 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `grok-4.7` | 500000 / 未声明 | 非计价主数据 | `id`→[xai](#xai) | [xai](#xai) | partial | `a5d32750e0ae4157df10b5e495e002d64ceff291f57d2972421249942f8d3606` |
| `grok-4.5` | 500000 / 450000 | 非计价主数据 | 待核实 | [xai](#xai) | pending | `3ce065e502bf8d1e6297adee096f6b4a7111ec0a0044f7e0184c0956528735a4` |
| `grok-4-3` | 1000000 / 未声明 | 非计价主数据 | 待核实 | [xai](#xai) | pending | `3a98611d4bdf605df812b42990f46e24f033ba5a671a0920011feb103954fffe` |
| `grok-4-1-fast-reasoning` | 2000000 / 16384 | 非计价主数据 | 待核实 | [xai](#xai) | pending | `3f57f33f10d210e6c29e8ed64ef741e9ff5d7b4eb5793ed3636c7cf0dd9b64ef` |
| `grok-4.20-0309-reasoning` | 2000000 / 16384 | 非计价主数据 | 待核实 | [xai](#xai) | pending | `f08001fea5c3b53121767acc43c4563df1abac7cb4320affc28ec6e2806d9d28` |

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
  "supplier": "xai",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "xai",
      "url": "https://docs.x.ai/developers/release-notes",
      "kind": "official-doc",
      "scope": "xai 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "15620ca6445ab3d08a0bfb7e42ea5ade12bac808ef11df763a99cd865ae6c7ae",
      "resolvedUrl": "https://docs.x.ai/developers/release-notes"
    }
  ]
}
```
<!-- source-metadata:end -->
