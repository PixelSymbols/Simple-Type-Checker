const Types = new Map<string, Function>;

Types.set("int", (x: string | number):boolean => typeof x=== 'number' && !Number.isNaN(x));
Types.set("object",(x: object):boolean => typeof x === 'object' && !Array.isArray(x) && x !== null && !(x instanceof Map));
Types.set("map",(x:object):boolean => x instanceof Map);
Types.set("array",(x:object):boolean => Array.isArray(x));
Types.set("number", (x: string | number):boolean => {
	const l = !Types.get("array");
	if(l===undefined) return false;
	return /^-?\d+$/.test(`${x}`) && l(x);
});
Types.set("char", (x: string):boolean => typeof x==='string' && x?.length===1);
Types.set("string",(x:string):boolean => typeof x==='string');
Types.set("symbol",(x:string):boolean => typeof x==='symbol');
Types.set("null",(x:string):boolean => x===null);

Types.set("ENG",(x:string):boolean=>/^[a-zA-Z]+$/.test(x) && typeof x==='string');
Types.set("symbols",(x:string):boolean=>/^[ -\/:-@\[-\`{-~]+$/.test(x) && typeof x==='string');


const find:Function = (x:any):string[] => {
	const o:string[] = new Array();
	for(const [key,func] of Types){
		if(func(x)===true) o.push(key);
	}
	return o;
}
const is = Object.fromEntries(Types);

export default {find,is,Types};