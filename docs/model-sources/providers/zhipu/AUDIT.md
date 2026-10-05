# 智谱：2026-10-03 数据核验与后续计划

[官网证据](SOURCES.md) · [供应商模型索引](README.md)

本轮实际读取国内/国际ChatAPI参考，确认GLM5.2接受七个兼容effort，默认max；none/minimal不思考，low/medium映射high，xhigh映射max。API/国际套餐旧字段迁移extra.reasoning，来源参数合同分开记录。

| 待完成 | 验收标准 |
| --- | --- |
| 国际套餐与1m别名权限 | 本轮通用API参考不证明套餐账户能用该alias，需官方套餐列表和授权聚焦调用 |
| GLM5.3/Flash精确窗口 | 官网1M/128K简写尚不足以证明本仓具体整数，取得明文限制后统一 |
| 存量Embedding/多模态接口 | 按独立接口读取向量维度、服务单位、端点和兼容格式；不由Chat参数迁移 |
| 国内价与国际价 | 分币种/地域与峰谷/缓存，不能相互覆盖；逐型号补字段来源 |
| 按量 API Key 与 FlashX 的 Anthropic 思考强度 | 2026-10-05 已按 Coding Plan 官网页给 GLM-5.3 系列声明 `adaptiveThinking`（客户端改发 `output_config.effort`）；官网只在 Coding Plan 页说明 /api/anthropic 的处理。需用按量 API Key 对 GLM-5.3 与 FlashX 各发一次 `output_config.effort` 为 low 与 max 的请求，确认均被接受且思考长度有差异，再把 `zhipu` 接入面与 FlashX 规格的 `adaptiveThinking` 列入已核字段 |

未进行账号调用，不宣称国际套餐已实测。

## 本轮最终记录统计

本仓记录 31 条：pending 3、partial 28、historical 0；partial 中仅 ID 证明 18 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
