import{_ as g,c as z,d as v,W as x,B as y,j as B,F as M,k as S}from"./_plugin-vue_export-helper.CbBTzfH7.js";import{d as W,o as k,c as b,r as P,j,k as A}from"./runtime-core.esm-bundler.0wcOl9K9.js";const E=W({__name:"StarryBackground",setup(p,{expose:d}){d();const o=P(null);let r,n,t,s;const c=()=>{r=new z,n=new v(75,window.innerWidth/window.innerHeight,.1,1e3),t=new x,t.setSize(window.innerWidth,window.innerHeight),o.value?.appendChild(t.domElement);const e=new y,m=new B({color:16777215,size:.1,sizeAttenuation:!0}),l=[];for(let w=0;w<1e4;w++){const f=(Math.random()-.5)*2e3,_=(Math.random()-.5)*2e3,h=-Math.random()*2e3;l.push(f,_,h)}e.setAttribute("position",new M(l,3)),s=new S(e,m),r.add(s),n.position.z=1,i()},i=()=>{requestAnimationFrame(i),s.rotation.y+=2e-4,t.render(r,n)},a=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)};j(()=>{c(),window.addEventListener("resize",a)}),A(()=>{window.removeEventListener("resize",a),t.dispose()});const u={container:o,get scene(){return r},set scene(e){r=e},get camera(){return n},set camera(e){n=e},get renderer(){return t},set renderer(e){t=e},get stars(){return s},set stars(e){s=e},init:c,animate:i,onWindowResize:a};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),H={ref:"container",class:"fixed top-0 left-0 w-full h-full z-[-1]"};function $(p,d,o,r,n,t){return k(),b("div",H,null,512)}const G=g(E,[["render",$]]);export{G as default};