# Cohere：2026-10-03 数据核验与后续计划

[官网证据](SOURCES.md) · [供应商模型索引](README.md)

## 本轮完成

实读型号表、兼容接口、Embed与Rerank文档。核实Embed4/5原生维度与默认值，补Embed4共享规格；兼容Provider不新增dimensions参数。原生Rerank3.5确认4096限制，从不提供Rerank的compatibility/v1 Provider移除并登记tombstone，保留共享规格。原来2美元search unit被写入token价格的问题随错误接入移除，不新增伪造token价。

## 待完成与验收标准

| 事项 | 当前边界 | 下一步与完成条件 |
| --- | --- | --- |
| 原生Rerank3.5/4 | shared spec可以描述能力，但当前Provider仅Chat/文本Embed | 客户端支持原生/v2/rerank响应和search unit计价后增加独立Provider；不强挂OpenAI兼容端点 |
| 原生多模态Embed | 原生支持图片/PDF，兼容接口不同 | 分协议建立输入合同与fixture，验证实际返回维度与计费 |
| 原生窗口/输出简写 | 官方使用128k/64k等简写 | 明确K换算依据或取得API整数元数据后核验准确限制 |
| 价格 | 部分旧Command价格尚未逐项复核 | 官方pricing按模型与单位核查，保留未核边界，不把目录ID存在当价格正确 |
| North接入与规格 | 本轮canonical已规范north-mini-code-1-0，增加north-small-translate-1-0共享身份 | 旧简称仅本仓exact兼容；未上Provider，256k/64k与16k精确换算、价格、原生接口权限仍待核 |

没有账号实测；兼容接口证明只覆盖文档明确声明的合同。

## North精确身份修正

本轮以原厂型号表核准north-mini-code-1-0、north-small-translate-1-0，补读取两者独立官方页；Translate代码示例也明确同一ID。原North简称不再作为canonical或宽pattern，不宣称是原厂别名。两者未新增Provider。

## 本轮最终记录统计

本仓记录 17 条：pending 0、partial 17、historical 0；partial 中仅 ID 证明 9 条。此统计反映字段证明覆盖，不是账号调用或整条参数通过数量。
