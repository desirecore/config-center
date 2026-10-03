# 月之暗面 Kimi：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [moonshot.json](../../../compute/providers/moonshot.json)
- [moonshot-coding.json](../../../compute/coding-plans/moonshot-coding.json)
- [moonshot.json](../../../compute/model-specs/moonshot.json)

## 官网证据

### kimi-k3

- 入口：[kimi-k3](https://platform.kimi.com/docs/guide/kimi-k3-quickstart.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Kimi 国内 api.moonshot.cn/v1；K3 固定采样/思考合同`。
### kimi-pricing

- 入口：[kimi-pricing](https://platform.kimi.com/docs/pricing/chat.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Kimi 国内人民币计价；本次页面未返回模型单价`。

## 核验结论与边界

K3 国内端点和 low/high/max（默认 max）、始终思考、固定采样参数已核对。max_completion_tokens 的默认值 131072 与允许设置上限 1048576 分开记录；实际输出受剩余窗口约束。国内价格表未返回单价，因此未填零或换算国际美元价。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/moonshot.json

接入面配置快照：`openai-completions`；端点：`https://api.moonshot.cn/v1`；币种：`CNY`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/moonshot.json -->
<!-- source-config-fingerprint: 4f9bc01560572949497a23b270586cbdaa4d7686be62ca81d32986001505af52 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kimi-k3` | 1048576 / 1048576 | CNY：未声明 / 未声明 | `contextWindow`→[kimi-k3](#kimi-k3), `extra.reasoning.defaultEffort`→[kimi-k3](#kimi-k3), `extra.reasoning.supportedEfforts`→[kimi-k3](#kimi-k3), `extra.samplingParametersDeprecated`→[kimi-k3](#kimi-k3), `extra.thinkingOnly`→[kimi-k3](#kimi-k3), `maxOutputTokens`→[kimi-k3](#kimi-k3), `modelName`→[kimi-k3](#kimi-k3) | [kimi-k3](#kimi-k3) | partial | `60a2de0a63989f2ad0c4e3f7b54dcc1166f8a36157a221935df7e9cf78fd385f` |
| `kimi-k2.7-code` | 262144 / 32768 | CNY：6.5 / 27 | `modelName`→[kimi-pricing](#kimi-pricing) | [kimi-pricing](#kimi-pricing) | partial | `937bb4f3796dea8a1a02f846c7670452dcfbe5d9db0ed0fc1364763cde449aca` |
| `kimi-k2.7-code-highspeed` | 262144 / 32768 | CNY：13 / 54 | `modelName`→[kimi-pricing](#kimi-pricing) | [kimi-pricing](#kimi-pricing) | partial | `adf6aae9b54df64dafc6759cbdba6638823b605aa0a983cd212c479872fe4cab` |
| `kimi-k2.6` | 262144 / 32768 | CNY：6.5 / 27 | `modelName`→[kimi-pricing](#kimi-pricing) | [kimi-pricing](#kimi-pricing) | partial | `c743a56354ad090d4160f8ac824003f17b6e3fca1f33dd905821432b996208e2` |
| `kimi-k2.5` | 262144 / 32768 | CNY：4 / 21 | 待核实 | [kimi-k3](#kimi-k3) | pending | `bc4d624b267c8b2b4975c72162636d2ce86f2ee763ce1837b613c644d78331d5` |
| `moonshot-v1-8k` | 8192 / 4096 | CNY：2 / 10 | 待核实 | [kimi-k3](#kimi-k3) | pending | `3294958f419bed4466707b612827386b18e2238ea120278b0225672ba0a2ec01` |
| `moonshot-v1-32k` | 32768 / 4096 | CNY：5 / 20 | 待核实 | [kimi-k3](#kimi-k3) | pending | `12a5bf3d6f1263986bc6c84457e3b35745d5a16b7812ee498d7a2afcbea6d42d` |
| `moonshot-v1-128k` | 131072 / 4096 | CNY：10 / 30 | 待核实 | [kimi-k3](#kimi-k3) | pending | `c0e278bff19a7f4f20543961591bb723e6464f9aed9115d4b0fdae7ededdc27a` |
| `moonshot-v1-8k-vision-preview` | 8192 / 4096 | CNY：2 / 10 | 待核实 | [kimi-k3](#kimi-k3) | pending | `0028db92c23d0ebed41a94bd4f36399ba746ae1abb8c140a5e59e3b640bf22fe` |
| `moonshot-v1-32k-vision-preview` | 32768 / 4096 | CNY：5 / 20 | 待核实 | [kimi-k3](#kimi-k3) | pending | `212fb28006d5b68202e21c81a2ead749fa2889c7a8d9cab9f4b3b3207448fd3a` |
| `moonshot-v1-128k-vision-preview` | 131072 / 4096 | CNY：10 / 30 | 待核实 | [kimi-k3](#kimi-k3) | pending | `af4cd36b77d218b3adc0616a79dc958373ff797c48e040edca8c134a6afe39fd` |

### compute/coding-plans/moonshot-coding.json

接入面配置快照：`openai-completions`；端点：`https://api.kimi.com/coding/v1`；币种：`套餐`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/coding-plans/moonshot-coding.json -->
<!-- source-config-fingerprint: 922fec7b442401697bd8c9bf35a4e9408768ad12a099e347b7bd012a7f80b161 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kimi-for-coding` | 262144 / 32768 | 套餐：未声明 / 未声明 | 待核实 | [kimi-k3](#kimi-k3) | pending | `9a0967df274982fd1139ea173469fddcaee3f5300f6ed5b5e3c23d76b937ba22` |

### compute/model-specs/moonshot.json

<!-- source-config: compute/model-specs/moonshot.json -->
<!-- source-config-fingerprint: 1bba7934e22adda4648af0911d35e18be4c87ee2f19e9aa908bf01c30bf8ece0 -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kimi-k3` | 1048576 / 1048576 | 非计价主数据 | `id`→[kimi-k3](#kimi-k3), `spec.contextWindow`→[kimi-k3](#kimi-k3), `spec.extra.samplingParametersDeprecated`→[kimi-k3](#kimi-k3), `spec.extra.thinkingOnly`→[kimi-k3](#kimi-k3), `spec.maxOutputTokens`→[kimi-k3](#kimi-k3) | [kimi-k3](#kimi-k3) | partial | `f947390f30eaeb54eeb5e3c20ca0f89cc2e0b11840cb3d9ab38de088fcae91fb` |
| `kimi-k2.7-code` | 262144 / 16384 | 非计价主数据 | `id`→[kimi-pricing](#kimi-pricing) | [kimi-pricing](#kimi-pricing) | partial | `57b9ed712930abed6b6db23453a3869f8e2e815f2fd79b4a9cb2e91ebaed78e1` |
| `kimi-k2.6` | 262144 / 16384 | 非计价主数据 | `id`→[kimi-pricing](#kimi-pricing) | [kimi-pricing](#kimi-pricing) | partial | `543f66245dc007438be71326e0afa13e8a5db5177b199857db69ea33f5ebda40` |
| `kimi-k2.5` | 256000 / 32768 | 非计价主数据 | 待核实 | [kimi-k3](#kimi-k3) | pending | `a0b1f089cec067813b19347e664fa4c96bc609472ff86f249eacaf38e5142385` |
| `kimi-k2-thinking` | 256000 / 16384 | 非计价主数据 | 待核实 | [kimi-k3](#kimi-k3) | pending | `aa749121bf3ce298db7abc9a7300bee94029e31da7192adf60fcae691db51fbf` |
| `kimi-k2` | 256000 / 8192 | 非计价主数据 | 待核实 | [kimi-pricing](#kimi-pricing) | pending | `48869de6be6f8d9381db79c242a9e730549032ebb3fdc2065775a997e7d571c5` |
| `moonshot-v1-8k` | 8192 / 4096 | 非计价主数据 | 待核实 | [kimi-k3](#kimi-k3) | pending | `3993a66c7dc2a94347477927b7b8c97c2c0f1f0b5ee7c9d8ce244ecdeee1989b` |
| `moonshot-v1-32k` | 32768 / 4096 | 非计价主数据 | 待核实 | [kimi-k3](#kimi-k3) | pending | `47459ac00bcbe7be67314b787962804200462274533d27524b9aa07921c1ee94` |
| `moonshot-v1-128k` | 131072 / 4096 | 非计价主数据 | 待核实 | [kimi-k3](#kimi-k3) | pending | `2da33f97534faad0a347502f2052a64b1d8f7a4e4b54da764e373de5b52e78d7` |

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
  "supplier": "moonshot",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "kimi-k3",
      "url": "https://platform.kimi.com/docs/guide/kimi-k3-quickstart.md",
      "kind": "official-doc",
      "scope": "Kimi 国内 api.moonshot.cn/v1；K3 固定采样/思考合同",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "58cefbeb0d2707c8297c762aa64e3f36879d4074de2dba32006920dcb3fa944d",
      "resolvedUrl": "https://platform.kimi.com/docs/guide/kimi-k3-quickstart.md"
    },
    {
      "id": "kimi-pricing",
      "url": "https://platform.kimi.com/docs/pricing/chat.md",
      "kind": "official-doc",
      "scope": "Kimi 国内人民币计价；本次页面未返回模型单价",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "fe0dad2bcf7ac9c6de011eb6d18f8e33b01b67e1aef7a9154664acc1b7225262",
      "resolvedUrl": "https://platform.kimi.com/docs/pricing/chat.md"
    }
  ]
}
```
<!-- source-metadata:end -->
