# 腾讯混元：tencent-token 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/coding-plans/tencent-token.json](../../../../../compute/coding-plans/tencent-token.json)
- 核验日期：2026-10-03。
- 接入类别：`coding-plans`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.lkeap.cloud.tencent.com/plan/v3`。
- 计价币种：`套餐`。
- 访问模式：`token-plan`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/coding-plans/tencent-token.json -->
<!-- source-config-fingerprint: 6516f8be7a3126929f849b4cb85ae7888f95a6a3455228a3d53fff0eb76427cf -->

## 关联模型

- [`tc-code-latest`](../models/tc-code-latest.md)
- [`hunyuan-2.0-instruct`](../models/hunyuan-2.0-instruct.md)
- [`hunyuan-2.0-thinking`](../models/hunyuan-2.0-thinking.md)
- [`hunyuan-t1`](../models/hunyuan-t1.md)
- [`hunyuan-turbos`](../models/hunyuan-turbos.md)
- [`glm-5.1`](../models/glm-5.1.md)
- [`glm-5`](../models/glm-5.md)
- [`minimax-m2.7`](../models/minimax-m2.7.md)
- [`minimax-m2.5`](../models/minimax-m2.5.md)
- [`kimi-k2.5`](../models/kimi-k2.5.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "tencent",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
