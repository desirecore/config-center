# 火山引擎：volcengine-coding 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/coding-plans/volcengine-coding.json](../../../../../compute/coding-plans/volcengine-coding.json)
- 核验日期：2026-10-03。
- 接入类别：`coding-plans`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://ark.cn-beijing.volces.com/api/coding/v3`。
- 计价币种：`套餐`。
- 访问模式：`coding-plan`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/coding-plans/volcengine-coding.json -->
<!-- source-config-fingerprint: a4f722bb969f33a4a2e85298583b157ab884634e9d1a05bd4c61a93899319162 -->

## 关联模型

- [`doubao-seed-2.1-pro`](../models/doubao-seed-2.1-pro.md)
- [`doubao-seed-2.1-turbo`](../models/doubao-seed-2.1-turbo.md)
- [`ark-code-latest`](../models/ark-code-latest.md)
- [`doubao-seed-2.0-code`](../models/doubao-seed-2.0-code.md)
- [`doubao-seed-2.0-pro`](../models/doubao-seed-2.0-pro.md)
- [`doubao-seed-2.0-lite`](../models/doubao-seed-2.0-lite.md)
- [`doubao-seed-code`](../models/doubao-seed-code.md)
- [`glm-4.7`](../models/glm-4.7.md)
- [`deepseek-v3.2`](../models/deepseek-v3.2.md)
- [`kimi-k2.5`](../models/kimi-k2.5.md)
- [`glm-5.1`](../models/glm-5.1.md)
- [`kimi-k2.6`](../models/kimi-k2.6.md)
- [`minimax-m2.5`](../models/minimax-m2.5.md)
- [`minimax-m2.7`](../models/minimax-m2.7.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "volcengine",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
