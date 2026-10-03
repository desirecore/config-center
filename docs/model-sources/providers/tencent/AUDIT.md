# tencent：2026-10-03 字段复核与剩余过程

[官网证据](SOURCES.md) · [模型与接入导航](README.md)

本轮实际读取腾讯2026-08-28官方Hy4 Preview公告，已将spec.releasedAt补为字段证据。公告只说上下文超过1M，不足以精确认证现有1048576；该整数继续待核。新闻列USD输入0.834/输出2.501/缓存0.042，不能复制成既有国内混元Provider的CNY定价。新闻提到TokenHub/OpenRouter，不证明hunyuan.tencentcloudapi.com旧端点兼容该新模型。

下一步核TokenHub独立endpoint/认证/模型ID/价格币种、精确输入输出和思考合同；支持后再接客户端和新增Provider。hy3及Hunyuan存量日期型号需各自原生合同，不由Hy4新闻提高状态。

## 待核实队列

本轮收尾快照：25条接入面记录，23 pending，1条partial只核ID；同一模型可占多条，非独立型号数。partial是已列字段证明，不是全部通过。

### 尚无字段证明

- `compute/coding-plans/tencent-token.json`：`glm-5.1`、`glm-5`、`hunyuan-2.0-instruct`、`hunyuan-2.0-thinking`、`hunyuan-t1`、`hunyuan-turbos`、`kimi-k2.5`、`minimax-m2.5`、`minimax-m2.7`、`tc-code-latest`。
- `compute/providers/tencent.json`：`hunyuan-2.0-instruct-20251111`、`hunyuan-2.0-thinking-20251109`、`hunyuan-t1-latest`、`hunyuan-t1-vision`、`hunyuan-turbos-latest`、`hunyuan-turbos-vision`。
- `compute/model-specs/tencent.json`：`hunyuan-2.0-instruct-20251111`、`hunyuan-2.0-thinking-20251109`、`hunyuan-t1-latest`、`hunyuan-t1-vision`、`hunyuan-turbos-latest`、`hunyuan-turbos-vision`、`hy3-preview`。

### 仅ID有证明

- `compute/model-specs/tencent.json`：`hy3`。

## 完成标准

逐条打开对应官网正文/官方API，按原厂、套餐、地域分别登记精确参数和单位；有差异才改canonical JSON，同步该模型详情、字段引用和指纹。保留未证实字段。运行来源/结构测试；协议改动需客户端和实际调用验收。没有账号授权，本轮未执行收费模型调用。

## 本轮最终记录统计

本仓记录 25 条：pending 23、partial 2、historical 0；partial 中仅 ID 证明 1 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
