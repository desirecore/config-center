# Ollama：官网证据目录

[供应商索引](README.md)

核验日期：2026-10-03。这里只登记可复用的官网证据与适用边界，具体模型与接入面分别记录。

## 官网证据

### ollama

- 入口：[ollama](https://ollama.com/blog)
- 类型：`official-doc`；当前读取状态：`fetched`；地域/接入面：`ollama 官方入口；具体地域与接入面待该页面逐字段确认`。

### ollama-llama31-70b

- 入口：[ollama-llama31-70b](https://ollama.com/library/llama3.1:70b)
- 类型：`official-doc`；读取状态：`fetched`；适用范围：Ollama 官方模型库 llama3.1:70b 页；2026-10-05 只核对 tools 能力标记。

## 已知边界与核验说明

本地模型是否安装由本机发现接口决定。官网产品动态只证明运行器更新，不能证明用户已安装新模型。

2026-10-05 工具调用核对：以上 `ollama-llama31-70b` 只用于核对函数 / 工具调用是否受支持，读取日期 2026-10-05；没有借此复核窗口、价格等其他字段，也没有做账号调用验收。能力标签里只有 `tool_use` 一项以这些来源为依据。

状态 `partial` 仅表示列出的字段已核实；不能推断整条配置、价格、账号权限或真实模型调用都已验收。`pending` 没有已核字段；`historical` 只作历史兼容参考。路由 tier/priority、产品标签和默认选择属于本仓策略，不伪装成官网数据。

<!-- source-metadata:start -->
```json
{
  "formatVersion": 1,
  "supplier": "ollama",
  "checkedAt": "2026-10-03",
  "sources": [
    {
      "id": "ollama",
      "url": "https://ollama.com/blog",
      "kind": "official-doc",
      "scope": "ollama 官方入口；具体地域与接入面待该页面逐字段确认",
      "retrieval": "fetched",
      "checkedAt": "2026-10-03",
      "contentSha256": "13d9d182a6ebedb79ceb57181c1471ee809cfd38b43cdc3accc783df9e70023e",
      "resolvedUrl": "https://ollama.com/blog"
    },
    {
      "id": "ollama-llama31-70b",
      "url": "https://ollama.com/library/llama3.1:70b",
      "kind": "official-doc",
      "scope": "Ollama 官方模型库 llama3.1:70b 页；2026-10-05 只核对 tools 能力标记",
      "retrieval": "fetched",
      "checkedAt": "2026-10-05",
      "contentSha256": "1621196d2098f28ef6e16f9320276e30b3c5363b237796cc1dbd76168094a259",
      "resolvedUrl": "https://ollama.com/library/llama3.1:70b"
    }
  ]
}
```
<!-- source-metadata:end -->
