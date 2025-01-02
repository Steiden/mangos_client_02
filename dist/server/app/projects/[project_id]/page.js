(()=>{var e={};e.id=603,e.ids=[603],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{"use strict";e.exports=require("assert")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},83997:e=>{"use strict";e.exports=require("tty")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},44601:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>l,routeModule:()=>p,tree:()=>d});var r=s(70260),i=s(28203),n=s(25155),a=s.n(n),c=s(67292),o={};for(let e in c)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>c[e]);s.d(t,o);let d=["",{children:["projects",{children:["[project_id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,97976)),"D:\\Mangos\\mangos_client_02\\src\\app\\projects\\[project_id]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,35597)),"D:\\Mangos\\mangos_client_02\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,50042)),"D:\\Mangos\\mangos_client_02\\src\\app\\not-found.tsx"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["D:\\Mangos\\mangos_client_02\\src\\app\\projects\\[project_id]\\page.tsx"],u={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/projects/[project_id]/page",pathname:"/projects/[project_id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},79947:(e,t,s)=>{Promise.resolve().then(s.bind(s,40352))},39619:(e,t,s)=>{Promise.resolve().then(s.bind(s,75646))},75646:(e,t,s)=>{"use strict";s.d(t,{Project:()=>w});var r=s(45512),i=s(45034),n=s.n(i),a=s(82281),c=s(6440),o=s(84514);let d=()=>{let{project:e}=(0,o.Om)();return(0,r.jsxs)("section",{className:(0,a.A)("std-container"),children:[(0,r.jsx)("h1",{className:(0,a.A)("std-h1"),children:e?.name}),(0,r.jsx)("p",{className:(0,a.A)(),children:e?.description})]})};var l=s(91814),u=s(24540),p=s(10805),m=s(41692),x=s(6736),j=s(7121),_=s(28473);let h=()=>{let[e]=(0,_.Mj)("token",""),{toast:t}=(0,x.dj)(),{organization:s}=(0,o.Wf)(),{project:i,updateProject:n}=(0,o.Om)(),c=async s=>{let r={project_id:i?.id,user_id:s};if(!(await (0,l.vt)(r,e)).success){t({variant:"destructive",title:"Привязка сотрудника к проекту",description:"Ошибка привязки сотрудника к проекту. Попробуйте позже"});return}n(),t({title:"Привязка сотрудника к проекту",description:"Сотрудник успешно привязан к проекту"})};return(0,r.jsxs)("section",{className:(0,a.A)("std-container"),children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:(0,a.A)("std-h1"),children:"Участники"}),(0,r.jsxs)("p",{children:["Список участников проекта ",i?.name]})]}),(0,r.jsxs)("div",{className:(0,a.A)("std-container__content"),children:[(0,r.jsxs)(m.lG,{children:[(0,r.jsx)(m.zM,{className:(0,a.A)((0,u.r)({variant:"outline"}),"self-end"),children:"Добавить участника"}),(0,r.jsxs)(m.Cf,{children:[(0,r.jsxs)(m.c7,{children:[(0,r.jsx)(m.L3,{children:"Добавление участника в проект"}),(0,r.jsx)(m.rr,{children:"Выбор ведется только из сотрудников вашей организации"})]}),(0,r.jsxs)(p.uB,{filter:(e,t)=>e.includes(t)?1:0,children:[(0,r.jsx)(p.G7,{placeholder:"Поиск сотрудника..."}),(0,r.jsx)(p.oI,{children:(0,r.jsxs)(p.L$,{className:"py-2",children:[(0,r.jsx)(p.xL,{children:"Свободных сотрудников нет."}),s?.members?.filter(e=>!i?.members.find(t=>t.user.id===e.user.id)).map(e=>r.jsx(p.h_,{style:{background:"none",padding:"0"},children:r.jsx(j.A,{member:e,isActions:!1,size:"small",className:"cursor-pointer",onClick:()=>c(e.user.id)})},e.id))]})})]})]})]}),(0,r.jsx)("div",{className:(0,a.A)("std-container"),children:i?.members?.map(e=>r.jsx(j.A,{member:e},e.id))})]})]})};var v=s(51169),f=s(34734),b=s(53568),g=s(74864),A=s(58009);let P=()=>{let[e]=(0,_.Mj)("token",""),{toast:t}=(0,x.dj)(),{project:s,updateProject:i}=(0,o.Om)(),{updateOrganization:n}=(0,o.Wf)(),[c,d]=(0,A.useState)({name:s?.name||"",description:s?.description||"",execution_status_id:s?.execution_status.id||0}),[l,p]=(0,A.useState)({executionStatuses:[]}),m=[{type:"text",id:"name",name:"name",placeholder:"Название задачи",value:c.name},{type:"text",id:"description",name:"description",placeholder:"Описание задачи",value:c.description},{type:"combobox",id:"execution_status_id",name:"execution_status_id",placeholder:"Статус выполнения",data_name:"executionStatuses",value:{id:l.executionStatuses.find(e=>e.id===c.execution_status_id)?.id||0,name:l.executionStatuses.find(e=>e.id===c.execution_status_id)?.name||""}}],j=async r=>{if(r.preventDefault(),!s){t({variant:"destructive",title:"Сохранение проекта",description:"Выберите проект для сохранения его настроек"});return}if(!(await (0,f.yo)(s?.id,c,e)).success){t({variant:"destructive",title:"Сохранение проекта",description:"При сохранении проекта произошла ошибка. Попробуйте позже"});return}i(),n(),t({title:"Сохранение проекта",description:"Настройки проекта успешно сохранены"})};return(0,A.useEffect)(()=>{(async function(){let s=await (0,v.vS)(e);if(!s.success){t({variant:"destructive",title:"Загрузка страница",description:"При загрузке страницы произошла ошибка. Попробуйте позж"});return}p({...l,executionStatuses:s.data.map(e=>({id:e.id,name:e.caption}))})})()},[]),(0,r.jsxs)("section",{className:(0,a.A)("std-container"),children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:(0,a.A)("std-h1"),children:"Настройки"}),(0,r.jsx)("p",{children:"Настройте параметры вашего проекта"})]}),(0,r.jsxs)("form",{className:(0,a.A)("std-container__content"),onSubmit:j,children:[m.map(e=>(0,r.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[(0,r.jsx)(g.J,{htmlFor:e.name,children:e.placeholder}),(0,b.h)(e,t=>d({...c,[e.name]:t}),l)]},e.id)),(0,r.jsx)(u.$,{variant:"outline",type:"submit",className:(0,a.A)("std-button"),children:"Сохранить"})]})]})};var N=s(77415),y=s(87798),q=s(94520);let w=()=>(0,r.jsxs)(c.tU,{orientation:"vertical",defaultValue:"about",className:(0,a.A)(n().project),children:[(0,r.jsxs)(c.j7,{className:(0,a.A)(n().project__tabs),children:[(0,r.jsxs)(c.Xi,{value:"about",className:(0,a.A)(n().project__tab),children:[(0,r.jsx)(N.A,{width:20,height:20}),"О проекте"]}),(0,r.jsxs)(c.Xi,{value:"members",className:(0,a.A)(n().project__tab),children:[(0,r.jsx)(y.A,{width:20,height:20})," Участники"]}),(0,r.jsxs)(c.Xi,{value:"settings",className:(0,a.A)(n().project__tab),children:[(0,r.jsx)(q.A,{width:20,height:20})," Настройки"]})]}),(0,r.jsx)(c.av,{value:"about",className:(0,a.A)(n().project__content),children:(0,r.jsx)(d,{})}),(0,r.jsx)(c.av,{value:"members",className:(0,a.A)(n().project__content),children:(0,r.jsx)(h,{})}),(0,r.jsx)(c.av,{value:"settings",className:(0,a.A)(n().project__content),children:(0,r.jsx)(P,{})})]})},51169:(e,t,s)=>{"use strict";s.d(t,{vS:()=>a});var r=s(98261),i=s(72043),n=s(36092);async function a(e){try{return(await r.FH.get(i.v.execution_statuses,(0,r.zP)(e))).data}catch(e){return(0,n.N)(e)}}},45034:e=>{e.exports={project:"Project_project__CntN2",project__tabs:"Project_project__tabs__vO2VF",project__tab:"Project_project__tab__s3Ob7",project__content:"Project_project__content__GkQOq"}},40352:(e,t,s)=>{"use strict";s.d(t,{Project:()=>r});let r=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call Project() from the server but Project is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Mangos\\mangos_client_02\\src\\_pages\\Projects\\[project_id]\\Project.tsx","Project")},97976:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a,generateStaticParams:()=>n});var r=s(62740),i=s(40352);function n(){return[{id:"test"}]}function a(e){return(0,r.jsx)(i.Project,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,812,105,296,85,258],()=>s(44601));module.exports=r})();