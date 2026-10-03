# 供应商名称：模型数据来源

核验轮次：YYYY-MM-DD。访问日期与模型发布时间分开记录。

## 对应配置

- [provider.json](../../compute/providers/provider.json)

## 官网证据

### official-models

- 入口：[官方模型文档](https://example.com/docs/models)
- 类型：`official-doc`；地域、API/订阅/套餐：填写实际适用范围。
- 读取结果：`fetched`、`shell` 或 `unreadable`；失败时明确说明，不编造参数。

## 核验结论与边界

写明逐字段发现、单位解释、接入面差异和仍待核实的问题。

## 当前配置与字段级核验

<!-- source-config: compute/providers/provider.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `model-id` | 未声明 / 未声明 | USD：未声明 / 未声明 | 待核实 | [official-models](#official-models) | pending | `替换为完整模型对象的 SHA-256` |

## 待核实项与更新步骤

1. 从官网正文验证模型、端点、单位与套餐支持。
2. 同步 canonical JSON 和本页受影响的行。
3. 运行来源校验、配置校验和回归测试。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "替换为已登记的供应商 ID",
  "checkedAt": "YYYY-MM-DD",
  "sources": [
    {
      "id": "official-models",
      "url": "https://example.com/docs/models",
      "kind": "official-doc",
      "scope": "填写地域、端点和适用接入面",
      "retrieval": "unreadable",
      "checkedAt": "YYYY-MM-DD",
      "contentSha256": null
    }
  ]
}
```
<!-- source-metadata:end -->

此模板不参与校验。正式页面放入 `providers/<supplier-id>.md`；新域名需先核实归属，再登记到 `scripts/validate-sources.mjs`。
