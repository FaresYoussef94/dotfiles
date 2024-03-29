"use strict";var Ut=Object.create;var B=Object.defineProperty;var zt=Object.getOwnPropertyDescriptor;var jt=Object.getOwnPropertyNames;var Gt=Object.getPrototypeOf,qt=Object.prototype.hasOwnProperty;var Ht=(t,e,r)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var x=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Xt=(t,e)=>{for(var r in e)B(t,r,{get:e[r],enumerable:!0})},De=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of jt(e))!qt.call(t,a)&&a!==r&&B(t,a,{get:()=>e[a],enumerable:!(n=zt(e,a))||n.enumerable});return t};var N=(t,e,r)=>(r=t!=null?Ut(Gt(t)):{},De(e||!t||!t.__esModule?B(r,"default",{value:t,enumerable:!0}):r,t)),_t=t=>De(B({},"__esModule",{value:!0}),t);var _=(t,e,r)=>(Ht(t,typeof e!="symbol"?e+"":e,r),r);var we=x((xo,Xe)=>{var Kt=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};Xe.exports=Kt});var ve=x(($o,_e)=>{var er="2.0.0",tr=Number.MAX_SAFE_INTEGER||9007199254740991,rr=16,nr=256-6,or=["major","premajor","minor","preminor","patch","prepatch","prerelease"];_e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:rr,MAX_SAFE_BUILD_LENGTH:nr,MAX_SAFE_INTEGER:tr,RELEASE_TYPES:or,SEMVER_SPEC_VERSION:er,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var We=x((D,Ve)=>{var{MAX_SAFE_COMPONENT_LENGTH:Ie,MAX_SAFE_BUILD_LENGTH:ar,MAX_LENGTH:ir}=ve(),sr=we();D=Ve.exports={};var cr=D.re=[],lr=D.safeRe=[],i=D.src=[],s=D.t={},pr=0,xe="[a-zA-Z0-9-]",mr=[["\\s",1],["\\d",ir],[xe,ar]],dr=t=>{for(let[e,r]of mr)t=t.split(`${e}*`).join(`${e}{0,${r}}`).split(`${e}+`).join(`${e}{1,${r}}`);return t},p=(t,e,r)=>{let n=dr(e),a=pr++;sr(t,a,e),s[t]=a,i[a]=e,cr[a]=new RegExp(e,r?"g":void 0),lr[a]=new RegExp(n,r?"g":void 0)};p("NUMERICIDENTIFIER","0|[1-9]\\d*");p("NUMERICIDENTIFIERLOOSE","\\d+");p("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${xe}*`);p("MAINVERSION",`(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})`);p("MAINVERSIONLOOSE",`(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})`);p("PRERELEASEIDENTIFIER",`(?:${i[s.NUMERICIDENTIFIER]}|${i[s.NONNUMERICIDENTIFIER]})`);p("PRERELEASEIDENTIFIERLOOSE",`(?:${i[s.NUMERICIDENTIFIERLOOSE]}|${i[s.NONNUMERICIDENTIFIER]})`);p("PRERELEASE",`(?:-(${i[s.PRERELEASEIDENTIFIER]}(?:\\.${i[s.PRERELEASEIDENTIFIER]})*))`);p("PRERELEASELOOSE",`(?:-?(${i[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[s.PRERELEASEIDENTIFIERLOOSE]})*))`);p("BUILDIDENTIFIER",`${xe}+`);p("BUILD",`(?:\\+(${i[s.BUILDIDENTIFIER]}(?:\\.${i[s.BUILDIDENTIFIER]})*))`);p("FULLPLAIN",`v?${i[s.MAINVERSION]}${i[s.PRERELEASE]}?${i[s.BUILD]}?`);p("FULL",`^${i[s.FULLPLAIN]}$`);p("LOOSEPLAIN",`[v=\\s]*${i[s.MAINVERSIONLOOSE]}${i[s.PRERELEASELOOSE]}?${i[s.BUILD]}?`);p("LOOSE",`^${i[s.LOOSEPLAIN]}$`);p("GTLT","((?:<|>)?=?)");p("XRANGEIDENTIFIERLOOSE",`${i[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);p("XRANGEIDENTIFIER",`${i[s.NUMERICIDENTIFIER]}|x|X|\\*`);p("XRANGEPLAIN",`[v=\\s]*(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:${i[s.PRERELEASE]})?${i[s.BUILD]}?)?)?`);p("XRANGEPLAINLOOSE",`[v=\\s]*(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:${i[s.PRERELEASELOOSE]})?${i[s.BUILD]}?)?)?`);p("XRANGE",`^${i[s.GTLT]}\\s*${i[s.XRANGEPLAIN]}$`);p("XRANGELOOSE",`^${i[s.GTLT]}\\s*${i[s.XRANGEPLAINLOOSE]}$`);p("COERCE",`(^|[^\\d])(\\d{1,${Ie}})(?:\\.(\\d{1,${Ie}}))?(?:\\.(\\d{1,${Ie}}))?(?:$|[^\\d])`);p("COERCERTL",i[s.COERCE],!0);p("LONETILDE","(?:~>?)");p("TILDETRIM",`(\\s*)${i[s.LONETILDE]}\\s+`,!0);D.tildeTrimReplace="$1~";p("TILDE",`^${i[s.LONETILDE]}${i[s.XRANGEPLAIN]}$`);p("TILDELOOSE",`^${i[s.LONETILDE]}${i[s.XRANGEPLAINLOOSE]}$`);p("LONECARET","(?:\\^)");p("CARETTRIM",`(\\s*)${i[s.LONECARET]}\\s+`,!0);D.caretTrimReplace="$1^";p("CARET",`^${i[s.LONECARET]}${i[s.XRANGEPLAIN]}$`);p("CARETLOOSE",`^${i[s.LONECARET]}${i[s.XRANGEPLAINLOOSE]}$`);p("COMPARATORLOOSE",`^${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]})$|^$`);p("COMPARATOR",`^${i[s.GTLT]}\\s*(${i[s.FULLPLAIN]})$|^$`);p("COMPARATORTRIM",`(\\s*)${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]}|${i[s.XRANGEPLAIN]})`,!0);D.comparatorTrimReplace="$1$2$3";p("HYPHENRANGE",`^\\s*(${i[s.XRANGEPLAIN]})\\s+-\\s+(${i[s.XRANGEPLAIN]})\\s*$`);p("HYPHENRANGELOOSE",`^\\s*(${i[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[s.XRANGEPLAINLOOSE]})\\s*$`);p("STAR","(<|>)?=?\\s*\\*");p("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");p("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Je=x((bo,Be)=>{var ur=Object.freeze({loose:!0}),hr=Object.freeze({}),fr=t=>t?typeof t!="object"?ur:t:hr;Be.exports=fr});var Ke=x((Ao,Qe)=>{var Ye=/^[0-9]+$/,Ze=(t,e)=>{let r=Ye.test(t),n=Ye.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},gr=(t,e)=>Ze(e,t);Qe.exports={compareIdentifiers:Ze,rcompareIdentifiers:gr}});var $e=x((No,nt)=>{var te=we(),{MAX_LENGTH:et,MAX_SAFE_INTEGER:re}=ve(),{safeRe:tt,t:rt}=We(),Er=Je(),{compareIdentifiers:W}=Ke(),$=class{constructor(e,r){if(r=Er(r),e instanceof $){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>et)throw new TypeError(`version is longer than ${et} characters`);te("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=e.trim().match(r.loose?tt[rt.LOOSE]:tt[rt.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>re||this.major<0)throw new TypeError("Invalid major version");if(this.minor>re||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>re||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(a=>{if(/^[0-9]+$/.test(a)){let o=+a;if(o>=0&&o<re)return o}return a}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(te("SemVer.compare",this.version,this.options,e),!(e instanceof $)){if(typeof e=="string"&&e===this.version)return 0;e=new $(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof $||(e=new $(e,this.options)),W(this.major,e.major)||W(this.minor,e.minor)||W(this.patch,e.patch)}comparePre(e){if(e instanceof $||(e=new $(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],a=e.prerelease[r];if(te("prerelease compare",r,n,a),n===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(n===void 0)return-1;if(n===a)continue;return W(n,a)}while(++r)}compareBuild(e){e instanceof $||(e=new $(e,this.options));let r=0;do{let n=this.build[r],a=e.build[r];if(te("prerelease compare",r,n,a),n===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(n===void 0)return-1;if(n===a)continue;return W(n,a)}while(++r)}inc(e,r,n){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let a=Number(n)?1:0;if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[a];else{let o=this.prerelease.length;for(;--o>=0;)typeof this.prerelease[o]=="number"&&(this.prerelease[o]++,o=-2);if(o===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(a)}}if(r){let o=[r,a];n===!1&&(o=[r]),W(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=o):this.prerelease=o}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};nt.exports=$});var be=x((Ro,at)=>{var ot=$e(),yr=(t,e,r=!1)=>{if(t instanceof ot)return t;try{return new ot(t,e)}catch(n){if(!r)return null;throw n}};at.exports=yr});var st=x((So,it)=>{var wr=be(),vr=(t,e)=>{let r=wr(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};it.exports=vr});var ne=x((To,lt)=>{var ct=$e(),Ir=(t,e,r)=>new ct(t,r).compare(new ct(e,r));lt.exports=Ir});var mt=x((Oo,pt)=>{var xr=ne(),$r=(t,e,r)=>xr(t,e,r)>0;pt.exports=$r});var ut=x((Do,dt)=>{var br=ne(),Ar=(t,e,r)=>br(t,e,r)<0;dt.exports=Ar});var Ae=x((Co,ht)=>{var Nr=ne(),Rr=(t,e,r)=>Nr(t,e,r)<=0;ht.exports=Rr});var gt=x((ko,ft)=>{var Sr=be(),Tr=(t,e)=>{let r=Sr(t,e);return r?r.version:null};ft.exports=Tr});var Mr={};Xt(Mr,{default:()=>Pt});module.exports=_t(Mr);var qe=N(require("os"),1);var Ce=t=>{try{let e=JSON.parse(t);if(e&&typeof e=="object")return!0}catch{}return!1};var ze=require("child_process"),je=require("util");var ke=require("@raycast/api");function z(t){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(t)}function h(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function d(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function E(t){d(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||z(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function se(t,e){d(2,arguments);var r=E(t),n=h(e);return isNaN(n)?new Date(NaN):(n&&r.setDate(r.getDate()+n),r)}function ce(t,e){d(2,arguments);var r=E(t),n=h(e);if(isNaN(n))return new Date(NaN);if(!n)return r;var a=r.getDate(),o=new Date(r.getTime());o.setMonth(r.getMonth()+n+1,0);var l=o.getDate();return a>=l?o:(r.setFullYear(o.getFullYear(),o.getMonth(),a),r)}function le(t,e){if(d(2,arguments),!e||z(e)!=="object")return new Date(NaN);var r=e.years?h(e.years):0,n=e.months?h(e.months):0,a=e.weeks?h(e.weeks):0,o=e.days?h(e.days):0,l=e.hours?h(e.hours):0,c=e.minutes?h(e.minutes):0,I=e.seconds?h(e.seconds):0,y=E(t),f=n||r?ce(y,n+r*12):y,w=o||a?se(f,o+a*7):f,C=c+l*60,G=I+C*60,A=G*1e3,M=new Date(w.getTime()+A);return M}function pe(t){d(1,arguments);var e=h(t);return E(e*1e3)}function me(t){d(1,arguments);var e=E(t),r=e.getTime();return r}function de(t){return d(1,arguments),Math.floor(me(t)/1e3)}function J(t,e){d(2,arguments);var r=E(t),n=E(e);return r.getTime()>n.getTime()}var L=require("@raycast/api"),ue=class{toast;abortable;_abortController;constructor(e){this.abortable=e.abortable,this.toast=L.environment.launchType===L.LaunchType.UserInitiated?new L.Toast(e):void 0,this.updateAbortAction()}updateAbortAction(){this.toast&&(this._abortController=this.abortable?new AbortController:void 0,this.toast.primaryAction=this.abortable?{title:"Cancel",onAction:()=>{console.warn("Aborting..."),this._abortController?.abort()}}:void 0)}updateContent(e){if(this.toast){let{title:r,style:n,message:a,secondaryAction:o}=this.toast;this.toast.title=e.title??r,this.toast.style=e.style??n,this.toast.message=e.message??a,this.abortable=e.abortable??this.abortable,this.toast.secondaryAction=e.secondaryAction??o,this.updateAbortAction()}}show(){return this.toast?this.toast.show():Promise.resolve()}hide(){return this.toast?this.toast.hide():Promise.resolve()}get abortController(){return this._abortController}},Z=async t=>{let e=new ue(t);return await e.show(),e};var Le=N(require("os"),1);var{username:Nn}=Le.default.userInfo();var he=require("@raycast/api");var O=require("fs"),Pe=require("path");var V=class{},R=V;_(R,"path",(e,r=!0)=>{let{supportPath:n,commandName:a}=he.environment;return(0,Pe.join)(n,`${r?`${a}-${e}`:e}.json`)}),_(R,"clear",(e,r)=>{let n=V.path(e,r);return(0,O.existsSync)(n)?((0,O.unlinkSync)(n),!0):!1}),_(R,"store",(e,r,n={})=>{try{let{appendCommand:a=!0,ttl:o}=n,l=V.path(e,a),c={...o?{ttl:de(le(new Date,o))}:{},data:r};(0,O.writeFileSync)(l,JSON.stringify(c))}catch{return!1}return!0}),_(R,"retrieve",(e,r={})=>{let{appendCommand:n=!0}=r,a=V.path(e,n);if(!(0,O.existsSync)(a))return;let o=(0,O.readFileSync)(a,"utf8"),l=JSON.parse(o);if(l.ttl&&J(new Date,pe(+l.ttl))){V.clear(e,n);return}return l.data});var Vt=t=>t==null?"":String(t),Me=t=>t instanceof Error?t.message:Vt(t);var Fe=require("@raycast/api"),Ue=require("fs"),fe=require("path"),Wt=()=>{let t=(0,Ue.readFileSync)(`${Fe.environment.assetsPath}/workspace-config.json`,{encoding:"utf8"}),{workspacePath:e}=JSON.parse(t);return(0,fe.join)(e,"../../..")};function Q(t){let e=Wt();return(0,fe.join)(e,t)}var g=(0,je.promisify)(ze.exec),j=t=>typeof t=="object"&&"stderr"in t?t.stderr:Me(t);var Ge=`${qe.default.homedir()}/.midway/cookie`,Bt=t=>typeof t=="object"&&t.__type&&t.__type.includes("Exception"),Jt=t=>typeof t=="object"&&t.status&&t.status==="error",Yt=(t,e)=>{let{cookie:r,data:n,args:a=[],headers:o={},method:l,maxBuffer:c,cancel:I}=e,y=[`curl -sSL '${t}'`,`-X ${l??"GET"}`,Object.entries(o).map(([f,w])=>`-H '${f}: ${w}'`),a,n?[`-d '${JSON.stringify(n)}'`]:[],r?[`-b '${Object.entries(r).map(([f,w])=>`${f}=${w}`).join(";")}'`]:[]].flat();return g(y.join(" "),{maxBuffer:c,signal:I?.signal}).then(({stdout:f})=>Ce(f)?JSON.parse(f):f).catch(f=>{throw new Error(j(f))})};var P=(t,e={})=>{let{ignoreCoralError:r=!1,writeToCookieFile:n=!0,args:a=[],...o}=e,l=[a,`--anyauth --location-trusted -k -u : -b ${Ge}`,n?[`-c ${Ge}`]:[]].flat();return Yt(t,{...o,args:l}).then(c=>{if(!r&&Bt(c))throw new Error(`${c.__type}${c.message?`: ${c.message}`:""}`);if(Jt(c))throw new Error(`${c.message??"Midway Error"}: ${c.desc??"You should authenticate (may use mwinit)"}`);return c})};var Zt=(t,e)=>P("https://gitfarm-sso.corp.amazon.com",{...e,method:"POST",headers:{"Content-Encoding":"amz-1.0","Content-Type":"application/json; charset=UTF-8","X-Amz-Target":`com.amazon.brazil.gitfarm.service.GitFarmService.${t}`}}),He=t=>Zt("getReferenceSha1s",{data:{repositoryId:t}}).then(e=>e.references);var K=require("@raycast/api");function ee(t,e=!0){let{launchType:r,extensionName:n,commandName:a}=K.environment;return!e||r===K.LaunchType.Background?Promise.resolve():P("https://analytics.raycast.tools.aws.dev/v2/stats",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},data:{commandName:a,extensionVersion:t,extensionName:n}}).catch(o=>console.warn(`Failed to publish stats for ${n}/${a}.`,o))}var u=require("@raycast/api"),wt=require("child_process"),vt=require("crypto");function ge(t,e){d(2,arguments);var r=E(t).getTime(),n=h(e);return new Date(r+n)}var Qt=6e4;function Ee(t,e){d(2,arguments);var r=h(e);return ge(t,r*Qt)}function S(t,e){for(var r=t<0?"-":"",n=Math.abs(t).toString();n.length<e;)n="0"+n;return r+n}function ye(t,e){var r,n;d(1,arguments);var a=E(t);if(isNaN(a.getTime()))throw new RangeError("Invalid time value");var o=String((r=e?.format)!==null&&r!==void 0?r:"extended"),l=String((n=e?.representation)!==null&&n!==void 0?n:"complete");if(o!=="extended"&&o!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(l!=="date"&&l!=="time"&&l!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var c="",I="",y=o==="extended"?"-":"",f=o==="extended"?":":"";if(l!=="time"){var w=S(a.getDate(),2),C=S(a.getMonth()+1,2),G=S(a.getFullYear(),4);c="".concat(G).concat(y).concat(C).concat(y).concat(w)}if(l!=="date"){var A=a.getTimezoneOffset();if(A!==0){var M=Math.abs(A),q=S(Math.floor(M/60),2),b=S(M%60,2),F=A<0?"+":"-";I="".concat(F).concat(q,":").concat(b)}else I="Z";var H=S(a.getHours(),2),U=S(a.getMinutes(),2),m=S(a.getSeconds(),2),k=c===""?"":"T",ae=[H,U,m].join(f);c="".concat(c).concat(k).concat(ae).concat(I)}return c}var Ne=N(require("os"),1),It=require("path"),Re=N(st(),1),xt=N(mt(),1),$t=N(ut(),1),bt=N(Ae(),1),At=N(gt(),1);var Se=t=>He(`pkg/${t}`).then(e=>e.map(r=>(r.name.match(/refs\/tags\/(.*)/)??["",""])[1]).filter(r=>(0,At.default)(r))).then(e=>e.length===0?void 0:e.reduce((r,n)=>(0,xt.default)(n,r)?n:r,e[0])).catch(e=>{console.warn(`Failed to get the latest extension version for ${t}.`,e)});var Te="status-v3",Et=t=>{R.store(Te,t)},Or=()=>R.retrieve(Te),yt=()=>R.clear(Te),Nt=async t=>{let{currentVersion:e,workspaceName:r,pkg:n,teeOutputPath:a}=t,o="\u{1F516} Fetching the latest version...",l=await Z({style:u.Toast.Style.Animated,title:o}),c=await Se(n);if(!c){l.updateContent({style:u.Toast.Style.Failure,title:"\u274C Failed to get the latest version."});return}if((0,bt.default)(c,e)){l.updateContent({style:u.Toast.Style.Success,title:`\u{1F389} ${c} is the latest version.`}),await(0,u.updateCommandMetadata)({subtitle:`\u{1F389}  up to date with ${c}`});return}await(0,u.updateCommandMetadata)({subtitle:`\u2728  new version ${c} available!`});let I=(0,vt.randomUUID)(),y=new Date,f=y.getTime(),w=Or(),C=(w?.retryAttempts||0)+1,G=5;if(w&&w.status==="in-progress")if(J(y,Ee(new Date(w.timestamp),30)))o=`Terminating expired in-progress update process for the latest version ${c}...`,l.updateContent({style:u.Toast.Style.Animated,title:o}),w=void 0,yt();else{o=`Update in-progress for the latest version ${c}. Please wait and retry later.`,l.updateContent({style:u.Toast.Style.Failure,title:o});return}let A="brazil",M=`${A}-build`,q=Ne.default.homedir(),b=["/usr/gnu/bin","/usr/local/bin","/opt/homebrew/bin","/bin","/usr/bin",".",`${q}/.toolbox/bin`,`${q}/.local/share/rtx/shims`,`${q}/.local/share/mise/shims`,`${q}/.asdf/shims`].join(":"),F=Q(r),H=(0,It.join)(F,"src",n),U=`sudo -u ${Ne.default.userInfo().username}`,m=T=>`${T} 2>&1 | tee -a ${a}`,k=T=>`(${m(T)}; exit \${PIPESTATUS[0]};)`,{launchType:ae}=u.environment;o="\u{1F44B} Starting extension update process...",l.updateContent({title:o,style:u.Toast.Style.Animated,abortable:!0,message:`Progress can be tracked by tailing ${a}`});try{if(await g([m(`echo "${o}"`),m(`echo "    Id: ${I}"`),m(`echo "    Start time: ${ye(y)}"`),m(`echo "    Current version: ${(0,Re.default)(e)}"`),m(`echo "    Latest version: ${(0,Re.default)(c)}"`),m(`echo "    Retry Attempts: ${C} / ${G}"`)].join(" && "),{env:{PATH:b}}),!w||(0,$t.default)(w.version,c)||w.status==="failed"&&(C<=G||ae===u.LaunchType.UserInitiated)){Et({id:I,version:c,status:"in-progress",timestamp:f,retryAttempts:C}),await(0,u.updateCommandMetadata)({subtitle:`\u{1F6A7}  updating extension to ${c}...`}),o=`\u{1F37A} Initializing workspace for ${c}...`,l.updateContent({title:o}),await g([m(`echo "${o}"`),k(`[[ -d "${F}" ]] || ${U} ${A} ws create -r ${F} -vs AmznRaycastExtension/development`),m('echo "\u{1F37B} Workspace initialized successfully!"')].join(" && "),{signal:l.abortController?.signal,env:{PATH:b}}),o="\u{1F504} Syncing workspace...",l.updateContent({title:o}),await g([`cd ${F}`,m(`echo "${o}"`),k(`${U} ${A} ws --sync --md`),m(`echo "\u{1F37B} Workspace ${r} synced successfully!"`)].join(" && "),{signal:l.abortController?.signal,env:{PATH:b}}),o="\u{1F47E} Cloning extension package...",l.updateContent({title:o}),await g([`cd ${F}`,m(`echo "${o}"`),k(`[[ -d "${H}" ]] || ${U} ${A} ws use -p ${n}`),m(`echo "\u{1F37B} Extension package ${n} cloned successfully!"`)].join(" && "),{signal:l.abortController?.signal,env:{PATH:b}}),o=`\u{1F516} Switching to the latest version (${c})...`,l.updateContent({title:o}),await g([`cd ${H}`,m(`echo "\u{1F516} Fetching the latest version for ${n}..."`),k("git fetch"),m(`echo "${o}"`),k(`git checkout "refs/tags/${c}" -b ${c}-${f}`),m(`echo "\u{1F37B} Switched to latest version ${c} successfully!"`)].join(" && "),{signal:l.abortController?.signal,env:{PATH:b}});let T=async(X,Y)=>{o=Y,l.updateContent({title:o}),await g([`cd ${H}`,m(`echo "${Y}"`),k(`${U} ${M} ci --omit=dev ${X?"--prefer-offline":""}  --no-audit`),m('echo "\u{1F37B} Dependencies installed successfully!"')].join(" && "),{signal:l.abortController?.signal,env:{PATH:b}})};try{await T(!0,"\u{1F4E6} Installing dependencies...")}catch(X){if(l.abortController?.signal.aborted)throw X;console.warn("Failed to install deps: ",X),await T(!1,'\u{1F4E6} Retrying dependencies installation without "--prefer-offline"...')}let Mt=()=>new Promise((X,Y)=>{let ie=(0,wt.spawn)([`cd ${H}`,`${U} ${M} run dev`].join(" && "),{shell:!0,signal:l.abortController?.signal,env:{PATH:b},timeout:12e3});ie.stdout.on("data",Oe=>{Oe.toString().includes("built extension successfully")&&ie.kill("SIGUSR1")}),ie.on("exit",(Oe,Ft)=>{Ft==="SIGUSR1"?X():Y(new Error("Failed to deploy the latest changes in development mode."))})});o="\u{1F6A7} Deploying the latest changes in development mode...",l.updateContent({title:o}),await g(m(`echo "${o}"`),{env:{PATH:b}}),await Mt(),await g([m('echo "\u2728 You are up to update!"'),m('echo "    For any issues you encounter, please refer to "'),m('echo "      https://w.amazon.com/bin/view/UsingRaycast/AmznRaycastExtension/Installation-Option-1#HTroubleshooting"')].join(" && "),{signal:l.abortController?.signal,env:{PATH:b}}),l.updateContent({style:u.Toast.Style.Success,title:`\u2728 Updated extension to ${c}.`,abortable:!1}),await(0,u.updateCommandMetadata)({subtitle:`\u{1F389}  up to date with ${c}`}),yt()}}catch(T){console.error("Failed to update extension: ",T),o=`\u274C Failed to update extension to ${c}.`,l.updateContent({style:u.Toast.Style.Failure,title:o,message:j(T),abortable:!1}),Et({id:I,timestamp:f,version:c,status:"failed",retryAttempts:C}),await g(m(`echo "${o}"`),{env:{PATH:b}}),await(0,u.updateCommandMetadata)({subtitle:`\u{1F480}  failed to update extension to ${c}`})}};var v=require("@raycast/api"),St=N(require("os")),Tt=N(Ae());var Rt="1.17.9";var oe=Rt,Ot="AmznRaycastExtension",kr=".managed-amzn-raycast-do-not-modify-or-delete",Lr="/tmp/update-amzn-extension.txt";var Dt=()=>Nt({currentVersion:oe,pkg:Ot,teeOutputPath:Lr,workspaceName:kr}),Ct=async()=>{let t=oe,e="\u{1F516} Fetching the latest version...",r=await Z({title:e,style:v.Toast.Style.Animated,abortable:!0}),n=await Se(Ot);if(!n)r.updateContent({style:v.Toast.Style.Failure,title:"\u274C Failed to get the latest version."});else if((0,Tt.default)(n,t))r.updateContent({style:v.Toast.Style.Success,title:`\u{1F389} ${n} is the latest version.`}),await(0,v.updateCommandMetadata)({subtitle:`\u{1F389}  up to date with ${n}`});else if(await(0,v.updateCommandMetadata)({subtitle:`\u2728  new version ${n} available!`}),v.environment.launchType===v.LaunchType.UserInitiated){let a=St.default.homedir();try{let o=Date.now(),l=`${n}-${o}.zip`,c="/tmp/amzn-raycast-extension",I=`${c}/${l}`;e="\u{1F4E5} Acquiring the source code zip file for extension...",r.updateContent({title:e}),await g(`mkdir -p ${c}`),await P("https://code.amazon.com/packages/AmznRaycastExtension/blobs/mainline/--/archives/latest.zip/?download=1",{args:[`-o ${I}`],cancel:r.abortController});let y=`${a}/managed-amzn-raycast-do-not-delete`;e=`\u{1F4E6} Extracting the source code zip file to ${y}/latest...`,r.updateContent({title:e}),await g(`mkdir -p ${y} && unzip -q -o ${I} -d ${y}/latest`,{signal:r.abortController?.signal}),await g(`rm -f ${I}`),e=`\u{1F4C2} Launching "Import Extension" to access the ${y}/latest directory...`,r.updateContent({title:e}),await(0,v.launchCommand)({name:"import-extension",extensionName:"developer",ownerOrAuthorName:"raycast",type:v.LaunchType.UserInitiated}),await(0,v.updateCommandMetadata)({subtitle:`\u{1F389}  up to date with ${n}`})}catch(o){console.error("Failed to update extension: ",o),e=`\u274C Failed to update extension to ${n}.`,r.updateContent({style:v.Toast.Style.Failure,title:e,message:j(o),abortable:!1})}}};var Pr=()=>ee(oe,!0),kt=Pr;var Lt=require("@raycast/api");async function Pt(){let t=(0,Lt.getPreferenceValues)();await kt(),t["installation-option"]==="option-1"?await Ct():await Dt()}