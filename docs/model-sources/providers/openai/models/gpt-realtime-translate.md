# gpt-realtime-translate：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gpt-realtime-translate`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/openai.json](../access/providers--openai.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/openai.json

[查看配置](../../../../../compute/providers/openai.json) · [接入面说明](../access/providers--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openai.json","id":"gpt-realtime-translate"} -->
```json
{
  "contextWindow": 16000,
  "maxOutputTokens": 2000,
  "serviceType": [
    "simultaneous_interpret",
    "translation"
  ],
  "capabilities": [
    "translation",
    "simultaneous_interpretation",
    "asr",
    "realtime"
  ],
  "extra.pricingNotes": "OpenAI lists this model at $0.034 per minute."
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-realtime-translate` | 16000 / 2000 | USD：未声明 / 未声明 | `modelName`→[openai-models](../SOURCES.md#openai-models) | [openai-models](../SOURCES.md#openai-models) | partial | `8509625abb490c7d5a8e62d116d878f319e49d4ef5b4cc57602c8df52d9ccb1a` |

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
  "supplier": "openai",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->

## compute/model-specs/openai.json：精确绑定

官方规格页本轮核实窗口与输出；未扩大自动路由资格。

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"gpt-realtime-translate"} -->
```json
{
  "spec.contextWindow": 16000,
  "spec.maxOutputTokens": 2000,
  "spec.description": "官方精确型号与窗口/输出已核；独立实时协议适配与账号验收由接入面决定，不继承通用Chat合同。"
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-realtime-translate` | 16000 / 2000 | 非计价主数据 | `id`→[realtimetranslate-spec](../SOURCES.md#realtimetranslate-spec)；`spec.contextWindow`→[realtimetranslate-spec](../SOURCES.md#realtimetranslate-spec)；`spec.maxOutputTokens`→[realtimetranslate-spec](../SOURCES.md#realtimetranslate-spec) | [realtimetranslate-spec](../SOURCES.md#realtimetranslate-spec) | partial | `e08efc78bf3d8f98e7a16988a3beb7f7a343c0f3e61da7bcc06914809750cd03` |
