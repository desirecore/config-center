# 百度千帆：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [baidu.json](../../../compute/providers/baidu.json)
- [baidu-coding.json](../../../compute/coding-plans/baidu-coding.json)
- [baidu.json](../../../compute/model-specs/baidu.json)

## 官网证据

### baidu-models

- 入口：[baidu-models](https://intl.cloud.baidu.com/en/doc/qianfan/s/7m95lyy43-intl-en)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`baidu 官方入口；具体地域与接入面待该页面逐字段确认`。
### baidu-plan

- 入口：[baidu-plan](https://cloud.baidu.com/doc/qianfan/s/imlg0beiu)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`baidu 官方入口；具体地域与接入面待该页面逐字段确认`。

## 核验结论与边界

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/baidu.json

接入面配置快照：`openai-completions`；端点：`https://qianfan.baidubce.com/v2`；币种：`CNY`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/baidu.json -->
<!-- source-config-fingerprint: b72869de848e1fe3dfebd68468e2c1305501298a6343b9a7ee28267c859ebd78 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `ernie-5.0-thinking-latest` | 128000 / 65536 | CNY：6 / 24 | 待核实 | [baidu-models](#baidu-models) | pending | `772caf56fd25db3e28e2a97591abec471a04094d38ff1657162ac87d6d9cca80` |
| `ernie-5.0` | 131072 / 65536 | CNY：6 / 24 | `modelName`→[baidu-models](#baidu-models) | [baidu-models](#baidu-models) | partial | `1c88288558476321762b797d67a7beffc1d8f622b392df20db1ba5a2c52dd513` |
| `ernie-4.5-turbo-128k` | 131072 / 12288 | CNY：0.8 / 3.2 | `modelName`→[baidu-models](#baidu-models) | [baidu-models](#baidu-models) | partial | `ead70732bf8c624608d49b77cb8f487cff6db8c55b86d037ff1ea254934ff458` |
| `ernie-4.5-turbo-20260402` | 131072 / 12288 | CNY：0.8 / 3.2 | `modelName`→[baidu-plan](#baidu-plan) | [baidu-plan](#baidu-plan) | partial | `ecaf8fa1f2121c25a95999bdf4a9b513561a6a993e4a96b73b6cf3b49096a592` |
| `ernie-x1.1` | 65536 / 65536 | CNY：1 / 4 | 待核实 | [baidu-models](#baidu-models) | pending | `39b6c69eacc5049a131c2b42bf54bc430531aac8dad426d88df12339cdff3e9e` |

### compute/coding-plans/baidu-coding.json

接入面配置快照：`openai-completions`；端点：`https://qianfan.baidubce.com/v2/coding`；币种：`套餐`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/coding-plans/baidu-coding.json -->
<!-- source-config-fingerprint: dc80d509281427dd0a4e54d579a19f8221a505ec91d5958b47068c37583c6087 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `qianfan-code-latest` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[baidu-plan](#baidu-plan) | [baidu-plan](#baidu-plan) | partial | `b1367b039635cffb0d171b63c2b70d58203a6ee8457639e32f6bfa34e24b12d8` |
| `deepseek-v3.2` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[baidu-models](#baidu-models) | [baidu-models](#baidu-models) | partial | `150e18d6ca61c333f303cc4d47f97b954f3ba8ed9dc75a526f71e3d19b35c1c7` |
| `deepseek-v4-flash` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[baidu-models](#baidu-models) | [baidu-models](#baidu-models) | partial | `8c03e1fefa53034f0071c60caff969fc034a18f575e84b6f870bbf2edfe150e6` |
| `ernie-4.5-turbo-20260402` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[baidu-plan](#baidu-plan) | [baidu-plan](#baidu-plan) | partial | `ec09b5b3ba218316c6e5f71cf06ca9a11b788ac8c1d2fe0aa0a73f5e47d02007` |
| `glm-5` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[baidu-models](#baidu-models) | [baidu-models](#baidu-models) | partial | `30124c9a2c4fd2f585b2076355bd65b0013232323456564c44787c78fc328c19` |
| `glm-5.1` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[baidu-models](#baidu-models) | [baidu-models](#baidu-models) | partial | `11dd1635dc2418f5f7c9511cfdd5fa1efa3ce8655c496770a9d309f49b12f1ae` |
| `kimi-k2.5` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[baidu-plan](#baidu-plan) | [baidu-plan](#baidu-plan) | partial | `00e6c83e5b65b32615ef20958e927961d36bd8302b6661fb5bc20cd84b6cf35a` |
| `kimi-k2.6` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[baidu-models](#baidu-models) | [baidu-models](#baidu-models) | partial | `5a0ff2e62abeb88cd9cb1be0d8c8603a1a567369617ce1b84e502f97dd80b5fd` |
| `minimax-m2.5` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | `modelName`→[baidu-plan](#baidu-plan) | [baidu-plan](#baidu-plan) | partial | `703afe7b05fe28d702ddcded549439837f45108b77f36580318be80a6761546d` |
| `minimax-m2.7` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [baidu-models](#baidu-models) | pending | `0e221f2adabbd20db75e6121bea45d0f7f12020e53c8420ba295d63ab03e9da9` |

### compute/model-specs/baidu.json

<!-- source-config: compute/model-specs/baidu.json -->
<!-- source-config-fingerprint: c10395683f30ac2d661e3e85e99ca2d46f72ff602639d1ff91e4ad5f7afb70e6 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `ernie-5.0-thinking-latest` | 128000 / 65536 | 非计价主数据 | 待核实 | [baidu-models](#baidu-models) | pending | `29f52379943ffdfe3e109a049a4849d8e9c000bc2719162a2b5ac1373868dce7` |
| `ernie-5.0` | 131072 / 65536 | 非计价主数据 | `id`→[baidu-models](#baidu-models) | [baidu-models](#baidu-models) | partial | `627b7726be4ce5b6a757ff7cda3d7f6949455300fd7b12ca33d9bf8b83a901dc` |
| `ernie-4.5-turbo-128k` | 131072 / 12288 | 非计价主数据 | `id`→[baidu-models](#baidu-models) | [baidu-models](#baidu-models) | partial | `d0175ae3cfc802d6b808b82d5f9e7a080435e55b332ffb5bbaa636caf213e693` |
| `ernie-4.5-turbo-20260402` | 131072 / 12288 | 非计价主数据 | `id`→[baidu-plan](#baidu-plan) | [baidu-plan](#baidu-plan) | partial | `41652e73e47acc3553d0214becda9e5522a520c966591ecbcfa7bfab29c9d16c` |
| `ernie-x1.1` | 65536 / 65536 | 非计价主数据 | 待核实 | [baidu-models](#baidu-models) | pending | `0bfc1a2e9f52d3e8f1e3c9e70d4abf9a5c74d07e7a42750d2d232157191723f0` |

## 待核实项与更新步骤

1. 按模型 ID 打开上面的官方页面，定位对应型号/地域/接入面，不以页脚日期或目录存在代替参数证明。
2. 先核对上下文、单次输出、推理和多模态输入，再核对计价单位；套餐可用性单独核对。
3. 修改 canonical JSON、对应 Provider 副本及本页中实际变化的记录；只更新真实核实字段及来源，不将 pending 批量改成 partial。
4. 用 `node scripts/validate-sources.mjs --fingerprints` 查看新指纹；同步本页受影响的表格行。
5. 运行 `npm run validate` 与 `npm test`，必要时在已授权账号做聚焦调用；无实测时保留限制说明。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "baidu",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "baidu-models",
      "url": "https://intl.cloud.baidu.com/en/doc/qianfan/s/7m95lyy43-intl-en",
      "kind": "official-doc",
      "scope": "baidu 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "9cf13493afc8d6ce4b21222066b4bd7fad8005631f6ec661dcc9d70e2d9cb5e9",
      "resolvedUrl": "https://intl.cloud.baidu.com/en/doc/qianfan/s/7m95lyy43-intl-en"
    },
    {
      "id": "baidu-plan",
      "url": "https://cloud.baidu.com/doc/qianfan/s/imlg0beiu",
      "kind": "official-doc",
      "scope": "baidu 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "a366e76ee3aeeecc787ba6d314076c20c1b960e03f47d82aef3cdb8b685ad595",
      "resolvedUrl": "https://cloud.baidu.com/doc/qianfan/s/imlg0beiu"
    }
  ]
}
```
<!-- source-metadata:end -->
