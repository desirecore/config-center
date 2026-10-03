# gemini-embedding-2：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gemini-embedding-2`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/google.json](../access/providers--google.md)
- [compute/model-specs/google.json](../access/model-specs--google.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/google.json

[查看配置](../../../../../compute/providers/google.json) · [接入面说明](../access/providers--google.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/google.json","id":"gemini-embedding-2"} -->
```json
{
  "contextWindow": 8192,
  "serviceType": [
    "embedding"
  ],
  "capabilities": [
    "text_embedding",
    "vision",
    "audio_understanding",
    "video_understanding",
    "multilingual"
  ],
  "extra.dimensions": [
    768,
    1536,
    3072
  ],
  "extra.defaultDimension": 3072
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-embedding-2` | 8192 / 未声明 | USD：未声明 / 未声明 | `contextWindow`→[google-embedding](../SOURCES.md#google-embedding), `extra.defaultDimension`→[google-embedding](../SOURCES.md#google-embedding), `extra.dimensions`→[google-embedding](../SOURCES.md#google-embedding) | [google-embedding](../SOURCES.md#google-embedding), [google-models](../SOURCES.md#google-models) | partial | `e9032f9d57889c940e2e02238034a7667e318cd82df48b6abf06195131402c06` |

### compute/model-specs/google.json

[查看配置](../../../../../compute/model-specs/google.json) · [接入面说明](../access/model-specs--google.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/google.json","id":"gemini-embedding-2"} -->
```json
{
  "spec.contextWindow": 8192,
  "spec.serviceType": [
    "embedding"
  ],
  "spec.capabilities": [
    "text_embedding",
    "vision",
    "audio_understanding",
    "video_understanding",
    "multilingual"
  ],
  "spec.extra.dimensions": [
    768,
    1536,
    3072
  ],
  "spec.extra.defaultDimension": 3072
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/google.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gemini-embedding-2` | 8192 / 未声明 | 非计价主数据 | `spec.contextWindow`→[google-embedding](../SOURCES.md#google-embedding), `spec.extra.defaultDimension`→[google-embedding](../SOURCES.md#google-embedding), `spec.extra.dimensions`→[google-embedding](../SOURCES.md#google-embedding) | [google-embedding](../SOURCES.md#google-embedding), [google-models](../SOURCES.md#google-models) | partial | `81a58be67897733f466b9305241a810e3ffa43f7078d0e0beb77a83b03f03819` |

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
