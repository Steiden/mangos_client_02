(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[191],{9191:(e,t,a)=>{Promise.resolve().then(a.bind(a,651))},651:(e,t,a)=>{"use strict";a.d(t,{Task:()=>P});var s=a(5155),i=a(5390),d=a(6335),n=a.n(d),r=a(3463),l=a(4995),o=a(1466),c=a(8236),u=a(4003);let m=()=>{let{task:e}=(0,u.U)();return(0,s.jsxs)("section",{className:(0,r.A)("std-container"),children:[(0,s.jsx)("h1",{className:(0,r.A)("std-h1"),children:null==e?void 0:e.name}),(0,s.jsx)("p",{className:(0,r.A)(),children:null==e?void 0:e.description})]})};var p=a(2499),_=a(7566),x=a(297),h=a(1898),v=a(5432),f=a(6870),j=a(795),y=a(6390);let N=()=>{var e,t;let[a]=(0,y.Mj)("token",""),{toast:i}=(0,f.dj)(),{task:d,updateTask:n}=(0,u.U)(),{updateProject:l}=(0,v.Om)(),{organization:o}=(0,v.Wf)(),c=async e=>{let t={task_id:null==d?void 0:d.id,user_id:e};if(!(await (0,p.vt)(t,a)).success){i({variant:"destructive",title:"Привязка сотрудника к задаче",description:"Ошибка привязки сотрудника к задаче. Попробуйте позже"});return}n(),l(),i({title:"Привязка сотрудника к задаче",description:"Сотрудник успешно привязан к задаче"})};return(0,s.jsxs)("section",{className:(0,r.A)("std-container"),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:(0,r.A)("std-h1"),children:"Участники"}),(0,s.jsxs)("p",{children:["Список участников задачи ",null==d?void 0:d.name]})]}),(0,s.jsxs)("div",{className:(0,r.A)("std-container__content"),children:[(0,s.jsxs)(h.lG,{children:[(0,s.jsx)(h.zM,{className:(0,r.A)((0,_.r)({variant:"outline"}),"self-end"),children:"Добавить участника"}),(0,s.jsxs)(h.Cf,{children:[(0,s.jsxs)(h.c7,{children:[(0,s.jsx)(h.L3,{children:"Добавление участника в задачу"}),(0,s.jsx)(h.rr,{children:"Выбор ведется только из сотрудников вашей организации"})]}),(0,s.jsxs)(x.uB,{filter:(e,t)=>e.includes(t)?1:0,children:[(0,s.jsx)(x.G7,{placeholder:"Поиск сотрудника..."}),(0,s.jsx)(x.oI,{children:(0,s.jsxs)(x.L$,{className:"py-2",children:[(0,s.jsx)(x.xL,{children:"Свободных сотрудников нет."}),null==o?void 0:null===(e=o.members)||void 0===e?void 0:e.filter(e=>!(null==d?void 0:d.members.find(t=>t.user.id===e.user.id))).map(e=>(0,s.jsx)(x.h_,{style:{background:"none",padding:"0"},children:(0,s.jsx)(j.A,{member:e,isActions:!1,size:"small",className:"cursor-pointer",onClick:()=>c(e.user.id)})},e.id))]})})]})]})]}),(0,s.jsx)("div",{className:(0,r.A)("std-container"),children:null==d?void 0:null===(t=d.members)||void 0===t?void 0:t.map(e=>(0,s.jsx)(j.A,{member:e},e.id))})]})]})};var k=a(2660),g=a(114),b=a(4393),w=a(2756),A=a(8685),B=a(300),S=a(2115);let L=()=>{var e,t,a,i,d,n;let[l]=(0,y.Mj)("token",""),{toast:o}=(0,f.dj)(),{task:c,updateTask:m}=(0,u.U)(),{updateProject:p}=(0,v.Om)(),{updateOrganization:x}=(0,v.Wf)(),[h,j]=(0,S.useState)({name:(null==c?void 0:c.name)||"",description:(null==c?void 0:c.description)||"",started_at:(null==c?void 0:c.started_at)||new Date,finished_at:(null==c?void 0:c.finished_at)||new Date,execution_status_id:(null==c?void 0:c.execution_status.id)||0,task_priority_id:(null==c?void 0:c.task_priority.id)||0,category_id:(null==c?void 0:c.category.id)||0}),[N,L]=(0,S.useState)({executionStatuses:[],taskPriorities:[],categories:[]}),P=[{type:"text",id:"name",name:"name",placeholder:"Название задачи",value:h.name},{type:"text",id:"description",name:"description",placeholder:"Описание задачи",value:h.description},{type:"date",id:"started_at",name:"started_at",placeholder:"Дата начала выполнения",value:h.started_at},{type:"date",id:"finished_at",name:"finished_at",placeholder:"Дата завершения выполнения",value:h.finished_at},{type:"combobox",id:"execution_status_id",name:"execution_status_id",placeholder:"Статус выполнения",data_name:"executionStatuses",value:{id:(null===(e=N.executionStatuses.find(e=>e.id===h.execution_status_id))||void 0===e?void 0:e.id)||0,name:(null===(t=N.executionStatuses.find(e=>e.id===h.execution_status_id))||void 0===t?void 0:t.name)||""}},{type:"combobox",id:"task_priority_id",name:"task_priority_id",placeholder:"Приоритет",data_name:"taskPriorities",value:{id:(null===(a=N.taskPriorities.find(e=>e.id===h.task_priority_id))||void 0===a?void 0:a.id)||0,name:(null===(i=N.taskPriorities.find(e=>e.id===h.task_priority_id))||void 0===i?void 0:i.name)||""}},{type:"combobox",id:"category_id",name:"category_id",placeholder:"Категория",data_name:"categories",value:{id:(null===(d=N.categories.find(e=>e.id===h.category_id))||void 0===d?void 0:d.id)||0,name:(null===(n=N.categories.find(e=>e.id===h.category_id))||void 0===n?void 0:n.name)||""}}],E=async e=>{if(e.preventDefault(),!c){o({variant:"destructive",title:"Сохранение задачи",description:"Выберите задачу для сохранения её настроек"});return}if(!(await (0,w.yo)(null==c?void 0:c.id,h,l)).success){o({variant:"destructive",title:"Сохранение задачи",description:"При сохранении задачи произошла ошибка. Попробуйте позже"});return}m(),p(),x(),o({title:"Сохранение задачи",description:"Настройки задачи успешно сохранены"})};return(0,S.useEffect)(()=>{(async function(){try{let e=await (0,k.vS)(l),t=await (0,g.vS)(l),a=await (0,b.vS)(l);L({...N,taskPriorities:t.success?t.data:[],executionStatuses:e.success?e.data.map(e=>({id:e.id,name:e.caption})):[],categories:a.success?a.data:[]})}catch(e){o({variant:"destructive",title:"Ошибка",description:"Ошибка загрузки данных. Попробуйте позже"})}})()},[]),(0,s.jsxs)("section",{className:(0,r.A)("std-container"),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:(0,r.A)("std-h1"),children:"Настройки"}),(0,s.jsx)("p",{children:"Настройте параметры вашей задачи"})]}),(0,s.jsxs)("form",{className:(0,r.A)("std-container__content"),onSubmit:E,children:[P.map(e=>(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[(0,s.jsx)(B.J,{htmlFor:e.name,children:e.placeholder}),(0,A.h)(e,t=>j({...h,[e.name]:t}),N)]},e.id)),(0,s.jsx)(_.$,{variant:"outline",type:"submit",className:(0,r.A)("std-button"),children:"Сохранить"})]})]})},P=()=>(0,s.jsxs)(i.tU,{orientation:"vertical",defaultValue:"about",className:(0,r.A)(n().task),children:[(0,s.jsxs)(i.j7,{className:(0,r.A)(n().task__tabs),children:[(0,s.jsxs)(i.Xi,{value:"about",className:(0,r.A)(n().task__tab),children:[(0,s.jsx)(l.A,{width:20,height:20}),"О задаче"]}),(0,s.jsxs)(i.Xi,{value:"members",className:(0,r.A)(n().task__tab),children:[(0,s.jsx)(o.A,{width:20,height:20})," Участники"]}),(0,s.jsxs)(i.Xi,{value:"settings",className:(0,r.A)(n().task__tab),children:[(0,s.jsx)(c.A,{width:20,height:20})," Настройки"]})]}),(0,s.jsx)(i.av,{value:"about",className:(0,r.A)(n().task__content),children:(0,s.jsx)(m,{})}),(0,s.jsx)(i.av,{value:"members",className:(0,r.A)(n().task__content),children:(0,s.jsx)(N,{})}),(0,s.jsx)(i.av,{value:"settings",className:(0,r.A)(n().task__content),children:(0,s.jsx)(L,{})})]})},2660:(e,t,a)=>{"use strict";a.d(t,{vS:()=>n});var s=a(676),i=a(6613),d=a(776);async function n(e){try{return(await s.FH.get(i.v.execution_statuses,(0,s.zP)(e))).data}catch(e){return(0,d.N)(e)}}},297:(e,t,a)=>{"use strict";a.d(t,{G7:()=>o,L$:()=>m,h_:()=>p,oI:()=>c,uB:()=>l,xL:()=>u});var s=a(5155),i=a(2115),d=a(9261),n=a(853),r=a(7549);a(1898);let l=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(d.uB,{ref:t,className:(0,r.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",a),...i})});l.displayName=d.uB.displayName;let o=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,s.jsx)(n.A,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,s.jsx)(d.uB.Input,{ref:t,className:(0,r.cn)("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",a),...i})]})});o.displayName=d.uB.Input.displayName;let c=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(d.uB.List,{ref:t,className:(0,r.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",a),...i})});c.displayName=d.uB.List.displayName;let u=i.forwardRef((e,t)=>(0,s.jsx)(d.uB.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));u.displayName=d.uB.Empty.displayName;let m=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(d.uB.Group,{ref:t,className:(0,r.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",a),...i})});m.displayName=d.uB.Group.displayName,i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(d.uB.Separator,{ref:t,className:(0,r.cn)("-mx-1 h-px bg-border",a),...i})}).displayName=d.uB.Separator.displayName;let p=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(d.uB.Item,{ref:t,className:(0,r.cn)("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",a),...i})});p.displayName=d.uB.Item.displayName},6335:e=>{e.exports={task:"Task_task__WqEcX",task__tabs:"Task_task__tabs__H4mO0",task__tab:"Task_task__tab__JCpgd",task__content:"Task_task__content__PLagq"}}},e=>{var t=t=>e(e.s=t);e.O(0,[280,50,478,651,9,481,544,631,945,822,778,987,441,517,358],()=>t(9191)),_N_E=e.O()}]);