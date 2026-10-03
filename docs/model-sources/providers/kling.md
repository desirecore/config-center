# 可灵：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [kling.json](../../../compute/providers/kling.json)
- [kling.json](../../../compute/model-specs/kling.json)

## 官网证据

### kling

- 入口：[kling](https://kling.ai/document-api/api/video/3-0-omni/text-to-video/legacy)
- 类型：`official-doc`；当前读取状态：`shell`；地域/接入面：`kling 官方入口；具体地域与接入面待该页面逐字段确认`。

## 核验结论与边界

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/kling.json

接入面配置快照：`kling-task-api`；端点：`https://api.klingai.com/v1`；币种：`CNY`。这些平台字段不是整条官网验收结论，核验边界见上文。

<!-- source-config: compute/providers/kling.json -->
<!-- source-config-fingerprint: 724a2269ba664381282a3d8c7cde80f513230d727a63158474b30202168fc66c -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kling-v3` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [kling](#kling) | pending | `192e43453004dffaf778408edc34f142606e674972ce19c7daacb4394b78a3b4` |
| `kling-v2-5-turbo` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [kling](#kling) | pending | `00b00d9b2b83b93e91ae61329895c7bfaefe81155de48e732cdff64892cb2e2a` |
| `kling-v2-5-turbo-pro` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [kling](#kling) | pending | `07bc51726c6400563365410033a01f80149b3636fba2fe96ff681a035aa21163` |
| `kling-v2` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [kling](#kling) | pending | `dbc92387f15cd1a865ffdc992c74e170a5091de49a77f64d71d8289cdf3f6f8c` |
| `kling-v2-master` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [kling](#kling) | pending | `c0edb28951dcf1a11513da6688aa6ad7e1fc1884f9ea65cea3baaf6b6b24f9fb` |

### compute/model-specs/kling.json

<!-- source-config: compute/model-specs/kling.json -->
<!-- source-config-fingerprint: 020e15818cf36fbd41fa1f00b4694fb76e036d540b10241a1429f32b7e81f73a -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `kling-3.0-turbo` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [kling](#kling) | pending | `bb07191272151a736ff2964c181458123f2ca6818bd52b5a6a06696a3d687424` |
| `kling-v3` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [kling](#kling) | pending | `9eb139ea49b2c2c7c79ae639317edfc49129e03b467e7726f6410e18ed945ee3` |
| `kling-v2-5-turbo` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [kling](#kling) | pending | `260bdee07eff1aff77e32c2c95393ca0a90ae014c9ee28ecc921884f16f18699` |
| `kling-v2-5-turbo-pro` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [kling](#kling) | pending | `bffdb0f5af86afb391aad2b09b0ffa1842d753e9cd688324296274ffbf4ea66a` |
| `kling-v2` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [kling](#kling) | pending | `ef33b6de441dfe9389c33f0de85489cc1e1a4582c10ffca109bab08782d4f034` |
| `kling-v2-master` | 未声明 / 未声明 | 非计价主数据 | 待核实 | [kling](#kling) | pending | `5a8de106df03e3ace051ce35b6c217ea51b5ea5d5110949a565dcbfc8b792b8d` |

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
  "supplier": "kling",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "kling",
      "url": "https://kling.ai/document-api/api/video/3-0-omni/text-to-video/legacy",
      "kind": "official-doc",
      "scope": "kling 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "shell",
      "checkedAt": "2026-10-03",
      "contentSha256": "bc7c2eb4a6a83460c944054c4b1610c799adab2c1902910b828eee891d48a2e5",
      "resolvedUrl": "https://kling.ai/document-api/api/video/3-0-omni/text-to-video/legacy"
    }
  ]
}
```
<!-- source-metadata:end -->
