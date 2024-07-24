import{k as _,l as h,m as B,p as z,q as $,s as q,u as G,v as R,w as H,x as W,y as j,z as O,A as F,B as K,C as U,d as X,D as d,S as J}from"./runtime-core.esm-bundler.Ba9oMKWR.js";/**
* @vue/runtime-dom v3.4.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Q="http://www.w3.org/2000/svg",V="http://www.w3.org/1998/Math/MathML",l=typeof document<"u"?document:null,b=l&&l.createElement("template"),Y={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?l.createElementNS(Q,e):t==="mathml"?l.createElementNS(V,e):n?l.createElement(e,{is:n}):l.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>l.createTextNode(e),createComment:e=>l.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>l.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,o){const r=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{b.innerHTML=i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e;const c=b.content;if(i==="svg"||i==="mathml"){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}t.insertBefore(c,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Z=Symbol("_vtc");function y(e,t,n){const i=e[Z];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const A=Symbol("_vod"),k=Symbol("_vsh"),tt=Symbol(""),et=/(^|;)\s*display\s*:/;function nt(e,t,n){const i=e.style,s=h(n);let o=!1;if(n&&!s){if(t)if(h(t))for(const r of t.split(";")){const c=r.slice(0,r.indexOf(":")).trim();n[c]==null&&m(i,c,"")}else for(const r in t)n[r]==null&&m(i,r,"");for(const r in n)r==="display"&&(o=!0),m(i,r,n[r])}else if(s){if(t!==n){const r=i[tt];r&&(n+=";"+r),i.cssText=n,o=et.test(n)}}else t&&e.removeAttribute("style");A in e&&(e[A]=o?i.display:"",e[k]&&(i.display="none"))}const v=/\s*!important$/;function m(e,t,n){if(R(n))n.forEach(i=>m(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=it(e,t);v.test(n)?e.setProperty(H(i),n.replace(v,""),"important"):e[i]=n}}const C=["Webkit","Moz","ms"],S={};function it(e,t){const n=S[t];if(n)return n;let i=W(t);if(i!=="filter"&&i in e)return S[t]=i;i=j(i);for(let s=0;s<C.length;s++){const o=C[s]+i;if(o in e)return S[t]=o}return t}const E="http://www.w3.org/1999/xlink";function w(e,t,n,i,s,o=K(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(E,t.slice(6,t.length)):e.setAttributeNS(E,t,n):n==null||o&&!O(n)?e.removeAttribute(t):e.setAttribute(t,o?"":F(n)?String(n):n)}function st(e,t,n,i){if(t==="innerHTML"||t==="textContent"){if(n==null)return;e[t]=n;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const r=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?"":String(n);(r!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=O(n):n==null&&r==="string"?(n="",o=!0):r==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function rt(e,t,n,i){e.addEventListener(t,n,i)}function ot(e,t,n,i){e.removeEventListener(t,n,i)}const N=Symbol("_vei");function ct(e,t,n,i,s=null){const o=e[N]||(e[N]={}),r=o[t];if(i&&r)r.value=i;else{const[c,f]=lt(t);if(i){const p=o[t]=ut(i,s);rt(e,c,p,f)}else r&&(ot(e,c,r,f),o[t]=void 0)}}const M=/(?:Once|Passive|Capture)$/;function lt(e){let t;if(M.test(e)){t={};let i;for(;i=e.match(M);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):H(e.slice(2)),t]}let g=0;const ft=Promise.resolve(),at=()=>g||(ft.then(()=>g=0),g=Date.now());function ut(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;U(pt(i,n.value),t,5,[i])};return n.value=e,n.attached=at(),n}function pt(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const T=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,dt=(e,t,n,i,s,o)=>{const r=s==="svg";t==="class"?y(e,i,r):t==="style"?nt(e,n,i):q(t)?G(t)||ct(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mt(e,t,i,r))?(st(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&w(e,t,i,r,o,t!=="value")):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),w(e,t,i,r))};function mt(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&T(t)&&_(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return T(t)&&h(n)?!1:t in e}const P=$({patchProp:dt},Y);let u,L=!1;function ht(){return u||(u=B(P))}function St(){return u=L?u:z(P),L=!0,u}const gt=(...e)=>{const t=ht().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=x(i);if(!s)return;const o=t._component;!_(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=n(s,!1,I(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t},bt=(...e)=>{const t=St().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=x(i);if(s)return n(s,!0,I(s))},t};function I(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function x(e){return h(e)?document.querySelector(e):e}const At=()=>{},vt=X({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:e,value:t,hydrate:n}){if(!t)return()=>null;let i=n?"astro-slot":"astro-static-slot";return()=>d(i,{name:e,innerHTML:t})}}),wt=e=>async(t,n,i,{client:s})=>{if(!e.hasAttribute("ssr"))return;const o=t.name?`${t.name} Host`:void 0,r={};for(const[a,D]of Object.entries(i))r[a]=()=>d(vt,{value:D,name:a==="default"?void 0:a});const c=s!=="only",p=(c?bt:gt)({name:o,render(){let a=d(t,n,r);return Ct(t.setup)&&(a=d(J,null,a)),a}});await At(),p.mount(e,c),e.addEventListener("astro:unmount",()=>p.unmount(),{once:!0})};function Ct(e){const t=e?.constructor;return t&&t.name==="AsyncFunction"}export{wt as default};