# Ollama：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [ollama.json](../../../compute/providers/ollama.json)

## 官网证据

### ollama

- 入口：[ollama](https://ollama.com/blog)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`ollama 官方入口；具体地域与接入面待该页面逐字段确认`。

## 核验结论与边界

本地模型是否安装由本机发现接口决定。官网产品动态只证明运行器更新，不能证明用户已安装新模型。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/ollama.json

接入面配置快照：`openai-completions`；端点：`http://localhost:11434/v1`；币种：`USD`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/ollama.json -->
<!-- source-config-fingerprint: efe53cdea1b4c410bf786ba9ffecc44617235b728bf6ded78c2097e01bf2dc77 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `llama3.1:70b` | 131072 / 8192 | USD：未声明 / 未声明 | 待核实 | [ollama](#ollama) | pending | `b66be25716689873b6ebbcd6863348791aa98452e41311478849a0c1e659c918` |

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
  "supplier": "ollama",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "ollama",
      "url": "https://ollama.com/blog",
      "kind": "official-doc",
      "scope": "ollama 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "13d9d182a6ebedb79ceb57181c1471ee809cfd38b43cdc3accc783df9e70023e",
      "resolvedUrl": "https://ollama.com/blog"
    }
  ]
}
```
<!-- source-metadata:end -->
