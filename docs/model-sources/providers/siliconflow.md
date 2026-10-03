# 硅基流动：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [siliconflow.json](../../../compute/providers/siliconflow.json)

## 官网证据

### siliconflow

- 入口：[siliconflow](https://www.siliconflow.cn/models)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`硅基流动国内目录；国际站价格不覆盖该接入面`。

## 核验结论与边界

本次读取国内官网入口，价格和 ID 按该接入面核实。国际博客的美元价格不能覆盖国内 CNY 配置；未核字段保持 pending。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/siliconflow.json

<!-- source-config: compute/providers/siliconflow.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `Qwen/Qwen3-Coder-480B-A35B-Instruct` | 262144 / 262144 | CNY：8 / 16 | 待核实 | [siliconflow](#siliconflow) | pending | `c3ed087f76667bc154e09f450fd4ce41d9b74672b1d79e24843f0d03c46026d7` |
| `Qwen/Qwen3-235B-A22B-Instruct-2507` | 262144 / 262144 | CNY：2.5 / 10 | 待核实 | [siliconflow](#siliconflow) | pending | `1205925ec2b1ad631d02a9b89016dcbbe8e8bd62cf716b370fa8c7889242721d` |
| `BAAI/bge-m3` | 8192 / 0 | CNY：0 / 0 | 待核实 | [siliconflow](#siliconflow) | pending | `a6f2c7da8aceafe90f572847c7a6639f3138d4e66060e0f24d3a822ac7d4ca43` |

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
  "supplier": "siliconflow",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "siliconflow",
      "url": "https://www.siliconflow.cn/models",
      "kind": "official-doc",
      "scope": "硅基流动国内目录；国际站价格不覆盖该接入面",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "aaad9fc65c3be42daaca8f935a4c969478c58f7043ef4bf0644d5c18a447e918",
      "resolvedUrl": "https://www.siliconflow.cn/models"
    }
  ]
}
```
<!-- source-metadata:end -->
