# OpenAI：2026-10-03 数据核验与后续计划

[官网证据](SOURCES.md) · [供应商模型索引](README.md)

## 本轮完成

实际读取六个GPT5.4/5.5原厂模型规格页，核窗口、输出、价格、缓存与effort。旧ignored键迁移extra.reasoning；5.4/mini/nano补官方xhigh档。GPT5.4Pro默认从high修正medium，5.5Pro保持high；Pro保持Responses约束。GPTReserve仍保留手动配置，但未经正式规格核验前eligibleForAgent=false，限制自动选择；没有擅自删除用户要求的临时模型。

## 待完成与验收标准

| 事项 | 当前边界 | 下一步与完成条件 |
| --- | --- | --- |
| Reserve正式规格 | 官方模型页未取得可读参数；共享/订阅窗口为历史假定 | 取得明确官方精确ID、窗口、输出、协议与订阅可用性，分别核验后再开放自动选型 |
| Codex订阅接入 | 原厂API不等于订阅，不能拿API价格/窗口填订阅 | 从官方订阅说明/模型目录读取合同，核身份、窗口、effort及客户端版本 |
| Mini/Nano输入上限 | input272000而总window400000，独立限制尚未声明schema字段 | 查客户端消费与frozen schema后再实现独立输入预算，避免盲目发送400K输入 |
| 老型号与媒体API | 语音/图像、旧GPT大部分未本轮逐参数复核 | 分独立端点、按tokens/秒/图像单位读官网，不由ID存在推断价格与输出正确 |
| none默认映射 | API5.4默认none但Provider defaultEffort枚举不接受none | 维持既有产品默认策略，记录与原厂默认区别；客户端契约变更另做版本门控 |

本轮不使用账号调用，来源字段证明不能代表账户权限与实际请求验收。

## 本轮最终记录统计

本仓记录 93 条：pending 71、partial 22、historical 0；partial 中仅 ID 证明 10 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
