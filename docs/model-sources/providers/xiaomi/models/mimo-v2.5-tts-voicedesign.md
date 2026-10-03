# mimo-v2.5-tts-voicedesign：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`mimo-v2.5-tts-voicedesign`。
- 核验日期：2026-10-03；本轮重新读取官网，逐接入面只确认下表列出的字段；其余仍待核实。

## 适用接入面

- [compute/providers/xiaomi.json](../access/providers--xiaomi.md)
- [compute/model-specs/xiaomi.json](../access/model-specs--xiaomi.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/xiaomi.json

[查看配置](../../../../../compute/providers/xiaomi.json) · [接入面说明](../access/providers--xiaomi.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/xiaomi.json","id":"mimo-v2.5-tts-voicedesign"} -->
```json
{
  "serviceType": [
    "tts"
  ],
  "capabilities": [
    "tts",
    "voice_design"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/xiaomi.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `mimo-v2.5-tts-voicedesign` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[xiaomi-models](../SOURCES.md#xiaomi-models) | [xiaomi-models](../SOURCES.md#xiaomi-models) | partial | `e32315265f593c73fcd7704fa0a650e6c9bbc007337f4f69d98ddff014fea637` |

### compute/model-specs/xiaomi.json

[查看配置](../../../../../compute/model-specs/xiaomi.json) · [接入面说明](../access/model-specs--xiaomi.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/xiaomi.json","id":"mimo-v2.5-tts-voicedesign"} -->
```json
{
  "spec.contextWindow": 8192,
  "spec.serviceType": [
    "tts"
  ],
  "spec.capabilities": [
    "tts",
    "voice_design",
    "multilingual"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/xiaomi.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `mimo-v2.5-tts-voicedesign` | 8192 / 未声明 | 非计价主数据 | `id`→[xiaomi-models](../SOURCES.md#xiaomi-models) | [xiaomi-models](../SOURCES.md#xiaomi-models) | partial | `fb40eb73c466a68996ce72297a8f213ec0a002fedab07c48c8511fcc49c02f4b` |

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
  "supplier": "xiaomi",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
