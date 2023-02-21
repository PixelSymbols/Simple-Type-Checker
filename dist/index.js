const Types = new Map;
Types.set("int", (x) => typeof x === 'number' && !Number.isNaN(x));
Types.set("object", (x) => typeof x === 'object' && !Array.isArray(x) && x !== null && !(x instanceof Map));
Types.set("map", (x) => x instanceof Map);
Types.set("array", (x) => Array.isArray(x));
Types.set("number", (x) => {
    const l = Types.get("array");
    if (l === undefined)
        return false;
    return /^-?\d+$/.test(`${x}`) && !l(x);
});
Types.set("char", (x) => typeof x === 'string' && x?.length === 1);
Types.set("string", (x) => typeof x === 'string');
Types.set("symbol", (x) => typeof x === 'symbol');
Types.set("null", (x) => x === null);
Types.set("boolean", (x) => typeof x === 'boolean');
Types.set("ENG", (x) => /^[a-zA-Z]+$/.test(x) && typeof x === 'string');
Types.set("symbols", (x) => /^[ -\/:-@\[-\`{-~]+$/.test(x) && typeof x === 'string');
const find = (x) => {
    const o = new Array();
    for (const [key, func] of Types) {
        if (func(x) === true)
            o.push(key);
    }
    return o;
};
const is = Object.fromEntries(Types);
export default { find, is, Types };
//# sourceMappingURL=index.js.map