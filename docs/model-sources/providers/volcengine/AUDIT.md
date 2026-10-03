# volcengine：2026-10-03 字段复核与剩余过程

[官网证据](SOURCES.md) · [模型与接入导航](README.md)

本轮实际读取 model-list、coding-plan 和 Seed入口的清洗正文，三者均只返回“需要启用JavaScript”的页面壳，11914字节HTML不含模型合同；latest入口另有TLS握手超时。Seed入口最终跳到latest页面，不能当作旧Seed详情。

所有66条记录继续pending，不使用第三方补参数。下一步用官方文档可读正文/官方仓库或有授权的控制台，首先查Seed2.1 Pro/Turbo、Doubao精确日期版本的上下文、输入和输出独立限制，再查媒体任务轮询/端点、国内价格以及套餐清单。取得正文前不调整数值，不把200或跳转成功视为核实。

## 待核实队列

本轮收尾快照：66条接入面记录，66 pending，0条partial只核ID；同一模型可占多条，非独立型号数。partial是已列字段证明，不是全部通过。

### 尚无字段证明

- `compute/coding-plans/volcengine-coding.json`：`ark-code-latest`、`deepseek-v3.2`、`doubao-seed-2.0-code`、`doubao-seed-2.0-lite`、`doubao-seed-2.0-pro`、`doubao-seed-2.1-pro`、`doubao-seed-2.1-turbo`、`doubao-seed-code`、`glm-4.7`、`glm-5.1`、`kimi-k2.5`、`kimi-k2.6`、`minimax-m2.5`、`minimax-m2.7`。
- `compute/providers/volcengine.json`：`deepseek-r1`、`deepseek-v3.2`、`doubao-embedding-large`、`doubao-embedding`、`doubao-seed-1.6-flash`、`doubao-seed-1.6-lite`、`doubao-seed-1.6-thinking`、`doubao-seed-1.6-vision`、`doubao-seed-1.6`、`doubao-seed-1.8`、`doubao-seed-2.0-code`、`doubao-seed-2.0-lite`、`doubao-seed-2.0-mini`、`doubao-seed-2.0-pro`、`doubao-seed-2.1-pro`、`doubao-seed-2.1-turbo`、`doubao-seed-code`、`doubao-seed-evolving`、`doubao-seedance-2-0-260128`、`doubao-seedream-4-0-250828`、`volc-mega-tts-clone`、`volc-realtime-voice`、`volc-simultaneous`、`volc-translation`。
- `compute/model-specs/volcengine.json`：`deepseek-r1`、`deepseek-v3.2`、`doubao-embedding-large`、`doubao-embedding`、`doubao-seed-1.6-flash`、`doubao-seed-1.6-lite`、`doubao-seed-1.6-thinking`、`doubao-seed-1.6-vision`、`doubao-seed-1.6`、`doubao-seed-1.8`、`doubao-seed-2.0-code`、`doubao-seed-2.0-lite`、`doubao-seed-2.0-mini`、`doubao-seed-2.0-pro`、`doubao-seed-2.1-pro`、`doubao-seed-2.1-turbo`、`doubao-seed-code`、`doubao-seed-evolving`、`doubao-seedance-1.0-pro-fast`、`doubao-seedance-1.0-pro`、`doubao-seedance-1.5-pro`、`doubao-seedance-2.0-fast`、`doubao-seedance-2.0-mini`、`doubao-seedance-2.0`、`volc-mega-tts-clone`、`volc-realtime-voice`、`volc-simultaneous`、`volc-translation`。

### 仅ID有证明

无。

## 完成标准

逐条打开对应官网正文/官方API，按原厂、套餐、地域分别登记精确参数和单位；有差异才改canonical JSON，同步该模型详情、字段引用和指纹。保留未证实字段。运行来源/结构测试；协议改动需客户端和实际调用验收。没有账号授权，本轮未执行收费模型调用。

## 本轮最终记录统计

本仓记录 66 条：pending 66、partial 0、historical 0；partial 中仅 ID 证明 0 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
