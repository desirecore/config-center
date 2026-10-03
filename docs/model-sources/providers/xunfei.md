# 讯飞星火：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [xunfei.json](../../../compute/providers/xunfei.json)
- [xunfei.json](../../../compute/model-specs/xunfei.json)

## 官网证据

### xunfei

- 入口：[xunfei](https://www.xfyun.cn/doc/spark/X1http.html)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`讯飞 X2/X1.5 的 HTTP 文档；端点与独立输入/输出限制`。

## 核验结论与边界

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/xunfei.json

<!-- source-config: compute/providers/xunfei.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `spark-x` | 65536 / 128000 | CNY：未声明 / 未声明 | `modelName`→[xunfei](#xunfei) | [xunfei](#xunfei) | partial | `e86e73c51d95392d5a755647f74010d21d4b40ab7928853deecbbd39c27a5432` |
| `4.0Ultra` | 32768 / 32768 | CNY：未声明 / 未声明 | 待核实 | [xunfei](#xunfei) | pending | `018bed7da0a903812515899572d00d3efcdb86395896232f8af59809775b5ec6` |

### compute/model-specs/xunfei.json

<!-- source-config: compute/model-specs/xunfei.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `spark-x` | 65536 / 128000 | 非计价主数据 | `id`→[xunfei](#xunfei) | [xunfei](#xunfei) | partial | `12a6e5633db6604800f759bf1a6323ccc745fd574af632d937f67b6efb08754a` |
| `4.0Ultra` | 32768 / 32768 | 非计价主数据 | 待核实 | [xunfei](#xunfei) | pending | `1dee4706e0bc0dd341a81fcbcb28f2f2d45f138c91476086fe9e42ddf8c1159b` |

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
  "supplier": "xunfei",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "xunfei",
      "url": "https://www.xfyun.cn/doc/spark/X1http.html",
      "kind": "official-doc",
      "scope": "讯飞 X2/X1.5 的 HTTP 文档；端点与独立输入/输出限制",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "324d06b132ff4ab16a0543157467283dc789153303cf456b44af45d1fc6f1548",
      "resolvedUrl": "https://www.xfyun.cn/doc/spark/X1http.html"
    }
  ]
}
```
<!-- source-metadata:end -->
