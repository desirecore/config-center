# north-small-translate-1-0：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`north-small-translate-1-0`。
- 核验日期：2026-10-03；本轮实读原厂型号表与独立说明，规范精确身份；其余未核参数保持边界。

## 适用接入面

- [compute/model-specs/cohere.json](../access/model-specs--cohere.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/model-specs/cohere.json

[查看配置](../../../../../compute/model-specs/cohere.json) · [接入面说明](../access/model-specs--cohere.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/cohere.json","id":"north-small-translate-1-0"} -->
```json
{
  "spec.serviceType": [
    "chat"
  ],
  "spec.capabilities": [
    "chat",
    "multilingual"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/cohere.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `north-small-translate-1-0` | 未声明 / 未声明 | 非计价主数据 | `id`→[cohere-models](../SOURCES.md#cohere-models)；`id`→[north-translate-doc](../SOURCES.md#north-translate-doc) | [cohere-models](../SOURCES.md#cohere-models)；[north-translate-doc](../SOURCES.md#north-translate-doc) | partial | `a3ca2ed7f61b7cabca2e413574994827a8e9c515d25d1e40740e0a077e2e76b5` |

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
  "supplier": "cohere",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->


## 本轮身份核验与规格边界

原厂型号表及独立页面Python示例model="north-small-translate-1-0"一致。官网窗口与最大输出均写16k，未取得明文整数，本轮不补猜测值。仅共享规格登记，不上架任何Provider；原生Chat合同、授权账号、价格、采样与reasoning仍需独立核验。
