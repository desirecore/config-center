# 快手 StreamLake Coding：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### kwai-current

- 入口：[kwai-current](https://www.streamlake.ai/document/DOC/mg6k6nlp8j6qxicx4c9)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`StreamLake 国际 Coding Plan；不覆盖国内 wanqing 别名`。

## 已知边界与核验说明

已找到 StreamLake 官网文档，确认国际 Coding Plan 使用 vanchin.streamlake.ai 和 kat-coder-pro-v2.5。当前仓库是国内 wanqing.streamlakeapi.com 的 kwai-coder 接入；不能将国际端点直接覆盖国内配置。原先论文入口不作为这里的官网主证据。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "kwai",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "kwai-current",
      "url": "https://www.streamlake.ai/document/DOC/mg6k6nlp8j6qxicx4c9",
      "kind": "official-doc",
      "scope": "StreamLake 国际 Coding Plan；不覆盖国内 wanqing 别名",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "8775665035fa5f6f4edfae825828e6e75d715e3705dac7de37583e35b2d04b23",
      "resolvedUrl": "https://www.streamlake.ai/document/DOC/mg6k6nlp8j6qxicx4c9"
    }
  ]
}
```
<!-- source-metadata:end -->
