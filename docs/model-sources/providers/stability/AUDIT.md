# Stability：2026-10-03 数据核验与后续计划

[官网证据](SOURCES.md) · [供应商模型索引](README.md)

## 本轮完成

实读官方News与SD3.5独立发布公告，登记正确跳转到news-updates的证据。发布公告确认SD3.5 Large是图像模型及其定位，不能证明当前API接受哪种model字符串、风格与固定分辨率，因此没有借发布公告提高这些配置字段状态。

## 待完成与验收标准

| 事项 | 当前边界 | 下一步与完成条件 |
| --- | --- | --- |
| SD3.5 Platform接口 | 发布公告与可请求API是两类证据 | 读取Platform API实际请求schema，核model ID、aspect_ratio/输出格式、端点和返回值 |
| 固定尺寸/风格 | Provider已有supportedImageSizes/Styles，未取得本轮端点证明 | 若是客户端策略，注明策略；若声明原厂参数，逐项核对接口支持后修正 |
| StableAudio3.0 | 仅shared spec，音乐接口不同于图像API | 完成原生音频请求/轮询或文件响应适配、版本门控及聚焦调用，再上Provider |
| 价格 | 图像/音频按credits或请求等单位，不能猜token价 | 分服务读取官方pricing；单位和账单合同一致后登记 |
| 具体型号映射 | StableAudio3.0是原厂模型系列名称 | 核准确API ID及相应开放版本，不能把新闻里的系列名直接等同于API字符串 |

本轮尝试的StableAudio独立旧路径返回404，News正文可读；没有把404当退役证据或造参数。

## 本轮最终记录统计

本仓记录 3 条：pending 3、partial 0、historical 0；partial 中仅 ID 证明 0 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
