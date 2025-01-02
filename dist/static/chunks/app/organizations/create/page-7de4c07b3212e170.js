(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[310],{5550:(e,t,a)=>{Promise.resolve().then(a.bind(a,5318))},5318:(e,t,a)=>{"use strict";a.d(t,{OrganizationsCreate:()=>g});var r=a(5155),s=a(3463),n=a(4147),d=a.n(n),i=a(7566),l=a(300),o=a(2115),c=a(2673),u=a(6390),m=a(6870),p=a(9316),f=a(5432),x=a(33),h=a(6046),y=a(8685);let v=[{type:"text",id:"full_name",name:"full_name",placeholder:"Полное название организации"},{type:"text",id:"name",name:"name",placeholder:"Название организации"},{type:"textarea",id:"description",name:"description",placeholder:"Описание организации"},{type:"text",id:"address",name:"address",placeholder:"Адрес организации"},{type:"tel",id:"phone",name:"phone",placeholder:"Телефон организации"},{type:"combobox",id:"activity_type_id",name:"activity_type_id",placeholder:"Тип активности",data_name:"activityTypes"}],g=()=>{let e=(0,h.useRouter)(),{setOrganization:t}=(0,f.Wf)(),{user:a,updateUser:n}=(0,f.ur)(),{toast:g}=(0,m.dj)(),[b]=(0,u.Mj)("token",""),[w,j]=(0,o.useState)({description:"",full_name:"",name:"",address:"",phone:"",activity_type_id:0,user_id:0}),[_,N]=(0,o.useState)({activityTypes:[]});(0,o.useEffect)(()=>{!async function(){let e=await (0,p.vS)(b);if(!e.success){g({variant:"destructive",title:"Загрузка страницы",description:"Ошибка загрузки списка видов активности. Попробуйте позже"});return}N({..._,activityTypes:e.data})}()},[]);let z=async()=>{w.user_id=null==a?void 0:a.id;let e=await (0,c.vt)(w,b);return e.success?e.data:(g({variant:"destructive",title:"Создание организации",description:"Ошибка создания организации. Попробуйте позже"}),null)},C=async e=>{let t={organization_id:e,user_id:null==a?void 0:a.id},r=await (0,x.vt)(t,b);return r.success?r.data:(g({variant:"destructive",title:"Привязка к организации",description:"Ошибка привязки к организации. Попробуйте позже"}),null)},P=async a=>{a.preventDefault();let r=await z();r&&await C(r.id)&&(g({title:"Создание организации",description:"Организация успешно создана"}),t(r),n(),e.push("/"))};return(0,r.jsxs)("section",{className:(0,s.A)("std-center",d()["organizations-create"]),children:[(0,r.jsx)("h1",{className:(0,s.A)("std-h1",d()["organizations-create__title"]),children:"Создание организации"}),(0,r.jsxs)("form",{className:(0,s.A)(d()["organizations-create__form"]),onSubmit:P,children:[v.map(e=>(0,r.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[(0,r.jsx)(l.J,{htmlFor:e.name,children:e.placeholder}),(0,y.h)(e,t=>j({...w,[e.name]:t}),_)]},e.id)),(0,r.jsx)(i.$,{variant:"outline",type:"submit",className:(0,s.A)("std-button",d()["organizations-create__button"]),children:"Создать"})]})]})}},9316:(e,t,a)=>{"use strict";a.d(t,{vS:()=>d});var r=a(676),s=a(6613),n=a(776);async function d(e){try{return(await r.FH.get(s.v.activity_types,(0,r.zP)(e))).data}catch(e){return(0,n.N)(e)}}},33:(e,t,a)=>{"use strict";a.d(t,{TF:()=>l,vt:()=>d,yo:()=>i});var r=a(676),s=a(6613),n=a(776);async function d(e,t){try{return(await r.FH.post(s.v.organization_employees,e,(0,r.zP)(t))).data}catch(e){return(0,n.N)(e)}}async function i(e,t,a){try{return(await r.FH.put("".concat(s.v.organization_employees,"/").concat(e),t,(0,r.zP)(a))).data}catch(e){return(0,n.N)(e)}}async function l(e,t){try{return(await r.FH.delete("".concat(s.v.organization_employees,"/").concat(e),(0,r.zP)(t))).data}catch(e){return(0,n.N)(e)}}},8685:(e,t,a)=>{"use strict";a.d(t,{h:()=>g});var r=a(5155),s=a(2115),n=a(32),d=a(2423),i=a(1567),l=a(7566),o=a(3518),c=a(6967),u=a(2222),m=a(7549);function p(e){let{className:t,classNames:a,showOutsideDays:s=!0,...n}=e;return(0,r.jsx)(u.hv,{showOutsideDays:s,className:(0,m.cn)("p-3",t),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,m.cn)((0,l.r)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:(0,m.cn)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md","range"===n.mode?"[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md":"[&:has([aria-selected])]:rounded-md"),day:(0,m.cn)((0,l.r)({variant:"ghost"}),"h-8 w-8 p-0 font-normal aria-selected:opacity-100"),day_range_start:"day-range-start",day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...a},components:{IconLeft:e=>{let{...t}=e;return(0,r.jsx)(o.A,{className:"h-4 w-4"})},IconRight:e=>{let{...t}=e;return(0,r.jsx)(c.A,{className:"h-4 w-4"})}},...n})}p.displayName="Calendar";var f=a(4765);function x(e){let{value:t,onChange:a}=e,[o,c]=s.useState(t);return(0,r.jsxs)(f.AM,{children:[(0,r.jsx)(f.Wv,{asChild:!0,children:(0,r.jsxs)(l.$,{variant:"outline",className:(0,i.cn)("w-[240px] justify-start text-left font-normal",!o&&"text-muted-foreground"),children:[(0,r.jsx)(d.A,{}),o?(0,n.GP)(o,"PPP"):(0,r.jsx)("span",{children:"Выберите дату"})]})}),(0,r.jsx)(f.hl,{className:"w-auto p-0",align:"start",children:(0,r.jsx)(p,{mode:"single",selected:o||void 0,onSelect:e=>{c(e||null),a(e?(0,n.GP)(e,"yyyy-MM-dd"):"")},initialFocus:!0})})]})}var h=a(166),y=a(3486),v=a(4144);let g=(e,t,a)=>{var s,n,d;return(0,r.jsx)(r.Fragment,{children:"date"===e.type?(0,r.jsx)(x,{onChange:e=>t(e),value:e.value,...e}):"textarea"===e.type?(0,r.jsx)(v.T,{onChange:e=>t(e.target.value),value:e.value||"",...e}):"combobox"===e.type?(0,r.jsx)(y.u,{items:(null===(s=a[e.data_name])||void 0===s?void 0:s.map(e=>({label:e.name,value:e.id.toString()})))||[],selectedItem:{label:null===(n=e.value)||void 0===n?void 0:n.name,value:null===(d=e.value)||void 0===d?void 0:d.id},onChange:e=>t(+e)}):(0,r.jsx)(h.p,{value:e.value,onChange:e=>t(e.target.value),...e,placeholder:""})})}},1567:(e,t,a)=>{"use strict";a.d(t,{cn:()=>n});var r=a(3463),s=a(9795);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.QP)((0,r.$)(t))}},3486:(e,t,a)=>{"use strict";a.d(t,{u:()=>y});var r=a(5155),s=a(2115),n=a(7899),d=a(1719),i=a(1902),l=a(8867),o=a(7549);let c=n.bL;n.YJ;let u=n.WT,m=s.forwardRef((e,t)=>{let{className:a,children:s,...i}=e;return(0,r.jsxs)(n.l9,{ref:t,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...i,children:[s,(0,r.jsx)(n.In,{asChild:!0,children:(0,r.jsx)(d.A,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=n.l9.displayName;let p=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.PP,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",a),...s,children:(0,r.jsx)(i.A,{className:"h-4 w-4"})})});p.displayName=n.PP.displayName;let f=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.wn,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",a),...s,children:(0,r.jsx)(d.A,{className:"h-4 w-4"})})});f.displayName=n.wn.displayName;let x=s.forwardRef((e,t)=>{let{className:a,children:s,position:d="popper",...i}=e;return(0,r.jsx)(n.ZL,{children:(0,r.jsxs)(n.UC,{ref:t,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===d&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:d,...i,children:[(0,r.jsx)(p,{}),(0,r.jsx)(n.LM,{className:(0,o.cn)("p-1","popper"===d&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),(0,r.jsx)(f,{})]})})});x.displayName=n.UC.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.JU,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",a),...s})}).displayName=n.JU.displayName;let h=s.forwardRef((e,t)=>{let{className:a,children:s,...d}=e;return(0,r.jsxs)(n.q7,{ref:t,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...d,children:[(0,r.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(n.VF,{children:(0,r.jsx)(l.A,{className:"h-4 w-4"})})}),(0,r.jsx)(n.p4,{children:s})]})});h.displayName=n.q7.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.wv,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",a),...s})}).displayName=n.wv.displayName;let y=e=>{let{placeholder:t,items:a,selectedItem:s,onChange:n}=e;return(0,r.jsxs)(c,{onValueChange:n,children:[(0,r.jsx)(m,{className:"w-[100%]",children:(0,r.jsx)(u,{placeholder:(null==s?void 0:s.label)||t})}),(0,r.jsx)(x,{children:a.map(e=>(0,r.jsx)(h,{value:e.value,children:e.label},e.value))})]})}},166:(e,t,a)=>{"use strict";a.d(t,{p:()=>d});var r=a(5155),s=a(2115),n=a(7549);let d=s.forwardRef((e,t)=>{let{className:a,type:s,...d}=e;return(0,r.jsx)("input",{type:s,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...d})});d.displayName="Input"},300:(e,t,a)=>{"use strict";a.d(t,{J:()=>o});var r=a(5155),s=a(2115),n=a(6195),d=a(1027),i=a(7549);let l=(0,d.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(n.b,{ref:t,className:(0,i.cn)(l(),a),...s})});o.displayName=n.b.displayName},4765:(e,t,a)=>{"use strict";a.d(t,{AM:()=>i,Wv:()=>l,hl:()=>o});var r=a(5155),s=a(2115),n=a(2337),d=a(7549);let i=n.bL,l=n.l9;n.Mz;let o=s.forwardRef((e,t)=>{let{className:a,align:s="center",sideOffset:i=4,...l}=e;return(0,r.jsx)(n.ZL,{children:(0,r.jsx)(n.UC,{ref:t,align:s,sideOffset:i,className:(0,d.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...l})})});o.displayName=n.UC.displayName},4144:(e,t,a)=>{"use strict";a.d(t,{T:()=>d});var r=a(5155),s=a(2115),n=a(7549);let d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("textarea",{className:(0,n.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...s})});d.displayName="Textarea"},4147:e=>{e.exports={"organizations-create":"OrganizationsCreate_organizations-create__q6YVj","organizations-create__form":"OrganizationsCreate_organizations-create__form__MY3QC"}}},e=>{var t=t=>e(e.s=t);e.O(0,[656,478,651,9,481,544,778,441,517,358],()=>t(5550)),_N_E=e.O()}]);