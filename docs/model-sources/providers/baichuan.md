# 百川：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [baichuan.json](../../../compute/providers/baichuan.json)
- [baichuan.json](../../../compute/model-specs/baichuan.json)

## 官网证据

### baichuan

- 入口：[baichuan](https://www.baichuan-ai.com/blog/baichuan-M3)
- 类型：`official-doc`；当前读取状态：`unreadable`；地域/接入面：`baichuan 官方入口；具体地域与接入面待该页面逐字段确认`。

## 核验结论与边界

本次官网正文读取失败。保留官网入口和配置快照，所有尚未核实字段明确 pending。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/baichuan.json

接入面配置快照：`openai-completions`；端点：`https://api.baichuan-ai.com/v1`；币种：`CNY`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/baichuan.json -->
<!-- source-config-fingerprint: 99031f2bd57df78204a63535fdcd3fd7718770c3ea940c2d34cd51c1832f4a41 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `Baichuan-M3-Plus` | 32000 / 32000 | CNY：5 / 9 | 待核实 | [baichuan](#baichuan) | pending | `678710a7693a2d30d194749c60e3ea3567c75aa1e5ef0fefa1c65045d7f102e3` |
| `Baichuan-M3` | 32000 / 32000 | CNY：10 / 30 | 待核实 | [baichuan](#baichuan) | pending | `e9a46b8b942ba918475cbf86a726ed7c7903bc1b0dc01b04fd31613e73eca19a` |
| `Baichuan-M2-Plus` | 32000 / 32000 | CNY：10 / 30 | 待核实 | [baichuan](#baichuan) | pending | `42620951a14c63e42f177900a5bc6db14a96cf019f1a3b04e4fa7a905fc14bd9` |
| `Baichuan-M2` | 32000 / 32000 | CNY：2 / 20 | 待核实 | [baichuan](#baichuan) | pending | `e5741f82dc510cccc98ca9e0070c8dbe8305827205a70812ed52280279ed3756` |

### compute/model-specs/baichuan.json

<!-- source-config: compute/model-specs/baichuan.json -->
<!-- source-config-fingerprint: 0aebb6601b46c9ab5f8fefe52aa28ccf3f67d53f2ede7274d1d8e10ffc936f0b -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `Baichuan-M3-Plus` | 32000 / 32000 | 非计价主数据 | 待核实 | [baichuan](#baichuan) | pending | `4e53d9e32fa36038696eb06f01f1e264bca0336059f0149c80da5f0f5ea67207` |
| `Baichuan-M3` | 32000 / 32000 | 非计价主数据 | 待核实 | [baichuan](#baichuan) | pending | `761f21cce007a66ded84dd3e0919666afa2677f891ff08e6055963c4b8c30101` |
| `Baichuan-M2-Plus` | 32000 / 32000 | 非计价主数据 | 待核实 | [baichuan](#baichuan) | pending | `02f51d509c7d8953ebbc33f59a79900db71d8d3c7660f5da0bf4c85be60f4905` |
| `Baichuan-M2` | 32000 / 32000 | 非计价主数据 | 待核实 | [baichuan](#baichuan) | pending | `1678165ab1c7d825f9499d6b2d31afcfc61d9a9b4c141831dd5cc95a2e334a0e` |

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
  "supplier": "baichuan",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "baichuan",
      "url": "https://www.baichuan-ai.com/blog/baichuan-M3",
      "kind": "official-doc",
      "scope": "baichuan 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "unreadable",
      "checkedAt": "2026-10-03",
      "contentSha256": null,
      "resolvedUrl": null
    }
  ]
}
```
<!-- source-metadata:end -->
