# Mistral：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [mistral.json](../../../compute/providers/mistral.json)
- [mistral.json](../../../compute/model-specs/mistral.json)

## 官网证据

### mistral-models

- 入口：[mistral-models](https://docs.mistral.ai/models)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`mistral 官方入口；具体地域与接入面待该页面逐字段确认`。
### mistral-medium

- 入口：[mistral-medium](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Mistral 原厂 Medium 3.5；USD 原价，窗口 256k 是简写`。
### mistral-small

- 入口：[mistral-small](https://docs.mistral.ai/models/mistral-small-4-0-26-03)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Mistral 原厂 Small 4；USD 原价，窗口 256k 是简写`。
### mistral-large

- 入口：[mistral-large](https://docs.mistral.ai/models/mistral-large-3-25-12)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Mistral 原厂 Large 3；USD 原价，窗口 256k 是简写`。

## 核验结论与边界

官网确认 Medium 3.5、Small 4、Large 3 的名称、版本和价格；256k 是官网简写，262144 的精确换算仍列为未逐字段证明。匹配 family 已收窄，避免旧型号继承新规格；无法确认的 maxOutputTokens 不填。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/mistral.json

<!-- source-config: compute/providers/mistral.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `mistral-medium-3-5` | 262144 / 未声明 | USD：1.5 / 7.5 | `inputPrice`→[mistral-medium](#mistral-medium), `modelName`→[mistral-medium](#mistral-medium), `outputPrice`→[mistral-medium](#mistral-medium) | [mistral-medium](#mistral-medium) | partial | `9b84f243524c7cdeada4ce5c7ad557bd74b0d96329b33759c08cde29b39bffff` |
| `mistral-medium-latest` | 262144 / 未声明 | USD：1.5 / 7.5 | `inputPrice`→[mistral-medium](#mistral-medium), `outputPrice`→[mistral-medium](#mistral-medium) | [mistral-medium](#mistral-medium) | partial | `d43303bd80e02f6aa26dba0301f618350a408f576de4fc887b3a9e645dac2f3e` |
| `mistral-large-latest` | 256000 / 未声明 | USD：0.5 / 1.5 | `inputPrice`→[mistral-large](#mistral-large), `outputPrice`→[mistral-large](#mistral-large) | [mistral-large](#mistral-large) | partial | `91e199925e391a548a231121e9409dc659027766ea39b538cdc13d9fb5efc5d4` |
| `mistral-small-latest` | 262144 / 未声明 | USD：0.15 / 0.6 | `inputPrice`→[mistral-small](#mistral-small), `outputPrice`→[mistral-small](#mistral-small) | [mistral-small](#mistral-small) | partial | `7393dbface88f2896a09fc787e50fead62e4ce9a1b2cf9854d9f5c75b07dbd84` |
| `codestral-latest` | 128000 / 32768 | USD：0.3 / 0.9 | 待核实 | [mistral-models](#mistral-models) | pending | `397855b8de5225ea00ee1e7d78c003525a1be8c8116893637342c7a819ed3f69` |

### compute/model-specs/mistral.json

<!-- source-config: compute/model-specs/mistral.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `mistral-medium-3.5` | 262144 / 未声明 | 非计价主数据 | 待核实 | [mistral-models](#mistral-models) | pending | `58214f7ba5abcf3bb6b03ae17dc601268048ca832999d2ea58167ff27b0dfcfb` |
| `mistral-large-latest` | 256000 / 未声明 | 非计价主数据 | 待核实 | [mistral-models](#mistral-models) | pending | `d6c0702472de17f66f49109510b3ec5fdc3da291252c3c20bf8b02c7a72ecaeb` |
| `mistral-small-latest` | 262144 / 未声明 | 非计价主数据 | 待核实 | [mistral-models](#mistral-models) | pending | `e8b00c523efc0bb3e7eebc7443fd41e204c37479bc6854fdf93bfd81a21184de` |
| `codestral-latest` | 128000 / 32768 | 非计价主数据 | 待核实 | [mistral-models](#mistral-models) | pending | `87bf44866d236d56f4982f922c0825c3a0c7e179e2ee90daf2d008c3b0c74af1` |

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
  "supplier": "mistral",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "mistral-models",
      "url": "https://docs.mistral.ai/models",
      "kind": "official-doc",
      "scope": "mistral 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "df08b65bf8c3f26c8c1de0c194b0c82e77b7aa58af7428779fdbe8db33534deb",
      "resolvedUrl": "https://docs.mistral.ai/models"
    },
    {
      "id": "mistral-medium",
      "url": "https://docs.mistral.ai/models/mistral-medium-3-5-26-04",
      "kind": "official-doc",
      "scope": "Mistral 原厂 Medium 3.5；USD 原价，窗口 256k 是简写",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "e9ecf8fd0ceb99e755e164bed57be8b91cea7a544504b0f62bfeea0b1f41df07",
      "resolvedUrl": "https://docs.mistral.ai/models/mistral-medium-3-5-26-04"
    },
    {
      "id": "mistral-small",
      "url": "https://docs.mistral.ai/models/mistral-small-4-0-26-03",
      "kind": "official-doc",
      "scope": "Mistral 原厂 Small 4；USD 原价，窗口 256k 是简写",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "63ae9e27aaeab6923ef30f53daa7d623c97d6d903a90f028e26fe00cd7f83112",
      "resolvedUrl": "https://docs.mistral.ai/models/mistral-small-4-0-26-03"
    },
    {
      "id": "mistral-large",
      "url": "https://docs.mistral.ai/models/mistral-large-3-25-12",
      "kind": "official-doc",
      "scope": "Mistral 原厂 Large 3；USD 原价，窗口 256k 是简写",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "34293e7a12d40b4f1c8e31d7c9bd8cbb4f59c4b0db978728d332f1c1749b09e3",
      "resolvedUrl": "https://docs.mistral.ai/models/mistral-large-3-25-12"
    }
  ]
}
```
<!-- source-metadata:end -->
