(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{447:(e,t,n)=>{Promise.resolve().then(n.bind(n,113))},113:(e,t,n)=>{"use strict";n.d(t,{Login:()=>w});var r=n(5155),a=n(9914),i=n.n(a),o=n(3463),l=n(9045),s=n(166),d=n(300),u=n(7566),c=n(2115),h=n(5120),f=n(5432),p=n(6390),m=n(6870),_=n(6046);let v=[{type:"text",id:"login",placeholder:"Логин",autoComplete:"login",name:"login"},{type:"password",id:"password",placeholder:"Пароль",autoComplete:"current-password",name:"password"}],w=()=>{let{toast:e}=(0,m.dj)(),t=(0,_.useRouter)(),{setUser:n}=(0,f.ur)(),[,a]=(0,p.Mj)("token",""),[w,g]=(0,c.useState)({login:"",password:""}),x=async()=>{let e=await (0,h.i)(w);return e.success?(a(e.data.token),e.data.token):null},b=async e=>{let t=await (0,h.me)(e);return!!t.success&&(n(t.data),!0)},y=async n=>{n.preventDefault();let r=await x();if(!r){e({variant:"destructive",title:"Вход",description:"Вы ввели неправильный логин или пароль"});return}if(!await b(r)){e({variant:"destructive",title:"Вход",description:"Ошибка при авторизации. Попробуйте позже"});return}e({title:"Вход",description:"Вы успешно авторизованы"}),t.push("/")};return(0,r.jsx)(l._,{children:(0,r.jsxs)("form",{className:(0,o.A)("std-container",i().auth__form),onSubmit:y,children:[(0,r.jsx)("h1",{className:"std-h1",children:"Вход"}),(0,r.jsx)("div",{className:i()["auth__form-fields"],children:v.map(e=>(0,r.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[(0,r.jsx)(d.J,{htmlFor:e.name,children:e.placeholder}),(0,r.jsx)(s.p,{...e,placeholder:"",onChange:t=>g({...w,[e.name||""]:t.target.value})})]},e.id))}),(0,r.jsx)(u.$,{type:"submit",variant:"outline",className:"std-button",children:"Войти"}),(0,r.jsx)(u.$,{type:"button",variant:"link",children:"Забыли пароль?"})]})})}},9045:(e,t,n)=>{"use strict";n.d(t,{_:()=>u});var r=n(5155),a=n(3491),i=n(6748),o=n.n(i),l=n(5565),s=n(3463),d=n(5793);let u=e=>{let{children:t}=e,n=(0,d.W)();return(0,r.jsxs)("section",{className:(0,s.A)("std-container",o()["auth-container"]),children:[!n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:(0,s.A)(o()["auth-container__logo-container"]),children:(0,r.jsx)(l.default,{src:"/logo_alt.svg",alt:"logo",width:200,height:200,className:(0,s.A)(o()["auth-container__logo"])})}),(0,r.jsx)(a.w,{orientation:n?"horizontal":"vertical",decorative:!0,color:"text.primary",className:(0,s.A)(o()["auth-container__separator"])})]}),(0,r.jsx)("div",{className:(0,s.A)(o()["auth-container__content"]),children:t})]})}},166:(e,t,n)=>{"use strict";n.d(t,{p:()=>o});var r=n(5155),a=n(2115),i=n(7549);let o=a.forwardRef((e,t)=>{let{className:n,type:a,...o}=e;return(0,r.jsx)("input",{type:a,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",n),ref:t,...o})});o.displayName="Input"},300:(e,t,n)=>{"use strict";n.d(t,{J:()=>d});var r=n(5155),a=n(2115),i=n(6195),o=n(1027),l=n(7549);let s=(0,o.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(i.b,{ref:t,className:(0,l.cn)(s(),n),...a})});d.displayName=i.b.displayName},3491:(e,t,n)=>{"use strict";n.d(t,{w:()=>l});var r=n(5155),a=n(2115),i=n(434),o=n(7549);let l=a.forwardRef((e,t)=>{let{className:n,orientation:a="horizontal",decorative:l=!0,...s}=e;return(0,r.jsx)(i.b,{ref:t,decorative:l,orientation:a,className:(0,o.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",n),...s})});l.displayName=i.b.displayName},5793:(e,t,n)=>{"use strict";n.d(t,{W:()=>i,a:()=>a});var r=n(2115);function a(){let[e,t]=r.useState(void 0);return r.useEffect(()=>{let e=window.matchMedia("(max-width: ".concat(767,"px)")),n=()=>{t(window.innerWidth<768)};return e.addEventListener("change",n),t(window.innerWidth<768),()=>e.removeEventListener("change",n)},[]),!!e}function i(){let[e,t]=r.useState(void 0);return r.useEffect(()=>{let e=window.matchMedia("(max-width: ".concat(1023,"px)")),n=()=>{t(window.innerWidth<1024)};return e.addEventListener("change",n),t(window.innerWidth<1024),()=>e.removeEventListener("change",n)},[]),!!e}},9914:e=>{e.exports={auth__form:"Auth_auth__form__03KuE","auth__form-fields":"Auth_auth__form-fields__SeLmt"}},6748:e=>{e.exports={"auth-container":"AuthContainer_auth-container__sPC9i","auth-container__logo-container":"AuthContainer_auth-container__logo-container__Eb47V","auth-container__content":"AuthContainer_auth-container__content__8yOiS","auth-container__logo":"AuthContainer_auth-container__logo__Pe_z6","auth-container__separator":"AuthContainer_auth-container__separator__y8g1y"}},8068:(e,t,n)=>{"use strict";n.d(t,{s:()=>i,t:()=>a});var r=n(2115);function a(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return r.useCallback(a(...e),e)}},6195:(e,t,n)=>{"use strict";n.d(t,{b:()=>l});var r=n(2115),a=n(9997),i=n(5155),o=r.forwardRef((e,t)=>(0,i.jsx)(a.sG.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));o.displayName="Label";var l=o},9997:(e,t,n)=>{"use strict";n.d(t,{sG:()=>c,hO:()=>h});var r=n(2115),a=n(7650),i=n(8068),o=n(5155),l=r.forwardRef((e,t)=>{let{children:n,...a}=e,i=r.Children.toArray(n),l=i.find(u);if(l){let e=l.props.children,n=i.map(t=>t!==l?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,o.jsx)(s,{...a,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,o.jsx)(s,{...a,ref:t,children:n})});l.displayName="Slot";var s=r.forwardRef((e,t)=>{let{children:n,...a}=e;if(r.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let a=e[r],i=t[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...e)=>{i(...e),a(...e)}:a&&(n[r]=a):"style"===r?n[r]={...a,...i}:"className"===r&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}(a,n.props),ref:t?(0,i.t)(t,e):e})}return r.Children.count(n)>1?r.Children.only(null):null});s.displayName="SlotClone";var d=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function u(e){return r.isValidElement(e)&&e.type===d}var c=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...a}=e,i=r?l:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,o.jsx)(i,{...a,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function h(e,t){e&&a.flushSync(()=>e.dispatchEvent(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[379,478,651,9,334,778,441,517,358],()=>t(447)),_N_E=e.O()}]);