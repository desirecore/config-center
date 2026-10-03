# kling-v2：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`kling-v2`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/kling.json](../access/providers--kling.md)
- [compute/model-specs/kling.json](../access/model-specs--kling.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/kling.json

[查看配置](../../../../../compute/providers/kling.json) · [接入面说明](../access/providers--kling.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/kling.json","id":"kling-v2"} -->
```json
{
  "serviceType": [
    "video_gen"
  ],
  "capabilities": [
    "video_generation",
    "chinese_optimized",
    "high_quality"
  ],
  "extra.maxVideoDuration": 10,
  "extra.supportedResolutions": [
    "720p",
    "1080p"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/kling.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kling-v2` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [kling](../SOURCES.md#kling) | pending | `dbc92387f15cd1a865ffdc992c74e170a5091de49a77f64d71d8289cdf3f6f8c` |

### compute/model-specs/kling.json

[查看配置](../../../../../compute/model-specs/kling.json) · [接入面说明](../access/model-specs--kling.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/kling.json","id":"kling-v2"} -->
```json
{
  "spec.serviceType": [
    "video_gen"
  ],
  "spec.capabilities": [
    "video_generation",
    "chinese_optimized",
    "high_quality"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/kling.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kling-v2` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [kling](../SOURCES.md#kling) | pending | `ef33b6de441dfe9389c33f0de85489cc1e1a4582c10ffca109bab08782d4f034` |

## 下次更新核查

- 对照官网核查精确 ID／别名、是否仍列出、上下文／输入／输出限制及单位。
- 分别核查推理档位、默认值、是否可关闭思考、采样和强制工具选择限制、多模态输入／输出。
- 按本接入面核对价格、缓存、阶梯／峰谷、套餐支持；不能把其他平台参数直接复制。
- 只更新真正复核的字段与引用来源；保留其余待核实项及历史记录。
- 同步对应 canonical JSON、回归和模型指纹，再运行来源校验。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "kling",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
