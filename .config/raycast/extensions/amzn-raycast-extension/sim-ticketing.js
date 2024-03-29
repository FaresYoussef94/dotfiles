"use strict";var ea=Object.create;var je=Object.defineProperty;var ta=Object.getOwnPropertyDescriptor;var ra=Object.getOwnPropertyNames;var na=Object.getPrototypeOf,aa=Object.prototype.hasOwnProperty;var ia=(t,e,r)=>e in t?je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Y=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),oa=(t,e)=>{for(var r in e)je(t,r,{get:e[r],enumerable:!0})},dr=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of ra(e))!aa.call(t,a)&&a!==r&&je(t,a,{get:()=>e[a],enumerable:!(n=ta(e,a))||n.enumerable});return t};var ee=(t,e,r)=>(r=t!=null?ea(na(t)):{},dr(e||!t||!t.__esModule?je(r,"default",{value:t,enumerable:!0}):r,t)),sa=t=>dr(je({},"__esModule",{value:!0}),t);var Et=(t,e,r)=>(ia(t,typeof e!="symbol"?e+"":e,r),r);var yr=Y((we,gr)=>{"use strict";var At=require("crypto");we=gr.exports=Ge;function Ge(t,e){return e=fr(t,e),ca(t,e)}we.sha1=function(t){return Ge(t)};we.keys=function(t){return Ge(t,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})};we.MD5=function(t){return Ge(t,{algorithm:"md5",encoding:"hex"})};we.keysMD5=function(t){return Ge(t,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var Ce=At.getHashes?At.getHashes().slice():["sha1","md5"];Ce.push("passthrough");var pr=["buffer","hex","binary","base64"];function fr(t,e){e=e||{};var r={};if(r.algorithm=e.algorithm||"sha1",r.encoding=e.encoding||"hex",r.excludeValues=!!e.excludeValues,r.algorithm=r.algorithm.toLowerCase(),r.encoding=r.encoding.toLowerCase(),r.ignoreUnknown=e.ignoreUnknown===!0,r.respectType=e.respectType!==!1,r.respectFunctionNames=e.respectFunctionNames!==!1,r.respectFunctionProperties=e.respectFunctionProperties!==!1,r.unorderedArrays=e.unorderedArrays===!0,r.unorderedSets=e.unorderedSets!==!1,r.unorderedObjects=e.unorderedObjects!==!1,r.replacer=e.replacer||void 0,r.excludeKeys=e.excludeKeys||void 0,typeof t>"u")throw new Error("Object argument required.");for(var n=0;n<Ce.length;++n)Ce[n].toLowerCase()===r.algorithm.toLowerCase()&&(r.algorithm=Ce[n]);if(Ce.indexOf(r.algorithm)===-1)throw new Error('Algorithm "'+r.algorithm+'"  not supported. supported values: '+Ce.join(", "));if(pr.indexOf(r.encoding)===-1&&r.algorithm!=="passthrough")throw new Error('Encoding "'+r.encoding+'"  not supported. supported values: '+pr.join(", "));return r}function mr(t){if(typeof t!="function")return!1;var e=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;return e.exec(Function.prototype.toString.call(t))!=null}function ca(t,e){var r;e.algorithm!=="passthrough"?r=At.createHash(e.algorithm):r=new hr,typeof r.write>"u"&&(r.write=r.update,r.end=r.update);var n=kt(e,r);if(n.dispatch(t),r.update||r.end(""),r.digest)return r.digest(e.encoding==="buffer"?void 0:e.encoding);var a=r.read();return e.encoding==="buffer"?a:a.toString(e.encoding)}we.writeToStream=function(t,e,r){return typeof r>"u"&&(r=e,e={}),e=fr(t,e),kt(e,r).dispatch(t)};function kt(t,e,r){r=r||[];var n=function(a){return e.update?e.update(a,"utf8"):e.write(a,"utf8")};return{dispatch:function(a){t.replacer&&(a=t.replacer(a));var i=typeof a;return a===null&&(i="null"),this["_"+i](a)},_object:function(a){var i=/\[object (.*)\]/i,c=Object.prototype.toString.call(a),s=i.exec(c);s?s=s[1]:s="unknown:["+c+"]",s=s.toLowerCase();var p=null;if((p=r.indexOf(a))>=0)return this.dispatch("[CIRCULAR:"+p+"]");if(r.push(a),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(a))return n("buffer:"),n(a);if(s!=="object"&&s!=="function"&&s!=="asyncfunction")if(this["_"+s])this["_"+s](a);else{if(t.ignoreUnknown)return n("["+s+"]");throw new Error('Unknown object type "'+s+'"')}else{var h=Object.keys(a);t.unorderedObjects&&(h=h.sort()),t.respectType!==!1&&!mr(a)&&h.splice(0,0,"prototype","__proto__","constructor"),t.excludeKeys&&(h=h.filter(function(E){return!t.excludeKeys(E)})),n("object:"+h.length+":");var k=this;return h.forEach(function(E){k.dispatch(E),n(":"),t.excludeValues||k.dispatch(a[E]),n(",")})}},_array:function(a,i){i=typeof i<"u"?i:t.unorderedArrays!==!1;var c=this;if(n("array:"+a.length+":"),!i||a.length<=1)return a.forEach(function(h){return c.dispatch(h)});var s=[],p=a.map(function(h){var k=new hr,E=r.slice(),$=kt(t,k,E);return $.dispatch(h),s=s.concat(E.slice(r.length)),k.read().toString()});return r=r.concat(s),p.sort(),this._array(p,!1)},_date:function(a){return n("date:"+a.toJSON())},_symbol:function(a){return n("symbol:"+a.toString())},_error:function(a){return n("error:"+a.toString())},_boolean:function(a){return n("bool:"+a.toString())},_string:function(a){n("string:"+a.length+":"),n(a.toString())},_function:function(a){n("fn:"),mr(a)?this.dispatch("[native]"):this.dispatch(a.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(a.name)),t.respectFunctionProperties&&this._object(a)},_number:function(a){return n("number:"+a.toString())},_xml:function(a){return n("xml:"+a.toString())},_null:function(){return n("Null")},_undefined:function(){return n("Undefined")},_regexp:function(a){return n("regex:"+a.toString())},_uint8array:function(a){return n("uint8array:"),this.dispatch(Array.prototype.slice.call(a))},_uint8clampedarray:function(a){return n("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(a))},_int8array:function(a){return n("int8array:"),this.dispatch(Array.prototype.slice.call(a))},_uint16array:function(a){return n("uint16array:"),this.dispatch(Array.prototype.slice.call(a))},_int16array:function(a){return n("int16array:"),this.dispatch(Array.prototype.slice.call(a))},_uint32array:function(a){return n("uint32array:"),this.dispatch(Array.prototype.slice.call(a))},_int32array:function(a){return n("int32array:"),this.dispatch(Array.prototype.slice.call(a))},_float32array:function(a){return n("float32array:"),this.dispatch(Array.prototype.slice.call(a))},_float64array:function(a){return n("float64array:"),this.dispatch(Array.prototype.slice.call(a))},_arraybuffer:function(a){return n("arraybuffer:"),this.dispatch(new Uint8Array(a))},_url:function(a){return n("url:"+a.toString(),"utf8")},_map:function(a){n("map:");var i=Array.from(a);return this._array(i,t.unorderedSets!==!1)},_set:function(a){n("set:");var i=Array.from(a);return this._array(i,t.unorderedSets!==!1)},_file:function(a){return n("file:"),this.dispatch([a.name,a.size,a.type,a.lastModfied])},_blob:function(){if(t.ignoreUnknown)return n("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return n("domwindow")},_bigint:function(a){return n("bigint:"+a.toString())},_process:function(){return n("process")},_timer:function(){return n("timer")},_pipe:function(){return n("pipe")},_tcp:function(){return n("tcp")},_udp:function(){return n("udp")},_tty:function(){return n("tty")},_statwatcher:function(){return n("statwatcher")},_securecontext:function(){return n("securecontext")},_connection:function(){return n("connection")},_zlib:function(){return n("zlib")},_context:function(){return n("context")},_nodescript:function(){return n("nodescript")},_httpparser:function(){return n("httpparser")},_dataview:function(){return n("dataview")},_signal:function(){return n("signal")},_fsevent:function(){return n("fsevent")},_tlswrap:function(){return n("tlswrap")}}}function hr(){return{buf:"",write:function(t){this.buf+=t},end:function(t){this.buf+=t},read:function(){return this.buf}}}});var Ct=Y((Rs,Or)=>{var Sa=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};Or.exports=Sa});var Ot=Y((_s,Mr)=>{var ba="2.0.0",xa=Number.MAX_SAFE_INTEGER||9007199254740991,Ea=16,Aa=256-6,ka=["major","premajor","minor","preminor","patch","prepatch","prerelease"];Mr.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:Ea,MAX_SAFE_BUILD_LENGTH:Aa,MAX_SAFE_INTEGER:xa,RELEASE_TYPES:ka,SEMVER_SPEC_VERSION:ba,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var Ur=Y((ge,Fr)=>{var{MAX_SAFE_COMPONENT_LENGTH:Mt,MAX_SAFE_BUILD_LENGTH:Ia,MAX_LENGTH:Ta}=Ot(),Ra=Ct();ge=Fr.exports={};var _a=ge.re=[],Da=ge.safeRe=[],g=ge.src=[],y=ge.t={},La=0,Ft="[a-zA-Z0-9-]",Pa=[["\\s",1],["\\d",Ta],[Ft,Ia]],$a=t=>{for(let[e,r]of Pa)t=t.split(`${e}*`).join(`${e}{0,${r}}`).split(`${e}+`).join(`${e}{1,${r}}`);return t},I=(t,e,r)=>{let n=$a(e),a=La++;Ra(t,a,e),y[t]=a,g[a]=e,_a[a]=new RegExp(e,r?"g":void 0),Da[a]=new RegExp(n,r?"g":void 0)};I("NUMERICIDENTIFIER","0|[1-9]\\d*");I("NUMERICIDENTIFIERLOOSE","\\d+");I("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${Ft}*`);I("MAINVERSION",`(${g[y.NUMERICIDENTIFIER]})\\.(${g[y.NUMERICIDENTIFIER]})\\.(${g[y.NUMERICIDENTIFIER]})`);I("MAINVERSIONLOOSE",`(${g[y.NUMERICIDENTIFIERLOOSE]})\\.(${g[y.NUMERICIDENTIFIERLOOSE]})\\.(${g[y.NUMERICIDENTIFIERLOOSE]})`);I("PRERELEASEIDENTIFIER",`(?:${g[y.NUMERICIDENTIFIER]}|${g[y.NONNUMERICIDENTIFIER]})`);I("PRERELEASEIDENTIFIERLOOSE",`(?:${g[y.NUMERICIDENTIFIERLOOSE]}|${g[y.NONNUMERICIDENTIFIER]})`);I("PRERELEASE",`(?:-(${g[y.PRERELEASEIDENTIFIER]}(?:\\.${g[y.PRERELEASEIDENTIFIER]})*))`);I("PRERELEASELOOSE",`(?:-?(${g[y.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${g[y.PRERELEASEIDENTIFIERLOOSE]})*))`);I("BUILDIDENTIFIER",`${Ft}+`);I("BUILD",`(?:\\+(${g[y.BUILDIDENTIFIER]}(?:\\.${g[y.BUILDIDENTIFIER]})*))`);I("FULLPLAIN",`v?${g[y.MAINVERSION]}${g[y.PRERELEASE]}?${g[y.BUILD]}?`);I("FULL",`^${g[y.FULLPLAIN]}$`);I("LOOSEPLAIN",`[v=\\s]*${g[y.MAINVERSIONLOOSE]}${g[y.PRERELEASELOOSE]}?${g[y.BUILD]}?`);I("LOOSE",`^${g[y.LOOSEPLAIN]}$`);I("GTLT","((?:<|>)?=?)");I("XRANGEIDENTIFIERLOOSE",`${g[y.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);I("XRANGEIDENTIFIER",`${g[y.NUMERICIDENTIFIER]}|x|X|\\*`);I("XRANGEPLAIN",`[v=\\s]*(${g[y.XRANGEIDENTIFIER]})(?:\\.(${g[y.XRANGEIDENTIFIER]})(?:\\.(${g[y.XRANGEIDENTIFIER]})(?:${g[y.PRERELEASE]})?${g[y.BUILD]}?)?)?`);I("XRANGEPLAINLOOSE",`[v=\\s]*(${g[y.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[y.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[y.XRANGEIDENTIFIERLOOSE]})(?:${g[y.PRERELEASELOOSE]})?${g[y.BUILD]}?)?)?`);I("XRANGE",`^${g[y.GTLT]}\\s*${g[y.XRANGEPLAIN]}$`);I("XRANGELOOSE",`^${g[y.GTLT]}\\s*${g[y.XRANGEPLAINLOOSE]}$`);I("COERCE",`(^|[^\\d])(\\d{1,${Mt}})(?:\\.(\\d{1,${Mt}}))?(?:\\.(\\d{1,${Mt}}))?(?:$|[^\\d])`);I("COERCERTL",g[y.COERCE],!0);I("LONETILDE","(?:~>?)");I("TILDETRIM",`(\\s*)${g[y.LONETILDE]}\\s+`,!0);ge.tildeTrimReplace="$1~";I("TILDE",`^${g[y.LONETILDE]}${g[y.XRANGEPLAIN]}$`);I("TILDELOOSE",`^${g[y.LONETILDE]}${g[y.XRANGEPLAINLOOSE]}$`);I("LONECARET","(?:\\^)");I("CARETTRIM",`(\\s*)${g[y.LONECARET]}\\s+`,!0);ge.caretTrimReplace="$1^";I("CARET",`^${g[y.LONECARET]}${g[y.XRANGEPLAIN]}$`);I("CARETLOOSE",`^${g[y.LONECARET]}${g[y.XRANGEPLAINLOOSE]}$`);I("COMPARATORLOOSE",`^${g[y.GTLT]}\\s*(${g[y.LOOSEPLAIN]})$|^$`);I("COMPARATOR",`^${g[y.GTLT]}\\s*(${g[y.FULLPLAIN]})$|^$`);I("COMPARATORTRIM",`(\\s*)${g[y.GTLT]}\\s*(${g[y.LOOSEPLAIN]}|${g[y.XRANGEPLAIN]})`,!0);ge.comparatorTrimReplace="$1$2$3";I("HYPHENRANGE",`^\\s*(${g[y.XRANGEPLAIN]})\\s+-\\s+(${g[y.XRANGEPLAIN]})\\s*$`);I("HYPHENRANGELOOSE",`^\\s*(${g[y.XRANGEPLAINLOOSE]})\\s+-\\s+(${g[y.XRANGEPLAINLOOSE]})\\s*$`);I("STAR","(<|>)?=?\\s*\\*");I("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");I("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var zr=Y((Ds,qr)=>{var Na=Object.freeze({loose:!0}),Ca=Object.freeze({}),Oa=t=>t?typeof t!="object"?Na:t:Ca;qr.exports=Oa});var Hr=Y((Ls,Br)=>{var jr=/^[0-9]+$/,Gr=(t,e)=>{let r=jr.test(t),n=jr.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},Ma=(t,e)=>Gr(e,t);Br.exports={compareIdentifiers:Gr,rcompareIdentifiers:Ma}});var Ut=Y((Ps,Jr)=>{var dt=Ct(),{MAX_LENGTH:Vr,MAX_SAFE_INTEGER:pt}=Ot(),{safeRe:Wr,t:Xr}=Ur(),Fa=zr(),{compareIdentifiers:qe}=Hr(),ne=class{constructor(e,r){if(r=Fa(r),e instanceof ne){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>Vr)throw new TypeError(`version is longer than ${Vr} characters`);dt("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=e.trim().match(r.loose?Wr[Xr.LOOSE]:Wr[Xr.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>pt||this.major<0)throw new TypeError("Invalid major version");if(this.minor>pt||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>pt||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(a=>{if(/^[0-9]+$/.test(a)){let i=+a;if(i>=0&&i<pt)return i}return a}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(dt("SemVer.compare",this.version,this.options,e),!(e instanceof ne)){if(typeof e=="string"&&e===this.version)return 0;e=new ne(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof ne||(e=new ne(e,this.options)),qe(this.major,e.major)||qe(this.minor,e.minor)||qe(this.patch,e.patch)}comparePre(e){if(e instanceof ne||(e=new ne(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],a=e.prerelease[r];if(dt("prerelease compare",r,n,a),n===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(n===void 0)return-1;if(n===a)continue;return qe(n,a)}while(++r)}compareBuild(e){e instanceof ne||(e=new ne(e,this.options));let r=0;do{let n=this.build[r],a=e.build[r];if(dt("prerelease compare",r,n,a),n===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(n===void 0)return-1;if(n===a)continue;return qe(n,a)}while(++r)}inc(e,r,n){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let a=Number(n)?1:0;if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[a];else{let i=this.prerelease.length;for(;--i>=0;)typeof this.prerelease[i]=="number"&&(this.prerelease[i]++,i=-2);if(i===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(a)}}if(r){let i=[r,a];n===!1&&(i=[r]),qe(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=i):this.prerelease=i}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Jr.exports=ne});var qt=Y(($s,Yr)=>{var Kr=Ut(),Ua=(t,e,r=!1)=>{if(t instanceof Kr)return t;try{return new Kr(t,e)}catch(n){if(!r)return null;throw n}};Yr.exports=Ua});var Zr=Y((Ns,Qr)=>{var qa=qt(),za=(t,e)=>{let r=qa(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};Qr.exports=za});var mt=Y((Cs,tn)=>{var en=Ut(),ja=(t,e,r)=>new en(t,r).compare(new en(e,r));tn.exports=ja});var nn=Y((Os,rn)=>{var Ga=mt(),Ba=(t,e,r)=>Ga(t,e,r)>0;rn.exports=Ba});var on=Y((Ms,an)=>{var Ha=mt(),Va=(t,e,r)=>Ha(t,e,r)<0;an.exports=Va});var zt=Y((Fs,sn)=>{var Wa=mt(),Xa=(t,e,r)=>Wa(t,e,r)<=0;sn.exports=Xa});var ln=Y((Us,cn)=>{var Ja=qt(),Ka=(t,e)=>{let r=Ja(t,e);return r?r.version:null};cn.exports=Ka});var qn=Y((Un,vt)=>{((t,e)=>{typeof define=="function"&&define.amd?define([],e):typeof vt=="object"&&vt.exports?vt.exports=e():t.fuzzysort=e()})(Un,t=>{"use strict";var e=(l,o)=>{if(l=="farzher")return{target:"farzher was here (^-^*)/",score:0,_indexes:[0]};if(!l||!o)return _;var d=h(l);X(o)||(o=p(o));var m=d.bitflags;return(m&o._bitflags)!==m?_:E(d,o)},r=(l,o,d)=>{if(l=="farzher")return[{target:"farzher was here (^-^*)/",score:0,_indexes:[0],obj:o?o[0]:_}];if(!l)return d&&d.all?k(l,o,d):St;var m=h(l),f=m.bitflags,w=m.containsSpace,v=d&&d.threshold||ve,u=d&&d.limit||$e,x=0,b=0,T=o.length;if(d&&d.key)for(var Z=d.key,D=0;D<T;++D){var oe=o[D],C=ie(oe,Z);if(C&&(X(C)||(C=p(C)),(f&C._bitflags)===f)){var U=E(m,C);U!==_&&(U.score<v||(U={target:U.target,_targetLower:"",_targetLowerCodes:_,_nextBeginningIndexes:_,_bitflags:0,score:U.score,_indexes:U._indexes,obj:oe},x<u?(ue.add(U),++x):(++b,U.score>ue.peek().score&&ue.replaceTop(U))))}}else if(d&&d.keys)for(var lr=d.scoreFn||F,S=d.keys,tt=S.length,D=0;D<T;++D){for(var oe=o[D],re=new Array(tt),de=0;de<tt;++de){var Z=S[de],C=ie(oe,Z);if(!C){re[de]=_;continue}X(C)||(C=p(C)),(f&C._bitflags)!==f?re[de]=_:re[de]=E(m,C)}re.obj=oe;var O=lr(re);O!==_&&(O<v||(re.score=O,x<u?(ue.add(re),++x):(++b,O>ue.peek().score&&ue.replaceTop(re))))}else for(var D=0;D<T;++D){var C=o[D];if(C&&(X(C)||(C=p(C)),(f&C._bitflags)===f)){var U=E(m,C);U!==_&&(U.score<v||(x<u?(ue.add(U),++x):(++b,U.score>ue.peek().score&&ue.replaceTop(U))))}}if(x===0)return St;for(var Ne=new Array(x),D=x-1;D>=0;--D)Ne[D]=ue.poll();return Ne.total=x+b,Ne},n=(l,o,d)=>{if(typeof o=="function")return a(l,o);if(l===_)return _;o===void 0&&(o="<b>"),d===void 0&&(d="</b>");var m="",f=0,w=!1,v=l.target,u=v.length,x=l._indexes;x=x.slice(0,x.len).sort((Z,D)=>Z-D);for(var b=0;b<u;++b){var T=v[b];if(x[f]===b){if(++f,w||(w=!0,m+=o),f===x.length){m+=T+d+v.substr(b+1);break}}else w&&(w=!1,m+=d);m+=T}return m},a=(b,o)=>{if(b===_)return _;var d=b.target,m=d.length,f=b._indexes;f=f.slice(0,f.len).sort((D,oe)=>D-oe);for(var w="",v=0,u=0,x=!1,b=[],T=0;T<m;++T){var Z=d[T];if(f[u]===T){if(++u,x||(x=!0,b.push(w),w=""),u===f.length){w+=Z,b.push(o(w,v++)),w="",b.push(d.substr(T+1));break}}else x&&(x=!1,b.push(o(w,v++)),w="");w+=Z}return b},i=l=>l._indexes.slice(0,l._indexes.len).sort((o,d)=>o-d),c=l=>{typeof l!="string"&&(l="");var o=M(l);return{target:l,_targetLower:o._lower,_targetLowerCodes:o.lowerCodes,_nextBeginningIndexes:_,_bitflags:o.bitflags,score:_,_indexes:[0],obj:_}},s=l=>{typeof l!="string"&&(l=""),l=l.trim();var o=M(l),d=[];if(o.containsSpace){var m=l.split(/\s+/);m=[...new Set(m)];for(var f=0;f<m.length;f++)if(m[f]!==""){var w=M(m[f]);d.push({lowerCodes:w.lowerCodes,_lower:m[f].toLowerCase(),containsSpace:!1})}}return{lowerCodes:o.lowerCodes,bitflags:o.bitflags,containsSpace:o.containsSpace,_lower:o._lower,spaceSearches:d}},p=l=>{if(l.length>999)return c(l);var o=te.get(l);return o!==void 0||(o=c(l),te.set(l,o)),o},h=l=>{if(l.length>999)return s(l);var o=W.get(l);return o!==void 0||(o=s(l),W.set(l,o)),o},k=(l,o,d)=>{var m=[];m.total=o.length;var f=d&&d.limit||$e;if(d&&d.key)for(var w=0;w<o.length;w++){var v=o[w],u=ie(v,d.key);if(u){X(u)||(u=p(u)),u.score=ve,u._indexes.len=0;var x=u;if(x={target:x.target,_targetLower:"",_targetLowerCodes:_,_nextBeginningIndexes:_,_bitflags:0,score:u.score,_indexes:_,obj:v},m.push(x),m.length>=f)return m}}else if(d&&d.keys)for(var w=0;w<o.length;w++){for(var v=o[w],b=new Array(d.keys.length),T=d.keys.length-1;T>=0;--T){var u=ie(v,d.keys[T]);if(!u){b[T]=_;continue}X(u)||(u=p(u)),u.score=ve,u._indexes.len=0,b[T]=u}if(b.obj=v,b.score=ve,m.push(b),m.length>=f)return m}else for(var w=0;w<o.length;w++){var u=o[w];if(u&&(X(u)||(u=p(u)),u.score=ve,u._indexes.len=0,m.push(u),m.length>=f))return m}return m},E=(l,o,d=!1)=>{if(d===!1&&l.containsSpace)return $(l,o);for(var m=l._lower,f=l.lowerCodes,w=f[0],v=o._targetLowerCodes,u=f.length,x=v.length,D=0,b=0,T=0;;){var Z=w===v[b];if(Z){if(H[T++]=b,++D,D===u)break;w=f[D]}if(++b,b>=x)return _}var D=0,oe=!1,C=0,U=o._nextBeginningIndexes;U===_&&(U=o._nextBeginningIndexes=L(o.target));var lr=b=H[0]===0?0:U[H[0]-1],S=0;if(b!==x)for(;;)if(b>=x){if(D<=0||(++S,S>200))break;--D;var tt=N[--C];b=U[tt]}else{var Z=f[D]===v[b];if(Z){if(N[C++]=b,++D,D===u){oe=!0;break}++b}else b=U[b]}var re=o._targetLower.indexOf(m,H[0]),de=~re;if(de&&!oe)for(var O=0;O<T;++O)H[O]=re+O;var Ne=!1;de&&(Ne=o._nextBeginningIndexes[re-1]===re);{if(oe)var pe=N,bt=C;else var pe=H,bt=T;for(var he=0,ur=0,O=1;O<u;++O)pe[O]-pe[O-1]!==1&&(he-=pe[O],++ur);var Zn=pe[u-1]-pe[0]-(u-1);if(he-=(12+Zn)*ur,pe[0]!==0&&(he-=pe[0]*pe[0]*.2),!oe)he*=1e3;else{for(var xt=1,O=U[0];O<x;O=U[O])++xt;xt>24&&(he*=(xt-24)*10)}de&&(he/=1+u*u*1),Ne&&(he/=1+u*u*1),he-=x-u,o.score=he;for(var O=0;O<bt;++O)o._indexes[O]=pe[O];return o._indexes.len=bt,o}},$=(l,o)=>{for(var d=new Set,m=0,f=_,w=0,v=l.spaceSearches,T=0;T<v.length;++T){var u=v[T];if(f=E(u,o),f===_)return _;m+=f.score,f._indexes[0]<w&&(m-=w-f._indexes[0]),w=f._indexes[0];for(var x=0;x<f._indexes.len;++x)d.add(f._indexes[x])}var b=E(l,o,!0);if(b!==_&&b.score>m)return b;f.score=m;var T=0;for(let Z of d)f._indexes[T++]=Z;return f._indexes.len=T,f},M=l=>{for(var o=l.length,d=l.toLowerCase(),m=[],f=0,w=!1,v=0;v<o;++v){var u=m[v]=d.charCodeAt(v);if(u===32){w=!0;continue}var x=u>=97&&u<=122?u-97:u>=48&&u<=57?26:u<=127?30:31;f|=1<<x}return{lowerCodes:m,bitflags:f,containsSpace:w,_lower:d}},j=l=>{for(var o=l.length,d=[],m=0,f=!1,w=!1,v=0;v<o;++v){var u=l.charCodeAt(v),x=u>=65&&u<=90,b=x||u>=97&&u<=122||u>=48&&u<=57,T=x&&!f||!w||!b;f=x,w=b,T&&(d[m++]=v)}return d},L=l=>{for(var o=l.length,d=j(l),m=[],f=d[0],w=0,v=0;v<o;++v)f>v?m[v]=f:(f=d[++w],m[v]=f===void 0?o:f);return m},fe=()=>{te.clear(),W.clear(),H=[],N=[]},te=new Map,W=new Map,H=[],N=[],F=l=>{for(var o=ve,d=l.length,m=0;m<d;++m){var f=l[m];if(f!==_){var w=f.score;w>o&&(o=w)}}return o===ve?_:o},ie=(l,o)=>{var d=l[o];if(d!==void 0)return d;var m=o;Array.isArray(o)||(m=o.split("."));for(var f=m.length,w=-1;l&&++w<f;)l=l[m[w]];return l},X=l=>typeof l=="object",$e=1/0,ve=-$e,St=[];St.total=0;var _=null,Qn=l=>{var o=[],d=0,m={},f=w=>{for(var v=0,u=o[v],x=1;x<d;){var b=x+1;v=x,b<d&&o[b].score<o[x].score&&(v=b),o[v-1>>1]=o[v],x=1+(v<<1)}for(var T=v-1>>1;v>0&&u.score<o[T].score;T=(v=T)-1>>1)o[v]=o[T];o[v]=u};return m.add=w=>{var v=d;o[d++]=w;for(var u=v-1>>1;v>0&&w.score<o[u].score;u=(v=u)-1>>1)o[v]=o[u];o[v]=w},m.poll=w=>{if(d!==0){var v=o[0];return o[0]=o[--d],f(),v}},m.peek=w=>{if(d!==0)return o[0]},m.replaceTop=w=>{o[0]=w,f()},m},ue=Qn();return{single:e,go:r,highlight:n,prepare:c,indexes:i,cleanup:fe}})});var Ai={};oa(Ai,{default:()=>Yn});module.exports=sa(Ai);var Rt=ee(yr(),1),be=require("react");var Sr=require("@raycast/api"),Oe=require("react");var vr=require("react");function J(t){let e=(0,vr.useRef)(t);return e.current=t,e}function la(t,e){let r=this[t];return r instanceof Date?`__raycast_cached_date__${r.toString()}`:Buffer.isBuffer(r)?`__raycast_cached_buffer__${r.toString("base64")}`:e}function ua(t,e){return typeof e=="string"&&e.startsWith("__raycast_cached_date__")?new Date(e.replace("__raycast_cached_date__","")):typeof e=="string"&&e.startsWith("__raycast_cached_buffer__")?Buffer.from(e.replace("__raycast_cached_buffer__",""),"base64"):e}var da=Symbol("cache without namespace"),wr=new Map;function It(t,e,r){let n=r?.cacheNamespace||da,a=wr.get(n)||wr.set(n,new Sr.Cache({namespace:r?.cacheNamespace})).get(n);if(!a)throw new Error("Missing cache");let i=J(t),c=J(e),s=(0,Oe.useSyncExternalStore)(a.subscribe,()=>{try{return a.get(i.current)}catch(E){console.error("Could not get Cache data:",E);return}}),p=(0,Oe.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,ua)}catch(E){return console.warn("The cached data is corrupted",E),c.current}}else return c.current},[s,c]),h=J(p),k=(0,Oe.useCallback)(E=>{let $=typeof E=="function"?E(h.current):E;if(typeof $>"u")a.set(i.current,"undefined");else{let M=JSON.stringify($,la);a.set(i.current,M)}return $},[a,i,h]);return[p,k]}var Se=require("@raycast/api"),se=require("react");var ce=require("@raycast/api"),Tt=class{toast;abortable;_abortController;constructor(e){this.abortable=e.abortable,this.toast=ce.environment.launchType===ce.LaunchType.UserInitiated?new ce.Toast(e):void 0,this.updateAbortAction()}updateAbortAction(){this.toast&&(this._abortController=this.abortable?new AbortController:void 0,this.toast.primaryAction=this.abortable?{title:"Cancel",onAction:()=>{console.warn("Aborting..."),this._abortController?.abort()}}:void 0)}updateContent(e){if(this.toast){let{title:r,style:n,message:a,secondaryAction:i}=this.toast;this.toast.title=e.title??r,this.toast.style=e.style??n,this.toast.message=e.message??a,this.abortable=e.abortable??this.abortable,this.toast.secondaryAction=e.secondaryAction??i,this.updateAbortAction()}}show(){return this.toast?this.toast.show():Promise.resolve()}hide(){return this.toast?this.toast.hide():Promise.resolve()}get abortController(){return this._abortController}},Me=async t=>{let e=new Tt(t);return await e.show(),e},br=t=>{let e=t instanceof Error?t?.stack||t?.message||"":String(t);return{title:"Copy Logs",onAction(r){r.hide(),ce.Clipboard.copy(e)}}};function xr(t,e){let r=t instanceof Error?t.message:String(t);return(0,ce.showToast)({style:ce.Toast.Style.Failure,title:e?.title??"Something went wrong",message:r,primaryAction:e?.primaryAction??br(t),secondaryAction:e?.primaryAction?br(t):void 0})}var Er=Object.prototype.hasOwnProperty;function rt(t,e){var r,n;if(t===e)return!0;if(t&&e&&(r=t.constructor)===e.constructor){if(r===Date)return t.getTime()===e.getTime();if(r===RegExp)return t.toString()===e.toString();if(r===Array){if((n=t.length)===e.length)for(;n--&&rt(t[n],e[n]););return n===-1}if(!r||typeof t=="object"){n=0;for(r in t)if(Er.call(t,r)&&++n&&!Er.call(e,r)||!(r in e)||!rt(t[r],e[r]))return!1;return Object.keys(e).length===n}}return t!==t&&e!==e}var Be=require("react");function Ar(t){let e=(0,Be.useRef)(t),r=(0,Be.useRef)(0);return rt(t,e.current)||(e.current=t,r.current+=1),(0,Be.useMemo)(()=>e.current,[r.current])}function Fe(t,e,r){let n=(0,se.useRef)(0),[a,i]=(0,se.useState)({isLoading:!0}),c=J(t),s=J(r?.abortable),p=J(e||[]),h=J(r?.onError),k=J(r?.onData),E=J(r?.onWillExecute),$=J(a.data),M=(0,se.useRef)(),j=(0,se.useCallback)((...H)=>{let N=++n.current;return s.current&&(s.current.current?.abort(),s.current.current=new AbortController),E.current?.(H),i(F=>({...F,isLoading:!0})),pa(c.current)(...H).then(F=>(N===n.current&&(k.current&&k.current(F),i({data:F,isLoading:!1})),F),F=>(F.name=="AbortError"||N===n.current&&(h.current?h.current(F):(console.error(F),Se.environment.launchType!==Se.LaunchType.Background&&xr(F,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(ie){ie.hide(),M.current?.(...p.current||[])}}})),i({error:F,isLoading:!1})),F))},[s,k,h,p,c,i,M,E]);M.current=j;let L=(0,se.useCallback)(()=>j(...p.current||[]),[j,p]),fe=(0,se.useCallback)(async(H,N)=>{let F;try{if(N?.optimisticUpdate){typeof N?.rollbackOnError!="function"&&N?.rollbackOnError!==!1&&(F=structuredClone($.current?.value));let ie=N.optimisticUpdate;i(X=>({...X,data:ie(X.data)}))}return await H}catch(ie){if(typeof N?.rollbackOnError=="function"){let X=N.rollbackOnError;i($e=>({...$e,data:X($e.data)}))}else N?.optimisticUpdate&&N?.rollbackOnError!==!1&&i(X=>({...X,data:F}));throw ie}finally{N?.shouldRevalidateAfter!==!1&&(Se.environment.launchType===Se.LaunchType.Background||Se.environment.commandMode==="menu-bar"?await L():L())}},[L,$,i]);(0,se.useEffect)(()=>{r?.execute!==!1?j(...e||[]):s.current&&s.current.current?.abort()},[Ar([e,r?.execute,j]),s]),(0,se.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let te=r?.execute!==!1?a.isLoading:!1;return{...{...a,isLoading:te},revalidate:L,mutate:fe}}function pa(t){return t===Promise.all||t===Promise.race||t===Promise.resolve||t===Promise.reject?t.bind(Promise):t}var He=Symbol();function ye(t,e,r){let{initialData:n,keepPreviousData:a,...i}=r||{},c=(0,be.useRef)(),[s,p]=It((0,Rt.default)(e||[]),He,{cacheNamespace:(0,Rt.default)(t)}),h=(0,be.useRef)(s!==He?s:n),{mutate:k,revalidate:E,...$}=Fe(t,e||[],{...i,onData(te){i.onData&&i.onData(te),c.current="promise",h.current=te,p(te)}}),M=s!==He?s:n,j=c.current==="promise"?h.current:a?s!==He?s:h.current:M,L=J(j),fe=(0,be.useCallback)(async(te,W)=>{let H;try{if(W?.optimisticUpdate){typeof W?.rollbackOnError!="function"&&W?.rollbackOnError!==!1&&(H=structuredClone(L.current));let N=W.optimisticUpdate(L.current);c.current="cache",h.current=N,p(N)}return await k(te,{shouldRevalidateAfter:W?.shouldRevalidateAfter})}catch(N){if(typeof W?.rollbackOnError=="function"){let F=W.rollbackOnError(L.current);c.current="cache",h.current=F,p(F)}else W?.optimisticUpdate&&W?.rollbackOnError!==!1&&(c.current="cache",h.current=H,p(H));throw N}},[p,k,L,h,c]);return(0,be.useEffect)(()=>{s!==He&&(c.current="cache",h.current=s)},[s]),{data:j,isLoading:$.isLoading,error:$.error,mutate:fe,revalidate:E}}var nt=require("react");var kr;(function(t){t.Required="required"})(kr||(kr={}));var Ir=require("react");var ma=10,fa=24*60*60*1e3,Hi=Math.log(2)/(ma*fa);var $r=ee(require("os"),1);var at=(t=0)=>new Promise(e=>setTimeout(e,t)),it=t=>{try{let e=JSON.parse(t);if(e&&typeof e=="object")return!0}catch{}return!1},V=t=>Array.isArray(t)?t.filter(e=>!!e):[];var Dr=require("child_process"),Lr=require("util");var ot=require("@raycast/api");function Ee(t){"@babel/helpers - typeof";return Ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ee(t)}function Q(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function G(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function K(t){G(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||Ee(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function _t(t,e){G(2,arguments);var r=K(t),n=Q(e);return isNaN(n)?new Date(NaN):(n&&r.setDate(r.getDate()+n),r)}function Dt(t,e){G(2,arguments);var r=K(t),n=Q(e);if(isNaN(n))return new Date(NaN);if(!n)return r;var a=r.getDate(),i=new Date(r.getTime());i.setMonth(r.getMonth()+n+1,0);var c=i.getDate();return a>=c?i:(r.setFullYear(i.getFullYear(),i.getMonth(),a),r)}function Lt(t,e){if(G(2,arguments),!e||Ee(e)!=="object")return new Date(NaN);var r=e.years?Q(e.years):0,n=e.months?Q(e.months):0,a=e.weeks?Q(e.weeks):0,i=e.days?Q(e.days):0,c=e.hours?Q(e.hours):0,s=e.minutes?Q(e.minutes):0,p=e.seconds?Q(e.seconds):0,h=K(t),k=n||r?Dt(h,n+r*12):h,E=i||a?_t(k,i+a*7):k,$=s+c*60,M=p+$*60,j=M*1e3,L=new Date(E.getTime()+j);return L}function Ae(t){G(1,arguments);var e=Q(t);return K(e*1e3)}function Pt(t){G(1,arguments);var e=K(t),r=e.getTime();return r}function $t(t){return G(1,arguments),Math.floor(Pt(t)/1e3)}function Nt(t,e){G(2,arguments);var r=K(t),n=K(e);return r.getTime()>n.getTime()}var Ue=class extends ot.Cache{remove=(e,r)=>super.remove(Ue.getId(e,r));get=(e,r)=>super.get(Ue.getId(e,r));set=(e,r,n)=>super.set(Ue.getId(e,n),r);has=(e,r)=>super.has(Ue.getId(e,r));store=(e,r,n,a)=>this.set(e,JSON.stringify({...n?{ttl:$t(Lt(new Date,n))}:{},data:r}),a);retrieve(e,r){let n=this.get(e,r);if(!n)return;let a=JSON.parse(n);if(a.ttl&&Nt(new Date,Ae(+a.ttl))){this.remove(e,r);return}return a.data}},ke=Ue;Et(ke,"getId",(e,r=!0)=>r?`${ot.environment.commandName}-${e}`:e);var Tr=ee(require("os"),1);var{username:Wo}=Tr.default.userInfo();var Rr=require("@raycast/api");var Ie=t=>t==null?"":String(t),_r=t=>t instanceof Error?t.message:Ie(t);var ha=require("@raycast/api");var xe=(0,Lr.promisify)(Dr.exec),Ve=t=>typeof t=="object"&&"stderr"in t?t.stderr:_r(t);var Pr=`${$r.default.homedir()}/.midway/cookie`,ya=t=>typeof t=="object"&&t.__type&&t.__type.includes("Exception"),va=t=>typeof t=="object"&&t.status&&t.status==="error",st=(t,e)=>{let{cookie:r,data:n,args:a=[],headers:i={},method:c,maxBuffer:s,cancel:p}=e,h=[`curl -sSL '${t}'`,`-X ${c??"GET"}`,Object.entries(i).map(([k,E])=>`-H '${k}: ${E}'`),a,n?[`-d '${JSON.stringify(n)}'`]:[],r?[`-b '${Object.entries(r).map(([k,E])=>`${k}=${E}`).join(";")}'`]:[]].flat();return xe(h.join(" "),{maxBuffer:s,signal:p?.signal}).then(({stdout:k})=>it(k)?JSON.parse(k):k).catch(k=>{throw new Error(Ve(k))})},Nr=(t,e)=>{let{args:r=[],headers:n={},accessKeyId:a,secretAccessKey:i,service:c,region:s,sessionToken:p,...h}=e,k=[...r,`--aws-sigv4 'aws:amz:${s}:${c}' -u '${a}:${i}'`],E={...n,...p?{"x-amz-security-token":p}:{}};return st(t,{...h,args:k,headers:E})},le=(t,e={})=>{let{ignoreCoralError:r=!1,writeToCookieFile:n=!0,args:a=[],...i}=e,c=[a,`--anyauth --location-trusted -k -u : -b ${Pr}`,n?[`-c ${Pr}`]:[]].flat();return st(t,{...i,args:c}).then(s=>{if(!r&&ya(s))throw new Error(`${s.__type}${s.message?`: ${s.message}`:""}`);if(va(s))throw new Error(`${s.message??"Midway Error"}: ${s.desc??"You should authenticate (may use mwinit)"}`);return s})};var wa=(t,e)=>le("https://gitfarm-sso.corp.amazon.com",{...e,method:"POST",headers:{"Content-Encoding":"amz-1.0","Content-Type":"application/json; charset=UTF-8","X-Amz-Target":`com.amazon.brazil.gitfarm.service.GitFarmService.${t}`}}),Cr=t=>wa("getReferenceSha1s",{data:{repositoryId:t}}).then(e=>e.references);var ct=require("@raycast/api");function lt(t,e=!0){let{launchType:r,extensionName:n,commandName:a}=ct.environment;return!e||r===ct.LaunchType.Background?Promise.resolve():le("https://analytics.raycast.tools.aws.dev/v2/stats",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},data:{commandName:a,extensionVersion:t,extensionName:n}}).catch(i=>console.warn(`Failed to publish stats for ${n}/${a}.`,i))}var ae=require("@raycast/api");function me(t,e){for(var r=t<0?"-":"",n=Math.abs(t).toString();n.length<e;)n="0"+n;return r+n}function ut(t,e){var r,n;G(1,arguments);var a=K(t);if(isNaN(a.getTime()))throw new RangeError("Invalid time value");var i=String((r=e?.format)!==null&&r!==void 0?r:"extended"),c=String((n=e?.representation)!==null&&n!==void 0?n:"complete");if(i!=="extended"&&i!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(c!=="date"&&c!=="time"&&c!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var s="",p="",h=i==="extended"?"-":"",k=i==="extended"?":":"";if(c!=="time"){var E=me(a.getDate(),2),$=me(a.getMonth()+1,2),M=me(a.getFullYear(),4);s="".concat(M).concat(h).concat($).concat(h).concat(E)}if(c!=="date"){var j=a.getTimezoneOffset();if(j!==0){var L=Math.abs(j),fe=me(Math.floor(L/60),2),te=me(L%60,2),W=j<0?"+":"-";p="".concat(W).concat(fe,":").concat(te)}else p="Z";var H=me(a.getHours(),2),N=me(a.getMinutes(),2),F=me(a.getSeconds(),2),ie=s===""?"":"T",X=[H,N,F].join(k);s="".concat(s).concat(ie).concat(X).concat(p)}return s}var Ya=ee(Zr(),1),jt=ee(nn(),1),Qa=ee(on(),1),Za=ee(zt(),1),un=ee(ln(),1);var dn=t=>Cr(`pkg/${t}`).then(e=>e.map(r=>(r.name.match(/refs\/tags\/(.*)/)??["",""])[1]).filter(r=>(0,un.default)(r))).then(e=>e.length===0?void 0:e.reduce((r,n)=>(0,jt.default)(n,r)?n:r,e[0])).catch(e=>{console.warn(`Failed to get the latest extension version for ${t}.`,e)}),pn=async t=>{let{launchType:e,extensionName:r}=ae.environment,{updateCommandName:n,changelogCommandName:a,currentVersion:i,pkg:c,extensionOwner:s}=t,p=await dn(c);if(e===ae.LaunchType.UserInitiated&&p&&(0,jt.default)(p,i)){let h={type:ae.LaunchType.UserInitiated,extensionName:r,ownerOrAuthorName:s};await(0,ae.showToast)({style:ae.Toast.Style.Success,title:`\u2728 New version (${p}) now available!`,message:`Upgrade from current version (${i}) for the latest features and improvements.`,primaryAction:{title:"Update Extension",onAction:()=>(0,ae.launchCommand)({name:n??"update-extension",...h})},secondaryAction:{title:"Changelog",onAction:()=>(0,ae.launchCommand)({name:a??"extension-changelog",...h})}})}};var We=t=>t?ut(t,{representation:"date"}):void 0,ft=t=>t?ut(t,{representation:"complete",format:"extended"}):void 0,Xe=t=>t?new Date(t):void 0;var hn=ee(require("os")),{username:ht}=hn.default.userInfo(),ti=/kerberos:\s*(.+)\s*@ANT.AMAZON.COM/,Je=`kerberos:${ht}@ANT.AMAZON.COM`,Gt=t=>{if(!t)return;if(t.__typename==="EmailAliasIdentity")return t?.details?.label;let[,e]=t?.id.match(ti)??["",void 0];return e},ri=t=>Array.isArray(t)&&t.length>0?t[0]?.value:void 0;var ni={ONE:1,TWO:2,BUSINESS_HOURS_TWO:2.5,THREE:3,FOUR:4,FIVE:5},ai=`
  query issueListView($query: String!, $rows: Int, $start: Int, $sort: String) {
    queryIssues(query: $query, rows: $rows, start: $start, sort: $sort) {
      total
      documents {
        id
        shortId
        alias
        severity
        title
        status
        ticketingStatus
        createDate
        lastUpdatedDate
        lastAssignedDate
        description
        ticketingPendingReason
        lastUpdatedConversationDate
        lastUpdated {
          id
          name
          __typename
        }
        lastResolvedDate
        ...Labels
        tags {
          id
          __typename
        }
        dedupes {
          id
          __typename
        }
        schedule {
          estimatedStartDate
          actualStartDate
          needByDate
          estimatedCompletionDate
          actualCompletionDate
          __typename
        }
        assignee {
          id
          name
          ...EmailAliasIdentity
          __typename
        }
        requester {
          id
          name
          ...EmailAliasIdentity
          __typename
        }
        resolvedBy {
          id
          name
          __typename
        }
        watchers {
          id
          type
          __typename
        }
        rootCauses {
          id
          value
          __typename
        }
        extensions {
          tt {
            troubleTicketId
            assignedGroup
            rootCause
            closureCode
            caseType
            category
            item
            type
            rootCauseDetails
            minImpact
            asin
            quantity
            vendorId
            upc
            building
            buildingId
            city
            country
            hostname
            isd
            binding
            shipOrigin
            physicalLocation
            bolNumber
            invoiceNumber
            stockNumber
            purchaseOrderId
            title
            trackingNumber
            pictureFileImdexLocation
            __typename
          }
          backlog {
            priority
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
  fragment EmailAliasIdentity on Identity {
    ... on EmailAliasIdentity {
      id
      details {
        id
        label
        __typename
      }
      __typename
    }
    __typename
  }
  fragment Labels on Issue {
    id
    labels {
      id
      ...LabelContent
      __typename
    }
    __typename
  }
  fragment LabelContent on Label {
    id
    label
    theme {
      backgroundColor
      textColor
      __typename
    }
    type
    status
    __typename
  }
`,ii=`
  query fetchCurrentUserDetails {
    whoami {
      id
      identity {
        id
        name
        protocol
        __typename
      }
      login
      fullName
      email
      jobTitle
      department
      building
      city
      employeeId
      groups {
        id
        details {
          id
          label
          deleted
          defaultTicketingFolderId
          __typename
        }
        __typename
      }
      canModerateTickets
      __typename
    }
  }
`,oi=`
  query allSavedSearches {
    whoami {
      id
      groups {
        id
        details {
          id
          deleted
          label
          preferenceId
          preferences {
            id
            ticketingSavedSearches {
              ...TicketingSavedSearch
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    currentUserPreferences {
      id
      ticketing {
        ...FavoritedSavedSearches
        __typename
      }
      ticketingSavedSearches {
        ...TicketingSavedSearch
        __typename
      }
      __typename
    }
  }
  fragment FavoritedSavedSearches on TicketingSettings {
    favoriteSavedSearches {
      id
      source
      savedSearchId
      __typename
    }
    __typename
  }
  fragment TicketingSavedSearch on SavedSearch {
    id
    searchName
    queryString
    __typename
  }
`,si=`
  mutation checkInMultiple($args: MultiCheckInInput!) {
    checkInMultiple(args: $args) {
      ...issueEngagement
      __typename
    }
  }
  fragment issueEngagement on Issue {
    id
    title
    engagementList {
      ...engagement
      __typename
    }
    __typename
  }
  fragment engagement on Engagement {
    identity {
      id
      name
      protocol
      ... on EmailAliasIdentity {
        details {
          id
          label
          __typename
        }
        __typename
      }
      ... on GroupIdentity {
        details {
          id
          label
          __typename
        }
        __typename
      }
      __typename
    }
    causalIdentity {
      id
      name
      protocol
      __typename
    }
    lastCheckedInByIdentity {
      id
      name
      protocol
      __typename
    }
    lastRemovedByIdentity {
      id
      name
      protocol
      __typename
    }
    email
    status
    reason
    lastUpdatedDate
    __typename
  }
`,mn=t=>le("https://sim-ticketing-graphql-fleet.corp.amazon.com/graphql",{headers:{"Content-Type":"application/json",Origin:"https://t.corp.amazon.com"},method:"POST",data:Array.isArray(t)?t:[t]}),[fn,ci,li,ui]=[5,1e3,3e3,.5],gt=async t=>{let e=await mn(t),r=1,n=ci;for(;r<=fn&&typeof e=="string"&&e.includes("POST body missing, invalid Content-Type, or JSON object has no keys");r++){console.warn(`Failed to call sim-ticketing endpoint and retry (${r}/${fn}): `,e);let a=Math.random()*n*ui;await at(a),n=Math.min(n*2,li),e=await mn(t)}return e},gn=t=>gt({operationName:"issueListView",query:ai,variables:{query:V(t).join(" AND "),rows:200,sort:"createDate desc"}}).then(e=>V(e).flatMap(r=>V(r?.data?.queryIssues?.documents).map(n=>{let{id:a,shortId:i,severity:c,extensions:s}=n,{tt:p}=s,h=`https://t.corp.amazon.com/${i??a}`;return{id:a,shortId:i,url:h,alias:n.alias,severity:ni[c],title:n.title,status:n.status,ticketingStatus:n.ticketingStatus,lastUpdatedDate:Xe(n.lastUpdatedDate),lastAssignedDate:Xe(n.lastAssignedDate),description:n.description,ticketingPendingReason:n.ticketingPendingReason,lastUpdatedConversationDate:Xe(n.lastUpdatedConversationDate),requester:Gt(n.requester),assignee:Gt(n.assignee),watchers:n.watchers?.length??0,rootCause:ri(n.rootCauses),lastResolvedDate:Xe(n.lastResolvedDate),labels:V(n.labels).map(k=>k.label),resolvedBy:Gt(n.resolvedBy),assignedGroup:p.assignedGroup}}))),yn=()=>gt({operationName:"fetchCurrentUserDetails",query:ii,variables:{}}).then(t=>V(t).flatMap(e=>V(e?.data?.whoami?.groups).map(r=>{let{id:n,label:a}=r.details,c=`https://t.corp.amazon.com/issues/?${new URLSearchParams({q:['extensions.tt.status:(Researching OR "Work In Progress" OR Pending) ',`extensions.tt.assignedGroup:(${a})`].join(" AND ")})}`;return{id:n,label:a,url:c}}))),vn=()=>gt({operationName:"allSavedSearches",query:oi,variables:{}}).then(t=>[...V(t).flatMap(e=>V(e?.data?.whoami?.groups).flatMap(r=>{let n=V(r?.details?.preferences?.ticketingSavedSearches).map(a=>{let{id:i,searchName:c,queryString:s}=a,p=new URLSearchParams(s).get("q"),h=`https://t.corp.amazon.com/issues/?${s}`;return{id:i,searchName:c,url:h,query:!p||it(p)?void 0:p}});return V(n)})),{searchName:"Assigned to You",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`assigneeIdentity:"${Je}"`,"isTicket:true"].join(" AND ")},{searchName:"Requested by You",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`requesterIdentity:"${Je}`,"isTicket:true"].join(" AND ")},{searchName:"You've + 1'd",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`affects:${ht}`,"isTicket:true"].join(" AND ")},{searchName:"You're Cc'd on",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`watchers:${ht}`,"isTicket:true"].join(" AND ")},{searchName:"Pending Requester Info by You",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`requesterIdentity:"${Je}"`,"isTicket:true",'next_step.owner:"role:requester"',"next_step.action:Comment"].join(" AND ")},{searchName:"Approaching Need by Date",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`assigneeIdentity:"kerberos:${ht}@ANT.AMAZON.COM"`,"isTicket:true","schedule.needByDate:[NOW TO NOW+1DAYS]"].join(" AND ")}]),wn=({shortId:t})=>gt({operationName:"checkInMultiple",query:si,variables:{args:{identities:[Je],issueId:t}}}).then(e=>V(e).some(r=>V(r?.data?.checkInMultiple?.engagementList).findIndex(n=>n?.identity?.id===Je)>=0));var bn=require("@raycast/api");var Bt=require("@raycast/api"),Sn=(S=>(S.Amazon="amazon.svg",S.AmazonChime="amazon-chime.svg",S.Badge="badge.svg",S.Book="book.svg",S.BoxArchive="box-archive.svg",S.Broadcast="broadcast.svg",S.BuilderHub="builder-hub.svg",S.BuildingColumns="building-columns.svg",S.CheckSquare="check-square.svg",S.ClappingHands="clapping-hands.svg",S.Cube="cube.svg",S.Cubes="cubes.svg",S.Document="document.svg",S.Earth="earth.svg",S.EverGeen="ever-green.svg",S.Firefox="firefox.svg",S.InternalSearch="internal-search.svg",S.Isengard="isengard.svg",S.Issue="issue.svg",S.IT="it.svg",S.PaperPlane="paper-plane.svg",S.Pipeline="pipeline.svg",S.PipelineDisabled="pipeline-disabled.svg",S.PriorityHigh="priority-high.svg",S.PriorityLow="priority-low.svg",S.PriorityMedium="priority-medium.svg",S.Quip="quip.svg",S.Sage="sage.svg",S.SavedSearch="saved-search.svg",S.Siren="siren.svg",S.Slack="slack.svg",S.Slides="slides.svg",S.Spinner="spinner.svg",S.Spreadsheet="spreadsheet.svg",S.Sprint="sprint.svg",S.SquareFive="five.svg",S.SquareFour="four.svg",S.SquareOne="one.svg",S.SquareThree="three.svg",S.SquareTwo="two.svg",S[S.Story=Bt.Icon.Book]="Story",S.TaskeiRoom="taskei-room.svg",S.TaskeiSubtask="taskei-subtask.svg",S.TaskeiTask="taskei-task.svg",S.ThumbsUp="thumbs-up.svg",S.Ticket="ticket.svg",S.Wiki="wiki.svg",S))(Sn||{}),di={...Bt.Icon,...Sn},A=di;var xn=require("react/jsx-runtime");function Ke({url:t,onCopy:e}){return(0,xn.jsx)(bn.Action.CopyToClipboard,{title:"Copy Link",content:t,shortcut:{modifiers:["cmd","shift"],key:"c"},icon:A.Clipboard,onCopy:e})}var kn=require("@raycast/api");var En=require("@raycast/api"),An=(i=>(i.Bronze="#CD7F32",i.Gold="#FFD700",i.LightSilver="#D8D8D8",i.Orange="#F19F39",i.Rurikon="#0B346E",i))(An||{}),pi={...En.Color,...An},B=pi;var In=require("react/jsx-runtime");function Ye({isShowingDetail:t,onShowingDetailChange:e}){return(0,In.jsx)(kn.Action,{title:`${t?"Hide":"Show"} Detail`,icon:{source:A.Sidebar,tintColor:B.PrimaryText},onAction:e,shortcut:{modifiers:["cmd","shift"],key:"."}})}var R=require("@raycast/api");var P=require("react/jsx-runtime"),Ht={1:{source:A.SquareOne,tintColor:B.Red},2:{source:A.SquareTwo,tintColor:B.Orange},2.5:{source:A.SquareTwo,tintColor:B.Yellow},3:{source:A.SquareThree,tintColor:B.Blue},4:{source:A.SquareFour,tintColor:B.LightSilver},5:{source:A.SquareFive,tintColor:B.SecondaryText}};function Vt({ticket:t,isShowingDetail:e,onShowingDetailChange:r,...n}){let{ignoreStatus:a,isShowingResolvedTickets:i,onShowingResolvedTicketsChange:c,mutateTickets:s}=n,{id:p,shortId:h,url:k,ticketingStatus:E,severity:$}=t;return(0,P.jsx)(R.List.Item,{title:t.title,icon:$&&Ht[$]?Ht[$]:{source:A.Ticket,tintColor:B.Blue},accessories:!e&&(E==="Closed"||E==="Resolved")?[{icon:{source:A.CheckSquare,tintColor:B.Green}}]:void 0,detail:(0,P.jsx)(R.List.Item.Detail,{markdown:t.description,metadata:(0,P.jsxs)(R.Detail.Metadata,{children:[(0,P.jsx)(R.Detail.Metadata.Label,{title:"Alias",text:t.alias}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Assigned Group",text:t.assignedGroup}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Status",text:t.status}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Ticketing Status",text:E}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Assginee",text:t.assignee}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Requester",text:t.requester}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Resolved By",text:t.resolvedBy}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Severity",icon:$?Ht[$]:void 0}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Ticketing Pending Reason",text:t.ticketingPendingReason??"None"}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Root Cause",text:t.rootCause}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Watchers",icon:A.Hashtag,text:Ie(t.watchers)}),(0,P.jsx)(R.Detail.Metadata.TagList,{title:"Labels",children:t.labels.map(M=>(0,P.jsx)(R.Detail.Metadata.TagList.Item,{text:M},M))}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Last Assigned Date",icon:A.Calendar,text:We(t.lastAssignedDate)??"None"}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Last Resolved Date",icon:A.Calendar,text:We(t.lastResolvedDate)??"None"}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Last Updated Date",icon:A.Calendar,text:We(t.lastUpdatedDate)??"None"}),(0,P.jsx)(R.Detail.Metadata.Label,{title:"Last Updated Conversation Date",icon:A.Calendar,text:We(t.lastUpdatedConversationDate)??"None"})]})}),actions:(0,P.jsxs)(R.ActionPanel,{children:[(0,P.jsx)(R.Action.OpenInBrowser,{url:k}),(0,P.jsx)(R.Action,{title:"Check In",icon:A.Flag,onAction:async()=>{let M=await Me({style:R.Toast.Style.Animated,title:`Checking in ${h}...`});await wn(t)?M.updateContent({style:R.Toast.Style.Success,title:`Checked in ${h} successfully.`}):M.updateContent({style:R.Toast.Style.Failure,title:`Failed to check in ${h}.`}),await s()}}),(0,P.jsx)(Ke,{url:k}),a?void 0:(0,P.jsx)(R.Action,{icon:i?A.XMarkTopRightSquare:{source:A.CheckSquare,tintColor:B.Green},title:`${i?"Hide":"Show"} Resolved Tasks`,onAction:c}),(0,P.jsx)(Ye,{isShowingDetail:e,onShowingDetailChange:r})]})},p)}var Tn=require("react");function Qe(t,{sanitize:e=!1}={}){let[r,n]=(0,Tn.useState)(t),a=c=>e?c.replace(/\s/g,""):c.trim();return[r,c=>n(a(c))]}var Rn=require("react");function ze(t=!1){let[e,r]=(0,Rn.useState)(t);return[e,()=>r(!e),r]}var yt=require("@raycast/api");var _n=require("react"),Ze=require("react/jsx-runtime");function Te({query:t,isLoading:e,ignoreStatus:r,searchBarAccessory:n}){let[a,i]=ze(!1),[c,s,p]=ze(!1),[h,k]=Qe(""),E=(0,_n.useMemo)(()=>{let L=["Assigned","Work In Progress","Pending",...c?["Resolved","Closed"]:[]];return[h?`full_text:(${h})`:void 0,...Array.isArray(t)?t:[t],r?void 0:`extensions.tt.status:(${L.map(fe=>JSON.stringify(fe)).join(" OR ")})`]},[h,t,c]),{isLoading:$,data:M,mutate:j}=ye(gn,[E]);return(0,Ze.jsx)(yt.List,{isLoading:$||e,searchBarAccessory:n||(r?void 0:(0,Ze.jsx)(yt.List.Dropdown,{tooltip:"",value:Ie(c),onChange:L=>p(JSON.parse(L)),children:[!1,!0].map(L=>(0,Ze.jsx)(yt.List.Dropdown.Item,{icon:L?A.PlusSquare:A.Eye,title:`${L?"All":"Open"} Tickets`,value:Ie(L)},Ie(L)))})),isShowingDetail:a,onSearchTextChange:k,throttle:!0,children:M?.map(L=>(0,Ze.jsx)(Vt,{ticket:L,isShowingDetail:a,onShowingDetailChange:i,ignoreStatus:r,isShowingResolvedTickets:c,onShowingResolvedTicketsChange:s,mutateTickets:j},L.id))})}var _e=require("@raycast/api");var Re=require("react/jsx-runtime");function Wt({group:t}){let{id:e,label:r,url:n}=t;return(0,Re.jsx)(_e.List.Item,{icon:A.TwoPeople,title:r,actions:(0,Re.jsxs)(_e.ActionPanel,{children:[(0,Re.jsx)(_e.Action.Push,{icon:A.Ticket,title:"Tickets",target:(0,Re.jsx)(Te,{query:`extensions.tt.assignedGroup:(${JSON.stringify(r)})`})}),(0,Re.jsx)(_e.Action.OpenInBrowser,{url:n})]})},e)}var Dn=require("@raycast/api"),Xt=require("react/jsx-runtime");function Jt({isLoadingGroups:t,groups:e,...r}){return(0,Xt.jsx)(Dn.List,{...r,isLoading:t,children:e?.map(n=>(0,Xt.jsx)(Wt,{group:n},n.id))})}var mi=require("@raycast/api");var Kt=ee(require("fs")),Pn=ee(require("os")),Ln=`${Pn.default.homedir()}/.midway/cookie`,$n=()=>Kt.default.existsSync(Ln)?Kt.default.readFileSync(Ln,"utf8").split(`
`).map(e=>{if(e.startsWith("#")&&!e.startsWith("#HttpOnly_"))return e;let r=e.split("	");if(r.length!==7)return e;let[n,a,i,c,s,p,h]=r;return{domain:n,includesSubdomains:a,path:i,overHttpsOnly:c,expiresAt:+s,name:p,value:h}}):void 0;var Cn=ee(require("os")),Yt="sos-credentials-v1",Nn=new ke({namespace:Yt}),{username:fi}=Cn.default.userInfo(),hi="us-west-2",gi="https://us-west-2.paging.corp.a2z.com",yi=async()=>{let t=Nn.retrieve(Yt);if(t)return t;await le("https://paging.corp.a2z.com");let r=$n()?.find(p=>typeof p!="string"&&/\.paging\.corp\.a2z\.com/.test(p.domain)&&/amzn_sso_token/.test(p.name));if(!r||typeof r=="string")throw new Error("No SOS token found.");let{value:n}=r,a=new URLSearchParams({Version:"2011-06-15",Action:"AssumeRoleWithWebIdentity",RoleArn:"arn:aws:iam::991761955833:role/FederatedAccessRole-prod",RoleSessionName:"web-user",WebIdentityToken:n,DurationSeconds:"3600"}),c=(await st(`https://sts.amazonaws.com/?${a}`,{headers:{Accept:"application/json"},method:"POST"}))?.AssumeRoleWithWebIdentityResponse?.AssumeRoleWithWebIdentityResult?.Credentials;if(!c||!c.AccessKeyId||!c.SecretAccessKey)throw new Error("No valid SOS Credentials found.");let s={accessKeyId:c.AccessKeyId,secretAccessKey:c.SecretAccessKey,sessionToken:c.SessionToken};return Nn.store(Yt,s,{minutes:50}),s},On=(t,e={})=>yi().then(r=>Nr(gi,{...e,...r,service:"sos",region:hi,method:"POST",headers:{"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":`AwsSOSInterfaceService.${t}`}})),Mn=()=>On("ListPages",{data:{contactArn:`arn:aws:sos:us-west-2:991761955833:contact/amazon:${fi}`,maxResults:100,timeRange:{fromTime:0,toTime:new Date().getTime()/1e3}}}).then(t=>V(t.pages).map(e=>({acceptCode:e.acceptCode,arn:e.arn,content:e.content,contactArn:e.contactArn,deliveryTime:e.deliveryTime?Ae(e.deliveryTime):void 0,engagementArn:e.engagementArn,originalRegion:e.originalRegion,readTime:e.readTime?Ae(e.readTime):void 0,sender:e.sender,sentTime:Ae(e.sentTime),subject:e.subject.replace(/To:\S+@\S+\.\S+/,"").trim(),status:e.readTime?"Read":e.deliveryTime?"Delivered":"Sent",ticketUrl:e.sender.includes("issues")?`https://t.corp.amazon.com/${e.subject.match(/SIM ([A-Za-z0-9]+) .*/)[1]}`:void 0}))),Fn=t=>On("AcceptPage",{data:{receiptType:"READ",acceptCode:t.acceptCode,arn:t.arn,engagementArn:t.engagementArn}}).then(e=>JSON.stringify(e)==="{}");var q=require("@raycast/api");var z=require("react/jsx-runtime"),vi={Sent:{source:A.PaperPlane,tintColor:B.Blue},Delivered:{source:A.PaperPlane,tintColor:B.Yellow},Read:{source:A.Eye,tintColor:B.Green}};function Qt({result:t,isShowingDetail:e,...r}){let{mutatePageResults:n,onShowingDetailChange:a}=r,{ticketUrl:i,subject:c,status:s}=t,p=vi[s];return(0,z.jsx)(q.List.Item,{title:c,icon:p??"\u{1F4DF}",detail:(0,z.jsx)(q.List.Item.Detail,{markdown:`### ${c}
---
${t.content}`,metadata:(0,z.jsxs)(q.Detail.Metadata,{children:[(0,z.jsx)(q.Detail.Metadata.Label,{title:"Sender",text:t.sender,icon:"\u{1F4DF}"}),(0,z.jsx)(q.Detail.Metadata.Label,{title:"Contact",text:t.contactArn}),(0,z.jsx)(q.Detail.Metadata.Label,{title:"Status",text:s,icon:p}),(0,z.jsx)(q.Detail.Metadata.Separator,{}),(0,z.jsx)(q.Detail.Metadata.Label,{title:"Region",text:t.originalRegion}),(0,z.jsx)(q.Detail.Metadata.Label,{title:"Read Time",icon:A.Calendar,text:ft(t.readTime)}),(0,z.jsx)(q.Detail.Metadata.Label,{title:"Delivery Time",icon:A.Calendar,text:ft(t.deliveryTime)}),(0,z.jsx)(q.Detail.Metadata.Label,{title:"Last Sent Time",icon:A.Calendar,text:ft(t.sentTime)})]})}),actions:(0,z.jsxs)(q.ActionPanel,{children:[(0,z.jsx)(q.Action,{title:"Acknowledge",icon:{source:A.Flag,tintColor:B.Green},onAction:async()=>{let h=await Me({style:q.Toast.Style.Animated,title:"Acknowledging page..."});await Fn(t)?h.updateContent({style:q.Toast.Style.Success,title:"Page acknowledged."}):h.updateContent({style:q.Toast.Style.Failure,title:"Failed to acknowledge page."}),await at(1e3),await n()}}),(0,z.jsx)(Ye,{isShowingDetail:e,onShowingDetailChange:a}),i?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(q.Action.OpenInBrowser,{url:i,shortcut:{modifiers:["cmd","shift"],key:"enter"}}),(0,z.jsx)(Ke,{url:i})]}):void 0]})},c)}var jn=require("@raycast/api");var zn=ee(qn());function Zt(t,e=[],r){return t?zn.default.go(t,e,{keys:typeof r=="string"?[r]:r,limit:1e3,threshold:-1e4}).map(n=>n.obj):e}var Gn=require("react"),er=require("react/jsx-runtime");function tr(t){let[e,r]=Qe(""),[n,a]=ze(!1),{isLoading:i,data:c,mutate:s}=ye(Mn,[]),p=(0,Gn.useMemo)(()=>Zt(e,c,["subject","content"]),[c,e]);return(0,er.jsx)(jn.List,{...t,isLoading:i,isShowingDetail:n,onSearchTextChange:r,throttle:!0,children:p?.map(h=>(0,er.jsx)(Qt,{result:h,isShowingDetail:n,onShowingDetailChange:a,mutatePageResults:s},h.arn))})}var Le=require("@raycast/api");var De=require("react/jsx-runtime");function rr({savedSearch:t}){let{id:e,searchName:r,url:n,query:a}=t;return(0,De.jsx)(Le.List.Item,{icon:A.SavedSearch,title:r,accessories:[{text:a}],actions:(0,De.jsxs)(Le.ActionPanel,{children:[a?(0,De.jsx)(Le.Action.Push,{title:"Tickets",icon:A.Ticket,target:(0,De.jsx)(Te,{ignoreStatus:!0,query:a})}):void 0,n?(0,De.jsx)(Le.Action.OpenInBrowser,{url:n}):void 0]})},e??r)}var nr=require("@raycast/api"),Bn=require("react"),wt=require("react/jsx-runtime");function ar(t){let{isLoading:e,data:r}=ye(vn,[]),n=(0,Bn.useMemo)(()=>({mySearches:{title:"Saved Searches",savedSearches:r?.filter(a=>!!a.id)},extensionDefinedSearches:{title:"Extension Defined Searches",savedSearches:r?.filter(a=>!a.id)}}),[r]);return(0,wt.jsx)(nr.List,{...t,isLoading:e,children:[n.extensionDefinedSearches,n.mySearches].map(({title:a,savedSearches:i},c)=>(0,wt.jsx)(nr.List.Section,{title:a,children:i?.map((s,p)=>(0,wt.jsx)(rr,{savedSearch:s},s.id??p))},c))})}var et=require("@raycast/api");var wi=ee(zt());var Vn="1.17.9";var Wn="zhenpewu";var ir=Vn,Si="AmznRaycastExtension";var Xn=()=>pn({pkg:Si,currentVersion:ir,extensionOwner:Wn});function or(){Fe(Xn,[])}var bi=()=>lt(ir,!0),Jn=bi;function sr(){Fe(Jn,[])}var cr=require("@raycast/api");var Kn=require("react"),Pe=require("react/jsx-runtime"),xi=["global","high_sev","paging","group","saved_search"],Ei={global:{title:"All Groups",icon:A.Earth},group:{title:"Groups",icon:A.TwoPeople},high_sev:{title:"High-Sev",icon:{source:A.Siren,tintColor:B.Red}},saved_search:{title:"Saved Searches",icon:A.SavedSearch},paging:{title:"Paging",icon:"\u{1F4DF}"}};function Yn(){let[t,e]=(0,Kn.useState)("global"),{isLoading:r,data:n}=ye(yn,[]),a=(0,Pe.jsx)(cr.List.Dropdown,{tooltip:"Mode",storeValue:!0,onChange:i=>e(i),children:xi.map(i=>(0,Pe.jsx)(cr.List.Dropdown.Item,{...Ei[i],value:i},i))});switch(sr(),or(),t){case"saved_search":return(0,Pe.jsx)(ar,{searchBarAccessory:a});case"group":return(0,Pe.jsx)(Jt,{groups:n,isLoadingGroups:r,searchBarAccessory:a});case"paging":return(0,Pe.jsx)(tr,{searchBarAccessory:a});default:return(0,Pe.jsx)(Te,{query:n?[`extensions.tt.assignedGroup:(${n.map(i=>JSON.stringify(i.label)).join(" OR ")})`,...t==="high_sev"?["currentSeverity:(1 OR 2 OR 2.5)"]:[]]:void 0,isLoading:r,searchBarAccessory:a})}}
