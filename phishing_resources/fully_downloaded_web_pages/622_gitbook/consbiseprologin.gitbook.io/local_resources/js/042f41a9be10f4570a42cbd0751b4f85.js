(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8731],{69591:function(t,e,n){"use strict";n.d(e,{AnnotationPopover:function(){return l}});var r=n(27573),a=n(21198);n(7653);var i=n(364),o=n(71474);function l(t){let{children:e,body:n}=t,l=(0,i.ZK)();return(0,r.jsxs)(a.fC,{children:[(0,r.jsx)(a.xz,{asChild:!0,children:(0,r.jsx)("button",{"data-testid":"annotation-button","aria-label":(0,i.Ff)(l,"annotation_button_label"),className:(0,o.t)("decoration-dotted","decoration-1","underline","underline-offset-2"),children:e})}),(0,r.jsx)(a.h_,{children:(0,r.jsxs)(a.VY,{className:(0,o.t)("text-sm","max-w-[280px]","bg-light","ring-1","ring-dark/2","rounded","shadow-1xs","shadow-dark/1","p-3","[&_p]:leading-snug","dark:bg-dark","dark:ring-light/2","dark:shadow-dark/4","-outline-offset-2","outline-2","outline-primary/8","z-20"),sideOffset:5,children:[n,(0,r.jsx)(a.Eh,{asChild:!0,children:(0,r.jsxs)("svg",{width:"100%",viewBox:"0 0 8 5",preserveAspectRatio:"xMaxYMid meet",className:(0,o.t)("relative","z-[2]","fill-light","stroke-dark/2","[paint-order:stroke_fill]","dark:fill-dark","dark:stroke-light/2"),fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{"clip-path":"url(#clipAnnotation)",children:(0,r.jsx)("path",{d:"M0 0L4 4L8 0",strokeWidth:"2",strokeLinecap:"round",stroke:"inherit",fill:"inherit"})}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clipAnnotation",children:(0,r.jsx)("rect",{width:"8",height:"5",fill:"white"})})})]})})]})})]})}},2709:function(t,e,n){"use strict";n.d(e,{CopyCodeButton:function(){return l}});var r=n(27573),a=n(7653),i=n(364),o=n(71474);function l(t){let{codeId:e,style:n}=t,l=(0,i.ZK)(),[s,c]=a.useState(!1);return a.useEffect(()=>{if(!s)return;let t=setTimeout(()=>{c(!1)},1e3);return()=>{clearTimeout(t)}},[s]),(0,r.jsx)("button",{onClick:()=>{let t=document.getElementById(e);t&&(navigator.clipboard.writeText(function(t){let e="",n=t=>{t instanceof HTMLBRElement?e+="\n":t instanceof HTMLSpanElement?t.classList.contains("ew")?e+="\n":e+=t.innerText:t instanceof HTMLElement?t.childNodes.forEach(n):e+=t.textContent};return n(t),e}(t)),c(!0))},className:(0,o.t)(n,"print:hidden"),children:(0,i.t)(l,s?"code_copied":"code_copy")})}},50134:function(t,e,n){"use strict";n.d(e,{Details:function(){return l}});var r=n(27573),a=n(7653),i=n(41729),o=n(71474);function l(t){let{children:e,id:n,className:l}=t,s=a.useRef(null),[c,u]=a.useState(!1),d=(0,i.Hp)();return a.useEffect(()=>{var t;if(!d||!s.current)return;d===n&&u(!0);let e=document.getElementById(d);u(!!(e&&(null===(t=s.current)||void 0===t?void 0:t.contains(e))))},[d,n]),(0,r.jsx)("details",{ref:s,id:n,open:t.open||c,className:(0,o.t)(l,"group/expandable","shadow-dark/1","bg-gradient-to-t","from-light-1","to-light-1","border","border-b-0","border-dark-3/3","[&]:mt-[0px]","[&:first-child]:mt-5","[&:first-child]:rounded-t-lg","[:not(&)_+&]:mt-5","[:not(&)_+&]:rounded-t-lg","[&:not(:has(+_&))]:mb-5","[&:not(:has(+_&))]:rounded-b-lg","[&:not(:has(+_&))]:border-b","dark:border-light-2/[0.06]","dark:from-dark-2","dark:to-dark-2","dark:shadow-none","group open:dark:to-dark-2/8","group open:to-light-1/6"),children:e})}},46856:function(t,e,n){"use strict";n.d(e,{DynamicTabs:function(){return o}});var r=n(27573),a=n(7653),i=n(71474);function o(t){let{tabs:e,style:n}=t,[o,l]=a.useState(e[0].id);return(0,r.jsxs)("div",{className:(0,i.t)("rounded-lg","straight-corners:rounded-sm","ring-1","ring-inset","ring-dark/3","flex","overflow-hidden","flex-col","dark:ring-light/2",n),children:[(0,r.jsx)("div",{role:"tablist",className:(0,i.t)("group/tabs","inline-flex","flex-row","self-stretch","after:flex-[1]","after:bg-dark-2/1","[&:has(button.active-tab:last-of-type):after]:rounded-bl-md","dark:after:bg-dark-1/5"),children:e.map(t=>(0,r.jsx)("button",{role:"tab","aria-selected":o===t.id,"aria-controls":"tabpanel-".concat(t.id),id:"tab-".concat(t.id),onClick:()=>{l(t.id)},className:(0,i.t)("[&:has(+_.active-tab)]:rounded-br-md","[.active-tab_+_&]:rounded-bl-md","[.active-tab_+_:after]:rounded-br-md","inline-block","text-sm","px-3.5","py-2","transition-[color]","font-[500]","relative","after:transition-colors","after:group-hover/tabs:border-transparent","after:border-r","after:absolute","after:left-[unset]","after:right-0","after:border-dark/4","after:top-[15%]","after:h-[70%]","after:w-[1px]","last:after:border-transparent","text-dark-2/7","bg-dark-2/1","dark:bg-dark-1/5","hover:text-dark-2","dark:text-light-3/8","dark:after:border-light/2","dark:hover:text-light-3","truncate","max-w-full",o===t.id?["shrink-0","active-tab","text-dark-2","bg-transparent","dark:text-light","dark:bg-transparent","after:[&.active-tab]:border-transparent","after:[:has(+_&.active-tab)]:border-transparent","after:[:has(&_+)]:border-transparent"]:null),children:t.title},t.id))}),e.map(t=>(0,r.jsx)("div",{role:"tabpanel",id:"tabpanel-".concat(t.id),"aria-labelledby":"tab-".concat(t.id),className:(0,i.t)("p-4",t.id!==o?"hidden":null),children:t.children},t.id))]})}},41729:function(t,e,n){"use strict";n.d(e,{Hp:function(){return o},yh:function(){return a},jh:function(){return l}});var r=n(7653);function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{rootMargin:n,threshold:a=.5}=e,[i,o]=r.useState(null),l=r.useRef(new Map);return r.useEffect(()=>{o(null);let e=new IntersectionObserver(t=>{t.forEach(t=>{let e=t.target.id;e&&l.current.set(e,t.isIntersecting&&t.intersectionRatio>=a)});let e=Array.from(l.current.entries()).find(t=>{let[,e]=t;return e});e&&o(e[0])},{rootMargin:n,threshold:a});return t.forEach(t=>{try{let n=document.getElementById(t);n&&e.observe(n)}catch(t){console.log(t)}}),()=>{e.disconnect()}},[t,a,n]),i}var i=n(67754);function o(){var t,e;let a=(0,i.useParams)(),[o,l]=r.useState(null===(e=n.g.location)||void 0===e?void 0:null===(t=e.hash)||void 0===t?void 0:t.slice(1));return r.useEffect(()=>{function t(){var t,e;l(null===(e=n.g.location)||void 0===e?void 0:null===(t=e.hash)||void 0===t?void 0:t.slice(1))}return n.g.addEventListener("hashchange",t),t(),()=>n.g.removeEventListener("hashchange",t)},[a]),o}function l(){let t=o();r.useLayoutEffect(()=>{if(t){let e=document.getElementById(t);e&&e.scrollIntoView({block:"start",behavior:"smooth"})}},[t])}},22480:function(t,e,n){"use strict";n.r(e),n.d(e,{ContentKit:function(){return o}});var r=n(7653),a=n(95863),i=n(33026);function o(t){var e;let{security:n,initialInput:l,initialOutput:s,children:c,render:u,onAction:d}=t,[f,p]=r.useState({input:l,children:c,output:s,state:null!==(e=s.state)&&void 0!==e?e:{}}),[h,m]=r.useState(null),b=r.useCallback(async t=>{var e;let n={...f.input,...(null===(e=f.output)||void 0===e?void 0:e.props)?{props:f.output.props}:{},...t,state:{...f.input.state,...f.state,...t.state}};console.log("transition to input",n);let r=await u(n);console.log("and got output",r.output,"for",n),p(t=>({input:n,children:r.children,output:r.output,state:t.state}))},[p,f,u]),g=r.useMemo(()=>({security:n,state:f.state,setState:t=>{p(e=>({...e,state:{...e.state,...t}}))},update:b,dispatchAction:async function(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=(0,i.a)(f.state,t);switch(e&&(null==d||d(n)),console.log("action",n),n.action){case"@ui.modal.open":{let t={componentId:n.componentId,props:n.props,context:f.input.context,action:n},e=await u(t);m({mode:"modal",initialInput:t,initialOutput:e.output,initialChildren:e.children});break}case"@ui.url.open":window.open(n.url,"_blank");break;default:await b({action:n})}}}),[b,n,f.state,f.input.context,p,u]),v=r.useCallback(async t=>{"@ui.modal.close"===t.action&&(b({action:t}),m(null))},[]);return r.createElement(r.Fragment,null,r.createElement(a.l.Provider,{value:g},f.children),h?r.createElement(o,{security:n,initialInput:h.initialInput,initialOutput:h.initialOutput,render:u,onAction:v},h.initialChildren):null)}},10565:function(t,e,n){"use strict";n.d(e,{ElementButton:function(){return l}});var r=n(7653),a=n(45531),i=n.n(a),o=n(95863);function l(t){var e;let{element:n,icon:a,trailingIcon:l}=t,s=(0,o.D)(),[c,u]=r.useState(!1);return r.createElement("button",{title:n.tooltip,className:i()("contentkit-button","contentkit-button-style-".concat(null!==(e=n.style)&&void 0!==e?e:"secondary"),c?"contentkit-button-loading":null),onClick:t=>{n.disabled||c||(t.stopPropagation(),u(!0),s.dispatchAction(n.onPress).finally(()=>{u(!1)}))}},a,n.label?r.createElement("span",{className:"contentkit-button-label"},n.label):null,l)}},84130:function(t,e,n){"use strict";n.d(e,{ElementCard:function(){return l}});var r=n(7653),a=n(45531),i=n.n(a),o=n(95863);function l(t){let{element:e,children:n,icon:a,hint:l,buttons:s}=t,c=(0,o.D)();return r.createElement("div",{className:i()("contentkit-card",e.onPress?"contentkit-card-pressable":null),onClick:()=>{e.onPress&&c.dispatchAction(e.onPress)}},e.title?r.createElement("div",{className:i()("contentkit-card-header")},a?r.createElement("div",{className:i()("contentkit-card-icon")},a):null,r.createElement("div",{className:i()("contentkit-card-header-content")},r.createElement("div",{className:i()("contentkit-card-title")},e.title),l?r.createElement("div",{className:i()("contentkit-card-hint")},l):null),s&&s.length>0?r.createElement("div",{className:i()("contentkit-card-buttons")},s):null):null,n?r.createElement("div",{className:i()("contentkit-card-body")},n):null)}},63446:function(t,e,n){"use strict";n.d(e,{ElementMarkdownClient:function(){return o}});var r=n(7653),a=n(33026),i=n(95863);function o(t){let{element:e,initialMarkdown:n=e.content,renderMarkdown:o,children:l}=t,[s,c]=r.useState(null),u=(0,i.D)(),d=(0,a.a)(u.state,e.content);return r.useEffect(()=>{if(n===d){c(null);return}let t=!1;return(async()=>{let e=await o(d);t||c(e)})(),()=>{t=!0}},[n,d]),r.createElement(r.Fragment,null,s||l)}},61261:function(t,e,n){"use strict";n.d(e,{ElementModal:function(){return l}});var r=n(7653),a=n(45531),i=n.n(a),o=n(95863);function l(t){let{element:e,subtitle:n,children:a}=t,l=(0,o.D)(),[s,c]=r.useState(!1);r.useEffect(()=>{c(!0)},[]);let u=async()=>{await l.dispatchAction({action:"@ui.modal.close",returnValue:e.returnValue||{}})};return r.createElement("div",{className:i()("contentkit-modal-backdrop"),onClick:u},r.createElement("div",{className:i()("contentkit-modal",s?"contentkit-modal-opened":null),onClick:t=>{t.stopPropagation()}},r.createElement("div",{className:i()("contentkit-modal-header")},e.title?r.createElement("h1",{className:i()("contentkit-modal-title")},e.title):null,n?r.createElement("div",{className:"contentkit-modal-subtitle"},n):null),r.createElement("div",{className:i()("contentkit-modal-body")},a)))}},75216:function(t,e,n){"use strict";n.d(e,{ElementTextInput:function(){return s}});var r=n(7653),a=n(45531),i=n.n(a),o=n(95863),l=n(33026);function s(t){var e,n,a;let{element:s}=t,c=(0,o.D)(),u=null!==(n=null!==(e=(0,l.g)(c.state,s.state))&&void 0!==e?e:s.initialValue)&&void 0!==n?n:"",d=t=>{c.setState({[s.state]:t.target.value})};return s.multiline?r.createElement("textarea",{disabled:s.disabled,className:i()("contentkit-textinput"),value:u,placeholder:s.placeholder,onChange:d}):r.createElement("input",{type:null!==(a=s.inputType)&&void 0!==a?a:"text",disabled:s.disabled,className:i()("contentkit-textinput"),value:u,placeholder:s.placeholder,onChange:d})}},50027:function(t,e,n){"use strict";n.d(e,{ElementWebframe:function(){return o}});var r=n(7653),a=n(95863),i=n(33026);function o(t){let{element:e}=t,[n,o]=r.useState(!1),l=(0,a.D)(),s=r.useRef(null),[c,u]=r.useState({}),d=r.useRef(!1),f=r.useRef([]),p=r.useCallback(t=>{let n=new URL(e.source.url);if(l.security.firstPartyDomains.includes(n.host)){if(d.current){if(!s.current)return;s.current.contentWindow.postMessage(t,"".concat(n.protocol,"//").concat(n.host))}else f.current.push(t)}},[l.security]);return r.useEffect(()=>{let t=t=>{if(!s.current)return;let e=t.data,n=new URL(t.origin);if(!l.security.firstPartyDomains.includes(n.host))return;let r=s.current.contentWindow;if(r&&t.source===r){if("string"==typeof e)try{let t=JSON.parse(e);if("iframe.resize"===t.context&&"number"==typeof t.height){let e=r.outerWidth,n=t.height;u({maxWidth:e,aspectRatio:e/n,maxHeight:n})}}catch(t){return}if(e.action)switch(e.action.action){case"@webframe.ready":d.current=!0,f.current.forEach(t=>{p(t)}),f.current=[];break;case"@webframe.resize":u({maxWidth:Number(e.action.size.maxWidth),maxHeight:Number(e.action.size.maxHeight),aspectRatio:Number(e.action.size.aspectRatio)});break;default:l.update({action:e.action})}}};return window.addEventListener("message",t),o(!0),()=>{window.removeEventListener("message",t)}},[l,p]),r.useEffect(()=>{if(!e.data)return;let t={};return Object.entries(e.data).forEach(e=>{let[n,r]=e;t[n]=(0,i.a)(l.state,r)}),p({state:t})},[e.data,l.state,p]),r.createElement("div",{className:"contentkit-webframe",style:{aspectRatio:c.aspectRatio||e.aspectRatio||void 0,maxWidth:c.maxWidth||void 0,maxHeight:c.maxHeight||void 0}},n?r.createElement("iframe",{ref:s,src:e.source.url,allowFullScreen:!0,allow:"clipboard-write",style:{position:"absolute",top:0,left:0,bottom:0,right:0,width:"100%",height:"100%",border:"none"}}):null)}},95863:function(t,e,n){"use strict";n.d(e,{D:function(){return i},l:function(){return a}});var r=n(7653);let a=r.createContext(null);function i(){let t=r.useContext(a);if(!t)throw Error("ContentKit component should be wrapped in <ContentKit>");return t}},33026:function(t,e,n){"use strict";function r(t,e){let n=t[e];return"string"==typeof n?n:"number"==typeof n?"".concat(n):void 0}n.d(e,{a:function(){return function t(e,n){if("string"==typeof n||"number"==typeof n||"boolean"==typeof n||void 0===n)return n;if(Array.isArray(n))return n.map(e=>t(localState,e));if("$state"in n&&"string"==typeof n.$state)return e[n.$state];let r={};return Object.entries(n).forEach(n=>{let[a,i]=n;r[a]=t(e,i)}),r}},g:function(){return r}})},48129:function(){},93313:function(){},52071:function(){},87133:function(){},40671:function(){},85125:function(t){t.exports={olListItemBullet:"ListItem_olListItemBullet__9X19L"}},11724:function(t){t.exports={progressOpacitySharp:"table_progressOpacitySharp__gzaM5",progressContainer:"table_progressContainer__A4v1T",progressOpacity:"table_progressOpacity__vIKGt",opacityProgress:"table_opacityProgress__S08Gs",opacityProgressSharp:"table_opacityProgressSharp__2hfJ1",strokeOpacityProgressInverted:"table_strokeOpacityProgressInverted__H5kWC",progressSvg:"table_progressSvg__pg3ZZ",svgProgress:"table_svgProgress__Dqehn"}},68179:function(t,e,n){"use strict";function r(t){return a||(a=!0,Promise.all([n.e(4507),n.e(8305)]).then(n.t.bind(n,18305,19)).then(()=>{document.body.classList.add("katex-loaded")})),null}n.r(e),n.d(e,{default:function(){return r}});let a=!1},4217:function(t,e,n){"use strict";n.d(e,{MathJaXLazy:function(){return i}});var r=n(7653);let a=r.lazy(()=>n.e(721).then(n.bind(n,90721)));function i(t){return r.createElement(r.Suspense,{fallback:t.fallback},r.createElement(a,{...t}))}}}]);
//# sourceMappingURL=8731-d54d8529e30d272f.js.map