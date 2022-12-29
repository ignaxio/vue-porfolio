(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Dr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Hr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?rs(r):Hr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(J(e))return e}}const es=/;(?![^(]*\))/g,ts=/:([^]+)/,ns=/\/\*.*?\*\//gs;function rs(e){const t={};return e.replace(ns,"").split(es).forEach(n=>{if(n){const r=n.split(ts);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function $n(e){let t="";if(ne(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=$n(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const as="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",is=Dr(as);function Si(e){return!!e||e===""}const ft=e=>ne(e)?e:e==null?"":R(e)||J(e)&&(e.toString===Mi||!L(e.toString))?JSON.stringify(e,Ii,2):String(e),Ii=(e,t)=>t&&t.__v_isRef?Ii(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ti(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!R(t)&&!Fi(t)?String(t):t,X={},wt=[],Oe=()=>{},os=()=>!1,ss=/^on[^a-z]/,Dn=e=>ss.test(e),Ur=e=>e.startsWith("onUpdate:"),fe=Object.assign,Br=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ls=Object.prototype.hasOwnProperty,$=(e,t)=>ls.call(e,t),R=Array.isArray,_t=e=>Hn(e)==="[object Map]",Ti=e=>Hn(e)==="[object Set]",L=e=>typeof e=="function",ne=e=>typeof e=="string",Yr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Ni=e=>J(e)&&L(e.then)&&L(e.catch),Mi=Object.prototype.toString,Hn=e=>Mi.call(e),fs=e=>Hn(e).slice(8,-1),Fi=e=>Hn(e)==="[object Object]",Wr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kn=Dr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Un=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},cs=/-(\w)/g,Re=Un(e=>e.replace(cs,(t,n)=>n?n.toUpperCase():"")),us=/\B([A-Z])/g,St=Un(e=>e.replace(us,"-$1").toLowerCase()),Bn=Un(e=>e.charAt(0).toUpperCase()+e.slice(1)),rr=Un(e=>e?`on${Bn(e)}`:""),In=(e,t)=>!Object.is(e,t),ar=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Tn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ri=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Pa;const ds=()=>Pa||(Pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ie;class ms{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function ps(e,t=Ie){t&&t.active&&t.effects.push(e)}const Kr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Li=e=>(e.w&Ge)>0,zi=e=>(e.n&Ge)>0,hs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ge},gs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Li(a)&&!zi(a)?a.delete(e):t[n++]=a,a.w&=~Ge,a.n&=~Ge}t.length=n}},pr=new WeakMap;let Lt=0,Ge=1;const hr=30;let xe;const ct=Symbol(""),gr=Symbol("");class qr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ps(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Xe=!0,Ge=1<<++Lt,Lt<=hr?hs(this):Sa(this),this.fn()}finally{Lt<=hr&&gs(this),Ge=1<<--Lt,xe=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(Sa(this),this.onStop&&this.onStop(),this.active=!1)}}function Sa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const ji=[];function It(){ji.push(Xe),Xe=!1}function Tt(){const e=ji.pop();Xe=e===void 0?!0:e}function pe(e,t,n){if(Xe&&xe){let r=pr.get(e);r||pr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Kr()),$i(a)}}function $i(e,t){let n=!1;Lt<=hr?zi(e)||(e.n|=Ge,n=!Li(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function $e(e,t,n,r,a,i){const o=pr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Ri(r);o.forEach((u,d)=>{(d==="length"||d>=l)&&s.push(u)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Wr(n)&&s.push(o.get("length")):(s.push(o.get(ct)),_t(e)&&s.push(o.get(gr)));break;case"delete":R(e)||(s.push(o.get(ct)),_t(e)&&s.push(o.get(gr)));break;case"set":_t(e)&&s.push(o.get(ct));break}if(s.length===1)s[0]&&vr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);vr(Kr(l))}}function vr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Ia(r);for(const r of n)r.computed||Ia(r)}function Ia(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const vs=Dr("__proto__,__v_isRef,__isVue"),Di=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yr)),bs=Xr(),ys=Xr(!1,!0),xs=Xr(!0),Ta=ws();function ws(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){It();const r=B(this)[t].apply(this,n);return Tt(),r}}),e}function Xr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?zs:Wi:t?Yi:Bi).get(r))return r;const o=R(r);if(!e&&o&&$(Ta,a))return Reflect.get(Ta,a,i);const s=Reflect.get(r,a,i);return(Yr(a)?Di.has(a):vs(a))||(e||pe(r,"get",a),t)?s:le(s)?o&&Wr(a)?s:s.value:J(s)?e?Ki(s):Jr(s):s}}const _s=Hi(),ks=Hi(!0);function Hi(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&le(o)&&!le(a))return!1;if(!e&&(!br(a)&&!Bt(a)&&(o=B(o),a=B(a)),!R(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=R(n)&&Wr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?In(a,o)&&$e(n,"set",r,a):$e(n,"add",r,a)),l}}function As(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&$e(e,"delete",t,void 0),r}function Os(e,t){const n=Reflect.has(e,t);return(!Yr(t)||!Di.has(t))&&pe(e,"has",t),n}function Es(e){return pe(e,"iterate",R(e)?"length":ct),Reflect.ownKeys(e)}const Ui={get:bs,set:_s,deleteProperty:As,has:Os,ownKeys:Es},Cs={get:xs,set(e,t){return!0},deleteProperty(e,t){return!0}},Ps=fe({},Ui,{get:ys,set:ks}),Vr=e=>e,Yn=e=>Reflect.getPrototypeOf(e);function ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&pe(a,"get",t),pe(a,"get",i));const{has:o}=Yn(a),s=r?Vr:n?ea:Qr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function fn(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function cn(e,t=!1){return e=e.__v_raw,!t&&pe(B(e),"iterate",ct),Reflect.get(e,"size",e)}function Na(e){e=B(e);const t=B(this);return Yn(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function Ma(e,t){t=B(t);const n=B(this),{has:r,get:a}=Yn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?In(t,o)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function Fa(e){const t=B(this),{has:n,get:r}=Yn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&$e(t,"delete",e,void 0),i}function Ra(){const e=B(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function un(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?Vr:e?ea:Qr;return!e&&pe(s,"iterate",ct),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function dn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=_t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Vr:t?ea:Qr;return!t&&pe(i,"iterate",l?gr:ct),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function Ss(){const e={get(i){return ln(this,i)},get size(){return cn(this)},has:fn,add:Na,set:Ma,delete:Fa,clear:Ra,forEach:un(!1,!1)},t={get(i){return ln(this,i,!1,!0)},get size(){return cn(this)},has:fn,add:Na,set:Ma,delete:Fa,clear:Ra,forEach:un(!1,!0)},n={get(i){return ln(this,i,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:un(!0,!1)},r={get(i){return ln(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=dn(i,!1,!1),n[i]=dn(i,!0,!1),t[i]=dn(i,!1,!0),r[i]=dn(i,!0,!0)}),[e,n,t,r]}const[Is,Ts,Ns,Ms]=Ss();function Gr(e,t){const n=t?e?Ms:Ns:e?Ts:Is;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Fs={get:Gr(!1,!1)},Rs={get:Gr(!1,!0)},Ls={get:Gr(!0,!1)},Bi=new WeakMap,Yi=new WeakMap,Wi=new WeakMap,zs=new WeakMap;function js(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $s(e){return e.__v_skip||!Object.isExtensible(e)?0:js(fs(e))}function Jr(e){return Bt(e)?e:Zr(e,!1,Ui,Fs,Bi)}function Ds(e){return Zr(e,!1,Ps,Rs,Yi)}function Ki(e){return Zr(e,!0,Cs,Ls,Wi)}function Zr(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=$s(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function kt(e){return Bt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function br(e){return!!(e&&e.__v_isShallow)}function qi(e){return kt(e)||Bt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Xi(e){return Tn(e,"__v_skip",!0),e}const Qr=e=>J(e)?Jr(e):e,ea=e=>J(e)?Ki(e):e;function Hs(e){Xe&&xe&&(e=B(e),$i(e.dep||(e.dep=Kr())))}function Us(e,t){e=B(e),e.dep&&vr(e.dep)}function le(e){return!!(e&&e.__v_isRef===!0)}function Bs(e){return le(e)?e.value:e}const Ys={get:(e,t,n)=>Bs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Vi(e){return kt(e)?e:new Proxy(e,Ys)}var Gi;class Ws{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Gi]=!1,this._dirty=!0,this.effect=new qr(t,()=>{this._dirty||(this._dirty=!0,Us(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Hs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Gi="__v_isReadonly";function Ks(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new Ws(r,a,i||!a,n)}function Ve(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Wn(i,t,n)}return a}function Ee(e,t,n,r){if(L(e)){const i=Ve(e,t,n,r);return i&&Ni(i)&&i.catch(o=>{Wn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Wn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ve(l,null,10,[e,o,s]);return}}qs(e,n,a,r)}function qs(e,t,n,r=!0){console.error(e)}let Yt=!1,yr=!1;const ie=[];let Me=0;const At=[];let je=null,it=0;const Ji=Promise.resolve();let ta=null;function Xs(e){const t=ta||Ji;return e?t.then(this?e.bind(this):e):t}function Vs(e){let t=Me+1,n=ie.length;for(;t<n;){const r=t+n>>>1;Wt(ie[r])<e?t=r+1:n=r}return t}function na(e){(!ie.length||!ie.includes(e,Yt&&e.allowRecurse?Me+1:Me))&&(e.id==null?ie.push(e):ie.splice(Vs(e.id),0,e),Zi())}function Zi(){!Yt&&!yr&&(yr=!0,ta=Ji.then(eo))}function Gs(e){const t=ie.indexOf(e);t>Me&&ie.splice(t,1)}function Js(e){R(e)?At.push(...e):(!je||!je.includes(e,e.allowRecurse?it+1:it))&&At.push(e),Zi()}function La(e,t=Yt?Me+1:0){for(;t<ie.length;t++){const n=ie[t];n&&n.pre&&(ie.splice(t,1),t--,n())}}function Qi(e){if(At.length){const t=[...new Set(At)];if(At.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>Wt(n)-Wt(r)),it=0;it<je.length;it++)je[it]();je=null,it=0}}const Wt=e=>e.id==null?1/0:e.id,Zs=(e,t)=>{const n=Wt(e)-Wt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function eo(e){yr=!1,Yt=!0,ie.sort(Zs);const t=Oe;try{for(Me=0;Me<ie.length;Me++){const n=ie[Me];n&&n.active!==!1&&Ve(n,null,14)}}finally{Me=0,ie.length=0,Qi(),Yt=!1,ta=null,(ie.length||At.length)&&eo()}}function Qs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||X;v&&(a=n.map(k=>ne(k)?k.trim():k)),m&&(a=n.map(Ri))}let s,l=r[s=rr(t)]||r[s=rr(Re(t))];!l&&i&&(l=r[s=rr(St(t))]),l&&Ee(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(u,e,6,a)}}function to(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=to(u,t,!0);d&&(s=!0,fe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(J(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):fe(o,i),J(e)&&r.set(e,o),o)}function Kn(e,t){return!e||!Dn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,St(t))||$(e,t))}let _e=null,no=null;function Nn(e){const t=_e;return _e=e,no=e&&e.type.__scopeId||null,t}function el(e,t=_e,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Wa(-1);const i=Nn(t);let o;try{o=e(...a)}finally{Nn(i),r._d&&Wa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:v,setupState:k,ctx:F,inheritAttrs:N}=e;let D,w;const C=Nn(e);try{if(n.shapeFlag&4){const z=a||r;D=Ne(d.call(z,z,m,i,k,v,F)),w=l}else{const z=t;D=Ne(z.length>1?z(i,{attrs:l,slots:s,emit:u}):z(i,null)),w=t.props?l:tl(l)}}catch(z){$t.length=0,Wn(z,e,1),D=V(Kt)}let E=D;if(w&&N!==!1){const z=Object.keys(w),{shapeFlag:H}=E;z.length&&H&7&&(o&&z.some(Ur)&&(w=nl(w,o)),E=Et(E,w))}return n.dirs&&(E=Et(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),D=E,Nn(C),D}const tl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Dn(n))&&((t||(t={}))[n]=e[n]);return t},nl=(e,t)=>{const n={};for(const r in e)(!Ur(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function rl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?za(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Kn(u,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?za(r,o,u):!0:!!o;return!1}function za(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Kn(n,i))return!0}return!1}function al({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const il=e=>e.__isSuspense;function ol(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Js(e)}function sl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function An(e,t,n=!1){const r=re||_e;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const mn={};function On(e,t,n){return ro(e,t,n)}function ro(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=X){const s=re;let l,u=!1,d=!1;if(le(e)?(l=()=>e.value,u=br(e)):kt(e)?(l=()=>e,r=!0):R(e)?(d=!0,u=e.some(E=>kt(E)||br(E)),l=()=>e.map(E=>{if(le(E))return E.value;if(kt(E))return bt(E);if(L(E))return Ve(E,s,2)})):L(e)?t?l=()=>Ve(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ee(e,s,3,[v])}:l=Oe,t&&r){const E=l;l=()=>bt(E())}let m,v=E=>{m=w.onStop=()=>{Ve(E,s,4)}},k;if(Xt)if(v=Oe,t?n&&Ee(t,s,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const E=rf();k=E.__watcherHandles||(E.__watcherHandles=[])}else return Oe;let F=d?new Array(e.length).fill(mn):mn;const N=()=>{if(!!w.active)if(t){const E=w.run();(r||u||(d?E.some((z,H)=>In(z,F[H])):In(E,F)))&&(m&&m(),Ee(t,s,3,[E,F===mn?void 0:d&&F[0]===mn?[]:F,v]),F=E)}else w.run()};N.allowRecurse=!!t;let D;a==="sync"?D=N:a==="post"?D=()=>de(N,s&&s.suspense):(N.pre=!0,s&&(N.id=s.uid),D=()=>na(N));const w=new qr(l,D);t?n?N():F=w.run():a==="post"?de(w.run.bind(w),s&&s.suspense):w.run();const C=()=>{w.stop(),s&&s.scope&&Br(s.scope.effects,w)};return k&&k.push(C),C}function ll(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?ao(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=re;Ct(this);const s=ro(a,i.bind(r),n);return o?Ct(o):ut(),s}function ao(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function bt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))bt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)bt(e[n],t);else if(Ti(e)||_t(e))e.forEach(n=>{bt(n,t)});else if(Fi(e))for(const n in e)bt(e[n],t);return e}function ra(e){return L(e)?{setup:e,name:e.name}:e}const En=e=>!!e.type.__asyncLoader,io=e=>e.type.__isKeepAlive;function fl(e,t){oo(e,"a",t)}function cl(e,t){oo(e,"da",t)}function oo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)io(a.parent.vnode)&&ul(r,t,n,a),a=a.parent}}function ul(e,t,n,r){const a=qn(t,e,r,!0);so(()=>{Br(r[t],a)},n)}function qn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;It(),Ct(n);const s=Ee(t,n,e,o);return ut(),Tt(),s});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=re)=>(!Xt||e==="sp")&&qn(e,(...r)=>t(...r),n),dl=Be("bm"),ml=Be("m"),pl=Be("bu"),hl=Be("u"),gl=Be("bum"),so=Be("um"),vl=Be("sp"),bl=Be("rtg"),yl=Be("rtc");function xl(e,t=re){qn("ec",e,t)}function nt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(It(),Ee(l,n,8,[e.el,s,e,t]),Tt())}}const lo="components";function wl(e,t){return kl(lo,e,!0,t)||e}const _l=Symbol();function kl(e,t,n=!0,r=!1){const a=_e||re;if(a){const i=a.type;if(e===lo){const s=ef(i,!1);if(s&&(s===t||s===Re(t)||s===Bn(Re(t))))return i}const o=ja(a[e]||i[e],t)||ja(a.appContext[e],t);return!o&&r?i:o}}function ja(e,t){return e&&(e[t]||e[Re(t)]||e[Bn(Re(t))])}const xr=e=>e?yo(e)?sa(e)||e.proxy:xr(e.parent):null,jt=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xr(e.parent),$root:e=>xr(e.root),$emit:e=>e.emit,$options:e=>aa(e),$forceUpdate:e=>e.f||(e.f=()=>na(e.update)),$nextTick:e=>e.n||(e.n=Xs.bind(e.proxy)),$watch:e=>ll.bind(e)}),or=(e,t)=>e!==X&&!e.__isScriptSetup&&$(e,t),Al={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(or(r,t))return o[t]=1,r[t];if(a!==X&&$(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&$(u,t))return o[t]=3,i[t];if(n!==X&&$(n,t))return o[t]=4,n[t];wr&&(o[t]=0)}}const d=jt[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return or(a,t)?(a[t]=n,!0):r!==X&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==X&&$(e,o)||or(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(jt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let wr=!0;function Ol(e){const t=aa(e),n=e.proxy,r=e.ctx;wr=!1,t.beforeCreate&&$a(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:F,activated:N,deactivated:D,beforeDestroy:w,beforeUnmount:C,destroyed:E,unmounted:z,render:H,renderTracked:ce,renderTriggered:ae,errorCaptured:be,serverPrefetch:ge,expose:Le,inheritAttrs:Mt,components:rn,directives:an,filters:er}=t;if(u&&El(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const Y=o[Z];L(Y)&&(r[Z]=Y.bind(n))}if(a){const Z=a.call(n,n);J(Z)&&(e.data=Jr(Z))}if(wr=!0,i)for(const Z in i){const Y=i[Z],et=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Oe,on=!L(Y)&&L(Y.set)?Y.set.bind(n):Oe,tt=ve({get:et,set:on});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Ce=>tt.value=Ce})}if(s)for(const Z in s)fo(s[Z],r,n,Z);if(l){const Z=L(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(Y=>{sl(Y,Z[Y])})}d&&$a(d,e,"c");function oe(Z,Y){R(Y)?Y.forEach(et=>Z(et.bind(n))):Y&&Z(Y.bind(n))}if(oe(dl,m),oe(ml,v),oe(pl,k),oe(hl,F),oe(fl,N),oe(cl,D),oe(xl,be),oe(yl,ce),oe(bl,ae),oe(gl,C),oe(so,z),oe(vl,ge),R(Le))if(Le.length){const Z=e.exposed||(e.exposed={});Le.forEach(Y=>{Object.defineProperty(Z,Y,{get:()=>n[Y],set:et=>n[Y]=et})})}else e.exposed||(e.exposed={});H&&e.render===Oe&&(e.render=H),Mt!=null&&(e.inheritAttrs=Mt),rn&&(e.components=rn),an&&(e.directives=an)}function El(e,t,n=Oe,r=!1){R(e)&&(e=_r(e));for(const a in e){const i=e[a];let o;J(i)?"default"in i?o=An(i.from||a,i.default,!0):o=An(i.from||a):o=An(i),le(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function $a(e,t,n){Ee(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function fo(e,t,n,r){const a=r.includes(".")?ao(n,r):()=>n[r];if(ne(e)){const i=t[e];L(i)&&On(a,i)}else if(L(e))On(a,e.bind(n));else if(J(e))if(R(e))e.forEach(i=>fo(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&On(a,i,e)}}function aa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>Mn(l,u,o,!0)),Mn(l,t,o)),J(t)&&i.set(t,l),l}function Mn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Mn(e,i,n,!0),a&&a.forEach(o=>Mn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Cl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Cl={data:Da,props:at,emits:at,methods:at,computed:at,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:at,directives:at,watch:Sl,provide:Da,inject:Pl};function Da(e,t){return t?e?function(){return fe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Pl(e,t){return at(_r(e),_r(t))}function _r(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function at(e,t){return e?fe(fe(Object.create(null),e),t):t}function Sl(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=se(e[r],t[r]);return n}function Il(e,t,n,r=!1){const a={},i={};Tn(i,Vn,1),e.propsDefaults=Object.create(null),co(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ds(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Tl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Kn(e.emitsOptions,v))continue;const k=t[v];if(l)if($(i,v))k!==i[v]&&(i[v]=k,u=!0);else{const F=Re(v);a[F]=kr(l,s,F,k,e,!1)}else k!==i[v]&&(i[v]=k,u=!0)}}}else{co(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=St(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=kr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m)&&!0)&&(delete i[m],u=!0)}u&&$e(e,"set","$attrs")}function co(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(kn(l))continue;const u=t[l];let d;a&&$(a,d=Re(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Kn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=B(n),u=s||X;for(let d=0;d<i.length;d++){const m=i[d];n[m]=kr(a,l,m,u[m],e,!$(u,m))}}return o}function kr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(Ct(a),r=u[n]=l.call(null,t),ut())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===St(n))&&(r=!0))}return r}function uo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,k]=uo(m,t,!0);fe(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,wt),wt;if(R(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);Ha(m)&&(o[m]=X)}else if(i)for(const d in i){const m=Re(d);if(Ha(m)){const v=i[d],k=o[m]=R(v)||L(v)?{type:v}:Object.assign({},v);if(k){const F=Ya(Boolean,k.type),N=Ya(String,k.type);k[0]=F>-1,k[1]=N<0||F<N,(F>-1||$(k,"default"))&&s.push(m)}}}const u=[o,s];return J(e)&&r.set(e,u),u}function Ha(e){return e[0]!=="$"}function Ua(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ba(e,t){return Ua(e)===Ua(t)}function Ya(e,t){return R(t)?t.findIndex(n=>Ba(n,e)):L(t)&&Ba(t,e)?0:-1}const mo=e=>e[0]==="_"||e==="$stable",ia=e=>R(e)?e.map(Ne):[Ne(e)],Nl=(e,t,n)=>{if(t._n)return t;const r=el((...a)=>ia(t(...a)),n);return r._c=!1,r},po=(e,t,n)=>{const r=e._ctx;for(const a in e){if(mo(a))continue;const i=e[a];if(L(i))t[a]=Nl(a,i,r);else if(i!=null){const o=ia(i);t[a]=()=>o}}},ho=(e,t)=>{const n=ia(t);e.slots.default=()=>n},Ml=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Tn(t,"_",n)):po(t,e.slots={})}else e.slots={},t&&ho(e,t);Tn(e.slots,Vn,1)},Fl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,po(t,a)),o=t}else t&&(ho(e,t),o={default:1});if(i)for(const s in a)!mo(s)&&!(s in o)&&delete a[s]};function go(){return{app:null,config:{isNativeTag:os,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rl=0;function Ll(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=go(),o=new Set;let s=!1;const l=i.app={_uid:Rl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:af,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const v=V(r,a);return v.appContext=i,d&&t?t(v,u):e(v,u,m),s=!0,l._container=u,u.__vue_app__=l,sa(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function Ar(e,t,n,r,a=!1){if(R(e)){e.forEach((v,k)=>Ar(v,t&&(R(t)?t[k]:t),n,r,a));return}if(En(r)&&!a)return;const i=r.shapeFlag&4?sa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ne(u)?(d[u]=null,$(m,u)&&(m[u]=null)):le(u)&&(u.value=null)),L(l))Ve(l,s,12,[o,d]);else{const v=ne(l),k=le(l);if(v||k){const F=()=>{if(e.f){const N=v?$(m,l)?m[l]:d[l]:l.value;a?R(N)&&Br(N,i):R(N)?N.includes(i)||N.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,de(F,n)):F()}}}const de=ol;function zl(e){return jl(e)}function jl(e,t){const n=ds();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Oe,insertStaticContent:F}=e,N=(f,c,p,g=null,h=null,x=null,A=!1,y=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Rt(f,c)&&(g=sn(f),Ce(f,h,x,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:b,ref:I,shapeFlag:P}=c;switch(b){case Xn:D(f,c,p,g);break;case Kt:w(f,c,p,g);break;case sr:f==null&&C(c,p,g,A);break;case Te:rn(f,c,p,g,h,x,A,y,_);break;default:P&1?H(f,c,p,g,h,x,A,y,_):P&6?an(f,c,p,g,h,x,A,y,_):(P&64||P&128)&&b.process(f,c,p,g,h,x,A,y,_,gt)}I!=null&&h&&Ar(I,f&&f.ref,x,c||f,!c)},D=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},w=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},C=(f,c,p,g)=>{[f.el,f.anchor]=F(f.children,c,p,g,f.el,f.anchor)},E=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=v(f),r(f,p,g),f=h;r(c,p,g)},z=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=v(f),a(f),f=p;a(c)},H=(f,c,p,g,h,x,A,y,_)=>{A=A||c.type==="svg",f==null?ce(c,p,g,h,x,A,y,_):ge(f,c,h,x,A,y,_)},ce=(f,c,p,g,h,x,A,y)=>{let _,b;const{type:I,props:P,shapeFlag:T,transition:M,dirs:j}=f;if(_=f.el=o(f.type,x,P&&P.is,P),T&8?d(_,f.children):T&16&&be(f.children,_,null,g,h,x&&I!=="foreignObject",A,y),j&&nt(f,null,g,"created"),P){for(const U in P)U!=="value"&&!kn(U)&&i(_,U,null,P[U],x,f.children,g,h,ze);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Se(b,g,f)}ae(_,f,f.scopeId,A,g),j&&nt(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;W&&M.beforeEnter(_),r(_,c,p),((b=P&&P.onVnodeMounted)||W||j)&&de(()=>{b&&Se(b,g,f),W&&M.enter(_),j&&nt(f,null,g,"mounted")},h)},ae=(f,c,p,g,h)=>{if(p&&k(f,p),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(h){let x=h.subTree;if(c===x){const A=h.vnode;ae(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},be=(f,c,p,g,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const I=f[b]=y?qe(f[b]):Ne(f[b]);N(null,I,c,p,g,h,x,A,y)}},ge=(f,c,p,g,h,x,A)=>{const y=c.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:I}=c;_|=f.patchFlag&16;const P=f.props||X,T=c.props||X;let M;p&&rt(p,!1),(M=T.onVnodeBeforeUpdate)&&Se(M,p,c,f),I&&nt(c,f,p,"beforeUpdate"),p&&rt(p,!0);const j=h&&c.type!=="foreignObject";if(b?Le(f.dynamicChildren,b,y,p,g,j,x):A||Y(f,c,y,null,p,g,j,x,!1),_>0){if(_&16)Mt(y,c,P,T,p,g,h);else if(_&2&&P.class!==T.class&&i(y,"class",null,T.class,h),_&4&&i(y,"style",P.style,T.style,h),_&8){const W=c.dynamicProps;for(let U=0;U<W.length;U++){const ee=W[U],ye=P[ee],vt=T[ee];(vt!==ye||ee==="value")&&i(y,ee,ye,vt,h,f.children,p,g,ze)}}_&1&&f.children!==c.children&&d(y,c.children)}else!A&&b==null&&Mt(y,c,P,T,p,g,h);((M=T.onVnodeUpdated)||I)&&de(()=>{M&&Se(M,p,c,f),I&&nt(c,f,p,"updated")},g)},Le=(f,c,p,g,h,x,A)=>{for(let y=0;y<c.length;y++){const _=f[y],b=c[y],I=_.el&&(_.type===Te||!Rt(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,I,null,g,h,x,A,!0)}},Mt=(f,c,p,g,h,x,A)=>{if(p!==g){if(p!==X)for(const y in p)!kn(y)&&!(y in g)&&i(f,y,p[y],null,A,c.children,h,x,ze);for(const y in g){if(kn(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,c.children,h,x,ze)}"value"in g&&i(f,"value",p.value,g.value)}},rn=(f,c,p,g,h,x,A,y,_)=>{const b=c.el=f?f.el:s(""),I=c.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:T,slotScopeIds:M}=c;M&&(y=y?y.concat(M):M),f==null?(r(b,p,g),r(I,p,g),be(c.children,p,I,h,x,A,y,_)):P>0&&P&64&&T&&f.dynamicChildren?(Le(f.dynamicChildren,T,p,h,x,A,y),(c.key!=null||h&&c===h.subTree)&&vo(f,c,!0)):Y(f,c,p,I,h,x,A,y,_)},an=(f,c,p,g,h,x,A,y,_)=>{c.slotScopeIds=y,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,A,_):er(c,p,g,h,x,A,_):_a(f,c,_)},er=(f,c,p,g,h,x,A)=>{const y=f.component=Vl(f,g,h);if(io(f)&&(y.ctx.renderer=gt),Gl(y),y.asyncDep){if(h&&h.registerDep(y,oe),!f.el){const _=y.subTree=V(Kt);w(null,_,c,p)}return}oe(y,f,c,p,h,x,A)},_a=(f,c,p)=>{const g=c.component=f.component;if(rl(f,c,p))if(g.asyncDep&&!g.asyncResolved){Z(g,c,p);return}else g.next=c,Gs(g.update),g.update();else c.el=f.el,g.vnode=c},oe=(f,c,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:I,bu:P,u:T,parent:M,vnode:j}=f,W=I,U;rt(f,!1),I?(I.el=j.el,Z(f,I,A)):I=j,P&&ar(P),(U=I.props&&I.props.onVnodeBeforeUpdate)&&Se(U,M,I,j),rt(f,!0);const ee=ir(f),ye=f.subTree;f.subTree=ee,N(ye,ee,m(ye.el),sn(ye),f,h,x),I.el=ee.el,W===null&&al(f,ee.el),T&&de(T,h),(U=I.props&&I.props.onVnodeUpdated)&&de(()=>Se(U,M,I,j),h)}else{let I;const{el:P,props:T}=c,{bm:M,m:j,parent:W}=f,U=En(c);if(rt(f,!1),M&&ar(M),!U&&(I=T&&T.onVnodeBeforeMount)&&Se(I,W,c),rt(f,!0),P&&nr){const ee=()=>{f.subTree=ir(f),nr(P,f.subTree,f,h,null)};U?c.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=ir(f);N(null,ee,p,g,f,h,x),c.el=ee.el}if(j&&de(j,h),!U&&(I=T&&T.onVnodeMounted)){const ee=c;de(()=>Se(I,W,ee),h)}(c.shapeFlag&256||W&&En(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new qr(y,()=>na(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,rt(f,!0),b()},Z=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Tl(f,c.props,g,p),Fl(f,c.children,p),It(),La(),Tt()},Y=(f,c,p,g,h,x,A,y,_=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,P=c.children,{patchFlag:T,shapeFlag:M}=c;if(T>0){if(T&128){on(b,P,p,g,h,x,A,y,_);return}else if(T&256){et(b,P,p,g,h,x,A,y,_);return}}M&8?(I&16&&ze(b,h,x),P!==b&&d(p,P)):I&16?M&16?on(b,P,p,g,h,x,A,y,_):ze(b,h,x,!0):(I&8&&d(p,""),M&16&&be(P,p,g,h,x,A,y,_))},et=(f,c,p,g,h,x,A,y,_)=>{f=f||wt,c=c||wt;const b=f.length,I=c.length,P=Math.min(b,I);let T;for(T=0;T<P;T++){const M=c[T]=_?qe(c[T]):Ne(c[T]);N(f[T],M,p,null,h,x,A,y,_)}b>I?ze(f,h,x,!0,!1,P):be(c,p,g,h,x,A,y,_,P)},on=(f,c,p,g,h,x,A,y,_)=>{let b=0;const I=c.length;let P=f.length-1,T=I-1;for(;b<=P&&b<=T;){const M=f[b],j=c[b]=_?qe(c[b]):Ne(c[b]);if(Rt(M,j))N(M,j,p,null,h,x,A,y,_);else break;b++}for(;b<=P&&b<=T;){const M=f[P],j=c[T]=_?qe(c[T]):Ne(c[T]);if(Rt(M,j))N(M,j,p,null,h,x,A,y,_);else break;P--,T--}if(b>P){if(b<=T){const M=T+1,j=M<I?c[M].el:g;for(;b<=T;)N(null,c[b]=_?qe(c[b]):Ne(c[b]),p,j,h,x,A,y,_),b++}}else if(b>T)for(;b<=P;)Ce(f[b],h,x,!0),b++;else{const M=b,j=b,W=new Map;for(b=j;b<=T;b++){const me=c[b]=_?qe(c[b]):Ne(c[b]);me.key!=null&&W.set(me.key,b)}let U,ee=0;const ye=T-j+1;let vt=!1,Oa=0;const Ft=new Array(ye);for(b=0;b<ye;b++)Ft[b]=0;for(b=M;b<=P;b++){const me=f[b];if(ee>=ye){Ce(me,h,x,!0);continue}let Pe;if(me.key!=null)Pe=W.get(me.key);else for(U=j;U<=T;U++)if(Ft[U-j]===0&&Rt(me,c[U])){Pe=U;break}Pe===void 0?Ce(me,h,x,!0):(Ft[Pe-j]=b+1,Pe>=Oa?Oa=Pe:vt=!0,N(me,c[Pe],p,null,h,x,A,y,_),ee++)}const Ea=vt?$l(Ft):wt;for(U=Ea.length-1,b=ye-1;b>=0;b--){const me=j+b,Pe=c[me],Ca=me+1<I?c[me+1].el:g;Ft[b]===0?N(null,Pe,p,Ca,h,x,A,y,_):vt&&(U<0||b!==Ea[U]?tt(Pe,p,Ca,2):U--)}}},tt=(f,c,p,g,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){tt(f.component.subTree,c,p,g);return}if(b&128){f.suspense.move(c,p,g);return}if(b&64){A.move(f,c,p,gt);return}if(A===Te){r(x,c,p);for(let P=0;P<_.length;P++)tt(_[P],c,p,g);r(f.anchor,c,p);return}if(A===sr){E(f,c,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,c,p),de(()=>y.enter(x),h);else{const{leave:P,delayLeave:T,afterLeave:M}=y,j=()=>r(x,c,p),W=()=>{P(x,()=>{j(),M&&M()})};T?T(x,j,W):W()}else r(x,c,p)},Ce=(f,c,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:I,patchFlag:P,dirs:T}=f;if(y!=null&&Ar(y,null,p,f,!0),I&256){c.ctx.deactivate(f);return}const M=I&1&&T,j=!En(f);let W;if(j&&(W=A&&A.onVnodeBeforeUnmount)&&Se(W,c,f),I&6)Qo(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}M&&nt(f,null,c,"beforeUnmount"),I&64?f.type.remove(f,c,p,h,gt,g):b&&(x!==Te||P>0&&P&64)?ze(b,c,p,!1,!0):(x===Te&&P&384||!h&&I&16)&&ze(_,c,p),g&&ka(f)}(j&&(W=A&&A.onVnodeUnmounted)||M)&&de(()=>{W&&Se(W,c,f),M&&nt(f,null,c,"unmounted")},p)},ka=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Te){Zo(p,g);return}if(c===sr){z(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},Zo=(f,c)=>{let p;for(;f!==c;)p=v(f),a(f),f=p;a(c)},Qo=(f,c,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&ar(g),h.stop(),x&&(x.active=!1,Ce(A,f,c,p)),y&&de(y,c),de(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},ze=(f,c,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Ce(f[A],c,p,g,h)},sn=f=>f.shapeFlag&6?sn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Aa=(f,c,p)=>{f==null?c._vnode&&Ce(c._vnode,null,null,!0):N(c._vnode||null,f,c,null,null,null,p),La(),Qi(),c._vnode=f},gt={p:N,um:Ce,m:tt,r:ka,mt:er,mc:be,pc:Y,pbc:Le,n:sn,o:e};let tr,nr;return t&&([tr,nr]=t(gt)),{render:Aa,hydrate:tr,createApp:Ll(Aa,tr)}}function rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function vo(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qe(a[i]),s.el=o.el),n||vo(o,s)),s.type===Xn&&(s.el=o.el)}}function $l(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Dl=e=>e.__isTeleport,Te=Symbol(void 0),Xn=Symbol(void 0),Kt=Symbol(void 0),sr=Symbol(void 0),$t=[];let ke=null;function pt(e=!1){$t.push(ke=e?null:[])}function Hl(){$t.pop(),ke=$t[$t.length-1]||null}let qt=1;function Wa(e){qt+=e}function Ul(e){return e.dynamicChildren=qt>0?ke||wt:null,Hl(),qt>0&&ke&&ke.push(e),e}function ht(e,t,n,r,a,i){return Ul(G(e,t,n,r,a,i,!0))}function Or(e){return e?e.__v_isVNode===!0:!1}function Rt(e,t){return e.type===t.type&&e.key===t.key}const Vn="__vInternal",bo=({key:e})=>e!=null?e:null,Cn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ne(e)||le(e)||L(e)?{i:_e,r:e,k:t,f:!!n}:e:null;function G(e,t=null,n=null,r=0,a=null,i=e===Te?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bo(t),ref:t&&Cn(t),scopeId:no,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:_e};return s?(oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),qt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const V=Bl;function Bl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===_l)&&(e=Kt),Or(e)){const s=Et(e,t,!0);return n&&oa(s,n),qt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(tf(e)&&(e=e.__vccOpts),t){t=Yl(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=$n(s)),J(l)&&(qi(l)&&!R(l)&&(l=fe({},l)),t.style=Hr(l))}const o=ne(e)?1:il(e)?128:Dl(e)?64:J(e)?4:L(e)?2:0;return G(e,t,n,r,a,o,i,!0)}function Yl(e){return e?qi(e)||Vn in e?fe({},e):e:null}function Et(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Kl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&bo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Cn(t)):[a,Cn(t)]:Cn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Wl(e=" ",t=0){return V(Xn,null,e,t)}function Ne(e){return e==null||typeof e=="boolean"?V(Kt):R(e)?V(Te,null,e.slice()):typeof e=="object"?qe(e):V(Xn,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Vn in t)?t._ctx=_e:a===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),r&64?(n=16,t=[Wl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=$n([t.class,r.class]));else if(a==="style")t.style=Hr([t.style,r.style]);else if(Dn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Ee(e,t,7,[n,r])}const ql=go();let Xl=0;function Vl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ql,i={uid:Xl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uo(r,a),emitsOptions:to(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Qs.bind(null,i),e.ce&&e.ce(i),i}let re=null;const Ct=e=>{re=e,e.scope.on()},ut=()=>{re&&re.scope.off(),re=null};function yo(e){return e.vnode.shapeFlag&4}let Xt=!1;function Gl(e,t=!1){Xt=t;const{props:n,children:r}=e.vnode,a=yo(e);Il(e,n,a,t),Ml(e,r);const i=a?Jl(e,t):void 0;return Xt=!1,i}function Jl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Xi(new Proxy(e.ctx,Al));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ql(e):null;Ct(e),It();const i=Ve(r,e,0,[e.props,a]);if(Tt(),ut(),Ni(i)){if(i.then(ut,ut),t)return i.then(o=>{Ka(e,o,t)}).catch(o=>{Wn(o,e,0)});e.asyncDep=i}else Ka(e,i,t)}else xo(e,t)}function Ka(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Vi(t)),xo(e,n)}let qa;function xo(e,t,n){const r=e.type;if(!e.render){if(!t&&qa&&!r.render){const a=r.template||aa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=qa(a,u)}}e.render=r.render||Oe}Ct(e),It(),Ol(e),Tt(),ut()}function Zl(e){return new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}})}function Ql(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Zl(e))},slots:e.slots,emit:e.emit,expose:t}}function sa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vi(Xi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in jt)return jt[n](e)},has(t,n){return n in t||n in jt}}))}function ef(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function tf(e){return L(e)&&"__vccOpts"in e}const ve=(e,t)=>Ks(e,t,Xt);function wo(e,t,n){const r=arguments.length;return r===2?J(t)&&!R(t)?Or(t)?V(e,null,[t]):V(e,t):V(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Or(n)&&(n=[n]),V(e,t,n))}const nf=Symbol(""),rf=()=>An(nf),af="3.2.45",of="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,Xa=ot&&ot.createElement("template"),sf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(of,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Xa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Xa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function lf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ff(e,t,n){const r=e.style,a=ne(n);if(n&&!a){for(const i in n)Er(r,i,n[i]);if(t&&!ne(t))for(const i in t)n[i]==null&&Er(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Va=/\s*!important$/;function Er(e,t,n){if(R(n))n.forEach(r=>Er(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=cf(e,t);Va.test(n)?e.setProperty(St(r),n.replace(Va,""),"important"):e[r]=n}}const Ga=["Webkit","Moz","ms"],lr={};function cf(e,t){const n=lr[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return lr[t]=r;r=Bn(r);for(let a=0;a<Ga.length;a++){const i=Ga[a]+r;if(i in e)return lr[t]=i}return t}const Ja="http://www.w3.org/1999/xlink";function uf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ja,t.slice(6,t.length)):e.setAttributeNS(Ja,t,n);else{const i=is(t);n==null||i&&!Si(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function df(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Si(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function mf(e,t,n,r){e.addEventListener(t,n,r)}function pf(e,t,n,r){e.removeEventListener(t,n,r)}function hf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=gf(t);if(r){const u=i[t]=yf(r,a);mf(e,s,u,l)}else o&&(pf(e,s,o,l),i[t]=void 0)}}const Za=/(?:Once|Passive|Capture)$/;function gf(e){let t;if(Za.test(e)){t={};let r;for(;r=e.match(Za);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),t]}let fr=0;const vf=Promise.resolve(),bf=()=>fr||(vf.then(()=>fr=0),fr=Date.now());function yf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(xf(r,n.value),t,5,[r])};return n.value=e,n.attached=bf(),n}function xf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Qa=/^on[a-z]/,wf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?lf(e,r,a):t==="style"?ff(e,n,r):Dn(t)?Ur(t)||hf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_f(e,t,r,a))?df(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),uf(e,t,r,a))};function _f(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Qa.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Qa.test(t)&&ne(n)?!1:t in e}const kf=fe({patchProp:wf},sf);let ei;function Af(){return ei||(ei=zl(kf))}const Of=(...e)=>{const t=Af().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ef(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Ef(e){return ne(e)?document.querySelector(e):e}const Cf="/vue-porfolio/assets/logo.d41e1242.svg";const Pf=["href"],Sf={__name:"CLink",props:{href:{type:String,required:!0},linkText:{type:String,required:!0},classes:{type:String}},setup(e){return(t,n)=>(pt(),ht("a",{class:$n(e.classes),href:e.href},ft(e.linkText),11,Pf))}},If={class:"navbar bg-secondary bg-opacity-50"},Tf={class:"container"},Nf=G("a",{class:"navbar-brand",href:"#"},[G("img",{alt:"Dana logo",src:Cf,width:"55"})],-1),Mf={class:"navbar-nav"},Ff={class:"nav-item"},Rf={__name:"NavBar",props:{},setup(e){return(t,n)=>(pt(),ht("nav",If,[G("div",Tf,[Nf,G("ul",Mf,[G("li",Ff,[V(Sf,{classes:"nav-link",href:"about-me",linkText:"About me"})])])])]))}};const Lf={__name:"PageTitle",props:{title:{type:String,required:!0}},setup(e){return(t,n)=>(pt(),ht("h1",null,ft(e.title),1))}};const zf={class:"masthead"},jf={class:"container h-100"},$f={class:"row h-100 align-items-end"},Df={class:"col-12 text-center"},Hf={class:"lead"},Uf={__name:"MastHead",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0}},setup(e){return(t,n)=>(pt(),ht("header",zf,[G("div",jf,[G("div",$f,[G("div",Df,[V(Lf,{title:e.title},null,8,["title"]),G("p",Hf,ft(e.subtitle),1)])])])]))}};const Bf=["src","alt"],ti={__name:"Image",props:{url:{type:String,required:!0},alt:{type:String,required:!0}},setup(e){return(t,n)=>(pt(),ht("img",{src:e.url,class:"img-fluid",alt:e.alt},null,8,Bf))}};const Yf={class:"container footer-wrapper d-flex flex-column align-items-center"},Wf={class:"footer-title title-section"},Kf={class:"footer-contact d-flex flex-column align-items-center"},qf={class:"footer-contact-emmail"},Xf={class:"footer-contact-phone"},Vf={class:"footer-social d-flex justify-content-around w-100"},Gf={class:"footer-logo"},Jf=G("div",{class:"footer-copyright"}," \xA9 DANA HEIMANN 2023 ",-1),Zf={__name:"Footer",props:{title:{type:String,required:!0},phone:{type:String,required:!0},email:{type:String,required:!0},image:{type:Object}},setup(e){return(t,n)=>{const r=wl("font-awesome-icon");return pt(),ht("footer",null,[V(ti,{class:"footer-image",alt:e.image.alt,url:e.image.url},null,8,["alt","url"]),G("section",Yf,[G("h2",Wf,ft(e.title),1),G("div",Kf,[G("p",qf,ft(e.email),1),G("p",Xf,ft(e.phone),1)]),G("div",Vf,[V(r,{icon:"fa-brands fa-linkedin",size:"2x"}),V(r,{icon:"fa-brands fa-dribbble",size:"2x"}),V(r,{icon:"fa-brands fa-behance",size:"2x"}),V(r,{icon:"fa-brands fa-github",size:"2x"}),V(r,{icon:"fa-brands fa-instagram",size:"2x"}),V(r,{icon:"fa-brands fa-twitter",size:"2x"})]),G("div",Gf,[V(ti,{alt:"Logo dana heimann",url:"/logo.svg"})]),Jf])])}}};const Qf={__name:"App",setup(e){const t="DANA HEIMANN",n="UX/UI & VISUAL DESIGNER",r=`I\u2019m a UX/UI and Visual Designer from New York, now based in Southern Spain.
I bring my love of adventure to my work by always staying curious, learning from others, and looking forward to what\u2019s next. As a passionate artist and designer with innovative ideas, I can work with anyone and on any project, contributing a fresh perspective and helping teams gain forward momentum.`,a={image:{url:"/images/footer2500.jpg",alt:"Project image alt"}};return(i,o)=>(pt(),ht(Te,null,[V(Rf),V(Uf,{title:t,subtitle:n}),G("main",null,[G("section",{class:"container intro-text-section"},[G("div",{class:"row justify-content-center"},[G("div",{class:"col-8"},[G("p",null,ft(r))])])])]),V(Zf,{image:a.image,title:"Get in touch",email:"DANA.C.HEIMANN@GMAIL.COM",phone:"+34 658 68 86 37"},null,8,["image"])],64))}};function ni(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ni(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ni(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fn(e){return Fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fn(e)}function ec(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ri(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function tc(e,t,n){return t&&ri(e.prototype,t),n&&ri(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function la(e,t){return rc(e)||ic(e,t)||_o(e,t)||sc()}function en(e){return nc(e)||ac(e)||_o(e)||oc()}function nc(e){if(Array.isArray(e))return Cr(e)}function rc(e){if(Array.isArray(e))return e}function ac(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ic(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function _o(e,t){if(!!e){if(typeof e=="string")return Cr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cr(e,t)}}function Cr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ai=function(){},fa={},ko={},Ao=null,Oo={mark:ai,measure:ai};try{typeof window<"u"&&(fa=window),typeof document<"u"&&(ko=document),typeof MutationObserver<"u"&&(Ao=MutationObserver),typeof performance<"u"&&(Oo=performance)}catch{}var lc=fa.navigator||{},ii=lc.userAgent,oi=ii===void 0?"":ii,Je=fa,q=ko,si=Ao,pn=Oo;Je.document;var Ye=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Eo=~oi.indexOf("MSIE")||~oi.indexOf("Trident/"),hn,gn,vn,bn,yn,De="___FONT_AWESOME___",Pr=16,Co="fa",Po="svg-inline--fa",dt="data-fa-i2svg",Sr="data-fa-pseudo-element",fc="data-fa-pseudo-element-pending",ca="data-prefix",ua="data-icon",li="fontawesome-i2svg",cc="async",uc=["HTML","HEAD","STYLE","SCRIPT"],So=function(){try{return!0}catch{return!1}}(),K="classic",Q="sharp",da=[K,Q];function tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Vt=tn((hn={},te(hn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(hn,Q,{fa:"solid",fass:"solid","fa-solid":"solid"}),hn)),Gt=tn((gn={},te(gn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(gn,Q,{solid:"fass"}),gn)),Jt=tn((vn={},te(vn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(vn,Q,{fass:"fa-solid"}),vn)),dc=tn((bn={},te(bn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(bn,Q,{"fa-solid":"fass"}),bn)),mc=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Io="fa-layers-text",pc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,hc=tn((yn={},te(yn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(yn,Q,{900:"fass"}),yn)),To=[1,2,3,4,5,6,7,8,9,10],gc=To.concat([11,12,13,14,15,16,17,18,19,20]),vc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],st={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zt=new Set;Object.keys(Gt[K]).map(Zt.add.bind(Zt));Object.keys(Gt[Q]).map(Zt.add.bind(Zt));var bc=[].concat(da,en(Zt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",st.GROUP,st.SWAP_OPACITY,st.PRIMARY,st.SECONDARY]).concat(To.map(function(e){return"".concat(e,"x")})).concat(gc.map(function(e){return"w-".concat(e)})),Dt=Je.FontAwesomeConfig||{};function yc(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function xc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var wc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wc.forEach(function(e){var t=la(e,2),n=t[0],r=t[1],a=xc(yc(n));a!=null&&(Dt[r]=a)})}var No={styleDefault:"solid",familyDefault:"classic",cssPrefix:Co,replacementClass:Po,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dt.familyPrefix&&(Dt.cssPrefix=Dt.familyPrefix);var Pt=O(O({},No),Dt);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var S={};Object.keys(No).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Pt[e]=n,Ht.forEach(function(r){return r(S)})},get:function(){return Pt[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,Ht.forEach(function(n){return n(S)})},get:function(){return Pt.cssPrefix}});Je.FontAwesomeConfig=S;var Ht=[];function _c(e){return Ht.push(e),function(){Ht.splice(Ht.indexOf(e),1)}}var Ke=Pr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kc(e){if(!(!e||!Ye)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var Ac="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qt(){for(var e=12,t="";e-- >0;)t+=Ac[Math.random()*62|0];return t}function Nt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ma(e){return e.classList?Nt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Mo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Mo(e[n]),'" ')},"").trim()}function Gn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function pa(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function Ec(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Cc(e){var t=e.transform,n=e.width,r=n===void 0?Pr:n,a=e.height,i=a===void 0?Pr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Eo?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Pc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Fo(){var e=Co,t=Po,n=S.cssPrefix,r=S.replacementClass,a=Pc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var fi=!1;function cr(){S.autoAddCss&&!fi&&(kc(Fo()),fi=!0)}var Sc={mixout:function(){return{dom:{css:Fo,insertCss:cr}}},hooks:function(){return{beforeDOMElementCreation:function(){cr()},beforeI2svg:function(){cr()}}}},He=Je||{};He[De]||(He[De]={});He[De].styles||(He[De].styles={});He[De].hooks||(He[De].hooks={});He[De].shims||(He[De].shims=[]);var Ae=He[De],Ro=[],Ic=function e(){q.removeEventListener("DOMContentLoaded",e),Rn=1,Ro.map(function(t){return t()})},Rn=!1;Ye&&(Rn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Rn||q.addEventListener("DOMContentLoaded",Ic));function Tc(e){!Ye||(Rn?setTimeout(e,0):Ro.push(e))}function nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Mo(e):"<".concat(t," ").concat(Oc(r),">").concat(i.map(nn).join(""),"</").concat(t,">")}function ci(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Nc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},ur=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Nc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Mc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ir(e){var t=Mc(e);return t.length===1?t[0].toString(16):null}function Fc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ui(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Tr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ui(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,ui(t)):Ae.styles[e]=O(O({},Ae.styles[e]||{}),i),e==="fas"&&Tr("fa",t)}var xn,wn,_n,yt=Ae.styles,Rc=Ae.shims,Lc=(xn={},te(xn,K,Object.values(Jt[K])),te(xn,Q,Object.values(Jt[Q])),xn),ha=null,Lo={},zo={},jo={},$o={},Do={},zc=(wn={},te(wn,K,Object.keys(Vt[K])),te(wn,Q,Object.keys(Vt[Q])),wn);function jc(e){return~bc.indexOf(e)}function $c(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!jc(a)?a:null}var Ho=function(){var t=function(i){return ur(yt,function(o,s,l){return o[l]=ur(s,i,{}),o},{})};Lo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),zo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Do=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in yt||S.autoFetchSvg,r=ur(Rc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});jo=r.names,$o=r.unicodes,ha=Jn(S.styleDefault,{family:S.familyDefault})};_c(function(e){ha=Jn(e.styleDefault,{family:S.familyDefault})});Ho();function ga(e,t){return(Lo[e]||{})[t]}function Dc(e,t){return(zo[e]||{})[t]}function lt(e,t){return(Do[e]||{})[t]}function Uo(e){return jo[e]||{prefix:null,iconName:null}}function Hc(e){var t=$o[e],n=ga("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return ha}var va=function(){return{prefix:null,iconName:null,rest:[]}};function Jn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=Vt[r][e],i=Gt[r][e]||Gt[r][a],o=e in Ae.styles?e:null;return i||o||null}var di=(_n={},te(_n,K,Object.keys(Jt[K])),te(_n,Q,Object.keys(Jt[Q])),_n);function Zn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,K,"".concat(S.cssPrefix,"-").concat(K)),te(t,Q,"".concat(S.cssPrefix,"-").concat(Q)),t),o=null,s=K;(e.includes(i[K])||e.some(function(u){return di[K].includes(u)}))&&(s=K),(e.includes(i[Q])||e.some(function(u){return di[Q].includes(u)}))&&(s=Q);var l=e.reduce(function(u,d){var m=$c(S.cssPrefix,d);if(yt[d]?(d=Lc[s].includes(d)?dc[s][d]:d,o=d,u.prefix=d):zc[s].indexOf(d)>-1?(o=d,u.prefix=Jn(d,{family:s})):m?u.iconName=m:d!==S.replacementClass&&d!==i[K]&&d!==i[Q]&&u.rest.push(d),!a&&u.prefix&&u.iconName){var v=o==="fa"?Uo(u.iconName):{},k=lt(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||k||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!yt.far&&yt.fas&&!S.autoFetchSvg&&(u.prefix="fas")}return u},va());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(yt.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=lt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ze()||"fas"),l}var Uc=function(){function e(){ec(this,e),this.definitions={}}return tc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Tr(s,o[s]);var l=Jt[K][s];l&&Tr(l,o[s]),Ho()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),mi=[],xt={},Ot={},Bc=Object.keys(Ot);function Yc(e,t){var n=t.mixoutsTo;return mi=e,xt={},Object.keys(Ot).forEach(function(r){Bc.indexOf(r)===-1&&delete Ot[r]}),mi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Fn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(Ot)}),n}function Nr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ot[e]?Ot[e].apply(null,t):void 0}function Mr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(!!t)return t=lt(n,t)||t,ci(Bo.definitions,n,t)||ci(Ae.styles,n,t)}var Bo=new Uc,Wc=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,mt("noAuto")},Kc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(mt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,Tc(function(){Xc({autoReplaceSvgRoot:n}),mt("watch",t)})}},qc={icon:function(t){if(t===null)return null;if(Fn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:lt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Jn(t[0]);return{prefix:r,iconName:lt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(mc))){var a=Zn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:lt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:lt(i,t)||t}}}},he={noAuto:Wc,config:S,dom:Kc,parse:qc,library:Bo,findIconDefinition:Mr,toHtml:nn},Xc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(Ae.styles).length>0||S.autoFetchSvg)&&Ye&&S.autoReplaceSvg&&he.dom.i2svg({node:r})};function Qn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ye){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Vc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(pa(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Gn(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Gc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ba(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,F=r.found?r:n,N=F.width,D=F.height,w=a==="fak",C=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},z=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};k&&(E.attributes[dt]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||Qt())},children:[l]}),delete E.attributes.title);var H=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:O(O({},z),m.styles)}),ce=r.found&&n.found?Ue("generateAbstractMask",H)||{children:[],attributes:{}}:Ue("generateAbstractIcon",H)||{children:[],attributes:{}},ae=ce.children,be=ce.attributes;return H.children=ae,H.attributes=be,s?Gc(H):Vc(H)}function pi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[dt]="");var d=O({},o.styles);pa(a)&&(d.transform=Cc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Gn(d);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Jc(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Gn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var dr=Ae.styles;function Fr(e){var t=e[0],n=e[1],r=e.slice(4),a=la(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(st.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(st.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(st.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Zc={found:!1,width:512,height:512};function Qc(e,t){!So&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Rr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=Uo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&dr[t]&&dr[t][e]){var o=dr[t][e];return r(Fr(o))}Qc(e,t),r(O(O({},Zc),{},{icon:S.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var hi=function(){},Lr=S.measurePerformance&&pn&&pn.mark&&pn.measure?pn:{mark:hi,measure:hi},zt='FA "6.2.1"',eu=function(t){return Lr.mark("".concat(zt," ").concat(t," begins")),function(){return Yo(t)}},Yo=function(t){Lr.mark("".concat(zt," ").concat(t," ends")),Lr.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))},ya={begin:eu,end:Yo},Pn=function(){};function gi(e){var t=e.getAttribute?e.getAttribute(dt):null;return typeof t=="string"}function tu(e){var t=e.getAttribute?e.getAttribute(ca):null,n=e.getAttribute?e.getAttribute(ua):null;return t&&n}function nu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function ru(){if(S.autoReplaceSvg===!0)return Sn.replace;var e=Sn[S.autoReplaceSvg];return e||Sn.replace}function au(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function iu(e){return q.createElement(e)}function Wo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?au:iu:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Wo(o,{ceFn:r}))}),a}function ou(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Sn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Wo(a),n)}),n.getAttribute(dt)===null&&S.keepOriginalSource){var r=q.createComment(ou(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ma(n).indexOf(S.replacementClass))return Sn.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return nn(s)}).join(`
`);n.setAttribute(dt,""),n.innerHTML=o}};function vi(e){e()}function Ko(e,t){var n=typeof t=="function"?t:Pn;if(e.length===0)n();else{var r=vi;S.mutateApproach===cc&&(r=Je.requestAnimationFrame||vi),r(function(){var a=ru(),i=ya.begin("mutate");e.map(a),i(),n()})}}var xa=!1;function qo(){xa=!0}function zr(){xa=!1}var Ln=null;function bi(e){if(!!si&&!!S.observeMutations){var t=e.treeCallback,n=t===void 0?Pn:t,r=e.nodeCallback,a=r===void 0?Pn:r,i=e.pseudoElementsCallback,o=i===void 0?Pn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;Ln=new si(function(u){if(!xa){var d=Ze();Nt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!gi(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&gi(m.target)&&~vc.indexOf(m.attributeName))if(m.attributeName==="class"&&tu(m.target)){var v=Zn(ma(m.target)),k=v.prefix,F=v.iconName;m.target.setAttribute(ca,k||d),F&&m.target.setAttribute(ua,F)}else nu(m.target)&&a(m.target)})}}),Ye&&Ln.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function su(){!Ln||Ln.disconnect()}function lu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function fu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Zn(ma(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Dc(a.prefix,e.innerText)||ga(a.prefix,Ir(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function cu(e){var t=Nt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||Qt()):(t["aria-hidden"]="true",t.focusable="false")),t}function uu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fu(e),r=n.iconName,a=n.prefix,i=n.rest,o=cu(e),s=Nr("parseNodeAttributes",{},e),l=t.styleParser?lu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var du=Ae.styles;function Xo(e){var t=S.autoReplaceSvg==="nest"?yi(e,{styleParser:!1}):yi(e);return~t.extra.classes.indexOf(Io)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var Qe=new Set;da.map(function(e){Qe.add("fa-".concat(e))});Object.keys(Vt[K]).map(Qe.add.bind(Qe));Object.keys(Vt[Q]).map(Qe.add.bind(Qe));Qe=en(Qe);function xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(li,"-").concat(m))},a=function(m){return n.remove("".concat(li,"-").concat(m))},i=S.autoFetchSvg?Qe:da.map(function(d){return"fa-".concat(d)}).concat(Object.keys(du));i.includes("fa")||i.push("fa");var o=[".".concat(Io,":not([").concat(dt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(dt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Nt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ya.begin("onTree"),u=s.reduce(function(d,m){try{var v=Xo(m);v&&d.push(v)}catch(k){So||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(v){Ko(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function mu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xo(e).then(function(n){n&&Ko([n],t)})}function pu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Mr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Mr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var hu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,v=m===void 0?null:m,k=n.titleId,F=k===void 0?null:k,N=n.classes,D=N===void 0?[]:N,w=n.attributes,C=w===void 0?{}:w,E=n.styles,z=E===void 0?{}:E;if(!!t){var H=t.prefix,ce=t.iconName,ae=t.icon;return Qn(O({type:"icon"},t),function(){return mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(v?C["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(F||Qt()):(C["aria-hidden"]="true",C.focusable="false")),ba({icons:{main:Fr(ae),mask:l?Fr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ce,transform:O(O({},Fe),a),symbol:o,title:v,maskId:d,titleId:F,extra:{attributes:C,styles:z,classes:D}})})}},gu={mixout:function(){return{icon:pu(hu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=xi,n.nodeCallback=mu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return xi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,F){Promise.all([Rr(a,s),d.iconName?Rr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=la(N,2),w=D[0],C=D[1];k([n,ba({icons:{main:w,mask:C},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Gn(s);l.length>0&&(a.style=l);var u;return pa(o)&&(u=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},vu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Qn({type:"layer"},function(){mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(en(i)).join(" ")},children:o}]})}}}},bu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Qn({type:"counter",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),Jc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(en(s))}})})}}}},yu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return Qn({type:"text",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),pi({content:n,transform:O(O({},Fe),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(S.cssPrefix,"-layers-text")].concat(en(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Eo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,pi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},xu=new RegExp('"',"ug"),wi=[1105920,1112319];function wu(e){var t=e.replace(xu,""),n=Fc(t,0),r=n>=wi[0]&&n<=wi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ir(a?t[0]:t),isSecondary:r||a}}function _i(e,t){var n="".concat(fc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Nt(e.children),o=i.filter(function(ae){return ae.getAttribute(Sr)===t})[0],s=Je.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(pc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Q:K,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Gt[v][l[2].toLowerCase()]:hc[v][u],F=wu(m),N=F.value,D=F.isSecondary,w=l[0].startsWith("FontAwesome"),C=ga(k,N),E=C;if(w){var z=Hc(N);z.iconName&&z.prefix&&(C=z.iconName,k=z.prefix)}if(C&&!D&&(!o||o.getAttribute(ca)!==k||o.getAttribute(ua)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var H=uu(),ce=H.extra;ce.attributes[Sr]=t,Rr(C,k).then(function(ae){var be=ba(O(O({},H),{},{icons:{main:ae,mask:va()},prefix:k,iconName:E,extra:ce,watchable:!0})),ge=q.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(Le){return nn(Le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function _u(e){return Promise.all([_i(e,"::before"),_i(e,"::after")])}function ku(e){return e.parentNode!==document.head&&!~uc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Sr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ki(e){if(!!Ye)return new Promise(function(t,n){var r=Nt(e.querySelectorAll("*")).filter(ku).map(_u),a=ya.begin("searchPseudoElements");qo(),Promise.all(r).then(function(){a(),zr(),t()}).catch(function(){a(),zr(),n()})})}var Au={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ki,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;S.searchPseudoElements&&ki(a)}}},Ai=!1,Ou={mixout:function(){return{dom:{unwatch:function(){qo(),Ai=!0}}}},hooks:function(){return{bootstrap:function(){bi(Nr("mutationObserverCallbacks",{}))},noAuto:function(){su()},watch:function(n){var r=n.observeMutationsRoot;Ai?zr():bi(Nr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Oi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Eu={mixout:function(){return{parse:{transform:function(n){return Oi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Oi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},mr={x:0,y:0,width:"100%",height:"100%"};function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Cu(e){return e.tag==="g"?e.children:[e]}var Pu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Zn(a.split(" ").map(function(o){return o.trim()})):va();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,v=o.icon,k=Ec({transform:l,containerWidth:m,iconWidth:u}),F={tag:"rect",attributes:O(O({},mr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ei)}:{},D={tag:"g",attributes:O({},k.inner),children:[Ei(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},N))]},w={tag:"g",attributes:O({},k.outer),children:[D]},C="mask-".concat(s||Qt()),E="clip-".concat(s||Qt()),z={tag:"mask",attributes:O(O({},mr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,w]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Cu(v)},z]};return r.push(H,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(C,")")},mr)}),{children:r,attributes:a}}}},Su={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Iu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Tu=[Sc,gu,vu,bu,yu,Au,Ou,Eu,Pu,Su,Iu];Yc(Tu,{mixoutsTo:he});he.noAuto;var Vo=he.config,Nu=he.library;he.dom;var zn=he.parse;he.findIconDefinition;he.toHtml;var Mu=he.icon;he.layer;var Fu=he.text;he.counter;function Ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ci(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jn(e){return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ru(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Lu(e,t){if(e==null)return{};var n=Ru(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function jr(e){return zu(e)||ju(e)||$u(e)||Du()}function zu(e){if(Array.isArray(e))return $r(e)}function ju(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $u(e,t){if(!!e){if(typeof e=="string")return $r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $r(e,t)}}function $r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Du(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Go={exports:{}};(function(e){(function(t){var n=function(w,C,E){if(!u(C)||m(C)||v(C)||k(C)||l(C))return C;var z,H=0,ce=0;if(d(C))for(z=[],ce=C.length;H<ce;H++)z.push(n(w,C[H],E));else{z={};for(var ae in C)Object.prototype.hasOwnProperty.call(C,ae)&&(z[w(ae,E)]=n(w,C[ae],E))}return z},r=function(w,C){C=C||{};var E=C.separator||"_",z=C.split||/(?=[A-Z])/;return w.split(z).join(E)},a=function(w){return F(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(C,E){return E?E.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var C=a(w);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(w,C){return r(w,C).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},u=function(w){return w===Object(w)},d=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},v=function(w){return s.call(w)=="[object RegExp]"},k=function(w){return s.call(w)=="[object Boolean]"},F=function(w){return w=w-0,w===w},N=function(w,C){var E=C&&"process"in C?C.process:C;return typeof E!="function"?w:function(z,H){return E(z,w,H)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,C){return n(N(a,C),w)},decamelizeKeys:function(w,C){return n(N(o,C),w,C)},pascalizeKeys:function(w,C){return n(N(i,C),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Hu)})(Go);var Uu=Go.exports,Bu=["class","style"];function Yu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Uu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Wu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function wa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return wa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Wu(d);break;case"style":l.style=Yu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Lu(n,Bu);return wo(e.tag,we(we(we({},t),{},{class:a.class,style:we(we({},a.style),o)},a.attrs),s),r)}var Jo=!1;try{Jo=!0}catch{}function Ku(){if(!Jo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ut(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function qu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Pi(e){if(e&&jn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(zn.icon)return zn.icon(e);if(e===null)return null;if(jn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Xu=ra({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Pi(t.icon)}),i=ve(function(){return Ut("classes",qu(t))}),o=ve(function(){return Ut("transform",typeof t.transform=="string"?zn.transform(t.transform):t.transform)}),s=ve(function(){return Ut("mask",Pi(t.mask))}),l=ve(function(){return Mu(a.value,we(we(we(we({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});On(l,function(d){if(!d)return Ku("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ve(function(){return l.value?wa(l.value.abstract[0],{},r):null});return function(){return u.value}}});ra({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Vo.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(jr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return wo("div",{class:i.value},r.default?r.default():[])}}});ra({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Vo.familyPrefix,i=ve(function(){return Ut("classes",[].concat(jr(t.counter?["".concat(a,"-layers-counter")]:[]),jr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Ut("transform",typeof t.transform=="string"?zn.transform(t.transform):t.transform)}),s=ve(function(){var u=Fu(t.value.toString(),we(we({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return wa(s.value,{},r)});return function(){return l.value}}});var Vu={prefix:"far",iconName:"circle-right",icon:[512,512,[61838,"arrow-alt-circle-right"],"f35a","M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"]},Gu={prefix:"fab",iconName:"behance",icon:[576,512,[],"f1b4","M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"]},Ju={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Zu={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Qu={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ed={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},td={prefix:"fab",iconName:"dribbble",icon:[512,512,[],"f17d","M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"]};Nu.add(Vu,Ju,ed,Zu,td,Gu,Qu);Of(Qf).component("font-awesome-icon",Xu).mount("#app");
