# xiaomi：2026-10-03 字段复核与剩余过程

[官网证据](SOURCES.md) · [模型与接入导航](README.md)

本轮补读官方模型列表、国内/海外分表定价、Token Plan和发布文章。普通API已核当前文本模型窗口与输出短写、国内输入/输出/缓存价，补MiMo-V2.5-Pro缺失3/6/cache0.025 CNY/M；ASR目录8K/2K已核。1M按1000000、128K按131072、8K按8192、2K按2048是本仓明确换算约定，短写不声称官网已给精确整数。TTS目录列8K/8K，未把该限制新加入客户端媒体协议。

V2.5和V2.5-Pro退役时间为2026-10-21北京时间10:00，保留到期前可用记录。ASR按输入小时、TTS限时免费、Batch半价、联网调用计次不可写成token价。UltraSpeed需定制配额，不进普通Token Plan。MiMo-X预览不在当前公开目录，缺席不构成退役证明。

下一步核实thinking/default/可关闭、采样、具体音频格式与端点、API对K/M的精确整数；到期按实际状态同步Provider tombstones和默认云端summary选择。

## 待核实队列

本轮收尾快照：25条接入面记录，8 pending，7条partial只核ID；同一模型可占多条，非独立型号数。partial是已列字段证明，不是全部通过。

### 尚无字段证明

- `compute/model-specs/xiaomi.json`：`mimo-v2-flash`、`mimo-v2-omni`、`mimo-v2-pro`、`mimo-v2-tts`、`mimo-x-flash-preview`、`mimo-x-pro-preview`。
- `compute/providers/xiaomi.json`：`mimo-x-flash-preview`、`mimo-x-pro-preview`。

### 仅ID有证明

- `compute/providers/xiaomi.json`：`mimo-v2.5-tts-voiceclone`、`mimo-v2.5-tts-voicedesign`、`mimo-v2.5-tts`。
- `compute/model-specs/xiaomi.json`：`mimo-v2.5-tts-voiceclone`、`mimo-v2.5-tts-voicedesign`、`mimo-v2.5-tts`、`mimo-v2.5`。

## 完成标准

逐条打开对应官网正文/官方API，按原厂、套餐、地域分别登记精确参数和单位；有差异才改canonical JSON，同步该模型详情、字段引用和指纹。保留未证实字段。运行来源/结构测试；协议改动需客户端和实际调用验收。没有账号授权，本轮未执行收费模型调用。

## 本轮最终记录统计

本仓记录 25 条：pending 8、partial 17、historical 0；partial 中仅 ID 证明 7 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
