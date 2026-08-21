(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function hx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var sf={exports:{}},ao={},af={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function dx(){if(Nm)return wt;Nm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function v(F,te,Pe){this.props=F,this.context=te,this.refs=R,this.updater=Pe||M}v.prototype.isReactComponent={},v.prototype.setState=function(F,te){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,te,"setState")},v.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=v.prototype;function D(F,te,Pe){this.props=F,this.context=te,this.refs=R,this.updater=Pe||M}var P=D.prototype=new y;P.constructor=D,E(P,v.prototype),P.isPureReactComponent=!0;var b=Array.isArray,C=Object.prototype.hasOwnProperty,L={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(F,te,Pe){var Be,ze={},ie=null,ve=null;if(te!=null)for(Be in te.ref!==void 0&&(ve=te.ref),te.key!==void 0&&(ie=""+te.key),te)C.call(te,Be)&&!k.hasOwnProperty(Be)&&(ze[Be]=te[Be]);var fe=arguments.length-2;if(fe===1)ze.children=Pe;else if(1<fe){for(var we=Array(fe),Ve=0;Ve<fe;Ve++)we[Ve]=arguments[Ve+2];ze.children=we}if(F&&F.defaultProps)for(Be in fe=F.defaultProps,fe)ze[Be]===void 0&&(ze[Be]=fe[Be]);return{$$typeof:s,type:F,key:ie,ref:ve,props:ze,_owner:L.current}}function I(F,te){return{$$typeof:s,type:F.type,key:te,ref:F.ref,props:F.props,_owner:F._owner}}function Y(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function W(F){var te={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Pe){return te[Pe]})}var j=/\/+/g;function ce(F,te){return typeof F=="object"&&F!==null&&F.key!=null?W(""+F.key):te.toString(36)}function re(F,te,Pe,Be,ze){var ie=typeof F;(ie==="undefined"||ie==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(ie){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case s:case e:ve=!0}}if(ve)return ve=F,ze=ze(ve),F=Be===""?"."+ce(ve,0):Be,b(ze)?(Pe="",F!=null&&(Pe=F.replace(j,"$&/")+"/"),re(ze,te,Pe,"",function(Ve){return Ve})):ze!=null&&(Y(ze)&&(ze=I(ze,Pe+(!ze.key||ve&&ve.key===ze.key?"":(""+ze.key).replace(j,"$&/")+"/")+F)),te.push(ze)),1;if(ve=0,Be=Be===""?".":Be+":",b(F))for(var fe=0;fe<F.length;fe++){ie=F[fe];var we=Be+ce(ie,fe);ve+=re(ie,te,Pe,we,ze)}else if(we=g(F),typeof we=="function")for(F=we.call(F),fe=0;!(ie=F.next()).done;)ie=ie.value,we=Be+ce(ie,fe++),ve+=re(ie,te,Pe,we,ze);else if(ie==="object")throw te=String(F),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return ve}function $(F,te,Pe){if(F==null)return F;var Be=[],ze=0;return re(F,Be,"","",function(ie){return te.call(Pe,ie,ze++)}),Be}function B(F){if(F._status===-1){var te=F._result;te=te(),te.then(function(Pe){(F._status===0||F._status===-1)&&(F._status=1,F._result=Pe)},function(Pe){(F._status===0||F._status===-1)&&(F._status=2,F._result=Pe)}),F._status===-1&&(F._status=0,F._result=te)}if(F._status===1)return F._result.default;throw F._result}var G={current:null},V={transition:null},q={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:V,ReactCurrentOwner:L};function ne(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:$,forEach:function(F,te,Pe){$(F,function(){te.apply(this,arguments)},Pe)},count:function(F){var te=0;return $(F,function(){te++}),te},toArray:function(F){return $(F,function(te){return te})||[]},only:function(F){if(!Y(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},wt.Component=v,wt.Fragment=t,wt.Profiler=a,wt.PureComponent=D,wt.StrictMode=r,wt.Suspense=f,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,wt.act=ne,wt.cloneElement=function(F,te,Pe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Be=E({},F.props),ze=F.key,ie=F.ref,ve=F._owner;if(te!=null){if(te.ref!==void 0&&(ie=te.ref,ve=L.current),te.key!==void 0&&(ze=""+te.key),F.type&&F.type.defaultProps)var fe=F.type.defaultProps;for(we in te)C.call(te,we)&&!k.hasOwnProperty(we)&&(Be[we]=te[we]===void 0&&fe!==void 0?fe[we]:te[we])}var we=arguments.length-2;if(we===1)Be.children=Pe;else if(1<we){fe=Array(we);for(var Ve=0;Ve<we;Ve++)fe[Ve]=arguments[Ve+2];Be.children=fe}return{$$typeof:s,type:F.type,key:ze,ref:ie,props:Be,_owner:ve}},wt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},wt.createElement=w,wt.createFactory=function(F){var te=w.bind(null,F);return te.type=F,te},wt.createRef=function(){return{current:null}},wt.forwardRef=function(F){return{$$typeof:d,render:F}},wt.isValidElement=Y,wt.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:B}},wt.memo=function(F,te){return{$$typeof:p,type:F,compare:te===void 0?null:te}},wt.startTransition=function(F){var te=V.transition;V.transition={};try{F()}finally{V.transition=te}},wt.unstable_act=ne,wt.useCallback=function(F,te){return G.current.useCallback(F,te)},wt.useContext=function(F){return G.current.useContext(F)},wt.useDebugValue=function(){},wt.useDeferredValue=function(F){return G.current.useDeferredValue(F)},wt.useEffect=function(F,te){return G.current.useEffect(F,te)},wt.useId=function(){return G.current.useId()},wt.useImperativeHandle=function(F,te,Pe){return G.current.useImperativeHandle(F,te,Pe)},wt.useInsertionEffect=function(F,te){return G.current.useInsertionEffect(F,te)},wt.useLayoutEffect=function(F,te){return G.current.useLayoutEffect(F,te)},wt.useMemo=function(F,te){return G.current.useMemo(F,te)},wt.useReducer=function(F,te,Pe){return G.current.useReducer(F,te,Pe)},wt.useRef=function(F){return G.current.useRef(F)},wt.useState=function(F){return G.current.useState(F)},wt.useSyncExternalStore=function(F,te,Pe){return G.current.useSyncExternalStore(F,te,Pe)},wt.useTransition=function(){return G.current.useTransition()},wt.version="18.3.1",wt}var Lm;function Bh(){return Lm||(Lm=1,af.exports=dx()),af.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function px(){if(Dm)return ao;Dm=1;var s=Bh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var x,_={},g=null,M=null;p!==void 0&&(g=""+p),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(M=f.ref);for(x in f)r.call(f,x)&&!l.hasOwnProperty(x)&&(_[x]=f[x]);if(d&&d.defaultProps)for(x in f=d.defaultProps,f)_[x]===void 0&&(_[x]=f[x]);return{$$typeof:e,type:d,key:g,ref:M,props:_,_owner:a.current}}return ao.Fragment=t,ao.jsx=u,ao.jsxs=u,ao}var Im;function mx(){return Im||(Im=1,sf.exports=px()),sf.exports}var U=mx(),Pl={},of={exports:{}},Qn={},lf={exports:{}},cf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function gx(){return Um||(Um=1,(function(s){function e(V,q){var ne=V.length;V.push(q);e:for(;0<ne;){var F=ne-1>>>1,te=V[F];if(0<a(te,q))V[F]=q,V[ne]=te,ne=F;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var q=V[0],ne=V.pop();if(ne!==q){V[0]=ne;e:for(var F=0,te=V.length,Pe=te>>>1;F<Pe;){var Be=2*(F+1)-1,ze=V[Be],ie=Be+1,ve=V[ie];if(0>a(ze,ne))ie<te&&0>a(ve,ze)?(V[F]=ve,V[ie]=ne,F=ie):(V[F]=ze,V[Be]=ne,F=Be);else if(ie<te&&0>a(ve,ne))V[F]=ve,V[ie]=ne,F=ie;else break e}}return q}function a(V,q){var ne=V.sortIndex-q.sortIndex;return ne!==0?ne:V.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],p=[],x=1,_=null,g=3,M=!1,E=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var q=t(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=V)r(p),q.sortIndex=q.expirationTime,e(f,q);else break;q=t(p)}}function b(V){if(R=!1,P(V),!E)if(t(f)!==null)E=!0,B(C);else{var q=t(p);q!==null&&G(b,q.startTime-V)}}function C(V,q){E=!1,R&&(R=!1,y(w),w=-1),M=!0;var ne=g;try{for(P(q),_=t(f);_!==null&&(!(_.expirationTime>q)||V&&!W());){var F=_.callback;if(typeof F=="function"){_.callback=null,g=_.priorityLevel;var te=F(_.expirationTime<=q);q=s.unstable_now(),typeof te=="function"?_.callback=te:_===t(f)&&r(f),P(q)}else r(f);_=t(f)}if(_!==null)var Pe=!0;else{var Be=t(p);Be!==null&&G(b,Be.startTime-q),Pe=!1}return Pe}finally{_=null,g=ne,M=!1}}var L=!1,k=null,w=-1,I=5,Y=-1;function W(){return!(s.unstable_now()-Y<I)}function j(){if(k!==null){var V=s.unstable_now();Y=V;var q=!0;try{q=k(!0,V)}finally{q?ce():(L=!1,k=null)}}else L=!1}var ce;if(typeof D=="function")ce=function(){D(j)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,$=re.port2;re.port1.onmessage=j,ce=function(){$.postMessage(null)}}else ce=function(){v(j,0)};function B(V){k=V,L||(L=!0,ce())}function G(V,q){w=v(function(){V(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,B(C))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(V){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var ne=g;g=q;try{return V()}finally{g=ne}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,q){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ne=g;g=V;try{return q()}finally{g=ne}},s.unstable_scheduleCallback=function(V,q,ne){var F=s.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?F+ne:F):ne=F,V){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ne+te,V={id:x++,callback:q,priorityLevel:V,startTime:ne,expirationTime:te,sortIndex:-1},ne>F?(V.sortIndex=ne,e(p,V),t(f)===null&&V===t(p)&&(R?(y(w),w=-1):R=!0,G(b,ne-F))):(V.sortIndex=te,e(f,V),E||M||(E=!0,B(C))),V},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(V){var q=g;return function(){var ne=g;g=q;try{return V.apply(this,arguments)}finally{g=ne}}}})(cf)),cf}var Fm;function vx(){return Fm||(Fm=1,lf.exports=gx()),lf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function xx(){if(Om)return Qn;Om=1;var s=Bh(),e=vx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function g(n){return f.call(_,n)?!0:f.call(x,n)?!1:p.test(n)?_[n]=!0:(x[n]=!0,!1)}function M(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,c){if(i===null||typeof i>"u"||M(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,o,c,h,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,D);v[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,D);v[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,D);v[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,o,c){var h=v.hasOwnProperty(i)?v[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,h,c)&&(o=null),c||h===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,c=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),L=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),W=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),V=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,F;function te(n){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Pe=!1;function Be(n,i){if(!n||Pe)return"";Pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var c=pe}Reflect.construct(n,[],i)}else{try{i.call()}catch(pe){c=pe}n.call(i.prototype)}else{try{throw Error()}catch(pe){c=pe}n()}}catch(pe){if(pe&&c&&typeof pe.stack=="string"){for(var h=pe.stack.split(`
`),m=c.stack.split(`
`),T=h.length-1,O=m.length-1;1<=T&&0<=O&&h[T]!==m[O];)O--;for(;1<=T&&0<=O;T--,O--)if(h[T]!==m[O]){if(T!==1||O!==1)do if(T--,O--,0>O||h[T]!==m[O]){var X=`
`+h[T].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=T&&0<=O);break}}}finally{Pe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?te(n):""}function ze(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Be(n.type,!1),n;case 11:return n=Be(n.type.render,!1),n;case 1:return n=Be(n.type,!0),n;default:return""}}function ie(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case L:return"Portal";case I:return"Profiler";case w:return"StrictMode";case ce:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case W:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case j:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $:return i=n.displayName||null,i!==null?i:ie(n.type)||"Memo";case B:i=n._payload,n=n._init;try{return ie(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function we(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=we(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ke(n){n._valueTracker||(n._valueTracker=Ve(n))}function ct(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=we(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Qe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function At(n,i){var o=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function mt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=fe(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function kt(n,i){dt(n,i);var o=fe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Je(n,i.type,o):i.hasOwnProperty("defaultValue")&&Je(n,i.type,fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Vt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Je(n,i,o){(i!=="number"||Qe(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ct=Array.isArray;function bt(n,i,o,c){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&c&&(n[o].defaultSelected=!0)}else{for(o=""+fe(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function De(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function H(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ct(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:fe(o)}}function We(n,i){var o=fe(i.value),c=fe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function gt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function N(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function S(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?N(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ee,ae=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ee.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function me(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(n){Ue.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Re[i]=Re[n]})});function ge(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Re.hasOwnProperty(n)&&Re[n]?(""+i).trim():i+"px"}function _e(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,h=ge(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,h):n[o]=h}}var Ce=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,i){if(i){if(Ce[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Fe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z=null;function he(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Se=null,Me=null,z=null;function Ee(n){if(n=Xa(n)){if(typeof Se!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Xo(i),Se(n.stateNode,n.type,i))}}function xe(n){Me?z?z.push(n):z=[n]:Me=n}function Ne(){if(Me){var n=Me,i=z;if(z=Me=null,Ee(n),i)for(n=0;n<i.length;n++)Ee(i[n])}}function Ge(n,i){return n(i)}function ye(){}var et=!1;function Ke(n,i,o){if(et)return n(i,o);et=!0;try{return Ge(n,i,o)}finally{et=!1,(Me!==null||z!==null)&&(ye(),Ne())}}function Gt(n,i){var o=n.stateNode;if(o===null)return null;var c=Xo(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Ut=!1;if(d)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Ut=!1}function di(n,i,o,c,h,m,T,O,X){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(o,pe)}catch(be){this.onError(be)}}var Yr=!1,bs=null,qr=!1,jr=null,Ac={onError:function(n){Yr=!0,bs=n}};function Ao(n,i,o,c,h,m,T,O,X){Yr=!1,bs=null,di.apply(Ac,arguments)}function Ro(n,i,o,c,h,m,T,O,X){if(Ao.apply(this,arguments),Yr){if(Yr){var pe=bs;Yr=!1,bs=null}else throw Error(t(198));qr||(qr=!0,jr=pe)}}function Fn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function As(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ta(n){if(Fn(n)!==n)throw Error(t(188))}function Co(n){var i=n.alternate;if(!i){if(i=Fn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var h=o.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){o=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===o)return Ta(h),n;if(m===c)return Ta(h),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=h,c=m;else{for(var T=!1,O=h.child;O;){if(O===o){T=!0,o=h,c=m;break}if(O===c){T=!0,c=h,o=m;break}O=O.sibling}if(!T){for(O=m.child;O;){if(O===o){T=!0,o=m,c=h;break}if(O===c){T=!0,c=m,o=h;break}O=O.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function $r(n){return n=Co(n),n!==null?ba(n):null}function ba(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ba(n);if(i!==null)return i;n=n.sibling}return null}var Kr=e.unstable_scheduleCallback,Aa=e.unstable_cancelCallback,Po=e.unstable_shouldYield,Rc=e.unstable_requestPaint,Jt=e.unstable_now,Cc=e.unstable_getCurrentPriorityLevel,Ra=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,J=e.unstable_NormalPriority,de=e.unstable_LowPriority,le=e.unstable_IdlePriority,oe=null,Oe=null;function je(n){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:vt,tt=Math.log,st=Math.LN2;function vt(n){return n>>>=0,n===0?32:31-(tt(n)/st|0)|0}var xt=64,it=4194304;function Lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wt(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,h=n.suspendedLanes,m=n.pingedLanes,T=o&268435455;if(T!==0){var O=T&~h;O!==0?c=Lt(O):(m&=T,m!==0&&(c=Lt(m)))}else T=o&~h,T!==0?c=Lt(T):m!==0&&(c=Lt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-Ie(i),h=1<<o,c|=n[o],i&=~h;return c}function Zt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Ie(m),O=1<<T,X=h[T];X===-1?((O&o)===0||(O&c)!==0)&&(h[T]=Zt(O,i)):X<=i&&(n.expiredLanes|=O),m&=~O}}function on(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xe(){var n=xt;return xt<<=1,(xt&4194240)===0&&(xt=64),n}function Sn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Mt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ie(i),n[i]=o}function Xn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-Ie(o),m=1<<h;i[h]=0,c[h]=-1,n[h]=-1,o&=~m}}function Yn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Ie(o),h=1<<c;h&i|n[c]&i&&(n[c]|=i),o&=~h}}var Et=0;function Zi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ft,qt,wi,Bt,Ti,Fi=!1,Zr=[],gr=null,vr=null,xr=null,Ca=new Map,Pa=new Map,_r=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(n,i){switch(n){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Ca.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(i.pointerId)}}function Na(n,i,o,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Xa(i),i!==null&&qt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Ug(n,i,o,c,h){switch(i){case"focusin":return gr=Na(gr,n,i,o,c,h),!0;case"dragenter":return vr=Na(vr,n,i,o,c,h),!0;case"mouseover":return xr=Na(xr,n,i,o,c,h),!0;case"pointerover":var m=h.pointerId;return Ca.set(m,Na(Ca.get(m)||null,n,i,o,c,h)),!0;case"gotpointercapture":return m=h.pointerId,Pa.set(m,Na(Pa.get(m)||null,n,i,o,c,h)),!0}return!1}function md(n){var i=Qr(n.target);if(i!==null){var o=Fn(i);if(o!==null){if(i=o.tag,i===13){if(i=As(o),i!==null){n.blockedOn=i,Ti(n.priority,function(){wi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function No(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Nc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Z=c,o.target.dispatchEvent(c),Z=null}else return i=Xa(o),i!==null&&qt(i),n.blockedOn=o,!1;i.shift()}return!0}function gd(n,i,o){No(n)&&o.delete(i)}function Fg(){Fi=!1,gr!==null&&No(gr)&&(gr=null),vr!==null&&No(vr)&&(vr=null),xr!==null&&No(xr)&&(xr=null),Ca.forEach(gd),Pa.forEach(gd)}function La(n,i){n.blockedOn===i&&(n.blockedOn=null,Fi||(Fi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fg)))}function Da(n){function i(h){return La(h,n)}if(0<Zr.length){La(Zr[0],n);for(var o=1;o<Zr.length;o++){var c=Zr[o];c.blockedOn===n&&(c.blockedOn=null)}}for(gr!==null&&La(gr,n),vr!==null&&La(vr,n),xr!==null&&La(xr,n),Ca.forEach(i),Pa.forEach(i),o=0;o<_r.length;o++)c=_r[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<_r.length&&(o=_r[0],o.blockedOn===null);)md(o),o.blockedOn===null&&_r.shift()}var Rs=b.ReactCurrentBatchConfig,Lo=!0;function Og(n,i,o,c){var h=Et,m=Rs.transition;Rs.transition=null;try{Et=1,Pc(n,i,o,c)}finally{Et=h,Rs.transition=m}}function kg(n,i,o,c){var h=Et,m=Rs.transition;Rs.transition=null;try{Et=4,Pc(n,i,o,c)}finally{Et=h,Rs.transition=m}}function Pc(n,i,o,c){if(Lo){var h=Nc(n,i,o,c);if(h===null)jc(n,i,c,Do,o),pd(n,c);else if(Ug(h,n,i,o,c))c.stopPropagation();else if(pd(n,c),i&4&&-1<Ig.indexOf(n)){for(;h!==null;){var m=Xa(h);if(m!==null&&Ft(m),m=Nc(n,i,o,c),m===null&&jc(n,i,c,Do,o),m===h)break;h=m}h!==null&&c.stopPropagation()}else jc(n,i,c,null,o)}}var Do=null;function Nc(n,i,o,c){if(Do=null,n=he(c),n=Qr(n),n!==null)if(i=Fn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=As(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Do=n,null}function vd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cc()){case Ra:return 1;case A:return 4;case J:case de:return 16;case le:return 536870912;default:return 16}default:return 16}}var yr=null,Lc=null,Io=null;function xd(){if(Io)return Io;var n,i=Lc,o=i.length,c,h="value"in yr?yr.value:yr.textContent,m=h.length;for(n=0;n<o&&i[n]===h[n];n++);var T=o-n;for(c=1;c<=T&&i[o-c]===h[m-c];c++);return Io=h.slice(n,1<c?1-c:void 0)}function Uo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Fo(){return!0}function _d(){return!1}function ti(n){function i(o,c,h,m,T){this._reactName=o,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fo:_d,this.isPropagationStopped=_d,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),i}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=ti(Cs),Ia=ne({},Cs,{view:0,detail:0}),zg=ti(Ia),Ic,Uc,Ua,Oo=ne({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ua&&(Ua&&n.type==="mousemove"?(Ic=n.screenX-Ua.screenX,Uc=n.screenY-Ua.screenY):Uc=Ic=0,Ua=n),Ic)},movementY:function(n){return"movementY"in n?n.movementY:Uc}}),yd=ti(Oo),Bg=ne({},Oo,{dataTransfer:0}),Vg=ti(Bg),Gg=ne({},Ia,{relatedTarget:0}),Fc=ti(Gg),Hg=ne({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Wg=ti(Hg),Xg=ne({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Yg=ti(Xg),qg=ne({},Cs,{data:0}),Sd=ti(qg),jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Kg[n])?!!i[n]:!1}function Oc(){return Zg}var Qg=ne({},Ia,{key:function(n){if(n.key){var i=jg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Uo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$g[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(n){return n.type==="keypress"?Uo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Uo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Jg=ti(Qg),ev=ne({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=ti(ev),tv=ne({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),nv=ti(tv),iv=ne({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=ti(iv),sv=ne({},Oo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),av=ti(sv),ov=[9,13,27,32],kc=d&&"CompositionEvent"in window,Fa=null;d&&"documentMode"in document&&(Fa=document.documentMode);var lv=d&&"TextEvent"in window&&!Fa,Ed=d&&(!kc||Fa&&8<Fa&&11>=Fa),wd=" ",Td=!1;function bd(n,i){switch(n){case"keyup":return ov.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ps=!1;function cv(n,i){switch(n){case"compositionend":return Ad(i);case"keypress":return i.which!==32?null:(Td=!0,wd);case"textInput":return n=i.data,n===wd&&Td?null:n;default:return null}}function uv(n,i){if(Ps)return n==="compositionend"||!kc&&bd(n,i)?(n=xd(),Io=Lc=yr=null,Ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ed&&i.locale!=="ko"?null:i.data;default:return null}}var fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!fv[n.type]:i==="textarea"}function Cd(n,i,o,c){xe(c),i=Go(i,"onChange"),0<i.length&&(o=new Dc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Oa=null,ka=null;function hv(n){qd(n,0)}function ko(n){var i=Us(n);if(ct(i))return n}function dv(n,i){if(n==="change")return i}var Pd=!1;if(d){var zc;if(d){var Bc="oninput"in document;if(!Bc){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),Bc=typeof Nd.oninput=="function"}zc=Bc}else zc=!1;Pd=zc&&(!document.documentMode||9<document.documentMode)}function Ld(){Oa&&(Oa.detachEvent("onpropertychange",Dd),ka=Oa=null)}function Dd(n){if(n.propertyName==="value"&&ko(ka)){var i=[];Cd(i,ka,n,he(n)),Ke(hv,i)}}function pv(n,i,o){n==="focusin"?(Ld(),Oa=i,ka=o,Oa.attachEvent("onpropertychange",Dd)):n==="focusout"&&Ld()}function mv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ko(ka)}function gv(n,i){if(n==="click")return ko(i)}function vv(n,i){if(n==="input"||n==="change")return ko(i)}function xv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var bi=typeof Object.is=="function"?Object.is:xv;function za(n,i){if(bi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var h=o[c];if(!f.call(i,h)||!bi(n[h],i[h]))return!1}return!0}function Id(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ud(n,i){var o=Id(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Id(o)}}function Fd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Fd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Od(){for(var n=window,i=Qe();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Qe(n.document)}return i}function Vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function _v(n){var i=Od(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Fd(o.ownerDocument.documentElement,o)){if(c!==null&&Vc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!n.extend&&m>c&&(h=c,c=m,m=h),h=Ud(o,m);var T=Ud(o,c);h&&T&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yv=d&&"documentMode"in document&&11>=document.documentMode,Ns=null,Gc=null,Ba=null,Hc=!1;function kd(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Hc||Ns==null||Ns!==Qe(c)||(c=Ns,"selectionStart"in c&&Vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ba&&za(Ba,c)||(Ba=c,c=Go(Gc,"onSelect"),0<c.length&&(i=new Dc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Ns)))}function zo(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ls={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},Wc={},zd={};d&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Bo(n){if(Wc[n])return Wc[n];if(!Ls[n])return n;var i=Ls[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in zd)return Wc[n]=i[o];return n}var Bd=Bo("animationend"),Vd=Bo("animationiteration"),Gd=Bo("animationstart"),Hd=Bo("transitionend"),Wd=new Map,Xd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,i){Wd.set(n,i),l(i,[n])}for(var Xc=0;Xc<Xd.length;Xc++){var Yc=Xd[Xc],Sv=Yc.toLowerCase(),Mv=Yc[0].toUpperCase()+Yc.slice(1);Sr(Sv,"on"+Mv)}Sr(Bd,"onAnimationEnd"),Sr(Vd,"onAnimationIteration"),Sr(Gd,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(Hd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function Yd(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Ro(c,i,void 0,n),n.currentTarget=null}function qd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var O=c[T],X=O.instance,pe=O.currentTarget;if(O=O.listener,X!==m&&h.isPropagationStopped())break e;Yd(h,O,pe),m=X}else for(T=0;T<c.length;T++){if(O=c[T],X=O.instance,pe=O.currentTarget,O=O.listener,X!==m&&h.isPropagationStopped())break e;Yd(h,O,pe),m=X}}}if(qr)throw n=jr,qr=!1,jr=null,n}function jt(n,i){var o=i[eu];o===void 0&&(o=i[eu]=new Set);var c=n+"__bubble";o.has(c)||(jd(i,n,2,!1),o.add(c))}function qc(n,i,o){var c=0;i&&(c|=4),jd(o,n,c,i)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Ga(n){if(!n[Vo]){n[Vo]=!0,r.forEach(function(o){o!=="selectionchange"&&(Ev.has(o)||qc(o,!1,n),qc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Vo]||(i[Vo]=!0,qc("selectionchange",!1,i))}}function jd(n,i,o,c){switch(vd(i)){case 1:var h=Og;break;case 4:h=kg;break;default:h=Pc}o=h.bind(null,i,o,n),h=void 0,!Ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function jc(n,i,o,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var O=c.stateNode.containerInfo;if(O===h||O.nodeType===8&&O.parentNode===h)break;if(T===4)for(T=c.return;T!==null;){var X=T.tag;if((X===3||X===4)&&(X=T.stateNode.containerInfo,X===h||X.nodeType===8&&X.parentNode===h))return;T=T.return}for(;O!==null;){if(T=Qr(O),T===null)return;if(X=T.tag,X===5||X===6){c=m=T;continue e}O=O.parentNode}}c=c.return}Ke(function(){var pe=m,be=he(o),Ae=[];e:{var Te=Wd.get(n);if(Te!==void 0){var Ye=Dc,Ze=n;switch(n){case"keypress":if(Uo(o)===0)break e;case"keydown":case"keyup":Ye=Jg;break;case"focusin":Ze="focus",Ye=Fc;break;case"focusout":Ze="blur",Ye=Fc;break;case"beforeblur":case"afterblur":Ye=Fc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=Vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=nv;break;case Bd:case Vd:case Gd:Ye=Wg;break;case Hd:Ye=rv;break;case"scroll":Ye=zg;break;case"wheel":Ye=av;break;case"copy":case"cut":case"paste":Ye=Yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=Md}var nt=(i&4)!==0,an=!nt&&n==="scroll",se=nt?Te!==null?Te+"Capture":null:Te;nt=[];for(var K=pe,ue;K!==null;){ue=K;var Le=ue.stateNode;if(ue.tag===5&&Le!==null&&(ue=Le,se!==null&&(Le=Gt(K,se),Le!=null&&nt.push(Ha(K,Le,ue)))),an)break;K=K.return}0<nt.length&&(Te=new Ye(Te,Ze,null,o,be),Ae.push({event:Te,listeners:nt}))}}if((i&7)===0){e:{if(Te=n==="mouseover"||n==="pointerover",Ye=n==="mouseout"||n==="pointerout",Te&&o!==Z&&(Ze=o.relatedTarget||o.fromElement)&&(Qr(Ze)||Ze[Qi]))break e;if((Ye||Te)&&(Te=be.window===be?be:(Te=be.ownerDocument)?Te.defaultView||Te.parentWindow:window,Ye?(Ze=o.relatedTarget||o.toElement,Ye=pe,Ze=Ze?Qr(Ze):null,Ze!==null&&(an=Fn(Ze),Ze!==an||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Ye=null,Ze=pe),Ye!==Ze)){if(nt=yd,Le="onMouseLeave",se="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(nt=Md,Le="onPointerLeave",se="onPointerEnter",K="pointer"),an=Ye==null?Te:Us(Ye),ue=Ze==null?Te:Us(Ze),Te=new nt(Le,K+"leave",Ye,o,be),Te.target=an,Te.relatedTarget=ue,Le=null,Qr(be)===pe&&(nt=new nt(se,K+"enter",Ze,o,be),nt.target=ue,nt.relatedTarget=an,Le=nt),an=Le,Ye&&Ze)t:{for(nt=Ye,se=Ze,K=0,ue=nt;ue;ue=Ds(ue))K++;for(ue=0,Le=se;Le;Le=Ds(Le))ue++;for(;0<K-ue;)nt=Ds(nt),K--;for(;0<ue-K;)se=Ds(se),ue--;for(;K--;){if(nt===se||se!==null&&nt===se.alternate)break t;nt=Ds(nt),se=Ds(se)}nt=null}else nt=null;Ye!==null&&$d(Ae,Te,Ye,nt,!1),Ze!==null&&an!==null&&$d(Ae,an,Ze,nt,!0)}}e:{if(Te=pe?Us(pe):window,Ye=Te.nodeName&&Te.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&Te.type==="file")var rt=dv;else if(Rd(Te))if(Pd)rt=vv;else{rt=mv;var ot=pv}else(Ye=Te.nodeName)&&Ye.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(rt=gv);if(rt&&(rt=rt(n,pe))){Cd(Ae,rt,o,be);break e}ot&&ot(n,Te,pe),n==="focusout"&&(ot=Te._wrapperState)&&ot.controlled&&Te.type==="number"&&Je(Te,"number",Te.value)}switch(ot=pe?Us(pe):window,n){case"focusin":(Rd(ot)||ot.contentEditable==="true")&&(Ns=ot,Gc=pe,Ba=null);break;case"focusout":Ba=Gc=Ns=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,kd(Ae,o,be);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":kd(Ae,o,be)}var lt;if(kc)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Ps?bd(n,o)&&(ht="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ht="onCompositionStart");ht&&(Ed&&o.locale!=="ko"&&(Ps||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Ps&&(lt=xd()):(yr=be,Lc="value"in yr?yr.value:yr.textContent,Ps=!0)),ot=Go(pe,ht),0<ot.length&&(ht=new Sd(ht,n,null,o,be),Ae.push({event:ht,listeners:ot}),lt?ht.data=lt:(lt=Ad(o),lt!==null&&(ht.data=lt)))),(lt=lv?cv(n,o):uv(n,o))&&(pe=Go(pe,"onBeforeInput"),0<pe.length&&(be=new Sd("onBeforeInput","beforeinput",null,o,be),Ae.push({event:be,listeners:pe}),be.data=lt))}qd(Ae,i)})}function Ha(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Go(n,i){for(var o=i+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=Gt(n,o),m!=null&&c.unshift(Ha(n,m,h)),m=Gt(n,i),m!=null&&c.push(Ha(n,m,h))),n=n.return}return c}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $d(n,i,o,c,h){for(var m=i._reactName,T=[];o!==null&&o!==c;){var O=o,X=O.alternate,pe=O.stateNode;if(X!==null&&X===c)break;O.tag===5&&pe!==null&&(O=pe,h?(X=Gt(o,m),X!=null&&T.unshift(Ha(o,X,O))):h||(X=Gt(o,m),X!=null&&T.push(Ha(o,X,O)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var wv=/\r\n?/g,Tv=/\u0000|\uFFFD/g;function Kd(n){return(typeof n=="string"?n:""+n).replace(wv,`
`).replace(Tv,"")}function Ho(n,i,o){if(i=Kd(i),Kd(n)!==i&&o)throw Error(t(425))}function Wo(){}var $c=null,Kc=null;function Zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,bv=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,Av=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(n){return Zd.resolve(null).then(n).catch(Rv)}:Qc;function Rv(n){setTimeout(function(){throw n})}function Jc(n,i){var o=i,c=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(c===0){n.removeChild(h),Da(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=h}while(o);Da(i)}function Mr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Qd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Oi="__reactFiber$"+Is,Wa="__reactProps$"+Is,Qi="__reactContainer$"+Is,eu="__reactEvents$"+Is,Cv="__reactListeners$"+Is,Pv="__reactHandles$"+Is;function Qr(n){var i=n[Oi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Qi]||o[Oi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Qd(n);n!==null;){if(o=n[Oi])return o;n=Qd(n)}return i}n=o,o=n.parentNode}return null}function Xa(n){return n=n[Oi]||n[Qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xo(n){return n[Wa]||null}var tu=[],Fs=-1;function Er(n){return{current:n}}function $t(n){0>Fs||(n.current=tu[Fs],tu[Fs]=null,Fs--)}function Xt(n,i){Fs++,tu[Fs]=n.current,n.current=i}var wr={},An=Er(wr),qn=Er(!1),Jr=wr;function Os(n,i){var o=n.type.contextTypes;if(!o)return wr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in o)h[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function jn(n){return n=n.childContextTypes,n!=null}function Yo(){$t(qn),$t(An)}function Jd(n,i,o){if(An.current!==wr)throw Error(t(168));Xt(An,i),Xt(qn,o)}function ep(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ve(n)||"Unknown",h));return ne({},o,c)}function qo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||wr,Jr=An.current,Xt(An,n),Xt(qn,qn.current),!0}function tp(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=ep(n,i,Jr),c.__reactInternalMemoizedMergedChildContext=n,$t(qn),$t(An),Xt(An,n)):$t(qn),Xt(qn,o)}var Ji=null,jo=!1,nu=!1;function np(n){Ji===null?Ji=[n]:Ji.push(n)}function Nv(n){jo=!0,np(n)}function Tr(){if(!nu&&Ji!==null){nu=!0;var n=0,i=Et;try{var o=Ji;for(Et=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Ji=null,jo=!1}catch(h){throw Ji!==null&&(Ji=Ji.slice(n+1)),Kr(Ra,Tr),h}finally{Et=i,nu=!1}}return null}var ks=[],zs=0,$o=null,Ko=0,pi=[],mi=0,es=null,er=1,tr="";function ts(n,i){ks[zs++]=Ko,ks[zs++]=$o,$o=n,Ko=i}function ip(n,i,o){pi[mi++]=er,pi[mi++]=tr,pi[mi++]=es,es=n;var c=er;n=tr;var h=32-Ie(c)-1;c&=~(1<<h),o+=1;var m=32-Ie(i)+h;if(30<m){var T=h-h%5;m=(c&(1<<T)-1).toString(32),c>>=T,h-=T,er=1<<32-Ie(i)+h|o<<h|c,tr=m+n}else er=1<<m|o<<h|c,tr=n}function iu(n){n.return!==null&&(ts(n,1),ip(n,1,0))}function ru(n){for(;n===$o;)$o=ks[--zs],ks[zs]=null,Ko=ks[--zs],ks[zs]=null;for(;n===es;)es=pi[--mi],pi[mi]=null,tr=pi[--mi],pi[mi]=null,er=pi[--mi],pi[mi]=null}var ni=null,ii=null,Qt=!1,Ai=null;function rp(n,i){var o=_i(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function sp(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ni=n,ii=Mr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ni=n,ii=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=es!==null?{id:er,overflow:tr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=_i(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ni=n,ii=null,!0):!1;default:return!1}}function su(n){return(n.mode&1)!==0&&(n.flags&128)===0}function au(n){if(Qt){var i=ii;if(i){var o=i;if(!sp(n,i)){if(su(n))throw Error(t(418));i=Mr(o.nextSibling);var c=ni;i&&sp(n,i)?rp(c,o):(n.flags=n.flags&-4097|2,Qt=!1,ni=n)}}else{if(su(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,ni=n}}}function ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ni=n}function Zo(n){if(n!==ni)return!1;if(!Qt)return ap(n),Qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Zc(n.type,n.memoizedProps)),i&&(i=ii)){if(su(n))throw op(),Error(t(418));for(;i;)rp(n,i),i=Mr(i.nextSibling)}if(ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ii=Mr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ii=null}}else ii=ni?Mr(n.stateNode.nextSibling):null;return!0}function op(){for(var n=ii;n;)n=Mr(n.nextSibling)}function Bs(){ii=ni=null,Qt=!1}function ou(n){Ai===null?Ai=[n]:Ai.push(n)}var Lv=b.ReactCurrentBatchConfig;function Ya(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var h=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var O=h.refs;T===null?delete O[m]:O[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Qo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function lp(n){var i=n._init;return i(n._payload)}function cp(n){function i(se,K){if(n){var ue=se.deletions;ue===null?(se.deletions=[K],se.flags|=16):ue.push(K)}}function o(se,K){if(!n)return null;for(;K!==null;)i(se,K),K=K.sibling;return null}function c(se,K){for(se=new Map;K!==null;)K.key!==null?se.set(K.key,K):se.set(K.index,K),K=K.sibling;return se}function h(se,K){return se=Dr(se,K),se.index=0,se.sibling=null,se}function m(se,K,ue){return se.index=ue,n?(ue=se.alternate,ue!==null?(ue=ue.index,ue<K?(se.flags|=2,K):ue):(se.flags|=2,K)):(se.flags|=1048576,K)}function T(se){return n&&se.alternate===null&&(se.flags|=2),se}function O(se,K,ue,Le){return K===null||K.tag!==6?(K=Qu(ue,se.mode,Le),K.return=se,K):(K=h(K,ue),K.return=se,K)}function X(se,K,ue,Le){var rt=ue.type;return rt===k?be(se,K,ue.props.children,Le,ue.key):K!==null&&(K.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===B&&lp(rt)===K.type)?(Le=h(K,ue.props),Le.ref=Ya(se,K,ue),Le.return=se,Le):(Le=Ml(ue.type,ue.key,ue.props,null,se.mode,Le),Le.ref=Ya(se,K,ue),Le.return=se,Le)}function pe(se,K,ue,Le){return K===null||K.tag!==4||K.stateNode.containerInfo!==ue.containerInfo||K.stateNode.implementation!==ue.implementation?(K=Ju(ue,se.mode,Le),K.return=se,K):(K=h(K,ue.children||[]),K.return=se,K)}function be(se,K,ue,Le,rt){return K===null||K.tag!==7?(K=cs(ue,se.mode,Le,rt),K.return=se,K):(K=h(K,ue),K.return=se,K)}function Ae(se,K,ue){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Qu(""+K,se.mode,ue),K.return=se,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case C:return ue=Ml(K.type,K.key,K.props,null,se.mode,ue),ue.ref=Ya(se,null,K),ue.return=se,ue;case L:return K=Ju(K,se.mode,ue),K.return=se,K;case B:var Le=K._init;return Ae(se,Le(K._payload),ue)}if(Ct(K)||q(K))return K=cs(K,se.mode,ue,null),K.return=se,K;Qo(se,K)}return null}function Te(se,K,ue,Le){var rt=K!==null?K.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return rt!==null?null:O(se,K,""+ue,Le);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case C:return ue.key===rt?X(se,K,ue,Le):null;case L:return ue.key===rt?pe(se,K,ue,Le):null;case B:return rt=ue._init,Te(se,K,rt(ue._payload),Le)}if(Ct(ue)||q(ue))return rt!==null?null:be(se,K,ue,Le,null);Qo(se,ue)}return null}function Ye(se,K,ue,Le,rt){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return se=se.get(ue)||null,O(K,se,""+Le,rt);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case C:return se=se.get(Le.key===null?ue:Le.key)||null,X(K,se,Le,rt);case L:return se=se.get(Le.key===null?ue:Le.key)||null,pe(K,se,Le,rt);case B:var ot=Le._init;return Ye(se,K,ue,ot(Le._payload),rt)}if(Ct(Le)||q(Le))return se=se.get(ue)||null,be(K,se,Le,rt,null);Qo(K,Le)}return null}function Ze(se,K,ue,Le){for(var rt=null,ot=null,lt=K,ht=K=0,xn=null;lt!==null&&ht<ue.length;ht++){lt.index>ht?(xn=lt,lt=null):xn=lt.sibling;var It=Te(se,lt,ue[ht],Le);if(It===null){lt===null&&(lt=xn);break}n&&lt&&It.alternate===null&&i(se,lt),K=m(It,K,ht),ot===null?rt=It:ot.sibling=It,ot=It,lt=xn}if(ht===ue.length)return o(se,lt),Qt&&ts(se,ht),rt;if(lt===null){for(;ht<ue.length;ht++)lt=Ae(se,ue[ht],Le),lt!==null&&(K=m(lt,K,ht),ot===null?rt=lt:ot.sibling=lt,ot=lt);return Qt&&ts(se,ht),rt}for(lt=c(se,lt);ht<ue.length;ht++)xn=Ye(lt,se,ht,ue[ht],Le),xn!==null&&(n&&xn.alternate!==null&&lt.delete(xn.key===null?ht:xn.key),K=m(xn,K,ht),ot===null?rt=xn:ot.sibling=xn,ot=xn);return n&&lt.forEach(function(Ir){return i(se,Ir)}),Qt&&ts(se,ht),rt}function nt(se,K,ue,Le){var rt=q(ue);if(typeof rt!="function")throw Error(t(150));if(ue=rt.call(ue),ue==null)throw Error(t(151));for(var ot=rt=null,lt=K,ht=K=0,xn=null,It=ue.next();lt!==null&&!It.done;ht++,It=ue.next()){lt.index>ht?(xn=lt,lt=null):xn=lt.sibling;var Ir=Te(se,lt,It.value,Le);if(Ir===null){lt===null&&(lt=xn);break}n&&lt&&Ir.alternate===null&&i(se,lt),K=m(Ir,K,ht),ot===null?rt=Ir:ot.sibling=Ir,ot=Ir,lt=xn}if(It.done)return o(se,lt),Qt&&ts(se,ht),rt;if(lt===null){for(;!It.done;ht++,It=ue.next())It=Ae(se,It.value,Le),It!==null&&(K=m(It,K,ht),ot===null?rt=It:ot.sibling=It,ot=It);return Qt&&ts(se,ht),rt}for(lt=c(se,lt);!It.done;ht++,It=ue.next())It=Ye(lt,se,ht,It.value,Le),It!==null&&(n&&It.alternate!==null&&lt.delete(It.key===null?ht:It.key),K=m(It,K,ht),ot===null?rt=It:ot.sibling=It,ot=It);return n&&lt.forEach(function(fx){return i(se,fx)}),Qt&&ts(se,ht),rt}function an(se,K,ue,Le){if(typeof ue=="object"&&ue!==null&&ue.type===k&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case C:e:{for(var rt=ue.key,ot=K;ot!==null;){if(ot.key===rt){if(rt=ue.type,rt===k){if(ot.tag===7){o(se,ot.sibling),K=h(ot,ue.props.children),K.return=se,se=K;break e}}else if(ot.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===B&&lp(rt)===ot.type){o(se,ot.sibling),K=h(ot,ue.props),K.ref=Ya(se,ot,ue),K.return=se,se=K;break e}o(se,ot);break}else i(se,ot);ot=ot.sibling}ue.type===k?(K=cs(ue.props.children,se.mode,Le,ue.key),K.return=se,se=K):(Le=Ml(ue.type,ue.key,ue.props,null,se.mode,Le),Le.ref=Ya(se,K,ue),Le.return=se,se=Le)}return T(se);case L:e:{for(ot=ue.key;K!==null;){if(K.key===ot)if(K.tag===4&&K.stateNode.containerInfo===ue.containerInfo&&K.stateNode.implementation===ue.implementation){o(se,K.sibling),K=h(K,ue.children||[]),K.return=se,se=K;break e}else{o(se,K);break}else i(se,K);K=K.sibling}K=Ju(ue,se.mode,Le),K.return=se,se=K}return T(se);case B:return ot=ue._init,an(se,K,ot(ue._payload),Le)}if(Ct(ue))return Ze(se,K,ue,Le);if(q(ue))return nt(se,K,ue,Le);Qo(se,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,K!==null&&K.tag===6?(o(se,K.sibling),K=h(K,ue),K.return=se,se=K):(o(se,K),K=Qu(ue,se.mode,Le),K.return=se,se=K),T(se)):o(se,K)}return an}var Vs=cp(!0),up=cp(!1),Jo=Er(null),el=null,Gs=null,lu=null;function cu(){lu=Gs=el=null}function uu(n){var i=Jo.current;$t(Jo),n._currentValue=i}function fu(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Hs(n,i){el=n,lu=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&($n=!0),n.firstContext=null)}function gi(n){var i=n._currentValue;if(lu!==n)if(n={context:n,memoizedValue:i,next:null},Gs===null){if(el===null)throw Error(t(308));Gs=n,el.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return i}var ns=null;function hu(n){ns===null?ns=[n]:ns.push(n)}function fp(n,i,o,c){var h=i.interleaved;return h===null?(o.next=o,hu(i)):(o.next=h.next,h.next=o),i.interleaved=o,nr(n,c)}function nr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var br=!1;function du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ir(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ar(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Dt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,nr(n,o)}return h=c.interleaved,h===null?(i.next=i,hu(c)):(i.next=h.next,h.next=i),c.interleaved=i,nr(n,o)}function tl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Yn(n,o)}}function dp(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var h=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?h=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?h=m=i:m=m.next=i}else h=m=i;o={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function nl(n,i,o,c){var h=n.updateQueue;br=!1;var m=h.firstBaseUpdate,T=h.lastBaseUpdate,O=h.shared.pending;if(O!==null){h.shared.pending=null;var X=O,pe=X.next;X.next=null,T===null?m=pe:T.next=pe,T=X;var be=n.alternate;be!==null&&(be=be.updateQueue,O=be.lastBaseUpdate,O!==T&&(O===null?be.firstBaseUpdate=pe:O.next=pe,be.lastBaseUpdate=X))}if(m!==null){var Ae=h.baseState;T=0,be=pe=X=null,O=m;do{var Te=O.lane,Ye=O.eventTime;if((c&Te)===Te){be!==null&&(be=be.next={eventTime:Ye,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ze=n,nt=O;switch(Te=i,Ye=o,nt.tag){case 1:if(Ze=nt.payload,typeof Ze=="function"){Ae=Ze.call(Ye,Ae,Te);break e}Ae=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=nt.payload,Te=typeof Ze=="function"?Ze.call(Ye,Ae,Te):Ze,Te==null)break e;Ae=ne({},Ae,Te);break e;case 2:br=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Te=h.effects,Te===null?h.effects=[O]:Te.push(O))}else Ye={eventTime:Ye,lane:Te,tag:O.tag,payload:O.payload,callback:O.callback,next:null},be===null?(pe=be=Ye,X=Ae):be=be.next=Ye,T|=Te;if(O=O.next,O===null){if(O=h.shared.pending,O===null)break;Te=O,O=Te.next,Te.next=null,h.lastBaseUpdate=Te,h.shared.pending=null}}while(!0);if(be===null&&(X=Ae),h.baseState=X,h.firstBaseUpdate=pe,h.lastBaseUpdate=be,i=h.shared.interleaved,i!==null){h=i;do T|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);ss|=T,n.lanes=T,n.memoizedState=Ae}}function pp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=o,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var qa={},ki=Er(qa),ja=Er(qa),$a=Er(qa);function is(n){if(n===qa)throw Error(t(174));return n}function pu(n,i){switch(Xt($a,i),Xt(ja,n),Xt(ki,qa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:S(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=S(i,n)}$t(ki),Xt(ki,i)}function Ws(){$t(ki),$t(ja),$t($a)}function mp(n){is($a.current);var i=is(ki.current),o=S(i,n.type);i!==o&&(Xt(ja,n),Xt(ki,o))}function mu(n){ja.current===n&&($t(ki),$t(ja))}var en=Er(0);function il(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var gu=[];function vu(){for(var n=0;n<gu.length;n++)gu[n]._workInProgressVersionPrimary=null;gu.length=0}var rl=b.ReactCurrentDispatcher,xu=b.ReactCurrentBatchConfig,rs=0,tn=null,fn=null,gn=null,sl=!1,Ka=!1,Za=0,Dv=0;function Rn(){throw Error(t(321))}function _u(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!bi(n[o],i[o]))return!1;return!0}function yu(n,i,o,c,h,m){if(rs=m,tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,rl.current=n===null||n.memoizedState===null?Ov:kv,n=o(c,h),Ka){m=0;do{if(Ka=!1,Za=0,25<=m)throw Error(t(301));m+=1,gn=fn=null,i.updateQueue=null,rl.current=zv,n=o(c,h)}while(Ka)}if(rl.current=ll,i=fn!==null&&fn.next!==null,rs=0,gn=fn=tn=null,sl=!1,i)throw Error(t(300));return n}function Su(){var n=Za!==0;return Za=0,n}function zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?tn.memoizedState=gn=n:gn=gn.next=n,gn}function vi(){if(fn===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var i=gn===null?tn.memoizedState:gn.next;if(i!==null)gn=i,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},gn===null?tn.memoizedState=gn=n:gn=gn.next=n}return gn}function Qa(n,i){return typeof i=="function"?i(n):i}function Mu(n){var i=vi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=fn,h=c.baseQueue,m=o.pending;if(m!==null){if(h!==null){var T=h.next;h.next=m.next,m.next=T}c.baseQueue=h=m,o.pending=null}if(h!==null){m=h.next,c=c.baseState;var O=T=null,X=null,pe=m;do{var be=pe.lane;if((rs&be)===be)X!==null&&(X=X.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),c=pe.hasEagerState?pe.eagerState:n(c,pe.action);else{var Ae={lane:be,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};X===null?(O=X=Ae,T=c):X=X.next=Ae,tn.lanes|=be,ss|=be}pe=pe.next}while(pe!==null&&pe!==m);X===null?T=c:X.next=O,bi(c,i.memoizedState)||($n=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=X,o.lastRenderedState=c}if(n=o.interleaved,n!==null){h=n;do m=h.lane,tn.lanes|=m,ss|=m,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Eu(n){var i=vi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,h=o.pending,m=i.memoizedState;if(h!==null){o.pending=null;var T=h=h.next;do m=n(m,T.action),T=T.next;while(T!==h);bi(m,i.memoizedState)||($n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function gp(){}function vp(n,i){var o=tn,c=vi(),h=i(),m=!bi(c.memoizedState,h);if(m&&(c.memoizedState=h,$n=!0),c=c.queue,wu(yp.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,Ja(9,_p.bind(null,o,c,h,i),void 0,null),vn===null)throw Error(t(349));(rs&30)!==0||xp(o,i,h)}return h}function xp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function _p(n,i,o,c){i.value=o,i.getSnapshot=c,Sp(i)&&Mp(n)}function yp(n,i,o){return o(function(){Sp(i)&&Mp(n)})}function Sp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!bi(n,o)}catch{return!0}}function Mp(n){var i=nr(n,1);i!==null&&Ni(i,n,1,-1)}function Ep(n){var i=zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:n},i.queue=n,n=n.dispatch=Fv.bind(null,tn,n),[i.memoizedState,n]}function Ja(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function wp(){return vi().memoizedState}function al(n,i,o,c){var h=zi();tn.flags|=n,h.memoizedState=Ja(1|i,o,void 0,c===void 0?null:c)}function ol(n,i,o,c){var h=vi();c=c===void 0?null:c;var m=void 0;if(fn!==null){var T=fn.memoizedState;if(m=T.destroy,c!==null&&_u(c,T.deps)){h.memoizedState=Ja(i,o,m,c);return}}tn.flags|=n,h.memoizedState=Ja(1|i,o,m,c)}function Tp(n,i){return al(8390656,8,n,i)}function wu(n,i){return ol(2048,8,n,i)}function bp(n,i){return ol(4,2,n,i)}function Ap(n,i){return ol(4,4,n,i)}function Rp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Cp(n,i,o){return o=o!=null?o.concat([n]):null,ol(4,4,Rp.bind(null,i,n),o)}function Tu(){}function Pp(n,i){var o=vi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&_u(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Np(n,i){var o=vi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&_u(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Lp(n,i,o){return(rs&21)===0?(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=o):(bi(o,i)||(o=Xe(),tn.lanes|=o,ss|=o,n.baseState=!0),i)}function Iv(n,i){var o=Et;Et=o!==0&&4>o?o:4,n(!0);var c=xu.transition;xu.transition={};try{n(!1),i()}finally{Et=o,xu.transition=c}}function Dp(){return vi().memoizedState}function Uv(n,i,o){var c=Nr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Ip(n))Up(i,o);else if(o=fp(n,i,o,c),o!==null){var h=kn();Ni(o,n,c,h),Fp(o,i,c)}}function Fv(n,i,o){var c=Nr(n),h={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ip(n))Up(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,O=m(T,o);if(h.hasEagerState=!0,h.eagerState=O,bi(O,T)){var X=i.interleaved;X===null?(h.next=h,hu(i)):(h.next=X.next,X.next=h),i.interleaved=h;return}}catch{}finally{}o=fp(n,i,h,c),o!==null&&(h=kn(),Ni(o,n,c,h),Fp(o,i,c))}}function Ip(n){var i=n.alternate;return n===tn||i!==null&&i===tn}function Up(n,i){Ka=sl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Fp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Yn(n,o)}}var ll={readContext:gi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Ov={readContext:gi,useCallback:function(n,i){return zi().memoizedState=[n,i===void 0?null:i],n},useContext:gi,useEffect:Tp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,al(4194308,4,Rp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return al(4194308,4,n,i)},useInsertionEffect:function(n,i){return al(4,2,n,i)},useMemo:function(n,i){var o=zi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=zi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Uv.bind(null,tn,n),[c.memoizedState,n]},useRef:function(n){var i=zi();return n={current:n},i.memoizedState=n},useState:Ep,useDebugValue:Tu,useDeferredValue:function(n){return zi().memoizedState=n},useTransition:function(){var n=Ep(!1),i=n[0];return n=Iv.bind(null,n[1]),zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=tn,h=zi();if(Qt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),vn===null)throw Error(t(349));(rs&30)!==0||xp(c,i,o)}h.memoizedState=o;var m={value:o,getSnapshot:i};return h.queue=m,Tp(yp.bind(null,c,m,n),[n]),c.flags|=2048,Ja(9,_p.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=zi(),i=vn.identifierPrefix;if(Qt){var o=tr,c=er;o=(c&~(1<<32-Ie(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Za++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Dv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},kv={readContext:gi,useCallback:Pp,useContext:gi,useEffect:wu,useImperativeHandle:Cp,useInsertionEffect:bp,useLayoutEffect:Ap,useMemo:Np,useReducer:Mu,useRef:wp,useState:function(){return Mu(Qa)},useDebugValue:Tu,useDeferredValue:function(n){var i=vi();return Lp(i,fn.memoizedState,n)},useTransition:function(){var n=Mu(Qa)[0],i=vi().memoizedState;return[n,i]},useMutableSource:gp,useSyncExternalStore:vp,useId:Dp,unstable_isNewReconciler:!1},zv={readContext:gi,useCallback:Pp,useContext:gi,useEffect:wu,useImperativeHandle:Cp,useInsertionEffect:bp,useLayoutEffect:Ap,useMemo:Np,useReducer:Eu,useRef:wp,useState:function(){return Eu(Qa)},useDebugValue:Tu,useDeferredValue:function(n){var i=vi();return fn===null?i.memoizedState=n:Lp(i,fn.memoizedState,n)},useTransition:function(){var n=Eu(Qa)[0],i=vi().memoizedState;return[n,i]},useMutableSource:gp,useSyncExternalStore:vp,useId:Dp,unstable_isNewReconciler:!1};function Ri(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function bu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:ne({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var cl={isMounted:function(n){return(n=n._reactInternals)?Fn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=kn(),h=Nr(n),m=ir(c,h);m.payload=i,o!=null&&(m.callback=o),i=Ar(n,m,h),i!==null&&(Ni(i,n,h,c),tl(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=kn(),h=Nr(n),m=ir(c,h);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Ar(n,m,h),i!==null&&(Ni(i,n,h,c),tl(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=kn(),c=Nr(n),h=ir(o,c);h.tag=2,i!=null&&(h.callback=i),i=Ar(n,h,c),i!==null&&(Ni(i,n,c,o),tl(i,n,c))}};function Op(n,i,o,c,h,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!za(o,c)||!za(h,m):!0}function kp(n,i,o){var c=!1,h=wr,m=i.contextType;return typeof m=="object"&&m!==null?m=gi(m):(h=jn(i)?Jr:An.current,c=i.contextTypes,m=(c=c!=null)?Os(n,h):wr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function zp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&cl.enqueueReplaceState(i,i.state,null)}function Au(n,i,o,c){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},du(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=gi(m):(m=jn(i)?Jr:An.current,h.context=Os(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(bu(n,i,m,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&cl.enqueueReplaceState(h,h.state,null),nl(n,o,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,i){try{var o="",c=i;do o+=ze(c),c=c.return;while(c);var h=o}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function Ru(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Cu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Bv=typeof WeakMap=="function"?WeakMap:Map;function Bp(n,i,o){o=ir(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){gl||(gl=!0,Wu=c),Cu(n,i)},o}function Vp(n,i,o){o=ir(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;o.payload=function(){return c(h)},o.callback=function(){Cu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Cu(n,i),typeof c!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function Gp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new Bv;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(o)||(h.add(o),n=ex.bind(null,n,i,o),i.then(n,n))}function Hp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Wp(n,i,o,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ir(-1,1),i.tag=2,Ar(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Vv=b.ReactCurrentOwner,$n=!1;function On(n,i,o,c){i.child=n===null?up(i,null,o,c):Vs(i,n.child,o,c)}function Xp(n,i,o,c,h){o=o.render;var m=i.ref;return Hs(i,h),c=yu(n,i,o,c,m,h),o=Su(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,rr(n,i,h)):(Qt&&o&&iu(i),i.flags|=1,On(n,i,c,h),i.child)}function Yp(n,i,o,c,h){if(n===null){var m=o.type;return typeof m=="function"&&!Zu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,qp(n,i,m,c,h)):(n=Ml(o.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&h)===0){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:za,o(T,c)&&n.ref===i.ref)return rr(n,i,h)}return i.flags|=1,n=Dr(m,c),n.ref=i.ref,n.return=i,i.child=n}function qp(n,i,o,c,h){if(n!==null){var m=n.memoizedProps;if(za(m,c)&&n.ref===i.ref)if($n=!1,i.pendingProps=c=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&($n=!0);else return i.lanes=n.lanes,rr(n,i,h)}return Pu(n,i,o,c,h)}function jp(n,i,o){var c=i.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(qs,ri),ri|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(qs,ri),ri|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Xt(qs,ri),ri|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Xt(qs,ri),ri|=c;return On(n,i,h,o),i.child}function $p(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Pu(n,i,o,c,h){var m=jn(o)?Jr:An.current;return m=Os(i,m),Hs(i,h),o=yu(n,i,o,c,m,h),c=Su(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,rr(n,i,h)):(Qt&&c&&iu(i),i.flags|=1,On(n,i,o,h),i.child)}function Kp(n,i,o,c,h){if(jn(o)){var m=!0;qo(i)}else m=!1;if(Hs(i,h),i.stateNode===null)fl(n,i),kp(i,o,c),Au(i,o,c,h),c=!0;else if(n===null){var T=i.stateNode,O=i.memoizedProps;T.props=O;var X=T.context,pe=o.contextType;typeof pe=="object"&&pe!==null?pe=gi(pe):(pe=jn(o)?Jr:An.current,pe=Os(i,pe));var be=o.getDerivedStateFromProps,Ae=typeof be=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ae||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==c||X!==pe)&&zp(i,T,c,pe),br=!1;var Te=i.memoizedState;T.state=Te,nl(i,c,T,h),X=i.memoizedState,O!==c||Te!==X||qn.current||br?(typeof be=="function"&&(bu(i,o,be,c),X=i.memoizedState),(O=br||Op(i,o,O,c,Te,X,pe))?(Ae||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=X),T.props=c,T.state=X,T.context=pe,c=O):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,hp(n,i),O=i.memoizedProps,pe=i.type===i.elementType?O:Ri(i.type,O),T.props=pe,Ae=i.pendingProps,Te=T.context,X=o.contextType,typeof X=="object"&&X!==null?X=gi(X):(X=jn(o)?Jr:An.current,X=Os(i,X));var Ye=o.getDerivedStateFromProps;(be=typeof Ye=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==Ae||Te!==X)&&zp(i,T,c,X),br=!1,Te=i.memoizedState,T.state=Te,nl(i,c,T,h);var Ze=i.memoizedState;O!==Ae||Te!==Ze||qn.current||br?(typeof Ye=="function"&&(bu(i,o,Ye,c),Ze=i.memoizedState),(pe=br||Op(i,o,pe,c,Te,Ze,X)||!1)?(be||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ze,X),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ze,X)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ze),T.props=c,T.state=Ze,T.context=X,c=pe):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),c=!1)}return Nu(n,i,o,c,m,h)}function Nu(n,i,o,c,h,m){$p(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return h&&tp(i,o,!1),rr(n,i,m);c=i.stateNode,Vv.current=i;var O=T&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Vs(i,n.child,null,m),i.child=Vs(i,null,O,m)):On(n,i,O,m),i.memoizedState=c.state,h&&tp(i,o,!0),i.child}function Zp(n){var i=n.stateNode;i.pendingContext?Jd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Jd(n,i.context,!1),pu(n,i.containerInfo)}function Qp(n,i,o,c,h){return Bs(),ou(h),i.flags|=256,On(n,i,o,c),i.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Du(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jp(n,i,o){var c=i.pendingProps,h=en.current,m=!1,T=(i.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(h&2)!==0),O?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Xt(en,h&1),n===null)return au(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=El(T,c,0,null),n=cs(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Du(o),i.memoizedState=Lu,n):Iu(i,T));if(h=n.memoizedState,h!==null&&(O=h.dehydrated,O!==null))return Gv(n,i,T,c,O,h,o);if(m){m=c.fallback,T=i.mode,h=n.child,O=h.sibling;var X={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=X,i.deletions=null):(c=Dr(h,X),c.subtreeFlags=h.subtreeFlags&14680064),O!==null?m=Dr(O,m):(m=cs(m,T,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?Du(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~o,i.memoizedState=Lu,c}return m=n.child,n=m.sibling,c=Dr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Iu(n,i){return i=El({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ul(n,i,o,c){return c!==null&&ou(c),Vs(i,n.child,null,o),n=Iu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Gv(n,i,o,c,h,m,T){if(o)return i.flags&256?(i.flags&=-257,c=Ru(Error(t(422))),ul(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=El({mode:"visible",children:c.children},h,0,null),m=cs(m,h,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Vs(i,n.child,null,T),i.child.memoizedState=Du(T),i.memoizedState=Lu,m);if((i.mode&1)===0)return ul(n,i,T,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var O=c.dgst;return c=O,m=Error(t(419)),c=Ru(m,c,void 0),ul(n,i,T,c)}if(O=(T&n.childLanes)!==0,$n||O){if(c=vn,c!==null){switch(T&-T){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|T))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,nr(n,h),Ni(c,n,h,-1))}return Ku(),c=Ru(Error(t(421))),ul(n,i,T,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=tx.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,ii=Mr(h.nextSibling),ni=i,Qt=!0,Ai=null,n!==null&&(pi[mi++]=er,pi[mi++]=tr,pi[mi++]=es,er=n.id,tr=n.overflow,es=i),i=Iu(i,c.children),i.flags|=4096,i)}function em(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),fu(n.return,i,o)}function Uu(n,i,o,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=h)}function tm(n,i,o){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(On(n,i,c.children,o),c=en.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&em(n,o,i);else if(n.tag===19)em(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Xt(en,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&il(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),Uu(i,!1,h,o,m);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&il(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}Uu(i,!0,o,null,m);break;case"together":Uu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function rr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),ss|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Dr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Dr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Hv(n,i,o){switch(i.tag){case 3:Zp(i),Bs();break;case 5:mp(i);break;case 1:jn(i.type)&&qo(i);break;case 4:pu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Xt(Jo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Xt(en,en.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Jp(n,i,o):(Xt(en,en.current&1),n=rr(n,i,o),n!==null?n.sibling:null);Xt(en,en.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return tm(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Xt(en,en.current),c)break;return null;case 22:case 23:return i.lanes=0,jp(n,i,o)}return rr(n,i,o)}var nm,Fu,im,rm;nm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Fu=function(){},im=function(n,i,o,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,is(ki.current);var m=null;switch(o){case"input":h=At(n,h),c=At(n,c),m=[];break;case"select":h=ne({},h,{value:void 0}),c=ne({},c,{value:void 0}),m=[];break;case"textarea":h=De(n,h),c=De(n,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Wo)}qe(o,c);var T;o=null;for(pe in h)if(!c.hasOwnProperty(pe)&&h.hasOwnProperty(pe)&&h[pe]!=null)if(pe==="style"){var O=h[pe];for(T in O)O.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(a.hasOwnProperty(pe)?m||(m=[]):(m=m||[]).push(pe,null));for(pe in c){var X=c[pe];if(O=h!=null?h[pe]:void 0,c.hasOwnProperty(pe)&&X!==O&&(X!=null||O!=null))if(pe==="style")if(O){for(T in O)!O.hasOwnProperty(T)||X&&X.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in X)X.hasOwnProperty(T)&&O[T]!==X[T]&&(o||(o={}),o[T]=X[T])}else o||(m||(m=[]),m.push(pe,o)),o=X;else pe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,O=O?O.__html:void 0,X!=null&&O!==X&&(m=m||[]).push(pe,X)):pe==="children"?typeof X!="string"&&typeof X!="number"||(m=m||[]).push(pe,""+X):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(a.hasOwnProperty(pe)?(X!=null&&pe==="onScroll"&&jt("scroll",n),m||O===X||(m=[])):(m=m||[]).push(pe,X))}o&&(m=m||[]).push("style",o);var pe=m;(i.updateQueue=pe)&&(i.flags|=4)}},rm=function(n,i,o,c){o!==c&&(i.flags|=4)};function eo(n,i){if(!Qt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Cn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function Wv(n,i,o){var c=i.pendingProps;switch(ru(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(i),null;case 1:return jn(i.type)&&Yo(),Cn(i),null;case 3:return c=i.stateNode,Ws(),$t(qn),$t(An),vu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Zo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ai!==null&&(qu(Ai),Ai=null))),Fu(n,i),Cn(i),null;case 5:mu(i);var h=is($a.current);if(o=i.type,n!==null&&i.stateNode!=null)im(n,i,o,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Cn(i),null}if(n=is(ki.current),Zo(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Oi]=i,c[Wa]=m,n=(i.mode&1)!==0,o){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(h=0;h<Va.length;h++)jt(Va[h],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":mt(c,m),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},jt("invalid",c);break;case"textarea":H(c,m),jt("invalid",c)}qe(o,m),h=null;for(var T in m)if(m.hasOwnProperty(T)){var O=m[T];T==="children"?typeof O=="string"?c.textContent!==O&&(m.suppressHydrationWarning!==!0&&Ho(c.textContent,O,n),h=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(m.suppressHydrationWarning!==!0&&Ho(c.textContent,O,n),h=["children",""+O]):a.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&jt("scroll",c)}switch(o){case"input":ke(c),Vt(c,m,!0);break;case"textarea":ke(c),gt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Wo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=N(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(o,{is:c.is}):(n=T.createElement(o),o==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,o),n[Oi]=i,n[Wa]=c,nm(n,i,!1,!1),i.stateNode=n;e:{switch(T=Fe(o,c),o){case"dialog":jt("cancel",n),jt("close",n),h=c;break;case"iframe":case"object":case"embed":jt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Va.length;h++)jt(Va[h],n);h=c;break;case"source":jt("error",n),h=c;break;case"img":case"image":case"link":jt("error",n),jt("load",n),h=c;break;case"details":jt("toggle",n),h=c;break;case"input":mt(n,c),h=At(n,c),jt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=ne({},c,{value:void 0}),jt("invalid",n);break;case"textarea":H(n,c),h=De(n,c),jt("invalid",n);break;default:h=c}qe(o,h),O=h;for(m in O)if(O.hasOwnProperty(m)){var X=O[m];m==="style"?_e(n,X):m==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&ae(n,X)):m==="children"?typeof X=="string"?(o!=="textarea"||X!=="")&&me(n,X):typeof X=="number"&&me(n,""+X):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?X!=null&&m==="onScroll"&&jt("scroll",n):X!=null&&P(n,m,X,T))}switch(o){case"input":ke(n),Vt(n,c,!1);break;case"textarea":ke(n),gt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+fe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?bt(n,!!c.multiple,m,!1):c.defaultValue!=null&&bt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Wo)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Cn(i),null;case 6:if(n&&i.stateNode!=null)rm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=is($a.current),is(ki.current),Zo(i)){if(c=i.stateNode,o=i.memoizedProps,c[Oi]=i,(m=c.nodeValue!==o)&&(n=ni,n!==null))switch(n.tag){case 3:Ho(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ho(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Oi]=i,i.stateNode=c}return Cn(i),null;case 13:if($t(en),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&ii!==null&&(i.mode&1)!==0&&(i.flags&128)===0)op(),Bs(),i.flags|=98560,m=!1;else if(m=Zo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Oi]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Cn(i),m=!1}else Ai!==null&&(qu(Ai),Ai=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(en.current&1)!==0?hn===0&&(hn=3):Ku())),i.updateQueue!==null&&(i.flags|=4),Cn(i),null);case 4:return Ws(),Fu(n,i),n===null&&Ga(i.stateNode.containerInfo),Cn(i),null;case 10:return uu(i.type._context),Cn(i),null;case 17:return jn(i.type)&&Yo(),Cn(i),null;case 19:if($t(en),m=i.memoizedState,m===null)return Cn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)eo(m,!1);else{if(hn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=il(n),T!==null){for(i.flags|=128,eo(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Xt(en,en.current&1|2),i.child}n=n.sibling}m.tail!==null&&Jt()>js&&(i.flags|=128,c=!0,eo(m,!1),i.lanes=4194304)}else{if(!c)if(n=il(T),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),eo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Qt)return Cn(i),null}else 2*Jt()-m.renderingStartTime>js&&o!==1073741824&&(i.flags|=128,c=!0,eo(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(o=m.last,o!==null?o.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Jt(),i.sibling=null,o=en.current,Xt(en,c?o&1|2:o&1),i):(Cn(i),null);case 22:case 23:return $u(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ri&1073741824)!==0&&(Cn(i),i.subtreeFlags&6&&(i.flags|=8192)):Cn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Xv(n,i){switch(ru(i),i.tag){case 1:return jn(i.type)&&Yo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ws(),$t(qn),$t(An),vu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return mu(i),null;case 13:if($t(en),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $t(en),null;case 4:return Ws(),null;case 10:return uu(i.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var hl=!1,Pn=!1,Yv=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Ys(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){sn(n,i,c)}else o.current=null}function Ou(n,i,o){try{o()}catch(c){sn(n,i,c)}}var sm=!1;function qv(n,i){if($c=Lo,n=Od(),Vc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,O=-1,X=-1,pe=0,be=0,Ae=n,Te=null;t:for(;;){for(var Ye;Ae!==o||h!==0&&Ae.nodeType!==3||(O=T+h),Ae!==m||c!==0&&Ae.nodeType!==3||(X=T+c),Ae.nodeType===3&&(T+=Ae.nodeValue.length),(Ye=Ae.firstChild)!==null;)Te=Ae,Ae=Ye;for(;;){if(Ae===n)break t;if(Te===o&&++pe===h&&(O=T),Te===m&&++be===c&&(X=T),(Ye=Ae.nextSibling)!==null)break;Ae=Te,Te=Ae.parentNode}Ae=Ye}o=O===-1||X===-1?null:{start:O,end:X}}else o=null}o=o||{start:0,end:0}}else o=null;for(Kc={focusedElem:n,selectionRange:o},Lo=!1,$e=i;$e!==null;)if(i=$e,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,$e=n;else for(;$e!==null;){i=$e;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var nt=Ze.memoizedProps,an=Ze.memoizedState,se=i.stateNode,K=se.getSnapshotBeforeUpdate(i.elementType===i.type?nt:Ri(i.type,nt),an);se.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){sn(i,i.return,Le)}if(n=i.sibling,n!==null){n.return=i.return,$e=n;break}$e=i.return}return Ze=sm,sm=!1,Ze}function to(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&Ou(i,o,m)}h=h.next}while(h!==c)}}function dl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function ku(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function am(n){var i=n.alternate;i!==null&&(n.alternate=null,am(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Oi],delete i[Wa],delete i[eu],delete i[Cv],delete i[Pv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function om(n){return n.tag===5||n.tag===3||n.tag===4}function lm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||om(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Wo));else if(c!==4&&(n=n.child,n!==null))for(zu(n,i,o),n=n.sibling;n!==null;)zu(n,i,o),n=n.sibling}function Bu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Bu(n,i,o),n=n.sibling;n!==null;)Bu(n,i,o),n=n.sibling}var Mn=null,Ci=!1;function Rr(n,i,o){for(o=o.child;o!==null;)cm(n,i,o),o=o.sibling}function cm(n,i,o){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(oe,o)}catch{}switch(o.tag){case 5:Pn||Ys(o,i);case 6:var c=Mn,h=Ci;Mn=null,Rr(n,i,o),Mn=c,Ci=h,Mn!==null&&(Ci?(n=Mn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Mn.removeChild(o.stateNode));break;case 18:Mn!==null&&(Ci?(n=Mn,o=o.stateNode,n.nodeType===8?Jc(n.parentNode,o):n.nodeType===1&&Jc(n,o),Da(n)):Jc(Mn,o.stateNode));break;case 4:c=Mn,h=Ci,Mn=o.stateNode.containerInfo,Ci=!0,Rr(n,i,o),Mn=c,Ci=h;break;case 0:case 11:case 14:case 15:if(!Pn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&Ou(o,i,T),h=h.next}while(h!==c)}Rr(n,i,o);break;case 1:if(!Pn&&(Ys(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(O){sn(o,i,O)}Rr(n,i,o);break;case 21:Rr(n,i,o);break;case 22:o.mode&1?(Pn=(c=Pn)||o.memoizedState!==null,Rr(n,i,o),Pn=c):Rr(n,i,o);break;default:Rr(n,i,o)}}function um(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Yv),i.forEach(function(c){var h=nx.bind(null,n,c);o.has(c)||(o.add(c),c.then(h,h))})}}function Pi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var h=o[c];try{var m=n,T=i,O=T;e:for(;O!==null;){switch(O.tag){case 5:Mn=O.stateNode,Ci=!1;break e;case 3:Mn=O.stateNode.containerInfo,Ci=!0;break e;case 4:Mn=O.stateNode.containerInfo,Ci=!0;break e}O=O.return}if(Mn===null)throw Error(t(160));cm(m,T,h),Mn=null,Ci=!1;var X=h.alternate;X!==null&&(X.return=null),h.return=null}catch(pe){sn(h,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)fm(i,n),i=i.sibling}function fm(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pi(i,n),Bi(n),c&4){try{to(3,n,n.return),dl(3,n)}catch(nt){sn(n,n.return,nt)}try{to(5,n,n.return)}catch(nt){sn(n,n.return,nt)}}break;case 1:Pi(i,n),Bi(n),c&512&&o!==null&&Ys(o,o.return);break;case 5:if(Pi(i,n),Bi(n),c&512&&o!==null&&Ys(o,o.return),n.flags&32){var h=n.stateNode;try{me(h,"")}catch(nt){sn(n,n.return,nt)}}if(c&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,T=o!==null?o.memoizedProps:m,O=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{O==="input"&&m.type==="radio"&&m.name!=null&&dt(h,m),Fe(O,T);var pe=Fe(O,m);for(T=0;T<X.length;T+=2){var be=X[T],Ae=X[T+1];be==="style"?_e(h,Ae):be==="dangerouslySetInnerHTML"?ae(h,Ae):be==="children"?me(h,Ae):P(h,be,Ae,pe)}switch(O){case"input":kt(h,m);break;case"textarea":We(h,m);break;case"select":var Te=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Ye=m.value;Ye!=null?bt(h,!!m.multiple,Ye,!1):Te!==!!m.multiple&&(m.defaultValue!=null?bt(h,!!m.multiple,m.defaultValue,!0):bt(h,!!m.multiple,m.multiple?[]:"",!1))}h[Wa]=m}catch(nt){sn(n,n.return,nt)}}break;case 6:if(Pi(i,n),Bi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(nt){sn(n,n.return,nt)}}break;case 3:if(Pi(i,n),Bi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Da(i.containerInfo)}catch(nt){sn(n,n.return,nt)}break;case 4:Pi(i,n),Bi(n);break;case 13:Pi(i,n),Bi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(Hu=Jt())),c&4&&um(n);break;case 22:if(be=o!==null&&o.memoizedState!==null,n.mode&1?(Pn=(pe=Pn)||be,Pi(i,n),Pn=pe):Pi(i,n),Bi(n),c&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!be&&(n.mode&1)!==0)for($e=n,be=n.child;be!==null;){for(Ae=$e=be;$e!==null;){switch(Te=$e,Ye=Te.child,Te.tag){case 0:case 11:case 14:case 15:to(4,Te,Te.return);break;case 1:Ys(Te,Te.return);var Ze=Te.stateNode;if(typeof Ze.componentWillUnmount=="function"){c=Te,o=Te.return;try{i=c,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(nt){sn(c,o,nt)}}break;case 5:Ys(Te,Te.return);break;case 22:if(Te.memoizedState!==null){pm(Ae);continue}}Ye!==null?(Ye.return=Te,$e=Ye):pm(Ae)}be=be.sibling}e:for(be=null,Ae=n;;){if(Ae.tag===5){if(be===null){be=Ae;try{h=Ae.stateNode,pe?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(O=Ae.stateNode,X=Ae.memoizedProps.style,T=X!=null&&X.hasOwnProperty("display")?X.display:null,O.style.display=ge("display",T))}catch(nt){sn(n,n.return,nt)}}}else if(Ae.tag===6){if(be===null)try{Ae.stateNode.nodeValue=pe?"":Ae.memoizedProps}catch(nt){sn(n,n.return,nt)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;be===Ae&&(be=null),Ae=Ae.return}be===Ae&&(be=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Pi(i,n),Bi(n),c&4&&um(n);break;case 21:break;default:Pi(i,n),Bi(n)}}function Bi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(om(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(me(h,""),c.flags&=-33);var m=lm(n);Bu(n,m,h);break;case 3:case 4:var T=c.stateNode.containerInfo,O=lm(n);zu(n,O,T);break;default:throw Error(t(161))}}catch(X){sn(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function jv(n,i,o){$e=n,hm(n)}function hm(n,i,o){for(var c=(n.mode&1)!==0;$e!==null;){var h=$e,m=h.child;if(h.tag===22&&c){var T=h.memoizedState!==null||hl;if(!T){var O=h.alternate,X=O!==null&&O.memoizedState!==null||Pn;O=hl;var pe=Pn;if(hl=T,(Pn=X)&&!pe)for($e=h;$e!==null;)T=$e,X=T.child,T.tag===22&&T.memoizedState!==null?mm(h):X!==null?(X.return=T,$e=X):mm(h);for(;m!==null;)$e=m,hm(m),m=m.sibling;$e=h,hl=O,Pn=pe}dm(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,$e=m):dm(n)}}function dm(n){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||dl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Pn)if(o===null)c.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:Ri(i.type,o.memoizedProps);c.componentDidUpdate(h,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&pp(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}pp(i,T,o)}break;case 5:var O=i.stateNode;if(o===null&&i.flags&4){o=O;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&o.focus();break;case"img":X.src&&(o.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var be=pe.memoizedState;if(be!==null){var Ae=be.dehydrated;Ae!==null&&Da(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||i.flags&512&&ku(i)}catch(Te){sn(i,i.return,Te)}}if(i===n){$e=null;break}if(o=i.sibling,o!==null){o.return=i.return,$e=o;break}$e=i.return}}function pm(n){for(;$e!==null;){var i=$e;if(i===n){$e=null;break}var o=i.sibling;if(o!==null){o.return=i.return,$e=o;break}$e=i.return}}function mm(n){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{dl(4,i)}catch(X){sn(i,o,X)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(X){sn(i,h,X)}}var m=i.return;try{ku(i)}catch(X){sn(i,m,X)}break;case 5:var T=i.return;try{ku(i)}catch(X){sn(i,T,X)}}}catch(X){sn(i,i.return,X)}if(i===n){$e=null;break}var O=i.sibling;if(O!==null){O.return=i.return,$e=O;break}$e=i.return}}var $v=Math.ceil,pl=b.ReactCurrentDispatcher,Vu=b.ReactCurrentOwner,xi=b.ReactCurrentBatchConfig,Dt=0,vn=null,ln=null,En=0,ri=0,qs=Er(0),hn=0,no=null,ss=0,ml=0,Gu=0,io=null,Kn=null,Hu=0,js=1/0,sr=null,gl=!1,Wu=null,Cr=null,vl=!1,Pr=null,xl=0,ro=0,Xu=null,_l=-1,yl=0;function kn(){return(Dt&6)!==0?Jt():_l!==-1?_l:_l=Jt()}function Nr(n){return(n.mode&1)===0?1:(Dt&2)!==0&&En!==0?En&-En:Lv.transition!==null?(yl===0&&(yl=Xe()),yl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:vd(n.type)),n)}function Ni(n,i,o,c){if(50<ro)throw ro=0,Xu=null,Error(t(185));Mt(n,o,c),((Dt&2)===0||n!==vn)&&(n===vn&&((Dt&2)===0&&(ml|=o),hn===4&&Lr(n,En)),Zn(n,c),o===1&&Dt===0&&(i.mode&1)===0&&(js=Jt()+500,jo&&Tr()))}function Zn(n,i){var o=n.callbackNode;zt(n,i);var c=Wt(n,n===vn?En:0);if(c===0)o!==null&&Aa(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Aa(o),i===1)n.tag===0?Nv(vm.bind(null,n)):np(vm.bind(null,n)),Av(function(){(Dt&6)===0&&Tr()}),o=null;else{switch(Zi(c)){case 1:o=Ra;break;case 4:o=A;break;case 16:o=J;break;case 536870912:o=le;break;default:o=J}o=Tm(o,gm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function gm(n,i){if(_l=-1,yl=0,(Dt&6)!==0)throw Error(t(327));var o=n.callbackNode;if($s()&&n.callbackNode!==o)return null;var c=Wt(n,n===vn?En:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Sl(n,c);else{i=c;var h=Dt;Dt|=2;var m=_m();(vn!==n||En!==i)&&(sr=null,js=Jt()+500,os(n,i));do try{Qv();break}catch(O){xm(n,O)}while(!0);cu(),pl.current=m,Dt=h,ln!==null?i=0:(vn=null,En=0,i=hn)}if(i!==0){if(i===2&&(h=on(n),h!==0&&(c=h,i=Yu(n,h))),i===1)throw o=no,os(n,0),Lr(n,c),Zn(n,Jt()),o;if(i===6)Lr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!Kv(h)&&(i=Sl(n,c),i===2&&(m=on(n),m!==0&&(c=m,i=Yu(n,m))),i===1))throw o=no,os(n,0),Lr(n,c),Zn(n,Jt()),o;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ls(n,Kn,sr);break;case 3:if(Lr(n,c),(c&130023424)===c&&(i=Hu+500-Jt(),10<i)){if(Wt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){kn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Qc(ls.bind(null,n,Kn,sr),i);break}ls(n,Kn,sr);break;case 4:if(Lr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var T=31-Ie(c);m=1<<T,T=i[T],T>h&&(h=T),c&=~m}if(c=h,c=Jt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*$v(c/1960))-c,10<c){n.timeoutHandle=Qc(ls.bind(null,n,Kn,sr),c);break}ls(n,Kn,sr);break;case 5:ls(n,Kn,sr);break;default:throw Error(t(329))}}}return Zn(n,Jt()),n.callbackNode===o?gm.bind(null,n):null}function Yu(n,i){var o=io;return n.current.memoizedState.isDehydrated&&(os(n,i).flags|=256),n=Sl(n,i),n!==2&&(i=Kn,Kn=o,i!==null&&qu(i)),n}function qu(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function Kv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var h=o[c],m=h.getSnapshot;h=h.value;try{if(!bi(m(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Lr(n,i){for(i&=~Gu,i&=~ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Ie(i),c=1<<o;n[o]=-1,i&=~c}}function vm(n){if((Dt&6)!==0)throw Error(t(327));$s();var i=Wt(n,0);if((i&1)===0)return Zn(n,Jt()),null;var o=Sl(n,i);if(n.tag!==0&&o===2){var c=on(n);c!==0&&(i=c,o=Yu(n,c))}if(o===1)throw o=no,os(n,0),Lr(n,i),Zn(n,Jt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ls(n,Kn,sr),Zn(n,Jt()),null}function ju(n,i){var o=Dt;Dt|=1;try{return n(i)}finally{Dt=o,Dt===0&&(js=Jt()+500,jo&&Tr())}}function as(n){Pr!==null&&Pr.tag===0&&(Dt&6)===0&&$s();var i=Dt;Dt|=1;var o=xi.transition,c=Et;try{if(xi.transition=null,Et=1,n)return n()}finally{Et=c,xi.transition=o,Dt=i,(Dt&6)===0&&Tr()}}function $u(){ri=qs.current,$t(qs)}function os(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,bv(o)),ln!==null)for(o=ln.return;o!==null;){var c=o;switch(ru(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Yo();break;case 3:Ws(),$t(qn),$t(An),vu();break;case 5:mu(c);break;case 4:Ws();break;case 13:$t(en);break;case 19:$t(en);break;case 10:uu(c.type._context);break;case 22:case 23:$u()}o=o.return}if(vn=n,ln=n=Dr(n.current,null),En=ri=i,hn=0,no=null,Gu=ml=ss=0,Kn=io=null,ns!==null){for(i=0;i<ns.length;i++)if(o=ns[i],c=o.interleaved,c!==null){o.interleaved=null;var h=c.next,m=o.pending;if(m!==null){var T=m.next;m.next=h,c.next=T}o.pending=c}ns=null}return n}function xm(n,i){do{var o=ln;try{if(cu(),rl.current=ll,sl){for(var c=tn.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}sl=!1}if(rs=0,gn=fn=tn=null,Ka=!1,Za=0,Vu.current=null,o===null||o.return===null){hn=1,no=i,ln=null;break}e:{var m=n,T=o.return,O=o,X=i;if(i=En,O.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var pe=X,be=O,Ae=be.tag;if((be.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Te=be.alternate;Te?(be.updateQueue=Te.updateQueue,be.memoizedState=Te.memoizedState,be.lanes=Te.lanes):(be.updateQueue=null,be.memoizedState=null)}var Ye=Hp(T);if(Ye!==null){Ye.flags&=-257,Wp(Ye,T,O,m,i),Ye.mode&1&&Gp(m,pe,i),i=Ye,X=pe;var Ze=i.updateQueue;if(Ze===null){var nt=new Set;nt.add(X),i.updateQueue=nt}else Ze.add(X);break e}else{if((i&1)===0){Gp(m,pe,i),Ku();break e}X=Error(t(426))}}else if(Qt&&O.mode&1){var an=Hp(T);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),Wp(an,T,O,m,i),ou(Xs(X,O));break e}}m=X=Xs(X,O),hn!==4&&(hn=2),io===null?io=[m]:io.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var se=Bp(m,X,i);dp(m,se);break e;case 1:O=X;var K=m.type,ue=m.stateNode;if((m.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Cr===null||!Cr.has(ue)))){m.flags|=65536,i&=-i,m.lanes|=i;var Le=Vp(m,O,i);dp(m,Le);break e}}m=m.return}while(m!==null)}Sm(o)}catch(rt){i=rt,ln===o&&o!==null&&(ln=o=o.return);continue}break}while(!0)}function _m(){var n=pl.current;return pl.current=ll,n===null?ll:n}function Ku(){(hn===0||hn===3||hn===2)&&(hn=4),vn===null||(ss&268435455)===0&&(ml&268435455)===0||Lr(vn,En)}function Sl(n,i){var o=Dt;Dt|=2;var c=_m();(vn!==n||En!==i)&&(sr=null,os(n,i));do try{Zv();break}catch(h){xm(n,h)}while(!0);if(cu(),Dt=o,pl.current=c,ln!==null)throw Error(t(261));return vn=null,En=0,hn}function Zv(){for(;ln!==null;)ym(ln)}function Qv(){for(;ln!==null&&!Po();)ym(ln)}function ym(n){var i=wm(n.alternate,n,ri);n.memoizedProps=n.pendingProps,i===null?Sm(n):ln=i,Vu.current=null}function Sm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Wv(o,i,ri),o!==null){ln=o;return}}else{if(o=Xv(o,i),o!==null){o.flags&=32767,ln=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{hn=6,ln=null;return}}if(i=i.sibling,i!==null){ln=i;return}ln=i=n}while(i!==null);hn===0&&(hn=5)}function ls(n,i,o){var c=Et,h=xi.transition;try{xi.transition=null,Et=1,Jv(n,i,o,c)}finally{xi.transition=h,Et=c}return null}function Jv(n,i,o,c){do $s();while(Pr!==null);if((Dt&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Xn(n,m),n===vn&&(ln=vn=null,En=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||vl||(vl=!0,Tm(J,function(){return $s(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=xi.transition,xi.transition=null;var T=Et;Et=1;var O=Dt;Dt|=4,Vu.current=null,qv(n,o),fm(o,n),_v(Kc),Lo=!!$c,Kc=$c=null,n.current=o,jv(o),Rc(),Dt=O,Et=T,xi.transition=m}else n.current=o;if(vl&&(vl=!1,Pr=n,xl=h),m=n.pendingLanes,m===0&&(Cr=null),je(o.stateNode),Zn(n,Jt()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],c(h.value,{componentStack:h.stack,digest:h.digest});if(gl)throw gl=!1,n=Wu,Wu=null,n;return(xl&1)!==0&&n.tag!==0&&$s(),m=n.pendingLanes,(m&1)!==0?n===Xu?ro++:(ro=0,Xu=n):ro=0,Tr(),null}function $s(){if(Pr!==null){var n=Zi(xl),i=xi.transition,o=Et;try{if(xi.transition=null,Et=16>n?16:n,Pr===null)var c=!1;else{if(n=Pr,Pr=null,xl=0,(Dt&6)!==0)throw Error(t(331));var h=Dt;for(Dt|=4,$e=n.current;$e!==null;){var m=$e,T=m.child;if(($e.flags&16)!==0){var O=m.deletions;if(O!==null){for(var X=0;X<O.length;X++){var pe=O[X];for($e=pe;$e!==null;){var be=$e;switch(be.tag){case 0:case 11:case 15:to(8,be,m)}var Ae=be.child;if(Ae!==null)Ae.return=be,$e=Ae;else for(;$e!==null;){be=$e;var Te=be.sibling,Ye=be.return;if(am(be),be===pe){$e=null;break}if(Te!==null){Te.return=Ye,$e=Te;break}$e=Ye}}}var Ze=m.alternate;if(Ze!==null){var nt=Ze.child;if(nt!==null){Ze.child=null;do{var an=nt.sibling;nt.sibling=null,nt=an}while(nt!==null)}}$e=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,$e=T;else e:for(;$e!==null;){if(m=$e,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:to(9,m,m.return)}var se=m.sibling;if(se!==null){se.return=m.return,$e=se;break e}$e=m.return}}var K=n.current;for($e=K;$e!==null;){T=$e;var ue=T.child;if((T.subtreeFlags&2064)!==0&&ue!==null)ue.return=T,$e=ue;else e:for(T=K;$e!==null;){if(O=$e,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:dl(9,O)}}catch(rt){sn(O,O.return,rt)}if(O===T){$e=null;break e}var Le=O.sibling;if(Le!==null){Le.return=O.return,$e=Le;break e}$e=O.return}}if(Dt=h,Tr(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(oe,n)}catch{}c=!0}return c}finally{Et=o,xi.transition=i}}return!1}function Mm(n,i,o){i=Xs(o,i),i=Bp(n,i,1),n=Ar(n,i,1),i=kn(),n!==null&&(Mt(n,1,i),Zn(n,i))}function sn(n,i,o){if(n.tag===3)Mm(n,n,o);else for(;i!==null;){if(i.tag===3){Mm(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Cr===null||!Cr.has(c))){n=Xs(o,n),n=Vp(i,n,1),i=Ar(i,n,1),n=kn(),i!==null&&(Mt(i,1,n),Zn(i,n));break}}i=i.return}}function ex(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=kn(),n.pingedLanes|=n.suspendedLanes&o,vn===n&&(En&o)===o&&(hn===4||hn===3&&(En&130023424)===En&&500>Jt()-Hu?os(n,0):Gu|=o),Zn(n,i)}function Em(n,i){i===0&&((n.mode&1)===0?i=1:(i=it,it<<=1,(it&130023424)===0&&(it=4194304)));var o=kn();n=nr(n,i),n!==null&&(Mt(n,i,o),Zn(n,o))}function tx(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Em(n,o)}function nx(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Em(n,o)}var wm;wm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||qn.current)$n=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return $n=!1,Hv(n,i,o);$n=(n.flags&131072)!==0}else $n=!1,Qt&&(i.flags&1048576)!==0&&ip(i,Ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;fl(n,i),n=i.pendingProps;var h=Os(i,An.current);Hs(i,o),h=yu(null,i,c,n,h,o);var m=Su();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,jn(c)?(m=!0,qo(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,du(i),h.updater=cl,i.stateNode=h,h._reactInternals=i,Au(i,c,n,o),i=Nu(null,i,c,!0,m,o)):(i.tag=0,Qt&&m&&iu(i),On(null,i,h,o),i=i.child),i;case 16:c=i.elementType;e:{switch(fl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=rx(c),n=Ri(c,n),h){case 0:i=Pu(null,i,c,n,o);break e;case 1:i=Kp(null,i,c,n,o);break e;case 11:i=Xp(null,i,c,n,o);break e;case 14:i=Yp(null,i,c,Ri(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ri(c,h),Pu(n,i,c,h,o);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ri(c,h),Kp(n,i,c,h,o);case 3:e:{if(Zp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,h=m.element,hp(n,i),nl(i,c,null,o);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Xs(Error(t(423)),i),i=Qp(n,i,c,o,h);break e}else if(c!==h){h=Xs(Error(t(424)),i),i=Qp(n,i,c,o,h);break e}else for(ii=Mr(i.stateNode.containerInfo.firstChild),ni=i,Qt=!0,Ai=null,o=up(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Bs(),c===h){i=rr(n,i,o);break e}On(n,i,c,o)}i=i.child}return i;case 5:return mp(i),n===null&&au(i),c=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,T=h.children,Zc(c,h)?T=null:m!==null&&Zc(c,m)&&(i.flags|=32),$p(n,i),On(n,i,T,o),i.child;case 6:return n===null&&au(i),null;case 13:return Jp(n,i,o);case 4:return pu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Vs(i,null,c,o):On(n,i,c,o),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ri(c,h),Xp(n,i,c,h,o);case 7:return On(n,i,i.pendingProps,o),i.child;case 8:return On(n,i,i.pendingProps.children,o),i.child;case 12:return On(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,T=h.value,Xt(Jo,c._currentValue),c._currentValue=T,m!==null)if(bi(m.value,T)){if(m.children===h.children&&!qn.current){i=rr(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var O=m.dependencies;if(O!==null){T=m.child;for(var X=O.firstContext;X!==null;){if(X.context===c){if(m.tag===1){X=ir(-1,o&-o),X.tag=2;var pe=m.updateQueue;if(pe!==null){pe=pe.shared;var be=pe.pending;be===null?X.next=X:(X.next=be.next,be.next=X),pe.pending=X}}m.lanes|=o,X=m.alternate,X!==null&&(X.lanes|=o),fu(m.return,o,i),O.lanes|=o;break}X=X.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=o,O=T.alternate,O!==null&&(O.lanes|=o),fu(T,o,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}On(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Hs(i,o),h=gi(h),c=c(h),i.flags|=1,On(n,i,c,o),i.child;case 14:return c=i.type,h=Ri(c,i.pendingProps),h=Ri(c.type,h),Yp(n,i,c,h,o);case 15:return qp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ri(c,h),fl(n,i),i.tag=1,jn(c)?(n=!0,qo(i)):n=!1,Hs(i,o),kp(i,c,h),Au(i,c,h,o),Nu(null,i,c,!0,n,o);case 19:return tm(n,i,o);case 22:return jp(n,i,o)}throw Error(t(156,i.tag))};function Tm(n,i){return Kr(n,i)}function ix(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(n,i,o,c){return new ix(n,i,o,c)}function Zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function rx(n){if(typeof n=="function")return Zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===$)return 14}return 2}function Dr(n,i){var o=n.alternate;return o===null?(o=_i(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ml(n,i,o,c,h,m){var T=2;if(c=n,typeof n=="function")Zu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case k:return cs(o.children,h,m,i);case w:T=8,h|=8;break;case I:return n=_i(12,o,i,h|2),n.elementType=I,n.lanes=m,n;case ce:return n=_i(13,o,i,h),n.elementType=ce,n.lanes=m,n;case re:return n=_i(19,o,i,h),n.elementType=re,n.lanes=m,n;case G:return El(o,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:T=10;break e;case W:T=9;break e;case j:T=11;break e;case $:T=14;break e;case B:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=_i(T,o,i,h),i.elementType=n,i.type=c,i.lanes=m,i}function cs(n,i,o,c){return n=_i(7,n,c,i),n.lanes=o,n}function El(n,i,o,c){return n=_i(22,n,c,i),n.elementType=G,n.lanes=o,n.stateNode={isHidden:!1},n}function Qu(n,i,o){return n=_i(6,n,null,i),n.lanes=o,n}function Ju(n,i,o){return i=_i(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function sx(n,i,o,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function ef(n,i,o,c,h,m,T,O,X){return n=new sx(n,i,o,O,X),i===1?(i=1,m===!0&&(i|=8)):i=0,m=_i(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(m),n}function ax(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function bm(n){if(!n)return wr;n=n._reactInternals;e:{if(Fn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(jn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(jn(o))return ep(n,o,i)}return i}function Am(n,i,o,c,h,m,T,O,X){return n=ef(o,c,!0,n,h,m,T,O,X),n.context=bm(null),o=n.current,c=kn(),h=Nr(o),m=ir(c,h),m.callback=i??null,Ar(o,m,h),n.current.lanes=h,Mt(n,h,c),Zn(n,c),n}function wl(n,i,o,c){var h=i.current,m=kn(),T=Nr(h);return o=bm(o),i.context===null?i.context=o:i.pendingContext=o,i=ir(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Ar(h,i,T),n!==null&&(Ni(n,h,T,m),tl(n,h,T)),T}function Tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Rm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function tf(n,i){Rm(n,i),(n=n.alternate)&&Rm(n,i)}function ox(){return null}var Cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function nf(n){this._internalRoot=n}bl.prototype.render=nf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));wl(n,i,null,null)},bl.prototype.unmount=nf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;as(function(){wl(null,n,null,null)}),i[Qi]=null}};function bl(n){this._internalRoot=n}bl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Bt();n={blockedOn:null,target:n,priority:i};for(var o=0;o<_r.length&&i!==0&&i<_r[o].priority;o++);_r.splice(o,0,n),o===0&&md(n)}};function rf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function lx(n,i,o,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var pe=Tl(T);m.call(pe)}}var T=Am(i,c,n,0,null,!1,!1,"",Pm);return n._reactRootContainer=T,n[Qi]=T.current,Ga(n.nodeType===8?n.parentNode:n),as(),T}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var O=c;c=function(){var pe=Tl(X);O.call(pe)}}var X=ef(n,0,!1,null,null,!1,!1,"",Pm);return n._reactRootContainer=X,n[Qi]=X.current,Ga(n.nodeType===8?n.parentNode:n),as(function(){wl(i,X,o,c)}),X}function Rl(n,i,o,c,h){var m=o._reactRootContainer;if(m){var T=m;if(typeof h=="function"){var O=h;h=function(){var X=Tl(T);O.call(X)}}wl(i,T,n,h)}else T=lx(o,i,n,h,c);return Tl(T)}Ft=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Lt(i.pendingLanes);o!==0&&(Yn(i,o|1),Zn(i,Jt()),(Dt&6)===0&&(js=Jt()+500,Tr()))}break;case 13:as(function(){var c=nr(n,1);if(c!==null){var h=kn();Ni(c,n,1,h)}}),tf(n,1)}},qt=function(n){if(n.tag===13){var i=nr(n,134217728);if(i!==null){var o=kn();Ni(i,n,134217728,o)}tf(n,134217728)}},wi=function(n){if(n.tag===13){var i=Nr(n),o=nr(n,i);if(o!==null){var c=kn();Ni(o,n,i,c)}tf(n,i)}},Bt=function(){return Et},Ti=function(n,i){var o=Et;try{return Et=n,i()}finally{Et=o}},Se=function(n,i,o){switch(i){case"input":if(kt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var h=Xo(c);if(!h)throw Error(t(90));ct(c),kt(c,h)}}}break;case"textarea":We(n,o);break;case"select":i=o.value,i!=null&&bt(n,!!o.multiple,i,!1)}},Ge=ju,ye=as;var cx={usingClientEntryPoint:!1,Events:[Xa,Us,Xo,xe,Ne,ju]},so={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ux={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$r(n),n===null?null:n.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{oe=Cl.inject(ux),Oe=Cl}catch{}}return Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cx,Qn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(i))throw Error(t(200));return ax(n,i,null,o)},Qn.createRoot=function(n,i){if(!rf(n))throw Error(t(299));var o=!1,c="",h=Cm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=ef(n,1,!1,null,null,o,!1,c,h),n[Qi]=i.current,Ga(n.nodeType===8?n.parentNode:n),new nf(i)},Qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=$r(i),n=n===null?null:n.stateNode,n},Qn.flushSync=function(n){return as(n)},Qn.hydrate=function(n,i,o){if(!Al(i))throw Error(t(200));return Rl(null,n,i,!0,o)},Qn.hydrateRoot=function(n,i,o){if(!rf(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,h=!1,m="",T=Cm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Am(i,null,n,1,o??null,h,!1,m,T),n[Qi]=i.current,Ga(n),c)for(n=0;n<c.length;n++)o=c[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new bl(i)},Qn.render=function(n,i,o){if(!Al(i))throw Error(t(200));return Rl(null,n,i,!1,o)},Qn.unmountComponentAtNode=function(n){if(!Al(n))throw Error(t(40));return n._reactRootContainer?(as(function(){Rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Qi]=null})}),!0):!1},Qn.unstable_batchedUpdates=ju,Qn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Al(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Rl(n,i,o,!1,c)},Qn.version="18.3.1-next-f1338f8080-20240426",Qn}var km;function _x(){if(km)return of.exports;km=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),of.exports=xx(),of.exports}var zm;function yx(){if(zm)return Pl;zm=1;var s=_x();return Pl.createRoot=s.createRoot,Pl.hydrateRoot=s.hydrateRoot,Pl}var Sx=yx();const Mx=hx(Sx);var pt=Bh();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="185",Ex=0,Bm=1,wx=2,_o=1,Q0=2,vo=3,Wr=0,Jn=1,ci=2,ji=0,pa=1,fr=2,Vm=3,Gm=4,Tx=5,gs=100,bx=101,Ax=102,Rx=103,Cx=104,Px=200,Nx=201,Lx=202,Dx=203,Yf=204,qf=205,Ix=206,Ux=207,Fx=208,Ox=209,kx=210,zx=211,Bx=212,Vx=213,Gx=214,jf=0,$f=1,Kf=2,va=3,Zf=4,Qf=5,Jf=6,eh=7,J0=0,Hx=1,Wx=2,$i=0,Gh=1,Hh=2,Wh=3,yc=4,Xh=5,Yh=6,qh=7,eg=300,Ss=301,xa=302,uf=303,ff=304,Sc=306,Ms=1e3,hr=1001,th=1002,wn=1003,Xx=1004,Nl=1005,Tn=1006,hf=1007,xs=1008,ui=1009,tg=1010,ng=1011,yo=1012,jh=1013,Ki=1014,Xi=1015,hi=1016,$h=1017,Kh=1018,So=1020,ig=35902,rg=35899,sg=1021,ag=1022,Ui=1023,pr=1026,_s=1027,og=1028,Zh=1029,Es=1030,Qh=1031,Jh=1033,sc=33776,ac=33777,oc=33778,lc=33779,nh=35840,ih=35841,rh=35842,sh=35843,ah=36196,oh=37492,lh=37496,ch=37488,uh=37489,fc=37490,fh=37491,hh=37808,dh=37809,ph=37810,mh=37811,gh=37812,vh=37813,xh=37814,_h=37815,yh=37816,Sh=37817,Mh=37818,Eh=37819,wh=37820,Th=37821,bh=36492,Ah=36494,Rh=36495,Ch=36283,Ph=36284,hc=36285,Nh=36286,Yx=3200,Lh=0,qx=1,Vr="",dn="srgb",dc="srgb-linear",pc="linear",Ot="srgb",Ks=7680,Hm=519,jx=512,$x=513,Kx=514,ed=515,Zx=516,Qx=517,td=518,Jx=519,Dh=35044,Wm="300 es",Yi=2e3,Mo=2001;function e_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function t_(){const s=mc("canvas");return s.style.display="block",s}const Xm={};function gc(...s){const e="THREE."+s.shift();console.log(e,...s)}function lg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ft(...s){s=lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Pt(...s){s=lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ma(...s){const e=s.join(" ");e in Xm||(Xm[e]=!0,ft(...s))}function n_(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const i_={[jf]:$f,[Kf]:Jf,[Zf]:eh,[va]:Qf,[$f]:jf,[Jf]:Kf,[eh]:Zf,[Qf]:va};class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],df=Math.PI/180,Ih=180/Math.PI;function Hr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Nt(s,e,t){return Math.max(e,Math.min(t,s))}function r_(s,e){return(s%e+e)%e}function pf(s,e,t){return(1-t)*s+t*e}function Wi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const cd=class cd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cd.prototype.isVector2=!0;let at=cd;class Ma{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,d){let f=r[a+0],p=r[a+1],x=r[a+2],_=r[a+3],g=l[u+0],M=l[u+1],E=l[u+2],R=l[u+3];if(_!==R||f!==g||p!==M||x!==E){let v=f*g+p*M+x*E+_*R;v<0&&(g=-g,M=-M,E=-E,R=-R,v=-v);let y=1-d;if(v<.9995){const D=Math.acos(v),P=Math.sin(D);y=Math.sin(y*D)/P,d=Math.sin(d*D)/P,f=f*y+g*d,p=p*y+M*d,x=x*y+E*d,_=_*y+R*d}else{f=f*y+g*d,p=p*y+M*d,x=x*y+E*d,_=_*y+R*d;const D=1/Math.sqrt(f*f+p*p+x*x+_*_);f*=D,p*=D,x*=D,_*=D}}e[t]=f,e[t+1]=p,e[t+2]=x,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,u){const d=r[a],f=r[a+1],p=r[a+2],x=r[a+3],_=l[u],g=l[u+1],M=l[u+2],E=l[u+3];return e[t]=d*E+x*_+f*M-p*g,e[t+1]=f*E+x*g+p*_-d*M,e[t+2]=p*E+x*M+d*g-f*_,e[t+3]=x*E-d*_-f*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(r/2),x=d(a/2),_=d(l/2),g=f(r/2),M=f(a/2),E=f(l/2);switch(u){case"XYZ":this._x=g*x*_+p*M*E,this._y=p*M*_-g*x*E,this._z=p*x*E+g*M*_,this._w=p*x*_-g*M*E;break;case"YXZ":this._x=g*x*_+p*M*E,this._y=p*M*_-g*x*E,this._z=p*x*E-g*M*_,this._w=p*x*_+g*M*E;break;case"ZXY":this._x=g*x*_-p*M*E,this._y=p*M*_+g*x*E,this._z=p*x*E+g*M*_,this._w=p*x*_-g*M*E;break;case"ZYX":this._x=g*x*_-p*M*E,this._y=p*M*_+g*x*E,this._z=p*x*E-g*M*_,this._w=p*x*_+g*M*E;break;case"YZX":this._x=g*x*_+p*M*E,this._y=p*M*_+g*x*E,this._z=p*x*E-g*M*_,this._w=p*x*_-g*M*E;break;case"XZY":this._x=g*x*_-p*M*E,this._y=p*M*_-g*x*E,this._z=p*x*E+g*M*_,this._w=p*x*_+g*M*E;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],x=t[6],_=t[10],g=r+d+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(x-f)*M,this._y=(l-p)*M,this._z=(u-a)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(x-f)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(l-p)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(f+x)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(u-a)/M,this._x=(l+p)/M,this._y=(f+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,x=t._w;return this._x=r*x+u*d+a*p-l*f,this._y=a*x+u*f+l*d-r*p,this._z=l*x+u*p+r*f-a*d,this._w=u*x-r*d-a*f-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,l=-l,u=-u,d=-d);let f=1-t;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);f=Math.sin(f*p)/x,t=Math.sin(t*p)/x,this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ud=class ud{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*a-d*r),x=2*(d*t-l*a),_=2*(l*r-u*t);return this.x=t+f*p+u*_-d*x,this.y=r+f*x+d*p-l*_,this.z=a+f*_+l*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=a*f-l*d,this.y=l*u-r*f,this.z=r*d-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return mf.copy(this).projectOnVector(e),this.sub(mf)}reflect(e){return this.sub(mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ud.prototype.isVector3=!0;let Q=ud;const mf=new Q,Ym=new Ma,fd=class fd{constructor(e,t,r,a,l,u,d,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,f,p)}set(e,t,r,a,l,u,d,f,p){const x=this.elements;return x[0]=e,x[1]=a,x[2]=d,x[3]=t,x[4]=l,x[5]=f,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[3],f=r[6],p=r[1],x=r[4],_=r[7],g=r[2],M=r[5],E=r[8],R=a[0],v=a[3],y=a[6],D=a[1],P=a[4],b=a[7],C=a[2],L=a[5],k=a[8];return l[0]=u*R+d*D+f*C,l[3]=u*v+d*P+f*L,l[6]=u*y+d*b+f*k,l[1]=p*R+x*D+_*C,l[4]=p*v+x*P+_*L,l[7]=p*y+x*b+_*k,l[2]=g*R+M*D+E*C,l[5]=g*v+M*P+E*L,l[8]=g*y+M*b+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],x=e[8];return t*u*x-t*d*p-r*l*x+r*d*f+a*l*p-a*u*f}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],x=e[8],_=x*u-d*p,g=d*f-x*l,M=p*l-u*f,E=t*_+r*g+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=_*R,e[1]=(a*p-x*r)*R,e[2]=(d*r-a*u)*R,e[3]=g*R,e[4]=(x*t-a*f)*R,e[5]=(a*l-d*t)*R,e[6]=M*R,e[7]=(r*f-p*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*d)+u+e,-a*p,a*f,-a*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return ma("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gf.makeScale(e,t)),this}rotate(e){return ma("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gf.makeRotation(-e)),this}translate(e,t){return ma("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fd.prototype.isMatrix3=!0;let _t=fd;const gf=new _t,qm=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jm=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s_(){const s={enabled:!0,workingColorSpace:dc,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ot&&(a.r=dr(a.r),a.g=dr(a.g),a.b=dr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(a.r=ga(a.r),a.g=ga(a.g),a.b=ga(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Vr?pc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[dc]:{primaries:e,whitePoint:r,transfer:pc,toXYZ:qm,fromXYZ:jm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:qm,fromXYZ:jm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),s}const Rt=s_();function dr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class a_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=mc("canvas")),Zs.width=e.width,Zs.height=e.height;const a=Zs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=dr(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(dr(t[r]/255)*255):t[r]=dr(t[r]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o_=0;class nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(vf(a[u].image)):l.push(vf(a[u]))}else l=vf(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function vf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?a_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let l_=0;const xf=new Q;class In extends ws{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,r=hr,a=hr,l=Tn,u=xs,d=Ui,f=ui,p=In.DEFAULT_ANISOTROPY,x=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Hr(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xf).x}get height(){return this.source.getSize(xf).y}get depth(){return this.source.getSize(xf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=eg;In.DEFAULT_ANISOTROPY=1;const hd=class hd{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const f=e.elements,p=f[0],x=f[4],_=f[8],g=f[1],M=f[5],E=f[9],R=f[2],v=f[6],y=f[10];if(Math.abs(x-g)<.01&&Math.abs(_-R)<.01&&Math.abs(E-v)<.01){if(Math.abs(x+g)<.1&&Math.abs(_+R)<.1&&Math.abs(E+v)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,b=(M+1)/2,C=(y+1)/2,L=(x+g)/4,k=(_+R)/4,w=(E+v)/4;return P>b&&P>C?P<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(P),a=L/r,l=k/r):b>C?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=L/a,l=w/a):C<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(C),r=k/l,a=w/l),this.set(r,a,l,t),this}let D=Math.sqrt((v-E)*(v-E)+(_-R)*(_-R)+(g-x)*(g-x));return Math.abs(D)<.001&&(D=1),this.x=(v-E)/D,this.y=(_-R)/D,this.z=(g-x)/D,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hd.prototype.isVector4=!0;let rn=hd;class c_ extends ws{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new In(a),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new nd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends c_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class cg extends In{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u_ extends In{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _c=class _c{constructor(e,t,r,a,l,u,d,f,p,x,_,g,M,E,R,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,f,p,x,_,g,M,E,R,v)}set(e,t,r,a,l,u,d,f,p,x,_,g,M,E,R,v){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=a,y[1]=l,y[5]=u,y[9]=d,y[13]=f,y[2]=p,y[6]=x,y[10]=_,y[14]=g,y[3]=M,y[7]=E,y[11]=R,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _c().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/Qs.setFromMatrixColumn(e,0).length(),l=1/Qs.setFromMatrixColumn(e,1).length(),u=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(a),p=Math.sin(a),x=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*x,M=u*_,E=d*x,R=d*_;t[0]=f*x,t[4]=-f*_,t[8]=p,t[1]=M+E*p,t[5]=g-R*p,t[9]=-d*f,t[2]=R-g*p,t[6]=E+M*p,t[10]=u*f}else if(e.order==="YXZ"){const g=f*x,M=f*_,E=p*x,R=p*_;t[0]=g+R*d,t[4]=E*d-M,t[8]=u*p,t[1]=u*_,t[5]=u*x,t[9]=-d,t[2]=M*d-E,t[6]=R+g*d,t[10]=u*f}else if(e.order==="ZXY"){const g=f*x,M=f*_,E=p*x,R=p*_;t[0]=g-R*d,t[4]=-u*_,t[8]=E+M*d,t[1]=M+E*d,t[5]=u*x,t[9]=R-g*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const g=u*x,M=u*_,E=d*x,R=d*_;t[0]=f*x,t[4]=E*p-M,t[8]=g*p+R,t[1]=f*_,t[5]=R*p+g,t[9]=M*p-E,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const g=u*f,M=u*p,E=d*f,R=d*p;t[0]=f*x,t[4]=R-g*_,t[8]=E*_+M,t[1]=_,t[5]=u*x,t[9]=-d*x,t[2]=-p*x,t[6]=M*_+E,t[10]=g-R*_}else if(e.order==="XZY"){const g=u*f,M=u*p,E=d*f,R=d*p;t[0]=f*x,t[4]=-_,t[8]=p*x,t[1]=g*_+R,t[5]=u*x,t[9]=M*_-E,t[2]=E*_-M,t[6]=d*x,t[10]=R*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f_,e,h_)}lookAt(e,t,r){const a=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Ur.crossVectors(r,si),Ur.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ur.crossVectors(r,si)),Ur.normalize(),Ll.crossVectors(si,Ur),a[0]=Ur.x,a[4]=Ll.x,a[8]=si.x,a[1]=Ur.y,a[5]=Ll.y,a[9]=si.y,a[2]=Ur.z,a[6]=Ll.z,a[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[4],f=r[8],p=r[12],x=r[1],_=r[5],g=r[9],M=r[13],E=r[2],R=r[6],v=r[10],y=r[14],D=r[3],P=r[7],b=r[11],C=r[15],L=a[0],k=a[4],w=a[8],I=a[12],Y=a[1],W=a[5],j=a[9],ce=a[13],re=a[2],$=a[6],B=a[10],G=a[14],V=a[3],q=a[7],ne=a[11],F=a[15];return l[0]=u*L+d*Y+f*re+p*V,l[4]=u*k+d*W+f*$+p*q,l[8]=u*w+d*j+f*B+p*ne,l[12]=u*I+d*ce+f*G+p*F,l[1]=x*L+_*Y+g*re+M*V,l[5]=x*k+_*W+g*$+M*q,l[9]=x*w+_*j+g*B+M*ne,l[13]=x*I+_*ce+g*G+M*F,l[2]=E*L+R*Y+v*re+y*V,l[6]=E*k+R*W+v*$+y*q,l[10]=E*w+R*j+v*B+y*ne,l[14]=E*I+R*ce+v*G+y*F,l[3]=D*L+P*Y+b*re+C*V,l[7]=D*k+P*W+b*$+C*q,l[11]=D*w+P*j+b*B+C*ne,l[15]=D*I+P*ce+b*G+C*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],x=e[2],_=e[6],g=e[10],M=e[14],E=e[3],R=e[7],v=e[11],y=e[15],D=f*M-p*g,P=d*M-p*_,b=d*g-f*_,C=u*M-p*x,L=u*g-f*x,k=u*_-d*x;return t*(R*D-v*P+y*b)-r*(E*D-v*C+y*L)+a*(E*P-R*C+y*k)-l*(E*b-R*L+v*k)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],u=e[5],d=e[9],f=e[2],p=e[6],x=e[10];return t*(u*x-d*p)-r*(l*x-d*f)+a*(l*p-u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],x=e[8],_=e[9],g=e[10],M=e[11],E=e[12],R=e[13],v=e[14],y=e[15],D=t*d-r*u,P=t*f-a*u,b=t*p-l*u,C=r*f-a*d,L=r*p-l*d,k=a*p-l*f,w=x*R-_*E,I=x*v-g*E,Y=x*y-M*E,W=_*v-g*R,j=_*y-M*R,ce=g*y-M*v,re=D*ce-P*j+b*W+C*Y-L*I+k*w;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/re;return e[0]=(d*ce-f*j+p*W)*$,e[1]=(a*j-r*ce-l*W)*$,e[2]=(R*k-v*L+y*C)*$,e[3]=(g*L-_*k-M*C)*$,e[4]=(f*Y-u*ce-p*I)*$,e[5]=(t*ce-a*Y+l*I)*$,e[6]=(v*b-E*k-y*P)*$,e[7]=(x*k-g*b+M*P)*$,e[8]=(u*j-d*Y+p*w)*$,e[9]=(r*Y-t*j-l*w)*$,e[10]=(E*L-R*b+y*D)*$,e[11]=(_*b-x*L-M*D)*$,e[12]=(d*I-u*W-f*w)*$,e[13]=(t*W-r*I+a*w)*$,e[14]=(R*P-E*C-v*D)*$,e[15]=(x*C-_*P+g*D)*$,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,d=e.y,f=e.z,p=l*u,x=l*d;return this.set(p*u+r,p*d-a*f,p*f+a*d,0,p*d+a*f,x*d+r,x*f-a*u,0,p*f-a*d,x*f+a*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,x=u+u,_=d+d,g=l*p,M=l*x,E=l*_,R=u*x,v=u*_,y=d*_,D=f*p,P=f*x,b=f*_,C=r.x,L=r.y,k=r.z;return a[0]=(1-(R+y))*C,a[1]=(M+b)*C,a[2]=(E-P)*C,a[3]=0,a[4]=(M-b)*L,a[5]=(1-(g+y))*L,a[6]=(v+D)*L,a[7]=0,a[8]=(E+P)*k,a[9]=(v-D)*k,a[10]=(1-(g+R))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Qs.set(a[0],a[1],a[2]).length();const d=Qs.set(a[4],a[5],a[6]).length(),f=Qs.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Li.copy(this);const p=1/u,x=1/d,_=1/f;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=x,Li.elements[5]*=x,Li.elements[6]*=x,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,t.setFromRotationMatrix(Li),r.x=u,r.y=d,r.z=f,this}makePerspective(e,t,r,a,l,u,d=Yi,f=!1){const p=this.elements,x=2*l/(t-e),_=2*l/(r-a),g=(t+e)/(t-e),M=(r+a)/(r-a);let E,R;if(f)E=l/(u-l),R=u*l/(u-l);else if(d===Yi)E=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(d===Mo)E=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,u,d=Yi,f=!1){const p=this.elements,x=2/(t-e),_=2/(r-a),g=-(t+e)/(t-e),M=-(r+a)/(r-a);let E,R;if(f)E=1/(u-l),R=u/(u-l);else if(d===Yi)E=-2/(u-l),R=-(u+l)/(u-l);else if(d===Mo)E=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};_c.prototype.isMatrix4=!0;let Kt=_c;const Qs=new Q,Li=new Kt,f_=new Q(0,0,0),h_=new Q(1,1,1),Ur=new Q,Ll=new Q,si=new Q,$m=new Kt,Km=new Ma;class Xr{constructor(e=0,t=0,r=0,a=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],f=a[1],p=a[5],x=a[9],_=a[2],g=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Nt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return $m.makeRotationFromQuaternion(e),this.setFromRotationMatrix($m,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Km.setFromEuler(this),this.setFromQuaternion(Km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d_=0;const Zm=new Q,Js=new Ma,ar=new Kt,Dl=new Q,oo=new Q,p_=new Q,m_=new Ma,Qm=new Q(1,0,0),Jm=new Q(0,1,0),e0=new Q(0,0,1),t0={type:"added"},g_={type:"removed"},ea={type:"childadded",child:null},_f={type:"childremoved",child:null};class Yt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new Q,t=new Xr,r=new Ma,a=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new _t}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Qm,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(e0,e)}translateOnAxis(e,t){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qm,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(e0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Dl.copy(e):Dl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(oo,Dl,this.up):ar.lookAt(Dl,oo,this.up),this.quaternion.setFromRotationMatrix(ar),a&&(ar.extractRotation(a.matrixWorld),Js.setFromRotationMatrix(ar),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t0),ea.child=e,this.dispatchEvent(ea),ea.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g_),_f.child=e,this.dispatchEvent(_f),_f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t0),ea.child=e,this.dispatchEvent(ea),ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,p_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,m_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,x=f.length;p<x;p++){const _=f[p];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];a.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),x=u(e.images),_=u(e.shapes),g=u(e.skeletons),M=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(d){const f=[];for(const p in d){const x=d[p];delete x.metadata,f.push(x)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Yt.DEFAULT_UP=new Q(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fi extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v_={type:"move"};class yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const v=t.getJointPose(R,r),y=this._getHandJoint(p,R);v!==null&&(y.matrix.fromArray(v.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=v.radius),y.visible=v!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=x.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&g>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(v_)))}return d!==null&&(d.visible=a!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new fi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Sf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class yt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Rt.workingColorSpace){if(e=r_(e,1),t=Nt(t,0,1),r=Nt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Sf(u,l,e+1/3),this.g=Sf(u,l,e),this.b=Sf(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,a),this}setStyle(e,t=dn){function r(l){l!==void 0&&parseFloat(l)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const r=ug[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Rt.workingToColorSpace(Ln.copy(this),e),Math.round(Nt(Ln.r*255,0,255))*65536+Math.round(Nt(Ln.g*255,0,255))*256+Math.round(Nt(Ln.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Ln.copy(this),t);const r=Ln.r,a=Ln.g,l=Ln.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let f,p;const x=(d+u)/2;if(d===u)f=0,p=0;else{const _=u-d;switch(p=x<=.5?_/(u+d):_/(2-u-d),u){case r:f=(a-l)/_+(a<l?6:0);break;case a:f=(l-r)/_+2;break;case l:f=(r-a)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=x,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=dn){Rt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,r=Ln.g,a=Ln.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(Il);const r=pf(Fr.h,Il.h,t),a=pf(Fr.s,Il.s,t),l=pf(Fr.l,Il.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new yt;yt.NAMES=ug;class rd{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new yt(e),this.near=t,this.far=r}clone(){return new rd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class x_ extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Di=new Q,or=new Q,Mf=new Q,lr=new Q,ta=new Q,na=new Q,n0=new Q,Ef=new Q,wf=new Q,Tf=new Q,bf=new rn,Af=new rn,Rf=new rn;class Mi{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Di.subVectors(e,t),a.cross(Di);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Di.subVectors(a,t),or.subVectors(r,t),Mf.subVectors(e,t);const u=Di.dot(Di),d=Di.dot(or),f=Di.dot(Mf),p=or.dot(or),x=or.dot(Mf),_=u*p-d*d;if(_===0)return l.set(0,0,0),null;const g=1/_,M=(p*f-d*x)*g,E=(u*x-d*f)*g;return l.set(1-M-E,E,M)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,r,a,l,u,d,f){return this.getBarycoord(e,t,r,a,lr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,lr.x),f.addScaledVector(u,lr.y),f.addScaledVector(d,lr.z),f)}static getInterpolatedAttribute(e,t,r,a,l,u){return bf.setScalar(0),Af.setScalar(0),Rf.setScalar(0),bf.fromBufferAttribute(e,t),Af.fromBufferAttribute(e,r),Rf.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(bf,l.x),u.addScaledVector(Af,l.y),u.addScaledVector(Rf,l.z),u}static isFrontFacing(e,t,r,a){return Di.subVectors(r,t),or.subVectors(e,t),Di.cross(or).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Di.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Mi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,d;ta.subVectors(a,r),na.subVectors(l,r),Ef.subVectors(e,r);const f=ta.dot(Ef),p=na.dot(Ef);if(f<=0&&p<=0)return t.copy(r);wf.subVectors(e,a);const x=ta.dot(wf),_=na.dot(wf);if(x>=0&&_<=x)return t.copy(a);const g=f*_-x*p;if(g<=0&&f>=0&&x<=0)return u=f/(f-x),t.copy(r).addScaledVector(ta,u);Tf.subVectors(e,l);const M=ta.dot(Tf),E=na.dot(Tf);if(E>=0&&M<=E)return t.copy(l);const R=M*p-f*E;if(R<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(r).addScaledVector(na,d);const v=x*E-M*_;if(v<=0&&_-x>=0&&M-E>=0)return n0.subVectors(l,a),d=(_-x)/(_-x+(M-E)),t.copy(a).addScaledVector(n0,d);const y=1/(v+R+g);return u=R*y,d=g*y,t.copy(r).addScaledVector(ta,u).addScaledVector(na,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bo{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ii):Ii.fromBufferAttribute(l,u),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ul.copy(r.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Fl.subVectors(this.max,lo),ia.subVectors(e.a,lo),ra.subVectors(e.b,lo),sa.subVectors(e.c,lo),Or.subVectors(ra,ia),kr.subVectors(sa,ra),us.subVectors(ia,sa);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-us.z,us.y,Or.z,0,-Or.x,kr.z,0,-kr.x,us.z,0,-us.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-us.y,us.x,0];return!Cf(t,ia,ra,sa,Fl)||(t=[1,0,0,0,1,0,0,0,1],!Cf(t,ia,ra,sa,Fl))?!1:(Ol.crossVectors(Or,kr),t=[Ol.x,Ol.y,Ol.z],Cf(t,ia,ra,sa,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ii=new Q,Ul=new bo,ia=new Q,ra=new Q,sa=new Q,Or=new Q,kr=new Q,us=new Q,lo=new Q,Fl=new Q,Ol=new Q,fs=new Q;function Cf(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){fs.fromArray(s,l);const d=a.x*Math.abs(fs.x)+a.y*Math.abs(fs.y)+a.z*Math.abs(fs.z),f=e.dot(fs),p=t.dot(fs),x=r.dot(fs);if(Math.max(-Math.max(f,p,x),Math.min(f,p,x))>d)return!1}return!0}const cn=new Q,kl=new at;let __=0;class Ei extends ws{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:__++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Dh,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)kl.fromBufferAttribute(this,t),kl.applyMatrix3(e),this.setXY(t,kl.x,kl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Wi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ht(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array),l=Ht(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fg extends Ei{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class hg extends Ei{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class un extends Ei{constructor(e,t,r){super(new Float32Array(e),t,r)}}const y_=new bo,co=new Q,Pf=new Q;class Mc{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):y_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(co,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(Pf)),this.expandByPoint(co.copy(e.center).sub(Pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let S_=0;const yi=new Kt,Nf=new Yt,aa=new Q,ai=new bo,uo=new bo,_n=new Q;class Un extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?hg:fg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new _t().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,r){return yi.makeTranslation(e,t,r),this.applyMatrix4(yi),this}scale(e,t,r){return yi.makeScale(e,t,r),this.applyMatrix4(yi),this}lookAt(e){return Nf.lookAt(e),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new un(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ai.setFromBufferAttribute(l),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];uo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ai.min,uo.min),ai.expandByPoint(_n),_n.addVectors(ai.max,uo.max),ai.expandByPoint(_n)):(ai.expandByPoint(uo.min),ai.expandByPoint(uo.max))}ai.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)_n.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(_n));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)_n.fromBufferAttribute(d,p),f&&(aa.fromBufferAttribute(e,p),_n.add(aa)),a=Math.max(a,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ei(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],f=[];for(let w=0;w<r.count;w++)d[w]=new Q,f[w]=new Q;const p=new Q,x=new Q,_=new Q,g=new at,M=new at,E=new at,R=new Q,v=new Q;function y(w,I,Y){p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,I),_.fromBufferAttribute(r,Y),g.fromBufferAttribute(l,w),M.fromBufferAttribute(l,I),E.fromBufferAttribute(l,Y),x.sub(p),_.sub(p),M.sub(g),E.sub(g);const W=1/(M.x*E.y-E.x*M.y);isFinite(W)&&(R.copy(x).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(W),v.copy(_).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(W),d[w].add(R),d[I].add(R),d[Y].add(R),f[w].add(v),f[I].add(v),f[Y].add(v))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let w=0,I=D.length;w<I;++w){const Y=D[w],W=Y.start,j=Y.count;for(let ce=W,re=W+j;ce<re;ce+=3)y(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const P=new Q,b=new Q,C=new Q,L=new Q;function k(w){C.fromBufferAttribute(a,w),L.copy(C);const I=d[w];P.copy(I),P.sub(C.multiplyScalar(C.dot(I))).normalize(),b.crossVectors(L,I);const W=b.dot(f[w])<0?-1:1;u.setXYZW(w,P.x,P.y,P.z,W)}for(let w=0,I=D.length;w<I;++w){const Y=D[w],W=Y.start,j=Y.count;for(let ce=W,re=W+j;ce<re;ce+=3)k(e.getX(ce+0)),k(e.getX(ce+1)),k(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const a=new Q,l=new Q,u=new Q,d=new Q,f=new Q,p=new Q,x=new Q,_=new Q;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),R=e.getX(g+1),v=e.getX(g+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,v),x.subVectors(u,l),_.subVectors(a,l),x.cross(_),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,v),d.add(x),f.add(x),p.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,f.x,f.y,f.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let g=0,M=t.count;g<M;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),x.subVectors(u,l),_.subVectors(a,l),x.cross(_),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,f){const p=d.array,x=d.itemSize,_=d.normalized,g=new p.constructor(f.length*x);let M=0,E=0;for(let R=0,v=f.length;R<v;R++){d.isInterleavedBufferAttribute?M=f[R]*d.data.stride+d.offset:M=f[R]*x;for(let y=0;y<x;y++)g[E++]=p[M++]}return new Ei(g,x,_)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,r=this.index.array,a=this.attributes;for(const d in a){const f=a[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let x=0,_=p.length;x<_;x++){const g=p[x],M=e(g,r);f.push(M)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],x=[];for(let _=0,g=p.length;_<g;_++){const M=p[_];x.push(M.toJSON(e.data))}x.length>0&&(a[f]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const x=a[p];this.setAttribute(p,x.clone(t))}const l=e.morphAttributes;for(const p in l){const x=[],_=l[p];for(let g=0,M=_.length;g<M;g++)x.push(_[g].clone(t));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class M_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dh,this.updateRanges=[],this.version=0,this.uuid=Hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new Q;class vc{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Wi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ht(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),a=Ht(a,this.array),l=Ht(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){gc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new Ei(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){gc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let E_=0;class Ts extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=pa,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=qf,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==pa&&(r.blending=this.blending),this.side!==Wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yf&&(r.blendSrc=this.blendSrc),this.blendDst!==qf&&(r.blendDst=this.blendDst),this.blendEquation!==gs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new at().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Eo extends Ts{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let oa;const fo=new Q,la=new Q,ca=new Q,ua=new at,ho=new at,dg=new Kt,zl=new Q,po=new Q,Bl=new Q,i0=new at,Lf=new at,r0=new at;class xc extends Yt{constructor(e=new Eo){if(super(),this.isSprite=!0,this.type="Sprite",oa===void 0){oa=new Un;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new M_(t,5);oa.setIndex([0,1,2,0,2,3]),oa.setAttribute("position",new vc(r,3,0,!1)),oa.setAttribute("uv",new vc(r,2,3,!1))}this.geometry=oa,this.material=e,this.center=new at(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),la.setFromMatrixScale(this.matrixWorld),dg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ca.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&la.multiplyScalar(-ca.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const u=this.center;Vl(zl.set(-.5,-.5,0),ca,u,la,a,l),Vl(po.set(.5,-.5,0),ca,u,la,a,l),Vl(Bl.set(.5,.5,0),ca,u,la,a,l),i0.set(0,0),Lf.set(1,0),r0.set(1,1);let d=e.ray.intersectTriangle(zl,po,Bl,!1,fo);if(d===null&&(Vl(po.set(-.5,.5,0),ca,u,la,a,l),Lf.set(0,1),d=e.ray.intersectTriangle(zl,Bl,po,!1,fo),d===null))return;const f=e.ray.origin.distanceTo(fo);f<e.near||f>e.far||t.push({distance:f,point:fo.clone(),uv:Mi.getInterpolation(fo,zl,po,Bl,i0,Lf,r0,new at),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vl(s,e,t,r,a,l){ua.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(ho.x=l*ua.x-a*ua.y,ho.y=a*ua.x+l*ua.y):ho.copy(ua),s.copy(e),s.x+=ho.x,s.y+=ho.y,s.applyMatrix4(dg)}const ur=new Q,Df=new Q,Gl=new Q,zr=new Q,If=new Q,Hl=new Q,Uf=new Q;class sd{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Df.copy(e).add(t).multiplyScalar(.5),Gl.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Df);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Gl),d=zr.dot(this.direction),f=-zr.dot(Gl),p=zr.lengthSq(),x=Math.abs(1-u*u);let _,g,M,E;if(x>0)if(_=u*f-d,g=u*d-f,E=l*x,_>=0)if(g>=-E)if(g<=E){const R=1/x;_*=R,g*=R,M=_*(_+u*g+2*d)+g*(u*_+g+2*f)+p}else g=l,_=Math.max(0,-(u*g+d)),M=-_*_+g*(g+2*f)+p;else g=-l,_=Math.max(0,-(u*g+d)),M=-_*_+g*(g+2*f)+p;else g<=-E?(_=Math.max(0,-(-u*l+d)),g=_>0?-l:Math.min(Math.max(-l,-f),l),M=-_*_+g*(g+2*f)+p):g<=E?(_=0,g=Math.min(Math.max(-l,-f),l),M=g*(g+2*f)+p):(_=Math.max(0,-(u*l+d)),g=_>0?l:Math.min(Math.max(-l,-f),l),M=-_*_+g*(g+2*f)+p);else g=u>0?-l:l,_=Math.max(0,-(u*g+d)),M=-_*_+g*(g+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Df).addScaledVector(Gl,g),M}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const r=ur.dot(this.direction),a=ur.dot(ur)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,d,f;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,a=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,a=(e.min.x-g.x)*p),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),_>=0?(d=(e.min.z-g.z)*_,f=(e.max.z-g.z)*_):(d=(e.max.z-g.z)*_,f=(e.min.z-g.z)*_),r>f||d>a)||((d>r||r!==r)&&(r=d),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,r,a,l){If.subVectors(t,e),Hl.subVectors(r,e),Uf.crossVectors(If,Hl);let u=this.direction.dot(Uf),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;zr.subVectors(this.origin,e);const f=d*this.direction.dot(Hl.crossVectors(zr,Hl));if(f<0)return null;const p=d*this.direction.dot(If.cross(zr));if(p<0||f+p>u)return null;const x=-d*zr.dot(Uf);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hn extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=J0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const s0=new Kt,hs=new sd,Wl=new Mc,a0=new Q,Xl=new Q,Yl=new Q,ql=new Q,Ff=new Q,jl=new Q,o0=new Q,$l=new Q;class ut extends Yt{constructor(e=new Un,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){jl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const x=d[f],_=l[f];x!==0&&(Ff.fromBufferAttribute(_,e),u?jl.addScaledVector(Ff,x):jl.addScaledVector(Ff.sub(t),x))}t.add(jl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(l),hs.copy(e.ray).recast(e.near),!(Wl.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Wl,a0)===null||hs.origin.distanceToSquared(a0)>(e.far-e.near)**2))&&(s0.copy(l).invert(),hs.copy(e.ray).applyMatrix4(s0),!(r.boundingBox!==null&&hs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,_=l.attributes.normal,g=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const v=g[E],y=u[v.materialIndex],D=Math.max(v.start,M.start),P=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let b=D,C=P;b<C;b+=3){const L=d.getX(b),k=d.getX(b+1),w=d.getX(b+2);a=Kl(this,y,e,r,p,x,_,L,k,w),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let v=E,y=R;v<y;v+=3){const D=d.getX(v),P=d.getX(v+1),b=d.getX(v+2);a=Kl(this,u,e,r,p,x,_,D,P,b),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const v=g[E],y=u[v.materialIndex],D=Math.max(v.start,M.start),P=Math.min(f.count,Math.min(v.start+v.count,M.start+M.count));for(let b=D,C=P;b<C;b+=3){const L=b,k=b+1,w=b+2;a=Kl(this,y,e,r,p,x,_,L,k,w),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),R=Math.min(f.count,M.start+M.count);for(let v=E,y=R;v<y;v+=3){const D=v,P=v+1,b=v+2;a=Kl(this,u,e,r,p,x,_,D,P,b),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function w_(s,e,t,r,a,l,u,d){let f;if(e.side===Jn?f=r.intersectTriangle(u,l,a,!0,d):f=r.intersectTriangle(a,l,u,e.side===Wr,d),f===null)return null;$l.copy(d),$l.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo($l);return p<t.near||p>t.far?null:{distance:p,point:$l.clone(),object:s}}function Kl(s,e,t,r,a,l,u,d,f,p){s.getVertexPosition(d,Xl),s.getVertexPosition(f,Yl),s.getVertexPosition(p,ql);const x=w_(s,e,t,r,Xl,Yl,ql,o0);if(x){const _=new Q;Mi.getBarycoord(o0,Xl,Yl,ql,_),a&&(x.uv=Mi.getInterpolatedAttribute(a,d,f,p,_,new at)),l&&(x.uv1=Mi.getInterpolatedAttribute(l,d,f,p,_,new at)),u&&(x.normal=Mi.getInterpolatedAttribute(u,d,f,p,_,new Q),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:d,b:f,c:p,normal:new Q,materialIndex:0};Mi.getNormal(Xl,Yl,ql,g.normal),x.face=g,x.barycoord=_}return x}class T_ extends In{constructor(e=null,t=1,r=1,a,l,u,d,f,p=wn,x=wn,_,g){super(null,u,d,f,p,x,a,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Of=new Q,b_=new Q,A_=new _t;class ms{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Of.subVectors(r,t).cross(b_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(Of),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||A_.getNormalMatrix(e),a=this.coplanarPoint(Of).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Mc,R_=new at(.5,.5),Zl=new Q;class ad{constructor(e=new ms,t=new ms,r=new ms,a=new ms,l=new ms,u=new ms){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Yi,r=!1){const a=this.planes,l=e.elements,u=l[0],d=l[1],f=l[2],p=l[3],x=l[4],_=l[5],g=l[6],M=l[7],E=l[8],R=l[9],v=l[10],y=l[11],D=l[12],P=l[13],b=l[14],C=l[15];if(a[0].setComponents(p-u,M-x,y-E,C-D).normalize(),a[1].setComponents(p+u,M+x,y+E,C+D).normalize(),a[2].setComponents(p+d,M+_,y+R,C+P).normalize(),a[3].setComponents(p-d,M-_,y-R,C-P).normalize(),r)a[4].setComponents(f,g,v,b).normalize(),a[5].setComponents(p-f,M-g,y-v,C-b).normalize();else if(a[4].setComponents(p-f,M-g,y-v,C-b).normalize(),t===Yi)a[5].setComponents(p+f,M+g,y+v,C+b).normalize();else if(t===Mo)a[5].setComponents(f,g,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=R_.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Zl.x=a.normal.x>0?e.max.x:e.min.x,Zl.y=a.normal.y>0?e.max.y:e.min.y,Zl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pg extends Ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const l0=new Kt,Uh=new sd,Ql=new Mc,Jl=new Q;class C_ extends Yt{constructor(e=new Un,t=new pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(a),Ql.radius+=l,e.ray.intersectsSphere(Ql)===!1)return;l0.copy(a).invert(),Uh.copy(e.ray).applyMatrix4(l0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=r.index,_=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let E=g,R=M;E<R;E++){const v=p.getX(E);Jl.fromBufferAttribute(_,v),c0(Jl,v,f,a,e,t,this)}}else{const g=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=g,R=M;E<R;E++)Jl.fromBufferAttribute(_,E),c0(Jl,E,f,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function c0(s,e,t,r,a,l,u){const d=Uh.distanceSqToPoint(s);if(d<t){const f=new Q;Uh.closestPointToPoint(s,f),f.applyMatrix4(r);const p=a.ray.origin.distanceTo(f);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class mg extends In{constructor(e=[],t=Ss,r,a,l,u,d,f,p,x){super(e,t,r,a,l,u,d,f,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qi extends In{constructor(e,t,r,a,l,u,d,f,p){super(e,t,r,a,l,u,d,f,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _a extends In{constructor(e,t,r=Ki,a,l,u,d=wn,f=wn,p,x=pr,_=1){if(x!==pr&&x!==_s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,a,l,u,d,f,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class P_ extends _a{constructor(e,t=Ki,r=Ss,a,l,u=wn,d=wn,f,p=pr){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,t,r,a,l,u,d,f,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gg extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nn extends Un{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],x=[],_=[];let g=0,M=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,a,u,2),E("x","z","y",1,-1,e,r,-t,a,u,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(f),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(_,2));function E(R,v,y,D,P,b,C,L,k,w,I){const Y=b/k,W=C/w,j=b/2,ce=C/2,re=L/2,$=k+1,B=w+1;let G=0,V=0;const q=new Q;for(let ne=0;ne<B;ne++){const F=ne*W-ce;for(let te=0;te<$;te++){const Pe=te*Y-j;q[R]=Pe*D,q[v]=F*P,q[y]=re,p.push(q.x,q.y,q.z),q[R]=0,q[v]=0,q[y]=L>0?1:-1,x.push(q.x,q.y,q.z),_.push(te/k),_.push(1-ne/w),G+=1}}for(let ne=0;ne<w;ne++)for(let F=0;F<k;F++){const te=g+F+$*ne,Pe=g+F+$*(ne+1),Be=g+(F+1)+$*(ne+1),ze=g+(F+1)+$*ne;f.push(te,Pe,ze),f.push(Pe,Be,ze),V+=6}d.addGroup(M,V,I),M+=V,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wo extends Un{constructor(e=1,t=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:a},t=Math.max(3,t);const l=[],u=[],d=[],f=[],p=new Q,x=new at;u.push(0,0,0),d.push(0,0,1),f.push(.5,.5);for(let _=0,g=3;_<=t;_++,g+=3){const M=r+_/t*a;p.x=e*Math.cos(M),p.y=e*Math.sin(M),u.push(p.x,p.y,p.z),d.push(0,0,1),x.x=(u[g]/e+1)/2,x.y=(u[g+1]/e+1)/2,f.push(x.x,x.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new un(u,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ys extends Un{constructor(e=1,t=1,r=1,a=32,l=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:f};const p=this;a=Math.floor(a),l=Math.floor(l);const x=[],_=[],g=[],M=[];let E=0;const R=[],v=r/2;let y=0;D(),u===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(x),this.setAttribute("position",new un(_,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(M,2));function D(){const b=new Q,C=new Q;let L=0;const k=(t-e)/r;for(let w=0;w<=l;w++){const I=[],Y=w/l,W=Y*(t-e)+e;for(let j=0;j<=a;j++){const ce=j/a,re=ce*f+d,$=Math.sin(re),B=Math.cos(re);C.x=W*$,C.y=-Y*r+v,C.z=W*B,_.push(C.x,C.y,C.z),b.set($,k,B).normalize(),g.push(b.x,b.y,b.z),M.push(ce,1-Y),I.push(E++)}R.push(I)}for(let w=0;w<a;w++)for(let I=0;I<l;I++){const Y=R[I][w],W=R[I+1][w],j=R[I+1][w+1],ce=R[I][w+1];(e>0||I!==0)&&(x.push(Y,W,ce),L+=3),(t>0||I!==l-1)&&(x.push(W,j,ce),L+=3)}p.addGroup(y,L,0),y+=L}function P(b){const C=E,L=new at,k=new Q;let w=0;const I=b===!0?e:t,Y=b===!0?1:-1;for(let j=1;j<=a;j++)_.push(0,v*Y,0),g.push(0,Y,0),M.push(.5,.5),E++;const W=E;for(let j=0;j<=a;j++){const re=j/a*f+d,$=Math.cos(re),B=Math.sin(re);k.x=I*B,k.y=v*Y,k.z=I*$,_.push(k.x,k.y,k.z),g.push(0,Y,0),L.x=$*.5+.5,L.y=B*.5*Y+.5,M.push(L.x,L.y),E++}for(let j=0;j<a;j++){const ce=C+j,re=W+j;b===!0?x.push(re,re+1,ce):x.push(re+1,re,ce),w+=3}p.addGroup(y,w,b===!0?1:2),y+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wn extends Un{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,d=Math.floor(r),f=Math.floor(a),p=d+1,x=f+1,_=e/d,g=t/f,M=[],E=[],R=[],v=[];for(let y=0;y<x;y++){const D=y*g-u;for(let P=0;P<p;P++){const b=P*_-l;E.push(b,-D,0),R.push(0,0,1),v.push(P/d),v.push(1-y/f)}}for(let y=0;y<f;y++)for(let D=0;D<d;D++){const P=D+p*y,b=D+p*(y+1),C=D+1+p*(y+1),L=D+1+p*y;M.push(P,b,L),M.push(b,C,L)}this.setIndex(M),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(R,3)),this.setAttribute("uv",new un(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}class od extends Un{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let p=0;const x=[],_=new Q,g=new Q,M=[],E=[],R=[],v=[];for(let y=0;y<=r;y++){const D=[],P=y/r,b=u+P*d,C=e*Math.cos(b),L=Math.sqrt(e*e-C*C);let k=0;y===0&&u===0?k=.5/t:y===r&&f===Math.PI&&(k=-.5/t);for(let w=0;w<=t;w++){const I=w/t,Y=a+I*l;_.x=-L*Math.cos(Y),_.y=C,_.z=L*Math.sin(Y),E.push(_.x,_.y,_.z),g.copy(_).normalize(),R.push(g.x,g.y,g.z),v.push(I+k,1-P),D.push(p++)}x.push(D)}for(let y=0;y<r;y++)for(let D=0;D<t;D++){const P=x[y][D+1],b=x[y][D],C=x[y+1][D],L=x[y+1][D+1];(y!==0||u>0)&&M.push(P,b,L),(y!==r-1||f<Math.PI)&&M.push(b,C,L)}this.setIndex(M),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(R,3)),this.setAttribute("uv",new un(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new od(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ya(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(u0(a))a.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(u0(a[0])){const l=[];for(let u=0,d=a.length;u<d;u++)l[u]=a[u].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Gn(s){const e={};for(let t=0;t<s.length;t++){const r=ya(s[t]);for(const a in r)e[a]=r[a]}return e}function u0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function N_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const To={clone:ya,merge:Gn};var L_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L_,this.fragmentShader=D_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ya(e.uniforms),this.uniformsGroups=N_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new yt().setHex(a.value);break;case"v2":this.uniforms[r].value=new at().fromArray(a.value);break;case"v3":this.uniforms[r].value=new Q().fromArray(a.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(a.value);break;case"m3":this.uniforms[r].value=new _t().fromArray(a.value);break;case"m4":this.uniforms[r].value=new Kt().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xg extends Dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tt extends Ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I_ extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U_ extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ec extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class F_ extends Ec{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const kf=new Kt,f0=new Q,h0=new Q;class _g{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ad,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;f0.setFromMatrixPosition(e.matrixWorld),t.position.copy(f0),h0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(h0),t.updateMatrixWorld(),kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Mo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ec=new Q,tc=new Ma,Vi=new Q;class yg extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ec,tc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(ec,tc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Br=new Q,d0=new at,p0=new at;class li extends yg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ih*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(df*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ih*2*Math.atan(Math.tan(df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,d0,p0),t.subVectors(p0,d0)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(df*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/f,t-=u.offsetY*r/p,a*=u.width/f,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class O_ extends _g{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class Fh extends Ec{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new O_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class wc extends yg{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=x*this.view.offsetY,f=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class k_ extends _g{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m0 extends Ec{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new k_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class z_ extends Ec{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const fa=-90,ha=1;class B_ extends Yt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new li(fa,ha,e,t);a.layers=this.layers,this.add(a);const l=new li(fa,ha,e,t);l.layers=this.layers,this.add(l);const u=new li(fa,ha,e,t);u.layers=this.layers,this.add(u);const d=new li(fa,ha,e,t);d.layers=this.layers,this.add(d);const f=new li(fa,ha,e,t);f.layers=this.layers,this.add(f);const p=new li(fa,ha,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Mo)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,x]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(_,g,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class V_ extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class G_{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=H_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function H_(){this._document.hidden===!1&&this.reset()}const g0=new Kt;class Sg{constructor(e,t,r=0,a=1/0){this.ray=new sd(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new id,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return g0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(g0),this}intersectObject(e,t=!0,r=[]){return Oh(e,this,r,t),r.sort(v0),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Oh(e[a],this,r,t);return r.sort(v0),r}}function v0(s,e){return s.distance-e.distance}function Oh(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Oh(l[u],e,t,!0)}}class W_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ft("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const dd=class dd{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};dd.prototype.isMatrix2=!0;let x0=dd;function _0(s,e,t,r){const a=X_(r);switch(t){case sg:return s*e;case og:return s*e/a.components*a.byteLength;case Zh:return s*e/a.components*a.byteLength;case Es:return s*e*2/a.components*a.byteLength;case Qh:return s*e*2/a.components*a.byteLength;case ag:return s*e*3/a.components*a.byteLength;case Ui:return s*e*4/a.components*a.byteLength;case Jh:return s*e*4/a.components*a.byteLength;case sc:case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case oc:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ih:case sh:return Math.max(s,16)*Math.max(e,8)/4;case nh:case rh:return Math.max(s,8)*Math.max(e,8)/2;case ah:case oh:case ch:case uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lh:case fc:case fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bh:case Ah:case Rh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ch:case Ph:return Math.ceil(s/4)*Math.ceil(e/4)*8;case hc:case Nh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X_(s){switch(s){case ui:case tg:return{byteLength:1,components:1};case yo:case ng:case hi:return{byteLength:2,components:1};case $h:case Kh:return{byteLength:2,components:4};case Ki:case jh:case Xi:return{byteLength:4,components:1};case ig:case rg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mg(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Y_(s){const e=new WeakMap;function t(d,f){const p=d.array,x=d.usage,_=p.byteLength,g=s.createBuffer();s.bindBuffer(f,g),s.bufferData(f,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,f,p){const x=f.array,_=f.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,x);else{_.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<_.length;M++){const E=_[g],R=_[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++g,_[g]=R)}_.length=g+1;for(let M=0,E=_.length;M<E;M++){const R=_[M];s.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:a,remove:l,update:u}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ty=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ny=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ay=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,My=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Py=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ky=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$y=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ES=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,PS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,US=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:q_,alphahash_pars_fragment:j_,alphamap_fragment:$_,alphamap_pars_fragment:K_,alphatest_fragment:Z_,alphatest_pars_fragment:Q_,aomap_fragment:J_,aomap_pars_fragment:ey,batching_pars_vertex:ty,batching_vertex:ny,begin_vertex:iy,beginnormal_vertex:ry,bsdfs:sy,iridescence_fragment:ay,bumpmap_pars_fragment:oy,clipping_planes_fragment:ly,clipping_planes_pars_fragment:cy,clipping_planes_pars_vertex:uy,clipping_planes_vertex:fy,color_fragment:hy,color_pars_fragment:dy,color_pars_vertex:py,color_vertex:my,common:gy,cube_uv_reflection_fragment:vy,defaultnormal_vertex:xy,displacementmap_pars_vertex:_y,displacementmap_vertex:yy,emissivemap_fragment:Sy,emissivemap_pars_fragment:My,colorspace_fragment:Ey,colorspace_pars_fragment:wy,envmap_fragment:Ty,envmap_common_pars_fragment:by,envmap_pars_fragment:Ay,envmap_pars_vertex:Ry,envmap_physical_pars_fragment:zy,envmap_vertex:Cy,fog_vertex:Py,fog_pars_vertex:Ny,fog_fragment:Ly,fog_pars_fragment:Dy,gradientmap_pars_fragment:Iy,lightmap_pars_fragment:Uy,lights_lambert_fragment:Fy,lights_lambert_pars_fragment:Oy,lights_pars_begin:ky,lights_toon_fragment:By,lights_toon_pars_fragment:Vy,lights_phong_fragment:Gy,lights_phong_pars_fragment:Hy,lights_physical_fragment:Wy,lights_physical_pars_fragment:Xy,lights_fragment_begin:Yy,lights_fragment_maps:qy,lights_fragment_end:jy,lightprobes_pars_fragment:$y,logdepthbuf_fragment:Ky,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Qy,logdepthbuf_vertex:Jy,map_fragment:eS,map_pars_fragment:tS,map_particle_fragment:nS,map_particle_pars_fragment:iS,metalnessmap_fragment:rS,metalnessmap_pars_fragment:sS,morphinstance_vertex:aS,morphcolor_vertex:oS,morphnormal_vertex:lS,morphtarget_pars_vertex:cS,morphtarget_vertex:uS,normal_fragment_begin:fS,normal_fragment_maps:hS,normal_pars_fragment:dS,normal_pars_vertex:pS,normal_vertex:mS,normalmap_pars_fragment:gS,clearcoat_normal_fragment_begin:vS,clearcoat_normal_fragment_maps:xS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:yS,opaque_fragment:SS,packing:MS,premultiplied_alpha_fragment:ES,project_vertex:wS,dithering_fragment:TS,dithering_pars_fragment:bS,roughnessmap_fragment:AS,roughnessmap_pars_fragment:RS,shadowmap_pars_fragment:CS,shadowmap_pars_vertex:PS,shadowmap_vertex:NS,shadowmask_pars_fragment:LS,skinbase_vertex:DS,skinning_pars_vertex:IS,skinning_vertex:US,skinnormal_vertex:FS,specularmap_fragment:OS,specularmap_pars_fragment:kS,tonemapping_fragment:zS,tonemapping_pars_fragment:BS,transmission_fragment:VS,transmission_pars_fragment:GS,uv_pars_fragment:HS,uv_pars_vertex:WS,uv_vertex:XS,worldpos_vertex:YS,background_vert:qS,background_frag:jS,backgroundCube_vert:$S,backgroundCube_frag:KS,cube_vert:ZS,cube_frag:QS,depth_vert:JS,depth_frag:eM,distance_vert:tM,distance_frag:nM,equirect_vert:iM,equirect_frag:rM,linedashed_vert:sM,linedashed_frag:aM,meshbasic_vert:oM,meshbasic_frag:lM,meshlambert_vert:cM,meshlambert_frag:uM,meshmatcap_vert:fM,meshmatcap_frag:hM,meshnormal_vert:dM,meshnormal_frag:pM,meshphong_vert:mM,meshphong_frag:gM,meshphysical_vert:vM,meshphysical_frag:xM,meshtoon_vert:_M,meshtoon_frag:yM,points_vert:SM,points_frag:MM,shadow_vert:EM,shadow_frag:wM,sprite_vert:TM,sprite_frag:bM},He={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Hi={basic:{uniforms:Gn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Gn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Gn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Gn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Gn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new yt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Gn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Gn([He.points,He.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Gn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Gn([He.common,He.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Gn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Gn([He.sprite,He.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Gn([He.common,He.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Gn([He.lights,He.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Hi.physical={uniforms:Gn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const nc={r:0,b:0,g:0},AM=new Kt,Eg=new _t;Eg.set(-1,0,0,0,1,0,0,0,1);function RM(s,e,t,r,a,l){const u=new yt(0);let d=a===!0?0:1,f,p,x=null,_=0,g=null;function M(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const b=D.backgroundBlurriness>0;P=e.get(P,b)}return P}function E(D){let P=!1;const b=M(D);b===null?v(u,d):b&&b.isColor&&(v(b,1),P=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,l):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(D,P){const b=M(P);b&&(b.isCubeTexture||b.mapping===Sc)?(p===void 0&&(p=new ut(new nn(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:ya(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(C,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=b,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(AM.makeRotationFromEuler(P.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Eg),p.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Ot,(x!==b||_!==b.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=b,_=b.version,g=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(f===void 0&&(f=new ut(new Wn(2,2),new Dn({name:"BackgroundMaterial",uniforms:ya(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=b,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),f.material.uniforms.uvTransform.value.copy(b.matrix),(x!==b||_!==b.version||g!==s.toneMapping)&&(f.material.needsUpdate=!0,x=b,_=b.version,g=s.toneMapping),f.layers.enableAll(),D.unshift(f,f.geometry,f.material,0,0,null))}function v(D,P){D.getRGB(nc,vg(s)),t.buffers.color.setClear(nc.r,nc.g,nc.b,P,l)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,P=1){u.set(D),d=P,v(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,v(u,d)},render:E,addToRenderList:R,dispose:y}}function CM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,u=!1;function d(W,j,ce,re,$){let B=!1;const G=_(W,re,ce,j);l!==G&&(l=G,p(l.object)),B=M(W,re,ce,$),B&&E(W,re,ce,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,b(W,j,ce,re),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function f(){return s.createVertexArray()}function p(W){return s.bindVertexArray(W)}function x(W){return s.deleteVertexArray(W)}function _(W,j,ce,re){const $=re.wireframe===!0;let B=r[j.id];B===void 0&&(B={},r[j.id]=B);const G=W.isInstancedMesh===!0?W.id:0;let V=B[G];V===void 0&&(V={},B[G]=V);let q=V[ce.id];q===void 0&&(q={},V[ce.id]=q);let ne=q[$];return ne===void 0&&(ne=g(f()),q[$]=ne),ne}function g(W){const j=[],ce=[],re=[];for(let $=0;$<t;$++)j[$]=0,ce[$]=0,re[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:re,object:W,attributes:{},index:null}}function M(W,j,ce,re){const $=l.attributes,B=j.attributes;let G=0;const V=ce.getAttributes();for(const q in V)if(V[q].location>=0){const F=$[q];let te=B[q];if(te===void 0&&(q==="instanceMatrix"&&W.instanceMatrix&&(te=W.instanceMatrix),q==="instanceColor"&&W.instanceColor&&(te=W.instanceColor)),F===void 0||F.attribute!==te||te&&F.data!==te.data)return!0;G++}return l.attributesNum!==G||l.index!==re}function E(W,j,ce,re){const $={},B=j.attributes;let G=0;const V=ce.getAttributes();for(const q in V)if(V[q].location>=0){let F=B[q];F===void 0&&(q==="instanceMatrix"&&W.instanceMatrix&&(F=W.instanceMatrix),q==="instanceColor"&&W.instanceColor&&(F=W.instanceColor));const te={};te.attribute=F,F&&F.data&&(te.data=F.data),$[q]=te,G++}l.attributes=$,l.attributesNum=G,l.index=re}function R(){const W=l.newAttributes;for(let j=0,ce=W.length;j<ce;j++)W[j]=0}function v(W){y(W,0)}function y(W,j){const ce=l.newAttributes,re=l.enabledAttributes,$=l.attributeDivisors;ce[W]=1,re[W]===0&&(s.enableVertexAttribArray(W),re[W]=1),$[W]!==j&&(s.vertexAttribDivisor(W,j),$[W]=j)}function D(){const W=l.newAttributes,j=l.enabledAttributes;for(let ce=0,re=j.length;ce<re;ce++)j[ce]!==W[ce]&&(s.disableVertexAttribArray(ce),j[ce]=0)}function P(W,j,ce,re,$,B,G){G===!0?s.vertexAttribIPointer(W,j,ce,$,B):s.vertexAttribPointer(W,j,ce,re,$,B)}function b(W,j,ce,re){R();const $=re.attributes,B=ce.getAttributes(),G=j.defaultAttributeValues;for(const V in B){const q=B[V];if(q.location>=0){let ne=$[V];if(ne===void 0&&(V==="instanceMatrix"&&W.instanceMatrix&&(ne=W.instanceMatrix),V==="instanceColor"&&W.instanceColor&&(ne=W.instanceColor)),ne!==void 0){const F=ne.normalized,te=ne.itemSize,Pe=e.get(ne);if(Pe===void 0)continue;const Be=Pe.buffer,ze=Pe.type,ie=Pe.bytesPerElement,ve=ze===s.INT||ze===s.UNSIGNED_INT||ne.gpuType===jh;if(ne.isInterleavedBufferAttribute){const fe=ne.data,we=fe.stride,Ve=ne.offset;if(fe.isInstancedInterleavedBuffer){for(let ke=0;ke<q.locationSize;ke++)y(q.location+ke,fe.meshPerAttribute);W.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<q.locationSize;ke++)v(q.location+ke);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let ke=0;ke<q.locationSize;ke++)P(q.location+ke,te/q.locationSize,ze,F,we*ie,(Ve+te/q.locationSize*ke)*ie,ve)}else{if(ne.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)y(q.location+fe,ne.meshPerAttribute);W.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let fe=0;fe<q.locationSize;fe++)v(q.location+fe);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let fe=0;fe<q.locationSize;fe++)P(q.location+fe,te/q.locationSize,ze,F,te*ie,te/q.locationSize*fe*ie,ve)}}else if(G!==void 0){const F=G[V];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(q.location,F);break;case 3:s.vertexAttrib3fv(q.location,F);break;case 4:s.vertexAttrib4fv(q.location,F);break;default:s.vertexAttrib1fv(q.location,F)}}}}D()}function C(){I();for(const W in r){const j=r[W];for(const ce in j){const re=j[ce];for(const $ in re){const B=re[$];for(const G in B)x(B[G].object),delete B[G];delete re[$]}}delete r[W]}}function L(W){if(r[W.id]===void 0)return;const j=r[W.id];for(const ce in j){const re=j[ce];for(const $ in re){const B=re[$];for(const G in B)x(B[G].object),delete B[G];delete re[$]}}delete r[W.id]}function k(W){for(const j in r){const ce=r[j];for(const re in ce){const $=ce[re];if($[W.id]===void 0)continue;const B=$[W.id];for(const G in B)x(B[G].object),delete B[G];delete $[W.id]}}}function w(W){for(const j in r){const ce=r[j],re=W.isInstancedMesh===!0?W.id:0,$=ce[re];if($!==void 0){for(const B in $){const G=$[B];for(const V in G)x(G[V].object),delete G[V];delete $[B]}delete ce[re],Object.keys(ce).length===0&&delete r[j]}}}function I(){Y(),u=!0,l!==a&&(l=a,p(l.object))}function Y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:I,resetDefaultState:Y,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:v,disableUnusedAttributes:D}}function PM(s,e,t){let r;function a(f){r=f}function l(f,p){s.drawArrays(r,f,p),t.update(p,r,1)}function u(f,p,x){x!==0&&(s.drawArraysInstanced(r,f,p,x),t.update(p,r,x))}function d(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,x);let g=0;for(let M=0;M<x;M++)g+=p[M];t.update(g,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function NM(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==Ui&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const w=k===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ui&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Xi&&!w)}function f(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const x=f(p);x!==p&&(ft("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:b,maxSamples:C,samples:L}}function LM(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new ms,d=new _t,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||r!==0||a;return a=g,r=_.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=x(_,g,0)},this.setState=function(_,g,M){const E=_.clippingPlanes,R=_.clipIntersection,v=_.clipShadows,y=s.get(_);if(!a||E===null||E.length===0||l&&!v)l?x(null):p();else{const D=l?0:r,P=D*4;let b=y.clippingState||null;f.value=b,b=x(E,g,P,M);for(let C=0;C!==P;++C)b[C]=t[C];y.clippingState=b,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,g,M,E){const R=_!==null?_.length:0;let v=null;if(R!==0){if(v=f.value,E!==!0||v===null){const y=M+R*4,D=g.matrixWorldInverse;d.getNormalMatrix(D),(v===null||v.length<y)&&(v=new Float32Array(y));for(let P=0,b=M;P!==R;++P,b+=4)u.copy(_[P]).applyMatrix4(D,d),u.normal.toArray(v,b),v[b+3]=u.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}const Gr=4,y0=[.125,.215,.35,.446,.526,.582],vs=20,DM=256,mo=new wc,S0=new yt;let zf=null,Bf=0,Vf=0,Gf=!1;const IM=new Q;class M0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:d=IM}=l;zf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,a,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zf,Bf,Vf),this._renderer.xr.enabled=Gf,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:hi,format:Ui,colorSpace:dc,depthBuffer:!1},a=E0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UM(l)),this._blurMaterial=OM(l,e,t),this._ggxMaterial=FM(l,e,t)}return a}_compileMaterial(e){const t=new ut(new Un,e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,r,a,l){const f=new li(90,1,t,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(S0),_.toneMapping=$i,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new nn,new Hn({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,v=R.material;let y=!1;const D=e.background;D?D.isColor&&(v.color.copy(D),e.background=null,y=!0):(v.color.copy(S0),y=!0);for(let P=0;P<6;P++){const b=P%3;b===0?(f.up.set(0,p[P],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+x[P],l.y,l.z)):b===1?(f.up.set(0,0,p[P]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+x[P],l.z)):(f.up.set(0,p[P],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+x[P]));const C=this._cubeSize;da(a,b*C,P>2?C:0,C,C),_.setRenderTarget(a),y&&_.render(R,f),_.render(e,f)}_.toneMapping=M,_.autoClear=g,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ss||e.mapping===xa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w0());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;da(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,mo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,p=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),g=0+p*1.25,M=_*g,{_lodMax:E}=this,R=this._sizeLods[r],v=3*R*(r>E-Gr?r-E+Gr:0),y=4*(this._cubeSize-R);f.envMap.value=e.texture,f.roughness.value=M,f.mipInt.value=E-t,da(l,v,y,3*R,2*R),a.setRenderTarget(l),a.render(d,mo),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=E-r,da(e,v,y,3*R,2*R),a.setRenderTarget(e),a.render(d,mo)}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[a];_.material=p;const g=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*vs-1),R=l/E,v=isFinite(l)?1+Math.floor(x*R):vs;v>vs&&ft(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${vs}`);const y=[];let D=0;for(let k=0;k<vs;++k){const w=k/R,I=Math.exp(-w*w/2);y.push(I),k===0?D+=I:k<v&&(D+=2*I)}for(let k=0;k<y.length;k++)y[k]=y[k]/D;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=y,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:P}=this;g.dTheta.value=E,g.mipInt.value=P-r;const b=this._sizeLods[a],C=3*b*(a>P-Gr?a-P+Gr:0),L=4*(this._cubeSize-b);da(t,C,L,3*b,2*b),f.setRenderTarget(t),f.render(_,mo)}}function UM(s){const e=[],t=[],r=[];let a=s;const l=s-Gr+1+y0.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);e.push(d);let f=1/d;u>s-Gr?f=y0[u-s+Gr-1]:u===0&&(f=0),t.push(f);const p=1/(d-2),x=-p,_=1+p,g=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,E=6,R=3,v=2,y=1,D=new Float32Array(R*E*M),P=new Float32Array(v*E*M),b=new Float32Array(y*E*M);for(let L=0;L<M;L++){const k=L%3*2/3-1,w=L>2?0:-1,I=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];D.set(I,R*E*L),P.set(g,v*E*L);const Y=[L,L,L,L,L,L];b.set(Y,y*E*L)}const C=new Un;C.setAttribute("position",new Ei(D,R)),C.setAttribute("uv",new Ei(P,v)),C.setAttribute("faceIndex",new Ei(b,y)),r.push(new ut(C,null)),a>Gr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function E0(s,e,t){const r=new ei(s,e,t);return r.texture.mapping=Sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function da(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function FM(s,e,t){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function OM(s,e,t){const r=new Float32Array(vs),a=new Q(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function w0(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function T0(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class wg extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new mg(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new nn(5,5,5),l=new Dn({name:"CubemapFromEquirect",uniforms:ya(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:ji});l.uniforms.tEquirect.value=t;const u=new ut(a,l),d=t.minFilter;return t.minFilter===xs&&(t.minFilter=Tn),new B_(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}function kM(s){let e=new WeakMap,t=new WeakMap,r=null;function a(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===uf||M===ff)if(e.has(g)){const E=e.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const R=new wg(E.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",p),d(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,E=M===uf||M===ff,R=M===Ss||M===xa;if(E||R){let v=t.get(g);const y=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new M0(s)),v=E?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),v.texture;if(v!==void 0)return v.texture;{const D=g.image;return E&&D&&D.height>0||R&&D&&f(D)?(r===null&&(r=new M0(s)),v=E?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),g.addEventListener("dispose",x),v.texture):null}}}return g}function d(g,M){return M===uf?g.mapping=Ss:M===ff&&(g.mapping=xa),g}function f(g){let M=0;const E=6;for(let R=0;R<E;R++)g[R]!==void 0&&M++;return M===E}function p(g){const M=g.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function x(g){const M=g.target;M.removeEventListener("dispose",x);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function zM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&ma("WebGLRenderer: "+r+" extension not supported."),a}}}function BM(s,e,t,r){const a={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete a[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(_,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,t.memory.geometries++),g}function f(_){const g=_.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function p(_){const g=[],M=_.index,E=_.attributes.position;let R=0;if(E===void 0)return;if(M!==null){const D=M.array;R=M.version;for(let P=0,b=D.length;P<b;P+=3){const C=D[P+0],L=D[P+1],k=D[P+2];g.push(C,L,L,k,k,C)}}else{const D=E.array;R=E.version;for(let P=0,b=D.length/3-1;P<b;P+=3){const C=P+0,L=P+1,k=P+2;g.push(C,L,L,k,k,C)}}const v=new(E.count>=65535?hg:fg)(g,1);v.version=R;const y=l.get(_);y&&e.remove(y),l.set(_,v)}function x(_){const g=l.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:f,getWireframeAttribute:x}}function VM(s,e,t){let r;function a(_){r=_}let l,u;function d(_){l=_.type,u=_.bytesPerElement}function f(_,g){s.drawElements(r,g,l,_*u),t.update(g,r,1)}function p(_,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,_*u,M),t.update(g,r,M))}function x(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,_,0,M);let R=0;for(let v=0;v<M;v++)R+=g[v];t.update(R,r,1)}this.setMode=a,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=x}function GM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function HM(s,e,t){const r=new WeakMap,a=new rn;function l(u,d,f){const p=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let g=r.get(d);if(g===void 0||g.count!==_){let Y=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",Y)};var M=Y;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),R===!0&&(b=2),v===!0&&(b=3);let C=d.attributes.position.count*b,L=1;C>e.maxTextureSize&&(L=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const k=new Float32Array(C*L*4*_),w=new cg(k,C,L,_);w.type=Xi,w.needsUpdate=!0;const I=b*4;for(let W=0;W<_;W++){const j=y[W],ce=D[W],re=P[W],$=C*L*4*W;for(let B=0;B<j.count;B++){const G=B*I;E===!0&&(a.fromBufferAttribute(j,B),k[$+G+0]=a.x,k[$+G+1]=a.y,k[$+G+2]=a.z,k[$+G+3]=0),R===!0&&(a.fromBufferAttribute(ce,B),k[$+G+4]=a.x,k[$+G+5]=a.y,k[$+G+6]=a.z,k[$+G+7]=0),v===!0&&(a.fromBufferAttribute(re,B),k[$+G+8]=a.x,k[$+G+9]=a.y,k[$+G+10]=a.z,k[$+G+11]=re.itemSize===4?a.w:1)}}g={count:_,texture:w,size:new at(C,L)},r.set(d,g),d.addEventListener("dispose",Y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let v=0;v<p.length;v++)E+=p[v];const R=d.morphTargetsRelative?1:1-E;f.getUniforms().setValue(s,"morphTargetBaseInfluence",R),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function WM(s,e,t,r,a){let l=new WeakMap;function u(p){const x=a.render.frame,_=p.geometry,g=e.get(p,_);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==x&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,x))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==x&&(M.update(),l.set(M,x))}return g}function d(){l=new WeakMap}function f(p){const x=p.target;x.removeEventListener("dispose",f),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:u,dispose:d}}const XM={[Gh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[Wh]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[qh]:"NEUTRAL_TONE_MAPPING",[Xh]:"CUSTOM_TONE_MAPPING"};function YM(s,e,t,r,a,l){const u=new ei(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,depthTexture:a?new _a(e,t):void 0}),d=new ei(e,t,{type:hi,depthBuffer:!1,stencilBuffer:!1}),f=new Un;f.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new un([0,2,0,0,2,0],2));const p=new xg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new ut(f,p),_=new wc(-1,1,1,-1,0,1);let g=null,M=null,E=!1,R,v=null,y=[],D=!1;this.setSize=function(P,b){u.setSize(P,b),d.setSize(P,b);for(let C=0;C<y.length;C++){const L=y[C];L.setSize&&L.setSize(P,b)}},this.setEffects=function(P){y=P,D=y.length>0&&y[0].isRenderPass===!0;const b=u.width,C=u.height;for(let L=0;L<y.length;L++){const k=y[L];k.setSize&&k.setSize(b,C)}},this.begin=function(P,b){if(E||P.toneMapping===$i&&y.length===0)return!1;if(v=b,b!==null){const C=b.width,L=b.height;(u.width!==C||u.height!==L)&&this.setSize(C,L)}return D===!1&&P.setRenderTarget(u),R=P.toneMapping,P.toneMapping=$i,!0},this.hasRenderPass=function(){return D},this.end=function(P,b){P.toneMapping=R,E=!0;let C=u,L=d;for(let k=0;k<y.length;k++){const w=y[k];if(w.enabled!==!1&&(w.render(P,L,C,b),w.needsSwap!==!1)){const I=C;C=L,L=I}}if(g!==P.outputColorSpace||M!==P.toneMapping){g=P.outputColorSpace,M=P.toneMapping,p.defines={},Rt.getTransfer(g)===Ot&&(p.defines.SRGB_TRANSFER="");const k=XM[M];k&&(p.defines[k]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,P.setRenderTarget(v),P.render(x,_),v=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),f.dispose(),p.dispose()}}const Tg=new In,kh=new _a(1,1),bg=new cg,Ag=new u_,Rg=new mg,b0=[],A0=[],R0=new Float32Array(16),C0=new Float32Array(9),P0=new Float32Array(4);function Ea(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=b0[a];if(l===void 0&&(l=new Float32Array(a),b0[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function pn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function bc(s,e){let t=A0[e];t===void 0&&(t=new Int32Array(e),A0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function qM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2fv(this.addr,e),mn(t,e)}}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;s.uniform3fv(this.addr,e),mn(t,e)}}function KM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4fv(this.addr,e),mn(t,e)}}function ZM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;P0.set(r),s.uniformMatrix2fv(this.addr,!1,P0),mn(t,r)}}function QM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;C0.set(r),s.uniformMatrix3fv(this.addr,!1,C0),mn(t,r)}}function JM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;R0.set(r),s.uniformMatrix4fv(this.addr,!1,R0),mn(t,r)}}function e1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2iv(this.addr,e),mn(t,e)}}function n1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3iv(this.addr,e),mn(t,e)}}function i1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4iv(this.addr,e),mn(t,e)}}function r1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function s1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2uiv(this.addr,e),mn(t,e)}}function a1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3uiv(this.addr,e),mn(t,e)}}function o1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4uiv(this.addr,e),mn(t,e)}}function l1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(kh.compareFunction=t.isReversedDepthBuffer()?td:ed,l=kh):l=Tg,t.setTexture2D(e||l,a)}function c1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Ag,a)}function u1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Rg,a)}function f1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||bg,a)}function h1(s){switch(s){case 5126:return qM;case 35664:return jM;case 35665:return $M;case 35666:return KM;case 35674:return ZM;case 35675:return QM;case 35676:return JM;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return r1;case 36294:return s1;case 36295:return a1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return f1}}function d1(s,e){s.uniform1fv(this.addr,e)}function p1(s,e){const t=Ea(e,this.size,2);s.uniform2fv(this.addr,t)}function m1(s,e){const t=Ea(e,this.size,3);s.uniform3fv(this.addr,t)}function g1(s,e){const t=Ea(e,this.size,4);s.uniform4fv(this.addr,t)}function v1(s,e){const t=Ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function x1(s,e){const t=Ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _1(s,e){const t=Ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function y1(s,e){s.uniform1iv(this.addr,e)}function S1(s,e){s.uniform2iv(this.addr,e)}function M1(s,e){s.uniform3iv(this.addr,e)}function E1(s,e){s.uniform4iv(this.addr,e)}function w1(s,e){s.uniform1uiv(this.addr,e)}function T1(s,e){s.uniform2uiv(this.addr,e)}function b1(s,e){s.uniform3uiv(this.addr,e)}function A1(s,e){s.uniform4uiv(this.addr,e)}function R1(s,e,t){const r=this.cache,a=e.length,l=bc(t,a);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=kh:u=Tg;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||u,l[d])}function C1(s,e,t){const r=this.cache,a=e.length,l=bc(t,a);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Ag,l[u])}function P1(s,e,t){const r=this.cache,a=e.length,l=bc(t,a);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Rg,l[u])}function N1(s,e,t){const r=this.cache,a=e.length,l=bc(t,a);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||bg,l[u])}function L1(s){switch(s){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return v1;case 35675:return x1;case 35676:return _1;case 5124:case 35670:return y1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return E1;case 5125:return w1;case 36294:return T1;case 36295:return b1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return N1}}class D1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=h1(t.type)}}class I1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L1(t.type)}}class U1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const Hf=/(\w+)(\])?(\[|\.)?/g;function N0(s,e){s.seq.push(e),s.map[e.id]=e}function F1(s,e,t){const r=s.name,a=r.length;for(Hf.lastIndex=0;;){const l=Hf.exec(r),u=Hf.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===a){N0(t,p===void 0?new D1(d,s,e):new I1(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new U1(d),N0(t,_)),t=_}}}class cc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),f=e.getUniformLocation(t,d.name);F1(d,f,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function L0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const O1=37297;let k1=0;function z1(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const D0=new _t;function B1(s){Rt._getMatrix(D0,Rt.workingColorSpace,s);const e=`mat3( ${D0.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case pc:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function I0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+z1(s.getShaderSource(e),d)}else return l}function V1(s,e){const t=B1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const G1={[Gh]:"Linear",[Hh]:"Reinhard",[Wh]:"Cineon",[yc]:"ACESFilmic",[Yh]:"AgX",[qh]:"Neutral",[Xh]:"Custom"};function H1(s,e){const t=G1[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ic=new Q;function W1(){Rt.getLuminanceCoefficients(ic);const s=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function Y1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function q1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function xo(s){return s!==""}function U0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function F0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(s){return s.replace(j1,K1)}const $1=new Map;function K1(s,e){let t=St[e];if(t===void 0){const r=$1.get(e);if(r!==void 0)t=St[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zh(t)}const Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O0(s){return s.replace(Z1,Q1)}function Q1(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function k0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const J1={[_o]:"SHADOWMAP_TYPE_PCF",[vo]:"SHADOWMAP_TYPE_VSM"};function eE(s){return J1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tE={[Ss]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE",[Sc]:"ENVMAP_TYPE_CUBE_UV"};function nE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":tE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const iE={[xa]:"ENVMAP_MODE_REFRACTION"};function rE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":iE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sE={[J0]:"ENVMAP_BLENDING_MULTIPLY",[Hx]:"ENVMAP_BLENDING_MIX",[Wx]:"ENVMAP_BLENDING_ADD"};function aE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":sE[s.combine]||"ENVMAP_BLENDING_NONE"}function oE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function lE(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=eE(t),p=nE(t),x=rE(t),_=aE(t),g=oE(t),M=X1(t),E=Y1(l),R=a.createProgram();let v,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(xo).join(`
`),v.length>0&&(v+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(xo).join(`
`),y.length>0&&(y+=`
`)):(v=[k0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),y=[k0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?St.tonemapping_pars_fragment:"",t.toneMapping!==$i?H1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,V1("linearToOutputTexel",t.outputColorSpace),W1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),u=zh(u),u=U0(u,t),u=F0(u,t),d=zh(d),d=U0(d,t),d=F0(d,t),u=O0(u),d=O0(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,y=["#define varying in",t.glslVersion===Wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=D+v+u,b=D+y+d,C=L0(a,a.VERTEX_SHADER,P),L=L0(a,a.FRAGMENT_SHADER,b);a.attachShader(R,C),a.attachShader(R,L),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function k(W){if(s.debug.checkShaderErrors){const j=a.getProgramInfoLog(R)||"",ce=a.getShaderInfoLog(C)||"",re=a.getShaderInfoLog(L)||"",$=j.trim(),B=ce.trim(),G=re.trim();let V=!0,q=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,C,L);else{const ne=I0(a,C,"vertex"),F=I0(a,L,"fragment");Pt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+$+`
`+ne+`
`+F)}else $!==""?ft("WebGLProgram: Program Info Log:",$):(B===""||G==="")&&(q=!1);q&&(W.diagnostics={runnable:V,programLog:$,vertexShader:{log:B,prefix:v},fragmentShader:{log:G,prefix:y}})}a.deleteShader(C),a.deleteShader(L),w=new cc(a,R),I=q1(a,R)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=a.getProgramParameter(R,O1)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=C,this.fragmentShader=L,this}let cE=0;class uE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new fE(e),t.set(e,r)),r}}class fE{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}}function hE(s){return s===Es||s===fc||s===hc}function dE(s,e,t,r,a,l){const u=new id,d=new uE,f=new Set,p=[],x=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return f.add(w),w===0?"uv":`uv${w}`}function R(w,I,Y,W,j,ce){const re=W.fog,$=j.geometry,B=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,G=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,V=e.get(w.envMap||B,G),q=V&&V.mapping===Sc?V.image.height:null,ne=M[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&ft("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const F=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,te=F!==void 0?F.length:0;let Pe=0;$.morphAttributes.position!==void 0&&(Pe=1),$.morphAttributes.normal!==void 0&&(Pe=2),$.morphAttributes.color!==void 0&&(Pe=3);let Be,ze,ie,ve;if(ne){const Ke=Hi[ne];Be=Ke.vertexShader,ze=Ke.fragmentShader}else{Be=w.vertexShader,ze=w.fragmentShader;const Ke=d.getVertexShaderStage(w),Gt=d.getFragmentShaderStage(w);d.update(w,Ke,Gt),ie=Ke.id,ve=Gt.id}const fe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ve=j.isInstancedMesh===!0,ke=j.isBatchedMesh===!0,ct=!!w.map,Qe=!!w.matcap,At=!!V,mt=!!w.aoMap,dt=!!w.lightMap,kt=!!w.bumpMap&&w.wireframe===!1,Vt=!!w.normalMap,Je=!!w.displacementMap,Ct=!!w.emissiveMap,bt=!!w.metalnessMap,De=!!w.roughnessMap,H=w.anisotropy>0,We=w.clearcoat>0,gt=w.dispersion>0,N=w.iridescence>0,S=w.sheen>0,ee=w.transmission>0,ae=H&&!!w.anisotropyMap,me=We&&!!w.clearcoatMap,Re=We&&!!w.clearcoatNormalMap,Ue=We&&!!w.clearcoatRoughnessMap,ge=N&&!!w.iridescenceMap,_e=N&&!!w.iridescenceThicknessMap,Ce=S&&!!w.sheenColorMap,qe=S&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,Z=!!w.specularColorMap,he=!!w.specularIntensityMap,Se=ee&&!!w.transmissionMap,Me=ee&&!!w.thicknessMap,z=!!w.gradientMap,Ee=!!w.alphaMap,xe=w.alphaTest>0,Ne=!!w.alphaHash,Ge=!!w.extensions;let ye=$i;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ye=s.toneMapping);const et={shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:ze,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:ke,batchingColor:ke&&j._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&j.instanceColor!==null,instancingMorph:Ve&&j.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:Qe,envMap:At,envMapMode:At&&V.mapping,envMapCubeUVHeight:q,aoMap:mt,lightMap:dt,bumpMap:kt,normalMap:Vt,displacementMap:Je,emissiveMap:Ct,normalMapObjectSpace:Vt&&w.normalMapType===qx,normalMapTangentSpace:Vt&&w.normalMapType===Lh,packedNormalMap:Vt&&w.normalMapType===Lh&&hE(w.normalMap.format),metalnessMap:bt,roughnessMap:De,anisotropy:H,anisotropyMap:ae,clearcoat:We,clearcoatMap:me,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ue,dispersion:gt,iridescence:N,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:S,sheenColorMap:Ce,sheenRoughnessMap:qe,specularMap:Fe,specularColorMap:Z,specularIntensityMap:he,transmission:ee,transmissionMap:Se,thicknessMap:Me,gradientMap:z,opaque:w.transparent===!1&&w.blending===pa&&w.alphaToCoverage===!1,alphaMap:Ee,alphaTest:xe,alphaHash:Ne,combine:w.combine,mapUv:ct&&E(w.map.channel),aoMapUv:mt&&E(w.aoMap.channel),lightMapUv:dt&&E(w.lightMap.channel),bumpMapUv:kt&&E(w.bumpMap.channel),normalMapUv:Vt&&E(w.normalMap.channel),displacementMapUv:Je&&E(w.displacementMap.channel),emissiveMapUv:Ct&&E(w.emissiveMap.channel),metalnessMapUv:bt&&E(w.metalnessMap.channel),roughnessMapUv:De&&E(w.roughnessMap.channel),anisotropyMapUv:ae&&E(w.anisotropyMap.channel),clearcoatMapUv:me&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:qe&&E(w.sheenRoughnessMap.channel),specularMapUv:Fe&&E(w.specularMap.channel),specularColorMapUv:Z&&E(w.specularColorMap.channel),specularIntensityMapUv:he&&E(w.specularIntensityMap.channel),transmissionMapUv:Se&&E(w.transmissionMap.channel),thicknessMapUv:Me&&E(w.thicknessMap.channel),alphaMapUv:Ee&&E(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Vt||H),vertexNormals:!!$.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!$.attributes.uv&&(ct||Ee),fog:!!re,useFog:w.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||$.attributes.normal===void 0&&Vt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:we,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Pe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&Rt.getTransfer(w.map.colorSpace)===Ot,decodeVideoTextureEmissive:Ct&&w.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(w.emissiveMap.colorSpace)===Ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ci,flipSided:w.side===Jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return et.vertexUv1s=f.has(1),et.vertexUv2s=f.has(2),et.vertexUv3s=f.has(3),f.clear(),et}function v(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const Y in w.defines)I.push(Y),I.push(w.defines[Y]);return w.isRawShaderMaterial===!1&&(y(I,w),D(I,w),I.push(s.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function y(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function D(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function P(w){const I=M[w.type];let Y;if(I){const W=Hi[I];Y=To.clone(W.uniforms)}else Y=w.uniforms;return Y}function b(w,I){let Y=x.get(I);return Y!==void 0?++Y.usedTimes:(Y=new lE(s,I,w,a),p.push(Y),x.set(I,Y)),Y}function C(w){if(--w.usedTimes===0){const I=p.indexOf(w);p[I]=p[p.length-1],p.pop(),x.delete(w.cacheKey),w.destroy()}}function L(w){d.remove(w)}function k(){d.dispose()}return{getParameters:R,getProgramCacheKey:v,getUniforms:P,acquireProgram:b,releaseProgram:C,releaseShaderCache:L,programs:p,dispose:k}}function pE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,f){s.get(u)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function mE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function z0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function B0(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,E,R,v,y){let D=s[e];return D===void 0?(D={id:g.id,object:g,geometry:M,material:E,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:v,group:y},s[e]=D):(D.id=g.id,D.object=g,D.geometry=M,D.material=E,D.materialVariant=u(g),D.groupOrder=R,D.renderOrder=g.renderOrder,D.z=v,D.group=y),e++,D}function f(g,M,E,R,v,y){const D=d(g,M,E,R,v,y);E.transmission>0?r.push(D):E.transparent===!0?a.push(D):t.push(D)}function p(g,M,E,R,v,y){const D=d(g,M,E,R,v,y);E.transmission>0?r.unshift(D):E.transparent===!0?a.unshift(D):t.unshift(D)}function x(g,M,E){t.length>1&&t.sort(g||mE),r.length>1&&r.sort(M||z0),a.length>1&&a.sort(M||z0),E&&(t.reverse(),r.reverse(),a.reverse())}function _(){for(let g=e,M=s.length;g<M;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:p,finish:_,sort:x}}function gE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new B0,s.set(r,[u])):a>=l.length?(u=new B0,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function vE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new yt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function xE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let _E=0;function yE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function SE(s){const e=new vE,t=xE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const a=new Q,l=new Kt,u=new Kt;function d(p){let x=0,_=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let M=0,E=0,R=0,v=0,y=0,D=0,P=0,b=0,C=0,L=0,k=0;p.sort(yE);for(let I=0,Y=p.length;I<Y;I++){const W=p[I],j=W.color,ce=W.intensity,re=W.distance;let $=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Es?$=W.shadow.map.texture:$=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)x+=j.r*ce,_+=j.g*ce,g+=j.b*ce;else if(W.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(W.sh.coefficients[B],ce);k++}else if(W.isDirectionalLight){const B=e.get(W);if(B.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const G=W.shadow,V=t.get(W);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,r.directionalShadow[M]=V,r.directionalShadowMap[M]=$,r.directionalShadowMatrix[M]=W.shadow.matrix,D++}r.directional[M]=B,M++}else if(W.isSpotLight){const B=e.get(W);B.position.setFromMatrixPosition(W.matrixWorld),B.color.copy(j).multiplyScalar(ce),B.distance=re,B.coneCos=Math.cos(W.angle),B.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),B.decay=W.decay,r.spot[R]=B;const G=W.shadow;if(W.map&&(r.spotLightMap[C]=W.map,C++,G.updateMatrices(W),W.castShadow&&L++),r.spotLightMatrix[R]=G.matrix,W.castShadow){const V=t.get(W);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,r.spotShadow[R]=V,r.spotShadowMap[R]=$,b++}R++}else if(W.isRectAreaLight){const B=e.get(W);B.color.copy(j).multiplyScalar(ce),B.halfWidth.set(W.width*.5,0,0),B.halfHeight.set(0,W.height*.5,0),r.rectArea[v]=B,v++}else if(W.isPointLight){const B=e.get(W);if(B.color.copy(W.color).multiplyScalar(W.intensity),B.distance=W.distance,B.decay=W.decay,W.castShadow){const G=W.shadow,V=t.get(W);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,r.pointShadow[E]=V,r.pointShadowMap[E]=$,r.pointShadowMatrix[E]=W.shadow.matrix,P++}r.point[E]=B,E++}else if(W.isHemisphereLight){const B=e.get(W);B.skyColor.copy(W.color).multiplyScalar(ce),B.groundColor.copy(W.groundColor).multiplyScalar(ce),r.hemi[y]=B,y++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==M||w.pointLength!==E||w.spotLength!==R||w.rectAreaLength!==v||w.hemiLength!==y||w.numDirectionalShadows!==D||w.numPointShadows!==P||w.numSpotShadows!==b||w.numSpotMaps!==C||w.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=v,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=b+C-L,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=k,w.directionalLength=M,w.pointLength=E,w.spotLength=R,w.rectAreaLength=v,w.hemiLength=y,w.numDirectionalShadows=D,w.numPointShadows=P,w.numSpotShadows=b,w.numSpotMaps=C,w.numLightProbes=k,r.version=_E++)}function f(p,x){let _=0,g=0,M=0,E=0,R=0;const v=x.matrixWorldInverse;for(let y=0,D=p.length;y<D;y++){const P=p[y];if(P.isDirectionalLight){const b=r.directional[_];b.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(v),_++}else if(P.isSpotLight){const b=r.spot[M];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(v),M++}else if(P.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(v),u.identity(),l.copy(P.matrixWorld),l.premultiply(v),u.extractRotation(l),b.halfWidth.set(P.width*.5,0,0),b.halfHeight.set(0,P.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(v),g++}else if(P.isHemisphereLight){const b=r.hemi[R];b.direction.setFromMatrixPosition(P.matrixWorld),b.direction.transformDirection(v),R++}}}return{setup:d,setupView:f,state:r}}function V0(s){const e=new SE(s),t=[],r=[],a=[];function l(g){_.camera=g,t.length=0,r.length=0,a.length=0}function u(g){t.push(g)}function d(g){r.push(g)}function f(g){a.push(g)}function p(){e.setup(t)}function x(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:x,pushLight:u,pushShadow:d,pushLightProbeGrid:f}}function ME(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new V0(s),e.set(a,[d])):l>=u.length?(d=new V0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const EE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,TE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],bE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],G0=new Kt,go=new Q,Wf=new Q;function AE(s,e,t){let r=new ad;const a=new at,l=new at,u=new rn,d=new I_,f=new U_,p={},x=t.maxTextureSize,_={[Wr]:Jn,[Jn]:Wr,[ci]:ci},g=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:EE,fragmentShader:wE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new Un;E.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ut(E,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let y=this.type;this.render=function(L,k,w){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||L.length===0)return;this.type===Q0&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_o);const I=s.getRenderTarget(),Y=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),j=s.state;j.setBlending(ji),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ce=y!==this.type;ce&&k.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach($=>$.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,$=L.length;re<$;re++){const B=L[re],G=B.shadow;if(G===void 0){ft("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const V=G.getFrameExtents();a.multiply(V),l.copy(G.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/V.x),a.x=l.x*V.x,G.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/V.y),a.y=l.y*V.y,G.mapSize.y=l.y));const q=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||ce===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===vo){if(B.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ei(a.x,a.y,{format:Es,type:hi,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new _a(a.x,a.y,Xi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=pr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn}else B.isPointLight?(G.map=new wg(a.x),G.map.depthTexture=new P_(a.x,Ki)):(G.map=new ei(a.x,a.y),G.map.depthTexture=new _a(a.x,a.y,Ki)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=pr,this.type===_o?(G.map.depthTexture.compareFunction=q?td:ed,G.map.depthTexture.minFilter=Tn,G.map.depthTexture.magFilter=Tn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn);G.camera.updateProjectionMatrix()}const ne=G.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<ne;F++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,F),s.clear();else{F===0&&(s.setRenderTarget(G.map),s.clear());const te=G.getViewport(F);u.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),j.viewport(u)}if(B.isPointLight){const te=G.camera,Pe=G.matrix,Be=B.distance||te.far;Be!==te.far&&(te.far=Be,te.updateProjectionMatrix()),go.setFromMatrixPosition(B.matrixWorld),te.position.copy(go),Wf.copy(te.position),Wf.add(TE[F]),te.up.copy(bE[F]),te.lookAt(Wf),te.updateMatrixWorld(),Pe.makeTranslation(-go.x,-go.y,-go.z),G0.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),G._frustum.setFromProjectionMatrix(G0,te.coordinateSystem,te.reversedDepth)}else G.updateMatrices(B);r=G.getFrustum(),b(k,w,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===vo&&D(G,w),G.needsUpdate=!1}y=this.type,v.needsUpdate=!1,s.setRenderTarget(I,Y,W)};function D(L,k){const w=e.update(R);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ei(a.x,a.y,{format:Es,type:hi})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(k,null,w,g,R,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(k,null,w,M,R,null)}function P(L,k,w,I){let Y=null;const W=w.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(W!==void 0)Y=W;else if(Y=w.isPointLight===!0?f:d,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const j=Y.uuid,ce=k.uuid;let re=p[j];re===void 0&&(re={},p[j]=re);let $=re[ce];$===void 0&&($=Y.clone(),re[ce]=$,k.addEventListener("dispose",C)),Y=$}if(Y.visible=k.visible,Y.wireframe=k.wireframe,I===vo?Y.side=k.shadowSide!==null?k.shadowSide:k.side:Y.side=k.shadowSide!==null?k.shadowSide:_[k.side],Y.alphaMap=k.alphaMap,Y.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,Y.map=k.map,Y.clipShadows=k.clipShadows,Y.clippingPlanes=k.clippingPlanes,Y.clipIntersection=k.clipIntersection,Y.displacementMap=k.displacementMap,Y.displacementScale=k.displacementScale,Y.displacementBias=k.displacementBias,Y.wireframeLinewidth=k.wireframeLinewidth,Y.linewidth=k.linewidth,w.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=s.properties.get(Y);j.light=w}return Y}function b(L,k,w,I,Y){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===vo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,L.matrixWorld);const ce=e.update(L),re=L.material;if(Array.isArray(re)){const $=ce.groups;for(let B=0,G=$.length;B<G;B++){const V=$[B],q=re[V.materialIndex];if(q&&q.visible){const ne=P(L,q,I,Y);L.onBeforeShadow(s,L,k,w,ce,ne,V),s.renderBufferDirect(w,null,ce,ne,L,V),L.onAfterShadow(s,L,k,w,ce,ne,V)}}}else if(re.visible){const $=P(L,re,I,Y);L.onBeforeShadow(s,L,k,w,ce,$,null),s.renderBufferDirect(w,null,ce,$,L,null),L.onAfterShadow(s,L,k,w,ce,$,null)}}const j=L.children;for(let ce=0,re=j.length;ce<re;ce++)b(j[ce],k,w,I,Y)}function C(L){L.target.removeEventListener("dispose",C);for(const w in p){const I=p[w],Y=L.target.uuid;Y in I&&(I[Y].dispose(),delete I[Y])}}}function RE(s,e){function t(){let z=!1;const Ee=new rn;let xe=null;const Ne=new rn(0,0,0,0);return{setMask:function(Ge){xe!==Ge&&!z&&(s.colorMask(Ge,Ge,Ge,Ge),xe=Ge)},setLocked:function(Ge){z=Ge},setClear:function(Ge,ye,et,Ke,Gt){Gt===!0&&(Ge*=Ke,ye*=Ke,et*=Ke),Ee.set(Ge,ye,et,Ke),Ne.equals(Ee)===!1&&(s.clearColor(Ge,ye,et,Ke),Ne.copy(Ee))},reset:function(){z=!1,xe=null,Ne.set(-1,0,0,0)}}}function r(){let z=!1,Ee=!1,xe=null,Ne=null,Ge=null;return{setReversed:function(ye){if(Ee!==ye){const et=e.get("EXT_clip_control");ye?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Ee=ye;const Ke=Ge;Ge=null,this.setClear(Ke)}},getReversed:function(){return Ee},setTest:function(ye){ye?fe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(ye){xe!==ye&&!z&&(s.depthMask(ye),xe=ye)},setFunc:function(ye){if(Ee&&(ye=i_[ye]),Ne!==ye){switch(ye){case jf:s.depthFunc(s.NEVER);break;case $f:s.depthFunc(s.ALWAYS);break;case Kf:s.depthFunc(s.LESS);break;case va:s.depthFunc(s.LEQUAL);break;case Zf:s.depthFunc(s.EQUAL);break;case Qf:s.depthFunc(s.GEQUAL);break;case Jf:s.depthFunc(s.GREATER);break;case eh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=ye}},setLocked:function(ye){z=ye},setClear:function(ye){Ge!==ye&&(Ge=ye,Ee&&(ye=1-ye),s.clearDepth(ye))},reset:function(){z=!1,xe=null,Ne=null,Ge=null,Ee=!1}}}function a(){let z=!1,Ee=null,xe=null,Ne=null,Ge=null,ye=null,et=null,Ke=null,Gt=null;return{setTest:function(Ut){z||(Ut?fe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Ut){Ee!==Ut&&!z&&(s.stencilMask(Ut),Ee=Ut)},setFunc:function(Ut,bn,di){(xe!==Ut||Ne!==bn||Ge!==di)&&(s.stencilFunc(Ut,bn,di),xe=Ut,Ne=bn,Ge=di)},setOp:function(Ut,bn,di){(ye!==Ut||et!==bn||Ke!==di)&&(s.stencilOp(Ut,bn,di),ye=Ut,et=bn,Ke=di)},setLocked:function(Ut){z=Ut},setClear:function(Ut){Gt!==Ut&&(s.clearStencil(Ut),Gt=Ut)},reset:function(){z=!1,Ee=null,xe=null,Ne=null,Ge=null,ye=null,et=null,Ke=null,Gt=null}}}const l=new t,u=new r,d=new a,f=new WeakMap,p=new WeakMap;let x={},_={},g={},M=new WeakMap,E=[],R=null,v=!1,y=null,D=null,P=null,b=null,C=null,L=null,k=null,w=new yt(0,0,0),I=0,Y=!1,W=null,j=null,ce=null,re=null,$=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,V=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=V>=2);let ne=null,F={};const te=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),Be=new rn().fromArray(te),ze=new rn().fromArray(Pe);function ie(z,Ee,xe,Ne){const Ge=new Uint8Array(4),ye=s.createTexture();s.bindTexture(z,ye),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<xe;et++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Ee,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Ge):s.texImage2D(Ee+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ge);return ye}const ve={};ve[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),fe(s.DEPTH_TEST),u.setFunc(va),kt(!1),Vt(Bm),fe(s.CULL_FACE),mt(ji);function fe(z){x[z]!==!0&&(s.enable(z),x[z]=!0)}function we(z){x[z]!==!1&&(s.disable(z),x[z]=!1)}function Ve(z,Ee){return g[z]!==Ee?(s.bindFramebuffer(z,Ee),g[z]=Ee,z===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ee),z===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ke(z,Ee){let xe=E,Ne=!1;if(z){xe=M.get(Ee),xe===void 0&&(xe=[],M.set(Ee,xe));const Ge=z.textures;if(xe.length!==Ge.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,et=Ge.length;ye<et;ye++)xe[ye]=s.COLOR_ATTACHMENT0+ye;xe.length=Ge.length,Ne=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(xe)}function ct(z){return R!==z?(s.useProgram(z),R=z,!0):!1}const Qe={[gs]:s.FUNC_ADD,[bx]:s.FUNC_SUBTRACT,[Ax]:s.FUNC_REVERSE_SUBTRACT};Qe[Rx]=s.MIN,Qe[Cx]=s.MAX;const At={[Px]:s.ZERO,[Nx]:s.ONE,[Lx]:s.SRC_COLOR,[Yf]:s.SRC_ALPHA,[kx]:s.SRC_ALPHA_SATURATE,[Fx]:s.DST_COLOR,[Ix]:s.DST_ALPHA,[Dx]:s.ONE_MINUS_SRC_COLOR,[qf]:s.ONE_MINUS_SRC_ALPHA,[Ox]:s.ONE_MINUS_DST_COLOR,[Ux]:s.ONE_MINUS_DST_ALPHA,[zx]:s.CONSTANT_COLOR,[Bx]:s.ONE_MINUS_CONSTANT_COLOR,[Vx]:s.CONSTANT_ALPHA,[Gx]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(z,Ee,xe,Ne,Ge,ye,et,Ke,Gt,Ut){if(z===ji){v===!0&&(we(s.BLEND),v=!1);return}if(v===!1&&(fe(s.BLEND),v=!0),z!==Tx){if(z!==y||Ut!==Y){if((D!==gs||C!==gs)&&(s.blendEquation(s.FUNC_ADD),D=gs,C=gs),Ut)switch(z){case pa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fr:s.blendFunc(s.ONE,s.ONE);break;case Vm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pt("WebGLState: Invalid blending: ",z);break}else switch(z){case pa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vm:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gm:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",z);break}P=null,b=null,L=null,k=null,w.set(0,0,0),I=0,y=z,Y=Ut}return}Ge=Ge||Ee,ye=ye||xe,et=et||Ne,(Ee!==D||Ge!==C)&&(s.blendEquationSeparate(Qe[Ee],Qe[Ge]),D=Ee,C=Ge),(xe!==P||Ne!==b||ye!==L||et!==k)&&(s.blendFuncSeparate(At[xe],At[Ne],At[ye],At[et]),P=xe,b=Ne,L=ye,k=et),(Ke.equals(w)===!1||Gt!==I)&&(s.blendColor(Ke.r,Ke.g,Ke.b,Gt),w.copy(Ke),I=Gt),y=z,Y=!1}function dt(z,Ee){z.side===ci?we(s.CULL_FACE):fe(s.CULL_FACE);let xe=z.side===Jn;Ee&&(xe=!xe),kt(xe),z.blending===pa&&z.transparent===!1?mt(ji):mt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const Ne=z.stencilWrite;d.setTest(Ne),Ne&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ct(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(z){W!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),W=z)}function Vt(z){z!==Ex?(fe(s.CULL_FACE),z!==j&&(z===Bm?s.cullFace(s.BACK):z===wx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),j=z}function Je(z){z!==ce&&(G&&s.lineWidth(z),ce=z)}function Ct(z,Ee,xe){z?(fe(s.POLYGON_OFFSET_FILL),(re!==Ee||$!==xe)&&(re=Ee,$=xe,u.getReversed()&&(Ee=-Ee),s.polygonOffset(Ee,xe))):we(s.POLYGON_OFFSET_FILL)}function bt(z){z?fe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function De(z){z===void 0&&(z=s.TEXTURE0+B-1),ne!==z&&(s.activeTexture(z),ne=z)}function H(z,Ee,xe){xe===void 0&&(ne===null?xe=s.TEXTURE0+B-1:xe=ne);let Ne=F[xe];Ne===void 0&&(Ne={type:void 0,texture:void 0},F[xe]=Ne),(Ne.type!==z||Ne.texture!==Ee)&&(ne!==xe&&(s.activeTexture(xe),ne=xe),s.bindTexture(z,Ee||ve[z]),Ne.type=z,Ne.texture=Ee)}function We(){const z=F[ne];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function gt(){try{s.compressedTexImage2D(...arguments)}catch(z){Pt("WebGLState:",z)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(z){Pt("WebGLState:",z)}}function S(){try{s.texSubImage2D(...arguments)}catch(z){Pt("WebGLState:",z)}}function ee(){try{s.texSubImage3D(...arguments)}catch(z){Pt("WebGLState:",z)}}function ae(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Pt("WebGLState:",z)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Pt("WebGLState:",z)}}function Re(){try{s.texStorage2D(...arguments)}catch(z){Pt("WebGLState:",z)}}function Ue(){try{s.texStorage3D(...arguments)}catch(z){Pt("WebGLState:",z)}}function ge(){try{s.texImage2D(...arguments)}catch(z){Pt("WebGLState:",z)}}function _e(){try{s.texImage3D(...arguments)}catch(z){Pt("WebGLState:",z)}}function Ce(z){return _[z]!==void 0?_[z]:s.getParameter(z)}function qe(z,Ee){_[z]!==Ee&&(s.pixelStorei(z,Ee),_[z]=Ee)}function Fe(z){Be.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Be.copy(z))}function Z(z){ze.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),ze.copy(z))}function he(z,Ee){let xe=p.get(Ee);xe===void 0&&(xe=new WeakMap,p.set(Ee,xe));let Ne=xe.get(z);Ne===void 0&&(Ne=s.getUniformBlockIndex(Ee,z.name),xe.set(z,Ne))}function Se(z,Ee){const Ne=p.get(Ee).get(z);f.get(Ee)!==Ne&&(s.uniformBlockBinding(Ee,Ne,z.__bindingPointIndex),f.set(Ee,Ne))}function Me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},_={},ne=null,F={},g={},M=new WeakMap,E=[],R=null,v=!1,y=null,D=null,P=null,b=null,C=null,L=null,k=null,w=new yt(0,0,0),I=0,Y=!1,W=null,j=null,ce=null,re=null,$=null,Be.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:fe,disable:we,bindFramebuffer:Ve,drawBuffers:ke,useProgram:ct,setBlending:mt,setMaterial:dt,setFlipSided:kt,setCullFace:Vt,setLineWidth:Je,setPolygonOffset:Ct,setScissorTest:bt,activeTexture:De,bindTexture:H,unbindTexture:We,compressedTexImage2D:gt,compressedTexImage3D:N,texImage2D:ge,texImage3D:_e,pixelStorei:qe,getParameter:Ce,updateUBOMapping:he,uniformBlockBinding:Se,texStorage2D:Re,texStorage3D:Ue,texSubImage2D:S,texSubImage3D:ee,compressedTexSubImage2D:ae,compressedTexSubImage3D:me,scissor:Fe,viewport:Z,reset:Me}}function CE(s,e,t,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new at,x=new WeakMap,_=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(N,S){return E?new OffscreenCanvas(N,S):mc("canvas")}function v(N,S,ee){let ae=1;const me=gt(N);if((me.width>ee||me.height>ee)&&(ae=ee/Math.max(me.width,me.height)),ae<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Re=Math.floor(ae*me.width),Ue=Math.floor(ae*me.height);g===void 0&&(g=R(Re,Ue));const ge=S?R(Re,Ue):g;return ge.width=Re,ge.height=Ue,ge.getContext("2d").drawImage(N,0,0,Re,Ue),ft("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Re+"x"+Ue+")."),ge}else return"data"in N&&ft("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function y(N){return N.generateMipmaps}function D(N){s.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(N,S,ee,ae,me,Re=!1){if(N!==null){if(s[N]!==void 0)return s[N];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ue;ae&&(Ue=e.get("EXT_texture_norm16"),Ue||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=S;if(S===s.RED&&(ee===s.FLOAT&&(ge=s.R32F),ee===s.HALF_FLOAT&&(ge=s.R16F),ee===s.UNSIGNED_BYTE&&(ge=s.R8),ee===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.R16_EXT),ee===s.SHORT&&Ue&&(ge=Ue.R16_SNORM_EXT)),S===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ge=s.R8UI),ee===s.UNSIGNED_SHORT&&(ge=s.R16UI),ee===s.UNSIGNED_INT&&(ge=s.R32UI),ee===s.BYTE&&(ge=s.R8I),ee===s.SHORT&&(ge=s.R16I),ee===s.INT&&(ge=s.R32I)),S===s.RG&&(ee===s.FLOAT&&(ge=s.RG32F),ee===s.HALF_FLOAT&&(ge=s.RG16F),ee===s.UNSIGNED_BYTE&&(ge=s.RG8),ee===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.RG16_EXT),ee===s.SHORT&&Ue&&(ge=Ue.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ge=s.RG8UI),ee===s.UNSIGNED_SHORT&&(ge=s.RG16UI),ee===s.UNSIGNED_INT&&(ge=s.RG32UI),ee===s.BYTE&&(ge=s.RG8I),ee===s.SHORT&&(ge=s.RG16I),ee===s.INT&&(ge=s.RG32I)),S===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),ee===s.UNSIGNED_INT&&(ge=s.RGB32UI),ee===s.BYTE&&(ge=s.RGB8I),ee===s.SHORT&&(ge=s.RGB16I),ee===s.INT&&(ge=s.RGB32I)),S===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),ee===s.UNSIGNED_INT&&(ge=s.RGBA32UI),ee===s.BYTE&&(ge=s.RGBA8I),ee===s.SHORT&&(ge=s.RGBA16I),ee===s.INT&&(ge=s.RGBA32I)),S===s.RGB&&(ee===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGB16_EXT),ee===s.SHORT&&Ue&&(ge=Ue.RGB16_SNORM_EXT),ee===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),S===s.RGBA){const _e=Re?pc:Rt.getTransfer(me);ee===s.FLOAT&&(ge=s.RGBA32F),ee===s.HALF_FLOAT&&(ge=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(ge=_e===Ot?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGBA16_EXT),ee===s.SHORT&&Ue&&(ge=Ue.RGBA16_SNORM_EXT),ee===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function C(N,S){let ee;return N?S===null||S===Ki||S===So?ee=s.DEPTH24_STENCIL8:S===Xi?ee=s.DEPTH32F_STENCIL8:S===yo&&(ee=s.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ki||S===So?ee=s.DEPTH_COMPONENT24:S===Xi?ee=s.DEPTH_COMPONENT32F:S===yo&&(ee=s.DEPTH_COMPONENT16),ee}function L(N,S){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==wn&&N.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function k(N){const S=N.target;S.removeEventListener("dispose",k),I(S),S.isVideoTexture&&x.delete(S),S.isHTMLTexture&&_.delete(S)}function w(N){const S=N.target;S.removeEventListener("dispose",w),W(S)}function I(N){const S=r.get(N);if(S.__webglInit===void 0)return;const ee=N.source,ae=M.get(ee);if(ae){const me=ae[S.__cacheKey];me.usedTimes--,me.usedTimes===0&&Y(N),Object.keys(ae).length===0&&M.delete(ee)}r.remove(N)}function Y(N){const S=r.get(N);s.deleteTexture(S.__webglTexture);const ee=N.source,ae=M.get(ee);delete ae[S.__cacheKey],u.memory.textures--}function W(N){const S=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(S.__webglFramebuffer[ae]))for(let me=0;me<S.__webglFramebuffer[ae].length;me++)s.deleteFramebuffer(S.__webglFramebuffer[ae][me]);else s.deleteFramebuffer(S.__webglFramebuffer[ae]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[ae])}else{if(Array.isArray(S.__webglFramebuffer))for(let ae=0;ae<S.__webglFramebuffer.length;ae++)s.deleteFramebuffer(S.__webglFramebuffer[ae]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ae=0;ae<S.__webglColorRenderbuffer.length;ae++)S.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[ae]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ee=N.textures;for(let ae=0,me=ee.length;ae<me;ae++){const Re=r.get(ee[ae]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),u.memory.textures--),r.remove(ee[ae])}r.remove(N)}let j=0;function ce(){j=0}function re(){return j}function $(N){j=N}function B(){const N=j;return N>=a.maxTextures&&ft("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),j+=1,N}function G(N){const S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function V(N,S){const ee=r.get(N);if(N.isVideoTexture&&H(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ee.__version!==N.version){const ae=N.image;if(ae===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{we(ee,N,S);return}}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+S)}function q(N,S){const ee=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){we(ee,N,S);return}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+S)}function ne(N,S){const ee=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){we(ee,N,S);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+S)}function F(N,S){const ee=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&ee.__version!==N.version){Ve(ee,N,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+S)}const te={[Ms]:s.REPEAT,[hr]:s.CLAMP_TO_EDGE,[th]:s.MIRRORED_REPEAT},Pe={[wn]:s.NEAREST,[Xx]:s.NEAREST_MIPMAP_NEAREST,[Nl]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[hf]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},Be={[jx]:s.NEVER,[Jx]:s.ALWAYS,[$x]:s.LESS,[ed]:s.LEQUAL,[Kx]:s.EQUAL,[td]:s.GEQUAL,[Zx]:s.GREATER,[Qx]:s.NOTEQUAL};function ze(N,S){if(S.type===Xi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===hf||S.magFilter===Nl||S.magFilter===xs||S.minFilter===Tn||S.minFilter===hf||S.minFilter===Nl||S.minFilter===xs)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,te[S.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,te[S.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,te[S.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Pe[S.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Pe[S.minFilter]),S.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==Nl&&S.minFilter!==xs||S.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function ie(N,S){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",k));const ae=S.source;let me=M.get(ae);me===void 0&&(me={},M.set(ae,me));const Re=G(S);if(Re!==N.__cacheKey){me[Re]===void 0&&(me[Re]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),me[Re].usedTimes++;const Ue=me[N.__cacheKey];Ue!==void 0&&(me[N.__cacheKey].usedTimes--,Ue.usedTimes===0&&Y(S)),N.__cacheKey=Re,N.__webglTexture=me[Re].texture}return ee}function ve(N,S,ee){return Math.floor(Math.floor(N/ee)/S)}function fe(N,S,ee,ae){const Re=N.updateRanges;if(Re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,ee,ae,S.data);else{Re.sort((qe,Fe)=>qe.start-Fe.start);let Ue=0;for(let qe=1;qe<Re.length;qe++){const Fe=Re[Ue],Z=Re[qe],he=Fe.start+Fe.count,Se=ve(Z.start,S.width,4),Me=ve(Fe.start,S.width,4);Z.start<=he+1&&Se===Me&&ve(Z.start+Z.count-1,S.width,4)===Se?Fe.count=Math.max(Fe.count,Z.start+Z.count-Fe.start):(++Ue,Re[Ue]=Z)}Re.length=Ue+1;const ge=t.getParameter(s.UNPACK_ROW_LENGTH),_e=t.getParameter(s.UNPACK_SKIP_PIXELS),Ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let qe=0,Fe=Re.length;qe<Fe;qe++){const Z=Re[qe],he=Math.floor(Z.start/4),Se=Math.ceil(Z.count/4),Me=he%S.width,z=Math.floor(he/S.width),Ee=Se,xe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(s.UNPACK_SKIP_ROWS,z),t.texSubImage2D(s.TEXTURE_2D,0,Me,z,Ee,xe,ee,ae,S.data)}N.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ge),t.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function we(N,S,ee){let ae=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=s.TEXTURE_3D);const me=ie(N,S),Re=S.source;t.bindTexture(ae,N.__webglTexture,s.TEXTURE0+ee);const Ue=r.get(Re);if(Re.version!==Ue.__version||me===!0){if(t.activeTexture(s.TEXTURE0+ee),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const xe=Rt.getPrimaries(Rt.workingColorSpace),Ne=S.colorSpace===Vr?null:Rt.getPrimaries(S.colorSpace),Ge=S.colorSpace===Vr||xe===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let _e=v(S.image,!1,a.maxTextureSize);_e=We(S,_e);const Ce=l.convert(S.format,S.colorSpace),qe=l.convert(S.type);let Fe=b(S.internalFormat,Ce,qe,S.normalized,S.colorSpace,S.isVideoTexture);ze(ae,S);let Z;const he=S.mipmaps,Se=S.isVideoTexture!==!0,Me=Ue.__version===void 0||me===!0,z=Re.dataReady,Ee=L(S,_e);if(S.isDepthTexture)Fe=C(S.format===_s,S.type),Me&&(Se?t.texStorage2D(s.TEXTURE_2D,1,Fe,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ce,qe,null));else if(S.isDataTexture)if(he.length>0){Se&&Me&&t.texStorage2D(s.TEXTURE_2D,Ee,Fe,he[0].width,he[0].height);for(let xe=0,Ne=he.length;xe<Ne;xe++)Z=he[xe],Se?z&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Z.width,Z.height,Ce,qe,Z.data):t.texImage2D(s.TEXTURE_2D,xe,Fe,Z.width,Z.height,0,Ce,qe,Z.data);S.generateMipmaps=!1}else Se?(Me&&t.texStorage2D(s.TEXTURE_2D,Ee,Fe,_e.width,_e.height),z&&fe(S,_e,Ce,qe)):t.texImage2D(s.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ce,qe,_e.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Se&&Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Fe,he[0].width,he[0].height,_e.depth);for(let xe=0,Ne=he.length;xe<Ne;xe++)if(Z=he[xe],S.format!==Ui)if(Ce!==null)if(Se){if(z)if(S.layerUpdates.size>0){const Ge=_0(Z.width,Z.height,S.format,S.type);for(const ye of S.layerUpdates){const et=Z.data.subarray(ye*Ge/Z.data.BYTES_PER_ELEMENT,(ye+1)*Ge/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,ye,Z.width,Z.height,1,Ce,et)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Z.width,Z.height,_e.depth,Ce,Z.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Fe,Z.width,Z.height,_e.depth,0,Z.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Z.width,Z.height,_e.depth,Ce,qe,Z.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,Fe,Z.width,Z.height,_e.depth,0,Ce,qe,Z.data)}else{Se&&Me&&t.texStorage2D(s.TEXTURE_2D,Ee,Fe,he[0].width,he[0].height);for(let xe=0,Ne=he.length;xe<Ne;xe++)Z=he[xe],S.format!==Ui?Ce!==null?Se?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Z.width,Z.height,Ce,Z.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,Fe,Z.width,Z.height,0,Z.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?z&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Z.width,Z.height,Ce,qe,Z.data):t.texImage2D(s.TEXTURE_2D,xe,Fe,Z.width,Z.height,0,Ce,qe,Z.data)}else if(S.isDataArrayTexture)if(Se){if(Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ee,Fe,_e.width,_e.height,_e.depth),z)if(S.layerUpdates.size>0){const xe=_0(_e.width,_e.height,S.format,S.type);for(const Ne of S.layerUpdates){const Ge=_e.data.subarray(Ne*xe/_e.data.BYTES_PER_ELEMENT,(Ne+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ne,_e.width,_e.height,1,Ce,qe,Ge)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,qe,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Ce,qe,_e.data);else if(S.isData3DTexture)Se?(Me&&t.texStorage3D(s.TEXTURE_3D,Ee,Fe,_e.width,_e.height,_e.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,qe,_e.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Ce,qe,_e.data);else if(S.isFramebufferTexture){if(Me)if(Se)t.texStorage2D(s.TEXTURE_2D,Ee,Fe,_e.width,_e.height);else{let xe=_e.width,Ne=_e.height;for(let Ge=0;Ge<Ee;Ge++)t.texImage2D(s.TEXTURE_2D,Ge,Fe,xe,Ne,0,Ce,qe,null),xe>>=1,Ne>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const xe=s.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),_e.parentNode!==xe){xe.appendChild(_e),_.add(S),xe.onpaint=Ne=>{const Ge=Ne.changedElements;for(const ye of _)Ge.includes(ye.image)&&(ye.needsUpdate=!0)},xe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,_e);else{const Ge=s.RGBA,ye=s.RGBA,et=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ge,ye,et,_e)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(he.length>0){if(Se&&Me){const xe=gt(he[0]);t.texStorage2D(s.TEXTURE_2D,Ee,Fe,xe.width,xe.height)}for(let xe=0,Ne=he.length;xe<Ne;xe++)Z=he[xe],Se?z&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ce,qe,Z):t.texImage2D(s.TEXTURE_2D,xe,Fe,Ce,qe,Z);S.generateMipmaps=!1}else if(Se){if(Me){const xe=gt(_e);t.texStorage2D(s.TEXTURE_2D,Ee,Fe,xe.width,xe.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,qe,_e)}else t.texImage2D(s.TEXTURE_2D,0,Fe,Ce,qe,_e);y(S)&&D(ae),Ue.__version=Re.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Ve(N,S,ee){if(S.image.length!==6)return;const ae=ie(N,S),me=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ee);const Re=r.get(me);if(me.version!==Re.__version||ae===!0){t.activeTexture(s.TEXTURE0+ee);const Ue=Rt.getPrimaries(Rt.workingColorSpace),ge=S.colorSpace===Vr?null:Rt.getPrimaries(S.colorSpace),_e=S.colorSpace===Vr||Ue===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,qe=S.image[0]&&S.image[0].isDataTexture,Fe=[];for(let ye=0;ye<6;ye++)!Ce&&!qe?Fe[ye]=v(S.image[ye],!0,a.maxCubemapSize):Fe[ye]=qe?S.image[ye].image:S.image[ye],Fe[ye]=We(S,Fe[ye]);const Z=Fe[0],he=l.convert(S.format,S.colorSpace),Se=l.convert(S.type),Me=b(S.internalFormat,he,Se,S.normalized,S.colorSpace),z=S.isVideoTexture!==!0,Ee=Re.__version===void 0||ae===!0,xe=me.dataReady;let Ne=L(S,Z);ze(s.TEXTURE_CUBE_MAP,S);let Ge;if(Ce){z&&Ee&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,Me,Z.width,Z.height);for(let ye=0;ye<6;ye++){Ge=Fe[ye].mipmaps;for(let et=0;et<Ge.length;et++){const Ke=Ge[et];S.format!==Ui?he!==null?z?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et,0,0,Ke.width,Ke.height,he,Ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et,Me,Ke.width,Ke.height,0,Ke.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et,0,0,Ke.width,Ke.height,he,Se,Ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et,Me,Ke.width,Ke.height,0,he,Se,Ke.data)}}}else{if(Ge=S.mipmaps,z&&Ee){Ge.length>0&&Ne++;const ye=gt(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,Me,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(qe){z?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Fe[ye].width,Fe[ye].height,he,Se,Fe[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Me,Fe[ye].width,Fe[ye].height,0,he,Se,Fe[ye].data);for(let et=0;et<Ge.length;et++){const Gt=Ge[et].image[ye].image;z?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et+1,0,0,Gt.width,Gt.height,he,Se,Gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et+1,Me,Gt.width,Gt.height,0,he,Se,Gt.data)}}else{z?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,he,Se,Fe[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Me,he,Se,Fe[ye]);for(let et=0;et<Ge.length;et++){const Ke=Ge[et];z?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et+1,0,0,he,Se,Ke.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et+1,Me,he,Se,Ke.image[ye])}}}y(S)&&D(s.TEXTURE_CUBE_MAP),Re.__version=me.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function ke(N,S,ee,ae,me,Re){const Ue=l.convert(ee.format,ee.colorSpace),ge=l.convert(ee.type),_e=b(ee.internalFormat,Ue,ge,ee.normalized,ee.colorSpace),Ce=r.get(S),qe=r.get(ee);if(qe.__renderTarget=S,!Ce.__hasExternalTextures){const Fe=Math.max(1,S.width>>Re),Z=Math.max(1,S.height>>Re);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,Re,_e,Fe,Z,S.depth,0,Ue,ge,null):t.texImage2D(me,Re,_e,Fe,Z,0,Ue,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),De(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,me,qe.__webglTexture,0,bt(S)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,me,qe.__webglTexture,Re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(N,S,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,N),S.depthBuffer){const ae=S.depthTexture,me=ae&&ae.isDepthTexture?ae.type:null,Re=C(S.stencilBuffer,me),Ue=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;De(S)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(S),Re,S.width,S.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(S),Re,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Re,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,N)}else{const ae=S.textures;for(let me=0;me<ae.length;me++){const Re=ae[me],Ue=l.convert(Re.format,Re.colorSpace),ge=l.convert(Re.type),_e=b(Re.internalFormat,Ue,ge,Re.normalized,Re.colorSpace);De(S)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(S),_e,S.width,S.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(S),_e,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_e,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qe(N,S,ee){const ae=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(S.depthTexture);if(me.__renderTarget=S,(!me.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ae){if(me.__webglInit===void 0&&(me.__webglInit=!0,S.depthTexture.addEventListener("dispose",k)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ze(s.TEXTURE_CUBE_MAP,S.depthTexture);const Ce=l.convert(S.depthTexture.format),qe=l.convert(S.depthTexture.type);let Fe;S.depthTexture.format===pr?Fe=s.DEPTH_COMPONENT24:S.depthTexture.format===_s&&(Fe=s.DEPTH24_STENCIL8);for(let Z=0;Z<6;Z++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,S.width,S.height,0,Ce,qe,null)}}else V(S.depthTexture,0);const Re=me.__webglTexture,Ue=bt(S),ge=ae?s.TEXTURE_CUBE_MAP_POSITIVE_X+ee:s.TEXTURE_2D,_e=S.depthTexture.format===_s?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===pr)De(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ge,Re,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,_e,ge,Re,0);else if(S.depthTexture.format===_s)De(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ge,Re,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,_e,ge,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(N){const S=r.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){const ae=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ae){const me=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ae.removeEventListener("dispose",me)};ae.addEventListener("dispose",me),S.__depthDisposeCallback=me}S.__boundDepthTexture=ae}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if(ee)for(let ae=0;ae<6;ae++)Qe(S.__webglFramebuffer[ae],N,ae);else{const ae=N.texture.mipmaps;ae&&ae.length>0?Qe(S.__webglFramebuffer[0],N,0):Qe(S.__webglFramebuffer,N,0)}else if(ee){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]===void 0)S.__webglDepthbuffer[ae]=s.createRenderbuffer(),ct(S.__webglDepthbuffer[ae],N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=S.__webglDepthbuffer[ae];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Re)}}else{const ae=N.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ct(S.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(N,S,ee){const ae=r.get(N);S!==void 0&&ke(ae.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&At(N)}function dt(N){const S=N.texture,ee=r.get(N),ae=r.get(S);N.addEventListener("dispose",w);const me=N.textures,Re=N.isWebGLCubeRenderTarget===!0,Ue=me.length>1;if(Ue||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=S.version,u.memory.textures++),Re){ee.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer[ge]=[];for(let _e=0;_e<S.mipmaps.length;_e++)ee.__webglFramebuffer[ge][_e]=s.createFramebuffer()}else ee.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)ee.__webglFramebuffer[ge]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let ge=0,_e=me.length;ge<_e;ge++){const Ce=r.get(me[ge]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&De(N)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ge=0;ge<me.length;ge++){const _e=me[ge];ee.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[ge]);const Ce=l.convert(_e.format,_e.colorSpace),qe=l.convert(_e.type),Fe=b(_e.internalFormat,Ce,qe,_e.normalized,_e.colorSpace,N.isXRRenderTarget===!0),Z=bt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,Fe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,ee.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(ee.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),ze(s.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)ke(ee.__webglFramebuffer[ge][_e],N,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else ke(ee.__webglFramebuffer[ge],N,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(S)&&D(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ge=0,_e=me.length;ge<_e;ge++){const Ce=me[ge],qe=r.get(Ce);let Fe=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Fe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Fe,qe.__webglTexture),ze(Fe,Ce),ke(ee.__webglFramebuffer,N,Ce,s.COLOR_ATTACHMENT0+ge,Fe,0),y(Ce)&&D(Fe)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ge=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,ae.__webglTexture),ze(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)ke(ee.__webglFramebuffer[_e],N,S,s.COLOR_ATTACHMENT0,ge,_e);else ke(ee.__webglFramebuffer,N,S,s.COLOR_ATTACHMENT0,ge,0);y(S)&&D(ge),t.unbindTexture()}N.depthBuffer&&At(N)}function kt(N){const S=N.textures;for(let ee=0,ae=S.length;ee<ae;ee++){const me=S[ee];if(y(me)){const Re=P(N),Ue=r.get(me).__webglTexture;t.bindTexture(Re,Ue),D(Re),t.unbindTexture()}}}const Vt=[],Je=[];function Ct(N){if(N.samples>0){if(De(N)===!1){const S=N.textures,ee=N.width,ae=N.height;let me=s.COLOR_BUFFER_BIT;const Re=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(N),ge=S.length>1;if(ge)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const _e=N.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const qe=r.get(S[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qe,0)}s.blitFramebuffer(0,0,ee,ae,0,0,ee,ae,me,s.NEAREST),f===!0&&(Vt.length=0,Je.length=0,Vt.push(s.COLOR_ATTACHMENT0+Ce),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Vt.push(Re),Je.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Je)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const qe=r.get(S[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&f){const S=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function bt(N){return Math.min(a.maxSamples,N.samples)}function De(N){const S=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function H(N){const S=u.render.frame;x.get(N)!==S&&(x.set(N,S),N.update())}function We(N,S){const ee=N.colorSpace,ae=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==dc&&ee!==Vr&&(Rt.getTransfer(ee)===Ot?(ae!==Ui||me!==ui)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ee)),S}function gt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=B,this.resetTextureUnits=ce,this.getTextureUnits=re,this.setTextureUnits=$,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=ne,this.setTextureCube=F,this.rebindTextures=mt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function PE(s,e){function t(r,a=Vr){let l;const u=Rt.getTransfer(a);if(r===ui)return s.UNSIGNED_BYTE;if(r===$h)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ig)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===tg)return s.BYTE;if(r===ng)return s.SHORT;if(r===yo)return s.UNSIGNED_SHORT;if(r===jh)return s.INT;if(r===Ki)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===hi)return s.HALF_FLOAT;if(r===sg)return s.ALPHA;if(r===ag)return s.RGB;if(r===Ui)return s.RGBA;if(r===pr)return s.DEPTH_COMPONENT;if(r===_s)return s.DEPTH_STENCIL;if(r===og)return s.RED;if(r===Zh)return s.RED_INTEGER;if(r===Es)return s.RG;if(r===Qh)return s.RG_INTEGER;if(r===Jh)return s.RGBA_INTEGER;if(r===sc||r===ac||r===oc||r===lc)if(u===Ot)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===sc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===sc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ac)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===oc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nh||r===ih||r===rh||r===sh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===nh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ih)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ah||r===oh||r===lh||r===ch||r===uh||r===fc||r===fh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ah||r===oh)return u===Ot?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===lh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===ch)return l.COMPRESSED_R11_EAC;if(r===uh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===fc)return l.COMPRESSED_RG11_EAC;if(r===fh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===hh||r===dh||r===ph||r===mh||r===gh||r===vh||r===xh||r===_h||r===yh||r===Sh||r===Mh||r===Eh||r===wh||r===Th)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===hh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ph)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_h)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wh)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Th)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bh||r===Ah||r===Rh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===bh)return u===Ot?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ah)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ch||r===Ph||r===hc||r===Nh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ch)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ph)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===So?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const NE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new gg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Dn({vertexShader:NE,fragmentShader:LE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Wn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IE extends ws{constructor(e,t){super();const r=this;let a=null,l=1,u=null,d="local-floor",f=1,p=null,x=null,_=null,g=null,M=null,E=null;const R=typeof XRWebGLBinding<"u",v=new DE,y={},D=t.getContextAttributes();let P=null,b=null;const C=[],L=[],k=new at;let w=null;const I=new li;I.viewport=new rn;const Y=new li;Y.viewport=new rn;const W=[I,Y],j=new V_;let ce=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ve=C[ie];return ve===void 0&&(ve=new yf,C[ie]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ie){let ve=C[ie];return ve===void 0&&(ve=new yf,C[ie]=ve),ve.getGripSpace()},this.getHand=function(ie){let ve=C[ie];return ve===void 0&&(ve=new yf,C[ie]=ve),ve.getHandSpace()};function $(ie){const ve=L.indexOf(ie.inputSource);if(ve===-1)return;const fe=C[ve];fe!==void 0&&(fe.update(ie.inputSource,ie.frame,p||u),fe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function B(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",B),a.removeEventListener("inputsourceschange",G);for(let ie=0;ie<C.length;ie++){const ve=L[ie];ve!==null&&(L[ie]=null,C[ie].disconnect(ve))}ce=null,re=null,v.reset();for(const ie in y)delete y[ie];e.setRenderTarget(P),M=null,g=null,_=null,a=null,b=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ie){if(a=ie,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",B),a.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,we=null,Ve=null;D.depth&&(Ve=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=D.stencil?_s:pr,we=D.stencil?So:Ki);const ke={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(ke),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new ei(g.textureWidth,g.textureHeight,{format:Ui,type:ui,depthTexture:new _a(g.textureWidth,g.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const fe={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new ei(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await a.requestReferenceSpace(d),ze.setContext(a),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(ie){for(let ve=0;ve<ie.removed.length;ve++){const fe=ie.removed[ve],we=L.indexOf(fe);we>=0&&(L[we]=null,C[we].disconnect(fe))}for(let ve=0;ve<ie.added.length;ve++){const fe=ie.added[ve];let we=L.indexOf(fe);if(we===-1){for(let ke=0;ke<C.length;ke++)if(ke>=L.length){L.push(fe),we=ke;break}else if(L[ke]===null){L[ke]=fe,we=ke;break}if(we===-1)break}const Ve=C[we];Ve&&Ve.connect(fe)}}const V=new Q,q=new Q;function ne(ie,ve,fe){V.setFromMatrixPosition(ve.matrixWorld),q.setFromMatrixPosition(fe.matrixWorld);const we=V.distanceTo(q),Ve=ve.projectionMatrix.elements,ke=fe.projectionMatrix.elements,ct=Ve[14]/(Ve[10]-1),Qe=Ve[14]/(Ve[10]+1),At=(Ve[9]+1)/Ve[5],mt=(Ve[9]-1)/Ve[5],dt=(Ve[8]-1)/Ve[0],kt=(ke[8]+1)/ke[0],Vt=ct*dt,Je=ct*kt,Ct=we/(-dt+kt),bt=Ct*-dt;if(ve.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(bt),ie.translateZ(Ct),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ve[10]===-1)ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const De=ct+Ct,H=Qe+Ct,We=Vt-bt,gt=Je+(we-bt),N=At*Qe/H*De,S=mt*Qe/H*De;ie.projectionMatrix.makePerspective(We,gt,N,S,De,H),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function F(ie,ve){ve===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ve.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(a===null)return;let ve=ie.near,fe=ie.far;v.texture!==null&&(v.depthNear>0&&(ve=v.depthNear),v.depthFar>0&&(fe=v.depthFar)),j.near=Y.near=I.near=ve,j.far=Y.far=I.far=fe,(ce!==j.near||re!==j.far)&&(a.updateRenderState({depthNear:j.near,depthFar:j.far}),ce=j.near,re=j.far),j.layers.mask=ie.layers.mask|6,I.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const we=ie.parent,Ve=j.cameras;F(j,we);for(let ke=0;ke<Ve.length;ke++)F(Ve[ke],we);Ve.length===2?ne(j,I,Y):j.projectionMatrix.copy(I.projectionMatrix),te(ie,j,we)};function te(ie,ve,fe){fe===null?ie.matrix.copy(ve.matrixWorld):(ie.matrix.copy(fe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ve.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ih*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&M===null))return f},this.setFoveation=function(ie){f=ie,g!==null&&(g.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(j)},this.getCameraTexture=function(ie){return y[ie]};let Pe=null;function Be(ie,ve){if(x=ve.getViewerPose(p||u),E=ve,x!==null){const fe=x.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let we=!1;fe.length!==j.cameras.length&&(j.cameras.length=0,we=!0);for(let Qe=0;Qe<fe.length;Qe++){const At=fe[Qe];let mt=null;if(M!==null)mt=M.getViewport(At);else{const kt=_.getViewSubImage(g,At);mt=kt.viewport,Qe===0&&(e.setRenderTargetTextures(b,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(b))}let dt=W[Qe];dt===void 0&&(dt=new li,dt.layers.enable(Qe),dt.viewport=new rn,W[Qe]=dt),dt.matrix.fromArray(At.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(At.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(mt.x,mt.y,mt.width,mt.height),Qe===0&&(j.matrix.copy(dt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),we===!0&&j.cameras.push(dt)}const Ve=a.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const Qe=_.getDepthInformation(fe[0]);Qe&&Qe.isValid&&Qe.texture&&v.init(Qe,a.renderState)}if(Ve&&Ve.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let Qe=0;Qe<fe.length;Qe++){const At=fe[Qe].camera;if(At){let mt=y[At];mt||(mt=new gg,y[At]=mt);const dt=_.getCameraImage(At);mt.sourceTexture=dt}}}}for(let fe=0;fe<C.length;fe++){const we=L[fe],Ve=C[fe];we!==null&&Ve!==void 0&&Ve.update(we,ve,p||u)}Pe&&Pe(ie,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),E=null}const ze=new Mg;ze.setAnimationLoop(Be),this.setAnimationLoop=function(ie){Pe=ie},this.dispose=function(){}}}const UE=new Kt,Cg=new _t;Cg.set(-1,0,0,0,1,0,0,0,1);function FE(s,e){function t(v,y){v.matrixAutoUpdate===!0&&v.updateMatrix(),y.value.copy(v.matrix)}function r(v,y){y.color.getRGB(v.fogColor.value,vg(s)),y.isFog?(v.fogNear.value=y.near,v.fogFar.value=y.far):y.isFogExp2&&(v.fogDensity.value=y.density)}function a(v,y,D,P,b){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(v,y):y.isMeshLambertMaterial?(l(v,y),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(v,y),_(v,y)):y.isMeshPhongMaterial?(l(v,y),x(v,y),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(v,y),g(v,y),y.isMeshPhysicalMaterial&&M(v,y,b)):y.isMeshMatcapMaterial?(l(v,y),E(v,y)):y.isMeshDepthMaterial?l(v,y):y.isMeshDistanceMaterial?(l(v,y),R(v,y)):y.isMeshNormalMaterial?l(v,y):y.isLineBasicMaterial?(u(v,y),y.isLineDashedMaterial&&d(v,y)):y.isPointsMaterial?f(v,y,D,P):y.isSpriteMaterial?p(v,y):y.isShadowMaterial?(v.color.value.copy(y.color),v.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(v,y){v.opacity.value=y.opacity,y.color&&v.diffuse.value.copy(y.color),y.emissive&&v.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.bumpMap&&(v.bumpMap.value=y.bumpMap,t(y.bumpMap,v.bumpMapTransform),v.bumpScale.value=y.bumpScale,y.side===Jn&&(v.bumpScale.value*=-1)),y.normalMap&&(v.normalMap.value=y.normalMap,t(y.normalMap,v.normalMapTransform),v.normalScale.value.copy(y.normalScale),y.side===Jn&&v.normalScale.value.negate()),y.displacementMap&&(v.displacementMap.value=y.displacementMap,t(y.displacementMap,v.displacementMapTransform),v.displacementScale.value=y.displacementScale,v.displacementBias.value=y.displacementBias),y.emissiveMap&&(v.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,v.emissiveMapTransform)),y.specularMap&&(v.specularMap.value=y.specularMap,t(y.specularMap,v.specularMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);const D=e.get(y),P=D.envMap,b=D.envMapRotation;P&&(v.envMap.value=P,v.envMapRotation.value.setFromMatrix4(UE.makeRotationFromEuler(b)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Cg),v.reflectivity.value=y.reflectivity,v.ior.value=y.ior,v.refractionRatio.value=y.refractionRatio),y.lightMap&&(v.lightMap.value=y.lightMap,v.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,v.lightMapTransform)),y.aoMap&&(v.aoMap.value=y.aoMap,v.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,v.aoMapTransform))}function u(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform))}function d(v,y){v.dashSize.value=y.dashSize,v.totalSize.value=y.dashSize+y.gapSize,v.scale.value=y.scale}function f(v,y,D,P){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.size.value=y.size*D,v.scale.value=P*.5,y.map&&(v.map.value=y.map,t(y.map,v.uvTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function p(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.rotation.value=y.rotation,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function x(v,y){v.specular.value.copy(y.specular),v.shininess.value=Math.max(y.shininess,1e-4)}function _(v,y){y.gradientMap&&(v.gradientMap.value=y.gradientMap)}function g(v,y){v.metalness.value=y.metalness,y.metalnessMap&&(v.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,v.metalnessMapTransform)),v.roughness.value=y.roughness,y.roughnessMap&&(v.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,v.roughnessMapTransform)),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)}function M(v,y,D){v.ior.value=y.ior,y.sheen>0&&(v.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),v.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(v.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,v.sheenColorMapTransform)),y.sheenRoughnessMap&&(v.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,v.sheenRoughnessMapTransform))),y.clearcoat>0&&(v.clearcoat.value=y.clearcoat,v.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(v.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,v.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(v.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&v.clearcoatNormalScale.value.negate())),y.dispersion>0&&(v.dispersion.value=y.dispersion),y.iridescence>0&&(v.iridescence.value=y.iridescence,v.iridescenceIOR.value=y.iridescenceIOR,v.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(v.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,v.iridescenceMapTransform)),y.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),y.transmission>0&&(v.transmission.value=y.transmission,v.transmissionSamplerMap.value=D.texture,v.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(v.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,v.transmissionMapTransform)),v.thickness.value=y.thickness,y.thicknessMap&&(v.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=y.attenuationDistance,v.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(v.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(v.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=y.specularIntensity,v.specularColor.value.copy(y.specularColor),y.specularColorMap&&(v.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,v.specularColorMapTransform)),y.specularIntensityMap&&(v.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,y){y.matcap&&(v.matcap.value=y.matcap)}function R(v,y){const D=e.get(y).light;v.referencePosition.value.setFromMatrixPosition(D.matrixWorld),v.nearDistance.value=D.shadow.camera.near,v.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function OE(s,e,t,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,C){const L=C.program;r.uniformBlockBinding(b,L)}function p(b,C){let L=a[b.id];L===void 0&&(v(b),L=x(b),a[b.id]=L,b.addEventListener("dispose",D));const k=C.program;r.updateUBOMapping(b,k);const w=e.render.frame;l[b.id]!==w&&(g(b),l[b.id]=w)}function x(b){const C=_();b.__bindingPointIndex=C;const L=s.createBuffer(),k=b.__size,w=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,k,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,L),L}function _(){for(let b=0;b<d;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const C=a[b.id],L=b.uniforms,k=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let w=0,I=L.length;w<I;w++){const Y=L[w];if(Array.isArray(Y))for(let W=0,j=Y.length;W<j;W++)M(Y[W],w,W,k);else M(Y,w,0,k)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(b,C,L,k){if(R(b,C,L,k)===!0){const w=b.__offset,I=b.value;if(Array.isArray(I)){let Y=0;for(let W=0;W<I.length;W++){const j=I[W],ce=y(j);E(j,b.__data,Y),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(Y+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(I,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,b.__data)}}function E(b,C,L){typeof b=="number"||typeof b=="boolean"?C[0]=b:b.isMatrix3?(C[0]=b.elements[0],C[1]=b.elements[1],C[2]=b.elements[2],C[3]=0,C[4]=b.elements[3],C[5]=b.elements[4],C[6]=b.elements[5],C[7]=0,C[8]=b.elements[6],C[9]=b.elements[7],C[10]=b.elements[8],C[11]=0):ArrayBuffer.isView(b)?C.set(new b.constructor(b.buffer,b.byteOffset,C.length)):b.toArray(C,L)}function R(b,C,L,k){const w=b.value,I=C+"_"+L;if(k[I]===void 0)return typeof w=="number"||typeof w=="boolean"?k[I]=w:ArrayBuffer.isView(w)?k[I]=w.slice():k[I]=w.clone(),!0;{const Y=k[I];if(typeof w=="number"||typeof w=="boolean"){if(Y!==w)return k[I]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(Y.equals(w)===!1)return Y.copy(w),!0}}return!1}function v(b){const C=b.uniforms;let L=0;const k=16;for(let I=0,Y=C.length;I<Y;I++){const W=Array.isArray(C[I])?C[I]:[C[I]];for(let j=0,ce=W.length;j<ce;j++){const re=W[j],$=Array.isArray(re.value)?re.value:[re.value];for(let B=0,G=$.length;B<G;B++){const V=$[B],q=y(V),ne=L%k,F=ne%q.boundary,te=ne+F;L+=F,te!==0&&k-te<q.storage&&(L+=k-te),re.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=L,L+=q.storage}}}const w=L%k;return w>0&&(L+=k-w),b.__size=L,b.__cache={},this}function y(b){const C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(C.boundary=16,C.storage=b.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",b),C}function D(b){const C=b.target;C.removeEventListener("dispose",D);const L=u.indexOf(C.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(a[C.id]),delete a[C.id],delete l[C.id]}function P(){for(const b in a)s.deleteBuffer(a[b]);u=[],a={},l={}}return{bind:f,update:p,dispose:P}}const kE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function zE(){return Gi===null&&(Gi=new T_(kE,16,16,Es,hi),Gi.name="DFG_LUT",Gi.minFilter=Tn,Gi.magFilter=Tn,Gi.wrapS=hr,Gi.wrapT=hr,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class BE{constructor(e={}){const{canvas:t=t_(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ui}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const R=M,v=new Set([Jh,Qh,Zh]),y=new Set([ui,Ki,yo,So,$h,Kh]),D=new Uint32Array(4),P=new Int32Array(4),b=new Q;let C=null,L=null;const k=[],w=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let W=!1,j=null,ce=null,re=null,$=null;this._outputColorSpace=dn;let B=0,G=0,V=null,q=-1,ne=null;const F=new rn,te=new rn;let Pe=null;const Be=new yt(0);let ze=0,ie=t.width,ve=t.height,fe=1,we=null,Ve=null;const ke=new rn(0,0,ie,ve),ct=new rn(0,0,ie,ve);let Qe=!1;const At=new ad;let mt=!1,dt=!1;const kt=new Kt,Vt=new Q,Je=new rn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function De(){return V===null?fe:1}let H=r;function We(A,J){return t.getContext(A,J)}try{const A={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vh}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",bn,!1),H===null){const J="webgl2";if(H=We(J,A),H===null)throw We(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Pt("WebGLRenderer: "+A.message),A}let gt,N,S,ee,ae,me,Re,Ue,ge,_e,Ce,qe,Fe,Z,he,Se,Me,z,Ee,xe,Ne,Ge,ye;function et(){gt=new zM(H),gt.init(),Ne=new PE(H,gt),N=new NM(H,gt,e,Ne),S=new RE(H,gt),N.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),ce=H.createFramebuffer(),re=H.createFramebuffer(),$=H.createFramebuffer(),ee=new GM(H),ae=new pE,me=new CE(H,gt,S,ae,N,Ne,ee),Re=new kM(Y),Ue=new Y_(H),Ge=new CM(H,Ue),ge=new BM(H,Ue,ee,Ge),_e=new WM(H,ge,Ue,Ge,ee),z=new HM(H,N,me),he=new LM(ae),Ce=new dE(Y,Re,gt,N,Ge,he),qe=new FE(Y,ae),Fe=new gE,Z=new ME(gt),Me=new RM(Y,Re,S,_e,E,f),Se=new AE(Y,_e,N),ye=new OE(H,ee,N,S),Ee=new PM(H,gt,ee),xe=new VM(H,gt,ee),ee.programs=Ce.programs,Y.capabilities=N,Y.extensions=gt,Y.properties=ae,Y.renderLists=Fe,Y.shadowMap=Se,Y.state=S,Y.info=ee}et(),R!==ui&&(I=new YM(R,t.width,t.height,d,a,l));const Ke=new IE(Y,H);this.xr=Ke,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(A){A!==void 0&&(fe=A,this.setSize(ie,ve,!1))},this.getSize=function(A){return A.set(ie,ve)},this.setSize=function(A,J,de=!0){if(Ke.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,ve=J,t.width=Math.floor(A*fe),t.height=Math.floor(J*fe),de===!0&&(t.style.width=A+"px",t.style.height=J+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(ie*fe,ve*fe).floor()},this.setDrawingBufferSize=function(A,J,de){ie=A,ve=J,fe=de,t.width=Math.floor(A*de),t.height=Math.floor(J*de),this.setViewport(0,0,A,J)},this.setEffects=function(A){if(R===ui){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let J=0;J<A.length;J++)if(A[J].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(ke)},this.setViewport=function(A,J,de,le){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,J,de,le),S.viewport(F.copy(ke).multiplyScalar(fe).round())},this.getScissor=function(A){return A.copy(ct)},this.setScissor=function(A,J,de,le){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,J,de,le),S.scissor(te.copy(ct).multiplyScalar(fe).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(A){S.setScissorTest(Qe=A)},this.setOpaqueSort=function(A){we=A},this.setTransparentSort=function(A){Ve=A},this.getClearColor=function(A){return A.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(A=!0,J=!0,de=!0){let le=0;if(A){let oe=!1;if(V!==null){const Oe=V.texture.format;oe=v.has(Oe)}if(oe){const Oe=V.texture.type,je=y.has(Oe),Ie=Me.getClearColor(),tt=Me.getClearAlpha(),st=Ie.r,vt=Ie.g,xt=Ie.b;je?(D[0]=st,D[1]=vt,D[2]=xt,D[3]=tt,H.clearBufferuiv(H.COLOR,0,D)):(P[0]=st,P[1]=vt,P[2]=xt,P[3]=tt,H.clearBufferiv(H.COLOR,0,P))}else le|=H.COLOR_BUFFER_BIT}J&&(le|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(le|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&H.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),Me.dispose(),Fe.dispose(),Z.dispose(),ae.dispose(),Re.dispose(),_e.dispose(),Ge.dispose(),ye.dispose(),Ce.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Ao),Ke.removeEventListener("sessionend",Ro),Fn.stop()};function Gt(A){A.preventDefault(),gc("WebGLRenderer: Context Lost."),W=!0}function Ut(){gc("WebGLRenderer: Context Restored."),W=!1;const A=ee.autoReset,J=Se.enabled,de=Se.autoUpdate,le=Se.needsUpdate,oe=Se.type;et(),ee.autoReset=A,Se.enabled=J,Se.autoUpdate=de,Se.needsUpdate=le,Se.type=oe}function bn(A){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function di(A){const J=A.target;J.removeEventListener("dispose",di),Yr(J)}function Yr(A){bs(A),ae.remove(A)}function bs(A){const J=ae.get(A).programs;J!==void 0&&(J.forEach(function(de){Ce.releaseProgram(de)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,de,le,oe,Oe){J===null&&(J=Ct);const je=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ie=Jt(A,J,de,le,oe);S.setMaterial(le,je);let tt=de.index,st=1;if(le.wireframe===!0){if(tt=ge.getWireframeAttribute(de),tt===void 0)return;st=2}const vt=de.drawRange,xt=de.attributes.position;let it=vt.start*st,Lt=(vt.start+vt.count)*st;Oe!==null&&(it=Math.max(it,Oe.start*st),Lt=Math.min(Lt,(Oe.start+Oe.count)*st)),tt!==null?(it=Math.max(it,0),Lt=Math.min(Lt,tt.count)):xt!=null&&(it=Math.max(it,0),Lt=Math.min(Lt,xt.count));const Wt=Lt-it;if(Wt<0||Wt===1/0)return;Ge.setup(oe,le,Ie,de,tt);let Zt,zt=Ee;if(tt!==null&&(Zt=Ue.get(tt),zt=xe,zt.setIndex(Zt)),oe.isMesh)le.wireframe===!0?(S.setLineWidth(le.wireframeLinewidth*De()),zt.setMode(H.LINES)):zt.setMode(H.TRIANGLES);else if(oe.isLine){let on=le.linewidth;on===void 0&&(on=1),S.setLineWidth(on*De()),oe.isLineSegments?zt.setMode(H.LINES):oe.isLineLoop?zt.setMode(H.LINE_LOOP):zt.setMode(H.LINE_STRIP)}else oe.isPoints?zt.setMode(H.POINTS):oe.isSprite&&zt.setMode(H.TRIANGLES);if(oe.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))zt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const on=oe._multiDrawStarts,Xe=oe._multiDrawCounts,Sn=oe._multiDrawCount,Mt=tt?Ue.get(tt).bytesPerElement:1,Xn=ae.get(le).currentProgram.getUniforms();for(let Yn=0;Yn<Sn;Yn++)Xn.setValue(H,"_gl_DrawID",Yn),zt.render(on[Yn]/Mt,Xe[Yn])}else if(oe.isInstancedMesh)zt.renderInstances(it,Wt,oe.count);else if(de.isInstancedBufferGeometry){const on=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Xe=Math.min(de.instanceCount,on);zt.renderInstances(it,Wt,Xe)}else zt.render(it,Wt)};function qr(A,J,de){A.transparent===!0&&A.side===ci&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,Kr(A,J,de),A.side=Wr,A.needsUpdate=!0,Kr(A,J,de),A.side=ci):Kr(A,J,de)}this.compile=function(A,J,de=null){de===null&&(de=A),L=Z.get(de),L.init(J),w.push(L),de.traverseVisible(function(oe){oe.isLight&&oe.layers.test(J.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),A!==de&&A.traverseVisible(function(oe){oe.isLight&&oe.layers.test(J.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),L.setupLights();const le=new Set;return A.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Oe=oe.material;if(Oe)if(Array.isArray(Oe))for(let je=0;je<Oe.length;je++){const Ie=Oe[je];qr(Ie,de,oe),le.add(Ie)}else qr(Oe,de,oe),le.add(Oe)}),L=w.pop(),le},this.compileAsync=function(A,J,de=null){const le=this.compile(A,J,de);return new Promise(oe=>{function Oe(){if(le.forEach(function(je){ae.get(je).currentProgram.isReady()&&le.delete(je)}),le.size===0){oe(A);return}setTimeout(Oe,10)}gt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let jr=null;function Ac(A){jr&&jr(A)}function Ao(){Fn.stop()}function Ro(){Fn.start()}const Fn=new Mg;Fn.setAnimationLoop(Ac),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(A){jr=A,Ke.setAnimationLoop(A),A===null?Fn.stop():Fn.start()},Ke.addEventListener("sessionstart",Ao),Ke.addEventListener("sessionend",Ro),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;j!==null&&j.renderStart(A,J);const de=Ke.enabled===!0&&Ke.isPresenting===!0,le=I!==null&&(V===null||de)&&I.begin(Y,V);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(J),J=Ke.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,J,V),L=Z.get(A,w.length),L.init(J),L.state.textureUnits=me.getTextureUnits(),w.push(L),kt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),At.setFromProjectionMatrix(kt,Yi,J.reversedDepth),dt=this.localClippingEnabled,mt=he.init(this.clippingPlanes,dt),C=Fe.get(A,k.length),C.init(),k.push(C),Ke.enabled===!0&&Ke.isPresenting===!0){const je=Y.xr.getDepthSensingMesh();je!==null&&As(je,J,-1/0,Y.sortObjects)}As(A,J,0,Y.sortObjects),C.finish(),Y.sortObjects===!0&&C.sort(we,Ve,J.reversedDepth),bt=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,bt&&Me.addToRenderList(C,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&he.beginShadows();const oe=L.state.shadowsArray;if(Se.render(oe,A,J),mt===!0&&he.endShadows(),(le&&I.hasRenderPass())===!1){const je=C.opaque,Ie=C.transmissive;if(L.setupLights(),J.isArrayCamera){const tt=J.cameras;if(Ie.length>0)for(let st=0,vt=tt.length;st<vt;st++){const xt=tt[st];Co(je,Ie,A,xt)}bt&&Me.render(A);for(let st=0,vt=tt.length;st<vt;st++){const xt=tt[st];Ta(C,A,xt,xt.viewport)}}else Ie.length>0&&Co(je,Ie,A,J),bt&&Me.render(A),Ta(C,A,J)}V!==null&&G===0&&(me.updateMultisampleRenderTarget(V),me.updateRenderTargetMipmap(V)),le&&I.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,J),Ge.resetDefaultState(),q=-1,ne=null,w.pop(),w.length>0?(L=w[w.length-1],me.setTextureUnits(L.state.textureUnits),mt===!0&&he.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,k.pop(),k.length>0?C=k[k.length-1]:C=null,j!==null&&j.renderEnd()};function As(A,J,de,le){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)de=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){le&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(kt);const je=_e.update(A),Ie=A.material;Ie.visible&&C.push(A,je,Ie,de,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){const je=_e.update(A),Ie=A.material;if(le&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Je.copy(je.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(kt)),Array.isArray(Ie)){const tt=je.groups;for(let st=0,vt=tt.length;st<vt;st++){const xt=tt[st],it=Ie[xt.materialIndex];it&&it.visible&&C.push(A,je,it,de,Je.z,xt)}}else Ie.visible&&C.push(A,je,Ie,de,Je.z,null)}}const Oe=A.children;for(let je=0,Ie=Oe.length;je<Ie;je++)As(Oe[je],J,de,le)}function Ta(A,J,de,le){const{opaque:oe,transmissive:Oe,transparent:je}=A;L.setupLightsView(de),mt===!0&&he.setGlobalState(Y.clippingPlanes,de),le&&S.viewport(F.copy(le)),oe.length>0&&$r(oe,J,de),Oe.length>0&&$r(Oe,J,de),je.length>0&&$r(je,J,de),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Co(A,J,de,le){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[le.id]===void 0){const it=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[le.id]=new ei(1,1,{generateMipmaps:!0,type:it?hi:ui,minFilter:xs,samples:Math.max(4,N.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Oe=L.state.transmissionRenderTarget[le.id],je=le.viewport||F;Oe.setSize(je.z*Y.transmissionResolutionScale,je.w*Y.transmissionResolutionScale);const Ie=Y.getRenderTarget(),tt=Y.getActiveCubeFace(),st=Y.getActiveMipmapLevel();Y.setRenderTarget(Oe),Y.getClearColor(Be),ze=Y.getClearAlpha(),ze<1&&Y.setClearColor(16777215,.5),Y.clear(),bt&&Me.render(de);const vt=Y.toneMapping;Y.toneMapping=$i;const xt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),L.setupLightsView(le),mt===!0&&he.setGlobalState(Y.clippingPlanes,le),$r(A,de,le),me.updateMultisampleRenderTarget(Oe),me.updateRenderTargetMipmap(Oe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Lt=0,Wt=J.length;Lt<Wt;Lt++){const Zt=J[Lt],{object:zt,geometry:on,material:Xe,group:Sn}=Zt;if(Xe.side===ci&&zt.layers.test(le.layers)){const Mt=Xe.side;Xe.side=Jn,Xe.needsUpdate=!0,ba(zt,de,le,on,Xe,Sn),Xe.side=Mt,Xe.needsUpdate=!0,it=!0}}it===!0&&(me.updateMultisampleRenderTarget(Oe),me.updateRenderTargetMipmap(Oe))}Y.setRenderTarget(Ie,tt,st),Y.setClearColor(Be,ze),xt!==void 0&&(le.viewport=xt),Y.toneMapping=vt}function $r(A,J,de){const le=J.isScene===!0?J.overrideMaterial:null;for(let oe=0,Oe=A.length;oe<Oe;oe++){const je=A[oe],{object:Ie,geometry:tt,group:st}=je;let vt=je.material;vt.allowOverride===!0&&le!==null&&(vt=le),Ie.layers.test(de.layers)&&ba(Ie,J,de,tt,vt,st)}}function ba(A,J,de,le,oe,Oe){A.onBeforeRender(Y,J,de,le,oe,Oe),A.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender(Y,J,de,le,A,Oe),oe.transparent===!0&&oe.side===ci&&oe.forceSinglePass===!1?(oe.side=Jn,oe.needsUpdate=!0,Y.renderBufferDirect(de,J,le,oe,A,Oe),oe.side=Wr,oe.needsUpdate=!0,Y.renderBufferDirect(de,J,le,oe,A,Oe),oe.side=ci):Y.renderBufferDirect(de,J,le,oe,A,Oe),A.onAfterRender(Y,J,de,le,oe,Oe)}function Kr(A,J,de){J.isScene!==!0&&(J=Ct);const le=ae.get(A),oe=L.state.lights,Oe=L.state.shadowsArray,je=oe.state.version,Ie=Ce.getParameters(A,oe.state,Oe,J,de,L.state.lightProbeGridArray),tt=Ce.getProgramCacheKey(Ie);let st=le.programs;le.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?J.environment:null,le.fog=J.fog;const vt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;le.envMap=Re.get(A.envMap||le.environment,vt),le.envMapRotation=le.environment!==null&&A.envMap===null?J.environmentRotation:A.envMapRotation,st===void 0&&(A.addEventListener("dispose",di),st=new Map,le.programs=st);let xt=st.get(tt);if(xt!==void 0){if(le.currentProgram===xt&&le.lightsStateVersion===je)return Po(A,Ie),xt}else Ie.uniforms=Ce.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,de,Ie),A.onBeforeCompile(Ie,Y),xt=Ce.acquireProgram(Ie,tt),st.set(tt,xt),le.uniforms=Ie.uniforms;const it=le.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(it.clippingPlanes=he.uniform),Po(A,Ie),le.needsLights=Ra(A),le.lightsStateVersion=je,le.needsLights&&(it.ambientLightColor.value=oe.state.ambient,it.lightProbe.value=oe.state.probe,it.directionalLights.value=oe.state.directional,it.directionalLightShadows.value=oe.state.directionalShadow,it.spotLights.value=oe.state.spot,it.spotLightShadows.value=oe.state.spotShadow,it.rectAreaLights.value=oe.state.rectArea,it.ltc_1.value=oe.state.rectAreaLTC1,it.ltc_2.value=oe.state.rectAreaLTC2,it.pointLights.value=oe.state.point,it.pointLightShadows.value=oe.state.pointShadow,it.hemisphereLights.value=oe.state.hemi,it.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,it.spotLightMatrix.value=oe.state.spotLightMatrix,it.spotLightMap.value=oe.state.spotLightMap,it.pointShadowMatrix.value=oe.state.pointShadowMatrix),le.lightProbeGrid=L.state.lightProbeGridArray.length>0,le.currentProgram=xt,le.uniformsList=null,xt}function Aa(A){if(A.uniformsList===null){const J=A.currentProgram.getUniforms();A.uniformsList=cc.seqWithValue(J.seq,A.uniforms)}return A.uniformsList}function Po(A,J){const de=ae.get(A);de.outputColorSpace=J.outputColorSpace,de.batching=J.batching,de.batchingColor=J.batchingColor,de.instancing=J.instancing,de.instancingColor=J.instancingColor,de.instancingMorph=J.instancingMorph,de.skinning=J.skinning,de.morphTargets=J.morphTargets,de.morphNormals=J.morphNormals,de.morphColors=J.morphColors,de.morphTargetsCount=J.morphTargetsCount,de.numClippingPlanes=J.numClippingPlanes,de.numIntersection=J.numClipIntersection,de.vertexAlphas=J.vertexAlphas,de.vertexTangents=J.vertexTangents,de.toneMapping=J.toneMapping}function Rc(A,J){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(J.matrixWorld);for(let de=0,le=A.length;de<le;de++){const oe=A[de];if(oe.texture!==null&&oe.boundingBox.containsPoint(b))return oe}return null}function Jt(A,J,de,le,oe){J.isScene!==!0&&(J=Ct),me.resetTextureUnits();const Oe=J.fog,je=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?J.environment:null,Ie=V===null?Y.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Rt.workingColorSpace,tt=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,st=Re.get(le.envMap||je,tt),vt=le.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,xt=!!de.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),it=!!de.morphAttributes.position,Lt=!!de.morphAttributes.normal,Wt=!!de.morphAttributes.color;let Zt=$i;le.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Zt=Y.toneMapping);const zt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,on=zt!==void 0?zt.length:0,Xe=ae.get(le),Sn=L.state.lights;if(mt===!0&&(dt===!0||A!==ne)){const Bt=A===ne&&le.id===q;he.setState(le,A,Bt)}let Mt=!1;le.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Sn.state.version||Xe.outputColorSpace!==Ie||oe.isBatchedMesh&&Xe.batching===!1||!oe.isBatchedMesh&&Xe.batching===!0||oe.isBatchedMesh&&Xe.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Xe.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Xe.instancing===!1||!oe.isInstancedMesh&&Xe.instancing===!0||oe.isSkinnedMesh&&Xe.skinning===!1||!oe.isSkinnedMesh&&Xe.skinning===!0||oe.isInstancedMesh&&Xe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Xe.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Xe.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Xe.instancingMorph===!1&&oe.morphTexture!==null||Xe.envMap!==st||le.fog===!0&&Xe.fog!==Oe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==he.numPlanes||Xe.numIntersection!==he.numIntersection)||Xe.vertexAlphas!==vt||Xe.vertexTangents!==xt||Xe.morphTargets!==it||Xe.morphNormals!==Lt||Xe.morphColors!==Wt||Xe.toneMapping!==Zt||Xe.morphTargetsCount!==on||!!Xe.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Xe.__version=le.version);let Xn=Xe.currentProgram;Mt===!0&&(Xn=Kr(le,J,oe),j&&le.isNodeMaterial&&j.onUpdateProgram(le,Xn,Xe));let Yn=!1,Et=!1,Zi=!1;const Ft=Xn.getUniforms(),qt=Xe.uniforms;if(S.useProgram(Xn.program)&&(Yn=!0,Et=!0,Zi=!0),le.id!==q&&(q=le.id,Et=!0),Xe.needsLights){const Bt=Rc(L.state.lightProbeGridArray,oe);Xe.lightProbeGrid!==Bt&&(Xe.lightProbeGrid=Bt,Et=!0)}if(Yn||ne!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(H,"projectionMatrix",A.projectionMatrix),Ft.setValue(H,"viewMatrix",A.matrixWorldInverse);const Ti=Ft.map.cameraPosition;Ti!==void 0&&Ti.setValue(H,Vt.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&Ft.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ft.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,Et=!0,Zi=!0)}if(Xe.needsLights&&(Sn.state.directionalShadowMap.length>0&&Ft.setValue(H,"directionalShadowMap",Sn.state.directionalShadowMap,me),Sn.state.spotShadowMap.length>0&&Ft.setValue(H,"spotShadowMap",Sn.state.spotShadowMap,me),Sn.state.pointShadowMap.length>0&&Ft.setValue(H,"pointShadowMap",Sn.state.pointShadowMap,me)),oe.isSkinnedMesh){Ft.setOptional(H,oe,"bindMatrix"),Ft.setOptional(H,oe,"bindMatrixInverse");const Bt=oe.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ft.setValue(H,"boneTexture",Bt.boneTexture,me))}oe.isBatchedMesh&&(Ft.setOptional(H,oe,"batchingTexture"),Ft.setValue(H,"batchingTexture",oe._matricesTexture,me),Ft.setOptional(H,oe,"batchingIdTexture"),Ft.setValue(H,"batchingIdTexture",oe._indirectTexture,me),Ft.setOptional(H,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Ft.setValue(H,"batchingColorTexture",oe._colorsTexture,me));const wi=de.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&z.update(oe,de,Xn),(Et||Xe.receiveShadow!==oe.receiveShadow)&&(Xe.receiveShadow=oe.receiveShadow,Ft.setValue(H,"receiveShadow",oe.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&J.environment!==null&&(qt.envMapIntensity.value=J.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=zE()),Et){if(Ft.setValue(H,"toneMappingExposure",Y.toneMappingExposure),Xe.needsLights&&Cc(qt,Zi),Oe&&le.fog===!0&&qe.refreshFogUniforms(qt,Oe),qe.refreshMaterialUniforms(qt,le,fe,ve,L.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.lightProbeGrid){const Bt=Xe.lightProbeGrid;qt.probesSH.value=Bt.texture,qt.probesMin.value.copy(Bt.boundingBox.min),qt.probesMax.value.copy(Bt.boundingBox.max),qt.probesResolution.value.copy(Bt.resolution)}cc.upload(H,Aa(Xe),qt,me)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(cc.upload(H,Aa(Xe),qt,me),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ft.setValue(H,"center",oe.center),Ft.setValue(H,"modelViewMatrix",oe.modelViewMatrix),Ft.setValue(H,"normalMatrix",oe.normalMatrix),Ft.setValue(H,"modelMatrix",oe.matrixWorld),le.uniformsGroups!==void 0){const Bt=le.uniformsGroups;for(let Ti=0,Fi=Bt.length;Ti<Fi;Ti++){const Zr=Bt[Ti];ye.update(Zr,Xn),ye.bind(Zr,Xn)}}return Xn}function Cc(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function Ra(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,J,de){const le=ae.get(A);le.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=J,ae.get(A.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:de,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,J){const de=ae.get(A);de.__webglFramebuffer=J,de.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(A,J=0,de=0){V=A,B=J,G=de;let le=null,oe=!1,Oe=!1;if(A){const Ie=ae.get(A);if(Ie.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(H.FRAMEBUFFER,Ie.__webglFramebuffer),F.copy(A.viewport),te.copy(A.scissor),Pe=A.scissorTest,S.viewport(F),S.scissor(te),S.setScissorTest(Pe),q=-1;return}else if(Ie.__webglFramebuffer===void 0)me.setupRenderTarget(A);else if(Ie.__hasExternalTextures)me.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const vt=A.depthTexture;if(Ie.__boundDepthTexture!==vt){if(vt!==null&&ae.has(vt)&&(A.width!==vt.image.width||A.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Oe=!0);const st=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[J])?le=st[J][de]:le=st[J],oe=!0):A.samples>0&&me.useMultisampledRTT(A)===!1?le=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?le=st[de]:le=st,F.copy(A.viewport),te.copy(A.scissor),Pe=A.scissorTest}else F.copy(ke).multiplyScalar(fe).floor(),te.copy(ct).multiplyScalar(fe).floor(),Pe=Qe;if(de!==0&&(le=ce),S.bindFramebuffer(H.FRAMEBUFFER,le)&&S.drawBuffers(A,le),S.viewport(F),S.scissor(te),S.setScissorTest(Pe),oe){const Ie=ae.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ie.__webglTexture,de)}else if(Oe){const Ie=J;for(let tt=0;tt<A.textures.length;tt++){const st=ae.get(A.textures[tt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+tt,st.__webglTexture,de,Ie)}}else if(A!==null&&de!==0){const Ie=ae.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ie.__webglTexture,de)}q=-1},this.readRenderTargetPixels=function(A,J,de,le,oe,Oe,je,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0&&(tt=tt[je]),tt){S.bindFramebuffer(H.FRAMEBUFFER,tt);try{const st=A.textures[Ie],vt=st.format,xt=st.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ie),!N.textureFormatReadable(vt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(xt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-le&&de>=0&&de<=A.height-oe&&H.readPixels(J,de,le,oe,Ne.convert(vt),Ne.convert(xt),Oe)}finally{const st=V!==null?ae.get(V).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(A,J,de,le,oe,Oe,je,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0&&(tt=tt[je]),tt)if(J>=0&&J<=A.width-le&&de>=0&&de<=A.height-oe){S.bindFramebuffer(H.FRAMEBUFFER,tt);const st=A.textures[Ie],vt=st.format,xt=st.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ie),!N.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,it),H.bufferData(H.PIXEL_PACK_BUFFER,Oe.byteLength,H.STREAM_READ),H.readPixels(J,de,le,oe,Ne.convert(vt),Ne.convert(xt),0);const Lt=V!==null?ae.get(V).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,Lt);const Wt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await n_(H,Wt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,it),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Oe),H.deleteBuffer(it),H.deleteSync(Wt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,J=null,de=0){const le=Math.pow(2,-de),oe=Math.floor(A.image.width*le),Oe=Math.floor(A.image.height*le),je=J!==null?J.x:0,Ie=J!==null?J.y:0;me.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,de,0,0,je,Ie,oe,Oe),S.unbindTexture()},this.copyTextureToTexture=function(A,J,de=null,le=null,oe=0,Oe=0){let je,Ie,tt,st,vt,xt,it,Lt,Wt;const Zt=A.isCompressedTexture?A.mipmaps[Oe]:A.image;if(de!==null)je=de.max.x-de.min.x,Ie=de.max.y-de.min.y,tt=de.isBox3?de.max.z-de.min.z:1,st=de.min.x,vt=de.min.y,xt=de.isBox3?de.min.z:0;else{const qt=Math.pow(2,-oe);je=Math.floor(Zt.width*qt),Ie=Math.floor(Zt.height*qt),A.isDataArrayTexture?tt=Zt.depth:A.isData3DTexture?tt=Math.floor(Zt.depth*qt):tt=1,st=0,vt=0,xt=0}le!==null?(it=le.x,Lt=le.y,Wt=le.z):(it=0,Lt=0,Wt=0);const zt=Ne.convert(J.format),on=Ne.convert(J.type);let Xe;J.isData3DTexture?(me.setTexture3D(J,0),Xe=H.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(me.setTexture2DArray(J,0),Xe=H.TEXTURE_2D_ARRAY):(me.setTexture2D(J,0),Xe=H.TEXTURE_2D),S.activeTexture(H.TEXTURE0),S.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,J.flipY),S.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),S.pixelStorei(H.UNPACK_ALIGNMENT,J.unpackAlignment);const Sn=S.getParameter(H.UNPACK_ROW_LENGTH),Mt=S.getParameter(H.UNPACK_IMAGE_HEIGHT),Xn=S.getParameter(H.UNPACK_SKIP_PIXELS),Yn=S.getParameter(H.UNPACK_SKIP_ROWS),Et=S.getParameter(H.UNPACK_SKIP_IMAGES);S.pixelStorei(H.UNPACK_ROW_LENGTH,Zt.width),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Zt.height),S.pixelStorei(H.UNPACK_SKIP_PIXELS,st),S.pixelStorei(H.UNPACK_SKIP_ROWS,vt),S.pixelStorei(H.UNPACK_SKIP_IMAGES,xt);const Zi=A.isDataArrayTexture||A.isData3DTexture,Ft=J.isDataArrayTexture||J.isData3DTexture;if(A.isDepthTexture){const qt=ae.get(A),wi=ae.get(J),Bt=ae.get(qt.__renderTarget),Ti=ae.get(wi.__renderTarget);S.bindFramebuffer(H.READ_FRAMEBUFFER,Bt.__webglFramebuffer),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Fi=0;Fi<tt;Fi++)Zi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,oe,xt+Fi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ae.get(J).__webglTexture,Oe,Wt+Fi)),H.blitFramebuffer(st,vt,je,Ie,it,Lt,je,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(oe!==0||A.isRenderTargetTexture||ae.has(A)){const qt=ae.get(A),wi=ae.get(J);S.bindFramebuffer(H.READ_FRAMEBUFFER,re),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,$);for(let Bt=0;Bt<tt;Bt++)Zi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qt.__webglTexture,oe,xt+Bt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qt.__webglTexture,oe),Ft?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wi.__webglTexture,Oe,Wt+Bt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wi.__webglTexture,Oe),oe!==0?H.blitFramebuffer(st,vt,je,Ie,it,Lt,je,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):Ft?H.copyTexSubImage3D(Xe,Oe,it,Lt,Wt+Bt,st,vt,je,Ie):H.copyTexSubImage2D(Xe,Oe,it,Lt,st,vt,je,Ie);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Xe,Oe,it,Lt,Wt,je,Ie,tt,zt,on,Zt.data):J.isCompressedArrayTexture?H.compressedTexSubImage3D(Xe,Oe,it,Lt,Wt,je,Ie,tt,zt,Zt.data):H.texSubImage3D(Xe,Oe,it,Lt,Wt,je,Ie,tt,zt,on,Zt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Oe,it,Lt,je,Ie,zt,on,Zt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Oe,it,Lt,Zt.width,Zt.height,zt,Zt.data):H.texSubImage2D(H.TEXTURE_2D,Oe,it,Lt,je,Ie,zt,on,Zt);S.pixelStorei(H.UNPACK_ROW_LENGTH,Sn),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt),S.pixelStorei(H.UNPACK_SKIP_PIXELS,Xn),S.pixelStorei(H.UNPACK_SKIP_ROWS,Yn),S.pixelStorei(H.UNPACK_SKIP_IMAGES,Et),Oe===0&&J.generateMipmaps&&H.generateMipmap(Xe),S.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&me.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?me.setTextureCube(A,0):A.isData3DTexture?me.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?me.setTexture2DArray(A,0):me.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){B=0,G=0,V=null,S.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const uc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class wa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const VE=new wc(-1,1,1,-1,0,1);class GE extends Un{constructor(){super(),this.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new un([0,2,0,0,2,0],2))}}const HE=new GE;class ld{constructor(e){this._mesh=new ut(HE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,VE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class WE extends wa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Dn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=To.clone(e.uniforms),this.material=new Dn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ld(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class H0 extends wa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const a=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,d;this.inverse?(u=0,d=1):(u=1,d=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,u,4294967295),l.buffers.stencil.setClear(d),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class XE extends wa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class YE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new at);this._width=r.width,this._height=r.height,t=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new WE(uc),this.copyPass.material.blending=ji,this.timer=new G_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let a=0,l=this.passes.length;a<l;a++){const u=this.passes[a];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),u.needsSwap){if(r){const d=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}H0!==void 0&&(u instanceof H0?r=!0:u instanceof XE&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qE extends wa{constructor(e,t,r=null,a=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new yt}render(e,t,r){const a=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=a}}const jE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Sa extends wa{constructor(e,t=1,r,a){super(),this.strength=t,this.radius=r,this.threshold=a,this.resolution=e!==void 0?new at(e.x,e.y):new at(256,256),this.clearColor=new yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new ei(l,u,{type:hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let x=0;x<this.nMips;x++){const _=new ei(l,u,{type:hi});_.texture.name="UnrealBloomPass.h"+x,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const g=new ei(l,u,{type:hi});g.texture.name="UnrealBloomPass.v"+x,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),l=Math.round(l/2),u=Math.round(u/2)}const d=jE;this.highPassUniforms=To.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const f=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let x=0;x<this.nMips;x++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(f[x])),this.separableBlurMaterials[x].uniforms.invSize.value=new at(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=To.clone(uc.uniforms),this.blendMaterial=new Dn({uniforms:this.copyUniforms,vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,premultipliedAlpha:!0,blending:fr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new yt,this._oldClearAlpha=1,this._basic=new Hn,this._fsQuad=new ld(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(r,a);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,a),this.renderTargetsVertical[l].setSize(r,a),this.separableBlurMaterials[l].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(e,t,r,a,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this._fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[f].uniforms.direction.value=Sa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=Sa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[f];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],r=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(r*r))/r);return new Dn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Dn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Sa.BlurDirectionX=new at(1,0);Sa.BlurDirectionY=new at(0,1);const rc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $E extends wa{constructor(){super(),this.isOutputPass=!0,this.uniforms=To.clone(rc.uniforms),this.material=new xg({name:rc.name,uniforms:this.uniforms,vertexShader:rc.vertexShader,fragmentShader:rc.fragmentShader}),this._fsQuad=new ld(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Rt.getTransfer(this._outputColorSpace)===Ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const KE=.45,ZE=.6,QE=typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0);function Bn(s,e,t=1,r=1){const a=document.createElement("canvas");a.width=a.height=s;const l=a.getContext("2d");e(l,s);const u=new qi(a);return u.wrapS=u.wrapT=Ms,u.repeat.set(t,r),u.colorSpace=dn,u.anisotropy=8,u}function mr(s,e,t,r,a){for(let l=0;l<t;l++){s.fillStyle=r[Math.random()*r.length|0],s.globalAlpha=a*(.4+Math.random()*.6);const u=1+Math.random()*2.4;s.fillRect(Math.random()*e,Math.random()*e,u,u)}s.globalAlpha=1}function JE(s,e){s.fillStyle="#c2a878",s.fillRect(0,0,e,e),s.globalAlpha=.16;for(let t=0;t<22;t++)s.fillStyle=t%2?"#8f7448":"#dcc596",s.beginPath(),s.ellipse(Math.random()*e,Math.random()*e,16+Math.random()*46,10+Math.random()*30,Math.random()*3,0,7),s.fill();s.globalAlpha=1,mr(s,e,3400,["#b09463","#d4bc8c","#a8895a","#cbb283","#9b7f50"],.5),s.globalAlpha=.22,s.strokeStyle="#7d6238",s.lineWidth=1.2;for(let t=0;t<10;t++){let r=Math.random()*e,a=Math.random()*e;s.beginPath(),s.moveTo(r,a);for(let l=0;l<6;l++)r+=(Math.random()-.5)*46,a+=(Math.random()-.5)*46,s.lineTo(r,a);s.stroke()}s.globalAlpha=.5;for(let t=0;t<46;t++)s.fillStyle=["#8d7a52","#a3906a","#6f5c3a"][Math.random()*3|0],s.beginPath(),s.ellipse(Math.random()*e,Math.random()*e,1.6+Math.random()*2.6,1.2+Math.random()*2,Math.random()*3,0,7),s.fill();s.globalAlpha=.5,s.strokeStyle="#7a7440",s.lineWidth=1;for(let t=0;t<40;t++){const r=Math.random()*e,a=Math.random()*e;for(let l=0;l<3;l++)s.beginPath(),s.moveTo(r+l*2-2,a),s.lineTo(r+l*2-2+(Math.random()-.5)*5,a-4-Math.random()*4),s.stroke()}s.globalAlpha=.1,s.strokeStyle="#6e5a38",s.lineWidth=9;for(const t of[0,26])s.beginPath(),s.moveTo(t,0),s.bezierCurveTo(t+40,e*.3,t-30,e*.7,t+20,e),s.stroke();s.globalAlpha=1}function W0(s,e,t){s.fillStyle="#c9b183",s.fillRect(0,0,e,e);const r=32,a=64;for(let l=0;l<e/r;l++){const u=l%2?a/2:0;for(let d=-1;d<e/a+1;d++){const f=d*a+u,p=l*r,x=.9+Math.random()*.2;s.fillStyle=`rgb(${201*x|0},${177*x|0},${131*x|0})`,s.fillRect(f+2,p+2,a-4,r-4),mr(s,e,24,["#b39a6c","#d8c39a","#a58c5e"],.32),s.globalAlpha=.25,s.fillStyle="#8f7a52",s.fillRect(f+2,p+r-5,a-4,3),s.globalAlpha=1}s.fillStyle="#a08a5f",s.fillRect(0,l*r,e,2)}s.globalAlpha=.3;for(let l=0;l<(t?16:8);l++){s.fillStyle="#6e5b3d",s.beginPath();const u=Math.random()*e,d=Math.random()*e;s.moveTo(u,d);for(let f=0;f<5;f++)s.lineTo(u+(Math.random()-.5)*26,d+(Math.random()-.5)*22);s.closePath(),s.fill()}s.globalAlpha=.14;for(let l=0;l<10;l++){const u=Math.random()*e;s.fillStyle="#6e5b3d",s.fillRect(u,0,4+Math.random()*9,30+Math.random()*90)}s.globalAlpha=1}function ew(s,e){s.fillStyle="#c4ad82",s.fillRect(0,0,e,e),mr(s,e,1900,["#b09a70","#d3bd92","#a28b60"],.4),s.fillStyle="#a68d60",s.fillRect(0,e-46,e,46),s.fillStyle="#8f7850",s.fillRect(0,e-46,e,4),s.globalAlpha=.28,s.strokeStyle="#77623e",s.lineWidth=1.4;for(let t=0;t<7;t++){let r=Math.random()*e,a=Math.random()*e*.7;s.beginPath(),s.moveTo(r,a);for(let l=0;l<7;l++)r+=(Math.random()-.5)*30,a+=Math.random()*22,s.lineTo(r,a);s.stroke()}s.globalAlpha=.5;for(let t=0;t<14;t++){const r=Math.random()*e,a=Math.random()*e;s.fillStyle="#5f4c30",s.beginPath(),s.arc(r,a,2,0,7),s.fill(),s.fillStyle="#3f3120",s.beginPath(),s.arc(r,a,1,0,7),s.fill()}s.globalAlpha=1}function tw(s,e){s.fillStyle="#8a5c2e",s.fillRect(0,0,e,e);for(let t=0;t<e;t+=42){const r=.92+Math.random()*.16;s.fillStyle=`rgb(${138*r|0},${92*r|0},${46*r|0})`,s.fillRect(0,t,e,40),s.globalAlpha=.3,s.strokeStyle="#5f3d1c";for(let a=0;a<7;a++){const l=t+4+Math.random()*34;s.beginPath(),s.moveTo(0,l),s.bezierCurveTo(e*.3,l+3,e*.6,l-3,e,l+1),s.stroke()}s.globalAlpha=1,s.fillStyle="#4e3115",s.fillRect(0,t+39,e,3)}mr(s,e,900,["#7a4e24","#9c6c3a","#6b441f"],.4),s.strokeStyle="#3f2810",s.lineWidth=14,s.strokeRect(4,4,e-8,e-8),s.lineWidth=10,s.beginPath(),s.moveTo(0,0),s.lineTo(e,e),s.moveTo(e,0),s.lineTo(0,e),s.stroke(),s.save(),s.translate(e/2,e/2),s.rotate(-.06),s.font="900 46px Rubik, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillStyle="rgba(232,222,192,0.85)",s.fillText("AMMO",0,-10),s.font="700 22px Rubik, sans-serif",s.fillStyle="rgba(122,40,28,0.85)",s.fillText("7.62×39",0,30),s.restore(),s.fillStyle="#2c1c0a";for(const[t,r]of[[14,14],[e-14,14],[14,e-14],[e-14,e-14],[e/2,e/2]])s.beginPath(),s.arc(t,r,4,0,7),s.fill()}function X0(s,e,t,r){s.fillStyle=t,s.fillRect(0,0,e,e);for(let a=0;a<e;a+=16)s.fillStyle="rgba(0,0,0,0.32)",s.fillRect(a,0,6,e),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(a+8,0,3,e);mr(s,e,1400,["rgba(0,0,0,.4)","rgba(255,255,255,.12)"],.35),s.globalAlpha=.24;for(let a=0;a<14;a++){const l=Math.random()*e;s.fillStyle="#6e3418",s.fillRect(l,Math.random()*e*.4,3+Math.random()*7,30+Math.random()*90)}s.globalAlpha=1,s.font="900 44px Rubik, sans-serif",s.textAlign="center",s.fillStyle="rgba(240,235,220,0.92)",s.fillText(r,e/2,e/2+12),s.strokeStyle="rgba(240,235,220,0.5)",s.lineWidth=3,s.strokeRect(26,e/2-38,e-52,82),s.strokeStyle="rgba(0,0,0,0.55)",s.lineWidth=12,s.strokeRect(2,2,e-4,e-4)}function nw(s,e){s.fillStyle="#7a3a2a",s.fillRect(0,0,e,e),mr(s,e,700,["rgba(0,0,0,.4)","rgba(255,255,255,.1)"],.4),s.fillStyle="rgba(0,0,0,0.5)",s.fillRect(0,10,e,7),s.fillRect(0,e-17,e,7),s.save(),s.fillStyle="#d8b23a",s.fillRect(0,e/2-16,e,32),s.beginPath(),s.rect(0,e/2-16,e,32),s.clip(),s.fillStyle="#171310";for(let t=-32;t<e+32;t+=32)s.beginPath(),s.moveTo(t,e/2+16),s.lineTo(t+16,e/2-16),s.lineTo(t+32,e/2-16),s.lineTo(t+16,e/2+16),s.fill();s.restore(),s.font="900 20px Rubik, sans-serif",s.textAlign="center",s.fillStyle="rgba(240,230,210,0.85)",s.fillText("FUEL",e/2,e/2-26)}function Y0(s,e,t){s.fillStyle=t,s.fillRect(0,0,e,e);for(let r=0;r<e;r+=36){const a=.9+Math.random()*.18;s.fillStyle=`rgba(0,0,0,${.16-a*.06})`,s.fillRect(0,r,e,34),s.globalAlpha=.35,s.strokeStyle="rgba(40,24,8,0.7)";for(let l=0;l<5;l++){const u=r+3+Math.random()*28;s.beginPath(),s.moveTo(0,u),s.bezierCurveTo(e*.3,u+2,e*.7,u-2,e,u+1),s.stroke()}s.globalAlpha=1,s.fillStyle="rgba(30,18,6,0.75)",s.fillRect(0,r+33,e,3),s.fillStyle="#241505",s.beginPath(),s.arc(8,r+17,3,0,7),s.fill(),s.beginPath(),s.arc(e-8,r+17,3,0,7),s.fill()}mr(s,e,500,["rgba(40,24,8,.5)","rgba(255,220,170,.12)"],.4)}function iw(s,e){const t=["#a8432e","#d8c9a4"];for(let r=0;r<e;r+=32)s.fillStyle=t[r/32%2],s.fillRect(r,0,32,e);s.globalAlpha=.16;for(let r=0;r<e;r+=4)s.fillStyle=r%8?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)",s.fillRect(0,r,e,2);s.globalAlpha=.25,mr(s,e,700,["rgba(60,20,10,.6)","rgba(255,240,210,.3)"],.3),s.globalAlpha=1,s.fillStyle="rgba(60,25,12,0.85)",s.fillRect(0,e-10,e,10)}function rw(s,e){s.fillStyle="#1d1e20",s.fillRect(0,0,e,e);for(let t=0;t<e;t+=14)s.fillStyle="rgba(255,255,255,0.05)",s.fillRect(t,0,6,e),s.fillStyle="rgba(0,0,0,0.55)",s.fillRect(t+7,0,5,e);s.fillStyle="rgba(255,255,255,0.14)",s.fillRect(0,e/2-8,e,3),s.fillRect(0,e/2+6,e,2)}function sw(s,e){s.fillStyle="#8a7350",s.fillRect(0,0,e,e);for(let t=0;t<e;t+=22){s.fillStyle=t%44?"#6f5a3c":"#9c855e",s.fillRect(0,t,e,20),s.fillStyle="rgba(40,28,14,0.6)",s.beginPath();for(let r=0;r<=e;r+=12){const a=t+18+Math.sin(r*.5)*3;r===0?s.moveTo(r,a):s.lineTo(r,a)}s.lineTo(e,t+22),s.lineTo(0,t+22),s.fill()}mr(s,e,500,["rgba(50,36,18,.4)","rgba(210,185,140,.2)"],.4)}function aw(s,e){s.clearRect(0,0,e,e);const t=e/2;s.strokeStyle="#3f5a28",s.lineWidth=5,s.beginPath(),s.moveTo(t,8),s.quadraticCurveTo(t,e*.6,t,e-10),s.stroke();for(let r=20;r<e-16;r+=12){const a=r/e,l=Math.sin(a*Math.PI)*(e*.46)+12;for(const u of[-1,1])s.fillStyle=`rgba(${62+(a*40|0)},${104-(a*30|0)},40,0.95)`,s.beginPath(),s.moveTo(t,r),s.quadraticCurveTo(t+u*l*.55,r-8,t+u*l,r+14),s.quadraticCurveTo(t+u*l*.5,r+10,t,r+6),s.closePath(),s.fill()}}function ow(s,e){s.clearRect(0,0,e,e);for(let t=0;t<12;t++){const r=e*.2+Math.random()*e*.6,a=e*.35+Math.random()*e*.35,l=e*(.1+Math.random()*.14),u=s.createRadialGradient(r,a,1,r,a,l);u.addColorStop(0,"rgba(255,252,244,0.85)"),u.addColorStop(1,"rgba(255,252,244,0)"),s.fillStyle=u,s.beginPath(),s.arc(r,a,l,0,7),s.fill()}}function lw(s){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),r=t.createRadialGradient(64,64,4,64,64,64);return r.addColorStop(0,s),r.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=r,t.fillRect(0,0,128,128),new qi(e)}function Pg(s,e,t,r,a,l){const u=KE;let d=s.x+e;for(const p of a)p.top<=s.y+u||d+r>p.minX&&d-r<p.maxX&&s.z+r>p.minZ&&s.z-r<p.maxZ&&(e>0?d=Math.min(d,p.minX-r):e<0&&(d=Math.max(d,p.maxX+r)));s.x=d;let f=s.z+t;for(const p of a)p.top<=s.y+u||s.x+r>p.minX&&s.x-r<p.maxX&&f+r>p.minZ&&f-r<p.maxZ&&(t>0?f=Math.min(f,p.minZ-r):t<0&&(f=Math.max(f,p.maxZ+r)));s.z=f,l&&(s.x=Math.max(l.minX+r,Math.min(l.maxX-r,s.x)),s.z=Math.max(l.minZ+r,Math.min(l.maxZ-r,s.z)))}function q0(s,e,t,r,a){let l=0;for(const u of a)u.top<=t+ZE&&u.top>l&&s+r>u.minX&&s-r<u.maxX&&e+r>u.minZ&&e-r<u.maxZ&&(l=u.top);return l}function cw(s,e=!0){const t=new fi,r=[],a=[],l=1.5,u=Bn(256,JE,10,10),d=new Tt({map:u,roughness:1}),f=Bn(256,(Z,he)=>W0(Z,he,!0),17,2),p=Bn(256,(Z,he)=>W0(Z,he,!1),6,2),x=Bn(256,ew,5,2),_=new Tt({map:f,roughness:.95}),g=new Tt({map:p,roughness:.95}),M=new Tt({map:x,roughness:.92}),E=Bn(256,tw),R=Bn(256,(Z,he)=>X0(Z,he,"#9c4f28","MIRAGE"),2,1),v=Bn(256,(Z,he)=>X0(Z,he,"#57613c","DUST"),2,1),y=Bn(128,nw,2,1),D=new Tt({map:E,roughness:.9}),P=new Tt({map:R,roughness:.7,metalness:.3}),b=new Tt({map:v,roughness:.7,metalness:.3}),C=new Tt({map:y,roughness:.65,metalness:.35}),L=new Tt({color:11772015,roughness:1}),k=Bn(128,(Z,he)=>Y0(Z,he,"#8d6b3e"),2,2),w=new Tt({map:k,roughness:.92}),I=Bn(128,(Z,he)=>Y0(Z,he,"#7c5d34"),3,1),Y=new Tt({map:I,roughness:.95,side:ci}),W=Bn(128,iw,4,1),j=new Tt({map:W,roughness:.85,side:ci}),ce=new Tt({map:Bn(64,rw,3,1),roughness:.9}),re=Bn(64,sw,2,3),$=new Tt({map:re,roughness:.95}),B=Bn(128,aw),G=new Tt({map:B,transparent:!0,alphaTest:.45,side:ci,roughness:.9});new Tt({color:2303531,roughness:.6,metalness:.5});const V=new Tt({color:4869973,roughness:.7,metalness:.4}),q=(Z,he,Se,Me,z,Ee,xe,Ne=!0,Ge=0)=>{const ye=new ut(new nn(Z,he,Se),xe);return ye.position.set(Me,z,Ee),ye.rotation.y=Ge,ye.castShadow=!0,ye.receiveShadow=!0,t.add(ye),r.push(ye),Ne&&a.push({minX:Me-Z/2,maxX:Me+Z/2,minZ:Ee-Se/2,maxZ:Ee+Se/2,top:z+he/2}),ye},ne=(Z,he,Se,Me,z,Ee,xe=!0)=>{const Ne=new ut(new ys(Z,Z*1.06,he,16),Ee);return Ne.position.set(Se,Me,z),Ne.castShadow=!0,Ne.receiveShadow=!0,t.add(Ne),r.push(Ne),xe&&a.push({minX:Se-Z,maxX:Se+Z,minZ:z-Z,maxZ:z+Z,top:Me+he/2}),Ne},F=(Z,he,Se,Me,z=0,Ee=1)=>{const xe=new ut(new Wn(he,he),new Hn({map:Z,transparent:!0,opacity:Ee,depthWrite:!1}));xe.rotation.x=-Math.PI/2,xe.rotation.z=z,xe.position.set(Se,.02,Me),xe.renderOrder=1,t.add(xe)},te=new ut(new Wn(64,64),d);te.rotation.x=-Math.PI/2,te.receiveShadow=!0,t.add(te),r.push(te),q(42,5,1,0,2.5,-20.5,_),q(42,5,1,0,2.5,20.5,_),q(1,5,42,-20.5,2.5,0,_),q(1,5,42,20.5,2.5,0,_);const Pe=new Tt({color:6048819,roughness:.9}),Be=new Tt({color:1845043,roughness:.25,metalness:.6}),ze=(Z,he,Se)=>{const Me=new fi,z=new ut(new nn(1.3,1.6,.12),Pe),Ee=new ut(new nn(1,1.3,.14),Be),xe=new ut(new nn(1.5,.1,.3),Pe);xe.position.y=-.85,Me.add(z,Ee,xe),z.castShadow=!0,Me.position.set(Z,2.6,he),Me.rotation.y=Se,t.add(Me)};ze(-8,-19.95,0),ze(5,-19.95,0),ze(19.95,-6,Math.PI/2),ze(-19.95,9,Math.PI/2);const ie=new ut(new nn(.9,.62,.42),new Tt({color:12104354,roughness:.8}));ie.position.set(-2.5,3.1,-19.75),ie.castShadow=!0,t.add(ie),r.push(ie),q(10,3,.9,-6,1.5,-2,M),q(.9,3,9,7,1.5,4,M),q(7,3,.9,12,1.5,-8,g),q(.9,3,7,-13,1.5,7,g);const ve=(()=>{const Z=document.createElement("canvas");Z.width=128,Z.height=64;const he=Z.getContext("2d");he.clearRect(0,0,128,64),he.fillStyle="rgba(225,80,40,0.8)",he.beginPath(),he.moveTo(8,20),he.lineTo(78,20),he.lineTo(78,8),he.lineTo(120,32),he.lineTo(78,56),he.lineTo(78,44),he.lineTo(8,44),he.closePath(),he.fill();const Se=new qi(Z);return Se.colorSpace=dn,Se})(),fe=(Z,he,Se,Me)=>{const z=new ut(new Wn(2.2,1.1),new Hn({map:ve,transparent:!0,depthWrite:!1}));z.position.set(Z,he,Se),z.rotation.y=Me,t.add(z)};fe(-6,1.7,-1.53,Math.PI),fe(12,1.7,-7.53,Math.PI),q(6.4,2.9,2.7,-12,1.45,-9,P),q(6.4,2.9,2.7,12,1.45,10,b);const we=(Z,he,Se=1)=>{q(1.4,1.4,1.4,Z,.7,he,D),Se>1&&q(1.4,1.4,1.4,Z,2.1,he,D)};we(-3,13,2),we(4.2,9),we(-14,-4),we(14,-13,2),we(.5,-6),we(9.5,2),we(-8.5,2.5),we(16.5,5),we(-16.5,13),we(6,-15),we(-5,-13),we(10.8,8.6);const Ve=(Z,he)=>ne(.45,1.15,Z,.575,he,C);Ve(-1.6,-11),Ve(-.6,-11.4),Ve(10.5,15),Ve(-10.5,15.5),Ve(2.5,1.5),q(2.6,.85,.8,-7,.42,9,L),q(2.6,.85,.8,9,.42,-2.5,L),q(.8,.85,2.6,-2,.42,5.5,L);const ke=16.3,ct=15.2,Qe=2.3;for(const[Z,he]of[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]])q(.24,Qe,.24,ke+Z,Qe/2,ct+he,V);q(3.6,.3,3.6,ke,Qe-.15,ct,w);for(let Z=0;Z<6;Z++){const he=.38*(6-Z);q(.5,he,1.3,ke-2.05-Z*.5,he/2,ct,w)}q(.06,.95,1.3,ke-1.78,Qe+.47,ct-1.12,V,!1),q(.06,.95,1.3,ke-1.78,Qe+.47,ct+1.12,V,!1),q(3.6,.95,.06,ke,Qe+.47,ct-1.78,V,!1),q(3.6,.95,.06,ke,Qe+.47,ct+1.78,V,!1),q(.14,1.7,.14,ke-1.6,Qe+.85,ct-1.6,V,!1),q(.14,1.7,.14,ke+1.6,Qe+.85,ct-1.6,V,!1),q(.14,1.7,.14,ke-1.6,Qe+.85,ct+1.6,V,!1),q(.14,1.7,.14,ke+1.6,Qe+.85,ct+1.6,V,!1);const At=q(4.1,.12,4.1,ke,Qe+1.78,ct,j,!1);At.rotation.z=.06,q(1.5,.55,.55,ke-1.45,Qe+.27,ct-.6,L),q(1.5,.55,.55,ke-1.45,Qe+.27,ct+.6,L);const mt=-13.2,dt=13.4;q(2.6,.95,.9,mt,.475,dt,w),q(.09,2.3,.09,mt-1.5,1.15,dt-.55,V),q(.09,2.3,.09,mt+1.5,1.15,dt-.55,V);const kt=q(3.6,.07,2.1,mt,2.25,dt+.25,j,!1);kt.rotation.x=.22,q(.5,.5,.5,mt-.7,1.2,dt,D),q(.42,.42,.42,mt+.55,1.16,dt+.1,D);const Vt=(Z,he)=>{ne(.07,3.4,Z,1.7,he,V),q(.7,.07,.07,Z+.32,3.36,he,V,!1);const Se=new ut(new nn(.34,.12,.2),new Tt({color:2764081,roughness:.6}));Se.position.set(Z+.66,3.3,he),Se.castShadow=!0,t.add(Se),r.push(Se);const Me=new ut(new wo(.07,12),new Hn({color:16773832}));if(Me.rotation.x=Math.PI/2,Me.position.set(Z+.66,3.235,he),t.add(Me),!QE){const z=new Fh(16768926,7,9,2);z.position.set(Z+.66,3.1,he),t.add(z)}};Vt(-4.5,8.5),Vt(8.5,-4.5);for(let Z=0;Z<3;Z++)q(3,1.5,.09,-6+Z*3.05,.75,-18.6,Y),q(.12,1.7,.12,-7.5+Z*3.05,.85,-18.6,V);q(.12,1.7,.12,1.6,.85,-18.6,V),q(1.7,.16,1.25,2,.08,12.5,w),q(1.7,.16,1.25,2,.24,12.5,w),q(.95,.95,.95,2.05,.8,12.5,D);const Je=(Z,he,Se)=>{const Me=new ut(new ys(.52,.52,.34,18),ce);Me.position.set(Z,he,Se),Me.castShadow=!0,Me.receiveShadow=!0,t.add(Me),r.push(Me)};Je(-8.2,.17,-8.2),Je(-8.2,.51,-8.2),Je(-8.2,.85,-8.2),a.push({minX:-8.7,maxX:-7.7,minZ:-8.7,maxZ:-7.7,top:1.02}),Je(-9.3,.17,-7.6);const Ct=(Z,he,Se)=>{const Me=new ut(new ys(.14,.22,Se,10),$);Me.position.set(Z,Se/2,he),Me.rotation.z=.06,Me.castShadow=!0,t.add(Me),r.push(Me),a.push({minX:Z-.24,maxX:Z+.24,minZ:he-.24,maxZ:he+.24,top:.3});for(let z=0;z<7;z++){const Ee=new ut(new Wn(2.7,.85),G);Ee.position.set(Z,Se-.05,he),Ee.rotation.y=z/7*Math.PI*2,Ee.rotateX(-.55-Math.random()*.25),Ee.translateZ(1.2),Ee.castShadow=!0,t.add(Ee),r.push(Ee)}};Ct(-18.2,18.2,4.6),Ct(18.4,-17.8,5.2),Ct(-17.8,-16.5,4.2);const bt=(Z,he)=>{const Se=document.createElement("canvas");Se.width=Se.height=256;const Me=Se.getContext("2d");Me.clearRect(0,0,256,256),Me.strokeStyle=he,Me.globalAlpha=.75,Me.lineWidth=14,Me.beginPath(),Me.arc(128,128,96,0,7),Me.stroke(),Me.font="900 150px Rubik, sans-serif",Me.textAlign="center",Me.textBaseline="middle",Me.fillStyle=he,Me.fillText(Z,128,138);const z=new qi(Se);return z.colorSpace=dn,z};F(bt("A","rgba(220,190,120,0.9)"),3.4,13.5,-13.5,.3,.55),F(bt("B","rgba(220,190,120,0.9)"),3.4,-13.5,13.8,-.2,.55);const De=(()=>{const Z=document.createElement("canvas");Z.width=64,Z.height=256;const he=Z.getContext("2d");he.clearRect(0,0,64,256),he.fillStyle="rgba(60,48,30,0.5)";for(const Me of[10,40]){he.fillRect(Me,0,9,256),he.fillStyle="rgba(130,110,75,0.5)";for(let z=0;z<256;z+=14)he.fillRect(Me+2,z,5,5);he.fillStyle="rgba(60,48,30,0.5)"}const Se=new qi(Z);return Se.wrapS=Se.wrapT=Ms,Se.colorSpace=dn,Se})(),H=(Z,he,Se,Me,z)=>{const Ee=new ut(new Wn(Se,Me),new Hn({map:De,transparent:!0,opacity:.4,depthWrite:!1}));Ee.rotation.x=-Math.PI/2,Ee.rotation.z=z,Ee.position.set(Z,.015,he),Ee.renderOrder=1,t.add(Ee)};H(-1.2,-8,1.1,16,.06),H(4.5,6,1.1,10,-.4);const We=(()=>{const Z=document.createElement("canvas");Z.width=Z.height=128;const he=Z.getContext("2d");he.clearRect(0,0,128,128);const Se=he.createRadialGradient(64,64,6,64,64,62);return Se.addColorStop(0,"rgba(80,62,38,0.5)"),Se.addColorStop(1,"rgba(80,62,38,0)"),he.fillStyle=Se,he.fillRect(0,0,128,128),new qi(Z)})();for(const[Z,he,Se]of[[-12,-9,9],[12,10,9],[.5,-6,3.5],[-13.2,13.4,5],[16.3,15.2,6.5]]){const Me=new ut(new Wn(Se,Se),new Hn({map:We,transparent:!0,depthWrite:!1}));Me.rotation.x=-Math.PI/2,Me.position.set(Z,.012,he),Me.renderOrder=1,t.add(Me)}const gt=new nn(.09,.05,.09),N=new Tt({color:10193507,roughness:1});for(let Z=0;Z<(e?170:70);Z++){const he=new ut(gt,N);he.position.set((Math.random()-.5)*56,.02,(Math.random()-.5)*56),he.rotation.y=Math.random()*Math.PI;const Se=.5+Math.random()*1.6;he.scale.set(Se,.4+Math.random(),Se),he.receiveShadow=!0,t.add(he)}const S=new ut(new wo(6,24),new Hn({color:16774096,fog:!1}));S.position.set(-38,34,-52),S.lookAt(0,0,0),t.add(S);const ee=new xc(new Eo({map:lw("rgba(255,235,190,0.95)"),color:16770744,transparent:!0,opacity:.85,blending:fr,depthWrite:!1,fog:!1}));ee.position.set(-38,34,-51),ee.scale.set(32,32,1),t.add(ee);const ae=new fi;ae.name="clouds";const me=Bn(256,ow),Re=e?8:4;for(let Z=0;Z<Re;Z++){const he=new xc(new Eo({map:me,transparent:!0,opacity:.75,depthWrite:!1,fog:!1})),Se=Z/Re*Math.PI*2,Me=42+Math.random()*26;he.position.set(Math.cos(Se)*Me,21+Math.random()*10,Math.sin(Se)*Me);const z=16+Math.random()*14;he.scale.set(z,z*.55,1),ae.add(he)}t.add(ae);const Ue=e?240:110,ge=new Un,_e=new Float32Array(Ue*3);for(let Z=0;Z<Ue;Z++)_e[Z*3]=(Math.random()-.5)*56,_e[Z*3+1]=Math.random()*6,_e[Z*3+2]=(Math.random()-.5)*56;ge.setAttribute("position",new Ei(_e,3));const Ce=new C_(ge,new pg({color:16773320,size:.05,transparent:!0,opacity:.5}));Ce.name="dust",t.add(Ce),t.scale.setScalar(l),s.add(t);const qe=[u,f,p,x,E,R,v,y,k];for(const Z of qe)Z.repeat.multiplyScalar(l),e||(Z.anisotropy=2);const Fe={minX:-19.4*l,maxX:19.4*l,minZ:-19.4*l,maxZ:19.4*l,top:5*l};for(const Z of a)Z.minX*=l,Z.maxX*=l,Z.minZ*=l,Z.maxZ*=l,Z.top*=l;return{solids:r,colliders:a,bounds:Fe,botSpawns:[{x:-15,z:-15},{x:-6,z:-17},{x:6,z:-17},{x:15,z:-15},{x:-17,z:-3},{x:17,z:-3},{x:-10,z:-9},{x:10,z:-9},{x:-17,z:12},{x:17,z:-13}].map(Z=>({x:Z.x*l,z:Z.z*l})),playerSpawn:{x:0,z:16*l}}}function j0(s,e){const t=document.createElement("canvas");t.width=t.height=128;const r=t.getContext("2d");r.fillStyle=s,r.fillRect(0,0,128,128);for(let l=0;l<46;l++)r.fillStyle=e[Math.random()*e.length|0],r.globalAlpha=.5+Math.random()*.4,r.beginPath(),r.ellipse(Math.random()*128,Math.random()*128,6+Math.random()*16,4+Math.random()*10,Math.random()*3,0,7),r.fill();r.globalAlpha=.16;for(let l=0;l<300;l++)r.fillStyle=Math.random()>.5?"#000000":"#ffffff",r.fillRect(Math.random()*128,Math.random()*128,1.4,1.4);r.globalAlpha=1;const a=new qi(t);return a.wrapS=a.wrapT=Ms,a.colorSpace=dn,a}class uw{constructor(e,t,r,a,l){this.group=new fi,this.hitboxes=[],this.hp=100,this.alive=!0,this.name="БОТ",this.muzzle=new Yt,this.legL=new Yt,this.legR=new Yt,this.armL=new Yt,this.armR=new Yt,this.headG=new Yt,this.mats=[],this.strafeDir=Math.random()<.5?1:-1,this.strafeT=1,this.burstLeft=0,this.nextShot=0,this.nextBurst=.8+Math.random()*1.2,this.blockedT=0,this.lastX=0,this.lastZ=0,this.flashT=0,this.deathT=0,this.phase=Math.random()*10,this.prefRange=9+Math.random()*9,this.ray=new Sg,this.tmpA=new Q,this.tmpB=new Q,this.idleT=0,this.name=e,this.speed=a,this.hooks=l,this.group.position.set(t,0,r),this.lastX=t,this.lastZ=r;const u=j0("#6d6b4f",["#4c4a35","#7d7a58","#3a3a2a","#8a8462"]),d=j0("#4a4a3a",["#33332a","#5c5a44","#282820"]),f=(ve,fe)=>{const we=new Tt({color:fe?16777215:ve,map:fe,roughness:.92});return we.emissive=new yt(16722432),we.emissiveIntensity=0,this.mats.push(we),we},p=f(16777215,u),x=f(16777215,d),_=f(13209183),g=f(3027494),M=f(2237724),E=f(2301979),R=f(16777215,d),v=f(2764068),y=new Tt({color:2829875,roughness:.55,metalness:.55}),D=new Tt({color:8145444,roughness:.75}),P=(ve,fe,we,Ve)=>new ut(new nn(ve,fe,we),Ve),b=(ve,fe,we,Ve,ke=12)=>new ut(new ys(ve,fe,we,ke),Ve),C=(ve,fe,we,Ve=!0)=>(ve.castShadow=Ve,ve.userData={bot:this,part:fe},we.add(ve),this.hitboxes.push(ve),ve),L=(ve,fe)=>{const we=P(.17,.46,.2,x);we.position.y=-.23,C(we,"legs",fe);const Ve=P(.15,.42,.18,x);Ve.position.y=-.66,C(Ve,"legs",fe);const ke=P(.17,.13,.12,M);ke.position.set(0,-.46,.08),C(ke,"legs",fe,!1);const ct=P(.17,.14,.3,E);ct.position.set(0,-.9,.045),C(ct,"legs",fe),fe.position.set(ve,.96,0),this.group.add(fe)};L(-.13,this.legL),L(.13,this.legR);const k=P(.52,.58,.28,p);k.position.y=1.26,C(k,"body",this.group);const w=P(.46,.36,.34,g);w.position.y=1.3,C(w,"body",this.group,!1);for(let ve=-1;ve<=1;ve++){const fe=P(.1,.12,.06,M);fe.position.set(ve*.13,1.24,.2),C(fe,"body",this.group,!1)}const I=P(.08,.4,.36,M);I.position.set(-.14,1.34,0),C(I,"body",this.group,!1);const Y=P(.08,.4,.36,M);Y.position.set(.14,1.34,0),C(Y,"body",this.group,!1);const W=P(.4,.42,.16,g);W.position.set(0,1.28,-.24),C(W,"body",this.group);const j=b(.07,.07,.38,M);j.rotation.z=Math.PI/2,j.position.set(0,1.52,-.26),C(j,"body",this.group,!1),this.headG.position.y=1.62,this.group.add(this.headG);const ce=b(.06,.07,.08,_);ce.position.y=-.06,C(ce,"head",this.headG,!1);const re=P(.23,.26,.24,_);re.position.y=.06,C(re,"head",this.headG);const $=P(.2,.09,.05,M);$.position.set(0,-.02,.12),C($,"head",this.headG,!1);const B=b(.17,.145,.16,R,14);B.position.y=.2,C(B,"head",this.headG);const G=b(.185,.185,.03,R,14);G.position.y=.125,C(G,"head",this.headG,!1);const V=P(.2,.06,.03,M);V.position.set(0,.1,.13),C(V,"head",this.headG,!1);const q=(ve,fe,we,Ve)=>{const ke=P(.13,.34,.14,p);ke.position.y=-.15,C(ke,"arms",fe);const ct=P(.11,.3,.12,p);ct.position.set(0,-.32,Ve),ct.rotation.x=we,C(ct,"arms",fe);const Qe=P(.11,.1,.13,v);Qe.position.set(0,-.42,Ve+Math.sin(we)*.16),Qe.rotation.x=we,C(Qe,"arms",fe,!1),fe.position.set(ve,1.5,0),this.group.add(fe)};q(-.33,this.armL,-1.15,.22),q(.33,this.armR,-.75,.1);const ne=new fi;ne.position.set(.14,1.16,.3),this.group.add(ne);const F=P(.07,.1,.5,y);C(F,"body",ne,!1);const te=b(.018,.018,.34,y);te.rotation.x=Math.PI/2,te.position.set(0,.02,.4),C(te,"body",ne,!1);const Pe=P(.06,.07,.2,D);Pe.position.set(0,-.005,.22),C(Pe,"body",ne,!1);const Be=P(.055,.18,.09,y);Be.position.set(0,-.13,-.02),Be.rotation.x=-.22,C(Be,"body",ne,!1);const ze=P(.06,.09,.2,D);ze.position.set(0,-.01,-.34),C(ze,"body",ne,!1),this.muzzle.position.set(.14,1.19,.68),this.group.add(this.muzzle);const ie=new Hn({color:16761707,transparent:!0,opacity:0,blending:fr,depthWrite:!1});this.flash=new ut(new Wn(.4,.4),ie),this.flash.position.copy(this.muzzle.position),this.flash.position.z+=.12,this.group.add(this.flash)}hasLOS(e){const t=this.tmpA.copy(this.group.position);t.y+=1.5;const r=this.tmpB.copy(e).sub(t),a=r.length();return a<.001?!0:(this.ray.set(t,r.normalize()),this.ray.far=a-.5,this.ray.intersectObjects(this.hooks.solids,!1).length===0)}fireAt(e,t){const r=new Q;this.muzzle.getWorldPosition(r);const a=this.hooks.playerSpeedXZ(),l=Math.max(.06,Math.min(.4,.36-t*.009-a*.045)),u=Math.random()<l,d=e.clone();u||(d.x+=(Math.random()-.5)*1.6,d.y+=(Math.random()-.5)*1,d.z+=(Math.random()-.5)*1.6),this.hooks.tracer(r,d,16753229),this.flash.material.opacity=.95,this.flash.rotation.z=Math.random()*Math.PI,this.flashT=.045,this.hooks.sfx.enemyShoot(t),u&&this.hooks.damagePlayer(6+Math.random()*8,this.group.position)}hit(e,t){if(!this.alive)return!1;const r=e==="legs"?.75:e==="arms"?.85:1;this.hp-=t*r,this.flashT=Math.max(this.flashT,.02);for(const a of this.mats)a.emissiveIntensity=.9;return this.hp<=0?(this.alive=!1,this.deathT=0,!0):!1}update(e,t){const r=this.group.position;if(!this.alive){this.deathT+=e,this.group.rotation.x=-Math.min(1,this.deathT/.28)*(Math.PI/2),this.deathT>1.4&&(r.y-=e*1.1);for(const D of this.mats)D.emissiveIntensity=Math.max(0,D.emissiveIntensity-e*4);return this.deathT<2.6}const a=t.x-r.x,l=t.z-r.z,u=Math.hypot(a,l)||.001;this.group.lookAt(t.x,r.y,t.z);const d=this.hooks.playerEye(),f=this.hasLOS(d);this.strafeT-=e,this.strafeT<=0&&(this.strafeT=.7+Math.random()*1.5,Math.random()<.75&&(this.strafeDir*=-1));let p=0,x=0;!f||u>this.prefRange?(p=a/u,x=l/u):(p=-l/u*this.strafeDir,x=a/u*this.strafeDir,u<this.prefRange-3&&(p-=a/u*.7,x-=l/u*.7));const _=this.speed*(f&&u<=this.prefRange?.7:1),g=r.x,M=r.z;Pg(r,p*_*e,x*_*e,.38,this.hooks.colliders,this.hooks.bounds);const E=Math.hypot(r.x-g,r.z-M);E<_*e*.25?(this.blockedT+=e,this.blockedT>.45&&(this.blockedT=0,this.strafeDir*=-1,this.prefRange=5.5+Math.random()*7.5)):this.blockedT=0,this.lastX,this.lastZ,this.lastX=r.x,this.lastZ=r.z;const R=E>.002;this.phase+=e*(2+_);const v=R?Math.sin(this.phase*4.2)*.62:0;this.legL.rotation.x=v,this.legR.rotation.x=-v,this.armL.rotation.x=R?Math.sin(this.phase*4.2)*.1:0,this.armR.rotation.x=R?-Math.sin(this.phase*4.2)*.08:0;const y=R?Math.abs(Math.sin(this.phase*4.2))*.05:Math.sin(this.time2(e))*.012;this.group.position.y=y,this.headG.rotation.y=Math.sin(this.phase*.7)*.06;for(const D of this.mats)D.emissiveIntensity=Math.max(0,D.emissiveIntensity-e*5);return this.flashT>0&&(this.flashT-=e,this.flash.material.opacity=Math.max(0,this.flashT/.045)),this.flash.lookAt(d),this.burstLeft>0?(this.nextShot-=e,this.nextShot<=0&&(f&&u<52&&this.fireAt(d,u),this.burstLeft--,this.nextShot=.13,this.burstLeft===0&&(this.nextBurst=Math.max(.4,1.1+Math.random()*1.2-u*.012)))):(this.nextBurst-=e,this.nextBurst<=0&&f&&u<52&&(this.burstLeft=2+(Math.random()*3|0),this.nextShot=.06)),!0}time2(e){return this.idleT+=e,this.idleT*2}dispose(e){e.remove(this.group),this.group.traverse(t=>{const r=t;r.geometry&&r.geometry.dispose()});for(const t of this.mats)t.dispose()}}class fw{constructor(){this.ctx=null,this.master=null,this.noise=null}ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-16,t.ratio.value=9,t.connect(this.ctx.destination),this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(t);const r=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,r,this.ctx.sampleRate);const a=this.noise.getChannelData(0);for(let l=0;l<r;l++)a[l]=Math.random()*2-1}burst(e){if(!this.ctx||!this.master||!this.noise)return;const t=this.ctx,r=t.currentTime+(e.delay||0),a=t.createBufferSource();a.buffer=this.noise,a.loop=!0;const l=t.createBiquadFilter();l.type=e.type||"lowpass",l.Q.value=.7,l.frequency.setValueAtTime(e.from,r),l.frequency.exponentialRampToValueAtTime(Math.max(40,e.to),r+e.dur);const u=t.createGain();u.gain.setValueAtTime(e.vol,r),u.gain.exponentialRampToValueAtTime(1e-4,r+e.dur),a.connect(l),l.connect(u),u.connect(this.master),a.start(r),a.stop(r+e.dur+.05)}tone(e,t,r,a="sine",l,u=0){if(!this.ctx||!this.master)return;const d=this.ctx,f=d.currentTime+u,p=d.createOscillator();p.type=a,p.frequency.setValueAtTime(e,f),l&&p.frequency.exponentialRampToValueAtTime(Math.max(20,l),f+t);const x=d.createGain();x.gain.setValueAtTime(r,f),x.gain.exponentialRampToValueAtTime(1e-4,f+t),p.connect(x),x.connect(this.master),p.start(f),p.stop(f+t+.05)}shoot(){this.burst({dur:.14,vol:.5,from:1700,to:170}),this.burst({dur:.05,vol:.22,from:3800,to:900,type:"highpass"}),this.tone(150,.13,.5,"triangle",42)}smg(){this.burst({dur:.08,vol:.34,from:2100,to:320}),this.burst({dur:.03,vol:.14,from:4200,to:1100,type:"highpass"}),this.tone(190,.07,.3,"triangle",60)}shotgun(){this.burst({dur:.22,vol:.7,from:900,to:90}),this.burst({dur:.08,vol:.3,from:2600,to:500,type:"highpass"}),this.tone(95,.2,.6,"triangle",34),this.burst({dur:.06,vol:.25,from:1400,to:300,delay:.42})}lmg(){this.burst({dur:.1,vol:.42,from:1500,to:200}),this.burst({dur:.04,vol:.18,from:3400,to:800,type:"highpass"}),this.tone(130,.1,.4,"triangle",46)}zeus(){this.tone(2400,.25,.3,"sawtooth",120),this.burst({dur:.3,vol:.35,from:5e3,to:300,type:"highpass"}),this.tone(90,.3,.4,"sine",30)}knife(){this.burst({dur:.12,vol:.2,from:3e3,to:700,type:"bandpass"}),this.tone(320,.08,.15,"triangle",700)}pistol(){this.burst({dur:.1,vol:.42,from:2600,to:320}),this.burst({dur:.04,vol:.18,from:4200,to:1400,type:"highpass"}),this.tone(220,.09,.34,"triangle",70)}sniper(){this.burst({dur:.42,vol:.8,from:1300,to:55}),this.burst({dur:.12,vol:.3,from:4200,to:700,type:"highpass"}),this.tone(88,.42,.62,"sine",26)}zoom(e){this.tone(e?620:1050,.05,.13,"square",e?1150:520)}buy(){this.tone(1320,.06,.17,"square"),this.tone(1760,.09,.15,"square",void 0,.055)}deny(){this.tone(230,.13,.2,"square",150)}switchW(){this.burst({dur:.05,vol:.12,from:1500,to:500}),this.tone(500,.04,.1,"square",800,.03)}enemyShoot(e){const t=Math.max(.06,Math.min(.3,2.4/Math.max(4,e)));this.burst({dur:.12,vol:t,from:1100,to:150}),this.tone(120,.1,t*.8,"triangle",40)}dry(){this.tone(1900,.045,.14,"square",1200)}hit(e){this.tone(e?2500:1650,.06,.2,"square",e?1900:1250)}kill(){this.tone(880,.09,.22,"square"),this.tone(1318,.14,.22,"square",void 0,.075)}hurt(){this.burst({dur:.16,vol:.35,from:520,to:90}),this.tone(95,.22,.4,"sine",42)}step(){this.burst({dur:.05,vol:.06,from:640,to:180})}jump(){this.burst({dur:.09,vol:.08,from:400,to:900,type:"bandpass"})}reload(){this.tone(950,.05,.18,"square",600),this.tone(700,.06,.2,"square",420,.42),this.burst({dur:.07,vol:.16,from:2200,to:500,delay:1.05}),this.tone(1150,.05,.2,"square",800,1.05)}pin(){this.tone(2300,.05,.18,"square",1600)}boom(){this.burst({dur:.65,vol:.85,from:900,to:55}),this.burst({dur:.22,vol:.35,from:3200,to:400,type:"highpass"}),this.tone(72,.55,.7,"sine",30)}beep(e=880,t=.1,r=.2){this.tone(e,t,r,"square")}win(){[523,659,784,1046].forEach((e,t)=>this.tone(e,.16,.22,"square",void 0,t*.11))}lose(){[392,330,262,196].forEach((e,t)=>this.tone(e,.22,.22,"triangle",void 0,t*.15))}}const $0=["Феникс","Гюрза","Кобра","Шакал","Коршун","Таран","Волк","Гадюка","Беркут","Росомаха"],K0=115,Xf=3,Ng=typeof window<"u"&&(window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window);function hw(){try{const s=document.createElement("canvas"),e=s.getContext("webgl")||s.getContext("experimental-webgl");if(!e)return!0;const t=e.getExtension("WEBGL_debug_renderer_info");if(!t)return!1;const r=String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)).toLowerCase(),a=String(e.getParameter(t.UNMASKED_VENDOR_WEBGL)).toLowerCase(),l=r+" "+a;return/swiftshader|llvmpipe|mesa/.test(l)?!0:/intel/.test(l)&&/hd graphics/.test(l)&&!/uhd|iris/.test(l)}catch{return!1}}const Lg=hw(),yn=Ng||Lg,oi={ak:{name:"AK-47",short:"AK-47",cat:"Винтовка",dmg:27,cd:.096,mag:30,res:90,auto:!0,reload:2.5,recoil:.013,recoilYaw:.008,kick:.16,base:.0035,grow:.02,movePen:.006,recover:4.2,speed:1,reward:300,sound:"rifle",gun:{body:[.072,.092,.5],bodyMat:"metal",bodyColor:3816770,barrelLen:.3,barrelR:.016,barrelY:.022,handguard:[.066,.07,.24],handguardMat:"wood",stock:{l:.24,drop:.02,mat:"wood",color:9067052},mag:{w:.056,h:.2,d:.1,tilt:.24,z:.04},grip:!0,gasTube:!0,muzzle:{len:.07,r:.02}}},awp:{name:"AWP",short:"AWP",cat:"Снайперка",dmg:115,cd:1.35,mag:5,res:30,auto:!1,reload:3.7,recoil:.09,recoilYaw:.004,kick:.05,base:.0012,grow:.03,movePen:0,recover:1.1,speed:.88,reward:100,sound:"sniper",gun:{body:[.06,.088,.6],bodyMat:"poly",bodyColor:4871743,barrelLen:.5,barrelR:.014,barrelY:.015,stock:{l:.26,drop:.035,mat:"poly",color:4871743},scope:{len:.26,r:.03,zoom:4},mag:{w:.05,h:.11,d:.08,tilt:.08,z:.02},grip:!0,bipod:!0,boltHandle:!0,muzzle:{len:.1,r:.024}}},deagle:{name:"Desert Eagle",short:"DEAGLE",cat:"Пистолет",dmg:53,cd:.24,mag:7,res:35,auto:!1,reload:2.2,recoil:.038,recoilYaw:.006,kick:.1,base:.004,grow:.05,movePen:.035,recover:2.4,speed:1.02,reward:300,sound:"pistol",gun:{body:[.046,.05,.26],bodyMat:"metal",bodyColor:10199464,barrelLen:.05,barrelR:.013,barrelY:.02,pistol:!0,slideColor:13225684,serrations:!0,mag:{w:.04,h:.02,d:.06,tilt:-.22,z:.1}}},uzi:{name:"UZI",short:"UZI",cat:"ПП",dmg:13,cd:.072,mag:32,res:128,auto:!0,reload:2.6,recoil:.01,recoilYaw:.009,kick:.075,base:.0055,grow:.02,movePen:.015,recover:3.6,speed:1.05,reward:600,sound:"smg",gun:{body:[.06,.082,.36],bodyMat:"metal",bodyColor:3356219,barrelLen:.13,barrelR:.011,barrelY:.024,mag:{w:.046,h:.17,d:.07,tilt:0,z:.02},stock:{l:.2,drop:-.028,mat:"poly",color:2303531},boltHandle:!0,muzzle:{len:.06,r:.017}}},p90:{name:"P90",short:"P90",cat:"ПП",dmg:14,cd:.066,mag:50,res:100,auto:!0,reload:3.3,recoil:.008,recoilYaw:.007,kick:.07,base:.005,grow:.016,movePen:.013,recover:3.8,speed:1.04,reward:600,sound:"smg",gun:{body:[.068,.11,.5],bodyMat:"poly",bodyColor:6121540,barrelLen:.14,barrelR:.012,barrelY:.005,bullpup:!0,topMag:!0,muzzle:{len:.05,r:.02}}},knife:{name:"M48 Tomahawk",short:"НОЖ",cat:"Ближний бой",dmg:60,cd:.45,mag:0,res:0,auto:!0,reload:0,recoil:0,recoilYaw:0,kick:.05,base:0,grow:0,movePen:0,recover:5,speed:1.06,reward:1500,sound:"knife",melee:!0,gun:{body:[.026,.03,.13],bodyMat:"poly",bodyColor:3356734,barrelLen:0,barrelR:0,blade:{len:.17,w:.036}}}},Vn=["ak","uzi","p90","awp","deagle","knife"];class dw{constructor(e,t){this.state="attract",this.scene=new x_,this.clock=new W_,this.raf=0,this.time=0,this.attractT=0,this.sfx=new fw,this.pos=new Q,this.vel=new Q,this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.kick=0,this.spread=0,this.shake=0,this.bobT=0,this.stepAcc=0,this.onGround=!0,this.locked=!1,this.hp=100,this.armor=0,this.nades=1,this.reloading=!1,this.reloadT=0,this.reloadTotal=1.9,this.cooldown=0,this.firing=!1,this.joyX=0,this.joyY=0,this.lookDX=0,this.lookDY=0,this.touchJump=!1,this.equipped="deagle",this.ammo={},this.scoped=!1,this.switchAnim=1,this.lastCX=0,this.lastCY=0,this.mouseInit=!1,this.keys={},this.deathT=0,this.round=0,this.scoreA=0,this.scoreB=0,this.kills=0,this.deaths=0,this.roundT=K0,this.bots=[],this.nadesFly=[],this.particles=[],this.tracers=[],this.shells=[],this.decals=[],this.bloomPass=null,this.perfFrames=0,this.perfAcc=0,this.degraded=!1,this.weapon=new fi,this.weaponModels={},this.weaponMuzzles={},this.wheelOpen=!1,this.wheelIndex=0,this.flashT=0,this.boomT=0,this.ray=new Sg,this.tmpV=new Q,this.tmpD=new Q,this.roundTimeout=0,this.onKeyDown=f=>{if(f.code==="Space"&&f.preventDefault(),this.keys[f.code]=!0,this.state!=="playing")return;if(f.code==="Escape"&&!this.locked){this.pause();return}if(f.code==="Tab"){f.preventDefault(),this.openWheel();return}if(this.wheelOpen)return;f.code==="KeyR"&&this.startReload(),f.code==="KeyG"&&this.throwNade();const p=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9"].indexOf(f.code);p>=0&&p<Vn.length&&this.switchTo(Vn[p])},this.onKeyUp=f=>{this.keys[f.code]=!1,f.code==="Tab"&&(f.preventDefault(),this.closeWheel(!0))},this.onWheel=f=>{this.state!=="playing"||this.wheelOpen||this.cycleWeapon(f.deltaY>0?1:-1)},this.onMouseMove=f=>{if(this.wheelOpen){this.wheelPick(f.clientX,f.clientY);return}if(this.state==="playing")if(this.locked)this.yaw-=f.movementX*.0032,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-f.movementY*.0032));else{if(!this.mouseInit){this.lastCX=f.clientX,this.lastCY=f.clientY,this.mouseInit=!0;return}const p=f.movementX??f.clientX-this.lastCX,x=f.movementY??f.clientY-this.lastCY;this.lastCX=f.clientX,this.lastCY=f.clientY;const _=.0045;this.yaw-=p*_,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-x*_))}},this.onMouseDown=f=>{this.sfx.ensure(),this.state==="playing"&&(f.button===0?(this.firing=!0,this.tryShoot(),this.locked||this.requestLock()):f.button===2&&(this.equipped==="awp"?this.toggleScope():(this.firing=!0,this.tryShoot())))},this.onMouseUp=f=>{(f.button===0||f.button===2)&&(this.firing=!1)},this.onLockChange=()=>{const f=document.pointerLockElement===this.renderer.domElement;this.locked&&!f&&this.state==="playing"&&!this.wheelOpen&&this.pause(),this.mouseInit=!1,this.locked=f,this.wheelOpen||this.hooks.lockedChange(f)},this.onResize=()=>{const f=this.container.clientWidth,p=this.container.clientHeight;this.camera.aspect=f/p,this.camera.updateProjectionMatrix(),this.renderer.setSize(f,p),this.composer.setSize(f,p)},this.onVisibility=()=>{document.hidden&&this.state==="playing"&&this.pause()},this.onContext=f=>f.preventDefault(),this.loop=()=>{this.raf=requestAnimationFrame(this.loop);const f=Math.min(.05,this.clock.getDelta());this.time+=f,!this.degraded&&this.state!=="attract"&&this.perfFrames<180&&(this.perfAcc+=f,this.perfFrames++,this.perfFrames===180&&this.perfAcc/180>.04&&(this.degraded=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,yn?.66:1.1)),this.composer.setSize(this.container.clientWidth,this.container.clientHeight),this.bloomPass&&(this.bloomPass.enabled=!1)));const p=this.scene.getObjectByName("dust");p&&(p.rotation.y+=f*.012);const x=this.scene.getObjectByName("clouds");if(x&&(x.rotation.y+=f*.007),this.state==="attract"){this.attractT+=f*.09;const M=17;this.camera.position.set(Math.sin(this.attractT)*M,7.5+Math.sin(this.attractT*.6)*2,Math.cos(this.attractT)*M),this.camera.lookAt(0,1.2,0),this.weapon.visible=!1}else this.weapon.visible=!0,this.state==="playing"?this.updatePlaying(f):this.state==="dying"&&this.updateDying(f),this.updateFx(f),this.state!=="playing"&&this.updateNades(f);const _=this.renderer.domElement,g=this.state==="playing"||this.state==="dying"?"none":"";_.dataset.cur!==g&&(_.dataset.cur=g,_.style.cursor=g),this.composer.render()},this.container=e,this.hooks=t,this.renderer=new BE({antialias:!yn,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,yn?1:1.75)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=yn?_o:Q0,e.appendChild(this.renderer.domElement),this.renderer.toneMapping=yc,this.renderer.toneMappingExposure=1.06,this.scene.background=this.makeSkyTexture(),this.scene.fog=new rd(13156264,yn?34:48,yn?105:155),this.camera=new li(75,e.clientWidth/e.clientHeight,.05,320),this.camera.rotation.order="YXZ",this.scene.add(this.camera);const r=new F_(13624053,10193507,1.1);this.scene.add(r);const a=new m0(16772300,2.6);if(a.position.set(-39,57,-27),a.castShadow=!0,a.shadow.mapSize.set(yn?1024:2048,yn?1024:2048),a.shadow.camera.left=-52,a.shadow.camera.right=52,a.shadow.camera.top=52,a.shadow.camera.bottom=-52,a.shadow.camera.far=200,a.shadow.bias=-6e-4,this.scene.add(a),this.scene.add(new z_(8952234,.4)),!yn){const f=new m0(14268810,.5);f.position.set(30,9,36),this.scene.add(f)}this.map=cw(this.scene,!yn),this.gunLight=new Fh(16761707,0,9,2),this.gunLight.position.set(.3,-.15,-.7),this.camera.add(this.gunLight),this.boomLight=new Fh(16748608,0,22,2),this.scene.add(this.boomLight),this.boomFlash=new xc(new Eo({map:this.makeGlowTex(),color:16763024,transparent:!0,opacity:0,blending:fr,depthWrite:!1})),this.boomFlash.scale.set(9,9,1),this.scene.add(this.boomFlash),this.buildWeapons(),this.flash=this.buildFlash(.55),this.weaponMuzzles[this.equipped].add(this.flash);for(let f=0;f<(yn?10:24);f++){const p=new ut(new nn(1,1,1),new Hn({color:16765562,transparent:!0,opacity:0,blending:fr,depthWrite:!1}));p.visible=!1,this.scene.add(p),this.tracers.push({m:p,life:0})}const l=new nn(.016,.05,.016),u=new Tt({color:14263361,metalness:.85,roughness:.35});for(let f=0;f<(yn?8:22);f++){const p=new ut(l,u);p.visible=!1,this.scene.add(p),this.shells.push({m:p,v:new Q,rv:new Q,life:0})}const d=new Wn(.1,.1);for(let f=0;f<(yn?14:40);f++){const p=new ut(d,new Hn({color:1314826,transparent:!0,opacity:0,depthWrite:!1}));p.visible=!1,this.scene.add(p),this.decals.push({m:p,life:0})}this.composer=new YE(this.renderer),this.composer.addPass(new qE(this.scene,this.camera)),yn||(this.bloomPass=new Sa(new at(e.clientWidth,e.clientHeight),.5,.5,.82),this.composer.addPass(this.bloomPass)),this.composer.addPass(new $E),this.pos.set(this.map.playerSpawn.x,0,this.map.playerSpawn.z),this.bindEvents(),this.loop()}makeSkyTexture(){const e=document.createElement("canvas");e.width=16,e.height=512;const t=e.getContext("2d"),r=t.createLinearGradient(0,0,0,512);r.addColorStop(0,"#4f7db5"),r.addColorStop(.42,"#7fa8cc"),r.addColorStop(.66,"#b9c4c4"),r.addColorStop(.82,"#d8c9a8"),r.addColorStop(1,"#e5d3ae"),t.fillStyle=r,t.fillRect(0,0,16,512);const a=new qi(e);return a.colorSpace=dn,a.magFilter=Tn,a}texCanvas(e,t){const r=document.createElement("canvas");r.width=r.height=e;const a=r.getContext("2d");t(a,e);const l=new qi(r);return l.wrapS=l.wrapT=Ms,l.colorSpace=dn,l.anisotropy=4,l}texMetal(e){return this.texCanvas(128,(t,r)=>{t.fillStyle=e,t.fillRect(0,0,r,r);for(let a=0;a<300;a++)t.fillStyle=Math.random()>.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.10)",t.fillRect(Math.random()*r,Math.random()*r,1+Math.random()*2.2,1);t.globalAlpha=.09,t.strokeStyle="#ffffff";for(let a=0;a<24;a++){const l=Math.random()*r;t.beginPath(),t.moveTo(0,l),t.lineTo(r,l+(Math.random()-.5)*5),t.stroke()}t.globalAlpha=1})}texWood(){return this.texCanvas(128,(e,t)=>{e.fillStyle="#8a5a2c",e.fillRect(0,0,t,t);for(let r=0;r<26;r++){e.strokeStyle=`rgba(58,32,10,${.14+Math.random()*.26})`,e.lineWidth=1+Math.random()*2.2;const a=Math.random()*t;e.beginPath(),e.moveTo(a,0),e.bezierCurveTo(a+9,t*.3,a-9,t*.62,a+(Math.random()-.5)*12,t),e.stroke()}for(let r=0;r<220;r++)e.fillStyle="rgba(38,20,6,0.14)",e.fillRect(Math.random()*t,Math.random()*t,1.6,1.6);e.globalAlpha=.07,e.fillStyle="#eec27f";for(let r=0;r<6;r++)e.beginPath(),e.ellipse(Math.random()*t,Math.random()*t,16+Math.random()*22,5+Math.random()*4,0,0,7),e.fill();e.globalAlpha=1})}texPolymer(e){return this.texCanvas(128,(t,r)=>{t.fillStyle=e,t.fillRect(0,0,r,r);for(let a=0;a<460;a++)t.fillStyle=Math.random()>.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.12)",t.fillRect(Math.random()*r,Math.random()*r,1.7,1.7);t.globalAlpha=.08,t.strokeStyle="#000000";for(let a=0;a<11;a++){const l=Math.random()*r,u=Math.random()*r;t.beginPath(),t.moveTo(l,u),t.lineTo(l+(Math.random()-.5)*34,u+(Math.random()-.5)*34),t.stroke()}t.globalAlpha=1})}buildGunModel(e){var j,ce,re,$;const t=new fi,r=new Yt,a=B=>`#${B.toString(16).padStart(6,"0")}`,l=this.texMetal(a(e.bodyMat==="metal"?e.bodyColor:2829875)),u=this.texWood(),d=this.texPolymer(a(e.bodyColor)),f=new Tt({map:l,bumpMap:l,bumpScale:.25,roughness:.46,metalness:.72}),p=new Tt({map:this.texMetal("#17191c"),bumpMap:this.texMetal("#17191c"),bumpScale:.2,roughness:.4,metalness:.8}),x=new Tt({map:u,bumpMap:u,bumpScale:.45,roughness:.66,metalness:.06}),_=new Tt({map:d,bumpMap:d,bumpScale:.3,roughness:.85,metalness:.1}),g=this.texPolymer("#6e6848"),M=new Tt({map:g,bumpMap:g,bumpScale:.5,roughness:.92,metalness:.04}),E=e.bodyMat==="wood"?x:e.bodyMat==="poly"?_:f,R=new Tt({color:14278371,roughness:.22,metalness:.95}),v=(B,G,V,q,ne,F,te,Pe=0,Be=0,ze=0)=>{const ie=new ut(new nn(B,G,V),q);return ie.position.set(ne,F,te),ie.rotation.set(Pe,Be,ze),t.add(ie),ie},y=(B,G,V,q,ne,F,te,Pe=14)=>{const Be=new ut(new ys(B,G,V,Pe),q);return Be.rotation.x=Math.PI/2,Be.position.set(ne,F,te),t.add(Be),Be},[D,P,b]=e.body,C=e.barrelY??.015,L=(B,G,V,q=0,ne=!1)=>{const F=new fi,te=new ut(new nn(.082,.075,.085),M);F.add(te);const Pe=new ut(new nn(.084,ne?.05:.045,.06),M);Pe.position.set(0,ne?.055:-.012,-.06),Pe.rotation.x=ne?.5:-.4,F.add(Pe);const Be=new ut(new nn(.084,.03,.05),M);Be.position.set(0,.035,-.02),F.add(Be);const ze=new ut(new nn(.026,.028,.06),M);ze.position.set(.048,.008,-.03),F.add(ze);const ie=new ut(new nn(.07,.06,.1),M);ie.position.set(.01,-.005,.09),F.add(ie);const ve=new ut(new nn(.075,.062,.26),M);return ve.position.set(.05,-.02,.26),ve.rotation.set(.18,-.15,0),F.add(ve),F.position.set(B,G,V),F.rotation.x=q,t.add(F),F};if(e.melee&&e.blade){const B=e.blade;v(.03,.034,.13,_,0,.005,.075),v(.032,.012,.03,p,0,-.014,.05),v(.032,.012,.03,p,0,-.014,.085),v(.034,.016,.018,p,0,.005,.148),v(.052,.014,.02,f,0,.012,0),v(B.w,.008,B.len,R,0,.02,-B.len/2-.01),v(B.w*.92,.003,B.len,new Tt({color:16054266,roughness:.12,metalness:1}),0,.0155,-B.len/2-.01),v(B.w*.3,.004,B.len*.9,p,0,.026,-B.len/2-.015);const G=v(B.w*.62,.007,B.w*.62,R,0,.02,-B.len-.01-B.w*.2,0,Math.PI/4);return G.scale.z=.55,L(0,0,.07,-1.15),r.position.set(0,.02,-B.len-.05),t.add(r),{group:t,muzzle:r}}if(e.pistol){const B=new Tt({map:this.texMetal(a(e.slideColor??13225684)),roughness:.3,metalness:.85});if(v(D,P*.9,b,f,0,-.006,0),v(D*1.04,P*.62,b*1.02,B,0,P*.5,0),e.serrations)for(let G=0;G<6;G++)v(.002,P*.5,.008,p,D*.53,P*.5,b*.28+G*.012),v(.002,P*.5,.008,p,-D*.53,P*.5,b*.28+G*.012);return y(e.barrelR*.9,e.barrelR*.9,.06,p,0,P*.5,-b/2-.02),v(.012,.03,.012,B,0,P*.86,-b*.4),v(D*.8,.02,.016,B,0,P*.84,b*.34),v(D*.9,.05,.05,p,0,P*.16,b*.44),v(D*.94,P*1.5,.075,f,0,-P*1.05,b*.26,-.2),v(D*.8,.05,.02,p,0,-P*1.62,b*.2),v(.018,.04,.05,p,0,-P*.55,b*.05),v(.008,.03,.014,p,0,-P*.36,.02),v(D*.5,.028,.014,p,0,P*.62,b*.52,-.5),L(0,-P*1,b*.26,-.2),L(0,-P*1.22,b*.24,-.1),r.position.set(0,P*.5,-b/2-.055),t.add(r),{group:t,muzzle:r}}v(D,P,b,E,0,0,0);const k=Math.floor(b/.045);for(let B=0;B<k;B++)v(D*.5,.011,.016,p,0,P/2+.005,-b/2+.03+B*.045);let w=-b/2;if(e.barrelLen>0&&(y(e.barrelR,e.barrelR,e.barrelLen,p,0,C,w-e.barrelLen/2),w-=e.barrelLen),e.muzzle&&(y(e.muzzle.r,e.muzzle.r,e.muzzle.len,f,0,C,w-e.muzzle.len/2),y(e.muzzle.r*.55,e.muzzle.r*.55,e.muzzle.len*.5,p,0,C,w-e.muzzle.len*.55),w-=e.muzzle.len),e.gasTube&&(y(.011,.011,(((j=e.handguard)==null?void 0:j[2])??.2)*.95,f,0,C+P*.42,-b/2-(((ce=e.handguard)==null?void 0:ce[2])??.2)*.47),v(D*.7,P*.5,.03,f,0,C+P*.28,-b/2-(((re=e.handguard)==null?void 0:re[2])??.2)-.015),v(.008,.05,.008,p,0,C+P*.62,-b/2-((($=e.handguard)==null?void 0:$[2])??.2)-.015),v(.044,.02,.014,p,0,P/2+.02,b*.3),v(.012,.03,.05,p,D*.42,.02,b*.05)),e.handguard){const[B,G,V]=e.handguard,q=e.handguardMat==="wood"?x:_;v(B,G,V,q,0,C-G*.12,-b/2-V/2+.012),v(B*.86,G*.4,V*.96,p,0,C+G*.42,-b/2-V/2+.012);for(let ne=0;ne<3;ne++)v(.004,G*.5,.045,p,B*.505,C-G*.12,-b/2-.05-ne*.07),v(.004,G*.5,.045,p,-B*.505,C-G*.12,-b/2-.05-ne*.07)}if(e.mag){const B=e.mag;v(B.w,B.h,B.d,p,B.x??0,-P/2-B.h/2+.025,(B.z??0)+.02,B.tilt),v(B.w*.9,.02,B.d*.9,f,B.x??0,-P/2-B.h+.03,(B.z??0)+.02+Math.sin(B.tilt)*B.h*.45,B.tilt)}if(e.topMag){const B=new Tt({color:10135650,roughness:.4,metalness:.1,transparent:!0,opacity:.55});v(D*.92,.024,b*.86,B,0,P/2+.012,-.01);for(let G=0;G<8;G++)v(.008,.02,.014,new Tt({color:14201946,metalness:.8,roughness:.35}),0,P/2+.012,-b*.3+G*.045)}if(e.bullpup&&(v(D*.9,P*1.12,.09,E,0,-.004,b/2+.035),v(D*.94,P*.9,.02,p,0,-.004,b/2+.085),v(D*.8,.03,.1,p,0,P/2+.012,b*.28),v(D*.7,.05,.12,E,0,-P/2-.02,-b*.3,-.55),v(.016,.05,.05,p,D*.4,.01,-b*.34),v(.016,.05,.05,p,-D*.4,.01,-b*.34)),e.stock){const B=e.stock,G=B.mat==="wood"?x:new Tt({map:this.texPolymer(a(B.color)),roughness:.8,metalness:.12});v(D*.88,P*1.05,B.l*.5,G,0,-B.drop*.35,b/2+B.l*.25),v(D*.92,P*1.4,B.l*.5,G,0,-B.drop,b/2+B.l*.75),v(D*.96,P*1.45,.018,p,0,-B.drop,b/2+B.l+.002)}if(e.grip&&(v(D*.85,.115,.06,E,0,-P/2-.055,b*.3,-.22),v(D*.7,.03,.02,p,0,-P/2-.1,b*.16)),e.scope){const B=e.scope,G=P/2+B.r+.024;y(B.r,B.r,B.len,p,0,G,-.02),y(B.r*1.45,B.r,.055,p,0,G,-.02-B.len/2),y(B.r*1.2,B.r,.05,p,0,G,-.02+B.len/2);const V=new ut(new wo(B.r*1.3,20),new Hn({color:10474751}));V.position.set(0,G,-.02+B.len/2+.027),V.rotation.y=Math.PI,t.add(V),v(.014,.05,.03,p,0,P/2+.01,-.06),v(.014,.05,.03,p,0,P/2+.01,.04),v(.004,.02,.004,p,0,G+B.r+.012,-.1)}e.bipod&&(v(.012,.2,.012,p,.02,-P/2-.08,-b*.36,.45,0,.28),v(.012,.2,.012,p,-.02,-P/2-.08,-b*.36,.45,0,-.28),v(.05,.02,.05,p,0,-P/2-.012,-b*.36)),e.boltHandle&&(v(.012,.012,.07,f,D*.55,-.005,b*.1,0,0,.7),y(.011,.011,.024,f,D*.58,-.035,b*.07));const I=e.handguard,Y=e.bullpup?-b*.3:b*.3,W=e.bullpup?-.55:-.22;return L(0,-P/2-.075,Y,W),I?L(0,C-I[1]*.5-.05,-b/2-I[2]*.55,.2,!0):e.bullpup?L(0,-P*.75,-b*.05,.3,!0):L(0,-P*.5,-b*.42,.3,!0),r.position.set(0,C,w-.02),t.add(r),{group:t,muzzle:r}}buildWeapons(){const e=this.weapon;for(const t of Vn){const{group:r,muzzle:a}=this.buildGunModel(oi[t].gun);this.weaponModels[t]=r,this.weaponMuzzles[t]=a,e.add(r),r.visible=!1}e.position.set(.24,-.22,-.45),this.camera.add(e)}makeGlowTex(){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),r=t.createRadialGradient(64,64,2,64,64,64);return r.addColorStop(0,"rgba(255,240,200,1)"),r.addColorStop(.35,"rgba(255,180,90,0.8)"),r.addColorStop(1,"rgba(255,120,40,0)"),t.fillStyle=r,t.fillRect(0,0,128,128),new qi(e)}buildFlash(e){const t=new Hn({color:16763258,transparent:!0,opacity:0,blending:fr,depthWrite:!1,side:ci}),r=new fi,a=new ut(new Wn(e,e),t),l=new ut(new Wn(e,e*.36),t);l.rotation.z=Math.PI/2,r.add(a,l);const u=new xc(new Eo({map:this.makeGlowTex(),color:16757866,transparent:!0,opacity:0,blending:fr,depthWrite:!1}));u.scale.set(e*2.6,e*2.6,1),r.add(u);const d=new ut(new Wn(.01,.01),t);return d.add(r),d}bindEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("wheel",this.onWheel,{passive:!0}),window.addEventListener("resize",this.onResize),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("pointerlockchange",this.onLockChange),document.addEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.addEventListener("contextmenu",this.onContext)}requestLock(){try{const e=this.renderer.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}startMatch(){this.sfx.ensure(),this.scoreA=0,this.scoreB=0,this.round=0,this.kills=0,this.deaths=0,this.equipped="deagle",this.applyWeaponVisibility(),this.hooks.score(0,0),this.hooks.kills(0),this.startRound()}resume(){this.state==="paused"&&(this.state="playing",this.requestLock())}pause(){this.state==="playing"&&(this.state="paused",this.firing=!1,this.mouseInit=!1,this.scoped&&this.toggleScope(!1),document.pointerLockElement?document.exitPointerLock():this.hooks.lockedChange(!1))}toMenu(){window.clearTimeout(this.roundTimeout),this.clearEntities(),this.state="attract",this.scoped&&this.toggleScope(!1),document.pointerLockElement&&document.exitPointerLock()}setMoveInput(e,t){this.joyX=Math.max(-1,Math.min(1,e)),this.joyY=Math.max(-1,Math.min(1,t))}addLook(e,t){this.lookDX+=e,this.lookDY+=t}setFiring(e){if(this.state!=="playing"){this.firing=!1;return}this.firing=e,e&&this.tryShoot()}doJump(){this.state==="playing"&&(this.touchJump=!0)}doReload(){this.state==="playing"&&this.startReload()}doGrenade(){this.state==="playing"&&this.throwNade()}doScope(){this.state==="playing"&&this.equipped==="awp"&&this.toggleScope()}switchWeaponByIndex(e){e>=0&&e<Vn.length&&this.switchTo(Vn[e])}cycleWeaponPub(e){this.cycleWeapon(e)}dispose(){cancelAnimationFrame(this.raf),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("wheel",this.onWheel),window.removeEventListener("resize",this.onResize),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mousedown",this.onMouseDown),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("pointerlockchange",this.onLockChange),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.removeEventListener("contextmenu",this.onContext),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement)}clearEntities(){for(const e of this.bots)e.dispose(this.scene);this.bots=[];for(const e of this.nadesFly)this.scene.remove(e.m);this.nadesFly=[];for(const e of this.particles)e.life=0,e.m.visible=!1}startRound(){this.round++,this.clearEntities();const e=this.map.playerSpawn;this.pos.set(e.x,0,e.z),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.spread=0,this.shake=0,this.kick=0,this.hp=100,this.armor=100;for(const l of Vn)this.ammo[l]={mag:oi[l].mag,res:oi[l].res};this.nades=Math.min(3,this.round),this.reloading=!1,this.firing=!1,this.scoped=!1,this.hooks.scoped(!1),this.roundT=K0;const t=Math.min(10,3+this.round),r=[...this.map.botSpawns].sort(()=>Math.random()-.5),a={colliders:this.map.colliders,bounds:this.map.bounds,solids:this.map.solids,playerEye:()=>this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z),playerSpeedXZ:()=>Math.hypot(this.vel.x,this.vel.z),tracer:(l,u,d)=>this.spawnTracer(l,u,d),damagePlayer:(l,u)=>this.damagePlayer(l,u),sfx:this.sfx};for(let l=0;l<t;l++){const u=r[l%r.length],d=new uw($0[l%$0.length],u.x+(Math.random()-.5),u.z+(Math.random()-.5),(3+this.round*.22+Math.random()*.3)*1.35,a);d.group.rotation.y=Math.random()*Math.PI*2,this.scene.add(d.group),d.group.updateMatrixWorld(!0),this.bots.push(d)}this.state="playing",Xf-this.scoreA,this.hooks.banner({title:`РАУНД ${this.round}`,sub:`противников: ${t} · стволы: [1][2][3] / колесо`,tone:"info"}),this.sfx.beep(760,.12,.22),this.requestLock()}endRound(e){if(this.state!=="playing"&&this.state!=="dying")return;this.state="roundEnd",this.firing=!1,this.scoped&&this.toggleScope(!1),this.camera.fov=75,this.camera.updateProjectionMatrix(),e?this.scoreA++:this.scoreB++,this.hooks.score(this.scoreA,this.scoreB),document.pointerLockElement&&document.exitPointerLock();const t=this.scoreA>=Xf||this.scoreB>=Xf;this.hooks.banner({title:e?"РАУНД ВЫИГРАН":"РАУНД ПРОИГРАН",sub:`счёт ${this.scoreA} : ${this.scoreB}`,tone:e?"win":"lose"}),e?this.sfx.win():this.sfx.lose(),this.roundTimeout=window.setTimeout(()=>{t?this.finish(this.scoreA>this.scoreB):this.startRound()},3100)}finish(e){this.scoped&&this.toggleScope(!1),this.camera.fov=75,this.camera.updateProjectionMatrix(),this.hooks.over({result:e?"victory":"defeat",kills:this.kills,deaths:this.deaths,won:this.scoreA,lost:this.scoreB}),this.clearEntities(),this.state="attract"}startReload(){const e=oi[this.equipped];if(e.melee||e.reload<=0)return;const t=this.ammo[this.equipped];if(!(this.reloading||t.mag>=e.mag||this.state!=="playing")){if(t.res<=0){this.sfx.dry();return}this.scoped&&this.toggleScope(!1),this.reloading=!0,this.reloadTotal=e.reload,this.reloadT=e.reload,this.sfx.reload()}}tryShoot(){if(this.state!=="playing"||this.cooldown>0||this.reloading||this.switchAnim<1||this.wheelOpen)return;const e=oi[this.equipped];if(e.melee){this.meleeAttack(e);return}const t=this.ammo[this.equipped];if(t.mag<=0){this.sfx.dry(),this.firing=!1,e.reload>0&&this.startReload();return}t.mag--,this.cooldown=e.cd,e.sound==="sniper"?this.sfx.sniper():e.sound==="pistol"?this.sfx.pistol():e.sound==="smg"?this.sfx.smg():this.sfx.shoot();const r=e.sound==="sniper";this.flashT=r?.07:.04,this.flash.rotation.z=Math.random()*Math.PI;const a=(r?1.2:e.sound==="pistol"?.55:.75)+Math.random()*.5;this.flash.scale.set(a,a,a),this.gunLight.intensity=r?40:26,this.kick=Math.min(1.6,this.kick+1),this.recoilPitch+=e.recoil+Math.random()*e.recoil*.5,this.recoilYaw+=(Math.random()-.5)*e.recoilYaw*2,this.spread=Math.min(1,this.spread+(this.onGround?e.kick:e.kick*1.6)),this.spawnShell(),this.camera.getWorldDirection(this.tmpD);const l=Math.hypot(this.vel.x,this.vel.z);let u;e.sound==="sniper"?u=this.scoped?.0012+this.spread*.004:.075+this.spread*.03+(l>1.2?.05:0):u=e.base+this.spread*e.grow+(l>1.2?e.movePen:0)+(this.onGround?0:.012),this.tmpD.x+=(Math.random()-.5)*2*u,this.tmpD.y+=(Math.random()-.5)*2*u,this.tmpD.z+=(Math.random()-.5)*2*u,this.tmpD.normalize(),this.camera.getWorldPosition(this.tmpV),this.ray.set(this.tmpV,this.tmpD),this.ray.far=140;const d=[...this.map.solids];for(const _ of this.bots)_.alive&&d.push(..._.hitboxes);const f=this.ray.intersectObjects(d,!1),p=new Q;this.weaponMuzzles[this.equipped].getWorldPosition(p);const x=f.length?f[0].point:this.tmpV.clone().addScaledVector(this.tmpD,120);if(this.spawnTracer(p,x,e.sound==="sniper"?16771488:16765562),this.burst(p,10263184,2,.6,.6,-2.2),f.length){const _=f[0].object.userData;if(_.bot&&_.bot.alive){const g=_.part==="head",M=_.bot.hit(_.part||"body",g?e.dmg*4:e.dmg);this.burst(f[0].point,10361627,g?16:10,3.4,.5),M?this.onBotKilled(_.bot,g):(this.hooks.hitmark(g?"head":"hit"),this.sfx.hit(g))}else if(this.burst(f[0].point,14205066,7,2.6,.35),this.burst(f[0].point,16773304,4,3.4,.25),f[0].face){const g=new Q().copy(f[0].face.normal).transformDirection(f[0].object.matrixWorld);this.addDecal(f[0].point,g)}}}meleeAttack(e){this.cooldown=e.cd,this.kick=Math.min(1.6,this.kick+1),this.sfx.knife(),this.camera.getWorldDirection(this.tmpD),this.camera.getWorldPosition(this.tmpV),this.ray.set(this.tmpV,this.tmpD),this.ray.far=2.4;const t=[];for(const a of this.bots)a.alive&&t.push(...a.hitboxes);const r=this.ray.intersectObjects(t,!1);if(r.length){const a=r[0].object.userData;if(a.bot&&a.bot.alive){const l=a.part==="head",u=a.bot.hit(a.part||"body",l?e.dmg*2:e.dmg);this.burst(r[0].point,10361627,14,3.6,.5),u?this.onBotKilled(a.bot,l):(this.hooks.hitmark(l?"head":"hit"),this.sfx.hit(l))}}}onBotKilled(e,t){this.kills++,this.hooks.kills(this.kills),this.hooks.hitmark("kill"),this.hooks.feed({killer:"ВЫ",victim:e.name,head:t,byPlayer:!0}),this.sfx.kill();const r=e.group.position;this.burst(new Q(r.x,r.y+1,r.z),10361627,18,4.2,.7)}damagePlayer(e,t){if(this.state!=="playing")return;let r=e;if(this.armor>0){const d=Math.min(this.armor,r*.5);this.armor-=d,r-=d}this.hp-=r,this.shake=Math.min(1.2,this.shake+r/22);const a=t.x-this.pos.x,l=t.z-this.pos.z,u=this.normAngle(this.yaw+Math.PI-Math.atan2(a,l));if(this.hooks.damage(r,u),this.sfx.hurt(),this.hp<=0){this.hp=0,this.deaths++;const d=this.bots.find(f=>f.group.position===t);this.hooks.feed({killer:d?d.name:"Взрыв",victim:"ВЫ",head:!1,byPlayer:!1}),this.state="dying",this.deathT=0,this.firing=!1,this.hooks.banner({title:"ВЫ УБИТЫ",sub:"раунд потерян",tone:"lose"}),this.sfx.lose()}}normAngle(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}switchTo(e){this.equipped===e||this.state!=="playing"||(this.equipped=e,this.reloading=!1,this.firing=!1,this.scoped&&this.toggleScope(!1),this.switchAnim=0,this.applyWeaponVisibility(),this.sfx.switchW())}applyWeaponVisibility(){for(const e of Vn)this.weaponModels[e].visible=e===this.equipped;this.weaponMuzzles[this.equipped].add(this.flash)}cycleWeapon(e){if(this.state!=="playing")return;const t=Vn.indexOf(this.equipped),r=Vn.length;this.switchTo(Vn[(t+e+r)%r])}openWheel(){this.state!=="playing"||this.wheelOpen||(this.wheelOpen=!0,this.firing=!1,this.wheelIndex=Vn.indexOf(this.equipped),document.pointerLockElement&&document.exitPointerLock(),this.emitWheel())}closeWheel(e){this.wheelOpen&&(this.wheelOpen=!1,e&&this.switchTo(Vn[this.wheelIndex]),this.hooks.wheel(null),this.requestLock())}emitWheel(){this.hooks.wheel({items:Vn.map(e=>({id:e,name:oi[e].name,short:oi[e].short,cat:oi[e].cat})),active:this.wheelIndex})}wheelPick(e,t){if(!this.wheelOpen)return;const r=window.innerWidth/2,a=window.innerHeight/2,l=e-r,u=t-a;if(Math.hypot(l,u)<40)return;let d=Math.atan2(u,l)+Math.PI/2;d<0&&(d+=Math.PI*2);const f=Vn.length;this.wheelIndex=Math.round(d/(Math.PI*2)*f)%f,this.emitWheel()}toggleScope(e){if(!oi[this.equipped].gun.scope&&e!==!1)return;const r=e!==void 0?e:!this.scoped;r!==this.scoped&&(this.scoped=r,this.spread=Math.min(this.spread,.15),this.sfx.zoom(r),this.hooks.scoped(r))}spawnShell(){const e=this.shells.find(l=>l.life<=0);if(!e)return;e.m.visible=!0,this.camera.getWorldPosition(this.tmpV);const t=new Q(1,0,0).applyQuaternion(this.camera.quaternion),r=new Q(0,1,0).applyQuaternion(this.camera.quaternion),a=new Q(0,0,-1).applyQuaternion(this.camera.quaternion);e.m.position.copy(this.tmpV).addScaledVector(t,.22).addScaledVector(r,-.1).addScaledVector(a,.2),e.v.copy(t).multiplyScalar(1.6+Math.random()*1.2).addScaledVector(r,1.6+Math.random()*1.4).addScaledVector(a,.5),e.rv.set((Math.random()-.5)*25,(Math.random()-.5)*25,(Math.random()-.5)*25),e.life=1.1}addDecal(e,t){const r=this.decals.find(l=>l.life<=0);if(!r)return;r.m.position.copy(e).addScaledVector(t,.015),r.m.lookAt(this.tmpV.copy(e).add(t)),r.m.rotation.z=Math.random()*Math.PI;const a=.7+Math.random()*.9;r.m.scale.set(a,a,a),r.m.visible=!0,r.life=7}throwNade(){if(this.nades<=0||this.state!=="playing")return;this.nades--,this.sfx.pin();const e=new ut(new od(.09,10,8),new Tt({color:4016684,roughness:.6}));e.castShadow=!0,this.camera.getWorldPosition(this.tmpV),this.camera.getWorldDirection(this.tmpD),e.position.copy(this.tmpV).addScaledVector(this.tmpD,.5);const t=this.tmpD.clone().multiplyScalar(13.5);t.y+=3.4,t.x+=this.vel.x*.35,t.z+=this.vel.z*.35,this.scene.add(e),this.nadesFly.push({m:e,v:t,fuse:1.45})}updateNades(e){for(let t=this.nadesFly.length-1;t>=0;t--){const r=this.nadesFly[t];r.v.y-=21*e,r.m.position.addScaledVector(r.v,e);const a=r.m.position,l=q0(a.x,a.z,a.y,.09,this.map.colliders);r.v.y<=0&&a.y<=l+.09&&(a.y=l+.09,r.v.y=Math.abs(r.v.y)*.42,r.v.x*=.72,r.v.z*=.72);for(const d of this.map.colliders)if(a.x>d.minX-.09&&a.x<d.maxX+.09&&a.z>d.minZ-.09&&a.z<d.maxZ+.09&&a.y<d.top){const f=a.x-(d.minX-.09),p=d.maxX+.09-a.x,x=a.z-(d.minZ-.09),_=d.maxZ+.09-a.z,g=Math.min(f,p,x,_);g===f?(a.x=d.minX-.09,r.v.x=-Math.abs(r.v.x)*.5):g===p?(a.x=d.maxX+.09,r.v.x=Math.abs(r.v.x)*.5):g===x?(a.z=d.minZ-.09,r.v.z=-Math.abs(r.v.z)*.5):(a.z=d.maxZ+.09,r.v.z=Math.abs(r.v.z)*.5)}r.fuse-=e;const u=r.fuse<.5?1+Math.sin(this.time*30)*.15:1;r.m.scale.set(u,u,u),r.fuse<=0&&(this.explode(a.clone()),this.scene.remove(r.m),this.nadesFly.splice(t,1))}}explode(e){this.sfx.boom(),this.boomLight.position.copy(e),this.boomLight.intensity=260,this.boomFlash.position.copy(e),this.boomT=.3,this.shake=Math.min(1.4,this.shake+.9),this.burst(e,16748608,26,9,.7,5),this.burst(e,16769184,18,12,.4,6),this.burst(e,5591114,20,5,1.1,2);for(const r of this.bots){if(!r.alive)continue;const a=r.group.position.distanceTo(e);a<6.5&&r.hit("body",130*(1-a/6.5))&&this.onBotKilled(r,!1)}const t=Math.hypot(this.pos.x-e.x,this.pos.z-e.z);t<5.5&&this.damagePlayer(50*(1-t/5.5),e)}burst(e,t,r,a,l,u=9){for(let d=0;d<r;d++){let f=this.particles.find(x=>x.life<=0);if(!f){if(this.particles.length>(yn?90:280))return;const x=new ut(new nn(.06,.06,.06),new Hn({color:t,transparent:!0}));this.scene.add(x),f={m:x,v:new Q,g:u,life:0,max:1},this.particles.push(f)}f.m.material.color.set(t),f.m.visible=!0,f.m.position.copy(e),f.v.set((Math.random()-.5)*2,Math.random()*1.4,(Math.random()-.5)*2).normalize().multiplyScalar(a*(.4+Math.random()*.8)),f.g=u,f.max=l*(.6+Math.random()*.7),f.life=f.max;const p=.6+Math.random();f.m.scale.set(p,p,p)}}spawnTracer(e,t,r){const a=this.tracers.find(f=>f.life<=0);if(!a)return;const l=e.clone().add(t).multiplyScalar(.5),u=e.distanceTo(t);a.m.position.copy(l),a.m.scale.set(.022,.022,Math.max(.1,u)),a.m.lookAt(t);const d=a.m.material;d.color.set(r),d.opacity=.85,a.m.visible=!0,a.life=.07}updateFx(e){for(const t of this.particles)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.v.y-=t.g*e,t.m.position.addScaledVector(t.v,e),t.m.position.y<.02&&(t.m.position.y=.02,t.v.y=Math.abs(t.v.y)*.3,t.v.x*=.7,t.v.z*=.7),t.m.material.opacity=Math.min(1,t.life/t.max*1.4)}for(const t of this.shells)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.v.y-=13*e,t.m.position.addScaledVector(t.v,e),t.m.position.y<.02&&(t.m.position.y=.02,t.v.y=Math.abs(t.v.y)*.35,t.v.x*=.6,t.v.z*=.6,t.rv.multiplyScalar(.5)),t.m.rotation.x+=t.rv.x*e,t.m.rotation.y+=t.rv.y*e,t.m.rotation.z+=t.rv.z*e}for(const t of this.decals)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.material.opacity=Math.min(.7,t.life*.5)}for(const t of this.tracers)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.material.opacity=t.life/.07*.85}if(this.flashT>0?(this.flashT-=e,this.setFlashOpacity(Math.max(0,this.flashT/.04))):this.setFlashOpacity(0),this.gunLight.intensity=Math.max(0,this.gunLight.intensity-e*260),this.boomT>0){this.boomT-=e;const t=Math.max(0,this.boomT/.3);this.boomLight.intensity=t*260,this.boomFlash.material.opacity=t*.95;const r=6+(1-t)*9;this.boomFlash.scale.set(r,r,1)}else this.boomFlash.material.opacity>0&&(this.boomFlash.material.opacity=0);this.recoilPitch*=Math.exp(-9*e),this.recoilYaw*=Math.exp(-9*e),this.kick=Math.max(0,this.kick-e*9),this.shake=Math.max(0,this.shake-e*2.6)}setFlashOpacity(e){this.flash.traverse(t=>{const r=t;r.material&&(r.material.opacity=e)})}updateDying(e){this.deathT+=e,this.camera.position.set(this.pos.x,Math.max(.45,this.pos.y+1.55-this.deathT*1.4),this.pos.z),this.camera.rotation.set(this.pitch*.4-this.deathT*.25,this.yaw,Math.min(1.15,this.deathT*1.6)),this.deathT>1.9&&this.endRound(!1)}updatePlaying(e){(this.lookDX!==0||this.lookDY!==0)&&(this.yaw-=this.lookDX*.0042,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-this.lookDY*.0042)),this.lookDX=0,this.lookDY=0);const t=re=>Math.max(-1,Math.min(1,re)),r=t((this.keys.KeyW?1:0)-(this.keys.KeyS?1:0)+this.joyY),a=t((this.keys.KeyD?1:0)-(this.keys.KeyA?1:0)+this.joyX),l=!!this.keys.ShiftLeft||!!this.keys.ShiftRight,u=oi[this.equipped],d=(l?2.6:5.7)*u.speed*(this.scoped?.42:1),f=Math.sin(this.yaw),p=Math.cos(this.yaw);let x=-f*r+p*a,_=-p*r-f*a;const g=Math.hypot(x,_);g>.01?(x=x/g*d,_=_/g*d):(x=0,_=0);const M=this.onGround?1-Math.exp(-13*e):1-Math.exp(-3.2*e);this.vel.x+=(x-this.vel.x)*M,this.vel.z+=(_-this.vel.z)*M,(this.keys.Space||this.touchJump)&&this.onGround&&(this.vel.y=9,this.onGround=!1,this.sfx.jump()),this.touchJump=!1,this.vel.y=Math.max(-18,this.vel.y-24*e),this.pos.y+=this.vel.y*e,Pg(this.pos,this.vel.x*e,this.vel.z*e,.42,this.map.colliders,this.map.bounds);const E=q0(this.pos.x,this.pos.z,this.pos.y,.42,this.map.colliders);this.vel.y<=0&&this.pos.y<=E?(this.pos.y=E,this.vel.y=0,this.onGround=!0):this.onGround=this.pos.y<=E+.03;const R=Math.hypot(this.vel.x,this.vel.z);if(this.onGround&&R>.6){this.bobT+=R*e*1.5,this.stepAcc+=R*e;const re=l?2.4:1.9;this.stepAcc>re&&(this.stepAcc=0,this.sfx.step())}const v=this.onGround&&R>.6?Math.sin(this.bobT*2)*.032*Math.min(1,R/5):0,y=(Math.random()-.5)*this.shake*.05,D=(Math.random()-.5)*this.shake*.05,P=(Math.random()-.5)*this.shake*.03;this.camera.position.set(this.pos.x+y,this.pos.y+1.55+v+D,this.pos.z),this.camera.rotation.set(this.pitch+this.recoilPitch+D*.4,this.yaw+this.recoilYaw,P);const b=this.scoped?18:75;Math.abs(this.camera.fov-b)>.05&&(this.camera.fov+=(b-this.camera.fov)*Math.min(1,16*e),this.camera.updateProjectionMatrix());const C=this.weapon;C.visible=!this.scoped;const L=Math.sin(Math.min(1,this.switchAnim)*Math.PI)*(this.switchAnim>=1?0:.16),k=.24+Math.sin(this.bobT)*.006*Math.min(1,R/5)-this.vel.x*.004*p-this.vel.z*.004*-f;C.position.x+=(k-C.position.x)*Math.min(1,12*e),C.position.y=-.22+Math.abs(Math.cos(this.bobT))*.008*Math.min(1,R/5)-L,C.position.z=-.45+this.kick*.055;let w=this.kick*.1;this.reloading&&(w-=Math.sin(Math.min(1,1-this.reloadT/this.reloadTotal)*Math.PI)*.85),this.switchAnim<1&&(w-=Math.sin(this.switchAnim*Math.PI)*.5),C.rotation.x=w,C.rotation.z=this.kick*.02;const I=R>1.2;this.spread=Math.max(0,this.spread-e*u.recover*(I?.45:1)-(this.onGround&&!I?e*1.2:0));const Y=oi[this.equipped];if(this.cooldown=Math.max(0,this.cooldown-e),this.switchAnim=Math.min(1,this.switchAnim+e/.28),this.reloading&&(this.reloadT-=e,this.reloadT<=0)){this.reloading=!1;const re=this.ammo[this.equipped],$=Math.min(Y.mag-re.mag,re.res);re.mag+=$,re.res-=$}this.firing&&Y.auto&&this.tryShoot();const W=this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z);let j=0;for(let re=this.bots.length-1;re>=0;re--){const $=this.bots[re],B=$.update(e,W);$.alive&&j++,B||($.dispose(this.scene),this.bots.splice(re,1))}for(let re=0;re<this.bots.length;re++)for(let $=re+1;$<this.bots.length;$++){const B=this.bots[re].group.position,G=this.bots[$].group.position,V=G.x-B.x,q=G.z-B.z,ne=Math.hypot(V,q);if(ne<.9&&ne>.001){const F=(.9-ne)/2;B.x-=V/ne*F,B.z-=q/ne*F,G.x+=V/ne*F,G.z+=q/ne*F}}this.updateNades(e),this.roundT-=e,j===0&&this.bots.every(re=>!re.alive)?(this.roundT=Math.max(this.roundT,.9),this.endRound(!0)):this.roundT<=0&&(this.roundT=0,this.endRound(!1));const ce=this.ammo[this.equipped];this.hooks.hud({hp:Math.max(0,Math.ceil(this.hp)),armor:Math.max(0,Math.ceil(this.armor)),mag:ce.mag,res:ce.res,nades:this.nades,timer:Math.max(0,Math.ceil(this.roundT)),spreadPx:Math.round(this.scoped?2:5+this.spread*30+(I?4:0)),enemies:j,reloading:this.reloading,weapon:`${Vn.indexOf(this.equipped)+1}·${oi[this.equipped].short}`,melee:!!oi[this.equipped].melee}),this.hooks.radar({px:this.pos.x,pz:this.pos.z,yaw:this.yaw,dots:this.bots.filter(re=>re.alive).map(re=>({x:re.group.position.x,z:re.group.position.z}))})}}const pw=["AK-47","UZI","P90","AWP","DEAGLE","НОЖ"],Si=(s,e)=>{s&&s.dataset.v!==e&&(s.dataset.v=e,s.textContent=e)},Z0=(s,e)=>{s&&(s.classList.remove(e),s.offsetWidth,s.classList.add(e))},mw=()=>U.jsx("svg",{viewBox:"0 0 16 16",className:"h-3.5 w-3.5 fill-current",children:U.jsx("path",{d:"M8 1a6 6 0 0 0-6 6c0 2.2 1.2 4 3 5v3h2v-2h2v2h2v-3c1.8-1 3-2.8 3-5a6 6 0 0 0-6-6zM5.5 9A1.5 1.5 0 1 1 7 7.5 1.5 1.5 0 0 1 5.5 9zm5 0A1.5 1.5 0 1 1 12 7.5 1.5 1.5 0 0 1 10.5 9z"})}),gw=()=>U.jsx("svg",{viewBox:"0 0 16 16",className:"h-4 w-4 fill-current",children:U.jsx("path",{d:"M8 1 2 3.5v4C2 11.6 4.6 14.6 8 15.5c3.4-.9 6-3.9 6-8v-4L8 1z"})}),Dg=({dim:s})=>U.jsxs("svg",{viewBox:"0 0 16 16",className:`h-4 w-4 ${s?"opacity-25":""}`,children:[U.jsx("path",{className:"fill-current",d:"M9 2h3v1.5h-2l-1 1.6A5 5 0 1 1 6.2 4L9 2z"}),U.jsx("circle",{cx:"8",cy:"9.5",r:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.4"})]}),vw=()=>U.jsx("span",{className:"mx-1.5 rounded-sm border border-[#3a4a5c] bg-[#141c25] px-1.5 py-px text-[10px] font-semibold tracking-wider text-[#9fb2c6]",children:"AK-47"});function ps({children:s,className:e,onDown:t,onUp:r,title:a}){return U.jsx("button",{"aria-label":a,className:`pointer-events-auto flex touch-none select-none items-center justify-center rounded-full border font-display transition-transform duration-75 active:scale-90 ${e??""}`,onPointerDown:l=>{l.stopPropagation(),l.currentTarget.setPointerCapture(l.pointerId),t==null||t()},onPointerUp:l=>{l.stopPropagation(),r==null||r()},onPointerCancel:l=>{l.stopPropagation(),r==null||r()},onContextMenu:l=>l.preventDefault(),children:s})}function xw({game:s,activeWeapon:e,onSelectWeapon:t,onPause:r}){const a=pt.useRef(null),l=pt.useRef(null),u=pt.useRef(null),d=54,f=pt.useRef({}),p=()=>{var E;(E=s())==null||E.setMoveInput(0,0),l.current&&(l.current.style.opacity="0"),u.current&&(u.current.style.transform="translate(0px,0px)")},x=E=>{if(E.pointerType==="mouse")return;const R=a.current.getBoundingClientRect(),v=E.clientX<R.width*.42?"move":"look";v==="move"&&Object.values(f.current).some(y=>y.role==="move")||(E.currentTarget.setPointerCapture(E.pointerId),f.current[E.pointerId]={role:v,ox:E.clientX,oy:E.clientY,lx:E.clientX,ly:E.clientY},v==="move"&&l.current&&(l.current.style.opacity="1",l.current.style.left=`${E.clientX}px`,l.current.style.top=`${E.clientY}px`))},_=E=>{var v,y;const R=f.current[E.pointerId];if(R)if(R.role==="move"){let D=E.clientX-R.ox,P=E.clientY-R.oy;const b=Math.hypot(D,P);b>d&&(D=D/b*d,P=P/b*d),u.current&&(u.current.style.transform=`translate(${D}px,${P}px)`),(v=s())==null||v.setMoveInput(D/d,-P/d)}else(y=s())==null||y.addLook(E.clientX-R.lx,E.clientY-R.ly),R.lx=E.clientX,R.ly=E.clientY},g=E=>{const R=f.current[E.pointerId];R&&(R.role==="move"&&p(),delete f.current[E.pointerId])},M=s;return U.jsxs(U.Fragment,{children:[U.jsx("div",{ref:a,className:"absolute inset-0 z-30 touch-none",onPointerDown:x,onPointerMove:_,onPointerUp:g,onPointerCancel:g}),U.jsx("div",{ref:l,className:"pointer-events-none fixed z-30 -ml-[62px] -mt-[62px] h-[124px] w-[124px] rounded-full border-2 border-[#f2a33c]/40 bg-[#f2a33c]/5",style:{opacity:0},children:U.jsx("div",{ref:u,className:"absolute left-1/2 top-1/2 -ml-[26px] -mt-[26px] h-[52px] w-[52px] rounded-full border-2 border-[#f2a33c]/70 bg-[#f2a33c]/25"})}),U.jsx("div",{className:"pointer-events-auto absolute left-1/2 top-16 z-40 flex -translate-x-1/2 gap-1",children:pw.map((E,R)=>U.jsx(ps,{title:E,onDown:()=>t(R),className:`h-9 rounded-md px-2.5 text-[11px] tracking-wider ${e===R?"border-[#f2a33c] bg-[#3a2a12]/90 text-[#f2a33c]":"border-[#2b3844] bg-[#12181f]/80 text-[#8b98a7]"}`,children:U.jsxs("span",{className:"skew-x-0",children:[R+1,"·",E]})},E))}),U.jsx(ps,{title:"Пауза",onDown:r,className:"absolute right-3 top-3 z-40 h-10 w-10 border-[#2b3844] bg-[#12181f]/85 text-[#c8d2dd]",children:U.jsx("svg",{viewBox:"0 0 16 16",className:"h-4 w-4 fill-current",children:U.jsx("path",{d:"M4 2h3v12H4zM9 2h3v12H9z"})})}),U.jsxs("div",{className:"absolute bottom-5 right-4 z-40 flex flex-col items-end gap-3",children:[U.jsxs("div",{className:"flex gap-3",children:[U.jsx(ps,{title:"Прицел",onDown:()=>{var E;return(E=M())==null?void 0:E.doScope()},className:"h-12 w-12 border-[#2b3844] bg-[#12181f]/85 text-[10px] text-[#c8d2dd]",children:"ОПТ"}),U.jsx(ps,{title:"Перезарядка",onDown:()=>{var E;return(E=M())==null?void 0:E.doReload()},className:"h-12 w-12 border-[#2b3844] bg-[#12181f]/85 text-[10px] text-[#c8d2dd]",children:"R"}),U.jsx(ps,{title:"Граната",onDown:()=>{var E;return(E=M())==null?void 0:E.doGrenade()},className:"h-12 w-12 border-[#2b3844] bg-[#12181f]/85 text-[#c9d68a]",children:U.jsx(Dg,{})})]}),U.jsxs("div",{className:"flex items-end gap-4",children:[U.jsx(ps,{title:"Прыжок",onDown:()=>{var E;return(E=M())==null?void 0:E.doJump()},className:"h-14 w-14 border-[#2b3844] bg-[#12181f]/85 text-[#c8d2dd]",children:U.jsx("svg",{viewBox:"0 0 16 16",className:"h-5 w-5 fill-current",children:U.jsx("path",{d:"M8 2 2 9h4v5h4V9h4z"})})}),U.jsx(ps,{title:"Огонь",onDown:()=>{var E;return(E=M())==null?void 0:E.setFiring(!0)},onUp:()=>{var E;return(E=M())==null?void 0:E.setFiring(!1)},className:"h-20 w-20 border-2 border-[#e0453a] bg-[#e0453a]/25 text-[#ff8a80]",children:U.jsxs("svg",{viewBox:"0 0 16 16",className:"h-8 w-8 fill-current",children:[U.jsx("circle",{cx:"8",cy:"8",r:"3"}),U.jsx("path",{d:"M8 1v3M8 12v3M1 8h3M12 8h3",stroke:"currentColor",strokeWidth:"1.6"})]})})]})]})]})}function _w(){var kt,Vt;const s=pt.useRef(null),e=pt.useRef(null),t=pt.useRef(null),[r,a]=pt.useState("menu"),[l,u]=pt.useState(!1),[d,f]=pt.useState([]),[p,x]=pt.useState(null),[_,g]=pt.useState(null),[M,E]=pt.useState(!1),[R,v]=pt.useState(1),[y,D]=pt.useState(!1),[P,b]=pt.useState(!1),[C,L]=pt.useState(null),[k,w]=pt.useState(!1),[I]=pt.useState(()=>Ng),[Y,W]=pt.useState(2),j=pt.useRef(null),ce=pt.useRef(null),re=pt.useRef(null),$=pt.useRef(null),B=pt.useRef(null),G=pt.useRef(null),V=pt.useRef(null),q=pt.useRef(null),ne=pt.useRef(null),F=pt.useRef(null),te=pt.useRef(null),Pe=pt.useRef(null),Be=pt.useRef(null),ze=pt.useRef(null),ie=pt.useRef(null),ve=pt.useRef(null),fe=pt.useRef(null),we=pt.useRef(0),Ve=pt.useRef(0),ke=pt.useRef(null),ct=pt.useRef(!1),Qe=pt.useRef(0),At=pt.useRef(!1),mt=pt.useRef(1);pt.useEffect(()=>{if(!s.current)return;const Je=De=>{const H=t.current;if(!H)return;const We=H.getContext("2d");if(!We)return;const gt=150,N=gt/2;We.clearRect(0,0,gt,gt),We.save(),We.translate(N,N),We.beginPath(),We.arc(0,0,N-2,0,7),We.fillStyle="rgba(11,17,23,0.85)",We.fill(),We.strokeStyle="rgba(242,163,60,0.55)",We.lineWidth=1.5,We.stroke(),We.beginPath(),We.arc(0,0,(N-2)*.55,0,7),We.strokeStyle="rgba(139,152,167,0.22)",We.lineWidth=1,We.stroke();const S=(N-8)/32,ee=Math.cos(De.yaw),ae=Math.sin(De.yaw),me=(_e,Ce)=>[_e*ee-Ce*ae,_e*ae+Ce*ee];We.strokeStyle="rgba(139,152,167,0.3)",We.beginPath(),[[-30,-30],[30,-30],[30,30],[-30,30]].forEach(([_e,Ce],qe)=>{const[Fe,Z]=me(_e-De.px,Ce-De.pz);qe===0?We.moveTo(Fe*S,Z*S):We.lineTo(Fe*S,Z*S)}),We.closePath(),We.stroke();const[Ue,ge]=me(0,-1);We.fillStyle="#f2a33c",We.beginPath(),We.arc(Ue*(N-9),ge*(N-9),2.4,0,7),We.fill();for(const _e of De.dots){const[Ce,qe]=me(_e.x-De.px,_e.z-De.pz);Math.hypot(Ce,qe)*S>N-8||(We.fillStyle="#e0453a",We.fillRect(Ce*S-2.5,qe*S-2.5,5,5))}We.fillStyle="#eae6dc",We.beginPath(),We.moveTo(0,-6),We.lineTo(4.4,5),We.lineTo(-4.4,5),We.closePath(),We.fill(),We.restore()},Ct=De=>{Si(j.current,String(De.hp)),Si(re.current,String(De.armor)),ce.current&&(ce.current.style.width=`${De.hp}%`,ce.current.style.background=De.hp>55?"#7fb069":De.hp>25?"#f2a33c":"#e0453a"),$.current&&($.current.style.width=`${De.armor}%`);const H=B.current;Si(H,String(De.mag)),H&&(H.style.color=De.mag===0?"#e0453a":De.mag<=5?"#f2a33c":"#eae6dc"),Si(G.current,`/ ${De.res}`);const We=Math.floor(De.timer/60),gt=String(De.timer%60).padStart(2,"0");Si(V.current,`${We}:${gt}`),V.current&&V.current.classList.toggle("blink-fast",De.timer<=10),Si(q.current,`ОСТАЛОСЬ: ${De.enemies}`),Pe.current&&Pe.current.style.setProperty("--g",`${De.spreadPx}px`),fe.current&&(fe.current.style.display=De.reloading?"block":"none");const N=De.hp>0&&De.hp<35;N!==At.current&&(At.current=N,E(N)),De.nades!==mt.current&&(mt.current=De.nades,v(De.nades)),Si(ke.current,De.weapon);const S=parseInt(De.weapon,10)-1;Number.isNaN(S)||W(ee=>ee===S?ee:S),De.melee&&(Si(B.current,"—"),Si(G.current,"")),De.melee!==ct.current&&(ct.current=De.melee,w(De.melee))},bt=new dw(s.current,{hud:Ct,score:(De,H)=>{Si(ne.current,String(De)),Si(F.current,String(H))},kills:De=>Si(te.current,String(De)),hitmark:De=>{const H=Be.current;H&&(H.classList.toggle("kill",De==="kill"),H.style.color=De==="kill"?"#e0453a":De==="head"?"#f2a33c":"#ffffff",Z0(H,"go"))},damage:(De,H)=>{const We=ze.current;We&&(We.style.transition="none",We.style.opacity=String(Math.min(.9,.3+De/40)),window.clearTimeout(we.current),we.current=window.setTimeout(()=>{We&&(We.style.transition="opacity .5s ease",We.style.opacity="0")},90)),ie.current&&(ie.current.style.transform=`rotate(${H}rad)`),Z0(ve.current,"show")},feed:De=>{const H=++Qe.current;f(We=>[{...De,id:H},...We].slice(0,5)),window.setTimeout(()=>f(We=>We.filter(gt=>gt.id!==H)),4200)},banner:De=>{window.clearTimeout(Ve.current),x({...De,id:++Qe.current}),Ve.current=window.setTimeout(()=>x(null),2700)},radar:Je,over:De=>{g(De),a("over")},scoped:De=>b(De),wheel:De=>L(De),lockedChange:De=>{u(De);const H=e.current;!De&&H&&H.state==="paused"&&a("paused")}});return e.current=bt,()=>{bt.dispose(),e.current=null}},[]);const dt=()=>{var Je;f([]),g(null),D(!0),window.setTimeout(()=>D(!1),9e3),a("play"),(Je=e.current)==null||Je.startMatch()};return U.jsxs("div",{className:"font-body relative h-full w-full touch-none select-none overflow-hidden overscroll-none bg-[#0d1218] text-[#eae6dc]",children:[U.jsx("div",{ref:s,className:"absolute inset-0 touch-none"}),(r==="play"||r==="paused")&&U.jsxs("div",{className:"pointer-events-none absolute inset-0 z-20",children:[C&&U.jsxs("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:[U.jsx("div",{className:"absolute inset-0 bg-[#0a0e13]/70"}),U.jsxs("div",{className:"relative h-[420px] w-[420px]",children:[U.jsx("div",{className:"absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2b3844] bg-[#12181f]/90"}),U.jsxs("div",{className:"font-display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center",children:[U.jsx("div",{className:"text-[13px] tracking-widest text-[#f2a33c]",children:(kt=C.items[C.active])==null?void 0:kt.short}),U.jsx("div",{className:"mt-0.5 text-[9px] tracking-[0.2em] text-[#8b98a7]",children:(Vt=C.items[C.active])==null?void 0:Vt.cat})]}),C.items.map((Je,Ct)=>{const bt=C.items.length,De=Ct/bt*Math.PI*2-Math.PI/2,H=165,We=Math.cos(De)*H,gt=Math.sin(De)*H,N=Ct===C.active;return U.jsxs("div",{className:`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center border px-2.5 py-1.5 text-center transition-colors duration-75 ${N?"border-[#f2a33c] bg-[#221409]/95":"border-[#2b3844] bg-[#12181f]/85"}`,style:{left:`calc(50% + ${We}px)`,top:`calc(50% + ${gt}px)`},children:[U.jsx("span",{className:`font-display text-[12px] leading-tight ${N?"text-[#f2a33c]":"text-[#c8d2dd]"}`,children:Je.short}),U.jsx("span",{className:"text-[8px] tracking-[0.15em] text-[#8b98a7]",children:Je.cat})]},Je.id)})]}),U.jsx("div",{className:"absolute bottom-14 left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-[0.25em] text-[#8b98a7]",children:"ВЕДИТЕ МЫШЬ — ВЫБОР · ОТПУСТИТЕ TAB"})]}),U.jsx("div",{className:"pointer-events-none absolute inset-0 z-10",style:{background:"radial-gradient(ellipse at center, transparent 58%, rgba(4,7,11,0.45) 100%)"}}),U.jsxs("div",{className:"absolute left-1/2 top-3 flex -translate-x-1/2 items-stretch",children:[U.jsxs("div",{className:"flex items-center gap-2 border border-[#2b4a63] bg-[#101b26]/90 px-4 py-1.5",children:[U.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#6fb7e8]",children:"ВЫ"}),U.jsx("span",{ref:ne,className:"font-display text-xl leading-none text-[#6fb7e8]",children:"0"})]}),U.jsxs("div",{className:"flex flex-col items-center justify-center border-y border-[#3a4a5c] bg-[#12181f]/95 px-5 py-1",children:[U.jsx("span",{ref:V,className:"font-display text-2xl leading-none tracking-wider",children:"1:55"}),U.jsx("span",{ref:q,className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"ОСТАЛОСЬ: 0"})]}),U.jsxs("div",{className:"flex items-center gap-2 border border-[#5c3a24] bg-[#221409]/90 px-4 py-1.5",children:[U.jsx("span",{ref:F,className:"font-display text-xl leading-none text-[#f2a33c]",children:"0"}),U.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#f2a33c]",children:"БОТЫ"})]})]}),U.jsxs("div",{className:"absolute left-4 top-4",children:[U.jsxs("div",{className:"relative",children:[U.jsx("canvas",{ref:t,width:150,height:150,className:"h-[150px] w-[150px]"}),U.jsx("div",{className:"radar-sweep absolute inset-0 rounded-full border border-[#f2a33c]/30"})]}),U.jsxs("div",{className:"mt-1.5 border border-[#2b3844] bg-[#12181f]/90 px-3 py-1 text-[11px] font-bold tracking-widest text-[#8b98a7]",children:["УСТРАНЕНО: ",U.jsx("span",{ref:te,className:"font-display text-sm text-[#f2a33c]",children:"0"})]})]}),U.jsx("div",{className:"absolute right-4 top-4 flex flex-col items-end gap-1",children:d.map(Je=>U.jsxs("div",{className:"feed-in flex items-center border border-[#2b3844] bg-[#12181f]/90 px-2.5 py-1 text-[12px] font-semibold",children:[U.jsx("span",{className:Je.byPlayer&&Je.killer==="ВЫ"?"text-[#6fb7e8]":"text-[#f2a33c]",children:Je.killer}),Je.head?U.jsx("span",{className:"mx-1.5 text-[#e0453a]",children:U.jsx(mw,{})}):Je.killer==="Снабжение"||Je.killer==="МАГАЗИН"?U.jsx("span",{className:"mx-1.5 text-[#7fd08a]",children:"»"}):U.jsx(vw,{}),U.jsx("span",{className:Je.victim==="ВЫ"?"text-[#e0453a]":"text-[#c8d2dd]",children:Je.victim})]},Je.id))}),U.jsxs("div",{ref:Pe,className:"xh absolute left-1/2 top-1/2 z-10 h-0 w-0",style:{display:P?"none":void 0},children:[U.jsx("span",{className:"xh-t"}),U.jsx("span",{className:"xh-b"}),U.jsx("span",{className:"xh-l"}),U.jsx("span",{className:"xh-r"}),U.jsx("span",{className:"xh-dot"})]}),P&&U.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10",children:[U.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 27.5%, rgba(4,7,9,0.985) 29%)"}}),U.jsx("div",{className:"absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/85"}),U.jsx("div",{className:"absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-black/85"}),U.jsx("div",{className:"absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/70"}),U.jsx("div",{className:"absolute bottom-[16%] left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]/70",children:"AWP · 4× ОПТИКА"})]}),U.jsx("div",{ref:Be,className:"hitmark absolute left-1/2 top-1/2 z-10 -ml-[11px] -mt-[11px]",children:U.jsx("svg",{viewBox:"0 0 22 22",className:"h-[22px] w-[22px] stroke-current",strokeWidth:"2.4",fill:"none",children:U.jsx("path",{d:"M3 3 8 8M19 3l-5 5M3 19l5-5M19 19l-5-5"})})}),U.jsx("div",{className:"absolute left-1/2 top-1/2 z-10",children:U.jsx("div",{ref:ve,className:"dmg-arrow",children:U.jsx("div",{ref:ie,children:U.jsx("svg",{viewBox:"0 0 24 24",className:"absolute -translate-x-1/2 fill-[#e0453a]",style:{top:-116,left:0,width:26,height:26,filter:"drop-shadow(0 0 6px rgba(224,69,58,.8))"},children:U.jsx("path",{d:"M12 2 22 18h-7v4h-6v-4H2z"})})})})}),U.jsx("div",{ref:fe,className:"blink-fast absolute left-1/2 top-[57%] -translate-x-1/2 text-[13px] font-bold tracking-[0.3em] text-[#f2a33c]",style:{display:"none"},children:"ПЕРЕЗАРЯДКА"}),p&&U.jsxs("div",{className:"absolute left-1/2 top-[30%] -translate-x-1/2 text-center",children:[U.jsx("div",{className:"banner-in font-display text-5xl md:text-6xl",style:{color:p.tone==="win"?"#f2a33c":p.tone==="lose"?"#e0453a":"#eae6dc",textShadow:"0 4px 0 rgba(0,0,0,.55), 0 0 44px rgba(0,0,0,.6)"},children:p.title}),p.sub&&U.jsx("div",{className:"banner-sub-in mt-2 text-sm font-semibold tracking-[0.35em] text-[#c8d2dd] uppercase",style:{textShadow:"0 2px 6px rgba(0,0,0,.8)"},children:p.sub})]},p.id),U.jsxs("div",{className:"absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-1.5 border border-[#2b3844] bg-[#12181f]/85 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#8b98a7] md:flex",children:[U.jsx("span",{className:"key",children:"TAB"})," АРСЕНАЛ · ",U.jsx("span",{className:"key",children:"1–9"})," / КОЛЕСО — СМЕНА"]}),U.jsxs("div",{className:"absolute bottom-4 left-3 w-40 md:bottom-5 md:left-5 md:w-[240px]",children:[U.jsxs("div",{className:"flex items-end gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2.5",children:[U.jsx("svg",{viewBox:"0 0 24 24",className:"mb-1 h-6 w-6 fill-[#e0453a]",children:U.jsx("path",{d:"M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"})}),U.jsxs("div",{className:"flex-1",children:[U.jsxs("div",{className:"flex items-baseline justify-between",children:[U.jsx("span",{ref:j,className:"font-display text-3xl leading-none",children:"100"}),U.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"HP"})]}),U.jsx("div",{className:"mt-1.5 h-[7px] w-full bg-[#232d38]",children:U.jsx("div",{ref:ce,className:"h-full w-full transition-[width] duration-200"})})]})]}),U.jsxs("div",{className:"mt-1.5 flex items-center gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2",children:[U.jsx("span",{className:"text-[#6fb7e8]",children:U.jsx(gw,{})}),U.jsx("div",{className:"flex-1",children:U.jsx("div",{className:"h-[5px] w-full bg-[#232d38]",children:U.jsx("div",{ref:$,className:"h-full w-full bg-[#6fb7e8] transition-[width] duration-200"})})}),U.jsx("span",{ref:re,className:"font-display text-base leading-none text-[#6fb7e8]",children:"100"})]})]}),U.jsxs("div",{className:"absolute bottom-5 right-5 text-right",children:[U.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/90 px-5 py-2.5",children:[U.jsxs("div",{className:"flex items-baseline justify-end gap-2",children:[k&&U.jsx("span",{className:"font-display text-sm tracking-widest text-[#f2a33c]",children:"БЛИЖНИЙ БОЙ"}),U.jsx("span",{ref:B,className:`font-display text-5xl leading-none ${k?"hidden":""}`,children:"30"}),U.jsx("span",{ref:G,className:`font-display text-lg leading-none text-[#8b98a7] ${k?"hidden":""}`,children:"/ 90"})]}),U.jsxs("div",{className:"mt-1 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]",children:[U.jsx("span",{ref:ke,children:"3·DEAGLE"}),U.jsx("span",{className:"ml-2 text-[#5f6d7d]",children:"TAB — АРСЕНАЛ"})]})]}),U.jsxs("div",{className:"mt-1.5 flex items-center justify-end gap-1.5 border border-[#2b3844] bg-[#12181f]/90 px-4 py-1.5 text-[#c9d68a]",children:[U.jsx("span",{className:"mr-1 text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"ГРАНАТЫ"}),[0,1,2].map(Je=>U.jsx(Dg,{dim:Je>=R},Je))]})]}),y&&!I&&U.jsx("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 border border-[#2b3844] bg-[#12181f]/85 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-[#8b98a7]",children:"WASD — движение · ЛКМ — огонь · TAB — арсенал · 1–6 / колесо — смена · ПКМ — оптика · R — перезарядка · G — граната"}),y&&I&&U.jsxs("div",{className:"absolute bottom-32 left-4 z-40 max-w-[46vw] border border-[#2b3844] bg-[#12181f]/85 px-3 py-1.5 text-[10px] font-semibold leading-relaxed tracking-wider text-[#8b98a7]",children:["СЛЕВА — ДЖОЙСТИК · СПРАВА — ОБЗОР",U.jsx("br",{}),"КРАСНАЯ КНОПКА — ОГОНЬ"]}),!I&&!l&&r==="play"&&U.jsxs("div",{className:"absolute left-1/2 top-[62%] -translate-x-1/2 border border-[#f2a33c]/60 bg-[#221409]/90 px-5 py-2 text-center text-sm font-bold tracking-[0.14em] text-[#f2a33c]",children:["ДВИГАЙТЕ МЫШЬ — ОБЗОР · ЛКМ — ОГОНЬ",U.jsx("div",{className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"R — ПЕРЕЗАРЯДКА · G — ГРАНАТА · КРАЙ ЭКРАНА: ВЕРНИТЕ МЫШЬ В ЦЕНТР"})]}),U.jsx("div",{ref:ze,className:"vignette absolute inset-0 z-30"}),M&&U.jsx("div",{className:"lowhp-pulse pointer-events-none absolute inset-0 z-30"})]}),I&&r==="play"&&U.jsx(xw,{game:()=>e.current,activeWeapon:Y,onSelectWeapon:Je=>{var Ct;return(Ct=e.current)==null?void 0:Ct.switchWeaponByIndex(Je)},onPause:()=>{var Je;return(Je=e.current)==null?void 0:Je.pause()}}),r==="menu"&&U.jsxs("div",{className:"absolute inset-0 z-40",children:[U.jsx("div",{className:"menu-scan absolute inset-0",style:{background:"linear-gradient(100deg, rgba(10,14,19,.96) 0%, rgba(10,14,19,.92) 44%, rgba(10,14,19,.55) 72%, rgba(10,14,19,.25) 100%)"}}),U.jsx("div",{className:"smoke absolute inset-0"}),U.jsx("div",{className:"hazard hazard-anim absolute top-0 left-0 h-2 w-full opacity-80"}),U.jsx("div",{className:"hazard hazard-anim absolute bottom-0 left-0 h-2 w-full opacity-80"}),U.jsxs("div",{className:"relative flex h-full flex-col justify-start gap-8 overflow-y-auto px-6 py-10 md:flex-row md:items-center md:justify-between md:overflow-visible md:px-16 md:py-0 lg:px-24",children:[U.jsxs("div",{className:"max-w-xl",children:[U.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[U.jsx("span",{className:"inline-block h-[3px] w-10 bg-[#f2a33c]"}),U.jsx("span",{className:"text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]",children:"БРАУЗЕРНЫЙ ШУТЕР · THREE.JS"})]}),U.jsxs("div",{className:"mb-3 inline-flex items-center gap-2 border border-[#2b3844] bg-[#12181f]/80 px-2.5 py-1 text-[10px] font-bold tracking-[0.2em]",children:[U.jsx("span",{className:`inline-block h-1.5 w-1.5 rounded-full ${yn?"bg-[#f2a33c]":"bg-[#7fd08a]"}`}),U.jsx("span",{className:yn?"text-[#f2a33c]":"text-[#7fd08a]",children:yn?Lg?"ЭКОНОМ-ГРАФИКА (слабый GPU)":"ЭКОНОМ-ГРАФИКА (сенсор)":"ПОЛНАЯ ГРАФИКА"}),U.jsx("span",{className:"text-[#5f6d7d]",children:"· авто-детект + адаптация под FPS"})]}),U.jsxs("h1",{className:"title-glow font-display text-[64px] leading-[0.9] md:text-[120px]",children:["CS",U.jsx("span",{className:"text-[#f2a33c]",children:" 3D"})]}),U.jsxs("p",{className:"mt-5 max-w-md text-[15px] leading-relaxed text-[#aab6c4]",children:["Зачистите точку. AK-47, гранаты и живые боты, которые стрейфят и дают очередь в ответ. Возьмите ",U.jsx("span",{className:"font-bold text-[#eae6dc]",children:"3 раунда"})," быстрее, чем вас застрелят."]}),U.jsx("button",{onClick:dt,className:"btn-blade mt-8 inline-block bg-[#f2a33c] px-12 py-4 text-xl text-[#14100a] hover:bg-[#ffc069]",children:U.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В БОЙ"})}),U.jsx("div",{className:"mt-4 text-[11px] font-semibold tracking-[0.25em] text-[#5f6d7d]",children:I?"СЕНСОРНОЕ УПРАВЛЕНИЕ · ДЖОЙСТИК + ЗОНА ОБЗОРА":"КЛИК — ЗАХВАТ МЫШИ · ESC — ПАУЗА"})]}),U.jsxs("div",{className:"flex w-full max-w-sm flex-col gap-4",children:[U.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[U.jsxs("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:["УПРАВЛЕНИЕ ",I&&U.jsx("span",{className:"ml-1 text-[#6fb7e8]",children:"· СЕНСОР"})]}),I?U.jsxs("div",{className:"grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 text-[12px] text-[#aab6c4]",children:[U.jsx("span",{className:"key",children:"◐"}),U.jsx("span",{children:"левая зона — джойстик движения"}),U.jsx("span",{className:"key",children:"◑"}),U.jsx("span",{children:"правая зона — обзор (веди пальцем)"}),U.jsx("span",{className:"key",children:"●"}),U.jsx("span",{children:"красная кнопка — огонь (удерживай)"}),U.jsx("span",{className:"key",children:"R"}),U.jsx("span",{children:"кнопка перезарядки"}),U.jsx("span",{className:"key",children:"G"}),U.jsx("span",{children:"кнопка гранаты"}),U.jsx("span",{className:"key",children:"⌖"}),U.jsx("span",{children:"кнопка прыжка — запрыгивай на ящики и контейнеры"}),U.jsx("span",{className:"key",children:"1–6"}),U.jsx("span",{children:"слоты оружия сверху — тап для выбора"}),U.jsx("span",{className:"key",children:"ОПТ"}),U.jsx("span",{children:"оптика AWP ×4"}),U.jsx("span",{className:"key",children:"▮▮"}),U.jsx("span",{children:"пауза (справа сверху)"})]}):U.jsxs("div",{className:"grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 text-[12px] text-[#aab6c4]",children:[U.jsxs("span",{children:[U.jsx("span",{className:"key",children:"W"})," ",U.jsx("span",{className:"key",children:"A"})," ",U.jsx("span",{className:"key",children:"S"})," ",U.jsx("span",{className:"key",children:"D"})]}),U.jsx("span",{children:"передвижение"}),U.jsx("span",{children:U.jsx("span",{className:"key",children:"МЫШЬ"})}),U.jsx("span",{children:"обзор — движение мыши, курсор в бою скрыт"}),U.jsx("span",{children:U.jsx("span",{className:"key",children:"ЛКМ"})}),U.jsx("span",{children:"огонь из AK-47"}),U.jsx("span",{children:U.jsx("span",{className:"key",children:"R"})}),U.jsx("span",{children:"перезарядка"}),U.jsx("span",{children:U.jsx("span",{className:"key",children:"G"})}),U.jsx("span",{children:"граната"}),U.jsx("span",{children:U.jsx("span",{className:"key",children:"SHIFT"})}),U.jsx("span",{children:"тихий шаг — точность выше"}),U.jsx("span",{children:U.jsx("span",{className:"key",children:"SPACE"})}),U.jsx("span",{children:"прыжок — можно запрыгивать на ящики и контейнеры"}),U.jsx("span",{children:U.jsx("span",{className:"key",children:"TAB"})}),U.jsx("span",{children:"арсенал: AK-47, UZI, P90, AWP, Deagle и нож"}),U.jsxs("span",{children:[U.jsx("span",{className:"key",children:"1"}),"–",U.jsx("span",{className:"key",children:"9"})," / колесо"]}),U.jsx("span",{children:"быстрая смена оружия"}),U.jsx("span",{children:U.jsx("span",{className:"key",children:"ПКМ"})}),U.jsx("span",{children:"оптика AWP ×4"}),U.jsx("span",{children:U.jsx("span",{className:"key",children:"ESC"})}),U.jsx("span",{children:"пауза"})]})]}),U.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[U.jsx("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:"БРИФИНГ"}),U.jsxs("ul",{className:"space-y-1.5 px-4 py-3 text-[12px] leading-relaxed text-[#aab6c4]",children:[U.jsxs("li",{children:["Карта — ",U.jsx("span",{className:"font-bold text-[#f2a33c]",children:"Dust II"}),": лонг A, мид, вышка с лестницей — заберитесь на неё или на контейнеры."]}),U.jsxs("li",{children:["Арсенал — ",U.jsx("span",{className:"key",children:"TAB"}),": AK-47, UZI, P90, AWP, Deagle и нож. Колесо мыши листает стволы."]}),U.jsxs("li",{children:[U.jsx("span",{className:"font-bold text-[#eae6dc]",children:"Хедшот"})," — урон ×4. AWP убивает с тела, ",U.jsx("span",{className:"key",children:"ПКМ"})," — оптика ×4."]}),U.jsxs("li",{children:[U.jsx("span",{className:"key",children:"SPACE"})," — прыжок: запрыгивайте на ящики, бочки и контейнеры для обзора сверху."]}),U.jsxs("li",{children:["Матч до ",U.jsx("span",{className:"font-bold text-[#f2a33c]",children:"3 побед"}),", раунд — 1:55. Боты злеют с каждым раундом."]})]})]})]})]})]}),r==="paused"&&U.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/85",children:U.jsxs("div",{className:"w-[380px] border border-[#2b3844] bg-[#12181f]",children:[U.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),U.jsxs("div",{className:"px-8 py-7",children:[U.jsx("div",{className:"font-display text-4xl tracking-wider",children:"ПАУЗА"}),U.jsx("div",{className:"mt-1 text-[11px] font-semibold tracking-[0.3em] text-[#8b98a7]",children:"ОПЕРАЦИЯ ПРИОСТАНОВЛЕНА"}),U.jsxs("div",{className:"mt-6 flex flex-col gap-2.5",children:[U.jsx("button",{onClick:()=>{var Je;(Je=e.current)==null||Je.resume(),a("play")},className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:U.jsx("span",{className:"inline-block skew-x-[8deg]",children:"ПРОДОЛЖИТЬ"})}),U.jsx("button",{onClick:()=>{var Je;(Je=e.current)==null||Je.toMenu(),a("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:U.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В МЕНЮ"})})]}),U.jsxs("div",{className:"mt-6 border-t border-[#2b3844] pt-4 text-[11px] leading-relaxed text-[#5f6d7d]",children:[U.jsx("span",{className:"key",children:"W"}),U.jsx("span",{className:"key",children:"A"}),U.jsx("span",{className:"key",children:"S"}),U.jsx("span",{className:"key",children:"D"})," движение · ",U.jsx("span",{className:"key",children:"ЛКМ"})," огонь · ",U.jsx("span",{className:"key",children:"R"})," перезарядка · ",U.jsx("span",{className:"key",children:"G"})," граната"]})]})]})}),r==="over"&&_&&U.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/80",children:U.jsxs("div",{className:"w-[440px] border border-[#2b3844] bg-[#12181f]",children:[U.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),U.jsxs("div",{className:"px-10 py-8 text-center",children:[U.jsx("div",{className:"text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]",children:"МАТЧ ЗАВЕРШЁН"}),U.jsx("div",{className:"title-glow font-display mt-2 text-6xl",style:{color:_.result==="victory"?"#f2a33c":"#e0453a"},children:_.result==="victory"?"ПОБЕДА":"ПОРАЖЕНИЕ"}),U.jsxs("div",{className:"font-display mt-3 text-3xl text-[#eae6dc]",children:[U.jsx("span",{className:"text-[#6fb7e8]",children:_.won}),U.jsx("span",{className:"mx-2 text-[#5f6d7d]",children:":"}),U.jsx("span",{className:"text-[#f2a33c]",children:_.lost})]}),U.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-2.5",children:[U.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[U.jsx("div",{className:"font-display text-3xl text-[#f2a33c]",children:_.kills}),U.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:"УСТРАНЕНО"})]}),U.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[U.jsx("div",{className:"font-display text-3xl text-[#e0453a]",children:_.deaths}),U.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:"СМЕРТЕЙ"})]})]}),U.jsxs("div",{className:"mt-7 flex flex-col gap-2.5",children:[U.jsx("button",{onClick:dt,className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:U.jsx("span",{className:"inline-block skew-x-[8deg]",children:"ЕЩЁ РАЗ"})}),U.jsx("button",{onClick:()=>{var Je;(Je=e.current)==null||Je.toMenu(),a("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:U.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В МЕНЮ"})})]})]})]})})]})}Mx.createRoot(document.getElementById("root")).render(U.jsx(_w,{}));
