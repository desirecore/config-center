# model-id：模型来源与接入记录

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 精确 ID：`model-id`；核验日期：YYYY-MM-DD。

## 对应接入面

- [接入面说明](../access/providers--provider.md)

## 字段级来源记录

<!-- source-details: {"config":"compute/providers/provider.json","id":"model-id"} -->
```json
{"contextWindow": 1000}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/provider.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `model-id` | 1000 / 未声明 | USD：未声明 / 未声明 | 待核实 | [official-models](../SOURCES.md#official-models) | pending | `替换为模型 SHA-256` |

## 待核实与更新核查

记录身份/版本、限制、推理/采样、模态/工具、计价与可用性；只核实真正核对的字段。

<!-- source-metadata:start -->
```json
{"formatVersion":1,"supplier":"填写供应商","checkedAt":"YYYY-MM-DD","sourceCatalog":"../SOURCES.md"}
```
<!-- source-metadata:end -->
