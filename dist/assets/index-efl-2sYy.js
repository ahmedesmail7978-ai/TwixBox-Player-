(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function bv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Lu={exports:{}},Va={},Nu={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Rv(){if(jp)return mt;jp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,P={};function x(F,Q,Oe){this.props=F,this.context=Q,this.refs=P,this.updater=Oe||E}x.prototype.isReactComponent={},x.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function v(){}v.prototype=x.prototype;function U(F,Q,Oe){this.props=F,this.context=Q,this.refs=P,this.updater=Oe||E}var O=U.prototype=new v;O.constructor=U,T(O,x.prototype),O.isPureReactComponent=!0;var R=Array.isArray,D=Object.prototype.hasOwnProperty,b={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(F,Q,Oe){var Xe,Ve={},K=null,xe=null;if(Q!=null)for(Xe in Q.ref!==void 0&&(xe=Q.ref),Q.key!==void 0&&(K=""+Q.key),Q)D.call(Q,Xe)&&!C.hasOwnProperty(Xe)&&(Ve[Xe]=Q[Xe]);var pe=arguments.length-2;if(pe===1)Ve.children=Oe;else if(1<pe){for(var ge=Array(pe),Ie=0;Ie<pe;Ie++)ge[Ie]=arguments[Ie+2];Ve.children=ge}if(F&&F.defaultProps)for(Xe in pe=F.defaultProps,pe)Ve[Xe]===void 0&&(Ve[Xe]=pe[Xe]);return{$$typeof:s,type:F,key:K,ref:xe,props:Ve,_owner:b.current}}function L(F,Q){return{$$typeof:s,type:F.type,key:Q,ref:F.ref,props:F.props,_owner:F._owner}}function z(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function k(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Oe){return Q[Oe]})}var W=/\/+/g;function re(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?k(""+F.key):Q.toString(36)}function ce(F,Q,Oe,Xe,Ve){var K=typeof F;(K==="undefined"||K==="boolean")&&(F=null);var xe=!1;if(F===null)xe=!0;else switch(K){case"string":case"number":xe=!0;break;case"object":switch(F.$$typeof){case s:case e:xe=!0}}if(xe)return xe=F,Ve=Ve(xe),F=Xe===""?"."+re(xe,0):Xe,R(Ve)?(Oe="",F!=null&&(Oe=F.replace(W,"$&/")+"/"),ce(Ve,Q,Oe,"",function(Ie){return Ie})):Ve!=null&&(z(Ve)&&(Ve=L(Ve,Oe+(!Ve.key||xe&&xe.key===Ve.key?"":(""+Ve.key).replace(W,"$&/")+"/")+F)),Q.push(Ve)),1;if(xe=0,Xe=Xe===""?".":Xe+":",R(F))for(var pe=0;pe<F.length;pe++){K=F[pe];var ge=Xe+re(K,pe);xe+=ce(K,Q,Oe,ge,Ve)}else if(ge=g(F),typeof ge=="function")for(F=ge.call(F),pe=0;!(K=F.next()).done;)K=K.value,ge=Xe+re(K,pe++),xe+=ce(K,Q,Oe,ge,Ve);else if(K==="object")throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return xe}function j(F,Q,Oe){if(F==null)return F;var Xe=[],Ve=0;return ce(F,Xe,"","",function(K){return Q.call(Oe,K,Ve++)}),Xe}function fe(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(Oe){(F._status===0||F._status===-1)&&(F._status=1,F._result=Oe)},function(Oe){(F._status===0||F._status===-1)&&(F._status=2,F._result=Oe)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var Z={current:null},Y={transition:null},le={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:Y,ReactCurrentOwner:b};function ue(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:j,forEach:function(F,Q,Oe){j(F,function(){Q.apply(this,arguments)},Oe)},count:function(F){var Q=0;return j(F,function(){Q++}),Q},toArray:function(F){return j(F,function(Q){return Q})||[]},only:function(F){if(!z(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},mt.Component=x,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=U,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,mt.act=ue,mt.cloneElement=function(F,Q,Oe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Xe=T({},F.props),Ve=F.key,K=F.ref,xe=F._owner;if(Q!=null){if(Q.ref!==void 0&&(K=Q.ref,xe=b.current),Q.key!==void 0&&(Ve=""+Q.key),F.type&&F.type.defaultProps)var pe=F.type.defaultProps;for(ge in Q)D.call(Q,ge)&&!C.hasOwnProperty(ge)&&(Xe[ge]=Q[ge]===void 0&&pe!==void 0?pe[ge]:Q[ge])}var ge=arguments.length-2;if(ge===1)Xe.children=Oe;else if(1<ge){pe=Array(ge);for(var Ie=0;Ie<ge;Ie++)pe[Ie]=arguments[Ie+2];Xe.children=pe}return{$$typeof:s,type:F.type,key:Ve,ref:K,props:Xe,_owner:xe}},mt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},mt.createElement=S,mt.createFactory=function(F){var Q=S.bind(null,F);return Q.type=F,Q},mt.createRef=function(){return{current:null}},mt.forwardRef=function(F){return{$$typeof:d,render:F}},mt.isValidElement=z,mt.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:fe}},mt.memo=function(F,Q){return{$$typeof:p,type:F,compare:Q===void 0?null:Q}},mt.startTransition=function(F){var Q=Y.transition;Y.transition={};try{F()}finally{Y.transition=Q}},mt.unstable_act=ue,mt.useCallback=function(F,Q){return Z.current.useCallback(F,Q)},mt.useContext=function(F){return Z.current.useContext(F)},mt.useDebugValue=function(){},mt.useDeferredValue=function(F){return Z.current.useDeferredValue(F)},mt.useEffect=function(F,Q){return Z.current.useEffect(F,Q)},mt.useId=function(){return Z.current.useId()},mt.useImperativeHandle=function(F,Q,Oe){return Z.current.useImperativeHandle(F,Q,Oe)},mt.useInsertionEffect=function(F,Q){return Z.current.useInsertionEffect(F,Q)},mt.useLayoutEffect=function(F,Q){return Z.current.useLayoutEffect(F,Q)},mt.useMemo=function(F,Q){return Z.current.useMemo(F,Q)},mt.useReducer=function(F,Q,Oe){return Z.current.useReducer(F,Q,Oe)},mt.useRef=function(F){return Z.current.useRef(F)},mt.useState=function(F){return Z.current.useState(F)},mt.useSyncExternalStore=function(F,Q,Oe){return Z.current.useSyncExternalStore(F,Q,Oe)},mt.useTransition=function(){return Z.current.useTransition()},mt.version="18.3.1",mt}var Zp;function ud(){return Zp||(Zp=1,Nu.exports=Rv()),Nu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Cv(){if(Jp)return Va;Jp=1;var s=ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var _,y={},g=null,E=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(E=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(y[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)y[_]===void 0&&(y[_]=h[_]);return{$$typeof:e,type:d,key:g,ref:E,props:y,_owner:o.current}}return Va.Fragment=t,Va.jsx=u,Va.jsxs=u,Va}var Qp;function Pv(){return Qp||(Qp=1,Lu.exports=Cv()),Lu.exports}var q=Pv(),ol={},Du={exports:{}},zn={},Iu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Lv(){return em||(em=1,(function(s){function e(Y,le){var ue=Y.length;Y.push(le);e:for(;0<ue;){var F=ue-1>>>1,Q=Y[F];if(0<o(Q,le))Y[F]=le,Y[ue]=Q,ue=F;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var le=Y[0],ue=Y.pop();if(ue!==le){Y[0]=ue;e:for(var F=0,Q=Y.length,Oe=Q>>>1;F<Oe;){var Xe=2*(F+1)-1,Ve=Y[Xe],K=Xe+1,xe=Y[K];if(0>o(Ve,ue))K<Q&&0>o(xe,Ve)?(Y[F]=xe,Y[K]=ue,F=K):(Y[F]=Ve,Y[Xe]=ue,F=Xe);else if(K<Q&&0>o(xe,ue))Y[F]=xe,Y[K]=ue,F=K;else break e}}return le}function o(Y,le){var ue=Y.sortIndex-le.sortIndex;return ue!==0?ue:Y.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],p=[],_=1,y=null,g=3,E=!1,T=!1,P=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(Y){for(var le=t(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=Y)r(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(p)}}function R(Y){if(P=!1,O(Y),!T)if(t(h)!==null)T=!0,fe(D);else{var le=t(p);le!==null&&Z(R,le.startTime-Y)}}function D(Y,le){T=!1,P&&(P=!1,v(S),S=-1),E=!0;var ue=g;try{for(O(le),y=t(h);y!==null&&(!(y.expirationTime>le)||Y&&!k());){var F=y.callback;if(typeof F=="function"){y.callback=null,g=y.priorityLevel;var Q=F(y.expirationTime<=le);le=s.unstable_now(),typeof Q=="function"?y.callback=Q:y===t(h)&&r(h),O(le)}else r(h);y=t(h)}if(y!==null)var Oe=!0;else{var Xe=t(p);Xe!==null&&Z(R,Xe.startTime-le),Oe=!1}return Oe}finally{y=null,g=ue,E=!1}}var b=!1,C=null,S=-1,L=5,z=-1;function k(){return!(s.unstable_now()-z<L)}function W(){if(C!==null){var Y=s.unstable_now();z=Y;var le=!0;try{le=C(!0,Y)}finally{le?re():(b=!1,C=null)}}else b=!1}var re;if(typeof U=="function")re=function(){U(W)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,j=ce.port2;ce.port1.onmessage=W,re=function(){j.postMessage(null)}}else re=function(){x(W,0)};function fe(Y){C=Y,b||(b=!0,re())}function Z(Y,le){S=x(function(){Y(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){T||E||(T=!0,fe(D))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var le=3;break;default:le=g}var ue=g;g=le;try{return Y()}finally{g=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,le){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ue=g;g=Y;try{return le()}finally{g=ue}},s.unstable_scheduleCallback=function(Y,le,ue){var F=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?F+ue:F):ue=F,Y){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ue+Q,Y={id:_++,callback:le,priorityLevel:Y,startTime:ue,expirationTime:Q,sortIndex:-1},ue>F?(Y.sortIndex=ue,e(p,Y),t(h)===null&&Y===t(p)&&(P?(v(S),S=-1):P=!0,Z(R,ue-F))):(Y.sortIndex=Q,e(h,Y),T||E||(T=!0,fe(D))),Y},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(Y){var le=g;return function(){var ue=g;g=le;try{return Y.apply(this,arguments)}finally{g=ue}}}})(Uu)),Uu}var tm;function Nv(){return tm||(tm=1,Iu.exports=Lv()),Iu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Dv(){if(nm)return zn;nm=1;var s=ud(),e=Nv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function g(n){return h.call(y,n)?!0:h.call(_,n)?!1:p.test(n)?y[n]=!0:(_[n]=!0,!1)}function E(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||E(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function P(n,i,a,c,f,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new P(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new P(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new P(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new P(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new P(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new P(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new P(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new P(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new P(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,U);x[i]=new P(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,U);x[i]=new P(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,U);x[i]=new P(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new P(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new P(n,1,!1,n.toLowerCase(),null,!0,!0)});function O(n,i,a,c){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,c)&&(a=null),c||f===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),k=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),Y=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,F;function Q(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Oe=!1;function Xe(n,i){if(!n||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var f=oe.stack.split(`
`),m=c.stack.split(`
`),w=f.length-1,I=m.length-1;1<=w&&0<=I&&f[w]!==m[I];)I--;for(;1<=w&&0<=I;w--,I--)if(f[w]!==m[I]){if(w!==1||I!==1)do if(w--,I--,0>I||f[w]!==m[I]){var B=`
`+f[w].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=w&&0<=I);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Q(n):""}function Ve(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function K(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case C:return"Fragment";case b:return"Portal";case L:return"Profiler";case S:return"StrictMode";case re:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case W:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j:return i=n.displayName||null,i!==null?i:K(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return K(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ge(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ie(n){var i=ge(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ye(n){n._valueTracker||(n._valueTracker=Ie(n))}function bt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ge(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function et(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ft(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function vt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(n,i){i=i.checked,i!=null&&O(n,"checked",i,!1)}function Ut(n,i){dt(n,i);var a=pe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Gt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Gt(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Yt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Gt(n,i,a){(i!=="number"||et(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Bt=Array.isArray;function _t(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Rt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function H(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Bt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function tn(n,i){var a=pe(i.value),c=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function yt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function N(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?N(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $,se=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function de(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function he(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function ve(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=he(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Ne=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(n,i){if(i){if(Ne[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function Qe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var tt=null,rt=null,V=null;function Re(n){if(n=Aa(n)){if(typeof tt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Mo(i),tt(n.stateNode,n.type,i))}}function me(n){rt?V?V.push(n):V=[n]:rt=n}function Le(){if(rt){var n=rt,i=V;if(V=rt=null,Re(n),i)for(n=0;n<i.length;n++)Re(i[n])}}function Ue(n,i){return n(i)}function _e(){}var qe=!1;function Ge(n,i,a){if(qe)return n(i,a);qe=!0;try{return Ue(n,i,a)}finally{qe=!1,(rt!==null||V!==null)&&(_e(),Le())}}function Ft(n,i){var a=n.stateNode;if(a===null)return null;var c=Mo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Pt=!1;if(d)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){Pt=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{Pt=!1}function Qn(n,i,a,c,f,m,w,I,B){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(Me){this.onError(Me)}}var Ir=!1,ds=null,Ur=!1,Fr=null,ec={onError:function(n){Ir=!0,ds=n}};function io(n,i,a,c,f,m,w,I,B){Ir=!1,ds=null,Qn.apply(ec,arguments)}function ro(n,i,a,c,f,m,w,I,B){if(io.apply(this,arguments),Ir){if(Ir){var oe=ds;Ir=!1,ds=null}else throw Error(t(198));Ur||(Ur=!0,Fr=oe)}}function Cn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function hs(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function aa(n){if(Cn(n)!==n)throw Error(t(188))}function so(n){var i=n.alternate;if(!i){if(i=Cn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return aa(f),n;if(m===c)return aa(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=m;else{for(var w=!1,I=f.child;I;){if(I===a){w=!0,a=f,c=m;break}if(I===c){w=!0,c=f,a=m;break}I=I.sibling}if(!w){for(I=m.child;I;){if(I===a){w=!0,a=m,c=f;break}if(I===c){w=!0,c=m,a=f;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Or(n){return n=so(n),n!==null?oa(n):null}function oa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=oa(n);if(i!==null)return i;n=n.sibling}return null}var kr=e.unstable_scheduleCallback,la=e.unstable_cancelCallback,ao=e.unstable_shouldYield,tc=e.unstable_requestPaint,Kt=e.unstable_now,nc=e.unstable_getCurrentPriorityLevel,ca=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,X=e.unstable_NormalPriority,ae=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,be=null;function ze(n){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:ot,Ye=Math.log,Je=Math.LN2;function ot(n){return n>>>=0,n===0?32:31-(Ye(n)/Je|0)|0}var lt=64,je=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ot(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var I=w&~f;I!==0?c=Et(I):(m&=w,m!==0&&(c=Et(m)))}else w=a&~f,w!==0?c=Et(w):m!==0&&(c=Et(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ae(i),f=1<<a,c|=n[a],i&=~f;return c}function Wt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-Ae(m),I=1<<w,B=f[w];B===-1?((I&a)===0||(I&c)!==0)&&(f[w]=Wt(I,i)):B<=i&&(n.expiredLanes|=I),m&=~I}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ke(){var n=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),n}function gn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ht(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ae(i),n[i]=a}function Dn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-Ae(a),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~m}}function In(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ae(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var pt=0;function ki(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Lt,zt,li,Dt,ci,Mi=!1,Br=[],sr=null,ar=null,or=null,ua=new Map,fa=new Map,lr=[],$0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(n,i){switch(n){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ua.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(i.pointerId)}}function da(n,i,a,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Aa(i),i!==null&&zt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function j0(n,i,a,c,f){switch(i){case"focusin":return sr=da(sr,n,i,a,c,f),!0;case"dragenter":return ar=da(ar,n,i,a,c,f),!0;case"mouseover":return or=da(or,n,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return ua.set(m,da(ua.get(m)||null,n,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,fa.set(m,da(fa.get(m)||null,n,i,a,c,f)),!0}return!1}function Id(n){var i=zr(n.target);if(i!==null){var a=Cn(i);if(a!==null){if(i=a.tag,i===13){if(i=hs(a),i!==null){n.blockedOn=i,ci(n.priority,function(){li(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function oo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=rc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ce=c,a.target.dispatchEvent(c),Ce=null}else return i=Aa(a),i!==null&&zt(i),n.blockedOn=a,!1;i.shift()}return!0}function Ud(n,i,a){oo(n)&&a.delete(i)}function Z0(){Mi=!1,sr!==null&&oo(sr)&&(sr=null),ar!==null&&oo(ar)&&(ar=null),or!==null&&oo(or)&&(or=null),ua.forEach(Ud),fa.forEach(Ud)}function ha(n,i){n.blockedOn===i&&(n.blockedOn=null,Mi||(Mi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Z0)))}function pa(n){function i(f){return ha(f,n)}if(0<Br.length){ha(Br[0],n);for(var a=1;a<Br.length;a++){var c=Br[a];c.blockedOn===n&&(c.blockedOn=null)}}for(sr!==null&&ha(sr,n),ar!==null&&ha(ar,n),or!==null&&ha(or,n),ua.forEach(i),fa.forEach(i),a=0;a<lr.length;a++)c=lr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)Id(a),a.blockedOn===null&&lr.shift()}var ps=R.ReactCurrentBatchConfig,lo=!0;function J0(n,i,a,c){var f=pt,m=ps.transition;ps.transition=null;try{pt=1,ic(n,i,a,c)}finally{pt=f,ps.transition=m}}function Q0(n,i,a,c){var f=pt,m=ps.transition;ps.transition=null;try{pt=4,ic(n,i,a,c)}finally{pt=f,ps.transition=m}}function ic(n,i,a,c){if(lo){var f=rc(n,i,a,c);if(f===null)Sc(n,i,c,co,a),Dd(n,c);else if(j0(f,n,i,a,c))c.stopPropagation();else if(Dd(n,c),i&4&&-1<$0.indexOf(n)){for(;f!==null;){var m=Aa(f);if(m!==null&&Lt(m),m=rc(n,i,a,c),m===null&&Sc(n,i,c,co,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else Sc(n,i,c,null,a)}}var co=null;function rc(n,i,a,c){if(co=null,n=Qe(c),n=zr(n),n!==null)if(i=Cn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=hs(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return co=n,null}function Fd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nc()){case ca:return 1;case A:return 4;case X:case ae:return 16;case ne:return 536870912;default:return 16}default:return 16}}var cr=null,sc=null,uo=null;function Od(){if(uo)return uo;var n,i=sc,a=i.length,c,f="value"in cr?cr.value:cr.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===f[m-c];c++);return uo=f.slice(n,1<c?1-c:void 0)}function fo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ho(){return!0}function kd(){return!1}function Wn(n){function i(a,c,f,m,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ho:kd,this.isPropagationStopped=kd,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=Wn(ms),ma=ue({},ms,{view:0,detail:0}),eg=Wn(ma),oc,lc,ga,po=ue({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ga&&(ga&&n.type==="mousemove"?(oc=n.screenX-ga.screenX,lc=n.screenY-ga.screenY):lc=oc=0,ga=n),oc)},movementY:function(n){return"movementY"in n?n.movementY:lc}}),Bd=Wn(po),tg=ue({},po,{dataTransfer:0}),ng=Wn(tg),ig=ue({},ma,{relatedTarget:0}),cc=Wn(ig),rg=ue({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),sg=Wn(rg),ag=ue({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),og=Wn(ag),lg=ue({},ms,{data:0}),zd=Wn(lg),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=fg[n])?!!i[n]:!1}function uc(){return dg}var hg=ue({},ma,{key:function(n){if(n.key){var i=cg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=fo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ug[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(n){return n.type==="keypress"?fo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?fo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),pg=Wn(hg),mg=ue({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=Wn(mg),gg=ue({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),vg=Wn(gg),_g=ue({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=Wn(_g),yg=ue({},po,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Sg=Wn(yg),Mg=[9,13,27,32],fc=d&&"CompositionEvent"in window,va=null;d&&"documentMode"in document&&(va=document.documentMode);var Eg=d&&"TextEvent"in window&&!va,Hd=d&&(!fc||va&&8<va&&11>=va),Gd=" ",Wd=!1;function Xd(n,i){switch(n){case"keyup":return Mg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function Tg(n,i){switch(n){case"compositionend":return qd(i);case"keypress":return i.which!==32?null:(Wd=!0,Gd);case"textInput":return n=i.data,n===Gd&&Wd?null:n;default:return null}}function wg(n,i){if(gs)return n==="compositionend"||!fc&&Xd(n,i)?(n=Od(),uo=sc=cr=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hd&&i.locale!=="ko"?null:i.data;default:return null}}var Ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ag[n.type]:i==="textarea"}function Kd(n,i,a,c){me(c),i=xo(i,"onChange"),0<i.length&&(a=new ac("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var _a=null,xa=null;function bg(n){dh(n,0)}function mo(n){var i=Ss(n);if(bt(i))return n}function Rg(n,i){if(n==="change")return i}var $d=!1;if(d){var dc;if(d){var hc="oninput"in document;if(!hc){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),hc=typeof jd.oninput=="function"}dc=hc}else dc=!1;$d=dc&&(!document.documentMode||9<document.documentMode)}function Zd(){_a&&(_a.detachEvent("onpropertychange",Jd),xa=_a=null)}function Jd(n){if(n.propertyName==="value"&&mo(xa)){var i=[];Kd(i,xa,n,Qe(n)),Ge(bg,i)}}function Cg(n,i,a){n==="focusin"?(Zd(),_a=i,xa=a,_a.attachEvent("onpropertychange",Jd)):n==="focusout"&&Zd()}function Pg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return mo(xa)}function Lg(n,i){if(n==="click")return mo(i)}function Ng(n,i){if(n==="input"||n==="change")return mo(i)}function Dg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ui=typeof Object.is=="function"?Object.is:Dg;function ya(n,i){if(ui(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!ui(n[f],i[f]))return!1}return!0}function Qd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function eh(n,i){var a=Qd(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qd(a)}}function th(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?th(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function nh(){for(var n=window,i=et();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=et(n.document)}return i}function pc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ig(n){var i=nh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&th(a.ownerDocument.documentElement,a)){if(c!==null&&pc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=eh(a,m);var w=eh(a,c);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ug=d&&"documentMode"in document&&11>=document.documentMode,vs=null,mc=null,Sa=null,gc=!1;function ih(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||vs==null||vs!==et(c)||(c=vs,"selectionStart"in c&&pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Sa&&ya(Sa,c)||(Sa=c,c=xo(mc,"onSelect"),0<c.length&&(i=new ac("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=vs)))}function go(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},vc={},rh={};d&&(rh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function vo(n){if(vc[n])return vc[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in rh)return vc[n]=i[a];return n}var sh=vo("animationend"),ah=vo("animationiteration"),oh=vo("animationstart"),lh=vo("transitionend"),ch=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,i){ch.set(n,i),l(i,[n])}for(var _c=0;_c<uh.length;_c++){var xc=uh[_c],Fg=xc.toLowerCase(),Og=xc[0].toUpperCase()+xc.slice(1);ur(Fg,"on"+Og)}ur(sh,"onAnimationEnd"),ur(ah,"onAnimationIteration"),ur(oh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(lh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function fh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ro(c,i,void 0,n),n.currentTarget=null}function dh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var w=c.length-1;0<=w;w--){var I=c[w],B=I.instance,oe=I.currentTarget;if(I=I.listener,B!==m&&f.isPropagationStopped())break e;fh(f,I,oe),m=B}else for(w=0;w<c.length;w++){if(I=c[w],B=I.instance,oe=I.currentTarget,I=I.listener,B!==m&&f.isPropagationStopped())break e;fh(f,I,oe),m=B}}}if(Ur)throw n=Fr,Ur=!1,Fr=null,n}function Vt(n,i){var a=i[bc];a===void 0&&(a=i[bc]=new Set);var c=n+"__bubble";a.has(c)||(hh(i,n,2,!1),a.add(c))}function yc(n,i,a){var c=0;i&&(c|=4),hh(a,n,c,i)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[_o]){n[_o]=!0,r.forEach(function(a){a!=="selectionchange"&&(kg.has(a)||yc(a,!1,n),yc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[_o]||(i[_o]=!0,yc("selectionchange",!1,i))}}function hh(n,i,a,c){switch(Fd(i)){case 1:var f=J0;break;case 4:f=Q0;break;default:f=ic}a=f.bind(null,i,a,n),f=void 0,!Pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Sc(n,i,a,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;w=w.return}for(;I!==null;){if(w=zr(I),w===null)return;if(B=w.tag,B===5||B===6){c=m=w;continue e}I=I.parentNode}}c=c.return}Ge(function(){var oe=m,Me=Qe(a),Ee=[];e:{var Se=ch.get(n);if(Se!==void 0){var Be=ac,We=n;switch(n){case"keypress":if(fo(a)===0)break e;case"keydown":case"keyup":Be=pg;break;case"focusin":We="focus",Be=cc;break;case"focusout":We="blur",Be=cc;break;case"beforeblur":case"afterblur":Be=cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=vg;break;case sh:case ah:case oh:Be=sg;break;case lh:Be=xg;break;case"scroll":Be=eg;break;case"wheel":Be=Sg;break;case"copy":case"cut":case"paste":Be=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Vd}var Ke=(i&4)!==0,nn=!Ke&&n==="scroll",ee=Ke?Se!==null?Se+"Capture":null:Se;Ke=[];for(var G=oe,ie;G!==null;){ie=G;var we=ie.stateNode;if(ie.tag===5&&we!==null&&(ie=we,ee!==null&&(we=Ft(G,ee),we!=null&&Ke.push(Ta(G,we,ie)))),nn)break;G=G.return}0<Ke.length&&(Se=new Be(Se,We,null,a,Me),Ee.push({event:Se,listeners:Ke}))}}if((i&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",Se&&a!==Ce&&(We=a.relatedTarget||a.fromElement)&&(zr(We)||We[Bi]))break e;if((Be||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,Be?(We=a.relatedTarget||a.toElement,Be=oe,We=We?zr(We):null,We!==null&&(nn=Cn(We),We!==nn||We.tag!==5&&We.tag!==6)&&(We=null)):(Be=null,We=oe),Be!==We)){if(Ke=Bd,we="onMouseLeave",ee="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=Vd,we="onPointerLeave",ee="onPointerEnter",G="pointer"),nn=Be==null?Se:Ss(Be),ie=We==null?Se:Ss(We),Se=new Ke(we,G+"leave",Be,a,Me),Se.target=nn,Se.relatedTarget=ie,we=null,zr(Me)===oe&&(Ke=new Ke(ee,G+"enter",We,a,Me),Ke.target=ie,Ke.relatedTarget=nn,we=Ke),nn=we,Be&&We)t:{for(Ke=Be,ee=We,G=0,ie=Ke;ie;ie=xs(ie))G++;for(ie=0,we=ee;we;we=xs(we))ie++;for(;0<G-ie;)Ke=xs(Ke),G--;for(;0<ie-G;)ee=xs(ee),ie--;for(;G--;){if(Ke===ee||ee!==null&&Ke===ee.alternate)break t;Ke=xs(Ke),ee=xs(ee)}Ke=null}else Ke=null;Be!==null&&ph(Ee,Se,Be,Ke,!1),We!==null&&nn!==null&&ph(Ee,nn,We,Ke,!0)}}e:{if(Se=oe?Ss(oe):window,Be=Se.nodeName&&Se.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Se.type==="file")var Ze=Rg;else if(Yd(Se))if($d)Ze=Ng;else{Ze=Pg;var nt=Cg}else(Be=Se.nodeName)&&Be.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Ze=Lg);if(Ze&&(Ze=Ze(n,oe))){Kd(Ee,Ze,a,Me);break e}nt&&nt(n,Se,oe),n==="focusout"&&(nt=Se._wrapperState)&&nt.controlled&&Se.type==="number"&&Gt(Se,"number",Se.value)}switch(nt=oe?Ss(oe):window,n){case"focusin":(Yd(nt)||nt.contentEditable==="true")&&(vs=nt,mc=oe,Sa=null);break;case"focusout":Sa=mc=vs=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,ih(Ee,a,Me);break;case"selectionchange":if(Ug)break;case"keydown":case"keyup":ih(Ee,a,Me)}var it;if(fc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else gs?Xd(n,a)&&(at="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Hd&&a.locale!=="ko"&&(gs||at!=="onCompositionStart"?at==="onCompositionEnd"&&gs&&(it=Od()):(cr=Me,sc="value"in cr?cr.value:cr.textContent,gs=!0)),nt=xo(oe,at),0<nt.length&&(at=new zd(at,n,null,a,Me),Ee.push({event:at,listeners:nt}),it?at.data=it:(it=qd(a),it!==null&&(at.data=it)))),(it=Eg?Tg(n,a):wg(n,a))&&(oe=xo(oe,"onBeforeInput"),0<oe.length&&(Me=new zd("onBeforeInput","beforeinput",null,a,Me),Ee.push({event:Me,listeners:oe}),Me.data=it))}dh(Ee,i)})}function Ta(n,i,a){return{instance:n,listener:i,currentTarget:a}}function xo(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Ft(n,a),m!=null&&c.unshift(Ta(n,m,f)),m=Ft(n,i),m!=null&&c.push(Ta(n,m,f))),n=n.return}return c}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ph(n,i,a,c,f){for(var m=i._reactName,w=[];a!==null&&a!==c;){var I=a,B=I.alternate,oe=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&oe!==null&&(I=oe,f?(B=Ft(a,m),B!=null&&w.unshift(Ta(a,B,I))):f||(B=Ft(a,m),B!=null&&w.push(Ta(a,B,I)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var Bg=/\r\n?/g,zg=/\u0000|\uFFFD/g;function mh(n){return(typeof n=="string"?n:""+n).replace(Bg,`
`).replace(zg,"")}function yo(n,i,a){if(i=mh(i),mh(n)!==i&&a)throw Error(t(425))}function So(){}var Mc=null,Ec=null;function Tc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,Vg=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,Hg=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(n){return gh.resolve(null).then(n).catch(Gg)}:wc;function Gg(n){setTimeout(function(){throw n})}function Ac(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),pa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);pa(i)}function fr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function vh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Ei="__reactFiber$"+ys,wa="__reactProps$"+ys,Bi="__reactContainer$"+ys,bc="__reactEvents$"+ys,Wg="__reactListeners$"+ys,Xg="__reactHandles$"+ys;function zr(n){var i=n[Ei];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Bi]||a[Ei]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=vh(n);n!==null;){if(a=n[Ei])return a;n=vh(n)}return i}n=a,a=n.parentNode}return null}function Aa(n){return n=n[Ei]||n[Bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Mo(n){return n[wa]||null}var Rc=[],Ms=-1;function dr(n){return{current:n}}function Ht(n){0>Ms||(n.current=Rc[Ms],Rc[Ms]=null,Ms--)}function kt(n,i){Ms++,Rc[Ms]=n.current,n.current=i}var hr={},Sn=dr(hr),Un=dr(!1),Vr=hr;function Es(n,i){var a=n.type.contextTypes;if(!a)return hr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Fn(n){return n=n.childContextTypes,n!=null}function Eo(){Ht(Un),Ht(Sn)}function _h(n,i,a){if(Sn.current!==hr)throw Error(t(168));kt(Sn,i),kt(Un,a)}function xh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,xe(n)||"Unknown",f));return ue({},a,c)}function To(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hr,Vr=Sn.current,kt(Sn,n),kt(Un,Un.current),!0}function yh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=xh(n,i,Vr),c.__reactInternalMemoizedMergedChildContext=n,Ht(Un),Ht(Sn),kt(Sn,n)):Ht(Un),kt(Un,a)}var zi=null,wo=!1,Cc=!1;function Sh(n){zi===null?zi=[n]:zi.push(n)}function qg(n){wo=!0,Sh(n)}function pr(){if(!Cc&&zi!==null){Cc=!0;var n=0,i=pt;try{var a=zi;for(pt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}zi=null,wo=!1}catch(f){throw zi!==null&&(zi=zi.slice(n+1)),kr(ca,pr),f}finally{pt=i,Cc=!1}}return null}var Ts=[],ws=0,Ao=null,bo=0,ei=[],ti=0,Hr=null,Vi=1,Hi="";function Gr(n,i){Ts[ws++]=bo,Ts[ws++]=Ao,Ao=n,bo=i}function Mh(n,i,a){ei[ti++]=Vi,ei[ti++]=Hi,ei[ti++]=Hr,Hr=n;var c=Vi;n=Hi;var f=32-Ae(c)-1;c&=~(1<<f),a+=1;var m=32-Ae(i)+f;if(30<m){var w=f-f%5;m=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Vi=1<<32-Ae(i)+f|a<<f|c,Hi=m+n}else Vi=1<<m|a<<f|c,Hi=n}function Pc(n){n.return!==null&&(Gr(n,1),Mh(n,1,0))}function Lc(n){for(;n===Ao;)Ao=Ts[--ws],Ts[ws]=null,bo=Ts[--ws],Ts[ws]=null;for(;n===Hr;)Hr=ei[--ti],ei[ti]=null,Hi=ei[--ti],ei[ti]=null,Vi=ei[--ti],ei[ti]=null}var Xn=null,qn=null,Xt=!1,fi=null;function Eh(n,i){var a=si(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Th(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Xn=n,qn=fr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Xn=n,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hr!==null?{id:Vi,overflow:Hi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=si(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Xn=n,qn=null,!0):!1;default:return!1}}function Nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Dc(n){if(Xt){var i=qn;if(i){var a=i;if(!Th(n,i)){if(Nc(n))throw Error(t(418));i=fr(a.nextSibling);var c=Xn;i&&Th(n,i)?Eh(c,a):(n.flags=n.flags&-4097|2,Xt=!1,Xn=n)}}else{if(Nc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,Xn=n}}}function wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function Ro(n){if(n!==Xn)return!1;if(!Xt)return wh(n),Xt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Tc(n.type,n.memoizedProps)),i&&(i=qn)){if(Nc(n))throw Ah(),Error(t(418));for(;i;)Eh(n,i),i=fr(i.nextSibling)}if(wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){qn=fr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}qn=null}}else qn=Xn?fr(n.stateNode.nextSibling):null;return!0}function Ah(){for(var n=qn;n;)n=fr(n.nextSibling)}function As(){qn=Xn=null,Xt=!1}function Ic(n){fi===null?fi=[n]:fi.push(n)}var Yg=R.ReactCurrentBatchConfig;function ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var I=f.refs;w===null?delete I[m]:I[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Co(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function bh(n){var i=n._init;return i(n._payload)}function Rh(n){function i(ee,G){if(n){var ie=ee.deletions;ie===null?(ee.deletions=[G],ee.flags|=16):ie.push(G)}}function a(ee,G){if(!n)return null;for(;G!==null;)i(ee,G),G=G.sibling;return null}function c(ee,G){for(ee=new Map;G!==null;)G.key!==null?ee.set(G.key,G):ee.set(G.index,G),G=G.sibling;return ee}function f(ee,G){return ee=Mr(ee,G),ee.index=0,ee.sibling=null,ee}function m(ee,G,ie){return ee.index=ie,n?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<G?(ee.flags|=2,G):ie):(ee.flags|=2,G)):(ee.flags|=1048576,G)}function w(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function I(ee,G,ie,we){return G===null||G.tag!==6?(G=wu(ie,ee.mode,we),G.return=ee,G):(G=f(G,ie),G.return=ee,G)}function B(ee,G,ie,we){var Ze=ie.type;return Ze===C?Me(ee,G,ie.props.children,we,ie.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===fe&&bh(Ze)===G.type)?(we=f(G,ie.props),we.ref=ba(ee,G,ie),we.return=ee,we):(we=Qo(ie.type,ie.key,ie.props,null,ee.mode,we),we.ref=ba(ee,G,ie),we.return=ee,we)}function oe(ee,G,ie,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==ie.containerInfo||G.stateNode.implementation!==ie.implementation?(G=Au(ie,ee.mode,we),G.return=ee,G):(G=f(G,ie.children||[]),G.return=ee,G)}function Me(ee,G,ie,we,Ze){return G===null||G.tag!==7?(G=Zr(ie,ee.mode,we,Ze),G.return=ee,G):(G=f(G,ie),G.return=ee,G)}function Ee(ee,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number")return G=wu(""+G,ee.mode,ie),G.return=ee,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case D:return ie=Qo(G.type,G.key,G.props,null,ee.mode,ie),ie.ref=ba(ee,null,G),ie.return=ee,ie;case b:return G=Au(G,ee.mode,ie),G.return=ee,G;case fe:var we=G._init;return Ee(ee,we(G._payload),ie)}if(Bt(G)||le(G))return G=Zr(G,ee.mode,ie,null),G.return=ee,G;Co(ee,G)}return null}function Se(ee,G,ie,we){var Ze=G!==null?G.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ze!==null?null:I(ee,G,""+ie,we);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case D:return ie.key===Ze?B(ee,G,ie,we):null;case b:return ie.key===Ze?oe(ee,G,ie,we):null;case fe:return Ze=ie._init,Se(ee,G,Ze(ie._payload),we)}if(Bt(ie)||le(ie))return Ze!==null?null:Me(ee,G,ie,we,null);Co(ee,ie)}return null}function Be(ee,G,ie,we,Ze){if(typeof we=="string"&&we!==""||typeof we=="number")return ee=ee.get(ie)||null,I(G,ee,""+we,Ze);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case D:return ee=ee.get(we.key===null?ie:we.key)||null,B(G,ee,we,Ze);case b:return ee=ee.get(we.key===null?ie:we.key)||null,oe(G,ee,we,Ze);case fe:var nt=we._init;return Be(ee,G,ie,nt(we._payload),Ze)}if(Bt(we)||le(we))return ee=ee.get(ie)||null,Me(G,ee,we,Ze,null);Co(G,we)}return null}function We(ee,G,ie,we){for(var Ze=null,nt=null,it=G,at=G=0,hn=null;it!==null&&at<ie.length;at++){it.index>at?(hn=it,it=null):hn=it.sibling;var Ct=Se(ee,it,ie[at],we);if(Ct===null){it===null&&(it=hn);break}n&&it&&Ct.alternate===null&&i(ee,it),G=m(Ct,G,at),nt===null?Ze=Ct:nt.sibling=Ct,nt=Ct,it=hn}if(at===ie.length)return a(ee,it),Xt&&Gr(ee,at),Ze;if(it===null){for(;at<ie.length;at++)it=Ee(ee,ie[at],we),it!==null&&(G=m(it,G,at),nt===null?Ze=it:nt.sibling=it,nt=it);return Xt&&Gr(ee,at),Ze}for(it=c(ee,it);at<ie.length;at++)hn=Be(it,ee,at,ie[at],we),hn!==null&&(n&&hn.alternate!==null&&it.delete(hn.key===null?at:hn.key),G=m(hn,G,at),nt===null?Ze=hn:nt.sibling=hn,nt=hn);return n&&it.forEach(function(Er){return i(ee,Er)}),Xt&&Gr(ee,at),Ze}function Ke(ee,G,ie,we){var Ze=le(ie);if(typeof Ze!="function")throw Error(t(150));if(ie=Ze.call(ie),ie==null)throw Error(t(151));for(var nt=Ze=null,it=G,at=G=0,hn=null,Ct=ie.next();it!==null&&!Ct.done;at++,Ct=ie.next()){it.index>at?(hn=it,it=null):hn=it.sibling;var Er=Se(ee,it,Ct.value,we);if(Er===null){it===null&&(it=hn);break}n&&it&&Er.alternate===null&&i(ee,it),G=m(Er,G,at),nt===null?Ze=Er:nt.sibling=Er,nt=Er,it=hn}if(Ct.done)return a(ee,it),Xt&&Gr(ee,at),Ze;if(it===null){for(;!Ct.done;at++,Ct=ie.next())Ct=Ee(ee,Ct.value,we),Ct!==null&&(G=m(Ct,G,at),nt===null?Ze=Ct:nt.sibling=Ct,nt=Ct);return Xt&&Gr(ee,at),Ze}for(it=c(ee,it);!Ct.done;at++,Ct=ie.next())Ct=Be(it,ee,at,Ct.value,we),Ct!==null&&(n&&Ct.alternate!==null&&it.delete(Ct.key===null?at:Ct.key),G=m(Ct,G,at),nt===null?Ze=Ct:nt.sibling=Ct,nt=Ct);return n&&it.forEach(function(Av){return i(ee,Av)}),Xt&&Gr(ee,at),Ze}function nn(ee,G,ie,we){if(typeof ie=="object"&&ie!==null&&ie.type===C&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case D:e:{for(var Ze=ie.key,nt=G;nt!==null;){if(nt.key===Ze){if(Ze=ie.type,Ze===C){if(nt.tag===7){a(ee,nt.sibling),G=f(nt,ie.props.children),G.return=ee,ee=G;break e}}else if(nt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===fe&&bh(Ze)===nt.type){a(ee,nt.sibling),G=f(nt,ie.props),G.ref=ba(ee,nt,ie),G.return=ee,ee=G;break e}a(ee,nt);break}else i(ee,nt);nt=nt.sibling}ie.type===C?(G=Zr(ie.props.children,ee.mode,we,ie.key),G.return=ee,ee=G):(we=Qo(ie.type,ie.key,ie.props,null,ee.mode,we),we.ref=ba(ee,G,ie),we.return=ee,ee=we)}return w(ee);case b:e:{for(nt=ie.key;G!==null;){if(G.key===nt)if(G.tag===4&&G.stateNode.containerInfo===ie.containerInfo&&G.stateNode.implementation===ie.implementation){a(ee,G.sibling),G=f(G,ie.children||[]),G.return=ee,ee=G;break e}else{a(ee,G);break}else i(ee,G);G=G.sibling}G=Au(ie,ee.mode,we),G.return=ee,ee=G}return w(ee);case fe:return nt=ie._init,nn(ee,G,nt(ie._payload),we)}if(Bt(ie))return We(ee,G,ie,we);if(le(ie))return Ke(ee,G,ie,we);Co(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,G!==null&&G.tag===6?(a(ee,G.sibling),G=f(G,ie),G.return=ee,ee=G):(a(ee,G),G=wu(ie,ee.mode,we),G.return=ee,ee=G),w(ee)):a(ee,G)}return nn}var bs=Rh(!0),Ch=Rh(!1),Po=dr(null),Lo=null,Rs=null,Uc=null;function Fc(){Uc=Rs=Lo=null}function Oc(n){var i=Po.current;Ht(Po),n._currentValue=i}function kc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Cs(n,i){Lo=n,Uc=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(On=!0),n.firstContext=null)}function ni(n){var i=n._currentValue;if(Uc!==n)if(n={context:n,memoizedValue:i,next:null},Rs===null){if(Lo===null)throw Error(t(308));Rs=n,Lo.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return i}var Wr=null;function Bc(n){Wr===null?Wr=[n]:Wr.push(n)}function Ph(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Bc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Gi(n,c)}function Gi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var mr=!1;function zc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function gr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(At&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Gi(n,a)}return f=c.interleaved,f===null?(i.next=i,Bc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Gi(n,a)}function No(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,In(n,a)}}function Nh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Do(n,i,a,c){var f=n.updateQueue;mr=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var B=I,oe=B.next;B.next=null,w===null?m=oe:w.next=oe,w=B;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,I=Me.lastBaseUpdate,I!==w&&(I===null?Me.firstBaseUpdate=oe:I.next=oe,Me.lastBaseUpdate=B))}if(m!==null){var Ee=f.baseState;w=0,Me=oe=B=null,I=m;do{var Se=I.lane,Be=I.eventTime;if((c&Se)===Se){Me!==null&&(Me=Me.next={eventTime:Be,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var We=n,Ke=I;switch(Se=i,Be=a,Ke.tag){case 1:if(We=Ke.payload,typeof We=="function"){Ee=We.call(Be,Ee,Se);break e}Ee=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Ke.payload,Se=typeof We=="function"?We.call(Be,Ee,Se):We,Se==null)break e;Ee=ue({},Ee,Se);break e;case 2:mr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,Se=f.effects,Se===null?f.effects=[I]:Se.push(I))}else Be={eventTime:Be,lane:Se,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Me===null?(oe=Me=Be,B=Ee):Me=Me.next=Be,w|=Se;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;Se=I,I=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(Me===null&&(B=Ee),f.baseState=B,f.firstBaseUpdate=oe,f.lastBaseUpdate=Me,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Yr|=w,n.lanes=w,n.memoizedState=Ee}}function Dh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ra={},Ti=dr(Ra),Ca=dr(Ra),Pa=dr(Ra);function Xr(n){if(n===Ra)throw Error(t(174));return n}function Vc(n,i){switch(kt(Pa,i),kt(Ca,n),kt(Ti,Ra),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}Ht(Ti),kt(Ti,i)}function Ps(){Ht(Ti),Ht(Ca),Ht(Pa)}function Ih(n){Xr(Pa.current);var i=Xr(Ti.current),a=M(i,n.type);i!==a&&(kt(Ca,n),kt(Ti,a))}function Hc(n){Ca.current===n&&(Ht(Ti),Ht(Ca))}var $t=dr(0);function Io(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Gc=[];function Wc(){for(var n=0;n<Gc.length;n++)Gc[n]._workInProgressVersionPrimary=null;Gc.length=0}var Uo=R.ReactCurrentDispatcher,Xc=R.ReactCurrentBatchConfig,qr=0,jt=null,on=null,fn=null,Fo=!1,La=!1,Na=0,Kg=0;function Mn(){throw Error(t(321))}function qc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ui(n[a],i[a]))return!1;return!0}function Yc(n,i,a,c,f,m){if(qr=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Uo.current=n===null||n.memoizedState===null?Jg:Qg,n=a(c,f),La){m=0;do{if(La=!1,Na=0,25<=m)throw Error(t(301));m+=1,fn=on=null,i.updateQueue=null,Uo.current=ev,n=a(c,f)}while(La)}if(Uo.current=Bo,i=on!==null&&on.next!==null,qr=0,fn=on=jt=null,Fo=!1,i)throw Error(t(300));return n}function Kc(){var n=Na!==0;return Na=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?jt.memoizedState=fn=n:fn=fn.next=n,fn}function ii(){if(on===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var i=fn===null?jt.memoizedState:fn.next;if(i!==null)fn=i,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},fn===null?jt.memoizedState=fn=n:fn=fn.next=n}return fn}function Da(n,i){return typeof i=="function"?i(n):i}function $c(n){var i=ii(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=on,f=c.baseQueue,m=a.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}c.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,c=c.baseState;var I=w=null,B=null,oe=m;do{var Me=oe.lane;if((qr&Me)===Me)B!==null&&(B=B.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var Ee={lane:Me,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};B===null?(I=B=Ee,w=c):B=B.next=Ee,jt.lanes|=Me,Yr|=Me}oe=oe.next}while(oe!==null&&oe!==m);B===null?w=c:B.next=I,ui(c,i.memoizedState)||(On=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do m=f.lane,jt.lanes|=m,Yr|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function jc(n){var i=ii(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do m=n(m,w.action),w=w.next;while(w!==f);ui(m,i.memoizedState)||(On=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Uh(){}function Fh(n,i){var a=jt,c=ii(),f=i(),m=!ui(c.memoizedState,f);if(m&&(c.memoizedState=f,On=!0),c=c.queue,Zc(Bh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||fn!==null&&fn.memoizedState.tag&1){if(a.flags|=2048,Ia(9,kh.bind(null,a,c,f,i),void 0,null),dn===null)throw Error(t(349));(qr&30)!==0||Oh(a,i,f)}return f}function Oh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function kh(n,i,a,c){i.value=a,i.getSnapshot=c,zh(i)&&Vh(n)}function Bh(n,i,a){return a(function(){zh(i)&&Vh(n)})}function zh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ui(n,a)}catch{return!0}}function Vh(n){var i=Gi(n,1);i!==null&&mi(i,n,1,-1)}function Hh(n){var i=wi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},i.queue=n,n=n.dispatch=Zg.bind(null,jt,n),[i.memoizedState,n]}function Ia(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Gh(){return ii().memoizedState}function Oo(n,i,a,c){var f=wi();jt.flags|=n,f.memoizedState=Ia(1|i,a,void 0,c===void 0?null:c)}function ko(n,i,a,c){var f=ii();c=c===void 0?null:c;var m=void 0;if(on!==null){var w=on.memoizedState;if(m=w.destroy,c!==null&&qc(c,w.deps)){f.memoizedState=Ia(i,a,m,c);return}}jt.flags|=n,f.memoizedState=Ia(1|i,a,m,c)}function Wh(n,i){return Oo(8390656,8,n,i)}function Zc(n,i){return ko(2048,8,n,i)}function Xh(n,i){return ko(4,2,n,i)}function qh(n,i){return ko(4,4,n,i)}function Yh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Kh(n,i,a){return a=a!=null?a.concat([n]):null,ko(4,4,Yh.bind(null,i,n),a)}function Jc(){}function $h(n,i){var a=ii();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&qc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function jh(n,i){var a=ii();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&qc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Zh(n,i,a){return(qr&21)===0?(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=a):(ui(a,i)||(a=ke(),jt.lanes|=a,Yr|=a,n.baseState=!0),i)}function $g(n,i){var a=pt;pt=a!==0&&4>a?a:4,n(!0);var c=Xc.transition;Xc.transition={};try{n(!1),i()}finally{pt=a,Xc.transition=c}}function Jh(){return ii().memoizedState}function jg(n,i,a){var c=yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Qh(n))ep(i,a);else if(a=Ph(n,i,a,c),a!==null){var f=Ln();mi(a,n,c,f),tp(a,i,c)}}function Zg(n,i,a){var c=yr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qh(n))ep(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,I=m(w,a);if(f.hasEagerState=!0,f.eagerState=I,ui(I,w)){var B=i.interleaved;B===null?(f.next=f,Bc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=Ph(n,i,f,c),a!==null&&(f=Ln(),mi(a,n,c,f),tp(a,i,c))}}function Qh(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function ep(n,i){La=Fo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function tp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,In(n,a)}}var Bo={readContext:ni,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},Jg={readContext:ni,useCallback:function(n,i){return wi().memoizedState=[n,i===void 0?null:i],n},useContext:ni,useEffect:Wh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Oo(4194308,4,Yh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Oo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Oo(4,2,n,i)},useMemo:function(n,i){var a=wi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=wi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=jg.bind(null,jt,n),[c.memoizedState,n]},useRef:function(n){var i=wi();return n={current:n},i.memoizedState=n},useState:Hh,useDebugValue:Jc,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=Hh(!1),i=n[0];return n=$g.bind(null,n[1]),wi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=jt,f=wi();if(Xt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),dn===null)throw Error(t(349));(qr&30)!==0||Oh(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,Wh(Bh.bind(null,c,m,n),[n]),c.flags|=2048,Ia(9,kh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=wi(),i=dn.identifierPrefix;if(Xt){var a=Hi,c=Vi;a=(c&~(1<<32-Ae(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Na++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Kg++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Qg={readContext:ni,useCallback:$h,useContext:ni,useEffect:Zc,useImperativeHandle:Kh,useInsertionEffect:Xh,useLayoutEffect:qh,useMemo:jh,useReducer:$c,useRef:Gh,useState:function(){return $c(Da)},useDebugValue:Jc,useDeferredValue:function(n){var i=ii();return Zh(i,on.memoizedState,n)},useTransition:function(){var n=$c(Da)[0],i=ii().memoizedState;return[n,i]},useMutableSource:Uh,useSyncExternalStore:Fh,useId:Jh,unstable_isNewReconciler:!1},ev={readContext:ni,useCallback:$h,useContext:ni,useEffect:Zc,useImperativeHandle:Kh,useInsertionEffect:Xh,useLayoutEffect:qh,useMemo:jh,useReducer:jc,useRef:Gh,useState:function(){return jc(Da)},useDebugValue:Jc,useDeferredValue:function(n){var i=ii();return on===null?i.memoizedState=n:Zh(i,on.memoizedState,n)},useTransition:function(){var n=jc(Da)[0],i=ii().memoizedState;return[n,i]},useMutableSource:Uh,useSyncExternalStore:Fh,useId:Jh,unstable_isNewReconciler:!1};function di(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Qc(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var zo={isMounted:function(n){return(n=n._reactInternals)?Cn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ln(),f=yr(n),m=Wi(c,f);m.payload=i,a!=null&&(m.callback=a),i=gr(n,m,f),i!==null&&(mi(i,n,f,c),No(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ln(),f=yr(n),m=Wi(c,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=gr(n,m,f),i!==null&&(mi(i,n,f,c),No(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ln(),c=yr(n),f=Wi(a,c);f.tag=2,i!=null&&(f.callback=i),i=gr(n,f,c),i!==null&&(mi(i,n,c,a),No(i,n,c))}};function np(n,i,a,c,f,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):i.prototype&&i.prototype.isPureReactComponent?!ya(a,c)||!ya(f,m):!0}function ip(n,i,a){var c=!1,f=hr,m=i.contextType;return typeof m=="object"&&m!==null?m=ni(m):(f=Fn(i)?Vr:Sn.current,c=i.contextTypes,m=(c=c!=null)?Es(n,f):hr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function rp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&zo.enqueueReplaceState(i,i.state,null)}function eu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},zc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=ni(m):(m=Fn(i)?Vr:Sn.current,f.context=Es(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Qc(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&zo.enqueueReplaceState(f,f.state,null),Do(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var a="",c=i;do a+=Ve(c),c=c.return;while(c);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function tu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function nu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var tv=typeof WeakMap=="function"?WeakMap:Map;function sp(n,i,a){a=Wi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Yo||(Yo=!0,vu=c),nu(n,i)},a}function ap(n,i,a){a=Wi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){nu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){nu(n,i),typeof c!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function op(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new tv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=mv.bind(null,n,i,a),i.then(n,n))}function lp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function cp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Wi(-1,1),i.tag=2,gr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var nv=R.ReactCurrentOwner,On=!1;function Pn(n,i,a,c){i.child=n===null?Ch(i,null,a,c):bs(i,n.child,a,c)}function up(n,i,a,c,f){a=a.render;var m=i.ref;return Cs(i,f),c=Yc(n,i,a,c,m,f),a=Kc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Xi(n,i,f)):(Xt&&a&&Pc(i),i.flags|=1,Pn(n,i,c,f),i.child)}function fp(n,i,a,c,f){if(n===null){var m=a.type;return typeof m=="function"&&!Tu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,dp(n,i,m,c,f)):(n=Qo(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(w,c)&&n.ref===i.ref)return Xi(n,i,f)}return i.flags|=1,n=Mr(m,c),n.ref=i.ref,n.return=i,i.child=n}function dp(n,i,a,c,f){if(n!==null){var m=n.memoizedProps;if(ya(m,c)&&n.ref===i.ref)if(On=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(On=!0);else return i.lanes=n.lanes,Xi(n,i,f)}return iu(n,i,a,c,f)}function hp(n,i,a){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ds,Yn),Yn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Ds,Yn),Yn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,kt(Ds,Yn),Yn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,kt(Ds,Yn),Yn|=c;return Pn(n,i,f,a),i.child}function pp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function iu(n,i,a,c,f){var m=Fn(a)?Vr:Sn.current;return m=Es(i,m),Cs(i,f),a=Yc(n,i,a,c,m,f),c=Kc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Xi(n,i,f)):(Xt&&c&&Pc(i),i.flags|=1,Pn(n,i,a,f),i.child)}function mp(n,i,a,c,f){if(Fn(a)){var m=!0;To(i)}else m=!1;if(Cs(i,f),i.stateNode===null)Ho(n,i),ip(i,a,c),eu(i,a,c,f),c=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var B=w.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=ni(oe):(oe=Fn(a)?Vr:Sn.current,oe=Es(i,oe));var Me=a.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";Ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==c||B!==oe)&&rp(i,w,c,oe),mr=!1;var Se=i.memoizedState;w.state=Se,Do(i,c,w,f),B=i.memoizedState,I!==c||Se!==B||Un.current||mr?(typeof Me=="function"&&(Qc(i,a,Me,c),B=i.memoizedState),(I=mr||np(i,a,I,c,Se,B,oe))?(Ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),w.props=c,w.state=B,w.context=oe,c=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Lh(n,i),I=i.memoizedProps,oe=i.type===i.elementType?I:di(i.type,I),w.props=oe,Ee=i.pendingProps,Se=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=ni(B):(B=Fn(a)?Vr:Sn.current,B=Es(i,B));var Be=a.getDerivedStateFromProps;(Me=typeof Be=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Ee||Se!==B)&&rp(i,w,c,B),mr=!1,Se=i.memoizedState,w.state=Se,Do(i,c,w,f);var We=i.memoizedState;I!==Ee||Se!==We||Un.current||mr?(typeof Be=="function"&&(Qc(i,a,Be,c),We=i.memoizedState),(oe=mr||np(i,a,oe,c,Se,We,B)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,We,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,We,B)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=We),w.props=c,w.state=We,w.context=B,c=oe):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),c=!1)}return ru(n,i,a,c,m,f)}function ru(n,i,a,c,f,m){pp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&yh(i,a,!1),Xi(n,i,m);c=i.stateNode,nv.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=bs(i,n.child,null,m),i.child=bs(i,null,I,m)):Pn(n,i,I,m),i.memoizedState=c.state,f&&yh(i,a,!0),i.child}function gp(n){var i=n.stateNode;i.pendingContext?_h(n,i.pendingContext,i.pendingContext!==i.context):i.context&&_h(n,i.context,!1),Vc(n,i.containerInfo)}function vp(n,i,a,c,f){return As(),Ic(f),i.flags|=256,Pn(n,i,a,c),i.child}var su={dehydrated:null,treeContext:null,retryLane:0};function au(n){return{baseLanes:n,cachePool:null,transitions:null}}function _p(n,i,a){var c=i.pendingProps,f=$t.current,m=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),kt($t,f&1),n===null)return Dc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=i.mode,m=i.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=el(w,c,0,null),n=Zr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=au(a),i.memoizedState=su,n):ou(i,w));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return iv(n,i,w,c,I,f,a);if(m){m=c.fallback,w=i.mode,f=n.child,I=f.sibling;var B={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=Mr(f,B),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?m=Mr(I,m):(m=Zr(m,w,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,w=n.child.memoizedState,w=w===null?au(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=su,c}return m=n.child,n=m.sibling,c=Mr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function ou(n,i){return i=el({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Vo(n,i,a,c){return c!==null&&Ic(c),bs(i,n.child,null,a),n=ou(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function iv(n,i,a,c,f,m,w){if(a)return i.flags&256?(i.flags&=-257,c=tu(Error(t(422))),Vo(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=el({mode:"visible",children:c.children},f,0,null),m=Zr(m,f,w,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&bs(i,n.child,null,w),i.child.memoizedState=au(w),i.memoizedState=su,m);if((i.mode&1)===0)return Vo(n,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=tu(m,c,void 0),Vo(n,i,w,c)}if(I=(w&n.childLanes)!==0,On||I){if(c=dn,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Gi(n,f),mi(c,n,f,-1))}return Eu(),c=tu(Error(t(421))),Vo(n,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=gv.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,qn=fr(f.nextSibling),Xn=i,Xt=!0,fi=null,n!==null&&(ei[ti++]=Vi,ei[ti++]=Hi,ei[ti++]=Hr,Vi=n.id,Hi=n.overflow,Hr=i),i=ou(i,c.children),i.flags|=4096,i)}function xp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),kc(n.return,i,a)}function lu(n,i,a,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function yp(n,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Pn(n,i,c.children,a),c=$t.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xp(n,a,i);else if(n.tag===19)xp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt($t,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Io(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),lu(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Io(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}lu(i,!0,a,null,m);break;case"together":lu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ho(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Xi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Yr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Mr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Mr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function rv(n,i,a){switch(i.tag){case 3:gp(i),As();break;case 5:Ih(i);break;case 1:Fn(i.type)&&To(i);break;case 4:Vc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;kt(Po,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt($t,$t.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?_p(n,i,a):(kt($t,$t.current&1),n=Xi(n,i,a),n!==null?n.sibling:null);kt($t,$t.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return yp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),kt($t,$t.current),c)break;return null;case 22:case 23:return i.lanes=0,hp(n,i,a)}return Xi(n,i,a)}var Sp,cu,Mp,Ep;Sp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},cu=function(){},Mp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Xr(Ti.current);var m=null;switch(a){case"input":f=ft(n,f),c=ft(n,c),m=[];break;case"select":f=ue({},f,{value:void 0}),c=ue({},c,{value:void 0}),m=[];break;case"textarea":f=Rt(n,f),c=Rt(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=So)}$e(a,c);var w;a=null;for(oe in f)if(!c.hasOwnProperty(oe)&&f.hasOwnProperty(oe)&&f[oe]!=null)if(oe==="style"){var I=f[oe];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in c){var B=c[oe];if(I=f!=null?f[oe]:void 0,c.hasOwnProperty(oe)&&B!==I&&(B!=null||I!=null))if(oe==="style")if(I){for(w in I)!I.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&I[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(m||(m=[]),m.push(oe,a)),a=B;else oe==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(m=m||[]).push(oe,B)):oe==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(oe,""+B):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(B!=null&&oe==="onScroll"&&Vt("scroll",n),m||I===B||(m=[])):(m=m||[]).push(oe,B))}a&&(m=m||[]).push("style",a);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},Ep=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ua(n,i){if(!Xt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function En(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function sv(n,i,a){var c=i.pendingProps;switch(Lc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return Fn(i.type)&&Eo(),En(i),null;case 3:return c=i.stateNode,Ps(),Ht(Un),Ht(Sn),Wc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ro(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fi!==null&&(yu(fi),fi=null))),cu(n,i),En(i),null;case 5:Hc(i);var f=Xr(Pa.current);if(a=i.type,n!==null&&i.stateNode!=null)Mp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return En(i),null}if(n=Xr(Ti.current),Ro(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ei]=i,c[wa]=m,n=(i.mode&1)!==0,a){case"dialog":Vt("cancel",c),Vt("close",c);break;case"iframe":case"object":case"embed":Vt("load",c);break;case"video":case"audio":for(f=0;f<Ma.length;f++)Vt(Ma[f],c);break;case"source":Vt("error",c);break;case"img":case"image":case"link":Vt("error",c),Vt("load",c);break;case"details":Vt("toggle",c);break;case"input":vt(c,m),Vt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Vt("invalid",c);break;case"textarea":H(c,m),Vt("invalid",c)}$e(a,m),f=null;for(var w in m)if(m.hasOwnProperty(w)){var I=m[w];w==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&yo(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&yo(c.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Vt("scroll",c)}switch(a){case"input":ye(c),Yt(c,m,!0);break;case"textarea":ye(c),yt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=So)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=N(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Ei]=i,n[wa]=c,Sp(n,i,!1,!1),i.stateNode=n;e:{switch(w=De(a,c),a){case"dialog":Vt("cancel",n),Vt("close",n),f=c;break;case"iframe":case"object":case"embed":Vt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ma.length;f++)Vt(Ma[f],n);f=c;break;case"source":Vt("error",n),f=c;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),f=c;break;case"details":Vt("toggle",n),f=c;break;case"input":vt(n,c),f=ft(n,c),Vt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ue({},c,{value:void 0}),Vt("invalid",n);break;case"textarea":H(n,c),f=Rt(n,c),Vt("invalid",n);break;default:f=c}$e(a,f),I=f;for(m in I)if(I.hasOwnProperty(m)){var B=I[m];m==="style"?ve(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&se(n,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&de(n,B):typeof B=="number"&&de(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Vt("scroll",n):B!=null&&O(n,m,B,w))}switch(a){case"input":ye(n),Yt(n,c,!1);break;case"textarea":ye(n),yt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?_t(n,!!c.multiple,m,!1):c.defaultValue!=null&&_t(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=So)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return En(i),null;case 6:if(n&&i.stateNode!=null)Ep(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Xr(Pa.current),Xr(Ti.current),Ro(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ei]=i,(m=c.nodeValue!==a)&&(n=Xn,n!==null))switch(n.tag){case 3:yo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&yo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ei]=i,i.stateNode=c}return En(i),null;case 13:if(Ht($t),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ah(),As(),i.flags|=98560,m=!1;else if(m=Ro(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ei]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),m=!1}else fi!==null&&(yu(fi),fi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||($t.current&1)!==0?ln===0&&(ln=3):Eu())),i.updateQueue!==null&&(i.flags|=4),En(i),null);case 4:return Ps(),cu(n,i),n===null&&Ea(i.stateNode.containerInfo),En(i),null;case 10:return Oc(i.type._context),En(i),null;case 17:return Fn(i.type)&&Eo(),En(i),null;case 19:if(Ht($t),m=i.memoizedState,m===null)return En(i),null;if(c=(i.flags&128)!==0,w=m.rendering,w===null)if(c)Ua(m,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Io(n),w!==null){for(i.flags|=128,Ua(m,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt($t,$t.current&1|2),i.child}n=n.sibling}m.tail!==null&&Kt()>Is&&(i.flags|=128,c=!0,Ua(m,!1),i.lanes=4194304)}else{if(!c)if(n=Io(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ua(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Xt)return En(i),null}else 2*Kt()-m.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,c=!0,Ua(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Kt(),i.sibling=null,a=$t.current,kt($t,c?a&1|2:a&1),i):(En(i),null);case 22:case 23:return Mu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function av(n,i){switch(Lc(i),i.tag){case 1:return Fn(i.type)&&Eo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),Ht(Un),Ht(Sn),Wc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Hc(i),null;case 13:if(Ht($t),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));As()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ht($t),null;case 4:return Ps(),null;case 10:return Oc(i.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var Go=!1,Tn=!1,ov=typeof WeakSet=="function"?WeakSet:Set,He=null;function Ns(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Qt(n,i,c)}else a.current=null}function uu(n,i,a){try{a()}catch(c){Qt(n,i,c)}}var Tp=!1;function lv(n,i){if(Mc=lo,n=nh(),pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,I=-1,B=-1,oe=0,Me=0,Ee=n,Se=null;t:for(;;){for(var Be;Ee!==a||f!==0&&Ee.nodeType!==3||(I=w+f),Ee!==m||c!==0&&Ee.nodeType!==3||(B=w+c),Ee.nodeType===3&&(w+=Ee.nodeValue.length),(Be=Ee.firstChild)!==null;)Se=Ee,Ee=Be;for(;;){if(Ee===n)break t;if(Se===a&&++oe===f&&(I=w),Se===m&&++Me===c&&(B=w),(Be=Ee.nextSibling)!==null)break;Ee=Se,Se=Ee.parentNode}Ee=Be}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ec={focusedElem:n,selectionRange:a},lo=!1,He=i;He!==null;)if(i=He,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,He=n;else for(;He!==null;){i=He;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var Ke=We.memoizedProps,nn=We.memoizedState,ee=i.stateNode,G=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:di(i.type,Ke),nn);ee.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Qt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,He=n;break}He=i.return}return We=Tp,Tp=!1,We}function Fa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&uu(i,a,m)}f=f.next}while(f!==c)}}function Wo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function fu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function wp(n){var i=n.alternate;i!==null&&(n.alternate=null,wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ei],delete i[wa],delete i[bc],delete i[Wg],delete i[Xg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ap(n){return n.tag===5||n.tag===3||n.tag===4}function bp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ap(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function du(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=So));else if(c!==4&&(n=n.child,n!==null))for(du(n,i,a),n=n.sibling;n!==null;)du(n,i,a),n=n.sibling}function hu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(hu(n,i,a),n=n.sibling;n!==null;)hu(n,i,a),n=n.sibling}var vn=null,hi=!1;function vr(n,i,a){for(a=a.child;a!==null;)Rp(n,i,a),a=a.sibling}function Rp(n,i,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:Tn||Ns(a,i);case 6:var c=vn,f=hi;vn=null,vr(n,i,a),vn=c,hi=f,vn!==null&&(hi?(n=vn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(hi?(n=vn,a=a.stateNode,n.nodeType===8?Ac(n.parentNode,a):n.nodeType===1&&Ac(n,a),pa(n)):Ac(vn,a.stateNode));break;case 4:c=vn,f=hi,vn=a.stateNode.containerInfo,hi=!0,vr(n,i,a),vn=c,hi=f;break;case 0:case 11:case 14:case 15:if(!Tn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&uu(a,i,w),f=f.next}while(f!==c)}vr(n,i,a);break;case 1:if(!Tn&&(Ns(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Qt(a,i,I)}vr(n,i,a);break;case 21:vr(n,i,a);break;case 22:a.mode&1?(Tn=(c=Tn)||a.memoizedState!==null,vr(n,i,a),Tn=c):vr(n,i,a);break;default:vr(n,i,a)}}function Cp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ov),i.forEach(function(c){var f=vv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function pi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var m=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:vn=I.stateNode,hi=!1;break e;case 3:vn=I.stateNode.containerInfo,hi=!0;break e;case 4:vn=I.stateNode.containerInfo,hi=!0;break e}I=I.return}if(vn===null)throw Error(t(160));Rp(m,w,f),vn=null,hi=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(oe){Qt(f,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Pp(i,n),i=i.sibling}function Pp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pi(i,n),Ai(n),c&4){try{Fa(3,n,n.return),Wo(3,n)}catch(Ke){Qt(n,n.return,Ke)}try{Fa(5,n,n.return)}catch(Ke){Qt(n,n.return,Ke)}}break;case 1:pi(i,n),Ai(n),c&512&&a!==null&&Ns(a,a.return);break;case 5:if(pi(i,n),Ai(n),c&512&&a!==null&&Ns(a,a.return),n.flags&32){var f=n.stateNode;try{de(f,"")}catch(Ke){Qt(n,n.return,Ke)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&dt(f,m),De(I,w);var oe=De(I,m);for(w=0;w<B.length;w+=2){var Me=B[w],Ee=B[w+1];Me==="style"?ve(f,Ee):Me==="dangerouslySetInnerHTML"?se(f,Ee):Me==="children"?de(f,Ee):O(f,Me,Ee,oe)}switch(I){case"input":Ut(f,m);break;case"textarea":tn(f,m);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Be=m.value;Be!=null?_t(f,!!m.multiple,Be,!1):Se!==!!m.multiple&&(m.defaultValue!=null?_t(f,!!m.multiple,m.defaultValue,!0):_t(f,!!m.multiple,m.multiple?[]:"",!1))}f[wa]=m}catch(Ke){Qt(n,n.return,Ke)}}break;case 6:if(pi(i,n),Ai(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(Ke){Qt(n,n.return,Ke)}}break;case 3:if(pi(i,n),Ai(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{pa(i.containerInfo)}catch(Ke){Qt(n,n.return,Ke)}break;case 4:pi(i,n),Ai(n);break;case 13:pi(i,n),Ai(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(gu=Kt())),c&4&&Cp(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(Tn=(oe=Tn)||Me,pi(i,n),Tn=oe):pi(i,n),Ai(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!Me&&(n.mode&1)!==0)for(He=n,Me=n.child;Me!==null;){for(Ee=He=Me;He!==null;){switch(Se=He,Be=Se.child,Se.tag){case 0:case 11:case 14:case 15:Fa(4,Se,Se.return);break;case 1:Ns(Se,Se.return);var We=Se.stateNode;if(typeof We.componentWillUnmount=="function"){c=Se,a=Se.return;try{i=c,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(Ke){Qt(c,a,Ke)}}break;case 5:Ns(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Dp(Ee);continue}}Be!==null?(Be.return=Se,He=Be):Dp(Ee)}Me=Me.sibling}e:for(Me=null,Ee=n;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{f=Ee.stateNode,oe?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Ee.stateNode,B=Ee.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=he("display",w))}catch(Ke){Qt(n,n.return,Ke)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=oe?"":Ee.memoizedProps}catch(Ke){Qt(n,n.return,Ke)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:pi(i,n),Ai(n),c&4&&Cp(n);break;case 21:break;default:pi(i,n),Ai(n)}}function Ai(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Ap(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(de(f,""),c.flags&=-33);var m=bp(n);hu(n,m,f);break;case 3:case 4:var w=c.stateNode.containerInfo,I=bp(n);du(n,I,w);break;default:throw Error(t(161))}}catch(B){Qt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function cv(n,i,a){He=n,Lp(n)}function Lp(n,i,a){for(var c=(n.mode&1)!==0;He!==null;){var f=He,m=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||Go;if(!w){var I=f.alternate,B=I!==null&&I.memoizedState!==null||Tn;I=Go;var oe=Tn;if(Go=w,(Tn=B)&&!oe)for(He=f;He!==null;)w=He,B=w.child,w.tag===22&&w.memoizedState!==null?Ip(f):B!==null?(B.return=w,He=B):Ip(f);for(;m!==null;)He=m,Lp(m),m=m.sibling;He=f,Go=I,Tn=oe}Np(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,He=m):Np(n)}}function Np(n){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Tn||Wo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Tn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:di(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Dh(i,m,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Dh(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var Me=oe.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&pa(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||i.flags&512&&fu(i)}catch(Se){Qt(i,i.return,Se)}}if(i===n){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function Dp(n){for(;He!==null;){var i=He;if(i===n){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function Ip(n){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Wo(4,i)}catch(B){Qt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(B){Qt(i,f,B)}}var m=i.return;try{fu(i)}catch(B){Qt(i,m,B)}break;case 5:var w=i.return;try{fu(i)}catch(B){Qt(i,w,B)}}}catch(B){Qt(i,i.return,B)}if(i===n){He=null;break}var I=i.sibling;if(I!==null){I.return=i.return,He=I;break}He=i.return}}var uv=Math.ceil,Xo=R.ReactCurrentDispatcher,pu=R.ReactCurrentOwner,ri=R.ReactCurrentBatchConfig,At=0,dn=null,sn=null,_n=0,Yn=0,Ds=dr(0),ln=0,Oa=null,Yr=0,qo=0,mu=0,ka=null,kn=null,gu=0,Is=1/0,qi=null,Yo=!1,vu=null,_r=null,Ko=!1,xr=null,$o=0,Ba=0,_u=null,jo=-1,Zo=0;function Ln(){return(At&6)!==0?Kt():jo!==-1?jo:jo=Kt()}function yr(n){return(n.mode&1)===0?1:(At&2)!==0&&_n!==0?_n&-_n:Yg.transition!==null?(Zo===0&&(Zo=ke()),Zo):(n=pt,n!==0||(n=window.event,n=n===void 0?16:Fd(n.type)),n)}function mi(n,i,a,c){if(50<Ba)throw Ba=0,_u=null,Error(t(185));ht(n,a,c),((At&2)===0||n!==dn)&&(n===dn&&((At&2)===0&&(qo|=a),ln===4&&Sr(n,_n)),Bn(n,c),a===1&&At===0&&(i.mode&1)===0&&(Is=Kt()+500,wo&&pr()))}function Bn(n,i){var a=n.callbackNode;Nt(n,i);var c=Ot(n,n===dn?_n:0);if(c===0)a!==null&&la(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&la(a),i===1)n.tag===0?qg(Fp.bind(null,n)):Sh(Fp.bind(null,n)),Hg(function(){(At&6)===0&&pr()}),a=null;else{switch(ki(c)){case 1:a=ca;break;case 4:a=A;break;case 16:a=X;break;case 536870912:a=ne;break;default:a=X}a=Wp(a,Up.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Up(n,i){if(jo=-1,Zo=0,(At&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Us()&&n.callbackNode!==a)return null;var c=Ot(n,n===dn?_n:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Jo(n,c);else{i=c;var f=At;At|=2;var m=kp();(dn!==n||_n!==i)&&(qi=null,Is=Kt()+500,$r(n,i));do try{hv();break}catch(I){Op(n,I)}while(!0);Fc(),Xo.current=m,At=f,sn!==null?i=0:(dn=null,_n=0,i=ln)}if(i!==0){if(i===2&&(f=rn(n),f!==0&&(c=f,i=xu(n,f))),i===1)throw a=Oa,$r(n,0),Sr(n,c),Bn(n,Kt()),a;if(i===6)Sr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!fv(f)&&(i=Jo(n,c),i===2&&(m=rn(n),m!==0&&(c=m,i=xu(n,m))),i===1))throw a=Oa,$r(n,0),Sr(n,c),Bn(n,Kt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:jr(n,kn,qi);break;case 3:if(Sr(n,c),(c&130023424)===c&&(i=gu+500-Kt(),10<i)){if(Ot(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Ln(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=wc(jr.bind(null,n,kn,qi),i);break}jr(n,kn,qi);break;case 4:if(Sr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var w=31-Ae(c);m=1<<w,w=i[w],w>f&&(f=w),c&=~m}if(c=f,c=Kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*uv(c/1960))-c,10<c){n.timeoutHandle=wc(jr.bind(null,n,kn,qi),c);break}jr(n,kn,qi);break;case 5:jr(n,kn,qi);break;default:throw Error(t(329))}}}return Bn(n,Kt()),n.callbackNode===a?Up.bind(null,n):null}function xu(n,i){var a=ka;return n.current.memoizedState.isDehydrated&&($r(n,i).flags|=256),n=Jo(n,i),n!==2&&(i=kn,kn=a,i!==null&&yu(i)),n}function yu(n){kn===null?kn=n:kn.push.apply(kn,n)}function fv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!ui(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(n,i){for(i&=~mu,i&=~qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ae(i),c=1<<a;n[a]=-1,i&=~c}}function Fp(n){if((At&6)!==0)throw Error(t(327));Us();var i=Ot(n,0);if((i&1)===0)return Bn(n,Kt()),null;var a=Jo(n,i);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(i=c,a=xu(n,c))}if(a===1)throw a=Oa,$r(n,0),Sr(n,i),Bn(n,Kt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,jr(n,kn,qi),Bn(n,Kt()),null}function Su(n,i){var a=At;At|=1;try{return n(i)}finally{At=a,At===0&&(Is=Kt()+500,wo&&pr())}}function Kr(n){xr!==null&&xr.tag===0&&(At&6)===0&&Us();var i=At;At|=1;var a=ri.transition,c=pt;try{if(ri.transition=null,pt=1,n)return n()}finally{pt=c,ri.transition=a,At=i,(At&6)===0&&pr()}}function Mu(){Yn=Ds.current,Ht(Ds)}function $r(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Vg(a)),sn!==null)for(a=sn.return;a!==null;){var c=a;switch(Lc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Eo();break;case 3:Ps(),Ht(Un),Ht(Sn),Wc();break;case 5:Hc(c);break;case 4:Ps();break;case 13:Ht($t);break;case 19:Ht($t);break;case 10:Oc(c.type._context);break;case 22:case 23:Mu()}a=a.return}if(dn=n,sn=n=Mr(n.current,null),_n=Yn=i,ln=0,Oa=null,mu=qo=Yr=0,kn=ka=null,Wr!==null){for(i=0;i<Wr.length;i++)if(a=Wr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,m=a.pending;if(m!==null){var w=m.next;m.next=f,c.next=w}a.pending=c}Wr=null}return n}function Op(n,i){do{var a=sn;try{if(Fc(),Uo.current=Bo,Fo){for(var c=jt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Fo=!1}if(qr=0,fn=on=jt=null,La=!1,Na=0,pu.current=null,a===null||a.return===null){ln=1,Oa=i,sn=null;break}e:{var m=n,w=a.return,I=a,B=i;if(i=_n,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var oe=B,Me=I,Ee=Me.tag;if((Me.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Be=lp(w);if(Be!==null){Be.flags&=-257,cp(Be,w,I,m,i),Be.mode&1&&op(m,oe,i),i=Be,B=oe;var We=i.updateQueue;if(We===null){var Ke=new Set;Ke.add(B),i.updateQueue=Ke}else We.add(B);break e}else{if((i&1)===0){op(m,oe,i),Eu();break e}B=Error(t(426))}}else if(Xt&&I.mode&1){var nn=lp(w);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),cp(nn,w,I,m,i),Ic(Ls(B,I));break e}}m=B=Ls(B,I),ln!==4&&(ln=2),ka===null?ka=[m]:ka.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=sp(m,B,i);Nh(m,ee);break e;case 1:I=B;var G=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(_r===null||!_r.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=ap(m,I,i);Nh(m,we);break e}}m=m.return}while(m!==null)}zp(a)}catch(Ze){i=Ze,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function kp(){var n=Xo.current;return Xo.current=Bo,n===null?Bo:n}function Eu(){(ln===0||ln===3||ln===2)&&(ln=4),dn===null||(Yr&268435455)===0&&(qo&268435455)===0||Sr(dn,_n)}function Jo(n,i){var a=At;At|=2;var c=kp();(dn!==n||_n!==i)&&(qi=null,$r(n,i));do try{dv();break}catch(f){Op(n,f)}while(!0);if(Fc(),At=a,Xo.current=c,sn!==null)throw Error(t(261));return dn=null,_n=0,ln}function dv(){for(;sn!==null;)Bp(sn)}function hv(){for(;sn!==null&&!ao();)Bp(sn)}function Bp(n){var i=Gp(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,i===null?zp(n):sn=i,pu.current=null}function zp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=sv(a,i,Yn),a!==null){sn=a;return}}else{if(a=av(a,i),a!==null){a.flags&=32767,sn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,sn=null;return}}if(i=i.sibling,i!==null){sn=i;return}sn=i=n}while(i!==null);ln===0&&(ln=5)}function jr(n,i,a){var c=pt,f=ri.transition;try{ri.transition=null,pt=1,pv(n,i,a,c)}finally{ri.transition=f,pt=c}return null}function pv(n,i,a,c){do Us();while(xr!==null);if((At&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Dn(n,m),n===dn&&(sn=dn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ko||(Ko=!0,Wp(X,function(){return Us(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ri.transition,ri.transition=null;var w=pt;pt=1;var I=At;At|=4,pu.current=null,lv(n,a),Pp(a,n),Ig(Ec),lo=!!Mc,Ec=Mc=null,n.current=a,cv(a),tc(),At=I,pt=w,ri.transition=m}else n.current=a;if(Ko&&(Ko=!1,xr=n,$o=f),m=n.pendingLanes,m===0&&(_r=null),ze(a.stateNode),Bn(n,Kt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Yo)throw Yo=!1,n=vu,vu=null,n;return($o&1)!==0&&n.tag!==0&&Us(),m=n.pendingLanes,(m&1)!==0?n===_u?Ba++:(Ba=0,_u=n):Ba=0,pr(),null}function Us(){if(xr!==null){var n=ki($o),i=ri.transition,a=pt;try{if(ri.transition=null,pt=16>n?16:n,xr===null)var c=!1;else{if(n=xr,xr=null,$o=0,(At&6)!==0)throw Error(t(331));var f=At;for(At|=4,He=n.current;He!==null;){var m=He,w=m.child;if((He.flags&16)!==0){var I=m.deletions;if(I!==null){for(var B=0;B<I.length;B++){var oe=I[B];for(He=oe;He!==null;){var Me=He;switch(Me.tag){case 0:case 11:case 15:Fa(8,Me,m)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,He=Ee;else for(;He!==null;){Me=He;var Se=Me.sibling,Be=Me.return;if(wp(Me),Me===oe){He=null;break}if(Se!==null){Se.return=Be,He=Se;break}He=Be}}}var We=m.alternate;if(We!==null){var Ke=We.child;if(Ke!==null){We.child=null;do{var nn=Ke.sibling;Ke.sibling=null,Ke=nn}while(Ke!==null)}}He=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,He=w;else e:for(;He!==null;){if(m=He,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Fa(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,He=ee;break e}He=m.return}}var G=n.current;for(He=G;He!==null;){w=He;var ie=w.child;if((w.subtreeFlags&2064)!==0&&ie!==null)ie.return=w,He=ie;else e:for(w=G;He!==null;){if(I=He,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Wo(9,I)}}catch(Ze){Qt(I,I.return,Ze)}if(I===w){He=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,He=we;break e}He=I.return}}if(At=f,pr(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(te,n)}catch{}c=!0}return c}finally{pt=a,ri.transition=i}}return!1}function Vp(n,i,a){i=Ls(a,i),i=sp(n,i,1),n=gr(n,i,1),i=Ln(),n!==null&&(ht(n,1,i),Bn(n,i))}function Qt(n,i,a){if(n.tag===3)Vp(n,n,a);else for(;i!==null;){if(i.tag===3){Vp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(_r===null||!_r.has(c))){n=Ls(a,n),n=ap(i,n,1),i=gr(i,n,1),n=Ln(),i!==null&&(ht(i,1,n),Bn(i,n));break}}i=i.return}}function mv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&a,dn===n&&(_n&a)===a&&(ln===4||ln===3&&(_n&130023424)===_n&&500>Kt()-gu?$r(n,0):mu|=a),Bn(n,i)}function Hp(n,i){i===0&&((n.mode&1)===0?i=1:(i=je,je<<=1,(je&130023424)===0&&(je=4194304)));var a=Ln();n=Gi(n,i),n!==null&&(ht(n,i,a),Bn(n,a))}function gv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Hp(n,a)}function vv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Hp(n,a)}var Gp;Gp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Un.current)On=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return On=!1,rv(n,i,a);On=(n.flags&131072)!==0}else On=!1,Xt&&(i.flags&1048576)!==0&&Mh(i,bo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ho(n,i),n=i.pendingProps;var f=Es(i,Sn.current);Cs(i,a),f=Yc(null,i,c,n,f,a);var m=Kc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Fn(c)?(m=!0,To(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,zc(i),f.updater=zo,i.stateNode=f,f._reactInternals=i,eu(i,c,n,a),i=ru(null,i,c,!0,m,a)):(i.tag=0,Xt&&m&&Pc(i),Pn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Ho(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=xv(c),n=di(c,n),f){case 0:i=iu(null,i,c,n,a);break e;case 1:i=mp(null,i,c,n,a);break e;case 11:i=up(null,i,c,n,a);break e;case 14:i=fp(null,i,c,di(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),iu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),mp(n,i,c,f,a);case 3:e:{if(gp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Lh(n,i),Do(i,c,null,a);var w=i.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Ls(Error(t(423)),i),i=vp(n,i,c,a,f);break e}else if(c!==f){f=Ls(Error(t(424)),i),i=vp(n,i,c,a,f);break e}else for(qn=fr(i.stateNode.containerInfo.firstChild),Xn=i,Xt=!0,fi=null,a=Ch(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(As(),c===f){i=Xi(n,i,a);break e}Pn(n,i,c,a)}i=i.child}return i;case 5:return Ih(i),n===null&&Dc(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,w=f.children,Tc(c,f)?w=null:m!==null&&Tc(c,m)&&(i.flags|=32),pp(n,i),Pn(n,i,w,a),i.child;case 6:return n===null&&Dc(i),null;case 13:return _p(n,i,a);case 4:return Vc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=bs(i,null,c,a):Pn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),up(n,i,c,f,a);case 7:return Pn(n,i,i.pendingProps,a),i.child;case 8:return Pn(n,i,i.pendingProps.children,a),i.child;case 12:return Pn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,w=f.value,kt(Po,c._currentValue),c._currentValue=w,m!==null)if(ui(m.value,w)){if(m.children===f.children&&!Un.current){i=Xi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){w=m.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(m.tag===1){B=Wi(-1,a&-a),B.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var Me=oe.pending;Me===null?B.next=B:(B.next=Me.next,Me.next=B),oe.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),kc(m.return,a,i),I.lanes|=a;break}B=B.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),kc(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Pn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Cs(i,a),f=ni(f),c=c(f),i.flags|=1,Pn(n,i,c,a),i.child;case 14:return c=i.type,f=di(c,i.pendingProps),f=di(c.type,f),fp(n,i,c,f,a);case 15:return dp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),Ho(n,i),i.tag=1,Fn(c)?(n=!0,To(i)):n=!1,Cs(i,a),ip(i,c,f),eu(i,c,f,a),ru(null,i,c,!0,n,a);case 19:return yp(n,i,a);case 22:return hp(n,i,a)}throw Error(t(156,i.tag))};function Wp(n,i){return kr(n,i)}function _v(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(n,i,a,c){return new _v(n,i,a,c)}function Tu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xv(n){if(typeof n=="function")return Tu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===j)return 14}return 2}function Mr(n,i){var a=n.alternate;return a===null?(a=si(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Qo(n,i,a,c,f,m){var w=2;if(c=n,typeof n=="function")Tu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case C:return Zr(a.children,f,m,i);case S:w=8,f|=8;break;case L:return n=si(12,a,i,f|2),n.elementType=L,n.lanes=m,n;case re:return n=si(13,a,i,f),n.elementType=re,n.lanes=m,n;case ce:return n=si(19,a,i,f),n.elementType=ce,n.lanes=m,n;case Z:return el(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:w=10;break e;case k:w=9;break e;case W:w=11;break e;case j:w=14;break e;case fe:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=si(w,a,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function Zr(n,i,a,c){return n=si(7,n,c,i),n.lanes=a,n}function el(n,i,a,c){return n=si(22,n,c,i),n.elementType=Z,n.lanes=a,n.stateNode={isHidden:!1},n}function wu(n,i,a){return n=si(6,n,null,i),n.lanes=a,n}function Au(n,i,a){return i=si(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function yv(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bu(n,i,a,c,f,m,w,I,B){return n=new yv(n,i,a,I,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=si(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(m),n}function Sv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Xp(n){if(!n)return hr;n=n._reactInternals;e:{if(Cn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Fn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Fn(a))return xh(n,a,i)}return i}function qp(n,i,a,c,f,m,w,I,B){return n=bu(a,c,!0,n,f,m,w,I,B),n.context=Xp(null),a=n.current,c=Ln(),f=yr(a),m=Wi(c,f),m.callback=i??null,gr(a,m,f),n.current.lanes=f,ht(n,f,c),Bn(n,c),n}function tl(n,i,a,c){var f=i.current,m=Ln(),w=yr(f);return a=Xp(a),i.context===null?i.context=a:i.pendingContext=a,i=Wi(m,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=gr(f,i,w),n!==null&&(mi(n,f,w,m),No(n,f,w)),w}function nl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Yp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ru(n,i){Yp(n,i),(n=n.alternate)&&Yp(n,i)}function Mv(){return null}var Kp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cu(n){this._internalRoot=n}il.prototype.render=Cu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));tl(n,i,null,null)},il.prototype.unmount=Cu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Kr(function(){tl(null,n,null,null)}),i[Bi]=null}};function il(n){this._internalRoot=n}il.prototype.unstable_scheduleHydration=function(n){if(n){var i=Dt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<lr.length&&i!==0&&i<lr[a].priority;a++);lr.splice(a,0,n),a===0&&Id(n)}};function Pu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function $p(){}function Ev(n,i,a,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var oe=nl(w);m.call(oe)}}var w=qp(i,c,n,0,null,!1,!1,"",$p);return n._reactRootContainer=w,n[Bi]=w.current,Ea(n.nodeType===8?n.parentNode:n),Kr(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var oe=nl(B);I.call(oe)}}var B=bu(n,0,!1,null,null,!1,!1,"",$p);return n._reactRootContainer=B,n[Bi]=B.current,Ea(n.nodeType===8?n.parentNode:n),Kr(function(){tl(i,B,a,c)}),B}function sl(n,i,a,c,f){var m=a._reactRootContainer;if(m){var w=m;if(typeof f=="function"){var I=f;f=function(){var B=nl(w);I.call(B)}}tl(i,w,n,f)}else w=Ev(a,i,n,f,c);return nl(w)}Lt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Et(i.pendingLanes);a!==0&&(In(i,a|1),Bn(i,Kt()),(At&6)===0&&(Is=Kt()+500,pr()))}break;case 13:Kr(function(){var c=Gi(n,1);if(c!==null){var f=Ln();mi(c,n,1,f)}}),Ru(n,1)}},zt=function(n){if(n.tag===13){var i=Gi(n,134217728);if(i!==null){var a=Ln();mi(i,n,134217728,a)}Ru(n,134217728)}},li=function(n){if(n.tag===13){var i=yr(n),a=Gi(n,i);if(a!==null){var c=Ln();mi(a,n,i,c)}Ru(n,i)}},Dt=function(){return pt},ci=function(n,i){var a=pt;try{return pt=n,i()}finally{pt=a}},tt=function(n,i,a){switch(i){case"input":if(Ut(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Mo(c);if(!f)throw Error(t(90));bt(c),Ut(c,f)}}}break;case"textarea":tn(n,a);break;case"select":i=a.value,i!=null&&_t(n,!!a.multiple,i,!1)}},Ue=Su,_e=Kr;var Tv={usingClientEntryPoint:!1,Events:[Aa,Ss,Mo,me,Le,Su]},za={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wv={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Or(n),n===null?null:n.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||Mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{te=al.inject(wv),be=al}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv,zn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pu(i))throw Error(t(200));return Sv(n,i,null,a)},zn.createRoot=function(n,i){if(!Pu(n))throw Error(t(299));var a=!1,c="",f=Kp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=bu(n,1,!1,null,null,a,!1,c,f),n[Bi]=i.current,Ea(n.nodeType===8?n.parentNode:n),new Cu(i)},zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Or(i),n=n===null?null:n.stateNode,n},zn.flushSync=function(n){return Kr(n)},zn.hydrate=function(n,i,a){if(!rl(i))throw Error(t(200));return sl(null,n,i,!0,a)},zn.hydrateRoot=function(n,i,a){if(!Pu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,m="",w=Kp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=qp(i,null,n,1,a??null,f,!1,m,w),n[Bi]=i.current,Ea(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new il(i)},zn.render=function(n,i,a){if(!rl(i))throw Error(t(200));return sl(null,n,i,!1,a)},zn.unmountComponentAtNode=function(n){if(!rl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){sl(null,null,n,!1,function(){n._reactRootContainer=null,n[Bi]=null})}),!0):!1},zn.unstable_batchedUpdates=Su,zn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!rl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return sl(n,i,a,!1,c)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var im;function Iv(){if(im)return Du.exports;im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Du.exports=Dv(),Du.exports}var rm;function Uv(){if(rm)return ol;rm=1;var s=Iv();return ol.createRoot=s.createRoot,ol.hydrateRoot=s.hydrateRoot,ol}var Fv=Uv();const Ov=bv(Fv);var Tt=ud();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="185",kv=0,sm=1,Bv=2,Ul=1,f0=2,$a=3,Nr=0,Hn=1,Pi=2,er=0,js=1,Za=2,am=3,om=4,zv=5,is=100,Vv=101,Hv=102,Gv=103,Wv=104,Xv=200,qv=201,Yv=202,Kv=203,_f=204,xf=205,$v=206,jv=207,Zv=208,Jv=209,Qv=210,e_=211,t_=212,n_=213,i_=214,yf=0,Sf=1,Mf=2,Qs=3,Ef=4,Tf=5,wf=6,Af=7,d0=0,r_=1,s_=2,Di=0,h0=1,p0=2,m0=3,g0=4,v0=5,_0=6,x0=7,y0=300,cs=301,ea=302,Fu=303,Ou=304,Kl=306,Vl=1e3,Qi=1001,bf=1002,xn=1003,a_=1004,ll=1005,bn=1006,ku=1007,ss=1008,Jn=1009,S0=1010,M0=1011,Ja=1012,dd=1013,Fi=1014,Li=1015,ir=1016,hd=1017,pd=1018,Qa=1020,E0=35902,T0=35899,w0=1021,A0=1022,yi=1023,rr=1026,as=1027,b0=1028,md=1029,us=1030,gd=1031,vd=1033,Fl=33776,Ol=33777,kl=33778,Bl=33779,Rf=35840,Cf=35841,Pf=35842,Lf=35843,Nf=36196,Df=37492,If=37496,Uf=37488,Ff=37489,Hl=37490,Of=37491,kf=37808,Bf=37809,zf=37810,Vf=37811,Hf=37812,Gf=37813,Wf=37814,Xf=37815,qf=37816,Yf=37817,Kf=37818,$f=37819,jf=37820,Zf=37821,Jf=36492,Qf=36494,ed=36495,td=36283,nd=36284,Gl=36285,id=36286,o_=3200,rd=0,l_=1,Pr="",jn="srgb",Wl="srgb-linear",Xl="linear",It="srgb",Fs=7680,lm=519,c_=512,u_=513,f_=514,_d=515,d_=516,h_=517,xd=518,p_=519,cm=35044,um="300 es",Ni=2e3,eo=2001;function m_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ql(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function g_(){const s=ql("canvas");return s.style.display="block",s}const fm={};function dm(...s){const e="THREE."+s.shift();console.log(e,...s)}function R0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=R0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function wt(...s){s=R0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Zs(...s){const e=s.join(" ");e in fm||(fm[e]=!0,st(...s))}function v_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const __={[yf]:Sf,[Mf]:wf,[Ef]:Af,[Qs]:Tf,[Sf]:yf,[wf]:Mf,[Af]:Ef,[Tf]:Qs};class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=Math.PI/180,sd=180/Math.PI;function to(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function x_(s,e){return(s%e+e)%e}function zu(s,e,t){return(1-t)*s+t*e}function Ha(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Rd=class Rd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rd.prototype.isVector2=!0;let xt=Rd;class ia{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let h=r[o+0],p=r[o+1],_=r[o+2],y=r[o+3],g=l[u+0],E=l[u+1],T=l[u+2],P=l[u+3];if(y!==P||h!==g||p!==E||_!==T){let x=h*g+p*E+_*T+y*P;x<0&&(g=-g,E=-E,T=-T,P=-P,x=-x);let v=1-d;if(x<.9995){const U=Math.acos(x),O=Math.sin(U);v=Math.sin(v*U)/O,d=Math.sin(d*U)/O,h=h*v+g*d,p=p*v+E*d,_=_*v+T*d,y=y*v+P*d}else{h=h*v+g*d,p=p*v+E*d,_=_*v+T*d,y=y*v+P*d;const U=1/Math.sqrt(h*h+p*p+_*_+y*y);h*=U,p*=U,_*=U,y*=U}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],h=r[o+1],p=r[o+2],_=r[o+3],y=l[u],g=l[u+1],E=l[u+2],T=l[u+3];return e[t]=d*T+_*y+h*E-p*g,e[t+1]=h*T+_*g+p*y-d*E,e[t+2]=p*T+_*E+d*g-h*y,e[t+3]=_*T-d*y-h*g-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(r/2),_=d(o/2),y=d(l/2),g=h(r/2),E=h(o/2),T=h(l/2);switch(u){case"XYZ":this._x=g*_*y+p*E*T,this._y=p*E*y-g*_*T,this._z=p*_*T+g*E*y,this._w=p*_*y-g*E*T;break;case"YXZ":this._x=g*_*y+p*E*T,this._y=p*E*y-g*_*T,this._z=p*_*T-g*E*y,this._w=p*_*y+g*E*T;break;case"ZXY":this._x=g*_*y-p*E*T,this._y=p*E*y+g*_*T,this._z=p*_*T+g*E*y,this._w=p*_*y-g*E*T;break;case"ZYX":this._x=g*_*y-p*E*T,this._y=p*E*y+g*_*T,this._z=p*_*T-g*E*y,this._w=p*_*y+g*E*T;break;case"YZX":this._x=g*_*y+p*E*T,this._y=p*E*y+g*_*T,this._z=p*_*T-g*E*y,this._w=p*_*y-g*E*T;break;case"XZY":this._x=g*_*y-p*E*T,this._y=p*E*y-g*_*T,this._z=p*_*T+g*E*y,this._w=p*_*y+g*E*T;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],_=t[6],y=t[10],g=r+d+y;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(_-h)*E,this._y=(l-p)*E,this._z=(u-o)*E}else if(r>d&&r>y){const E=2*Math.sqrt(1+r-d-y);this._w=(_-h)/E,this._x=.25*E,this._y=(o+u)/E,this._z=(l+p)/E}else if(d>y){const E=2*Math.sqrt(1+d-r-y);this._w=(l-p)/E,this._x=(o+u)/E,this._y=.25*E,this._z=(h+_)/E}else{const E=2*Math.sqrt(1+y-r-d);this._w=(u-o)/E,this._x=(l+p)/E,this._y=(h+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+u*d+o*p-l*h,this._y=o*_+u*h+l*d-r*p,this._z=l*_+u*p+r*h-o*d,this._w=u*_-r*d-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let h=1-t;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cd=class Cd{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*o-d*r),_=2*(d*t-l*o),y=2*(l*r-u*t);return this.x=t+h*p+u*y-d*_,this.y=r+h*_+d*p-l*y,this.z=o+h*y+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=o*h-l*d,this.y=l*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vu.copy(this).projectOnVector(e),this.sub(Vu)}reflect(e){return this.sub(Vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cd.prototype.isVector3=!0;let J=Cd;const Vu=new J,hm=new ia,Pd=class Pd{constructor(e,t,r,o,l,u,d,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,p)}set(e,t,r,o,l,u,d,h,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],h=r[6],p=r[1],_=r[4],y=r[7],g=r[2],E=r[5],T=r[8],P=o[0],x=o[3],v=o[6],U=o[1],O=o[4],R=o[7],D=o[2],b=o[5],C=o[8];return l[0]=u*P+d*U+h*D,l[3]=u*x+d*O+h*b,l[6]=u*v+d*R+h*C,l[1]=p*P+_*U+y*D,l[4]=p*x+_*O+y*b,l[7]=p*v+_*R+y*C,l[2]=g*P+E*U+T*D,l[5]=g*x+E*O+T*b,l[8]=g*v+E*R+T*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*d*p-r*l*_+r*d*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8],y=_*u-d*p,g=d*h-_*l,E=p*l-u*h,T=t*y+r*g+o*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=y*P,e[1]=(o*p-_*r)*P,e[2]=(d*r-o*u)*P,e[3]=g*P,e[4]=(_*t-o*h)*P,e[5]=(o*l-d*t)*P,e[6]=E*P,e[7]=(r*h-p*t)*P,e[8]=(u*t-r*l)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*d)+u+e,-o*p,o*h,-o*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hu.makeScale(e,t)),this}rotate(e){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hu.makeRotation(-e)),this}translate(e,t){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pd.prototype.isMatrix3=!0;let ct=Pd;const Hu=new ct,pm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y_(){const s={enabled:!0,workingColorSpace:Wl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(o.r=tr(o.r),o.g=tr(o.g),o.b=tr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=Js(o.r),o.g=Js(o.g),o.b=Js(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Pr?Xl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Wl]:{primaries:e,whitePoint:r,transfer:Xl,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:r,transfer:It,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),s}const St=y_();function tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Os;class S_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Os===void 0&&(Os=ql("canvas")),Os.width=e.width,Os.height=e.height;const o=Os.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Os}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ql("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=tr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(tr(t[r]/255)*255):t[r]=tr(t[r]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M_=0;class yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Gu(o[u].image)):l.push(Gu(o[u]))}else l=Gu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Gu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?S_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let E_=0;const Wu=new J;class Rn extends fs{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,r=Qi,o=Qi,l=bn,u=ss,d=yi,h=Jn,p=Rn.DEFAULT_ANISOTROPY,_=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=to(),this.name="",this.source=new yd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wu).x}get height(){return this.source.getSize(Wu).y}get depth(){return this.source.getSize(Wu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vl:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vl:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=y0;Rn.DEFAULT_ANISOTROPY=1;const Ld=class Ld{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],_=h[4],y=h[8],g=h[1],E=h[5],T=h[9],P=h[2],x=h[6],v=h[10];if(Math.abs(_-g)<.01&&Math.abs(y-P)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(y+P)<.1&&Math.abs(T+x)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(p+1)/2,R=(E+1)/2,D=(v+1)/2,b=(_+g)/4,C=(y+P)/4,S=(T+x)/4;return O>R&&O>D?O<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(O),o=b/r,l=C/r):R>D?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=b/o,l=S/o):D<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),r=C/l,o=S/l),this.set(r,o,l,t),this}let U=Math.sqrt((x-T)*(x-T)+(y-P)*(y-P)+(g-_)*(g-_));return Math.abs(U)<.001&&(U=1),this.x=(x-T)/U,this.y=(y-P)/U,this.z=(g-_)/U,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ld.prototype.isVector4=!0;let Jt=Ld;class T_ extends fs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Rn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new yd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends T_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class C0 extends Rn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w_ extends Rn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yl=class Yl{constructor(e,t,r,o,l,u,d,h,p,_,y,g,E,T,P,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,h,p,_,y,g,E,T,P,x)}set(e,t,r,o,l,u,d,h,p,_,y,g,E,T,P,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=d,v[13]=h,v[2]=p,v[6]=_,v[10]=y,v[14]=g,v[3]=E,v[7]=T,v[11]=P,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yl().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),p=Math.sin(o),_=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=u*_,E=u*y,T=d*_,P=d*y;t[0]=h*_,t[4]=-h*y,t[8]=p,t[1]=E+T*p,t[5]=g-P*p,t[9]=-d*h,t[2]=P-g*p,t[6]=T+E*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*_,E=h*y,T=p*_,P=p*y;t[0]=g+P*d,t[4]=T*d-E,t[8]=u*p,t[1]=u*y,t[5]=u*_,t[9]=-d,t[2]=E*d-T,t[6]=P+g*d,t[10]=u*h}else if(e.order==="ZXY"){const g=h*_,E=h*y,T=p*_,P=p*y;t[0]=g-P*d,t[4]=-u*y,t[8]=T+E*d,t[1]=E+T*d,t[5]=u*_,t[9]=P-g*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const g=u*_,E=u*y,T=d*_,P=d*y;t[0]=h*_,t[4]=T*p-E,t[8]=g*p+P,t[1]=h*y,t[5]=P*p+g,t[9]=E*p-T,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,E=u*p,T=d*h,P=d*p;t[0]=h*_,t[4]=P-g*y,t[8]=T*y+E,t[1]=y,t[5]=u*_,t[9]=-d*_,t[2]=-p*_,t[6]=E*y+T,t[10]=g-P*y}else if(e.order==="XZY"){const g=u*h,E=u*p,T=d*h,P=d*p;t[0]=h*_,t[4]=-y,t[8]=p*_,t[1]=g*y+P,t[5]=u*_,t[9]=E*y-T,t[2]=T*y-E,t[6]=d*_,t[10]=P*y+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A_,e,b_)}lookAt(e,t,r){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Tr.crossVectors(r,Kn),Tr.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Tr.crossVectors(r,Kn)),Tr.normalize(),cl.crossVectors(Kn,Tr),o[0]=Tr.x,o[4]=cl.x,o[8]=Kn.x,o[1]=Tr.y,o[5]=cl.y,o[9]=Kn.y,o[2]=Tr.z,o[6]=cl.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],h=r[8],p=r[12],_=r[1],y=r[5],g=r[9],E=r[13],T=r[2],P=r[6],x=r[10],v=r[14],U=r[3],O=r[7],R=r[11],D=r[15],b=o[0],C=o[4],S=o[8],L=o[12],z=o[1],k=o[5],W=o[9],re=o[13],ce=o[2],j=o[6],fe=o[10],Z=o[14],Y=o[3],le=o[7],ue=o[11],F=o[15];return l[0]=u*b+d*z+h*ce+p*Y,l[4]=u*C+d*k+h*j+p*le,l[8]=u*S+d*W+h*fe+p*ue,l[12]=u*L+d*re+h*Z+p*F,l[1]=_*b+y*z+g*ce+E*Y,l[5]=_*C+y*k+g*j+E*le,l[9]=_*S+y*W+g*fe+E*ue,l[13]=_*L+y*re+g*Z+E*F,l[2]=T*b+P*z+x*ce+v*Y,l[6]=T*C+P*k+x*j+v*le,l[10]=T*S+P*W+x*fe+v*ue,l[14]=T*L+P*re+x*Z+v*F,l[3]=U*b+O*z+R*ce+D*Y,l[7]=U*C+O*k+R*j+D*le,l[11]=U*S+O*W+R*fe+D*ue,l[15]=U*L+O*re+R*Z+D*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],_=e[2],y=e[6],g=e[10],E=e[14],T=e[3],P=e[7],x=e[11],v=e[15],U=h*E-p*g,O=d*E-p*y,R=d*g-h*y,D=u*E-p*_,b=u*g-h*_,C=u*y-d*_;return t*(P*U-x*O+v*R)-r*(T*U-x*D+v*b)+o*(T*O-P*D+v*C)-l*(T*R-P*b+x*C)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],d=e[9],h=e[2],p=e[6],_=e[10];return t*(u*_-d*p)-r*(l*_-d*h)+o*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8],y=e[9],g=e[10],E=e[11],T=e[12],P=e[13],x=e[14],v=e[15],U=t*d-r*u,O=t*h-o*u,R=t*p-l*u,D=r*h-o*d,b=r*p-l*d,C=o*p-l*h,S=_*P-y*T,L=_*x-g*T,z=_*v-E*T,k=y*x-g*P,W=y*v-E*P,re=g*v-E*x,ce=U*re-O*W+R*k+D*z-b*L+C*S;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ce;return e[0]=(d*re-h*W+p*k)*j,e[1]=(o*W-r*re-l*k)*j,e[2]=(P*C-x*b+v*D)*j,e[3]=(g*b-y*C-E*D)*j,e[4]=(h*z-u*re-p*L)*j,e[5]=(t*re-o*z+l*L)*j,e[6]=(x*R-T*C-v*O)*j,e[7]=(_*C-g*R+E*O)*j,e[8]=(u*W-d*z+p*S)*j,e[9]=(r*z-t*W-l*S)*j,e[10]=(T*b-P*R+v*U)*j,e[11]=(y*R-_*b-E*U)*j,e[12]=(d*L-u*k-h*S)*j,e[13]=(t*k-r*L+o*S)*j,e[14]=(P*O-T*D-x*U)*j,e[15]=(_*D-y*O+g*U)*j,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,h=e.z,p=l*u,_=l*d;return this.set(p*u+r,p*d-o*h,p*h+o*d,0,p*d+o*h,_*d+r,_*h-o*u,0,p*h-o*d,_*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,p=l+l,_=u+u,y=d+d,g=l*p,E=l*_,T=l*y,P=u*_,x=u*y,v=d*y,U=h*p,O=h*_,R=h*y,D=r.x,b=r.y,C=r.z;return o[0]=(1-(P+v))*D,o[1]=(E+R)*D,o[2]=(T-O)*D,o[3]=0,o[4]=(E-R)*b,o[5]=(1-(g+v))*b,o[6]=(x+U)*b,o[7]=0,o[8]=(T+O)*C,o[9]=(x-U)*C,o[10]=(1-(g+P))*C,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ks.set(o[0],o[1],o[2]).length();const d=ks.set(o[4],o[5],o[6]).length(),h=ks.set(o[8],o[9],o[10]).length();l<0&&(u=-u),gi.copy(this);const p=1/u,_=1/d,y=1/h;return gi.elements[0]*=p,gi.elements[1]*=p,gi.elements[2]*=p,gi.elements[4]*=_,gi.elements[5]*=_,gi.elements[6]*=_,gi.elements[8]*=y,gi.elements[9]*=y,gi.elements[10]*=y,t.setFromRotationMatrix(gi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,t,r,o,l,u,d=Ni,h=!1){const p=this.elements,_=2*l/(t-e),y=2*l/(r-o),g=(t+e)/(t-e),E=(r+o)/(r-o);let T,P;if(h)T=l/(u-l),P=u*l/(u-l);else if(d===Ni)T=-(u+l)/(u-l),P=-2*u*l/(u-l);else if(d===eo)T=-u/(u-l),P=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=y,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=P,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Ni,h=!1){const p=this.elements,_=2/(t-e),y=2/(r-o),g=-(t+e)/(t-e),E=-(r+o)/(r-o);let T,P;if(h)T=1/(u-l),P=u/(u-l);else if(d===Ni)T=-2/(u-l),P=-(u+l)/(u-l);else if(d===eo)T=-1/(u-l),P=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=y,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=P,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Yl.prototype.isMatrix4=!0;let qt=Yl;const ks=new J,gi=new qt,A_=new J(0,0,0),b_=new J(1,1,1),Tr=new J,cl=new J,Kn=new J,gm=new qt,vm=new ia;class Dr{constructor(e=0,t=0,r=0,o=Dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],p=o[5],_=o[9],y=o[2],g=o[6],E=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Mt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,E),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dr.DEFAULT_ORDER="XYZ";class Sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R_=0;const _m=new J,Bs=new ia,Yi=new qt,ul=new J,Ga=new J,C_=new J,P_=new ia,xm=new J(1,0,0),ym=new J(0,1,0),Sm=new J(0,0,1),Mm={type:"added"},L_={type:"removed"},zs={type:"childadded",child:null},Xu={type:"childremoved",child:null};class en extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new J,t=new Dr,r=new ia,o=new J(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new ct}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,t){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ul.copy(e):ul.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Ga,ul,this.up):Yi.lookAt(ul,Ga,this.up),this.quaternion.setFromRotationMatrix(Yi),o&&(Yi.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(Yi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),zs.child=e,this.dispatchEvent(zs),zs.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L_),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,C_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,P_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const y=h[p];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),y=u(e.shapes),g=u(e.skeletons),E=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const h=[];for(const p in d){const _=d[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}en.DEFAULT_UP=new J(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class os extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const P of e.hand.values()){const x=t.getJointPose(P,r),v=this._getHandJoint(p,P);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],g=_.position.distanceTo(y.position),E=.02,T=.005;p.inputState.pinching&&g>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new os;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Yu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=St.workingColorSpace){return this.r=e,this.g=t,this.b=r,St.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=St.workingColorSpace){if(e=x_(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Yu(u,l,e+1/3),this.g=Yu(u,l,e),this.b=Yu(u,l,e-1/3)}return St.colorSpaceToWorking(this,o),this}setStyle(e,t=jn){function r(l){l!==void 0&&parseFloat(l)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const r=P0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return St.workingToColorSpace(An.copy(this),e),Math.round(Mt(An.r*255,0,255))*65536+Math.round(Mt(An.g*255,0,255))*256+Math.round(Mt(An.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(An.copy(this),t);const r=An.r,o=An.g,l=An.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let h,p;const _=(d+u)/2;if(d===u)h=0,p=0;else{const y=u-d;switch(p=_<=.5?y/(u+d):y/(2-u-d),u){case r:h=(o-l)/y+(o<l?6:0);break;case o:h=(l-r)/y+2;break;case l:h=(r-o)/y+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=jn){St.workingToColorSpace(An.copy(this),e);const t=An.r,r=An.g,o=An.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(fl);const r=zu(wr.h,fl.h,t),o=zu(wr.s,fl.s,t),l=zu(wr.l,fl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new gt;gt.NAMES=P0;class Md{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new gt(e),this.near=t,this.far=r}clone(){return new Md(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class D_ extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dr,this.environmentIntensity=1,this.environmentRotation=new Dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vi=new J,Ki=new J,Ku=new J,$i=new J,Vs=new J,Hs=new J,Em=new J,$u=new J,ju=new J,Zu=new J,Ju=new Jt,Qu=new Jt,ef=new Jt;class xi{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),vi.subVectors(e,t),o.cross(vi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){vi.subVectors(o,t),Ki.subVectors(r,t),Ku.subVectors(e,t);const u=vi.dot(vi),d=vi.dot(Ki),h=vi.dot(Ku),p=Ki.dot(Ki),_=Ki.dot(Ku),y=u*p-d*d;if(y===0)return l.set(0,0,0),null;const g=1/y,E=(p*h-d*_)*g,T=(u*_-d*h)*g;return l.set(1-E-T,T,E)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,r,o,l,u,d,h){return this.getBarycoord(e,t,r,o,$i)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,$i.x),h.addScaledVector(u,$i.y),h.addScaledVector(d,$i.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return Ju.setScalar(0),Qu.setScalar(0),ef.setScalar(0),Ju.fromBufferAttribute(e,t),Qu.fromBufferAttribute(e,r),ef.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ju,l.x),u.addScaledVector(Qu,l.y),u.addScaledVector(ef,l.z),u}static isFrontFacing(e,t,r,o){return vi.subVectors(r,t),Ki.subVectors(e,t),vi.cross(Ki).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),vi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return xi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Vs.subVectors(o,r),Hs.subVectors(l,r),$u.subVectors(e,r);const h=Vs.dot($u),p=Hs.dot($u);if(h<=0&&p<=0)return t.copy(r);ju.subVectors(e,o);const _=Vs.dot(ju),y=Hs.dot(ju);if(_>=0&&y<=_)return t.copy(o);const g=h*y-_*p;if(g<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(r).addScaledVector(Vs,u);Zu.subVectors(e,l);const E=Vs.dot(Zu),T=Hs.dot(Zu);if(T>=0&&E<=T)return t.copy(l);const P=E*p-h*T;if(P<=0&&p>=0&&T<=0)return d=p/(p-T),t.copy(r).addScaledVector(Hs,d);const x=_*T-E*y;if(x<=0&&y-_>=0&&E-T>=0)return Em.subVectors(l,o),d=(y-_)/(y-_+(E-T)),t.copy(o).addScaledVector(Em,d);const v=1/(x+P+g);return u=P*v,d=g*v,t.copy(r).addScaledVector(Vs,u).addScaledVector(Hs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class no{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,_i):_i.fromBufferAttribute(l,u),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dl.copy(r.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),hl.subVectors(this.max,Wa),Gs.subVectors(e.a,Wa),Ws.subVectors(e.b,Wa),Xs.subVectors(e.c,Wa),Ar.subVectors(Ws,Gs),br.subVectors(Xs,Ws),Jr.subVectors(Gs,Xs);let t=[0,-Ar.z,Ar.y,0,-br.z,br.y,0,-Jr.z,Jr.y,Ar.z,0,-Ar.x,br.z,0,-br.x,Jr.z,0,-Jr.x,-Ar.y,Ar.x,0,-br.y,br.x,0,-Jr.y,Jr.x,0];return!tf(t,Gs,Ws,Xs,hl)||(t=[1,0,0,0,1,0,0,0,1],!tf(t,Gs,Ws,Xs,hl))?!1:(pl.crossVectors(Ar,br),t=[pl.x,pl.y,pl.z],tf(t,Gs,Ws,Xs,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new J,new J,new J,new J,new J,new J,new J,new J],_i=new J,dl=new no,Gs=new J,Ws=new J,Xs=new J,Ar=new J,br=new J,Jr=new J,Wa=new J,hl=new J,pl=new J,Qr=new J;function tf(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Qr.fromArray(s,l);const d=o.x*Math.abs(Qr.x)+o.y*Math.abs(Qr.y)+o.z*Math.abs(Qr.z),h=e.dot(Qr),p=t.dot(Qr),_=r.dot(Qr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>d)return!1}return!0}const an=new J,ml=new xt;let I_=0;class Si extends fs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=cm,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ha(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),r=Vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),r=Vn(r,this.array),o=Vn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),r=Vn(r,this.array),o=Vn(o,this.array),l=Vn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class L0 extends Si{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class N0 extends Si{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class mn extends Si{constructor(e,t,r){super(new Float32Array(e),t,r)}}const U_=new no,Xa=new J,nf=new J;class $l{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):U_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);const t=Xa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Xa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add(nf)),this.expandByPoint(Xa.copy(e.center).sub(nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let F_=0;const ai=new qt,rf=new en,qs=new J,$n=new no,qa=new no,pn=new J;class Gn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m_(e)?N0:L0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,r){return ai.makeTranslation(e,t,r),this.applyMatrix4(ai),this}scale(e,t,r){return ai.makeScale(e,t,r),this.applyMatrix4(ai),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new mn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];qa.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors($n.min,qa.min),$n.expandByPoint(pn),pn.addVectors($n.max,qa.max),$n.expandByPoint(pn)):($n.expandByPoint(qa.min),$n.expandByPoint(qa.max))}$n.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)pn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(pn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)pn.fromBufferAttribute(d,p),h&&(qs.fromBufferAttribute(e,p),pn.add(qs)),o=Math.max(o,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Si(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],h=[];for(let S=0;S<r.count;S++)d[S]=new J,h[S]=new J;const p=new J,_=new J,y=new J,g=new xt,E=new xt,T=new xt,P=new J,x=new J;function v(S,L,z){p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,L),y.fromBufferAttribute(r,z),g.fromBufferAttribute(l,S),E.fromBufferAttribute(l,L),T.fromBufferAttribute(l,z),_.sub(p),y.sub(p),E.sub(g),T.sub(g);const k=1/(E.x*T.y-T.x*E.y);isFinite(k)&&(P.copy(_).multiplyScalar(T.y).addScaledVector(y,-E.y).multiplyScalar(k),x.copy(y).multiplyScalar(E.x).addScaledVector(_,-T.x).multiplyScalar(k),d[S].add(P),d[L].add(P),d[z].add(P),h[S].add(x),h[L].add(x),h[z].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let S=0,L=U.length;S<L;++S){const z=U[S],k=z.start,W=z.count;for(let re=k,ce=k+W;re<ce;re+=3)v(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const O=new J,R=new J,D=new J,b=new J;function C(S){D.fromBufferAttribute(o,S),b.copy(D);const L=d[S];O.copy(L),O.sub(D.multiplyScalar(D.dot(L))).normalize(),R.crossVectors(b,L);const k=R.dot(h[S])<0?-1:1;u.setXYZW(S,O.x,O.y,O.z,k)}for(let S=0,L=U.length;S<L;++S){const z=U[S],k=z.start,W=z.count;for(let re=k,ce=k+W;re<ce;re+=3)C(e.getX(re+0)),C(e.getX(re+1)),C(e.getX(re+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,E=r.count;g<E;g++)r.setXYZ(g,0,0,0);const o=new J,l=new J,u=new J,d=new J,h=new J,p=new J,_=new J,y=new J;if(e)for(let g=0,E=e.count;g<E;g+=3){const T=e.getX(g+0),P=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,P),u.fromBufferAttribute(t,x),_.subVectors(u,l),y.subVectors(o,l),_.cross(y),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,P),p.fromBufferAttribute(r,x),d.add(_),h.add(_),p.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(P,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,E=t.count;g<E;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),_.subVectors(u,l),y.subVectors(o,l),_.cross(y),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(d,h){const p=d.array,_=d.itemSize,y=d.normalized,g=new p.constructor(h.length*_);let E=0,T=0;for(let P=0,x=h.length;P<x;P++){d.isInterleavedBufferAttribute?E=h[P]*d.data.stride+d.offset:E=h[P]*_;for(let v=0;v<_;v++)g[T++]=p[E++]}return new Si(g,_,y)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],p=e(h,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let _=0,y=p.length;_<y;_++){const g=p[_],E=e(g,r);h.push(E)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let y=0,g=p.length;y<g;y++){const E=p[y];_.push(E.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],y=l[p];for(let g=0,E=y.length;g<E;g++)_.push(y[g].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let O_=0;class ra extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=to(),this.name="",this.type="Material",this.blending=js,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_f,this.blendDst=xf,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_f&&(r.blendSrc=this.blendSrc),this.blendDst!==xf&&(r.blendDst=this.blendDst),this.blendEquation!==is&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new xt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new J,sf=new J,gl=new J,Rr=new J,af=new J,vl=new J,of=new J;class Ed{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){sf.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(sf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(gl),d=Rr.dot(this.direction),h=-Rr.dot(gl),p=Rr.lengthSq(),_=Math.abs(1-u*u);let y,g,E,T;if(_>0)if(y=u*h-d,g=u*d-h,T=l*_,y>=0)if(g>=-T)if(g<=T){const P=1/_;y*=P,g*=P,E=y*(y+u*g+2*d)+g*(u*y+g+2*h)+p}else g=l,y=Math.max(0,-(u*g+d)),E=-y*y+g*(g+2*h)+p;else g=-l,y=Math.max(0,-(u*g+d)),E=-y*y+g*(g+2*h)+p;else g<=-T?(y=Math.max(0,-(-u*l+d)),g=y>0?-l:Math.min(Math.max(-l,-h),l),E=-y*y+g*(g+2*h)+p):g<=T?(y=0,g=Math.min(Math.max(-l,-h),l),E=g*(g+2*h)+p):(y=Math.max(0,-(u*l+d)),g=y>0?l:Math.min(Math.max(-l,-h),l),E=-y*y+g*(g+2*h)+p);else g=u>0?-l:l,y=Math.max(0,-(u*g+d)),E=-y*y+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(sf).addScaledVector(gl,g),E}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),o=Zi.dot(Zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,h;const p=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(l=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),y>=0?(d=(e.min.z-g.z)*y,h=(e.max.z-g.z)*y):(d=(e.max.z-g.z)*y,h=(e.min.z-g.z)*y),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,r,o,l){af.subVectors(t,e),vl.subVectors(r,e),of.crossVectors(af,vl);let u=this.direction.dot(of),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Rr.subVectors(this.origin,e);const h=d*this.direction.dot(vl.crossVectors(Rr,vl));if(h<0)return null;const p=d*this.direction.dot(af.cross(Rr));if(p<0||h+p>u)return null;const _=-d*Rr.dot(of);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ls extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dr,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tm=new qt,es=new Ed,_l=new $l,wm=new J,xl=new J,yl=new J,Sl=new J,lf=new J,Ml=new J,Am=new J,El=new J;class Zt extends en{constructor(e=new Gn,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Ml.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=d[h],y=l[h];_!==0&&(lf.fromBufferAttribute(y,e),u?Ml.addScaledVector(lf,_):Ml.addScaledVector(lf.sub(t),_))}t.add(Ml)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(_l.containsPoint(es.origin)===!1&&(es.intersectSphere(_l,wm)===null||es.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(Tm.copy(l).invert(),es.copy(e.ray).applyMatrix4(Tm),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,y=l.attributes.normal,g=l.groups,E=l.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,P=g.length;T<P;T++){const x=g[T],v=u[x.materialIndex],U=Math.max(x.start,E.start),O=Math.min(d.count,Math.min(x.start+x.count,E.start+E.count));for(let R=U,D=O;R<D;R+=3){const b=d.getX(R),C=d.getX(R+1),S=d.getX(R+2);o=Tl(this,v,e,r,p,_,y,b,C,S),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,E.start),P=Math.min(d.count,E.start+E.count);for(let x=T,v=P;x<v;x+=3){const U=d.getX(x),O=d.getX(x+1),R=d.getX(x+2);o=Tl(this,u,e,r,p,_,y,U,O,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,P=g.length;T<P;T++){const x=g[T],v=u[x.materialIndex],U=Math.max(x.start,E.start),O=Math.min(h.count,Math.min(x.start+x.count,E.start+E.count));for(let R=U,D=O;R<D;R+=3){const b=R,C=R+1,S=R+2;o=Tl(this,v,e,r,p,_,y,b,C,S),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,E.start),P=Math.min(h.count,E.start+E.count);for(let x=T,v=P;x<v;x+=3){const U=x,O=x+1,R=x+2;o=Tl(this,u,e,r,p,_,y,U,O,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function k_(s,e,t,r,o,l,u,d){let h;if(e.side===Hn?h=r.intersectTriangle(u,l,o,!0,d):h=r.intersectTriangle(o,l,u,e.side===Nr,d),h===null)return null;El.copy(d),El.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(El);return p<t.near||p>t.far?null:{distance:p,point:El.clone(),object:s}}function Tl(s,e,t,r,o,l,u,d,h,p){s.getVertexPosition(d,xl),s.getVertexPosition(h,yl),s.getVertexPosition(p,Sl);const _=k_(s,e,t,r,xl,yl,Sl,Am);if(_){const y=new J;xi.getBarycoord(Am,xl,yl,Sl,y),o&&(_.uv=xi.getInterpolatedAttribute(o,d,h,p,y,new xt)),l&&(_.uv1=xi.getInterpolatedAttribute(l,d,h,p,y,new xt)),u&&(_.normal=xi.getInterpolatedAttribute(u,d,h,p,y,new J),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:h,c:p,normal:new J,materialIndex:0};xi.getNormal(xl,yl,Sl,g.normal),_.face=g,_.barycoord=y}return _}class B_ extends Rn{constructor(e=null,t=1,r=1,o,l,u,d,h,p=xn,_=xn,y,g){super(null,u,d,h,p,_,o,l,y,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cf=new J,z_=new J,V_=new ct;class ns{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=cf.subVectors(r,t).cross(z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(cf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||V_.getNormalMatrix(e),o=this.coplanarPoint(cf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new $l,H_=new xt(.5,.5),wl=new J;class Td{constructor(e=new ns,t=new ns,r=new ns,o=new ns,l=new ns,u=new ns){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ni,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],_=l[4],y=l[5],g=l[6],E=l[7],T=l[8],P=l[9],x=l[10],v=l[11],U=l[12],O=l[13],R=l[14],D=l[15];if(o[0].setComponents(p-u,E-_,v-T,D-U).normalize(),o[1].setComponents(p+u,E+_,v+T,D+U).normalize(),o[2].setComponents(p+d,E+y,v+P,D+O).normalize(),o[3].setComponents(p-d,E-y,v-P,D-O).normalize(),r)o[4].setComponents(h,g,x,R).normalize(),o[5].setComponents(p-h,E-g,v-x,D-R).normalize();else if(o[4].setComponents(p-h,E-g,v-x,D-R).normalize(),t===Ni)o[5].setComponents(p+h,E+g,v+x,D+R).normalize();else if(t===eo)o[5].setComponents(h,g,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=H_.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(wl.x=o.normal.x>0?e.max.x:e.min.x,wl.y=o.normal.y>0?e.max.y:e.min.y,wl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class D0 extends ra{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bm=new qt,ad=new Ed,Al=new $l,bl=new J;class G_ extends en{constructor(e=new Gn,t=new D0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(o),Al.radius+=l,e.ray.intersectsSphere(Al)===!1)return;bm.copy(o).invert(),ad.copy(e.ray).applyMatrix4(bm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=r.index,y=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let T=g,P=E;T<P;T++){const x=p.getX(T);bl.fromBufferAttribute(y,x),Rm(bl,x,h,o,e,t,this)}}else{const g=Math.max(0,u.start),E=Math.min(y.count,u.start+u.count);for(let T=g,P=E;T<P;T++)bl.fromBufferAttribute(y,T),Rm(bl,T,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Rm(s,e,t,r,o,l,u){const d=ad.distanceSqToPoint(s);if(d<t){const h=new J;ad.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class I0 extends Rn{constructor(e=[],t=cs,r,o,l,u,d,h,p,_){super(e,t,r,o,l,u,d,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class W_ extends Rn{constructor(e,t,r,o,l,u,d,h,p){super(e,t,r,o,l,u,d,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ta extends Rn{constructor(e,t,r=Fi,o,l,u,d=xn,h=xn,p,_=rr,y=1){if(_!==rr&&_!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:y};super(g,o,l,u,d,h,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class X_ extends ta{constructor(e,t=Fi,r=cs,o,l,u=xn,d=xn,h,p=rr){const _={width:e,height:e,depth:1},y=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,d,h,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class U0 extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ui extends Gn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],y=[];let g=0,E=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,o,u,2),T("x","z","y",1,-1,e,r,-t,o,u,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(_,3)),this.setAttribute("uv",new mn(y,2));function T(P,x,v,U,O,R,D,b,C,S,L){const z=R/C,k=D/S,W=R/2,re=D/2,ce=b/2,j=C+1,fe=S+1;let Z=0,Y=0;const le=new J;for(let ue=0;ue<fe;ue++){const F=ue*k-re;for(let Q=0;Q<j;Q++){const Oe=Q*z-W;le[P]=Oe*U,le[x]=F*O,le[v]=ce,p.push(le.x,le.y,le.z),le[P]=0,le[x]=0,le[v]=b>0?1:-1,_.push(le.x,le.y,le.z),y.push(Q/C),y.push(1-ue/S),Z+=1}}for(let ue=0;ue<S;ue++)for(let F=0;F<C;F++){const Q=g+F+j*ue,Oe=g+F+j*(ue+1),Xe=g+(F+1)+j*(ue+1),Ve=g+(F+1)+j*ue;h.push(Q,Oe,Ve),h.push(Oe,Xe,Ve),Y+=6}d.addGroup(E,Y,L),E+=Y,g+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wd extends Gn{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],u=[],d=[],h=[],p=new J,_=new xt;u.push(0,0,0),d.push(0,0,1),h.push(.5,.5);for(let y=0,g=3;y<=t;y++,g+=3){const E=r+y/t*o;p.x=e*Math.cos(E),p.y=e*Math.sin(E),u.push(p.x,p.y,p.z),d.push(0,0,1),_.x=(u[g]/e+1)/2,_.y=(u[g+1]/e+1)/2,h.push(_.x,_.y)}for(let y=1;y<=t;y++)l.push(y,y+1,0);this.setIndex(l),this.setAttribute("position",new mn(u,3)),this.setAttribute("normal",new mn(d,3)),this.setAttribute("uv",new mn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jl extends Gn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const _=[],y=[],g=[],E=[];let T=0;const P=[],x=r/2;let v=0;U(),u===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new mn(y,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(E,2));function U(){const R=new J,D=new J;let b=0;const C=(t-e)/r;for(let S=0;S<=l;S++){const L=[],z=S/l,k=z*(t-e)+e;for(let W=0;W<=o;W++){const re=W/o,ce=re*h+d,j=Math.sin(ce),fe=Math.cos(ce);D.x=k*j,D.y=-z*r+x,D.z=k*fe,y.push(D.x,D.y,D.z),R.set(j,C,fe).normalize(),g.push(R.x,R.y,R.z),E.push(re,1-z),L.push(T++)}P.push(L)}for(let S=0;S<o;S++)for(let L=0;L<l;L++){const z=P[L][S],k=P[L+1][S],W=P[L+1][S+1],re=P[L][S+1];(e>0||L!==0)&&(_.push(z,k,re),b+=3),(t>0||L!==l-1)&&(_.push(k,W,re),b+=3)}p.addGroup(v,b,0),v+=b}function O(R){const D=T,b=new xt,C=new J;let S=0;const L=R===!0?e:t,z=R===!0?1:-1;for(let W=1;W<=o;W++)y.push(0,x*z,0),g.push(0,z,0),E.push(.5,.5),T++;const k=T;for(let W=0;W<=o;W++){const ce=W/o*h+d,j=Math.cos(ce),fe=Math.sin(ce);C.x=L*fe,C.y=x*z,C.z=L*j,y.push(C.x,C.y,C.z),g.push(0,z,0),b.x=j*.5+.5,b.y=fe*.5*z+.5,E.push(b.x,b.y),T++}for(let W=0;W<o;W++){const re=D+W,ce=k+W;R===!0?_.push(ce,ce+1,re):_.push(ce+1,ce,re),S+=3}p.addGroup(v,S,R===!0?1:2),v+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nr extends Gn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),h=Math.floor(o),p=d+1,_=h+1,y=e/d,g=t/h,E=[],T=[],P=[],x=[];for(let v=0;v<_;v++){const U=v*g-u;for(let O=0;O<p;O++){const R=O*y-l;T.push(R,-U,0),P.push(0,0,1),x.push(O/d),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let U=0;U<d;U++){const O=U+p*v,R=U+p*(v+1),D=U+1+p*(v+1),b=U+1+p*v;E.push(O,R,b),E.push(R,D,b)}this.setIndex(E),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(P,3)),this.setAttribute("uv",new mn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ad extends Gn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let p=0;const _=[],y=new J,g=new J,E=[],T=[],P=[],x=[];for(let v=0;v<=r;v++){const U=[],O=v/r,R=u+O*d,D=e*Math.cos(R),b=Math.sqrt(e*e-D*D);let C=0;v===0&&u===0?C=.5/t:v===r&&h===Math.PI&&(C=-.5/t);for(let S=0;S<=t;S++){const L=S/t,z=o+L*l;y.x=-b*Math.cos(z),y.y=D,y.z=b*Math.sin(z),T.push(y.x,y.y,y.z),g.copy(y).normalize(),P.push(g.x,g.y,g.z),x.push(L+C,1-O),U.push(p++)}_.push(U)}for(let v=0;v<r;v++)for(let U=0;U<t;U++){const O=_[v][U+1],R=_[v][U],D=_[v+1][U],b=_[v+1][U+1];(v!==0||u>0)&&E.push(O,R,b),(v!==r-1||h<Math.PI)&&E.push(R,D,b)}this.setIndex(E),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(P,3)),this.setAttribute("uv",new mn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ad(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function na(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Cm(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Cm(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Nn(s){const e={};for(let t=0;t<s.length;t++){const r=na(s[t]);for(const o in r)e[o]=r[o]}return e}function Cm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function q_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function F0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Y_={clone:na,merge:Nn};var K_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new gt().setHex(o.value);break;case"v2":this.uniforms[r].value=new xt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new J().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Jt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new qt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class j_ extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oi extends ra{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rd,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Z_ extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J_ extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zl extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Q_ extends Zl{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const uf=new qt,Pm=new J,Lm=new J;class O0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Td,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pm),Lm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lm),t.updateMatrixWorld(),uf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===eo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(uf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rl=new J,Cl=new ia,bi=new J;class k0 extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rl,Cl,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Cl,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Rl,Cl,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Cl,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new J,Nm=new xt,Dm=new xt;class Zn extends k0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sd*2*Math.atan(Math.tan(Bu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Nm,Dm),t.subVectors(Dm,Nm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ex extends O0{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0}}class Im extends Zl{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new ex}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class bd extends k0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tx extends O0{constructor(){super(new bd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nx extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new tx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ix extends Zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ys=-90,Ks=1;class rx extends en{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Ys,Ks,e,t);o.layers=this.layers,this.add(o);const l=new Zn(Ys,Ks,e,t);l.layers=this.layers,this.add(l);const u=new Zn(Ys,Ks,e,t);u.layers=this.layers,this.add(u);const d=new Zn(Ys,Ks,e,t);d.layers=this.layers,this.add(d);const h=new Zn(Ys,Ks,e,t);h.layers=this.layers,this.add(h);const p=new Zn(Ys,Ks,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,h]=t;for(const p of t)this.remove(p);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===eo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,_]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const P=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=P,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(y,g,E),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class sx extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Um=new qt;class B0{constructor(e,t,r=0,o=1/0){this.ray=new Ed(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Sd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):wt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Um.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Um),this}intersectObject(e,t=!0,r=[]){return od(e,this,r,t),r.sort(Fm),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)od(e[o],this,r,t);return r.sort(Fm),r}}function Fm(s,e){return s.distance-e.distance}function od(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)od(l[u],e,t,!0)}}class ax{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Nd=class Nd{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Nd.prototype.isMatrix2=!0;let Om=Nd;function km(s,e,t,r){const o=ox(r);switch(t){case w0:return s*e;case b0:return s*e/o.components*o.byteLength;case md:return s*e/o.components*o.byteLength;case us:return s*e*2/o.components*o.byteLength;case gd:return s*e*2/o.components*o.byteLength;case A0:return s*e*3/o.components*o.byteLength;case yi:return s*e*4/o.components*o.byteLength;case vd:return s*e*4/o.components*o.byteLength;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:case Lf:return Math.max(s,16)*Math.max(e,8)/4;case Rf:case Pf:return Math.max(s,8)*Math.max(e,8)/2;case Nf:case Df:case Uf:case Ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case If:case Hl:case Of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Jf:case Qf:case ed:return Math.ceil(s/4)*Math.ceil(e/4)*16;case td:case nd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gl:case id:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ox(s){switch(s){case Jn:case S0:return{byteLength:1,components:1};case Ja:case M0:case ir:return{byteLength:2,components:1};case hd:case pd:return{byteLength:2,components:4};case Fi:case dd:case Li:return{byteLength:4,components:1};case E0:case T0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function z0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function lx(s){const e=new WeakMap;function t(d,h){const p=d.array,_=d.usage,y=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,_),d.onUploadCallback();let E;if(p instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=s.SHORT;else if(p instanceof Uint32Array)E=s.UNSIGNED_INT;else if(p instanceof Int32Array)E=s.INT;else if(p instanceof Int8Array)E=s.BYTE;else if(p instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,h,p){const _=h.array,y=h.updateRanges;if(s.bindBuffer(p,d),y.length===0)s.bufferSubData(p,0,_);else{y.sort((E,T)=>E.start-T.start);let g=0;for(let E=1;E<y.length;E++){const T=y[g],P=y[E];P.start<=T.start+T.count+1?T.count=Math.max(T.count,P.start+P.count-T.start):(++g,y[g]=P)}y.length=g+1;for(let E=0,T=y.length;E<T;E++){const P=y[E];s.bufferSubData(p,P.start*_.BYTES_PER_ELEMENT,_,P.start,P.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:o,remove:l,update:u}}var cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ux=`#ifdef USE_ALPHAHASH
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
#endif`,fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mx=`#ifdef USE_AOMAP
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
#endif`,gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
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
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ex=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nx=`#define PI 3.141592653589793
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
} // validated`,Dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ix=`vec3 transformedNormal = objectNormal;
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
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jx=`#ifdef USE_GRADIENTMAP
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
}`,Zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ey=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ay=`PhysicalMaterial material;
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
#endif`,oy=`uniform sampler2D dfgLUT;
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
}`,ly=`
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xy=`#if defined( USE_POINTS_UV )
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
#endif`,yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,My=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ny=`#ifdef USE_NORMALMAP
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
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ky=`float getShadowMask() {
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
}`,$y=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jy=`#ifdef USE_SKINNING
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
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
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
}`,gS=`#if DEPTH_PACKING == 3200
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
}`,vS=`#define DISTANCE
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
}`,_S=`#define DISTANCE
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`uniform float scale;
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
}`,MS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,TS=`uniform vec3 diffuse;
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
}`,wS=`#define LAMBERT
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
}`,AS=`#define LAMBERT
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
}`,bS=`#define MATCAP
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
}`,RS=`#define MATCAP
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
}`,CS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,LS=`#define PHONG
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
}`,NS=`#define PHONG
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
}`,DS=`#define STANDARD
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
}`,IS=`#define STANDARD
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
}`,US=`#define TOON
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
}`,FS=`#define TOON
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
}`,OS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,BS=`#include <common>
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
}`,zS=`uniform vec3 color;
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
}`,VS=`uniform float rotation;
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
}`,HS=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:cx,alphahash_pars_fragment:ux,alphamap_fragment:fx,alphamap_pars_fragment:dx,alphatest_fragment:hx,alphatest_pars_fragment:px,aomap_fragment:mx,aomap_pars_fragment:gx,batching_pars_vertex:vx,batching_vertex:_x,begin_vertex:xx,beginnormal_vertex:yx,bsdfs:Sx,iridescence_fragment:Mx,bumpmap_pars_fragment:Ex,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:wx,clipping_planes_pars_vertex:Ax,clipping_planes_vertex:bx,color_fragment:Rx,color_pars_fragment:Cx,color_pars_vertex:Px,color_vertex:Lx,common:Nx,cube_uv_reflection_fragment:Dx,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Ux,displacementmap_vertex:Fx,emissivemap_fragment:Ox,emissivemap_pars_fragment:kx,colorspace_fragment:Bx,colorspace_pars_fragment:zx,envmap_fragment:Vx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Gx,envmap_pars_vertex:Wx,envmap_physical_pars_fragment:ty,envmap_vertex:Xx,fog_vertex:qx,fog_pars_vertex:Yx,fog_fragment:Kx,fog_pars_fragment:$x,gradientmap_pars_fragment:jx,lightmap_pars_fragment:Zx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:Qx,lights_pars_begin:ey,lights_toon_fragment:ny,lights_toon_pars_fragment:iy,lights_phong_fragment:ry,lights_phong_pars_fragment:sy,lights_physical_fragment:ay,lights_physical_pars_fragment:oy,lights_fragment_begin:ly,lights_fragment_maps:cy,lights_fragment_end:uy,lightprobes_pars_fragment:fy,logdepthbuf_fragment:dy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:vy,map_particle_fragment:_y,map_particle_pars_fragment:xy,metalnessmap_fragment:yy,metalnessmap_pars_fragment:Sy,morphinstance_vertex:My,morphcolor_vertex:Ey,morphnormal_vertex:Ty,morphtarget_pars_vertex:wy,morphtarget_vertex:Ay,normal_fragment_begin:by,normal_fragment_maps:Ry,normal_pars_fragment:Cy,normal_pars_vertex:Py,normal_vertex:Ly,normalmap_pars_fragment:Ny,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Uy,iridescence_pars_fragment:Fy,opaque_fragment:Oy,packing:ky,premultiplied_alpha_fragment:By,project_vertex:zy,dithering_fragment:Vy,dithering_pars_fragment:Hy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Wy,shadowmap_pars_fragment:Xy,shadowmap_pars_vertex:qy,shadowmap_vertex:Yy,shadowmask_pars_fragment:Ky,skinbase_vertex:$y,skinning_pars_vertex:jy,skinning_vertex:Zy,skinnormal_vertex:Jy,specularmap_fragment:Qy,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:rS,uv_pars_fragment:sS,uv_pars_vertex:aS,uv_vertex:oS,worldpos_vertex:lS,background_vert:cS,background_frag:uS,backgroundCube_vert:fS,backgroundCube_frag:dS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distance_vert:vS,distance_frag:_S,equirect_vert:xS,equirect_frag:yS,linedashed_vert:SS,linedashed_frag:MS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:wS,meshlambert_frag:AS,meshmatcap_vert:bS,meshmatcap_frag:RS,meshnormal_vert:CS,meshnormal_frag:PS,meshphong_vert:LS,meshphong_frag:NS,meshphysical_vert:DS,meshphysical_frag:IS,meshtoon_vert:US,meshtoon_frag:FS,points_vert:OS,points_frag:kS,shadow_vert:BS,shadow_frag:zS,sprite_vert:VS,sprite_frag:HS},Fe={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Nn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Nn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new gt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Nn([Fe.points,Fe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Nn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Nn([Fe.common,Fe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Nn([Fe.sprite,Fe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Nn([Fe.common,Fe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Nn([Fe.lights,Fe.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Pl={r:0,b:0,g:0},GS=new qt,V0=new ct;V0.set(-1,0,0,0,1,0,0,0,1);function WS(s,e,t,r,o,l){const u=new gt(0);let d=o===!0?0:1,h,p,_=null,y=0,g=null;function E(U){let O=U.isScene===!0?U.background:null;if(O&&O.isTexture){const R=U.backgroundBlurriness>0;O=e.get(O,R)}return O}function T(U){let O=!1;const R=E(U);R===null?x(u,d):R&&R.isColor&&(x(R,1),O=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function P(U,O){const R=E(O);R&&(R.isCubeTexture||R.mapping===Kl)?(p===void 0&&(p=new Zt(new Ui(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:na(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(O.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(V0),p.material.toneMapped=St.getTransfer(R.colorSpace)!==It,(_!==R||y!==R.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=R,y=R.version,g=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new Zt(new nr(2,2),new Oi({name:"BackgroundMaterial",uniforms:na(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.toneMapped=St.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||y!==R.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=R,y=R.version,g=s.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null))}function x(U,O){U.getRGB(Pl,F0(s)),t.buffers.color.setClear(Pl.r,Pl.g,Pl.b,O,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,O=1){u.set(U),d=O,x(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,x(u,d)},render:T,addToRenderList:P,dispose:v}}function XS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function d(k,W,re,ce,j){let fe=!1;const Z=y(k,ce,re,W);l!==Z&&(l=Z,p(l.object)),fe=E(k,ce,re,j),fe&&T(k,ce,re,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,R(k,W,re,ce),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function h(){return s.createVertexArray()}function p(k){return s.bindVertexArray(k)}function _(k){return s.deleteVertexArray(k)}function y(k,W,re,ce){const j=ce.wireframe===!0;let fe=r[W.id];fe===void 0&&(fe={},r[W.id]=fe);const Z=k.isInstancedMesh===!0?k.id:0;let Y=fe[Z];Y===void 0&&(Y={},fe[Z]=Y);let le=Y[re.id];le===void 0&&(le={},Y[re.id]=le);let ue=le[j];return ue===void 0&&(ue=g(h()),le[j]=ue),ue}function g(k){const W=[],re=[],ce=[];for(let j=0;j<t;j++)W[j]=0,re[j]=0,ce[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:re,attributeDivisors:ce,object:k,attributes:{},index:null}}function E(k,W,re,ce){const j=l.attributes,fe=W.attributes;let Z=0;const Y=re.getAttributes();for(const le in Y)if(Y[le].location>=0){const F=j[le];let Q=fe[le];if(Q===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor)),F===void 0||F.attribute!==Q||Q&&F.data!==Q.data)return!0;Z++}return l.attributesNum!==Z||l.index!==ce}function T(k,W,re,ce){const j={},fe=W.attributes;let Z=0;const Y=re.getAttributes();for(const le in Y)if(Y[le].location>=0){let F=fe[le];F===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(F=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(F=k.instanceColor));const Q={};Q.attribute=F,F&&F.data&&(Q.data=F.data),j[le]=Q,Z++}l.attributes=j,l.attributesNum=Z,l.index=ce}function P(){const k=l.newAttributes;for(let W=0,re=k.length;W<re;W++)k[W]=0}function x(k){v(k,0)}function v(k,W){const re=l.newAttributes,ce=l.enabledAttributes,j=l.attributeDivisors;re[k]=1,ce[k]===0&&(s.enableVertexAttribArray(k),ce[k]=1),j[k]!==W&&(s.vertexAttribDivisor(k,W),j[k]=W)}function U(){const k=l.newAttributes,W=l.enabledAttributes;for(let re=0,ce=W.length;re<ce;re++)W[re]!==k[re]&&(s.disableVertexAttribArray(re),W[re]=0)}function O(k,W,re,ce,j,fe,Z){Z===!0?s.vertexAttribIPointer(k,W,re,j,fe):s.vertexAttribPointer(k,W,re,ce,j,fe)}function R(k,W,re,ce){P();const j=ce.attributes,fe=re.getAttributes(),Z=W.defaultAttributeValues;for(const Y in fe){const le=fe[Y];if(le.location>=0){let ue=j[Y];if(ue===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor)),ue!==void 0){const F=ue.normalized,Q=ue.itemSize,Oe=e.get(ue);if(Oe===void 0)continue;const Xe=Oe.buffer,Ve=Oe.type,K=Oe.bytesPerElement,xe=Ve===s.INT||Ve===s.UNSIGNED_INT||ue.gpuType===dd;if(ue.isInterleavedBufferAttribute){const pe=ue.data,ge=pe.stride,Ie=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let ye=0;ye<le.locationSize;ye++)v(le.location+ye,pe.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ye=0;ye<le.locationSize;ye++)x(le.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let ye=0;ye<le.locationSize;ye++)O(le.location+ye,Q/le.locationSize,Ve,F,ge*K,(Ie+Q/le.locationSize*ye)*K,xe)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<le.locationSize;pe++)v(le.location+pe,ue.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<le.locationSize;pe++)x(le.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let pe=0;pe<le.locationSize;pe++)O(le.location+pe,Q/le.locationSize,Ve,F,Q*K,Q/le.locationSize*pe*K,xe)}}else if(Z!==void 0){const F=Z[Y];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(le.location,F);break;case 3:s.vertexAttrib3fv(le.location,F);break;case 4:s.vertexAttrib4fv(le.location,F);break;default:s.vertexAttrib1fv(le.location,F)}}}}U()}function D(){L();for(const k in r){const W=r[k];for(const re in W){const ce=W[re];for(const j in ce){const fe=ce[j];for(const Z in fe)_(fe[Z].object),delete fe[Z];delete ce[j]}}delete r[k]}}function b(k){if(r[k.id]===void 0)return;const W=r[k.id];for(const re in W){const ce=W[re];for(const j in ce){const fe=ce[j];for(const Z in fe)_(fe[Z].object),delete fe[Z];delete ce[j]}}delete r[k.id]}function C(k){for(const W in r){const re=r[W];for(const ce in re){const j=re[ce];if(j[k.id]===void 0)continue;const fe=j[k.id];for(const Z in fe)_(fe[Z].object),delete fe[Z];delete j[k.id]}}}function S(k){for(const W in r){const re=r[W],ce=k.isInstancedMesh===!0?k.id:0,j=re[ce];if(j!==void 0){for(const fe in j){const Z=j[fe];for(const Y in Z)_(Z[Y].object),delete Z[Y];delete j[fe]}delete re[ce],Object.keys(re).length===0&&delete r[W]}}}function L(){z(),u=!0,l!==o&&(l=o,p(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:L,resetDefaultState:z,dispose:D,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:P,enableAttribute:x,disableUnusedAttributes:U}}function qS(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,_){_!==0&&(s.drawArraysInstanced(r,h,p,_),t.update(p,r,_))}function d(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,_);let g=0;for(let E=0;E<_;E++)g+=p[E];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function YS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(C){return!(C!==yi&&r.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(C){const S=C===ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jn&&r.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Li&&!S)}function h(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(st("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const y=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:T,maxTextureSize:P,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:U,maxVaryings:O,maxFragmentUniforms:R,maxSamples:D,samples:b}}function KS(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new ns,d=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const E=y.length!==0||g||r!==0||o;return o=g,r=y.length,E},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){t=_(y,g,0)},this.setState=function(y,g,E){const T=y.clippingPlanes,P=y.clipIntersection,x=y.clipShadows,v=s.get(y);if(!o||T===null||T.length===0||l&&!x)l?_(null):p();else{const U=l?0:r,O=U*4;let R=v.clippingState||null;h.value=R,R=_(T,g,O,E);for(let D=0;D!==O;++D)R[D]=t[D];v.clippingState=R,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=U}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,g,E,T){const P=y!==null?y.length:0;let x=null;if(P!==0){if(x=h.value,T!==!0||x===null){const v=E+P*4,U=g.matrixWorldInverse;d.getNormalMatrix(U),(x===null||x.length<v)&&(x=new Float32Array(v));for(let O=0,R=E;O!==P;++O,R+=4)u.copy(y[O]).applyMatrix4(U,d),u.normal.toArray(x,R),x[R+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,x}}const Lr=4,Bm=[.125,.215,.35,.446,.526,.582],rs=20,$S=256,Ya=new bd,zm=new gt;let ff=null,df=0,hf=0,pf=!1;const jS=new J;class Vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=jS}=l;ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ff,df,hf),this._renderer.xr.enabled=pf,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:ir,format:yi,colorSpace:Wl,depthBuffer:!1},o=Hm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZS(l)),this._blurMaterial=QS(l,e,t),this._ggxMaterial=JS(l,e,t)}return o}_compileMaterial(e){const t=new Zt(new Gn,e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,r,o,l){const h=new Zn(90,1,t,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,E=y.toneMapping;y.getClearColor(zm),y.toneMapping=Di,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new Ui,new ls({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,x=P.material;let v=!1;const U=e.background;U?U.isColor&&(x.color.copy(U),e.background=null,v=!0):(x.color.copy(zm),v=!0);for(let O=0;O<6;O++){const R=O%3;R===0?(h.up.set(0,p[O],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[O],l.y,l.z)):R===1?(h.up.set(0,0,p[O]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[O],l.z)):(h.up.set(0,p[O],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[O]));const D=this._cubeSize;$s(o,R*D,O>2?D:0,D,D),y.setRenderTarget(o),v&&y.render(P,h),y.render(e,h)}y.toneMapping=E,y.autoClear=g,e.background=U}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===cs||e.mapping===ea;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;$s(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,Ya)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),y=Math.sqrt(p*p-_*_),g=0+p*1.25,E=y*g,{_lodMax:T}=this,P=this._sizeLods[r],x=3*P*(r>T-Lr?r-T+Lr:0),v=4*(this._cubeSize-P);h.envMap.value=e.texture,h.roughness.value=E,h.mipInt.value=T-t,$s(l,x,v,3*P,2*P),o.setRenderTarget(l),o.render(d,Ya),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=T-r,$s(e,x,v,3*P,2*P),o.setRenderTarget(e),o.render(d,Ya)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,y=this._lodMeshes[o];y.material=p;const g=p.uniforms,E=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*E):2*Math.PI/(2*rs-1),P=l/T,x=isFinite(l)?1+Math.floor(_*P):rs;x>rs&&st(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${rs}`);const v=[];let U=0;for(let C=0;C<rs;++C){const S=C/P,L=Math.exp(-S*S/2);v.push(L),C===0?U+=L:C<x&&(U+=2*L)}for(let C=0;C<v.length;C++)v[C]=v[C]/U;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=v,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:O}=this;g.dTheta.value=T,g.mipInt.value=O-r;const R=this._sizeLods[o],D=3*R*(o>O-Lr?o-O+Lr:0),b=4*(this._cubeSize-R);$s(t,D,b,3*R,2*R),h.setRenderTarget(t),h.render(y,Ya)}}function ZS(s){const e=[],t=[],r=[];let o=s;const l=s-Lr+1+Bm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let h=1/d;u>s-Lr?h=Bm[u-s+Lr-1]:u===0&&(h=0),t.push(h);const p=1/(d-2),_=-p,y=1+p,g=[_,_,y,_,y,y,_,_,y,y,_,y],E=6,T=6,P=3,x=2,v=1,U=new Float32Array(P*T*E),O=new Float32Array(x*T*E),R=new Float32Array(v*T*E);for(let b=0;b<E;b++){const C=b%3*2/3-1,S=b>2?0:-1,L=[C,S,0,C+2/3,S,0,C+2/3,S+1,0,C,S,0,C+2/3,S+1,0,C,S+1,0];U.set(L,P*T*b),O.set(g,x*T*b);const z=[b,b,b,b,b,b];R.set(z,v*T*b)}const D=new Gn;D.setAttribute("position",new Si(U,P)),D.setAttribute("uv",new Si(O,x)),D.setAttribute("faceIndex",new Si(R,v)),r.push(new Zt(D,null)),o>Lr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Hm(s,e,t){const r=new Ii(s,e,t);return r.texture.mapping=Kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function $s(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function JS(s,e,t){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$S,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function QS(s,e,t){const r=new Float32Array(rs),o=new J(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Gm(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Wm(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}class H0 extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new I0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ui(5,5,5),l=new Oi({name:"CubemapFromEquirect",uniforms:na(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:er});l.uniforms.tEquirect.value=t;const u=new Zt(o,l),d=t.minFilter;return t.minFilter===ss&&(t.minFilter=bn),new rx(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function eM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,E=!1){return g==null?null:E?u(g):l(g)}function l(g){if(g&&g.isTexture){const E=g.mapping;if(E===Fu||E===Ou)if(e.has(g)){const T=e.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const P=new H0(T.height);return P.fromEquirectangularTexture(s,g),e.set(g,P),g.addEventListener("dispose",p),d(P.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const E=g.mapping,T=E===Fu||E===Ou,P=E===cs||E===ea;if(T||P){let x=t.get(g);const v=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new Vm(s)),x=T?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const U=g.image;return T&&U&&U.height>0||P&&U&&h(U)?(r===null&&(r=new Vm(s)),x=T?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",_),x.texture):null}}}return g}function d(g,E){return E===Fu?g.mapping=cs:E===Ou&&(g.mapping=ea),g}function h(g){let E=0;const T=6;for(let P=0;P<T;P++)g[P]!==void 0&&E++;return E===T}function p(g){const E=g.target;E.removeEventListener("dispose",p);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function _(g){const E=g.target;E.removeEventListener("dispose",_);const T=t.get(E);T!==void 0&&(t.delete(E),T.dispose())}function y(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function tM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Zs("WebGLRenderer: "+r+" extension not supported."),o}}}function nM(s,e,t,r){const o={},l=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const E=l.get(g);E&&(e.remove(E),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(y,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(y){const g=y.attributes;for(const E in g)e.update(g[E],s.ARRAY_BUFFER)}function p(y){const g=[],E=y.index,T=y.attributes.position;let P=0;if(T===void 0)return;if(E!==null){const U=E.array;P=E.version;for(let O=0,R=U.length;O<R;O+=3){const D=U[O+0],b=U[O+1],C=U[O+2];g.push(D,b,b,C,C,D)}}else{const U=T.array;P=T.version;for(let O=0,R=U.length/3-1;O<R;O+=3){const D=O+0,b=O+1,C=O+2;g.push(D,b,b,C,C,D)}}const x=new(T.count>=65535?N0:L0)(g,1);x.version=P;const v=l.get(y);v&&e.remove(v),l.set(y,x)}function _(y){const g=l.get(y);if(g){const E=y.index;E!==null&&g.version<E.version&&p(y)}else p(y);return l.get(y)}return{get:d,update:h,getWireframeAttribute:_}}function iM(s,e,t){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function h(y,g){s.drawElements(r,g,l,y*u),t.update(g,r,1)}function p(y,g,E){E!==0&&(s.drawElementsInstanced(r,g,l,y*u,E),t.update(g,r,E))}function _(y,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,y,0,E);let P=0;for(let x=0;x<E;x++)P+=g[x];t.update(P,r,1)}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=_}function rM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:wt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function sM(s,e,t){const r=new WeakMap,o=new Jt;function l(u,d,h){const p=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let g=r.get(d);if(g===void 0||g.count!==y){let z=function(){S.dispose(),r.delete(d),d.removeEventListener("dispose",z)};var E=z;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,P=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let R=0;T===!0&&(R=1),P===!0&&(R=2),x===!0&&(R=3);let D=d.attributes.position.count*R,b=1;D>e.maxTextureSize&&(b=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const C=new Float32Array(D*b*4*y),S=new C0(C,D,b,y);S.type=Li,S.needsUpdate=!0;const L=R*4;for(let k=0;k<y;k++){const W=v[k],re=U[k],ce=O[k],j=D*b*4*k;for(let fe=0;fe<W.count;fe++){const Z=fe*L;T===!0&&(o.fromBufferAttribute(W,fe),C[j+Z+0]=o.x,C[j+Z+1]=o.y,C[j+Z+2]=o.z,C[j+Z+3]=0),P===!0&&(o.fromBufferAttribute(re,fe),C[j+Z+4]=o.x,C[j+Z+5]=o.y,C[j+Z+6]=o.z,C[j+Z+7]=0),x===!0&&(o.fromBufferAttribute(ce,fe),C[j+Z+8]=o.x,C[j+Z+9]=o.y,C[j+Z+10]=o.z,C[j+Z+11]=ce.itemSize===4?o.w:1)}}g={count:y,texture:S,size:new xt(D,b)},r.set(d,g),d.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const P=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",P),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function aM(s,e,t,r,o){let l=new WeakMap;function u(p){const _=o.render.frame,y=p.geometry,g=e.get(p,y);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==_&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const E=p.skeleton;l.get(E)!==_&&(E.update(),l.set(E,_))}return g}function d(){l=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:d}}const oM={[h0]:"LINEAR_TONE_MAPPING",[p0]:"REINHARD_TONE_MAPPING",[m0]:"CINEON_TONE_MAPPING",[g0]:"ACES_FILMIC_TONE_MAPPING",[_0]:"AGX_TONE_MAPPING",[x0]:"NEUTRAL_TONE_MAPPING",[v0]:"CUSTOM_TONE_MAPPING"};function lM(s,e,t,r,o,l){const u=new Ii(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,depthTexture:o?new ta(e,t):void 0}),d=new Ii(e,t,{type:ir,depthBuffer:!1,stencilBuffer:!1}),h=new Gn;h.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new mn([0,2,0,0,2,0],2));const p=new j_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Zt(h,p),y=new bd(-1,1,1,-1,0,1);let g=null,E=null,T=!1,P,x=null,v=[],U=!1;this.setSize=function(O,R){u.setSize(O,R),d.setSize(O,R);for(let D=0;D<v.length;D++){const b=v[D];b.setSize&&b.setSize(O,R)}},this.setEffects=function(O){v=O,U=v.length>0&&v[0].isRenderPass===!0;const R=u.width,D=u.height;for(let b=0;b<v.length;b++){const C=v[b];C.setSize&&C.setSize(R,D)}},this.begin=function(O,R){if(T||O.toneMapping===Di&&v.length===0)return!1;if(x=R,R!==null){const D=R.width,b=R.height;(u.width!==D||u.height!==b)&&this.setSize(D,b)}return U===!1&&O.setRenderTarget(u),P=O.toneMapping,O.toneMapping=Di,!0},this.hasRenderPass=function(){return U},this.end=function(O,R){O.toneMapping=P,T=!0;let D=u,b=d;for(let C=0;C<v.length;C++){const S=v[C];if(S.enabled!==!1&&(S.render(O,b,D,R),S.needsSwap!==!1)){const L=D;D=b,b=L}}if(g!==O.outputColorSpace||E!==O.toneMapping){g=O.outputColorSpace,E=O.toneMapping,p.defines={},St.getTransfer(g)===It&&(p.defines.SRGB_TRANSFER="");const C=oM[E];C&&(p.defines[C]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,O.setRenderTarget(x),O.render(_,y),x=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),h.dispose(),p.dispose()}}const G0=new Rn,ld=new ta(1,1),W0=new C0,X0=new w_,q0=new I0,Xm=[],qm=[],Ym=new Float32Array(16),Km=new Float32Array(9),$m=new Float32Array(4);function sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Xm[o];if(l===void 0&&(l=new Float32Array(o),Xm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function un(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Ql(s,e){let t=qm[e];t===void 0&&(t=new Int32Array(e),qm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function cM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),un(t,e)}}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),un(t,e)}}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),un(t,e)}}function hM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;$m.set(r),s.uniformMatrix2fv(this.addr,!1,$m),un(t,r)}}function pM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;Km.set(r),s.uniformMatrix3fv(this.addr,!1,Km),un(t,r)}}function mM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;Ym.set(r),s.uniformMatrix4fv(this.addr,!1,Ym),un(t,r)}}function gM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),un(t,e)}}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),un(t,e)}}function xM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),un(t,e)}}function yM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),un(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),un(t,e)}}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),un(t,e)}}function TM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(ld.compareFunction=t.isReversedDepthBuffer()?xd:_d,l=ld):l=G0,t.setTexture2D(e||l,o)}function wM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||X0,o)}function AM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||q0,o)}function bM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||W0,o)}function RM(s){switch(s){case 5126:return cM;case 35664:return uM;case 35665:return fM;case 35666:return dM;case 35674:return hM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return vM;case 35668:case 35672:return _M;case 35669:case 35673:return xM;case 5125:return yM;case 36294:return SM;case 36295:return MM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return bM}}function CM(s,e){s.uniform1fv(this.addr,e)}function PM(s,e){const t=sa(e,this.size,2);s.uniform2fv(this.addr,t)}function LM(s,e){const t=sa(e,this.size,3);s.uniform3fv(this.addr,t)}function NM(s,e){const t=sa(e,this.size,4);s.uniform4fv(this.addr,t)}function DM(s,e){const t=sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function IM(s,e){const t=sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function UM(s,e){const t=sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function FM(s,e){s.uniform1iv(this.addr,e)}function OM(s,e){s.uniform2iv(this.addr,e)}function kM(s,e){s.uniform3iv(this.addr,e)}function BM(s,e){s.uniform4iv(this.addr,e)}function zM(s,e){s.uniform1uiv(this.addr,e)}function VM(s,e){s.uniform2uiv(this.addr,e)}function HM(s,e){s.uniform3uiv(this.addr,e)}function GM(s,e){s.uniform4uiv(this.addr,e)}function WM(s,e,t){const r=this.cache,o=e.length,l=Ql(t,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=ld:u=G0;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function XM(s,e,t){const r=this.cache,o=e.length,l=Ql(t,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||X0,l[u])}function qM(s,e,t){const r=this.cache,o=e.length,l=Ql(t,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||q0,l[u])}function YM(s,e,t){const r=this.cache,o=e.length,l=Ql(t,o);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||W0,l[u])}function KM(s){switch(s){case 5126:return CM;case 35664:return PM;case 35665:return LM;case 35666:return NM;case 35674:return DM;case 35675:return IM;case 35676:return UM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return kM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return VM;case 36295:return HM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}class $M{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}}class jM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KM(t.type)}}class ZM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const mf=/(\w+)(\])?(\[|\.)?/g;function jm(s,e){s.seq.push(e),s.map[e.id]=e}function JM(s,e,t){const r=s.name,o=r.length;for(mf.lastIndex=0;;){const l=mf.exec(r),u=mf.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===o){jm(t,p===void 0?new $M(d,s,e):new jM(d,s,e));break}else{let y=t.map[d];y===void 0&&(y=new ZM(d),jm(t,y)),t=y}}}class zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),h=e.getUniformLocation(t,d.name);JM(d,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Zm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const QM=37297;let eE=0;function tE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Jm=new ct;function nE(s){St._getMatrix(Jm,St.workingColorSpace,s);const e=`mat3( ${Jm.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(s)){case Xl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Qm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+tE(s.getShaderSource(e),d)}else return l}function iE(s,e){const t=nE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const rE={[h0]:"Linear",[p0]:"Reinhard",[m0]:"Cineon",[g0]:"ACESFilmic",[_0]:"AgX",[x0]:"Neutral",[v0]:"Custom"};function sE(s,e){const t=rE[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ll=new J;function aE(){St.getLuminanceCoefficients(Ll);const s=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function lE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function cE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function ja(s){return s!==""}function e0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uE=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(s){return s.replace(uE,dE)}const fE=new Map;function dE(s,e){let t=ut[e];if(t===void 0){const r=fE.get(e);if(r!==void 0)t=ut[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cd(t)}const hE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(s){return s.replace(hE,pE)}function pE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function i0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const mE={[Ul]:"SHADOWMAP_TYPE_PCF",[$a]:"SHADOWMAP_TYPE_VSM"};function gE(s){return mE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vE={[cs]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE",[Kl]:"ENVMAP_TYPE_CUBE_UV"};function _E(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":vE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const xE={[ea]:"ENVMAP_MODE_REFRACTION"};function yE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":xE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SE={[d0]:"ENVMAP_BLENDING_MULTIPLY",[r_]:"ENVMAP_BLENDING_MIX",[s_]:"ENVMAP_BLENDING_ADD"};function ME(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":SE[s.combine]||"ENVMAP_BLENDING_NONE"}function EE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function TE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=gE(t),p=_E(t),_=yE(t),y=ME(t),g=EE(t),E=oE(t),T=lE(l),P=o.createProgram();let x,v,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ja).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ja).join(`
`),v.length>0&&(v+=`
`)):(x=[i0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),v=[i0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?ut.tonemapping_pars_fragment:"",t.toneMapping!==Di?sE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,iE("linearToOutputTexel",t.outputColorSpace),aE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),u=cd(u),u=e0(u,t),u=t0(u,t),d=cd(d),d=e0(d,t),d=t0(d,t),u=n0(u),d=n0(d),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=U+x+u,R=U+v+d,D=Zm(o,o.VERTEX_SHADER,O),b=Zm(o,o.FRAGMENT_SHADER,R);o.attachShader(P,D),o.attachShader(P,b),t.index0AttributeName!==void 0?o.bindAttribLocation(P,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(P,0,"position"),o.linkProgram(P);function C(k){if(s.debug.checkShaderErrors){const W=o.getProgramInfoLog(P)||"",re=o.getShaderInfoLog(D)||"",ce=o.getShaderInfoLog(b)||"",j=W.trim(),fe=re.trim(),Z=ce.trim();let Y=!0,le=!0;if(o.getProgramParameter(P,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,P,D,b);else{const ue=Qm(o,D,"vertex"),F=Qm(o,b,"fragment");wt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(P,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+j+`
`+ue+`
`+F)}else j!==""?st("WebGLProgram: Program Info Log:",j):(fe===""||Z==="")&&(le=!1);le&&(k.diagnostics={runnable:Y,programLog:j,vertexShader:{log:fe,prefix:x},fragmentShader:{log:Z,prefix:v}})}o.deleteShader(D),o.deleteShader(b),S=new zl(o,P),L=cE(o,P)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let L;this.getAttributes=function(){return L===void 0&&C(this),L};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(P,QM)),z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eE++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=D,this.fragmentShader=b,this}let wE=0;class AE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new bE(e),t.set(e,r)),r}}class bE{constructor(e){this.id=wE++,this.code=e,this.usedTimes=0}}function RE(s){return s===us||s===Hl||s===Gl}function CE(s,e,t,r,o,l){const u=new Sd,d=new AE,h=new Set,p=[],_=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(S){return h.add(S),S===0?"uv":`uv${S}`}function P(S,L,z,k,W,re){const ce=k.fog,j=W.geometry,fe=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,Z=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,Y=e.get(S.envMap||fe,Z),le=Y&&Y.mapping===Kl?Y.image.height:null,ue=E[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&st("WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const F=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Q=F!==void 0?F.length:0;let Oe=0;j.morphAttributes.position!==void 0&&(Oe=1),j.morphAttributes.normal!==void 0&&(Oe=2),j.morphAttributes.color!==void 0&&(Oe=3);let Xe,Ve,K,xe;if(ue){const Ge=Ci[ue];Xe=Ge.vertexShader,Ve=Ge.fragmentShader}else{Xe=S.vertexShader,Ve=S.fragmentShader;const Ge=d.getVertexShaderStage(S),Ft=d.getFragmentShaderStage(S);d.update(S,Ge,Ft),K=Ge.id,xe=Ft.id}const pe=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Ie=W.isInstancedMesh===!0,ye=W.isBatchedMesh===!0,bt=!!S.map,et=!!S.matcap,ft=!!Y,vt=!!S.aoMap,dt=!!S.lightMap,Ut=!!S.bumpMap&&S.wireframe===!1,Yt=!!S.normalMap,Gt=!!S.displacementMap,Bt=!!S.emissiveMap,_t=!!S.metalnessMap,Rt=!!S.roughnessMap,H=S.anisotropy>0,tn=S.clearcoat>0,yt=S.dispersion>0,N=S.iridescence>0,M=S.sheen>0,$=S.transmission>0,se=H&&!!S.anisotropyMap,de=tn&&!!S.clearcoatMap,Te=tn&&!!S.clearcoatNormalMap,Pe=tn&&!!S.clearcoatRoughnessMap,he=N&&!!S.iridescenceMap,ve=N&&!!S.iridescenceThicknessMap,Ne=M&&!!S.sheenColorMap,$e=M&&!!S.sheenRoughnessMap,De=!!S.specularMap,Ce=!!S.specularColorMap,Qe=!!S.specularIntensityMap,tt=$&&!!S.transmissionMap,rt=$&&!!S.thicknessMap,V=!!S.gradientMap,Re=!!S.alphaMap,me=S.alphaTest>0,Le=!!S.alphaHash,Ue=!!S.extensions;let _e=Di;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(_e=s.toneMapping);const qe={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:Ve,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:ye,batchingColor:ye&&W._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&W.instanceColor!==null,instancingMorph:Ie&&W.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:bt,matcap:et,envMap:ft,envMapMode:ft&&Y.mapping,envMapCubeUVHeight:le,aoMap:vt,lightMap:dt,bumpMap:Ut,normalMap:Yt,displacementMap:Gt,emissiveMap:Bt,normalMapObjectSpace:Yt&&S.normalMapType===l_,normalMapTangentSpace:Yt&&S.normalMapType===rd,packedNormalMap:Yt&&S.normalMapType===rd&&RE(S.normalMap.format),metalnessMap:_t,roughnessMap:Rt,anisotropy:H,anisotropyMap:se,clearcoat:tn,clearcoatMap:de,clearcoatNormalMap:Te,clearcoatRoughnessMap:Pe,dispersion:yt,iridescence:N,iridescenceMap:he,iridescenceThicknessMap:ve,sheen:M,sheenColorMap:Ne,sheenRoughnessMap:$e,specularMap:De,specularColorMap:Ce,specularIntensityMap:Qe,transmission:$,transmissionMap:tt,thicknessMap:rt,gradientMap:V,opaque:S.transparent===!1&&S.blending===js&&S.alphaToCoverage===!1,alphaMap:Re,alphaTest:me,alphaHash:Le,combine:S.combine,mapUv:bt&&T(S.map.channel),aoMapUv:vt&&T(S.aoMap.channel),lightMapUv:dt&&T(S.lightMap.channel),bumpMapUv:Ut&&T(S.bumpMap.channel),normalMapUv:Yt&&T(S.normalMap.channel),displacementMapUv:Gt&&T(S.displacementMap.channel),emissiveMapUv:Bt&&T(S.emissiveMap.channel),metalnessMapUv:_t&&T(S.metalnessMap.channel),roughnessMapUv:Rt&&T(S.roughnessMap.channel),anisotropyMapUv:se&&T(S.anisotropyMap.channel),clearcoatMapUv:de&&T(S.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&T(S.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&T(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&T(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&T(S.sheenColorMap.channel),sheenRoughnessMapUv:$e&&T(S.sheenRoughnessMap.channel),specularMapUv:De&&T(S.specularMap.channel),specularColorMapUv:Ce&&T(S.specularColorMap.channel),specularIntensityMapUv:Qe&&T(S.specularIntensityMap.channel),transmissionMapUv:tt&&T(S.transmissionMap.channel),thicknessMapUv:rt&&T(S.thicknessMap.channel),alphaMapUv:Re&&T(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Yt||H),vertexNormals:!!j.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!j.attributes.uv&&(bt||Re),fog:!!ce,useFog:S.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||j.attributes.normal===void 0&&Yt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ge,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Oe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:bt&&S.map.isVideoTexture===!0&&St.getTransfer(S.map.colorSpace)===It,decodeVideoTextureEmissive:Bt&&S.emissiveMap.isVideoTexture===!0&&St.getTransfer(S.emissiveMap.colorSpace)===It,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pi,flipSided:S.side===Hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return qe.vertexUv1s=h.has(1),qe.vertexUv2s=h.has(2),qe.vertexUv3s=h.has(3),h.clear(),qe}function x(S){const L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)L.push(z),L.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(v(L,S),U(L,S),L.push(s.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function v(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.anisotropyMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.numLightProbes),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function U(S,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),S.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),S.push(u.mask)}function O(S){const L=E[S.type];let z;if(L){const k=Ci[L];z=Y_.clone(k.uniforms)}else z=S.uniforms;return z}function R(S,L){let z=_.get(L);return z!==void 0?++z.usedTimes:(z=new TE(s,L,S,o),p.push(z),_.set(L,z)),z}function D(S){if(--S.usedTimes===0){const L=p.indexOf(S);p[L]=p[p.length-1],p.pop(),_.delete(S.cacheKey),S.destroy()}}function b(S){d.remove(S)}function C(){d.dispose()}return{getParameters:P,getProgramCacheKey:x,getUniforms:O,acquireProgram:R,releaseProgram:D,releaseShaderCache:b,programs:p,dispose:C}}function PE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function LE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function r0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function s0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function d(g,E,T,P,x,v){let U=s[e];return U===void 0?(U={id:g.id,object:g,geometry:E,material:T,materialVariant:u(g),groupOrder:P,renderOrder:g.renderOrder,z:x,group:v},s[e]=U):(U.id=g.id,U.object=g,U.geometry=E,U.material=T,U.materialVariant=u(g),U.groupOrder=P,U.renderOrder=g.renderOrder,U.z=x,U.group=v),e++,U}function h(g,E,T,P,x,v){const U=d(g,E,T,P,x,v);T.transmission>0?r.push(U):T.transparent===!0?o.push(U):t.push(U)}function p(g,E,T,P,x,v){const U=d(g,E,T,P,x,v);T.transmission>0?r.unshift(U):T.transparent===!0?o.unshift(U):t.unshift(U)}function _(g,E,T){t.length>1&&t.sort(g||LE),r.length>1&&r.sort(E||r0),o.length>1&&o.sort(E||r0),T&&(t.reverse(),r.reverse(),o.reverse())}function y(){for(let g=e,E=s.length;g<E;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:y,sort:_}}function NE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new s0,s.set(r,[u])):o>=l.length?(u=new s0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function DE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new gt};break;case"SpotLight":t={position:new J,direction:new J,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function IE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let UE=0;function FE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OE(s){const e=new DE,t=IE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new J);const o=new J,l=new qt,u=new qt;function d(p){let _=0,y=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let E=0,T=0,P=0,x=0,v=0,U=0,O=0,R=0,D=0,b=0,C=0;p.sort(FE);for(let L=0,z=p.length;L<z;L++){const k=p[L],W=k.color,re=k.intensity,ce=k.distance;let j=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===us?j=k.shadow.map.texture:j=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=W.r*re,y+=W.g*re,g+=W.b*re;else if(k.isLightProbe){for(let fe=0;fe<9;fe++)r.probe[fe].addScaledVector(k.sh.coefficients[fe],re);C++}else if(k.isDirectionalLight){const fe=e.get(k);if(fe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,Y=t.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[E]=Y,r.directionalShadowMap[E]=j,r.directionalShadowMatrix[E]=k.shadow.matrix,U++}r.directional[E]=fe,E++}else if(k.isSpotLight){const fe=e.get(k);fe.position.setFromMatrixPosition(k.matrixWorld),fe.color.copy(W).multiplyScalar(re),fe.distance=ce,fe.coneCos=Math.cos(k.angle),fe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),fe.decay=k.decay,r.spot[P]=fe;const Z=k.shadow;if(k.map&&(r.spotLightMap[D]=k.map,D++,Z.updateMatrices(k),k.castShadow&&b++),r.spotLightMatrix[P]=Z.matrix,k.castShadow){const Y=t.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[P]=Y,r.spotShadowMap[P]=j,R++}P++}else if(k.isRectAreaLight){const fe=e.get(k);fe.color.copy(W).multiplyScalar(re),fe.halfWidth.set(k.width*.5,0,0),fe.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=fe,x++}else if(k.isPointLight){const fe=e.get(k);if(fe.color.copy(k.color).multiplyScalar(k.intensity),fe.distance=k.distance,fe.decay=k.decay,k.castShadow){const Z=k.shadow,Y=t.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=j,r.pointShadowMatrix[T]=k.shadow.matrix,O++}r.point[T]=fe,T++}else if(k.isHemisphereLight){const fe=e.get(k);fe.skyColor.copy(k.color).multiplyScalar(re),fe.groundColor.copy(k.groundColor).multiplyScalar(re),r.hemi[v]=fe,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=g;const S=r.hash;(S.directionalLength!==E||S.pointLength!==T||S.spotLength!==P||S.rectAreaLength!==x||S.hemiLength!==v||S.numDirectionalShadows!==U||S.numPointShadows!==O||S.numSpotShadows!==R||S.numSpotMaps!==D||S.numLightProbes!==C)&&(r.directional.length=E,r.spot.length=P,r.rectArea.length=x,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=R+D-b,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=C,S.directionalLength=E,S.pointLength=T,S.spotLength=P,S.rectAreaLength=x,S.hemiLength=v,S.numDirectionalShadows=U,S.numPointShadows=O,S.numSpotShadows=R,S.numSpotMaps=D,S.numLightProbes=C,r.version=UE++)}function h(p,_){let y=0,g=0,E=0,T=0,P=0;const x=_.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const O=p[v];if(O.isDirectionalLight){const R=r.directional[y];R.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),y++}else if(O.isSpotLight){const R=r.spot[E];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),E++}else if(O.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(x),u.identity(),l.copy(O.matrixWorld),l.premultiply(x),u.extractRotation(l),R.halfWidth.set(O.width*.5,0,0),R.halfHeight.set(0,O.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),T++}else if(O.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(x),g++}else if(O.isHemisphereLight){const R=r.hemi[P];R.direction.setFromMatrixPosition(O.matrixWorld),R.direction.transformDirection(x),P++}}}return{setup:d,setupView:h,state:r}}function a0(s){const e=new OE(s),t=[],r=[],o=[];function l(g){y.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function d(g){r.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function _(g){e.setupView(t,g)}const y={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:d,pushLightProbeGrid:h}}function kE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new a0(s),e.set(o,[d])):l>=u.length?(d=new a0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zE=`uniform sampler2D shadow_pass;
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
}`,VE=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],HE=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],o0=new qt,Ka=new J,gf=new J;function GE(s,e,t){let r=new Td;const o=new xt,l=new xt,u=new Jt,d=new Z_,h=new J_,p={},_=t.maxTextureSize,y={[Nr]:Hn,[Hn]:Nr,[Pi]:Pi},g=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:BE,fragmentShader:zE}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const T=new Gn;T.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new Zt(T,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let v=this.type;this.render=function(b,C,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===f0&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ul);const L=s.getRenderTarget(),z=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),W=s.state;W.setBlending(er),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const re=v!==this.type;re&&C.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(j=>j.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,j=b.length;ce<j;ce++){const fe=b[ce],Z=fe.shadow;if(Z===void 0){st("WebGLShadowMap:",fe,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const Y=Z.getFrameExtents();o.multiply(Y),l.copy(Z.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/Y.x),o.x=l.x*Y.x,Z.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/Y.y),o.y=l.y*Y.y,Z.mapSize.y=l.y));const le=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=le,Z.map===null||re===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===$a){if(fe.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Ii(o.x,o.y,{format:us,type:ir,minFilter:bn,magFilter:bn,generateMipmaps:!1}),Z.map.texture.name=fe.name+".shadowMap",Z.map.depthTexture=new ta(o.x,o.y,Li),Z.map.depthTexture.name=fe.name+".shadowMapDepth",Z.map.depthTexture.format=rr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=xn,Z.map.depthTexture.magFilter=xn}else fe.isPointLight?(Z.map=new H0(o.x),Z.map.depthTexture=new X_(o.x,Fi)):(Z.map=new Ii(o.x,o.y),Z.map.depthTexture=new ta(o.x,o.y,Fi)),Z.map.depthTexture.name=fe.name+".shadowMap",Z.map.depthTexture.format=rr,this.type===Ul?(Z.map.depthTexture.compareFunction=le?xd:_d,Z.map.depthTexture.minFilter=bn,Z.map.depthTexture.magFilter=bn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=xn,Z.map.depthTexture.magFilter=xn);Z.camera.updateProjectionMatrix()}const ue=Z.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<ue;F++){if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,F),s.clear();else{F===0&&(s.setRenderTarget(Z.map),s.clear());const Q=Z.getViewport(F);u.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),W.viewport(u)}if(fe.isPointLight){const Q=Z.camera,Oe=Z.matrix,Xe=fe.distance||Q.far;Xe!==Q.far&&(Q.far=Xe,Q.updateProjectionMatrix()),Ka.setFromMatrixPosition(fe.matrixWorld),Q.position.copy(Ka),gf.copy(Q.position),gf.add(VE[F]),Q.up.copy(HE[F]),Q.lookAt(gf),Q.updateMatrixWorld(),Oe.makeTranslation(-Ka.x,-Ka.y,-Ka.z),o0.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(o0,Q.coordinateSystem,Q.reversedDepth)}else Z.updateMatrices(fe);r=Z.getFrustum(),R(C,S,Z.camera,fe,this.type)}Z.isPointLightShadow!==!0&&this.type===$a&&U(Z,S),Z.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(L,z,k)};function U(b,C){const S=e.update(P);g.defines.VSM_SAMPLES!==b.blurSamples&&(g.defines.VSM_SAMPLES=b.blurSamples,E.defines.VSM_SAMPLES=b.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ii(o.x,o.y,{format:us,type:ir})),g.uniforms.shadow_pass.value=b.map.depthTexture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(C,null,S,g,P,null),E.uniforms.shadow_pass.value=b.mapPass.texture,E.uniforms.resolution.value=b.mapSize,E.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(C,null,S,E,P,null)}function O(b,C,S,L){let z=null;const k=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(k!==void 0)z=k;else if(z=S.isPointLight===!0?h:d,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const W=z.uuid,re=C.uuid;let ce=p[W];ce===void 0&&(ce={},p[W]=ce);let j=ce[re];j===void 0&&(j=z.clone(),ce[re]=j,C.addEventListener("dispose",D)),z=j}if(z.visible=C.visible,z.wireframe=C.wireframe,L===$a?z.side=C.shadowSide!==null?C.shadowSide:C.side:z.side=C.shadowSide!==null?C.shadowSide:y[C.side],z.alphaMap=C.alphaMap,z.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,z.map=C.map,z.clipShadows=C.clipShadows,z.clippingPlanes=C.clippingPlanes,z.clipIntersection=C.clipIntersection,z.displacementMap=C.displacementMap,z.displacementScale=C.displacementScale,z.displacementBias=C.displacementBias,z.wireframeLinewidth=C.wireframeLinewidth,z.linewidth=C.linewidth,S.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const W=s.properties.get(z);W.light=S}return z}function R(b,C,S,L,z){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&z===$a)&&(!b.frustumCulled||r.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const re=e.update(b),ce=b.material;if(Array.isArray(ce)){const j=re.groups;for(let fe=0,Z=j.length;fe<Z;fe++){const Y=j[fe],le=ce[Y.materialIndex];if(le&&le.visible){const ue=O(b,le,L,z);b.onBeforeShadow(s,b,C,S,re,ue,Y),s.renderBufferDirect(S,null,re,ue,b,Y),b.onAfterShadow(s,b,C,S,re,ue,Y)}}}else if(ce.visible){const j=O(b,ce,L,z);b.onBeforeShadow(s,b,C,S,re,j,null),s.renderBufferDirect(S,null,re,j,b,null),b.onAfterShadow(s,b,C,S,re,j,null)}}const W=b.children;for(let re=0,ce=W.length;re<ce;re++)R(W[re],C,S,L,z)}function D(b){b.target.removeEventListener("dispose",D);for(const S in p){const L=p[S],z=b.target.uuid;z in L&&(L[z].dispose(),delete L[z])}}}function WE(s,e){function t(){let V=!1;const Re=new Jt;let me=null;const Le=new Jt(0,0,0,0);return{setMask:function(Ue){me!==Ue&&!V&&(s.colorMask(Ue,Ue,Ue,Ue),me=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,_e,qe,Ge,Ft){Ft===!0&&(Ue*=Ge,_e*=Ge,qe*=Ge),Re.set(Ue,_e,qe,Ge),Le.equals(Re)===!1&&(s.clearColor(Ue,_e,qe,Ge),Le.copy(Re))},reset:function(){V=!1,me=null,Le.set(-1,0,0,0)}}}function r(){let V=!1,Re=!1,me=null,Le=null,Ue=null;return{setReversed:function(_e){if(Re!==_e){const qe=e.get("EXT_clip_control");_e?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Re=_e;const Ge=Ue;Ue=null,this.setClear(Ge)}},getReversed:function(){return Re},setTest:function(_e){_e?pe(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(_e){me!==_e&&!V&&(s.depthMask(_e),me=_e)},setFunc:function(_e){if(Re&&(_e=__[_e]),Le!==_e){switch(_e){case yf:s.depthFunc(s.NEVER);break;case Sf:s.depthFunc(s.ALWAYS);break;case Mf:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case Ef:s.depthFunc(s.EQUAL);break;case Tf:s.depthFunc(s.GEQUAL);break;case wf:s.depthFunc(s.GREATER);break;case Af:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=_e}},setLocked:function(_e){V=_e},setClear:function(_e){Ue!==_e&&(Ue=_e,Re&&(_e=1-_e),s.clearDepth(_e))},reset:function(){V=!1,me=null,Le=null,Ue=null,Re=!1}}}function o(){let V=!1,Re=null,me=null,Le=null,Ue=null,_e=null,qe=null,Ge=null,Ft=null;return{setTest:function(Pt){V||(Pt?pe(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(Pt){Re!==Pt&&!V&&(s.stencilMask(Pt),Re=Pt)},setFunc:function(Pt,yn,Qn){(me!==Pt||Le!==yn||Ue!==Qn)&&(s.stencilFunc(Pt,yn,Qn),me=Pt,Le=yn,Ue=Qn)},setOp:function(Pt,yn,Qn){(_e!==Pt||qe!==yn||Ge!==Qn)&&(s.stencilOp(Pt,yn,Qn),_e=Pt,qe=yn,Ge=Qn)},setLocked:function(Pt){V=Pt},setClear:function(Pt){Ft!==Pt&&(s.clearStencil(Pt),Ft=Pt)},reset:function(){V=!1,Re=null,me=null,Le=null,Ue=null,_e=null,qe=null,Ge=null,Ft=null}}}const l=new t,u=new r,d=new o,h=new WeakMap,p=new WeakMap;let _={},y={},g={},E=new WeakMap,T=[],P=null,x=!1,v=null,U=null,O=null,R=null,D=null,b=null,C=null,S=new gt(0,0,0),L=0,z=!1,k=null,W=null,re=null,ce=null,j=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Y=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(le)[1]),Z=Y>=1):le.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),Z=Y>=2);let ue=null,F={};const Q=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),Xe=new Jt().fromArray(Q),Ve=new Jt().fromArray(Oe);function K(V,Re,me,Le){const Ue=new Uint8Array(4),_e=s.createTexture();s.bindTexture(V,_e),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<me;qe++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Re+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return _e}const xe={};xe[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),pe(s.DEPTH_TEST),u.setFunc(Qs),Ut(!1),Yt(sm),pe(s.CULL_FACE),vt(er);function pe(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function ge(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function Ie(V,Re){return g[V]!==Re?(s.bindFramebuffer(V,Re),g[V]=Re,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function ye(V,Re){let me=T,Le=!1;if(V){me=E.get(Re),me===void 0&&(me=[],E.set(Re,me));const Ue=V.textures;if(me.length!==Ue.length||me[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,qe=Ue.length;_e<qe;_e++)me[_e]=s.COLOR_ATTACHMENT0+_e;me.length=Ue.length,Le=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Le=!0);Le&&s.drawBuffers(me)}function bt(V){return P!==V?(s.useProgram(V),P=V,!0):!1}const et={[is]:s.FUNC_ADD,[Vv]:s.FUNC_SUBTRACT,[Hv]:s.FUNC_REVERSE_SUBTRACT};et[Gv]=s.MIN,et[Wv]=s.MAX;const ft={[Xv]:s.ZERO,[qv]:s.ONE,[Yv]:s.SRC_COLOR,[_f]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Zv]:s.DST_COLOR,[$v]:s.DST_ALPHA,[Kv]:s.ONE_MINUS_SRC_COLOR,[xf]:s.ONE_MINUS_SRC_ALPHA,[Jv]:s.ONE_MINUS_DST_COLOR,[jv]:s.ONE_MINUS_DST_ALPHA,[e_]:s.CONSTANT_COLOR,[t_]:s.ONE_MINUS_CONSTANT_COLOR,[n_]:s.CONSTANT_ALPHA,[i_]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(V,Re,me,Le,Ue,_e,qe,Ge,Ft,Pt){if(V===er){x===!0&&(ge(s.BLEND),x=!1);return}if(x===!1&&(pe(s.BLEND),x=!0),V!==zv){if(V!==v||Pt!==z){if((U!==is||D!==is)&&(s.blendEquation(s.FUNC_ADD),U=is,D=is),Pt)switch(V){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFunc(s.ONE,s.ONE);break;case am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",V);break}else switch(V){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case am:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case om:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",V);break}O=null,R=null,b=null,C=null,S.set(0,0,0),L=0,v=V,z=Pt}return}Ue=Ue||Re,_e=_e||me,qe=qe||Le,(Re!==U||Ue!==D)&&(s.blendEquationSeparate(et[Re],et[Ue]),U=Re,D=Ue),(me!==O||Le!==R||_e!==b||qe!==C)&&(s.blendFuncSeparate(ft[me],ft[Le],ft[_e],ft[qe]),O=me,R=Le,b=_e,C=qe),(Ge.equals(S)===!1||Ft!==L)&&(s.blendColor(Ge.r,Ge.g,Ge.b,Ft),S.copy(Ge),L=Ft),v=V,z=!1}function dt(V,Re){V.side===Pi?ge(s.CULL_FACE):pe(s.CULL_FACE);let me=V.side===Hn;Re&&(me=!me),Ut(me),V.blending===js&&V.transparent===!1?vt(er):vt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const Le=V.stencilWrite;d.setTest(Le),Le&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Bt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(V){k!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),k=V)}function Yt(V){V!==kv?(pe(s.CULL_FACE),V!==W&&(V===sm?s.cullFace(s.BACK):V===Bv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),W=V}function Gt(V){V!==re&&(Z&&s.lineWidth(V),re=V)}function Bt(V,Re,me){V?(pe(s.POLYGON_OFFSET_FILL),(ce!==Re||j!==me)&&(ce=Re,j=me,u.getReversed()&&(Re=-Re),s.polygonOffset(Re,me))):ge(s.POLYGON_OFFSET_FILL)}function _t(V){V?pe(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function Rt(V){V===void 0&&(V=s.TEXTURE0+fe-1),ue!==V&&(s.activeTexture(V),ue=V)}function H(V,Re,me){me===void 0&&(ue===null?me=s.TEXTURE0+fe-1:me=ue);let Le=F[me];Le===void 0&&(Le={type:void 0,texture:void 0},F[me]=Le),(Le.type!==V||Le.texture!==Re)&&(ue!==me&&(s.activeTexture(me),ue=me),s.bindTexture(V,Re||xe[V]),Le.type=V,Le.texture=Re)}function tn(){const V=F[ue];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function yt(){try{s.compressedTexImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function M(){try{s.texSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function $(){try{s.texSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function se(){try{s.compressedTexSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Te(){try{s.texStorage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function Pe(){try{s.texStorage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function he(){try{s.texImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function ve(){try{s.texImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Ne(V){return y[V]!==void 0?y[V]:s.getParameter(V)}function $e(V,Re){y[V]!==Re&&(s.pixelStorei(V,Re),y[V]=Re)}function De(V){Xe.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Xe.copy(V))}function Ce(V){Ve.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ve.copy(V))}function Qe(V,Re){let me=p.get(Re);me===void 0&&(me=new WeakMap,p.set(Re,me));let Le=me.get(V);Le===void 0&&(Le=s.getUniformBlockIndex(Re,V.name),me.set(V,Le))}function tt(V,Re){const Le=p.get(Re).get(V);h.get(Re)!==Le&&(s.uniformBlockBinding(Re,Le,V.__bindingPointIndex),h.set(Re,Le))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},y={},ue=null,F={},g={},E=new WeakMap,T=[],P=null,x=!1,v=null,U=null,O=null,R=null,D=null,b=null,C=null,S=new gt(0,0,0),L=0,z=!1,k=null,W=null,re=null,ce=null,j=null,Xe.set(0,0,s.canvas.width,s.canvas.height),Ve.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:pe,disable:ge,bindFramebuffer:Ie,drawBuffers:ye,useProgram:bt,setBlending:vt,setMaterial:dt,setFlipSided:Ut,setCullFace:Yt,setLineWidth:Gt,setPolygonOffset:Bt,setScissorTest:_t,activeTexture:Rt,bindTexture:H,unbindTexture:tn,compressedTexImage2D:yt,compressedTexImage3D:N,texImage2D:he,texImage3D:ve,pixelStorei:$e,getParameter:Ne,updateUBOMapping:Qe,uniformBlockBinding:tt,texStorage2D:Te,texStorage3D:Pe,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:De,viewport:Ce,reset:rt}}function XE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new xt,_=new WeakMap,y=new Set;let g;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(N,M){return T?new OffscreenCanvas(N,M):ql("canvas")}function x(N,M,$){let se=1;const de=yt(N);if((de.width>$||de.height>$)&&(se=$/Math.max(de.width,de.height)),se<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Te=Math.floor(se*de.width),Pe=Math.floor(se*de.height);g===void 0&&(g=P(Te,Pe));const he=M?P(Te,Pe):g;return he.width=Te,he.height=Pe,he.getContext("2d").drawImage(N,0,0,Te,Pe),st("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Te+"x"+Pe+")."),he}else return"data"in N&&st("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),N;return N}function v(N){return N.generateMipmaps}function U(N){s.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(N,M,$,se,de,Te=!1){if(N!==null){if(s[N]!==void 0)return s[N];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Pe;se&&(Pe=e.get("EXT_texture_norm16"),Pe||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=M;if(M===s.RED&&($===s.FLOAT&&(he=s.R32F),$===s.HALF_FLOAT&&(he=s.R16F),$===s.UNSIGNED_BYTE&&(he=s.R8),$===s.UNSIGNED_SHORT&&Pe&&(he=Pe.R16_EXT),$===s.SHORT&&Pe&&(he=Pe.R16_SNORM_EXT)),M===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.R8UI),$===s.UNSIGNED_SHORT&&(he=s.R16UI),$===s.UNSIGNED_INT&&(he=s.R32UI),$===s.BYTE&&(he=s.R8I),$===s.SHORT&&(he=s.R16I),$===s.INT&&(he=s.R32I)),M===s.RG&&($===s.FLOAT&&(he=s.RG32F),$===s.HALF_FLOAT&&(he=s.RG16F),$===s.UNSIGNED_BYTE&&(he=s.RG8),$===s.UNSIGNED_SHORT&&Pe&&(he=Pe.RG16_EXT),$===s.SHORT&&Pe&&(he=Pe.RG16_SNORM_EXT)),M===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RG8UI),$===s.UNSIGNED_SHORT&&(he=s.RG16UI),$===s.UNSIGNED_INT&&(he=s.RG32UI),$===s.BYTE&&(he=s.RG8I),$===s.SHORT&&(he=s.RG16I),$===s.INT&&(he=s.RG32I)),M===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RGB8UI),$===s.UNSIGNED_SHORT&&(he=s.RGB16UI),$===s.UNSIGNED_INT&&(he=s.RGB32UI),$===s.BYTE&&(he=s.RGB8I),$===s.SHORT&&(he=s.RGB16I),$===s.INT&&(he=s.RGB32I)),M===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),$===s.UNSIGNED_INT&&(he=s.RGBA32UI),$===s.BYTE&&(he=s.RGBA8I),$===s.SHORT&&(he=s.RGBA16I),$===s.INT&&(he=s.RGBA32I)),M===s.RGB&&($===s.UNSIGNED_SHORT&&Pe&&(he=Pe.RGB16_EXT),$===s.SHORT&&Pe&&(he=Pe.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),M===s.RGBA){const ve=Te?Xl:St.getTransfer(de);$===s.FLOAT&&(he=s.RGBA32F),$===s.HALF_FLOAT&&(he=s.RGBA16F),$===s.UNSIGNED_BYTE&&(he=ve===It?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Pe&&(he=Pe.RGBA16_EXT),$===s.SHORT&&Pe&&(he=Pe.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function D(N,M){let $;return N?M===null||M===Fi||M===Qa?$=s.DEPTH24_STENCIL8:M===Li?$=s.DEPTH32F_STENCIL8:M===Ja&&($=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fi||M===Qa?$=s.DEPTH_COMPONENT24:M===Li?$=s.DEPTH_COMPONENT32F:M===Ja&&($=s.DEPTH_COMPONENT16),$}function b(N,M){return v(N)===!0||N.isFramebufferTexture&&N.minFilter!==xn&&N.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function C(N){const M=N.target;M.removeEventListener("dispose",C),L(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&y.delete(M)}function S(N){const M=N.target;M.removeEventListener("dispose",S),k(M)}function L(N){const M=r.get(N);if(M.__webglInit===void 0)return;const $=N.source,se=E.get($);if(se){const de=se[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&z(N),Object.keys(se).length===0&&E.delete($)}r.remove(N)}function z(N){const M=r.get(N);s.deleteTexture(M.__webglTexture);const $=N.source,se=E.get($);delete se[M.__cacheKey],u.memory.textures--}function k(N){const M=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let de=0;de<M.__webglFramebuffer[se].length;de++)s.deleteFramebuffer(M.__webglFramebuffer[se][de]);else s.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)s.deleteFramebuffer(M.__webglFramebuffer[se]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=N.textures;for(let se=0,de=$.length;se<de;se++){const Te=r.get($[se]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),u.memory.textures--),r.remove($[se])}r.remove(N)}let W=0;function re(){W=0}function ce(){return W}function j(N){W=N}function fe(){const N=W;return N>=o.maxTextures&&st("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),W+=1,N}function Z(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function Y(N,M){const $=r.get(N);if(N.isVideoTexture&&H(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const se=N.image;if(se===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ge($,N,M);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+M)}function le(N,M){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){ge($,N,M);return}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+M)}function ue(N,M){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){ge($,N,M);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+M)}function F(N,M){const $=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&$.__version!==N.version){Ie($,N,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+M)}const Q={[Vl]:s.REPEAT,[Qi]:s.CLAMP_TO_EDGE,[bf]:s.MIRRORED_REPEAT},Oe={[xn]:s.NEAREST,[a_]:s.NEAREST_MIPMAP_NEAREST,[ll]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[ku]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},Xe={[c_]:s.NEVER,[p_]:s.ALWAYS,[u_]:s.LESS,[_d]:s.LEQUAL,[f_]:s.EQUAL,[xd]:s.GEQUAL,[d_]:s.GREATER,[h_]:s.NOTEQUAL};function Ve(N,M){if(M.type===Li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===bn||M.magFilter===ku||M.magFilter===ll||M.magFilter===ss||M.minFilter===bn||M.minFilter===ku||M.minFilter===ll||M.minFilter===ss)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Q[M.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Q[M.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Q[M.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Oe[M.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Oe[M.minFilter]),M.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xn||M.minFilter!==ll&&M.minFilter!==ss||M.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function K(N,M){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",C));const se=M.source;let de=E.get(se);de===void 0&&(de={},E.set(se,de));const Te=Z(M);if(Te!==N.__cacheKey){de[Te]===void 0&&(de[Te]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),de[Te].usedTimes++;const Pe=de[N.__cacheKey];Pe!==void 0&&(de[N.__cacheKey].usedTimes--,Pe.usedTimes===0&&z(M)),N.__cacheKey=Te,N.__webglTexture=de[Te].texture}return $}function xe(N,M,$){return Math.floor(Math.floor(N/$)/M)}function pe(N,M,$,se){const Te=N.updateRanges;if(Te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,$,se,M.data);else{Te.sort(($e,De)=>$e.start-De.start);let Pe=0;for(let $e=1;$e<Te.length;$e++){const De=Te[Pe],Ce=Te[$e],Qe=De.start+De.count,tt=xe(Ce.start,M.width,4),rt=xe(De.start,M.width,4);Ce.start<=Qe+1&&tt===rt&&xe(Ce.start+Ce.count-1,M.width,4)===tt?De.count=Math.max(De.count,Ce.start+Ce.count-De.start):(++Pe,Te[Pe]=Ce)}Te.length=Pe+1;const he=t.getParameter(s.UNPACK_ROW_LENGTH),ve=t.getParameter(s.UNPACK_SKIP_PIXELS),Ne=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let $e=0,De=Te.length;$e<De;$e++){const Ce=Te[$e],Qe=Math.floor(Ce.start/4),tt=Math.ceil(Ce.count/4),rt=Qe%M.width,V=Math.floor(Qe/M.width),Re=tt,me=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,rt,V,Re,me,$,se,M.data)}N.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,he),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ne)}}function ge(N,M,$){let se=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=s.TEXTURE_3D);const de=K(N,M),Te=M.source;t.bindTexture(se,N.__webglTexture,s.TEXTURE0+$);const Pe=r.get(Te);if(Te.version!==Pe.__version||de===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const me=St.getPrimaries(St.workingColorSpace),Le=M.colorSpace===Pr?null:St.getPrimaries(M.colorSpace),Ue=M.colorSpace===Pr||me===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let ve=x(M.image,!1,o.maxTextureSize);ve=tn(M,ve);const Ne=l.convert(M.format,M.colorSpace),$e=l.convert(M.type);let De=R(M.internalFormat,Ne,$e,M.normalized,M.colorSpace,M.isVideoTexture);Ve(se,M);let Ce;const Qe=M.mipmaps,tt=M.isVideoTexture!==!0,rt=Pe.__version===void 0||de===!0,V=Te.dataReady,Re=b(M,ve);if(M.isDepthTexture)De=D(M.format===as,M.type),rt&&(tt?t.texStorage2D(s.TEXTURE_2D,1,De,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,De,ve.width,ve.height,0,Ne,$e,null));else if(M.isDataTexture)if(Qe.length>0){tt&&rt&&t.texStorage2D(s.TEXTURE_2D,Re,De,Qe[0].width,Qe[0].height);for(let me=0,Le=Qe.length;me<Le;me++)Ce=Qe[me],tt?V&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Ne,$e,Ce.data):t.texImage2D(s.TEXTURE_2D,me,De,Ce.width,Ce.height,0,Ne,$e,Ce.data);M.generateMipmaps=!1}else tt?(rt&&t.texStorage2D(s.TEXTURE_2D,Re,De,ve.width,ve.height),V&&pe(M,ve,Ne,$e)):t.texImage2D(s.TEXTURE_2D,0,De,ve.width,ve.height,0,Ne,$e,ve.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,De,Qe[0].width,Qe[0].height,ve.depth);for(let me=0,Le=Qe.length;me<Le;me++)if(Ce=Qe[me],M.format!==yi)if(Ne!==null)if(tt){if(V)if(M.layerUpdates.size>0){const Ue=km(Ce.width,Ce.height,M.format,M.type);for(const _e of M.layerUpdates){const qe=Ce.data.subarray(_e*Ue/Ce.data.BYTES_PER_ELEMENT,(_e+1)*Ue/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,_e,Ce.width,Ce.height,1,Ne,qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,ve.depth,Ne,Ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,De,Ce.width,Ce.height,ve.depth,0,Ce.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,ve.depth,Ne,$e,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,De,Ce.width,Ce.height,ve.depth,0,Ne,$e,Ce.data)}else{tt&&rt&&t.texStorage2D(s.TEXTURE_2D,Re,De,Qe[0].width,Qe[0].height);for(let me=0,Le=Qe.length;me<Le;me++)Ce=Qe[me],M.format!==yi?Ne!==null?tt?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Ne,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,me,De,Ce.width,Ce.height,0,Ce.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?V&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Ne,$e,Ce.data):t.texImage2D(s.TEXTURE_2D,me,De,Ce.width,Ce.height,0,Ne,$e,Ce.data)}else if(M.isDataArrayTexture)if(tt){if(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,De,ve.width,ve.height,ve.depth),V)if(M.layerUpdates.size>0){const me=km(ve.width,ve.height,M.format,M.type);for(const Le of M.layerUpdates){const Ue=ve.data.subarray(Le*me/ve.data.BYTES_PER_ELEMENT,(Le+1)*me/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,ve.width,ve.height,1,Ne,$e,Ue)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ne,$e,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ve.width,ve.height,ve.depth,0,Ne,$e,ve.data);else if(M.isData3DTexture)tt?(rt&&t.texStorage3D(s.TEXTURE_3D,Re,De,ve.width,ve.height,ve.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ne,$e,ve.data)):t.texImage3D(s.TEXTURE_3D,0,De,ve.width,ve.height,ve.depth,0,Ne,$e,ve.data);else if(M.isFramebufferTexture){if(rt)if(tt)t.texStorage2D(s.TEXTURE_2D,Re,De,ve.width,ve.height);else{let me=ve.width,Le=ve.height;for(let Ue=0;Ue<Re;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,De,me,Le,0,Ne,$e,null),me>>=1,Le>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ve.parentNode!==me){me.appendChild(ve),y.add(M),me.onpaint=Le=>{const Ue=Le.changedElements;for(const _e of y)Ue.includes(_e.image)&&(_e.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ve);else{const Ue=s.RGBA,_e=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ue,_e,qe,ve)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(tt&&rt){const me=yt(Qe[0]);t.texStorage2D(s.TEXTURE_2D,Re,De,me.width,me.height)}for(let me=0,Le=Qe.length;me<Le;me++)Ce=Qe[me],tt?V&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ne,$e,Ce):t.texImage2D(s.TEXTURE_2D,me,De,Ne,$e,Ce);M.generateMipmaps=!1}else if(tt){if(rt){const me=yt(ve);t.texStorage2D(s.TEXTURE_2D,Re,De,me.width,me.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,$e,ve)}else t.texImage2D(s.TEXTURE_2D,0,De,Ne,$e,ve);v(M)&&U(se),Pe.__version=Te.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Ie(N,M,$){if(M.image.length!==6)return;const se=K(N,M),de=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+$);const Te=r.get(de);if(de.version!==Te.__version||se===!0){t.activeTexture(s.TEXTURE0+$);const Pe=St.getPrimaries(St.workingColorSpace),he=M.colorSpace===Pr?null:St.getPrimaries(M.colorSpace),ve=M.colorSpace===Pr||Pe===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,$e=M.image[0]&&M.image[0].isDataTexture,De=[];for(let _e=0;_e<6;_e++)!Ne&&!$e?De[_e]=x(M.image[_e],!0,o.maxCubemapSize):De[_e]=$e?M.image[_e].image:M.image[_e],De[_e]=tn(M,De[_e]);const Ce=De[0],Qe=l.convert(M.format,M.colorSpace),tt=l.convert(M.type),rt=R(M.internalFormat,Qe,tt,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,Re=Te.__version===void 0||se===!0,me=de.dataReady;let Le=b(M,Ce);Ve(s.TEXTURE_CUBE_MAP,M);let Ue;if(Ne){V&&Re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,rt,Ce.width,Ce.height);for(let _e=0;_e<6;_e++){Ue=De[_e].mipmaps;for(let qe=0;qe<Ue.length;qe++){const Ge=Ue[qe];M.format!==yi?Qe!==null?V?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,0,0,Ge.width,Ge.height,Qe,Ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,rt,Ge.width,Ge.height,0,Ge.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,0,0,Ge.width,Ge.height,Qe,tt,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,rt,Ge.width,Ge.height,0,Qe,tt,Ge.data)}}}else{if(Ue=M.mipmaps,V&&Re){Ue.length>0&&Le++;const _e=yt(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,rt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if($e){V?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,De[_e].width,De[_e].height,Qe,tt,De[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,rt,De[_e].width,De[_e].height,0,Qe,tt,De[_e].data);for(let qe=0;qe<Ue.length;qe++){const Ft=Ue[qe].image[_e].image;V?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,0,0,Ft.width,Ft.height,Qe,tt,Ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,rt,Ft.width,Ft.height,0,Qe,tt,Ft.data)}}else{V?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Qe,tt,De[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,rt,Qe,tt,De[_e]);for(let qe=0;qe<Ue.length;qe++){const Ge=Ue[qe];V?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,0,0,Qe,tt,Ge.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,rt,Qe,tt,Ge.image[_e])}}}v(M)&&U(s.TEXTURE_CUBE_MAP),Te.__version=de.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ye(N,M,$,se,de,Te){const Pe=l.convert($.format,$.colorSpace),he=l.convert($.type),ve=R($.internalFormat,Pe,he,$.normalized,$.colorSpace),Ne=r.get(M),$e=r.get($);if($e.__renderTarget=M,!Ne.__hasExternalTextures){const De=Math.max(1,M.width>>Te),Ce=Math.max(1,M.height>>Te);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,Te,ve,De,Ce,M.depth,0,Pe,he,null):t.texImage2D(de,Te,ve,De,Ce,0,Pe,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Rt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,de,$e.__webglTexture,0,_t(M)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,de,$e.__webglTexture,Te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(N,M,$){if(s.bindRenderbuffer(s.RENDERBUFFER,N),M.depthBuffer){const se=M.depthTexture,de=se&&se.isDepthTexture?se.type:null,Te=D(M.stencilBuffer,de),Pe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Rt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t(M),Te,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t(M),Te,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Te,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,N)}else{const se=M.textures;for(let de=0;de<se.length;de++){const Te=se[de],Pe=l.convert(Te.format,Te.colorSpace),he=l.convert(Te.type),ve=R(Te.internalFormat,Pe,he,Te.normalized,Te.colorSpace);Rt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t(M),ve,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t(M),ve,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ve,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function et(N,M,$){const se=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=r.get(M.depthTexture);if(de.__renderTarget=M,(!de.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),se){if(de.__webglInit===void 0&&(de.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,M.depthTexture);const Ne=l.convert(M.depthTexture.format),$e=l.convert(M.depthTexture.type);let De;M.depthTexture.format===rr?De=s.DEPTH_COMPONENT24:M.depthTexture.format===as&&(De=s.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,De,M.width,M.height,0,Ne,$e,null)}}else Y(M.depthTexture,0);const Te=de.__webglTexture,Pe=_t(M),he=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,ve=M.depthTexture.format===as?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===rr)Rt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,he,Te,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ve,he,Te,0);else if(M.depthTexture.format===as)Rt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,he,Te,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ve,he,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(N){const M=r.get(N),$=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const se=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const de=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",de)};se.addEventListener("dispose",de),M.__depthDisposeCallback=de}M.__boundDepthTexture=se}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let se=0;se<6;se++)et(M.__webglFramebuffer[se],N,se);else{const se=N.texture.mipmaps;se&&se.length>0?et(M.__webglFramebuffer[0],N,0):et(M.__webglFramebuffer,N,0)}else if($){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=s.createRenderbuffer(),bt(M.__webglDepthbuffer[se],N,!1);else{const de=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Te)}}else{const se=N.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),bt(M.__webglDepthbuffer,N,!1);else{const de=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Te)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(N,M,$){const se=r.get(N);M!==void 0&&ye(se.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&ft(N)}function dt(N){const M=N.texture,$=r.get(N),se=r.get(M);N.addEventListener("dispose",S);const de=N.textures,Te=N.isWebGLCubeRenderTarget===!0,Pe=de.length>1;if(Pe||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=M.version,u.memory.textures++),Te){$.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[he]=[];for(let ve=0;ve<M.mipmaps.length;ve++)$.__webglFramebuffer[he][ve]=s.createFramebuffer()}else $.__webglFramebuffer[he]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)$.__webglFramebuffer[he]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let he=0,ve=de.length;he<ve;he++){const Ne=r.get(de[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&Rt(N)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let he=0;he<de.length;he++){const ve=de[he];$.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[he]);const Ne=l.convert(ve.format,ve.colorSpace),$e=l.convert(ve.type),De=R(ve.internalFormat,Ne,$e,ve.normalized,ve.colorSpace,N.isXRRenderTarget===!0),Ce=_t(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,De,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,$.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),bt($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ye($.__webglFramebuffer[he][ve],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else ye($.__webglFramebuffer[he],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(M)&&U(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,ve=de.length;he<ve;he++){const Ne=de[he],$e=r.get(Ne);let De=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,$e.__webglTexture),Ve(De,Ne),ye($.__webglFramebuffer,N,Ne,s.COLOR_ATTACHMENT0+he,De,0),v(Ne)&&U(De)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,se.__webglTexture),Ve(he,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ye($.__webglFramebuffer[ve],N,M,s.COLOR_ATTACHMENT0,he,ve);else ye($.__webglFramebuffer,N,M,s.COLOR_ATTACHMENT0,he,0);v(M)&&U(he),t.unbindTexture()}N.depthBuffer&&ft(N)}function Ut(N){const M=N.textures;for(let $=0,se=M.length;$<se;$++){const de=M[$];if(v(de)){const Te=O(N),Pe=r.get(de).__webglTexture;t.bindTexture(Te,Pe),U(Te),t.unbindTexture()}}}const Yt=[],Gt=[];function Bt(N){if(N.samples>0){if(Rt(N)===!1){const M=N.textures,$=N.width,se=N.height;let de=s.COLOR_BUFFER_BIT;const Te=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(N),he=M.length>1;if(he)for(let Ne=0;Ne<M.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ve=N.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const $e=r.get(M[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,$,se,0,0,$,se,de,s.NEAREST),h===!0&&(Yt.length=0,Gt.length=0,Yt.push(s.COLOR_ATTACHMENT0+Ne),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Yt.push(Te),Gt.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Ne=0;Ne<M.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const $e=r.get(M[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const M=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function _t(N){return Math.min(o.maxSamples,N.samples)}function Rt(N){const M=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function H(N){const M=u.render.frame;_.get(N)!==M&&(_.set(N,M),N.update())}function tn(N,M){const $=N.colorSpace,se=N.format,de=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Wl&&$!==Pr&&(St.getTransfer($)===It?(se!==yi||de!==Jn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",$)),M}function yt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=re,this.getTextureUnits=ce,this.setTextureUnits=j,this.setTexture2D=Y,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=F,this.rebindTextures=vt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qE(s,e){function t(r,o=Pr){let l;const u=St.getTransfer(o);if(r===Jn)return s.UNSIGNED_BYTE;if(r===hd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===E0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===T0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===S0)return s.BYTE;if(r===M0)return s.SHORT;if(r===Ja)return s.UNSIGNED_SHORT;if(r===dd)return s.INT;if(r===Fi)return s.UNSIGNED_INT;if(r===Li)return s.FLOAT;if(r===ir)return s.HALF_FLOAT;if(r===w0)return s.ALPHA;if(r===A0)return s.RGB;if(r===yi)return s.RGBA;if(r===rr)return s.DEPTH_COMPONENT;if(r===as)return s.DEPTH_STENCIL;if(r===b0)return s.RED;if(r===md)return s.RED_INTEGER;if(r===us)return s.RG;if(r===gd)return s.RG_INTEGER;if(r===vd)return s.RGBA_INTEGER;if(r===Fl||r===Ol||r===kl||r===Bl)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Fl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Fl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rf||r===Cf||r===Pf||r===Lf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Rf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nf||r===Df||r===If||r===Uf||r===Ff||r===Hl||r===Of)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Nf||r===Df)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===If)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Uf)return l.COMPRESSED_R11_EAC;if(r===Ff)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Hl)return l.COMPRESSED_RG11_EAC;if(r===Of)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===kf||r===Bf||r===zf||r===Vf||r===Hf||r===Gf||r===Wf||r===Xf||r===qf||r===Yf||r===Kf||r===$f||r===jf||r===Zf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===kf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$f)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jf||r===Qf||r===ed)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Jf)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ed)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===td||r===nd||r===Gl||r===id)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===td)return l.COMPRESSED_RED_RGTC1_EXT;if(r===nd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const YE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KE=`
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

}`;class $E{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new U0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Oi({vertexShader:YE,fragmentShader:KE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new nr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jE extends fs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",h=1,p=null,_=null,y=null,g=null,E=null,T=null;const P=typeof XRWebGLBinding<"u",x=new $E,v={},U=t.getContextAttributes();let O=null,R=null;const D=[],b=[],C=new xt;let S=null;const L=new Zn;L.viewport=new Jt;const z=new Zn;z.viewport=new Jt;const k=[L,z],W=new sx;let re=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let xe=D[K];return xe===void 0&&(xe=new qu,D[K]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(K){let xe=D[K];return xe===void 0&&(xe=new qu,D[K]=xe),xe.getGripSpace()},this.getHand=function(K){let xe=D[K];return xe===void 0&&(xe=new qu,D[K]=xe),xe.getHandSpace()};function j(K){const xe=b.indexOf(K.inputSource);if(xe===-1)return;const pe=D[xe];pe!==void 0&&(pe.update(K.inputSource,K.frame,p||u),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function fe(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",Z);for(let K=0;K<D.length;K++){const xe=b[K];xe!==null&&(b[K]=null,D[K].disconnect(xe))}re=null,ce=null,x.reset();for(const K in v)delete v[K];e.setRenderTarget(O),E=null,g=null,y=null,o=null,R=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return y===null&&P&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",Z),U.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ge=null,Ie=null;U.depth&&(Ie=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=U.stencil?as:rr,ge=U.stencil?Qa:Fi);const ye={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(ye),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Ii(g.textureWidth,g.textureHeight,{format:yi,type:Jn,depthTexture:new ta(g.textureWidth,g.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};E=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),R=new Ii(E.framebufferWidth,E.framebufferHeight,{format:yi,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(d),Ve.setContext(o),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(K){for(let xe=0;xe<K.removed.length;xe++){const pe=K.removed[xe],ge=b.indexOf(pe);ge>=0&&(b[ge]=null,D[ge].disconnect(pe))}for(let xe=0;xe<K.added.length;xe++){const pe=K.added[xe];let ge=b.indexOf(pe);if(ge===-1){for(let ye=0;ye<D.length;ye++)if(ye>=b.length){b.push(pe),ge=ye;break}else if(b[ye]===null){b[ye]=pe,ge=ye;break}if(ge===-1)break}const Ie=D[ge];Ie&&Ie.connect(pe)}}const Y=new J,le=new J;function ue(K,xe,pe){Y.setFromMatrixPosition(xe.matrixWorld),le.setFromMatrixPosition(pe.matrixWorld);const ge=Y.distanceTo(le),Ie=xe.projectionMatrix.elements,ye=pe.projectionMatrix.elements,bt=Ie[14]/(Ie[10]-1),et=Ie[14]/(Ie[10]+1),ft=(Ie[9]+1)/Ie[5],vt=(Ie[9]-1)/Ie[5],dt=(Ie[8]-1)/Ie[0],Ut=(ye[8]+1)/ye[0],Yt=bt*dt,Gt=bt*Ut,Bt=ge/(-dt+Ut),_t=Bt*-dt;if(xe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_t),K.translateZ(Bt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(xe.projectionMatrix),K.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Rt=bt+Bt,H=et+Bt,tn=Yt-_t,yt=Gt+(ge-_t),N=ft*et/H*Rt,M=vt*et/H*Rt;K.projectionMatrix.makePerspective(tn,yt,N,M,Rt,H),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function F(K,xe){xe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(xe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let xe=K.near,pe=K.far;x.texture!==null&&(x.depthNear>0&&(xe=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),W.near=z.near=L.near=xe,W.far=z.far=L.far=pe,(re!==W.near||ce!==W.far)&&(o.updateRenderState({depthNear:W.near,depthFar:W.far}),re=W.near,ce=W.far),W.layers.mask=K.layers.mask|6,L.layers.mask=W.layers.mask&-5,z.layers.mask=W.layers.mask&-3;const ge=K.parent,Ie=W.cameras;F(W,ge);for(let ye=0;ye<Ie.length;ye++)F(Ie[ye],ge);Ie.length===2?ue(W,L,z):W.projectionMatrix.copy(L.projectionMatrix),Q(K,W,ge)};function Q(K,xe,pe){pe===null?K.matrix.copy(xe.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(xe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(xe.projectionMatrix),K.projectionMatrixInverse.copy(xe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=sd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&E===null))return h},this.setFoveation=function(K){h=K,g!==null&&(g.fixedFoveation=K),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(W)},this.getCameraTexture=function(K){return v[K]};let Oe=null;function Xe(K,xe){if(_=xe.getViewerPose(p||u),T=xe,_!==null){const pe=_.views;E!==null&&(e.setRenderTargetFramebuffer(R,E.framebuffer),e.setRenderTarget(R));let ge=!1;pe.length!==W.cameras.length&&(W.cameras.length=0,ge=!0);for(let et=0;et<pe.length;et++){const ft=pe[et];let vt=null;if(E!==null)vt=E.getViewport(ft);else{const Ut=y.getViewSubImage(g,ft);vt=Ut.viewport,et===0&&(e.setRenderTargetTextures(R,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(R))}let dt=k[et];dt===void 0&&(dt=new Zn,dt.layers.enable(et),dt.viewport=new Jt,k[et]=dt),dt.matrix.fromArray(ft.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ft.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(vt.x,vt.y,vt.width,vt.height),et===0&&(W.matrix.copy(dt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ge===!0&&W.cameras.push(dt)}const Ie=o.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&P){y=r.getBinding();const et=y.getDepthInformation(pe[0]);et&&et.isValid&&et.texture&&x.init(et,o.renderState)}if(Ie&&Ie.includes("camera-access")&&P){e.state.unbindTexture(),y=r.getBinding();for(let et=0;et<pe.length;et++){const ft=pe[et].camera;if(ft){let vt=v[ft];vt||(vt=new U0,v[ft]=vt);const dt=y.getCameraImage(ft);vt.sourceTexture=dt}}}}for(let pe=0;pe<D.length;pe++){const ge=b[pe],Ie=D[pe];ge!==null&&Ie!==void 0&&Ie.update(ge,xe,p||u)}Oe&&Oe(K,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),T=null}const Ve=new z0;Ve.setAnimationLoop(Xe),this.setAnimationLoop=function(K){Oe=K},this.dispose=function(){}}}const ZE=new qt,Y0=new ct;Y0.set(-1,0,0,0,1,0,0,0,1);function JE(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,F0(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,U,O,R){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(x,v):v.isMeshLambertMaterial?(l(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(x,v),y(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(x,v),g(x,v),v.isMeshPhysicalMaterial&&E(x,v,R)):v.isMeshMatcapMaterial?(l(x,v),T(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),P(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&d(x,v)):v.isPointsMaterial?h(x,v,U,O):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Hn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Hn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const U=e.get(v),O=U.envMap,R=U.envMapRotation;O&&(x.envMap.value=O,x.envMapRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(R)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Y0),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function d(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,U,O){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*U,x.scale.value=O*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function y(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function E(x,v,U){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,v){v.matcap&&(x.matcap.value=v.matcap)}function P(x,v){const U=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function QE(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,D){const b=D.program;r.uniformBlockBinding(R,b)}function p(R,D){let b=o[R.id];b===void 0&&(x(R),b=_(R),o[R.id]=b,R.addEventListener("dispose",U));const C=D.program;r.updateUBOMapping(R,C);const S=e.render.frame;l[R.id]!==S&&(g(R),l[R.id]=S)}function _(R){const D=y();R.__bindingPointIndex=D;const b=s.createBuffer(),C=R.__size,S=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,C,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,b),b}function y(){for(let R=0;R<d;R++)if(u.indexOf(R)===-1)return u.push(R),R;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const D=o[R.id],b=R.uniforms,C=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let S=0,L=b.length;S<L;S++){const z=b[S];if(Array.isArray(z))for(let k=0,W=z.length;k<W;k++)E(z[k],S,k,C);else E(z,S,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(R,D,b,C){if(P(R,D,b,C)===!0){const S=R.__offset,L=R.value;if(Array.isArray(L)){let z=0;for(let k=0;k<L.length;k++){const W=L[k],re=v(W);T(W,R.__data,z),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(z+=re.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(L,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,S,R.__data)}}function T(R,D,b){typeof R=="number"||typeof R=="boolean"?D[0]=R:R.isMatrix3?(D[0]=R.elements[0],D[1]=R.elements[1],D[2]=R.elements[2],D[3]=0,D[4]=R.elements[3],D[5]=R.elements[4],D[6]=R.elements[5],D[7]=0,D[8]=R.elements[6],D[9]=R.elements[7],D[10]=R.elements[8],D[11]=0):ArrayBuffer.isView(R)?D.set(new R.constructor(R.buffer,R.byteOffset,D.length)):R.toArray(D,b)}function P(R,D,b,C){const S=R.value,L=D+"_"+b;if(C[L]===void 0)return typeof S=="number"||typeof S=="boolean"?C[L]=S:ArrayBuffer.isView(S)?C[L]=S.slice():C[L]=S.clone(),!0;{const z=C[L];if(typeof S=="number"||typeof S=="boolean"){if(z!==S)return C[L]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(z.equals(S)===!1)return z.copy(S),!0}}return!1}function x(R){const D=R.uniforms;let b=0;const C=16;for(let L=0,z=D.length;L<z;L++){const k=Array.isArray(D[L])?D[L]:[D[L]];for(let W=0,re=k.length;W<re;W++){const ce=k[W],j=Array.isArray(ce.value)?ce.value:[ce.value];for(let fe=0,Z=j.length;fe<Z;fe++){const Y=j[fe],le=v(Y),ue=b%C,F=ue%le.boundary,Q=ue+F;b+=F,Q!==0&&C-Q<le.storage&&(b+=C-Q),ce.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=b,b+=le.storage}}}const S=b%C;return S>0&&(b+=C-S),R.__size=b,R.__cache={},this}function v(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(D.boundary=16,D.storage=R.byteLength):st("WebGLRenderer: Unsupported uniform value type.",R),D}function U(R){const D=R.target;D.removeEventListener("dispose",U);const b=u.indexOf(D.__bindingPointIndex);u.splice(b,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function O(){for(const R in o)s.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:h,update:p,dispose:O}}const e1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function t1(){return Ri===null&&(Ri=new B_(e1,16,16,us,ir),Ri.name="DFG_LUT",Ri.minFilter=bn,Ri.magFilter=bn,Ri.wrapS=Qi,Ri.wrapT=Qi,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class n1{constructor(e={}){const{canvas:t=g_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:E=Jn}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const P=E,x=new Set([vd,gd,md]),v=new Set([Jn,Fi,Ja,Qa,hd,pd]),U=new Uint32Array(4),O=new Int32Array(4),R=new J;let D=null,b=null;const C=[],S=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let k=!1,W=null,re=null,ce=null,j=null;this._outputColorSpace=jn;let fe=0,Z=0,Y=null,le=-1,ue=null;const F=new Jt,Q=new Jt;let Oe=null;const Xe=new gt(0);let Ve=0,K=t.width,xe=t.height,pe=1,ge=null,Ie=null;const ye=new Jt(0,0,K,xe),bt=new Jt(0,0,K,xe);let et=!1;const ft=new Td;let vt=!1,dt=!1;const Ut=new qt,Yt=new J,Gt=new Jt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Rt(){return Y===null?pe:1}let H=r;function tn(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fd}`),t.addEventListener("webglcontextlost",Ft,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",yn,!1),H===null){const X="webgl2";if(H=tn(X,A),H===null)throw tn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw wt("WebGLRenderer: "+A.message),A}let yt,N,M,$,se,de,Te,Pe,he,ve,Ne,$e,De,Ce,Qe,tt,rt,V,Re,me,Le,Ue,_e;function qe(){yt=new tM(H),yt.init(),Le=new qE(H,yt),N=new YS(H,yt,e,Le),M=new WE(H,yt),N.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),re=H.createFramebuffer(),ce=H.createFramebuffer(),j=H.createFramebuffer(),$=new rM(H),se=new PE,de=new XE(H,yt,M,se,N,Le,$),Te=new eM(z),Pe=new lx(H),Ue=new XS(H,Pe),he=new nM(H,Pe,$,Ue),ve=new aM(H,he,Pe,Ue,$),V=new sM(H,N,de),Qe=new KS(se),Ne=new CE(z,Te,yt,N,Ue,Qe),$e=new JE(z,se),De=new NE,Ce=new kE(yt),rt=new WS(z,Te,M,ve,T,h),tt=new GE(z,ve,N),_e=new QE(H,$,N,M),Re=new qS(H,yt,$),me=new iM(H,yt,$),$.programs=Ne.programs,z.capabilities=N,z.extensions=yt,z.properties=se,z.renderLists=De,z.shadowMap=tt,z.state=M,z.info=$}qe(),P!==Jn&&(L=new lM(P,t.width,t.height,d,o,l));const Ge=new jE(z,H);this.xr=Ge,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=yt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=yt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(A){A!==void 0&&(pe=A,this.setSize(K,xe,!1))},this.getSize=function(A){return A.set(K,xe)},this.setSize=function(A,X,ae=!0){if(Ge.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,xe=X,t.width=Math.floor(A*pe),t.height=Math.floor(X*pe),ae===!0&&(t.style.width=A+"px",t.style.height=X+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(K*pe,xe*pe).floor()},this.setDrawingBufferSize=function(A,X,ae){K=A,xe=X,pe=ae,t.width=Math.floor(A*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(P===Jn){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,X,ae,ne){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,X,ae,ne),M.viewport(F.copy(ye).multiplyScalar(pe).round())},this.getScissor=function(A){return A.copy(bt)},this.setScissor=function(A,X,ae,ne){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,X,ae,ne),M.scissor(Q.copy(bt).multiplyScalar(pe).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(A){M.setScissorTest(et=A)},this.setOpaqueSort=function(A){ge=A},this.setTransparentSort=function(A){Ie=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ae=!0){let ne=0;if(A){let te=!1;if(Y!==null){const be=Y.texture.format;te=x.has(be)}if(te){const be=Y.texture.type,ze=v.has(be),Ae=rt.getClearColor(),Ye=rt.getClearAlpha(),Je=Ae.r,ot=Ae.g,lt=Ae.b;ze?(U[0]=Je,U[1]=ot,U[2]=lt,U[3]=Ye,H.clearBufferuiv(H.COLOR,0,U)):(O[0]=Je,O[1]=ot,O[2]=lt,O[3]=Ye,H.clearBufferiv(H.COLOR,0,O))}else ne|=H.COLOR_BUFFER_BIT}X&&(ne|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),W=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),rt.dispose(),De.dispose(),Ce.dispose(),se.dispose(),Te.dispose(),ve.dispose(),Ue.dispose(),_e.dispose(),Ne.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",io),Ge.removeEventListener("sessionend",ro),Cn.stop()};function Ft(A){A.preventDefault(),dm("WebGLRenderer: Context Lost."),k=!0}function Pt(){dm("WebGLRenderer: Context Restored."),k=!1;const A=$.autoReset,X=tt.enabled,ae=tt.autoUpdate,ne=tt.needsUpdate,te=tt.type;qe(),$.autoReset=A,tt.enabled=X,tt.autoUpdate=ae,tt.needsUpdate=ne,tt.type=te}function yn(A){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qn(A){const X=A.target;X.removeEventListener("dispose",Qn),Ir(X)}function Ir(A){ds(A),se.remove(A)}function ds(A){const X=se.get(A).programs;X!==void 0&&(X.forEach(function(ae){Ne.releaseProgram(ae)}),A.isShaderMaterial&&Ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ae,ne,te,be){X===null&&(X=Bt);const ze=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ae=Kt(A,X,ae,ne,te);M.setMaterial(ne,ze);let Ye=ae.index,Je=1;if(ne.wireframe===!0){if(Ye=he.getWireframeAttribute(ae),Ye===void 0)return;Je=2}const ot=ae.drawRange,lt=ae.attributes.position;let je=ot.start*Je,Et=(ot.start+ot.count)*Je;be!==null&&(je=Math.max(je,be.start*Je),Et=Math.min(Et,(be.start+be.count)*Je)),Ye!==null?(je=Math.max(je,0),Et=Math.min(Et,Ye.count)):lt!=null&&(je=Math.max(je,0),Et=Math.min(Et,lt.count));const Ot=Et-je;if(Ot<0||Ot===1/0)return;Ue.setup(te,ne,Ae,ae,Ye);let Wt,Nt=Re;if(Ye!==null&&(Wt=Pe.get(Ye),Nt=me,Nt.setIndex(Wt)),te.isMesh)ne.wireframe===!0?(M.setLineWidth(ne.wireframeLinewidth*Rt()),Nt.setMode(H.LINES)):Nt.setMode(H.TRIANGLES);else if(te.isLine){let rn=ne.linewidth;rn===void 0&&(rn=1),M.setLineWidth(rn*Rt()),te.isLineSegments?Nt.setMode(H.LINES):te.isLineLoop?Nt.setMode(H.LINE_LOOP):Nt.setMode(H.LINE_STRIP)}else te.isPoints?Nt.setMode(H.POINTS):te.isSprite&&Nt.setMode(H.TRIANGLES);if(te.isBatchedMesh)if(yt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const rn=te._multiDrawStarts,ke=te._multiDrawCounts,gn=te._multiDrawCount,ht=Ye?Pe.get(Ye).bytesPerElement:1,Dn=se.get(ne).currentProgram.getUniforms();for(let In=0;In<gn;In++)Dn.setValue(H,"_gl_DrawID",In),Nt.render(rn[In]/ht,ke[In])}else if(te.isInstancedMesh)Nt.renderInstances(je,Ot,te.count);else if(ae.isInstancedBufferGeometry){const rn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ke=Math.min(ae.instanceCount,rn);Nt.renderInstances(je,Ot,ke)}else Nt.render(je,Ot)};function Ur(A,X,ae){A.transparent===!0&&A.side===Pi&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,kr(A,X,ae),A.side=Nr,A.needsUpdate=!0,kr(A,X,ae),A.side=Pi):kr(A,X,ae)}this.compile=function(A,X,ae=null){ae===null&&(ae=A),b=Ce.get(ae),b.init(X),S.push(b),ae.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(b.pushLight(te),te.castShadow&&b.pushShadow(te))}),A!==ae&&A.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(b.pushLight(te),te.castShadow&&b.pushShadow(te))}),b.setupLights();const ne=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const be=te.material;if(be)if(Array.isArray(be))for(let ze=0;ze<be.length;ze++){const Ae=be[ze];Ur(Ae,ae,te),ne.add(Ae)}else Ur(be,ae,te),ne.add(be)}),b=S.pop(),ne},this.compileAsync=function(A,X,ae=null){const ne=this.compile(A,X,ae);return new Promise(te=>{function be(){if(ne.forEach(function(ze){se.get(ze).currentProgram.isReady()&&ne.delete(ze)}),ne.size===0){te(A);return}setTimeout(be,10)}yt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Fr=null;function ec(A){Fr&&Fr(A)}function io(){Cn.stop()}function ro(){Cn.start()}const Cn=new z0;Cn.setAnimationLoop(ec),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(A){Fr=A,Ge.setAnimationLoop(A),A===null?Cn.stop():Cn.start()},Ge.addEventListener("sessionstart",io),Ge.addEventListener("sessionend",ro),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;W!==null&&W.renderStart(A,X);const ae=Ge.enabled===!0&&Ge.isPresenting===!0,ne=L!==null&&(Y===null||ae)&&L.begin(z,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(X),X=Ge.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,X,Y),b=Ce.get(A,S.length),b.init(X),b.state.textureUnits=de.getTextureUnits(),S.push(b),Ut.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ft.setFromProjectionMatrix(Ut,Ni,X.reversedDepth),dt=this.localClippingEnabled,vt=Qe.init(this.clippingPlanes,dt),D=De.get(A,C.length),D.init(),C.push(D),Ge.enabled===!0&&Ge.isPresenting===!0){const ze=z.xr.getDepthSensingMesh();ze!==null&&hs(ze,X,-1/0,z.sortObjects)}hs(A,X,0,z.sortObjects),D.finish(),z.sortObjects===!0&&D.sort(ge,Ie,X.reversedDepth),_t=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,_t&&rt.addToRenderList(D,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Qe.beginShadows();const te=b.state.shadowsArray;if(tt.render(te,A,X),vt===!0&&Qe.endShadows(),(ne&&L.hasRenderPass())===!1){const ze=D.opaque,Ae=D.transmissive;if(b.setupLights(),X.isArrayCamera){const Ye=X.cameras;if(Ae.length>0)for(let Je=0,ot=Ye.length;Je<ot;Je++){const lt=Ye[Je];so(ze,Ae,A,lt)}_t&&rt.render(A);for(let Je=0,ot=Ye.length;Je<ot;Je++){const lt=Ye[Je];aa(D,A,lt,lt.viewport)}}else Ae.length>0&&so(ze,Ae,A,X),_t&&rt.render(A),aa(D,A,X)}Y!==null&&Z===0&&(de.updateMultisampleRenderTarget(Y),de.updateRenderTargetMipmap(Y)),ne&&L.end(z),A.isScene===!0&&A.onAfterRender(z,A,X),Ue.resetDefaultState(),le=-1,ue=null,S.pop(),S.length>0?(b=S[S.length-1],de.setTextureUnits(b.state.textureUnits),vt===!0&&Qe.setGlobalState(z.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?D=C[C.length-1]:D=null,W!==null&&W.renderEnd()};function hs(A,X,ae,ne){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ft.intersectsSprite(A)){ne&&Gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ut);const ze=ve.update(A),Ae=A.material;Ae.visible&&D.push(A,ze,Ae,ae,Gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ft.intersectsObject(A))){const ze=ve.update(A),Ae=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Gt.copy(A.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Gt.copy(ze.boundingSphere.center)),Gt.applyMatrix4(A.matrixWorld).applyMatrix4(Ut)),Array.isArray(Ae)){const Ye=ze.groups;for(let Je=0,ot=Ye.length;Je<ot;Je++){const lt=Ye[Je],je=Ae[lt.materialIndex];je&&je.visible&&D.push(A,ze,je,ae,Gt.z,lt)}}else Ae.visible&&D.push(A,ze,Ae,ae,Gt.z,null)}}const be=A.children;for(let ze=0,Ae=be.length;ze<Ae;ze++)hs(be[ze],X,ae,ne)}function aa(A,X,ae,ne){const{opaque:te,transmissive:be,transparent:ze}=A;b.setupLightsView(ae),vt===!0&&Qe.setGlobalState(z.clippingPlanes,ae),ne&&M.viewport(F.copy(ne)),te.length>0&&Or(te,X,ae),be.length>0&&Or(be,X,ae),ze.length>0&&Or(ze,X,ae),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function so(A,X,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ne.id]===void 0){const je=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ne.id]=new Ii(1,1,{generateMipmaps:!0,type:je?ir:Jn,minFilter:ss,samples:Math.max(4,N.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const be=b.state.transmissionRenderTarget[ne.id],ze=ne.viewport||F;be.setSize(ze.z*z.transmissionResolutionScale,ze.w*z.transmissionResolutionScale);const Ae=z.getRenderTarget(),Ye=z.getActiveCubeFace(),Je=z.getActiveMipmapLevel();z.setRenderTarget(be),z.getClearColor(Xe),Ve=z.getClearAlpha(),Ve<1&&z.setClearColor(16777215,.5),z.clear(),_t&&rt.render(ae);const ot=z.toneMapping;z.toneMapping=Di;const lt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),b.setupLightsView(ne),vt===!0&&Qe.setGlobalState(z.clippingPlanes,ne),Or(A,ae,ne),de.updateMultisampleRenderTarget(be),de.updateRenderTargetMipmap(be),yt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Et=0,Ot=X.length;Et<Ot;Et++){const Wt=X[Et],{object:Nt,geometry:rn,material:ke,group:gn}=Wt;if(ke.side===Pi&&Nt.layers.test(ne.layers)){const ht=ke.side;ke.side=Hn,ke.needsUpdate=!0,oa(Nt,ae,ne,rn,ke,gn),ke.side=ht,ke.needsUpdate=!0,je=!0}}je===!0&&(de.updateMultisampleRenderTarget(be),de.updateRenderTargetMipmap(be))}z.setRenderTarget(Ae,Ye,Je),z.setClearColor(Xe,Ve),lt!==void 0&&(ne.viewport=lt),z.toneMapping=ot}function Or(A,X,ae){const ne=X.isScene===!0?X.overrideMaterial:null;for(let te=0,be=A.length;te<be;te++){const ze=A[te],{object:Ae,geometry:Ye,group:Je}=ze;let ot=ze.material;ot.allowOverride===!0&&ne!==null&&(ot=ne),Ae.layers.test(ae.layers)&&oa(Ae,X,ae,Ye,ot,Je)}}function oa(A,X,ae,ne,te,be){A.onBeforeRender(z,X,ae,ne,te,be),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(z,X,ae,ne,A,be),te.transparent===!0&&te.side===Pi&&te.forceSinglePass===!1?(te.side=Hn,te.needsUpdate=!0,z.renderBufferDirect(ae,X,ne,te,A,be),te.side=Nr,te.needsUpdate=!0,z.renderBufferDirect(ae,X,ne,te,A,be),te.side=Pi):z.renderBufferDirect(ae,X,ne,te,A,be),A.onAfterRender(z,X,ae,ne,te,be)}function kr(A,X,ae){X.isScene!==!0&&(X=Bt);const ne=se.get(A),te=b.state.lights,be=b.state.shadowsArray,ze=te.state.version,Ae=Ne.getParameters(A,te.state,be,X,ae,b.state.lightProbeGridArray),Ye=Ne.getProgramCacheKey(Ae);let Je=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Te.get(A.envMap||ne.environment,ot),ne.envMapRotation=ne.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",Qn),Je=new Map,ne.programs=Je);let lt=Je.get(Ye);if(lt!==void 0){if(ne.currentProgram===lt&&ne.lightsStateVersion===ze)return ao(A,Ae),lt}else Ae.uniforms=Ne.getUniforms(A),W!==null&&A.isNodeMaterial&&W.build(A,ae,Ae),A.onBeforeCompile(Ae,z),lt=Ne.acquireProgram(Ae,Ye),Je.set(Ye,lt),ne.uniforms=Ae.uniforms;const je=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Qe.uniform),ao(A,Ae),ne.needsLights=ca(A),ne.lightsStateVersion=ze,ne.needsLights&&(je.ambientLightColor.value=te.state.ambient,je.lightProbe.value=te.state.probe,je.directionalLights.value=te.state.directional,je.directionalLightShadows.value=te.state.directionalShadow,je.spotLights.value=te.state.spot,je.spotLightShadows.value=te.state.spotShadow,je.rectAreaLights.value=te.state.rectArea,je.ltc_1.value=te.state.rectAreaLTC1,je.ltc_2.value=te.state.rectAreaLTC2,je.pointLights.value=te.state.point,je.pointLightShadows.value=te.state.pointShadow,je.hemisphereLights.value=te.state.hemi,je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,je.spotLightMatrix.value=te.state.spotLightMatrix,je.spotLightMap.value=te.state.spotLightMap,je.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=b.state.lightProbeGridArray.length>0,ne.currentProgram=lt,ne.uniformsList=null,lt}function la(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function ao(A,X){const ae=se.get(A);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function tc(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(X.matrixWorld);for(let ae=0,ne=A.length;ae<ne;ae++){const te=A[ae];if(te.texture!==null&&te.boundingBox.containsPoint(R))return te}return null}function Kt(A,X,ae,ne,te){X.isScene!==!0&&(X=Bt),de.resetTextureUnits();const be=X.fog,ze=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Ae=Y===null?z.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:St.workingColorSpace,Ye=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Je=Te.get(ne.envMap||ze,Ye),ot=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,lt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!ae.morphAttributes.position,Et=!!ae.morphAttributes.normal,Ot=!!ae.morphAttributes.color;let Wt=Di;ne.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Wt=z.toneMapping);const Nt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,rn=Nt!==void 0?Nt.length:0,ke=se.get(ne),gn=b.state.lights;if(vt===!0&&(dt===!0||A!==ue)){const Dt=A===ue&&ne.id===le;Qe.setState(ne,A,Dt)}let ht=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==gn.state.version||ke.outputColorSpace!==Ae||te.isBatchedMesh&&ke.batching===!1||!te.isBatchedMesh&&ke.batching===!0||te.isBatchedMesh&&ke.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ke.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ke.instancing===!1||!te.isInstancedMesh&&ke.instancing===!0||te.isSkinnedMesh&&ke.skinning===!1||!te.isSkinnedMesh&&ke.skinning===!0||te.isInstancedMesh&&ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ke.instancingMorph===!1&&te.morphTexture!==null||ke.envMap!==Je||ne.fog===!0&&ke.fog!==be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Qe.numPlanes||ke.numIntersection!==Qe.numIntersection)||ke.vertexAlphas!==ot||ke.vertexTangents!==lt||ke.morphTargets!==je||ke.morphNormals!==Et||ke.morphColors!==Ot||ke.toneMapping!==Wt||ke.morphTargetsCount!==rn||!!ke.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,ke.__version=ne.version);let Dn=ke.currentProgram;ht===!0&&(Dn=kr(ne,X,te),W&&ne.isNodeMaterial&&W.onUpdateProgram(ne,Dn,ke));let In=!1,pt=!1,ki=!1;const Lt=Dn.getUniforms(),zt=ke.uniforms;if(M.useProgram(Dn.program)&&(In=!0,pt=!0,ki=!0),ne.id!==le&&(le=ne.id,pt=!0),ke.needsLights){const Dt=tc(b.state.lightProbeGridArray,te);ke.lightProbeGrid!==Dt&&(ke.lightProbeGrid=Dt,pt=!0)}if(In||ue!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(H,"projectionMatrix",A.projectionMatrix),Lt.setValue(H,"viewMatrix",A.matrixWorldInverse);const ci=Lt.map.cameraPosition;ci!==void 0&&ci.setValue(H,Yt.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&Lt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Lt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),ue!==A&&(ue=A,pt=!0,ki=!0)}if(ke.needsLights&&(gn.state.directionalShadowMap.length>0&&Lt.setValue(H,"directionalShadowMap",gn.state.directionalShadowMap,de),gn.state.spotShadowMap.length>0&&Lt.setValue(H,"spotShadowMap",gn.state.spotShadowMap,de),gn.state.pointShadowMap.length>0&&Lt.setValue(H,"pointShadowMap",gn.state.pointShadowMap,de)),te.isSkinnedMesh){Lt.setOptional(H,te,"bindMatrix"),Lt.setOptional(H,te,"bindMatrixInverse");const Dt=te.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Lt.setValue(H,"boneTexture",Dt.boneTexture,de))}te.isBatchedMesh&&(Lt.setOptional(H,te,"batchingTexture"),Lt.setValue(H,"batchingTexture",te._matricesTexture,de),Lt.setOptional(H,te,"batchingIdTexture"),Lt.setValue(H,"batchingIdTexture",te._indirectTexture,de),Lt.setOptional(H,te,"batchingColorTexture"),te._colorsTexture!==null&&Lt.setValue(H,"batchingColorTexture",te._colorsTexture,de));const li=ae.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&V.update(te,ae,Dn),(pt||ke.receiveShadow!==te.receiveShadow)&&(ke.receiveShadow=te.receiveShadow,Lt.setValue(H,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(zt.envMapIntensity.value=X.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=t1()),pt){if(Lt.setValue(H,"toneMappingExposure",z.toneMappingExposure),ke.needsLights&&nc(zt,ki),be&&ne.fog===!0&&$e.refreshFogUniforms(zt,be),$e.refreshMaterialUniforms(zt,ne,pe,xe,b.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const Dt=ke.lightProbeGrid;zt.probesSH.value=Dt.texture,zt.probesMin.value.copy(Dt.boundingBox.min),zt.probesMax.value.copy(Dt.boundingBox.max),zt.probesResolution.value.copy(Dt.resolution)}zl.upload(H,la(ke),zt,de)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(zl.upload(H,la(ke),zt,de),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Lt.setValue(H,"center",te.center),Lt.setValue(H,"modelViewMatrix",te.modelViewMatrix),Lt.setValue(H,"normalMatrix",te.normalMatrix),Lt.setValue(H,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Dt=ne.uniformsGroups;for(let ci=0,Mi=Dt.length;ci<Mi;ci++){const Br=Dt[ci];_e.update(Br,Dn),_e.bind(Br,Dn)}}return Dn}function nc(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ca(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,X,ae){const ne=se.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=X,se.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const ae=se.get(A);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ae=0){Y=A,fe=X,Z=ae;let ne=null,te=!1,be=!1;if(A){const Ae=se.get(A);if(Ae.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(H.FRAMEBUFFER,Ae.__webglFramebuffer),F.copy(A.viewport),Q.copy(A.scissor),Oe=A.scissorTest,M.viewport(F),M.scissor(Q),M.setScissorTest(Oe),le=-1;return}else if(Ae.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Ae.__hasExternalTextures)de.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ot=A.depthTexture;if(Ae.__boundDepthTexture!==ot){if(ot!==null&&se.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(be=!0);const Je=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?ne=Je[X][ae]:ne=Je[X],te=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?ne=se.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?ne=Je[ae]:ne=Je,F.copy(A.viewport),Q.copy(A.scissor),Oe=A.scissorTest}else F.copy(ye).multiplyScalar(pe).floor(),Q.copy(bt).multiplyScalar(pe).floor(),Oe=et;if(ae!==0&&(ne=re),M.bindFramebuffer(H.FRAMEBUFFER,ne)&&M.drawBuffers(A,ne),M.viewport(F),M.scissor(Q),M.setScissorTest(Oe),te){const Ae=se.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ae.__webglTexture,ae)}else if(be){const Ae=X;for(let Ye=0;Ye<A.textures.length;Ye++){const Je=se.get(A.textures[Ye]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ye,Je.__webglTexture,ae,Ae)}}else if(A!==null&&ae!==0){const Ae=se.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ae.__webglTexture,ae)}le=-1},this.readRenderTargetPixels=function(A,X,ae,ne,te,be,ze,Ae=0){if(!(A&&A.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){M.bindFramebuffer(H.FRAMEBUFFER,Ye);try{const Je=A.textures[Ae],ot=Je.format,lt=Je.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ae),!N.textureFormatReadable(ot)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(lt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ne&&ae>=0&&ae<=A.height-te&&H.readPixels(X,ae,ne,te,Le.convert(ot),Le.convert(lt),be)}finally{const Je=Y!==null?se.get(Y).__webglFramebuffer:null;M.bindFramebuffer(H.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,X,ae,ne,te,be,ze,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye)if(X>=0&&X<=A.width-ne&&ae>=0&&ae<=A.height-te){M.bindFramebuffer(H.FRAMEBUFFER,Ye);const Je=A.textures[Ae],ot=Je.format,lt=Je.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ae),!N.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,be.byteLength,H.STREAM_READ),H.readPixels(X,ae,ne,te,Le.convert(ot),Le.convert(lt),0);const Et=Y!==null?se.get(Y).__webglFramebuffer:null;M.bindFramebuffer(H.FRAMEBUFFER,Et);const Ot=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await v_(H,Ot,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,be),H.deleteBuffer(je),H.deleteSync(Ot),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ae=0){const ne=Math.pow(2,-ae),te=Math.floor(A.image.width*ne),be=Math.floor(A.image.height*ne),ze=X!==null?X.x:0,Ae=X!==null?X.y:0;de.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,ze,Ae,te,be),M.unbindTexture()},this.copyTextureToTexture=function(A,X,ae=null,ne=null,te=0,be=0){let ze,Ae,Ye,Je,ot,lt,je,Et,Ot;const Wt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(ae!==null)ze=ae.max.x-ae.min.x,Ae=ae.max.y-ae.min.y,Ye=ae.isBox3?ae.max.z-ae.min.z:1,Je=ae.min.x,ot=ae.min.y,lt=ae.isBox3?ae.min.z:0;else{const zt=Math.pow(2,-te);ze=Math.floor(Wt.width*zt),Ae=Math.floor(Wt.height*zt),A.isDataArrayTexture?Ye=Wt.depth:A.isData3DTexture?Ye=Math.floor(Wt.depth*zt):Ye=1,Je=0,ot=0,lt=0}ne!==null?(je=ne.x,Et=ne.y,Ot=ne.z):(je=0,Et=0,Ot=0);const Nt=Le.convert(X.format),rn=Le.convert(X.type);let ke;X.isData3DTexture?(de.setTexture3D(X,0),ke=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(de.setTexture2DArray(X,0),ke=H.TEXTURE_2D_ARRAY):(de.setTexture2D(X,0),ke=H.TEXTURE_2D),M.activeTexture(H.TEXTURE0),M.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),M.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),M.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const gn=M.getParameter(H.UNPACK_ROW_LENGTH),ht=M.getParameter(H.UNPACK_IMAGE_HEIGHT),Dn=M.getParameter(H.UNPACK_SKIP_PIXELS),In=M.getParameter(H.UNPACK_SKIP_ROWS),pt=M.getParameter(H.UNPACK_SKIP_IMAGES);M.pixelStorei(H.UNPACK_ROW_LENGTH,Wt.width),M.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Wt.height),M.pixelStorei(H.UNPACK_SKIP_PIXELS,Je),M.pixelStorei(H.UNPACK_SKIP_ROWS,ot),M.pixelStorei(H.UNPACK_SKIP_IMAGES,lt);const ki=A.isDataArrayTexture||A.isData3DTexture,Lt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const zt=se.get(A),li=se.get(X),Dt=se.get(zt.__renderTarget),ci=se.get(li.__renderTarget);M.bindFramebuffer(H.READ_FRAMEBUFFER,Dt.__webglFramebuffer),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Mi=0;Mi<Ye;Mi++)ki&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,se.get(A).__webglTexture,te,lt+Mi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,se.get(X).__webglTexture,be,Ot+Mi)),H.blitFramebuffer(Je,ot,ze,Ae,je,Et,ze,Ae,H.DEPTH_BUFFER_BIT,H.NEAREST);M.bindFramebuffer(H.READ_FRAMEBUFFER,null),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||se.has(A)){const zt=se.get(A),li=se.get(X);M.bindFramebuffer(H.READ_FRAMEBUFFER,ce),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,j);for(let Dt=0;Dt<Ye;Dt++)ki?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.__webglTexture,te,lt+Dt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zt.__webglTexture,te),Lt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,li.__webglTexture,be,Ot+Dt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,li.__webglTexture,be),te!==0?H.blitFramebuffer(Je,ot,ze,Ae,je,Et,ze,Ae,H.COLOR_BUFFER_BIT,H.NEAREST):Lt?H.copyTexSubImage3D(ke,be,je,Et,Ot+Dt,Je,ot,ze,Ae):H.copyTexSubImage2D(ke,be,je,Et,Je,ot,ze,Ae);M.bindFramebuffer(H.READ_FRAMEBUFFER,null),M.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(ke,be,je,Et,Ot,ze,Ae,Ye,Nt,rn,Wt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(ke,be,je,Et,Ot,ze,Ae,Ye,Nt,Wt.data):H.texSubImage3D(ke,be,je,Et,Ot,ze,Ae,Ye,Nt,rn,Wt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,be,je,Et,ze,Ae,Nt,rn,Wt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,be,je,Et,Wt.width,Wt.height,Nt,Wt.data):H.texSubImage2D(H.TEXTURE_2D,be,je,Et,ze,Ae,Nt,rn,Wt);M.pixelStorei(H.UNPACK_ROW_LENGTH,gn),M.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ht),M.pixelStorei(H.UNPACK_SKIP_PIXELS,Dn),M.pixelStorei(H.UNPACK_SKIP_ROWS,In),M.pixelStorei(H.UNPACK_SKIP_IMAGES,pt),be===0&&X.generateMipmaps&&H.generateMipmap(ke),M.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){fe=0,Z=0,Y=null,M.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}function Nl(s,e,t=1,r=1){const o=document.createElement("canvas");o.width=o.height=s;const l=o.getContext("2d");e(l,s);const u=new W_(o);return u.wrapS=u.wrapT=Vl,u.repeat.set(t,r),u.colorSpace=jn,u.anisotropy=4,u}function Dl(s,e,t,r,o){for(let l=0;l<t;l++){s.fillStyle=r[Math.random()*r.length|0],s.globalAlpha=o*(.4+Math.random()*.6);const u=1+Math.random()*2.4;s.fillRect(Math.random()*e,Math.random()*e,u,u)}s.globalAlpha=1}function K0(s,e,t,r,o,l){let u=s.x+e;for(const h of o)u+r>h.minX&&u-r<h.maxX&&s.z+r>h.minZ&&s.z-r<h.maxZ&&(e>0?u=Math.min(u,h.minX-r):e<0&&(u=Math.max(u,h.maxX+r)));s.x=u;let d=s.z+t;for(const h of o)s.x+r>h.minX&&s.x-r<h.maxX&&d+r>h.minZ&&d-r<h.maxZ&&(t>0?d=Math.min(d,h.minZ-r):t<0&&(d=Math.max(d,h.maxZ+r)));s.z=d,l&&(s.x=Math.max(l.minX+r,Math.min(l.maxX-r,s.x)),s.z=Math.max(l.minZ+r,Math.min(l.maxZ-r,s.z)))}function i1(s){const e=[],t=[],r=Nl(256,(b,C)=>{b.fillStyle="#c2a878",b.fillRect(0,0,C,C),Dl(b,C,2600,["#b09463","#d4bc8c","#a8895a","#cbb283"],.5),b.globalAlpha=.16;for(let S=0;S<14;S++)b.fillStyle=S%2?"#8f7448":"#dcc596",b.beginPath(),b.ellipse(Math.random()*C,Math.random()*C,20+Math.random()*46,12+Math.random()*30,Math.random()*3,0,7),b.fill();b.globalAlpha=1},9,9),o=Nl(256,(b,C)=>{b.fillStyle="#c9b58e",b.fillRect(0,0,C,C),Dl(b,C,1600,["#b7a179","#d8c69f","#a38c64"],.4),b.globalAlpha=.22,b.strokeStyle="#8f7a55";for(let S=0;S<C;S+=32)b.beginPath(),b.moveTo(0,S),b.lineTo(C,S),b.stroke();b.globalAlpha=.12;for(let S=0;S<8;S++)b.fillStyle="#6e5b3d",b.fillRect(Math.random()*C,Math.random()*C,30+Math.random()*60,4+Math.random()*10);b.globalAlpha=1},4,2),l=Nl(128,(b,C)=>{b.fillStyle="#8a5c2e",b.fillRect(0,0,C,C),b.strokeStyle="#5f3d1c",b.lineWidth=5;for(let S=0;S<=C;S+=32)b.beginPath(),b.moveTo(0,S),b.lineTo(C,S),b.stroke();Dl(b,C,500,["#7a4e24","#9c6c3a","#6b441f"],.5),b.lineWidth=8,b.strokeStyle="#4e3115",b.strokeRect(2,2,C-4,C-4),b.beginPath(),b.moveTo(0,0),b.lineTo(C,C),b.moveTo(C,0),b.lineTo(0,C),b.lineWidth=6,b.stroke()},1,1),u=b=>Nl(128,(C,S)=>{C.fillStyle=b,C.fillRect(0,0,S,S),Dl(C,S,700,["rgba(0,0,0,.35)","rgba(255,255,255,.14)"],.4),C.strokeStyle="rgba(0,0,0,.4)",C.lineWidth=4;for(let L=16;L<S;L+=24)C.beginPath(),C.moveTo(L,0),C.lineTo(L,S),C.stroke();C.strokeStyle="rgba(255,255,255,.12)",C.strokeRect(3,3,S-6,S-6)},2,1),d=new oi({map:r,roughness:1}),h=new oi({map:o,roughness:.95}),p=new oi({map:l,roughness:.9}),_=new oi({map:u("#9c4f28"),roughness:.75,metalness:.25}),y=new oi({map:u("#57613c"),roughness:.75,metalness:.25}),g=new oi({map:u("#7a3a2a"),roughness:.7,metalness:.3}),E=new oi({color:11772015,roughness:1}),T=(b,C,S,L,z,k,W,re=!0)=>{const ce=new Zt(new Ui(b,C,S),W);return ce.position.set(L,z,k),ce.castShadow=!0,ce.receiveShadow=!0,s.add(ce),e.push(ce),re&&t.push({minX:L-b/2,maxX:L+b/2,minZ:k-S/2,maxZ:k+S/2}),ce},P=new Zt(new nr(64,64),d);P.rotation.x=-Math.PI/2,P.receiveShadow=!0,s.add(P),e.push(P),T(42,5,1,0,2.5,-20.5,h),T(42,5,1,0,2.5,20.5,h),T(1,5,42,-20.5,2.5,0,h),T(1,5,42,20.5,2.5,0,h),T(10,3,.9,-6,1.5,-2,h),T(.9,3,9,7,1.5,4,h),T(7,3,.9,12,1.5,-8,h),T(.9,3,7,-13,1.5,7,h),T(6.4,2.9,2.7,-12,1.45,-9,_),T(6.4,2.9,2.7,12,1.45,10,y);const x=(b,C,S=1)=>{T(1.4,1.4,1.4,b,.7,C,p),S>1&&T(1.4,1.4,1.4,b,2.1,C,p)};x(-3,13,2),x(4.2,9),x(-14,-4),x(14,-13,2),x(.5,-6),x(9.5,2),x(-8.5,2.5),x(16.5,5),x(-16.5,13),x(6,-15),x(-5,-13);const v=(b,C)=>{const S=new Zt(new jl(.45,.45,1.15,14),g);S.position.set(b,.575,C),S.castShadow=!0,S.receiveShadow=!0,s.add(S),e.push(S),t.push({minX:b-.45,maxX:b+.45,minZ:C-.45,maxZ:C+.45})};v(-1.6,-11),v(-.6,-11.4),v(10.5,15),v(-10.5,15.5),v(2.5,1.5),T(2.6,.85,.8,-7,.42,9,E),T(2.6,.85,.8,9,.42,-2.5,E),T(.8,.85,2.6,-2,.42,5.5,E);const U=new Zt(new wd(6,24),new ls({color:16774096,fog:!1}));U.position.set(-38,34,-52),U.lookAt(0,0,0),s.add(U);const O=new Gn,R=new Float32Array(660);for(let b=0;b<220;b++)R[b*3]=(Math.random()-.5)*38,R[b*3+1]=Math.random()*6,R[b*3+2]=(Math.random()-.5)*38;O.setAttribute("position",new Si(R,3));const D=new G_(O,new D0({color:16773320,size:.05,transparent:!0,opacity:.5}));return D.name="dust",s.add(D),{solids:e,colliders:t,bounds:{minX:-19.4,maxX:19.4,minZ:-19.4,maxZ:19.4},botSpawns:[{x:-15,z:-15},{x:-6,z:-17},{x:6,z:-17},{x:15,z:-15},{x:-17,z:-3},{x:17,z:-3},{x:-10,z:-9},{x:10,z:-9},{x:-17,z:12},{x:17,z:13}],playerSpawn:{x:0,z:16}}}class r1{constructor(e,t,r,o,l){this.group=new os,this.hitboxes=[],this.hp=100,this.alive=!0,this.name="БОТ",this.muzzle=new en,this.legL=new en,this.legR=new en,this.mats=[],this.strafeDir=Math.random()<.5?1:-1,this.strafeT=1,this.burstLeft=0,this.nextShot=0,this.nextBurst=.8+Math.random()*1.2,this.blockedT=0,this.lastX=0,this.lastZ=0,this.flashT=0,this.deathT=0,this.phase=Math.random()*10,this.prefRange=6.5+Math.random()*6.5,this.ray=new B0,this.tmpA=new J,this.tmpB=new J,this.name=e,this.speed=o,this.hooks=l,this.group.position.set(t,0,r),this.lastX=t,this.lastZ=r;const u=b=>{const C=new oi({color:b,roughness:.9});return C.emissive=new gt(16722432),C.emissiveIntensity=0,this.mats.push(C),C},d=u(12874285),h=u(3817801),p=u(14262379),_=u(2369324),y=new oi({color:2829875,roughness:.6,metalness:.5}),g=(b,C,S,L)=>new Zt(new Ui(b,C,S),L),E=(b,C)=>{const S=g(.17,.52,.2,h);S.position.y=-.26,S.castShadow=!0,S.userData={bot:this,part:"body"},C.add(S),C.position.set(b,.52,0),this.hitboxes.push(S)};E(-.12,this.legL),E(.12,this.legR),this.group.add(this.legL,this.legR);const T=g(.54,.62,.3,d);T.position.y=.85,T.castShadow=!0,T.userData={bot:this,part:"body"},this.group.add(T),this.hitboxes.push(T);const P=g(.44,.34,.34,_);P.position.y=.92,P.userData={bot:this,part:"body"},this.group.add(P),this.hitboxes.push(P);const x=g(.25,.27,.25,p);x.position.y=1.33,x.castShadow=!0,x.userData={bot:this,part:"head"},this.group.add(x),this.hitboxes.push(x);const v=g(.28,.17,.28,_);v.position.y=1.42,v.userData={bot:this,part:"head"},this.group.add(v),this.hitboxes.push(v);const U=g(.13,.46,.15,d);U.position.set(-.34,.92,.05),U.userData={bot:this,part:"body"},this.group.add(U),this.hitboxes.push(U);const O=g(.13,.42,.15,d);O.position.set(.3,.95,.12),O.rotation.x=-.9,O.userData={bot:this,part:"body"},this.group.add(O),this.hitboxes.push(O);const R=g(.07,.1,.72,y);R.position.set(.22,1.02,.36),R.userData={bot:this,part:"body"},this.group.add(R),this.hitboxes.push(R),this.muzzle.position.set(.22,1.02,.78),this.group.add(this.muzzle);const D=new ls({color:16761707,transparent:!0,opacity:0,blending:Za,depthWrite:!1});this.flash=new Zt(new nr(.34,.34),D),this.flash.position.copy(this.muzzle.position),this.flash.position.z+=.1,this.group.add(this.flash)}hasLOS(e){const t=this.tmpA.copy(this.group.position);t.y+=1.35;const r=this.tmpB.copy(e).sub(t),o=r.length();return o<.001?!0:(this.ray.set(t,r.normalize()),this.ray.far=o-.5,this.ray.intersectObjects(this.hooks.solids,!1).length===0)}fireAt(e,t){const r=new J;this.muzzle.getWorldPosition(r);const o=this.hooks.playerSpeedXZ(),l=Math.max(.06,Math.min(.4,.36-t*.009-o*.045)),u=Math.random()<l,d=e.clone();u||(d.x+=(Math.random()-.5)*1.6,d.y+=(Math.random()-.5)*1,d.z+=(Math.random()-.5)*1.6),this.hooks.tracer(r,d,16753229),this.flash.material.opacity=.95,this.flash.rotation.z=Math.random()*Math.PI,this.flashT=.045,this.hooks.sfx.enemyShoot(t),u&&this.hooks.damagePlayer(6+Math.random()*8,this.group.position)}hit(e,t){if(!this.alive)return!1;this.hp-=t,this.flashT=Math.max(this.flashT,.02);for(const r of this.mats)r.emissiveIntensity=.9;return this.hp<=0?(this.alive=!1,this.deathT=0,!0):!1}update(e,t){const r=this.group.position;if(!this.alive){this.deathT+=e,this.group.rotation.x=-Math.min(1,this.deathT/.28)*(Math.PI/2),this.deathT>1.4&&(r.y-=e*1.1);for(const x of this.mats)x.emissiveIntensity=Math.max(0,x.emissiveIntensity-e*4);return this.deathT<2.6}const o=t.x-r.x,l=t.z-r.z,u=Math.hypot(o,l)||.001;this.group.lookAt(t.x,r.y,t.z);const d=this.hooks.playerEye(),h=this.hasLOS(d);this.strafeT-=e,this.strafeT<=0&&(this.strafeT=.7+Math.random()*1.5,Math.random()<.75&&(this.strafeDir*=-1));let p=0,_=0;!h||u>this.prefRange?(p=o/u,_=l/u):(p=-l/u*this.strafeDir,_=o/u*this.strafeDir,u<this.prefRange-3&&(p-=o/u*.7,_-=l/u*.7));const y=this.speed*(h&&u<=this.prefRange?.7:1),g=r.x,E=r.z;K0(r,p*y*e,_*y*e,.38,this.hooks.colliders,this.hooks.bounds);const T=Math.hypot(r.x-g,r.z-E);T<y*e*.25?(this.blockedT+=e,this.blockedT>.45&&(this.blockedT=0,this.strafeDir*=-1,this.prefRange=5.5+Math.random()*7.5)):this.blockedT=0,this.lastX,this.lastZ,this.lastX=r.x,this.lastZ=r.z,this.phase+=e*(2+y);const P=T>.002?Math.sin(this.phase*4.2)*.55:0;this.legL.rotation.x=P,this.legR.rotation.x=-P,this.group.position.y=T>.002?Math.abs(Math.sin(this.phase*4.2))*.045:0;for(const x of this.mats)x.emissiveIntensity=Math.max(0,x.emissiveIntensity-e*5);return this.flashT>0&&(this.flashT-=e,this.flash.material.opacity=Math.max(0,this.flashT/.045)),this.flash.lookAt(d),this.burstLeft>0?(this.nextShot-=e,this.nextShot<=0&&(h&&u<36&&this.fireAt(d,u),this.burstLeft--,this.nextShot=.13,this.burstLeft===0&&(this.nextBurst=Math.max(.4,1.1+Math.random()*1.2-u*.012)))):(this.nextBurst-=e,this.nextBurst<=0&&h&&u<36&&(this.burstLeft=2+(Math.random()*3|0),this.nextShot=.06)),!0}dispose(e){e.remove(this.group),this.group.traverse(t=>{const r=t;r.geometry&&r.geometry.dispose()});for(const t of this.mats)t.dispose()}}class s1{constructor(){this.ctx=null,this.master=null,this.noise=null}ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-16,t.ratio.value=9,t.connect(this.ctx.destination),this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(t);const r=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,r,this.ctx.sampleRate);const o=this.noise.getChannelData(0);for(let l=0;l<r;l++)o[l]=Math.random()*2-1}burst(e){if(!this.ctx||!this.master||!this.noise)return;const t=this.ctx,r=t.currentTime+(e.delay||0),o=t.createBufferSource();o.buffer=this.noise,o.loop=!0;const l=t.createBiquadFilter();l.type=e.type||"lowpass",l.Q.value=.7,l.frequency.setValueAtTime(e.from,r),l.frequency.exponentialRampToValueAtTime(Math.max(40,e.to),r+e.dur);const u=t.createGain();u.gain.setValueAtTime(e.vol,r),u.gain.exponentialRampToValueAtTime(1e-4,r+e.dur),o.connect(l),l.connect(u),u.connect(this.master),o.start(r),o.stop(r+e.dur+.05)}tone(e,t,r,o="sine",l,u=0){if(!this.ctx||!this.master)return;const d=this.ctx,h=d.currentTime+u,p=d.createOscillator();p.type=o,p.frequency.setValueAtTime(e,h),l&&p.frequency.exponentialRampToValueAtTime(Math.max(20,l),h+t);const _=d.createGain();_.gain.setValueAtTime(r,h),_.gain.exponentialRampToValueAtTime(1e-4,h+t),p.connect(_),_.connect(this.master),p.start(h),p.stop(h+t+.05)}shoot(){this.burst({dur:.14,vol:.5,from:1700,to:170}),this.burst({dur:.05,vol:.22,from:3800,to:900,type:"highpass"}),this.tone(150,.13,.5,"triangle",42)}enemyShoot(e){const t=Math.max(.06,Math.min(.3,2.4/Math.max(4,e)));this.burst({dur:.12,vol:t,from:1100,to:150}),this.tone(120,.1,t*.8,"triangle",40)}dry(){this.tone(1900,.045,.14,"square",1200)}hit(e){this.tone(e?2500:1650,.06,.2,"square",e?1900:1250)}kill(){this.tone(880,.09,.22,"square"),this.tone(1318,.14,.22,"square",void 0,.075)}hurt(){this.burst({dur:.16,vol:.35,from:520,to:90}),this.tone(95,.22,.4,"sine",42)}step(){this.burst({dur:.05,vol:.06,from:640,to:180})}jump(){this.burst({dur:.09,vol:.08,from:400,to:900,type:"bandpass"})}reload(){this.tone(950,.05,.18,"square",600),this.tone(700,.06,.2,"square",420,.42),this.burst({dur:.07,vol:.16,from:2200,to:500,delay:1.05}),this.tone(1150,.05,.2,"square",800,1.05)}pin(){this.tone(2300,.05,.18,"square",1600)}boom(){this.burst({dur:.65,vol:.85,from:900,to:55}),this.burst({dur:.22,vol:.35,from:3200,to:400,type:"highpass"}),this.tone(72,.55,.7,"sine",30)}beep(e=880,t=.1,r=.2){this.tone(e,t,r,"square")}win(){[523,659,784,1046].forEach((e,t)=>this.tone(e,.16,.22,"square",void 0,t*.11))}lose(){[392,330,262,196].forEach((e,t)=>this.tone(e,.22,.22,"triangle",void 0,t*.15))}}const l0=["Феникс","Гюрза","Кобра","Шакал","Коршун","Таран","Волк","Гадюка","Беркут","Росомаха"],c0=100,vf=3,Il=30;class a1{constructor(e,t){this.state="attract",this.scene=new D_,this.clock=new ax,this.raf=0,this.time=0,this.attractT=0,this.sfx=new s1,this.pos=new J,this.vel=new J,this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.kick=0,this.spread=0,this.shake=0,this.bobT=0,this.stepAcc=0,this.onGround=!0,this.locked=!1,this.hp=100,this.armor=100,this.mag=Il,this.res=90,this.nades=1,this.reloading=!1,this.reloadT=0,this.cooldown=0,this.firing=!1,this.lastCX=0,this.lastCY=0,this.mouseInit=!1,this.keys={},this.deathT=0,this.round=0,this.scoreA=0,this.scoreB=0,this.kills=0,this.deaths=0,this.roundT=c0,this.bots=[],this.nadesFly=[],this.particles=[],this.tracers=[],this.weapon=new os,this.muzzle=new en,this.flashT=0,this.boomT=0,this.ray=new B0,this.tmpV=new J,this.tmpD=new J,this.roundTimeout=0,this.onKeyDown=l=>{if(l.code==="Space"&&l.preventDefault(),this.keys[l.code]=!0,this.state==="playing"){if(l.code==="Escape"&&!this.locked){this.pause();return}l.code==="KeyR"&&this.startReload(),l.code==="KeyG"&&this.throwNade()}},this.onKeyUp=l=>{this.keys[l.code]=!1},this.onMouseMove=l=>{if(this.state==="playing")if(this.locked)this.yaw-=l.movementX*.0032,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-l.movementY*.0032));else{if(!this.mouseInit){this.lastCX=l.clientX,this.lastCY=l.clientY,this.mouseInit=!0;return}const u=l.movementX??l.clientX-this.lastCX,d=l.movementY??l.clientY-this.lastCY;this.lastCX=l.clientX,this.lastCY=l.clientY;const h=.0045;this.yaw-=u*h,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-d*h))}},this.onMouseDown=l=>{this.sfx.ensure(),this.state==="playing"&&(l.button===0?(this.firing=!0,this.tryShoot(),this.locked||this.requestLock()):l.button===2&&(this.firing=!0,this.tryShoot()))},this.onMouseUp=l=>{(l.button===0||l.button===2)&&(this.firing=!1)},this.onLockChange=()=>{const l=document.pointerLockElement===this.renderer.domElement;this.locked&&!l&&this.state==="playing"&&this.pause(),this.mouseInit=!1,this.locked=l,this.hooks.lockedChange(l)},this.onResize=()=>{const l=this.container.clientWidth,u=this.container.clientHeight;this.camera.aspect=l/u,this.camera.updateProjectionMatrix(),this.renderer.setSize(l,u)},this.onVisibility=()=>{document.hidden&&this.state==="playing"&&this.pause()},this.onContext=l=>l.preventDefault(),this.loop=()=>{this.raf=requestAnimationFrame(this.loop);const l=Math.min(.05,this.clock.getDelta());this.time+=l;const u=this.scene.getObjectByName("dust");if(u&&(u.rotation.y+=l*.012),this.state==="attract"){this.attractT+=l*.09;const p=17;this.camera.position.set(Math.sin(this.attractT)*p,7.5+Math.sin(this.attractT*.6)*2,Math.cos(this.attractT)*p),this.camera.lookAt(0,1.2,0),this.weapon.visible=!1}else this.weapon.visible=!0,this.state==="playing"?this.updatePlaying(l):this.state==="dying"&&this.updateDying(l),this.updateFx(l),this.state!=="playing"&&this.updateNades(l);const d=this.renderer.domElement,h=this.state==="playing"||this.state==="dying"?"none":"";d.dataset.cur!==h&&(d.dataset.cur=h,d.style.cursor=h),this.renderer.render(this.scene,this.camera)},this.container=e,this.hooks=t,this.renderer=new n1({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=f0,e.appendChild(this.renderer.domElement),this.scene.background=new gt(9677244),this.scene.fog=new Md(11450813,34,95),this.camera=new Zn(75,e.clientWidth/e.clientHeight,.05,220),this.camera.rotation.order="YXZ",this.scene.add(this.camera);const r=new Q_(13624053,10193507,1.1);this.scene.add(r);const o=new nx(16772300,2.6);o.position.set(-26,38,-18),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-34,o.shadow.camera.right=34,o.shadow.camera.top=34,o.shadow.camera.bottom=-34,o.shadow.camera.far=100,o.shadow.bias=-6e-4,this.scene.add(o),this.scene.add(new ix(8952234,.4)),this.map=i1(this.scene),this.gunLight=new Im(16761707,0,9,2),this.gunLight.position.set(.3,-.15,-.7),this.camera.add(this.gunLight),this.boomLight=new Im(16748608,0,22,2),this.scene.add(this.boomLight),this.buildWeapon(),this.flash=this.buildFlash(.55),this.muzzle.add(this.flash);for(let l=0;l<24;l++){const u=new Zt(new Ui(1,1,1),new ls({color:16765562,transparent:!0,opacity:0,blending:Za,depthWrite:!1}));u.visible=!1,this.scene.add(u),this.tracers.push({m:u,life:0})}this.pos.set(this.map.playerSpawn.x,0,this.map.playerSpawn.z),this.bindEvents(),this.loop()}buildWeapon(){const e=this.weapon,t=new oi({color:2500652,roughness:.5,metalness:.65}),r=new oi({color:8145444,roughness:.75,metalness:.1}),o=(u,d,h,p,_,y,g,E=0)=>{const T=new Zt(new Ui(u,d,h),p);return T.position.set(_,y,g),T.rotation.x=E,e.add(T),T};o(.075,.095,.5,t,0,0,-.04);const l=new Zt(new jl(.016,.016,.36,10),t);l.rotation.x=Math.PI/2,l.position.set(0,.022,-.46),e.add(l),o(.068,.072,.24,r,0,-.004,-.28),o(.03,.03,.3,t,0,.062,-.32),o(.058,.2,.1,t,0,-.16,.03,.22),o(.06,.085,.24,r,0,-.012,.3),o(.012,.05,.012,t,0,.078,-.6),o(.05,.03,.02,t,0,.062,.1),this.muzzle.position.set(0,.022,-.66),e.add(this.muzzle),e.position.set(.24,-.22,-.45),this.camera.add(e)}buildFlash(e){const t=new ls({color:16763258,transparent:!0,opacity:0,blending:Za,depthWrite:!1,side:Pi}),r=new os,o=new Zt(new nr(e,e),t),l=new Zt(new nr(e,e*.36),t);l.rotation.z=Math.PI/2,r.add(o,l);const u=new Zt(new nr(.01,.01),t);return u.add(r),u}bindEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("resize",this.onResize),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("pointerlockchange",this.onLockChange),document.addEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.addEventListener("contextmenu",this.onContext)}requestLock(){try{const e=this.renderer.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}startMatch(){this.sfx.ensure(),this.scoreA=0,this.scoreB=0,this.round=0,this.kills=0,this.deaths=0,this.hooks.score(0,0),this.hooks.kills(0),this.startRound()}resume(){this.state==="paused"&&(this.state="playing",this.requestLock())}pause(){this.state==="playing"&&(this.state="paused",this.firing=!1,this.mouseInit=!1,document.pointerLockElement?document.exitPointerLock():this.hooks.lockedChange(!1))}toMenu(){window.clearTimeout(this.roundTimeout),this.clearEntities(),this.state="attract",document.pointerLockElement&&document.exitPointerLock()}dispose(){cancelAnimationFrame(this.raf),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("resize",this.onResize),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mousedown",this.onMouseDown),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("pointerlockchange",this.onLockChange),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.removeEventListener("contextmenu",this.onContext),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement)}clearEntities(){for(const e of this.bots)e.dispose(this.scene);this.bots=[];for(const e of this.nadesFly)this.scene.remove(e.m);this.nadesFly=[];for(const e of this.particles)e.life=0,e.m.visible=!1}startRound(){this.round++,this.clearEntities();const e=this.map.playerSpawn;this.pos.set(e.x,0,e.z),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.spread=0,this.shake=0,this.kick=0,this.hp=100,this.armor=100,this.mag=Il,this.res=90,this.nades=Math.min(3,this.round),this.reloading=!1,this.firing=!1,this.roundT=c0;const t=Math.min(8,2+this.round),r=[...this.map.botSpawns].sort(()=>Math.random()-.5),o={colliders:this.map.colliders,bounds:this.map.bounds,solids:this.map.solids,playerEye:()=>this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z),playerSpeedXZ:()=>Math.hypot(this.vel.x,this.vel.z),tracer:(u,d,h)=>this.spawnTracer(u,d,h),damagePlayer:(u,d)=>this.damagePlayer(u,d),sfx:this.sfx};for(let u=0;u<t;u++){const d=r[u%r.length],h=new r1(l0[u%l0.length],d.x+(Math.random()-.5),d.z+(Math.random()-.5),3+this.round*.22+Math.random()*.3,o);h.group.rotation.y=Math.random()*Math.PI*2,this.scene.add(h.group),h.group.updateMatrixWorld(!0),this.bots.push(h)}this.state="playing";const l=vf-this.scoreA;this.hooks.banner({title:`РАУНД ${this.round}`,sub:`противников: ${t} · до победы: ${l}`,tone:"info"}),this.sfx.beep(760,.12,.22),this.requestLock()}endRound(e){if(this.state!=="playing"&&this.state!=="dying")return;this.state="roundEnd",this.firing=!1,e?this.scoreA++:this.scoreB++,this.hooks.score(this.scoreA,this.scoreB),document.pointerLockElement&&document.exitPointerLock();const t=this.scoreA>=vf||this.scoreB>=vf;this.hooks.banner({title:e?"РАУНД ВЫИГРАН":"РАУНД ПРОИГРАН",sub:`счёт ${this.scoreA} : ${this.scoreB}`,tone:e?"win":"lose"}),e?this.sfx.win():this.sfx.lose(),this.roundTimeout=window.setTimeout(()=>{t?this.finish(this.scoreA>this.scoreB):this.startRound()},3100)}finish(e){this.hooks.over({result:e?"victory":"defeat",kills:this.kills,deaths:this.deaths,won:this.scoreA,lost:this.scoreB}),this.clearEntities(),this.state="attract"}startReload(){this.reloading||this.mag>=Il||this.state!=="playing"||(this.res<=0&&(this.res=30,this.hooks.feed({killer:"Снабжение",victim:"+30 патронов",head:!1,byPlayer:!0})),this.reloading=!0,this.reloadT=1.9,this.sfx.reload())}tryShoot(){if(this.state!=="playing"||this.cooldown>0||this.reloading)return;if(this.mag<=0){this.sfx.dry(),this.firing=!1,this.startReload();return}this.mag--,this.cooldown=.096,this.sfx.shoot(),this.flashT=.04,this.flash.rotation.z=Math.random()*Math.PI;const e=.75+Math.random()*.5;this.flash.scale.set(e,e,e),this.gunLight.intensity=26,this.kick=Math.min(1.6,this.kick+1),this.recoilPitch+=.013+Math.random()*.008,this.recoilYaw+=(Math.random()-.5)*.01,this.spread=Math.min(1,this.spread+(this.onGround?.16:.26)),this.camera.getWorldDirection(this.tmpD);const t=.0035+this.spread*.02;this.tmpD.x+=(Math.random()-.5)*2*t,this.tmpD.y+=(Math.random()-.5)*2*t,this.tmpD.z+=(Math.random()-.5)*2*t,this.tmpD.normalize(),this.camera.getWorldPosition(this.tmpV),this.ray.set(this.tmpV,this.tmpD),this.ray.far=140;const r=[...this.map.solids];for(const d of this.bots)d.alive&&r.push(...d.hitboxes);const o=this.ray.intersectObjects(r,!1),l=new J;this.muzzle.getWorldPosition(l);const u=o.length?o[0].point:this.tmpV.clone().addScaledVector(this.tmpD,120);if(this.spawnTracer(l,u,16765562),o.length){const d=o[0].object.userData;if(d.bot&&d.bot.alive){const h=d.part==="head",p=d.bot.hit(d.part||"body",h?100:26);this.burst(o[0].point,10361627,h?16:10,3.4,.5),p?this.onBotKilled(d.bot,h):(this.hooks.hitmark(h?"head":"hit"),this.sfx.hit(h))}else this.burst(o[0].point,14205066,7,2.6,.35),this.burst(o[0].point,16773304,4,3.4,.25)}}onBotKilled(e,t){this.kills++,this.res=Math.min(120,this.res+30),this.hooks.kills(this.kills),this.hooks.hitmark("kill"),this.hooks.feed({killer:"ВЫ",victim:e.name,head:t,byPlayer:!0}),this.sfx.kill();const r=e.group.position;this.burst(new J(r.x,r.y+1,r.z),10361627,18,4.2,.7)}damagePlayer(e,t){if(this.state!=="playing")return;let r=e;if(this.armor>0){const d=Math.min(this.armor,r*.5);this.armor-=d,r-=d}this.hp-=r,this.shake=Math.min(1.2,this.shake+r/22);const o=t.x-this.pos.x,l=t.z-this.pos.z,u=this.normAngle(this.yaw+Math.PI-Math.atan2(o,l));if(this.hooks.damage(r,u),this.sfx.hurt(),this.hp<=0){this.hp=0,this.deaths++;const d=this.bots.find(h=>h.group.position===t);this.hooks.feed({killer:d?d.name:"Взрыв",victim:"ВЫ",head:!1,byPlayer:!1}),this.state="dying",this.deathT=0,this.firing=!1,this.hooks.banner({title:"ВЫ УБИТЫ",sub:"раунд потерян",tone:"lose"}),this.sfx.lose()}}normAngle(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}throwNade(){if(this.nades<=0||this.state!=="playing")return;this.nades--,this.sfx.pin();const e=new Zt(new Ad(.09,10,8),new oi({color:4016684,roughness:.6}));e.castShadow=!0,this.camera.getWorldPosition(this.tmpV),this.camera.getWorldDirection(this.tmpD),e.position.copy(this.tmpV).addScaledVector(this.tmpD,.5);const t=this.tmpD.clone().multiplyScalar(13.5);t.y+=3.4,t.x+=this.vel.x*.35,t.z+=this.vel.z*.35,this.scene.add(e),this.nadesFly.push({m:e,v:t,fuse:1.45})}updateNades(e){for(let t=this.nadesFly.length-1;t>=0;t--){const r=this.nadesFly[t];r.v.y-=21*e,r.m.position.addScaledVector(r.v,e);const o=r.m.position;o.y<.09&&(o.y=.09,r.v.y=Math.abs(r.v.y)*.42,r.v.x*=.72,r.v.z*=.72);for(const u of this.map.colliders)if(o.x>u.minX-.09&&o.x<u.maxX+.09&&o.z>u.minZ-.09&&o.z<u.maxZ+.09&&o.y<3){const d=o.x-(u.minX-.09),h=u.maxX+.09-o.x,p=o.z-(u.minZ-.09),_=u.maxZ+.09-o.z,y=Math.min(d,h,p,_);y===d?(o.x=u.minX-.09,r.v.x=-Math.abs(r.v.x)*.5):y===h?(o.x=u.maxX+.09,r.v.x=Math.abs(r.v.x)*.5):y===p?(o.z=u.minZ-.09,r.v.z=-Math.abs(r.v.z)*.5):(o.z=u.maxZ+.09,r.v.z=Math.abs(r.v.z)*.5)}r.fuse-=e;const l=r.fuse<.5?1+Math.sin(this.time*30)*.15:1;r.m.scale.set(l,l,l),r.fuse<=0&&(this.explode(o.clone()),this.scene.remove(r.m),this.nadesFly.splice(t,1))}}explode(e){this.sfx.boom(),this.boomLight.position.copy(e),this.boomLight.intensity=260,this.boomT=.3,this.shake=Math.min(1.4,this.shake+.9),this.burst(e,16748608,26,9,.7,5),this.burst(e,16769184,18,12,.4,6),this.burst(e,5591114,20,5,1.1,2);for(const r of this.bots){if(!r.alive)continue;const o=r.group.position.distanceTo(e);o<6.5&&r.hit("body",130*(1-o/6.5))&&this.onBotKilled(r,!1)}const t=Math.hypot(this.pos.x-e.x,this.pos.z-e.z);t<5.5&&this.damagePlayer(50*(1-t/5.5),e)}burst(e,t,r,o,l,u=9){for(let d=0;d<r;d++){let h=this.particles.find(_=>_.life<=0);if(!h){if(this.particles.length>280)return;const _=new Zt(new Ui(.06,.06,.06),new ls({color:t,transparent:!0}));this.scene.add(_),h={m:_,v:new J,g:u,life:0,max:1},this.particles.push(h)}h.m.material.color.set(t),h.m.visible=!0,h.m.position.copy(e),h.v.set((Math.random()-.5)*2,Math.random()*1.4,(Math.random()-.5)*2).normalize().multiplyScalar(o*(.4+Math.random()*.8)),h.g=u,h.max=l*(.6+Math.random()*.7),h.life=h.max;const p=.6+Math.random();h.m.scale.set(p,p,p)}}spawnTracer(e,t,r){const o=this.tracers.find(h=>h.life<=0);if(!o)return;const l=e.clone().add(t).multiplyScalar(.5),u=e.distanceTo(t);o.m.position.copy(l),o.m.scale.set(.022,.022,Math.max(.1,u)),o.m.lookAt(t);const d=o.m.material;d.color.set(r),d.opacity=.85,o.m.visible=!0,o.life=.07}updateFx(e){for(const t of this.particles)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.v.y-=t.g*e,t.m.position.addScaledVector(t.v,e),t.m.position.y<.02&&(t.m.position.y=.02,t.v.y=Math.abs(t.v.y)*.3,t.v.x*=.7,t.v.z*=.7),t.m.material.opacity=Math.min(1,t.life/t.max*1.4)}for(const t of this.tracers)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.material.opacity=t.life/.07*.85}this.flashT>0?(this.flashT-=e,this.setFlashOpacity(Math.max(0,this.flashT/.04))):this.setFlashOpacity(0),this.gunLight.intensity=Math.max(0,this.gunLight.intensity-e*260),this.boomT>0&&(this.boomT-=e,this.boomLight.intensity=Math.max(0,this.boomT/.3)*260),this.recoilPitch*=Math.exp(-9*e),this.recoilYaw*=Math.exp(-9*e),this.kick=Math.max(0,this.kick-e*9),this.shake=Math.max(0,this.shake-e*2.6)}setFlashOpacity(e){this.flash.traverse(t=>{const r=t;r.material&&(r.material.opacity=e)})}updateDying(e){this.deathT+=e,this.camera.position.set(this.pos.x,Math.max(.45,this.pos.y+1.55-this.deathT*1.4),this.pos.z),this.camera.rotation.set(this.pitch*.4-this.deathT*.25,this.yaw,Math.min(1.15,this.deathT*1.6)),this.deathT>1.9&&this.endRound(!1)}updatePlaying(e){const t=(this.keys.KeyW?1:0)-(this.keys.KeyS?1:0),r=(this.keys.KeyD?1:0)-(this.keys.KeyA?1:0),o=!!this.keys.ShiftLeft||!!this.keys.ShiftRight,l=o?2.6:5.7,u=Math.sin(this.yaw),d=Math.cos(this.yaw);let h=-u*t+d*r,p=-d*t-u*r;const _=Math.hypot(h,p);_>.01?(h=h/_*l,p=p/_*l):(h=0,p=0);const y=this.onGround?1-Math.exp(-13*e):1-Math.exp(-3.2*e);this.vel.x+=(h-this.vel.x)*y,this.vel.z+=(p-this.vel.z)*y,this.keys.Space&&this.onGround&&(this.vel.y=8.2,this.onGround=!1,this.sfx.jump()),this.vel.y-=24*e,this.pos.y+=this.vel.y*e,this.pos.y<=0&&(this.pos.y=0,this.vel.y=0,this.onGround=!0),K0(this.pos,this.vel.x*e,this.vel.z*e,.42,this.map.colliders,this.map.bounds);const g=Math.hypot(this.vel.x,this.vel.z);if(this.onGround&&g>.6){this.bobT+=g*e*1.5,this.stepAcc+=g*e;const C=o?2.4:1.9;this.stepAcc>C&&(this.stepAcc=0,this.sfx.step())}const E=this.onGround&&g>.6?Math.sin(this.bobT*2)*.032*Math.min(1,g/5):0,T=(Math.random()-.5)*this.shake*.05,P=(Math.random()-.5)*this.shake*.05,x=(Math.random()-.5)*this.shake*.03;this.camera.position.set(this.pos.x+T,this.pos.y+1.55+E+P,this.pos.z),this.camera.rotation.set(this.pitch+this.recoilPitch+P*.4,this.yaw+this.recoilYaw,x);const v=this.weapon,U=.24+Math.sin(this.bobT)*.006*Math.min(1,g/5)-this.vel.x*.004*d-this.vel.z*.004*-u;v.position.x+=(U-v.position.x)*Math.min(1,12*e),v.position.y=-.22+Math.abs(Math.cos(this.bobT))*.008*Math.min(1,g/5),v.position.z=-.45+this.kick*.055;let O=this.kick*.1;this.reloading&&(O-=Math.sin(Math.min(1,1-this.reloadT/1.9)*Math.PI)*.85),v.rotation.x=O,v.rotation.z=this.kick*.02;const R=g>1.2;if(this.spread=Math.max(0,this.spread-e*(R?1.4:4.2)-(this.onGround&&!R?e*1.5:0)-(o?e*.8:0)),this.cooldown=Math.max(0,this.cooldown-e),this.reloading&&(this.reloadT-=e,this.reloadT<=0)){this.reloading=!1;const C=Math.min(Il-this.mag,this.res);this.mag+=C,this.res-=C}this.firing&&this.tryShoot();const D=this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z);let b=0;for(let C=this.bots.length-1;C>=0;C--){const S=this.bots[C],L=S.update(e,D);S.alive&&b++,L||(S.dispose(this.scene),this.bots.splice(C,1))}for(let C=0;C<this.bots.length;C++)for(let S=C+1;S<this.bots.length;S++){const L=this.bots[C].group.position,z=this.bots[S].group.position,k=z.x-L.x,W=z.z-L.z,re=Math.hypot(k,W);if(re<.9&&re>.001){const ce=(.9-re)/2;L.x-=k/re*ce,L.z-=W/re*ce,z.x+=k/re*ce,z.z+=W/re*ce}}this.updateNades(e),this.roundT-=e,b===0&&this.bots.every(C=>!C.alive)?(this.roundT=Math.max(this.roundT,.9),this.endRound(!0)):this.roundT<=0&&(this.roundT=0,this.endRound(!1)),this.hooks.hud({hp:Math.max(0,Math.ceil(this.hp)),armor:Math.max(0,Math.ceil(this.armor)),mag:this.mag,res:this.res,nades:this.nades,timer:Math.max(0,Math.ceil(this.roundT)),spreadPx:Math.round(5+this.spread*30+(R?4:0)),enemies:b,reloading:this.reloading}),this.hooks.radar({px:this.pos.x,pz:this.pos.z,yaw:this.yaw,dots:this.bots.filter(C=>C.alive).map(C=>({x:C.group.position.x,z:C.group.position.z}))})}}const Ji=(s,e)=>{s&&s.dataset.v!==e&&(s.dataset.v=e,s.textContent=e)},u0=(s,e)=>{s&&(s.classList.remove(e),s.offsetWidth,s.classList.add(e))},o1=()=>q.jsx("svg",{viewBox:"0 0 16 16",className:"h-3.5 w-3.5 fill-current",children:q.jsx("path",{d:"M8 1a6 6 0 0 0-6 6c0 2.2 1.2 4 3 5v3h2v-2h2v2h2v-3c1.8-1 3-2.8 3-5a6 6 0 0 0-6-6zM5.5 9A1.5 1.5 0 1 1 7 7.5 1.5 1.5 0 0 1 5.5 9zm5 0A1.5 1.5 0 1 1 12 7.5 1.5 1.5 0 0 1 10.5 9z"})}),l1=()=>q.jsx("svg",{viewBox:"0 0 16 16",className:"h-4 w-4 fill-current",children:q.jsx("path",{d:"M8 1 2 3.5v4C2 11.6 4.6 14.6 8 15.5c3.4-.9 6-3.9 6-8v-4L8 1z"})}),c1=({dim:s})=>q.jsxs("svg",{viewBox:"0 0 16 16",className:`h-4 w-4 ${s?"opacity-25":""}`,children:[q.jsx("path",{className:"fill-current",d:"M9 2h3v1.5h-2l-1 1.6A5 5 0 1 1 6.2 4L9 2z"}),q.jsx("circle",{cx:"8",cy:"9.5",r:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.4"})]}),u1=()=>q.jsx("span",{className:"mx-1.5 rounded-sm border border-[#3a4a5c] bg-[#141c25] px-1.5 py-px text-[10px] font-semibold tracking-wider text-[#9fb2c6]",children:"AK-47"});function f1(){const s=Tt.useRef(null),e=Tt.useRef(null),t=Tt.useRef(null),[r,o]=Tt.useState("menu"),[l,u]=Tt.useState(!1),[d,h]=Tt.useState([]),[p,_]=Tt.useState(null),[y,g]=Tt.useState(null),[E,T]=Tt.useState(!1),[P,x]=Tt.useState(1),[v,U]=Tt.useState(!1),O=Tt.useRef(null),R=Tt.useRef(null),D=Tt.useRef(null),b=Tt.useRef(null),C=Tt.useRef(null),S=Tt.useRef(null),L=Tt.useRef(null),z=Tt.useRef(null),k=Tt.useRef(null),W=Tt.useRef(null),re=Tt.useRef(null),ce=Tt.useRef(null),j=Tt.useRef(null),fe=Tt.useRef(null),Z=Tt.useRef(null),Y=Tt.useRef(null),le=Tt.useRef(null),ue=Tt.useRef(0),F=Tt.useRef(0),Q=Tt.useRef(0),Oe=Tt.useRef(!1),Xe=Tt.useRef(1);Tt.useEffect(()=>{if(!s.current)return;const K=ge=>{const Ie=t.current;if(!Ie)return;const ye=Ie.getContext("2d");if(!ye)return;const bt=150,et=bt/2;ye.clearRect(0,0,bt,bt),ye.save(),ye.translate(et,et),ye.beginPath(),ye.arc(0,0,et-2,0,7),ye.fillStyle="rgba(11,17,23,0.85)",ye.fill(),ye.strokeStyle="rgba(242,163,60,0.55)",ye.lineWidth=1.5,ye.stroke(),ye.beginPath(),ye.arc(0,0,(et-2)*.55,0,7),ye.strokeStyle="rgba(139,152,167,0.22)",ye.lineWidth=1,ye.stroke();const ft=(et-8)/22,vt=Math.cos(ge.yaw),dt=Math.sin(ge.yaw),Ut=(_t,Rt)=>[_t*vt-Rt*dt,_t*dt+Rt*vt];ye.strokeStyle="rgba(139,152,167,0.3)",ye.beginPath(),[[-20,-20],[20,-20],[20,20],[-20,20]].forEach(([_t,Rt],H)=>{const[tn,yt]=Ut(_t-ge.px,Rt-ge.pz);H===0?ye.moveTo(tn*ft,yt*ft):ye.lineTo(tn*ft,yt*ft)}),ye.closePath(),ye.stroke();const[Gt,Bt]=Ut(0,-1);ye.fillStyle="#f2a33c",ye.beginPath(),ye.arc(Gt*(et-9),Bt*(et-9),2.4,0,7),ye.fill();for(const _t of ge.dots){const[Rt,H]=Ut(_t.x-ge.px,_t.z-ge.pz);Math.hypot(Rt,H)*ft>et-8||(ye.fillStyle="#e0453a",ye.fillRect(Rt*ft-2.5,H*ft-2.5,5,5))}ye.fillStyle="#eae6dc",ye.beginPath(),ye.moveTo(0,-6),ye.lineTo(4.4,5),ye.lineTo(-4.4,5),ye.closePath(),ye.fill(),ye.restore()},xe=ge=>{Ji(O.current,String(ge.hp)),Ji(D.current,String(ge.armor)),R.current&&(R.current.style.width=`${ge.hp}%`,R.current.style.background=ge.hp>55?"#7fb069":ge.hp>25?"#f2a33c":"#e0453a"),b.current&&(b.current.style.width=`${ge.armor}%`);const Ie=C.current;Ji(Ie,String(ge.mag)),Ie&&(Ie.style.color=ge.mag===0?"#e0453a":ge.mag<=5?"#f2a33c":"#eae6dc"),Ji(S.current,`/ ${ge.res}`);const ye=Math.floor(ge.timer/60),bt=String(ge.timer%60).padStart(2,"0");Ji(L.current,`${ye}:${bt}`),L.current&&L.current.classList.toggle("blink-fast",ge.timer<=10),Ji(z.current,`ОСТАЛОСЬ: ${ge.enemies}`),ce.current&&ce.current.style.setProperty("--g",`${ge.spreadPx}px`),le.current&&(le.current.style.display=ge.reloading?"block":"none");const et=ge.hp>0&&ge.hp<35;et!==Oe.current&&(Oe.current=et,T(et)),ge.nades!==Xe.current&&(Xe.current=ge.nades,x(ge.nades))},pe=new a1(s.current,{hud:xe,score:(ge,Ie)=>{Ji(k.current,String(ge)),Ji(W.current,String(Ie))},kills:ge=>Ji(re.current,String(ge)),hitmark:ge=>{const Ie=j.current;Ie&&(Ie.classList.toggle("kill",ge==="kill"),Ie.style.color=ge==="kill"?"#e0453a":ge==="head"?"#f2a33c":"#ffffff",u0(Ie,"go"))},damage:(ge,Ie)=>{const ye=fe.current;ye&&(ye.style.transition="none",ye.style.opacity=String(Math.min(.9,.3+ge/40)),window.clearTimeout(ue.current),ue.current=window.setTimeout(()=>{ye&&(ye.style.transition="opacity .5s ease",ye.style.opacity="0")},90)),Z.current&&(Z.current.style.transform=`rotate(${Ie}rad)`),u0(Y.current,"show")},feed:ge=>{const Ie=++Q.current;h(ye=>[{...ge,id:Ie},...ye].slice(0,5)),window.setTimeout(()=>h(ye=>ye.filter(bt=>bt.id!==Ie)),4200)},banner:ge=>{window.clearTimeout(F.current),_({...ge,id:++Q.current}),F.current=window.setTimeout(()=>_(null),2700)},radar:K,over:ge=>{g(ge),o("over")},lockedChange:ge=>{u(ge);const Ie=e.current;!ge&&Ie&&Ie.state==="paused"&&o("paused")}});return e.current=pe,()=>{pe.dispose(),e.current=null}},[]);const Ve=()=>{var K;h([]),g(null),U(!0),window.setTimeout(()=>U(!1),9e3),o("play"),(K=e.current)==null||K.startMatch()};return q.jsxs("div",{className:"font-body relative h-full w-full overflow-hidden bg-[#0d1218] text-[#eae6dc]",children:[q.jsx("div",{ref:s,className:"absolute inset-0"}),(r==="play"||r==="paused")&&q.jsxs("div",{className:"pointer-events-none absolute inset-0 z-20",children:[q.jsxs("div",{className:"absolute left-1/2 top-3 flex -translate-x-1/2 items-stretch",children:[q.jsxs("div",{className:"flex items-center gap-2 border border-[#2b4a63] bg-[#101b26]/90 px-4 py-1.5",children:[q.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#6fb7e8]",children:"ВЫ"}),q.jsx("span",{ref:k,className:"font-display text-xl leading-none text-[#6fb7e8]",children:"0"})]}),q.jsxs("div",{className:"flex flex-col items-center justify-center border-y border-[#3a4a5c] bg-[#12181f]/95 px-5 py-1",children:[q.jsx("span",{ref:L,className:"font-display text-2xl leading-none tracking-wider",children:"1:40"}),q.jsx("span",{ref:z,className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"ОСТАЛОСЬ: 0"})]}),q.jsxs("div",{className:"flex items-center gap-2 border border-[#5c3a24] bg-[#221409]/90 px-4 py-1.5",children:[q.jsx("span",{ref:W,className:"font-display text-xl leading-none text-[#f2a33c]",children:"0"}),q.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#f2a33c]",children:"БОТЫ"})]})]}),q.jsxs("div",{className:"absolute left-4 top-4",children:[q.jsxs("div",{className:"relative",children:[q.jsx("canvas",{ref:t,width:150,height:150,className:"h-[150px] w-[150px]"}),q.jsx("div",{className:"radar-sweep absolute inset-0 rounded-full border border-[#f2a33c]/30"})]}),q.jsxs("div",{className:"mt-1.5 border border-[#2b3844] bg-[#12181f]/90 px-3 py-1 text-[11px] font-bold tracking-widest text-[#8b98a7]",children:["УСТРАНЕНО: ",q.jsx("span",{ref:re,className:"font-display text-sm text-[#f2a33c]",children:"0"})]})]}),q.jsx("div",{className:"absolute right-4 top-4 flex flex-col items-end gap-1",children:d.map(K=>q.jsxs("div",{className:"feed-in flex items-center border border-[#2b3844] bg-[#12181f]/90 px-2.5 py-1 text-[12px] font-semibold",children:[q.jsx("span",{className:K.byPlayer&&K.killer==="ВЫ"?"text-[#6fb7e8]":"text-[#f2a33c]",children:K.killer}),K.head?q.jsx("span",{className:"mx-1.5 text-[#e0453a]",children:q.jsx(o1,{})}):K.killer==="Снабжение"?q.jsx("span",{className:"mx-1.5 text-[#8b98a7]",children:"»"}):q.jsx(u1,{}),q.jsx("span",{className:K.victim==="ВЫ"?"text-[#e0453a]":"text-[#c8d2dd]",children:K.victim})]},K.id))}),q.jsxs("div",{ref:ce,className:"xh absolute left-1/2 top-1/2 z-10 h-0 w-0",children:[q.jsx("span",{className:"xh-t"}),q.jsx("span",{className:"xh-b"}),q.jsx("span",{className:"xh-l"}),q.jsx("span",{className:"xh-r"}),q.jsx("span",{className:"xh-dot"})]}),q.jsx("div",{ref:j,className:"hitmark absolute left-1/2 top-1/2 z-10 -ml-[11px] -mt-[11px]",children:q.jsx("svg",{viewBox:"0 0 22 22",className:"h-[22px] w-[22px] stroke-current",strokeWidth:"2.4",fill:"none",children:q.jsx("path",{d:"M3 3 8 8M19 3l-5 5M3 19l5-5M19 19l-5-5"})})}),q.jsx("div",{className:"absolute left-1/2 top-1/2 z-10",children:q.jsx("div",{ref:Y,className:"dmg-arrow",children:q.jsx("div",{ref:Z,children:q.jsx("svg",{viewBox:"0 0 24 24",className:"absolute -translate-x-1/2 fill-[#e0453a]",style:{top:-116,left:0,width:26,height:26,filter:"drop-shadow(0 0 6px rgba(224,69,58,.8))"},children:q.jsx("path",{d:"M12 2 22 18h-7v4h-6v-4H2z"})})})})}),q.jsx("div",{ref:le,className:"blink-fast absolute left-1/2 top-[57%] -translate-x-1/2 text-[13px] font-bold tracking-[0.3em] text-[#f2a33c]",style:{display:"none"},children:"ПЕРЕЗАРЯДКА"}),p&&q.jsxs("div",{className:"absolute left-1/2 top-[30%] -translate-x-1/2 text-center",children:[q.jsx("div",{className:"banner-in font-display text-5xl md:text-6xl",style:{color:p.tone==="win"?"#f2a33c":p.tone==="lose"?"#e0453a":"#eae6dc",textShadow:"0 4px 0 rgba(0,0,0,.55), 0 0 44px rgba(0,0,0,.6)"},children:p.title}),p.sub&&q.jsx("div",{className:"banner-sub-in mt-2 text-sm font-semibold tracking-[0.35em] text-[#c8d2dd] uppercase",style:{textShadow:"0 2px 6px rgba(0,0,0,.8)"},children:p.sub})]},p.id),q.jsxs("div",{className:"absolute bottom-5 left-5 w-[240px]",children:[q.jsxs("div",{className:"flex items-end gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2.5",children:[q.jsx("svg",{viewBox:"0 0 24 24",className:"mb-1 h-6 w-6 fill-[#e0453a]",children:q.jsx("path",{d:"M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"})}),q.jsxs("div",{className:"flex-1",children:[q.jsxs("div",{className:"flex items-baseline justify-between",children:[q.jsx("span",{ref:O,className:"font-display text-3xl leading-none",children:"100"}),q.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"HP"})]}),q.jsx("div",{className:"mt-1.5 h-[7px] w-full bg-[#232d38]",children:q.jsx("div",{ref:R,className:"h-full w-full transition-[width] duration-200"})})]})]}),q.jsxs("div",{className:"mt-1.5 flex items-center gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2",children:[q.jsx("span",{className:"text-[#6fb7e8]",children:q.jsx(l1,{})}),q.jsx("div",{className:"flex-1",children:q.jsx("div",{className:"h-[5px] w-full bg-[#232d38]",children:q.jsx("div",{ref:b,className:"h-full w-full bg-[#6fb7e8] transition-[width] duration-200"})})}),q.jsx("span",{ref:D,className:"font-display text-base leading-none text-[#6fb7e8]",children:"100"})]})]}),q.jsxs("div",{className:"absolute bottom-5 right-5 text-right",children:[q.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/90 px-5 py-2.5",children:[q.jsxs("div",{className:"flex items-baseline justify-end gap-2",children:[q.jsx("span",{ref:C,className:"font-display text-5xl leading-none",children:"30"}),q.jsx("span",{ref:S,className:"font-display text-lg leading-none text-[#8b98a7]",children:"/ 90"})]}),q.jsx("div",{className:"mt-1 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]",children:"AK-47 · 7.62"})]}),q.jsxs("div",{className:"mt-1.5 flex items-center justify-end gap-1.5 border border-[#2b3844] bg-[#12181f]/90 px-4 py-1.5 text-[#c9d68a]",children:[q.jsx("span",{className:"mr-1 text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"ГРАНАТЫ"}),[0,1,2].map(K=>q.jsx(c1,{dim:K>=P},K))]})]}),v&&q.jsx("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 border border-[#2b3844] bg-[#12181f]/85 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-[#8b98a7]",children:"WASD — движение · ведите мышь — обзор · ЛКМ — огонь · R — перезарядка · G — граната · ESC — пауза"}),!l&&r==="play"&&q.jsxs("div",{className:"absolute left-1/2 top-[62%] -translate-x-1/2 border border-[#f2a33c]/60 bg-[#221409]/90 px-5 py-2 text-center text-sm font-bold tracking-[0.14em] text-[#f2a33c]",children:["ДВИГАЙТЕ МЫШЬ — ОБЗОР · ЛКМ — ОГОНЬ",q.jsx("div",{className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"R — ПЕРЕЗАРЯДКА · G — ГРАНАТА · КРАЙ ЭКРАНА: ВЕРНИТЕ МЫШЬ В ЦЕНТР"})]}),q.jsx("div",{ref:fe,className:"vignette absolute inset-0 z-30"}),E&&q.jsx("div",{className:"lowhp-pulse pointer-events-none absolute inset-0 z-30"})]}),r==="menu"&&q.jsxs("div",{className:"absolute inset-0 z-40",children:[q.jsx("div",{className:"menu-scan absolute inset-0",style:{background:"linear-gradient(100deg, rgba(10,14,19,.96) 0%, rgba(10,14,19,.92) 44%, rgba(10,14,19,.55) 72%, rgba(10,14,19,.25) 100%)"}}),q.jsx("div",{className:"smoke absolute inset-0"}),q.jsx("div",{className:"hazard hazard-anim absolute top-0 left-0 h-2 w-full opacity-80"}),q.jsx("div",{className:"hazard hazard-anim absolute bottom-0 left-0 h-2 w-full opacity-80"}),q.jsxs("div",{className:"relative flex h-full flex-col justify-center gap-8 px-8 md:flex-row md:items-center md:justify-between md:px-16 lg:px-24",children:[q.jsxs("div",{className:"max-w-xl",children:[q.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[q.jsx("span",{className:"inline-block h-[3px] w-10 bg-[#f2a33c]"}),q.jsx("span",{className:"text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]",children:"БРАУЗЕРНЫЙ ШУТЕР · THREE.JS"})]}),q.jsxs("h1",{className:"title-glow font-display text-[88px] leading-[0.9] md:text-[120px]",children:["CS",q.jsx("span",{className:"text-[#f2a33c]",children:" 3D"})]}),q.jsxs("p",{className:"mt-5 max-w-md text-[15px] leading-relaxed text-[#aab6c4]",children:["Зачистите точку. AK-47, гранаты и живые боты, которые стрейфят и дают очередь в ответ. Возьмите ",q.jsx("span",{className:"font-bold text-[#eae6dc]",children:"3 раунда"})," быстрее, чем вас застрелят."]}),q.jsx("button",{onClick:Ve,className:"btn-blade mt-8 inline-block bg-[#f2a33c] px-12 py-4 text-xl text-[#14100a] hover:bg-[#ffc069]",children:q.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В БОЙ"})}),q.jsx("div",{className:"mt-4 text-[11px] font-semibold tracking-[0.25em] text-[#5f6d7d]",children:"КЛИК — ЗАХВАТ МЫШИ · ESC — ПАУЗА"})]}),q.jsxs("div",{className:"flex w-full max-w-sm flex-col gap-4",children:[q.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[q.jsx("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:"УПРАВЛЕНИЕ"}),q.jsxs("div",{className:"grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 text-[12px] text-[#aab6c4]",children:[q.jsxs("span",{children:[q.jsx("span",{className:"key",children:"W"})," ",q.jsx("span",{className:"key",children:"A"})," ",q.jsx("span",{className:"key",children:"S"})," ",q.jsx("span",{className:"key",children:"D"})]}),q.jsx("span",{children:"передвижение"}),q.jsx("span",{children:q.jsx("span",{className:"key",children:"МЫШЬ"})}),q.jsx("span",{children:"обзор — движение мыши, курсор в бою скрыт"}),q.jsx("span",{children:q.jsx("span",{className:"key",children:"ЛКМ"})}),q.jsx("span",{children:"огонь из AK-47"}),q.jsx("span",{children:q.jsx("span",{className:"key",children:"R"})}),q.jsx("span",{children:"перезарядка"}),q.jsx("span",{children:q.jsx("span",{className:"key",children:"G"})}),q.jsx("span",{children:"граната"}),q.jsx("span",{children:q.jsx("span",{className:"key",children:"SHIFT"})}),q.jsx("span",{children:"тихий шаг — точность выше"}),q.jsx("span",{children:q.jsx("span",{className:"key",children:"SPACE"})}),q.jsx("span",{children:"прыжок"}),q.jsx("span",{children:q.jsx("span",{className:"key",children:"ESC"})}),q.jsx("span",{children:"пауза"})]})]}),q.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[q.jsx("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:"БРИФИНГ"}),q.jsxs("ul",{className:"space-y-1.5 px-4 py-3 text-[12px] leading-relaxed text-[#aab6c4]",children:[q.jsxs("li",{children:[q.jsx("span",{className:"font-bold text-[#eae6dc]",children:"Хедшот"})," — 100 урона, мгновенное устранение."]}),q.jsxs("li",{children:["Каждый фраг даёт ",q.jsx("span",{className:"font-bold text-[#eae6dc]",children:"+30 патронов"})," и гранату в следующем раунде."]}),q.jsxs("li",{children:["Раунд — ",q.jsx("span",{className:"font-bold text-[#eae6dc]",children:"1:40"}),". Не успели — раунд потерян."]}),q.jsxs("li",{children:["Матч до ",q.jsx("span",{className:"font-bold text-[#f2a33c]",children:"3 побед"}),". Боты злеют с каждым раундом."]})]})]})]})]})]}),r==="paused"&&q.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/85",children:q.jsxs("div",{className:"w-[380px] border border-[#2b3844] bg-[#12181f]",children:[q.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),q.jsxs("div",{className:"px-8 py-7",children:[q.jsx("div",{className:"font-display text-4xl tracking-wider",children:"ПАУЗА"}),q.jsx("div",{className:"mt-1 text-[11px] font-semibold tracking-[0.3em] text-[#8b98a7]",children:"ОПЕРАЦИЯ ПРИОСТАНОВЛЕНА"}),q.jsxs("div",{className:"mt-6 flex flex-col gap-2.5",children:[q.jsx("button",{onClick:()=>{var K;(K=e.current)==null||K.resume(),o("play")},className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:q.jsx("span",{className:"inline-block skew-x-[8deg]",children:"ПРОДОЛЖИТЬ"})}),q.jsx("button",{onClick:()=>{var K;(K=e.current)==null||K.toMenu(),o("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:q.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В МЕНЮ"})})]}),q.jsxs("div",{className:"mt-6 border-t border-[#2b3844] pt-4 text-[11px] leading-relaxed text-[#5f6d7d]",children:[q.jsx("span",{className:"key",children:"W"}),q.jsx("span",{className:"key",children:"A"}),q.jsx("span",{className:"key",children:"S"}),q.jsx("span",{className:"key",children:"D"})," движение · ",q.jsx("span",{className:"key",children:"ЛКМ"})," огонь · ",q.jsx("span",{className:"key",children:"R"})," перезарядка · ",q.jsx("span",{className:"key",children:"G"})," граната"]})]})]})}),r==="over"&&y&&q.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/80",children:q.jsxs("div",{className:"w-[440px] border border-[#2b3844] bg-[#12181f]",children:[q.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),q.jsxs("div",{className:"px-10 py-8 text-center",children:[q.jsx("div",{className:"text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]",children:"МАТЧ ЗАВЕРШЁН"}),q.jsx("div",{className:"title-glow font-display mt-2 text-6xl",style:{color:y.result==="victory"?"#f2a33c":"#e0453a"},children:y.result==="victory"?"ПОБЕДА":"ПОРАЖЕНИЕ"}),q.jsxs("div",{className:"font-display mt-3 text-3xl text-[#eae6dc]",children:[q.jsx("span",{className:"text-[#6fb7e8]",children:y.won}),q.jsx("span",{className:"mx-2 text-[#5f6d7d]",children:":"}),q.jsx("span",{className:"text-[#f2a33c]",children:y.lost})]}),q.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-2.5",children:[q.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[q.jsx("div",{className:"font-display text-3xl text-[#f2a33c]",children:y.kills}),q.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:"УСТРАНЕНО"})]}),q.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[q.jsx("div",{className:"font-display text-3xl text-[#e0453a]",children:y.deaths}),q.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:"СМЕРТЕЙ"})]})]}),q.jsxs("div",{className:"mt-7 flex flex-col gap-2.5",children:[q.jsx("button",{onClick:Ve,className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:q.jsx("span",{className:"inline-block skew-x-[8deg]",children:"ЕЩЁ РАЗ"})}),q.jsx("button",{onClick:()=>{var K;(K=e.current)==null||K.toMenu(),o("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:q.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В МЕНЮ"})})]})]})]})})]})}Ov.createRoot(document.getElementById("root")).render(q.jsx(f1,{}));
