# MiniMax-Hailuo-2.3：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`MiniMax-Hailuo-2.3`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/minimax.json](../access/providers--minimax.md)
- [compute/coding-plans/minimax-coding.json](../access/coding-plans--minimax-coding.md)
- [compute/model-specs/minimax.json](../access/model-specs--minimax.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/minimax.json

[查看配置](../../../../../compute/providers/minimax.json) · [接入面说明](../access/providers--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/minimax.json","id":"MiniMax-Hailuo-2.3"} -->
```json
{
  "serviceType": [
    "video_gen"
  ],
  "capabilities": [
    "video_generation",
    "text_to_video",
    "image_to_video",
    "camera_control",
    "chinese_optimized",
    "high_quality"
  ],
  "extra.maxVideoDuration": 10,
  "extra.supportedResolutions": [
    "768p",
    "1080p"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-Hailuo-2.3` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-hailuo](../SOURCES.md#minimax-hailuo) | [minimax-hailuo](../SOURCES.md#minimax-hailuo) | partial | `1d1c5bc34172b924fd749fe4b84bbd3591ed4594332d482d791f349a761cdcd9` |

### compute/coding-plans/minimax-coding.json

[查看配置](../../../../../compute/coding-plans/minimax-coding.json) · [接入面说明](../access/coding-plans--minimax-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/minimax-coding.json","id":"MiniMax-Hailuo-2.3"} -->
```json
{
  "serviceType": [
    "video_gen"
  ],
  "capabilities": [
    "video_generation",
    "text_to_video",
    "image_to_video",
    "camera_control"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/minimax-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-Hailuo-2.3` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[minimax-hailuo](../SOURCES.md#minimax-hailuo) | [minimax-hailuo](../SOURCES.md#minimax-hailuo) | partial | `67e9631b20839098e8d124a37e9defdaea080b0b9c447aa146d340892485f958` |

### compute/model-specs/minimax.json

[查看配置](../../../../../compute/model-specs/minimax.json) · [接入面说明](../access/model-specs--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/minimax.json","id":"MiniMax-Hailuo-2.3"} -->
```json
{
  "spec.serviceType": [
    "video_gen"
  ],
  "spec.capabilities": [
    "video_generation",
    "text_to_video",
    "image_to_video",
    "camera_control",
    "chinese_optimized",
    "high_quality"
  ],
  "routing.tier": "balanced",
  "routing.routingPriority": 102,
  "routing.eligibleForAgent": false,
  "routing.reasoning": {
    "supportedModes": [
      "auto"
    ],
    "defaultMode": "auto"
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-Hailuo-2.3` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-hailuo](../SOURCES.md#minimax-hailuo) | [minimax-hailuo](../SOURCES.md#minimax-hailuo) | partial | `496d4d43fc6907da077d142f30cf22a94f779010ecaa44f61608362f25ac3a89` |

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
  "supplier": "minimax",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
