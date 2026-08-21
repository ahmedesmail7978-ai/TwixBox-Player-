(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function ax(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var nf={exports:{}},no={},rf={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function ox(){if(Rm)return Mt;Rm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function x(F,ee,be){this.props=F,this.context=ee,this.refs=R,this.updater=be||S}x.prototype.isReactComponent={},x.prototype.setState=function(F,ee){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ee,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=x.prototype;function I(F,ee,be){this.props=F,this.context=ee,this.refs=R,this.updater=be||S}var P=I.prototype=new _;P.constructor=I,E(P,x.prototype),P.isPureReactComponent=!0;var b=Array.isArray,C=Object.prototype.hasOwnProperty,U={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function w(F,ee,be){var Ue,Fe={},se=null,pe=null;if(ee!=null)for(Ue in ee.ref!==void 0&&(pe=ee.ref),ee.key!==void 0&&(se=""+ee.key),ee)C.call(ee,Ue)&&!V.hasOwnProperty(Ue)&&(Fe[Ue]=ee[Ue]);var ue=arguments.length-2;if(ue===1)Fe.children=be;else if(1<ue){for(var Se=Array(ue),ze=0;ze<ue;ze++)Se[ze]=arguments[ze+2];Fe.children=Se}if(F&&F.defaultProps)for(Ue in ue=F.defaultProps,ue)Fe[Ue]===void 0&&(Fe[Ue]=ue[Ue]);return{$$typeof:s,type:F,key:se,ref:pe,props:Fe,_owner:U.current}}function N(F,ee){return{$$typeof:s,type:F.type,key:ee,ref:F.ref,props:F.props,_owner:F._owner}}function j(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function X(F){var ee={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(be){return ee[be]})}var $=/\/+/g;function D(F,ee){return typeof F=="object"&&F!==null&&F.key!=null?X(""+F.key):ee.toString(36)}function G(F,ee,be,Ue,Fe){var se=typeof F;(se==="undefined"||se==="boolean")&&(F=null);var pe=!1;if(F===null)pe=!0;else switch(se){case"string":case"number":pe=!0;break;case"object":switch(F.$$typeof){case s:case e:pe=!0}}if(pe)return pe=F,Fe=Fe(pe),F=Ue===""?"."+D(pe,0):Ue,b(Fe)?(be="",F!=null&&(be=F.replace($,"$&/")+"/"),G(Fe,ee,be,"",function(ze){return ze})):Fe!=null&&(j(Fe)&&(Fe=N(Fe,be+(!Fe.key||pe&&pe.key===Fe.key?"":(""+Fe.key).replace($,"$&/")+"/")+F)),ee.push(Fe)),1;if(pe=0,Ue=Ue===""?".":Ue+":",b(F))for(var ue=0;ue<F.length;ue++){se=F[ue];var Se=Ue+D(se,ue);pe+=G(se,ee,be,Se,Fe)}else if(Se=g(F),typeof Se=="function")for(F=Se.call(F),ue=0;!(se=F.next()).done;)se=se.value,Se=Ue+D(se,ue++),pe+=G(se,ee,be,Se,Fe);else if(se==="object")throw ee=String(F),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return pe}function z(F,ee,be){if(F==null)return F;var Ue=[],Fe=0;return G(F,Ue,"","",function(se){return ee.call(be,se,Fe++)}),Ue}function k(F){if(F._status===-1){var ee=F._result;ee=ee(),ee.then(function(be){(F._status===0||F._status===-1)&&(F._status=1,F._result=be)},function(be){(F._status===0||F._status===-1)&&(F._status=2,F._result=be)}),F._status===-1&&(F._status=0,F._result=ee)}if(F._status===1)return F._result.default;throw F._result}var H={current:null},W={transition:null},ie={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:W,ReactCurrentOwner:U};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:z,forEach:function(F,ee,be){z(F,function(){ee.apply(this,arguments)},be)},count:function(F){var ee=0;return z(F,function(){ee++}),ee},toArray:function(F){return z(F,function(ee){return ee})||[]},only:function(F){if(!j(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Mt.Component=x,Mt.Fragment=t,Mt.Profiler=o,Mt.PureComponent=I,Mt.StrictMode=r,Mt.Suspense=p,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,Mt.act=ne,Mt.cloneElement=function(F,ee,be){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Ue=E({},F.props),Fe=F.key,se=F.ref,pe=F._owner;if(ee!=null){if(ee.ref!==void 0&&(se=ee.ref,pe=U.current),ee.key!==void 0&&(Fe=""+ee.key),F.type&&F.type.defaultProps)var ue=F.type.defaultProps;for(Se in ee)C.call(ee,Se)&&!V.hasOwnProperty(Se)&&(Ue[Se]=ee[Se]===void 0&&ue!==void 0?ue[Se]:ee[Se])}var Se=arguments.length-2;if(Se===1)Ue.children=be;else if(1<Se){ue=Array(Se);for(var ze=0;ze<Se;ze++)ue[ze]=arguments[ze+2];Ue.children=ue}return{$$typeof:s,type:F.type,key:Fe,ref:se,props:Ue,_owner:pe}},Mt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},Mt.createElement=w,Mt.createFactory=function(F){var ee=w.bind(null,F);return ee.type=F,ee},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(F){return{$$typeof:d,render:F}},Mt.isValidElement=j,Mt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:k}},Mt.memo=function(F,ee){return{$$typeof:h,type:F,compare:ee===void 0?null:ee}},Mt.startTransition=function(F){var ee=W.transition;W.transition={};try{F()}finally{W.transition=ee}},Mt.unstable_act=ne,Mt.useCallback=function(F,ee){return H.current.useCallback(F,ee)},Mt.useContext=function(F){return H.current.useContext(F)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(F){return H.current.useDeferredValue(F)},Mt.useEffect=function(F,ee){return H.current.useEffect(F,ee)},Mt.useId=function(){return H.current.useId()},Mt.useImperativeHandle=function(F,ee,be){return H.current.useImperativeHandle(F,ee,be)},Mt.useInsertionEffect=function(F,ee){return H.current.useInsertionEffect(F,ee)},Mt.useLayoutEffect=function(F,ee){return H.current.useLayoutEffect(F,ee)},Mt.useMemo=function(F,ee){return H.current.useMemo(F,ee)},Mt.useReducer=function(F,ee,be){return H.current.useReducer(F,ee,be)},Mt.useRef=function(F){return H.current.useRef(F)},Mt.useState=function(F){return H.current.useState(F)},Mt.useSyncExternalStore=function(F,ee,be){return H.current.useSyncExternalStore(F,ee,be)},Mt.useTransition=function(){return H.current.useTransition()},Mt.version="18.3.1",Mt}var Cm;function Oh(){return Cm||(Cm=1,rf.exports=ox()),rf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function lx(){if(Pm)return no;Pm=1;var s=Oh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,h){var v,y={},g=null,S=null;h!==void 0&&(g=""+h),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(y[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:e,type:d,key:g,ref:S,props:y,_owner:o.current}}return no.Fragment=t,no.jsx=u,no.jsxs=u,no}var Nm;function cx(){return Nm||(Nm=1,nf.exports=lx()),nf.exports}var O=cx(),Al={},sf={exports:{}},jn={},af={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function ux(){return Lm||(Lm=1,(function(s){function e(W,ie){var ne=W.length;W.push(ie);e:for(;0<ne;){var F=ne-1>>>1,ee=W[F];if(0<o(ee,ie))W[F]=ie,W[ne]=ee,ne=F;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ie=W[0],ne=W.pop();if(ne!==ie){W[0]=ne;e:for(var F=0,ee=W.length,be=ee>>>1;F<be;){var Ue=2*(F+1)-1,Fe=W[Ue],se=Ue+1,pe=W[se];if(0>o(Fe,ne))se<ee&&0>o(pe,Fe)?(W[F]=pe,W[se]=ne,F=se):(W[F]=Fe,W[Ue]=ne,F=Ue);else if(se<ee&&0>o(pe,ne))W[F]=pe,W[se]=ne,F=se;else break e}}return ie}function o(W,ie){var ne=W.sortIndex-ie.sortIndex;return ne!==0?ne:W.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],h=[],v=1,y=null,g=3,S=!1,E=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(W){for(var ie=t(h);ie!==null;){if(ie.callback===null)r(h);else if(ie.startTime<=W)r(h),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=t(h)}}function b(W){if(R=!1,P(W),!E)if(t(p)!==null)E=!0,k(C);else{var ie=t(h);ie!==null&&H(b,ie.startTime-W)}}function C(W,ie){E=!1,R&&(R=!1,_(w),w=-1),S=!0;var ne=g;try{for(P(ie),y=t(p);y!==null&&(!(y.expirationTime>ie)||W&&!X());){var F=y.callback;if(typeof F=="function"){y.callback=null,g=y.priorityLevel;var ee=F(y.expirationTime<=ie);ie=s.unstable_now(),typeof ee=="function"?y.callback=ee:y===t(p)&&r(p),P(ie)}else r(p);y=t(p)}if(y!==null)var be=!0;else{var Ue=t(h);Ue!==null&&H(b,Ue.startTime-ie),be=!1}return be}finally{y=null,g=ne,S=!1}}var U=!1,V=null,w=-1,N=5,j=-1;function X(){return!(s.unstable_now()-j<N)}function $(){if(V!==null){var W=s.unstable_now();j=W;var ie=!0;try{ie=V(!0,W)}finally{ie?D():(U=!1,V=null)}}else U=!1}var D;if(typeof I=="function")D=function(){I($)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,z=G.port2;G.port1.onmessage=$,D=function(){z.postMessage(null)}}else D=function(){x($,0)};function k(W){V=W,U||(U=!0,D())}function H(W,ie){w=x(function(){W(s.unstable_now())},ie)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,k(C))},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(W){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var ne=g;g=ie;try{return W()}finally{g=ne}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,ie){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ne=g;g=W;try{return ie()}finally{g=ne}},s.unstable_scheduleCallback=function(W,ie,ne){var F=s.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?F+ne:F):ne=F,W){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ne+ee,W={id:v++,callback:ie,priorityLevel:W,startTime:ne,expirationTime:ee,sortIndex:-1},ne>F?(W.sortIndex=ne,e(h,W),t(p)===null&&W===t(h)&&(R?(_(w),w=-1):R=!0,H(b,ne-F))):(W.sortIndex=ee,e(p,W),E||S||(E=!0,k(C))),W},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(W){var ie=g;return function(){var ne=g;g=ie;try{return W.apply(this,arguments)}finally{g=ne}}}})(of)),of}var Dm;function fx(){return Dm||(Dm=1,af.exports=ux()),af.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function hx(){if(Im)return jn;Im=1;var s=Oh(),e=fx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function g(n){return p.call(y,n)?!0:p.call(v,n)?!1:h.test(n)?y[n]=!0:(v[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,f,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,I);x[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,I);x[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,I);x[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),U=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),X=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),W=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,F;function ee(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var be=!1;function Ue(n,i){if(!n||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(he){var c=he}Reflect.construct(n,[],i)}else{try{i.call()}catch(he){c=he}n.call(i.prototype)}else{try{throw Error()}catch(he){c=he}n()}}catch(he){if(he&&c&&typeof he.stack=="string"){for(var f=he.stack.split(`
`),m=c.stack.split(`
`),T=f.length-1,B=m.length-1;1<=T&&0<=B&&f[T]!==m[B];)B--;for(;1<=T&&0<=B;T--,B--)if(f[T]!==m[B]){if(T!==1||B!==1)do if(T--,B--,0>B||f[T]!==m[B]){var q=`
`+f[T].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=T&&0<=B);break}}}finally{be=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function Fe(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Ue(n.type,!1),n;case 11:return n=Ue(n.type.render,!1),n;case 1:return n=Ue(n.type,!0),n;default:return""}}function se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case U:return"Portal";case N:return"Profiler";case w:return"StrictMode";case D:return"Suspense";case G:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case X:return(n.displayName||"Context")+".Consumer";case j:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case z:return i=n.displayName||null,i!==null?i:se(n.type)||"Memo";case k:i=n._payload,n=n._init;try{return se(n(i))}catch{}}return null}function pe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Se(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ze(n){var i=Se(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function We(n){n._valueTracker||(n._valueTracker=ze(n))}function At(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Se(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Rt(n,i){var a=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function St(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ue(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function xt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Vt(n,i){xt(n,i);var a=ue(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?tt(n,i.type,a):i.hasOwnProperty("defaultValue")&&tt(n,i.type,ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Xt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function tt(n,i,a){(i!=="number"||lt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Dt=Array.isArray;function Ct(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ue(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Ae(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Y(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Dt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ue(a)}}function Ge(n,i){var a=ue(i.value),c=ue(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function mt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?L(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var te,le=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(te=te||document.createElement("div"),te.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=te.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function de(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Le=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Le.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function me(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function ge(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=me(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Te=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(n,i){if(i){if(Te[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function nt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var it=null,ot=null,K=null;function De(n){if(n=Va(n)){if(typeof it!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Go(i),it(n.stateNode,n.type,i))}}function ve(n){ot?K?K.push(n):K=[n]:ot=n}function Ie(){if(ot){var n=ot,i=K;if(K=ot=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Oe(n,i){return n(i)}function xe(){}var $e=!1;function qe(n,i,a){if($e)return n(i,a);$e=!0;try{return Oe(n,i,a)}finally{$e=!1,(ot!==null||K!==null)&&(xe(),Ie())}}function zt(n,i){var a=n.stateNode;if(a===null)return null;var c=Go(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var It=!1;if(d)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){It=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{It=!1}function oi(n,i,a,c,f,m,T,B,q){var he=Array.prototype.slice.call(arguments,3);try{i.apply(a,he)}catch(ye){this.onError(ye)}}var Gr=!1,Ms=null,Hr=!1,Wr=null,Tc={onError:function(n){Gr=!0,Ms=n}};function wo(n,i,a,c,f,m,T,B,q){Gr=!1,Ms=null,oi.apply(Tc,arguments)}function To(n,i,a,c,f,m,T,B,q){if(wo.apply(this,arguments),Gr){if(Gr){var he=Ms;Gr=!1,Ms=null}else throw Error(t(198));Hr||(Hr=!0,Wr=he)}}function Un(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ss(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ma(n){if(Un(n)!==n)throw Error(t(188))}function bo(n){var i=n.alternate;if(!i){if(i=Un(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return Ma(f),n;if(m===c)return Ma(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=m;else{for(var T=!1,B=f.child;B;){if(B===a){T=!0,a=f,c=m;break}if(B===c){T=!0,c=f,a=m;break}B=B.sibling}if(!T){for(B=m.child;B;){if(B===a){T=!0,a=m,c=f;break}if(B===c){T=!0,c=m,a=f;break}B=B.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Xr(n){return n=bo(n),n!==null?Sa(n):null}function Sa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Sa(n);if(i!==null)return i;n=n.sibling}return null}var Yr=e.unstable_scheduleCallback,Ea=e.unstable_cancelCallback,Ao=e.unstable_shouldYield,bc=e.unstable_requestPaint,Jt=e.unstable_now,Ac=e.unstable_getCurrentPriorityLevel,wa=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,J=e.unstable_NormalPriority,fe=e.unstable_LowPriority,oe=e.unstable_IdlePriority,ae=null,Pe=null;function He(n){if(Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:ht,Ke=Math.log,et=Math.LN2;function ht(n){return n>>>=0,n===0?32:31-(Ke(n)/et|0)|0}var dt=64,Qe=4194304;function Pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var B=T&~f;B!==0?c=Pt(B):(m&=T,m!==0&&(c=Pt(m)))}else T=a&~f,T!==0?c=Pt(T):m!==0&&(c=Pt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Re(i),f=1<<a,c|=n[a],i&=~f;return c}function Kt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Re(m),B=1<<T,q=f[T];q===-1?((B&a)===0||(B&c)!==0)&&(f[T]=Kt(B,i)):q<=i&&(n.expiredLanes|=B),m&=~B}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Be(){var n=dt;return dt<<=1,(dt&4194240)===0&&(dt=64),n}function _n(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function _t(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Re(i),n[i]=a}function Vn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-Re(a),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~m}}function Gn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Re(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var yt=0;function $i(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ut,Yt,xi,kt,_i,Pi=!1,qr=[],hr=null,dr=null,pr=null,Ta=new Map,ba=new Map,mr=[],Rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(n,i){switch(n){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Ta.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(i.pointerId)}}function Aa(n,i,a,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Va(i),i!==null&&Yt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Cg(n,i,a,c,f){switch(i){case"focusin":return hr=Aa(hr,n,i,a,c,f),!0;case"dragenter":return dr=Aa(dr,n,i,a,c,f),!0;case"mouseover":return pr=Aa(pr,n,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return Ta.set(m,Aa(Ta.get(m)||null,n,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,ba.set(m,Aa(ba.get(m)||null,n,i,a,c,f)),!0}return!1}function hd(n){var i=jr(n.target);if(i!==null){var a=Un(i);if(a!==null){if(i=a.tag,i===13){if(i=Ss(a),i!==null){n.blockedOn=i,_i(n.priority,function(){xi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ro(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Cc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ce=c,a.target.dispatchEvent(c),Ce=null}else return i=Va(a),i!==null&&Yt(i),n.blockedOn=a,!1;i.shift()}return!0}function dd(n,i,a){Ro(n)&&a.delete(i)}function Pg(){Pi=!1,hr!==null&&Ro(hr)&&(hr=null),dr!==null&&Ro(dr)&&(dr=null),pr!==null&&Ro(pr)&&(pr=null),Ta.forEach(dd),ba.forEach(dd)}function Ra(n,i){n.blockedOn===i&&(n.blockedOn=null,Pi||(Pi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pg)))}function Ca(n){function i(f){return Ra(f,n)}if(0<qr.length){Ra(qr[0],n);for(var a=1;a<qr.length;a++){var c=qr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(hr!==null&&Ra(hr,n),dr!==null&&Ra(dr,n),pr!==null&&Ra(pr,n),Ta.forEach(i),ba.forEach(i),a=0;a<mr.length;a++)c=mr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<mr.length&&(a=mr[0],a.blockedOn===null);)hd(a),a.blockedOn===null&&mr.shift()}var Es=b.ReactCurrentBatchConfig,Co=!0;function Ng(n,i,a,c){var f=yt,m=Es.transition;Es.transition=null;try{yt=1,Rc(n,i,a,c)}finally{yt=f,Es.transition=m}}function Lg(n,i,a,c){var f=yt,m=Es.transition;Es.transition=null;try{yt=4,Rc(n,i,a,c)}finally{yt=f,Es.transition=m}}function Rc(n,i,a,c){if(Co){var f=Cc(n,i,a,c);if(f===null)Yc(n,i,c,Po,a),fd(n,c);else if(Cg(f,n,i,a,c))c.stopPropagation();else if(fd(n,c),i&4&&-1<Rg.indexOf(n)){for(;f!==null;){var m=Va(f);if(m!==null&&Ut(m),m=Cc(n,i,a,c),m===null&&Yc(n,i,c,Po,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else Yc(n,i,c,null,a)}}var Po=null;function Cc(n,i,a,c){if(Po=null,n=nt(c),n=jr(n),n!==null)if(i=Un(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ss(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Po=n,null}function pd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ac()){case wa:return 1;case A:return 4;case J:case fe:return 16;case oe:return 536870912;default:return 16}default:return 16}}var gr=null,Pc=null,No=null;function md(){if(No)return No;var n,i=Pc,a=i.length,c,f="value"in gr?gr.value:gr.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===f[m-c];c++);return No=f.slice(n,1<c?1-c:void 0)}function Lo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Do(){return!0}function gd(){return!1}function Zn(n){function i(a,c,f,m,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Do:gd,this.isPropagationStopped=gd,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),i}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=Zn(ws),Pa=ne({},ws,{view:0,detail:0}),Dg=Zn(Pa),Lc,Dc,Na,Io=ne({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Na&&(Na&&n.type==="mousemove"?(Lc=n.screenX-Na.screenX,Dc=n.screenY-Na.screenY):Dc=Lc=0,Na=n),Lc)},movementY:function(n){return"movementY"in n?n.movementY:Dc}}),vd=Zn(Io),Ig=ne({},Io,{dataTransfer:0}),Ug=Zn(Ig),Fg=ne({},Pa,{relatedTarget:0}),Ic=Zn(Fg),Og=ne({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),kg=Zn(Og),zg=ne({},ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Bg=Zn(zg),Vg=ne({},ws,{data:0}),xd=Zn(Vg),Gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Wg[n])?!!i[n]:!1}function Uc(){return Xg}var Yg=ne({},Pa,{key:function(n){if(n.key){var i=Gg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Lo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Hg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(n){return n.type==="keypress"?Lo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Lo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),qg=Zn(Yg),jg=ne({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=Zn(jg),$g=ne({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),Kg=Zn($g),Zg=ne({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qg=Zn(Zg),Jg=ne({},Io,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ev=Zn(Jg),tv=[9,13,27,32],Fc=d&&"CompositionEvent"in window,La=null;d&&"documentMode"in document&&(La=document.documentMode);var nv=d&&"TextEvent"in window&&!La,yd=d&&(!Fc||La&&8<La&&11>=La),Md=" ",Sd=!1;function Ed(n,i){switch(n){case"keyup":return tv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ts=!1;function iv(n,i){switch(n){case"compositionend":return wd(i);case"keypress":return i.which!==32?null:(Sd=!0,Md);case"textInput":return n=i.data,n===Md&&Sd?null:n;default:return null}}function rv(n,i){if(Ts)return n==="compositionend"||!Fc&&Ed(n,i)?(n=md(),No=Pc=gr=null,Ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return yd&&i.locale!=="ko"?null:i.data;default:return null}}var sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!sv[n.type]:i==="textarea"}function bd(n,i,a,c){ve(c),i=zo(i,"onChange"),0<i.length&&(a=new Nc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Da=null,Ia=null;function av(n){Wd(n,0)}function Uo(n){var i=Ps(n);if(At(i))return n}function ov(n,i){if(n==="change")return i}var Ad=!1;if(d){var Oc;if(d){var kc="oninput"in document;if(!kc){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),kc=typeof Rd.oninput=="function"}Oc=kc}else Oc=!1;Ad=Oc&&(!document.documentMode||9<document.documentMode)}function Cd(){Da&&(Da.detachEvent("onpropertychange",Pd),Ia=Da=null)}function Pd(n){if(n.propertyName==="value"&&Uo(Ia)){var i=[];bd(i,Ia,n,nt(n)),qe(av,i)}}function lv(n,i,a){n==="focusin"?(Cd(),Da=i,Ia=a,Da.attachEvent("onpropertychange",Pd)):n==="focusout"&&Cd()}function cv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uo(Ia)}function uv(n,i){if(n==="click")return Uo(i)}function fv(n,i){if(n==="input"||n==="change")return Uo(i)}function hv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var yi=typeof Object.is=="function"?Object.is:hv;function Ua(n,i){if(yi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(i,f)||!yi(n[f],i[f]))return!1}return!0}function Nd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ld(n,i){var a=Nd(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nd(a)}}function Dd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Dd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Id(){for(var n=window,i=lt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=lt(n.document)}return i}function zc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function dv(n){var i=Id(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Dd(a.ownerDocument.documentElement,a)){if(c!==null&&zc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=Ld(a,m);var T=Ld(a,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var pv=d&&"documentMode"in document&&11>=document.documentMode,bs=null,Bc=null,Fa=null,Vc=!1;function Ud(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vc||bs==null||bs!==lt(c)||(c=bs,"selectionStart"in c&&zc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Fa&&Ua(Fa,c)||(Fa=c,c=zo(Bc,"onSelect"),0<c.length&&(i=new Nc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=bs)))}function Fo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var As={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Gc={},Fd={};d&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Oo(n){if(Gc[n])return Gc[n];if(!As[n])return n;var i=As[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Fd)return Gc[n]=i[a];return n}var Od=Oo("animationend"),kd=Oo("animationiteration"),zd=Oo("animationstart"),Bd=Oo("transitionend"),Vd=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(n,i){Vd.set(n,i),l(i,[n])}for(var Hc=0;Hc<Gd.length;Hc++){var Wc=Gd[Hc],mv=Wc.toLowerCase(),gv=Wc[0].toUpperCase()+Wc.slice(1);vr(mv,"on"+gv)}vr(Od,"onAnimationEnd"),vr(kd,"onAnimationIteration"),vr(zd,"onAnimationStart"),vr("dblclick","onDoubleClick"),vr("focusin","onFocus"),vr("focusout","onBlur"),vr(Bd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function Hd(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,To(c,i,void 0,n),n.currentTarget=null}function Wd(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var B=c[T],q=B.instance,he=B.currentTarget;if(B=B.listener,q!==m&&f.isPropagationStopped())break e;Hd(f,B,he),m=q}else for(T=0;T<c.length;T++){if(B=c[T],q=B.instance,he=B.currentTarget,B=B.listener,q!==m&&f.isPropagationStopped())break e;Hd(f,B,he),m=q}}}if(Hr)throw n=Wr,Hr=!1,Wr=null,n}function qt(n,i){var a=i[Qc];a===void 0&&(a=i[Qc]=new Set);var c=n+"__bubble";a.has(c)||(Xd(i,n,2,!1),a.add(c))}function Xc(n,i,a){var c=0;i&&(c|=4),Xd(a,n,c,i)}var ko="_reactListening"+Math.random().toString(36).slice(2);function ka(n){if(!n[ko]){n[ko]=!0,r.forEach(function(a){a!=="selectionchange"&&(vv.has(a)||Xc(a,!1,n),Xc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ko]||(i[ko]=!0,Xc("selectionchange",!1,i))}}function Xd(n,i,a,c){switch(pd(i)){case 1:var f=Ng;break;case 4:f=Lg;break;default:f=Rc}a=f.bind(null,i,a,n),f=void 0,!It||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Yc(n,i,a,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var B=c.stateNode.containerInfo;if(B===f||B.nodeType===8&&B.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var q=T.tag;if((q===3||q===4)&&(q=T.stateNode.containerInfo,q===f||q.nodeType===8&&q.parentNode===f))return;T=T.return}for(;B!==null;){if(T=jr(B),T===null)return;if(q=T.tag,q===5||q===6){c=m=T;continue e}B=B.parentNode}}c=c.return}qe(function(){var he=m,ye=nt(a),Me=[];e:{var _e=Vd.get(n);if(_e!==void 0){var Ve=Nc,je=n;switch(n){case"keypress":if(Lo(a)===0)break e;case"keydown":case"keyup":Ve=qg;break;case"focusin":je="focus",Ve=Ic;break;case"focusout":je="blur",Ve=Ic;break;case"beforeblur":case"afterblur":Ve=Ic;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=Ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=Kg;break;case Od:case kd:case zd:Ve=kg;break;case Bd:Ve=Qg;break;case"scroll":Ve=Dg;break;case"wheel":Ve=ev;break;case"copy":case"cut":case"paste":Ve=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=_d}var Ze=(i&4)!==0,sn=!Ze&&n==="scroll",re=Ze?_e!==null?_e+"Capture":null:_e;Ze=[];for(var Z=he,ce;Z!==null;){ce=Z;var we=ce.stateNode;if(ce.tag===5&&we!==null&&(ce=we,re!==null&&(we=zt(Z,re),we!=null&&Ze.push(za(Z,we,ce)))),sn)break;Z=Z.return}0<Ze.length&&(_e=new Ve(_e,je,null,a,ye),Me.push({event:_e,listeners:Ze}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",_e&&a!==Ce&&(je=a.relatedTarget||a.fromElement)&&(jr(je)||je[Ki]))break e;if((Ve||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ve?(je=a.relatedTarget||a.toElement,Ve=he,je=je?jr(je):null,je!==null&&(sn=Un(je),je!==sn||je.tag!==5&&je.tag!==6)&&(je=null)):(Ve=null,je=he),Ve!==je)){if(Ze=vd,we="onMouseLeave",re="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=_d,we="onPointerLeave",re="onPointerEnter",Z="pointer"),sn=Ve==null?_e:Ps(Ve),ce=je==null?_e:Ps(je),_e=new Ze(we,Z+"leave",Ve,a,ye),_e.target=sn,_e.relatedTarget=ce,we=null,jr(ye)===he&&(Ze=new Ze(re,Z+"enter",je,a,ye),Ze.target=ce,Ze.relatedTarget=sn,we=Ze),sn=we,Ve&&je)t:{for(Ze=Ve,re=je,Z=0,ce=Ze;ce;ce=Rs(ce))Z++;for(ce=0,we=re;we;we=Rs(we))ce++;for(;0<Z-ce;)Ze=Rs(Ze),Z--;for(;0<ce-Z;)re=Rs(re),ce--;for(;Z--;){if(Ze===re||re!==null&&Ze===re.alternate)break t;Ze=Rs(Ze),re=Rs(re)}Ze=null}else Ze=null;Ve!==null&&Yd(Me,_e,Ve,Ze,!1),je!==null&&sn!==null&&Yd(Me,sn,je,Ze,!0)}}e:{if(_e=he?Ps(he):window,Ve=_e.nodeName&&_e.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&_e.type==="file")var Je=ov;else if(Td(_e))if(Ad)Je=fv;else{Je=cv;var st=lv}else(Ve=_e.nodeName)&&Ve.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Je=uv);if(Je&&(Je=Je(n,he))){bd(Me,Je,a,ye);break e}st&&st(n,_e,he),n==="focusout"&&(st=_e._wrapperState)&&st.controlled&&_e.type==="number"&&tt(_e,"number",_e.value)}switch(st=he?Ps(he):window,n){case"focusin":(Td(st)||st.contentEditable==="true")&&(bs=st,Bc=he,Fa=null);break;case"focusout":Fa=Bc=bs=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Ud(Me,a,ye);break;case"selectionchange":if(pv)break;case"keydown":case"keyup":Ud(Me,a,ye)}var at;if(Fc)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Ts?Ed(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(yd&&a.locale!=="ko"&&(Ts||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ts&&(at=md()):(gr=ye,Pc="value"in gr?gr.value:gr.textContent,Ts=!0)),st=zo(he,ut),0<st.length&&(ut=new xd(ut,n,null,a,ye),Me.push({event:ut,listeners:st}),at?ut.data=at:(at=wd(a),at!==null&&(ut.data=at)))),(at=nv?iv(n,a):rv(n,a))&&(he=zo(he,"onBeforeInput"),0<he.length&&(ye=new xd("onBeforeInput","beforeinput",null,a,ye),Me.push({event:ye,listeners:he}),ye.data=at))}Wd(Me,i)})}function za(n,i,a){return{instance:n,listener:i,currentTarget:a}}function zo(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=zt(n,a),m!=null&&c.unshift(za(n,m,f)),m=zt(n,i),m!=null&&c.push(za(n,m,f))),n=n.return}return c}function Rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Yd(n,i,a,c,f){for(var m=i._reactName,T=[];a!==null&&a!==c;){var B=a,q=B.alternate,he=B.stateNode;if(q!==null&&q===c)break;B.tag===5&&he!==null&&(B=he,f?(q=zt(a,m),q!=null&&T.unshift(za(a,q,B))):f||(q=zt(a,m),q!=null&&T.push(za(a,q,B)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var xv=/\r\n?/g,_v=/\u0000|\uFFFD/g;function qd(n){return(typeof n=="string"?n:""+n).replace(xv,`
`).replace(_v,"")}function Bo(n,i,a){if(i=qd(i),qd(n)!==i&&a)throw Error(t(425))}function Vo(){}var qc=null,jc=null;function $c(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,yv=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,Mv=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(n){return jd.resolve(null).then(n).catch(Sv)}:Kc;function Sv(n){setTimeout(function(){throw n})}function Zc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Ca(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Ca(i)}function xr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function $d(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Ni="__reactFiber$"+Cs,Ba="__reactProps$"+Cs,Ki="__reactContainer$"+Cs,Qc="__reactEvents$"+Cs,Ev="__reactListeners$"+Cs,wv="__reactHandles$"+Cs;function jr(n){var i=n[Ni];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ki]||a[Ni]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=$d(n);n!==null;){if(a=n[Ni])return a;n=$d(n)}return i}n=a,a=n.parentNode}return null}function Va(n){return n=n[Ni]||n[Ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Go(n){return n[Ba]||null}var Jc=[],Ns=-1;function _r(n){return{current:n}}function jt(n){0>Ns||(n.current=Jc[Ns],Jc[Ns]=null,Ns--)}function Ht(n,i){Ns++,Jc[Ns]=n.current,n.current=i}var yr={},Tn=_r(yr),Hn=_r(!1),$r=yr;function Ls(n,i){var a=n.type.contextTypes;if(!a)return yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Wn(n){return n=n.childContextTypes,n!=null}function Ho(){jt(Hn),jt(Tn)}function Kd(n,i,a){if(Tn.current!==yr)throw Error(t(168));Ht(Tn,i),Ht(Hn,a)}function Zd(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,pe(n)||"Unknown",f));return ne({},a,c)}function Wo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||yr,$r=Tn.current,Ht(Tn,n),Ht(Hn,Hn.current),!0}function Qd(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Zd(n,i,$r),c.__reactInternalMemoizedMergedChildContext=n,jt(Hn),jt(Tn),Ht(Tn,n)):jt(Hn),Ht(Hn,a)}var Zi=null,Xo=!1,eu=!1;function Jd(n){Zi===null?Zi=[n]:Zi.push(n)}function Tv(n){Xo=!0,Jd(n)}function Mr(){if(!eu&&Zi!==null){eu=!0;var n=0,i=yt;try{var a=Zi;for(yt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Zi=null,Xo=!1}catch(f){throw Zi!==null&&(Zi=Zi.slice(n+1)),Yr(wa,Mr),f}finally{yt=i,eu=!1}}return null}var Ds=[],Is=0,Yo=null,qo=0,li=[],ci=0,Kr=null,Qi=1,Ji="";function Zr(n,i){Ds[Is++]=qo,Ds[Is++]=Yo,Yo=n,qo=i}function ep(n,i,a){li[ci++]=Qi,li[ci++]=Ji,li[ci++]=Kr,Kr=n;var c=Qi;n=Ji;var f=32-Re(c)-1;c&=~(1<<f),a+=1;var m=32-Re(i)+f;if(30<m){var T=f-f%5;m=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Qi=1<<32-Re(i)+f|a<<f|c,Ji=m+n}else Qi=1<<m|a<<f|c,Ji=n}function tu(n){n.return!==null&&(Zr(n,1),ep(n,1,0))}function nu(n){for(;n===Yo;)Yo=Ds[--Is],Ds[Is]=null,qo=Ds[--Is],Ds[Is]=null;for(;n===Kr;)Kr=li[--ci],li[ci]=null,Ji=li[--ci],li[ci]=null,Qi=li[--ci],li[ci]=null}var Qn=null,Jn=null,Zt=!1,Mi=null;function tp(n,i){var a=di(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function np(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Qn=n,Jn=xr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Qn=n,Jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Kr!==null?{id:Qi,overflow:Ji}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=di(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Qn=n,Jn=null,!0):!1;default:return!1}}function iu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ru(n){if(Zt){var i=Jn;if(i){var a=i;if(!np(n,i)){if(iu(n))throw Error(t(418));i=xr(a.nextSibling);var c=Qn;i&&np(n,i)?tp(c,a):(n.flags=n.flags&-4097|2,Zt=!1,Qn=n)}}else{if(iu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Zt=!1,Qn=n}}}function ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qn=n}function jo(n){if(n!==Qn)return!1;if(!Zt)return ip(n),Zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!$c(n.type,n.memoizedProps)),i&&(i=Jn)){if(iu(n))throw rp(),Error(t(418));for(;i;)tp(n,i),i=xr(i.nextSibling)}if(ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Jn=xr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Jn=null}}else Jn=Qn?xr(n.stateNode.nextSibling):null;return!0}function rp(){for(var n=Jn;n;)n=xr(n.nextSibling)}function Us(){Jn=Qn=null,Zt=!1}function su(n){Mi===null?Mi=[n]:Mi.push(n)}var bv=b.ReactCurrentBatchConfig;function Ga(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var B=f.refs;T===null?delete B[m]:B[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $o(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function sp(n){var i=n._init;return i(n._payload)}function ap(n){function i(re,Z){if(n){var ce=re.deletions;ce===null?(re.deletions=[Z],re.flags|=16):ce.push(Z)}}function a(re,Z){if(!n)return null;for(;Z!==null;)i(re,Z),Z=Z.sibling;return null}function c(re,Z){for(re=new Map;Z!==null;)Z.key!==null?re.set(Z.key,Z):re.set(Z.index,Z),Z=Z.sibling;return re}function f(re,Z){return re=Cr(re,Z),re.index=0,re.sibling=null,re}function m(re,Z,ce){return re.index=ce,n?(ce=re.alternate,ce!==null?(ce=ce.index,ce<Z?(re.flags|=2,Z):ce):(re.flags|=2,Z)):(re.flags|=1048576,Z)}function T(re){return n&&re.alternate===null&&(re.flags|=2),re}function B(re,Z,ce,we){return Z===null||Z.tag!==6?(Z=Ku(ce,re.mode,we),Z.return=re,Z):(Z=f(Z,ce),Z.return=re,Z)}function q(re,Z,ce,we){var Je=ce.type;return Je===V?ye(re,Z,ce.props.children,we,ce.key):Z!==null&&(Z.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===k&&sp(Je)===Z.type)?(we=f(Z,ce.props),we.ref=Ga(re,Z,ce),we.return=re,we):(we=_l(ce.type,ce.key,ce.props,null,re.mode,we),we.ref=Ga(re,Z,ce),we.return=re,we)}function he(re,Z,ce,we){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ce.containerInfo||Z.stateNode.implementation!==ce.implementation?(Z=Zu(ce,re.mode,we),Z.return=re,Z):(Z=f(Z,ce.children||[]),Z.return=re,Z)}function ye(re,Z,ce,we,Je){return Z===null||Z.tag!==7?(Z=ss(ce,re.mode,we,Je),Z.return=re,Z):(Z=f(Z,ce),Z.return=re,Z)}function Me(re,Z,ce){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=Ku(""+Z,re.mode,ce),Z.return=re,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case C:return ce=_l(Z.type,Z.key,Z.props,null,re.mode,ce),ce.ref=Ga(re,null,Z),ce.return=re,ce;case U:return Z=Zu(Z,re.mode,ce),Z.return=re,Z;case k:var we=Z._init;return Me(re,we(Z._payload),ce)}if(Dt(Z)||ie(Z))return Z=ss(Z,re.mode,ce,null),Z.return=re,Z;$o(re,Z)}return null}function _e(re,Z,ce,we){var Je=Z!==null?Z.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return Je!==null?null:B(re,Z,""+ce,we);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case C:return ce.key===Je?q(re,Z,ce,we):null;case U:return ce.key===Je?he(re,Z,ce,we):null;case k:return Je=ce._init,_e(re,Z,Je(ce._payload),we)}if(Dt(ce)||ie(ce))return Je!==null?null:ye(re,Z,ce,we,null);$o(re,ce)}return null}function Ve(re,Z,ce,we,Je){if(typeof we=="string"&&we!==""||typeof we=="number")return re=re.get(ce)||null,B(Z,re,""+we,Je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case C:return re=re.get(we.key===null?ce:we.key)||null,q(Z,re,we,Je);case U:return re=re.get(we.key===null?ce:we.key)||null,he(Z,re,we,Je);case k:var st=we._init;return Ve(re,Z,ce,st(we._payload),Je)}if(Dt(we)||ie(we))return re=re.get(ce)||null,ye(Z,re,we,Je,null);$o(Z,we)}return null}function je(re,Z,ce,we){for(var Je=null,st=null,at=Z,ut=Z=0,gn=null;at!==null&&ut<ce.length;ut++){at.index>ut?(gn=at,at=null):gn=at.sibling;var Lt=_e(re,at,ce[ut],we);if(Lt===null){at===null&&(at=gn);break}n&&at&&Lt.alternate===null&&i(re,at),Z=m(Lt,Z,ut),st===null?Je=Lt:st.sibling=Lt,st=Lt,at=gn}if(ut===ce.length)return a(re,at),Zt&&Zr(re,ut),Je;if(at===null){for(;ut<ce.length;ut++)at=Me(re,ce[ut],we),at!==null&&(Z=m(at,Z,ut),st===null?Je=at:st.sibling=at,st=at);return Zt&&Zr(re,ut),Je}for(at=c(re,at);ut<ce.length;ut++)gn=Ve(at,re,ut,ce[ut],we),gn!==null&&(n&&gn.alternate!==null&&at.delete(gn.key===null?ut:gn.key),Z=m(gn,Z,ut),st===null?Je=gn:st.sibling=gn,st=gn);return n&&at.forEach(function(Pr){return i(re,Pr)}),Zt&&Zr(re,ut),Je}function Ze(re,Z,ce,we){var Je=ie(ce);if(typeof Je!="function")throw Error(t(150));if(ce=Je.call(ce),ce==null)throw Error(t(151));for(var st=Je=null,at=Z,ut=Z=0,gn=null,Lt=ce.next();at!==null&&!Lt.done;ut++,Lt=ce.next()){at.index>ut?(gn=at,at=null):gn=at.sibling;var Pr=_e(re,at,Lt.value,we);if(Pr===null){at===null&&(at=gn);break}n&&at&&Pr.alternate===null&&i(re,at),Z=m(Pr,Z,ut),st===null?Je=Pr:st.sibling=Pr,st=Pr,at=gn}if(Lt.done)return a(re,at),Zt&&Zr(re,ut),Je;if(at===null){for(;!Lt.done;ut++,Lt=ce.next())Lt=Me(re,Lt.value,we),Lt!==null&&(Z=m(Lt,Z,ut),st===null?Je=Lt:st.sibling=Lt,st=Lt);return Zt&&Zr(re,ut),Je}for(at=c(re,at);!Lt.done;ut++,Lt=ce.next())Lt=Ve(at,re,ut,Lt.value,we),Lt!==null&&(n&&Lt.alternate!==null&&at.delete(Lt.key===null?ut:Lt.key),Z=m(Lt,Z,ut),st===null?Je=Lt:st.sibling=Lt,st=Lt);return n&&at.forEach(function(sx){return i(re,sx)}),Zt&&Zr(re,ut),Je}function sn(re,Z,ce,we){if(typeof ce=="object"&&ce!==null&&ce.type===V&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case C:e:{for(var Je=ce.key,st=Z;st!==null;){if(st.key===Je){if(Je=ce.type,Je===V){if(st.tag===7){a(re,st.sibling),Z=f(st,ce.props.children),Z.return=re,re=Z;break e}}else if(st.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===k&&sp(Je)===st.type){a(re,st.sibling),Z=f(st,ce.props),Z.ref=Ga(re,st,ce),Z.return=re,re=Z;break e}a(re,st);break}else i(re,st);st=st.sibling}ce.type===V?(Z=ss(ce.props.children,re.mode,we,ce.key),Z.return=re,re=Z):(we=_l(ce.type,ce.key,ce.props,null,re.mode,we),we.ref=Ga(re,Z,ce),we.return=re,re=we)}return T(re);case U:e:{for(st=ce.key;Z!==null;){if(Z.key===st)if(Z.tag===4&&Z.stateNode.containerInfo===ce.containerInfo&&Z.stateNode.implementation===ce.implementation){a(re,Z.sibling),Z=f(Z,ce.children||[]),Z.return=re,re=Z;break e}else{a(re,Z);break}else i(re,Z);Z=Z.sibling}Z=Zu(ce,re.mode,we),Z.return=re,re=Z}return T(re);case k:return st=ce._init,sn(re,Z,st(ce._payload),we)}if(Dt(ce))return je(re,Z,ce,we);if(ie(ce))return Ze(re,Z,ce,we);$o(re,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,Z!==null&&Z.tag===6?(a(re,Z.sibling),Z=f(Z,ce),Z.return=re,re=Z):(a(re,Z),Z=Ku(ce,re.mode,we),Z.return=re,re=Z),T(re)):a(re,Z)}return sn}var Fs=ap(!0),op=ap(!1),Ko=_r(null),Zo=null,Os=null,au=null;function ou(){au=Os=Zo=null}function lu(n){var i=Ko.current;jt(Ko),n._currentValue=i}function cu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ks(n,i){Zo=n,au=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Xn=!0),n.firstContext=null)}function ui(n){var i=n._currentValue;if(au!==n)if(n={context:n,memoizedValue:i,next:null},Os===null){if(Zo===null)throw Error(t(308));Os=n,Zo.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return i}var Qr=null;function uu(n){Qr===null?Qr=[n]:Qr.push(n)}function lp(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,uu(i)):(a.next=f.next,f.next=a),i.interleaved=a,er(n,c)}function er(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Sr=!1;function fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function tr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Er(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Nt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,er(n,a)}return f=c.interleaved,f===null?(i.next=i,uu(c)):(i.next=f.next,f.next=i),c.interleaved=i,er(n,a)}function Qo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Gn(n,a)}}function up(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Jo(n,i,a,c){var f=n.updateQueue;Sr=!1;var m=f.firstBaseUpdate,T=f.lastBaseUpdate,B=f.shared.pending;if(B!==null){f.shared.pending=null;var q=B,he=q.next;q.next=null,T===null?m=he:T.next=he,T=q;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,B=ye.lastBaseUpdate,B!==T&&(B===null?ye.firstBaseUpdate=he:B.next=he,ye.lastBaseUpdate=q))}if(m!==null){var Me=f.baseState;T=0,ye=he=q=null,B=m;do{var _e=B.lane,Ve=B.eventTime;if((c&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Ve,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var je=n,Ze=B;switch(_e=i,Ve=a,Ze.tag){case 1:if(je=Ze.payload,typeof je=="function"){Me=je.call(Ve,Me,_e);break e}Me=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ze.payload,_e=typeof je=="function"?je.call(Ve,Me,_e):je,_e==null)break e;Me=ne({},Me,_e);break e;case 2:Sr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,_e=f.effects,_e===null?f.effects=[B]:_e.push(B))}else Ve={eventTime:Ve,lane:_e,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ye===null?(he=ye=Ve,q=Me):ye=ye.next=Ve,T|=_e;if(B=B.next,B===null){if(B=f.shared.pending,B===null)break;_e=B,B=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(ye===null&&(q=Me),f.baseState=q,f.firstBaseUpdate=he,f.lastBaseUpdate=ye,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);ts|=T,n.lanes=T,n.memoizedState=Me}}function fp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ha={},Li=_r(Ha),Wa=_r(Ha),Xa=_r(Ha);function Jr(n){if(n===Ha)throw Error(t(174));return n}function hu(n,i){switch(Ht(Xa,i),Ht(Wa,n),Ht(Li,Ha),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}jt(Li),Ht(Li,i)}function zs(){jt(Li),jt(Wa),jt(Xa)}function hp(n){Jr(Xa.current);var i=Jr(Li.current),a=M(i,n.type);i!==a&&(Ht(Wa,n),Ht(Li,a))}function du(n){Wa.current===n&&(jt(Li),jt(Wa))}var en=_r(0);function el(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pu=[];function mu(){for(var n=0;n<pu.length;n++)pu[n]._workInProgressVersionPrimary=null;pu.length=0}var tl=b.ReactCurrentDispatcher,gu=b.ReactCurrentBatchConfig,es=0,tn=null,un=null,pn=null,nl=!1,Ya=!1,qa=0,Av=0;function bn(){throw Error(t(321))}function vu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!yi(n[a],i[a]))return!1;return!0}function xu(n,i,a,c,f,m){if(es=m,tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,tl.current=n===null||n.memoizedState===null?Nv:Lv,n=a(c,f),Ya){m=0;do{if(Ya=!1,qa=0,25<=m)throw Error(t(301));m+=1,pn=un=null,i.updateQueue=null,tl.current=Dv,n=a(c,f)}while(Ya)}if(tl.current=sl,i=un!==null&&un.next!==null,es=0,pn=un=tn=null,nl=!1,i)throw Error(t(300));return n}function _u(){var n=qa!==0;return qa=0,n}function Di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?tn.memoizedState=pn=n:pn=pn.next=n,pn}function fi(){if(un===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var i=pn===null?tn.memoizedState:pn.next;if(i!==null)pn=i,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},pn===null?tn.memoizedState=pn=n:pn=pn.next=n}return pn}function ja(n,i){return typeof i=="function"?i(n):i}function yu(n){var i=fi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=un,f=c.baseQueue,m=a.pending;if(m!==null){if(f!==null){var T=f.next;f.next=m.next,m.next=T}c.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,c=c.baseState;var B=T=null,q=null,he=m;do{var ye=he.lane;if((es&ye)===ye)q!==null&&(q=q.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),c=he.hasEagerState?he.eagerState:n(c,he.action);else{var Me={lane:ye,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};q===null?(B=q=Me,T=c):q=q.next=Me,tn.lanes|=ye,ts|=ye}he=he.next}while(he!==null&&he!==m);q===null?T=c:q.next=B,yi(c,i.memoizedState)||(Xn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=q,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do m=f.lane,tn.lanes|=m,ts|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Mu(n){var i=fi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do m=n(m,T.action),T=T.next;while(T!==f);yi(m,i.memoizedState)||(Xn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function dp(){}function pp(n,i){var a=tn,c=fi(),f=i(),m=!yi(c.memoizedState,f);if(m&&(c.memoizedState=f,Xn=!0),c=c.queue,Su(vp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,$a(9,gp.bind(null,a,c,f,i),void 0,null),mn===null)throw Error(t(349));(es&30)!==0||mp(a,i,f)}return f}function mp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function gp(n,i,a,c){i.value=a,i.getSnapshot=c,xp(i)&&_p(n)}function vp(n,i,a){return a(function(){xp(i)&&_p(n)})}function xp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!yi(n,a)}catch{return!0}}function _p(n){var i=er(n,1);i!==null&&Ti(i,n,1,-1)}function yp(n){var i=Di();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:n},i.queue=n,n=n.dispatch=Pv.bind(null,tn,n),[i.memoizedState,n]}function $a(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Mp(){return fi().memoizedState}function il(n,i,a,c){var f=Di();tn.flags|=n,f.memoizedState=$a(1|i,a,void 0,c===void 0?null:c)}function rl(n,i,a,c){var f=fi();c=c===void 0?null:c;var m=void 0;if(un!==null){var T=un.memoizedState;if(m=T.destroy,c!==null&&vu(c,T.deps)){f.memoizedState=$a(i,a,m,c);return}}tn.flags|=n,f.memoizedState=$a(1|i,a,m,c)}function Sp(n,i){return il(8390656,8,n,i)}function Su(n,i){return rl(2048,8,n,i)}function Ep(n,i){return rl(4,2,n,i)}function wp(n,i){return rl(4,4,n,i)}function Tp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function bp(n,i,a){return a=a!=null?a.concat([n]):null,rl(4,4,Tp.bind(null,i,n),a)}function Eu(){}function Ap(n,i){var a=fi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Rp(n,i){var a=fi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Cp(n,i,a){return(es&21)===0?(n.baseState&&(n.baseState=!1,Xn=!0),n.memoizedState=a):(yi(a,i)||(a=Be(),tn.lanes|=a,ts|=a,n.baseState=!0),i)}function Rv(n,i){var a=yt;yt=a!==0&&4>a?a:4,n(!0);var c=gu.transition;gu.transition={};try{n(!1),i()}finally{yt=a,gu.transition=c}}function Pp(){return fi().memoizedState}function Cv(n,i,a){var c=Ar(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Np(n))Lp(i,a);else if(a=lp(n,i,a,c),a!==null){var f=On();Ti(a,n,c,f),Dp(a,i,c)}}function Pv(n,i,a){var c=Ar(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(n))Lp(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,B=m(T,a);if(f.hasEagerState=!0,f.eagerState=B,yi(B,T)){var q=i.interleaved;q===null?(f.next=f,uu(i)):(f.next=q.next,q.next=f),i.interleaved=f;return}}catch{}finally{}a=lp(n,i,f,c),a!==null&&(f=On(),Ti(a,n,c,f),Dp(a,i,c))}}function Np(n){var i=n.alternate;return n===tn||i!==null&&i===tn}function Lp(n,i){Ya=nl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Dp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Gn(n,a)}}var sl={readContext:ui,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},Nv={readContext:ui,useCallback:function(n,i){return Di().memoizedState=[n,i===void 0?null:i],n},useContext:ui,useEffect:Sp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,il(4194308,4,Tp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return il(4194308,4,n,i)},useInsertionEffect:function(n,i){return il(4,2,n,i)},useMemo:function(n,i){var a=Di();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Di();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Cv.bind(null,tn,n),[c.memoizedState,n]},useRef:function(n){var i=Di();return n={current:n},i.memoizedState=n},useState:yp,useDebugValue:Eu,useDeferredValue:function(n){return Di().memoizedState=n},useTransition:function(){var n=yp(!1),i=n[0];return n=Rv.bind(null,n[1]),Di().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tn,f=Di();if(Zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),mn===null)throw Error(t(349));(es&30)!==0||mp(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,Sp(vp.bind(null,c,m,n),[n]),c.flags|=2048,$a(9,gp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Di(),i=mn.identifierPrefix;if(Zt){var a=Ji,c=Qi;a=(c&~(1<<32-Re(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=qa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Av++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Lv={readContext:ui,useCallback:Ap,useContext:ui,useEffect:Su,useImperativeHandle:bp,useInsertionEffect:Ep,useLayoutEffect:wp,useMemo:Rp,useReducer:yu,useRef:Mp,useState:function(){return yu(ja)},useDebugValue:Eu,useDeferredValue:function(n){var i=fi();return Cp(i,un.memoizedState,n)},useTransition:function(){var n=yu(ja)[0],i=fi().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:pp,useId:Pp,unstable_isNewReconciler:!1},Dv={readContext:ui,useCallback:Ap,useContext:ui,useEffect:Su,useImperativeHandle:bp,useInsertionEffect:Ep,useLayoutEffect:wp,useMemo:Rp,useReducer:Mu,useRef:Mp,useState:function(){return Mu(ja)},useDebugValue:Eu,useDeferredValue:function(n){var i=fi();return un===null?i.memoizedState=n:Cp(i,un.memoizedState,n)},useTransition:function(){var n=Mu(ja)[0],i=fi().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:pp,useId:Pp,unstable_isNewReconciler:!1};function Si(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function wu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ne({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var al={isMounted:function(n){return(n=n._reactInternals)?Un(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=On(),f=Ar(n),m=tr(c,f);m.payload=i,a!=null&&(m.callback=a),i=Er(n,m,f),i!==null&&(Ti(i,n,f,c),Qo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=On(),f=Ar(n),m=tr(c,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Er(n,m,f),i!==null&&(Ti(i,n,f,c),Qo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=On(),c=Ar(n),f=tr(a,c);f.tag=2,i!=null&&(f.callback=i),i=Er(n,f,c),i!==null&&(Ti(i,n,c,a),Qo(i,n,c))}};function Ip(n,i,a,c,f,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Ua(a,c)||!Ua(f,m):!0}function Up(n,i,a){var c=!1,f=yr,m=i.contextType;return typeof m=="object"&&m!==null?m=ui(m):(f=Wn(i)?$r:Tn.current,c=i.contextTypes,m=(c=c!=null)?Ls(n,f):yr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=al,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function Fp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&al.enqueueReplaceState(i,i.state,null)}function Tu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},fu(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=ui(m):(m=Wn(i)?$r:Tn.current,f.context=Ls(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(wu(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&al.enqueueReplaceState(f,f.state,null),Jo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,i){try{var a="",c=i;do a+=Fe(c),c=c.return;while(c);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function bu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Au(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Iv=typeof WeakMap=="function"?WeakMap:Map;function Op(n,i,a){a=tr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){dl||(dl=!0,Gu=c),Au(n,i)},a}function kp(n,i,a){a=tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){Au(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Au(n,i),typeof c!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function zp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Iv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=jv.bind(null,n,i,a),i.then(n,n))}function Bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Vp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=tr(-1,1),i.tag=2,Er(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Uv=b.ReactCurrentOwner,Xn=!1;function Fn(n,i,a,c){i.child=n===null?op(i,null,a,c):Fs(i,n.child,a,c)}function Gp(n,i,a,c,f){a=a.render;var m=i.ref;return ks(i,f),c=xu(n,i,a,c,m,f),a=_u(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,nr(n,i,f)):(Zt&&a&&tu(i),i.flags|=1,Fn(n,i,c,f),i.child)}function Hp(n,i,a,c,f){if(n===null){var m=a.type;return typeof m=="function"&&!$u(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Wp(n,i,m,c,f)):(n=_l(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ua,a(T,c)&&n.ref===i.ref)return nr(n,i,f)}return i.flags|=1,n=Cr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Wp(n,i,a,c,f){if(n!==null){var m=n.memoizedProps;if(Ua(m,c)&&n.ref===i.ref)if(Xn=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Xn=!0);else return i.lanes=n.lanes,nr(n,i,f)}return Ru(n,i,a,c,f)}function Xp(n,i,a){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Gs,ei),ei|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ht(Gs,ei),ei|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ht(Gs,ei),ei|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Ht(Gs,ei),ei|=c;return Fn(n,i,f,a),i.child}function Yp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ru(n,i,a,c,f){var m=Wn(a)?$r:Tn.current;return m=Ls(i,m),ks(i,f),a=xu(n,i,a,c,m,f),c=_u(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,nr(n,i,f)):(Zt&&c&&tu(i),i.flags|=1,Fn(n,i,a,f),i.child)}function qp(n,i,a,c,f){if(Wn(a)){var m=!0;Wo(i)}else m=!1;if(ks(i,f),i.stateNode===null)ll(n,i),Up(i,a,c),Tu(i,a,c,f),c=!0;else if(n===null){var T=i.stateNode,B=i.memoizedProps;T.props=B;var q=T.context,he=a.contextType;typeof he=="object"&&he!==null?he=ui(he):(he=Wn(a)?$r:Tn.current,he=Ls(i,he));var ye=a.getDerivedStateFromProps,Me=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Me||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==c||q!==he)&&Fp(i,T,c,he),Sr=!1;var _e=i.memoizedState;T.state=_e,Jo(i,c,T,f),q=i.memoizedState,B!==c||_e!==q||Hn.current||Sr?(typeof ye=="function"&&(wu(i,a,ye,c),q=i.memoizedState),(B=Sr||Ip(i,a,B,c,_e,q,he))?(Me||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=q),T.props=c,T.state=q,T.context=he,c=B):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,cp(n,i),B=i.memoizedProps,he=i.type===i.elementType?B:Si(i.type,B),T.props=he,Me=i.pendingProps,_e=T.context,q=a.contextType,typeof q=="object"&&q!==null?q=ui(q):(q=Wn(a)?$r:Tn.current,q=Ls(i,q));var Ve=a.getDerivedStateFromProps;(ye=typeof Ve=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==Me||_e!==q)&&Fp(i,T,c,q),Sr=!1,_e=i.memoizedState,T.state=_e,Jo(i,c,T,f);var je=i.memoizedState;B!==Me||_e!==je||Hn.current||Sr?(typeof Ve=="function"&&(wu(i,a,Ve,c),je=i.memoizedState),(he=Sr||Ip(i,a,he,c,_e,je,q)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,je,q),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,je,q)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),T.props=c,T.state=je,T.context=q,c=he):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return Cu(n,i,a,c,m,f)}function Cu(n,i,a,c,f,m){Yp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&Qd(i,a,!1),nr(n,i,m);c=i.stateNode,Uv.current=i;var B=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Fs(i,n.child,null,m),i.child=Fs(i,null,B,m)):Fn(n,i,B,m),i.memoizedState=c.state,f&&Qd(i,a,!0),i.child}function jp(n){var i=n.stateNode;i.pendingContext?Kd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Kd(n,i.context,!1),hu(n,i.containerInfo)}function $p(n,i,a,c,f){return Us(),su(f),i.flags|=256,Fn(n,i,a,c),i.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Nu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kp(n,i,a){var c=i.pendingProps,f=en.current,m=!1,T=(i.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(f&2)!==0),B?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ht(en,f&1),n===null)return ru(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=yl(T,c,0,null),n=ss(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Nu(a),i.memoizedState=Pu,n):Lu(i,T));if(f=n.memoizedState,f!==null&&(B=f.dehydrated,B!==null))return Fv(n,i,T,c,B,f,a);if(m){m=c.fallback,T=i.mode,f=n.child,B=f.sibling;var q={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=q,i.deletions=null):(c=Cr(f,q),c.subtreeFlags=f.subtreeFlags&14680064),B!==null?m=Cr(B,m):(m=ss(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?Nu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=Pu,c}return m=n.child,n=m.sibling,c=Cr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Lu(n,i){return i=yl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ol(n,i,a,c){return c!==null&&su(c),Fs(i,n.child,null,a),n=Lu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Fv(n,i,a,c,f,m,T){if(a)return i.flags&256?(i.flags&=-257,c=bu(Error(t(422))),ol(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=yl({mode:"visible",children:c.children},f,0,null),m=ss(m,f,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Fs(i,n.child,null,T),i.child.memoizedState=Nu(T),i.memoizedState=Pu,m);if((i.mode&1)===0)return ol(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var B=c.dgst;return c=B,m=Error(t(419)),c=bu(m,c,void 0),ol(n,i,T,c)}if(B=(T&n.childLanes)!==0,Xn||B){if(c=mn,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,er(n,f),Ti(c,n,f,-1))}return ju(),c=bu(Error(t(421))),ol(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=$v.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Jn=xr(f.nextSibling),Qn=i,Zt=!0,Mi=null,n!==null&&(li[ci++]=Qi,li[ci++]=Ji,li[ci++]=Kr,Qi=n.id,Ji=n.overflow,Kr=i),i=Lu(i,c.children),i.flags|=4096,i)}function Zp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),cu(n.return,i,a)}function Du(n,i,a,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function Qp(n,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Fn(n,i,c.children,a),c=en.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Zp(n,a,i);else if(n.tag===19)Zp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ht(en,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&el(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Du(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&el(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Du(i,!0,a,null,m);break;case"together":Du(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ll(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function nr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ts|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Cr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Cr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ov(n,i,a){switch(i.tag){case 3:jp(i),Us();break;case 5:hp(i);break;case 1:Wn(i.type)&&Wo(i);break;case 4:hu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ht(Ko,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ht(en,en.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Kp(n,i,a):(Ht(en,en.current&1),n=nr(n,i,a),n!==null?n.sibling:null);Ht(en,en.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Qp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ht(en,en.current),c)break;return null;case 22:case 23:return i.lanes=0,Xp(n,i,a)}return nr(n,i,a)}var Jp,Iu,em,tm;Jp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Iu=function(){},em=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Jr(Li.current);var m=null;switch(a){case"input":f=Rt(n,f),c=Rt(n,c),m=[];break;case"select":f=ne({},f,{value:void 0}),c=ne({},c,{value:void 0}),m=[];break;case"textarea":f=Ae(n,f),c=Ae(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Vo)}Xe(a,c);var T;a=null;for(he in f)if(!c.hasOwnProperty(he)&&f.hasOwnProperty(he)&&f[he]!=null)if(he==="style"){var B=f[he];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(o.hasOwnProperty(he)?m||(m=[]):(m=m||[]).push(he,null));for(he in c){var q=c[he];if(B=f!=null?f[he]:void 0,c.hasOwnProperty(he)&&q!==B&&(q!=null||B!=null))if(he==="style")if(B){for(T in B)!B.hasOwnProperty(T)||q&&q.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in q)q.hasOwnProperty(T)&&B[T]!==q[T]&&(a||(a={}),a[T]=q[T])}else a||(m||(m=[]),m.push(he,a)),a=q;else he==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,B=B?B.__html:void 0,q!=null&&B!==q&&(m=m||[]).push(he,q)):he==="children"?typeof q!="string"&&typeof q!="number"||(m=m||[]).push(he,""+q):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(o.hasOwnProperty(he)?(q!=null&&he==="onScroll"&&qt("scroll",n),m||B===q||(m=[])):(m=m||[]).push(he,q))}a&&(m=m||[]).push("style",a);var he=m;(i.updateQueue=he)&&(i.flags|=4)}},tm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ka(n,i){if(!Zt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function An(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function kv(n,i,a){var c=i.pendingProps;switch(nu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(i),null;case 1:return Wn(i.type)&&Ho(),An(i),null;case 3:return c=i.stateNode,zs(),jt(Hn),jt(Tn),mu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(jo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mi!==null&&(Xu(Mi),Mi=null))),Iu(n,i),An(i),null;case 5:du(i);var f=Jr(Xa.current);if(a=i.type,n!==null&&i.stateNode!=null)em(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return An(i),null}if(n=Jr(Li.current),jo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ni]=i,c[Ba]=m,n=(i.mode&1)!==0,a){case"dialog":qt("cancel",c),qt("close",c);break;case"iframe":case"object":case"embed":qt("load",c);break;case"video":case"audio":for(f=0;f<Oa.length;f++)qt(Oa[f],c);break;case"source":qt("error",c);break;case"img":case"image":case"link":qt("error",c),qt("load",c);break;case"details":qt("toggle",c);break;case"input":St(c,m),qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},qt("invalid",c);break;case"textarea":Y(c,m),qt("invalid",c)}Xe(a,m),f=null;for(var T in m)if(m.hasOwnProperty(T)){var B=m[T];T==="children"?typeof B=="string"?c.textContent!==B&&(m.suppressHydrationWarning!==!0&&Bo(c.textContent,B,n),f=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(m.suppressHydrationWarning!==!0&&Bo(c.textContent,B,n),f=["children",""+B]):o.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&qt("scroll",c)}switch(a){case"input":We(c),Xt(c,m,!0);break;case"textarea":We(c),mt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Vo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Ni]=i,n[Ba]=c,Jp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ne(a,c),a){case"dialog":qt("cancel",n),qt("close",n),f=c;break;case"iframe":case"object":case"embed":qt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Oa.length;f++)qt(Oa[f],n);f=c;break;case"source":qt("error",n),f=c;break;case"img":case"image":case"link":qt("error",n),qt("load",n),f=c;break;case"details":qt("toggle",n),f=c;break;case"input":St(n,c),f=Rt(n,c),qt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ne({},c,{value:void 0}),qt("invalid",n);break;case"textarea":Y(n,c),f=Ae(n,c),qt("invalid",n);break;default:f=c}Xe(a,f),B=f;for(m in B)if(B.hasOwnProperty(m)){var q=B[m];m==="style"?ge(n,q):m==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&le(n,q)):m==="children"?typeof q=="string"?(a!=="textarea"||q!=="")&&de(n,q):typeof q=="number"&&de(n,""+q):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?q!=null&&m==="onScroll"&&qt("scroll",n):q!=null&&P(n,m,q,T))}switch(a){case"input":We(n),Xt(n,c,!1);break;case"textarea":We(n),mt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ue(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Ct(n,!!c.multiple,m,!1):c.defaultValue!=null&&Ct(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Vo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return An(i),null;case 6:if(n&&i.stateNode!=null)tm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Jr(Xa.current),Jr(Li.current),jo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ni]=i,(m=c.nodeValue!==a)&&(n=Qn,n!==null))switch(n.tag){case 3:Bo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Bo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ni]=i,i.stateNode=c}return An(i),null;case 13:if(jt(en),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Zt&&Jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)rp(),Us(),i.flags|=98560,m=!1;else if(m=jo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ni]=i}else Us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;An(i),m=!1}else Mi!==null&&(Xu(Mi),Mi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(en.current&1)!==0?fn===0&&(fn=3):ju())),i.updateQueue!==null&&(i.flags|=4),An(i),null);case 4:return zs(),Iu(n,i),n===null&&ka(i.stateNode.containerInfo),An(i),null;case 10:return lu(i.type._context),An(i),null;case 17:return Wn(i.type)&&Ho(),An(i),null;case 19:if(jt(en),m=i.memoizedState,m===null)return An(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Ka(m,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=el(n),T!==null){for(i.flags|=128,Ka(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ht(en,en.current&1|2),i.child}n=n.sibling}m.tail!==null&&Jt()>Hs&&(i.flags|=128,c=!0,Ka(m,!1),i.lanes=4194304)}else{if(!c)if(n=el(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ka(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Zt)return An(i),null}else 2*Jt()-m.renderingStartTime>Hs&&a!==1073741824&&(i.flags|=128,c=!0,Ka(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Jt(),i.sibling=null,a=en.current,Ht(en,c?a&1|2:a&1),i):(An(i),null);case 22:case 23:return qu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ei&1073741824)!==0&&(An(i),i.subtreeFlags&6&&(i.flags|=8192)):An(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function zv(n,i){switch(nu(i),i.tag){case 1:return Wn(i.type)&&Ho(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return zs(),jt(Hn),jt(Tn),mu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return du(i),null;case 13:if(jt(en),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Us()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return jt(en),null;case 4:return zs(),null;case 10:return lu(i.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var cl=!1,Rn=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Vs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rn(n,i,c)}else a.current=null}function Uu(n,i,a){try{a()}catch(c){rn(n,i,c)}}var nm=!1;function Vv(n,i){if(qc=Co,n=Id(),zc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,B=-1,q=-1,he=0,ye=0,Me=n,_e=null;t:for(;;){for(var Ve;Me!==a||f!==0&&Me.nodeType!==3||(B=T+f),Me!==m||c!==0&&Me.nodeType!==3||(q=T+c),Me.nodeType===3&&(T+=Me.nodeValue.length),(Ve=Me.firstChild)!==null;)_e=Me,Me=Ve;for(;;){if(Me===n)break t;if(_e===a&&++he===f&&(B=T),_e===m&&++ye===c&&(q=T),(Ve=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=Ve}a=B===-1||q===-1?null:{start:B,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(jc={focusedElem:n,selectionRange:a},Co=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ze=je.memoizedProps,sn=je.memoizedState,re=i.stateNode,Z=re.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:Si(i.type,Ze),sn);re.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var ce=i.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){rn(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return je=nm,nm=!1,je}function Za(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&Uu(i,a,m)}f=f.next}while(f!==c)}}function ul(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Fu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function im(n){var i=n.alternate;i!==null&&(n.alternate=null,im(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ni],delete i[Ba],delete i[Qc],delete i[Ev],delete i[wv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rm(n){return n.tag===5||n.tag===3||n.tag===4}function sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ou(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Vo));else if(c!==4&&(n=n.child,n!==null))for(Ou(n,i,a),n=n.sibling;n!==null;)Ou(n,i,a),n=n.sibling}function ku(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ku(n,i,a),n=n.sibling;n!==null;)ku(n,i,a),n=n.sibling}var yn=null,Ei=!1;function wr(n,i,a){for(a=a.child;a!==null;)am(n,i,a),a=a.sibling}function am(n,i,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:Rn||Vs(a,i);case 6:var c=yn,f=Ei;yn=null,wr(n,i,a),yn=c,Ei=f,yn!==null&&(Ei?(n=yn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(Ei?(n=yn,a=a.stateNode,n.nodeType===8?Zc(n.parentNode,a):n.nodeType===1&&Zc(n,a),Ca(n)):Zc(yn,a.stateNode));break;case 4:c=yn,f=Ei,yn=a.stateNode.containerInfo,Ei=!0,wr(n,i,a),yn=c,Ei=f;break;case 0:case 11:case 14:case 15:if(!Rn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&Uu(a,i,T),f=f.next}while(f!==c)}wr(n,i,a);break;case 1:if(!Rn&&(Vs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){rn(a,i,B)}wr(n,i,a);break;case 21:wr(n,i,a);break;case 22:a.mode&1?(Rn=(c=Rn)||a.memoizedState!==null,wr(n,i,a),Rn=c):wr(n,i,a);break;default:wr(n,i,a)}}function om(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Bv),i.forEach(function(c){var f=Kv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function wi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var m=n,T=i,B=T;e:for(;B!==null;){switch(B.tag){case 5:yn=B.stateNode,Ei=!1;break e;case 3:yn=B.stateNode.containerInfo,Ei=!0;break e;case 4:yn=B.stateNode.containerInfo,Ei=!0;break e}B=B.return}if(yn===null)throw Error(t(160));am(m,T,f),yn=null,Ei=!1;var q=f.alternate;q!==null&&(q.return=null),f.return=null}catch(he){rn(f,i,he)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)lm(i,n),i=i.sibling}function lm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(wi(i,n),Ii(n),c&4){try{Za(3,n,n.return),ul(3,n)}catch(Ze){rn(n,n.return,Ze)}try{Za(5,n,n.return)}catch(Ze){rn(n,n.return,Ze)}}break;case 1:wi(i,n),Ii(n),c&512&&a!==null&&Vs(a,a.return);break;case 5:if(wi(i,n),Ii(n),c&512&&a!==null&&Vs(a,a.return),n.flags&32){var f=n.stateNode;try{de(f,"")}catch(Ze){rn(n,n.return,Ze)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,B=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{B==="input"&&m.type==="radio"&&m.name!=null&&xt(f,m),Ne(B,T);var he=Ne(B,m);for(T=0;T<q.length;T+=2){var ye=q[T],Me=q[T+1];ye==="style"?ge(f,Me):ye==="dangerouslySetInnerHTML"?le(f,Me):ye==="children"?de(f,Me):P(f,ye,Me,he)}switch(B){case"input":Vt(f,m);break;case"textarea":Ge(f,m);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Ve=m.value;Ve!=null?Ct(f,!!m.multiple,Ve,!1):_e!==!!m.multiple&&(m.defaultValue!=null?Ct(f,!!m.multiple,m.defaultValue,!0):Ct(f,!!m.multiple,m.multiple?[]:"",!1))}f[Ba]=m}catch(Ze){rn(n,n.return,Ze)}}break;case 6:if(wi(i,n),Ii(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(Ze){rn(n,n.return,Ze)}}break;case 3:if(wi(i,n),Ii(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ca(i.containerInfo)}catch(Ze){rn(n,n.return,Ze)}break;case 4:wi(i,n),Ii(n);break;case 13:wi(i,n),Ii(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Vu=Jt())),c&4&&om(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(Rn=(he=Rn)||ye,wi(i,n),Rn=he):wi(i,n),Ii(n),c&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!ye&&(n.mode&1)!==0)for(Ye=n,ye=n.child;ye!==null;){for(Me=Ye=ye;Ye!==null;){switch(_e=Ye,Ve=_e.child,_e.tag){case 0:case 11:case 14:case 15:Za(4,_e,_e.return);break;case 1:Vs(_e,_e.return);var je=_e.stateNode;if(typeof je.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ze){rn(c,a,Ze)}}break;case 5:Vs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){fm(Me);continue}}Ve!==null?(Ve.return=_e,Ye=Ve):fm(Me)}ye=ye.sibling}e:for(ye=null,Me=n;;){if(Me.tag===5){if(ye===null){ye=Me;try{f=Me.stateNode,he?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(B=Me.stateNode,q=Me.memoizedProps.style,T=q!=null&&q.hasOwnProperty("display")?q.display:null,B.style.display=me("display",T))}catch(Ze){rn(n,n.return,Ze)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=he?"":Me.memoizedProps}catch(Ze){rn(n,n.return,Ze)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:wi(i,n),Ii(n),c&4&&om(n);break;case 21:break;default:wi(i,n),Ii(n)}}function Ii(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(rm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(de(f,""),c.flags&=-33);var m=sm(n);ku(n,m,f);break;case 3:case 4:var T=c.stateNode.containerInfo,B=sm(n);Ou(n,B,T);break;default:throw Error(t(161))}}catch(q){rn(n,n.return,q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Gv(n,i,a){Ye=n,cm(n)}function cm(n,i,a){for(var c=(n.mode&1)!==0;Ye!==null;){var f=Ye,m=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||cl;if(!T){var B=f.alternate,q=B!==null&&B.memoizedState!==null||Rn;B=cl;var he=Rn;if(cl=T,(Rn=q)&&!he)for(Ye=f;Ye!==null;)T=Ye,q=T.child,T.tag===22&&T.memoizedState!==null?hm(f):q!==null?(q.return=T,Ye=q):hm(f);for(;m!==null;)Ye=m,cm(m),m=m.sibling;Ye=f,cl=B,Rn=he}um(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Ye=m):um(n)}}function um(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Rn||ul(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Rn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Si(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&fp(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}fp(i,T,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&a.focus();break;case"img":q.src&&(a.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var he=i.alternate;if(he!==null){var ye=he.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&Ca(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Rn||i.flags&512&&Fu(i)}catch(_e){rn(i,i.return,_e)}}if(i===n){Ye=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function fm(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function hm(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ul(4,i)}catch(q){rn(i,a,q)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(q){rn(i,f,q)}}var m=i.return;try{Fu(i)}catch(q){rn(i,m,q)}break;case 5:var T=i.return;try{Fu(i)}catch(q){rn(i,T,q)}}}catch(q){rn(i,i.return,q)}if(i===n){Ye=null;break}var B=i.sibling;if(B!==null){B.return=i.return,Ye=B;break}Ye=i.return}}var Hv=Math.ceil,fl=b.ReactCurrentDispatcher,zu=b.ReactCurrentOwner,hi=b.ReactCurrentBatchConfig,Nt=0,mn=null,on=null,Mn=0,ei=0,Gs=_r(0),fn=0,Qa=null,ts=0,hl=0,Bu=0,Ja=null,Yn=null,Vu=0,Hs=1/0,ir=null,dl=!1,Gu=null,Tr=null,pl=!1,br=null,ml=0,eo=0,Hu=null,gl=-1,vl=0;function On(){return(Nt&6)!==0?Jt():gl!==-1?gl:gl=Jt()}function Ar(n){return(n.mode&1)===0?1:(Nt&2)!==0&&Mn!==0?Mn&-Mn:bv.transition!==null?(vl===0&&(vl=Be()),vl):(n=yt,n!==0||(n=window.event,n=n===void 0?16:pd(n.type)),n)}function Ti(n,i,a,c){if(50<eo)throw eo=0,Hu=null,Error(t(185));_t(n,a,c),((Nt&2)===0||n!==mn)&&(n===mn&&((Nt&2)===0&&(hl|=a),fn===4&&Rr(n,Mn)),qn(n,c),a===1&&Nt===0&&(i.mode&1)===0&&(Hs=Jt()+500,Xo&&Mr()))}function qn(n,i){var a=n.callbackNode;Ot(n,i);var c=Gt(n,n===mn?Mn:0);if(c===0)a!==null&&Ea(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ea(a),i===1)n.tag===0?Tv(pm.bind(null,n)):Jd(pm.bind(null,n)),Mv(function(){(Nt&6)===0&&Mr()}),a=null;else{switch($i(c)){case 1:a=wa;break;case 4:a=A;break;case 16:a=J;break;case 536870912:a=oe;break;default:a=J}a=Sm(a,dm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function dm(n,i){if(gl=-1,vl=0,(Nt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ws()&&n.callbackNode!==a)return null;var c=Gt(n,n===mn?Mn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=xl(n,c);else{i=c;var f=Nt;Nt|=2;var m=gm();(mn!==n||Mn!==i)&&(ir=null,Hs=Jt()+500,is(n,i));do try{Yv();break}catch(B){mm(n,B)}while(!0);ou(),fl.current=m,Nt=f,on!==null?i=0:(mn=null,Mn=0,i=fn)}if(i!==0){if(i===2&&(f=an(n),f!==0&&(c=f,i=Wu(n,f))),i===1)throw a=Qa,is(n,0),Rr(n,c),qn(n,Jt()),a;if(i===6)Rr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Wv(f)&&(i=xl(n,c),i===2&&(m=an(n),m!==0&&(c=m,i=Wu(n,m))),i===1))throw a=Qa,is(n,0),Rr(n,c),qn(n,Jt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:rs(n,Yn,ir);break;case 3:if(Rr(n,c),(c&130023424)===c&&(i=Vu+500-Jt(),10<i)){if(Gt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){On(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Kc(rs.bind(null,n,Yn,ir),i);break}rs(n,Yn,ir);break;case 4:if(Rr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-Re(c);m=1<<T,T=i[T],T>f&&(f=T),c&=~m}if(c=f,c=Jt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Hv(c/1960))-c,10<c){n.timeoutHandle=Kc(rs.bind(null,n,Yn,ir),c);break}rs(n,Yn,ir);break;case 5:rs(n,Yn,ir);break;default:throw Error(t(329))}}}return qn(n,Jt()),n.callbackNode===a?dm.bind(null,n):null}function Wu(n,i){var a=Ja;return n.current.memoizedState.isDehydrated&&(is(n,i).flags|=256),n=xl(n,i),n!==2&&(i=Yn,Yn=a,i!==null&&Xu(i)),n}function Xu(n){Yn===null?Yn=n:Yn.push.apply(Yn,n)}function Wv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!yi(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Rr(n,i){for(i&=~Bu,i&=~hl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Re(i),c=1<<a;n[a]=-1,i&=~c}}function pm(n){if((Nt&6)!==0)throw Error(t(327));Ws();var i=Gt(n,0);if((i&1)===0)return qn(n,Jt()),null;var a=xl(n,i);if(n.tag!==0&&a===2){var c=an(n);c!==0&&(i=c,a=Wu(n,c))}if(a===1)throw a=Qa,is(n,0),Rr(n,i),qn(n,Jt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,rs(n,Yn,ir),qn(n,Jt()),null}function Yu(n,i){var a=Nt;Nt|=1;try{return n(i)}finally{Nt=a,Nt===0&&(Hs=Jt()+500,Xo&&Mr())}}function ns(n){br!==null&&br.tag===0&&(Nt&6)===0&&Ws();var i=Nt;Nt|=1;var a=hi.transition,c=yt;try{if(hi.transition=null,yt=1,n)return n()}finally{yt=c,hi.transition=a,Nt=i,(Nt&6)===0&&Mr()}}function qu(){ei=Gs.current,jt(Gs)}function is(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,yv(a)),on!==null)for(a=on.return;a!==null;){var c=a;switch(nu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ho();break;case 3:zs(),jt(Hn),jt(Tn),mu();break;case 5:du(c);break;case 4:zs();break;case 13:jt(en);break;case 19:jt(en);break;case 10:lu(c.type._context);break;case 22:case 23:qu()}a=a.return}if(mn=n,on=n=Cr(n.current,null),Mn=ei=i,fn=0,Qa=null,Bu=hl=ts=0,Yn=Ja=null,Qr!==null){for(i=0;i<Qr.length;i++)if(a=Qr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=f,c.next=T}a.pending=c}Qr=null}return n}function mm(n,i){do{var a=on;try{if(ou(),tl.current=sl,nl){for(var c=tn.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}nl=!1}if(es=0,pn=un=tn=null,Ya=!1,qa=0,zu.current=null,a===null||a.return===null){fn=1,Qa=i,on=null;break}e:{var m=n,T=a.return,B=a,q=i;if(i=Mn,B.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var he=q,ye=B,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ve=Bp(T);if(Ve!==null){Ve.flags&=-257,Vp(Ve,T,B,m,i),Ve.mode&1&&zp(m,he,i),i=Ve,q=he;var je=i.updateQueue;if(je===null){var Ze=new Set;Ze.add(q),i.updateQueue=Ze}else je.add(q);break e}else{if((i&1)===0){zp(m,he,i),ju();break e}q=Error(t(426))}}else if(Zt&&B.mode&1){var sn=Bp(T);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Vp(sn,T,B,m,i),su(Bs(q,B));break e}}m=q=Bs(q,B),fn!==4&&(fn=2),Ja===null?Ja=[m]:Ja.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var re=Op(m,q,i);up(m,re);break e;case 1:B=q;var Z=m.type,ce=m.stateNode;if((m.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Tr===null||!Tr.has(ce)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=kp(m,B,i);up(m,we);break e}}m=m.return}while(m!==null)}xm(a)}catch(Je){i=Je,on===a&&a!==null&&(on=a=a.return);continue}break}while(!0)}function gm(){var n=fl.current;return fl.current=sl,n===null?sl:n}function ju(){(fn===0||fn===3||fn===2)&&(fn=4),mn===null||(ts&268435455)===0&&(hl&268435455)===0||Rr(mn,Mn)}function xl(n,i){var a=Nt;Nt|=2;var c=gm();(mn!==n||Mn!==i)&&(ir=null,is(n,i));do try{Xv();break}catch(f){mm(n,f)}while(!0);if(ou(),Nt=a,fl.current=c,on!==null)throw Error(t(261));return mn=null,Mn=0,fn}function Xv(){for(;on!==null;)vm(on)}function Yv(){for(;on!==null&&!Ao();)vm(on)}function vm(n){var i=Mm(n.alternate,n,ei);n.memoizedProps=n.pendingProps,i===null?xm(n):on=i,zu.current=null}function xm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=kv(a,i,ei),a!==null){on=a;return}}else{if(a=zv(a,i),a!==null){a.flags&=32767,on=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,on=null;return}}if(i=i.sibling,i!==null){on=i;return}on=i=n}while(i!==null);fn===0&&(fn=5)}function rs(n,i,a){var c=yt,f=hi.transition;try{hi.transition=null,yt=1,qv(n,i,a,c)}finally{hi.transition=f,yt=c}return null}function qv(n,i,a,c){do Ws();while(br!==null);if((Nt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Vn(n,m),n===mn&&(on=mn=null,Mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||pl||(pl=!0,Sm(J,function(){return Ws(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=hi.transition,hi.transition=null;var T=yt;yt=1;var B=Nt;Nt|=4,zu.current=null,Vv(n,a),lm(a,n),dv(jc),Co=!!qc,jc=qc=null,n.current=a,Gv(a),bc(),Nt=B,yt=T,hi.transition=m}else n.current=a;if(pl&&(pl=!1,br=n,ml=f),m=n.pendingLanes,m===0&&(Tr=null),He(a.stateNode),qn(n,Jt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(dl)throw dl=!1,n=Gu,Gu=null,n;return(ml&1)!==0&&n.tag!==0&&Ws(),m=n.pendingLanes,(m&1)!==0?n===Hu?eo++:(eo=0,Hu=n):eo=0,Mr(),null}function Ws(){if(br!==null){var n=$i(ml),i=hi.transition,a=yt;try{if(hi.transition=null,yt=16>n?16:n,br===null)var c=!1;else{if(n=br,br=null,ml=0,(Nt&6)!==0)throw Error(t(331));var f=Nt;for(Nt|=4,Ye=n.current;Ye!==null;){var m=Ye,T=m.child;if((Ye.flags&16)!==0){var B=m.deletions;if(B!==null){for(var q=0;q<B.length;q++){var he=B[q];for(Ye=he;Ye!==null;){var ye=Ye;switch(ye.tag){case 0:case 11:case 15:Za(8,ye,m)}var Me=ye.child;if(Me!==null)Me.return=ye,Ye=Me;else for(;Ye!==null;){ye=Ye;var _e=ye.sibling,Ve=ye.return;if(im(ye),ye===he){Ye=null;break}if(_e!==null){_e.return=Ve,Ye=_e;break}Ye=Ve}}}var je=m.alternate;if(je!==null){var Ze=je.child;if(Ze!==null){je.child=null;do{var sn=Ze.sibling;Ze.sibling=null,Ze=sn}while(Ze!==null)}}Ye=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Ye=T;else e:for(;Ye!==null;){if(m=Ye,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Za(9,m,m.return)}var re=m.sibling;if(re!==null){re.return=m.return,Ye=re;break e}Ye=m.return}}var Z=n.current;for(Ye=Z;Ye!==null;){T=Ye;var ce=T.child;if((T.subtreeFlags&2064)!==0&&ce!==null)ce.return=T,Ye=ce;else e:for(T=Z;Ye!==null;){if(B=Ye,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:ul(9,B)}}catch(Je){rn(B,B.return,Je)}if(B===T){Ye=null;break e}var we=B.sibling;if(we!==null){we.return=B.return,Ye=we;break e}Ye=B.return}}if(Nt=f,Mr(),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(ae,n)}catch{}c=!0}return c}finally{yt=a,hi.transition=i}}return!1}function _m(n,i,a){i=Bs(a,i),i=Op(n,i,1),n=Er(n,i,1),i=On(),n!==null&&(_t(n,1,i),qn(n,i))}function rn(n,i,a){if(n.tag===3)_m(n,n,a);else for(;i!==null;){if(i.tag===3){_m(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Tr===null||!Tr.has(c))){n=Bs(a,n),n=kp(i,n,1),i=Er(i,n,1),n=On(),i!==null&&(_t(i,1,n),qn(i,n));break}}i=i.return}}function jv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=On(),n.pingedLanes|=n.suspendedLanes&a,mn===n&&(Mn&a)===a&&(fn===4||fn===3&&(Mn&130023424)===Mn&&500>Jt()-Vu?is(n,0):Bu|=a),qn(n,i)}function ym(n,i){i===0&&((n.mode&1)===0?i=1:(i=Qe,Qe<<=1,(Qe&130023424)===0&&(Qe=4194304)));var a=On();n=er(n,i),n!==null&&(_t(n,i,a),qn(n,a))}function $v(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),ym(n,a)}function Kv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),ym(n,a)}var Mm;Mm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Hn.current)Xn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Xn=!1,Ov(n,i,a);Xn=(n.flags&131072)!==0}else Xn=!1,Zt&&(i.flags&1048576)!==0&&ep(i,qo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ll(n,i),n=i.pendingProps;var f=Ls(i,Tn.current);ks(i,a),f=xu(null,i,c,n,f,a);var m=_u();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wn(c)?(m=!0,Wo(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,fu(i),f.updater=al,i.stateNode=f,f._reactInternals=i,Tu(i,c,n,a),i=Cu(null,i,c,!0,m,a)):(i.tag=0,Zt&&m&&tu(i),Fn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ll(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Qv(c),n=Si(c,n),f){case 0:i=Ru(null,i,c,n,a);break e;case 1:i=qp(null,i,c,n,a);break e;case 11:i=Gp(null,i,c,n,a);break e;case 14:i=Hp(null,i,c,Si(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Si(c,f),Ru(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Si(c,f),qp(n,i,c,f,a);case 3:e:{if(jp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,cp(n,i),Jo(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Bs(Error(t(423)),i),i=$p(n,i,c,a,f);break e}else if(c!==f){f=Bs(Error(t(424)),i),i=$p(n,i,c,a,f);break e}else for(Jn=xr(i.stateNode.containerInfo.firstChild),Qn=i,Zt=!0,Mi=null,a=op(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Us(),c===f){i=nr(n,i,a);break e}Fn(n,i,c,a)}i=i.child}return i;case 5:return hp(i),n===null&&ru(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,T=f.children,$c(c,f)?T=null:m!==null&&$c(c,m)&&(i.flags|=32),Yp(n,i),Fn(n,i,T,a),i.child;case 6:return n===null&&ru(i),null;case 13:return Kp(n,i,a);case 4:return hu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Fs(i,null,c,a):Fn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Si(c,f),Gp(n,i,c,f,a);case 7:return Fn(n,i,i.pendingProps,a),i.child;case 8:return Fn(n,i,i.pendingProps.children,a),i.child;case 12:return Fn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,T=f.value,Ht(Ko,c._currentValue),c._currentValue=T,m!==null)if(yi(m.value,T)){if(m.children===f.children&&!Hn.current){i=nr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var B=m.dependencies;if(B!==null){T=m.child;for(var q=B.firstContext;q!==null;){if(q.context===c){if(m.tag===1){q=tr(-1,a&-a),q.tag=2;var he=m.updateQueue;if(he!==null){he=he.shared;var ye=he.pending;ye===null?q.next=q:(q.next=ye.next,ye.next=q),he.pending=q}}m.lanes|=a,q=m.alternate,q!==null&&(q.lanes|=a),cu(m.return,a,i),B.lanes|=a;break}q=q.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),cu(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Fn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,ks(i,a),f=ui(f),c=c(f),i.flags|=1,Fn(n,i,c,a),i.child;case 14:return c=i.type,f=Si(c,i.pendingProps),f=Si(c.type,f),Hp(n,i,c,f,a);case 15:return Wp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Si(c,f),ll(n,i),i.tag=1,Wn(c)?(n=!0,Wo(i)):n=!1,ks(i,a),Up(i,c,f),Tu(i,c,f,a),Cu(null,i,c,!0,n,a);case 19:return Qp(n,i,a);case 22:return Xp(n,i,a)}throw Error(t(156,i.tag))};function Sm(n,i){return Yr(n,i)}function Zv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,a,c){return new Zv(n,i,a,c)}function $u(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Qv(n){if(typeof n=="function")return $u(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===z)return 14}return 2}function Cr(n,i){var a=n.alternate;return a===null?(a=di(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _l(n,i,a,c,f,m){var T=2;if(c=n,typeof n=="function")$u(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case V:return ss(a.children,f,m,i);case w:T=8,f|=8;break;case N:return n=di(12,a,i,f|2),n.elementType=N,n.lanes=m,n;case D:return n=di(13,a,i,f),n.elementType=D,n.lanes=m,n;case G:return n=di(19,a,i,f),n.elementType=G,n.lanes=m,n;case H:return yl(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:T=10;break e;case X:T=9;break e;case $:T=11;break e;case z:T=14;break e;case k:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(T,a,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function ss(n,i,a,c){return n=di(7,n,c,i),n.lanes=a,n}function yl(n,i,a,c){return n=di(22,n,c,i),n.elementType=H,n.lanes=a,n.stateNode={isHidden:!1},n}function Ku(n,i,a){return n=di(6,n,null,i),n.lanes=a,n}function Zu(n,i,a){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Jv(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Qu(n,i,a,c,f,m,T,B,q){return n=new Jv(n,i,a,B,q),i===1?(i=1,m===!0&&(i|=8)):i=0,m=di(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(m),n}function ex(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Em(n){if(!n)return yr;n=n._reactInternals;e:{if(Un(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wn(a))return Zd(n,a,i)}return i}function wm(n,i,a,c,f,m,T,B,q){return n=Qu(a,c,!0,n,f,m,T,B,q),n.context=Em(null),a=n.current,c=On(),f=Ar(a),m=tr(c,f),m.callback=i??null,Er(a,m,f),n.current.lanes=f,_t(n,f,c),qn(n,c),n}function Ml(n,i,a,c){var f=i.current,m=On(),T=Ar(f);return a=Em(a),i.context===null?i.context=a:i.pendingContext=a,i=tr(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Er(f,i,T),n!==null&&(Ti(n,f,T,m),Qo(n,f,T)),T}function Sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ju(n,i){Tm(n,i),(n=n.alternate)&&Tm(n,i)}function tx(){return null}var bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ef(n){this._internalRoot=n}El.prototype.render=ef.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ml(n,i,null,null)},El.prototype.unmount=ef.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ns(function(){Ml(null,n,null,null)}),i[Ki]=null}};function El(n){this._internalRoot=n}El.prototype.unstable_scheduleHydration=function(n){if(n){var i=kt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<mr.length&&i!==0&&i<mr[a].priority;a++);mr.splice(a,0,n),a===0&&hd(n)}};function tf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Am(){}function nx(n,i,a,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var he=Sl(T);m.call(he)}}var T=wm(i,c,n,0,null,!1,!1,"",Am);return n._reactRootContainer=T,n[Ki]=T.current,ka(n.nodeType===8?n.parentNode:n),ns(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var B=c;c=function(){var he=Sl(q);B.call(he)}}var q=Qu(n,0,!1,null,null,!1,!1,"",Am);return n._reactRootContainer=q,n[Ki]=q.current,ka(n.nodeType===8?n.parentNode:n),ns(function(){Ml(i,q,a,c)}),q}function Tl(n,i,a,c,f){var m=a._reactRootContainer;if(m){var T=m;if(typeof f=="function"){var B=f;f=function(){var q=Sl(T);B.call(q)}}Ml(i,T,n,f)}else T=nx(a,i,n,f,c);return Sl(T)}Ut=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Pt(i.pendingLanes);a!==0&&(Gn(i,a|1),qn(i,Jt()),(Nt&6)===0&&(Hs=Jt()+500,Mr()))}break;case 13:ns(function(){var c=er(n,1);if(c!==null){var f=On();Ti(c,n,1,f)}}),Ju(n,1)}},Yt=function(n){if(n.tag===13){var i=er(n,134217728);if(i!==null){var a=On();Ti(i,n,134217728,a)}Ju(n,134217728)}},xi=function(n){if(n.tag===13){var i=Ar(n),a=er(n,i);if(a!==null){var c=On();Ti(a,n,i,c)}Ju(n,i)}},kt=function(){return yt},_i=function(n,i){var a=yt;try{return yt=n,i()}finally{yt=a}},it=function(n,i,a){switch(i){case"input":if(Vt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Go(c);if(!f)throw Error(t(90));At(c),Vt(c,f)}}}break;case"textarea":Ge(n,a);break;case"select":i=a.value,i!=null&&Ct(n,!!a.multiple,i,!1)}},Oe=Yu,xe=ns;var ix={usingClientEntryPoint:!1,Events:[Va,Ps,Go,ve,Ie,Yu]},to={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rx={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Xr(n),n===null?null:n.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||tx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{ae=bl.inject(rx),Pe=bl}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ix,jn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tf(i))throw Error(t(200));return ex(n,i,null,a)},jn.createRoot=function(n,i){if(!tf(n))throw Error(t(299));var a=!1,c="",f=bm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Qu(n,1,!1,null,null,a,!1,c,f),n[Ki]=i.current,ka(n.nodeType===8?n.parentNode:n),new ef(i)},jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Xr(i),n=n===null?null:n.stateNode,n},jn.flushSync=function(n){return ns(n)},jn.hydrate=function(n,i,a){if(!wl(i))throw Error(t(200));return Tl(null,n,i,!0,a)},jn.hydrateRoot=function(n,i,a){if(!tf(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,m="",T=bm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=wm(i,null,n,1,a??null,f,!1,m,T),n[Ki]=i.current,ka(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new El(i)},jn.render=function(n,i,a){if(!wl(i))throw Error(t(200));return Tl(null,n,i,!1,a)},jn.unmountComponentAtNode=function(n){if(!wl(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){Tl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ki]=null})}),!0):!1},jn.unstable_batchedUpdates=Yu,jn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!wl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Tl(n,i,a,!1,c)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var Um;function dx(){if(Um)return sf.exports;Um=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),sf.exports=hx(),sf.exports}var Fm;function px(){if(Fm)return Al;Fm=1;var s=dx();return Al.createRoot=s.createRoot,Al.hydrateRoot=s.hydrateRoot,Al}var mx=px();const gx=ax(mx);var ft=Oh();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="185",vx=0,Om=1,xx=2,nc=1,q0=2,mo=3,Br=0,$n=1,zi=2,Yi=0,ca=1,gs=2,km=3,zm=4,_x=5,hs=100,yx=101,Mx=102,Sx=103,Ex=104,wx=200,Tx=201,bx=202,Ax=203,Wf=204,Xf=205,Rx=206,Cx=207,Px=208,Nx=209,Lx=210,Dx=211,Ix=212,Ux=213,Fx=214,Yf=0,qf=1,jf=2,ha=3,$f=4,Kf=5,Zf=6,Qf=7,j0=0,Ox=1,kx=2,qi=0,zh=1,Bh=2,Vh=3,vc=4,Gh=5,Hh=6,Wh=7,$0=300,vs=301,da=302,lf=303,cf=304,xc=306,pa=1e3,cr=1001,Jf=1002,Sn=1003,zx=1004,Rl=1005,En=1006,uf=1007,ps=1008,si=1009,K0=1010,Z0=1011,vo=1012,Xh=1013,ji=1014,Gi=1015,ai=1016,Yh=1017,qh=1018,xo=1020,Q0=35902,J0=35899,eg=1021,tg=1022,Ci=1023,fr=1026,ms=1027,ng=1028,jh=1029,xs=1030,$h=1031,Kh=1033,ic=33776,rc=33777,sc=33778,ac=33779,eh=35840,th=35841,nh=35842,ih=35843,rh=36196,sh=37492,ah=37496,oh=37488,lh=37489,cc=37490,ch=37491,uh=37808,fh=37809,hh=37810,dh=37811,ph=37812,mh=37813,gh=37814,vh=37815,xh=37816,_h=37817,yh=37818,Mh=37819,Sh=37820,Eh=37821,wh=36492,Th=36494,bh=36495,Ah=36283,Rh=36284,uc=36285,Ch=36286,Bx=3200,Ph=0,Vx=1,Or="",Nn="srgb",fc="srgb-linear",hc="linear",Ft="srgb",Xs=7680,Bm=519,Gx=512,Hx=513,Wx=514,Zh=515,Xx=516,Yx=517,Qh=518,qx=519,Nh=35044,Vm="300 es",Hi=2e3,_o=2001;function jx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function dc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $x(){const s=dc("canvas");return s.style.display="block",s}const Gm={};function pc(...s){const e="THREE."+s.shift();console.log(e,...s)}function ig(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ct(...s){s=ig(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Tt(...s){s=ig(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ua(...s){const e=s.join(" ");e in Gm||(Gm[e]=!0,ct(...s))}function Kx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Zx={[Yf]:qf,[jf]:Zf,[$f]:Qf,[ha]:Kf,[qf]:Yf,[Zf]:jf,[Qf]:$f,[Kf]:ha};class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ff=Math.PI/180,Lh=180/Math.PI;function zr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function Qx(s,e){return(s%e+e)%e}function hf(s,e,t){return(1-t)*s+t*e}function Bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ad=class ad{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ad.prototype.isVector2=!0;let rt=ad;class xa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],h=r[o+1],v=r[o+2],y=r[o+3],g=l[u+0],S=l[u+1],E=l[u+2],R=l[u+3];if(y!==R||p!==g||h!==S||v!==E){let x=p*g+h*S+v*E+y*R;x<0&&(g=-g,S=-S,E=-E,R=-R,x=-x);let _=1-d;if(x<.9995){const I=Math.acos(x),P=Math.sin(I);_=Math.sin(_*I)/P,d=Math.sin(d*I)/P,p=p*_+g*d,h=h*_+S*d,v=v*_+E*d,y=y*_+R*d}else{p=p*_+g*d,h=h*_+S*d,v=v*_+E*d,y=y*_+R*d;const I=1/Math.sqrt(p*p+h*h+v*v+y*y);p*=I,h*=I,v*=I,y*=I}}e[t]=p,e[t+1]=h,e[t+2]=v,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],h=r[o+2],v=r[o+3],y=l[u],g=l[u+1],S=l[u+2],E=l[u+3];return e[t]=d*E+v*y+p*S-h*g,e[t+1]=p*E+v*g+h*y-d*S,e[t+2]=h*E+v*S+d*g-p*y,e[t+3]=v*E-d*y-p*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,h=d(r/2),v=d(o/2),y=d(l/2),g=p(r/2),S=p(o/2),E=p(l/2);switch(u){case"XYZ":this._x=g*v*y+h*S*E,this._y=h*S*y-g*v*E,this._z=h*v*E+g*S*y,this._w=h*v*y-g*S*E;break;case"YXZ":this._x=g*v*y+h*S*E,this._y=h*S*y-g*v*E,this._z=h*v*E-g*S*y,this._w=h*v*y+g*S*E;break;case"ZXY":this._x=g*v*y-h*S*E,this._y=h*S*y+g*v*E,this._z=h*v*E+g*S*y,this._w=h*v*y-g*S*E;break;case"ZYX":this._x=g*v*y-h*S*E,this._y=h*S*y+g*v*E,this._z=h*v*E-g*S*y,this._w=h*v*y+g*S*E;break;case"YZX":this._x=g*v*y+h*S*E,this._y=h*S*y+g*v*E,this._z=h*v*E-g*S*y,this._w=h*v*y-g*S*E;break;case"XZY":this._x=g*v*y-h*S*E,this._y=h*S*y-g*v*E,this._z=h*v*E+g*S*y,this._w=h*v*y+g*S*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],h=t[2],v=t[6],y=t[10],g=r+d+y;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-p)*S,this._y=(l-h)*S,this._z=(u-o)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(v-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+h)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(l-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(u-o)/S,this._x=(l+h)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,h=t._z,v=t._w;return this._x=r*v+u*d+o*h-l*p,this._y=o*v+u*p+l*d-r*h,this._z=l*v+u*h+r*p-o*d,this._w=u*v-r*d-o*p-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let p=1-t;if(d<.9995){const h=Math.acos(d),v=Math.sin(h);p=Math.sin(p*h)/v,t=Math.sin(t*h)/v,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const od=class od{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,h=2*(u*o-d*r),v=2*(d*t-l*o),y=2*(l*r-u*t);return this.x=t+p*h+u*y-d*v,this.y=r+p*v+d*h-l*y,this.z=o+p*y+l*v-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};od.prototype.isVector3=!0;let Q=od;const df=new Q,Hm=new xa,ld=class ld{constructor(e,t,r,o,l,u,d,p,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,h)}set(e,t,r,o,l,u,d,p,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=p,v[6]=r,v[7]=u,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],h=r[1],v=r[4],y=r[7],g=r[2],S=r[5],E=r[8],R=o[0],x=o[3],_=o[6],I=o[1],P=o[4],b=o[7],C=o[2],U=o[5],V=o[8];return l[0]=u*R+d*I+p*C,l[3]=u*x+d*P+p*U,l[6]=u*_+d*b+p*V,l[1]=h*R+v*I+y*C,l[4]=h*x+v*P+y*U,l[7]=h*_+v*b+y*V,l[2]=g*R+S*I+E*C,l[5]=g*x+S*P+E*U,l[8]=g*_+S*b+E*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],h=e[7],v=e[8];return t*u*v-t*d*h-r*l*v+r*d*p+o*l*h-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],h=e[7],v=e[8],y=v*u-d*h,g=d*p-v*l,S=h*l-u*p,E=t*y+r*g+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=y*R,e[1]=(o*h-v*r)*R,e[2]=(d*r-o*u)*R,e[3]=g*R,e[4]=(v*t-o*p)*R,e[5]=(o*l-d*t)*R,e[6]=S*R,e[7]=(r*p-h*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),h=Math.sin(l);return this.set(r*p,r*h,-r*(p*u+h*d)+u+e,-o*h,o*p,-o*(-h*u+p*d)+d+t,0,0,1),this}scale(e,t){return ua("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pf.makeScale(e,t)),this}rotate(e){return ua("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pf.makeRotation(-e)),this}translate(e,t){return ua("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ld.prototype.isMatrix3=!0;let pt=ld;const pf=new pt,Wm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jx(){const s={enabled:!0,workingColorSpace:fc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ft&&(o.r=ur(o.r),o.g=ur(o.g),o.b=ur(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(o.r=fa(o.r),o.g=fa(o.g),o.b=fa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Or?hc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ua("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ua("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[fc]:{primaries:e,whitePoint:r,transfer:hc,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),s}const Et=Jx();function ur(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ys;class e_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ys===void 0&&(Ys=dc("canvas")),Ys.width=e.width,Ys.height=e.height;const o=Ys.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ys}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ur(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ur(t[r]/255)*255):t[r]=ur(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t_=0;class Jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(mf(o[u].image)):l.push(mf(o[u]))}else l=mf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function mf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?e_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let n_=0;const gf=new Q;class Dn extends _s{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=cr,o=cr,l=En,u=ps,d=Ci,p=si,h=Dn.DEFAULT_ANISOTROPY,v=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=zr(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=p,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gf).x}get height(){return this.source.getSize(gf).y}get depth(){return this.source.getSize(gf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=$0;Dn.DEFAULT_ANISOTROPY=1;const cd=class cd{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,h=p[0],v=p[4],y=p[8],g=p[1],S=p[5],E=p[9],R=p[2],x=p[6],_=p[10];if(Math.abs(v-g)<.01&&Math.abs(y-R)<.01&&Math.abs(E-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(y+R)<.1&&Math.abs(E+x)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,b=(S+1)/2,C=(_+1)/2,U=(v+g)/4,V=(y+R)/4,w=(E+x)/4;return P>b&&P>C?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=U/r,l=V/r):b>C?b<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),r=U/o,l=w/o):C<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(C),r=V/l,o=w/l),this.set(r,o,l,t),this}let I=Math.sqrt((x-E)*(x-E)+(y-R)*(y-R)+(g-v)*(g-v));return Math.abs(I)<.001&&(I=1),this.x=(x-E)/I,this.y=(y-R)/I,this.z=(g-v)/I,this.w=Math.acos((h+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cd.prototype.isVector4=!0;let nn=cd;class i_ extends _s{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Dn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Jh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends i_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class rg extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class r_ extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gc=class gc{constructor(e,t,r,o,l,u,d,p,h,v,y,g,S,E,R,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,h,v,y,g,S,E,R,x)}set(e,t,r,o,l,u,d,p,h,v,y,g,S,E,R,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=p,_[2]=h,_[6]=v,_[10]=y,_[14]=g,_[3]=S,_[7]=E,_[11]=R,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/qs.setFromMatrixColumn(e,0).length(),l=1/qs.setFromMatrixColumn(e,1).length(),u=1/qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),h=Math.sin(o),v=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=u*v,S=u*y,E=d*v,R=d*y;t[0]=p*v,t[4]=-p*y,t[8]=h,t[1]=S+E*h,t[5]=g-R*h,t[9]=-d*p,t[2]=R-g*h,t[6]=E+S*h,t[10]=u*p}else if(e.order==="YXZ"){const g=p*v,S=p*y,E=h*v,R=h*y;t[0]=g+R*d,t[4]=E*d-S,t[8]=u*h,t[1]=u*y,t[5]=u*v,t[9]=-d,t[2]=S*d-E,t[6]=R+g*d,t[10]=u*p}else if(e.order==="ZXY"){const g=p*v,S=p*y,E=h*v,R=h*y;t[0]=g-R*d,t[4]=-u*y,t[8]=E+S*d,t[1]=S+E*d,t[5]=u*v,t[9]=R-g*d,t[2]=-u*h,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const g=u*v,S=u*y,E=d*v,R=d*y;t[0]=p*v,t[4]=E*h-S,t[8]=g*h+R,t[1]=p*y,t[5]=R*h+g,t[9]=S*h-E,t[2]=-h,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const g=u*p,S=u*h,E=d*p,R=d*h;t[0]=p*v,t[4]=R-g*y,t[8]=E*y+S,t[1]=y,t[5]=u*v,t[9]=-d*v,t[2]=-h*v,t[6]=S*y+E,t[10]=g-R*y}else if(e.order==="XZY"){const g=u*p,S=u*h,E=d*p,R=d*h;t[0]=p*v,t[4]=-y,t[8]=h*v,t[1]=g*y+R,t[5]=u*v,t[9]=S*y-E,t[2]=E*y-S,t[6]=d*v,t[10]=R*y+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s_,e,a_)}lookAt(e,t,r){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Nr.crossVectors(r,ti),Nr.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Nr.crossVectors(r,ti)),Nr.normalize(),Cl.crossVectors(ti,Nr),o[0]=Nr.x,o[4]=Cl.x,o[8]=ti.x,o[1]=Nr.y,o[5]=Cl.y,o[9]=ti.y,o[2]=Nr.z,o[6]=Cl.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],h=r[12],v=r[1],y=r[5],g=r[9],S=r[13],E=r[2],R=r[6],x=r[10],_=r[14],I=r[3],P=r[7],b=r[11],C=r[15],U=o[0],V=o[4],w=o[8],N=o[12],j=o[1],X=o[5],$=o[9],D=o[13],G=o[2],z=o[6],k=o[10],H=o[14],W=o[3],ie=o[7],ne=o[11],F=o[15];return l[0]=u*U+d*j+p*G+h*W,l[4]=u*V+d*X+p*z+h*ie,l[8]=u*w+d*$+p*k+h*ne,l[12]=u*N+d*D+p*H+h*F,l[1]=v*U+y*j+g*G+S*W,l[5]=v*V+y*X+g*z+S*ie,l[9]=v*w+y*$+g*k+S*ne,l[13]=v*N+y*D+g*H+S*F,l[2]=E*U+R*j+x*G+_*W,l[6]=E*V+R*X+x*z+_*ie,l[10]=E*w+R*$+x*k+_*ne,l[14]=E*N+R*D+x*H+_*F,l[3]=I*U+P*j+b*G+C*W,l[7]=I*V+P*X+b*z+C*ie,l[11]=I*w+P*$+b*k+C*ne,l[15]=I*N+P*D+b*H+C*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],h=e[13],v=e[2],y=e[6],g=e[10],S=e[14],E=e[3],R=e[7],x=e[11],_=e[15],I=p*S-h*g,P=d*S-h*y,b=d*g-p*y,C=u*S-h*v,U=u*g-p*v,V=u*y-d*v;return t*(R*I-x*P+_*b)-r*(E*I-x*C+_*U)+o*(E*P-R*C+_*V)-l*(E*b-R*U+x*V)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],d=e[9],p=e[2],h=e[6],v=e[10];return t*(u*v-d*h)-r*(l*v-d*p)+o*(l*h-u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],h=e[7],v=e[8],y=e[9],g=e[10],S=e[11],E=e[12],R=e[13],x=e[14],_=e[15],I=t*d-r*u,P=t*p-o*u,b=t*h-l*u,C=r*p-o*d,U=r*h-l*d,V=o*h-l*p,w=v*R-y*E,N=v*x-g*E,j=v*_-S*E,X=y*x-g*R,$=y*_-S*R,D=g*_-S*x,G=I*D-P*$+b*X+C*j-U*N+V*w;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return e[0]=(d*D-p*$+h*X)*z,e[1]=(o*$-r*D-l*X)*z,e[2]=(R*V-x*U+_*C)*z,e[3]=(g*U-y*V-S*C)*z,e[4]=(p*j-u*D-h*N)*z,e[5]=(t*D-o*j+l*N)*z,e[6]=(x*b-E*V-_*P)*z,e[7]=(v*V-g*b+S*P)*z,e[8]=(u*$-d*j+h*w)*z,e[9]=(r*j-t*$-l*w)*z,e[10]=(E*U-R*b+_*I)*z,e[11]=(y*b-v*U-S*I)*z,e[12]=(d*N-u*X-p*w)*z,e[13]=(t*X-r*N+o*w)*z,e[14]=(R*P-E*C-x*I)*z,e[15]=(v*C-y*P+g*I)*z,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,h=l*u,v=l*d;return this.set(h*u+r,h*d-o*p,h*p+o*d,0,h*d+o*p,v*d+r,v*p-o*u,0,h*p-o*d,v*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,h=l+l,v=u+u,y=d+d,g=l*h,S=l*v,E=l*y,R=u*v,x=u*y,_=d*y,I=p*h,P=p*v,b=p*y,C=r.x,U=r.y,V=r.z;return o[0]=(1-(R+_))*C,o[1]=(S+b)*C,o[2]=(E-P)*C,o[3]=0,o[4]=(S-b)*U,o[5]=(1-(g+_))*U,o[6]=(x+I)*U,o[7]=0,o[8]=(E+P)*V,o[9]=(x-I)*V,o[10]=(1-(g+R))*V,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=qs.set(o[0],o[1],o[2]).length();const d=qs.set(o[4],o[5],o[6]).length(),p=qs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),bi.copy(this);const h=1/u,v=1/d,y=1/p;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=y,bi.elements[9]*=y,bi.elements[10]*=y,t.setFromRotationMatrix(bi),r.x=u,r.y=d,r.z=p,this}makePerspective(e,t,r,o,l,u,d=Hi,p=!1){const h=this.elements,v=2*l/(t-e),y=2*l/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let E,R;if(p)E=l/(u-l),R=u*l/(u-l);else if(d===Hi)E=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(d===_o)E=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=y,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Hi,p=!1){const h=this.elements,v=2/(t-e),y=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let E,R;if(p)E=1/(u-l),R=u/(u-l);else if(d===Hi)E=-2/(u-l),R=-(u+l)/(u-l);else if(d===_o)E=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=y,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=E,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};gc.prototype.isMatrix4=!0;let $t=gc;const qs=new Q,bi=new $t,s_=new Q(0,0,0),a_=new Q(1,1,1),Nr=new Q,Cl=new Q,ti=new Q,Ym=new $t,qm=new xa;class Vr{constructor(e=0,t=0,r=0,o=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],h=o[5],v=o[9],y=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-bt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ym,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o_=0;const jm=new Q,js=new xa,rr=new $t,Pl=new Q,io=new Q,l_=new Q,c_=new xa,$m=new Q(1,0,0),Km=new Q(0,1,0),Zm=new Q(0,0,1),Qm={type:"added"},u_={type:"removed"},$s={type:"childadded",child:null},vf={type:"childremoved",child:null};class Wt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new Q,t=new Vr,r=new xa,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new pt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Km,e)}rotateZ(e){return this.rotateOnAxis(Zm,e)}translateOnAxis(e,t){return jm.copy(e).applyQuaternion(this.quaternion),this.position.add(jm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Km,e)}translateZ(e){return this.translateOnAxis(Zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Pl.copy(e):Pl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(io,Pl,this.up):rr.lookAt(Pl,io,this.up),this.quaternion.setFromRotationMatrix(rr),o&&(rr.extractRotation(o.matrixWorld),js.setFromRotationMatrix(rr),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qm),$s.child=e,this.dispatchEvent($s),$s.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u_),vf.child=e,this.dispatchEvent(vf),vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qm),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,c_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let h=0,v=p.length;h<v;h++){const y=p[h];l(e.shapes,y)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,h=this.material.length;p<h;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),h=u(e.textures),v=u(e.images),y=u(e.shapes),g=u(e.skeletons),S=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const p=[];for(const h in d){const v=d[h];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Wt.DEFAULT_UP=new Q(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wi extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f_={type:"move"};class xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const R of e.hand.values()){const x=t.getJointPose(R,r),_=this._getHandJoint(h,R);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const v=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],g=v.position.distanceTo(y.position),S=.02,E=.005;h.inputState.pinching&&g>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Wi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function _f(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Et.workingColorSpace){if(e=Qx(e,1),t=bt(t,0,1),r=bt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=_f(u,l,e+1/3),this.g=_f(u,l,e),this.b=_f(u,l,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,t=Nn){function r(l){l!==void 0&&parseFloat(l)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const r=sg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Et.workingToColorSpace(Pn.copy(this),e),Math.round(bt(Pn.r*255,0,255))*65536+Math.round(bt(Pn.g*255,0,255))*256+Math.round(bt(Pn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Pn.copy(this),t);const r=Pn.r,o=Pn.g,l=Pn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,h;const v=(d+u)/2;if(d===u)p=0,h=0;else{const y=u-d;switch(h=v<=.5?y/(u+d):y/(2-u-d),u){case r:p=(o-l)/y+(o<l?6:0);break;case o:p=(l-r)/y+2;break;case l:p=(r-o)/y+4;break}p/=6}return e.h=p,e.s=h,e.l=v,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Nn){Et.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,r=Pn.g,o=Pn.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(Nl);const r=hf(Lr.h,Nl.h,t),o=hf(Lr.s,Nl.s,t),l=hf(Lr.l,Nl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new gt;gt.NAMES=sg;class td{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new gt(e),this.near=t,this.far=r}clone(){return new td(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class h_ extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ai=new Q,sr=new Q,yf=new Q,ar=new Q,Ks=new Q,Zs=new Q,Jm=new Q,Mf=new Q,Sf=new Q,Ef=new Q,wf=new nn,Tf=new nn,bf=new nn;class gi{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ai.subVectors(e,t),o.cross(Ai);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ai.subVectors(o,t),sr.subVectors(r,t),yf.subVectors(e,t);const u=Ai.dot(Ai),d=Ai.dot(sr),p=Ai.dot(yf),h=sr.dot(sr),v=sr.dot(yf),y=u*h-d*d;if(y===0)return l.set(0,0,0),null;const g=1/y,S=(h*p-d*v)*g,E=(u*v-d*p)*g;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,ar)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,ar.x),p.addScaledVector(u,ar.y),p.addScaledVector(d,ar.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return wf.setScalar(0),Tf.setScalar(0),bf.setScalar(0),wf.fromBufferAttribute(e,t),Tf.fromBufferAttribute(e,r),bf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(wf,l.x),u.addScaledVector(Tf,l.y),u.addScaledVector(bf,l.z),u}static isFrontFacing(e,t,r,o){return Ai.subVectors(r,t),sr.subVectors(e,t),Ai.cross(sr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ai.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return gi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Ks.subVectors(o,r),Zs.subVectors(l,r),Mf.subVectors(e,r);const p=Ks.dot(Mf),h=Zs.dot(Mf);if(p<=0&&h<=0)return t.copy(r);Sf.subVectors(e,o);const v=Ks.dot(Sf),y=Zs.dot(Sf);if(v>=0&&y<=v)return t.copy(o);const g=p*y-v*h;if(g<=0&&p>=0&&v<=0)return u=p/(p-v),t.copy(r).addScaledVector(Ks,u);Ef.subVectors(e,l);const S=Ks.dot(Ef),E=Zs.dot(Ef);if(E>=0&&S<=E)return t.copy(l);const R=S*h-p*E;if(R<=0&&h>=0&&E<=0)return d=h/(h-E),t.copy(r).addScaledVector(Zs,d);const x=v*E-S*y;if(x<=0&&y-v>=0&&S-E>=0)return Jm.subVectors(l,o),d=(y-v)/(y-v+(S-E)),t.copy(o).addScaledVector(Jm,d);const _=1/(x+R+g);return u=R*_,d=g*_,t.copy(r).addScaledVector(Ks,u).addScaledVector(Zs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class So{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ri):Ri.fromBufferAttribute(l,u),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ll.copy(r.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),Dl.subVectors(this.max,ro),Qs.subVectors(e.a,ro),Js.subVectors(e.b,ro),ea.subVectors(e.c,ro),Dr.subVectors(Js,Qs),Ir.subVectors(ea,Js),as.subVectors(Qs,ea);let t=[0,-Dr.z,Dr.y,0,-Ir.z,Ir.y,0,-as.z,as.y,Dr.z,0,-Dr.x,Ir.z,0,-Ir.x,as.z,0,-as.x,-Dr.y,Dr.x,0,-Ir.y,Ir.x,0,-as.y,as.x,0];return!Af(t,Qs,Js,ea,Dl)||(t=[1,0,0,0,1,0,0,0,1],!Af(t,Qs,Js,ea,Dl))?!1:(Il.crossVectors(Dr,Ir),t=[Il.x,Il.y,Il.z],Af(t,Qs,Js,ea,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ri=new Q,Ll=new So,Qs=new Q,Js=new Q,ea=new Q,Dr=new Q,Ir=new Q,as=new Q,ro=new Q,Dl=new Q,Il=new Q,os=new Q;function Af(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){os.fromArray(s,l);const d=o.x*Math.abs(os.x)+o.y*Math.abs(os.y)+o.z*Math.abs(os.z),p=e.dot(os),h=t.dot(os),v=r.dot(os);if(Math.max(-Math.max(p,h,v),Math.min(p,h,v))>d)return!1}return!0}const ln=new Q,Ul=new rt;let d_=0;class vi extends _s{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Nh,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Bt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),o=Bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),o=Bt(o,this.array),l=Bt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ag extends vi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class og extends vi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class cn extends vi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const p_=new So,so=new Q,Rf=new Q;class _c{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):p_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);const t=so.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(so,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(Rf)),this.expandByPoint(so.copy(e.center).sub(Rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let m_=0;const pi=new $t,Cf=new Wt,ta=new Q,ni=new So,ao=new So,vn=new Q;class In extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jx(e)?og:ag)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return Cf.lookAt(e),Cf.updateMatrix(),this.applyMatrix4(Cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new cn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _c);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];ao.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ni.min,ao.min),ni.expandByPoint(vn),vn.addVectors(ni.max,ao.max),ni.expandByPoint(vn)):(ni.expandByPoint(ao.min),ni.expandByPoint(ao.max))}ni.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)vn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(vn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let h=0,v=d.count;h<v;h++)vn.fromBufferAttribute(d,h),p&&(ta.fromBufferAttribute(e,h),vn.add(ta)),o=Math.max(o,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new vi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],p=[];for(let w=0;w<r.count;w++)d[w]=new Q,p[w]=new Q;const h=new Q,v=new Q,y=new Q,g=new rt,S=new rt,E=new rt,R=new Q,x=new Q;function _(w,N,j){h.fromBufferAttribute(r,w),v.fromBufferAttribute(r,N),y.fromBufferAttribute(r,j),g.fromBufferAttribute(l,w),S.fromBufferAttribute(l,N),E.fromBufferAttribute(l,j),v.sub(h),y.sub(h),S.sub(g),E.sub(g);const X=1/(S.x*E.y-E.x*S.y);isFinite(X)&&(R.copy(v).multiplyScalar(E.y).addScaledVector(y,-S.y).multiplyScalar(X),x.copy(y).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(X),d[w].add(R),d[N].add(R),d[j].add(R),p[w].add(x),p[N].add(x),p[j].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let w=0,N=I.length;w<N;++w){const j=I[w],X=j.start,$=j.count;for(let D=X,G=X+$;D<G;D+=3)_(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const P=new Q,b=new Q,C=new Q,U=new Q;function V(w){C.fromBufferAttribute(o,w),U.copy(C);const N=d[w];P.copy(N),P.sub(C.multiplyScalar(C.dot(N))).normalize(),b.crossVectors(U,N);const X=b.dot(p[w])<0?-1:1;u.setXYZW(w,P.x,P.y,P.z,X)}for(let w=0,N=I.length;w<N;++w){const j=I[w],X=j.start,$=j.count;for(let D=X,G=X+$;D<G;D+=3)V(e.getX(D+0)),V(e.getX(D+1)),V(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new Q,l=new Q,u=new Q,d=new Q,p=new Q,h=new Q,v=new Q,y=new Q;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),R=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,x),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),h.fromBufferAttribute(r,x),d.add(v),p.add(v),h.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,p){const h=d.array,v=d.itemSize,y=d.normalized,g=new h.constructor(p.length*v);let S=0,E=0;for(let R=0,x=p.length;R<x;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*v;for(let _=0;_<v;_++)g[E++]=h[S++]}return new vi(g,v,y)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],h=e(p,r);t.setAttribute(d,h)}const l=this.morphAttributes;for(const d in l){const p=[],h=l[d];for(let v=0,y=h.length;v<y;v++){const g=h[v],S=e(g,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const h=u[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],v=[];for(let y=0,g=h.length;y<g;y++){const S=h[y];v.push(S.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(t))}const l=e.morphAttributes;for(const h in l){const v=[],y=l[h];for(let g=0,S=y.length;g<S;g++)v.push(y[g].clone(t));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,v=u.length;h<v;h++){const y=u[h];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class g_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nh,this.updateRanges=[],this.version=0,this.uuid=zr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new Q;class mc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Bi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Bt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),o=Bt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),r=Bt(r,this.array),o=Bt(o,this.array),l=Bt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){pc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new vi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let v_=0;class ys extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=ca,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wf,this.blendDst=Xf,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(r.blending=this.blending),this.side!==Br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wf&&(r.blendSrc=this.blendSrc),this.blendDst!==Xf&&(r.blendDst=this.blendDst),this.blendEquation!==hs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new rt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lg extends ys{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let na;const oo=new Q,ia=new Q,ra=new Q,sa=new rt,lo=new rt,cg=new $t,Fl=new Q,co=new Q,Ol=new Q,e0=new rt,Pf=new rt,t0=new rt;class x_ extends Wt{constructor(e=new lg){if(super(),this.isSprite=!0,this.type="Sprite",na===void 0){na=new In;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new g_(t,5);na.setIndex([0,1,2,0,2,3]),na.setAttribute("position",new mc(r,3,0,!1)),na.setAttribute("uv",new mc(r,2,3,!1))}this.geometry=na,this.material=e,this.center=new rt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ia.setFromMatrixScale(this.matrixWorld),cg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ra.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ia.multiplyScalar(-ra.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;kl(Fl.set(-.5,-.5,0),ra,u,ia,o,l),kl(co.set(.5,-.5,0),ra,u,ia,o,l),kl(Ol.set(.5,.5,0),ra,u,ia,o,l),e0.set(0,0),Pf.set(1,0),t0.set(1,1);let d=e.ray.intersectTriangle(Fl,co,Ol,!1,oo);if(d===null&&(kl(co.set(-.5,.5,0),ra,u,ia,o,l),Pf.set(0,1),d=e.ray.intersectTriangle(Fl,Ol,co,!1,oo),d===null))return;const p=e.ray.origin.distanceTo(oo);p<e.near||p>e.far||t.push({distance:p,point:oo.clone(),uv:gi.getInterpolation(oo,Fl,co,Ol,e0,Pf,t0,new rt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kl(s,e,t,r,o,l){sa.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(lo.x=l*sa.x-o*sa.y,lo.y=o*sa.x+l*sa.y):lo.copy(sa),s.copy(e),s.x+=lo.x,s.y+=lo.y,s.applyMatrix4(cg)}const lr=new Q,Nf=new Q,zl=new Q,Ur=new Q,Lf=new Q,Bl=new Q,Df=new Q;class nd{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Nf.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(Nf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(zl),d=Ur.dot(this.direction),p=-Ur.dot(zl),h=Ur.lengthSq(),v=Math.abs(1-u*u);let y,g,S,E;if(v>0)if(y=u*p-d,g=u*d-p,E=l*v,y>=0)if(g>=-E)if(g<=E){const R=1/v;y*=R,g*=R,S=y*(y+u*g+2*d)+g*(u*y+g+2*p)+h}else g=l,y=Math.max(0,-(u*g+d)),S=-y*y+g*(g+2*p)+h;else g=-l,y=Math.max(0,-(u*g+d)),S=-y*y+g*(g+2*p)+h;else g<=-E?(y=Math.max(0,-(-u*l+d)),g=y>0?-l:Math.min(Math.max(-l,-p),l),S=-y*y+g*(g+2*p)+h):g<=E?(y=0,g=Math.min(Math.max(-l,-p),l),S=g*(g+2*p)+h):(y=Math.max(0,-(u*l+d)),g=y>0?l:Math.min(Math.max(-l,-p),l),S=-y*y+g*(g+2*p)+h);else g=u>0?-l:l,y=Math.max(0,-(u*g+d)),S=-y*y+g*(g+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Nf).addScaledVector(zl,g),S}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const r=lr.dot(this.direction),o=lr.dot(lr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const h=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),y>=0?(d=(e.min.z-g.z)*y,p=(e.max.z-g.z)*y):(d=(e.max.z-g.z)*y,p=(e.min.z-g.z)*y),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,r,o,l){Lf.subVectors(t,e),Bl.subVectors(r,e),Df.crossVectors(Lf,Bl);let u=this.direction.dot(Df),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ur.subVectors(this.origin,e);const p=d*this.direction.dot(Bl.crossVectors(Ur,Bl));if(p<0)return null;const h=d*this.direction.dot(Lf.cross(Ur));if(h<0||p+h>u)return null;const v=-d*Ur.dot(Df);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vi extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=j0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const n0=new $t,ls=new nd,Vl=new _c,i0=new Q,Gl=new Q,Hl=new Q,Wl=new Q,If=new Q,Xl=new Q,r0=new Q,Yl=new Q;class wt extends Wt{constructor(e=new In,t=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Xl.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const v=d[p],y=l[p];v!==0&&(If.fromBufferAttribute(y,e),u?Xl.addScaledVector(If,v):Xl.addScaledVector(If.sub(t),v))}t.add(Xl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(l),ls.copy(e.ray).recast(e.near),!(Vl.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Vl,i0)===null||ls.origin.distanceToSquared(i0)>(e.far-e.near)**2))&&(n0.copy(l).invert(),ls.copy(e.ray).applyMatrix4(n0),!(r.boundingBox!==null&&ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,h=l.attributes.uv,v=l.attributes.uv1,y=l.attributes.normal,g=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const x=g[E],_=u[x.materialIndex],I=Math.max(x.start,S.start),P=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let b=I,C=P;b<C;b+=3){const U=d.getX(b),V=d.getX(b+1),w=d.getX(b+2);o=ql(this,_,e,r,h,v,y,U,V,w),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let x=E,_=R;x<_;x+=3){const I=d.getX(x),P=d.getX(x+1),b=d.getX(x+2);o=ql(this,u,e,r,h,v,y,I,P,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const x=g[E],_=u[x.materialIndex],I=Math.max(x.start,S.start),P=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let b=I,C=P;b<C;b+=3){const U=b,V=b+1,w=b+2;o=ql(this,_,e,r,h,v,y,U,V,w),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let x=E,_=R;x<_;x+=3){const I=x,P=x+1,b=x+2;o=ql(this,u,e,r,h,v,y,I,P,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function __(s,e,t,r,o,l,u,d){let p;if(e.side===$n?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Br,d),p===null)return null;Yl.copy(d),Yl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Yl);return h<t.near||h>t.far?null:{distance:h,point:Yl.clone(),object:s}}function ql(s,e,t,r,o,l,u,d,p,h){s.getVertexPosition(d,Gl),s.getVertexPosition(p,Hl),s.getVertexPosition(h,Wl);const v=__(s,e,t,r,Gl,Hl,Wl,r0);if(v){const y=new Q;gi.getBarycoord(r0,Gl,Hl,Wl,y),o&&(v.uv=gi.getInterpolatedAttribute(o,d,p,h,y,new rt)),l&&(v.uv1=gi.getInterpolatedAttribute(l,d,p,h,y,new rt)),u&&(v.normal=gi.getInterpolatedAttribute(u,d,p,h,y,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:p,c:h,normal:new Q,materialIndex:0};gi.getNormal(Gl,Hl,Wl,g.normal),v.face=g,v.barycoord=y}return v}class y_ extends Dn{constructor(e=null,t=1,r=1,o,l,u,d,p,h=Sn,v=Sn,y,g){super(null,u,d,p,h,v,o,l,y,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uf=new Q,M_=new Q,S_=new pt;class fs{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Uf.subVectors(r,t).cross(M_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Uf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||S_.getNormalMatrix(e),o=this.coplanarPoint(Uf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new _c,E_=new rt(.5,.5),jl=new Q;class id{constructor(e=new fs,t=new fs,r=new fs,o=new fs,l=new fs,u=new fs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Hi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],h=l[3],v=l[4],y=l[5],g=l[6],S=l[7],E=l[8],R=l[9],x=l[10],_=l[11],I=l[12],P=l[13],b=l[14],C=l[15];if(o[0].setComponents(h-u,S-v,_-E,C-I).normalize(),o[1].setComponents(h+u,S+v,_+E,C+I).normalize(),o[2].setComponents(h+d,S+y,_+R,C+P).normalize(),o[3].setComponents(h-d,S-y,_-R,C-P).normalize(),r)o[4].setComponents(p,g,x,b).normalize(),o[5].setComponents(h-p,S-g,_-x,C-b).normalize();else if(o[4].setComponents(h-p,S-g,_-x,C-b).normalize(),t===Hi)o[5].setComponents(h+p,S+g,_+x,C+b).normalize();else if(t===_o)o[5].setComponents(p,g,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const t=E_.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(jl.x=o.normal.x>0?e.max.x:e.min.x,jl.y=o.normal.y>0?e.max.y:e.min.y,jl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ug extends ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const s0=new $t,Dh=new nd,$l=new _c,Kl=new Q;class w_ extends Wt{constructor(e=new In,t=new ug){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),$l.copy(r.boundingSphere),$l.applyMatrix4(o),$l.radius+=l,e.ray.intersectsSphere($l)===!1)return;s0.copy(o).invert(),Dh.copy(e.ray).applyMatrix4(s0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,h=r.index,y=r.attributes.position;if(h!==null){const g=Math.max(0,u.start),S=Math.min(h.count,u.start+u.count);for(let E=g,R=S;E<R;E++){const x=h.getX(E);Kl.fromBufferAttribute(y,x),a0(Kl,x,p,o,e,t,this)}}else{const g=Math.max(0,u.start),S=Math.min(y.count,u.start+u.count);for(let E=g,R=S;E<R;E++)Kl.fromBufferAttribute(y,E),a0(Kl,E,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function a0(s,e,t,r,o,l,u){const d=Dh.distanceSqToPoint(s);if(d<t){const p=new Q;Dh.closestPointToPoint(s,p),p.applyMatrix4(r);const h=o.ray.origin.distanceTo(p);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class fg extends Dn{constructor(e=[],t=vs,r,o,l,u,d,p,h,v){super(e,t,r,o,l,u,d,p,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yo extends Dn{constructor(e,t,r,o,l,u,d,p,h){super(e,t,r,o,l,u,d,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ma extends Dn{constructor(e,t,r=ji,o,l,u,d=Sn,p=Sn,h,v=fr,y=1){if(v!==fr&&v!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:y};super(g,o,l,u,d,p,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class T_ extends ma{constructor(e,t=ji,r=vs,o,l,u=Sn,d=Sn,p,h=fr){const v={width:e,height:e,depth:1},y=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,d,p,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hg extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xn extends In{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],v=[],y=[];let g=0,S=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(y,2));function E(R,x,_,I,P,b,C,U,V,w,N){const j=b/V,X=C/w,$=b/2,D=C/2,G=U/2,z=V+1,k=w+1;let H=0,W=0;const ie=new Q;for(let ne=0;ne<k;ne++){const F=ne*X-D;for(let ee=0;ee<z;ee++){const be=ee*j-$;ie[R]=be*I,ie[x]=F*P,ie[_]=G,h.push(ie.x,ie.y,ie.z),ie[R]=0,ie[x]=0,ie[_]=U>0?1:-1,v.push(ie.x,ie.y,ie.z),y.push(ee/V),y.push(1-ne/w),H+=1}}for(let ne=0;ne<w;ne++)for(let F=0;F<V;F++){const ee=g+F+z*ne,be=g+F+z*(ne+1),Ue=g+(F+1)+z*(ne+1),Fe=g+(F+1)+z*ne;p.push(ee,be,Fe),p.push(be,Ue,Fe),W+=6}d.addGroup(S,W,N),S+=W,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yc extends In{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],u=[],d=[],p=[],h=new Q,v=new rt;u.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let y=0,g=3;y<=t;y++,g+=3){const S=r+y/t*o;h.x=e*Math.cos(S),h.y=e*Math.sin(S),u.push(h.x,h.y,h.z),d.push(0,0,1),v.x=(u[g]/e+1)/2,v.y=(u[g+1]/e+1)/2,p.push(v.x,v.y)}for(let y=1;y<=t;y++)l.push(y,y+1,0);this.setIndex(l),this.setAttribute("position",new cn(u,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Eo extends In{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const h=this;o=Math.floor(o),l=Math.floor(l);const v=[],y=[],g=[],S=[];let E=0;const R=[],x=r/2;let _=0;I(),u===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(v),this.setAttribute("position",new cn(y,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(S,2));function I(){const b=new Q,C=new Q;let U=0;const V=(t-e)/r;for(let w=0;w<=l;w++){const N=[],j=w/l,X=j*(t-e)+e;for(let $=0;$<=o;$++){const D=$/o,G=D*p+d,z=Math.sin(G),k=Math.cos(G);C.x=X*z,C.y=-j*r+x,C.z=X*k,y.push(C.x,C.y,C.z),b.set(z,V,k).normalize(),g.push(b.x,b.y,b.z),S.push(D,1-j),N.push(E++)}R.push(N)}for(let w=0;w<o;w++)for(let N=0;N<l;N++){const j=R[N][w],X=R[N+1][w],$=R[N+1][w+1],D=R[N][w+1];(e>0||N!==0)&&(v.push(j,X,D),U+=3),(t>0||N!==l-1)&&(v.push(X,$,D),U+=3)}h.addGroup(_,U,0),_+=U}function P(b){const C=E,U=new rt,V=new Q;let w=0;const N=b===!0?e:t,j=b===!0?1:-1;for(let $=1;$<=o;$++)y.push(0,x*j,0),g.push(0,j,0),S.push(.5,.5),E++;const X=E;for(let $=0;$<=o;$++){const G=$/o*p+d,z=Math.cos(G),k=Math.sin(G);V.x=N*k,V.y=x*j,V.z=N*z,y.push(V.x,V.y,V.z),g.push(0,j,0),U.x=z*.5+.5,U.y=k*.5*j+.5,S.push(U.x,U.y),E++}for(let $=0;$<o;$++){const D=C+$,G=X+$;b===!0?v.push(G,G+1,D):v.push(G+1,G,D),w+=3}h.addGroup(_,w,b===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xi extends In{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),h=d+1,v=p+1,y=e/d,g=t/p,S=[],E=[],R=[],x=[];for(let _=0;_<v;_++){const I=_*g-u;for(let P=0;P<h;P++){const b=P*y-l;E.push(b,-I,0),R.push(0,0,1),x.push(P/d),x.push(1-_/p)}}for(let _=0;_<p;_++)for(let I=0;I<d;I++){const P=I+h*_,b=I+h*(_+1),C=I+1+h*(_+1),U=I+1+h*_;S.push(P,b,U),S.push(b,C,U)}this.setIndex(S),this.setAttribute("position",new cn(E,3)),this.setAttribute("normal",new cn(R,3)),this.setAttribute("uv",new cn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class rd extends In{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let h=0;const v=[],y=new Q,g=new Q,S=[],E=[],R=[],x=[];for(let _=0;_<=r;_++){const I=[],P=_/r,b=u+P*d,C=e*Math.cos(b),U=Math.sqrt(e*e-C*C);let V=0;_===0&&u===0?V=.5/t:_===r&&p===Math.PI&&(V=-.5/t);for(let w=0;w<=t;w++){const N=w/t,j=o+N*l;y.x=-U*Math.cos(j),y.y=C,y.z=U*Math.sin(j),E.push(y.x,y.y,y.z),g.copy(y).normalize(),R.push(g.x,g.y,g.z),x.push(N+V,1-P),I.push(h++)}v.push(I)}for(let _=0;_<r;_++)for(let I=0;I<t;I++){const P=v[_][I+1],b=v[_][I],C=v[_+1][I],U=v[_+1][I+1];(_!==0||u>0)&&S.push(P,b,U),(_!==r-1||p<Math.PI)&&S.push(b,C,U)}this.setIndex(S),this.setAttribute("position",new cn(E,3)),this.setAttribute("normal",new cn(R,3)),this.setAttribute("uv",new cn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ga(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(o0(o))o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(o0(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Bn(s){const e={};for(let t=0;t<s.length;t++){const r=ga(s[t]);for(const o in r)e[o]=r[o]}return e}function o0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function b_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Mo={clone:ga,merge:Bn};var A_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=b_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new gt().setHex(o.value);break;case"v2":this.uniforms[r].value=new rt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new Q().fromArray(o.value);break;case"v4":this.uniforms[r].value=new nn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new pt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new $t().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class pg extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qt extends ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class C_ extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P_ extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mc extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class N_ extends Mc{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ff=new $t,l0=new Q,c0=new Q;class mg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new id,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;l0.setFromMatrixPosition(e.matrixWorld),t.position.copy(l0),c0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(c0),t.updateMatrixWorld(),Ff.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ff,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===_o||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zl=new Q,Ql=new xa,Ui=new Q;class gg extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zl,Ql,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zl,Ql,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Zl,Ql,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zl,Ql,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new Q,u0=new rt,f0=new rt;class ri extends gg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,t){return this.getViewBounds(e,u0,f0),t.subVectors(f0,u0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ff*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/h,o*=u.width/p,r*=u.height/h}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class L_ extends mg{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0}}class h0 extends Mc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new L_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Sc extends gg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class D_ extends mg{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class d0 extends Mc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new D_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class I_ extends Mc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const aa=-90,oa=1;class U_ extends Wt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ri(aa,oa,e,t);o.layers=this.layers,this.add(o);const l=new ri(aa,oa,e,t);l.layers=this.layers,this.add(l);const u=new ri(aa,oa,e,t);u.layers=this.layers,this.add(u);const d=new ri(aa,oa,e,t);d.layers=this.layers,this.add(d);const p=new ri(aa,oa,e,t);p.layers=this.layers,this.add(p);const h=new ri(aa,oa,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const h of t)this.remove(h);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===_o)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,h,v]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(y,g,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class F_ extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class O_{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=k_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function k_(){this._document.hidden===!1&&this.reset()}const p0=new $t;class vg{constructor(e,t,r=0,o=1/0){this.ray=new nd(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new ed,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return p0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(p0),this}intersectObject(e,t=!0,r=[]){return Ih(e,this,r,t),r.sort(m0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Ih(e[o],this,r,t);return r.sort(m0),r}}function m0(s,e){return s.distance-e.distance}function Ih(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Ih(l[u],e,t,!0)}}class z_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ct("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ud=class ud{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};ud.prototype.isMatrix2=!0;let g0=ud;function v0(s,e,t,r){const o=B_(r);switch(t){case eg:return s*e;case ng:return s*e/o.components*o.byteLength;case jh:return s*e/o.components*o.byteLength;case xs:return s*e*2/o.components*o.byteLength;case $h:return s*e*2/o.components*o.byteLength;case tg:return s*e*3/o.components*o.byteLength;case Ci:return s*e*4/o.components*o.byteLength;case Kh:return s*e*4/o.components*o.byteLength;case ic:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sc:case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case th:case ih:return Math.max(s,16)*Math.max(e,8)/4;case eh:case nh:return Math.max(s,8)*Math.max(e,8)/2;case rh:case sh:case oh:case lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ah:case cc:case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case dh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wh:case Th:case bh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ah:case Rh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case uc:case Ch:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B_(s){switch(s){case si:case K0:return{byteLength:1,components:1};case vo:case Z0:case ai:return{byteLength:2,components:1};case Yh:case qh:return{byteLength:2,components:4};case ji:case Xh:case Gi:return{byteLength:4,components:1};case Q0:case J0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function V_(s){const e=new WeakMap;function t(d,p){const h=d.array,v=d.usage,y=h.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,h,v),d.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=s.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,h){const v=p.array,y=p.updateRanges;if(s.bindBuffer(h,d),y.length===0)s.bufferSubData(h,0,v);else{y.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<y.length;S++){const E=y[g],R=y[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++g,y[g]=R)}y.length=g+1;for(let S=0,E=y.length;S<E;S++){const R=y[S];s.bufferSubData(h,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,p));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,p),h.version=d.version}}return{get:o,remove:l,update:u}}var G_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H_=`#ifdef USE_ALPHAHASH
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
#endif`,W_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j_=`#ifdef USE_AOMAP
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
#endif`,$_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K_=`#ifdef USE_BATCHING
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
#endif`,Z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ty=`#ifdef USE_IRIDESCENCE
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
#endif`,ny=`#ifdef USE_BUMPMAP
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
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fy=`#define PI 3.141592653589793
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
} // validated`,hy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dy=`vec3 transformedNormal = objectNormal;
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
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",_y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,by=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cy=`#ifdef USE_GRADIENTMAP
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
}`,Py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zy=`PhysicalMaterial material;
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
#endif`,By=`uniform sampler2D dfgLUT;
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
}`,Vy=`
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
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qy=`#if defined( USE_POINTS_UV )
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
#endif`,Jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rM=`#ifdef USE_MORPHTARGETS
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
#endif`,sM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fM=`#ifdef USE_NORMALMAP
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
#endif`,hM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AM=`float getShadowMask() {
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
}`,RM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CM=`#ifdef USE_SKINNING
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
#endif`,PM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
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
#endif`,LM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FM=`#ifdef USE_TRANSMISSION
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
#endif`,OM=`#ifdef USE_TRANSMISSION
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
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HM=`uniform sampler2D t2D;
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
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`#include <common>
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
}`,$M=`#if DEPTH_PACKING == 3200
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
}`,KM=`#define DISTANCE
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
}`,ZM=`#define DISTANCE
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
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`uniform float scale;
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
}`,tS=`uniform vec3 diffuse;
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
}`,nS=`#include <common>
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
}`,iS=`uniform vec3 diffuse;
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
}`,rS=`#define LAMBERT
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
}`,sS=`#define LAMBERT
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
}`,aS=`#define MATCAP
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
}`,oS=`#define MATCAP
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
}`,lS=`#define NORMAL
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
}`,cS=`#define NORMAL
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
}`,uS=`#define PHONG
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
}`,fS=`#define PHONG
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
}`,hS=`#define STANDARD
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
}`,dS=`#define STANDARD
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
}`,pS=`#define TOON
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
}`,mS=`#define TOON
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
}`,gS=`uniform float size;
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
}`,vS=`uniform vec3 diffuse;
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
}`,xS=`#include <common>
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
}`,_S=`uniform vec3 color;
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
}`,yS=`uniform float rotation;
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
}`,MS=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:G_,alphahash_pars_fragment:H_,alphamap_fragment:W_,alphamap_pars_fragment:X_,alphatest_fragment:Y_,alphatest_pars_fragment:q_,aomap_fragment:j_,aomap_pars_fragment:$_,batching_pars_vertex:K_,batching_vertex:Z_,begin_vertex:Q_,beginnormal_vertex:J_,bsdfs:ey,iridescence_fragment:ty,bumpmap_pars_fragment:ny,clipping_planes_fragment:iy,clipping_planes_pars_fragment:ry,clipping_planes_pars_vertex:sy,clipping_planes_vertex:ay,color_fragment:oy,color_pars_fragment:ly,color_pars_vertex:cy,color_vertex:uy,common:fy,cube_uv_reflection_fragment:hy,defaultnormal_vertex:dy,displacementmap_pars_vertex:py,displacementmap_vertex:my,emissivemap_fragment:gy,emissivemap_pars_fragment:vy,colorspace_fragment:xy,colorspace_pars_fragment:_y,envmap_fragment:yy,envmap_common_pars_fragment:My,envmap_pars_fragment:Sy,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Iy,envmap_vertex:wy,fog_vertex:Ty,fog_pars_vertex:by,fog_fragment:Ay,fog_pars_fragment:Ry,gradientmap_pars_fragment:Cy,lightmap_pars_fragment:Py,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Ly,lights_pars_begin:Dy,lights_toon_fragment:Uy,lights_toon_pars_fragment:Fy,lights_phong_fragment:Oy,lights_phong_pars_fragment:ky,lights_physical_fragment:zy,lights_physical_pars_fragment:By,lights_fragment_begin:Vy,lights_fragment_maps:Gy,lights_fragment_end:Hy,lightprobes_pars_fragment:Wy,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:qy,logdepthbuf_vertex:jy,map_fragment:$y,map_pars_fragment:Ky,map_particle_fragment:Zy,map_particle_pars_fragment:Qy,metalnessmap_fragment:Jy,metalnessmap_pars_fragment:eM,morphinstance_vertex:tM,morphcolor_vertex:nM,morphnormal_vertex:iM,morphtarget_pars_vertex:rM,morphtarget_vertex:sM,normal_fragment_begin:aM,normal_fragment_maps:oM,normal_pars_fragment:lM,normal_pars_vertex:cM,normal_vertex:uM,normalmap_pars_fragment:fM,clearcoat_normal_fragment_begin:hM,clearcoat_normal_fragment_maps:dM,clearcoat_pars_fragment:pM,iridescence_pars_fragment:mM,opaque_fragment:gM,packing:vM,premultiplied_alpha_fragment:xM,project_vertex:_M,dithering_fragment:yM,dithering_pars_fragment:MM,roughnessmap_fragment:SM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:TM,shadowmap_vertex:bM,shadowmask_pars_fragment:AM,skinbase_vertex:RM,skinning_pars_vertex:CM,skinning_vertex:PM,skinnormal_vertex:NM,specularmap_fragment:LM,specularmap_pars_fragment:DM,tonemapping_fragment:IM,tonemapping_pars_fragment:UM,transmission_fragment:FM,transmission_pars_fragment:OM,uv_pars_fragment:kM,uv_pars_vertex:zM,uv_vertex:BM,worldpos_vertex:VM,background_vert:GM,background_frag:HM,backgroundCube_vert:WM,backgroundCube_frag:XM,cube_vert:YM,cube_frag:qM,depth_vert:jM,depth_frag:$M,distance_vert:KM,distance_frag:ZM,equirect_vert:QM,equirect_frag:JM,linedashed_vert:eS,linedashed_frag:tS,meshbasic_vert:nS,meshbasic_frag:iS,meshlambert_vert:rS,meshlambert_frag:sS,meshmatcap_vert:aS,meshmatcap_frag:oS,meshnormal_vert:lS,meshnormal_frag:cS,meshphong_vert:uS,meshphong_frag:fS,meshphysical_vert:hS,meshphysical_frag:dS,meshtoon_vert:pS,meshtoon_frag:mS,points_vert:gS,points_frag:vS,shadow_vert:xS,shadow_frag:_S,sprite_vert:yS,sprite_frag:MS},ke={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ki={basic:{uniforms:Bn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Bn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Bn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Bn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Bn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new gt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Bn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Bn([ke.points,ke.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Bn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Bn([ke.common,ke.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Bn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Bn([ke.sprite,ke.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Bn([ke.common,ke.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Bn([ke.lights,ke.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};ki.physical={uniforms:Bn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Jl={r:0,b:0,g:0},SS=new $t,_g=new pt;_g.set(-1,0,0,0,1,0,0,0,1);function ES(s,e,t,r,o,l){const u=new gt(0);let d=o===!0?0:1,p,h,v=null,y=0,g=null;function S(I){let P=I.isScene===!0?I.background:null;if(P&&P.isTexture){const b=I.backgroundBlurriness>0;P=e.get(P,b)}return P}function E(I){let P=!1;const b=S(I);b===null?x(u,d):b&&b.isColor&&(x(b,1),P=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,l):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(I,P){const b=S(P);b&&(b.isCubeTexture||b.mapping===xc)?(h===void 0&&(h=new wt(new xn(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:ga(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,U,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(SS.makeRotationFromEuler(P.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(_g),h.material.toneMapped=Et.getTransfer(b.colorSpace)!==Ft,(v!==b||y!==b.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=b,y=b.version,g=s.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new wt(new Xi(2,2),new Ln({name:"BackgroundMaterial",uniforms:ga(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Et.getTransfer(b.colorSpace)!==Ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||y!==b.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=b,y=b.version,g=s.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function x(I,P){I.getRGB(Jl,dg(s)),t.buffers.color.setClear(Jl.r,Jl.g,Jl.b,P,l)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,P=1){u.set(I),d=P,x(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,x(u,d)},render:E,addToRenderList:R,dispose:_}}function wS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function d(X,$,D,G,z){let k=!1;const H=y(X,G,D,$);l!==H&&(l=H,h(l.object)),k=S(X,G,D,z),k&&E(X,G,D,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,b(X,$,D,G),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function p(){return s.createVertexArray()}function h(X){return s.bindVertexArray(X)}function v(X){return s.deleteVertexArray(X)}function y(X,$,D,G){const z=G.wireframe===!0;let k=r[$.id];k===void 0&&(k={},r[$.id]=k);const H=X.isInstancedMesh===!0?X.id:0;let W=k[H];W===void 0&&(W={},k[H]=W);let ie=W[D.id];ie===void 0&&(ie={},W[D.id]=ie);let ne=ie[z];return ne===void 0&&(ne=g(p()),ie[z]=ne),ne}function g(X){const $=[],D=[],G=[];for(let z=0;z<t;z++)$[z]=0,D[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:D,attributeDivisors:G,object:X,attributes:{},index:null}}function S(X,$,D,G){const z=l.attributes,k=$.attributes;let H=0;const W=D.getAttributes();for(const ie in W)if(W[ie].location>=0){const F=z[ie];let ee=k[ie];if(ee===void 0&&(ie==="instanceMatrix"&&X.instanceMatrix&&(ee=X.instanceMatrix),ie==="instanceColor"&&X.instanceColor&&(ee=X.instanceColor)),F===void 0||F.attribute!==ee||ee&&F.data!==ee.data)return!0;H++}return l.attributesNum!==H||l.index!==G}function E(X,$,D,G){const z={},k=$.attributes;let H=0;const W=D.getAttributes();for(const ie in W)if(W[ie].location>=0){let F=k[ie];F===void 0&&(ie==="instanceMatrix"&&X.instanceMatrix&&(F=X.instanceMatrix),ie==="instanceColor"&&X.instanceColor&&(F=X.instanceColor));const ee={};ee.attribute=F,F&&F.data&&(ee.data=F.data),z[ie]=ee,H++}l.attributes=z,l.attributesNum=H,l.index=G}function R(){const X=l.newAttributes;for(let $=0,D=X.length;$<D;$++)X[$]=0}function x(X){_(X,0)}function _(X,$){const D=l.newAttributes,G=l.enabledAttributes,z=l.attributeDivisors;D[X]=1,G[X]===0&&(s.enableVertexAttribArray(X),G[X]=1),z[X]!==$&&(s.vertexAttribDivisor(X,$),z[X]=$)}function I(){const X=l.newAttributes,$=l.enabledAttributes;for(let D=0,G=$.length;D<G;D++)$[D]!==X[D]&&(s.disableVertexAttribArray(D),$[D]=0)}function P(X,$,D,G,z,k,H){H===!0?s.vertexAttribIPointer(X,$,D,z,k):s.vertexAttribPointer(X,$,D,G,z,k)}function b(X,$,D,G){R();const z=G.attributes,k=D.getAttributes(),H=$.defaultAttributeValues;for(const W in k){const ie=k[W];if(ie.location>=0){let ne=z[W];if(ne===void 0&&(W==="instanceMatrix"&&X.instanceMatrix&&(ne=X.instanceMatrix),W==="instanceColor"&&X.instanceColor&&(ne=X.instanceColor)),ne!==void 0){const F=ne.normalized,ee=ne.itemSize,be=e.get(ne);if(be===void 0)continue;const Ue=be.buffer,Fe=be.type,se=be.bytesPerElement,pe=Fe===s.INT||Fe===s.UNSIGNED_INT||ne.gpuType===Xh;if(ne.isInterleavedBufferAttribute){const ue=ne.data,Se=ue.stride,ze=ne.offset;if(ue.isInstancedInterleavedBuffer){for(let We=0;We<ie.locationSize;We++)_(ie.location+We,ue.meshPerAttribute);X.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let We=0;We<ie.locationSize;We++)x(ie.location+We);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let We=0;We<ie.locationSize;We++)P(ie.location+We,ee/ie.locationSize,Fe,F,Se*se,(ze+ee/ie.locationSize*We)*se,pe)}else{if(ne.isInstancedBufferAttribute){for(let ue=0;ue<ie.locationSize;ue++)_(ie.location+ue,ne.meshPerAttribute);X.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<ie.locationSize;ue++)x(ie.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ue=0;ue<ie.locationSize;ue++)P(ie.location+ue,ee/ie.locationSize,Fe,F,ee*se,ee/ie.locationSize*ue*se,pe)}}else if(H!==void 0){const F=H[W];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(ie.location,F);break;case 3:s.vertexAttrib3fv(ie.location,F);break;case 4:s.vertexAttrib4fv(ie.location,F);break;default:s.vertexAttrib1fv(ie.location,F)}}}}I()}function C(){N();for(const X in r){const $=r[X];for(const D in $){const G=$[D];for(const z in G){const k=G[z];for(const H in k)v(k[H].object),delete k[H];delete G[z]}}delete r[X]}}function U(X){if(r[X.id]===void 0)return;const $=r[X.id];for(const D in $){const G=$[D];for(const z in G){const k=G[z];for(const H in k)v(k[H].object),delete k[H];delete G[z]}}delete r[X.id]}function V(X){for(const $ in r){const D=r[$];for(const G in D){const z=D[G];if(z[X.id]===void 0)continue;const k=z[X.id];for(const H in k)v(k[H].object),delete k[H];delete z[X.id]}}}function w(X){for(const $ in r){const D=r[$],G=X.isInstancedMesh===!0?X.id:0,z=D[G];if(z!==void 0){for(const k in z){const H=z[k];for(const W in H)v(H[W].object),delete H[W];delete z[k]}delete D[G],Object.keys(D).length===0&&delete r[$]}}}function N(){j(),u=!0,l!==o&&(l=o,h(l.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:N,resetDefaultState:j,dispose:C,releaseStatesOfGeometry:U,releaseStatesOfObject:w,releaseStatesOfProgram:V,initAttributes:R,enableAttribute:x,disableUnusedAttributes:I}}function TS(s,e,t){let r;function o(p){r=p}function l(p,h){s.drawArrays(r,p,h),t.update(h,r,1)}function u(p,h,v){v!==0&&(s.drawArraysInstanced(r,p,h,v),t.update(h,r,v))}function d(p,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,h,0,v);let g=0;for(let S=0;S<v;S++)g+=h[S];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function bS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(V){return!(V!==Ci&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const w=V===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==si&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Gi&&!w)}function p(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const v=p(h);v!==h&&(ct("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const y=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:b,maxSamples:C,samples:U}}function AS(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new fs,d=new pt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const S=y.length!==0||g||r!==0||o;return o=g,r=y.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){t=v(y,g,0)},this.setState=function(y,g,S){const E=y.clippingPlanes,R=y.clipIntersection,x=y.clipShadows,_=s.get(y);if(!o||E===null||E.length===0||l&&!x)l?v(null):h();else{const I=l?0:r,P=I*4;let b=_.clippingState||null;p.value=b,b=v(E,g,P,S);for(let C=0;C!==P;++C)b[C]=t[C];_.clippingState=b,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,g,S,E){const R=y!==null?y.length:0;let x=null;if(R!==0){if(x=p.value,E!==!0||x===null){const _=S+R*4,I=g.matrixWorldInverse;d.getNormalMatrix(I),(x===null||x.length<_)&&(x=new Float32Array(_));for(let P=0,b=S;P!==R;++P,b+=4)u.copy(y[P]).applyMatrix4(I,d),u.normal.toArray(x,b),x[b+3]=u.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}const kr=4,x0=[.125,.215,.35,.446,.526,.582],ds=20,RS=256,uo=new Sc,_0=new gt;let Of=null,kf=0,zf=0,Bf=!1;const CS=new Q;class y0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=CS}=l;Of=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Of,kf,zf),this._renderer.xr.enabled=Bf,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Of=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:En,minFilter:En,generateMipmaps:!1,type:ai,format:Ci,colorSpace:fc,depthBuffer:!1},o=M0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PS(l)),this._blurMaterial=LS(l,e,t),this._ggxMaterial=NS(l,e,t)}return o}_compileMaterial(e){const t=new wt(new In,e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,r,o,l){const p=new ri(90,1,t,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,S=y.toneMapping;y.getClearColor(_0),y.toneMapping=qi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new xn,new Vi({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,x=R.material;let _=!1;const I=e.background;I?I.isColor&&(x.color.copy(I),e.background=null,_=!0):(x.color.copy(_0),_=!0);for(let P=0;P<6;P++){const b=P%3;b===0?(p.up.set(0,h[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[P],l.y,l.z)):b===1?(p.up.set(0,0,h[P]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[P],l.z)):(p.up.set(0,h[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[P]));const C=this._cubeSize;la(o,b*C,P>2?C:0,C,C),y.setRenderTarget(o),_&&y.render(R,p),y.render(e,p)}y.toneMapping=S,y.autoClear=g,e.background=I}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===vs||e.mapping===da;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=E0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;la(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,uo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,h=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),y=Math.sqrt(h*h-v*v),g=0+h*1.25,S=y*g,{_lodMax:E}=this,R=this._sizeLods[r],x=3*R*(r>E-kr?r-E+kr:0),_=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=E-t,la(l,x,_,3*R,2*R),o.setRenderTarget(l),o.render(d,uo),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=E-r,la(e,x,_,3*R,2*R),o.setRenderTarget(e),o.render(d,uo)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[o];y.material=h;const g=h.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ds-1),R=l/E,x=isFinite(l)?1+Math.floor(v*R):ds;x>ds&&ct(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ds}`);const _=[];let I=0;for(let V=0;V<ds;++V){const w=V/R,N=Math.exp(-w*w/2);_.push(N),V===0?I+=N:V<x&&(I+=2*N)}for(let V=0;V<_.length;V++)_[V]=_[V]/I;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:P}=this;g.dTheta.value=E,g.mipInt.value=P-r;const b=this._sizeLods[o],C=3*b*(o>P-kr?o-P+kr:0),U=4*(this._cubeSize-b);la(t,C,U,3*b,2*b),p.setRenderTarget(t),p.render(y,uo)}}function PS(s){const e=[],t=[],r=[];let o=s;const l=s-kr+1+x0.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>s-kr?p=x0[u-s+kr-1]:u===0&&(p=0),t.push(p);const h=1/(d-2),v=-h,y=1+h,g=[v,v,y,v,y,y,v,v,y,y,v,y],S=6,E=6,R=3,x=2,_=1,I=new Float32Array(R*E*S),P=new Float32Array(x*E*S),b=new Float32Array(_*E*S);for(let U=0;U<S;U++){const V=U%3*2/3-1,w=U>2?0:-1,N=[V,w,0,V+2/3,w,0,V+2/3,w+1,0,V,w,0,V+2/3,w+1,0,V,w+1,0];I.set(N,R*E*U),P.set(g,x*E*U);const j=[U,U,U,U,U,U];b.set(j,_*E*U)}const C=new In;C.setAttribute("position",new vi(I,R)),C.setAttribute("uv",new vi(P,x)),C.setAttribute("faceIndex",new vi(b,_)),r.push(new wt(C,null)),o>kr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function M0(s,e,t){const r=new Kn(s,e,t);return r.texture.mapping=xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function la(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function NS(s,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function LS(s,e,t){const r=new Float32Array(ds),o=new Q(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function S0(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function E0(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}class yg extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new fg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new xn(5,5,5),l=new Ln({name:"CubemapFromEquirect",uniforms:ga(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:Yi});l.uniforms.tEquirect.value=t;const u=new wt(o,l),d=t.minFilter;return t.minFilter===ps&&(t.minFilter=En),new U_(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function DS(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===lf||S===cf)if(e.has(g)){const E=e.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const R=new yg(E.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",h),d(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,E=S===lf||S===cf,R=S===vs||S===da;if(E||R){let x=t.get(g);const _=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new y0(s)),x=E?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const I=g.image;return E&&I&&I.height>0||R&&I&&p(I)?(r===null&&(r=new y0(s)),x=E?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function d(g,S){return S===lf?g.mapping=vs:S===cf&&(g.mapping=da),g}function p(g){let S=0;const E=6;for(let R=0;R<E;R++)g[R]!==void 0&&S++;return S===E}function h(g){const S=g.target;S.removeEventListener("dispose",h);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function y(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function IS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ua("WebGLRenderer: "+r+" extension not supported."),o}}}function US(s,e,t,r){const o={},l=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(y,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function p(y){const g=y.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function h(y){const g=[],S=y.index,E=y.attributes.position;let R=0;if(E===void 0)return;if(S!==null){const I=S.array;R=S.version;for(let P=0,b=I.length;P<b;P+=3){const C=I[P+0],U=I[P+1],V=I[P+2];g.push(C,U,U,V,V,C)}}else{const I=E.array;R=E.version;for(let P=0,b=I.length/3-1;P<b;P+=3){const C=P+0,U=P+1,V=P+2;g.push(C,U,U,V,V,C)}}const x=new(E.count>=65535?og:ag)(g,1);x.version=R;const _=l.get(y);_&&e.remove(_),l.set(y,x)}function v(y){const g=l.get(y);if(g){const S=y.index;S!==null&&g.version<S.version&&h(y)}else h(y);return l.get(y)}return{get:d,update:p,getWireframeAttribute:v}}function FS(s,e,t){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function p(y,g){s.drawElements(r,g,l,y*u),t.update(g,r,1)}function h(y,g,S){S!==0&&(s.drawElementsInstanced(r,g,l,y*u,S),t.update(g,r,S))}function v(y,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,y,0,S);let R=0;for(let x=0;x<S;x++)R+=g[x];t.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=h,this.renderMultiDraw=v}function OS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Tt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function kS(s,e,t){const r=new WeakMap,o=new nn;function l(u,d,p){const h=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==y){let j=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",j)};var S=j;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),R===!0&&(b=2),x===!0&&(b=3);let C=d.attributes.position.count*b,U=1;C>e.maxTextureSize&&(U=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const V=new Float32Array(C*U*4*y),w=new rg(V,C,U,y);w.type=Gi,w.needsUpdate=!0;const N=b*4;for(let X=0;X<y;X++){const $=_[X],D=I[X],G=P[X],z=C*U*4*X;for(let k=0;k<$.count;k++){const H=k*N;E===!0&&(o.fromBufferAttribute($,k),V[z+H+0]=o.x,V[z+H+1]=o.y,V[z+H+2]=o.z,V[z+H+3]=0),R===!0&&(o.fromBufferAttribute(D,k),V[z+H+4]=o.x,V[z+H+5]=o.y,V[z+H+6]=o.z,V[z+H+7]=0),x===!0&&(o.fromBufferAttribute(G,k),V[z+H+8]=o.x,V[z+H+9]=o.y,V[z+H+10]=o.z,V[z+H+11]=G.itemSize===4?o.w:1)}}g={count:y,texture:w,size:new rt(C,U)},r.set(d,g),d.addEventListener("dispose",j)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let x=0;x<h.length;x++)E+=h[x];const R=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function zS(s,e,t,r,o){let l=new WeakMap;function u(h){const v=o.render.frame,y=h.geometry,g=e.get(h,y);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),l.get(h)!==v&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,v))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return g}function d(){l=new WeakMap}function p(h){const v=h.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:d}}const BS={[zh]:"LINEAR_TONE_MAPPING",[Bh]:"REINHARD_TONE_MAPPING",[Vh]:"CINEON_TONE_MAPPING",[vc]:"ACES_FILMIC_TONE_MAPPING",[Hh]:"AGX_TONE_MAPPING",[Wh]:"NEUTRAL_TONE_MAPPING",[Gh]:"CUSTOM_TONE_MAPPING"};function VS(s,e,t,r,o,l){const u=new Kn(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,depthTexture:o?new ma(e,t):void 0}),d=new Kn(e,t,{type:ai,depthBuffer:!1,stencilBuffer:!1}),p=new In;p.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new cn([0,2,0,0,2,0],2));const h=new pg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new wt(p,h),y=new Sc(-1,1,1,-1,0,1);let g=null,S=null,E=!1,R,x=null,_=[],I=!1;this.setSize=function(P,b){u.setSize(P,b),d.setSize(P,b);for(let C=0;C<_.length;C++){const U=_[C];U.setSize&&U.setSize(P,b)}},this.setEffects=function(P){_=P,I=_.length>0&&_[0].isRenderPass===!0;const b=u.width,C=u.height;for(let U=0;U<_.length;U++){const V=_[U];V.setSize&&V.setSize(b,C)}},this.begin=function(P,b){if(E||P.toneMapping===qi&&_.length===0)return!1;if(x=b,b!==null){const C=b.width,U=b.height;(u.width!==C||u.height!==U)&&this.setSize(C,U)}return I===!1&&P.setRenderTarget(u),R=P.toneMapping,P.toneMapping=qi,!0},this.hasRenderPass=function(){return I},this.end=function(P,b){P.toneMapping=R,E=!0;let C=u,U=d;for(let V=0;V<_.length;V++){const w=_[V];if(w.enabled!==!1&&(w.render(P,U,C,b),w.needsSwap!==!1)){const N=C;C=U,U=N}}if(g!==P.outputColorSpace||S!==P.toneMapping){g=P.outputColorSpace,S=P.toneMapping,h.defines={},Et.getTransfer(g)===Ft&&(h.defines.SRGB_TRANSFER="");const V=BS[S];V&&(h.defines[V]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=C.texture,P.setRenderTarget(x),P.render(v,y),x=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),p.dispose(),h.dispose()}}const Mg=new Dn,Uh=new ma(1,1),Sg=new rg,Eg=new r_,wg=new fg,w0=[],T0=[],b0=new Float32Array(16),A0=new Float32Array(9),R0=new Float32Array(4);function _a(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=w0[o];if(l===void 0&&(l=new Float32Array(o),w0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function dn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function wc(s,e){let t=T0[e];t===void 0&&(t=new Int32Array(e),T0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function GS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function HS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),dn(t,e)}}function WS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),dn(t,e)}}function XS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),dn(t,e)}}function YS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,r))return;R0.set(r),s.uniformMatrix2fv(this.addr,!1,R0),dn(t,r)}}function qS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,r))return;A0.set(r),s.uniformMatrix3fv(this.addr,!1,A0),dn(t,r)}}function jS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,r))return;b0.set(r),s.uniformMatrix4fv(this.addr,!1,b0),dn(t,r)}}function $S(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function KS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),dn(t,e)}}function ZS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),dn(t,e)}}function QS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),dn(t,e)}}function JS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function e1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),dn(t,e)}}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),dn(t,e)}}function n1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),dn(t,e)}}function i1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Uh.compareFunction=t.isReversedDepthBuffer()?Qh:Zh,l=Uh):l=Mg,t.setTexture2D(e||l,o)}function r1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Eg,o)}function s1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||wg,o)}function a1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Sg,o)}function o1(s){switch(s){case 5126:return GS;case 35664:return HS;case 35665:return WS;case 35666:return XS;case 35674:return YS;case 35675:return qS;case 35676:return jS;case 5124:case 35670:return $S;case 35667:case 35671:return KS;case 35668:case 35672:return ZS;case 35669:case 35673:return QS;case 5125:return JS;case 36294:return e1;case 36295:return t1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return a1}}function l1(s,e){s.uniform1fv(this.addr,e)}function c1(s,e){const t=_a(e,this.size,2);s.uniform2fv(this.addr,t)}function u1(s,e){const t=_a(e,this.size,3);s.uniform3fv(this.addr,t)}function f1(s,e){const t=_a(e,this.size,4);s.uniform4fv(this.addr,t)}function h1(s,e){const t=_a(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function d1(s,e){const t=_a(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function p1(s,e){const t=_a(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function m1(s,e){s.uniform1iv(this.addr,e)}function g1(s,e){s.uniform2iv(this.addr,e)}function v1(s,e){s.uniform3iv(this.addr,e)}function x1(s,e){s.uniform4iv(this.addr,e)}function _1(s,e){s.uniform1uiv(this.addr,e)}function y1(s,e){s.uniform2uiv(this.addr,e)}function M1(s,e){s.uniform3uiv(this.addr,e)}function S1(s,e){s.uniform4uiv(this.addr,e)}function E1(s,e,t){const r=this.cache,o=e.length,l=wc(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Uh:u=Mg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function w1(s,e,t){const r=this.cache,o=e.length,l=wc(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Eg,l[u])}function T1(s,e,t){const r=this.cache,o=e.length,l=wc(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||wg,l[u])}function b1(s,e,t){const r=this.cache,o=e.length,l=wc(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Sg,l[u])}function A1(s){switch(s){case 5126:return l1;case 35664:return c1;case 35665:return u1;case 35666:return f1;case 35674:return h1;case 35675:return d1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return _1;case 36294:return y1;case 36295:return M1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return b1}}class R1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=o1(t.type)}}class C1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A1(t.type)}}class P1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const Vf=/(\w+)(\])?(\[|\.)?/g;function C0(s,e){s.seq.push(e),s.map[e.id]=e}function N1(s,e,t){const r=s.name,o=r.length;for(Vf.lastIndex=0;;){const l=Vf.exec(r),u=Vf.lastIndex;let d=l[1];const p=l[2]==="]",h=l[3];if(p&&(d=d|0),h===void 0||h==="["&&u+2===o){C0(t,h===void 0?new R1(d,s,e):new C1(d,s,e));break}else{let y=t.map[d];y===void 0&&(y=new P1(d),C0(t,y)),t=y}}}class oc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);N1(d,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function P0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const L1=37297;let D1=0;function I1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const N0=new pt;function U1(s){Et._getMatrix(N0,Et.workingColorSpace,s);const e=`mat3( ${N0.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case hc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function L0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+I1(s.getShaderSource(e),d)}else return l}function F1(s,e){const t=U1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const O1={[zh]:"Linear",[Bh]:"Reinhard",[Vh]:"Cineon",[vc]:"ACESFilmic",[Hh]:"AgX",[Wh]:"Neutral",[Gh]:"Custom"};function k1(s,e){const t=O1[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ec=new Q;function z1(){Et.getLuminanceCoefficients(ec);const s=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function V1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function G1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function go(s){return s!==""}function D0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(s){return s.replace(H1,X1)}const W1=new Map;function X1(s,e){let t=vt[e];if(t===void 0){const r=W1.get(e);if(r!==void 0)t=vt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fh(t)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U0(s){return s.replace(Y1,q1)}function q1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function F0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const j1={[nc]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function $1(s){return j1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K1={[vs]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE",[xc]:"ENVMAP_TYPE_CUBE_UV"};function Z1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":K1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Q1={[da]:"ENVMAP_MODE_REFRACTION"};function J1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Q1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eE={[j0]:"ENVMAP_BLENDING_MULTIPLY",[Ox]:"ENVMAP_BLENDING_MIX",[kx]:"ENVMAP_BLENDING_ADD"};function tE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":eE[s.combine]||"ENVMAP_BLENDING_NONE"}function nE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function iE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=$1(t),h=Z1(t),v=J1(t),y=tE(t),g=nE(t),S=B1(t),E=V1(l),R=o.createProgram();let x,_,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(go).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(go).join(`
`),_.length>0&&(_+=`
`)):(x=[F0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),_=[F0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+v:"",t.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?vt.tonemapping_pars_fragment:"",t.toneMapping!==qi?k1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,F1("linearToOutputTexel",t.outputColorSpace),z1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),u=Fh(u),u=D0(u,t),u=I0(u,t),d=Fh(d),d=D0(d,t),d=I0(d,t),u=U0(u),d=U0(d),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=I+x+u,b=I+_+d,C=P0(o,o.VERTEX_SHADER,P),U=P0(o,o.FRAGMENT_SHADER,b);o.attachShader(R,C),o.attachShader(R,U),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function V(X){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(R)||"",D=o.getShaderInfoLog(C)||"",G=o.getShaderInfoLog(U)||"",z=$.trim(),k=D.trim(),H=G.trim();let W=!0,ie=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,C,U);else{const ne=L0(o,C,"vertex"),F=L0(o,U,"fragment");Tt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+z+`
`+ne+`
`+F)}else z!==""?ct("WebGLProgram: Program Info Log:",z):(k===""||H==="")&&(ie=!1);ie&&(X.diagnostics={runnable:W,programLog:z,vertexShader:{log:k,prefix:x},fragmentShader:{log:H,prefix:_}})}o.deleteShader(C),o.deleteShader(U),w=new oc(o,R),N=G1(o,R)}let w;this.getUniforms=function(){return w===void 0&&V(this),w};let N;this.getAttributes=function(){return N===void 0&&V(this),N};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=o.getProgramParameter(R,L1)),j},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=C,this.fragmentShader=U,this}let rE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new aE(e),t.set(e,r)),r}}class aE{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}}function oE(s){return s===xs||s===cc||s===uc}function lE(s,e,t,r,o,l){const u=new ed,d=new sE,p=new Set,h=[],v=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return p.add(w),w===0?"uv":`uv${w}`}function R(w,N,j,X,$,D){const G=X.fog,z=$.geometry,k=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,H=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,W=e.get(w.envMap||k,H),ie=W&&W.mapping===xc?W.image.height:null,ne=S[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&ct("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const F=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ee=F!==void 0?F.length:0;let be=0;z.morphAttributes.position!==void 0&&(be=1),z.morphAttributes.normal!==void 0&&(be=2),z.morphAttributes.color!==void 0&&(be=3);let Ue,Fe,se,pe;if(ne){const qe=ki[ne];Ue=qe.vertexShader,Fe=qe.fragmentShader}else{Ue=w.vertexShader,Fe=w.fragmentShader;const qe=d.getVertexShaderStage(w),zt=d.getFragmentShaderStage(w);d.update(w,qe,zt),se=qe.id,pe=zt.id}const ue=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),ze=$.isInstancedMesh===!0,We=$.isBatchedMesh===!0,At=!!w.map,lt=!!w.matcap,Rt=!!W,St=!!w.aoMap,xt=!!w.lightMap,Vt=!!w.bumpMap&&w.wireframe===!1,Xt=!!w.normalMap,tt=!!w.displacementMap,Dt=!!w.emissiveMap,Ct=!!w.metalnessMap,Ae=!!w.roughnessMap,Y=w.anisotropy>0,Ge=w.clearcoat>0,mt=w.dispersion>0,L=w.iridescence>0,M=w.sheen>0,te=w.transmission>0,le=Y&&!!w.anisotropyMap,de=Ge&&!!w.clearcoatMap,Ee=Ge&&!!w.clearcoatNormalMap,Le=Ge&&!!w.clearcoatRoughnessMap,me=L&&!!w.iridescenceMap,ge=L&&!!w.iridescenceThicknessMap,Te=M&&!!w.sheenColorMap,Xe=M&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,Ce=!!w.specularColorMap,nt=!!w.specularIntensityMap,it=te&&!!w.transmissionMap,ot=te&&!!w.thicknessMap,K=!!w.gradientMap,De=!!w.alphaMap,ve=w.alphaTest>0,Ie=!!w.alphaHash,Oe=!!w.extensions;let xe=qi;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(xe=s.toneMapping);const $e={shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:Ue,fragmentShader:Fe,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:pe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:We,batchingColor:We&&$._colorsTexture!==null,instancing:ze,instancingColor:ze&&$.instanceColor!==null,instancingMorph:ze&&$.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:At,matcap:lt,envMap:Rt,envMapMode:Rt&&W.mapping,envMapCubeUVHeight:ie,aoMap:St,lightMap:xt,bumpMap:Vt,normalMap:Xt,displacementMap:tt,emissiveMap:Dt,normalMapObjectSpace:Xt&&w.normalMapType===Vx,normalMapTangentSpace:Xt&&w.normalMapType===Ph,packedNormalMap:Xt&&w.normalMapType===Ph&&oE(w.normalMap.format),metalnessMap:Ct,roughnessMap:Ae,anisotropy:Y,anisotropyMap:le,clearcoat:Ge,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Le,dispersion:mt,iridescence:L,iridescenceMap:me,iridescenceThicknessMap:ge,sheen:M,sheenColorMap:Te,sheenRoughnessMap:Xe,specularMap:Ne,specularColorMap:Ce,specularIntensityMap:nt,transmission:te,transmissionMap:it,thicknessMap:ot,gradientMap:K,opaque:w.transparent===!1&&w.blending===ca&&w.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:Ie,combine:w.combine,mapUv:At&&E(w.map.channel),aoMapUv:St&&E(w.aoMap.channel),lightMapUv:xt&&E(w.lightMap.channel),bumpMapUv:Vt&&E(w.bumpMap.channel),normalMapUv:Xt&&E(w.normalMap.channel),displacementMapUv:tt&&E(w.displacementMap.channel),emissiveMapUv:Dt&&E(w.emissiveMap.channel),metalnessMapUv:Ct&&E(w.metalnessMap.channel),roughnessMapUv:Ae&&E(w.roughnessMap.channel),anisotropyMapUv:le&&E(w.anisotropyMap.channel),clearcoatMapUv:de&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&E(w.sheenRoughnessMap.channel),specularMapUv:Ne&&E(w.specularMap.channel),specularColorMapUv:Ce&&E(w.specularColorMap.channel),specularIntensityMapUv:nt&&E(w.specularIntensityMap.channel),transmissionMapUv:it&&E(w.transmissionMap.channel),thicknessMapUv:ot&&E(w.thicknessMap.channel),alphaMapUv:De&&E(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Xt||Y),vertexNormals:!!z.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!z.attributes.uv&&(At||De),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||z.attributes.normal===void 0&&Xt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Se,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:be,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:At&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===Ft,decodeVideoTextureEmissive:Dt&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===Ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===zi,flipSided:w.side===$n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Oe&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&w.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $e.vertexUv1s=p.has(1),$e.vertexUv2s=p.has(2),$e.vertexUv3s=p.has(3),p.clear(),$e}function x(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const j in w.defines)N.push(j),N.push(w.defines[j]);return w.isRawShaderMaterial===!1&&(_(N,w),I(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function _(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function I(w,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function P(w){const N=S[w.type];let j;if(N){const X=ki[N];j=Mo.clone(X.uniforms)}else j=w.uniforms;return j}function b(w,N){let j=v.get(N);return j!==void 0?++j.usedTimes:(j=new iE(s,N,w,o),h.push(j),v.set(N,j)),j}function C(w){if(--w.usedTimes===0){const N=h.indexOf(w);h[N]=h[h.length-1],h.pop(),v.delete(w.cacheKey),w.destroy()}}function U(w){d.remove(w)}function V(){d.dispose()}return{getParameters:R,getProgramCacheKey:x,getUniforms:P,acquireProgram:b,releaseProgram:C,releaseShaderCache:U,programs:h,dispose:V}}function cE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function uE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function O0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function k0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,E,R,x,_){let I=s[e];return I===void 0?(I={id:g.id,object:g,geometry:S,material:E,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:x,group:_},s[e]=I):(I.id=g.id,I.object=g,I.geometry=S,I.material=E,I.materialVariant=u(g),I.groupOrder=R,I.renderOrder=g.renderOrder,I.z=x,I.group=_),e++,I}function p(g,S,E,R,x,_){const I=d(g,S,E,R,x,_);E.transmission>0?r.push(I):E.transparent===!0?o.push(I):t.push(I)}function h(g,S,E,R,x,_){const I=d(g,S,E,R,x,_);E.transmission>0?r.unshift(I):E.transparent===!0?o.unshift(I):t.unshift(I)}function v(g,S,E){t.length>1&&t.sort(g||uE),r.length>1&&r.sort(S||O0),o.length>1&&o.sort(S||O0),E&&(t.reverse(),r.reverse(),o.reverse())}function y(){for(let g=e,S=s.length;g<S;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:h,finish:y,sort:v}}function fE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new k0,s.set(r,[u])):o>=l.length?(u=new k0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new gt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function dE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pE=0;function mE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gE(s){const e=new hE,t=dE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Q);const o=new Q,l=new $t,u=new $t;function d(h){let v=0,y=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,E=0,R=0,x=0,_=0,I=0,P=0,b=0,C=0,U=0,V=0;h.sort(mE);for(let N=0,j=h.length;N<j;N++){const X=h[N],$=X.color,D=X.intensity,G=X.distance;let z=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===xs?z=X.shadow.map.texture:z=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)v+=$.r*D,y+=$.g*D,g+=$.b*D;else if(X.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(X.sh.coefficients[k],D);V++}else if(X.isDirectionalLight){const k=e.get(X);if(k.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const H=X.shadow,W=t.get(X);W.shadowIntensity=H.intensity,W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,r.directionalShadow[S]=W,r.directionalShadowMap[S]=z,r.directionalShadowMatrix[S]=X.shadow.matrix,I++}r.directional[S]=k,S++}else if(X.isSpotLight){const k=e.get(X);k.position.setFromMatrixPosition(X.matrixWorld),k.color.copy($).multiplyScalar(D),k.distance=G,k.coneCos=Math.cos(X.angle),k.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),k.decay=X.decay,r.spot[R]=k;const H=X.shadow;if(X.map&&(r.spotLightMap[C]=X.map,C++,H.updateMatrices(X),X.castShadow&&U++),r.spotLightMatrix[R]=H.matrix,X.castShadow){const W=t.get(X);W.shadowIntensity=H.intensity,W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,r.spotShadow[R]=W,r.spotShadowMap[R]=z,b++}R++}else if(X.isRectAreaLight){const k=e.get(X);k.color.copy($).multiplyScalar(D),k.halfWidth.set(X.width*.5,0,0),k.halfHeight.set(0,X.height*.5,0),r.rectArea[x]=k,x++}else if(X.isPointLight){const k=e.get(X);if(k.color.copy(X.color).multiplyScalar(X.intensity),k.distance=X.distance,k.decay=X.decay,X.castShadow){const H=X.shadow,W=t.get(X);W.shadowIntensity=H.intensity,W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,W.shadowCameraNear=H.camera.near,W.shadowCameraFar=H.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=z,r.pointShadowMatrix[E]=X.shadow.matrix,P++}r.point[E]=k,E++}else if(X.isHemisphereLight){const k=e.get(X);k.skyColor.copy(X.color).multiplyScalar(D),k.groundColor.copy(X.groundColor).multiplyScalar(D),r.hemi[_]=k,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==S||w.pointLength!==E||w.spotLength!==R||w.rectAreaLength!==x||w.hemiLength!==_||w.numDirectionalShadows!==I||w.numPointShadows!==P||w.numSpotShadows!==b||w.numSpotMaps!==C||w.numLightProbes!==V)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=x,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=b+C-U,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=V,w.directionalLength=S,w.pointLength=E,w.spotLength=R,w.rectAreaLength=x,w.hemiLength=_,w.numDirectionalShadows=I,w.numPointShadows=P,w.numSpotShadows=b,w.numSpotMaps=C,w.numLightProbes=V,r.version=pE++)}function p(h,v){let y=0,g=0,S=0,E=0,R=0;const x=v.matrixWorldInverse;for(let _=0,I=h.length;_<I;_++){const P=h[_];if(P.isDirectionalLight){const b=r.directional[y];b.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),y++}else if(P.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(x),u.identity(),l.copy(P.matrixWorld),l.premultiply(x),u.extractRotation(l),b.halfWidth.set(P.width*.5,0,0),b.halfHeight.set(0,P.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(x),g++}else if(P.isHemisphereLight){const b=r.hemi[R];b.direction.setFromMatrixPosition(P.matrixWorld),b.direction.transformDirection(x),R++}}}return{setup:d,setupView:p,state:r}}function z0(s){const e=new gE(s),t=[],r=[],o=[];function l(g){y.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function d(g){r.push(g)}function p(g){o.push(g)}function h(){e.setup(t)}function v(g){e.setupView(t,g)}const y={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:h,setupLightsView:v,pushLight:u,pushShadow:d,pushLightProbeGrid:p}}function vE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new z0(s),e.set(o,[d])):l>=u.length?(d=new z0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const xE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
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
}`,yE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],ME=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],B0=new $t,fo=new Q,Gf=new Q;function SE(s,e,t){let r=new id;const o=new rt,l=new rt,u=new nn,d=new C_,p=new P_,h={},v=t.maxTextureSize,y={[Br]:$n,[$n]:Br,[zi]:zi},g=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:xE,fragmentShader:_E}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new In;E.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new wt(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let _=this.type;this.render=function(U,V,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;this.type===q0&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nc);const N=s.getRenderTarget(),j=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Yi),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const D=_!==this.type;D&&V.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(z=>z.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,z=U.length;G<z;G++){const k=U[G],H=k.shadow;if(H===void 0){ct("WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const W=H.getFrameExtents();o.multiply(W),l.copy(H.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/W.x),o.x=l.x*W.x,H.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/W.y),o.y=l.y*W.y,H.mapSize.y=l.y));const ie=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ie,H.map===null||D===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===mo){if(k.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Kn(o.x,o.y,{format:xs,type:ai,minFilter:En,magFilter:En,generateMipmaps:!1}),H.map.texture.name=k.name+".shadowMap",H.map.depthTexture=new ma(o.x,o.y,Gi),H.map.depthTexture.name=k.name+".shadowMapDepth",H.map.depthTexture.format=fr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn}else k.isPointLight?(H.map=new yg(o.x),H.map.depthTexture=new T_(o.x,ji)):(H.map=new Kn(o.x,o.y),H.map.depthTexture=new ma(o.x,o.y,ji)),H.map.depthTexture.name=k.name+".shadowMap",H.map.depthTexture.format=fr,this.type===nc?(H.map.depthTexture.compareFunction=ie?Qh:Zh,H.map.depthTexture.minFilter=En,H.map.depthTexture.magFilter=En):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn);H.camera.updateProjectionMatrix()}const ne=H.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<ne;F++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,F),s.clear();else{F===0&&(s.setRenderTarget(H.map),s.clear());const ee=H.getViewport(F);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),$.viewport(u)}if(k.isPointLight){const ee=H.camera,be=H.matrix,Ue=k.distance||ee.far;Ue!==ee.far&&(ee.far=Ue,ee.updateProjectionMatrix()),fo.setFromMatrixPosition(k.matrixWorld),ee.position.copy(fo),Gf.copy(ee.position),Gf.add(yE[F]),ee.up.copy(ME[F]),ee.lookAt(Gf),ee.updateMatrixWorld(),be.makeTranslation(-fo.x,-fo.y,-fo.z),B0.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),H._frustum.setFromProjectionMatrix(B0,ee.coordinateSystem,ee.reversedDepth)}else H.updateMatrices(k);r=H.getFrustum(),b(V,w,H.camera,k,this.type)}H.isPointLightShadow!==!0&&this.type===mo&&I(H,w),H.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(N,j,X)};function I(U,V){const w=e.update(R);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Kn(o.x,o.y,{format:xs,type:ai})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(V,null,w,g,R,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(V,null,w,S,R,null)}function P(U,V,w,N){let j=null;const X=w.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(X!==void 0)j=X;else if(j=w.isPointLight===!0?p:d,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const $=j.uuid,D=V.uuid;let G=h[$];G===void 0&&(G={},h[$]=G);let z=G[D];z===void 0&&(z=j.clone(),G[D]=z,V.addEventListener("dispose",C)),j=z}if(j.visible=V.visible,j.wireframe=V.wireframe,N===mo?j.side=V.shadowSide!==null?V.shadowSide:V.side:j.side=V.shadowSide!==null?V.shadowSide:y[V.side],j.alphaMap=V.alphaMap,j.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,j.map=V.map,j.clipShadows=V.clipShadows,j.clippingPlanes=V.clippingPlanes,j.clipIntersection=V.clipIntersection,j.displacementMap=V.displacementMap,j.displacementScale=V.displacementScale,j.displacementBias=V.displacementBias,j.wireframeLinewidth=V.wireframeLinewidth,j.linewidth=V.linewidth,w.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const $=s.properties.get(j);$.light=w}return j}function b(U,V,w,N,j){if(U.visible===!1)return;if(U.layers.test(V.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&j===mo)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,U.matrixWorld);const D=e.update(U),G=U.material;if(Array.isArray(G)){const z=D.groups;for(let k=0,H=z.length;k<H;k++){const W=z[k],ie=G[W.materialIndex];if(ie&&ie.visible){const ne=P(U,ie,N,j);U.onBeforeShadow(s,U,V,w,D,ne,W),s.renderBufferDirect(w,null,D,ne,U,W),U.onAfterShadow(s,U,V,w,D,ne,W)}}}else if(G.visible){const z=P(U,G,N,j);U.onBeforeShadow(s,U,V,w,D,z,null),s.renderBufferDirect(w,null,D,z,U,null),U.onAfterShadow(s,U,V,w,D,z,null)}}const $=U.children;for(let D=0,G=$.length;D<G;D++)b($[D],V,w,N,j)}function C(U){U.target.removeEventListener("dispose",C);for(const w in h){const N=h[w],j=U.target.uuid;j in N&&(N[j].dispose(),delete N[j])}}}function EE(s,e){function t(){let K=!1;const De=new nn;let ve=null;const Ie=new nn(0,0,0,0);return{setMask:function(Oe){ve!==Oe&&!K&&(s.colorMask(Oe,Oe,Oe,Oe),ve=Oe)},setLocked:function(Oe){K=Oe},setClear:function(Oe,xe,$e,qe,zt){zt===!0&&(Oe*=qe,xe*=qe,$e*=qe),De.set(Oe,xe,$e,qe),Ie.equals(De)===!1&&(s.clearColor(Oe,xe,$e,qe),Ie.copy(De))},reset:function(){K=!1,ve=null,Ie.set(-1,0,0,0)}}}function r(){let K=!1,De=!1,ve=null,Ie=null,Oe=null;return{setReversed:function(xe){if(De!==xe){const $e=e.get("EXT_clip_control");xe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),De=xe;const qe=Oe;Oe=null,this.setClear(qe)}},getReversed:function(){return De},setTest:function(xe){xe?ue(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(xe){ve!==xe&&!K&&(s.depthMask(xe),ve=xe)},setFunc:function(xe){if(De&&(xe=Zx[xe]),Ie!==xe){switch(xe){case Yf:s.depthFunc(s.NEVER);break;case qf:s.depthFunc(s.ALWAYS);break;case jf:s.depthFunc(s.LESS);break;case ha:s.depthFunc(s.LEQUAL);break;case $f:s.depthFunc(s.EQUAL);break;case Kf:s.depthFunc(s.GEQUAL);break;case Zf:s.depthFunc(s.GREATER);break;case Qf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=xe}},setLocked:function(xe){K=xe},setClear:function(xe){Oe!==xe&&(Oe=xe,De&&(xe=1-xe),s.clearDepth(xe))},reset:function(){K=!1,ve=null,Ie=null,Oe=null,De=!1}}}function o(){let K=!1,De=null,ve=null,Ie=null,Oe=null,xe=null,$e=null,qe=null,zt=null;return{setTest:function(It){K||(It?ue(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(It){De!==It&&!K&&(s.stencilMask(It),De=It)},setFunc:function(It,wn,oi){(ve!==It||Ie!==wn||Oe!==oi)&&(s.stencilFunc(It,wn,oi),ve=It,Ie=wn,Oe=oi)},setOp:function(It,wn,oi){(xe!==It||$e!==wn||qe!==oi)&&(s.stencilOp(It,wn,oi),xe=It,$e=wn,qe=oi)},setLocked:function(It){K=It},setClear:function(It){zt!==It&&(s.clearStencil(It),zt=It)},reset:function(){K=!1,De=null,ve=null,Ie=null,Oe=null,xe=null,$e=null,qe=null,zt=null}}}const l=new t,u=new r,d=new o,p=new WeakMap,h=new WeakMap;let v={},y={},g={},S=new WeakMap,E=[],R=null,x=!1,_=null,I=null,P=null,b=null,C=null,U=null,V=null,w=new gt(0,0,0),N=0,j=!1,X=null,$=null,D=null,G=null,z=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ie)[1]),H=W>=1):ie.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),H=W>=2);let ne=null,F={};const ee=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),Ue=new nn().fromArray(ee),Fe=new nn().fromArray(be);function se(K,De,ve,Ie){const Oe=new Uint8Array(4),xe=s.createTexture();s.bindTexture(K,xe),s.texParameteri(K,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(K,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<ve;$e++)K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(De+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return xe}const pe={};pe[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ue(s.DEPTH_TEST),u.setFunc(ha),Vt(!1),Xt(Om),ue(s.CULL_FACE),St(Yi);function ue(K){v[K]!==!0&&(s.enable(K),v[K]=!0)}function Se(K){v[K]!==!1&&(s.disable(K),v[K]=!1)}function ze(K,De){return g[K]!==De?(s.bindFramebuffer(K,De),g[K]=De,K===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=De),K===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=De),!0):!1}function We(K,De){let ve=E,Ie=!1;if(K){ve=S.get(De),ve===void 0&&(ve=[],S.set(De,ve));const Oe=K.textures;if(ve.length!==Oe.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,$e=Oe.length;xe<$e;xe++)ve[xe]=s.COLOR_ATTACHMENT0+xe;ve.length=Oe.length,Ie=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ve)}function At(K){return R!==K?(s.useProgram(K),R=K,!0):!1}const lt={[hs]:s.FUNC_ADD,[yx]:s.FUNC_SUBTRACT,[Mx]:s.FUNC_REVERSE_SUBTRACT};lt[Sx]=s.MIN,lt[Ex]=s.MAX;const Rt={[wx]:s.ZERO,[Tx]:s.ONE,[bx]:s.SRC_COLOR,[Wf]:s.SRC_ALPHA,[Lx]:s.SRC_ALPHA_SATURATE,[Px]:s.DST_COLOR,[Rx]:s.DST_ALPHA,[Ax]:s.ONE_MINUS_SRC_COLOR,[Xf]:s.ONE_MINUS_SRC_ALPHA,[Nx]:s.ONE_MINUS_DST_COLOR,[Cx]:s.ONE_MINUS_DST_ALPHA,[Dx]:s.CONSTANT_COLOR,[Ix]:s.ONE_MINUS_CONSTANT_COLOR,[Ux]:s.CONSTANT_ALPHA,[Fx]:s.ONE_MINUS_CONSTANT_ALPHA};function St(K,De,ve,Ie,Oe,xe,$e,qe,zt,It){if(K===Yi){x===!0&&(Se(s.BLEND),x=!1);return}if(x===!1&&(ue(s.BLEND),x=!0),K!==_x){if(K!==_||It!==j){if((I!==hs||C!==hs)&&(s.blendEquation(s.FUNC_ADD),I=hs,C=hs),It)switch(K){case ca:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gs:s.blendFunc(s.ONE,s.ONE);break;case km:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",K);break}else switch(K){case ca:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case km:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zm:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",K);break}P=null,b=null,U=null,V=null,w.set(0,0,0),N=0,_=K,j=It}return}Oe=Oe||De,xe=xe||ve,$e=$e||Ie,(De!==I||Oe!==C)&&(s.blendEquationSeparate(lt[De],lt[Oe]),I=De,C=Oe),(ve!==P||Ie!==b||xe!==U||$e!==V)&&(s.blendFuncSeparate(Rt[ve],Rt[Ie],Rt[xe],Rt[$e]),P=ve,b=Ie,U=xe,V=$e),(qe.equals(w)===!1||zt!==N)&&(s.blendColor(qe.r,qe.g,qe.b,zt),w.copy(qe),N=zt),_=K,j=!1}function xt(K,De){K.side===zi?Se(s.CULL_FACE):ue(s.CULL_FACE);let ve=K.side===$n;De&&(ve=!ve),Vt(ve),K.blending===ca&&K.transparent===!1?St(Yi):St(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),u.setFunc(K.depthFunc),u.setTest(K.depthTest),u.setMask(K.depthWrite),l.setMask(K.colorWrite);const Ie=K.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(K.stencilWriteMask),d.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),d.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Dt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(K){X!==K&&(K?s.frontFace(s.CW):s.frontFace(s.CCW),X=K)}function Xt(K){K!==vx?(ue(s.CULL_FACE),K!==$&&(K===Om?s.cullFace(s.BACK):K===xx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),$=K}function tt(K){K!==D&&(H&&s.lineWidth(K),D=K)}function Dt(K,De,ve){K?(ue(s.POLYGON_OFFSET_FILL),(G!==De||z!==ve)&&(G=De,z=ve,u.getReversed()&&(De=-De),s.polygonOffset(De,ve))):Se(s.POLYGON_OFFSET_FILL)}function Ct(K){K?ue(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Ae(K){K===void 0&&(K=s.TEXTURE0+k-1),ne!==K&&(s.activeTexture(K),ne=K)}function Y(K,De,ve){ve===void 0&&(ne===null?ve=s.TEXTURE0+k-1:ve=ne);let Ie=F[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},F[ve]=Ie),(Ie.type!==K||Ie.texture!==De)&&(ne!==ve&&(s.activeTexture(ve),ne=ve),s.bindTexture(K,De||pe[K]),Ie.type=K,Ie.texture=De)}function Ge(){const K=F[ne];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function mt(){try{s.compressedTexImage2D(...arguments)}catch(K){Tt("WebGLState:",K)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(K){Tt("WebGLState:",K)}}function M(){try{s.texSubImage2D(...arguments)}catch(K){Tt("WebGLState:",K)}}function te(){try{s.texSubImage3D(...arguments)}catch(K){Tt("WebGLState:",K)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(K){Tt("WebGLState:",K)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(K){Tt("WebGLState:",K)}}function Ee(){try{s.texStorage2D(...arguments)}catch(K){Tt("WebGLState:",K)}}function Le(){try{s.texStorage3D(...arguments)}catch(K){Tt("WebGLState:",K)}}function me(){try{s.texImage2D(...arguments)}catch(K){Tt("WebGLState:",K)}}function ge(){try{s.texImage3D(...arguments)}catch(K){Tt("WebGLState:",K)}}function Te(K){return y[K]!==void 0?y[K]:s.getParameter(K)}function Xe(K,De){y[K]!==De&&(s.pixelStorei(K,De),y[K]=De)}function Ne(K){Ue.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),Ue.copy(K))}function Ce(K){Fe.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),Fe.copy(K))}function nt(K,De){let ve=h.get(De);ve===void 0&&(ve=new WeakMap,h.set(De,ve));let Ie=ve.get(K);Ie===void 0&&(Ie=s.getUniformBlockIndex(De,K.name),ve.set(K,Ie))}function it(K,De){const Ie=h.get(De).get(K);p.get(De)!==Ie&&(s.uniformBlockBinding(De,Ie,K.__bindingPointIndex),p.set(De,Ie))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},y={},ne=null,F={},g={},S=new WeakMap,E=[],R=null,x=!1,_=null,I=null,P=null,b=null,C=null,U=null,V=null,w=new gt(0,0,0),N=0,j=!1,X=null,$=null,D=null,G=null,z=null,Ue.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ue,disable:Se,bindFramebuffer:ze,drawBuffers:We,useProgram:At,setBlending:St,setMaterial:xt,setFlipSided:Vt,setCullFace:Xt,setLineWidth:tt,setPolygonOffset:Dt,setScissorTest:Ct,activeTexture:Ae,bindTexture:Y,unbindTexture:Ge,compressedTexImage2D:mt,compressedTexImage3D:L,texImage2D:me,texImage3D:ge,pixelStorei:Xe,getParameter:Te,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:Ee,texStorage3D:Le,texSubImage2D:M,texSubImage3D:te,compressedTexSubImage2D:le,compressedTexSubImage3D:de,scissor:Ne,viewport:Ce,reset:ot}}function wE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new rt,v=new WeakMap,y=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(L,M){return E?new OffscreenCanvas(L,M):dc("canvas")}function x(L,M,te){let le=1;const de=mt(L);if((de.width>te||de.height>te)&&(le=te/Math.max(de.width,de.height)),le<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ee=Math.floor(le*de.width),Le=Math.floor(le*de.height);g===void 0&&(g=R(Ee,Le));const me=M?R(Ee,Le):g;return me.width=Ee,me.height=Le,me.getContext("2d").drawImage(L,0,0,Ee,Le),ct("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ee+"x"+Le+")."),me}else return"data"in L&&ct("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),L;return L}function _(L){return L.generateMipmaps}function I(L){s.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,M,te,le,de,Ee=!1){if(L!==null){if(s[L]!==void 0)return s[L];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Le;le&&(Le=e.get("EXT_texture_norm16"),Le||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=M;if(M===s.RED&&(te===s.FLOAT&&(me=s.R32F),te===s.HALF_FLOAT&&(me=s.R16F),te===s.UNSIGNED_BYTE&&(me=s.R8),te===s.UNSIGNED_SHORT&&Le&&(me=Le.R16_EXT),te===s.SHORT&&Le&&(me=Le.R16_SNORM_EXT)),M===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(me=s.R8UI),te===s.UNSIGNED_SHORT&&(me=s.R16UI),te===s.UNSIGNED_INT&&(me=s.R32UI),te===s.BYTE&&(me=s.R8I),te===s.SHORT&&(me=s.R16I),te===s.INT&&(me=s.R32I)),M===s.RG&&(te===s.FLOAT&&(me=s.RG32F),te===s.HALF_FLOAT&&(me=s.RG16F),te===s.UNSIGNED_BYTE&&(me=s.RG8),te===s.UNSIGNED_SHORT&&Le&&(me=Le.RG16_EXT),te===s.SHORT&&Le&&(me=Le.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(me=s.RG8UI),te===s.UNSIGNED_SHORT&&(me=s.RG16UI),te===s.UNSIGNED_INT&&(me=s.RG32UI),te===s.BYTE&&(me=s.RG8I),te===s.SHORT&&(me=s.RG16I),te===s.INT&&(me=s.RG32I)),M===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(me=s.RGB8UI),te===s.UNSIGNED_SHORT&&(me=s.RGB16UI),te===s.UNSIGNED_INT&&(me=s.RGB32UI),te===s.BYTE&&(me=s.RGB8I),te===s.SHORT&&(me=s.RGB16I),te===s.INT&&(me=s.RGB32I)),M===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),te===s.UNSIGNED_INT&&(me=s.RGBA32UI),te===s.BYTE&&(me=s.RGBA8I),te===s.SHORT&&(me=s.RGBA16I),te===s.INT&&(me=s.RGBA32I)),M===s.RGB&&(te===s.UNSIGNED_SHORT&&Le&&(me=Le.RGB16_EXT),te===s.SHORT&&Le&&(me=Le.RGB16_SNORM_EXT),te===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),te===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),M===s.RGBA){const ge=Ee?hc:Et.getTransfer(de);te===s.FLOAT&&(me=s.RGBA32F),te===s.HALF_FLOAT&&(me=s.RGBA16F),te===s.UNSIGNED_BYTE&&(me=ge===Ft?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT&&Le&&(me=Le.RGBA16_EXT),te===s.SHORT&&Le&&(me=Le.RGBA16_SNORM_EXT),te===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function C(L,M){let te;return L?M===null||M===ji||M===xo?te=s.DEPTH24_STENCIL8:M===Gi?te=s.DEPTH32F_STENCIL8:M===vo&&(te=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ji||M===xo?te=s.DEPTH_COMPONENT24:M===Gi?te=s.DEPTH_COMPONENT32F:M===vo&&(te=s.DEPTH_COMPONENT16),te}function U(L,M){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==Sn&&L.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function V(L){const M=L.target;M.removeEventListener("dispose",V),N(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&y.delete(M)}function w(L){const M=L.target;M.removeEventListener("dispose",w),X(M)}function N(L){const M=r.get(L);if(M.__webglInit===void 0)return;const te=L.source,le=S.get(te);if(le){const de=le[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&j(L),Object.keys(le).length===0&&S.delete(te)}r.remove(L)}function j(L){const M=r.get(L);s.deleteTexture(M.__webglTexture);const te=L.source,le=S.get(te);delete le[M.__cacheKey],u.memory.textures--}function X(L){const M=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let de=0;de<M.__webglFramebuffer[le].length;de++)s.deleteFramebuffer(M.__webglFramebuffer[le][de]);else s.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)s.deleteFramebuffer(M.__webglFramebuffer[le]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const te=L.textures;for(let le=0,de=te.length;le<de;le++){const Ee=r.get(te[le]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),u.memory.textures--),r.remove(te[le])}r.remove(L)}let $=0;function D(){$=0}function G(){return $}function z(L){$=L}function k(){const L=$;return L>=o.maxTextures&&ct("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),$+=1,L}function H(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function W(L,M){const te=r.get(L);if(L.isVideoTexture&&Y(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&te.__version!==L.version){const le=L.image;if(le===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(te,L,M);return}}else L.isExternalTexture&&(te.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+M)}function ie(L,M){const te=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){Se(te,L,M);return}else L.isExternalTexture&&(te.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+M)}function ne(L,M){const te=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){Se(te,L,M);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+M)}function F(L,M){const te=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&te.__version!==L.version){ze(te,L,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+M)}const ee={[pa]:s.REPEAT,[cr]:s.CLAMP_TO_EDGE,[Jf]:s.MIRRORED_REPEAT},be={[Sn]:s.NEAREST,[zx]:s.NEAREST_MIPMAP_NEAREST,[Rl]:s.NEAREST_MIPMAP_LINEAR,[En]:s.LINEAR,[uf]:s.LINEAR_MIPMAP_NEAREST,[ps]:s.LINEAR_MIPMAP_LINEAR},Ue={[Gx]:s.NEVER,[qx]:s.ALWAYS,[Hx]:s.LESS,[Zh]:s.LEQUAL,[Wx]:s.EQUAL,[Qh]:s.GEQUAL,[Xx]:s.GREATER,[Yx]:s.NOTEQUAL};function Fe(L,M){if(M.type===Gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===En||M.magFilter===uf||M.magFilter===Rl||M.magFilter===ps||M.minFilter===En||M.minFilter===uf||M.minFilter===Rl||M.minFilter===ps)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ee[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ee[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ee[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,be[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,be[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==Rl&&M.minFilter!==ps||M.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function se(L,M){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",V));const le=M.source;let de=S.get(le);de===void 0&&(de={},S.set(le,de));const Ee=H(M);if(Ee!==L.__cacheKey){de[Ee]===void 0&&(de[Ee]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),de[Ee].usedTimes++;const Le=de[L.__cacheKey];Le!==void 0&&(de[L.__cacheKey].usedTimes--,Le.usedTimes===0&&j(M)),L.__cacheKey=Ee,L.__webglTexture=de[Ee].texture}return te}function pe(L,M,te){return Math.floor(Math.floor(L/te)/M)}function ue(L,M,te,le){const Ee=L.updateRanges;if(Ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,te,le,M.data);else{Ee.sort((Xe,Ne)=>Xe.start-Ne.start);let Le=0;for(let Xe=1;Xe<Ee.length;Xe++){const Ne=Ee[Le],Ce=Ee[Xe],nt=Ne.start+Ne.count,it=pe(Ce.start,M.width,4),ot=pe(Ne.start,M.width,4);Ce.start<=nt+1&&it===ot&&pe(Ce.start+Ce.count-1,M.width,4)===it?Ne.count=Math.max(Ne.count,Ce.start+Ce.count-Ne.start):(++Le,Ee[Le]=Ce)}Ee.length=Le+1;const me=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),Te=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Xe=0,Ne=Ee.length;Xe<Ne;Xe++){const Ce=Ee[Xe],nt=Math.floor(Ce.start/4),it=Math.ceil(Ce.count/4),ot=nt%M.width,K=Math.floor(nt/M.width),De=it,ve=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(s.UNPACK_SKIP_ROWS,K),t.texSubImage2D(s.TEXTURE_2D,0,ot,K,De,ve,te,le,M.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function Se(L,M,te){let le=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=s.TEXTURE_3D);const de=se(L,M),Ee=M.source;t.bindTexture(le,L.__webglTexture,s.TEXTURE0+te);const Le=r.get(Ee);if(Ee.version!==Le.__version||de===!0){if(t.activeTexture(s.TEXTURE0+te),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ve=Et.getPrimaries(Et.workingColorSpace),Ie=M.colorSpace===Or?null:Et.getPrimaries(M.colorSpace),Oe=M.colorSpace===Or||ve===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let ge=x(M.image,!1,o.maxTextureSize);ge=Ge(M,ge);const Te=l.convert(M.format,M.colorSpace),Xe=l.convert(M.type);let Ne=b(M.internalFormat,Te,Xe,M.normalized,M.colorSpace,M.isVideoTexture);Fe(le,M);let Ce;const nt=M.mipmaps,it=M.isVideoTexture!==!0,ot=Le.__version===void 0||de===!0,K=Ee.dataReady,De=U(M,ge);if(M.isDepthTexture)Ne=C(M.format===ms,M.type),ot&&(it?t.texStorage2D(s.TEXTURE_2D,1,Ne,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Ne,ge.width,ge.height,0,Te,Xe,null));else if(M.isDataTexture)if(nt.length>0){it&&ot&&t.texStorage2D(s.TEXTURE_2D,De,Ne,nt[0].width,nt[0].height);for(let ve=0,Ie=nt.length;ve<Ie;ve++)Ce=nt[ve],it?K&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Te,Xe,Ce.data):t.texImage2D(s.TEXTURE_2D,ve,Ne,Ce.width,Ce.height,0,Te,Xe,Ce.data);M.generateMipmaps=!1}else it?(ot&&t.texStorage2D(s.TEXTURE_2D,De,Ne,ge.width,ge.height),K&&ue(M,ge,Te,Xe)):t.texImage2D(s.TEXTURE_2D,0,Ne,ge.width,ge.height,0,Te,Xe,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ne,nt[0].width,nt[0].height,ge.depth);for(let ve=0,Ie=nt.length;ve<Ie;ve++)if(Ce=nt[ve],M.format!==Ci)if(Te!==null)if(it){if(K)if(M.layerUpdates.size>0){const Oe=v0(Ce.width,Ce.height,M.format,M.type);for(const xe of M.layerUpdates){const $e=Ce.data.subarray(xe*Oe/Ce.data.BYTES_PER_ELEMENT,(xe+1)*Oe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,xe,Ce.width,Ce.height,1,Te,$e)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,ge.depth,Te,Ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Ne,Ce.width,Ce.height,ge.depth,0,Ce.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?K&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,ge.depth,Te,Xe,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,Ne,Ce.width,Ce.height,ge.depth,0,Te,Xe,Ce.data)}else{it&&ot&&t.texStorage2D(s.TEXTURE_2D,De,Ne,nt[0].width,nt[0].height);for(let ve=0,Ie=nt.length;ve<Ie;ve++)Ce=nt[ve],M.format!==Ci?Te!==null?it?K&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Te,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,Ne,Ce.width,Ce.height,0,Ce.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?K&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Te,Xe,Ce.data):t.texImage2D(s.TEXTURE_2D,ve,Ne,Ce.width,Ce.height,0,Te,Xe,Ce.data)}else if(M.isDataArrayTexture)if(it){if(ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ne,ge.width,ge.height,ge.depth),K)if(M.layerUpdates.size>0){const ve=v0(ge.width,ge.height,M.format,M.type);for(const Ie of M.layerUpdates){const Oe=ge.data.subarray(Ie*ve/ge.data.BYTES_PER_ELEMENT,(Ie+1)*ve/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ie,ge.width,ge.height,1,Te,Xe,Oe)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Te,Xe,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,ge.width,ge.height,ge.depth,0,Te,Xe,ge.data);else if(M.isData3DTexture)it?(ot&&t.texStorage3D(s.TEXTURE_3D,De,Ne,ge.width,ge.height,ge.depth),K&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Te,Xe,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,ge.width,ge.height,ge.depth,0,Te,Xe,ge.data);else if(M.isFramebufferTexture){if(ot)if(it)t.texStorage2D(s.TEXTURE_2D,De,Ne,ge.width,ge.height);else{let ve=ge.width,Ie=ge.height;for(let Oe=0;Oe<De;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Ne,ve,Ie,0,Te,Xe,null),ve>>=1,Ie>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),ge.parentNode!==ve){ve.appendChild(ge),y.add(M),ve.onpaint=Ie=>{const Oe=Ie.changedElements;for(const xe of y)Oe.includes(xe.image)&&(xe.needsUpdate=!0)},ve.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const Oe=s.RGBA,xe=s.RGBA,$e=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Oe,xe,$e,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&ot){const ve=mt(nt[0]);t.texStorage2D(s.TEXTURE_2D,De,Ne,ve.width,ve.height)}for(let ve=0,Ie=nt.length;ve<Ie;ve++)Ce=nt[ve],it?K&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Te,Xe,Ce):t.texImage2D(s.TEXTURE_2D,ve,Ne,Te,Xe,Ce);M.generateMipmaps=!1}else if(it){if(ot){const ve=mt(ge);t.texStorage2D(s.TEXTURE_2D,De,Ne,ve.width,ve.height)}K&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Xe,ge)}else t.texImage2D(s.TEXTURE_2D,0,Ne,Te,Xe,ge);_(M)&&I(le),Le.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ze(L,M,te){if(M.image.length!==6)return;const le=se(L,M),de=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+te);const Ee=r.get(de);if(de.version!==Ee.__version||le===!0){t.activeTexture(s.TEXTURE0+te);const Le=Et.getPrimaries(Et.workingColorSpace),me=M.colorSpace===Or?null:Et.getPrimaries(M.colorSpace),ge=M.colorSpace===Or||Le===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Te=M.isCompressedTexture||M.image[0].isCompressedTexture,Xe=M.image[0]&&M.image[0].isDataTexture,Ne=[];for(let xe=0;xe<6;xe++)!Te&&!Xe?Ne[xe]=x(M.image[xe],!0,o.maxCubemapSize):Ne[xe]=Xe?M.image[xe].image:M.image[xe],Ne[xe]=Ge(M,Ne[xe]);const Ce=Ne[0],nt=l.convert(M.format,M.colorSpace),it=l.convert(M.type),ot=b(M.internalFormat,nt,it,M.normalized,M.colorSpace),K=M.isVideoTexture!==!0,De=Ee.__version===void 0||le===!0,ve=de.dataReady;let Ie=U(M,Ce);Fe(s.TEXTURE_CUBE_MAP,M);let Oe;if(Te){K&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ot,Ce.width,Ce.height);for(let xe=0;xe<6;xe++){Oe=Ne[xe].mipmaps;for(let $e=0;$e<Oe.length;$e++){const qe=Oe[$e];M.format!==Ci?nt!==null?K?ve&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,0,0,qe.width,qe.height,nt,qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,ot,qe.width,qe.height,0,qe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,0,0,qe.width,qe.height,nt,it,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,ot,qe.width,qe.height,0,nt,it,qe.data)}}}else{if(Oe=M.mipmaps,K&&De){Oe.length>0&&Ie++;const xe=mt(Ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ot,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Xe){K?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ne[xe].width,Ne[xe].height,nt,it,Ne[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ot,Ne[xe].width,Ne[xe].height,0,nt,it,Ne[xe].data);for(let $e=0;$e<Oe.length;$e++){const zt=Oe[$e].image[xe].image;K?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,0,0,zt.width,zt.height,nt,it,zt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,ot,zt.width,zt.height,0,nt,it,zt.data)}}else{K?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,nt,it,Ne[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ot,nt,it,Ne[xe]);for(let $e=0;$e<Oe.length;$e++){const qe=Oe[$e];K?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,0,0,nt,it,qe.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,ot,nt,it,qe.image[xe])}}}_(M)&&I(s.TEXTURE_CUBE_MAP),Ee.__version=de.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function We(L,M,te,le,de,Ee){const Le=l.convert(te.format,te.colorSpace),me=l.convert(te.type),ge=b(te.internalFormat,Le,me,te.normalized,te.colorSpace),Te=r.get(M),Xe=r.get(te);if(Xe.__renderTarget=M,!Te.__hasExternalTextures){const Ne=Math.max(1,M.width>>Ee),Ce=Math.max(1,M.height>>Ee);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,Ee,ge,Ne,Ce,M.depth,0,Le,me,null):t.texImage2D(de,Ee,ge,Ne,Ce,0,Le,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Ae(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,de,Xe.__webglTexture,0,Ct(M)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,de,Xe.__webglTexture,Ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function At(L,M,te){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const le=M.depthTexture,de=le&&le.isDepthTexture?le.type:null,Ee=C(M.stencilBuffer,de),Le=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ae(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(M),Ee,M.width,M.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(M),Ee,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,L)}else{const le=M.textures;for(let de=0;de<le.length;de++){const Ee=le[de],Le=l.convert(Ee.format,Ee.colorSpace),me=l.convert(Ee.type),ge=b(Ee.internalFormat,Le,me,Ee.normalized,Ee.colorSpace);Ae(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(M),ge,M.width,M.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(M),ge,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ge,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(L,M,te){const le=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=r.get(M.depthTexture);if(de.__renderTarget=M,(!de.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(de.__webglInit===void 0&&(de.__webglInit=!0,M.depthTexture.addEventListener("dispose",V)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,M.depthTexture);const Te=l.convert(M.depthTexture.format),Xe=l.convert(M.depthTexture.type);let Ne;M.depthTexture.format===fr?Ne=s.DEPTH_COMPONENT24:M.depthTexture.format===ms&&(Ne=s.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ne,M.width,M.height,0,Te,Xe,null)}}else W(M.depthTexture,0);const Ee=de.__webglTexture,Le=Ct(M),me=le?s.TEXTURE_CUBE_MAP_POSITIVE_X+te:s.TEXTURE_2D,ge=M.depthTexture.format===ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===fr)Ae(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,me,Ee,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,ge,me,Ee,0);else if(M.depthTexture.format===ms)Ae(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,me,Ee,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,ge,me,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(L){const M=r.get(L),te=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const le=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const de=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",de)};le.addEventListener("dispose",de),M.__depthDisposeCallback=de}M.__boundDepthTexture=le}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(te)for(let le=0;le<6;le++)lt(M.__webglFramebuffer[le],L,le);else{const le=L.texture.mipmaps;le&&le.length>0?lt(M.__webglFramebuffer[0],L,0):lt(M.__webglFramebuffer,L,0)}else if(te){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=s.createRenderbuffer(),At(M.__webglDepthbuffer[le],L,!1);else{const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer[le];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ee)}}else{const le=L.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),At(M.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(L,M,te){const le=r.get(L);M!==void 0&&We(le.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Rt(L)}function xt(L){const M=L.texture,te=r.get(L),le=r.get(M);L.addEventListener("dispose",w);const de=L.textures,Ee=L.isWebGLCubeRenderTarget===!0,Le=de.length>1;if(Le||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=M.version,u.memory.textures++),Ee){te.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer[me]=[];for(let ge=0;ge<M.mipmaps.length;ge++)te.__webglFramebuffer[me][ge]=s.createFramebuffer()}else te.__webglFramebuffer[me]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)te.__webglFramebuffer[me]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Le)for(let me=0,ge=de.length;me<ge;me++){const Te=r.get(de[me]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&Ae(L)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let me=0;me<de.length;me++){const ge=de[me];te.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[me]);const Te=l.convert(ge.format,ge.colorSpace),Xe=l.convert(ge.type),Ne=b(ge.internalFormat,Te,Xe,ge.normalized,ge.colorSpace,L.isXRRenderTarget===!0),Ce=Ct(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,Ne,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,te.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),At(te.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)We(te.__webglFramebuffer[me][ge],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ge);else We(te.__webglFramebuffer[me],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);_(M)&&I(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let me=0,ge=de.length;me<ge;me++){const Te=de[me],Xe=r.get(Te);let Ne=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Xe.__webglTexture),Fe(Ne,Te),We(te.__webglFramebuffer,L,Te,s.COLOR_ATTACHMENT0+me,Ne,0),_(Te)&&I(Ne)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,le.__webglTexture),Fe(me,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)We(te.__webglFramebuffer[ge],L,M,s.COLOR_ATTACHMENT0,me,ge);else We(te.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,me,0);_(M)&&I(me),t.unbindTexture()}L.depthBuffer&&Rt(L)}function Vt(L){const M=L.textures;for(let te=0,le=M.length;te<le;te++){const de=M[te];if(_(de)){const Ee=P(L),Le=r.get(de).__webglTexture;t.bindTexture(Ee,Le),I(Ee),t.unbindTexture()}}}const Xt=[],tt=[];function Dt(L){if(L.samples>0){if(Ae(L)===!1){const M=L.textures,te=L.width,le=L.height;let de=s.COLOR_BUFFER_BIT;const Ee=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=r.get(L),me=M.length>1;if(me)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const ge=L.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);const Xe=r.get(M[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xe,0)}s.blitFramebuffer(0,0,te,le,0,0,te,le,de,s.NEAREST),p===!0&&(Xt.length=0,tt.length=0,Xt.push(s.COLOR_ATTACHMENT0+Te),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Xt.push(Ee),tt.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,tt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);const Xe=r.get(M[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ct(L){return Math.min(o.maxSamples,L.samples)}function Ae(L){const M=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Y(L){const M=u.render.frame;v.get(L)!==M&&(v.set(L,M),L.update())}function Ge(L,M){const te=L.colorSpace,le=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||te!==fc&&te!==Or&&(Et.getTransfer(te)===Ft?(le!==Ci||de!==si)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",te)),M}function mt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.getTextureUnits=G,this.setTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=ie,this.setTexture3D=ne,this.setTextureCube=F,this.rebindTextures=St,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function TE(s,e){function t(r,o=Or){let l;const u=Et.getTransfer(o);if(r===si)return s.UNSIGNED_BYTE;if(r===Yh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Q0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===J0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===K0)return s.BYTE;if(r===Z0)return s.SHORT;if(r===vo)return s.UNSIGNED_SHORT;if(r===Xh)return s.INT;if(r===ji)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===ai)return s.HALF_FLOAT;if(r===eg)return s.ALPHA;if(r===tg)return s.RGB;if(r===Ci)return s.RGBA;if(r===fr)return s.DEPTH_COMPONENT;if(r===ms)return s.DEPTH_STENCIL;if(r===ng)return s.RED;if(r===jh)return s.RED_INTEGER;if(r===xs)return s.RG;if(r===$h)return s.RG_INTEGER;if(r===Kh)return s.RGBA_INTEGER;if(r===ic||r===rc||r===sc||r===ac)if(u===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ic)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ic)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===sc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ac)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eh||r===th||r===nh||r===ih)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===eh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===th)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ih)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rh||r===sh||r===ah||r===oh||r===lh||r===cc||r===ch)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===rh||r===sh)return u===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ah)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===oh)return l.COMPRESSED_R11_EAC;if(r===lh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===cc)return l.COMPRESSED_RG11_EAC;if(r===ch)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===uh||r===fh||r===hh||r===dh||r===ph||r===mh||r===gh||r===vh||r===xh||r===_h||r===yh||r===Mh||r===Sh||r===Eh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===uh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ph)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_h)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eh)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wh||r===Th||r===bh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===wh)return u===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Th)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ah||r===Rh||r===uc||r===Ch)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ah)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Rh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ch)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const bE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
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

}`;class RE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new hg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ln({vertexShader:bE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Xi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CE extends _s{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,h=null,v=null,y=null,g=null,S=null,E=null;const R=typeof XRWebGLBinding<"u",x=new RE,_={},I=t.getContextAttributes();let P=null,b=null;const C=[],U=[],V=new rt;let w=null;const N=new ri;N.viewport=new nn;const j=new ri;j.viewport=new nn;const X=[N,j],$=new F_;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let pe=C[se];return pe===void 0&&(pe=new xf,C[se]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(se){let pe=C[se];return pe===void 0&&(pe=new xf,C[se]=pe),pe.getGripSpace()},this.getHand=function(se){let pe=C[se];return pe===void 0&&(pe=new xf,C[se]=pe),pe.getHandSpace()};function z(se){const pe=U.indexOf(se.inputSource);if(pe===-1)return;const ue=C[pe];ue!==void 0&&(ue.update(se.inputSource,se.frame,h||u),ue.dispatchEvent({type:se.type,data:se.inputSource}))}function k(){o.removeEventListener("select",z),o.removeEventListener("selectstart",z),o.removeEventListener("selectend",z),o.removeEventListener("squeeze",z),o.removeEventListener("squeezestart",z),o.removeEventListener("squeezeend",z),o.removeEventListener("end",k),o.removeEventListener("inputsourceschange",H);for(let se=0;se<C.length;se++){const pe=U[se];pe!==null&&(U[se]=null,C[se].disconnect(pe))}D=null,G=null,x.reset();for(const se in _)delete _[se];e.setRenderTarget(P),S=null,g=null,y=null,o=null,b=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return y===null&&R&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",z),o.addEventListener("selectstart",z),o.addEventListener("selectend",z),o.addEventListener("squeeze",z),o.addEventListener("squeezestart",z),o.addEventListener("squeezeend",z),o.addEventListener("end",k),o.addEventListener("inputsourceschange",H),I.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(V),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Se=null,ze=null;I.depth&&(ze=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=I.stencil?ms:fr,Se=I.stencil?xo:ji);const We={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(We),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new Kn(g.textureWidth,g.textureHeight,{format:Ci,type:si,depthTexture:new ma(g.textureWidth,g.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ue={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,ue),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new Kn(S.framebufferWidth,S.framebufferHeight,{format:Ci,type:si,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(d),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(se){for(let pe=0;pe<se.removed.length;pe++){const ue=se.removed[pe],Se=U.indexOf(ue);Se>=0&&(U[Se]=null,C[Se].disconnect(ue))}for(let pe=0;pe<se.added.length;pe++){const ue=se.added[pe];let Se=U.indexOf(ue);if(Se===-1){for(let We=0;We<C.length;We++)if(We>=U.length){U.push(ue),Se=We;break}else if(U[We]===null){U[We]=ue,Se=We;break}if(Se===-1)break}const ze=C[Se];ze&&ze.connect(ue)}}const W=new Q,ie=new Q;function ne(se,pe,ue){W.setFromMatrixPosition(pe.matrixWorld),ie.setFromMatrixPosition(ue.matrixWorld);const Se=W.distanceTo(ie),ze=pe.projectionMatrix.elements,We=ue.projectionMatrix.elements,At=ze[14]/(ze[10]-1),lt=ze[14]/(ze[10]+1),Rt=(ze[9]+1)/ze[5],St=(ze[9]-1)/ze[5],xt=(ze[8]-1)/ze[0],Vt=(We[8]+1)/We[0],Xt=At*xt,tt=At*Vt,Dt=Se/(-xt+Vt),Ct=Dt*-xt;if(pe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ct),se.translateZ(Dt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ze[10]===-1)se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ae=At+Dt,Y=lt+Dt,Ge=Xt-Ct,mt=tt+(Se-Ct),L=Rt*lt/Y*Ae,M=St*lt/Y*Ae;se.projectionMatrix.makePerspective(Ge,mt,L,M,Ae,Y),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function F(se,pe){pe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(pe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let pe=se.near,ue=se.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),$.near=j.near=N.near=pe,$.far=j.far=N.far=ue,(D!==$.near||G!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),D=$.near,G=$.far),$.layers.mask=se.layers.mask|6,N.layers.mask=$.layers.mask&-5,j.layers.mask=$.layers.mask&-3;const Se=se.parent,ze=$.cameras;F($,Se);for(let We=0;We<ze.length;We++)F(ze[We],Se);ze.length===2?ne($,N,j):$.projectionMatrix.copy(N.projectionMatrix),ee(se,$,Se)};function ee(se,pe,ue){ue===null?se.matrix.copy(pe.matrixWorld):(se.matrix.copy(ue.matrixWorld),se.matrix.invert(),se.matrix.multiply(pe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Lh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(se){p=se,g!==null&&(g.fixedFoveation=se),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh($)},this.getCameraTexture=function(se){return _[se]};let be=null;function Ue(se,pe){if(v=pe.getViewerPose(h||u),E=pe,v!==null){const ue=v.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let Se=!1;ue.length!==$.cameras.length&&($.cameras.length=0,Se=!0);for(let lt=0;lt<ue.length;lt++){const Rt=ue[lt];let St=null;if(S!==null)St=S.getViewport(Rt);else{const Vt=y.getViewSubImage(g,Rt);St=Vt.viewport,lt===0&&(e.setRenderTargetTextures(b,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(b))}let xt=X[lt];xt===void 0&&(xt=new ri,xt.layers.enable(lt),xt.viewport=new nn,X[lt]=xt),xt.matrix.fromArray(Rt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Rt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(St.x,St.y,St.width,St.height),lt===0&&($.matrix.copy(xt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Se===!0&&$.cameras.push(xt)}const ze=o.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){y=r.getBinding();const lt=y.getDepthInformation(ue[0]);lt&&lt.isValid&&lt.texture&&x.init(lt,o.renderState)}if(ze&&ze.includes("camera-access")&&R){e.state.unbindTexture(),y=r.getBinding();for(let lt=0;lt<ue.length;lt++){const Rt=ue[lt].camera;if(Rt){let St=_[Rt];St||(St=new hg,_[Rt]=St);const xt=y.getCameraImage(Rt);St.sourceTexture=xt}}}}for(let ue=0;ue<C.length;ue++){const Se=U[ue],ze=C[ue];Se!==null&&ze!==void 0&&ze.update(Se,pe,h||u)}be&&be(se,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),E=null}const Fe=new xg;Fe.setAnimationLoop(Ue),this.setAnimationLoop=function(se){be=se},this.dispose=function(){}}}const PE=new $t,Tg=new pt;Tg.set(-1,0,0,0,1,0,0,0,1);function NE(s,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,dg(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function o(x,_,I,P,b){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(x,_):_.isMeshLambertMaterial?(l(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(x,_),y(x,_)):_.isMeshPhongMaterial?(l(x,_),v(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(x,_),g(x,_),_.isMeshPhysicalMaterial&&S(x,_,b)):_.isMeshMatcapMaterial?(l(x,_),E(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),R(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(u(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?p(x,_,I,P):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===$n&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===$n&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const I=e.get(_),P=I.envMap,b=I.envMapRotation;P&&(x.envMap.value=P,x.envMapRotation.value.setFromMatrix4(PE.makeRotationFromEuler(b)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Tg),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function p(x,_,I,P){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*I,x.scale.value=P*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function v(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function y(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,I){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function R(x,_){const I=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LE(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,C){const U=C.program;r.uniformBlockBinding(b,U)}function h(b,C){let U=o[b.id];U===void 0&&(x(b),U=v(b),o[b.id]=U,b.addEventListener("dispose",I));const V=C.program;r.updateUBOMapping(b,V);const w=e.render.frame;l[b.id]!==w&&(g(b),l[b.id]=w)}function v(b){const C=y();b.__bindingPointIndex=C;const U=s.createBuffer(),V=b.__size,w=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,V,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,U),U}function y(){for(let b=0;b<d;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const C=o[b.id],U=b.uniforms,V=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let w=0,N=U.length;w<N;w++){const j=U[w];if(Array.isArray(j))for(let X=0,$=j.length;X<$;X++)S(j[X],w,X,V);else S(j,w,0,V)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(b,C,U,V){if(R(b,C,U,V)===!0){const w=b.__offset,N=b.value;if(Array.isArray(N)){let j=0;for(let X=0;X<N.length;X++){const $=N[X],D=_($);E($,b.__data,j),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(j+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,b.__data)}}function E(b,C,U){typeof b=="number"||typeof b=="boolean"?C[0]=b:b.isMatrix3?(C[0]=b.elements[0],C[1]=b.elements[1],C[2]=b.elements[2],C[3]=0,C[4]=b.elements[3],C[5]=b.elements[4],C[6]=b.elements[5],C[7]=0,C[8]=b.elements[6],C[9]=b.elements[7],C[10]=b.elements[8],C[11]=0):ArrayBuffer.isView(b)?C.set(new b.constructor(b.buffer,b.byteOffset,C.length)):b.toArray(C,U)}function R(b,C,U,V){const w=b.value,N=C+"_"+U;if(V[N]===void 0)return typeof w=="number"||typeof w=="boolean"?V[N]=w:ArrayBuffer.isView(w)?V[N]=w.slice():V[N]=w.clone(),!0;{const j=V[N];if(typeof w=="number"||typeof w=="boolean"){if(j!==w)return V[N]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(j.equals(w)===!1)return j.copy(w),!0}}return!1}function x(b){const C=b.uniforms;let U=0;const V=16;for(let N=0,j=C.length;N<j;N++){const X=Array.isArray(C[N])?C[N]:[C[N]];for(let $=0,D=X.length;$<D;$++){const G=X[$],z=Array.isArray(G.value)?G.value:[G.value];for(let k=0,H=z.length;k<H;k++){const W=z[k],ie=_(W),ne=U%V,F=ne%ie.boundary,ee=ne+F;U+=F,ee!==0&&V-ee<ie.storage&&(U+=V-ee),G.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=U,U+=ie.storage}}}const w=U%V;return w>0&&(U+=V-w),b.__size=U,b.__cache={},this}function _(b){const C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(C.boundary=16,C.storage=b.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",b),C}function I(b){const C=b.target;C.removeEventListener("dispose",I);const U=u.indexOf(C.__bindingPointIndex);u.splice(U,1),s.deleteBuffer(o[C.id]),delete o[C.id],delete l[C.id]}function P(){for(const b in o)s.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:p,update:h,dispose:P}}const DE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function IE(){return Fi===null&&(Fi=new y_(DE,16,16,xs,ai),Fi.name="DFG_LUT",Fi.minFilter=En,Fi.magFilter=En,Fi.wrapS=cr,Fi.wrapT=cr,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class UE{constructor(e={}){const{canvas:t=$x(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:S=si}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const R=S,x=new Set([Kh,$h,jh]),_=new Set([si,ji,vo,xo,Yh,qh]),I=new Uint32Array(4),P=new Int32Array(4),b=new Q;let C=null,U=null;const V=[],w=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let X=!1,$=null,D=null,G=null,z=null;this._outputColorSpace=Nn;let k=0,H=0,W=null,ie=-1,ne=null;const F=new nn,ee=new nn;let be=null;const Ue=new gt(0);let Fe=0,se=t.width,pe=t.height,ue=1,Se=null,ze=null;const We=new nn(0,0,se,pe),At=new nn(0,0,se,pe);let lt=!1;const Rt=new id;let St=!1,xt=!1;const Vt=new $t,Xt=new Q,tt=new nn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Ae(){return W===null?ue:1}let Y=r;function Ge(A,J){return t.getContext(A,J)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kh}`),t.addEventListener("webglcontextlost",zt,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",wn,!1),Y===null){const J="webgl2";if(Y=Ge(J,A),Y===null)throw Ge(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let mt,L,M,te,le,de,Ee,Le,me,ge,Te,Xe,Ne,Ce,nt,it,ot,K,De,ve,Ie,Oe,xe;function $e(){mt=new IS(Y),mt.init(),Ie=new TE(Y,mt),L=new bS(Y,mt,e,Ie),M=new EE(Y,mt),L.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),D=Y.createFramebuffer(),G=Y.createFramebuffer(),z=Y.createFramebuffer(),te=new OS(Y),le=new cE,de=new wE(Y,mt,M,le,L,Ie,te),Ee=new DS(j),Le=new V_(Y),Oe=new wS(Y,Le),me=new US(Y,Le,te,Oe),ge=new zS(Y,me,Le,Oe,te),K=new kS(Y,L,de),nt=new AS(le),Te=new lE(j,Ee,mt,L,Oe,nt),Xe=new NE(j,le),Ne=new fE,Ce=new vE(mt),ot=new ES(j,Ee,M,ge,E,p),it=new SE(j,ge,L),xe=new LE(Y,te,L,M),De=new TS(Y,mt,te),ve=new FS(Y,mt,te),te.programs=Te.programs,j.capabilities=L,j.extensions=mt,j.properties=le,j.renderLists=Ne,j.shadowMap=it,j.state=M,j.info=te}$e(),R!==si&&(N=new VS(R,t.width,t.height,d,o,l));const qe=new CE(j,Y);this.xr=qe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(A){A!==void 0&&(ue=A,this.setSize(se,pe,!1))},this.getSize=function(A){return A.set(se,pe)},this.setSize=function(A,J,fe=!0){if(qe.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,pe=J,t.width=Math.floor(A*ue),t.height=Math.floor(J*ue),fe===!0&&(t.style.width=A+"px",t.style.height=J+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(se*ue,pe*ue).floor()},this.setDrawingBufferSize=function(A,J,fe){se=A,pe=J,ue=fe,t.width=Math.floor(A*fe),t.height=Math.floor(J*fe),this.setViewport(0,0,A,J)},this.setEffects=function(A){if(R===si){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let J=0;J<A.length;J++)if(A[J].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(We)},this.setViewport=function(A,J,fe,oe){A.isVector4?We.set(A.x,A.y,A.z,A.w):We.set(A,J,fe,oe),M.viewport(F.copy(We).multiplyScalar(ue).round())},this.getScissor=function(A){return A.copy(At)},this.setScissor=function(A,J,fe,oe){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,J,fe,oe),M.scissor(ee.copy(At).multiplyScalar(ue).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(A){M.setScissorTest(lt=A)},this.setOpaqueSort=function(A){Se=A},this.setTransparentSort=function(A){ze=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,J=!0,fe=!0){let oe=0;if(A){let ae=!1;if(W!==null){const Pe=W.texture.format;ae=x.has(Pe)}if(ae){const Pe=W.texture.type,He=_.has(Pe),Re=ot.getClearColor(),Ke=ot.getClearAlpha(),et=Re.r,ht=Re.g,dt=Re.b;He?(I[0]=et,I[1]=ht,I[2]=dt,I[3]=Ke,Y.clearBufferuiv(Y.COLOR,0,I)):(P[0]=et,P[1]=ht,P[2]=dt,P[3]=Ke,Y.clearBufferiv(Y.COLOR,0,P))}else oe|=Y.COLOR_BUFFER_BIT}J&&(oe|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(oe|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&Y.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){t.removeEventListener("webglcontextlost",zt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),ot.dispose(),Ne.dispose(),Ce.dispose(),le.dispose(),Ee.dispose(),ge.dispose(),Oe.dispose(),xe.dispose(),Te.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",wo),qe.removeEventListener("sessionend",To),Un.stop()};function zt(A){A.preventDefault(),pc("WebGLRenderer: Context Lost."),X=!0}function It(){pc("WebGLRenderer: Context Restored."),X=!1;const A=te.autoReset,J=it.enabled,fe=it.autoUpdate,oe=it.needsUpdate,ae=it.type;$e(),te.autoReset=A,it.enabled=J,it.autoUpdate=fe,it.needsUpdate=oe,it.type=ae}function wn(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oi(A){const J=A.target;J.removeEventListener("dispose",oi),Gr(J)}function Gr(A){Ms(A),le.remove(A)}function Ms(A){const J=le.get(A).programs;J!==void 0&&(J.forEach(function(fe){Te.releaseProgram(fe)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,fe,oe,ae,Pe){J===null&&(J=Dt);const He=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Re=Jt(A,J,fe,oe,ae);M.setMaterial(oe,He);let Ke=fe.index,et=1;if(oe.wireframe===!0){if(Ke=me.getWireframeAttribute(fe),Ke===void 0)return;et=2}const ht=fe.drawRange,dt=fe.attributes.position;let Qe=ht.start*et,Pt=(ht.start+ht.count)*et;Pe!==null&&(Qe=Math.max(Qe,Pe.start*et),Pt=Math.min(Pt,(Pe.start+Pe.count)*et)),Ke!==null?(Qe=Math.max(Qe,0),Pt=Math.min(Pt,Ke.count)):dt!=null&&(Qe=Math.max(Qe,0),Pt=Math.min(Pt,dt.count));const Gt=Pt-Qe;if(Gt<0||Gt===1/0)return;Oe.setup(ae,oe,Re,fe,Ke);let Kt,Ot=De;if(Ke!==null&&(Kt=Le.get(Ke),Ot=ve,Ot.setIndex(Kt)),ae.isMesh)oe.wireframe===!0?(M.setLineWidth(oe.wireframeLinewidth*Ae()),Ot.setMode(Y.LINES)):Ot.setMode(Y.TRIANGLES);else if(ae.isLine){let an=oe.linewidth;an===void 0&&(an=1),M.setLineWidth(an*Ae()),ae.isLineSegments?Ot.setMode(Y.LINES):ae.isLineLoop?Ot.setMode(Y.LINE_LOOP):Ot.setMode(Y.LINE_STRIP)}else ae.isPoints?Ot.setMode(Y.POINTS):ae.isSprite&&Ot.setMode(Y.TRIANGLES);if(ae.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const an=ae._multiDrawStarts,Be=ae._multiDrawCounts,_n=ae._multiDrawCount,_t=Ke?Le.get(Ke).bytesPerElement:1,Vn=le.get(oe).currentProgram.getUniforms();for(let Gn=0;Gn<_n;Gn++)Vn.setValue(Y,"_gl_DrawID",Gn),Ot.render(an[Gn]/_t,Be[Gn])}else if(ae.isInstancedMesh)Ot.renderInstances(Qe,Gt,ae.count);else if(fe.isInstancedBufferGeometry){const an=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Be=Math.min(fe.instanceCount,an);Ot.renderInstances(Qe,Gt,Be)}else Ot.render(Qe,Gt)};function Hr(A,J,fe){A.transparent===!0&&A.side===zi&&A.forceSinglePass===!1?(A.side=$n,A.needsUpdate=!0,Yr(A,J,fe),A.side=Br,A.needsUpdate=!0,Yr(A,J,fe),A.side=zi):Yr(A,J,fe)}this.compile=function(A,J,fe=null){fe===null&&(fe=A),U=Ce.get(fe),U.init(J),w.push(U),fe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(J.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),A!==fe&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(J.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),U.setupLights();const oe=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Pe=ae.material;if(Pe)if(Array.isArray(Pe))for(let He=0;He<Pe.length;He++){const Re=Pe[He];Hr(Re,fe,ae),oe.add(Re)}else Hr(Pe,fe,ae),oe.add(Pe)}),U=w.pop(),oe},this.compileAsync=function(A,J,fe=null){const oe=this.compile(A,J,fe);return new Promise(ae=>{function Pe(){if(oe.forEach(function(He){le.get(He).currentProgram.isReady()&&oe.delete(He)}),oe.size===0){ae(A);return}setTimeout(Pe,10)}mt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Wr=null;function Tc(A){Wr&&Wr(A)}function wo(){Un.stop()}function To(){Un.start()}const Un=new xg;Un.setAnimationLoop(Tc),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(A){Wr=A,qe.setAnimationLoop(A),A===null?Un.stop():Un.start()},qe.addEventListener("sessionstart",wo),qe.addEventListener("sessionend",To),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;$!==null&&$.renderStart(A,J);const fe=qe.enabled===!0&&qe.isPresenting===!0,oe=N!==null&&(W===null||fe)&&N.begin(j,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(J),J=qe.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,J,W),U=Ce.get(A,w.length),U.init(J),U.state.textureUnits=de.getTextureUnits(),w.push(U),Vt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Rt.setFromProjectionMatrix(Vt,Hi,J.reversedDepth),xt=this.localClippingEnabled,St=nt.init(this.clippingPlanes,xt),C=Ne.get(A,V.length),C.init(),V.push(C),qe.enabled===!0&&qe.isPresenting===!0){const He=j.xr.getDepthSensingMesh();He!==null&&Ss(He,J,-1/0,j.sortObjects)}Ss(A,J,0,j.sortObjects),C.finish(),j.sortObjects===!0&&C.sort(Se,ze,J.reversedDepth),Ct=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Ct&&ot.addToRenderList(C,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&nt.beginShadows();const ae=U.state.shadowsArray;if(it.render(ae,A,J),St===!0&&nt.endShadows(),(oe&&N.hasRenderPass())===!1){const He=C.opaque,Re=C.transmissive;if(U.setupLights(),J.isArrayCamera){const Ke=J.cameras;if(Re.length>0)for(let et=0,ht=Ke.length;et<ht;et++){const dt=Ke[et];bo(He,Re,A,dt)}Ct&&ot.render(A);for(let et=0,ht=Ke.length;et<ht;et++){const dt=Ke[et];Ma(C,A,dt,dt.viewport)}}else Re.length>0&&bo(He,Re,A,J),Ct&&ot.render(A),Ma(C,A,J)}W!==null&&H===0&&(de.updateMultisampleRenderTarget(W),de.updateRenderTargetMipmap(W)),oe&&N.end(j),A.isScene===!0&&A.onAfterRender(j,A,J),Oe.resetDefaultState(),ie=-1,ne=null,w.pop(),w.length>0?(U=w[w.length-1],de.setTextureUnits(U.state.textureUnits),St===!0&&nt.setGlobalState(j.clippingPlanes,U.state.camera)):U=null,V.pop(),V.length>0?C=V[V.length-1]:C=null,$!==null&&$.renderEnd()};function Ss(A,J,fe,oe){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Rt.intersectsSprite(A)){oe&&tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Vt);const He=ge.update(A),Re=A.material;Re.visible&&C.push(A,He,Re,fe,tt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Rt.intersectsObject(A))){const He=ge.update(A),Re=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),tt.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),tt.copy(He.boundingSphere.center)),tt.applyMatrix4(A.matrixWorld).applyMatrix4(Vt)),Array.isArray(Re)){const Ke=He.groups;for(let et=0,ht=Ke.length;et<ht;et++){const dt=Ke[et],Qe=Re[dt.materialIndex];Qe&&Qe.visible&&C.push(A,He,Qe,fe,tt.z,dt)}}else Re.visible&&C.push(A,He,Re,fe,tt.z,null)}}const Pe=A.children;for(let He=0,Re=Pe.length;He<Re;He++)Ss(Pe[He],J,fe,oe)}function Ma(A,J,fe,oe){const{opaque:ae,transmissive:Pe,transparent:He}=A;U.setupLightsView(fe),St===!0&&nt.setGlobalState(j.clippingPlanes,fe),oe&&M.viewport(F.copy(oe)),ae.length>0&&Xr(ae,J,fe),Pe.length>0&&Xr(Pe,J,fe),He.length>0&&Xr(He,J,fe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function bo(A,J,fe,oe){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[oe.id]===void 0){const Qe=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[oe.id]=new Kn(1,1,{generateMipmaps:!0,type:Qe?ai:si,minFilter:ps,samples:Math.max(4,L.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Pe=U.state.transmissionRenderTarget[oe.id],He=oe.viewport||F;Pe.setSize(He.z*j.transmissionResolutionScale,He.w*j.transmissionResolutionScale);const Re=j.getRenderTarget(),Ke=j.getActiveCubeFace(),et=j.getActiveMipmapLevel();j.setRenderTarget(Pe),j.getClearColor(Ue),Fe=j.getClearAlpha(),Fe<1&&j.setClearColor(16777215,.5),j.clear(),Ct&&ot.render(fe);const ht=j.toneMapping;j.toneMapping=qi;const dt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),U.setupLightsView(oe),St===!0&&nt.setGlobalState(j.clippingPlanes,oe),Xr(A,fe,oe),de.updateMultisampleRenderTarget(Pe),de.updateRenderTargetMipmap(Pe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Pt=0,Gt=J.length;Pt<Gt;Pt++){const Kt=J[Pt],{object:Ot,geometry:an,material:Be,group:_n}=Kt;if(Be.side===zi&&Ot.layers.test(oe.layers)){const _t=Be.side;Be.side=$n,Be.needsUpdate=!0,Sa(Ot,fe,oe,an,Be,_n),Be.side=_t,Be.needsUpdate=!0,Qe=!0}}Qe===!0&&(de.updateMultisampleRenderTarget(Pe),de.updateRenderTargetMipmap(Pe))}j.setRenderTarget(Re,Ke,et),j.setClearColor(Ue,Fe),dt!==void 0&&(oe.viewport=dt),j.toneMapping=ht}function Xr(A,J,fe){const oe=J.isScene===!0?J.overrideMaterial:null;for(let ae=0,Pe=A.length;ae<Pe;ae++){const He=A[ae],{object:Re,geometry:Ke,group:et}=He;let ht=He.material;ht.allowOverride===!0&&oe!==null&&(ht=oe),Re.layers.test(fe.layers)&&Sa(Re,J,fe,Ke,ht,et)}}function Sa(A,J,fe,oe,ae,Pe){A.onBeforeRender(j,J,fe,oe,ae,Pe),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(j,J,fe,oe,A,Pe),ae.transparent===!0&&ae.side===zi&&ae.forceSinglePass===!1?(ae.side=$n,ae.needsUpdate=!0,j.renderBufferDirect(fe,J,oe,ae,A,Pe),ae.side=Br,ae.needsUpdate=!0,j.renderBufferDirect(fe,J,oe,ae,A,Pe),ae.side=zi):j.renderBufferDirect(fe,J,oe,ae,A,Pe),A.onAfterRender(j,J,fe,oe,ae,Pe)}function Yr(A,J,fe){J.isScene!==!0&&(J=Dt);const oe=le.get(A),ae=U.state.lights,Pe=U.state.shadowsArray,He=ae.state.version,Re=Te.getParameters(A,ae.state,Pe,J,fe,U.state.lightProbeGridArray),Ke=Te.getProgramCacheKey(Re);let et=oe.programs;oe.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?J.environment:null,oe.fog=J.fog;const ht=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;oe.envMap=Ee.get(A.envMap||oe.environment,ht),oe.envMapRotation=oe.environment!==null&&A.envMap===null?J.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",oi),et=new Map,oe.programs=et);let dt=et.get(Ke);if(dt!==void 0){if(oe.currentProgram===dt&&oe.lightsStateVersion===He)return Ao(A,Re),dt}else Re.uniforms=Te.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,fe,Re),A.onBeforeCompile(Re,j),dt=Te.acquireProgram(Re,Ke),et.set(Ke,dt),oe.uniforms=Re.uniforms;const Qe=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=nt.uniform),Ao(A,Re),oe.needsLights=wa(A),oe.lightsStateVersion=He,oe.needsLights&&(Qe.ambientLightColor.value=ae.state.ambient,Qe.lightProbe.value=ae.state.probe,Qe.directionalLights.value=ae.state.directional,Qe.directionalLightShadows.value=ae.state.directionalShadow,Qe.spotLights.value=ae.state.spot,Qe.spotLightShadows.value=ae.state.spotShadow,Qe.rectAreaLights.value=ae.state.rectArea,Qe.ltc_1.value=ae.state.rectAreaLTC1,Qe.ltc_2.value=ae.state.rectAreaLTC2,Qe.pointLights.value=ae.state.point,Qe.pointLightShadows.value=ae.state.pointShadow,Qe.hemisphereLights.value=ae.state.hemi,Qe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ae.state.spotLightMatrix,Qe.spotLightMap.value=ae.state.spotLightMap,Qe.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.lightProbeGrid=U.state.lightProbeGridArray.length>0,oe.currentProgram=dt,oe.uniformsList=null,dt}function Ea(A){if(A.uniformsList===null){const J=A.currentProgram.getUniforms();A.uniformsList=oc.seqWithValue(J.seq,A.uniforms)}return A.uniformsList}function Ao(A,J){const fe=le.get(A);fe.outputColorSpace=J.outputColorSpace,fe.batching=J.batching,fe.batchingColor=J.batchingColor,fe.instancing=J.instancing,fe.instancingColor=J.instancingColor,fe.instancingMorph=J.instancingMorph,fe.skinning=J.skinning,fe.morphTargets=J.morphTargets,fe.morphNormals=J.morphNormals,fe.morphColors=J.morphColors,fe.morphTargetsCount=J.morphTargetsCount,fe.numClippingPlanes=J.numClippingPlanes,fe.numIntersection=J.numClipIntersection,fe.vertexAlphas=J.vertexAlphas,fe.vertexTangents=J.vertexTangents,fe.toneMapping=J.toneMapping}function bc(A,J){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(J.matrixWorld);for(let fe=0,oe=A.length;fe<oe;fe++){const ae=A[fe];if(ae.texture!==null&&ae.boundingBox.containsPoint(b))return ae}return null}function Jt(A,J,fe,oe,ae){J.isScene!==!0&&(J=Dt),de.resetTextureUnits();const Pe=J.fog,He=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?J.environment:null,Re=W===null?j.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Et.workingColorSpace,Ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,et=Ee.get(oe.envMap||He,Ke),ht=oe.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,dt=!!fe.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Qe=!!fe.morphAttributes.position,Pt=!!fe.morphAttributes.normal,Gt=!!fe.morphAttributes.color;let Kt=qi;oe.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Kt=j.toneMapping);const Ot=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,an=Ot!==void 0?Ot.length:0,Be=le.get(oe),_n=U.state.lights;if(St===!0&&(xt===!0||A!==ne)){const kt=A===ne&&oe.id===ie;nt.setState(oe,A,kt)}let _t=!1;oe.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==_n.state.version||Be.outputColorSpace!==Re||ae.isBatchedMesh&&Be.batching===!1||!ae.isBatchedMesh&&Be.batching===!0||ae.isBatchedMesh&&Be.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Be.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Be.instancing===!1||!ae.isInstancedMesh&&Be.instancing===!0||ae.isSkinnedMesh&&Be.skinning===!1||!ae.isSkinnedMesh&&Be.skinning===!0||ae.isInstancedMesh&&Be.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Be.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Be.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Be.instancingMorph===!1&&ae.morphTexture!==null||Be.envMap!==et||oe.fog===!0&&Be.fog!==Pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==nt.numPlanes||Be.numIntersection!==nt.numIntersection)||Be.vertexAlphas!==ht||Be.vertexTangents!==dt||Be.morphTargets!==Qe||Be.morphNormals!==Pt||Be.morphColors!==Gt||Be.toneMapping!==Kt||Be.morphTargetsCount!==an||!!Be.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Be.__version=oe.version);let Vn=Be.currentProgram;_t===!0&&(Vn=Yr(oe,J,ae),$&&oe.isNodeMaterial&&$.onUpdateProgram(oe,Vn,Be));let Gn=!1,yt=!1,$i=!1;const Ut=Vn.getUniforms(),Yt=Be.uniforms;if(M.useProgram(Vn.program)&&(Gn=!0,yt=!0,$i=!0),oe.id!==ie&&(ie=oe.id,yt=!0),Be.needsLights){const kt=bc(U.state.lightProbeGridArray,ae);Be.lightProbeGrid!==kt&&(Be.lightProbeGrid=kt,yt=!0)}if(Gn||ne!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ut.setValue(Y,"projectionMatrix",A.projectionMatrix),Ut.setValue(Y,"viewMatrix",A.matrixWorldInverse);const _i=Ut.map.cameraPosition;_i!==void 0&&_i.setValue(Y,Xt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Ut.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ut.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,yt=!0,$i=!0)}if(Be.needsLights&&(_n.state.directionalShadowMap.length>0&&Ut.setValue(Y,"directionalShadowMap",_n.state.directionalShadowMap,de),_n.state.spotShadowMap.length>0&&Ut.setValue(Y,"spotShadowMap",_n.state.spotShadowMap,de),_n.state.pointShadowMap.length>0&&Ut.setValue(Y,"pointShadowMap",_n.state.pointShadowMap,de)),ae.isSkinnedMesh){Ut.setOptional(Y,ae,"bindMatrix"),Ut.setOptional(Y,ae,"bindMatrixInverse");const kt=ae.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Ut.setValue(Y,"boneTexture",kt.boneTexture,de))}ae.isBatchedMesh&&(Ut.setOptional(Y,ae,"batchingTexture"),Ut.setValue(Y,"batchingTexture",ae._matricesTexture,de),Ut.setOptional(Y,ae,"batchingIdTexture"),Ut.setValue(Y,"batchingIdTexture",ae._indirectTexture,de),Ut.setOptional(Y,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Ut.setValue(Y,"batchingColorTexture",ae._colorsTexture,de));const xi=fe.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&K.update(ae,fe,Vn),(yt||Be.receiveShadow!==ae.receiveShadow)&&(Be.receiveShadow=ae.receiveShadow,Ut.setValue(Y,"receiveShadow",ae.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&J.environment!==null&&(Yt.envMapIntensity.value=J.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=IE()),yt){if(Ut.setValue(Y,"toneMappingExposure",j.toneMappingExposure),Be.needsLights&&Ac(Yt,$i),Pe&&oe.fog===!0&&Xe.refreshFogUniforms(Yt,Pe),Xe.refreshMaterialUniforms(Yt,oe,ue,pe,U.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.lightProbeGrid){const kt=Be.lightProbeGrid;Yt.probesSH.value=kt.texture,Yt.probesMin.value.copy(kt.boundingBox.min),Yt.probesMax.value.copy(kt.boundingBox.max),Yt.probesResolution.value.copy(kt.resolution)}oc.upload(Y,Ea(Be),Yt,de)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(oc.upload(Y,Ea(Be),Yt,de),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ut.setValue(Y,"center",ae.center),Ut.setValue(Y,"modelViewMatrix",ae.modelViewMatrix),Ut.setValue(Y,"normalMatrix",ae.normalMatrix),Ut.setValue(Y,"modelMatrix",ae.matrixWorld),oe.uniformsGroups!==void 0){const kt=oe.uniformsGroups;for(let _i=0,Pi=kt.length;_i<Pi;_i++){const qr=kt[_i];xe.update(qr,Vn),xe.bind(qr,Vn)}}return Vn}function Ac(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function wa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,J,fe){const oe=le.get(A);oe.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),le.get(A.texture).__webglTexture=J,le.get(A.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:fe,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,J){const fe=le.get(A);fe.__webglFramebuffer=J,fe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(A,J=0,fe=0){W=A,k=J,H=fe;let oe=null,ae=!1,Pe=!1;if(A){const Re=le.get(A);if(Re.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Y.FRAMEBUFFER,Re.__webglFramebuffer),F.copy(A.viewport),ee.copy(A.scissor),be=A.scissorTest,M.viewport(F),M.scissor(ee),M.setScissorTest(be),ie=-1;return}else if(Re.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Re.__hasExternalTextures)de.rebindTextures(A,le.get(A.texture).__webglTexture,le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ht=A.depthTexture;if(Re.__boundDepthTexture!==ht){if(ht!==null&&le.has(ht)&&(A.width!==ht.image.width||A.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Pe=!0);const et=le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[J])?oe=et[J][fe]:oe=et[J],ae=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?oe=le.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?oe=et[fe]:oe=et,F.copy(A.viewport),ee.copy(A.scissor),be=A.scissorTest}else F.copy(We).multiplyScalar(ue).floor(),ee.copy(At).multiplyScalar(ue).floor(),be=lt;if(fe!==0&&(oe=D),M.bindFramebuffer(Y.FRAMEBUFFER,oe)&&M.drawBuffers(A,oe),M.viewport(F),M.scissor(ee),M.setScissorTest(be),ae){const Re=le.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+J,Re.__webglTexture,fe)}else if(Pe){const Re=J;for(let Ke=0;Ke<A.textures.length;Ke++){const et=le.get(A.textures[Ke]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ke,et.__webglTexture,fe,Re)}}else if(A!==null&&fe!==0){const Re=le.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Re.__webglTexture,fe)}ie=-1},this.readRenderTargetPixels=function(A,J,fe,oe,ae,Pe,He,Re=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Ke=Ke[He]),Ke){M.bindFramebuffer(Y.FRAMEBUFFER,Ke);try{const et=A.textures[Re],ht=et.format,dt=et.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Re),!L.textureFormatReadable(ht)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(dt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-oe&&fe>=0&&fe<=A.height-ae&&Y.readPixels(J,fe,oe,ae,Ie.convert(ht),Ie.convert(dt),Pe)}finally{const et=W!==null?le.get(W).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,J,fe,oe,ae,Pe,He,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Ke=Ke[He]),Ke)if(J>=0&&J<=A.width-oe&&fe>=0&&fe<=A.height-ae){M.bindFramebuffer(Y.FRAMEBUFFER,Ke);const et=A.textures[Re],ht=et.format,dt=et.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Re),!L.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.bufferData(Y.PIXEL_PACK_BUFFER,Pe.byteLength,Y.STREAM_READ),Y.readPixels(J,fe,oe,ae,Ie.convert(ht),Ie.convert(dt),0);const Pt=W!==null?le.get(W).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,Pt);const Gt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Kx(Y,Gt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Pe),Y.deleteBuffer(Qe),Y.deleteSync(Gt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,J=null,fe=0){const oe=Math.pow(2,-fe),ae=Math.floor(A.image.width*oe),Pe=Math.floor(A.image.height*oe),He=J!==null?J.x:0,Re=J!==null?J.y:0;de.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,fe,0,0,He,Re,ae,Pe),M.unbindTexture()},this.copyTextureToTexture=function(A,J,fe=null,oe=null,ae=0,Pe=0){let He,Re,Ke,et,ht,dt,Qe,Pt,Gt;const Kt=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(fe!==null)He=fe.max.x-fe.min.x,Re=fe.max.y-fe.min.y,Ke=fe.isBox3?fe.max.z-fe.min.z:1,et=fe.min.x,ht=fe.min.y,dt=fe.isBox3?fe.min.z:0;else{const Yt=Math.pow(2,-ae);He=Math.floor(Kt.width*Yt),Re=Math.floor(Kt.height*Yt),A.isDataArrayTexture?Ke=Kt.depth:A.isData3DTexture?Ke=Math.floor(Kt.depth*Yt):Ke=1,et=0,ht=0,dt=0}oe!==null?(Qe=oe.x,Pt=oe.y,Gt=oe.z):(Qe=0,Pt=0,Gt=0);const Ot=Ie.convert(J.format),an=Ie.convert(J.type);let Be;J.isData3DTexture?(de.setTexture3D(J,0),Be=Y.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(de.setTexture2DArray(J,0),Be=Y.TEXTURE_2D_ARRAY):(de.setTexture2D(J,0),Be=Y.TEXTURE_2D),M.activeTexture(Y.TEXTURE0),M.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,J.flipY),M.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),M.pixelStorei(Y.UNPACK_ALIGNMENT,J.unpackAlignment);const _n=M.getParameter(Y.UNPACK_ROW_LENGTH),_t=M.getParameter(Y.UNPACK_IMAGE_HEIGHT),Vn=M.getParameter(Y.UNPACK_SKIP_PIXELS),Gn=M.getParameter(Y.UNPACK_SKIP_ROWS),yt=M.getParameter(Y.UNPACK_SKIP_IMAGES);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Kt.width),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Kt.height),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,et),M.pixelStorei(Y.UNPACK_SKIP_ROWS,ht),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,dt);const $i=A.isDataArrayTexture||A.isData3DTexture,Ut=J.isDataArrayTexture||J.isData3DTexture;if(A.isDepthTexture){const Yt=le.get(A),xi=le.get(J),kt=le.get(Yt.__renderTarget),_i=le.get(xi.__renderTarget);M.bindFramebuffer(Y.READ_FRAMEBUFFER,kt.__webglFramebuffer),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Pi=0;Pi<Ke;Pi++)$i&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(A).__webglTexture,ae,dt+Pi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(J).__webglTexture,Pe,Gt+Pi)),Y.blitFramebuffer(et,ht,He,Re,Qe,Pt,He,Re,Y.DEPTH_BUFFER_BIT,Y.NEAREST);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||le.has(A)){const Yt=le.get(A),xi=le.get(J);M.bindFramebuffer(Y.READ_FRAMEBUFFER,G),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,z);for(let kt=0;kt<Ke;kt++)$i?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Yt.__webglTexture,ae,dt+kt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Yt.__webglTexture,ae),Ut?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,xi.__webglTexture,Pe,Gt+kt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,xi.__webglTexture,Pe),ae!==0?Y.blitFramebuffer(et,ht,He,Re,Qe,Pt,He,Re,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ut?Y.copyTexSubImage3D(Be,Pe,Qe,Pt,Gt+kt,et,ht,He,Re):Y.copyTexSubImage2D(Be,Pe,Qe,Pt,et,ht,He,Re);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ut?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Be,Pe,Qe,Pt,Gt,He,Re,Ke,Ot,an,Kt.data):J.isCompressedArrayTexture?Y.compressedTexSubImage3D(Be,Pe,Qe,Pt,Gt,He,Re,Ke,Ot,Kt.data):Y.texSubImage3D(Be,Pe,Qe,Pt,Gt,He,Re,Ke,Ot,an,Kt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Pe,Qe,Pt,He,Re,Ot,an,Kt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Pe,Qe,Pt,Kt.width,Kt.height,Ot,Kt.data):Y.texSubImage2D(Y.TEXTURE_2D,Pe,Qe,Pt,He,Re,Ot,an,Kt);M.pixelStorei(Y.UNPACK_ROW_LENGTH,_n),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_t),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,Vn),M.pixelStorei(Y.UNPACK_SKIP_ROWS,Gn),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,yt),Pe===0&&J.generateMipmaps&&Y.generateMipmap(Be),M.unbindTexture()},this.initRenderTarget=function(A){le.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){k=0,H=0,W=null,M.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const lc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ya{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FE=new Sc(-1,1,1,-1,0,1);class OE extends In{constructor(){super(),this.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new cn([0,2,0,0,2,0],2))}}const kE=new OE;class sd{constructor(e){this._mesh=new wt(kE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,FE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class zE extends ya{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mo.clone(e.uniforms),this.material=new Ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new sd(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class V0 extends ya{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const o=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,d;this.inverse?(u=0,d=1):(u=1,d=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),l.buffers.stencil.setClear(d),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.buffers.stencil.setLocked(!0)}}class BE extends ya{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class VE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new rt);this._width=r.width,this._height=r.height,t=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zE(lc),this.copyPass.material.blending=Yi,this.timer=new O_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let o=0,l=this.passes.length;o<l;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),u.needsSwap){if(r){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}V0!==void 0&&(u instanceof V0?r=!0:u instanceof BE&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class GE extends ya{constructor(e,t,r=null,o=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new gt}render(e,t,r){const o=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=o}}const HE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class va extends ya{constructor(e,t=1,r,o){super(),this.strength=t,this.radius=r,this.threshold=o,this.resolution=e!==void 0?new rt(e.x,e.y):new rt(256,256),this.clearColor=new gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(l,u,{type:ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const y=new Kn(l,u,{type:ai});y.texture.name="UnrealBloomPass.h"+v,y.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(y);const g=new Kn(l,u,{type:ai});g.texture.name="UnrealBloomPass.v"+v,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),l=Math.round(l/2),u=Math.round(u/2)}const d=HE;this.highPassUniforms=Mo.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ln({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new rt(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mo.clone(lc.uniforms),this.blendMaterial=new Ln({uniforms:this.copyUniforms,vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader,premultipliedAlpha:!0,blending:gs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new gt,this._oldClearAlpha=1,this._basic=new Vi,this._fsQuad=new sd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(r,o);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,o),this.renderTargetsVertical[l].setSize(r,o),this.separableBlurMaterials[l].uniforms.invSize.value=new rt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2)}render(e,t,r,o,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=va.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=va.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],r=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(r*r))/r);return new Ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ln({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}va.BlurDirectionX=new rt(1,0);va.BlurDirectionY=new rt(0,1);const tc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class WE extends ya{constructor(){super(),this.isOutputPass=!0,this.uniforms=Mo.clone(tc.uniforms),this.material=new pg({name:tc.name,uniforms:this.uniforms,vertexShader:tc.vertexShader,fragmentShader:tc.fragmentShader}),this._fsQuad=new sd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Et.getTransfer(this._outputColorSpace)===Ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Gh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const XE=.45,YE=.6;function ho(s,e,t=1,r=1){const o=document.createElement("canvas");o.width=o.height=s;const l=o.getContext("2d");e(l,s);const u=new yo(o);return u.wrapS=u.wrapT=pa,u.repeat.set(t,r),u.colorSpace=Nn,u.anisotropy=8,u}function po(s,e,t,r,o){for(let l=0;l<t;l++){s.fillStyle=r[Math.random()*r.length|0],s.globalAlpha=o*(.4+Math.random()*.6);const u=1+Math.random()*2.4;s.fillRect(Math.random()*e,Math.random()*e,u,u)}s.globalAlpha=1}function bg(s,e,t,r,o,l){const u=XE;let d=s.x+e;for(const h of o)h.top<=s.y+u||d+r>h.minX&&d-r<h.maxX&&s.z+r>h.minZ&&s.z-r<h.maxZ&&(e>0?d=Math.min(d,h.minX-r):e<0&&(d=Math.max(d,h.maxX+r)));s.x=d;let p=s.z+t;for(const h of o)h.top<=s.y+u||s.x+r>h.minX&&s.x-r<h.maxX&&p+r>h.minZ&&p-r<h.maxZ&&(t>0?p=Math.min(p,h.minZ-r):t<0&&(p=Math.max(p,h.maxZ+r)));s.z=p,l&&(s.x=Math.max(l.minX+r,Math.min(l.maxX-r,s.x)),s.z=Math.max(l.minZ+r,Math.min(l.maxZ-r,s.z)))}function G0(s,e,t,r,o){let l=0;for(const u of o)u.top<=t+YE&&u.top>l&&s+r>u.minX&&s-r<u.maxX&&e+r>u.minZ&&e-r<u.maxZ&&(l=u.top);return l}function qE(s){const e=[],t=[],r=ho(256,(D,G)=>{D.fillStyle="#c2a878",D.fillRect(0,0,G,G),po(D,G,3200,["#b09463","#d4bc8c","#a8895a","#cbb283","#9b7f50"],.5),D.globalAlpha=.15;for(let z=0;z<16;z++)D.fillStyle=z%2?"#8f7448":"#dcc596",D.beginPath(),D.ellipse(Math.random()*G,Math.random()*G,18+Math.random()*44,10+Math.random()*28,Math.random()*3,0,7),D.fill();D.globalAlpha=.2,D.strokeStyle="#7d6238",D.lineWidth=1.2;for(let z=0;z<9;z++){let k=Math.random()*G,H=Math.random()*G;D.beginPath(),D.moveTo(k,H);for(let W=0;W<6;W++)k+=(Math.random()-.5)*44,H+=(Math.random()-.5)*44,D.lineTo(k,H);D.stroke()}D.globalAlpha=.5;for(let z=0;z<40;z++)D.fillStyle=["#8d7a52","#a3906a","#6f5c3a"][Math.random()*3|0],D.beginPath(),D.ellipse(Math.random()*G,Math.random()*G,1.6+Math.random()*2.6,1.2+Math.random()*2,Math.random()*3,0,7),D.fill();D.globalAlpha=.1,D.strokeStyle="#6e5a38",D.lineWidth=9;for(const z of[0,26])D.beginPath(),D.moveTo(z,0),D.bezierCurveTo(z+40,G*.3,z-30,G*.7,z+20,G),D.stroke();D.globalAlpha=1},9,9),o=ho(256,(D,G)=>{D.fillStyle="#c9b183",D.fillRect(0,0,G,G);const z=32,k=64;for(let H=0;H<G/z;H++){const W=H%2?k/2:0;for(let ie=-1;ie<G/k+1;ie++){const ne=ie*k+W,F=H*z,ee=.9+Math.random()*.2;D.fillStyle=`rgb(${201*ee|0},${177*ee|0},${131*ee|0})`,D.fillRect(ne+2,F+2,k-4,z-4),po(D,G,26,["#b39a6c","#d8c39a","#a58c5e"],.35),D.globalAlpha=.25,D.fillStyle="#8f7a52",D.fillRect(ne+2,F+z-5,k-4,3),D.globalAlpha=1}D.fillStyle="#a08a5f",D.fillRect(0,H*z,G,2)}D.globalAlpha=.14;for(let H=0;H<10;H++){const W=Math.random()*G;D.fillStyle="#6e5b3d",D.fillRect(W,0,4+Math.random()*9,30+Math.random()*90)}D.globalAlpha=1},5,2),l=ho(256,(D,G)=>{D.fillStyle="#8a5c2e",D.fillRect(0,0,G,G);for(let z=0;z<G;z+=42){const k=.92+Math.random()*.16;D.fillStyle=`rgb(${138*k|0},${92*k|0},${46*k|0})`,D.fillRect(0,z,G,40),D.globalAlpha=.3,D.strokeStyle="#5f3d1c";for(let H=0;H<7;H++){const W=z+4+Math.random()*34;D.beginPath(),D.moveTo(0,W),D.bezierCurveTo(G*.3,W+3,G*.6,W-3,G,W+1),D.stroke()}D.globalAlpha=1,D.fillStyle="#4e3115",D.fillRect(0,z+39,G,3)}po(D,G,900,["#7a4e24","#9c6c3a","#6b441f"],.4),D.strokeStyle="#3f2810",D.lineWidth=14,D.strokeRect(4,4,G-8,G-8),D.lineWidth=10,D.beginPath(),D.moveTo(0,0),D.lineTo(G,G),D.moveTo(G,0),D.lineTo(0,G),D.stroke(),D.save(),D.translate(G/2,G/2),D.rotate(-.06),D.font="900 44px Rubik, sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillStyle="rgba(230,220,190,0.85)",D.fillText("AMMO",0,-8),D.font="700 22px Rubik, sans-serif",D.fillStyle="rgba(120,40,30,0.8)",D.fillText("7.62×39",0,30),D.restore(),D.fillStyle="#2c1c0a";for(const[z,k]of[[14,14],[G-14,14],[14,G-14],[G-14,G-14],[G/2,G/2]])D.beginPath(),D.arc(z,k,4,0,7),D.fill()},1,1),u=(D,G)=>ho(256,(z,k)=>{z.fillStyle=D,z.fillRect(0,0,k,k);for(let H=0;H<k;H+=16)z.fillStyle="rgba(0,0,0,0.32)",z.fillRect(H,0,6,k),z.fillStyle="rgba(255,255,255,0.12)",z.fillRect(H+8,0,3,k);po(z,k,1400,["rgba(0,0,0,.4)","rgba(255,255,255,.12)"],.35),z.globalAlpha=.22;for(let H=0;H<12;H++){const W=Math.random()*k;z.fillStyle="#6e3418",z.fillRect(W,Math.random()*k*.4,3+Math.random()*6,30+Math.random()*80)}z.globalAlpha=1,z.font="900 46px Rubik, sans-serif",z.textAlign="center",z.fillStyle="rgba(240,235,220,0.9)",z.fillText(G,k/2,k/2+14),z.strokeStyle="rgba(240,235,220,0.5)",z.lineWidth=3,z.strokeRect(24,k/2-40,k-48,86),z.strokeStyle="rgba(0,0,0,0.55)",z.lineWidth=12,z.strokeRect(2,2,k-4,k-4)},2,1),d=ho(128,(D,G)=>{D.fillStyle="#7a3a2a",D.fillRect(0,0,G,G),po(D,G,700,["rgba(0,0,0,.4)","rgba(255,255,255,.1)"],.4),D.fillStyle="rgba(0,0,0,0.5)",D.fillRect(0,10,G,7),D.fillRect(0,G-17,G,7),D.save(),D.fillStyle="#d8b23a",D.fillRect(0,G/2-16,G,32),D.beginPath(),D.rect(0,G/2-16,G,32),D.clip(),D.fillStyle="#171310";for(let z=-32;z<G+32;z+=32)D.beginPath(),D.moveTo(z,G/2+16),D.lineTo(z+16,G/2-16),D.lineTo(z+32,G/2-16),D.lineTo(z+16,G/2+16),D.fill();D.restore(),D.font="900 20px Rubik, sans-serif",D.textAlign="center",D.fillStyle="rgba(240,230,210,0.85)",D.fillText("FUEL",G/2,G/2-26)},2,1),p=new Qt({map:r,roughness:1}),h=new Qt({map:o,roughness:.95}),v=new Qt({map:l,roughness:.9}),y=new Qt({map:u("#9c4f28","MIRAGE"),roughness:.7,metalness:.3}),g=new Qt({map:u("#57613c","DUST"),roughness:.7,metalness:.3}),S=new Qt({map:d,roughness:.65,metalness:.35}),E=new Qt({color:11772015,roughness:1}),R=(D,G,z,k,H,W,ie,ne=!0)=>{const F=new wt(new xn(D,G,z),ie);return F.position.set(k,H,W),F.castShadow=!0,F.receiveShadow=!0,s.add(F),e.push(F),ne&&t.push({minX:k-D/2,maxX:k+D/2,minZ:W-z/2,maxZ:W+z/2,top:H+G/2}),F},x=new wt(new Xi(64,64),p);x.rotation.x=-Math.PI/2,x.receiveShadow=!0,s.add(x),e.push(x),R(42,5,1,0,2.5,-20.5,h),R(42,5,1,0,2.5,20.5,h),R(1,5,42,-20.5,2.5,0,h),R(1,5,42,20.5,2.5,0,h),R(10,3,.9,-6,1.5,-2,h),R(.9,3,9,7,1.5,4,h),R(7,3,.9,12,1.5,-8,h),R(.9,3,7,-13,1.5,7,h),R(6.4,2.9,2.7,-12,1.45,-9,y),R(6.4,2.9,2.7,12,1.45,10,g);const _=(D,G,z=1)=>{R(1.4,1.4,1.4,D,.7,G,v),z>1&&R(1.4,1.4,1.4,D,2.1,G,v)};_(-3,13,2),_(4.2,9),_(-14,-4),_(14,-13,2),_(.5,-6),_(9.5,2),_(-8.5,2.5),_(16.5,5),_(-16.5,13),_(6,-15),_(-5,-13),_(10.8,8.6);const I=(D,G)=>{const z=new wt(new Eo(.45,.45,1.15,16),S);z.position.set(D,.575,G),z.castShadow=!0,z.receiveShadow=!0,s.add(z),e.push(z),t.push({minX:D-.45,maxX:D+.45,minZ:G-.45,maxZ:G+.45,top:1.15})};I(-1.6,-11),I(-.6,-11.4),I(10.5,15),I(-10.5,15.5),I(2.5,1.5),R(2.6,.85,.8,-7,.42,9,E),R(2.6,.85,.8,9,.42,-2.5,E),R(.8,.85,2.6,-2,.42,5.5,E);const P=new xn(.09,.05,.09),b=new Qt({color:10193507,roughness:1});for(let D=0;D<130;D++){const G=new wt(P,b);G.position.set((Math.random()-.5)*38,.02,(Math.random()-.5)*38),G.rotation.y=Math.random()*Math.PI;const z=.5+Math.random()*1.6;G.scale.set(z,.4+Math.random(),z),G.receiveShadow=!0,s.add(G)}const C=new wt(new yc(6,24),new Vi({color:16774096,fog:!1}));C.position.set(-38,34,-52),C.lookAt(0,0,0),s.add(C);const U=document.createElement("canvas");U.width=U.height=128;const V=U.getContext("2d"),w=V.createRadialGradient(64,64,4,64,64,64);w.addColorStop(0,"rgba(255,240,200,0.9)"),w.addColorStop(.4,"rgba(255,210,140,0.35)"),w.addColorStop(1,"rgba(255,190,120,0)"),V.fillStyle=w,V.fillRect(0,0,128,128);const N=new x_(new lg({map:new yo(U),color:16770744,transparent:!0,opacity:.85,blending:gs,depthWrite:!1,fog:!1}));N.position.set(-38,34,-51),N.scale.set(30,30,1),s.add(N);const j=new In,X=new Float32Array(660);for(let D=0;D<220;D++)X[D*3]=(Math.random()-.5)*38,X[D*3+1]=Math.random()*6,X[D*3+2]=(Math.random()-.5)*38;j.setAttribute("position",new vi(X,3));const $=new w_(j,new ug({color:16773320,size:.05,transparent:!0,opacity:.5}));return $.name="dust",s.add($),{solids:e,colliders:t,bounds:{minX:-19.4,maxX:19.4,minZ:-19.4,maxZ:19.4,top:5},botSpawns:[{x:-15,z:-15},{x:-6,z:-17},{x:6,z:-17},{x:15,z:-15},{x:-17,z:-3},{x:17,z:-3},{x:-10,z:-9},{x:10,z:-9},{x:-17,z:12},{x:17,z:13}],playerSpawn:{x:0,z:16}}}function H0(s,e){const t=document.createElement("canvas");t.width=t.height=128;const r=t.getContext("2d");r.fillStyle=s,r.fillRect(0,0,128,128);for(let l=0;l<46;l++)r.fillStyle=e[Math.random()*e.length|0],r.globalAlpha=.5+Math.random()*.4,r.beginPath(),r.ellipse(Math.random()*128,Math.random()*128,6+Math.random()*16,4+Math.random()*10,Math.random()*3,0,7),r.fill();r.globalAlpha=.16;for(let l=0;l<300;l++)r.fillStyle=Math.random()>.5?"#000000":"#ffffff",r.fillRect(Math.random()*128,Math.random()*128,1.4,1.4);r.globalAlpha=1;const o=new yo(t);return o.wrapS=o.wrapT=pa,o.colorSpace=Nn,o}class jE{constructor(e,t,r,o,l){this.group=new Wi,this.hitboxes=[],this.hp=100,this.alive=!0,this.name="БОТ",this.muzzle=new Wt,this.legL=new Wt,this.legR=new Wt,this.armL=new Wt,this.armR=new Wt,this.headG=new Wt,this.mats=[],this.strafeDir=Math.random()<.5?1:-1,this.strafeT=1,this.burstLeft=0,this.nextShot=0,this.nextBurst=.8+Math.random()*1.2,this.blockedT=0,this.lastX=0,this.lastZ=0,this.flashT=0,this.deathT=0,this.phase=Math.random()*10,this.prefRange=6.5+Math.random()*6.5,this.ray=new vg,this.tmpA=new Q,this.tmpB=new Q,this.idleT=0,this.name=e,this.speed=o,this.hooks=l,this.group.position.set(t,0,r),this.lastX=t,this.lastZ=r;const u=H0("#6d6b4f",["#4c4a35","#7d7a58","#3a3a2a","#8a8462"]),d=H0("#4a4a3a",["#33332a","#5c5a44","#282820"]),p=(pe,ue)=>{const Se=new Qt({color:ue?16777215:pe,map:ue,roughness:.92});return Se.emissive=new gt(16722432),Se.emissiveIntensity=0,this.mats.push(Se),Se},h=p(16777215,u),v=p(16777215,d),y=p(13209183),g=p(3027494),S=p(2237724),E=p(2301979),R=p(16777215,d),x=p(2764068),_=new Qt({color:2829875,roughness:.55,metalness:.55}),I=new Qt({color:8145444,roughness:.75}),P=(pe,ue,Se,ze)=>new wt(new xn(pe,ue,Se),ze),b=(pe,ue,Se,ze,We=12)=>new wt(new Eo(pe,ue,Se,We),ze),C=(pe,ue,Se,ze=!0)=>(pe.castShadow=ze,pe.userData={bot:this,part:ue},Se.add(pe),this.hitboxes.push(pe),pe),U=(pe,ue)=>{const Se=P(.17,.46,.2,v);Se.position.y=-.23,C(Se,"legs",ue);const ze=P(.15,.42,.18,v);ze.position.y=-.66,C(ze,"legs",ue);const We=P(.17,.13,.12,S);We.position.set(0,-.46,.08),C(We,"legs",ue,!1);const At=P(.17,.14,.3,E);At.position.set(0,-.9,.045),C(At,"legs",ue),ue.position.set(pe,.96,0),this.group.add(ue)};U(-.13,this.legL),U(.13,this.legR);const V=P(.52,.58,.28,h);V.position.y=1.26,C(V,"body",this.group);const w=P(.46,.36,.34,g);w.position.y=1.3,C(w,"body",this.group,!1);for(let pe=-1;pe<=1;pe++){const ue=P(.1,.12,.06,S);ue.position.set(pe*.13,1.24,.2),C(ue,"body",this.group,!1)}const N=P(.08,.4,.36,S);N.position.set(-.14,1.34,0),C(N,"body",this.group,!1);const j=P(.08,.4,.36,S);j.position.set(.14,1.34,0),C(j,"body",this.group,!1);const X=P(.4,.42,.16,g);X.position.set(0,1.28,-.24),C(X,"body",this.group);const $=b(.07,.07,.38,S);$.rotation.z=Math.PI/2,$.position.set(0,1.52,-.26),C($,"body",this.group,!1),this.headG.position.y=1.62,this.group.add(this.headG);const D=b(.06,.07,.08,y);D.position.y=-.06,C(D,"head",this.headG,!1);const G=P(.23,.26,.24,y);G.position.y=.06,C(G,"head",this.headG);const z=P(.2,.09,.05,S);z.position.set(0,-.02,.12),C(z,"head",this.headG,!1);const k=b(.17,.145,.16,R,14);k.position.y=.2,C(k,"head",this.headG);const H=b(.185,.185,.03,R,14);H.position.y=.125,C(H,"head",this.headG,!1);const W=P(.2,.06,.03,S);W.position.set(0,.1,.13),C(W,"head",this.headG,!1);const ie=(pe,ue,Se,ze)=>{const We=P(.13,.34,.14,h);We.position.y=-.15,C(We,"arms",ue);const At=P(.11,.3,.12,h);At.position.set(0,-.32,ze),At.rotation.x=Se,C(At,"arms",ue);const lt=P(.11,.1,.13,x);lt.position.set(0,-.42,ze+Math.sin(Se)*.16),lt.rotation.x=Se,C(lt,"arms",ue,!1),ue.position.set(pe,1.5,0),this.group.add(ue)};ie(-.33,this.armL,-1.15,.22),ie(.33,this.armR,-.75,.1);const ne=new Wi;ne.position.set(.14,1.16,.3),this.group.add(ne);const F=P(.07,.1,.5,_);C(F,"body",ne,!1);const ee=b(.018,.018,.34,_);ee.rotation.x=Math.PI/2,ee.position.set(0,.02,.4),C(ee,"body",ne,!1);const be=P(.06,.07,.2,I);be.position.set(0,-.005,.22),C(be,"body",ne,!1);const Ue=P(.055,.18,.09,_);Ue.position.set(0,-.13,-.02),Ue.rotation.x=-.22,C(Ue,"body",ne,!1);const Fe=P(.06,.09,.2,I);Fe.position.set(0,-.01,-.34),C(Fe,"body",ne,!1),this.muzzle.position.set(.14,1.19,.68),this.group.add(this.muzzle);const se=new Vi({color:16761707,transparent:!0,opacity:0,blending:gs,depthWrite:!1});this.flash=new wt(new Xi(.4,.4),se),this.flash.position.copy(this.muzzle.position),this.flash.position.z+=.12,this.group.add(this.flash)}hasLOS(e){const t=this.tmpA.copy(this.group.position);t.y+=1.5;const r=this.tmpB.copy(e).sub(t),o=r.length();return o<.001?!0:(this.ray.set(t,r.normalize()),this.ray.far=o-.5,this.ray.intersectObjects(this.hooks.solids,!1).length===0)}fireAt(e,t){const r=new Q;this.muzzle.getWorldPosition(r);const o=this.hooks.playerSpeedXZ(),l=Math.max(.06,Math.min(.4,.36-t*.009-o*.045)),u=Math.random()<l,d=e.clone();u||(d.x+=(Math.random()-.5)*1.6,d.y+=(Math.random()-.5)*1,d.z+=(Math.random()-.5)*1.6),this.hooks.tracer(r,d,16753229),this.flash.material.opacity=.95,this.flash.rotation.z=Math.random()*Math.PI,this.flashT=.045,this.hooks.sfx.enemyShoot(t),u&&this.hooks.damagePlayer(6+Math.random()*8,this.group.position)}hit(e,t){if(!this.alive)return!1;const r=e==="legs"?.75:e==="arms"?.85:1;this.hp-=t*r,this.flashT=Math.max(this.flashT,.02);for(const o of this.mats)o.emissiveIntensity=.9;return this.hp<=0?(this.alive=!1,this.deathT=0,!0):!1}update(e,t){const r=this.group.position;if(!this.alive){this.deathT+=e,this.group.rotation.x=-Math.min(1,this.deathT/.28)*(Math.PI/2),this.deathT>1.4&&(r.y-=e*1.1);for(const I of this.mats)I.emissiveIntensity=Math.max(0,I.emissiveIntensity-e*4);return this.deathT<2.6}const o=t.x-r.x,l=t.z-r.z,u=Math.hypot(o,l)||.001;this.group.lookAt(t.x,r.y,t.z);const d=this.hooks.playerEye(),p=this.hasLOS(d);this.strafeT-=e,this.strafeT<=0&&(this.strafeT=.7+Math.random()*1.5,Math.random()<.75&&(this.strafeDir*=-1));let h=0,v=0;!p||u>this.prefRange?(h=o/u,v=l/u):(h=-l/u*this.strafeDir,v=o/u*this.strafeDir,u<this.prefRange-3&&(h-=o/u*.7,v-=l/u*.7));const y=this.speed*(p&&u<=this.prefRange?.7:1),g=r.x,S=r.z;bg(r,h*y*e,v*y*e,.38,this.hooks.colliders,this.hooks.bounds);const E=Math.hypot(r.x-g,r.z-S);E<y*e*.25?(this.blockedT+=e,this.blockedT>.45&&(this.blockedT=0,this.strafeDir*=-1,this.prefRange=5.5+Math.random()*7.5)):this.blockedT=0,this.lastX,this.lastZ,this.lastX=r.x,this.lastZ=r.z;const R=E>.002;this.phase+=e*(2+y);const x=R?Math.sin(this.phase*4.2)*.62:0;this.legL.rotation.x=x,this.legR.rotation.x=-x,this.armL.rotation.x=R?Math.sin(this.phase*4.2)*.1:0,this.armR.rotation.x=R?-Math.sin(this.phase*4.2)*.08:0;const _=R?Math.abs(Math.sin(this.phase*4.2))*.05:Math.sin(this.time2(e))*.012;this.group.position.y=_,this.headG.rotation.y=Math.sin(this.phase*.7)*.06;for(const I of this.mats)I.emissiveIntensity=Math.max(0,I.emissiveIntensity-e*5);return this.flashT>0&&(this.flashT-=e,this.flash.material.opacity=Math.max(0,this.flashT/.045)),this.flash.lookAt(d),this.burstLeft>0?(this.nextShot-=e,this.nextShot<=0&&(p&&u<36&&this.fireAt(d,u),this.burstLeft--,this.nextShot=.13,this.burstLeft===0&&(this.nextBurst=Math.max(.4,1.1+Math.random()*1.2-u*.012)))):(this.nextBurst-=e,this.nextBurst<=0&&p&&u<36&&(this.burstLeft=2+(Math.random()*3|0),this.nextShot=.06)),!0}time2(e){return this.idleT+=e,this.idleT*2}dispose(e){e.remove(this.group),this.group.traverse(t=>{const r=t;r.geometry&&r.geometry.dispose()});for(const t of this.mats)t.dispose()}}class $E{constructor(){this.ctx=null,this.master=null,this.noise=null}ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-16,t.ratio.value=9,t.connect(this.ctx.destination),this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(t);const r=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,r,this.ctx.sampleRate);const o=this.noise.getChannelData(0);for(let l=0;l<r;l++)o[l]=Math.random()*2-1}burst(e){if(!this.ctx||!this.master||!this.noise)return;const t=this.ctx,r=t.currentTime+(e.delay||0),o=t.createBufferSource();o.buffer=this.noise,o.loop=!0;const l=t.createBiquadFilter();l.type=e.type||"lowpass",l.Q.value=.7,l.frequency.setValueAtTime(e.from,r),l.frequency.exponentialRampToValueAtTime(Math.max(40,e.to),r+e.dur);const u=t.createGain();u.gain.setValueAtTime(e.vol,r),u.gain.exponentialRampToValueAtTime(1e-4,r+e.dur),o.connect(l),l.connect(u),u.connect(this.master),o.start(r),o.stop(r+e.dur+.05)}tone(e,t,r,o="sine",l,u=0){if(!this.ctx||!this.master)return;const d=this.ctx,p=d.currentTime+u,h=d.createOscillator();h.type=o,h.frequency.setValueAtTime(e,p),l&&h.frequency.exponentialRampToValueAtTime(Math.max(20,l),p+t);const v=d.createGain();v.gain.setValueAtTime(r,p),v.gain.exponentialRampToValueAtTime(1e-4,p+t),h.connect(v),v.connect(this.master),h.start(p),h.stop(p+t+.05)}shoot(){this.burst({dur:.14,vol:.5,from:1700,to:170}),this.burst({dur:.05,vol:.22,from:3800,to:900,type:"highpass"}),this.tone(150,.13,.5,"triangle",42)}smg(){this.burst({dur:.08,vol:.34,from:2100,to:320}),this.burst({dur:.03,vol:.14,from:4200,to:1100,type:"highpass"}),this.tone(190,.07,.3,"triangle",60)}shotgun(){this.burst({dur:.22,vol:.7,from:900,to:90}),this.burst({dur:.08,vol:.3,from:2600,to:500,type:"highpass"}),this.tone(95,.2,.6,"triangle",34),this.burst({dur:.06,vol:.25,from:1400,to:300,delay:.42})}lmg(){this.burst({dur:.1,vol:.42,from:1500,to:200}),this.burst({dur:.04,vol:.18,from:3400,to:800,type:"highpass"}),this.tone(130,.1,.4,"triangle",46)}zeus(){this.tone(2400,.25,.3,"sawtooth",120),this.burst({dur:.3,vol:.35,from:5e3,to:300,type:"highpass"}),this.tone(90,.3,.4,"sine",30)}knife(){this.burst({dur:.12,vol:.2,from:3e3,to:700,type:"bandpass"}),this.tone(320,.08,.15,"triangle",700)}pistol(){this.burst({dur:.1,vol:.42,from:2600,to:320}),this.burst({dur:.04,vol:.18,from:4200,to:1400,type:"highpass"}),this.tone(220,.09,.34,"triangle",70)}sniper(){this.burst({dur:.42,vol:.8,from:1300,to:55}),this.burst({dur:.12,vol:.3,from:4200,to:700,type:"highpass"}),this.tone(88,.42,.62,"sine",26)}zoom(e){this.tone(e?620:1050,.05,.13,"square",e?1150:520)}buy(){this.tone(1320,.06,.17,"square"),this.tone(1760,.09,.15,"square",void 0,.055)}deny(){this.tone(230,.13,.2,"square",150)}switchW(){this.burst({dur:.05,vol:.12,from:1500,to:500}),this.tone(500,.04,.1,"square",800,.03)}enemyShoot(e){const t=Math.max(.06,Math.min(.3,2.4/Math.max(4,e)));this.burst({dur:.12,vol:t,from:1100,to:150}),this.tone(120,.1,t*.8,"triangle",40)}dry(){this.tone(1900,.045,.14,"square",1200)}hit(e){this.tone(e?2500:1650,.06,.2,"square",e?1900:1250)}kill(){this.tone(880,.09,.22,"square"),this.tone(1318,.14,.22,"square",void 0,.075)}hurt(){this.burst({dur:.16,vol:.35,from:520,to:90}),this.tone(95,.22,.4,"sine",42)}step(){this.burst({dur:.05,vol:.06,from:640,to:180})}jump(){this.burst({dur:.09,vol:.08,from:400,to:900,type:"bandpass"})}reload(){this.tone(950,.05,.18,"square",600),this.tone(700,.06,.2,"square",420,.42),this.burst({dur:.07,vol:.16,from:2200,to:500,delay:1.05}),this.tone(1150,.05,.2,"square",800,1.05)}pin(){this.tone(2300,.05,.18,"square",1600)}boom(){this.burst({dur:.65,vol:.85,from:900,to:55}),this.burst({dur:.22,vol:.35,from:3200,to:400,type:"highpass"}),this.tone(72,.55,.7,"sine",30)}beep(e=880,t=.1,r=.2){this.tone(e,t,r,"square")}win(){[523,659,784,1046].forEach((e,t)=>this.tone(e,.16,.22,"square",void 0,t*.11))}lose(){[392,330,262,196].forEach((e,t)=>this.tone(e,.22,.22,"triangle",void 0,t*.15))}}const W0=["Феникс","Гюрза","Кобра","Шакал","Коршун","Таран","Волк","Гадюка","Беркут","Росомаха"],X0=100,Hf=3,Oi=typeof window<"u"&&(window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window),ii={ak:{name:"AK-47",short:"AK-47",cat:"Винтовка",dmg:27,cd:.096,mag:30,res:90,auto:!0,reload:2.5,recoil:.013,recoilYaw:.008,kick:.16,base:.0035,grow:.02,movePen:.006,recover:4.2,speed:1,reward:300,sound:"rifle",gun:{body:[.072,.092,.5],bodyMat:"metal",bodyColor:3816770,barrelLen:.3,barrelR:.016,barrelY:.022,handguard:[.066,.07,.24],handguardMat:"wood",stock:{l:.24,drop:.02,mat:"wood",color:9067052},mag:{w:.056,h:.2,d:.1,tilt:.24,z:.04},grip:!0,gasTube:!0,muzzle:{len:.07,r:.02}}},awp:{name:"AWP",short:"AWP",cat:"Снайперка",dmg:115,cd:1.35,mag:5,res:30,auto:!1,reload:3.7,recoil:.09,recoilYaw:.004,kick:.05,base:.0012,grow:.03,movePen:0,recover:1.1,speed:.88,reward:100,sound:"sniper",gun:{body:[.06,.088,.6],bodyMat:"poly",bodyColor:4871743,barrelLen:.5,barrelR:.014,barrelY:.015,stock:{l:.26,drop:.035,mat:"poly",color:4871743},scope:{len:.26,r:.03,zoom:4},mag:{w:.05,h:.11,d:.08,tilt:.08,z:.02},grip:!0,bipod:!0,boltHandle:!0,muzzle:{len:.1,r:.024}}},deagle:{name:"Desert Eagle",short:"DEAGLE",cat:"Пистолет",dmg:53,cd:.24,mag:7,res:35,auto:!1,reload:2.2,recoil:.038,recoilYaw:.006,kick:.1,base:.004,grow:.05,movePen:.035,recover:2.4,speed:1.02,reward:300,sound:"pistol",gun:{body:[.046,.05,.26],bodyMat:"metal",bodyColor:10199464,barrelLen:.05,barrelR:.013,barrelY:.02,pistol:!0,slideColor:13225684,serrations:!0,mag:{w:.04,h:.02,d:.06,tilt:-.22,z:.1}}},p90:{name:"P90",short:"P90",cat:"ПП",dmg:14,cd:.066,mag:50,res:100,auto:!0,reload:3.3,recoil:.008,recoilYaw:.007,kick:.07,base:.005,grow:.016,movePen:.013,recover:3.8,speed:1.04,reward:600,sound:"smg",gun:{body:[.068,.11,.5],bodyMat:"poly",bodyColor:6121540,barrelLen:.14,barrelR:.012,barrelY:.005,bullpup:!0,topMag:!0,muzzle:{len:.05,r:.02}}},knife:{name:"M48 Tomahawk",short:"НОЖ",cat:"Ближний бой",dmg:60,cd:.45,mag:0,res:0,auto:!0,reload:0,recoil:0,recoilYaw:0,kick:.05,base:0,grow:0,movePen:0,recover:5,speed:1.06,reward:1500,sound:"knife",melee:!0,gun:{body:[.026,.03,.13],bodyMat:"poly",bodyColor:3356734,barrelLen:0,barrelR:0,blade:{len:.17,w:.036}}}},zn=["ak","awp","deagle","p90","knife"];class KE{constructor(e,t){this.state="attract",this.scene=new h_,this.clock=new z_,this.raf=0,this.time=0,this.attractT=0,this.sfx=new $E,this.pos=new Q,this.vel=new Q,this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.kick=0,this.spread=0,this.shake=0,this.bobT=0,this.stepAcc=0,this.onGround=!0,this.locked=!1,this.hp=100,this.armor=0,this.nades=1,this.reloading=!1,this.reloadT=0,this.reloadTotal=1.9,this.cooldown=0,this.firing=!1,this.joyX=0,this.joyY=0,this.lookDX=0,this.lookDY=0,this.touchJump=!1,this.equipped="deagle",this.ammo={},this.scoped=!1,this.switchAnim=1,this.lastCX=0,this.lastCY=0,this.mouseInit=!1,this.keys={},this.deathT=0,this.round=0,this.scoreA=0,this.scoreB=0,this.kills=0,this.deaths=0,this.roundT=X0,this.bots=[],this.nadesFly=[],this.particles=[],this.tracers=[],this.shells=[],this.decals=[],this.weapon=new Wi,this.weaponModels={},this.weaponMuzzles={},this.wheelOpen=!1,this.wheelIndex=0,this.flashT=0,this.boomT=0,this.ray=new vg,this.tmpV=new Q,this.tmpD=new Q,this.roundTimeout=0,this.onKeyDown=h=>{if(h.code==="Space"&&h.preventDefault(),this.keys[h.code]=!0,this.state!=="playing")return;if(h.code==="Escape"&&!this.locked){this.pause();return}if(h.code==="Tab"){h.preventDefault(),this.openWheel();return}if(this.wheelOpen)return;h.code==="KeyR"&&this.startReload(),h.code==="KeyG"&&this.throwNade();const v=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9"].indexOf(h.code);v>=0&&v<zn.length&&this.switchTo(zn[v])},this.onKeyUp=h=>{this.keys[h.code]=!1,h.code==="Tab"&&(h.preventDefault(),this.closeWheel(!0))},this.onWheel=h=>{this.state!=="playing"||this.wheelOpen||this.cycleWeapon(h.deltaY>0?1:-1)},this.onMouseMove=h=>{if(this.wheelOpen){this.wheelPick(h.clientX,h.clientY);return}if(this.state==="playing")if(this.locked)this.yaw-=h.movementX*.0032,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-h.movementY*.0032));else{if(!this.mouseInit){this.lastCX=h.clientX,this.lastCY=h.clientY,this.mouseInit=!0;return}const v=h.movementX??h.clientX-this.lastCX,y=h.movementY??h.clientY-this.lastCY;this.lastCX=h.clientX,this.lastCY=h.clientY;const g=.0045;this.yaw-=v*g,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-y*g))}},this.onMouseDown=h=>{this.sfx.ensure(),this.state==="playing"&&(h.button===0?(this.firing=!0,this.tryShoot(),this.locked||this.requestLock()):h.button===2&&(this.equipped==="awp"?this.toggleScope():(this.firing=!0,this.tryShoot())))},this.onMouseUp=h=>{(h.button===0||h.button===2)&&(this.firing=!1)},this.onLockChange=()=>{const h=document.pointerLockElement===this.renderer.domElement;this.locked&&!h&&this.state==="playing"&&!this.wheelOpen&&this.pause(),this.mouseInit=!1,this.locked=h,this.wheelOpen||this.hooks.lockedChange(h)},this.onResize=()=>{const h=this.container.clientWidth,v=this.container.clientHeight;this.camera.aspect=h/v,this.camera.updateProjectionMatrix(),this.renderer.setSize(h,v),this.composer.setSize(h,v)},this.onVisibility=()=>{document.hidden&&this.state==="playing"&&this.pause()},this.onContext=h=>h.preventDefault(),this.loop=()=>{this.raf=requestAnimationFrame(this.loop);const h=Math.min(.05,this.clock.getDelta());this.time+=h;const v=this.scene.getObjectByName("dust");v&&(v.rotation.y+=h*.012);const y=this.scene.getObjectByName("clouds");if(y&&(y.rotation.y+=h*.007),this.state==="attract"){this.attractT+=h*.09;const E=17;this.camera.position.set(Math.sin(this.attractT)*E,7.5+Math.sin(this.attractT*.6)*2,Math.cos(this.attractT)*E),this.camera.lookAt(0,1.2,0),this.weapon.visible=!1}else this.weapon.visible=!0,this.state==="playing"?this.updatePlaying(h):this.state==="dying"&&this.updateDying(h),this.updateFx(h),this.state!=="playing"&&this.updateNades(h);const g=this.renderer.domElement,S=this.state==="playing"||this.state==="dying"?"none":"";g.dataset.cur!==S&&(g.dataset.cur=S,g.style.cursor=S),this.composer.render()},this.container=e,this.hooks=t,this.renderer=new UE({antialias:!Oi,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,Oi?1.3:1.75)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=q0,e.appendChild(this.renderer.domElement),this.renderer.toneMapping=vc,this.renderer.toneMappingExposure=1.06,this.scene.background=this.makeSkyTexture(),this.scene.fog=new td(13156264,36,98),this.camera=new ri(75,e.clientWidth/e.clientHeight,.05,220),this.camera.rotation.order="YXZ",this.scene.add(this.camera);const r=new N_(13624053,10193507,1.1);this.scene.add(r);const o=new d0(16772300,2.6);o.position.set(-26,38,-18),o.castShadow=!0,o.shadow.mapSize.set(Oi?1024:2048,Oi?1024:2048),o.shadow.camera.left=-34,o.shadow.camera.right=34,o.shadow.camera.top=34,o.shadow.camera.bottom=-34,o.shadow.camera.far=100,o.shadow.bias=-6e-4,this.scene.add(o),this.scene.add(new I_(8952234,.4));const l=new d0(14268810,.5);l.position.set(20,6,24),this.scene.add(l),this.map=qE(this.scene),this.gunLight=new h0(16761707,0,9,2),this.gunLight.position.set(.3,-.15,-.7),this.camera.add(this.gunLight),this.boomLight=new h0(16748608,0,22,2),this.scene.add(this.boomLight),this.buildWeapons(),this.flash=this.buildFlash(.55),this.weaponMuzzles[this.equipped].add(this.flash);for(let h=0;h<(Oi?12:24);h++){const v=new wt(new xn(1,1,1),new Vi({color:16765562,transparent:!0,opacity:0,blending:gs,depthWrite:!1}));v.visible=!1,this.scene.add(v),this.tracers.push({m:v,life:0})}const u=new xn(.016,.05,.016),d=new Qt({color:14263361,metalness:.85,roughness:.35});for(let h=0;h<(Oi?10:22);h++){const v=new wt(u,d);v.visible=!1,this.scene.add(v),this.shells.push({m:v,v:new Q,rv:new Q,life:0})}const p=new Xi(.1,.1);for(let h=0;h<(Oi?16:40);h++){const v=new wt(p,new Vi({color:1314826,transparent:!0,opacity:0,depthWrite:!1}));v.visible=!1,this.scene.add(v),this.decals.push({m:v,life:0})}this.composer=new VE(this.renderer),this.composer.addPass(new GE(this.scene,this.camera)),Oi||this.composer.addPass(new va(new rt(e.clientWidth,e.clientHeight),.5,.5,.82)),this.composer.addPass(new WE),this.pos.set(this.map.playerSpawn.x,0,this.map.playerSpawn.z),this.bindEvents(),this.loop()}makeSkyTexture(){const e=document.createElement("canvas");e.width=16,e.height=512;const t=e.getContext("2d"),r=t.createLinearGradient(0,0,0,512);r.addColorStop(0,"#4f7db5"),r.addColorStop(.42,"#7fa8cc"),r.addColorStop(.66,"#b9c4c4"),r.addColorStop(.82,"#d8c9a8"),r.addColorStop(1,"#e5d3ae"),t.fillStyle=r,t.fillRect(0,0,16,512);const o=new yo(e);return o.colorSpace=Nn,o.magFilter=En,o}texCanvas(e,t){const r=document.createElement("canvas");r.width=r.height=e;const o=r.getContext("2d");t(o,e);const l=new yo(r);return l.wrapS=l.wrapT=pa,l.colorSpace=Nn,l.anisotropy=4,l}texMetal(e){return this.texCanvas(128,(t,r)=>{t.fillStyle=e,t.fillRect(0,0,r,r);for(let o=0;o<300;o++)t.fillStyle=Math.random()>.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.10)",t.fillRect(Math.random()*r,Math.random()*r,1+Math.random()*2.2,1);t.globalAlpha=.09,t.strokeStyle="#ffffff";for(let o=0;o<24;o++){const l=Math.random()*r;t.beginPath(),t.moveTo(0,l),t.lineTo(r,l+(Math.random()-.5)*5),t.stroke()}t.globalAlpha=1})}texWood(){return this.texCanvas(128,(e,t)=>{e.fillStyle="#8a5a2c",e.fillRect(0,0,t,t);for(let r=0;r<26;r++){e.strokeStyle=`rgba(58,32,10,${.14+Math.random()*.26})`,e.lineWidth=1+Math.random()*2.2;const o=Math.random()*t;e.beginPath(),e.moveTo(o,0),e.bezierCurveTo(o+9,t*.3,o-9,t*.62,o+(Math.random()-.5)*12,t),e.stroke()}for(let r=0;r<220;r++)e.fillStyle="rgba(38,20,6,0.14)",e.fillRect(Math.random()*t,Math.random()*t,1.6,1.6);e.globalAlpha=.07,e.fillStyle="#eec27f";for(let r=0;r<6;r++)e.beginPath(),e.ellipse(Math.random()*t,Math.random()*t,16+Math.random()*22,5+Math.random()*4,0,0,7),e.fill();e.globalAlpha=1})}texPolymer(e){return this.texCanvas(128,(t,r)=>{t.fillStyle=e,t.fillRect(0,0,r,r);for(let o=0;o<460;o++)t.fillStyle=Math.random()>.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.12)",t.fillRect(Math.random()*r,Math.random()*r,1.7,1.7);t.globalAlpha=.08,t.strokeStyle="#000000";for(let o=0;o<11;o++){const l=Math.random()*r,u=Math.random()*r;t.beginPath(),t.moveTo(l,u),t.lineTo(l+(Math.random()-.5)*34,u+(Math.random()-.5)*34),t.stroke()}t.globalAlpha=1})}buildGunModel(e){var $,D,G,z;const t=new Wi,r=new Wt,o=k=>`#${k.toString(16).padStart(6,"0")}`,l=this.texMetal(o(e.bodyMat==="metal"?e.bodyColor:2829875)),u=this.texWood(),d=this.texPolymer(o(e.bodyColor)),p=new Qt({map:l,bumpMap:l,bumpScale:.25,roughness:.46,metalness:.72}),h=new Qt({map:this.texMetal("#17191c"),bumpMap:this.texMetal("#17191c"),bumpScale:.2,roughness:.4,metalness:.8}),v=new Qt({map:u,bumpMap:u,bumpScale:.45,roughness:.66,metalness:.06}),y=new Qt({map:d,bumpMap:d,bumpScale:.3,roughness:.85,metalness:.1}),g=this.texPolymer("#6e6848"),S=new Qt({map:g,bumpMap:g,bumpScale:.5,roughness:.92,metalness:.04}),E=e.bodyMat==="wood"?v:e.bodyMat==="poly"?y:p,R=new Qt({color:14278371,roughness:.22,metalness:.95}),x=(k,H,W,ie,ne,F,ee,be=0,Ue=0,Fe=0)=>{const se=new wt(new xn(k,H,W),ie);return se.position.set(ne,F,ee),se.rotation.set(be,Ue,Fe),t.add(se),se},_=(k,H,W,ie,ne,F,ee,be=14)=>{const Ue=new wt(new Eo(k,H,W,be),ie);return Ue.rotation.x=Math.PI/2,Ue.position.set(ne,F,ee),t.add(Ue),Ue},[I,P,b]=e.body,C=e.barrelY??.015,U=(k,H,W,ie=0,ne=!1)=>{const F=new Wi,ee=new wt(new xn(.082,.075,.085),S);F.add(ee);const be=new wt(new xn(.084,ne?.05:.045,.06),S);be.position.set(0,ne?.055:-.012,-.06),be.rotation.x=ne?.5:-.4,F.add(be);const Ue=new wt(new xn(.084,.03,.05),S);Ue.position.set(0,.035,-.02),F.add(Ue);const Fe=new wt(new xn(.026,.028,.06),S);Fe.position.set(.048,.008,-.03),F.add(Fe);const se=new wt(new xn(.07,.06,.1),S);se.position.set(.01,-.005,.09),F.add(se);const pe=new wt(new xn(.075,.062,.26),S);return pe.position.set(.05,-.02,.26),pe.rotation.set(.18,-.15,0),F.add(pe),F.position.set(k,H,W),F.rotation.x=ie,t.add(F),F};if(e.melee&&e.blade){const k=e.blade;x(.03,.034,.13,y,0,.005,.075),x(.032,.012,.03,h,0,-.014,.05),x(.032,.012,.03,h,0,-.014,.085),x(.034,.016,.018,h,0,.005,.148),x(.052,.014,.02,p,0,.012,0),x(k.w,.008,k.len,R,0,.02,-k.len/2-.01),x(k.w*.92,.003,k.len,new Qt({color:16054266,roughness:.12,metalness:1}),0,.0155,-k.len/2-.01),x(k.w*.3,.004,k.len*.9,h,0,.026,-k.len/2-.015);const H=x(k.w*.62,.007,k.w*.62,R,0,.02,-k.len-.01-k.w*.2,0,Math.PI/4);return H.scale.z=.55,U(0,0,.07,-1.15),r.position.set(0,.02,-k.len-.05),t.add(r),{group:t,muzzle:r}}if(e.pistol){const k=new Qt({map:this.texMetal(o(e.slideColor??13225684)),roughness:.3,metalness:.85});if(x(I,P*.9,b,p,0,-.006,0),x(I*1.04,P*.62,b*1.02,k,0,P*.5,0),e.serrations)for(let H=0;H<6;H++)x(.002,P*.5,.008,h,I*.53,P*.5,b*.28+H*.012),x(.002,P*.5,.008,h,-I*.53,P*.5,b*.28+H*.012);return _(e.barrelR*.9,e.barrelR*.9,.06,h,0,P*.5,-b/2-.02),x(.012,.03,.012,k,0,P*.86,-b*.4),x(I*.8,.02,.016,k,0,P*.84,b*.34),x(I*.9,.05,.05,h,0,P*.16,b*.44),x(I*.94,P*1.5,.075,p,0,-P*1.05,b*.26,-.2),x(I*.8,.05,.02,h,0,-P*1.62,b*.2),x(.018,.04,.05,h,0,-P*.55,b*.05),x(.008,.03,.014,h,0,-P*.36,.02),x(I*.5,.028,.014,h,0,P*.62,b*.52,-.5),U(0,-P*1,b*.26,-.2),U(0,-P*1.22,b*.24,-.1),r.position.set(0,P*.5,-b/2-.055),t.add(r),{group:t,muzzle:r}}x(I,P,b,E,0,0,0);const V=Math.floor(b/.045);for(let k=0;k<V;k++)x(I*.5,.011,.016,h,0,P/2+.005,-b/2+.03+k*.045);let w=-b/2;if(e.barrelLen>0&&(_(e.barrelR,e.barrelR,e.barrelLen,h,0,C,w-e.barrelLen/2),w-=e.barrelLen),e.muzzle&&(_(e.muzzle.r,e.muzzle.r,e.muzzle.len,p,0,C,w-e.muzzle.len/2),_(e.muzzle.r*.55,e.muzzle.r*.55,e.muzzle.len*.5,h,0,C,w-e.muzzle.len*.55),w-=e.muzzle.len),e.gasTube&&(_(.011,.011,((($=e.handguard)==null?void 0:$[2])??.2)*.95,p,0,C+P*.42,-b/2-(((D=e.handguard)==null?void 0:D[2])??.2)*.47),x(I*.7,P*.5,.03,p,0,C+P*.28,-b/2-(((G=e.handguard)==null?void 0:G[2])??.2)-.015),x(.008,.05,.008,h,0,C+P*.62,-b/2-(((z=e.handguard)==null?void 0:z[2])??.2)-.015),x(.044,.02,.014,h,0,P/2+.02,b*.3),x(.012,.03,.05,h,I*.42,.02,b*.05)),e.handguard){const[k,H,W]=e.handguard,ie=e.handguardMat==="wood"?v:y;x(k,H,W,ie,0,C-H*.12,-b/2-W/2+.012),x(k*.86,H*.4,W*.96,h,0,C+H*.42,-b/2-W/2+.012);for(let ne=0;ne<3;ne++)x(.004,H*.5,.045,h,k*.505,C-H*.12,-b/2-.05-ne*.07),x(.004,H*.5,.045,h,-k*.505,C-H*.12,-b/2-.05-ne*.07)}if(e.mag){const k=e.mag;x(k.w,k.h,k.d,h,k.x??0,-P/2-k.h/2+.025,(k.z??0)+.02,k.tilt),x(k.w*.9,.02,k.d*.9,p,k.x??0,-P/2-k.h+.03,(k.z??0)+.02+Math.sin(k.tilt)*k.h*.45,k.tilt)}if(e.topMag){const k=new Qt({color:10135650,roughness:.4,metalness:.1,transparent:!0,opacity:.55});x(I*.92,.024,b*.86,k,0,P/2+.012,-.01);for(let H=0;H<8;H++)x(.008,.02,.014,new Qt({color:14201946,metalness:.8,roughness:.35}),0,P/2+.012,-b*.3+H*.045)}if(e.bullpup&&(x(I*.9,P*1.12,.09,E,0,-.004,b/2+.035),x(I*.94,P*.9,.02,h,0,-.004,b/2+.085),x(I*.8,.03,.1,h,0,P/2+.012,b*.28),x(I*.7,.05,.12,E,0,-P/2-.02,-b*.3,-.55),x(.016,.05,.05,h,I*.4,.01,-b*.34),x(.016,.05,.05,h,-I*.4,.01,-b*.34)),e.stock){const k=e.stock,H=k.mat==="wood"?v:new Qt({map:this.texPolymer(o(k.color)),roughness:.8,metalness:.12});x(I*.88,P*1.05,k.l*.5,H,0,-k.drop*.35,b/2+k.l*.25),x(I*.92,P*1.4,k.l*.5,H,0,-k.drop,b/2+k.l*.75),x(I*.96,P*1.45,.018,h,0,-k.drop,b/2+k.l+.002)}if(e.grip&&(x(I*.85,.115,.06,E,0,-P/2-.055,b*.3,-.22),x(I*.7,.03,.02,h,0,-P/2-.1,b*.16)),e.scope){const k=e.scope,H=P/2+k.r+.024;_(k.r,k.r,k.len,h,0,H,-.02),_(k.r*1.45,k.r,.055,h,0,H,-.02-k.len/2),_(k.r*1.2,k.r,.05,h,0,H,-.02+k.len/2);const W=new wt(new yc(k.r*1.3,20),new Vi({color:10474751}));W.position.set(0,H,-.02+k.len/2+.027),W.rotation.y=Math.PI,t.add(W),x(.014,.05,.03,h,0,P/2+.01,-.06),x(.014,.05,.03,h,0,P/2+.01,.04),x(.004,.02,.004,h,0,H+k.r+.012,-.1)}e.bipod&&(x(.012,.2,.012,h,.02,-P/2-.08,-b*.36,.45,0,.28),x(.012,.2,.012,h,-.02,-P/2-.08,-b*.36,.45,0,-.28),x(.05,.02,.05,h,0,-P/2-.012,-b*.36)),e.boltHandle&&(x(.012,.012,.07,p,I*.55,-.005,b*.1,0,0,.7),_(.011,.011,.024,p,I*.58,-.035,b*.07));const N=e.handguard,j=e.bullpup?-b*.3:b*.3,X=e.bullpup?-.55:-.22;return U(0,-P/2-.075,j,X),N?U(0,C-N[1]*.5-.05,-b/2-N[2]*.55,.2,!0):e.bullpup?U(0,-P*.75,-b*.05,.3,!0):U(0,-P*.5,-b*.42,.3,!0),r.position.set(0,C,w-.02),t.add(r),{group:t,muzzle:r}}buildWeapons(){const e=this.weapon;for(const t of zn){const{group:r,muzzle:o}=this.buildGunModel(ii[t].gun);this.weaponModels[t]=r,this.weaponMuzzles[t]=o,e.add(r),r.visible=!1}e.position.set(.24,-.22,-.45),this.camera.add(e)}buildFlash(e){const t=new Vi({color:16763258,transparent:!0,opacity:0,blending:gs,depthWrite:!1,side:zi}),r=new Wi,o=new wt(new Xi(e,e),t),l=new wt(new Xi(e,e*.36),t);l.rotation.z=Math.PI/2,r.add(o,l);const u=new wt(new Xi(.01,.01),t);return u.add(r),u}bindEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("wheel",this.onWheel,{passive:!0}),window.addEventListener("resize",this.onResize),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("pointerlockchange",this.onLockChange),document.addEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.addEventListener("contextmenu",this.onContext)}requestLock(){try{const e=this.renderer.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}startMatch(){this.sfx.ensure(),this.scoreA=0,this.scoreB=0,this.round=0,this.kills=0,this.deaths=0,this.equipped="deagle",this.applyWeaponVisibility(),this.hooks.score(0,0),this.hooks.kills(0),this.startRound()}resume(){this.state==="paused"&&(this.state="playing",this.requestLock())}pause(){this.state==="playing"&&(this.state="paused",this.firing=!1,this.mouseInit=!1,this.scoped&&this.toggleScope(!1),document.pointerLockElement?document.exitPointerLock():this.hooks.lockedChange(!1))}toMenu(){window.clearTimeout(this.roundTimeout),this.clearEntities(),this.state="attract",this.scoped&&this.toggleScope(!1),document.pointerLockElement&&document.exitPointerLock()}setMoveInput(e,t){this.joyX=Math.max(-1,Math.min(1,e)),this.joyY=Math.max(-1,Math.min(1,t))}addLook(e,t){this.lookDX+=e,this.lookDY+=t}setFiring(e){if(this.state!=="playing"){this.firing=!1;return}this.firing=e,e&&this.tryShoot()}doJump(){this.state==="playing"&&(this.touchJump=!0)}doReload(){this.state==="playing"&&this.startReload()}doGrenade(){this.state==="playing"&&this.throwNade()}doScope(){this.state==="playing"&&this.equipped==="awp"&&this.toggleScope()}switchWeaponByIndex(e){e>=0&&e<zn.length&&this.switchTo(zn[e])}cycleWeaponPub(e){this.cycleWeapon(e)}dispose(){cancelAnimationFrame(this.raf),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("wheel",this.onWheel),window.removeEventListener("resize",this.onResize),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mousedown",this.onMouseDown),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("pointerlockchange",this.onLockChange),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.removeEventListener("contextmenu",this.onContext),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement)}clearEntities(){for(const e of this.bots)e.dispose(this.scene);this.bots=[];for(const e of this.nadesFly)this.scene.remove(e.m);this.nadesFly=[];for(const e of this.particles)e.life=0,e.m.visible=!1}startRound(){this.round++,this.clearEntities();const e=this.map.playerSpawn;this.pos.set(e.x,0,e.z),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.spread=0,this.shake=0,this.kick=0,this.hp=100,this.armor=100;for(const l of zn)this.ammo[l]={mag:ii[l].mag,res:ii[l].res};this.nades=Math.min(3,this.round),this.reloading=!1,this.firing=!1,this.scoped=!1,this.hooks.scoped(!1),this.roundT=X0;const t=Math.min(8,2+this.round),r=[...this.map.botSpawns].sort(()=>Math.random()-.5),o={colliders:this.map.colliders,bounds:this.map.bounds,solids:this.map.solids,playerEye:()=>this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z),playerSpeedXZ:()=>Math.hypot(this.vel.x,this.vel.z),tracer:(l,u,d)=>this.spawnTracer(l,u,d),damagePlayer:(l,u)=>this.damagePlayer(l,u),sfx:this.sfx};for(let l=0;l<t;l++){const u=r[l%r.length],d=new jE(W0[l%W0.length],u.x+(Math.random()-.5),u.z+(Math.random()-.5),3+this.round*.22+Math.random()*.3,o);d.group.rotation.y=Math.random()*Math.PI*2,this.scene.add(d.group),d.group.updateMatrixWorld(!0),this.bots.push(d)}this.state="playing",Hf-this.scoreA,this.hooks.banner({title:`РАУНД ${this.round}`,sub:`противников: ${t} · стволы: [1][2][3] / колесо`,tone:"info"}),this.sfx.beep(760,.12,.22),this.requestLock()}endRound(e){if(this.state!=="playing"&&this.state!=="dying")return;this.state="roundEnd",this.firing=!1,this.scoped&&this.toggleScope(!1),this.camera.fov=75,this.camera.updateProjectionMatrix(),e?this.scoreA++:this.scoreB++,this.hooks.score(this.scoreA,this.scoreB),document.pointerLockElement&&document.exitPointerLock();const t=this.scoreA>=Hf||this.scoreB>=Hf;this.hooks.banner({title:e?"РАУНД ВЫИГРАН":"РАУНД ПРОИГРАН",sub:`счёт ${this.scoreA} : ${this.scoreB}`,tone:e?"win":"lose"}),e?this.sfx.win():this.sfx.lose(),this.roundTimeout=window.setTimeout(()=>{t?this.finish(this.scoreA>this.scoreB):this.startRound()},3100)}finish(e){this.scoped&&this.toggleScope(!1),this.camera.fov=75,this.camera.updateProjectionMatrix(),this.hooks.over({result:e?"victory":"defeat",kills:this.kills,deaths:this.deaths,won:this.scoreA,lost:this.scoreB}),this.clearEntities(),this.state="attract"}startReload(){const e=ii[this.equipped];if(e.melee||e.reload<=0)return;const t=this.ammo[this.equipped];this.reloading||t.mag>=e.mag||this.state!=="playing"||(t.res<=0&&(t.res=e.mag,this.hooks.feed({killer:"Снабжение",victim:`+${e.mag} патронов`,head:!1,byPlayer:!0})),this.scoped&&this.toggleScope(!1),this.reloading=!0,this.reloadTotal=e.reload,this.reloadT=e.reload,this.sfx.reload())}tryShoot(){if(this.state!=="playing"||this.cooldown>0||this.reloading||this.switchAnim<1||this.wheelOpen)return;const e=ii[this.equipped];if(e.melee){this.meleeAttack(e);return}const t=this.ammo[this.equipped];if(t.mag<=0){this.sfx.dry(),this.firing=!1,e.reload>0&&this.startReload();return}t.mag--,this.cooldown=e.cd,e.sound==="sniper"?this.sfx.sniper():e.sound==="pistol"?this.sfx.pistol():e.sound==="smg"?this.sfx.smg():this.sfx.shoot();const r=e.sound==="sniper";this.flashT=r?.07:.04,this.flash.rotation.z=Math.random()*Math.PI;const o=(r?1.2:e.sound==="pistol"?.55:.75)+Math.random()*.5;this.flash.scale.set(o,o,o),this.gunLight.intensity=r?40:26,this.kick=Math.min(1.6,this.kick+1),this.recoilPitch+=e.recoil+Math.random()*e.recoil*.5,this.recoilYaw+=(Math.random()-.5)*e.recoilYaw*2,this.spread=Math.min(1,this.spread+(this.onGround?e.kick:e.kick*1.6)),this.spawnShell(),this.camera.getWorldDirection(this.tmpD);const l=Math.hypot(this.vel.x,this.vel.z);let u;e.sound==="sniper"?u=this.scoped?.0012+this.spread*.004:.075+this.spread*.03+(l>1.2?.05:0):u=e.base+this.spread*e.grow+(l>1.2?e.movePen:0)+(this.onGround?0:.012),this.tmpD.x+=(Math.random()-.5)*2*u,this.tmpD.y+=(Math.random()-.5)*2*u,this.tmpD.z+=(Math.random()-.5)*2*u,this.tmpD.normalize(),this.camera.getWorldPosition(this.tmpV),this.ray.set(this.tmpV,this.tmpD),this.ray.far=140;const d=[...this.map.solids];for(const y of this.bots)y.alive&&d.push(...y.hitboxes);const p=this.ray.intersectObjects(d,!1),h=new Q;this.weaponMuzzles[this.equipped].getWorldPosition(h);const v=p.length?p[0].point:this.tmpV.clone().addScaledVector(this.tmpD,120);if(this.spawnTracer(h,v,e.sound==="sniper"?16771488:16765562),this.burst(h,10263184,2,.6,.6,-2.2),p.length){const y=p[0].object.userData;if(y.bot&&y.bot.alive){const g=y.part==="head",S=y.bot.hit(y.part||"body",g?e.dmg*4:e.dmg);this.burst(p[0].point,10361627,g?16:10,3.4,.5),S?this.onBotKilled(y.bot,g):(this.hooks.hitmark(g?"head":"hit"),this.sfx.hit(g))}else if(this.burst(p[0].point,14205066,7,2.6,.35),this.burst(p[0].point,16773304,4,3.4,.25),p[0].face){const g=new Q().copy(p[0].face.normal).transformDirection(p[0].object.matrixWorld);this.addDecal(p[0].point,g)}}}meleeAttack(e){this.cooldown=e.cd,this.kick=Math.min(1.6,this.kick+1),this.sfx.knife(),this.camera.getWorldDirection(this.tmpD),this.camera.getWorldPosition(this.tmpV),this.ray.set(this.tmpV,this.tmpD),this.ray.far=2.4;const t=[];for(const o of this.bots)o.alive&&t.push(...o.hitboxes);const r=this.ray.intersectObjects(t,!1);if(r.length){const o=r[0].object.userData;if(o.bot&&o.bot.alive){const l=o.part==="head",u=o.bot.hit(o.part||"body",l?e.dmg*2:e.dmg);this.burst(r[0].point,10361627,14,3.6,.5),u?this.onBotKilled(o.bot,l):(this.hooks.hitmark(l?"head":"hit"),this.sfx.hit(l))}}}onBotKilled(e,t){this.kills++,this.hooks.kills(this.kills),this.hooks.hitmark("kill"),this.hooks.feed({killer:"ВЫ",victim:e.name,head:t,byPlayer:!0}),this.sfx.kill();const r=e.group.position;this.burst(new Q(r.x,r.y+1,r.z),10361627,18,4.2,.7)}damagePlayer(e,t){if(this.state!=="playing")return;let r=e;if(this.armor>0){const d=Math.min(this.armor,r*.5);this.armor-=d,r-=d}this.hp-=r,this.shake=Math.min(1.2,this.shake+r/22);const o=t.x-this.pos.x,l=t.z-this.pos.z,u=this.normAngle(this.yaw+Math.PI-Math.atan2(o,l));if(this.hooks.damage(r,u),this.sfx.hurt(),this.hp<=0){this.hp=0,this.deaths++;const d=this.bots.find(p=>p.group.position===t);this.hooks.feed({killer:d?d.name:"Взрыв",victim:"ВЫ",head:!1,byPlayer:!1}),this.state="dying",this.deathT=0,this.firing=!1,this.hooks.banner({title:"ВЫ УБИТЫ",sub:"раунд потерян",tone:"lose"}),this.sfx.lose()}}normAngle(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}switchTo(e){this.equipped===e||this.state!=="playing"||(this.equipped=e,this.reloading=!1,this.firing=!1,this.scoped&&this.toggleScope(!1),this.switchAnim=0,this.applyWeaponVisibility(),this.sfx.switchW())}applyWeaponVisibility(){for(const e of zn)this.weaponModels[e].visible=e===this.equipped;this.weaponMuzzles[this.equipped].add(this.flash)}cycleWeapon(e){if(this.state!=="playing")return;const t=zn.indexOf(this.equipped),r=zn.length;this.switchTo(zn[(t+e+r)%r])}openWheel(){this.state!=="playing"||this.wheelOpen||(this.wheelOpen=!0,this.firing=!1,this.wheelIndex=zn.indexOf(this.equipped),document.pointerLockElement&&document.exitPointerLock(),this.emitWheel())}closeWheel(e){this.wheelOpen&&(this.wheelOpen=!1,e&&this.switchTo(zn[this.wheelIndex]),this.hooks.wheel(null),this.requestLock())}emitWheel(){this.hooks.wheel({items:zn.map(e=>({id:e,name:ii[e].name,short:ii[e].short,cat:ii[e].cat})),active:this.wheelIndex})}wheelPick(e,t){if(!this.wheelOpen)return;const r=window.innerWidth/2,o=window.innerHeight/2,l=e-r,u=t-o;if(Math.hypot(l,u)<40)return;let d=Math.atan2(u,l)+Math.PI/2;d<0&&(d+=Math.PI*2);const p=zn.length;this.wheelIndex=Math.round(d/(Math.PI*2)*p)%p,this.emitWheel()}toggleScope(e){if(!ii[this.equipped].gun.scope&&e!==!1)return;const r=e!==void 0?e:!this.scoped;r!==this.scoped&&(this.scoped=r,this.spread=Math.min(this.spread,.15),this.sfx.zoom(r),this.hooks.scoped(r))}spawnShell(){const e=this.shells.find(l=>l.life<=0);if(!e)return;e.m.visible=!0,this.camera.getWorldPosition(this.tmpV);const t=new Q(1,0,0).applyQuaternion(this.camera.quaternion),r=new Q(0,1,0).applyQuaternion(this.camera.quaternion),o=new Q(0,0,-1).applyQuaternion(this.camera.quaternion);e.m.position.copy(this.tmpV).addScaledVector(t,.22).addScaledVector(r,-.1).addScaledVector(o,.2),e.v.copy(t).multiplyScalar(1.6+Math.random()*1.2).addScaledVector(r,1.6+Math.random()*1.4).addScaledVector(o,.5),e.rv.set((Math.random()-.5)*25,(Math.random()-.5)*25,(Math.random()-.5)*25),e.life=1.1}addDecal(e,t){const r=this.decals.find(l=>l.life<=0);if(!r)return;r.m.position.copy(e).addScaledVector(t,.015),r.m.lookAt(this.tmpV.copy(e).add(t)),r.m.rotation.z=Math.random()*Math.PI;const o=.7+Math.random()*.9;r.m.scale.set(o,o,o),r.m.visible=!0,r.life=7}throwNade(){if(this.nades<=0||this.state!=="playing")return;this.nades--,this.sfx.pin();const e=new wt(new rd(.09,10,8),new Qt({color:4016684,roughness:.6}));e.castShadow=!0,this.camera.getWorldPosition(this.tmpV),this.camera.getWorldDirection(this.tmpD),e.position.copy(this.tmpV).addScaledVector(this.tmpD,.5);const t=this.tmpD.clone().multiplyScalar(13.5);t.y+=3.4,t.x+=this.vel.x*.35,t.z+=this.vel.z*.35,this.scene.add(e),this.nadesFly.push({m:e,v:t,fuse:1.45})}updateNades(e){for(let t=this.nadesFly.length-1;t>=0;t--){const r=this.nadesFly[t];r.v.y-=21*e,r.m.position.addScaledVector(r.v,e);const o=r.m.position,l=G0(o.x,o.z,o.y,.09,this.map.colliders);r.v.y<=0&&o.y<=l+.09&&(o.y=l+.09,r.v.y=Math.abs(r.v.y)*.42,r.v.x*=.72,r.v.z*=.72);for(const d of this.map.colliders)if(o.x>d.minX-.09&&o.x<d.maxX+.09&&o.z>d.minZ-.09&&o.z<d.maxZ+.09&&o.y<d.top){const p=o.x-(d.minX-.09),h=d.maxX+.09-o.x,v=o.z-(d.minZ-.09),y=d.maxZ+.09-o.z,g=Math.min(p,h,v,y);g===p?(o.x=d.minX-.09,r.v.x=-Math.abs(r.v.x)*.5):g===h?(o.x=d.maxX+.09,r.v.x=Math.abs(r.v.x)*.5):g===v?(o.z=d.minZ-.09,r.v.z=-Math.abs(r.v.z)*.5):(o.z=d.maxZ+.09,r.v.z=Math.abs(r.v.z)*.5)}r.fuse-=e;const u=r.fuse<.5?1+Math.sin(this.time*30)*.15:1;r.m.scale.set(u,u,u),r.fuse<=0&&(this.explode(o.clone()),this.scene.remove(r.m),this.nadesFly.splice(t,1))}}explode(e){this.sfx.boom(),this.boomLight.position.copy(e),this.boomLight.intensity=260,this.boomT=.3,this.shake=Math.min(1.4,this.shake+.9),this.burst(e,16748608,26,9,.7,5),this.burst(e,16769184,18,12,.4,6),this.burst(e,5591114,20,5,1.1,2);for(const r of this.bots){if(!r.alive)continue;const o=r.group.position.distanceTo(e);o<6.5&&r.hit("body",130*(1-o/6.5))&&this.onBotKilled(r,!1)}const t=Math.hypot(this.pos.x-e.x,this.pos.z-e.z);t<5.5&&this.damagePlayer(50*(1-t/5.5),e)}burst(e,t,r,o,l,u=9){for(let d=0;d<r;d++){let p=this.particles.find(v=>v.life<=0);if(!p){if(this.particles.length>(Oi?120:280))return;const v=new wt(new xn(.06,.06,.06),new Vi({color:t,transparent:!0}));this.scene.add(v),p={m:v,v:new Q,g:u,life:0,max:1},this.particles.push(p)}p.m.material.color.set(t),p.m.visible=!0,p.m.position.copy(e),p.v.set((Math.random()-.5)*2,Math.random()*1.4,(Math.random()-.5)*2).normalize().multiplyScalar(o*(.4+Math.random()*.8)),p.g=u,p.max=l*(.6+Math.random()*.7),p.life=p.max;const h=.6+Math.random();p.m.scale.set(h,h,h)}}spawnTracer(e,t,r){const o=this.tracers.find(p=>p.life<=0);if(!o)return;const l=e.clone().add(t).multiplyScalar(.5),u=e.distanceTo(t);o.m.position.copy(l),o.m.scale.set(.022,.022,Math.max(.1,u)),o.m.lookAt(t);const d=o.m.material;d.color.set(r),d.opacity=.85,o.m.visible=!0,o.life=.07}updateFx(e){for(const t of this.particles)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.v.y-=t.g*e,t.m.position.addScaledVector(t.v,e),t.m.position.y<.02&&(t.m.position.y=.02,t.v.y=Math.abs(t.v.y)*.3,t.v.x*=.7,t.v.z*=.7),t.m.material.opacity=Math.min(1,t.life/t.max*1.4)}for(const t of this.shells)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.v.y-=13*e,t.m.position.addScaledVector(t.v,e),t.m.position.y<.02&&(t.m.position.y=.02,t.v.y=Math.abs(t.v.y)*.35,t.v.x*=.6,t.v.z*=.6,t.rv.multiplyScalar(.5)),t.m.rotation.x+=t.rv.x*e,t.m.rotation.y+=t.rv.y*e,t.m.rotation.z+=t.rv.z*e}for(const t of this.decals)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.material.opacity=Math.min(.7,t.life*.5)}for(const t of this.tracers)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.material.opacity=t.life/.07*.85}this.flashT>0?(this.flashT-=e,this.setFlashOpacity(Math.max(0,this.flashT/.04))):this.setFlashOpacity(0),this.gunLight.intensity=Math.max(0,this.gunLight.intensity-e*260),this.boomT>0&&(this.boomT-=e,this.boomLight.intensity=Math.max(0,this.boomT/.3)*260),this.recoilPitch*=Math.exp(-9*e),this.recoilYaw*=Math.exp(-9*e),this.kick=Math.max(0,this.kick-e*9),this.shake=Math.max(0,this.shake-e*2.6)}setFlashOpacity(e){this.flash.traverse(t=>{const r=t;r.material&&(r.material.opacity=e)})}updateDying(e){this.deathT+=e,this.camera.position.set(this.pos.x,Math.max(.45,this.pos.y+1.55-this.deathT*1.4),this.pos.z),this.camera.rotation.set(this.pitch*.4-this.deathT*.25,this.yaw,Math.min(1.15,this.deathT*1.6)),this.deathT>1.9&&this.endRound(!1)}updatePlaying(e){(this.lookDX!==0||this.lookDY!==0)&&(this.yaw-=this.lookDX*.0042,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-this.lookDY*.0042)),this.lookDX=0,this.lookDY=0);const t=G=>Math.max(-1,Math.min(1,G)),r=t((this.keys.KeyW?1:0)-(this.keys.KeyS?1:0)+this.joyY),o=t((this.keys.KeyD?1:0)-(this.keys.KeyA?1:0)+this.joyX),l=!!this.keys.ShiftLeft||!!this.keys.ShiftRight,u=ii[this.equipped],d=(l?2.6:5.7)*u.speed*(this.scoped?.42:1),p=Math.sin(this.yaw),h=Math.cos(this.yaw);let v=-p*r+h*o,y=-h*r-p*o;const g=Math.hypot(v,y);g>.01?(v=v/g*d,y=y/g*d):(v=0,y=0);const S=this.onGround?1-Math.exp(-13*e):1-Math.exp(-3.2*e);this.vel.x+=(v-this.vel.x)*S,this.vel.z+=(y-this.vel.z)*S,(this.keys.Space||this.touchJump)&&this.onGround&&(this.vel.y=9,this.onGround=!1,this.sfx.jump()),this.touchJump=!1,this.vel.y=Math.max(-18,this.vel.y-24*e),this.pos.y+=this.vel.y*e,bg(this.pos,this.vel.x*e,this.vel.z*e,.42,this.map.colliders,this.map.bounds);const E=G0(this.pos.x,this.pos.z,this.pos.y,.42,this.map.colliders);this.vel.y<=0&&this.pos.y<=E?(this.pos.y=E,this.vel.y=0,this.onGround=!0):this.onGround=this.pos.y<=E+.03;const R=Math.hypot(this.vel.x,this.vel.z);if(this.onGround&&R>.6){this.bobT+=R*e*1.5,this.stepAcc+=R*e;const G=l?2.4:1.9;this.stepAcc>G&&(this.stepAcc=0,this.sfx.step())}const x=this.onGround&&R>.6?Math.sin(this.bobT*2)*.032*Math.min(1,R/5):0,_=(Math.random()-.5)*this.shake*.05,I=(Math.random()-.5)*this.shake*.05,P=(Math.random()-.5)*this.shake*.03;this.camera.position.set(this.pos.x+_,this.pos.y+1.55+x+I,this.pos.z),this.camera.rotation.set(this.pitch+this.recoilPitch+I*.4,this.yaw+this.recoilYaw,P);const b=this.scoped?18:75;Math.abs(this.camera.fov-b)>.05&&(this.camera.fov+=(b-this.camera.fov)*Math.min(1,16*e),this.camera.updateProjectionMatrix());const C=this.weapon;C.visible=!this.scoped;const U=Math.sin(Math.min(1,this.switchAnim)*Math.PI)*(this.switchAnim>=1?0:.16),V=.24+Math.sin(this.bobT)*.006*Math.min(1,R/5)-this.vel.x*.004*h-this.vel.z*.004*-p;C.position.x+=(V-C.position.x)*Math.min(1,12*e),C.position.y=-.22+Math.abs(Math.cos(this.bobT))*.008*Math.min(1,R/5)-U,C.position.z=-.45+this.kick*.055;let w=this.kick*.1;this.reloading&&(w-=Math.sin(Math.min(1,1-this.reloadT/this.reloadTotal)*Math.PI)*.85),this.switchAnim<1&&(w-=Math.sin(this.switchAnim*Math.PI)*.5),C.rotation.x=w,C.rotation.z=this.kick*.02;const N=R>1.2;this.spread=Math.max(0,this.spread-e*u.recover*(N?.45:1)-(this.onGround&&!N?e*1.2:0));const j=ii[this.equipped];if(this.cooldown=Math.max(0,this.cooldown-e),this.switchAnim=Math.min(1,this.switchAnim+e/.28),this.reloading&&(this.reloadT-=e,this.reloadT<=0)){this.reloading=!1;const G=this.ammo[this.equipped],z=Math.min(j.mag-G.mag,G.res);G.mag+=z,G.res-=z}this.firing&&j.auto&&this.tryShoot();const X=this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z);let $=0;for(let G=this.bots.length-1;G>=0;G--){const z=this.bots[G],k=z.update(e,X);z.alive&&$++,k||(z.dispose(this.scene),this.bots.splice(G,1))}for(let G=0;G<this.bots.length;G++)for(let z=G+1;z<this.bots.length;z++){const k=this.bots[G].group.position,H=this.bots[z].group.position,W=H.x-k.x,ie=H.z-k.z,ne=Math.hypot(W,ie);if(ne<.9&&ne>.001){const F=(.9-ne)/2;k.x-=W/ne*F,k.z-=ie/ne*F,H.x+=W/ne*F,H.z+=ie/ne*F}}this.updateNades(e),this.roundT-=e,$===0&&this.bots.every(G=>!G.alive)?(this.roundT=Math.max(this.roundT,.9),this.endRound(!0)):this.roundT<=0&&(this.roundT=0,this.endRound(!1));const D=this.ammo[this.equipped];this.hooks.hud({hp:Math.max(0,Math.ceil(this.hp)),armor:Math.max(0,Math.ceil(this.armor)),mag:D.mag,res:D.res,nades:this.nades,timer:Math.max(0,Math.ceil(this.roundT)),spreadPx:Math.round(this.scoped?2:5+this.spread*30+(N?4:0)),enemies:$,reloading:this.reloading,weapon:`${zn.indexOf(this.equipped)+1}·${ii[this.equipped].short}`,melee:!!ii[this.equipped].melee}),this.hooks.radar({px:this.pos.x,pz:this.pos.z,yaw:this.yaw,dots:this.bots.filter(G=>G.alive).map(G=>({x:G.group.position.x,z:G.group.position.z}))})}}const ZE=["AK-47","AWP","DEAGLE","P90","НОЖ"],mi=(s,e)=>{s&&s.dataset.v!==e&&(s.dataset.v=e,s.textContent=e)},Y0=(s,e)=>{s&&(s.classList.remove(e),s.offsetWidth,s.classList.add(e))},QE=()=>O.jsx("svg",{viewBox:"0 0 16 16",className:"h-3.5 w-3.5 fill-current",children:O.jsx("path",{d:"M8 1a6 6 0 0 0-6 6c0 2.2 1.2 4 3 5v3h2v-2h2v2h2v-3c1.8-1 3-2.8 3-5a6 6 0 0 0-6-6zM5.5 9A1.5 1.5 0 1 1 7 7.5 1.5 1.5 0 0 1 5.5 9zm5 0A1.5 1.5 0 1 1 12 7.5 1.5 1.5 0 0 1 10.5 9z"})}),JE=()=>O.jsx("svg",{viewBox:"0 0 16 16",className:"h-4 w-4 fill-current",children:O.jsx("path",{d:"M8 1 2 3.5v4C2 11.6 4.6 14.6 8 15.5c3.4-.9 6-3.9 6-8v-4L8 1z"})}),Ag=({dim:s})=>O.jsxs("svg",{viewBox:"0 0 16 16",className:`h-4 w-4 ${s?"opacity-25":""}`,children:[O.jsx("path",{className:"fill-current",d:"M9 2h3v1.5h-2l-1 1.6A5 5 0 1 1 6.2 4L9 2z"}),O.jsx("circle",{cx:"8",cy:"9.5",r:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.4"})]}),ew=()=>O.jsx("span",{className:"mx-1.5 rounded-sm border border-[#3a4a5c] bg-[#141c25] px-1.5 py-px text-[10px] font-semibold tracking-wider text-[#9fb2c6]",children:"AK-47"});function us({children:s,className:e,onDown:t,onUp:r,title:o}){return O.jsx("button",{"aria-label":o,className:`pointer-events-auto flex touch-none select-none items-center justify-center rounded-full border font-display transition-transform duration-75 active:scale-90 ${e??""}`,onPointerDown:l=>{l.stopPropagation(),l.currentTarget.setPointerCapture(l.pointerId),t==null||t()},onPointerUp:l=>{l.stopPropagation(),r==null||r()},onPointerCancel:l=>{l.stopPropagation(),r==null||r()},onContextMenu:l=>l.preventDefault(),children:s})}function tw({game:s,activeWeapon:e,onSelectWeapon:t,onPause:r}){const o=ft.useRef(null),l=ft.useRef(null),u=ft.useRef(null),d=54,p=ft.useRef({}),h=()=>{var E;(E=s())==null||E.setMoveInput(0,0),l.current&&(l.current.style.opacity="0"),u.current&&(u.current.style.transform="translate(0px,0px)")},v=E=>{if(E.pointerType==="mouse")return;const R=o.current.getBoundingClientRect(),x=E.clientX<R.width*.42?"move":"look";x==="move"&&Object.values(p.current).some(_=>_.role==="move")||(E.currentTarget.setPointerCapture(E.pointerId),p.current[E.pointerId]={role:x,ox:E.clientX,oy:E.clientY,lx:E.clientX,ly:E.clientY},x==="move"&&l.current&&(l.current.style.opacity="1",l.current.style.left=`${E.clientX}px`,l.current.style.top=`${E.clientY}px`))},y=E=>{var x,_;const R=p.current[E.pointerId];if(R)if(R.role==="move"){let I=E.clientX-R.ox,P=E.clientY-R.oy;const b=Math.hypot(I,P);b>d&&(I=I/b*d,P=P/b*d),u.current&&(u.current.style.transform=`translate(${I}px,${P}px)`),(x=s())==null||x.setMoveInput(I/d,-P/d)}else(_=s())==null||_.addLook(E.clientX-R.lx,E.clientY-R.ly),R.lx=E.clientX,R.ly=E.clientY},g=E=>{const R=p.current[E.pointerId];R&&(R.role==="move"&&h(),delete p.current[E.pointerId])},S=s;return O.jsxs(O.Fragment,{children:[O.jsx("div",{ref:o,className:"absolute inset-0 z-30 touch-none",onPointerDown:v,onPointerMove:y,onPointerUp:g,onPointerCancel:g}),O.jsx("div",{ref:l,className:"pointer-events-none fixed z-30 -ml-[62px] -mt-[62px] h-[124px] w-[124px] rounded-full border-2 border-[#f2a33c]/40 bg-[#f2a33c]/5",style:{opacity:0},children:O.jsx("div",{ref:u,className:"absolute left-1/2 top-1/2 -ml-[26px] -mt-[26px] h-[52px] w-[52px] rounded-full border-2 border-[#f2a33c]/70 bg-[#f2a33c]/25"})}),O.jsx("div",{className:"pointer-events-auto absolute left-1/2 top-16 z-40 flex -translate-x-1/2 gap-1",children:ZE.map((E,R)=>O.jsx(us,{title:E,onDown:()=>t(R),className:`h-9 rounded-md px-2.5 text-[11px] tracking-wider ${e===R?"border-[#f2a33c] bg-[#3a2a12]/90 text-[#f2a33c]":"border-[#2b3844] bg-[#12181f]/80 text-[#8b98a7]"}`,children:O.jsxs("span",{className:"skew-x-0",children:[R+1,"·",E]})},E))}),O.jsx(us,{title:"Пауза",onDown:r,className:"absolute right-3 top-3 z-40 h-10 w-10 border-[#2b3844] bg-[#12181f]/85 text-[#c8d2dd]",children:O.jsx("svg",{viewBox:"0 0 16 16",className:"h-4 w-4 fill-current",children:O.jsx("path",{d:"M4 2h3v12H4zM9 2h3v12H9z"})})}),O.jsxs("div",{className:"absolute bottom-5 right-4 z-40 flex flex-col items-end gap-3",children:[O.jsxs("div",{className:"flex gap-3",children:[O.jsx(us,{title:"Прицел",onDown:()=>{var E;return(E=S())==null?void 0:E.doScope()},className:"h-12 w-12 border-[#2b3844] bg-[#12181f]/85 text-[10px] text-[#c8d2dd]",children:"ОПТ"}),O.jsx(us,{title:"Перезарядка",onDown:()=>{var E;return(E=S())==null?void 0:E.doReload()},className:"h-12 w-12 border-[#2b3844] bg-[#12181f]/85 text-[10px] text-[#c8d2dd]",children:"R"}),O.jsx(us,{title:"Граната",onDown:()=>{var E;return(E=S())==null?void 0:E.doGrenade()},className:"h-12 w-12 border-[#2b3844] bg-[#12181f]/85 text-[#c9d68a]",children:O.jsx(Ag,{})})]}),O.jsxs("div",{className:"flex items-end gap-4",children:[O.jsx(us,{title:"Прыжок",onDown:()=>{var E;return(E=S())==null?void 0:E.doJump()},className:"h-14 w-14 border-[#2b3844] bg-[#12181f]/85 text-[#c8d2dd]",children:O.jsx("svg",{viewBox:"0 0 16 16",className:"h-5 w-5 fill-current",children:O.jsx("path",{d:"M8 2 2 9h4v5h4V9h4z"})})}),O.jsx(us,{title:"Огонь",onDown:()=>{var E;return(E=S())==null?void 0:E.setFiring(!0)},onUp:()=>{var E;return(E=S())==null?void 0:E.setFiring(!1)},className:"h-20 w-20 border-2 border-[#e0453a] bg-[#e0453a]/25 text-[#ff8a80]",children:O.jsxs("svg",{viewBox:"0 0 16 16",className:"h-8 w-8 fill-current",children:[O.jsx("circle",{cx:"8",cy:"8",r:"3"}),O.jsx("path",{d:"M8 1v3M8 12v3M1 8h3M12 8h3",stroke:"currentColor",strokeWidth:"1.6"})]})})]})]})]})}function nw(){var Vt,Xt;const s=ft.useRef(null),e=ft.useRef(null),t=ft.useRef(null),[r,o]=ft.useState("menu"),[l,u]=ft.useState(!1),[d,p]=ft.useState([]),[h,v]=ft.useState(null),[y,g]=ft.useState(null),[S,E]=ft.useState(!1),[R,x]=ft.useState(1),[_,I]=ft.useState(!1),[P,b]=ft.useState(!1),[C,U]=ft.useState(null),[V,w]=ft.useState(!1),[N]=ft.useState(()=>Oi),[j,X]=ft.useState(2),$=ft.useRef(null),D=ft.useRef(null),G=ft.useRef(null),z=ft.useRef(null),k=ft.useRef(null),H=ft.useRef(null),W=ft.useRef(null),ie=ft.useRef(null),ne=ft.useRef(null),F=ft.useRef(null),ee=ft.useRef(null),be=ft.useRef(null),Ue=ft.useRef(null),Fe=ft.useRef(null),se=ft.useRef(null),pe=ft.useRef(null),ue=ft.useRef(null),Se=ft.useRef(0),ze=ft.useRef(0),We=ft.useRef(null),At=ft.useRef(!1),lt=ft.useRef(0),Rt=ft.useRef(!1),St=ft.useRef(1);ft.useEffect(()=>{if(!s.current)return;const tt=Ae=>{const Y=t.current;if(!Y)return;const Ge=Y.getContext("2d");if(!Ge)return;const mt=150,L=mt/2;Ge.clearRect(0,0,mt,mt),Ge.save(),Ge.translate(L,L),Ge.beginPath(),Ge.arc(0,0,L-2,0,7),Ge.fillStyle="rgba(11,17,23,0.85)",Ge.fill(),Ge.strokeStyle="rgba(242,163,60,0.55)",Ge.lineWidth=1.5,Ge.stroke(),Ge.beginPath(),Ge.arc(0,0,(L-2)*.55,0,7),Ge.strokeStyle="rgba(139,152,167,0.22)",Ge.lineWidth=1,Ge.stroke();const M=(L-8)/22,te=Math.cos(Ae.yaw),le=Math.sin(Ae.yaw),de=(ge,Te)=>[ge*te-Te*le,ge*le+Te*te];Ge.strokeStyle="rgba(139,152,167,0.3)",Ge.beginPath(),[[-20,-20],[20,-20],[20,20],[-20,20]].forEach(([ge,Te],Xe)=>{const[Ne,Ce]=de(ge-Ae.px,Te-Ae.pz);Xe===0?Ge.moveTo(Ne*M,Ce*M):Ge.lineTo(Ne*M,Ce*M)}),Ge.closePath(),Ge.stroke();const[Le,me]=de(0,-1);Ge.fillStyle="#f2a33c",Ge.beginPath(),Ge.arc(Le*(L-9),me*(L-9),2.4,0,7),Ge.fill();for(const ge of Ae.dots){const[Te,Xe]=de(ge.x-Ae.px,ge.z-Ae.pz);Math.hypot(Te,Xe)*M>L-8||(Ge.fillStyle="#e0453a",Ge.fillRect(Te*M-2.5,Xe*M-2.5,5,5))}Ge.fillStyle="#eae6dc",Ge.beginPath(),Ge.moveTo(0,-6),Ge.lineTo(4.4,5),Ge.lineTo(-4.4,5),Ge.closePath(),Ge.fill(),Ge.restore()},Dt=Ae=>{mi($.current,String(Ae.hp)),mi(G.current,String(Ae.armor)),D.current&&(D.current.style.width=`${Ae.hp}%`,D.current.style.background=Ae.hp>55?"#7fb069":Ae.hp>25?"#f2a33c":"#e0453a"),z.current&&(z.current.style.width=`${Ae.armor}%`);const Y=k.current;mi(Y,String(Ae.mag)),Y&&(Y.style.color=Ae.mag===0?"#e0453a":Ae.mag<=5?"#f2a33c":"#eae6dc"),mi(H.current,`/ ${Ae.res}`);const Ge=Math.floor(Ae.timer/60),mt=String(Ae.timer%60).padStart(2,"0");mi(W.current,`${Ge}:${mt}`),W.current&&W.current.classList.toggle("blink-fast",Ae.timer<=10),mi(ie.current,`ОСТАЛОСЬ: ${Ae.enemies}`),be.current&&be.current.style.setProperty("--g",`${Ae.spreadPx}px`),ue.current&&(ue.current.style.display=Ae.reloading?"block":"none");const L=Ae.hp>0&&Ae.hp<35;L!==Rt.current&&(Rt.current=L,E(L)),Ae.nades!==St.current&&(St.current=Ae.nades,x(Ae.nades)),mi(We.current,Ae.weapon);const M=parseInt(Ae.weapon,10)-1;Number.isNaN(M)||X(te=>te===M?te:M),Ae.melee&&(mi(k.current,"—"),mi(H.current,"")),Ae.melee!==At.current&&(At.current=Ae.melee,w(Ae.melee))},Ct=new KE(s.current,{hud:Dt,score:(Ae,Y)=>{mi(ne.current,String(Ae)),mi(F.current,String(Y))},kills:Ae=>mi(ee.current,String(Ae)),hitmark:Ae=>{const Y=Ue.current;Y&&(Y.classList.toggle("kill",Ae==="kill"),Y.style.color=Ae==="kill"?"#e0453a":Ae==="head"?"#f2a33c":"#ffffff",Y0(Y,"go"))},damage:(Ae,Y)=>{const Ge=Fe.current;Ge&&(Ge.style.transition="none",Ge.style.opacity=String(Math.min(.9,.3+Ae/40)),window.clearTimeout(Se.current),Se.current=window.setTimeout(()=>{Ge&&(Ge.style.transition="opacity .5s ease",Ge.style.opacity="0")},90)),se.current&&(se.current.style.transform=`rotate(${Y}rad)`),Y0(pe.current,"show")},feed:Ae=>{const Y=++lt.current;p(Ge=>[{...Ae,id:Y},...Ge].slice(0,5)),window.setTimeout(()=>p(Ge=>Ge.filter(mt=>mt.id!==Y)),4200)},banner:Ae=>{window.clearTimeout(ze.current),v({...Ae,id:++lt.current}),ze.current=window.setTimeout(()=>v(null),2700)},radar:tt,over:Ae=>{g(Ae),o("over")},scoped:Ae=>b(Ae),wheel:Ae=>U(Ae),lockedChange:Ae=>{u(Ae);const Y=e.current;!Ae&&Y&&Y.state==="paused"&&o("paused")}});return e.current=Ct,()=>{Ct.dispose(),e.current=null}},[]);const xt=()=>{var tt;p([]),g(null),I(!0),window.setTimeout(()=>I(!1),9e3),o("play"),(tt=e.current)==null||tt.startMatch()};return O.jsxs("div",{className:"font-body relative h-full w-full touch-none select-none overflow-hidden overscroll-none bg-[#0d1218] text-[#eae6dc]",children:[O.jsx("div",{ref:s,className:"absolute inset-0 touch-none"}),(r==="play"||r==="paused")&&O.jsxs("div",{className:"pointer-events-none absolute inset-0 z-20",children:[C&&O.jsxs("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:[O.jsx("div",{className:"absolute inset-0 bg-[#0a0e13]/70"}),O.jsxs("div",{className:"relative h-[420px] w-[420px]",children:[O.jsx("div",{className:"absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2b3844] bg-[#12181f]/90"}),O.jsxs("div",{className:"font-display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center",children:[O.jsx("div",{className:"text-[13px] tracking-widest text-[#f2a33c]",children:(Vt=C.items[C.active])==null?void 0:Vt.short}),O.jsx("div",{className:"mt-0.5 text-[9px] tracking-[0.2em] text-[#8b98a7]",children:(Xt=C.items[C.active])==null?void 0:Xt.cat})]}),C.items.map((tt,Dt)=>{const Ct=C.items.length,Ae=Dt/Ct*Math.PI*2-Math.PI/2,Y=165,Ge=Math.cos(Ae)*Y,mt=Math.sin(Ae)*Y,L=Dt===C.active;return O.jsxs("div",{className:`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center border px-2.5 py-1.5 text-center transition-colors duration-75 ${L?"border-[#f2a33c] bg-[#221409]/95":"border-[#2b3844] bg-[#12181f]/85"}`,style:{left:`calc(50% + ${Ge}px)`,top:`calc(50% + ${mt}px)`},children:[O.jsx("span",{className:`font-display text-[12px] leading-tight ${L?"text-[#f2a33c]":"text-[#c8d2dd]"}`,children:tt.short}),O.jsx("span",{className:"text-[8px] tracking-[0.15em] text-[#8b98a7]",children:tt.cat})]},tt.id)})]}),O.jsx("div",{className:"absolute bottom-14 left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-[0.25em] text-[#8b98a7]",children:"ВЕДИТЕ МЫШЬ — ВЫБОР · ОТПУСТИТЕ TAB"})]}),O.jsx("div",{className:"pointer-events-none absolute inset-0 z-10",style:{background:"radial-gradient(ellipse at center, transparent 58%, rgba(4,7,11,0.45) 100%)"}}),O.jsxs("div",{className:"absolute left-1/2 top-3 flex -translate-x-1/2 items-stretch",children:[O.jsxs("div",{className:"flex items-center gap-2 border border-[#2b4a63] bg-[#101b26]/90 px-4 py-1.5",children:[O.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#6fb7e8]",children:"ВЫ"}),O.jsx("span",{ref:ne,className:"font-display text-xl leading-none text-[#6fb7e8]",children:"0"})]}),O.jsxs("div",{className:"flex flex-col items-center justify-center border-y border-[#3a4a5c] bg-[#12181f]/95 px-5 py-1",children:[O.jsx("span",{ref:W,className:"font-display text-2xl leading-none tracking-wider",children:"1:40"}),O.jsx("span",{ref:ie,className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"ОСТАЛОСЬ: 0"})]}),O.jsxs("div",{className:"flex items-center gap-2 border border-[#5c3a24] bg-[#221409]/90 px-4 py-1.5",children:[O.jsx("span",{ref:F,className:"font-display text-xl leading-none text-[#f2a33c]",children:"0"}),O.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#f2a33c]",children:"БОТЫ"})]})]}),O.jsxs("div",{className:"absolute left-4 top-4",children:[O.jsxs("div",{className:"relative",children:[O.jsx("canvas",{ref:t,width:150,height:150,className:"h-[150px] w-[150px]"}),O.jsx("div",{className:"radar-sweep absolute inset-0 rounded-full border border-[#f2a33c]/30"})]}),O.jsxs("div",{className:"mt-1.5 border border-[#2b3844] bg-[#12181f]/90 px-3 py-1 text-[11px] font-bold tracking-widest text-[#8b98a7]",children:["УСТРАНЕНО: ",O.jsx("span",{ref:ee,className:"font-display text-sm text-[#f2a33c]",children:"0"})]})]}),O.jsx("div",{className:"absolute right-4 top-4 flex flex-col items-end gap-1",children:d.map(tt=>O.jsxs("div",{className:"feed-in flex items-center border border-[#2b3844] bg-[#12181f]/90 px-2.5 py-1 text-[12px] font-semibold",children:[O.jsx("span",{className:tt.byPlayer&&tt.killer==="ВЫ"?"text-[#6fb7e8]":"text-[#f2a33c]",children:tt.killer}),tt.head?O.jsx("span",{className:"mx-1.5 text-[#e0453a]",children:O.jsx(QE,{})}):tt.killer==="Снабжение"||tt.killer==="МАГАЗИН"?O.jsx("span",{className:"mx-1.5 text-[#7fd08a]",children:"»"}):O.jsx(ew,{}),O.jsx("span",{className:tt.victim==="ВЫ"?"text-[#e0453a]":"text-[#c8d2dd]",children:tt.victim})]},tt.id))}),O.jsxs("div",{ref:be,className:"xh absolute left-1/2 top-1/2 z-10 h-0 w-0",style:{display:P?"none":void 0},children:[O.jsx("span",{className:"xh-t"}),O.jsx("span",{className:"xh-b"}),O.jsx("span",{className:"xh-l"}),O.jsx("span",{className:"xh-r"}),O.jsx("span",{className:"xh-dot"})]}),P&&O.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10",children:[O.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 27.5%, rgba(4,7,9,0.985) 29%)"}}),O.jsx("div",{className:"absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/85"}),O.jsx("div",{className:"absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-black/85"}),O.jsx("div",{className:"absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/70"}),O.jsx("div",{className:"absolute bottom-[16%] left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]/70",children:"AWP · 4× ОПТИКА"})]}),O.jsx("div",{ref:Ue,className:"hitmark absolute left-1/2 top-1/2 z-10 -ml-[11px] -mt-[11px]",children:O.jsx("svg",{viewBox:"0 0 22 22",className:"h-[22px] w-[22px] stroke-current",strokeWidth:"2.4",fill:"none",children:O.jsx("path",{d:"M3 3 8 8M19 3l-5 5M3 19l5-5M19 19l-5-5"})})}),O.jsx("div",{className:"absolute left-1/2 top-1/2 z-10",children:O.jsx("div",{ref:pe,className:"dmg-arrow",children:O.jsx("div",{ref:se,children:O.jsx("svg",{viewBox:"0 0 24 24",className:"absolute -translate-x-1/2 fill-[#e0453a]",style:{top:-116,left:0,width:26,height:26,filter:"drop-shadow(0 0 6px rgba(224,69,58,.8))"},children:O.jsx("path",{d:"M12 2 22 18h-7v4h-6v-4H2z"})})})})}),O.jsx("div",{ref:ue,className:"blink-fast absolute left-1/2 top-[57%] -translate-x-1/2 text-[13px] font-bold tracking-[0.3em] text-[#f2a33c]",style:{display:"none"},children:"ПЕРЕЗАРЯДКА"}),h&&O.jsxs("div",{className:"absolute left-1/2 top-[30%] -translate-x-1/2 text-center",children:[O.jsx("div",{className:"banner-in font-display text-5xl md:text-6xl",style:{color:h.tone==="win"?"#f2a33c":h.tone==="lose"?"#e0453a":"#eae6dc",textShadow:"0 4px 0 rgba(0,0,0,.55), 0 0 44px rgba(0,0,0,.6)"},children:h.title}),h.sub&&O.jsx("div",{className:"banner-sub-in mt-2 text-sm font-semibold tracking-[0.35em] text-[#c8d2dd] uppercase",style:{textShadow:"0 2px 6px rgba(0,0,0,.8)"},children:h.sub})]},h.id),O.jsxs("div",{className:"absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-1.5 border border-[#2b3844] bg-[#12181f]/85 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#8b98a7] md:flex",children:[O.jsx("span",{className:"key",children:"TAB"})," АРСЕНАЛ · ",O.jsx("span",{className:"key",children:"1–9"})," / КОЛЕСО — СМЕНА"]}),O.jsxs("div",{className:"absolute bottom-4 left-3 w-40 md:bottom-5 md:left-5 md:w-[240px]",children:[O.jsxs("div",{className:"flex items-end gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2.5",children:[O.jsx("svg",{viewBox:"0 0 24 24",className:"mb-1 h-6 w-6 fill-[#e0453a]",children:O.jsx("path",{d:"M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"})}),O.jsxs("div",{className:"flex-1",children:[O.jsxs("div",{className:"flex items-baseline justify-between",children:[O.jsx("span",{ref:$,className:"font-display text-3xl leading-none",children:"100"}),O.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"HP"})]}),O.jsx("div",{className:"mt-1.5 h-[7px] w-full bg-[#232d38]",children:O.jsx("div",{ref:D,className:"h-full w-full transition-[width] duration-200"})})]})]}),O.jsxs("div",{className:"mt-1.5 flex items-center gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2",children:[O.jsx("span",{className:"text-[#6fb7e8]",children:O.jsx(JE,{})}),O.jsx("div",{className:"flex-1",children:O.jsx("div",{className:"h-[5px] w-full bg-[#232d38]",children:O.jsx("div",{ref:z,className:"h-full w-full bg-[#6fb7e8] transition-[width] duration-200"})})}),O.jsx("span",{ref:G,className:"font-display text-base leading-none text-[#6fb7e8]",children:"100"})]})]}),O.jsxs("div",{className:"absolute bottom-5 right-5 text-right",children:[O.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/90 px-5 py-2.5",children:[O.jsxs("div",{className:"flex items-baseline justify-end gap-2",children:[V&&O.jsx("span",{className:"font-display text-sm tracking-widest text-[#f2a33c]",children:"БЛИЖНИЙ БОЙ"}),O.jsx("span",{ref:k,className:`font-display text-5xl leading-none ${V?"hidden":""}`,children:"30"}),O.jsx("span",{ref:H,className:`font-display text-lg leading-none text-[#8b98a7] ${V?"hidden":""}`,children:"/ 90"})]}),O.jsxs("div",{className:"mt-1 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]",children:[O.jsx("span",{ref:We,children:"3·DEAGLE"}),O.jsx("span",{className:"ml-2 text-[#5f6d7d]",children:"TAB — АРСЕНАЛ"})]})]}),O.jsxs("div",{className:"mt-1.5 flex items-center justify-end gap-1.5 border border-[#2b3844] bg-[#12181f]/90 px-4 py-1.5 text-[#c9d68a]",children:[O.jsx("span",{className:"mr-1 text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"ГРАНАТЫ"}),[0,1,2].map(tt=>O.jsx(Ag,{dim:tt>=R},tt))]})]}),_&&!N&&O.jsx("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 border border-[#2b3844] bg-[#12181f]/85 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-[#8b98a7]",children:"WASD — движение · ЛКМ — огонь · TAB — арсенал · 1–5 / колесо — смена · ПКМ — оптика · R — перезарядка · G — граната"}),_&&N&&O.jsxs("div",{className:"absolute bottom-32 left-4 z-40 max-w-[46vw] border border-[#2b3844] bg-[#12181f]/85 px-3 py-1.5 text-[10px] font-semibold leading-relaxed tracking-wider text-[#8b98a7]",children:["СЛЕВА — ДЖОЙСТИК · СПРАВА — ОБЗОР",O.jsx("br",{}),"КРАСНАЯ КНОПКА — ОГОНЬ"]}),!N&&!l&&r==="play"&&O.jsxs("div",{className:"absolute left-1/2 top-[62%] -translate-x-1/2 border border-[#f2a33c]/60 bg-[#221409]/90 px-5 py-2 text-center text-sm font-bold tracking-[0.14em] text-[#f2a33c]",children:["ДВИГАЙТЕ МЫШЬ — ОБЗОР · ЛКМ — ОГОНЬ",O.jsx("div",{className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"R — ПЕРЕЗАРЯДКА · G — ГРАНАТА · КРАЙ ЭКРАНА: ВЕРНИТЕ МЫШЬ В ЦЕНТР"})]}),O.jsx("div",{ref:Fe,className:"vignette absolute inset-0 z-30"}),S&&O.jsx("div",{className:"lowhp-pulse pointer-events-none absolute inset-0 z-30"})]}),N&&r==="play"&&O.jsx(tw,{game:()=>e.current,activeWeapon:j,onSelectWeapon:tt=>{var Dt;return(Dt=e.current)==null?void 0:Dt.switchWeaponByIndex(tt)},onPause:()=>{var tt;return(tt=e.current)==null?void 0:tt.pause()}}),r==="menu"&&O.jsxs("div",{className:"absolute inset-0 z-40",children:[O.jsx("div",{className:"menu-scan absolute inset-0",style:{background:"linear-gradient(100deg, rgba(10,14,19,.96) 0%, rgba(10,14,19,.92) 44%, rgba(10,14,19,.55) 72%, rgba(10,14,19,.25) 100%)"}}),O.jsx("div",{className:"smoke absolute inset-0"}),O.jsx("div",{className:"hazard hazard-anim absolute top-0 left-0 h-2 w-full opacity-80"}),O.jsx("div",{className:"hazard hazard-anim absolute bottom-0 left-0 h-2 w-full opacity-80"}),O.jsxs("div",{className:"relative flex h-full flex-col justify-start gap-8 overflow-y-auto px-6 py-10 md:flex-row md:items-center md:justify-between md:overflow-visible md:px-16 md:py-0 lg:px-24",children:[O.jsxs("div",{className:"max-w-xl",children:[O.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[O.jsx("span",{className:"inline-block h-[3px] w-10 bg-[#f2a33c]"}),O.jsx("span",{className:"text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]",children:"БРАУЗЕРНЫЙ ШУТЕР · THREE.JS"})]}),O.jsxs("h1",{className:"title-glow font-display text-[64px] leading-[0.9] md:text-[120px]",children:["CS",O.jsx("span",{className:"text-[#f2a33c]",children:" 3D"})]}),O.jsxs("p",{className:"mt-5 max-w-md text-[15px] leading-relaxed text-[#aab6c4]",children:["Зачистите точку. AK-47, гранаты и живые боты, которые стрейфят и дают очередь в ответ. Возьмите ",O.jsx("span",{className:"font-bold text-[#eae6dc]",children:"3 раунда"})," быстрее, чем вас застрелят."]}),O.jsx("button",{onClick:xt,className:"btn-blade mt-8 inline-block bg-[#f2a33c] px-12 py-4 text-xl text-[#14100a] hover:bg-[#ffc069]",children:O.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В БОЙ"})}),O.jsx("div",{className:"mt-4 text-[11px] font-semibold tracking-[0.25em] text-[#5f6d7d]",children:N?"СЕНСОРНОЕ УПРАВЛЕНИЕ · ДЖОЙСТИК + ЗОНА ОБЗОРА":"КЛИК — ЗАХВАТ МЫШИ · ESC — ПАУЗА"})]}),O.jsxs("div",{className:"flex w-full max-w-sm flex-col gap-4",children:[O.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[O.jsxs("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:["УПРАВЛЕНИЕ ",N&&O.jsx("span",{className:"ml-1 text-[#6fb7e8]",children:"· СЕНСОР"})]}),N?O.jsxs("div",{className:"grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 text-[12px] text-[#aab6c4]",children:[O.jsx("span",{className:"key",children:"◐"}),O.jsx("span",{children:"левая зона — джойстик движения"}),O.jsx("span",{className:"key",children:"◑"}),O.jsx("span",{children:"правая зона — обзор (веди пальцем)"}),O.jsx("span",{className:"key",children:"●"}),O.jsx("span",{children:"красная кнопка — огонь (удерживай)"}),O.jsx("span",{className:"key",children:"R"}),O.jsx("span",{children:"кнопка перезарядки"}),O.jsx("span",{className:"key",children:"G"}),O.jsx("span",{children:"кнопка гранаты"}),O.jsx("span",{className:"key",children:"⌖"}),O.jsx("span",{children:"кнопка прыжка — запрыгивай на ящики и контейнеры"}),O.jsx("span",{className:"key",children:"1–5"}),O.jsx("span",{children:"слоты оружия сверху — тап для выбора"}),O.jsx("span",{className:"key",children:"ОПТ"}),O.jsx("span",{children:"оптика AWP ×4"}),O.jsx("span",{className:"key",children:"▮▮"}),O.jsx("span",{children:"пауза (справа сверху)"})]}):O.jsxs("div",{className:"grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 text-[12px] text-[#aab6c4]",children:[O.jsxs("span",{children:[O.jsx("span",{className:"key",children:"W"})," ",O.jsx("span",{className:"key",children:"A"})," ",O.jsx("span",{className:"key",children:"S"})," ",O.jsx("span",{className:"key",children:"D"})]}),O.jsx("span",{children:"передвижение"}),O.jsx("span",{children:O.jsx("span",{className:"key",children:"МЫШЬ"})}),O.jsx("span",{children:"обзор — движение мыши, курсор в бою скрыт"}),O.jsx("span",{children:O.jsx("span",{className:"key",children:"ЛКМ"})}),O.jsx("span",{children:"огонь из AK-47"}),O.jsx("span",{children:O.jsx("span",{className:"key",children:"R"})}),O.jsx("span",{children:"перезарядка"}),O.jsx("span",{children:O.jsx("span",{className:"key",children:"G"})}),O.jsx("span",{children:"граната"}),O.jsx("span",{children:O.jsx("span",{className:"key",children:"SHIFT"})}),O.jsx("span",{children:"тихий шаг — точность выше"}),O.jsx("span",{children:O.jsx("span",{className:"key",children:"SPACE"})}),O.jsx("span",{children:"прыжок — можно запрыгивать на ящики и контейнеры"}),O.jsx("span",{children:O.jsx("span",{className:"key",children:"TAB"})}),O.jsx("span",{children:"арсенал: AK-47, AWP, Deagle, P90 и нож"}),O.jsxs("span",{children:[O.jsx("span",{className:"key",children:"1"}),"–",O.jsx("span",{className:"key",children:"9"})," / колесо"]}),O.jsx("span",{children:"быстрая смена оружия"}),O.jsx("span",{children:O.jsx("span",{className:"key",children:"ПКМ"})}),O.jsx("span",{children:"оптика AWP ×4"}),O.jsx("span",{children:O.jsx("span",{className:"key",children:"ESC"})}),O.jsx("span",{children:"пауза"})]})]}),O.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[O.jsx("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:"БРИФИНГ"}),O.jsxs("ul",{className:"space-y-1.5 px-4 py-3 text-[12px] leading-relaxed text-[#aab6c4]",children:[O.jsxs("li",{children:["Карта — ",O.jsx("span",{className:"font-bold text-[#f2a33c]",children:"Dust II"}),": лонг A, мид с дверями, туннели на B."]}),O.jsxs("li",{children:["Арсенал — ",O.jsx("span",{className:"key",children:"TAB"}),": AK-47, AWP, Deagle, P90 и нож. Колесо мыши листает стволы."]}),O.jsxs("li",{children:[O.jsx("span",{className:"font-bold text-[#eae6dc]",children:"Хедшот"})," — урон ×4. AWP убивает с тела, ",O.jsx("span",{className:"key",children:"ПКМ"})," — оптика ×4."]}),O.jsxs("li",{children:[O.jsx("span",{className:"key",children:"SPACE"})," — прыжок: запрыгивайте на ящики, бочки и контейнеры для обзора сверху."]}),O.jsxs("li",{children:["Матч до ",O.jsx("span",{className:"font-bold text-[#f2a33c]",children:"3 побед"}),", раунд — 1:40. Боты злеют с каждым раундом."]})]})]})]})]})]}),r==="paused"&&O.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/85",children:O.jsxs("div",{className:"w-[380px] border border-[#2b3844] bg-[#12181f]",children:[O.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),O.jsxs("div",{className:"px-8 py-7",children:[O.jsx("div",{className:"font-display text-4xl tracking-wider",children:"ПАУЗА"}),O.jsx("div",{className:"mt-1 text-[11px] font-semibold tracking-[0.3em] text-[#8b98a7]",children:"ОПЕРАЦИЯ ПРИОСТАНОВЛЕНА"}),O.jsxs("div",{className:"mt-6 flex flex-col gap-2.5",children:[O.jsx("button",{onClick:()=>{var tt;(tt=e.current)==null||tt.resume(),o("play")},className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:O.jsx("span",{className:"inline-block skew-x-[8deg]",children:"ПРОДОЛЖИТЬ"})}),O.jsx("button",{onClick:()=>{var tt;(tt=e.current)==null||tt.toMenu(),o("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:O.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В МЕНЮ"})})]}),O.jsxs("div",{className:"mt-6 border-t border-[#2b3844] pt-4 text-[11px] leading-relaxed text-[#5f6d7d]",children:[O.jsx("span",{className:"key",children:"W"}),O.jsx("span",{className:"key",children:"A"}),O.jsx("span",{className:"key",children:"S"}),O.jsx("span",{className:"key",children:"D"})," движение · ",O.jsx("span",{className:"key",children:"ЛКМ"})," огонь · ",O.jsx("span",{className:"key",children:"R"})," перезарядка · ",O.jsx("span",{className:"key",children:"G"})," граната"]})]})]})}),r==="over"&&y&&O.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/80",children:O.jsxs("div",{className:"w-[440px] border border-[#2b3844] bg-[#12181f]",children:[O.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),O.jsxs("div",{className:"px-10 py-8 text-center",children:[O.jsx("div",{className:"text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]",children:"МАТЧ ЗАВЕРШЁН"}),O.jsx("div",{className:"title-glow font-display mt-2 text-6xl",style:{color:y.result==="victory"?"#f2a33c":"#e0453a"},children:y.result==="victory"?"ПОБЕДА":"ПОРАЖЕНИЕ"}),O.jsxs("div",{className:"font-display mt-3 text-3xl text-[#eae6dc]",children:[O.jsx("span",{className:"text-[#6fb7e8]",children:y.won}),O.jsx("span",{className:"mx-2 text-[#5f6d7d]",children:":"}),O.jsx("span",{className:"text-[#f2a33c]",children:y.lost})]}),O.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-2.5",children:[O.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[O.jsx("div",{className:"font-display text-3xl text-[#f2a33c]",children:y.kills}),O.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:"УСТРАНЕНО"})]}),O.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[O.jsx("div",{className:"font-display text-3xl text-[#e0453a]",children:y.deaths}),O.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:"СМЕРТЕЙ"})]})]}),O.jsxs("div",{className:"mt-7 flex flex-col gap-2.5",children:[O.jsx("button",{onClick:xt,className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:O.jsx("span",{className:"inline-block skew-x-[8deg]",children:"ЕЩЁ РАЗ"})}),O.jsx("button",{onClick:()=>{var tt;(tt=e.current)==null||tt.toMenu(),o("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:O.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В МЕНЮ"})})]})]})]})})]})}gx.createRoot(document.getElementById("root")).render(O.jsx(nw,{}));
