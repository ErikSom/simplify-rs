let simplify_wasm_factory;!function(){const __exports={};let script_src,wasm;"undefined"!=typeof document&&null!==document.currentScript&&(script_src=new URL(document.currentScript.src,location.href).toString());const heap=new Array(128).fill(void 0);function getObject(idx){return heap[idx]}heap.push(void 0,null,!0,!1);let heap_next=heap.length;function takeObject(idx){const ret=getObject(idx);return function(idx){idx<132||(heap[idx]=heap_next,heap_next=idx)}(idx),ret}function isLikeNone(x){return null==x}let cachedFloat64Memory0=null;let cachedInt32Memory0=null;function getInt32Memory0(){return null!==cachedInt32Memory0&&0!==cachedInt32Memory0.byteLength||(cachedInt32Memory0=new Int32Array(wasm.memory.buffer)),cachedInt32Memory0}function addHeapObject(obj){heap_next===heap.length&&heap.push(heap.length+1);const idx=heap_next;return heap_next=heap[idx],heap[idx]=obj,idx}let WASM_VECTOR_LEN=0,cachedUint8Memory0=null;function getUint8Memory0(){return null!==cachedUint8Memory0&&0!==cachedUint8Memory0.byteLength||(cachedUint8Memory0=new Uint8Array(wasm.memory.buffer)),cachedUint8Memory0}const cachedTextEncoder="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},encodeString="function"==typeof cachedTextEncoder.encodeInto?function(arg,view){return cachedTextEncoder.encodeInto(arg,view)}:function(arg,view){const buf=cachedTextEncoder.encode(arg);return view.set(buf),{read:arg.length,written:buf.length}};function passStringToWasm0(arg,malloc,realloc){if(void 0===realloc){const buf=cachedTextEncoder.encode(arg),ptr=malloc(buf.length,1)>>>0;return getUint8Memory0().subarray(ptr,ptr+buf.length).set(buf),WASM_VECTOR_LEN=buf.length,ptr}let len=arg.length,ptr=malloc(len,1)>>>0;const mem=getUint8Memory0();let offset=0;for(;offset<len;offset++){const code=arg.charCodeAt(offset);if(code>127)break;mem[ptr+offset]=code}if(offset!==len){0!==offset&&(arg=arg.slice(offset)),ptr=realloc(ptr,len,len=offset+3*arg.length,1)>>>0;const view=getUint8Memory0().subarray(ptr+offset,ptr+len);offset+=encodeString(arg,view).written,ptr=realloc(ptr,len,offset,1)>>>0}return WASM_VECTOR_LEN=offset,ptr}const cachedTextDecoder="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};function getStringFromWasm0(ptr,len){return ptr>>>=0,cachedTextDecoder.decode(getUint8Memory0().subarray(ptr,ptr+len))}function debugString(val){const type=typeof val;if("number"==type||"boolean"==type||null==val)return`${val}`;if("string"==type)return`"${val}"`;if("symbol"==type){const description=val.description;return null==description?"Symbol":`Symbol(${description})`}if("function"==type){const name=val.name;return"string"==typeof name&&name.length>0?`Function(${name})`:"Function"}if(Array.isArray(val)){const length=val.length;let debug="[";length>0&&(debug+=debugString(val[0]));for(let i=1;i<length;i++)debug+=", "+debugString(val[i]);return debug+="]",debug}const builtInMatches=/\[object ([^\]]+)\]/.exec(toString.call(val));let className;if(!(builtInMatches.length>1))return toString.call(val);if(className=builtInMatches[1],"Object"==className)try{return"Object("+JSON.stringify(val)+")"}catch(_){return"Object"}return val instanceof Error?`${val.name}: ${val.message}\n${val.stack}`:className}"undefined"!=typeof TextDecoder&&cachedTextDecoder.decode();let stack_pointer=128;function handleError(f,args){try{return f.apply(this,args)}catch(e){wasm.__wbindgen_exn_store(addHeapObject(e))}}__exports.simplify_js=function(points_js,tolerance,auto_scale_for_precision){try{return takeObject(wasm.simplify_js(function(obj){if(1==stack_pointer)throw new Error("out of js stack");return heap[--stack_pointer]=obj,stack_pointer}(points_js),tolerance,auto_scale_for_precision))}finally{heap[stack_pointer++]=void 0}};const PointFinalization="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((ptr=>wasm.__wbg_point_free(ptr>>>0)));function __wbg_get_imports(){const imports={wbg:{}};return imports.wbg.__wbindgen_object_drop_ref=function(arg0){takeObject(arg0)},imports.wbg.__wbindgen_is_object=function(arg0){const val=getObject(arg0);return"object"==typeof val&&null!==val},imports.wbg.__wbg_getwithrefkey_15c62c2b8546208d=function(arg0,arg1){return addHeapObject(getObject(arg0)[getObject(arg1)])},imports.wbg.__wbindgen_is_undefined=function(arg0){return void 0===getObject(arg0)},imports.wbg.__wbindgen_in=function(arg0,arg1){return getObject(arg0)in getObject(arg1)},imports.wbg.__wbindgen_number_get=function(arg0,arg1){const obj=getObject(arg1),ret="number"==typeof obj?obj:void 0;(null!==cachedFloat64Memory0&&0!==cachedFloat64Memory0.byteLength||(cachedFloat64Memory0=new Float64Array(wasm.memory.buffer)),cachedFloat64Memory0)[arg0/8+1]=isLikeNone(ret)?0:ret,getInt32Memory0()[arg0/4+0]=!isLikeNone(ret)},imports.wbg.__wbindgen_object_clone_ref=function(arg0){return addHeapObject(getObject(arg0))},imports.wbg.__wbg_isArray_2ab64d95e09ea0ae=function(arg0){return Array.isArray(getObject(arg0))},imports.wbg.__wbg_length_cd7af8117672b8b8=function(arg0){return getObject(arg0).length},imports.wbg.__wbg_get_bd8e338fbd5f5cc8=function(arg0,arg1){return addHeapObject(getObject(arg0)[arg1>>>0])},imports.wbg.__wbg_iterator_2cee6dadfd956dfa=function(){return addHeapObject(Symbol.iterator)},imports.wbg.__wbg_get_e3c254076557e348=function(){return handleError((function(arg0,arg1){return addHeapObject(Reflect.get(getObject(arg0),getObject(arg1)))}),arguments)},imports.wbg.__wbindgen_is_function=function(arg0){return"function"==typeof getObject(arg0)},imports.wbg.__wbg_call_27c0f87801dedf93=function(){return handleError((function(arg0,arg1){return addHeapObject(getObject(arg0).call(getObject(arg1)))}),arguments)},imports.wbg.__wbg_next_40fc327bfc8770e6=function(arg0){return addHeapObject(getObject(arg0).next)},imports.wbg.__wbg_next_196c84450b364254=function(){return handleError((function(arg0){return addHeapObject(getObject(arg0).next())}),arguments)},imports.wbg.__wbg_done_298b57d23c0fc80c=function(arg0){return getObject(arg0).done},imports.wbg.__wbg_value_d93c65011f51a456=function(arg0){return addHeapObject(getObject(arg0).value)},imports.wbg.__wbg_new_16b304a2cfa7ff4a=function(){return addHeapObject(new Array)},imports.wbg.__wbg_new_72fb9a18b5ae2624=function(){return addHeapObject(new Object)},imports.wbg.__wbindgen_number_new=function(arg0){return addHeapObject(arg0)},imports.wbg.__wbg_set_20cbc34131e76824=function(arg0,arg1,arg2){getObject(arg0)[takeObject(arg1)]=takeObject(arg2)},imports.wbg.__wbg_set_d4638f722068f043=function(arg0,arg1,arg2){getObject(arg0)[arg1>>>0]=takeObject(arg2)},imports.wbg.__wbg_length_c20a40f15020d68a=function(arg0){return getObject(arg0).length},imports.wbg.__wbindgen_memory=function(){return addHeapObject(wasm.memory)},imports.wbg.__wbg_buffer_12d079cc21e14bdb=function(arg0){return addHeapObject(getObject(arg0).buffer)},imports.wbg.__wbg_new_63b92bc8671ed464=function(arg0){return addHeapObject(new Uint8Array(getObject(arg0)))},imports.wbg.__wbg_set_a47bac70306a19a7=function(arg0,arg1,arg2){getObject(arg0).set(getObject(arg1),arg2>>>0)},imports.wbg.__wbindgen_jsval_loose_eq=function(arg0,arg1){return getObject(arg0)==getObject(arg1)},imports.wbg.__wbindgen_boolean_get=function(arg0){const v=getObject(arg0);return"boolean"==typeof v?v?1:0:2},imports.wbg.__wbindgen_string_get=function(arg0,arg1){const obj=getObject(arg1),ret="string"==typeof obj?obj:void 0;var ptr1=isLikeNone(ret)?0:passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),len1=WASM_VECTOR_LEN;getInt32Memory0()[arg0/4+1]=len1,getInt32Memory0()[arg0/4+0]=ptr1},imports.wbg.__wbg_instanceof_Uint8Array_2b3bbecd033d19f6=function(arg0){let result;try{result=getObject(arg0)instanceof Uint8Array}catch(_){result=!1}return result},imports.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2=function(arg0){let result;try{result=getObject(arg0)instanceof ArrayBuffer}catch(_){result=!1}return result},imports.wbg.__wbindgen_error_new=function(arg0,arg1){return addHeapObject(new Error(getStringFromWasm0(arg0,arg1)))},imports.wbg.__wbindgen_debug_string=function(arg0,arg1){const ptr1=passStringToWasm0(debugString(getObject(arg1)),wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),len1=WASM_VECTOR_LEN;getInt32Memory0()[arg0/4+1]=len1,getInt32Memory0()[arg0/4+0]=ptr1},imports.wbg.__wbindgen_string_new=function(arg0,arg1){return addHeapObject(getStringFromWasm0(arg0,arg1))},imports.wbg.__wbindgen_throw=function(arg0,arg1){throw new Error(getStringFromWasm0(arg0,arg1))},imports}function __wbg_finalize_init(instance,module){return wasm=instance.exports,__wbg_init.__wbindgen_wasm_module=module,cachedFloat64Memory0=null,cachedInt32Memory0=null,cachedUint8Memory0=null,wasm}async function __wbg_init(input){if(void 0!==wasm)return wasm;void 0===input&&void 0!==script_src&&(input=script_src.replace(/\.js$/,"_bg.wasm"));const imports=__wbg_get_imports();("string"==typeof input||"function"==typeof Request&&input instanceof Request||"function"==typeof URL&&input instanceof URL)&&(input=fetch(input));const{instance:instance,module:module}=await async function(module,imports){if("function"==typeof Response&&module instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(module,imports)}catch(e){if("application/wasm"==module.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const bytes=await module.arrayBuffer();return await WebAssembly.instantiate(bytes,imports)}{const instance=await WebAssembly.instantiate(module,imports);return instance instanceof WebAssembly.Instance?{instance:instance,module:module}:instance}}(await input,imports);return __wbg_finalize_init(instance,module)}__exports.Point=class{__destroy_into_raw(){const ptr=this.__wbg_ptr;return this.__wbg_ptr=0,PointFinalization.unregister(this),ptr}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_point_free(ptr)}get x(){return wasm.__wbg_get_point_x(this.__wbg_ptr)}set x(arg0){wasm.__wbg_set_point_x(this.__wbg_ptr,arg0)}get y(){return wasm.__wbg_get_point_y(this.__wbg_ptr)}set y(arg0){wasm.__wbg_set_point_y(this.__wbg_ptr,arg0)}constructor(x,y){const ret=wasm.point_new(x,y);return this.__wbg_ptr=ret>>>0,this}},simplify_wasm_factory=Object.assign(__wbg_init,{initSync:function(module){if(void 0!==wasm)return wasm;const imports=__wbg_get_imports();return module instanceof WebAssembly.Module||(module=new WebAssembly.Module(module)),__wbg_finalize_init(new WebAssembly.Instance(module,imports),module)}},__exports)}();