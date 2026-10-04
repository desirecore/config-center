# 2026-10-04：来源重新检索与复核

基线 main `987f286c8672a498de099eba49d274d067340a9b`，数据版本128。本轮实际重新访问官网、官方代码和模型卡，部分页面使用渲染浏览器；可信第三方单独标识。626条模型记录全部覆盖，API合同6条及本仓策略3条另列。

## 最新发布状态

客户端[PR #4042](https://github.com/desirecore/desirecore/pull/4042)仍OPEN，head `14c4f36c487dc59458ef8d62af4fc12c94fc370e`。检查快照：gate-static=FAILURE、Gate=SUCCESS、standalone-smoke=SUCCESS、gate-unit=FAILURE、macOS-arm64=SUCCESS、Linux-x64=SUCCESS、Windows-x64=SUCCESS、Record additional-architecture verification=SKIPPED、gate-resource=SUCCESS；正式版本v10.0.177。V2保持candidate及空最低版本，不因文档补证而启用。

## 模型重检结论

| 结论 | 记录数 |
| --- | ---: |
| 仍未解决 | 131 |
| 仅官方身份 | 179 |
| 数值/语义/生命周期事项 | 70 |
| 部分官方字段候选 | 220 |
| 仅接入/产品入口 | 24 |
| 历史适用 | 2 |

这些是重检候选分类，不是整条记录全部已核。来源读取314次，其中257次可读，306个不同URL；2265项字段候选，含重复接入及已有字段再核。字段、价格币种、计价单位、地域、型号版本、API/订阅范围分别保留。对照原值取V1兼容投影，表格另列V2规范值及定位；规范值为候选合同的静态解析，不代表已发布或可调用。

## 优先复核

- Infini的deepseek-v3精确下线记录；不扩大为整个域名停服。
- 火山及腾讯Coding Plan已停/将停的具体型号，直连API分别判断。
- OpenAI Codex订阅退役与API仍可用的区别，以及未来API停服预告。
- Perplexity Sonar迁移：同步/流式渐进重写仍工作，异步旧请求不再支持；不能说域名全停服。
- Google最大输入限制与总上下文窗口的语义，K/M缩写及缓存/阶梯/平台价格不可比项。
- 豆包Global与Custom合同；Snippet数组类型、可空发布时间、仅示例ErrorCode规则。

## 细分记录

- [alibaba](providers/alibaba.md)：120条静态记录。
- [anthropic](providers/anthropic.md)：21条静态记录。
- [baichuan](providers/baichuan.md)：8条静态记录。
- [baidu](providers/baidu.md)：20条静态记录。
- [cohere](providers/cohere.md)：17条静态记录。
- [deepseek](providers/deepseek.md)：12条静态记录。
- [github-copilot](providers/github-copilot.md)：0条静态记录。
- [google](providers/google.md)：30条静态记录。
- [infini](providers/infini.md)：1条静态记录。
- [kling](providers/kling.md)：11条静态记录。
- [kwai](providers/kwai.md)：1条静态记录。
- [minimax](providers/minimax.md)：67条静态记录。
- [mistral](providers/mistral.md)：9条静态记录。
- [moonshot](providers/moonshot.md)：21条静态记录。
- [moorethread](providers/moorethread.md)：1条静态记录。
- [ollama](providers/ollama.md)：1条静态记录。
- [openai](providers/openai.md)：98条静态记录。
- [openrouter](providers/openrouter.md)：15条静态记录。
- [perplexity](providers/perplexity.md)：6条静态记录。
- [siliconflow](providers/siliconflow.md)：3条静态记录。
- [stability](providers/stability.md)：3条静态记录。
- [stealth](providers/stealth.md)：1条静态记录。
- [tencent](providers/tencent.md)：25条静态记录。
- [volcengine](providers/volcengine.md)：66条静态记录。
- [xai](providers/xai.md)：9条静态记录。
- [xiaomi](providers/xiaomi.md)：25条静态记录。
- [xunfei](providers/xunfei.md)：4条静态记录。
- [zhipu](providers/zhipu.md)：31条静态记录。

- [非模型API](api-contracts/)：六个独立合同记录。
- [本仓策略依据](policy-origins.md)：历史实现不等于批准或模型评测。
- `inventory.json`保存开始时原值及已登记证明；`review-data.json`保存全部候选、来源和剩余缺口。

## 统一复核与后续更新

临时XLSX保存在工作区outputs/source-review-20261004，包含记录复核、字段证据、来源读取；冲突排在前面，可筛选供应商和结论，填写采纳/需补证/不采纳及意见。每条记录使用稳定config#id，防止排序后意见错位。

本轮未修改canonical、原来源metadata状态、预设数据版本或客户端。采纳前复核精确ID/实参、来源正文、单位、适用地域与接入；只有适用字段才能迁入原细分来源文档。可信第三方、HTTP失败、页面壳、官方目录缺失、API示例或历史记录不得升级成完整官方参数或账号验收。

更新时先从canonical修改并编译，同步字段证明、指纹、规格索引及manifest，再跑完整校验。重检可运行：

```bash
node scripts/source-recheck-inventory.mjs YYYY-MM-DD
node scripts/assemble-source-recheck.mjs YYYY-MM-DD
```
