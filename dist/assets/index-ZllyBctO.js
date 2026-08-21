(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function t_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var nf={exports:{}},eo={},rf={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function n_(){if(Rm)return Mt;Rm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function y(U,J,Oe){this.props=U,this.context=J,this.refs=T,this.updater=Oe||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=y.prototype;function I(U,J,Oe){this.props=U,this.context=J,this.refs=T,this.updater=Oe||S}var O=I.prototype=new x;O.constructor=I,w(O,y.prototype),O.isPureReactComponent=!0;var C=Array.isArray,D=Object.prototype.hasOwnProperty,N={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function M(U,J,Oe){var We,Be={},oe=null,_e=null;if(J!=null)for(We in J.ref!==void 0&&(_e=J.ref),J.key!==void 0&&(oe=""+J.key),J)D.call(J,We)&&!R.hasOwnProperty(We)&&(Be[We]=J[We]);var G=arguments.length-2;if(G===1)Be.children=Oe;else if(1<G){for(var me=Array(G),xe=0;xe<G;xe++)me[xe]=arguments[xe+2];Be.children=me}if(U&&U.defaultProps)for(We in G=U.defaultProps,G)Be[We]===void 0&&(Be[We]=G[We]);return{$$typeof:s,type:U,key:oe,ref:_e,props:Be,_owner:N.current}}function P(U,J){return{$$typeof:s,type:U.type,key:J,ref:U.ref,props:U.props,_owner:U._owner}}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Oe){return J[Oe]})}var B=/\/+/g;function te(U,J){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):J.toString(36)}function le(U,J,Oe,We,Be){var oe=typeof U;(oe==="undefined"||oe==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(oe){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case s:case e:_e=!0}}if(_e)return _e=U,Be=Be(_e),U=We===""?"."+te(_e,0):We,C(Be)?(Oe="",U!=null&&(Oe=U.replace(B,"$&/")+"/"),le(Be,J,Oe,"",function(xe){return xe})):Be!=null&&(V(Be)&&(Be=P(Be,Oe+(!Be.key||_e&&_e.key===Be.key?"":(""+Be.key).replace(B,"$&/")+"/")+U)),J.push(Be)),1;if(_e=0,We=We===""?".":We+":",C(U))for(var G=0;G<U.length;G++){oe=U[G];var me=We+te(oe,G);_e+=le(oe,J,Oe,me,Be)}else if(me=g(U),typeof me=="function")for(U=me.call(U),G=0;!(oe=U.next()).done;)oe=oe.value,me=We+te(oe,G++),_e+=le(oe,J,Oe,me,Be);else if(oe==="object")throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return _e}function j(U,J,Oe){if(U==null)return U;var We=[],Be=0;return le(U,We,"","",function(oe){return J.call(Oe,oe,Be++)}),We}function ue(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(Oe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Oe)},function(Oe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Oe)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var K={current:null},q={transition:null},ae={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:q,ReactCurrentOwner:N};function fe(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:j,forEach:function(U,J,Oe){j(U,function(){J.apply(this,arguments)},Oe)},count:function(U){var J=0;return j(U,function(){J++}),J},toArray:function(U){return j(U,function(J){return J})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Mt.Component=y,Mt.Fragment=t,Mt.Profiler=o,Mt.PureComponent=I,Mt.StrictMode=r,Mt.Suspense=f,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,Mt.act=fe,Mt.cloneElement=function(U,J,Oe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var We=w({},U.props),Be=U.key,oe=U.ref,_e=U._owner;if(J!=null){if(J.ref!==void 0&&(oe=J.ref,_e=N.current),J.key!==void 0&&(Be=""+J.key),U.type&&U.type.defaultProps)var G=U.type.defaultProps;for(me in J)D.call(J,me)&&!R.hasOwnProperty(me)&&(We[me]=J[me]===void 0&&G!==void 0?G[me]:J[me])}var me=arguments.length-2;if(me===1)We.children=Oe;else if(1<me){G=Array(me);for(var xe=0;xe<me;xe++)G[xe]=arguments[xe+2];We.children=G}return{$$typeof:s,type:U.type,key:Be,ref:oe,props:We,_owner:_e}},Mt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Mt.createElement=M,Mt.createFactory=function(U){var J=M.bind(null,U);return J.type=U,J},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(U){return{$$typeof:d,render:U}},Mt.isValidElement=V,Mt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ue}},Mt.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},Mt.startTransition=function(U){var J=q.transition;q.transition={};try{U()}finally{q.transition=J}},Mt.unstable_act=fe,Mt.useCallback=function(U,J){return K.current.useCallback(U,J)},Mt.useContext=function(U){return K.current.useContext(U)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(U){return K.current.useDeferredValue(U)},Mt.useEffect=function(U,J){return K.current.useEffect(U,J)},Mt.useId=function(){return K.current.useId()},Mt.useImperativeHandle=function(U,J,Oe){return K.current.useImperativeHandle(U,J,Oe)},Mt.useInsertionEffect=function(U,J){return K.current.useInsertionEffect(U,J)},Mt.useLayoutEffect=function(U,J){return K.current.useLayoutEffect(U,J)},Mt.useMemo=function(U,J){return K.current.useMemo(U,J)},Mt.useReducer=function(U,J,Oe){return K.current.useReducer(U,J,Oe)},Mt.useRef=function(U){return K.current.useRef(U)},Mt.useState=function(U){return K.current.useState(U)},Mt.useSyncExternalStore=function(U,J,Oe){return K.current.useSyncExternalStore(U,J,Oe)},Mt.useTransition=function(){return K.current.useTransition()},Mt.version="18.3.1",Mt}var Cm;function Oh(){return Cm||(Cm=1,rf.exports=n_()),rf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function i_(){if(Pm)return eo;Pm=1;var s=Oh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,p){var _,v={},g=null,S=null;p!==void 0&&(g=""+p),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(S=f.ref);for(_ in f)r.call(f,_)&&!l.hasOwnProperty(_)&&(v[_]=f[_]);if(d&&d.defaultProps)for(_ in f=d.defaultProps,f)v[_]===void 0&&(v[_]=f[_]);return{$$typeof:e,type:d,key:g,ref:S,props:v,_owner:o.current}}return eo.Fragment=t,eo.jsx=c,eo.jsxs=c,eo}var Nm;function r_(){return Nm||(Nm=1,nf.exports=i_()),nf.exports}var z=r_(),Tl={},sf={exports:{}},jn={},af={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function s_(){return Lm||(Lm=1,(function(s){function e(q,ae){var fe=q.length;q.push(ae);e:for(;0<fe;){var U=fe-1>>>1,J=q[U];if(0<o(J,ae))q[U]=ae,q[fe]=J,fe=U;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ae=q[0],fe=q.pop();if(fe!==ae){q[0]=fe;e:for(var U=0,J=q.length,Oe=J>>>1;U<Oe;){var We=2*(U+1)-1,Be=q[We],oe=We+1,_e=q[oe];if(0>o(Be,fe))oe<J&&0>o(_e,Be)?(q[U]=_e,q[oe]=fe,U=oe):(q[U]=Be,q[We]=fe,U=We);else if(oe<J&&0>o(_e,fe))q[U]=_e,q[oe]=fe,U=oe;else break e}}return ae}function o(q,ae){var fe=q.sortIndex-ae.sortIndex;return fe!==0?fe:q.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var f=[],p=[],_=1,v=null,g=3,S=!1,w=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(q){for(var ae=t(p);ae!==null;){if(ae.callback===null)r(p);else if(ae.startTime<=q)r(p),ae.sortIndex=ae.expirationTime,e(f,ae);else break;ae=t(p)}}function C(q){if(T=!1,O(q),!w)if(t(f)!==null)w=!0,ue(D);else{var ae=t(p);ae!==null&&K(C,ae.startTime-q)}}function D(q,ae){w=!1,T&&(T=!1,x(M),M=-1),S=!0;var fe=g;try{for(O(ae),v=t(f);v!==null&&(!(v.expirationTime>ae)||q&&!k());){var U=v.callback;if(typeof U=="function"){v.callback=null,g=v.priorityLevel;var J=U(v.expirationTime<=ae);ae=s.unstable_now(),typeof J=="function"?v.callback=J:v===t(f)&&r(f),O(ae)}else r(f);v=t(f)}if(v!==null)var Oe=!0;else{var We=t(p);We!==null&&K(C,We.startTime-ae),Oe=!1}return Oe}finally{v=null,g=fe,S=!1}}var N=!1,R=null,M=-1,P=5,V=-1;function k(){return!(s.unstable_now()-V<P)}function B(){if(R!==null){var q=s.unstable_now();V=q;var ae=!0;try{ae=R(!0,q)}finally{ae?te():(N=!1,R=null)}}else N=!1}var te;if(typeof I=="function")te=function(){I(B)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,j=le.port2;le.port1.onmessage=B,te=function(){j.postMessage(null)}}else te=function(){y(B,0)};function ue(q){R=q,N||(N=!0,te())}function K(q,ae){M=y(function(){q(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ue(D))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(q){switch(g){case 1:case 2:case 3:var ae=3;break;default:ae=g}var fe=g;g=ae;try{return q()}finally{g=fe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,ae){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var fe=g;g=q;try{return ae()}finally{g=fe}},s.unstable_scheduleCallback=function(q,ae,fe){var U=s.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?U+fe:U):fe=U,q){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=fe+J,q={id:_++,callback:ae,priorityLevel:q,startTime:fe,expirationTime:J,sortIndex:-1},fe>U?(q.sortIndex=fe,e(p,q),t(f)===null&&q===t(p)&&(T?(x(M),M=-1):T=!0,K(C,fe-U))):(q.sortIndex=J,e(f,q),w||S||(w=!0,ue(D))),q},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(q){var ae=g;return function(){var fe=g;g=ae;try{return q.apply(this,arguments)}finally{g=fe}}}})(of)),of}var Dm;function a_(){return Dm||(Dm=1,af.exports=s_()),af.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function o_(){if(Im)return jn;Im=1;var s=Oh(),e=a_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function g(n){return f.call(v,n)?!0:f.call(_,n)?!1:p.test(n)?v[n]=!0:(_[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,u,h,m,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,I);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,I);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,I);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function O(n,i,a,u){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,h,u)&&(a=null),u||h===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),N=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),k=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),q=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var fe=Object.assign,U;function J(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Oe=!1;function We(n,i){if(!n||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(he){var u=he}Reflect.construct(n,[],i)}else{try{i.call()}catch(he){u=he}n.call(i.prototype)}else{try{throw Error()}catch(he){u=he}n()}}catch(he){if(he&&u&&typeof he.stack=="string"){for(var h=he.stack.split(`
`),m=u.stack.split(`
`),b=h.length-1,F=m.length-1;1<=b&&0<=F&&h[b]!==m[F];)F--;for(;1<=b&&0<=F;b--,F--)if(h[b]!==m[F]){if(b!==1||F!==1)do if(b--,F--,0>F||h[b]!==m[F]){var H=`
`+h[b].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=b&&0<=F);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?J(n):""}function Be(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=We(n.type,!1),n;case 11:return n=We(n.type.render,!1),n;case 1:return n=We(n.type,!0),n;default:return""}}function oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case N:return"Portal";case P:return"Profiler";case M:return"StrictMode";case te:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case B:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j:return i=n.displayName||null,i!==null?i:oe(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return oe(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(i);case 8:return i===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function G(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function me(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function xe(n){var i=me(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){u=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Fe(n){n._valueTracker||(n._valueTracker=xe(n))}function At(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=me(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function st(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vt(n,i){var a=i.checked;return fe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function lt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=G(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ge(n,i){i=i.checked,i!=null&&O(n,"checked",i,!1)}function It(n,i){Ge(n,i);var a=G(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ce(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ce(n,i.type,G(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Rt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ce(n,i,a){(i!=="number"||st(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ct=Array.isArray;function Le(n,i,a,u){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+G(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Ct(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return fe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function W(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ct(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:G(a)}}function Wt(n,i){var a=G(i.value),u=G(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function wt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?L(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,se=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function de(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function pe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function ge(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=pe(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var Pe=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,i){if(i){if(Pe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function nt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var it=null,ut=null,X=null;function Ne(n){if(n=za(n)){if(typeof it!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Bo(i),it(n.stateNode,n.type,i))}}function ve(n){ut?X?X.push(n):X=[n]:ut=n}function Ie(){if(ut){var n=ut,i=X;if(X=ut=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function ke(n,i){return n(i)}function ye(){}var $e=!1;function Ye(n,i,a){if($e)return n(i,a);$e=!0;try{return ke(n,i,a)}finally{$e=!1,(ut!==null||X!==null)&&(ye(),Ie())}}function Bt(n,i){var a=n.stateNode;if(a===null)return null;var u=Bo(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ut=!1;if(d)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Ut=!1}function li(n,i,a,u,h,m,b,F,H){var he=Array.prototype.slice.call(arguments,3);try{i.apply(a,he)}catch(Me){this.onError(Me)}}var Vr=!1,_s=null,Hr=!1,Gr=null,Tu={onError:function(n){Vr=!0,_s=n}};function Mo(n,i,a,u,h,m,b,F,H){Vr=!1,_s=null,li.apply(Tu,arguments)}function Eo(n,i,a,u,h,m,b,F,H){if(Mo.apply(this,arguments),Vr){if(Vr){var he=_s;Vr=!1,_s=null}else throw Error(t(198));Hr||(Hr=!0,Gr=he)}}function In(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function xs(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function xa(n){if(In(n)!==n)throw Error(t(188))}function wo(n){var i=n.alternate;if(!i){if(i=In(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return xa(h),n;if(m===u)return xa(h),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=m;else{for(var b=!1,F=h.child;F;){if(F===a){b=!0,a=h,u=m;break}if(F===u){b=!0,u=h,a=m;break}F=F.sibling}if(!b){for(F=m.child;F;){if(F===a){b=!0,a=m,u=h;break}if(F===u){b=!0,u=m,a=h;break}F=F.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Wr(n){return n=wo(n),n!==null?ya(n):null}function ya(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ya(n);if(i!==null)return i;n=n.sibling}return null}var Xr=e.unstable_scheduleCallback,Sa=e.unstable_cancelCallback,To=e.unstable_shouldYield,bu=e.unstable_requestPaint,Jt=e.unstable_now,Au=e.unstable_getCurrentPriorityLevel,Ma=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,Z=e.unstable_NormalPriority,ce=e.unstable_LowPriority,ie=e.unstable_IdlePriority,ne=null,Re=null;function Xe(n){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:dt,Ke=Math.log,tt=Math.LN2;function dt(n){return n>>>=0,n===0?32:31-(Ke(n)/tt|0)|0}var pt=64,Je=4194304;function Pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ht(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,m=n.pingedLanes,b=a&268435455;if(b!==0){var F=b&~h;F!==0?u=Pt(F):(m&=b,m!==0&&(u=Pt(m)))}else b=a&~h,b!==0?u=Pt(b):m!==0&&(u=Pt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Ae(i),h=1<<a,u|=n[a],i&=~h;return u}function $t(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var b=31-Ae(m),F=1<<b,H=h[b];H===-1?((F&a)===0||(F&u)!==0)&&(h[b]=$t(F,i)):H<=i&&(n.expiredLanes|=F),m&=~F}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ve(){var n=pt;return pt<<=1,(pt&4194240)===0&&(pt=64),n}function _n(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function xt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ae(i),n[i]=a}function Vn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Ae(a),m=1<<h;i[h]=0,u[h]=-1,n[h]=-1,a&=~m}}function Hn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Ae(a),h=1<<u;h&i|n[u]&i&&(n[u]|=i),a&=~h}}var St=0;function ji(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ft,Xt,xi,zt,yi,Di=!1,qr=[],fr=null,hr=null,dr=null,Ea=new Map,wa=new Map,pr=[],Eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(n,i){switch(n){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Ea.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(i.pointerId)}}function Ta(n,i,a,u,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=za(i),i!==null&&Xt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function wg(n,i,a,u,h){switch(i){case"focusin":return fr=Ta(fr,n,i,a,u,h),!0;case"dragenter":return hr=Ta(hr,n,i,a,u,h),!0;case"mouseover":return dr=Ta(dr,n,i,a,u,h),!0;case"pointerover":var m=h.pointerId;return Ea.set(m,Ta(Ea.get(m)||null,n,i,a,u,h)),!0;case"gotpointercapture":return m=h.pointerId,wa.set(m,Ta(wa.get(m)||null,n,i,a,u,h)),!0}return!1}function hd(n){var i=Yr(n.target);if(i!==null){var a=In(i);if(a!==null){if(i=a.tag,i===13){if(i=xs(a),i!==null){n.blockedOn=i,yi(n.priority,function(){xi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Cu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);De=u,a.target.dispatchEvent(u),De=null}else return i=za(a),i!==null&&Xt(i),n.blockedOn=a,!1;i.shift()}return!0}function dd(n,i,a){bo(n)&&a.delete(i)}function Tg(){Di=!1,fr!==null&&bo(fr)&&(fr=null),hr!==null&&bo(hr)&&(hr=null),dr!==null&&bo(dr)&&(dr=null),Ea.forEach(dd),wa.forEach(dd)}function ba(n,i){n.blockedOn===i&&(n.blockedOn=null,Di||(Di=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tg)))}function Aa(n){function i(h){return ba(h,n)}if(0<qr.length){ba(qr[0],n);for(var a=1;a<qr.length;a++){var u=qr[a];u.blockedOn===n&&(u.blockedOn=null)}}for(fr!==null&&ba(fr,n),hr!==null&&ba(hr,n),dr!==null&&ba(dr,n),Ea.forEach(i),wa.forEach(i),a=0;a<pr.length;a++)u=pr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)hd(a),a.blockedOn===null&&pr.shift()}var ys=C.ReactCurrentBatchConfig,Ao=!0;function bg(n,i,a,u){var h=St,m=ys.transition;ys.transition=null;try{St=1,Ru(n,i,a,u)}finally{St=h,ys.transition=m}}function Ag(n,i,a,u){var h=St,m=ys.transition;ys.transition=null;try{St=4,Ru(n,i,a,u)}finally{St=h,ys.transition=m}}function Ru(n,i,a,u){if(Ao){var h=Cu(n,i,a,u);if(h===null)qu(n,i,u,Ro,a),fd(n,u);else if(wg(h,n,i,a,u))u.stopPropagation();else if(fd(n,u),i&4&&-1<Eg.indexOf(n)){for(;h!==null;){var m=za(h);if(m!==null&&Ft(m),m=Cu(n,i,a,u),m===null&&qu(n,i,u,Ro,a),m===h)break;h=m}h!==null&&u.stopPropagation()}else qu(n,i,u,null,a)}}var Ro=null;function Cu(n,i,a,u){if(Ro=null,n=nt(u),n=Yr(n),n!==null)if(i=In(n),i===null)n=null;else if(a=i.tag,a===13){if(n=xs(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ro=n,null}function pd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Au()){case Ma:return 1;case A:return 4;case Z:case ce:return 16;case ie:return 536870912;default:return 16}default:return 16}}var mr=null,Pu=null,Co=null;function md(){if(Co)return Co;var n,i=Pu,a=i.length,u,h="value"in mr?mr.value:mr.textContent,m=h.length;for(n=0;n<a&&i[n]===h[n];n++);var b=a-n;for(u=1;u<=b&&i[a-u]===h[m-u];u++);return Co=h.slice(n,1<u?1-u:void 0)}function Po(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function No(){return!0}function gd(){return!1}function Zn(n){function i(a,u,h,m,b){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?No:gd,this.isPropagationStopped=gd,this}return fe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),i}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=Zn(Ss),Ra=fe({},Ss,{view:0,detail:0}),Rg=Zn(Ra),Lu,Du,Ca,Lo=fe({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ca&&(Ca&&n.type==="mousemove"?(Lu=n.screenX-Ca.screenX,Du=n.screenY-Ca.screenY):Du=Lu=0,Ca=n),Lu)},movementY:function(n){return"movementY"in n?n.movementY:Du}}),vd=Zn(Lo),Cg=fe({},Lo,{dataTransfer:0}),Pg=Zn(Cg),Ng=fe({},Ra,{relatedTarget:0}),Iu=Zn(Ng),Lg=fe({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Dg=Zn(Lg),Ig=fe({},Ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ug=Zn(Ig),Fg=fe({},Ss,{data:0}),_d=Zn(Fg),Og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=zg[n])?!!i[n]:!1}function Uu(){return Bg}var Vg=fe({},Ra,{key:function(n){if(n.key){var i=Og[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?kg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(n){return n.type==="keypress"?Po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Hg=Zn(Vg),Gg=fe({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=Zn(Gg),Wg=fe({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Xg=Zn(Wg),qg=fe({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yg=Zn(qg),jg=fe({},Lo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$g=Zn(jg),Kg=[9,13,27,32],Fu=d&&"CompositionEvent"in window,Pa=null;d&&"documentMode"in document&&(Pa=document.documentMode);var Zg=d&&"TextEvent"in window&&!Pa,yd=d&&(!Fu||Pa&&8<Pa&&11>=Pa),Sd=" ",Md=!1;function Ed(n,i){switch(n){case"keyup":return Kg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function Qg(n,i){switch(n){case"compositionend":return wd(i);case"keypress":return i.which!==32?null:(Md=!0,Sd);case"textInput":return n=i.data,n===Sd&&Md?null:n;default:return null}}function Jg(n,i){if(Ms)return n==="compositionend"||!Fu&&Ed(n,i)?(n=md(),Co=Pu=mr=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return yd&&i.locale!=="ko"?null:i.data;default:return null}}var ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ev[n.type]:i==="textarea"}function bd(n,i,a,u){ve(u),i=Oo(i,"onChange"),0<i.length&&(a=new Nu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Na=null,La=null;function tv(n){Wd(n,0)}function Do(n){var i=As(n);if(At(i))return n}function nv(n,i){if(n==="change")return i}var Ad=!1;if(d){var Ou;if(d){var ku="oninput"in document;if(!ku){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),ku=typeof Rd.oninput=="function"}Ou=ku}else Ou=!1;Ad=Ou&&(!document.documentMode||9<document.documentMode)}function Cd(){Na&&(Na.detachEvent("onpropertychange",Pd),La=Na=null)}function Pd(n){if(n.propertyName==="value"&&Do(La)){var i=[];bd(i,La,n,nt(n)),Ye(tv,i)}}function iv(n,i,a){n==="focusin"?(Cd(),Na=i,La=a,Na.attachEvent("onpropertychange",Pd)):n==="focusout"&&Cd()}function rv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Do(La)}function sv(n,i){if(n==="click")return Do(i)}function av(n,i){if(n==="input"||n==="change")return Do(i)}function ov(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Si=typeof Object.is=="function"?Object.is:ov;function Da(n,i){if(Si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!f.call(i,h)||!Si(n[h],i[h]))return!1}return!0}function Nd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ld(n,i){var a=Nd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nd(a)}}function Dd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Dd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Id(){for(var n=window,i=st();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=st(n.document)}return i}function zu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function lv(n){var i=Id(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Dd(a.ownerDocument.documentElement,a)){if(u!==null&&zu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,m=Math.min(u.start,h);u=u.end===void 0?m:Math.min(u.end,h),!n.extend&&m>u&&(h=u,u=m,m=h),h=Ld(a,m);var b=Ld(a,u);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var uv=d&&"documentMode"in document&&11>=document.documentMode,Es=null,Bu=null,Ia=null,Vu=!1;function Ud(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vu||Es==null||Es!==st(u)||(u=Es,"selectionStart"in u&&zu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ia&&Da(Ia,u)||(Ia=u,u=Oo(Bu,"onSelect"),0<u.length&&(i=new Nu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Es)))}function Io(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ws={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Hu={},Fd={};d&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Uo(n){if(Hu[n])return Hu[n];if(!ws[n])return n;var i=ws[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Fd)return Hu[n]=i[a];return n}var Od=Uo("animationend"),kd=Uo("animationiteration"),zd=Uo("animationstart"),Bd=Uo("transitionend"),Vd=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(n,i){Vd.set(n,i),l(i,[n])}for(var Gu=0;Gu<Hd.length;Gu++){var Wu=Hd[Gu],cv=Wu.toLowerCase(),fv=Wu[0].toUpperCase()+Wu.slice(1);gr(cv,"on"+fv)}gr(Od,"onAnimationEnd"),gr(kd,"onAnimationIteration"),gr(zd,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(Bd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function Gd(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Eo(u,i,void 0,n),n.currentTarget=null}function Wd(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var b=u.length-1;0<=b;b--){var F=u[b],H=F.instance,he=F.currentTarget;if(F=F.listener,H!==m&&h.isPropagationStopped())break e;Gd(h,F,he),m=H}else for(b=0;b<u.length;b++){if(F=u[b],H=F.instance,he=F.currentTarget,F=F.listener,H!==m&&h.isPropagationStopped())break e;Gd(h,F,he),m=H}}}if(Hr)throw n=Gr,Hr=!1,Gr=null,n}function qt(n,i){var a=i[Qu];a===void 0&&(a=i[Qu]=new Set);var u=n+"__bubble";a.has(u)||(Xd(i,n,2,!1),a.add(u))}function Xu(n,i,a){var u=0;i&&(u|=4),Xd(a,n,u,i)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Fa(n){if(!n[Fo]){n[Fo]=!0,r.forEach(function(a){a!=="selectionchange"&&(hv.has(a)||Xu(a,!1,n),Xu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Fo]||(i[Fo]=!0,Xu("selectionchange",!1,i))}}function Xd(n,i,a,u){switch(pd(i)){case 1:var h=bg;break;case 4:h=Ag;break;default:h=Ru}a=h.bind(null,i,a,n),h=void 0,!Ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function qu(n,i,a,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var F=u.stateNode.containerInfo;if(F===h||F.nodeType===8&&F.parentNode===h)break;if(b===4)for(b=u.return;b!==null;){var H=b.tag;if((H===3||H===4)&&(H=b.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;b=b.return}for(;F!==null;){if(b=Yr(F),b===null)return;if(H=b.tag,H===5||H===6){u=m=b;continue e}F=F.parentNode}}u=u.return}Ye(function(){var he=m,Me=nt(a),we=[];e:{var Se=Vd.get(n);if(Se!==void 0){var He=Nu,je=n;switch(n){case"keypress":if(Po(a)===0)break e;case"keydown":case"keyup":He=Hg;break;case"focusin":je="focus",He=Iu;break;case"focusout":je="blur",He=Iu;break;case"beforeblur":case"afterblur":He=Iu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=Pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=Xg;break;case Od:case kd:case zd:He=Dg;break;case Bd:He=Yg;break;case"scroll":He=Rg;break;case"wheel":He=$g;break;case"copy":case"cut":case"paste":He=Ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=xd}var Ze=(i&4)!==0,sn=!Ze&&n==="scroll",ee=Ze?Se!==null?Se+"Capture":null:Se;Ze=[];for(var Y=he,re;Y!==null;){re=Y;var Te=re.stateNode;if(re.tag===5&&Te!==null&&(re=Te,ee!==null&&(Te=Bt(Y,ee),Te!=null&&Ze.push(Oa(Y,Te,re)))),sn)break;Y=Y.return}0<Ze.length&&(Se=new He(Se,je,null,a,Me),we.push({event:Se,listeners:Ze}))}}if((i&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",Se&&a!==De&&(je=a.relatedTarget||a.fromElement)&&(Yr(je)||je[$i]))break e;if((He||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,He?(je=a.relatedTarget||a.toElement,He=he,je=je?Yr(je):null,je!==null&&(sn=In(je),je!==sn||je.tag!==5&&je.tag!==6)&&(je=null)):(He=null,je=he),He!==je)){if(Ze=vd,Te="onMouseLeave",ee="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=xd,Te="onPointerLeave",ee="onPointerEnter",Y="pointer"),sn=He==null?Se:As(He),re=je==null?Se:As(je),Se=new Ze(Te,Y+"leave",He,a,Me),Se.target=sn,Se.relatedTarget=re,Te=null,Yr(Me)===he&&(Ze=new Ze(ee,Y+"enter",je,a,Me),Ze.target=re,Ze.relatedTarget=sn,Te=Ze),sn=Te,He&&je)t:{for(Ze=He,ee=je,Y=0,re=Ze;re;re=Ts(re))Y++;for(re=0,Te=ee;Te;Te=Ts(Te))re++;for(;0<Y-re;)Ze=Ts(Ze),Y--;for(;0<re-Y;)ee=Ts(ee),re--;for(;Y--;){if(Ze===ee||ee!==null&&Ze===ee.alternate)break t;Ze=Ts(Ze),ee=Ts(ee)}Ze=null}else Ze=null;He!==null&&qd(we,Se,He,Ze,!1),je!==null&&sn!==null&&qd(we,sn,je,Ze,!0)}}e:{if(Se=he?As(he):window,He=Se.nodeName&&Se.nodeName.toLowerCase(),He==="select"||He==="input"&&Se.type==="file")var et=nv;else if(Td(Se))if(Ad)et=av;else{et=rv;var at=iv}else(He=Se.nodeName)&&He.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(et=sv);if(et&&(et=et(n,he))){bd(we,et,a,Me);break e}at&&at(n,Se,he),n==="focusout"&&(at=Se._wrapperState)&&at.controlled&&Se.type==="number"&&Ce(Se,"number",Se.value)}switch(at=he?As(he):window,n){case"focusin":(Td(at)||at.contentEditable==="true")&&(Es=at,Bu=he,Ia=null);break;case"focusout":Ia=Bu=Es=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Ud(we,a,Me);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":Ud(we,a,Me)}var ot;if(Fu)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Ms?Ed(n,a)&&(ht="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(yd&&a.locale!=="ko"&&(Ms||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Ms&&(ot=md()):(mr=Me,Pu="value"in mr?mr.value:mr.textContent,Ms=!0)),at=Oo(he,ht),0<at.length&&(ht=new _d(ht,n,null,a,Me),we.push({event:ht,listeners:at}),ot?ht.data=ot:(ot=wd(a),ot!==null&&(ht.data=ot)))),(ot=Zg?Qg(n,a):Jg(n,a))&&(he=Oo(he,"onBeforeInput"),0<he.length&&(Me=new _d("onBeforeInput","beforeinput",null,a,Me),we.push({event:Me,listeners:he}),Me.data=ot))}Wd(we,i)})}function Oa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Oo(n,i){for(var a=i+"Capture",u=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=Bt(n,a),m!=null&&u.unshift(Oa(n,m,h)),m=Bt(n,i),m!=null&&u.push(Oa(n,m,h))),n=n.return}return u}function Ts(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qd(n,i,a,u,h){for(var m=i._reactName,b=[];a!==null&&a!==u;){var F=a,H=F.alternate,he=F.stateNode;if(H!==null&&H===u)break;F.tag===5&&he!==null&&(F=he,h?(H=Bt(a,m),H!=null&&b.unshift(Oa(a,H,F))):h||(H=Bt(a,m),H!=null&&b.push(Oa(a,H,F)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var dv=/\r\n?/g,pv=/\u0000|\uFFFD/g;function Yd(n){return(typeof n=="string"?n:""+n).replace(dv,`
`).replace(pv,"")}function ko(n,i,a){if(i=Yd(i),Yd(n)!==i&&a)throw Error(t(425))}function zo(){}var Yu=null,ju=null;function $u(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,mv=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(n){return jd.resolve(null).then(n).catch(vv)}:Ku;function vv(n){setTimeout(function(){throw n})}function Zu(n,i){var a=i,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),Aa(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);Aa(i)}function vr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function $d(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Ii="__reactFiber$"+bs,ka="__reactProps$"+bs,$i="__reactContainer$"+bs,Qu="__reactEvents$"+bs,_v="__reactListeners$"+bs,xv="__reactHandles$"+bs;function Yr(n){var i=n[Ii];if(i)return i;for(var a=n.parentNode;a;){if(i=a[$i]||a[Ii]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=$d(n);n!==null;){if(a=n[Ii])return a;n=$d(n)}return i}n=a,a=n.parentNode}return null}function za(n){return n=n[Ii]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function As(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Bo(n){return n[ka]||null}var Ju=[],Rs=-1;function _r(n){return{current:n}}function Yt(n){0>Rs||(n.current=Ju[Rs],Ju[Rs]=null,Rs--)}function Gt(n,i){Rs++,Ju[Rs]=n.current,n.current=i}var xr={},En=_r(xr),Gn=_r(!1),jr=xr;function Cs(n,i){var a=n.type.contextTypes;if(!a)return xr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Wn(n){return n=n.childContextTypes,n!=null}function Vo(){Yt(Gn),Yt(En)}function Kd(n,i,a){if(En.current!==xr)throw Error(t(168));Gt(En,i),Gt(Gn,a)}function Zd(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,_e(n)||"Unknown",h));return fe({},a,u)}function Ho(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xr,jr=En.current,Gt(En,n),Gt(Gn,Gn.current),!0}function Qd(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Zd(n,i,jr),u.__reactInternalMemoizedMergedChildContext=n,Yt(Gn),Yt(En),Gt(En,n)):Yt(Gn),Gt(Gn,a)}var Ki=null,Go=!1,ec=!1;function Jd(n){Ki===null?Ki=[n]:Ki.push(n)}function yv(n){Go=!0,Jd(n)}function yr(){if(!ec&&Ki!==null){ec=!0;var n=0,i=St;try{var a=Ki;for(St=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ki=null,Go=!1}catch(h){throw Ki!==null&&(Ki=Ki.slice(n+1)),Xr(Ma,yr),h}finally{St=i,ec=!1}}return null}var Ps=[],Ns=0,Wo=null,Xo=0,ui=[],ci=0,$r=null,Zi=1,Qi="";function Kr(n,i){Ps[Ns++]=Xo,Ps[Ns++]=Wo,Wo=n,Xo=i}function ep(n,i,a){ui[ci++]=Zi,ui[ci++]=Qi,ui[ci++]=$r,$r=n;var u=Zi;n=Qi;var h=32-Ae(u)-1;u&=~(1<<h),a+=1;var m=32-Ae(i)+h;if(30<m){var b=h-h%5;m=(u&(1<<b)-1).toString(32),u>>=b,h-=b,Zi=1<<32-Ae(i)+h|a<<h|u,Qi=m+n}else Zi=1<<m|a<<h|u,Qi=n}function tc(n){n.return!==null&&(Kr(n,1),ep(n,1,0))}function nc(n){for(;n===Wo;)Wo=Ps[--Ns],Ps[Ns]=null,Xo=Ps[--Ns],Ps[Ns]=null;for(;n===$r;)$r=ui[--ci],ui[ci]=null,Qi=ui[--ci],ui[ci]=null,Zi=ui[--ci],ui[ci]=null}var Qn=null,Jn=null,Kt=!1,Mi=null;function tp(n,i){var a=pi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function np(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Qn=n,Jn=vr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Qn=n,Jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=$r!==null?{id:Zi,overflow:Qi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=pi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Qn=n,Jn=null,!0):!1;default:return!1}}function ic(n){return(n.mode&1)!==0&&(n.flags&128)===0}function rc(n){if(Kt){var i=Jn;if(i){var a=i;if(!np(n,i)){if(ic(n))throw Error(t(418));i=vr(a.nextSibling);var u=Qn;i&&np(n,i)?tp(u,a):(n.flags=n.flags&-4097|2,Kt=!1,Qn=n)}}else{if(ic(n))throw Error(t(418));n.flags=n.flags&-4097|2,Kt=!1,Qn=n}}}function ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qn=n}function qo(n){if(n!==Qn)return!1;if(!Kt)return ip(n),Kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!$u(n.type,n.memoizedProps)),i&&(i=Jn)){if(ic(n))throw rp(),Error(t(418));for(;i;)tp(n,i),i=vr(i.nextSibling)}if(ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Jn=vr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Jn=null}}else Jn=Qn?vr(n.stateNode.nextSibling):null;return!0}function rp(){for(var n=Jn;n;)n=vr(n.nextSibling)}function Ls(){Jn=Qn=null,Kt=!1}function sc(n){Mi===null?Mi=[n]:Mi.push(n)}var Sv=C.ReactCurrentBatchConfig;function Ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(b){var F=h.refs;b===null?delete F[m]:F[m]=b},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Yo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function sp(n){var i=n._init;return i(n._payload)}function ap(n){function i(ee,Y){if(n){var re=ee.deletions;re===null?(ee.deletions=[Y],ee.flags|=16):re.push(Y)}}function a(ee,Y){if(!n)return null;for(;Y!==null;)i(ee,Y),Y=Y.sibling;return null}function u(ee,Y){for(ee=new Map;Y!==null;)Y.key!==null?ee.set(Y.key,Y):ee.set(Y.index,Y),Y=Y.sibling;return ee}function h(ee,Y){return ee=Rr(ee,Y),ee.index=0,ee.sibling=null,ee}function m(ee,Y,re){return ee.index=re,n?(re=ee.alternate,re!==null?(re=re.index,re<Y?(ee.flags|=2,Y):re):(ee.flags|=2,Y)):(ee.flags|=1048576,Y)}function b(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function F(ee,Y,re,Te){return Y===null||Y.tag!==6?(Y=Kc(re,ee.mode,Te),Y.return=ee,Y):(Y=h(Y,re),Y.return=ee,Y)}function H(ee,Y,re,Te){var et=re.type;return et===R?Me(ee,Y,re.props.children,Te,re.key):Y!==null&&(Y.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&sp(et)===Y.type)?(Te=h(Y,re.props),Te.ref=Ba(ee,Y,re),Te.return=ee,Te):(Te=vl(re.type,re.key,re.props,null,ee.mode,Te),Te.ref=Ba(ee,Y,re),Te.return=ee,Te)}function he(ee,Y,re,Te){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==re.containerInfo||Y.stateNode.implementation!==re.implementation?(Y=Zc(re,ee.mode,Te),Y.return=ee,Y):(Y=h(Y,re.children||[]),Y.return=ee,Y)}function Me(ee,Y,re,Te,et){return Y===null||Y.tag!==7?(Y=rs(re,ee.mode,Te,et),Y.return=ee,Y):(Y=h(Y,re),Y.return=ee,Y)}function we(ee,Y,re){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Kc(""+Y,ee.mode,re),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case D:return re=vl(Y.type,Y.key,Y.props,null,ee.mode,re),re.ref=Ba(ee,null,Y),re.return=ee,re;case N:return Y=Zc(Y,ee.mode,re),Y.return=ee,Y;case ue:var Te=Y._init;return we(ee,Te(Y._payload),re)}if(ct(Y)||ae(Y))return Y=rs(Y,ee.mode,re,null),Y.return=ee,Y;Yo(ee,Y)}return null}function Se(ee,Y,re,Te){var et=Y!==null?Y.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return et!==null?null:F(ee,Y,""+re,Te);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case D:return re.key===et?H(ee,Y,re,Te):null;case N:return re.key===et?he(ee,Y,re,Te):null;case ue:return et=re._init,Se(ee,Y,et(re._payload),Te)}if(ct(re)||ae(re))return et!==null?null:Me(ee,Y,re,Te,null);Yo(ee,re)}return null}function He(ee,Y,re,Te,et){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ee=ee.get(re)||null,F(Y,ee,""+Te,et);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case D:return ee=ee.get(Te.key===null?re:Te.key)||null,H(Y,ee,Te,et);case N:return ee=ee.get(Te.key===null?re:Te.key)||null,he(Y,ee,Te,et);case ue:var at=Te._init;return He(ee,Y,re,at(Te._payload),et)}if(ct(Te)||ae(Te))return ee=ee.get(re)||null,Me(Y,ee,Te,et,null);Yo(Y,Te)}return null}function je(ee,Y,re,Te){for(var et=null,at=null,ot=Y,ht=Y=0,gn=null;ot!==null&&ht<re.length;ht++){ot.index>ht?(gn=ot,ot=null):gn=ot.sibling;var Dt=Se(ee,ot,re[ht],Te);if(Dt===null){ot===null&&(ot=gn);break}n&&ot&&Dt.alternate===null&&i(ee,ot),Y=m(Dt,Y,ht),at===null?et=Dt:at.sibling=Dt,at=Dt,ot=gn}if(ht===re.length)return a(ee,ot),Kt&&Kr(ee,ht),et;if(ot===null){for(;ht<re.length;ht++)ot=we(ee,re[ht],Te),ot!==null&&(Y=m(ot,Y,ht),at===null?et=ot:at.sibling=ot,at=ot);return Kt&&Kr(ee,ht),et}for(ot=u(ee,ot);ht<re.length;ht++)gn=He(ot,ee,ht,re[ht],Te),gn!==null&&(n&&gn.alternate!==null&&ot.delete(gn.key===null?ht:gn.key),Y=m(gn,Y,ht),at===null?et=gn:at.sibling=gn,at=gn);return n&&ot.forEach(function(Cr){return i(ee,Cr)}),Kt&&Kr(ee,ht),et}function Ze(ee,Y,re,Te){var et=ae(re);if(typeof et!="function")throw Error(t(150));if(re=et.call(re),re==null)throw Error(t(151));for(var at=et=null,ot=Y,ht=Y=0,gn=null,Dt=re.next();ot!==null&&!Dt.done;ht++,Dt=re.next()){ot.index>ht?(gn=ot,ot=null):gn=ot.sibling;var Cr=Se(ee,ot,Dt.value,Te);if(Cr===null){ot===null&&(ot=gn);break}n&&ot&&Cr.alternate===null&&i(ee,ot),Y=m(Cr,Y,ht),at===null?et=Cr:at.sibling=Cr,at=Cr,ot=gn}if(Dt.done)return a(ee,ot),Kt&&Kr(ee,ht),et;if(ot===null){for(;!Dt.done;ht++,Dt=re.next())Dt=we(ee,Dt.value,Te),Dt!==null&&(Y=m(Dt,Y,ht),at===null?et=Dt:at.sibling=Dt,at=Dt);return Kt&&Kr(ee,ht),et}for(ot=u(ee,ot);!Dt.done;ht++,Dt=re.next())Dt=He(ot,ee,ht,Dt.value,Te),Dt!==null&&(n&&Dt.alternate!==null&&ot.delete(Dt.key===null?ht:Dt.key),Y=m(Dt,Y,ht),at===null?et=Dt:at.sibling=Dt,at=Dt);return n&&ot.forEach(function(e_){return i(ee,e_)}),Kt&&Kr(ee,ht),et}function sn(ee,Y,re,Te){if(typeof re=="object"&&re!==null&&re.type===R&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case D:e:{for(var et=re.key,at=Y;at!==null;){if(at.key===et){if(et=re.type,et===R){if(at.tag===7){a(ee,at.sibling),Y=h(at,re.props.children),Y.return=ee,ee=Y;break e}}else if(at.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===ue&&sp(et)===at.type){a(ee,at.sibling),Y=h(at,re.props),Y.ref=Ba(ee,at,re),Y.return=ee,ee=Y;break e}a(ee,at);break}else i(ee,at);at=at.sibling}re.type===R?(Y=rs(re.props.children,ee.mode,Te,re.key),Y.return=ee,ee=Y):(Te=vl(re.type,re.key,re.props,null,ee.mode,Te),Te.ref=Ba(ee,Y,re),Te.return=ee,ee=Te)}return b(ee);case N:e:{for(at=re.key;Y!==null;){if(Y.key===at)if(Y.tag===4&&Y.stateNode.containerInfo===re.containerInfo&&Y.stateNode.implementation===re.implementation){a(ee,Y.sibling),Y=h(Y,re.children||[]),Y.return=ee,ee=Y;break e}else{a(ee,Y);break}else i(ee,Y);Y=Y.sibling}Y=Zc(re,ee.mode,Te),Y.return=ee,ee=Y}return b(ee);case ue:return at=re._init,sn(ee,Y,at(re._payload),Te)}if(ct(re))return je(ee,Y,re,Te);if(ae(re))return Ze(ee,Y,re,Te);Yo(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,Y!==null&&Y.tag===6?(a(ee,Y.sibling),Y=h(Y,re),Y.return=ee,ee=Y):(a(ee,Y),Y=Kc(re,ee.mode,Te),Y.return=ee,ee=Y),b(ee)):a(ee,Y)}return sn}var Ds=ap(!0),op=ap(!1),jo=_r(null),$o=null,Is=null,ac=null;function oc(){ac=Is=$o=null}function lc(n){var i=jo.current;Yt(jo),n._currentValue=i}function uc(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Us(n,i){$o=n,ac=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Xn=!0),n.firstContext=null)}function fi(n){var i=n._currentValue;if(ac!==n)if(n={context:n,memoizedValue:i,next:null},Is===null){if($o===null)throw Error(t(308));Is=n,$o.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return i}var Zr=null;function cc(n){Zr===null?Zr=[n]:Zr.push(n)}function lp(n,i,a,u){var h=i.interleaved;return h===null?(a.next=a,cc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Ji(n,u)}function Ji(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Sr=!1;function fc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function er(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Mr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Lt&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,Ji(n,a)}return h=u.interleaved,h===null?(i.next=i,cc(u)):(i.next=h.next,h.next=i),u.interleaved=i,Ji(n,a)}function Ko(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Hn(n,a)}}function cp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Zo(n,i,a,u){var h=n.updateQueue;Sr=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,F=h.shared.pending;if(F!==null){h.shared.pending=null;var H=F,he=H.next;H.next=null,b===null?m=he:b.next=he,b=H;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,F=Me.lastBaseUpdate,F!==b&&(F===null?Me.firstBaseUpdate=he:F.next=he,Me.lastBaseUpdate=H))}if(m!==null){var we=h.baseState;b=0,Me=he=H=null,F=m;do{var Se=F.lane,He=F.eventTime;if((u&Se)===Se){Me!==null&&(Me=Me.next={eventTime:He,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var je=n,Ze=F;switch(Se=i,He=a,Ze.tag){case 1:if(je=Ze.payload,typeof je=="function"){we=je.call(He,we,Se);break e}we=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ze.payload,Se=typeof je=="function"?je.call(He,we,Se):je,Se==null)break e;we=fe({},we,Se);break e;case 2:Sr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,Se=h.effects,Se===null?h.effects=[F]:Se.push(F))}else He={eventTime:He,lane:Se,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Me===null?(he=Me=He,H=we):Me=Me.next=He,b|=Se;if(F=F.next,F===null){if(F=h.shared.pending,F===null)break;Se=F,F=Se.next,Se.next=null,h.lastBaseUpdate=Se,h.shared.pending=null}}while(!0);if(Me===null&&(H=we),h.baseState=H,h.firstBaseUpdate=he,h.lastBaseUpdate=Me,i=h.shared.interleaved,i!==null){h=i;do b|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);es|=b,n.lanes=b,n.memoizedState=we}}function fp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Va={},Ui=_r(Va),Ha=_r(Va),Ga=_r(Va);function Qr(n){if(n===Va)throw Error(t(174));return n}function hc(n,i){switch(Gt(Ga,i),Gt(Ha,n),Gt(Ui,Va),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Yt(Ui),Gt(Ui,i)}function Fs(){Yt(Ui),Yt(Ha),Yt(Ga)}function hp(n){Qr(Ga.current);var i=Qr(Ui.current),a=E(i,n.type);i!==a&&(Gt(Ha,n),Gt(Ui,a))}function dc(n){Ha.current===n&&(Yt(Ui),Yt(Ha))}var en=_r(0);function Qo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pc=[];function mc(){for(var n=0;n<pc.length;n++)pc[n]._workInProgressVersionPrimary=null;pc.length=0}var Jo=C.ReactCurrentDispatcher,gc=C.ReactCurrentBatchConfig,Jr=0,tn=null,cn=null,pn=null,el=!1,Wa=!1,Xa=0,Mv=0;function wn(){throw Error(t(321))}function vc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Si(n[a],i[a]))return!1;return!0}function _c(n,i,a,u,h,m){if(Jr=m,tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Jo.current=n===null||n.memoizedState===null?bv:Av,n=a(u,h),Wa){m=0;do{if(Wa=!1,Xa=0,25<=m)throw Error(t(301));m+=1,pn=cn=null,i.updateQueue=null,Jo.current=Rv,n=a(u,h)}while(Wa)}if(Jo.current=il,i=cn!==null&&cn.next!==null,Jr=0,pn=cn=tn=null,el=!1,i)throw Error(t(300));return n}function xc(){var n=Xa!==0;return Xa=0,n}function Fi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?tn.memoizedState=pn=n:pn=pn.next=n,pn}function hi(){if(cn===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var i=pn===null?tn.memoizedState:pn.next;if(i!==null)pn=i,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},pn===null?tn.memoizedState=pn=n:pn=pn.next=n}return pn}function qa(n,i){return typeof i=="function"?i(n):i}function yc(n){var i=hi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=cn,h=u.baseQueue,m=a.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}u.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,u=u.baseState;var F=b=null,H=null,he=m;do{var Me=he.lane;if((Jr&Me)===Me)H!==null&&(H=H.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),u=he.hasEagerState?he.eagerState:n(u,he.action);else{var we={lane:Me,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};H===null?(F=H=we,b=u):H=H.next=we,tn.lanes|=Me,es|=Me}he=he.next}while(he!==null&&he!==m);H===null?b=u:H.next=F,Si(u,i.memoizedState)||(Xn=!0),i.memoizedState=u,i.baseState=b,i.baseQueue=H,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do m=h.lane,tn.lanes|=m,es|=m,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Sc(n){var i=hi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var b=h=h.next;do m=n(m,b.action),b=b.next;while(b!==h);Si(m,i.memoizedState)||(Xn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function dp(){}function pp(n,i){var a=tn,u=hi(),h=i(),m=!Si(u.memoizedState,h);if(m&&(u.memoizedState=h,Xn=!0),u=u.queue,Mc(vp.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,Ya(9,gp.bind(null,a,u,h,i),void 0,null),mn===null)throw Error(t(349));(Jr&30)!==0||mp(a,i,h)}return h}function mp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function gp(n,i,a,u){i.value=a,i.getSnapshot=u,_p(i)&&xp(n)}function vp(n,i,a){return a(function(){_p(i)&&xp(n)})}function _p(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Si(n,a)}catch{return!0}}function xp(n){var i=Ji(n,1);i!==null&&bi(i,n,1,-1)}function yp(n){var i=Fi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},i.queue=n,n=n.dispatch=Tv.bind(null,tn,n),[i.memoizedState,n]}function Ya(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Sp(){return hi().memoizedState}function tl(n,i,a,u){var h=Fi();tn.flags|=n,h.memoizedState=Ya(1|i,a,void 0,u===void 0?null:u)}function nl(n,i,a,u){var h=hi();u=u===void 0?null:u;var m=void 0;if(cn!==null){var b=cn.memoizedState;if(m=b.destroy,u!==null&&vc(u,b.deps)){h.memoizedState=Ya(i,a,m,u);return}}tn.flags|=n,h.memoizedState=Ya(1|i,a,m,u)}function Mp(n,i){return tl(8390656,8,n,i)}function Mc(n,i){return nl(2048,8,n,i)}function Ep(n,i){return nl(4,2,n,i)}function wp(n,i){return nl(4,4,n,i)}function Tp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function bp(n,i,a){return a=a!=null?a.concat([n]):null,nl(4,4,Tp.bind(null,i,n),a)}function Ec(){}function Ap(n,i){var a=hi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&vc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Rp(n,i){var a=hi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&vc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Cp(n,i,a){return(Jr&21)===0?(n.baseState&&(n.baseState=!1,Xn=!0),n.memoizedState=a):(Si(a,i)||(a=Ve(),tn.lanes|=a,es|=a,n.baseState=!0),i)}function Ev(n,i){var a=St;St=a!==0&&4>a?a:4,n(!0);var u=gc.transition;gc.transition={};try{n(!1),i()}finally{St=a,gc.transition=u}}function Pp(){return hi().memoizedState}function wv(n,i,a){var u=br(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Np(n))Lp(i,a);else if(a=lp(n,i,a,u),a!==null){var h=Fn();bi(a,n,u,h),Dp(a,i,u)}}function Tv(n,i,a){var u=br(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(n))Lp(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,F=m(b,a);if(h.hasEagerState=!0,h.eagerState=F,Si(F,b)){var H=i.interleaved;H===null?(h.next=h,cc(i)):(h.next=H.next,H.next=h),i.interleaved=h;return}}catch{}finally{}a=lp(n,i,h,u),a!==null&&(h=Fn(),bi(a,n,u,h),Dp(a,i,u))}}function Np(n){var i=n.alternate;return n===tn||i!==null&&i===tn}function Lp(n,i){Wa=el=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Dp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Hn(n,a)}}var il={readContext:fi,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},bv={readContext:fi,useCallback:function(n,i){return Fi().memoizedState=[n,i===void 0?null:i],n},useContext:fi,useEffect:Mp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,tl(4194308,4,Tp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return tl(4194308,4,n,i)},useInsertionEffect:function(n,i){return tl(4,2,n,i)},useMemo:function(n,i){var a=Fi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Fi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=wv.bind(null,tn,n),[u.memoizedState,n]},useRef:function(n){var i=Fi();return n={current:n},i.memoizedState=n},useState:yp,useDebugValue:Ec,useDeferredValue:function(n){return Fi().memoizedState=n},useTransition:function(){var n=yp(!1),i=n[0];return n=Ev.bind(null,n[1]),Fi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=tn,h=Fi();if(Kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),mn===null)throw Error(t(349));(Jr&30)!==0||mp(u,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,Mp(vp.bind(null,u,m,n),[n]),u.flags|=2048,Ya(9,gp.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=Fi(),i=mn.identifierPrefix;if(Kt){var a=Qi,u=Zi;a=(u&~(1<<32-Ae(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Xa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Mv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Av={readContext:fi,useCallback:Ap,useContext:fi,useEffect:Mc,useImperativeHandle:bp,useInsertionEffect:Ep,useLayoutEffect:wp,useMemo:Rp,useReducer:yc,useRef:Sp,useState:function(){return yc(qa)},useDebugValue:Ec,useDeferredValue:function(n){var i=hi();return Cp(i,cn.memoizedState,n)},useTransition:function(){var n=yc(qa)[0],i=hi().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:pp,useId:Pp,unstable_isNewReconciler:!1},Rv={readContext:fi,useCallback:Ap,useContext:fi,useEffect:Mc,useImperativeHandle:bp,useInsertionEffect:Ep,useLayoutEffect:wp,useMemo:Rp,useReducer:Sc,useRef:Sp,useState:function(){return Sc(qa)},useDebugValue:Ec,useDeferredValue:function(n){var i=hi();return cn===null?i.memoizedState=n:Cp(i,cn.memoizedState,n)},useTransition:function(){var n=Sc(qa)[0],i=hi().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:pp,useId:Pp,unstable_isNewReconciler:!1};function Ei(n,i){if(n&&n.defaultProps){i=fe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function wc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:fe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var rl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Fn(),h=br(n),m=er(u,h);m.payload=i,a!=null&&(m.callback=a),i=Mr(n,m,h),i!==null&&(bi(i,n,h,u),Ko(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Fn(),h=br(n),m=er(u,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Mr(n,m,h),i!==null&&(bi(i,n,h,u),Ko(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Fn(),u=br(n),h=er(a,u);h.tag=2,i!=null&&(h.callback=i),i=Mr(n,h,u),i!==null&&(bi(i,n,u,a),Ko(i,n,u))}};function Ip(n,i,a,u,h,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,b):i.prototype&&i.prototype.isPureReactComponent?!Da(a,u)||!Da(h,m):!0}function Up(n,i,a){var u=!1,h=xr,m=i.contextType;return typeof m=="object"&&m!==null?m=fi(m):(h=Wn(i)?jr:En.current,u=i.contextTypes,m=(u=u!=null)?Cs(n,h):xr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function Fp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&rl.enqueueReplaceState(i,i.state,null)}function Tc(n,i,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},fc(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=fi(m):(m=Wn(i)?jr:En.current,h.context=Cs(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(wc(n,i,m,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&rl.enqueueReplaceState(h,h.state,null),Zo(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Os(n,i){try{var a="",u=i;do a+=Be(u),u=u.return;while(u);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function bc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ac(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Cv=typeof WeakMap=="function"?WeakMap:Map;function Op(n,i,a){a=er(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){fl||(fl=!0,Hc=u),Ac(n,i)},a}function kp(n,i,a){a=er(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){Ac(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Ac(n,i),typeof u!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function zp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Cv;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),n=Gv.bind(null,n,i,a),i.then(n,n))}function Bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Vp(n,i,a,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=er(-1,1),i.tag=2,Mr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Pv=C.ReactCurrentOwner,Xn=!1;function Un(n,i,a,u){i.child=n===null?op(i,null,a,u):Ds(i,n.child,a,u)}function Hp(n,i,a,u,h){a=a.render;var m=i.ref;return Us(i,h),u=_c(n,i,a,u,m,h),a=xc(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,tr(n,i,h)):(Kt&&a&&tc(i),i.flags|=1,Un(n,i,u,h),i.child)}function Gp(n,i,a,u,h){if(n===null){var m=a.type;return typeof m=="function"&&!$c(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Wp(n,i,m,u,h)):(n=vl(a.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&h)===0){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:Da,a(b,u)&&n.ref===i.ref)return tr(n,i,h)}return i.flags|=1,n=Rr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Wp(n,i,a,u,h){if(n!==null){var m=n.memoizedProps;if(Da(m,u)&&n.ref===i.ref)if(Xn=!1,i.pendingProps=u=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Xn=!0);else return i.lanes=n.lanes,tr(n,i,h)}return Rc(n,i,a,u,h)}function Xp(n,i,a){var u=i.pendingProps,h=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(zs,ei),ei|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(zs,ei),ei|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,Gt(zs,ei),ei|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,Gt(zs,ei),ei|=u;return Un(n,i,h,a),i.child}function qp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Rc(n,i,a,u,h){var m=Wn(a)?jr:En.current;return m=Cs(i,m),Us(i,h),a=_c(n,i,a,u,m,h),u=xc(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,tr(n,i,h)):(Kt&&u&&tc(i),i.flags|=1,Un(n,i,a,h),i.child)}function Yp(n,i,a,u,h){if(Wn(a)){var m=!0;Ho(i)}else m=!1;if(Us(i,h),i.stateNode===null)al(n,i),Up(i,a,u),Tc(i,a,u,h),u=!0;else if(n===null){var b=i.stateNode,F=i.memoizedProps;b.props=F;var H=b.context,he=a.contextType;typeof he=="object"&&he!==null?he=fi(he):(he=Wn(a)?jr:En.current,he=Cs(i,he));var Me=a.getDerivedStateFromProps,we=typeof Me=="function"||typeof b.getSnapshotBeforeUpdate=="function";we||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(F!==u||H!==he)&&Fp(i,b,u,he),Sr=!1;var Se=i.memoizedState;b.state=Se,Zo(i,u,b,h),H=i.memoizedState,F!==u||Se!==H||Gn.current||Sr?(typeof Me=="function"&&(wc(i,a,Me,u),H=i.memoizedState),(F=Sr||Ip(i,a,F,u,Se,H,he))?(we||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=H),b.props=u,b.state=H,b.context=he,u=F):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{b=i.stateNode,up(n,i),F=i.memoizedProps,he=i.type===i.elementType?F:Ei(i.type,F),b.props=he,we=i.pendingProps,Se=b.context,H=a.contextType,typeof H=="object"&&H!==null?H=fi(H):(H=Wn(a)?jr:En.current,H=Cs(i,H));var He=a.getDerivedStateFromProps;(Me=typeof He=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(F!==we||Se!==H)&&Fp(i,b,u,H),Sr=!1,Se=i.memoizedState,b.state=Se,Zo(i,u,b,h);var je=i.memoizedState;F!==we||Se!==je||Gn.current||Sr?(typeof He=="function"&&(wc(i,a,He,u),je=i.memoizedState),(he=Sr||Ip(i,a,he,u,Se,je,H)||!1)?(Me||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,je,H),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,je,H)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=je),b.props=u,b.state=je,b.context=H,u=he):(typeof b.componentDidUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),u=!1)}return Cc(n,i,a,u,m,h)}function Cc(n,i,a,u,h,m){qp(n,i);var b=(i.flags&128)!==0;if(!u&&!b)return h&&Qd(i,a,!1),tr(n,i,m);u=i.stateNode,Pv.current=i;var F=b&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&b?(i.child=Ds(i,n.child,null,m),i.child=Ds(i,null,F,m)):Un(n,i,F,m),i.memoizedState=u.state,h&&Qd(i,a,!0),i.child}function jp(n){var i=n.stateNode;i.pendingContext?Kd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Kd(n,i.context,!1),hc(n,i.containerInfo)}function $p(n,i,a,u,h){return Ls(),sc(h),i.flags|=256,Un(n,i,a,u),i.child}var Pc={dehydrated:null,treeContext:null,retryLane:0};function Nc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kp(n,i,a){var u=i.pendingProps,h=en.current,m=!1,b=(i.flags&128)!==0,F;if((F=b)||(F=n!==null&&n.memoizedState===null?!1:(h&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Gt(en,h&1),n===null)return rc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=u.children,n=u.fallback,m?(u=i.mode,m=i.child,b={mode:"hidden",children:b},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=_l(b,u,0,null),n=rs(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Nc(a),i.memoizedState=Pc,n):Lc(i,b));if(h=n.memoizedState,h!==null&&(F=h.dehydrated,F!==null))return Nv(n,i,b,u,F,h,a);if(m){m=u.fallback,b=i.mode,h=n.child,F=h.sibling;var H={mode:"hidden",children:u.children};return(b&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=H,i.deletions=null):(u=Rr(h,H),u.subtreeFlags=h.subtreeFlags&14680064),F!==null?m=Rr(F,m):(m=rs(m,b,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,b=n.child.memoizedState,b=b===null?Nc(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=n.childLanes&~a,i.memoizedState=Pc,u}return m=n.child,n=m.sibling,u=Rr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Lc(n,i){return i=_l({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function sl(n,i,a,u){return u!==null&&sc(u),Ds(i,n.child,null,a),n=Lc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Nv(n,i,a,u,h,m,b){if(a)return i.flags&256?(i.flags&=-257,u=bc(Error(t(422))),sl(n,i,b,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,h=i.mode,u=_l({mode:"visible",children:u.children},h,0,null),m=rs(m,h,b,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Ds(i,n.child,null,b),i.child.memoizedState=Nc(b),i.memoizedState=Pc,m);if((i.mode&1)===0)return sl(n,i,b,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var F=u.dgst;return u=F,m=Error(t(419)),u=bc(m,u,void 0),sl(n,i,b,u)}if(F=(b&n.childLanes)!==0,Xn||F){if(u=mn,u!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|b))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Ji(n,h),bi(u,n,h,-1))}return jc(),u=bc(Error(t(421))),sl(n,i,b,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Wv.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,Jn=vr(h.nextSibling),Qn=i,Kt=!0,Mi=null,n!==null&&(ui[ci++]=Zi,ui[ci++]=Qi,ui[ci++]=$r,Zi=n.id,Qi=n.overflow,$r=i),i=Lc(i,u.children),i.flags|=4096,i)}function Zp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),uc(n.return,i,a)}function Dc(n,i,a,u,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=h)}function Qp(n,i,a){var u=i.pendingProps,h=u.revealOrder,m=u.tail;if(Un(n,i,u.children,a),u=en.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Zp(n,a,i);else if(n.tag===19)Zp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Gt(en,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Qo(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Dc(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Qo(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Dc(i,!0,a,null,m);break;case"together":Dc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function al(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function tr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),es|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Rr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Rr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Lv(n,i,a){switch(i.tag){case 3:jp(i),Ls();break;case 5:hp(i);break;case 1:Wn(i.type)&&Ho(i);break;case 4:hc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Gt(jo,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Gt(en,en.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Kp(n,i,a):(Gt(en,en.current&1),n=tr(n,i,a),n!==null?n.sibling:null);Gt(en,en.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Qp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Gt(en,en.current),u)break;return null;case 22:case 23:return i.lanes=0,Xp(n,i,a)}return tr(n,i,a)}var Jp,Ic,em,tm;Jp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ic=function(){},em=function(n,i,a,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,Qr(Ui.current);var m=null;switch(a){case"input":h=vt(n,h),u=vt(n,u),m=[];break;case"select":h=fe({},h,{value:void 0}),u=fe({},u,{value:void 0}),m=[];break;case"textarea":h=Ct(n,h),u=Ct(n,u),m=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=zo)}Qe(a,u);var b;a=null;for(he in h)if(!u.hasOwnProperty(he)&&h.hasOwnProperty(he)&&h[he]!=null)if(he==="style"){var F=h[he];for(b in F)F.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(o.hasOwnProperty(he)?m||(m=[]):(m=m||[]).push(he,null));for(he in u){var H=u[he];if(F=h!=null?h[he]:void 0,u.hasOwnProperty(he)&&H!==F&&(H!=null||F!=null))if(he==="style")if(F){for(b in F)!F.hasOwnProperty(b)||H&&H.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in H)H.hasOwnProperty(b)&&F[b]!==H[b]&&(a||(a={}),a[b]=H[b])}else a||(m||(m=[]),m.push(he,a)),a=H;else he==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(m=m||[]).push(he,H)):he==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(he,""+H):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(o.hasOwnProperty(he)?(H!=null&&he==="onScroll"&&qt("scroll",n),m||F===H||(m=[])):(m=m||[]).push(he,H))}a&&(m=m||[]).push("style",a);var he=m;(i.updateQueue=he)&&(i.flags|=4)}},tm=function(n,i,a,u){a!==u&&(i.flags|=4)};function ja(n,i){if(!Kt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Dv(n,i,a){var u=i.pendingProps;switch(nc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return Wn(i.type)&&Vo(),Tn(i),null;case 3:return u=i.stateNode,Fs(),Yt(Gn),Yt(En),mc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(qo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mi!==null&&(Xc(Mi),Mi=null))),Ic(n,i),Tn(i),null;case 5:dc(i);var h=Qr(Ga.current);if(a=i.type,n!==null&&i.stateNode!=null)em(n,i,a,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=Qr(Ui.current),qo(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[Ii]=i,u[ka]=m,n=(i.mode&1)!==0,a){case"dialog":qt("cancel",u),qt("close",u);break;case"iframe":case"object":case"embed":qt("load",u);break;case"video":case"audio":for(h=0;h<Ua.length;h++)qt(Ua[h],u);break;case"source":qt("error",u);break;case"img":case"image":case"link":qt("error",u),qt("load",u);break;case"details":qt("toggle",u);break;case"input":lt(u,m),qt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},qt("invalid",u);break;case"textarea":W(u,m),qt("invalid",u)}Qe(a,m),h=null;for(var b in m)if(m.hasOwnProperty(b)){var F=m[b];b==="children"?typeof F=="string"?u.textContent!==F&&(m.suppressHydrationWarning!==!0&&ko(u.textContent,F,n),h=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&ko(u.textContent,F,n),h=["children",""+F]):o.hasOwnProperty(b)&&F!=null&&b==="onScroll"&&qt("scroll",u)}switch(a){case"input":Fe(u),Rt(u,m,!0);break;case"textarea":Fe(u),wt(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=zo)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=b.createElement(a,{is:u.is}):(n=b.createElement(a),a==="select"&&(b=n,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):n=b.createElementNS(n,a),n[Ii]=i,n[ka]=u,Jp(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ue(a,u),a){case"dialog":qt("cancel",n),qt("close",n),h=u;break;case"iframe":case"object":case"embed":qt("load",n),h=u;break;case"video":case"audio":for(h=0;h<Ua.length;h++)qt(Ua[h],n);h=u;break;case"source":qt("error",n),h=u;break;case"img":case"image":case"link":qt("error",n),qt("load",n),h=u;break;case"details":qt("toggle",n),h=u;break;case"input":lt(n,u),h=vt(n,u),qt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=fe({},u,{value:void 0}),qt("invalid",n);break;case"textarea":W(n,u),h=Ct(n,u),qt("invalid",n);break;default:h=u}Qe(a,h),F=h;for(m in F)if(F.hasOwnProperty(m)){var H=F[m];m==="style"?ge(n,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&se(n,H)):m==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&de(n,H):typeof H=="number"&&de(n,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?H!=null&&m==="onScroll"&&qt("scroll",n):H!=null&&O(n,m,H,b))}switch(a){case"input":Fe(n),Rt(n,u,!1);break;case"textarea":Fe(n),wt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+G(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?Le(n,!!u.multiple,m,!1):u.defaultValue!=null&&Le(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=zo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)tm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Qr(Ga.current),Qr(Ui.current),qo(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ii]=i,(m=u.nodeValue!==a)&&(n=Qn,n!==null))switch(n.tag){case 3:ko(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ko(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ii]=i,i.stateNode=u}return Tn(i),null;case 13:if(Yt(en),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Kt&&Jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)rp(),Ls(),i.flags|=98560,m=!1;else if(m=qo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ii]=i}else Ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),m=!1}else Mi!==null&&(Xc(Mi),Mi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(en.current&1)!==0?fn===0&&(fn=3):jc())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Fs(),Ic(n,i),n===null&&Fa(i.stateNode.containerInfo),Tn(i),null;case 10:return lc(i.type._context),Tn(i),null;case 17:return Wn(i.type)&&Vo(),Tn(i),null;case 19:if(Yt(en),m=i.memoizedState,m===null)return Tn(i),null;if(u=(i.flags&128)!==0,b=m.rendering,b===null)if(u)ja(m,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=Qo(n),b!==null){for(i.flags|=128,ja(m,!1),u=b.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,n=b.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Gt(en,en.current&1|2),i.child}n=n.sibling}m.tail!==null&&Jt()>Bs&&(i.flags|=128,u=!0,ja(m,!1),i.lanes=4194304)}else{if(!u)if(n=Qo(b),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ja(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!Kt)return Tn(i),null}else 2*Jt()-m.renderingStartTime>Bs&&a!==1073741824&&(i.flags|=128,u=!0,ja(m,!1),i.lanes=4194304);m.isBackwards?(b.sibling=i.child,i.child=b):(a=m.last,a!==null?a.sibling=b:i.child=b,m.last=b)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Jt(),i.sibling=null,a=en.current,Gt(en,u?a&1|2:a&1),i):(Tn(i),null);case 22:case 23:return Yc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ei&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Iv(n,i){switch(nc(i),i.tag){case 1:return Wn(i.type)&&Vo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Fs(),Yt(Gn),Yt(En),mc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return dc(i),null;case 13:if(Yt(en),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ls()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Yt(en),null;case 4:return Fs(),null;case 10:return lc(i.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var ol=!1,bn=!1,Uv=typeof WeakSet=="function"?WeakSet:Set,qe=null;function ks(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){rn(n,i,u)}else a.current=null}function Uc(n,i,a){try{a()}catch(u){rn(n,i,u)}}var nm=!1;function Fv(n,i){if(Yu=Ao,n=Id(),zu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,F=-1,H=-1,he=0,Me=0,we=n,Se=null;t:for(;;){for(var He;we!==a||h!==0&&we.nodeType!==3||(F=b+h),we!==m||u!==0&&we.nodeType!==3||(H=b+u),we.nodeType===3&&(b+=we.nodeValue.length),(He=we.firstChild)!==null;)Se=we,we=He;for(;;){if(we===n)break t;if(Se===a&&++he===h&&(F=b),Se===m&&++Me===u&&(H=b),(He=we.nextSibling)!==null)break;we=Se,Se=we.parentNode}we=He}a=F===-1||H===-1?null:{start:F,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ju={focusedElem:n,selectionRange:a},Ao=!1,qe=i;qe!==null;)if(i=qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,qe=n;else for(;qe!==null;){i=qe;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ze=je.memoizedProps,sn=je.memoizedState,ee=i.stateNode,Y=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:Ei(i.type,Ze),sn);ee.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){rn(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,qe=n;break}qe=i.return}return je=nm,nm=!1,je}function $a(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&Uc(i,a,m)}h=h.next}while(h!==u)}}function ll(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Fc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function im(n){var i=n.alternate;i!==null&&(n.alternate=null,im(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ii],delete i[ka],delete i[Qu],delete i[_v],delete i[xv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rm(n){return n.tag===5||n.tag===3||n.tag===4}function sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Oc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=zo));else if(u!==4&&(n=n.child,n!==null))for(Oc(n,i,a),n=n.sibling;n!==null;)Oc(n,i,a),n=n.sibling}function kc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(kc(n,i,a),n=n.sibling;n!==null;)kc(n,i,a),n=n.sibling}var xn=null,wi=!1;function Er(n,i,a){for(a=a.child;a!==null;)am(n,i,a),a=a.sibling}function am(n,i,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 5:bn||ks(a,i);case 6:var u=xn,h=wi;xn=null,Er(n,i,a),xn=u,wi=h,xn!==null&&(wi?(n=xn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):xn.removeChild(a.stateNode));break;case 18:xn!==null&&(wi?(n=xn,a=a.stateNode,n.nodeType===8?Zu(n.parentNode,a):n.nodeType===1&&Zu(n,a),Aa(n)):Zu(xn,a.stateNode));break;case 4:u=xn,h=wi,xn=a.stateNode.containerInfo,wi=!0,Er(n,i,a),xn=u,wi=h;break;case 0:case 11:case 14:case 15:if(!bn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var m=h,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&Uc(a,i,b),h=h.next}while(h!==u)}Er(n,i,a);break;case 1:if(!bn&&(ks(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(F){rn(a,i,F)}Er(n,i,a);break;case 21:Er(n,i,a);break;case 22:a.mode&1?(bn=(u=bn)||a.memoizedState!==null,Er(n,i,a),bn=u):Er(n,i,a);break;default:Er(n,i,a)}}function om(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Uv),i.forEach(function(u){var h=Xv.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function Ti(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var m=n,b=i,F=b;e:for(;F!==null;){switch(F.tag){case 5:xn=F.stateNode,wi=!1;break e;case 3:xn=F.stateNode.containerInfo,wi=!0;break e;case 4:xn=F.stateNode.containerInfo,wi=!0;break e}F=F.return}if(xn===null)throw Error(t(160));am(m,b,h),xn=null,wi=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(he){rn(h,i,he)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)lm(i,n),i=i.sibling}function lm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ti(i,n),Oi(n),u&4){try{$a(3,n,n.return),ll(3,n)}catch(Ze){rn(n,n.return,Ze)}try{$a(5,n,n.return)}catch(Ze){rn(n,n.return,Ze)}}break;case 1:Ti(i,n),Oi(n),u&512&&a!==null&&ks(a,a.return);break;case 5:if(Ti(i,n),Oi(n),u&512&&a!==null&&ks(a,a.return),n.flags&32){var h=n.stateNode;try{de(h,"")}catch(Ze){rn(n,n.return,Ze)}}if(u&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,b=a!==null?a.memoizedProps:m,F=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&Ge(h,m),Ue(F,b);var he=Ue(F,m);for(b=0;b<H.length;b+=2){var Me=H[b],we=H[b+1];Me==="style"?ge(h,we):Me==="dangerouslySetInnerHTML"?se(h,we):Me==="children"?de(h,we):O(h,Me,we,he)}switch(F){case"input":It(h,m);break;case"textarea":Wt(h,m);break;case"select":var Se=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var He=m.value;He!=null?Le(h,!!m.multiple,He,!1):Se!==!!m.multiple&&(m.defaultValue!=null?Le(h,!!m.multiple,m.defaultValue,!0):Le(h,!!m.multiple,m.multiple?[]:"",!1))}h[ka]=m}catch(Ze){rn(n,n.return,Ze)}}break;case 6:if(Ti(i,n),Oi(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(Ze){rn(n,n.return,Ze)}}break;case 3:if(Ti(i,n),Oi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Aa(i.containerInfo)}catch(Ze){rn(n,n.return,Ze)}break;case 4:Ti(i,n),Oi(n);break;case 13:Ti(i,n),Oi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(Vc=Jt())),u&4&&om(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(bn=(he=bn)||Me,Ti(i,n),bn=he):Ti(i,n),Oi(n),u&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Me&&(n.mode&1)!==0)for(qe=n,Me=n.child;Me!==null;){for(we=qe=Me;qe!==null;){switch(Se=qe,He=Se.child,Se.tag){case 0:case 11:case 14:case 15:$a(4,Se,Se.return);break;case 1:ks(Se,Se.return);var je=Se.stateNode;if(typeof je.componentWillUnmount=="function"){u=Se,a=Se.return;try{i=u,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ze){rn(u,a,Ze)}}break;case 5:ks(Se,Se.return);break;case 22:if(Se.memoizedState!==null){fm(we);continue}}He!==null?(He.return=Se,qe=He):fm(we)}Me=Me.sibling}e:for(Me=null,we=n;;){if(we.tag===5){if(Me===null){Me=we;try{h=we.stateNode,he?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=we.stateNode,H=we.memoizedProps.style,b=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=pe("display",b))}catch(Ze){rn(n,n.return,Ze)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=he?"":we.memoizedProps}catch(Ze){rn(n,n.return,Ze)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Ti(i,n),Oi(n),u&4&&om(n);break;case 21:break;default:Ti(i,n),Oi(n)}}function Oi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(rm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(de(h,""),u.flags&=-33);var m=sm(n);kc(n,m,h);break;case 3:case 4:var b=u.stateNode.containerInfo,F=sm(n);Oc(n,F,b);break;default:throw Error(t(161))}}catch(H){rn(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ov(n,i,a){qe=n,um(n)}function um(n,i,a){for(var u=(n.mode&1)!==0;qe!==null;){var h=qe,m=h.child;if(h.tag===22&&u){var b=h.memoizedState!==null||ol;if(!b){var F=h.alternate,H=F!==null&&F.memoizedState!==null||bn;F=ol;var he=bn;if(ol=b,(bn=H)&&!he)for(qe=h;qe!==null;)b=qe,H=b.child,b.tag===22&&b.memoizedState!==null?hm(h):H!==null?(H.return=b,qe=H):hm(h);for(;m!==null;)qe=m,um(m),m=m.sibling;qe=h,ol=F,bn=he}cm(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,qe=m):cm(n)}}function cm(n){for(;qe!==null;){var i=qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bn||ll(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!bn)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ei(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&fp(i,m,u);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}fp(i,b,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var he=i.alternate;if(he!==null){var Me=he.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&Aa(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||i.flags&512&&Fc(i)}catch(Se){rn(i,i.return,Se)}}if(i===n){qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,qe=a;break}qe=i.return}}function fm(n){for(;qe!==null;){var i=qe;if(i===n){qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,qe=a;break}qe=i.return}}function hm(n){for(;qe!==null;){var i=qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ll(4,i)}catch(H){rn(i,a,H)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(H){rn(i,h,H)}}var m=i.return;try{Fc(i)}catch(H){rn(i,m,H)}break;case 5:var b=i.return;try{Fc(i)}catch(H){rn(i,b,H)}}}catch(H){rn(i,i.return,H)}if(i===n){qe=null;break}var F=i.sibling;if(F!==null){F.return=i.return,qe=F;break}qe=i.return}}var kv=Math.ceil,ul=C.ReactCurrentDispatcher,zc=C.ReactCurrentOwner,di=C.ReactCurrentBatchConfig,Lt=0,mn=null,on=null,yn=0,ei=0,zs=_r(0),fn=0,Ka=null,es=0,cl=0,Bc=0,Za=null,qn=null,Vc=0,Bs=1/0,nr=null,fl=!1,Hc=null,wr=null,hl=!1,Tr=null,dl=0,Qa=0,Gc=null,pl=-1,ml=0;function Fn(){return(Lt&6)!==0?Jt():pl!==-1?pl:pl=Jt()}function br(n){return(n.mode&1)===0?1:(Lt&2)!==0&&yn!==0?yn&-yn:Sv.transition!==null?(ml===0&&(ml=Ve()),ml):(n=St,n!==0||(n=window.event,n=n===void 0?16:pd(n.type)),n)}function bi(n,i,a,u){if(50<Qa)throw Qa=0,Gc=null,Error(t(185));xt(n,a,u),((Lt&2)===0||n!==mn)&&(n===mn&&((Lt&2)===0&&(cl|=a),fn===4&&Ar(n,yn)),Yn(n,u),a===1&&Lt===0&&(i.mode&1)===0&&(Bs=Jt()+500,Go&&yr()))}function Yn(n,i){var a=n.callbackNode;kt(n,i);var u=Ht(n,n===mn?yn:0);if(u===0)a!==null&&Sa(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Sa(a),i===1)n.tag===0?yv(pm.bind(null,n)):Jd(pm.bind(null,n)),gv(function(){(Lt&6)===0&&yr()}),a=null;else{switch(ji(u)){case 1:a=Ma;break;case 4:a=A;break;case 16:a=Z;break;case 536870912:a=ie;break;default:a=Z}a=Mm(a,dm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function dm(n,i){if(pl=-1,ml=0,(Lt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Vs()&&n.callbackNode!==a)return null;var u=Ht(n,n===mn?yn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=gl(n,u);else{i=u;var h=Lt;Lt|=2;var m=gm();(mn!==n||yn!==i)&&(nr=null,Bs=Jt()+500,ns(n,i));do try{Vv();break}catch(F){mm(n,F)}while(!0);oc(),ul.current=m,Lt=h,on!==null?i=0:(mn=null,yn=0,i=fn)}if(i!==0){if(i===2&&(h=an(n),h!==0&&(u=h,i=Wc(n,h))),i===1)throw a=Ka,ns(n,0),Ar(n,u),Yn(n,Jt()),a;if(i===6)Ar(n,u);else{if(h=n.current.alternate,(u&30)===0&&!zv(h)&&(i=gl(n,u),i===2&&(m=an(n),m!==0&&(u=m,i=Wc(n,m))),i===1))throw a=Ka,ns(n,0),Ar(n,u),Yn(n,Jt()),a;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:is(n,qn,nr);break;case 3:if(Ar(n,u),(u&130023424)===u&&(i=Vc+500-Jt(),10<i)){if(Ht(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Fn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Ku(is.bind(null,n,qn,nr),i);break}is(n,qn,nr);break;case 4:if(Ar(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var b=31-Ae(u);m=1<<b,b=i[b],b>h&&(h=b),u&=~m}if(u=h,u=Jt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*kv(u/1960))-u,10<u){n.timeoutHandle=Ku(is.bind(null,n,qn,nr),u);break}is(n,qn,nr);break;case 5:is(n,qn,nr);break;default:throw Error(t(329))}}}return Yn(n,Jt()),n.callbackNode===a?dm.bind(null,n):null}function Wc(n,i){var a=Za;return n.current.memoizedState.isDehydrated&&(ns(n,i).flags|=256),n=gl(n,i),n!==2&&(i=qn,qn=a,i!==null&&Xc(i)),n}function Xc(n){qn===null?qn=n:qn.push.apply(qn,n)}function zv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],m=h.getSnapshot;h=h.value;try{if(!Si(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ar(n,i){for(i&=~Bc,i&=~cl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ae(i),u=1<<a;n[a]=-1,i&=~u}}function pm(n){if((Lt&6)!==0)throw Error(t(327));Vs();var i=Ht(n,0);if((i&1)===0)return Yn(n,Jt()),null;var a=gl(n,i);if(n.tag!==0&&a===2){var u=an(n);u!==0&&(i=u,a=Wc(n,u))}if(a===1)throw a=Ka,ns(n,0),Ar(n,i),Yn(n,Jt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,is(n,qn,nr),Yn(n,Jt()),null}function qc(n,i){var a=Lt;Lt|=1;try{return n(i)}finally{Lt=a,Lt===0&&(Bs=Jt()+500,Go&&yr())}}function ts(n){Tr!==null&&Tr.tag===0&&(Lt&6)===0&&Vs();var i=Lt;Lt|=1;var a=di.transition,u=St;try{if(di.transition=null,St=1,n)return n()}finally{St=u,di.transition=a,Lt=i,(Lt&6)===0&&yr()}}function Yc(){ei=zs.current,Yt(zs)}function ns(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,mv(a)),on!==null)for(a=on.return;a!==null;){var u=a;switch(nc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Vo();break;case 3:Fs(),Yt(Gn),Yt(En),mc();break;case 5:dc(u);break;case 4:Fs();break;case 13:Yt(en);break;case 19:Yt(en);break;case 10:lc(u.type._context);break;case 22:case 23:Yc()}a=a.return}if(mn=n,on=n=Rr(n.current,null),yn=ei=i,fn=0,Ka=null,Bc=cl=es=0,qn=Za=null,Zr!==null){for(i=0;i<Zr.length;i++)if(a=Zr[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,m=a.pending;if(m!==null){var b=m.next;m.next=h,u.next=b}a.pending=u}Zr=null}return n}function mm(n,i){do{var a=on;try{if(oc(),Jo.current=il,el){for(var u=tn.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}el=!1}if(Jr=0,pn=cn=tn=null,Wa=!1,Xa=0,zc.current=null,a===null||a.return===null){fn=1,Ka=i,on=null;break}e:{var m=n,b=a.return,F=a,H=i;if(i=yn,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var he=H,Me=F,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var He=Bp(b);if(He!==null){He.flags&=-257,Vp(He,b,F,m,i),He.mode&1&&zp(m,he,i),i=He,H=he;var je=i.updateQueue;if(je===null){var Ze=new Set;Ze.add(H),i.updateQueue=Ze}else je.add(H);break e}else{if((i&1)===0){zp(m,he,i),jc();break e}H=Error(t(426))}}else if(Kt&&F.mode&1){var sn=Bp(b);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Vp(sn,b,F,m,i),sc(Os(H,F));break e}}m=H=Os(H,F),fn!==4&&(fn=2),Za===null?Za=[m]:Za.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=Op(m,H,i);cp(m,ee);break e;case 1:F=H;var Y=m.type,re=m.stateNode;if((m.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(wr===null||!wr.has(re)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=kp(m,F,i);cp(m,Te);break e}}m=m.return}while(m!==null)}_m(a)}catch(et){i=et,on===a&&a!==null&&(on=a=a.return);continue}break}while(!0)}function gm(){var n=ul.current;return ul.current=il,n===null?il:n}function jc(){(fn===0||fn===3||fn===2)&&(fn=4),mn===null||(es&268435455)===0&&(cl&268435455)===0||Ar(mn,yn)}function gl(n,i){var a=Lt;Lt|=2;var u=gm();(mn!==n||yn!==i)&&(nr=null,ns(n,i));do try{Bv();break}catch(h){mm(n,h)}while(!0);if(oc(),Lt=a,ul.current=u,on!==null)throw Error(t(261));return mn=null,yn=0,fn}function Bv(){for(;on!==null;)vm(on)}function Vv(){for(;on!==null&&!To();)vm(on)}function vm(n){var i=Sm(n.alternate,n,ei);n.memoizedProps=n.pendingProps,i===null?_m(n):on=i,zc.current=null}function _m(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Dv(a,i,ei),a!==null){on=a;return}}else{if(a=Iv(a,i),a!==null){a.flags&=32767,on=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,on=null;return}}if(i=i.sibling,i!==null){on=i;return}on=i=n}while(i!==null);fn===0&&(fn=5)}function is(n,i,a){var u=St,h=di.transition;try{di.transition=null,St=1,Hv(n,i,a,u)}finally{di.transition=h,St=u}return null}function Hv(n,i,a,u){do Vs();while(Tr!==null);if((Lt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Vn(n,m),n===mn&&(on=mn=null,yn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||hl||(hl=!0,Mm(Z,function(){return Vs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=di.transition,di.transition=null;var b=St;St=1;var F=Lt;Lt|=4,zc.current=null,Fv(n,a),lm(a,n),lv(ju),Ao=!!Yu,ju=Yu=null,n.current=a,Ov(a),bu(),Lt=F,St=b,di.transition=m}else n.current=a;if(hl&&(hl=!1,Tr=n,dl=h),m=n.pendingLanes,m===0&&(wr=null),Xe(a.stateNode),Yn(n,Jt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(fl)throw fl=!1,n=Hc,Hc=null,n;return(dl&1)!==0&&n.tag!==0&&Vs(),m=n.pendingLanes,(m&1)!==0?n===Gc?Qa++:(Qa=0,Gc=n):Qa=0,yr(),null}function Vs(){if(Tr!==null){var n=ji(dl),i=di.transition,a=St;try{if(di.transition=null,St=16>n?16:n,Tr===null)var u=!1;else{if(n=Tr,Tr=null,dl=0,(Lt&6)!==0)throw Error(t(331));var h=Lt;for(Lt|=4,qe=n.current;qe!==null;){var m=qe,b=m.child;if((qe.flags&16)!==0){var F=m.deletions;if(F!==null){for(var H=0;H<F.length;H++){var he=F[H];for(qe=he;qe!==null;){var Me=qe;switch(Me.tag){case 0:case 11:case 15:$a(8,Me,m)}var we=Me.child;if(we!==null)we.return=Me,qe=we;else for(;qe!==null;){Me=qe;var Se=Me.sibling,He=Me.return;if(im(Me),Me===he){qe=null;break}if(Se!==null){Se.return=He,qe=Se;break}qe=He}}}var je=m.alternate;if(je!==null){var Ze=je.child;if(Ze!==null){je.child=null;do{var sn=Ze.sibling;Ze.sibling=null,Ze=sn}while(Ze!==null)}}qe=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,qe=b;else e:for(;qe!==null;){if(m=qe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:$a(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,qe=ee;break e}qe=m.return}}var Y=n.current;for(qe=Y;qe!==null;){b=qe;var re=b.child;if((b.subtreeFlags&2064)!==0&&re!==null)re.return=b,qe=re;else e:for(b=Y;qe!==null;){if(F=qe,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:ll(9,F)}}catch(et){rn(F,F.return,et)}if(F===b){qe=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,qe=Te;break e}qe=F.return}}if(Lt=h,yr(),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(ne,n)}catch{}u=!0}return u}finally{St=a,di.transition=i}}return!1}function xm(n,i,a){i=Os(a,i),i=Op(n,i,1),n=Mr(n,i,1),i=Fn(),n!==null&&(xt(n,1,i),Yn(n,i))}function rn(n,i,a){if(n.tag===3)xm(n,n,a);else for(;i!==null;){if(i.tag===3){xm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(wr===null||!wr.has(u))){n=Os(a,n),n=kp(i,n,1),i=Mr(i,n,1),n=Fn(),i!==null&&(xt(i,1,n),Yn(i,n));break}}i=i.return}}function Gv(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Fn(),n.pingedLanes|=n.suspendedLanes&a,mn===n&&(yn&a)===a&&(fn===4||fn===3&&(yn&130023424)===yn&&500>Jt()-Vc?ns(n,0):Bc|=a),Yn(n,i)}function ym(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var a=Fn();n=Ji(n,i),n!==null&&(xt(n,i,a),Yn(n,a))}function Wv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),ym(n,a)}function Xv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),ym(n,a)}var Sm;Sm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gn.current)Xn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Xn=!1,Lv(n,i,a);Xn=(n.flags&131072)!==0}else Xn=!1,Kt&&(i.flags&1048576)!==0&&ep(i,Xo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;al(n,i),n=i.pendingProps;var h=Cs(i,En.current);Us(i,a),h=_c(null,i,u,n,h,a);var m=xc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wn(u)?(m=!0,Ho(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,fc(i),h.updater=rl,i.stateNode=h,h._reactInternals=i,Tc(i,u,n,a),i=Cc(null,i,u,!0,m,a)):(i.tag=0,Kt&&m&&tc(i),Un(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(al(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=Yv(u),n=Ei(u,n),h){case 0:i=Rc(null,i,u,n,a);break e;case 1:i=Yp(null,i,u,n,a);break e;case 11:i=Hp(null,i,u,n,a);break e;case 14:i=Gp(null,i,u,Ei(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ei(u,h),Rc(n,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ei(u,h),Yp(n,i,u,h,a);case 3:e:{if(jp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,h=m.element,up(n,i),Zo(i,u,null,a);var b=i.memoizedState;if(u=b.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Os(Error(t(423)),i),i=$p(n,i,u,a,h);break e}else if(u!==h){h=Os(Error(t(424)),i),i=$p(n,i,u,a,h);break e}else for(Jn=vr(i.stateNode.containerInfo.firstChild),Qn=i,Kt=!0,Mi=null,a=op(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ls(),u===h){i=tr(n,i,a);break e}Un(n,i,u,a)}i=i.child}return i;case 5:return hp(i),n===null&&rc(i),u=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,b=h.children,$u(u,h)?b=null:m!==null&&$u(u,m)&&(i.flags|=32),qp(n,i),Un(n,i,b,a),i.child;case 6:return n===null&&rc(i),null;case 13:return Kp(n,i,a);case 4:return hc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ds(i,null,u,a):Un(n,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ei(u,h),Hp(n,i,u,h,a);case 7:return Un(n,i,i.pendingProps,a),i.child;case 8:return Un(n,i,i.pendingProps.children,a),i.child;case 12:return Un(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,m=i.memoizedProps,b=h.value,Gt(jo,u._currentValue),u._currentValue=b,m!==null)if(Si(m.value,b)){if(m.children===h.children&&!Gn.current){i=tr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){b=m.child;for(var H=F.firstContext;H!==null;){if(H.context===u){if(m.tag===1){H=er(-1,a&-a),H.tag=2;var he=m.updateQueue;if(he!==null){he=he.shared;var Me=he.pending;Me===null?H.next=H:(H.next=Me.next,Me.next=H),he.pending=H}}m.lanes|=a,H=m.alternate,H!==null&&(H.lanes|=a),uc(m.return,a,i),F.lanes|=a;break}H=H.next}}else if(m.tag===10)b=m.type===i.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(t(341));b.lanes|=a,F=b.alternate,F!==null&&(F.lanes|=a),uc(b,a,i),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===i){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}Un(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Us(i,a),h=fi(h),u=u(h),i.flags|=1,Un(n,i,u,a),i.child;case 14:return u=i.type,h=Ei(u,i.pendingProps),h=Ei(u.type,h),Gp(n,i,u,h,a);case 15:return Wp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Ei(u,h),al(n,i),i.tag=1,Wn(u)?(n=!0,Ho(i)):n=!1,Us(i,a),Up(i,u,h),Tc(i,u,h,a),Cc(null,i,u,!0,n,a);case 19:return Qp(n,i,a);case 22:return Xp(n,i,a)}throw Error(t(156,i.tag))};function Mm(n,i){return Xr(n,i)}function qv(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(n,i,a,u){return new qv(n,i,a,u)}function $c(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yv(n){if(typeof n=="function")return $c(n)?1:0;if(n!=null){if(n=n.$$typeof,n===B)return 11;if(n===j)return 14}return 2}function Rr(n,i){var a=n.alternate;return a===null?(a=pi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function vl(n,i,a,u,h,m){var b=2;if(u=n,typeof n=="function")$c(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case R:return rs(a.children,h,m,i);case M:b=8,h|=8;break;case P:return n=pi(12,a,i,h|2),n.elementType=P,n.lanes=m,n;case te:return n=pi(13,a,i,h),n.elementType=te,n.lanes=m,n;case le:return n=pi(19,a,i,h),n.elementType=le,n.lanes=m,n;case K:return _l(a,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:b=10;break e;case k:b=9;break e;case B:b=11;break e;case j:b=14;break e;case ue:b=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=pi(b,a,i,h),i.elementType=n,i.type=u,i.lanes=m,i}function rs(n,i,a,u){return n=pi(7,n,u,i),n.lanes=a,n}function _l(n,i,a,u){return n=pi(22,n,u,i),n.elementType=K,n.lanes=a,n.stateNode={isHidden:!1},n}function Kc(n,i,a){return n=pi(6,n,null,i),n.lanes=a,n}function Zc(n,i,a){return i=pi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function jv(n,i,a,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Qc(n,i,a,u,h,m,b,F,H){return n=new jv(n,i,a,F,H),i===1?(i=1,m===!0&&(i|=8)):i=0,m=pi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(m),n}function $v(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Em(n){if(!n)return xr;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wn(a))return Zd(n,a,i)}return i}function wm(n,i,a,u,h,m,b,F,H){return n=Qc(a,u,!0,n,h,m,b,F,H),n.context=Em(null),a=n.current,u=Fn(),h=br(a),m=er(u,h),m.callback=i??null,Mr(a,m,h),n.current.lanes=h,xt(n,h,u),Yn(n,u),n}function xl(n,i,a,u){var h=i.current,m=Fn(),b=br(h);return a=Em(a),i.context===null?i.context=a:i.pendingContext=a,i=er(m,b),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Mr(h,i,b),n!==null&&(bi(n,h,b,m),Ko(n,h,b)),b}function yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Jc(n,i){Tm(n,i),(n=n.alternate)&&Tm(n,i)}function Kv(){return null}var bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ef(n){this._internalRoot=n}Sl.prototype.render=ef.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));xl(n,i,null,null)},Sl.prototype.unmount=ef.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ts(function(){xl(null,n,null,null)}),i[$i]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=zt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<pr.length&&i!==0&&i<pr[a].priority;a++);pr.splice(a,0,n),a===0&&hd(n)}};function tf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Am(){}function Zv(n,i,a,u,h){if(h){if(typeof u=="function"){var m=u;u=function(){var he=yl(b);m.call(he)}}var b=wm(i,u,n,0,null,!1,!1,"",Am);return n._reactRootContainer=b,n[$i]=b.current,Fa(n.nodeType===8?n.parentNode:n),ts(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var F=u;u=function(){var he=yl(H);F.call(he)}}var H=Qc(n,0,!1,null,null,!1,!1,"",Am);return n._reactRootContainer=H,n[$i]=H.current,Fa(n.nodeType===8?n.parentNode:n),ts(function(){xl(i,H,a,u)}),H}function El(n,i,a,u,h){var m=a._reactRootContainer;if(m){var b=m;if(typeof h=="function"){var F=h;h=function(){var H=yl(b);F.call(H)}}xl(i,b,n,h)}else b=Zv(a,i,n,h,u);return yl(b)}Ft=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Pt(i.pendingLanes);a!==0&&(Hn(i,a|1),Yn(i,Jt()),(Lt&6)===0&&(Bs=Jt()+500,yr()))}break;case 13:ts(function(){var u=Ji(n,1);if(u!==null){var h=Fn();bi(u,n,1,h)}}),Jc(n,1)}},Xt=function(n){if(n.tag===13){var i=Ji(n,134217728);if(i!==null){var a=Fn();bi(i,n,134217728,a)}Jc(n,134217728)}},xi=function(n){if(n.tag===13){var i=br(n),a=Ji(n,i);if(a!==null){var u=Fn();bi(a,n,i,u)}Jc(n,i)}},zt=function(){return St},yi=function(n,i){var a=St;try{return St=n,i()}finally{St=a}},it=function(n,i,a){switch(i){case"input":if(It(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var h=Bo(u);if(!h)throw Error(t(90));At(u),It(u,h)}}}break;case"textarea":Wt(n,a);break;case"select":i=a.value,i!=null&&Le(n,!!a.multiple,i,!1)}},ke=qc,ye=ts;var Qv={usingClientEntryPoint:!1,Events:[za,As,Bo,ve,Ie,qc]},Ja={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jv={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wr(n),n===null?null:n.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||Kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{ne=wl.inject(Jv),Re=wl}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv,jn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tf(i))throw Error(t(200));return $v(n,i,null,a)},jn.createRoot=function(n,i){if(!tf(n))throw Error(t(299));var a=!1,u="",h=bm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Qc(n,1,!1,null,null,a,!1,u,h),n[$i]=i.current,Fa(n.nodeType===8?n.parentNode:n),new ef(i)},jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Wr(i),n=n===null?null:n.stateNode,n},jn.flushSync=function(n){return ts(n)},jn.hydrate=function(n,i,a){if(!Ml(i))throw Error(t(200));return El(null,n,i,!0,a)},jn.hydrateRoot=function(n,i,a){if(!tf(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,m="",b=bm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=wm(i,null,n,1,a??null,h,!1,m,b),n[$i]=i.current,Fa(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Sl(i)},jn.render=function(n,i,a){if(!Ml(i))throw Error(t(200));return El(null,n,i,!1,a)},jn.unmountComponentAtNode=function(n){if(!Ml(n))throw Error(t(40));return n._reactRootContainer?(ts(function(){El(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1},jn.unstable_batchedUpdates=qc,jn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return El(n,i,a,!1,u)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var Um;function l_(){if(Um)return sf.exports;Um=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),sf.exports=o_(),sf.exports}var Fm;function u_(){if(Fm)return Tl;Fm=1;var s=l_();return Tl.createRoot=s.createRoot,Tl.hydrateRoot=s.hydrateRoot,Tl}var c_=u_();const f_=t_(c_);var yt=Oh();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="185",h_=0,Om=1,d_=2,tu=1,G0=2,fo=3,zr=0,Bn=1,Pi=2,Xi=0,aa=1,ua=2,km=3,zm=4,p_=5,cs=100,m_=101,g_=102,v_=103,__=104,x_=200,y_=201,S_=202,M_=203,Wf=204,Xf=205,E_=206,w_=207,T_=208,b_=209,A_=210,R_=211,C_=212,P_=213,N_=214,qf=0,Yf=1,jf=2,ca=3,$f=4,Kf=5,Zf=6,Qf=7,W0=0,L_=1,D_=2,qi=0,zh=1,Bh=2,Vh=3,gu=4,Hh=5,Gh=6,Wh=7,X0=300,ps=301,fa=302,lf=303,uf=304,vu=306,go=1e3,lr=1001,Jf=1002,Sn=1003,I_=1004,bl=1005,Pn=1006,cf=1007,hs=1008,ai=1009,q0=1010,Y0=1011,vo=1012,Xh=1013,Yi=1014,Hi=1015,oi=1016,qh=1017,Yh=1018,_o=1020,j0=35902,$0=35899,K0=1021,Z0=1022,Ni=1023,cr=1026,ds=1027,Q0=1028,jh=1029,ms=1030,$h=1031,Kh=1033,nu=33776,iu=33777,ru=33778,su=33779,eh=35840,th=35841,nh=35842,ih=35843,rh=36196,sh=37492,ah=37496,oh=37488,lh=37489,lu=37490,uh=37491,ch=37808,fh=37809,hh=37810,dh=37811,ph=37812,mh=37813,gh=37814,vh=37815,_h=37816,xh=37817,yh=37818,Sh=37819,Mh=37820,Eh=37821,wh=36492,Th=36494,bh=36495,Ah=36283,Rh=36284,uu=36285,Ch=36286,U_=3200,Ph=0,F_=1,Fr="",Cn="srgb",cu="srgb-linear",fu="linear",Ot="srgb",Hs=7680,Bm=519,O_=512,k_=513,z_=514,Zh=515,B_=516,V_=517,Qh=518,H_=519,Nh=35044,Vm="300 es",Gi=2e3,xo=2001;function G_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function hu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function W_(){const s=hu("canvas");return s.style.display="block",s}const Hm={};function du(...s){const e="THREE."+s.shift();console.log(e,...s)}function J0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ft(...s){s=J0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Tt(...s){s=J0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function oa(...s){const e=s.join(" ");e in Hm||(Hm[e]=!0,ft(...s))}function X_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const q_={[qf]:Yf,[jf]:Zf,[$f]:Qf,[ca]:Kf,[Yf]:qf,[Zf]:jf,[Qf]:$f,[Kf]:ca};class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ff=Math.PI/180,Lh=180/Math.PI;function kr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function Y_(s,e){return(s%e+e)%e}function hf(s,e,t){return(1-t)*s+t*e}function Vi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ad=class ad{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ad.prototype.isVector2=!0;let rt=ad;class ga{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,d){let f=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3],g=l[c+0],S=l[c+1],w=l[c+2],T=l[c+3];if(v!==T||f!==g||p!==S||_!==w){let y=f*g+p*S+_*w+v*T;y<0&&(g=-g,S=-S,w=-w,T=-T,y=-y);let x=1-d;if(y<.9995){const I=Math.acos(y),O=Math.sin(I);x=Math.sin(x*I)/O,d=Math.sin(d*I)/O,f=f*x+g*d,p=p*x+S*d,_=_*x+w*d,v=v*x+T*d}else{f=f*x+g*d,p=p*x+S*d,_=_*x+w*d,v=v*x+T*d;const I=1/Math.sqrt(f*f+p*p+_*_+v*v);f*=I,p*=I,_*=I,v*=I}}e[t]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,c){const d=r[o],f=r[o+1],p=r[o+2],_=r[o+3],v=l[c],g=l[c+1],S=l[c+2],w=l[c+3];return e[t]=d*w+_*v+f*S-p*g,e[t+1]=f*w+_*g+p*v-d*S,e[t+2]=p*w+_*S+d*g-f*v,e[t+3]=_*w-d*v-f*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,p=d(r/2),_=d(o/2),v=d(l/2),g=f(r/2),S=f(o/2),w=f(l/2);switch(c){case"XYZ":this._x=g*_*v+p*S*w,this._y=p*S*v-g*_*w,this._z=p*_*w+g*S*v,this._w=p*_*v-g*S*w;break;case"YXZ":this._x=g*_*v+p*S*w,this._y=p*S*v-g*_*w,this._z=p*_*w-g*S*v,this._w=p*_*v+g*S*w;break;case"ZXY":this._x=g*_*v-p*S*w,this._y=p*S*v+g*_*w,this._z=p*_*w+g*S*v,this._w=p*_*v-g*S*w;break;case"ZYX":this._x=g*_*v-p*S*w,this._y=p*S*v+g*_*w,this._z=p*_*w-g*S*v,this._w=p*_*v+g*S*w;break;case"YZX":this._x=g*_*v+p*S*w,this._y=p*S*v+g*_*w,this._z=p*_*w-g*S*v,this._w=p*_*v-g*S*w;break;case"XZY":this._x=g*_*v-p*S*w,this._y=p*S*v-g*_*w,this._z=p*_*w+g*S*v,this._w=p*_*v+g*S*w;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],d=t[5],f=t[9],p=t[2],_=t[6],v=t[10],g=r+d+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-f)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(_-f)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(f+_)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(f+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,d=t._x,f=t._y,p=t._z,_=t._w;return this._x=r*_+c*d+o*p-l*f,this._y=o*_+c*f+l*d-r*p,this._z=l*_+c*p+r*f-o*d,this._w=c*_-r*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,c=-c,d=-d);let f=1-t;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);f=Math.sin(f*p)/_,t=Math.sin(t*p)/_,this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const od=class od{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,d=e.z,f=e.w,p=2*(c*o-d*r),_=2*(d*t-l*o),v=2*(l*r-c*t);return this.x=t+f*p+c*v-d*_,this.y=r+f*_+d*p-l*v,this.z=o+f*v+l*_-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*c-r*f,this.z=r*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};od.prototype.isVector3=!0;let $=od;const df=new $,Gm=new ga,ld=class ld{constructor(e,t,r,o,l,c,d,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,d,f,p)}set(e,t,r,o,l,c,d,f,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=t,_[4]=l,_[5]=f,_[6]=r,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],d=r[3],f=r[6],p=r[1],_=r[4],v=r[7],g=r[2],S=r[5],w=r[8],T=o[0],y=o[3],x=o[6],I=o[1],O=o[4],C=o[7],D=o[2],N=o[5],R=o[8];return l[0]=c*T+d*I+f*D,l[3]=c*y+d*O+f*N,l[6]=c*x+d*C+f*R,l[1]=p*T+_*I+v*D,l[4]=p*y+_*O+v*N,l[7]=p*x+_*C+v*R,l[2]=g*T+S*I+w*D,l[5]=g*y+S*O+w*N,l[8]=g*x+S*C+w*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],_=e[8];return t*c*_-t*d*p-r*l*_+r*d*f+o*l*p-o*c*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],_=e[8],v=_*c-d*p,g=d*f-_*l,S=p*l-c*f,w=t*v+r*g+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=v*T,e[1]=(o*p-_*r)*T,e[2]=(d*r-o*c)*T,e[3]=g*T,e[4]=(_*t-o*f)*T,e[5]=(o*l-d*t)*T,e[6]=S*T,e[7]=(r*f-p*t)*T,e[8]=(c*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*c+p*d)+c+e,-o*p,o*f,-o*(-p*c+f*d)+d+t,0,0,1),this}scale(e,t){return oa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pf.makeScale(e,t)),this}rotate(e){return oa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pf.makeRotation(-e)),this}translate(e,t){return oa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ld.prototype.isMatrix3=!0;let mt=ld;const pf=new mt,Wm=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j_(){const s={enabled:!0,workingColorSpace:cu,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ot&&(o.r=ur(o.r),o.g=ur(o.g),o.b=ur(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ot&&(o.r=la(o.r),o.g=la(o.g),o.b=la(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Fr?fu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return oa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return oa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[cu]:{primaries:e,whitePoint:r,transfer:fu,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),s}const Et=j_();function ur(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function la(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gs;class $_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Gs===void 0&&(Gs=hu("canvas")),Gs.width=e.width,Gs.height=e.height;const o=Gs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Gs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=ur(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ur(t[r]/255)*255):t[r]=ur(t[r]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K_=0;class Jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(mf(o[c].image)):l.push(mf(o[c]))}else l=mf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function mf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let Z_=0;const gf=new $;class Ln extends gs{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,r=lr,o=lr,l=Pn,c=hs,d=Ni,f=ai,p=Ln.DEFAULT_ANISOTROPY,_=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=kr(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gf).x}get height(){return this.source.getSize(gf).y}get depth(){return this.source.getSize(gf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=X0;Ln.DEFAULT_ANISOTROPY=1;const ud=class ud{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],_=f[4],v=f[8],g=f[1],S=f[5],w=f[9],T=f[2],y=f[6],x=f[10];if(Math.abs(_-g)<.01&&Math.abs(v-T)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+T)<.1&&Math.abs(w+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(p+1)/2,C=(S+1)/2,D=(x+1)/2,N=(_+g)/4,R=(v+T)/4,M=(w+y)/4;return O>C&&O>D?O<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(O),o=N/r,l=R/r):C>D?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=N/o,l=M/o):D<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),r=R/l,o=M/l),this.set(r,o,l,t),this}let I=Math.sqrt((y-w)*(y-w)+(v-T)*(v-T)+(g-_)*(g-_));return Math.abs(I)<.001&&(I=1),this.x=(y-w)/I,this.y=(v-T)/I,this.z=(g-_)/I,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ud.prototype.isVector4=!0;let nn=ud;class Q_ extends gs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Ln(o),c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Jh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Q_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class eg extends Ln{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class J_ extends Ln{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mu=class mu{constructor(e,t,r,o,l,c,d,f,p,_,v,g,S,w,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,d,f,p,_,v,g,S,w,T,y)}set(e,t,r,o,l,c,d,f,p,_,v,g,S,w,T,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=c,x[9]=d,x[13]=f,x[2]=p,x[6]=_,x[10]=v,x[14]=g,x[3]=S,x[7]=w,x[11]=T,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Ws.setFromMatrixColumn(e,0).length(),l=1/Ws.setFromMatrixColumn(e,1).length(),c=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),f=Math.cos(o),p=Math.sin(o),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=c*_,S=c*v,w=d*_,T=d*v;t[0]=f*_,t[4]=-f*v,t[8]=p,t[1]=S+w*p,t[5]=g-T*p,t[9]=-d*f,t[2]=T-g*p,t[6]=w+S*p,t[10]=c*f}else if(e.order==="YXZ"){const g=f*_,S=f*v,w=p*_,T=p*v;t[0]=g+T*d,t[4]=w*d-S,t[8]=c*p,t[1]=c*v,t[5]=c*_,t[9]=-d,t[2]=S*d-w,t[6]=T+g*d,t[10]=c*f}else if(e.order==="ZXY"){const g=f*_,S=f*v,w=p*_,T=p*v;t[0]=g-T*d,t[4]=-c*v,t[8]=w+S*d,t[1]=S+w*d,t[5]=c*_,t[9]=T-g*d,t[2]=-c*p,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const g=c*_,S=c*v,w=d*_,T=d*v;t[0]=f*_,t[4]=w*p-S,t[8]=g*p+T,t[1]=f*v,t[5]=T*p+g,t[9]=S*p-w,t[2]=-p,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const g=c*f,S=c*p,w=d*f,T=d*p;t[0]=f*_,t[4]=T-g*v,t[8]=w*v+S,t[1]=v,t[5]=c*_,t[9]=-d*_,t[2]=-p*_,t[6]=S*v+w,t[10]=g-T*v}else if(e.order==="XZY"){const g=c*f,S=c*p,w=d*f,T=d*p;t[0]=f*_,t[4]=-v,t[8]=p*_,t[1]=g*v+T,t[5]=c*_,t[9]=S*v-w,t[2]=w*v-S,t[6]=d*_,t[10]=T*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ex,e,tx)}lookAt(e,t,r){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Pr.crossVectors(r,ti),Pr.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Pr.crossVectors(r,ti)),Pr.normalize(),Al.crossVectors(ti,Pr),o[0]=Pr.x,o[4]=Al.x,o[8]=ti.x,o[1]=Pr.y,o[5]=Al.y,o[9]=ti.y,o[2]=Pr.z,o[6]=Al.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],d=r[4],f=r[8],p=r[12],_=r[1],v=r[5],g=r[9],S=r[13],w=r[2],T=r[6],y=r[10],x=r[14],I=r[3],O=r[7],C=r[11],D=r[15],N=o[0],R=o[4],M=o[8],P=o[12],V=o[1],k=o[5],B=o[9],te=o[13],le=o[2],j=o[6],ue=o[10],K=o[14],q=o[3],ae=o[7],fe=o[11],U=o[15];return l[0]=c*N+d*V+f*le+p*q,l[4]=c*R+d*k+f*j+p*ae,l[8]=c*M+d*B+f*ue+p*fe,l[12]=c*P+d*te+f*K+p*U,l[1]=_*N+v*V+g*le+S*q,l[5]=_*R+v*k+g*j+S*ae,l[9]=_*M+v*B+g*ue+S*fe,l[13]=_*P+v*te+g*K+S*U,l[2]=w*N+T*V+y*le+x*q,l[6]=w*R+T*k+y*j+x*ae,l[10]=w*M+T*B+y*ue+x*fe,l[14]=w*P+T*te+y*K+x*U,l[3]=I*N+O*V+C*le+D*q,l[7]=I*R+O*k+C*j+D*ae,l[11]=I*M+O*B+C*ue+D*fe,l[15]=I*P+O*te+C*K+D*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],d=e[5],f=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],w=e[3],T=e[7],y=e[11],x=e[15],I=f*S-p*g,O=d*S-p*v,C=d*g-f*v,D=c*S-p*_,N=c*g-f*_,R=c*v-d*_;return t*(T*I-y*O+x*C)-r*(w*I-y*D+x*N)+o*(w*O-T*D+x*R)-l*(w*C-T*N+y*R)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],c=e[5],d=e[9],f=e[2],p=e[6],_=e[10];return t*(c*_-d*p)-r*(l*_-d*f)+o*(l*p-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],w=e[12],T=e[13],y=e[14],x=e[15],I=t*d-r*c,O=t*f-o*c,C=t*p-l*c,D=r*f-o*d,N=r*p-l*d,R=o*p-l*f,M=_*T-v*w,P=_*y-g*w,V=_*x-S*w,k=v*y-g*T,B=v*x-S*T,te=g*x-S*y,le=I*te-O*B+C*k+D*V-N*P+R*M;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/le;return e[0]=(d*te-f*B+p*k)*j,e[1]=(o*B-r*te-l*k)*j,e[2]=(T*R-y*N+x*D)*j,e[3]=(g*N-v*R-S*D)*j,e[4]=(f*V-c*te-p*P)*j,e[5]=(t*te-o*V+l*P)*j,e[6]=(y*C-w*R-x*O)*j,e[7]=(_*R-g*C+S*O)*j,e[8]=(c*B-d*V+p*M)*j,e[9]=(r*V-t*B-l*M)*j,e[10]=(w*N-T*C+x*I)*j,e[11]=(v*C-_*N-S*I)*j,e[12]=(d*P-c*k-f*M)*j,e[13]=(t*k-r*P+o*M)*j,e[14]=(T*O-w*D-y*I)*j,e[15]=(_*D-v*O+g*I)*j,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,d=e.y,f=e.z,p=l*c,_=l*d;return this.set(p*c+r,p*d-o*f,p*f+o*d,0,p*d+o*f,_*d+r,_*f-o*c,0,p*f-o*d,_*f+o*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,p=l+l,_=c+c,v=d+d,g=l*p,S=l*_,w=l*v,T=c*_,y=c*v,x=d*v,I=f*p,O=f*_,C=f*v,D=r.x,N=r.y,R=r.z;return o[0]=(1-(T+x))*D,o[1]=(S+C)*D,o[2]=(w-O)*D,o[3]=0,o[4]=(S-C)*N,o[5]=(1-(g+x))*N,o[6]=(y+I)*N,o[7]=0,o[8]=(w+O)*R,o[9]=(y-I)*R,o[10]=(1-(g+T))*R,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Ws.set(o[0],o[1],o[2]).length();const d=Ws.set(o[4],o[5],o[6]).length(),f=Ws.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Ai.copy(this);const p=1/c,_=1/d,v=1/f;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,t.setFromRotationMatrix(Ai),r.x=c,r.y=d,r.z=f,this}makePerspective(e,t,r,o,l,c,d=Gi,f=!1){const p=this.elements,_=2*l/(t-e),v=2*l/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let w,T;if(f)w=l/(c-l),T=c*l/(c-l);else if(d===Gi)w=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(d===xo)w=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,c,d=Gi,f=!1){const p=this.elements,_=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let w,T;if(f)w=1/(c-l),T=c/(c-l);else if(d===Gi)w=-2/(c-l),T=-(c+l)/(c-l);else if(d===xo)w=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=w,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};mu.prototype.isMatrix4=!0;let jt=mu;const Ws=new $,Ai=new jt,ex=new $(0,0,0),tx=new $(1,1,1),Pr=new $,Al=new $,ti=new $,qm=new jt,Ym=new ga;class Br{constructor(e=0,t=0,r=0,o=Br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],f=o[1],p=o[5],_=o[9],v=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ym.setFromEuler(this),this.setFromQuaternion(Ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Br.DEFAULT_ORDER="XYZ";class ed{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nx=0;const jm=new $,Xs=new ga,ir=new jt,Rl=new $,to=new $,ix=new $,rx=new ga,$m=new $(1,0,0),Km=new $(0,1,0),Zm=new $(0,0,1),Qm={type:"added"},sx={type:"removed"},qs={type:"childadded",child:null},vf={type:"childremoved",child:null};class Qt extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new $,t=new Br,r=new ga,o=new $(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new mt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ed,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Km,e)}rotateZ(e){return this.rotateOnAxis(Zm,e)}translateOnAxis(e,t){return jm.copy(e).applyQuaternion(this.quaternion),this.position.add(jm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Km,e)}translateZ(e){return this.translateOnAxis(Zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Rl.copy(e):Rl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(to,Rl,this.up):ir.lookAt(Rl,to,this.up),this.quaternion.setFromRotationMatrix(ir),o&&(ir.extractRotation(o.matrixWorld),Xs.setFromRotationMatrix(ir),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qm),qs.child=e,this.dispatchEvent(qs),qs.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sx),vf.child=e,this.dispatchEvent(vf),vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qm),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,_=f.length;p<_;p++){const v=f[p];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),p=c(e.textures),_=c(e.images),v=c(e.shapes),g=c(e.skeletons),S=c(e.animations),w=c(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=o,r;function c(d){const f=[];for(const p in d){const _=d[p];delete _.metadata,f.push(_)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Qt.DEFAULT_UP=new $(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wi extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ax={type:"move"};class _f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),x=this._getHandJoint(p,T);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,w=.005;p.inputState.pinching&&g>S+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ax)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Wi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function xf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Et.workingColorSpace){if(e=Y_(e,1),t=bt(t,0,1),r=bt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=xf(c,l,e+1/3),this.g=xf(c,l,e),this.b=xf(c,l,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,t=Cn){function r(l){l!==void 0&&parseFloat(l)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const r=tg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Et.workingToColorSpace(Rn.copy(this),e),Math.round(bt(Rn.r*255,0,255))*65536+Math.round(bt(Rn.g*255,0,255))*256+Math.round(bt(Rn.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Rn.copy(this),t);const r=Rn.r,o=Rn.g,l=Rn.b,c=Math.max(r,o,l),d=Math.min(r,o,l);let f,p;const _=(d+c)/2;if(d===c)f=0,p=0;else{const v=c-d;switch(p=_<=.5?v/(c+d):v/(2-c-d),c){case r:f=(o-l)/v+(o<l?6:0);break;case o:f=(l-r)/v+2;break;case l:f=(r-o)/v+4;break}f/=6}return e.h=f,e.s=p,e.l=_,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Cn){Et.workingToColorSpace(Rn.copy(this),e);const t=Rn.r,r=Rn.g,o=Rn.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(Cl);const r=hf(Nr.h,Cl.h,t),o=hf(Nr.s,Cl.s,t),l=hf(Nr.l,Cl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new gt;gt.NAMES=tg;class td{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new gt(e),this.near=t,this.far=r}clone(){return new td(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ox extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new $,rr=new $,yf=new $,sr=new $,Ys=new $,js=new $,Jm=new $,Sf=new $,Mf=new $,Ef=new $,wf=new nn,Tf=new nn,bf=new nn;class vi{constructor(e=new $,t=new $,r=new $){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ri.subVectors(e,t),o.cross(Ri);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ri.subVectors(o,t),rr.subVectors(r,t),yf.subVectors(e,t);const c=Ri.dot(Ri),d=Ri.dot(rr),f=Ri.dot(yf),p=rr.dot(rr),_=rr.dot(yf),v=c*p-d*d;if(v===0)return l.set(0,0,0),null;const g=1/v,S=(p*f-d*_)*g,w=(c*_-d*f)*g;return l.set(1-S-w,w,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,r,o,l,c,d,f){return this.getBarycoord(e,t,r,o,sr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,sr.x),f.addScaledVector(c,sr.y),f.addScaledVector(d,sr.z),f)}static getInterpolatedAttribute(e,t,r,o,l,c){return wf.setScalar(0),Tf.setScalar(0),bf.setScalar(0),wf.fromBufferAttribute(e,t),Tf.fromBufferAttribute(e,r),bf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(wf,l.x),c.addScaledVector(Tf,l.y),c.addScaledVector(bf,l.z),c}static isFrontFacing(e,t,r,o){return Ri.subVectors(r,t),rr.subVectors(e,t),Ri.cross(rr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ri.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,d;Ys.subVectors(o,r),js.subVectors(l,r),Sf.subVectors(e,r);const f=Ys.dot(Sf),p=js.dot(Sf);if(f<=0&&p<=0)return t.copy(r);Mf.subVectors(e,o);const _=Ys.dot(Mf),v=js.dot(Mf);if(_>=0&&v<=_)return t.copy(o);const g=f*v-_*p;if(g<=0&&f>=0&&_<=0)return c=f/(f-_),t.copy(r).addScaledVector(Ys,c);Ef.subVectors(e,l);const S=Ys.dot(Ef),w=js.dot(Ef);if(w>=0&&S<=w)return t.copy(l);const T=S*p-f*w;if(T<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(r).addScaledVector(js,d);const y=_*w-S*v;if(y<=0&&v-_>=0&&S-w>=0)return Jm.subVectors(l,o),d=(v-_)/(v-_+(S-w)),t.copy(o).addScaledVector(Jm,d);const x=1/(y+T+g);return c=T*x,d=g*x,t.copy(r).addScaledVector(Ys,c).addScaledVector(js,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class So{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ci):Ci.fromBufferAttribute(l,c),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Pl.copy(r.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),Nl.subVectors(this.max,no),$s.subVectors(e.a,no),Ks.subVectors(e.b,no),Zs.subVectors(e.c,no),Lr.subVectors(Ks,$s),Dr.subVectors(Zs,Ks),ss.subVectors($s,Zs);let t=[0,-Lr.z,Lr.y,0,-Dr.z,Dr.y,0,-ss.z,ss.y,Lr.z,0,-Lr.x,Dr.z,0,-Dr.x,ss.z,0,-ss.x,-Lr.y,Lr.x,0,-Dr.y,Dr.x,0,-ss.y,ss.x,0];return!Af(t,$s,Ks,Zs,Nl)||(t=[1,0,0,0,1,0,0,0,1],!Af(t,$s,Ks,Zs,Nl))?!1:(Ll.crossVectors(Lr,Dr),t=[Ll.x,Ll.y,Ll.z],Af(t,$s,Ks,Zs,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new $,new $,new $,new $,new $,new $,new $,new $],Ci=new $,Pl=new So,$s=new $,Ks=new $,Zs=new $,Lr=new $,Dr=new $,ss=new $,no=new $,Nl=new $,Ll=new $,as=new $;function Af(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){as.fromArray(s,l);const d=o.x*Math.abs(as.x)+o.y*Math.abs(as.y)+o.z*Math.abs(as.z),f=e.dot(as),p=t.dot(as),_=r.dot(as);if(Math.max(-Math.max(f,p,_),Math.min(f,p,_))>d)return!1}return!0}const ln=new $,Dl=new rt;let lx=0;class _i extends gs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Nh,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Vi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array),l=Vt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ng extends _i{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ig extends _i{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class un extends _i{constructor(e,t,r){super(new Float32Array(e),t,r)}}const ux=new So,io=new $,Rf=new $;class _u{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ux.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(io,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(Rf)),this.expandByPoint(io.copy(e.center).sub(Rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cx=0;const mi=new jt,Cf=new Qt,Qs=new $,ni=new So,ro=new So,vn=new $;class Dn extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G_(e)?ig:ng)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,r){return mi.makeTranslation(e,t,r),this.applyMatrix4(mi),this}scale(e,t,r){return mi.makeScale(e,t,r),this.applyMatrix4(mi),this}lookAt(e){return Cf.lookAt(e),Cf.updateMatrix(),this.applyMatrix4(Cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new un(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _u);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];ro.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ni.min,ro.min),ni.expandByPoint(vn),vn.addVectors(ni.max,ro.max),ni.expandByPoint(vn)):(ni.expandByPoint(ro.min),ni.expandByPoint(ro.max))}ni.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)vn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(vn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)vn.fromBufferAttribute(d,p),f&&(Qs.fromBufferAttribute(e,p),vn.add(Qs)),o=Math.max(o,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new _i(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],f=[];for(let M=0;M<r.count;M++)d[M]=new $,f[M]=new $;const p=new $,_=new $,v=new $,g=new rt,S=new rt,w=new rt,T=new $,y=new $;function x(M,P,V){p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,V),g.fromBufferAttribute(l,M),S.fromBufferAttribute(l,P),w.fromBufferAttribute(l,V),_.sub(p),v.sub(p),S.sub(g),w.sub(g);const k=1/(S.x*w.y-w.x*S.y);isFinite(k)&&(T.copy(_).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(k),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(k),d[M].add(T),d[P].add(T),d[V].add(T),f[M].add(y),f[P].add(y),f[V].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let M=0,P=I.length;M<P;++M){const V=I[M],k=V.start,B=V.count;for(let te=k,le=k+B;te<le;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const O=new $,C=new $,D=new $,N=new $;function R(M){D.fromBufferAttribute(o,M),N.copy(D);const P=d[M];O.copy(P),O.sub(D.multiplyScalar(D.dot(P))).normalize(),C.crossVectors(N,P);const k=C.dot(f[M])<0?-1:1;c.setXYZW(M,O.x,O.y,O.z,k)}for(let M=0,P=I.length;M<P;++M){const V=I[M],k=V.start,B=V.count;for(let te=k,le=k+B;te<le;te+=3)R(e.getX(te+0)),R(e.getX(te+1)),R(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new _i(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new $,l=new $,c=new $,d=new $,f=new $,p=new $,_=new $,v=new $;if(e)for(let g=0,S=e.count;g<S;g+=3){const w=e.getX(g+0),T=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),_.subVectors(c,l),v.subVectors(o,l),_.cross(v),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),d.add(_),f.add(_),p.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),_.subVectors(c,l),v.subVectors(o,l),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,f){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(f.length*_);let S=0,w=0;for(let T=0,y=f.length;T<y;T++){d.isInterleavedBufferAttribute?S=f[T]*d.data.stride+d.offset:S=f[T]*_;for(let x=0;x<_;x++)g[w++]=p[S++]}return new _i(g,_,v)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,r);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(o[f]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],v=l[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,_=c.length;p<_;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nh,this.updateRanges=[],this.version=0,this.uuid=kr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new $;class pu{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Vi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array),l=Vt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){du("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new _i(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){du("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let hx=0;class vs extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=aa,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wf,this.blendDst=Xf,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(r.blending=this.blending),this.side!==zr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wf&&(r.blendSrc=this.blendSrc),this.blendDst!==Xf&&(r.blendDst=this.blendDst),this.blendEquation!==cs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new rt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rg extends vs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Js;const so=new $,ea=new $,ta=new $,na=new rt,ao=new rt,sg=new jt,Il=new $,oo=new $,Ul=new $,e0=new rt,Pf=new rt,t0=new rt;class dx extends Qt{constructor(e=new rg){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new Dn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new fx(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new pu(r,3,0,!1)),Js.setAttribute("uv",new pu(r,2,3,!1))}this.geometry=Js,this.material=e,this.center=new rt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ea.setFromMatrixScale(this.matrixWorld),sg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ta.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ea.multiplyScalar(-ta.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const c=this.center;Fl(Il.set(-.5,-.5,0),ta,c,ea,o,l),Fl(oo.set(.5,-.5,0),ta,c,ea,o,l),Fl(Ul.set(.5,.5,0),ta,c,ea,o,l),e0.set(0,0),Pf.set(1,0),t0.set(1,1);let d=e.ray.intersectTriangle(Il,oo,Ul,!1,so);if(d===null&&(Fl(oo.set(-.5,.5,0),ta,c,ea,o,l),Pf.set(0,1),d=e.ray.intersectTriangle(Il,Ul,oo,!1,so),d===null))return;const f=e.ray.origin.distanceTo(so);f<e.near||f>e.far||t.push({distance:f,point:so.clone(),uv:vi.getInterpolation(so,Il,oo,Ul,e0,Pf,t0,new rt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fl(s,e,t,r,o,l){na.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(ao.x=l*na.x-o*na.y,ao.y=o*na.x+l*na.y):ao.copy(na),s.copy(e),s.x+=ao.x,s.y+=ao.y,s.applyMatrix4(sg)}const or=new $,Nf=new $,Ol=new $,Ir=new $,Lf=new $,kl=new $,Df=new $;class nd{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Nf.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(Nf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ol),d=Ir.dot(this.direction),f=-Ir.dot(Ol),p=Ir.lengthSq(),_=Math.abs(1-c*c);let v,g,S,w;if(_>0)if(v=c*f-d,g=c*d-f,w=l*_,v>=0)if(g>=-w)if(g<=w){const T=1/_;v*=T,g*=T,S=v*(v+c*g+2*d)+g*(c*v+g+2*f)+p}else g=l,v=Math.max(0,-(c*g+d)),S=-v*v+g*(g+2*f)+p;else g=-l,v=Math.max(0,-(c*g+d)),S=-v*v+g*(g+2*f)+p;else g<=-w?(v=Math.max(0,-(-c*l+d)),g=v>0?-l:Math.min(Math.max(-l,-f),l),S=-v*v+g*(g+2*f)+p):g<=w?(v=0,g=Math.min(Math.max(-l,-f),l),S=g*(g+2*f)+p):(v=Math.max(0,-(c*l+d)),g=v>0?l:Math.min(Math.max(-l,-f),l),S=-v*v+g*(g+2*f)+p);else g=c>0?-l:l,v=Math.max(0,-(c*g+d)),S=-v*v+g*(g+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Nf).addScaledVector(Ol,g),S}intersectSphere(e,t){or.subVectors(e.center,this.origin);const r=or.dot(this.direction),o=or.dot(or)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=r-c,f=r+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,d,f;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(l=(e.min.y-g.y)*_,c=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,c=(e.min.y-g.y)*_),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),v>=0?(d=(e.min.z-g.z)*v,f=(e.max.z-g.z)*v):(d=(e.max.z-g.z)*v,f=(e.min.z-g.z)*v),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,r,o,l){Lf.subVectors(t,e),kl.subVectors(r,e),Df.crossVectors(Lf,kl);let c=this.direction.dot(Df),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Ir.subVectors(this.origin,e);const f=d*this.direction.dot(kl.crossVectors(Ir,kl));if(f<0)return null;const p=d*this.direction.dot(Lf.cross(Ir));if(p<0||f+p>c)return null;const _=-d*Ir.dot(Df);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zn extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=W0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const n0=new jt,os=new nd,zl=new _u,i0=new $,Bl=new $,Vl=new $,Hl=new $,If=new $,Gl=new $,r0=new $,Wl=new $;class Nt extends Qt{constructor(e=new Dn,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Gl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const _=d[f],v=l[f];_!==0&&(If.fromBufferAttribute(v,e),c?Gl.addScaledVector(If,_):Gl.addScaledVector(If.sub(t),_))}t.add(Gl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),zl.copy(r.boundingSphere),zl.applyMatrix4(l),os.copy(e.ray).recast(e.near),!(zl.containsPoint(os.origin)===!1&&(os.intersectSphere(zl,i0)===null||os.origin.distanceToSquared(i0)>(e.far-e.near)**2))&&(n0.copy(l).invert(),os.copy(e.ray).applyMatrix4(n0),!(r.boundingBox!==null&&os.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,g=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let w=0,T=g.length;w<T;w++){const y=g[w],x=c[y.materialIndex],I=Math.max(y.start,S.start),O=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=I,D=O;C<D;C+=3){const N=d.getX(C),R=d.getX(C+1),M=d.getX(C+2);o=Xl(this,x,e,r,p,_,v,N,R,M),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let y=w,x=T;y<x;y+=3){const I=d.getX(y),O=d.getX(y+1),C=d.getX(y+2);o=Xl(this,c,e,r,p,_,v,I,O,C),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let w=0,T=g.length;w<T;w++){const y=g[w],x=c[y.materialIndex],I=Math.max(y.start,S.start),O=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=I,D=O;C<D;C+=3){const N=C,R=C+1,M=C+2;o=Xl(this,x,e,r,p,_,v,N,R,M),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=w,x=T;y<x;y+=3){const I=y,O=y+1,C=y+2;o=Xl(this,c,e,r,p,_,v,I,O,C),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function px(s,e,t,r,o,l,c,d){let f;if(e.side===Bn?f=r.intersectTriangle(c,l,o,!0,d):f=r.intersectTriangle(o,l,c,e.side===zr,d),f===null)return null;Wl.copy(d),Wl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Wl);return p<t.near||p>t.far?null:{distance:p,point:Wl.clone(),object:s}}function Xl(s,e,t,r,o,l,c,d,f,p){s.getVertexPosition(d,Bl),s.getVertexPosition(f,Vl),s.getVertexPosition(p,Hl);const _=px(s,e,t,r,Bl,Vl,Hl,r0);if(_){const v=new $;vi.getBarycoord(r0,Bl,Vl,Hl,v),o&&(_.uv=vi.getInterpolatedAttribute(o,d,f,p,v,new rt)),l&&(_.uv1=vi.getInterpolatedAttribute(l,d,f,p,v,new rt)),c&&(_.normal=vi.getInterpolatedAttribute(c,d,f,p,v,new $),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:f,c:p,normal:new $,materialIndex:0};vi.getNormal(Bl,Vl,Hl,g.normal),_.face=g,_.barycoord=v}return _}class mx extends Ln{constructor(e=null,t=1,r=1,o,l,c,d,f,p=Sn,_=Sn,v,g){super(null,c,d,f,p,_,o,l,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uf=new $,gx=new $,vx=new mt;class us{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Uf.subVectors(r,t).cross(gx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Uf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||vx.getNormalMatrix(e),o=this.coplanarPoint(Uf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new _u,_x=new rt(.5,.5),ql=new $;class id{constructor(e=new us,t=new us,r=new us,o=new us,l=new us,c=new us){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Gi,r=!1){const o=this.planes,l=e.elements,c=l[0],d=l[1],f=l[2],p=l[3],_=l[4],v=l[5],g=l[6],S=l[7],w=l[8],T=l[9],y=l[10],x=l[11],I=l[12],O=l[13],C=l[14],D=l[15];if(o[0].setComponents(p-c,S-_,x-w,D-I).normalize(),o[1].setComponents(p+c,S+_,x+w,D+I).normalize(),o[2].setComponents(p+d,S+v,x+T,D+O).normalize(),o[3].setComponents(p-d,S-v,x-T,D-O).normalize(),r)o[4].setComponents(f,g,y,C).normalize(),o[5].setComponents(p-f,S-g,x-y,D-C).normalize();else if(o[4].setComponents(p-f,S-g,x-y,D-C).normalize(),t===Gi)o[5].setComponents(p+f,S+g,x+y,D+C).normalize();else if(t===xo)o[5].setComponents(f,g,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const t=_x.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(ql.x=o.normal.x>0?e.max.x:e.min.x,ql.y=o.normal.y>0?e.max.y:e.min.y,ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ag extends vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const s0=new jt,Dh=new nd,Yl=new _u,jl=new $;class xx extends Qt{constructor(e=new Dn,t=new ag){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Yl.copy(r.boundingSphere),Yl.applyMatrix4(o),Yl.radius+=l,e.ray.intersectsSphere(Yl)===!1)return;s0.copy(o).invert(),Dh.copy(e.ray).applyMatrix4(s0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=r.index,v=r.attributes.position;if(p!==null){const g=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let w=g,T=S;w<T;w++){const y=p.getX(w);jl.fromBufferAttribute(v,y),a0(jl,y,f,o,e,t,this)}}else{const g=Math.max(0,c.start),S=Math.min(v.count,c.start+c.count);for(let w=g,T=S;w<T;w++)jl.fromBufferAttribute(v,w),a0(jl,w,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function a0(s,e,t,r,o,l,c){const d=Dh.distanceSqToPoint(s);if(d<t){const f=new $;Dh.closestPointToPoint(s,f),f.applyMatrix4(r);const p=o.ray.origin.distanceTo(f);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class og extends Ln{constructor(e=[],t=ps,r,o,l,c,d,f,p,_){super(e,t,r,o,l,c,d,f,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class po extends Ln{constructor(e,t,r,o,l,c,d,f,p){super(e,t,r,o,l,c,d,f,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ha extends Ln{constructor(e,t,r=Yi,o,l,c,d=Sn,f=Sn,p,_=cr,v=1){if(_!==cr&&_!==ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,l,c,d,f,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yx extends ha{constructor(e,t=Yi,r=ps,o,l,c=Sn,d=Sn,f,p=cr){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,t,r,o,l,c,d,f,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lg extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Li extends Dn{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const f=[],p=[],_=[],v=[];let g=0,S=0;w("z","y","x",-1,-1,r,t,e,c,l,0),w("z","y","x",1,-1,r,t,-e,c,l,1),w("x","z","y",1,1,e,r,t,o,c,2),w("x","z","y",1,-1,e,r,-t,o,c,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(v,2));function w(T,y,x,I,O,C,D,N,R,M,P){const V=C/R,k=D/M,B=C/2,te=D/2,le=N/2,j=R+1,ue=M+1;let K=0,q=0;const ae=new $;for(let fe=0;fe<ue;fe++){const U=fe*k-te;for(let J=0;J<j;J++){const Oe=J*V-B;ae[T]=Oe*I,ae[y]=U*O,ae[x]=le,p.push(ae.x,ae.y,ae.z),ae[T]=0,ae[y]=0,ae[x]=N>0?1:-1,_.push(ae.x,ae.y,ae.z),v.push(J/R),v.push(1-fe/M),K+=1}}for(let fe=0;fe<M;fe++)for(let U=0;U<R;U++){const J=g+U+j*fe,Oe=g+U+j*(fe+1),We=g+(U+1)+j*(fe+1),Be=g+(U+1)+j*fe;f.push(J,Oe,Be),f.push(Oe,We,Be),q+=6}d.addGroup(S,q,P),S+=q,g+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xu extends Dn{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],c=[],d=[],f=[],p=new $,_=new rt;c.push(0,0,0),d.push(0,0,1),f.push(.5,.5);for(let v=0,g=3;v<=t;v++,g+=3){const S=r+v/t*o;p.x=e*Math.cos(S),p.y=e*Math.sin(S),c.push(p.x,p.y,p.z),d.push(0,0,1),_.x=(c[g]/e+1)/2,_.y=(c[g+1]/e+1)/2,f.push(_.x,_.y)}for(let v=1;v<=t;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class da extends Dn{constructor(e=1,t=1,r=1,o=32,l=1,c=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:f};const p=this;o=Math.floor(o),l=Math.floor(l);const _=[],v=[],g=[],S=[];let w=0;const T=[],y=r/2;let x=0;I(),c===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new un(v,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(S,2));function I(){const C=new $,D=new $;let N=0;const R=(t-e)/r;for(let M=0;M<=l;M++){const P=[],V=M/l,k=V*(t-e)+e;for(let B=0;B<=o;B++){const te=B/o,le=te*f+d,j=Math.sin(le),ue=Math.cos(le);D.x=k*j,D.y=-V*r+y,D.z=k*ue,v.push(D.x,D.y,D.z),C.set(j,R,ue).normalize(),g.push(C.x,C.y,C.z),S.push(te,1-V),P.push(w++)}T.push(P)}for(let M=0;M<o;M++)for(let P=0;P<l;P++){const V=T[P][M],k=T[P+1][M],B=T[P+1][M+1],te=T[P][M+1];(e>0||P!==0)&&(_.push(V,k,te),N+=3),(t>0||P!==l-1)&&(_.push(k,B,te),N+=3)}p.addGroup(x,N,0),x+=N}function O(C){const D=w,N=new rt,R=new $;let M=0;const P=C===!0?e:t,V=C===!0?1:-1;for(let B=1;B<=o;B++)v.push(0,y*V,0),g.push(0,V,0),S.push(.5,.5),w++;const k=w;for(let B=0;B<=o;B++){const le=B/o*f+d,j=Math.cos(le),ue=Math.sin(le);R.x=P*ue,R.y=y*V,R.z=P*j,v.push(R.x,R.y,R.z),g.push(0,V,0),N.x=j*.5+.5,N.y=ue*.5*V+.5,S.push(N.x,N.y),w++}for(let B=0;B<o;B++){const te=D+B,le=k+B;C===!0?_.push(le,le+1,te):_.push(le+1,le,te),M+=3}p.addGroup(x,M,C===!0?1:2),x+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rd extends da{constructor(e=1,t=1,r=32,o=1,l=!1,c=0,d=Math.PI*2){super(0,e,t,r,o,l,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:c,thetaLength:d}}static fromJSON(e){return new rd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $n extends Dn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,d=Math.floor(r),f=Math.floor(o),p=d+1,_=f+1,v=e/d,g=t/f,S=[],w=[],T=[],y=[];for(let x=0;x<_;x++){const I=x*g-c;for(let O=0;O<p;O++){const C=O*v-l;w.push(C,-I,0),T.push(0,0,1),y.push(O/d),y.push(1-x/f)}}for(let x=0;x<f;x++)for(let I=0;I<d;I++){const O=I+p*x,C=I+p*(x+1),D=I+1+p*(x+1),N=I+1+p*x;S.push(O,C,N),S.push(C,D,N)}this.setIndex(S),this.setAttribute("position",new un(w,3)),this.setAttribute("normal",new un(T,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.width,e.height,e.widthSegments,e.heightSegments)}}class yu extends Dn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(c+d,Math.PI);let p=0;const _=[],v=new $,g=new $,S=[],w=[],T=[],y=[];for(let x=0;x<=r;x++){const I=[],O=x/r,C=c+O*d,D=e*Math.cos(C),N=Math.sqrt(e*e-D*D);let R=0;x===0&&c===0?R=.5/t:x===r&&f===Math.PI&&(R=-.5/t);for(let M=0;M<=t;M++){const P=M/t,V=o+P*l;v.x=-N*Math.cos(V),v.y=D,v.z=N*Math.sin(V),w.push(v.x,v.y,v.z),g.copy(v).normalize(),T.push(g.x,g.y,g.z),y.push(P+R,1-O),I.push(p++)}_.push(I)}for(let x=0;x<r;x++)for(let I=0;I<t;I++){const O=_[x][I+1],C=_[x][I],D=_[x+1][I],N=_[x+1][I+1];(x!==0||c>0)&&S.push(O,C,N),(x!==r-1||f<Math.PI)&&S.push(C,D,N)}this.setIndex(S),this.setAttribute("position",new un(w,3)),this.setAttribute("normal",new un(T,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function pa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(o0(o))o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(o0(o[0])){const l=[];for(let c=0,d=o.length;c<d;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function kn(s){const e={};for(let t=0;t<s.length;t++){const r=pa(s[t]);for(const o in r)e[o]=r[o]}return e}function o0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Sx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ug(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const yo={clone:pa,merge:kn};var Mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mx,this.fragmentShader=Ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=Sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new gt().setHex(o.value);break;case"v2":this.uniforms[r].value=new rt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new $().fromArray(o.value);break;case"v4":this.uniforms[r].value=new nn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new mt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new jt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cg extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zt extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wx extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tx extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Su extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class bx extends Su{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ff=new jt,l0=new $,u0=new $;class fg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new id,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;l0.setFromMatrixPosition(e.matrixWorld),t.position.copy(l0),u0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(u0),t.updateMatrixWorld(),Ff.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ff,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===xo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $l=new $,Kl=new ga,ki=new $;class hg extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($l,Kl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Kl,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose($l,Kl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Kl,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new $,c0=new rt,f0=new rt;class si extends hg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,c0,f0),t.subVectors(f0,c0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ff*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/f,t-=c.offsetY*r/p,o*=c.width/f,r*=c.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ax extends fg{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class mo extends Su{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Ax}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Mu extends hg{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,d-=_*this.view.offsetY,f=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rx extends fg{constructor(){super(new Mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cx extends Su{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Rx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Px extends Su{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ia=-90,ra=1;class Nx extends Qt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new si(ia,ra,e,t);o.layers=this.layers,this.add(o);const l=new si(ia,ra,e,t);l.layers=this.layers,this.add(l);const c=new si(ia,ra,e,t);c.layers=this.layers,this.add(c);const d=new si(ia,ra,e,t);d.layers=this.layers,this.add(d);const f=new si(ia,ra,e,t);f.layers=this.layers,this.add(f);const p=new si(ia,ra,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,d,f]=t;for(const p of t)this.remove(p);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===xo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(v,g,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Lx extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Dx{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ix.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Ix(){this._document.hidden===!1&&this.reset()}const h0=new jt;class dg{constructor(e,t,r=0,o=1/0){this.ray=new nd(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new ed,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return h0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(h0),this}intersectObject(e,t=!0,r=[]){return Ih(e,this,r,t),r.sort(d0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Ih(e[o],this,r,t);return r.sort(d0),r}}function d0(s,e){return s.distance-e.distance}function Ih(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let c=0,d=l.length;c<d;c++)Ih(l[c],e,t,!0)}}class Ux{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ft("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const cd=class cd{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};cd.prototype.isMatrix2=!0;let p0=cd;function m0(s,e,t,r){const o=Fx(r);switch(t){case K0:return s*e;case Q0:return s*e/o.components*o.byteLength;case jh:return s*e/o.components*o.byteLength;case ms:return s*e*2/o.components*o.byteLength;case $h:return s*e*2/o.components*o.byteLength;case Z0:return s*e*3/o.components*o.byteLength;case Ni:return s*e*4/o.components*o.byteLength;case Kh:return s*e*4/o.components*o.byteLength;case nu:case iu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ru:case su:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case th:case ih:return Math.max(s,16)*Math.max(e,8)/4;case eh:case nh:return Math.max(s,8)*Math.max(e,8)/2;case rh:case sh:case oh:case lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ah:case lu:case uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case dh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _h:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wh:case Th:case bh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ah:case Rh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case uu:case Ch:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fx(s){switch(s){case ai:case q0:return{byteLength:1,components:1};case vo:case Y0:case oi:return{byteLength:2,components:1};case qh:case Yh:return{byteLength:2,components:4};case Yi:case Xh:case Hi:return{byteLength:4,components:1};case j0:case $0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pg(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ox(s){const e=new WeakMap;function t(d,f){const p=d.array,_=d.usage,v=p.byteLength,g=s.createBuffer();s.bindBuffer(f,g),s.bufferData(f,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,f,p){const _=f.array,v=f.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,_);else{v.sort((S,w)=>S.start-w.start);let g=0;for(let S=1;S<v.length;S++){const w=v[g],T=v[S];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++g,v[g]=T)}v.length=g+1;for(let S=0,w=v.length;S<w;S++){const T=v[S];s.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:c}}var kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zx=`#ifdef USE_ALPHAHASH
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
#endif`,Bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wx=`#ifdef USE_AOMAP
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
#endif`,Xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qx=`#ifdef USE_BATCHING
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
#endif`,Yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zx=`#ifdef USE_IRIDESCENCE
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
#endif`,Qx=`#ifdef USE_BUMPMAP
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,oy=`#define PI 3.141592653589793
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
} // validated`,ly=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uy=`vec3 transformedNormal = objectNormal;
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
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,py="gl_FragColor = linearToOutputTexel( gl_FragColor );",my=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gy=`#ifdef USE_ENVMAP
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
#endif`,vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,My=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ty=`#ifdef USE_GRADIENTMAP
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
}`,by=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uy=`PhysicalMaterial material;
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
#endif`,Fy=`uniform sampler2D dfgLUT;
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
}`,Oy=`
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
#endif`,ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,By=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Vy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jy=`#if defined( USE_POINTS_UV )
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
#endif`,$y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`#ifdef USE_MORPHTARGETS
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
#endif`,tS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oS=`#ifdef USE_NORMALMAP
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
#endif`,lS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_S=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ES=`float getShadowMask() {
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
}`,wS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TS=`#ifdef USE_SKINNING
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
#endif`,bS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AS=`#ifdef USE_SKINNING
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
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,DS=`#ifdef USE_TRANSMISSION
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zS=`uniform sampler2D t2D;
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`#include <common>
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
}`,XS=`#if DEPTH_PACKING == 3200
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
}`,qS=`#define DISTANCE
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
}`,YS=`#define DISTANCE
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
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$S=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`uniform float scale;
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
}`,ZS=`uniform vec3 diffuse;
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
}`,QS=`#include <common>
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
}`,JS=`uniform vec3 diffuse;
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
}`,eM=`#define LAMBERT
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
}`,tM=`#define LAMBERT
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
}`,nM=`#define MATCAP
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
}`,iM=`#define MATCAP
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
}`,rM=`#define NORMAL
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
}`,sM=`#define NORMAL
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
}`,aM=`#define PHONG
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
}`,oM=`#define PHONG
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
}`,lM=`#define STANDARD
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
}`,uM=`#define STANDARD
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
}`,cM=`#define TOON
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
}`,fM=`#define TOON
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
}`,hM=`uniform float size;
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
}`,dM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 color;
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
}`,gM=`uniform float rotation;
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
}`,vM=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:kx,alphahash_pars_fragment:zx,alphamap_fragment:Bx,alphamap_pars_fragment:Vx,alphatest_fragment:Hx,alphatest_pars_fragment:Gx,aomap_fragment:Wx,aomap_pars_fragment:Xx,batching_pars_vertex:qx,batching_vertex:Yx,begin_vertex:jx,beginnormal_vertex:$x,bsdfs:Kx,iridescence_fragment:Zx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:ey,clipping_planes_pars_vertex:ty,clipping_planes_vertex:ny,color_fragment:iy,color_pars_fragment:ry,color_pars_vertex:sy,color_vertex:ay,common:oy,cube_uv_reflection_fragment:ly,defaultnormal_vertex:uy,displacementmap_pars_vertex:cy,displacementmap_vertex:fy,emissivemap_fragment:hy,emissivemap_pars_fragment:dy,colorspace_fragment:py,colorspace_pars_fragment:my,envmap_fragment:gy,envmap_common_pars_fragment:vy,envmap_pars_fragment:_y,envmap_pars_vertex:xy,envmap_physical_pars_fragment:Py,envmap_vertex:yy,fog_vertex:Sy,fog_pars_vertex:My,fog_fragment:Ey,fog_pars_fragment:wy,gradientmap_pars_fragment:Ty,lightmap_pars_fragment:by,lights_lambert_fragment:Ay,lights_lambert_pars_fragment:Ry,lights_pars_begin:Cy,lights_toon_fragment:Ny,lights_toon_pars_fragment:Ly,lights_phong_fragment:Dy,lights_phong_pars_fragment:Iy,lights_physical_fragment:Uy,lights_physical_pars_fragment:Fy,lights_fragment_begin:Oy,lights_fragment_maps:ky,lights_fragment_end:zy,lightprobes_pars_fragment:By,logdepthbuf_fragment:Vy,logdepthbuf_pars_fragment:Hy,logdepthbuf_pars_vertex:Gy,logdepthbuf_vertex:Wy,map_fragment:Xy,map_pars_fragment:qy,map_particle_fragment:Yy,map_particle_pars_fragment:jy,metalnessmap_fragment:$y,metalnessmap_pars_fragment:Ky,morphinstance_vertex:Zy,morphcolor_vertex:Qy,morphnormal_vertex:Jy,morphtarget_pars_vertex:eS,morphtarget_vertex:tS,normal_fragment_begin:nS,normal_fragment_maps:iS,normal_pars_fragment:rS,normal_pars_vertex:sS,normal_vertex:aS,normalmap_pars_fragment:oS,clearcoat_normal_fragment_begin:lS,clearcoat_normal_fragment_maps:uS,clearcoat_pars_fragment:cS,iridescence_pars_fragment:fS,opaque_fragment:hS,packing:dS,premultiplied_alpha_fragment:pS,project_vertex:mS,dithering_fragment:gS,dithering_pars_fragment:vS,roughnessmap_fragment:_S,roughnessmap_pars_fragment:xS,shadowmap_pars_fragment:yS,shadowmap_pars_vertex:SS,shadowmap_vertex:MS,shadowmask_pars_fragment:ES,skinbase_vertex:wS,skinning_pars_vertex:TS,skinning_vertex:bS,skinnormal_vertex:AS,specularmap_fragment:RS,specularmap_pars_fragment:CS,tonemapping_fragment:PS,tonemapping_pars_fragment:NS,transmission_fragment:LS,transmission_pars_fragment:DS,uv_pars_fragment:IS,uv_pars_vertex:US,uv_vertex:FS,worldpos_vertex:OS,background_vert:kS,background_frag:zS,backgroundCube_vert:BS,backgroundCube_frag:VS,cube_vert:HS,cube_frag:GS,depth_vert:WS,depth_frag:XS,distance_vert:qS,distance_frag:YS,equirect_vert:jS,equirect_frag:$S,linedashed_vert:KS,linedashed_frag:ZS,meshbasic_vert:QS,meshbasic_frag:JS,meshlambert_vert:eM,meshlambert_frag:tM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:rM,meshnormal_frag:sM,meshphong_vert:aM,meshphong_frag:oM,meshphysical_vert:lM,meshphysical_frag:uM,meshtoon_vert:cM,meshtoon_frag:fM,points_vert:hM,points_frag:dM,shadow_vert:pM,shadow_frag:mM,sprite_vert:gM,sprite_frag:vM},ze={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Bi={basic:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:kn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:kn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new gt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:kn([ze.points,ze.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:kn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:kn([ze.common,ze.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:kn([ze.sprite,ze.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:kn([ze.common,ze.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:kn([ze.lights,ze.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Bi.physical={uniforms:kn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Zl={r:0,b:0,g:0},_M=new jt,mg=new mt;mg.set(-1,0,0,0,1,0,0,0,1);function xM(s,e,t,r,o,l){const c=new gt(0);let d=o===!0?0:1,f,p,_=null,v=0,g=null;function S(I){let O=I.isScene===!0?I.background:null;if(O&&O.isTexture){const C=I.backgroundBlurriness>0;O=e.get(O,C)}return O}function w(I){let O=!1;const C=S(I);C===null?y(c,d):C&&C.isColor&&(y(C,1),O=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(I,O){const C=S(O);C&&(C.isCubeTexture||C.mapping===vu)?(p===void 0&&(p=new Nt(new Li(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:pa(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,N,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(_M.makeRotationFromEuler(O.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(mg),p.material.toneMapped=Et.getTransfer(C.colorSpace)!==Ot,(_!==C||v!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=C,v=C.version,g=s.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(f===void 0&&(f=new Nt(new $n(2,2),new Nn({name:"BackgroundMaterial",uniforms:pa(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=C,f.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,f.material.toneMapped=Et.getTransfer(C.colorSpace)!==Ot,C.matrixAutoUpdate===!0&&C.updateMatrix(),f.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||v!==C.version||g!==s.toneMapping)&&(f.material.needsUpdate=!0,_=C,v=C.version,g=s.toneMapping),f.layers.enableAll(),I.unshift(f,f.geometry,f.material,0,0,null))}function y(I,O){I.getRGB(Zl,ug(s)),t.buffers.color.setClear(Zl.r,Zl.g,Zl.b,O,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(I,O=1){c.set(I),d=O,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,y(c,d)},render:w,addToRenderList:T,dispose:x}}function yM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function d(k,B,te,le,j){let ue=!1;const K=v(k,le,te,B);l!==K&&(l=K,p(l.object)),ue=S(k,le,te,j),ue&&w(k,le,te,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,C(k,B,te,le),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return s.createVertexArray()}function p(k){return s.bindVertexArray(k)}function _(k){return s.deleteVertexArray(k)}function v(k,B,te,le){const j=le.wireframe===!0;let ue=r[B.id];ue===void 0&&(ue={},r[B.id]=ue);const K=k.isInstancedMesh===!0?k.id:0;let q=ue[K];q===void 0&&(q={},ue[K]=q);let ae=q[te.id];ae===void 0&&(ae={},q[te.id]=ae);let fe=ae[j];return fe===void 0&&(fe=g(f()),ae[j]=fe),fe}function g(k){const B=[],te=[],le=[];for(let j=0;j<t;j++)B[j]=0,te[j]=0,le[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:te,attributeDivisors:le,object:k,attributes:{},index:null}}function S(k,B,te,le){const j=l.attributes,ue=B.attributes;let K=0;const q=te.getAttributes();for(const ae in q)if(q[ae].location>=0){const U=j[ae];let J=ue[ae];if(J===void 0&&(ae==="instanceMatrix"&&k.instanceMatrix&&(J=k.instanceMatrix),ae==="instanceColor"&&k.instanceColor&&(J=k.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;K++}return l.attributesNum!==K||l.index!==le}function w(k,B,te,le){const j={},ue=B.attributes;let K=0;const q=te.getAttributes();for(const ae in q)if(q[ae].location>=0){let U=ue[ae];U===void 0&&(ae==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),ae==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),j[ae]=J,K++}l.attributes=j,l.attributesNum=K,l.index=le}function T(){const k=l.newAttributes;for(let B=0,te=k.length;B<te;B++)k[B]=0}function y(k){x(k,0)}function x(k,B){const te=l.newAttributes,le=l.enabledAttributes,j=l.attributeDivisors;te[k]=1,le[k]===0&&(s.enableVertexAttribArray(k),le[k]=1),j[k]!==B&&(s.vertexAttribDivisor(k,B),j[k]=B)}function I(){const k=l.newAttributes,B=l.enabledAttributes;for(let te=0,le=B.length;te<le;te++)B[te]!==k[te]&&(s.disableVertexAttribArray(te),B[te]=0)}function O(k,B,te,le,j,ue,K){K===!0?s.vertexAttribIPointer(k,B,te,j,ue):s.vertexAttribPointer(k,B,te,le,j,ue)}function C(k,B,te,le){T();const j=le.attributes,ue=te.getAttributes(),K=B.defaultAttributeValues;for(const q in ue){const ae=ue[q];if(ae.location>=0){let fe=j[q];if(fe===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(fe=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(fe=k.instanceColor)),fe!==void 0){const U=fe.normalized,J=fe.itemSize,Oe=e.get(fe);if(Oe===void 0)continue;const We=Oe.buffer,Be=Oe.type,oe=Oe.bytesPerElement,_e=Be===s.INT||Be===s.UNSIGNED_INT||fe.gpuType===Xh;if(fe.isInterleavedBufferAttribute){const G=fe.data,me=G.stride,xe=fe.offset;if(G.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ae.locationSize;Fe++)x(ae.location+Fe,G.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Fe=0;Fe<ae.locationSize;Fe++)y(ae.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,We);for(let Fe=0;Fe<ae.locationSize;Fe++)O(ae.location+Fe,J/ae.locationSize,Be,U,me*oe,(xe+J/ae.locationSize*Fe)*oe,_e)}else{if(fe.isInstancedBufferAttribute){for(let G=0;G<ae.locationSize;G++)x(ae.location+G,fe.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let G=0;G<ae.locationSize;G++)y(ae.location+G);s.bindBuffer(s.ARRAY_BUFFER,We);for(let G=0;G<ae.locationSize;G++)O(ae.location+G,J/ae.locationSize,Be,U,J*oe,J/ae.locationSize*G*oe,_e)}}else if(K!==void 0){const U=K[q];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(ae.location,U);break;case 3:s.vertexAttrib3fv(ae.location,U);break;case 4:s.vertexAttrib4fv(ae.location,U);break;default:s.vertexAttrib1fv(ae.location,U)}}}}I()}function D(){P();for(const k in r){const B=r[k];for(const te in B){const le=B[te];for(const j in le){const ue=le[j];for(const K in ue)_(ue[K].object),delete ue[K];delete le[j]}}delete r[k]}}function N(k){if(r[k.id]===void 0)return;const B=r[k.id];for(const te in B){const le=B[te];for(const j in le){const ue=le[j];for(const K in ue)_(ue[K].object),delete ue[K];delete le[j]}}delete r[k.id]}function R(k){for(const B in r){const te=r[B];for(const le in te){const j=te[le];if(j[k.id]===void 0)continue;const ue=j[k.id];for(const K in ue)_(ue[K].object),delete ue[K];delete j[k.id]}}}function M(k){for(const B in r){const te=r[B],le=k.isInstancedMesh===!0?k.id:0,j=te[le];if(j!==void 0){for(const ue in j){const K=j[ue];for(const q in K)_(K[q].object),delete K[q];delete j[ue]}delete te[le],Object.keys(te).length===0&&delete r[B]}}}function P(){V(),c=!0,l!==o&&(l=o,p(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:P,resetDefaultState:V,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:T,enableAttribute:y,disableUnusedAttributes:I}}function SM(s,e,t){let r;function o(f){r=f}function l(f,p){s.drawArrays(r,f,p),t.update(p,r,1)}function c(f,p,_){_!==0&&(s.drawArraysInstanced(r,f,p,_),t.update(p,r,_))}function d(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function MM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(R){return!(R!==Ni&&r.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(R){const M=R===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ai&&r.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Hi&&!M)}function f(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=f(p);_!==p&&(ft("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:C,maxSamples:D,samples:N}}function EM(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new us,d=new mt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||o;return o=g,r=v.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){t=_(v,g,0)},this.setState=function(v,g,S){const w=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,x=s.get(v);if(!o||w===null||w.length===0||l&&!y)l?_(null):p();else{const I=l?0:r,O=I*4;let C=x.clippingState||null;f.value=C,C=_(w,g,O,S);for(let D=0;D!==O;++D)C[D]=t[D];x.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,S,w){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=f.value,w!==!0||y===null){const x=S+T*4,I=g.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<x)&&(y=new Float32Array(x));for(let O=0,C=S;O!==T;++O,C+=4)c.copy(v[O]).applyMatrix4(I,d),c.normal.toArray(y,C),y[C+3]=c.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const Or=4,g0=[.125,.215,.35,.446,.526,.582],fs=20,wM=256,lo=new Mu,v0=new gt;let Of=null,kf=0,zf=0,Bf=!1;const TM=new $;class _0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:d=TM}=l;Of=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,o,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Of,kf,zf),this._renderer.xr.enabled=Bf,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Of=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:oi,format:Ni,colorSpace:cu,depthBuffer:!1},o=x0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bM(l)),this._blurMaterial=RM(l,e,t),this._ggxMaterial=AM(l,e,t)}return o}_compileMaterial(e){const t=new Nt(new Dn,e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,r,o,l){const f=new si(90,1,t,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(v0),v.toneMapping=qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new Li,new zn({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let x=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,x=!0):(y.color.copy(v0),x=!0);for(let O=0;O<6;O++){const C=O%3;C===0?(f.up.set(0,p[O],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+_[O],l.y,l.z)):C===1?(f.up.set(0,0,p[O]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+_[O],l.z)):(f.up.set(0,p[O],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+_[O]));const D=this._cubeSize;sa(o,C*D,O>2?D:0,D,D),v.setRenderTarget(o),x&&v.render(T,f),v.render(e,f)}v.toneMapping=S,v.autoClear=g,e.background=I}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ps||e.mapping===fa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=S0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;sa(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,lo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:w}=this,T=this._sizeLods[r],y=3*T*(r>w-Or?r-w+Or:0),x=4*(this._cubeSize-T);f.envMap.value=e.texture,f.roughness.value=S,f.mipInt.value=w-t,sa(l,y,x,3*T,2*T),o.setRenderTarget(l),o.render(d,lo),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=w-r,sa(e,y,x,3*T,2*T),o.setRenderTarget(e),o.render(d,lo)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,d){const f=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*fs-1),T=l/w,y=isFinite(l)?1+Math.floor(_*T):fs;y>fs&&ft(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${fs}`);const x=[];let I=0;for(let R=0;R<fs;++R){const M=R/T,P=Math.exp(-M*M/2);x.push(P),R===0?I+=P:R<y&&(I+=2*P)}for(let R=0;R<x.length;R++)x[R]=x[R]/I;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=c==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:O}=this;g.dTheta.value=w,g.mipInt.value=O-r;const C=this._sizeLods[o],D=3*C*(o>O-Or?o-O+Or:0),N=4*(this._cubeSize-C);sa(t,D,N,3*C,2*C),f.setRenderTarget(t),f.render(v,lo)}}function bM(s){const e=[],t=[],r=[];let o=s;const l=s-Or+1+g0.length;for(let c=0;c<l;c++){const d=Math.pow(2,o);e.push(d);let f=1/d;c>s-Or?f=g0[c-s+Or-1]:c===0&&(f=0),t.push(f);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,w=6,T=3,y=2,x=1,I=new Float32Array(T*w*S),O=new Float32Array(y*w*S),C=new Float32Array(x*w*S);for(let N=0;N<S;N++){const R=N%3*2/3-1,M=N>2?0:-1,P=[R,M,0,R+2/3,M,0,R+2/3,M+1,0,R,M,0,R+2/3,M+1,0,R,M+1,0];I.set(P,T*w*N),O.set(g,y*w*N);const V=[N,N,N,N,N,N];C.set(V,x*w*N)}const D=new Dn;D.setAttribute("position",new _i(I,T)),D.setAttribute("uv",new _i(O,y)),D.setAttribute("faceIndex",new _i(C,x)),r.push(new Nt(D,null)),o>Or&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function x0(s,e,t){const r=new Kn(s,e,t);return r.texture.mapping=vu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function sa(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function AM(s,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function RM(s,e,t){const r=new Float32Array(fs),o=new $(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function y0(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function S0(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Eu(){return`

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
	`}class gg extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new og(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Li(5,5,5),l=new Nn({name:"CubemapFromEquirect",uniforms:pa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Xi});l.uniforms.tEquirect.value=t;const c=new Nt(o,l),d=t.minFilter;return t.minFilter===hs&&(t.minFilter=Pn),new Nx(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function CM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?c(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===lf||S===uf)if(e.has(g)){const w=e.get(g).texture;return d(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const T=new gg(w.height);return T.fromEquirectangularTexture(s,g),e.set(g,T),g.addEventListener("dispose",p),d(T.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const S=g.mapping,w=S===lf||S===uf,T=S===ps||S===fa;if(w||T){let y=t.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new _0(s)),y=w?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const I=g.image;return w&&I&&I.height>0||T&&I&&f(I)?(r===null&&(r=new _0(s)),y=w?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function d(g,S){return S===lf?g.mapping=ps:S===uf&&(g.mapping=fa),g}function f(g){let S=0;const w=6;for(let T=0;T<w;T++)g[T]!==void 0&&S++;return S===w}function p(g){const S=g.target;S.removeEventListener("dispose",p);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function PM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&oa("WebGLRenderer: "+r+" extension not supported."),o}}}function NM(s,e,t,r){const o={},l=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",c),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(v,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function f(v){const g=v.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,w=v.attributes.position;let T=0;if(w===void 0)return;if(S!==null){const I=S.array;T=S.version;for(let O=0,C=I.length;O<C;O+=3){const D=I[O+0],N=I[O+1],R=I[O+2];g.push(D,N,N,R,R,D)}}else{const I=w.array;T=w.version;for(let O=0,C=I.length/3-1;O<C;O+=3){const D=O+0,N=O+1,R=O+2;g.push(D,N,N,R,R,D)}}const y=new(w.count>=65535?ig:ng)(g,1);y.version=T;const x=l.get(v);x&&e.remove(x),l.set(v,y)}function _(v){const g=l.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:d,update:f,getWireframeAttribute:_}}function LM(s,e,t){let r;function o(v){r=v}let l,c;function d(v){l=v.type,c=v.bytesPerElement}function f(v,g){s.drawElements(r,g,l,v*c),t.update(g,r,1)}function p(v,g,S){S!==0&&(s.drawElementsInstanced(r,g,l,v*c,S),t.update(g,r,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,v,0,S);let T=0;for(let y=0;y<S;y++)T+=g[y];t.update(T,r,1)}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=_}function DM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Tt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function IM(s,e,t){const r=new WeakMap,o=new nn;function l(c,d,f){const p=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(d);if(g===void 0||g.count!==v){let V=function(){M.dispose(),r.delete(d),d.removeEventListener("dispose",V)};var S=V;g!==void 0&&g.texture.dispose();const w=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let C=0;w===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let D=d.attributes.position.count*C,N=1;D>e.maxTextureSize&&(N=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const R=new Float32Array(D*N*4*v),M=new eg(R,D,N,v);M.type=Hi,M.needsUpdate=!0;const P=C*4;for(let k=0;k<v;k++){const B=x[k],te=I[k],le=O[k],j=D*N*4*k;for(let ue=0;ue<B.count;ue++){const K=ue*P;w===!0&&(o.fromBufferAttribute(B,ue),R[j+K+0]=o.x,R[j+K+1]=o.y,R[j+K+2]=o.z,R[j+K+3]=0),T===!0&&(o.fromBufferAttribute(te,ue),R[j+K+4]=o.x,R[j+K+5]=o.y,R[j+K+6]=o.z,R[j+K+7]=0),y===!0&&(o.fromBufferAttribute(le,ue),R[j+K+8]=o.x,R[j+K+9]=o.y,R[j+K+10]=o.z,R[j+K+11]=le.itemSize===4?o.w:1)}}g={count:v,texture:M,size:new rt(D,N)},r.set(d,g),d.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let w=0;for(let y=0;y<p.length;y++)w+=p[y];const T=d.morphTargetsRelative?1:1-w;f.getUniforms().setValue(s,"morphTargetBaseInfluence",T),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function UM(s,e,t,r,o){let l=new WeakMap;function c(p){const _=o.render.frame,v=p.geometry,g=e.get(p,v);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==_&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==_&&(S.update(),l.set(S,_))}return g}function d(){l=new WeakMap}function f(p){const _=p.target;_.removeEventListener("dispose",f),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:c,dispose:d}}const FM={[zh]:"LINEAR_TONE_MAPPING",[Bh]:"REINHARD_TONE_MAPPING",[Vh]:"CINEON_TONE_MAPPING",[gu]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Wh]:"NEUTRAL_TONE_MAPPING",[Hh]:"CUSTOM_TONE_MAPPING"};function OM(s,e,t,r,o,l){const c=new Kn(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,depthTexture:o?new ha(e,t):void 0}),d=new Kn(e,t,{type:oi,depthBuffer:!1,stencilBuffer:!1}),f=new Dn;f.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new un([0,2,0,0,2,0],2));const p=new cg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Nt(f,p),v=new Mu(-1,1,1,-1,0,1);let g=null,S=null,w=!1,T,y=null,x=[],I=!1;this.setSize=function(O,C){c.setSize(O,C),d.setSize(O,C);for(let D=0;D<x.length;D++){const N=x[D];N.setSize&&N.setSize(O,C)}},this.setEffects=function(O){x=O,I=x.length>0&&x[0].isRenderPass===!0;const C=c.width,D=c.height;for(let N=0;N<x.length;N++){const R=x[N];R.setSize&&R.setSize(C,D)}},this.begin=function(O,C){if(w||O.toneMapping===qi&&x.length===0)return!1;if(y=C,C!==null){const D=C.width,N=C.height;(c.width!==D||c.height!==N)&&this.setSize(D,N)}return I===!1&&O.setRenderTarget(c),T=O.toneMapping,O.toneMapping=qi,!0},this.hasRenderPass=function(){return I},this.end=function(O,C){O.toneMapping=T,w=!0;let D=c,N=d;for(let R=0;R<x.length;R++){const M=x[R];if(M.enabled!==!1&&(M.render(O,N,D,C),M.needsSwap!==!1)){const P=D;D=N,N=P}}if(g!==O.outputColorSpace||S!==O.toneMapping){g=O.outputColorSpace,S=O.toneMapping,p.defines={},Et.getTransfer(g)===Ot&&(p.defines.SRGB_TRANSFER="");const R=FM[S];R&&(p.defines[R]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,O.setRenderTarget(y),O.render(_,v),y=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),f.dispose(),p.dispose()}}const vg=new Ln,Uh=new ha(1,1),_g=new eg,xg=new J_,yg=new og,M0=[],E0=[],w0=new Float32Array(16),T0=new Float32Array(9),b0=new Float32Array(4);function va(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=M0[o];if(l===void 0&&(l=new Float32Array(o),M0[o]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(l,d)}return l}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function dn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function wu(s,e){let t=E0[e];t===void 0&&(t=new Int32Array(e),E0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function kM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),dn(t,e)}}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),dn(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),dn(t,e)}}function HM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,r))return;b0.set(r),s.uniformMatrix2fv(this.addr,!1,b0),dn(t,r)}}function GM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,r))return;T0.set(r),s.uniformMatrix3fv(this.addr,!1,T0),dn(t,r)}}function WM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,r))return;w0.set(r),s.uniformMatrix4fv(this.addr,!1,w0),dn(t,r)}}function XM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function qM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),dn(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),dn(t,e)}}function jM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),dn(t,e)}}function $M(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function KM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),dn(t,e)}}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),dn(t,e)}}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),dn(t,e)}}function JM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Uh.compareFunction=t.isReversedDepthBuffer()?Qh:Zh,l=Uh):l=vg,t.setTexture2D(e||l,o)}function e1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||xg,o)}function t1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||yg,o)}function n1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||_g,o)}function i1(s){switch(s){case 5126:return kM;case 35664:return zM;case 35665:return BM;case 35666:return VM;case 35674:return HM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return qM;case 35668:case 35672:return YM;case 35669:case 35673:return jM;case 5125:return $M;case 36294:return KM;case 36295:return ZM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}function r1(s,e){s.uniform1fv(this.addr,e)}function s1(s,e){const t=va(e,this.size,2);s.uniform2fv(this.addr,t)}function a1(s,e){const t=va(e,this.size,3);s.uniform3fv(this.addr,t)}function o1(s,e){const t=va(e,this.size,4);s.uniform4fv(this.addr,t)}function l1(s,e){const t=va(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function u1(s,e){const t=va(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function c1(s,e){const t=va(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function f1(s,e){s.uniform1iv(this.addr,e)}function h1(s,e){s.uniform2iv(this.addr,e)}function d1(s,e){s.uniform3iv(this.addr,e)}function p1(s,e){s.uniform4iv(this.addr,e)}function m1(s,e){s.uniform1uiv(this.addr,e)}function g1(s,e){s.uniform2uiv(this.addr,e)}function v1(s,e){s.uniform3uiv(this.addr,e)}function _1(s,e){s.uniform4uiv(this.addr,e)}function x1(s,e,t){const r=this.cache,o=e.length,l=wu(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Uh:c=vg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,l[d])}function y1(s,e,t){const r=this.cache,o=e.length,l=wu(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||xg,l[c])}function S1(s,e,t){const r=this.cache,o=e.length,l=wu(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||yg,l[c])}function M1(s,e,t){const r=this.cache,o=e.length,l=wu(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||_g,l[c])}function E1(s){switch(s){case 5126:return r1;case 35664:return s1;case 35665:return a1;case 35666:return o1;case 35674:return l1;case 35675:return u1;case 35676:return c1;case 5124:case 35670:return f1;case 35667:case 35671:return h1;case 35668:case 35672:return d1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return v1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return M1}}class w1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=i1(t.type)}}class T1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E1(t.type)}}class b1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const Vf=/(\w+)(\])?(\[|\.)?/g;function A0(s,e){s.seq.push(e),s.map[e.id]=e}function A1(s,e,t){const r=s.name,o=r.length;for(Vf.lastIndex=0;;){const l=Vf.exec(r),c=Vf.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&c+2===o){A0(t,p===void 0?new w1(d,s,e):new T1(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new b1(d),A0(t,v)),t=v}}}class au{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),f=e.getUniformLocation(t,d.name);A1(d,f,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function R0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const R1=37297;let C1=0;function P1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const C0=new mt;function N1(s){Et._getMatrix(C0,Et.workingColorSpace,s);const e=`mat3( ${C0.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case fu:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function P0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+P1(s.getShaderSource(e),d)}else return l}function L1(s,e){const t=N1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const D1={[zh]:"Linear",[Bh]:"Reinhard",[Vh]:"Cineon",[gu]:"ACESFilmic",[Gh]:"AgX",[Wh]:"Neutral",[Hh]:"Custom"};function I1(s,e){const t=D1[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new $;function U1(){Et.getLuminanceCoefficients(Ql);const s=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function O1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function k1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function ho(s){return s!==""}function N0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function L0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(s){return s.replace(z1,V1)}const B1=new Map;function V1(s,e){let t=_t[e];if(t===void 0){const r=B1.get(e);if(r!==void 0)t=_t[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fh(t)}const H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D0(s){return s.replace(H1,G1)}function G1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function I0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const W1={[tu]:"SHADOWMAP_TYPE_PCF",[fo]:"SHADOWMAP_TYPE_VSM"};function X1(s){return W1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q1={[ps]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE",[vu]:"ENVMAP_TYPE_CUBE_UV"};function Y1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":q1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const j1={[fa]:"ENVMAP_MODE_REFRACTION"};function $1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":j1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const K1={[W0]:"ENVMAP_BLENDING_MULTIPLY",[L_]:"ENVMAP_BLENDING_MIX",[D_]:"ENVMAP_BLENDING_ADD"};function Z1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":K1[s.combine]||"ENVMAP_BLENDING_NONE"}function Q1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function J1(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=X1(t),p=Y1(t),_=$1(t),v=Z1(t),g=Q1(t),S=F1(t),w=O1(l),T=o.createProgram();let y,x,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ho).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ho).join(`
`),x.length>0&&(x+=`
`)):(y=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),x=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?_t.tonemapping_pars_fragment:"",t.toneMapping!==qi?I1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,L1("linearToOutputTexel",t.outputColorSpace),U1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),c=Fh(c),c=N0(c,t),c=L0(c,t),d=Fh(d),d=N0(d,t),d=L0(d,t),c=D0(c),d=D0(d),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=I+y+c,C=I+x+d,D=R0(o,o.VERTEX_SHADER,O),N=R0(o,o.FRAGMENT_SHADER,C);o.attachShader(T,D),o.attachShader(T,N),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function R(k){if(s.debug.checkShaderErrors){const B=o.getProgramInfoLog(T)||"",te=o.getShaderInfoLog(D)||"",le=o.getShaderInfoLog(N)||"",j=B.trim(),ue=te.trim(),K=le.trim();let q=!0,ae=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,D,N);else{const fe=P0(o,D,"vertex"),U=P0(o,N,"fragment");Tt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+j+`
`+fe+`
`+U)}else j!==""?ft("WebGLProgram: Program Info Log:",j):(ue===""||K==="")&&(ae=!1);ae&&(k.diagnostics={runnable:q,programLog:j,vertexShader:{log:ue,prefix:y},fragmentShader:{log:K,prefix:x}})}o.deleteShader(D),o.deleteShader(N),M=new au(o,T),P=k1(o,T)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let P;this.getAttributes=function(){return P===void 0&&R(this),P};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(T,R1)),V},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=D,this.fragmentShader=N,this}let eE=0;class tE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new nE(e),t.set(e,r)),r}}class nE{constructor(e){this.id=eE++,this.code=e,this.usedTimes=0}}function iE(s){return s===ms||s===lu||s===uu}function rE(s,e,t,r,o,l){const c=new ed,d=new tE,f=new Set,p=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(M){return f.add(M),M===0?"uv":`uv${M}`}function T(M,P,V,k,B,te){const le=k.fog,j=B.geometry,ue=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,q=e.get(M.envMap||ue,K),ae=q&&q.mapping===vu?q.image.height:null,fe=S[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&ft("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const U=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,J=U!==void 0?U.length:0;let Oe=0;j.morphAttributes.position!==void 0&&(Oe=1),j.morphAttributes.normal!==void 0&&(Oe=2),j.morphAttributes.color!==void 0&&(Oe=3);let We,Be,oe,_e;if(fe){const Ye=Bi[fe];We=Ye.vertexShader,Be=Ye.fragmentShader}else{We=M.vertexShader,Be=M.fragmentShader;const Ye=d.getVertexShaderStage(M),Bt=d.getFragmentShaderStage(M);d.update(M,Ye,Bt),oe=Ye.id,_e=Bt.id}const G=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),xe=B.isInstancedMesh===!0,Fe=B.isBatchedMesh===!0,At=!!M.map,st=!!M.matcap,vt=!!q,lt=!!M.aoMap,Ge=!!M.lightMap,It=!!M.bumpMap&&M.wireframe===!1,Rt=!!M.normalMap,Ce=!!M.displacementMap,ct=!!M.emissiveMap,Le=!!M.metalnessMap,Ct=!!M.roughnessMap,W=M.anisotropy>0,Wt=M.clearcoat>0,wt=M.dispersion>0,L=M.iridescence>0,E=M.sheen>0,Q=M.transmission>0,se=W&&!!M.anisotropyMap,de=Wt&&!!M.clearcoatMap,Ee=Wt&&!!M.clearcoatNormalMap,be=Wt&&!!M.clearcoatRoughnessMap,pe=L&&!!M.iridescenceMap,ge=L&&!!M.iridescenceThicknessMap,Pe=E&&!!M.sheenColorMap,Qe=E&&!!M.sheenRoughnessMap,Ue=!!M.specularMap,De=!!M.specularColorMap,nt=!!M.specularIntensityMap,it=Q&&!!M.transmissionMap,ut=Q&&!!M.thicknessMap,X=!!M.gradientMap,Ne=!!M.alphaMap,ve=M.alphaTest>0,Ie=!!M.alphaHash,ke=!!M.extensions;let ye=qi;M.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ye=s.toneMapping);const $e={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:Be,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Fe,batchingColor:Fe&&B._colorsTexture!==null,instancing:xe,instancingColor:xe&&B.instanceColor!==null,instancingMorph:xe&&B.morphTexture!==null,outputColorSpace:G===null?s.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:At,matcap:st,envMap:vt,envMapMode:vt&&q.mapping,envMapCubeUVHeight:ae,aoMap:lt,lightMap:Ge,bumpMap:It,normalMap:Rt,displacementMap:Ce,emissiveMap:ct,normalMapObjectSpace:Rt&&M.normalMapType===F_,normalMapTangentSpace:Rt&&M.normalMapType===Ph,packedNormalMap:Rt&&M.normalMapType===Ph&&iE(M.normalMap.format),metalnessMap:Le,roughnessMap:Ct,anisotropy:W,anisotropyMap:se,clearcoat:Wt,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:be,dispersion:wt,iridescence:L,iridescenceMap:pe,iridescenceThicknessMap:ge,sheen:E,sheenColorMap:Pe,sheenRoughnessMap:Qe,specularMap:Ue,specularColorMap:De,specularIntensityMap:nt,transmission:Q,transmissionMap:it,thicknessMap:ut,gradientMap:X,opaque:M.transparent===!1&&M.blending===aa&&M.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:Ie,combine:M.combine,mapUv:At&&w(M.map.channel),aoMapUv:lt&&w(M.aoMap.channel),lightMapUv:Ge&&w(M.lightMap.channel),bumpMapUv:It&&w(M.bumpMap.channel),normalMapUv:Rt&&w(M.normalMap.channel),displacementMapUv:Ce&&w(M.displacementMap.channel),emissiveMapUv:ct&&w(M.emissiveMap.channel),metalnessMapUv:Le&&w(M.metalnessMap.channel),roughnessMapUv:Ct&&w(M.roughnessMap.channel),anisotropyMapUv:se&&w(M.anisotropyMap.channel),clearcoatMapUv:de&&w(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&w(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&w(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&w(M.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&w(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&w(M.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&w(M.sheenRoughnessMap.channel),specularMapUv:Ue&&w(M.specularMap.channel),specularColorMapUv:De&&w(M.specularColorMap.channel),specularIntensityMapUv:nt&&w(M.specularIntensityMap.channel),transmissionMapUv:it&&w(M.transmissionMap.channel),thicknessMapUv:ut&&w(M.thicknessMap.channel),alphaMapUv:Ne&&w(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Rt||W),vertexNormals:!!j.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(At||Ne),fog:!!le,useFog:M.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||j.attributes.normal===void 0&&Rt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:me,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Oe,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:At&&M.map.isVideoTexture===!0&&Et.getTransfer(M.map.colorSpace)===Ot,decodeVideoTextureEmissive:ct&&M.emissiveMap.isVideoTexture===!0&&Et.getTransfer(M.emissiveMap.colorSpace)===Ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pi,flipSided:M.side===Bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $e.vertexUv1s=f.has(1),$e.vertexUv2s=f.has(2),$e.vertexUv3s=f.has(3),f.clear(),$e}function y(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)P.push(V),P.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(x(P,M),I(P,M),P.push(s.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function x(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function I(M,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),P.packedNormalMap&&c.enable(22),P.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),P.numLightProbeGrids>0&&c.enable(22),P.hasPositionAttribute&&c.enable(23),M.push(c.mask)}function O(M){const P=S[M.type];let V;if(P){const k=Bi[P];V=yo.clone(k.uniforms)}else V=M.uniforms;return V}function C(M,P){let V=_.get(P);return V!==void 0?++V.usedTimes:(V=new J1(s,P,M,o),p.push(V),_.set(P,V)),V}function D(M){if(--M.usedTimes===0){const P=p.indexOf(M);p[P]=p[p.length-1],p.pop(),_.delete(M.cacheKey),M.destroy()}}function N(M){d.remove(M)}function R(){d.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:O,acquireProgram:C,releaseProgram:D,releaseShaderCache:N,programs:p,dispose:R}}function sE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function o(c,d,f){s.get(c)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function aE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function U0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function F0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,w,T,y,x){let I=s[e];return I===void 0?(I={id:g.id,object:g,geometry:S,material:w,materialVariant:c(g),groupOrder:T,renderOrder:g.renderOrder,z:y,group:x},s[e]=I):(I.id=g.id,I.object=g,I.geometry=S,I.material=w,I.materialVariant=c(g),I.groupOrder=T,I.renderOrder=g.renderOrder,I.z=y,I.group=x),e++,I}function f(g,S,w,T,y,x){const I=d(g,S,w,T,y,x);w.transmission>0?r.push(I):w.transparent===!0?o.push(I):t.push(I)}function p(g,S,w,T,y,x){const I=d(g,S,w,T,y,x);w.transmission>0?r.unshift(I):w.transparent===!0?o.unshift(I):t.unshift(I)}function _(g,S,w){t.length>1&&t.sort(g||aE),r.length>1&&r.sort(S||U0),o.length>1&&o.sort(S||U0),w&&(t.reverse(),r.reverse(),o.reverse())}function v(){for(let g=e,S=s.length;g<S;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:p,finish:v,sort:_}}function oE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new F0,s.set(r,[c])):o>=l.length?(c=new F0,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function lE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new gt};break;case"SpotLight":t={position:new $,direction:new $,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=t,t}}}function uE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let cE=0;function fE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hE(s){const e=new lE,t=uE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const o=new $,l=new jt,c=new jt;function d(p){let _=0,v=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,w=0,T=0,y=0,x=0,I=0,O=0,C=0,D=0,N=0,R=0;p.sort(fE);for(let P=0,V=p.length;P<V;P++){const k=p[P],B=k.color,te=k.intensity,le=k.distance;let j=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ms?j=k.shadow.map.texture:j=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=B.r*te,v+=B.g*te,g+=B.b*te;else if(k.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(k.sh.coefficients[ue],te);R++}else if(k.isDirectionalLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const K=k.shadow,q=t.get(k);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=j,r.directionalShadowMatrix[S]=k.shadow.matrix,I++}r.directional[S]=ue,S++}else if(k.isSpotLight){const ue=e.get(k);ue.position.setFromMatrixPosition(k.matrixWorld),ue.color.copy(B).multiplyScalar(te),ue.distance=le,ue.coneCos=Math.cos(k.angle),ue.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ue.decay=k.decay,r.spot[T]=ue;const K=k.shadow;if(k.map&&(r.spotLightMap[D]=k.map,D++,K.updateMatrices(k),k.castShadow&&N++),r.spotLightMatrix[T]=K.matrix,k.castShadow){const q=t.get(k);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.spotShadow[T]=q,r.spotShadowMap[T]=j,C++}T++}else if(k.isRectAreaLight){const ue=e.get(k);ue.color.copy(B).multiplyScalar(te),ue.halfWidth.set(k.width*.5,0,0),ue.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=ue,y++}else if(k.isPointLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),ue.distance=k.distance,ue.decay=k.decay,k.castShadow){const K=k.shadow,q=t.get(k);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,r.pointShadow[w]=q,r.pointShadowMap[w]=j,r.pointShadowMatrix[w]=k.shadow.matrix,O++}r.point[w]=ue,w++}else if(k.isHemisphereLight){const ue=e.get(k);ue.skyColor.copy(k.color).multiplyScalar(te),ue.groundColor.copy(k.groundColor).multiplyScalar(te),r.hemi[x]=ue,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==S||M.pointLength!==w||M.spotLength!==T||M.rectAreaLength!==y||M.hemiLength!==x||M.numDirectionalShadows!==I||M.numPointShadows!==O||M.numSpotShadows!==C||M.numSpotMaps!==D||M.numLightProbes!==R)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=w,r.hemi.length=x,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=C+D-N,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=R,M.directionalLength=S,M.pointLength=w,M.spotLength=T,M.rectAreaLength=y,M.hemiLength=x,M.numDirectionalShadows=I,M.numPointShadows=O,M.numSpotShadows=C,M.numSpotMaps=D,M.numLightProbes=R,r.version=cE++)}function f(p,_){let v=0,g=0,S=0,w=0,T=0;const y=_.matrixWorldInverse;for(let x=0,I=p.length;x<I;x++){const O=p[x];if(O.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),v++}else if(O.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),S++}else if(O.isRectAreaLight){const C=r.rectArea[w];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(O.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(O.width*.5,0,0),C.halfHeight.set(0,O.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),w++}else if(O.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(y),g++}else if(O.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(O.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:d,setupView:f,state:r}}function O0(s){const e=new hE(s),t=[],r=[],o=[];function l(g){v.camera=g,t.length=0,r.length=0,o.length=0}function c(g){t.push(g)}function d(g){r.push(g)}function f(g){o.push(g)}function p(){e.setup(t)}function _(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:p,setupLightsView:_,pushLight:c,pushShadow:d,pushLightProbeGrid:f}}function dE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new O0(s),e.set(o,[d])):l>=c.length?(d=new O0(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const pE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mE=`uniform sampler2D shadow_pass;
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
}`,gE=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],vE=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],k0=new jt,uo=new $,Hf=new $;function _E(s,e,t){let r=new id;const o=new rt,l=new rt,c=new nn,d=new wx,f=new Tx,p={},_=t.maxTextureSize,v={[zr]:Bn,[Bn]:zr,[Pi]:Pi},g=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:pE,fragmentShader:mE}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const w=new Dn;w.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Nt(w,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let x=this.type;this.render=function(N,R,M){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===G0&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tu);const P=s.getRenderTarget(),V=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Xi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const te=x!==this.type;te&&R.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(j=>j.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,j=N.length;le<j;le++){const ue=N[le],K=ue.shadow;if(K===void 0){ft("WebGLShadowMap:",ue,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const q=K.getFrameExtents();o.multiply(q),l.copy(K.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/q.x),o.x=l.x*q.x,K.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/q.y),o.y=l.y*q.y,K.mapSize.y=l.y));const ae=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=ae,K.map===null||te===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===fo){if(ue.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Kn(o.x,o.y,{format:ms,type:oi,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),K.map.texture.name=ue.name+".shadowMap",K.map.depthTexture=new ha(o.x,o.y,Hi),K.map.depthTexture.name=ue.name+".shadowMapDepth",K.map.depthTexture.format=cr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Sn,K.map.depthTexture.magFilter=Sn}else ue.isPointLight?(K.map=new gg(o.x),K.map.depthTexture=new yx(o.x,Yi)):(K.map=new Kn(o.x,o.y),K.map.depthTexture=new ha(o.x,o.y,Yi)),K.map.depthTexture.name=ue.name+".shadowMap",K.map.depthTexture.format=cr,this.type===tu?(K.map.depthTexture.compareFunction=ae?Qh:Zh,K.map.depthTexture.minFilter=Pn,K.map.depthTexture.magFilter=Pn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Sn,K.map.depthTexture.magFilter=Sn);K.camera.updateProjectionMatrix()}const fe=K.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<fe;U++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,U),s.clear();else{U===0&&(s.setRenderTarget(K.map),s.clear());const J=K.getViewport(U);c.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),B.viewport(c)}if(ue.isPointLight){const J=K.camera,Oe=K.matrix,We=ue.distance||J.far;We!==J.far&&(J.far=We,J.updateProjectionMatrix()),uo.setFromMatrixPosition(ue.matrixWorld),J.position.copy(uo),Hf.copy(J.position),Hf.add(gE[U]),J.up.copy(vE[U]),J.lookAt(Hf),J.updateMatrixWorld(),Oe.makeTranslation(-uo.x,-uo.y,-uo.z),k0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),K._frustum.setFromProjectionMatrix(k0,J.coordinateSystem,J.reversedDepth)}else K.updateMatrices(ue);r=K.getFrustum(),C(R,M,K.camera,ue,this.type)}K.isPointLightShadow!==!0&&this.type===fo&&I(K,M),K.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(P,V,k)};function I(N,R){const M=e.update(T);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Kn(o.x,o.y,{format:ms,type:oi})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(R,null,M,g,T,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(R,null,M,S,T,null)}function O(N,R,M,P){let V=null;const k=M.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)V=k;else if(V=M.isPointLight===!0?f:d,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=V.uuid,te=R.uuid;let le=p[B];le===void 0&&(le={},p[B]=le);let j=le[te];j===void 0&&(j=V.clone(),le[te]=j,R.addEventListener("dispose",D)),V=j}if(V.visible=R.visible,V.wireframe=R.wireframe,P===fo?V.side=R.shadowSide!==null?R.shadowSide:R.side:V.side=R.shadowSide!==null?R.shadowSide:v[R.side],V.alphaMap=R.alphaMap,V.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,V.map=R.map,V.clipShadows=R.clipShadows,V.clippingPlanes=R.clippingPlanes,V.clipIntersection=R.clipIntersection,V.displacementMap=R.displacementMap,V.displacementScale=R.displacementScale,V.displacementBias=R.displacementBias,V.wireframeLinewidth=R.wireframeLinewidth,V.linewidth=R.linewidth,M.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const B=s.properties.get(V);B.light=M}return V}function C(N,R,M,P,V){if(N.visible===!1)return;if(N.layers.test(R.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===fo)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,N.matrixWorld);const te=e.update(N),le=N.material;if(Array.isArray(le)){const j=te.groups;for(let ue=0,K=j.length;ue<K;ue++){const q=j[ue],ae=le[q.materialIndex];if(ae&&ae.visible){const fe=O(N,ae,P,V);N.onBeforeShadow(s,N,R,M,te,fe,q),s.renderBufferDirect(M,null,te,fe,N,q),N.onAfterShadow(s,N,R,M,te,fe,q)}}}else if(le.visible){const j=O(N,le,P,V);N.onBeforeShadow(s,N,R,M,te,j,null),s.renderBufferDirect(M,null,te,j,N,null),N.onAfterShadow(s,N,R,M,te,j,null)}}const B=N.children;for(let te=0,le=B.length;te<le;te++)C(B[te],R,M,P,V)}function D(N){N.target.removeEventListener("dispose",D);for(const M in p){const P=p[M],V=N.target.uuid;V in P&&(P[V].dispose(),delete P[V])}}}function xE(s,e){function t(){let X=!1;const Ne=new nn;let ve=null;const Ie=new nn(0,0,0,0);return{setMask:function(ke){ve!==ke&&!X&&(s.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){X=ke},setClear:function(ke,ye,$e,Ye,Bt){Bt===!0&&(ke*=Ye,ye*=Ye,$e*=Ye),Ne.set(ke,ye,$e,Ye),Ie.equals(Ne)===!1&&(s.clearColor(ke,ye,$e,Ye),Ie.copy(Ne))},reset:function(){X=!1,ve=null,Ie.set(-1,0,0,0)}}}function r(){let X=!1,Ne=!1,ve=null,Ie=null,ke=null;return{setReversed:function(ye){if(Ne!==ye){const $e=e.get("EXT_clip_control");ye?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ne=ye;const Ye=ke;ke=null,this.setClear(Ye)}},getReversed:function(){return Ne},setTest:function(ye){ye?G(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(ye){ve!==ye&&!X&&(s.depthMask(ye),ve=ye)},setFunc:function(ye){if(Ne&&(ye=q_[ye]),Ie!==ye){switch(ye){case qf:s.depthFunc(s.NEVER);break;case Yf:s.depthFunc(s.ALWAYS);break;case jf:s.depthFunc(s.LESS);break;case ca:s.depthFunc(s.LEQUAL);break;case $f:s.depthFunc(s.EQUAL);break;case Kf:s.depthFunc(s.GEQUAL);break;case Zf:s.depthFunc(s.GREATER);break;case Qf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=ye}},setLocked:function(ye){X=ye},setClear:function(ye){ke!==ye&&(ke=ye,Ne&&(ye=1-ye),s.clearDepth(ye))},reset:function(){X=!1,ve=null,Ie=null,ke=null,Ne=!1}}}function o(){let X=!1,Ne=null,ve=null,Ie=null,ke=null,ye=null,$e=null,Ye=null,Bt=null;return{setTest:function(Ut){X||(Ut?G(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(Ut){Ne!==Ut&&!X&&(s.stencilMask(Ut),Ne=Ut)},setFunc:function(Ut,Mn,li){(ve!==Ut||Ie!==Mn||ke!==li)&&(s.stencilFunc(Ut,Mn,li),ve=Ut,Ie=Mn,ke=li)},setOp:function(Ut,Mn,li){(ye!==Ut||$e!==Mn||Ye!==li)&&(s.stencilOp(Ut,Mn,li),ye=Ut,$e=Mn,Ye=li)},setLocked:function(Ut){X=Ut},setClear:function(Ut){Bt!==Ut&&(s.clearStencil(Ut),Bt=Ut)},reset:function(){X=!1,Ne=null,ve=null,Ie=null,ke=null,ye=null,$e=null,Ye=null,Bt=null}}}const l=new t,c=new r,d=new o,f=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,w=[],T=null,y=!1,x=null,I=null,O=null,C=null,D=null,N=null,R=null,M=new gt(0,0,0),P=0,V=!1,k=null,B=null,te=null,le=null,j=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,q=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ae)[1]),K=q>=1):ae.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),K=q>=2);let fe=null,U={};const J=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),We=new nn().fromArray(J),Be=new nn().fromArray(Oe);function oe(X,Ne,ve,Ie){const ke=new Uint8Array(4),ye=s.createTexture();s.bindTexture(X,ye),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<ve;$e++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Ne+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return ye}const _e={};_e[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),G(s.DEPTH_TEST),c.setFunc(ca),It(!1),Rt(Om),G(s.CULL_FACE),lt(Xi);function G(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function me(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function xe(X,Ne){return g[X]!==Ne?(s.bindFramebuffer(X,Ne),g[X]=Ne,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ne),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Fe(X,Ne){let ve=w,Ie=!1;if(X){ve=S.get(Ne),ve===void 0&&(ve=[],S.set(Ne,ve));const ke=X.textures;if(ve.length!==ke.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,$e=ke.length;ye<$e;ye++)ve[ye]=s.COLOR_ATTACHMENT0+ye;ve.length=ke.length,Ie=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ve)}function At(X){return T!==X?(s.useProgram(X),T=X,!0):!1}const st={[cs]:s.FUNC_ADD,[m_]:s.FUNC_SUBTRACT,[g_]:s.FUNC_REVERSE_SUBTRACT};st[v_]=s.MIN,st[__]=s.MAX;const vt={[x_]:s.ZERO,[y_]:s.ONE,[S_]:s.SRC_COLOR,[Wf]:s.SRC_ALPHA,[A_]:s.SRC_ALPHA_SATURATE,[T_]:s.DST_COLOR,[E_]:s.DST_ALPHA,[M_]:s.ONE_MINUS_SRC_COLOR,[Xf]:s.ONE_MINUS_SRC_ALPHA,[b_]:s.ONE_MINUS_DST_COLOR,[w_]:s.ONE_MINUS_DST_ALPHA,[R_]:s.CONSTANT_COLOR,[C_]:s.ONE_MINUS_CONSTANT_COLOR,[P_]:s.CONSTANT_ALPHA,[N_]:s.ONE_MINUS_CONSTANT_ALPHA};function lt(X,Ne,ve,Ie,ke,ye,$e,Ye,Bt,Ut){if(X===Xi){y===!0&&(me(s.BLEND),y=!1);return}if(y===!1&&(G(s.BLEND),y=!0),X!==p_){if(X!==x||Ut!==V){if((I!==cs||D!==cs)&&(s.blendEquation(s.FUNC_ADD),I=cs,D=cs),Ut)switch(X){case aa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ua:s.blendFunc(s.ONE,s.ONE);break;case km:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",X);break}else switch(X){case aa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ua:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case km:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zm:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",X);break}O=null,C=null,N=null,R=null,M.set(0,0,0),P=0,x=X,V=Ut}return}ke=ke||Ne,ye=ye||ve,$e=$e||Ie,(Ne!==I||ke!==D)&&(s.blendEquationSeparate(st[Ne],st[ke]),I=Ne,D=ke),(ve!==O||Ie!==C||ye!==N||$e!==R)&&(s.blendFuncSeparate(vt[ve],vt[Ie],vt[ye],vt[$e]),O=ve,C=Ie,N=ye,R=$e),(Ye.equals(M)===!1||Bt!==P)&&(s.blendColor(Ye.r,Ye.g,Ye.b,Bt),M.copy(Ye),P=Bt),x=X,V=!1}function Ge(X,Ne){X.side===Pi?me(s.CULL_FACE):G(s.CULL_FACE);let ve=X.side===Bn;Ne&&(ve=!ve),It(ve),X.blending===aa&&X.transparent===!1?lt(Xi):lt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const Ie=X.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ct(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?G(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function It(X){k!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),k=X)}function Rt(X){X!==h_?(G(s.CULL_FACE),X!==B&&(X===Om?s.cullFace(s.BACK):X===d_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),B=X}function Ce(X){X!==te&&(K&&s.lineWidth(X),te=X)}function ct(X,Ne,ve){X?(G(s.POLYGON_OFFSET_FILL),(le!==Ne||j!==ve)&&(le=Ne,j=ve,c.getReversed()&&(Ne=-Ne),s.polygonOffset(Ne,ve))):me(s.POLYGON_OFFSET_FILL)}function Le(X){X?G(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function Ct(X){X===void 0&&(X=s.TEXTURE0+ue-1),fe!==X&&(s.activeTexture(X),fe=X)}function W(X,Ne,ve){ve===void 0&&(fe===null?ve=s.TEXTURE0+ue-1:ve=fe);let Ie=U[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},U[ve]=Ie),(Ie.type!==X||Ie.texture!==Ne)&&(fe!==ve&&(s.activeTexture(ve),fe=ve),s.bindTexture(X,Ne||_e[X]),Ie.type=X,Ie.texture=Ne)}function Wt(){const X=U[fe];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function wt(){try{s.compressedTexImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function E(){try{s.texSubImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Q(){try{s.texSubImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function se(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Ee(){try{s.texStorage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function be(){try{s.texStorage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function pe(){try{s.texImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function ge(){try{s.texImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Pe(X){return v[X]!==void 0?v[X]:s.getParameter(X)}function Qe(X,Ne){v[X]!==Ne&&(s.pixelStorei(X,Ne),v[X]=Ne)}function Ue(X){We.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),We.copy(X))}function De(X){Be.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Be.copy(X))}function nt(X,Ne){let ve=p.get(Ne);ve===void 0&&(ve=new WeakMap,p.set(Ne,ve));let Ie=ve.get(X);Ie===void 0&&(Ie=s.getUniformBlockIndex(Ne,X.name),ve.set(X,Ie))}function it(X,Ne){const Ie=p.get(Ne).get(X);f.get(Ne)!==Ie&&(s.uniformBlockBinding(Ne,Ie,X.__bindingPointIndex),f.set(Ne,Ie))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},v={},fe=null,U={},g={},S=new WeakMap,w=[],T=null,y=!1,x=null,I=null,O=null,C=null,D=null,N=null,R=null,M=new gt(0,0,0),P=0,V=!1,k=null,B=null,te=null,le=null,j=null,We.set(0,0,s.canvas.width,s.canvas.height),Be.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:G,disable:me,bindFramebuffer:xe,drawBuffers:Fe,useProgram:At,setBlending:lt,setMaterial:Ge,setFlipSided:It,setCullFace:Rt,setLineWidth:Ce,setPolygonOffset:ct,setScissorTest:Le,activeTexture:Ct,bindTexture:W,unbindTexture:Wt,compressedTexImage2D:wt,compressedTexImage3D:L,texImage2D:pe,texImage3D:ge,pixelStorei:Qe,getParameter:Pe,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:Ee,texStorage3D:be,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:Ue,viewport:De,reset:ut}}function yE(s,e,t,r,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new rt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,E){return w?new OffscreenCanvas(L,E):hu("canvas")}function y(L,E,Q){let se=1;const de=wt(L);if((de.width>Q||de.height>Q)&&(se=Q/Math.max(de.width,de.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ee=Math.floor(se*de.width),be=Math.floor(se*de.height);g===void 0&&(g=T(Ee,be));const pe=E?T(Ee,be):g;return pe.width=Ee,pe.height=be,pe.getContext("2d").drawImage(L,0,0,Ee,be),ft("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ee+"x"+be+")."),pe}else return"data"in L&&ft("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),L;return L}function x(L){return L.generateMipmaps}function I(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(L,E,Q,se,de,Ee=!1){if(L!==null){if(s[L]!==void 0)return s[L];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let be;se&&(be=e.get("EXT_texture_norm16"),be||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=E;if(E===s.RED&&(Q===s.FLOAT&&(pe=s.R32F),Q===s.HALF_FLOAT&&(pe=s.R16F),Q===s.UNSIGNED_BYTE&&(pe=s.R8),Q===s.UNSIGNED_SHORT&&be&&(pe=be.R16_EXT),Q===s.SHORT&&be&&(pe=be.R16_SNORM_EXT)),E===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.R8UI),Q===s.UNSIGNED_SHORT&&(pe=s.R16UI),Q===s.UNSIGNED_INT&&(pe=s.R32UI),Q===s.BYTE&&(pe=s.R8I),Q===s.SHORT&&(pe=s.R16I),Q===s.INT&&(pe=s.R32I)),E===s.RG&&(Q===s.FLOAT&&(pe=s.RG32F),Q===s.HALF_FLOAT&&(pe=s.RG16F),Q===s.UNSIGNED_BYTE&&(pe=s.RG8),Q===s.UNSIGNED_SHORT&&be&&(pe=be.RG16_EXT),Q===s.SHORT&&be&&(pe=be.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RG8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RG16UI),Q===s.UNSIGNED_INT&&(pe=s.RG32UI),Q===s.BYTE&&(pe=s.RG8I),Q===s.SHORT&&(pe=s.RG16I),Q===s.INT&&(pe=s.RG32I)),E===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),Q===s.UNSIGNED_INT&&(pe=s.RGB32UI),Q===s.BYTE&&(pe=s.RGB8I),Q===s.SHORT&&(pe=s.RGB16I),Q===s.INT&&(pe=s.RGB32I)),E===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),Q===s.UNSIGNED_INT&&(pe=s.RGBA32UI),Q===s.BYTE&&(pe=s.RGBA8I),Q===s.SHORT&&(pe=s.RGBA16I),Q===s.INT&&(pe=s.RGBA32I)),E===s.RGB&&(Q===s.UNSIGNED_SHORT&&be&&(pe=be.RGB16_EXT),Q===s.SHORT&&be&&(pe=be.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),E===s.RGBA){const ge=Ee?fu:Et.getTransfer(de);Q===s.FLOAT&&(pe=s.RGBA32F),Q===s.HALF_FLOAT&&(pe=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(pe=ge===Ot?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&be&&(pe=be.RGBA16_EXT),Q===s.SHORT&&be&&(pe=be.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function D(L,E){let Q;return L?E===null||E===Yi||E===_o?Q=s.DEPTH24_STENCIL8:E===Hi?Q=s.DEPTH32F_STENCIL8:E===vo&&(Q=s.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===_o?Q=s.DEPTH_COMPONENT24:E===Hi?Q=s.DEPTH_COMPONENT32F:E===vo&&(Q=s.DEPTH_COMPONENT16),Q}function N(L,E){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Sn&&L.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function R(L){const E=L.target;E.removeEventListener("dispose",R),P(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function M(L){const E=L.target;E.removeEventListener("dispose",M),k(E)}function P(L){const E=r.get(L);if(E.__webglInit===void 0)return;const Q=L.source,se=S.get(Q);if(se){const de=se[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&V(L),Object.keys(se).length===0&&S.delete(Q)}r.remove(L)}function V(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const Q=L.source,se=S.get(Q);delete se[E.__cacheKey],c.memory.textures--}function k(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let de=0;de<E.__webglFramebuffer[se].length;de++)s.deleteFramebuffer(E.__webglFramebuffer[se][de]);else s.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)s.deleteFramebuffer(E.__webglFramebuffer[se]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=L.textures;for(let se=0,de=Q.length;se<de;se++){const Ee=r.get(Q[se]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),c.memory.textures--),r.remove(Q[se])}r.remove(L)}let B=0;function te(){B=0}function le(){return B}function j(L){B=L}function ue(){const L=B;return L>=o.maxTextures&&ft("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),B+=1,L}function K(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function q(L,E){const Q=r.get(L);if(L.isVideoTexture&&W(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const se=L.image;if(se===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{me(Q,L,E);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+E)}function ae(L,E){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){me(Q,L,E);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+E)}function fe(L,E){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){me(Q,L,E);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+E)}function U(L,E){const Q=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Q.__version!==L.version){xe(Q,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+E)}const J={[go]:s.REPEAT,[lr]:s.CLAMP_TO_EDGE,[Jf]:s.MIRRORED_REPEAT},Oe={[Sn]:s.NEAREST,[I_]:s.NEAREST_MIPMAP_NEAREST,[bl]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[cf]:s.LINEAR_MIPMAP_NEAREST,[hs]:s.LINEAR_MIPMAP_LINEAR},We={[O_]:s.NEVER,[H_]:s.ALWAYS,[k_]:s.LESS,[Zh]:s.LEQUAL,[z_]:s.EQUAL,[Qh]:s.GEQUAL,[B_]:s.GREATER,[V_]:s.NOTEQUAL};function Be(L,E){if(E.type===Hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===cf||E.magFilter===bl||E.magFilter===hs||E.minFilter===Pn||E.minFilter===cf||E.minFilter===bl||E.minFilter===hs)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,J[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Oe[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Oe[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,We[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==bl&&E.minFilter!==hs||E.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function oe(L,E){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",R));const se=E.source;let de=S.get(se);de===void 0&&(de={},S.set(se,de));const Ee=K(E);if(Ee!==L.__cacheKey){de[Ee]===void 0&&(de[Ee]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),de[Ee].usedTimes++;const be=de[L.__cacheKey];be!==void 0&&(de[L.__cacheKey].usedTimes--,be.usedTimes===0&&V(E)),L.__cacheKey=Ee,L.__webglTexture=de[Ee].texture}return Q}function _e(L,E,Q){return Math.floor(Math.floor(L/Q)/E)}function G(L,E,Q,se){const Ee=L.updateRanges;if(Ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Q,se,E.data);else{Ee.sort((Qe,Ue)=>Qe.start-Ue.start);let be=0;for(let Qe=1;Qe<Ee.length;Qe++){const Ue=Ee[be],De=Ee[Qe],nt=Ue.start+Ue.count,it=_e(De.start,E.width,4),ut=_e(Ue.start,E.width,4);De.start<=nt+1&&it===ut&&_e(De.start+De.count-1,E.width,4)===it?Ue.count=Math.max(Ue.count,De.start+De.count-Ue.start):(++be,Ee[be]=De)}Ee.length=be+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),Pe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Qe=0,Ue=Ee.length;Qe<Ue;Qe++){const De=Ee[Qe],nt=Math.floor(De.start/4),it=Math.ceil(De.count/4),ut=nt%E.width,X=Math.floor(nt/E.width),Ne=it,ve=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(s.UNPACK_SKIP_ROWS,X),t.texSubImage2D(s.TEXTURE_2D,0,ut,X,Ne,ve,Q,se,E.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function me(L,E,Q){let se=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=s.TEXTURE_3D);const de=oe(L,E),Ee=E.source;t.bindTexture(se,L.__webglTexture,s.TEXTURE0+Q);const be=r.get(Ee);if(Ee.version!==be.__version||de===!0){if(t.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=Et.getPrimaries(Et.workingColorSpace),Ie=E.colorSpace===Fr?null:Et.getPrimaries(E.colorSpace),ke=E.colorSpace===Fr||ve===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ge=y(E.image,!1,o.maxTextureSize);ge=Wt(E,ge);const Pe=l.convert(E.format,E.colorSpace),Qe=l.convert(E.type);let Ue=C(E.internalFormat,Pe,Qe,E.normalized,E.colorSpace,E.isVideoTexture);Be(se,E);let De;const nt=E.mipmaps,it=E.isVideoTexture!==!0,ut=be.__version===void 0||de===!0,X=Ee.dataReady,Ne=N(E,ge);if(E.isDepthTexture)Ue=D(E.format===ds,E.type),ut&&(it?t.texStorage2D(s.TEXTURE_2D,1,Ue,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Ue,ge.width,ge.height,0,Pe,Qe,null));else if(E.isDataTexture)if(nt.length>0){it&&ut&&t.texStorage2D(s.TEXTURE_2D,Ne,Ue,nt[0].width,nt[0].height);for(let ve=0,Ie=nt.length;ve<Ie;ve++)De=nt[ve],it?X&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,De.width,De.height,Pe,Qe,De.data):t.texImage2D(s.TEXTURE_2D,ve,Ue,De.width,De.height,0,Pe,Qe,De.data);E.generateMipmaps=!1}else it?(ut&&t.texStorage2D(s.TEXTURE_2D,Ne,Ue,ge.width,ge.height),X&&G(E,ge,Pe,Qe)):t.texImage2D(s.TEXTURE_2D,0,Ue,ge.width,ge.height,0,Pe,Qe,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Ue,nt[0].width,nt[0].height,ge.depth);for(let ve=0,Ie=nt.length;ve<Ie;ve++)if(De=nt[ve],E.format!==Ni)if(Pe!==null)if(it){if(X)if(E.layerUpdates.size>0){const ke=m0(De.width,De.height,E.format,E.type);for(const ye of E.layerUpdates){const $e=De.data.subarray(ye*ke/De.data.BYTES_PER_ELEMENT,(ye+1)*ke/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,ye,De.width,De.height,1,Pe,$e)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,De.width,De.height,ge.depth,Pe,De.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Ue,De.width,De.height,ge.depth,0,De.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,De.width,De.height,ge.depth,Pe,Qe,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,Ue,De.width,De.height,ge.depth,0,Pe,Qe,De.data)}else{it&&ut&&t.texStorage2D(s.TEXTURE_2D,Ne,Ue,nt[0].width,nt[0].height);for(let ve=0,Ie=nt.length;ve<Ie;ve++)De=nt[ve],E.format!==Ni?Pe!==null?it?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,De.width,De.height,Pe,De.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,Ue,De.width,De.height,0,De.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,De.width,De.height,Pe,Qe,De.data):t.texImage2D(s.TEXTURE_2D,ve,Ue,De.width,De.height,0,Pe,Qe,De.data)}else if(E.isDataArrayTexture)if(it){if(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Ue,ge.width,ge.height,ge.depth),X)if(E.layerUpdates.size>0){const ve=m0(ge.width,ge.height,E.format,E.type);for(const Ie of E.layerUpdates){const ke=ge.data.subarray(Ie*ve/ge.data.BYTES_PER_ELEMENT,(Ie+1)*ve/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ie,ge.width,ge.height,1,Pe,Qe,ke)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Pe,Qe,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,ge.width,ge.height,ge.depth,0,Pe,Qe,ge.data);else if(E.isData3DTexture)it?(ut&&t.texStorage3D(s.TEXTURE_3D,Ne,Ue,ge.width,ge.height,ge.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Pe,Qe,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,ge.width,ge.height,ge.depth,0,Pe,Qe,ge.data);else if(E.isFramebufferTexture){if(ut)if(it)t.texStorage2D(s.TEXTURE_2D,Ne,Ue,ge.width,ge.height);else{let ve=ge.width,Ie=ge.height;for(let ke=0;ke<Ne;ke++)t.texImage2D(s.TEXTURE_2D,ke,Ue,ve,Ie,0,Pe,Qe,null),ve>>=1,Ie>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),ge.parentNode!==ve){ve.appendChild(ge),v.add(E),ve.onpaint=Ie=>{const ke=Ie.changedElements;for(const ye of v)ke.includes(ye.image)&&(ye.needsUpdate=!0)},ve.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const ke=s.RGBA,ye=s.RGBA,$e=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ke,ye,$e,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&ut){const ve=wt(nt[0]);t.texStorage2D(s.TEXTURE_2D,Ne,Ue,ve.width,ve.height)}for(let ve=0,Ie=nt.length;ve<Ie;ve++)De=nt[ve],it?X&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Pe,Qe,De):t.texImage2D(s.TEXTURE_2D,ve,Ue,Pe,Qe,De);E.generateMipmaps=!1}else if(it){if(ut){const ve=wt(ge);t.texStorage2D(s.TEXTURE_2D,Ne,Ue,ve.width,ve.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Qe,ge)}else t.texImage2D(s.TEXTURE_2D,0,Ue,Pe,Qe,ge);x(E)&&I(se),be.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function xe(L,E,Q){if(E.image.length!==6)return;const se=oe(L,E),de=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Q);const Ee=r.get(de);if(de.version!==Ee.__version||se===!0){t.activeTexture(s.TEXTURE0+Q);const be=Et.getPrimaries(Et.workingColorSpace),pe=E.colorSpace===Fr?null:Et.getPrimaries(E.colorSpace),ge=E.colorSpace===Fr||be===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,Qe=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let ye=0;ye<6;ye++)!Pe&&!Qe?Ue[ye]=y(E.image[ye],!0,o.maxCubemapSize):Ue[ye]=Qe?E.image[ye].image:E.image[ye],Ue[ye]=Wt(E,Ue[ye]);const De=Ue[0],nt=l.convert(E.format,E.colorSpace),it=l.convert(E.type),ut=C(E.internalFormat,nt,it,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Ne=Ee.__version===void 0||se===!0,ve=de.dataReady;let Ie=N(E,De);Be(s.TEXTURE_CUBE_MAP,E);let ke;if(Pe){X&&Ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ut,De.width,De.height);for(let ye=0;ye<6;ye++){ke=Ue[ye].mipmaps;for(let $e=0;$e<ke.length;$e++){const Ye=ke[$e];E.format!==Ni?nt!==null?X?ve&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,0,0,Ye.width,Ye.height,nt,Ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,ut,Ye.width,Ye.height,0,Ye.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,0,0,Ye.width,Ye.height,nt,it,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,ut,Ye.width,Ye.height,0,nt,it,Ye.data)}}}else{if(ke=E.mipmaps,X&&Ne){ke.length>0&&Ie++;const ye=wt(Ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ut,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Qe){X?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ue[ye].width,Ue[ye].height,nt,it,Ue[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ut,Ue[ye].width,Ue[ye].height,0,nt,it,Ue[ye].data);for(let $e=0;$e<ke.length;$e++){const Bt=ke[$e].image[ye].image;X?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,0,0,Bt.width,Bt.height,nt,it,Bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,ut,Bt.width,Bt.height,0,nt,it,Bt.data)}}else{X?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,nt,it,Ue[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ut,nt,it,Ue[ye]);for(let $e=0;$e<ke.length;$e++){const Ye=ke[$e];X?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,0,0,nt,it,Ye.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,ut,nt,it,Ye.image[ye])}}}x(E)&&I(s.TEXTURE_CUBE_MAP),Ee.__version=de.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Fe(L,E,Q,se,de,Ee){const be=l.convert(Q.format,Q.colorSpace),pe=l.convert(Q.type),ge=C(Q.internalFormat,be,pe,Q.normalized,Q.colorSpace),Pe=r.get(E),Qe=r.get(Q);if(Qe.__renderTarget=E,!Pe.__hasExternalTextures){const Ue=Math.max(1,E.width>>Ee),De=Math.max(1,E.height>>Ee);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,Ee,ge,Ue,De,E.depth,0,be,pe,null):t.texImage2D(de,Ee,ge,Ue,De,0,be,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Ct(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,de,Qe.__webglTexture,0,Le(E)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,de,Qe.__webglTexture,Ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function At(L,E,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const se=E.depthTexture,de=se&&se.isDepthTexture?se.type:null,Ee=D(E.stencilBuffer,de),be=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ct(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le(E),Ee,E.width,E.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le(E),Ee,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,L)}else{const se=E.textures;for(let de=0;de<se.length;de++){const Ee=se[de],be=l.convert(Ee.format,Ee.colorSpace),pe=l.convert(Ee.type),ge=C(Ee.internalFormat,be,pe,Ee.normalized,Ee.colorSpace);Ct(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le(E),ge,E.width,E.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le(E),ge,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ge,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(L,E,Q){const se=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=r.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Be(s.TEXTURE_CUBE_MAP,E.depthTexture);const Pe=l.convert(E.depthTexture.format),Qe=l.convert(E.depthTexture.type);let Ue;E.depthTexture.format===cr?Ue=s.DEPTH_COMPONENT24:E.depthTexture.format===ds&&(Ue=s.DEPTH24_STENCIL8);for(let De=0;De<6;De++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ue,E.width,E.height,0,Pe,Qe,null)}}else q(E.depthTexture,0);const Ee=de.__webglTexture,be=Le(E),pe=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,ge=E.depthTexture.format===ds?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===cr)Ct(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ee,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ee,0);else if(E.depthTexture.format===ds)Ct(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ee,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(L){const E=r.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const se=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",de)};se.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=se}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let se=0;se<6;se++)st(E.__webglFramebuffer[se],L,se);else{const se=L.texture.mipmaps;se&&se.length>0?st(E.__webglFramebuffer[0],L,0):st(E.__webglFramebuffer,L,0)}else if(Q){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=s.createRenderbuffer(),At(E.__webglDepthbuffer[se],L,!1);else{const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ee)}}else{const se=L.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),At(E.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(L,E,Q){const se=r.get(L);E!==void 0&&Fe(se.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&vt(L)}function Ge(L){const E=L.texture,Q=r.get(L),se=r.get(E);L.addEventListener("dispose",M);const de=L.textures,Ee=L.isWebGLCubeRenderTarget===!0,be=de.length>1;if(be||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=E.version,c.memory.textures++),Ee){Q.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[pe]=[];for(let ge=0;ge<E.mipmaps.length;ge++)Q.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else Q.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)Q.__webglFramebuffer[pe]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(be)for(let pe=0,ge=de.length;pe<ge;pe++){const Pe=r.get(de[pe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&Ct(L)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const ge=de[pe];Q.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[pe]);const Pe=l.convert(ge.format,ge.colorSpace),Qe=l.convert(ge.type),Ue=C(ge.internalFormat,Pe,Qe,ge.normalized,ge.colorSpace,L.isXRRenderTarget===!0),De=Le(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Ue,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,Q.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),At(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Be(s.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Fe(Q.__webglFramebuffer[pe][ge],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Fe(Q.__webglFramebuffer[pe],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(E)&&I(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let pe=0,ge=de.length;pe<ge;pe++){const Pe=de[pe],Qe=r.get(Pe);let Ue=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Qe.__webglTexture),Be(Ue,Pe),Fe(Q.__webglFramebuffer,L,Pe,s.COLOR_ATTACHMENT0+pe,Ue,0),x(Pe)&&I(Ue)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,se.__webglTexture),Be(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Fe(Q.__webglFramebuffer[ge],L,E,s.COLOR_ATTACHMENT0,pe,ge);else Fe(Q.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,pe,0);x(E)&&I(pe),t.unbindTexture()}L.depthBuffer&&vt(L)}function It(L){const E=L.textures;for(let Q=0,se=E.length;Q<se;Q++){const de=E[Q];if(x(de)){const Ee=O(L),be=r.get(de).__webglTexture;t.bindTexture(Ee,be),I(Ee),t.unbindTexture()}}}const Rt=[],Ce=[];function ct(L){if(L.samples>0){if(Ct(L)===!1){const E=L.textures,Q=L.width,se=L.height;let de=s.COLOR_BUFFER_BIT;const Ee=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=r.get(L),pe=E.length>1;if(pe)for(let Pe=0;Pe<E.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ge=L.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const Qe=r.get(E[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qe,0)}s.blitFramebuffer(0,0,Q,se,0,0,Q,se,de,s.NEAREST),f===!0&&(Rt.length=0,Ce.length=0,Rt.push(s.COLOR_ATTACHMENT0+Pe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Rt.push(Ee),Ce.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ce)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Pe=0;Pe<E.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);const Qe=r.get(E[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,Qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&f){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Le(L){return Math.min(o.maxSamples,L.samples)}function Ct(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(L){const E=c.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Wt(L,E){const Q=L.colorSpace,se=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==cu&&Q!==Fr&&(Et.getTransfer(Q)===Ot?(se!==Ni||de!==ai)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",Q)),E}function wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ue,this.resetTextureUnits=te,this.getTextureUnits=le,this.setTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=ae,this.setTexture3D=fe,this.setTextureCube=U,this.rebindTextures=lt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function SE(s,e){function t(r,o=Fr){let l;const c=Et.getTransfer(o);if(r===ai)return s.UNSIGNED_BYTE;if(r===qh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Yh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===j0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===$0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===q0)return s.BYTE;if(r===Y0)return s.SHORT;if(r===vo)return s.UNSIGNED_SHORT;if(r===Xh)return s.INT;if(r===Yi)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===oi)return s.HALF_FLOAT;if(r===K0)return s.ALPHA;if(r===Z0)return s.RGB;if(r===Ni)return s.RGBA;if(r===cr)return s.DEPTH_COMPONENT;if(r===ds)return s.DEPTH_STENCIL;if(r===Q0)return s.RED;if(r===jh)return s.RED_INTEGER;if(r===ms)return s.RG;if(r===$h)return s.RG_INTEGER;if(r===Kh)return s.RGBA_INTEGER;if(r===nu||r===iu||r===ru||r===su)if(c===Ot)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===nu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ru)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===su)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===nu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===iu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ru)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===su)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eh||r===th||r===nh||r===ih)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===eh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===th)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ih)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rh||r===sh||r===ah||r===oh||r===lh||r===lu||r===uh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===rh||r===sh)return c===Ot?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ah)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===oh)return l.COMPRESSED_R11_EAC;if(r===lh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===lu)return l.COMPRESSED_RG11_EAC;if(r===uh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ch||r===fh||r===hh||r===dh||r===ph||r===mh||r===gh||r===vh||r===_h||r===xh||r===yh||r===Sh||r===Mh||r===Eh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ch)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fh)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hh)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dh)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ph)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mh)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gh)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_h)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xh)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yh)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sh)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mh)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eh)return c===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wh||r===Th||r===bh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===wh)return c===Ot?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Th)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ah||r===Rh||r===uu||r===Ch)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ah)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Rh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uu)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ch)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_o?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const ME=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EE=`
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

}`;class wE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new lg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Nn({vertexShader:ME,fragmentShader:EE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new $n(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TE extends gs{constructor(e,t){super();const r=this;let o=null,l=1,c=null,d="local-floor",f=1,p=null,_=null,v=null,g=null,S=null,w=null;const T=typeof XRWebGLBinding<"u",y=new wE,x={},I=t.getContextAttributes();let O=null,C=null;const D=[],N=[],R=new rt;let M=null;const P=new si;P.viewport=new nn;const V=new si;V.viewport=new nn;const k=[P,V],B=new Lx;let te=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let _e=D[oe];return _e===void 0&&(_e=new _f,D[oe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(oe){let _e=D[oe];return _e===void 0&&(_e=new _f,D[oe]=_e),_e.getGripSpace()},this.getHand=function(oe){let _e=D[oe];return _e===void 0&&(_e=new _f,D[oe]=_e),_e.getHandSpace()};function j(oe){const _e=N.indexOf(oe.inputSource);if(_e===-1)return;const G=D[_e];G!==void 0&&(G.update(oe.inputSource,oe.frame,p||c),G.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ue(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",K);for(let oe=0;oe<D.length;oe++){const _e=N[oe];_e!==null&&(N[oe]=null,D[oe].disconnect(_e))}te=null,le=null,y.reset();for(const oe in x)delete x[oe];e.setRenderTarget(O),S=null,g=null,v=null,o=null,C=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){d=oe,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",K),I.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,me=null,xe=null;I.depth&&(xe=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=I.stencil?ds:cr,me=I.stencil?_o:Yi);const Fe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(Fe),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Kn(g.textureWidth,g.textureHeight,{format:Ni,type:ai,depthTexture:new ha(g.textureWidth,g.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const G={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,G),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Kn(S.framebufferWidth,S.framebufferHeight,{format:Ni,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await o.requestReferenceSpace(d),Be.setContext(o),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(oe){for(let _e=0;_e<oe.removed.length;_e++){const G=oe.removed[_e],me=N.indexOf(G);me>=0&&(N[me]=null,D[me].disconnect(G))}for(let _e=0;_e<oe.added.length;_e++){const G=oe.added[_e];let me=N.indexOf(G);if(me===-1){for(let Fe=0;Fe<D.length;Fe++)if(Fe>=N.length){N.push(G),me=Fe;break}else if(N[Fe]===null){N[Fe]=G,me=Fe;break}if(me===-1)break}const xe=D[me];xe&&xe.connect(G)}}const q=new $,ae=new $;function fe(oe,_e,G){q.setFromMatrixPosition(_e.matrixWorld),ae.setFromMatrixPosition(G.matrixWorld);const me=q.distanceTo(ae),xe=_e.projectionMatrix.elements,Fe=G.projectionMatrix.elements,At=xe[14]/(xe[10]-1),st=xe[14]/(xe[10]+1),vt=(xe[9]+1)/xe[5],lt=(xe[9]-1)/xe[5],Ge=(xe[8]-1)/xe[0],It=(Fe[8]+1)/Fe[0],Rt=At*Ge,Ce=At*It,ct=me/(-Ge+It),Le=ct*-Ge;if(_e.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Le),oe.translateZ(ct),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),xe[10]===-1)oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ct=At+ct,W=st+ct,Wt=Rt-Le,wt=Ce+(me-Le),L=vt*st/W*Ct,E=lt*st/W*Ct;oe.projectionMatrix.makePerspective(Wt,wt,L,E,Ct,W),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function U(oe,_e){_e===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(_e.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let _e=oe.near,G=oe.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(G=y.depthFar)),B.near=V.near=P.near=_e,B.far=V.far=P.far=G,(te!==B.near||le!==B.far)&&(o.updateRenderState({depthNear:B.near,depthFar:B.far}),te=B.near,le=B.far),B.layers.mask=oe.layers.mask|6,P.layers.mask=B.layers.mask&-5,V.layers.mask=B.layers.mask&-3;const me=oe.parent,xe=B.cameras;U(B,me);for(let Fe=0;Fe<xe.length;Fe++)U(xe[Fe],me);xe.length===2?fe(B,P,V):B.projectionMatrix.copy(P.projectionMatrix),J(oe,B,me)};function J(oe,_e,G){G===null?oe.matrix.copy(_e.matrixWorld):(oe.matrix.copy(G.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(_e.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Lh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(g===null&&S===null))return f},this.setFoveation=function(oe){f=oe,g!==null&&(g.fixedFoveation=oe),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(B)},this.getCameraTexture=function(oe){return x[oe]};let Oe=null;function We(oe,_e){if(_=_e.getViewerPose(p||c),w=_e,_!==null){const G=_.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let me=!1;G.length!==B.cameras.length&&(B.cameras.length=0,me=!0);for(let st=0;st<G.length;st++){const vt=G[st];let lt=null;if(S!==null)lt=S.getViewport(vt);else{const It=v.getViewSubImage(g,vt);lt=It.viewport,st===0&&(e.setRenderTargetTextures(C,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(C))}let Ge=k[st];Ge===void 0&&(Ge=new si,Ge.layers.enable(st),Ge.viewport=new nn,k[st]=Ge),Ge.matrix.fromArray(vt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(vt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(lt.x,lt.y,lt.width,lt.height),st===0&&(B.matrix.copy(Ge.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),me===!0&&B.cameras.push(Ge)}const xe=o.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=r.getBinding();const st=v.getDepthInformation(G[0]);st&&st.isValid&&st.texture&&y.init(st,o.renderState)}if(xe&&xe.includes("camera-access")&&T){e.state.unbindTexture(),v=r.getBinding();for(let st=0;st<G.length;st++){const vt=G[st].camera;if(vt){let lt=x[vt];lt||(lt=new lg,x[vt]=lt);const Ge=v.getCameraImage(vt);lt.sourceTexture=Ge}}}}for(let G=0;G<D.length;G++){const me=N[G],xe=D[G];me!==null&&xe!==void 0&&xe.update(me,_e,p||c)}Oe&&Oe(oe,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),w=null}const Be=new pg;Be.setAnimationLoop(We),this.setAnimationLoop=function(oe){Oe=oe},this.dispose=function(){}}}const bE=new jt,Sg=new mt;Sg.set(-1,0,0,0,1,0,0,0,1);function AE(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,ug(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,I,O,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),v(y,x)):x.isMeshPhongMaterial?(l(y,x),_(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),g(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(l(y,x),w(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),T(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?f(y,x,I,O):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Bn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Bn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const I=e.get(x),O=I.envMap,C=I.envMapRotation;O&&(y.envMap.value=O,y.envMapRotation.value.setFromMatrix4(bE.makeRotationFromEuler(C)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Sg),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function f(y,x,I,O){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*I,y.scale.value=O*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,I){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,x){x.matcap&&(y.matcap.value=x.matcap)}function T(y,x){const I=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function RE(s,e,t,r){let o={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(C,D){const N=D.program;r.uniformBlockBinding(C,N)}function p(C,D){let N=o[C.id];N===void 0&&(y(C),N=_(C),o[C.id]=N,C.addEventListener("dispose",I));const R=D.program;r.updateUBOMapping(C,R);const M=e.render.frame;l[C.id]!==M&&(g(C),l[C.id]=M)}function _(C){const D=v();C.__bindingPointIndex=D;const N=s.createBuffer(),R=C.__size,M=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,R,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,N),N}function v(){for(let C=0;C<d;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const D=o[C.id],N=C.uniforms,R=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let M=0,P=N.length;M<P;M++){const V=N[M];if(Array.isArray(V))for(let k=0,B=V.length;k<B;k++)S(V[k],M,k,R);else S(V,M,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,D,N,R){if(T(C,D,N,R)===!0){const M=C.__offset,P=C.value;if(Array.isArray(P)){let V=0;for(let k=0;k<P.length;k++){const B=P[k],te=x(B);w(B,C.__data,V),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(V+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(P,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,C.__data)}}function w(C,D,N){typeof C=="number"||typeof C=="boolean"?D[0]=C:C.isMatrix3?(D[0]=C.elements[0],D[1]=C.elements[1],D[2]=C.elements[2],D[3]=0,D[4]=C.elements[3],D[5]=C.elements[4],D[6]=C.elements[5],D[7]=0,D[8]=C.elements[6],D[9]=C.elements[7],D[10]=C.elements[8],D[11]=0):ArrayBuffer.isView(C)?D.set(new C.constructor(C.buffer,C.byteOffset,D.length)):C.toArray(D,N)}function T(C,D,N,R){const M=C.value,P=D+"_"+N;if(R[P]===void 0)return typeof M=="number"||typeof M=="boolean"?R[P]=M:ArrayBuffer.isView(M)?R[P]=M.slice():R[P]=M.clone(),!0;{const V=R[P];if(typeof M=="number"||typeof M=="boolean"){if(V!==M)return R[P]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(V.equals(M)===!1)return V.copy(M),!0}}return!1}function y(C){const D=C.uniforms;let N=0;const R=16;for(let P=0,V=D.length;P<V;P++){const k=Array.isArray(D[P])?D[P]:[D[P]];for(let B=0,te=k.length;B<te;B++){const le=k[B],j=Array.isArray(le.value)?le.value:[le.value];for(let ue=0,K=j.length;ue<K;ue++){const q=j[ue],ae=x(q),fe=N%R,U=fe%ae.boundary,J=fe+U;N+=U,J!==0&&R-J<ae.storage&&(N+=R-J),le.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=N,N+=ae.storage}}}const M=N%R;return M>0&&(N+=R-M),C.__size=N,C.__cache={},this}function x(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",C),D}function I(C){const D=C.target;D.removeEventListener("dispose",I);const N=c.indexOf(D.__bindingPointIndex);c.splice(N,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function O(){for(const C in o)s.deleteBuffer(o[C]);c=[],o={},l={}}return{bind:f,update:p,dispose:O}}const CE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function PE(){return zi===null&&(zi=new mx(CE,16,16,ms,oi),zi.name="DFG_LUT",zi.minFilter=Pn,zi.magFilter=Pn,zi.wrapS=lr,zi.wrapT=lr,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class NE{constructor(e={}){const{canvas:t=W_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ai}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=c;const T=S,y=new Set([Kh,$h,jh]),x=new Set([ai,Yi,vo,_o,qh,Yh]),I=new Uint32Array(4),O=new Int32Array(4),C=new $;let D=null,N=null;const R=[],M=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let k=!1,B=null,te=null,le=null,j=null;this._outputColorSpace=Cn;let ue=0,K=0,q=null,ae=-1,fe=null;const U=new nn,J=new nn;let Oe=null;const We=new gt(0);let Be=0,oe=t.width,_e=t.height,G=1,me=null,xe=null;const Fe=new nn(0,0,oe,_e),At=new nn(0,0,oe,_e);let st=!1;const vt=new id;let lt=!1,Ge=!1;const It=new jt,Rt=new $,Ce=new nn,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function Ct(){return q===null?G:1}let W=r;function Wt(A,Z){return t.getContext(A,Z)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kh}`),t.addEventListener("webglcontextlost",Bt,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),W===null){const Z="webgl2";if(W=Wt(Z,A),W===null)throw Wt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let wt,L,E,Q,se,de,Ee,be,pe,ge,Pe,Qe,Ue,De,nt,it,ut,X,Ne,ve,Ie,ke,ye;function $e(){wt=new PM(W),wt.init(),Ie=new SE(W,wt),L=new MM(W,wt,e,Ie),E=new xE(W,wt),L.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),te=W.createFramebuffer(),le=W.createFramebuffer(),j=W.createFramebuffer(),Q=new DM(W),se=new sE,de=new yE(W,wt,E,se,L,Ie,Q),Ee=new CM(V),be=new Ox(W),ke=new yM(W,be),pe=new NM(W,be,Q,ke),ge=new UM(W,pe,be,ke,Q),X=new IM(W,L,de),nt=new EM(se),Pe=new rE(V,Ee,wt,L,ke,nt),Qe=new AE(V,se),Ue=new oE,De=new dE(wt),ut=new xM(V,Ee,E,ge,w,f),it=new _E(V,ge,L),ye=new RE(W,Q,L,E),Ne=new SM(W,wt,Q),ve=new LM(W,wt,Q),Q.programs=Pe.programs,V.capabilities=L,V.extensions=wt,V.properties=se,V.renderLists=Ue,V.shadowMap=it,V.state=E,V.info=Q}$e(),T!==ai&&(P=new OM(T,t.width,t.height,d,o,l));const Ye=new TE(V,W);this.xr=Ye,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(oe,_e,!1))},this.getSize=function(A){return A.set(oe,_e)},this.setSize=function(A,Z,ce=!0){if(Ye.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,_e=Z,t.width=Math.floor(A*G),t.height=Math.floor(Z*G),ce===!0&&(t.style.width=A+"px",t.style.height=Z+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(oe*G,_e*G).floor()},this.setDrawingBufferSize=function(A,Z,ce){oe=A,_e=Z,G=ce,t.width=Math.floor(A*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(T===ai){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Fe)},this.setViewport=function(A,Z,ce,ie){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,Z,ce,ie),E.viewport(U.copy(Fe).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(At)},this.setScissor=function(A,Z,ce,ie){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,Z,ce,ie),E.scissor(J.copy(At).multiplyScalar(G).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){E.setScissorTest(st=A)},this.setOpaqueSort=function(A){me=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,ce=!0){let ie=0;if(A){let ne=!1;if(q!==null){const Re=q.texture.format;ne=y.has(Re)}if(ne){const Re=q.texture.type,Xe=x.has(Re),Ae=ut.getClearColor(),Ke=ut.getClearAlpha(),tt=Ae.r,dt=Ae.g,pt=Ae.b;Xe?(I[0]=tt,I[1]=dt,I[2]=pt,I[3]=Ke,W.clearBufferuiv(W.COLOR,0,I)):(O[0]=tt,O[1]=dt,O[2]=pt,O[3]=Ke,W.clearBufferiv(W.COLOR,0,O))}else ie|=W.COLOR_BUFFER_BIT}Z&&(ie|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ie|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&W.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),B=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),ut.dispose(),Ue.dispose(),De.dispose(),se.dispose(),Ee.dispose(),ge.dispose(),ke.dispose(),ye.dispose(),Pe.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Mo),Ye.removeEventListener("sessionend",Eo),In.stop()};function Bt(A){A.preventDefault(),du("WebGLRenderer: Context Lost."),k=!0}function Ut(){du("WebGLRenderer: Context Restored."),k=!1;const A=Q.autoReset,Z=it.enabled,ce=it.autoUpdate,ie=it.needsUpdate,ne=it.type;$e(),Q.autoReset=A,it.enabled=Z,it.autoUpdate=ce,it.needsUpdate=ie,it.type=ne}function Mn(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function li(A){const Z=A.target;Z.removeEventListener("dispose",li),Vr(Z)}function Vr(A){_s(A),se.remove(A)}function _s(A){const Z=se.get(A).programs;Z!==void 0&&(Z.forEach(function(ce){Pe.releaseProgram(ce)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,ce,ie,ne,Re){Z===null&&(Z=ct);const Xe=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ae=Jt(A,Z,ce,ie,ne);E.setMaterial(ie,Xe);let Ke=ce.index,tt=1;if(ie.wireframe===!0){if(Ke=pe.getWireframeAttribute(ce),Ke===void 0)return;tt=2}const dt=ce.drawRange,pt=ce.attributes.position;let Je=dt.start*tt,Pt=(dt.start+dt.count)*tt;Re!==null&&(Je=Math.max(Je,Re.start*tt),Pt=Math.min(Pt,(Re.start+Re.count)*tt)),Ke!==null?(Je=Math.max(Je,0),Pt=Math.min(Pt,Ke.count)):pt!=null&&(Je=Math.max(Je,0),Pt=Math.min(Pt,pt.count));const Ht=Pt-Je;if(Ht<0||Ht===1/0)return;ke.setup(ne,ie,Ae,ce,Ke);let $t,kt=Ne;if(Ke!==null&&($t=be.get(Ke),kt=ve,kt.setIndex($t)),ne.isMesh)ie.wireframe===!0?(E.setLineWidth(ie.wireframeLinewidth*Ct()),kt.setMode(W.LINES)):kt.setMode(W.TRIANGLES);else if(ne.isLine){let an=ie.linewidth;an===void 0&&(an=1),E.setLineWidth(an*Ct()),ne.isLineSegments?kt.setMode(W.LINES):ne.isLineLoop?kt.setMode(W.LINE_LOOP):kt.setMode(W.LINE_STRIP)}else ne.isPoints?kt.setMode(W.POINTS):ne.isSprite&&kt.setMode(W.TRIANGLES);if(ne.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))kt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const an=ne._multiDrawStarts,Ve=ne._multiDrawCounts,_n=ne._multiDrawCount,xt=Ke?be.get(Ke).bytesPerElement:1,Vn=se.get(ie).currentProgram.getUniforms();for(let Hn=0;Hn<_n;Hn++)Vn.setValue(W,"_gl_DrawID",Hn),kt.render(an[Hn]/xt,Ve[Hn])}else if(ne.isInstancedMesh)kt.renderInstances(Je,Ht,ne.count);else if(ce.isInstancedBufferGeometry){const an=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ve=Math.min(ce.instanceCount,an);kt.renderInstances(Je,Ht,Ve)}else kt.render(Je,Ht)};function Hr(A,Z,ce){A.transparent===!0&&A.side===Pi&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,Xr(A,Z,ce),A.side=zr,A.needsUpdate=!0,Xr(A,Z,ce),A.side=Pi):Xr(A,Z,ce)}this.compile=function(A,Z,ce=null){ce===null&&(ce=A),N=De.get(ce),N.init(Z),M.push(N),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),A!==ce&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),N.setupLights();const ie=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Re=ne.material;if(Re)if(Array.isArray(Re))for(let Xe=0;Xe<Re.length;Xe++){const Ae=Re[Xe];Hr(Ae,ce,ne),ie.add(Ae)}else Hr(Re,ce,ne),ie.add(Re)}),N=M.pop(),ie},this.compileAsync=function(A,Z,ce=null){const ie=this.compile(A,Z,ce);return new Promise(ne=>{function Re(){if(ie.forEach(function(Xe){se.get(Xe).currentProgram.isReady()&&ie.delete(Xe)}),ie.size===0){ne(A);return}setTimeout(Re,10)}wt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Gr=null;function Tu(A){Gr&&Gr(A)}function Mo(){In.stop()}function Eo(){In.start()}const In=new pg;In.setAnimationLoop(Tu),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(A){Gr=A,Ye.setAnimationLoop(A),A===null?In.stop():In.start()},Ye.addEventListener("sessionstart",Mo),Ye.addEventListener("sessionend",Eo),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;B!==null&&B.renderStart(A,Z);const ce=Ye.enabled===!0&&Ye.isPresenting===!0,ie=P!==null&&(q===null||ce)&&P.begin(V,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(Z),Z=Ye.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,Z,q),N=De.get(A,M.length),N.init(Z),N.state.textureUnits=de.getTextureUnits(),M.push(N),It.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),vt.setFromProjectionMatrix(It,Gi,Z.reversedDepth),Ge=this.localClippingEnabled,lt=nt.init(this.clippingPlanes,Ge),D=Ue.get(A,R.length),D.init(),R.push(D),Ye.enabled===!0&&Ye.isPresenting===!0){const Xe=V.xr.getDepthSensingMesh();Xe!==null&&xs(Xe,Z,-1/0,V.sortObjects)}xs(A,Z,0,V.sortObjects),D.finish(),V.sortObjects===!0&&D.sort(me,xe,Z.reversedDepth),Le=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Le&&ut.addToRenderList(D,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&nt.beginShadows();const ne=N.state.shadowsArray;if(it.render(ne,A,Z),lt===!0&&nt.endShadows(),(ie&&P.hasRenderPass())===!1){const Xe=D.opaque,Ae=D.transmissive;if(N.setupLights(),Z.isArrayCamera){const Ke=Z.cameras;if(Ae.length>0)for(let tt=0,dt=Ke.length;tt<dt;tt++){const pt=Ke[tt];wo(Xe,Ae,A,pt)}Le&&ut.render(A);for(let tt=0,dt=Ke.length;tt<dt;tt++){const pt=Ke[tt];xa(D,A,pt,pt.viewport)}}else Ae.length>0&&wo(Xe,Ae,A,Z),Le&&ut.render(A),xa(D,A,Z)}q!==null&&K===0&&(de.updateMultisampleRenderTarget(q),de.updateRenderTargetMipmap(q)),ie&&P.end(V),A.isScene===!0&&A.onAfterRender(V,A,Z),ke.resetDefaultState(),ae=-1,fe=null,M.pop(),M.length>0?(N=M[M.length-1],de.setTextureUnits(N.state.textureUnits),lt===!0&&nt.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,R.pop(),R.length>0?D=R[R.length-1]:D=null,B!==null&&B.renderEnd()};function xs(A,Z,ce,ie){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||vt.intersectsSprite(A)){ie&&Ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(It);const Xe=ge.update(A),Ae=A.material;Ae.visible&&D.push(A,Xe,Ae,ce,Ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||vt.intersectsObject(A))){const Xe=ge.update(A),Ae=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ce.copy(A.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Ce.copy(Xe.boundingSphere.center)),Ce.applyMatrix4(A.matrixWorld).applyMatrix4(It)),Array.isArray(Ae)){const Ke=Xe.groups;for(let tt=0,dt=Ke.length;tt<dt;tt++){const pt=Ke[tt],Je=Ae[pt.materialIndex];Je&&Je.visible&&D.push(A,Xe,Je,ce,Ce.z,pt)}}else Ae.visible&&D.push(A,Xe,Ae,ce,Ce.z,null)}}const Re=A.children;for(let Xe=0,Ae=Re.length;Xe<Ae;Xe++)xs(Re[Xe],Z,ce,ie)}function xa(A,Z,ce,ie){const{opaque:ne,transmissive:Re,transparent:Xe}=A;N.setupLightsView(ce),lt===!0&&nt.setGlobalState(V.clippingPlanes,ce),ie&&E.viewport(U.copy(ie)),ne.length>0&&Wr(ne,Z,ce),Re.length>0&&Wr(Re,Z,ce),Xe.length>0&&Wr(Xe,Z,ce),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function wo(A,Z,ce,ie){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ie.id]===void 0){const Je=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ie.id]=new Kn(1,1,{generateMipmaps:!0,type:Je?oi:ai,minFilter:hs,samples:Math.max(4,L.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Re=N.state.transmissionRenderTarget[ie.id],Xe=ie.viewport||U;Re.setSize(Xe.z*V.transmissionResolutionScale,Xe.w*V.transmissionResolutionScale);const Ae=V.getRenderTarget(),Ke=V.getActiveCubeFace(),tt=V.getActiveMipmapLevel();V.setRenderTarget(Re),V.getClearColor(We),Be=V.getClearAlpha(),Be<1&&V.setClearColor(16777215,.5),V.clear(),Le&&ut.render(ce);const dt=V.toneMapping;V.toneMapping=qi;const pt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),N.setupLightsView(ie),lt===!0&&nt.setGlobalState(V.clippingPlanes,ie),Wr(A,ce,ie),de.updateMultisampleRenderTarget(Re),de.updateRenderTargetMipmap(Re),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Pt=0,Ht=Z.length;Pt<Ht;Pt++){const $t=Z[Pt],{object:kt,geometry:an,material:Ve,group:_n}=$t;if(Ve.side===Pi&&kt.layers.test(ie.layers)){const xt=Ve.side;Ve.side=Bn,Ve.needsUpdate=!0,ya(kt,ce,ie,an,Ve,_n),Ve.side=xt,Ve.needsUpdate=!0,Je=!0}}Je===!0&&(de.updateMultisampleRenderTarget(Re),de.updateRenderTargetMipmap(Re))}V.setRenderTarget(Ae,Ke,tt),V.setClearColor(We,Be),pt!==void 0&&(ie.viewport=pt),V.toneMapping=dt}function Wr(A,Z,ce){const ie=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,Re=A.length;ne<Re;ne++){const Xe=A[ne],{object:Ae,geometry:Ke,group:tt}=Xe;let dt=Xe.material;dt.allowOverride===!0&&ie!==null&&(dt=ie),Ae.layers.test(ce.layers)&&ya(Ae,Z,ce,Ke,dt,tt)}}function ya(A,Z,ce,ie,ne,Re){A.onBeforeRender(V,Z,ce,ie,ne,Re),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(V,Z,ce,ie,A,Re),ne.transparent===!0&&ne.side===Pi&&ne.forceSinglePass===!1?(ne.side=Bn,ne.needsUpdate=!0,V.renderBufferDirect(ce,Z,ie,ne,A,Re),ne.side=zr,ne.needsUpdate=!0,V.renderBufferDirect(ce,Z,ie,ne,A,Re),ne.side=Pi):V.renderBufferDirect(ce,Z,ie,ne,A,Re),A.onAfterRender(V,Z,ce,ie,ne,Re)}function Xr(A,Z,ce){Z.isScene!==!0&&(Z=ct);const ie=se.get(A),ne=N.state.lights,Re=N.state.shadowsArray,Xe=ne.state.version,Ae=Pe.getParameters(A,ne.state,Re,Z,ce,N.state.lightProbeGridArray),Ke=Pe.getProgramCacheKey(Ae);let tt=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,ie.fog=Z.fog;const dt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=Ee.get(A.envMap||ie.environment,dt),ie.envMapRotation=ie.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",li),tt=new Map,ie.programs=tt);let pt=tt.get(Ke);if(pt!==void 0){if(ie.currentProgram===pt&&ie.lightsStateVersion===Xe)return To(A,Ae),pt}else Ae.uniforms=Pe.getUniforms(A),B!==null&&A.isNodeMaterial&&B.build(A,ce,Ae),A.onBeforeCompile(Ae,V),pt=Pe.acquireProgram(Ae,Ke),tt.set(Ke,pt),ie.uniforms=Ae.uniforms;const Je=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=nt.uniform),To(A,Ae),ie.needsLights=Ma(A),ie.lightsStateVersion=Xe,ie.needsLights&&(Je.ambientLightColor.value=ne.state.ambient,Je.lightProbe.value=ne.state.probe,Je.directionalLights.value=ne.state.directional,Je.directionalLightShadows.value=ne.state.directionalShadow,Je.spotLights.value=ne.state.spot,Je.spotLightShadows.value=ne.state.spotShadow,Je.rectAreaLights.value=ne.state.rectArea,Je.ltc_1.value=ne.state.rectAreaLTC1,Je.ltc_2.value=ne.state.rectAreaLTC2,Je.pointLights.value=ne.state.point,Je.pointLightShadows.value=ne.state.pointShadow,Je.hemisphereLights.value=ne.state.hemi,Je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Je.spotLightMatrix.value=ne.state.spotLightMatrix,Je.spotLightMap.value=ne.state.spotLightMap,Je.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.lightProbeGrid=N.state.lightProbeGridArray.length>0,ie.currentProgram=pt,ie.uniformsList=null,pt}function Sa(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=au.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function To(A,Z){const ce=se.get(A);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function bu(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(Z.matrixWorld);for(let ce=0,ie=A.length;ce<ie;ce++){const ne=A[ce];if(ne.texture!==null&&ne.boundingBox.containsPoint(C))return ne}return null}function Jt(A,Z,ce,ie,ne){Z.isScene!==!0&&(Z=ct),de.resetTextureUnits();const Re=Z.fog,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Z.environment:null,Ae=q===null?V.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Et.workingColorSpace,Ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,tt=Ee.get(ie.envMap||Xe,Ke),dt=ie.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pt=!!ce.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Je=!!ce.morphAttributes.position,Pt=!!ce.morphAttributes.normal,Ht=!!ce.morphAttributes.color;let $t=qi;ie.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&($t=V.toneMapping);const kt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,an=kt!==void 0?kt.length:0,Ve=se.get(ie),_n=N.state.lights;if(lt===!0&&(Ge===!0||A!==fe)){const zt=A===fe&&ie.id===ae;nt.setState(ie,A,zt)}let xt=!1;ie.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==_n.state.version||Ve.outputColorSpace!==Ae||ne.isBatchedMesh&&Ve.batching===!1||!ne.isBatchedMesh&&Ve.batching===!0||ne.isBatchedMesh&&Ve.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ve.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ve.instancing===!1||!ne.isInstancedMesh&&Ve.instancing===!0||ne.isSkinnedMesh&&Ve.skinning===!1||!ne.isSkinnedMesh&&Ve.skinning===!0||ne.isInstancedMesh&&Ve.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ve.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ve.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ve.instancingMorph===!1&&ne.morphTexture!==null||Ve.envMap!==tt||ie.fog===!0&&Ve.fog!==Re||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==nt.numPlanes||Ve.numIntersection!==nt.numIntersection)||Ve.vertexAlphas!==dt||Ve.vertexTangents!==pt||Ve.morphTargets!==Je||Ve.morphNormals!==Pt||Ve.morphColors!==Ht||Ve.toneMapping!==$t||Ve.morphTargetsCount!==an||!!Ve.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ve.__version=ie.version);let Vn=Ve.currentProgram;xt===!0&&(Vn=Xr(ie,Z,ne),B&&ie.isNodeMaterial&&B.onUpdateProgram(ie,Vn,Ve));let Hn=!1,St=!1,ji=!1;const Ft=Vn.getUniforms(),Xt=Ve.uniforms;if(E.useProgram(Vn.program)&&(Hn=!0,St=!0,ji=!0),ie.id!==ae&&(ae=ie.id,St=!0),Ve.needsLights){const zt=bu(N.state.lightProbeGridArray,ne);Ve.lightProbeGrid!==zt&&(Ve.lightProbeGrid=zt,St=!0)}if(Hn||fe!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(W,"projectionMatrix",A.projectionMatrix),Ft.setValue(W,"viewMatrix",A.matrixWorldInverse);const yi=Ft.map.cameraPosition;yi!==void 0&&yi.setValue(W,Rt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Ft.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ft.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),fe!==A&&(fe=A,St=!0,ji=!0)}if(Ve.needsLights&&(_n.state.directionalShadowMap.length>0&&Ft.setValue(W,"directionalShadowMap",_n.state.directionalShadowMap,de),_n.state.spotShadowMap.length>0&&Ft.setValue(W,"spotShadowMap",_n.state.spotShadowMap,de),_n.state.pointShadowMap.length>0&&Ft.setValue(W,"pointShadowMap",_n.state.pointShadowMap,de)),ne.isSkinnedMesh){Ft.setOptional(W,ne,"bindMatrix"),Ft.setOptional(W,ne,"bindMatrixInverse");const zt=ne.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Ft.setValue(W,"boneTexture",zt.boneTexture,de))}ne.isBatchedMesh&&(Ft.setOptional(W,ne,"batchingTexture"),Ft.setValue(W,"batchingTexture",ne._matricesTexture,de),Ft.setOptional(W,ne,"batchingIdTexture"),Ft.setValue(W,"batchingIdTexture",ne._indirectTexture,de),Ft.setOptional(W,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ft.setValue(W,"batchingColorTexture",ne._colorsTexture,de));const xi=ce.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&X.update(ne,ce,Vn),(St||Ve.receiveShadow!==ne.receiveShadow)&&(Ve.receiveShadow=ne.receiveShadow,Ft.setValue(W,"receiveShadow",ne.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Z.environment!==null&&(Xt.envMapIntensity.value=Z.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=PE()),St){if(Ft.setValue(W,"toneMappingExposure",V.toneMappingExposure),Ve.needsLights&&Au(Xt,ji),Re&&ie.fog===!0&&Qe.refreshFogUniforms(Xt,Re),Qe.refreshMaterialUniforms(Xt,ie,G,_e,N.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const zt=Ve.lightProbeGrid;Xt.probesSH.value=zt.texture,Xt.probesMin.value.copy(zt.boundingBox.min),Xt.probesMax.value.copy(zt.boundingBox.max),Xt.probesResolution.value.copy(zt.resolution)}au.upload(W,Sa(Ve),Xt,de)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(au.upload(W,Sa(Ve),Xt,de),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ft.setValue(W,"center",ne.center),Ft.setValue(W,"modelViewMatrix",ne.modelViewMatrix),Ft.setValue(W,"normalMatrix",ne.normalMatrix),Ft.setValue(W,"modelMatrix",ne.matrixWorld),ie.uniformsGroups!==void 0){const zt=ie.uniformsGroups;for(let yi=0,Di=zt.length;yi<Di;yi++){const qr=zt[yi];ye.update(qr,Vn),ye.bind(qr,Vn)}}return Vn}function Au(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function Ma(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,Z,ce){const ie=se.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=Z,se.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ce,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const ce=se.get(A);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,ce=0){q=A,ue=Z,K=ce;let ie=null,ne=!1,Re=!1;if(A){const Ae=se.get(A);if(Ae.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Ae.__webglFramebuffer),U.copy(A.viewport),J.copy(A.scissor),Oe=A.scissorTest,E.viewport(U),E.scissor(J),E.setScissorTest(Oe),ae=-1;return}else if(Ae.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Ae.__hasExternalTextures)de.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const dt=A.depthTexture;if(Ae.__boundDepthTexture!==dt){if(dt!==null&&se.has(dt)&&(A.width!==dt.image.width||A.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Re=!0);const tt=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[Z])?ie=tt[Z][ce]:ie=tt[Z],ne=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?ie=se.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?ie=tt[ce]:ie=tt,U.copy(A.viewport),J.copy(A.scissor),Oe=A.scissorTest}else U.copy(Fe).multiplyScalar(G).floor(),J.copy(At).multiplyScalar(G).floor(),Oe=st;if(ce!==0&&(ie=te),E.bindFramebuffer(W.FRAMEBUFFER,ie)&&E.drawBuffers(A,ie),E.viewport(U),E.scissor(J),E.setScissorTest(Oe),ne){const Ae=se.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae.__webglTexture,ce)}else if(Re){const Ae=Z;for(let Ke=0;Ke<A.textures.length;Ke++){const tt=se.get(A.textures[Ke]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ke,tt.__webglTexture,ce,Ae)}}else if(A!==null&&ce!==0){const Ae=se.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ae.__webglTexture,ce)}ae=-1},this.readRenderTargetPixels=function(A,Z,ce,ie,ne,Re,Xe,Ae=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ke=Ke[Xe]),Ke){E.bindFramebuffer(W.FRAMEBUFFER,Ke);try{const tt=A.textures[Ae],dt=tt.format,pt=tt.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ae),!L.textureFormatReadable(dt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(pt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-ie&&ce>=0&&ce<=A.height-ne&&W.readPixels(Z,ce,ie,ne,Ie.convert(dt),Ie.convert(pt),Re)}finally{const tt=q!==null?se.get(q).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(A,Z,ce,ie,ne,Re,Xe,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ke=Ke[Xe]),Ke)if(Z>=0&&Z<=A.width-ie&&ce>=0&&ce<=A.height-ne){E.bindFramebuffer(W.FRAMEBUFFER,Ke);const tt=A.textures[Ae],dt=tt.format,pt=tt.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ae),!L.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Je),W.bufferData(W.PIXEL_PACK_BUFFER,Re.byteLength,W.STREAM_READ),W.readPixels(Z,ce,ie,ne,Ie.convert(dt),Ie.convert(pt),0);const Pt=q!==null?se.get(q).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Pt);const Ht=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await X_(W,Ht,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Je),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Re),W.deleteBuffer(Je),W.deleteSync(Ht),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,ce=0){const ie=Math.pow(2,-ce),ne=Math.floor(A.image.width*ie),Re=Math.floor(A.image.height*ie),Xe=Z!==null?Z.x:0,Ae=Z!==null?Z.y:0;de.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,ce,0,0,Xe,Ae,ne,Re),E.unbindTexture()},this.copyTextureToTexture=function(A,Z,ce=null,ie=null,ne=0,Re=0){let Xe,Ae,Ke,tt,dt,pt,Je,Pt,Ht;const $t=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(ce!==null)Xe=ce.max.x-ce.min.x,Ae=ce.max.y-ce.min.y,Ke=ce.isBox3?ce.max.z-ce.min.z:1,tt=ce.min.x,dt=ce.min.y,pt=ce.isBox3?ce.min.z:0;else{const Xt=Math.pow(2,-ne);Xe=Math.floor($t.width*Xt),Ae=Math.floor($t.height*Xt),A.isDataArrayTexture?Ke=$t.depth:A.isData3DTexture?Ke=Math.floor($t.depth*Xt):Ke=1,tt=0,dt=0,pt=0}ie!==null?(Je=ie.x,Pt=ie.y,Ht=ie.z):(Je=0,Pt=0,Ht=0);const kt=Ie.convert(Z.format),an=Ie.convert(Z.type);let Ve;Z.isData3DTexture?(de.setTexture3D(Z,0),Ve=W.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(de.setTexture2DArray(Z,0),Ve=W.TEXTURE_2D_ARRAY):(de.setTexture2D(Z,0),Ve=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);const _n=E.getParameter(W.UNPACK_ROW_LENGTH),xt=E.getParameter(W.UNPACK_IMAGE_HEIGHT),Vn=E.getParameter(W.UNPACK_SKIP_PIXELS),Hn=E.getParameter(W.UNPACK_SKIP_ROWS),St=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,$t.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,$t.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,tt),E.pixelStorei(W.UNPACK_SKIP_ROWS,dt),E.pixelStorei(W.UNPACK_SKIP_IMAGES,pt);const ji=A.isDataArrayTexture||A.isData3DTexture,Ft=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const Xt=se.get(A),xi=se.get(Z),zt=se.get(Xt.__renderTarget),yi=se.get(xi.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,zt.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Di=0;Di<Ke;Di++)ji&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,se.get(A).__webglTexture,ne,pt+Di),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,se.get(Z).__webglTexture,Re,Ht+Di)),W.blitFramebuffer(tt,dt,Xe,Ae,Je,Pt,Xe,Ae,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||se.has(A)){const Xt=se.get(A),xi=se.get(Z);E.bindFramebuffer(W.READ_FRAMEBUFFER,le),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,j);for(let zt=0;zt<Ke;zt++)ji?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Xt.__webglTexture,ne,pt+zt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Xt.__webglTexture,ne),Ft?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,xi.__webglTexture,Re,Ht+zt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,xi.__webglTexture,Re),ne!==0?W.blitFramebuffer(tt,dt,Xe,Ae,Je,Pt,Xe,Ae,W.COLOR_BUFFER_BIT,W.NEAREST):Ft?W.copyTexSubImage3D(Ve,Re,Je,Pt,Ht+zt,tt,dt,Xe,Ae):W.copyTexSubImage2D(Ve,Re,Je,Pt,tt,dt,Xe,Ae);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Ve,Re,Je,Pt,Ht,Xe,Ae,Ke,kt,an,$t.data):Z.isCompressedArrayTexture?W.compressedTexSubImage3D(Ve,Re,Je,Pt,Ht,Xe,Ae,Ke,kt,$t.data):W.texSubImage3D(Ve,Re,Je,Pt,Ht,Xe,Ae,Ke,kt,an,$t):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Re,Je,Pt,Xe,Ae,kt,an,$t.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Re,Je,Pt,$t.width,$t.height,kt,$t.data):W.texSubImage2D(W.TEXTURE_2D,Re,Je,Pt,Xe,Ae,kt,an,$t);E.pixelStorei(W.UNPACK_ROW_LENGTH,_n),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,xt),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Vn),E.pixelStorei(W.UNPACK_SKIP_ROWS,Hn),E.pixelStorei(W.UNPACK_SKIP_IMAGES,St),Re===0&&Z.generateMipmaps&&W.generateMipmap(Ve),E.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){ue=0,K=0,q=null,E.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const ou={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _a{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const LE=new Mu(-1,1,1,-1,0,1);class DE extends Dn{constructor(){super(),this.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new un([0,2,0,0,2,0],2))}}const IE=new DE;class sd{constructor(e){this._mesh=new Nt(IE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,LE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class UE extends _a{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yo.clone(e.uniforms),this.material=new Nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new sd(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class z0 extends _a{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const o=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let c,d;this.inverse?(c=0,d=1):(c=1,d=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,c,4294967295),l.buffers.stencil.setClear(d),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.buffers.stencil.setLocked(!0)}}class FE extends _a{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class OE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new rt);this._width=r.width,this._height=r.height,t=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new UE(ou),this.copyPass.material.blending=Xi,this.timer=new Dx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let o=0,l=this.passes.length;o<l;o++){const c=this.passes[o];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),c.needsSwap){if(r){const d=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}z0!==void 0&&(c instanceof z0?r=!0:c instanceof FE&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kE extends _a{constructor(e,t,r=null,o=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new gt}render(e,t,r){const o=e.autoClear;e.autoClear=!1;let l,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=o}}const zE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ma extends _a{constructor(e,t=1,r,o){super(),this.strength=t,this.radius=r,this.threshold=o,this.resolution=e!==void 0?new rt(e.x,e.y):new rt(256,256),this.clearColor=new gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(l,c,{type:oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const v=new Kn(l,c,{type:oi});v.texture.name="UnrealBloomPass.h"+_,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const g=new Kn(l,c,{type:oi});g.texture.name="UnrealBloomPass.v"+_,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),l=Math.round(l/2),c=Math.round(c/2)}const d=zE;this.highPassUniforms=yo.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const f=[6,10,14,18,22];l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(f[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new rt(1/l,1/c),l=Math.round(l/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=yo.clone(ou.uniforms),this.blendMaterial=new Nn({uniforms:this.copyUniforms,vertexShader:ou.vertexShader,fragmentShader:ou.fragmentShader,premultipliedAlpha:!0,blending:ua,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new gt,this._oldClearAlpha=1,this._basic=new zn,this._fsQuad=new sd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(r,o);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,o),this.renderTargetsVertical[l].setSize(r,o),this.separableBlurMaterials[l].uniforms.invSize.value=new rt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2)}render(e,t,r,o,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this._fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[f].uniforms.direction.value=ma.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=ma.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[f];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],r=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(r*r))/r);return new Nn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ma.BlurDirectionX=new rt(1,0);ma.BlurDirectionY=new rt(0,1);const Jl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class BE extends _a{constructor(){super(),this.isOutputPass=!0,this.uniforms=yo.clone(Jl.uniforms),this.material=new cg({name:Jl.name,uniforms:this.uniforms,vertexShader:Jl.vertexShader,fragmentShader:Jl.fragmentShader}),this._fsQuad=new sd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Et.getTransfer(this._outputColorSpace)===Ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Hh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function co(s,e,t=1,r=1){const o=document.createElement("canvas");o.width=o.height=s;const l=o.getContext("2d");e(l,s);const c=new po(o);return c.wrapS=c.wrapT=go,c.repeat.set(t,r),c.colorSpace=Cn,c.anisotropy=4,c}function eu(s,e,t,r,o){for(let l=0;l<t;l++){s.fillStyle=r[Math.random()*r.length|0],s.globalAlpha=o*(.4+Math.random()*.6);const c=1+Math.random()*2.4;s.fillRect(Math.random()*e,Math.random()*e,c,c)}s.globalAlpha=1}function Mg(s,e,t,r,o,l){let c=s.x+e;for(const f of o)c+r>f.minX&&c-r<f.maxX&&s.z+r>f.minZ&&s.z-r<f.maxZ&&(e>0?c=Math.min(c,f.minX-r):e<0&&(c=Math.max(c,f.maxX+r)));s.x=c;let d=s.z+t;for(const f of o)s.x+r>f.minX&&s.x-r<f.maxX&&d+r>f.minZ&&d-r<f.maxZ&&(t>0?d=Math.min(d,f.minZ-r):t<0&&(d=Math.max(d,f.maxZ+r)));s.z=d,l&&(s.x=Math.max(l.minX+r,Math.min(l.maxX-r,s.x)),s.z=Math.max(l.minZ+r,Math.min(l.maxZ-r,s.z)))}function VE(s){const e=[],t=[],r=co(256,(G,me)=>{G.fillStyle="#c2a878",G.fillRect(0,0,me,me),eu(G,me,2600,["#b09463","#d4bc8c","#a8895a","#cbb283"],.5),G.globalAlpha=.16;for(let xe=0;xe<14;xe++)G.fillStyle=xe%2?"#8f7448":"#dcc596",G.beginPath(),G.ellipse(Math.random()*me,Math.random()*me,20+Math.random()*46,12+Math.random()*30,Math.random()*3,0,7),G.fill();G.globalAlpha=1},10,10),o=co(256,(G,me)=>{G.fillStyle="#c9b088",G.fillRect(0,0,me,me),eu(G,me,1600,["#b79d73","#d8c39a","#a3895f"],.42),G.globalAlpha=.22,G.strokeStyle="#8f7a55";for(let xe=0;xe<me;xe+=30)G.beginPath(),G.moveTo(0,xe),G.lineTo(me,xe),G.stroke();G.globalAlpha=.14;for(let xe=0;xe<9;xe++)G.fillStyle="#6e5b3d",G.fillRect(Math.random()*me,Math.random()*me,30+Math.random()*70,4+Math.random()*12);G.globalAlpha=1},4,2),l=co(128,(G,me)=>{G.fillStyle="#8a5c2e",G.fillRect(0,0,me,me),G.strokeStyle="#5f3d1c",G.lineWidth=5;for(let xe=0;xe<=me;xe+=32)G.beginPath(),G.moveTo(0,xe),G.lineTo(me,xe),G.stroke();eu(G,me,500,["#7a4e24","#9c6c3a","#6b441f"],.5),G.lineWidth=8,G.strokeStyle="#4e3115",G.strokeRect(2,2,me-4,me-4),G.beginPath(),G.moveTo(0,0),G.lineTo(me,me),G.moveTo(me,0),G.lineTo(0,me),G.lineWidth=6,G.stroke()},1,1),c=co(128,(G,me)=>{G.fillStyle="#4c7a4f",G.fillRect(0,0,me,me),eu(G,me,500,["#3d6340","#5c8a5e","#2f4f33"],.5),G.strokeStyle="#2f4f33",G.lineWidth=8,G.strokeRect(6,6,me-12,me-12),G.fillStyle="#2f4f33",G.fillRect(12,me*.42,me-24,10),G.fillStyle="#d8c39a",G.fillRect(me-26,me*.5,8,8)},1,1),d=new Zt({map:r,roughness:1}),f=new Zt({map:o,roughness:.95}),p=new Zt({map:l,roughness:.9}),_=new Zt({map:c,roughness:.8,metalness:.15}),v=new Zt({color:11772015,roughness:1}),g=new Zt({color:6126149,roughness:.95}),S=new Zt({color:9271900,roughness:1}),w=new Zt({color:8010282,roughness:.75,metalness:.25}),T=(G,me,xe,Fe,At,st,vt,lt)=>{const Ge=(lt==null?void 0:lt.collide)!==!1,It=(lt==null?void 0:lt.solid)!==!1,Rt=new Nt(new Li(G,me,xe),vt);return Rt.position.set(Fe,At,st),Rt.castShadow=!0,Rt.receiveShadow=!0,s.add(Rt),It&&e.push(Rt),Ge&&t.push({minX:Fe-G/2,maxX:Fe+G/2,minZ:st-xe/2,maxZ:st+xe/2}),Rt},y=(G,me)=>{const xe=new Nt(new da(.45,.45,1.15,14),w);xe.position.set(G,.575,me),xe.castShadow=!0,xe.receiveShadow=!0,s.add(xe),e.push(xe),t.push({minX:G-.45,maxX:G+.45,minZ:me-.45,maxZ:me+.45})},x=new Nt(new $n(64,64),d);x.rotation.x=-Math.PI/2,x.receiveShadow=!0,s.add(x),e.push(x),T(42,5,1,0,2.5,-20.5,f),T(42,5,1,0,2.5,20.5,f),T(1,5,42,-20.5,2.5,0,f),T(1,5,42,20.5,2.5,0,f),T(12,3.6,.8,-9,1.8,13,f),T(11,3.6,.8,8.5,1.8,13,f),T(.8,3.6,19,-3.4,1.8,3.5,f),T(.8,3.6,19,3.4,1.8,3.5,f),T(.8,3.6,1,-7.4,1.8,-15.5,f),T(.8,3.6,5,-7.4,1.8,-8.5,f),T(.8,3.6,1,7.4,1.8,-15.5,f),T(.8,3.6,5,7.4,1.8,-8.5,f),T(14,3.6,.8,0,1.8,-16.4,f),T(8,3.6,.8,-11,1.8,-11.6,f),T(7,3.6,.8,10.5,1.8,-11.6,f),T(.8,3.6,26,13.6,1.8,2,f),T(.8,3.6,25,-14.6,1.8,.5,f),T(5.6,.5,16,-17.1,3.55,-4,S,{collide:!1}),T(5.4,.5,7.4,-17,3.55,-15.7,S,{collide:!1}),T(1.5,2.8,.5,-1.5,1.4,2,_),T(1.5,2.8,.5,1.5,1.4,2,_),T(1.8,2.8,.5,15.5,1.4,2,_),T(1.8,2.8,.5,18,1.4,2,_),T(1.4,1.4,1.4,0,.7,8.5,p),T(1.4,1.4,1.4,-8,.7,16.5,p),T(1.4,1.4,1.4,6,.7,17,p),T(1.4,1.4,1.4,16.5,.7,9,p),T(1.4,1.4,1.4,-3.5,.7,-13,p),T(1.4,1.4,1.4,3.5,.7,-13.5,p),T(1.4,1.4,1.4,16,.7,-17,p),T(1.4,1.4,1.4,16,2.1,-17,p),T(1.4,1.4,1.4,12,.7,-18,p),T(1.4,1.4,1.4,-9,.7,-13.5,p),T(1.4,1.4,1.4,-17,.7,-18,p),T(1.4,1.4,1.4,15,.7,-5,p),T(2.2,.9,2.2,9.5,.45,-13,v),T(2.4,1,2.4,-13,.5,-16,g),T(2.4,.85,.8,0,.42,-4,v),T(2.4,.85,.8,15.5,.42,-7.5,v),T(.8,.85,2.4,-11,.42,-12.6,v),T(2.4,.85,.8,-11.5,.42,17.5,v),y(-12,17.5),y(11,15.5),y(-16.5,8),y(-17,-6),y(18.5,13);const I=(G,me)=>co(128,(xe,Fe)=>{xe.clearRect(0,0,Fe,Fe),xe.fillStyle=me,xe.font="bold 104px sans-serif",xe.textAlign="center",xe.textBaseline="middle",xe.fillText(G,Fe/2,Fe/2+6)},1,1),O=new Nt(new $n(2.4,2.4),new zn({map:I("A","#f2a33c"),transparent:!0}));O.position.set(19.96,2.4,-15),O.rotation.y=-Math.PI/2,s.add(O),e.push(O);const C=new Nt(new $n(2.4,2.4),new zn({map:I("B","#6fb7e8"),transparent:!0}));C.position.set(-19.96,2.4,-15),C.rotation.y=Math.PI/2,s.add(C),e.push(C);const D=new mo(16757867,5,11,2);D.position.set(-17,2.9,-4),s.add(D);const N=new mo(16757867,3.2,9,2);N.position.set(-17,2.9,8),s.add(N);const R=new mo(16767392,3.4,10,2);R.position.set(-14,3,-15),s.add(R);const M=new Nt(new xu(6,24),new zn({color:16774096,fog:!1}));M.position.set(-38,34,-52),M.lookAt(0,0,0),s.add(M);const P=new Dn,V=new Float32Array(660);for(let G=0;G<220;G++)V[G*3]=(Math.random()-.5)*38,V[G*3+1]=Math.random()*6,V[G*3+2]=(Math.random()-.5)*38;P.setAttribute("position",new _i(V,3));const k=new xx(P,new ag({color:16773320,size:.05,transparent:!0,opacity:.5}));k.name="dust",s.add(k);const B=document.createElement("canvas");B.width=16,B.height=256;const te=B.getContext("2d"),le=te.createLinearGradient(0,0,0,256);le.addColorStop(0,"#4e8cc4"),le.addColorStop(.45,"#9cc3dd"),le.addColorStop(.75,"#d8e3e4"),le.addColorStop(1,"#e6d9b8"),te.fillStyle=le,te.fillRect(0,0,16,256);const j=new po(B);j.colorSpace=Cn;const ue=new Nt(new yu(150,24,12),new zn({map:j,side:Bn,fog:!1,depthWrite:!1}));s.add(ue);const K=document.createElement("canvas");K.width=K.height=128;const q=K.getContext("2d"),ae=q.createRadialGradient(64,64,8,64,64,62);ae.addColorStop(0,"rgba(255,255,255,0.95)"),ae.addColorStop(.6,"rgba(255,255,255,0.45)"),ae.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=ae,q.fillRect(0,0,128,128);const fe=new po(K),U=new Wi;U.name="clouds";for(let G=0;G<6;G++){const me=new dx(new rg({map:fe,transparent:!0,opacity:.7,fog:!1,depthWrite:!1})),xe=G/6*Math.PI*2+Math.random();me.position.set(Math.cos(xe)*(70+Math.random()*40),34+Math.random()*18,Math.sin(xe)*(70+Math.random()*40));const Fe=26+Math.random()*22;me.scale.set(Fe,Fe*.45,1),U.add(me)}s.add(U);const J=new Zt({color:9070660,roughness:1}),Oe=new Zt({color:6257978,roughness:.9,side:Pi}),We=(G,me,xe)=>{const Fe=new Wi;Fe.position.set(G,0,me);const At=new Nt(new da(.15,.27,xe,7),J);At.position.y=xe/2,At.rotation.z=(Math.random()-.5)*.14,At.castShadow=!0,Fe.add(At);for(let st=0;st<6;st++){const vt=new Qt;vt.position.y=xe,vt.rotation.y=st/6*Math.PI*2+Math.random()*.4;const lt=new Nt(new rd(.45,2.6,5),Oe);lt.scale.set(.38,1,1),lt.position.set(1.15,.2,0),lt.rotation.z=-1.75-Math.random()*.25,lt.castShadow=!0,vt.add(lt),Fe.add(vt)}s.add(Fe),t.push({minX:G-.28,maxX:G+.28,minZ:me-.28,maxZ:me+.28})};We(-14,13,5.2),We(15.5,-13.5,6),We(-12.5,-13.5,4.6),We(10,13.5,5.6);const Be=G=>{const me=document.createElement("canvas");me.width=me.height=128;const xe=me.getContext("2d");xe.fillStyle="#1c2228",xe.fillRect(0,0,128,128),xe.strokeStyle="#f2a33c",xe.lineWidth=8,xe.strokeRect(8,8,112,112),xe.fillStyle="#f2e9d8",xe.font="bold 84px sans-serif",xe.textAlign="center",xe.textBaseline="middle",xe.fillText(G,64,70);const Fe=new po(me);return Fe.colorSpace=Cn,Fe},oe=new Nt(new $n(1.3,1.3),new zn({map:Be("A")}));oe.position.set(-7,3.4,-15.4),s.add(oe);const _e=new Nt(new $n(1.3,1.3),new zn({map:Be("B")}));return _e.position.set(15.4,3.4,-2),_e.rotation.y=-Math.PI/2,s.add(_e),{solids:e,colliders:t,bounds:{minX:-19.4,maxX:19.4,minZ:-19.4,maxZ:19.4},botSpawns:[{x:-12,z:-14},{x:-17.5,z:-13},{x:-17,z:7},{x:-16.8,z:-7},{x:-3,z:-13},{x:3,z:-13},{x:0,z:-14.8},{x:12,z:-14},{x:16.5,z:-13},{x:10,z:-17},{x:16.5,z:7},{x:15.5,z:-4.5},{x:0,z:7}],playerSpawn:{x:2,z:17}}}class HE{constructor(e,t,r,o,l){this.group=new Wi,this.hitboxes=[],this.hp=100,this.alive=!0,this.name="БОТ",this.muzzle=new Qt,this.legL=new Qt,this.legR=new Qt,this.mats=[],this.strafeDir=Math.random()<.5?1:-1,this.strafeT=1,this.burstLeft=0,this.nextShot=0,this.nextBurst=.8+Math.random()*1.2,this.blockedT=0,this.lastX=0,this.lastZ=0,this.flashT=0,this.deathT=0,this.phase=Math.random()*10,this.prefRange=6.5+Math.random()*6.5,this.ray=new dg,this.tmpA=new $,this.tmpB=new $,this.name=e,this.speed=o,this.hooks=l,this.group.position.set(t,0,r),this.lastX=t,this.lastZ=r;const c=N=>{const R=new Zt({color:N,roughness:.9});return R.emissive=new gt(16722432),R.emissiveIntensity=0,this.mats.push(R),R},d=c(12874285),f=c(3817801),p=c(14262379),_=c(2369324),v=new Zt({color:2829875,roughness:.6,metalness:.5}),g=(N,R,M,P)=>new Nt(new Li(N,R,M),P),S=(N,R)=>{const M=g(.17,.52,.2,f);M.position.y=-.26,M.castShadow=!0,M.userData={bot:this,part:"body"},R.add(M),R.position.set(N,.52,0),this.hitboxes.push(M)};S(-.12,this.legL),S(.12,this.legR),this.group.add(this.legL,this.legR);const w=g(.54,.62,.3,d);w.position.y=.85,w.castShadow=!0,w.userData={bot:this,part:"body"},this.group.add(w),this.hitboxes.push(w);const T=g(.44,.34,.34,_);T.position.y=.92,T.userData={bot:this,part:"body"},this.group.add(T),this.hitboxes.push(T);const y=g(.25,.27,.25,p);y.position.y=1.33,y.castShadow=!0,y.userData={bot:this,part:"head"},this.group.add(y),this.hitboxes.push(y);const x=g(.28,.17,.28,_);x.position.y=1.42,x.userData={bot:this,part:"head"},this.group.add(x),this.hitboxes.push(x);const I=g(.13,.46,.15,d);I.position.set(-.34,.92,.05),I.userData={bot:this,part:"body"},this.group.add(I),this.hitboxes.push(I);const O=g(.13,.42,.15,d);O.position.set(.3,.95,.12),O.rotation.x=-.9,O.userData={bot:this,part:"body"},this.group.add(O),this.hitboxes.push(O);const C=g(.07,.1,.72,v);C.position.set(.22,1.02,.36),C.userData={bot:this,part:"body"},this.group.add(C),this.hitboxes.push(C),this.muzzle.position.set(.22,1.02,.78),this.group.add(this.muzzle);const D=new zn({color:16761707,transparent:!0,opacity:0,blending:ua,depthWrite:!1});this.flash=new Nt(new $n(.34,.34),D),this.flash.position.copy(this.muzzle.position),this.flash.position.z+=.1,this.group.add(this.flash)}hasLOS(e){const t=this.tmpA.copy(this.group.position);t.y+=1.35;const r=this.tmpB.copy(e).sub(t),o=r.length();return o<.001?!0:(this.ray.set(t,r.normalize()),this.ray.far=o-.5,this.ray.intersectObjects(this.hooks.solids,!1).length===0)}fireAt(e,t){const r=new $;this.muzzle.getWorldPosition(r);const o=this.hooks.playerSpeedXZ(),l=Math.max(.06,Math.min(.4,.36-t*.009-o*.045)),c=Math.random()<l,d=e.clone();c||(d.x+=(Math.random()-.5)*1.6,d.y+=(Math.random()-.5)*1,d.z+=(Math.random()-.5)*1.6),this.hooks.tracer(r,d,16753229),this.flash.material.opacity=.95,this.flash.rotation.z=Math.random()*Math.PI,this.flashT=.045,this.hooks.sfx.enemyShoot(t),c&&this.hooks.damagePlayer(6+Math.random()*8,this.group.position)}hit(e,t){if(!this.alive)return!1;this.hp-=t,this.flashT=Math.max(this.flashT,.02);for(const r of this.mats)r.emissiveIntensity=.9;return this.hp<=0?(this.alive=!1,this.deathT=0,!0):!1}update(e,t){const r=this.group.position;if(!this.alive){this.deathT+=e,this.group.rotation.x=-Math.min(1,this.deathT/.28)*(Math.PI/2),this.deathT>1.4&&(r.y-=e*1.1);for(const y of this.mats)y.emissiveIntensity=Math.max(0,y.emissiveIntensity-e*4);return this.deathT<2.6}const o=t.x-r.x,l=t.z-r.z,c=Math.hypot(o,l)||.001;this.group.lookAt(t.x,r.y,t.z);const d=this.hooks.playerEye(),f=this.hasLOS(d);this.strafeT-=e,this.strafeT<=0&&(this.strafeT=.7+Math.random()*1.5,Math.random()<.75&&(this.strafeDir*=-1));let p=0,_=0;!f||c>this.prefRange?(p=o/c,_=l/c):(p=-l/c*this.strafeDir,_=o/c*this.strafeDir,c<this.prefRange-3&&(p-=o/c*.7,_-=l/c*.7));const v=this.speed*(f&&c<=this.prefRange?.7:1),g=r.x,S=r.z;Mg(r,p*v*e,_*v*e,.38,this.hooks.colliders,this.hooks.bounds);const w=Math.hypot(r.x-g,r.z-S);w<v*e*.25?(this.blockedT+=e,this.blockedT>.45&&(this.blockedT=0,this.strafeDir*=-1,this.prefRange=5.5+Math.random()*7.5)):this.blockedT=0,this.lastX,this.lastZ,this.lastX=r.x,this.lastZ=r.z,this.phase+=e*(2+v);const T=w>.002?Math.sin(this.phase*4.2)*.55:0;this.legL.rotation.x=T,this.legR.rotation.x=-T,this.group.position.y=w>.002?Math.abs(Math.sin(this.phase*4.2))*.045:0;for(const y of this.mats)y.emissiveIntensity=Math.max(0,y.emissiveIntensity-e*5);return this.flashT>0&&(this.flashT-=e,this.flash.material.opacity=Math.max(0,this.flashT/.045)),this.flash.lookAt(d),this.burstLeft>0?(this.nextShot-=e,this.nextShot<=0&&(f&&c<36&&this.fireAt(d,c),this.burstLeft--,this.nextShot=.13,this.burstLeft===0&&(this.nextBurst=Math.max(.4,1.1+Math.random()*1.2-c*.012)))):(this.nextBurst-=e,this.nextBurst<=0&&f&&c<36&&(this.burstLeft=2+(Math.random()*3|0),this.nextShot=.06)),!0}dispose(e){e.remove(this.group),this.group.traverse(t=>{const r=t;r.geometry&&r.geometry.dispose()});for(const t of this.mats)t.dispose()}}class GE{constructor(){this.ctx=null,this.master=null,this.noise=null}ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-16,t.ratio.value=9,t.connect(this.ctx.destination),this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(t);const r=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,r,this.ctx.sampleRate);const o=this.noise.getChannelData(0);for(let l=0;l<r;l++)o[l]=Math.random()*2-1}burst(e){if(!this.ctx||!this.master||!this.noise)return;const t=this.ctx,r=t.currentTime+(e.delay||0),o=t.createBufferSource();o.buffer=this.noise,o.loop=!0;const l=t.createBiquadFilter();l.type=e.type||"lowpass",l.Q.value=.7,l.frequency.setValueAtTime(e.from,r),l.frequency.exponentialRampToValueAtTime(Math.max(40,e.to),r+e.dur);const c=t.createGain();c.gain.setValueAtTime(e.vol,r),c.gain.exponentialRampToValueAtTime(1e-4,r+e.dur),o.connect(l),l.connect(c),c.connect(this.master),o.start(r),o.stop(r+e.dur+.05)}tone(e,t,r,o="sine",l,c=0){if(!this.ctx||!this.master)return;const d=this.ctx,f=d.currentTime+c,p=d.createOscillator();p.type=o,p.frequency.setValueAtTime(e,f),l&&p.frequency.exponentialRampToValueAtTime(Math.max(20,l),f+t);const _=d.createGain();_.gain.setValueAtTime(r,f),_.gain.exponentialRampToValueAtTime(1e-4,f+t),p.connect(_),_.connect(this.master),p.start(f),p.stop(f+t+.05)}shoot(){this.burst({dur:.14,vol:.5,from:1700,to:170}),this.burst({dur:.05,vol:.22,from:3800,to:900,type:"highpass"}),this.tone(150,.13,.5,"triangle",42)}smg(){this.burst({dur:.08,vol:.34,from:2100,to:320}),this.burst({dur:.03,vol:.14,from:4200,to:1100,type:"highpass"}),this.tone(190,.07,.3,"triangle",60)}shotgun(){this.burst({dur:.22,vol:.7,from:900,to:90}),this.burst({dur:.08,vol:.3,from:2600,to:500,type:"highpass"}),this.tone(95,.2,.6,"triangle",34),this.burst({dur:.06,vol:.25,from:1400,to:300,delay:.42})}lmg(){this.burst({dur:.1,vol:.42,from:1500,to:200}),this.burst({dur:.04,vol:.18,from:3400,to:800,type:"highpass"}),this.tone(130,.1,.4,"triangle",46)}zeus(){this.tone(2400,.25,.3,"sawtooth",120),this.burst({dur:.3,vol:.35,from:5e3,to:300,type:"highpass"}),this.tone(90,.3,.4,"sine",30)}knife(){this.burst({dur:.12,vol:.2,from:3e3,to:700,type:"bandpass"}),this.tone(320,.08,.15,"triangle",700)}pistol(){this.burst({dur:.1,vol:.42,from:2600,to:320}),this.burst({dur:.04,vol:.18,from:4200,to:1400,type:"highpass"}),this.tone(220,.09,.34,"triangle",70)}sniper(){this.burst({dur:.42,vol:.8,from:1300,to:55}),this.burst({dur:.12,vol:.3,from:4200,to:700,type:"highpass"}),this.tone(88,.42,.62,"sine",26)}zoom(e){this.tone(e?620:1050,.05,.13,"square",e?1150:520)}buy(){this.tone(1320,.06,.17,"square"),this.tone(1760,.09,.15,"square",void 0,.055)}deny(){this.tone(230,.13,.2,"square",150)}switchW(){this.burst({dur:.05,vol:.12,from:1500,to:500}),this.tone(500,.04,.1,"square",800,.03)}enemyShoot(e){const t=Math.max(.06,Math.min(.3,2.4/Math.max(4,e)));this.burst({dur:.12,vol:t,from:1100,to:150}),this.tone(120,.1,t*.8,"triangle",40)}dry(){this.tone(1900,.045,.14,"square",1200)}hit(e){this.tone(e?2500:1650,.06,.2,"square",e?1900:1250)}kill(){this.tone(880,.09,.22,"square"),this.tone(1318,.14,.22,"square",void 0,.075)}hurt(){this.burst({dur:.16,vol:.35,from:520,to:90}),this.tone(95,.22,.4,"sine",42)}step(){this.burst({dur:.05,vol:.06,from:640,to:180})}jump(){this.burst({dur:.09,vol:.08,from:400,to:900,type:"bandpass"})}reload(){this.tone(950,.05,.18,"square",600),this.tone(700,.06,.2,"square",420,.42),this.burst({dur:.07,vol:.16,from:2200,to:500,delay:1.05}),this.tone(1150,.05,.2,"square",800,1.05)}pin(){this.tone(2300,.05,.18,"square",1600)}boom(){this.burst({dur:.65,vol:.85,from:900,to:55}),this.burst({dur:.22,vol:.35,from:3200,to:400,type:"highpass"}),this.tone(72,.55,.7,"sine",30)}beep(e=880,t=.1,r=.2){this.tone(e,t,r,"square")}win(){[523,659,784,1046].forEach((e,t)=>this.tone(e,.16,.22,"square",void 0,t*.11))}lose(){[392,330,262,196].forEach((e,t)=>this.tone(e,.22,.22,"triangle",void 0,t*.15))}}const B0=["Феникс","Гюрза","Кобра","Шакал","Коршун","Таран","Волк","Гадюка","Беркут","Росомаха"],V0=100,Gf=3,ii={ak:{name:"AK-47",short:"AK-47",cat:"Винтовка",dmg:27,cd:.096,mag:30,res:90,auto:!0,reload:2.5,recoil:.013,recoilYaw:.008,kick:.16,base:.0035,grow:.02,movePen:.006,recover:4.2,speed:1,reward:300,sound:"rifle",gun:{body:[.072,.092,.5],bodyMat:"metal",bodyColor:3816770,barrelLen:.3,barrelR:.016,barrelY:.022,handguard:[.066,.07,.24],handguardMat:"wood",stock:{l:.24,drop:.02,mat:"wood",color:9067052},mag:{w:.056,h:.2,d:.1,tilt:.24,z:.04},grip:!0,gasTube:!0,muzzle:{len:.07,r:.02}}},awp:{name:"AWP",short:"AWP",cat:"Снайперка",dmg:115,cd:1.35,mag:5,res:30,auto:!1,reload:3.7,recoil:.09,recoilYaw:.004,kick:.05,base:.0012,grow:.03,movePen:0,recover:1.1,speed:.88,reward:100,sound:"sniper",gun:{body:[.06,.088,.6],bodyMat:"poly",bodyColor:4871743,barrelLen:.5,barrelR:.014,barrelY:.015,stock:{l:.26,drop:.035,mat:"poly",color:4871743},scope:{len:.26,r:.03,zoom:4},mag:{w:.05,h:.11,d:.08,tilt:.08,z:.02},grip:!0,bipod:!0,boltHandle:!0,muzzle:{len:.1,r:.024}}},deagle:{name:"Desert Eagle",short:"DEAGLE",cat:"Пистолет",dmg:53,cd:.24,mag:7,res:35,auto:!1,reload:2.2,recoil:.038,recoilYaw:.006,kick:.1,base:.004,grow:.05,movePen:.035,recover:2.4,speed:1.02,reward:300,sound:"pistol",gun:{body:[.046,.05,.26],bodyMat:"metal",bodyColor:10199464,barrelLen:.05,barrelR:.013,barrelY:.02,pistol:!0,slideColor:13225684,serrations:!0,mag:{w:.04,h:.02,d:.06,tilt:-.22,z:.1}}},p90:{name:"P90",short:"P90",cat:"ПП",dmg:14,cd:.066,mag:50,res:100,auto:!0,reload:3.3,recoil:.008,recoilYaw:.007,kick:.07,base:.005,grow:.016,movePen:.013,recover:3.8,speed:1.04,reward:600,sound:"smg",gun:{body:[.068,.11,.5],bodyMat:"poly",bodyColor:6121540,barrelLen:.14,barrelR:.012,barrelY:.005,bullpup:!0,topMag:!0,muzzle:{len:.05,r:.02}}},knife:{name:"M48 Tomahawk",short:"НОЖ",cat:"Ближний бой",dmg:60,cd:.45,mag:0,res:0,auto:!0,reload:0,recoil:0,recoilYaw:0,kick:.05,base:0,grow:0,movePen:0,recover:5,speed:1.06,reward:1500,sound:"knife",melee:!0,gun:{body:[.026,.03,.13],bodyMat:"poly",bodyColor:3356734,barrelLen:0,barrelR:0,blade:{len:.17,w:.036}}}},ri=["ak","awp","deagle","p90","knife"];class WE{constructor(e,t){this.state="attract",this.scene=new ox,this.clock=new Ux,this.raf=0,this.time=0,this.attractT=0,this.sfx=new GE,this.pos=new $,this.vel=new $,this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.kick=0,this.spread=0,this.shake=0,this.bobT=0,this.stepAcc=0,this.onGround=!0,this.locked=!1,this.hp=100,this.armor=0,this.nades=1,this.reloading=!1,this.reloadT=0,this.reloadTotal=1.9,this.cooldown=0,this.firing=!1,this.equipped="deagle",this.ammo={},this.scoped=!1,this.switchAnim=1,this.lastCX=0,this.lastCY=0,this.mouseInit=!1,this.keys={},this.deathT=0,this.round=0,this.scoreA=0,this.scoreB=0,this.kills=0,this.deaths=0,this.roundT=V0,this.bots=[],this.nadesFly=[],this.particles=[],this.tracers=[],this.shells=[],this.decals=[],this.weapon=new Wi,this.weaponModels={},this.weaponMuzzles={},this.wheelOpen=!1,this.wheelIndex=0,this.flashT=0,this.boomT=0,this.ray=new dg,this.tmpV=new $,this.tmpD=new $,this.roundTimeout=0,this.onKeyDown=f=>{if(f.code==="Space"&&f.preventDefault(),this.keys[f.code]=!0,this.state!=="playing")return;if(f.code==="Escape"&&!this.locked){this.pause();return}if(f.code==="Tab"){f.preventDefault(),this.openWheel();return}if(this.wheelOpen)return;f.code==="KeyR"&&this.startReload(),f.code==="KeyG"&&this.throwNade();const p=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9"].indexOf(f.code);p>=0&&p<ri.length&&this.switchTo(ri[p])},this.onKeyUp=f=>{this.keys[f.code]=!1,f.code==="Tab"&&(f.preventDefault(),this.closeWheel(!0))},this.onWheel=f=>{this.state!=="playing"||this.wheelOpen||this.cycleWeapon(f.deltaY>0?1:-1)},this.onMouseMove=f=>{if(this.wheelOpen){this.wheelPick(f.clientX,f.clientY);return}if(this.state==="playing")if(this.locked)this.yaw-=f.movementX*.0032,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-f.movementY*.0032));else{if(!this.mouseInit){this.lastCX=f.clientX,this.lastCY=f.clientY,this.mouseInit=!0;return}const p=f.movementX??f.clientX-this.lastCX,_=f.movementY??f.clientY-this.lastCY;this.lastCX=f.clientX,this.lastCY=f.clientY;const v=.0045;this.yaw-=p*v,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-_*v))}},this.onMouseDown=f=>{this.sfx.ensure(),this.state==="playing"&&(f.button===0?(this.firing=!0,this.tryShoot(),this.locked||this.requestLock()):f.button===2&&(this.equipped==="awp"?this.toggleScope():(this.firing=!0,this.tryShoot())))},this.onMouseUp=f=>{(f.button===0||f.button===2)&&(this.firing=!1)},this.onLockChange=()=>{const f=document.pointerLockElement===this.renderer.domElement;this.locked&&!f&&this.state==="playing"&&!this.wheelOpen&&this.pause(),this.mouseInit=!1,this.locked=f,this.wheelOpen||this.hooks.lockedChange(f)},this.onResize=()=>{const f=this.container.clientWidth,p=this.container.clientHeight;this.camera.aspect=f/p,this.camera.updateProjectionMatrix(),this.renderer.setSize(f,p),this.composer.setSize(f,p)},this.onVisibility=()=>{document.hidden&&this.state==="playing"&&this.pause()},this.onContext=f=>f.preventDefault(),this.loop=()=>{this.raf=requestAnimationFrame(this.loop);const f=Math.min(.05,this.clock.getDelta());this.time+=f;const p=this.scene.getObjectByName("dust");p&&(p.rotation.y+=f*.012);const _=this.scene.getObjectByName("clouds");if(_&&(_.rotation.y+=f*.007),this.state==="attract"){this.attractT+=f*.09;const S=17;this.camera.position.set(Math.sin(this.attractT)*S,7.5+Math.sin(this.attractT*.6)*2,Math.cos(this.attractT)*S),this.camera.lookAt(0,1.2,0),this.weapon.visible=!1}else this.weapon.visible=!0,this.state==="playing"?this.updatePlaying(f):this.state==="dying"&&this.updateDying(f),this.updateFx(f),this.state!=="playing"&&this.updateNades(f);const v=this.renderer.domElement,g=this.state==="playing"||this.state==="dying"?"none":"";v.dataset.cur!==g&&(v.dataset.cur=g,v.style.cursor=g),this.composer.render()},this.container=e,this.hooks=t,this.renderer=new NE({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=G0,e.appendChild(this.renderer.domElement),this.renderer.toneMapping=gu,this.renderer.toneMappingExposure=1.06,this.scene.background=new gt(9677244),this.scene.fog=new td(11450813,34,95),this.camera=new si(75,e.clientWidth/e.clientHeight,.05,220),this.camera.rotation.order="YXZ",this.scene.add(this.camera);const r=new bx(13624053,10193507,1.1);this.scene.add(r);const o=new Cx(16772300,2.6);o.position.set(-26,38,-18),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-34,o.shadow.camera.right=34,o.shadow.camera.top=34,o.shadow.camera.bottom=-34,o.shadow.camera.far=100,o.shadow.bias=-6e-4,this.scene.add(o),this.scene.add(new Px(8952234,.4)),this.map=VE(this.scene),this.gunLight=new mo(16761707,0,9,2),this.gunLight.position.set(.3,-.15,-.7),this.camera.add(this.gunLight),this.boomLight=new mo(16748608,0,22,2),this.scene.add(this.boomLight),this.buildWeapons(),this.flash=this.buildFlash(.55),this.weaponMuzzles[this.equipped].add(this.flash);for(let f=0;f<24;f++){const p=new Nt(new Li(1,1,1),new zn({color:16765562,transparent:!0,opacity:0,blending:ua,depthWrite:!1}));p.visible=!1,this.scene.add(p),this.tracers.push({m:p,life:0})}const l=new Li(.016,.05,.016),c=new Zt({color:14263361,metalness:.85,roughness:.35});for(let f=0;f<22;f++){const p=new Nt(l,c);p.visible=!1,this.scene.add(p),this.shells.push({m:p,v:new $,rv:new $,life:0})}const d=new $n(.1,.1);for(let f=0;f<40;f++){const p=new Nt(d,new zn({color:1314826,transparent:!0,opacity:0,depthWrite:!1}));p.visible=!1,this.scene.add(p),this.decals.push({m:p,life:0})}this.composer=new OE(this.renderer),this.composer.addPass(new kE(this.scene,this.camera)),this.composer.addPass(new ma(new rt(e.clientWidth,e.clientHeight),.5,.5,.82)),this.composer.addPass(new BE),this.pos.set(this.map.playerSpawn.x,0,this.map.playerSpawn.z),this.bindEvents(),this.loop()}texCanvas(e,t){const r=document.createElement("canvas");r.width=r.height=e;const o=r.getContext("2d");t(o,e);const l=new po(r);return l.wrapS=l.wrapT=go,l.colorSpace=Cn,l.anisotropy=4,l}texMetal(e){return this.texCanvas(128,(t,r)=>{t.fillStyle=e,t.fillRect(0,0,r,r);for(let o=0;o<300;o++)t.fillStyle=Math.random()>.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.10)",t.fillRect(Math.random()*r,Math.random()*r,1+Math.random()*2.2,1);t.globalAlpha=.09,t.strokeStyle="#ffffff";for(let o=0;o<24;o++){const l=Math.random()*r;t.beginPath(),t.moveTo(0,l),t.lineTo(r,l+(Math.random()-.5)*5),t.stroke()}t.globalAlpha=1})}texWood(){return this.texCanvas(128,(e,t)=>{e.fillStyle="#8a5a2c",e.fillRect(0,0,t,t);for(let r=0;r<26;r++){e.strokeStyle=`rgba(58,32,10,${.14+Math.random()*.26})`,e.lineWidth=1+Math.random()*2.2;const o=Math.random()*t;e.beginPath(),e.moveTo(o,0),e.bezierCurveTo(o+9,t*.3,o-9,t*.62,o+(Math.random()-.5)*12,t),e.stroke()}for(let r=0;r<220;r++)e.fillStyle="rgba(38,20,6,0.14)",e.fillRect(Math.random()*t,Math.random()*t,1.6,1.6);e.globalAlpha=.07,e.fillStyle="#eec27f";for(let r=0;r<6;r++)e.beginPath(),e.ellipse(Math.random()*t,Math.random()*t,16+Math.random()*22,5+Math.random()*4,0,0,7),e.fill();e.globalAlpha=1})}texPolymer(e){return this.texCanvas(128,(t,r)=>{t.fillStyle=e,t.fillRect(0,0,r,r);for(let o=0;o<460;o++)t.fillStyle=Math.random()>.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.12)",t.fillRect(Math.random()*r,Math.random()*r,1.7,1.7);t.globalAlpha=.08,t.strokeStyle="#000000";for(let o=0;o<11;o++){const l=Math.random()*r,c=Math.random()*r;t.beginPath(),t.moveTo(l,c),t.lineTo(l+(Math.random()-.5)*34,c+(Math.random()-.5)*34),t.stroke()}t.globalAlpha=1})}buildGunModel(e){var O,C,D,N;const t=new Wi,r=new Qt,o=R=>`#${R.toString(16).padStart(6,"0")}`,l=new Zt({map:this.texMetal(o(e.bodyMat==="metal"?e.bodyColor:2829875)),roughness:.46,metalness:.72}),c=new Zt({map:this.texMetal("#17191c"),roughness:.4,metalness:.8}),d=new Zt({map:this.texWood(),roughness:.66,metalness:.06}),f=new Zt({map:this.texPolymer(o(e.bodyColor)),roughness:.85,metalness:.1}),p=e.bodyMat==="wood"?d:e.bodyMat==="poly"?f:l,_=new Zt({color:14278371,roughness:.22,metalness:.95}),v=(R,M,P,V,k,B,te,le=0,j=0,ue=0)=>{const K=new Nt(new Li(R,M,P),V);return K.position.set(k,B,te),K.rotation.set(le,j,ue),t.add(K),K},g=(R,M,P,V,k,B,te,le=14)=>{const j=new Nt(new da(R,M,P,le),V);return j.rotation.x=Math.PI/2,j.position.set(k,B,te),t.add(j),j},[S,w,T]=e.body,y=e.barrelY??.015;if(e.melee&&e.blade){const R=e.blade;v(.03,.034,.13,f,0,.005,.075),v(.032,.012,.03,c,0,-.014,.05),v(.032,.012,.03,c,0,-.014,.085),v(.034,.016,.018,c,0,.005,.148),v(.052,.014,.02,l,0,.012,0),v(R.w,.008,R.len,_,0,.02,-R.len/2-.01),v(R.w*.92,.003,R.len,new Zt({color:16054266,roughness:.12,metalness:1}),0,.0155,-R.len/2-.01),v(R.w*.3,.004,R.len*.9,c,0,.026,-R.len/2-.015);const M=v(R.w*.62,.007,R.w*.62,_,0,.02,-R.len-.01-R.w*.2,0,Math.PI/4);return M.scale.z=.55,r.position.set(0,.02,-R.len-.05),t.add(r),{group:t,muzzle:r}}if(e.pistol){const R=new Zt({map:this.texMetal(o(e.slideColor??13225684)),roughness:.3,metalness:.85});if(v(S,w*.9,T,l,0,-.006,0),v(S*1.04,w*.62,T*1.02,R,0,w*.5,0),e.serrations)for(let M=0;M<6;M++)v(.002,w*.5,.008,c,S*.53,w*.5,T*.28+M*.012),v(.002,w*.5,.008,c,-S*.53,w*.5,T*.28+M*.012);return g(e.barrelR*.9,e.barrelR*.9,.06,c,0,w*.5,-T/2-.02),v(.012,.03,.012,R,0,w*.86,-T*.4),v(S*.8,.02,.016,R,0,w*.84,T*.34),v(S*.9,.05,.05,c,0,w*.16,T*.44),v(S*.94,w*1.5,.075,l,0,-w*1.05,T*.26,-.2),v(S*.8,.05,.02,c,0,-w*1.62,T*.2),v(.018,.04,.05,c,0,-w*.55,T*.05),v(.008,.03,.014,c,0,-w*.36,.02),v(S*.5,.028,.014,c,0,w*.62,T*.52,-.5),r.position.set(0,w*.5,-T/2-.055),t.add(r),{group:t,muzzle:r}}v(S,w,T,p,0,0,0);const x=Math.floor(T/.045);for(let R=0;R<x;R++)v(S*.5,.011,.016,c,0,w/2+.005,-T/2+.03+R*.045);let I=-T/2;if(e.barrelLen>0&&(g(e.barrelR,e.barrelR,e.barrelLen,c,0,y,I-e.barrelLen/2),I-=e.barrelLen),e.muzzle&&(g(e.muzzle.r,e.muzzle.r,e.muzzle.len,l,0,y,I-e.muzzle.len/2),g(e.muzzle.r*.55,e.muzzle.r*.55,e.muzzle.len*.5,c,0,y,I-e.muzzle.len*.55),I-=e.muzzle.len),e.gasTube&&(g(.011,.011,(((O=e.handguard)==null?void 0:O[2])??.2)*.95,l,0,y+w*.42,-T/2-(((C=e.handguard)==null?void 0:C[2])??.2)*.47),v(S*.7,w*.5,.03,l,0,y+w*.28,-T/2-(((D=e.handguard)==null?void 0:D[2])??.2)-.015),v(.008,.05,.008,c,0,y+w*.62,-T/2-(((N=e.handguard)==null?void 0:N[2])??.2)-.015),v(.044,.02,.014,c,0,w/2+.02,T*.3),v(.012,.03,.05,c,S*.42,.02,T*.05)),e.handguard){const[R,M,P]=e.handguard,V=e.handguardMat==="wood"?d:f;v(R,M,P,V,0,y-M*.12,-T/2-P/2+.012),v(R*.86,M*.4,P*.96,c,0,y+M*.42,-T/2-P/2+.012);for(let k=0;k<3;k++)v(.004,M*.5,.045,c,R*.505,y-M*.12,-T/2-.05-k*.07),v(.004,M*.5,.045,c,-R*.505,y-M*.12,-T/2-.05-k*.07)}if(e.mag){const R=e.mag;v(R.w,R.h,R.d,c,R.x??0,-w/2-R.h/2+.025,(R.z??0)+.02,R.tilt),v(R.w*.9,.02,R.d*.9,l,R.x??0,-w/2-R.h+.03,(R.z??0)+.02+Math.sin(R.tilt)*R.h*.45,R.tilt)}if(e.topMag){const R=new Zt({color:10135650,roughness:.4,metalness:.1,transparent:!0,opacity:.55});v(S*.92,.024,T*.86,R,0,w/2+.012,-.01);for(let M=0;M<8;M++)v(.008,.02,.014,new Zt({color:14201946,metalness:.8,roughness:.35}),0,w/2+.012,-T*.3+M*.045)}if(e.bullpup&&(v(S*.9,w*1.12,.09,p,0,-.004,T/2+.035),v(S*.94,w*.9,.02,c,0,-.004,T/2+.085),v(S*.8,.03,.1,c,0,w/2+.012,T*.28),v(S*.7,.05,.12,p,0,-w/2-.02,-T*.3,-.55),v(.016,.05,.05,c,S*.4,.01,-T*.34),v(.016,.05,.05,c,-S*.4,.01,-T*.34)),e.stock){const R=e.stock,M=R.mat==="wood"?d:new Zt({map:this.texPolymer(o(R.color)),roughness:.8,metalness:.12});v(S*.88,w*1.05,R.l*.5,M,0,-R.drop*.35,T/2+R.l*.25),v(S*.92,w*1.4,R.l*.5,M,0,-R.drop,T/2+R.l*.75),v(S*.96,w*1.45,.018,c,0,-R.drop,T/2+R.l+.002)}if(e.grip&&(v(S*.85,.115,.06,p,0,-w/2-.055,T*.3,-.22),v(S*.7,.03,.02,c,0,-w/2-.1,T*.16)),e.scope){const R=e.scope,M=w/2+R.r+.024;g(R.r,R.r,R.len,c,0,M,-.02),g(R.r*1.45,R.r,.055,c,0,M,-.02-R.len/2),g(R.r*1.2,R.r,.05,c,0,M,-.02+R.len/2);const P=new Nt(new xu(R.r*1.3,20),new zn({color:10474751}));P.position.set(0,M,-.02+R.len/2+.027),P.rotation.y=Math.PI,t.add(P),v(.014,.05,.03,c,0,w/2+.01,-.06),v(.014,.05,.03,c,0,w/2+.01,.04),v(.004,.02,.004,c,0,M+R.r+.012,-.1)}return e.bipod&&(v(.012,.2,.012,c,.02,-w/2-.08,-T*.36,.45,0,.28),v(.012,.2,.012,c,-.02,-w/2-.08,-T*.36,.45,0,-.28),v(.05,.02,.05,c,0,-w/2-.012,-T*.36)),e.boltHandle&&(v(.012,.012,.07,l,S*.55,-.005,T*.1,0,0,.7),g(.011,.011,.024,l,S*.58,-.035,T*.07)),r.position.set(0,y,I-.02),t.add(r),{group:t,muzzle:r}}buildWeapons(){const e=this.weapon;for(const t of ri){const{group:r,muzzle:o}=this.buildGunModel(ii[t].gun);this.weaponModels[t]=r,this.weaponMuzzles[t]=o,e.add(r),r.visible=!1}e.position.set(.24,-.22,-.45),this.camera.add(e)}buildFlash(e){const t=new zn({color:16763258,transparent:!0,opacity:0,blending:ua,depthWrite:!1,side:Pi}),r=new Wi,o=new Nt(new $n(e,e),t),l=new Nt(new $n(e,e*.36),t);l.rotation.z=Math.PI/2,r.add(o,l);const c=new Nt(new $n(.01,.01),t);return c.add(r),c}bindEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("wheel",this.onWheel,{passive:!0}),window.addEventListener("resize",this.onResize),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("pointerlockchange",this.onLockChange),document.addEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.addEventListener("contextmenu",this.onContext)}requestLock(){try{const e=this.renderer.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}startMatch(){this.sfx.ensure(),this.scoreA=0,this.scoreB=0,this.round=0,this.kills=0,this.deaths=0,this.equipped="deagle",this.applyWeaponVisibility(),this.hooks.score(0,0),this.hooks.kills(0),this.startRound()}resume(){this.state==="paused"&&(this.state="playing",this.requestLock())}pause(){this.state==="playing"&&(this.state="paused",this.firing=!1,this.mouseInit=!1,this.scoped&&this.toggleScope(!1),document.pointerLockElement?document.exitPointerLock():this.hooks.lockedChange(!1))}toMenu(){window.clearTimeout(this.roundTimeout),this.clearEntities(),this.state="attract",this.scoped&&this.toggleScope(!1),document.pointerLockElement&&document.exitPointerLock()}dispose(){cancelAnimationFrame(this.raf),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("wheel",this.onWheel),window.removeEventListener("resize",this.onResize),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mousedown",this.onMouseDown),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("pointerlockchange",this.onLockChange),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.removeEventListener("contextmenu",this.onContext),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement)}clearEntities(){for(const e of this.bots)e.dispose(this.scene);this.bots=[];for(const e of this.nadesFly)this.scene.remove(e.m);this.nadesFly=[];for(const e of this.particles)e.life=0,e.m.visible=!1}startRound(){this.round++,this.clearEntities();const e=this.map.playerSpawn;this.pos.set(e.x,0,e.z),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.spread=0,this.shake=0,this.kick=0,this.hp=100,this.armor=100;for(const l of ri)this.ammo[l]={mag:ii[l].mag,res:ii[l].res};this.nades=Math.min(3,this.round),this.reloading=!1,this.firing=!1,this.scoped=!1,this.hooks.scoped(!1),this.roundT=V0;const t=Math.min(8,2+this.round),r=[...this.map.botSpawns].sort(()=>Math.random()-.5),o={colliders:this.map.colliders,bounds:this.map.bounds,solids:this.map.solids,playerEye:()=>this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z),playerSpeedXZ:()=>Math.hypot(this.vel.x,this.vel.z),tracer:(l,c,d)=>this.spawnTracer(l,c,d),damagePlayer:(l,c)=>this.damagePlayer(l,c),sfx:this.sfx};for(let l=0;l<t;l++){const c=r[l%r.length],d=new HE(B0[l%B0.length],c.x+(Math.random()-.5),c.z+(Math.random()-.5),3+this.round*.22+Math.random()*.3,o);d.group.rotation.y=Math.random()*Math.PI*2,this.scene.add(d.group),d.group.updateMatrixWorld(!0),this.bots.push(d)}this.state="playing",Gf-this.scoreA,this.hooks.banner({title:`РАУНД ${this.round}`,sub:`противников: ${t} · стволы: [1][2][3] / колесо`,tone:"info"}),this.sfx.beep(760,.12,.22),this.requestLock()}endRound(e){if(this.state!=="playing"&&this.state!=="dying")return;this.state="roundEnd",this.firing=!1,this.scoped&&this.toggleScope(!1),this.camera.fov=75,this.camera.updateProjectionMatrix(),e?this.scoreA++:this.scoreB++,this.hooks.score(this.scoreA,this.scoreB),document.pointerLockElement&&document.exitPointerLock();const t=this.scoreA>=Gf||this.scoreB>=Gf;this.hooks.banner({title:e?"РАУНД ВЫИГРАН":"РАУНД ПРОИГРАН",sub:`счёт ${this.scoreA} : ${this.scoreB}`,tone:e?"win":"lose"}),e?this.sfx.win():this.sfx.lose(),this.roundTimeout=window.setTimeout(()=>{t?this.finish(this.scoreA>this.scoreB):this.startRound()},3100)}finish(e){this.scoped&&this.toggleScope(!1),this.camera.fov=75,this.camera.updateProjectionMatrix(),this.hooks.over({result:e?"victory":"defeat",kills:this.kills,deaths:this.deaths,won:this.scoreA,lost:this.scoreB}),this.clearEntities(),this.state="attract"}startReload(){const e=ii[this.equipped];if(e.melee||e.reload<=0)return;const t=this.ammo[this.equipped];this.reloading||t.mag>=e.mag||this.state!=="playing"||(t.res<=0&&(t.res=e.mag,this.hooks.feed({killer:"Снабжение",victim:`+${e.mag} патронов`,head:!1,byPlayer:!0})),this.scoped&&this.toggleScope(!1),this.reloading=!0,this.reloadTotal=e.reload,this.reloadT=e.reload,this.sfx.reload())}tryShoot(){if(this.state!=="playing"||this.cooldown>0||this.reloading||this.switchAnim<1||this.wheelOpen)return;const e=ii[this.equipped];if(e.melee){this.meleeAttack(e);return}const t=this.ammo[this.equipped];if(t.mag<=0){this.sfx.dry(),this.firing=!1,e.reload>0&&this.startReload();return}t.mag--,this.cooldown=e.cd,e.sound==="sniper"?this.sfx.sniper():e.sound==="pistol"?this.sfx.pistol():e.sound==="smg"?this.sfx.smg():this.sfx.shoot();const r=e.sound==="sniper";this.flashT=r?.07:.04,this.flash.rotation.z=Math.random()*Math.PI;const o=(r?1.2:e.sound==="pistol"?.55:.75)+Math.random()*.5;this.flash.scale.set(o,o,o),this.gunLight.intensity=r?40:26,this.kick=Math.min(1.6,this.kick+1),this.recoilPitch+=e.recoil+Math.random()*e.recoil*.5,this.recoilYaw+=(Math.random()-.5)*e.recoilYaw*2,this.spread=Math.min(1,this.spread+(this.onGround?e.kick:e.kick*1.6)),this.spawnShell(),this.camera.getWorldDirection(this.tmpD);const l=Math.hypot(this.vel.x,this.vel.z);let c;e.sound==="sniper"?c=this.scoped?.0012+this.spread*.004:.075+this.spread*.03+(l>1.2?.05:0):c=e.base+this.spread*e.grow+(l>1.2?e.movePen:0)+(this.onGround?0:.012),this.tmpD.x+=(Math.random()-.5)*2*c,this.tmpD.y+=(Math.random()-.5)*2*c,this.tmpD.z+=(Math.random()-.5)*2*c,this.tmpD.normalize(),this.camera.getWorldPosition(this.tmpV),this.ray.set(this.tmpV,this.tmpD),this.ray.far=140;const d=[...this.map.solids];for(const v of this.bots)v.alive&&d.push(...v.hitboxes);const f=this.ray.intersectObjects(d,!1),p=new $;this.weaponMuzzles[this.equipped].getWorldPosition(p);const _=f.length?f[0].point:this.tmpV.clone().addScaledVector(this.tmpD,120);if(this.spawnTracer(p,_,e.sound==="sniper"?16771488:16765562),this.burst(p,10263184,2,.6,.6,-2.2),f.length){const v=f[0].object.userData;if(v.bot&&v.bot.alive){const g=v.part==="head",S=v.bot.hit(v.part||"body",g?e.dmg*4:e.dmg);this.burst(f[0].point,10361627,g?16:10,3.4,.5),S?this.onBotKilled(v.bot,g):(this.hooks.hitmark(g?"head":"hit"),this.sfx.hit(g))}else if(this.burst(f[0].point,14205066,7,2.6,.35),this.burst(f[0].point,16773304,4,3.4,.25),f[0].face){const g=new $().copy(f[0].face.normal).transformDirection(f[0].object.matrixWorld);this.addDecal(f[0].point,g)}}}meleeAttack(e){this.cooldown=e.cd,this.kick=Math.min(1.6,this.kick+1),this.sfx.knife(),this.camera.getWorldDirection(this.tmpD),this.camera.getWorldPosition(this.tmpV),this.ray.set(this.tmpV,this.tmpD),this.ray.far=2.4;const t=[];for(const o of this.bots)o.alive&&t.push(...o.hitboxes);const r=this.ray.intersectObjects(t,!1);if(r.length){const o=r[0].object.userData;if(o.bot&&o.bot.alive){const l=o.part==="head",c=o.bot.hit(o.part||"body",l?e.dmg*2:e.dmg);this.burst(r[0].point,10361627,14,3.6,.5),c?this.onBotKilled(o.bot,l):(this.hooks.hitmark(l?"head":"hit"),this.sfx.hit(l))}}}onBotKilled(e,t){this.kills++,this.hooks.kills(this.kills),this.hooks.hitmark("kill"),this.hooks.feed({killer:"ВЫ",victim:e.name,head:t,byPlayer:!0}),this.sfx.kill();const r=e.group.position;this.burst(new $(r.x,r.y+1,r.z),10361627,18,4.2,.7)}damagePlayer(e,t){if(this.state!=="playing")return;let r=e;if(this.armor>0){const d=Math.min(this.armor,r*.5);this.armor-=d,r-=d}this.hp-=r,this.shake=Math.min(1.2,this.shake+r/22);const o=t.x-this.pos.x,l=t.z-this.pos.z,c=this.normAngle(this.yaw+Math.PI-Math.atan2(o,l));if(this.hooks.damage(r,c),this.sfx.hurt(),this.hp<=0){this.hp=0,this.deaths++;const d=this.bots.find(f=>f.group.position===t);this.hooks.feed({killer:d?d.name:"Взрыв",victim:"ВЫ",head:!1,byPlayer:!1}),this.state="dying",this.deathT=0,this.firing=!1,this.hooks.banner({title:"ВЫ УБИТЫ",sub:"раунд потерян",tone:"lose"}),this.sfx.lose()}}normAngle(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}switchTo(e){this.equipped===e||this.state!=="playing"||(this.equipped=e,this.reloading=!1,this.firing=!1,this.scoped&&this.toggleScope(!1),this.switchAnim=0,this.applyWeaponVisibility(),this.sfx.switchW())}applyWeaponVisibility(){for(const e of ri)this.weaponModels[e].visible=e===this.equipped;this.weaponMuzzles[this.equipped].add(this.flash)}cycleWeapon(e){if(this.state!=="playing")return;const t=ri.indexOf(this.equipped),r=ri.length;this.switchTo(ri[(t+e+r)%r])}openWheel(){this.state!=="playing"||this.wheelOpen||(this.wheelOpen=!0,this.firing=!1,this.wheelIndex=ri.indexOf(this.equipped),document.pointerLockElement&&document.exitPointerLock(),this.emitWheel())}closeWheel(e){this.wheelOpen&&(this.wheelOpen=!1,e&&this.switchTo(ri[this.wheelIndex]),this.hooks.wheel(null),this.requestLock())}emitWheel(){this.hooks.wheel({items:ri.map(e=>({id:e,name:ii[e].name,short:ii[e].short,cat:ii[e].cat})),active:this.wheelIndex})}wheelPick(e,t){if(!this.wheelOpen)return;const r=window.innerWidth/2,o=window.innerHeight/2,l=e-r,c=t-o;if(Math.hypot(l,c)<40)return;let d=Math.atan2(c,l)+Math.PI/2;d<0&&(d+=Math.PI*2);const f=ri.length;this.wheelIndex=Math.round(d/(Math.PI*2)*f)%f,this.emitWheel()}toggleScope(e){if(!ii[this.equipped].gun.scope&&e!==!1)return;const r=e!==void 0?e:!this.scoped;r!==this.scoped&&(this.scoped=r,this.spread=Math.min(this.spread,.15),this.sfx.zoom(r),this.hooks.scoped(r))}spawnShell(){const e=this.shells.find(l=>l.life<=0);if(!e)return;e.m.visible=!0,this.camera.getWorldPosition(this.tmpV);const t=new $(1,0,0).applyQuaternion(this.camera.quaternion),r=new $(0,1,0).applyQuaternion(this.camera.quaternion),o=new $(0,0,-1).applyQuaternion(this.camera.quaternion);e.m.position.copy(this.tmpV).addScaledVector(t,.22).addScaledVector(r,-.1).addScaledVector(o,.2),e.v.copy(t).multiplyScalar(1.6+Math.random()*1.2).addScaledVector(r,1.6+Math.random()*1.4).addScaledVector(o,.5),e.rv.set((Math.random()-.5)*25,(Math.random()-.5)*25,(Math.random()-.5)*25),e.life=1.1}addDecal(e,t){const r=this.decals.find(l=>l.life<=0);if(!r)return;r.m.position.copy(e).addScaledVector(t,.015),r.m.lookAt(this.tmpV.copy(e).add(t)),r.m.rotation.z=Math.random()*Math.PI;const o=.7+Math.random()*.9;r.m.scale.set(o,o,o),r.m.visible=!0,r.life=7}throwNade(){if(this.nades<=0||this.state!=="playing")return;this.nades--,this.sfx.pin();const e=new Nt(new yu(.09,10,8),new Zt({color:4016684,roughness:.6}));e.castShadow=!0,this.camera.getWorldPosition(this.tmpV),this.camera.getWorldDirection(this.tmpD),e.position.copy(this.tmpV).addScaledVector(this.tmpD,.5);const t=this.tmpD.clone().multiplyScalar(13.5);t.y+=3.4,t.x+=this.vel.x*.35,t.z+=this.vel.z*.35,this.scene.add(e),this.nadesFly.push({m:e,v:t,fuse:1.45})}updateNades(e){for(let t=this.nadesFly.length-1;t>=0;t--){const r=this.nadesFly[t];r.v.y-=21*e,r.m.position.addScaledVector(r.v,e);const o=r.m.position;o.y<.09&&(o.y=.09,r.v.y=Math.abs(r.v.y)*.42,r.v.x*=.72,r.v.z*=.72);for(const c of this.map.colliders)if(o.x>c.minX-.09&&o.x<c.maxX+.09&&o.z>c.minZ-.09&&o.z<c.maxZ+.09&&o.y<3){const d=o.x-(c.minX-.09),f=c.maxX+.09-o.x,p=o.z-(c.minZ-.09),_=c.maxZ+.09-o.z,v=Math.min(d,f,p,_);v===d?(o.x=c.minX-.09,r.v.x=-Math.abs(r.v.x)*.5):v===f?(o.x=c.maxX+.09,r.v.x=Math.abs(r.v.x)*.5):v===p?(o.z=c.minZ-.09,r.v.z=-Math.abs(r.v.z)*.5):(o.z=c.maxZ+.09,r.v.z=Math.abs(r.v.z)*.5)}r.fuse-=e;const l=r.fuse<.5?1+Math.sin(this.time*30)*.15:1;r.m.scale.set(l,l,l),r.fuse<=0&&(this.explode(o.clone()),this.scene.remove(r.m),this.nadesFly.splice(t,1))}}explode(e){this.sfx.boom(),this.boomLight.position.copy(e),this.boomLight.intensity=260,this.boomT=.3,this.shake=Math.min(1.4,this.shake+.9),this.burst(e,16748608,26,9,.7,5),this.burst(e,16769184,18,12,.4,6),this.burst(e,5591114,20,5,1.1,2);for(const r of this.bots){if(!r.alive)continue;const o=r.group.position.distanceTo(e);o<6.5&&r.hit("body",130*(1-o/6.5))&&this.onBotKilled(r,!1)}const t=Math.hypot(this.pos.x-e.x,this.pos.z-e.z);t<5.5&&this.damagePlayer(50*(1-t/5.5),e)}burst(e,t,r,o,l,c=9){for(let d=0;d<r;d++){let f=this.particles.find(_=>_.life<=0);if(!f){if(this.particles.length>280)return;const _=new Nt(new Li(.06,.06,.06),new zn({color:t,transparent:!0}));this.scene.add(_),f={m:_,v:new $,g:c,life:0,max:1},this.particles.push(f)}f.m.material.color.set(t),f.m.visible=!0,f.m.position.copy(e),f.v.set((Math.random()-.5)*2,Math.random()*1.4,(Math.random()-.5)*2).normalize().multiplyScalar(o*(.4+Math.random()*.8)),f.g=c,f.max=l*(.6+Math.random()*.7),f.life=f.max;const p=.6+Math.random();f.m.scale.set(p,p,p)}}spawnTracer(e,t,r){const o=this.tracers.find(f=>f.life<=0);if(!o)return;const l=e.clone().add(t).multiplyScalar(.5),c=e.distanceTo(t);o.m.position.copy(l),o.m.scale.set(.022,.022,Math.max(.1,c)),o.m.lookAt(t);const d=o.m.material;d.color.set(r),d.opacity=.85,o.m.visible=!0,o.life=.07}updateFx(e){for(const t of this.particles)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.v.y-=t.g*e,t.m.position.addScaledVector(t.v,e),t.m.position.y<.02&&(t.m.position.y=.02,t.v.y=Math.abs(t.v.y)*.3,t.v.x*=.7,t.v.z*=.7),t.m.material.opacity=Math.min(1,t.life/t.max*1.4)}for(const t of this.shells)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.v.y-=13*e,t.m.position.addScaledVector(t.v,e),t.m.position.y<.02&&(t.m.position.y=.02,t.v.y=Math.abs(t.v.y)*.35,t.v.x*=.6,t.v.z*=.6,t.rv.multiplyScalar(.5)),t.m.rotation.x+=t.rv.x*e,t.m.rotation.y+=t.rv.y*e,t.m.rotation.z+=t.rv.z*e}for(const t of this.decals)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.material.opacity=Math.min(.7,t.life*.5)}for(const t of this.tracers)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.material.opacity=t.life/.07*.85}this.flashT>0?(this.flashT-=e,this.setFlashOpacity(Math.max(0,this.flashT/.04))):this.setFlashOpacity(0),this.gunLight.intensity=Math.max(0,this.gunLight.intensity-e*260),this.boomT>0&&(this.boomT-=e,this.boomLight.intensity=Math.max(0,this.boomT/.3)*260),this.recoilPitch*=Math.exp(-9*e),this.recoilYaw*=Math.exp(-9*e),this.kick=Math.max(0,this.kick-e*9),this.shake=Math.max(0,this.shake-e*2.6)}setFlashOpacity(e){this.flash.traverse(t=>{const r=t;r.material&&(r.material.opacity=e)})}updateDying(e){this.deathT+=e,this.camera.position.set(this.pos.x,Math.max(.45,this.pos.y+1.55-this.deathT*1.4),this.pos.z),this.camera.rotation.set(this.pitch*.4-this.deathT*.25,this.yaw,Math.min(1.15,this.deathT*1.6)),this.deathT>1.9&&this.endRound(!1)}updatePlaying(e){const t=(this.keys.KeyW?1:0)-(this.keys.KeyS?1:0),r=(this.keys.KeyD?1:0)-(this.keys.KeyA?1:0),o=!!this.keys.ShiftLeft||!!this.keys.ShiftRight,l=ii[this.equipped],c=(o?2.6:5.7)*l.speed*(this.scoped?.42:1),d=Math.sin(this.yaw),f=Math.cos(this.yaw);let p=-d*t+f*r,_=-f*t-d*r;const v=Math.hypot(p,_);v>.01?(p=p/v*c,_=_/v*c):(p=0,_=0);const g=this.onGround?1-Math.exp(-13*e):1-Math.exp(-3.2*e);this.vel.x+=(p-this.vel.x)*g,this.vel.z+=(_-this.vel.z)*g,this.keys.Space&&this.onGround&&(this.vel.y=8.2,this.onGround=!1,this.sfx.jump()),this.vel.y-=24*e,this.pos.y+=this.vel.y*e,this.pos.y<=0&&(this.pos.y=0,this.vel.y=0,this.onGround=!0),Mg(this.pos,this.vel.x*e,this.vel.z*e,.42,this.map.colliders,this.map.bounds);const S=Math.hypot(this.vel.x,this.vel.z);if(this.onGround&&S>.6){this.bobT+=S*e*1.5,this.stepAcc+=S*e;const B=o?2.4:1.9;this.stepAcc>B&&(this.stepAcc=0,this.sfx.step())}const w=this.onGround&&S>.6?Math.sin(this.bobT*2)*.032*Math.min(1,S/5):0,T=(Math.random()-.5)*this.shake*.05,y=(Math.random()-.5)*this.shake*.05,x=(Math.random()-.5)*this.shake*.03;this.camera.position.set(this.pos.x+T,this.pos.y+1.55+w+y,this.pos.z),this.camera.rotation.set(this.pitch+this.recoilPitch+y*.4,this.yaw+this.recoilYaw,x);const I=this.scoped?18:75;Math.abs(this.camera.fov-I)>.05&&(this.camera.fov+=(I-this.camera.fov)*Math.min(1,16*e),this.camera.updateProjectionMatrix());const O=this.weapon;O.visible=!this.scoped;const C=Math.sin(Math.min(1,this.switchAnim)*Math.PI)*(this.switchAnim>=1?0:.16),D=.24+Math.sin(this.bobT)*.006*Math.min(1,S/5)-this.vel.x*.004*f-this.vel.z*.004*-d;O.position.x+=(D-O.position.x)*Math.min(1,12*e),O.position.y=-.22+Math.abs(Math.cos(this.bobT))*.008*Math.min(1,S/5)-C,O.position.z=-.45+this.kick*.055;let N=this.kick*.1;this.reloading&&(N-=Math.sin(Math.min(1,1-this.reloadT/this.reloadTotal)*Math.PI)*.85),this.switchAnim<1&&(N-=Math.sin(this.switchAnim*Math.PI)*.5),O.rotation.x=N,O.rotation.z=this.kick*.02;const R=S>1.2;this.spread=Math.max(0,this.spread-e*l.recover*(R?.45:1)-(this.onGround&&!R?e*1.2:0));const M=ii[this.equipped];if(this.cooldown=Math.max(0,this.cooldown-e),this.switchAnim=Math.min(1,this.switchAnim+e/.28),this.reloading&&(this.reloadT-=e,this.reloadT<=0)){this.reloading=!1;const B=this.ammo[this.equipped],te=Math.min(M.mag-B.mag,B.res);B.mag+=te,B.res-=te}this.firing&&M.auto&&this.tryShoot();const P=this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z);let V=0;for(let B=this.bots.length-1;B>=0;B--){const te=this.bots[B],le=te.update(e,P);te.alive&&V++,le||(te.dispose(this.scene),this.bots.splice(B,1))}for(let B=0;B<this.bots.length;B++)for(let te=B+1;te<this.bots.length;te++){const le=this.bots[B].group.position,j=this.bots[te].group.position,ue=j.x-le.x,K=j.z-le.z,q=Math.hypot(ue,K);if(q<.9&&q>.001){const ae=(.9-q)/2;le.x-=ue/q*ae,le.z-=K/q*ae,j.x+=ue/q*ae,j.z+=K/q*ae}}this.updateNades(e),this.roundT-=e,V===0&&this.bots.every(B=>!B.alive)?(this.roundT=Math.max(this.roundT,.9),this.endRound(!0)):this.roundT<=0&&(this.roundT=0,this.endRound(!1));const k=this.ammo[this.equipped];this.hooks.hud({hp:Math.max(0,Math.ceil(this.hp)),armor:Math.max(0,Math.ceil(this.armor)),mag:k.mag,res:k.res,nades:this.nades,timer:Math.max(0,Math.ceil(this.roundT)),spreadPx:Math.round(this.scoped?2:5+this.spread*30+(R?4:0)),enemies:V,reloading:this.reloading,weapon:`${ri.indexOf(this.equipped)+1}·${ii[this.equipped].short}`,melee:!!ii[this.equipped].melee}),this.hooks.radar({px:this.pos.x,pz:this.pos.z,yaw:this.yaw,dots:this.bots.filter(B=>B.alive).map(B=>({x:B.group.position.x,z:B.group.position.z}))})}}const gi=(s,e)=>{s&&s.dataset.v!==e&&(s.dataset.v=e,s.textContent=e)},H0=(s,e)=>{s&&(s.classList.remove(e),s.offsetWidth,s.classList.add(e))},XE=()=>z.jsx("svg",{viewBox:"0 0 16 16",className:"h-3.5 w-3.5 fill-current",children:z.jsx("path",{d:"M8 1a6 6 0 0 0-6 6c0 2.2 1.2 4 3 5v3h2v-2h2v2h2v-3c1.8-1 3-2.8 3-5a6 6 0 0 0-6-6zM5.5 9A1.5 1.5 0 1 1 7 7.5 1.5 1.5 0 0 1 5.5 9zm5 0A1.5 1.5 0 1 1 12 7.5 1.5 1.5 0 0 1 10.5 9z"})}),qE=()=>z.jsx("svg",{viewBox:"0 0 16 16",className:"h-4 w-4 fill-current",children:z.jsx("path",{d:"M8 1 2 3.5v4C2 11.6 4.6 14.6 8 15.5c3.4-.9 6-3.9 6-8v-4L8 1z"})}),YE=({dim:s})=>z.jsxs("svg",{viewBox:"0 0 16 16",className:`h-4 w-4 ${s?"opacity-25":""}`,children:[z.jsx("path",{className:"fill-current",d:"M9 2h3v1.5h-2l-1 1.6A5 5 0 1 1 6.2 4L9 2z"}),z.jsx("circle",{cx:"8",cy:"9.5",r:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.4"})]}),jE=()=>z.jsx("span",{className:"mx-1.5 rounded-sm border border-[#3a4a5c] bg-[#141c25] px-1.5 py-px text-[10px] font-semibold tracking-wider text-[#9fb2c6]",children:"AK-47"});function $E(){var vt,lt;const s=yt.useRef(null),e=yt.useRef(null),t=yt.useRef(null),[r,o]=yt.useState("menu"),[l,c]=yt.useState(!1),[d,f]=yt.useState([]),[p,_]=yt.useState(null),[v,g]=yt.useState(null),[S,w]=yt.useState(!1),[T,y]=yt.useState(1),[x,I]=yt.useState(!1),[O,C]=yt.useState(!1),[D,N]=yt.useState(null),[R,M]=yt.useState(!1),P=yt.useRef(null),V=yt.useRef(null),k=yt.useRef(null),B=yt.useRef(null),te=yt.useRef(null),le=yt.useRef(null),j=yt.useRef(null),ue=yt.useRef(null),K=yt.useRef(null),q=yt.useRef(null),ae=yt.useRef(null),fe=yt.useRef(null),U=yt.useRef(null),J=yt.useRef(null),Oe=yt.useRef(null),We=yt.useRef(null),Be=yt.useRef(null),oe=yt.useRef(0),_e=yt.useRef(0),G=yt.useRef(null),me=yt.useRef(!1),xe=yt.useRef(0),Fe=yt.useRef(!1),At=yt.useRef(1);yt.useEffect(()=>{if(!s.current)return;const Ge=Ce=>{const ct=t.current;if(!ct)return;const Le=ct.getContext("2d");if(!Le)return;const Ct=150,W=Ct/2;Le.clearRect(0,0,Ct,Ct),Le.save(),Le.translate(W,W),Le.beginPath(),Le.arc(0,0,W-2,0,7),Le.fillStyle="rgba(11,17,23,0.85)",Le.fill(),Le.strokeStyle="rgba(242,163,60,0.55)",Le.lineWidth=1.5,Le.stroke(),Le.beginPath(),Le.arc(0,0,(W-2)*.55,0,7),Le.strokeStyle="rgba(139,152,167,0.22)",Le.lineWidth=1,Le.stroke();const Wt=(W-8)/22,wt=Math.cos(Ce.yaw),L=Math.sin(Ce.yaw),E=(Ee,be)=>[Ee*wt-be*L,Ee*L+be*wt];Le.strokeStyle="rgba(139,152,167,0.3)",Le.beginPath(),[[-20,-20],[20,-20],[20,20],[-20,20]].forEach(([Ee,be],pe)=>{const[ge,Pe]=E(Ee-Ce.px,be-Ce.pz);pe===0?Le.moveTo(ge*Wt,Pe*Wt):Le.lineTo(ge*Wt,Pe*Wt)}),Le.closePath(),Le.stroke();const[se,de]=E(0,-1);Le.fillStyle="#f2a33c",Le.beginPath(),Le.arc(se*(W-9),de*(W-9),2.4,0,7),Le.fill();for(const Ee of Ce.dots){const[be,pe]=E(Ee.x-Ce.px,Ee.z-Ce.pz);Math.hypot(be,pe)*Wt>W-8||(Le.fillStyle="#e0453a",Le.fillRect(be*Wt-2.5,pe*Wt-2.5,5,5))}Le.fillStyle="#eae6dc",Le.beginPath(),Le.moveTo(0,-6),Le.lineTo(4.4,5),Le.lineTo(-4.4,5),Le.closePath(),Le.fill(),Le.restore()},It=Ce=>{gi(P.current,String(Ce.hp)),gi(k.current,String(Ce.armor)),V.current&&(V.current.style.width=`${Ce.hp}%`,V.current.style.background=Ce.hp>55?"#7fb069":Ce.hp>25?"#f2a33c":"#e0453a"),B.current&&(B.current.style.width=`${Ce.armor}%`);const ct=te.current;gi(ct,String(Ce.mag)),ct&&(ct.style.color=Ce.mag===0?"#e0453a":Ce.mag<=5?"#f2a33c":"#eae6dc"),gi(le.current,`/ ${Ce.res}`);const Le=Math.floor(Ce.timer/60),Ct=String(Ce.timer%60).padStart(2,"0");gi(j.current,`${Le}:${Ct}`),j.current&&j.current.classList.toggle("blink-fast",Ce.timer<=10),gi(ue.current,`ОСТАЛОСЬ: ${Ce.enemies}`),fe.current&&fe.current.style.setProperty("--g",`${Ce.spreadPx}px`),Be.current&&(Be.current.style.display=Ce.reloading?"block":"none");const W=Ce.hp>0&&Ce.hp<35;W!==Fe.current&&(Fe.current=W,w(W)),Ce.nades!==At.current&&(At.current=Ce.nades,y(Ce.nades)),gi(G.current,Ce.weapon),Ce.melee&&(gi(te.current,"—"),gi(le.current,"")),Ce.melee!==me.current&&(me.current=Ce.melee,M(Ce.melee))},Rt=new WE(s.current,{hud:It,score:(Ce,ct)=>{gi(K.current,String(Ce)),gi(q.current,String(ct))},kills:Ce=>gi(ae.current,String(Ce)),hitmark:Ce=>{const ct=U.current;ct&&(ct.classList.toggle("kill",Ce==="kill"),ct.style.color=Ce==="kill"?"#e0453a":Ce==="head"?"#f2a33c":"#ffffff",H0(ct,"go"))},damage:(Ce,ct)=>{const Le=J.current;Le&&(Le.style.transition="none",Le.style.opacity=String(Math.min(.9,.3+Ce/40)),window.clearTimeout(oe.current),oe.current=window.setTimeout(()=>{Le&&(Le.style.transition="opacity .5s ease",Le.style.opacity="0")},90)),Oe.current&&(Oe.current.style.transform=`rotate(${ct}rad)`),H0(We.current,"show")},feed:Ce=>{const ct=++xe.current;f(Le=>[{...Ce,id:ct},...Le].slice(0,5)),window.setTimeout(()=>f(Le=>Le.filter(Ct=>Ct.id!==ct)),4200)},banner:Ce=>{window.clearTimeout(_e.current),_({...Ce,id:++xe.current}),_e.current=window.setTimeout(()=>_(null),2700)},radar:Ge,over:Ce=>{g(Ce),o("over")},scoped:Ce=>C(Ce),wheel:Ce=>N(Ce),lockedChange:Ce=>{c(Ce);const ct=e.current;!Ce&&ct&&ct.state==="paused"&&o("paused")}});return e.current=Rt,()=>{Rt.dispose(),e.current=null}},[]);const st=()=>{var Ge;f([]),g(null),I(!0),window.setTimeout(()=>I(!1),9e3),o("play"),(Ge=e.current)==null||Ge.startMatch()};return z.jsxs("div",{className:"font-body relative h-full w-full overflow-hidden bg-[#0d1218] text-[#eae6dc]",children:[z.jsx("div",{ref:s,className:"absolute inset-0"}),(r==="play"||r==="paused")&&z.jsxs("div",{className:"pointer-events-none absolute inset-0 z-20",children:[D&&z.jsxs("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:[z.jsx("div",{className:"absolute inset-0 bg-[#0a0e13]/70"}),z.jsxs("div",{className:"relative h-[420px] w-[420px]",children:[z.jsx("div",{className:"absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2b3844] bg-[#12181f]/90"}),z.jsxs("div",{className:"font-display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center",children:[z.jsx("div",{className:"text-[13px] tracking-widest text-[#f2a33c]",children:(vt=D.items[D.active])==null?void 0:vt.short}),z.jsx("div",{className:"mt-0.5 text-[9px] tracking-[0.2em] text-[#8b98a7]",children:(lt=D.items[D.active])==null?void 0:lt.cat})]}),D.items.map((Ge,It)=>{const Rt=D.items.length,Ce=It/Rt*Math.PI*2-Math.PI/2,ct=165,Le=Math.cos(Ce)*ct,Ct=Math.sin(Ce)*ct,W=It===D.active;return z.jsxs("div",{className:`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center border px-2.5 py-1.5 text-center transition-colors duration-75 ${W?"border-[#f2a33c] bg-[#221409]/95":"border-[#2b3844] bg-[#12181f]/85"}`,style:{left:`calc(50% + ${Le}px)`,top:`calc(50% + ${Ct}px)`},children:[z.jsx("span",{className:`font-display text-[12px] leading-tight ${W?"text-[#f2a33c]":"text-[#c8d2dd]"}`,children:Ge.short}),z.jsx("span",{className:"text-[8px] tracking-[0.15em] text-[#8b98a7]",children:Ge.cat})]},Ge.id)})]}),z.jsx("div",{className:"absolute bottom-14 left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-[0.25em] text-[#8b98a7]",children:"ВЕДИТЕ МЫШЬ — ВЫБОР · ОТПУСТИТЕ TAB"})]}),z.jsx("div",{className:"pointer-events-none absolute inset-0 z-10",style:{background:"radial-gradient(ellipse at center, transparent 58%, rgba(4,7,11,0.45) 100%)"}}),z.jsxs("div",{className:"absolute left-1/2 top-3 flex -translate-x-1/2 items-stretch",children:[z.jsxs("div",{className:"flex items-center gap-2 border border-[#2b4a63] bg-[#101b26]/90 px-4 py-1.5",children:[z.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#6fb7e8]",children:"ВЫ"}),z.jsx("span",{ref:K,className:"font-display text-xl leading-none text-[#6fb7e8]",children:"0"})]}),z.jsxs("div",{className:"flex flex-col items-center justify-center border-y border-[#3a4a5c] bg-[#12181f]/95 px-5 py-1",children:[z.jsx("span",{ref:j,className:"font-display text-2xl leading-none tracking-wider",children:"1:40"}),z.jsx("span",{ref:ue,className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"ОСТАЛОСЬ: 0"})]}),z.jsxs("div",{className:"flex items-center gap-2 border border-[#5c3a24] bg-[#221409]/90 px-4 py-1.5",children:[z.jsx("span",{ref:q,className:"font-display text-xl leading-none text-[#f2a33c]",children:"0"}),z.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#f2a33c]",children:"БОТЫ"})]})]}),z.jsxs("div",{className:"absolute left-4 top-4",children:[z.jsxs("div",{className:"relative",children:[z.jsx("canvas",{ref:t,width:150,height:150,className:"h-[150px] w-[150px]"}),z.jsx("div",{className:"radar-sweep absolute inset-0 rounded-full border border-[#f2a33c]/30"})]}),z.jsxs("div",{className:"mt-1.5 border border-[#2b3844] bg-[#12181f]/90 px-3 py-1 text-[11px] font-bold tracking-widest text-[#8b98a7]",children:["УСТРАНЕНО: ",z.jsx("span",{ref:ae,className:"font-display text-sm text-[#f2a33c]",children:"0"})]})]}),z.jsx("div",{className:"absolute right-4 top-4 flex flex-col items-end gap-1",children:d.map(Ge=>z.jsxs("div",{className:"feed-in flex items-center border border-[#2b3844] bg-[#12181f]/90 px-2.5 py-1 text-[12px] font-semibold",children:[z.jsx("span",{className:Ge.byPlayer&&Ge.killer==="ВЫ"?"text-[#6fb7e8]":"text-[#f2a33c]",children:Ge.killer}),Ge.head?z.jsx("span",{className:"mx-1.5 text-[#e0453a]",children:z.jsx(XE,{})}):Ge.killer==="Снабжение"||Ge.killer==="МАГАЗИН"?z.jsx("span",{className:"mx-1.5 text-[#7fd08a]",children:"»"}):z.jsx(jE,{}),z.jsx("span",{className:Ge.victim==="ВЫ"?"text-[#e0453a]":"text-[#c8d2dd]",children:Ge.victim})]},Ge.id))}),z.jsxs("div",{ref:fe,className:"xh absolute left-1/2 top-1/2 z-10 h-0 w-0",style:{display:O?"none":void 0},children:[z.jsx("span",{className:"xh-t"}),z.jsx("span",{className:"xh-b"}),z.jsx("span",{className:"xh-l"}),z.jsx("span",{className:"xh-r"}),z.jsx("span",{className:"xh-dot"})]}),O&&z.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10",children:[z.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 27.5%, rgba(4,7,9,0.985) 29%)"}}),z.jsx("div",{className:"absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/85"}),z.jsx("div",{className:"absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-black/85"}),z.jsx("div",{className:"absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/70"}),z.jsx("div",{className:"absolute bottom-[16%] left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]/70",children:"AWP · 4× ОПТИКА"})]}),z.jsx("div",{ref:U,className:"hitmark absolute left-1/2 top-1/2 z-10 -ml-[11px] -mt-[11px]",children:z.jsx("svg",{viewBox:"0 0 22 22",className:"h-[22px] w-[22px] stroke-current",strokeWidth:"2.4",fill:"none",children:z.jsx("path",{d:"M3 3 8 8M19 3l-5 5M3 19l5-5M19 19l-5-5"})})}),z.jsx("div",{className:"absolute left-1/2 top-1/2 z-10",children:z.jsx("div",{ref:We,className:"dmg-arrow",children:z.jsx("div",{ref:Oe,children:z.jsx("svg",{viewBox:"0 0 24 24",className:"absolute -translate-x-1/2 fill-[#e0453a]",style:{top:-116,left:0,width:26,height:26,filter:"drop-shadow(0 0 6px rgba(224,69,58,.8))"},children:z.jsx("path",{d:"M12 2 22 18h-7v4h-6v-4H2z"})})})})}),z.jsx("div",{ref:Be,className:"blink-fast absolute left-1/2 top-[57%] -translate-x-1/2 text-[13px] font-bold tracking-[0.3em] text-[#f2a33c]",style:{display:"none"},children:"ПЕРЕЗАРЯДКА"}),p&&z.jsxs("div",{className:"absolute left-1/2 top-[30%] -translate-x-1/2 text-center",children:[z.jsx("div",{className:"banner-in font-display text-5xl md:text-6xl",style:{color:p.tone==="win"?"#f2a33c":p.tone==="lose"?"#e0453a":"#eae6dc",textShadow:"0 4px 0 rgba(0,0,0,.55), 0 0 44px rgba(0,0,0,.6)"},children:p.title}),p.sub&&z.jsx("div",{className:"banner-sub-in mt-2 text-sm font-semibold tracking-[0.35em] text-[#c8d2dd] uppercase",style:{textShadow:"0 2px 6px rgba(0,0,0,.8)"},children:p.sub})]},p.id),z.jsxs("div",{className:"absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 border border-[#2b3844] bg-[#12181f]/85 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#8b98a7]",children:[z.jsx("span",{className:"key",children:"TAB"})," АРСЕНАЛ · ",z.jsx("span",{className:"key",children:"1–9"})," / КОЛЕСО — СМЕНА"]}),z.jsxs("div",{className:"absolute bottom-5 left-5 w-[240px]",children:[z.jsxs("div",{className:"flex items-end gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2.5",children:[z.jsx("svg",{viewBox:"0 0 24 24",className:"mb-1 h-6 w-6 fill-[#e0453a]",children:z.jsx("path",{d:"M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"})}),z.jsxs("div",{className:"flex-1",children:[z.jsxs("div",{className:"flex items-baseline justify-between",children:[z.jsx("span",{ref:P,className:"font-display text-3xl leading-none",children:"100"}),z.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"HP"})]}),z.jsx("div",{className:"mt-1.5 h-[7px] w-full bg-[#232d38]",children:z.jsx("div",{ref:V,className:"h-full w-full transition-[width] duration-200"})})]})]}),z.jsxs("div",{className:"mt-1.5 flex items-center gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2",children:[z.jsx("span",{className:"text-[#6fb7e8]",children:z.jsx(qE,{})}),z.jsx("div",{className:"flex-1",children:z.jsx("div",{className:"h-[5px] w-full bg-[#232d38]",children:z.jsx("div",{ref:B,className:"h-full w-full bg-[#6fb7e8] transition-[width] duration-200"})})}),z.jsx("span",{ref:k,className:"font-display text-base leading-none text-[#6fb7e8]",children:"100"})]})]}),z.jsxs("div",{className:"absolute bottom-5 right-5 text-right",children:[z.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/90 px-5 py-2.5",children:[z.jsxs("div",{className:"flex items-baseline justify-end gap-2",children:[R&&z.jsx("span",{className:"font-display text-sm tracking-widest text-[#f2a33c]",children:"БЛИЖНИЙ БОЙ"}),z.jsx("span",{ref:te,className:`font-display text-5xl leading-none ${R?"hidden":""}`,children:"30"}),z.jsx("span",{ref:le,className:`font-display text-lg leading-none text-[#8b98a7] ${R?"hidden":""}`,children:"/ 90"})]}),z.jsxs("div",{className:"mt-1 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]",children:[z.jsx("span",{ref:G,children:"3·DEAGLE"}),z.jsx("span",{className:"ml-2 text-[#5f6d7d]",children:"TAB — АРСЕНАЛ"})]})]}),z.jsxs("div",{className:"mt-1.5 flex items-center justify-end gap-1.5 border border-[#2b3844] bg-[#12181f]/90 px-4 py-1.5 text-[#c9d68a]",children:[z.jsx("span",{className:"mr-1 text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"ГРАНАТЫ"}),[0,1,2].map(Ge=>z.jsx(YE,{dim:Ge>=T},Ge))]})]}),x&&z.jsx("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 border border-[#2b3844] bg-[#12181f]/85 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-[#8b98a7]",children:"WASD — движение · ЛКМ — огонь · TAB — арсенал · 1–5 / колесо — смена · ПКМ — оптика · R — перезарядка · G — граната"}),!l&&r==="play"&&z.jsxs("div",{className:"absolute left-1/2 top-[62%] -translate-x-1/2 border border-[#f2a33c]/60 bg-[#221409]/90 px-5 py-2 text-center text-sm font-bold tracking-[0.14em] text-[#f2a33c]",children:["ДВИГАЙТЕ МЫШЬ — ОБЗОР · ЛКМ — ОГОНЬ",z.jsx("div",{className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"R — ПЕРЕЗАРЯДКА · G — ГРАНАТА · КРАЙ ЭКРАНА: ВЕРНИТЕ МЫШЬ В ЦЕНТР"})]}),z.jsx("div",{ref:J,className:"vignette absolute inset-0 z-30"}),S&&z.jsx("div",{className:"lowhp-pulse pointer-events-none absolute inset-0 z-30"})]}),r==="menu"&&z.jsxs("div",{className:"absolute inset-0 z-40",children:[z.jsx("div",{className:"menu-scan absolute inset-0",style:{background:"linear-gradient(100deg, rgba(10,14,19,.96) 0%, rgba(10,14,19,.92) 44%, rgba(10,14,19,.55) 72%, rgba(10,14,19,.25) 100%)"}}),z.jsx("div",{className:"smoke absolute inset-0"}),z.jsx("div",{className:"hazard hazard-anim absolute top-0 left-0 h-2 w-full opacity-80"}),z.jsx("div",{className:"hazard hazard-anim absolute bottom-0 left-0 h-2 w-full opacity-80"}),z.jsxs("div",{className:"relative flex h-full flex-col justify-center gap-8 px-8 md:flex-row md:items-center md:justify-between md:px-16 lg:px-24",children:[z.jsxs("div",{className:"max-w-xl",children:[z.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[z.jsx("span",{className:"inline-block h-[3px] w-10 bg-[#f2a33c]"}),z.jsx("span",{className:"text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]",children:"БРАУЗЕРНЫЙ ШУТЕР · THREE.JS"})]}),z.jsxs("h1",{className:"title-glow font-display text-[88px] leading-[0.9] md:text-[120px]",children:["CS",z.jsx("span",{className:"text-[#f2a33c]",children:" 3D"})]}),z.jsxs("p",{className:"mt-5 max-w-md text-[15px] leading-relaxed text-[#aab6c4]",children:["Зачистите точку. AK-47, гранаты и живые боты, которые стрейфят и дают очередь в ответ. Возьмите ",z.jsx("span",{className:"font-bold text-[#eae6dc]",children:"3 раунда"})," быстрее, чем вас застрелят."]}),z.jsx("button",{onClick:st,className:"btn-blade mt-8 inline-block bg-[#f2a33c] px-12 py-4 text-xl text-[#14100a] hover:bg-[#ffc069]",children:z.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В БОЙ"})}),z.jsx("div",{className:"mt-4 text-[11px] font-semibold tracking-[0.25em] text-[#5f6d7d]",children:"КЛИК — ЗАХВАТ МЫШИ · ESC — ПАУЗА"})]}),z.jsxs("div",{className:"flex w-full max-w-sm flex-col gap-4",children:[z.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[z.jsx("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:"УПРАВЛЕНИЕ"}),z.jsxs("div",{className:"grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 text-[12px] text-[#aab6c4]",children:[z.jsxs("span",{children:[z.jsx("span",{className:"key",children:"W"})," ",z.jsx("span",{className:"key",children:"A"})," ",z.jsx("span",{className:"key",children:"S"})," ",z.jsx("span",{className:"key",children:"D"})]}),z.jsx("span",{children:"передвижение"}),z.jsx("span",{children:z.jsx("span",{className:"key",children:"МЫШЬ"})}),z.jsx("span",{children:"обзор — движение мыши, курсор в бою скрыт"}),z.jsx("span",{children:z.jsx("span",{className:"key",children:"ЛКМ"})}),z.jsx("span",{children:"огонь из AK-47"}),z.jsx("span",{children:z.jsx("span",{className:"key",children:"R"})}),z.jsx("span",{children:"перезарядка"}),z.jsx("span",{children:z.jsx("span",{className:"key",children:"G"})}),z.jsx("span",{children:"граната"}),z.jsx("span",{children:z.jsx("span",{className:"key",children:"SHIFT"})}),z.jsx("span",{children:"тихий шаг — точность выше"}),z.jsx("span",{children:z.jsx("span",{className:"key",children:"SPACE"})}),z.jsx("span",{children:"прыжок"}),z.jsx("span",{children:z.jsx("span",{className:"key",children:"TAB"})}),z.jsx("span",{children:"арсенал: AK-47, AWP, Deagle, P90 и нож"}),z.jsxs("span",{children:[z.jsx("span",{className:"key",children:"1"}),"–",z.jsx("span",{className:"key",children:"9"})," / колесо"]}),z.jsx("span",{children:"быстрая смена оружия"}),z.jsx("span",{children:z.jsx("span",{className:"key",children:"ПКМ"})}),z.jsx("span",{children:"оптика AWP ×4"}),z.jsx("span",{children:z.jsx("span",{className:"key",children:"ESC"})}),z.jsx("span",{children:"пауза"})]})]}),z.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[z.jsx("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:"БРИФИНГ"}),z.jsxs("ul",{className:"space-y-1.5 px-4 py-3 text-[12px] leading-relaxed text-[#aab6c4]",children:[z.jsxs("li",{children:["Карта — ",z.jsx("span",{className:"font-bold text-[#f2a33c]",children:"Dust II"}),": лонг A, мид с дверями, туннели на B."]}),z.jsxs("li",{children:["Арсенал — ",z.jsx("span",{className:"key",children:"TAB"}),": AK-47, AWP, Deagle, P90 и нож. Колесо мыши листает стволы."]}),z.jsxs("li",{children:[z.jsx("span",{className:"font-bold text-[#eae6dc]",children:"Хедшот"})," — урон ×4. AWP убивает с тела, ",z.jsx("span",{className:"key",children:"ПКМ"})," — оптика ×4."]}),z.jsxs("li",{children:["Матч до ",z.jsx("span",{className:"font-bold text-[#f2a33c]",children:"3 побед"}),", раунд — 1:40. Боты злеют с каждым раундом."]})]})]})]})]})]}),r==="paused"&&z.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/85",children:z.jsxs("div",{className:"w-[380px] border border-[#2b3844] bg-[#12181f]",children:[z.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),z.jsxs("div",{className:"px-8 py-7",children:[z.jsx("div",{className:"font-display text-4xl tracking-wider",children:"ПАУЗА"}),z.jsx("div",{className:"mt-1 text-[11px] font-semibold tracking-[0.3em] text-[#8b98a7]",children:"ОПЕРАЦИЯ ПРИОСТАНОВЛЕНА"}),z.jsxs("div",{className:"mt-6 flex flex-col gap-2.5",children:[z.jsx("button",{onClick:()=>{var Ge;(Ge=e.current)==null||Ge.resume(),o("play")},className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:z.jsx("span",{className:"inline-block skew-x-[8deg]",children:"ПРОДОЛЖИТЬ"})}),z.jsx("button",{onClick:()=>{var Ge;(Ge=e.current)==null||Ge.toMenu(),o("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:z.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В МЕНЮ"})})]}),z.jsxs("div",{className:"mt-6 border-t border-[#2b3844] pt-4 text-[11px] leading-relaxed text-[#5f6d7d]",children:[z.jsx("span",{className:"key",children:"W"}),z.jsx("span",{className:"key",children:"A"}),z.jsx("span",{className:"key",children:"S"}),z.jsx("span",{className:"key",children:"D"})," движение · ",z.jsx("span",{className:"key",children:"ЛКМ"})," огонь · ",z.jsx("span",{className:"key",children:"R"})," перезарядка · ",z.jsx("span",{className:"key",children:"G"})," граната"]})]})]})}),r==="over"&&v&&z.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/80",children:z.jsxs("div",{className:"w-[440px] border border-[#2b3844] bg-[#12181f]",children:[z.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),z.jsxs("div",{className:"px-10 py-8 text-center",children:[z.jsx("div",{className:"text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]",children:"МАТЧ ЗАВЕРШЁН"}),z.jsx("div",{className:"title-glow font-display mt-2 text-6xl",style:{color:v.result==="victory"?"#f2a33c":"#e0453a"},children:v.result==="victory"?"ПОБЕДА":"ПОРАЖЕНИЕ"}),z.jsxs("div",{className:"font-display mt-3 text-3xl text-[#eae6dc]",children:[z.jsx("span",{className:"text-[#6fb7e8]",children:v.won}),z.jsx("span",{className:"mx-2 text-[#5f6d7d]",children:":"}),z.jsx("span",{className:"text-[#f2a33c]",children:v.lost})]}),z.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-2.5",children:[z.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[z.jsx("div",{className:"font-display text-3xl text-[#f2a33c]",children:v.kills}),z.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:"УСТРАНЕНО"})]}),z.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[z.jsx("div",{className:"font-display text-3xl text-[#e0453a]",children:v.deaths}),z.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:"СМЕРТЕЙ"})]})]}),z.jsxs("div",{className:"mt-7 flex flex-col gap-2.5",children:[z.jsx("button",{onClick:st,className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:z.jsx("span",{className:"inline-block skew-x-[8deg]",children:"ЕЩЁ РАЗ"})}),z.jsx("button",{onClick:()=>{var Ge;(Ge=e.current)==null||Ge.toMenu(),o("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:z.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В МЕНЮ"})})]})]})]})})]})}f_.createRoot(document.getElementById("root")).render(z.jsx($E,{}));
