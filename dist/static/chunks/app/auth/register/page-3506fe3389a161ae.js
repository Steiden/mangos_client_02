(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[983],{4442:(e,t,r)=>{Promise.resolve().then(r.bind(r,2023))},5120:(e,t,r)=>{"use strict";r.d(t,{i:()=>a,k:()=>i,me:()=>o});var s=r(676),n=r(776);async function a(e){try{return(await s.FH.post(s.vZ.login,e,(0,s.zP)())).data}catch(e){return(0,n.N)(e)}}async function i(e){try{return(await s.FH.post(s.vZ.register,e,(0,s.zP)())).data}catch(e){return(0,n.N)(e)}}async function o(e){try{return(await s.FH.get(s.vZ.me,(0,s.zP)(e))).data}catch(e){return(0,n.N)(e)}}},2562:(e,t,r)=>{"use strict";r.d(t,{FH:()=>a,J7:()=>n});var s=r(2651),n=function(e){return e[e.in_progress=1]="in_progress",e[e.done=2]="done",e[e.failed=3]="failed",e}({});let a=s.A.create({baseURL:"http://127.0.0.1:8000/api",headers:{Accept:"application/json"}})},6613:(e,t,r)=>{"use strict";r.d(t,{v:()=>n});var s=function(e){return e.login="login",e.register="register",e.refresh="refresh",e.logout="logout",e.me="me",e.activity_types="activity_types",e.categories="categories",e.divisions="divisions",e.execution_statuses="execution_statuses",e.notifications="notifications",e.organizations="organizations",e.organization_employees="organization_employees",e.posts="posts",e.projects="projects",e.project_members="project_members",e.roles="roles",e.tags="tags",e.tasks="tasks",e.task_members="task_members",e.task_priorities="task_priorities",e.task_tags="task_tags",e.users="users",e}(s||{});let n={login:"/auth/login",register:"/auth/register",refresh:"/auth/refresh",logout:"/auth/logout",me:"/auth/me",activity_types:"/activity_types",categories:"/categories",divisions:"/divisions",execution_statuses:"/execution_statuses",notifications:"/notifications",organizations:"/organizations",organization_employees:"/organization_employees",posts:"/posts",projects:"/projects",project_members:"/project_members",roles:"/roles",tags:"/tags",tasks:"/tasks",task_members:"/task_members",task_priorities:"/task_priorities",task_tags:"/task_tags",users:"/users"}},776:(e,t,r)=>{"use strict";function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{success:!1,error:"string"==typeof e?e:e instanceof Error?e.message:"",message:t}}r.d(t,{N:()=>s})},676:(e,t,r)=>{"use strict";r.d(t,{FH:()=>a.FH,vZ:()=>n.v,zP:()=>s});let s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{headers:{Authorization:"Bearer "+e}}};var n=r(6613),a=r(2562)},7566:(e,t,r)=>{"use strict";r.d(t,{$:()=>c,r:()=>l});var s=r(5155),n=r(2115),a=r(4707),i=r(1027),o=r(7549);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:c=!1,...u}=e,d=c?a.DX:"button";return(0,s.jsx)(d,{className:(0,o.cn)(l({variant:n,size:i,className:r})),ref:t,...u})});c.displayName="Button"},166:(e,t,r)=>{"use strict";r.d(t,{p:()=>i});var s=r(5155),n=r(2115),a=r(7549);let i=n.forwardRef((e,t)=>{let{className:r,type:n,...i}=e;return(0,s.jsx)("input",{type:n,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...i})});i.displayName="Input"},300:(e,t,r)=>{"use strict";r.d(t,{J:()=>c});var s=r(5155),n=r(2115),a=r(6195),i=r(1027),o=r(7549);let l=(0,i.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.b,{ref:t,className:(0,o.cn)(l(),r),...n})});c.displayName=a.b.displayName},3491:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var s=r(5155),n=r(2115),a=r(434),i=r(7549);let o=n.forwardRef((e,t)=>{let{className:r,orientation:n="horizontal",decorative:o=!0,...l}=e;return(0,s.jsx)(a.b,{ref:t,decorative:o,orientation:n,className:(0,i.cn)("shrink-0 bg-border","horizontal"===n?"h-[1px] w-full":"h-full w-[1px]",r),...l})});o.displayName=a.b.displayName},5793:(e,t,r)=>{"use strict";r.d(t,{W:()=>a,a:()=>n});var s=r(2115);function n(){let[e,t]=s.useState(void 0);return s.useEffect(()=>{let e=window.matchMedia("(max-width: ".concat(767,"px)")),r=()=>{t(window.innerWidth<768)};return e.addEventListener("change",r),t(window.innerWidth<768),()=>e.removeEventListener("change",r)},[]),!!e}function a(){let[e,t]=s.useState(void 0);return s.useEffect(()=>{let e=window.matchMedia("(max-width: ".concat(1023,"px)")),r=()=>{t(window.innerWidth<1024)};return e.addEventListener("change",r),t(window.innerWidth<1024),()=>e.removeEventListener("change",r)},[]),!!e}},6870:(e,t,r)=>{"use strict";r.d(t,{dj:()=>p});var s=r(2115);let n=0,a=new Map,i=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],c={toasts:[]};function u(e){c=o(c,e),l.forEach(e=>{e(c)})}function d(e){let{...t}=e,r=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>u({type:"DISMISS_TOAST",toastId:r});return u({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||s()}}}),{id:r,dismiss:s,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function p(){let[e,t]=s.useState(c);return s.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},7549:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var s=r(3463),n=r(9795);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,s.$)(t))}},2023:(e,t,r)=>{"use strict";r.d(t,{Register:()=>g});var s=r(5155),n=r(6753),a=r.n(n),i=r(3463),o=r(2006),l=r(166),c=r(300),u=r(7566),d=r(2115),p=r(5120),h=r(6046),f=r(6870);let m=[{type:"email",id:"email",placeholder:"E-mail",autoComplete:"email",name:"email"},{type:"text",id:"login",placeholder:"Логин",autoComplete:"login",name:"login"},{type:"password",id:"password",placeholder:"Пароль",autoComplete:"current-password",name:"password"}],g=()=>{let{toast:e}=(0,f.dj)(),t=(0,h.useRouter)(),[r,n]=(0,d.useState)({email:"",login:"",password:""}),g=async()=>!!(await (0,p.k)(r)).success,_=async r=>{if(r.preventDefault(),!await g()){e({title:"Регистрация",description:"Ошибка при регистрации. Попробуйте позже"});return}e({title:"Регистрация",description:"Вы успешно зарегистрировались"}),t.push("/auth/login")};return(0,s.jsx)(o._,{children:(0,s.jsxs)("form",{className:(0,i.A)("std-container",a().auth__form),onSubmit:_,children:[(0,s.jsx)("h1",{className:"std-h1",children:"Регистрация"}),(0,s.jsx)("div",{className:a()["auth__form-fields"],children:m.map(e=>(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[(0,s.jsx)(c.J,{htmlFor:e.name,children:e.placeholder}),(0,s.jsx)(l.p,{...e,placeholder:"",onChange:t=>n({...r,[e.name||""]:t.target.value})})]},e.id))}),(0,s.jsx)(u.$,{type:"submit",variant:"outline",className:"std-button",children:"Зарегистрироваться"}),(0,s.jsxs)("span",{children:["Уже есть аккаунт?"," ",(0,s.jsx)(u.$,{type:"button",variant:"link",className:"p-0",onClick:()=>t.push("/auth/login"),children:"Войти"})]})]})})}},2006:(e,t,r)=>{"use strict";r.d(t,{_:()=>u});var s=r(5155),n=r(3491),a=r(3647),i=r.n(a),o=r(5565),l=r(3463),c=r(5793);let u=e=>{let{children:t}=e,r=(0,c.W)();return(0,s.jsxs)("section",{className:(0,l.A)("std-container",i()["auth-container"]),children:[!r&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:(0,l.A)(i()["auth-container__logo-container"]),children:(0,s.jsx)(o.default,{src:"/logo_alt.svg",alt:"logo",width:200,height:200,className:(0,l.A)(i()["auth-container__logo"])})}),(0,s.jsx)(n.w,{orientation:r?"horizontal":"vertical",decorative:!0,color:"text.primary",className:(0,l.A)(i()["auth-container__separator"])})]}),(0,s.jsx)("div",{className:(0,l.A)(i()["auth-container__content"]),children:t})]})}},6753:e=>{e.exports={auth__form:"Auth_auth__form__1zZIt","auth__form-fields":"Auth_auth__form-fields__1acO2"}},3647:e=>{e.exports={"auth-container":"AuthContainer_auth-container__0zpte","auth-container__logo-container":"AuthContainer_auth-container__logo-container__HdD9x","auth-container__content":"AuthContainer_auth-container__content__4PhJV","auth-container__logo":"AuthContainer_auth-container__logo__ykVhh","auth-container__separator":"AuthContainer_auth-container__separator__xl94l"}},8068:(e,t,r)=>{"use strict";r.d(t,{s:()=>a,t:()=>n});var s=r(2115);function n(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function a(...e){return s.useCallback(n(...e),e)}},6195:(e,t,r)=>{"use strict";r.d(t,{b:()=>o});var s=r(2115),n=r(9997),a=r(5155),i=s.forwardRef((e,t)=>(0,a.jsx)(n.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var o=i},9997:(e,t,r)=>{"use strict";r.d(t,{sG:()=>d,hO:()=>p});var s=r(2115),n=r(7650),a=r(8068),i=r(5155),o=s.forwardRef((e,t)=>{let{children:r,...n}=e,a=s.Children.toArray(r),o=a.find(u);if(o){let e=o.props.children,r=a.map(t=>t!==o?t:s.Children.count(e)>1?s.Children.only(null):s.isValidElement(e)?e.props.children:null);return(0,i.jsx)(l,{...n,ref:t,children:s.isValidElement(e)?s.cloneElement(e,void 0,r):null})}return(0,i.jsx)(l,{...n,ref:t,children:r})});o.displayName="Slot";var l=s.forwardRef((e,t)=>{let{children:r,...n}=e;if(s.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return s.cloneElement(r,{...function(e,t){let r={...t};for(let s in t){let n=e[s],a=t[s];/^on[A-Z]/.test(s)?n&&a?r[s]=(...e)=>{a(...e),n(...e)}:n&&(r[s]=n):"style"===s?r[s]={...n,...a}:"className"===s&&(r[s]=[n,a].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?(0,a.t)(t,e):e})}return s.Children.count(r)>1?s.Children.only(null):null});l.displayName="SlotClone";var c=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function u(e){return s.isValidElement(e)&&e.type===c}var d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=s.forwardRef((e,r)=>{let{asChild:s,...n}=e,a=s?o:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(a,{...n,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function p(e,t){e&&n.flushSync(()=>e.dispatchEvent(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[555,478,651,334,441,517,358],()=>t(4442)),_N_E=e.O()}]);