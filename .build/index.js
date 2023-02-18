"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var type_checker_exports = {};
__export(type_checker_exports, {
  default: () => type_checker_default
});
module.exports = __toCommonJS(type_checker_exports);
const Types = /* @__PURE__ */ new Map();
Types.set("int", (x) => typeof x === "number" && !Number.isNaN(x));
Types.set("object", (x) => typeof x === "object" && !Array.isArray(x) && x !== null && !(x instanceof Map));
Types.set("map", (x) => x instanceof Map);
Types.set("array", (x) => Array.isArray(x));
Types.set("number", (x) => {
  const l = !Types.get("array");
  if (l === void 0)
    return false;
  return /^-?\d+$/.test(`${x}`) && l(x);
});
Types.set("char", (x) => typeof x === "string" && (x == null ? void 0 : x.length) === 1);
Types.set("string", (x) => typeof x === "string");
Types.set("symbol", (x) => typeof x === "symbol");
Types.set("null", (x) => x === null);
Types.set("ENG", (x) => /^[a-zA-Z]+$/.test(x) && typeof x === "string");
Types.set("symbols", (x) => /^[ -\/:-@\[-\`{-~]+$/.test(x) && typeof x === "string");
const find = (x) => {
  const o = new Array();
  for (const [key, func] of Types) {
    if (func(x) === true)
      o.push(key);
  }
  return o;
};
const is = Object.fromEntries(Types);
var type_checker_default = { find, is, Types };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=index.js.map
