# 快手 StreamLake Coding：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [kwai-coding.json](../../../compute/coding-plans/kwai-coding.json)

## 官网证据

### kwai-current

- 入口：[kwai-current](https://www.streamlake.ai/document/DOC/mg6k6nlp8j6qxicx4c9)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`StreamLake 国际 Coding Plan；不覆盖国内 wanqing 别名`。

## 核验结论与边界

已找到 StreamLake 官网文档，确认国际 Coding Plan 使用 vanchin.streamlake.ai 和 kat-coder-pro-v2.5。当前仓库是国内 wanqing.streamlakeapi.com 的 kwai-coder 接入；不能将国际端点直接覆盖国内配置。原先论文入口不作为这里的官网主证据。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/coding-plans/kwai-coding.json

接入面配置快照：`openai-completions`；端点：`https://wanqing.streamlakeapi.com/api/gateway/coding/v1`；币种：`套餐`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/coding-plans/kwai-coding.json -->
<!-- source-config-fingerprint: b08f6832b4b0c9a5473ca822c1f665b9463a1e150034060df89ac06aac847d9d -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kwai-coder` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [kwai-current](#kwai-current) | pending | `a7fd011b64ff8af96ed9786ef4170cc6315474bda70685510959ac636d68c733` |

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
  "supplier": "kwai",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "kwai-current",
      "url": "https://www.streamlake.ai/document/DOC/mg6k6nlp8j6qxicx4c9",
      "kind": "official-doc",
      "scope": "StreamLake 国际 Coding Plan；不覆盖国内 wanqing 别名",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "8775665035fa5f6f4edfae825828e6e75d715e3705dac7de37583e35b2d04b23",
      "resolvedUrl": "https://www.streamlake.ai/document/DOC/mg6k6nlp8j6qxicx4c9"
    }
  ]
}
```
<!-- source-metadata:end -->
