var C=Object.defineProperty;var L=(e,t,s)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var n=(e,t,s)=>(L(e,typeof t!="symbol"?t+"":t,s),s);import{S as M,O as S,W as R,P as y,D as G,H as P,a as I,b as D,M as F,d as O,C as z,R as W,G as X,c as T,A,e as B}from"./vendor.80447285.js";const Y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))h(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&h(g)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function h(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}};Y();var E="/assets/laptop.423372ca.glb";class k{constructor(t){n(this,"canvas");n(this,"ctx");n(this,"h");n(this,"w");n(this,"navHeight");n(this,"appHeight");n(this,"rowGap");n(this,"wordGap");n(this,"wordHeight");n(this,"wordRound");n(this,"minLength");n(this,"maxLength");n(this,"startY");n(this,"startX");n(this,"codeColors",["#4594BF","#94D0F0","#D0C273","#C38956"]);n(this,"tabIndex",0);this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.h=this.canvas.height,this.w=this.canvas.width,this.navHeight=this.h*.05,this.appHeight=this.h-this.navHeight,this.rowGap=this.h*.025,this.wordGap=this.w*.01,this.wordHeight=this.w*.013,this.wordRound=this.w*.01,this.minLength=this.w*.05,this.maxLength=this.w*.1,this.startY=this.navHeight+this.h*.1,this.startX=this.w*.2+this.wordGap,this.ctx.fillStyle="#FFF",this.ctx.fillRect(0,0,this.w,this.navHeight);let s=0;["#209DE5","#F124B4","#1C1C1C"].map(h=>{this.ctx.beginPath(),this.ctx.fillStyle=h,this.ctx.arc(this.w*(s+=this.navHeight*.003),this.navHeight*.5,this.navHeight*.35,0,Math.PI*2),this.ctx.fill()}),this.clear()}clear(){this.ctx.fillStyle="#1C1C1C",this.ctx.fillRect(0,this.navHeight,this.w,this.appHeight)}randomLength(){return this.minLength+Math.random()*(this.maxLength-this.minLength)}randomColor(){return this.codeColors[Math.floor(Math.random()*this.codeColors.length)]}roundRect(t,s,h,i,a){h<2*a&&(a=h/2),i<2*a&&(a=i/2),this.ctx.beginPath(),this.ctx.moveTo(t+a,s),this.ctx.arcTo(t+h,s,t+h,s+i,a),this.ctx.arcTo(t+h,s+i,t,s+i,a),this.ctx.arcTo(t,s+i,t,s,a),this.ctx.arcTo(t,s,t+h,s,a),this.ctx.fill()}play(){const t=this.randomLength();this.ctx.fillStyle=this.randomColor(),this.appHeight<this.startY?(this.startX=this.w*.2+this.wordGap,this.startY=this.navHeight+this.h*.1,this.clear()):this.startX+t+this.wordGap>this.w*.8?(this.tabIndex===0&&Math.random()>.6?this.tabIndex++:this.tabIndex===1&&Math.random()>.75?this.tabIndex++:this.tabIndex>0&&this.tabIndex--,this.startX=this.w*.2+this.wordGap+this.w*.1*this.tabIndex,this.startY+=this.rowGap+this.wordHeight*(this.tabIndex===0&&Math.random()>.5?3:1)):(this.roundRect(this.startX,this.startY,t,this.wordHeight,this.wordRound),this.startX+=t+this.wordGap)}}const o=document.getElementById("c"),l=new M,r=new S(-o.clientWidth/2,o.clientWidth/2,o.clientHeight/2,-o.clientHeight/2,0,2e3);r.position.set(-1,3.5,-3.5);r.lookAt(.03,0,.15);r.zoom=1e3;r.updateProjectionMatrix();const d=new R({canvas:o,antialias:!0,alpha:!0});d.setSize(o.clientWidth,o.clientHeight,!1);d.setPixelRatio(window.devicePixelRatio);d.shadowMap.type=y;d.shadowMap.enabled=!0;const c=new G(16777215,1);c.castShadow=!0;c.shadow.camera.left=-.3;c.shadow.camera.right=.4;c.shadow.camera.top=-.2;c.shadow.camera.bottom=.2;c.position.z=.2;c.position.set(0,1,.2);c.shadow.mapSize.width=1024;c.shadow.mapSize.height=1024;l.add(c);const N=new P(15658734,0,.1);l.add(N);const q=new I(10,10),K=new D,u=new F(q,K);u.receiveShadow=!0;u.rotateX(O(-90));l.add(u);const w=document.createElement("canvas");w.width=1920/4;w.height=1080/4;const U=new k(w),p=new z(w);p.flipY=!1;p.wrapS=W;p.repeat.x=-1;let f=0;window.addEventListener("mousemove",e=>{const t=o.getBoundingClientRect();f=(e.x-t.right+t.width/2)*1e-4},{passive:!0});window.addEventListener("touchmove",e=>{const t=o.getBoundingClientRect();f=(e.touches[0].pageX-t.right+t.width/2)/o.clientWidth*2*Math.PI/16},{passive:!0});const J=new X;let v,m;J.load(E,function(e){e.scene.traverse(t=>{if(t.isObject3D&&(t.castShadow=!0,t.name==="Bottom"&&(v=t),t.name==="Screen")){const s=new T({map:p});t.material.dispose(),t.material=s}}),l.add(e.scene),m=new A(e.scene),e.animations.map(t=>m.clipAction(t).play())},void 0,function(e){console.error(e)});function Q(){const e=o.clientWidth,t=o.clientHeight;r.left=-e/2,r.right=e/2,r.top=t/2,r.bottom=-t/2,r.updateProjectionMatrix(),d.setSize(e,t,!1)}const x=new ResizeObserver(Q);try{x.observe(o,{box:"device-pixel-content-box"})}catch{x.observe(o,{box:"content-box"})}let b=Date.now();const V=new B;function H(){v&&(v.rotation.y=f);const e=500,t=Date.now();b+e<=Date.now()&&(U.play(),p.needsUpdate=!0,b=t),requestAnimationFrame(H),m&&m.update(V.getDelta()),d.render(l,r)}H();