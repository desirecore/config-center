# 匿名模型历史兼容：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [stealth.json](../../../compute/model-specs/stealth.json)

## 官网证据

### openrouter-api

- 入口：[openrouter-api](https://openrouter.ai/api/v1/models)
- 类型：`official-api`；当前读取状态：`fetched`；地域/接入面：`OpenRouter 公共 Models API 快照；USD/token 换算为 USD/百万 token`。
### glm53-flash

- 入口：[glm53-flash](https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`智谱原厂 Flash/FlashX 参数及中国区套餐限制`。

## 核验结论与边界

本页仅记录历史兼容规格。当前 OpenRouter 官网 API 已不列出 Ox Alpha；历史别名来源及揭晓关系未获得本次可读官网材料确认。共享规格保留供其他网关兼容，不把它当当前官方平台可用性证明。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/model-specs/stealth.json

<!-- source-config: compute/model-specs/stealth.json -->
<!-- source-config-fingerprint: 6598d8a86005f10e6d88c60c5b5dd09357539b051b2297adbe8b7849423d1998 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `ox-alpha` | 1048576 / 131072 | 非计价主数据 | 待核实 | [openrouter-api](#openrouter-api) | historical | `1d20e9cc8d59f956ab8fe266f8aaaf5eedf6297c3487c6fd6f85e03e7bb7b560` |

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
  "supplier": "stealth",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "openrouter-api",
      "url": "https://openrouter.ai/api/v1/models",
      "kind": "official-api",
      "scope": "OpenRouter 公共 Models API 快照；USD/token 换算为 USD/百万 token",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "38864160760c394d4d81864581a33adbced3c582fdd8732809f90ec7e911f032",
      "resolvedUrl": "https://openrouter.ai/api/v1/models"
    },
    {
      "id": "glm53-flash",
      "url": "https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash.md",
      "kind": "official-doc",
      "scope": "智谱原厂 Flash/FlashX 参数及中国区套餐限制",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "d9e2d56363f9e04e18c5bb60756edffaf565d2ccb28c420552da2ead3eecef9c",
      "resolvedUrl": "https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash.md"
    }
  ]
}
```
<!-- source-metadata:end -->
