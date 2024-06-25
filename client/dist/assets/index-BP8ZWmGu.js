function $I(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var BI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var O_={exports:{}},Zu={},D_={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=Symbol.for("react.element"),HI=Symbol.for("react.portal"),WI=Symbol.for("react.fragment"),qI=Symbol.for("react.strict_mode"),GI=Symbol.for("react.profiler"),KI=Symbol.for("react.provider"),QI=Symbol.for("react.context"),YI=Symbol.for("react.forward_ref"),XI=Symbol.for("react.suspense"),JI=Symbol.for("react.memo"),ZI=Symbol.for("react.lazy"),Sg=Symbol.iterator;function eS(t){return t===null||typeof t!="object"?null:(t=Sg&&t[Sg]||t["@@iterator"],typeof t=="function"?t:null)}var L_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M_=Object.assign,V_={};function xs(t,e,n){this.props=t,this.context=e,this.refs=V_,this.updater=n||L_}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function F_(){}F_.prototype=xs.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=V_,this.updater=n||L_}var Md=Ld.prototype=new F_;Md.constructor=Ld;M_(Md,xs.prototype);Md.isPureReactComponent=!0;var Ag=Array.isArray,j_=Object.prototype.hasOwnProperty,Vd={current:null},U_={key:!0,ref:!0,__self:!0,__source:!0};function z_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)j_.call(e,r)&&!U_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wa,type:t,key:s,ref:o,props:i,_owner:Vd.current}}function tS(t,e){return{$$typeof:wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===wa}function nS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kg=/\/+/g;function lh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nS(""+t.key):e.toString(36)}function Ll(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wa:case HI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+lh(o,0):r,Ag(i)?(n="",t!=null&&(n=t.replace(kg,"$&/")+"/"),Ll(i,e,n,"",function(c){return c})):i!=null&&(Fd(i)&&(i=tS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(kg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ag(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+lh(s,a);o+=Ll(s,e,n,u,i)}else if(u=eS(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+lh(s,a++),o+=Ll(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nl(t,e,n){if(t==null)return t;var r=[],i=0;return Ll(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},Ml={transition:null},iS={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:Vd};function $_(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:nl,forEach:function(t,e,n){nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nl(t,function(){e++}),e},toArray:function(t){return nl(t,function(e){return e})||[]},only:function(t){if(!Fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=xs;le.Fragment=WI;le.Profiler=GI;le.PureComponent=Ld;le.StrictMode=qI;le.Suspense=XI;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iS;le.act=$_;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=M_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)j_.call(e,u)&&!U_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:wa,type:t.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:QI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KI,_context:t},t.Consumer=t};le.createElement=z_;le.createFactory=function(t){var e=z_.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:YI,render:t}};le.isValidElement=Fd;le.lazy=function(t){return{$$typeof:ZI,_payload:{_status:-1,_result:t},_init:rS}};le.memo=function(t,e){return{$$typeof:JI,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Ml.transition;Ml.transition={};try{t()}finally{Ml.transition=e}};le.unstable_act=$_;le.useCallback=function(t,e){return Tt.current.useCallback(t,e)};le.useContext=function(t){return Tt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};le.useEffect=function(t,e){return Tt.current.useEffect(t,e)};le.useId=function(){return Tt.current.useId()};le.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Tt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};le.useRef=function(t){return Tt.current.useRef(t)};le.useState=function(t){return Tt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Tt.current.useTransition()};le.version="18.3.1";D_.exports=le;var J=D_.exports;const ec=Dd(J),sS=$I({__proto__:null,default:ec},[J]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oS=J,aS=Symbol.for("react.element"),lS=Symbol.for("react.fragment"),uS=Object.prototype.hasOwnProperty,cS=oS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hS={key:!0,ref:!0,__self:!0,__source:!0};function B_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uS.call(e,r)&&!hS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:aS,type:t,key:s,ref:o,props:i,_owner:cS.current}}Zu.Fragment=lS;Zu.jsx=B_;Zu.jsxs=B_;O_.exports=Zu;var U=O_.exports,Zh={},H_={exports:{}},Ft={},W_={exports:{}},q_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,$){var V=H.length;H.push($);e:for(;0<V;){var Y=V-1>>>1,W=H[Y];if(0<i(W,$))H[Y]=$,H[V]=W,V=Y;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var $=H[0],V=H.pop();if(V!==$){H[0]=V;e:for(var Y=0,W=H.length,me=W>>>1;Y<me;){var M=2*(Y+1)-1,zt=H[M],K=M+1,ue=H[K];if(0>i(zt,V))K<W&&0>i(ue,zt)?(H[Y]=ue,H[K]=V,Y=K):(H[Y]=zt,H[M]=V,Y=M);else if(K<W&&0>i(ue,V))H[Y]=ue,H[K]=V,Y=K;else break e}}return $}function i(H,$){var V=H.sortIndex-$.sortIndex;return V!==0?V:H.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,d=null,m=3,g=!1,E=!1,k=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(H){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=H)r(c),$.sortIndex=$.expirationTime,e(u,$);else break;$=n(c)}}function x(H){if(k=!1,I(H),!E)if(n(u)!==null)E=!0,oe(O);else{var $=n(c);$!==null&&$e(x,$.startTime-H)}}function O(H,$){E=!1,k&&(k=!1,w(v),v=-1),g=!0;var V=m;try{for(I($),d=n(u);d!==null&&(!(d.expirationTime>$)||H&&!C());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,m=d.priorityLevel;var W=Y(d.expirationTime<=$);$=t.unstable_now(),typeof W=="function"?d.callback=W:d===n(u)&&r(u),I($)}else r(u);d=n(u)}if(d!==null)var me=!0;else{var M=n(c);M!==null&&$e(x,M.startTime-$),me=!1}return me}finally{d=null,m=V,g=!1}}var D=!1,T=null,v=-1,S=5,A=-1;function C(){return!(t.unstable_now()-A<S)}function R(){if(T!==null){var H=t.unstable_now();A=H;var $=!0;try{$=T(!0,H)}finally{$?P():(D=!1,T=null)}}else D=!1}var P;if(typeof y=="function")P=function(){y(R)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,fe=se.port2;se.port1.onmessage=R,P=function(){fe.postMessage(null)}}else P=function(){b(R,0)};function oe(H){T=H,D||(D=!0,P())}function $e(H,$){v=b(function(){H(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){E||g||(E=!0,oe(O))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var V=m;m=$;try{return H()}finally{m=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,$){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var V=m;m=H;try{return $()}finally{m=V}},t.unstable_scheduleCallback=function(H,$,V){var Y=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Y+V:Y):V=Y,H){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=V+W,H={id:h++,callback:$,priorityLevel:H,startTime:V,expirationTime:W,sortIndex:-1},V>Y?(H.sortIndex=V,e(c,H),n(u)===null&&H===n(c)&&(k?(w(v),v=-1):k=!0,$e(x,V-Y))):(H.sortIndex=W,e(u,H),E||g||(E=!0,oe(O))),H},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(H){var $=m;return function(){var V=m;m=$;try{return H.apply(this,arguments)}finally{m=V}}}})(q_);W_.exports=q_;var fS=W_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dS=J,Vt=fS;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var G_=new Set,$o={};function Ei(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for($o[t]=e,t=0;t<e.length;t++)G_.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=Object.prototype.hasOwnProperty,pS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pg={},Cg={};function mS(t){return ef.call(Cg,t)?!0:ef.call(Pg,t)?!1:pS.test(t)?Cg[t]=!0:(Pg[t]=!0,!1)}function gS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vS(t,e,n,r){if(e===null||typeof e>"u"||gS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function Ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jd,Ud);at[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jd,Ud);at[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jd,Ud);at[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function zd(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vS(e,n,i,r)&&(n=null),r||i===null?mS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=dS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),zi=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),$d=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),K_=Symbol.for("react.provider"),Q_=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Y_=Symbol.for("react.offscreen"),bg=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=bg&&t[bg]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,uh;function mo(t){if(uh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uh=e&&e[1]||""}return`
`+uh+t}var ch=!1;function hh(t,e){if(!t||ch)return"";ch=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{ch=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function yS(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=hh(t.type,!1),t;case 11:return t=hh(t.type.render,!1),t;case 1:return t=hh(t.type,!0),t;default:return""}}function sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $i:return"Fragment";case zi:return"Portal";case tf:return"Profiler";case $d:return"StrictMode";case nf:return"Suspense";case rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q_:return(t.displayName||"Context")+".Consumer";case K_:return(t._context.displayName||"Context")+".Provider";case Bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:sf(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return sf(t(e))}catch{}}return null}function _S(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sf(e);case 8:return e===$d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function X_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wS(t){var e=X_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=wS(t))}function J_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=X_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function of(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z_(t,e){e=e.checked,e!=null&&zd(t,"checked",e,!1)}function af(t,e){Z_(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&lf(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lf(t,e,n){(e!=="number"||iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(go(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function e0(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Og(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,n0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ES=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){ES.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function r0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function i0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=r0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TS=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(TS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=null;function Wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pf=null,is=null,ss=null;function Dg(t){if(t=Ia(t)){if(typeof pf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=sc(e),pf(t.stateNode,t.type,e))}}function s0(t){is?ss?ss.push(t):ss=[t]:is=t}function o0(){if(is){var t=is,e=ss;if(ss=is=null,Dg(t),e)for(t=0;t<e.length;t++)Dg(e[t])}}function a0(t,e){return t(e)}function l0(){}var fh=!1;function u0(t,e,n){if(fh)return t(e,n);fh=!0;try{return a0(t,e,n)}finally{fh=!1,(is!==null||ss!==null)&&(l0(),o0())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var r=sc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var mf=!1;if(zn)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){mf=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{mf=!1}function IS(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ko=!1,su=null,ou=!1,gf=null,SS={onError:function(t){ko=!0,su=t}};function AS(t,e,n,r,i,s,o,a,u){ko=!1,su=null,IS.apply(SS,arguments)}function kS(t,e,n,r,i,s,o,a,u){if(AS.apply(this,arguments),ko){if(ko){var c=su;ko=!1,su=null}else throw Error(z(198));ou||(ou=!0,gf=c)}}function Ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lg(t){if(Ti(t)!==t)throw Error(z(188))}function PS(t){var e=t.alternate;if(!e){if(e=Ti(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Lg(i),t;if(s===r)return Lg(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function h0(t){return t=PS(t),t!==null?f0(t):null}function f0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f0(t);if(e!==null)return e;t=t.sibling}return null}var d0=Vt.unstable_scheduleCallback,Mg=Vt.unstable_cancelCallback,CS=Vt.unstable_shouldYield,bS=Vt.unstable_requestPaint,Fe=Vt.unstable_now,RS=Vt.unstable_getCurrentPriorityLevel,qd=Vt.unstable_ImmediatePriority,p0=Vt.unstable_UserBlockingPriority,au=Vt.unstable_NormalPriority,xS=Vt.unstable_LowPriority,m0=Vt.unstable_IdlePriority,tc=null,yn=null;function NS(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(tc,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:LS,OS=Math.log,DS=Math.LN2;function LS(t){return t>>>=0,t===0?32:31-(OS(t)/DS|0)|0}var ol=64,al=4194304;function vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vo(a):(s&=o,s!==0&&(r=vo(s)))}else o=n&~i,o!==0?r=vo(o):s!==0&&(r=vo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function MS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=MS(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g0(){var t=ol;return ol<<=1,!(ol&4194240)&&(ol=64),t}function dh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function FS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function v0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var y0,Kd,_0,w0,E0,yf=!1,ll=[],yr=null,_r=null,wr=null,Wo=new Map,qo=new Map,lr=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function ao(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ia(e),e!==null&&Kd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function US(t,e,n,r,i){switch(e){case"focusin":return yr=ao(yr,t,e,n,r,i),!0;case"dragenter":return _r=ao(_r,t,e,n,r,i),!0;case"mouseover":return wr=ao(wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wo.set(s,ao(Wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qo.set(s,ao(qo.get(s)||null,t,e,n,r,i)),!0}return!1}function T0(t){var e=Xr(t.target);if(e!==null){var n=Ti(e);if(n!==null){if(e=n.tag,e===13){if(e=c0(n),e!==null){t.blockedOn=e,E0(t.priority,function(){_0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);df=r,n.target.dispatchEvent(r),df=null}else return e=Ia(n),e!==null&&Kd(e),t.blockedOn=n,!1;e.shift()}return!0}function Fg(t,e,n){Vl(t)&&n.delete(e)}function zS(){yf=!1,yr!==null&&Vl(yr)&&(yr=null),_r!==null&&Vl(_r)&&(_r=null),wr!==null&&Vl(wr)&&(wr=null),Wo.forEach(Fg),qo.forEach(Fg)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,yf||(yf=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,zS)))}function Go(t){function e(i){return lo(i,t)}if(0<ll.length){lo(ll[0],t);for(var n=1;n<ll.length;n++){var r=ll[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&lo(yr,t),_r!==null&&lo(_r,t),wr!==null&&lo(wr,t),Wo.forEach(e),qo.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)T0(n),n.blockedOn===null&&lr.shift()}var os=Xn.ReactCurrentBatchConfig,uu=!0;function $S(t,e,n,r){var i=_e,s=os.transition;os.transition=null;try{_e=1,Qd(t,e,n,r)}finally{_e=i,os.transition=s}}function BS(t,e,n,r){var i=_e,s=os.transition;os.transition=null;try{_e=4,Qd(t,e,n,r)}finally{_e=i,os.transition=s}}function Qd(t,e,n,r){if(uu){var i=_f(t,e,n,r);if(i===null)Ih(t,e,r,cu,n),Vg(t,r);else if(US(i,t,e,n,r))r.stopPropagation();else if(Vg(t,r),e&4&&-1<jS.indexOf(t)){for(;i!==null;){var s=Ia(i);if(s!==null&&y0(s),s=_f(t,e,n,r),s===null&&Ih(t,e,r,cu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ih(t,e,r,null,n)}}var cu=null;function _f(t,e,n,r){if(cu=null,t=Wd(r),t=Xr(t),t!==null)if(e=Ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cu=t,null}function I0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RS()){case qd:return 1;case p0:return 4;case au:case xS:return 16;case m0:return 536870912;default:return 16}default:return 16}}var pr=null,Yd=null,Fl=null;function S0(){if(Fl)return Fl;var t,e=Yd,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Fl=i.slice(t,1<r?1-r:void 0)}function jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function jg(){return!1}function jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:jg,this.isPropagationStopped=jg,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xd=jt(Ns),Ta=Ne({},Ns,{view:0,detail:0}),HS=jt(Ta),ph,mh,uo,nc=Ne({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(ph=t.screenX-uo.screenX,mh=t.screenY-uo.screenY):mh=ph=0,uo=t),ph)},movementY:function(t){return"movementY"in t?t.movementY:mh}}),Ug=jt(nc),WS=Ne({},nc,{dataTransfer:0}),qS=jt(WS),GS=Ne({},Ta,{relatedTarget:0}),gh=jt(GS),KS=Ne({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),QS=jt(KS),YS=Ne({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XS=jt(YS),JS=Ne({},Ns,{data:0}),zg=jt(JS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tA[t])?!!e[t]:!1}function Jd(){return nA}var rA=Ne({},Ta,{key:function(t){if(t.key){var e=ZS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jd,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iA=jt(rA),sA=Ne({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$g=jt(sA),oA=Ne({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jd}),aA=jt(oA),lA=Ne({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),uA=jt(lA),cA=Ne({},nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hA=jt(cA),fA=[9,13,27,32],Zd=zn&&"CompositionEvent"in window,Po=null;zn&&"documentMode"in document&&(Po=document.documentMode);var dA=zn&&"TextEvent"in window&&!Po,A0=zn&&(!Zd||Po&&8<Po&&11>=Po),Bg=" ",Hg=!1;function k0(t,e){switch(t){case"keyup":return fA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bi=!1;function pA(t,e){switch(t){case"compositionend":return P0(e);case"keypress":return e.which!==32?null:(Hg=!0,Bg);case"textInput":return t=e.data,t===Bg&&Hg?null:t;default:return null}}function mA(t,e){if(Bi)return t==="compositionend"||!Zd&&k0(t,e)?(t=S0(),Fl=Yd=pr=null,Bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A0&&e.locale!=="ko"?null:e.data;default:return null}}var gA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gA[t.type]:e==="textarea"}function C0(t,e,n,r){s0(r),e=hu(e,"onChange"),0<e.length&&(n=new Xd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Co=null,Ko=null;function vA(t){j0(t,0)}function rc(t){var e=qi(t);if(J_(e))return t}function yA(t,e){if(t==="change")return e}var b0=!1;if(zn){var vh;if(zn){var yh="oninput"in document;if(!yh){var qg=document.createElement("div");qg.setAttribute("oninput","return;"),yh=typeof qg.oninput=="function"}vh=yh}else vh=!1;b0=vh&&(!document.documentMode||9<document.documentMode)}function Gg(){Co&&(Co.detachEvent("onpropertychange",R0),Ko=Co=null)}function R0(t){if(t.propertyName==="value"&&rc(Ko)){var e=[];C0(e,Ko,t,Wd(t)),u0(vA,e)}}function _A(t,e,n){t==="focusin"?(Gg(),Co=e,Ko=n,Co.attachEvent("onpropertychange",R0)):t==="focusout"&&Gg()}function wA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rc(Ko)}function EA(t,e){if(t==="click")return rc(e)}function TA(t,e){if(t==="input"||t==="change")return rc(e)}function IA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:IA;function Qo(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ef.call(e,i)||!an(t[i],e[i]))return!1}return!0}function Kg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qg(t,e){var n=Kg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kg(n)}}function x0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?x0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N0(){for(var t=window,e=iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=iu(t.document)}return e}function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SA(t){var e=N0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&x0(n.ownerDocument.documentElement,n)){if(r!==null&&ep(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Qg(n,s);var o=Qg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AA=zn&&"documentMode"in document&&11>=document.documentMode,Hi=null,wf=null,bo=null,Ef=!1;function Yg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||Hi==null||Hi!==iu(r)||(r=Hi,"selectionStart"in r&&ep(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Qo(bo,r)||(bo=r,r=hu(wf,"onSelect"),0<r.length&&(e=new Xd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},_h={},O0={};zn&&(O0=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function ic(t){if(_h[t])return _h[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in O0)return _h[t]=e[n];return t}var D0=ic("animationend"),L0=ic("animationiteration"),M0=ic("animationstart"),V0=ic("transitionend"),F0=new Map,Xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){F0.set(t,e),Ei(e,[t])}for(var wh=0;wh<Xg.length;wh++){var Eh=Xg[wh],kA=Eh.toLowerCase(),PA=Eh[0].toUpperCase()+Eh.slice(1);jr(kA,"on"+PA)}jr(D0,"onAnimationEnd");jr(L0,"onAnimationIteration");jr(M0,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(V0,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CA=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Jg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kS(r,e,void 0,t),t.currentTarget=null}function j0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Jg(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Jg(i,a,c),s=u}}}if(ou)throw t=gf,ou=!1,gf=null,t}function Se(t,e){var n=e[kf];n===void 0&&(n=e[kf]=new Set);var r=t+"__bubble";n.has(r)||(U0(e,t,2,!1),n.add(r))}function Th(t,e,n){var r=0;e&&(r|=4),U0(n,t,r,e)}var hl="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[hl]){t[hl]=!0,G_.forEach(function(n){n!=="selectionchange"&&(CA.has(n)||Th(n,!1,t),Th(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hl]||(e[hl]=!0,Th("selectionchange",!1,e))}}function U0(t,e,n,r){switch(I0(e)){case 1:var i=$S;break;case 4:i=BS;break;default:i=Qd}n=i.bind(null,e,n,t),i=void 0,!mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ih(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}u0(function(){var c=s,h=Wd(n),d=[];e:{var m=F0.get(t);if(m!==void 0){var g=Xd,E=t;switch(t){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":g=iA;break;case"focusin":E="focus",g=gh;break;case"focusout":E="blur",g=gh;break;case"beforeblur":case"afterblur":g=gh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=qS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=aA;break;case D0:case L0:case M0:g=QS;break;case V0:g=uA;break;case"scroll":g=HS;break;case"wheel":g=hA;break;case"copy":case"cut":case"paste":g=XS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$g}var k=(e&4)!==0,b=!k&&t==="scroll",w=k?m!==null?m+"Capture":null:m;k=[];for(var y=c,I;y!==null;){I=y;var x=I.stateNode;if(I.tag===5&&x!==null&&(I=x,w!==null&&(x=Ho(y,w),x!=null&&k.push(Xo(y,x,I)))),b)break;y=y.return}0<k.length&&(m=new g(m,E,null,n,h),d.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==df&&(E=n.relatedTarget||n.fromElement)&&(Xr(E)||E[$n]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(E=n.relatedTarget||n.toElement,g=c,E=E?Xr(E):null,E!==null&&(b=Ti(E),E!==b||E.tag!==5&&E.tag!==6)&&(E=null)):(g=null,E=c),g!==E)){if(k=Ug,x="onMouseLeave",w="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=$g,x="onPointerLeave",w="onPointerEnter",y="pointer"),b=g==null?m:qi(g),I=E==null?m:qi(E),m=new k(x,y+"leave",g,n,h),m.target=b,m.relatedTarget=I,x=null,Xr(h)===c&&(k=new k(w,y+"enter",E,n,h),k.target=I,k.relatedTarget=b,x=k),b=x,g&&E)t:{for(k=g,w=E,y=0,I=k;I;I=Mi(I))y++;for(I=0,x=w;x;x=Mi(x))I++;for(;0<y-I;)k=Mi(k),y--;for(;0<I-y;)w=Mi(w),I--;for(;y--;){if(k===w||w!==null&&k===w.alternate)break t;k=Mi(k),w=Mi(w)}k=null}else k=null;g!==null&&Zg(d,m,g,k,!1),E!==null&&b!==null&&Zg(d,b,E,k,!0)}}e:{if(m=c?qi(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var O=yA;else if(Wg(m))if(b0)O=TA;else{O=wA;var D=_A}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=EA);if(O&&(O=O(t,c))){C0(d,O,n,h);break e}D&&D(t,m,c),t==="focusout"&&(D=m._wrapperState)&&D.controlled&&m.type==="number"&&lf(m,"number",m.value)}switch(D=c?qi(c):window,t){case"focusin":(Wg(D)||D.contentEditable==="true")&&(Hi=D,wf=c,bo=null);break;case"focusout":bo=wf=Hi=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,Yg(d,n,h);break;case"selectionchange":if(AA)break;case"keydown":case"keyup":Yg(d,n,h)}var T;if(Zd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Bi?k0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(A0&&n.locale!=="ko"&&(Bi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Bi&&(T=S0()):(pr=h,Yd="value"in pr?pr.value:pr.textContent,Bi=!0)),D=hu(c,v),0<D.length&&(v=new zg(v,t,null,n,h),d.push({event:v,listeners:D}),T?v.data=T:(T=P0(n),T!==null&&(v.data=T)))),(T=dA?pA(t,n):mA(t,n))&&(c=hu(c,"onBeforeInput"),0<c.length&&(h=new zg("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=T))}j0(d,e)})}function Xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ho(t,n),s!=null&&r.unshift(Xo(t,s,i)),s=Ho(t,e),s!=null&&r.push(Xo(t,s,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ho(n,s),u!=null&&o.unshift(Xo(n,u,a))):i||(u=Ho(n,s),u!=null&&o.push(Xo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bA=/\r\n?/g,RA=/\u0000|\uFFFD/g;function ev(t){return(typeof t=="string"?t:""+t).replace(bA,`
`).replace(RA,"")}function fl(t,e,n){if(e=ev(e),ev(t)!==e&&n)throw Error(z(425))}function fu(){}var Tf=null,If=null;function Sf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,xA=typeof clearTimeout=="function"?clearTimeout:void 0,tv=typeof Promise=="function"?Promise:void 0,NA=typeof queueMicrotask=="function"?queueMicrotask:typeof tv<"u"?function(t){return tv.resolve(null).then(t).catch(OA)}:Af;function OA(t){setTimeout(function(){throw t})}function Sh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Go(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),gn="__reactFiber$"+Os,Jo="__reactProps$"+Os,$n="__reactContainer$"+Os,kf="__reactEvents$"+Os,DA="__reactListeners$"+Os,LA="__reactHandles$"+Os;function Xr(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nv(t);t!==null;){if(n=t[gn])return n;t=nv(t)}return e}t=n,n=t.parentNode}return null}function Ia(t){return t=t[gn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function sc(t){return t[Jo]||null}var Pf=[],Gi=-1;function Ur(t){return{current:t}}function ke(t){0>Gi||(t.current=Pf[Gi],Pf[Gi]=null,Gi--)}function Ee(t,e){Gi++,Pf[Gi]=t.current,t.current=e}var Nr={},vt=Ur(Nr),kt=Ur(!1),ai=Nr;function gs(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function du(){ke(kt),ke(vt)}function rv(t,e,n){if(vt.current!==Nr)throw Error(z(168));Ee(vt,e),Ee(kt,n)}function z0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,_S(t)||"Unknown",i));return Ne({},n,r)}function pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,ai=vt.current,Ee(vt,t),Ee(kt,kt.current),!0}function iv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=z0(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,ke(kt),ke(vt),Ee(vt,t)):ke(kt),Ee(kt,n)}var Nn=null,oc=!1,Ah=!1;function $0(t){Nn===null?Nn=[t]:Nn.push(t)}function MA(t){oc=!0,$0(t)}function zr(){if(!Ah&&Nn!==null){Ah=!0;var t=0,e=_e;try{var n=Nn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,oc=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(t+1)),d0(qd,zr),i}finally{_e=e,Ah=!1}}return null}var Ki=[],Qi=0,mu=null,gu=0,$t=[],Bt=0,li=null,On=1,Dn="";function Kr(t,e){Ki[Qi++]=gu,Ki[Qi++]=mu,mu=t,gu=e}function B0(t,e,n){$t[Bt++]=On,$t[Bt++]=Dn,$t[Bt++]=li,li=t;var r=On;t=Dn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-rn(e)+i|n<<i|r,Dn=s+t}else On=1<<s|n<<i|r,Dn=t}function tp(t){t.return!==null&&(Kr(t,1),B0(t,1,0))}function np(t){for(;t===mu;)mu=Ki[--Qi],Ki[Qi]=null,gu=Ki[--Qi],Ki[Qi]=null;for(;t===li;)li=$t[--Bt],$t[Bt]=null,Dn=$t[--Bt],$t[Bt]=null,On=$t[--Bt],$t[Bt]=null}var Lt=null,Dt=null,Ce=!1,en=null;function H0(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Dt=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=li!==null?{id:On,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Dt=null,!0):!1;default:return!1}}function Cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bf(t){if(Ce){var e=Dt;if(e){var n=e;if(!sv(t,e)){if(Cf(t))throw Error(z(418));e=Er(n.nextSibling);var r=Lt;e&&sv(t,e)?H0(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Lt=t)}}else{if(Cf(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ce=!1,Lt=t}}}function ov(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function dl(t){if(t!==Lt)return!1;if(!Ce)return ov(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sf(t.type,t.memoizedProps)),e&&(e=Dt)){if(Cf(t))throw W0(),Error(z(418));for(;e;)H0(t,e),e=Er(e.nextSibling)}if(ov(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Lt?Er(t.stateNode.nextSibling):null;return!0}function W0(){for(var t=Dt;t;)t=Er(t.nextSibling)}function vs(){Dt=Lt=null,Ce=!1}function rp(t){en===null?en=[t]:en.push(t)}var VA=Xn.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function pl(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function av(t){var e=t._init;return e(t._payload)}function q0(t){function e(w,y){if(t){var I=w.deletions;I===null?(w.deletions=[y],w.flags|=16):I.push(y)}}function n(w,y){if(!t)return null;for(;y!==null;)e(w,y),y=y.sibling;return null}function r(w,y){for(w=new Map;y!==null;)y.key!==null?w.set(y.key,y):w.set(y.index,y),y=y.sibling;return w}function i(w,y){return w=Ar(w,y),w.index=0,w.sibling=null,w}function s(w,y,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<y?(w.flags|=2,y):I):(w.flags|=2,y)):(w.flags|=1048576,y)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,y,I,x){return y===null||y.tag!==6?(y=Nh(I,w.mode,x),y.return=w,y):(y=i(y,I),y.return=w,y)}function u(w,y,I,x){var O=I.type;return O===$i?h(w,y,I.props.children,x,I.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===or&&av(O)===y.type)?(x=i(y,I.props),x.ref=co(w,y,I),x.return=w,x):(x=ql(I.type,I.key,I.props,null,w.mode,x),x.ref=co(w,y,I),x.return=w,x)}function c(w,y,I,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=Oh(I,w.mode,x),y.return=w,y):(y=i(y,I.children||[]),y.return=w,y)}function h(w,y,I,x,O){return y===null||y.tag!==7?(y=si(I,w.mode,x,O),y.return=w,y):(y=i(y,I),y.return=w,y)}function d(w,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Nh(""+y,w.mode,I),y.return=w,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rl:return I=ql(y.type,y.key,y.props,null,w.mode,I),I.ref=co(w,null,y),I.return=w,I;case zi:return y=Oh(y,w.mode,I),y.return=w,y;case or:var x=y._init;return d(w,x(y._payload),I)}if(go(y)||so(y))return y=si(y,w.mode,I,null),y.return=w,y;pl(w,y)}return null}function m(w,y,I,x){var O=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return O!==null?null:a(w,y,""+I,x);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case rl:return I.key===O?u(w,y,I,x):null;case zi:return I.key===O?c(w,y,I,x):null;case or:return O=I._init,m(w,y,O(I._payload),x)}if(go(I)||so(I))return O!==null?null:h(w,y,I,x,null);pl(w,I)}return null}function g(w,y,I,x,O){if(typeof x=="string"&&x!==""||typeof x=="number")return w=w.get(I)||null,a(y,w,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rl:return w=w.get(x.key===null?I:x.key)||null,u(y,w,x,O);case zi:return w=w.get(x.key===null?I:x.key)||null,c(y,w,x,O);case or:var D=x._init;return g(w,y,I,D(x._payload),O)}if(go(x)||so(x))return w=w.get(I)||null,h(y,w,x,O,null);pl(y,x)}return null}function E(w,y,I,x){for(var O=null,D=null,T=y,v=y=0,S=null;T!==null&&v<I.length;v++){T.index>v?(S=T,T=null):S=T.sibling;var A=m(w,T,I[v],x);if(A===null){T===null&&(T=S);break}t&&T&&A.alternate===null&&e(w,T),y=s(A,y,v),D===null?O=A:D.sibling=A,D=A,T=S}if(v===I.length)return n(w,T),Ce&&Kr(w,v),O;if(T===null){for(;v<I.length;v++)T=d(w,I[v],x),T!==null&&(y=s(T,y,v),D===null?O=T:D.sibling=T,D=T);return Ce&&Kr(w,v),O}for(T=r(w,T);v<I.length;v++)S=g(T,w,v,I[v],x),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?v:S.key),y=s(S,y,v),D===null?O=S:D.sibling=S,D=S);return t&&T.forEach(function(C){return e(w,C)}),Ce&&Kr(w,v),O}function k(w,y,I,x){var O=so(I);if(typeof O!="function")throw Error(z(150));if(I=O.call(I),I==null)throw Error(z(151));for(var D=O=null,T=y,v=y=0,S=null,A=I.next();T!==null&&!A.done;v++,A=I.next()){T.index>v?(S=T,T=null):S=T.sibling;var C=m(w,T,A.value,x);if(C===null){T===null&&(T=S);break}t&&T&&C.alternate===null&&e(w,T),y=s(C,y,v),D===null?O=C:D.sibling=C,D=C,T=S}if(A.done)return n(w,T),Ce&&Kr(w,v),O;if(T===null){for(;!A.done;v++,A=I.next())A=d(w,A.value,x),A!==null&&(y=s(A,y,v),D===null?O=A:D.sibling=A,D=A);return Ce&&Kr(w,v),O}for(T=r(w,T);!A.done;v++,A=I.next())A=g(T,w,v,A.value,x),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?v:A.key),y=s(A,y,v),D===null?O=A:D.sibling=A,D=A);return t&&T.forEach(function(R){return e(w,R)}),Ce&&Kr(w,v),O}function b(w,y,I,x){if(typeof I=="object"&&I!==null&&I.type===$i&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case rl:e:{for(var O=I.key,D=y;D!==null;){if(D.key===O){if(O=I.type,O===$i){if(D.tag===7){n(w,D.sibling),y=i(D,I.props.children),y.return=w,w=y;break e}}else if(D.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===or&&av(O)===D.type){n(w,D.sibling),y=i(D,I.props),y.ref=co(w,D,I),y.return=w,w=y;break e}n(w,D);break}else e(w,D);D=D.sibling}I.type===$i?(y=si(I.props.children,w.mode,x,I.key),y.return=w,w=y):(x=ql(I.type,I.key,I.props,null,w.mode,x),x.ref=co(w,y,I),x.return=w,w=x)}return o(w);case zi:e:{for(D=I.key;y!==null;){if(y.key===D)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(w,y.sibling),y=i(y,I.children||[]),y.return=w,w=y;break e}else{n(w,y);break}else e(w,y);y=y.sibling}y=Oh(I,w.mode,x),y.return=w,w=y}return o(w);case or:return D=I._init,b(w,y,D(I._payload),x)}if(go(I))return E(w,y,I,x);if(so(I))return k(w,y,I,x);pl(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(w,y.sibling),y=i(y,I),y.return=w,w=y):(n(w,y),y=Nh(I,w.mode,x),y.return=w,w=y),o(w)):n(w,y)}return b}var ys=q0(!0),G0=q0(!1),vu=Ur(null),yu=null,Yi=null,ip=null;function sp(){ip=Yi=yu=null}function op(t){var e=vu.current;ke(vu),t._currentValue=e}function Rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function as(t,e){yu=t,ip=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(At=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if(ip!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(yu===null)throw Error(z(308));Yi=t,yu.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var Jr=null;function ap(t){Jr===null?Jr=[t]:Jr.push(t)}function K0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ap(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bn(t,n)}return i=r.interleaved,i===null?(e.next=e,ap(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bn(t,n)}function Ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gd(t,n)}}function lv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _u(t,e,n,r){var i=t.updateQueue;ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var d=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,g=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,k=a;switch(m=e,g=n,k.tag){case 1:if(E=k.payload,typeof E=="function"){d=E.call(g,d,m);break e}d=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=k.payload,m=typeof E=="function"?E.call(g,d,m):E,m==null)break e;d=Ne({},d,m);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,u=d):h=h.next=g,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ci|=o,t.lanes=o,t.memoizedState=d}}function uv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Sa={},_n=Ur(Sa),Zo=Ur(Sa),ea=Ur(Sa);function Zr(t){if(t===Sa)throw Error(z(174));return t}function up(t,e){switch(Ee(ea,e),Ee(Zo,t),Ee(_n,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cf(e,t)}ke(_n),Ee(_n,e)}function _s(){ke(_n),ke(Zo),ke(ea)}function Y0(t){Zr(ea.current);var e=Zr(_n.current),n=cf(e,t.type);e!==n&&(Ee(Zo,t),Ee(_n,n))}function cp(t){Zo.current===t&&(ke(_n),ke(Zo))}var Re=Ur(0);function wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kh=[];function hp(){for(var t=0;t<kh.length;t++)kh[t]._workInProgressVersionPrimary=null;kh.length=0}var zl=Xn.ReactCurrentDispatcher,Ph=Xn.ReactCurrentBatchConfig,ui=0,xe=null,Be=null,Je=null,Eu=!1,Ro=!1,ta=0,FA=0;function ht(){throw Error(z(321))}function fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function dp(t,e,n,r,i,s){if(ui=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zl.current=t===null||t.memoizedState===null?$A:BA,t=n(r,i),Ro){s=0;do{if(Ro=!1,ta=0,25<=s)throw Error(z(301));s+=1,Je=Be=null,e.updateQueue=null,zl.current=HA,t=n(r,i)}while(Ro)}if(zl.current=Tu,e=Be!==null&&Be.next!==null,ui=0,Je=Be=xe=null,Eu=!1,e)throw Error(z(300));return t}function pp(){var t=ta!==0;return ta=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?xe.memoizedState=Je=t:Je=Je.next=t,Je}function Qt(){if(Be===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Je===null?xe.memoizedState:Je.next;if(e!==null)Je=e,Be=t;else{if(t===null)throw Error(z(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Je===null?xe.memoizedState=Je=t:Je=Je.next=t}return Je}function na(t,e){return typeof e=="function"?e(t):e}function Ch(t){var e=Qt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((ui&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=d,o=r):u=u.next=d,xe.lanes|=h,ci|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,an(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bh(t){var e=Qt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);an(s,e.memoizedState)||(At=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function X0(){}function J0(t,e){var n=xe,r=Qt(),i=e(),s=!an(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,mp(tw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,ra(9,ew.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(z(349));ui&30||Z0(n,e,i)}return i}function Z0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ew(t,e,n,r){e.value=n,e.getSnapshot=r,nw(e)&&rw(t)}function tw(t,e,n){return n(function(){nw(e)&&rw(t)})}function nw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function rw(t){var e=Bn(t,1);e!==null&&sn(e,t,1,-1)}function cv(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=zA.bind(null,xe,t),[e.memoizedState,t]}function ra(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function iw(){return Qt().memoizedState}function $l(t,e,n,r){var i=pn();xe.flags|=t,i.memoizedState=ra(1|e,n,void 0,r===void 0?null:r)}function ac(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&fp(r,o.deps)){i.memoizedState=ra(e,n,s,r);return}}xe.flags|=t,i.memoizedState=ra(1|e,n,s,r)}function hv(t,e){return $l(8390656,8,t,e)}function mp(t,e){return ac(2048,8,t,e)}function sw(t,e){return ac(4,2,t,e)}function ow(t,e){return ac(4,4,t,e)}function aw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lw(t,e,n){return n=n!=null?n.concat([t]):null,ac(4,4,aw.bind(null,e,t),n)}function gp(){}function uw(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cw(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hw(t,e,n){return ui&21?(an(n,e)||(n=g0(),xe.lanes|=n,ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n)}function jA(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Ph.transition;Ph.transition={};try{t(!1),e()}finally{_e=n,Ph.transition=r}}function fw(){return Qt().memoizedState}function UA(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dw(t))pw(e,n);else if(n=K0(t,e,n,r),n!==null){var i=Et();sn(n,t,r,i),mw(n,e,r)}}function zA(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dw(t))pw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,an(a,o)){var u=e.interleaved;u===null?(i.next=i,ap(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=K0(t,e,i,r),n!==null&&(i=Et(),sn(n,t,r,i),mw(n,e,r))}}function dw(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function pw(t,e){Ro=Eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gd(t,n)}}var Tu={readContext:Kt,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},$A={readContext:Kt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:hv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$l(4194308,4,aw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $l(4194308,4,t,e)},useInsertionEffect:function(t,e){return $l(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=UA.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:cv,useDebugValue:gp,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=cv(!1),e=t[0];return t=jA.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=pn();if(Ce){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Ze===null)throw Error(z(349));ui&30||Z0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hv(tw.bind(null,r,s,t),[t]),r.flags|=2048,ra(9,ew.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=Ze.identifierPrefix;if(Ce){var n=Dn,r=On;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BA={readContext:Kt,useCallback:uw,useContext:Kt,useEffect:mp,useImperativeHandle:lw,useInsertionEffect:sw,useLayoutEffect:ow,useMemo:cw,useReducer:Ch,useRef:iw,useState:function(){return Ch(na)},useDebugValue:gp,useDeferredValue:function(t){var e=Qt();return hw(e,Be.memoizedState,t)},useTransition:function(){var t=Ch(na)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:X0,useSyncExternalStore:J0,useId:fw,unstable_isNewReconciler:!1},HA={readContext:Kt,useCallback:uw,useContext:Kt,useEffect:mp,useImperativeHandle:lw,useInsertionEffect:sw,useLayoutEffect:ow,useMemo:cw,useReducer:bh,useRef:iw,useState:function(){return bh(na)},useDebugValue:gp,useDeferredValue:function(t){var e=Qt();return Be===null?e.memoizedState=t:hw(e,Be.memoizedState,t)},useTransition:function(){var t=bh(na)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:X0,useSyncExternalStore:J0,useId:fw,unstable_isNewReconciler:!1};function Jt(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lc={isMounted:function(t){return(t=t._reactInternals)?Ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Sr(t),s=jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(sn(e,t,i,r),Ul(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Sr(t),s=jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(sn(e,t,i,r),Ul(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Sr(t),i=jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(sn(e,t,r,n),Ul(e,t,r))}};function fv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qo(n,r)||!Qo(i,s):!0}function gw(t,e,n){var r=!1,i=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kt(s):(i=Pt(e)?ai:vt.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lc.enqueueReplaceState(e,e.state,null)}function Nf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},lp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Kt(s):(s=Pt(e)?ai:vt.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lc.enqueueReplaceState(i,i.state,null),_u(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",r=e;do n+=yS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Rh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var WA=typeof WeakMap=="function"?WeakMap:Map;function vw(t,e,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Su||(Su=!0,Bf=r),Of(t,e)},n}function yw(t,e,n){n=jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Of(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Of(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new WA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=sk.bind(null,t,e,n),e.then(t,t))}function mv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jn(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var qA=Xn.ReactCurrentOwner,At=!1;function wt(t,e,n,r){e.child=t===null?G0(e,null,n,r):ys(e,t.child,n,r)}function vv(t,e,n,r,i){n=n.render;var s=e.ref;return as(e,i),r=dp(t,e,n,r,s,i),n=pp(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(Ce&&n&&tp(e),e.flags|=1,wt(t,e,r,i),e.child)}function yv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_w(t,e,s,r,i)):(t=ql(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=Ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function _w(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qo(s,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(At=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return Df(t,e,n,r,i)}function ww(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Ji,Ot),Ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(Ji,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(Ji,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(Ji,Ot),Ot|=r;return wt(t,e,i,n),e.child}function Ew(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Df(t,e,n,r,i){var s=Pt(n)?ai:vt.current;return s=gs(e,s),as(e,i),n=dp(t,e,n,r,s,i),r=pp(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(Ce&&r&&tp(e),e.flags|=1,wt(t,e,n,i),e.child)}function _v(t,e,n,r,i){if(Pt(n)){var s=!0;pu(e)}else s=!1;if(as(e,i),e.stateNode===null)Bl(t,e),gw(e,n,r),Nf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kt(c):(c=Pt(n)?ai:vt.current,c=gs(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&dv(e,o,r,c),ar=!1;var m=e.memoizedState;o.state=m,_u(e,r,o,i),u=e.memoizedState,a!==r||m!==u||kt.current||ar?(typeof h=="function"&&(xf(e,n,h,r),u=e.memoizedState),(a=ar||fv(e,n,a,r,m,u,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Q0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jt(e.type,a),o.props=c,d=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Kt(u):(u=Pt(n)?ai:vt.current,u=gs(e,u));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||m!==u)&&dv(e,o,r,u),ar=!1,m=e.memoizedState,o.state=m,_u(e,r,o,i);var E=e.memoizedState;a!==d||m!==E||kt.current||ar?(typeof g=="function"&&(xf(e,n,g,r),E=e.memoizedState),(c=ar||fv(e,n,c,r,m,E,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Lf(t,e,n,r,s,i)}function Lf(t,e,n,r,i,s){Ew(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&iv(e,n,!1),Hn(t,e,s);r=e.stateNode,qA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,a,s)):wt(t,e,a,s),e.memoizedState=r.state,i&&iv(e,n,!0),e.child}function Tw(t){var e=t.stateNode;e.pendingContext?rv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rv(t,e.context,!1),up(t,e.containerInfo)}function wv(t,e,n,r,i){return vs(),rp(i),e.flags|=256,wt(t,e,n,r),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iw(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Re,i&1),t===null)return bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hc(o,r,0,null),t=si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vf(n),e.memoizedState=Mf,t):vp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return GA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ar(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ar(a,s):(s=si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,r}return s=t.child,t=s.sibling,r=Ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vp(t,e){return e=hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ml(t,e,n,r){return r!==null&&rp(r),ys(e,t.child,null,n),t=vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Rh(Error(z(422))),ml(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hc({mode:"visible",children:r.children},i,0,null),s=si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ys(e,t.child,null,o),e.child.memoizedState=Vf(o),e.memoizedState=Mf,s);if(!(e.mode&1))return ml(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=Rh(s,r,void 0),ml(t,e,o,r)}if(a=(o&t.childLanes)!==0,At||a){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(t,i),sn(r,t,i,-1))}return Ip(),r=Rh(Error(z(421))),ml(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ok.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Dt=Er(i.nextSibling),Lt=e,Ce=!0,en=null,t!==null&&($t[Bt++]=On,$t[Bt++]=Dn,$t[Bt++]=li,On=t.id,Dn=t.overflow,li=e),e=vp(e,r.children),e.flags|=4096,e)}function Ev(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rf(t.return,e,n)}function xh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Sw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ev(t,n,e);else if(t.tag===19)Ev(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xh(e,!0,n,null,s);break;case"together":xh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KA(t,e,n){switch(e.tag){case 3:Tw(e),vs();break;case 5:Y0(e);break;case 1:Pt(e.type)&&pu(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(vu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?Iw(t,e,n):(Ee(Re,Re.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);Ee(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Sw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,ww(t,e,n)}return Hn(t,e,n)}var Aw,Ff,kw,Pw;Aw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ff=function(){};kw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(_n.current);var s=null;switch(n){case"input":i=of(t,i),r=of(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=uf(t,i),r=uf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fu)}hf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Pw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ho(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function QA(t,e,n){var r=e.pendingProps;switch(np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Pt(e.type)&&du(),ft(e),null;case 3:return r=e.stateNode,_s(),ke(kt),ke(vt),hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(qf(en),en=null))),Ff(t,e),ft(e),null;case 5:cp(e);var i=Zr(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)kw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return ft(e),null}if(t=Zr(_n.current),dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<yo.length;i++)Se(yo[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Rg(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":Ng(r,s),Se("invalid",r)}hf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,a,t),i=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":il(r),xg(r,s,!0);break;case"textarea":il(r),Og(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[Jo]=r,Aw(t,e,!1,!1),e.stateNode=t;e:{switch(o=ff(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)Se(yo[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":Rg(t,r),i=of(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Se("invalid",t);break;case"textarea":Ng(t,r),i=uf(t,r),Se("invalid",t);break;default:i=r}hf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?i0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&n0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Bo(t,u):typeof u=="number"&&Bo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&zd(t,s,u,o))}switch(n){case"input":il(t),xg(t,r,!1);break;case"textarea":il(t),Og(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)Pw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Zr(ea.current),Zr(_n.current),dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return ft(e),null;case 13:if(ke(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Dt!==null&&e.mode&1&&!(e.flags&128))W0(),vs(),e.flags|=98560,s=!1;else if(s=dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[gn]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else en!==null&&(qf(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?We===0&&(We=3):Ip())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return _s(),Ff(t,e),t===null&&Yo(e.stateNode.containerInfo),ft(e),null;case 10:return op(e.type._context),ft(e),null;case 17:return Pt(e.type)&&du(),ft(e),null;case 19:if(ke(Re),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ho(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wu(t),o!==null){for(e.flags|=128,ho(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>Es&&(e.flags|=128,r=!0,ho(s,!1),e.lanes=4194304)}else{if(!r)if(t=wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return ft(e),null}else 2*Fe()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Re.current,Ee(Re,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return Tp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function YA(t,e){switch(np(e),e.tag){case 1:return Pt(e.type)&&du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),ke(kt),ke(vt),hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cp(e),null;case 13:if(ke(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Re),null;case 4:return _s(),null;case 10:return op(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var gl=!1,mt=!1,XA=typeof WeakSet=="function"?WeakSet:Set,G=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function jf(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Tv=!1;function JA(t,e){if(Tf=uu,t=N0(),ep(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,d=t,m=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)m=d,d=g;for(;;){if(d===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(g=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(If={focusedElem:t,selectionRange:n},uu=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var k=E.memoizedProps,b=E.memoizedState,w=e.stateNode,y=w.getSnapshotBeforeUpdate(e.elementType===e.type?k:Jt(e.type,k),b);w.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(x){Le(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return E=Tv,Tv=!1,E}function xo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jf(e,n,s)}i=i.next}while(i!==r)}}function uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cw(t){var e=t.alternate;e!==null&&(t.alternate=null,Cw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[Jo],delete e[kf],delete e[DA],delete e[LA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bw(t){return t.tag===5||t.tag===3||t.tag===4}function Iv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fu));else if(r!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function $f(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var nt=null,Zt=!1;function rr(t,e,n){for(n=n.child;n!==null;)Rw(t,e,n),n=n.sibling}function Rw(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(tc,n)}catch{}switch(n.tag){case 5:mt||Xi(n,e);case 6:var r=nt,i=Zt;nt=null,rr(t,e,n),nt=r,Zt=i,nt!==null&&(Zt?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(Zt?(t=nt,n=n.stateNode,t.nodeType===8?Sh(t.parentNode,n):t.nodeType===1&&Sh(t,n),Go(t)):Sh(nt,n.stateNode));break;case 4:r=nt,i=Zt,nt=n.stateNode.containerInfo,Zt=!0,rr(t,e,n),nt=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jf(n,e,o),i=i.next}while(i!==r)}rr(t,e,n);break;case 1:if(!mt&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,rr(t,e,n),mt=r):rr(t,e,n);break;default:rr(t,e,n)}}function Sv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XA),e.forEach(function(r){var i=ak.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:nt=a.stateNode,Zt=!1;break e;case 3:nt=a.stateNode.containerInfo,Zt=!0;break e;case 4:nt=a.stateNode.containerInfo,Zt=!0;break e}a=a.return}if(nt===null)throw Error(z(160));Rw(s,o,i),nt=null,Zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xw(e,t),e=e.sibling}function xw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),dn(t),r&4){try{xo(3,t,t.return),uc(3,t)}catch(k){Le(t,t.return,k)}try{xo(5,t,t.return)}catch(k){Le(t,t.return,k)}}break;case 1:Xt(e,t),dn(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(Xt(e,t),dn(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var i=t.stateNode;try{Bo(i,"")}catch(k){Le(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z_(i,s),ff(a,o);var c=ff(a,s);for(o=0;o<u.length;o+=2){var h=u[o],d=u[o+1];h==="style"?i0(i,d):h==="dangerouslySetInnerHTML"?n0(i,d):h==="children"?Bo(i,d):zd(i,h,d,c)}switch(a){case"input":af(i,s);break;case"textarea":e0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?rs(i,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?rs(i,!!s.multiple,s.defaultValue,!0):rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Jo]=s}catch(k){Le(t,t.return,k)}}break;case 6:if(Xt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Le(t,t.return,k)}}break;case 3:if(Xt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(e.containerInfo)}catch(k){Le(t,t.return,k)}break;case 4:Xt(e,t),dn(t);break;case 13:Xt(e,t),dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wp=Fe())),r&4&&Sv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(c=mt)||h,Xt(e,t),mt=c):Xt(e,t),dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(G=t,h=t.child;h!==null;){for(d=G=h;G!==null;){switch(m=G,g=m.child,m.tag){case 0:case 11:case 14:case 15:xo(4,m,m.return);break;case 1:Xi(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(k){Le(r,n,k)}}break;case 5:Xi(m,m.return);break;case 22:if(m.memoizedState!==null){kv(d);continue}}g!==null?(g.return=m,G=g):kv(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=r0("display",o))}catch(k){Le(t,t.return,k)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(k){Le(t,t.return,k)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xt(e,t),dn(t),r&4&&Sv(t);break;case 21:break;default:Xt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bw(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bo(i,""),r.flags&=-33);var s=Iv(t);$f(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Iv(t);zf(t,a,o);break;default:throw Error(z(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZA(t,e,n){G=t,Nw(t)}function Nw(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||mt;a=gl;var c=mt;if(gl=o,(mt=u)&&!c)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?Pv(i):u!==null?(u.return=o,G=u):Pv(i);for(;s!==null;)G=s,Nw(s),s=s.sibling;G=i,gl=a,mt=c}Av(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):Av(t)}}function Av(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||uc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Go(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}mt||e.flags&512&&Uf(e)}catch(m){Le(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function kv(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Pv(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uc(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Le(e,i,u)}}var s=e.return;try{Uf(e)}catch(u){Le(e,s,u)}break;case 5:var o=e.return;try{Uf(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var ek=Math.ceil,Iu=Xn.ReactCurrentDispatcher,yp=Xn.ReactCurrentOwner,qt=Xn.ReactCurrentBatchConfig,pe=0,Ze=null,ze=null,st=0,Ot=0,Ji=Ur(0),We=0,ia=null,ci=0,cc=0,_p=0,No=null,St=null,wp=0,Es=1/0,xn=null,Su=!1,Bf=null,Ir=null,vl=!1,mr=null,Au=0,Oo=0,Hf=null,Hl=-1,Wl=0;function Et(){return pe&6?Fe():Hl!==-1?Hl:Hl=Fe()}function Sr(t){return t.mode&1?pe&2&&st!==0?st&-st:VA.transition!==null?(Wl===0&&(Wl=g0()),Wl):(t=_e,t!==0||(t=window.event,t=t===void 0?16:I0(t.type)),t):1}function sn(t,e,n,r){if(50<Oo)throw Oo=0,Hf=null,Error(z(185));Ea(t,n,r),(!(pe&2)||t!==Ze)&&(t===Ze&&(!(pe&2)&&(cc|=n),We===4&&ur(t,st)),Ct(t,r),n===1&&pe===0&&!(e.mode&1)&&(Es=Fe()+500,oc&&zr()))}function Ct(t,e){var n=t.callbackNode;VS(t,e);var r=lu(t,t===Ze?st:0);if(r===0)n!==null&&Mg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mg(n),e===1)t.tag===0?MA(Cv.bind(null,t)):$0(Cv.bind(null,t)),NA(function(){!(pe&6)&&zr()}),n=null;else{switch(v0(r)){case 1:n=qd;break;case 4:n=p0;break;case 16:n=au;break;case 536870912:n=m0;break;default:n=au}n=Uw(n,Ow.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ow(t,e){if(Hl=-1,Wl=0,pe&6)throw Error(z(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var r=lu(t,t===Ze?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ku(t,r);else{e=r;var i=pe;pe|=2;var s=Lw();(Ze!==t||st!==e)&&(xn=null,Es=Fe()+500,ii(t,e));do try{rk();break}catch(a){Dw(t,a)}while(!0);sp(),Iu.current=s,pe=i,ze!==null?e=0:(Ze=null,st=0,e=We)}if(e!==0){if(e===2&&(i=vf(t),i!==0&&(r=i,e=Wf(t,i))),e===1)throw n=ia,ii(t,0),ur(t,r),Ct(t,Fe()),n;if(e===6)ur(t,r);else{if(i=t.current.alternate,!(r&30)&&!tk(i)&&(e=ku(t,r),e===2&&(s=vf(t),s!==0&&(r=s,e=Wf(t,s))),e===1))throw n=ia,ii(t,0),ur(t,r),Ct(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Qr(t,St,xn);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=wp+500-Fe(),10<e)){if(lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Af(Qr.bind(null,t,St,xn),e);break}Qr(t,St,xn);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ek(r/1960))-r,10<r){t.timeoutHandle=Af(Qr.bind(null,t,St,xn),r);break}Qr(t,St,xn);break;case 5:Qr(t,St,xn);break;default:throw Error(z(329))}}}return Ct(t,Fe()),t.callbackNode===n?Ow.bind(null,t):null}function Wf(t,e){var n=No;return t.current.memoizedState.isDehydrated&&(ii(t,e).flags|=256),t=ku(t,e),t!==2&&(e=St,St=n,e!==null&&qf(e)),t}function qf(t){St===null?St=t:St.push.apply(St,t)}function tk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!an(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~_p,e&=~cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function Cv(t){if(pe&6)throw Error(z(327));ls();var e=lu(t,0);if(!(e&1))return Ct(t,Fe()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var r=vf(t);r!==0&&(e=r,n=Wf(t,r))}if(n===1)throw n=ia,ii(t,0),ur(t,e),Ct(t,Fe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,St,xn),Ct(t,Fe()),null}function Ep(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(Es=Fe()+500,oc&&zr())}}function hi(t){mr!==null&&mr.tag===0&&!(pe&6)&&ls();var e=pe;pe|=1;var n=qt.transition,r=_e;try{if(qt.transition=null,_e=1,t)return t()}finally{_e=r,qt.transition=n,pe=e,!(pe&6)&&zr()}}function Tp(){Ot=Ji.current,ke(Ji)}function ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xA(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(np(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&du();break;case 3:_s(),ke(kt),ke(vt),hp();break;case 5:cp(r);break;case 4:_s();break;case 13:ke(Re);break;case 19:ke(Re);break;case 10:op(r.type._context);break;case 22:case 23:Tp()}n=n.return}if(Ze=t,ze=t=Ar(t.current,null),st=Ot=e,We=0,ia=null,_p=cc=ci=0,St=No=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function Dw(t,e){do{var n=ze;try{if(sp(),zl.current=Tu,Eu){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eu=!1}if(ui=0,Je=Be=xe=null,Ro=!1,ta=0,yp.current=null,n===null||n.return===null){We=1,ia=e,ze=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=st,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=mv(o);if(g!==null){g.flags&=-257,gv(g,o,a,s,e),g.mode&1&&pv(s,c,e),e=g,u=c;var E=e.updateQueue;if(E===null){var k=new Set;k.add(u),e.updateQueue=k}else E.add(u);break e}else{if(!(e&1)){pv(s,c,e),Ip();break e}u=Error(z(426))}}else if(Ce&&a.mode&1){var b=mv(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),gv(b,o,a,s,e),rp(ws(u,a));break e}}s=u=ws(u,a),We!==4&&(We=2),No===null?No=[s]:No.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=vw(s,u,e);lv(s,w);break e;case 1:a=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Ir===null||!Ir.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=yw(s,a,e);lv(s,x);break e}}s=s.return}while(s!==null)}Vw(n)}catch(O){e=O,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function Lw(){var t=Iu.current;return Iu.current=Tu,t===null?Tu:t}function Ip(){(We===0||We===3||We===2)&&(We=4),Ze===null||!(ci&268435455)&&!(cc&268435455)||ur(Ze,st)}function ku(t,e){var n=pe;pe|=2;var r=Lw();(Ze!==t||st!==e)&&(xn=null,ii(t,e));do try{nk();break}catch(i){Dw(t,i)}while(!0);if(sp(),pe=n,Iu.current=r,ze!==null)throw Error(z(261));return Ze=null,st=0,We}function nk(){for(;ze!==null;)Mw(ze)}function rk(){for(;ze!==null&&!CS();)Mw(ze)}function Mw(t){var e=jw(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?Vw(t):ze=e,yp.current=null}function Vw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YA(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,ze=null;return}}else if(n=QA(n,e,Ot),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);We===0&&(We=5)}function Qr(t,e,n){var r=_e,i=qt.transition;try{qt.transition=null,_e=1,ik(t,e,n,r)}finally{qt.transition=i,_e=r}return null}function ik(t,e,n,r){do ls();while(mr!==null);if(pe&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FS(t,s),t===Ze&&(ze=Ze=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,Uw(au,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qt.transition,qt.transition=null;var o=_e;_e=1;var a=pe;pe|=4,yp.current=null,JA(t,n),xw(n,t),SA(If),uu=!!Tf,If=Tf=null,t.current=n,ZA(n),bS(),pe=a,_e=o,qt.transition=s}else t.current=n;if(vl&&(vl=!1,mr=t,Au=i),s=t.pendingLanes,s===0&&(Ir=null),NS(n.stateNode),Ct(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Su)throw Su=!1,t=Bf,Bf=null,t;return Au&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===Hf?Oo++:(Oo=0,Hf=t):Oo=0,zr(),null}function ls(){if(mr!==null){var t=v0(Au),e=qt.transition,n=_e;try{if(qt.transition=null,_e=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,Au=0,pe&6)throw Error(z(331));var i=pe;for(pe|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(G=c;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:xo(8,h,s)}var d=h.child;if(d!==null)d.return=h,G=d;else for(;G!==null;){h=G;var m=h.sibling,g=h.return;if(Cw(h),h===c){G=null;break}if(m!==null){m.return=g,G=m;break}G=g}}}var E=s.alternate;if(E!==null){var k=E.child;if(k!==null){E.child=null;do{var b=k.sibling;k.sibling=null,k=b}while(k!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,G=w;break e}G=s.return}}var y=t.current;for(G=y;G!==null;){o=G;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,G=I;else e:for(o=y;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uc(9,a)}}catch(O){Le(a,a.return,O)}if(a===o){G=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,G=x;break e}G=a.return}}if(pe=i,zr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(tc,t)}catch{}r=!0}return r}finally{_e=n,qt.transition=e}}return!1}function bv(t,e,n){e=ws(n,e),e=vw(t,e,1),t=Tr(t,e,1),e=Et(),t!==null&&(Ea(t,1,e),Ct(t,e))}function Le(t,e,n){if(t.tag===3)bv(t,t,n);else for(;e!==null;){if(e.tag===3){bv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=ws(n,t),t=yw(e,t,1),e=Tr(e,t,1),t=Et(),e!==null&&(Ea(e,1,t),Ct(e,t));break}}e=e.return}}function sk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(st&n)===n&&(We===4||We===3&&(st&130023424)===st&&500>Fe()-wp?ii(t,0):_p|=n),Ct(t,e)}function Fw(t,e){e===0&&(t.mode&1?(e=al,al<<=1,!(al&130023424)&&(al=4194304)):e=1);var n=Et();t=Bn(t,e),t!==null&&(Ea(t,e,n),Ct(t,n))}function ok(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fw(t,n)}function ak(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),Fw(t,n)}var jw;jw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)At=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return At=!1,KA(t,e,n);At=!!(t.flags&131072)}else At=!1,Ce&&e.flags&1048576&&B0(e,gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bl(t,e),t=e.pendingProps;var i=gs(e,vt.current);as(e,n),i=dp(null,e,r,t,i,n);var s=pp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,pu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lp(e),i.updater=lc,e.stateNode=i,i._reactInternals=e,Nf(e,r,t,n),e=Lf(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&tp(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uk(r),t=Jt(r,t),i){case 0:e=Df(null,e,r,t,n);break e;case 1:e=_v(null,e,r,t,n);break e;case 11:e=vv(null,e,r,t,n);break e;case 14:e=yv(null,e,r,Jt(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Df(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),_v(t,e,r,i,n);case 3:e:{if(Tw(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Q0(t,e),_u(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ws(Error(z(423)),e),e=wv(t,e,r,n,i);break e}else if(r!==i){i=ws(Error(z(424)),e),e=wv(t,e,r,n,i);break e}else for(Dt=Er(e.stateNode.containerInfo.firstChild),Lt=e,Ce=!0,en=null,n=G0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),r===i){e=Hn(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return Y0(e),t===null&&bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sf(r,i)?o=null:s!==null&&Sf(r,s)&&(e.flags|=32),Ew(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&bf(e),null;case 13:return Iw(t,e,n);case 4:return up(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ys(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),vv(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(vu,r._currentValue),r._currentValue=o,s!==null)if(an(s.value,o)){if(s.children===i.children&&!kt.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=jn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Rf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,as(e,n),i=Kt(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),yv(t,e,r,i,n);case 15:return _w(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Bl(t,e),e.tag=1,Pt(r)?(t=!0,pu(e)):t=!1,as(e,n),gw(e,r,i),Nf(e,r,i,n),Lf(null,e,r,!0,t,n);case 19:return Sw(t,e,n);case 22:return ww(t,e,n)}throw Error(z(156,e.tag))};function Uw(t,e){return d0(t,e)}function lk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new lk(t,e,n,r)}function Sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uk(t){if(typeof t=="function")return Sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bd)return 11;if(t===Hd)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ql(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $i:return si(n.children,i,s,e);case $d:o=8,i|=8;break;case tf:return t=Wt(12,n,e,i|2),t.elementType=tf,t.lanes=s,t;case nf:return t=Wt(13,n,e,i),t.elementType=nf,t.lanes=s,t;case rf:return t=Wt(19,n,e,i),t.elementType=rf,t.lanes=s,t;case Y_:return hc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K_:o=10;break e;case Q_:o=9;break e;case Bd:o=11;break e;case Hd:o=14;break e;case or:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function si(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function hc(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=Y_,t.lanes=n,t.stateNode={isHidden:!1},t}function Nh(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Oh(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ck(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dh(0),this.expirationTimes=dh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ap(t,e,n,r,i,s,o,a,u){return t=new ck(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lp(s),t}function hk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zw(t){if(!t)return Nr;t=t._reactInternals;e:{if(Ti(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Pt(n))return z0(t,n,e)}return e}function $w(t,e,n,r,i,s,o,a,u){return t=Ap(n,r,!0,t,i,s,o,a,u),t.context=zw(null),n=t.current,r=Et(),i=Sr(n),s=jn(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,Ea(t,i,r),Ct(t,r),t}function fc(t,e,n,r){var i=e.current,s=Et(),o=Sr(i);return n=zw(n),e.context===null?e.context=n:e.pendingContext=n,e=jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(sn(t,i,o,s),Ul(t,i,o)),o}function Pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kp(t,e){Rv(t,e),(t=t.alternate)&&Rv(t,e)}function fk(){return null}var Bw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pp(t){this._internalRoot=t}dc.prototype.render=Pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));fc(t,e,null,null)};dc.prototype.unmount=Pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){fc(null,t,null,null)}),e[$n]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var e=w0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&T0(t)}};function Cp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xv(){}function dk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Pu(o);s.call(c)}}var o=$w(e,r,t,0,null,!1,!1,"",xv);return t._reactRootContainer=o,t[$n]=o.current,Yo(t.nodeType===8?t.parentNode:t),hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Pu(u);a.call(c)}}var u=Ap(t,0,!1,null,null,!1,!1,"",xv);return t._reactRootContainer=u,t[$n]=u.current,Yo(t.nodeType===8?t.parentNode:t),hi(function(){fc(e,u,n,r)}),u}function mc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Pu(o);a.call(u)}}fc(e,o,t,i)}else o=dk(n,e,t,i,r);return Pu(o)}y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vo(e.pendingLanes);n!==0&&(Gd(e,n|1),Ct(e,Fe()),!(pe&6)&&(Es=Fe()+500,zr()))}break;case 13:hi(function(){var r=Bn(t,1);if(r!==null){var i=Et();sn(r,t,1,i)}}),kp(t,1)}};Kd=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=Et();sn(e,t,134217728,n)}kp(t,134217728)}};_0=function(t){if(t.tag===13){var e=Sr(t),n=Bn(t,e);if(n!==null){var r=Et();sn(n,t,e,r)}kp(t,e)}};w0=function(){return _e};E0=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};pf=function(t,e,n){switch(e){case"input":if(af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sc(r);if(!i)throw Error(z(90));J_(r),af(r,i)}}}break;case"textarea":e0(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};a0=Ep;l0=hi;var pk={usingClientEntryPoint:!1,Events:[Ia,qi,sc,s0,o0,Ep]},fo={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mk={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h0(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||fk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{tc=yl.inject(mk),yn=yl}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pk;Ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cp(e))throw Error(z(200));return hk(t,e,null,n)};Ft.createRoot=function(t,e){if(!Cp(t))throw Error(z(299));var n=!1,r="",i=Bw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ap(t,1,!1,null,null,n,!1,r,i),t[$n]=e.current,Yo(t.nodeType===8?t.parentNode:t),new Pp(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=h0(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return hi(t)};Ft.hydrate=function(t,e,n){if(!pc(e))throw Error(z(200));return mc(null,t,e,!0,n)};Ft.hydrateRoot=function(t,e,n){if(!Cp(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Bw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$w(e,null,t,1,n??null,i,!1,s,o),t[$n]=e.current,Yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new dc(e)};Ft.render=function(t,e,n){if(!pc(e))throw Error(z(200));return mc(null,t,e,!1,n)};Ft.unmountComponentAtNode=function(t){if(!pc(t))throw Error(z(40));return t._reactRootContainer?(hi(function(){mc(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};Ft.unstable_batchedUpdates=Ep;Ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return mc(t,e,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function Hw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hw)}catch(t){console.error(t)}}Hw(),H_.exports=Ft;var gk=H_.exports,Nv=gk;Zh.createRoot=Nv.createRoot,Zh.hydrateRoot=Nv.hydrateRoot;const vk="/banner3.jpg";function _l({name:t,icon:e,pos:n,id:r}){return U.jsx("div",{className:`bubble-area ${n}`,children:U.jsxs("a",{href:"#"+r,children:[U.jsx("span",{className:"bubble-icon",children:e}),U.jsx("span",{className:"bubble-label",children:t})]})})}function Vi({title:t,description:e}){return U.jsxs("div",{className:"skill-card",children:[U.jsx("h3",{className:"skill-title",children:t}),U.jsx("p",{className:"skill-description",children:e})]})}const yk=()=>{const t=["Java","JavaScript","Python","Scala"];return U.jsxs("div",{className:"languages-section",children:[U.jsx("h2",{className:"section-title",children:"Programming Languages"}),U.jsx("ul",{className:"languages-list",children:t.map((e,n)=>U.jsx("li",{className:"language-item",children:e},n))})]})};var Ww={exports:{}};(function(t,e){(function(n,r){t.exports=r(J)})(typeof self<"u"?self:BI,n=>(()=>{var r={7403:(a,u,c)=>{c.d(u,{default:()=>H});var h=c(4087),d=c.n(h);const m=function($){return new RegExp(/<[a-z][\s\S]*>/i).test($)},g=function($,V){return Math.floor(Math.random()*(V-$+1))+$};var E="TYPE_CHARACTER",k="REMOVE_CHARACTER",b="REMOVE_ALL",w="REMOVE_LAST_VISIBLE_NODE",y="PAUSE_FOR",I="CALL_FUNCTION",x="ADD_HTML_TAG_ELEMENT",O="CHANGE_DELETE_SPEED",D="CHANGE_DELAY",T="CHANGE_CURSOR",v="PASTE_STRING",S="HTML_TAG";function A($){return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(V){return typeof V}:function(V){return V&&typeof Symbol=="function"&&V.constructor===Symbol&&V!==Symbol.prototype?"symbol":typeof V},A($)}function C($,V){var Y=Object.keys($);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols($);V&&(W=W.filter(function(me){return Object.getOwnPropertyDescriptor($,me).enumerable})),Y.push.apply(Y,W)}return Y}function R($){for(var V=1;V<arguments.length;V++){var Y=arguments[V]!=null?arguments[V]:{};V%2?C(Object(Y),!0).forEach(function(W){oe($,W,Y[W])}):Object.getOwnPropertyDescriptors?Object.defineProperties($,Object.getOwnPropertyDescriptors(Y)):C(Object(Y)).forEach(function(W){Object.defineProperty($,W,Object.getOwnPropertyDescriptor(Y,W))})}return $}function P($){return function(V){if(Array.isArray(V))return se(V)}($)||function(V){if(typeof Symbol<"u"&&V[Symbol.iterator]!=null||V["@@iterator"]!=null)return Array.from(V)}($)||function(V,Y){if(V){if(typeof V=="string")return se(V,Y);var W=Object.prototype.toString.call(V).slice(8,-1);return W==="Object"&&V.constructor&&(W=V.constructor.name),W==="Map"||W==="Set"?Array.from(V):W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W)?se(V,Y):void 0}}($)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function se($,V){(V==null||V>$.length)&&(V=$.length);for(var Y=0,W=new Array(V);Y<V;Y++)W[Y]=$[Y];return W}function fe($,V){for(var Y=0;Y<V.length;Y++){var W=V[Y];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty($,$e(W.key),W)}}function oe($,V,Y){return(V=$e(V))in $?Object.defineProperty($,V,{value:Y,enumerable:!0,configurable:!0,writable:!0}):$[V]=Y,$}function $e($){var V=function(Y,W){if(A(Y)!=="object"||Y===null)return Y;var me=Y[Symbol.toPrimitive];if(me!==void 0){var M=me.call(Y,"string");if(A(M)!=="object")return M;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Y)}($);return A(V)==="symbol"?V:String(V)}const H=function(){function $(W,me){var M=this;if(function(K,ue){if(!(K instanceof ue))throw new TypeError("Cannot call a class as a function")}(this,$),oe(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),oe(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),oe(this,"setupWrapperElement",function(){M.state.elements.container&&(M.state.elements.wrapper.className=M.options.wrapperClassName,M.state.elements.cursor.className=M.options.cursorClassName,M.state.elements.cursor.innerHTML=M.options.cursor,M.state.elements.container.innerHTML="",M.state.elements.container.appendChild(M.state.elements.wrapper),M.state.elements.container.appendChild(M.state.elements.cursor))}),oe(this,"start",function(){return M.state.eventLoopPaused=!1,M.runEventLoop(),M}),oe(this,"pause",function(){return M.state.eventLoopPaused=!0,M}),oe(this,"stop",function(){return M.state.eventLoop&&((0,h.cancel)(M.state.eventLoop),M.state.eventLoop=null),M}),oe(this,"pauseFor",function(K){return M.addEventToQueue(y,{ms:K}),M}),oe(this,"typeOutAllStrings",function(){return typeof M.options.strings=="string"?(M.typeString(M.options.strings).pauseFor(M.options.pauseFor),M):(M.options.strings.forEach(function(K){M.typeString(K).pauseFor(M.options.pauseFor).deleteAll(M.options.deleteSpeed)}),M)}),oe(this,"typeString",function(K){var ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(m(K))return M.typeOutHTMLString(K,ue);if(K){var Ke=(M.options||{}).stringSplitter,Qe=typeof Ke=="function"?Ke(K):K.split("");M.typeCharacters(Qe,ue)}return M}),oe(this,"pasteString",function(K){var ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return m(K)?M.typeOutHTMLString(K,ue,!0):(K&&M.addEventToQueue(v,{character:K,node:ue}),M)}),oe(this,"typeOutHTMLString",function(K){var ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Ke=arguments.length>2?arguments[2]:void 0,Qe=function(Pn){var Cn=document.createElement("div");return Cn.innerHTML=Pn,Cn.childNodes}(K);if(Qe.length>0)for(var ye=0;ye<Qe.length;ye++){var et=Qe[ye],hn=et.innerHTML;et&&et.nodeType!==3?(et.innerHTML="",M.addEventToQueue(x,{node:et,parentNode:ue}),Ke?M.pasteString(hn,et):M.typeString(hn,et)):et.textContent&&(Ke?M.pasteString(et.textContent,ue):M.typeString(et.textContent,ue))}return M}),oe(this,"deleteAll",function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return M.addEventToQueue(b,{speed:K}),M}),oe(this,"changeDeleteSpeed",function(K){if(!K)throw new Error("Must provide new delete speed");return M.addEventToQueue(O,{speed:K}),M}),oe(this,"changeDelay",function(K){if(!K)throw new Error("Must provide new delay");return M.addEventToQueue(D,{delay:K}),M}),oe(this,"changeCursor",function(K){if(!K)throw new Error("Must provide new cursor");return M.addEventToQueue(T,{cursor:K}),M}),oe(this,"deleteChars",function(K){if(!K)throw new Error("Must provide amount of characters to delete");for(var ue=0;ue<K;ue++)M.addEventToQueue(k);return M}),oe(this,"callFunction",function(K,ue){if(!K||typeof K!="function")throw new Error("Callback must be a function");return M.addEventToQueue(I,{cb:K,thisArg:ue}),M}),oe(this,"typeCharacters",function(K){var ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K||!Array.isArray(K))throw new Error("Characters must be an array");return K.forEach(function(Ke){M.addEventToQueue(E,{character:Ke,node:ue})}),M}),oe(this,"removeCharacters",function(K){if(!K||!Array.isArray(K))throw new Error("Characters must be an array");return K.forEach(function(){M.addEventToQueue(k)}),M}),oe(this,"addEventToQueue",function(K,ue){var Ke=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return M.addEventToStateProperty(K,ue,Ke,"eventQueue")}),oe(this,"addReverseCalledEvent",function(K,ue){var Ke=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return M.options.loop?M.addEventToStateProperty(K,ue,Ke,"reverseCalledEvents"):M}),oe(this,"addEventToStateProperty",function(K,ue){var Ke=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Qe=arguments.length>3?arguments[3]:void 0,ye={eventName:K,eventArgs:ue||{}};return M.state[Qe]=Ke?[ye].concat(P(M.state[Qe])):[].concat(P(M.state[Qe]),[ye]),M}),oe(this,"runEventLoop",function(){M.state.lastFrameTime||(M.state.lastFrameTime=Date.now());var K=Date.now(),ue=K-M.state.lastFrameTime;if(!M.state.eventQueue.length){if(!M.options.loop)return;M.state.eventQueue=P(M.state.calledEvents),M.state.calledEvents=[],M.options=R({},M.state.initialOptions)}if(M.state.eventLoop=d()(M.runEventLoop),!M.state.eventLoopPaused){if(M.state.pauseUntil){if(K<M.state.pauseUntil)return;M.state.pauseUntil=null}var Ke,Qe=P(M.state.eventQueue),ye=Qe.shift();if(!(ue<=(Ke=ye.eventName===w||ye.eventName===k?M.options.deleteSpeed==="natural"?g(40,80):M.options.deleteSpeed:M.options.delay==="natural"?g(120,160):M.options.delay))){var et=ye.eventName,hn=ye.eventArgs;switch(M.logInDevMode({currentEvent:ye,state:M.state,delay:Ke}),et){case v:case E:var Pn=hn.character,Cn=hn.node,Ci=document.createTextNode(Pn),Zn=Ci;M.options.onCreateTextNode&&typeof M.options.onCreateTextNode=="function"&&(Zn=M.options.onCreateTextNode(Pn,Ci)),Zn&&(Cn?Cn.appendChild(Zn):M.state.elements.wrapper.appendChild(Zn)),M.state.visibleNodes=[].concat(P(M.state.visibleNodes),[{type:"TEXT_NODE",character:Pn,node:Zn}]);break;case k:Qe.unshift({eventName:w,eventArgs:{removingCharacterNode:!0}});break;case y:var Hc=ye.eventArgs.ms;M.state.pauseUntil=Date.now()+parseInt(Hc);break;case I:var Fa=ye.eventArgs,ja=Fa.cb,$s=Fa.thisArg;ja.call($s,{elements:M.state.elements});break;case x:var Bs=ye.eventArgs,Hs=Bs.node,Br=Bs.parentNode;Br?Br.appendChild(Hs):M.state.elements.wrapper.appendChild(Hs),M.state.visibleNodes=[].concat(P(M.state.visibleNodes),[{type:S,node:Hs,parentNode:Br||M.state.elements.wrapper}]);break;case b:var Ws=M.state.visibleNodes,bi=hn.speed,Ve=[];bi&&Ve.push({eventName:O,eventArgs:{speed:bi,temp:!0}});for(var Ye=0,Ri=Ws.length;Ye<Ri;Ye++)Ve.push({eventName:w,eventArgs:{removingCharacterNode:!1}});bi&&Ve.push({eventName:O,eventArgs:{speed:M.options.deleteSpeed,temp:!0}}),Qe.unshift.apply(Qe,Ve);break;case w:var Ua=ye.eventArgs.removingCharacterNode;if(M.state.visibleNodes.length){var xi=M.state.visibleNodes.pop(),Wc=xi.type,fn=xi.node,za=xi.character;M.options.onRemoveNode&&typeof M.options.onRemoveNode=="function"&&M.options.onRemoveNode({node:fn,character:za}),fn&&fn.parentNode.removeChild(fn),Wc===S&&Ua&&Qe.unshift({eventName:w,eventArgs:{}})}break;case O:M.options.deleteSpeed=ye.eventArgs.speed;break;case D:M.options.delay=ye.eventArgs.delay;break;case T:M.options.cursor=ye.eventArgs.cursor,M.state.elements.cursor.innerHTML=ye.eventArgs.cursor}M.options.loop&&(ye.eventName===w||ye.eventArgs&&ye.eventArgs.temp||(M.state.calledEvents=[].concat(P(M.state.calledEvents),[ye]))),M.state.eventQueue=Qe,M.state.lastFrameTime=K}}}),W)if(typeof W=="string"){var zt=document.querySelector(W);if(!zt)throw new Error("Could not find container element");this.state.elements.container=zt}else this.state.elements.container=W;me&&(this.options=R(R({},this.options),me)),this.state.initialOptions=R({},this.options),this.init()}var V,Y;return V=$,(Y=[{key:"init",value:function(){var W,me;this.setupWrapperElement(),this.addEventToQueue(T,{cursor:this.options.cursor},!0),this.addEventToQueue(b,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(W=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(me=document.createElement("style")).appendChild(document.createTextNode(W)),document.head.appendChild(me),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(W){this.options.devMode&&console.log(W)}}])&&fe(V.prototype,Y),Object.defineProperty(V,"prototype",{writable:!1}),$}()},8552:(a,u,c)=>{var h=c(852)(c(5639),"DataView");a.exports=h},1989:(a,u,c)=>{var h=c(1789),d=c(401),m=c(7667),g=c(1327),E=c(1866);function k(b){var w=-1,y=b==null?0:b.length;for(this.clear();++w<y;){var I=b[w];this.set(I[0],I[1])}}k.prototype.clear=h,k.prototype.delete=d,k.prototype.get=m,k.prototype.has=g,k.prototype.set=E,a.exports=k},8407:(a,u,c)=>{var h=c(7040),d=c(4125),m=c(2117),g=c(7518),E=c(4705);function k(b){var w=-1,y=b==null?0:b.length;for(this.clear();++w<y;){var I=b[w];this.set(I[0],I[1])}}k.prototype.clear=h,k.prototype.delete=d,k.prototype.get=m,k.prototype.has=g,k.prototype.set=E,a.exports=k},7071:(a,u,c)=>{var h=c(852)(c(5639),"Map");a.exports=h},3369:(a,u,c)=>{var h=c(4785),d=c(1285),m=c(6e3),g=c(9916),E=c(5265);function k(b){var w=-1,y=b==null?0:b.length;for(this.clear();++w<y;){var I=b[w];this.set(I[0],I[1])}}k.prototype.clear=h,k.prototype.delete=d,k.prototype.get=m,k.prototype.has=g,k.prototype.set=E,a.exports=k},3818:(a,u,c)=>{var h=c(852)(c(5639),"Promise");a.exports=h},8525:(a,u,c)=>{var h=c(852)(c(5639),"Set");a.exports=h},8668:(a,u,c)=>{var h=c(3369),d=c(619),m=c(2385);function g(E){var k=-1,b=E==null?0:E.length;for(this.__data__=new h;++k<b;)this.add(E[k])}g.prototype.add=g.prototype.push=d,g.prototype.has=m,a.exports=g},6384:(a,u,c)=>{var h=c(8407),d=c(7465),m=c(3779),g=c(7599),E=c(4758),k=c(4309);function b(w){var y=this.__data__=new h(w);this.size=y.size}b.prototype.clear=d,b.prototype.delete=m,b.prototype.get=g,b.prototype.has=E,b.prototype.set=k,a.exports=b},2705:(a,u,c)=>{var h=c(5639).Symbol;a.exports=h},1149:(a,u,c)=>{var h=c(5639).Uint8Array;a.exports=h},577:(a,u,c)=>{var h=c(852)(c(5639),"WeakMap");a.exports=h},4963:a=>{a.exports=function(u,c){for(var h=-1,d=u==null?0:u.length,m=0,g=[];++h<d;){var E=u[h];c(E,h,u)&&(g[m++]=E)}return g}},4636:(a,u,c)=>{var h=c(2545),d=c(5694),m=c(1469),g=c(4144),E=c(5776),k=c(6719),b=Object.prototype.hasOwnProperty;a.exports=function(w,y){var I=m(w),x=!I&&d(w),O=!I&&!x&&g(w),D=!I&&!x&&!O&&k(w),T=I||x||O||D,v=T?h(w.length,String):[],S=v.length;for(var A in w)!y&&!b.call(w,A)||T&&(A=="length"||O&&(A=="offset"||A=="parent")||D&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||E(A,S))||v.push(A);return v}},2488:a=>{a.exports=function(u,c){for(var h=-1,d=c.length,m=u.length;++h<d;)u[m+h]=c[h];return u}},2908:a=>{a.exports=function(u,c){for(var h=-1,d=u==null?0:u.length;++h<d;)if(c(u[h],h,u))return!0;return!1}},8470:(a,u,c)=>{var h=c(7813);a.exports=function(d,m){for(var g=d.length;g--;)if(h(d[g][0],m))return g;return-1}},8866:(a,u,c)=>{var h=c(2488),d=c(1469);a.exports=function(m,g,E){var k=g(m);return d(m)?k:h(k,E(m))}},4239:(a,u,c)=>{var h=c(2705),d=c(9607),m=c(2333),g=h?h.toStringTag:void 0;a.exports=function(E){return E==null?E===void 0?"[object Undefined]":"[object Null]":g&&g in Object(E)?d(E):m(E)}},9454:(a,u,c)=>{var h=c(4239),d=c(7005);a.exports=function(m){return d(m)&&h(m)=="[object Arguments]"}},939:(a,u,c)=>{var h=c(2492),d=c(7005);a.exports=function m(g,E,k,b,w){return g===E||(g==null||E==null||!d(g)&&!d(E)?g!=g&&E!=E:h(g,E,k,b,m,w))}},2492:(a,u,c)=>{var h=c(6384),d=c(7114),m=c(8351),g=c(6096),E=c(4160),k=c(1469),b=c(4144),w=c(6719),y="[object Arguments]",I="[object Array]",x="[object Object]",O=Object.prototype.hasOwnProperty;a.exports=function(D,T,v,S,A,C){var R=k(D),P=k(T),se=R?I:E(D),fe=P?I:E(T),oe=(se=se==y?x:se)==x,$e=(fe=fe==y?x:fe)==x,H=se==fe;if(H&&b(D)){if(!b(T))return!1;R=!0,oe=!1}if(H&&!oe)return C||(C=new h),R||w(D)?d(D,T,v,S,A,C):m(D,T,se,v,S,A,C);if(!(1&v)){var $=oe&&O.call(D,"__wrapped__"),V=$e&&O.call(T,"__wrapped__");if($||V){var Y=$?D.value():D,W=V?T.value():T;return C||(C=new h),A(Y,W,v,S,C)}}return!!H&&(C||(C=new h),g(D,T,v,S,A,C))}},8458:(a,u,c)=>{var h=c(3560),d=c(5346),m=c(3218),g=c(346),E=/^\[object .+?Constructor\]$/,k=Function.prototype,b=Object.prototype,w=k.toString,y=b.hasOwnProperty,I=RegExp("^"+w.call(y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(x){return!(!m(x)||d(x))&&(h(x)?I:E).test(g(x))}},8749:(a,u,c)=>{var h=c(4239),d=c(1780),m=c(7005),g={};g["[object Float32Array]"]=g["[object Float64Array]"]=g["[object Int8Array]"]=g["[object Int16Array]"]=g["[object Int32Array]"]=g["[object Uint8Array]"]=g["[object Uint8ClampedArray]"]=g["[object Uint16Array]"]=g["[object Uint32Array]"]=!0,g["[object Arguments]"]=g["[object Array]"]=g["[object ArrayBuffer]"]=g["[object Boolean]"]=g["[object DataView]"]=g["[object Date]"]=g["[object Error]"]=g["[object Function]"]=g["[object Map]"]=g["[object Number]"]=g["[object Object]"]=g["[object RegExp]"]=g["[object Set]"]=g["[object String]"]=g["[object WeakMap]"]=!1,a.exports=function(E){return m(E)&&d(E.length)&&!!g[h(E)]}},280:(a,u,c)=>{var h=c(5726),d=c(6916),m=Object.prototype.hasOwnProperty;a.exports=function(g){if(!h(g))return d(g);var E=[];for(var k in Object(g))m.call(g,k)&&k!="constructor"&&E.push(k);return E}},2545:a=>{a.exports=function(u,c){for(var h=-1,d=Array(u);++h<u;)d[h]=c(h);return d}},1717:a=>{a.exports=function(u){return function(c){return u(c)}}},4757:a=>{a.exports=function(u,c){return u.has(c)}},4429:(a,u,c)=>{var h=c(5639)["__core-js_shared__"];a.exports=h},7114:(a,u,c)=>{var h=c(8668),d=c(2908),m=c(4757);a.exports=function(g,E,k,b,w,y){var I=1&k,x=g.length,O=E.length;if(x!=O&&!(I&&O>x))return!1;var D=y.get(g),T=y.get(E);if(D&&T)return D==E&&T==g;var v=-1,S=!0,A=2&k?new h:void 0;for(y.set(g,E),y.set(E,g);++v<x;){var C=g[v],R=E[v];if(b)var P=I?b(R,C,v,E,g,y):b(C,R,v,g,E,y);if(P!==void 0){if(P)continue;S=!1;break}if(A){if(!d(E,function(se,fe){if(!m(A,fe)&&(C===se||w(C,se,k,b,y)))return A.push(fe)})){S=!1;break}}else if(C!==R&&!w(C,R,k,b,y)){S=!1;break}}return y.delete(g),y.delete(E),S}},8351:(a,u,c)=>{var h=c(2705),d=c(1149),m=c(7813),g=c(7114),E=c(8776),k=c(1814),b=h?h.prototype:void 0,w=b?b.valueOf:void 0;a.exports=function(y,I,x,O,D,T,v){switch(x){case"[object DataView]":if(y.byteLength!=I.byteLength||y.byteOffset!=I.byteOffset)return!1;y=y.buffer,I=I.buffer;case"[object ArrayBuffer]":return!(y.byteLength!=I.byteLength||!T(new d(y),new d(I)));case"[object Boolean]":case"[object Date]":case"[object Number]":return m(+y,+I);case"[object Error]":return y.name==I.name&&y.message==I.message;case"[object RegExp]":case"[object String]":return y==I+"";case"[object Map]":var S=E;case"[object Set]":var A=1&O;if(S||(S=k),y.size!=I.size&&!A)return!1;var C=v.get(y);if(C)return C==I;O|=2,v.set(y,I);var R=g(S(y),S(I),O,D,T,v);return v.delete(y),R;case"[object Symbol]":if(w)return w.call(y)==w.call(I)}return!1}},6096:(a,u,c)=>{var h=c(8234),d=Object.prototype.hasOwnProperty;a.exports=function(m,g,E,k,b,w){var y=1&E,I=h(m),x=I.length;if(x!=h(g).length&&!y)return!1;for(var O=x;O--;){var D=I[O];if(!(y?D in g:d.call(g,D)))return!1}var T=w.get(m),v=w.get(g);if(T&&v)return T==g&&v==m;var S=!0;w.set(m,g),w.set(g,m);for(var A=y;++O<x;){var C=m[D=I[O]],R=g[D];if(k)var P=y?k(R,C,D,g,m,w):k(C,R,D,m,g,w);if(!(P===void 0?C===R||b(C,R,E,k,w):P)){S=!1;break}A||(A=D=="constructor")}if(S&&!A){var se=m.constructor,fe=g.constructor;se==fe||!("constructor"in m)||!("constructor"in g)||typeof se=="function"&&se instanceof se&&typeof fe=="function"&&fe instanceof fe||(S=!1)}return w.delete(m),w.delete(g),S}},1957:(a,u,c)=>{var h=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g;a.exports=h},8234:(a,u,c)=>{var h=c(8866),d=c(9551),m=c(3674);a.exports=function(g){return h(g,m,d)}},5050:(a,u,c)=>{var h=c(7019);a.exports=function(d,m){var g=d.__data__;return h(m)?g[typeof m=="string"?"string":"hash"]:g.map}},852:(a,u,c)=>{var h=c(8458),d=c(7801);a.exports=function(m,g){var E=d(m,g);return h(E)?E:void 0}},9607:(a,u,c)=>{var h=c(2705),d=Object.prototype,m=d.hasOwnProperty,g=d.toString,E=h?h.toStringTag:void 0;a.exports=function(k){var b=m.call(k,E),w=k[E];try{k[E]=void 0;var y=!0}catch{}var I=g.call(k);return y&&(b?k[E]=w:delete k[E]),I}},9551:(a,u,c)=>{var h=c(4963),d=c(479),m=Object.prototype.propertyIsEnumerable,g=Object.getOwnPropertySymbols,E=g?function(k){return k==null?[]:(k=Object(k),h(g(k),function(b){return m.call(k,b)}))}:d;a.exports=E},4160:(a,u,c)=>{var h=c(8552),d=c(7071),m=c(3818),g=c(8525),E=c(577),k=c(4239),b=c(346),w="[object Map]",y="[object Promise]",I="[object Set]",x="[object WeakMap]",O="[object DataView]",D=b(h),T=b(d),v=b(m),S=b(g),A=b(E),C=k;(h&&C(new h(new ArrayBuffer(1)))!=O||d&&C(new d)!=w||m&&C(m.resolve())!=y||g&&C(new g)!=I||E&&C(new E)!=x)&&(C=function(R){var P=k(R),se=P=="[object Object]"?R.constructor:void 0,fe=se?b(se):"";if(fe)switch(fe){case D:return O;case T:return w;case v:return y;case S:return I;case A:return x}return P}),a.exports=C},7801:a=>{a.exports=function(u,c){return u==null?void 0:u[c]}},1789:(a,u,c)=>{var h=c(4536);a.exports=function(){this.__data__=h?h(null):{},this.size=0}},401:a=>{a.exports=function(u){var c=this.has(u)&&delete this.__data__[u];return this.size-=c?1:0,c}},7667:(a,u,c)=>{var h=c(4536),d=Object.prototype.hasOwnProperty;a.exports=function(m){var g=this.__data__;if(h){var E=g[m];return E==="__lodash_hash_undefined__"?void 0:E}return d.call(g,m)?g[m]:void 0}},1327:(a,u,c)=>{var h=c(4536),d=Object.prototype.hasOwnProperty;a.exports=function(m){var g=this.__data__;return h?g[m]!==void 0:d.call(g,m)}},1866:(a,u,c)=>{var h=c(4536);a.exports=function(d,m){var g=this.__data__;return this.size+=this.has(d)?0:1,g[d]=h&&m===void 0?"__lodash_hash_undefined__":m,this}},5776:a=>{var u=/^(?:0|[1-9]\d*)$/;a.exports=function(c,h){var d=typeof c;return!!(h=h??9007199254740991)&&(d=="number"||d!="symbol"&&u.test(c))&&c>-1&&c%1==0&&c<h}},7019:a=>{a.exports=function(u){var c=typeof u;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?u!=="__proto__":u===null}},5346:(a,u,c)=>{var h,d=c(4429),m=(h=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+h:"";a.exports=function(g){return!!m&&m in g}},5726:a=>{var u=Object.prototype;a.exports=function(c){var h=c&&c.constructor;return c===(typeof h=="function"&&h.prototype||u)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,u,c)=>{var h=c(8470),d=Array.prototype.splice;a.exports=function(m){var g=this.__data__,E=h(g,m);return!(E<0||(E==g.length-1?g.pop():d.call(g,E,1),--this.size,0))}},2117:(a,u,c)=>{var h=c(8470);a.exports=function(d){var m=this.__data__,g=h(m,d);return g<0?void 0:m[g][1]}},7518:(a,u,c)=>{var h=c(8470);a.exports=function(d){return h(this.__data__,d)>-1}},4705:(a,u,c)=>{var h=c(8470);a.exports=function(d,m){var g=this.__data__,E=h(g,d);return E<0?(++this.size,g.push([d,m])):g[E][1]=m,this}},4785:(a,u,c)=>{var h=c(1989),d=c(8407),m=c(7071);a.exports=function(){this.size=0,this.__data__={hash:new h,map:new(m||d),string:new h}}},1285:(a,u,c)=>{var h=c(5050);a.exports=function(d){var m=h(this,d).delete(d);return this.size-=m?1:0,m}},6e3:(a,u,c)=>{var h=c(5050);a.exports=function(d){return h(this,d).get(d)}},9916:(a,u,c)=>{var h=c(5050);a.exports=function(d){return h(this,d).has(d)}},5265:(a,u,c)=>{var h=c(5050);a.exports=function(d,m){var g=h(this,d),E=g.size;return g.set(d,m),this.size+=g.size==E?0:1,this}},8776:a=>{a.exports=function(u){var c=-1,h=Array(u.size);return u.forEach(function(d,m){h[++c]=[m,d]}),h}},4536:(a,u,c)=>{var h=c(852)(Object,"create");a.exports=h},6916:(a,u,c)=>{var h=c(5569)(Object.keys,Object);a.exports=h},1167:(a,u,c)=>{a=c.nmd(a);var h=c(1957),d=u&&!u.nodeType&&u,m=d&&a&&!a.nodeType&&a,g=m&&m.exports===d&&h.process,E=function(){try{return m&&m.require&&m.require("util").types||g&&g.binding&&g.binding("util")}catch{}}();a.exports=E},2333:a=>{var u=Object.prototype.toString;a.exports=function(c){return u.call(c)}},5569:a=>{a.exports=function(u,c){return function(h){return u(c(h))}}},5639:(a,u,c)=>{var h=c(1957),d=typeof self=="object"&&self&&self.Object===Object&&self,m=h||d||Function("return this")();a.exports=m},619:a=>{a.exports=function(u){return this.__data__.set(u,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(u){return this.__data__.has(u)}},1814:a=>{a.exports=function(u){var c=-1,h=Array(u.size);return u.forEach(function(d){h[++c]=d}),h}},7465:(a,u,c)=>{var h=c(8407);a.exports=function(){this.__data__=new h,this.size=0}},3779:a=>{a.exports=function(u){var c=this.__data__,h=c.delete(u);return this.size=c.size,h}},7599:a=>{a.exports=function(u){return this.__data__.get(u)}},4758:a=>{a.exports=function(u){return this.__data__.has(u)}},4309:(a,u,c)=>{var h=c(8407),d=c(7071),m=c(3369);a.exports=function(g,E){var k=this.__data__;if(k instanceof h){var b=k.__data__;if(!d||b.length<199)return b.push([g,E]),this.size=++k.size,this;k=this.__data__=new m(b)}return k.set(g,E),this.size=k.size,this}},346:a=>{var u=Function.prototype.toString;a.exports=function(c){if(c!=null){try{return u.call(c)}catch{}try{return c+""}catch{}}return""}},7813:a=>{a.exports=function(u,c){return u===c||u!=u&&c!=c}},5694:(a,u,c)=>{var h=c(9454),d=c(7005),m=Object.prototype,g=m.hasOwnProperty,E=m.propertyIsEnumerable,k=h(function(){return arguments}())?h:function(b){return d(b)&&g.call(b,"callee")&&!E.call(b,"callee")};a.exports=k},1469:a=>{var u=Array.isArray;a.exports=u},8612:(a,u,c)=>{var h=c(3560),d=c(1780);a.exports=function(m){return m!=null&&d(m.length)&&!h(m)}},4144:(a,u,c)=>{a=c.nmd(a);var h=c(5639),d=c(5062),m=u&&!u.nodeType&&u,g=m&&a&&!a.nodeType&&a,E=g&&g.exports===m?h.Buffer:void 0,k=(E?E.isBuffer:void 0)||d;a.exports=k},8446:(a,u,c)=>{var h=c(939);a.exports=function(d,m){return h(d,m)}},3560:(a,u,c)=>{var h=c(4239),d=c(3218);a.exports=function(m){if(!d(m))return!1;var g=h(m);return g=="[object Function]"||g=="[object GeneratorFunction]"||g=="[object AsyncFunction]"||g=="[object Proxy]"}},1780:a=>{a.exports=function(u){return typeof u=="number"&&u>-1&&u%1==0&&u<=9007199254740991}},3218:a=>{a.exports=function(u){var c=typeof u;return u!=null&&(c=="object"||c=="function")}},7005:a=>{a.exports=function(u){return u!=null&&typeof u=="object"}},6719:(a,u,c)=>{var h=c(8749),d=c(1717),m=c(1167),g=m&&m.isTypedArray,E=g?d(g):h;a.exports=E},3674:(a,u,c)=>{var h=c(4636),d=c(280),m=c(8612);a.exports=function(g){return m(g)?h(g):d(g)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var u,c,h,d,m,g;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(u()-m)/1e6},c=process.hrtime,d=(u=function(){var E;return 1e9*(E=c())[0]+E[1]})(),g=1e9*process.uptime(),m=d-g):Date.now?(a.exports=function(){return Date.now()-h},h=Date.now()):(a.exports=function(){return new Date().getTime()-h},h=new Date().getTime())}).call(this)},4087:(a,u,c)=>{for(var h=c(75),d=typeof window>"u"?c.g:window,m=["moz","webkit"],g="AnimationFrame",E=d["request"+g],k=d["cancel"+g]||d["cancelRequest"+g],b=0;!E&&b<m.length;b++)E=d[m[b]+"Request"+g],k=d[m[b]+"Cancel"+g]||d[m[b]+"CancelRequest"+g];if(!E||!k){var w=0,y=0,I=[];E=function(x){if(I.length===0){var O=h(),D=Math.max(0,16.666666666666668-(O-w));w=D+O,setTimeout(function(){var T=I.slice(0);I.length=0;for(var v=0;v<T.length;v++)if(!T[v].cancelled)try{T[v].callback(w)}catch(S){setTimeout(function(){throw S},0)}},Math.round(D))}return I.push({handle:++y,callback:x,cancelled:!1}),y},k=function(x){for(var O=0;O<I.length;O++)I[O].handle===x&&(I[O].cancelled=!0)}}a.exports=function(x){return E.call(d,x)},a.exports.cancel=function(){k.apply(d,arguments)},a.exports.polyfill=function(x){x||(x=d),x.requestAnimationFrame=E,x.cancelAnimationFrame=k}},8156:a=>{a.exports=n}},i={};function s(a){var u=i[a];if(u!==void 0)return u.exports;var c=i[a]={id:a,loaded:!1,exports:{}};return r[a].call(c.exports,c,c.exports,s),c.loaded=!0,c.exports}s.n=a=>{var u=a&&a.__esModule?()=>a.default:()=>a;return s.d(u,{a:u}),u},s.d=(a,u)=>{for(var c in u)s.o(u,c)&&!s.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:u[c]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(a,u)=>Object.prototype.hasOwnProperty.call(a,u),s.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var o={};return(()=>{s.d(o,{default:()=>I});var a=s(8156),u=s.n(a),c=s(7403),h=s(8446),d=s.n(h);function m(x){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},m(x)}function g(x,O){for(var D=0;D<O.length;D++){var T=O[D];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(x,w(T.key),T)}}function E(x,O){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(D,T){return D.__proto__=T,D},E(x,O)}function k(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}function b(x){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},b(x)}function w(x){var O=function(D,T){if(m(D)!=="object"||D===null)return D;var v=D[Symbol.toPrimitive];if(v!==void 0){var S=v.call(D,"string");if(m(S)!=="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(D)}(x);return m(O)==="symbol"?O:String(O)}var y=function(x){(function(C,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(R&&R.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),Object.defineProperty(C,"prototype",{writable:!1}),R&&E(C,R)})(A,x);var O,D,T,v,S=(T=A,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var C,R=b(T);if(v){var P=b(this).constructor;C=Reflect.construct(R,arguments,P)}else C=R.apply(this,arguments);return function(se,fe){if(fe&&(m(fe)==="object"||typeof fe=="function"))return fe;if(fe!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return k(se)}(this,C)});function A(){var C,R,P,se;(function(H,$){if(!(H instanceof $))throw new TypeError("Cannot call a class as a function")})(this,A);for(var fe=arguments.length,oe=new Array(fe),$e=0;$e<fe;$e++)oe[$e]=arguments[$e];return R=k(C=S.call.apply(S,[this].concat(oe))),se={instance:null},(P=w(P="state"))in R?Object.defineProperty(R,P,{value:se,enumerable:!0,configurable:!0,writable:!0}):R[P]=se,C}return O=A,(D=[{key:"componentDidMount",value:function(){var C=this,R=new c.default(this.typewriter,this.props.options);this.setState({instance:R},function(){var P=C.props.onInit;P&&P(R)})}},{key:"componentDidUpdate",value:function(C){d()(this.props.options,C.options)||this.setState({instance:new c.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var C=this,R=this.props.component;return u().createElement(R,{ref:function(P){return C.typewriter=P},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&g(O.prototype,D),Object.defineProperty(O,"prototype",{writable:!1}),A}(a.Component);y.defaultProps={component:"div"};const I=y})(),o.default})())})(Ww);var _k=Ww.exports;const wk=Dd(_k);function Ek(){return U.jsxs("div",{className:"proj-container",id:"proj",children:[U.jsx("h1",{className:"proj-header",children:"Projects"}),U.jsxs("div",{className:"proj",children:[U.jsx("h3",{children:"Trading Bot"}),U.jsx("img",{src:"",alt:"Trading Bot Image"})]})]})}function Tk(){return U.jsxs("div",{className:"about-me-section",id:"about-me",children:[U.jsx("h2",{className:"section-title",children:"About Me"}),U.jsx("p",{className:"about-me-text",children:"Hi there! I'm Ludvig, a dedicated student currently pursuing a degree in Computer Science at Lunds University, Faculty of Engineering. My passion for programming and problem solving drives me to excel in my studies and explore new opportunities in this field."}),U.jsx("p",{className:"about-me-text",children:"At Lunds University, I have taken a diverse range of courses including Scala, Java, Linear Algebra, Calculus, Program Valuation, Photonics, Discrete Structure, and Cognition. These courses have provided me with a solid foundation in both theoretical and practical aspects of programming within diverse areas."}),U.jsx("p",{className:"about-me-text",children:"In my own spare time I have created several projects including: web apps with React and for example MongoDB with Express as the backend, trading bot in python with PyTorch, yahoofinance, pandas, and programming of my own built keyboard."}),U.jsx("p",{className:"about-me-text",children:"My key skills include solid and deep understanding of programming concepts, testing and valuating programs, and web applications. I have worked on projects such as [Project 1] and [Project 2], where I was able to apply my knowledge and collaborate with peers to achieve our goals."}),U.jsx("p",{className:"about-me-text",children:"Looking ahead, I aspire to become a valuable peice to a bigger project and learn as much as possible in order for that to happen. I am particularly interested in neuro networks and artificial intelligence and creating software for hardware, and I am eager to continue learning and growing in this field."}),U.jsx("p",{className:"about-me-text",children:"Outside of my academic pursuits, I enjoy working out, socializing and playing sports. These activities help me stay balanced and inspired."}),U.jsxs("p",{className:"about-me-text",children:["Feel free to connect with me on [Social Media] or reach out through my ",U.jsx("a",{href:"#contact",children:"contact form"}),". I look forward to connecting with you!"]})]})}function Ov(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ov(Object(n),!0).forEach(function(r){Ge(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ov(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Cu(t){"@babel/helpers - typeof";return Cu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cu(t)}function Ik(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Sk(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ak(t,e,n){return e&&Sk(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ge(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bp(t,e){return Pk(t)||bk(t,e)||qw(t,e)||xk()}function Aa(t){return kk(t)||Ck(t)||qw(t)||Rk()}function kk(t){if(Array.isArray(t))return Gf(t)}function Pk(t){if(Array.isArray(t))return t}function Ck(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bk(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(u){s=!0,a=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function qw(t,e){if(t){if(typeof t=="string")return Gf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gf(t,e)}}function Gf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Rk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Dv=function(){},Rp={},Gw={},Kw=null,Qw={mark:Dv,measure:Dv};try{typeof window<"u"&&(Rp=window),typeof document<"u"&&(Gw=document),typeof MutationObserver<"u"&&(Kw=MutationObserver),typeof performance<"u"&&(Qw=performance)}catch{}var Nk=Rp.navigator||{},Lv=Nk.userAgent,Mv=Lv===void 0?"":Lv,Or=Rp,Pe=Gw,Vv=Kw,wl=Qw;Or.document;var Jn=!!Pe.documentElement&&!!Pe.head&&typeof Pe.addEventListener=="function"&&typeof Pe.createElement=="function",Yw=~Mv.indexOf("MSIE")||~Mv.indexOf("Trident/"),El,Tl,Il,Sl,Al,Wn="___FONT_AWESOME___",Kf=16,Xw="fa",Jw="svg-inline--fa",fi="data-fa-i2svg",Qf="data-fa-pseudo-element",Ok="data-fa-pseudo-element-pending",xp="data-prefix",Np="data-icon",Fv="fontawesome-i2svg",Dk="async",Lk=["HTML","HEAD","STYLE","SCRIPT"],Zw=function(){try{return!0}catch{return!1}}(),Ae="classic",Me="sharp",Op=[Ae,Me];function ka(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ae]}})}var sa=ka((El={},Ge(El,Ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ge(El,Me,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),El)),oa=ka((Tl={},Ge(Tl,Ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ge(Tl,Me,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Tl)),aa=ka((Il={},Ge(Il,Ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ge(Il,Me,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Il)),Mk=ka((Sl={},Ge(Sl,Ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ge(Sl,Me,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Sl)),Vk=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,e1="fa-layers-text",Fk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jk=ka((Al={},Ge(Al,Ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ge(Al,Me,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Al)),t1=[1,2,3,4,5,6,7,8,9,10],Uk=t1.concat([11,12,13,14,15,16,17,18,19,20]),zk=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ei={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},la=new Set;Object.keys(oa[Ae]).map(la.add.bind(la));Object.keys(oa[Me]).map(la.add.bind(la));var $k=[].concat(Op,Aa(la),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ei.GROUP,ei.SWAP_OPACITY,ei.PRIMARY,ei.SECONDARY]).concat(t1.map(function(t){return"".concat(t,"x")})).concat(Uk.map(function(t){return"w-".concat(t)})),Do=Or.FontAwesomeConfig||{};function Bk(t){var e=Pe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Hk(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Pe&&typeof Pe.querySelector=="function"){var Wk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wk.forEach(function(t){var e=bp(t,2),n=e[0],r=e[1],i=Hk(Bk(n));i!=null&&(Do[r]=i)})}var n1={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xw,replacementClass:Jw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Do.familyPrefix&&(Do.cssPrefix=Do.familyPrefix);var Ts=q(q({},n1),Do);Ts.autoReplaceSvg||(Ts.observeMutations=!1);var X={};Object.keys(n1).forEach(function(t){Object.defineProperty(X,t,{enumerable:!0,set:function(n){Ts[t]=n,Lo.forEach(function(r){return r(X)})},get:function(){return Ts[t]}})});Object.defineProperty(X,"familyPrefix",{enumerable:!0,set:function(e){Ts.cssPrefix=e,Lo.forEach(function(n){return n(X)})},get:function(){return Ts.cssPrefix}});Or.FontAwesomeConfig=X;var Lo=[];function qk(t){return Lo.push(t),function(){Lo.splice(Lo.indexOf(t),1)}}var ir=Kf,vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gk(t){if(!(!t||!Jn)){var e=Pe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Pe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Pe.head.insertBefore(e,r),t}}var Kk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ua(){for(var t=12,e="";t-- >0;)e+=Kk[Math.random()*62|0];return e}function Ds(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Dp(t){return t.classList?Ds(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function r1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qk(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(r1(t[n]),'" ')},"").trim()}function gc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Lp(t){return t.size!==vn.size||t.x!==vn.x||t.y!==vn.y||t.rotate!==vn.rotate||t.flipX||t.flipY}function Yk(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function Xk(t){var e=t.transform,n=t.width,r=n===void 0?Kf:n,i=t.height,s=i===void 0?Kf:i,o=t.startCentered,a=o===void 0?!1:o,u="";return a&&Yw?u+="translate(".concat(e.x/ir-r/2,"em, ").concat(e.y/ir-s/2,"em) "):a?u+="translate(calc(-50% + ".concat(e.x/ir,"em), calc(-50% + ").concat(e.y/ir,"em)) "):u+="translate(".concat(e.x/ir,"em, ").concat(e.y/ir,"em) "),u+="scale(".concat(e.size/ir*(e.flipX?-1:1),", ").concat(e.size/ir*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var Jk=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
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
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
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
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function i1(){var t=Xw,e=Jw,n=X.cssPrefix,r=X.replacementClass,i=Jk;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var jv=!1;function Dh(){X.autoAddCss&&!jv&&(Gk(i1()),jv=!0)}var Zk={mixout:function(){return{dom:{css:i1,insertCss:Dh}}},hooks:function(){return{beforeDOMElementCreation:function(){Dh()},beforeI2svg:function(){Dh()}}}},qn=Or||{};qn[Wn]||(qn[Wn]={});qn[Wn].styles||(qn[Wn].styles={});qn[Wn].hooks||(qn[Wn].hooks={});qn[Wn].shims||(qn[Wn].shims=[]);var tn=qn[Wn],s1=[],eP=function t(){Pe.removeEventListener("DOMContentLoaded",t),bu=1,s1.map(function(e){return e()})},bu=!1;Jn&&(bu=(Pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pe.readyState),bu||Pe.addEventListener("DOMContentLoaded",eP));function tP(t){Jn&&(bu?setTimeout(t,0):s1.push(t))}function Pa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?r1(t):"<".concat(e," ").concat(Qk(r),">").concat(s.map(Pa).join(""),"</").concat(e,">")}function Uv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Lh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,h;for(r===void 0?(u=1,h=e[s[0]]):(u=0,h=r);u<o;u++)c=s[u],h=a(h,e[c],c,e);return h};function nP(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Yf(t){var e=nP(t);return e.length===1?e[0].toString(16):null}function rP(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function zv(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Xf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=zv(e);typeof tn.hooks.addPack=="function"&&!i?tn.hooks.addPack(t,zv(e)):tn.styles[t]=q(q({},tn.styles[t]||{}),s),t==="fas"&&Xf("fa",e)}var kl,Pl,Cl,Zi=tn.styles,iP=tn.shims,sP=(kl={},Ge(kl,Ae,Object.values(aa[Ae])),Ge(kl,Me,Object.values(aa[Me])),kl),Mp=null,o1={},a1={},l1={},u1={},c1={},oP=(Pl={},Ge(Pl,Ae,Object.keys(sa[Ae])),Ge(Pl,Me,Object.keys(sa[Me])),Pl);function aP(t){return~$k.indexOf(t)}function lP(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!aP(i)?i:null}var h1=function(){var e=function(s){return Lh(Zi,function(o,a,u){return o[u]=Lh(a,s,{}),o},{})};o1=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(u){return typeof u=="number"});a.forEach(function(u){i[u.toString(16)]=o})}return i}),a1=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(u){return typeof u=="string"});a.forEach(function(u){i[u]=o})}return i}),c1=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(u){i[u]=o}),i});var n="far"in Zi||X.autoFetchSvg,r=Lh(iP,function(i,s){var o=s[0],a=s[1],u=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:u}),i},{names:{},unicodes:{}});l1=r.names,u1=r.unicodes,Mp=vc(X.styleDefault,{family:X.familyDefault})};qk(function(t){Mp=vc(t.styleDefault,{family:X.familyDefault})});h1();function Vp(t,e){return(o1[t]||{})[e]}function uP(t,e){return(a1[t]||{})[e]}function ti(t,e){return(c1[t]||{})[e]}function f1(t){return l1[t]||{prefix:null,iconName:null}}function cP(t){var e=u1[t],n=Vp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dr(){return Mp}var Fp=function(){return{prefix:null,iconName:null,rest:[]}};function vc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ae:n,i=sa[r][t],s=oa[r][t]||oa[r][i],o=t in tn.styles?t:null;return s||o||null}var $v=(Cl={},Ge(Cl,Ae,Object.keys(aa[Ae])),Ge(Cl,Me,Object.keys(aa[Me])),Cl);function yc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ge(e,Ae,"".concat(X.cssPrefix,"-").concat(Ae)),Ge(e,Me,"".concat(X.cssPrefix,"-").concat(Me)),e),o=null,a=Ae;(t.includes(s[Ae])||t.some(function(c){return $v[Ae].includes(c)}))&&(a=Ae),(t.includes(s[Me])||t.some(function(c){return $v[Me].includes(c)}))&&(a=Me);var u=t.reduce(function(c,h){var d=lP(X.cssPrefix,h);if(Zi[h]?(h=sP[a].includes(h)?Mk[a][h]:h,o=h,c.prefix=h):oP[a].indexOf(h)>-1?(o=h,c.prefix=vc(h,{family:a})):d?c.iconName=d:h!==X.replacementClass&&h!==s[Ae]&&h!==s[Me]&&c.rest.push(h),!i&&c.prefix&&c.iconName){var m=o==="fa"?f1(c.iconName):{},g=ti(c.prefix,c.iconName);m.prefix&&(o=null),c.iconName=m.iconName||g||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!Zi.far&&Zi.fas&&!X.autoFetchSvg&&(c.prefix="fas")}return c},Fp());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&a===Me&&(Zi.fass||X.autoFetchSvg)&&(u.prefix="fass",u.iconName=ti(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||o==="fa")&&(u.prefix=Dr()||"fas"),u}var hP=function(){function t(){Ik(this,t),this.definitions={}}return Ak(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=q(q({},n.definitions[a]||{}),o[a]),Xf(a,o[a]);var u=aa[Ae][a];u&&Xf(u,o[a]),h1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,u=o.iconName,c=o.icon,h=c[2];n[a]||(n[a]={}),h.length>0&&h.forEach(function(d){typeof d=="string"&&(n[a][d]=c)}),n[a][u]=c}),n}}]),t}(),Bv=[],es={},us={},fP=Object.keys(us);function dP(t,e){var n=e.mixoutsTo;return Bv=t,es={},Object.keys(us).forEach(function(r){fP.indexOf(r)===-1&&delete us[r]}),Bv.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Cu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){es[o]||(es[o]=[]),es[o].push(s[o])})}r.provides&&r.provides(us)}),n}function Jf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=es[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function di(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=es[t]||[];i.forEach(function(s){s.apply(null,n)})}function Gn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return us[t]?us[t].apply(null,e):void 0}function Zf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Dr();if(e)return e=ti(n,e)||e,Uv(d1.definitions,n,e)||Uv(tn.styles,n,e)}var d1=new hP,pP=function(){X.autoReplaceSvg=!1,X.observeMutations=!1,di("noAuto")},mP={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Jn?(di("beforeI2svg",e),Gn("pseudoElements2svg",e),Gn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;X.autoReplaceSvg===!1&&(X.autoReplaceSvg=!0),X.observeMutations=!0,tP(function(){vP({autoReplaceSvgRoot:n}),di("watch",e)})}},gP={icon:function(e){if(e===null)return null;if(Cu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ti(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=vc(e[0]);return{prefix:r,iconName:ti(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(X.cssPrefix,"-"))>-1||e.match(Vk))){var i=yc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Dr(),iconName:ti(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Dr();return{prefix:s,iconName:ti(s,e)||e}}}},Ut={noAuto:pP,config:X,dom:mP,parse:gP,library:d1,findIconDefinition:Zf,toHtml:Pa},vP=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Pe:n;(Object.keys(tn.styles).length>0||X.autoFetchSvg)&&Jn&&X.autoReplaceSvg&&Ut.dom.i2svg({node:r})};function _c(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Pa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Jn){var r=Pe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function yP(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Lp(o)&&n.found&&!r.found){var a=n.width,u=n.height,c={x:a/u/2,y:.5};i.style=gc(q(q({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function _P(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(X.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},i),{},{id:o}),children:r}]}]}function jp(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,u=t.title,c=t.maskId,h=t.titleId,d=t.extra,m=t.watchable,g=m===void 0?!1:m,E=r.found?r:n,k=E.width,b=E.height,w=i==="fak",y=[X.replacementClass,s?"".concat(X.cssPrefix,"-").concat(s):""].filter(function(S){return d.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(d.classes).join(" "),I={children:[],attributes:q(q({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(b)})},x=w&&!~d.classes.indexOf("fa-fw")?{width:"".concat(k/b*16*.0625,"em")}:{};g&&(I.attributes[fi]=""),u&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(h||ua())},children:[u]}),delete I.attributes.title);var O=q(q({},I),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:q(q({},x),d.styles)}),D=r.found&&n.found?Gn("generateAbstractMask",O)||{children:[],attributes:{}}:Gn("generateAbstractIcon",O)||{children:[],attributes:{}},T=D.children,v=D.attributes;return O.children=T,O.attributes=v,a?_P(O):yP(O)}function Hv(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,u=a===void 0?!1:a,c=q(q(q({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});u&&(c[fi]="");var h=q({},o.styles);Lp(i)&&(h.transform=Xk({transform:i,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h.transform);var d=gc(h);d.length>0&&(c.style=d);var m=[];return m.push({tag:"span",attributes:c,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function wP(t){var e=t.content,n=t.title,r=t.extra,i=q(q(q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=gc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Mh=tn.styles;function ed(t){var e=t[0],n=t[1],r=t.slice(4),i=bp(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(X.cssPrefix,"-").concat(ei.GROUP)},children:[{tag:"path",attributes:{class:"".concat(X.cssPrefix,"-").concat(ei.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(X.cssPrefix,"-").concat(ei.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var EP={found:!1,width:512,height:512};function TP(t,e){!Zw&&!X.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function td(t,e){var n=e;return e==="fa"&&X.styleDefault!==null&&(e=Dr()),new Promise(function(r,i){if(Gn("missingIconAbstract"),n==="fa"){var s=f1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Mh[e]&&Mh[e][t]){var o=Mh[e][t];return r(ed(o))}TP(t,e),r(q(q({},EP),{},{icon:X.showMissingIcons&&t?Gn("missingIconAbstract")||{}:{}}))})}var Wv=function(){},nd=X.measurePerformance&&wl&&wl.mark&&wl.measure?wl:{mark:Wv,measure:Wv},_o='FA "6.5.2"',IP=function(e){return nd.mark("".concat(_o," ").concat(e," begins")),function(){return p1(e)}},p1=function(e){nd.mark("".concat(_o," ").concat(e," ends")),nd.measure("".concat(_o," ").concat(e),"".concat(_o," ").concat(e," begins"),"".concat(_o," ").concat(e," ends"))},Up={begin:IP,end:p1},Gl=function(){};function qv(t){var e=t.getAttribute?t.getAttribute(fi):null;return typeof e=="string"}function SP(t){var e=t.getAttribute?t.getAttribute(xp):null,n=t.getAttribute?t.getAttribute(Np):null;return e&&n}function AP(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(X.replacementClass)}function kP(){if(X.autoReplaceSvg===!0)return Kl.replace;var t=Kl[X.autoReplaceSvg];return t||Kl.replace}function PP(t){return Pe.createElementNS("http://www.w3.org/2000/svg",t)}function CP(t){return Pe.createElement(t)}function m1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?PP:CP:n;if(typeof t=="string")return Pe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(m1(o,{ceFn:r}))}),i}function bP(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Kl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(m1(i),n)}),n.getAttribute(fi)===null&&X.keepOriginalSource){var r=Pe.createComment(bP(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Dp(n).indexOf(X.replacementClass))return Kl.replace(e);var i=new RegExp("".concat(X.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,u){return u===X.replacementClass||u.match(i)?a.toSvg.push(u):a.toNode.push(u),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Pa(a)}).join(`
`);n.setAttribute(fi,""),n.innerHTML=o}};function Gv(t){t()}function g1(t,e){var n=typeof e=="function"?e:Gl;if(t.length===0)n();else{var r=Gv;X.mutateApproach===Dk&&(r=Or.requestAnimationFrame||Gv),r(function(){var i=kP(),s=Up.begin("mutate");t.map(i),s(),n()})}}var zp=!1;function v1(){zp=!0}function rd(){zp=!1}var Ru=null;function Kv(t){if(Vv&&X.observeMutations){var e=t.treeCallback,n=e===void 0?Gl:e,r=t.nodeCallback,i=r===void 0?Gl:r,s=t.pseudoElementsCallback,o=s===void 0?Gl:s,a=t.observeMutationsRoot,u=a===void 0?Pe:a;Ru=new Vv(function(c){if(!zp){var h=Dr();Ds(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!qv(d.addedNodes[0])&&(X.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&X.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&qv(d.target)&&~zk.indexOf(d.attributeName))if(d.attributeName==="class"&&SP(d.target)){var m=yc(Dp(d.target)),g=m.prefix,E=m.iconName;d.target.setAttribute(xp,g||h),E&&d.target.setAttribute(Np,E)}else AP(d.target)&&i(d.target)})}}),Jn&&Ru.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function RP(){Ru&&Ru.disconnect()}function xP(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function NP(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=yc(Dp(t));return i.prefix||(i.prefix=Dr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=uP(i.prefix,t.innerText)||Vp(i.prefix,Yf(t.innerText))),!i.iconName&&X.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function OP(t){var e=Ds(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return X.autoA11y&&(n?e["aria-labelledby"]="".concat(X.replacementClass,"-title-").concat(r||ua()):(e["aria-hidden"]="true",e.focusable="false")),e}function DP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=NP(t),r=n.iconName,i=n.prefix,s=n.rest,o=OP(t),a=Jf("parseNodeAttributes",{},t),u=e.styleParser?xP(t):[];return q({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:u,attributes:o}},a)}var LP=tn.styles;function y1(t){var e=X.autoReplaceSvg==="nest"?Qv(t,{styleParser:!1}):Qv(t);return~e.extra.classes.indexOf(e1)?Gn("generateLayersText",t,e):Gn("generateSvgReplacementMutation",t,e)}var Lr=new Set;Op.map(function(t){Lr.add("fa-".concat(t))});Object.keys(sa[Ae]).map(Lr.add.bind(Lr));Object.keys(sa[Me]).map(Lr.add.bind(Lr));Lr=Aa(Lr);function Yv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Jn)return Promise.resolve();var n=Pe.documentElement.classList,r=function(d){return n.add("".concat(Fv,"-").concat(d))},i=function(d){return n.remove("".concat(Fv,"-").concat(d))},s=X.autoFetchSvg?Lr:Op.map(function(h){return"fa-".concat(h)}).concat(Object.keys(LP));s.includes("fa")||s.push("fa");var o=[".".concat(e1,":not([").concat(fi,"])")].concat(s.map(function(h){return".".concat(h,":not([").concat(fi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ds(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var u=Up.begin("onTree"),c=a.reduce(function(h,d){try{var m=y1(d);m&&h.push(m)}catch(g){Zw||g.name==="MissingIcon"&&console.error(g)}return h},[]);return new Promise(function(h,d){Promise.all(c).then(function(m){g1(m,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),h()})}).catch(function(m){u(),d(m)})})}function MP(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;y1(t).then(function(n){n&&g1([n],e)})}function VP(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Zf(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Zf(i||{})),t(r,q(q({},n),{},{mask:i}))}}var FP=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?vn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,u=a===void 0?null:a,c=n.maskId,h=c===void 0?null:c,d=n.title,m=d===void 0?null:d,g=n.titleId,E=g===void 0?null:g,k=n.classes,b=k===void 0?[]:k,w=n.attributes,y=w===void 0?{}:w,I=n.styles,x=I===void 0?{}:I;if(e){var O=e.prefix,D=e.iconName,T=e.icon;return _c(q({type:"icon"},e),function(){return di("beforeDOMElementCreation",{iconDefinition:e,params:n}),X.autoA11y&&(m?y["aria-labelledby"]="".concat(X.replacementClass,"-title-").concat(E||ua()):(y["aria-hidden"]="true",y.focusable="false")),jp({icons:{main:ed(T),mask:u?ed(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:D,transform:q(q({},vn),i),symbol:o,title:m,maskId:h,titleId:E,extra:{attributes:y,styles:x,classes:b}})})}},jP={mixout:function(){return{icon:VP(FP)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Yv,n.nodeCallback=MP,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Pe:r,s=n.callback,o=s===void 0?function(){}:s;return Yv(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,u=r.transform,c=r.symbol,h=r.mask,d=r.maskId,m=r.extra;return new Promise(function(g,E){Promise.all([td(i,a),h.iconName?td(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var b=bp(k,2),w=b[0],y=b[1];g([n,jp({icons:{main:w,mask:y},prefix:a,iconName:i,transform:u,symbol:c,maskId:d,title:s,titleId:o,extra:m,watchable:!0})])}).catch(E)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,u=gc(a);u.length>0&&(i.style=u);var c;return Lp(o)&&(c=Gn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},UP={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return _c({type:"layer"},function(){di("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(u){o=o.concat(u.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(X.cssPrefix,"-layers")].concat(Aa(s)).join(" ")},children:o}]})}}}},zP={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,u=r.attributes,c=u===void 0?{}:u,h=r.styles,d=h===void 0?{}:h;return _c({type:"counter",content:n},function(){return di("beforeDOMElementCreation",{content:n,params:r}),wP({content:n.toString(),title:s,extra:{attributes:c,styles:d,classes:["".concat(X.cssPrefix,"-layers-counter")].concat(Aa(a))}})})}}}},$P={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?vn:i,o=r.title,a=o===void 0?null:o,u=r.classes,c=u===void 0?[]:u,h=r.attributes,d=h===void 0?{}:h,m=r.styles,g=m===void 0?{}:m;return _c({type:"text",content:n},function(){return di("beforeDOMElementCreation",{content:n,params:r}),Hv({content:n,transform:q(q({},vn),s),title:a,extra:{attributes:d,styles:g,classes:["".concat(X.cssPrefix,"-layers-text")].concat(Aa(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,u=null;if(Yw){var c=parseInt(getComputedStyle(n).fontSize,10),h=n.getBoundingClientRect();a=h.width/c,u=h.height/c}return X.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Hv({content:n.innerHTML,width:a,height:u,transform:s,title:i,extra:o,watchable:!0})])}}},BP=new RegExp('"',"ug"),Xv=[1105920,1112319];function HP(t){var e=t.replace(BP,""),n=rP(e,0),r=n>=Xv[0]&&n<=Xv[1],i=e.length===2?e[0]===e[1]:!1;return{value:Yf(i?e[0]:e),isSecondary:r||i}}function Jv(t,e){var n="".concat(Ok).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ds(t.children),o=s.filter(function(T){return T.getAttribute(Qf)===e})[0],a=Or.getComputedStyle(t,e),u=a.getPropertyValue("font-family").match(Fk),c=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&h!=="none"&&h!==""){var d=a.getPropertyValue("content"),m=~["Sharp"].indexOf(u[2])?Me:Ae,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?oa[m][u[2].toLowerCase()]:jk[m][c],E=HP(d),k=E.value,b=E.isSecondary,w=u[0].startsWith("FontAwesome"),y=Vp(g,k),I=y;if(w){var x=cP(k);x.iconName&&x.prefix&&(y=x.iconName,g=x.prefix)}if(y&&!b&&(!o||o.getAttribute(xp)!==g||o.getAttribute(Np)!==I)){t.setAttribute(n,I),o&&t.removeChild(o);var O=DP(),D=O.extra;D.attributes[Qf]=e,td(y,g).then(function(T){var v=jp(q(q({},O),{},{icons:{main:T,mask:Fp()},prefix:g,iconName:I,extra:D,watchable:!0})),S=Pe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=v.map(function(A){return Pa(A)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function WP(t){return Promise.all([Jv(t,"::before"),Jv(t,"::after")])}function qP(t){return t.parentNode!==document.head&&!~Lk.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Qf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Zv(t){if(Jn)return new Promise(function(e,n){var r=Ds(t.querySelectorAll("*")).filter(qP).map(WP),i=Up.begin("searchPseudoElements");v1(),Promise.all(r).then(function(){i(),rd(),e()}).catch(function(){i(),rd(),n()})})}var GP={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Zv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Pe:r;X.searchPseudoElements&&Zv(i)}}},ey=!1,KP={mixout:function(){return{dom:{unwatch:function(){v1(),ey=!0}}}},hooks:function(){return{bootstrap:function(){Kv(Jf("mutationObserverCallbacks",{}))},noAuto:function(){RP()},watch:function(n){var r=n.observeMutationsRoot;ey?rd():Kv(Jf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ty=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},QP={mixout:function(){return{parse:{transform:function(n){return ty(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=ty(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),h="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(u," ").concat(c," ").concat(h)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:d,path:m};return{tag:"g",attributes:q({},g.outer),children:[{tag:"g",attributes:q({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:q(q({},r.icon.attributes),g.path)}]}]}}}},Vh={x:0,y:0,width:"100%",height:"100%"};function ny(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function YP(t){return t.tag==="g"?t.children:[t]}var XP={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?yc(i.split(" ").map(function(o){return o.trim()})):Fp();return s.prefix||(s.prefix=Dr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,u=n.transform,c=s.width,h=s.icon,d=o.width,m=o.icon,g=Yk({transform:u,containerWidth:d,iconWidth:c}),E={tag:"rect",attributes:q(q({},Vh),{},{fill:"white"})},k=h.children?{children:h.children.map(ny)}:{},b={tag:"g",attributes:q({},g.inner),children:[ny(q({tag:h.tag,attributes:q(q({},h.attributes),g.path)},k))]},w={tag:"g",attributes:q({},g.outer),children:[b]},y="mask-".concat(a||ua()),I="clip-".concat(a||ua()),x={tag:"mask",attributes:q(q({},Vh),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,w]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:YP(m)},x]};return r.push(O,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(y,")")},Vh)}),{children:r,attributes:i}}}},JP={provides:function(e){var n=!1;Or.matchMedia&&(n=Or.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:q(q({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=q(q({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:q(q({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:q(q({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:q(q({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:q(q({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:q(q({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ZP={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},eC=[Zk,jP,UP,zP,$P,GP,KP,QP,XP,JP,ZP];dP(eC,{mixoutsTo:Ut});Ut.noAuto;Ut.config;Ut.library;Ut.dom;var id=Ut.parse;Ut.findIconDefinition;Ut.toHtml;var tC=Ut.icon;Ut.layer;Ut.text;Ut.counter;var _1={exports:{}},nC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rC=nC,iC=rC;function w1(){}function E1(){}E1.resetWarningCache=w1;var sC=function(){function t(r,i,s,o,a,u){if(u!==iC){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:E1,resetWarningCache:w1};return n.PropTypes=n,n};_1.exports=sC();var oC=_1.exports;const ae=Dd(oC);function ry(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function mn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ry(Object(n),!0).forEach(function(r){ts(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ry(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function xu(t){"@babel/helpers - typeof";return xu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xu(t)}function ts(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function aC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function lC(t,e){if(t==null)return{};var n=aC(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function sd(t){return uC(t)||cC(t)||hC(t)||fC()}function uC(t){if(Array.isArray(t))return od(t)}function cC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hC(t,e){if(t){if(typeof t=="string")return od(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return od(t,e)}}function od(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function fC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dC(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,h=t.spinReverse,d=t.pulse,m=t.fixedWidth,g=t.inverse,E=t.border,k=t.listItem,b=t.flip,w=t.size,y=t.rotation,I=t.pull,x=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":m,"fa-inverse":g,"fa-border":E,"fa-li":k,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},ts(e,"fa-".concat(w),typeof w<"u"&&w!==null),ts(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),ts(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),ts(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(O){return x[O]?O:null}).filter(function(O){return O})}function pC(t){return t=t-0,t===t}function T1(t){return pC(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var mC=["style"];function gC(t){return t.charAt(0).toUpperCase()+t.slice(1)}function vC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=T1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[gC(i)]=s:e[i]=s,e},{})}function I1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return I1(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var h=e.attributes[c];switch(c){case"class":u.attrs.className=h,delete e.attributes.class;break;case"style":u.attrs.style=vC(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=h:u.attrs[T1(c)]=h}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=lC(n,mC);return i.attrs.style=mn(mn({},i.attrs.style),o),t.apply(void 0,[e.tag,mn(mn({},i.attrs),a)].concat(sd(r)))}var S1=!1;try{S1=!0}catch{}function yC(){if(!S1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function iy(t){if(t&&xu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(id.icon)return id.icon(t);if(t===null)return null;if(t&&xu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Fh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ts({},t,e):{}}var sy={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Nu=ec.forwardRef(function(t,e){var n=mn(mn({},sy),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,h=iy(r),d=Fh("classes",[].concat(sd(dC(n)),sd((o||"").split(" ")))),m=Fh("transform",typeof n.transform=="string"?id.transform(n.transform):n.transform),g=Fh("mask",iy(i)),E=tC(h,mn(mn(mn(mn({},d),m),g),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!E)return yC("Could not find icon",h),null;var k=E.abstract,b={ref:e};return Object.keys(n).forEach(function(w){sy.hasOwnProperty(w)||(b[w]=n[w])}),_C(k[0],b)});Nu.displayName="FontAwesomeIcon";Nu.propTypes={beat:ae.bool,border:ae.bool,beatFade:ae.bool,bounce:ae.bool,className:ae.string,fade:ae.bool,flash:ae.bool,mask:ae.oneOfType([ae.object,ae.array,ae.string]),maskId:ae.string,fixedWidth:ae.bool,inverse:ae.bool,flip:ae.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ae.oneOfType([ae.object,ae.array,ae.string]),listItem:ae.bool,pull:ae.oneOf(["right","left"]),pulse:ae.bool,rotation:ae.oneOf([0,90,180,270]),shake:ae.bool,size:ae.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ae.bool,spinPulse:ae.bool,spinReverse:ae.bool,symbol:ae.oneOfType([ae.bool,ae.string]),title:ae.string,titleId:ae.string,transform:ae.oneOfType([ae.string,ae.object]),swapOpacity:ae.bool};var _C=I1.bind(null,ec.createElement),wC={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},EC={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},oy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},k1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(m=64)),r.push(n[h],n[d],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(A1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new IC;const m=s<<2|a>>4;if(r.push(m),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const E=c<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SC=function(t){const e=A1(t);return k1.encodeByteArray(e,!0)},Ou=function(t){return SC(t).replace(/\./g,"")},P1=function(t){try{return k1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=()=>AC().__FIREBASE_DEFAULTS__,PC=()=>{if(typeof process>"u"||typeof oy>"u")return;const t=oy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&P1(t[1]);return e&&JSON.parse(e)},wc=()=>{try{return kC()||PC()||CC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},C1=t=>{var e,n;return(n=(e=wc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bC=t=>{const e=C1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},b1=()=>{var t;return(t=wc())===null||t===void 0?void 0:t.config},R1=t=>{var e;return(e=wc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ou(JSON.stringify(n)),Ou(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function OC(){var t;const e=(t=wc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function x1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function DC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LC(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function MC(){return!OC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function N1(){try{return typeof indexedDB=="object"}catch{return!1}}function O1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function VC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FC,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cn(i,a,r)}}function jC(t,e){return t.replace(UC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UC=/\{\$([^}]+)}/g;function zC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ca(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ay(s)&&ay(o)){if(!ca(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ay(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $C(t,e){const n=new BC(t,e);return n.subscribe.bind(n)}class BC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jh),i.error===void 0&&(i.error=jh),i.complete===void 0&&(i.complete=jh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=1e3,qC=2,GC=4*60*60*1e3,KC=.5;function ly(t,e=WC,n=qC){const r=e*Math.pow(n,t),i=Math.round(KC*r*(Math.random()-.5)*2);return Math.min(GC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XC(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YC(t){return t===Yr?void 0:t}function XC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const ZC={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},eb=he.INFO,tb={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},nb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ec{constructor(e){this.name=e,this._logLevel=eb,this._logHandler=nb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const rb=(t,e)=>e.some(n=>t instanceof n);let uy,cy;function ib(){return uy||(uy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sb(){return cy||(cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D1=new WeakMap,ad=new WeakMap,L1=new WeakMap,Uh=new WeakMap,$p=new WeakMap;function ob(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&D1.set(n,t)}).catch(()=>{}),$p.set(e,t),e}function ab(t){if(ad.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ad.set(t,e)}let ld={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ad.get(t);if(e==="objectStoreNames")return t.objectStoreNames||L1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lb(t){ld=t(ld)}function ub(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zh(this),e,...n);return L1.set(r,e.sort?e.sort():[e]),kr(r)}:sb().includes(t)?function(...e){return t.apply(zh(this),e),kr(D1.get(this))}:function(...e){return kr(t.apply(zh(this),e))}}function cb(t){return typeof t=="function"?ub(t):(t instanceof IDBTransaction&&ab(t),rb(t,ib())?new Proxy(t,ld):t)}function kr(t){if(t instanceof IDBRequest)return ob(t);if(Uh.has(t))return Uh.get(t);const e=cb(t);return e!==t&&(Uh.set(t,e),$p.set(e,t)),e}const zh=t=>$p.get(t);function M1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(kr(o.result),u.oldVersion,u.newVersion,kr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const hb=["get","getKey","getAll","getAllKeys","count"],fb=["put","add","delete","clear"],$h=new Map;function hy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($h.get(e))return $h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hb.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return $h.set(e,s),s}lb(t=>({...t,get:(e,n,r)=>hy(e,n)||t.get(e,n,r),has:(e,n)=>!!hy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ud="@firebase/app",fy="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Ec("@firebase/app"),mb="@firebase/app-compat",gb="@firebase/analytics-compat",vb="@firebase/analytics",yb="@firebase/app-check-compat",_b="@firebase/app-check",wb="@firebase/auth",Eb="@firebase/auth-compat",Tb="@firebase/database",Ib="@firebase/database-compat",Sb="@firebase/functions",Ab="@firebase/functions-compat",kb="@firebase/installations",Pb="@firebase/installations-compat",Cb="@firebase/messaging",bb="@firebase/messaging-compat",Rb="@firebase/performance",xb="@firebase/performance-compat",Nb="@firebase/remote-config",Ob="@firebase/remote-config-compat",Db="@firebase/storage",Lb="@firebase/storage-compat",Mb="@firebase/firestore",Vb="@firebase/vertexai-preview",Fb="@firebase/firestore-compat",jb="firebase",Ub="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="[DEFAULT]",zb={[ud]:"fire-core",[mb]:"fire-core-compat",[vb]:"fire-analytics",[gb]:"fire-analytics-compat",[_b]:"fire-app-check",[yb]:"fire-app-check-compat",[wb]:"fire-auth",[Eb]:"fire-auth-compat",[Tb]:"fire-rtdb",[Ib]:"fire-rtdb-compat",[Sb]:"fire-fn",[Ab]:"fire-fn-compat",[kb]:"fire-iid",[Pb]:"fire-iid-compat",[Cb]:"fire-fcm",[bb]:"fire-fcm-compat",[Rb]:"fire-perf",[xb]:"fire-perf-compat",[Nb]:"fire-rc",[Ob]:"fire-rc-compat",[Db]:"fire-gcs",[Lb]:"fire-gcs-compat",[Mb]:"fire-fst",[Fb]:"fire-fst-compat",[Vb]:"fire-vertex","fire-js":"fire-js",[jb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Map,$b=new Map,hd=new Map;function dy(t,e){try{t.container.addComponent(e)}catch(n){pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(hd.has(e))return pi.debug(`There were multiple attempts to register component ${e}.`),!1;hd.set(e,t);for(const n of Du.values())dy(n,t);for(const n of $b.values())dy(n,t);return!0}function Si(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Ii("app","Firebase",Bb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=Ub;function V1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=b1()),!n)throw Pr.create("no-options");const s=Du.get(i);if(s){if(ca(n,s.options)&&ca(r,s.config))return s;throw Pr.create("duplicate-app",{appName:i})}const o=new JC(i);for(const u of hd.values())o.addComponent(u);const a=new Hb(n,r,o);return Du.set(i,a),a}function Bp(t=cd){const e=Du.get(t);if(!e&&t===cd&&b1())return V1();if(!e)throw Pr.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let i=(r=zb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pi.warn(a.join(" "));return}Sn(new ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="firebase-heartbeat-database",qb=1,ha="firebase-heartbeat-store";let Bh=null;function F1(){return Bh||(Bh=M1(Wb,qb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ha)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),Bh}async function Gb(t){try{const n=(await F1()).transaction(ha),r=await n.objectStore(ha).get(j1(t));return await n.done,r}catch(e){if(e instanceof cn)pi.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pi.warn(n.message)}}}async function py(t,e){try{const r=(await F1()).transaction(ha,"readwrite");await r.objectStore(ha).put(e,j1(t)),await r.done}catch(n){if(n instanceof cn)pi.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pi.warn(r.message)}}}function j1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=1024,Qb=30*24*60*60*1e3;class Yb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=my();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Qb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=my(),{heartbeatsToSend:r,unsentEntries:i}=Xb(this._heartbeatsCache.heartbeats),s=Ou(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function my(){return new Date().toISOString().substring(0,10)}function Xb(t,e=Kb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N1()?O1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return py(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return py(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gy(t){return Ou(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){Sn(new ln("platform-logger",e=>new db(e),"PRIVATE")),Sn(new ln("heartbeat",e=>new Yb(e),"PRIVATE")),Gt(ud,fy,t),Gt(ud,fy,"esm2017"),Gt("fire-js","")}Zb("");var eR="firebase",tR="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(eR,tR,"app");const U1="@firebase/installations",Hp="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=1e4,$1=`w:${Hp}`,B1="FIS_v2",nR="https://firebaseinstallations.googleapis.com/v1",rR=60*60*1e3,iR="installations",sR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},mi=new Ii(iR,sR,oR);function H1(t){return t instanceof cn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1({projectId:t}){return`${nR}/projects/${t}/installations`}function q1(t){return{token:t.token,requestStatus:2,expiresIn:lR(t.expiresIn),creationTime:Date.now()}}async function G1(t,e){const r=(await e.json()).error;return mi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function K1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function aR(t,{refreshToken:e}){const n=K1(t);return n.append("Authorization",uR(e)),n}async function Q1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function lR(t){return Number(t.replace("s","000"))}function uR(t){return`${B1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=W1(t),i=K1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:B1,appId:t.appId,sdkVersion:$1},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await Q1(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:q1(c.authToken)}}else throw await G1("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=/^[cdef][\w-]{21}$/,fd="";function dR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=pR(t);return fR.test(n)?n:fd}catch{return fd}}function pR(t){return hR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=new Map;function J1(t,e){const n=Tc(t);Z1(n,e),mR(n,e)}function Z1(t,e){const n=X1.get(t);if(n)for(const r of n)r(e)}function mR(t,e){const n=gR();n&&n.postMessage({key:t,fid:e}),vR()}let ni=null;function gR(){return!ni&&"BroadcastChannel"in self&&(ni=new BroadcastChannel("[Firebase] FID Change"),ni.onmessage=t=>{Z1(t.data.key,t.data.fid)}),ni}function vR(){X1.size===0&&ni&&(ni.close(),ni=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="firebase-installations-database",_R=1,gi="firebase-installations-store";let Hh=null;function Wp(){return Hh||(Hh=M1(yR,_R,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gi)}}})),Hh}async function Lu(t,e){const n=Tc(t),i=(await Wp()).transaction(gi,"readwrite"),s=i.objectStore(gi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&J1(t,e.fid),e}async function eE(t){const e=Tc(t),r=(await Wp()).transaction(gi,"readwrite");await r.objectStore(gi).delete(e),await r.done}async function Ic(t,e){const n=Tc(t),i=(await Wp()).transaction(gi,"readwrite"),s=i.objectStore(gi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&J1(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(t){let e;const n=await Ic(t.appConfig,r=>{const i=wR(r),s=ER(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===fd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function wR(t){const e=t||{fid:dR(),registrationStatus:0};return tE(e)}function ER(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(mi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=TR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:IR(t)}:{installationEntry:e}}async function TR(t,e){try{const n=await cR(t,e);return Lu(t.appConfig,n)}catch(n){throw H1(n)&&n.customData.serverCode===409?await eE(t.appConfig):await Lu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function IR(t){let e=await vy(t.appConfig);for(;e.registrationStatus===1;)await Y1(100),e=await vy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qp(t);return r||n}return e}function vy(t){return Ic(t,e=>{if(!e)throw mi.create("installation-not-found");return tE(e)})}function tE(t){return SR(t)?{fid:t.fid,registrationStatus:0}:t}function SR(t){return t.registrationStatus===1&&t.registrationTime+z1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR({appConfig:t,heartbeatServiceProvider:e},n){const r=kR(t,n),i=aR(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:$1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await Q1(()=>fetch(r,a));if(u.ok){const c=await u.json();return q1(c)}else throw await G1("Generate Auth Token",u)}function kR(t,{fid:e}){return`${W1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(t,e=!1){let n;const r=await Ic(t.appConfig,s=>{if(!nE(s))throw mi.create("not-registered");const o=s.authToken;if(!e&&bR(o))return s;if(o.requestStatus===1)return n=PR(t,e),s;{if(!navigator.onLine)throw mi.create("app-offline");const a=xR(s);return n=CR(t,a),a}});return n?await n:r.authToken}async function PR(t,e){let n=await yy(t.appConfig);for(;n.authToken.requestStatus===1;)await Y1(100),n=await yy(t.appConfig);const r=n.authToken;return r.requestStatus===0?Gp(t,e):r}function yy(t){return Ic(t,e=>{if(!nE(e))throw mi.create("not-registered");const n=e.authToken;return NR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function CR(t,e){try{const n=await AR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Lu(t.appConfig,r),n}catch(n){if(H1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await eE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Lu(t.appConfig,r)}throw n}}function nE(t){return t!==void 0&&t.registrationStatus===2}function bR(t){return t.requestStatus===2&&!RR(t)}function RR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+rR}function xR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function NR(t){return t.requestStatus===1&&t.requestTime+z1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t){const e=t,{installationEntry:n,registrationPromise:r}=await qp(e);return r?r.catch(console.error):Gp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e=!1){const n=t;return await LR(n),(await Gp(n,e)).token}async function LR(t){const{registrationPromise:e}=await qp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){if(!t||!t.options)throw Wh("App Configuration");if(!t.name)throw Wh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Wh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Wh(t){return mi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="installations",VR="installations-internal",FR=t=>{const e=t.getProvider("app").getImmediate(),n=MR(e),r=Si(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jR=t=>{const e=t.getProvider("app").getImmediate(),n=Si(e,rE).getImmediate();return{getId:()=>OR(n),getToken:i=>DR(n,i)}};function UR(){Sn(new ln(rE,FR,"PUBLIC")),Sn(new ln(VR,jR,"PRIVATE"))}UR();Gt(U1,Hp);Gt(U1,Hp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="analytics",zR="firebase_id",$R="origin",BR=60*1e3,HR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Kp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Ec("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Mt=new Ii("analytics","Analytics",WR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){if(!t.startsWith(Kp)){const e=Mt.create("invalid-gtag-resource",{gtagURL:t});return bt.warn(e.message),""}return t}function iE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function GR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function KR(t,e){const n=GR("firebase-js-sdk-policy",{createScriptURL:qR}),r=document.createElement("script"),i=`${Kp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function QR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function YR(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await iE(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){bt.error(a)}t("config",i,s)}async function XR(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await iE(n);for(const u of o){const c=a.find(d=>d.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){bt.error(s)}}function JR(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await XR(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await YR(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){bt.error(a)}}return i}function ZR(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=JR(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function e2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Kp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=30,n2=1e3;class r2{constructor(e={},n=n2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sE=new r2;function i2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function s2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:i2(r)},s=HR.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Mt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function o2(t,e=sE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Mt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Mt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new u2;return setTimeout(async()=>{a.abort()},BR),oE({appId:r,apiKey:i,measurementId:s},o,a,e)}async function oE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=sE){var s;const{appId:o,measurementId:a}=t;try{await a2(r,e)}catch(u){if(a)return bt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await s2(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!l2(c)){if(i.deleteThrottleMetadata(o),a)return bt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?ly(n,i.intervalMillis,t2):ly(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,d),bt.debug(`Calling attemptFetch again in ${h} millis`),oE(t,d,r,i)}}function a2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function l2(t){if(!(t instanceof cn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class u2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function c2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h2(){if(N1())try{await O1()}catch(t){return bt.warn(Mt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return bt.warn(Mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function f2(t,e,n,r,i,s,o){var a;const u=o2(t);u.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&bt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>bt.error(g)),e.push(u);const c=h2().then(g=>{if(g)return r.getId()}),[h,d]=await Promise.all([u,c]);e2(s)||KR(s,h.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[$R]="firebase",m.update=!0,d!=null&&(m[zR]=d),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.app=e}_delete(){return delete Mo[this.app.options.appId],Promise.resolve()}}let Mo={},_y=[];const wy={};let qh="dataLayer",p2="gtag",Ey,aE,Ty=!1;function m2(){const t=[];if(x1()&&t.push("This is a browser extension environment."),VC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Mt.create("invalid-analytics-context",{errorInfo:e});bt.warn(n.message)}}function g2(t,e,n){m2();const r=t.options.appId;if(!r)throw Mt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)bt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Mt.create("no-api-key");if(Mo[r]!=null)throw Mt.create("already-exists",{id:r});if(!Ty){QR(qh);const{wrappedGtag:s,gtagCore:o}=ZR(Mo,_y,wy,qh,p2);aE=s,Ey=o,Ty=!0}return Mo[r]=f2(t,_y,wy,e,Ey,qh,n),new d2(t)}function v2(t=Bp()){t=Rt(t);const e=Si(t,Mu);return e.isInitialized()?e.getImmediate():y2(t)}function y2(t,e={}){const n=Si(t,Mu);if(n.isInitialized()){const i=n.getImmediate();if(ca(e,n.getOptions()))return i;throw Mt.create("already-initialized")}return n.initialize({options:e})}function _2(t,e,n,r){t=Rt(t),c2(aE,Mo[t.app.options.appId],e,n,r).catch(i=>bt.error(i))}const Iy="@firebase/analytics",Sy="0.10.4";function w2(){Sn(new ln(Mu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return g2(r,i,n)},"PUBLIC")),Sn(new ln("analytics-internal",t,"PRIVATE")),Gt(Iy,Sy),Gt(Iy,Sy,"esm2017");function t(e){try{const n=e.getProvider(Mu).getImmediate();return{logEvent:(r,i,s)=>_2(n,r,i,s)}}catch(n){throw Mt.create("interop-component-reg-failed",{reason:n})}}}w2();var Ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oi,lE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function S(){}S.prototype=v.prototype,T.D=v.prototype,T.prototype=new S,T.prototype.constructor=T,T.C=function(A,C,R){for(var P=Array(arguments.length-2),se=2;se<arguments.length;se++)P[se-2]=arguments[se];return v.prototype[C].apply(A,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,S){S||(S=0);var A=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)A[C]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(C=0;16>C;++C)A[C]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=T.g[0],S=T.g[1],C=T.g[2];var R=T.g[3],P=v+(R^S&(C^R))+A[0]+3614090360&4294967295;v=S+(P<<7&4294967295|P>>>25),P=R+(C^v&(S^C))+A[1]+3905402710&4294967295,R=v+(P<<12&4294967295|P>>>20),P=C+(S^R&(v^S))+A[2]+606105819&4294967295,C=R+(P<<17&4294967295|P>>>15),P=S+(v^C&(R^v))+A[3]+3250441966&4294967295,S=C+(P<<22&4294967295|P>>>10),P=v+(R^S&(C^R))+A[4]+4118548399&4294967295,v=S+(P<<7&4294967295|P>>>25),P=R+(C^v&(S^C))+A[5]+1200080426&4294967295,R=v+(P<<12&4294967295|P>>>20),P=C+(S^R&(v^S))+A[6]+2821735955&4294967295,C=R+(P<<17&4294967295|P>>>15),P=S+(v^C&(R^v))+A[7]+4249261313&4294967295,S=C+(P<<22&4294967295|P>>>10),P=v+(R^S&(C^R))+A[8]+1770035416&4294967295,v=S+(P<<7&4294967295|P>>>25),P=R+(C^v&(S^C))+A[9]+2336552879&4294967295,R=v+(P<<12&4294967295|P>>>20),P=C+(S^R&(v^S))+A[10]+4294925233&4294967295,C=R+(P<<17&4294967295|P>>>15),P=S+(v^C&(R^v))+A[11]+2304563134&4294967295,S=C+(P<<22&4294967295|P>>>10),P=v+(R^S&(C^R))+A[12]+1804603682&4294967295,v=S+(P<<7&4294967295|P>>>25),P=R+(C^v&(S^C))+A[13]+4254626195&4294967295,R=v+(P<<12&4294967295|P>>>20),P=C+(S^R&(v^S))+A[14]+2792965006&4294967295,C=R+(P<<17&4294967295|P>>>15),P=S+(v^C&(R^v))+A[15]+1236535329&4294967295,S=C+(P<<22&4294967295|P>>>10),P=v+(C^R&(S^C))+A[1]+4129170786&4294967295,v=S+(P<<5&4294967295|P>>>27),P=R+(S^C&(v^S))+A[6]+3225465664&4294967295,R=v+(P<<9&4294967295|P>>>23),P=C+(v^S&(R^v))+A[11]+643717713&4294967295,C=R+(P<<14&4294967295|P>>>18),P=S+(R^v&(C^R))+A[0]+3921069994&4294967295,S=C+(P<<20&4294967295|P>>>12),P=v+(C^R&(S^C))+A[5]+3593408605&4294967295,v=S+(P<<5&4294967295|P>>>27),P=R+(S^C&(v^S))+A[10]+38016083&4294967295,R=v+(P<<9&4294967295|P>>>23),P=C+(v^S&(R^v))+A[15]+3634488961&4294967295,C=R+(P<<14&4294967295|P>>>18),P=S+(R^v&(C^R))+A[4]+3889429448&4294967295,S=C+(P<<20&4294967295|P>>>12),P=v+(C^R&(S^C))+A[9]+568446438&4294967295,v=S+(P<<5&4294967295|P>>>27),P=R+(S^C&(v^S))+A[14]+3275163606&4294967295,R=v+(P<<9&4294967295|P>>>23),P=C+(v^S&(R^v))+A[3]+4107603335&4294967295,C=R+(P<<14&4294967295|P>>>18),P=S+(R^v&(C^R))+A[8]+1163531501&4294967295,S=C+(P<<20&4294967295|P>>>12),P=v+(C^R&(S^C))+A[13]+2850285829&4294967295,v=S+(P<<5&4294967295|P>>>27),P=R+(S^C&(v^S))+A[2]+4243563512&4294967295,R=v+(P<<9&4294967295|P>>>23),P=C+(v^S&(R^v))+A[7]+1735328473&4294967295,C=R+(P<<14&4294967295|P>>>18),P=S+(R^v&(C^R))+A[12]+2368359562&4294967295,S=C+(P<<20&4294967295|P>>>12),P=v+(S^C^R)+A[5]+4294588738&4294967295,v=S+(P<<4&4294967295|P>>>28),P=R+(v^S^C)+A[8]+2272392833&4294967295,R=v+(P<<11&4294967295|P>>>21),P=C+(R^v^S)+A[11]+1839030562&4294967295,C=R+(P<<16&4294967295|P>>>16),P=S+(C^R^v)+A[14]+4259657740&4294967295,S=C+(P<<23&4294967295|P>>>9),P=v+(S^C^R)+A[1]+2763975236&4294967295,v=S+(P<<4&4294967295|P>>>28),P=R+(v^S^C)+A[4]+1272893353&4294967295,R=v+(P<<11&4294967295|P>>>21),P=C+(R^v^S)+A[7]+4139469664&4294967295,C=R+(P<<16&4294967295|P>>>16),P=S+(C^R^v)+A[10]+3200236656&4294967295,S=C+(P<<23&4294967295|P>>>9),P=v+(S^C^R)+A[13]+681279174&4294967295,v=S+(P<<4&4294967295|P>>>28),P=R+(v^S^C)+A[0]+3936430074&4294967295,R=v+(P<<11&4294967295|P>>>21),P=C+(R^v^S)+A[3]+3572445317&4294967295,C=R+(P<<16&4294967295|P>>>16),P=S+(C^R^v)+A[6]+76029189&4294967295,S=C+(P<<23&4294967295|P>>>9),P=v+(S^C^R)+A[9]+3654602809&4294967295,v=S+(P<<4&4294967295|P>>>28),P=R+(v^S^C)+A[12]+3873151461&4294967295,R=v+(P<<11&4294967295|P>>>21),P=C+(R^v^S)+A[15]+530742520&4294967295,C=R+(P<<16&4294967295|P>>>16),P=S+(C^R^v)+A[2]+3299628645&4294967295,S=C+(P<<23&4294967295|P>>>9),P=v+(C^(S|~R))+A[0]+4096336452&4294967295,v=S+(P<<6&4294967295|P>>>26),P=R+(S^(v|~C))+A[7]+1126891415&4294967295,R=v+(P<<10&4294967295|P>>>22),P=C+(v^(R|~S))+A[14]+2878612391&4294967295,C=R+(P<<15&4294967295|P>>>17),P=S+(R^(C|~v))+A[5]+4237533241&4294967295,S=C+(P<<21&4294967295|P>>>11),P=v+(C^(S|~R))+A[12]+1700485571&4294967295,v=S+(P<<6&4294967295|P>>>26),P=R+(S^(v|~C))+A[3]+2399980690&4294967295,R=v+(P<<10&4294967295|P>>>22),P=C+(v^(R|~S))+A[10]+4293915773&4294967295,C=R+(P<<15&4294967295|P>>>17),P=S+(R^(C|~v))+A[1]+2240044497&4294967295,S=C+(P<<21&4294967295|P>>>11),P=v+(C^(S|~R))+A[8]+1873313359&4294967295,v=S+(P<<6&4294967295|P>>>26),P=R+(S^(v|~C))+A[15]+4264355552&4294967295,R=v+(P<<10&4294967295|P>>>22),P=C+(v^(R|~S))+A[6]+2734768916&4294967295,C=R+(P<<15&4294967295|P>>>17),P=S+(R^(C|~v))+A[13]+1309151649&4294967295,S=C+(P<<21&4294967295|P>>>11),P=v+(C^(S|~R))+A[4]+4149444226&4294967295,v=S+(P<<6&4294967295|P>>>26),P=R+(S^(v|~C))+A[11]+3174756917&4294967295,R=v+(P<<10&4294967295|P>>>22),P=C+(v^(R|~S))+A[2]+718787259&4294967295,C=R+(P<<15&4294967295|P>>>17),P=S+(R^(C|~v))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(C+(P<<21&4294967295|P>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var S=v-this.blockSize,A=this.B,C=this.h,R=0;R<v;){if(C==0)for(;R<=S;)i(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<v;)if(A[C++]=T.charCodeAt(R++),C==this.blockSize){i(this,A),C=0;break}}else for(;R<v;)if(A[C++]=T[R++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var S=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=S&255,S/=256;for(this.u(T),T=Array(16),v=S=0;4>v;++v)for(var A=0;32>A;A+=8)T[S++]=this.g[v]>>>A&255;return T};function s(T,v){var S=a;return Object.prototype.hasOwnProperty.call(S,T)?S[T]:S[T]=v(T)}function o(T,v){this.h=v;for(var S=[],A=!0,C=T.length-1;0<=C;C--){var R=T[C]|0;A&&R==v||(S[C]=R,A=!1)}this.g=S}var a={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return d;if(0>T)return b(c(-T));for(var v=[],S=1,A=0;T>=S;A++)v[A]=T/S|0,S*=4294967296;return new o(v,0)}function h(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return b(h(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),A=d,C=0;C<T.length;C+=8){var R=Math.min(8,T.length-C),P=parseInt(T.substring(C,C+R),v);8>R?(R=c(Math.pow(v,R)),A=A.j(R).add(c(P))):(A=A.j(S),A=A.add(c(P)))}return A}var d=u(0),m=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-b(this).m();for(var T=0,v=1,S=0;S<this.g.length;S++){var A=this.i(S);T+=(0<=A?A:4294967296+A)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(E(this))return"0";if(k(this))return"-"+b(this).toString(T);for(var v=c(Math.pow(T,6)),S=this,A="";;){var C=x(S,v).g;S=w(S,C.j(v));var R=((0<S.g.length?S.g[0]:S.h)>>>0).toString(T);if(S=C,E(S))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function E(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=w(this,T),k(T)?-1:E(T)?0:1};function b(T){for(var v=T.g.length,S=[],A=0;A<v;A++)S[A]=~T.g[A];return new o(S,~T.h).add(m)}t.abs=function(){return k(this)?b(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0,C=0;C<=v;C++){var R=A+(this.i(C)&65535)+(T.i(C)&65535),P=(R>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);A=P>>>16,R&=65535,P&=65535,S[C]=P<<16|R}return new o(S,S[S.length-1]&-2147483648?-1:0)};function w(T,v){return T.add(b(v))}t.j=function(T){if(E(this)||E(T))return d;if(k(this))return k(T)?b(this).j(b(T)):b(b(this).j(T));if(k(T))return b(this.j(b(T)));if(0>this.l(g)&&0>T.l(g))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,S=[],A=0;A<2*v;A++)S[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<T.g.length;C++){var R=this.i(A)>>>16,P=this.i(A)&65535,se=T.i(C)>>>16,fe=T.i(C)&65535;S[2*A+2*C]+=P*fe,y(S,2*A+2*C),S[2*A+2*C+1]+=R*fe,y(S,2*A+2*C+1),S[2*A+2*C+1]+=P*se,y(S,2*A+2*C+1),S[2*A+2*C+2]+=R*se,y(S,2*A+2*C+2)}for(A=0;A<v;A++)S[A]=S[2*A+1]<<16|S[2*A];for(A=v;A<2*v;A++)S[A]=0;return new o(S,0)};function y(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function I(T,v){this.g=T,this.h=v}function x(T,v){if(E(v))throw Error("division by zero");if(E(T))return new I(d,d);if(k(T))return v=x(b(T),v),new I(b(v.g),b(v.h));if(k(v))return v=x(T,b(v)),new I(b(v.g),v.h);if(30<T.g.length){if(k(T)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var S=m,A=v;0>=A.l(T);)S=O(S),A=O(A);var C=D(S,1),R=D(A,1);for(A=D(A,2),S=D(S,2);!E(A);){var P=R.add(A);0>=P.l(T)&&(C=C.add(S),R=P),A=D(A,1),S=D(S,1)}return v=w(T,C.j(v)),new I(C,v)}for(C=d;0<=T.l(v);){for(S=Math.max(1,Math.floor(T.m()/v.m())),A=Math.ceil(Math.log(S)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=c(S),P=R.j(v);k(P)||0<P.l(T);)S-=A,R=c(S),P=R.j(v);E(R)&&(R=m),C=C.add(R),T=w(T,P)}return new I(C,T)}t.A=function(T){return x(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)&T.i(A);return new o(S,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)|T.i(A);return new o(S,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)^T.i(A);return new o(S,this.h^T.h)};function O(T){for(var v=T.g.length+1,S=[],A=0;A<v;A++)S[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(S,T.h)}function D(T,v){var S=v>>5;v%=32;for(var A=T.g.length-S,C=[],R=0;R<A;R++)C[R]=0<v?T.i(R+S)>>>v|T.i(R+S+1)<<32-v:T.i(R+S);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,oi=o}).apply(typeof Ay<"u"?Ay:typeof self<"u"?self:typeof window<"u"?window:{});var bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uE,cE,To,hE,Ql,dd,fE,dE,pE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,p){return l==Array.prototype||l==Object.prototype||(l[f]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof bl=="object"&&bl];for(var f=0;f<l.length;++f){var p=l[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var N=l[_];if(!(N in p))break e;p=p[N]}l=l[l.length-1],_=p[l],f=f(_),f!=_&&f!=null&&e(p,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var p=0,_=!1,N={next:function(){if(!_&&p<l.length){var L=p++;return{value:f(L,l[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function c(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,p){return l.call.apply(l.bind,arguments)}function d(l,f,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),l.apply(f,N)}}return function(){return l.apply(f,arguments)}}function m(l,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function g(l,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function E(l,f){function p(){}p.prototype=f.prototype,l.aa=f.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,N,L){for(var B=Array(arguments.length-2),we=2;we<arguments.length;we++)B[we-2]=arguments[we];return f.prototype[N].apply(_,B)}}function k(l){const f=l.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=l[_];return p}return[]}function b(l,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const N=l.length||0,L=_.length||0;l.length=N+L;for(let B=0;B<L;B++)l[N+B]=_[B]}else l.push(_)}}class w{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function y(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var O=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function D(l,f,p){for(const _ in l)f.call(p,l[_],_,l)}function T(l,f){for(const p in l)f.call(void 0,l[p],p,l)}function v(l){const f={};for(const p in l)f[p]=l[p];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,f){let p,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(p in _)l[p]=_[p];for(let L=0;L<S.length;L++)p=S[L],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function C(l){var f=1;l=l.split(":");const p=[];for(;0<f&&l.length;)p.push(l.shift()),f--;return l.length&&p.push(l.join(":")),p}function R(l){a.setTimeout(()=>{throw l},0)}function P(){var l=$;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class se{constructor(){this.h=this.g=null}add(f,p){const _=fe.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var fe=new w(()=>new oe,l=>l.reset());class oe{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,H=!1,$=new se,V=()=>{const l=a.Promise.resolve(void 0);$e=()=>{l.then(Y)}};var Y=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(p){R(p)}var f=fe;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}H=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var M=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,f),a.removeEventListener("test",p,f)}catch{}return l}();function zt(l,f){if(me.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(O){e:{try{x(f.nodeName);var N=!0;break e}catch{}N=!1}N||(f=null)}}else p=="mouseover"?f=l.fromElement:p=="mouseout"&&(f=l.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:K[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&zt.aa.h.call(this)}}E(zt,me);var K={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ue="closure_listenable_"+(1e6*Math.random()|0),Ke=0;function Qe(l,f,p,_,N){this.listener=l,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=N,this.key=++Ke,this.da=this.fa=!1}function ye(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function et(l){this.src=l,this.g={},this.h=0}et.prototype.add=function(l,f,p,_,N){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var B=Pn(l,f,_,N);return-1<B?(f=l[B],p||(f.fa=!1)):(f=new Qe(f,this.src,L,!!_,N),f.fa=p,l.push(f)),f};function hn(l,f){var p=f.type;if(p in l.g){var _=l.g[p],N=Array.prototype.indexOf.call(_,f,void 0),L;(L=0<=N)&&Array.prototype.splice.call(_,N,1),L&&(ye(f),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Pn(l,f,p,_){for(var N=0;N<l.length;++N){var L=l[N];if(!L.da&&L.listener==f&&L.capture==!!p&&L.ha==_)return N}return-1}var Cn="closure_lm_"+(1e6*Math.random()|0),Ci={};function Zn(l,f,p,_,N){if(Array.isArray(f)){for(var L=0;L<f.length;L++)Zn(l,f[L],p,_,N);return null}return p=bi(p),l&&l[ue]?l.K(f,p,c(_)?!!_.capture:!!_,N):Hc(l,f,p,!1,_,N)}function Hc(l,f,p,_,N,L){if(!f)throw Error("Invalid event type");var B=c(N)?!!N.capture:!!N,we=Br(l);if(we||(l[Cn]=we=new et(l)),p=we.add(f,p,_,B,L),p.proxy)return p;if(_=Fa(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)M||(N=B),N===void 0&&(N=!1),l.addEventListener(f.toString(),_,N);else if(l.attachEvent)l.attachEvent(Bs(f.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Fa(){function l(p){return f.call(l.src,l.listener,p)}const f=Hs;return l}function ja(l,f,p,_,N){if(Array.isArray(f))for(var L=0;L<f.length;L++)ja(l,f[L],p,_,N);else _=c(_)?!!_.capture:!!_,p=bi(p),l&&l[ue]?(l=l.i,f=String(f).toString(),f in l.g&&(L=l.g[f],p=Pn(L,p,_,N),-1<p&&(ye(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[f],l.h--)))):l&&(l=Br(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Pn(f,p,_,N)),(p=-1<l?f[l]:null)&&$s(p))}function $s(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[ue])hn(f.i,l);else{var p=l.type,_=l.proxy;f.removeEventListener?f.removeEventListener(p,_,l.capture):f.detachEvent?f.detachEvent(Bs(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=Br(f))?(hn(p,l),p.h==0&&(p.src=null,f[Cn]=null)):ye(l)}}}function Bs(l){return l in Ci?Ci[l]:Ci[l]="on"+l}function Hs(l,f){if(l.da)l=!0;else{f=new zt(f,this);var p=l.listener,_=l.ha||l.src;l.fa&&$s(l),l=p.call(_,f)}return l}function Br(l){return l=l[Cn],l instanceof et?l:null}var Ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function bi(l){return typeof l=="function"?l:(l[Ws]||(l[Ws]=function(f){return l.handleEvent(f)}),l[Ws])}function Ve(){W.call(this),this.i=new et(this),this.M=this,this.F=null}E(Ve,W),Ve.prototype[ue]=!0,Ve.prototype.removeEventListener=function(l,f,p,_){ja(this,l,f,p,_)};function Ye(l,f){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=f.type||f,typeof f=="string")f=new me(f,l);else if(f instanceof me)f.target=f.target||l;else{var N=f;f=new me(_,l),A(f,N)}if(N=!0,p)for(var L=p.length-1;0<=L;L--){var B=f.g=p[L];N=Ri(B,_,!0,f)&&N}if(B=f.g=l,N=Ri(B,_,!0,f)&&N,N=Ri(B,_,!1,f)&&N,p)for(L=0;L<p.length;L++)B=f.g=p[L],N=Ri(B,_,!1,f)&&N}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var p=l.g[f],_=0;_<p.length;_++)ye(p[_]);delete l.g[f],l.h--}}this.F=null},Ve.prototype.K=function(l,f,p,_){return this.i.add(String(l),f,!1,p,_)},Ve.prototype.L=function(l,f,p,_){return this.i.add(String(l),f,!0,p,_)};function Ri(l,f,p,_){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,L=0;L<f.length;++L){var B=f[L];if(B&&!B.da&&B.capture==p){var we=B.listener,tt=B.ha||B.src;B.fa&&hn(l.i,B),N=we.call(tt,_)!==!1&&N}}return N&&!_.defaultPrevented}function Ua(l,f,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function xi(l){l.g=Ua(()=>{l.g=null,l.i&&(l.i=!1,xi(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Wc extends W{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:xi(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fn(l){W.call(this),this.h=l,this.g={}}E(fn,W);var za=[];function Nm(l){D(l.g,function(f,p){this.g.hasOwnProperty(p)&&$s(f)},l),l.g={}}fn.prototype.N=function(){fn.aa.N.call(this),Nm(this)},fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qc=a.JSON.stringify,vI=a.JSON.parse,yI=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Gc(){}Gc.prototype.h=null;function Om(l){return l.h||(l.h=l.i())}function Dm(){}var qs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kc(){me.call(this,"d")}E(Kc,me);function Qc(){me.call(this,"c")}E(Qc,me);var Hr={},Lm=null;function $a(){return Lm=Lm||new Ve}Hr.La="serverreachability";function Mm(l){me.call(this,Hr.La,l)}E(Mm,me);function Gs(l){const f=$a();Ye(f,new Mm(f))}Hr.STAT_EVENT="statevent";function Vm(l,f){me.call(this,Hr.STAT_EVENT,l),this.stat=f}E(Vm,me);function _t(l){const f=$a();Ye(f,new Vm(f,l))}Hr.Ma="timingevent";function Fm(l,f){me.call(this,Hr.Ma,l),this.size=f}E(Fm,me);function Ks(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Qs(){this.g=!0}Qs.prototype.xa=function(){this.g=!1};function _I(l,f,p,_,N,L){l.info(function(){if(l.g)if(L)for(var B="",we=L.split("&"),tt=0;tt<we.length;tt++){var ge=we[tt].split("=");if(1<ge.length){var ut=ge[0];ge=ge[1];var ct=ut.split("_");B=2<=ct.length&&ct[1]=="type"?B+(ut+"="+ge+"&"):B+(ut+"=redacted&")}}else B=null;else B=L;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+f+`
`+p+`
`+B})}function wI(l,f,p,_,N,L,B){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+f+`
`+p+`
`+L+" "+B})}function Ni(l,f,p,_){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+TI(l,p)+(_?" "+_:"")})}function EI(l,f){l.info(function(){return"TIMEOUT: "+f})}Qs.prototype.info=function(){};function TI(l,f){if(!l.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return qc(p)}catch{return f}}var Ba={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yc;function Ha(){}E(Ha,Gc),Ha.prototype.g=function(){return new XMLHttpRequest},Ha.prototype.i=function(){return{}},Yc=new Ha;function er(l,f,p,_){this.j=l,this.i=f,this.l=p,this.R=_||1,this.U=new fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Um}function Um(){this.i=null,this.g="",this.h=!1}var zm={},Xc={};function Jc(l,f,p){l.L=1,l.v=Ka(bn(f)),l.m=p,l.P=!0,$m(l,null)}function $m(l,f){l.F=Date.now(),Wa(l),l.A=bn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),ng(p.i,"t",_),l.C=0,p=l.j.J,l.h=new Um,l.g=wg(l.j,p?f:null,!l.m),0<l.O&&(l.M=new Wc(m(l.Y,l,l.g),l.O)),f=l.U,p=l.g,_=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(za[0]=N.toString()),N=za);for(var L=0;L<N.length;L++){var B=Zn(p,N[L],_||f.handleEvent,!1,f.h||f);if(!B)break;f.g[B.key]=B}f=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Gs(),_I(l.i,l.u,l.A,l.l,l.R,l.m)}er.prototype.ca=function(l){l=l.target;const f=this.M;f&&Rn(l)==3?f.j():this.Y(l)},er.prototype.Y=function(l){try{if(l==this.g)e:{const ct=Rn(this.g);var f=this.g.Ba();const Li=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||ug(this.g)))){this.J||ct!=4||f==7||(f==8||0>=Li?Gs(3):Gs(2)),Zc(this);var p=this.g.Z();this.X=p;t:if(Bm(this)){var _=ug(this.g);l="";var N=_.length,L=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wr(this),Ys(this);var B="";break t}this.h.i=new a.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,l+=this.h.i.decode(_[f],{stream:!(L&&f==N-1)});_.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=p==200,wI(this.i,this.u,this.A,this.l,this.R,ct,p),this.o){if(this.T&&!this.K){t:{if(this.g){var we,tt=this.g;if((we=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(we)){var ge=we;break t}}ge=null}if(p=ge)Ni(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eh(this,p);else{this.o=!1,this.s=3,_t(12),Wr(this),Ys(this);break e}}if(this.P){p=!0;let Yt;for(;!this.J&&this.C<B.length;)if(Yt=II(this,B),Yt==Xc){ct==4&&(this.s=4,_t(14),p=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==zm){this.s=4,_t(15),Ni(this.i,this.l,B,"[Invalid Chunk]"),p=!1;break}else Ni(this.i,this.l,Yt,null),eh(this,Yt);if(Bm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||B.length!=0||this.h.h||(this.s=1,_t(16),p=!1),this.o=this.o&&p,!p)Ni(this.i,this.l,B,"[Invalid Chunked Response]"),Wr(this),Ys(this);else if(0<B.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),oh(ut),ut.M=!0,_t(11))}}else Ni(this.i,this.l,B,null),eh(this,B);ct==4&&Wr(this),this.o&&!this.J&&(ct==4?gg(this.j,this):(this.o=!1,Wa(this)))}else UI(this.g),p==400&&0<B.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Wr(this),Ys(this)}}}catch{}finally{}};function Bm(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function II(l,f){var p=l.C,_=f.indexOf(`
`,p);return _==-1?Xc:(p=Number(f.substring(p,_)),isNaN(p)?zm:(_+=1,_+p>f.length?Xc:(f=f.slice(_,_+p),l.C=_+p,f)))}er.prototype.cancel=function(){this.J=!0,Wr(this)};function Wa(l){l.S=Date.now()+l.I,Hm(l,l.I)}function Hm(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ks(m(l.ba,l),f)}function Zc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}er.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(EI(this.i,this.A),this.L!=2&&(Gs(),_t(17)),Wr(this),this.s=2,Ys(this)):Hm(this,this.S-l)};function Ys(l){l.j.G==0||l.J||gg(l.j,l)}function Wr(l){Zc(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Nm(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function eh(l,f){try{var p=l.j;if(p.G!=0&&(p.g==l||th(p.h,l))){if(!l.K&&th(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Za(p),Xa(p);else break e;sh(p),_t(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ks(m(p.Za,p),6e3));if(1>=Gm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Gr(p,11)}else if((l.K||p.g==l)&&Za(p),!y(f))for(N=p.Da.g.parse(f),f=0;f<N.length;f++){let ge=N[f];if(p.T=ge[0],ge=ge[1],p.G==2)if(ge[0]=="c"){p.K=ge[1],p.ia=ge[2];const ut=ge[3];ut!=null&&(p.la=ut,p.j.info("VER="+p.la));const ct=ge[4];ct!=null&&(p.Aa=ct,p.j.info("SVER="+p.Aa));const Li=ge[5];Li!=null&&typeof Li=="number"&&0<Li&&(_=1.5*Li,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Yt=l.g;if(Yt){const tl=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tl){var L=_.h;L.g||tl.indexOf("spdy")==-1&&tl.indexOf("quic")==-1&&tl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(nh(L,L.h),L.h=null))}if(_.D){const ah=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;ah&&(_.ya=ah,Ie(_.I,_.D,ah))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var B=l;if(_.qa=_g(_,_.J?_.ia:null,_.W),B.K){Km(_.h,B);var we=B,tt=_.L;tt&&(we.I=tt),we.B&&(Zc(we),Wa(we)),_.g=B}else pg(_);0<p.i.length&&Ja(p)}else ge[0]!="stop"&&ge[0]!="close"||Gr(p,7);else p.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?Gr(p,7):ih(p):ge[0]!="noop"&&p.l&&p.l.ta(ge),p.v=0)}}Gs(4)}catch{}}var SI=class{constructor(l,f){this.g=l,this.map=f}};function Wm(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qm(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Gm(l){return l.h?1:l.g?l.g.size:0}function th(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function nh(l,f){l.g?l.g.add(f):l.h=f}function Km(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Wm.prototype.cancel=function(){if(this.i=Qm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Qm(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const p of l.g.values())f=f.concat(p.D);return f}return k(l.i)}function AI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],p=l.length,_=0;_<p;_++)f.push(l[_]);return f}f=[],p=0;for(_ in l)f[p++]=l[_];return f}function kI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var p=0;p<l;p++)f.push(p);return f}f=[],p=0;for(const _ in l)f[p++]=_;return f}}}function Ym(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var p=kI(l),_=AI(l),N=_.length,L=0;L<N;L++)f.call(void 0,_[L],p&&p[L],l)}var Xm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PI(l,f){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),N=null;if(0<=_){var L=l[p].substring(0,_);N=l[p].substring(_+1)}else L=l[p];f(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function qr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof qr){this.h=l.h,qa(this,l.j),this.o=l.o,this.g=l.g,Ga(this,l.s),this.l=l.l;var f=l.i,p=new Zs;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),Jm(this,p),this.m=l.m}else l&&(f=String(l).match(Xm))?(this.h=!1,qa(this,f[1]||"",!0),this.o=Xs(f[2]||""),this.g=Xs(f[3]||"",!0),Ga(this,f[4]),this.l=Xs(f[5]||"",!0),Jm(this,f[6]||"",!0),this.m=Xs(f[7]||"")):(this.h=!1,this.i=new Zs(null,this.h))}qr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Js(f,Zm,!0),":");var p=this.g;return(p||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Js(f,Zm,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Js(p,p.charAt(0)=="/"?RI:bI,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Js(p,NI)),l.join("")};function bn(l){return new qr(l)}function qa(l,f,p){l.j=p?Xs(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Ga(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Jm(l,f,p){f instanceof Zs?(l.i=f,OI(l.i,l.h)):(p||(f=Js(f,xI)),l.i=new Zs(f,l.h))}function Ie(l,f,p){l.i.set(f,p)}function Ka(l){return Ie(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Xs(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Js(l,f,p){return typeof l=="string"?(l=encodeURI(l).replace(f,CI),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function CI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Zm=/[#\/\?@]/g,bI=/[#\?:]/g,RI=/[#\?]/g,xI=/[#\?@]/g,NI=/#/g;function Zs(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function tr(l){l.g||(l.g=new Map,l.h=0,l.i&&PI(l.i,function(f,p){l.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Zs.prototype,t.add=function(l,f){tr(this),this.i=null,l=Oi(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(f),this.h+=1,this};function eg(l,f){tr(l),f=Oi(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function tg(l,f){return tr(l),f=Oi(l,f),l.g.has(f)}t.forEach=function(l,f){tr(this),this.g.forEach(function(p,_){p.forEach(function(N){l.call(f,N,_,this)},this)},this)},t.na=function(){tr(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const N=l[_];for(let L=0;L<N.length;L++)p.push(f[_])}return p},t.V=function(l){tr(this);let f=[];if(typeof l=="string")tg(this,l)&&(f=f.concat(this.g.get(Oi(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)f=f.concat(l[p])}return f},t.set=function(l,f){return tr(this),this.i=null,l=Oi(this,l),tg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function ng(l,f,p){eg(l,f),0<p.length&&(l.i=null,l.g.set(Oi(l,f),k(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const L=encodeURIComponent(String(_)),B=this.V(_);for(_=0;_<B.length;_++){var N=L;B[_]!==""&&(N+="="+encodeURIComponent(String(B[_]))),l.push(N)}}return this.i=l.join("&")};function Oi(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function OI(l,f){f&&!l.j&&(tr(l),l.i=null,l.g.forEach(function(p,_){var N=_.toLowerCase();_!=N&&(eg(this,_),ng(this,N,p))},l)),l.j=f}function DI(l,f){const p=new Qs;if(a.Image){const _=new Image;_.onload=g(nr,p,"TestLoadImage: loaded",!0,f,_),_.onerror=g(nr,p,"TestLoadImage: error",!1,f,_),_.onabort=g(nr,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=g(nr,p,"TestLoadImage: timeout",!1,f,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else f(!1)}function LI(l,f){const p=new Qs,_=new AbortController,N=setTimeout(()=>{_.abort(),nr(p,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:_.signal}).then(L=>{clearTimeout(N),L.ok?nr(p,"TestPingServer: ok",!0,f):nr(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),nr(p,"TestPingServer: error",!1,f)})}function nr(l,f,p,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(p)}catch{}}function MI(){this.g=new yI}function VI(l,f,p){const _=p||"";try{Ym(l,function(N,L){let B=N;c(N)&&(B=qc(N)),f.push(_+L+"="+encodeURIComponent(B))})}catch(N){throw f.push(_+"type="+encodeURIComponent("_badmap")),N}}function eo(l){this.l=l.Ub||null,this.j=l.eb||!1}E(eo,Gc),eo.prototype.g=function(){return new Qa(this.l,this.j)},eo.prototype.i=function(l){return function(){return l}}({});function Qa(l,f){Ve.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Qa,Ve),t=Qa.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,no(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,to(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,no(this)),this.g&&(this.readyState=3,no(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function rg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?to(this):no(this),this.readyState==3&&rg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,to(this))},t.Qa=function(l){this.g&&(this.response=l,to(this))},t.ga=function(){this.g&&to(this)};function to(l){l.readyState=4,l.l=null,l.j=null,l.v=null,no(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=f.next();return l.join(`\r
`)};function no(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ig(l){let f="";return D(l,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function rh(l,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=ig(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ie(l,f,p))}function De(l){Ve.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(De,Ve);var FI=/^https?$/i,jI=["POST","PUT"];t=De.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yc.g(),this.v=this.o?Om(this.o):Om(Yc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(L){sg(this,L);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)p.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())p.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(jI,f,void 0))||_||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of p)this.g.setRequestHeader(L,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lg(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){sg(this,L)}};function sg(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,og(l),Ya(l)}function og(l){l.A||(l.A=!0,Ye(l,"complete"),Ye(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ye(this,"complete"),Ye(this,"abort"),Ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ya(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ag(this):this.bb())},t.bb=function(){ag(this)};function ag(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Rn(l)!=4||l.Z()!=2)){if(l.u&&Rn(l)==4)Ua(l.Ea,0,l);else if(Ye(l,"readystatechange"),Rn(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=B===0){var N=String(l.D).match(Xm)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),_=!FI.test(N?N.toLowerCase():"")}p=_}if(p)Ye(l,"complete"),Ye(l,"success");else{l.m=6;try{var L=2<Rn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",og(l)}}finally{Ya(l)}}}}function Ya(l,f){if(l.g){lg(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||Ye(l,"ready");try{p.onreadystatechange=_}catch{}}}function lg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Rn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),vI(f)}};function ug(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function UI(l){const f={};l=(l.g&&2<=Rn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(y(l[_]))continue;var p=C(l[_]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=f[N]||[];f[N]=L,L.push(p)}T(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ro(l,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||f}function cg(l){this.Aa=0,this.i=[],this.j=new Qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ro("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ro("baseRetryDelayMs",5e3,l),this.cb=ro("retryDelaySeedMs",1e4,l),this.Wa=ro("forwardChannelMaxRetries",2,l),this.wa=ro("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Wm(l&&l.concurrentRequestLimit),this.Da=new MI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=cg.prototype,t.la=8,t.G=1,t.connect=function(l,f,p,_){_t(0),this.W=l,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=_g(this,null,this.W),Ja(this)};function ih(l){if(hg(l),l.G==3){var f=l.U++,p=bn(l.I);if(Ie(p,"SID",l.K),Ie(p,"RID",f),Ie(p,"TYPE","terminate"),io(l,p),f=new er(l,l.j,f),f.L=2,f.v=Ka(bn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=f.v,p=!0),p||(f.g=wg(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Wa(f)}yg(l)}function Xa(l){l.g&&(oh(l),l.g.cancel(),l.g=null)}function hg(l){Xa(l),l.u&&(a.clearTimeout(l.u),l.u=null),Za(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ja(l){if(!qm(l.h)&&!l.s){l.s=!0;var f=l.Ga;$e||V(),H||($e(),H=!0),$.add(f,l),l.B=0}}function zI(l,f){return Gm(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ks(m(l.Ga,l,f),vg(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new er(this,this.j,l);let L=this.o;if(this.S&&(L?(L=v(L),A(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=dg(this,N,f),p=bn(this.I),Ie(p,"RID",l),Ie(p,"CVER",22),this.D&&Ie(p,"X-HTTP-Session-Id",this.D),io(this,p),L&&(this.O?f="headers="+encodeURIComponent(String(ig(L)))+"&"+f:this.m&&rh(p,this.m,L)),nh(this.h,N),this.Ua&&Ie(p,"TYPE","init"),this.P?(Ie(p,"$req",f),Ie(p,"SID","null"),N.T=!0,Jc(N,p,null)):Jc(N,p,f),this.G=2}}else this.G==3&&(l?fg(this,l):this.i.length==0||qm(this.h)||fg(this))};function fg(l,f){var p;f?p=f.l:p=l.U++;const _=bn(l.I);Ie(_,"SID",l.K),Ie(_,"RID",p),Ie(_,"AID",l.T),io(l,_),l.m&&l.o&&rh(_,l.m,l.o),p=new er(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),f&&(l.i=f.D.concat(l.i)),f=dg(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),nh(l.h,p),Jc(p,_,f)}function io(l,f){l.H&&D(l.H,function(p,_){Ie(f,_,p)}),l.l&&Ym({},function(p,_){Ie(f,_,p)})}function dg(l,f,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let L=-1;for(;;){const B=["count="+p];L==-1?0<p?(L=N[0].g,B.push("ofs="+L)):L=0:B.push("ofs="+L);let we=!0;for(let tt=0;tt<p;tt++){let ge=N[tt].g;const ut=N[tt].map;if(ge-=L,0>ge)L=Math.max(0,N[tt].g-100),we=!1;else try{VI(ut,B,"req"+ge+"_")}catch{_&&_(ut)}}if(we){_=B.join("&");break e}}}return l=l.i.splice(0,p),f.D=l,_}function pg(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;$e||V(),H||($e(),H=!0),$.add(f,l),l.v=0}}function sh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ks(m(l.Fa,l),vg(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,mg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ks(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Xa(this),mg(this))};function oh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function mg(l){l.g=new er(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=bn(l.qa);Ie(f,"RID","rpc"),Ie(f,"SID",l.K),Ie(f,"AID",l.T),Ie(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ie(f,"TO",l.ja),Ie(f,"TYPE","xmlhttp"),io(l,f),l.m&&l.o&&rh(f,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Ka(bn(f)),p.m=null,p.P=!0,$m(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Xa(this),sh(this),_t(19))};function Za(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function gg(l,f){var p=null;if(l.g==f){Za(l),oh(l),l.g=null;var _=2}else if(th(l.h,f))p=f.D,Km(l.h,f),_=1;else return;if(l.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var N=l.B;_=$a(),Ye(_,new Fm(_,p)),Ja(l)}else pg(l);else if(N=f.s,N==3||N==0&&0<f.X||!(_==1&&zI(l,f)||_==2&&sh(l)))switch(p&&0<p.length&&(f=l.h,f.i=f.i.concat(p)),N){case 1:Gr(l,5);break;case 4:Gr(l,10);break;case 3:Gr(l,6);break;default:Gr(l,2)}}}function vg(l,f){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*f}function Gr(l,f){if(l.j.info("Error code "+f),f==2){var p=m(l.fb,l),_=l.Xa;const N=!_;_=new qr(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||qa(_,"https"),Ka(_),N?DI(_.toString(),p):LI(_.toString(),p)}else _t(2);l.G=0,l.l&&l.l.sa(f),yg(l),hg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function yg(l){if(l.G=0,l.ka=[],l.l){const f=Qm(l.h);(f.length!=0||l.i.length!=0)&&(b(l.ka,f),b(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function _g(l,f,p){var _=p instanceof qr?bn(p):new qr(p);if(_.g!="")f&&(_.g=f+"."+_.g),Ga(_,_.s);else{var N=a.location;_=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var L=new qr(null);_&&qa(L,_),f&&(L.g=f),N&&Ga(L,N),p&&(L.l=p),_=L}return p=l.D,f=l.ya,p&&f&&Ie(_,p,f),Ie(_,"VER",l.la),io(l,_),_}function wg(l,f,p){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new De(new eo({eb:p})):new De(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eg(){}t=Eg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function el(){}el.prototype.g=function(l,f){return new Nt(l,f)};function Nt(l,f){Ve.call(this),this.g=new cg(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!y(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!y(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Di(this)}E(Nt,Ve),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){ih(this.g)},Nt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=qc(l),l=p);f.i.push(new SI(f.Ya++,l)),f.G==3&&Ja(f)},Nt.prototype.N=function(){this.g.l=null,delete this.j,ih(this.g),delete this.g,Nt.aa.N.call(this)};function Tg(l){Kc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const p in f){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}E(Tg,Kc);function Ig(){Qc.call(this),this.status=1}E(Ig,Qc);function Di(l){this.g=l}E(Di,Eg),Di.prototype.ua=function(){Ye(this.g,"a")},Di.prototype.ta=function(l){Ye(this.g,new Tg(l))},Di.prototype.sa=function(l){Ye(this.g,new Ig)},Di.prototype.ra=function(){Ye(this.g,"b")},el.prototype.createWebChannel=el.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,pE=function(){return new el},dE=function(){return $a()},fE=Hr,dd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ba.NO_ERROR=0,Ba.TIMEOUT=8,Ba.HTTP_ERROR=6,Ql=Ba,jm.COMPLETE="complete",hE=jm,Dm.EventType=qs,qs.OPEN="a",qs.CLOSE="b",qs.ERROR="c",qs.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,To=Dm,cE=eo,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,uE=De}).apply(typeof bl<"u"?bl:typeof self<"u"?self:typeof window<"u"?window:{});const ky="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Ec("@firebase/firestore");function po(){return vi.logLevel}function Q(t,...e){if(vi.logLevel<=he.DEBUG){const n=e.map(Qp);vi.debug(`Firestore (${Ms}): ${t}`,...n)}}function Kn(t,...e){if(vi.logLevel<=he.ERROR){const n=e.map(Qp);vi.error(`Firestore (${Ms}): ${t}`,...n)}}function Is(t,...e){if(vi.logLevel<=he.WARN){const n=e.map(Qp);vi.warn(`Firestore (${Ms}): ${t}`,...n)}}function Qp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw Kn(e),new Error(e)}function Te(t,e){t||ne()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class T2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class I2{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new mE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new pt(e)}}class S2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class A2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new S2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new k2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=C2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new qe(0,0))}static max(){return new re(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends fa{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const b2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends fa{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return b2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Z(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Z(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Z(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(be.fromString(e))}static fromName(e){return new ee(be.fromString(e).popFirst(5))}static empty(){return new ee(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new be(e.slice()))}}function R2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Mr(i,ee.empty(),e)}function x2(t){return new Mr(t.readTime,t.key,-1)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(re.min(),ee.empty(),-1)}static max(){return new Mr(re.max(),ee.empty(),-1)}}function N2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class D2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==O2)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function L2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ra(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Yp.oe=-1;function Sc(t){return t==null}function Vu(t){return t===0&&1/t==-1/0}function M2(t){return typeof t=="number"&&Number.isInteger(t)&&!Vu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rl(this.root,e,this.comparator,!0)}}class Rl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cy(this.data.getIterator())}getIteratorFrom(e){return new Cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class Cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new nn([])}unionWith(e){let n=new ot(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yE("Invalid base64 string: "+s):s}}(e);return new yt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const V2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(Te(!!t),typeof t=="string"){let e=0;const n=V2.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jp(t){const e=t.mapValue.fields.__previous_value__;return Xp(e)?Jp(e):e}function da(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class pa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xp(t)?4:j2(t)?9007199254740991:10:ne()}function An(t,e){if(t===e)return!0;const n=_i(t);if(n!==_i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return da(t).isEqual(da(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vr(i.timestampValue),a=Vr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return yi(i.bytesValue).isEqual(yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),a=Ue(s.doubleValue);return o===a?Vu(o)===Vu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Py(o)!==Py(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!An(o[u],a[u])))return!1;return!0}(t,e);default:return ne()}}function ma(t,e){return(t.values||[]).find(n=>An(n,e))!==void 0}function As(t,e){if(t===e)return 0;const n=_i(t),r=_i(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ue(s.integerValue||s.doubleValue),u=Ue(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return by(t.timestampValue,e.timestampValue);case 4:return by(da(t),da(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(s,o){const a=yi(s),u=yi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ve(a[c],u[c]);if(h!==0)return h}return ve(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ve(Ue(s.latitude),Ue(o.latitude));return a!==0?a:ve(Ue(s.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const h=As(a[c],u[c]);if(h)return h}return ve(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===xl.mapValue&&o===xl.mapValue)return 0;if(s===xl.mapValue)return 1;if(o===xl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let d=0;d<u.length&&d<h.length;++d){const m=ve(u[d],h[d]);if(m!==0)return m;const g=As(a[u[d]],c[h[d]]);if(g!==0)return g}return ve(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ne()}}function by(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Vr(t),r=Vr(e),i=ve(n.seconds,r.seconds);return i!==0?i:ve(n.nanos,r.nanos)}function ks(t){return pd(t)}function pd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=pd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pd(n.fields[o])}`;return i+"}"}(t.mapValue):ne()}function md(t){return!!t&&"integerValue"in t}function Zp(t){return!!t&&"arrayValue"in t}function Ry(t){return!!t&&"nullValue"in t}function xy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yl(t){return!!t&&"mapValue"in t}function Vo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function j2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vo(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Vo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Vs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ht(Vo(this.value))}}function _E(t){const e=[];return Vs(t.fields,(n,r)=>{const i=new it([n]);if(Yl(r)){const s=_E(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,re.min(),re.min(),re.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,re.min(),re.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,re.min(),re.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n){this.position=e,this.inclusive=n}}function Ny(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=As(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n="asc"){this.field=e,this.dir=n}}function U2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{}class He extends wE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $2(e,n,r):n==="array-contains"?new W2(e,r):n==="in"?new q2(e,r):n==="not-in"?new G2(e,r):n==="array-contains-any"?new K2(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new B2(e,r):new H2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(As(n,this.value)):n!==null&&_i(this.value)===_i(n)&&this.matchesComparison(As(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kn extends wE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new kn(e,n)}matches(e){return EE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function EE(t){return t.op==="and"}function TE(t){return z2(t)&&EE(t)}function z2(t){for(const e of t.filters)if(e instanceof kn)return!1;return!0}function gd(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(TE(t))return t.filters.map(e=>gd(e)).join(",");{const e=t.filters.map(n=>gd(n)).join(",");return`${t.op}(${e})`}}function IE(t,e){return t instanceof He?function(r,i){return i instanceof He&&r.op===i.op&&r.field.isEqual(i.field)&&An(r.value,i.value)}(t,e):t instanceof kn?function(r,i){return i instanceof kn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&IE(o,i.filters[a]),!0):!1}(t,e):void ne()}function SE(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${ks(n.value)}`}(t):t instanceof kn?function(n){return n.op.toString()+" {"+n.getFilters().map(SE).join(" ,")+"}"}(t):"Filter"}class $2 extends He{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class B2 extends He{constructor(e,n){super(e,"in",n),this.keys=AE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class H2 extends He{constructor(e,n){super(e,"not-in",n),this.keys=AE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class W2 extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zp(n)&&ma(n.arrayValue,this.value)}}class q2 extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ma(this.value.arrayValue,n)}}class G2 extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ma(this.value.arrayValue,n)}}class K2 extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ma(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Dy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Q2(t,e,n,r,i,s,o)}function em(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ks(r)).join(",")),e.ue=n}return e.ue}function tm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!U2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!IE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Oy(t.startAt,e.startAt)&&Oy(t.endAt,e.endAt)}function vd(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Y2(t,e,n,r,i,s,o,a){return new Ac(t,e,n,r,i,s,o,a)}function kE(t){return new Ac(t)}function Ly(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function X2(t){return t.collectionGroup!==null}function Fo(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ju(s,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new ju(it.keyField(),r))}return e.ce}function wn(t){const e=ie(t);return e.le||(e.le=J2(e,Fo(t))),e.le}function J2(t,e){if(t.limitType==="F")return Dy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ju(i.field,s)});const n=t.endAt?new Fu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fu(t.startAt.position,t.startAt.inclusive):null;return Dy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yd(t,e,n){return new Ac(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kc(t,e){return tm(wn(t),wn(e))&&t.limitType===e.limitType}function PE(t){return`${em(wn(t))}|lt:${t.limitType}`}function Fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>SE(i)).join(", ")}]`),Sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ks(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ks(i)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function Pc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ee.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Fo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Ny(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Fo(r),i)||r.endAt&&!function(o,a,u){const c=Ny(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Fo(r),i))}(t,e)}function Z2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CE(t){return(e,n)=>{let r=!1;for(const i of Fo(t)){const s=ex(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ex(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?As(u,c):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return vE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=new Oe(ee.comparator);function Qn(){return tx}const bE=new Oe(ee.comparator);function Io(...t){let e=bE;for(const n of t)e=e.insert(n.key,n);return e}function RE(t){let e=bE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ri(){return jo()}function xE(){return jo()}function jo(){return new Fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const nx=new Oe(ee.comparator),rx=new ot(ee.comparator);function ce(...t){let e=rx;for(const n of t)e=e.add(n);return e}const ix=new ot(ve);function sx(){return ix}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vu(e)?"-0":e}}function OE(t){return{integerValue:""+t}}function ox(t,e){return M2(e)?OE(e):NE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this._=void 0}}function ax(t,e,n){return t instanceof Uu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xp(s)&&(s=Jp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ga?LE(t,e):t instanceof va?ME(t,e):function(i,s){const o=DE(i,s),a=My(o)+My(i.Pe);return md(o)&&md(i.Pe)?OE(a):NE(i.serializer,a)}(t,e)}function lx(t,e,n){return t instanceof ga?LE(t,e):t instanceof va?ME(t,e):n}function DE(t,e){return t instanceof zu?function(r){return md(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Uu extends Cc{}class ga extends Cc{constructor(e){super(),this.elements=e}}function LE(t,e){const n=VE(e);for(const r of t.elements)n.some(i=>An(i,r))||n.push(r);return{arrayValue:{values:n}}}class va extends Cc{constructor(e){super(),this.elements=e}}function ME(t,e){let n=VE(e);for(const r of t.elements)n=n.filter(i=>!An(i,r));return{arrayValue:{values:n}}}class zu extends Cc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function My(t){return Ue(t.integerValue||t.doubleValue)}function VE(t){return Zp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ux(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ga&&i instanceof ga||r instanceof va&&i instanceof va?Ss(r.elements,i.elements,An):r instanceof zu&&i instanceof zu?An(r.Pe,i.Pe):r instanceof Uu&&i instanceof Uu}(t.transform,e.transform)}class cx{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bc{}function FE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new UE(t.key,Un.none()):new xa(t.key,t.data,Un.none());{const n=t.data,r=Ht.empty();let i=new ot(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ai(t.key,r,new nn(i.toArray()),Un.none())}}function hx(t,e,n){t instanceof xa?function(i,s,o){const a=i.value.clone(),u=Fy(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ai?function(i,s,o){if(!Xl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Fy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(jE(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Uo(t,e,n,r){return t instanceof xa?function(s,o,a,u){if(!Xl(s.precondition,o))return a;const c=s.value.clone(),h=jy(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ai?function(s,o,a,u){if(!Xl(s.precondition,o))return a;const c=jy(s.fieldTransforms,u,o),h=o.data;return h.setAll(jE(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Xl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function fx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DE(r.transform,i||null);s!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,s))}return n||null}function Vy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ss(r,i,(s,o)=>ux(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xa extends bc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ai extends bc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fy(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,lx(o,a,n[i]))}return r}function jy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ax(s,o,e))}return r}class UE extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dx extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=FE(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,(n,r)=>Vy(n,r))&&Ss(this.baseMutations,e.baseMutations,(n,r)=>Vy(n,r))}}class nm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return nx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new nm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,de;function vx(t){switch(t){default:return ne();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function zE(t){if(t===void 0)return Kn("GRPC error has no .code"),j.UNKNOWN;switch(t){case je.OK:return j.OK;case je.CANCELLED:return j.CANCELLED;case je.UNKNOWN:return j.UNKNOWN;case je.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case je.INTERNAL:return j.INTERNAL;case je.UNAVAILABLE:return j.UNAVAILABLE;case je.UNAUTHENTICATED:return j.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case je.NOT_FOUND:return j.NOT_FOUND;case je.ALREADY_EXISTS:return j.ALREADY_EXISTS;case je.PERMISSION_DENIED:return j.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case je.ABORTED:return j.ABORTED;case je.OUT_OF_RANGE:return j.OUT_OF_RANGE;case je.UNIMPLEMENTED:return j.UNIMPLEMENTED;case je.DATA_LOSS:return j.DATA_LOSS;default:return ne()}}(de=je||(je={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=new oi([4294967295,4294967295],0);function Uy(t){const e=yx().encode(t),n=new lE;return n.update(e),new Uint8Array(n.digest())}function zy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new oi([n,r],0),new oi([i,s],0)]}class rm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new So(`Invalid padding: ${n}`);if(r<0)throw new So(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new So(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=oi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(oi.fromNumber(r)));return i.compare(_x)===1&&(i=new oi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Uy(e),[r,i]=zy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Uy(e),[r,i]=zy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rc(re.min(),i,new Oe(ve),Qn(),ce())}}class Na{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Na(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class $E{constructor(e,n){this.targetId=e,this.me=n}}class BE{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $y{constructor(){this.fe=0,this.ge=Hy(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ce(),n=ce(),r=ce();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new Na(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Hy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wx{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qn(),this.qe=By(),this.Qe=new Oe(ve)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(vd(s))if(r===0){const o=new ee(s.path);this.Ue(n,o,gt.newNoDocument(o,re.min()))}else Te(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=yi(r).toUint8Array()}catch(u){if(u instanceof yE)return Is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new rm(o,i,s)}catch(u){return Is(u instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&vd(a.target)){const u=new ee(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,gt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ce();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Rc(e,n,this.Qe,this.ke,r);return this.ke=Qn(),this.qe=By(),this.Qe=new Oe(ve),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new $y,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(ve),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $y),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function By(){return new Oe(ee.comparator)}function Hy(){return new Oe(ee.comparator)}const Ex={asc:"ASCENDING",desc:"DESCENDING"},Tx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ix={and:"AND",or:"OR"};class Sx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _d(t,e){return t.useProto3Json||Sc(e)?e:{value:e}}function $u(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ax(t,e){return $u(t,e.toTimestamp())}function En(t){return Te(!!t),re.fromTimestamp(function(n){const r=Vr(n);return new qe(r.seconds,r.nanos)}(t))}function im(t,e){return wd(t,e).canonicalString()}function wd(t,e){const n=function(i){return new be(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function WE(t){const e=be.fromString(t);return Te(YE(e)),e}function Ed(t,e){return im(t.databaseId,e.path)}function Gh(t,e){const n=WE(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(GE(n))}function qE(t,e){return im(t.databaseId,e)}function kx(t){const e=WE(t);return e.length===4?be.emptyPath():GE(e)}function Td(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function GE(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wy(t,e,n){return{name:Ed(t,e),fields:n.value.mapValue.fields}}function Px(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Te(h===void 0||typeof h=="string"),yt.fromBase64String(h||"")):(Te(h===void 0||h instanceof Buffer||h instanceof Uint8Array),yt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:zE(c.code);return new Z(h,c.message||"")}(o);n=new BE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gh(t,r.document.name),s=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):re.min(),a=new Ht({mapValue:{fields:r.document.fields}}),u=gt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Jl(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gh(t,r.document),s=r.readTime?En(r.readTime):re.min(),o=gt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gh(t,r.document),s=r.removedTargetIds||[];n=new Jl([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gx(i,s),a=r.targetId;n=new $E(a,o)}}return n}function Cx(t,e){let n;if(e instanceof xa)n={update:Wy(t,e.key,e.value)};else if(e instanceof UE)n={delete:Ed(t,e.key)};else if(e instanceof Ai)n={update:Wy(t,e.key,e.data),updateMask:Vx(e.fieldMask)};else{if(!(e instanceof dx))return ne();n={verify:Ed(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Uu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ga)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof va)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof zu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ax(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne()}(t,e.precondition)),n}function bx(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?En(i.updateTime):En(s);return o.isEqual(re.min())&&(o=En(s)),new cx(o,i.transformResults||[])}(n,e))):[]}function Rx(t,e){return{documents:[qE(t,e.path)]}}function xx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qE(t,i);const s=function(c){if(c.length!==0)return QE(kn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:ji(m.field),direction:Dx(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=_d(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Nx(t){let e=kx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const m=KE(d);return m instanceof kn&&TE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(E){return new ju(Ui(E.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(d){let m;return m=typeof d=="object"?d.value:d,Sc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(d){const m=!!d.before,g=d.values||[];return new Fu(g,m)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const m=!d.before,g=d.values||[];return new Fu(g,m)}(n.endAt)),Y2(e,i,o,s,a,"F",u,c)}function Ox(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function KE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ui(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return He.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ui(n.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kn.create(n.compositeFilter.filters.map(r=>KE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function Dx(t){return Ex[t]}function Lx(t){return Tx[t]}function Mx(t){return Ix[t]}function ji(t){return{fieldPath:t.canonicalString()}}function Ui(t){return it.fromServerFormat(t.fieldPath)}function QE(t){return t instanceof He?function(n){if(n.op==="=="){if(xy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NAN"}};if(Ry(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NAN"}};if(Ry(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(n.field),op:Lx(n.op),value:n.value}}}(t):t instanceof kn?function(n){const r=n.getFilters().map(i=>QE(i));return r.length===1?r[0]:{compositeFilter:{op:Mx(n.op),filters:r}}}(t):ne()}function Vx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=re.min(),o=re.min(),a=yt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.ct=e}}function jx(t){const e=Nx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(){this._n=new zx}addToCollectionParentIndex(e,n){return this._n.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Mr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class zx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ot(be.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ot(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ps(0)}static Ln(){return new Ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this.changes=new Fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Uo(r.mutation,i,nn.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=ri();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Io();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ri();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Qn();const o=jo(),a=function(){return jo()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ai)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Uo(h.mutation,c,h.mutation.getFieldMask(),qe.now())):o.set(c.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var d;return a.set(c,new Bx(h,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=jo();let i=new Oe((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||nn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const d=(i.get(a.batchId)||ce()).add(u);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,d=xE();h.forEach(m=>{if(!s.has(m)){const g=FE(n.get(m),r.get(m));g!==null&&d.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):X2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(ri());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ce())).next(h=>({batchId:a,changes:RE(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let i=Io();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Io();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(d,m){return new Ac(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,gt.newInvalidDocument(h)))});let a=Io();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Uo(h.mutation,c,nn.empty(),qe.now()),Pc(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return F.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:En(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:jx(i.bundledQuery),readTime:En(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.overlays=new Oe(ee.comparator),this.hr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ri();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ri(),s=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ri(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ri(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mx(n,r));let s=this.hr.get(n);s===void 0&&(s=ce(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.Pr=new ot(Xe.Ir),this.Tr=new ot(Xe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Xe(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ee(new be([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ee(new be([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=ce();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ee.comparator(e.key,n.key)||ve(e.pr,n.pr)}static Er(e,n){return ve(e.pr,n.pr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ot(Xe.Ir)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new px(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(ve);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ee.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new ee(s),0);let a=new ot(ve);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),F.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Xe(n,0),i=this.wr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.vr=e,this.docs=function(){return new Oe(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Qn();const o=n.path,a=new ee(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||N2(x2(h),r)<=0||(i.has(h.key)||Pc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne()}Fr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Qx(this)}getSize(e){return F.resolve(this.size)}}class Qx extends $x{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.persistence=e,this.Mr=new Fs(n=>em(n),tm),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Or=0,this.Nr=new sm,this.targetCount=0,this.Lr=Ps.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),F.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.qn(n),F.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,n){this.Br={},this.overlays={},this.kr=new Yp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Yx(this),this.indexManager=new Ux,this.remoteDocumentCache=function(i){return new Kx(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Fx(n),this.$r=new Wx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Gx(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new Jx(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Jx extends D2{constructor(e){super(),this.currentSequenceNumber=e}}class om{constructor(e){this.persistence=e,this.zr=new sm,this.jr=null}static Hr(e){return new om(e)}get Jr(){if(this.jr)return this.jr;throw ne()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),F.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const i=ee.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return F.or([()=>F.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new am(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return MC()?8:L2(lt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Zx;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(po()<=he.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(po()<=he.DEBUG&&Q("QueryEngine","Query:",Fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(po()<=he.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):F.resolve())}ji(e,n){if(Ly(n))return F.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yd(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,yd(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return Ly(n)||i.isEqual(re.min())?F.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?F.resolve(null):(po()<=he.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fi(n)),this.es(e,o,n,R2(i,-1)).next(a=>a))})}Zi(e,n){let r=new ot(CE(e));return n.forEach((i,s)=>{Pc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return po()<=he.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Fi(n)),this.zi.getDocumentsMatchingQuery(e,n,Mr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Oe(ve),this.rs=new Fs(s=>em(s),tm),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hx(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function nN(t,e,n,r){return new tN(t,e,n,r)}async function XE(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ce();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function rN(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const d=c.batch,m=d.keys();let g=F.resolve();return m.forEach(E=>{g=g.next(()=>h.getEntry(u,E)).next(k=>{const b=c.docVersions.get(E);Te(b!==null),k.version.compareTo(b)<0&&(d.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),h.addEntry(k)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ce();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function JE(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function iN(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,d)=>{const m=i.get(d);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,d)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(yt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(d,g),function(k,b,w){return k.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,g,h)&&a.push(n.Qr.updateTargetData(s,g))});let u=Qn(),c=ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(sN(s,o,e.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(re.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function sN(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Qn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function oN(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aN(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Id(t,e,n){const r=ie(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ra(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function qy(t,e,n){const r=ie(t);let i=re.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const d=ie(u),m=d.rs.get(h);return m!==void 0?F.resolve(d.ns.get(m)):d.Qr.getTargetData(c,h)}(r,o,wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:ce())).next(a=>(lN(r,Z2(e),a),{documents:a,hs:s})))}function lN(t,e,n){let r=t.ss.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Gy{constructor(){this.activeTargetIds=sx()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uN{constructor(){this.no=new Gy,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Gy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl=null;function Kh(){return Nl===null?Nl=function(){return 268435456+Math.round(2147483648*Math.random())}():Nl++,"0x"+Nl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class dN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Kh(),u=this.vo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(h=>(Q("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Is("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=hN[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Kh();return new Promise((o,a)=>{const u=new uE;u.setWithCredentials(!0),u.listenOnce(hE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ql.NO_ERROR:const h=u.getResponseJson();Q(dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Ql.TIMEOUT:Q(dt,`RPC '${e}' ${s} timed out`),a(new Z(j.DEADLINE_EXCEEDED,"Request time out"));break;case Ql.HTTP_ERROR:const d=u.getStatus();if(Q(dt,`RPC '${e}' ${s} failed with status:`,d,"response text:",u.getResponseText()),d>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const E=function(b){const w=b.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(w)>=0?w:j.UNKNOWN}(g.status);a(new Z(E,g.message))}else a(new Z(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Z(j.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{Q(dt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Q(dt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Kh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pE(),a=dE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new cE({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");Q(dt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const d=o.createWebChannel(h,u);let m=!1,g=!1;const E=new fN({lo:b=>{g?Q(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(Q(dt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),m=!0),Q(dt,`RPC '${e}' stream ${i} sending:`,b),d.send(b))},ho:()=>d.close()}),k=(b,w,y)=>{b.listen(w,I=>{try{y(I)}catch(x){setTimeout(()=>{throw x},0)}})};return k(d,To.EventType.OPEN,()=>{g||(Q(dt,`RPC '${e}' stream ${i} transport opened.`),E.mo())}),k(d,To.EventType.CLOSE,()=>{g||(g=!0,Q(dt,`RPC '${e}' stream ${i} transport closed`),E.po())}),k(d,To.EventType.ERROR,b=>{g||(g=!0,Is(dt,`RPC '${e}' stream ${i} transport errored:`,b),E.po(new Z(j.UNAVAILABLE,"The operation could not be completed")))}),k(d,To.EventType.MESSAGE,b=>{var w;if(!g){const y=b.data[0];Te(!!y);const I=y,x=I.error||((w=I[0])===null||w===void 0?void 0:w.error);if(x){Q(dt,`RPC '${e}' stream ${i} received error:`,x);const O=x.status;let D=function(S){const A=je[S];if(A!==void 0)return zE(A)}(O),T=x.message;D===void 0&&(D=j.INTERNAL,T="Unknown error status: "+O+" with message "+x.message),g=!0,E.po(new Z(D,T)),d.close()}else Q(dt,`RPC '${e}' stream ${i} received:`,y),E.yo(y)}}),k(a,fE.STAT_EVENT,b=>{b.stat===dd.PROXY?Q(dt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===dd.NOPROXY&&Q(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function Qh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){return new Sx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ZE(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new Z(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pN extends eT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=Px(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?En(o.readTime):re.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Td(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=vd(u)?{documents:Rx(s,u)}:{query:xx(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=HE(s,o.resumeToken);const c=_d(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=$u(s,o.snapshotVersion.toTimestamp());const c=_d(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=Ox(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Td(this.serializer),n.removeTarget=e,this.i_(n)}}class mN extends eT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=bx(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.A_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Td(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Cx(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,wd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Z(j.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,wd(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(j.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class vN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Kn(n),this.y_=!1):Q("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{ki(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ie(u);c.M_.add(4),await Oa(c),c.N_.set("Unknown"),c.M_.delete(4),await Nc(c)}(this))})}),this.N_=new vN(r,i)}}async function Nc(t){if(ki(t))for(const e of t.x_)await e(!0)}async function Oa(t){for(const e of t.x_)await e(!1)}function tT(t,e){const n=ie(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),hm(n)?cm(n):js(n).Xo()&&um(n,e))}function lm(t,e){const n=ie(t),r=js(n);n.F_.delete(e),r.Xo()&&nT(n,e),n.F_.size===0&&(r.Xo()?r.n_():ki(n)&&n.N_.set("Unknown"))}function um(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}js(t).P_(e)}function nT(t,e){t.L_.xe(e),js(t).I_(e)}function cm(t){t.L_=new wx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),js(t).start(),t.N_.w_()}function hm(t){return ki(t)&&!js(t).Zo()&&t.F_.size>0}function ki(t){return ie(t).M_.size===0}function rT(t){t.L_=void 0}async function _N(t){t.N_.set("Online")}async function wN(t){t.F_.forEach((e,n)=>{um(t,e)})}async function EN(t,e){rT(t),hm(t)?(t.N_.D_(e),cm(t)):t.N_.set("Unknown")}async function TN(t,e,n){if(t.N_.set("Online"),e instanceof BE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bu(t,r)}else if(e instanceof Jl?t.L_.Ke(e):e instanceof $E?t.L_.He(e):t.L_.We(e),!n.isEqual(re.min()))try{const r=await JE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.F_.get(u);if(!h)return;s.F_.set(u,h.withResumeToken(yt.EMPTY_BYTE_STRING,h.snapshotVersion)),nT(s,u);const d=new gr(h.target,u,c,h.sequenceNumber);um(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await Bu(t,r)}}async function Bu(t,e,n){if(!Ra(e))throw e;t.M_.add(1),await Oa(t),t.N_.set("Offline"),n||(n=()=>JE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Nc(t)})}function iT(t,e){return e().catch(n=>Bu(t,n,e))}async function Oc(t){const e=ie(t),n=Fr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;IN(e);)try{const i=await oN(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,SN(e,i)}catch(i){await Bu(e,i)}sT(e)&&oT(e)}function IN(t){return ki(t)&&t.v_.length<10}function SN(t,e){t.v_.push(e);const n=Fr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function sT(t){return ki(t)&&!Fr(t).Zo()&&t.v_.length>0}function oT(t){Fr(t).start()}async function AN(t){Fr(t).V_()}async function kN(t){const e=Fr(t);for(const n of t.v_)e.d_(n.mutations)}async function PN(t,e,n){const r=t.v_.shift(),i=nm.from(r,e,n);await iT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Oc(t)}async function CN(t,e){e&&Fr(t).E_&&await async function(r,i){if(function(o){return vx(o)&&o!==j.ABORTED}(i.code)){const s=r.v_.shift();Fr(r).t_(),await iT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Oc(r)}}(t,e),sT(t)&&oT(t)}async function Qy(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=ki(n);n.M_.add(3),await Oa(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Nc(n)}async function bN(t,e){const n=ie(t);e?(n.M_.delete(2),await Nc(n)):e||(n.M_.add(2),await Oa(n),n.N_.set("Unknown"))}function js(t){return t.B_||(t.B_=function(n,r,i){const s=ie(n);return s.f_(),new pN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:_N.bind(null,t),To:wN.bind(null,t),Ao:EN.bind(null,t),h_:TN.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),hm(t)?cm(t):t.N_.set("Unknown")):(await t.B_.stop(),rT(t))})),t.B_}function Fr(t){return t.k_||(t.k_=function(n,r,i){const s=ie(n);return s.f_(),new mN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:AN.bind(null,t),Ao:CN.bind(null,t),R_:kN.bind(null,t),A_:PN.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Oc(t)):(await t.k_.stop(),t.v_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new fm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dm(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),Ra(t))return new Z(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=Io(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.q_=new Oe(ee.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ne():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cs{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Cs(e,n,cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class xN{constructor(){this.queries=new Fs(e=>PE(e),kc),this.onlineState="Unknown",this.z_=new Set}}async function NN(t,e){const n=ie(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new RN,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=dm(o,`Initialization of query '${Fi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&pm(n)}async function ON(t,e){const n=ie(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DN(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&pm(n)}function LN(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function pm(t){t.z_.forEach(e=>{e.next()})}var Sd,Xy;(Xy=Sd||(Sd={})).J_="default",Xy.Cache="cache";class MN{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Sd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.key=e}}class lT{constructor(e){this.key=e}}class VN{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ce(),this.mutatedKeys=ce(),this.Ia=CE(e),this.Ta=new cs(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Yy,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const m=i.get(h),g=Pc(this.query,d)?d:null,E=!!m&&this.mutatedKeys.has(m.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;m&&g?m.data.isEqual(g.data)?E!==k&&(r.track({type:3,doc:g}),b=!0):this.Ra(m,g)||(r.track({type:2,doc:g}),b=!0,(u&&this.Ia(g,u)>0||c&&this.Ia(g,c)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),b=!0):m&&!g&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(a=!0)),b&&(g?(o=o.add(g),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,d)=>function(g,E){const k=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return k(g)-k(E)}(h.type,d.type)||this.Ia(h.doc,d.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Cs(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Yy,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ce(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new lT(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new aT(r))}),n}pa(e){this.la=e.hs,this.Pa=ce();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Cs.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class FN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jN{constructor(e){this.key=e,this.wa=!1}}class UN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Fs(a=>PE(a),kc),this.Da=new Map,this.Ca=new Set,this.va=new Oe(ee.comparator),this.Fa=new Map,this.Ma=new sm,this.xa={},this.Oa=new Map,this.Na=Ps.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function zN(t,e,n=!0){const r=pT(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await uT(r,e,n,!0),i}async function $N(t,e){const n=pT(t);await uT(n,e,!0,!1)}async function uT(t,e,n,r){const i=await aN(t.localStore,wn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await BN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tT(t.remoteStore,i),a}async function BN(t,e,n,r,i){t.Ba=(d,m,g)=>async function(k,b,w,y){let I=b.view.da(w);I.Xi&&(I=await qy(k.localStore,b.query,!1).then(({documents:T})=>b.view.da(T,I)));const x=y&&y.targetChanges.get(b.targetId),O=y&&y.targetMismatches.get(b.targetId)!=null,D=b.view.applyChanges(I,k.isPrimaryClient,x,O);return Zy(k,b.targetId,D.fa),D.snapshot}(t,d,m,g);const s=await qy(t.localStore,e,!0),o=new VN(e,s.hs),a=o.da(s.documents),u=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Zy(t,n,c.fa);const h=new FN(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function HN(t,e,n){const r=ie(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!kc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Id(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&lm(r.remoteStore,i.targetId),Ad(r,i.targetId)}).catch(ba)):(Ad(r,i.targetId),await Id(r.localStore,i.targetId,!0))}async function WN(t,e){const n=ie(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),lm(n.remoteStore,r.targetId))}async function qN(t,e,n){const r=ZN(t);try{const i=await function(o,a){const u=ie(o),c=qe.now(),h=a.reduce((g,E)=>g.add(E.key),ce());let d,m;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let E=Qn(),k=ce();return u.os.getEntries(g,h).next(b=>{E=b,E.forEach((w,y)=>{y.isValidDocument()||(k=k.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,E)).next(b=>{d=b;const w=[];for(const y of a){const I=fx(y,d.get(y.key).overlayedDocument);I!=null&&w.push(new Ai(y.key,I,_E(I.value.mapValue),Un.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,w,a)}).next(b=>{m=b;const w=b.applyToLocalDocumentSet(d,k);return u.documentOverlayCache.saveOverlays(g,b.batchId,w)})}).then(()=>({batchId:m.batchId,changes:RE(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Oe(ve)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Da(r,i.changes),await Oc(r.remoteStore)}catch(i){const s=dm(i,"Failed to persist write");n.reject(s)}}async function cT(t,e){const n=ie(t);try{const r=await iN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Te(o.wa):i.removedDocuments.size>0&&(Te(o.wa),o.wa=!1))}),await Da(n,r,e)}catch(r){await ba(r)}}function Jy(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ie(o);u.onlineState=a;let c=!1;u.queries.forEach((h,d)=>{for(const m of d.U_)m.j_(a)&&(c=!0)}),c&&pm(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GN(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Oe(ee.comparator);o=o.insert(s,gt.newNoDocument(s,re.min()));const a=ce().add(s),u=new Rc(re.min(),new Map,new Oe(ve),o,a);await cT(r,u),r.va=r.va.remove(s),r.Fa.delete(e),mm(r)}else await Id(r.localStore,e,!1).then(()=>Ad(r,e,n)).catch(ba)}async function KN(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await rN(n.localStore,e);fT(n,r,null),hT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Da(n,i)}catch(i){await ba(i)}}async function QN(t,e,n){const r=ie(t);try{const i=await function(o,a){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(d=>(Te(d!==null),h=d.keys(),u.mutationQueue.removeMutationBatch(c,d))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);fT(r,e,n),hT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Da(r,i)}catch(i){await ba(i)}}function hT(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function fT(t,e,n){const r=ie(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||dT(t,r)})}function dT(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(lm(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),mm(t))}function Zy(t,e,n){for(const r of n)r instanceof aT?(t.Ma.addReference(r.key,e),YN(t,r)):r instanceof lT?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||dT(t,r.key)):ne()}function YN(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.Ca.add(r),mm(t))}function mm(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ee(be.fromString(e)),r=t.Na.next();t.Fa.set(r,new jN(n)),t.va=t.va.insert(n,r),tT(t.remoteStore,new gr(wn(kE(n.path)),r,"TargetPurposeLimboResolution",Yp.oe))}}async function Da(t,e,n){const r=ie(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){i.push(c);const h=am.Ki(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const h=ie(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>F.forEach(c,m=>F.forEach(m.qi,g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>F.forEach(m.Qi,g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!Ra(d))throw d;Q("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const m=d.targetId;if(!d.fromCache){const g=h.ns.get(m),E=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(E);h.ns=h.ns.insert(m,k)}}}(r.localStore,s))}async function XN(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await XE(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new Z(j.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Da(n,r.us)}}function JN(t,e){const n=ie(t),r=n.Fa.get(e);if(r&&r.wa)return ce().add(r.key);{let i=ce();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function pT(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GN.bind(null,e),e.Sa.h_=DN.bind(null,e.eventManager),e.Sa.ka=LN.bind(null,e.eventManager),e}function ZN(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QN.bind(null,e),e}class e_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nN(this.persistence,new eN,e.initialUser,this.serializer)}createPersistence(e){return new Xx(om.Hr,this.serializer)}createSharedClientState(e){return new uN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XN.bind(null,this.syncEngine),await bN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xN}()}createDatastore(e){const n=xc(e.databaseInfo.databaseId),r=function(s){return new dN(s)}(e.databaseInfo);return function(s,o,a,u){return new gN(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new yN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Jy(this.syncEngine,n,0),function(){return Ky.D()?new Ky:new cN}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const d=new UN(i,s,o,a,u,c);return h&&(d.La=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ie(r);Q("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Oa(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=gE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yh(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await XE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function t_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iO(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Qy(e.remoteStore,i)),t._onlineComponents=e}function rO(t){return t.name==="FirebaseError"?t.code===j.FAILED_PRECONDITION||t.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function iO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rO(n))throw n;Is("Error using user provided cache. Falling back to memory cache: "+n),await Yh(t,new e_)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await Yh(t,new e_);return t._offlineComponents}async function mT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await t_(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await t_(t,new eO))),t._onlineComponents}function sO(t){return mT(t).then(e=>e.syncEngine)}async function oO(t){const e=await mT(t),n=e.eventManager;return n.onListen=zN.bind(null,e.syncEngine),n.onUnlisten=HN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$N.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WN.bind(null,e.syncEngine),n}function aO(t,e,n={}){const r=new Cr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new tO({next:m=>{o.enqueueAndForget(()=>ON(s,d)),m.fromCache&&u.source==="server"?c.reject(new Z(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),d=new MN(a,h,{includeMetadataChanges:!0,ra:!0});return NN(s,d)}(await oO(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t,e,n){if(!n)throw new Z(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lO(t,e,n,r){if(e===!0&&r===!0)throw new Z(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function r_(t){if(!ee.isDocumentKey(t))throw new Z(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function i_(t){if(ee.isDocumentKey(t))throw new Z(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Hu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gm(t);throw new Z(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new s_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Z(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Z(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new s_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new E2;switch(r.type){case"firstParty":return new A2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=n_.get(n);r&&(Q("ComponentProvider","Removing Datastore"),n_.delete(n),r.terminate())}(this),Promise.resolve()}}function uO(t,e,n,r={}){var i;const s=(t=Hu(t,Dc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=pt.MOCK_USER;else{a=xC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Z(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new pt(c)}t._authCredentials=new T2(new mE(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lc(this.firestore,e,this._query)}}class on{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class br extends Lc{constructor(e,n,r){super(e,n,kE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new ee(e))}withConverter(e){return new br(this.firestore,e,this._path)}}function yT(t,e,...n){if(t=Rt(t),vT("collection","path",e),t instanceof Dc){const r=be.fromString(e,...n);return i_(r),new br(t,null,r)}{if(!(t instanceof on||t instanceof br))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return i_(r),new br(t.firestore,null,r)}}function cO(t,e,...n){if(t=Rt(t),arguments.length===1&&(e=gE.newId()),vT("doc","path",e),t instanceof Dc){const r=be.fromString(e,...n);return r_(r),new on(t,null,new ee(r))}{if(!(t instanceof on||t instanceof br))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return r_(r),new on(t.firestore,t instanceof br?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ZE(this,"async_queue_retry"),this.hu=()=>{const n=Qh();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Qh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Qh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Cr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ra(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Kn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=fm.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ne()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class vm extends Dc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new hO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wT(this),this._firestoreClient.terminate()}}function fO(t,e){const n=typeof t=="object"?t:Bp(),r=typeof t=="string"?t:"(default)",i=Si(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=bC("firestore");s&&uO(i,...s)}return i}function _T(t){return t._firestoreClient||wT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new F2(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,gT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new nO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(yt.fromBase64String(e))}catch(n){throw new Z(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=/^__.*__$/;class pO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new xa(e,this.data,n,this.fieldTransforms)}}function TT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class wm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new wm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Wu(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(TT(this.fu)&&dO.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class mO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xc(e)}Fu(e,n,r,i=!1){return new wm({fu:e,methodName:n,vu:r,path:it.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gO(t){const e=t._freezeSettings(),n=xc(t._databaseId);return new mO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vO(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);kT("Data must be an object, but it was:",o,r);const a=ST(r,o);let u,c;if(s.merge)u=new nn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const m=yO(e,d,n);if(!o.contains(m))throw new Z(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);wO(h,m)||h.push(m)}u=new nn(h),c=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,c=o.fieldTransforms;return new pO(new Ht(a),u,c)}function IT(t,e){if(AT(t=Rt(t)))return kT("Unsupported field value:",e,t),ST(t,e);if(t instanceof ET)return function(r,i){if(!TT(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=IT(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ox(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:$u(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$u(i.serializer,s)}}if(r instanceof _m)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bs)return{bytesValue:HE(i.serializer,r._byteString)};if(r instanceof on){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:im(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${gm(r)}`)}(t,e)}function ST(t,e){const n={};return vE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(t,(r,i)=>{const s=IT(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof _m||t instanceof bs||t instanceof on||t instanceof ET)}function kT(t,e,n){if(!AT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=gm(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function yO(t,e,n){if((e=Rt(e))instanceof ym)return e._internalPath;if(typeof e=="string")return PT(t,e);throw Wu("Field path arguments must be of type string or ",t,!1,void 0,n)}const _O=new RegExp("[~\\*/\\[\\]]");function PT(t,e,n){if(e.search(_O)>=0)throw Wu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ym(...e.split("."))._internalPath}catch{throw Wu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Z(j.INVALID_ARGUMENT,a+t+u)}function wO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EO extends CT{data(){return super.data()}}function bT(t,e){return typeof e=="string"?PT(t,e):e instanceof ym?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class IO{convertValue(e,n="none"){switch(_i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new _m(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(da(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);Te(YE(r));const i=new pa(r.get(1),r.get(3)),s=new ee(r.popFirst(5));return i.isEqual(n)||Kn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class AO extends CT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zl extends AO{data(e={}){return super.data(e)}}class kO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ol(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zl(this._firestore,this._userDataWriter,r.key,r,new Ol(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ol(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ol(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:PO(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}class CO extends IO{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new on(this.firestore,null,n)}}function bO(t){t=Hu(t,Lc);const e=Hu(t.firestore,vm),n=_T(e),r=new CO(e);return TO(t._query),aO(n,t._query).then(i=>new kO(e,r,t,i))}function RO(t,e){const n=Hu(t.firestore,vm),r=cO(t),i=SO(t.converter,e);return xO(n,[vO(gO(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Un.exists(!1))]).then(()=>r)}function xO(t,e){return function(r,i){const s=new Cr;return r.asyncQueue.enqueueAndForget(async()=>qN(await sO(r),i,s)),s.promise}(_T(t),e)}(function(e,n=!0){(function(i){Ms=i})(Ls),Sn(new ln("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new vm(new I2(r.getProvider("auth-internal")),new P2(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Z(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pa(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Gt(ky,"4.6.3",e),Gt(ky,"4.6.3","esm2017")})();function Em(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function RT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NO=RT,xT=new Ii("auth","Firebase",RT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Ec("@firebase/auth");function OO(t,...e){qu.logLevel<=he.WARN&&qu.warn(`Auth (${Ls}): ${t}`,...e)}function eu(t,...e){qu.logLevel<=he.ERROR&&qu.error(`Auth (${Ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw Tm(t,...e)}function Tn(t,...e){return Tm(t,...e)}function NT(t,e,n){const r=Object.assign(Object.assign({},NO()),{[e]:n});return new Ii("auth","Firebase",r).create(e,{appName:t.name})}function Rr(t){return NT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xT.create(t,...e)}function te(t,e,...n){if(!t)throw Tm(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eu(e),new Error(e)}function Yn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function DO(){return o_()==="http:"||o_()==="https:"}function o_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DO()||x1()||"connection"in navigator)?navigator.onLine:!0}function MO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=NC()||DC()}get(){return LO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=new La(3e4,6e4);function Pi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $r(t,e,n,r,i={}){return DT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ca(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),OT.fetch()(LT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function DT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VO),e);try{const i=new UO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Dl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Dl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw NT(t,h,c);un(t,h)}}catch(i){if(i instanceof cn)throw i;un(t,"network-request-failed",{message:String(i)})}}async function Mc(t,e,n,r,i={}){const s=await $r(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function LT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Im(t.config,i):`${t.config.apiScheme}://${i}`}function jO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),FO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tn(t,e,r);return i.customData._tokenResponse=n,i}function a_(t){return t!==void 0&&t.enterprise!==void 0}class zO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $O(t,e){return $r(t,"GET","/v2/recaptchaConfig",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BO(t,e){return $r(t,"POST","/v1/accounts:delete",e)}async function MT(t,e){return $r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HO(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),i=Sm(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zo(Xh(i.auth_time)),issuedAtTime:zo(Xh(i.iat)),expirationTime:zo(Xh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xh(t){return Number(t)*1e3}function Sm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return eu("JWT malformed, contained fewer than 3 sections"),null;try{const i=P1(n);return i?JSON.parse(i):(eu("Failed to decode base64 JWT payload"),null)}catch(i){return eu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function l_(t){const e=Sm(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&WO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zo(this.lastLoginAt),this.creationTime=zo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ya(t,MT(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?VT(s.providerUserInfo):[],a=KO(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pd(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function GO(t){const e=Rt(t);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function VT(t){return t.map(e=>{var{providerId:n}=e,r=Em(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(t,e){const n=await DT(t,{},async()=>{const r=Ca({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=LT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",OT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YO(t,e){return $r(t,"POST","/v2/accounts:revokeToken",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):l_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=l_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Em(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ya(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HO(this,e)}reload(){return GO(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(Rr(this.auth));const e=await this.getIdToken();return await ya(this,BO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:x,isAnonymous:O,providerData:D,stsTokenManager:T}=n;te(I&&T,e,"internal-error");const v=hs.fromJSON(this.name,T);te(typeof I=="string",e,"internal-error"),sr(d,e.name),sr(m,e.name),te(typeof x=="boolean",e,"internal-error"),te(typeof O=="boolean",e,"internal-error"),sr(g,e.name),sr(E,e.name),sr(k,e.name),sr(b,e.name),sr(w,e.name),sr(y,e.name);const S=new Vn({uid:I,auth:e,email:m,emailVerified:x,displayName:d,isAnonymous:O,photoURL:E,phoneNumber:g,tenantId:k,stsTokenManager:v,createdAt:w,lastLoginAt:y});return D&&Array.isArray(D)&&(S.providerData=D.map(A=>Object.assign({},A))),b&&(S._redirectEventId=b),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?VT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new hs;a.updateFromIdToken(r);const u=new Vn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Pd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=new Map;function Fn(t){Yn(t instanceof Function,"Expected a class definition");let e=u_.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,u_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FT.type="NONE";const c_=FT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tu(this.userKey,i.apiKey,s),this.fullPersistenceKey=tu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(Fn(c_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Fn(c_);const o=tu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const d=Vn._fromJSON(e,h);c!==s&&(a=d),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new fs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BT(e))return"Blackberry";if(HT(e))return"Webos";if(Am(e))return"Safari";if((e.includes("chrome/")||UT(e))&&!e.includes("edge/"))return"Chrome";if($T(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jT(t=lt()){return/firefox\//i.test(t)}function Am(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UT(t=lt()){return/crios\//i.test(t)}function zT(t=lt()){return/iemobile/i.test(t)}function $T(t=lt()){return/android/i.test(t)}function BT(t=lt()){return/blackberry/i.test(t)}function HT(t=lt()){return/webos/i.test(t)}function Vc(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XO(t=lt()){var e;return Vc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JO(){return LC()&&document.documentMode===10}function WT(t=lt()){return Vc(t)||$T(t)||HT(t)||BT(t)||/windows phone/i.test(t)||zT(t)}function ZO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t,e=[]){let n;switch(t){case"Browser":n=h_(lt());break;case"Worker":n=`${h_(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(t,e={}){return $r(t,"GET","/v2/passwordPolicy",Pi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=6;class rD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new f_(this),this.idTokenSubscription=new f_(this),this.beforeStateQueue=new eD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await MT(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(Rr(this));const n=e?Rt(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(Rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(Rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tD(this),n=new rD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&OO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Us(t){return Rt(t)}class f_{constructor(e){this.auth=e,this.observer=null,this.addObserver=$C(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sD(t){Fc=t}function GT(t){return Fc.loadJS(t)}function oD(){return Fc.recaptchaEnterpriseScript}function aD(){return Fc.gapiScript}function lD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uD="recaptcha-enterprise",cD="NO_RECAPTCHA";class hD{constructor(e){this.type=uD,this.auth=Us(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{$O(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new zO(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;a_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(cD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&a_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=oD();u.length!==0&&(u+=a),GT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function d_(t,e,n,r=!1){const i=new hD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function p_(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await d_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await d_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t,e){const n=Si(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ca(s,e??{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function dD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pD(t,e,n){const r=Us(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=KT(e),{host:o,port:a}=mD(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),gD()}function KT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mD(t){const e=KT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:m_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:m_(o)}}}function m_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function vD(t,e){return $r(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(t,e){return Mc(t,"POST","/v1/accounts:signInWithPassword",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(t,e){return Mc(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}async function wD(t,e){return Mc(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends km{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _a(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _a(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return p_(e,n,"signInWithPassword",yD);case"emailLink":return _D(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return p_(e,r,"signUpPassword",vD);case"emailLink":return wD(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return Mc(t,"POST","/v1/accounts:signInWithIdp",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED="http://localhost";class wi extends km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Em(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new wi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:ED,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ca(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ID(t){const e=wo(Eo(t)).link,n=e?wo(Eo(e)).deep_link_id:null,r=wo(Eo(t)).deep_link_id;return(r?wo(Eo(r)).link:null)||r||n||e||t}class Pm{constructor(e){var n,r,i,s,o,a;const u=wo(Eo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,d=TD((i=u.mode)!==null&&i!==void 0?i:null);te(c&&h&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ID(e);try{return new Pm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.providerId=zs.PROVIDER_ID}static credential(e,n){return _a._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pm.parseLink(n);return te(r,"argument-error"),_a._fromEmailAndCode(e,r.code,r.tenantId)}}zs.PROVIDER_ID="password";zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends QT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Ma{constructor(){super("facebook.com")}static credential(e){return wi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Ma{constructor(){super("github.com")}static credential(e){return wi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ma{constructor(){super("twitter.com")}static credential(e,n){return wi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=g_(r);return new Rs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=g_(r);return new Rs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function g_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ku(e,n,r,i)}}function YT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(t,s,e,r):s})}async function SD(t,e,n=!1){const r=await ya(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(t,e,n=!1){const{auth:r}=t;if(Ln(r.app))return Promise.reject(Rr(r));const i="reauthenticate";try{const s=await ya(t,YT(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=Sm(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),Rs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e,n=!1){if(Ln(t.app))return Promise.reject(Rr(t));const r="signIn",i=await YT(t,r,e),s=await Rs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kD(t,e){return XT(Us(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PD(t){const e=Us(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function CD(t,e,n){return Ln(t.app)?Promise.reject(Rr(t)):kD(Rt(t),zs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&PD(t),r})}function bD(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function RD(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}const Qu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qu,"1"),this.storage.removeItem(Qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(){const t=lt();return Am(t)||Vc(t)}const ND=1e3,OD=10;class ZT extends JT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xD()&&ZO(),this.fallbackToPolling=WT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,OD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ND)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ZT.type="LOCAL";const DD=ZT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI extends JT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eI.type="SESSION";const tI=eI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await LD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Cm("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const m=d;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return window}function VD(t){In().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function FD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UD(){return nI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="firebaseLocalStorageDb",zD=1,Yu="firebaseLocalStorage",iI="fbase_key";class Va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uc(t,e){return t.transaction([Yu],e?"readwrite":"readonly").objectStore(Yu)}function $D(){const t=indexedDB.deleteDatabase(rI);return new Va(t).toPromise()}function Cd(){const t=indexedDB.open(rI,zD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yu,{keyPath:iI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yu)?e(r):(r.close(),await $D(),e(await Cd()))})})}async function v_(t,e,n){const r=Uc(t,!0).put({[iI]:e,value:n});return new Va(r).toPromise()}async function BD(t,e){const n=Uc(t,!1).get(e),r=await new Va(n).toPromise();return r===void 0?null:r.value}function y_(t,e){const n=Uc(t,!0).delete(e);return new Va(n).toPromise()}const HD=800,WD=3;class sI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(UD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FD(),!this.activeServiceWorker)return;this.sender=new MD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cd();return await v_(e,Qu,"1"),await y_(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>v_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>y_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uc(i,!1).getAll();return new Va(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sI.type="LOCAL";const qD=sI;new La(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t,e){return e?Fn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KD(t){return XT(t.auth,new bm(t),t.bypassAuthState)}function QD(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),AD(n,new bm(t),t.bypassAuthState)}async function YD(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),SD(n,new bm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KD;case"linkViaPopup":case"linkViaRedirect":return YD;case"reauthViaPopup":case"reauthViaRedirect":return QD;default:un(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=new La(2e3,1e4);class ns extends oI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=Cm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XD.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD="pendingRedirect",nu=new Map;class ZD extends oI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nu.get(this.auth._key());if(!e){try{const r=await eL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nu.set(this.auth._key(),e)}return this.bypassAuthState||nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eL(t,e){const n=rL(e),r=nL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tL(t,e){nu.set(t._key(),e)}function nL(t){return Fn(t._redirectPersistence)}function rL(t){return tu(JD,t.config.apiKey,t.name)}async function iL(t,e,n=!1){if(Ln(t.app))return Promise.reject(Rr(t));const r=Us(t),i=GD(r,e),o=await new ZD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=10*60*1e3;class oL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sL&&this.cachedEventUids.clear(),this.cachedEventUids.has(__(e))}saveEventToCache(e){this.cachedEventUids.add(__(e)),this.lastProcessedEventTime=Date.now()}}function __(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lL(t,e={}){return $r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cL=/^https?/;async function hL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lL(t);for(const n of e)try{if(fL(n))return}catch{}un(t,"unauthorized-domain")}function fL(t){const e=kd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cL.test(n))return!1;if(uL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dL=new La(3e4,6e4);function w_(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pL(t){return new Promise((e,n)=>{var r,i,s;function o(){w_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{w_(),n(Tn(t,"network-request-failed"))},timeout:dL.get()})}if(!((i=(r=In().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=In().gapi)===null||s===void 0)&&s.load)o();else{const a=lD("iframefcb");return In()[a]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},GT(`${aD()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw ru=null,e})}let ru=null;function mL(t){return ru=ru||pL(t),ru}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=new La(5e3,15e3),vL="__/auth/iframe",yL="emulator/auth/iframe",_L={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EL(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Im(e,yL):`https://${t.config.authDomain}/${vL}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},i=wL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ca(r).slice(1)}`}async function TL(t){const e=await mL(t),n=In().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:EL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_L,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),a=In().setTimeout(()=>{s(o)},gL.get());function u(){In().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SL=500,AL=600,kL="_blank",PL="http://localhost";class E_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CL(t,e,n,r=SL,i=AL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},IL),{width:r.toString(),height:i.toString(),top:s,left:o}),c=lt().toLowerCase();n&&(a=UT(c)?kL:n),jT(c)&&(e=e||PL,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[g,E])=>`${m}${g}=${E},`,"");if(XO(c)&&a!=="_self")return bL(e||"",a),new E_(null);const d=window.open(e||"",a,h);te(d,t,"popup-blocked");try{d.focus()}catch{}return new E_(d)}function bL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL="__/auth/handler",xL="emulator/auth/handler",NL=encodeURIComponent("fac");async function T_(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:i};if(e instanceof QT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Ma){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${NL}=${encodeURIComponent(u)}`:"";return`${OL(t)}?${Ca(a).slice(1)}${c}`}function OL({config:t}){return t.emulator?Im(t,xL):`https://${t.authDomain}/${RL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="webStorageSupport";class DL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tI,this._completeRedirectFn=iL,this._overrideRedirectResult=tL}async _openPopup(e,n,r,i){var s;Yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await T_(e,n,r,kd(),i);return CL(e,o,Cm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await T_(e,n,r,kd(),i);return VD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TL(e),r=new oL(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jh,{type:Jh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jh];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WT()||Am()||Vc()}}const LL=DL;var I_="@firebase/auth",S_="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FL(t){Sn(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qT(t)},c=new iD(r,i,s,u);return dD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new ln("auth-internal",e=>{const n=Us(e.getProvider("auth").getImmediate());return(r=>new ML(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(I_,S_,VL(t)),Gt(I_,S_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL=5*60,UL=R1("authIdTokenMaxAge")||jL;let A_=null;const zL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UL)return;const i=n==null?void 0:n.token;A_!==i&&(A_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $L(t=Bp()){const e=Si(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fD(t,{popupRedirectResolver:LL,persistence:[qD,DD,tI]}),r=R1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=zL(s.toString());RD(n,o,()=>o(n.currentUser)),bD(n,a=>o(a))}}const i=C1("auth");return i&&pD(n,`http://${i}`),n}function BL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FL("Browser");const HL={apiKey:"AIzaSyAAdmYIOIwTYzhaMTHG-HRKYl2HEn94ZuQ",authDomain:"portfolio-2024-06-20.firebaseapp.com",projectId:"portfolio-2024-06-20",storageBucket:"portfolio-2024-06-20.appspot.com",messagingSenderId:"57227371239",appId:"1:57227371239:web:3517ce0a9b85950fa27842",measurementId:"G-ZZN1PFZED2"},Rm=V1(HL);v2(Rm);const lI=fO(Rm),bd=$L(Rm);function WL(){const[t,e]=J.useState(""),[n,r]=J.useState(""),[i,s]=J.useState(""),o=async a=>{a.preventDefault();const u=Date.now(),c=new Date(u).toISOString();try{const h=await RO(yT(lI,"contact_messeges"),{name:n,email:t,message:i,date:c});console.log("Added doc."),e(""),s(""),r("")}catch(h){console.error("Error adding doc: ",h)}};return U.jsx("section",{id:"contact",className:"contact-section",children:U.jsxs("div",{className:"contact-container",children:[U.jsx("h2",{className:"contact-title",children:"Contact Me"}),U.jsx("p",{className:"contact-text",children:"Feel free to reach out to me through this form or connect with me on GitHub and LinkedIn."}),U.jsxs("form",{className:"contact-form",action:"mailto:ludvig.o.danielsson@gmail.com",method:"post",encType:"text/plain",children:[U.jsx("input",{value:n,type:"text",name:"name",placeholder:"Your Name",onChange:a=>r(a.target.value),required:!0}),U.jsx("input",{value:t,type:"email",name:"email",placeholder:"Your Email",required:!0,onChange:a=>e(a.target.value)}),U.jsx("textarea",{value:i,name:"message",rows:"4",placeholder:"Your Message",required:!0,onChange:a=>s(a.target.value)}),U.jsx("button",{type:"submit",onClick:o,children:"Send Message"})]}),U.jsxs("div",{className:"social-icons",children:[U.jsx("a",{href:"https://github.com/your-github",target:"_blank","aria-label":"GitHub",rel:"noreferrer",children:U.jsx(Nu,{icon:EC})}),U.jsx("a",{href:"https://linkedin.com/in/your-linkedin",target:"_blank","aria-label":"LinkedIn",rel:"noreferrer",children:U.jsx(Nu,{icon:wC})})]})]})})}function qL(){const[t,e]=J.useState(""),[n,r]=J.useState(""),[i,s]=J.useState(!1),o=()=>{s(!i)},a=()=>{CD(bd,t,n).then(u=>{const c=u.user;console.log("Successfully logged in:",c.email)}).catch(u=>{const c=u.code,h=u.message;console.error(`Error ${c}: ${h}`)})};return U.jsxs("div",{className:"login-dropdown",children:[U.jsx("button",{className:"login-button",onClick:o,children:"Login"}),i&&U.jsxs("div",{className:"dropdown-content",children:[U.jsx("input",{type:"text",placeholder:"Email...",value:t,onChange:u=>e(u.target.value)}),U.jsx("input",{type:"password",placeholder:"Password...",value:n,onChange:u=>r(u.target.value)}),U.jsx("button",{onClick:a,children:"Sign in"})]})]})}function GL(){const[t,e]=J.useState("");return J.useEffect(()=>{e("");const n="Ludvig!";let r=0;const i=setInterval(()=>{e(s=>{if(r<n.length){const o=s+n[r];return r++,o}else return clearInterval(i),s})},300);return()=>clearInterval(i)},[]),U.jsxs("div",{id:"main",children:[U.jsxs("div",{id:"banner-container",children:[U.jsx("img",{id:"banner-img",src:vk,alt:"banner"}),U.jsx("div",{className:"banner-overlay"}),U.jsxs("div",{className:"banner-text",children:[U.jsx("h1",{children:U.jsx(wk,{onInit:n=>{n.typeString("Hello!").pauseFor(1e3).deleteAll().typeString('My name is <span class="highlight-word">Ludvig</span>!').start()}})}),U.jsx("h2",{children:"I am a student in Computer Science"}),U.jsxs("h2",{children:["At The ",U.jsx("span",{className:"highlight-word",children:"Faculty of Engineering"}),", LTH."]})]}),U.jsxs("div",{className:"bubble-frame",children:[U.jsx(_l,{name:"SKILLS",icon:"🚀",pos:"bubble1",id:"skill-container"}),U.jsx(_l,{name:"PROJECTS",icon:"🚧",pos:"bubble2",id:"proj"}),U.jsx(_l,{name:"CONTACT",icon:"🌐",pos:"bubble3",id:"contact"}),U.jsx(_l,{name:"ABOUT ME",icon:"🧑‍💻",pos:"bubble4",id:"about-me"})]})]}),U.jsx("div",{id:"skill-container",children:U.jsxs("div",{className:"skills-section",children:[U.jsx("h2",{className:"section-title",children:"My Skills"}),U.jsxs("div",{className:"skills-grid",children:[U.jsx(Vi,{title:"Frontend Development",description:"Creating responsive and user-friendly interfaces using HTML, CSS, JavaScript and the framework react."}),U.jsx(Vi,{title:"Backend Development",description:"Building server-side applications using Node.js, Express, and databases like MongoDB."}),U.jsx(Vi,{title:"UI/UX Design",description:"Designing intuitive user interfaces and enhancing user experience through wireframing and prototyping."}),U.jsx(Vi,{title:"Mobile Development",description:"Developing cross-platform mobile applications using React Native and Flutter."}),U.jsx(Vi,{title:"Database Management",description:"Designing and optimizing databases using SQL and NoSQL technologies."}),U.jsx(Vi,{title:"Cloud Computing",description:"Deploying and managing applications on cloud platforms like AWS and Azure."})]}),U.jsx(yk,{})]})}),U.jsx(Ek,{}),U.jsx(Tk,{}),U.jsx(WL,{})]})}function KL(){const[t,e]=J.useState([]),[n,r]=J.useState(null),[i,s]=J.useState(!0),[o,a]=J.useState(null);J.useEffect(()=>{const d=bd.onAuthStateChanged(m=>{r(m),s(!1)});return()=>d()},[]),J.useEffect(()=>{n&&u()},[n]);const u=async()=>{try{const d=yT(lI,"contact_messeges"),g=(await bO(d)).docs.map(E=>({id:E.id,...E.data()}));e(g)}catch(d){a(d.message),console.error("Error fetching messages:",d)}},c=()=>{u()},h=()=>{bd.signOut().then(()=>{r(null),e([])}).catch(d=>{console.error("Error signing out:",d)})};return i?U.jsx("p",{children:"Loading..."}):U.jsx("div",{id:"messages-container",children:n?U.jsxs(U.Fragment,{children:[U.jsx("button",{onClick:h,children:"Logout"}),o&&U.jsxs("p",{children:["Error: ",o]}),t.length===0&&!o&&U.jsx("p",{children:"No messages found."}),t.map(d=>U.jsxs("div",{className:"message",children:[U.jsx("p",{children:d.message}),U.jsxs("p",{children:["Posted by: ",d.name]}),U.jsxs("p",{children:["Date: ",d.date]}),U.jsxs("p",{children:["Email: ",d.email]})]},d.id))]}):U.jsx(qL,{onLogin:c})})}/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xu(){return Xu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xu.apply(this,arguments)}var vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(vr||(vr={}));const k_="popstate";function QL(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Rd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cI(i)}return XL(e,n,null,t)}function xt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function uI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YL(){return Math.random().toString(36).substr(2,8)}function P_(t,e){return{usr:t.state,key:t.key,idx:e}}function Rd(t,e,n,r){return n===void 0&&(n=null),Xu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zc(e):e,{state:n,key:e&&e.key||r||YL()})}function cI(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function zc(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function XL(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=vr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Xu({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=vr.Pop;let b=h(),w=b==null?null:b-c;c=b,u&&u({action:a,location:k.location,delta:w})}function m(b,w){a=vr.Push;let y=Rd(k.location,b,w);c=h()+1;let I=P_(y,c),x=k.createHref(y);try{o.pushState(I,"",x)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(x)}s&&u&&u({action:a,location:k.location,delta:1})}function g(b,w){a=vr.Replace;let y=Rd(k.location,b,w);c=h();let I=P_(y,c),x=k.createHref(y);o.replaceState(I,"",x),s&&u&&u({action:a,location:k.location,delta:0})}function E(b){let w=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof b=="string"?b:cI(b);return y=y.replace(/ $/,"%20"),xt(w,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,w)}let k={get action(){return a},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(k_,d),u=b,()=>{i.removeEventListener(k_,d),u=null}},createHref(b){return e(i,b)},createURL:E,encodeLocation(b){let w=E(b);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:g,go(b){return o.go(b)}};return k}var C_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(C_||(C_={}));function JL(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?zc(e):e,i=dI(r.pathname||"/",n);if(i==null)return null;let s=hI(t);ZL(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let u=h4(i);o=l4(s[a],u)}return o}function hI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(xt(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ps([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(xt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),hI(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:o4(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of fI(s.path))i(s,o,u)}),e}function fI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=fI(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function ZL(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:a4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const e4=/^:[\w-]+$/,t4=3,n4=2,r4=1,i4=10,s4=-2,b_=t=>t==="*";function o4(t,e){let n=t.split("/"),r=n.length;return n.some(b_)&&(r+=s4),e&&(r+=n4),n.filter(i=>!b_(i)).reduce((i,s)=>i+(e4.test(s)?t4:s===""?r4:i4),r)}function a4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function l4(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=u4({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let d=a.route;s.push({params:r,pathname:ps([i,h.pathname]),pathnameBase:f4(ps([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=ps([i,h.pathnameBase]))}return s}function u4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=c4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,d)=>{let{paramName:m,isOptional:g}=h;if(m==="*"){let k=a[d]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const E=a[d];return g&&!E?c[m]=void 0:c[m]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function c4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),uI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function h4(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return uI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function dI(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const ps=t=>t.join("/").replace(/\/\/+/g,"/"),f4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function d4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const pI=["post","put","patch","delete"];new Set(pI);const p4=["get",...pI];new Set(p4);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ju(){return Ju=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ju.apply(this,arguments)}const m4=J.createContext(null),g4=J.createContext(null),mI=J.createContext(null),$c=J.createContext(null),Bc=J.createContext({outlet:null,matches:[],isDataRoute:!1}),gI=J.createContext(null);function xm(){return J.useContext($c)!=null}function v4(){return xm()||xt(!1),J.useContext($c).location}function y4(t,e){return _4(t,e)}function _4(t,e,n,r){xm()||xt(!1);let{navigator:i}=J.useContext(mI),{matches:s}=J.useContext(Bc),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=v4(),h;if(e){var d;let b=typeof e=="string"?zc(e):e;u==="/"||(d=b.pathname)!=null&&d.startsWith(u)||xt(!1),h=b}else h=c;let m=h.pathname||"/",g=m;if(u!=="/"){let b=u.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let E=JL(t,{pathname:g}),k=S4(E&&E.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:ps([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:ps([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&k?J.createElement($c.Provider,{value:{location:Ju({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:vr.Pop}},k):k}function w4(){let t=C4(),e=d4(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),n?J.createElement("pre",{style:i},n):null,null)}const E4=J.createElement(w4,null);class T4 extends J.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?J.createElement(Bc.Provider,{value:this.props.routeContext},J.createElement(gI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function I4(t){let{routeContext:e,match:n,children:r}=t,i=J.useContext(m4);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),J.createElement(Bc.Provider,{value:e},r)}function S4(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||xt(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:m,errors:g}=n,E=d.route.loader&&m[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||E){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,d,m)=>{let g,E=!1,k=null,b=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,k=d.route.errorElement||E4,u&&(c<0&&m===0?(E=!0,b=null):c===m&&(E=!0,b=d.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),y=()=>{let I;return g?I=k:E?I=b:d.route.Component?I=J.createElement(d.route.Component,null):d.route.element?I=d.route.element:I=h,J.createElement(I4,{match:d,routeContext:{outlet:h,matches:w,isDataRoute:n!=null},children:I})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?J.createElement(T4,{location:n.location,revalidation:n.revalidation,component:k,error:g,children:y(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):y()},null)}var xd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(xd||{});function A4(t){let e=J.useContext(g4);return e||xt(!1),e}function k4(t){let e=J.useContext(Bc);return e||xt(!1),e}function P4(t){let e=k4(),n=e.matches[e.matches.length-1];return n.route.id||xt(!1),n.route.id}function C4(){var t;let e=J.useContext(gI),n=A4(xd.UseRouteError),r=P4(xd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Nd(t){xt(!1)}function b4(t){let{basename:e="/",children:n=null,location:r,navigationType:i=vr.Pop,navigator:s,static:o=!1,future:a}=t;xm()&&xt(!1);let u=e.replace(/^\/*/,"/"),c=J.useMemo(()=>({basename:u,navigator:s,static:o,future:Ju({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=zc(r));let{pathname:h="/",search:d="",hash:m="",state:g=null,key:E="default"}=r,k=J.useMemo(()=>{let b=dI(h,u);return b==null?null:{location:{pathname:b,search:d,hash:m,state:g,key:E},navigationType:i}},[u,h,d,m,g,E,i]);return k==null?null:J.createElement(mI.Provider,{value:c},J.createElement($c.Provider,{children:n,value:k}))}function R4(t){let{children:e,location:n}=t;return y4(Od(e),n)}new Promise(()=>{});function Od(t,e){e===void 0&&(e=[]);let n=[];return J.Children.forEach(t,(r,i)=>{if(!J.isValidElement(r))return;let s=[...e,i];if(r.type===J.Fragment){n.push.apply(n,Od(r.props.children,s));return}r.type!==Nd&&xt(!1),!r.props.index||!r.props.children||xt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Od(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const x4="6";try{window.__reactRouterVersion=x4}catch{}const N4="startTransition",R_=sS[N4];function O4(t){let{basename:e,children:n,future:r,window:i}=t,s=J.useRef();s.current==null&&(s.current=QL({window:i,v5Compat:!0}));let o=s.current,[a,u]=J.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=J.useCallback(d=>{c&&R_?R_(()=>u(d)):u(d)},[u,c]);return J.useLayoutEffect(()=>o.listen(h),[o,h]),J.createElement(b4,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var x_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(x_||(x_={}));var N_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(N_||(N_={}));Zh.createRoot(document.getElementById("root")).render(U.jsx(ec.StrictMode,{children:U.jsx(O4,{children:U.jsxs(R4,{children:[U.jsx(Nd,{path:"/",element:U.jsx(GL,{})}),U.jsx(Nd,{path:"/messages",element:U.jsx(KL,{})})]})})}));
