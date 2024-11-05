import{R as rt,c as lt,E as ct,V as _,M as W,T as X,Q as Ie,d as Ye,e as v,f as de,L as dt,g as ut,h as mt,i as pt,_ as Se,j as V,S as ht,P as ft,W as bt,G as ne,k as Fe,l as ge,m as gt,B as He,n as yt,o as wt,a as Et,F as St,b as kt,p as xt}from"./_plugin-vue_export-helper.4DYk0qc0.js";import{d as ke,b as ae,c as ie,w as D,x as we,y as ue,z as Pt,r as Ee,F as Tt,A as _t,B as Mt,C as Ke,D as Ot,E as jt,o as Lt,a as vt}from"./runtime-core.esm-bundler.Dwhq_KEJ.js";const Ue={type:"change"},ye={type:"start"},Ge={type:"end"},ce=new rt,Ze=new lt,At=Math.cos(70*de.DEG2RAD);class Dt extends ct{constructor(r,n){super(),this.object=r,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:W.ROTATE,MIDDLE:W.DOLLY,RIGHT:W.PAN},this.touches={ONE:X.ROTATE,TWO:X.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",be),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(Ue),e.update(),s=a.NONE},this.update=function(){const t=new _,o=new Ie().setFromUnitVectors(r.up,new _(0,1,0)),c=o.clone().invert(),g=new _,k=new Ie,U=new _,L=2*Math.PI;return function(st=null){const Ne=e.object.position;t.copy(Ne).sub(e.target),t.applyQuaternion(o),i.setFromVector3(t),e.autoRotate&&s===a.NONE&&z(T(st)),e.enableDamping?(i.theta+=d.theta*e.dampingFactor,i.phi+=d.phi*e.dampingFactor):(i.theta+=d.theta,i.phi+=d.phi);let I=e.minAzimuthAngle,Y=e.maxAzimuthAngle;isFinite(I)&&isFinite(Y)&&(I<-Math.PI?I+=L:I>Math.PI&&(I-=L),Y<-Math.PI?Y+=L:Y>Math.PI&&(Y-=L),I<=Y?i.theta=Math.max(I,Math.min(Y,i.theta)):i.theta=i.theta>(I+Y)/2?Math.max(I,i.theta):Math.min(Y,i.theta)),i.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,i.phi)),i.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(y,e.dampingFactor):e.target.add(y),e.target.sub(e.cursor),e.target.clampLength(e.minTargetRadius,e.maxTargetRadius),e.target.add(e.cursor);let te=!1;if(e.zoomToCursor&&l||e.object.isOrthographicCamera)i.radius=Q(i.radius);else{const F=i.radius;i.radius=Q(i.radius*f),te=F!=i.radius}if(t.setFromSpherical(i),t.applyQuaternion(c),Ne.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(d.theta*=1-e.dampingFactor,d.phi*=1-e.dampingFactor,y.multiplyScalar(1-e.dampingFactor)):(d.set(0,0,0),y.set(0,0,0)),e.zoomToCursor&&l){let F=null;if(e.object.isPerspectiveCamera){const oe=t.length();F=Q(oe*f);const le=oe-F;e.object.position.addScaledVector(q,le),e.object.updateMatrixWorld(),te=!!le}else if(e.object.isOrthographicCamera){const oe=new _(A.x,A.y,0);oe.unproject(e.object);const le=e.object.zoom;e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/f)),e.object.updateProjectionMatrix(),te=le!==e.object.zoom;const ze=new _(A.x,A.y,0);ze.unproject(e.object),e.object.position.sub(ze).add(oe),e.object.updateMatrixWorld(),F=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;F!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(F).add(e.object.position):(ce.origin.copy(e.object.position),ce.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(ce.direction))<At?r.lookAt(e.target):(Ze.setFromNormalAndCoplanarPoint(e.object.up,e.target),ce.intersectPlane(Ze,e.target))))}else if(e.object.isOrthographicCamera){const F=e.object.zoom;e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/f)),F!==e.object.zoom&&(e.object.updateProjectionMatrix(),te=!0)}return f=1,l=!1,te||g.distanceToSquared(e.object.position)>u||8*(1-k.dot(e.object.quaternion))>u||U.distanceToSquared(e.target)>u?(e.dispatchEvent(Ue),g.copy(e.object.position),k.copy(e.object.quaternion),U.copy(e.target),!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",Re),e.domElement.removeEventListener("pointerdown",je),e.domElement.removeEventListener("pointercancel",ee),e.domElement.removeEventListener("wheel",Le),e.domElement.removeEventListener("pointermove",fe),e.domElement.removeEventListener("pointerup",ee),e.domElement.getRootNode().removeEventListener("keydown",ve,{capture:!0}),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",be),e._domElementKeyEvents=null)};const e=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=a.NONE;const u=1e-6,i=new Ye,d=new Ye;let f=1;const y=new _,b=new v,S=new v,M=new v,P=new v,p=new v,h=new v,O=new v,N=new v,R=new v,q=new _,A=new v;let l=!1;const m=[],w={};let E=!1;function T(t){return t!==null?2*Math.PI/60*e.autoRotateSpeed*t:2*Math.PI/60/60*e.autoRotateSpeed}function H(t){const o=Math.abs(t*.01);return Math.pow(.95,e.zoomSpeed*o)}function z(t){d.theta-=t}function G(t){d.phi-=t}const K=function(){const t=new _;return function(c,g){t.setFromMatrixColumn(g,0),t.multiplyScalar(-c),y.add(t)}}(),Z=function(){const t=new _;return function(c,g){e.screenSpacePanning===!0?t.setFromMatrixColumn(g,1):(t.setFromMatrixColumn(g,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(c),y.add(t)}}(),j=function(){const t=new _;return function(c,g){const k=e.domElement;if(e.object.isPerspectiveCamera){const U=e.object.position;t.copy(U).sub(e.target);let L=t.length();L*=Math.tan(e.object.fov/2*Math.PI/180),K(2*c*L/k.clientHeight,e.object.matrix),Z(2*g*L/k.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(K(c*(e.object.right-e.object.left)/e.object.zoom/k.clientWidth,e.object.matrix),Z(g*(e.object.top-e.object.bottom)/e.object.zoom/k.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function C(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?f/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function me(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?f*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function $(t,o){if(!e.zoomToCursor)return;l=!0;const c=e.domElement.getBoundingClientRect(),g=t-c.left,k=o-c.top,U=c.width,L=c.height;A.x=g/U*2-1,A.y=-(k/L)*2+1,q.set(A.x,A.y,1).unproject(e.object).sub(e.object.position).normalize()}function Q(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function se(t){b.set(t.clientX,t.clientY)}function pe(t){$(t.clientX,t.clientX),O.set(t.clientX,t.clientY)}function re(t){P.set(t.clientX,t.clientY)}function he(t){S.set(t.clientX,t.clientY),M.subVectors(S,b).multiplyScalar(e.rotateSpeed);const o=e.domElement;z(2*Math.PI*M.x/o.clientHeight),G(2*Math.PI*M.y/o.clientHeight),b.copy(S),e.update()}function J(t){N.set(t.clientX,t.clientY),R.subVectors(N,O),R.y>0?C(H(R.y)):R.y<0&&me(H(R.y)),O.copy(N),e.update()}function Be(t){p.set(t.clientX,t.clientY),h.subVectors(p,P).multiplyScalar(e.panSpeed),j(h.x,h.y),P.copy(p),e.update()}function We(t){$(t.clientX,t.clientY),t.deltaY<0?me(H(t.deltaY)):t.deltaY>0&&C(H(t.deltaY)),e.update()}function Xe(t){let o=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?G(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(0,e.keyPanSpeed),o=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?G(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(0,-e.keyPanSpeed),o=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?z(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(e.keyPanSpeed,0),o=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?z(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):j(-e.keyPanSpeed,0),o=!0;break}o&&(t.preventDefault(),e.update())}function xe(t){if(m.length===1)b.set(t.pageX,t.pageY);else{const o=B(t),c=.5*(t.pageX+o.x),g=.5*(t.pageY+o.y);b.set(c,g)}}function Pe(t){if(m.length===1)P.set(t.pageX,t.pageY);else{const o=B(t),c=.5*(t.pageX+o.x),g=.5*(t.pageY+o.y);P.set(c,g)}}function Te(t){const o=B(t),c=t.pageX-o.x,g=t.pageY-o.y,k=Math.sqrt(c*c+g*g);O.set(0,k)}function Ve(t){e.enableZoom&&Te(t),e.enablePan&&Pe(t)}function qe(t){e.enableZoom&&Te(t),e.enableRotate&&xe(t)}function _e(t){if(m.length==1)S.set(t.pageX,t.pageY);else{const c=B(t),g=.5*(t.pageX+c.x),k=.5*(t.pageY+c.y);S.set(g,k)}M.subVectors(S,b).multiplyScalar(e.rotateSpeed);const o=e.domElement;z(2*Math.PI*M.x/o.clientHeight),G(2*Math.PI*M.y/o.clientHeight),b.copy(S)}function Me(t){if(m.length===1)p.set(t.pageX,t.pageY);else{const o=B(t),c=.5*(t.pageX+o.x),g=.5*(t.pageY+o.y);p.set(c,g)}h.subVectors(p,P).multiplyScalar(e.panSpeed),j(h.x,h.y),P.copy(p)}function Oe(t){const o=B(t),c=t.pageX-o.x,g=t.pageY-o.y,k=Math.sqrt(c*c+g*g);N.set(0,k),R.set(0,Math.pow(N.y/O.y,e.zoomSpeed)),C(R.y),O.copy(N);const U=(t.pageX+o.x)*.5,L=(t.pageY+o.y)*.5;$(U,L)}function $e(t){e.enableZoom&&Oe(t),e.enablePan&&Me(t)}function Qe(t){e.enableZoom&&Oe(t),e.enableRotate&&_e(t)}function je(t){e.enabled!==!1&&(m.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",fe),e.domElement.addEventListener("pointerup",ee)),!it(t)&&(nt(t),t.pointerType==="touch"?De(t):Je(t)))}function fe(t){e.enabled!==!1&&(t.pointerType==="touch"?ot(t):et(t))}function ee(t){switch(at(t),m.length){case 0:e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",fe),e.domElement.removeEventListener("pointerup",ee),e.dispatchEvent(Ge),s=a.NONE;break;case 1:const o=m[0],c=w[o];De({pointerId:o,pageX:c.x,pageY:c.y});break}}function Je(t){let o;switch(t.button){case 0:o=e.mouseButtons.LEFT;break;case 1:o=e.mouseButtons.MIDDLE;break;case 2:o=e.mouseButtons.RIGHT;break;default:o=-1}switch(o){case W.DOLLY:if(e.enableZoom===!1)return;pe(t),s=a.DOLLY;break;case W.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;re(t),s=a.PAN}else{if(e.enableRotate===!1)return;se(t),s=a.ROTATE}break;case W.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;se(t),s=a.ROTATE}else{if(e.enablePan===!1)return;re(t),s=a.PAN}break;default:s=a.NONE}s!==a.NONE&&e.dispatchEvent(ye)}function et(t){switch(s){case a.ROTATE:if(e.enableRotate===!1)return;he(t);break;case a.DOLLY:if(e.enableZoom===!1)return;J(t);break;case a.PAN:if(e.enablePan===!1)return;Be(t);break}}function Le(t){e.enabled===!1||e.enableZoom===!1||s!==a.NONE||(t.preventDefault(),e.dispatchEvent(ye),We(tt(t)),e.dispatchEvent(Ge))}function tt(t){const o=t.deltaMode,c={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(o){case 1:c.deltaY*=16;break;case 2:c.deltaY*=100;break}return t.ctrlKey&&!E&&(c.deltaY*=10),c}function ve(t){t.key==="Control"&&(E=!0,e.domElement.getRootNode().addEventListener("keyup",Ae,{passive:!0,capture:!0}))}function Ae(t){t.key==="Control"&&(E=!1,e.domElement.getRootNode().removeEventListener("keyup",Ae,{passive:!0,capture:!0}))}function be(t){e.enabled===!1||e.enablePan===!1||Xe(t)}function De(t){switch(Ce(t),m.length){case 1:switch(e.touches.ONE){case X.ROTATE:if(e.enableRotate===!1)return;xe(t),s=a.TOUCH_ROTATE;break;case X.PAN:if(e.enablePan===!1)return;Pe(t),s=a.TOUCH_PAN;break;default:s=a.NONE}break;case 2:switch(e.touches.TWO){case X.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ve(t),s=a.TOUCH_DOLLY_PAN;break;case X.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;qe(t),s=a.TOUCH_DOLLY_ROTATE;break;default:s=a.NONE}break;default:s=a.NONE}s!==a.NONE&&e.dispatchEvent(ye)}function ot(t){switch(Ce(t),s){case a.TOUCH_ROTATE:if(e.enableRotate===!1)return;_e(t),e.update();break;case a.TOUCH_PAN:if(e.enablePan===!1)return;Me(t),e.update();break;case a.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;$e(t),e.update();break;case a.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Qe(t),e.update();break;default:s=a.NONE}}function Re(t){e.enabled!==!1&&t.preventDefault()}function nt(t){m.push(t.pointerId)}function at(t){delete w[t.pointerId];for(let o=0;o<m.length;o++)if(m[o]==t.pointerId){m.splice(o,1);return}}function it(t){for(let o=0;o<m.length;o++)if(m[o]==t.pointerId)return!0;return!1}function Ce(t){let o=w[t.pointerId];o===void 0&&(o=new v,w[t.pointerId]=o),o.set(t.pageX,t.pageY)}function B(t){const o=t.pointerId===m[0]?m[1]:m[0];return w[o]}e.domElement.addEventListener("contextmenu",Re),e.domElement.addEventListener("pointerdown",je),e.domElement.addEventListener("pointercancel",ee),e.domElement.addEventListener("wheel",Le,{passive:!1}),e.domElement.getRootNode().addEventListener("keydown",ve,{passive:!0,capture:!0}),this.update()}}class Rt extends dt{constructor(r){super(r)}load(r,n,e,a){const s=this,u=new ut(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(r,function(i){const d=s.parse(JSON.parse(i));n&&n(d)},e,a)}parse(r){return new Ct(r)}}class Ct{constructor(r){this.isFont=!0,this.type="Font",this.data=r}generateShapes(r,n=100){const e=[],a=Nt(r,n,this.data);for(let s=0,u=a.length;s<u;s++)e.push(...a[s].toShapes());return e}}function Nt(x,r,n){const e=Array.from(x),a=r/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*a,u=[];let i=0,d=0;for(let f=0;f<e.length;f++){const y=e[f];if(y===`
`)i=0,d-=s;else{const b=zt(y,a,i,d,n);i+=b.offsetX,u.push(b.path)}}return u}function zt(x,r,n,e,a){const s=a.glyphs[x]||a.glyphs["?"];if(!s){console.error('THREE.Font: character "'+x+'" does not exists in font family '+a.familyName+".");return}const u=new mt;let i,d,f,y,b,S,M,P;if(s.o){const p=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let h=0,O=p.length;h<O;)switch(p[h++]){case"m":i=p[h++]*r+n,d=p[h++]*r+e,u.moveTo(i,d);break;case"l":i=p[h++]*r+n,d=p[h++]*r+e,u.lineTo(i,d);break;case"q":f=p[h++]*r+n,y=p[h++]*r+e,b=p[h++]*r+n,S=p[h++]*r+e,u.quadraticCurveTo(b,S,f,y);break;case"b":f=p[h++]*r+n,y=p[h++]*r+e,b=p[h++]*r+n,S=p[h++]*r+e,M=p[h++]*r+n,P=p[h++]*r+e,u.bezierCurveTo(b,S,M,P,f,y);break}}return{offsetX:s.ha*r,path:u}}class It extends pt{constructor(r,n={}){const e=n.font;if(e===void 0)super();else{const a=e.generateShapes(r,n.size);n.depth===void 0&&n.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),n.depth=n.depth!==void 0?n.depth:n.height!==void 0?n.height:50,n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(a,n)}this.type="TextGeometry"}}const Yt=[{name:"Vue",color:"#41b883",level:1,icon:"mdi:vuejs"},{name:"Nuxt",color:"#00c48c",level:.5,icon:"mdi:nuxt"},{name:"JavaScript",color:"#f0db4f",level:.9,icon:"mdi:language-javascript"},{name:"TypeScript",color:"#3178c6",level:.9,icon:"mdi:language-typescript"},{name:"HTML",color:"#e34f26",level:.9,icon:"mdi:language-html5"},{name:"CSS",color:"#2965f1",level:.9,icon:"mdi:language-css3"},{name:"TailwindCSS",color:"#38bdf8",level:.9,icon:"mdi:tailwind"},{name:"React",color:"#61dafb",level:.65,icon:"mdi:react"},{name:"Astro",color:"#ff5f57",level:.5,icon:"mdi:astro"},{name:"Three.js",color:"#ffdd57",level:.3,icon:"mdi:three-js"}],Ft=[{name:"Node.js",color:"#339933",level:.5,icon:"mdi:nodejs"},{name:"PHP",color:"#777BB4",level:.3,icon:"mdi:language-php"},{name:"Java",color:"#f89820",level:.5,icon:"mdi:language-java"},{name:"C++",color:"#f89820",level:.3,icon:"mdi:language-cplusplus"}],Ht=[{name:"Figma",color:"#f24e1e",level:.3,icon:"mdi:figma"},{name:"Canva",color:"#f24e1e",level:.5,icon:"mdi:canva"}],Kt=ke({__name:"SkillTooltip",props:{skill:{},position:{}},setup(x,{expose:r}){r();const n={};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Ut={class:"flex items-center mb-2"},Gt={class:"text-xl font-bold"},Zt={class:"text-sm"};function Bt(x,r,n,e,a,s){return n.skill?(ae(),ie("div",{key:0,class:"absolute p-4 bg-white bg-opacity-80 rounded-lg shadow-lg text-gray-800",style:we({left:n.position.x+"px",top:n.position.y+"px"})},[D("div",Ut,[D("div",{class:"w-6 h-6 mr-2",style:we({backgroundColor:n.skill.color})},null,4),D("h3",Gt,ue(n.skill.name),1)]),D("p",Zt,"Level: "+ue(Math.round(n.skill.level*100))+"%",1)],4)):Pt("",!0)}const Wt=Se(Kt,[["render",Bt]]),Xt=ke({__name:"SkillLegend",props:{skills:{}},emits:["skillSelected"],setup(x,{expose:r,emit:n}){r();const e=Ee(null),a=n,u={selectedSkill:e,emit:a,selectSkill:i=>{e.value=i===e.value?null:i,a("skillSelected",e.value)}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),Vt={class:"fixed bottom-4 left-4 bg-black bg-opacity-70 p-4 rounded-lg shadow-lg max-h-[40vh] md:max-h-[80vh] overflow-y-auto text-white w-64 sm:w-72"},qt={class:"space-y-2"},$t=["onClick"],Qt={class:"flex-grow"},Jt={class:"text-sm md:text-md font-semibold"},eo={class:"text-xs md:text-sm text-gray-300"};function to(x,r,n,e,a,s){return ae(),ie("div",Vt,[r[0]||(r[0]=D("h3",{class:"lg:text-lg font-bold mb-2 text-blue-300"},"Skills",-1)),D("ul",qt,[(ae(!0),ie(Tt,null,_t(n.skills,u=>(ae(),ie("li",{key:u.name},[D("button",{onClick:i=>e.selectSkill(u),class:Mt(["flex items-center w-full text-left hover:bg-gray-800 p-2 rounded transition-colors duration-200",{"bg-gray-700":e.selectedSkill===u}])},[D("div",{class:"w-4 h-4 mr-2 rounded-full",style:we({backgroundColor:u.color})},null,4),D("div",Qt,[D("div",Jt,ue(u.name),1),D("div",eo," Level: "+ue(Math.round(u.level*100))+"% ",1)])],10,$t)]))),128))])])}const oo=Se(Xt,[["render",to]]),no=ke({__name:"SolarSystemSkills",setup(x,{expose:r}){r();const n=[{name:"Frontend",skills:Yt},{name:"Backend",skills:Ft},{name:"Design",skills:Ht}],e=Ot(()=>n.flatMap(l=>l.skills)),a=Ee(null),s=Ee(null),u=jt({x:0,y:0});let i,d,f,y,b=[];Lt(()=>{a.value&&(S(),M(),P(),d.position.set(-90,0,100),d.lookAt(b[0].position),y.target.copy(b[0].position),y.update(),p(),window.addEventListener("resize",h),window.addEventListener("mousemove",O))}),vt(()=>{window.removeEventListener("resize",h),window.removeEventListener("mousemove",O),i.traverse(l=>{l instanceof V&&(l.geometry.dispose(),l.material.dispose())}),f.dispose()});function S(){i=new ht,d=new ft(75,window.innerWidth/window.innerHeight,.1,1e3),f=new bt({antialias:!0}),f.setSize(window.innerWidth,window.innerHeight),a.value.appendChild(f.domElement),y=new Dt(d,f.domElement),y.enableDamping=!0,y.dampingFactor=.05,d.position.z=100}function M(){n.forEach((m,w)=>{const E=new ne,T=new Fe(5,32,32),H=new ge({color:16776960}),z=new V(T,H);E.add(z),new Rt().load("/fonts/helvetiker_regular.typeface.json",K=>{const Z=new It(m.name,{font:K,size:1.5,height:.2}),j=new ge({color:16777215}),C=new V(Z,j);C.position.set(-4.5,6,0),E.add(C)}),m.skills.forEach((K,Z)=>{const j=new ne,C=(Z+1)*10,$=new gt(0,0,C,C).getPoints(100),Q=new He().setFromPoints($),se=new yt({color:16777215,transparent:!0,opacity:.3}),pe=new wt(Q,se);j.add(pe);const re=new Fe(K.level*1.5,32,32),he=new ge({color:K.color}),J=new V(re,he);J.position.x=C,J.userData={skill:K},j.add(J),E.add(j)}),E.position.x=(w-(n.length-1)/2)*180,i.add(E),b.push(E)})}const P=()=>{const l=new He,m=new Et({color:16777215,size:.1}),w=[];for(let T=0;T<1e4;T++){const H=de.randFloatSpread(2e3),z=de.randFloatSpread(2e3),G=de.randFloatSpread(2e3);w.push(H,z,G)}l.setAttribute("position",new St(w,3));const E=new kt(l,m);i.add(E)},p=()=>{requestAnimationFrame(p),y.update(),b.forEach(l=>{l.children.forEach((m,w)=>{m instanceof ne&&(m.rotation.z+=.001/(w+1))})}),f.render(i,d)},h=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight),window.innerWidth<=640?d.position.set(-45,0,100):window.innerWidth<=1024?d.position.set(-70,0,100):d.position.set(-90,0,100),d.lookAt(b[0].position),y.target.copy(b[0].position)},O=l=>{const m=new xt,w=new v;w.x=l.clientX/window.innerWidth*2-1,w.y=-(l.clientY/window.innerHeight)*2+1,m.setFromCamera(w,d);const E=m.intersectObjects(i.children,!0);if(E.length>0){const T=E[0].object;T.userData&&T.userData.skill?(s.value=T.userData.skill,u.x=l.clientX,u.y=l.clientY):s.value=null}else s.value=null},N=l=>{l?R(l):q()},R=l=>{b.forEach(m=>{m.children.forEach(w=>{w instanceof ne&&w.children.forEach(E=>{if(E instanceof V&&E.userData.skill){const T=E.userData.skill.name===l.name;E.scale.setScalar(T?1.5:1),E.material.opacity=T?1:.5}})})})},q=()=>{b.forEach(l=>{l.children.forEach(m=>{m instanceof ne&&m.children.forEach(w=>{w instanceof V&&(w.scale.setScalar(1),w.material.opacity=1)})})})},A={skillCategories:n,allSkills:e,container:a,hoveredSkill:s,mousePosition:u,get scene(){return i},set scene(l){i=l},get camera(){return d},set camera(l){d=l},get renderer(){return f},set renderer(l){f=l},get controls(){return y},set controls(l){y=l},get solarSystems(){return b},set solarSystems(l){b=l},initScene:S,createSolarSystems:M,createStarryBackground:P,animate:p,onWindowResize:h,onMouseMove:O,handleSkillSelection:N,highlightSelectedSkill:R,resetAllPlanets:q,SkillTooltip:Wt,SkillLegend:oo};return Object.defineProperty(A,"__isScriptSetup",{enumerable:!1,value:!0}),A}}),ao={ref:"container",class:"w-full h-screen"};function io(x,r,n,e,a,s){return ae(),ie("div",ao,[Ke(e.SkillTooltip,{skill:e.hoveredSkill,position:e.mousePosition},null,8,["skill","position"]),Ke(e.SkillLegend,{skills:e.allSkills,onSkillSelected:e.handleSkillSelection},null,8,["skills"])],512)}const uo=Se(no,[["render",io]]);export{uo as default};