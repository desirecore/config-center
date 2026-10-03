# 硅基流动：siliconflow 接入面

[供应商索引](../README.md) · [官网证据](../SOURCES.md)

- 配置文件：[compute/providers/siliconflow.json](../../../../../compute/providers/siliconflow.json)
- 核验日期：2026-10-03。
- 接入类别：`providers`。

## 平台配置快照

- API 协议：`openai-completions`。
- 端点：`https://api.siliconflow.cn/v1`。
- 计价币种：`CNY`。
- 访问模式：`普通 API`。

以上是配置快照，不能据此宣布该端点或账号已实际验收。核查地域、套餐支持、凭据来源及协议时，对照官网证据目录并记录结论。

<!-- source-config: compute/providers/siliconflow.json -->
<!-- source-config-fingerprint: ca5a1f931ce95c420fdb0704dbfcc4ac9936ceec2844c8767c3934acc5aa096f -->

## 关联模型

- [`Qwen/Qwen3-Coder-480B-A35B-Instruct`](../models/qwen--qwen3-coder-480b-a35b-instruct.md)
- [`Qwen/Qwen3-235B-A22B-Instruct-2507`](../models/qwen--qwen3-235b-a22b-instruct-2507.md)
- [`BAAI/bge-m3`](../models/baai--bge-m3.md)

## 更新前检查

- 核对端点和地域、API 格式、凭据来源、版本要求及套餐实际支持名单。
- 修改平台字段后复核本文件；修改模型字段后更新对应单模型文件。
- 未取得官网参数或账号实测证据时，保留 pending / 未实测说明，不以表格快照代替证据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "siliconflow",
  "checkedAt": "2026-10-03",
  "sourceCatalog": "../SOURCES.md"
}
```
<!-- source-metadata:end -->
