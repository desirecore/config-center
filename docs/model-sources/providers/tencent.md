# 腾讯混元：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [tencent.json](../../../compute/providers/tencent.json)
- [tencent-token.json](../../../compute/coding-plans/tencent-token.json)
- [tencent.json](../../../compute/model-specs/tencent.json)

## 官网证据

### tencent

- 入口：[tencent](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`tencent 官方入口；具体地域与接入面待该页面逐字段确认`。

## 核验结论与边界

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/tencent.json

<!-- source-config: compute/providers/tencent.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `hunyuan-2.0-thinking-20251109` | 196608 / 65536 | CNY：3.975 / 15.9 | 待核实 | [tencent](#tencent) | pending | `4605c6947f2786b50569a9c7618694a9690d67cdb05ed76de1b4c2a3562c7516` |
| `hunyuan-2.0-instruct-20251111` | 147456 / 16384 | CNY：3.18 / 7.95 | 待核实 | [tencent](#tencent) | pending | `43858b4f859ac974688d7638692232bb8c0751c8a93f3d5d80e41d3314a590a7` |
| `hunyuan-turbos-latest` | 32768 / 16384 | CNY：0.8 / 2 | 待核实 | [tencent](#tencent) | pending | `4dfdbb26b17f3e188c58b68675a006efc38ba7d45f82adfebee8eaae3c7e3ae7` |
| `hunyuan-t1-latest` | 262144 / 32768 | CNY：5 / 20 | 待核实 | [tencent](#tencent) | pending | `01593c56db16e9710cad2dbb5453dae2ac13b2bdb17fdf32aba260a0347e130a` |
| `hunyuan-t1-vision` | 131072 / 32768 | CNY：5 / 20 | 待核实 | [tencent](#tencent) | pending | `220f3da424ee3c3273176e70f49728007e44be1ae9648708650e5e19dc354905` |
| `hunyuan-turbos-vision` | 32768 / 16384 | CNY：0.8 / 2 | 待核实 | [tencent](#tencent) | pending | `5918fc18e4bb8490f9e8b8f916e1d75931a381d25ae255093c0d119a10f7d2b1` |

### compute/coding-plans/tencent-token.json

<!-- source-config: compute/coding-plans/tencent-token.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `tc-code-latest` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [tencent](#tencent) | pending | `04d8a41f82a0efdc743c71357a33552c60c838dd598ed10d99077173cad3ea67` |
| `hunyuan-2.0-instruct` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [tencent](#tencent) | pending | `98e1301def109dee3f74b1d8eb8e665a440e01fcaf6a3984956d0104027454b6` |
| `hunyuan-2.0-thinking` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [tencent](#tencent) | pending | `195b7636baac803bcc8aaadf4ff2ddb6c04ee2d7956e7f1f125de93cb906a26c` |
| `hunyuan-t1` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [tencent](#tencent) | pending | `01e3ee0441a391d522c7d2aefbe8f485ac1a8ebc69f4396787dafaffc5c7ab83` |
| `hunyuan-turbos` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [tencent](#tencent) | pending | `cabfb22e9274436b688102fb2f21cc305466fecb9c4b6e5a6f3dbc4a1e746cd0` |
| `glm-5.1` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [tencent](#tencent) | pending | `713984998c9458dcd9327a3bdad2a3d73ffa3df59d79115752d9b967d4997b9d` |
| `glm-5` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [tencent](#tencent) | pending | `7404c9a70628209e91229db5acaae9c632891a3ad4768818ff3fa90b6b0d69d0` |
| `minimax-m2.7` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [tencent](#tencent) | pending | `c1552bf2af76f109465fdae3de1d3141a6cef234fef7536eed3da12c58ed83f4` |
| `minimax-m2.5` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [tencent](#tencent) | pending | `7a9e5dbd8ec56df907c43403c767a95637f81e01388f1a6913eda003c2289aaa` |
| `kimi-k2.5` | 未声明 / 未声明 | 套餐：未声明 / 未声明 | 待核实 | [tencent](#tencent) | pending | `12f04d7b368b64c4d78d1683d99ff327a189507d10351ddaffd8157587ff3684` |

### compute/model-specs/tencent.json

<!-- source-config: compute/model-specs/tencent.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `hy4-preview` | 1048576 / 未声明 | 非计价主数据 | 待核实 | [tencent](#tencent) | pending | `7c6a182d9b613f6a53db2c3c5a3832f9da4506e933e67f92dcbf5a2c813a2d5d` |
| `hy3` | 262144 / 128000 | 非计价主数据 | `id`→[tencent](#tencent) | [tencent](#tencent) | partial | `d1c836cd21794c4ffb790d496858ebca2573e8f5c5d184c83a4a78d5ad420fa8` |
| `hy3-preview` | 262144 / 未声明 | 非计价主数据 | 待核实 | [tencent](#tencent) | pending | `ab824f7c3367e887a1b3573189efb3dc145cdab1ec28b4318690cdc03e1b529b` |
| `hunyuan-2.0-thinking-20251109` | 196608 / 65536 | 非计价主数据 | 待核实 | [tencent](#tencent) | pending | `ff7c765ea5f8da2e6b3a0ba3c9744512da13691e2472a3e0d1dcdb9afa671e0d` |
| `hunyuan-2.0-instruct-20251111` | 147456 / 16384 | 非计价主数据 | 待核实 | [tencent](#tencent) | pending | `fd750e618edcced355ae63f47239ada32b8fc2bc57755b636e4c6a294820db00` |
| `hunyuan-turbos-latest` | 32768 / 16384 | 非计价主数据 | 待核实 | [tencent](#tencent) | pending | `26a201cd922833c01033f58166af7642c171148377f369e60cfaa664680d00ed` |
| `hunyuan-t1-latest` | 262144 / 32768 | 非计价主数据 | 待核实 | [tencent](#tencent) | pending | `833f1126bb1553fdfa9720fad7f9e00af6a585b2c3ca3f9544a6daa351b5aa85` |
| `hunyuan-t1-vision` | 131072 / 32768 | 非计价主数据 | 待核实 | [tencent](#tencent) | pending | `4a80d50b9ed7878d6d705c0f97696bf018ee19c9208c774e0b942050277c8ee6` |
| `hunyuan-turbos-vision` | 32768 / 16384 | 非计价主数据 | 待核实 | [tencent](#tencent) | pending | `53202b5db52d8b440298d412236108c8499c869dd1f270c368febc9c8a6d3a8a` |

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
  "supplier": "tencent",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "tencent",
      "url": "https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/",
      "kind": "official-doc",
      "scope": "tencent 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "08770afd8e2b89d4c93be931d0a32b78e2eac1e97821ea86aa125305db5f085a",
      "resolvedUrl": "https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/"
    }
  ]
}
```
<!-- source-metadata:end -->
