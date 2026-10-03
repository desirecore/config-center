# qwen3-coder-next：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`qwen3-coder-next`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/coding-plans/dashscope-coding.json](../access/coding-plans--dashscope-coding.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/coding-plans/dashscope-coding.json

[查看配置](../../../../../compute/coding-plans/dashscope-coding.json) · [接入面说明](../access/coding-plans--dashscope-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/dashscope-coding.json","id":"qwen3-coder-next"} -->
```json
{
  "contextWindow": 262144,
  "maxOutputTokens": 65536,
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "code",
    "tool_use"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/dashscope-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen3-coder-next` | 262144 / 65536 | 套餐：未声明 / 未声明 | `modelName`→[qwen-pricing](../SOURCES.md#qwen-pricing) | [qwen-pricing](../SOURCES.md#qwen-pricing) | partial | `19e213ea21c5e4fe6666ed2899a2006c9fe9ff61f0d05646173db8f401fb7b58` |

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

## compute/model-specs/qwen.json：精确绑定

仅登记既有接入精确身份；官网字段证据待核，不能把本记录当作完整能力合同。

<!-- source-details: {"config":"compute/model-specs/qwen.json","id":"qwen3-coder-next"} -->
```json
{
  "spec.description": "精确绑定已有接入型号，参数未核实；identity-only规格不继承旧family能力、窗口、协议或自动路由资格。"
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/qwen.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qwen3-coder-next` | 未声明 / 未声明 | 非计价主数据 | `id`→[qwen-coding](../SOURCES.md#qwen-coding) | [qwen-coding](../SOURCES.md#qwen-coding) | partial | `949ea8dd99a8c45948115ff0c61db7e27a400298c62bce1382db9cf8817eb00f` |
