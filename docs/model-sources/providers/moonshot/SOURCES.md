# 月之暗面 Kimi：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### kimi-k3

- 入口：[kimi-k3](https://platform.kimi.com/docs/guide/kimi-k3-quickstart.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Kimi 国内 api.moonshot.cn/v1；K3 固定采样/思考合同`。
### kimi-pricing

- 入口：[kimi-pricing](https://platform.kimi.com/docs/pricing/chat.md)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`Kimi 国内人民币每百万token计价；本轮正文已返回K3与K2单价`。

### kimi-k26

- 入口：[kimi-k26](https://platform.kimi.com/docs/guide/kimi-k2-6-quickstart.md)
- 本轮实际读取正文；Kimi 国内原生 Chat Completions。

### kimi-k27

- 入口：[kimi-k27](https://platform.kimi.com/docs/guide/kimi-k2-7-code-quickstart.md)
- 本轮实际读取正文；Kimi 国内原生 Chat Completions。

## 已知边界与核验说明

K3 国内端点和 low/high/max（默认 max）、始终思考、固定采样参数已核对。max_completion_tokens 的默认值 131072 与允许设置上限 1048576 分开记录；实际输出受剩余窗口约束。早期读取未返回国内单价；本轮重读已返回K3与当前K2单价，已按国内CNY表补齐，未换算国际美元价。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

## 2026-10-03 字段复核：kimi-pricing

本轮正文已明确返回国内单价，纠正之前“未返回单价”的读取结论。K3 输入20、输出100、缓存命中2 CNY/M；缓存写入5分钟20、1小时40 CNY/M仅在文档说明，不新增客户端未验证字段。K2.7 Code 6.5/27/1.3、高速13/54/2.6、K2.6 6.5/27/1.1。各表窗口为1048576或262144。

## 2026-10-03 字段复核：kimi-k26

已核思考开关和固定temperature；max_tokens=32768 是默认值，不由此认定为最大输出。不得以该默认值替换共享规格输出上限。图片仅支持base64、视频支持声明格式；未实测客户端。

## 2026-10-03 字段复核：kimi-k27

已核思考开关和固定temperature；max_tokens=32768 是默认值，不由此认定为最大输出。不得以该默认值替换共享规格输出上限。图片仅支持base64、视频支持声明格式；未实测客户端。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "moonshot",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "kimi-k3",
      "url": "https://platform.kimi.com/docs/guide/kimi-k3-quickstart.md",
      "kind": "official-doc",
      "scope": "Kimi 国内 api.moonshot.cn/v1；K3 固定采样/思考合同",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "58cefbeb0d2707c8297c762aa64e3f36879d4074de2dba32006920dcb3fa944d",
      "resolvedUrl": "https://platform.kimi.com/docs/guide/kimi-k3-quickstart.md"
    },
    {
      "id": "kimi-pricing",
      "url": "https://platform.kimi.com/docs/pricing/chat.md",
      "kind": "official-doc",
      "scope": "Kimi 国内 CNY/百万token，K3及当前K2系列",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "fe0dad2bcf7ac9c6de011eb6d18f8e33b01b67e1aef7a9154664acc1b7225262",
      "resolvedUrl": "https://platform.kimi.com/docs/pricing/chat.md"
    },
    {
      "id": "kimi-k26",
      "url": "https://platform.kimi.com/docs/guide/kimi-k2-6-quickstart.md",
      "kind": "official-doc",
      "scope": "Kimi 国内原生 Chat Completions",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "5722f9999083ebac1347b1ccca13141f88ed32ae021361cce5084416cc8472b0",
      "resolvedUrl": "https://platform.kimi.com/docs/guide/kimi-k2-6-quickstart.md"
    },
    {
      "id": "kimi-k27",
      "url": "https://platform.kimi.com/docs/guide/kimi-k2-7-code-quickstart.md",
      "kind": "official-doc",
      "scope": "Kimi 国内原生 Chat Completions",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "60221158b8350411da7a768eb773023ac865d783ebb8d3ebcb403ab202ebd397",
      "resolvedUrl": "https://platform.kimi.com/docs/guide/kimi-k2-7-code-quickstart.md"
    }
  ]
}
```
<!-- source-metadata:end -->
