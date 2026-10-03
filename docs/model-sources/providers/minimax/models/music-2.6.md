# music-2.6：模型来源与接入记录

[供应商索引](../README.md) · [官网证据目录](../SOURCES.md)

- 精确模型 ID：`music-2.6`。
- 核验日期：2026-10-03；本次只迁移记录，没有重新核验或提高状态。

## 适用接入面

- [compute/providers/minimax.json](../access/providers--minimax.md)
- [compute/coding-plans/minimax-coding.json](../access/coding-plans--minimax-coding.md)
- [compute/model-specs/minimax.json](../access/model-specs--minimax.md)

## 字段级来源记录

各接入面分开记录；价格为 inputPrice/outputPrice 快照，具体单位和限制看配置及引用官网。partial 只确认已列字段，不代表全部参数、平台可用性或账号调用已验收。

### compute/providers/minimax.json

[查看配置](../../../../../compute/providers/minimax.json) · [接入面说明](../access/providers--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/providers/minimax.json","id":"music-2.6"} -->
```json
{
  "serviceType": [
    "music_gen"
  ],
  "capabilities": [
    "music_generation",
    "lyrics_input",
    "instrumental",
    "chinese_optimized"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/providers/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `music-2.6` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[minimax-models](../SOURCES.md#minimax-models) | [minimax-models](../SOURCES.md#minimax-models) | partial | `ab3b3e0464825912b40e2096896abe71fdf080abef3b8de5682de57df7ab8401` |

### compute/coding-plans/minimax-coding.json

[查看配置](../../../../../compute/coding-plans/minimax-coding.json) · [接入面说明](../access/coding-plans--minimax-coding.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/coding-plans/minimax-coding.json","id":"music-2.6"} -->
```json
{
  "serviceType": [
    "music_gen"
  ],
  "capabilities": [
    "music_generation",
    "lyrics_input",
    "instrumental"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/coding-plans/minimax-coding.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `music-2.6` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[minimax-models](../SOURCES.md#minimax-models) | [minimax-models](../SOURCES.md#minimax-models) | partial | `33b5ee5bedb785fe1ac432125064164248cad868b97532ab9111005b20d817f8` |

### compute/model-specs/minimax.json

[查看配置](../../../../../compute/model-specs/minimax.json) · [接入面说明](../access/model-specs--minimax.md)

当前配置详情（不是全部官网确认值；routing 是本仓策略）：

<!-- source-details: {"config":"compute/model-specs/minimax.json","id":"music-2.6"} -->
```json
{
  "spec.serviceType": [
    "music_gen"
  ],
  "spec.capabilities": [
    "music_generation",
    "lyrics_input",
    "instrumental",
    "chinese_optimized"
  ]
}
```
<!-- source-details:end -->

<!-- source-config: compute/model-specs/minimax.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `music-2.6` | 未声明 / 未声明 | 非计价主数据 | `id`→[minimax-models](../SOURCES.md#minimax-models) | [minimax-models](../SOURCES.md#minimax-models) | partial | `35e96dfb6d660d5789f0c24fec304a6db7e80433abfd07a756ffea1efa83b6ea` |

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
  "supplier": "minimax",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->

## 音乐 API 生命周期边界

[官方模型目录](../SOURCES.md#minimax-models)公告：自2026-08-20起，付费音乐生成/歌词生成不向新用户开放，历史付费用户可继续使用；Music-3.0-free、Music-2.6-free、music-cover-free 停止服务。本记录保留历史付费型号，不以目录公告推断旧2.5系列仍适用于任何新账号；下次核查账号资格与型号可用性。
