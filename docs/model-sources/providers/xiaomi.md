# 小米 MiMo：模型数据来源

核验轮次：2026-10-03。这里的日期是访问/复核日期，不是模型发布日期。

## 对应配置

- [xiaomi.json](../../../compute/providers/xiaomi.json)
- [xiaomi.json](../../../compute/model-specs/xiaomi.json)

## 官网证据

### xiaomi

- 入口：[xiaomi](https://mimo.mi.com/docs/en-US/news/latest/v2-6)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`xiaomi 官方入口；具体地域与接入面待该页面逐字段确认`。

## 核验结论与边界

已登记官方入口并尝试读取。表中仅标为已核字段的部分有此次核对记录；其余存量参数待逐字段复核。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 当前配置与字段级核验

下表“计价”是配置的 inputPrice/outputPrice 字段快照，不统一代表 token 单价；按张、按秒、search unit 和兼容占位值需查看原配置 extra.pricingNotes 与官网说明。未列为已核字段的数值仍待核实。

### compute/providers/xiaomi.json

<!-- source-config: compute/providers/xiaomi.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `mimo-v2.6-pro` | 1000000 / 131072 | CNY：3 / 6 | `modelName`→[xiaomi](#xiaomi) | [xiaomi](#xiaomi) | partial | `05d1434b13674852e66f3ad25540f97f099e8f5b6822b6d6008a2b4e1cc993f3` |
| `mimo-v2.6-flash` | 1000000 / 131072 | CNY：1 / 2 | `modelName`→[xiaomi](#xiaomi) | [xiaomi](#xiaomi) | partial | `971c522ca5f9646fd31131cb2ed69ff93baf966fe29004cb8d6c10bdb5c131e4` |
| `mimo-v2.6-pro-ultraspeed` | 1000000 / 131072 | CNY：30 / 60 | 待核实 | [xiaomi](#xiaomi) | pending | `e4c200a382c4a42d5b7a8619875205fc0e9f9e21cffa5f99b9252ea5a94dbeff` |
| `mimo-x-flash-preview` | 1000000 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [xiaomi](#xiaomi) | pending | `e4a203fd34a794bb1160d070d45d68020ff1adc17e4b27a1d8db123da0c1fc22` |
| `mimo-x-pro-preview` | 1000000 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [xiaomi](#xiaomi) | pending | `09e87d946bf002ef104dc68f0385261c71dfdca0a23bf808d0269278d58b6859` |
| `mimo-v2.5-pro` | 1000000 / 131072 | CNY：未声明 / 未声明 | 待核实 | [xiaomi](#xiaomi) | pending | `11c971d0c899bcb5b3609f995a72ae10eb26d76a56889f2a9abcc49c4801f229` |
| `mimo-v2.5-tts` | 未声明 / 未声明 | CNY：未声明 / 未声明 | `modelName`→[xiaomi](#xiaomi) | [xiaomi](#xiaomi) | partial | `b38f14db2811805b4ec890be98cacf9db1a0f3f8b12d9a0ea13b4d6c8beba0f5` |
| `mimo-v2.5-asr` | 8192 / 2048 | CNY：未声明 / 未声明 | 待核实 | [xiaomi](#xiaomi) | pending | `b2a80d502df4232d134d9bd8a61027e2d7117ccf80f04fd3efd90a67f4d1da44` |
| `mimo-v2.5-tts-voicedesign` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [xiaomi](#xiaomi) | pending | `e32315265f593c73fcd7704fa0a650e6c9bbc007337f4f69d98ddff014fea637` |
| `mimo-v2.5-tts-voiceclone` | 未声明 / 未声明 | CNY：未声明 / 未声明 | 待核实 | [xiaomi](#xiaomi) | pending | `c74f3bea61daecb30e58eeac591f6e5b718a8b3d39f8fa71d86a0c63b7e0908c` |

### compute/model-specs/xiaomi.json

<!-- source-config: compute/model-specs/xiaomi.json -->

| 模型 ID | 上下文 / 输出 | 计价 | 已核字段→来源 | 来源入口 | 状态 | 数据指纹 |
| --- | --- | --- | --- | --- | --- | --- |
| `mimo-v2.6-pro` | 1000000 / 131072 | 非计价主数据 | `id`→[xiaomi](#xiaomi) | [xiaomi](#xiaomi) | partial | `54ee471dea50ce6c6f2b7996356d40e363e76601c087255e01063cf3c67d325d` |
| `mimo-v2.6-flash` | 1000000 / 131072 | 非计价主数据 | `id`→[xiaomi](#xiaomi) | [xiaomi](#xiaomi) | partial | `679d23a03cbd0864aa1c2710007d78994379949cfea4bb8adbd92077a4770b97` |
| `mimo-v2.6-pro-ultraspeed` | 1000000 / 131072 | 非计价主数据 | 待核实 | [xiaomi](#xiaomi) | pending | `a3d199cf35bff0b84fd9e9d31d1302c4a3cf6969c0aa5b6853c3fba0b82a4ae1` |
| `mimo-x-flash-preview` | 1000000 / 未声明 | 非计价主数据 | 待核实 | [xiaomi](#xiaomi) | pending | `bdbd179f0ebe3a338a2e119162963733f73f318b3e4c79e666b0379c94bcac5c` |
| `mimo-x-pro-preview` | 1000000 / 未声明 | 非计价主数据 | 待核实 | [xiaomi](#xiaomi) | pending | `6997ff8d674a25d5c7e2f2f59374c6d450de3356da982d4a75e798ad22599d7d` |
| `mimo-v2.5-pro` | 1000000 / 131072 | 非计价主数据 | 待核实 | [xiaomi](#xiaomi) | pending | `b7fb772af4eb3e1490c6525fb34555491e7d5537708d1f52458290f9b365a287` |
| `mimo-v2.5` | 1000000 / 131072 | 非计价主数据 | `id`→[xiaomi](#xiaomi) | [xiaomi](#xiaomi) | partial | `e95844e05b8817aa51f17bae22b0c4029779d0080c324e1b60bc672c6f7c2acf` |
| `mimo-v2-pro` | 1000000 / 131072 | 非计价主数据 | 待核实 | [xiaomi](#xiaomi) | pending | `1c73f4fa0bd215321d22a52ad5b229fcb2302be422e25477b217f2759aa39995` |
| `mimo-v2-omni` | 256000 / 131072 | 非计价主数据 | 待核实 | [xiaomi](#xiaomi) | pending | `deb4b95a8a2c38d4b5c2017bd638583ee81cdeeb604af3ebcfdd52cfd1ccb219` |
| `mimo-v2-flash` | 256000 / 65536 | 非计价主数据 | 待核实 | [xiaomi](#xiaomi) | pending | `6e89e001ced34c30fd2947652752ec31b75f5c84cf3cb71fe7615ed7a192e82d` |
| `mimo-v2.5-tts` | 8192 / 8192 | 非计价主数据 | `id`→[xiaomi](#xiaomi) | [xiaomi](#xiaomi) | partial | `c2ce69e79eb2776dfded19ff81e8ae33f6c6df85f5fc0ad43ea09f96bd9213cf` |
| `mimo-v2.5-asr` | 8192 / 2048 | 非计价主数据 | 待核实 | [xiaomi](#xiaomi) | pending | `4cfb4519523407bc8baaa97d1c980885d79d65841eaec46937cacb4bdc1c0716` |
| `mimo-v2.5-tts-voiceclone` | 8192 / 未声明 | 非计价主数据 | 待核实 | [xiaomi](#xiaomi) | pending | `3e1297c767007f00807327f0d408af302b090ab1def64c6dbffda534d1952d79` |
| `mimo-v2.5-tts-voicedesign` | 8192 / 未声明 | 非计价主数据 | 待核实 | [xiaomi](#xiaomi) | pending | `fb40eb73c466a68996ce72297a8f213ec0a002fedab07c48c8511fcc49c02f4b` |
| `mimo-v2-tts` | 8192 / 未声明 | 非计价主数据 | 待核实 | [xiaomi](#xiaomi) | pending | `759ef66cee4029d8d9fe25a3c12fdf286674c3b6da712275ae3c5a2df8340bd8` |

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
  "supplier": "xiaomi",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "xiaomi",
      "url": "https://mimo.mi.com/docs/en-US/news/latest/v2-6",
      "kind": "official-doc",
      "scope": "xiaomi 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "101d0e7233e16966073506c525bc95ae192b906eb7d2e31659598e04b22a94b0",
      "resolvedUrl": "https://mimo.mi.com/docs/en-US/news/latest/v2-6"
    }
  ]
}
```
<!-- source-metadata:end -->
