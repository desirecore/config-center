# moonshot：2026-10-03 字段复核与剩余过程

[官网证据](SOURCES.md) · [模型与接入导航](README.md)

本轮重读国内定价明文并补读K2.6/K2.7 Code指南。K3国内输入20/输出100/cache2 CNY/M已补Provider，纠正“未返回国内单价”旧说明；缓存写入TTL5min20、TTL1h40另记边界，不新增未验证客户端字段。当前K2.7Code 6.5/27/cache1.3，高速13/54/cache2.6，K2.6 6.5/27/cache1.1均经国内表核验。

K2.6与K2.7指南max_tokens=32768是默认值，不是输出上限证明；因此未机械替换共享规格的16384，原有最大输出仍待核。K2.6能关思考且温度固定思考1/非思考0.6；K2.7不能关思考且温度1。K3已有推理合同保持，实际输出上限需扣除占用窗口。图片仅base64，不支持URL，需要客户端单独验收。

下一步取得K2确切最大输出、top_p/工具强制模式与回放限制；核K2.5和Moonshot V1是否当前可用及旧价，国内目录缺席不等于退役。订阅/聚合平台不可继承这些原厂价格。

## 待核实队列

本轮收尾快照：21条接入面记录，14 pending，0条partial只核ID；同一模型可占多条，非独立型号数。partial是已列字段证明，不是全部通过。

### 尚无字段证明

- `compute/coding-plans/moonshot-coding.json`：`kimi-for-coding`。
- `compute/model-specs/moonshot.json`：`kimi-k2-thinking`、`kimi-k2.5`、`kimi-k2`、`moonshot-v1-128k`、`moonshot-v1-32k`、`moonshot-v1-8k`。
- `compute/providers/moonshot.json`：`kimi-k2.5`、`moonshot-v1-128k-vision-preview`、`moonshot-v1-128k`、`moonshot-v1-32k-vision-preview`、`moonshot-v1-32k`、`moonshot-v1-8k-vision-preview`、`moonshot-v1-8k`。

### 仅ID有证明

无。

## 完成标准

逐条打开对应官网正文/官方API，按原厂、套餐、地域分别登记精确参数和单位；有差异才改canonical JSON，同步该模型详情、字段引用和指纹。保留未证实字段。运行来源/结构测试；协议改动需客户端和实际调用验收。没有账号授权，本轮未执行收费模型调用。

## 本轮最终记录统计

本仓记录 21 条：pending 14、partial 7、historical 0；partial 中仅 ID 证明 0 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
