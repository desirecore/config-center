var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/ajv/dist/compile/codegen/code.js
var require_code = __commonJS({
  "node_modules/ajv/dist/compile/codegen/code.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.regexpCode = exports2.getEsmExportName = exports2.getProperty = exports2.safeStringify = exports2.stringify = exports2.strConcat = exports2.addCodeArg = exports2.str = exports2._ = exports2.nil = exports2._Code = exports2.Name = exports2.IDENTIFIER = exports2._CodeOrName = void 0;
    var _CodeOrName = class {
    };
    exports2._CodeOrName = _CodeOrName;
    exports2.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var Name = class extends _CodeOrName {
      constructor(s) {
        super();
        if (!exports2.IDENTIFIER.test(s))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = s;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return false;
      }
      get names() {
        return { [this.str]: 1 };
      }
    };
    exports2.Name = Name;
    var _Code = class extends _CodeOrName {
      constructor(code) {
        super();
        this._items = typeof code === "string" ? [code] : code;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return false;
        const item = this._items[0];
        return item === "" || item === '""';
      }
      get str() {
        var _a;
        return (_a = this._str) !== null && _a !== void 0 ? _a : this._str = this._items.reduce((s, c) => `${s}${c}`, "");
      }
      get names() {
        var _a;
        return (_a = this._names) !== null && _a !== void 0 ? _a : this._names = this._items.reduce((names, c) => {
          if (c instanceof Name)
            names[c.str] = (names[c.str] || 0) + 1;
          return names;
        }, {});
      }
    };
    exports2._Code = _Code;
    exports2.nil = new _Code("");
    function _(strs, ...args) {
      const code = [strs[0]];
      let i = 0;
      while (i < args.length) {
        addCodeArg(code, args[i]);
        code.push(strs[++i]);
      }
      return new _Code(code);
    }
    exports2._ = _;
    var plus = new _Code("+");
    function str(strs, ...args) {
      const expr = [safeStringify(strs[0])];
      let i = 0;
      while (i < args.length) {
        expr.push(plus);
        addCodeArg(expr, args[i]);
        expr.push(plus, safeStringify(strs[++i]));
      }
      optimize(expr);
      return new _Code(expr);
    }
    exports2.str = str;
    function addCodeArg(code, arg) {
      if (arg instanceof _Code)
        code.push(...arg._items);
      else if (arg instanceof Name)
        code.push(arg);
      else
        code.push(interpolate(arg));
    }
    exports2.addCodeArg = addCodeArg;
    function optimize(expr) {
      let i = 1;
      while (i < expr.length - 1) {
        if (expr[i] === plus) {
          const res = mergeExprItems(expr[i - 1], expr[i + 1]);
          if (res !== void 0) {
            expr.splice(i - 1, 3, res);
            continue;
          }
          expr[i++] = "+";
        }
        i++;
      }
    }
    function mergeExprItems(a, b) {
      if (b === '""')
        return a;
      if (a === '""')
        return b;
      if (typeof a == "string") {
        if (b instanceof Name || a[a.length - 1] !== '"')
          return;
        if (typeof b != "string")
          return `${a.slice(0, -1)}${b}"`;
        if (b[0] === '"')
          return a.slice(0, -1) + b.slice(1);
        return;
      }
      if (typeof b == "string" && b[0] === '"' && !(a instanceof Name))
        return `"${a}${b.slice(1)}`;
      return;
    }
    function strConcat(c1, c2) {
      return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str`${c1}${c2}`;
    }
    exports2.strConcat = strConcat;
    function interpolate(x) {
      return typeof x == "number" || typeof x == "boolean" || x === null ? x : safeStringify(Array.isArray(x) ? x.join(",") : x);
    }
    function stringify(x) {
      return new _Code(safeStringify(x));
    }
    exports2.stringify = stringify;
    function safeStringify(x) {
      return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    exports2.safeStringify = safeStringify;
    function getProperty(key) {
      return typeof key == "string" && exports2.IDENTIFIER.test(key) ? new _Code(`.${key}`) : _`[${key}]`;
    }
    exports2.getProperty = getProperty;
    function getEsmExportName(key) {
      if (typeof key == "string" && exports2.IDENTIFIER.test(key)) {
        return new _Code(`${key}`);
      }
      throw new Error(`CodeGen: invalid export name: ${key}, use explicit $id name mapping`);
    }
    exports2.getEsmExportName = getEsmExportName;
    function regexpCode(rx) {
      return new _Code(rx.toString());
    }
    exports2.regexpCode = regexpCode;
  }
});

// node_modules/ajv/dist/compile/codegen/scope.js
var require_scope = __commonJS({
  "node_modules/ajv/dist/compile/codegen/scope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ValueScope = exports2.ValueScopeName = exports2.Scope = exports2.varKinds = exports2.UsedValueState = void 0;
    var code_1 = require_code();
    var ValueError = class extends Error {
      constructor(name) {
        super(`CodeGen: "code" for ${name} not defined`);
        this.value = name.value;
      }
    };
    var UsedValueState;
    (function(UsedValueState2) {
      UsedValueState2[UsedValueState2["Started"] = 0] = "Started";
      UsedValueState2[UsedValueState2["Completed"] = 1] = "Completed";
    })(UsedValueState || (exports2.UsedValueState = UsedValueState = {}));
    exports2.varKinds = {
      const: new code_1.Name("const"),
      let: new code_1.Name("let"),
      var: new code_1.Name("var")
    };
    var Scope = class {
      constructor({ prefixes, parent } = {}) {
        this._names = {};
        this._prefixes = prefixes;
        this._parent = parent;
      }
      toName(nameOrPrefix) {
        return nameOrPrefix instanceof code_1.Name ? nameOrPrefix : this.name(nameOrPrefix);
      }
      name(prefix) {
        return new code_1.Name(this._newName(prefix));
      }
      _newName(prefix) {
        const ng = this._names[prefix] || this._nameGroup(prefix);
        return `${prefix}${ng.index++}`;
      }
      _nameGroup(prefix) {
        var _a, _b;
        if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) {
          throw new Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
        }
        return this._names[prefix] = { prefix, index: 0 };
      }
    };
    exports2.Scope = Scope;
    var ValueScopeName = class extends code_1.Name {
      constructor(prefix, nameStr) {
        super(nameStr);
        this.prefix = prefix;
      }
      setValue(value, { property, itemIndex }) {
        this.value = value;
        this.scopePath = (0, code_1._)`.${new code_1.Name(property)}[${itemIndex}]`;
      }
    };
    exports2.ValueScopeName = ValueScopeName;
    var line = (0, code_1._)`\n`;
    var ValueScope = class extends Scope {
      constructor(opts) {
        super(opts);
        this._values = {};
        this._scope = opts.scope;
        this.opts = { ...opts, _n: opts.lines ? line : code_1.nil };
      }
      get() {
        return this._scope;
      }
      name(prefix) {
        return new ValueScopeName(prefix, this._newName(prefix));
      }
      value(nameOrPrefix, value) {
        var _a;
        if (value.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const name = this.toName(nameOrPrefix);
        const { prefix } = name;
        const valueKey = (_a = value.key) !== null && _a !== void 0 ? _a : value.ref;
        let vs = this._values[prefix];
        if (vs) {
          const _name = vs.get(valueKey);
          if (_name)
            return _name;
        } else {
          vs = this._values[prefix] = /* @__PURE__ */ new Map();
        }
        vs.set(valueKey, name);
        const s = this._scope[prefix] || (this._scope[prefix] = []);
        const itemIndex = s.length;
        s[itemIndex] = value.ref;
        name.setValue(value, { property: prefix, itemIndex });
        return name;
      }
      getValue(prefix, keyOrRef) {
        const vs = this._values[prefix];
        if (!vs)
          return;
        return vs.get(keyOrRef);
      }
      scopeRefs(scopeName, values = this._values) {
        return this._reduceValues(values, (name) => {
          if (name.scopePath === void 0)
            throw new Error(`CodeGen: name "${name}" has no value`);
          return (0, code_1._)`${scopeName}${name.scopePath}`;
        });
      }
      scopeCode(values = this._values, usedValues, getCode) {
        return this._reduceValues(values, (name) => {
          if (name.value === void 0)
            throw new Error(`CodeGen: name "${name}" has no value`);
          return name.value.code;
        }, usedValues, getCode);
      }
      _reduceValues(values, valueCode, usedValues = {}, getCode) {
        let code = code_1.nil;
        for (const prefix in values) {
          const vs = values[prefix];
          if (!vs)
            continue;
          const nameSet = usedValues[prefix] = usedValues[prefix] || /* @__PURE__ */ new Map();
          vs.forEach((name) => {
            if (nameSet.has(name))
              return;
            nameSet.set(name, UsedValueState.Started);
            let c = valueCode(name);
            if (c) {
              const def = this.opts.es5 ? exports2.varKinds.var : exports2.varKinds.const;
              code = (0, code_1._)`${code}${def} ${name} = ${c};${this.opts._n}`;
            } else if (c = getCode === null || getCode === void 0 ? void 0 : getCode(name)) {
              code = (0, code_1._)`${code}${c}${this.opts._n}`;
            } else {
              throw new ValueError(name);
            }
            nameSet.set(name, UsedValueState.Completed);
          });
        }
        return code;
      }
    };
    exports2.ValueScope = ValueScope;
  }
});

// node_modules/ajv/dist/compile/codegen/index.js
var require_codegen = __commonJS({
  "node_modules/ajv/dist/compile/codegen/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.or = exports2.and = exports2.not = exports2.CodeGen = exports2.operators = exports2.varKinds = exports2.ValueScopeName = exports2.ValueScope = exports2.Scope = exports2.Name = exports2.regexpCode = exports2.stringify = exports2.getProperty = exports2.nil = exports2.strConcat = exports2.str = exports2._ = void 0;
    var code_1 = require_code();
    var scope_1 = require_scope();
    var code_2 = require_code();
    Object.defineProperty(exports2, "_", { enumerable: true, get: function() {
      return code_2._;
    } });
    Object.defineProperty(exports2, "str", { enumerable: true, get: function() {
      return code_2.str;
    } });
    Object.defineProperty(exports2, "strConcat", { enumerable: true, get: function() {
      return code_2.strConcat;
    } });
    Object.defineProperty(exports2, "nil", { enumerable: true, get: function() {
      return code_2.nil;
    } });
    Object.defineProperty(exports2, "getProperty", { enumerable: true, get: function() {
      return code_2.getProperty;
    } });
    Object.defineProperty(exports2, "stringify", { enumerable: true, get: function() {
      return code_2.stringify;
    } });
    Object.defineProperty(exports2, "regexpCode", { enumerable: true, get: function() {
      return code_2.regexpCode;
    } });
    Object.defineProperty(exports2, "Name", { enumerable: true, get: function() {
      return code_2.Name;
    } });
    var scope_2 = require_scope();
    Object.defineProperty(exports2, "Scope", { enumerable: true, get: function() {
      return scope_2.Scope;
    } });
    Object.defineProperty(exports2, "ValueScope", { enumerable: true, get: function() {
      return scope_2.ValueScope;
    } });
    Object.defineProperty(exports2, "ValueScopeName", { enumerable: true, get: function() {
      return scope_2.ValueScopeName;
    } });
    Object.defineProperty(exports2, "varKinds", { enumerable: true, get: function() {
      return scope_2.varKinds;
    } });
    exports2.operators = {
      GT: new code_1._Code(">"),
      GTE: new code_1._Code(">="),
      LT: new code_1._Code("<"),
      LTE: new code_1._Code("<="),
      EQ: new code_1._Code("==="),
      NEQ: new code_1._Code("!=="),
      NOT: new code_1._Code("!"),
      OR: new code_1._Code("||"),
      AND: new code_1._Code("&&"),
      ADD: new code_1._Code("+")
    };
    var Node = class {
      optimizeNodes() {
        return this;
      }
      optimizeNames(_names, _constants) {
        return this;
      }
    };
    var Def = class extends Node {
      constructor(varKind, name, rhs) {
        super();
        this.varKind = varKind;
        this.name = name;
        this.rhs = rhs;
      }
      render({ es5, _n }) {
        const varKind = es5 ? scope_1.varKinds.var : this.varKind;
        const rhs = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${varKind} ${this.name}${rhs};` + _n;
      }
      optimizeNames(names, constants) {
        if (!names[this.name.str])
          return;
        if (this.rhs)
          this.rhs = optimizeExpr(this.rhs, names, constants);
        return this;
      }
      get names() {
        return this.rhs instanceof code_1._CodeOrName ? this.rhs.names : {};
      }
    };
    var Assign = class extends Node {
      constructor(lhs, rhs, sideEffects) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
        this.sideEffects = sideEffects;
      }
      render({ _n }) {
        return `${this.lhs} = ${this.rhs};` + _n;
      }
      optimizeNames(names, constants) {
        if (this.lhs instanceof code_1.Name && !names[this.lhs.str] && !this.sideEffects)
          return;
        this.rhs = optimizeExpr(this.rhs, names, constants);
        return this;
      }
      get names() {
        const names = this.lhs instanceof code_1.Name ? {} : { ...this.lhs.names };
        return addExprNames(names, this.rhs);
      }
    };
    var AssignOp = class extends Assign {
      constructor(lhs, op, rhs, sideEffects) {
        super(lhs, rhs, sideEffects);
        this.op = op;
      }
      render({ _n }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
      }
    };
    var Label = class extends Node {
      constructor(label) {
        super();
        this.label = label;
        this.names = {};
      }
      render({ _n }) {
        return `${this.label}:` + _n;
      }
    };
    var Break = class extends Node {
      constructor(label) {
        super();
        this.label = label;
        this.names = {};
      }
      render({ _n }) {
        const label = this.label ? ` ${this.label}` : "";
        return `break${label};` + _n;
      }
    };
    var Throw = class extends Node {
      constructor(error) {
        super();
        this.error = error;
      }
      render({ _n }) {
        return `throw ${this.error};` + _n;
      }
      get names() {
        return this.error.names;
      }
    };
    var AnyCode = class extends Node {
      constructor(code) {
        super();
        this.code = code;
      }
      render({ _n }) {
        return `${this.code};` + _n;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(names, constants) {
        this.code = optimizeExpr(this.code, names, constants);
        return this;
      }
      get names() {
        return this.code instanceof code_1._CodeOrName ? this.code.names : {};
      }
    };
    var ParentNode = class extends Node {
      constructor(nodes = []) {
        super();
        this.nodes = nodes;
      }
      render(opts) {
        return this.nodes.reduce((code, n) => code + n.render(opts), "");
      }
      optimizeNodes() {
        const { nodes } = this;
        let i = nodes.length;
        while (i--) {
          const n = nodes[i].optimizeNodes();
          if (Array.isArray(n))
            nodes.splice(i, 1, ...n);
          else if (n)
            nodes[i] = n;
          else
            nodes.splice(i, 1);
        }
        return nodes.length > 0 ? this : void 0;
      }
      optimizeNames(names, constants) {
        const { nodes } = this;
        let i = nodes.length;
        while (i--) {
          const n = nodes[i];
          if (n.optimizeNames(names, constants))
            continue;
          subtractNames(names, n.names);
          nodes.splice(i, 1);
        }
        return nodes.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((names, n) => addNames(names, n.names), {});
      }
    };
    var BlockNode = class extends ParentNode {
      render(opts) {
        return "{" + opts._n + super.render(opts) + "}" + opts._n;
      }
    };
    var Root = class extends ParentNode {
    };
    var Else = class extends BlockNode {
    };
    Else.kind = "else";
    var If = class _If extends BlockNode {
      constructor(condition, nodes) {
        super(nodes);
        this.condition = condition;
      }
      render(opts) {
        let code = `if(${this.condition})` + super.render(opts);
        if (this.else)
          code += "else " + this.else.render(opts);
        return code;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const cond = this.condition;
        if (cond === true)
          return this.nodes;
        let e = this.else;
        if (e) {
          const ns = e.optimizeNodes();
          e = this.else = Array.isArray(ns) ? new Else(ns) : ns;
        }
        if (e) {
          if (cond === false)
            return e instanceof _If ? e : e.nodes;
          if (this.nodes.length)
            return this;
          return new _If(not(cond), e instanceof _If ? [e] : e.nodes);
        }
        if (cond === false || !this.nodes.length)
          return void 0;
        return this;
      }
      optimizeNames(names, constants) {
        var _a;
        this.else = (_a = this.else) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
        if (!(super.optimizeNames(names, constants) || this.else))
          return;
        this.condition = optimizeExpr(this.condition, names, constants);
        return this;
      }
      get names() {
        const names = super.names;
        addExprNames(names, this.condition);
        if (this.else)
          addNames(names, this.else.names);
        return names;
      }
    };
    If.kind = "if";
    var For = class extends BlockNode {
    };
    For.kind = "for";
    var ForLoop = class extends For {
      constructor(iteration) {
        super();
        this.iteration = iteration;
      }
      render(opts) {
        return `for(${this.iteration})` + super.render(opts);
      }
      optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants))
          return;
        this.iteration = optimizeExpr(this.iteration, names, constants);
        return this;
      }
      get names() {
        return addNames(super.names, this.iteration.names);
      }
    };
    var ForRange = class extends For {
      constructor(varKind, name, from, to) {
        super();
        this.varKind = varKind;
        this.name = name;
        this.from = from;
        this.to = to;
      }
      render(opts) {
        const varKind = opts.es5 ? scope_1.varKinds.var : this.varKind;
        const { name, from, to } = this;
        return `for(${varKind} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(opts);
      }
      get names() {
        const names = addExprNames(super.names, this.from);
        return addExprNames(names, this.to);
      }
    };
    var ForIter = class extends For {
      constructor(loop, varKind, name, iterable) {
        super();
        this.loop = loop;
        this.varKind = varKind;
        this.name = name;
        this.iterable = iterable;
      }
      render(opts) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(opts);
      }
      optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants))
          return;
        this.iterable = optimizeExpr(this.iterable, names, constants);
        return this;
      }
      get names() {
        return addNames(super.names, this.iterable.names);
      }
    };
    var Func = class extends BlockNode {
      constructor(name, args, async) {
        super();
        this.name = name;
        this.args = args;
        this.async = async;
      }
      render(opts) {
        const _async = this.async ? "async " : "";
        return `${_async}function ${this.name}(${this.args})` + super.render(opts);
      }
    };
    Func.kind = "func";
    var Return = class extends ParentNode {
      render(opts) {
        return "return " + super.render(opts);
      }
    };
    Return.kind = "return";
    var Try = class extends BlockNode {
      render(opts) {
        let code = "try" + super.render(opts);
        if (this.catch)
          code += this.catch.render(opts);
        if (this.finally)
          code += this.finally.render(opts);
        return code;
      }
      optimizeNodes() {
        var _a, _b;
        super.optimizeNodes();
        (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNodes();
        (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNodes();
        return this;
      }
      optimizeNames(names, constants) {
        var _a, _b;
        super.optimizeNames(names, constants);
        (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
        (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNames(names, constants);
        return this;
      }
      get names() {
        const names = super.names;
        if (this.catch)
          addNames(names, this.catch.names);
        if (this.finally)
          addNames(names, this.finally.names);
        return names;
      }
    };
    var Catch = class extends BlockNode {
      constructor(error) {
        super();
        this.error = error;
      }
      render(opts) {
        return `catch(${this.error})` + super.render(opts);
      }
    };
    Catch.kind = "catch";
    var Finally = class extends BlockNode {
      render(opts) {
        return "finally" + super.render(opts);
      }
    };
    Finally.kind = "finally";
    var CodeGen = class {
      constructor(extScope, opts = {}) {
        this._values = {};
        this._blockStarts = [];
        this._constants = {};
        this.opts = { ...opts, _n: opts.lines ? "\n" : "" };
        this._extScope = extScope;
        this._scope = new scope_1.Scope({ parent: extScope });
        this._nodes = [new Root()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(prefix) {
        return this._scope.name(prefix);
      }
      // reserves unique name in the external scope
      scopeName(prefix) {
        return this._extScope.name(prefix);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(prefixOrName, value) {
        const name = this._extScope.value(prefixOrName, value);
        const vs = this._values[name.prefix] || (this._values[name.prefix] = /* @__PURE__ */ new Set());
        vs.add(name);
        return name;
      }
      getScopeValue(prefix, keyOrRef) {
        return this._extScope.getValue(prefix, keyOrRef);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(scopeName) {
        return this._extScope.scopeRefs(scopeName, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(varKind, nameOrPrefix, rhs, constant) {
        const name = this._scope.toName(nameOrPrefix);
        if (rhs !== void 0 && constant)
          this._constants[name.str] = rhs;
        this._leafNode(new Def(varKind, name, rhs));
        return name;
      }
      // `const` declaration (`var` in es5 mode)
      const(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.const, nameOrPrefix, rhs, _constant);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.let, nameOrPrefix, rhs, _constant);
      }
      // `var` declaration with optional assignment
      var(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.var, nameOrPrefix, rhs, _constant);
      }
      // assignment code
      assign(lhs, rhs, sideEffects) {
        return this._leafNode(new Assign(lhs, rhs, sideEffects));
      }
      // `+=` code
      add(lhs, rhs) {
        return this._leafNode(new AssignOp(lhs, exports2.operators.ADD, rhs));
      }
      // appends passed SafeExpr to code or executes Block
      code(c) {
        if (typeof c == "function")
          c();
        else if (c !== code_1.nil)
          this._leafNode(new AnyCode(c));
        return this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...keyValues) {
        const code = ["{"];
        for (const [key, value] of keyValues) {
          if (code.length > 1)
            code.push(",");
          code.push(key);
          if (key !== value || this.opts.es5) {
            code.push(":");
            (0, code_1.addCodeArg)(code, value);
          }
        }
        code.push("}");
        return new code_1._Code(code);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(condition, thenBody, elseBody) {
        this._blockNode(new If(condition));
        if (thenBody && elseBody) {
          this.code(thenBody).else().code(elseBody).endIf();
        } else if (thenBody) {
          this.code(thenBody).endIf();
        } else if (elseBody) {
          throw new Error('CodeGen: "else" body without "then" body');
        }
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(condition) {
        return this._elseNode(new If(condition));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new Else());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(If, Else);
      }
      _for(node, forBody) {
        this._blockNode(node);
        if (forBody)
          this.code(forBody).endFor();
        return this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(iteration, forBody) {
        return this._for(new ForLoop(iteration), forBody);
      }
      // `for` statement for a range of values
      forRange(nameOrPrefix, from, to, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.let) {
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new ForRange(varKind, name, from, to), () => forBody(name));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(nameOrPrefix, iterable, forBody, varKind = scope_1.varKinds.const) {
        const name = this._scope.toName(nameOrPrefix);
        if (this.opts.es5) {
          const arr = iterable instanceof code_1.Name ? iterable : this.var("_arr", iterable);
          return this.forRange("_i", 0, (0, code_1._)`${arr}.length`, (i) => {
            this.var(name, (0, code_1._)`${arr}[${i}]`);
            forBody(name);
          });
        }
        return this._for(new ForIter("of", varKind, name, iterable), () => forBody(name));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(nameOrPrefix, obj, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.const) {
        if (this.opts.ownProperties) {
          return this.forOf(nameOrPrefix, (0, code_1._)`Object.keys(${obj})`, forBody);
        }
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new ForIter("in", varKind, name, obj), () => forBody(name));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(For);
      }
      // `label` statement
      label(label) {
        return this._leafNode(new Label(label));
      }
      // `break` statement
      break(label) {
        return this._leafNode(new Break(label));
      }
      // `return` statement
      return(value) {
        const node = new Return();
        this._blockNode(node);
        this.code(value);
        if (node.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(Return);
      }
      // `try` statement
      try(tryBody, catchCode, finallyCode) {
        if (!catchCode && !finallyCode)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const node = new Try();
        this._blockNode(node);
        this.code(tryBody);
        if (catchCode) {
          const error = this.name("e");
          this._currNode = node.catch = new Catch(error);
          catchCode(error);
        }
        if (finallyCode) {
          this._currNode = node.finally = new Finally();
          this.code(finallyCode);
        }
        return this._endBlockNode(Catch, Finally);
      }
      // `throw` statement
      throw(error) {
        return this._leafNode(new Throw(error));
      }
      // start self-balancing block
      block(body, nodeCount) {
        this._blockStarts.push(this._nodes.length);
        if (body)
          this.code(body).endBlock(nodeCount);
        return this;
      }
      // end the current self-balancing block
      endBlock(nodeCount) {
        const len = this._blockStarts.pop();
        if (len === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const toClose = this._nodes.length - len;
        if (toClose < 0 || nodeCount !== void 0 && toClose !== nodeCount) {
          throw new Error(`CodeGen: wrong number of nodes: ${toClose} vs ${nodeCount} expected`);
        }
        this._nodes.length = len;
        return this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(name, args = code_1.nil, async, funcBody) {
        this._blockNode(new Func(name, args, async));
        if (funcBody)
          this.code(funcBody).endFunc();
        return this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(Func);
      }
      optimize(n = 1) {
        while (n-- > 0) {
          this._root.optimizeNodes();
          this._root.optimizeNames(this._root.names, this._constants);
        }
      }
      _leafNode(node) {
        this._currNode.nodes.push(node);
        return this;
      }
      _blockNode(node) {
        this._currNode.nodes.push(node);
        this._nodes.push(node);
      }
      _endBlockNode(N1, N2) {
        const n = this._currNode;
        if (n instanceof N1 || N2 && n instanceof N2) {
          this._nodes.pop();
          return this;
        }
        throw new Error(`CodeGen: not in block "${N2 ? `${N1.kind}/${N2.kind}` : N1.kind}"`);
      }
      _elseNode(node) {
        const n = this._currNode;
        if (!(n instanceof If)) {
          throw new Error('CodeGen: "else" without "if"');
        }
        this._currNode = n.else = node;
        return this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const ns = this._nodes;
        return ns[ns.length - 1];
      }
      set _currNode(node) {
        const ns = this._nodes;
        ns[ns.length - 1] = node;
      }
    };
    exports2.CodeGen = CodeGen;
    function addNames(names, from) {
      for (const n in from)
        names[n] = (names[n] || 0) + (from[n] || 0);
      return names;
    }
    function addExprNames(names, from) {
      return from instanceof code_1._CodeOrName ? addNames(names, from.names) : names;
    }
    function optimizeExpr(expr, names, constants) {
      if (expr instanceof code_1.Name)
        return replaceName(expr);
      if (!canOptimize(expr))
        return expr;
      return new code_1._Code(expr._items.reduce((items, c) => {
        if (c instanceof code_1.Name)
          c = replaceName(c);
        if (c instanceof code_1._Code)
          items.push(...c._items);
        else
          items.push(c);
        return items;
      }, []));
      function replaceName(n) {
        const c = constants[n.str];
        if (c === void 0 || names[n.str] !== 1)
          return n;
        delete names[n.str];
        return c;
      }
      function canOptimize(e) {
        return e instanceof code_1._Code && e._items.some((c) => c instanceof code_1.Name && names[c.str] === 1 && constants[c.str] !== void 0);
      }
    }
    function subtractNames(names, from) {
      for (const n in from)
        names[n] = (names[n] || 0) - (from[n] || 0);
    }
    function not(x) {
      return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code_1._)`!${par(x)}`;
    }
    exports2.not = not;
    var andCode = mappend(exports2.operators.AND);
    function and(...args) {
      return args.reduce(andCode);
    }
    exports2.and = and;
    var orCode = mappend(exports2.operators.OR);
    function or(...args) {
      return args.reduce(orCode);
    }
    exports2.or = or;
    function mappend(op) {
      return (x, y) => x === code_1.nil ? y : y === code_1.nil ? x : (0, code_1._)`${par(x)} ${op} ${par(y)}`;
    }
    function par(x) {
      return x instanceof code_1.Name ? x : (0, code_1._)`(${x})`;
    }
  }
});

// node_modules/ajv/dist/compile/util.js
var require_util = __commonJS({
  "node_modules/ajv/dist/compile/util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.checkStrictMode = exports2.getErrorPath = exports2.Type = exports2.useFunc = exports2.setEvaluated = exports2.evaluatedPropsToName = exports2.mergeEvaluated = exports2.eachItem = exports2.unescapeJsonPointer = exports2.escapeJsonPointer = exports2.escapeFragment = exports2.unescapeFragment = exports2.schemaRefOrVal = exports2.schemaHasRulesButRef = exports2.schemaHasRules = exports2.checkUnknownRules = exports2.alwaysValidSchema = exports2.toHash = void 0;
    var codegen_1 = require_codegen();
    var code_1 = require_code();
    function toHash(arr) {
      const hash = {};
      for (const item of arr)
        hash[item] = true;
      return hash;
    }
    exports2.toHash = toHash;
    function alwaysValidSchema(it, schema) {
      if (typeof schema == "boolean")
        return schema;
      if (Object.keys(schema).length === 0)
        return true;
      checkUnknownRules(it, schema);
      return !schemaHasRules(schema, it.self.RULES.all);
    }
    exports2.alwaysValidSchema = alwaysValidSchema;
    function checkUnknownRules(it, schema = it.schema) {
      const { opts, self } = it;
      if (!opts.strictSchema)
        return;
      if (typeof schema === "boolean")
        return;
      const rules = self.RULES.keywords;
      for (const key in schema) {
        if (!rules[key])
          checkStrictMode(it, `unknown keyword: "${key}"`);
      }
    }
    exports2.checkUnknownRules = checkUnknownRules;
    function schemaHasRules(schema, rules) {
      if (typeof schema == "boolean")
        return !schema;
      for (const key in schema)
        if (rules[key])
          return true;
      return false;
    }
    exports2.schemaHasRules = schemaHasRules;
    function schemaHasRulesButRef(schema, RULES) {
      if (typeof schema == "boolean")
        return !schema;
      for (const key in schema)
        if (key !== "$ref" && RULES.all[key])
          return true;
      return false;
    }
    exports2.schemaHasRulesButRef = schemaHasRulesButRef;
    function schemaRefOrVal({ topSchemaRef, schemaPath }, schema, keyword, $data) {
      if (!$data) {
        if (typeof schema == "number" || typeof schema == "boolean")
          return schema;
        if (typeof schema == "string")
          return (0, codegen_1._)`${schema}`;
      }
      return (0, codegen_1._)`${topSchemaRef}${schemaPath}${(0, codegen_1.getProperty)(keyword)}`;
    }
    exports2.schemaRefOrVal = schemaRefOrVal;
    function unescapeFragment(str) {
      return unescapeJsonPointer(decodeURIComponent(str));
    }
    exports2.unescapeFragment = unescapeFragment;
    function escapeFragment(str) {
      return encodeURIComponent(escapeJsonPointer(str));
    }
    exports2.escapeFragment = escapeFragment;
    function escapeJsonPointer(str) {
      if (typeof str == "number")
        return `${str}`;
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    exports2.escapeJsonPointer = escapeJsonPointer;
    function unescapeJsonPointer(str) {
      return str.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    exports2.unescapeJsonPointer = unescapeJsonPointer;
    function eachItem(xs, f) {
      if (Array.isArray(xs)) {
        for (const x of xs)
          f(x);
      } else {
        f(xs);
      }
    }
    exports2.eachItem = eachItem;
    function makeMergeEvaluated({ mergeNames, mergeToName, mergeValues, resultToName }) {
      return (gen, from, to, toName) => {
        const res = to === void 0 ? from : to instanceof codegen_1.Name ? (from instanceof codegen_1.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof codegen_1.Name ? (mergeToName(gen, to, from), from) : mergeValues(from, to);
        return toName === codegen_1.Name && !(res instanceof codegen_1.Name) ? resultToName(gen, res) : res;
      };
    }
    exports2.mergeEvaluated = {
      props: makeMergeEvaluated({
        mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => {
          gen.if((0, codegen_1._)`${from} === true`, () => gen.assign(to, true), () => gen.assign(to, (0, codegen_1._)`${to} || {}`).code((0, codegen_1._)`Object.assign(${to}, ${from})`));
        }),
        mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => {
          if (from === true) {
            gen.assign(to, true);
          } else {
            gen.assign(to, (0, codegen_1._)`${to} || {}`);
            setEvaluated(gen, to, from);
          }
        }),
        mergeValues: (from, to) => from === true ? true : { ...from, ...to },
        resultToName: evaluatedPropsToName
      }),
      items: makeMergeEvaluated({
        mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => gen.assign(to, (0, codegen_1._)`${from} === true ? true : ${to} > ${from} ? ${to} : ${from}`)),
        mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => gen.assign(to, from === true ? true : (0, codegen_1._)`${to} > ${from} ? ${to} : ${from}`)),
        mergeValues: (from, to) => from === true ? true : Math.max(from, to),
        resultToName: (gen, items) => gen.var("items", items)
      })
    };
    function evaluatedPropsToName(gen, ps) {
      if (ps === true)
        return gen.var("props", true);
      const props = gen.var("props", (0, codegen_1._)`{}`);
      if (ps !== void 0)
        setEvaluated(gen, props, ps);
      return props;
    }
    exports2.evaluatedPropsToName = evaluatedPropsToName;
    function setEvaluated(gen, props, ps) {
      Object.keys(ps).forEach((p) => gen.assign((0, codegen_1._)`${props}${(0, codegen_1.getProperty)(p)}`, true));
    }
    exports2.setEvaluated = setEvaluated;
    var snippets = {};
    function useFunc(gen, f) {
      return gen.scopeValue("func", {
        ref: f,
        code: snippets[f.code] || (snippets[f.code] = new code_1._Code(f.code))
      });
    }
    exports2.useFunc = useFunc;
    var Type;
    (function(Type2) {
      Type2[Type2["Num"] = 0] = "Num";
      Type2[Type2["Str"] = 1] = "Str";
    })(Type || (exports2.Type = Type = {}));
    function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
      if (dataProp instanceof codegen_1.Name) {
        const isNumber = dataPropType === Type.Num;
        return jsPropertySyntax ? isNumber ? (0, codegen_1._)`"[" + ${dataProp} + "]"` : (0, codegen_1._)`"['" + ${dataProp} + "']"` : isNumber ? (0, codegen_1._)`"/" + ${dataProp}` : (0, codegen_1._)`"/" + ${dataProp}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return jsPropertySyntax ? (0, codegen_1.getProperty)(dataProp).toString() : "/" + escapeJsonPointer(dataProp);
    }
    exports2.getErrorPath = getErrorPath;
    function checkStrictMode(it, msg, mode = it.opts.strictSchema) {
      if (!mode)
        return;
      msg = `strict mode: ${msg}`;
      if (mode === true)
        throw new Error(msg);
      it.self.logger.warn(msg);
    }
    exports2.checkStrictMode = checkStrictMode;
  }
});

// node_modules/ajv/dist/compile/names.js
var require_names = __commonJS({
  "node_modules/ajv/dist/compile/names.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var names = {
      // validation function arguments
      data: new codegen_1.Name("data"),
      // data passed to validation function
      // args passed from referencing schema
      valCxt: new codegen_1.Name("valCxt"),
      // validation/data context - should not be used directly, it is destructured to the names below
      instancePath: new codegen_1.Name("instancePath"),
      parentData: new codegen_1.Name("parentData"),
      parentDataProperty: new codegen_1.Name("parentDataProperty"),
      rootData: new codegen_1.Name("rootData"),
      // root data - same as the data passed to the first/top validation function
      dynamicAnchors: new codegen_1.Name("dynamicAnchors"),
      // used to support recursiveRef and dynamicRef
      // function scoped variables
      vErrors: new codegen_1.Name("vErrors"),
      // null or array of validation errors
      errors: new codegen_1.Name("errors"),
      // counter of validation errors
      this: new codegen_1.Name("this"),
      // "globals"
      self: new codegen_1.Name("self"),
      scope: new codegen_1.Name("scope"),
      // JTD serialize/parse name for JSON string and position
      json: new codegen_1.Name("json"),
      jsonPos: new codegen_1.Name("jsonPos"),
      jsonLen: new codegen_1.Name("jsonLen"),
      jsonPart: new codegen_1.Name("jsonPart")
    };
    exports2.default = names;
  }
});

// node_modules/ajv/dist/compile/errors.js
var require_errors = __commonJS({
  "node_modules/ajv/dist/compile/errors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.extendErrors = exports2.resetErrorsCount = exports2.reportExtraError = exports2.reportError = exports2.keyword$DataError = exports2.keywordError = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var names_1 = require_names();
    exports2.keywordError = {
      message: ({ keyword }) => (0, codegen_1.str)`must pass "${keyword}" keyword validation`
    };
    exports2.keyword$DataError = {
      message: ({ keyword, schemaType }) => schemaType ? (0, codegen_1.str)`"${keyword}" keyword must be ${schemaType} ($data)` : (0, codegen_1.str)`"${keyword}" keyword is invalid ($data)`
    };
    function reportError(cxt, error = exports2.keywordError, errorPaths, overrideAllErrors) {
      const { it } = cxt;
      const { gen, compositeRule, allErrors } = it;
      const errObj = errorObjectCode(cxt, error, errorPaths);
      if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : compositeRule || allErrors) {
        addError(gen, errObj);
      } else {
        returnErrors(it, (0, codegen_1._)`[${errObj}]`);
      }
    }
    exports2.reportError = reportError;
    function reportExtraError(cxt, error = exports2.keywordError, errorPaths) {
      const { it } = cxt;
      const { gen, compositeRule, allErrors } = it;
      const errObj = errorObjectCode(cxt, error, errorPaths);
      addError(gen, errObj);
      if (!(compositeRule || allErrors)) {
        returnErrors(it, names_1.default.vErrors);
      }
    }
    exports2.reportExtraError = reportExtraError;
    function resetErrorsCount(gen, errsCount) {
      gen.assign(names_1.default.errors, errsCount);
      gen.if((0, codegen_1._)`${names_1.default.vErrors} !== null`, () => gen.if(errsCount, () => gen.assign((0, codegen_1._)`${names_1.default.vErrors}.length`, errsCount), () => gen.assign(names_1.default.vErrors, null)));
    }
    exports2.resetErrorsCount = resetErrorsCount;
    function extendErrors({ gen, keyword, schemaValue, data, errsCount, it }) {
      if (errsCount === void 0)
        throw new Error("ajv implementation error");
      const err = gen.name("err");
      gen.forRange("i", errsCount, names_1.default.errors, (i) => {
        gen.const(err, (0, codegen_1._)`${names_1.default.vErrors}[${i}]`);
        gen.if((0, codegen_1._)`${err}.instancePath === undefined`, () => gen.assign((0, codegen_1._)`${err}.instancePath`, (0, codegen_1.strConcat)(names_1.default.instancePath, it.errorPath)));
        gen.assign((0, codegen_1._)`${err}.schemaPath`, (0, codegen_1.str)`${it.errSchemaPath}/${keyword}`);
        if (it.opts.verbose) {
          gen.assign((0, codegen_1._)`${err}.schema`, schemaValue);
          gen.assign((0, codegen_1._)`${err}.data`, data);
        }
      });
    }
    exports2.extendErrors = extendErrors;
    function addError(gen, errObj) {
      const err = gen.const("err", errObj);
      gen.if((0, codegen_1._)`${names_1.default.vErrors} === null`, () => gen.assign(names_1.default.vErrors, (0, codegen_1._)`[${err}]`), (0, codegen_1._)`${names_1.default.vErrors}.push(${err})`);
      gen.code((0, codegen_1._)`${names_1.default.errors}++`);
    }
    function returnErrors(it, errs) {
      const { gen, validateName, schemaEnv } = it;
      if (schemaEnv.$async) {
        gen.throw((0, codegen_1._)`new ${it.ValidationError}(${errs})`);
      } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, errs);
        gen.return(false);
      }
    }
    var E = {
      keyword: new codegen_1.Name("keyword"),
      schemaPath: new codegen_1.Name("schemaPath"),
      // also used in JTD errors
      params: new codegen_1.Name("params"),
      propertyName: new codegen_1.Name("propertyName"),
      message: new codegen_1.Name("message"),
      schema: new codegen_1.Name("schema"),
      parentSchema: new codegen_1.Name("parentSchema")
    };
    function errorObjectCode(cxt, error, errorPaths) {
      const { createErrors } = cxt.it;
      if (createErrors === false)
        return (0, codegen_1._)`{}`;
      return errorObject(cxt, error, errorPaths);
    }
    function errorObject(cxt, error, errorPaths = {}) {
      const { gen, it } = cxt;
      const keyValues = [
        errorInstancePath(it, errorPaths),
        errorSchemaPath(cxt, errorPaths)
      ];
      extraErrorProps(cxt, error, keyValues);
      return gen.object(...keyValues);
    }
    function errorInstancePath({ errorPath }, { instancePath }) {
      const instPath = instancePath ? (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(instancePath, util_1.Type.Str)}` : errorPath;
      return [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, instPath)];
    }
    function errorSchemaPath({ keyword, it: { errSchemaPath } }, { schemaPath, parentSchema }) {
      let schPath = parentSchema ? errSchemaPath : (0, codegen_1.str)`${errSchemaPath}/${keyword}`;
      if (schemaPath) {
        schPath = (0, codegen_1.str)`${schPath}${(0, util_1.getErrorPath)(schemaPath, util_1.Type.Str)}`;
      }
      return [E.schemaPath, schPath];
    }
    function extraErrorProps(cxt, { params, message }, keyValues) {
      const { keyword, data, schemaValue, it } = cxt;
      const { opts, propertyName, topSchemaRef, schemaPath } = it;
      keyValues.push([E.keyword, keyword], [E.params, typeof params == "function" ? params(cxt) : params || (0, codegen_1._)`{}`]);
      if (opts.messages) {
        keyValues.push([E.message, typeof message == "function" ? message(cxt) : message]);
      }
      if (opts.verbose) {
        keyValues.push([E.schema, schemaValue], [E.parentSchema, (0, codegen_1._)`${topSchemaRef}${schemaPath}`], [names_1.default.data, data]);
      }
      if (propertyName)
        keyValues.push([E.propertyName, propertyName]);
    }
  }
});

// node_modules/ajv/dist/compile/validate/boolSchema.js
var require_boolSchema = __commonJS({
  "node_modules/ajv/dist/compile/validate/boolSchema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.boolOrEmptySchema = exports2.topBoolOrEmptySchema = void 0;
    var errors_1 = require_errors();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var boolError = {
      message: "boolean schema is false"
    };
    function topBoolOrEmptySchema(it) {
      const { gen, schema, validateName } = it;
      if (schema === false) {
        falseSchemaError(it, false);
      } else if (typeof schema == "object" && schema.$async === true) {
        gen.return(names_1.default.data);
      } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, null);
        gen.return(true);
      }
    }
    exports2.topBoolOrEmptySchema = topBoolOrEmptySchema;
    function boolOrEmptySchema(it, valid) {
      const { gen, schema } = it;
      if (schema === false) {
        gen.var(valid, false);
        falseSchemaError(it);
      } else {
        gen.var(valid, true);
      }
    }
    exports2.boolOrEmptySchema = boolOrEmptySchema;
    function falseSchemaError(it, overrideAllErrors) {
      const { gen, data } = it;
      const cxt = {
        gen,
        keyword: "false schema",
        data,
        schema: false,
        schemaCode: false,
        schemaValue: false,
        params: {},
        it
      };
      (0, errors_1.reportError)(cxt, boolError, void 0, overrideAllErrors);
    }
  }
});

// node_modules/ajv/dist/compile/rules.js
var require_rules = __commonJS({
  "node_modules/ajv/dist/compile/rules.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRules = exports2.isJSONType = void 0;
    var _jsonTypes = ["string", "number", "integer", "boolean", "null", "object", "array"];
    var jsonTypes = new Set(_jsonTypes);
    function isJSONType(x) {
      return typeof x == "string" && jsonTypes.has(x);
    }
    exports2.isJSONType = isJSONType;
    function getRules() {
      const groups = {
        number: { type: "number", rules: [] },
        string: { type: "string", rules: [] },
        array: { type: "array", rules: [] },
        object: { type: "object", rules: [] }
      };
      return {
        types: { ...groups, integer: true, boolean: true, null: true },
        rules: [{ rules: [] }, groups.number, groups.string, groups.array, groups.object],
        post: { rules: [] },
        all: {},
        keywords: {}
      };
    }
    exports2.getRules = getRules;
  }
});

// node_modules/ajv/dist/compile/validate/applicability.js
var require_applicability = __commonJS({
  "node_modules/ajv/dist/compile/validate/applicability.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.shouldUseRule = exports2.shouldUseGroup = exports2.schemaHasRulesForType = void 0;
    function schemaHasRulesForType({ schema, self }, type) {
      const group = self.RULES.types[type];
      return group && group !== true && shouldUseGroup(schema, group);
    }
    exports2.schemaHasRulesForType = schemaHasRulesForType;
    function shouldUseGroup(schema, group) {
      return group.rules.some((rule) => shouldUseRule(schema, rule));
    }
    exports2.shouldUseGroup = shouldUseGroup;
    function shouldUseRule(schema, rule) {
      var _a;
      return schema[rule.keyword] !== void 0 || ((_a = rule.definition.implements) === null || _a === void 0 ? void 0 : _a.some((kwd) => schema[kwd] !== void 0));
    }
    exports2.shouldUseRule = shouldUseRule;
  }
});

// node_modules/ajv/dist/compile/validate/dataType.js
var require_dataType = __commonJS({
  "node_modules/ajv/dist/compile/validate/dataType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.reportTypeError = exports2.checkDataTypes = exports2.checkDataType = exports2.coerceAndCheckDataType = exports2.getJSONTypes = exports2.getSchemaTypes = exports2.DataType = void 0;
    var rules_1 = require_rules();
    var applicability_1 = require_applicability();
    var errors_1 = require_errors();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var DataType;
    (function(DataType2) {
      DataType2[DataType2["Correct"] = 0] = "Correct";
      DataType2[DataType2["Wrong"] = 1] = "Wrong";
    })(DataType || (exports2.DataType = DataType = {}));
    function getSchemaTypes(schema) {
      const types = getJSONTypes(schema.type);
      const hasNull = types.includes("null");
      if (hasNull) {
        if (schema.nullable === false)
          throw new Error("type: null contradicts nullable: false");
      } else {
        if (!types.length && schema.nullable !== void 0) {
          throw new Error('"nullable" cannot be used without "type"');
        }
        if (schema.nullable === true)
          types.push("null");
      }
      return types;
    }
    exports2.getSchemaTypes = getSchemaTypes;
    function getJSONTypes(ts) {
      const types = Array.isArray(ts) ? ts : ts ? [ts] : [];
      if (types.every(rules_1.isJSONType))
        return types;
      throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
    }
    exports2.getJSONTypes = getJSONTypes;
    function coerceAndCheckDataType(it, types) {
      const { gen, data, opts } = it;
      const coerceTo = coerceToTypes(types, opts.coerceTypes);
      const checkTypes = types.length > 0 && !(coerceTo.length === 0 && types.length === 1 && (0, applicability_1.schemaHasRulesForType)(it, types[0]));
      if (checkTypes) {
        const wrongType = checkDataTypes(types, data, opts.strictNumbers, DataType.Wrong);
        gen.if(wrongType, () => {
          if (coerceTo.length)
            coerceData(it, types, coerceTo);
          else
            reportTypeError(it);
        });
      }
      return checkTypes;
    }
    exports2.coerceAndCheckDataType = coerceAndCheckDataType;
    var COERCIBLE = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
    function coerceToTypes(types, coerceTypes) {
      return coerceTypes ? types.filter((t) => COERCIBLE.has(t) || coerceTypes === "array" && t === "array") : [];
    }
    function coerceData(it, types, coerceTo) {
      const { gen, data, opts } = it;
      const dataType = gen.let("dataType", (0, codegen_1._)`typeof ${data}`);
      const coerced = gen.let("coerced", (0, codegen_1._)`undefined`);
      if (opts.coerceTypes === "array") {
        gen.if((0, codegen_1._)`${dataType} == 'object' && Array.isArray(${data}) && ${data}.length == 1`, () => gen.assign(data, (0, codegen_1._)`${data}[0]`).assign(dataType, (0, codegen_1._)`typeof ${data}`).if(checkDataTypes(types, data, opts.strictNumbers), () => gen.assign(coerced, data)));
      }
      gen.if((0, codegen_1._)`${coerced} !== undefined`);
      for (const t of coerceTo) {
        if (COERCIBLE.has(t) || t === "array" && opts.coerceTypes === "array") {
          coerceSpecificType(t);
        }
      }
      gen.else();
      reportTypeError(it);
      gen.endIf();
      gen.if((0, codegen_1._)`${coerced} !== undefined`, () => {
        gen.assign(data, coerced);
        assignParentData(it, coerced);
      });
      function coerceSpecificType(t) {
        switch (t) {
          case "string":
            gen.elseIf((0, codegen_1._)`${dataType} == "number" || ${dataType} == "boolean"`).assign(coerced, (0, codegen_1._)`"" + ${data}`).elseIf((0, codegen_1._)`${data} === null`).assign(coerced, (0, codegen_1._)`""`);
            return;
          case "number":
            gen.elseIf((0, codegen_1._)`${dataType} == "boolean" || ${data} === null
              || (${dataType} == "string" && ${data} && ${data} == +${data})`).assign(coerced, (0, codegen_1._)`+${data}`);
            return;
          case "integer":
            gen.elseIf((0, codegen_1._)`${dataType} === "boolean" || ${data} === null
              || (${dataType} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`).assign(coerced, (0, codegen_1._)`+${data}`);
            return;
          case "boolean":
            gen.elseIf((0, codegen_1._)`${data} === "false" || ${data} === 0 || ${data} === null`).assign(coerced, false).elseIf((0, codegen_1._)`${data} === "true" || ${data} === 1`).assign(coerced, true);
            return;
          case "null":
            gen.elseIf((0, codegen_1._)`${data} === "" || ${data} === 0 || ${data} === false`);
            gen.assign(coerced, null);
            return;
          case "array":
            gen.elseIf((0, codegen_1._)`${dataType} === "string" || ${dataType} === "number"
              || ${dataType} === "boolean" || ${data} === null`).assign(coerced, (0, codegen_1._)`[${data}]`);
        }
      }
    }
    function assignParentData({ gen, parentData, parentDataProperty }, expr) {
      gen.if((0, codegen_1._)`${parentData} !== undefined`, () => gen.assign((0, codegen_1._)`${parentData}[${parentDataProperty}]`, expr));
    }
    function checkDataType(dataType, data, strictNums, correct = DataType.Correct) {
      const EQ = correct === DataType.Correct ? codegen_1.operators.EQ : codegen_1.operators.NEQ;
      let cond;
      switch (dataType) {
        case "null":
          return (0, codegen_1._)`${data} ${EQ} null`;
        case "array":
          cond = (0, codegen_1._)`Array.isArray(${data})`;
          break;
        case "object":
          cond = (0, codegen_1._)`${data} && typeof ${data} == "object" && !Array.isArray(${data})`;
          break;
        case "integer":
          cond = numCond((0, codegen_1._)`!(${data} % 1) && !isNaN(${data})`);
          break;
        case "number":
          cond = numCond();
          break;
        default:
          return (0, codegen_1._)`typeof ${data} ${EQ} ${dataType}`;
      }
      return correct === DataType.Correct ? cond : (0, codegen_1.not)(cond);
      function numCond(_cond = codegen_1.nil) {
        return (0, codegen_1.and)((0, codegen_1._)`typeof ${data} == "number"`, _cond, strictNums ? (0, codegen_1._)`isFinite(${data})` : codegen_1.nil);
      }
    }
    exports2.checkDataType = checkDataType;
    function checkDataTypes(dataTypes, data, strictNums, correct) {
      if (dataTypes.length === 1) {
        return checkDataType(dataTypes[0], data, strictNums, correct);
      }
      let cond;
      const types = (0, util_1.toHash)(dataTypes);
      if (types.array && types.object) {
        const notObj = (0, codegen_1._)`typeof ${data} != "object"`;
        cond = types.null ? notObj : (0, codegen_1._)`!${data} || ${notObj}`;
        delete types.null;
        delete types.array;
        delete types.object;
      } else {
        cond = codegen_1.nil;
      }
      if (types.number)
        delete types.integer;
      for (const t in types)
        cond = (0, codegen_1.and)(cond, checkDataType(t, data, strictNums, correct));
      return cond;
    }
    exports2.checkDataTypes = checkDataTypes;
    var typeError = {
      message: ({ schema }) => `must be ${schema}`,
      params: ({ schema, schemaValue }) => typeof schema == "string" ? (0, codegen_1._)`{type: ${schema}}` : (0, codegen_1._)`{type: ${schemaValue}}`
    };
    function reportTypeError(it) {
      const cxt = getTypeErrorContext(it);
      (0, errors_1.reportError)(cxt, typeError);
    }
    exports2.reportTypeError = reportTypeError;
    function getTypeErrorContext(it) {
      const { gen, data, schema } = it;
      const schemaCode = (0, util_1.schemaRefOrVal)(it, schema, "type");
      return {
        gen,
        keyword: "type",
        data,
        schema: schema.type,
        schemaCode,
        schemaValue: schemaCode,
        parentSchema: schema,
        params: {},
        it
      };
    }
  }
});

// node_modules/ajv/dist/compile/validate/defaults.js
var require_defaults = __commonJS({
  "node_modules/ajv/dist/compile/validate/defaults.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.assignDefaults = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    function assignDefaults(it, ty) {
      const { properties, items } = it.schema;
      if (ty === "object" && properties) {
        for (const key in properties) {
          assignDefault(it, key, properties[key].default);
        }
      } else if (ty === "array" && Array.isArray(items)) {
        items.forEach((sch, i) => assignDefault(it, i, sch.default));
      }
    }
    exports2.assignDefaults = assignDefaults;
    function assignDefault(it, prop, defaultValue) {
      const { gen, compositeRule, data, opts } = it;
      if (defaultValue === void 0)
        return;
      const childData = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(prop)}`;
      if (compositeRule) {
        (0, util_1.checkStrictMode)(it, `default is ignored for: ${childData}`);
        return;
      }
      let condition = (0, codegen_1._)`${childData} === undefined`;
      if (opts.useDefaults === "empty") {
        condition = (0, codegen_1._)`${condition} || ${childData} === null || ${childData} === ""`;
      }
      gen.if(condition, (0, codegen_1._)`${childData} = ${(0, codegen_1.stringify)(defaultValue)}`);
    }
  }
});

// node_modules/ajv/dist/vocabularies/code.js
var require_code2 = __commonJS({
  "node_modules/ajv/dist/vocabularies/code.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateUnion = exports2.validateArray = exports2.usePattern = exports2.callValidateCode = exports2.schemaProperties = exports2.allSchemaProperties = exports2.noPropertyInData = exports2.propertyInData = exports2.isOwnProperty = exports2.hasPropFunc = exports2.reportMissingProp = exports2.checkMissingProp = exports2.checkReportMissingProp = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var names_1 = require_names();
    var util_2 = require_util();
    function checkReportMissingProp(cxt, prop) {
      const { gen, data, it } = cxt;
      gen.if(noPropertyInData(gen, data, prop, it.opts.ownProperties), () => {
        cxt.setParams({ missingProperty: (0, codegen_1._)`${prop}` }, true);
        cxt.error();
      });
    }
    exports2.checkReportMissingProp = checkReportMissingProp;
    function checkMissingProp({ gen, data, it: { opts } }, properties, missing) {
      return (0, codegen_1.or)(...properties.map((prop) => (0, codegen_1.and)(noPropertyInData(gen, data, prop, opts.ownProperties), (0, codegen_1._)`${missing} = ${prop}`)));
    }
    exports2.checkMissingProp = checkMissingProp;
    function reportMissingProp(cxt, missing) {
      cxt.setParams({ missingProperty: missing }, true);
      cxt.error();
    }
    exports2.reportMissingProp = reportMissingProp;
    function hasPropFunc(gen) {
      return gen.scopeValue("func", {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        ref: Object.prototype.hasOwnProperty,
        code: (0, codegen_1._)`Object.prototype.hasOwnProperty`
      });
    }
    exports2.hasPropFunc = hasPropFunc;
    function isOwnProperty(gen, data, property) {
      return (0, codegen_1._)`${hasPropFunc(gen)}.call(${data}, ${property})`;
    }
    exports2.isOwnProperty = isOwnProperty;
    function propertyInData(gen, data, property, ownProperties) {
      const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} !== undefined`;
      return ownProperties ? (0, codegen_1._)`${cond} && ${isOwnProperty(gen, data, property)}` : cond;
    }
    exports2.propertyInData = propertyInData;
    function noPropertyInData(gen, data, property, ownProperties) {
      const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} === undefined`;
      return ownProperties ? (0, codegen_1.or)(cond, (0, codegen_1.not)(isOwnProperty(gen, data, property))) : cond;
    }
    exports2.noPropertyInData = noPropertyInData;
    function allSchemaProperties(schemaMap) {
      return schemaMap ? Object.keys(schemaMap).filter((p) => p !== "__proto__") : [];
    }
    exports2.allSchemaProperties = allSchemaProperties;
    function schemaProperties(it, schemaMap) {
      return allSchemaProperties(schemaMap).filter((p) => !(0, util_1.alwaysValidSchema)(it, schemaMap[p]));
    }
    exports2.schemaProperties = schemaProperties;
    function callValidateCode({ schemaCode, data, it: { gen, topSchemaRef, schemaPath, errorPath }, it }, func, context, passSchema) {
      const dataAndSchema = passSchema ? (0, codegen_1._)`${schemaCode}, ${data}, ${topSchemaRef}${schemaPath}` : data;
      const valCxt = [
        [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, errorPath)],
        [names_1.default.parentData, it.parentData],
        [names_1.default.parentDataProperty, it.parentDataProperty],
        [names_1.default.rootData, names_1.default.rootData]
      ];
      if (it.opts.dynamicRef)
        valCxt.push([names_1.default.dynamicAnchors, names_1.default.dynamicAnchors]);
      const args = (0, codegen_1._)`${dataAndSchema}, ${gen.object(...valCxt)}`;
      return context !== codegen_1.nil ? (0, codegen_1._)`${func}.call(${context}, ${args})` : (0, codegen_1._)`${func}(${args})`;
    }
    exports2.callValidateCode = callValidateCode;
    var newRegExp = (0, codegen_1._)`new RegExp`;
    function usePattern({ gen, it: { opts } }, pattern) {
      const u = opts.unicodeRegExp ? "u" : "";
      const { regExp } = opts.code;
      const rx = regExp(pattern, u);
      return gen.scopeValue("pattern", {
        key: rx.toString(),
        ref: rx,
        code: (0, codegen_1._)`${regExp.code === "new RegExp" ? newRegExp : (0, util_2.useFunc)(gen, regExp)}(${pattern}, ${u})`
      });
    }
    exports2.usePattern = usePattern;
    function validateArray(cxt) {
      const { gen, data, keyword, it } = cxt;
      const valid = gen.name("valid");
      if (it.allErrors) {
        const validArr = gen.let("valid", true);
        validateItems(() => gen.assign(validArr, false));
        return validArr;
      }
      gen.var(valid, true);
      validateItems(() => gen.break());
      return valid;
      function validateItems(notValid) {
        const len = gen.const("len", (0, codegen_1._)`${data}.length`);
        gen.forRange("i", 0, len, (i) => {
          cxt.subschema({
            keyword,
            dataProp: i,
            dataPropType: util_1.Type.Num
          }, valid);
          gen.if((0, codegen_1.not)(valid), notValid);
        });
      }
    }
    exports2.validateArray = validateArray;
    function validateUnion(cxt) {
      const { gen, schema, keyword, it } = cxt;
      if (!Array.isArray(schema))
        throw new Error("ajv implementation error");
      const alwaysValid = schema.some((sch) => (0, util_1.alwaysValidSchema)(it, sch));
      if (alwaysValid && !it.opts.unevaluated)
        return;
      const valid = gen.let("valid", false);
      const schValid = gen.name("_valid");
      gen.block(() => schema.forEach((_sch, i) => {
        const schCxt = cxt.subschema({
          keyword,
          schemaProp: i,
          compositeRule: true
        }, schValid);
        gen.assign(valid, (0, codegen_1._)`${valid} || ${schValid}`);
        const merged = cxt.mergeValidEvaluated(schCxt, schValid);
        if (!merged)
          gen.if((0, codegen_1.not)(valid));
      }));
      cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
    }
    exports2.validateUnion = validateUnion;
  }
});

// node_modules/ajv/dist/compile/validate/keyword.js
var require_keyword = __commonJS({
  "node_modules/ajv/dist/compile/validate/keyword.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateKeywordUsage = exports2.validSchemaType = exports2.funcKeywordCode = exports2.macroKeywordCode = void 0;
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var code_1 = require_code2();
    var errors_1 = require_errors();
    function macroKeywordCode(cxt, def) {
      const { gen, keyword, schema, parentSchema, it } = cxt;
      const macroSchema = def.macro.call(it.self, schema, parentSchema, it);
      const schemaRef = useKeyword(gen, keyword, macroSchema);
      if (it.opts.validateSchema !== false)
        it.self.validateSchema(macroSchema, true);
      const valid = gen.name("valid");
      cxt.subschema({
        schema: macroSchema,
        schemaPath: codegen_1.nil,
        errSchemaPath: `${it.errSchemaPath}/${keyword}`,
        topSchemaRef: schemaRef,
        compositeRule: true
      }, valid);
      cxt.pass(valid, () => cxt.error(true));
    }
    exports2.macroKeywordCode = macroKeywordCode;
    function funcKeywordCode(cxt, def) {
      var _a;
      const { gen, keyword, schema, parentSchema, $data, it } = cxt;
      checkAsyncKeyword(it, def);
      const validate = !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate;
      const validateRef = useKeyword(gen, keyword, validate);
      const valid = gen.let("valid");
      cxt.block$data(valid, validateKeyword);
      cxt.ok((_a = def.valid) !== null && _a !== void 0 ? _a : valid);
      function validateKeyword() {
        if (def.errors === false) {
          assignValid();
          if (def.modifying)
            modifyData(cxt);
          reportErrs(() => cxt.error());
        } else {
          const ruleErrs = def.async ? validateAsync() : validateSync();
          if (def.modifying)
            modifyData(cxt);
          reportErrs(() => addErrs(cxt, ruleErrs));
        }
      }
      function validateAsync() {
        const ruleErrs = gen.let("ruleErrs", null);
        gen.try(() => assignValid((0, codegen_1._)`await `), (e) => gen.assign(valid, false).if((0, codegen_1._)`${e} instanceof ${it.ValidationError}`, () => gen.assign(ruleErrs, (0, codegen_1._)`${e}.errors`), () => gen.throw(e)));
        return ruleErrs;
      }
      function validateSync() {
        const validateErrs = (0, codegen_1._)`${validateRef}.errors`;
        gen.assign(validateErrs, null);
        assignValid(codegen_1.nil);
        return validateErrs;
      }
      function assignValid(_await = def.async ? (0, codegen_1._)`await ` : codegen_1.nil) {
        const passCxt = it.opts.passContext ? names_1.default.this : names_1.default.self;
        const passSchema = !("compile" in def && !$data || def.schema === false);
        gen.assign(valid, (0, codegen_1._)`${_await}${(0, code_1.callValidateCode)(cxt, validateRef, passCxt, passSchema)}`, def.modifying);
      }
      function reportErrs(errors) {
        var _a2;
        gen.if((0, codegen_1.not)((_a2 = def.valid) !== null && _a2 !== void 0 ? _a2 : valid), errors);
      }
    }
    exports2.funcKeywordCode = funcKeywordCode;
    function modifyData(cxt) {
      const { gen, data, it } = cxt;
      gen.if(it.parentData, () => gen.assign(data, (0, codegen_1._)`${it.parentData}[${it.parentDataProperty}]`));
    }
    function addErrs(cxt, errs) {
      const { gen } = cxt;
      gen.if((0, codegen_1._)`Array.isArray(${errs})`, () => {
        gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`).assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
        (0, errors_1.extendErrors)(cxt);
      }, () => cxt.error());
    }
    function checkAsyncKeyword({ schemaEnv }, def) {
      if (def.async && !schemaEnv.$async)
        throw new Error("async keyword in sync schema");
    }
    function useKeyword(gen, keyword, result) {
      if (result === void 0)
        throw new Error(`keyword "${keyword}" failed to compile`);
      return gen.scopeValue("keyword", typeof result == "function" ? { ref: result } : { ref: result, code: (0, codegen_1.stringify)(result) });
    }
    function validSchemaType(schema, schemaType, allowUndefined = false) {
      return !schemaType.length || schemaType.some((st) => st === "array" ? Array.isArray(schema) : st === "object" ? schema && typeof schema == "object" && !Array.isArray(schema) : typeof schema == st || allowUndefined && typeof schema == "undefined");
    }
    exports2.validSchemaType = validSchemaType;
    function validateKeywordUsage({ schema, opts, self, errSchemaPath }, def, keyword) {
      if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) {
        throw new Error("ajv implementation error");
      }
      const deps = def.dependencies;
      if (deps === null || deps === void 0 ? void 0 : deps.some((kwd) => !Object.prototype.hasOwnProperty.call(schema, kwd))) {
        throw new Error(`parent schema must have dependencies of ${keyword}: ${deps.join(",")}`);
      }
      if (def.validateSchema) {
        const valid = def.validateSchema(schema[keyword]);
        if (!valid) {
          const msg = `keyword "${keyword}" value is invalid at path "${errSchemaPath}": ` + self.errorsText(def.validateSchema.errors);
          if (opts.validateSchema === "log")
            self.logger.error(msg);
          else
            throw new Error(msg);
        }
      }
    }
    exports2.validateKeywordUsage = validateKeywordUsage;
  }
});

// node_modules/ajv/dist/compile/validate/subschema.js
var require_subschema = __commonJS({
  "node_modules/ajv/dist/compile/validate/subschema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.extendSubschemaMode = exports2.extendSubschemaData = exports2.getSubschema = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    function getSubschema(it, { keyword, schemaProp, schema, schemaPath, errSchemaPath, topSchemaRef }) {
      if (keyword !== void 0 && schema !== void 0) {
        throw new Error('both "keyword" and "schema" passed, only one allowed');
      }
      if (keyword !== void 0) {
        const sch = it.schema[keyword];
        return schemaProp === void 0 ? {
          schema: sch,
          schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}`,
          errSchemaPath: `${it.errSchemaPath}/${keyword}`
        } : {
          schema: sch[schemaProp],
          schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}${(0, codegen_1.getProperty)(schemaProp)}`,
          errSchemaPath: `${it.errSchemaPath}/${keyword}/${(0, util_1.escapeFragment)(schemaProp)}`
        };
      }
      if (schema !== void 0) {
        if (schemaPath === void 0 || errSchemaPath === void 0 || topSchemaRef === void 0) {
          throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        }
        return {
          schema,
          schemaPath,
          topSchemaRef,
          errSchemaPath
        };
      }
      throw new Error('either "keyword" or "schema" must be passed');
    }
    exports2.getSubschema = getSubschema;
    function extendSubschemaData(subschema, it, { dataProp, dataPropType: dpType, data, dataTypes, propertyName }) {
      if (data !== void 0 && dataProp !== void 0) {
        throw new Error('both "data" and "dataProp" passed, only one allowed');
      }
      const { gen } = it;
      if (dataProp !== void 0) {
        const { errorPath, dataPathArr, opts } = it;
        const nextData = gen.let("data", (0, codegen_1._)`${it.data}${(0, codegen_1.getProperty)(dataProp)}`, true);
        dataContextProps(nextData);
        subschema.errorPath = (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax)}`;
        subschema.parentDataProperty = (0, codegen_1._)`${dataProp}`;
        subschema.dataPathArr = [...dataPathArr, subschema.parentDataProperty];
      }
      if (data !== void 0) {
        const nextData = data instanceof codegen_1.Name ? data : gen.let("data", data, true);
        dataContextProps(nextData);
        if (propertyName !== void 0)
          subschema.propertyName = propertyName;
      }
      if (dataTypes)
        subschema.dataTypes = dataTypes;
      function dataContextProps(_nextData) {
        subschema.data = _nextData;
        subschema.dataLevel = it.dataLevel + 1;
        subschema.dataTypes = [];
        it.definedProperties = /* @__PURE__ */ new Set();
        subschema.parentData = it.data;
        subschema.dataNames = [...it.dataNames, _nextData];
      }
    }
    exports2.extendSubschemaData = extendSubschemaData;
    function extendSubschemaMode(subschema, { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors }) {
      if (compositeRule !== void 0)
        subschema.compositeRule = compositeRule;
      if (createErrors !== void 0)
        subschema.createErrors = createErrors;
      if (allErrors !== void 0)
        subschema.allErrors = allErrors;
      subschema.jtdDiscriminator = jtdDiscriminator;
      subschema.jtdMetadata = jtdMetadata;
    }
    exports2.extendSubschemaMode = extendSubschemaMode;
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/json-schema-traverse/index.js
var require_json_schema_traverse = __commonJS({
  "node_modules/json-schema-traverse/index.js"(exports2, module2) {
    "use strict";
    var traverse = module2.exports = function(schema, opts, cb) {
      if (typeof opts == "function") {
        cb = opts;
        opts = {};
      }
      cb = opts.cb || cb;
      var pre = typeof cb == "function" ? cb : cb.pre || function() {
      };
      var post = cb.post || function() {
      };
      _traverse(opts, pre, post, schema, "", schema);
    };
    traverse.keywords = {
      additionalItems: true,
      items: true,
      contains: true,
      additionalProperties: true,
      propertyNames: true,
      not: true,
      if: true,
      then: true,
      else: true
    };
    traverse.arrayKeywords = {
      items: true,
      allOf: true,
      anyOf: true,
      oneOf: true
    };
    traverse.propsKeywords = {
      $defs: true,
      definitions: true,
      properties: true,
      patternProperties: true,
      dependencies: true
    };
    traverse.skipKeywords = {
      default: true,
      enum: true,
      const: true,
      required: true,
      maximum: true,
      minimum: true,
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      multipleOf: true,
      maxLength: true,
      minLength: true,
      pattern: true,
      format: true,
      maxItems: true,
      minItems: true,
      uniqueItems: true,
      maxProperties: true,
      minProperties: true
    };
    function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
      if (schema && typeof schema == "object" && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for (var key in schema) {
          var sch = schema[key];
          if (Array.isArray(sch)) {
            if (key in traverse.arrayKeywords) {
              for (var i = 0; i < sch.length; i++)
                _traverse(opts, pre, post, sch[i], jsonPtr + "/" + key + "/" + i, rootSchema, jsonPtr, key, schema, i);
            }
          } else if (key in traverse.propsKeywords) {
            if (sch && typeof sch == "object") {
              for (var prop in sch)
                _traverse(opts, pre, post, sch[prop], jsonPtr + "/" + key + "/" + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
            }
          } else if (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) {
            _traverse(opts, pre, post, sch, jsonPtr + "/" + key, rootSchema, jsonPtr, key, schema);
          }
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      }
    }
    function escapeJsonPtr(str) {
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }
});

// node_modules/ajv/dist/compile/resolve.js
var require_resolve = __commonJS({
  "node_modules/ajv/dist/compile/resolve.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSchemaRefs = exports2.resolveUrl = exports2.normalizeId = exports2._getFullPath = exports2.getFullPath = exports2.inlineRef = void 0;
    var util_1 = require_util();
    var equal = require_fast_deep_equal();
    var traverse = require_json_schema_traverse();
    var SIMPLE_INLINED = /* @__PURE__ */ new Set([
      "type",
      "format",
      "pattern",
      "maxLength",
      "minLength",
      "maxProperties",
      "minProperties",
      "maxItems",
      "minItems",
      "maximum",
      "minimum",
      "uniqueItems",
      "multipleOf",
      "required",
      "enum",
      "const"
    ]);
    function inlineRef(schema, limit = true) {
      if (typeof schema == "boolean")
        return true;
      if (limit === true)
        return !hasRef(schema);
      if (!limit)
        return false;
      return countKeys(schema) <= limit;
    }
    exports2.inlineRef = inlineRef;
    var REF_KEYWORDS = /* @__PURE__ */ new Set([
      "$ref",
      "$recursiveRef",
      "$recursiveAnchor",
      "$dynamicRef",
      "$dynamicAnchor"
    ]);
    function hasRef(schema) {
      for (const key in schema) {
        if (REF_KEYWORDS.has(key))
          return true;
        const sch = schema[key];
        if (Array.isArray(sch) && sch.some(hasRef))
          return true;
        if (typeof sch == "object" && hasRef(sch))
          return true;
      }
      return false;
    }
    function countKeys(schema) {
      let count = 0;
      for (const key in schema) {
        if (key === "$ref")
          return Infinity;
        count++;
        if (SIMPLE_INLINED.has(key))
          continue;
        if (typeof schema[key] == "object") {
          (0, util_1.eachItem)(schema[key], (sch) => count += countKeys(sch));
        }
        if (count === Infinity)
          return Infinity;
      }
      return count;
    }
    function getFullPath(resolver, id = "", normalize) {
      if (normalize !== false)
        id = normalizeId(id);
      const p = resolver.parse(id);
      return _getFullPath(resolver, p);
    }
    exports2.getFullPath = getFullPath;
    function _getFullPath(resolver, p) {
      const serialized = resolver.serialize(p);
      return serialized.split("#")[0] + "#";
    }
    exports2._getFullPath = _getFullPath;
    var TRAILING_SLASH_HASH = /#\/?$/;
    function normalizeId(id) {
      return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
    }
    exports2.normalizeId = normalizeId;
    function resolveUrl(resolver, baseId, id) {
      id = normalizeId(id);
      return resolver.resolve(baseId, id);
    }
    exports2.resolveUrl = resolveUrl;
    var ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
    function getSchemaRefs(schema, baseId) {
      if (typeof schema == "boolean")
        return {};
      const { schemaId, uriResolver } = this.opts;
      const schId = normalizeId(schema[schemaId] || baseId);
      const baseIds = { "": schId };
      const pathPrefix = getFullPath(uriResolver, schId, false);
      const localRefs = {};
      const schemaRefs = /* @__PURE__ */ new Set();
      traverse(schema, { allKeys: true }, (sch, jsonPtr, _, parentJsonPtr) => {
        if (parentJsonPtr === void 0)
          return;
        const fullPath = pathPrefix + jsonPtr;
        let innerBaseId = baseIds[parentJsonPtr];
        if (typeof sch[schemaId] == "string")
          innerBaseId = addRef.call(this, sch[schemaId]);
        addAnchor.call(this, sch.$anchor);
        addAnchor.call(this, sch.$dynamicAnchor);
        baseIds[jsonPtr] = innerBaseId;
        function addRef(ref) {
          const _resolve = this.opts.uriResolver.resolve;
          ref = normalizeId(innerBaseId ? _resolve(innerBaseId, ref) : ref);
          if (schemaRefs.has(ref))
            throw ambiguos(ref);
          schemaRefs.add(ref);
          let schOrRef = this.refs[ref];
          if (typeof schOrRef == "string")
            schOrRef = this.refs[schOrRef];
          if (typeof schOrRef == "object") {
            checkAmbiguosRef(sch, schOrRef.schema, ref);
          } else if (ref !== normalizeId(fullPath)) {
            if (ref[0] === "#") {
              checkAmbiguosRef(sch, localRefs[ref], ref);
              localRefs[ref] = sch;
            } else {
              this.refs[ref] = fullPath;
            }
          }
          return ref;
        }
        function addAnchor(anchor) {
          if (typeof anchor == "string") {
            if (!ANCHOR.test(anchor))
              throw new Error(`invalid anchor "${anchor}"`);
            addRef.call(this, `#${anchor}`);
          }
        }
      });
      return localRefs;
      function checkAmbiguosRef(sch1, sch2, ref) {
        if (sch2 !== void 0 && !equal(sch1, sch2))
          throw ambiguos(ref);
      }
      function ambiguos(ref) {
        return new Error(`reference "${ref}" resolves to more than one schema`);
      }
    }
    exports2.getSchemaRefs = getSchemaRefs;
  }
});

// node_modules/ajv/dist/compile/validate/index.js
var require_validate = __commonJS({
  "node_modules/ajv/dist/compile/validate/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getData = exports2.KeywordCxt = exports2.validateFunctionCode = void 0;
    var boolSchema_1 = require_boolSchema();
    var dataType_1 = require_dataType();
    var applicability_1 = require_applicability();
    var dataType_2 = require_dataType();
    var defaults_1 = require_defaults();
    var keyword_1 = require_keyword();
    var subschema_1 = require_subschema();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var resolve_1 = require_resolve();
    var util_1 = require_util();
    var errors_1 = require_errors();
    function validateFunctionCode(it) {
      if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
          topSchemaObjCode(it);
          return;
        }
      }
      validateFunction(it, () => (0, boolSchema_1.topBoolOrEmptySchema)(it));
    }
    exports2.validateFunctionCode = validateFunctionCode;
    function validateFunction({ gen, validateName, schema, schemaEnv, opts }, body) {
      if (opts.code.es5) {
        gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${names_1.default.valCxt}`, schemaEnv.$async, () => {
          gen.code((0, codegen_1._)`"use strict"; ${funcSourceUrl(schema, opts)}`);
          destructureValCxtES5(gen, opts);
          gen.code(body);
        });
      } else {
        gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${destructureValCxt(opts)}`, schemaEnv.$async, () => gen.code(funcSourceUrl(schema, opts)).code(body));
      }
    }
    function destructureValCxt(opts) {
      return (0, codegen_1._)`{${names_1.default.instancePath}="", ${names_1.default.parentData}, ${names_1.default.parentDataProperty}, ${names_1.default.rootData}=${names_1.default.data}${opts.dynamicRef ? (0, codegen_1._)`, ${names_1.default.dynamicAnchors}={}` : codegen_1.nil}}={}`;
    }
    function destructureValCxtES5(gen, opts) {
      gen.if(names_1.default.valCxt, () => {
        gen.var(names_1.default.instancePath, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.instancePath}`);
        gen.var(names_1.default.parentData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentData}`);
        gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentDataProperty}`);
        gen.var(names_1.default.rootData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.rootData}`);
        if (opts.dynamicRef)
          gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.dynamicAnchors}`);
      }, () => {
        gen.var(names_1.default.instancePath, (0, codegen_1._)`""`);
        gen.var(names_1.default.parentData, (0, codegen_1._)`undefined`);
        gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`undefined`);
        gen.var(names_1.default.rootData, names_1.default.data);
        if (opts.dynamicRef)
          gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`{}`);
      });
    }
    function topSchemaObjCode(it) {
      const { schema, opts, gen } = it;
      validateFunction(it, () => {
        if (opts.$comment && schema.$comment)
          commentKeyword(it);
        checkNoDefault(it);
        gen.let(names_1.default.vErrors, null);
        gen.let(names_1.default.errors, 0);
        if (opts.unevaluated)
          resetEvaluated(it);
        typeAndKeywords(it);
        returnResults(it);
      });
      return;
    }
    function resetEvaluated(it) {
      const { gen, validateName } = it;
      it.evaluated = gen.const("evaluated", (0, codegen_1._)`${validateName}.evaluated`);
      gen.if((0, codegen_1._)`${it.evaluated}.dynamicProps`, () => gen.assign((0, codegen_1._)`${it.evaluated}.props`, (0, codegen_1._)`undefined`));
      gen.if((0, codegen_1._)`${it.evaluated}.dynamicItems`, () => gen.assign((0, codegen_1._)`${it.evaluated}.items`, (0, codegen_1._)`undefined`));
    }
    function funcSourceUrl(schema, opts) {
      const schId = typeof schema == "object" && schema[opts.schemaId];
      return schId && (opts.code.source || opts.code.process) ? (0, codegen_1._)`/*# sourceURL=${schId} */` : codegen_1.nil;
    }
    function subschemaCode(it, valid) {
      if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
          subSchemaObjCode(it, valid);
          return;
        }
      }
      (0, boolSchema_1.boolOrEmptySchema)(it, valid);
    }
    function schemaCxtHasRules({ schema, self }) {
      if (typeof schema == "boolean")
        return !schema;
      for (const key in schema)
        if (self.RULES.all[key])
          return true;
      return false;
    }
    function isSchemaObj(it) {
      return typeof it.schema != "boolean";
    }
    function subSchemaObjCode(it, valid) {
      const { schema, gen, opts } = it;
      if (opts.$comment && schema.$comment)
        commentKeyword(it);
      updateContext(it);
      checkAsyncSchema(it);
      const errsCount = gen.const("_errs", names_1.default.errors);
      typeAndKeywords(it, errsCount);
      gen.var(valid, (0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
    }
    function checkKeywords(it) {
      (0, util_1.checkUnknownRules)(it);
      checkRefsAndKeywords(it);
    }
    function typeAndKeywords(it, errsCount) {
      if (it.opts.jtd)
        return schemaKeywords(it, [], false, errsCount);
      const types = (0, dataType_1.getSchemaTypes)(it.schema);
      const checkedTypes = (0, dataType_1.coerceAndCheckDataType)(it, types);
      schemaKeywords(it, types, !checkedTypes, errsCount);
    }
    function checkRefsAndKeywords(it) {
      const { schema, errSchemaPath, opts, self } = it;
      if (schema.$ref && opts.ignoreKeywordsWithRef && (0, util_1.schemaHasRulesButRef)(schema, self.RULES)) {
        self.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
      }
    }
    function checkNoDefault(it) {
      const { schema, opts } = it;
      if (schema.default !== void 0 && opts.useDefaults && opts.strictSchema) {
        (0, util_1.checkStrictMode)(it, "default is ignored in the schema root");
      }
    }
    function updateContext(it) {
      const schId = it.schema[it.opts.schemaId];
      if (schId)
        it.baseId = (0, resolve_1.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
    }
    function checkAsyncSchema(it) {
      if (it.schema.$async && !it.schemaEnv.$async)
        throw new Error("async schema in sync schema");
    }
    function commentKeyword({ gen, schemaEnv, schema, errSchemaPath, opts }) {
      const msg = schema.$comment;
      if (opts.$comment === true) {
        gen.code((0, codegen_1._)`${names_1.default.self}.logger.log(${msg})`);
      } else if (typeof opts.$comment == "function") {
        const schemaPath = (0, codegen_1.str)`${errSchemaPath}/$comment`;
        const rootName = gen.scopeValue("root", { ref: schemaEnv.root });
        gen.code((0, codegen_1._)`${names_1.default.self}.opts.$comment(${msg}, ${schemaPath}, ${rootName}.schema)`);
      }
    }
    function returnResults(it) {
      const { gen, schemaEnv, validateName, ValidationError, opts } = it;
      if (schemaEnv.$async) {
        gen.if((0, codegen_1._)`${names_1.default.errors} === 0`, () => gen.return(names_1.default.data), () => gen.throw((0, codegen_1._)`new ${ValidationError}(${names_1.default.vErrors})`));
      } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, names_1.default.vErrors);
        if (opts.unevaluated)
          assignEvaluated(it);
        gen.return((0, codegen_1._)`${names_1.default.errors} === 0`);
      }
    }
    function assignEvaluated({ gen, evaluated, props, items }) {
      if (props instanceof codegen_1.Name)
        gen.assign((0, codegen_1._)`${evaluated}.props`, props);
      if (items instanceof codegen_1.Name)
        gen.assign((0, codegen_1._)`${evaluated}.items`, items);
    }
    function schemaKeywords(it, types, typeErrors, errsCount) {
      const { gen, schema, data, allErrors, opts, self } = it;
      const { RULES } = self;
      if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, util_1.schemaHasRulesButRef)(schema, RULES))) {
        gen.block(() => keywordCode(it, "$ref", RULES.all.$ref.definition));
        return;
      }
      if (!opts.jtd)
        checkStrictTypes(it, types);
      gen.block(() => {
        for (const group of RULES.rules)
          groupKeywords(group);
        groupKeywords(RULES.post);
      });
      function groupKeywords(group) {
        if (!(0, applicability_1.shouldUseGroup)(schema, group))
          return;
        if (group.type) {
          gen.if((0, dataType_2.checkDataType)(group.type, data, opts.strictNumbers));
          iterateKeywords(it, group);
          if (types.length === 1 && types[0] === group.type && typeErrors) {
            gen.else();
            (0, dataType_2.reportTypeError)(it);
          }
          gen.endIf();
        } else {
          iterateKeywords(it, group);
        }
        if (!allErrors)
          gen.if((0, codegen_1._)`${names_1.default.errors} === ${errsCount || 0}`);
      }
    }
    function iterateKeywords(it, group) {
      const { gen, schema, opts: { useDefaults } } = it;
      if (useDefaults)
        (0, defaults_1.assignDefaults)(it, group.type);
      gen.block(() => {
        for (const rule of group.rules) {
          if ((0, applicability_1.shouldUseRule)(schema, rule)) {
            keywordCode(it, rule.keyword, rule.definition, group.type);
          }
        }
      });
    }
    function checkStrictTypes(it, types) {
      if (it.schemaEnv.meta || !it.opts.strictTypes)
        return;
      checkContextTypes(it, types);
      if (!it.opts.allowUnionTypes)
        checkMultipleTypes(it, types);
      checkKeywordTypes(it, it.dataTypes);
    }
    function checkContextTypes(it, types) {
      if (!types.length)
        return;
      if (!it.dataTypes.length) {
        it.dataTypes = types;
        return;
      }
      types.forEach((t) => {
        if (!includesType(it.dataTypes, t)) {
          strictTypesError(it, `type "${t}" not allowed by context "${it.dataTypes.join(",")}"`);
        }
      });
      narrowSchemaTypes(it, types);
    }
    function checkMultipleTypes(it, ts) {
      if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) {
        strictTypesError(it, "use allowUnionTypes to allow union type keyword");
      }
    }
    function checkKeywordTypes(it, ts) {
      const rules = it.self.RULES.all;
      for (const keyword in rules) {
        const rule = rules[keyword];
        if (typeof rule == "object" && (0, applicability_1.shouldUseRule)(it.schema, rule)) {
          const { type } = rule.definition;
          if (type.length && !type.some((t) => hasApplicableType(ts, t))) {
            strictTypesError(it, `missing type "${type.join(",")}" for keyword "${keyword}"`);
          }
        }
      }
    }
    function hasApplicableType(schTs, kwdT) {
      return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
    }
    function includesType(ts, t) {
      return ts.includes(t) || t === "integer" && ts.includes("number");
    }
    function narrowSchemaTypes(it, withTypes) {
      const ts = [];
      for (const t of it.dataTypes) {
        if (includesType(withTypes, t))
          ts.push(t);
        else if (withTypes.includes("integer") && t === "number")
          ts.push("integer");
      }
      it.dataTypes = ts;
    }
    function strictTypesError(it, msg) {
      const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
      msg += ` at "${schemaPath}" (strictTypes)`;
      (0, util_1.checkStrictMode)(it, msg, it.opts.strictTypes);
    }
    var KeywordCxt = class {
      constructor(it, def, keyword) {
        (0, keyword_1.validateKeywordUsage)(it, def, keyword);
        this.gen = it.gen;
        this.allErrors = it.allErrors;
        this.keyword = keyword;
        this.data = it.data;
        this.schema = it.schema[keyword];
        this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data;
        this.schemaValue = (0, util_1.schemaRefOrVal)(it, this.schema, keyword, this.$data);
        this.schemaType = def.schemaType;
        this.parentSchema = it.schema;
        this.params = {};
        this.it = it;
        this.def = def;
        if (this.$data) {
          this.schemaCode = it.gen.const("vSchema", getData(this.$data, it));
        } else {
          this.schemaCode = this.schemaValue;
          if (!(0, keyword_1.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) {
            throw new Error(`${keyword} value must be ${JSON.stringify(def.schemaType)}`);
          }
        }
        if ("code" in def ? def.trackErrors : def.errors !== false) {
          this.errsCount = it.gen.const("_errs", names_1.default.errors);
        }
      }
      result(condition, successAction, failAction) {
        this.failResult((0, codegen_1.not)(condition), successAction, failAction);
      }
      failResult(condition, successAction, failAction) {
        this.gen.if(condition);
        if (failAction)
          failAction();
        else
          this.error();
        if (successAction) {
          this.gen.else();
          successAction();
          if (this.allErrors)
            this.gen.endIf();
        } else {
          if (this.allErrors)
            this.gen.endIf();
          else
            this.gen.else();
        }
      }
      pass(condition, failAction) {
        this.failResult((0, codegen_1.not)(condition), void 0, failAction);
      }
      fail(condition) {
        if (condition === void 0) {
          this.error();
          if (!this.allErrors)
            this.gen.if(false);
          return;
        }
        this.gen.if(condition);
        this.error();
        if (this.allErrors)
          this.gen.endIf();
        else
          this.gen.else();
      }
      fail$data(condition) {
        if (!this.$data)
          return this.fail(condition);
        const { schemaCode } = this;
        this.fail((0, codegen_1._)`${schemaCode} !== undefined && (${(0, codegen_1.or)(this.invalid$data(), condition)})`);
      }
      error(append, errorParams, errorPaths) {
        if (errorParams) {
          this.setParams(errorParams);
          this._error(append, errorPaths);
          this.setParams({});
          return;
        }
        this._error(append, errorPaths);
      }
      _error(append, errorPaths) {
        ;
        (append ? errors_1.reportExtraError : errors_1.reportError)(this, this.def.error, errorPaths);
      }
      $dataError() {
        (0, errors_1.reportError)(this, this.def.$dataError || errors_1.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0)
          throw new Error('add "trackErrors" to keyword definition');
        (0, errors_1.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(cond) {
        if (!this.allErrors)
          this.gen.if(cond);
      }
      setParams(obj, assign) {
        if (assign)
          Object.assign(this.params, obj);
        else
          this.params = obj;
      }
      block$data(valid, codeBlock, $dataValid = codegen_1.nil) {
        this.gen.block(() => {
          this.check$data(valid, $dataValid);
          codeBlock();
        });
      }
      check$data(valid = codegen_1.nil, $dataValid = codegen_1.nil) {
        if (!this.$data)
          return;
        const { gen, schemaCode, schemaType, def } = this;
        gen.if((0, codegen_1.or)((0, codegen_1._)`${schemaCode} === undefined`, $dataValid));
        if (valid !== codegen_1.nil)
          gen.assign(valid, true);
        if (schemaType.length || def.validateSchema) {
          gen.elseIf(this.invalid$data());
          this.$dataError();
          if (valid !== codegen_1.nil)
            gen.assign(valid, false);
        }
        gen.else();
      }
      invalid$data() {
        const { gen, schemaCode, schemaType, def, it } = this;
        return (0, codegen_1.or)(wrong$DataType(), invalid$DataSchema());
        function wrong$DataType() {
          if (schemaType.length) {
            if (!(schemaCode instanceof codegen_1.Name))
              throw new Error("ajv implementation error");
            const st = Array.isArray(schemaType) ? schemaType : [schemaType];
            return (0, codegen_1._)`${(0, dataType_2.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, dataType_2.DataType.Wrong)}`;
          }
          return codegen_1.nil;
        }
        function invalid$DataSchema() {
          if (def.validateSchema) {
            const validateSchemaRef = gen.scopeValue("validate$data", { ref: def.validateSchema });
            return (0, codegen_1._)`!${validateSchemaRef}(${schemaCode})`;
          }
          return codegen_1.nil;
        }
      }
      subschema(appl, valid) {
        const subschema = (0, subschema_1.getSubschema)(this.it, appl);
        (0, subschema_1.extendSubschemaData)(subschema, this.it, appl);
        (0, subschema_1.extendSubschemaMode)(subschema, appl);
        const nextContext = { ...this.it, ...subschema, items: void 0, props: void 0 };
        subschemaCode(nextContext, valid);
        return nextContext;
      }
      mergeEvaluated(schemaCxt, toName) {
        const { it, gen } = this;
        if (!it.opts.unevaluated)
          return;
        if (it.props !== true && schemaCxt.props !== void 0) {
          it.props = util_1.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
        }
        if (it.items !== true && schemaCxt.items !== void 0) {
          it.items = util_1.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
        }
      }
      mergeValidEvaluated(schemaCxt, valid) {
        const { it, gen } = this;
        if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
          gen.if(valid, () => this.mergeEvaluated(schemaCxt, codegen_1.Name));
          return true;
        }
      }
    };
    exports2.KeywordCxt = KeywordCxt;
    function keywordCode(it, keyword, def, ruleType) {
      const cxt = new KeywordCxt(it, def, keyword);
      if ("code" in def) {
        def.code(cxt, ruleType);
      } else if (cxt.$data && def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
      } else if ("macro" in def) {
        (0, keyword_1.macroKeywordCode)(cxt, def);
      } else if (def.compile || def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
      }
    }
    var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
    var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function getData($data, { dataLevel, dataNames, dataPathArr }) {
      let jsonPointer;
      let data;
      if ($data === "")
        return names_1.default.rootData;
      if ($data[0] === "/") {
        if (!JSON_POINTER.test($data))
          throw new Error(`Invalid JSON-pointer: ${$data}`);
        jsonPointer = $data;
        data = names_1.default.rootData;
      } else {
        const matches = RELATIVE_JSON_POINTER.exec($data);
        if (!matches)
          throw new Error(`Invalid JSON-pointer: ${$data}`);
        const up = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer === "#") {
          if (up >= dataLevel)
            throw new Error(errorMsg("property/index", up));
          return dataPathArr[dataLevel - up];
        }
        if (up > dataLevel)
          throw new Error(errorMsg("data", up));
        data = dataNames[dataLevel - up];
        if (!jsonPointer)
          return data;
      }
      let expr = data;
      const segments = jsonPointer.split("/");
      for (const segment of segments) {
        if (segment) {
          data = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)((0, util_1.unescapeJsonPointer)(segment))}`;
          expr = (0, codegen_1._)`${expr} && ${data}`;
        }
      }
      return expr;
      function errorMsg(pointerType, up) {
        return `Cannot access ${pointerType} ${up} levels up, current level is ${dataLevel}`;
      }
    }
    exports2.getData = getData;
  }
});

// node_modules/ajv/dist/runtime/validation_error.js
var require_validation_error = __commonJS({
  "node_modules/ajv/dist/runtime/validation_error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var ValidationError = class extends Error {
      constructor(errors) {
        super("validation failed");
        this.errors = errors;
        this.ajv = this.validation = true;
      }
    };
    exports2.default = ValidationError;
  }
});

// node_modules/ajv/dist/compile/ref_error.js
var require_ref_error = __commonJS({
  "node_modules/ajv/dist/compile/ref_error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var resolve_1 = require_resolve();
    var MissingRefError = class extends Error {
      constructor(resolver, baseId, ref, msg) {
        super(msg || `can't resolve reference ${ref} from id ${baseId}`);
        this.missingRef = (0, resolve_1.resolveUrl)(resolver, baseId, ref);
        this.missingSchema = (0, resolve_1.normalizeId)((0, resolve_1.getFullPath)(resolver, this.missingRef));
      }
    };
    exports2.default = MissingRefError;
  }
});

// node_modules/ajv/dist/compile/index.js
var require_compile = __commonJS({
  "node_modules/ajv/dist/compile/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveSchema = exports2.getCompilingSchema = exports2.resolveRef = exports2.compileSchema = exports2.SchemaEnv = void 0;
    var codegen_1 = require_codegen();
    var validation_error_1 = require_validation_error();
    var names_1 = require_names();
    var resolve_1 = require_resolve();
    var util_1 = require_util();
    var validate_1 = require_validate();
    var SchemaEnv = class {
      constructor(env) {
        var _a;
        this.refs = {};
        this.dynamicAnchors = {};
        let schema;
        if (typeof env.schema == "object")
          schema = env.schema;
        this.schema = env.schema;
        this.schemaId = env.schemaId;
        this.root = env.root || this;
        this.baseId = (_a = env.baseId) !== null && _a !== void 0 ? _a : (0, resolve_1.normalizeId)(schema === null || schema === void 0 ? void 0 : schema[env.schemaId || "$id"]);
        this.schemaPath = env.schemaPath;
        this.localRefs = env.localRefs;
        this.meta = env.meta;
        this.$async = schema === null || schema === void 0 ? void 0 : schema.$async;
        this.refs = {};
      }
    };
    exports2.SchemaEnv = SchemaEnv;
    function compileSchema(sch) {
      const _sch = getCompilingSchema.call(this, sch);
      if (_sch)
        return _sch;
      const rootId = (0, resolve_1.getFullPath)(this.opts.uriResolver, sch.root.baseId);
      const { es5, lines } = this.opts.code;
      const { ownProperties } = this.opts;
      const gen = new codegen_1.CodeGen(this.scope, { es5, lines, ownProperties });
      let _ValidationError;
      if (sch.$async) {
        _ValidationError = gen.scopeValue("Error", {
          ref: validation_error_1.default,
          code: (0, codegen_1._)`require("ajv/dist/runtime/validation_error").default`
        });
      }
      const validateName = gen.scopeName("validate");
      sch.validateName = validateName;
      const schemaCxt = {
        gen,
        allErrors: this.opts.allErrors,
        data: names_1.default.data,
        parentData: names_1.default.parentData,
        parentDataProperty: names_1.default.parentDataProperty,
        dataNames: [names_1.default.data],
        dataPathArr: [codegen_1.nil],
        // TODO can its length be used as dataLevel if nil is removed?
        dataLevel: 0,
        dataTypes: [],
        definedProperties: /* @__PURE__ */ new Set(),
        topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? { ref: sch.schema, code: (0, codegen_1.stringify)(sch.schema) } : { ref: sch.schema }),
        validateName,
        ValidationError: _ValidationError,
        schema: sch.schema,
        schemaEnv: sch,
        rootId,
        baseId: sch.baseId || rootId,
        schemaPath: codegen_1.nil,
        errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: (0, codegen_1._)`""`,
        opts: this.opts,
        self: this
      };
      let sourceCode;
      try {
        this._compilations.add(sch);
        (0, validate_1.validateFunctionCode)(schemaCxt);
        gen.optimize(this.opts.code.optimize);
        const validateCode = gen.toString();
        sourceCode = `${gen.scopeRefs(names_1.default.scope)}return ${validateCode}`;
        if (this.opts.code.process)
          sourceCode = this.opts.code.process(sourceCode, sch);
        const makeValidate = new Function(`${names_1.default.self}`, `${names_1.default.scope}`, sourceCode);
        const validate = makeValidate(this, this.scope.get());
        this.scope.value(validateName, { ref: validate });
        validate.errors = null;
        validate.schema = sch.schema;
        validate.schemaEnv = sch;
        if (sch.$async)
          validate.$async = true;
        if (this.opts.code.source === true) {
          validate.source = { validateName, validateCode, scopeValues: gen._values };
        }
        if (this.opts.unevaluated) {
          const { props, items } = schemaCxt;
          validate.evaluated = {
            props: props instanceof codegen_1.Name ? void 0 : props,
            items: items instanceof codegen_1.Name ? void 0 : items,
            dynamicProps: props instanceof codegen_1.Name,
            dynamicItems: items instanceof codegen_1.Name
          };
          if (validate.source)
            validate.source.evaluated = (0, codegen_1.stringify)(validate.evaluated);
        }
        sch.validate = validate;
        return sch;
      } catch (e) {
        delete sch.validate;
        delete sch.validateName;
        if (sourceCode)
          this.logger.error("Error compiling schema, function code:", sourceCode);
        throw e;
      } finally {
        this._compilations.delete(sch);
      }
    }
    exports2.compileSchema = compileSchema;
    function resolveRef(root, baseId, ref) {
      var _a;
      ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, ref);
      const schOrFunc = root.refs[ref];
      if (schOrFunc)
        return schOrFunc;
      let _sch = resolve2.call(this, root, ref);
      if (_sch === void 0) {
        const schema = (_a = root.localRefs) === null || _a === void 0 ? void 0 : _a[ref];
        const { schemaId } = this.opts;
        if (schema)
          _sch = new SchemaEnv({ schema, schemaId, root, baseId });
      }
      if (_sch === void 0)
        return;
      return root.refs[ref] = inlineOrCompile.call(this, _sch);
    }
    exports2.resolveRef = resolveRef;
    function inlineOrCompile(sch) {
      if ((0, resolve_1.inlineRef)(sch.schema, this.opts.inlineRefs))
        return sch.schema;
      return sch.validate ? sch : compileSchema.call(this, sch);
    }
    function getCompilingSchema(schEnv) {
      for (const sch of this._compilations) {
        if (sameSchemaEnv(sch, schEnv))
          return sch;
      }
    }
    exports2.getCompilingSchema = getCompilingSchema;
    function sameSchemaEnv(s1, s2) {
      return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
    }
    function resolve2(root, ref) {
      let sch;
      while (typeof (sch = this.refs[ref]) == "string")
        ref = sch;
      return sch || this.schemas[ref] || resolveSchema.call(this, root, ref);
    }
    function resolveSchema(root, ref) {
      const p = this.opts.uriResolver.parse(ref);
      const refPath = (0, resolve_1._getFullPath)(this.opts.uriResolver, p);
      let baseId = (0, resolve_1.getFullPath)(this.opts.uriResolver, root.baseId, void 0);
      if (Object.keys(root.schema).length > 0 && refPath === baseId) {
        return getJsonPointer.call(this, p, root);
      }
      const id = (0, resolve_1.normalizeId)(refPath);
      const schOrRef = this.refs[id] || this.schemas[id];
      if (typeof schOrRef == "string") {
        const sch = resolveSchema.call(this, root, schOrRef);
        if (typeof (sch === null || sch === void 0 ? void 0 : sch.schema) !== "object")
          return;
        return getJsonPointer.call(this, p, sch);
      }
      if (typeof (schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object")
        return;
      if (!schOrRef.validate)
        compileSchema.call(this, schOrRef);
      if (id === (0, resolve_1.normalizeId)(ref)) {
        const { schema } = schOrRef;
        const { schemaId } = this.opts;
        const schId = schema[schemaId];
        if (schId)
          baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        return new SchemaEnv({ schema, schemaId, root, baseId });
      }
      return getJsonPointer.call(this, p, schOrRef);
    }
    exports2.resolveSchema = resolveSchema;
    var PREVENT_SCOPE_CHANGE = /* @__PURE__ */ new Set([
      "properties",
      "patternProperties",
      "enum",
      "dependencies",
      "definitions"
    ]);
    function getJsonPointer(parsedRef, { baseId, schema, root }) {
      var _a;
      if (((_a = parsedRef.fragment) === null || _a === void 0 ? void 0 : _a[0]) !== "/")
        return;
      for (const part of parsedRef.fragment.slice(1).split("/")) {
        if (typeof schema === "boolean")
          return;
        const partSchema = schema[(0, util_1.unescapeFragment)(part)];
        if (partSchema === void 0)
          return;
        schema = partSchema;
        const schId = typeof schema === "object" && schema[this.opts.schemaId];
        if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
          baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        }
      }
      let env;
      if (typeof schema != "boolean" && schema.$ref && !(0, util_1.schemaHasRulesButRef)(schema, this.RULES)) {
        const $ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
        env = resolveSchema.call(this, root, $ref);
      }
      const { schemaId } = this.opts;
      env = env || new SchemaEnv({ schema, schemaId, root, baseId });
      if (env.schema !== env.root.schema)
        return env;
      return void 0;
    }
  }
});

// node_modules/ajv/dist/refs/data.json
var require_data = __commonJS({
  "node_modules/ajv/dist/refs/data.json"(exports2, module2) {
    module2.exports = {
      $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
      description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
      type: "object",
      required: ["$data"],
      properties: {
        $data: {
          type: "string",
          anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }]
        }
      },
      additionalProperties: false
    };
  }
});

// node_modules/fast-uri/lib/utils.js
var require_utils = __commonJS({
  "node_modules/fast-uri/lib/utils.js"(exports2, module2) {
    "use strict";
    var isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu);
    var isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
    var isPort = RegExp.prototype.test.bind(/^\d*$/u);
    var isHexPair = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu);
    var isUnreserved = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu);
    var isPathCharacter = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/]$/u);
    var isQueryFragmentCharacter = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/?]$/u);
    var isUserinfoCharacter = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:]$/u);
    var BYTE_HEX = new Array(256);
    {
      const HEX_DIGITS = "0123456789ABCDEF";
      for (let i = 0; i < 256; i++) {
        BYTE_HEX[i] = "%" + HEX_DIGITS[i >> 4] + HEX_DIGITS[i & 15];
      }
    }
    function percentEncodeNonAscii(cp) {
      if (cp < 2048) {
        return BYTE_HEX[192 | cp >> 6] + BYTE_HEX[128 | cp & 63];
      }
      if (cp < 65536) {
        return BYTE_HEX[224 | cp >> 12] + BYTE_HEX[128 | cp >> 6 & 63] + BYTE_HEX[128 | cp & 63];
      }
      return BYTE_HEX[240 | cp >> 18] + BYTE_HEX[128 | cp >> 12 & 63] + BYTE_HEX[128 | cp >> 6 & 63] + BYTE_HEX[128 | cp & 63];
    }
    function stringArrayToHexStripped(input) {
      let acc = "";
      let code = 0;
      let i = 0;
      for (i = 0; i < input.length; i++) {
        code = input[i].charCodeAt(0);
        if (code === 48) {
          continue;
        }
        if (!(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102)) {
          return "";
        }
        acc += input[i];
        break;
      }
      for (i += 1; i < input.length; i++) {
        code = input[i].charCodeAt(0);
        if (!(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102)) {
          return "";
        }
        acc += input[i];
      }
      return acc;
    }
    var isHextet = RegExp.prototype.test.bind(/^[\dA-Fa-f]{1,4}$/);
    var isIPvFuture = RegExp.prototype.test.bind(/^[vV][\dA-Fa-f]+\.[A-Za-z\d\-._~!$&'()*+,;=:]+$/);
    var isZoneCharacter = RegExp.prototype.test.bind(/^[A-Za-z\d\-._~]$/);
    var nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function isZoneIdentifier(zone) {
      if (zone.length === 0) return false;
      for (let i = 0; i < zone.length; i++) {
        if (isZoneCharacter(zone[i])) continue;
        if (zone[i] === "%" && i + 2 < zone.length && isHexPair(zone.slice(i + 1, i + 3))) {
          i += 2;
          continue;
        }
        return false;
      }
      return true;
    }
    function compressIPv6ZeroRun(hextets) {
      let bestStart = -1;
      let bestLength = 0;
      let runStart = -1;
      let runLength = 0;
      for (let i = 0; i < hextets.length; i++) {
        if (hextets[i] === "0") {
          if (runStart === -1) runStart = i;
          runLength++;
          if (runLength > bestLength) {
            bestLength = runLength;
            bestStart = runStart;
          }
        } else {
          runStart = -1;
          runLength = 0;
        }
      }
      if (bestLength < 2) return hextets.join(":");
      const head = hextets.slice(0, bestStart).join(":");
      const tail = hextets.slice(bestStart + bestLength).join(":");
      return head + "::" + tail;
    }
    function normalizeIPv6Address(input) {
      const compression = input.indexOf("::");
      if (compression !== -1 && input.indexOf("::", compression + 1) !== -1) return void 0;
      const left = compression === -1 ? input.split(":") : input.slice(0, compression).split(":");
      const right = compression === -1 ? [] : input.slice(compression + 2).split(":");
      if (compression !== -1) {
        if (left.length === 1 && left[0] === "") left.length = 0;
        if (right.length === 1 && right[0] === "") right.length = 0;
      }
      const parts = left.concat(right);
      let hextetCount = 0;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part === "") return void 0;
        if (part.indexOf(".") !== -1) {
          if (i !== parts.length - 1 || compression !== -1 && right.length === 0 || !isIPv4(part)) return void 0;
          hextetCount += 2;
          continue;
        }
        if (!isHextet(part)) return void 0;
        parts[i] = parseInt(part, 16).toString(16);
        hextetCount++;
      }
      if (compression === -1) {
        if (hextetCount !== 8) return void 0;
        return compressIPv6ZeroRun(parts);
      }
      if (hextetCount >= 8) return void 0;
      const expanded = parts.slice(0, left.length);
      for (let i = hextetCount; i < 8; i++) expanded.push("0");
      for (let i = left.length; i < parts.length; i++) expanded.push(parts[i]);
      return compressIPv6ZeroRun(expanded);
    }
    function normalizeIPv6(host) {
      const bracketed = host[0] === "[" && host[host.length - 1] === "]";
      const hasBracket = host[0] === "[" || host[host.length - 1] === "]";
      if (hasBracket && !bracketed) return { host, isIPV6: false, error: true };
      let input = bracketed ? host.slice(1, -1) : host;
      if (bracketed && isIPvFuture(input)) {
        input = input.toLowerCase();
        return { host: `[${input}]`, escapedHost: input, isIPV6: false, isIPVFuture: true };
      }
      if (findToken(input, ":") < 2) {
        return { host, isIPV6: false, error: bracketed };
      }
      let zoneIdentifier = "";
      const zoneSeparator = input.indexOf("%");
      if (zoneSeparator !== -1) {
        const separatorLength = input.slice(zoneSeparator, zoneSeparator + 3).toLowerCase() === "%25" ? 3 : 1;
        zoneIdentifier = input.slice(zoneSeparator + separatorLength);
        if (!isZoneIdentifier(zoneIdentifier)) return { host, isIPV6: false, error: true };
        input = input.slice(0, zoneSeparator);
      }
      const address = normalizeIPv6Address(input);
      if (address === void 0) return { host, isIPV6: false, error: true };
      return {
        host: address + (zoneIdentifier ? "%" + zoneIdentifier : ""),
        escapedHost: address + (zoneIdentifier ? "%25" + zoneIdentifier : ""),
        isIPV6: true
      };
    }
    function findToken(str, token) {
      let ind = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === token) ind++;
      }
      return ind;
    }
    function removeDotSegments(path) {
      let input = path;
      const output = [];
      let nextSlash = -1;
      let len = 0;
      while (len = input.length) {
        if (len === 1) {
          if (input === ".") {
            break;
          } else if (input === "/") {
            output.push("/");
            break;
          } else {
            output.push(input);
            break;
          }
        } else if (len === 2) {
          if (input[0] === ".") {
            if (input[1] === ".") {
              break;
            } else if (input[1] === "/") {
              input = input.slice(2);
              continue;
            }
          } else if (input[0] === "/") {
            if (input[1] === "." || input[1] === "/") {
              output.push("/");
              break;
            }
          }
        } else if (len === 3) {
          if (input === "/..") {
            if (output.length !== 0) {
              output.pop();
            }
            output.push("/");
            break;
          }
        }
        if (input[0] === ".") {
          if (input[1] === ".") {
            if (input[2] === "/") {
              input = input.slice(3);
              continue;
            }
          } else if (input[1] === "/") {
            input = input.slice(2);
            continue;
          }
        } else if (input[0] === "/") {
          if (input[1] === ".") {
            if (input[2] === "/") {
              input = input.slice(2);
              continue;
            } else if (input[2] === ".") {
              if (input[3] === "/") {
                input = input.slice(3);
                if (output.length !== 0) {
                  output.pop();
                }
                continue;
              }
            }
          }
        }
        if ((nextSlash = input.indexOf("/", 1)) === -1) {
          output.push(input);
          break;
        } else {
          output.push(input.slice(0, nextSlash));
          input = input.slice(nextSlash);
        }
      }
      return output.join("");
    }
    var HOST_DELIMS = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" };
    var HOST_DELIM_RE = /[@/?#:]/g;
    var HOST_DELIM_NO_COLON_RE = /[@/?#]/g;
    function reescapeHostDelimiters(host, isIP) {
      const re = isIP ? HOST_DELIM_NO_COLON_RE : HOST_DELIM_RE;
      re.lastIndex = 0;
      return host.replace(re, (ch) => HOST_DELIMS[ch]);
    }
    function normalizePercentEncoding(input, decodeUnreserved = false) {
      if (input.indexOf("%") === -1) {
        return input;
      }
      let output = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === "%" && i + 2 < input.length) {
          const hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            const normalizedHex = hex.toUpperCase();
            const decoded = String.fromCharCode(parseInt(normalizedHex, 16));
            if (decodeUnreserved && isUnreserved(decoded)) {
              output += decoded;
            } else {
              output += "%" + normalizedHex;
            }
            i += 2;
            continue;
          }
        }
        output += input[i];
      }
      return output;
    }
    function normalizePathEncoding(input) {
      let output = "";
      for (let i = 0; i < input.length; i++) {
        const ch = input[i];
        if (ch === "%" && i + 2 < input.length) {
          const hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            const normalizedHex = hex.toUpperCase();
            const decoded = String.fromCharCode(parseInt(normalizedHex, 16));
            if (decoded !== "." && isUnreserved(decoded)) {
              output += decoded;
            } else {
              output += "%" + normalizedHex;
            }
            i += 2;
            continue;
          }
        }
        if (isPathCharacter(ch)) {
          output += ch;
        } else {
          const code = input.charCodeAt(i);
          if (code < 128) {
            output += isEscapeSafe(code) ? ch : BYTE_HEX[code];
          } else if (code < 55296 || code > 57343) {
            output += percentEncodeNonAscii(code);
          } else if (code <= 56319 && i + 1 < input.length) {
            const low = input.charCodeAt(i + 1);
            if (low >= 56320 && low <= 57343) {
              output += percentEncodeNonAscii(65536 + (code - 55296 << 10) + (low - 56320));
              i++;
            } else {
              output += percentEncodeNonAscii(65533);
            }
          } else {
            output += percentEncodeNonAscii(65533);
          }
        }
      }
      return output;
    }
    function serializePathEncoding(input, pathNoScheme = false) {
      let output = "";
      let firstSegment = pathNoScheme && input[0] !== "/";
      for (let i = 0; i < input.length; i++) {
        const ch = input[i];
        if (ch === "%" && i + 2 < input.length) {
          const hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            output += "%" + hex.toUpperCase();
            i += 2;
            continue;
          }
        }
        if (ch === "/") {
          firstSegment = false;
        }
        if (isPathCharacter(ch) && (ch !== ":" || !firstSegment)) {
          output += ch;
        } else {
          const code = input.charCodeAt(i);
          if (code < 128) {
            output += BYTE_HEX[code];
          } else if (code < 55296 || code > 57343) {
            output += percentEncodeNonAscii(code);
          } else if (code <= 56319 && i + 1 < input.length) {
            const low = input.charCodeAt(i + 1);
            if (low >= 56320 && low <= 57343) {
              output += percentEncodeNonAscii(65536 + (code - 55296 << 10) + (low - 56320));
              i++;
            } else {
              output += percentEncodeNonAscii(65533);
            }
          } else {
            output += percentEncodeNonAscii(65533);
          }
        }
      }
      return output;
    }
    function encodeComponent(input, isAllowed) {
      let output = "";
      for (let i = 0; i < input.length; i++) {
        const ch = input[i];
        if (ch === "%" && i + 2 < input.length) {
          const hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            output += "%" + hex.toUpperCase();
            i += 2;
            continue;
          }
        }
        if (isAllowed(ch)) {
          output += ch;
        } else {
          const code = input.charCodeAt(i);
          if (code < 128) {
            output += BYTE_HEX[code];
          } else if (code < 55296 || code > 57343) {
            output += percentEncodeNonAscii(code);
          } else if (code <= 56319 && i + 1 < input.length) {
            const low = input.charCodeAt(i + 1);
            if (low >= 56320 && low <= 57343) {
              output += percentEncodeNonAscii(65536 + (code - 55296 << 10) + (low - 56320));
              i++;
            } else {
              output += percentEncodeNonAscii(65533);
            }
          } else {
            output += percentEncodeNonAscii(65533);
          }
        }
      }
      return output;
    }
    function encodeUserinfo(input) {
      return encodeComponent(input, isUserinfoCharacter);
    }
    function encodeQuery(input) {
      return encodeComponent(input, isQueryFragmentCharacter);
    }
    function encodeFragment(input) {
      return encodeComponent(input, isQueryFragmentCharacter);
    }
    function isEscapeSafe(cp) {
      return cp >= 48 && cp <= 57 || cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp === 42 || cp === 43 || cp === 45 || cp === 46 || cp === 47 || cp === 64 || cp === 95;
    }
    function normalizeQueryFragmentEncoding(input) {
      let output = "";
      for (let i = 0; i < input.length; i++) {
        const ch = input[i];
        if (ch === "%" && i + 2 < input.length) {
          const hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            const normalizedHex = hex.toUpperCase();
            const decoded = String.fromCharCode(parseInt(normalizedHex, 16));
            if (isUnreserved(decoded)) {
              output += decoded;
            } else {
              output += "%" + normalizedHex;
            }
            i += 2;
            continue;
          }
        }
        if (isQueryFragmentCharacter(ch)) {
          output += ch;
        } else {
          const code = input.charCodeAt(i);
          if (code < 128) {
            output += isEscapeSafe(code) ? ch : BYTE_HEX[code];
          } else if (code < 55296 || code > 57343) {
            output += percentEncodeNonAscii(code);
          } else if (code <= 56319 && i + 1 < input.length) {
            const low = input.charCodeAt(i + 1);
            if (low >= 56320 && low <= 57343) {
              output += percentEncodeNonAscii(65536 + (code - 55296 << 10) + (low - 56320));
              i++;
            } else {
              output += percentEncodeNonAscii(65533);
            }
          } else {
            output += percentEncodeNonAscii(65533);
          }
        }
      }
      return output;
    }
    function escapePreservingEscapes(input) {
      let output = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === "%" && i + 2 < input.length) {
          const hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            output += "%" + hex.toUpperCase();
            i += 2;
            continue;
          }
        }
        output += escape(input[i]);
      }
      return output;
    }
    function recomposeAuthority(component) {
      const uriTokens = [];
      if (component.userinfo !== void 0) {
        uriTokens.push(encodeUserinfo(component.userinfo));
        uriTokens.push("@");
      }
      if (component.host !== void 0) {
        let host = component.host;
        if (!isIPv4(host)) {
          let ipV6res = normalizeIPv6(host);
          if (ipV6res.isIPV6 !== true && ipV6res.isIPVFuture !== true) {
            host = normalizePercentEncoding(host, true);
            ipV6res = normalizeIPv6(host);
          }
          if (ipV6res.isIPV6 === true || ipV6res.isIPVFuture === true) {
            host = `[${ipV6res.escapedHost}]`;
          } else {
            host = reescapeHostDelimiters(host, false);
          }
        }
        uriTokens.push(host);
      }
      if (typeof component.port === "number" || typeof component.port === "string") {
        const port = String(component.port);
        if (!isPort(port)) {
          throw new TypeError("URI port is malformed.");
        }
        uriTokens.push(":");
        uriTokens.push(port);
      }
      return uriTokens.length ? uriTokens.join("") : void 0;
    }
    module2.exports = {
      nonSimpleDomain,
      recomposeAuthority,
      reescapeHostDelimiters,
      normalizePercentEncoding,
      normalizePathEncoding,
      serializePathEncoding,
      normalizeQueryFragmentEncoding,
      encodeUserinfo,
      encodeQuery,
      encodeFragment,
      escapePreservingEscapes,
      removeDotSegments,
      isIPv4,
      isUUID,
      normalizeIPv6,
      stringArrayToHexStripped
    };
  }
});

// node_modules/fast-uri/lib/schemes.js
var require_schemes = __commonJS({
  "node_modules/fast-uri/lib/schemes.js"(exports2, module2) {
    "use strict";
    var { isUUID } = require_utils();
    var URN_REG = /^([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-./:;=@]|%[\da-f]{2})+)$/iu;
    var supportedSchemeNames = (
      /** @type {const} */
      [
        "http",
        "https",
        "ws",
        "wss",
        "urn",
        "urn:uuid"
      ]
    );
    function isValidSchemeName(name) {
      return supportedSchemeNames.indexOf(
        /** @type {*} */
        name
      ) !== -1;
    }
    function wsIsSecure(wsComponent) {
      if (wsComponent.secure === true) {
        return true;
      } else if (wsComponent.secure === false) {
        return false;
      } else if (wsComponent.scheme) {
        return wsComponent.scheme.length === 3 && (wsComponent.scheme[0] === "w" || wsComponent.scheme[0] === "W") && (wsComponent.scheme[1] === "s" || wsComponent.scheme[1] === "S") && (wsComponent.scheme[2] === "s" || wsComponent.scheme[2] === "S");
      } else {
        return false;
      }
    }
    function httpParse(component) {
      if (!component.host) {
        component.error = component.error || "HTTP URIs must have a host.";
      }
      return component;
    }
    function httpSerialize(component) {
      const secure = String(component.scheme).toLowerCase() === "https";
      if (component.port === (secure ? 443 : 80) || component.port === "") {
        component.port = void 0;
      }
      if (!component.path) {
        component.path = "/";
      }
      return component;
    }
    function wsParse(wsComponent) {
      wsComponent.secure = wsIsSecure(wsComponent);
      wsComponent.resourceName = (wsComponent.path || "/") + (wsComponent.query ? "?" + wsComponent.query : "");
      wsComponent.path = void 0;
      wsComponent.query = void 0;
      return wsComponent;
    }
    function wsSerialize(wsComponent) {
      if (wsComponent.port === (wsIsSecure(wsComponent) ? 443 : 80) || wsComponent.port === "") {
        wsComponent.port = void 0;
      }
      if (typeof wsComponent.secure === "boolean") {
        wsComponent.scheme = wsComponent.secure ? "wss" : "ws";
        wsComponent.secure = void 0;
      }
      if (wsComponent.resourceName) {
        const queryIndex = wsComponent.resourceName.indexOf("?");
        const path = queryIndex === -1 ? wsComponent.resourceName : wsComponent.resourceName.slice(0, queryIndex);
        wsComponent.path = path && path !== "/" ? path : void 0;
        wsComponent.query = queryIndex === -1 ? void 0 : wsComponent.resourceName.slice(queryIndex + 1);
        wsComponent.resourceName = void 0;
      }
      wsComponent.fragment = void 0;
      return wsComponent;
    }
    function urnParse(urnComponent, options) {
      if (!urnComponent.path) {
        urnComponent.error = "URN can not be parsed";
        return urnComponent;
      }
      const matches = urnComponent.path.match(URN_REG);
      if (matches && matches[0] === urnComponent.path) {
        const scheme = options.scheme || urnComponent.scheme || "urn";
        urnComponent.nid = matches[1].toLowerCase();
        urnComponent.nss = matches[2];
        const urnScheme = `${scheme}:${options.nid || urnComponent.nid}`;
        const schemeHandler = getSchemeHandler(urnScheme);
        urnComponent.path = void 0;
        if (schemeHandler) {
          urnComponent = schemeHandler.parse(urnComponent, options);
        }
      } else {
        urnComponent.error = urnComponent.error || "URN can not be parsed.";
      }
      return urnComponent;
    }
    function urnSerialize(urnComponent, options) {
      if (urnComponent.nid === void 0) {
        throw new Error("URN without nid cannot be serialized");
      }
      const scheme = options.scheme || urnComponent.scheme || "urn";
      const nid = urnComponent.nid.toLowerCase();
      const urnScheme = `${scheme}:${options.nid || nid}`;
      const schemeHandler = getSchemeHandler(urnScheme);
      if (schemeHandler) {
        urnComponent = schemeHandler.serialize(urnComponent, options);
      }
      const uriComponent = urnComponent;
      const nss = urnComponent.nss;
      uriComponent.path = `${nid || options.nid}:${nss}`;
      options.skipEscape = true;
      return uriComponent;
    }
    function urnuuidParse(urnComponent, options) {
      const uuidComponent = urnComponent;
      uuidComponent.uuid = uuidComponent.nss;
      uuidComponent.nss = void 0;
      if (!options.tolerant && (!uuidComponent.uuid || !isUUID(uuidComponent.uuid))) {
        uuidComponent.error = uuidComponent.error || "UUID is not valid.";
      }
      return uuidComponent;
    }
    function urnuuidSerialize(uuidComponent) {
      const urnComponent = uuidComponent;
      urnComponent.nss = (uuidComponent.uuid || "").toLowerCase();
      return urnComponent;
    }
    var http = (
      /** @type {SchemeHandler} */
      {
        scheme: "http",
        domainHost: true,
        parse: httpParse,
        serialize: httpSerialize
      }
    );
    var https = (
      /** @type {SchemeHandler} */
      {
        scheme: "https",
        domainHost: http.domainHost,
        parse: httpParse,
        serialize: httpSerialize
      }
    );
    var ws = (
      /** @type {SchemeHandler} */
      {
        scheme: "ws",
        domainHost: true,
        parse: wsParse,
        serialize: wsSerialize
      }
    );
    var wss = (
      /** @type {SchemeHandler} */
      {
        scheme: "wss",
        domainHost: ws.domainHost,
        parse: ws.parse,
        serialize: ws.serialize
      }
    );
    var urn = (
      /** @type {SchemeHandler} */
      {
        scheme: "urn",
        parse: urnParse,
        serialize: urnSerialize,
        skipNormalize: true
      }
    );
    var urnuuid = (
      /** @type {SchemeHandler} */
      {
        scheme: "urn:uuid",
        parse: urnuuidParse,
        serialize: urnuuidSerialize,
        skipNormalize: true
      }
    );
    var SCHEMES = (
      /** @type {Record<SchemeName, SchemeHandler>} */
      {
        http,
        https,
        ws,
        wss,
        urn,
        "urn:uuid": urnuuid
      }
    );
    Object.setPrototypeOf(SCHEMES, null);
    function getSchemeHandler(scheme) {
      return scheme && (SCHEMES[
        /** @type {SchemeName} */
        scheme
      ] || SCHEMES[
        /** @type {SchemeName} */
        scheme.toLowerCase()
      ]) || void 0;
    }
    module2.exports = {
      wsIsSecure,
      SCHEMES,
      isValidSchemeName,
      getSchemeHandler
    };
  }
});

// node_modules/fast-uri/index.js
var require_fast_uri = __commonJS({
  "node_modules/fast-uri/index.js"(exports2, module2) {
    "use strict";
    var { normalizeIPv6, removeDotSegments, recomposeAuthority, normalizePercentEncoding, normalizePathEncoding, serializePathEncoding, normalizeQueryFragmentEncoding, encodeQuery, encodeFragment, reescapeHostDelimiters, isIPv4, nonSimpleDomain } = require_utils();
    var { SCHEMES, getSchemeHandler } = require_schemes();
    var VALID_SCHEME = /^[A-Za-z][A-Za-z0-9+.-]*$/u;
    var MALFORMED_SCHEME_ERROR = "URI scheme is malformed.";
    function decodeValidScheme(scheme) {
      const decodedScheme = unescape(String(scheme));
      if (!VALID_SCHEME.test(decodedScheme)) {
        throw new TypeError(MALFORMED_SCHEME_ERROR);
      }
      return decodedScheme;
    }
    function normalize(uri, options) {
      if (typeof uri === "string") {
        uri = /** @type {T} */
        normalizeString(uri, options);
      } else if (typeof uri === "object") {
        uri = /** @type {T} */
        parse(serialize(uri, options), options);
      }
      return uri;
    }
    function resolve2(baseURI, relativeURI, options) {
      const schemelessOptions = options ? Object.assign({ scheme: "null" }, options) : { scheme: "null" };
      const {
        parsed: baseParsed,
        malformedAuthorityOrPort: baseMalformed,
        malformedPercentEncoding: baseMalformedPercentEncoding,
        malformedSchemeSpecific: baseMalformedSchemeSpecific,
        malformedHost: baseMalformedHost,
        malformedScheme: baseMalformedScheme
      } = parseWithStatus(baseURI, schemelessOptions);
      const {
        parsed: relativeParsed,
        malformedAuthorityOrPort: relativeMalformed,
        malformedPercentEncoding: relativeMalformedPercentEncoding,
        malformedSchemeSpecific: relativeMalformedSchemeSpecific,
        malformedHost: relativeMalformedHost,
        malformedScheme: relativeMalformedScheme
      } = parseWithStatus(relativeURI, schemelessOptions);
      if (baseMalformed || relativeMalformed || baseMalformedPercentEncoding || relativeMalformedPercentEncoding || baseMalformedSchemeSpecific || relativeMalformedSchemeSpecific || baseMalformedHost || relativeMalformedHost || baseMalformedScheme || relativeMalformedScheme) {
        throw new Error(baseParsed.error || relativeParsed.error || "URI is malformed.");
      }
      const resolved = resolveComponent(baseParsed, relativeParsed, schemelessOptions, true);
      const resolvedSchemeHandler = getSchemeHandler(options && options.scheme || resolved.scheme);
      const resolvedHost = resolved.host;
      const resolvedHostIsIP = resolvedHost !== void 0 && resolvedHost !== "" && (isIPv4(resolvedHost) || normalizeIPv6(resolvedHost).isIPV6);
      canonicalizeHost(resolved, options || {}, resolvedSchemeHandler, resolvedHostIsIP);
      const encodedASCIIHost = resolvedHost && resolvedHost.indexOf("%") !== -1 && !new RegExp("\\P{ASCII}", "u").test(resolvedHost);
      if (resolved.error && !encodedASCIIHost) {
        throw new Error(resolved.error);
      }
      schemelessOptions.skipEscape = true;
      return serialize(resolved, schemelessOptions);
    }
    function resolveComponent(base, relative2, options, skipNormalization) {
      const target = {};
      if (!skipNormalization) {
        base = parse(serialize(base, options), options);
        relative2 = parse(serialize(relative2, options), options);
      }
      options = options || {};
      if (!options.tolerant && relative2.scheme) {
        target.scheme = relative2.scheme;
        target.userinfo = relative2.userinfo;
        target.host = relative2.host;
        target.port = relative2.port;
        target.path = removeDotSegments(relative2.path || "");
        target.query = relative2.query;
      } else {
        if (relative2.userinfo !== void 0 || relative2.host !== void 0 || relative2.port !== void 0) {
          target.userinfo = relative2.userinfo;
          target.host = relative2.host;
          target.port = relative2.port;
          target.path = removeDotSegments(relative2.path || "");
          target.query = relative2.query;
        } else {
          if (!relative2.path) {
            target.path = base.path;
            if (relative2.query !== void 0) {
              target.query = relative2.query;
            } else {
              target.query = base.query;
            }
          } else {
            if (relative2.path[0] === "/") {
              target.path = removeDotSegments(relative2.path);
            } else {
              if ((base.userinfo !== void 0 || base.host !== void 0 || base.port !== void 0) && !base.path) {
                target.path = "/" + relative2.path;
              } else if (!base.path) {
                target.path = relative2.path;
              } else {
                target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative2.path;
              }
              target.path = removeDotSegments(target.path);
            }
            target.query = relative2.query;
          }
          target.userinfo = base.userinfo;
          target.host = base.host;
          target.port = base.port;
        }
        target.scheme = base.scheme;
      }
      target.fragment = relative2.fragment;
      return target;
    }
    function equal(uriA, uriB, options) {
      const normalizedA = normalizeComparableURI(uriA, options);
      const normalizedB = normalizeComparableURI(uriB, options);
      return normalizedA !== void 0 && normalizedB !== void 0 && normalizedA === normalizedB;
    }
    function serialize(cmpts, opts) {
      const component = {
        host: cmpts.host,
        scheme: cmpts.scheme,
        userinfo: cmpts.userinfo,
        port: cmpts.port,
        path: cmpts.path,
        query: cmpts.query,
        nid: cmpts.nid,
        nss: cmpts.nss,
        uuid: cmpts.uuid,
        fragment: cmpts.fragment,
        reference: cmpts.reference,
        resourceName: cmpts.resourceName,
        secure: cmpts.secure,
        error: ""
      };
      const options = Object.assign({}, opts);
      const uriTokens = [];
      if (component.scheme) {
        component.scheme = decodeValidScheme(component.scheme);
      }
      const schemeHandler = getSchemeHandler(options.scheme || component.scheme);
      if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(component, options);
      const hasAuthority = component.userinfo !== void 0 || component.host !== void 0 || component.port !== void 0;
      const pathNoScheme = !options.skipEscape && component.scheme === void 0 && !hasAuthority;
      if (component.path !== void 0) {
        if (!options.skipEscape) {
          component.path = serializePathEncoding(component.path, pathNoScheme);
        } else {
          component.path = normalizePercentEncoding(component.path);
        }
      }
      if (options.reference !== "suffix" && component.scheme) {
        component.scheme = decodeValidScheme(component.scheme);
        uriTokens.push(component.scheme, ":");
      }
      const authority = recomposeAuthority(component);
      if (authority !== void 0) {
        if (options.reference !== "suffix") {
          uriTokens.push("//");
        }
        uriTokens.push(authority);
        if (component.path && component.path[0] !== "/") {
          uriTokens.push("/");
        }
      }
      if (component.path !== void 0) {
        let s = component.path;
        if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
          s = removeDotSegments(s);
        }
        if (pathNoScheme) {
          s = serializePathEncoding(s, true);
        }
        if (authority === void 0 && s[0] === "/" && s[1] === "/") {
          s = "/%2F" + s.slice(2);
        }
        uriTokens.push(s);
      }
      if (component.query !== void 0) {
        uriTokens.push("?", encodeQuery(component.query));
      }
      if (component.fragment !== void 0) {
        uriTokens.push("#", encodeFragment(component.fragment));
      }
      return uriTokens.join("");
    }
    var URI_PARSE = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    var AUTHORITY_PREFIX = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
    var AUTHORITY_INTRODUCER_REGION = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
    function getParseError(parsed, matches) {
      if (matches[2] !== void 0 && parsed.path && parsed.path[0] !== "/") {
        return 'URI path must start with "/" when authority is present.';
      }
      if (typeof parsed.port === "number" && (parsed.port < 0 || parsed.port > 65535)) {
        return "URI port is malformed.";
      }
      return void 0;
    }
    function hasMalformedPercentEncoding(component) {
      if (component === void 0) return false;
      let percent = component.indexOf("%");
      while (percent !== -1) {
        if (percent + 2 >= component.length || !/^[\da-f]{2}$/iu.test(component.slice(percent + 1, percent + 3))) {
          return true;
        }
        percent = component.indexOf("%", percent + 3);
      }
      return false;
    }
    function isIPLiteral(host) {
      return host[0] === "[" && host[host.length - 1] === "]";
    }
    function hasMalformedComponentPercentEncoding(matches) {
      const host = matches[4];
      return hasMalformedPercentEncoding(matches[3]) || host !== void 0 && !isIPLiteral(host) && hasMalformedPercentEncoding(host) || hasMalformedPercentEncoding(matches[6]) || hasMalformedPercentEncoding(matches[7]) || hasMalformedPercentEncoding(matches[8]);
    }
    function canonicalizeHost(parsed, options, schemeHandler, isIP) {
      if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport) && parsed.host && !isIPLiteral(parsed.host) && (options.domainHost || schemeHandler && schemeHandler.domainHost) && isIP === false && nonSimpleDomain(parsed.host)) {
        try {
          parsed.host = new URL("http://" + parsed.host).hostname;
        } catch (e) {
          parsed.error = parsed.error || "Host's domain name can not be converted to ASCII: " + e;
          return true;
        }
      }
      return false;
    }
    function parseWithStatus(uri, opts) {
      const options = Object.assign({}, opts);
      const parsed = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
      };
      let malformedAuthorityOrPort = false;
      let malformedPercentEncoding = false;
      let malformedSchemeSpecific = false;
      let malformedHost = false;
      let malformedIPLiteral = false;
      let malformedScheme = false;
      let isIP = false;
      if (options.reference === "suffix") {
        if (options.scheme) {
          uri = options.scheme + ":" + uri;
        } else {
          uri = "//" + uri;
        }
      }
      const authorityMatch = uri.match(AUTHORITY_PREFIX);
      if (authorityMatch !== null && authorityMatch[1].indexOf("\\") !== -1) {
        parsed.error = "URI authority must not contain a literal backslash.";
        malformedAuthorityOrPort = true;
      }
      const introducerMatch = uri.match(AUTHORITY_INTRODUCER_REGION);
      if (introducerMatch !== null) {
        const region = introducerMatch[1];
        const normalizedRegion = region.replace(/[\t\n\r]/g, "");
        if (normalizedRegion.length >= 2) {
          if (normalizedRegion.slice(0, 2) !== "//") {
            parsed.error = parsed.error || "URI authority must not contain a literal backslash.";
            malformedAuthorityOrPort = true;
          } else if (region.length !== normalizedRegion.length) {
            parsed.error = parsed.error || "URI authority introducer must not contain whitespace.";
            malformedAuthorityOrPort = true;
          }
        }
      }
      const matches = uri.match(URI_PARSE);
      if (matches) {
        parsed.scheme = matches[1];
        parsed.userinfo = matches[3];
        parsed.host = matches[4];
        parsed.port = parseInt(matches[5], 10);
        parsed.path = matches[6] || "";
        parsed.query = matches[7];
        parsed.fragment = matches[8];
        if (parsed.scheme !== void 0) {
          const decodedScheme = unescape(parsed.scheme);
          if (VALID_SCHEME.test(decodedScheme)) {
            parsed.scheme = decodedScheme.toLowerCase();
          } else {
            parsed.error = parsed.error || MALFORMED_SCHEME_ERROR;
            malformedScheme = true;
          }
        }
        malformedPercentEncoding = hasMalformedComponentPercentEncoding(matches);
        if (malformedPercentEncoding) {
          parsed.error = parsed.error || "URI contains malformed percent-encoding.";
        }
        if (isNaN(parsed.port)) {
          parsed.port = matches[5];
        }
        const parseError = getParseError(parsed, matches);
        if (parseError !== void 0) {
          parsed.error = parsed.error || parseError;
          malformedAuthorityOrPort = true;
        }
        if (parsed.host) {
          const ipv4result = isIPv4(parsed.host);
          if (ipv4result === false) {
            const bracketedIPLiteral = isIPLiteral(parsed.host);
            const hasIPLiteralBracket = parsed.host.indexOf("[") !== -1 || parsed.host.indexOf("]") !== -1;
            const ipv6result = normalizeIPv6(parsed.host);
            isIP = ipv6result.isIPV6 || ipv6result.isIPVFuture === true;
            malformedIPLiteral = hasIPLiteralBracket && (!bracketedIPLiteral || ipv6result.error === true);
            parsed.host = isIP ? ipv6result.host : ipv6result.host.toLowerCase();
            if (malformedIPLiteral) {
              parsed.error = parsed.error || "URI host is malformed.";
              malformedAuthorityOrPort = true;
            }
          } else {
            isIP = true;
          }
        }
        if (parsed.scheme === void 0 && parsed.userinfo === void 0 && parsed.host === void 0 && parsed.port === void 0 && parsed.query === void 0 && !parsed.path) {
          parsed.reference = "same-document";
        } else if (parsed.scheme === void 0) {
          parsed.reference = "relative";
        } else if (parsed.fragment === void 0) {
          parsed.reference = "absolute";
        } else {
          parsed.reference = "uri";
        }
        if (options.reference && options.reference !== "suffix" && options.reference !== parsed.reference) {
          parsed.error = parsed.error || "URI is not a " + options.reference + " reference.";
        }
        const schemeHandler = getSchemeHandler(options.scheme || parsed.scheme);
        if (!malformedIPLiteral) {
          malformedHost = canonicalizeHost(parsed, options, schemeHandler, isIP);
        }
        if (uri.indexOf("%") !== -1 && parsed.host !== void 0 && !malformedIPLiteral) {
          let host = isIP ? parsed.host : normalizePercentEncoding(parsed.host, true);
          if (!isIP) {
            host = normalizePercentEncoding(host.toLowerCase());
          }
          parsed.host = reescapeHostDelimiters(host, isIP);
        }
        if (!schemeHandler || schemeHandler && !schemeHandler.skipNormalize) {
          if (parsed.path) {
            parsed.path = normalizePathEncoding(parsed.path);
          }
          if (parsed.query) {
            parsed.query = normalizeQueryFragmentEncoding(parsed.query);
          }
          if (parsed.fragment) {
            parsed.fragment = normalizeQueryFragmentEncoding(parsed.fragment);
          }
        }
        if (schemeHandler && schemeHandler.parse) {
          schemeHandler.parse(parsed, options);
          if (schemeHandler === SCHEMES.urn && parsed.nid === void 0) {
            malformedSchemeSpecific = true;
          }
        }
      } else {
        parsed.error = parsed.error || "URI can not be parsed.";
      }
      return { parsed, malformedAuthorityOrPort, malformedPercentEncoding, malformedSchemeSpecific, malformedHost, malformedScheme };
    }
    function parse(uri, opts) {
      return parseWithStatus(uri, opts).parsed;
    }
    function normalizeString(uri, opts) {
      return normalizeStringWithStatus(uri, opts).normalized;
    }
    function normalizeStringWithStatus(uri, opts) {
      const { parsed, malformedAuthorityOrPort, malformedPercentEncoding, malformedSchemeSpecific, malformedHost, malformedScheme } = parseWithStatus(uri, opts);
      return {
        normalized: malformedAuthorityOrPort || malformedPercentEncoding || malformedSchemeSpecific || malformedHost || malformedScheme ? uri : serialize(parsed, opts),
        malformedAuthorityOrPort,
        malformedPercentEncoding,
        malformedSchemeSpecific,
        malformedHost,
        malformedScheme
      };
    }
    function normalizeComparableURI(uri, opts) {
      if (typeof uri !== "string" && typeof uri !== "object") {
        return void 0;
      }
      let value;
      try {
        value = typeof uri === "string" ? uri : serialize(uri, opts);
      } catch {
        return void 0;
      }
      const { normalized, malformedAuthorityOrPort, malformedPercentEncoding, malformedSchemeSpecific, malformedHost, malformedScheme } = normalizeStringWithStatus(value, opts);
      return malformedAuthorityOrPort || malformedPercentEncoding || malformedSchemeSpecific || malformedHost || malformedScheme ? void 0 : normalized;
    }
    var fastUri = {
      SCHEMES,
      normalize,
      resolve: resolve2,
      resolveComponent,
      equal,
      serialize,
      parse
    };
    module2.exports = fastUri;
    module2.exports.default = fastUri;
    module2.exports.fastUri = fastUri;
  }
});

// node_modules/ajv/dist/runtime/uri.js
var require_uri = __commonJS({
  "node_modules/ajv/dist/runtime/uri.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var uri = require_fast_uri();
    uri.code = 'require("ajv/dist/runtime/uri").default';
    exports2.default = uri;
  }
});

// node_modules/ajv/dist/core.js
var require_core = __commonJS({
  "node_modules/ajv/dist/core.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CodeGen = exports2.Name = exports2.nil = exports2.stringify = exports2.str = exports2._ = exports2.KeywordCxt = void 0;
    var validate_1 = require_validate();
    Object.defineProperty(exports2, "KeywordCxt", { enumerable: true, get: function() {
      return validate_1.KeywordCxt;
    } });
    var codegen_1 = require_codegen();
    Object.defineProperty(exports2, "_", { enumerable: true, get: function() {
      return codegen_1._;
    } });
    Object.defineProperty(exports2, "str", { enumerable: true, get: function() {
      return codegen_1.str;
    } });
    Object.defineProperty(exports2, "stringify", { enumerable: true, get: function() {
      return codegen_1.stringify;
    } });
    Object.defineProperty(exports2, "nil", { enumerable: true, get: function() {
      return codegen_1.nil;
    } });
    Object.defineProperty(exports2, "Name", { enumerable: true, get: function() {
      return codegen_1.Name;
    } });
    Object.defineProperty(exports2, "CodeGen", { enumerable: true, get: function() {
      return codegen_1.CodeGen;
    } });
    var validation_error_1 = require_validation_error();
    var ref_error_1 = require_ref_error();
    var rules_1 = require_rules();
    var compile_1 = require_compile();
    var codegen_2 = require_codegen();
    var resolve_1 = require_resolve();
    var dataType_1 = require_dataType();
    var util_1 = require_util();
    var $dataRefSchema = require_data();
    var uri_1 = require_uri();
    var defaultRegExp = (str, flags) => new RegExp(str, flags);
    defaultRegExp.code = "new RegExp";
    var META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes"];
    var EXT_SCOPE_NAMES = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]);
    var removedOptions = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    };
    var deprecatedOptions = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    };
    var MAX_EXPRESSION = 200;
    function requiredOptions(o) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
      const s = o.strict;
      const _optz = (_a = o.code) === null || _a === void 0 ? void 0 : _a.optimize;
      const optimize = _optz === true || _optz === void 0 ? 1 : _optz || 0;
      const regExp = (_c = (_b = o.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : defaultRegExp;
      const uriResolver = (_d = o.uriResolver) !== null && _d !== void 0 ? _d : uri_1.default;
      return {
        strictSchema: (_f = (_e = o.strictSchema) !== null && _e !== void 0 ? _e : s) !== null && _f !== void 0 ? _f : true,
        strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== void 0 ? _g : s) !== null && _h !== void 0 ? _h : true,
        strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== void 0 ? _j : s) !== null && _k !== void 0 ? _k : "log",
        strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== void 0 ? _l : s) !== null && _m !== void 0 ? _m : "log",
        strictRequired: (_p = (_o = o.strictRequired) !== null && _o !== void 0 ? _o : s) !== null && _p !== void 0 ? _p : false,
        code: o.code ? { ...o.code, optimize, regExp } : { optimize, regExp },
        loopRequired: (_q = o.loopRequired) !== null && _q !== void 0 ? _q : MAX_EXPRESSION,
        loopEnum: (_r = o.loopEnum) !== null && _r !== void 0 ? _r : MAX_EXPRESSION,
        meta: (_s = o.meta) !== null && _s !== void 0 ? _s : true,
        messages: (_t = o.messages) !== null && _t !== void 0 ? _t : true,
        inlineRefs: (_u = o.inlineRefs) !== null && _u !== void 0 ? _u : true,
        schemaId: (_v = o.schemaId) !== null && _v !== void 0 ? _v : "$id",
        addUsedSchema: (_w = o.addUsedSchema) !== null && _w !== void 0 ? _w : true,
        validateSchema: (_x = o.validateSchema) !== null && _x !== void 0 ? _x : true,
        validateFormats: (_y = o.validateFormats) !== null && _y !== void 0 ? _y : true,
        unicodeRegExp: (_z = o.unicodeRegExp) !== null && _z !== void 0 ? _z : true,
        int32range: (_0 = o.int32range) !== null && _0 !== void 0 ? _0 : true,
        uriResolver
      };
    }
    var Ajv2 = class {
      constructor(opts = {}) {
        this.schemas = {};
        this.refs = {};
        this.formats = /* @__PURE__ */ Object.create(null);
        this._compilations = /* @__PURE__ */ new Set();
        this._loading = {};
        this._cache = /* @__PURE__ */ new Map();
        opts = this.opts = { ...opts, ...requiredOptions(opts) };
        const { es5, lines } = this.opts.code;
        this.scope = new codegen_2.ValueScope({ scope: {}, prefixes: EXT_SCOPE_NAMES, es5, lines });
        this.logger = getLogger(opts.logger);
        const formatOpt = opts.validateFormats;
        opts.validateFormats = false;
        this.RULES = (0, rules_1.getRules)();
        checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED");
        checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn");
        this._metaOpts = getMetaSchemaOptions.call(this);
        if (opts.formats)
          addInitialFormats.call(this);
        this._addVocabularies();
        this._addDefaultMetaSchema();
        if (opts.keywords)
          addInitialKeywords.call(this, opts.keywords);
        if (typeof opts.meta == "object")
          this.addMetaSchema(opts.meta);
        addInitialSchemas.call(this);
        opts.validateFormats = formatOpt;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data, meta, schemaId } = this.opts;
        let _dataRefSchema = $dataRefSchema;
        if (schemaId === "id") {
          _dataRefSchema = { ...$dataRefSchema };
          _dataRefSchema.id = _dataRefSchema.$id;
          delete _dataRefSchema.$id;
        }
        if (meta && $data)
          this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
      }
      defaultMeta() {
        const { meta, schemaId } = this.opts;
        return this.opts.defaultMeta = typeof meta == "object" ? meta[schemaId] || meta : void 0;
      }
      validate(schemaKeyRef, data) {
        let v;
        if (typeof schemaKeyRef == "string") {
          v = this.getSchema(schemaKeyRef);
          if (!v)
            throw new Error(`no schema with key or ref "${schemaKeyRef}"`);
        } else {
          v = this.compile(schemaKeyRef);
        }
        const valid = v(data);
        if (!("$async" in v))
          this.errors = v.errors;
        return valid;
      }
      compile(schema, _meta) {
        const sch = this._addSchema(schema, _meta);
        return sch.validate || this._compileSchemaEnv(sch);
      }
      compileAsync(schema, meta) {
        if (typeof this.opts.loadSchema != "function") {
          throw new Error("options.loadSchema should be a function");
        }
        const { loadSchema } = this.opts;
        return runCompileAsync.call(this, schema, meta);
        async function runCompileAsync(_schema, _meta) {
          await loadMetaSchema.call(this, _schema.$schema);
          const sch = this._addSchema(_schema, _meta);
          return sch.validate || _compileAsync.call(this, sch);
        }
        async function loadMetaSchema($ref) {
          if ($ref && !this.getSchema($ref)) {
            await runCompileAsync.call(this, { $ref }, true);
          }
        }
        async function _compileAsync(sch) {
          try {
            return this._compileSchemaEnv(sch);
          } catch (e) {
            if (!(e instanceof ref_error_1.default))
              throw e;
            checkLoaded.call(this, e);
            await loadMissingSchema.call(this, e.missingSchema);
            return _compileAsync.call(this, sch);
          }
        }
        function checkLoaded({ missingSchema: ref, missingRef }) {
          if (this.refs[ref]) {
            throw new Error(`AnySchema ${ref} is loaded but ${missingRef} cannot be resolved`);
          }
        }
        async function loadMissingSchema(ref) {
          const _schema = await _loadSchema.call(this, ref);
          if (!this.refs[ref])
            await loadMetaSchema.call(this, _schema.$schema);
          if (!this.refs[ref])
            this.addSchema(_schema, ref, meta);
        }
        async function _loadSchema(ref) {
          const p = this._loading[ref];
          if (p)
            return p;
          try {
            return await (this._loading[ref] = loadSchema(ref));
          } finally {
            delete this._loading[ref];
          }
        }
      }
      // Adds schema to the instance
      addSchema(schema, key, _meta, _validateSchema = this.opts.validateSchema) {
        if (Array.isArray(schema)) {
          for (const sch of schema)
            this.addSchema(sch, void 0, _meta, _validateSchema);
          return this;
        }
        let id;
        if (typeof schema === "object") {
          const { schemaId } = this.opts;
          id = schema[schemaId];
          if (id !== void 0 && typeof id != "string") {
            throw new Error(`schema ${schemaId} must be string`);
          }
        }
        key = (0, resolve_1.normalizeId)(key || id);
        this._checkUnique(key);
        this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, true);
        return this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(schema, key, _validateSchema = this.opts.validateSchema) {
        this.addSchema(schema, key, true, _validateSchema);
        return this;
      }
      //  Validate schema against its meta-schema
      validateSchema(schema, throwOrLogError) {
        if (typeof schema == "boolean")
          return true;
        let $schema;
        $schema = schema.$schema;
        if ($schema !== void 0 && typeof $schema != "string") {
          throw new Error("$schema must be a string");
        }
        $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
        if (!$schema) {
          this.logger.warn("meta-schema not available");
          this.errors = null;
          return true;
        }
        const valid = this.validate($schema, schema);
        if (!valid && throwOrLogError) {
          const message = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(message);
          else
            throw new Error(message);
        }
        return valid;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(keyRef) {
        let sch;
        while (typeof (sch = getSchEnv.call(this, keyRef)) == "string")
          keyRef = sch;
        if (sch === void 0) {
          const { schemaId } = this.opts;
          const root = new compile_1.SchemaEnv({ schema: {}, schemaId });
          sch = compile_1.resolveSchema.call(this, root, keyRef);
          if (!sch)
            return;
          this.refs[keyRef] = sch;
        }
        return sch.validate || this._compileSchemaEnv(sch);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(schemaKeyRef) {
        if (schemaKeyRef instanceof RegExp) {
          this._removeAllSchemas(this.schemas, schemaKeyRef);
          this._removeAllSchemas(this.refs, schemaKeyRef);
          return this;
        }
        switch (typeof schemaKeyRef) {
          case "undefined":
            this._removeAllSchemas(this.schemas);
            this._removeAllSchemas(this.refs);
            this._cache.clear();
            return this;
          case "string": {
            const sch = getSchEnv.call(this, schemaKeyRef);
            if (typeof sch == "object")
              this._cache.delete(sch.schema);
            delete this.schemas[schemaKeyRef];
            delete this.refs[schemaKeyRef];
            return this;
          }
          case "object": {
            const cacheKey = schemaKeyRef;
            this._cache.delete(cacheKey);
            let id = schemaKeyRef[this.opts.schemaId];
            if (id) {
              id = (0, resolve_1.normalizeId)(id);
              delete this.schemas[id];
              delete this.refs[id];
            }
            return this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(definitions) {
        for (const def of definitions)
          this.addKeyword(def);
        return this;
      }
      addKeyword(kwdOrDef, def) {
        let keyword;
        if (typeof kwdOrDef == "string") {
          keyword = kwdOrDef;
          if (typeof def == "object") {
            this.logger.warn("these parameters are deprecated, see docs for addKeyword");
            def.keyword = keyword;
          }
        } else if (typeof kwdOrDef == "object" && def === void 0) {
          def = kwdOrDef;
          keyword = def.keyword;
          if (Array.isArray(keyword) && !keyword.length) {
            throw new Error("addKeywords: keyword must be string or non-empty array");
          }
        } else {
          throw new Error("invalid addKeywords parameters");
        }
        checkKeyword.call(this, keyword, def);
        if (!def) {
          (0, util_1.eachItem)(keyword, (kwd) => addRule.call(this, kwd));
          return this;
        }
        keywordMetaschema.call(this, def);
        const definition = {
          ...def,
          type: (0, dataType_1.getJSONTypes)(def.type),
          schemaType: (0, dataType_1.getJSONTypes)(def.schemaType)
        };
        (0, util_1.eachItem)(keyword, definition.type.length === 0 ? (k) => addRule.call(this, k, definition) : (k) => definition.type.forEach((t) => addRule.call(this, k, definition, t)));
        return this;
      }
      getKeyword(keyword) {
        const rule = this.RULES.all[keyword];
        return typeof rule == "object" ? rule.definition : !!rule;
      }
      // Remove keyword
      removeKeyword(keyword) {
        const { RULES } = this;
        delete RULES.keywords[keyword];
        delete RULES.all[keyword];
        for (const group of RULES.rules) {
          const i = group.rules.findIndex((rule) => rule.keyword === keyword);
          if (i >= 0)
            group.rules.splice(i, 1);
        }
        return this;
      }
      // Add format
      addFormat(name, format) {
        if (typeof format == "string")
          format = new RegExp(format);
        this.formats[name] = format;
        return this;
      }
      errorsText(errors = this.errors, { separator = ", ", dataVar = "data" } = {}) {
        if (!errors || errors.length === 0)
          return "No errors";
        return errors.map((e) => `${dataVar}${e.instancePath} ${e.message}`).reduce((text, msg) => text + separator + msg);
      }
      $dataMetaSchema(metaSchema, keywordsJsonPointers) {
        const rules = this.RULES.all;
        metaSchema = JSON.parse(JSON.stringify(metaSchema));
        for (const jsonPointer of keywordsJsonPointers) {
          const segments = jsonPointer.split("/").slice(1);
          let keywords = metaSchema;
          for (const seg of segments)
            keywords = keywords[seg];
          for (const key in rules) {
            const rule = rules[key];
            if (typeof rule != "object")
              continue;
            const { $data } = rule.definition;
            const schema = keywords[key];
            if ($data && schema)
              keywords[key] = schemaOrData(schema);
          }
        }
        return metaSchema;
      }
      _removeAllSchemas(schemas, regex) {
        for (const keyRef in schemas) {
          const sch = schemas[keyRef];
          if (!regex || regex.test(keyRef)) {
            if (typeof sch == "string") {
              delete schemas[keyRef];
            } else if (sch && !sch.meta) {
              this._cache.delete(sch.schema);
              delete schemas[keyRef];
            }
          }
        }
      }
      _addSchema(schema, meta, baseId, validateSchema = this.opts.validateSchema, addSchema = this.opts.addUsedSchema) {
        let id;
        const { schemaId } = this.opts;
        if (typeof schema == "object") {
          id = schema[schemaId];
        } else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          else if (typeof schema != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let sch = this._cache.get(schema);
        if (sch !== void 0)
          return sch;
        baseId = (0, resolve_1.normalizeId)(id || baseId);
        const localRefs = resolve_1.getSchemaRefs.call(this, schema, baseId);
        sch = new compile_1.SchemaEnv({ schema, schemaId, meta, baseId, localRefs });
        this._cache.set(sch.schema, sch);
        if (addSchema && !baseId.startsWith("#")) {
          if (baseId)
            this._checkUnique(baseId);
          this.refs[baseId] = sch;
        }
        if (validateSchema)
          this.validateSchema(schema, true);
        return sch;
      }
      _checkUnique(id) {
        if (this.schemas[id] || this.refs[id]) {
          throw new Error(`schema with key or id "${id}" already exists`);
        }
      }
      _compileSchemaEnv(sch) {
        if (sch.meta)
          this._compileMetaSchema(sch);
        else
          compile_1.compileSchema.call(this, sch);
        if (!sch.validate)
          throw new Error("ajv implementation error");
        return sch.validate;
      }
      _compileMetaSchema(sch) {
        const currentOpts = this.opts;
        this.opts = this._metaOpts;
        try {
          compile_1.compileSchema.call(this, sch);
        } finally {
          this.opts = currentOpts;
        }
      }
    };
    Ajv2.ValidationError = validation_error_1.default;
    Ajv2.MissingRefError = ref_error_1.default;
    exports2.default = Ajv2;
    function checkOptions(checkOpts, options, msg, log = "error") {
      for (const key in checkOpts) {
        const opt = key;
        if (opt in options)
          this.logger[log](`${msg}: option ${key}. ${checkOpts[opt]}`);
      }
    }
    function getSchEnv(keyRef) {
      keyRef = (0, resolve_1.normalizeId)(keyRef);
      return this.schemas[keyRef] || this.refs[keyRef];
    }
    function addInitialSchemas() {
      const optsSchemas = this.opts.schemas;
      if (!optsSchemas)
        return;
      if (Array.isArray(optsSchemas))
        this.addSchema(optsSchemas);
      else
        for (const key in optsSchemas)
          this.addSchema(optsSchemas[key], key);
    }
    function addInitialFormats() {
      for (const name in this.opts.formats) {
        const format = this.opts.formats[name];
        if (format)
          this.addFormat(name, format);
      }
    }
    function addInitialKeywords(defs) {
      if (Array.isArray(defs)) {
        this.addVocabulary(defs);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const keyword in defs) {
        const def = defs[keyword];
        if (!def.keyword)
          def.keyword = keyword;
        this.addKeyword(def);
      }
    }
    function getMetaSchemaOptions() {
      const metaOpts = { ...this.opts };
      for (const opt of META_IGNORE_OPTIONS)
        delete metaOpts[opt];
      return metaOpts;
    }
    var noLogs = { log() {
    }, warn() {
    }, error() {
    } };
    function getLogger(logger) {
      if (logger === false)
        return noLogs;
      if (logger === void 0)
        return console;
      if (logger.log && logger.warn && logger.error)
        return logger;
      throw new Error("logger must implement log, warn and error methods");
    }
    var KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
    function checkKeyword(keyword, def) {
      const { RULES } = this;
      (0, util_1.eachItem)(keyword, (kwd) => {
        if (RULES.keywords[kwd])
          throw new Error(`Keyword ${kwd} is already defined`);
        if (!KEYWORD_NAME.test(kwd))
          throw new Error(`Keyword ${kwd} has invalid name`);
      });
      if (!def)
        return;
      if (def.$data && !("code" in def || "validate" in def)) {
        throw new Error('$data keyword must have "code" or "validate" function');
      }
    }
    function addRule(keyword, definition, dataType) {
      var _a;
      const post = definition === null || definition === void 0 ? void 0 : definition.post;
      if (dataType && post)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES } = this;
      let ruleGroup = post ? RULES.post : RULES.rules.find(({ type: t }) => t === dataType);
      if (!ruleGroup) {
        ruleGroup = { type: dataType, rules: [] };
        RULES.rules.push(ruleGroup);
      }
      RULES.keywords[keyword] = true;
      if (!definition)
        return;
      const rule = {
        keyword,
        definition: {
          ...definition,
          type: (0, dataType_1.getJSONTypes)(definition.type),
          schemaType: (0, dataType_1.getJSONTypes)(definition.schemaType)
        }
      };
      if (definition.before)
        addBeforeRule.call(this, ruleGroup, rule, definition.before);
      else
        ruleGroup.rules.push(rule);
      RULES.all[keyword] = rule;
      (_a = definition.implements) === null || _a === void 0 ? void 0 : _a.forEach((kwd) => this.addKeyword(kwd));
    }
    function addBeforeRule(ruleGroup, rule, before) {
      const i = ruleGroup.rules.findIndex((_rule) => _rule.keyword === before);
      if (i >= 0) {
        ruleGroup.rules.splice(i, 0, rule);
      } else {
        ruleGroup.rules.push(rule);
        this.logger.warn(`rule ${before} is not defined`);
      }
    }
    function keywordMetaschema(def) {
      let { metaSchema } = def;
      if (metaSchema === void 0)
        return;
      if (def.$data && this.opts.$data)
        metaSchema = schemaOrData(metaSchema);
      def.validateSchema = this.compile(metaSchema, true);
    }
    var $dataRef = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function schemaOrData(schema) {
      return { anyOf: [schema, $dataRef] };
    }
  }
});

// node_modules/ajv/dist/vocabularies/core/id.js
var require_id = __commonJS({
  "node_modules/ajv/dist/vocabularies/core/id.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var def = {
      keyword: "id",
      code() {
        throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/core/ref.js
var require_ref = __commonJS({
  "node_modules/ajv/dist/vocabularies/core/ref.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.callRef = exports2.getValidate = void 0;
    var ref_error_1 = require_ref_error();
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var compile_1 = require_compile();
    var util_1 = require_util();
    var def = {
      keyword: "$ref",
      schemaType: "string",
      code(cxt) {
        const { gen, schema: $ref, it } = cxt;
        const { baseId, schemaEnv: env, validateName, opts, self } = it;
        const { root } = env;
        if (($ref === "#" || $ref === "#/") && baseId === root.baseId)
          return callRootRef();
        const schOrEnv = compile_1.resolveRef.call(self, root, baseId, $ref);
        if (schOrEnv === void 0)
          throw new ref_error_1.default(it.opts.uriResolver, baseId, $ref);
        if (schOrEnv instanceof compile_1.SchemaEnv)
          return callValidate(schOrEnv);
        return inlineRefSchema(schOrEnv);
        function callRootRef() {
          if (env === root)
            return callRef(cxt, validateName, env, env.$async);
          const rootName = gen.scopeValue("root", { ref: root });
          return callRef(cxt, (0, codegen_1._)`${rootName}.validate`, root, root.$async);
        }
        function callValidate(sch) {
          const v = getValidate(cxt, sch);
          callRef(cxt, v, sch, sch.$async);
        }
        function inlineRefSchema(sch) {
          const schName = gen.scopeValue("schema", opts.code.source === true ? { ref: sch, code: (0, codegen_1.stringify)(sch) } : { ref: sch });
          const valid = gen.name("valid");
          const schCxt = cxt.subschema({
            schema: sch,
            dataTypes: [],
            schemaPath: codegen_1.nil,
            topSchemaRef: schName,
            errSchemaPath: $ref
          }, valid);
          cxt.mergeEvaluated(schCxt);
          cxt.ok(valid);
        }
      }
    };
    function getValidate(cxt, sch) {
      const { gen } = cxt;
      return sch.validate ? gen.scopeValue("validate", { ref: sch.validate }) : (0, codegen_1._)`${gen.scopeValue("wrapper", { ref: sch })}.validate`;
    }
    exports2.getValidate = getValidate;
    function callRef(cxt, v, sch, $async) {
      const { gen, it } = cxt;
      const { allErrors, schemaEnv: env, opts } = it;
      const passCxt = opts.passContext ? names_1.default.this : codegen_1.nil;
      if ($async)
        callAsyncRef();
      else
        callSyncRef();
      function callAsyncRef() {
        if (!env.$async)
          throw new Error("async schema referenced by sync schema");
        const valid = gen.let("valid");
        gen.try(() => {
          gen.code((0, codegen_1._)`await ${(0, code_1.callValidateCode)(cxt, v, passCxt)}`);
          addEvaluatedFrom(v);
          if (!allErrors)
            gen.assign(valid, true);
        }, (e) => {
          gen.if((0, codegen_1._)`!(${e} instanceof ${it.ValidationError})`, () => gen.throw(e));
          addErrorsFrom(e);
          if (!allErrors)
            gen.assign(valid, false);
        });
        cxt.ok(valid);
      }
      function callSyncRef() {
        cxt.result((0, code_1.callValidateCode)(cxt, v, passCxt), () => addEvaluatedFrom(v), () => addErrorsFrom(v));
      }
      function addErrorsFrom(source) {
        const errs = (0, codegen_1._)`${source}.errors`;
        gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`);
        gen.assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
      }
      function addEvaluatedFrom(source) {
        var _a;
        if (!it.opts.unevaluated)
          return;
        const schEvaluated = (_a = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a === void 0 ? void 0 : _a.evaluated;
        if (it.props !== true) {
          if (schEvaluated && !schEvaluated.dynamicProps) {
            if (schEvaluated.props !== void 0) {
              it.props = util_1.mergeEvaluated.props(gen, schEvaluated.props, it.props);
            }
          } else {
            const props = gen.var("props", (0, codegen_1._)`${source}.evaluated.props`);
            it.props = util_1.mergeEvaluated.props(gen, props, it.props, codegen_1.Name);
          }
        }
        if (it.items !== true) {
          if (schEvaluated && !schEvaluated.dynamicItems) {
            if (schEvaluated.items !== void 0) {
              it.items = util_1.mergeEvaluated.items(gen, schEvaluated.items, it.items);
            }
          } else {
            const items = gen.var("items", (0, codegen_1._)`${source}.evaluated.items`);
            it.items = util_1.mergeEvaluated.items(gen, items, it.items, codegen_1.Name);
          }
        }
      }
    }
    exports2.callRef = callRef;
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/core/index.js
var require_core2 = __commonJS({
  "node_modules/ajv/dist/vocabularies/core/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var id_1 = require_id();
    var ref_1 = require_ref();
    var core = [
      "$schema",
      "$id",
      "$defs",
      "$vocabulary",
      { keyword: "$comment" },
      "definitions",
      id_1.default,
      ref_1.default
    ];
    exports2.default = core;
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitNumber.js
var require_limitNumber = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitNumber.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var ops = codegen_1.operators;
    var KWDs = {
      maximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
      minimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
      exclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
      exclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
    };
    var error = {
      message: ({ keyword, schemaCode }) => (0, codegen_1.str)`must be ${KWDs[keyword].okStr} ${schemaCode}`,
      params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
    };
    var def = {
      keyword: Object.keys(KWDs),
      type: "number",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        cxt.fail$data((0, codegen_1._)`${data} ${KWDs[keyword].fail} ${schemaCode} || isNaN(${data})`);
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/multipleOf.js
var require_multipleOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/multipleOf.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must be multiple of ${schemaCode}`,
      params: ({ schemaCode }) => (0, codegen_1._)`{multipleOf: ${schemaCode}}`
    };
    var def = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, schemaCode, it } = cxt;
        const prec = it.opts.multipleOfPrecision;
        const res = gen.let("res");
        const invalid = prec ? (0, codegen_1._)`Math.abs(Math.round(${res}) - ${res}) > 1e-${prec}` : (0, codegen_1._)`${res} !== parseInt(${res})`;
        cxt.fail$data((0, codegen_1._)`(${schemaCode} === 0 || (${res} = ${data}/${schemaCode}, ${invalid}))`);
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/runtime/ucs2length.js
var require_ucs2length = __commonJS({
  "node_modules/ajv/dist/runtime/ucs2length.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function ucs2length(str) {
      const len = str.length;
      let length = 0;
      let pos = 0;
      let value;
      while (pos < len) {
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 55296 && value <= 56319 && pos < len) {
          value = str.charCodeAt(pos);
          if ((value & 64512) === 56320)
            pos++;
        }
      }
      return length;
    }
    exports2.default = ucs2length;
    ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitLength.js
var require_limitLength = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitLength.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var ucs2length_1 = require_ucs2length();
    var error = {
      message({ keyword, schemaCode }) {
        const comp = keyword === "maxLength" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} characters`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    };
    var def = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode, it } = cxt;
        const op = keyword === "maxLength" ? codegen_1.operators.GT : codegen_1.operators.LT;
        const len = it.opts.unicode === false ? (0, codegen_1._)`${data}.length` : (0, codegen_1._)`${(0, util_1.useFunc)(cxt.gen, ucs2length_1.default)}(${data})`;
        cxt.fail$data((0, codegen_1._)`${len} ${op} ${schemaCode}`);
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/pattern.js
var require_pattern = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/pattern.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var code_1 = require_code2();
    var util_1 = require_util();
    var codegen_1 = require_codegen();
    var error = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must match pattern "${schemaCode}"`,
      params: ({ schemaCode }) => (0, codegen_1._)`{pattern: ${schemaCode}}`
    };
    var def = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, $data, schema, schemaCode, it } = cxt;
        const u = it.opts.unicodeRegExp ? "u" : "";
        if ($data) {
          const { regExp } = it.opts.code;
          const regExpCode = regExp.code === "new RegExp" ? (0, codegen_1._)`new RegExp` : (0, util_1.useFunc)(gen, regExp);
          const valid = gen.let("valid");
          gen.try(() => gen.assign(valid, (0, codegen_1._)`${regExpCode}(${schemaCode}, ${u}).test(${data})`), () => gen.assign(valid, false));
          cxt.fail$data((0, codegen_1._)`!${valid}`);
        } else {
          const regExp = (0, code_1.usePattern)(cxt, schema);
          cxt.fail$data((0, codegen_1._)`!${regExp}.test(${data})`);
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitProperties.js
var require_limitProperties = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitProperties.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message({ keyword, schemaCode }) {
        const comp = keyword === "maxProperties" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} properties`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    };
    var def = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        const op = keyword === "maxProperties" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._)`Object.keys(${data}).length ${op} ${schemaCode}`);
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/required.js
var require_required = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/required.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params: { missingProperty } }) => (0, codegen_1.str)`must have required property '${missingProperty}'`,
      params: ({ params: { missingProperty } }) => (0, codegen_1._)`{missingProperty: ${missingProperty}}`
    };
    var def = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: true,
      error,
      code(cxt) {
        const { gen, schema, schemaCode, data, $data, it } = cxt;
        const { opts } = it;
        if (!$data && schema.length === 0)
          return;
        const useLoop = schema.length >= opts.loopRequired;
        if (it.allErrors)
          allErrorsMode();
        else
          exitOnErrorMode();
        if (opts.strictRequired) {
          const props = cxt.parentSchema.properties;
          const { definedProperties } = cxt.it;
          for (const requiredKey of schema) {
            if ((props === null || props === void 0 ? void 0 : props[requiredKey]) === void 0 && !definedProperties.has(requiredKey)) {
              const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
              const msg = `required property "${requiredKey}" is not defined at "${schemaPath}" (strictRequired)`;
              (0, util_1.checkStrictMode)(it, msg, it.opts.strictRequired);
            }
          }
        }
        function allErrorsMode() {
          if (useLoop || $data) {
            cxt.block$data(codegen_1.nil, loopAllRequired);
          } else {
            for (const prop of schema) {
              (0, code_1.checkReportMissingProp)(cxt, prop);
            }
          }
        }
        function exitOnErrorMode() {
          const missing = gen.let("missing");
          if (useLoop || $data) {
            const valid = gen.let("valid", true);
            cxt.block$data(valid, () => loopUntilMissing(missing, valid));
            cxt.ok(valid);
          } else {
            gen.if((0, code_1.checkMissingProp)(cxt, schema, missing));
            (0, code_1.reportMissingProp)(cxt, missing);
            gen.else();
          }
        }
        function loopAllRequired() {
          gen.forOf("prop", schemaCode, (prop) => {
            cxt.setParams({ missingProperty: prop });
            gen.if((0, code_1.noPropertyInData)(gen, data, prop, opts.ownProperties), () => cxt.error());
          });
        }
        function loopUntilMissing(missing, valid) {
          cxt.setParams({ missingProperty: missing });
          gen.forOf(missing, schemaCode, () => {
            gen.assign(valid, (0, code_1.propertyInData)(gen, data, missing, opts.ownProperties));
            gen.if((0, codegen_1.not)(valid), () => {
              cxt.error();
              gen.break();
            });
          }, codegen_1.nil);
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitItems.js
var require_limitItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitItems.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message({ keyword, schemaCode }) {
        const comp = keyword === "maxItems" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} items`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    };
    var def = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        const op = keyword === "maxItems" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._)`${data}.length ${op} ${schemaCode}`);
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/runtime/equal.js
var require_equal = __commonJS({
  "node_modules/ajv/dist/runtime/equal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var equal = require_fast_deep_equal();
    equal.code = 'require("ajv/dist/runtime/equal").default';
    exports2.default = equal;
  }
});

// node_modules/ajv/dist/vocabularies/validation/uniqueItems.js
var require_uniqueItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/uniqueItems.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var dataType_1 = require_dataType();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var equal_1 = require_equal();
    var error = {
      message: ({ params: { i, j } }) => (0, codegen_1.str)`must NOT have duplicate items (items ## ${j} and ${i} are identical)`,
      params: ({ params: { i, j } }) => (0, codegen_1._)`{i: ${i}, j: ${j}}`
    };
    var def = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, $data, schema, parentSchema, schemaCode, it } = cxt;
        if (!$data && !schema)
          return;
        const valid = gen.let("valid");
        const itemTypes = parentSchema.items ? (0, dataType_1.getSchemaTypes)(parentSchema.items) : [];
        cxt.block$data(valid, validateUniqueItems, (0, codegen_1._)`${schemaCode} === false`);
        cxt.ok(valid);
        function validateUniqueItems() {
          const i = gen.let("i", (0, codegen_1._)`${data}.length`);
          const j = gen.let("j");
          cxt.setParams({ i, j });
          gen.assign(valid, true);
          gen.if((0, codegen_1._)`${i} > 1`, () => (canOptimize() ? loopN : loopN2)(i, j));
        }
        function canOptimize() {
          return itemTypes.length > 0 && !itemTypes.some((t) => t === "object" || t === "array");
        }
        function loopN(i, j) {
          const item = gen.name("item");
          const wrongType = (0, dataType_1.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, dataType_1.DataType.Wrong);
          const indices = gen.const("indices", (0, codegen_1._)`{}`);
          gen.for((0, codegen_1._)`;${i}--;`, () => {
            gen.let(item, (0, codegen_1._)`${data}[${i}]`);
            gen.if(wrongType, (0, codegen_1._)`continue`);
            if (itemTypes.length > 1)
              gen.if((0, codegen_1._)`typeof ${item} == "string"`, (0, codegen_1._)`${item} += "_"`);
            gen.if((0, codegen_1._)`typeof ${indices}[${item}] == "number"`, () => {
              gen.assign(j, (0, codegen_1._)`${indices}[${item}]`);
              cxt.error();
              gen.assign(valid, false).break();
            }).code((0, codegen_1._)`${indices}[${item}] = ${i}`);
          });
        }
        function loopN2(i, j) {
          const eql = (0, util_1.useFunc)(gen, equal_1.default);
          const outer = gen.name("outer");
          gen.label(outer).for((0, codegen_1._)`;${i}--;`, () => gen.for((0, codegen_1._)`${j} = ${i}; ${j}--;`, () => gen.if((0, codegen_1._)`${eql}(${data}[${i}], ${data}[${j}])`, () => {
            cxt.error();
            gen.assign(valid, false).break(outer);
          })));
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/const.js
var require_const = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/const.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var equal_1 = require_equal();
    var error = {
      message: "must be equal to constant",
      params: ({ schemaCode }) => (0, codegen_1._)`{allowedValue: ${schemaCode}}`
    };
    var def = {
      keyword: "const",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, $data, schemaCode, schema } = cxt;
        if ($data || schema && typeof schema == "object") {
          cxt.fail$data((0, codegen_1._)`!${(0, util_1.useFunc)(gen, equal_1.default)}(${data}, ${schemaCode})`);
        } else {
          cxt.fail((0, codegen_1._)`${schema} !== ${data}`);
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/enum.js
var require_enum = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/enum.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var equal_1 = require_equal();
    var error = {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode }) => (0, codegen_1._)`{allowedValues: ${schemaCode}}`
    };
    var def = {
      keyword: "enum",
      schemaType: "array",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, $data, schema, schemaCode, it } = cxt;
        if (!$data && schema.length === 0)
          throw new Error("enum must have non-empty array");
        const useLoop = schema.length >= it.opts.loopEnum;
        let eql;
        const getEql = () => eql !== null && eql !== void 0 ? eql : eql = (0, util_1.useFunc)(gen, equal_1.default);
        let valid;
        if (useLoop || $data) {
          valid = gen.let("valid");
          cxt.block$data(valid, loopEnum);
        } else {
          if (!Array.isArray(schema))
            throw new Error("ajv implementation error");
          const vSchema = gen.const("vSchema", schemaCode);
          valid = (0, codegen_1.or)(...schema.map((_x, i) => equalCode(vSchema, i)));
        }
        cxt.pass(valid);
        function loopEnum() {
          gen.assign(valid, false);
          gen.forOf("v", schemaCode, (v) => gen.if((0, codegen_1._)`${getEql()}(${data}, ${v})`, () => gen.assign(valid, true).break()));
        }
        function equalCode(vSchema, i) {
          const sch = schema[i];
          return typeof sch === "object" && sch !== null ? (0, codegen_1._)`${getEql()}(${data}, ${vSchema}[${i}])` : (0, codegen_1._)`${data} === ${sch}`;
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/index.js
var require_validation = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var limitNumber_1 = require_limitNumber();
    var multipleOf_1 = require_multipleOf();
    var limitLength_1 = require_limitLength();
    var pattern_1 = require_pattern();
    var limitProperties_1 = require_limitProperties();
    var required_1 = require_required();
    var limitItems_1 = require_limitItems();
    var uniqueItems_1 = require_uniqueItems();
    var const_1 = require_const();
    var enum_1 = require_enum();
    var validation = [
      // number
      limitNumber_1.default,
      multipleOf_1.default,
      // string
      limitLength_1.default,
      pattern_1.default,
      // object
      limitProperties_1.default,
      required_1.default,
      // array
      limitItems_1.default,
      uniqueItems_1.default,
      // any
      { keyword: "type", schemaType: ["string", "array"] },
      { keyword: "nullable", schemaType: "boolean" },
      const_1.default,
      enum_1.default
    ];
    exports2.default = validation;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/additionalItems.js
var require_additionalItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/additionalItems.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateAdditionalItems = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
      params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
    };
    var def = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error,
      code(cxt) {
        const { parentSchema, it } = cxt;
        const { items } = parentSchema;
        if (!Array.isArray(items)) {
          (0, util_1.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        validateAdditionalItems(cxt, items);
      }
    };
    function validateAdditionalItems(cxt, items) {
      const { gen, schema, data, keyword, it } = cxt;
      it.items = true;
      const len = gen.const("len", (0, codegen_1._)`${data}.length`);
      if (schema === false) {
        cxt.setParams({ len: items.length });
        cxt.pass((0, codegen_1._)`${len} <= ${items.length}`);
      } else if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
        const valid = gen.var("valid", (0, codegen_1._)`${len} <= ${items.length}`);
        gen.if((0, codegen_1.not)(valid), () => validateItems(valid));
        cxt.ok(valid);
      }
      function validateItems(valid) {
        gen.forRange("i", items.length, len, (i) => {
          cxt.subschema({ keyword, dataProp: i, dataPropType: util_1.Type.Num }, valid);
          if (!it.allErrors)
            gen.if((0, codegen_1.not)(valid), () => gen.break());
        });
      }
    }
    exports2.validateAdditionalItems = validateAdditionalItems;
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/items.js
var require_items = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/items.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateTuple = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var code_1 = require_code2();
    var def = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code(cxt) {
        const { schema, it } = cxt;
        if (Array.isArray(schema))
          return validateTuple(cxt, "additionalItems", schema);
        it.items = true;
        if ((0, util_1.alwaysValidSchema)(it, schema))
          return;
        cxt.ok((0, code_1.validateArray)(cxt));
      }
    };
    function validateTuple(cxt, extraItems, schArr = cxt.schema) {
      const { gen, parentSchema, data, keyword, it } = cxt;
      checkStrictTuple(parentSchema);
      if (it.opts.unevaluated && schArr.length && it.items !== true) {
        it.items = util_1.mergeEvaluated.items(gen, schArr.length, it.items);
      }
      const valid = gen.name("valid");
      const len = gen.const("len", (0, codegen_1._)`${data}.length`);
      schArr.forEach((sch, i) => {
        if ((0, util_1.alwaysValidSchema)(it, sch))
          return;
        gen.if((0, codegen_1._)`${len} > ${i}`, () => cxt.subschema({
          keyword,
          schemaProp: i,
          dataProp: i
        }, valid));
        cxt.ok(valid);
      });
      function checkStrictTuple(sch) {
        const { opts, errSchemaPath } = it;
        const l = schArr.length;
        const fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
        if (opts.strictTuples && !fullTuple) {
          const msg = `"${keyword}" is ${l}-tuple, but minItems or maxItems/${extraItems} are not specified or different at path "${errSchemaPath}"`;
          (0, util_1.checkStrictMode)(it, msg, opts.strictTuples);
        }
      }
    }
    exports2.validateTuple = validateTuple;
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/prefixItems.js
var require_prefixItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/prefixItems.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var items_1 = require_items();
    var def = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: (cxt) => (0, items_1.validateTuple)(cxt, "items")
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/items2020.js
var require_items2020 = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/items2020.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var code_1 = require_code2();
    var additionalItems_1 = require_additionalItems();
    var error = {
      message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
      params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
    };
    var def = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error,
      code(cxt) {
        const { schema, parentSchema, it } = cxt;
        const { prefixItems } = parentSchema;
        it.items = true;
        if ((0, util_1.alwaysValidSchema)(it, schema))
          return;
        if (prefixItems)
          (0, additionalItems_1.validateAdditionalItems)(cxt, prefixItems);
        else
          cxt.ok((0, code_1.validateArray)(cxt));
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/contains.js
var require_contains = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/contains.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1.str)`must contain at least ${min} valid item(s)` : (0, codegen_1.str)`must contain at least ${min} and no more than ${max} valid item(s)`,
      params: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1._)`{minContains: ${min}}` : (0, codegen_1._)`{minContains: ${min}, maxContains: ${max}}`
    };
    var def = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, schema, parentSchema, data, it } = cxt;
        let min;
        let max;
        const { minContains, maxContains } = parentSchema;
        if (it.opts.next) {
          min = minContains === void 0 ? 1 : minContains;
          max = maxContains;
        } else {
          min = 1;
        }
        const len = gen.const("len", (0, codegen_1._)`${data}.length`);
        cxt.setParams({ min, max });
        if (max === void 0 && min === 0) {
          (0, util_1.checkStrictMode)(it, `"minContains" == 0 without "maxContains": "contains" keyword ignored`);
          return;
        }
        if (max !== void 0 && min > max) {
          (0, util_1.checkStrictMode)(it, `"minContains" > "maxContains" is always invalid`);
          cxt.fail();
          return;
        }
        if ((0, util_1.alwaysValidSchema)(it, schema)) {
          let cond = (0, codegen_1._)`${len} >= ${min}`;
          if (max !== void 0)
            cond = (0, codegen_1._)`${cond} && ${len} <= ${max}`;
          cxt.pass(cond);
          return;
        }
        it.items = true;
        const valid = gen.name("valid");
        if (max === void 0 && min === 1) {
          validateItems(valid, () => gen.if(valid, () => gen.break()));
        } else if (min === 0) {
          gen.let(valid, true);
          if (max !== void 0)
            gen.if((0, codegen_1._)`${data}.length > 0`, validateItemsWithCount);
        } else {
          gen.let(valid, false);
          validateItemsWithCount();
        }
        cxt.result(valid, () => cxt.reset());
        function validateItemsWithCount() {
          const schValid = gen.name("_valid");
          const count = gen.let("count", 0);
          validateItems(schValid, () => gen.if(schValid, () => checkLimits(count)));
        }
        function validateItems(_valid, block) {
          gen.forRange("i", 0, len, (i) => {
            cxt.subschema({
              keyword: "contains",
              dataProp: i,
              dataPropType: util_1.Type.Num,
              compositeRule: true
            }, _valid);
            block();
          });
        }
        function checkLimits(count) {
          gen.code((0, codegen_1._)`${count}++`);
          if (max === void 0) {
            gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid, true).break());
          } else {
            gen.if((0, codegen_1._)`${count} > ${max}`, () => gen.assign(valid, false).break());
            if (min === 1)
              gen.assign(valid, true);
            else
              gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid, true));
          }
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/dependencies.js
var require_dependencies = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/dependencies.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateSchemaDeps = exports2.validatePropertyDeps = exports2.error = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var code_1 = require_code2();
    exports2.error = {
      message: ({ params: { property, depsCount, deps } }) => {
        const property_ies = depsCount === 1 ? "property" : "properties";
        return (0, codegen_1.str)`must have ${property_ies} ${deps} when property ${property} is present`;
      },
      params: ({ params: { property, depsCount, deps, missingProperty } }) => (0, codegen_1._)`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`
      // TODO change to reference
    };
    var def = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: exports2.error,
      code(cxt) {
        const [propDeps, schDeps] = splitDependencies(cxt);
        validatePropertyDeps(cxt, propDeps);
        validateSchemaDeps(cxt, schDeps);
      }
    };
    function splitDependencies({ schema }) {
      const propertyDeps = {};
      const schemaDeps = {};
      for (const key in schema) {
        if (key === "__proto__")
          continue;
        const deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
        deps[key] = schema[key];
      }
      return [propertyDeps, schemaDeps];
    }
    function validatePropertyDeps(cxt, propertyDeps = cxt.schema) {
      const { gen, data, it } = cxt;
      if (Object.keys(propertyDeps).length === 0)
        return;
      const missing = gen.let("missing");
      for (const prop in propertyDeps) {
        const deps = propertyDeps[prop];
        if (deps.length === 0)
          continue;
        const hasProperty = (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties);
        cxt.setParams({
          property: prop,
          depsCount: deps.length,
          deps: deps.join(", ")
        });
        if (it.allErrors) {
          gen.if(hasProperty, () => {
            for (const depProp of deps) {
              (0, code_1.checkReportMissingProp)(cxt, depProp);
            }
          });
        } else {
          gen.if((0, codegen_1._)`${hasProperty} && (${(0, code_1.checkMissingProp)(cxt, deps, missing)})`);
          (0, code_1.reportMissingProp)(cxt, missing);
          gen.else();
        }
      }
    }
    exports2.validatePropertyDeps = validatePropertyDeps;
    function validateSchemaDeps(cxt, schemaDeps = cxt.schema) {
      const { gen, data, keyword, it } = cxt;
      const valid = gen.name("valid");
      for (const prop in schemaDeps) {
        if ((0, util_1.alwaysValidSchema)(it, schemaDeps[prop]))
          continue;
        gen.if(
          (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties),
          () => {
            const schCxt = cxt.subschema({ keyword, schemaProp: prop }, valid);
            cxt.mergeValidEvaluated(schCxt, valid);
          },
          () => gen.var(valid, true)
          // TODO var
        );
        cxt.ok(valid);
      }
    }
    exports2.validateSchemaDeps = validateSchemaDeps;
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/propertyNames.js
var require_propertyNames = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/propertyNames.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: "property name must be valid",
      params: ({ params }) => (0, codegen_1._)`{propertyName: ${params.propertyName}}`
    };
    var def = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error,
      code(cxt) {
        const { gen, schema, data, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema))
          return;
        const valid = gen.name("valid");
        gen.forIn("key", data, (key) => {
          cxt.setParams({ propertyName: key });
          cxt.subschema({
            keyword: "propertyNames",
            data: key,
            dataTypes: ["string"],
            propertyName: key,
            compositeRule: true
          }, valid);
          gen.if((0, codegen_1.not)(valid), () => {
            cxt.error(true);
            if (!it.allErrors)
              gen.break();
          });
        });
        cxt.ok(valid);
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js
var require_additionalProperties = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var util_1 = require_util();
    var error = {
      message: "must NOT have additional properties",
      params: ({ params }) => (0, codegen_1._)`{additionalProperty: ${params.additionalProperty}}`
    };
    var def = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: true,
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, schema, parentSchema, data, errsCount, it } = cxt;
        if (!errsCount)
          throw new Error("ajv implementation error");
        const { allErrors, opts } = it;
        it.props = true;
        if (opts.removeAdditional !== "all" && (0, util_1.alwaysValidSchema)(it, schema))
          return;
        const props = (0, code_1.allSchemaProperties)(parentSchema.properties);
        const patProps = (0, code_1.allSchemaProperties)(parentSchema.patternProperties);
        checkAdditionalProperties();
        cxt.ok((0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
        function checkAdditionalProperties() {
          gen.forIn("key", data, (key) => {
            if (!props.length && !patProps.length)
              additionalPropertyCode(key);
            else
              gen.if(isAdditional(key), () => additionalPropertyCode(key));
          });
        }
        function isAdditional(key) {
          let definedProp;
          if (props.length > 8) {
            const propsSchema = (0, util_1.schemaRefOrVal)(it, parentSchema.properties, "properties");
            definedProp = (0, code_1.isOwnProperty)(gen, propsSchema, key);
          } else if (props.length) {
            definedProp = (0, codegen_1.or)(...props.map((p) => (0, codegen_1._)`${key} === ${p}`));
          } else {
            definedProp = codegen_1.nil;
          }
          if (patProps.length) {
            definedProp = (0, codegen_1.or)(definedProp, ...patProps.map((p) => (0, codegen_1._)`${(0, code_1.usePattern)(cxt, p)}.test(${key})`));
          }
          return (0, codegen_1.not)(definedProp);
        }
        function deleteAdditional(key) {
          gen.code((0, codegen_1._)`delete ${data}[${key}]`);
        }
        function additionalPropertyCode(key) {
          if (opts.removeAdditional === "all" || opts.removeAdditional && schema === false) {
            deleteAdditional(key);
            return;
          }
          if (schema === false) {
            cxt.setParams({ additionalProperty: key });
            cxt.error();
            if (!allErrors)
              gen.break();
            return;
          }
          if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
            const valid = gen.name("valid");
            if (opts.removeAdditional === "failing") {
              applyAdditionalSchema(key, valid, false);
              gen.if((0, codegen_1.not)(valid), () => {
                cxt.reset();
                deleteAdditional(key);
              });
            } else {
              applyAdditionalSchema(key, valid);
              if (!allErrors)
                gen.if((0, codegen_1.not)(valid), () => gen.break());
            }
          }
        }
        function applyAdditionalSchema(key, valid, errors) {
          const subschema = {
            keyword: "additionalProperties",
            dataProp: key,
            dataPropType: util_1.Type.Str
          };
          if (errors === false) {
            Object.assign(subschema, {
              compositeRule: true,
              createErrors: false,
              allErrors: false
            });
          }
          cxt.subschema(subschema, valid);
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/properties.js
var require_properties = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/properties.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var validate_1 = require_validate();
    var code_1 = require_code2();
    var util_1 = require_util();
    var additionalProperties_1 = require_additionalProperties();
    var def = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(cxt) {
        const { gen, schema, parentSchema, data, it } = cxt;
        if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === void 0) {
          additionalProperties_1.default.code(new validate_1.KeywordCxt(it, additionalProperties_1.default, "additionalProperties"));
        }
        const allProps = (0, code_1.allSchemaProperties)(schema);
        for (const prop of allProps) {
          it.definedProperties.add(prop);
        }
        if (it.opts.unevaluated && allProps.length && it.props !== true) {
          it.props = util_1.mergeEvaluated.props(gen, (0, util_1.toHash)(allProps), it.props);
        }
        const properties = allProps.filter((p) => !(0, util_1.alwaysValidSchema)(it, schema[p]));
        if (properties.length === 0)
          return;
        const valid = gen.name("valid");
        for (const prop of properties) {
          if (hasDefault(prop)) {
            applyPropertySchema(prop);
          } else {
            gen.if((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties));
            applyPropertySchema(prop);
            if (!it.allErrors)
              gen.else().var(valid, true);
            gen.endIf();
          }
          cxt.it.definedProperties.add(prop);
          cxt.ok(valid);
        }
        function hasDefault(prop) {
          return it.opts.useDefaults && !it.compositeRule && schema[prop].default !== void 0;
        }
        function applyPropertySchema(prop) {
          cxt.subschema({
            keyword: "properties",
            schemaProp: prop,
            dataProp: prop
          }, valid);
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/patternProperties.js
var require_patternProperties = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/patternProperties.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var util_2 = require_util();
    var def = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(cxt) {
        const { gen, schema, data, parentSchema, it } = cxt;
        const { opts } = it;
        const patterns2 = (0, code_1.allSchemaProperties)(schema);
        const alwaysValidPatterns = patterns2.filter((p) => (0, util_1.alwaysValidSchema)(it, schema[p]));
        if (patterns2.length === 0 || alwaysValidPatterns.length === patterns2.length && (!it.opts.unevaluated || it.props === true)) {
          return;
        }
        const checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
        const valid = gen.name("valid");
        if (it.props !== true && !(it.props instanceof codegen_1.Name)) {
          it.props = (0, util_2.evaluatedPropsToName)(gen, it.props);
        }
        const { props } = it;
        validatePatternProperties();
        function validatePatternProperties() {
          for (const pat of patterns2) {
            if (checkProperties)
              checkMatchingProperties(pat);
            if (it.allErrors) {
              validateProperties(pat);
            } else {
              gen.var(valid, true);
              validateProperties(pat);
              gen.if(valid);
            }
          }
        }
        function checkMatchingProperties(pat) {
          for (const prop in checkProperties) {
            if (new RegExp(pat).test(prop)) {
              (0, util_1.checkStrictMode)(it, `property ${prop} matches pattern ${pat} (use allowMatchingProperties)`);
            }
          }
        }
        function validateProperties(pat) {
          gen.forIn("key", data, (key) => {
            gen.if((0, codegen_1._)`${(0, code_1.usePattern)(cxt, pat)}.test(${key})`, () => {
              const alwaysValid = alwaysValidPatterns.includes(pat);
              if (!alwaysValid) {
                cxt.subschema({
                  keyword: "patternProperties",
                  schemaProp: pat,
                  dataProp: key,
                  dataPropType: util_2.Type.Str
                }, valid);
              }
              if (it.opts.unevaluated && props !== true) {
                gen.assign((0, codegen_1._)`${props}[${key}]`, true);
              } else if (!alwaysValid && !it.allErrors) {
                gen.if((0, codegen_1.not)(valid), () => gen.break());
              }
            });
          });
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/not.js
var require_not = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/not.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util_1 = require_util();
    var def = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: true,
      code(cxt) {
        const { gen, schema, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema)) {
          cxt.fail();
          return;
        }
        const valid = gen.name("valid");
        cxt.subschema({
          keyword: "not",
          compositeRule: true,
          createErrors: false,
          allErrors: false
        }, valid);
        cxt.failResult(valid, () => cxt.reset(), () => cxt.error());
      },
      error: { message: "must NOT be valid" }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/anyOf.js
var require_anyOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/anyOf.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var code_1 = require_code2();
    var def = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: true,
      code: code_1.validateUnion,
      error: { message: "must match a schema in anyOf" }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/oneOf.js
var require_oneOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/oneOf.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: "must match exactly one schema in oneOf",
      params: ({ params }) => (0, codegen_1._)`{passingSchemas: ${params.passing}}`
    };
    var def = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, schema, parentSchema, it } = cxt;
        if (!Array.isArray(schema))
          throw new Error("ajv implementation error");
        if (it.opts.discriminator && parentSchema.discriminator)
          return;
        const schArr = schema;
        const valid = gen.let("valid", false);
        const passing = gen.let("passing", null);
        const schValid = gen.name("_valid");
        cxt.setParams({ passing });
        gen.block(validateOneOf);
        cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
        function validateOneOf() {
          schArr.forEach((sch, i) => {
            let schCxt;
            if ((0, util_1.alwaysValidSchema)(it, sch)) {
              gen.var(schValid, true);
            } else {
              schCxt = cxt.subschema({
                keyword: "oneOf",
                schemaProp: i,
                compositeRule: true
              }, schValid);
            }
            if (i > 0) {
              gen.if((0, codegen_1._)`${schValid} && ${valid}`).assign(valid, false).assign(passing, (0, codegen_1._)`[${passing}, ${i}]`).else();
            }
            gen.if(schValid, () => {
              gen.assign(valid, true);
              gen.assign(passing, i);
              if (schCxt)
                cxt.mergeEvaluated(schCxt, codegen_1.Name);
            });
          });
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/allOf.js
var require_allOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/allOf.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util_1 = require_util();
    var def = {
      keyword: "allOf",
      schemaType: "array",
      code(cxt) {
        const { gen, schema, it } = cxt;
        if (!Array.isArray(schema))
          throw new Error("ajv implementation error");
        const valid = gen.name("valid");
        schema.forEach((sch, i) => {
          if ((0, util_1.alwaysValidSchema)(it, sch))
            return;
          const schCxt = cxt.subschema({ keyword: "allOf", schemaProp: i }, valid);
          cxt.ok(valid);
          cxt.mergeEvaluated(schCxt);
        });
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/if.js
var require_if = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/if.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params }) => (0, codegen_1.str)`must match "${params.ifClause}" schema`,
      params: ({ params }) => (0, codegen_1._)`{failingKeyword: ${params.ifClause}}`
    };
    var def = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, parentSchema, it } = cxt;
        if (parentSchema.then === void 0 && parentSchema.else === void 0) {
          (0, util_1.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
        }
        const hasThen = hasSchema(it, "then");
        const hasElse = hasSchema(it, "else");
        if (!hasThen && !hasElse)
          return;
        const valid = gen.let("valid", true);
        const schValid = gen.name("_valid");
        validateIf();
        cxt.reset();
        if (hasThen && hasElse) {
          const ifClause = gen.let("ifClause");
          cxt.setParams({ ifClause });
          gen.if(schValid, validateClause("then", ifClause), validateClause("else", ifClause));
        } else if (hasThen) {
          gen.if(schValid, validateClause("then"));
        } else {
          gen.if((0, codegen_1.not)(schValid), validateClause("else"));
        }
        cxt.pass(valid, () => cxt.error(true));
        function validateIf() {
          const schCxt = cxt.subschema({
            keyword: "if",
            compositeRule: true,
            createErrors: false,
            allErrors: false
          }, schValid);
          cxt.mergeEvaluated(schCxt);
        }
        function validateClause(keyword, ifClause) {
          return () => {
            const schCxt = cxt.subschema({ keyword }, schValid);
            gen.assign(valid, schValid);
            cxt.mergeValidEvaluated(schCxt, valid);
            if (ifClause)
              gen.assign(ifClause, (0, codegen_1._)`${keyword}`);
            else
              cxt.setParams({ ifClause: keyword });
          };
        }
      }
    };
    function hasSchema(it, keyword) {
      const schema = it.schema[keyword];
      return schema !== void 0 && !(0, util_1.alwaysValidSchema)(it, schema);
    }
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/thenElse.js
var require_thenElse = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/thenElse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util_1 = require_util();
    var def = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword, parentSchema, it }) {
        if (parentSchema.if === void 0)
          (0, util_1.checkStrictMode)(it, `"${keyword}" without "if" is ignored`);
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/index.js
var require_applicator = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var additionalItems_1 = require_additionalItems();
    var prefixItems_1 = require_prefixItems();
    var items_1 = require_items();
    var items2020_1 = require_items2020();
    var contains_1 = require_contains();
    var dependencies_1 = require_dependencies();
    var propertyNames_1 = require_propertyNames();
    var additionalProperties_1 = require_additionalProperties();
    var properties_1 = require_properties();
    var patternProperties_1 = require_patternProperties();
    var not_1 = require_not();
    var anyOf_1 = require_anyOf();
    var oneOf_1 = require_oneOf();
    var allOf_1 = require_allOf();
    var if_1 = require_if();
    var thenElse_1 = require_thenElse();
    function getApplicator(draft2020 = false) {
      const applicator = [
        // any
        not_1.default,
        anyOf_1.default,
        oneOf_1.default,
        allOf_1.default,
        if_1.default,
        thenElse_1.default,
        // object
        propertyNames_1.default,
        additionalProperties_1.default,
        dependencies_1.default,
        properties_1.default,
        patternProperties_1.default
      ];
      if (draft2020)
        applicator.push(prefixItems_1.default, items2020_1.default);
      else
        applicator.push(additionalItems_1.default, items_1.default);
      applicator.push(contains_1.default);
      return applicator;
    }
    exports2.default = getApplicator;
  }
});

// node_modules/ajv/dist/vocabularies/format/format.js
var require_format = __commonJS({
  "node_modules/ajv/dist/vocabularies/format/format.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must match format "${schemaCode}"`,
      params: ({ schemaCode }) => (0, codegen_1._)`{format: ${schemaCode}}`
    };
    var def = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: true,
      error,
      code(cxt, ruleType) {
        const { gen, data, $data, schema, schemaCode, it } = cxt;
        const { opts, errSchemaPath, schemaEnv, self } = it;
        if (!opts.validateFormats)
          return;
        if ($data)
          validate$DataFormat();
        else
          validateFormat();
        function validate$DataFormat() {
          const fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          });
          const fDef = gen.const("fDef", (0, codegen_1._)`${fmts}[${schemaCode}]`);
          const fType = gen.let("fType");
          const format = gen.let("format");
          gen.if((0, codegen_1._)`typeof ${fDef} == "object" && !(${fDef} instanceof RegExp)`, () => gen.assign(fType, (0, codegen_1._)`${fDef}.type || "string"`).assign(format, (0, codegen_1._)`${fDef}.validate`), () => gen.assign(fType, (0, codegen_1._)`"string"`).assign(format, fDef));
          cxt.fail$data((0, codegen_1.or)(unknownFmt(), invalidFmt()));
          function unknownFmt() {
            if (opts.strictSchema === false)
              return codegen_1.nil;
            return (0, codegen_1._)`${schemaCode} && !${format}`;
          }
          function invalidFmt() {
            const callFormat = schemaEnv.$async ? (0, codegen_1._)`(${fDef}.async ? await ${format}(${data}) : ${format}(${data}))` : (0, codegen_1._)`${format}(${data})`;
            const validData = (0, codegen_1._)`(typeof ${format} == "function" ? ${callFormat} : ${format}.test(${data}))`;
            return (0, codegen_1._)`${format} && ${format} !== true && ${fType} === ${ruleType} && !${validData}`;
          }
        }
        function validateFormat() {
          const formatDef = self.formats[schema];
          if (!formatDef) {
            unknownFormat();
            return;
          }
          if (formatDef === true)
            return;
          const [fmtType, format, fmtRef] = getFormat(formatDef);
          if (fmtType === ruleType)
            cxt.pass(validCondition());
          function unknownFormat() {
            if (opts.strictSchema === false) {
              self.logger.warn(unknownMsg());
              return;
            }
            throw new Error(unknownMsg());
            function unknownMsg() {
              return `unknown format "${schema}" ignored in schema at path "${errSchemaPath}"`;
            }
          }
          function getFormat(fmtDef) {
            const code = fmtDef instanceof RegExp ? (0, codegen_1.regexpCode)(fmtDef) : opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(schema)}` : void 0;
            const fmt = gen.scopeValue("formats", { key: schema, ref: fmtDef, code });
            if (typeof fmtDef == "object" && !(fmtDef instanceof RegExp)) {
              return [fmtDef.type || "string", fmtDef.validate, (0, codegen_1._)`${fmt}.validate`];
            }
            return ["string", fmtDef, fmt];
          }
          function validCondition() {
            if (typeof formatDef == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
              if (!schemaEnv.$async)
                throw new Error("async format in sync schema");
              return (0, codegen_1._)`await ${fmtRef}(${data})`;
            }
            return typeof format == "function" ? (0, codegen_1._)`${fmtRef}(${data})` : (0, codegen_1._)`${fmtRef}.test(${data})`;
          }
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/format/index.js
var require_format2 = __commonJS({
  "node_modules/ajv/dist/vocabularies/format/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var format_1 = require_format();
    var format = [format_1.default];
    exports2.default = format;
  }
});

// node_modules/ajv/dist/vocabularies/metadata.js
var require_metadata = __commonJS({
  "node_modules/ajv/dist/vocabularies/metadata.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.contentVocabulary = exports2.metadataVocabulary = void 0;
    exports2.metadataVocabulary = [
      "title",
      "description",
      "default",
      "deprecated",
      "readOnly",
      "writeOnly",
      "examples"
    ];
    exports2.contentVocabulary = [
      "contentMediaType",
      "contentEncoding",
      "contentSchema"
    ];
  }
});

// node_modules/ajv/dist/vocabularies/draft7.js
var require_draft7 = __commonJS({
  "node_modules/ajv/dist/vocabularies/draft7.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var core_1 = require_core2();
    var validation_1 = require_validation();
    var applicator_1 = require_applicator();
    var format_1 = require_format2();
    var metadata_1 = require_metadata();
    var draft7Vocabularies = [
      core_1.default,
      validation_1.default,
      (0, applicator_1.default)(),
      format_1.default,
      metadata_1.metadataVocabulary,
      metadata_1.contentVocabulary
    ];
    exports2.default = draft7Vocabularies;
  }
});

// node_modules/ajv/dist/vocabularies/discriminator/types.js
var require_types = __commonJS({
  "node_modules/ajv/dist/vocabularies/discriminator/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiscrError = void 0;
    var DiscrError;
    (function(DiscrError2) {
      DiscrError2["Tag"] = "tag";
      DiscrError2["Mapping"] = "mapping";
    })(DiscrError || (exports2.DiscrError = DiscrError = {}));
  }
});

// node_modules/ajv/dist/vocabularies/discriminator/index.js
var require_discriminator = __commonJS({
  "node_modules/ajv/dist/vocabularies/discriminator/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var types_1 = require_types();
    var compile_1 = require_compile();
    var ref_error_1 = require_ref_error();
    var util_1 = require_util();
    var error = {
      message: ({ params: { discrError, tagName } }) => discrError === types_1.DiscrError.Tag ? `tag "${tagName}" must be string` : `value of tag "${tagName}" must be in oneOf`,
      params: ({ params: { discrError, tag, tagName } }) => (0, codegen_1._)`{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`
    };
    var def = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error,
      code(cxt) {
        const { gen, data, schema, parentSchema, it } = cxt;
        const { oneOf } = parentSchema;
        if (!it.opts.discriminator) {
          throw new Error("discriminator: requires discriminator option");
        }
        const tagName = schema.propertyName;
        if (typeof tagName != "string")
          throw new Error("discriminator: requires propertyName");
        if (schema.mapping)
          throw new Error("discriminator: mapping is not supported");
        if (!oneOf)
          throw new Error("discriminator: requires oneOf keyword");
        const valid = gen.let("valid", false);
        const tag = gen.const("tag", (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(tagName)}`);
        gen.if((0, codegen_1._)`typeof ${tag} == "string"`, () => validateMapping(), () => cxt.error(false, { discrError: types_1.DiscrError.Tag, tag, tagName }));
        cxt.ok(valid);
        function validateMapping() {
          const mapping = getMapping();
          gen.if(false);
          for (const tagValue in mapping) {
            gen.elseIf((0, codegen_1._)`${tag} === ${tagValue}`);
            gen.assign(valid, applyTagSchema(mapping[tagValue]));
          }
          gen.else();
          cxt.error(false, { discrError: types_1.DiscrError.Mapping, tag, tagName });
          gen.endIf();
        }
        function applyTagSchema(schemaProp) {
          const _valid = gen.name("valid");
          const schCxt = cxt.subschema({ keyword: "oneOf", schemaProp }, _valid);
          cxt.mergeEvaluated(schCxt, codegen_1.Name);
          return _valid;
        }
        function getMapping() {
          var _a;
          const oneOfMapping = {};
          const topRequired = hasRequired(parentSchema);
          let tagRequired = true;
          for (let i = 0; i < oneOf.length; i++) {
            let sch = oneOf[i];
            if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, util_1.schemaHasRulesButRef)(sch, it.self.RULES)) {
              const ref = sch.$ref;
              sch = compile_1.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, ref);
              if (sch instanceof compile_1.SchemaEnv)
                sch = sch.schema;
              if (sch === void 0)
                throw new ref_error_1.default(it.opts.uriResolver, it.baseId, ref);
            }
            const propSch = (_a = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a === void 0 ? void 0 : _a[tagName];
            if (typeof propSch != "object") {
              throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${tagName}"`);
            }
            tagRequired = tagRequired && (topRequired || hasRequired(sch));
            addMappings(propSch, i);
          }
          if (!tagRequired)
            throw new Error(`discriminator: "${tagName}" must be required`);
          return oneOfMapping;
          function hasRequired({ required }) {
            return Array.isArray(required) && required.includes(tagName);
          }
          function addMappings(sch, i) {
            if (sch.const) {
              addMapping(sch.const, i);
            } else if (sch.enum) {
              for (const tagValue of sch.enum) {
                addMapping(tagValue, i);
              }
            } else {
              throw new Error(`discriminator: "properties/${tagName}" must have "const" or "enum"`);
            }
          }
          function addMapping(tagValue, i) {
            if (typeof tagValue != "string" || tagValue in oneOfMapping) {
              throw new Error(`discriminator: "${tagName}" values must be unique strings`);
            }
            oneOfMapping[tagValue] = i;
          }
        }
      }
    };
    exports2.default = def;
  }
});

// node_modules/ajv/dist/refs/json-schema-draft-07.json
var require_json_schema_draft_07 = __commonJS({
  "node_modules/ajv/dist/refs/json-schema-draft-07.json"(exports2, module2) {
    module2.exports = {
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "http://json-schema.org/draft-07/schema#",
      title: "Core schema meta-schema",
      definitions: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: { $ref: "#" }
        },
        nonNegativeInteger: {
          type: "integer",
          minimum: 0
        },
        nonNegativeIntegerDefault0: {
          allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }]
        },
        simpleTypes: {
          enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          uniqueItems: true,
          default: []
        }
      },
      type: ["object", "boolean"],
      properties: {
        $id: {
          type: "string",
          format: "uri-reference"
        },
        $schema: {
          type: "string",
          format: "uri"
        },
        $ref: {
          type: "string",
          format: "uri-reference"
        },
        $comment: {
          type: "string"
        },
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: true,
        readOnly: {
          type: "boolean",
          default: false
        },
        examples: {
          type: "array",
          items: true
        },
        multipleOf: {
          type: "number",
          exclusiveMinimum: 0
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "number"
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "number"
        },
        maxLength: { $ref: "#/definitions/nonNegativeInteger" },
        minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        pattern: {
          type: "string",
          format: "regex"
        },
        additionalItems: { $ref: "#" },
        items: {
          anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
          default: true
        },
        maxItems: { $ref: "#/definitions/nonNegativeInteger" },
        minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        uniqueItems: {
          type: "boolean",
          default: false
        },
        contains: { $ref: "#" },
        maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
        minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: { $ref: "#" },
        definitions: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        properties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          propertyNames: { format: "regex" },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }]
          }
        },
        propertyNames: { $ref: "#" },
        const: true,
        enum: {
          type: "array",
          items: true,
          minItems: 1,
          uniqueItems: true
        },
        type: {
          anyOf: [
            { $ref: "#/definitions/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/definitions/simpleTypes" },
              minItems: 1,
              uniqueItems: true
            }
          ]
        },
        format: { type: "string" },
        contentMediaType: { type: "string" },
        contentEncoding: { type: "string" },
        if: { $ref: "#" },
        then: { $ref: "#" },
        else: { $ref: "#" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
      },
      default: true
    };
  }
});

// node_modules/ajv/dist/ajv.js
var require_ajv = __commonJS({
  "node_modules/ajv/dist/ajv.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MissingRefError = exports2.ValidationError = exports2.CodeGen = exports2.Name = exports2.nil = exports2.stringify = exports2.str = exports2._ = exports2.KeywordCxt = exports2.Ajv = void 0;
    var core_1 = require_core();
    var draft7_1 = require_draft7();
    var discriminator_1 = require_discriminator();
    var draft7MetaSchema = require_json_schema_draft_07();
    var META_SUPPORT_DATA = ["/properties"];
    var META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
    var Ajv2 = class extends core_1.default {
      _addVocabularies() {
        super._addVocabularies();
        draft7_1.default.forEach((v) => this.addVocabulary(v));
        if (this.opts.discriminator)
          this.addKeyword(discriminator_1.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        if (!this.opts.meta)
          return;
        const metaSchema = this.opts.$data ? this.$dataMetaSchema(draft7MetaSchema, META_SUPPORT_DATA) : draft7MetaSchema;
        this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
        this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : void 0);
      }
    };
    exports2.Ajv = Ajv2;
    module2.exports = exports2 = Ajv2;
    module2.exports.Ajv = Ajv2;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = Ajv2;
    var validate_1 = require_validate();
    Object.defineProperty(exports2, "KeywordCxt", { enumerable: true, get: function() {
      return validate_1.KeywordCxt;
    } });
    var codegen_1 = require_codegen();
    Object.defineProperty(exports2, "_", { enumerable: true, get: function() {
      return codegen_1._;
    } });
    Object.defineProperty(exports2, "str", { enumerable: true, get: function() {
      return codegen_1.str;
    } });
    Object.defineProperty(exports2, "stringify", { enumerable: true, get: function() {
      return codegen_1.stringify;
    } });
    Object.defineProperty(exports2, "nil", { enumerable: true, get: function() {
      return codegen_1.nil;
    } });
    Object.defineProperty(exports2, "Name", { enumerable: true, get: function() {
      return codegen_1.Name;
    } });
    Object.defineProperty(exports2, "CodeGen", { enumerable: true, get: function() {
      return codegen_1.CodeGen;
    } });
    var validation_error_1 = require_validation_error();
    Object.defineProperty(exports2, "ValidationError", { enumerable: true, get: function() {
      return validation_error_1.default;
    } });
    var ref_error_1 = require_ref_error();
    Object.defineProperty(exports2, "MissingRefError", { enumerable: true, get: function() {
      return ref_error_1.default;
    } });
  }
});

// node_modules/ajv-formats/dist/formats.js
var require_formats = __commonJS({
  "node_modules/ajv-formats/dist/formats.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.formatNames = exports2.fastFormats = exports2.fullFormats = void 0;
    function fmtDef(validate, compare) {
      return { validate, compare };
    }
    exports2.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: fmtDef(date, compareDate),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: fmtDef(getTime(true), compareTime),
      "date-time": fmtDef(getDateTime(true), compareDateTime),
      "iso-time": fmtDef(getTime(), compareIsoTime),
      "iso-date-time": fmtDef(getDateTime(), compareIsoDateTime),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      // uri-template: https://tools.ietf.org/html/rfc6570
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      // For the source: https://gist.github.com/dperini/729294
      // For test cases: https://mathiasbynens.be/demo/url-regex
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
      // byte: https://github.com/miguelmota/is-base64
      byte,
      // signed 32 bit integer
      int32: { type: "number", validate: validateInt32 },
      // signed 64 bit integer
      int64: { type: "number", validate: validateInt64 },
      // C-type float
      float: { type: "number", validate: validateNumber },
      // C-type double
      double: { type: "number", validate: validateNumber },
      // hint to the UI to hide input strings
      password: true,
      // unchecked string payload
      binary: true
    };
    exports2.fastFormats = {
      ...exports2.fullFormats,
      date: fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate),
      time: fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareTime),
      "date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime),
      "iso-time": fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoTime),
      "iso-date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoDateTime),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    };
    exports2.formatNames = Object.keys(exports2.fullFormats);
    function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
    var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function date(str) {
      const matches = DATE.exec(str);
      if (!matches)
        return false;
      const year = +matches[1];
      const month = +matches[2];
      const day = +matches[3];
      return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
    }
    function compareDate(d1, d2) {
      if (!(d1 && d2))
        return void 0;
      if (d1 > d2)
        return 1;
      if (d1 < d2)
        return -1;
      return 0;
    }
    var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function getTime(strictTimeZone) {
      return function time(str) {
        const matches = TIME.exec(str);
        if (!matches)
          return false;
        const hr = +matches[1];
        const min = +matches[2];
        const sec = +matches[3];
        const tz = matches[4];
        const tzSign = matches[5] === "-" ? -1 : 1;
        const tzH = +(matches[6] || 0);
        const tzM = +(matches[7] || 0);
        if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
          return false;
        if (hr <= 23 && min <= 59 && sec < 60)
          return true;
        const utcMin = min - tzM * tzSign;
        const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
        return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
      };
    }
    function compareTime(s1, s2) {
      if (!(s1 && s2))
        return void 0;
      const t1 = (/* @__PURE__ */ new Date("2020-01-01T" + s1)).valueOf();
      const t2 = (/* @__PURE__ */ new Date("2020-01-01T" + s2)).valueOf();
      if (!(t1 && t2))
        return void 0;
      return t1 - t2;
    }
    function compareIsoTime(t1, t2) {
      if (!(t1 && t2))
        return void 0;
      const a1 = TIME.exec(t1);
      const a2 = TIME.exec(t2);
      if (!(a1 && a2))
        return void 0;
      t1 = a1[1] + a1[2] + a1[3];
      t2 = a2[1] + a2[2] + a2[3];
      if (t1 > t2)
        return 1;
      if (t1 < t2)
        return -1;
      return 0;
    }
    var DATE_TIME_SEPARATOR = /t|\s/i;
    function getDateTime(strictTimeZone) {
      const time = getTime(strictTimeZone);
      return function date_time(str) {
        const dateTime = str.split(DATE_TIME_SEPARATOR);
        return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1]);
      };
    }
    function compareDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return void 0;
      const d1 = new Date(dt1).valueOf();
      const d2 = new Date(dt2).valueOf();
      if (!(d1 && d2))
        return void 0;
      return d1 - d2;
    }
    function compareIsoDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return void 0;
      const [d1, t1] = dt1.split(DATE_TIME_SEPARATOR);
      const [d2, t2] = dt2.split(DATE_TIME_SEPARATOR);
      const res = compareDate(d1, d2);
      if (res === void 0)
        return void 0;
      return res || compareTime(t1, t2);
    }
    var NOT_URI_FRAGMENT = /\/|:/;
    var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri(str) {
      return NOT_URI_FRAGMENT.test(str) && URI.test(str);
    }
    var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function byte(str) {
      BYTE.lastIndex = 0;
      return BYTE.test(str);
    }
    var MIN_INT32 = -(2 ** 31);
    var MAX_INT32 = 2 ** 31 - 1;
    function validateInt32(value) {
      return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
    }
    function validateInt64(value) {
      return Number.isInteger(value);
    }
    function validateNumber() {
      return true;
    }
    var Z_ANCHOR = /[^\\]\\Z/;
    function regex(str) {
      if (Z_ANCHOR.test(str))
        return false;
      try {
        new RegExp(str);
        return true;
      } catch (e) {
        return false;
      }
    }
  }
});

// node_modules/ajv-formats/dist/limit.js
var require_limit = __commonJS({
  "node_modules/ajv-formats/dist/limit.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.formatLimitDefinition = void 0;
    var ajv_1 = require_ajv();
    var codegen_1 = require_codegen();
    var ops = codegen_1.operators;
    var KWDs = {
      formatMaximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
      formatMinimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
      formatExclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
    };
    var error = {
      message: ({ keyword, schemaCode }) => (0, codegen_1.str)`should be ${KWDs[keyword].okStr} ${schemaCode}`,
      params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
    };
    exports2.formatLimitDefinition = {
      keyword: Object.keys(KWDs),
      type: "string",
      schemaType: "string",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, schemaCode, keyword, it } = cxt;
        const { opts, self } = it;
        if (!opts.validateFormats)
          return;
        const fCxt = new ajv_1.KeywordCxt(it, self.RULES.all.format.definition, "format");
        if (fCxt.$data)
          validate$DataFormat();
        else
          validateFormat();
        function validate$DataFormat() {
          const fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          });
          const fmt = gen.const("fmt", (0, codegen_1._)`${fmts}[${fCxt.schemaCode}]`);
          cxt.fail$data((0, codegen_1.or)((0, codegen_1._)`typeof ${fmt} != "object"`, (0, codegen_1._)`${fmt} instanceof RegExp`, (0, codegen_1._)`typeof ${fmt}.compare != "function"`, compareCode(fmt)));
        }
        function validateFormat() {
          const format = fCxt.schema;
          const fmtDef = self.formats[format];
          if (!fmtDef || fmtDef === true)
            return;
          if (typeof fmtDef != "object" || fmtDef instanceof RegExp || typeof fmtDef.compare != "function") {
            throw new Error(`"${keyword}": format "${format}" does not define "compare" function`);
          }
          const fmt = gen.scopeValue("formats", {
            key: format,
            ref: fmtDef,
            code: opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(format)}` : void 0
          });
          cxt.fail$data(compareCode(fmt));
        }
        function compareCode(fmt) {
          return (0, codegen_1._)`${fmt}.compare(${data}, ${schemaCode}) ${KWDs[keyword].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    var formatLimitPlugin = (ajv2) => {
      ajv2.addKeyword(exports2.formatLimitDefinition);
      return ajv2;
    };
    exports2.default = formatLimitPlugin;
  }
});

// node_modules/ajv-formats/dist/index.js
var require_dist = __commonJS({
  "node_modules/ajv-formats/dist/index.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var formats_1 = require_formats();
    var limit_1 = require_limit();
    var codegen_1 = require_codegen();
    var fullName = new codegen_1.Name("fullFormats");
    var fastName = new codegen_1.Name("fastFormats");
    var formatsPlugin = (ajv2, opts = { keywords: true }) => {
      if (Array.isArray(opts)) {
        addFormats2(ajv2, opts, formats_1.fullFormats, fullName);
        return ajv2;
      }
      const [formats, exportName] = opts.mode === "fast" ? [formats_1.fastFormats, fastName] : [formats_1.fullFormats, fullName];
      const list = opts.formats || formats_1.formatNames;
      addFormats2(ajv2, list, formats, exportName);
      if (opts.keywords)
        (0, limit_1.default)(ajv2);
      return ajv2;
    };
    formatsPlugin.get = (name, mode = "full") => {
      const formats = mode === "fast" ? formats_1.fastFormats : formats_1.fullFormats;
      const f = formats[name];
      if (!f)
        throw new Error(`Unknown format "${name}"`);
      return f;
    };
    function addFormats2(ajv2, list, fs, exportName) {
      var _a;
      var _b;
      (_a = (_b = ajv2.opts.code).formats) !== null && _a !== void 0 ? _a : _b.formats = (0, codegen_1._)`require("ajv-formats/dist/formats").${exportName}`;
      for (const f of list)
        ajv2.addFormat(f, fs[f]);
    }
    module2.exports = exports2 = formatsPlugin;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = formatsPlugin;
  }
});

// scripts/sync/config-center-runtime-standalone-entry.ts
var config_center_runtime_standalone_entry_exports = {};
__export(config_center_runtime_standalone_entry_exports, {
  runConfigCenterRuntimePublisher: () => runConfigCenterRuntimePublisher
});
module.exports = __toCommonJS(config_center_runtime_standalone_entry_exports);

// scripts/sync/config-center-runtime-publisher.ts
var import_node_child_process = require("node:child_process");
var import_node_fs2 = require("node:fs");
var import_node_os = require("node:os");
var import_node_path2 = require("node:path");

// packages/shared/src/config-center-runtime.ts
var import_node_crypto = require("node:crypto");
var import_node_fs = require("node:fs");
var import_node_path = require("node:path");

// packages/schemas/src/validation.ts
var import_ajv = __toESM(require_ajv());
var import_ajv_formats = __toESM(require_dist());
var createAjv = () => {
  const ajv2 = new import_ajv.default({
    strict: false,
    allErrors: true,
    useDefaults: true
  });
  (0, import_ajv_formats.default)(ajv2);
  return ajv2;
};
var ajv = createAjv();
function toValidationError(err) {
  return {
    path: err.instancePath || "/",
    message: err.message || "Unknown error",
    keyword: err.keyword,
    params: err.params,
    schemaPath: err.schemaPath
  };
}
function createValidator(schema) {
  let validate;
  return (data) => {
    validate ??= ajv.compile(schema);
    const valid = validate(data);
    if (valid) {
      return {
        success: true,
        data
      };
    }
    return {
      success: false,
      errors: validate.errors?.map(toValidationError)
    };
  };
}

// packages/schemas/src/agent-service/config-center-runtime.ts
var CONFIG_CENTER_RUNTIME_BRANCH = "runtime";
var CONFIG_CENTER_RUNTIME_MARKER = ".desirecore-runtime.json";
var configCenterRuntimeFilePolicy = {
  description: "\u914D\u7F6E\u4E2D\u5FC3\u8FD0\u884C\u53D1\u5E03\u767D\u540D\u5355\uFF1B\u6B63\u6587\u3001\u89C4\u5219\u63CF\u8FF0\u4E0E\u6765\u6E90\u94FE\u63A5\u4FDD\u6301\u539F\u5B57\u8282\uFF0C\u6392\u9664\u6587\u6863\u3001\u6D4B\u8BD5\u3001\u5DE5\u5177\u548C\u751F\u6210\u5BA1\u8BA1\u6750\u6599\u3002\u65B0\u589E\u6D88\u8D39\u8005\u987B\u540C\u6B65\u66F4\u65B0\u767D\u540D\u5355\u53CA\u9A8C\u8BC1\u3002",
  exactPaths: [
    "manifest.json",
    "compute/service-map.json",
    "compute/pricing.json",
    "compute/v2/catalog.json",
    "catalog/v2/retirements.json",
    "runtimes/recommended.json",
    "runtimes/versions-fallback.json",
    // 两份契约是种子构建真实兼容检查的输入，不是开发期测试或完整 schemas 仓库。
    "schemas/model-spec.schema.json",
    "schemas/model-specs-index.schema.json"
  ],
  patterns: [
    "^compute/(providers|coding-plans|model-specs)/[A-Za-z0-9_-]+\\.json$",
    "^api-providers/[a-z][a-z0-9-]*/[A-Za-z0-9_-]+\\.json$"
  ]
};
var digest = { type: "string", pattern: "^[a-f0-9]{64}$", description: "SHA-256 \u4E00\u81F4\u6027\u6458\u8981\uFF1B\u4E0D\u66FF\u4EE3\u53D1\u5E03\u6765\u6E90\u548C\u8FDE\u63A5\u6743\u9650\u9A8C\u8BC1\u3002" };
var configCenterRuntimeManifestSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  additionalProperties: false,
  description: "\u5B8C\u6574\u7EAF\u8FD0\u884C\u53D1\u5E03\u5FEB\u7167\uFF1B\u4E0D\u5305\u542B\u751F\u6210\u65F6\u95F4\u6216\u4F5C\u8005\u63D0\u4EA4\uFF0C\u907F\u514D\u6587\u6863\u53D8\u66F4\u5236\u9020\u8FD0\u884C\u66F4\u65B0\u3002",
  required: ["formatVersion", "profile", "dataVersion", "payloadDigest", "contracts", "files"],
  properties: {
    formatVersion: { type: "integer", const: 1, description: "\u53D1\u5E03\u4FE1\u5C01\u683C\u5F0F\uFF1B\u672A\u77E5\u7248\u672C\u4E0D\u5F97\u4F5C\u4E3A\u65E7\u683C\u5F0F\u9759\u9ED8\u5E94\u7528\u3002" },
    profile: { type: "string", const: "config-center-runtime-v1", description: "\u7EAF\u8FD0\u884C\u53D1\u5E03\u5408\u540C\uFF1B\u4E0D\u662F\u5B8C\u6574\u4F5C\u8005 checkout\u3002" },
    dataVersion: { type: "integer", minimum: 1, description: "\u7B49\u4E8E\u539F manifest.presetDataVersion\uFF0C\u4E0D\u91CD\u5199\u6E90\u6570\u636E\uFF1B\u53D8\u5316\u7684\u8FD0\u884C\u6570\u636E\u5FC5\u987B\u5347\u7248\u3002" },
    payloadDigest: { ...digest, description: "\u7531\u6392\u5E8F\u7684\u5168\u90E8\u8DEF\u5F84\u3001\u957F\u5EA6\u3001\u5185\u5BB9\u6458\u8981\u53CA\u5951\u7EA6\u6458\u8981\u7EC4\u6210\uFF0C\u4E0D\u5305\u542B\u53D1\u5E03\u8FFD\u6EAF\u65F6\u95F4\u3002" },
    contracts: {
      type: "object",
      additionalProperties: false,
      required: ["modelSpecRoutingSha256", "modelSpecsIndexSha256"],
      description: "\u4E24\u4EFD\u968F\u53D1\u5E03\u6750\u6599\u7684\u89C4\u8303\u5316\u5951\u7EA6\u6458\u8981\uFF1B\u6784\u5EFA\u4ECD\u4E0E\u5BA2\u6237\u7AEF\u5B9E\u9645 Schema \u6BD4\u8F83\u3002",
      properties: { modelSpecRoutingSha256: digest, modelSpecsIndexSha256: digest }
    },
    files: {
      type: "array",
      minItems: 1,
      maxItems: 4096,
      description: "\u4E25\u683C\u6309\u8DEF\u5F84\u6392\u5E8F\u3001\u65E0\u91CD\u590D\u7684\u5B8C\u6574\u666E\u901A\u6587\u4EF6\u6E05\u5355\uFF1B\u4E0D\u5141\u8BB8\u6E05\u5355\u5916\u6587\u4EF6\u6216\u7B26\u53F7\u94FE\u63A5\u3002",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["path", "sha256", "byteLength"],
        properties: {
          path: { type: "string", minLength: 1, maxLength: 512, description: "\u4F7F\u7528\u6B63\u659C\u7EBF\u7684\u76F8\u5BF9\u666E\u901A\u6587\u4EF6\u8DEF\u5F84\uFF0C\u8FD8\u5FC5\u987B\u547D\u4E2D\u8FD0\u884C\u767D\u540D\u5355\u3002" },
          sha256: digest,
          byteLength: { type: "integer", minimum: 1, maximum: 8 * 1024 * 1024, description: "JSON \u539F\u59CB\u5B57\u8282\u957F\u5EA6\uFF1B\u9650\u5236\u5355\u6587\u4EF6\u8BFB\u53D6\u6210\u672C\u3002" }
        }
      }
    }
  }
};

// packages/shared/src/config-center-runtime.ts
var validateManifest = createValidator(configCenterRuntimeManifestSchema);
var patterns = configCenterRuntimeFilePolicy.patterns.map((pattern) => new RegExp(pattern));
var exactPaths = new Set(configCenterRuntimeFilePolicy.exactPaths);
var MAX_FILES = 4096;
var MAX_FILE_BYTES = 8 * 1024 * 1024;
var MAX_TOTAL_BYTES = 64 * 1024 * 1024;
var sha256 = (bytes) => (0, import_node_crypto.createHash)("sha256").update(bytes).digest("hex");
var fail = () => {
  throw new Error("CONFIG_CENTER_RUNTIME_INVALID");
};
function parseJson(bytes) {
  const text = bytes.toString("utf8");
  if (!Buffer.from(text, "utf8").equals(bytes)) return fail();
  return JSON.parse(text);
}
function isConfigCenterRuntimePath(path) {
  if (typeof path !== "string" || path.length > 512 || path.includes("\\") || path.includes("\0")) return false;
  const parts = path.split("/");
  if (parts.some((part) => !part || part === "." || part === ".." || /[. :\x00-\x1f]$/.test(part) || /[<>:"|?*\x00-\x1f]/.test(part) || /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(part) || ["docs", "tests", "__tests__", "fixtures", "scripts", "tools", "reports", "node_modules", ".git"].includes(part.toLowerCase()))) return false;
  return exactPaths.has(path) || patterns.some((pattern) => pattern.test(path));
}
function canonicalJson(value) {
  if (value === null || typeof value === "string" || typeof value === "boolean") return JSON.stringify(value);
  if (typeof value === "number" && Number.isFinite(value)) return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
  return fail();
}
function canonicalJsonSha256(value) {
  return sha256(canonicalJson(value));
}
function configCenterRuntimeContractsFromEntries(entries) {
  const read = (path) => {
    const entry = entries.find((item) => item.path === path);
    if (!entry) return fail();
    return parseJson(entry.bytes);
  };
  const model = read("schemas/model-spec.schema.json");
  const index = read("schemas/model-specs-index.schema.json");
  const { $schema: _schema, $id: _id, title: _title, ...indexContract } = index;
  void _schema;
  void _id;
  void _title;
  return {
    modelSpecRoutingSha256: canonicalJsonSha256(model.definitions?.modelSpec?.properties?.routing),
    modelSpecsIndexSha256: canonicalJsonSha256(indexContract)
  };
}
function createConfigCenterRuntimeManifest(entries, contracts) {
  if (!entries.length || entries.length > MAX_FILES) return fail();
  const sorted = [...entries].sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0);
  let total = 0;
  const aliases = /* @__PURE__ */ new Set();
  const files = sorted.map((entry) => {
    if (!isConfigCenterRuntimePath(entry.path) || !Buffer.isBuffer(entry.bytes) || !entry.bytes.length || entry.bytes.length > MAX_FILE_BYTES || aliases.has(entry.path.toLowerCase())) return fail();
    aliases.add(entry.path.toLowerCase());
    total += entry.bytes.length;
    if (total > MAX_TOTAL_BYTES) return fail();
    parseJson(entry.bytes);
    return { path: entry.path, byteLength: entry.bytes.length, sha256: sha256(entry.bytes) };
  });
  const required = [
    "manifest.json",
    "compute/providers/_index.json",
    "compute/model-specs/_index.json",
    "compute/service-map.json",
    "compute/pricing.json",
    "schemas/model-spec.schema.json",
    "schemas/model-specs-index.schema.json"
  ];
  if (required.some((path) => !aliases.has(path))) return fail();
  const dataVersion = parseJson(sorted.find((entry) => entry.path === "manifest.json").bytes).presetDataVersion;
  if (!Number.isSafeInteger(dataVersion) || dataVersion <= 0) return fail();
  const actualContracts = configCenterRuntimeContractsFromEntries(sorted);
  if (canonicalJsonSha256(actualContracts) !== canonicalJsonSha256(contracts)) return fail();
  const payloadDigest = canonicalJsonSha256({ profile: "config-center-runtime-v1", contracts, files });
  const manifest = { formatVersion: 1, profile: "config-center-runtime-v1", dataVersion, payloadDigest, contracts, files };
  const checked = validateManifest(manifest);
  if (!checked.success || !checked.data) return fail();
  return checked.data;
}
function decodeManifest(bytes) {
  if (!bytes.length || bytes.length > 1024 * 1024) return fail();
  const checked = validateManifest(parseJson(bytes));
  if (!checked.success || !checked.data) return fail();
  return checked.data;
}
function verifyEntries(marker, entries) {
  const actual = createConfigCenterRuntimeManifest(entries, marker.contracts);
  if (canonicalJsonSha256(actual) !== canonicalJsonSha256(marker)) return fail();
  return marker;
}
function permittedDirectory(path) {
  if (path === ".git") return true;
  return [...exactPaths].some((file) => file.startsWith(`${path}/`)) || /^(compute|compute\/(providers|coding-plans|model-specs)|api-providers|api-providers\/[a-z][a-z0-9-]*)$/.test(path);
}
function validateConfigCenterRuntimeDirectory(dir) {
  if (!(0, import_node_fs.lstatSync)(dir).isDirectory() || (0, import_node_fs.lstatSync)(dir).isSymbolicLink()) return fail();
  const entries = [];
  let marker, bytes = 0;
  const walk = (relative2) => {
    for (const child of (0, import_node_fs.readdirSync)((0, import_node_path.join)(dir, relative2), { withFileTypes: true })) {
      const path = relative2 ? `${relative2}/${child.name}` : child.name;
      const target = (0, import_node_path.join)(dir, path), info = (0, import_node_fs.lstatSync)(target);
      if (info.isSymbolicLink()) return fail();
      if (info.isDirectory()) {
        if (!permittedDirectory(path)) return fail();
        if (path !== ".git") walk(path);
      } else {
        if (!info.isFile() || info.nlink !== 1 || info.size > MAX_FILE_BYTES) return fail();
        if (path === CONFIG_CENTER_RUNTIME_MARKER) marker = decodeManifest((0, import_node_fs.readFileSync)(target));
        else {
          if (!isConfigCenterRuntimePath(path) || entries.length >= MAX_FILES || (bytes += info.size) > MAX_TOTAL_BYTES) return fail();
          entries.push({ path, bytes: (0, import_node_fs.readFileSync)(target) });
        }
      }
    }
  };
  walk("");
  return marker ? verifyEntries(marker, entries) : fail();
}

// packages/schemas/src/agent-service/compute-availability.ts
var modelAvailabilityPolicySchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  additionalProperties: false,
  properties: {
    successFreshMs: { type: "integer", minimum: 1e3, maximum: 864e5, default: 18e5, description: "\u6210\u529F\u56DE\u6267\u4FDD\u6301\u8FD1\u671F\u53EF\u7528\u7684\u65F6\u957F\uFF1B\u8FC7\u671F\u56DE\u5230\u672A\u9A8C\u8BC1\uFF0C\u4E0D\u81EA\u52A8\u4ED8\u8D39\u63A2\u6D4B" },
    failureWindowMs: { type: "integer", minimum: 1e3, maximum: 36e5, default: 12e4, description: "\u8FDE\u7EED\u77AC\u65F6\u5931\u8D25\u7684\u7EDF\u8BA1\u7A97\u53E3" },
    failureThreshold: { type: "integer", minimum: 1, maximum: 20, default: 3, description: "\u7A97\u53E3\u5185\u8FDE\u7EED\u77AC\u65F6\u5931\u8D25\u8FBE\u5230\u6B64\u503C\u624D\u6682\u505C\u5019\u9009" },
    initialCooldownMs: { type: "integer", minimum: 1e3, maximum: 3e5, default: 3e4, description: "\u77AC\u65F6\u6545\u969C\u9996\u6B21\u6682\u505C\u65F6\u957F\uFF1B429 \u4F7F\u7528\u65E2\u6709\u5171\u4EAB\u914D\u989D\u51B7\u5374" },
    maxCooldownMs: { type: "integer", minimum: 1e3, maximum: 36e5, default: 3e5, description: "\u91CD\u590D\u77AC\u65F6\u6545\u969C\u6307\u6570\u9000\u907F\u7684\u65F6\u957F\u4E0A\u9650" }
  },
  description: "\u771F\u5B9E\u8C03\u7528\u53EF\u7528\u6027\u7B56\u7565\uFF1B\u672A\u9A8C\u8BC1\u6A21\u578B\u6309\u65E2\u6709\u6A21\u578B\u4E0E Provider \u6392\u5E8F\u53C2\u4E0E\u8DEF\u7531"
};

// packages/schemas/src/agent-service/compute.ts
var cloudSearchProviderSchema = {
  type: "object",
  required: ["code", "name", "apiFormat", "endpointPath", "effectiveUnitPrice", "unit"],
  properties: {
    code: { type: "string", minLength: 1, description: "Gateway model code used in the search request body." },
    name: { type: "string", description: "Search source display name." },
    apiFormat: { type: "string", enum: ["doubao-search"], description: "Independent search wire protocol, never a chat model protocol." },
    endpointPath: { type: "string", pattern: "^/[^/\\\\\\s]\\S*$", description: "Path appended to the full gateway base URL, preserving /v1." },
    effectiveUnitPrice: { type: ["number", "null"], minimum: 0, description: "Final credits per invocation; do not multiply by a group ratio." },
    unit: { type: ["string", "null"], description: "Display billing unit; null omits the unit label." }
  },
  additionalProperties: false
};
var modelOriginSchema = {
  type: "object",
  required: ["vendor", "canonicalModelId"],
  properties: {
    vendor: {
      type: "string",
      minLength: 1,
      pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
      description: "\u89C4\u8303\u5316\u539F\u5382\u5546 ID\uFF0C\u5982 xiaomi\u3001openai\u3001alibaba\u3001minimax\uFF1B\u4E0D\u5F97\u586B\u5199\u5F53\u524D\u7B97\u529B Provider ID"
    },
    canonicalModelId: {
      type: "string",
      minLength: 1,
      description: "\u539F\u5382\u6A21\u578B\u7684\u7A33\u5B9A\u8BC6\u522B ID\uFF0C\u7528\u4E8E\u9002\u914D\u5668\u5339\u914D\u3001\u8BCA\u65AD\u548C\u65E5\u5FD7\uFF1B\u4E0D\u66FF\u4EE3\u5B9E\u9645\u8DEF\u7531\u4F7F\u7528\u7684 modelName/apiModelId"
    },
    family: {
      type: "string",
      minLength: 1,
      description: "\u8DE8\u5C0F\u7248\u672C\u7A33\u5B9A\u7684\u6A21\u578B\u5BB6\u65CF\uFF0C\u5982 mimo-asr\uFF1B\u540C\u4E00\u534F\u8BAE\u4E0B\u7684\u540E\u7EED\u6A21\u578B\u7248\u672C\u53EF\u590D\u7528\u8BE5\u5BB6\u65CF\u8BED\u4E49"
    }
  },
  additionalProperties: false
};
var thinkingOnlySchema = {
  type: "boolean",
  description: "\u6A21\u578B\u65E0\u6CD5\u771F\u6B63\u5173\u95ED\u601D\u8003\u3002true \u65F6\u5BA2\u6237\u7AEF\u628A off \u4ECE\u53EF\u9009\u6863\u4F4D\u79FB\u9664\uFF0C\u5355\u6B21\u8865\u5168\u8BF7\u6C42\u7684 reasoning=off \u4F1A\u5F52\u4E00\u4E3A auto\uFF0C\u5176\u4F59\u8BF7\u6C42\u6309\u5BF9\u5E94\u7684\u5DF2\u58F0\u660E\u63A5\u5165\u89C4\u5219\u89E3\u6790\u53EF\u7528\u6863\u4F4D\uFF0C\u907F\u514D\u628A\u663E\u5F0F\u5173\u95ED\u610F\u56FE\u53D1\u9001\u7ED9\u4ECD\u4F1A\u601D\u8003\u7684\u6A21\u578B\u3002\u4E0D\u540C\u63A5\u5165\u9762\u5BF9\u5173\u95ED\u503C\u53EF\u80FD\u62D2\u7EDD\u6216\u4FDD\u7559\u8F7B\u91CF\u601D\u8003\uFF0C\u5177\u4F53\u8BF7\u6C42\u5F62\u6001\u987B\u6309\u771F\u5B9E\u63A5\u5165\u9762\u58F0\u660E\uFF1B\u4E0D\u80FD\u7EDF\u4E00\u63A8\u65AD thinking.type \u53EA\u63A5\u53D7 enabled\u3002\u53EA\u63CF\u8FF0\u6A21\u578B\u56FA\u6709\u5C5E\u6027\uFF0C\u4E0D\u58F0\u660E\u63A5\u5165\u9762\u652F\u6301\u54EA\u4E9B\u6DF1\u5EA6\u6863\u4F4D\u2014\u2014\u540E\u8005\u53EA\u80FD\u5199\u5728 provider model \u7684 extra.reasoning \u4E2D\u3002"
};
var adaptiveThinkingSchema = {
  type: "boolean",
  description: "Anthropic Messages \u6A21\u578B\u662F\u5426\u5C5E\u4E8E adaptive thinking \u4EE3\u9645\uFF08Claude Opus 4.7+ / Opus 5 / Sonnet 5 / Fable / Mythos\uFF09\u3002true \u65F6\u5BA2\u6237\u7AEF\u628A\u601D\u8003\u53C2\u6570\u53D1\u6210 thinking.type=adaptive + output_config.effort\uFF0C\u800C\u4E0D\u662F\u4F1A\u88AB\u4E0A\u6E38 400 \u62D2\u7EDD\u7684 thinking.type=enabled + budget_tokens\uFF1Bfalse \u8868\u793A\u660E\u786E\u4E0D\u662F\uFF0C\u7981\u6B62\u5BA2\u6237\u7AEF\u6309\u6A21\u578B ID \u63A8\u65AD\uFF1B\u7F3A\u7701\u65F6\u5BA2\u6237\u7AEF\u4EC5\u5728\u5B98\u65B9 api.anthropic.com \u7AEF\u70B9\u4E0A\u6309\u6A21\u578B\u4EE3\u9645\u8868\u515C\u5E95\u3002\u53EA\u4F5C\u7528\u4E8E anthropic-messages \u63A5\u5165\u9762\uFF0CClaude \u8BA2\u9605\uFF08claude-oauth\uFF09\u7531 Claude CLI \u81EA\u884C\u6539\u5199\u3001\u4E0D\u53D7\u672C\u5B57\u6BB5\u5F71\u54CD\u3002"
};
var samplingParametersDeprecatedSchema = {
  type: "boolean",
  description: "\u6A21\u578B\u662F\u5426\u62D2\u7EDD\u91C7\u6837\u53C2\u6570\uFF08\u5982 Claude Opus 4.7+ / Opus 5 / Fable / Mythos \u643A\u5E26 temperature\u3001top_p \u6216 top_k \u5373 400\uFF0CSonnet 5 \u5BF9\u975E\u9ED8\u8BA4\u503C 400\uFF09\u3002true \u65F6\u5BA2\u6237\u7AEF\u51FA\u7AD9\u5220\u9664\u8BF7\u6C42\u4F53\u9876\u5C42\u7684 temperature / top_p / top_k\u2014\u2014\u65E0\u8BBA\u53D6\u503C\u6765\u81EA\u6A21\u578B defaultTemperature\u3001\u7528\u6237\u8986\u5199\u3001\u5DE5\u4F5C\u6D41\u9ED8\u8BA4\u503C\u8FD8\u662F\u7236\u4F1A\u8BDD\u7EE7\u627F\uFF1Bfalse \u6216\u7F3A\u7701\u65F6\u539F\u6837\u53D1\u9001\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u6309\u6A21\u578B ID \u63A8\u65AD\u3002\u53EA\u63CF\u8FF0\u6A21\u578B\u56FA\u6709\u5C5E\u6027\uFF1A\u7CBE\u786E\u547D\u4E2D\u7684 ModelSpec \u4F1A\u8865\u5168\u5230\u5404\u63A5\u5165\u9762\u7684\u540C\u540D\u6A21\u578B\uFF0Cfamily \u515C\u5E95\u4E0D\u7EE7\u627F\uFF1B\u4F5C\u7528\u4E8E Agent \u5F15\u64CE\u53D1\u51FA\u7684\u6A21\u578B\u8BF7\u6C42\uFF0CClaude \u8BA2\u9605\uFF08claude-oauth\uFF09\u8BF7\u6C42\u7531 Claude CLI \u81EA\u5EFA\u3001\u4E0D\u53D7\u672C\u5B57\u6BB5\u5F71\u54CD\u3002"
};
var forcedToolChoiceUnsupportedSchema = {
  type: "boolean",
  description: "\u6A21\u578B\u662F\u5426\u62D2\u7EDD\u5F3A\u5236\u5DE5\u5177\u9009\u62E9\uFF08\u5982 Claude Fable 5.1 / Mythos 5.1\uFF1Atool_choice.type \u4E3A any \u6216 tool \u5373 400\uFF09\u3002true \u65F6\u5BA2\u6237\u7AEF\u628A\u5F3A\u5236\u5DE5\u5177\u9009\u62E9\u964D\u7EA7\u4E3A auto\uFF08Anthropic \u7684 any / tool\u3001OpenAI \u7684 required / \u6307\u5B9A\u51FD\u6570\uFF09\uFF0CAnthropic \u8BF7\u6C42\u4FDD\u7559 disable_parallel_tool_use\uFF0Cnone \u4E0E auto \u4E0D\u53D7\u5F71\u54CD\uFF1Bfalse \u6216\u7F3A\u7701\u65F6\u6309\u8C03\u7528\u65B9\u8981\u6C42\u53D1\u9001\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u6309\u6A21\u578B ID \u63A8\u65AD\u3002\u53EA\u63CF\u8FF0\u6A21\u578B\u56FA\u6709\u5C5E\u6027\uFF1A\u7CBE\u786E\u547D\u4E2D\u7684 ModelSpec \u4F1A\u8865\u5168\u5230\u5404\u63A5\u5165\u9762\u7684\u540C\u540D\u6A21\u578B\uFF0Cfamily \u515C\u5E95\u4E0D\u7EE7\u627F\uFF1B\u4F5C\u7528\u4E8E Agent \u5F15\u64CE\u53D1\u51FA\u7684\u6A21\u578B\u8BF7\u6C42\uFF0CClaude \u8BA2\u9605\uFF08claude-oauth\uFF09\u8BF7\u6C42\u7531 Claude CLI \u81EA\u5EFA\u3001\u4E0D\u53D7\u672C\u5B57\u6BB5\u5F71\u54CD\u3002"
};
var thinkingDefaultSchema = {
  type: "boolean",
  description: "\u6A21\u578B\u9ED8\u8BA4\u5F00\u542F\u601D\u8003\uFF08\u955C\u50CF\u4E0A\u6E38 reasoning.default_enabled\uFF09\u3002\u7EAF\u8BB0\u5F55\u6027\u5B57\u6BB5\uFF1A\u5BA2\u6237\u7AEF\u4E0D\u6D88\u8D39\uFF0C\u4E5F\u4E0D\u6539\u53D8\u8BF7\u6C42\u5185\u5BB9\u2014\u2014auto \u6863\u672C\u5C31\u662F\u300C\u4E0D\u53D1\u601D\u8003\u53C2\u6570\u3001\u8DDF\u968F\u4E0A\u6E38\u9ED8\u8BA4\u300D\u3002\u4E0D\u8981\u636E\u6B64\u671F\u5F85\u884C\u4E3A\u5DEE\u5F02\u3002"
};
var speechVoiceSchema = {
  type: "object",
  required: ["id", "label"],
  properties: {
    id: {
      type: "string",
      minLength: 1,
      description: "\u4F20\u7ED9\u4E0A\u6E38\u8BED\u97F3\u63A5\u53E3\u7684\u7A33\u5B9A\u97F3\u8272 ID"
    },
    label: {
      type: "string",
      minLength: 1,
      description: "\u9762\u5411\u7528\u6237\u5C55\u793A\u7684\u97F3\u8272\u540D\u79F0"
    }
  },
  additionalProperties: false
};
var speechModelProfileSchema = {
  type: "object",
  required: ["protocol", "protocolVersion", "modes"],
  properties: {
    protocol: {
      type: "string",
      minLength: 1,
      pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
      description: "\u7A33\u5B9A\u8BED\u97F3\u534F\u8BAE\u65CF\uFF0C\u5982 xiaomi-mimo-chat-asr\uFF1B\u6A21\u578B\u5E38\u89C4\u8FED\u4EE3\u4E0D\u5F97\u6539\u53D8\u6B64\u503C"
    },
    protocolVersion: {
      type: "string",
      pattern: "^[1-9][0-9]*$",
      description: "\u534F\u8BAE\u4E0D\u517C\u5BB9\u7248\u672C\u53F7\uFF1B\u53EA\u6709\u8BF7\u6C42\u3001\u8BA4\u8BC1\u3001\u54CD\u5E94\u6216\u6D41\u5F0F\u72B6\u6001\u673A\u53D1\u751F\u4E0D\u517C\u5BB9\u53D8\u5316\u65F6\u624D\u9012\u589E"
    },
    modes: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      items: { type: "string", enum: ["batch", "streaming"] },
      description: "\u6A21\u578B\u534F\u8BAE\u652F\u6301\u7684\u8C03\u7528\u6A21\u5F0F\uFF1Abatch\uFF08\u6574\u6BB5\uFF09\u548C/\u6216 streaming\uFF08\u6D41\u5F0F\uFF09"
    },
    inputFormats: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      items: { type: "string", minLength: 1 },
      description: "ASR \u4E0A\u6E38\u63A5\u53D7\u7684\u97F3\u9891\u683C\u5F0F\uFF0C\u5982 wav\u3001mp3\u3001webm\uFF1B\u683C\u5F0F\u540D\u4F7F\u7528\u9002\u914D\u5668\u53EF\u8BC6\u522B\u7684\u89C4\u8303\u503C"
    },
    outputFormats: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      items: { type: "string", minLength: 1 },
      description: "TTS \u4E0A\u6E38\u53EF\u8FD4\u56DE\u7684\u97F3\u9891\u683C\u5F0F\uFF0C\u5982 pcm16le\u3001wav\u3001mp3\uFF1B\u8FD0\u884C\u65F6\u9700\u4E0E\u9002\u914D\u5668\u548C\u64AD\u653E\u5668\u80FD\u529B\u6C42\u4EA4\u96C6"
    },
    sampleRates: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      items: { type: "integer", minimum: 1 },
      description: "\u652F\u6301\u7684\u91C7\u6837\u7387\uFF08Hz\uFF09\uFF1B\u8FD0\u884C\u65F6\u4E0D\u5F97\u5047\u8BBE\u56FA\u5B9A 24kHz\uFF0C\u9700\u5B8C\u6210\u80FD\u529B\u534F\u5546"
    },
    defaultVoice: {
      type: "string",
      minLength: 1,
      description: "TTS \u63A8\u8350\u9ED8\u8BA4\u97F3\u8272 ID\uFF1B\u58F0\u660E voices \u65F6\u5FC5\u987B\u80FD\u5728 voices \u4E2D\u627E\u5230\u540C ID \u6761\u76EE"
    },
    voices: {
      type: "array",
      minItems: 1,
      items: speechVoiceSchema,
      description: "TTS \u53EF\u9009\u97F3\u8272\u5217\u8868\uFF0C\u7EDF\u4E00\u4E3A\u7A33\u5B9A id \u4E0E\u7528\u6237\u53EF\u8BFB label"
    },
    languageHints: {
      type: "boolean",
      description: "ASR \u534F\u8BAE\u662F\u5426\u63A5\u53D7\u8BED\u8A00\u63D0\u793A\u53C2\u6570\uFF1B\u4E0D\u662F\u6A21\u578B\u652F\u6301\u8BED\u8A00\u8303\u56F4\u6E05\u5355"
    }
  },
  additionalProperties: false
};
var reasoningEffortConfigSchema = {
  type: "object",
  required: ["supportedEfforts"],
  properties: {
    supportedEfforts: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      items: {
        type: "string",
        enum: ["none", "minimal", "low", "medium", "high", "xhigh", "max"]
      },
      description: "\u6B64\u63A5\u5165\u9762\u5B9E\u9645\u63A5\u53D7\u7684 OpenAI reasoning effort\uFF0C\u53EA\u80FD\u6536\u7D27\u7CBE\u786E ModelSpec.routing.reasoning \u5408\u540C\uFF0C\u4E0D\u80FD\u6269\u5F20\u3002none \u5728\u4EA7\u54C1\u5C42\u663E\u793A\u4E3A off\uFF1B\u4E0D\u8981\u586B\u5199 Codex Ultra\uFF0C\u56E0\u4E3A Ultra \u662F\u591A Agent \u7F16\u6392\u6A21\u5F0F\uFF0C\u4E0D\u662F\u8BF7\u6C42 effort\u3002"
    },
    defaultEffort: {
      type: "string",
      enum: ["minimal", "low", "medium", "high", "xhigh", "max"],
      description: "\u6B64\u63A5\u5165\u9762\u63A8\u8350\u7684\u663E\u5F0F\u9ED8\u8BA4\u6863\u4F4D\uFF1B\u4EC5\u5F53\u4ECD\u5C5E\u4E8E ModelSpec \u5408\u540C\u65F6\u751F\u6548\uFF0C\u4E14\u5FC5\u987B\u540C\u65F6\u5B58\u5728\u4E8E supportedEfforts\u3002\u8FD0\u884C\u65F6\u5728\u6301\u4E45\u5316\u6863\u4F4D\u4E0D\u53D7\u652F\u6301\u65F6\u7528\u5B83\u786E\u5B9A\u6027\u56DE\u9000\u3002"
    }
  },
  allOf: [
    ...["minimal", "low", "medium", "high", "xhigh", "max"].map((effort) => ({
      if: {
        required: ["defaultEffort"],
        properties: { defaultEffort: { const: effort } }
      },
      then: {
        properties: {
          supportedEfforts: { contains: { const: effort } }
        }
      }
    }))
  ],
  additionalProperties: false
};
var resolvedReasoningEffortConfigSchema = {
  ...reasoningEffortConfigSchema,
  properties: {
    ...reasoningEffortConfigSchema.properties,
    supportedEfforts: {
      ...reasoningEffortConfigSchema.properties.supportedEfforts,
      minItems: 0,
      description: "\u672C\u6B21 Run \u534F\u5546\u540E\u53EF\u53D1\u9001\u7684\u663E\u5F0F effort \u96C6\u5408\u3002\u7A7A\u96C6\u5408\u8868\u793A\u5DF2\u77E5\u53EA\u5141\u8BB8 auto\uFF0C\u4E0D\u5F97\u6062\u590D\u672A\u77E5\u63A5\u5165\u7684\u517C\u5BB9\u6863\u4F4D\uFF1B\u539F\u59CB Provider \u58F0\u660E\u4ECD\u8981\u6C42\u975E\u7A7A\u3002"
    },
    defaultMode: {
      type: "string",
      enum: ["auto", "off", "minimal", "low", "medium", "high", "xhigh", "max"],
      description: "\u534F\u5546\u540E\u4ECD\u6709\u6548\u7684\u6A21\u5F0F\u9ED8\u8BA4\u503C\uFF0C\u4EC5\u5C5E\u4E8E\u672C\u6B21\u8FD0\u884C\u5408\u540C\u3002auto \u59CB\u7EC8\u53EF\u7528\uFF1Boff \u8981\u6C42 none\uFF0C\u5176\u4F59\u6863\u4F4D\u5FC5\u987B\u5728 supportedEfforts \u4E2D\u3002\u539F\u59CB\u63A5\u5165\u58F0\u660E\u4E0E\u4E91\u76EE\u5F55\u4E0D\u63A5\u53D7\u6B64\u5B57\u6BB5\u3002"
    }
  },
  allOf: [
    ...reasoningEffortConfigSchema.allOf,
    ...["off", "minimal", "low", "medium", "high", "xhigh", "max"].map((mode) => ({
      if: { required: ["defaultMode"], properties: { defaultMode: { const: mode } } },
      then: { properties: { supportedEfforts: { contains: { const: mode === "off" ? "none" : mode } } } }
    }))
  ]
};
var versionedReasoningEffortConfigSchema = {
  ...reasoningEffortConfigSchema,
  required: ["version", "supportedEfforts"],
  properties: {
    ...reasoningEffortConfigSchema.properties,
    supportedEfforts: {
      ...reasoningEffortConfigSchema.properties.supportedEfforts,
      minItems: 0,
      description: "\u670D\u52A1\u7AEF\u5BF9\u8BE5\u6388\u6743\u6A21\u578B\u5728\u5F53\u524D\u534F\u8BAE\u4E0E\u7AEF\u70B9\u63A5\u53D7\u7684\u663E\u5F0F effort \u96C6\u5408\u3002\u7248\u672C1\u7684\u7A7A\u96C6\u5408\u660E\u786E\u53EA\u5141\u8BB8 auto\uFF0C\u4E0D\u8868\u793A\u80FD\u529B\u672A\u77E5\uFF1Bnone \u5728\u4EA7\u54C1\u5C42\u6620\u5C04\u4E3A off\u3002"
    },
    version: {
      type: "integer",
      const: 1,
      description: "\u63A5\u5165\u80FD\u529B\u5408\u540C\u7248\u672C\u3002\u5F53\u524D\u53EA\u63A5\u53D7 1\uFF1B\u672A\u77E5\u7248\u672C\u4E0D\u4F5C\u4E3A\u4EFB\u4F55\u6863\u4F4D\u80FD\u529B\u8BC1\u636E\u3002"
    }
  }
};
var thinkingRoundTripConfigSchema = {
  type: "object",
  required: ["enabled", "protocol", "allowEmptySignature", "scope"],
  properties: {
    enabled: {
      type: "boolean",
      description: "Provider \u539F\u751F\u56DE\u653E\u5F00\u5173\u3002Anthropic \u4EC5\u663E\u5F0F true \u542F\u7528\uFF1BResponses \u7F3A\u7701\u65F6\u4F9D\u636E\u5DF2\u5B8C\u6210\u7684\u52A0\u5BC6 item \u81EA\u52A8\u56DE\u653E\uFF0C\u663E\u5F0F false \u53EF\u5173\u95ED\u3002\u5C55\u793A thinking \u4E0D\u5177\u5907\u56DE\u653E\u8D44\u683C\u3002"
    },
    protocol: {
      type: "string",
      enum: ["anthropic-messages", "openai-responses"],
      description: "\u56DE\u653E\u6240\u9075\u5FAA\u7684\u7EBF\u4E0A\u534F\u8BAE\uFF1BResponses \u53EA\u63A5\u53D7 Provider \u539F\u6837\u8FD4\u56DE\u7684\u5DF2\u5B8C\u6210\u52A0\u5BC6 item\uFF0C\u7981\u6B62\u4F9D\u636E\u540D\u79F0\u6216\u517C\u5BB9 URL \u731C\u6D4B\u80FD\u529B\u3002"
    },
    allowEmptySignature: {
      type: "boolean",
      description: "Anthropic \u662F\u5426\u5141\u8BB8\u56DE\u653E Provider \u539F\u6837\u8FD4\u56DE\u7684\u7A7A thinking signature\uFF1BResponses \u56FA\u5B9A false\u3002\u4EC5\u9650\u7ECF\u8FC7\u771F\u673A\u9A8C\u8BC1\u3001\u786E\u5B9E\u8FD4\u56DE\u7A7A\u7B7E\u540D\u4E14\u7EED\u8F6E\u8981\u6C42\u56DE\u4F20\u7684\u5177\u4F53\u63A5\u5165\u9762\uFF1B\u4E0D\u5F97\u5236\u9020\u7A7A\u7B7E\u540D\u6216\u628A UI \u5C55\u793A\u6587\u672C\u5347\u683C\u4E3A\u539F\u751F thinking\u3002"
    },
    scope: {
      type: "string",
      enum: ["active-tool-turn", "same-authority-history"],
      description: "Anthropic \u4F7F\u7528 active-tool-turn\uFF1BResponses \u4F7F\u7528 same-authority-history\uFF0C\u542B\u6700\u7EC8\u6587\u672C phase\uFF0C\u53EA\u5728 Provider\u3001\u534F\u8BAE\u3001\u6A21\u578B\u3001\u5B8C\u6574 endpoint \u548C\u51ED\u636E\u7248\u672C\u5168\u90E8\u76F8\u540C\u65F6\u56DE\u653E\u3002"
    }
  },
  allOf: [{
    if: { properties: { protocol: { const: "openai-responses" } } },
    then: { properties: { allowEmptySignature: { const: false }, scope: { const: "same-authority-history" } } },
    else: { properties: { scope: { const: "active-tool-turn" } } }
  }],
  additionalProperties: false
};
var thinkingToolTurnValidationSchema = {
  type: "string",
  enum: ["requires-thinking", "accepts-thinkless"],
  description: "\u5DF2\u5F03\u7528\uFF1B\u4EC5\u4E3A\u517C\u5BB9\u65E7 Provider \u6A21\u578B\u914D\u7F6E\u800C\u7EE7\u7EED\u63A5\u53D7 requires-thinking \u4E0E accepts-thinkless\uFF0C\u8FD0\u884C\u65F6\u5FFD\u7565\u8BE5\u5B57\u6BB5\u3002\u5DE5\u5177\u8F6E\u662F\u5426\u6267\u884C\u7531\u6B63\u5E38\u5DE5\u5177\u51C6\u5165\u51B3\u5B9A\uFF0CthinkingRoundTrip \u53EA\u58F0\u660E Provider \u539F\u751F\u56DE\u653E\u80FD\u529B\u3002"
};
var serverSideWebSearchConfigSchema = {
  type: "object",
  required: ["enabled", "dialect", "fallbackPriority"],
  properties: {
    enabled: {
      type: "boolean",
      description: "\u662F\u5426\u5141\u8BB8\u6B64\u6A21\u578B\u53C2\u4E0E LLM API \u670D\u52A1\u7AEF WebSearch\u3002\u5FC5\u987B\u663E\u5F0F\u586B\u5199\uFF1Bfalse \u8868\u793A\u4FDD\u7559\u914D\u7F6E\u4F46\u4E0D\u8FDB\u5165 P0/P1 \u5019\u9009\u3002"
    },
    dialect: {
      type: "string",
      enum: [
        "anthropic-messages",
        "openai-responses",
        "openai-chat-completions"
      ],
      description: "\u670D\u52A1\u7AEF WebSearch \u7684\u534F\u8BAE\u65B9\u8A00\uFF1AAnthropic Messages\u3001OpenAI Responses \u6216 OpenAI Chat Completions\u3002\u6258\u7BA1\u5F0F CLI/OAuth \u51ED\u636E\u4E0D\u5C5E\u4E8E\u539F\u751F LLM API\uFF0C\u4E0D\u80FD\u5728\u6B64\u58F0\u660E\u3002"
    },
    fallbackPriority: {
      type: "integer",
      minimum: 0,
      description: "P1 \u8DE8 Provider \u964D\u7EA7\u5019\u9009\u7684\u7A33\u5B9A\u4F18\u5148\u7EA7\uFF0C\u6570\u503C\u8D8A\u5C0F\u8D8A\u5148\u5C1D\u8BD5\uFF1B\u540C\u503C\u518D\u6309 provider id\u3001modelName \u6392\u5E8F\u3002P0 \u5F53\u524D\u6A21\u578B\u4E0D\u53D7\u6B64\u987A\u5E8F\u5F71\u54CD\u3002"
    },
    searchRequestPriceUsd: {
      type: "number",
      minimum: 0,
      description: "\u6BCF\u6B21\u7531\u4E0A\u6E38\u786E\u8BA4\u6267\u884C\u7684 WebSearch \u641C\u7D22\u8BF7\u6C42\u4EF7\u683C\uFF08\u7F8E\u5143\uFF09\u3002\u8FD0\u884C\u65F6\u6309\u534F\u8BAE\u8FD4\u56DE\u7684\u5B9E\u9645\u8BF7\u6C42\u6B21\u6570\u8BA1\u8D39\uFF1B\u7531\u914D\u7F6E\u4E2D\u5FC3\u8DDF\u968F\u4F9B\u5E94\u5546\u4EF7\u683C\u8C03\u6574\uFF0C\u7981\u6B62\u5728\u4EE3\u7801\u4E2D\u786C\u7F16\u7801\u3002"
    },
    toolType: {
      type: "string",
      minLength: 1,
      description: "\u53EF\u9009\u7684\u4E0A\u6E38\u539F\u751F\u641C\u7D22\u5DE5\u5177 type \u8986\u5199\uFF08\u5982\u4E0A\u6E38\u53D1\u5E03\u7684\u65B0\u7248\u672C\u6807\u8BC6\uFF09\u3002\u7F3A\u7701\u65F6\u7531 dialect \u9002\u914D\u5668\u4F7F\u7528\u5176\u53D7\u652F\u6301\u7684\u9ED8\u8BA4 type\u3002"
    }
  },
  additionalProperties: false
};
var inferredRoutingSchema = {
  type: "object",
  required: ["tier", "eligibleForAgent", "routingPriority", "source", "ruleId"],
  properties: {
    tier: {
      type: "string",
      enum: ["flagship", "balanced", "lightweight"],
      description: "\u6309\u53C2\u6570\u91CF\u7EA7\u4F30\u7B97\u51FA\u7684 Smart \u8DEF\u7531\u80FD\u529B\u91CF\u7EA7\u3002"
    },
    eligibleForAgent: {
      type: "boolean",
      description: "\u662F\u5426\u5141\u8BB8\u4F5C\u4E3A Agent \u4E3B\u6A21\u578B\u81EA\u52A8\u5019\u9009\uFF1B\u4EC5\u5F53 Ollama /api/show \u771F\u5B9E\u4E0A\u62A5\u7684 capabilities \u542B tools\uFF08\u6620\u5C04\u4E3A model.capabilities \u7684 tool_use\uFF09\u65F6\u4E3A true\uFF0C\u7EDD\u4E0D\u7531\u53C2\u6570\u91CF\u7EA7\u731C\u6D4B\u3002"
    },
    routingPriority: {
      type: "integer",
      minimum: 0,
      maximum: 1e4,
      description: "\u540C\u91CF\u7EA7\u5185\u7684\u6392\u5E8F\u4F18\u5148\u7EA7\uFF1B\u53D6\u503C\u8FDC\u9AD8\u4E8E\u4E91\u7AEF ModelSpec \u5E38\u89C1\u533A\u95F4\uFF080~30\uFF09\uFF0C\u786E\u4FDD\u672C\u5730\u63A8\u65AD\u6A21\u578B\u6052\u6392\u5728\u5DF2\u9A8C\u8BC1\u4E91\u7AEF\u89C4\u683C\u4E4B\u540E\u3002"
    },
    source: {
      type: "string",
      const: "local-heuristic",
      description: "\u56FA\u5B9A\u6807\u8BC6\u672C\u6761 routing \u4FE1\u606F\u6765\u81EA\u672C\u5730\u542F\u53D1\u5F0F\u63A8\u65AD\uFF0C\u800C\u975E config-center \u7CBE\u786E\u89C4\u683C\u3002"
    },
    ruleId: {
      type: "string",
      minLength: 1,
      description: "\u4EA7\u751F\u8BE5\u63A8\u65AD\u7684\u89C4\u5219\u96C6\u6807\u8BC6\uFF0C\u5BF9\u5E94 defaults/ollama-tier-heuristics.json#ruleId\u3002"
    },
    paramsB: {
      type: "number",
      minimum: 0,
      description: "\u89E3\u6790\u51FA\u7684\u53C2\u6570\u89C4\u6A21\uFF08\u5341\u4EBF\uFF09\uFF1Bparameter_size \u7F3A\u5931\u6216\u65E0\u6CD5\u89E3\u6790\u65F6\u7701\u7565\u3002"
    }
  },
  additionalProperties: false
};
var providerModelSchema = {
  type: "object",
  required: ["modelName", "displayName", "serviceType", "capabilities"],
  properties: {
    modelName: {
      type: "string",
      description: "\u6B64 Provider \u63A5\u5165\u9762\u5B9E\u9645\u63A5\u53D7\u7684\u6A21\u578B ID\uFF0C\u7528\u4E8E API \u8C03\u7528\u5E76\u4E0E ModelSpec \u7684\u7CBE\u786E/\u53D7\u63A7\u522B\u540D\u5339\u914D\uFF08\u5982 gpt-5-mini\u3001claude-sonnet-4\uFF09"
    },
    displayName: {
      type: "string",
      description: "\u65E7\u5BA2\u6237\u7AEF\u5C55\u793A\u517C\u5BB9\u526F\u672C\uFF1B\u65B0 Smart \u8DEF\u5F84\u4EE5 ModelSpec.displayName \u4E3A\u6A21\u578B\u4E8B\u5B9E\uFF0C\u6B64\u5B57\u6BB5\u4EC5\u968F\u63A5\u5165\u9762\u4FDD\u7559\u3002"
    },
    serviceType: {
      type: ["string", "array"],
      items: { type: "string" },
      description: "\u65E7\u5BA2\u6237\u7AEF\u517C\u5BB9\u7684\u63A5\u5165\u9762\u670D\u52A1\u58F0\u660E\uFF1B\u65B0 Smart \u8DEF\u5F84\u4EE5 ModelSpec.spec \u4E3A\u80FD\u529B\u4E8B\u5B9E\u3002\u652F\u6301\u5355\u4E2A\u5B57\u7B26\u4E32\u6216\u6570\u7EC4\u3002\u5DF2\u77E5\u7C7B\u578B\uFF1Achat\uFF08\u5BF9\u8BDD\uFF09\u3001reasoning\uFF08\u63A8\u7406\uFF09\u3001fast\uFF08\u5FEB\u901F\uFF09\u3001responses\uFF08OpenAI Responses\uFF09\u3001translation\uFF08\u7FFB\u8BD1\uFF09\u3001tts\uFF08\u8BED\u97F3\u5408\u6210\uFF09\u3001asr\uFF08\u8BED\u97F3\u8BC6\u522B\uFF09\u3001voice_clone\uFF08\u58F0\u97F3\u590D\u523B\uFF09\u3001realtime_voice\uFF08\u5B9E\u65F6\u8BED\u97F3\uFF09\u3001simultaneous_interpret\uFF08\u540C\u58F0\u4F20\u8BD1\uFF09\u3001vision\uFF08\u89C6\u89C9\u7406\u89E3\uFF09\u3001ocr\uFF08\u6587\u5B57\u8BC6\u522B\uFF09\u3001image_gen\uFF08\u56FE\u50CF\u751F\u6210\uFF09\u3001video_gen\uFF08\u89C6\u9891\u751F\u6210\uFF09\u3001embedding\uFF08\u5411\u91CF\u5316\uFF09\u3001rerank\uFF08\u91CD\u6392\u5E8F\uFF09\u3001omni\uFF08\u5168\u80FD\u591A\u6A21\u6001\uFF09\u3001computer_use\uFF08\u684C\u9762\u64CD\u63A7\uFF09\u7B49"
    },
    description: {
      type: "string",
      description: "\u6A21\u578B\u7B80\u8981\u63CF\u8FF0\uFF08\u4E00\u53E5\u8BDD\u8BF4\u660E\u6A21\u578B\u7279\u70B9\u548C\u9002\u7528\u573A\u666F\uFF09"
    },
    contextWindow: {
      type: "number",
      description: "\u65E7\u5BA2\u6237\u7AEF\u517C\u5BB9\u526F\u672C\uFF1BSmart \u4EE5 ModelSpec.spec.contextWindow \u4E3A\u6A21\u578B\u4E8B\u5B9E\uFF0C\u672C\u5730\u63A5\u5165\u9762\u8986\u76D6\u53EA\u80FD\u6536\u7D27\u3002",
      minimum: 0
    },
    catalogAdmission: { type: "object", required: ["allowed", "reasons", "manualOnly"], properties: { allowed: { type: "boolean" }, selectable: { type: "boolean", description: "\u662F\u5426\u53EF\u4F5C\u4E3A\u9ED8\u8BA4/\u9009\u62E9\u5019\u9009\uFF1B\u8F6F\u4E0B\u7EBFfalse\u4E0D\u4EE3\u8868\u539F\u5382\u5DF2\u505C\u6B62\u624B\u52A8\u8C03\u7528" }, reasons: { type: "array", items: { type: "string" } }, manualOnly: { type: "boolean" }, retiredAt: { type: "string", description: "\u5B98\u7F51\u786E\u8BA4\u7684UTC\u9000\u5F79\u65E5\uFF0C\u8C03\u7528\u65F6\u5B9E\u65F6\u751F\u6548" }, modelRef: { type: ["string", "null"] } }, additionalProperties: false, description: "V2\u7CBE\u786E\u7ED1\u5B9A\u4E0E\u534F\u8BAE\u51C6\u5165\u8BCA\u65AD\uFF1B\u4E0D\u80FD\u7531\u7528\u6237\u8986\u5199\u89E3\u9664\uFF0CmanualOnly\u4E0D\u53C2\u4E0ESmart\u63A8\u65AD" },
    billing: { type: "array", items: { type: "object", additionalProperties: true }, description: "\u7ED3\u6784\u5316\u63A5\u5165\u8BA1\u4EF7\uFF1B\u5E01\u79CD\u3001\u5355\u4F4D\u4E0E\u7F13\u5B58/\u5A92\u4F53/\u641C\u7D22\u8BA1\u4EF7\u5206\u5F00\u4FDD\u5B58\uFF0C\u4E0D\u8FDB\u5165\u4E0A\u6E38wire" },
    catalogMetadata: { type: "object", additionalProperties: true, description: "\u5B57\u6BB5\u8FC1\u79FB\u4FDD\u7559\u7684\u8BB0\u5F55\u6027\u6570\u636E\uFF0C\u6C38\u4E0D\u4F20\u5165\u4E0A\u6E38\u534F\u8BAE" },
    maxInputTokens: { type: "number", minimum: 1, description: "\u63A5\u5165\u9762\u72EC\u7ACB\u8F93\u5165\u9884\u7B97\uFF1B\u4E0D\u542B\u8F93\u51FA\uFF0C\u4E0D\u53EF\u5F53\u4F5C\u603B\u7A97\u53E3" },
    requiredClientVersion: { type: "string", description: "\u8C03\u7528\u6B64\u578B\u53F7\u7684\u6700\u4F4E\u5BA2\u6237\u7AEF\u7248\u672C\uFF0C\u670D\u52A1\u7AEF\u5B9E\u9645\u51FA\u7AD9\u95E8\u63A7" },
    adapterRequiredClientVersion: { type: "string", description: "\u8C03\u7528\u6B64\u578B\u53F7\u534F\u8BAE\u9002\u914D\u5668\u7684\u6700\u4F4E\u5BA2\u6237\u7AEF\u7248\u672C" },
    maxOutputTokens: {
      type: "number",
      description: "\u65E7\u5BA2\u6237\u7AEF\u517C\u5BB9\u526F\u672C\uFF1B\u65B0\u6A21\u578B\u89C4\u683C\u4EE5 ModelSpec.spec.maxOutputTokens \u4E3A\u51C6\u3002",
      minimum: 0
    },
    capabilities: {
      type: "array",
      description: "\u65E7\u5BA2\u6237\u7AEF\u517C\u5BB9\u526F\u672C\uFF1BSmart \u7684\u80FD\u529B\u6807\u7B7E\u4EE5 ModelSpec.spec.capabilities \u4E3A\u51C6\uFF0C\u63A5\u5165\u9762\u6216\u7528\u6237\u8986\u76D6\u53EA\u80FD\u6536\u7D27\uFF0C\u4E0D\u80FD\u6269\u5F20\u3002",
      items: { type: "string" }
    },
    inputPrice: {
      type: "number",
      description: "\u8F93\u5165\u4EF7\u683C\uFF08\u6BCF\u767E\u4E07 token\uFF09\uFF0C\u8D27\u5E01\u5355\u4F4D\u7531\u6240\u5C5E Provider \u7684 priceCurrency \u5B57\u6BB5\u51B3\u5B9A",
      minimum: 0
    },
    outputPrice: {
      type: "number",
      description: "\u8F93\u51FA\u4EF7\u683C\uFF08\u6BCF\u767E\u4E07 token\uFF09\uFF0C\u8D27\u5E01\u5355\u4F4D\u7531\u6240\u5C5E Provider \u7684 priceCurrency \u5B57\u6BB5\u51B3\u5B9A",
      minimum: 0
    },
    inputRatio: {
      type: "number",
      description: "\u8F93\u5165(prompt)\u6709\u6548\u8BA1\u4EF7\u500D\u7387 = \u6A21\u578B\u8F93\u5165\u500D\u7387 \xD7 \u5206\u7EC4\u500D\u7387\u3002\u6765\u81EA desirecore-server /api/v1/me/models \u7684 effectiveRatios.input\uFF1B\u500D\u7387\u5236 provider\uFF08\u5982 desirecore-cloud\uFF09\u7528\u6B64\u5B57\u6BB5\u66FF\u4EE3 inputPrice \u5C55\u793A",
      minimum: 0
    },
    outputRatio: {
      type: "number",
      description: "\u8F93\u51FA(completion)\u6709\u6548\u8BA1\u4EF7\u500D\u7387 = \u6A21\u578B\u8F93\u51FA\u500D\u7387 \xD7 \u5206\u7EC4\u500D\u7387\u3002\u6765\u81EA effectiveRatios.output",
      minimum: 0
    },
    cacheReadRatio: {
      type: "number",
      description: "\u7F13\u5B58\u8BFB\u53D6\u6709\u6548\u8BA1\u4EF7\u500D\u7387\u3002\u6765\u81EA effectiveRatios.cacheRead",
      minimum: 0
    },
    cacheWriteRatio: {
      type: "number",
      description: "\u7F13\u5B58\u5199\u5165\u6709\u6548\u8BA1\u4EF7\u500D\u7387\u3002\u6765\u81EA effectiveRatios.cacheWrite",
      minimum: 0
    },
    billingMode: {
      type: "string",
      enum: ["token", "per_call", "per_second", "per_minute", "per_char"],
      description: "\u8BA1\u8D39\u6A21\u5F0F\u3002\u6765\u81EA desirecore-server /api/v1/me/models \u7684 billingMode\u3002token=\u6309 token \u8BA1\u4EF7\uFF08\u7528 inputRatio/outputRatio \u7B49\u500D\u7387\u5C55\u793A\uFF09\uFF1Bper_call/per_second/per_minute/per_char=\u6309\u6B21/\u65F6\u957F/\u5B57\u7B26\u8BA1\u4EF7\uFF08\u7528 effectiveUnitPrice + unit \u5C55\u793A\uFF09\u3002\u7F3A\u7701\u89C6\u4E3A token\u3002\u4EF7\u683C\u53E3\u5F84\u4E00\u5F8B\u4EE5\u6B64\u5B57\u6BB5\u4E3A\u51C6\uFF0C\u4E0D\u53EF\u636E ratio \u53CD\u63A8\u8BA1\u8D39\u6A21\u5F0F"
    },
    effectiveUnitPrice: {
      type: ["number", "null"],
      description: "\u975E token \u8BA1\u8D39\u6A21\u5F0F\u7684\u6709\u6548\u5355\u4EF7\uFF08\u5355\u4F4D credit\uFF09\uFF0C\u5982\u300C5 credits/\u79D2\u300D\u4E2D\u7684 5\u3002\u6765\u81EA /api/v1/me/models \u7684 effectiveUnitPrice\uFF1Btoken \u6A21\u5F0F\u4E3A null",
      minimum: 0
    },
    unit: {
      type: ["string", "null"],
      description: "\u5355\u4EF7\u5C55\u793A\u6807\u7B7E\uFF08\u5982\u300C\u79D2\u300D\u300C\u5206\u949F\u300D\u300C\u5343\u5B57\u7B26\u300D\uFF09\uFF0C\u4E0E effectiveUnitPrice \u7EC4\u5408\u5C55\u793A\u4E3A\u300C{\u4EF7\u683C} credits/{unit}\u300D\u3002token \u6A21\u5F0F\u4E3A null"
    },
    pricingBasis: {
      type: ["string", "null"],
      enum: ["input", "output", null],
      description: "\u65F6\u957F/\u5B57\u7B26\u8BA1\u8D39\u7684\u8BA1\u4EF7\u57FA\u51C6\u7EF4\u5EA6\uFF1Ainput\uFF08\u6309\u8F93\u5165\uFF0C\u5982 ASR \u8BED\u97F3\u8BC6\u522B\u6309\u8F93\u5165\u65F6\u957F\uFF09\u6216 output\uFF08\u6309\u8F93\u51FA\uFF0C\u5982 TTS \u8BED\u97F3\u5408\u6210\u6309\u8F93\u51FA\u65F6\u957F\uFF09\u3002\u7528\u4E8E UI \u6807\u6CE8\u300C\u6309\u8F93\u5165/\u8F93\u51FA\u65F6\u957F\u300D\u3002token \u6A21\u5F0F\u6216\u4E0D\u9002\u7528\u65F6\u4E3A null"
    },
    isDefault: {
      type: "boolean",
      description: "\u662F\u5426\u4E3A\u5B98\u65B9\u63A8\u8350\u7684\u9ED8\u8BA4\u6A21\u578B\uFF08\u6765\u81EA /api/v1/me/models \u7684 isDefault\uFF0C\u5168\u5C40\u552F\u4E00\uFF09\u3002\u524D\u7AEF\u5728\u7528\u6237\u672A\u624B\u52A8\u914D\u7F6E\u9ED8\u8BA4 chat \u6A21\u578B\u65F6\u636E\u6B64\u9884\u9009"
    },
    supplier: {
      type: ["object", "null"],
      description: "\u6A21\u578B\u7684\u4F9B\u5E94\u5546\u5F52\u5C5E\uFF08SPEC-017\uFF0C\u6765\u81EA /api/v1/me/models \u7684 supplier\uFF0C\u7EAF\u5C55\u793A\uFF09\u3002\u6A21\u578B\u9009\u62E9\u5668\u636E\u6B64\u6309\u4F9B\u5E94\u5546\u5206\u7EC4\uFF1A\u7EC4\u95F4\u6309 sortOrder \u5347\u5E8F\uFF0C\u7EC4\u5185\u4FDD\u6301 models \u6570\u7EC4\u539F\u6709\u987A\u5E8F\uFF08\u670D\u52A1\u7AEF\u767D\u540D\u5355\u5E8F\uFF09\u3002null/\u7F3A\u7701 = \u672A\u7ED1\u5B9A\u4F9B\u5E94\u5546\uFF0C\u5F52\u5165\u300C\u5176\u4ED6/\u9ED8\u8BA4\u300D\u533A\u5C55\u793A\uFF08\u4E0D\u4E22\u5F03\uFF09\uFF1B\u65E7\u670D\u52A1\u7AEF\u54CD\u5E94\u65E0\u6B64\u5B57\u6BB5\uFF0C\u6574\u4EFD\u5217\u8868\u5E73\u94FA\u964D\u7EA7\u3002\u540C\u540D\u6A21\u578B\u53EF\u7531\u591A\u4F9B\u5E94\u5546\u63D0\u4F9B\uFF08name \u76F8\u540C\u3001modelName \u4E0D\u540C\uFF0C\u5982 zhipu/glm-5.1 \u4E0E volc/glm-5.1\uFF09\uFF0C\u8C03\u7528\u4E0E\u8BA1\u4EF7\u4E00\u5F8B\u4EE5 modelName \u4E3A\u51C6\uFF0C\u4EF7\u683C\u5DF2\u6309\u300C\u8BE5\u4F9B\u5E94\u5546\u8BE5\u6A21\u578B\u300D\u72EC\u7ACB\u8BA1\u597D",
      required: ["id", "name", "sortOrder"],
      properties: {
        id: { type: "string", description: "\u4F9B\u5E94\u5546 id\uFF08\u670D\u52A1\u7AEF compute_providers \u8868\uFF09\uFF0C\u5BA2\u6237\u7AEF\u5206\u7EC4\u952E" },
        name: { type: "string", description: "\u4F9B\u5E94\u5546\u5C55\u793A\u540D\uFF08\u5206\u7EC4\u5934\u6587\u5B57\uFF09" },
        description: { type: ["string", "null"], description: "\u4F9B\u5E94\u5546\u63CF\u8FF0\uFF0C\u53EF\u4E3A null" },
        logoUrl: { type: ["string", "null"], description: "\u4F9B\u5E94\u5546 logo \u56FE\u5E8A URL\uFF1Bnull \u65F6\u5206\u7EC4\u5934\u53EA\u663E\u793A\u6587\u5B57\uFF0C\u4E0D\u7559\u7A7A\u56FE\u5360\u4F4D" },
        sortOrder: { type: "number", description: "\u7EC4\u95F4\u5C55\u793A\u6392\u5E8F\uFF08\u5347\u5E8F\uFF09" }
      },
      additionalProperties: false
    },
    defaultTemperature: {
      type: ["number", "null"],
      description: "\u6B64\u6A21\u578B\u63A8\u8350\u7684\u9ED8\u8BA4\u6E29\u5EA6\u53C2\u6570\uFF080-2\uFF09\u3002null \u6216\u7F3A\u7701\u8868\u793A\u6A21\u578B\u4E0D\u652F\u6301\u6E29\u5EA6\u8C03\u8282\uFF08\u5982 reasoning \u6A21\u578B\uFF09\uFF0C\u8C03\u7528\u65B9\u5E94\u8DF3\u8FC7\u6B64\u53C2\u6570\u8BA9\u4E0A\u6E38 API \u4F7F\u7528\u5176\u5185\u90E8\u9ED8\u8BA4",
      minimum: 0,
      maximum: 2
    },
    defaultTopP: {
      type: ["number", "null"],
      description: "\u6B64\u6A21\u578B\u63A8\u8350\u7684\u9ED8\u8BA4 Top-P \u53C2\u6570\uFF080-1\uFF09\u3002null \u6216\u7F3A\u7701\u8868\u793A\u6A21\u578B\u4E0D\u652F\u6301 Top-P \u8C03\u8282\uFF08\u5982 reasoning \u6A21\u578B\uFF09\uFF0C\u8C03\u7528\u65B9\u5E94\u8DF3\u8FC7\u6B64\u53C2\u6570\u8BA9\u4E0A\u6E38 API \u4F7F\u7528\u5176\u5185\u90E8\u9ED8\u8BA4",
      minimum: 0,
      maximum: 1
    },
    extra: {
      type: "object",
      description: "\u63A5\u5165\u9762\u7279\u5B9A\u5F00\u653E\u914D\u7F6E\uFF1BmodelOrigin \u63CF\u8FF0\u771F\u5B9E\u539F\u5382\u8EAB\u4EFD\uFF0Cspeech \u63CF\u8FF0\u53EF\u8DE8\u6A21\u578B\u7248\u672C\u590D\u7528\u7684\u8BED\u97F3\u534F\u8BAE\u80FD\u529B\uFF0Creasoning \u53EA\u80FD\u6536\u7D27 ModelSpec \u5408\u540C\uFF0CthinkingRoundTrip \u58F0\u660E Provider \u539F\u751F\u56DE\u653E\u7B56\u7565\uFF08Anthropic \u5F53\u524D\u5DE5\u5177\u8F6E\u6216 Responses \u540C\u6743\u5A01\u5386\u53F2\uFF09\uFF0CthinkingToolTurnValidation \u662F\u4EC5\u517C\u5BB9\u8BFB\u53D6\u4E14\u88AB\u8FD0\u884C\u65F6\u5FFD\u7565\u7684\u65E7\u5B57\u6BB5\uFF0CserverSideWebSearch \u58F0\u660E\u63A5\u5165\u9762\u662F\u5426\u652F\u6301 LLM API \u670D\u52A1\u7AEF WebSearch\uFF08desirecore-cloud \u7531 /me/models \u9010\u6A21\u578B\u4E0B\u53D1\uFF09\uFF0CthinkingOnly \u7531 ModelSpec enrich \u590D\u5236\u800C\u6765\u3001\u63CF\u8FF0\u6A21\u578B\u662F\u5426\u5F3A\u5236\u601D\u8003\uFF0CadaptiveThinking \u63CF\u8FF0 Anthropic \u6A21\u578B\u662F\u5426\u53EA\u63A5\u53D7 adaptive thinking \u7EBF\u4E0A\u5F62\u6001\uFF0CsamplingParametersDeprecated / forcedToolChoiceUnsupported \u63CF\u8FF0\u6A21\u578B\u62D2\u7EDD\u91C7\u6837\u53C2\u6570 / \u5F3A\u5236\u5DE5\u5177\u9009\u62E9\uFF0CinferredRouting \u662F\u672C\u5730 Provider \u672A\u547D\u4E2D\u7CBE\u786E\u89C4\u683C\u65F6\u7684\u91CF\u7EA7\u542F\u53D1\u5F0F\u5F71\u5B50\u8DEF\u7531\u4FE1\u606F\u3002",
      properties: {
        apiFormatOverride: { type: "string", description: "Model-specific wire protocol; takes precedence over the provider protocol." },
        endpointPath: { type: "string", pattern: "^/[^/\\\\\\s]\\S*$", description: "Exact cloud request path, appended to gateway baseUrl by compat-proxy. Absent preserves legacy SDK routing." },
        reasoning: {
          // 先按版本字段存在性选定分支，避免宽容 AJV 在尝试旧声明时原地删除 version。
          ...versionedReasoningEffortConfigSchema,
          required: ["supportedEfforts"],
          if: { required: ["version"] },
          then: versionedReasoningEffortConfigSchema,
          else: reasoningEffortConfigSchema,
          description: "\u7CBE\u786E\u63A5\u5165\u9762\u7684 reasoning effort \u58F0\u660E\u3002\u65E7\u7248\u65E0\u7248\u672C\u58F0\u660E\u5FC5\u987B\u975E\u7A7A\uFF1B\u4E91\u76EE\u5F55 version 1 \u53EF\u7528\u7A7A\u96C6\u5408\u660E\u786E\u53EA\u5141\u8BB8 auto\uFF0C\u4E0D\u80FD\u628A\u672A\u77E5\u6216\u574F\u7248\u672C\u964D\u56DE\u65E7\u58F0\u660E\u3002"
        },
        thinkingRoundTrip: thinkingRoundTripConfigSchema,
        thinkingToolTurnValidation: thinkingToolTurnValidationSchema,
        serverSideWebSearch: serverSideWebSearchConfigSchema,
        modelOrigin: modelOriginSchema,
        speech: speechModelProfileSchema,
        // 运行时（resolver / smart-routing / 前端档位胶囊）读的就是这一份副本
        thinkingOnly: thinkingOnlySchema,
        adaptiveThinking: adaptiveThinkingSchema,
        samplingParametersDeprecated: samplingParametersDeprecatedSchema,
        forcedToolChoiceUnsupported: forcedToolChoiceUnsupportedSchema,
        thinkingDefault: thinkingDefaultSchema,
        inferredRouting: inferredRoutingSchema
      },
      additionalProperties: true
    },
    apiModelId: {
      type: "string",
      description: "\u5B9E\u9645\u4F20\u9012\u7ED9\u4E0A\u6E38 API \u7684\u6A21\u578B ID\u3002\u5F53 modelName\uFF08\u5185\u90E8\u6807\u8BC6\uFF09\u4E0E API \u671F\u671B\u7684\u540D\u79F0\u4E0D\u540C\u65F6\u4F7F\u7528\u3002\u89E3\u6790\u4F18\u5148\u7EA7\uFF1AuserOverrides.apiModelId > apiModelId > modelName"
    },
    source: {
      type: "string",
      enum: ["preset", "synced", "user-added", "ollama-discovery", "cloud"],
      description: "\u6A21\u578B\u6765\u6E90\uFF1Apreset\uFF08\u9884\u7F6E\u79CD\u5B50\u6570\u636E\uFF09\u3001synced\uFF08pi-ai \u540C\u6B65\uFF09\u3001user-added\uFF08\u7528\u6237\u624B\u52A8\u6DFB\u52A0\uFF09\u3001ollama-discovery\uFF08Ollama \u81EA\u52A8\u53D1\u73B0\uFF09\u3001cloud\uFF08\u6765\u81EA source=cloud \u7684 desirecore-server \u53D7\u7BA1 provider\uFF0C\u5237\u65B0\u65F6\u76F4\u63A5\u8986\u76D6\uFF09",
      default: "preset"
    },
    userOverrides: {
      type: "object",
      description: "\u7528\u6237\u624B\u52A8\u8986\u5199\u7684\u5B57\u6BB5\u503C\u3002\u540C\u6B65\u65F6\u4E0D\u4F1A\u88AB pi-ai \u6570\u636E\u8986\u76D6\u3002\u4EC5\u5305\u542B\u7528\u6237\u5B9E\u9645\u4FEE\u6539\u8FC7\u7684\u5B57\u6BB5\u3002",
      properties: {
        apiModelId: {
          type: "string",
          description: "\u7528\u6237\u81EA\u5B9A\u4E49\u7684 API \u6A21\u578B ID\uFF0C\u5B9E\u9645\u4F20\u9012\u7ED9\u4E0A\u6E38 API \u7684 model \u53C2\u6570\u3002\u8BBE\u7F6E\u540E\u66FF\u4EE3 modelName \u4F5C\u4E3A API \u8C03\u7528\u53C2\u6570\u3002"
        },
        displayName: {
          type: "string",
          description: "\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u663E\u793A\u540D\u79F0"
        },
        inputPrice: {
          type: "number",
          description: "\u7528\u6237\u4FEE\u6B63\u7684\u8F93\u5165\u4EF7\u683C\uFF08\u6BCF\u767E\u4E07 token\uFF09\uFF0C\u8D27\u5E01\u5355\u4F4D\u7531 Provider \u7684 priceCurrency \u51B3\u5B9A",
          minimum: 0
        },
        outputPrice: {
          type: "number",
          description: "\u7528\u6237\u4FEE\u6B63\u7684\u8F93\u51FA\u4EF7\u683C\uFF08\u6BCF\u767E\u4E07 token\uFF09\uFF0C\u8D27\u5E01\u5355\u4F4D\u7531 Provider \u7684 priceCurrency \u51B3\u5B9A",
          minimum: 0
        },
        maxInputTokens: { type: "number", minimum: 1, description: "\u7528\u6237\u6536\u7A84\u7684\u72EC\u7ACB\u8F93\u5165token\u4E0A\u9650\uFF1B\u4E0D\u5F97\u6269\u5927\u539F\u5382\u786C\u9650\u5236" },
        contextWindow: {
          type: "number",
          description: "\u7528\u6237\u4FEE\u6B63\u7684\u4E0A\u4E0B\u6587\u7A97\u53E3\u5927\u5C0F\uFF08token \u6570\uFF09",
          minimum: 0
        },
        maxOutputTokens: {
          type: "number",
          description: "\u7528\u6237\u4FEE\u6B63\u7684\u6700\u5927\u8F93\u51FA token \u6570",
          minimum: 0
        },
        description: {
          type: "string",
          description: "\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u6A21\u578B\u63CF\u8FF0/\u5907\u6CE8"
        },
        serviceType: {
          type: ["array", "null"],
          items: { type: "string" },
          description: "\u7528\u6237\u4FEE\u6539\u7684\u670D\u52A1\u7C7B\u578B\u5217\u8868\uFF08null \u8868\u793A\u91CD\u7F6E\uFF09"
        },
        capabilities: {
          type: ["array", "null"],
          items: { type: "string" },
          description: "\u7528\u6237\u4FEE\u6539\u7684\u80FD\u529B\u6807\u7B7E\u5217\u8868\uFF08null \u8868\u793A\u91CD\u7F6E\uFF09"
        },
        defaultTemperature: {
          type: ["number", "null"],
          description: "\u7528\u6237\u4FEE\u6B63\u7684\u9ED8\u8BA4\u6E29\u5EA6\uFF08null \u8868\u793A\u91CD\u7F6E\uFF09",
          minimum: 0,
          maximum: 2
        },
        defaultTopP: {
          type: ["number", "null"],
          description: "\u7528\u6237\u4FEE\u6B63\u7684\u9ED8\u8BA4 Top-P\uFF08null \u8868\u793A\u91CD\u7F6E\uFF09",
          minimum: 0,
          maximum: 1
        }
      },
      additionalProperties: false
    }
  },
  additionalProperties: false
};
var computeProviderSchema = {
  type: "object",
  required: ["id", "provider", "label", "baseUrl", "apiKeyRef", "apiKeyVerified", "enabled", "status", "services", "models"],
  properties: {
    id: {
      type: "string",
      description: "\u63D0\u4F9B\u5546\u552F\u4E00\u6807\u8BC6\u7B26\uFF08\u5982 provider-openai-001\uFF09"
    },
    provider: {
      type: "string",
      description: "\u63D0\u4F9B\u5546\u6807\u8BC6\uFF1Aopenai\u3001anthropic\u3001deepseek\u3001dashscope\uFF08\u963F\u91CC\u4E91\uFF09\u7B49"
    },
    label: {
      type: "string",
      description: "\u63D0\u4F9B\u5546\u663E\u793A\u540D\u79F0\uFF08\u5982 OpenAI\u3001Anthropic\u3001\u963F\u91CC\u4E91 DashScope\uFF09"
    },
    baseUrl: {
      type: "string",
      description: "API \u57FA\u7840 URL\uFF08\u5982 https://api.openai.com/v1\uFF09"
    },
    apiFormat: {
      type: "string",
      description: "API \u534F\u8BAE\u683C\u5F0F\uFF0C\u51B3\u5B9A HTTP \u8BF7\u6C42\u7684 URL \u8DEF\u5F84\u548C body \u7ED3\u6784\u3002\u5E38\u89C1\u503C\uFF1Aopenai-completions\u3001anthropic-messages\u3001openai-responses\u3001google-generative-ai",
      default: "openai-completions"
    },
    maxConcurrentRequests: {
      type: "integer",
      description: "\u8BE5 Provider \u5B9E\u4F8B\u5141\u8BB8\u7684\u6700\u5927\u5E76\u53D1 LLM \u8BF7\u6C42\u6570\uFF08\u8FDB\u7A0B\u5185\u6709\u754C FIFO \u4FE1\u53F7\u91CF\uFF0C\u8986\u76D6\u5BF9\u8BDD/\u59D4\u6D3E/\u5FC3\u8DF3/\u8C03\u5EA6\u5168\u90E8\u8BF7\u6C42\u8DEF\u5F84\uFF09\u3002\u672A\u8BBE\u7F6E\u65F6\u4F7F\u7528\u9ED8\u8BA4\u4E0A\u9650 12\uFF08\u610F\u5728\u6321\u4F4F\u5931\u63A7\u7684 fan-out \u6279\u5904\u7406\uFF0C\u65E5\u5E38\u5BF9\u8BDD\u4E0E\u9002\u5EA6\u59D4\u6D3E\u8FDC\u4F4E\u4E8E\u6B64\uFF0C\u8D85\u51FA\u90E8\u5206\u6392\u961F\u800C\u975E\u4E22\u5F03\uFF09\uFF1B\u663E\u5F0F\u8BBE\u4E3A 0 \u8868\u793A\u5B8C\u5168\u4E0D\u9650\u6D41\uFF1B\u6B63\u6574\u6570\u8868\u793A\u81EA\u5B9A\u4E49\u4E0A\u9650\u3002\u70ED\u964D\u7EA7\u4F1A\u7B49\u65E7\u8BF7\u6C42\u6392\u7A7A\uFF0C\u4E0D\u4F1A\u521B\u5EFA\u65B0\u65E7\u53CC\u69FD\u6C60\u3002",
      minimum: 0,
      maximum: 1e4
    },
    maxQueuedRequests: {
      type: "integer",
      minimum: 0,
      maximum: 1e4,
      description: "\u8BE5 Provider \u5B9E\u4F8B\u8FBE\u5230\u5E76\u53D1\u4E0A\u9650\u540E\u5141\u8BB8\u7B49\u5F85\u7684 LLM \u8BF7\u6C42\u6570\u30020 \u8868\u793A\u4E0D\u6392\u961F\u3001\u6EE1\u8F7D\u65F6\u7ACB\u5373\u8FD4\u56DE\u7ED3\u6784\u5316\u9650\u6D41\u9519\u8BEF\uFF1B\u672A\u8BBE\u7F6E\u9ED8\u8BA4 100\u3002\u4EC5\u5728 maxConcurrentRequests \u4E3A\u6B63\u6574\u6570\u65F6\u751F\u6548\u3002"
    },
    requestQueueTimeoutMs: {
      type: "integer",
      minimum: 1e3,
      maximum: 36e5,
      description: "\u8BE5 Provider \u5B9E\u4F8B\u7684\u5355\u4E2A LLM \u8BF7\u6C42\u6700\u957F\u6392\u961F\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09\u3002\u8D85\u65F6\u540E\u8BF7\u6C42\u4F1A\u7ACB\u5373\u51FA\u961F\u5E76\u8FD4\u56DE\u7ED3\u6784\u5316\u9650\u6D41\u9519\u8BEF\uFF1B\u672A\u8BBE\u7F6E\u9ED8\u8BA4 120000\u3002\u4EC5\u5728 maxConcurrentRequests \u4E3A\u6B63\u6574\u6570\u65F6\u751F\u6548\u3002"
    },
    apiKeyRef: {
      type: "string",
      description: "\u5BC6\u94A5\u5F15\u7528\u540D\uFF0C\u5BF9\u5E94 secrets.json \u4E2D\u7684 key\uFF1B\u7A7A\u5B57\u7B26\u4E32\u8868\u793A\u672A\u914D\u7F6E\u5BC6\u94A5"
    },
    credentialMode: {
      type: "string",
      enum: ["required", "none", "managed"],
      description: "\u51ED\u636E\u6A21\u5F0F\uFF1Arequired \u8868\u793A\u5FC5\u987B\u914D\u7F6E API Key\uFF1Bnone \u8868\u793A\u672C\u5730/\u65E0\u9274\u6743\u670D\u52A1\u65E0\u9700\u5BC6\u94A5\uFF1Bmanaged \u8868\u793A\u51ED\u636E\u7531\u767B\u5F55\u6001\u6216\u5916\u90E8\u8FD0\u884C\u65F6\u6258\u7BA1\u3002\u65E7\u914D\u7F6E\u672A\u58F0\u660E\u65F6\uFF0COllama \u81EA\u52A8\u6309 none \u517C\u5BB9\uFF0C\u5B58\u5728 credentialSource \u7684 Provider \u81EA\u52A8\u6309 managed \u517C\u5BB9\uFF0C\u5176\u4F59\u6309 required\u3002"
    },
    apiKeyVerified: {
      type: "boolean",
      description: "API Key \u662F\u5426\u5DF2\u901A\u8FC7\u9A8C\u8BC1\uFF08\u53EF\u6B63\u5E38\u8C03\u7528 API\uFF09"
    },
    enabled: {
      type: "boolean",
      description: "\u662F\u5426\u542F\u7528\u6B64\u63D0\u4F9B\u5546\uFF08\u7981\u7528\u540E\u4E0D\u4F1A\u51FA\u73B0\u5728\u6A21\u578B\u9009\u62E9\u5217\u8868\u4E2D\uFF09\u3002\u51ED\u636E\u6258\u7BA1\u7684 Provider\uFF08\u6709 credentialSource\uFF09\u7531\u68C0\u6D4B\u5668\u6309\u300C\u51ED\u636E\u53EF\u7528\u4E14 userEnablement \u4E0D\u662F disabled\u300D\u5199\u5165\uFF0C\u4E0D\u8981\u628A\u5B83\u5F53\u4F5C\u7528\u6237\u610F\u56FE\u8BFB\u53D6"
    },
    userEnablement: {
      type: "string",
      enum: ["enabled", "disabled"],
      description: "\u7528\u6237\u5BF9\u542F\u505C\u7684\u660E\u786E\u9009\u62E9\uFF0C\u53EA\u7531\u7528\u6237\u52A8\u4F5C\u5199\u5165\uFF1A\u663E\u5F0F\u542F\u505C\uFF08PUT /api/compute/providers/:id \u643A\u5E26 enabled\uFF0C\u8D44\u6E90\u9762\u677F\u6258\u7BA1 Provider \u8BE6\u60C5\u9875\u7684\u542F\u505C\u5F00\u5173\u5373\u8D70\u6B64\u7AEF\u70B9\uFF1BManageCompute set_enabled\uFF09\u4E0E\u5E94\u7528\u5185\u4E3B\u52A8\u767B\u5F55\uFF08Claude \u515C\u5E95 OAuth / setup-token\u3001Copilot \u767B\u5F55\uFF0C\u6E05\u9664 disabled\uFF09\uFF1B\u68C0\u6D4B\u5468\u671F\u4E0E\u9884\u7F6E\u5408\u5E76\u90FD\u4E0D\u6539\u5199\u3002\u7F3A\u7701\u8868\u793A\u7528\u6237\u672A\u8868\u6001\uFF1A\u51ED\u636E\u6258\u7BA1\u7684 Provider\uFF08\u6709 credentialSource\uFF09\u51ED\u636E\u53EF\u7528\u5373\u81EA\u52A8\u542F\u7528\u3001\u5931\u6548\u5373\u505C\u7528\u3002disabled\uFF1A\u68C0\u6D4B\u5468\u671F\u4E0D\u518D\u81EA\u52A8\u542F\u7528\uFF0C\u76F4\u5230\u7528\u6237\u91CD\u65B0\u542F\u7528\u3002enabled\uFF1A\u51ED\u636E\u5931\u6548\u65F6\u4ECD\u6682\u65F6\u505C\u7528\uFF0C\u6062\u590D\u540E\u81EA\u52A8\u542F\u7528\uFF0C\u4E0E\u7F3A\u7701\u76F8\u540C\uFF1B\u51ED\u636E\u672A\u8FDE\u63A5\u65F6\u663E\u5F0F\u542F\u7528\u53EA\u8BB0\u5F55\u672C\u5B57\u6BB5\uFF0Cenabled \u4FDD\u6301 false\uFF0C\u7531\u68C0\u6D4B\u5468\u671F\u5728\u51ED\u636E\u53EF\u7528\u540E\u542F\u7528\u3002\u53EA\u63CF\u8FF0\u610F\u56FE\uFF0C\u4E0D\u4EE3\u8868\u51ED\u636E\u662F\u5426\u53EF\u7528\uFF1B\u53EF\u7528\u6027\u770B status"
    },
    status: {
      type: "string",
      description: "\u63D0\u4F9B\u5546\u72B6\u6001\uFF1Aconfigured\uFF08\u5DF2\u914D\u7F6E\uFF09\u3001unconfigured\uFF08\u672A\u914D\u7F6E\uFF09\u3001error\uFF08\u914D\u7F6E\u9519\u8BEF\uFF09",
      enum: ["configured", "unconfigured", "error"]
    },
    services: {
      type: "array",
      description: "\u652F\u6301\u7684\u670D\u52A1\u7C7B\u578B\u5217\u8868\uFF08\u5982 chat\u3001reasoning\u3001vision\u3001embedding\uFF09",
      items: { type: "string" }
    },
    priceCurrency: {
      type: "string",
      enum: ["USD", "CNY"],
      default: "USD",
      description: "\u4EF7\u683C\u8D27\u5E01\u5355\u4F4D\u3002\u56FD\u5916\u63D0\u4F9B\u5546\u4F7F\u7528 USD\uFF08\u7F8E\u5143\uFF09\uFF0C\u56FD\u5185\u63D0\u4F9B\u5546\u4F7F\u7528 CNY\uFF08\u4EBA\u6C11\u5E01\uFF09\u3002models \u4E2D\u7684 inputPrice/outputPrice \u5747\u4EE5\u6B64\u8D27\u5E01\u8BA1\u4EF7"
    },
    accessMode: {
      type: "string",
      enum: ["api", "coding-plan", "token-plan"],
      default: "api",
      description: "\u63A5\u5165\u6A21\u5F0F\uFF1Aapi\uFF08\u6309\u91CF\u4ED8\u8D39 API\uFF0C\u9ED8\u8BA4\uFF09\u3001coding-plan\uFF08\u7F16\u7A0B\u8BA2\u9605\u5957\u9910\uFF09\u6216 token-plan\uFF08Token \u56E2\u961F\u7248\u8BA2\u9605\uFF09\u3002\u540C\u4E00\u4F9B\u5E94\u5546\u53EF\u540C\u65F6\u5B58\u5728\u591A\u79CD\u6A21\u5F0F\u7684 Provider \u5B9E\u4F8B"
    },
    brandGroup: {
      type: "string",
      description: '\u54C1\u724C\u5206\u7EC4\u6807\u8BC6\uFF0C\u540C\u4E00\u4F9B\u5E94\u5546\u7684 API \u548C Coding Plan \u5B9E\u4F8B\u5171\u4EAB\u6B64\u503C\uFF08\u5982 "zhipu"\uFF09\uFF0CUI \u6309\u6B64\u5B57\u6BB5\u6392\u5E8F\u4F7F\u540C\u54C1\u724C Provider \u76F8\u90BB\u663E\u793A\u3002\u672A\u8BBE\u7F6E\u65F6\u56DE\u9000\u5230 provider \u5B57\u6BB5'
    },
    codingPlan: {
      type: "object",
      description: "Coding Plan / Token Plan \u4E13\u5C5E\u914D\u7F6E\uFF08\u4EC5\u5F53 accessMode = coding-plan \u6216 token-plan \u65F6\u6709\u6548\uFF09",
      properties: {
        planTier: {
          type: "string",
          description: "\u5F53\u524D\u8BA2\u9605\u7684\u5957\u9910\u7B49\u7EA7\uFF08\u5982 lite\u3001pro\u3001max\uFF09"
        },
        planLabel: {
          type: "string",
          description: '\u5957\u9910\u663E\u793A\u540D\u79F0\uFF08\u5982 "Pro \xA549.9/\u6708"\uFF09'
        },
        quotas: {
          type: "object",
          description: "\u989D\u5EA6\u9650\u5236\u914D\u7F6E",
          properties: {
            per5h: { type: "number", description: "\u6BCF 5 \u5C0F\u65F6\u8BF7\u6C42\u6B21\u6570\u4E0A\u9650", minimum: 0 },
            perWeek: { type: "number", description: "\u6BCF\u5468\u8BF7\u6C42\u6B21\u6570\u4E0A\u9650", minimum: 0 },
            perMonth: { type: "number", description: "\u6BCF\u6708\u8BF7\u6C42\u6B21\u6570\u4E0A\u9650", minimum: 0 },
            per7d: { type: "number", description: "\u6BCF 7 \u5929\u8BF7\u6C42\u6B21\u6570\u4E0A\u9650\uFF08\u6ED1\u52A8\u7A97\u53E3\uFF09", minimum: 0 }
          },
          additionalProperties: false
        },
        usageTracking: {
          type: "object",
          description: "\u7528\u91CF\u8FFD\u8E2A\u80FD\u529B\u58F0\u660E",
          properties: {
            method: {
              type: "string",
              enum: ["rest-api", "response-header", "manual", "credits", "none"],
              description: "\u7528\u91CF\u67E5\u8BE2\u65B9\u5F0F\uFF1Arest-api\uFF08\u4E13\u7528\u63A5\u53E3\uFF09\u3001response-header\uFF08HTTP \u54CD\u5E94\u5934\uFF09\u3001manual\uFF08\u624B\u52A8\uFF09\u3001credits\uFF08Credits \u8BA1\u91CF\uFF09\u3001none\uFF08\u65E0\u6CD5\u8FFD\u8E2A\uFF09"
            },
            endpoint: { type: "string", description: "\u67E5\u8BE2\u7AEF\u70B9 URL\uFF08method=rest-api \u65F6\u4F7F\u7528\uFF09" },
            headerKeys: {
              type: "object",
              description: "\u54CD\u5E94\u5934 key \u6620\u5C04\uFF08method=response-header \u65F6\u4F7F\u7528\uFF09",
              properties: {
                remaining: { type: "string" },
                limit: { type: "string" },
                reset: { type: "string" },
                usedPercent: { type: "string", description: "\u5DF2\u7528\u767E\u5206\u6BD4\u54CD\u5E94\u5934\u540D\uFF08\u5982 x-codex-primary-used-percent\uFF09\u3002\u5B58\u5728\u4E14\u547D\u4E2D\u65F6\u6309 remaining=100-used\u3001limit=100 \u5F52\u4E00\u5316" }
              },
              additionalProperties: false
            },
            consoleUrl: { type: "string", description: "\u4F9B\u5E94\u5546\u63A7\u5236\u53F0\u7528\u91CF\u9875\u9762 URL\uFF08fallback\uFF09" }
          },
          additionalProperties: false
        },
        modelIdOverride: {
          type: "string",
          description: "\u7EDF\u4E00\u6A21\u578B ID\uFF08\u5982\u706B\u5C71\u5F15\u64CE ark-code-latest\uFF0C\u81EA\u52A8\u8DEF\u7531\u6700\u4F18\u6A21\u578B\uFF09"
        },
        maxConcurrent: {
          type: "number",
          description: "\u6700\u5927\u5E76\u53D1\u8BF7\u6C42\u6570",
          minimum: 1
        },
        expiresAt: {
          type: "string",
          format: "date-time",
          description: "\u5957\u9910\u5230\u671F\u65F6\u95F4"
        }
      },
      additionalProperties: false
    },
    tokenPlan: {
      type: "object",
      description: "Token Plan \u56E2\u961F\u7248\u4E13\u5C5E\u914D\u7F6E\uFF08\u4EC5\u5F53 accessMode = token-plan \u65F6\u6709\u6548\uFF09",
      properties: {
        planTier: {
          type: "string",
          description: "\u5F53\u524D\u8BA2\u9605\u7684\u5957\u9910\u7B49\u7EA7\uFF08\u5982 standard\u3001premium\u3001elite\uFF09"
        },
        planLabel: {
          type: "string",
          description: '\u5957\u9910\u663E\u793A\u540D\u79F0\uFF08\u5982 "\u6807\u51C6\u5750\u5E2D \xA5200/\u6708"\uFF09'
        },
        quotas: {
          type: "object",
          description: "\u989D\u5EA6\u9650\u5236\u914D\u7F6E",
          properties: {
            per5h: { type: "number", description: "\u6BCF 5 \u5C0F\u65F6\u8BF7\u6C42\u6B21\u6570\u4E0A\u9650", minimum: 0 },
            perWeek: { type: "number", description: "\u6BCF\u5468\u8BF7\u6C42\u6B21\u6570\u4E0A\u9650", minimum: 0 },
            perMonth: { type: "number", description: "\u6BCF\u6708\u8BF7\u6C42\u6B21\u6570\u4E0A\u9650", minimum: 0 },
            per7d: { type: "number", description: "\u6BCF 7 \u5929\u8BF7\u6C42\u6B21\u6570\u4E0A\u9650\uFF08\u6ED1\u52A8\u7A97\u53E3\uFF09", minimum: 0 }
          },
          additionalProperties: false
        },
        usageTracking: {
          type: "object",
          description: "\u7528\u91CF\u8FFD\u8E2A\u80FD\u529B\u58F0\u660E",
          properties: {
            method: {
              type: "string",
              enum: ["rest-api", "response-header", "manual", "credits", "none"],
              description: "\u7528\u91CF\u67E5\u8BE2\u65B9\u5F0F\uFF1Arest-api\uFF08\u4E13\u7528\u63A5\u53E3\uFF09\u3001response-header\uFF08HTTP \u54CD\u5E94\u5934\uFF09\u3001manual\uFF08\u624B\u52A8\uFF09\u3001credits\uFF08Credits \u8BA1\u91CF\uFF09\u3001none\uFF08\u65E0\u6CD5\u8FFD\u8E2A\uFF09"
            },
            endpoint: { type: "string", description: "\u67E5\u8BE2\u7AEF\u70B9 URL\uFF08method=rest-api \u65F6\u4F7F\u7528\uFF09" },
            headerKeys: {
              type: "object",
              description: "\u54CD\u5E94\u5934 key \u6620\u5C04\uFF08method=response-header \u65F6\u4F7F\u7528\uFF09",
              properties: {
                remaining: { type: "string" },
                limit: { type: "string" },
                reset: { type: "string" },
                usedPercent: { type: "string", description: "\u5DF2\u7528\u767E\u5206\u6BD4\u54CD\u5E94\u5934\u540D\uFF08\u5982 x-codex-primary-used-percent\uFF09\u3002\u5B58\u5728\u4E14\u547D\u4E2D\u65F6\u6309 remaining=100-used\u3001limit=100 \u5F52\u4E00\u5316" }
              },
              additionalProperties: false
            },
            consoleUrl: { type: "string", description: "\u4F9B\u5E94\u5546\u63A7\u5236\u53F0\u7528\u91CF\u9875\u9762 URL\uFF08fallback\uFF09" }
          },
          additionalProperties: false
        },
        modelIdOverride: {
          type: "string",
          description: "\u7EDF\u4E00\u6A21\u578B ID"
        },
        maxConcurrent: {
          type: "number",
          description: "\u6700\u5927\u5E76\u53D1\u8BF7\u6C42\u6570",
          minimum: 1
        },
        expiresAt: {
          type: "string",
          format: "date-time",
          description: "\u5957\u9910\u5230\u671F\u65F6\u95F4"
        }
      },
      additionalProperties: false
    },
    models: {
      type: "array",
      description: "\u6B64\u63D0\u4F9B\u5546\u4E0B\u7684\u53EF\u7528\u6A21\u578B\u5217\u8868",
      items: providerModelSchema
    },
    mediaBaseUrl: {
      type: "string",
      description: "\u5A92\u4F53 API \u57FA\u7840 URL\u3002\u5F53 provider \u4F7F\u7528 Anthropic \u683C\u5F0F\uFF08baseUrl \u6307\u5411 /anthropic \u7AEF\u70B9\uFF09\u4F46\u5176\u5A92\u4F53 API\uFF08\u56FE\u7247/\u8BED\u97F3/\u89C6\u9891/\u97F3\u4E50\uFF09\u4ECD\u8D70 OpenAI /v1 \u7AEF\u70B9\u65F6\u4F7F\u7528\u3002media-proxy \u4F18\u5148\u4F7F\u7528\u6B64\u5B57\u6BB5\u6784\u9020\u5A92\u4F53\u8BF7\u6C42 URL"
    },
    tombstones: {
      type: "array",
      description: '\u9884\u7F6E\u663E\u5F0F\u5220\u9664\u7684\u6A21\u578B modelName \u767D\u540D\u5355\u3002\u5408\u5E76\u65F6\u4EC5\u5BF9 source="preset" \u7684\u672C\u5730\u540C\u540D\u6A21\u578B\u6267\u884C\u771F\u5220\u9664\uFF1Buser-added / synced / ollama-discovery \u6765\u6E90\u59CB\u7EC8\u4FDD\u7559\u4E0D\u53D7\u5F71\u54CD\u3002\u672A\u5217\u5165\u6B64\u767D\u540D\u5355\u4F46\u5728\u9884\u7F6E models \u4E2D\u7F3A\u5931\u7684 preset \u6A21\u578B\u8D70 deprecated \u8F6F\u964D\u7EA7\uFF08\u4FDD\u7559\u6570\u636E\u4EE5\u9632 config-center \u4E34\u65F6\u6570\u636E\u9519\u8BEF\uFF09\u3002',
      items: { type: "string" }
    },
    source: {
      type: "string",
      enum: ["preset", "user-added", "cloud"],
      default: "preset",
      description: 'Provider \u6765\u6E90\uFF1Apreset=\u9884\u7F6E\uFF08config-center \u540C\u6B65\uFF09\uFF0Cuser-added=\u7528\u6237\u624B\u52A8\u6DFB\u52A0\uFF0Ccloud=\u767B\u5F55\u540E\u4ECE desirecore-server \u81EA\u52A8\u7ED1\u5B9A\u7684\u5B98\u65B9\u7B97\u529B\uFF08NewAPI \u7F51\u5173 + \u4E13\u5C5E key\uFF09\uFF0CUI \u4E0D\u5E94\u5141\u8BB8\u624B\u52A8\u7F16\u8F91\u6B64 provider \u7684 baseUrl/apiKey\uFF0C\u4EC5\u652F\u6301"\u5237\u65B0 key" / "\u767B\u51FA"'
    },
    managedFields: {
      type: "array",
      description: "source=cloud \u65F6\u58F0\u660E\u54EA\u4E9B\u5B57\u6BB5\u7531\u4E91\u7AEF\u7BA1\u7406\uFF0CUI \u636E\u6B64\u7981\u7528\u5BF9\u5E94\u8F93\u5165\u6846\u3002\u5E38\u89C1\u503C\uFF1AbaseUrl\u3001apiKeyRef\u3001models\u3001apiFormat\u3002\u672A\u8BBE\u7F6E\u65F6 UI \u9ED8\u8BA4\u7981\u7528 baseUrl \u548C apiKeyRef",
      items: { type: "string" }
    },
    cloudUnavailableModels: {
      type: "array",
      items: { type: "string" },
      description: "Cloud model codes omitted due to unsupported explicit protocols or invalid endpoints. Explicit requests must fail without protocol fallback."
    },
    cloudAccountId: { type: "string", maxLength: 256, description: "\u540E\u53F0\u6388\u6743\u8D26\u53F7\u7684\u4E0D\u900F\u660E\u6807\u8BC6\uFF0C\u4EC5\u5173\u8054\u540C\u8D26\u53F7\u914D\u989D\uFF0C\u4E0D\u662F\u51ED\u636E" },
    cloudCatalog: {
      type: "object",
      additionalProperties: false,
      required: ["revision", "digest", "syncedAt"],
      description: "\u5DF2\u63A5\u53D7\u7684\u5B8C\u6574\u4E91\u76EE\u5F55\u7248\u672C\uFF1B\u4E0E\u8FD0\u884C\u65F6\u7ED1\u5B9A\u4EE3\u6B21\u3001ModelSpec \u5951\u7EA6\u7248\u672C\u5206\u522B\u7BA1\u7406",
      properties: {
        revision: { type: "string", pattern: "^(0|[1-9][0-9]*)$", description: "\u670D\u52A1\u7AEF\u6301\u4E45\u3001\u5355\u8C03\u9012\u589E\u7684\u76EE\u5F55\u7248\u672C\uFF1B\u4F7F\u7528\u5341\u8FDB\u5236\u5B57\u7B26\u4E32\u907F\u514D\u6574\u6570\u6EA2\u51FA" },
        digest: { type: "string", description: "\u89C4\u8303\u5316\u516C\u5F00\u76EE\u5F55\u6458\u8981\uFF0C\u7528\u4E8E\u68C0\u6D4B\u540C\u7248\u672C\u5185\u5BB9\u77DB\u76FE\uFF1B\u4E0D\u542B\u51ED\u636E" },
        syncedAt: { type: "number", description: "\u5B8C\u6574\u76EE\u5F55\u63A5\u53D7\u65F6\u95F4\uFF08epoch ms\uFF09\uFF0C\u4E0D\u4EE3\u8868\u6A21\u578B\u9A8C\u8BC1\u6210\u529F" }
      }
    },
    cloudWebSearch: {
      type: "array",
      description: "Independent cloud search sources from /me/models; never model picker entries. Omitted when webSearch or gateway is absent. Uses this provider\u2019s gateway and secret.",
      items: cloudSearchProviderSchema
    },
    computeProviders: {
      type: "array",
      description: "\u9876\u5C42\u7B97\u529B\u4F9B\u5E94\u5546\u516C\u544A\u5217\u8868\uFF08active \u5DF2\u6309\u670D\u52A1\u7AEF\u7EA6\u5B9A\u6392\u5E8F\uFF09\u3002\u6765\u81EA /api/v1/me/models \u9876\u5C42 computeProviders\uFF0C\u4EC5 source=cloud \u7684 provider \u643A\u5E26\u3002UI\uFF08ResourcePanel\uFF09\u636E\u6B64\u5728\u6A21\u578B\u5217\u8868\u9876\u90E8\u6E32\u67D3\u300C\u7B97\u529B\u7531 X \u63D0\u4F9B\u300D\uFF1B\u7A7A\u6570\u7EC4\u4E0D\u5C55\u793A",
      items: {
        type: "object",
        required: ["name"],
        properties: {
          name: { type: "string", description: "\u7B97\u529B\u4F9B\u5E94\u5546\u540D\u79F0\uFF08\u5C55\u793A\u7528\uFF09" },
          description: { type: ["string", "null"], description: "\u4F9B\u5E94\u5546\u63CF\u8FF0\uFF0C\u53EF\u4E3A null" },
          logoUrl: { type: ["string", "null"], description: "\u4F9B\u5E94\u5546 logo \u56FE\u5E8A URL\uFF08SPEC-017\uFF09\uFF1Bnull/\u7F3A\u7701\u65F6\u516C\u544A\u53EA\u663E\u793A\u6587\u5B57\uFF0C\u4E0D\u7559\u7A7A\u56FE\u5360\u4F4D" }
        },
        additionalProperties: false
      }
    },
    credentialSource: {
      // 开放集：故意不用 enum 硬枚举。凭据源类型会持续增加，硬枚举会导致 config-center 每加一种
      // 新类型都必须先发支持它的客户端，否则老客户端把「已知字段的非法枚举值」判为结构性错误而
      // 拒绝整份预设合并（"毒丸"）。开放集下，客户端遇到不认识的值时该 provider 优雅降级即可。
      type: "string",
      description: "\u51ED\u8BC1\u6258\u7BA1\u6765\u6E90\uFF08\u5F00\u653E\u96C6\uFF0C\u4E0D\u786C\u679A\u4E3E\u4EE5\u4FDD\u5411\u540E\u517C\u5BB9\uFF09\u3002\u5DF2\u77E5\u503C\uFF1Acodex-cli\uFF08\u5BC6\u94A5\u7531\u672C\u5730 Codex CLI \u51ED\u8BC1\u68C0\u6D4B\u5668\u6258\u7BA1\uFF1A\u8BFB\u53D6 ~/.codex/auth.json\uFF0C\u81EA\u52A8\u5237\u65B0\u5E76\u5199\u56DE\uFF0Cfresh access token \u540C\u6B65\u5230 secrets.json\uFF09\uFF1Bclaude-oauth\uFF08Claude \u8BA2\u9605\u63A5\u5165\uFF0C\u7531 claude-auth \u68C0\u6D4B\u5668\u6258\u7BA1\u2014\u2014\u9996\u9009\u590D\u7528\u672C\u673A Claude Code \u767B\u5F55\uFF08SDK \u81EA\u8BFB\uFF0C\u4E0D\u5199\u4E0D\u5237\u65B0\uFF09\uFF0C\u6216\u5E94\u7528\u5185 OAuth / setup-token \u515C\u5E95\uFF08\u51ED\u8BC1\u5B58 DesireCore \u6570\u636E\u6839\u76EE\u5F55\u4E0B\u7684 config/claude-oauth.json\uFF09\uFF1B\u6A21\u578B\u8C03\u7528\u7ECF compat-proxy \u5185 claude-sdk-backend \u8D70 @anthropic-ai/claude-agent-sdk\uFF0C\u4E0D\u76F4\u8FDE\uFF09\uFF1Bgithub-copilot\uFF08GitHub Copilot \u8BA2\u9605\u63A5\u5165\uFF0C\u7531 copilot-auth \u68C0\u6D4B\u5668\u6258\u7BA1\u2014\u2014GitHub Device Flow \u767B\u5F55\uFF0C\u957F\u671F GitHub OAuth token \u5B58 config/copilot-oauth.json\uFF0C\u5B9A\u671F\u4EA4\u6362\u7EA6 30 \u5206\u949F\u6709\u6548\u7684 Copilot session token \u5199\u5165 secrets.json\uFF1B\u6A21\u578B\u8C03\u7528\u5E26 Copilot \u534F\u8BAE headers \u76F4\u8FDE\u4EA4\u6362\u54CD\u5E94 endpoints.api \u6307\u5B9A\u57DF\u540D\uFF0C\u6A21\u578B\u5217\u8868\u7531 /models \u52A8\u6001\u53D1\u73B0\uFF09\u3002\u4E09\u8005 UI \u5747\u9690\u85CF apiKey \u8F93\u5165\u6846\u4E0E\u7F16\u8F91\u5165\u53E3\uFF0C\u53EA\u5728\u8BE6\u60C5\u9875\u4FDD\u7559\u542F\u505C\u5F00\u5173\uFF08\u5199 userEnablement\uFF0C\u5F00\u5173\u4F4D\u7F6E\u8868\u793A\u7528\u6237\u610F\u56FE\uFF0C\u51ED\u636E\u8FDE\u63A5\u72B6\u6001\u5355\u72EC\u5C55\u793A\uFF09\uFF1Bstatus \u7531\u68C0\u6D4B\u5668\u7EF4\u62A4\uFF0C\u4E0D\u4ECE secrets.json \u6B8B\u7559\u5BC6\u94A5\u91CD\u7B97\uFF1Bkey-verifier \u8DF3\u8FC7 HTTP \u63A2\u9488\u3002\u65B0\u51ED\u636E\u6E90\u7C7B\u578B\u4F1A\u6301\u7EED\u589E\u52A0\uFF1A\u5BA2\u6237\u7AEF SUPPORTED_CREDENTIAL_SOURCES \u672A\u8986\u76D6\u7684\u503C \u2192 \u8BE5 provider \u4F18\u96C5\u964D\u7EA7\uFF08\u524D\u7AEF\u6807\u300C\u9700\u66F4\u65B0\u5BA2\u6237\u7AEF\u300D\u3001\u4E0D\u8FDB\u6A21\u578B\u9009\u62E9\u5668\uFF09\uFF0C\u4E0D\u5D29\u6E83\u3001\u4E0D\u963B\u65AD\u6574\u4EFD\u9884\u8BBE\u5408\u5E76"
    },
    requiredClientVersion: {
      // 故意不加 pattern：坏格式版本号不应让该 provider 在 merge salvage 中被整个丢弃（结构性错误）；
      // 格式收紧由 config-center frozen schema 在源头把关，客户端 compareSemver 对非法值 fail-open（不门控）
      type: "string",
      description: "\u4F7F\u7528\u6B64 provider \u6240\u9700\u7684\u6700\u4F4E\u5BA2\u6237\u7AEF\u7248\u672C\uFF08semver x.y.z\uFF09\u3002\u4F4E\u4E8E\u8BE5\u7248\u672C\u7684\u5BA2\u6237\u7AEF\u5728 UI \u95E8\u63A7\u4E3A\u300C\u9700\u66F4\u65B0\u5BA2\u6237\u7AEF\u300D\u5E76\u4ECE\u6A21\u578B\u9009\u62E9\u5668\u6392\u9664\uFF08enrich \u6D3E\u751F clientUpgradeRequired \u8FD0\u884C\u65F6\u4FE1\u53F7\uFF0C\u4E0D\u843D\u76D8\u3001\u670D\u52A1\u7AEF\u5B9E\u9645\u51FA\u7AD9\u540C\u6837\u95E8\u63A7\uFF09\u3002config-center \u9884\u8BBE\u58F0\u660E\u65B0\u51ED\u636E\u6E90/\u65B0\u80FD\u529B provider \u65F6\u5FC5\u987B\u643A\u5E26\u672C\u5B57\u6BB5\uFF1B\u964D\u4F4E/\u89E3\u9664\u8981\u6C42\u8BF7\u6539\u4E3A\u66F4\u5C0F\u7248\u672C\u53F7\u800C\u975E\u5220\u9664\u5B57\u6BB5\uFF08\u9884\u8BBE\u5408\u5E76\u4E0D\u56DE\u4F20\u5B57\u6BB5\u5220\u9664\uFF09"
    },
    presetSnapshot: {
      type: "object",
      description: "\uFF08\u5185\u90E8\uFF09\u4E0A\u6B21\u9884\u7F6E\u5408\u5E76\u65F6\u4E0A\u6E38 provider \u57FA\u7840\u5B57\u6BB5\u7684\u5FEB\u7167\u3002\u5408\u5E76\u65F6\u4E09\u65B9\u6BD4\u5BF9\uFF1A\u5F53\u524D\u503C\u2260\u5FEB\u7167\u503C\u89C6\u4E3A\u7528\u6237\u81EA\u5B9A\u4E49\uFF08\u4FDD\u7559\u4E0D\u8986\u76D6\uFF09\uFF1B\u5F53\u524D\u503C=\u5FEB\u7167\u503C\u5219\u8DDF\u968F\u4E0A\u6E38\u66F4\u65B0\u3002\u7F3A\u5931\u65F6\u8D70\u4FDD\u5B88\u8FC1\u79FB\uFF08\u4FDD\u7559\u672C\u5730\u5DEE\u5F02\u503C\u5E76\u4EA7\u751F\u51B2\u7A81\u63D0\u793A\uFF09\u3002\u4EC5\u5BF9 source=preset \u7684 provider \u6709\u610F\u4E49",
      properties: {
        baseUrl: { type: "string", description: "\u5FEB\u7167\uFF1A\u4E0A\u6E38 baseUrl" },
        label: { type: "string", description: "\u5FEB\u7167\uFF1A\u4E0A\u6E38 label" },
        apiFormat: { type: "string", description: "\u5FEB\u7167\uFF1A\u4E0A\u6E38 apiFormat" },
        mediaBaseUrl: { type: "string", description: "\u5FEB\u7167\uFF1A\u4E0A\u6E38 mediaBaseUrl" },
        priceCurrency: { type: "string", enum: ["USD", "CNY"], description: "\u5FEB\u7167\uFF1A\u4E0A\u6E38 priceCurrency" }
      },
      additionalProperties: false
    }
  },
  additionalProperties: false
};
var serviceMapEntrySchema = {
  type: "object",
  required: ["modelName", "providerId"],
  properties: {
    modelName: {
      type: "string",
      description: "\u6620\u5C04\u5230\u7684\u6A21\u578B ID\uFF08\u5982 gpt-5-mini\uFF09"
    },
    providerId: {
      type: "string",
      description: "\u6620\u5C04\u5230\u7684\u63D0\u4F9B\u5546\u552F\u4E00\u6807\u8BC6\u7B26\uFF08\u5982 provider-openai-001\uFF09"
    }
  },
  additionalProperties: false
};
var smartProviderPrioritiesSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  description: "Smart \u540C\u4E00\u91CF\u7EA7\u5185\u7684 Provider \u4F18\u5148\u7EA7\uFF0C\u952E\u4E3A\u7CBE\u786E Provider ID\uFF0C\u6574\u6570\u8D8A\u5927\u8D8A\u4F18\u5148\uFF1B\u7F3A\u7701\u5B98\u65B9\u7B97\u529B\u4E3A 100\u3001\u5176\u4ED6\u4E3A 0\u3002\u7528\u6237\u8986\u76D6\u4F18\u5148\u4E8E\u9ED8\u8BA4\u503C\uFF0C\u4E0D\u6539\u53D8\u91CF\u7EA7\u56DE\u9000\u6216\u6A21\u578B\u5185\u90E8\u6392\u5E8F\u3002",
  propertyNames: { type: "string", minLength: 1 },
  additionalProperties: {
    type: "integer",
    minimum: -1e4,
    maximum: 1e4,
    description: "\u6765\u6E90\u4F18\u5148\u7EA7\uFF1A-10000 \u5230 10000\uFF0C\u8D8A\u5927\u8D8A\u4F18\u5148\uFF1B\u540C\u5206\u7EE7\u7EED\u6BD4\u8F83\u6A21\u578B\u7B56\u7565\u3002"
  }
};
var computeConfigSchema = {
  type: "object",
  required: ["version", "providers", "defaultServiceMap"],
  properties: {
    version: {
      type: "number",
      description: "\u914D\u7F6E\u7248\u672C\u53F7\uFF0C\u7528\u4E8E\u6570\u636E\u8FC1\u79FB",
      minimum: 1
    },
    providers: {
      type: "array",
      description: "AI \u670D\u52A1\u63D0\u4F9B\u5546\u5217\u8868\uFF0C\u6BCF\u4E2A\u63D0\u4F9B\u5546\u5305\u542B\u591A\u4E2A\u53EF\u7528\u6A21\u578B",
      items: computeProviderSchema
    },
    defaultServiceMap: {
      type: "object",
      description: "\u9ED8\u8BA4\u670D\u52A1\u6620\u5C04\uFF1A\u6309\u670D\u52A1\u7C7B\u578B\uFF08\u5982 chat\u3001reasoning\uFF09\u81EA\u52A8\u9009\u62E9\u6A21\u578B\u548C\u63D0\u4F9B\u5546",
      additionalProperties: serviceMapEntrySchema
    },
    smartProviderPriorities: smartProviderPrioritiesSchema,
    modelAvailabilityPolicy: modelAvailabilityPolicySchema,
    _presetDigest: {
      type: "string",
      description: "\uFF08\u5185\u90E8\uFF09\u9884\u7F6E\u6570\u636E\u5185\u5BB9\u6458\u8981\uFF08SHA-256 \u524D 16 \u4F4D\uFF09\uFF0C\u7528\u4E8E\u68C0\u6D4B\u6570\u636E\u662F\u5426\u6709\u66F4\u65B0"
    },
    _presetDataVersion: {
      type: "number",
      description: "\uFF08\u5185\u90E8\uFF09\u5F53\u524D\u5DF2\u5408\u5E76\u7684\u9884\u7F6E\u6570\u636E\u7248\u672C\u53F7\uFF08\u9012\u589E\u6574\u6570\uFF09\uFF0C\u7528\u4E8E\u4E09\u6E90\u6BD4\u5BF9\u5224\u65AD\u8C01\u66F4\u65B0",
      minimum: 0
    },
    _presetServiceMap: {
      type: "object",
      description: "\uFF08\u5185\u90E8\uFF09\u4E0A\u6B21\u9884\u7F6E\u5408\u5E76\u65F6 defaultServiceMap \u7684\u5FEB\u7167\uFF0C\u7528\u4E8E\u5224\u65AD\u7528\u6237\u662F\u5426\u4FEE\u6539\u8FC7\u9ED8\u8BA4\u6620\u5C04",
      additionalProperties: serviceMapEntrySchema
    },
    _cloudChatDefault: {
      ...serviceMapEntrySchema,
      description: "\uFF08\u5185\u90E8\uFF09cloud \u540C\u6B65\u4E0A\u6B21\u81EA\u52A8\u5E94\u7528\u7684\u9ED8\u8BA4 chat \u6A21\u578B\uFF08= /api/v1/me/models \u7684 isDefault\uFF09\u3002\u7528\u4E8E\u533A\u5206\u300C\u7528\u6237\u624B\u52A8\u9009\u7684 chat \u9ED8\u8BA4\u300D\u4E0E\u300C\u6211\u4EEC\u81EA\u52A8\u5E94\u7528\u7684\u300D\uFF1A\u5F53 defaultServiceMap.chat \u4ECD\u7B49\u4E8E\u672C\u5B57\u6BB5\uFF08\u6216\u7B49\u4E8E _presetServiceMap.chat / \u672A\u8BBE\u7F6E\uFF09\u65F6\u89C6\u4E3A\u672A\u624B\u52A8\u914D\u7F6E\uFF0C\u4E0B\u6B21\u540C\u6B65\u8DDF\u968F isDefault \u66F4\u65B0\uFF1B\u5426\u5219\u4FDD\u7559\u7528\u6237\u9009\u62E9"
    }
  },
  additionalProperties: false
};
var createModelSchema = {
  type: "object",
  required: ["modelName", "displayName", "serviceType"],
  properties: {
    modelName: {
      type: "string",
      minLength: 1,
      maxLength: 200,
      description: "\u6A21\u578B ID\uFF0C\u7528\u4E8E API \u8C03\u7528\uFF08\u5982 gpt-5-mini\u3001llama3.2:latest\uFF09"
    },
    displayName: {
      type: "string",
      minLength: 1,
      maxLength: 100,
      description: "\u6A21\u578B\u663E\u793A\u540D\u79F0\uFF08\u5982 GPT-5 Mini\u3001Llama 3.2\uFF09"
    },
    serviceType: {
      type: "array",
      items: { type: "string" },
      minItems: 1,
      description: "\u670D\u52A1\u7C7B\u578B\u5217\u8868\uFF1Achat\u3001reasoning\u3001fast\u3001responses\u3001translation\u3001tts\u3001asr\u3001voice_clone\u3001realtime_voice\u3001simultaneous_interpret\u3001vision\u3001ocr\u3001image_gen\u3001video_gen\u3001embedding\u3001rerank\u3001omni\u3001computer_use \u7B49"
    },
    description: {
      type: "string",
      maxLength: 500,
      description: "\u6A21\u578B\u7B80\u8981\u63CF\u8FF0"
    },
    contextWindow: {
      type: "number",
      minimum: 0,
      description: "\u4E0A\u4E0B\u6587\u7A97\u53E3\u5927\u5C0F\uFF08token \u6570\uFF09"
    },
    maxOutputTokens: {
      type: "number",
      minimum: 0,
      description: "\u5355\u6B21\u6700\u5927\u8F93\u51FA token \u6570"
    },
    capabilities: {
      type: "array",
      items: { type: "string" },
      description: "\u6A21\u578B\u80FD\u529B\u6807\u7B7E\uFF08chat\u3001vision\u3001tool_use\u3001code\u3001reasoning\uFF09"
    },
    inputPrice: {
      type: "number",
      minimum: 0,
      description: "\u8F93\u5165\u4EF7\u683C\uFF08\u6BCF\u767E\u4E07 token\uFF09\uFF0C\u8D27\u5E01\u5355\u4F4D\u7531\u6240\u5C5E Provider \u7684 priceCurrency \u51B3\u5B9A"
    },
    outputPrice: {
      type: "number",
      minimum: 0,
      description: "\u8F93\u51FA\u4EF7\u683C\uFF08\u6BCF\u767E\u4E07 token\uFF09\uFF0C\u8D27\u5E01\u5355\u4F4D\u7531\u6240\u5C5E Provider \u7684 priceCurrency \u51B3\u5B9A"
    },
    reasoningEffort: {
      ...reasoningEffortConfigSchema,
      description: "\u8BE5\u7528\u6237\u65B0\u589E\u6A21\u578B\u5728\u5F53\u524D Provider \u63A5\u5165\u9762\u5B9E\u9645\u63A5\u53D7\u7684 reasoning_effort\u3002\u4FDD\u5B58\u65F6\u5199\u5165 models[].extra.reasoning\uFF1B\u7F3A\u7701\u8868\u793A\u6CBF\u7528\u65E7\u7248\u517C\u5BB9\u6620\u5C04\u3002"
    }
  },
  additionalProperties: false
};
var modelSpecRoutingReasoningSchema = {
  type: "object",
  required: ["supportedModes", "defaultMode"],
  properties: {
    supportedModes: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      items: {
        type: "string",
        enum: ["auto", "off", "minimal", "low", "medium", "high", "xhigh", "max"]
      },
      description: "\u4EA7\u54C1\u5C42\u53EF\u7528\u7684 reasoning \u6863\u4F4D\u3002"
    },
    defaultMode: {
      type: "string",
      enum: ["auto", "off", "minimal", "low", "medium", "high", "xhigh", "max"],
      description: "\u6CA1\u6709\u663E\u5F0F\u8BF7\u6C42\u65F6\u7684\u7B56\u7565\u9ED8\u8BA4\u6863\u4F4D\uFF0C\u5FC5\u987B\u5305\u542B\u5728 supportedModes \u4E2D\u3002"
    }
  },
  allOf: [
    { if: { properties: { defaultMode: { const: "auto" } } }, then: { properties: { supportedModes: { contains: { const: "auto" } } } } },
    { if: { properties: { defaultMode: { const: "off" } } }, then: { properties: { supportedModes: { contains: { const: "off" } } } } },
    { if: { properties: { defaultMode: { const: "minimal" } } }, then: { properties: { supportedModes: { contains: { const: "minimal" } } } } },
    { if: { properties: { defaultMode: { const: "low" } } }, then: { properties: { supportedModes: { contains: { const: "low" } } } } },
    { if: { properties: { defaultMode: { const: "medium" } } }, then: { properties: { supportedModes: { contains: { const: "medium" } } } } },
    { if: { properties: { defaultMode: { const: "high" } } }, then: { properties: { supportedModes: { contains: { const: "high" } } } } },
    { if: { properties: { defaultMode: { const: "xhigh" } } }, then: { properties: { supportedModes: { contains: { const: "xhigh" } } } } },
    { if: { properties: { defaultMode: { const: "max" } } }, then: { properties: { supportedModes: { contains: { const: "max" } } } } }
  ],
  additionalProperties: false,
  description: "\u6A21\u578B\u7EA7\u6807\u51C6\u5316 reasoning \u5408\u540C\u3002auto \u4E3A\u4E0D\u53D1\u9001\u53C2\u6570\uFF0Coff \u4E3A\u663E\u5F0F\u5173\u95ED\uFF1BProvider \u63A5\u5165\u9762\u53EF\u6536\u7D27\u6B64\u96C6\u5408\uFF0C\u4F46\u4E0D\u5F97\u6269\u5F20\u3002"
};
var modelSpecRoutingSchema = {
  type: "object",
  required: ["tier", "routingPriority", "eligibleForAgent", "defaultReference", "reasoning"],
  properties: {
    tier: {
      type: "string",
      enum: ["flagship", "balanced", "lightweight"],
      description: "\u6A21\u578B\u5728\u667A\u80FD\u8DEF\u7531\u4E2D\u7684\u80FD\u529B\u91CF\u7EA7\u3002"
    },
    routingPriority: {
      type: "integer",
      minimum: 0,
      maximum: 1e4,
      description: "\u540C\u4E00\u91CF\u7EA7\u5185\u7684\u7A33\u5B9A\u4F18\u5148\u7EA7\uFF0C\u6570\u503C\u8D8A\u5C0F\u8D8A\u4F18\u5148\u3002"
    },
    eligibleForAgent: {
      type: "boolean",
      description: "\u662F\u5426\u5141\u8BB8\u4F5C\u4E3A Agent \u4E3B\u6A21\u578B\uFF1B\u5A92\u4F53\u4E13\u7528\u6A21\u578B\u5FC5\u987B\u4E3A false\u3002"
    },
    defaultReference: {
      type: "boolean",
      description: "\u662F\u5426\u662F\u9ED8\u8BA4\u6A21\u578B\u7684\u7B56\u7565\u53C2\u8003\uFF0C\u53EA\u5F71\u54CD\u540C\u7EA7\u6392\u5E8F\uFF0C\u4E0D\u662F\u5F3A\u5236\u9009\u62E9\u3002"
    },
    reasoning: modelSpecRoutingReasoningSchema
  },
  additionalProperties: false,
  description: "\u667A\u80FD\u8DEF\u7531\u7B56\u7565\u3002\u5B58\u5728\u5373\u8868\u793A\u8BE5\u7CBE\u786E\u6A21\u578B\u53EF\u8FDB\u5165\u8DEF\u7531\u5019\u9009\uFF1B\u6A21\u578B\u80FD\u529B\u548C reasoning \u5408\u540C\u5747\u4EE5\u672C\u6761\u76EE\u4E3A\u51C6\uFF0CProvider \u53EA\u80FD\u4E3A\u63A5\u5165\u9762\u6536\u7D27\u3002"
};
var modelSpecRoutingTierSchema = {
  type: "object",
  required: ["id", "label", "labelEn", "description", "fallbackOrder"],
  properties: {
    id: {
      type: "string",
      enum: ["flagship", "balanced", "lightweight"],
      description: "\u91CF\u7EA7\u7A33\u5B9A\u6807\u8BC6\u3002"
    },
    label: { type: "string", minLength: 1, description: "\u4E2D\u6587\u6807\u7B7E\u3002" },
    labelEn: { type: "string", minLength: 1, description: "\u82F1\u6587\u6807\u7B7E\u3002" },
    description: { type: "string", minLength: 1, description: "\u9002\u7528\u4EFB\u52A1\u8BF4\u660E\u3002" },
    fallbackOrder: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      uniqueItems: true,
      items: { type: "string", enum: ["flagship", "balanced", "lightweight"] },
      description: "\u8BE5\u6863\u4F4D\u7F3A\u5C11\u53EF\u7528\u5019\u9009\u65F6\u7684\u91CF\u7EA7\u964D\u7EA7/\u5347\u7EA7\u987A\u5E8F\uFF0C\u9996\u9879\u5FC5\u987B\u7B49\u4E8E id\u3002"
    }
  },
  allOf: [
    {
      if: { properties: { id: { const: "flagship" } }, required: ["id"] },
      then: { properties: { fallbackOrder: { items: [{ const: "flagship" }] } } }
    },
    {
      if: { properties: { id: { const: "balanced" } }, required: ["id"] },
      then: { properties: { fallbackOrder: { items: [{ const: "balanced" }] } } }
    },
    {
      if: { properties: { id: { const: "lightweight" } }, required: ["id"] },
      then: { properties: { fallbackOrder: { items: [{ const: "lightweight" }] } } }
    }
  ],
  additionalProperties: false
};
var modelSpecsIndexSchema = {
  type: "object",
  required: ["order", "routingTiers"],
  properties: {
    description: { type: "string", description: "\u7D22\u5F15\u8BF4\u660E\u3002" },
    order: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      items: { type: "string", minLength: 1 },
      description: "\u6A21\u578B\u89C4\u683C\u6587\u4EF6 basename \u7684\u7A33\u5B9A\u52A0\u8F7D\u987A\u5E8F\u3002"
    },
    routingTiers: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: modelSpecRoutingTierSchema,
      description: "\u667A\u80FD\u8DEF\u7531\u91CF\u7EA7\u5B9A\u4E49\u4E0E\u56DE\u9000\u7B56\u7565\u3002"
    }
  },
  allOf: [
    {
      properties: {
        routingTiers: {
          contains: { type: "object", properties: { id: { const: "flagship" } }, required: ["id"] }
        }
      }
    },
    {
      properties: {
        routingTiers: {
          contains: { type: "object", properties: { id: { const: "balanced" } }, required: ["id"] }
        }
      }
    },
    {
      properties: {
        routingTiers: {
          contains: { type: "object", properties: { id: { const: "lightweight" } }, required: ["id"] }
        }
      }
    }
  ],
  additionalProperties: false,
  description: "compute/model-specs \u7684\u52A0\u8F7D\u987A\u5E8F\u4E0E\u667A\u80FD\u8DEF\u7531\u4E09\u6863\u5B9A\u4E49\u3002\u91CF\u7EA7\u5C5E\u4E8E model-specs \u57DF\uFF0C\u4E0D\u5F97\u53E6\u5EFA smart-routing \u76EE\u5F55\u3002"
};

// scripts/sync/config-center-runtime-publisher.ts
var SHA1 = /^[a-f0-9]{40}$/;
function assertBranch(branch) {
  if (!branch || branch === "HEAD" || branch.startsWith("refs/") || branch.length > 200 || !/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(branch) || branch.includes("..") || branch.includes("//") || branch.endsWith(".") || branch.split("/").some((part) => !part || part.startsWith(".") || part.endsWith(".lock"))) {
    throw new Error("config_center_runtime_invalid_branch");
  }
}
function plainDirectory(path) {
  const stat = (0, import_node_fs2.lstatSync)(path);
  if (!stat.isDirectory() || stat.isSymbolicLink()) throw new Error("config_center_runtime_directory_not_plain");
  return (0, import_node_fs2.realpathSync)(path);
}
function overlaps(left, right) {
  const contains = (parent, child) => {
    const rel = (0, import_node_path2.relative)(parent, child);
    return rel === "" || !(0, import_node_path2.isAbsolute)(rel) && rel !== ".." && !rel.startsWith(`..${import_node_path2.sep}`);
  };
  return contains(left, right) || contains(right, left);
}
function createGitContext(gitBinary) {
  const scratch = (0, import_node_fs2.mkdtempSync)((0, import_node_path2.join)((0, import_node_os.tmpdir)(), "dc-config-runtime-publisher-"));
  const home = (0, import_node_path2.join)(scratch, "home"), template = (0, import_node_path2.join)(scratch, "template"), hooks = (0, import_node_path2.join)(scratch, "hooks");
  for (const path of [home, template, hooks]) (0, import_node_fs2.mkdirSync)(path);
  const env = Object.fromEntries(
    ["PATH", "Path", "SystemRoot", "windir", "TEMP", "TMP", "TMPDIR"].flatMap((key) => process.env[key] === void 0 ? [] : [[key, process.env[key]]])
  );
  Object.assign(env, {
    HOME: home,
    USERPROFILE: home,
    XDG_CONFIG_HOME: home,
    GIT_CONFIG_GLOBAL: import_node_os.devNull,
    GIT_CONFIG_SYSTEM: import_node_os.devNull,
    GIT_CONFIG_NOSYSTEM: "1",
    GIT_TEMPLATE_DIR: template,
    GIT_OPTIONAL_LOCKS: "0",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    GIT_ASKPASS: "",
    GIT_ALLOW_PROTOCOL: "",
    GIT_NO_LAZY_FETCH: "1",
    LC_ALL: "C"
  });
  const hardening = [
    "-c",
    `core.hooksPath=${hooks}`,
    "-c",
    "core.fsmonitor=false",
    "-c",
    "core.untrackedCache=false",
    "-c",
    "core.splitIndex=false",
    "-c",
    "core.sparseCheckout=false",
    "-c",
    "commit.gpgSign=false",
    "-c",
    "gc.auto=0",
    "-c",
    "maintenance.auto=false",
    "-c",
    `core.excludesFile=${import_node_os.devNull}`,
    "-c",
    `core.attributesFile=${import_node_os.devNull}`,
    "-c",
    "protocol.allow=never"
  ];
  return {
    scratch,
    run: (args, input, extraEnv = {}) => {
      try {
        return (0, import_node_child_process.execFileSync)(gitBinary, [...hardening, ...args], {
          cwd: scratch,
          env: { ...env, ...extraEnv },
          input,
          stdio: "pipe",
          timeout: 3e4,
          maxBuffer: 64 * 1024 * 1024,
          windowsHide: true
        });
      } catch {
        throw new Error("config_center_runtime_git_operation_failed");
      }
    }
  };
}
function treeEntries(context, gitArgs, commit) {
  return context.run([...gitArgs, "ls-tree", "-r", "-z", "--full-tree", commit]).toString("utf8").split("\0").filter(Boolean).map((record) => {
    const match = /^(\d{6}) (blob|commit) ([a-f0-9]{40})\t([\s\S]+)$/.exec(record);
    if (!match) throw new Error("config_center_runtime_invalid_git_tree");
    return { mode: match[1], type: match[2], oid: match[3], path: match[4] };
  });
}
function blob(context, gitArgs, entry) {
  if (entry.type !== "blob" || entry.mode !== "100644") throw new Error("config_center_runtime_non_plain_blob");
  return context.run([...gitArgs, "cat-file", "blob", entry.oid]);
}
function sourceContracts(entries) {
  const contracts = configCenterRuntimeContractsFromEntries(entries);
  if (contracts.modelSpecRoutingSha256 !== canonicalJsonSha256(modelSpecRoutingSchema) || contracts.modelSpecsIndexSha256 !== canonicalJsonSha256(modelSpecsIndexSchema)) {
    throw new Error("config_center_runtime_source_schema_incompatible");
  }
  return contracts;
}
function validateSnapshot(context, name, entries) {
  const dir = (0, import_node_path2.join)(context.scratch, name);
  (0, import_node_fs2.mkdirSync)(dir);
  try {
    for (const entry of entries) {
      if (entry.path !== CONFIG_CENTER_RUNTIME_MARKER && !isConfigCenterRuntimePath(entry.path)) {
        throw new Error("config_center_runtime_snapshot_path_rejected");
      }
      const path = (0, import_node_path2.join)(dir, ...entry.path.split("/"));
      (0, import_node_fs2.mkdirSync)((0, import_node_path2.dirname)(path), { recursive: true });
      (0, import_node_fs2.writeFileSync)(path, entry.bytes, { flag: "wx", mode: 420 });
    }
    return validateConfigCenterRuntimeDirectory(dir);
  } finally {
    (0, import_node_fs2.rmSync)(dir, { recursive: true, force: true });
  }
}
function assertPlainBareTree(path) {
  for (const entry of (0, import_node_fs2.readdirSync)(path, { withFileTypes: true })) {
    const target = (0, import_node_path2.join)(path, entry.name);
    if (entry.isSymbolicLink() || !entry.isDirectory() && !entry.isFile()) {
      throw new Error("config_center_runtime_bare_repository_not_plain");
    }
    if (entry.isDirectory()) assertPlainBareTree(target);
    else if ((0, import_node_fs2.lstatSync)(target).nlink !== 1) throw new Error("config_center_runtime_bare_repository_not_plain");
  }
}
function inspectRuntimeHistory(context, runtimeDir, branch) {
  assertPlainBareTree(runtimeDir);
  if ((0, import_node_fs2.existsSync)((0, import_node_path2.join)(runtimeDir, "objects", "info", "alternates")) || (0, import_node_fs2.existsSync)((0, import_node_path2.join)(runtimeDir, "shallow")) || (0, import_node_fs2.existsSync)((0, import_node_path2.join)(runtimeDir, "info", "grafts"))) throw new Error("config_center_runtime_external_history_rejected");
  const gitArgs = [`--git-dir=${runtimeDir}`, "-c", "core.bare=true"];
  if (context.run([...gitArgs, "rev-parse", "--is-bare-repository"]).toString("utf8").trim() !== "true" || context.run([...gitArgs, "rev-parse", "--show-object-format"]).toString("utf8").trim() !== "sha1" || context.run([...gitArgs, "symbolic-ref", "HEAD"]).toString("utf8").trim() !== `refs/heads/${branch}`) {
    throw new Error("config_center_runtime_output_not_independent_bare");
  }
  const refs = context.run([...gitArgs, "for-each-ref", "--format=%(refname) %(objectname)"]).toString("utf8").trim();
  const refParts = refs ? refs.split(" ") : [];
  if (refs && (refParts.length !== 2 || refParts[0] !== `refs/heads/${branch}` || !SHA1.test(refParts[1]))) {
    throw new Error("config_center_runtime_unexpected_reference");
  }
  const head = refs ? refs.slice(refs.lastIndexOf(" ") + 1) : null;
  const allObjects = context.run([...gitArgs, "cat-file", "--batch-all-objects", "--batch-check=%(objectname)"]).toString("utf8").trim().split("\n").filter(Boolean);
  const reachable = head ? context.run([...gitArgs, "rev-list", "--objects", head, "--"]).toString("utf8").trim().split("\n").filter(Boolean).map((line) => line.split(" ")[0]) : [];
  const reachableSet = new Set(reachable);
  if (allObjects.some((oid) => !SHA1.test(oid) || !reachableSet.has(oid)) || allObjects.length !== reachableSet.size) {
    throw new Error("config_center_runtime_unreachable_history_rejected");
  }
  if (!head) return { head: null, manifest: null };
  const commits = context.run([...gitArgs, "rev-list", "--parents", head]).toString("utf8").trim().split("\n");
  let latest = null, child = null;
  for (const [index, record] of commits.entries()) {
    const parts = record.split(" ");
    if (parts.length > 2 || parts.some((oid) => !SHA1.test(oid))) throw new Error("config_center_runtime_main_ancestry_rejected");
    const entries = treeEntries(context, gitArgs, parts[0]).map((entry) => {
      if (entry.path !== CONFIG_CENTER_RUNTIME_MARKER && !isConfigCenterRuntimePath(entry.path)) {
        throw new Error("config_center_runtime_main_ancestry_rejected");
      }
      return { path: entry.path, bytes: blob(context, gitArgs, entry) };
    });
    const manifest = validateSnapshot(context, `history-${index}`, entries);
    if (child && (manifest.dataVersion >= child.dataVersion || manifest.payloadDigest === child.payloadDigest)) {
      throw new Error("config_center_runtime_redundant_or_non_monotonic_history");
    }
    latest ??= manifest;
    child = manifest;
  }
  return { head, manifest: latest };
}
function publishConfigCenterRuntime(options) {
  if (!SHA1.test(options.sourceCommit)) throw new Error("config_center_runtime_source_commit_must_be_fixed");
  const branch = options.runtimeBranch ?? CONFIG_CENTER_RUNTIME_BRANCH;
  assertBranch(branch);
  const sourceDir = plainDirectory((0, import_node_path2.resolve)(options.sourceRepoDir));
  const sourceGitEntry = (0, import_node_fs2.lstatSync)((0, import_node_path2.join)(sourceDir, ".git"));
  if (sourceGitEntry.isSymbolicLink() || !sourceGitEntry.isDirectory() && !sourceGitEntry.isFile()) {
    throw new Error("config_center_runtime_source_not_git_worktree");
  }
  const outputRequested = (0, import_node_path2.resolve)(options.runtimeRepoDir);
  const outputExists = (0, import_node_fs2.existsSync)(outputRequested);
  const outputDir = outputExists ? plainDirectory(outputRequested) : (0, import_node_path2.join)(plainDirectory((0, import_node_path2.dirname)(outputRequested)), (0, import_node_path2.basename)(outputRequested));
  if (overlaps(sourceDir, outputDir)) throw new Error("config_center_runtime_output_overlaps_source");
  const dryRun = options.dryRun !== false;
  const context = createGitContext(options.gitBinary ?? "git");
  try {
    const sourceGit = ["-C", sourceDir];
    const commonDir = plainDirectory(context.run([...sourceGit, "rev-parse", "--path-format=absolute", "--git-common-dir"]).toString("utf8").trim());
    if (overlaps(commonDir, outputDir)) throw new Error("config_center_runtime_output_overlaps_source");
    const assertSource = () => {
      if (context.run([...sourceGit, "rev-parse", "--show-toplevel"]).toString("utf8").trim() !== sourceDir || context.run([...sourceGit, "rev-parse", "--show-object-format"]).toString("utf8").trim() !== "sha1" || context.run([...sourceGit, "rev-parse", "HEAD"]).toString("utf8").trim() !== options.sourceCommit || context.run([...sourceGit, "status", "--porcelain", "-z", "--untracked-files=all", "--ignore-submodules=all"]).length !== 0) {
        throw new Error("config_center_runtime_source_not_fixed_clean_head");
      }
    };
    assertSource();
    const sourceEntries = treeEntries(context, sourceGit, options.sourceCommit);
    const entries = sourceEntries.filter((entry) => isConfigCenterRuntimePath(entry.path)).map((entry) => ({ path: entry.path, bytes: blob(context, sourceGit, entry) }));
    const contracts = sourceContracts(entries);
    const manifest = createConfigCenterRuntimeManifest(entries, contracts);
    const marker = { path: CONFIG_CENTER_RUNTIME_MARKER, bytes: Buffer.from(`${JSON.stringify(manifest)}
`) };
    validateSnapshot(context, "candidate", [...entries, marker]);
    const previous = outputExists ? inspectRuntimeHistory(context, outputDir, branch) : { head: null, manifest: null };
    const changed = previous.manifest?.payloadDigest !== manifest.payloadDigest;
    if (changed && previous.manifest && manifest.dataVersion <= previous.manifest.dataVersion) {
      throw new Error("config_center_runtime_changed_payload_requires_new_data_version");
    }
    const result = {
      changed,
      dryRun,
      sourceCommit: options.sourceCommit,
      runtimeCommit: previous.head,
      payloadDigest: manifest.payloadDigest,
      dataVersion: manifest.dataVersion,
      fileCount: entries.length,
      validationBoundary: "runtime-payload-and-client-contract-only"
    };
    assertSource();
    if (!changed || dryRun) return result;
    const identity = options.commitIdentity;
    if (!identity || !identity.name.trim() || identity.name.length > 200 || /[\r\n\0<>]/.test(identity.name) || !/^[^@\s<>]+@[^@\s<>]+$/.test(identity.email) || identity.email.length > 254) {
      throw new Error("config_center_runtime_explicit_commit_identity_required");
    }
    const timestamp = context.run([...sourceGit, "show", "-s", "--format=%ct", options.sourceCommit]).toString("utf8").trim();
    if (!/^\d{1,12}$/.test(timestamp)) throw new Error("config_center_runtime_source_timestamp_invalid");
    if (!outputExists) {
      (0, import_node_fs2.mkdirSync)(outputDir, { mode: 448 });
      context.run(["init", "--bare", "--object-format=sha1", `--initial-branch=${branch}`, outputDir]);
    }
    const runtimeGit = [`--git-dir=${outputDir}`, "-c", "core.bare=true"];
    const indexEnv = { GIT_INDEX_FILE: (0, import_node_path2.join)(context.scratch, "runtime.index") };
    const indexEntries = [...entries, marker].map((entry) => {
      const oid = context.run([...runtimeGit, "hash-object", "-w", "--stdin"], entry.bytes).toString("utf8").trim();
      if (!SHA1.test(oid)) throw new Error("config_center_runtime_blob_write_failed");
      return `100644 ${oid}	${entry.path}\0`;
    }).join("");
    context.run([...runtimeGit, "update-index", "-z", "--index-info"], indexEntries, indexEnv);
    const tree = context.run([...runtimeGit, "write-tree"], void 0, indexEnv).toString("utf8").trim();
    if (!SHA1.test(tree)) throw new Error("config_center_runtime_tree_write_failed");
    const message = `\u53D1\u5E03\u914D\u7F6E\u4E2D\u5FC3\u8FD0\u884C\u6570\u636E ${manifest.dataVersion}

Source-Commit: ${options.sourceCommit}
Payload-SHA256: ${manifest.payloadDigest}
`;
    const commit = context.run([...runtimeGit, "commit-tree", tree, ...previous.head ? ["-p", previous.head] : []], message, {
      GIT_AUTHOR_NAME: identity.name,
      GIT_AUTHOR_EMAIL: identity.email,
      GIT_COMMITTER_NAME: identity.name,
      GIT_COMMITTER_EMAIL: identity.email,
      GIT_AUTHOR_DATE: `@${timestamp} +0000`,
      GIT_COMMITTER_DATE: `@${timestamp} +0000`
    }).toString("utf8").trim();
    if (!SHA1.test(commit)) throw new Error("config_center_runtime_commit_write_failed");
    assertSource();
    context.run([...runtimeGit, "update-ref", "--no-deref", `refs/heads/${branch}`, commit, previous.head ?? "0".repeat(40)]);
    return { ...result, runtimeCommit: commit };
  } finally {
    (0, import_node_fs2.rmSync)(context.scratch, { recursive: true, force: true });
  }
}

// scripts/sync/config-center-runtime-cli.ts
var USAGE = `\u914D\u7F6E\u4E2D\u5FC3\u7EAF\u8FD0\u884C\u6570\u636E\u6D3E\u751F\uFF08\u9ED8\u8BA4 dry-run\uFF0C\u4E0D\u6267\u884C\u7F51\u7EDC push\uFF09

\u7528\u6CD5\uFF1A
  tsx scripts/sync/publish-config-center-runtime.ts --source <\u5E72\u51C0\u5F00\u53D1\u4ED3\u5E93> --source-commit <\u56FA\u5B9ASHA1> --output <\u72EC\u7ACBbare\u4ED3\u5E93>
  \u8FFD\u52A0 --apply --author-name <\u8EAB\u4EFD> --author-email <\u90AE\u7BB1> \u624D\u5199\u672C\u5730 runtime \u63D0\u4EA4\u3002

\u53EF\u9009\uFF1A--branch <\u8FD0\u884C\u53D1\u5E03\u5206\u652F>\u3001--git-binary <\u53D7\u5BA1Git\u7A0B\u5E8F>\u3001--dry-run\u3002
\u524D\u7F6E\uFF1A\u5F00\u53D1 main \u5DF2\u7ECF\u53D7\u5BA1\u4E0A\u6E38 CI \u5B8C\u6574\u6821\u9A8C\u3002\u672C\u547D\u4EE4\u4EC5\u6821\u9A8C\u8FD0\u884C payload \u4E0E\u5BA2\u6237\u7AEF\u5951\u7EA6\uFF0C
\u4E0D\u4F1A\u6267\u884C\u6765\u6E90\u4ED3\u5E93\u7684\u811A\u672C\uFF0C\u4E5F\u4E0D\u4F1A\u628A\u672C\u5730\u6D3E\u751F\u6210\u529F\u79F0\u4F5C\u5B8C\u6574 main \u6821\u9A8C\u6216\u8FDC\u7AEF\u5DF2\u53D1\u5E03\u3002
`;
function runConfigCenterRuntimePublisher(args) {
  const values = /* @__PURE__ */ new Map();
  let apply = false, explicitDryRun = false;
  const valueFlags = /* @__PURE__ */ new Set(["--source", "--source-commit", "--output", "--branch", "--git-binary", "--author-name", "--author-email"]);
  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (arg === "--help" || arg === "-h") {
      console.log(USAGE);
      return;
    }
    if (arg === "--apply") {
      if (apply) throw new Error("config_center_runtime_duplicate_option");
      apply = true;
      continue;
    }
    if (arg === "--dry-run") {
      if (explicitDryRun) throw new Error("config_center_runtime_duplicate_option");
      explicitDryRun = true;
      continue;
    }
    if (!valueFlags.has(arg) || values.has(arg) || !args[index + 1] || args[index + 1].startsWith("--")) {
      throw new Error("config_center_runtime_invalid_option");
    }
    values.set(arg, args[++index]);
  }
  if (apply && explicitDryRun) throw new Error("config_center_runtime_conflicting_mode");
  for (const required of ["--source", "--source-commit", "--output"]) {
    if (!values.has(required)) throw new Error("config_center_runtime_required_option_missing");
  }
  const name = values.get("--author-name"), email = values.get("--author-email");
  if (name === void 0 !== (email === void 0)) throw new Error("config_center_runtime_commit_identity_incomplete");
  const result = publishConfigCenterRuntime({
    sourceRepoDir: values.get("--source"),
    sourceCommit: values.get("--source-commit"),
    runtimeRepoDir: values.get("--output"),
    runtimeBranch: values.get("--branch"),
    gitBinary: values.get("--git-binary"),
    dryRun: !apply,
    ...name !== void 0 && email !== void 0 ? { commitIdentity: { name, email } } : {}
  });
  console.log(JSON.stringify(result));
  console.log("\u4EC5\u672C\u5730\u8FD0\u884C\u6570\u636E/\u5951\u7EA6\u6838\u9A8C\uFF1B\u672A\u6267\u884C\u6765\u6E90\u811A\u672C\uFF0C\u672A\u9A8C\u8BC1\u5B8C\u6574\u5F00\u53D1 main CI\uFF0C\u672A\u63A8\u9001\u8FDC\u7AEF\u3002");
}
function configCenterRuntimePublisherMain(args) {
  try {
    runConfigCenterRuntimePublisher(args);
  } catch (error) {
    const message = error instanceof Error && /^config_center_runtime_[a-z_]+$/.test(error.message) ? error.message : "config_center_runtime_publish_failed";
    console.error(message);
    process.exitCode = 1;
  }
}

// scripts/sync/config-center-runtime-standalone-entry.ts
if (typeof require !== "undefined" && typeof module !== "undefined" && require.main === module) {
  configCenterRuntimePublisherMain(process.argv.slice(2));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runConfigCenterRuntimePublisher
});
