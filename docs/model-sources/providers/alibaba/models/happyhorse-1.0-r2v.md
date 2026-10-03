# happyhorse-1.0-r2v：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`happyhorse-1.0-r2v`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/dashscope.json](../access/providers--dashscope.md)
- [compute/model-specs/happyhorse.json](../access/model-specs--happyhorse.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/dashscope.json

[查看配置](../../../../../compute/providers/dashscope.json) · [接入面说明](../access/providers--dashscope.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/dashscope.json","id":"happyhorse-1.0-r2v"} -->
```json
{
  "serviceType": [
    "video_gen"
  ],
  "capabilities": [
    "video_generation",
    "reference_to_video",
    "multi_image",
    "chinese_optimized"
  ],
  "extra.maxVideoDuration": 15,
  "extra.supportedResolutions": [
    "720P",
    "1080P"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/dashscope.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `happyhorse-1.0-r2v` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[qwen-pricing](../SOURCES.md#qwen-pricing) | [qwen-pricing](../SOURCES.md#qwen-pricing) | partial | `00ff8ca6b5125589da14d3cd694fe1bb756b814421bd9f726312361401a6e2b2` |

### compute/model-specs/happyhorse.json

[查看配置](../../../../../compute/model-specs/happyhorse.json) · [接入面说明](../access/model-specs--happyhorse.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/happyhorse.json","id":"happyhorse-1.0-r2v"} -->
```json
{
  "spec.serviceType": [
    "video_gen"
  ],
  "spec.capabilities": [
    "video_generation",
    "reference_to_video",
    "multi_image"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/happyhorse.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `happyhorse-1.0-r2v` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-pricing](../SOURCES.md#qwen-pricing) | [qwen-pricing](../SOURCES.md#qwen-pricing) | partial | `f0aeb07b3b2210010e50678d64487682ed0967825b1ab5e42d6a2a8c90645d82` |

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
  "supplier": "alibaba",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
