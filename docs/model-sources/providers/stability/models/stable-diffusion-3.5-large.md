# stable-diffusion-3.5-large：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`stable-diffusion-3.5-large`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/stability.json](../access/providers--stability.md)
- [compute/model-specs/stability.json](../access/model-specs--stability.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/stability.json

[查看配置](../../../../../compute/providers/stability.json) · [接入面说明](../access/providers--stability.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/stability.json","id":"stable-diffusion-3.5-large"} -->
```json
{
  "serviceType": [
    "image_gen"
  ],
  "capabilities": [
    "image_generation",
    "high_quality",
    "controllable"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/stability.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `stable-diffusion-3.5-large` | 未声明 / 未声明 | USD：未声明 / 未声明 | 待核实 | [stability](../SOURCES.md#stability) | pending | `64524c4615b4fdf9b332e192d5875cde2ee001b5a39dba98d682c5e8a6256f4d` |

### compute/model-specs/stability.json

[查看配置](../../../../../compute/model-specs/stability.json) · [接入面说明](../access/model-specs--stability.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/stability.json","id":"stable-diffusion-3.5-large"} -->
```json
{
  "spec.serviceType": [
    "image_gen"
  ],
  "spec.capabilities": [
    "image_generation",
    "high_quality",
    "controllable"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/stability.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `stable-diffusion-3.5-large` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [stability](../SOURCES.md#stability) | pending | `e857add69197a81d9040870d29452276d33dbbf2c469b1f71e27d12b28aa7f91` |

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
  "supplier": "stability",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
