# tc-code-latest：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`tc-code-latest`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/coding-plans/tencent-token.json](../access/coding-plans--tencent-token.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/coding-plans/tencent-token.json

[查看配置](../../../../../compute/coding-plans/tencent-token.json) · [接入面说明](../access/coding-plans--tencent-token.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/tencent-token.json","id":"tc-code-latest"} -->
```json
{
  "serviceType": [
    "chat"
  ],
  "capabilities": [
    "chat",
    "reasoning",
    "code",
    "tool_use"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/tencent-token.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `tc-code-latest` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [tencent](../SOURCES.md#tencent), [tencent-token-plan-doc](../SOURCES.md#tencent-token-plan-doc), [tokenhub-model-list](../SOURCES.md#tokenhub-model-list) | pending | `2d1b66426d85dad1936fac50182749e2858aa17d2d7acbb371ebe16ff6e8ce4f` |

- 2026-10-05 工具调用核对：`capabilities` 增加 `tool_use`。Token Plan 文档把 tc-code-latest 列为 Auto 智能路由的 Model ID，套餐适配 Claude Code、OpenCode 等编程工具；TokenHub 模型列表里套餐当前可用型号的能力支持均含 Function Calling。别名本身没有单独的能力表，依据是套餐文档。依据：[tencent-token-plan-doc](../SOURCES.md#tencent-token-plan-doc)、[tokenhub-model-list](../SOURCES.md#tokenhub-model-list)。本次只核对工具调用一项，其余标签仍是本仓产品标签，核验状态不变。

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
  "supplier": "tencent",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
