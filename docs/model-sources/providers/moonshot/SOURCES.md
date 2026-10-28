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

## 2026-10-28 新型号核对

按量 API 与 Kimi Code 分开：原厂 ID 是 kimi-k3.1-pro / kimi-k3.1-pro-highspeed，默认 max，输出默认 131072、允许最大 1048576，输入与输出共享 1048576。Code 使用 k3.1-pro / k3.1-pro-highspeed；本次模型配置页写明默认 high（旧概览页写 max，采用逐型号表），Plus 的普通版预置窗口 262144，Pro/Allegretto 及以上可达 1048576，高速版要求 Pro/Allegretto 及以上；订阅输出上限未声明，V2 明确 null，V1 不填输出字段，短 ID 不添加全局 Spec 别名。定价 Markdown 当前表格为空，价格使用国内首页可读价格卡；没有据国际美元价换算。图片需 base64 或文件 ID，公网 URL 不支持；未验收客户端视觉转换和账号调用。

### kimi-k31

- 入口：[kimi-k31](https://platform.kimi.com/docs/guide/kimi-k3-1-pro-quickstart.md)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://platform.kimi.com/docs/guide/kimi-k3-1-pro-quickstart.md。
- 适用范围：Kimi 国内 Chat Completions；Pro/Highspeed 精确 ID、思考/采样/回放和 max_completion_tokens 限制。

### kimi-k31-pricing

- 入口：[kimi-k31-pricing](https://platform.kimi.com/)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://platform.kimi.com/。
- 适用范围：Kimi 国内官网首页完整价格卡；CNY/百万 tokens，普通版 13/68/1.3，高速版 26/136/1.3；缓存写入单列。

### kimi-k31-context

- 入口：[kimi-k31-context](https://platform.kimi.com/docs/pricing/chat.md)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://platform.kimi.com/docs/pricing/chat.md。
- 适用范围：Kimi 国内定价页正文明确 K3 系列上下文 1,048,576；本次该 Markdown 价格表为空，不能以此页证明价格。

### kimi-k31-code

- 入口：[kimi-k31-code](https://www.kimi.com/code/docs/en/kimi-code/models)。
- 读取日期：2026-10-28；状态：`fetched`；最终地址：https://www.kimi.com/code/docs/en/kimi-code/models。
- 适用范围：Kimi Code 独立订阅合同；短 ID、Plus/Pro 权限、262144/1048576 窗口和默认 high；没有输出上限字段。

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
    },
    {
      "id": "kimi-k31",
      "url": "https://platform.kimi.com/docs/guide/kimi-k3-1-pro-quickstart.md",
      "kind": "official-doc",
      "scope": "Kimi 国内 Chat Completions；Pro/Highspeed 精确 ID、思考/采样/回放和 max_completion_tokens 限制",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "b98a24beee67d8dbb381a56fe55bc2f36a64b72b247523ece9232f03ed9eb4ed",
      "resolvedUrl": "https://platform.kimi.com/docs/guide/kimi-k3-1-pro-quickstart.md"
    },
    {
      "id": "kimi-k31-pricing",
      "url": "https://platform.kimi.com/",
      "kind": "official-doc",
      "scope": "Kimi 国内官网首页完整价格卡；CNY/百万 tokens，普通版 13/68/1.3，高速版 26/136/1.3；缓存写入单列",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "6d84a072bfad119b97fcfe7db1de2238c384b463a2e9fb6701d3c49f46710404",
      "resolvedUrl": "https://platform.kimi.com/"
    },
    {
      "id": "kimi-k31-context",
      "url": "https://platform.kimi.com/docs/pricing/chat.md",
      "kind": "official-doc",
      "scope": "Kimi 国内定价页正文明确 K3 系列上下文 1,048,576；本次该 Markdown 价格表为空，不能以此页证明价格",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "186af0af5e8b174be988d2e1931978217a172603c54c439aa4ac973f0e79359e",
      "resolvedUrl": "https://platform.kimi.com/docs/pricing/chat.md"
    },
    {
      "id": "kimi-k31-code",
      "url": "https://www.kimi.com/code/docs/en/kimi-code/models",
      "kind": "official-doc",
      "scope": "Kimi Code 独立订阅合同；短 ID、Plus/Pro 权限、262144/1048576 窗口和默认 high；没有输出上限字段",
      "retrieval": "fetched",
      "checkedAt": "2026-10-28",
      "contentSha256": "74c22fd9407079293a9aac93af8627f7d4683f1a99ac91e82b6a273eed56a549",
      "resolvedUrl": "https://www.kimi.com/code/docs/en/kimi-code/models"
    }
  ]
}
```
<!-- source-metadata:end -->
