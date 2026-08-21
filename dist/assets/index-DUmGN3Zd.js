(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function e_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ef={exports:{}},Ja={},tf={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function t_(){if(Am)return Et;Am=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function y(U,J,Fe){this.props=U,this.context=J,this.refs=A,this.updater=Fe||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=y.prototype;function I(U,J,Fe){this.props=U,this.context=J,this.refs=A,this.updater=Fe||M}var O=I.prototype=new x;O.constructor=I,T(O,y.prototype),O.isPureReactComponent=!0;var R=Array.isArray,L=Object.prototype.hasOwnProperty,C={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function E(U,J,Fe){var Ge,ze={},oe=null,_e=null;if(J!=null)for(Ge in J.ref!==void 0&&(_e=J.ref),J.key!==void 0&&(oe=""+J.key),J)L.call(J,Ge)&&!D.hasOwnProperty(Ge)&&(ze[Ge]=J[Ge]);var G=arguments.length-2;if(G===1)ze.children=Fe;else if(1<G){for(var pe=Array(G),xe=0;xe<G;xe++)pe[xe]=arguments[xe+2];ze.children=pe}if(U&&U.defaultProps)for(Ge in G=U.defaultProps,G)ze[Ge]===void 0&&(ze[Ge]=G[Ge]);return{$$typeof:s,type:U,key:oe,ref:_e,props:ze,_owner:C.current}}function P(U,J){return{$$typeof:s,type:U.type,key:J,ref:U.ref,props:U.props,_owner:U._owner}}function H(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Fe){return J[Fe]})}var B=/\/+/g;function ne(U,J){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):J.toString(36)}function de(U,J,Fe,Ge,ze){var oe=typeof U;(oe==="undefined"||oe==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(oe){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case s:case e:_e=!0}}if(_e)return _e=U,ze=ze(_e),U=Ge===""?"."+ne(_e,0):Ge,R(ze)?(Fe="",U!=null&&(Fe=U.replace(B,"$&/")+"/"),de(ze,J,Fe,"",function(xe){return xe})):ze!=null&&(H(ze)&&(ze=P(ze,Fe+(!ze.key||_e&&_e.key===ze.key?"":(""+ze.key).replace(B,"$&/")+"/")+U)),J.push(ze)),1;if(_e=0,Ge=Ge===""?".":Ge+":",R(U))for(var G=0;G<U.length;G++){oe=U[G];var pe=Ge+ne(oe,G);_e+=de(oe,J,Fe,pe,ze)}else if(pe=g(U),typeof pe=="function")for(U=pe.call(U),G=0;!(oe=U.next()).done;)oe=oe.value,pe=Ge+ne(oe,G++),_e+=de(oe,J,Fe,pe,ze);else if(oe==="object")throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return _e}function Z(U,J,Fe){if(U==null)return U;var Ge=[],ze=0;return de(U,Ge,"","",function(oe){return J.call(Fe,oe,ze++)}),Ge}function le(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(Fe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Fe)},function(Fe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Fe)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var Q={current:null},X={transition:null},ae={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:X,ReactCurrentOwner:C};function fe(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:Z,forEach:function(U,J,Fe){Z(U,function(){J.apply(this,arguments)},Fe)},count:function(U){var J=0;return Z(U,function(){J++}),J},toArray:function(U){return Z(U,function(J){return J})||[]},only:function(U){if(!H(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Et.Component=y,Et.Fragment=t,Et.Profiler=o,Et.PureComponent=I,Et.StrictMode=r,Et.Suspense=d,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,Et.act=fe,Et.cloneElement=function(U,J,Fe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Ge=T({},U.props),ze=U.key,oe=U.ref,_e=U._owner;if(J!=null){if(J.ref!==void 0&&(oe=J.ref,_e=C.current),J.key!==void 0&&(ze=""+J.key),U.type&&U.type.defaultProps)var G=U.type.defaultProps;for(pe in J)L.call(J,pe)&&!D.hasOwnProperty(pe)&&(Ge[pe]=J[pe]===void 0&&G!==void 0?G[pe]:J[pe])}var pe=arguments.length-2;if(pe===1)Ge.children=Fe;else if(1<pe){G=Array(pe);for(var xe=0;xe<pe;xe++)G[xe]=arguments[xe+2];Ge.children=G}return{$$typeof:s,type:U.type,key:ze,ref:oe,props:Ge,_owner:_e}},Et.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Et.createElement=E,Et.createFactory=function(U){var J=E.bind(null,U);return J.type=U,J},Et.createRef=function(){return{current:null}},Et.forwardRef=function(U){return{$$typeof:h,render:U}},Et.isValidElement=H,Et.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:le}},Et.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},Et.startTransition=function(U){var J=X.transition;X.transition={};try{U()}finally{X.transition=J}},Et.unstable_act=fe,Et.useCallback=function(U,J){return Q.current.useCallback(U,J)},Et.useContext=function(U){return Q.current.useContext(U)},Et.useDebugValue=function(){},Et.useDeferredValue=function(U){return Q.current.useDeferredValue(U)},Et.useEffect=function(U,J){return Q.current.useEffect(U,J)},Et.useId=function(){return Q.current.useId()},Et.useImperativeHandle=function(U,J,Fe){return Q.current.useImperativeHandle(U,J,Fe)},Et.useInsertionEffect=function(U,J){return Q.current.useInsertionEffect(U,J)},Et.useLayoutEffect=function(U,J){return Q.current.useLayoutEffect(U,J)},Et.useMemo=function(U,J){return Q.current.useMemo(U,J)},Et.useReducer=function(U,J,Fe){return Q.current.useReducer(U,J,Fe)},Et.useRef=function(U){return Q.current.useRef(U)},Et.useState=function(U){return Q.current.useState(U)},Et.useSyncExternalStore=function(U,J,Fe){return Q.current.useSyncExternalStore(U,J,Fe)},Et.useTransition=function(){return Q.current.useTransition()},Et.version="18.3.1",Et}var Rm;function Ud(){return Rm||(Rm=1,tf.exports=t_()),tf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function n_(){if(Cm)return Ja;Cm=1;var s=Ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,d,p){var v,_={},g=null,M=null;p!==void 0&&(g=""+p),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(M=d.ref);for(v in d)r.call(d,v)&&!l.hasOwnProperty(v)&&(_[v]=d[v]);if(h&&h.defaultProps)for(v in d=h.defaultProps,d)_[v]===void 0&&(_[v]=d[v]);return{$$typeof:e,type:h,key:g,ref:M,props:_,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=u,Ja.jsxs=u,Ja}var Pm;function i_(){return Pm||(Pm=1,ef.exports=n_()),ef.exports}var V=i_(),Ml={},nf={exports:{}},Yn={},rf={exports:{}},sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function r_(){return Nm||(Nm=1,(function(s){function e(X,ae){var fe=X.length;X.push(ae);e:for(;0<fe;){var U=fe-1>>>1,J=X[U];if(0<o(J,ae))X[U]=ae,X[fe]=J,fe=U;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ae=X[0],fe=X.pop();if(fe!==ae){X[0]=fe;e:for(var U=0,J=X.length,Fe=J>>>1;U<Fe;){var Ge=2*(U+1)-1,ze=X[Ge],oe=Ge+1,_e=X[oe];if(0>o(ze,fe))oe<J&&0>o(_e,ze)?(X[U]=_e,X[oe]=fe,U=oe):(X[U]=ze,X[Ge]=fe,U=Ge);else if(oe<J&&0>o(_e,fe))X[U]=_e,X[oe]=fe,U=oe;else break e}}return ae}function o(X,ae){var fe=X.sortIndex-ae.sortIndex;return fe!==0?fe:X.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var d=[],p=[],v=1,_=null,g=3,M=!1,T=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(X){for(var ae=t(p);ae!==null;){if(ae.callback===null)r(p);else if(ae.startTime<=X)r(p),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(p)}}function R(X){if(A=!1,O(X),!T)if(t(d)!==null)T=!0,le(L);else{var ae=t(p);ae!==null&&Q(R,ae.startTime-X)}}function L(X,ae){T=!1,A&&(A=!1,x(E),E=-1),M=!0;var fe=g;try{for(O(ae),_=t(d);_!==null&&(!(_.expirationTime>ae)||X&&!k());){var U=_.callback;if(typeof U=="function"){_.callback=null,g=_.priorityLevel;var J=U(_.expirationTime<=ae);ae=s.unstable_now(),typeof J=="function"?_.callback=J:_===t(d)&&r(d),O(ae)}else r(d);_=t(d)}if(_!==null)var Fe=!0;else{var Ge=t(p);Ge!==null&&Q(R,Ge.startTime-ae),Fe=!1}return Fe}finally{_=null,g=fe,M=!1}}var C=!1,D=null,E=-1,P=5,H=-1;function k(){return!(s.unstable_now()-H<P)}function B(){if(D!==null){var X=s.unstable_now();H=X;var ae=!0;try{ae=D(!0,X)}finally{ae?ne():(C=!1,D=null)}}else C=!1}var ne;if(typeof I=="function")ne=function(){I(B)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Z=de.port2;de.port1.onmessage=B,ne=function(){Z.postMessage(null)}}else ne=function(){y(B,0)};function le(X){D=X,C||(C=!0,ne())}function Q(X,ae){E=y(function(){X(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,le(L))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(X){switch(g){case 1:case 2:case 3:var ae=3;break;default:ae=g}var fe=g;g=ae;try{return X()}finally{g=fe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,ae){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var fe=g;g=X;try{return ae()}finally{g=fe}},s.unstable_scheduleCallback=function(X,ae,fe){var U=s.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?U+fe:U):fe=U,X){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=fe+J,X={id:v++,callback:ae,priorityLevel:X,startTime:fe,expirationTime:J,sortIndex:-1},fe>U?(X.sortIndex=fe,e(p,X),t(d)===null&&X===t(p)&&(A?(x(E),E=-1):A=!0,Q(R,fe-U))):(X.sortIndex=J,e(d,X),T||M||(T=!0,le(L))),X},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(X){var ae=g;return function(){var fe=g;g=ae;try{return X.apply(this,arguments)}finally{g=fe}}}})(sf)),sf}var Lm;function s_(){return Lm||(Lm=1,rf.exports=r_()),rf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function a_(){if(Dm)return Yn;Dm=1;var s=Ud(),e=s_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return d.call(_,n)?!0:d.call(v,n)?!1:p.test(n)?_[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,f,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,I);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,I);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,I);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function O(n,i,a,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,c)&&(a=null),c||f===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),C=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),k=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),X=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var fe=Object.assign,U;function J(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Fe=!1;function Ge(n,i){if(!n||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){c=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var f=ue.stack.split(`
`),m=c.stack.split(`
`),w=f.length-1,F=m.length-1;1<=w&&0<=F&&f[w]!==m[F];)F--;for(;1<=w&&0<=F;w--,F--)if(f[w]!==m[F]){if(w!==1||F!==1)do if(w--,F--,0>F||f[w]!==m[F]){var z=`
`+f[w].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=w&&0<=F);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?J(n):""}function ze(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Ge(n.type,!1),n;case 11:return n=Ge(n.type.render,!1),n;case 1:return n=Ge(n.type,!0),n;default:return""}}function oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case C:return"Portal";case P:return"Profiler";case E:return"StrictMode";case ne:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case H:return(n._context.displayName||"Context")+".Provider";case B:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return i=n.displayName||null,i!==null?i:oe(n.type)||"Memo";case le:i=n._payload,n=n._init;try{return oe(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function G(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function xe(n){var i=pe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ue(n){n._valueTracker||(n._valueTracker=xe(n))}function qe(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=pe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gt(n,i){var a=i.checked;return fe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ee(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=G(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function et(n,i){i=i.checked,i!=null&&O(n,"checked",i,!1)}function Oe(n,i){et(n,i);var a=G(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?bt(n,i.type,a):i.hasOwnProperty("defaultValue")&&bt(n,i.type,G(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function wt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function bt(n,i,a){(i!=="number"||lt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Nt=Array.isArray;function Ct(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+G(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Ot(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return fe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function q(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Nt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:G(a)}}function Ht(n,i){var a=G(i.value),c=G(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function vt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function N(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function S(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?N(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $,ie=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){Ne.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function me(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function ve(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=me(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var De=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,i){if(i){if(De[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ie(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function it(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rt=null,ct=null,W=null;function Ce(n){if(n=ka(n)){if(typeof rt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Oo(i),rt(n.stateNode,n.type,i))}}function ge(n){ct?W?W.push(n):W=[n]:ct=n}function Le(){if(ct){var n=ct,i=W;if(W=ct=null,Ce(n),i)for(n=0;n<i.length;n++)Ce(i[n])}}function ke(n,i){return n(i)}function ye(){}var Ke=!1;function Ye(n,i,a){if(Ke)return n(i,a);Ke=!0;try{return ke(n,i,a)}finally{Ke=!1,(ct!==null||W!==null)&&(ye(),Le())}}function zt(n,i){var a=n.stateNode;if(a===null)return null;var c=Oo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var It=!1;if(h)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){It=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{It=!1}function oi(n,i,a,c,f,m,w,F,z){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(Me){this.onError(Me)}}var zr=!1,_s=null,Vr=!1,Hr=null,Ec={onError:function(n){zr=!0,_s=n}};function xo(n,i,a,c,f,m,w,F,z){zr=!1,_s=null,oi.apply(Ec,arguments)}function yo(n,i,a,c,f,m,w,F,z){if(xo.apply(this,arguments),zr){if(zr){var ue=_s;zr=!1,_s=null}else throw Error(t(198));Vr||(Vr=!0,Hr=ue)}}function Dn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function xs(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function _a(n){if(Dn(n)!==n)throw Error(t(188))}function So(n){var i=n.alternate;if(!i){if(i=Dn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return _a(f),n;if(m===c)return _a(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=m;else{for(var w=!1,F=f.child;F;){if(F===a){w=!0,a=f,c=m;break}if(F===c){w=!0,c=f,a=m;break}F=F.sibling}if(!w){for(F=m.child;F;){if(F===a){w=!0,a=m,c=f;break}if(F===c){w=!0,c=m,a=f;break}F=F.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Gr(n){return n=So(n),n!==null?xa(n):null}function xa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=xa(n);if(i!==null)return i;n=n.sibling}return null}var Wr=e.unstable_scheduleCallback,ya=e.unstable_cancelCallback,Mo=e.unstable_shouldYield,wc=e.unstable_requestPaint,Qt=e.unstable_now,Tc=e.unstable_getCurrentPriorityLevel,Sa=e.unstable_ImmediatePriority,b=e.unstable_UserBlockingPriority,K=e.unstable_NormalPriority,ce=e.unstable_LowPriority,re=e.unstable_IdlePriority,te=null,Re=null;function We(n){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:dt,$e=Math.log,nt=Math.LN2;function dt(n){return n>>>=0,n===0?32:31-($e(n)/nt|0)|0}var ht=64,Je=4194304;function Pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var F=w&~f;F!==0?c=Pt(F):(m&=w,m!==0&&(c=Pt(m)))}else w=a&~f,w!==0?c=Pt(w):m!==0&&(c=Pt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ae(i),f=1<<a,c|=n[a],i&=~f;return c}function $t(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-Ae(m),F=1<<w,z=f[w];z===-1?((F&a)===0||(F&c)!==0)&&(f[w]=$t(F,i)):z<=i&&(n.expiredLanes|=F),m&=~F}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ve(){var n=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),n}function _n(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function xt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ae(i),n[i]=a}function zn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-Ae(a),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~m}}function Vn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ae(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var Mt=0;function Yi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ut,qt,_i,Bt,xi,Ni=!1,Xr=[],ur=null,fr=null,dr=null,Ma=new Map,Ea=new Map,hr=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(n,i){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Ma.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(i.pointerId)}}function wa(n,i,a,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=ka(i),i!==null&&qt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Eg(n,i,a,c,f){switch(i){case"focusin":return ur=wa(ur,n,i,a,c,f),!0;case"dragenter":return fr=wa(fr,n,i,a,c,f),!0;case"mouseover":return dr=wa(dr,n,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return Ma.set(m,wa(Ma.get(m)||null,n,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,Ea.set(m,wa(Ea.get(m)||null,n,i,a,c,f)),!0}return!1}function fh(n){var i=qr(n.target);if(i!==null){var a=Dn(i);if(a!==null){if(i=a.tag,i===13){if(i=xs(a),i!==null){n.blockedOn=i,xi(n.priority,function(){_i(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Eo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ac(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pe=c,a.target.dispatchEvent(c),Pe=null}else return i=ka(a),i!==null&&qt(i),n.blockedOn=a,!1;i.shift()}return!0}function dh(n,i,a){Eo(n)&&a.delete(i)}function wg(){Ni=!1,ur!==null&&Eo(ur)&&(ur=null),fr!==null&&Eo(fr)&&(fr=null),dr!==null&&Eo(dr)&&(dr=null),Ma.forEach(dh),Ea.forEach(dh)}function Ta(n,i){n.blockedOn===i&&(n.blockedOn=null,Ni||(Ni=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wg)))}function ba(n){function i(f){return Ta(f,n)}if(0<Xr.length){Ta(Xr[0],n);for(var a=1;a<Xr.length;a++){var c=Xr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(ur!==null&&Ta(ur,n),fr!==null&&Ta(fr,n),dr!==null&&Ta(dr,n),Ma.forEach(i),Ea.forEach(i),a=0;a<hr.length;a++)c=hr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)fh(a),a.blockedOn===null&&hr.shift()}var ys=R.ReactCurrentBatchConfig,wo=!0;function Tg(n,i,a,c){var f=Mt,m=ys.transition;ys.transition=null;try{Mt=1,bc(n,i,a,c)}finally{Mt=f,ys.transition=m}}function bg(n,i,a,c){var f=Mt,m=ys.transition;ys.transition=null;try{Mt=4,bc(n,i,a,c)}finally{Mt=f,ys.transition=m}}function bc(n,i,a,c){if(wo){var f=Ac(n,i,a,c);if(f===null)Wc(n,i,c,To,a),uh(n,c);else if(Eg(f,n,i,a,c))c.stopPropagation();else if(uh(n,c),i&4&&-1<Mg.indexOf(n)){for(;f!==null;){var m=ka(f);if(m!==null&&Ut(m),m=Ac(n,i,a,c),m===null&&Wc(n,i,c,To,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else Wc(n,i,c,null,a)}}var To=null;function Ac(n,i,a,c){if(To=null,n=it(c),n=qr(n),n!==null)if(i=Dn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=xs(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return To=n,null}function hh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tc()){case Sa:return 1;case b:return 4;case K:case ce:return 16;case re:return 536870912;default:return 16}default:return 16}}var pr=null,Rc=null,bo=null;function ph(){if(bo)return bo;var n,i=Rc,a=i.length,c,f="value"in pr?pr.value:pr.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===f[m-c];c++);return bo=f.slice(n,1<c?1-c:void 0)}function Ao(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ro(){return!0}function mh(){return!1}function Zn(n){function i(a,c,f,m,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ro:mh,this.isPropagationStopped=mh,this}return fe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),i}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=Zn(Ss),Aa=fe({},Ss,{view:0,detail:0}),Ag=Zn(Aa),Pc,Nc,Ra,Co=fe({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ra&&(Ra&&n.type==="mousemove"?(Pc=n.screenX-Ra.screenX,Nc=n.screenY-Ra.screenY):Nc=Pc=0,Ra=n),Pc)},movementY:function(n){return"movementY"in n?n.movementY:Nc}}),gh=Zn(Co),Rg=fe({},Co,{dataTransfer:0}),Cg=Zn(Rg),Pg=fe({},Aa,{relatedTarget:0}),Lc=Zn(Pg),Ng=fe({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Lg=Zn(Ng),Dg=fe({},Ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ig=Zn(Dg),Ug=fe({},Ss,{data:0}),vh=Zn(Ug),Fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=kg[n])?!!i[n]:!1}function Dc(){return Bg}var zg=fe({},Aa,{key:function(n){if(n.key){var i=Fg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ao(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Og[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(n){return n.type==="keypress"?Ao(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ao(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vg=Zn(zg),Hg=fe({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_h=Zn(Hg),Gg=fe({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),Wg=Zn(Gg),Xg=fe({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),qg=Zn(Xg),Yg=fe({},Co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),jg=Zn(Yg),Kg=[9,13,27,32],Ic=h&&"CompositionEvent"in window,Ca=null;h&&"documentMode"in document&&(Ca=document.documentMode);var $g=h&&"TextEvent"in window&&!Ca,xh=h&&(!Ic||Ca&&8<Ca&&11>=Ca),yh=" ",Sh=!1;function Mh(n,i){switch(n){case"keyup":return Kg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function Zg(n,i){switch(n){case"compositionend":return Eh(i);case"keypress":return i.which!==32?null:(Sh=!0,yh);case"textInput":return n=i.data,n===yh&&Sh?null:n;default:return null}}function Qg(n,i){if(Ms)return n==="compositionend"||!Ic&&Mh(n,i)?(n=ph(),bo=Rc=pr=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xh&&i.locale!=="ko"?null:i.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Jg[n.type]:i==="textarea"}function Th(n,i,a,c){ge(c),i=Io(i,"onChange"),0<i.length&&(a=new Cc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Pa=null,Na=null;function ev(n){Gh(n,0)}function Po(n){var i=As(n);if(qe(i))return n}function tv(n,i){if(n==="change")return i}var bh=!1;if(h){var Uc;if(h){var Fc="oninput"in document;if(!Fc){var Ah=document.createElement("div");Ah.setAttribute("oninput","return;"),Fc=typeof Ah.oninput=="function"}Uc=Fc}else Uc=!1;bh=Uc&&(!document.documentMode||9<document.documentMode)}function Rh(){Pa&&(Pa.detachEvent("onpropertychange",Ch),Na=Pa=null)}function Ch(n){if(n.propertyName==="value"&&Po(Na)){var i=[];Th(i,Na,n,it(n)),Ye(ev,i)}}function nv(n,i,a){n==="focusin"?(Rh(),Pa=i,Na=a,Pa.attachEvent("onpropertychange",Ch)):n==="focusout"&&Rh()}function iv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Po(Na)}function rv(n,i){if(n==="click")return Po(i)}function sv(n,i){if(n==="input"||n==="change")return Po(i)}function av(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var yi=typeof Object.is=="function"?Object.is:av;function La(n,i){if(yi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!d.call(i,f)||!yi(n[f],i[f]))return!1}return!0}function Ph(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Nh(n,i){var a=Ph(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ph(a)}}function Lh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Lh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Dh(){for(var n=window,i=lt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=lt(n.document)}return i}function Oc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ov(n){var i=Dh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Lh(a.ownerDocument.documentElement,a)){if(c!==null&&Oc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=Nh(a,m);var w=Nh(a,c);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lv=h&&"documentMode"in document&&11>=document.documentMode,Es=null,kc=null,Da=null,Bc=!1;function Ih(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bc||Es==null||Es!==lt(c)||(c=Es,"selectionStart"in c&&Oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Da&&La(Da,c)||(Da=c,c=Io(kc,"onSelect"),0<c.length&&(i=new Cc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Es)))}function No(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ws={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},zc={},Uh={};h&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Lo(n){if(zc[n])return zc[n];if(!ws[n])return n;var i=ws[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Uh)return zc[n]=i[a];return n}var Fh=Lo("animationend"),Oh=Lo("animationiteration"),kh=Lo("animationstart"),Bh=Lo("transitionend"),zh=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,i){zh.set(n,i),l(i,[n])}for(var Vc=0;Vc<Vh.length;Vc++){var Hc=Vh[Vc],cv=Hc.toLowerCase(),uv=Hc[0].toUpperCase()+Hc.slice(1);mr(cv,"on"+uv)}mr(Fh,"onAnimationEnd"),mr(Oh,"onAnimationIteration"),mr(kh,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(Bh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function Hh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,yo(c,i,void 0,n),n.currentTarget=null}function Gh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var w=c.length-1;0<=w;w--){var F=c[w],z=F.instance,ue=F.currentTarget;if(F=F.listener,z!==m&&f.isPropagationStopped())break e;Hh(f,F,ue),m=z}else for(w=0;w<c.length;w++){if(F=c[w],z=F.instance,ue=F.currentTarget,F=F.listener,z!==m&&f.isPropagationStopped())break e;Hh(f,F,ue),m=z}}}if(Vr)throw n=Hr,Vr=!1,Hr=null,n}function Yt(n,i){var a=i[$c];a===void 0&&(a=i[$c]=new Set);var c=n+"__bubble";a.has(c)||(Wh(i,n,2,!1),a.add(c))}function Gc(n,i,a){var c=0;i&&(c|=4),Wh(a,n,c,i)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Ua(n){if(!n[Do]){n[Do]=!0,r.forEach(function(a){a!=="selectionchange"&&(fv.has(a)||Gc(a,!1,n),Gc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Do]||(i[Do]=!0,Gc("selectionchange",!1,i))}}function Wh(n,i,a,c){switch(hh(i)){case 1:var f=Tg;break;case 4:f=bg;break;default:f=bc}a=f.bind(null,i,a,n),f=void 0,!It||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Wc(n,i,a,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var F=c.stateNode.containerInfo;if(F===f||F.nodeType===8&&F.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;w=w.return}for(;F!==null;){if(w=qr(F),w===null)return;if(z=w.tag,z===5||z===6){c=m=w;continue e}F=F.parentNode}}c=c.return}Ye(function(){var ue=m,Me=it(a),we=[];e:{var Se=zh.get(n);if(Se!==void 0){var He=Cc,je=n;switch(n){case"keypress":if(Ao(a)===0)break e;case"keydown":case"keyup":He=Vg;break;case"focusin":je="focus",He=Lc;break;case"focusout":je="blur",He=Lc;break;case"beforeblur":case"afterblur":He=Lc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=Cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=Wg;break;case Fh:case Oh:case kh:He=Lg;break;case Bh:He=qg;break;case"scroll":He=Ag;break;case"wheel":He=jg;break;case"copy":case"cut":case"paste":He=Ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=_h}var Ze=(i&4)!==0,rn=!Ze&&n==="scroll",ee=Ze?Se!==null?Se+"Capture":null:Se;Ze=[];for(var Y=ue,se;Y!==null;){se=Y;var be=se.stateNode;if(se.tag===5&&be!==null&&(se=be,ee!==null&&(be=zt(Y,ee),be!=null&&Ze.push(Fa(Y,be,se)))),rn)break;Y=Y.return}0<Ze.length&&(Se=new He(Se,je,null,a,Me),we.push({event:Se,listeners:Ze}))}}if((i&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",Se&&a!==Pe&&(je=a.relatedTarget||a.fromElement)&&(qr(je)||je[ji]))break e;if((He||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,He?(je=a.relatedTarget||a.toElement,He=ue,je=je?qr(je):null,je!==null&&(rn=Dn(je),je!==rn||je.tag!==5&&je.tag!==6)&&(je=null)):(He=null,je=ue),He!==je)){if(Ze=gh,be="onMouseLeave",ee="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=_h,be="onPointerLeave",ee="onPointerEnter",Y="pointer"),rn=He==null?Se:As(He),se=je==null?Se:As(je),Se=new Ze(be,Y+"leave",He,a,Me),Se.target=rn,Se.relatedTarget=se,be=null,qr(Me)===ue&&(Ze=new Ze(ee,Y+"enter",je,a,Me),Ze.target=se,Ze.relatedTarget=rn,be=Ze),rn=be,He&&je)t:{for(Ze=He,ee=je,Y=0,se=Ze;se;se=Ts(se))Y++;for(se=0,be=ee;be;be=Ts(be))se++;for(;0<Y-se;)Ze=Ts(Ze),Y--;for(;0<se-Y;)ee=Ts(ee),se--;for(;Y--;){if(Ze===ee||ee!==null&&Ze===ee.alternate)break t;Ze=Ts(Ze),ee=Ts(ee)}Ze=null}else Ze=null;He!==null&&Xh(we,Se,He,Ze,!1),je!==null&&rn!==null&&Xh(we,rn,je,Ze,!0)}}e:{if(Se=ue?As(ue):window,He=Se.nodeName&&Se.nodeName.toLowerCase(),He==="select"||He==="input"&&Se.type==="file")var tt=tv;else if(wh(Se))if(bh)tt=sv;else{tt=iv;var at=nv}else(He=Se.nodeName)&&He.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(tt=rv);if(tt&&(tt=tt(n,ue))){Th(we,tt,a,Me);break e}at&&at(n,Se,ue),n==="focusout"&&(at=Se._wrapperState)&&at.controlled&&Se.type==="number"&&bt(Se,"number",Se.value)}switch(at=ue?As(ue):window,n){case"focusin":(wh(at)||at.contentEditable==="true")&&(Es=at,kc=ue,Da=null);break;case"focusout":Da=kc=Es=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,Ih(we,a,Me);break;case"selectionchange":if(lv)break;case"keydown":case"keyup":Ih(we,a,Me)}var ot;if(Ic)e:{switch(n){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Ms?Mh(n,a)&&(ft="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(xh&&a.locale!=="ko"&&(Ms||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Ms&&(ot=ph()):(pr=Me,Rc="value"in pr?pr.value:pr.textContent,Ms=!0)),at=Io(ue,ft),0<at.length&&(ft=new vh(ft,n,null,a,Me),we.push({event:ft,listeners:at}),ot?ft.data=ot:(ot=Eh(a),ot!==null&&(ft.data=ot)))),(ot=$g?Zg(n,a):Qg(n,a))&&(ue=Io(ue,"onBeforeInput"),0<ue.length&&(Me=new vh("onBeforeInput","beforeinput",null,a,Me),we.push({event:Me,listeners:ue}),Me.data=ot))}Gh(we,i)})}function Fa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Io(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=zt(n,a),m!=null&&c.unshift(Fa(n,m,f)),m=zt(n,i),m!=null&&c.push(Fa(n,m,f))),n=n.return}return c}function Ts(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xh(n,i,a,c,f){for(var m=i._reactName,w=[];a!==null&&a!==c;){var F=a,z=F.alternate,ue=F.stateNode;if(z!==null&&z===c)break;F.tag===5&&ue!==null&&(F=ue,f?(z=zt(a,m),z!=null&&w.unshift(Fa(a,z,F))):f||(z=zt(a,m),z!=null&&w.push(Fa(a,z,F)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var dv=/\r\n?/g,hv=/\u0000|\uFFFD/g;function qh(n){return(typeof n=="string"?n:""+n).replace(dv,`
`).replace(hv,"")}function Uo(n,i,a){if(i=qh(i),qh(n)!==i&&a)throw Error(t(425))}function Fo(){}var Xc=null,qc=null;function Yc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,pv=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,mv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(n){return Yh.resolve(null).then(n).catch(gv)}:jc;function gv(n){setTimeout(function(){throw n})}function Kc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),ba(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ba(i)}function gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function jh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Li="__reactFiber$"+bs,Oa="__reactProps$"+bs,ji="__reactContainer$"+bs,$c="__reactEvents$"+bs,vv="__reactListeners$"+bs,_v="__reactHandles$"+bs;function qr(n){var i=n[Li];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ji]||a[Li]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=jh(n);n!==null;){if(a=n[Li])return a;n=jh(n)}return i}n=a,a=n.parentNode}return null}function ka(n){return n=n[Li]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function As(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Oo(n){return n[Oa]||null}var Zc=[],Rs=-1;function vr(n){return{current:n}}function jt(n){0>Rs||(n.current=Zc[Rs],Zc[Rs]=null,Rs--)}function Wt(n,i){Rs++,Zc[Rs]=n.current,n.current=i}var _r={},En=vr(_r),Hn=vr(!1),Yr=_r;function Cs(n,i){var a=n.type.contextTypes;if(!a)return _r;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Gn(n){return n=n.childContextTypes,n!=null}function ko(){jt(Hn),jt(En)}function Kh(n,i,a){if(En.current!==_r)throw Error(t(168));Wt(En,i),Wt(Hn,a)}function $h(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,_e(n)||"Unknown",f));return fe({},a,c)}function Bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Yr=En.current,Wt(En,n),Wt(Hn,Hn.current),!0}function Zh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=$h(n,i,Yr),c.__reactInternalMemoizedMergedChildContext=n,jt(Hn),jt(En),Wt(En,n)):jt(Hn),Wt(Hn,a)}var Ki=null,zo=!1,Qc=!1;function Qh(n){Ki===null?Ki=[n]:Ki.push(n)}function xv(n){zo=!0,Qh(n)}function xr(){if(!Qc&&Ki!==null){Qc=!0;var n=0,i=Mt;try{var a=Ki;for(Mt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ki=null,zo=!1}catch(f){throw Ki!==null&&(Ki=Ki.slice(n+1)),Wr(Sa,xr),f}finally{Mt=i,Qc=!1}}return null}var Ps=[],Ns=0,Vo=null,Ho=0,li=[],ci=0,jr=null,$i=1,Zi="";function Kr(n,i){Ps[Ns++]=Ho,Ps[Ns++]=Vo,Vo=n,Ho=i}function Jh(n,i,a){li[ci++]=$i,li[ci++]=Zi,li[ci++]=jr,jr=n;var c=$i;n=Zi;var f=32-Ae(c)-1;c&=~(1<<f),a+=1;var m=32-Ae(i)+f;if(30<m){var w=f-f%5;m=(c&(1<<w)-1).toString(32),c>>=w,f-=w,$i=1<<32-Ae(i)+f|a<<f|c,Zi=m+n}else $i=1<<m|a<<f|c,Zi=n}function Jc(n){n.return!==null&&(Kr(n,1),Jh(n,1,0))}function eu(n){for(;n===Vo;)Vo=Ps[--Ns],Ps[Ns]=null,Ho=Ps[--Ns],Ps[Ns]=null;for(;n===jr;)jr=li[--ci],li[ci]=null,Zi=li[--ci],li[ci]=null,$i=li[--ci],li[ci]=null}var Qn=null,Jn=null,Zt=!1,Si=null;function ep(n,i){var a=hi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function tp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Qn=n,Jn=gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Qn=n,Jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=jr!==null?{id:$i,overflow:Zi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=hi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Qn=n,Jn=null,!0):!1;default:return!1}}function tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nu(n){if(Zt){var i=Jn;if(i){var a=i;if(!tp(n,i)){if(tu(n))throw Error(t(418));i=gr(a.nextSibling);var c=Qn;i&&tp(n,i)?ep(c,a):(n.flags=n.flags&-4097|2,Zt=!1,Qn=n)}}else{if(tu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Zt=!1,Qn=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qn=n}function Go(n){if(n!==Qn)return!1;if(!Zt)return np(n),Zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Yc(n.type,n.memoizedProps)),i&&(i=Jn)){if(tu(n))throw ip(),Error(t(418));for(;i;)ep(n,i),i=gr(i.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Jn=gr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Jn=null}}else Jn=Qn?gr(n.stateNode.nextSibling):null;return!0}function ip(){for(var n=Jn;n;)n=gr(n.nextSibling)}function Ls(){Jn=Qn=null,Zt=!1}function iu(n){Si===null?Si=[n]:Si.push(n)}var yv=R.ReactCurrentBatchConfig;function Ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var F=f.refs;w===null?delete F[m]:F[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function rp(n){var i=n._init;return i(n._payload)}function sp(n){function i(ee,Y){if(n){var se=ee.deletions;se===null?(ee.deletions=[Y],ee.flags|=16):se.push(Y)}}function a(ee,Y){if(!n)return null;for(;Y!==null;)i(ee,Y),Y=Y.sibling;return null}function c(ee,Y){for(ee=new Map;Y!==null;)Y.key!==null?ee.set(Y.key,Y):ee.set(Y.index,Y),Y=Y.sibling;return ee}function f(ee,Y){return ee=Ar(ee,Y),ee.index=0,ee.sibling=null,ee}function m(ee,Y,se){return ee.index=se,n?(se=ee.alternate,se!==null?(se=se.index,se<Y?(ee.flags|=2,Y):se):(ee.flags|=2,Y)):(ee.flags|=1048576,Y)}function w(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function F(ee,Y,se,be){return Y===null||Y.tag!==6?(Y=ju(se,ee.mode,be),Y.return=ee,Y):(Y=f(Y,se),Y.return=ee,Y)}function z(ee,Y,se,be){var tt=se.type;return tt===D?Me(ee,Y,se.props.children,be,se.key):Y!==null&&(Y.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===le&&rp(tt)===Y.type)?(be=f(Y,se.props),be.ref=Ba(ee,Y,se),be.return=ee,be):(be=pl(se.type,se.key,se.props,null,ee.mode,be),be.ref=Ba(ee,Y,se),be.return=ee,be)}function ue(ee,Y,se,be){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==se.containerInfo||Y.stateNode.implementation!==se.implementation?(Y=Ku(se,ee.mode,be),Y.return=ee,Y):(Y=f(Y,se.children||[]),Y.return=ee,Y)}function Me(ee,Y,se,be,tt){return Y===null||Y.tag!==7?(Y=is(se,ee.mode,be,tt),Y.return=ee,Y):(Y=f(Y,se),Y.return=ee,Y)}function we(ee,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=ju(""+Y,ee.mode,se),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case L:return se=pl(Y.type,Y.key,Y.props,null,ee.mode,se),se.ref=Ba(ee,null,Y),se.return=ee,se;case C:return Y=Ku(Y,ee.mode,se),Y.return=ee,Y;case le:var be=Y._init;return we(ee,be(Y._payload),se)}if(Nt(Y)||ae(Y))return Y=is(Y,ee.mode,se,null),Y.return=ee,Y;Wo(ee,Y)}return null}function Se(ee,Y,se,be){var tt=Y!==null?Y.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return tt!==null?null:F(ee,Y,""+se,be);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case L:return se.key===tt?z(ee,Y,se,be):null;case C:return se.key===tt?ue(ee,Y,se,be):null;case le:return tt=se._init,Se(ee,Y,tt(se._payload),be)}if(Nt(se)||ae(se))return tt!==null?null:Me(ee,Y,se,be,null);Wo(ee,se)}return null}function He(ee,Y,se,be,tt){if(typeof be=="string"&&be!==""||typeof be=="number")return ee=ee.get(se)||null,F(Y,ee,""+be,tt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case L:return ee=ee.get(be.key===null?se:be.key)||null,z(Y,ee,be,tt);case C:return ee=ee.get(be.key===null?se:be.key)||null,ue(Y,ee,be,tt);case le:var at=be._init;return He(ee,Y,se,at(be._payload),tt)}if(Nt(be)||ae(be))return ee=ee.get(se)||null,Me(Y,ee,be,tt,null);Wo(Y,be)}return null}function je(ee,Y,se,be){for(var tt=null,at=null,ot=Y,ft=Y=0,mn=null;ot!==null&&ft<se.length;ft++){ot.index>ft?(mn=ot,ot=null):mn=ot.sibling;var Dt=Se(ee,ot,se[ft],be);if(Dt===null){ot===null&&(ot=mn);break}n&&ot&&Dt.alternate===null&&i(ee,ot),Y=m(Dt,Y,ft),at===null?tt=Dt:at.sibling=Dt,at=Dt,ot=mn}if(ft===se.length)return a(ee,ot),Zt&&Kr(ee,ft),tt;if(ot===null){for(;ft<se.length;ft++)ot=we(ee,se[ft],be),ot!==null&&(Y=m(ot,Y,ft),at===null?tt=ot:at.sibling=ot,at=ot);return Zt&&Kr(ee,ft),tt}for(ot=c(ee,ot);ft<se.length;ft++)mn=He(ot,ee,ft,se[ft],be),mn!==null&&(n&&mn.alternate!==null&&ot.delete(mn.key===null?ft:mn.key),Y=m(mn,Y,ft),at===null?tt=mn:at.sibling=mn,at=mn);return n&&ot.forEach(function(Rr){return i(ee,Rr)}),Zt&&Kr(ee,ft),tt}function Ze(ee,Y,se,be){var tt=ae(se);if(typeof tt!="function")throw Error(t(150));if(se=tt.call(se),se==null)throw Error(t(151));for(var at=tt=null,ot=Y,ft=Y=0,mn=null,Dt=se.next();ot!==null&&!Dt.done;ft++,Dt=se.next()){ot.index>ft?(mn=ot,ot=null):mn=ot.sibling;var Rr=Se(ee,ot,Dt.value,be);if(Rr===null){ot===null&&(ot=mn);break}n&&ot&&Rr.alternate===null&&i(ee,ot),Y=m(Rr,Y,ft),at===null?tt=Rr:at.sibling=Rr,at=Rr,ot=mn}if(Dt.done)return a(ee,ot),Zt&&Kr(ee,ft),tt;if(ot===null){for(;!Dt.done;ft++,Dt=se.next())Dt=we(ee,Dt.value,be),Dt!==null&&(Y=m(Dt,Y,ft),at===null?tt=Dt:at.sibling=Dt,at=Dt);return Zt&&Kr(ee,ft),tt}for(ot=c(ee,ot);!Dt.done;ft++,Dt=se.next())Dt=He(ot,ee,ft,Dt.value,be),Dt!==null&&(n&&Dt.alternate!==null&&ot.delete(Dt.key===null?ft:Dt.key),Y=m(Dt,Y,ft),at===null?tt=Dt:at.sibling=Dt,at=Dt);return n&&ot.forEach(function(Jv){return i(ee,Jv)}),Zt&&Kr(ee,ft),tt}function rn(ee,Y,se,be){if(typeof se=="object"&&se!==null&&se.type===D&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case L:e:{for(var tt=se.key,at=Y;at!==null;){if(at.key===tt){if(tt=se.type,tt===D){if(at.tag===7){a(ee,at.sibling),Y=f(at,se.props.children),Y.return=ee,ee=Y;break e}}else if(at.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===le&&rp(tt)===at.type){a(ee,at.sibling),Y=f(at,se.props),Y.ref=Ba(ee,at,se),Y.return=ee,ee=Y;break e}a(ee,at);break}else i(ee,at);at=at.sibling}se.type===D?(Y=is(se.props.children,ee.mode,be,se.key),Y.return=ee,ee=Y):(be=pl(se.type,se.key,se.props,null,ee.mode,be),be.ref=Ba(ee,Y,se),be.return=ee,ee=be)}return w(ee);case C:e:{for(at=se.key;Y!==null;){if(Y.key===at)if(Y.tag===4&&Y.stateNode.containerInfo===se.containerInfo&&Y.stateNode.implementation===se.implementation){a(ee,Y.sibling),Y=f(Y,se.children||[]),Y.return=ee,ee=Y;break e}else{a(ee,Y);break}else i(ee,Y);Y=Y.sibling}Y=Ku(se,ee.mode,be),Y.return=ee,ee=Y}return w(ee);case le:return at=se._init,rn(ee,Y,at(se._payload),be)}if(Nt(se))return je(ee,Y,se,be);if(ae(se))return Ze(ee,Y,se,be);Wo(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,Y!==null&&Y.tag===6?(a(ee,Y.sibling),Y=f(Y,se),Y.return=ee,ee=Y):(a(ee,Y),Y=ju(se,ee.mode,be),Y.return=ee,ee=Y),w(ee)):a(ee,Y)}return rn}var Ds=sp(!0),ap=sp(!1),Xo=vr(null),qo=null,Is=null,ru=null;function su(){ru=Is=qo=null}function au(n){var i=Xo.current;jt(Xo),n._currentValue=i}function ou(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Us(n,i){qo=n,ru=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Wn=!0),n.firstContext=null)}function ui(n){var i=n._currentValue;if(ru!==n)if(n={context:n,memoizedValue:i,next:null},Is===null){if(qo===null)throw Error(t(308));Is=n,qo.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return i}var $r=null;function lu(n){$r===null?$r=[n]:$r.push(n)}function op(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,lu(i)):(a.next=f.next,f.next=a),i.interleaved=a,Qi(n,c)}function Qi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var yr=!1;function cu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ji(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Sr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Lt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Qi(n,a)}return f=c.interleaved,f===null?(i.next=i,lu(c)):(i.next=f.next,f.next=i),c.interleaved=i,Qi(n,a)}function Yo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Vn(n,a)}}function cp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function jo(n,i,a,c){var f=n.updateQueue;yr=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,F=f.shared.pending;if(F!==null){f.shared.pending=null;var z=F,ue=z.next;z.next=null,w===null?m=ue:w.next=ue,w=z;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,F=Me.lastBaseUpdate,F!==w&&(F===null?Me.firstBaseUpdate=ue:F.next=ue,Me.lastBaseUpdate=z))}if(m!==null){var we=f.baseState;w=0,Me=ue=z=null,F=m;do{var Se=F.lane,He=F.eventTime;if((c&Se)===Se){Me!==null&&(Me=Me.next={eventTime:He,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var je=n,Ze=F;switch(Se=i,He=a,Ze.tag){case 1:if(je=Ze.payload,typeof je=="function"){we=je.call(He,we,Se);break e}we=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ze.payload,Se=typeof je=="function"?je.call(He,we,Se):je,Se==null)break e;we=fe({},we,Se);break e;case 2:yr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,Se=f.effects,Se===null?f.effects=[F]:Se.push(F))}else He={eventTime:He,lane:Se,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Me===null?(ue=Me=He,z=we):Me=Me.next=He,w|=Se;if(F=F.next,F===null){if(F=f.shared.pending,F===null)break;Se=F,F=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(Me===null&&(z=we),f.baseState=z,f.firstBaseUpdate=ue,f.lastBaseUpdate=Me,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Jr|=w,n.lanes=w,n.memoizedState=we}}function up(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var za={},Di=vr(za),Va=vr(za),Ha=vr(za);function Zr(n){if(n===za)throw Error(t(174));return n}function uu(n,i){switch(Wt(Ha,i),Wt(Va,n),Wt(Di,za),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:S(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=S(i,n)}jt(Di),Wt(Di,i)}function Fs(){jt(Di),jt(Va),jt(Ha)}function fp(n){Zr(Ha.current);var i=Zr(Di.current),a=S(i,n.type);i!==a&&(Wt(Va,n),Wt(Di,a))}function fu(n){Va.current===n&&(jt(Di),jt(Va))}var Jt=vr(0);function Ko(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var du=[];function hu(){for(var n=0;n<du.length;n++)du[n]._workInProgressVersionPrimary=null;du.length=0}var $o=R.ReactCurrentDispatcher,pu=R.ReactCurrentBatchConfig,Qr=0,en=null,cn=null,hn=null,Zo=!1,Ga=!1,Wa=0,Sv=0;function wn(){throw Error(t(321))}function mu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!yi(n[a],i[a]))return!1;return!0}function gu(n,i,a,c,f,m){if(Qr=m,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$o.current=n===null||n.memoizedState===null?Tv:bv,n=a(c,f),Ga){m=0;do{if(Ga=!1,Wa=0,25<=m)throw Error(t(301));m+=1,hn=cn=null,i.updateQueue=null,$o.current=Av,n=a(c,f)}while(Ga)}if($o.current=el,i=cn!==null&&cn.next!==null,Qr=0,hn=cn=en=null,Zo=!1,i)throw Error(t(300));return n}function vu(){var n=Wa!==0;return Wa=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?en.memoizedState=hn=n:hn=hn.next=n,hn}function fi(){if(cn===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var i=hn===null?en.memoizedState:hn.next;if(i!==null)hn=i,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},hn===null?en.memoizedState=hn=n:hn=hn.next=n}return hn}function Xa(n,i){return typeof i=="function"?i(n):i}function _u(n){var i=fi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=cn,f=c.baseQueue,m=a.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}c.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,c=c.baseState;var F=w=null,z=null,ue=m;do{var Me=ue.lane;if((Qr&Me)===Me)z!==null&&(z=z.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var we={lane:Me,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};z===null?(F=z=we,w=c):z=z.next=we,en.lanes|=Me,Jr|=Me}ue=ue.next}while(ue!==null&&ue!==m);z===null?w=c:z.next=F,yi(c,i.memoizedState)||(Wn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do m=f.lane,en.lanes|=m,Jr|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function xu(n){var i=fi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do m=n(m,w.action),w=w.next;while(w!==f);yi(m,i.memoizedState)||(Wn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function dp(){}function hp(n,i){var a=en,c=fi(),f=i(),m=!yi(c.memoizedState,f);if(m&&(c.memoizedState=f,Wn=!0),c=c.queue,yu(gp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||hn!==null&&hn.memoizedState.tag&1){if(a.flags|=2048,qa(9,mp.bind(null,a,c,f,i),void 0,null),pn===null)throw Error(t(349));(Qr&30)!==0||pp(a,i,f)}return f}function pp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function mp(n,i,a,c){i.value=a,i.getSnapshot=c,vp(i)&&_p(n)}function gp(n,i,a){return a(function(){vp(i)&&_p(n)})}function vp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!yi(n,a)}catch{return!0}}function _p(n){var i=Qi(n,1);i!==null&&Ti(i,n,1,-1)}function xp(n){var i=Ii();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:n},i.queue=n,n=n.dispatch=wv.bind(null,en,n),[i.memoizedState,n]}function qa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function yp(){return fi().memoizedState}function Qo(n,i,a,c){var f=Ii();en.flags|=n,f.memoizedState=qa(1|i,a,void 0,c===void 0?null:c)}function Jo(n,i,a,c){var f=fi();c=c===void 0?null:c;var m=void 0;if(cn!==null){var w=cn.memoizedState;if(m=w.destroy,c!==null&&mu(c,w.deps)){f.memoizedState=qa(i,a,m,c);return}}en.flags|=n,f.memoizedState=qa(1|i,a,m,c)}function Sp(n,i){return Qo(8390656,8,n,i)}function yu(n,i){return Jo(2048,8,n,i)}function Mp(n,i){return Jo(4,2,n,i)}function Ep(n,i){return Jo(4,4,n,i)}function wp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Tp(n,i,a){return a=a!=null?a.concat([n]):null,Jo(4,4,wp.bind(null,i,n),a)}function Su(){}function bp(n,i){var a=fi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&mu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Ap(n,i){var a=fi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&mu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Rp(n,i,a){return(Qr&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=a):(yi(a,i)||(a=Ve(),en.lanes|=a,Jr|=a,n.baseState=!0),i)}function Mv(n,i){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var c=pu.transition;pu.transition={};try{n(!1),i()}finally{Mt=a,pu.transition=c}}function Cp(){return fi().memoizedState}function Ev(n,i,a){var c=Tr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Pp(n))Np(i,a);else if(a=op(n,i,a,c),a!==null){var f=Un();Ti(a,n,c,f),Lp(a,i,c)}}function wv(n,i,a){var c=Tr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pp(n))Np(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,F=m(w,a);if(f.hasEagerState=!0,f.eagerState=F,yi(F,w)){var z=i.interleaved;z===null?(f.next=f,lu(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}a=op(n,i,f,c),a!==null&&(f=Un(),Ti(a,n,c,f),Lp(a,i,c))}}function Pp(n){var i=n.alternate;return n===en||i!==null&&i===en}function Np(n,i){Ga=Zo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Lp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Vn(n,a)}}var el={readContext:ui,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},Tv={readContext:ui,useCallback:function(n,i){return Ii().memoizedState=[n,i===void 0?null:i],n},useContext:ui,useEffect:Sp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Qo(4194308,4,wp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Qo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Qo(4,2,n,i)},useMemo:function(n,i){var a=Ii();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ii();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Ev.bind(null,en,n),[c.memoizedState,n]},useRef:function(n){var i=Ii();return n={current:n},i.memoizedState=n},useState:xp,useDebugValue:Su,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=xp(!1),i=n[0];return n=Mv.bind(null,n[1]),Ii().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=en,f=Ii();if(Zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),pn===null)throw Error(t(349));(Qr&30)!==0||pp(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,Sp(gp.bind(null,c,m,n),[n]),c.flags|=2048,qa(9,mp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Ii(),i=pn.identifierPrefix;if(Zt){var a=Zi,c=$i;a=(c&~(1<<32-Ae(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Sv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},bv={readContext:ui,useCallback:bp,useContext:ui,useEffect:yu,useImperativeHandle:Tp,useInsertionEffect:Mp,useLayoutEffect:Ep,useMemo:Ap,useReducer:_u,useRef:yp,useState:function(){return _u(Xa)},useDebugValue:Su,useDeferredValue:function(n){var i=fi();return Rp(i,cn.memoizedState,n)},useTransition:function(){var n=_u(Xa)[0],i=fi().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:hp,useId:Cp,unstable_isNewReconciler:!1},Av={readContext:ui,useCallback:bp,useContext:ui,useEffect:yu,useImperativeHandle:Tp,useInsertionEffect:Mp,useLayoutEffect:Ep,useMemo:Ap,useReducer:xu,useRef:yp,useState:function(){return xu(Xa)},useDebugValue:Su,useDeferredValue:function(n){var i=fi();return cn===null?i.memoizedState=n:Rp(i,cn.memoizedState,n)},useTransition:function(){var n=xu(Xa)[0],i=fi().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:hp,useId:Cp,unstable_isNewReconciler:!1};function Mi(n,i){if(n&&n.defaultProps){i=fe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Mu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:fe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tl={isMounted:function(n){return(n=n._reactInternals)?Dn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Un(),f=Tr(n),m=Ji(c,f);m.payload=i,a!=null&&(m.callback=a),i=Sr(n,m,f),i!==null&&(Ti(i,n,f,c),Yo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Un(),f=Tr(n),m=Ji(c,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Sr(n,m,f),i!==null&&(Ti(i,n,f,c),Yo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Un(),c=Tr(n),f=Ji(a,c);f.tag=2,i!=null&&(f.callback=i),i=Sr(n,f,c),i!==null&&(Ti(i,n,c,a),Yo(i,n,c))}};function Dp(n,i,a,c,f,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):i.prototype&&i.prototype.isPureReactComponent?!La(a,c)||!La(f,m):!0}function Ip(n,i,a){var c=!1,f=_r,m=i.contextType;return typeof m=="object"&&m!==null?m=ui(m):(f=Gn(i)?Yr:En.current,c=i.contextTypes,m=(c=c!=null)?Cs(n,f):_r),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function Up(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function Eu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},cu(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=ui(m):(m=Gn(i)?Yr:En.current,f.context=Cs(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Mu(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&tl.enqueueReplaceState(f,f.state,null),jo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Os(n,i){try{var a="",c=i;do a+=ze(c),c=c.return;while(c);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function wu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Tu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Rv=typeof WeakMap=="function"?WeakMap:Map;function Fp(n,i,a){a=Ji(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ll||(ll=!0,zu=c),Tu(n,i)},a}function Op(n,i,a){a=Ji(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){Tu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Tu(n,i),typeof c!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function kp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Rv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=Hv.bind(null,n,i,a),i.then(n,n))}function Bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function zp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ji(-1,1),i.tag=2,Sr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Cv=R.ReactCurrentOwner,Wn=!1;function In(n,i,a,c){i.child=n===null?ap(i,null,a,c):Ds(i,n.child,a,c)}function Vp(n,i,a,c,f){a=a.render;var m=i.ref;return Us(i,f),c=gu(n,i,a,c,m,f),a=vu(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,er(n,i,f)):(Zt&&a&&Jc(i),i.flags|=1,In(n,i,c,f),i.child)}function Hp(n,i,a,c,f){if(n===null){var m=a.type;return typeof m=="function"&&!Yu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Gp(n,i,m,c,f)):(n=pl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:La,a(w,c)&&n.ref===i.ref)return er(n,i,f)}return i.flags|=1,n=Ar(m,c),n.ref=i.ref,n.return=i,i.child=n}function Gp(n,i,a,c,f){if(n!==null){var m=n.memoizedProps;if(La(m,c)&&n.ref===i.ref)if(Wn=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Wn=!0);else return i.lanes=n.lanes,er(n,i,f)}return bu(n,i,a,c,f)}function Wp(n,i,a){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(Bs,ei),ei|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Wt(Bs,ei),ei|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Wt(Bs,ei),ei|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Wt(Bs,ei),ei|=c;return In(n,i,f,a),i.child}function Xp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function bu(n,i,a,c,f){var m=Gn(a)?Yr:En.current;return m=Cs(i,m),Us(i,f),a=gu(n,i,a,c,m,f),c=vu(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,er(n,i,f)):(Zt&&c&&Jc(i),i.flags|=1,In(n,i,a,f),i.child)}function qp(n,i,a,c,f){if(Gn(a)){var m=!0;Bo(i)}else m=!1;if(Us(i,f),i.stateNode===null)il(n,i),Ip(i,a,c),Eu(i,a,c,f),c=!0;else if(n===null){var w=i.stateNode,F=i.memoizedProps;w.props=F;var z=w.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ui(ue):(ue=Gn(a)?Yr:En.current,ue=Cs(i,ue));var Me=a.getDerivedStateFromProps,we=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";we||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==c||z!==ue)&&Up(i,w,c,ue),yr=!1;var Se=i.memoizedState;w.state=Se,jo(i,c,w,f),z=i.memoizedState,F!==c||Se!==z||Hn.current||yr?(typeof Me=="function"&&(Mu(i,a,Me,c),z=i.memoizedState),(F=yr||Dp(i,a,F,c,Se,z,ue))?(we||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),w.props=c,w.state=z,w.context=ue,c=F):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,lp(n,i),F=i.memoizedProps,ue=i.type===i.elementType?F:Mi(i.type,F),w.props=ue,we=i.pendingProps,Se=w.context,z=a.contextType,typeof z=="object"&&z!==null?z=ui(z):(z=Gn(a)?Yr:En.current,z=Cs(i,z));var He=a.getDerivedStateFromProps;(Me=typeof He=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==we||Se!==z)&&Up(i,w,c,z),yr=!1,Se=i.memoizedState,w.state=Se,jo(i,c,w,f);var je=i.memoizedState;F!==we||Se!==je||Hn.current||yr?(typeof He=="function"&&(Mu(i,a,He,c),je=i.memoizedState),(ue=yr||Dp(i,a,ue,c,Se,je,z)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,je,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,je,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),w.props=c,w.state=je,w.context=z,c=ue):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),c=!1)}return Au(n,i,a,c,m,f)}function Au(n,i,a,c,f,m){Xp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&Zh(i,a,!1),er(n,i,m);c=i.stateNode,Cv.current=i;var F=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=Ds(i,n.child,null,m),i.child=Ds(i,null,F,m)):In(n,i,F,m),i.memoizedState=c.state,f&&Zh(i,a,!0),i.child}function Yp(n){var i=n.stateNode;i.pendingContext?Kh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Kh(n,i.context,!1),uu(n,i.containerInfo)}function jp(n,i,a,c,f){return Ls(),iu(f),i.flags|=256,In(n,i,a,c),i.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Cu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kp(n,i,a){var c=i.pendingProps,f=Jt.current,m=!1,w=(i.flags&128)!==0,F;if((F=w)||(F=n!==null&&n.memoizedState===null?!1:(f&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Wt(Jt,f&1),n===null)return nu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=i.mode,m=i.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=ml(w,c,0,null),n=is(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Cu(a),i.memoizedState=Ru,n):Pu(i,w));if(f=n.memoizedState,f!==null&&(F=f.dehydrated,F!==null))return Pv(n,i,w,c,F,f,a);if(m){m=c.fallback,w=i.mode,f=n.child,F=f.sibling;var z={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=Ar(f,z),c.subtreeFlags=f.subtreeFlags&14680064),F!==null?m=Ar(F,m):(m=is(m,w,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,w=n.child.memoizedState,w=w===null?Cu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=Ru,c}return m=n.child,n=m.sibling,c=Ar(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Pu(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,a,c){return c!==null&&iu(c),Ds(i,n.child,null,a),n=Pu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Pv(n,i,a,c,f,m,w){if(a)return i.flags&256?(i.flags&=-257,c=wu(Error(t(422))),nl(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=ml({mode:"visible",children:c.children},f,0,null),m=is(m,f,w,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ds(i,n.child,null,w),i.child.memoizedState=Cu(w),i.memoizedState=Ru,m);if((i.mode&1)===0)return nl(n,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var F=c.dgst;return c=F,m=Error(t(419)),c=wu(m,c,void 0),nl(n,i,w,c)}if(F=(w&n.childLanes)!==0,Wn||F){if(c=pn,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Qi(n,f),Ti(c,n,f,-1))}return qu(),c=wu(Error(t(421))),nl(n,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Gv.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Jn=gr(f.nextSibling),Qn=i,Zt=!0,Si=null,n!==null&&(li[ci++]=$i,li[ci++]=Zi,li[ci++]=jr,$i=n.id,Zi=n.overflow,jr=i),i=Pu(i,c.children),i.flags|=4096,i)}function $p(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ou(n.return,i,a)}function Nu(n,i,a,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function Zp(n,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(In(n,i,c.children,a),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$p(n,a,i);else if(n.tag===19)$p(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Wt(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Ko(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Nu(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Ko(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Nu(i,!0,a,null,m);break;case"together":Nu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function er(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Jr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ar(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ar(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Nv(n,i,a){switch(i.tag){case 3:Yp(i),Ls();break;case 5:fp(i);break;case 1:Gn(i.type)&&Bo(i);break;case 4:uu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Wt(Xo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Wt(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Kp(n,i,a):(Wt(Jt,Jt.current&1),n=er(n,i,a),n!==null?n.sibling:null);Wt(Jt,Jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Zp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Wt(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,Wp(n,i,a)}return er(n,i,a)}var Qp,Lu,Jp,em;Qp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lu=function(){},Jp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Zr(Di.current);var m=null;switch(a){case"input":f=gt(n,f),c=gt(n,c),m=[];break;case"select":f=fe({},f,{value:void 0}),c=fe({},c,{value:void 0}),m=[];break;case"textarea":f=Ot(n,f),c=Ot(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fo)}Qe(a,c);var w;a=null;for(ue in f)if(!c.hasOwnProperty(ue)&&f.hasOwnProperty(ue)&&f[ue]!=null)if(ue==="style"){var F=f[ue];for(w in F)F.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in c){var z=c[ue];if(F=f!=null?f[ue]:void 0,c.hasOwnProperty(ue)&&z!==F&&(z!=null||F!=null))if(ue==="style")if(F){for(w in F)!F.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in z)z.hasOwnProperty(w)&&F[w]!==z[w]&&(a||(a={}),a[w]=z[w])}else a||(m||(m=[]),m.push(ue,a)),a=z;else ue==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,F=F?F.__html:void 0,z!=null&&F!==z&&(m=m||[]).push(ue,z)):ue==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(ue,""+z):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(z!=null&&ue==="onScroll"&&Yt("scroll",n),m||F===z||(m=[])):(m=m||[]).push(ue,z))}a&&(m=m||[]).push("style",a);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},em=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ya(n,i){if(!Zt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Lv(n,i,a){var c=i.pendingProps;switch(eu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return Gn(i.type)&&ko(),Tn(i),null;case 3:return c=i.stateNode,Fs(),jt(Hn),jt(En),hu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Go(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Si!==null&&(Gu(Si),Si=null))),Lu(n,i),Tn(i),null;case 5:fu(i);var f=Zr(Ha.current);if(a=i.type,n!==null&&i.stateNode!=null)Jp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=Zr(Di.current),Go(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Li]=i,c[Oa]=m,n=(i.mode&1)!==0,a){case"dialog":Yt("cancel",c),Yt("close",c);break;case"iframe":case"object":case"embed":Yt("load",c);break;case"video":case"audio":for(f=0;f<Ia.length;f++)Yt(Ia[f],c);break;case"source":Yt("error",c);break;case"img":case"image":case"link":Yt("error",c),Yt("load",c);break;case"details":Yt("toggle",c);break;case"input":Ee(c,m),Yt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Yt("invalid",c);break;case"textarea":q(c,m),Yt("invalid",c)}Qe(a,m),f=null;for(var w in m)if(m.hasOwnProperty(w)){var F=m[w];w==="children"?typeof F=="string"?c.textContent!==F&&(m.suppressHydrationWarning!==!0&&Uo(c.textContent,F,n),f=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&Uo(c.textContent,F,n),f=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Yt("scroll",c)}switch(a){case"input":Ue(c),wt(c,m,!0);break;case"textarea":Ue(c),vt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Fo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=N(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Li]=i,n[Oa]=c,Qp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ie(a,c),a){case"dialog":Yt("cancel",n),Yt("close",n),f=c;break;case"iframe":case"object":case"embed":Yt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ia.length;f++)Yt(Ia[f],n);f=c;break;case"source":Yt("error",n),f=c;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),f=c;break;case"details":Yt("toggle",n),f=c;break;case"input":Ee(n,c),f=gt(n,c),Yt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=fe({},c,{value:void 0}),Yt("invalid",n);break;case"textarea":q(n,c),f=Ot(n,c),Yt("invalid",n);break;default:f=c}Qe(a,f),F=f;for(m in F)if(F.hasOwnProperty(m)){var z=F[m];m==="style"?ve(n,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ie(n,z)):m==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&he(n,z):typeof z=="number"&&he(n,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?z!=null&&m==="onScroll"&&Yt("scroll",n):z!=null&&O(n,m,z,w))}switch(a){case"input":Ue(n),wt(n,c,!1);break;case"textarea":Ue(n),vt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+G(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Ct(n,!!c.multiple,m,!1):c.defaultValue!=null&&Ct(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Fo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)em(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Zr(Ha.current),Zr(Di.current),Go(i)){if(c=i.stateNode,a=i.memoizedProps,c[Li]=i,(m=c.nodeValue!==a)&&(n=Qn,n!==null))switch(n.tag){case 3:Uo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Uo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Li]=i,i.stateNode=c}return Tn(i),null;case 13:if(jt(Jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Zt&&Jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ip(),Ls(),i.flags|=98560,m=!1;else if(m=Go(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Li]=i}else Ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),m=!1}else Si!==null&&(Gu(Si),Si=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?un===0&&(un=3):qu())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Fs(),Lu(n,i),n===null&&Ua(i.stateNode.containerInfo),Tn(i),null;case 10:return au(i.type._context),Tn(i),null;case 17:return Gn(i.type)&&ko(),Tn(i),null;case 19:if(jt(Jt),m=i.memoizedState,m===null)return Tn(i),null;if(c=(i.flags&128)!==0,w=m.rendering,w===null)if(c)Ya(m,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Ko(n),w!==null){for(i.flags|=128,Ya(m,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Wt(Jt,Jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Qt()>zs&&(i.flags|=128,c=!0,Ya(m,!1),i.lanes=4194304)}else{if(!c)if(n=Ko(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ya(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Zt)return Tn(i),null}else 2*Qt()-m.renderingStartTime>zs&&a!==1073741824&&(i.flags|=128,c=!0,Ya(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Qt(),i.sibling=null,a=Jt.current,Wt(Jt,c?a&1|2:a&1),i):(Tn(i),null);case 22:case 23:return Xu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ei&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Dv(n,i){switch(eu(i),i.tag){case 1:return Gn(i.type)&&ko(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Fs(),jt(Hn),jt(En),hu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return fu(i),null;case 13:if(jt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ls()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return jt(Jt),null;case 4:return Fs(),null;case 10:return au(i.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var rl=!1,bn=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function ks(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nn(n,i,c)}else a.current=null}function Du(n,i,a){try{a()}catch(c){nn(n,i,c)}}var tm=!1;function Uv(n,i){if(Xc=wo,n=Dh(),Oc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,F=-1,z=-1,ue=0,Me=0,we=n,Se=null;t:for(;;){for(var He;we!==a||f!==0&&we.nodeType!==3||(F=w+f),we!==m||c!==0&&we.nodeType!==3||(z=w+c),we.nodeType===3&&(w+=we.nodeValue.length),(He=we.firstChild)!==null;)Se=we,we=He;for(;;){if(we===n)break t;if(Se===a&&++ue===f&&(F=w),Se===m&&++Me===c&&(z=w),(He=we.nextSibling)!==null)break;we=Se,Se=we.parentNode}we=He}a=F===-1||z===-1?null:{start:F,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(qc={focusedElem:n,selectionRange:a},wo=!1,Xe=i;Xe!==null;)if(i=Xe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Xe=n;else for(;Xe!==null;){i=Xe;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ze=je.memoizedProps,rn=je.memoizedState,ee=i.stateNode,Y=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:Mi(i.type,Ze),rn);ee.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){nn(i,i.return,be)}if(n=i.sibling,n!==null){n.return=i.return,Xe=n;break}Xe=i.return}return je=tm,tm=!1,je}function ja(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&Du(i,a,m)}f=f.next}while(f!==c)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Iu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function nm(n){var i=n.alternate;i!==null&&(n.alternate=null,nm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Li],delete i[Oa],delete i[$c],delete i[vv],delete i[_v])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function im(n){return n.tag===5||n.tag===3||n.tag===4}function rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fo));else if(c!==4&&(n=n.child,n!==null))for(Uu(n,i,a),n=n.sibling;n!==null;)Uu(n,i,a),n=n.sibling}function Fu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Fu(n,i,a),n=n.sibling;n!==null;)Fu(n,i,a),n=n.sibling}var xn=null,Ei=!1;function Mr(n,i,a){for(a=a.child;a!==null;)sm(n,i,a),a=a.sibling}function sm(n,i,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:bn||ks(a,i);case 6:var c=xn,f=Ei;xn=null,Mr(n,i,a),xn=c,Ei=f,xn!==null&&(Ei?(n=xn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):xn.removeChild(a.stateNode));break;case 18:xn!==null&&(Ei?(n=xn,a=a.stateNode,n.nodeType===8?Kc(n.parentNode,a):n.nodeType===1&&Kc(n,a),ba(n)):Kc(xn,a.stateNode));break;case 4:c=xn,f=Ei,xn=a.stateNode.containerInfo,Ei=!0,Mr(n,i,a),xn=c,Ei=f;break;case 0:case 11:case 14:case 15:if(!bn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&Du(a,i,w),f=f.next}while(f!==c)}Mr(n,i,a);break;case 1:if(!bn&&(ks(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){nn(a,i,F)}Mr(n,i,a);break;case 21:Mr(n,i,a);break;case 22:a.mode&1?(bn=(c=bn)||a.memoizedState!==null,Mr(n,i,a),bn=c):Mr(n,i,a);break;default:Mr(n,i,a)}}function am(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Iv),i.forEach(function(c){var f=Wv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function wi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var m=n,w=i,F=w;e:for(;F!==null;){switch(F.tag){case 5:xn=F.stateNode,Ei=!1;break e;case 3:xn=F.stateNode.containerInfo,Ei=!0;break e;case 4:xn=F.stateNode.containerInfo,Ei=!0;break e}F=F.return}if(xn===null)throw Error(t(160));sm(m,w,f),xn=null,Ei=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(ue){nn(f,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)om(i,n),i=i.sibling}function om(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(wi(i,n),Ui(n),c&4){try{ja(3,n,n.return),sl(3,n)}catch(Ze){nn(n,n.return,Ze)}try{ja(5,n,n.return)}catch(Ze){nn(n,n.return,Ze)}}break;case 1:wi(i,n),Ui(n),c&512&&a!==null&&ks(a,a.return);break;case 5:if(wi(i,n),Ui(n),c&512&&a!==null&&ks(a,a.return),n.flags&32){var f=n.stateNode;try{he(f,"")}catch(Ze){nn(n,n.return,Ze)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,F=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&et(f,m),Ie(F,w);var ue=Ie(F,m);for(w=0;w<z.length;w+=2){var Me=z[w],we=z[w+1];Me==="style"?ve(f,we):Me==="dangerouslySetInnerHTML"?ie(f,we):Me==="children"?he(f,we):O(f,Me,we,ue)}switch(F){case"input":Oe(f,m);break;case"textarea":Ht(f,m);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var He=m.value;He!=null?Ct(f,!!m.multiple,He,!1):Se!==!!m.multiple&&(m.defaultValue!=null?Ct(f,!!m.multiple,m.defaultValue,!0):Ct(f,!!m.multiple,m.multiple?[]:"",!1))}f[Oa]=m}catch(Ze){nn(n,n.return,Ze)}}break;case 6:if(wi(i,n),Ui(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(Ze){nn(n,n.return,Ze)}}break;case 3:if(wi(i,n),Ui(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ba(i.containerInfo)}catch(Ze){nn(n,n.return,Ze)}break;case 4:wi(i,n),Ui(n);break;case 13:wi(i,n),Ui(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Bu=Qt())),c&4&&am(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(bn=(ue=bn)||Me,wi(i,n),bn=ue):wi(i,n),Ui(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!Me&&(n.mode&1)!==0)for(Xe=n,Me=n.child;Me!==null;){for(we=Xe=Me;Xe!==null;){switch(Se=Xe,He=Se.child,Se.tag){case 0:case 11:case 14:case 15:ja(4,Se,Se.return);break;case 1:ks(Se,Se.return);var je=Se.stateNode;if(typeof je.componentWillUnmount=="function"){c=Se,a=Se.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ze){nn(c,a,Ze)}}break;case 5:ks(Se,Se.return);break;case 22:if(Se.memoizedState!==null){um(we);continue}}He!==null?(He.return=Se,Xe=He):um(we)}Me=Me.sibling}e:for(Me=null,we=n;;){if(we.tag===5){if(Me===null){Me=we;try{f=we.stateNode,ue?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=we.stateNode,z=we.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,F.style.display=me("display",w))}catch(Ze){nn(n,n.return,Ze)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=ue?"":we.memoizedProps}catch(Ze){nn(n,n.return,Ze)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:wi(i,n),Ui(n),c&4&&am(n);break;case 21:break;default:wi(i,n),Ui(n)}}function Ui(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(im(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(he(f,""),c.flags&=-33);var m=rm(n);Fu(n,m,f);break;case 3:case 4:var w=c.stateNode.containerInfo,F=rm(n);Uu(n,F,w);break;default:throw Error(t(161))}}catch(z){nn(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Fv(n,i,a){Xe=n,lm(n)}function lm(n,i,a){for(var c=(n.mode&1)!==0;Xe!==null;){var f=Xe,m=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||rl;if(!w){var F=f.alternate,z=F!==null&&F.memoizedState!==null||bn;F=rl;var ue=bn;if(rl=w,(bn=z)&&!ue)for(Xe=f;Xe!==null;)w=Xe,z=w.child,w.tag===22&&w.memoizedState!==null?fm(f):z!==null?(z.return=w,Xe=z):fm(f);for(;m!==null;)Xe=m,lm(m),m=m.sibling;Xe=f,rl=F,bn=ue}cm(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Xe=m):cm(n)}}function cm(n){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bn||sl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Mi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&up(i,m,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}up(i,w,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Me=ue.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&ba(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||i.flags&512&&Iu(i)}catch(Se){nn(i,i.return,Se)}}if(i===n){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function um(n){for(;Xe!==null;){var i=Xe;if(i===n){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function fm(n){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{sl(4,i)}catch(z){nn(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(z){nn(i,f,z)}}var m=i.return;try{Iu(i)}catch(z){nn(i,m,z)}break;case 5:var w=i.return;try{Iu(i)}catch(z){nn(i,w,z)}}}catch(z){nn(i,i.return,z)}if(i===n){Xe=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Xe=F;break}Xe=i.return}}var Ov=Math.ceil,al=R.ReactCurrentDispatcher,Ou=R.ReactCurrentOwner,di=R.ReactCurrentBatchConfig,Lt=0,pn=null,an=null,yn=0,ei=0,Bs=vr(0),un=0,Ka=null,Jr=0,ol=0,ku=0,$a=null,Xn=null,Bu=0,zs=1/0,tr=null,ll=!1,zu=null,Er=null,cl=!1,wr=null,ul=0,Za=0,Vu=null,fl=-1,dl=0;function Un(){return(Lt&6)!==0?Qt():fl!==-1?fl:fl=Qt()}function Tr(n){return(n.mode&1)===0?1:(Lt&2)!==0&&yn!==0?yn&-yn:yv.transition!==null?(dl===0&&(dl=Ve()),dl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:hh(n.type)),n)}function Ti(n,i,a,c){if(50<Za)throw Za=0,Vu=null,Error(t(185));xt(n,a,c),((Lt&2)===0||n!==pn)&&(n===pn&&((Lt&2)===0&&(ol|=a),un===4&&br(n,yn)),qn(n,c),a===1&&Lt===0&&(i.mode&1)===0&&(zs=Qt()+500,zo&&xr()))}function qn(n,i){var a=n.callbackNode;kt(n,i);var c=Gt(n,n===pn?yn:0);if(c===0)a!==null&&ya(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ya(a),i===1)n.tag===0?xv(hm.bind(null,n)):Qh(hm.bind(null,n)),mv(function(){(Lt&6)===0&&xr()}),a=null;else{switch(Yi(c)){case 1:a=Sa;break;case 4:a=b;break;case 16:a=K;break;case 536870912:a=re;break;default:a=K}a=Sm(a,dm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function dm(n,i){if(fl=-1,dl=0,(Lt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Vs()&&n.callbackNode!==a)return null;var c=Gt(n,n===pn?yn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=hl(n,c);else{i=c;var f=Lt;Lt|=2;var m=mm();(pn!==n||yn!==i)&&(tr=null,zs=Qt()+500,ts(n,i));do try{zv();break}catch(F){pm(n,F)}while(!0);su(),al.current=m,Lt=f,an!==null?i=0:(pn=null,yn=0,i=un)}if(i!==0){if(i===2&&(f=sn(n),f!==0&&(c=f,i=Hu(n,f))),i===1)throw a=Ka,ts(n,0),br(n,c),qn(n,Qt()),a;if(i===6)br(n,c);else{if(f=n.current.alternate,(c&30)===0&&!kv(f)&&(i=hl(n,c),i===2&&(m=sn(n),m!==0&&(c=m,i=Hu(n,m))),i===1))throw a=Ka,ts(n,0),br(n,c),qn(n,Qt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ns(n,Xn,tr);break;case 3:if(br(n,c),(c&130023424)===c&&(i=Bu+500-Qt(),10<i)){if(Gt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Un(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=jc(ns.bind(null,n,Xn,tr),i);break}ns(n,Xn,tr);break;case 4:if(br(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var w=31-Ae(c);m=1<<w,w=i[w],w>f&&(f=w),c&=~m}if(c=f,c=Qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ov(c/1960))-c,10<c){n.timeoutHandle=jc(ns.bind(null,n,Xn,tr),c);break}ns(n,Xn,tr);break;case 5:ns(n,Xn,tr);break;default:throw Error(t(329))}}}return qn(n,Qt()),n.callbackNode===a?dm.bind(null,n):null}function Hu(n,i){var a=$a;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=hl(n,i),n!==2&&(i=Xn,Xn=a,i!==null&&Gu(i)),n}function Gu(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function kv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!yi(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(n,i){for(i&=~ku,i&=~ol,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ae(i),c=1<<a;n[a]=-1,i&=~c}}function hm(n){if((Lt&6)!==0)throw Error(t(327));Vs();var i=Gt(n,0);if((i&1)===0)return qn(n,Qt()),null;var a=hl(n,i);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(i=c,a=Hu(n,c))}if(a===1)throw a=Ka,ts(n,0),br(n,i),qn(n,Qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,Xn,tr),qn(n,Qt()),null}function Wu(n,i){var a=Lt;Lt|=1;try{return n(i)}finally{Lt=a,Lt===0&&(zs=Qt()+500,zo&&xr())}}function es(n){wr!==null&&wr.tag===0&&(Lt&6)===0&&Vs();var i=Lt;Lt|=1;var a=di.transition,c=Mt;try{if(di.transition=null,Mt=1,n)return n()}finally{Mt=c,di.transition=a,Lt=i,(Lt&6)===0&&xr()}}function Xu(){ei=Bs.current,jt(Bs)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,pv(a)),an!==null)for(a=an.return;a!==null;){var c=a;switch(eu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ko();break;case 3:Fs(),jt(Hn),jt(En),hu();break;case 5:fu(c);break;case 4:Fs();break;case 13:jt(Jt);break;case 19:jt(Jt);break;case 10:au(c.type._context);break;case 22:case 23:Xu()}a=a.return}if(pn=n,an=n=Ar(n.current,null),yn=ei=i,un=0,Ka=null,ku=ol=Jr=0,Xn=$a=null,$r!==null){for(i=0;i<$r.length;i++)if(a=$r[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,m=a.pending;if(m!==null){var w=m.next;m.next=f,c.next=w}a.pending=c}$r=null}return n}function pm(n,i){do{var a=an;try{if(su(),$o.current=el,Zo){for(var c=en.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Zo=!1}if(Qr=0,hn=cn=en=null,Ga=!1,Wa=0,Ou.current=null,a===null||a.return===null){un=1,Ka=i,an=null;break}e:{var m=n,w=a.return,F=a,z=i;if(i=yn,F.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=z,Me=F,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var He=Bp(w);if(He!==null){He.flags&=-257,zp(He,w,F,m,i),He.mode&1&&kp(m,ue,i),i=He,z=ue;var je=i.updateQueue;if(je===null){var Ze=new Set;Ze.add(z),i.updateQueue=Ze}else je.add(z);break e}else{if((i&1)===0){kp(m,ue,i),qu();break e}z=Error(t(426))}}else if(Zt&&F.mode&1){var rn=Bp(w);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),zp(rn,w,F,m,i),iu(Os(z,F));break e}}m=z=Os(z,F),un!==4&&(un=2),$a===null?$a=[m]:$a.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=Fp(m,z,i);cp(m,ee);break e;case 1:F=z;var Y=m.type,se=m.stateNode;if((m.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Er===null||!Er.has(se)))){m.flags|=65536,i&=-i,m.lanes|=i;var be=Op(m,F,i);cp(m,be);break e}}m=m.return}while(m!==null)}vm(a)}catch(tt){i=tt,an===a&&a!==null&&(an=a=a.return);continue}break}while(!0)}function mm(){var n=al.current;return al.current=el,n===null?el:n}function qu(){(un===0||un===3||un===2)&&(un=4),pn===null||(Jr&268435455)===0&&(ol&268435455)===0||br(pn,yn)}function hl(n,i){var a=Lt;Lt|=2;var c=mm();(pn!==n||yn!==i)&&(tr=null,ts(n,i));do try{Bv();break}catch(f){pm(n,f)}while(!0);if(su(),Lt=a,al.current=c,an!==null)throw Error(t(261));return pn=null,yn=0,un}function Bv(){for(;an!==null;)gm(an)}function zv(){for(;an!==null&&!Mo();)gm(an)}function gm(n){var i=ym(n.alternate,n,ei);n.memoizedProps=n.pendingProps,i===null?vm(n):an=i,Ou.current=null}function vm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Lv(a,i,ei),a!==null){an=a;return}}else{if(a=Dv(a,i),a!==null){a.flags&=32767,an=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,an=null;return}}if(i=i.sibling,i!==null){an=i;return}an=i=n}while(i!==null);un===0&&(un=5)}function ns(n,i,a){var c=Mt,f=di.transition;try{di.transition=null,Mt=1,Vv(n,i,a,c)}finally{di.transition=f,Mt=c}return null}function Vv(n,i,a,c){do Vs();while(wr!==null);if((Lt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(zn(n,m),n===pn&&(an=pn=null,yn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cl||(cl=!0,Sm(K,function(){return Vs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=di.transition,di.transition=null;var w=Mt;Mt=1;var F=Lt;Lt|=4,Ou.current=null,Uv(n,a),om(a,n),ov(qc),wo=!!Xc,qc=Xc=null,n.current=a,Fv(a),wc(),Lt=F,Mt=w,di.transition=m}else n.current=a;if(cl&&(cl=!1,wr=n,ul=f),m=n.pendingLanes,m===0&&(Er=null),We(a.stateNode),qn(n,Qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(ll)throw ll=!1,n=zu,zu=null,n;return(ul&1)!==0&&n.tag!==0&&Vs(),m=n.pendingLanes,(m&1)!==0?n===Vu?Za++:(Za=0,Vu=n):Za=0,xr(),null}function Vs(){if(wr!==null){var n=Yi(ul),i=di.transition,a=Mt;try{if(di.transition=null,Mt=16>n?16:n,wr===null)var c=!1;else{if(n=wr,wr=null,ul=0,(Lt&6)!==0)throw Error(t(331));var f=Lt;for(Lt|=4,Xe=n.current;Xe!==null;){var m=Xe,w=m.child;if((Xe.flags&16)!==0){var F=m.deletions;if(F!==null){for(var z=0;z<F.length;z++){var ue=F[z];for(Xe=ue;Xe!==null;){var Me=Xe;switch(Me.tag){case 0:case 11:case 15:ja(8,Me,m)}var we=Me.child;if(we!==null)we.return=Me,Xe=we;else for(;Xe!==null;){Me=Xe;var Se=Me.sibling,He=Me.return;if(nm(Me),Me===ue){Xe=null;break}if(Se!==null){Se.return=He,Xe=Se;break}Xe=He}}}var je=m.alternate;if(je!==null){var Ze=je.child;if(Ze!==null){je.child=null;do{var rn=Ze.sibling;Ze.sibling=null,Ze=rn}while(Ze!==null)}}Xe=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Xe=w;else e:for(;Xe!==null;){if(m=Xe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ja(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,Xe=ee;break e}Xe=m.return}}var Y=n.current;for(Xe=Y;Xe!==null;){w=Xe;var se=w.child;if((w.subtreeFlags&2064)!==0&&se!==null)se.return=w,Xe=se;else e:for(w=Y;Xe!==null;){if(F=Xe,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:sl(9,F)}}catch(tt){nn(F,F.return,tt)}if(F===w){Xe=null;break e}var be=F.sibling;if(be!==null){be.return=F.return,Xe=be;break e}Xe=F.return}}if(Lt=f,xr(),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(te,n)}catch{}c=!0}return c}finally{Mt=a,di.transition=i}}return!1}function _m(n,i,a){i=Os(a,i),i=Fp(n,i,1),n=Sr(n,i,1),i=Un(),n!==null&&(xt(n,1,i),qn(n,i))}function nn(n,i,a){if(n.tag===3)_m(n,n,a);else for(;i!==null;){if(i.tag===3){_m(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Er===null||!Er.has(c))){n=Os(a,n),n=Op(i,n,1),i=Sr(i,n,1),n=Un(),i!==null&&(xt(i,1,n),qn(i,n));break}}i=i.return}}function Hv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Un(),n.pingedLanes|=n.suspendedLanes&a,pn===n&&(yn&a)===a&&(un===4||un===3&&(yn&130023424)===yn&&500>Qt()-Bu?ts(n,0):ku|=a),qn(n,i)}function xm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var a=Un();n=Qi(n,i),n!==null&&(xt(n,i,a),qn(n,a))}function Gv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),xm(n,a)}function Wv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),xm(n,a)}var ym;ym=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Hn.current)Wn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Wn=!1,Nv(n,i,a);Wn=(n.flags&131072)!==0}else Wn=!1,Zt&&(i.flags&1048576)!==0&&Jh(i,Ho,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;il(n,i),n=i.pendingProps;var f=Cs(i,En.current);Us(i,a),f=gu(null,i,c,n,f,a);var m=vu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gn(c)?(m=!0,Bo(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,cu(i),f.updater=tl,i.stateNode=f,f._reactInternals=i,Eu(i,c,n,a),i=Au(null,i,c,!0,m,a)):(i.tag=0,Zt&&m&&Jc(i),In(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(il(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=qv(c),n=Mi(c,n),f){case 0:i=bu(null,i,c,n,a);break e;case 1:i=qp(null,i,c,n,a);break e;case 11:i=Vp(null,i,c,n,a);break e;case 14:i=Hp(null,i,c,Mi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mi(c,f),bu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mi(c,f),qp(n,i,c,f,a);case 3:e:{if(Yp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,lp(n,i),jo(i,c,null,a);var w=i.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Os(Error(t(423)),i),i=jp(n,i,c,a,f);break e}else if(c!==f){f=Os(Error(t(424)),i),i=jp(n,i,c,a,f);break e}else for(Jn=gr(i.stateNode.containerInfo.firstChild),Qn=i,Zt=!0,Si=null,a=ap(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ls(),c===f){i=er(n,i,a);break e}In(n,i,c,a)}i=i.child}return i;case 5:return fp(i),n===null&&nu(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,w=f.children,Yc(c,f)?w=null:m!==null&&Yc(c,m)&&(i.flags|=32),Xp(n,i),In(n,i,w,a),i.child;case 6:return n===null&&nu(i),null;case 13:return Kp(n,i,a);case 4:return uu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ds(i,null,c,a):In(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mi(c,f),Vp(n,i,c,f,a);case 7:return In(n,i,i.pendingProps,a),i.child;case 8:return In(n,i,i.pendingProps.children,a),i.child;case 12:return In(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,w=f.value,Wt(Xo,c._currentValue),c._currentValue=w,m!==null)if(yi(m.value,w)){if(m.children===f.children&&!Hn.current){i=er(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){w=m.child;for(var z=F.firstContext;z!==null;){if(z.context===c){if(m.tag===1){z=Ji(-1,a&-a),z.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var Me=ue.pending;Me===null?z.next=z:(z.next=Me.next,Me.next=z),ue.pending=z}}m.lanes|=a,z=m.alternate,z!==null&&(z.lanes|=a),ou(m.return,a,i),F.lanes|=a;break}z=z.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,F=w.alternate,F!==null&&(F.lanes|=a),ou(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}In(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Us(i,a),f=ui(f),c=c(f),i.flags|=1,In(n,i,c,a),i.child;case 14:return c=i.type,f=Mi(c,i.pendingProps),f=Mi(c.type,f),Hp(n,i,c,f,a);case 15:return Gp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mi(c,f),il(n,i),i.tag=1,Gn(c)?(n=!0,Bo(i)):n=!1,Us(i,a),Ip(i,c,f),Eu(i,c,f,a),Au(null,i,c,!0,n,a);case 19:return Zp(n,i,a);case 22:return Wp(n,i,a)}throw Error(t(156,i.tag))};function Sm(n,i){return Wr(n,i)}function Xv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,i,a,c){return new Xv(n,i,a,c)}function Yu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qv(n){if(typeof n=="function")return Yu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===B)return 11;if(n===Z)return 14}return 2}function Ar(n,i){var a=n.alternate;return a===null?(a=hi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pl(n,i,a,c,f,m){var w=2;if(c=n,typeof n=="function")Yu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case D:return is(a.children,f,m,i);case E:w=8,f|=8;break;case P:return n=hi(12,a,i,f|2),n.elementType=P,n.lanes=m,n;case ne:return n=hi(13,a,i,f),n.elementType=ne,n.lanes=m,n;case de:return n=hi(19,a,i,f),n.elementType=de,n.lanes=m,n;case Q:return ml(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case H:w=10;break e;case k:w=9;break e;case B:w=11;break e;case Z:w=14;break e;case le:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=hi(w,a,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function is(n,i,a,c){return n=hi(7,n,c,i),n.lanes=a,n}function ml(n,i,a,c){return n=hi(22,n,c,i),n.elementType=Q,n.lanes=a,n.stateNode={isHidden:!1},n}function ju(n,i,a){return n=hi(6,n,null,i),n.lanes=a,n}function Ku(n,i,a){return i=hi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Yv(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function $u(n,i,a,c,f,m,w,F,z){return n=new Yv(n,i,a,F,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=hi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(m),n}function jv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Mm(n){if(!n)return _r;n=n._reactInternals;e:{if(Dn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gn(a))return $h(n,a,i)}return i}function Em(n,i,a,c,f,m,w,F,z){return n=$u(a,c,!0,n,f,m,w,F,z),n.context=Mm(null),a=n.current,c=Un(),f=Tr(a),m=Ji(c,f),m.callback=i??null,Sr(a,m,f),n.current.lanes=f,xt(n,f,c),qn(n,c),n}function gl(n,i,a,c){var f=i.current,m=Un(),w=Tr(f);return a=Mm(a),i.context===null?i.context=a:i.pendingContext=a,i=Ji(m,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Sr(f,i,w),n!==null&&(Ti(n,f,w,m),Yo(n,f,w)),w}function vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function wm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Zu(n,i){wm(n,i),(n=n.alternate)&&wm(n,i)}function Kv(){return null}var Tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qu(n){this._internalRoot=n}_l.prototype.render=Qu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gl(n,i,null,null)},_l.prototype.unmount=Qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){gl(null,n,null,null)}),i[ji]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=Bt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<hr.length&&i!==0&&i<hr[a].priority;a++);hr.splice(a,0,n),a===0&&fh(n)}};function Ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bm(){}function $v(n,i,a,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var ue=vl(w);m.call(ue)}}var w=Em(i,c,n,0,null,!1,!1,"",bm);return n._reactRootContainer=w,n[ji]=w.current,Ua(n.nodeType===8?n.parentNode:n),es(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var F=c;c=function(){var ue=vl(z);F.call(ue)}}var z=$u(n,0,!1,null,null,!1,!1,"",bm);return n._reactRootContainer=z,n[ji]=z.current,Ua(n.nodeType===8?n.parentNode:n),es(function(){gl(i,z,a,c)}),z}function yl(n,i,a,c,f){var m=a._reactRootContainer;if(m){var w=m;if(typeof f=="function"){var F=f;f=function(){var z=vl(w);F.call(z)}}gl(i,w,n,f)}else w=$v(a,i,n,f,c);return vl(w)}Ut=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Pt(i.pendingLanes);a!==0&&(Vn(i,a|1),qn(i,Qt()),(Lt&6)===0&&(zs=Qt()+500,xr()))}break;case 13:es(function(){var c=Qi(n,1);if(c!==null){var f=Un();Ti(c,n,1,f)}}),Zu(n,1)}},qt=function(n){if(n.tag===13){var i=Qi(n,134217728);if(i!==null){var a=Un();Ti(i,n,134217728,a)}Zu(n,134217728)}},_i=function(n){if(n.tag===13){var i=Tr(n),a=Qi(n,i);if(a!==null){var c=Un();Ti(a,n,i,c)}Zu(n,i)}},Bt=function(){return Mt},xi=function(n,i){var a=Mt;try{return Mt=n,i()}finally{Mt=a}},rt=function(n,i,a){switch(i){case"input":if(Oe(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Oo(c);if(!f)throw Error(t(90));qe(c),Oe(c,f)}}}break;case"textarea":Ht(n,a);break;case"select":i=a.value,i!=null&&Ct(n,!!a.multiple,i,!1)}},ke=Wu,ye=es;var Zv={usingClientEntryPoint:!1,Events:[ka,As,Oo,ge,Le,Wu]},Qa={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qv={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Gr(n),n===null?null:n.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||Kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{te=Sl.inject(Qv),Re=Sl}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv,Yn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ju(i))throw Error(t(200));return jv(n,i,null,a)},Yn.createRoot=function(n,i){if(!Ju(n))throw Error(t(299));var a=!1,c="",f=Tm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=$u(n,1,!1,null,null,a,!1,c,f),n[ji]=i.current,Ua(n.nodeType===8?n.parentNode:n),new Qu(i)},Yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Gr(i),n=n===null?null:n.stateNode,n},Yn.flushSync=function(n){return es(n)},Yn.hydrate=function(n,i,a){if(!xl(i))throw Error(t(200));return yl(null,n,i,!0,a)},Yn.hydrateRoot=function(n,i,a){if(!Ju(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,m="",w=Tm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Em(i,null,n,1,a??null,f,!1,m,w),n[ji]=i.current,Ua(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new _l(i)},Yn.render=function(n,i,a){if(!xl(i))throw Error(t(200));return yl(null,n,i,!1,a)},Yn.unmountComponentAtNode=function(n){if(!xl(n))throw Error(t(40));return n._reactRootContainer?(es(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1},Yn.unstable_batchedUpdates=Wu,Yn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,a,!1,c)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var Im;function o_(){if(Im)return nf.exports;Im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),nf.exports=a_(),nf.exports}var Um;function l_(){if(Um)return Ml;Um=1;var s=o_();return Ml.createRoot=s.createRoot,Ml.hydrateRoot=s.hydrateRoot,Ml}var c_=l_();const u_=e_(c_);var yt=Ud();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="185",f_=0,Fm=1,d_=2,Ql=1,H0=2,uo=3,kr=0,Bn=1,Ci=2,Wi=0,aa=1,ca=2,Om=3,km=4,h_=5,us=100,p_=101,m_=102,g_=103,v_=104,__=200,x_=201,y_=202,S_=203,Hf=204,Gf=205,M_=206,E_=207,w_=208,T_=209,b_=210,A_=211,R_=212,C_=213,P_=214,Wf=0,Xf=1,qf=2,ua=3,Yf=4,jf=5,Kf=6,$f=7,G0=0,N_=1,L_=2,Xi=0,Od=1,kd=2,Bd=3,mc=4,zd=5,Vd=6,Hd=7,W0=300,ps=301,fa=302,af=303,of=304,gc=306,ac=1e3,or=1001,Zf=1002,Sn=1003,D_=1004,El=1005,Cn=1006,lf=1007,ds=1008,si=1009,X0=1010,q0=1011,po=1012,Gd=1013,qi=1014,Hi=1015,ai=1016,Wd=1017,Xd=1018,mo=1020,Y0=35902,j0=35899,K0=1021,$0=1022,Pi=1023,cr=1026,hs=1027,Z0=1028,qd=1029,ms=1030,Yd=1031,jd=1033,Jl=33776,ec=33777,tc=33778,nc=33779,Qf=35840,Jf=35841,ed=35842,td=35843,nd=36196,id=37492,rd=37496,sd=37488,ad=37489,oc=37490,od=37491,ld=37808,cd=37809,ud=37810,fd=37811,dd=37812,hd=37813,pd=37814,md=37815,gd=37816,vd=37817,_d=37818,xd=37819,yd=37820,Sd=37821,Md=36492,Ed=36494,wd=36495,Td=36283,bd=36284,lc=36285,Ad=36286,I_=3200,Rd=0,U_=1,Ur="",kn="srgb",cc="srgb-linear",uc="linear",Ft="srgb",Hs=7680,Bm=519,F_=512,O_=513,k_=514,Kd=515,B_=516,z_=517,$d=518,V_=519,Cd=35044,zm="300 es",Gi=2e3,go=2001;function H_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function G_(){const s=fc("canvas");return s.style.display="block",s}const Vm={};function dc(...s){const e="THREE."+s.shift();console.log(e,...s)}function Q0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ut(...s){s=Q0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function At(...s){s=Q0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function oa(...s){const e=s.join(" ");e in Vm||(Vm[e]=!0,ut(...s))}function W_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const X_={[Wf]:Xf,[qf]:Kf,[Yf]:$f,[ua]:jf,[Xf]:Wf,[Kf]:qf,[$f]:Yf,[jf]:ua};class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cf=Math.PI/180,Pd=180/Math.PI;function Or(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function q_(s,e){return(s%e+e)%e}function uf(s,e,t){return(1-t)*s+t*e}function zi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const sh=class sh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sh.prototype.isVector2=!0;let st=sh;class ma{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,h){let d=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3],g=l[u+0],M=l[u+1],T=l[u+2],A=l[u+3];if(_!==A||d!==g||p!==M||v!==T){let y=d*g+p*M+v*T+_*A;y<0&&(g=-g,M=-M,T=-T,A=-A,y=-y);let x=1-h;if(y<.9995){const I=Math.acos(y),O=Math.sin(I);x=Math.sin(x*I)/O,h=Math.sin(h*I)/O,d=d*x+g*h,p=p*x+M*h,v=v*x+T*h,_=_*x+A*h}else{d=d*x+g*h,p=p*x+M*h,v=v*x+T*h,_=_*x+A*h;const I=1/Math.sqrt(d*d+p*p+v*v+_*_);d*=I,p*=I,v*=I,_*=I}}e[t]=d,e[t+1]=p,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const h=r[o],d=r[o+1],p=r[o+2],v=r[o+3],_=l[u],g=l[u+1],M=l[u+2],T=l[u+3];return e[t]=h*T+v*_+d*M-p*g,e[t+1]=d*T+v*g+p*_-h*M,e[t+2]=p*T+v*M+h*g-d*_,e[t+3]=v*T-h*_-d*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,h=Math.cos,d=Math.sin,p=h(r/2),v=h(o/2),_=h(l/2),g=d(r/2),M=d(o/2),T=d(l/2);switch(u){case"XYZ":this._x=g*v*_+p*M*T,this._y=p*M*_-g*v*T,this._z=p*v*T+g*M*_,this._w=p*v*_-g*M*T;break;case"YXZ":this._x=g*v*_+p*M*T,this._y=p*M*_-g*v*T,this._z=p*v*T-g*M*_,this._w=p*v*_+g*M*T;break;case"ZXY":this._x=g*v*_-p*M*T,this._y=p*M*_+g*v*T,this._z=p*v*T+g*M*_,this._w=p*v*_-g*M*T;break;case"ZYX":this._x=g*v*_-p*M*T,this._y=p*M*_+g*v*T,this._z=p*v*T-g*M*_,this._w=p*v*_+g*M*T;break;case"YZX":this._x=g*v*_+p*M*T,this._y=p*M*_+g*v*T,this._z=p*v*T-g*M*_,this._w=p*v*_-g*M*T;break;case"XZY":this._x=g*v*_-p*M*T,this._y=p*M*_-g*v*T,this._z=p*v*T+g*M*_,this._w=p*v*_+g*M*T;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],h=t[5],d=t[9],p=t[2],v=t[6],_=t[10],g=r+h+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-d)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(v-d)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(d+v)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(d+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,h=t._x,d=t._y,p=t._z,v=t._w;return this._x=r*v+u*h+o*p-l*d,this._y=o*v+u*d+l*h-r*p,this._z=l*v+u*p+r*d-o*h,this._w=u*v-r*h-o*d-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,l=-l,u=-u,h=-h);let d=1-t;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);d=Math.sin(d*p)/v,t=Math.sin(t*p)/v,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ah=class ah{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,h=e.z,d=e.w,p=2*(u*o-h*r),v=2*(h*t-l*o),_=2*(l*r-u*t);return this.x=t+d*p+u*_-h*v,this.y=r+d*v+h*p-l*_,this.z=o+d*_+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,h=t.y,d=t.z;return this.x=o*d-l*h,this.y=l*u-r*d,this.z=r*h-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ff.copy(this).projectOnVector(e),this.sub(ff)}reflect(e){return this.sub(ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;let j=ah;const ff=new j,Hm=new ma,oh=class oh{constructor(e,t,r,o,l,u,h,d,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,d,p)}set(e,t,r,o,l,u,h,d,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=t,v[4]=l,v[5]=d,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[3],d=r[6],p=r[1],v=r[4],_=r[7],g=r[2],M=r[5],T=r[8],A=o[0],y=o[3],x=o[6],I=o[1],O=o[4],R=o[7],L=o[2],C=o[5],D=o[8];return l[0]=u*A+h*I+d*L,l[3]=u*y+h*O+d*C,l[6]=u*x+h*R+d*D,l[1]=p*A+v*I+_*L,l[4]=p*y+v*O+_*C,l[7]=p*x+v*R+_*D,l[2]=g*A+M*I+T*L,l[5]=g*y+M*O+T*C,l[8]=g*x+M*R+T*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],v=e[8];return t*u*v-t*h*p-r*l*v+r*h*d+o*l*p-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],v=e[8],_=v*u-h*p,g=h*d-v*l,M=p*l-u*d,T=t*_+r*g+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(o*p-v*r)*A,e[2]=(h*r-o*u)*A,e[3]=g*A,e[4]=(v*t-o*d)*A,e[5]=(o*l-h*t)*A,e[6]=M*A,e[7]=(r*d-p*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,h){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*u+p*h)+u+e,-o*p,o*d,-o*(-p*u+d*h)+h+t,0,0,1),this}scale(e,t){return oa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(df.makeScale(e,t)),this}rotate(e){return oa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(df.makeRotation(-e)),this}translate(e,t){return oa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(df.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};oh.prototype.isMatrix3=!0;let pt=oh;const df=new pt,Gm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y_(){const s={enabled:!0,workingColorSpace:cc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ft&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(o.r=la(o.r),o.g=la(o.g),o.b=la(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?uc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return oa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return oa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[cc]:{primaries:e,whitePoint:r,transfer:uc,toXYZ:Gm,fromXYZ:Wm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:Gm,fromXYZ:Wm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),s}const Tt=Y_();function lr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function la(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gs;class j_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Gs===void 0&&(Gs=fc("canvas")),Gs.width=e.width,Gs.height=e.height;const o=Gs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Gs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=lr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K_=0;class Zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?l.push(hf(o[u].image)):l.push(hf(o[u]))}else l=hf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function hf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?j_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let $_=0;const pf=new j;class Nn extends gs{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=or,o=or,l=Cn,u=ds,h=Pi,d=si,p=Nn.DEFAULT_ANISOTROPY,v=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Or(),this.name="",this.source=new Zd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pf).x}get height(){return this.source.getSize(pf).y}get depth(){return this.source.getSize(pf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==W0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ac:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case Zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ac:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case Zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=W0;Nn.DEFAULT_ANISOTROPY=1;const lh=class lh{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,p=d[0],v=d[4],_=d[8],g=d[1],M=d[5],T=d[9],A=d[2],y=d[6],x=d[10];if(Math.abs(v-g)<.01&&Math.abs(_-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+A)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(p+1)/2,R=(M+1)/2,L=(x+1)/2,C=(v+g)/4,D=(_+A)/4,E=(T+y)/4;return O>R&&O>L?O<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(O),o=C/r,l=D/r):R>L?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=C/o,l=E/o):L<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(L),r=D/l,o=E/l),this.set(r,o,l,t),this}let I=Math.sqrt((y-T)*(y-T)+(_-A)*(_-A)+(g-v)*(g-v));return Math.abs(I)<.001&&(I=1),this.x=(y-T)/I,this.y=(_-A)/I,this.z=(g-v)/I,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lh.prototype.isVector4=!0;let tn=lh;class Z_ extends gs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Nn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Zd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Z_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class J0 extends Nn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q_ extends Nn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pc=class pc{constructor(e,t,r,o,l,u,h,d,p,v,_,g,M,T,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,d,p,v,_,g,M,T,A,y)}set(e,t,r,o,l,u,h,d,p,v,_,g,M,T,A,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=h,x[13]=d,x[2]=p,x[6]=v,x[10]=_,x[14]=g,x[3]=M,x[7]=T,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Ws.setFromMatrixColumn(e,0).length(),l=1/Ws.setFromMatrixColumn(e,1).length(),u=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),d=Math.cos(o),p=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,M=u*_,T=h*v,A=h*_;t[0]=d*v,t[4]=-d*_,t[8]=p,t[1]=M+T*p,t[5]=g-A*p,t[9]=-h*d,t[2]=A-g*p,t[6]=T+M*p,t[10]=u*d}else if(e.order==="YXZ"){const g=d*v,M=d*_,T=p*v,A=p*_;t[0]=g+A*h,t[4]=T*h-M,t[8]=u*p,t[1]=u*_,t[5]=u*v,t[9]=-h,t[2]=M*h-T,t[6]=A+g*h,t[10]=u*d}else if(e.order==="ZXY"){const g=d*v,M=d*_,T=p*v,A=p*_;t[0]=g-A*h,t[4]=-u*_,t[8]=T+M*h,t[1]=M+T*h,t[5]=u*v,t[9]=A-g*h,t[2]=-u*p,t[6]=h,t[10]=u*d}else if(e.order==="ZYX"){const g=u*v,M=u*_,T=h*v,A=h*_;t[0]=d*v,t[4]=T*p-M,t[8]=g*p+A,t[1]=d*_,t[5]=A*p+g,t[9]=M*p-T,t[2]=-p,t[6]=h*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,M=u*p,T=h*d,A=h*p;t[0]=d*v,t[4]=A-g*_,t[8]=T*_+M,t[1]=_,t[5]=u*v,t[9]=-h*v,t[2]=-p*v,t[6]=M*_+T,t[10]=g-A*_}else if(e.order==="XZY"){const g=u*d,M=u*p,T=h*d,A=h*p;t[0]=d*v,t[4]=-_,t[8]=p*v,t[1]=g*_+A,t[5]=u*v,t[9]=M*_-T,t[2]=T*_-M,t[6]=h*v,t[10]=A*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J_,e,ex)}lookAt(e,t,r){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Cr.crossVectors(r,ti),Cr.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Cr.crossVectors(r,ti)),Cr.normalize(),wl.crossVectors(ti,Cr),o[0]=Cr.x,o[4]=wl.x,o[8]=ti.x,o[1]=Cr.y,o[5]=wl.y,o[9]=ti.y,o[2]=Cr.z,o[6]=wl.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[4],d=r[8],p=r[12],v=r[1],_=r[5],g=r[9],M=r[13],T=r[2],A=r[6],y=r[10],x=r[14],I=r[3],O=r[7],R=r[11],L=r[15],C=o[0],D=o[4],E=o[8],P=o[12],H=o[1],k=o[5],B=o[9],ne=o[13],de=o[2],Z=o[6],le=o[10],Q=o[14],X=o[3],ae=o[7],fe=o[11],U=o[15];return l[0]=u*C+h*H+d*de+p*X,l[4]=u*D+h*k+d*Z+p*ae,l[8]=u*E+h*B+d*le+p*fe,l[12]=u*P+h*ne+d*Q+p*U,l[1]=v*C+_*H+g*de+M*X,l[5]=v*D+_*k+g*Z+M*ae,l[9]=v*E+_*B+g*le+M*fe,l[13]=v*P+_*ne+g*Q+M*U,l[2]=T*C+A*H+y*de+x*X,l[6]=T*D+A*k+y*Z+x*ae,l[10]=T*E+A*B+y*le+x*fe,l[14]=T*P+A*ne+y*Q+x*U,l[3]=I*C+O*H+R*de+L*X,l[7]=I*D+O*k+R*Z+L*ae,l[11]=I*E+O*B+R*le+L*fe,l[15]=I*P+O*ne+R*Q+L*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],h=e[5],d=e[9],p=e[13],v=e[2],_=e[6],g=e[10],M=e[14],T=e[3],A=e[7],y=e[11],x=e[15],I=d*M-p*g,O=h*M-p*_,R=h*g-d*_,L=u*M-p*v,C=u*g-d*v,D=u*_-h*v;return t*(A*I-y*O+x*R)-r*(T*I-y*L+x*C)+o*(T*O-A*L+x*D)-l*(T*R-A*C+y*D)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],h=e[9],d=e[2],p=e[6],v=e[10];return t*(u*v-h*p)-r*(l*v-h*d)+o*(l*p-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],v=e[8],_=e[9],g=e[10],M=e[11],T=e[12],A=e[13],y=e[14],x=e[15],I=t*h-r*u,O=t*d-o*u,R=t*p-l*u,L=r*d-o*h,C=r*p-l*h,D=o*p-l*d,E=v*A-_*T,P=v*y-g*T,H=v*x-M*T,k=_*y-g*A,B=_*x-M*A,ne=g*x-M*y,de=I*ne-O*B+R*k+L*H-C*P+D*E;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/de;return e[0]=(h*ne-d*B+p*k)*Z,e[1]=(o*B-r*ne-l*k)*Z,e[2]=(A*D-y*C+x*L)*Z,e[3]=(g*C-_*D-M*L)*Z,e[4]=(d*H-u*ne-p*P)*Z,e[5]=(t*ne-o*H+l*P)*Z,e[6]=(y*R-T*D-x*O)*Z,e[7]=(v*D-g*R+M*O)*Z,e[8]=(u*B-h*H+p*E)*Z,e[9]=(r*H-t*B-l*E)*Z,e[10]=(T*C-A*R+x*I)*Z,e[11]=(_*R-v*C-M*I)*Z,e[12]=(h*P-u*k-d*E)*Z,e[13]=(t*k-r*P+o*E)*Z,e[14]=(A*O-T*L-y*I)*Z,e[15]=(v*L-_*O+g*I)*Z,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,h=e.y,d=e.z,p=l*u,v=l*h;return this.set(p*u+r,p*h-o*d,p*d+o*h,0,p*h+o*d,v*h+r,v*d-o*u,0,p*d-o*h,v*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,h=t._z,d=t._w,p=l+l,v=u+u,_=h+h,g=l*p,M=l*v,T=l*_,A=u*v,y=u*_,x=h*_,I=d*p,O=d*v,R=d*_,L=r.x,C=r.y,D=r.z;return o[0]=(1-(A+x))*L,o[1]=(M+R)*L,o[2]=(T-O)*L,o[3]=0,o[4]=(M-R)*C,o[5]=(1-(g+x))*C,o[6]=(y+I)*C,o[7]=0,o[8]=(T+O)*D,o[9]=(y-I)*D,o[10]=(1-(g+A))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Ws.set(o[0],o[1],o[2]).length();const h=Ws.set(o[4],o[5],o[6]).length(),d=Ws.set(o[8],o[9],o[10]).length();l<0&&(u=-u),bi.copy(this);const p=1/u,v=1/h,_=1/d;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=_,bi.elements[9]*=_,bi.elements[10]*=_,t.setFromRotationMatrix(bi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,t,r,o,l,u,h=Gi,d=!1){const p=this.elements,v=2*l/(t-e),_=2*l/(r-o),g=(t+e)/(t-e),M=(r+o)/(r-o);let T,A;if(d)T=l/(u-l),A=u*l/(u-l);else if(h===Gi)T=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(h===go)T=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,h=Gi,d=!1){const p=this.elements,v=2/(t-e),_=2/(r-o),g=-(t+e)/(t-e),M=-(r+o)/(r-o);let T,A;if(d)T=1/(u-l),A=u/(u-l);else if(h===Gi)T=-2/(u-l),A=-(u+l)/(u-l);else if(h===go)T=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};pc.prototype.isMatrix4=!0;let Kt=pc;const Ws=new j,bi=new Kt,J_=new j(0,0,0),ex=new j(1,1,1),Cr=new j,wl=new j,ti=new j,Xm=new Kt,qm=new ma;class Br{constructor(e=0,t=0,r=0,o=Br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],h=o[8],d=o[1],p=o[5],v=o[9],_=o[2],g=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Br.DEFAULT_ORDER="XYZ";class Qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tx=0;const Ym=new j,Xs=new ma,nr=new Kt,Tl=new j,eo=new j,nx=new j,ix=new ma,jm=new j(1,0,0),Km=new j(0,1,0),$m=new j(0,0,1),Zm={type:"added"},rx={type:"removed"},qs={type:"childadded",child:null},mf={type:"childremoved",child:null};class Xt extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new j,t=new Br,r=new ma,o=new j(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new pt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(jm,e)}rotateY(e){return this.rotateOnAxis(Km,e)}rotateZ(e){return this.rotateOnAxis($m,e)}translateOnAxis(e,t){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jm,e)}translateY(e){return this.translateOnAxis(Km,e)}translateZ(e){return this.translateOnAxis($m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Tl.copy(e):Tl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(eo,Tl,this.up):nr.lookAt(Tl,eo,this.up),this.quaternion.setFromRotationMatrix(nr),o&&(nr.extractRotation(o.matrixWorld),Xs.setFromRotationMatrix(nr),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zm),qs.child=e,this.dispatchEvent(qs),qs.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rx),mf.child=e,this.dispatchEvent(mf),mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zm),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,nx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,ix,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,v=d.length;p<v;p++){const _=d[p];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(l(e.materials,this.material[d]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(l(e.animations,d))}}if(t){const h=u(e.geometries),d=u(e.materials),p=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),M=u(e.animations),T=u(e.nodes);h.length>0&&(r.geometries=h),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(h){const d=[];for(const p in h){const v=h[p];delete v.metadata,d.push(v)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Xt.DEFAULT_UP=new j(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mi extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sx={type:"move"};class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),x=this._getHandJoint(p,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&g>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new mi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},bl={h:0,s:0,l:0};function vf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Tt.workingColorSpace){if(e=q_(e,1),t=Rt(t,0,1),r=Rt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=vf(u,l,e+1/3),this.g=vf(u,l,e),this.b=vf(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=kn){function r(l){l!==void 0&&parseFloat(l)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const r=eg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Tt.workingToColorSpace(Rn.copy(this),e),Math.round(Rt(Rn.r*255,0,255))*65536+Math.round(Rt(Rn.g*255,0,255))*256+Math.round(Rt(Rn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Rn.copy(this),t);const r=Rn.r,o=Rn.g,l=Rn.b,u=Math.max(r,o,l),h=Math.min(r,o,l);let d,p;const v=(h+u)/2;if(h===u)d=0,p=0;else{const _=u-h;switch(p=v<=.5?_/(u+h):_/(2-u-h),u){case r:d=(o-l)/_+(o<l?6:0);break;case o:d=(l-r)/_+2;break;case l:d=(r-o)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=v,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=kn){Tt.workingToColorSpace(Rn.copy(this),e);const t=Rn.r,r=Rn.g,o=Rn.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(bl);const r=uf(Pr.h,bl.h,t),o=uf(Pr.s,bl.s,t),l=uf(Pr.l,bl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new mt;mt.NAMES=eg;class Jd{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new mt(e),this.near=t,this.far=r}clone(){return new Jd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ax extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ai=new j,ir=new j,_f=new j,rr=new j,Ys=new j,js=new j,Qm=new j,xf=new j,yf=new j,Sf=new j,Mf=new tn,Ef=new tn,wf=new tn;class gi{constructor(e=new j,t=new j,r=new j){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ai.subVectors(e,t),o.cross(Ai);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ai.subVectors(o,t),ir.subVectors(r,t),_f.subVectors(e,t);const u=Ai.dot(Ai),h=Ai.dot(ir),d=Ai.dot(_f),p=ir.dot(ir),v=ir.dot(_f),_=u*p-h*h;if(_===0)return l.set(0,0,0),null;const g=1/_,M=(p*d-h*v)*g,T=(u*v-h*d)*g;return l.set(1-M-T,T,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,r,o,l,u,h,d){return this.getBarycoord(e,t,r,o,rr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,rr.x),d.addScaledVector(u,rr.y),d.addScaledVector(h,rr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return Mf.setScalar(0),Ef.setScalar(0),wf.setScalar(0),Mf.fromBufferAttribute(e,t),Ef.fromBufferAttribute(e,r),wf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Mf,l.x),u.addScaledVector(Ef,l.y),u.addScaledVector(wf,l.z),u}static isFrontFacing(e,t,r,o){return Ai.subVectors(r,t),ir.subVectors(e,t),Ai.cross(ir).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ai.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return gi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,h;Ys.subVectors(o,r),js.subVectors(l,r),xf.subVectors(e,r);const d=Ys.dot(xf),p=js.dot(xf);if(d<=0&&p<=0)return t.copy(r);yf.subVectors(e,o);const v=Ys.dot(yf),_=js.dot(yf);if(v>=0&&_<=v)return t.copy(o);const g=d*_-v*p;if(g<=0&&d>=0&&v<=0)return u=d/(d-v),t.copy(r).addScaledVector(Ys,u);Sf.subVectors(e,l);const M=Ys.dot(Sf),T=js.dot(Sf);if(T>=0&&M<=T)return t.copy(l);const A=M*p-d*T;if(A<=0&&p>=0&&T<=0)return h=p/(p-T),t.copy(r).addScaledVector(js,h);const y=v*T-M*_;if(y<=0&&_-v>=0&&M-T>=0)return Qm.subVectors(l,o),h=(_-v)/(_-v+(M-T)),t.copy(o).addScaledVector(Qm,h);const x=1/(y+A+g);return u=A*x,h=g*x,t.copy(r).addScaledVector(Ys,u).addScaledVector(js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _o{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Ri):Ri.fromBufferAttribute(l,u),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Al.copy(r.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Rl.subVectors(this.max,to),Ks.subVectors(e.a,to),$s.subVectors(e.b,to),Zs.subVectors(e.c,to),Nr.subVectors($s,Ks),Lr.subVectors(Zs,$s),rs.subVectors(Ks,Zs);let t=[0,-Nr.z,Nr.y,0,-Lr.z,Lr.y,0,-rs.z,rs.y,Nr.z,0,-Nr.x,Lr.z,0,-Lr.x,rs.z,0,-rs.x,-Nr.y,Nr.x,0,-Lr.y,Lr.x,0,-rs.y,rs.x,0];return!Tf(t,Ks,$s,Zs,Rl)||(t=[1,0,0,0,1,0,0,0,1],!Tf(t,Ks,$s,Zs,Rl))?!1:(Cl.crossVectors(Nr,Lr),t=[Cl.x,Cl.y,Cl.z],Tf(t,Ks,$s,Zs,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new j,new j,new j,new j,new j,new j,new j,new j],Ri=new j,Al=new _o,Ks=new j,$s=new j,Zs=new j,Nr=new j,Lr=new j,rs=new j,to=new j,Rl=new j,Cl=new j,ss=new j;function Tf(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ss.fromArray(s,l);const h=o.x*Math.abs(ss.x)+o.y*Math.abs(ss.y)+o.z*Math.abs(ss.z),d=e.dot(ss),p=t.dot(ss),v=r.dot(ss);if(Math.max(-Math.max(d,p,v),Math.min(d,p,v))>h)return!1}return!0}const on=new j,Pl=new st;let ox=0;class vi extends gs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ox++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Cd,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=zi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array),l=Vt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class tg extends vi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ng extends vi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ln extends vi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const lx=new _o,no=new j,bf=new j;class vc{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):lx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(no,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(bf)),this.expandByPoint(no.copy(e.center).sub(bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cx=0;const pi=new Kt,Af=new Xt,Qs=new j,ni=new _o,io=new _o,gn=new j;class Ln extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H_(e)?ng:tg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return Af.lookAt(e),Af.updateMatrix(),this.applyMatrix4(Af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ln(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];io.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(ni.min,io.min),ni.expandByPoint(gn),gn.addVectors(ni.max,io.max),ni.expandByPoint(gn)):(ni.expandByPoint(io.min),ni.expandByPoint(io.max))}ni.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)gn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(gn));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],d=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)gn.fromBufferAttribute(h,p),d&&(Qs.fromBufferAttribute(e,p),gn.add(Qs)),o=Math.max(o,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new vi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],d=[];for(let E=0;E<r.count;E++)h[E]=new j,d[E]=new j;const p=new j,v=new j,_=new j,g=new st,M=new st,T=new st,A=new j,y=new j;function x(E,P,H){p.fromBufferAttribute(r,E),v.fromBufferAttribute(r,P),_.fromBufferAttribute(r,H),g.fromBufferAttribute(l,E),M.fromBufferAttribute(l,P),T.fromBufferAttribute(l,H),v.sub(p),_.sub(p),M.sub(g),T.sub(g);const k=1/(M.x*T.y-T.x*M.y);isFinite(k)&&(A.copy(v).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(k),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(k),h[E].add(A),h[P].add(A),h[H].add(A),d[E].add(y),d[P].add(y),d[H].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let E=0,P=I.length;E<P;++E){const H=I[E],k=H.start,B=H.count;for(let ne=k,de=k+B;ne<de;ne+=3)x(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const O=new j,R=new j,L=new j,C=new j;function D(E){L.fromBufferAttribute(o,E),C.copy(L);const P=h[E];O.copy(P),O.sub(L.multiplyScalar(L.dot(P))).normalize(),R.crossVectors(C,P);const k=R.dot(d[E])<0?-1:1;u.setXYZW(E,O.x,O.y,O.z,k)}for(let E=0,P=I.length;E<P;++E){const H=I[E],k=H.start,B=H.count;for(let ne=k,de=k+B;ne<de;ne+=3)D(e.getX(ne+0)),D(e.getX(ne+1)),D(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new j,l=new j,u=new j,h=new j,d=new j,p=new j,v=new j,_=new j;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),A=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,y),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),h.fromBufferAttribute(r,T),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),h.add(v),d.add(v),p.add(v),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,M=t.count;g<M;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(h,d){const p=h.array,v=h.itemSize,_=h.normalized,g=new p.constructor(d.length*v);let M=0,T=0;for(let A=0,y=d.length;A<y;A++){h.isInterleavedBufferAttribute?M=d[A]*h.data.stride+h.offset:M=d[A]*v;for(let x=0;x<v;x++)g[T++]=p[M++]}return new vi(g,v,_)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,r=this.index.array,o=this.attributes;for(const h in o){const d=o[h],p=e(d,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const d=[],p=l[h];for(let v=0,_=p.length;v<_;v++){const g=p[v],M=e(g,r);d.push(M)}t.morphAttributes[h]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],v=[];for(let _=0,g=p.length;_<g;_++){const M=p[_];v.push(M.toJSON(e.data))}v.length>0&&(o[d]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let g=0,M=_.length;g<M;g++)v.push(_[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ux{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cd,this.updateRanges=[],this.version=0,this.uuid=Or()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new j;class hc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=zi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array),l=Vt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){dc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new vi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){dc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let fx=0;class vs extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=aa,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hf,this.blendDst=Gf,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(r.blending=this.blending),this.side!==kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Hf&&(r.blendSrc=this.blendSrc),this.blendDst!==Gf&&(r.blendDst=this.blendDst),this.blendEquation!==us&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new st().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ig extends vs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Js;const ro=new j,ea=new j,ta=new j,na=new st,so=new st,rg=new Kt,Nl=new j,ao=new j,Ll=new j,Jm=new st,Rf=new st,e0=new st;class dx extends Xt{constructor(e=new ig){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new Ln;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new ux(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new hc(r,3,0,!1)),Js.setAttribute("uv",new hc(r,2,3,!1))}this.geometry=Js,this.material=e,this.center=new st(.5,.5),this.count=1}raycast(e,t){e.camera===null&&At('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ea.setFromMatrixScale(this.matrixWorld),rg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ta.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ea.multiplyScalar(-ta.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Dl(Nl.set(-.5,-.5,0),ta,u,ea,o,l),Dl(ao.set(.5,-.5,0),ta,u,ea,o,l),Dl(Ll.set(.5,.5,0),ta,u,ea,o,l),Jm.set(0,0),Rf.set(1,0),e0.set(1,1);let h=e.ray.intersectTriangle(Nl,ao,Ll,!1,ro);if(h===null&&(Dl(ao.set(-.5,.5,0),ta,u,ea,o,l),Rf.set(0,1),h=e.ray.intersectTriangle(Nl,Ll,ao,!1,ro),h===null))return;const d=e.ray.origin.distanceTo(ro);d<e.near||d>e.far||t.push({distance:d,point:ro.clone(),uv:gi.getInterpolation(ro,Nl,ao,Ll,Jm,Rf,e0,new st),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Dl(s,e,t,r,o,l){na.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(so.x=l*na.x-o*na.y,so.y=o*na.x+l*na.y):so.copy(na),s.copy(e),s.x+=so.x,s.y+=so.y,s.applyMatrix4(rg)}const ar=new j,Cf=new j,Il=new j,Dr=new j,Pf=new j,Ul=new j,Nf=new j;class eh{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Cf.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(Cf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Il),h=Dr.dot(this.direction),d=-Dr.dot(Il),p=Dr.lengthSq(),v=Math.abs(1-u*u);let _,g,M,T;if(v>0)if(_=u*d-h,g=u*h-d,T=l*v,_>=0)if(g>=-T)if(g<=T){const A=1/v;_*=A,g*=A,M=_*(_+u*g+2*h)+g*(u*_+g+2*d)+p}else g=l,_=Math.max(0,-(u*g+h)),M=-_*_+g*(g+2*d)+p;else g=-l,_=Math.max(0,-(u*g+h)),M=-_*_+g*(g+2*d)+p;else g<=-T?(_=Math.max(0,-(-u*l+h)),g=_>0?-l:Math.min(Math.max(-l,-d),l),M=-_*_+g*(g+2*d)+p):g<=T?(_=0,g=Math.min(Math.max(-l,-d),l),M=g*(g+2*d)+p):(_=Math.max(0,-(u*l+h)),g=_>0?l:Math.min(Math.max(-l,-d),l),M=-_*_+g*(g+2*d)+p);else g=u>0?-l:l,_=Math.max(0,-(u*g+h)),M=-_*_+g*(g+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Cf).addScaledVector(Il,g),M}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const r=ar.dot(this.direction),o=ar.dot(ar)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),h=r-u,d=r+u;return d<0?null:h<0?this.at(d,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,h,d;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-g.z)*_,d=(e.max.z-g.z)*_):(h=(e.max.z-g.z)*_,d=(e.min.z-g.z)*_),r>d||h>o)||((h>r||r!==r)&&(r=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,r,o,l){Pf.subVectors(t,e),Ul.subVectors(r,e),Nf.crossVectors(Pf,Ul);let u=this.direction.dot(Nf),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Dr.subVectors(this.origin,e);const d=h*this.direction.dot(Ul.crossVectors(Dr,Ul));if(d<0)return null;const p=h*this.direction.dot(Pf.cross(Dr));if(p<0||d+p>u)return null;const v=-h*Dr.dot(Nf);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jn extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=G0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const t0=new Kt,as=new eh,Fl=new vc,n0=new j,Ol=new j,kl=new j,Bl=new j,Lf=new j,zl=new j,i0=new j,Vl=new j;class St extends Xt{constructor(e=new Ln,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){zl.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const v=h[d],_=l[d];v!==0&&(Lf.fromBufferAttribute(_,e),u?zl.addScaledVector(Lf,v):zl.addScaledVector(Lf.sub(t),v))}t.add(zl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(l),as.copy(e.ray).recast(e.near),!(Fl.containsPoint(as.origin)===!1&&(as.intersectSphere(Fl,n0)===null||as.origin.distanceToSquared(n0)>(e.far-e.near)**2))&&(t0.copy(l).invert(),as.copy(e.ray).applyMatrix4(t0),!(r.boundingBox!==null&&as.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,h=l.index,d=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,M=l.drawRange;if(h!==null)if(Array.isArray(u))for(let T=0,A=g.length;T<A;T++){const y=g[T],x=u[y.materialIndex],I=Math.max(y.start,M.start),O=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let R=I,L=O;R<L;R+=3){const C=h.getX(R),D=h.getX(R+1),E=h.getX(R+2);o=Hl(this,x,e,r,p,v,_,C,D,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let y=T,x=A;y<x;y+=3){const I=h.getX(y),O=h.getX(y+1),R=h.getX(y+2);o=Hl(this,u,e,r,p,v,_,I,O,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let T=0,A=g.length;T<A;T++){const y=g[T],x=u[y.materialIndex],I=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=I,L=O;R<L;R+=3){const C=R,D=R+1,E=R+2;o=Hl(this,x,e,r,p,v,_,C,D,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=T,x=A;y<x;y+=3){const I=y,O=y+1,R=y+2;o=Hl(this,u,e,r,p,v,_,I,O,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function hx(s,e,t,r,o,l,u,h){let d;if(e.side===Bn?d=r.intersectTriangle(u,l,o,!0,h):d=r.intersectTriangle(o,l,u,e.side===kr,h),d===null)return null;Vl.copy(h),Vl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Vl);return p<t.near||p>t.far?null:{distance:p,point:Vl.clone(),object:s}}function Hl(s,e,t,r,o,l,u,h,d,p){s.getVertexPosition(h,Ol),s.getVertexPosition(d,kl),s.getVertexPosition(p,Bl);const v=hx(s,e,t,r,Ol,kl,Bl,i0);if(v){const _=new j;gi.getBarycoord(i0,Ol,kl,Bl,_),o&&(v.uv=gi.getInterpolatedAttribute(o,h,d,p,_,new st)),l&&(v.uv1=gi.getInterpolatedAttribute(l,h,d,p,_,new st)),u&&(v.normal=gi.getInterpolatedAttribute(u,h,d,p,_,new j),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:d,c:p,normal:new j,materialIndex:0};gi.getNormal(Ol,kl,Bl,g.normal),v.face=g,v.barycoord=_}return v}class px extends Nn{constructor(e=null,t=1,r=1,o,l,u,h,d,p=Sn,v=Sn,_,g){super(null,u,h,d,p,v,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Df=new j,mx=new j,gx=new pt;class cs{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Df.subVectors(r,t).cross(mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Df),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||gx.getNormalMatrix(e),o=this.coplanarPoint(Df).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new vc,vx=new st(.5,.5),Gl=new j;class th{constructor(e=new cs,t=new cs,r=new cs,o=new cs,l=new cs,u=new cs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Gi,r=!1){const o=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],v=l[4],_=l[5],g=l[6],M=l[7],T=l[8],A=l[9],y=l[10],x=l[11],I=l[12],O=l[13],R=l[14],L=l[15];if(o[0].setComponents(p-u,M-v,x-T,L-I).normalize(),o[1].setComponents(p+u,M+v,x+T,L+I).normalize(),o[2].setComponents(p+h,M+_,x+A,L+O).normalize(),o[3].setComponents(p-h,M-_,x-A,L-O).normalize(),r)o[4].setComponents(d,g,y,R).normalize(),o[5].setComponents(p-d,M-g,x-y,L-R).normalize();else if(o[4].setComponents(p-d,M-g,x-y,L-R).normalize(),t===Gi)o[5].setComponents(p+d,M+g,x+y,L+R).normalize();else if(t===go)o[5].setComponents(d,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=vx.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Gl.x=o.normal.x>0?e.max.x:e.min.x,Gl.y=o.normal.y>0?e.max.y:e.min.y,Gl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sg extends vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const r0=new Kt,Nd=new eh,Wl=new vc,Xl=new j;class _x extends Xt{constructor(e=new Ln,t=new sg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(o),Wl.radius+=l,e.ray.intersectsSphere(Wl)===!1)return;r0.copy(o).invert(),Nd.copy(e.ray).applyMatrix4(r0);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=r.index,_=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let T=g,A=M;T<A;T++){const y=p.getX(T);Xl.fromBufferAttribute(_,y),s0(Xl,y,d,o,e,t,this)}}else{const g=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let T=g,A=M;T<A;T++)Xl.fromBufferAttribute(_,T),s0(Xl,T,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function s0(s,e,t,r,o,l,u){const h=Nd.distanceSqToPoint(s);if(h<t){const d=new j;Nd.closestPointToPoint(s,d),d.applyMatrix4(r);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class ag extends Nn{constructor(e=[],t=ps,r,o,l,u,h,d,p,v){super(e,t,r,o,l,u,h,d,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ic extends Nn{constructor(e,t,r,o,l,u,h,d,p){super(e,t,r,o,l,u,h,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class da extends Nn{constructor(e,t,r=qi,o,l,u,h=Sn,d=Sn,p,v=cr,_=1){if(v!==cr&&v!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,l,u,h,d,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xx extends da{constructor(e,t=qi,r=ps,o,l,u=Sn,h=Sn,d,p=cr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,h,d,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class og extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ii extends Ln{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const h=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],v=[],_=[];let g=0,M=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,o,u,2),T("x","z","y",1,-1,e,r,-t,o,u,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new ln(p,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(_,2));function T(A,y,x,I,O,R,L,C,D,E,P){const H=R/D,k=L/E,B=R/2,ne=L/2,de=C/2,Z=D+1,le=E+1;let Q=0,X=0;const ae=new j;for(let fe=0;fe<le;fe++){const U=fe*k-ne;for(let J=0;J<Z;J++){const Fe=J*H-B;ae[A]=Fe*I,ae[y]=U*O,ae[x]=de,p.push(ae.x,ae.y,ae.z),ae[A]=0,ae[y]=0,ae[x]=C>0?1:-1,v.push(ae.x,ae.y,ae.z),_.push(J/D),_.push(1-fe/E),Q+=1}}for(let fe=0;fe<E;fe++)for(let U=0;U<D;U++){const J=g+U+Z*fe,Fe=g+U+Z*(fe+1),Ge=g+(U+1)+Z*(fe+1),ze=g+(U+1)+Z*fe;d.push(J,Fe,ze),d.push(Fe,Ge,ze),X+=6}h.addGroup(M,X,P),M+=X,g+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nh extends Ln{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],u=[],h=[],d=[],p=new j,v=new st;u.push(0,0,0),h.push(0,0,1),d.push(.5,.5);for(let _=0,g=3;_<=t;_++,g+=3){const M=r+_/t*o;p.x=e*Math.cos(M),p.y=e*Math.sin(M),u.push(p.x,p.y,p.z),h.push(0,0,1),v.x=(u[g]/e+1)/2,v.y=(u[g+1]/e+1)/2,d.push(v.x,v.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new ln(u,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vi extends Ln{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,h=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],_=[],g=[],M=[];let T=0;const A=[],y=r/2;let x=0;I(),u===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(v),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(M,2));function I(){const R=new j,L=new j;let C=0;const D=(t-e)/r;for(let E=0;E<=l;E++){const P=[],H=E/l,k=H*(t-e)+e;for(let B=0;B<=o;B++){const ne=B/o,de=ne*d+h,Z=Math.sin(de),le=Math.cos(de);L.x=k*Z,L.y=-H*r+y,L.z=k*le,_.push(L.x,L.y,L.z),R.set(Z,D,le).normalize(),g.push(R.x,R.y,R.z),M.push(ne,1-H),P.push(T++)}A.push(P)}for(let E=0;E<o;E++)for(let P=0;P<l;P++){const H=A[P][E],k=A[P+1][E],B=A[P+1][E+1],ne=A[P][E+1];(e>0||P!==0)&&(v.push(H,k,ne),C+=3),(t>0||P!==l-1)&&(v.push(k,B,ne),C+=3)}p.addGroup(x,C,0),x+=C}function O(R){const L=T,C=new st,D=new j;let E=0;const P=R===!0?e:t,H=R===!0?1:-1;for(let B=1;B<=o;B++)_.push(0,y*H,0),g.push(0,H,0),M.push(.5,.5),T++;const k=T;for(let B=0;B<=o;B++){const de=B/o*d+h,Z=Math.cos(de),le=Math.sin(de);D.x=P*le,D.y=y*H,D.z=P*Z,_.push(D.x,D.y,D.z),g.push(0,H,0),C.x=Z*.5+.5,C.y=le*.5*H+.5,M.push(C.x,C.y),T++}for(let B=0;B<o;B++){const ne=L+B,de=k+B;R===!0?v.push(de,de+1,ne):v.push(de+1,de,ne),E+=3}p.addGroup(x,E,R===!0?1:2),x+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ih extends Vi{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,h=Math.PI*2){super(0,e,t,r,o,l,u,h),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:h}}static fromJSON(e){return new ih(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kn extends Ln{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,h=Math.floor(r),d=Math.floor(o),p=h+1,v=d+1,_=e/h,g=t/d,M=[],T=[],A=[],y=[];for(let x=0;x<v;x++){const I=x*g-u;for(let O=0;O<p;O++){const R=O*_-l;T.push(R,-I,0),A.push(0,0,1),y.push(O/h),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let I=0;I<h;I++){const O=I+p*x,R=I+p*(x+1),L=I+1+p*(x+1),C=I+1+p*x;M.push(O,R,C),M.push(R,L,C)}this.setIndex(M),this.setAttribute("position",new ln(T,3)),this.setAttribute("normal",new ln(A,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.width,e.height,e.widthSegments,e.heightSegments)}}class _c extends Ln{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(u+h,Math.PI);let p=0;const v=[],_=new j,g=new j,M=[],T=[],A=[],y=[];for(let x=0;x<=r;x++){const I=[],O=x/r,R=u+O*h,L=e*Math.cos(R),C=Math.sqrt(e*e-L*L);let D=0;x===0&&u===0?D=.5/t:x===r&&d===Math.PI&&(D=-.5/t);for(let E=0;E<=t;E++){const P=E/t,H=o+P*l;_.x=-C*Math.cos(H),_.y=L,_.z=C*Math.sin(H),T.push(_.x,_.y,_.z),g.copy(_).normalize(),A.push(g.x,g.y,g.z),y.push(P+D,1-O),I.push(p++)}v.push(I)}for(let x=0;x<r;x++)for(let I=0;I<t;I++){const O=v[x][I+1],R=v[x][I],L=v[x+1][I],C=v[x+1][I+1];(x!==0||u>0)&&M.push(O,R,C),(x!==r-1||d<Math.PI)&&M.push(R,L,C)}this.setIndex(M),this.setAttribute("position",new ln(T,3)),this.setAttribute("normal",new ln(A,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ha(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(a0(o))o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(a0(o[0])){const l=[];for(let u=0,h=o.length;u<h;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function On(s){const e={};for(let t=0;t<s.length;t++){const r=ha(s[t]);for(const o in r)e[o]=r[o]}return e}function a0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function yx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function lg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const vo={clone:ha,merge:On};var Sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sx,this.fragmentShader=Mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new mt().setHex(o.value);break;case"v2":this.uniforms[r].value=new st().fromArray(o.value);break;case"v3":this.uniforms[r].value=new j().fromArray(o.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new pt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Kt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cg extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vn extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ex extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wx extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xc extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Tx extends xc{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const If=new Kt,o0=new j,l0=new j;class ug{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new th,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;o0.setFromMatrixPosition(e.matrixWorld),t.position.copy(o0),l0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(l0),t.updateMatrixWorld(),If.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===go||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(If)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ql=new j,Yl=new ma,Fi=new j;class fg extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ql,Yl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(ql,Yl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new j,c0=new st,u0=new st;class ri extends fg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(cf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,c0,u0),t.subVectors(u0,c0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cf*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/p,o*=u.width/d,r*=u.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bx extends ug{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0}}class ho extends xc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new bx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class yc extends fg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=v*this.view.offsetY,d=h-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ax extends ug{constructor(){super(new yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rx extends xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Ax}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Cx extends xc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ia=-90,ra=1;class Px extends Xt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ri(ia,ra,e,t);o.layers=this.layers,this.add(o);const l=new ri(ia,ra,e,t);l.layers=this.layers,this.add(l);const u=new ri(ia,ra,e,t);u.layers=this.layers,this.add(u);const h=new ri(ia,ra,e,t);h.layers=this.layers,this.add(h);const d=new ri(ia,ra,e,t);d.layers=this.layers,this.add(d);const p=new ri(ia,ra,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,h,d]=t;for(const p of t)this.remove(p);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===go)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,d,p,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Nx extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Lx{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Dx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Dx(){this._document.hidden===!1&&this.reset()}const f0=new Kt;class dg{constructor(e,t,r=0,o=1/0){this.ray=new eh(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Qd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):At("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return f0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(f0),this}intersectObject(e,t=!0,r=[]){return Ld(e,this,r,t),r.sort(d0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Ld(e[o],this,r,t);return r.sort(d0),r}}function d0(s,e){return s.distance-e.distance}function Ld(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,h=l.length;u<h;u++)Ld(l[u],e,t,!0)}}class Ix{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ut("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ch=class ch{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};ch.prototype.isMatrix2=!0;let h0=ch;function p0(s,e,t,r){const o=Ux(r);switch(t){case K0:return s*e;case Z0:return s*e/o.components*o.byteLength;case qd:return s*e/o.components*o.byteLength;case ms:return s*e*2/o.components*o.byteLength;case Yd:return s*e*2/o.components*o.byteLength;case $0:return s*e*3/o.components*o.byteLength;case Pi:return s*e*4/o.components*o.byteLength;case jd:return s*e*4/o.components*o.byteLength;case Jl:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jf:case td:return Math.max(s,16)*Math.max(e,8)/4;case Qf:case ed:return Math.max(s,8)*Math.max(e,8)/2;case nd:case id:case sd:case ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rd:case oc:case od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ud:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Md:case Ed:case wd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Td:case bd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lc:case Ad:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ux(s){switch(s){case si:case X0:return{byteLength:1,components:1};case po:case q0:case ai:return{byteLength:2,components:1};case Wd:case Xd:return{byteLength:2,components:4};case qi:case Gd:case Hi:return{byteLength:4,components:1};case Y0:case j0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Fx(s){const e=new WeakMap;function t(h,d){const p=h.array,v=h.usage,_=p.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,d,p){const v=d.array,_=d.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,v);else{_.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<_.length;M++){const T=_[g],A=_[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++g,_[g]=A)}_.length=g+1;for(let M=0,T=_.length;M<T;M++){const A=_[M];s.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(s.deleteBuffer(d.buffer),e.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,d),p.version=h.version}}return{get:o,remove:l,update:u}}var Ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kx=`#ifdef USE_ALPHAHASH
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
#endif`,zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gx=`#ifdef USE_AOMAP
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
#endif`,Wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xx=`#ifdef USE_BATCHING
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
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jx=`vec3 objectNormal = vec3( normal );
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
} // validated`,$x=`#ifdef USE_IRIDESCENCE
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
#endif`,Zx=`#ifdef USE_BUMPMAP
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
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ay=`#define PI 3.141592653589793
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
} // validated`,oy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ly=`vec3 transformedNormal = objectNormal;
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
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,My=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wy=`#ifdef USE_GRADIENTMAP
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
}`,Ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,by=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ry=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iy=`PhysicalMaterial material;
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
#endif`,Uy=`uniform sampler2D dfgLUT;
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
}`,Fy=`
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
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yy=`#if defined( USE_POINTS_UV )
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
#endif`,jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`#ifdef USE_MORPHTARGETS
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
#endif`,eS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,aS=`#ifdef USE_NORMALMAP
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
#endif`,oS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lS=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,uS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fS=`#ifdef OPAQUE
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
}`,hS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MS=`float getShadowMask() {
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
}`,ES=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,TS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bS=`#ifdef USE_SKINNING
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
#endif`,AS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NS=`#ifdef USE_TRANSMISSION
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
#endif`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kS=`uniform sampler2D t2D;
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
}`,zS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`#include <common>
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
}`,WS=`#if DEPTH_PACKING == 3200
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
}`,XS=`#define DISTANCE
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
}`,qS=`#define DISTANCE
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jS=`uniform sampler2D tEquirect;
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
}`,$S=`uniform vec3 diffuse;
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
}`,ZS=`#include <common>
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
}`,QS=`uniform vec3 diffuse;
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
}`,JS=`#define LAMBERT
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
}`,eM=`#define LAMBERT
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
}`,tM=`#define MATCAP
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
}`,nM=`#define MATCAP
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
}`,iM=`#define NORMAL
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
}`,rM=`#define NORMAL
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
}`,sM=`#define PHONG
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
}`,aM=`#define PHONG
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
}`,oM=`#define STANDARD
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
}`,lM=`#define STANDARD
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
}`,uM=`#define TOON
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
}`,fM=`uniform float size;
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
}`,hM=`#include <common>
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
}`,pM=`uniform vec3 color;
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
}`,mM=`uniform float rotation;
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
}`,gM=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:Ox,alphahash_pars_fragment:kx,alphamap_fragment:Bx,alphamap_pars_fragment:zx,alphatest_fragment:Vx,alphatest_pars_fragment:Hx,aomap_fragment:Gx,aomap_pars_fragment:Wx,batching_pars_vertex:Xx,batching_vertex:qx,begin_vertex:Yx,beginnormal_vertex:jx,bsdfs:Kx,iridescence_fragment:$x,bumpmap_pars_fragment:Zx,clipping_planes_fragment:Qx,clipping_planes_pars_fragment:Jx,clipping_planes_pars_vertex:ey,clipping_planes_vertex:ty,color_fragment:ny,color_pars_fragment:iy,color_pars_vertex:ry,color_vertex:sy,common:ay,cube_uv_reflection_fragment:oy,defaultnormal_vertex:ly,displacementmap_pars_vertex:cy,displacementmap_vertex:uy,emissivemap_fragment:fy,emissivemap_pars_fragment:dy,colorspace_fragment:hy,colorspace_pars_fragment:py,envmap_fragment:my,envmap_common_pars_fragment:gy,envmap_pars_fragment:vy,envmap_pars_vertex:_y,envmap_physical_pars_fragment:Cy,envmap_vertex:xy,fog_vertex:yy,fog_pars_vertex:Sy,fog_fragment:My,fog_pars_fragment:Ey,gradientmap_pars_fragment:wy,lightmap_pars_fragment:Ty,lights_lambert_fragment:by,lights_lambert_pars_fragment:Ay,lights_pars_begin:Ry,lights_toon_fragment:Py,lights_toon_pars_fragment:Ny,lights_phong_fragment:Ly,lights_phong_pars_fragment:Dy,lights_physical_fragment:Iy,lights_physical_pars_fragment:Uy,lights_fragment_begin:Fy,lights_fragment_maps:Oy,lights_fragment_end:ky,lightprobes_pars_fragment:By,logdepthbuf_fragment:zy,logdepthbuf_pars_fragment:Vy,logdepthbuf_pars_vertex:Hy,logdepthbuf_vertex:Gy,map_fragment:Wy,map_pars_fragment:Xy,map_particle_fragment:qy,map_particle_pars_fragment:Yy,metalnessmap_fragment:jy,metalnessmap_pars_fragment:Ky,morphinstance_vertex:$y,morphcolor_vertex:Zy,morphnormal_vertex:Qy,morphtarget_pars_vertex:Jy,morphtarget_vertex:eS,normal_fragment_begin:tS,normal_fragment_maps:nS,normal_pars_fragment:iS,normal_pars_vertex:rS,normal_vertex:sS,normalmap_pars_fragment:aS,clearcoat_normal_fragment_begin:oS,clearcoat_normal_fragment_maps:lS,clearcoat_pars_fragment:cS,iridescence_pars_fragment:uS,opaque_fragment:fS,packing:dS,premultiplied_alpha_fragment:hS,project_vertex:pS,dithering_fragment:mS,dithering_pars_fragment:gS,roughnessmap_fragment:vS,roughnessmap_pars_fragment:_S,shadowmap_pars_fragment:xS,shadowmap_pars_vertex:yS,shadowmap_vertex:SS,shadowmask_pars_fragment:MS,skinbase_vertex:ES,skinning_pars_vertex:wS,skinning_vertex:TS,skinnormal_vertex:bS,specularmap_fragment:AS,specularmap_pars_fragment:RS,tonemapping_fragment:CS,tonemapping_pars_fragment:PS,transmission_fragment:NS,transmission_pars_fragment:LS,uv_pars_fragment:DS,uv_pars_vertex:IS,uv_vertex:US,worldpos_vertex:FS,background_vert:OS,background_frag:kS,backgroundCube_vert:BS,backgroundCube_frag:zS,cube_vert:VS,cube_frag:HS,depth_vert:GS,depth_frag:WS,distance_vert:XS,distance_frag:qS,equirect_vert:YS,equirect_frag:jS,linedashed_vert:KS,linedashed_frag:$S,meshbasic_vert:ZS,meshbasic_frag:QS,meshlambert_vert:JS,meshlambert_frag:eM,meshmatcap_vert:tM,meshmatcap_frag:nM,meshnormal_vert:iM,meshnormal_frag:rM,meshphong_vert:sM,meshphong_frag:aM,meshphysical_vert:oM,meshphysical_frag:lM,meshtoon_vert:cM,meshtoon_frag:uM,points_vert:fM,points_frag:dM,shadow_vert:hM,shadow_frag:pM,sprite_vert:mM,sprite_frag:gM},Be={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Bi={basic:{uniforms:On([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:On([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:On([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:On([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:On([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new mt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:On([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:On([Be.points,Be.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:On([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:On([Be.common,Be.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:On([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:On([Be.sprite,Be.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:On([Be.common,Be.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:On([Be.lights,Be.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Bi.physical={uniforms:On([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const jl={r:0,b:0,g:0},vM=new Kt,pg=new pt;pg.set(-1,0,0,0,1,0,0,0,1);function _M(s,e,t,r,o,l){const u=new mt(0);let h=o===!0?0:1,d,p,v=null,_=0,g=null;function M(I){let O=I.isScene===!0?I.background:null;if(O&&O.isTexture){const R=I.backgroundBlurriness>0;O=e.get(O,R)}return O}function T(I){let O=!1;const R=M(I);R===null?y(u,h):R&&R.isColor&&(y(R,1),O=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(I,O){const R=M(O);R&&(R.isCubeTexture||R.mapping===gc)?(p===void 0&&(p=new St(new ii(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ha(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(O.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(pg),p.material.toneMapped=Tt.getTransfer(R.colorSpace)!==Ft,(v!==R||_!==R.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=R,_=R.version,g=s.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new St(new Kn(2,2),new Pn({name:"BackgroundMaterial",uniforms:ha(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,d.material.toneMapped=Tt.getTransfer(R.colorSpace)!==Ft,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||_!==R.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,v=R,_=R.version,g=s.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null))}function y(I,O){I.getRGB(jl,lg(s)),t.buffers.color.setClear(jl.r,jl.g,jl.b,O,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,O=1){u.set(I),h=O,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,y(u,h)},render:T,addToRenderList:A,dispose:x}}function xM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function h(k,B,ne,de,Z){let le=!1;const Q=_(k,de,ne,B);l!==Q&&(l=Q,p(l.object)),le=M(k,de,ne,Z),le&&T(k,de,ne,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,R(k,B,ne,de),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function d(){return s.createVertexArray()}function p(k){return s.bindVertexArray(k)}function v(k){return s.deleteVertexArray(k)}function _(k,B,ne,de){const Z=de.wireframe===!0;let le=r[B.id];le===void 0&&(le={},r[B.id]=le);const Q=k.isInstancedMesh===!0?k.id:0;let X=le[Q];X===void 0&&(X={},le[Q]=X);let ae=X[ne.id];ae===void 0&&(ae={},X[ne.id]=ae);let fe=ae[Z];return fe===void 0&&(fe=g(d()),ae[Z]=fe),fe}function g(k){const B=[],ne=[],de=[];for(let Z=0;Z<t;Z++)B[Z]=0,ne[Z]=0,de[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ne,attributeDivisors:de,object:k,attributes:{},index:null}}function M(k,B,ne,de){const Z=l.attributes,le=B.attributes;let Q=0;const X=ne.getAttributes();for(const ae in X)if(X[ae].location>=0){const U=Z[ae];let J=le[ae];if(J===void 0&&(ae==="instanceMatrix"&&k.instanceMatrix&&(J=k.instanceMatrix),ae==="instanceColor"&&k.instanceColor&&(J=k.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;Q++}return l.attributesNum!==Q||l.index!==de}function T(k,B,ne,de){const Z={},le=B.attributes;let Q=0;const X=ne.getAttributes();for(const ae in X)if(X[ae].location>=0){let U=le[ae];U===void 0&&(ae==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),ae==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),Z[ae]=J,Q++}l.attributes=Z,l.attributesNum=Q,l.index=de}function A(){const k=l.newAttributes;for(let B=0,ne=k.length;B<ne;B++)k[B]=0}function y(k){x(k,0)}function x(k,B){const ne=l.newAttributes,de=l.enabledAttributes,Z=l.attributeDivisors;ne[k]=1,de[k]===0&&(s.enableVertexAttribArray(k),de[k]=1),Z[k]!==B&&(s.vertexAttribDivisor(k,B),Z[k]=B)}function I(){const k=l.newAttributes,B=l.enabledAttributes;for(let ne=0,de=B.length;ne<de;ne++)B[ne]!==k[ne]&&(s.disableVertexAttribArray(ne),B[ne]=0)}function O(k,B,ne,de,Z,le,Q){Q===!0?s.vertexAttribIPointer(k,B,ne,Z,le):s.vertexAttribPointer(k,B,ne,de,Z,le)}function R(k,B,ne,de){A();const Z=de.attributes,le=ne.getAttributes(),Q=B.defaultAttributeValues;for(const X in le){const ae=le[X];if(ae.location>=0){let fe=Z[X];if(fe===void 0&&(X==="instanceMatrix"&&k.instanceMatrix&&(fe=k.instanceMatrix),X==="instanceColor"&&k.instanceColor&&(fe=k.instanceColor)),fe!==void 0){const U=fe.normalized,J=fe.itemSize,Fe=e.get(fe);if(Fe===void 0)continue;const Ge=Fe.buffer,ze=Fe.type,oe=Fe.bytesPerElement,_e=ze===s.INT||ze===s.UNSIGNED_INT||fe.gpuType===Gd;if(fe.isInterleavedBufferAttribute){const G=fe.data,pe=G.stride,xe=fe.offset;if(G.isInstancedInterleavedBuffer){for(let Ue=0;Ue<ae.locationSize;Ue++)x(ae.location+Ue,G.meshPerAttribute);k.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ue=0;Ue<ae.locationSize;Ue++)y(ae.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let Ue=0;Ue<ae.locationSize;Ue++)O(ae.location+Ue,J/ae.locationSize,ze,U,pe*oe,(xe+J/ae.locationSize*Ue)*oe,_e)}else{if(fe.isInstancedBufferAttribute){for(let G=0;G<ae.locationSize;G++)x(ae.location+G,fe.meshPerAttribute);k.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let G=0;G<ae.locationSize;G++)y(ae.location+G);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let G=0;G<ae.locationSize;G++)O(ae.location+G,J/ae.locationSize,ze,U,J*oe,J/ae.locationSize*G*oe,_e)}}else if(Q!==void 0){const U=Q[X];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(ae.location,U);break;case 3:s.vertexAttrib3fv(ae.location,U);break;case 4:s.vertexAttrib4fv(ae.location,U);break;default:s.vertexAttrib1fv(ae.location,U)}}}}I()}function L(){P();for(const k in r){const B=r[k];for(const ne in B){const de=B[ne];for(const Z in de){const le=de[Z];for(const Q in le)v(le[Q].object),delete le[Q];delete de[Z]}}delete r[k]}}function C(k){if(r[k.id]===void 0)return;const B=r[k.id];for(const ne in B){const de=B[ne];for(const Z in de){const le=de[Z];for(const Q in le)v(le[Q].object),delete le[Q];delete de[Z]}}delete r[k.id]}function D(k){for(const B in r){const ne=r[B];for(const de in ne){const Z=ne[de];if(Z[k.id]===void 0)continue;const le=Z[k.id];for(const Q in le)v(le[Q].object),delete le[Q];delete Z[k.id]}}}function E(k){for(const B in r){const ne=r[B],de=k.isInstancedMesh===!0?k.id:0,Z=ne[de];if(Z!==void 0){for(const le in Z){const Q=Z[le];for(const X in Q)v(Q[X].object),delete Q[X];delete Z[le]}delete ne[de],Object.keys(ne).length===0&&delete r[B]}}}function P(){H(),u=!0,l!==o&&(l=o,p(l.object))}function H(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:P,resetDefaultState:H,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:D,initAttributes:A,enableAttribute:y,disableUnusedAttributes:I}}function yM(s,e,t){let r;function o(d){r=d}function l(d,p){s.drawArrays(r,d,p),t.update(p,r,1)}function u(d,p,v){v!==0&&(s.drawArraysInstanced(r,d,p,v),t.update(p,r,v))}function h(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,p,0,v);let g=0;for(let M=0;M<v;M++)g+=p[M];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function SM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==Pi&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){const E=D===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==si&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Hi&&!E)}function d(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=d(p);v!==p&&(ut("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),C=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:R,maxSamples:L,samples:C}}function MM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new cs,h=new pt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||r!==0||o;return o=g,r=_.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,M){const T=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!o||T===null||T.length===0||l&&!y)l?v(null):p();else{const I=l?0:r,O=I*4;let R=x.clippingState||null;d.value=R,R=v(T,g,O,M);for(let L=0;L!==O;++L)R[L]=t[L];x.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,M,T){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=d.value,T!==!0||y===null){const x=M+A*4,I=g.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<x)&&(y=new Float32Array(x));for(let O=0,R=M;O!==A;++O,R+=4)u.copy(_[O]).applyMatrix4(I,h),u.normal.toArray(y,R),y[R+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const Fr=4,m0=[.125,.215,.35,.446,.526,.582],fs=20,EM=256,oo=new yc,g0=new mt;let Uf=null,Ff=0,Of=0,kf=!1;const wM=new j;class v0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:h=wM}=l;Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,h),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,Ff,Of),this._renderer.xr.enabled=kf,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ai,format:Pi,colorSpace:cc,depthBuffer:!1},o=_0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=TM(l)),this._blurMaterial=AM(l,e,t),this._ggxMaterial=bM(l,e,t)}return o}_compileMaterial(e){const t=new St(new Ln,e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,r,o,l){const d=new ri(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(g0),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new ii,new jn({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let x=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,x=!0):(y.color.copy(g0),x=!0);for(let O=0;O<6;O++){const R=O%3;R===0?(d.up.set(0,p[O],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+v[O],l.y,l.z)):R===1?(d.up.set(0,0,p[O]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+v[O],l.z)):(d.up.set(0,p[O],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+v[O]));const L=this._cubeSize;sa(o,R*L,O>2?L:0,L,L),_.setRenderTarget(o),x&&_.render(A,d),_.render(e,d)}_.toneMapping=M,_.autoClear=g,e.background=I}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ps||e.mapping===fa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=y0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const h=l.uniforms;h.envMap.value=e;const d=this._cubeSize;sa(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,oo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const d=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=0+p*1.25,M=_*g,{_lodMax:T}=this,A=this._sizeLods[r],y=3*A*(r>T-Fr?r-T+Fr:0),x=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=M,d.mipInt.value=T-t,sa(l,y,x,3*A,2*A),o.setRenderTarget(l),o.render(h,oo),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=T-r,sa(e,y,x,3*A,2*A),o.setRenderTarget(e),o.render(h,oo)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=p;const g=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*fs-1),A=l/T,y=isFinite(l)?1+Math.floor(v*A):fs;y>fs&&ut(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${fs}`);const x=[];let I=0;for(let D=0;D<fs;++D){const E=D/A,P=Math.exp(-E*E/2);x.push(P),D===0?I+=P:D<y&&(I+=2*P)}for(let D=0;D<x.length;D++)x[D]=x[D]/I;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:O}=this;g.dTheta.value=T,g.mipInt.value=O-r;const R=this._sizeLods[o],L=3*R*(o>O-Fr?o-O+Fr:0),C=4*(this._cubeSize-R);sa(t,L,C,3*R,2*R),d.setRenderTarget(t),d.render(_,oo)}}function TM(s){const e=[],t=[],r=[];let o=s;const l=s-Fr+1+m0.length;for(let u=0;u<l;u++){const h=Math.pow(2,o);e.push(h);let d=1/h;u>s-Fr?d=m0[u-s+Fr-1]:u===0&&(d=0),t.push(d);const p=1/(h-2),v=-p,_=1+p,g=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,T=6,A=3,y=2,x=1,I=new Float32Array(A*T*M),O=new Float32Array(y*T*M),R=new Float32Array(x*T*M);for(let C=0;C<M;C++){const D=C%3*2/3-1,E=C>2?0:-1,P=[D,E,0,D+2/3,E,0,D+2/3,E+1,0,D,E,0,D+2/3,E+1,0,D,E+1,0];I.set(P,A*T*C),O.set(g,y*T*C);const H=[C,C,C,C,C,C];R.set(H,x*T*C)}const L=new Ln;L.setAttribute("position",new vi(I,A)),L.setAttribute("uv",new vi(O,y)),L.setAttribute("faceIndex",new vi(R,x)),r.push(new St(L,null)),o>Fr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function _0(s,e,t){const r=new $n(s,e,t);return r.texture.mapping=gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function sa(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function bM(s,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:EM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function AM(s,e,t){const r=new Float32Array(fs),o=new j(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function x0(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function y0(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}class mg extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new ag(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ii(5,5,5),l=new Pn({name:"CubemapFromEquirect",uniforms:ha(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Wi});l.uniforms.tEquirect.value=t;const u=new St(o,l),h=t.minFilter;return t.minFilter===ds&&(t.minFilter=Cn),new Px(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function RM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===af||M===of)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const A=new mg(T.height);return A.fromEquirectangularTexture(s,g),e.set(g,A),g.addEventListener("dispose",p),h(A.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,T=M===af||M===of,A=M===ps||M===fa;if(T||A){let y=t.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new v0(s)),y=T?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const I=g.image;return T&&I&&I.height>0||A&&I&&d(I)?(r===null&&(r=new v0(s)),y=T?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function h(g,M){return M===af?g.mapping=ps:M===of&&(g.mapping=fa),g}function d(g){let M=0;const T=6;for(let A=0;A<T;A++)g[A]!==void 0&&M++;return M===T}function p(g){const M=g.target;M.removeEventListener("dispose",p);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function CM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&oa("WebGLRenderer: "+r+" extension not supported."),o}}}function PM(s,e,t,r){const o={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function h(_,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function d(_){const g=_.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function p(_){const g=[],M=_.index,T=_.attributes.position;let A=0;if(T===void 0)return;if(M!==null){const I=M.array;A=M.version;for(let O=0,R=I.length;O<R;O+=3){const L=I[O+0],C=I[O+1],D=I[O+2];g.push(L,C,C,D,D,L)}}else{const I=T.array;A=T.version;for(let O=0,R=I.length/3-1;O<R;O+=3){const L=O+0,C=O+1,D=O+2;g.push(L,C,C,D,D,L)}}const y=new(T.count>=65535?ng:tg)(g,1);y.version=A;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function v(_){const g=l.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&p(_)}else p(_);return l.get(_)}return{get:h,update:d,getWireframeAttribute:v}}function NM(s,e,t){let r;function o(_){r=_}let l,u;function h(_){l=_.type,u=_.bytesPerElement}function d(_,g){s.drawElements(r,g,l,_*u),t.update(g,r,1)}function p(_,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,_*u,M),t.update(g,r,M))}function v(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,_,0,M);let A=0;for(let y=0;y<M;y++)A+=g[y];t.update(A,r,1)}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=v}function LM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:At("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function DM(s,e,t){const r=new WeakMap,o=new tn;function l(u,h,d){const p=u.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(h);if(g===void 0||g.count!==_){let H=function(){E.dispose(),r.delete(h),h.removeEventListener("dispose",H)};var M=H;g!==void 0&&g.texture.dispose();const T=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let R=0;T===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let L=h.attributes.position.count*R,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*C*4*_),E=new J0(D,L,C,_);E.type=Hi,E.needsUpdate=!0;const P=R*4;for(let k=0;k<_;k++){const B=x[k],ne=I[k],de=O[k],Z=L*C*4*k;for(let le=0;le<B.count;le++){const Q=le*P;T===!0&&(o.fromBufferAttribute(B,le),D[Z+Q+0]=o.x,D[Z+Q+1]=o.y,D[Z+Q+2]=o.z,D[Z+Q+3]=0),A===!0&&(o.fromBufferAttribute(ne,le),D[Z+Q+4]=o.x,D[Z+Q+5]=o.y,D[Z+Q+6]=o.z,D[Z+Q+7]=0),y===!0&&(o.fromBufferAttribute(de,le),D[Z+Q+8]=o.x,D[Z+Q+9]=o.y,D[Z+Q+10]=o.z,D[Z+Q+11]=de.itemSize===4?o.w:1)}}g={count:_,texture:E,size:new st(L,C)},r.set(h,g),h.addEventListener("dispose",H)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const A=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function IM(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,_=p.geometry,g=e.get(p,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return g}function h(){l=new WeakMap}function d(p){const v=p.target;v.removeEventListener("dispose",d),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:h}}const UM={[Od]:"LINEAR_TONE_MAPPING",[kd]:"REINHARD_TONE_MAPPING",[Bd]:"CINEON_TONE_MAPPING",[mc]:"ACES_FILMIC_TONE_MAPPING",[Vd]:"AGX_TONE_MAPPING",[Hd]:"NEUTRAL_TONE_MAPPING",[zd]:"CUSTOM_TONE_MAPPING"};function FM(s,e,t,r,o,l){const u=new $n(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,depthTexture:o?new da(e,t):void 0}),h=new $n(e,t,{type:ai,depthBuffer:!1,stencilBuffer:!1}),d=new Ln;d.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ln([0,2,0,0,2,0],2));const p=new cg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new St(d,p),_=new yc(-1,1,1,-1,0,1);let g=null,M=null,T=!1,A,y=null,x=[],I=!1;this.setSize=function(O,R){u.setSize(O,R),h.setSize(O,R);for(let L=0;L<x.length;L++){const C=x[L];C.setSize&&C.setSize(O,R)}},this.setEffects=function(O){x=O,I=x.length>0&&x[0].isRenderPass===!0;const R=u.width,L=u.height;for(let C=0;C<x.length;C++){const D=x[C];D.setSize&&D.setSize(R,L)}},this.begin=function(O,R){if(T||O.toneMapping===Xi&&x.length===0)return!1;if(y=R,R!==null){const L=R.width,C=R.height;(u.width!==L||u.height!==C)&&this.setSize(L,C)}return I===!1&&O.setRenderTarget(u),A=O.toneMapping,O.toneMapping=Xi,!0},this.hasRenderPass=function(){return I},this.end=function(O,R){O.toneMapping=A,T=!0;let L=u,C=h;for(let D=0;D<x.length;D++){const E=x[D];if(E.enabled!==!1&&(E.render(O,C,L,R),E.needsSwap!==!1)){const P=L;L=C,C=P}}if(g!==O.outputColorSpace||M!==O.toneMapping){g=O.outputColorSpace,M=O.toneMapping,p.defines={},Tt.getTransfer(g)===Ft&&(p.defines.SRGB_TRANSFER="");const D=UM[M];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,O.setRenderTarget(y),O.render(v,_),y=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),d.dispose(),p.dispose()}}const gg=new Nn,Dd=new da(1,1),vg=new J0,_g=new Q_,xg=new ag,S0=[],M0=[],E0=new Float32Array(16),w0=new Float32Array(9),T0=new Float32Array(4);function ga(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=S0[o];if(l===void 0&&(l=new Float32Array(o),S0[o]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function fn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function dn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Mc(s,e){let t=M0[e];t===void 0&&(t=new Int32Array(e),M0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function OM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2fv(this.addr,e),dn(t,e)}}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;s.uniform3fv(this.addr,e),dn(t,e)}}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4fv(this.addr,e),dn(t,e)}}function VM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;T0.set(r),s.uniformMatrix2fv(this.addr,!1,T0),dn(t,r)}}function HM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;w0.set(r),s.uniformMatrix3fv(this.addr,!1,w0),dn(t,r)}}function GM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;E0.set(r),s.uniformMatrix4fv(this.addr,!1,E0),dn(t,r)}}function WM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function XM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2iv(this.addr,e),dn(t,e)}}function qM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3iv(this.addr,e),dn(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4iv(this.addr,e),dn(t,e)}}function jM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function KM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2uiv(this.addr,e),dn(t,e)}}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3uiv(this.addr,e),dn(t,e)}}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4uiv(this.addr,e),dn(t,e)}}function QM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Dd.compareFunction=t.isReversedDepthBuffer()?$d:Kd,l=Dd):l=gg,t.setTexture2D(e||l,o)}function JM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||_g,o)}function e1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||xg,o)}function t1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||vg,o)}function n1(s){switch(s){case 5126:return OM;case 35664:return kM;case 35665:return BM;case 35666:return zM;case 35674:return VM;case 35675:return HM;case 35676:return GM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return qM;case 35669:case 35673:return YM;case 5125:return jM;case 36294:return KM;case 36295:return $M;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return t1}}function i1(s,e){s.uniform1fv(this.addr,e)}function r1(s,e){const t=ga(e,this.size,2);s.uniform2fv(this.addr,t)}function s1(s,e){const t=ga(e,this.size,3);s.uniform3fv(this.addr,t)}function a1(s,e){const t=ga(e,this.size,4);s.uniform4fv(this.addr,t)}function o1(s,e){const t=ga(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function l1(s,e){const t=ga(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function c1(s,e){const t=ga(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function u1(s,e){s.uniform1iv(this.addr,e)}function f1(s,e){s.uniform2iv(this.addr,e)}function d1(s,e){s.uniform3iv(this.addr,e)}function h1(s,e){s.uniform4iv(this.addr,e)}function p1(s,e){s.uniform1uiv(this.addr,e)}function m1(s,e){s.uniform2uiv(this.addr,e)}function g1(s,e){s.uniform3uiv(this.addr,e)}function v1(s,e){s.uniform4uiv(this.addr,e)}function _1(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Dd:u=gg;for(let h=0;h!==o;++h)t.setTexture2D(e[h]||u,l[h])}function x1(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||_g,l[u])}function y1(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||xg,l[u])}function S1(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||vg,l[u])}function M1(s){switch(s){case 5126:return i1;case 35664:return r1;case 35665:return s1;case 35666:return a1;case 35674:return o1;case 35675:return l1;case 35676:return c1;case 5124:case 35670:return u1;case 35667:case 35671:return f1;case 35668:case 35672:return d1;case 35669:case 35673:return h1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return S1}}class E1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=n1(t.type)}}class w1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M1(t.type)}}class T1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const h=o[l];h.setValue(e,t[h.id],r)}}}const Bf=/(\w+)(\])?(\[|\.)?/g;function b0(s,e){s.seq.push(e),s.map[e.id]=e}function b1(s,e,t){const r=s.name,o=r.length;for(Bf.lastIndex=0;;){const l=Bf.exec(r),u=Bf.lastIndex;let h=l[1];const d=l[2]==="]",p=l[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===o){b0(t,p===void 0?new E1(h,s,e):new w1(h,s,e));break}else{let _=t.map[h];_===void 0&&(_=new T1(h),b0(t,_)),t=_}}}class rc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(t,u),d=e.getUniformLocation(t,h.name);b1(h,d,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const h=t[l],d=r[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function A0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const A1=37297;let R1=0;function C1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const R0=new pt;function P1(s){Tt._getMatrix(R0,Tt.workingColorSpace,s);const e=`mat3( ${R0.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(s)){case uc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function C0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+C1(s.getShaderSource(e),h)}else return l}function N1(s,e){const t=P1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const L1={[Od]:"Linear",[kd]:"Reinhard",[Bd]:"Cineon",[mc]:"ACESFilmic",[Vd]:"AgX",[Hd]:"Neutral",[zd]:"Custom"};function D1(s,e){const t=L1[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kl=new j;function I1(){Tt.getLuminanceCoefficients(Kl);const s=Kl.x.toFixed(4),e=Kl.y.toFixed(4),t=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function F1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function O1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function fo(s){return s!==""}function P0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(s){return s.replace(k1,z1)}const B1=new Map;function z1(s,e){let t=_t[e];if(t===void 0){const r=B1.get(e);if(r!==void 0)t=_t[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Id(t)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L0(s){return s.replace(V1,H1)}function H1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function D0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const G1={[Ql]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function W1(s){return G1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const X1={[ps]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE",[gc]:"ENVMAP_TYPE_CUBE_UV"};function q1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":X1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Y1={[fa]:"ENVMAP_MODE_REFRACTION"};function j1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Y1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const K1={[G0]:"ENVMAP_BLENDING_MULTIPLY",[N_]:"ENVMAP_BLENDING_MIX",[L_]:"ENVMAP_BLENDING_ADD"};function $1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":K1[s.combine]||"ENVMAP_BLENDING_NONE"}function Z1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Q1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const d=W1(t),p=q1(t),v=j1(t),_=$1(t),g=Z1(t),M=U1(t),T=F1(l),A=o.createProgram();let y,x,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(fo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(fo).join(`
`),x.length>0&&(x+=`
`)):(y=[D0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),x=[D0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Xi?D1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,N1("linearToOutputTexel",t.outputColorSpace),I1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),u=Id(u),u=P0(u,t),u=N0(u,t),h=Id(h),h=P0(h,t),h=N0(h,t),u=L0(u),h=L0(h),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=I+y+u,R=I+x+h,L=A0(o,o.VERTEX_SHADER,O),C=A0(o,o.FRAGMENT_SHADER,R);o.attachShader(A,L),o.attachShader(A,C),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function D(k){if(s.debug.checkShaderErrors){const B=o.getProgramInfoLog(A)||"",ne=o.getShaderInfoLog(L)||"",de=o.getShaderInfoLog(C)||"",Z=B.trim(),le=ne.trim(),Q=de.trim();let X=!0,ae=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,L,C);else{const fe=C0(o,L,"vertex"),U=C0(o,C,"fragment");At("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Z+`
`+fe+`
`+U)}else Z!==""?ut("WebGLProgram: Program Info Log:",Z):(le===""||Q==="")&&(ae=!1);ae&&(k.diagnostics={runnable:X,programLog:Z,vertexShader:{log:le,prefix:y},fragmentShader:{log:Q,prefix:x}})}o.deleteShader(L),o.deleteShader(C),E=new rc(o,A),P=O1(o,A)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let P;this.getAttributes=function(){return P===void 0&&D(this),P};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=o.getProgramParameter(A,A1)),H},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=C,this}let J1=0;class eE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new tE(e),t.set(e,r)),r}}class tE{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}}function nE(s){return s===ms||s===oc||s===lc}function iE(s,e,t,r,o,l){const u=new Qd,h=new eE,d=new Set,p=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return d.add(E),E===0?"uv":`uv${E}`}function A(E,P,H,k,B,ne){const de=k.fog,Z=B.geometry,le=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,Q=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,X=e.get(E.envMap||le,Q),ae=X&&X.mapping===gc?X.image.height:null,fe=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ut("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const U=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,J=U!==void 0?U.length:0;let Fe=0;Z.morphAttributes.position!==void 0&&(Fe=1),Z.morphAttributes.normal!==void 0&&(Fe=2),Z.morphAttributes.color!==void 0&&(Fe=3);let Ge,ze,oe,_e;if(fe){const Ye=Bi[fe];Ge=Ye.vertexShader,ze=Ye.fragmentShader}else{Ge=E.vertexShader,ze=E.fragmentShader;const Ye=h.getVertexShaderStage(E),zt=h.getFragmentShaderStage(E);h.update(E,Ye,zt),oe=Ye.id,_e=zt.id}const G=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),xe=B.isInstancedMesh===!0,Ue=B.isBatchedMesh===!0,qe=!!E.map,lt=!!E.matcap,gt=!!X,Ee=!!E.aoMap,et=!!E.lightMap,Oe=!!E.bumpMap&&E.wireframe===!1,wt=!!E.normalMap,bt=!!E.displacementMap,Nt=!!E.emissiveMap,Ct=!!E.metalnessMap,Ot=!!E.roughnessMap,q=E.anisotropy>0,Ht=E.clearcoat>0,vt=E.dispersion>0,N=E.iridescence>0,S=E.sheen>0,$=E.transmission>0,ie=q&&!!E.anisotropyMap,he=Ht&&!!E.clearcoatMap,Te=Ht&&!!E.clearcoatNormalMap,Ne=Ht&&!!E.clearcoatRoughnessMap,me=N&&!!E.iridescenceMap,ve=N&&!!E.iridescenceThicknessMap,De=S&&!!E.sheenColorMap,Qe=S&&!!E.sheenRoughnessMap,Ie=!!E.specularMap,Pe=!!E.specularColorMap,it=!!E.specularIntensityMap,rt=$&&!!E.transmissionMap,ct=$&&!!E.thicknessMap,W=!!E.gradientMap,Ce=!!E.alphaMap,ge=E.alphaTest>0,Le=!!E.alphaHash,ke=!!E.extensions;let ye=Xi;E.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ye=s.toneMapping);const Ke={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:ze,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ue,batchingColor:Ue&&B._colorsTexture!==null,instancing:xe,instancingColor:xe&&B.instanceColor!==null,instancingMorph:xe&&B.morphTexture!==null,outputColorSpace:G===null?s.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:qe,matcap:lt,envMap:gt,envMapMode:gt&&X.mapping,envMapCubeUVHeight:ae,aoMap:Ee,lightMap:et,bumpMap:Oe,normalMap:wt,displacementMap:bt,emissiveMap:Nt,normalMapObjectSpace:wt&&E.normalMapType===U_,normalMapTangentSpace:wt&&E.normalMapType===Rd,packedNormalMap:wt&&E.normalMapType===Rd&&nE(E.normalMap.format),metalnessMap:Ct,roughnessMap:Ot,anisotropy:q,anisotropyMap:ie,clearcoat:Ht,clearcoatMap:he,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ne,dispersion:vt,iridescence:N,iridescenceMap:me,iridescenceThicknessMap:ve,sheen:S,sheenColorMap:De,sheenRoughnessMap:Qe,specularMap:Ie,specularColorMap:Pe,specularIntensityMap:it,transmission:$,transmissionMap:rt,thicknessMap:ct,gradientMap:W,opaque:E.transparent===!1&&E.blending===aa&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ge,alphaHash:Le,combine:E.combine,mapUv:qe&&T(E.map.channel),aoMapUv:Ee&&T(E.aoMap.channel),lightMapUv:et&&T(E.lightMap.channel),bumpMapUv:Oe&&T(E.bumpMap.channel),normalMapUv:wt&&T(E.normalMap.channel),displacementMapUv:bt&&T(E.displacementMap.channel),emissiveMapUv:Nt&&T(E.emissiveMap.channel),metalnessMapUv:Ct&&T(E.metalnessMap.channel),roughnessMapUv:Ot&&T(E.roughnessMap.channel),anisotropyMapUv:ie&&T(E.anisotropyMap.channel),clearcoatMapUv:he&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&T(E.sheenRoughnessMap.channel),specularMapUv:Ie&&T(E.specularMap.channel),specularColorMapUv:Pe&&T(E.specularColorMap.channel),specularIntensityMapUv:it&&T(E.specularIntensityMap.channel),transmissionMapUv:rt&&T(E.transmissionMap.channel),thicknessMapUv:ct&&T(E.thicknessMap.channel),alphaMapUv:Ce&&T(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(wt||q),vertexNormals:!!Z.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(qe||Ce),fog:!!de,useFog:E.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Z.attributes.normal===void 0&&wt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:pe,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Fe,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&Tt.getTransfer(E.map.colorSpace)===Ft,decodeVideoTextureEmissive:Nt&&E.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(E.emissiveMap.colorSpace)===Ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ci,flipSided:E.side===Bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ke&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&E.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ke.vertexUv1s=d.has(1),Ke.vertexUv2s=d.has(2),Ke.vertexUv3s=d.has(3),d.clear(),Ke}function y(E){const P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)P.push(H),P.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(x(P,E),I(P,E),P.push(s.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function x(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function I(E,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function O(E){const P=M[E.type];let H;if(P){const k=Bi[P];H=vo.clone(k.uniforms)}else H=E.uniforms;return H}function R(E,P){let H=v.get(P);return H!==void 0?++H.usedTimes:(H=new Q1(s,P,E,o),p.push(H),v.set(P,H)),H}function L(E){if(--E.usedTimes===0){const P=p.indexOf(E);p[P]=p[p.length-1],p.pop(),v.delete(E.cacheKey),E.destroy()}}function C(E){h.remove(E)}function D(){h.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:O,acquireProgram:R,releaseProgram:L,releaseShaderCache:C,programs:p,dispose:D}}function rE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function o(u,h,d){s.get(u)[h]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function sE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function I0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function U0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,T,A,y,x){let I=s[e];return I===void 0?(I={id:g.id,object:g,geometry:M,material:T,materialVariant:u(g),groupOrder:A,renderOrder:g.renderOrder,z:y,group:x},s[e]=I):(I.id=g.id,I.object=g,I.geometry=M,I.material=T,I.materialVariant=u(g),I.groupOrder=A,I.renderOrder=g.renderOrder,I.z=y,I.group=x),e++,I}function d(g,M,T,A,y,x){const I=h(g,M,T,A,y,x);T.transmission>0?r.push(I):T.transparent===!0?o.push(I):t.push(I)}function p(g,M,T,A,y,x){const I=h(g,M,T,A,y,x);T.transmission>0?r.unshift(I):T.transparent===!0?o.unshift(I):t.unshift(I)}function v(g,M,T){t.length>1&&t.sort(g||sE),r.length>1&&r.sort(M||I0),o.length>1&&o.sort(M||I0),T&&(t.reverse(),r.reverse(),o.reverse())}function _(){for(let g=e,M=s.length;g<M;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:_,sort:v}}function aE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new U0,s.set(r,[u])):o>=l.length?(u=new U0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function oE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new mt};break;case"SpotLight":t={position:new j,direction:new j,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=t,t}}}function lE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let cE=0;function uE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fE(s){const e=new oE,t=lE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new j);const o=new j,l=new Kt,u=new Kt;function h(p){let v=0,_=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,T=0,A=0,y=0,x=0,I=0,O=0,R=0,L=0,C=0,D=0;p.sort(uE);for(let P=0,H=p.length;P<H;P++){const k=p[P],B=k.color,ne=k.intensity,de=k.distance;let Z=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ms?Z=k.shadow.map.texture:Z=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=B.r*ne,_+=B.g*ne,g+=B.b*ne;else if(k.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(k.sh.coefficients[le],ne);D++}else if(k.isDirectionalLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Q=k.shadow,X=t.get(k);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=Z,r.directionalShadowMatrix[M]=k.shadow.matrix,I++}r.directional[M]=le,M++}else if(k.isSpotLight){const le=e.get(k);le.position.setFromMatrixPosition(k.matrixWorld),le.color.copy(B).multiplyScalar(ne),le.distance=de,le.coneCos=Math.cos(k.angle),le.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),le.decay=k.decay,r.spot[A]=le;const Q=k.shadow;if(k.map&&(r.spotLightMap[L]=k.map,L++,Q.updateMatrices(k),k.castShadow&&C++),r.spotLightMatrix[A]=Q.matrix,k.castShadow){const X=t.get(k);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,r.spotShadow[A]=X,r.spotShadowMap[A]=Z,R++}A++}else if(k.isRectAreaLight){const le=e.get(k);le.color.copy(B).multiplyScalar(ne),le.halfWidth.set(k.width*.5,0,0),le.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=le,y++}else if(k.isPointLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),le.distance=k.distance,le.decay=k.decay,k.castShadow){const Q=k.shadow,X=t.get(k);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=Z,r.pointShadowMatrix[T]=k.shadow.matrix,O++}r.point[T]=le,T++}else if(k.isHemisphereLight){const le=e.get(k);le.skyColor.copy(k.color).multiplyScalar(ne),le.groundColor.copy(k.groundColor).multiplyScalar(ne),r.hemi[x]=le,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==M||E.pointLength!==T||E.spotLength!==A||E.rectAreaLength!==y||E.hemiLength!==x||E.numDirectionalShadows!==I||E.numPointShadows!==O||E.numSpotShadows!==R||E.numSpotMaps!==L||E.numLightProbes!==D)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=R+L-C,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=D,E.directionalLength=M,E.pointLength=T,E.spotLength=A,E.rectAreaLength=y,E.hemiLength=x,E.numDirectionalShadows=I,E.numPointShadows=O,E.numSpotShadows=R,E.numSpotMaps=L,E.numLightProbes=D,r.version=cE++)}function d(p,v){let _=0,g=0,M=0,T=0,A=0;const y=v.matrixWorldInverse;for(let x=0,I=p.length;x<I;x++){const O=p[x];if(O.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(O.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(O.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(O.width*.5,0,0),R.halfHeight.set(0,O.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),T++}else if(O.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(O.matrixWorld),R.position.applyMatrix4(y),g++}else if(O.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(O.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:h,setupView:d,state:r}}function F0(s){const e=new fE(s),t=[],r=[],o=[];function l(g){_.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function h(g){r.push(g)}function d(g){o.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:h,pushLightProbeGrid:d}}function dE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let h;return u===void 0?(h=new F0(s),e.set(o,[h])):l>=u.length?(h=new F0(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const hE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pE=`uniform sampler2D shadow_pass;
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
}`,mE=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],gE=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],O0=new Kt,lo=new j,zf=new j;function vE(s,e,t){let r=new th;const o=new st,l=new st,u=new tn,h=new Ex,d=new wx,p={},v=t.maxTextureSize,_={[kr]:Bn,[Bn]:kr,[Ci]:Ci},g=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:hE,fragmentShader:pE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ln;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new St(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let x=this.type;this.render=function(C,D,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;this.type===H0&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ql);const P=s.getRenderTarget(),H=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Wi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const ne=x!==this.type;ne&&D.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(Z=>Z.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,Z=C.length;de<Z;de++){const le=C[de],Q=le.shadow;if(Q===void 0){ut("WebGLShadowMap:",le,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const X=Q.getFrameExtents();o.multiply(X),l.copy(Q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/X.x),o.x=l.x*X.x,Q.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/X.y),o.y=l.y*X.y,Q.mapSize.y=l.y));const ae=s.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=ae,Q.map===null||ne===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===uo){if(le.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new $n(o.x,o.y,{format:ms,type:ai,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),Q.map.texture.name=le.name+".shadowMap",Q.map.depthTexture=new da(o.x,o.y,Hi),Q.map.depthTexture.name=le.name+".shadowMapDepth",Q.map.depthTexture.format=cr,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Sn,Q.map.depthTexture.magFilter=Sn}else le.isPointLight?(Q.map=new mg(o.x),Q.map.depthTexture=new xx(o.x,qi)):(Q.map=new $n(o.x,o.y),Q.map.depthTexture=new da(o.x,o.y,qi)),Q.map.depthTexture.name=le.name+".shadowMap",Q.map.depthTexture.format=cr,this.type===Ql?(Q.map.depthTexture.compareFunction=ae?$d:Kd,Q.map.depthTexture.minFilter=Cn,Q.map.depthTexture.magFilter=Cn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Sn,Q.map.depthTexture.magFilter=Sn);Q.camera.updateProjectionMatrix()}const fe=Q.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<fe;U++){if(Q.map.isWebGLCubeRenderTarget)s.setRenderTarget(Q.map,U),s.clear();else{U===0&&(s.setRenderTarget(Q.map),s.clear());const J=Q.getViewport(U);u.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),B.viewport(u)}if(le.isPointLight){const J=Q.camera,Fe=Q.matrix,Ge=le.distance||J.far;Ge!==J.far&&(J.far=Ge,J.updateProjectionMatrix()),lo.setFromMatrixPosition(le.matrixWorld),J.position.copy(lo),zf.copy(J.position),zf.add(mE[U]),J.up.copy(gE[U]),J.lookAt(zf),J.updateMatrixWorld(),Fe.makeTranslation(-lo.x,-lo.y,-lo.z),O0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(O0,J.coordinateSystem,J.reversedDepth)}else Q.updateMatrices(le);r=Q.getFrustum(),R(D,E,Q.camera,le,this.type)}Q.isPointLightShadow!==!0&&this.type===uo&&I(Q,E),Q.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(P,H,k)};function I(C,D){const E=e.update(A);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,M.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $n(o.x,o.y,{format:ms,type:ai})),g.uniforms.shadow_pass.value=C.map.depthTexture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(D,null,E,g,A,null),M.uniforms.shadow_pass.value=C.mapPass.texture,M.uniforms.resolution.value=C.mapSize,M.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(D,null,E,M,A,null)}function O(C,D,E,P){let H=null;const k=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)H=k;else if(H=E.isPointLight===!0?d:h,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const B=H.uuid,ne=D.uuid;let de=p[B];de===void 0&&(de={},p[B]=de);let Z=de[ne];Z===void 0&&(Z=H.clone(),de[ne]=Z,D.addEventListener("dispose",L)),H=Z}if(H.visible=D.visible,H.wireframe=D.wireframe,P===uo?H.side=D.shadowSide!==null?D.shadowSide:D.side:H.side=D.shadowSide!==null?D.shadowSide:_[D.side],H.alphaMap=D.alphaMap,H.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,H.map=D.map,H.clipShadows=D.clipShadows,H.clippingPlanes=D.clippingPlanes,H.clipIntersection=D.clipIntersection,H.displacementMap=D.displacementMap,H.displacementScale=D.displacementScale,H.displacementBias=D.displacementBias,H.wireframeLinewidth=D.wireframeLinewidth,H.linewidth=D.linewidth,E.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const B=s.properties.get(H);B.light=E}return H}function R(C,D,E,P,H){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&H===uo)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const ne=e.update(C),de=C.material;if(Array.isArray(de)){const Z=ne.groups;for(let le=0,Q=Z.length;le<Q;le++){const X=Z[le],ae=de[X.materialIndex];if(ae&&ae.visible){const fe=O(C,ae,P,H);C.onBeforeShadow(s,C,D,E,ne,fe,X),s.renderBufferDirect(E,null,ne,fe,C,X),C.onAfterShadow(s,C,D,E,ne,fe,X)}}}else if(de.visible){const Z=O(C,de,P,H);C.onBeforeShadow(s,C,D,E,ne,Z,null),s.renderBufferDirect(E,null,ne,Z,C,null),C.onAfterShadow(s,C,D,E,ne,Z,null)}}const B=C.children;for(let ne=0,de=B.length;ne<de;ne++)R(B[ne],D,E,P,H)}function L(C){C.target.removeEventListener("dispose",L);for(const E in p){const P=p[E],H=C.target.uuid;H in P&&(P[H].dispose(),delete P[H])}}}function _E(s,e){function t(){let W=!1;const Ce=new tn;let ge=null;const Le=new tn(0,0,0,0);return{setMask:function(ke){ge!==ke&&!W&&(s.colorMask(ke,ke,ke,ke),ge=ke)},setLocked:function(ke){W=ke},setClear:function(ke,ye,Ke,Ye,zt){zt===!0&&(ke*=Ye,ye*=Ye,Ke*=Ye),Ce.set(ke,ye,Ke,Ye),Le.equals(Ce)===!1&&(s.clearColor(ke,ye,Ke,Ye),Le.copy(Ce))},reset:function(){W=!1,ge=null,Le.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,ge=null,Le=null,ke=null;return{setReversed:function(ye){if(Ce!==ye){const Ke=e.get("EXT_clip_control");ye?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Ce=ye;const Ye=ke;ke=null,this.setClear(Ye)}},getReversed:function(){return Ce},setTest:function(ye){ye?G(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(ye){ge!==ye&&!W&&(s.depthMask(ye),ge=ye)},setFunc:function(ye){if(Ce&&(ye=X_[ye]),Le!==ye){switch(ye){case Wf:s.depthFunc(s.NEVER);break;case Xf:s.depthFunc(s.ALWAYS);break;case qf:s.depthFunc(s.LESS);break;case ua:s.depthFunc(s.LEQUAL);break;case Yf:s.depthFunc(s.EQUAL);break;case jf:s.depthFunc(s.GEQUAL);break;case Kf:s.depthFunc(s.GREATER);break;case $f:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=ye}},setLocked:function(ye){W=ye},setClear:function(ye){ke!==ye&&(ke=ye,Ce&&(ye=1-ye),s.clearDepth(ye))},reset:function(){W=!1,ge=null,Le=null,ke=null,Ce=!1}}}function o(){let W=!1,Ce=null,ge=null,Le=null,ke=null,ye=null,Ke=null,Ye=null,zt=null;return{setTest:function(It){W||(It?G(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(It){Ce!==It&&!W&&(s.stencilMask(It),Ce=It)},setFunc:function(It,Mn,oi){(ge!==It||Le!==Mn||ke!==oi)&&(s.stencilFunc(It,Mn,oi),ge=It,Le=Mn,ke=oi)},setOp:function(It,Mn,oi){(ye!==It||Ke!==Mn||Ye!==oi)&&(s.stencilOp(It,Mn,oi),ye=It,Ke=Mn,Ye=oi)},setLocked:function(It){W=It},setClear:function(It){zt!==It&&(s.clearStencil(It),zt=It)},reset:function(){W=!1,Ce=null,ge=null,Le=null,ke=null,ye=null,Ke=null,Ye=null,zt=null}}}const l=new t,u=new r,h=new o,d=new WeakMap,p=new WeakMap;let v={},_={},g={},M=new WeakMap,T=[],A=null,y=!1,x=null,I=null,O=null,R=null,L=null,C=null,D=null,E=new mt(0,0,0),P=0,H=!1,k=null,B=null,ne=null,de=null,Z=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,X=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ae)[1]),Q=X>=1):ae.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),Q=X>=2);let fe=null,U={};const J=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),Ge=new tn().fromArray(J),ze=new tn().fromArray(Fe);function oe(W,Ce,ge,Le){const ke=new Uint8Array(4),ye=s.createTexture();s.bindTexture(W,ye),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<ge;Ke++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Ce+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return ye}const _e={};_e[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),G(s.DEPTH_TEST),u.setFunc(ua),Oe(!1),wt(Fm),G(s.CULL_FACE),Ee(Wi);function G(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function pe(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function xe(W,Ce){return g[W]!==Ce?(s.bindFramebuffer(W,Ce),g[W]=Ce,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ue(W,Ce){let ge=T,Le=!1;if(W){ge=M.get(Ce),ge===void 0&&(ge=[],M.set(Ce,ge));const ke=W.textures;if(ge.length!==ke.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Ke=ke.length;ye<Ke;ye++)ge[ye]=s.COLOR_ATTACHMENT0+ye;ge.length=ke.length,Le=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Le=!0);Le&&s.drawBuffers(ge)}function qe(W){return A!==W?(s.useProgram(W),A=W,!0):!1}const lt={[us]:s.FUNC_ADD,[p_]:s.FUNC_SUBTRACT,[m_]:s.FUNC_REVERSE_SUBTRACT};lt[g_]=s.MIN,lt[v_]=s.MAX;const gt={[__]:s.ZERO,[x_]:s.ONE,[y_]:s.SRC_COLOR,[Hf]:s.SRC_ALPHA,[b_]:s.SRC_ALPHA_SATURATE,[w_]:s.DST_COLOR,[M_]:s.DST_ALPHA,[S_]:s.ONE_MINUS_SRC_COLOR,[Gf]:s.ONE_MINUS_SRC_ALPHA,[T_]:s.ONE_MINUS_DST_COLOR,[E_]:s.ONE_MINUS_DST_ALPHA,[A_]:s.CONSTANT_COLOR,[R_]:s.ONE_MINUS_CONSTANT_COLOR,[C_]:s.CONSTANT_ALPHA,[P_]:s.ONE_MINUS_CONSTANT_ALPHA};function Ee(W,Ce,ge,Le,ke,ye,Ke,Ye,zt,It){if(W===Wi){y===!0&&(pe(s.BLEND),y=!1);return}if(y===!1&&(G(s.BLEND),y=!0),W!==h_){if(W!==x||It!==H){if((I!==us||L!==us)&&(s.blendEquation(s.FUNC_ADD),I=us,L=us),It)switch(W){case aa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ca:s.blendFunc(s.ONE,s.ONE);break;case Om:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case km:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",W);break}else switch(W){case aa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ca:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Om:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case km:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",W);break}O=null,R=null,C=null,D=null,E.set(0,0,0),P=0,x=W,H=It}return}ke=ke||Ce,ye=ye||ge,Ke=Ke||Le,(Ce!==I||ke!==L)&&(s.blendEquationSeparate(lt[Ce],lt[ke]),I=Ce,L=ke),(ge!==O||Le!==R||ye!==C||Ke!==D)&&(s.blendFuncSeparate(gt[ge],gt[Le],gt[ye],gt[Ke]),O=ge,R=Le,C=ye,D=Ke),(Ye.equals(E)===!1||zt!==P)&&(s.blendColor(Ye.r,Ye.g,Ye.b,zt),E.copy(Ye),P=zt),x=W,H=!1}function et(W,Ce){W.side===Ci?pe(s.CULL_FACE):G(s.CULL_FACE);let ge=W.side===Bn;Ce&&(ge=!ge),Oe(ge),W.blending===aa&&W.transparent===!1?Ee(Wi):Ee(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const Le=W.stencilWrite;h.setTest(Le),Le&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Nt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?G(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(W){k!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),k=W)}function wt(W){W!==f_?(G(s.CULL_FACE),W!==B&&(W===Fm?s.cullFace(s.BACK):W===d_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),B=W}function bt(W){W!==ne&&(Q&&s.lineWidth(W),ne=W)}function Nt(W,Ce,ge){W?(G(s.POLYGON_OFFSET_FILL),(de!==Ce||Z!==ge)&&(de=Ce,Z=ge,u.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,ge))):pe(s.POLYGON_OFFSET_FILL)}function Ct(W){W?G(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function Ot(W){W===void 0&&(W=s.TEXTURE0+le-1),fe!==W&&(s.activeTexture(W),fe=W)}function q(W,Ce,ge){ge===void 0&&(fe===null?ge=s.TEXTURE0+le-1:ge=fe);let Le=U[ge];Le===void 0&&(Le={type:void 0,texture:void 0},U[ge]=Le),(Le.type!==W||Le.texture!==Ce)&&(fe!==ge&&(s.activeTexture(ge),fe=ge),s.bindTexture(W,Ce||_e[W]),Le.type=W,Le.texture=Ce)}function Ht(){const W=U[fe];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function vt(){try{s.compressedTexImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function S(){try{s.texSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function $(){try{s.texSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function ie(){try{s.compressedTexSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function Te(){try{s.texStorage2D(...arguments)}catch(W){At("WebGLState:",W)}}function Ne(){try{s.texStorage3D(...arguments)}catch(W){At("WebGLState:",W)}}function me(){try{s.texImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function ve(){try{s.texImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function De(W){return _[W]!==void 0?_[W]:s.getParameter(W)}function Qe(W,Ce){_[W]!==Ce&&(s.pixelStorei(W,Ce),_[W]=Ce)}function Ie(W){Ge.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Ge.copy(W))}function Pe(W){ze.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),ze.copy(W))}function it(W,Ce){let ge=p.get(Ce);ge===void 0&&(ge=new WeakMap,p.set(Ce,ge));let Le=ge.get(W);Le===void 0&&(Le=s.getUniformBlockIndex(Ce,W.name),ge.set(W,Le))}function rt(W,Ce){const Le=p.get(Ce).get(W);d.get(Ce)!==Le&&(s.uniformBlockBinding(Ce,Le,W.__bindingPointIndex),d.set(Ce,Le))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},_={},fe=null,U={},g={},M=new WeakMap,T=[],A=null,y=!1,x=null,I=null,O=null,R=null,L=null,C=null,D=null,E=new mt(0,0,0),P=0,H=!1,k=null,B=null,ne=null,de=null,Z=null,Ge.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:G,disable:pe,bindFramebuffer:xe,drawBuffers:Ue,useProgram:qe,setBlending:Ee,setMaterial:et,setFlipSided:Oe,setCullFace:wt,setLineWidth:bt,setPolygonOffset:Nt,setScissorTest:Ct,activeTexture:Ot,bindTexture:q,unbindTexture:Ht,compressedTexImage2D:vt,compressedTexImage3D:N,texImage2D:me,texImage3D:ve,pixelStorei:Qe,getParameter:De,updateUBOMapping:it,uniformBlockBinding:rt,texStorage2D:Te,texStorage3D:Ne,texSubImage2D:S,texSubImage3D:$,compressedTexSubImage2D:ie,compressedTexSubImage3D:he,scissor:Ie,viewport:Pe,reset:ct}}function xE(s,e,t,r,o,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new st,v=new WeakMap,_=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,S){return T?new OffscreenCanvas(N,S):fc("canvas")}function y(N,S,$){let ie=1;const he=vt(N);if((he.width>$||he.height>$)&&(ie=$/Math.max(he.width,he.height)),ie<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Te=Math.floor(ie*he.width),Ne=Math.floor(ie*he.height);g===void 0&&(g=A(Te,Ne));const me=S?A(Te,Ne):g;return me.width=Te,me.height=Ne,me.getContext("2d").drawImage(N,0,0,Te,Ne),ut("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Te+"x"+Ne+")."),me}else return"data"in N&&ut("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),N;return N}function x(N){return N.generateMipmaps}function I(N){s.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(N,S,$,ie,he,Te=!1){if(N!==null){if(s[N]!==void 0)return s[N];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ne;ie&&(Ne=e.get("EXT_texture_norm16"),Ne||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=S;if(S===s.RED&&($===s.FLOAT&&(me=s.R32F),$===s.HALF_FLOAT&&(me=s.R16F),$===s.UNSIGNED_BYTE&&(me=s.R8),$===s.UNSIGNED_SHORT&&Ne&&(me=Ne.R16_EXT),$===s.SHORT&&Ne&&(me=Ne.R16_SNORM_EXT)),S===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.R8UI),$===s.UNSIGNED_SHORT&&(me=s.R16UI),$===s.UNSIGNED_INT&&(me=s.R32UI),$===s.BYTE&&(me=s.R8I),$===s.SHORT&&(me=s.R16I),$===s.INT&&(me=s.R32I)),S===s.RG&&($===s.FLOAT&&(me=s.RG32F),$===s.HALF_FLOAT&&(me=s.RG16F),$===s.UNSIGNED_BYTE&&(me=s.RG8),$===s.UNSIGNED_SHORT&&Ne&&(me=Ne.RG16_EXT),$===s.SHORT&&Ne&&(me=Ne.RG16_SNORM_EXT)),S===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RG8UI),$===s.UNSIGNED_SHORT&&(me=s.RG16UI),$===s.UNSIGNED_INT&&(me=s.RG32UI),$===s.BYTE&&(me=s.RG8I),$===s.SHORT&&(me=s.RG16I),$===s.INT&&(me=s.RG32I)),S===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RGB8UI),$===s.UNSIGNED_SHORT&&(me=s.RGB16UI),$===s.UNSIGNED_INT&&(me=s.RGB32UI),$===s.BYTE&&(me=s.RGB8I),$===s.SHORT&&(me=s.RGB16I),$===s.INT&&(me=s.RGB32I)),S===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),$===s.UNSIGNED_INT&&(me=s.RGBA32UI),$===s.BYTE&&(me=s.RGBA8I),$===s.SHORT&&(me=s.RGBA16I),$===s.INT&&(me=s.RGBA32I)),S===s.RGB&&($===s.UNSIGNED_SHORT&&Ne&&(me=Ne.RGB16_EXT),$===s.SHORT&&Ne&&(me=Ne.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),S===s.RGBA){const ve=Te?uc:Tt.getTransfer(he);$===s.FLOAT&&(me=s.RGBA32F),$===s.HALF_FLOAT&&(me=s.RGBA16F),$===s.UNSIGNED_BYTE&&(me=ve===Ft?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Ne&&(me=Ne.RGBA16_EXT),$===s.SHORT&&Ne&&(me=Ne.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function L(N,S){let $;return N?S===null||S===qi||S===mo?$=s.DEPTH24_STENCIL8:S===Hi?$=s.DEPTH32F_STENCIL8:S===po&&($=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qi||S===mo?$=s.DEPTH_COMPONENT24:S===Hi?$=s.DEPTH_COMPONENT32F:S===po&&($=s.DEPTH_COMPONENT16),$}function C(N,S){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Sn&&N.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function D(N){const S=N.target;S.removeEventListener("dispose",D),P(S),S.isVideoTexture&&v.delete(S),S.isHTMLTexture&&_.delete(S)}function E(N){const S=N.target;S.removeEventListener("dispose",E),k(S)}function P(N){const S=r.get(N);if(S.__webglInit===void 0)return;const $=N.source,ie=M.get($);if(ie){const he=ie[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&H(N),Object.keys(ie).length===0&&M.delete($)}r.remove(N)}function H(N){const S=r.get(N);s.deleteTexture(S.__webglTexture);const $=N.source,ie=M.get($);delete ie[S.__cacheKey],u.memory.textures--}function k(N){const S=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let he=0;he<S.__webglFramebuffer[ie].length;he++)s.deleteFramebuffer(S.__webglFramebuffer[ie][he]);else s.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)s.deleteFramebuffer(S.__webglFramebuffer[ie]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const $=N.textures;for(let ie=0,he=$.length;ie<he;ie++){const Te=r.get($[ie]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),u.memory.textures--),r.remove($[ie])}r.remove(N)}let B=0;function ne(){B=0}function de(){return B}function Z(N){B=N}function le(){const N=B;return N>=o.maxTextures&&ut("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),B+=1,N}function Q(N){const S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function X(N,S){const $=r.get(N);if(N.isVideoTexture&&q(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const ie=N.image;if(ie===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{pe($,N,S);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+S)}function ae(N,S){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){pe($,N,S);return}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+S)}function fe(N,S){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){pe($,N,S);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+S)}function U(N,S){const $=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&$.__version!==N.version){xe($,N,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+S)}const J={[ac]:s.REPEAT,[or]:s.CLAMP_TO_EDGE,[Zf]:s.MIRRORED_REPEAT},Fe={[Sn]:s.NEAREST,[D_]:s.NEAREST_MIPMAP_NEAREST,[El]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[lf]:s.LINEAR_MIPMAP_NEAREST,[ds]:s.LINEAR_MIPMAP_LINEAR},Ge={[F_]:s.NEVER,[V_]:s.ALWAYS,[O_]:s.LESS,[Kd]:s.LEQUAL,[k_]:s.EQUAL,[$d]:s.GEQUAL,[B_]:s.GREATER,[z_]:s.NOTEQUAL};function ze(N,S){if(S.type===Hi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Cn||S.magFilter===lf||S.magFilter===El||S.magFilter===ds||S.minFilter===Cn||S.minFilter===lf||S.minFilter===El||S.minFilter===ds)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,J[S.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,J[S.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,J[S.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Fe[S.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Fe[S.minFilter]),S.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Sn||S.minFilter!==El&&S.minFilter!==ds||S.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function oe(N,S){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",D));const ie=S.source;let he=M.get(ie);he===void 0&&(he={},M.set(ie,he));const Te=Q(S);if(Te!==N.__cacheKey){he[Te]===void 0&&(he[Te]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),he[Te].usedTimes++;const Ne=he[N.__cacheKey];Ne!==void 0&&(he[N.__cacheKey].usedTimes--,Ne.usedTimes===0&&H(S)),N.__cacheKey=Te,N.__webglTexture=he[Te].texture}return $}function _e(N,S,$){return Math.floor(Math.floor(N/$)/S)}function G(N,S,$,ie){const Te=N.updateRanges;if(Te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,$,ie,S.data);else{Te.sort((Qe,Ie)=>Qe.start-Ie.start);let Ne=0;for(let Qe=1;Qe<Te.length;Qe++){const Ie=Te[Ne],Pe=Te[Qe],it=Ie.start+Ie.count,rt=_e(Pe.start,S.width,4),ct=_e(Ie.start,S.width,4);Pe.start<=it+1&&rt===ct&&_e(Pe.start+Pe.count-1,S.width,4)===rt?Ie.count=Math.max(Ie.count,Pe.start+Pe.count-Ie.start):(++Ne,Te[Ne]=Pe)}Te.length=Ne+1;const me=t.getParameter(s.UNPACK_ROW_LENGTH),ve=t.getParameter(s.UNPACK_SKIP_PIXELS),De=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Qe=0,Ie=Te.length;Qe<Ie;Qe++){const Pe=Te[Qe],it=Math.floor(Pe.start/4),rt=Math.ceil(Pe.count/4),ct=it%S.width,W=Math.floor(it/S.width),Ce=rt,ge=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,ct,W,Ce,ge,$,ie,S.data)}N.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function pe(N,S,$){let ie=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=s.TEXTURE_3D);const he=oe(N,S),Te=S.source;t.bindTexture(ie,N.__webglTexture,s.TEXTURE0+$);const Ne=r.get(Te);if(Te.version!==Ne.__version||he===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ge=Tt.getPrimaries(Tt.workingColorSpace),Le=S.colorSpace===Ur?null:Tt.getPrimaries(S.colorSpace),ke=S.colorSpace===Ur||ge===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let ve=y(S.image,!1,o.maxTextureSize);ve=Ht(S,ve);const De=l.convert(S.format,S.colorSpace),Qe=l.convert(S.type);let Ie=R(S.internalFormat,De,Qe,S.normalized,S.colorSpace,S.isVideoTexture);ze(ie,S);let Pe;const it=S.mipmaps,rt=S.isVideoTexture!==!0,ct=Ne.__version===void 0||he===!0,W=Te.dataReady,Ce=C(S,ve);if(S.isDepthTexture)Ie=L(S.format===hs,S.type),ct&&(rt?t.texStorage2D(s.TEXTURE_2D,1,Ie,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,Ie,ve.width,ve.height,0,De,Qe,null));else if(S.isDataTexture)if(it.length>0){rt&&ct&&t.texStorage2D(s.TEXTURE_2D,Ce,Ie,it[0].width,it[0].height);for(let ge=0,Le=it.length;ge<Le;ge++)Pe=it[ge],rt?W&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,De,Qe,Pe.data):t.texImage2D(s.TEXTURE_2D,ge,Ie,Pe.width,Pe.height,0,De,Qe,Pe.data);S.generateMipmaps=!1}else rt?(ct&&t.texStorage2D(s.TEXTURE_2D,Ce,Ie,ve.width,ve.height),W&&G(S,ve,De,Qe)):t.texImage2D(s.TEXTURE_2D,0,Ie,ve.width,ve.height,0,De,Qe,ve.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){rt&&ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ie,it[0].width,it[0].height,ve.depth);for(let ge=0,Le=it.length;ge<Le;ge++)if(Pe=it[ge],S.format!==Pi)if(De!==null)if(rt){if(W)if(S.layerUpdates.size>0){const ke=p0(Pe.width,Pe.height,S.format,S.type);for(const ye of S.layerUpdates){const Ke=Pe.data.subarray(ye*ke/Pe.data.BYTES_PER_ELEMENT,(ye+1)*ke/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,ye,Pe.width,Pe.height,1,De,Ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,ve.depth,De,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ie,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,ve.depth,De,Qe,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ie,Pe.width,Pe.height,ve.depth,0,De,Qe,Pe.data)}else{rt&&ct&&t.texStorage2D(s.TEXTURE_2D,Ce,Ie,it[0].width,it[0].height);for(let ge=0,Le=it.length;ge<Le;ge++)Pe=it[ge],S.format!==Pi?De!==null?rt?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,De,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,Ie,Pe.width,Pe.height,0,Pe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?W&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,De,Qe,Pe.data):t.texImage2D(s.TEXTURE_2D,ge,Ie,Pe.width,Pe.height,0,De,Qe,Pe.data)}else if(S.isDataArrayTexture)if(rt){if(ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ie,ve.width,ve.height,ve.depth),W)if(S.layerUpdates.size>0){const ge=p0(ve.width,ve.height,S.format,S.type);for(const Le of S.layerUpdates){const ke=ve.data.subarray(Le*ge/ve.data.BYTES_PER_ELEMENT,(Le+1)*ge/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,ve.width,ve.height,1,De,Qe,ke)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,De,Qe,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,ve.width,ve.height,ve.depth,0,De,Qe,ve.data);else if(S.isData3DTexture)rt?(ct&&t.texStorage3D(s.TEXTURE_3D,Ce,Ie,ve.width,ve.height,ve.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,De,Qe,ve.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,ve.width,ve.height,ve.depth,0,De,Qe,ve.data);else if(S.isFramebufferTexture){if(ct)if(rt)t.texStorage2D(s.TEXTURE_2D,Ce,Ie,ve.width,ve.height);else{let ge=ve.width,Le=ve.height;for(let ke=0;ke<Ce;ke++)t.texImage2D(s.TEXTURE_2D,ke,Ie,ge,Le,0,De,Qe,null),ge>>=1,Le>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ve.parentNode!==ge){ge.appendChild(ve),_.add(S),ge.onpaint=Le=>{const ke=Le.changedElements;for(const ye of _)ke.includes(ye.image)&&(ye.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ve);else{const ke=s.RGBA,ye=s.RGBA,Ke=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ke,ye,Ke,ve)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(rt&&ct){const ge=vt(it[0]);t.texStorage2D(s.TEXTURE_2D,Ce,Ie,ge.width,ge.height)}for(let ge=0,Le=it.length;ge<Le;ge++)Pe=it[ge],rt?W&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,De,Qe,Pe):t.texImage2D(s.TEXTURE_2D,ge,Ie,De,Qe,Pe);S.generateMipmaps=!1}else if(rt){if(ct){const ge=vt(ve);t.texStorage2D(s.TEXTURE_2D,Ce,Ie,ge.width,ge.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Qe,ve)}else t.texImage2D(s.TEXTURE_2D,0,Ie,De,Qe,ve);x(S)&&I(ie),Ne.__version=Te.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function xe(N,S,$){if(S.image.length!==6)return;const ie=oe(N,S),he=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+$);const Te=r.get(he);if(he.version!==Te.__version||ie===!0){t.activeTexture(s.TEXTURE0+$);const Ne=Tt.getPrimaries(Tt.workingColorSpace),me=S.colorSpace===Ur?null:Tt.getPrimaries(S.colorSpace),ve=S.colorSpace===Ur||Ne===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const De=S.isCompressedTexture||S.image[0].isCompressedTexture,Qe=S.image[0]&&S.image[0].isDataTexture,Ie=[];for(let ye=0;ye<6;ye++)!De&&!Qe?Ie[ye]=y(S.image[ye],!0,o.maxCubemapSize):Ie[ye]=Qe?S.image[ye].image:S.image[ye],Ie[ye]=Ht(S,Ie[ye]);const Pe=Ie[0],it=l.convert(S.format,S.colorSpace),rt=l.convert(S.type),ct=R(S.internalFormat,it,rt,S.normalized,S.colorSpace),W=S.isVideoTexture!==!0,Ce=Te.__version===void 0||ie===!0,ge=he.dataReady;let Le=C(S,Pe);ze(s.TEXTURE_CUBE_MAP,S);let ke;if(De){W&&Ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ct,Pe.width,Pe.height);for(let ye=0;ye<6;ye++){ke=Ie[ye].mipmaps;for(let Ke=0;Ke<ke.length;Ke++){const Ye=ke[Ke];S.format!==Pi?it!==null?W?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,0,0,Ye.width,Ye.height,it,Ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,ct,Ye.width,Ye.height,0,Ye.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,0,0,Ye.width,Ye.height,it,rt,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke,ct,Ye.width,Ye.height,0,it,rt,Ye.data)}}}else{if(ke=S.mipmaps,W&&Ce){ke.length>0&&Le++;const ye=vt(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ct,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Qe){W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ie[ye].width,Ie[ye].height,it,rt,Ie[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ct,Ie[ye].width,Ie[ye].height,0,it,rt,Ie[ye].data);for(let Ke=0;Ke<ke.length;Ke++){const zt=ke[Ke].image[ye].image;W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,0,0,zt.width,zt.height,it,rt,zt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,ct,zt.width,zt.height,0,it,rt,zt.data)}}else{W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,it,rt,Ie[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ct,it,rt,Ie[ye]);for(let Ke=0;Ke<ke.length;Ke++){const Ye=ke[Ke];W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,0,0,it,rt,Ye.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ke+1,ct,it,rt,Ye.image[ye])}}}x(S)&&I(s.TEXTURE_CUBE_MAP),Te.__version=he.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Ue(N,S,$,ie,he,Te){const Ne=l.convert($.format,$.colorSpace),me=l.convert($.type),ve=R($.internalFormat,Ne,me,$.normalized,$.colorSpace),De=r.get(S),Qe=r.get($);if(Qe.__renderTarget=S,!De.__hasExternalTextures){const Ie=Math.max(1,S.width>>Te),Pe=Math.max(1,S.height>>Te);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,Te,ve,Ie,Pe,S.depth,0,Ne,me,null):t.texImage2D(he,Te,ve,Ie,Pe,0,Ne,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Ot(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,he,Qe.__webglTexture,0,Ct(S)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,he,Qe.__webglTexture,Te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(N,S,$){if(s.bindRenderbuffer(s.RENDERBUFFER,N),S.depthBuffer){const ie=S.depthTexture,he=ie&&ie.isDepthTexture?ie.type:null,Te=L(S.stencilBuffer,he),Ne=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ot(S)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(S),Te,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(S),Te,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Te,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,N)}else{const ie=S.textures;for(let he=0;he<ie.length;he++){const Te=ie[he],Ne=l.convert(Te.format,Te.colorSpace),me=l.convert(Te.type),ve=R(Te.internalFormat,Ne,me,Te.normalized,Te.colorSpace);Ot(S)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(S),ve,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(S),ve,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ve,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(N,S,$){const ie=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(S.depthTexture);if(he.__renderTarget=S,(!he.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ie){if(he.__webglInit===void 0&&(he.__webglInit=!0,S.depthTexture.addEventListener("dispose",D)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ze(s.TEXTURE_CUBE_MAP,S.depthTexture);const De=l.convert(S.depthTexture.format),Qe=l.convert(S.depthTexture.type);let Ie;S.depthTexture.format===cr?Ie=s.DEPTH_COMPONENT24:S.depthTexture.format===hs&&(Ie=s.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ie,S.width,S.height,0,De,Qe,null)}}else X(S.depthTexture,0);const Te=he.__webglTexture,Ne=Ct(S),me=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,ve=S.depthTexture.format===hs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===cr)Ot(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,me,Te,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,ve,me,Te,0);else if(S.depthTexture.format===hs)Ot(S)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,me,Te,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,ve,me,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(N){const S=r.get(N),$=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){const ie=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ie){const he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ie.removeEventListener("dispose",he)};ie.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=ie}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if($)for(let ie=0;ie<6;ie++)lt(S.__webglFramebuffer[ie],N,ie);else{const ie=N.texture.mipmaps;ie&&ie.length>0?lt(S.__webglFramebuffer[0],N,0):lt(S.__webglFramebuffer,N,0)}else if($){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]===void 0)S.__webglDepthbuffer[ie]=s.createRenderbuffer(),qe(S.__webglDepthbuffer[ie],N,!1);else{const he=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=S.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Te)}}else{const ie=N.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),qe(S.__webglDepthbuffer,N,!1);else{const he=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Te)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(N,S,$){const ie=r.get(N);S!==void 0&&Ue(ie.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&gt(N)}function et(N){const S=N.texture,$=r.get(N),ie=r.get(S);N.addEventListener("dispose",E);const he=N.textures,Te=N.isWebGLCubeRenderTarget===!0,Ne=he.length>1;if(Ne||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=S.version,u.memory.textures++),Te){$.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer[me]=[];for(let ve=0;ve<S.mipmaps.length;ve++)$.__webglFramebuffer[me][ve]=s.createFramebuffer()}else $.__webglFramebuffer[me]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)$.__webglFramebuffer[me]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let me=0,ve=he.length;me<ve;me++){const De=r.get(he[me]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&Ot(N)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const ve=he[me];$.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[me]);const De=l.convert(ve.format,ve.colorSpace),Qe=l.convert(ve.type),Ie=R(ve.internalFormat,De,Qe,ve.normalized,ve.colorSpace,N.isXRRenderTarget===!0),Pe=Ct(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Ie,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,$.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),qe($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),ze(s.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Ue($.__webglFramebuffer[me][ve],N,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else Ue($.__webglFramebuffer[me],N,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);x(S)&&I(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let me=0,ve=he.length;me<ve;me++){const De=he[me],Qe=r.get(De);let Ie=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ie=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Qe.__webglTexture),ze(Ie,De),Ue($.__webglFramebuffer,N,De,s.COLOR_ATTACHMENT0+me,Ie,0),x(De)&&I(Ie)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(me=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,ie.__webglTexture),ze(me,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Ue($.__webglFramebuffer[ve],N,S,s.COLOR_ATTACHMENT0,me,ve);else Ue($.__webglFramebuffer,N,S,s.COLOR_ATTACHMENT0,me,0);x(S)&&I(me),t.unbindTexture()}N.depthBuffer&&gt(N)}function Oe(N){const S=N.textures;for(let $=0,ie=S.length;$<ie;$++){const he=S[$];if(x(he)){const Te=O(N),Ne=r.get(he).__webglTexture;t.bindTexture(Te,Ne),I(Te),t.unbindTexture()}}}const wt=[],bt=[];function Nt(N){if(N.samples>0){if(Ot(N)===!1){const S=N.textures,$=N.width,ie=N.height;let he=s.COLOR_BUFFER_BIT;const Te=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=r.get(N),me=S.length>1;if(me)for(let De=0;De<S.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const ve=N.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let De=0;De<S.length;De++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[De]);const Qe=r.get(S[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qe,0)}s.blitFramebuffer(0,0,$,ie,0,0,$,ie,he,s.NEAREST),d===!0&&(wt.length=0,bt.length=0,wt.push(s.COLOR_ATTACHMENT0+De),N.depthBuffer&&N.resolveDepthBuffer===!1&&(wt.push(Te),bt.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let De=0;De<S.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[De]);const Qe=r.get(S[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,Qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const S=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ct(N){return Math.min(o.maxSamples,N.samples)}function Ot(N){const S=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function q(N){const S=u.render.frame;v.get(N)!==S&&(v.set(N,S),N.update())}function Ht(N,S){const $=N.colorSpace,ie=N.format,he=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==cc&&$!==Ur&&(Tt.getTransfer($)===Ft?(ie!==Pi||he!==si)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",$)),S}function vt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=ne,this.getTextureUnits=de,this.setTextureUnits=Z,this.setTexture2D=X,this.setTexture2DArray=ae,this.setTexture3D=fe,this.setTextureCube=U,this.rebindTextures=Ee,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yE(s,e){function t(r,o=Ur){let l;const u=Tt.getTransfer(o);if(r===si)return s.UNSIGNED_BYTE;if(r===Wd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Y0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===j0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===X0)return s.BYTE;if(r===q0)return s.SHORT;if(r===po)return s.UNSIGNED_SHORT;if(r===Gd)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===ai)return s.HALF_FLOAT;if(r===K0)return s.ALPHA;if(r===$0)return s.RGB;if(r===Pi)return s.RGBA;if(r===cr)return s.DEPTH_COMPONENT;if(r===hs)return s.DEPTH_STENCIL;if(r===Z0)return s.RED;if(r===qd)return s.RED_INTEGER;if(r===ms)return s.RG;if(r===Yd)return s.RG_INTEGER;if(r===jd)return s.RGBA_INTEGER;if(r===Jl||r===ec||r===tc||r===nc)if(u===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qf||r===Jf||r===ed||r===td)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Qf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ed)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===td)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nd||r===id||r===rd||r===sd||r===ad||r===oc||r===od)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===nd||r===id)return u===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===rd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===sd)return l.COMPRESSED_R11_EAC;if(r===ad)return l.COMPRESSED_SIGNED_R11_EAC;if(r===oc)return l.COMPRESSED_RG11_EAC;if(r===od)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ld||r===cd||r===ud||r===fd||r===dd||r===hd||r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ld)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ud)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===md)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_d)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Md||r===Ed||r===wd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Md)return u===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ed)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Td||r===bd||r===lc||r===Ad)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Td)return l.COMPRESSED_RED_RGTC1_EXT;if(r===bd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const SE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ME=`
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

}`;class EE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new og(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Pn({vertexShader:SE,fragmentShader:ME,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Kn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wE extends gs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,h="local-floor",d=1,p=null,v=null,_=null,g=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",y=new EE,x={},I=t.getContextAttributes();let O=null,R=null;const L=[],C=[],D=new st;let E=null;const P=new ri;P.viewport=new tn;const H=new ri;H.viewport=new tn;const k=[P,H],B=new Nx;let ne=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let _e=L[oe];return _e===void 0&&(_e=new gf,L[oe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(oe){let _e=L[oe];return _e===void 0&&(_e=new gf,L[oe]=_e),_e.getGripSpace()},this.getHand=function(oe){let _e=L[oe];return _e===void 0&&(_e=new gf,L[oe]=_e),_e.getHandSpace()};function Z(oe){const _e=C.indexOf(oe.inputSource);if(_e===-1)return;const G=L[_e];G!==void 0&&(G.update(oe.inputSource,oe.frame,p||u),G.dispatchEvent({type:oe.type,data:oe.inputSource}))}function le(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",le),o.removeEventListener("inputsourceschange",Q);for(let oe=0;oe<L.length;oe++){const _e=C[oe];_e!==null&&(C[oe]=null,L[oe].disconnect(_e))}ne=null,de=null,y.reset();for(const oe in x)delete x[oe];e.setRenderTarget(O),M=null,g=null,_=null,o=null,R=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(D.width,D.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",le),o.addEventListener("inputsourceschange",Q),I.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(D),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,pe=null,xe=null;I.depth&&(xe=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=I.stencil?hs:cr,pe=I.stencil?mo:qi);const Ue={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(Ue),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new $n(g.textureWidth,g.textureHeight,{format:Pi,type:si,depthTexture:new da(g.textureWidth,g.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const G={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,G),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new $n(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(h),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(oe){for(let _e=0;_e<oe.removed.length;_e++){const G=oe.removed[_e],pe=C.indexOf(G);pe>=0&&(C[pe]=null,L[pe].disconnect(G))}for(let _e=0;_e<oe.added.length;_e++){const G=oe.added[_e];let pe=C.indexOf(G);if(pe===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=C.length){C.push(G),pe=Ue;break}else if(C[Ue]===null){C[Ue]=G,pe=Ue;break}if(pe===-1)break}const xe=L[pe];xe&&xe.connect(G)}}const X=new j,ae=new j;function fe(oe,_e,G){X.setFromMatrixPosition(_e.matrixWorld),ae.setFromMatrixPosition(G.matrixWorld);const pe=X.distanceTo(ae),xe=_e.projectionMatrix.elements,Ue=G.projectionMatrix.elements,qe=xe[14]/(xe[10]-1),lt=xe[14]/(xe[10]+1),gt=(xe[9]+1)/xe[5],Ee=(xe[9]-1)/xe[5],et=(xe[8]-1)/xe[0],Oe=(Ue[8]+1)/Ue[0],wt=qe*et,bt=qe*Oe,Nt=pe/(-et+Oe),Ct=Nt*-et;if(_e.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ct),oe.translateZ(Nt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),xe[10]===-1)oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ot=qe+Nt,q=lt+Nt,Ht=wt-Ct,vt=bt+(pe-Ct),N=gt*lt/q*Ot,S=Ee*lt/q*Ot;oe.projectionMatrix.makePerspective(Ht,vt,N,S,Ot,q),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function U(oe,_e){_e===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(_e.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let _e=oe.near,G=oe.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(G=y.depthFar)),B.near=H.near=P.near=_e,B.far=H.far=P.far=G,(ne!==B.near||de!==B.far)&&(o.updateRenderState({depthNear:B.near,depthFar:B.far}),ne=B.near,de=B.far),B.layers.mask=oe.layers.mask|6,P.layers.mask=B.layers.mask&-5,H.layers.mask=B.layers.mask&-3;const pe=oe.parent,xe=B.cameras;U(B,pe);for(let Ue=0;Ue<xe.length;Ue++)U(xe[Ue],pe);xe.length===2?fe(B,P,H):B.projectionMatrix.copy(P.projectionMatrix),J(oe,B,pe)};function J(oe,_e,G){G===null?oe.matrix.copy(_e.matrixWorld):(oe.matrix.copy(G.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(_e.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Pd*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(g===null&&M===null))return d},this.setFoveation=function(oe){d=oe,g!==null&&(g.fixedFoveation=oe),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(B)},this.getCameraTexture=function(oe){return x[oe]};let Fe=null;function Ge(oe,_e){if(v=_e.getViewerPose(p||u),T=_e,v!==null){const G=v.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let pe=!1;G.length!==B.cameras.length&&(B.cameras.length=0,pe=!0);for(let lt=0;lt<G.length;lt++){const gt=G[lt];let Ee=null;if(M!==null)Ee=M.getViewport(gt);else{const Oe=_.getViewSubImage(g,gt);Ee=Oe.viewport,lt===0&&(e.setRenderTargetTextures(R,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(R))}let et=k[lt];et===void 0&&(et=new ri,et.layers.enable(lt),et.viewport=new tn,k[lt]=et),et.matrix.fromArray(gt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(gt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),lt===0&&(B.matrix.copy(et.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),pe===!0&&B.cameras.push(et)}const xe=o.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const lt=_.getDepthInformation(G[0]);lt&&lt.isValid&&lt.texture&&y.init(lt,o.renderState)}if(xe&&xe.includes("camera-access")&&A){e.state.unbindTexture(),_=r.getBinding();for(let lt=0;lt<G.length;lt++){const gt=G[lt].camera;if(gt){let Ee=x[gt];Ee||(Ee=new og,x[gt]=Ee);const et=_.getCameraImage(gt);Ee.sourceTexture=et}}}}for(let G=0;G<L.length;G++){const pe=C[G],xe=L[G];pe!==null&&xe!==void 0&&xe.update(pe,_e,p||u)}Fe&&Fe(oe,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),T=null}const ze=new hg;ze.setAnimationLoop(Ge),this.setAnimationLoop=function(oe){Fe=oe},this.dispose=function(){}}}const TE=new Kt,yg=new pt;yg.set(-1,0,0,0,1,0,0,0,1);function bE(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,lg(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,I,O,R){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),v(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),g(y,x),x.isMeshPhysicalMaterial&&M(y,x,R)):x.isMeshMatcapMaterial?(l(y,x),T(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),A(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?d(y,x,I,O):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Bn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Bn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const I=e.get(x),O=I.envMap,R=I.envMapRotation;O&&(y.envMap.value=O,y.envMapRotation.value.setFromMatrix4(TE.makeRotationFromEuler(R)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(yg),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,I,O){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*I,y.scale.value=O*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,I){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const I=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function AE(s,e,t,r){let o={},l={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,L){const C=L.program;r.uniformBlockBinding(R,C)}function p(R,L){let C=o[R.id];C===void 0&&(y(R),C=v(R),o[R.id]=C,R.addEventListener("dispose",I));const D=L.program;r.updateUBOMapping(R,D);const E=e.render.frame;l[R.id]!==E&&(g(R),l[R.id]=E)}function v(R){const L=_();R.__bindingPointIndex=L;const C=s.createBuffer(),D=R.__size,E=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,D,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function _(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const L=o[R.id],C=R.uniforms,D=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let E=0,P=C.length;E<P;E++){const H=C[E];if(Array.isArray(H))for(let k=0,B=H.length;k<B;k++)M(H[k],E,k,D);else M(H,E,0,D)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,L,C,D){if(A(R,L,C,D)===!0){const E=R.__offset,P=R.value;if(Array.isArray(P)){let H=0;for(let k=0;k<P.length;k++){const B=P[k],ne=x(B);T(B,R.__data,H),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(H+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(P,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,R.__data)}}function T(R,L,C){typeof R=="number"||typeof R=="boolean"?L[0]=R:R.isMatrix3?(L[0]=R.elements[0],L[1]=R.elements[1],L[2]=R.elements[2],L[3]=0,L[4]=R.elements[3],L[5]=R.elements[4],L[6]=R.elements[5],L[7]=0,L[8]=R.elements[6],L[9]=R.elements[7],L[10]=R.elements[8],L[11]=0):ArrayBuffer.isView(R)?L.set(new R.constructor(R.buffer,R.byteOffset,L.length)):R.toArray(L,C)}function A(R,L,C,D){const E=R.value,P=L+"_"+C;if(D[P]===void 0)return typeof E=="number"||typeof E=="boolean"?D[P]=E:ArrayBuffer.isView(E)?D[P]=E.slice():D[P]=E.clone(),!0;{const H=D[P];if(typeof E=="number"||typeof E=="boolean"){if(H!==E)return D[P]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(H.equals(E)===!1)return H.copy(E),!0}}return!1}function y(R){const L=R.uniforms;let C=0;const D=16;for(let P=0,H=L.length;P<H;P++){const k=Array.isArray(L[P])?L[P]:[L[P]];for(let B=0,ne=k.length;B<ne;B++){const de=k[B],Z=Array.isArray(de.value)?de.value:[de.value];for(let le=0,Q=Z.length;le<Q;le++){const X=Z[le],ae=x(X),fe=C%D,U=fe%ae.boundary,J=fe+U;C+=U,J!==0&&D-J<ae.storage&&(C+=D-J),de.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=C,C+=ae.storage}}}const E=C%D;return E>0&&(C+=D-E),R.__size=C,R.__cache={},this}function x(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(L.boundary=16,L.storage=R.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",R),L}function I(R){const L=R.target;L.removeEventListener("dispose",I);const C=u.indexOf(L.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function O(){for(const R in o)s.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:d,update:p,dispose:O}}const RE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function CE(){return Oi===null&&(Oi=new px(RE,16,16,ms,ai),Oi.name="DFG_LUT",Oi.minFilter=Cn,Oi.magFilter=Cn,Oi.wrapS=or,Oi.wrapT=or,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class PE{constructor(e={}){const{canvas:t=G_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=si}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const A=M,y=new Set([jd,Yd,qd]),x=new Set([si,qi,po,mo,Wd,Xd]),I=new Uint32Array(4),O=new Int32Array(4),R=new j;let L=null,C=null;const D=[],E=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let k=!1,B=null,ne=null,de=null,Z=null;this._outputColorSpace=kn;let le=0,Q=0,X=null,ae=-1,fe=null;const U=new tn,J=new tn;let Fe=null;const Ge=new mt(0);let ze=0,oe=t.width,_e=t.height,G=1,pe=null,xe=null;const Ue=new tn(0,0,oe,_e),qe=new tn(0,0,oe,_e);let lt=!1;const gt=new th;let Ee=!1,et=!1;const Oe=new Kt,wt=new j,bt=new tn,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Ot(){return X===null?G:1}let q=r;function Ht(b,K){return t.getContext(b,K)}try{const b={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fd}`),t.addEventListener("webglcontextlost",zt,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),q===null){const K="webgl2";if(q=Ht(K,b),q===null)throw Ht(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw At("WebGLRenderer: "+b.message),b}let vt,N,S,$,ie,he,Te,Ne,me,ve,De,Qe,Ie,Pe,it,rt,ct,W,Ce,ge,Le,ke,ye;function Ke(){vt=new CM(q),vt.init(),Le=new yE(q,vt),N=new SM(q,vt,e,Le),S=new _E(q,vt),N.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),ne=q.createFramebuffer(),de=q.createFramebuffer(),Z=q.createFramebuffer(),$=new LM(q),ie=new rE,he=new xE(q,vt,S,ie,N,Le,$),Te=new RM(H),Ne=new Fx(q),ke=new xM(q,Ne),me=new PM(q,Ne,$,ke),ve=new IM(q,me,Ne,ke,$),W=new DM(q,N,he),it=new MM(ie),De=new iE(H,Te,vt,N,ke,it),Qe=new bE(H,ie),Ie=new aE,Pe=new dE(vt),ct=new _M(H,Te,S,ve,T,d),rt=new vE(H,ve,N),ye=new AE(q,$,N,S),Ce=new yM(q,vt,$),ge=new NM(q,vt,$),$.programs=De.programs,H.capabilities=N,H.extensions=vt,H.properties=ie,H.renderLists=Ie,H.shadowMap=rt,H.state=S,H.info=$}Ke(),A!==si&&(P=new FM(A,t.width,t.height,h,o,l));const Ye=new wE(H,q);this.xr=Ye,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const b=vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(oe,_e,!1))},this.getSize=function(b){return b.set(oe,_e)},this.setSize=function(b,K,ce=!0){if(Ye.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=b,_e=K,t.width=Math.floor(b*G),t.height=Math.floor(K*G),ce===!0&&(t.style.width=b+"px",t.style.height=K+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,b,K)},this.getDrawingBufferSize=function(b){return b.set(oe*G,_e*G).floor()},this.setDrawingBufferSize=function(b,K,ce){oe=b,_e=K,G=ce,t.width=Math.floor(b*ce),t.height=Math.floor(K*ce),this.setViewport(0,0,b,K)},this.setEffects=function(b){if(A===si){At("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let K=0;K<b.length;K++)if(b[K].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(Ue)},this.setViewport=function(b,K,ce,re){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,K,ce,re),S.viewport(U.copy(Ue).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(qe)},this.setScissor=function(b,K,ce,re){b.isVector4?qe.set(b.x,b.y,b.z,b.w):qe.set(b,K,ce,re),S.scissor(J.copy(qe).multiplyScalar(G).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(b){S.setScissorTest(lt=b)},this.setOpaqueSort=function(b){pe=b},this.setTransparentSort=function(b){xe=b},this.getClearColor=function(b){return b.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(b=!0,K=!0,ce=!0){let re=0;if(b){let te=!1;if(X!==null){const Re=X.texture.format;te=y.has(Re)}if(te){const Re=X.texture.type,We=x.has(Re),Ae=ct.getClearColor(),$e=ct.getClearAlpha(),nt=Ae.r,dt=Ae.g,ht=Ae.b;We?(I[0]=nt,I[1]=dt,I[2]=ht,I[3]=$e,q.clearBufferuiv(q.COLOR,0,I)):(O[0]=nt,O[1]=dt,O[2]=ht,O[3]=$e,q.clearBufferiv(q.COLOR,0,O))}else re|=q.COLOR_BUFFER_BIT}K&&(re|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(re|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){t.removeEventListener("webglcontextlost",zt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),ct.dispose(),Ie.dispose(),Pe.dispose(),ie.dispose(),Te.dispose(),ve.dispose(),ke.dispose(),ye.dispose(),De.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",xo),Ye.removeEventListener("sessionend",yo),Dn.stop()};function zt(b){b.preventDefault(),dc("WebGLRenderer: Context Lost."),k=!0}function It(){dc("WebGLRenderer: Context Restored."),k=!1;const b=$.autoReset,K=rt.enabled,ce=rt.autoUpdate,re=rt.needsUpdate,te=rt.type;Ke(),$.autoReset=b,rt.enabled=K,rt.autoUpdate=ce,rt.needsUpdate=re,rt.type=te}function Mn(b){At("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oi(b){const K=b.target;K.removeEventListener("dispose",oi),zr(K)}function zr(b){_s(b),ie.remove(b)}function _s(b){const K=ie.get(b).programs;K!==void 0&&(K.forEach(function(ce){De.releaseProgram(ce)}),b.isShaderMaterial&&De.releaseShaderCache(b))}this.renderBufferDirect=function(b,K,ce,re,te,Re){K===null&&(K=Nt);const We=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ae=Qt(b,K,ce,re,te);S.setMaterial(re,We);let $e=ce.index,nt=1;if(re.wireframe===!0){if($e=me.getWireframeAttribute(ce),$e===void 0)return;nt=2}const dt=ce.drawRange,ht=ce.attributes.position;let Je=dt.start*nt,Pt=(dt.start+dt.count)*nt;Re!==null&&(Je=Math.max(Je,Re.start*nt),Pt=Math.min(Pt,(Re.start+Re.count)*nt)),$e!==null?(Je=Math.max(Je,0),Pt=Math.min(Pt,$e.count)):ht!=null&&(Je=Math.max(Je,0),Pt=Math.min(Pt,ht.count));const Gt=Pt-Je;if(Gt<0||Gt===1/0)return;ke.setup(te,re,Ae,ce,$e);let $t,kt=Ce;if($e!==null&&($t=Ne.get($e),kt=ge,kt.setIndex($t)),te.isMesh)re.wireframe===!0?(S.setLineWidth(re.wireframeLinewidth*Ot()),kt.setMode(q.LINES)):kt.setMode(q.TRIANGLES);else if(te.isLine){let sn=re.linewidth;sn===void 0&&(sn=1),S.setLineWidth(sn*Ot()),te.isLineSegments?kt.setMode(q.LINES):te.isLineLoop?kt.setMode(q.LINE_LOOP):kt.setMode(q.LINE_STRIP)}else te.isPoints?kt.setMode(q.POINTS):te.isSprite&&kt.setMode(q.TRIANGLES);if(te.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))kt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const sn=te._multiDrawStarts,Ve=te._multiDrawCounts,_n=te._multiDrawCount,xt=$e?Ne.get($e).bytesPerElement:1,zn=ie.get(re).currentProgram.getUniforms();for(let Vn=0;Vn<_n;Vn++)zn.setValue(q,"_gl_DrawID",Vn),kt.render(sn[Vn]/xt,Ve[Vn])}else if(te.isInstancedMesh)kt.renderInstances(Je,Gt,te.count);else if(ce.isInstancedBufferGeometry){const sn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ve=Math.min(ce.instanceCount,sn);kt.renderInstances(Je,Gt,Ve)}else kt.render(Je,Gt)};function Vr(b,K,ce){b.transparent===!0&&b.side===Ci&&b.forceSinglePass===!1?(b.side=Bn,b.needsUpdate=!0,Wr(b,K,ce),b.side=kr,b.needsUpdate=!0,Wr(b,K,ce),b.side=Ci):Wr(b,K,ce)}this.compile=function(b,K,ce=null){ce===null&&(ce=b),C=Pe.get(ce),C.init(K),E.push(C),ce.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),b!==ce&&b.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),C.setupLights();const re=new Set;return b.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Re=te.material;if(Re)if(Array.isArray(Re))for(let We=0;We<Re.length;We++){const Ae=Re[We];Vr(Ae,ce,te),re.add(Ae)}else Vr(Re,ce,te),re.add(Re)}),C=E.pop(),re},this.compileAsync=function(b,K,ce=null){const re=this.compile(b,K,ce);return new Promise(te=>{function Re(){if(re.forEach(function(We){ie.get(We).currentProgram.isReady()&&re.delete(We)}),re.size===0){te(b);return}setTimeout(Re,10)}vt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Hr=null;function Ec(b){Hr&&Hr(b)}function xo(){Dn.stop()}function yo(){Dn.start()}const Dn=new hg;Dn.setAnimationLoop(Ec),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(b){Hr=b,Ye.setAnimationLoop(b),b===null?Dn.stop():Dn.start()},Ye.addEventListener("sessionstart",xo),Ye.addEventListener("sessionend",yo),this.render=function(b,K){if(K!==void 0&&K.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;B!==null&&B.renderStart(b,K);const ce=Ye.enabled===!0&&Ye.isPresenting===!0,re=P!==null&&(X===null||ce)&&P.begin(H,X);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(K),K=Ye.getCamera()),b.isScene===!0&&b.onBeforeRender(H,b,K,X),C=Pe.get(b,E.length),C.init(K),C.state.textureUnits=he.getTextureUnits(),E.push(C),Oe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),gt.setFromProjectionMatrix(Oe,Gi,K.reversedDepth),et=this.localClippingEnabled,Ee=it.init(this.clippingPlanes,et),L=Ie.get(b,D.length),L.init(),D.push(L),Ye.enabled===!0&&Ye.isPresenting===!0){const We=H.xr.getDepthSensingMesh();We!==null&&xs(We,K,-1/0,H.sortObjects)}xs(b,K,0,H.sortObjects),L.finish(),H.sortObjects===!0&&L.sort(pe,xe,K.reversedDepth),Ct=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Ct&&ct.addToRenderList(L,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&it.beginShadows();const te=C.state.shadowsArray;if(rt.render(te,b,K),Ee===!0&&it.endShadows(),(re&&P.hasRenderPass())===!1){const We=L.opaque,Ae=L.transmissive;if(C.setupLights(),K.isArrayCamera){const $e=K.cameras;if(Ae.length>0)for(let nt=0,dt=$e.length;nt<dt;nt++){const ht=$e[nt];So(We,Ae,b,ht)}Ct&&ct.render(b);for(let nt=0,dt=$e.length;nt<dt;nt++){const ht=$e[nt];_a(L,b,ht,ht.viewport)}}else Ae.length>0&&So(We,Ae,b,K),Ct&&ct.render(b),_a(L,b,K)}X!==null&&Q===0&&(he.updateMultisampleRenderTarget(X),he.updateRenderTargetMipmap(X)),re&&P.end(H),b.isScene===!0&&b.onAfterRender(H,b,K),ke.resetDefaultState(),ae=-1,fe=null,E.pop(),E.length>0?(C=E[E.length-1],he.setTextureUnits(C.state.textureUnits),Ee===!0&&it.setGlobalState(H.clippingPlanes,C.state.camera)):C=null,D.pop(),D.length>0?L=D[D.length-1]:L=null,B!==null&&B.renderEnd()};function xs(b,K,ce,re){if(b.visible===!1)return;if(b.layers.test(K.layers)){if(b.isGroup)ce=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(K);else if(b.isLightProbeGrid)C.pushLightProbeGrid(b);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||gt.intersectsSprite(b)){re&&bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Oe);const We=ve.update(b),Ae=b.material;Ae.visible&&L.push(b,We,Ae,ce,bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||gt.intersectsObject(b))){const We=ve.update(b),Ae=b.material;if(re&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),bt.copy(b.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),bt.copy(We.boundingSphere.center)),bt.applyMatrix4(b.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ae)){const $e=We.groups;for(let nt=0,dt=$e.length;nt<dt;nt++){const ht=$e[nt],Je=Ae[ht.materialIndex];Je&&Je.visible&&L.push(b,We,Je,ce,bt.z,ht)}}else Ae.visible&&L.push(b,We,Ae,ce,bt.z,null)}}const Re=b.children;for(let We=0,Ae=Re.length;We<Ae;We++)xs(Re[We],K,ce,re)}function _a(b,K,ce,re){const{opaque:te,transmissive:Re,transparent:We}=b;C.setupLightsView(ce),Ee===!0&&it.setGlobalState(H.clippingPlanes,ce),re&&S.viewport(U.copy(re)),te.length>0&&Gr(te,K,ce),Re.length>0&&Gr(Re,K,ce),We.length>0&&Gr(We,K,ce),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function So(b,K,ce,re){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[re.id]===void 0){const Je=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[re.id]=new $n(1,1,{generateMipmaps:!0,type:Je?ai:si,minFilter:ds,samples:Math.max(4,N.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Re=C.state.transmissionRenderTarget[re.id],We=re.viewport||U;Re.setSize(We.z*H.transmissionResolutionScale,We.w*H.transmissionResolutionScale);const Ae=H.getRenderTarget(),$e=H.getActiveCubeFace(),nt=H.getActiveMipmapLevel();H.setRenderTarget(Re),H.getClearColor(Ge),ze=H.getClearAlpha(),ze<1&&H.setClearColor(16777215,.5),H.clear(),Ct&&ct.render(ce);const dt=H.toneMapping;H.toneMapping=Xi;const ht=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),C.setupLightsView(re),Ee===!0&&it.setGlobalState(H.clippingPlanes,re),Gr(b,ce,re),he.updateMultisampleRenderTarget(Re),he.updateRenderTargetMipmap(Re),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Pt=0,Gt=K.length;Pt<Gt;Pt++){const $t=K[Pt],{object:kt,geometry:sn,material:Ve,group:_n}=$t;if(Ve.side===Ci&&kt.layers.test(re.layers)){const xt=Ve.side;Ve.side=Bn,Ve.needsUpdate=!0,xa(kt,ce,re,sn,Ve,_n),Ve.side=xt,Ve.needsUpdate=!0,Je=!0}}Je===!0&&(he.updateMultisampleRenderTarget(Re),he.updateRenderTargetMipmap(Re))}H.setRenderTarget(Ae,$e,nt),H.setClearColor(Ge,ze),ht!==void 0&&(re.viewport=ht),H.toneMapping=dt}function Gr(b,K,ce){const re=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Re=b.length;te<Re;te++){const We=b[te],{object:Ae,geometry:$e,group:nt}=We;let dt=We.material;dt.allowOverride===!0&&re!==null&&(dt=re),Ae.layers.test(ce.layers)&&xa(Ae,K,ce,$e,dt,nt)}}function xa(b,K,ce,re,te,Re){b.onBeforeRender(H,K,ce,re,te,Re),b.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.onBeforeRender(H,K,ce,re,b,Re),te.transparent===!0&&te.side===Ci&&te.forceSinglePass===!1?(te.side=Bn,te.needsUpdate=!0,H.renderBufferDirect(ce,K,re,te,b,Re),te.side=kr,te.needsUpdate=!0,H.renderBufferDirect(ce,K,re,te,b,Re),te.side=Ci):H.renderBufferDirect(ce,K,re,te,b,Re),b.onAfterRender(H,K,ce,re,te,Re)}function Wr(b,K,ce){K.isScene!==!0&&(K=Nt);const re=ie.get(b),te=C.state.lights,Re=C.state.shadowsArray,We=te.state.version,Ae=De.getParameters(b,te.state,Re,K,ce,C.state.lightProbeGridArray),$e=De.getProgramCacheKey(Ae);let nt=re.programs;re.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?K.environment:null,re.fog=K.fog;const dt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;re.envMap=Te.get(b.envMap||re.environment,dt),re.envMapRotation=re.environment!==null&&b.envMap===null?K.environmentRotation:b.envMapRotation,nt===void 0&&(b.addEventListener("dispose",oi),nt=new Map,re.programs=nt);let ht=nt.get($e);if(ht!==void 0){if(re.currentProgram===ht&&re.lightsStateVersion===We)return Mo(b,Ae),ht}else Ae.uniforms=De.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,ce,Ae),b.onBeforeCompile(Ae,H),ht=De.acquireProgram(Ae,$e),nt.set($e,ht),re.uniforms=Ae.uniforms;const Je=re.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=it.uniform),Mo(b,Ae),re.needsLights=Sa(b),re.lightsStateVersion=We,re.needsLights&&(Je.ambientLightColor.value=te.state.ambient,Je.lightProbe.value=te.state.probe,Je.directionalLights.value=te.state.directional,Je.directionalLightShadows.value=te.state.directionalShadow,Je.spotLights.value=te.state.spot,Je.spotLightShadows.value=te.state.spotShadow,Je.rectAreaLights.value=te.state.rectArea,Je.ltc_1.value=te.state.rectAreaLTC1,Je.ltc_2.value=te.state.rectAreaLTC2,Je.pointLights.value=te.state.point,Je.pointLightShadows.value=te.state.pointShadow,Je.hemisphereLights.value=te.state.hemi,Je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Je.spotLightMatrix.value=te.state.spotLightMatrix,Je.spotLightMap.value=te.state.spotLightMap,Je.pointShadowMatrix.value=te.state.pointShadowMatrix),re.lightProbeGrid=C.state.lightProbeGridArray.length>0,re.currentProgram=ht,re.uniformsList=null,ht}function ya(b){if(b.uniformsList===null){const K=b.currentProgram.getUniforms();b.uniformsList=rc.seqWithValue(K.seq,b.uniforms)}return b.uniformsList}function Mo(b,K){const ce=ie.get(b);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function wc(b,K){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;R.setFromMatrixPosition(K.matrixWorld);for(let ce=0,re=b.length;ce<re;ce++){const te=b[ce];if(te.texture!==null&&te.boundingBox.containsPoint(R))return te}return null}function Qt(b,K,ce,re,te){K.isScene!==!0&&(K=Nt),he.resetTextureUnits();const Re=K.fog,We=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?K.environment:null,Ae=X===null?H.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Tt.workingColorSpace,$e=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,nt=Te.get(re.envMap||We,$e),dt=re.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ht=!!ce.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Je=!!ce.morphAttributes.position,Pt=!!ce.morphAttributes.normal,Gt=!!ce.morphAttributes.color;let $t=Xi;re.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&($t=H.toneMapping);const kt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,sn=kt!==void 0?kt.length:0,Ve=ie.get(re),_n=C.state.lights;if(Ee===!0&&(et===!0||b!==fe)){const Bt=b===fe&&re.id===ae;it.setState(re,b,Bt)}let xt=!1;re.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==_n.state.version||Ve.outputColorSpace!==Ae||te.isBatchedMesh&&Ve.batching===!1||!te.isBatchedMesh&&Ve.batching===!0||te.isBatchedMesh&&Ve.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ve.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ve.instancing===!1||!te.isInstancedMesh&&Ve.instancing===!0||te.isSkinnedMesh&&Ve.skinning===!1||!te.isSkinnedMesh&&Ve.skinning===!0||te.isInstancedMesh&&Ve.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ve.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ve.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ve.instancingMorph===!1&&te.morphTexture!==null||Ve.envMap!==nt||re.fog===!0&&Ve.fog!==Re||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==it.numPlanes||Ve.numIntersection!==it.numIntersection)||Ve.vertexAlphas!==dt||Ve.vertexTangents!==ht||Ve.morphTargets!==Je||Ve.morphNormals!==Pt||Ve.morphColors!==Gt||Ve.toneMapping!==$t||Ve.morphTargetsCount!==sn||!!Ve.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ve.__version=re.version);let zn=Ve.currentProgram;xt===!0&&(zn=Wr(re,K,te),B&&re.isNodeMaterial&&B.onUpdateProgram(re,zn,Ve));let Vn=!1,Mt=!1,Yi=!1;const Ut=zn.getUniforms(),qt=Ve.uniforms;if(S.useProgram(zn.program)&&(Vn=!0,Mt=!0,Yi=!0),re.id!==ae&&(ae=re.id,Mt=!0),Ve.needsLights){const Bt=wc(C.state.lightProbeGridArray,te);Ve.lightProbeGrid!==Bt&&(Ve.lightProbeGrid=Bt,Mt=!0)}if(Vn||fe!==b){S.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ut.setValue(q,"projectionMatrix",b.projectionMatrix),Ut.setValue(q,"viewMatrix",b.matrixWorldInverse);const xi=Ut.map.cameraPosition;xi!==void 0&&xi.setValue(q,wt.setFromMatrixPosition(b.matrixWorld)),N.logarithmicDepthBuffer&&Ut.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ut.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),fe!==b&&(fe=b,Mt=!0,Yi=!0)}if(Ve.needsLights&&(_n.state.directionalShadowMap.length>0&&Ut.setValue(q,"directionalShadowMap",_n.state.directionalShadowMap,he),_n.state.spotShadowMap.length>0&&Ut.setValue(q,"spotShadowMap",_n.state.spotShadowMap,he),_n.state.pointShadowMap.length>0&&Ut.setValue(q,"pointShadowMap",_n.state.pointShadowMap,he)),te.isSkinnedMesh){Ut.setOptional(q,te,"bindMatrix"),Ut.setOptional(q,te,"bindMatrixInverse");const Bt=te.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ut.setValue(q,"boneTexture",Bt.boneTexture,he))}te.isBatchedMesh&&(Ut.setOptional(q,te,"batchingTexture"),Ut.setValue(q,"batchingTexture",te._matricesTexture,he),Ut.setOptional(q,te,"batchingIdTexture"),Ut.setValue(q,"batchingIdTexture",te._indirectTexture,he),Ut.setOptional(q,te,"batchingColorTexture"),te._colorsTexture!==null&&Ut.setValue(q,"batchingColorTexture",te._colorsTexture,he));const _i=ce.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&W.update(te,ce,zn),(Mt||Ve.receiveShadow!==te.receiveShadow)&&(Ve.receiveShadow=te.receiveShadow,Ut.setValue(q,"receiveShadow",te.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&K.environment!==null&&(qt.envMapIntensity.value=K.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=CE()),Mt){if(Ut.setValue(q,"toneMappingExposure",H.toneMappingExposure),Ve.needsLights&&Tc(qt,Yi),Re&&re.fog===!0&&Qe.refreshFogUniforms(qt,Re),Qe.refreshMaterialUniforms(qt,re,G,_e,C.state.transmissionRenderTarget[b.id]),Ve.needsLights&&Ve.lightProbeGrid){const Bt=Ve.lightProbeGrid;qt.probesSH.value=Bt.texture,qt.probesMin.value.copy(Bt.boundingBox.min),qt.probesMax.value.copy(Bt.boundingBox.max),qt.probesResolution.value.copy(Bt.resolution)}rc.upload(q,ya(Ve),qt,he)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(rc.upload(q,ya(Ve),qt,he),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ut.setValue(q,"center",te.center),Ut.setValue(q,"modelViewMatrix",te.modelViewMatrix),Ut.setValue(q,"normalMatrix",te.normalMatrix),Ut.setValue(q,"modelMatrix",te.matrixWorld),re.uniformsGroups!==void 0){const Bt=re.uniformsGroups;for(let xi=0,Ni=Bt.length;xi<Ni;xi++){const Xr=Bt[xi];ye.update(Xr,zn),ye.bind(Xr,zn)}}return zn}function Tc(b,K){b.ambientLightColor.needsUpdate=K,b.lightProbe.needsUpdate=K,b.directionalLights.needsUpdate=K,b.directionalLightShadows.needsUpdate=K,b.pointLights.needsUpdate=K,b.pointLightShadows.needsUpdate=K,b.spotLights.needsUpdate=K,b.spotLightShadows.needsUpdate=K,b.rectAreaLights.needsUpdate=K,b.hemisphereLights.needsUpdate=K}function Sa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,K,ce){const re=ie.get(b);re.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ie.get(b.texture).__webglTexture=K,ie.get(b.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ce,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,K){const ce=ie.get(b);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(b,K=0,ce=0){X=b,le=K,Q=ce;let re=null,te=!1,Re=!1;if(b){const Ae=ie.get(b);if(Ae.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(q.FRAMEBUFFER,Ae.__webglFramebuffer),U.copy(b.viewport),J.copy(b.scissor),Fe=b.scissorTest,S.viewport(U),S.scissor(J),S.setScissorTest(Fe),ae=-1;return}else if(Ae.__webglFramebuffer===void 0)he.setupRenderTarget(b);else if(Ae.__hasExternalTextures)he.rebindTextures(b,ie.get(b.texture).__webglTexture,ie.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const dt=b.depthTexture;if(Ae.__boundDepthTexture!==dt){if(dt!==null&&ie.has(dt)&&(b.width!==dt.image.width||b.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(b)}}const $e=b.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Re=!0);const nt=ie.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(nt[K])?re=nt[K][ce]:re=nt[K],te=!0):b.samples>0&&he.useMultisampledRTT(b)===!1?re=ie.get(b).__webglMultisampledFramebuffer:Array.isArray(nt)?re=nt[ce]:re=nt,U.copy(b.viewport),J.copy(b.scissor),Fe=b.scissorTest}else U.copy(Ue).multiplyScalar(G).floor(),J.copy(qe).multiplyScalar(G).floor(),Fe=lt;if(ce!==0&&(re=ne),S.bindFramebuffer(q.FRAMEBUFFER,re)&&S.drawBuffers(b,re),S.viewport(U),S.scissor(J),S.setScissorTest(Fe),te){const Ae=ie.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae.__webglTexture,ce)}else if(Re){const Ae=K;for(let $e=0;$e<b.textures.length;$e++){const nt=ie.get(b.textures[$e]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+$e,nt.__webglTexture,ce,Ae)}}else if(b!==null&&ce!==0){const Ae=ie.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ae.__webglTexture,ce)}ae=-1},this.readRenderTargetPixels=function(b,K,ce,re,te,Re,We,Ae=0){if(!(b&&b.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e){S.bindFramebuffer(q.FRAMEBUFFER,$e);try{const nt=b.textures[Ae],dt=nt.format,ht=nt.type;if(b.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ae),!N.textureFormatReadable(dt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(ht)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=b.width-re&&ce>=0&&ce<=b.height-te&&q.readPixels(K,ce,re,te,Le.convert(dt),Le.convert(ht),Re)}finally{const nt=X!==null?ie.get(X).__webglFramebuffer:null;S.bindFramebuffer(q.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(b,K,ce,re,te,Re,We,Ae=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e)if(K>=0&&K<=b.width-re&&ce>=0&&ce<=b.height-te){S.bindFramebuffer(q.FRAMEBUFFER,$e);const nt=b.textures[Ae],dt=nt.format,ht=nt.type;if(b.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ae),!N.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Je),q.bufferData(q.PIXEL_PACK_BUFFER,Re.byteLength,q.STREAM_READ),q.readPixels(K,ce,re,te,Le.convert(dt),Le.convert(ht),0);const Pt=X!==null?ie.get(X).__webglFramebuffer:null;S.bindFramebuffer(q.FRAMEBUFFER,Pt);const Gt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await W_(q,Gt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Je),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Re),q.deleteBuffer(Je),q.deleteSync(Gt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,K=null,ce=0){const re=Math.pow(2,-ce),te=Math.floor(b.image.width*re),Re=Math.floor(b.image.height*re),We=K!==null?K.x:0,Ae=K!==null?K.y:0;he.setTexture2D(b,0),q.copyTexSubImage2D(q.TEXTURE_2D,ce,0,0,We,Ae,te,Re),S.unbindTexture()},this.copyTextureToTexture=function(b,K,ce=null,re=null,te=0,Re=0){let We,Ae,$e,nt,dt,ht,Je,Pt,Gt;const $t=b.isCompressedTexture?b.mipmaps[Re]:b.image;if(ce!==null)We=ce.max.x-ce.min.x,Ae=ce.max.y-ce.min.y,$e=ce.isBox3?ce.max.z-ce.min.z:1,nt=ce.min.x,dt=ce.min.y,ht=ce.isBox3?ce.min.z:0;else{const qt=Math.pow(2,-te);We=Math.floor($t.width*qt),Ae=Math.floor($t.height*qt),b.isDataArrayTexture?$e=$t.depth:b.isData3DTexture?$e=Math.floor($t.depth*qt):$e=1,nt=0,dt=0,ht=0}re!==null?(Je=re.x,Pt=re.y,Gt=re.z):(Je=0,Pt=0,Gt=0);const kt=Le.convert(K.format),sn=Le.convert(K.type);let Ve;K.isData3DTexture?(he.setTexture3D(K,0),Ve=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(he.setTexture2DArray(K,0),Ve=q.TEXTURE_2D_ARRAY):(he.setTexture2D(K,0),Ve=q.TEXTURE_2D),S.activeTexture(q.TEXTURE0),S.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),S.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),S.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);const _n=S.getParameter(q.UNPACK_ROW_LENGTH),xt=S.getParameter(q.UNPACK_IMAGE_HEIGHT),zn=S.getParameter(q.UNPACK_SKIP_PIXELS),Vn=S.getParameter(q.UNPACK_SKIP_ROWS),Mt=S.getParameter(q.UNPACK_SKIP_IMAGES);S.pixelStorei(q.UNPACK_ROW_LENGTH,$t.width),S.pixelStorei(q.UNPACK_IMAGE_HEIGHT,$t.height),S.pixelStorei(q.UNPACK_SKIP_PIXELS,nt),S.pixelStorei(q.UNPACK_SKIP_ROWS,dt),S.pixelStorei(q.UNPACK_SKIP_IMAGES,ht);const Yi=b.isDataArrayTexture||b.isData3DTexture,Ut=K.isDataArrayTexture||K.isData3DTexture;if(b.isDepthTexture){const qt=ie.get(b),_i=ie.get(K),Bt=ie.get(qt.__renderTarget),xi=ie.get(_i.__renderTarget);S.bindFramebuffer(q.READ_FRAMEBUFFER,Bt.__webglFramebuffer),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Ni=0;Ni<$e;Ni++)Yi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ie.get(b).__webglTexture,te,ht+Ni),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ie.get(K).__webglTexture,Re,Gt+Ni)),q.blitFramebuffer(nt,dt,We,Ae,Je,Pt,We,Ae,q.DEPTH_BUFFER_BIT,q.NEAREST);S.bindFramebuffer(q.READ_FRAMEBUFFER,null),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(te!==0||b.isRenderTargetTexture||ie.has(b)){const qt=ie.get(b),_i=ie.get(K);S.bindFramebuffer(q.READ_FRAMEBUFFER,de),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,Z);for(let Bt=0;Bt<$e;Bt++)Yi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,qt.__webglTexture,te,ht+Bt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,qt.__webglTexture,te),Ut?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,_i.__webglTexture,Re,Gt+Bt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,_i.__webglTexture,Re),te!==0?q.blitFramebuffer(nt,dt,We,Ae,Je,Pt,We,Ae,q.COLOR_BUFFER_BIT,q.NEAREST):Ut?q.copyTexSubImage3D(Ve,Re,Je,Pt,Gt+Bt,nt,dt,We,Ae):q.copyTexSubImage2D(Ve,Re,Je,Pt,nt,dt,We,Ae);S.bindFramebuffer(q.READ_FRAMEBUFFER,null),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ut?b.isDataTexture||b.isData3DTexture?q.texSubImage3D(Ve,Re,Je,Pt,Gt,We,Ae,$e,kt,sn,$t.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(Ve,Re,Je,Pt,Gt,We,Ae,$e,kt,$t.data):q.texSubImage3D(Ve,Re,Je,Pt,Gt,We,Ae,$e,kt,sn,$t):b.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Re,Je,Pt,We,Ae,kt,sn,$t.data):b.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Re,Je,Pt,$t.width,$t.height,kt,$t.data):q.texSubImage2D(q.TEXTURE_2D,Re,Je,Pt,We,Ae,kt,sn,$t);S.pixelStorei(q.UNPACK_ROW_LENGTH,_n),S.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xt),S.pixelStorei(q.UNPACK_SKIP_PIXELS,zn),S.pixelStorei(q.UNPACK_SKIP_ROWS,Vn),S.pixelStorei(q.UNPACK_SKIP_IMAGES,Mt),Re===0&&K.generateMipmaps&&q.generateMipmap(Ve),S.unbindTexture()},this.initRenderTarget=function(b){ie.get(b).__webglFramebuffer===void 0&&he.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?he.setTextureCube(b,0):b.isData3DTexture?he.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?he.setTexture2DArray(b,0):he.setTexture2D(b,0),S.unbindTexture()},this.resetState=function(){le=0,Q=0,X=null,S.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const sc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class va{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const NE=new yc(-1,1,1,-1,0,1);class LE extends Ln{constructor(){super(),this.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ln([0,2,0,0,2,0],2))}}const DE=new LE;class rh{constructor(e){this._mesh=new St(DE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class IE extends va{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vo.clone(e.uniforms),this.material=new Pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new rh(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class k0 extends va{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const o=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),l.buffers.stencil.setClear(h),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.buffers.stencil.setLocked(!0)}}class UE extends va{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class FE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new st);this._width=r.width,this._height=r.height,t=new $n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new IE(sc),this.copyPass.material.blending=Wi,this.timer=new Lx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let o=0,l=this.passes.length;o<l;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),u.needsSwap){if(r){const h=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}k0!==void 0&&(u instanceof k0?r=!0:u instanceof UE&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class OE extends va{constructor(e,t,r=null,o=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new mt}render(e,t,r){const o=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=o}}const kE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class pa extends va{constructor(e,t=1,r,o){super(),this.strength=t,this.radius=r,this.threshold=o,this.resolution=e!==void 0?new st(e.x,e.y):new st(256,256),this.clearColor=new mt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new $n(l,u,{type:ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const _=new $n(l,u,{type:ai});_.texture.name="UnrealBloomPass.h"+v,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const g=new $n(l,u,{type:ai});g.texture.name="UnrealBloomPass.v"+v,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),l=Math.round(l/2),u=Math.round(u/2)}const h=kE;this.highPassUniforms=vo.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const d=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new st(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vo.clone(sc.uniforms),this.blendMaterial=new Pn({uniforms:this.copyUniforms,vertexShader:sc.vertexShader,fragmentShader:sc.fragmentShader,premultipliedAlpha:!0,blending:ca,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new mt,this._oldClearAlpha=1,this._basic=new jn,this._fsQuad=new rh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(r,o);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,o),this.renderTargetsVertical[l].setSize(r,o),this.separableBlurMaterials[l].uniforms.invSize.value=new st(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2)}render(e,t,r,o,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let h=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[d].uniforms.direction.value=pa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=pa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this._fsQuad.render(e),h=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],r=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(r*r))/r);return new Pn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Pn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}pa.BlurDirectionX=new st(1,0);pa.BlurDirectionY=new st(0,1);const $l={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class BE extends va{constructor(){super(),this.isOutputPass=!0,this.uniforms=vo.clone($l.uniforms),this.material=new cg({name:$l.name,uniforms:this.uniforms,vertexShader:$l.vertexShader,fragmentShader:$l.fragmentShader}),this._fsQuad=new rh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Tt.getTransfer(this._outputColorSpace)===Ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Od?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===zd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function co(s,e,t=1,r=1){const o=document.createElement("canvas");o.width=o.height=s;const l=o.getContext("2d");e(l,s);const u=new ic(o);return u.wrapS=u.wrapT=ac,u.repeat.set(t,r),u.colorSpace=kn,u.anisotropy=4,u}function Zl(s,e,t,r,o){for(let l=0;l<t;l++){s.fillStyle=r[Math.random()*r.length|0],s.globalAlpha=o*(.4+Math.random()*.6);const u=1+Math.random()*2.4;s.fillRect(Math.random()*e,Math.random()*e,u,u)}s.globalAlpha=1}function Sg(s,e,t,r,o,l){let u=s.x+e;for(const d of o)u+r>d.minX&&u-r<d.maxX&&s.z+r>d.minZ&&s.z-r<d.maxZ&&(e>0?u=Math.min(u,d.minX-r):e<0&&(u=Math.max(u,d.maxX+r)));s.x=u;let h=s.z+t;for(const d of o)s.x+r>d.minX&&s.x-r<d.maxX&&h+r>d.minZ&&h-r<d.maxZ&&(t>0?h=Math.min(h,d.minZ-r):t<0&&(h=Math.max(h,d.maxZ+r)));s.z=h,l&&(s.x=Math.max(l.minX+r,Math.min(l.maxX-r,s.x)),s.z=Math.max(l.minZ+r,Math.min(l.maxZ-r,s.z)))}function zE(s){const e=[],t=[],r=co(256,(G,pe)=>{G.fillStyle="#c2a878",G.fillRect(0,0,pe,pe),Zl(G,pe,2600,["#b09463","#d4bc8c","#a8895a","#cbb283"],.5),G.globalAlpha=.16;for(let xe=0;xe<14;xe++)G.fillStyle=xe%2?"#8f7448":"#dcc596",G.beginPath(),G.ellipse(Math.random()*pe,Math.random()*pe,20+Math.random()*46,12+Math.random()*30,Math.random()*3,0,7),G.fill();G.globalAlpha=1},10,10),o=co(256,(G,pe)=>{G.fillStyle="#c9b088",G.fillRect(0,0,pe,pe),Zl(G,pe,1600,["#b79d73","#d8c39a","#a3895f"],.42),G.globalAlpha=.22,G.strokeStyle="#8f7a55";for(let xe=0;xe<pe;xe+=30)G.beginPath(),G.moveTo(0,xe),G.lineTo(pe,xe),G.stroke();G.globalAlpha=.14;for(let xe=0;xe<9;xe++)G.fillStyle="#6e5b3d",G.fillRect(Math.random()*pe,Math.random()*pe,30+Math.random()*70,4+Math.random()*12);G.globalAlpha=1},4,2),l=co(128,(G,pe)=>{G.fillStyle="#8a5c2e",G.fillRect(0,0,pe,pe),G.strokeStyle="#5f3d1c",G.lineWidth=5;for(let xe=0;xe<=pe;xe+=32)G.beginPath(),G.moveTo(0,xe),G.lineTo(pe,xe),G.stroke();Zl(G,pe,500,["#7a4e24","#9c6c3a","#6b441f"],.5),G.lineWidth=8,G.strokeStyle="#4e3115",G.strokeRect(2,2,pe-4,pe-4),G.beginPath(),G.moveTo(0,0),G.lineTo(pe,pe),G.moveTo(pe,0),G.lineTo(0,pe),G.lineWidth=6,G.stroke()},1,1),u=co(128,(G,pe)=>{G.fillStyle="#4c7a4f",G.fillRect(0,0,pe,pe),Zl(G,pe,500,["#3d6340","#5c8a5e","#2f4f33"],.5),G.strokeStyle="#2f4f33",G.lineWidth=8,G.strokeRect(6,6,pe-12,pe-12),G.fillStyle="#2f4f33",G.fillRect(12,pe*.42,pe-24,10),G.fillStyle="#d8c39a",G.fillRect(pe-26,pe*.5,8,8)},1,1),h=new vn({map:r,roughness:1}),d=new vn({map:o,roughness:.95}),p=new vn({map:l,roughness:.9}),v=new vn({map:u,roughness:.8,metalness:.15}),_=new vn({color:11772015,roughness:1}),g=new vn({color:6126149,roughness:.95}),M=new vn({color:9271900,roughness:1}),T=new vn({color:8010282,roughness:.75,metalness:.25}),A=(G,pe,xe,Ue,qe,lt,gt,Ee)=>{const et=(Ee==null?void 0:Ee.collide)!==!1,Oe=(Ee==null?void 0:Ee.solid)!==!1,wt=new St(new ii(G,pe,xe),gt);return wt.position.set(Ue,qe,lt),wt.castShadow=!0,wt.receiveShadow=!0,s.add(wt),Oe&&e.push(wt),et&&t.push({minX:Ue-G/2,maxX:Ue+G/2,minZ:lt-xe/2,maxZ:lt+xe/2}),wt},y=(G,pe)=>{const xe=new St(new Vi(.45,.45,1.15,14),T);xe.position.set(G,.575,pe),xe.castShadow=!0,xe.receiveShadow=!0,s.add(xe),e.push(xe),t.push({minX:G-.45,maxX:G+.45,minZ:pe-.45,maxZ:pe+.45})},x=new St(new Kn(64,64),h);x.rotation.x=-Math.PI/2,x.receiveShadow=!0,s.add(x),e.push(x),A(42,5,1,0,2.5,-20.5,d),A(42,5,1,0,2.5,20.5,d),A(1,5,42,-20.5,2.5,0,d),A(1,5,42,20.5,2.5,0,d),A(12,3.6,.8,-9,1.8,13,d),A(11,3.6,.8,8.5,1.8,13,d),A(.8,3.6,19,-3.4,1.8,3.5,d),A(.8,3.6,19,3.4,1.8,3.5,d),A(.8,3.6,1,-7.4,1.8,-15.5,d),A(.8,3.6,5,-7.4,1.8,-8.5,d),A(.8,3.6,1,7.4,1.8,-15.5,d),A(.8,3.6,5,7.4,1.8,-8.5,d),A(14,3.6,.8,0,1.8,-16.4,d),A(8,3.6,.8,-11,1.8,-11.6,d),A(7,3.6,.8,10.5,1.8,-11.6,d),A(.8,3.6,26,13.6,1.8,2,d),A(.8,3.6,25,-14.6,1.8,.5,d),A(5.6,.5,16,-17.1,3.55,-4,M,{collide:!1}),A(5.4,.5,7.4,-17,3.55,-15.7,M,{collide:!1}),A(1.5,2.8,.5,-1.5,1.4,2,v),A(1.5,2.8,.5,1.5,1.4,2,v),A(1.8,2.8,.5,15.5,1.4,2,v),A(1.8,2.8,.5,18,1.4,2,v),A(1.4,1.4,1.4,0,.7,8.5,p),A(1.4,1.4,1.4,-8,.7,16.5,p),A(1.4,1.4,1.4,6,.7,17,p),A(1.4,1.4,1.4,16.5,.7,9,p),A(1.4,1.4,1.4,-3.5,.7,-13,p),A(1.4,1.4,1.4,3.5,.7,-13.5,p),A(1.4,1.4,1.4,16,.7,-17,p),A(1.4,1.4,1.4,16,2.1,-17,p),A(1.4,1.4,1.4,12,.7,-18,p),A(1.4,1.4,1.4,-9,.7,-13.5,p),A(1.4,1.4,1.4,-17,.7,-18,p),A(1.4,1.4,1.4,15,.7,-5,p),A(2.2,.9,2.2,9.5,.45,-13,_),A(2.4,1,2.4,-13,.5,-16,g),A(2.4,.85,.8,0,.42,-4,_),A(2.4,.85,.8,15.5,.42,-7.5,_),A(.8,.85,2.4,-11,.42,-12.6,_),A(2.4,.85,.8,-11.5,.42,17.5,_),y(-12,17.5),y(11,15.5),y(-16.5,8),y(-17,-6),y(18.5,13);const I=(G,pe)=>co(128,(xe,Ue)=>{xe.clearRect(0,0,Ue,Ue),xe.fillStyle=pe,xe.font="bold 104px sans-serif",xe.textAlign="center",xe.textBaseline="middle",xe.fillText(G,Ue/2,Ue/2+6)},1,1),O=new St(new Kn(2.4,2.4),new jn({map:I("A","#f2a33c"),transparent:!0}));O.position.set(19.96,2.4,-15),O.rotation.y=-Math.PI/2,s.add(O),e.push(O);const R=new St(new Kn(2.4,2.4),new jn({map:I("B","#6fb7e8"),transparent:!0}));R.position.set(-19.96,2.4,-15),R.rotation.y=Math.PI/2,s.add(R),e.push(R);const L=new ho(16757867,5,11,2);L.position.set(-17,2.9,-4),s.add(L);const C=new ho(16757867,3.2,9,2);C.position.set(-17,2.9,8),s.add(C);const D=new ho(16767392,3.4,10,2);D.position.set(-14,3,-15),s.add(D);const E=new St(new nh(6,24),new jn({color:16774096,fog:!1}));E.position.set(-38,34,-52),E.lookAt(0,0,0),s.add(E);const P=new Ln,H=new Float32Array(660);for(let G=0;G<220;G++)H[G*3]=(Math.random()-.5)*38,H[G*3+1]=Math.random()*6,H[G*3+2]=(Math.random()-.5)*38;P.setAttribute("position",new vi(H,3));const k=new _x(P,new sg({color:16773320,size:.05,transparent:!0,opacity:.5}));k.name="dust",s.add(k);const B=document.createElement("canvas");B.width=16,B.height=256;const ne=B.getContext("2d"),de=ne.createLinearGradient(0,0,0,256);de.addColorStop(0,"#4e8cc4"),de.addColorStop(.45,"#9cc3dd"),de.addColorStop(.75,"#d8e3e4"),de.addColorStop(1,"#e6d9b8"),ne.fillStyle=de,ne.fillRect(0,0,16,256);const Z=new ic(B);Z.colorSpace=kn;const le=new St(new _c(150,24,12),new jn({map:Z,side:Bn,fog:!1,depthWrite:!1}));s.add(le);const Q=document.createElement("canvas");Q.width=Q.height=128;const X=Q.getContext("2d"),ae=X.createRadialGradient(64,64,8,64,64,62);ae.addColorStop(0,"rgba(255,255,255,0.95)"),ae.addColorStop(.6,"rgba(255,255,255,0.45)"),ae.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=ae,X.fillRect(0,0,128,128);const fe=new ic(Q),U=new mi;U.name="clouds";for(let G=0;G<6;G++){const pe=new dx(new ig({map:fe,transparent:!0,opacity:.7,fog:!1,depthWrite:!1})),xe=G/6*Math.PI*2+Math.random();pe.position.set(Math.cos(xe)*(70+Math.random()*40),34+Math.random()*18,Math.sin(xe)*(70+Math.random()*40));const Ue=26+Math.random()*22;pe.scale.set(Ue,Ue*.45,1),U.add(pe)}s.add(U);const J=new vn({color:9070660,roughness:1}),Fe=new vn({color:6257978,roughness:.9,side:Ci}),Ge=(G,pe,xe)=>{const Ue=new mi;Ue.position.set(G,0,pe);const qe=new St(new Vi(.15,.27,xe,7),J);qe.position.y=xe/2,qe.rotation.z=(Math.random()-.5)*.14,qe.castShadow=!0,Ue.add(qe);for(let lt=0;lt<6;lt++){const gt=new Xt;gt.position.y=xe,gt.rotation.y=lt/6*Math.PI*2+Math.random()*.4;const Ee=new St(new ih(.45,2.6,5),Fe);Ee.scale.set(.38,1,1),Ee.position.set(1.15,.2,0),Ee.rotation.z=-1.75-Math.random()*.25,Ee.castShadow=!0,gt.add(Ee),Ue.add(gt)}s.add(Ue),t.push({minX:G-.28,maxX:G+.28,minZ:pe-.28,maxZ:pe+.28})};Ge(-14,13,5.2),Ge(15.5,-13.5,6),Ge(-12.5,-13.5,4.6),Ge(10,13.5,5.6);const ze=G=>{const pe=document.createElement("canvas");pe.width=pe.height=128;const xe=pe.getContext("2d");xe.fillStyle="#1c2228",xe.fillRect(0,0,128,128),xe.strokeStyle="#f2a33c",xe.lineWidth=8,xe.strokeRect(8,8,112,112),xe.fillStyle="#f2e9d8",xe.font="bold 84px sans-serif",xe.textAlign="center",xe.textBaseline="middle",xe.fillText(G,64,70);const Ue=new ic(pe);return Ue.colorSpace=kn,Ue},oe=new St(new Kn(1.3,1.3),new jn({map:ze("A")}));oe.position.set(-7,3.4,-15.4),s.add(oe);const _e=new St(new Kn(1.3,1.3),new jn({map:ze("B")}));return _e.position.set(15.4,3.4,-2),_e.rotation.y=-Math.PI/2,s.add(_e),{solids:e,colliders:t,bounds:{minX:-19.4,maxX:19.4,minZ:-19.4,maxZ:19.4},botSpawns:[{x:-12,z:-14},{x:-17.5,z:-13},{x:-17,z:7},{x:-16.8,z:-7},{x:-3,z:-13},{x:3,z:-13},{x:0,z:-14.8},{x:12,z:-14},{x:16.5,z:-13},{x:10,z:-17},{x:16.5,z:7},{x:15.5,z:-4.5},{x:0,z:7}],playerSpawn:{x:2,z:17}}}class VE{constructor(e,t,r,o,l){this.group=new mi,this.hitboxes=[],this.hp=100,this.alive=!0,this.name="БОТ",this.muzzle=new Xt,this.legL=new Xt,this.legR=new Xt,this.mats=[],this.strafeDir=Math.random()<.5?1:-1,this.strafeT=1,this.burstLeft=0,this.nextShot=0,this.nextBurst=.8+Math.random()*1.2,this.blockedT=0,this.lastX=0,this.lastZ=0,this.flashT=0,this.deathT=0,this.phase=Math.random()*10,this.prefRange=6.5+Math.random()*6.5,this.ray=new dg,this.tmpA=new j,this.tmpB=new j,this.name=e,this.speed=o,this.hooks=l,this.group.position.set(t,0,r),this.lastX=t,this.lastZ=r;const u=C=>{const D=new vn({color:C,roughness:.9});return D.emissive=new mt(16722432),D.emissiveIntensity=0,this.mats.push(D),D},h=u(12874285),d=u(3817801),p=u(14262379),v=u(2369324),_=new vn({color:2829875,roughness:.6,metalness:.5}),g=(C,D,E,P)=>new St(new ii(C,D,E),P),M=(C,D)=>{const E=g(.17,.52,.2,d);E.position.y=-.26,E.castShadow=!0,E.userData={bot:this,part:"body"},D.add(E),D.position.set(C,.52,0),this.hitboxes.push(E)};M(-.12,this.legL),M(.12,this.legR),this.group.add(this.legL,this.legR);const T=g(.54,.62,.3,h);T.position.y=.85,T.castShadow=!0,T.userData={bot:this,part:"body"},this.group.add(T),this.hitboxes.push(T);const A=g(.44,.34,.34,v);A.position.y=.92,A.userData={bot:this,part:"body"},this.group.add(A),this.hitboxes.push(A);const y=g(.25,.27,.25,p);y.position.y=1.33,y.castShadow=!0,y.userData={bot:this,part:"head"},this.group.add(y),this.hitboxes.push(y);const x=g(.28,.17,.28,v);x.position.y=1.42,x.userData={bot:this,part:"head"},this.group.add(x),this.hitboxes.push(x);const I=g(.13,.46,.15,h);I.position.set(-.34,.92,.05),I.userData={bot:this,part:"body"},this.group.add(I),this.hitboxes.push(I);const O=g(.13,.42,.15,h);O.position.set(.3,.95,.12),O.rotation.x=-.9,O.userData={bot:this,part:"body"},this.group.add(O),this.hitboxes.push(O);const R=g(.07,.1,.72,_);R.position.set(.22,1.02,.36),R.userData={bot:this,part:"body"},this.group.add(R),this.hitboxes.push(R),this.muzzle.position.set(.22,1.02,.78),this.group.add(this.muzzle);const L=new jn({color:16761707,transparent:!0,opacity:0,blending:ca,depthWrite:!1});this.flash=new St(new Kn(.34,.34),L),this.flash.position.copy(this.muzzle.position),this.flash.position.z+=.1,this.group.add(this.flash)}hasLOS(e){const t=this.tmpA.copy(this.group.position);t.y+=1.35;const r=this.tmpB.copy(e).sub(t),o=r.length();return o<.001?!0:(this.ray.set(t,r.normalize()),this.ray.far=o-.5,this.ray.intersectObjects(this.hooks.solids,!1).length===0)}fireAt(e,t){const r=new j;this.muzzle.getWorldPosition(r);const o=this.hooks.playerSpeedXZ(),l=Math.max(.06,Math.min(.4,.36-t*.009-o*.045)),u=Math.random()<l,h=e.clone();u||(h.x+=(Math.random()-.5)*1.6,h.y+=(Math.random()-.5)*1,h.z+=(Math.random()-.5)*1.6),this.hooks.tracer(r,h,16753229),this.flash.material.opacity=.95,this.flash.rotation.z=Math.random()*Math.PI,this.flashT=.045,this.hooks.sfx.enemyShoot(t),u&&this.hooks.damagePlayer(6+Math.random()*8,this.group.position)}hit(e,t){if(!this.alive)return!1;this.hp-=t,this.flashT=Math.max(this.flashT,.02);for(const r of this.mats)r.emissiveIntensity=.9;return this.hp<=0?(this.alive=!1,this.deathT=0,!0):!1}update(e,t){const r=this.group.position;if(!this.alive){this.deathT+=e,this.group.rotation.x=-Math.min(1,this.deathT/.28)*(Math.PI/2),this.deathT>1.4&&(r.y-=e*1.1);for(const y of this.mats)y.emissiveIntensity=Math.max(0,y.emissiveIntensity-e*4);return this.deathT<2.6}const o=t.x-r.x,l=t.z-r.z,u=Math.hypot(o,l)||.001;this.group.lookAt(t.x,r.y,t.z);const h=this.hooks.playerEye(),d=this.hasLOS(h);this.strafeT-=e,this.strafeT<=0&&(this.strafeT=.7+Math.random()*1.5,Math.random()<.75&&(this.strafeDir*=-1));let p=0,v=0;!d||u>this.prefRange?(p=o/u,v=l/u):(p=-l/u*this.strafeDir,v=o/u*this.strafeDir,u<this.prefRange-3&&(p-=o/u*.7,v-=l/u*.7));const _=this.speed*(d&&u<=this.prefRange?.7:1),g=r.x,M=r.z;Sg(r,p*_*e,v*_*e,.38,this.hooks.colliders,this.hooks.bounds);const T=Math.hypot(r.x-g,r.z-M);T<_*e*.25?(this.blockedT+=e,this.blockedT>.45&&(this.blockedT=0,this.strafeDir*=-1,this.prefRange=5.5+Math.random()*7.5)):this.blockedT=0,this.lastX,this.lastZ,this.lastX=r.x,this.lastZ=r.z,this.phase+=e*(2+_);const A=T>.002?Math.sin(this.phase*4.2)*.55:0;this.legL.rotation.x=A,this.legR.rotation.x=-A,this.group.position.y=T>.002?Math.abs(Math.sin(this.phase*4.2))*.045:0;for(const y of this.mats)y.emissiveIntensity=Math.max(0,y.emissiveIntensity-e*5);return this.flashT>0&&(this.flashT-=e,this.flash.material.opacity=Math.max(0,this.flashT/.045)),this.flash.lookAt(h),this.burstLeft>0?(this.nextShot-=e,this.nextShot<=0&&(d&&u<36&&this.fireAt(h,u),this.burstLeft--,this.nextShot=.13,this.burstLeft===0&&(this.nextBurst=Math.max(.4,1.1+Math.random()*1.2-u*.012)))):(this.nextBurst-=e,this.nextBurst<=0&&d&&u<36&&(this.burstLeft=2+(Math.random()*3|0),this.nextShot=.06)),!0}dispose(e){e.remove(this.group),this.group.traverse(t=>{const r=t;r.geometry&&r.geometry.dispose()});for(const t of this.mats)t.dispose()}}class HE{constructor(){this.ctx=null,this.master=null,this.noise=null}ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e;const t=this.ctx.createDynamicsCompressor();t.threshold.value=-16,t.ratio.value=9,t.connect(this.ctx.destination),this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(t);const r=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,r,this.ctx.sampleRate);const o=this.noise.getChannelData(0);for(let l=0;l<r;l++)o[l]=Math.random()*2-1}burst(e){if(!this.ctx||!this.master||!this.noise)return;const t=this.ctx,r=t.currentTime+(e.delay||0),o=t.createBufferSource();o.buffer=this.noise,o.loop=!0;const l=t.createBiquadFilter();l.type=e.type||"lowpass",l.Q.value=.7,l.frequency.setValueAtTime(e.from,r),l.frequency.exponentialRampToValueAtTime(Math.max(40,e.to),r+e.dur);const u=t.createGain();u.gain.setValueAtTime(e.vol,r),u.gain.exponentialRampToValueAtTime(1e-4,r+e.dur),o.connect(l),l.connect(u),u.connect(this.master),o.start(r),o.stop(r+e.dur+.05)}tone(e,t,r,o="sine",l,u=0){if(!this.ctx||!this.master)return;const h=this.ctx,d=h.currentTime+u,p=h.createOscillator();p.type=o,p.frequency.setValueAtTime(e,d),l&&p.frequency.exponentialRampToValueAtTime(Math.max(20,l),d+t);const v=h.createGain();v.gain.setValueAtTime(r,d),v.gain.exponentialRampToValueAtTime(1e-4,d+t),p.connect(v),v.connect(this.master),p.start(d),p.stop(d+t+.05)}shoot(){this.burst({dur:.14,vol:.5,from:1700,to:170}),this.burst({dur:.05,vol:.22,from:3800,to:900,type:"highpass"}),this.tone(150,.13,.5,"triangle",42)}pistol(){this.burst({dur:.1,vol:.42,from:2600,to:320}),this.burst({dur:.04,vol:.18,from:4200,to:1400,type:"highpass"}),this.tone(220,.09,.34,"triangle",70)}sniper(){this.burst({dur:.42,vol:.8,from:1300,to:55}),this.burst({dur:.12,vol:.3,from:4200,to:700,type:"highpass"}),this.tone(88,.42,.62,"sine",26)}zoom(e){this.tone(e?620:1050,.05,.13,"square",e?1150:520)}buy(){this.tone(1320,.06,.17,"square"),this.tone(1760,.09,.15,"square",void 0,.055)}deny(){this.tone(230,.13,.2,"square",150)}switchW(){this.burst({dur:.05,vol:.12,from:1500,to:500}),this.tone(500,.04,.1,"square",800,.03)}enemyShoot(e){const t=Math.max(.06,Math.min(.3,2.4/Math.max(4,e)));this.burst({dur:.12,vol:t,from:1100,to:150}),this.tone(120,.1,t*.8,"triangle",40)}dry(){this.tone(1900,.045,.14,"square",1200)}hit(e){this.tone(e?2500:1650,.06,.2,"square",e?1900:1250)}kill(){this.tone(880,.09,.22,"square"),this.tone(1318,.14,.22,"square",void 0,.075)}hurt(){this.burst({dur:.16,vol:.35,from:520,to:90}),this.tone(95,.22,.4,"sine",42)}step(){this.burst({dur:.05,vol:.06,from:640,to:180})}jump(){this.burst({dur:.09,vol:.08,from:400,to:900,type:"bandpass"})}reload(){this.tone(950,.05,.18,"square",600),this.tone(700,.06,.2,"square",420,.42),this.burst({dur:.07,vol:.16,from:2200,to:500,delay:1.05}),this.tone(1150,.05,.2,"square",800,1.05)}pin(){this.tone(2300,.05,.18,"square",1600)}boom(){this.burst({dur:.65,vol:.85,from:900,to:55}),this.burst({dur:.22,vol:.35,from:3200,to:400,type:"highpass"}),this.tone(72,.55,.7,"sine",30)}beep(e=880,t=.1,r=.2){this.tone(e,t,r,"square")}win(){[523,659,784,1046].forEach((e,t)=>this.tone(e,.16,.22,"square",void 0,t*.11))}lose(){[392,330,262,196].forEach((e,t)=>this.tone(e,.22,.22,"triangle",void 0,t*.15))}}const B0=["Феникс","Гюрза","Кобра","Шакал","Коршун","Таран","Волк","Гадюка","Беркут","Росомаха"],z0=100,Vf=3,ls={ak:{name:"AK-47",dmg:27,cd:.096,mag:30,res:90,auto:!0,reload:1.9,recoil:.013,recoilYaw:.008,kick:.16,base:.0035,grow:.02,movePen:.006,recover:4.2,speed:1,reward:300},awp:{name:"AWP",dmg:115,cd:1.35,mag:5,res:30,auto:!1,reload:2.8,recoil:.09,recoilYaw:.004,kick:.05,base:.0012,grow:.03,movePen:0,recover:1.1,speed:.88,reward:100},deagle:{name:"DEAGLE",dmg:53,cd:.24,mag:7,res:35,auto:!1,reload:1.7,recoil:.038,recoilYaw:.006,kick:.1,base:.004,grow:.05,movePen:.035,recover:2.4,speed:1.02,reward:300}};class GE{constructor(e,t){this.state="attract",this.scene=new ax,this.clock=new Ix,this.raf=0,this.time=0,this.attractT=0,this.sfx=new HE,this.pos=new j,this.vel=new j,this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.kick=0,this.spread=0,this.shake=0,this.bobT=0,this.stepAcc=0,this.onGround=!0,this.locked=!1,this.hp=100,this.armor=0,this.nades=1,this.reloading=!1,this.reloadT=0,this.reloadTotal=1.9,this.cooldown=0,this.firing=!1,this.equipped="deagle",this.ammo={ak:{mag:30,res:90},awp:{mag:5,res:30},deagle:{mag:7,res:35}},this.scoped=!1,this.switchAnim=1,this.lastCX=0,this.lastCY=0,this.mouseInit=!1,this.keys={},this.deathT=0,this.round=0,this.scoreA=0,this.scoreB=0,this.kills=0,this.deaths=0,this.roundT=z0,this.bots=[],this.nadesFly=[],this.particles=[],this.tracers=[],this.shells=[],this.decals=[],this.weapon=new mi,this.weaponModels={ak:new mi,awp:new mi,deagle:new mi},this.weaponMuzzles={ak:new Xt,awp:new Xt,deagle:new Xt},this.flashT=0,this.boomT=0,this.ray=new dg,this.tmpV=new j,this.tmpD=new j,this.roundTimeout=0,this.onKeyDown=d=>{if(d.code==="Space"&&d.preventDefault(),this.keys[d.code]=!0,this.state==="playing"){if(d.code==="Escape"&&!this.locked){this.pause();return}d.code==="KeyR"&&this.startReload(),d.code==="KeyG"&&this.throwNade(),d.code==="Digit1"&&this.switchTo("ak"),d.code==="Digit2"&&this.switchTo("deagle"),d.code==="Digit3"&&this.switchTo("awp")}},this.onKeyUp=d=>{this.keys[d.code]=!1},this.onWheel=d=>{if(this.state!=="playing")return;const p=["ak","deagle","awp"],v=p.indexOf(this.equipped),_=p.length;this.switchTo(p[(v+(d.deltaY>0?1:_-1))%_])},this.onMouseMove=d=>{if(this.state==="playing")if(this.locked)this.yaw-=d.movementX*.0032,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-d.movementY*.0032));else{if(!this.mouseInit){this.lastCX=d.clientX,this.lastCY=d.clientY,this.mouseInit=!0;return}const p=d.movementX??d.clientX-this.lastCX,v=d.movementY??d.clientY-this.lastCY;this.lastCX=d.clientX,this.lastCY=d.clientY;const _=.0045;this.yaw-=p*_,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-v*_))}},this.onMouseDown=d=>{this.sfx.ensure(),this.state==="playing"&&(d.button===0?(this.firing=!0,this.tryShoot(),this.locked||this.requestLock()):d.button===2&&(this.equipped==="awp"?this.toggleScope():(this.firing=!0,this.tryShoot())))},this.onMouseUp=d=>{(d.button===0||d.button===2)&&(this.firing=!1)},this.onLockChange=()=>{const d=document.pointerLockElement===this.renderer.domElement;this.locked&&!d&&this.state==="playing"&&this.pause(),this.mouseInit=!1,this.locked=d,this.hooks.lockedChange(d)},this.onResize=()=>{const d=this.container.clientWidth,p=this.container.clientHeight;this.camera.aspect=d/p,this.camera.updateProjectionMatrix(),this.renderer.setSize(d,p),this.composer.setSize(d,p)},this.onVisibility=()=>{document.hidden&&this.state==="playing"&&this.pause()},this.onContext=d=>d.preventDefault(),this.loop=()=>{this.raf=requestAnimationFrame(this.loop);const d=Math.min(.05,this.clock.getDelta());this.time+=d;const p=this.scene.getObjectByName("dust");p&&(p.rotation.y+=d*.012);const v=this.scene.getObjectByName("clouds");if(v&&(v.rotation.y+=d*.007),this.state==="attract"){this.attractT+=d*.09;const M=17;this.camera.position.set(Math.sin(this.attractT)*M,7.5+Math.sin(this.attractT*.6)*2,Math.cos(this.attractT)*M),this.camera.lookAt(0,1.2,0),this.weapon.visible=!1}else this.weapon.visible=!0,this.state==="playing"?this.updatePlaying(d):this.state==="dying"&&this.updateDying(d),this.updateFx(d),this.state!=="playing"&&this.updateNades(d);const _=this.renderer.domElement,g=this.state==="playing"||this.state==="dying"?"none":"";_.dataset.cur!==g&&(_.dataset.cur=g,_.style.cursor=g),this.composer.render()},this.container=e,this.hooks=t,this.renderer=new PE({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=H0,e.appendChild(this.renderer.domElement),this.renderer.toneMapping=mc,this.renderer.toneMappingExposure=1.06,this.scene.background=new mt(9677244),this.scene.fog=new Jd(11450813,34,95),this.camera=new ri(75,e.clientWidth/e.clientHeight,.05,220),this.camera.rotation.order="YXZ",this.scene.add(this.camera);const r=new Tx(13624053,10193507,1.1);this.scene.add(r);const o=new Rx(16772300,2.6);o.position.set(-26,38,-18),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-34,o.shadow.camera.right=34,o.shadow.camera.top=34,o.shadow.camera.bottom=-34,o.shadow.camera.far=100,o.shadow.bias=-6e-4,this.scene.add(o),this.scene.add(new Cx(8952234,.4)),this.map=zE(this.scene),this.gunLight=new ho(16761707,0,9,2),this.gunLight.position.set(.3,-.15,-.7),this.camera.add(this.gunLight),this.boomLight=new ho(16748608,0,22,2),this.scene.add(this.boomLight),this.buildWeapons(),this.flash=this.buildFlash(.55),this.weaponMuzzles.deagle.add(this.flash);for(let d=0;d<24;d++){const p=new St(new ii(1,1,1),new jn({color:16765562,transparent:!0,opacity:0,blending:ca,depthWrite:!1}));p.visible=!1,this.scene.add(p),this.tracers.push({m:p,life:0})}const l=new ii(.016,.05,.016),u=new vn({color:14263361,metalness:.85,roughness:.35});for(let d=0;d<22;d++){const p=new St(l,u);p.visible=!1,this.scene.add(p),this.shells.push({m:p,v:new j,rv:new j,life:0})}const h=new Kn(.1,.1);for(let d=0;d<40;d++){const p=new St(h,new jn({color:1314826,transparent:!0,opacity:0,depthWrite:!1}));p.visible=!1,this.scene.add(p),this.decals.push({m:p,life:0})}this.composer=new FE(this.renderer),this.composer.addPass(new OE(this.scene,this.camera)),this.composer.addPass(new pa(new st(e.clientWidth,e.clientHeight),.5,.5,.82)),this.composer.addPass(new BE),this.pos.set(this.map.playerSpawn.x,0,this.map.playerSpawn.z),this.bindEvents(),this.loop()}buildWeapons(){const e=this.weapon,t=new vn({color:2500652,roughness:.5,metalness:.65}),r=new vn({color:1776928,roughness:.4,metalness:.75}),o=new vn({color:8145444,roughness:.75,metalness:.1}),l=new vn({color:4345914,roughness:.7,metalness:.25}),u=this.weaponModels.ak,h=(x,I,O,R,L,C,D,E=0)=>{const P=new St(new ii(x,I,O),R);P.position.set(L,C,D),P.rotation.x=E,u.add(P)};h(.075,.095,.5,t,0,0,-.04);const d=new St(new Vi(.016,.016,.36,10),t);d.rotation.x=Math.PI/2,d.position.set(0,.022,-.46),u.add(d),h(.068,.072,.24,o,0,-.004,-.28),h(.03,.03,.3,t,0,.062,-.32),h(.058,.2,.1,t,0,-.16,.03,.22),h(.06,.085,.24,o,0,-.012,.3),h(.012,.05,.012,t,0,.078,-.6),h(.05,.03,.02,t,0,.062,.1),this.weaponMuzzles.ak.position.set(0,.022,-.66),u.add(this.weaponMuzzles.ak);const p=this.weaponModels.deagle,v=(x,I,O,R,L,C,D,E=0)=>{const P=new St(new ii(x,I,O),R);P.position.set(L,C,D),P.rotation.x=E,p.add(P)};v(.052,.062,.3,r,0,.02,-.02),v(.046,.05,.26,t,0,-.03,-.02),v(.048,.15,.07,r,0,-.12,.09,-.22),v(.02,.05,.05,t,0,-.065,.02),v(.014,.03,.014,t,0,.062,-.12),v(.04,.02,.016,t,0,.058,.11);const _=new St(new Vi(.012,.012,.07,10),r);_.rotation.x=Math.PI/2,_.position.set(0,.02,-.19),p.add(_),this.weaponMuzzles.deagle.position.set(0,.02,-.24),p.add(this.weaponMuzzles.deagle);const g=this.weaponModels.awp,M=(x,I,O,R,L,C,D,E=0)=>{const P=new St(new ii(x,I,O),R);P.position.set(L,C,D),P.rotation.x=E,g.add(P)};M(.06,.085,.62,l,0,0,0);const T=new St(new Vi(.014,.014,.52,10),r);T.rotation.x=Math.PI/2,T.position.set(0,.015,-.56),g.add(T),M(.034,.034,.1,r,0,.015,-.85);const A=new St(new Vi(.03,.03,.24,12),r);A.rotation.x=Math.PI/2,A.position.set(0,.085,-.06),g.add(A);const y=new St(new Vi(.036,.03,.05,12),t);y.rotation.x=Math.PI/2,y.position.set(0,.085,.08),g.add(y),M(.012,.04,.012,t,0,.045,-.06),M(.055,.11,.24,l,0,-.015,.42),M(.05,.05,.1,l,0,.055,.34),M(.05,.12,.08,r,0,-.1,.04,.1),M(.05,.06,.08,l,0,-.06,-.28),M(.014,.045,.014,t,0,.045,.3),this.weaponMuzzles.awp.position.set(0,.015,-.92),g.add(this.weaponMuzzles.awp);for(const x of["ak","awp","deagle"])e.add(this.weaponModels[x]);this.weaponModels.ak.visible=!1,this.weaponModels.awp.visible=!1,this.weaponModels.deagle.visible=!0,e.position.set(.24,-.22,-.45),this.camera.add(e)}buildFlash(e){const t=new jn({color:16763258,transparent:!0,opacity:0,blending:ca,depthWrite:!1,side:Ci}),r=new mi,o=new St(new Kn(e,e),t),l=new St(new Kn(e,e*.36),t);l.rotation.z=Math.PI/2,r.add(o,l);const u=new St(new Kn(.01,.01),t);return u.add(r),u}bindEvents(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("wheel",this.onWheel,{passive:!0}),window.addEventListener("resize",this.onResize),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("pointerlockchange",this.onLockChange),document.addEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.addEventListener("contextmenu",this.onContext)}requestLock(){try{const e=this.renderer.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}startMatch(){this.sfx.ensure(),this.scoreA=0,this.scoreB=0,this.round=0,this.kills=0,this.deaths=0,this.equipped="deagle",this.applyWeaponVisibility(),this.hooks.score(0,0),this.hooks.kills(0),this.startRound()}resume(){this.state==="paused"&&(this.state="playing",this.requestLock())}pause(){this.state==="playing"&&(this.state="paused",this.firing=!1,this.mouseInit=!1,this.scoped&&this.toggleScope(!1),document.pointerLockElement?document.exitPointerLock():this.hooks.lockedChange(!1))}toMenu(){window.clearTimeout(this.roundTimeout),this.clearEntities(),this.state="attract",this.scoped&&this.toggleScope(!1),document.pointerLockElement&&document.exitPointerLock()}dispose(){cancelAnimationFrame(this.raf),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("wheel",this.onWheel),window.removeEventListener("resize",this.onResize),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mousedown",this.onMouseDown),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("pointerlockchange",this.onLockChange),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.removeEventListener("contextmenu",this.onContext),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement)}clearEntities(){for(const e of this.bots)e.dispose(this.scene);this.bots=[];for(const e of this.nadesFly)this.scene.remove(e.m);this.nadesFly=[];for(const e of this.particles)e.life=0,e.m.visible=!1}startRound(){this.round++,this.clearEntities();const e=this.map.playerSpawn;this.pos.set(e.x,0,e.z),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.recoilPitch=0,this.recoilYaw=0,this.spread=0,this.shake=0,this.kick=0,this.hp=100,this.armor=100;for(const l of["ak","awp","deagle"])this.ammo[l]={mag:ls[l].mag,res:ls[l].res};this.nades=Math.min(3,this.round),this.reloading=!1,this.firing=!1,this.scoped=!1,this.hooks.scoped(!1),this.roundT=z0;const t=Math.min(8,2+this.round),r=[...this.map.botSpawns].sort(()=>Math.random()-.5),o={colliders:this.map.colliders,bounds:this.map.bounds,solids:this.map.solids,playerEye:()=>this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z),playerSpeedXZ:()=>Math.hypot(this.vel.x,this.vel.z),tracer:(l,u,h)=>this.spawnTracer(l,u,h),damagePlayer:(l,u)=>this.damagePlayer(l,u),sfx:this.sfx};for(let l=0;l<t;l++){const u=r[l%r.length],h=new VE(B0[l%B0.length],u.x+(Math.random()-.5),u.z+(Math.random()-.5),3+this.round*.22+Math.random()*.3,o);h.group.rotation.y=Math.random()*Math.PI*2,this.scene.add(h.group),h.group.updateMatrixWorld(!0),this.bots.push(h)}this.state="playing",Vf-this.scoreA,this.hooks.banner({title:`РАУНД ${this.round}`,sub:`противников: ${t} · стволы: [1][2][3] / колесо`,tone:"info"}),this.sfx.beep(760,.12,.22),this.requestLock()}endRound(e){if(this.state!=="playing"&&this.state!=="dying")return;this.state="roundEnd",this.firing=!1,this.scoped&&this.toggleScope(!1),this.camera.fov=75,this.camera.updateProjectionMatrix(),e?this.scoreA++:this.scoreB++,this.hooks.score(this.scoreA,this.scoreB),document.pointerLockElement&&document.exitPointerLock();const t=this.scoreA>=Vf||this.scoreB>=Vf;this.hooks.banner({title:e?"РАУНД ВЫИГРАН":"РАУНД ПРОИГРАН",sub:`счёт ${this.scoreA} : ${this.scoreB}`,tone:e?"win":"lose"}),e?this.sfx.win():this.sfx.lose(),this.roundTimeout=window.setTimeout(()=>{t?this.finish(this.scoreA>this.scoreB):this.startRound()},3100)}finish(e){this.scoped&&this.toggleScope(!1),this.camera.fov=75,this.camera.updateProjectionMatrix(),this.hooks.over({result:e?"victory":"defeat",kills:this.kills,deaths:this.deaths,won:this.scoreA,lost:this.scoreB}),this.clearEntities(),this.state="attract"}startReload(){const e=ls[this.equipped],t=this.ammo[this.equipped];this.reloading||t.mag>=e.mag||this.state!=="playing"||(t.res<=0&&(t.res=e.mag,this.hooks.feed({killer:"Снабжение",victim:`+${e.mag} патронов`,head:!1,byPlayer:!0})),this.scoped&&this.toggleScope(!1),this.reloading=!0,this.reloadTotal=e.reload,this.reloadT=e.reload,this.sfx.reload())}tryShoot(){if(this.state!=="playing"||this.cooldown>0||this.reloading||this.switchAnim<1)return;const e=ls[this.equipped],t=this.ammo[this.equipped];if(t.mag<=0){this.sfx.dry(),this.firing=!1,this.startReload();return}t.mag--,this.cooldown=e.cd,this.equipped==="awp"?this.sfx.sniper():this.equipped==="deagle"?this.sfx.pistol():this.sfx.shoot(),this.flashT=this.equipped==="awp"?.07:.04,this.flash.rotation.z=Math.random()*Math.PI;const r=(this.equipped==="awp"?1.2:.75)+Math.random()*.5;this.flash.scale.set(r,r,r),this.gunLight.intensity=this.equipped==="awp"?40:26,this.kick=Math.min(1.6,this.kick+1),this.recoilPitch+=e.recoil+Math.random()*e.recoil*.5,this.recoilYaw+=(Math.random()-.5)*e.recoilYaw*2,this.spread=Math.min(1,this.spread+(this.onGround?e.kick:e.kick*1.6)),this.spawnShell(),this.camera.getWorldDirection(this.tmpD);const o=Math.hypot(this.vel.x,this.vel.z);let l;this.equipped==="awp"?l=this.scoped?.0012+this.spread*.004:.075+this.spread*.03+(o>1.2?.05:0):l=e.base+this.spread*e.grow+(o>1.2?e.movePen:0)+(this.onGround?0:.012),this.tmpD.x+=(Math.random()-.5)*2*l,this.tmpD.y+=(Math.random()-.5)*2*l,this.tmpD.z+=(Math.random()-.5)*2*l,this.tmpD.normalize(),this.camera.getWorldPosition(this.tmpV),this.ray.set(this.tmpV,this.tmpD),this.ray.far=140;const u=[...this.map.solids];for(const v of this.bots)v.alive&&u.push(...v.hitboxes);const h=this.ray.intersectObjects(u,!1),d=new j;this.weaponMuzzles[this.equipped].getWorldPosition(d);const p=h.length?h[0].point:this.tmpV.clone().addScaledVector(this.tmpD,120);if(this.spawnTracer(d,p,16765562),this.burst(d,10263184,2,.6,.6,-2.2),h.length){const v=h[0].object.userData;if(v.bot&&v.bot.alive){const _=v.part==="head",g=v.bot.hit(v.part||"body",_?e.dmg*4:e.dmg);this.burst(h[0].point,10361627,_?16:10,3.4,.5),g?this.onBotKilled(v.bot,_):(this.hooks.hitmark(_?"head":"hit"),this.sfx.hit(_))}else if(this.burst(h[0].point,14205066,7,2.6,.35),this.burst(h[0].point,16773304,4,3.4,.25),h[0].face){const _=new j().copy(h[0].face.normal).transformDirection(h[0].object.matrixWorld);this.addDecal(h[0].point,_)}}}onBotKilled(e,t){this.kills++,this.hooks.kills(this.kills),this.hooks.hitmark("kill"),this.hooks.feed({killer:"ВЫ",victim:e.name,head:t,byPlayer:!0}),this.sfx.kill();const r=e.group.position;this.burst(new j(r.x,r.y+1,r.z),10361627,18,4.2,.7)}damagePlayer(e,t){if(this.state!=="playing")return;let r=e;if(this.armor>0){const h=Math.min(this.armor,r*.5);this.armor-=h,r-=h}this.hp-=r,this.shake=Math.min(1.2,this.shake+r/22);const o=t.x-this.pos.x,l=t.z-this.pos.z,u=this.normAngle(this.yaw+Math.PI-Math.atan2(o,l));if(this.hooks.damage(r,u),this.sfx.hurt(),this.hp<=0){this.hp=0,this.deaths++;const h=this.bots.find(d=>d.group.position===t);this.hooks.feed({killer:h?h.name:"Взрыв",victim:"ВЫ",head:!1,byPlayer:!1}),this.state="dying",this.deathT=0,this.firing=!1,this.hooks.banner({title:"ВЫ УБИТЫ",sub:"раунд потерян",tone:"lose"}),this.sfx.lose()}}normAngle(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}switchTo(e){this.equipped===e||this.state!=="playing"||(this.equipped=e,this.reloading=!1,this.firing=!1,this.scoped&&this.toggleScope(!1),this.switchAnim=0,this.applyWeaponVisibility(),this.sfx.switchW())}applyWeaponVisibility(){this.weaponModels.ak.visible=this.equipped==="ak",this.weaponModels.awp.visible=this.equipped==="awp",this.weaponModels.deagle.visible=this.equipped==="deagle",this.weaponMuzzles[this.equipped].add(this.flash)}toggleScope(e){if(this.equipped!=="awp"&&e!==!1)return;const t=e!==void 0?e:!this.scoped;t!==this.scoped&&(this.scoped=t,this.spread=Math.min(this.spread,.15),this.sfx.zoom(t),this.hooks.scoped(t))}spawnShell(){const e=this.shells.find(l=>l.life<=0);if(!e)return;e.m.visible=!0,this.camera.getWorldPosition(this.tmpV);const t=new j(1,0,0).applyQuaternion(this.camera.quaternion),r=new j(0,1,0).applyQuaternion(this.camera.quaternion),o=new j(0,0,-1).applyQuaternion(this.camera.quaternion);e.m.position.copy(this.tmpV).addScaledVector(t,.22).addScaledVector(r,-.1).addScaledVector(o,.2),e.v.copy(t).multiplyScalar(1.6+Math.random()*1.2).addScaledVector(r,1.6+Math.random()*1.4).addScaledVector(o,.5),e.rv.set((Math.random()-.5)*25,(Math.random()-.5)*25,(Math.random()-.5)*25),e.life=1.1}addDecal(e,t){const r=this.decals.find(l=>l.life<=0);if(!r)return;r.m.position.copy(e).addScaledVector(t,.015),r.m.lookAt(this.tmpV.copy(e).add(t)),r.m.rotation.z=Math.random()*Math.PI;const o=.7+Math.random()*.9;r.m.scale.set(o,o,o),r.m.visible=!0,r.life=7}throwNade(){if(this.nades<=0||this.state!=="playing")return;this.nades--,this.sfx.pin();const e=new St(new _c(.09,10,8),new vn({color:4016684,roughness:.6}));e.castShadow=!0,this.camera.getWorldPosition(this.tmpV),this.camera.getWorldDirection(this.tmpD),e.position.copy(this.tmpV).addScaledVector(this.tmpD,.5);const t=this.tmpD.clone().multiplyScalar(13.5);t.y+=3.4,t.x+=this.vel.x*.35,t.z+=this.vel.z*.35,this.scene.add(e),this.nadesFly.push({m:e,v:t,fuse:1.45})}updateNades(e){for(let t=this.nadesFly.length-1;t>=0;t--){const r=this.nadesFly[t];r.v.y-=21*e,r.m.position.addScaledVector(r.v,e);const o=r.m.position;o.y<.09&&(o.y=.09,r.v.y=Math.abs(r.v.y)*.42,r.v.x*=.72,r.v.z*=.72);for(const u of this.map.colliders)if(o.x>u.minX-.09&&o.x<u.maxX+.09&&o.z>u.minZ-.09&&o.z<u.maxZ+.09&&o.y<3){const h=o.x-(u.minX-.09),d=u.maxX+.09-o.x,p=o.z-(u.minZ-.09),v=u.maxZ+.09-o.z,_=Math.min(h,d,p,v);_===h?(o.x=u.minX-.09,r.v.x=-Math.abs(r.v.x)*.5):_===d?(o.x=u.maxX+.09,r.v.x=Math.abs(r.v.x)*.5):_===p?(o.z=u.minZ-.09,r.v.z=-Math.abs(r.v.z)*.5):(o.z=u.maxZ+.09,r.v.z=Math.abs(r.v.z)*.5)}r.fuse-=e;const l=r.fuse<.5?1+Math.sin(this.time*30)*.15:1;r.m.scale.set(l,l,l),r.fuse<=0&&(this.explode(o.clone()),this.scene.remove(r.m),this.nadesFly.splice(t,1))}}explode(e){this.sfx.boom(),this.boomLight.position.copy(e),this.boomLight.intensity=260,this.boomT=.3,this.shake=Math.min(1.4,this.shake+.9),this.burst(e,16748608,26,9,.7,5),this.burst(e,16769184,18,12,.4,6),this.burst(e,5591114,20,5,1.1,2);for(const r of this.bots){if(!r.alive)continue;const o=r.group.position.distanceTo(e);o<6.5&&r.hit("body",130*(1-o/6.5))&&this.onBotKilled(r,!1)}const t=Math.hypot(this.pos.x-e.x,this.pos.z-e.z);t<5.5&&this.damagePlayer(50*(1-t/5.5),e)}burst(e,t,r,o,l,u=9){for(let h=0;h<r;h++){let d=this.particles.find(v=>v.life<=0);if(!d){if(this.particles.length>280)return;const v=new St(new ii(.06,.06,.06),new jn({color:t,transparent:!0}));this.scene.add(v),d={m:v,v:new j,g:u,life:0,max:1},this.particles.push(d)}d.m.material.color.set(t),d.m.visible=!0,d.m.position.copy(e),d.v.set((Math.random()-.5)*2,Math.random()*1.4,(Math.random()-.5)*2).normalize().multiplyScalar(o*(.4+Math.random()*.8)),d.g=u,d.max=l*(.6+Math.random()*.7),d.life=d.max;const p=.6+Math.random();d.m.scale.set(p,p,p)}}spawnTracer(e,t,r){const o=this.tracers.find(d=>d.life<=0);if(!o)return;const l=e.clone().add(t).multiplyScalar(.5),u=e.distanceTo(t);o.m.position.copy(l),o.m.scale.set(.022,.022,Math.max(.1,u)),o.m.lookAt(t);const h=o.m.material;h.color.set(r),h.opacity=.85,o.m.visible=!0,o.life=.07}updateFx(e){for(const t of this.particles)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.v.y-=t.g*e,t.m.position.addScaledVector(t.v,e),t.m.position.y<.02&&(t.m.position.y=.02,t.v.y=Math.abs(t.v.y)*.3,t.v.x*=.7,t.v.z*=.7),t.m.material.opacity=Math.min(1,t.life/t.max*1.4)}for(const t of this.shells)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.v.y-=13*e,t.m.position.addScaledVector(t.v,e),t.m.position.y<.02&&(t.m.position.y=.02,t.v.y=Math.abs(t.v.y)*.35,t.v.x*=.6,t.v.z*=.6,t.rv.multiplyScalar(.5)),t.m.rotation.x+=t.rv.x*e,t.m.rotation.y+=t.rv.y*e,t.m.rotation.z+=t.rv.z*e}for(const t of this.decals)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.material.opacity=Math.min(.7,t.life*.5)}for(const t of this.tracers)if(!(t.life<=0)){if(t.life-=e,t.life<=0){t.m.visible=!1;continue}t.m.material.opacity=t.life/.07*.85}this.flashT>0?(this.flashT-=e,this.setFlashOpacity(Math.max(0,this.flashT/.04))):this.setFlashOpacity(0),this.gunLight.intensity=Math.max(0,this.gunLight.intensity-e*260),this.boomT>0&&(this.boomT-=e,this.boomLight.intensity=Math.max(0,this.boomT/.3)*260),this.recoilPitch*=Math.exp(-9*e),this.recoilYaw*=Math.exp(-9*e),this.kick=Math.max(0,this.kick-e*9),this.shake=Math.max(0,this.shake-e*2.6)}setFlashOpacity(e){this.flash.traverse(t=>{const r=t;r.material&&(r.material.opacity=e)})}updateDying(e){this.deathT+=e,this.camera.position.set(this.pos.x,Math.max(.45,this.pos.y+1.55-this.deathT*1.4),this.pos.z),this.camera.rotation.set(this.pitch*.4-this.deathT*.25,this.yaw,Math.min(1.15,this.deathT*1.6)),this.deathT>1.9&&this.endRound(!1)}updatePlaying(e){const t=(this.keys.KeyW?1:0)-(this.keys.KeyS?1:0),r=(this.keys.KeyD?1:0)-(this.keys.KeyA?1:0),o=!!this.keys.ShiftLeft||!!this.keys.ShiftRight,l=ls[this.equipped],u=(o?2.6:5.7)*l.speed*(this.scoped?.42:1),h=Math.sin(this.yaw),d=Math.cos(this.yaw);let p=-h*t+d*r,v=-d*t-h*r;const _=Math.hypot(p,v);_>.01?(p=p/_*u,v=v/_*u):(p=0,v=0);const g=this.onGround?1-Math.exp(-13*e):1-Math.exp(-3.2*e);this.vel.x+=(p-this.vel.x)*g,this.vel.z+=(v-this.vel.z)*g,this.keys.Space&&this.onGround&&(this.vel.y=8.2,this.onGround=!1,this.sfx.jump()),this.vel.y-=24*e,this.pos.y+=this.vel.y*e,this.pos.y<=0&&(this.pos.y=0,this.vel.y=0,this.onGround=!0),Sg(this.pos,this.vel.x*e,this.vel.z*e,.42,this.map.colliders,this.map.bounds);const M=Math.hypot(this.vel.x,this.vel.z);if(this.onGround&&M>.6){this.bobT+=M*e*1.5,this.stepAcc+=M*e;const B=o?2.4:1.9;this.stepAcc>B&&(this.stepAcc=0,this.sfx.step())}const T=this.onGround&&M>.6?Math.sin(this.bobT*2)*.032*Math.min(1,M/5):0,A=(Math.random()-.5)*this.shake*.05,y=(Math.random()-.5)*this.shake*.05,x=(Math.random()-.5)*this.shake*.03;this.camera.position.set(this.pos.x+A,this.pos.y+1.55+T+y,this.pos.z),this.camera.rotation.set(this.pitch+this.recoilPitch+y*.4,this.yaw+this.recoilYaw,x);const I=this.scoped?18:75;Math.abs(this.camera.fov-I)>.05&&(this.camera.fov+=(I-this.camera.fov)*Math.min(1,16*e),this.camera.updateProjectionMatrix());const O=this.weapon;O.visible=!this.scoped;const R=Math.sin(Math.min(1,this.switchAnim)*Math.PI)*(this.switchAnim>=1?0:.16),L=.24+Math.sin(this.bobT)*.006*Math.min(1,M/5)-this.vel.x*.004*d-this.vel.z*.004*-h;O.position.x+=(L-O.position.x)*Math.min(1,12*e),O.position.y=-.22+Math.abs(Math.cos(this.bobT))*.008*Math.min(1,M/5)-R,O.position.z=-.45+this.kick*.055;let C=this.kick*.1;this.reloading&&(C-=Math.sin(Math.min(1,1-this.reloadT/this.reloadTotal)*Math.PI)*.85),this.switchAnim<1&&(C-=Math.sin(this.switchAnim*Math.PI)*.5),O.rotation.x=C,O.rotation.z=this.kick*.02;const D=M>1.2;this.spread=Math.max(0,this.spread-e*l.recover*(D?.45:1)-(this.onGround&&!D?e*1.2:0));const E=ls[this.equipped];if(this.cooldown=Math.max(0,this.cooldown-e),this.switchAnim=Math.min(1,this.switchAnim+e/.28),this.reloading&&(this.reloadT-=e,this.reloadT<=0)){this.reloading=!1;const B=this.ammo[this.equipped],ne=Math.min(E.mag-B.mag,B.res);B.mag+=ne,B.res-=ne}this.firing&&E.auto&&this.tryShoot();const P=this.tmpV.set(this.pos.x,this.pos.y+1.55,this.pos.z);let H=0;for(let B=this.bots.length-1;B>=0;B--){const ne=this.bots[B],de=ne.update(e,P);ne.alive&&H++,de||(ne.dispose(this.scene),this.bots.splice(B,1))}for(let B=0;B<this.bots.length;B++)for(let ne=B+1;ne<this.bots.length;ne++){const de=this.bots[B].group.position,Z=this.bots[ne].group.position,le=Z.x-de.x,Q=Z.z-de.z,X=Math.hypot(le,Q);if(X<.9&&X>.001){const ae=(.9-X)/2;de.x-=le/X*ae,de.z-=Q/X*ae,Z.x+=le/X*ae,Z.z+=Q/X*ae}}this.updateNades(e),this.roundT-=e,H===0&&this.bots.every(B=>!B.alive)?(this.roundT=Math.max(this.roundT,.9),this.endRound(!0)):this.roundT<=0&&(this.roundT=0,this.endRound(!1));const k=this.ammo[this.equipped];this.hooks.hud({hp:Math.max(0,Math.ceil(this.hp)),armor:Math.max(0,Math.ceil(this.armor)),mag:k.mag,res:k.res,nades:this.nades,timer:Math.max(0,Math.ceil(this.roundT)),spreadPx:Math.round(this.scoped?2:5+this.spread*30+(D?4:0)),enemies:H,reloading:this.reloading,weapon:`${this.equipped==="ak"?"1":this.equipped==="deagle"?"2":"3"}·${ls[this.equipped].name}`}),this.hooks.radar({px:this.pos.x,pz:this.pos.z,yaw:this.yaw,dots:this.bots.filter(B=>B.alive).map(B=>({x:B.group.position.x,z:B.group.position.z}))})}}const ki=(s,e)=>{s&&s.dataset.v!==e&&(s.dataset.v=e,s.textContent=e)},V0=(s,e)=>{s&&(s.classList.remove(e),s.offsetWidth,s.classList.add(e))},WE=()=>V.jsx("svg",{viewBox:"0 0 16 16",className:"h-3.5 w-3.5 fill-current",children:V.jsx("path",{d:"M8 1a6 6 0 0 0-6 6c0 2.2 1.2 4 3 5v3h2v-2h2v2h2v-3c1.8-1 3-2.8 3-5a6 6 0 0 0-6-6zM5.5 9A1.5 1.5 0 1 1 7 7.5 1.5 1.5 0 0 1 5.5 9zm5 0A1.5 1.5 0 1 1 12 7.5 1.5 1.5 0 0 1 10.5 9z"})}),XE=()=>V.jsx("svg",{viewBox:"0 0 16 16",className:"h-4 w-4 fill-current",children:V.jsx("path",{d:"M8 1 2 3.5v4C2 11.6 4.6 14.6 8 15.5c3.4-.9 6-3.9 6-8v-4L8 1z"})}),qE=({dim:s})=>V.jsxs("svg",{viewBox:"0 0 16 16",className:`h-4 w-4 ${s?"opacity-25":""}`,children:[V.jsx("path",{className:"fill-current",d:"M9 2h3v1.5h-2l-1 1.6A5 5 0 1 1 6.2 4L9 2z"}),V.jsx("circle",{cx:"8",cy:"9.5",r:"4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.4"})]}),YE=()=>V.jsx("span",{className:"mx-1.5 rounded-sm border border-[#3a4a5c] bg-[#141c25] px-1.5 py-px text-[10px] font-semibold tracking-wider text-[#9fb2c6]",children:"AK-47"});function jE(){const s=yt.useRef(null),e=yt.useRef(null),t=yt.useRef(null),[r,o]=yt.useState("menu"),[l,u]=yt.useState(!1),[h,d]=yt.useState([]),[p,v]=yt.useState(null),[_,g]=yt.useState(null),[M,T]=yt.useState(!1),[A,y]=yt.useState(1),[x,I]=yt.useState(!1),[O,R]=yt.useState(!1),L=yt.useRef(null),C=yt.useRef(null),D=yt.useRef(null),E=yt.useRef(null),P=yt.useRef(null),H=yt.useRef(null),k=yt.useRef(null),B=yt.useRef(null),ne=yt.useRef(null),de=yt.useRef(null),Z=yt.useRef(null),le=yt.useRef(null),Q=yt.useRef(null),X=yt.useRef(null),ae=yt.useRef(null),fe=yt.useRef(null),U=yt.useRef(null),J=yt.useRef(0),Fe=yt.useRef(0),Ge=yt.useRef(null),ze=yt.useRef(null),oe=yt.useRef(null),_e=yt.useRef(null),G=yt.useRef(0),pe=yt.useRef(!1),xe=yt.useRef(1);yt.useEffect(()=>{if(!s.current)return;const qe=Ee=>{const et=t.current;if(!et)return;const Oe=et.getContext("2d");if(!Oe)return;const wt=150,bt=wt/2;Oe.clearRect(0,0,wt,wt),Oe.save(),Oe.translate(bt,bt),Oe.beginPath(),Oe.arc(0,0,bt-2,0,7),Oe.fillStyle="rgba(11,17,23,0.85)",Oe.fill(),Oe.strokeStyle="rgba(242,163,60,0.55)",Oe.lineWidth=1.5,Oe.stroke(),Oe.beginPath(),Oe.arc(0,0,(bt-2)*.55,0,7),Oe.strokeStyle="rgba(139,152,167,0.22)",Oe.lineWidth=1,Oe.stroke();const Nt=(bt-8)/22,Ct=Math.cos(Ee.yaw),Ot=Math.sin(Ee.yaw),q=(S,$)=>[S*Ct-$*Ot,S*Ot+$*Ct];Oe.strokeStyle="rgba(139,152,167,0.3)",Oe.beginPath(),[[-20,-20],[20,-20],[20,20],[-20,20]].forEach(([S,$],ie)=>{const[he,Te]=q(S-Ee.px,$-Ee.pz);ie===0?Oe.moveTo(he*Nt,Te*Nt):Oe.lineTo(he*Nt,Te*Nt)}),Oe.closePath(),Oe.stroke();const[vt,N]=q(0,-1);Oe.fillStyle="#f2a33c",Oe.beginPath(),Oe.arc(vt*(bt-9),N*(bt-9),2.4,0,7),Oe.fill();for(const S of Ee.dots){const[$,ie]=q(S.x-Ee.px,S.z-Ee.pz);Math.hypot($,ie)*Nt>bt-8||(Oe.fillStyle="#e0453a",Oe.fillRect($*Nt-2.5,ie*Nt-2.5,5,5))}Oe.fillStyle="#eae6dc",Oe.beginPath(),Oe.moveTo(0,-6),Oe.lineTo(4.4,5),Oe.lineTo(-4.4,5),Oe.closePath(),Oe.fill(),Oe.restore()},lt=Ee=>{ki(L.current,String(Ee.hp)),ki(D.current,String(Ee.armor)),C.current&&(C.current.style.width=`${Ee.hp}%`,C.current.style.background=Ee.hp>55?"#7fb069":Ee.hp>25?"#f2a33c":"#e0453a"),E.current&&(E.current.style.width=`${Ee.armor}%`);const et=P.current;ki(et,String(Ee.mag)),et&&(et.style.color=Ee.mag===0?"#e0453a":Ee.mag<=5?"#f2a33c":"#eae6dc"),ki(H.current,`/ ${Ee.res}`);const Oe=Math.floor(Ee.timer/60),wt=String(Ee.timer%60).padStart(2,"0");ki(k.current,`${Oe}:${wt}`),k.current&&k.current.classList.toggle("blink-fast",Ee.timer<=10),ki(B.current,`ОСТАЛОСЬ: ${Ee.enemies}`),le.current&&le.current.style.setProperty("--g",`${Ee.spreadPx}px`),U.current&&(U.current.style.display=Ee.reloading?"block":"none");const bt=Ee.hp>0&&Ee.hp<35;bt!==pe.current&&(pe.current=bt,T(bt)),Ee.nades!==xe.current&&(xe.current=Ee.nades,y(Ee.nades)),ki(Ge.current,Ee.weapon);const Nt=Ee.weapon.charAt(0),Ct=[[ze,"1"],[oe,"2"],[_e,"3"]];for(const[Ot,q]of Ct){const Ht=Ot.current;if(!Ht||!Ht.parentElement)continue;const vt=Nt===q;Ht.dataset.on!==String(vt)&&(Ht.dataset.on=String(vt),Ht.style.color=vt?"#f2a33c":"#8b98a7",Ht.parentElement.style.borderColor=vt?"#f2a33c":"#2b3844",Ht.parentElement.style.background=vt?"rgba(34,20,9,0.9)":"rgba(18,24,31,0.85)")}},gt=new GE(s.current,{hud:lt,score:(Ee,et)=>{ki(ne.current,String(Ee)),ki(de.current,String(et))},kills:Ee=>ki(Z.current,String(Ee)),hitmark:Ee=>{const et=Q.current;et&&(et.classList.toggle("kill",Ee==="kill"),et.style.color=Ee==="kill"?"#e0453a":Ee==="head"?"#f2a33c":"#ffffff",V0(et,"go"))},damage:(Ee,et)=>{const Oe=X.current;Oe&&(Oe.style.transition="none",Oe.style.opacity=String(Math.min(.9,.3+Ee/40)),window.clearTimeout(J.current),J.current=window.setTimeout(()=>{Oe&&(Oe.style.transition="opacity .5s ease",Oe.style.opacity="0")},90)),ae.current&&(ae.current.style.transform=`rotate(${et}rad)`),V0(fe.current,"show")},feed:Ee=>{const et=++G.current;d(Oe=>[{...Ee,id:et},...Oe].slice(0,5)),window.setTimeout(()=>d(Oe=>Oe.filter(wt=>wt.id!==et)),4200)},banner:Ee=>{window.clearTimeout(Fe.current),v({...Ee,id:++G.current}),Fe.current=window.setTimeout(()=>v(null),2700)},radar:qe,over:Ee=>{g(Ee),o("over")},scoped:Ee=>R(Ee),lockedChange:Ee=>{u(Ee);const et=e.current;!Ee&&et&&et.state==="paused"&&o("paused")}});return e.current=gt,()=>{gt.dispose(),e.current=null}},[]);const Ue=()=>{var qe;d([]),g(null),I(!0),window.setTimeout(()=>I(!1),9e3),o("play"),(qe=e.current)==null||qe.startMatch()};return V.jsxs("div",{className:"font-body relative h-full w-full overflow-hidden bg-[#0d1218] text-[#eae6dc]",children:[V.jsx("div",{ref:s,className:"absolute inset-0"}),(r==="play"||r==="paused")&&V.jsxs("div",{className:"pointer-events-none absolute inset-0 z-20",children:[V.jsx("div",{className:"pointer-events-none absolute inset-0 z-10",style:{background:"radial-gradient(ellipse at center, transparent 58%, rgba(4,7,11,0.45) 100%)"}}),V.jsxs("div",{className:"absolute left-1/2 top-3 flex -translate-x-1/2 items-stretch",children:[V.jsxs("div",{className:"flex items-center gap-2 border border-[#2b4a63] bg-[#101b26]/90 px-4 py-1.5",children:[V.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#6fb7e8]",children:"ВЫ"}),V.jsx("span",{ref:ne,className:"font-display text-xl leading-none text-[#6fb7e8]",children:"0"})]}),V.jsxs("div",{className:"flex flex-col items-center justify-center border-y border-[#3a4a5c] bg-[#12181f]/95 px-5 py-1",children:[V.jsx("span",{ref:k,className:"font-display text-2xl leading-none tracking-wider",children:"1:40"}),V.jsx("span",{ref:B,className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"ОСТАЛОСЬ: 0"})]}),V.jsxs("div",{className:"flex items-center gap-2 border border-[#5c3a24] bg-[#221409]/90 px-4 py-1.5",children:[V.jsx("span",{ref:de,className:"font-display text-xl leading-none text-[#f2a33c]",children:"0"}),V.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#f2a33c]",children:"БОТЫ"})]})]}),V.jsxs("div",{className:"absolute left-4 top-4",children:[V.jsxs("div",{className:"relative",children:[V.jsx("canvas",{ref:t,width:150,height:150,className:"h-[150px] w-[150px]"}),V.jsx("div",{className:"radar-sweep absolute inset-0 rounded-full border border-[#f2a33c]/30"})]}),V.jsxs("div",{className:"mt-1.5 border border-[#2b3844] bg-[#12181f]/90 px-3 py-1 text-[11px] font-bold tracking-widest text-[#8b98a7]",children:["УСТРАНЕНО: ",V.jsx("span",{ref:Z,className:"font-display text-sm text-[#f2a33c]",children:"0"})]})]}),V.jsx("div",{className:"absolute right-4 top-4 flex flex-col items-end gap-1",children:h.map(qe=>V.jsxs("div",{className:"feed-in flex items-center border border-[#2b3844] bg-[#12181f]/90 px-2.5 py-1 text-[12px] font-semibold",children:[V.jsx("span",{className:qe.byPlayer&&qe.killer==="ВЫ"?"text-[#6fb7e8]":"text-[#f2a33c]",children:qe.killer}),qe.head?V.jsx("span",{className:"mx-1.5 text-[#e0453a]",children:V.jsx(WE,{})}):qe.killer==="Снабжение"||qe.killer==="МАГАЗИН"?V.jsx("span",{className:"mx-1.5 text-[#7fd08a]",children:"»"}):V.jsx(YE,{}),V.jsx("span",{className:qe.victim==="ВЫ"?"text-[#e0453a]":"text-[#c8d2dd]",children:qe.victim})]},qe.id))}),V.jsxs("div",{ref:le,className:"xh absolute left-1/2 top-1/2 z-10 h-0 w-0",style:{display:O?"none":void 0},children:[V.jsx("span",{className:"xh-t"}),V.jsx("span",{className:"xh-b"}),V.jsx("span",{className:"xh-l"}),V.jsx("span",{className:"xh-r"}),V.jsx("span",{className:"xh-dot"})]}),O&&V.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10",children:[V.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at center, transparent 27.5%, rgba(4,7,9,0.985) 29%)"}}),V.jsx("div",{className:"absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/85"}),V.jsx("div",{className:"absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-black/85"}),V.jsx("div",{className:"absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/70"}),V.jsx("div",{className:"absolute bottom-[16%] left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]/70",children:"AWP · 4× ОПТИКА"})]}),V.jsx("div",{ref:Q,className:"hitmark absolute left-1/2 top-1/2 z-10 -ml-[11px] -mt-[11px]",children:V.jsx("svg",{viewBox:"0 0 22 22",className:"h-[22px] w-[22px] stroke-current",strokeWidth:"2.4",fill:"none",children:V.jsx("path",{d:"M3 3 8 8M19 3l-5 5M3 19l5-5M19 19l-5-5"})})}),V.jsx("div",{className:"absolute left-1/2 top-1/2 z-10",children:V.jsx("div",{ref:fe,className:"dmg-arrow",children:V.jsx("div",{ref:ae,children:V.jsx("svg",{viewBox:"0 0 24 24",className:"absolute -translate-x-1/2 fill-[#e0453a]",style:{top:-116,left:0,width:26,height:26,filter:"drop-shadow(0 0 6px rgba(224,69,58,.8))"},children:V.jsx("path",{d:"M12 2 22 18h-7v4h-6v-4H2z"})})})})}),V.jsx("div",{ref:U,className:"blink-fast absolute left-1/2 top-[57%] -translate-x-1/2 text-[13px] font-bold tracking-[0.3em] text-[#f2a33c]",style:{display:"none"},children:"ПЕРЕЗАРЯДКА"}),p&&V.jsxs("div",{className:"absolute left-1/2 top-[30%] -translate-x-1/2 text-center",children:[V.jsx("div",{className:"banner-in font-display text-5xl md:text-6xl",style:{color:p.tone==="win"?"#f2a33c":p.tone==="lose"?"#e0453a":"#eae6dc",textShadow:"0 4px 0 rgba(0,0,0,.55), 0 0 44px rgba(0,0,0,.6)"},children:p.title}),p.sub&&V.jsx("div",{className:"banner-sub-in mt-2 text-sm font-semibold tracking-[0.35em] text-[#c8d2dd] uppercase",style:{textShadow:"0 2px 6px rgba(0,0,0,.8)"},children:p.sub})]},p.id),V.jsx("div",{className:"absolute bottom-5 left-1/2 flex -translate-x-1/2 items-stretch gap-1 text-[11px] font-bold tracking-wider",children:[{k:"1",n:"AK-47"},{k:"2",n:"DEAGLE"},{k:"3",n:"AWP"}].map(qe=>V.jsxs("div",{className:"flex items-center gap-1.5 border border-[#2b3844] bg-[#12181f]/85 px-2.5 py-1 text-[#8b98a7]",children:[V.jsx("span",{className:"key",children:qe.k}),V.jsx("span",{ref:qe.k==="1"?ze:qe.k==="2"?oe:_e,children:qe.n})]},qe.k))}),V.jsxs("div",{className:"absolute bottom-5 left-5 w-[240px]",children:[V.jsxs("div",{className:"flex items-end gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2.5",children:[V.jsx("svg",{viewBox:"0 0 24 24",className:"mb-1 h-6 w-6 fill-[#e0453a]",children:V.jsx("path",{d:"M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"})}),V.jsxs("div",{className:"flex-1",children:[V.jsxs("div",{className:"flex items-baseline justify-between",children:[V.jsx("span",{ref:L,className:"font-display text-3xl leading-none",children:"100"}),V.jsx("span",{className:"text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"HP"})]}),V.jsx("div",{className:"mt-1.5 h-[7px] w-full bg-[#232d38]",children:V.jsx("div",{ref:C,className:"h-full w-full transition-[width] duration-200"})})]})]}),V.jsxs("div",{className:"mt-1.5 flex items-center gap-3 border border-[#2b3844] bg-[#12181f]/90 px-4 py-2",children:[V.jsx("span",{className:"text-[#6fb7e8]",children:V.jsx(XE,{})}),V.jsx("div",{className:"flex-1",children:V.jsx("div",{className:"h-[5px] w-full bg-[#232d38]",children:V.jsx("div",{ref:E,className:"h-full w-full bg-[#6fb7e8] transition-[width] duration-200"})})}),V.jsx("span",{ref:D,className:"font-display text-base leading-none text-[#6fb7e8]",children:"100"})]})]}),V.jsxs("div",{className:"absolute bottom-5 right-5 text-right",children:[V.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/90 px-5 py-2.5",children:[V.jsxs("div",{className:"flex items-baseline justify-end gap-2",children:[V.jsx("span",{ref:P,className:"font-display text-5xl leading-none",children:"30"}),V.jsx("span",{ref:H,className:"font-display text-lg leading-none text-[#8b98a7]",children:"/ 90"})]}),V.jsxs("div",{className:"mt-1 text-[10px] font-bold tracking-[0.3em] text-[#8b98a7]",children:[V.jsx("span",{ref:Ge,children:"2·DEAGLE"}),V.jsx("span",{className:"ml-2 text-[#5f6d7d]",children:"[1][2][3] / КОЛЕСО"})]})]}),V.jsxs("div",{className:"mt-1.5 flex items-center justify-end gap-1.5 border border-[#2b3844] bg-[#12181f]/90 px-4 py-1.5 text-[#c9d68a]",children:[V.jsx("span",{className:"mr-1 text-[10px] font-bold tracking-widest text-[#8b98a7]",children:"ГРАНАТЫ"}),[0,1,2].map(qe=>V.jsx(qE,{dim:qe>=A},qe))]})]}),x&&V.jsx("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 border border-[#2b3844] bg-[#12181f]/85 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-[#8b98a7]",children:"WASD — движение · ЛКМ — огонь · 1/2/3 или колесо — оружие · ПКМ — оптика AWP · R — перезарядка · G — граната"}),!l&&r==="play"&&V.jsxs("div",{className:"absolute left-1/2 top-[62%] -translate-x-1/2 border border-[#f2a33c]/60 bg-[#221409]/90 px-5 py-2 text-center text-sm font-bold tracking-[0.14em] text-[#f2a33c]",children:["ДВИГАЙТЕ МЫШЬ — ОБЗОР · ЛКМ — ОГОНЬ",V.jsx("div",{className:"mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-[#8b98a7]",children:"R — ПЕРЕЗАРЯДКА · G — ГРАНАТА · КРАЙ ЭКРАНА: ВЕРНИТЕ МЫШЬ В ЦЕНТР"})]}),V.jsx("div",{ref:X,className:"vignette absolute inset-0 z-30"}),M&&V.jsx("div",{className:"lowhp-pulse pointer-events-none absolute inset-0 z-30"})]}),r==="menu"&&V.jsxs("div",{className:"absolute inset-0 z-40",children:[V.jsx("div",{className:"menu-scan absolute inset-0",style:{background:"linear-gradient(100deg, rgba(10,14,19,.96) 0%, rgba(10,14,19,.92) 44%, rgba(10,14,19,.55) 72%, rgba(10,14,19,.25) 100%)"}}),V.jsx("div",{className:"smoke absolute inset-0"}),V.jsx("div",{className:"hazard hazard-anim absolute top-0 left-0 h-2 w-full opacity-80"}),V.jsx("div",{className:"hazard hazard-anim absolute bottom-0 left-0 h-2 w-full opacity-80"}),V.jsxs("div",{className:"relative flex h-full flex-col justify-center gap-8 px-8 md:flex-row md:items-center md:justify-between md:px-16 lg:px-24",children:[V.jsxs("div",{className:"max-w-xl",children:[V.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[V.jsx("span",{className:"inline-block h-[3px] w-10 bg-[#f2a33c]"}),V.jsx("span",{className:"text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]",children:"БРАУЗЕРНЫЙ ШУТЕР · THREE.JS"})]}),V.jsxs("h1",{className:"title-glow font-display text-[88px] leading-[0.9] md:text-[120px]",children:["CS",V.jsx("span",{className:"text-[#f2a33c]",children:" 3D"})]}),V.jsxs("p",{className:"mt-5 max-w-md text-[15px] leading-relaxed text-[#aab6c4]",children:["Зачистите точку. AK-47, гранаты и живые боты, которые стрейфят и дают очередь в ответ. Возьмите ",V.jsx("span",{className:"font-bold text-[#eae6dc]",children:"3 раунда"})," быстрее, чем вас застрелят."]}),V.jsx("button",{onClick:Ue,className:"btn-blade mt-8 inline-block bg-[#f2a33c] px-12 py-4 text-xl text-[#14100a] hover:bg-[#ffc069]",children:V.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В БОЙ"})}),V.jsx("div",{className:"mt-4 text-[11px] font-semibold tracking-[0.25em] text-[#5f6d7d]",children:"КЛИК — ЗАХВАТ МЫШИ · ESC — ПАУЗА"})]}),V.jsxs("div",{className:"flex w-full max-w-sm flex-col gap-4",children:[V.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[V.jsx("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:"УПРАВЛЕНИЕ"}),V.jsxs("div",{className:"grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 px-4 py-3 text-[12px] text-[#aab6c4]",children:[V.jsxs("span",{children:[V.jsx("span",{className:"key",children:"W"})," ",V.jsx("span",{className:"key",children:"A"})," ",V.jsx("span",{className:"key",children:"S"})," ",V.jsx("span",{className:"key",children:"D"})]}),V.jsx("span",{children:"передвижение"}),V.jsx("span",{children:V.jsx("span",{className:"key",children:"МЫШЬ"})}),V.jsx("span",{children:"обзор — движение мыши, курсор в бою скрыт"}),V.jsx("span",{children:V.jsx("span",{className:"key",children:"ЛКМ"})}),V.jsx("span",{children:"огонь из AK-47"}),V.jsx("span",{children:V.jsx("span",{className:"key",children:"R"})}),V.jsx("span",{children:"перезарядка"}),V.jsx("span",{children:V.jsx("span",{className:"key",children:"G"})}),V.jsx("span",{children:"граната"}),V.jsx("span",{children:V.jsx("span",{className:"key",children:"SHIFT"})}),V.jsx("span",{children:"тихий шаг — точность выше"}),V.jsx("span",{children:V.jsx("span",{className:"key",children:"SPACE"})}),V.jsx("span",{children:"прыжок"}),V.jsxs("span",{children:[V.jsx("span",{className:"key",children:"1"}),V.jsx("span",{className:"key",children:"2"}),V.jsx("span",{className:"key",children:"3"})]}),V.jsx("span",{children:"AK-47 / Deagle / AWP · колесо мыши тоже листает"}),V.jsx("span",{children:V.jsx("span",{className:"key",children:"ПКМ"})}),V.jsx("span",{children:"оптика AWP ×4"}),V.jsx("span",{children:V.jsx("span",{className:"key",children:"ESC"})}),V.jsx("span",{children:"пауза"})]})]}),V.jsxs("div",{className:"border border-[#2b3844] bg-[#12181f]/95",children:[V.jsx("div",{className:"border-b border-[#2b3844] bg-[#182029] px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#f2a33c]",children:"БРИФИНГ"}),V.jsxs("ul",{className:"space-y-1.5 px-4 py-3 text-[12px] leading-relaxed text-[#aab6c4]",children:[V.jsxs("li",{children:["Карта — ",V.jsx("span",{className:"font-bold text-[#f2a33c]",children:"Dust II"}),": лонг A, мид с дверями, туннели на B."]}),V.jsxs("li",{children:["Все стволы сразу: ",V.jsx("span",{className:"key",children:"1"})," AK-47 · ",V.jsx("span",{className:"key",children:"2"})," Deagle · ",V.jsx("span",{className:"key",children:"3"})," AWP — или колесо мыши."]}),V.jsxs("li",{children:[V.jsx("span",{className:"font-bold text-[#eae6dc]",children:"Хедшот"})," — урон ×4. AWP убивает с тела, ",V.jsx("span",{className:"key",children:"ПКМ"})," — оптика."]}),V.jsxs("li",{children:["Матч до ",V.jsx("span",{className:"font-bold text-[#f2a33c]",children:"3 побед"}),", раунд — 1:40. Боты злеют с каждым раундом."]})]})]})]})]})]}),r==="paused"&&V.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/85",children:V.jsxs("div",{className:"w-[380px] border border-[#2b3844] bg-[#12181f]",children:[V.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),V.jsxs("div",{className:"px-8 py-7",children:[V.jsx("div",{className:"font-display text-4xl tracking-wider",children:"ПАУЗА"}),V.jsx("div",{className:"mt-1 text-[11px] font-semibold tracking-[0.3em] text-[#8b98a7]",children:"ОПЕРАЦИЯ ПРИОСТАНОВЛЕНА"}),V.jsxs("div",{className:"mt-6 flex flex-col gap-2.5",children:[V.jsx("button",{onClick:()=>{var qe;(qe=e.current)==null||qe.resume(),o("play")},className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:V.jsx("span",{className:"inline-block skew-x-[8deg]",children:"ПРОДОЛЖИТЬ"})}),V.jsx("button",{onClick:()=>{var qe;(qe=e.current)==null||qe.toMenu(),o("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:V.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В МЕНЮ"})})]}),V.jsxs("div",{className:"mt-6 border-t border-[#2b3844] pt-4 text-[11px] leading-relaxed text-[#5f6d7d]",children:[V.jsx("span",{className:"key",children:"W"}),V.jsx("span",{className:"key",children:"A"}),V.jsx("span",{className:"key",children:"S"}),V.jsx("span",{className:"key",children:"D"})," движение · ",V.jsx("span",{className:"key",children:"ЛКМ"})," огонь · ",V.jsx("span",{className:"key",children:"R"})," перезарядка · ",V.jsx("span",{className:"key",children:"G"})," граната"]})]})]})}),r==="over"&&_&&V.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-[#0a0e13]/80",children:V.jsxs("div",{className:"w-[440px] border border-[#2b3844] bg-[#12181f]",children:[V.jsx("div",{className:"hazard h-1.5 w-full opacity-70"}),V.jsxs("div",{className:"px-10 py-8 text-center",children:[V.jsx("div",{className:"text-[11px] font-bold tracking-[0.4em] text-[#8b98a7]",children:"МАТЧ ЗАВЕРШЁН"}),V.jsx("div",{className:"title-glow font-display mt-2 text-6xl",style:{color:_.result==="victory"?"#f2a33c":"#e0453a"},children:_.result==="victory"?"ПОБЕДА":"ПОРАЖЕНИЕ"}),V.jsxs("div",{className:"font-display mt-3 text-3xl text-[#eae6dc]",children:[V.jsx("span",{className:"text-[#6fb7e8]",children:_.won}),V.jsx("span",{className:"mx-2 text-[#5f6d7d]",children:":"}),V.jsx("span",{className:"text-[#f2a33c]",children:_.lost})]}),V.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-2.5",children:[V.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[V.jsx("div",{className:"font-display text-3xl text-[#f2a33c]",children:_.kills}),V.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:"УСТРАНЕНО"})]}),V.jsxs("div",{className:"border border-[#2b3844] bg-[#182029] px-4 py-3",children:[V.jsx("div",{className:"font-display text-3xl text-[#e0453a]",children:_.deaths}),V.jsx("div",{className:"mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#8b98a7]",children:"СМЕРТЕЙ"})]})]}),V.jsxs("div",{className:"mt-7 flex flex-col gap-2.5",children:[V.jsx("button",{onClick:Ue,className:"btn-blade bg-[#f2a33c] px-6 py-3 text-base text-[#14100a] hover:bg-[#ffc069]",children:V.jsx("span",{className:"inline-block skew-x-[8deg]",children:"ЕЩЁ РАЗ"})}),V.jsx("button",{onClick:()=>{var qe;(qe=e.current)==null||qe.toMenu(),o("menu")},className:"btn-blade border border-[#3a4a5c] bg-[#182029] px-6 py-3 text-base text-[#c8d2dd] hover:border-[#f2a33c]",children:V.jsx("span",{className:"inline-block skew-x-[8deg]",children:"В МЕНЮ"})})]})]})]})})]})}u_.createRoot(document.getElementById("root")).render(V.jsx(jE,{}));
