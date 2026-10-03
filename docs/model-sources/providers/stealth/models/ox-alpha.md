# ox-alpha：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`ox-alpha`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/model-specs/stealth.json](../access/model-specs--stealth.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/model-specs/stealth.json

[查看配置](../../../../../compute/model-specs/stealth.json) · [接入面说明](../access/model-specs--stealth.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/stealth.json","id":"ox-alpha"} -->
```json
{
  "spec.contextWindow": 1048576,
  "spec.maxOutputTokens": 131072,
  "spec.serviceType": [
    "chat",
    "reasoning",
    "vision"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "deep_thinking",
    "code",
    "tool_use",
    "agent",
    "long_context",
    "vision",
    "image_understanding",
    "video_understanding"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1,
  "spec.defaultTopP": 0.95,
  "spec.releasedAt": "2026-08-21",
  "spec.extra.thinkingOnly": true
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/stealth.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `ox-alpha` | 1048576 / 131072 | 非计价主数据 | 待核实 | [openrouter-api](../SOURCES.md#openrouter-api) | historical | `cc076eea8258b8eea4572086dea9e4d07b41cdc63fcbc729ceeb324dc7c6f32a` |

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
  "supplier": "stealth",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->

## 历史身份边界

移除未取得本轮原厂正文证据的 modelOrigin 映射，展示名改为 Ox Alpha (Historical)。历史 exact 匹配与旧规格继续保留，状态仍为 historical；未声明当前可用性或将它自动等同于 GLM-5.3-Flash。
