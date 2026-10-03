# baidu：2026-10-03 字段复核与剩余过程

[官网证据](SOURCES.md) · [模型与接入导航](README.md)

本轮实际读取国际模型目录与国内Coding Plan。国际目录ERNIE5.0输出65536、GLM5.2输出131072等不能直接证明国内qianfan.baidubce.com合同，未复制其数字或美元价格。国内普通模型路径补读最终跳转文档首页，不是目标规格。

Coding Plan明确仅编程工具使用、专属BaseURL/API Key；FAQ明确当前套餐不支持图像理解。已移除套餐ERNIE4.5 Turbo的vision标签，保留原厂普通API视觉规格。GLM5.1官方抵扣为高峰4/低峰3，修正旧描述6；高峰时段随流量可变。页面固定modelName列表不含Kimi K2.6，但未以目录缺席直接删掉该历史套餐项，需更当前的Token Plan公告/控制台验证。MiniMaxM2.5标“即将下线”未给精确时间，不提前删除。

下一步核国内普通API精确ID/限制/价格，以及Coding→Token Plan停售迁移、缺席模型是否仍可用、配额和版本门控；以下仅ID证明仍不代表参数或套餐账号权限验证。

## 待核实队列

本轮收尾快照：20条接入面记录，5 pending，13条partial只核ID；同一模型可占多条，非独立型号数。partial是已列字段证明，不是全部通过。

### 尚无字段证明

- `compute/providers/baidu.json`：`ernie-5.0-thinking-latest`、`ernie-x1.1`。
- `compute/model-specs/baidu.json`：`ernie-5.0-thinking-latest`、`ernie-x1.1`。
- `compute/coding-plans/baidu-coding.json`：`minimax-m2.7`。

### 仅ID有证明

- `compute/coding-plans/baidu-coding.json`：`deepseek-v3.2`、`deepseek-v4-flash`、`glm-5`、`kimi-k2.5`、`kimi-k2.6`、`minimax-m2.5`、`qianfan-code-latest`。
- `compute/providers/baidu.json`：`ernie-4.5-turbo-128k`、`ernie-4.5-turbo-20260402`、`ernie-5.0`。
- `compute/model-specs/baidu.json`：`ernie-4.5-turbo-128k`、`ernie-4.5-turbo-20260402`、`ernie-5.0`。

## 完成标准

逐条打开对应官网正文/官方API，按原厂、套餐、地域分别登记精确参数和单位；有差异才改canonical JSON，同步该模型详情、字段引用和指纹。保留未证实字段。运行来源/结构测试；协议改动需客户端和实际调用验收。没有账号授权，本轮未执行收费模型调用。

## 本轮最终记录统计

本仓记录 20 条：pending 5、partial 15、historical 0；partial 中仅 ID 证明 13 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
