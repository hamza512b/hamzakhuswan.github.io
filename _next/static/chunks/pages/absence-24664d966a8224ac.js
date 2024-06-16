(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{489:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/absence",function(){return n(7925)}])},6421:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(1527),r=n(5924),i=n(2262),s=n.n(i),o=n(5279),c=n.n(o);function l(e){return(0,a.jsxs)("footer",{className:(0,r.Z)(c().footer,e.className),children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Want to talk"}),(0,a.jsx)("p",{children:"Feel free to connect if you have questions, looking for a developer or just want to talk."}),(0,a.jsx)(s(),{href:"mailto:hamzakhuswan@outlook.com",className:c().link,children:"hamzakhuswan@outlook.com"})]}),(0,a.jsx)("div",{className:c().links,children:(0,a.jsx)(s(),{href:"https://github.com/hamza512b",referrerPolicy:"no-referrer",target:"_blank",className:c().link,children:"Github"})})]})}},9589:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(1527);function r(e){let{src:t,alt:n}=e;return(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{type:"image/avif",srcSet:"".concat(t,".1x.avif 1x, ").concat(t,".2x.avif 2x")}),(0,a.jsx)("source",{type:"image/png",srcSet:"".concat(t,".1x.png 1x, ").concat(t,".2x.png 2x")}),(0,a.jsx)("img",{src:"".concat(t,".1x.png"),alt:n})]})}},2890:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(1527),r=n(5924),i=n(358),s=n.n(i);function o(){return(0,a.jsxs)("nav",{className:s().nav,children:[(0,a.jsx)("a",{className:(0,r.Z)(s().link,s().primary),href:"/",children:"Hamza"}),(0,a.jsx)("a",{className:s().link,href:"/#about",children:"About"}),(0,a.jsx)("a",{className:s().link,href:"/#projects",children:"Projects"})]})}},6222:function(e,t,n){"use strict";n.d(t,{H:function(){return r}});var a=n(1527);function r(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/logo192.png"}),(0,a.jsx)("meta",{property:"og:title",content:"Hamza's personal website"}),(0,a.jsx)("meta",{property:"og:description",content:"Hamza's personal website"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"https://hamza.se/"}),(0,a.jsx)("meta",{property:"og:image",content:"https://hamza.se/preview.jpg"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Hamza's personal website"}),(0,a.jsx)("meta",{name:"twitter:description",content:"Hamza's personal website"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"author"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://hamza.se/preview.jpg"}),(0,a.jsx)("link",{rel:"manifest",href:"/manifest.json"})]})}},7925:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z},meta:function(){return L}});var a=n(1527),r=n(959);let i=r.createContext({});function s(e){let t=r.useContext(i);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let o={};function c({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||o:s(e),r.createElement(i.Provider,{value:a},t)}var l=n(9915),d=n.n(l),u=n(5924),h=n(5774),m=n.n(h),p=n(2890),f=n(6421),x=n(9429),g=n.n(x),j=n(9589),y=n(6222);let k=e=>(0,a.jsx)(j.Z,{alt:e.alt,src:e.src}),v={img:k};function _(e){let{children:t,meta:n,...r}=e;return(0,a.jsxs)(c,{components:v,children:[(0,a.jsxs)(g(),{children:[(0,a.jsx)("title",{children:n.title}),(0,a.jsx)("meta",{name:"description",content:n.description}),(0,a.jsx)(y.H,{})]}),(0,a.jsxs)("main",{className:(0,u.Z)(m().main,d().className),...r,children:[(0,a.jsx)(p.Z,{}),(0,a.jsx)("div",{className:m().content,children:t}),(0,a.jsx)(f.Z,{})]})]})}function b(e){var t=(0,r.useRef)(),n=(0,r.useRef)("");(0,r.useEffect)(function(){var a,r=null==e?void 0:e.target;if((null===(a=e.condition)||void 0===a||a)&&r){var i=null;return"printable"===e.key?i=function(a){1!==a.key.length||a.ctrlKey||(a.preventDefault(),t.current&&clearTimeout(t.current),t.current=setTimeout(function(){n.current=""},e.clearTimeout||750),n.current+=a.key,e.action(a,n.current))}:"string"==typeof e.key?i=function(t){t.code===e.key&&(t.preventDefault(),e.action(t))}:Array.isArray(e.key)&&(i=function(t){e.key.some(function(e){return e===t.code})&&e.action(t,"")}),i&&r.addEventListener("keydown",i),function(){i&&r.removeEventListener("keydown",i)}}},[e])}var w=n(5189),D=n.n(w),N=n(8065);function P(e){return RegExp(/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/).test(e)}function T(){let[e,t]=(0,r.useState)(new Date().getDate()),[n,i]=(0,r.useState)(new Date().getMonth()),[s,o]=(0,r.useState)(new Date().getFullYear()),[c,l]=(0,r.useState)(""),d=(0,r.useMemo)(()=>new Date(s,n,e),[e,n,s]),h=(0,r.useId)(),m=(0,r.useMemo)(()=>{let e=N.ou.fromJSDate(d||new Date);return Array(6).fill(Array(7).fill(0)).map((t,n)=>t.map((t,a)=>{let r=e.startOf("month").startOf("week").plus({days:7*n+a});return{date:r,active:r.toMillis()===d.getTime(),type:e.month===r.month?"active":"inactive"}}))},[d]),p=(0,r.useRef)(null),f=(0,r.useRef)(null),x=(0,r.useRef)(null);function g(e){let t=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),n=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(e),a=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e);l("".concat(t,"/").concat(n,"/").concat(a))}return b({key:"ArrowUp",action:()=>{t(e-7),requestAnimationFrame(()=>{var e;null===(e=f.current)||void 0===e||e.focus()})},target:x.current}),b({key:"ArrowDown",action:()=>{t(e+7),requestAnimationFrame(()=>{var e;null===(e=f.current)||void 0===e||e.focus()})},target:x.current}),b({key:"ArrowLeft",action:()=>{t(e-1),requestAnimationFrame(()=>{var e;null===(e=f.current)||void 0===e||e.focus()})},target:x.current}),b({key:"ArrowRight",action:()=>{t(e+1),requestAnimationFrame(()=>{var e;null===(e=f.current)||void 0===e||e.focus()})},target:x.current}),b({key:"PageUp",action:e=>{e.shiftKey?o(s-1):i(n-1),requestAnimationFrame(()=>{var e;null===(e=f.current)||void 0===e||e.focus()})},target:x.current}),b({key:"PageDown",action:e=>{e.shiftKey?o(s+1):i(n+1),requestAnimationFrame(()=>{var e;null===(e=f.current)||void 0===e||e.focus()})},target:x.current}),(0,a.jsxs)("div",{className:D().datePicker,children:[(0,a.jsx)("label",{htmlFor:"datepicker-label-".concat(h),className:"sr-only",children:"Choose Date:"}),(0,a.jsxs)("div",{className:D().datePickerButton,children:[(0,a.jsx)("input",{type:"text",id:"datepicker-label-".concat(h),placeholder:"yyyy/mm/dd",defaultValue:c,disabled:!0,"aria-autocomplete":"none"}),(0,a.jsx)("button",{type:"button","aria-label":"Date picker button ".concat(P(c)?"".concat(new Intl.DateTimeFormat("en",{day:"2-digit",month:"long",year:"numeric"}).format(new Date(c))):""),children:(0,a.jsx)("svg",{width:"21",height:"20",fill:"none",children:(0,a.jsx)("path",{d:"M6.1 5V1m8 4V1m-9 8h10m-12 10h14a2 2 0 002-2V5a2 2 0 00-2-2h-14a2 2 0 00-2 2v12c0 1.1 1 2 2 2z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,a.jsxs)("div",{className:D().datePickerDialog,ref:p,role:"dialog","aria-modal":"true","aria-labelledby":"dialog-label-".concat(h),children:[(0,a.jsxs)("div",{className:D().datePickerDialogHeader,children:[(0,a.jsx)("button",{onClick:()=>o(s-1),"aria-label":"Previous Year",children:(0,a.jsx)("svg",{width:"18",height:"16",fill:"none",children:(0,a.jsx)("path",{d:"M8.5 15l-7-7 7-7m8 14l-7-7 7-7",stroke:"#333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,a.jsx)("button",{onClick:()=>i(n-1),"aria-label":"Previous Month",children:(0,a.jsx)("svg",{width:"9",height:"16",fill:"none",children:(0,a.jsx)("path",{d:"M8 15L1 8l7-7",stroke:"#333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,a.jsx)("span",{id:"dialog-label-".concat(h),"aria-live":"polite",children:new Intl.DateTimeFormat("en-US",{month:"long",year:"numeric"}).format(new Date(s,n,e))}),(0,a.jsx)("button",{onClick:()=>i(n+1),"aria-label":"Next Month",children:(0,a.jsx)("svg",{width:"9",height:"16",fill:"none",children:(0,a.jsx)("path",{d:"M1 1l7 7-7 7",stroke:"#333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,a.jsx)("button",{onClick:()=>o(s+1),"aria-label":"Next Year",children:(0,a.jsx)("svg",{width:"18",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M9.5 1l7 7-7 7m-8-14l7 7-7 7",stroke:"#333",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,a.jsxs)("table",{className:D().datePickerDialogGrid,ref:x,role:"grid","aria-labelledby":"dialog-label-".concat(h),children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",abbr:"Monday",children:"Mo"}),(0,a.jsx)("th",{scope:"col",abbr:"Tuesday",children:"Tu"}),(0,a.jsx)("th",{scope:"col",abbr:"Wednesday",children:"We"}),(0,a.jsx)("th",{scope:"col",abbr:"Thursday",children:"Th"}),(0,a.jsx)("th",{scope:"col",abbr:"Friday",children:"Fr"}),(0,a.jsx)("th",{scope:"col",abbr:"Saturday",children:"Sa"}),(0,a.jsx)("th",{scope:"col",abbr:"Sunday",children:"Su"})]})}),(0,a.jsx)("tbody",{children:m.map((e,n)=>(0,a.jsx)("tr",{children:e.map((e,n)=>{let{date:r,active:i,type:s}=e;return(0,a.jsx)("td",{"aria-selected":i,children:(0,a.jsx)("button",{className:(0,u.Z)(i&&D().active),tabIndex:i?0:-1,ref:i?f:void 0,onClick:()=>{t(r.day),g(new Date(d.getFullYear(),d.getMonth(),r.day))},disabled:"inactive"===s,children:r.day})},r.day)})},n))})]}),(0,a.jsxs)("div",{className:D().datePickerDialogButtons,children:[(0,a.jsx)("button",{className:D().secondary,onClick:function(){let e=P(c)?new Date(c):new Date;t(e.getDate()),i(e.getMonth()),o(e.getFullYear())},children:"Cancel"}),(0,a.jsx)("button",{className:D().primary,onClick:()=>g(d),children:"Done"})]})]})]})}var A=n(1074),F=n.n(A);function I(){return(0,a.jsxs)("div",{className:F().dialog,children:[(0,a.jsxs)("div",{className:F().content,children:[(0,a.jsx)("div",{className:F().icon,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})})}),(0,a.jsxs)("div",{className:F().text,children:[(0,a.jsx)("div",{as:"h3",className:F().title,children:"Are your sure?"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("p",{className:F().paragraph,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores quaerat."})})]})]}),(0,a.jsxs)("div",{className:F().actions,children:[(0,a.jsx)("button",{className:(0,u.Z)(F().button,F().secondary),children:"Cancel"}),(0,a.jsx)("button",{className:(0,u.Z)(F().button,F().primary),children:"Confirm"})]})]})}var M=n(7184),C=n.n(M);function S(){return(0,a.jsxs)("div",{className:C().container,children:[(0,a.jsx)(T,{}),(0,a.jsx)(I,{})]})}let L={title:"Absence tracking system",description:"System which which facilitate for schools to deal with student absence."},z=e=>{let{children:t}=e;return(0,a.jsx)(_,{meta:L,children:t})};function E(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",img:"img",a:"a"},s(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"Absence tracking system"}),"\n",(0,a.jsx)(t.p,{children:"Absence tracking system for schools, which facilitate for schools to deal with student absence. It is designed and developed with a vision of creating a better experience for everyone. It allows the student to view their lecture time and report their absence, it allows teachers to report students' absence and it allows administrators to manage the organization."}),"\n",(0,a.jsx)(t.p,{children:"I have planned, designed and developed all this system by myself. It has been tough project and I have spent countless hours on it."}),"\n",(0,a.jsx)(t.h2,{children:"Core functionality"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Allow you as administrator to manage users to your organization, add groups and events or repeating events."}),"\n",(0,a.jsx)(t.li,{children:"Allow you as student/guardian to view your events and absence + report your absence."}),"\n",(0,a.jsx)(t.li,{children:"Allow you as teacher to report the absence in your classroom."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"/images/admin",alt:"Administrator interface"})}),"\n",(0,a.jsx)(t.h2,{children:"Tech stack"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"React, Next.js as framework"}),"\n",(0,a.jsx)(t.li,{children:"TailwindCSS, for styling"}),"\n",(0,a.jsx)(t.li,{children:"tRPC, for API endpoints"}),"\n",(0,a.jsx)(t.li,{children:"Prisma, as ORM"}),"\n",(0,a.jsx)(t.li,{children:"MySQL as database."}),"\n",(0,a.jsx)(t.li,{children:"Stripe as payment processor"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{children:"Accessible UI"}),"\n",(0,a.jsx)(t.p,{children:"One of the key features of the absence tracking system is its accessible user interface. The system has been designed with accessibility in mind, making it easy for users of all abilities to use the system. The user interface includes features such as keyboard navigation, and supports screen reader, which help to ensure that the system can be used by as many people as possible."}),"\n",(0,a.jsx)(S,{}),"\n",(0,a.jsx)(t.h2,{children:"Scheduling"}),"\n",(0,a.jsx)(t.p,{children:"The absence tracking system includes a robust scheduling feature that allows students and teachers to view their schedule and manage their attendance. The scheduling feature includes the ability to view upcoming events and absence, and to report absences as necessary. The system also includes the ability to create repeating events, making it easy for administrator to schedule classes and for students to keep track of their schedules."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"/images/absence",alt:"Schedule show in the student interface"})}),"\n",(0,a.jsx)(t.h2,{children:"The project is live"}),"\n",(0,a.jsxs)(t.p,{children:["The absence tracking system is currently live and can be found at this ",(0,a.jsx)(t.a,{href:"https://diskret.linjar.se",children:"address"}),". The website can be used in both English or Swedish. However, as for now, no organization is using the software, as it is still in its initial stage."]}),"\n",(0,a.jsx)(t.p,{children:"I plan to continue developing and refining the system, with the hope of making it a valuable tool for schools and educational institutions. I am committed to making the system as useful and user-friendly as possible."}),"\n",(0,a.jsx)(t.p,{children:"In the future, I plan to market the system to schools and educational institutions, and to build partnerships with organizations that share my vision of creating a better educational experience for everyone. I am excited to see where this project will take me, and I look forward to continuing to improve and refine the project."})]})}var Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(z,Object.assign({},e,{children:(0,a.jsx)(E,e)}))}},9915:function(e){e.exports={style:{fontFamily:"'__Manrope_e7f771', '__Manrope_Fallback_e7f771', sans-serif",fontStyle:"normal"},className:"__className_e7f771",variable:"__variable_e7f771"}},7184:function(e){e.exports={container:"ComponentsPreview_container__ClhCq"}},5189:function(e){e.exports={datePicker:"DatePicker_datePicker__wV0xZ",datePickerButton:"DatePicker_datePickerButton__4PrKo",datePickerDialog:"DatePicker_datePickerDialog__Zdlph",datePickerDialogHeader:"DatePicker_datePickerDialogHeader__u0y_h",datePickerDialogGrid:"DatePicker_datePickerDialogGrid__9sTu5",active:"DatePicker_active__Ep_OE",datePickerDialogButtons:"DatePicker_datePickerDialogButtons__23yBM",primary:"DatePicker_primary__b5DHH",secondary:"DatePicker_secondary__EQarI"}},1074:function(e){e.exports={dialog:"Dialog_dialog__O0tFf",content:"Dialog_content__f5GI3",icon:"Dialog_icon__mwBRI",text:"Dialog_text__02BPQ",title:"Dialog_title__g_8EB",paragraph:"Dialog_paragraph__dhrCi",actions:"Dialog_actions__hcL79",button:"Dialog_button__yAw0Q",primary:"Dialog_primary__Ixu8m",secondary:"Dialog_secondary__3oPHB"}},5279:function(e){e.exports={footer:"Footer_footer__1IwEk",link:"Footer_link__zqu3E",links:"Footer_links__fUg_J"}},5774:function(e){e.exports={main:"MDX_main__eT7HS",content:"MDX_content__y7X1f"}},358:function(e){e.exports={nav:"Nav_nav__Zq1i6",link:"Nav_link__ZgDoZ",primary:"Nav_primary__pNm7e"}}},function(e){e.O(0,[948,774,888,179],function(){return e(e.s=489)}),_N_E=e.O()}]);