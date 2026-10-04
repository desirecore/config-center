# gpt-5.4-nano：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`gpt-5.4-nano`。
- 核验日期：2026-10-03；本轮增量核验下列字段；未列字段及其他接入面的状态保持独立。

## 适用接入面

- [compute/providers/openai.json](../access/providers--openai.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/openai.json

[查看配置](../../../../../compute/providers/openai.json) · [接入面说明](../access/providers--openai.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/openai.json","id":"gpt-5.4-nano"} -->
```json
{
  "contextWindow": 400000,
  "maxOutputTokens": 128000,
  "serviceType": [
    "fast",
    "responses"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "fast",
    "long_context",
    "tool_use"
  ],
  "inputPrice": 0.2,
  "outputPrice": 1.25,
  "extra.cachedInputPrice": 0.02,
  "extra.reasoning": {
    "supportedEfforts": [
      "none",
      "low",
      "medium",
      "high",
      "xhigh"
    ]
  }
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-5.4-nano` | 400000 / 128000 | USD：0.2 / 1.25 | `modelName`→[gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api)；`contextWindow`→[gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api)；`maxOutputTokens`→[gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api)；`inputPrice`→[gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api)；`outputPrice`→[gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api)；`extra.reasoning.supportedEfforts`→[gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api)；`extra.cachedInputPrice`→[gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api) | [gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api), [openai-gpt-5-4-nano-tools](../SOURCES.md#openai-gpt-5-4-nano-tools) | partial | `821b813acdd4c3ab2a7d8ba25980dd7123d9735e25ac1de4cd9a7f7026197465` |

- 2026-10-05 工具调用核对：`capabilities` 增加 `tool_use`。官网型号页 Supported features 列有 function_calling，Chat Completions 与 Responses 端点均为 Supported。依据：[openai-gpt-5-4-nano-tools](../SOURCES.md#openai-gpt-5-4-nano-tools)。本次只核对工具调用一项，其余标签仍是本仓产品标签，核验状态不变。

本轮读取该模型官方明文规格页，确认原厂直连窗口、输出、标准价格与推理合同。Pro 仅限 Responses；GPT-5.4 Pro 官方默认 medium，修正旧 high。none 在产品层映射 off，schema 不接受将 none 写成 defaultEffort，故未伪造其他显式默认档。

共享规格只复核内在窗口和输出；Provider 推理矩阵不复制到共享规格。

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

<!-- source-details: {"config":"compute/model-specs/openai.json","id":"gpt-5.4-nano"} -->
```json
{
  "spec.contextWindow": 400000,
  "spec.maxOutputTokens": 128000,
  "spec.description": "GPT-5.4 Nano；官网确认400000总窗口、128000最大输出。2026-10-01宣布deprecated，停止服务日2027-04-01；当前不据此退役。独立输入上限未由本页确认。"
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/openai.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `gpt-5.4-nano` | 400000 / 128000 | 非计价主数据 | `id`→[gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api)；`spec.contextWindow`→[gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api)；`spec.maxOutputTokens`→[gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api) | [gpt-5-4-nano-api](../SOURCES.md#gpt-5-4-nano-api) | partial | `f0253fa24e58c6c0ca971fa1e53fb87d5d140e843f09cfdab303b92ecf5e0664` |

生命周期独立证据：[官方退役公告](../SOURCES.md#openai-deprecations)列出的停止日为2027-04-01；2026-10-01公告deprecated，不代表2026-10-03已不可调用。
