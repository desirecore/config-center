# alibaba：2026-10-03 字段复核与剩余过程

[官网证据](SOURCES.md) · [模型与接入导航](README.md)

本轮实际读取模型选择页、qwen3.7-max详情、定价表相关文本。qwen3.7-max 明示上下文1000000、非思考输入991808/思考输入983616、输出131072、思维链262144；不是把最大输入当总窗口。价格表北京原价qwen3.8-max12/36 CNY/M，Prime24/72；地域/Batch/缓存分表不能混用。既有记录已有qwen3.7-max核心证明，不因重复读取提高其他型号状态。此工作流不自动改阿里套餐模型参数，避免把普通API价格或国际GLM合同复制到国内套餐。

下一步按北京/新加坡/国际站分别打开每个精确型号页，优先 qwen3.8-max/flash、qwen3.7-plus、音视频/图像型号；对Token Plan和Coding Plan独立确认ID/窗口/推理约束。以下pending和仅ID记录都仍缺字段级证明，定价入口大量型号出现不代表所有值已复核。

## 待核实队列

本轮收尾快照：118条接入面记录，15 pending，96条partial只核ID；同一模型可占多条，非独立型号数。partial是已列字段证明，不是全部通过。

### 尚无字段证明

- `compute/providers/dashscope.json`：`cosyvoice-clone`、`qwen-image-3.0`、`wan2.7-image`。
- `compute/model-specs/qwen.json`：`cosyvoice-clone`、`qwen-image-3.0`、`qwen3-235b`、`qwen3-coder-480b`、`qwen3-coder`、`qwen3-max-trans`、`wan2.7-image`。
- `compute/coding-plans/dashscope-token-plan.json`：`deepseek-v4-pro`、`glm-5.3`、`glm-5`、`wan2.7-image`。
- `compute/coding-plans/dashscope-coding.json`：`glm-5`。

### 仅ID有证明

- `compute/providers/dashscope.json`：`cosyvoice-v2`、`happyhorse-1.0-i2v`、`happyhorse-1.0-r2v`、`happyhorse-1.0-t2v`、`paraformer-v2`、`qwen-image-2.0-pro`、`qwen-image-2.0`、`qwen-image-3.0-pro`、`qwen-long`、`qwen-mt-plus`、`qwen-omni-turbo`、`qwen3-rerank`、`qwen3-vl-flash`、`qwen3-vl-plus`、`qwen3.6-flash`、`qwen3.7-plus`、`qwen3.7-text-rerank`、`qwen3.8-flash`、`qwen3.8-max`、`text-embedding-v3`、`text-embedding-v4`、`wan2.2-t2i-flash`、`wan2.2-t2i-plus`、`wan2.6-t2i`、`wan2.6-t2v`、`wan2.7-image-pro`、`wan3.0-video-prime`、`wan3.0-video`。
- `compute/model-specs/qwen.json`：`cosyvoice-v2`、`paraformer-v2`、`qwen-image-2.0-pro`、`qwen-image-2.0`、`qwen-image-3.0-pro`、`qwen-long`、`qwen-max`、`qwen-omni-turbo`、`qwen-plus`、`qwen-turbo`、`qwen3-max`、`qwen3-rerank`、`qwen3-vl-flash`、`qwen3-vl-plus`、`qwen3.5-27b`、`qwen3.5-35b-a3b`、`qwen3.5-plus`、`qwen3.6-flash`、`qwen3.6-plus`、`qwen3.7-plus`、`qwen3.7-text-embedding-flash`、`qwen3.7-text-embedding`、`qwen3.7-text-rerank`、`qwen3.8-flash`、`qwen3.8-max-preview`、`qwen3.8-max-prime`、`qwen3.8-max`、`text-embedding-v3`、`text-embedding-v4`、`wan2.2-t2i-flash`、`wan2.2-t2i-plus`、`wan2.6-t2i`、`wan2.6-t2v`、`wan2.7-image-pro`。
- `compute/coding-plans/dashscope-token-plan.json`：`deepseek-v4-flash-0731`、`deepseek-v4-pro-0813`、`deepseek-v4.1-flash`、`glm-4.7`、`glm-5.2`、`happyhorse-1.1-i2v`、`happyhorse-1.1-r2v`、`happyhorse-1.1-t2v`、`kimi-k2.5`、`MiniMax-M2.5`、`qwen-image-3.0-pro`、`qwen3.6-flash`、`qwen3.6-plus`、`qwen3.7-plus`、`qwen3.8-flash`、`qwen3.8-max`、`wan2.7-image-pro`。
- `compute/coding-plans/dashscope-coding.json`：`glm-4.7`、`kimi-k2.5`、`MiniMax-M2.5`、`qwen3-coder-next`、`qwen3-coder-plus`、`qwen3-max-2026-01-23`、`qwen3.5-plus`、`qwen3.6-plus`、`qwen3.7-plus`。
- `compute/model-specs/happyhorse.json`：`happyhorse-1.0-i2v`、`happyhorse-1.0-r2v`、`happyhorse-1.0-t2v`、`happyhorse-1.1-i2v`、`happyhorse-1.1-r2v`、`happyhorse-1.1-t2v`。
- `compute/model-specs/wan.json`：`wan3.0-video-prime`、`wan3.0-video`。

## 完成标准

逐条打开对应官网正文/官方API，按原厂、套餐、地域分别登记精确参数和单位；有差异才改canonical JSON，同步该模型详情、字段引用和指纹。保留未证实字段。运行来源/结构测试；协议改动需客户端和实际调用验收。没有账号授权，本轮未执行收费模型调用。

## 本轮最终记录统计

本仓记录 118 条：pending 15、partial 103、historical 0；partial 中仅 ID 证明 96 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
