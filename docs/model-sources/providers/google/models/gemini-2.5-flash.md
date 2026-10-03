# gemini-2.5-flash：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gemini-2.5-flash`。
- 核验日期：2026-10-03；本轮增量复核仅覆盖明确列出的字段，其余接入面和参数保持各自状态。

## 适用接入面

- [compute/providers/google.json](../access/providers--google.md)
- [compute/model-specs/google.json](../access/model-specs--google.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/google.json

[查看配置](../../../../../compute/providers/google.json) · [接入面说明](../access/providers--google.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/google.json","id":"gemini-2.5-flash"} -->
```json
{
  "contextWindow": 1048576,
  "maxOutputTokens": 65536,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "ultra_long_context",
    "tool_use",
    "fast"
  ],
  "defaultTemperature": 1,
  "defaultTopP": 0.95,
  "inputPrice": 0.3,
  "outputPrice": 2.5
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-2.5-flash` | 1048576 / 65536 | USD：0.3 / 2.5 | `modelName`→[google-models](../SOURCES.md#google-models)；`maxOutputTokens`→[gemini-2-5-flash-limits](../SOURCES.md#gemini-2-5-flash-limits) |[google-models](../SOURCES.md#google-models)；[gemini-2-5-flash-limits](../SOURCES.md#gemini-2-5-flash-limits) | partial | `0d86d9b041dfb7e5480c6d27fdcdfbbf5bd57273af980a83eb794b389750861a` |

### compute/model-specs/google.json

[查看配置](../../../../../compute/model-specs/google.json) · [接入面说明](../access/model-specs--google.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/google.json","id":"gemini-2.5-flash"} -->
```json
{
  "spec.contextWindow": 1048576,
  "spec.maxOutputTokens": 65536,
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "reasoning",
    "code",
    "vision",
    "ultra_long_context",
    "tool_use",
    "fast"
  ],
  "spec.supportsReasoning": true,
  "spec.defaultTemperature": 1
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-2.5-flash` | 1048576 / 65536 | 非计价主数据 | `id`→[google-models](../SOURCES.md#google-models)；`spec.maxOutputTokens`→[gemini-2-5-flash-limits](../SOURCES.md#gemini-2-5-flash-limits) |[google-models](../SOURCES.md#google-models)；[gemini-2-5-flash-limits](../SOURCES.md#gemini-2-5-flash-limits) | partial | `a1284981557da3f541a483a6f9e043878a70206720163aaa03e2e3e5e43ac5f0` |

## 本轮补充核验

实际读取该模型页：Input token limit 1048576、Output token limit 65536。仅将输出字段标为已核；contextWindow 是既有窗口配置，本轮不将 input limit 误当 input+output 总窗口证明。价格、effort、采样与账号权限仍独立待核。

## 本轮补充核验

实际读取该模型页：Input token limit 1048576、Output token limit 65536。仅将输出字段标为已核；contextWindow 是既有窗口配置，本轮不将 input limit 误当 input+output 总窗口证明。价格、effort、采样与账号权限仍独立待核。

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
  "supplier": "google",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
