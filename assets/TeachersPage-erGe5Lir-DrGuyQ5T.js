import{t as x,Q as f,I as b,R as v,a as R,N,T as e,M as P,O as j,K as r,b as y,x as O,c as E}from"./index-CiUUmdeA.js";import{F as L,P as I,A as V,q,g as T,v as B}from"./TeachersList-B4mtpJuM-BLTo0yUH.js";const A="_wrapper_sv45d_1",F="_line_sv45d_9",K="_btn_sv45d_25",M="_text_sv45d_53",Q="_iconContainer_sv45d_69",S="_icon_sv45d_69",$="_iconRotate_sv45d_99",d={wrapper:A,line:F,btn:K,text:M,iconContainer:Q,icon:S,iconRotate:$},G="_popover_1bpkw_1",U="_visible_1bpkw_35",W="_list_1bpkw_61",z="_language_1bpkw_73",D="_selected_1bpkw_91",m={popover:G,visible:U,list:W,language:z,selected:D},H=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],J=({chosenKnowledge:i,isVisible:o,popoverRef:a,closePopover:n,handleOutsideClick:t})=>{const c=b();v.useEffect(()=>(document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}),[t]);const l=s=>{n(),c(y(s))};return e.jsx("div",{className:r(m.popover,{[m.visible]:o}),ref:a,children:e.jsx("ul",{className:m.list,children:H.map(s=>e.jsx("li",{className:m.listItem,onClick:()=>l(s),children:e.jsx("p",{className:r(m.language,{[m.selected]:s===i}),children:s})},s))})})},k=()=>{const[i,o]=v.useState(!1),[a,n]=v.useState(!1),t=v.useRef(null),c=()=>{i===!1?(o(!0),setTimeout(()=>{n(!0)},0)):(n(!1),setTimeout(()=>{o(!1)},100))},l=()=>{n(!1),setTimeout(()=>{o(!1)},100)},s=C=>{t.current&&!t.current.contains(C.target)&&l()};return v.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)})),{isOpen:i,isVisible:a,handleTogglePopover:c,handleClosePopover:l,handleOutsideClick:s,popoverRef:t}},X=()=>{const i=x(q),{isOpen:o,isVisible:a,popoverRef:n,handleTogglePopover:t,handleClosePopover:c,handleOutsideClick:l}=k();return e.jsxs("div",{className:d.wrapper,children:[e.jsxs("div",{className:d.container,children:[e.jsx("span",{className:d.line,children:"Level of knowledge"}),e.jsxs("button",{type:"button",className:d.btn,onClick:t,children:[e.jsx("span",{className:d.text,children:i}),e.jsx("div",{className:d.iconContainer,children:e.jsx(j,{iconId:"icon-down",className:r(d.icon,{[d.iconRotate]:o})})})]})]}),o&&e.jsx(J,{closePopover:c,handleOutsideClick:l,chosenKnowledge:i,isVisible:a,popoverRef:n})]})},Y="_wrapper_15qlk_1",Z="_line_15qlk_9",ee="_btn_15qlk_25",se="_text_15qlk_53",ne="_iconContainer_15qlk_69",ie="_icon_15qlk_69",oe="_iconRotate_15qlk_101",p={wrapper:Y,line:Z,btn:ee,text:se,iconContainer:ne,icon:ie,iconRotate:oe},te="_popover_1bpkw_1",ae="_visible_1bpkw_35",le="_list_1bpkw_61",ce="_language_1bpkw_73",re="_selected_1bpkw_91",u={popover:te,visible:ae,list:le,language:ce,selected:re},de=["French","English","German","Spanish","Mandarin Chinese"],pe=({closePopover:i,isVisible:o,chosenLanguage:a,handleOutsideClick:n,popoverRef:t})=>{const c=b();v.useEffect(()=>(document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}),[n]);const l=s=>{i(),c(O(s))};return e.jsx("div",{className:r(u.popover,{[u.visible]:o}),ref:t,children:e.jsx("ul",{className:u.list,children:de.map(s=>e.jsx("li",{className:u.listItem,onClick:()=>l(s),children:e.jsx("p",{className:r(u.language,{[u.selected]:s===a}),children:s})},s))})})},_e=()=>{const i=x(T),{isOpen:o,isVisible:a,popoverRef:n,handleTogglePopover:t,handleClosePopover:c,handleOutsideClick:l}=k();return e.jsxs("div",{className:p.wrapper,children:[e.jsxs("div",{className:p.container,children:[e.jsx("span",{className:p.line,children:"Languages"}),e.jsxs("button",{type:"button",className:p.btn,onClick:t,children:[e.jsx("span",{className:p.text,children:i}),e.jsx("div",{className:p.iconContainer,children:e.jsx(j,{iconId:"icon-down",className:r(p.icon,{[p.iconRotate]:o})})})]})]}),o&&e.jsx(pe,{closePopover:c,handleOutsideClick:l,chosenLanguage:i,isVisible:a,popoverRef:n})]})},ve="_wrapper_tdkdy_1",me="_line_tdkdy_9",ue="_btn_tdkdy_25",he="_text_tdkdy_53",xe="_iconContainer_tdkdy_69",be="_icon_tdkdy_69",je="_iconRotate_tdkdy_101",_={wrapper:ve,line:me,btn:ue,text:he,iconContainer:xe,icon:be,iconRotate:je},ke="_popover_1bpkw_1",ge="_visible_1bpkw_35",we="_list_1bpkw_61",Ne="_language_1bpkw_73",Ce="_selected_1bpkw_91",h={popover:ke,visible:ge,list:we,language:Ne,selected:Ce},fe=[10,20,30,40],Re=({closePopover:i,isVisible:o,chosenPrice:a,handleOutsideClick:n,popoverRef:t})=>{const c=b();v.useEffect(()=>(document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}),[n]);const l=s=>{i(),c(E(s))};return e.jsx("div",{className:r(h.popover,{[h.visible]:o}),ref:t,children:e.jsx("ul",{className:h.list,children:fe.map(s=>e.jsx("li",{className:h.listItem,onClick:()=>l(s),children:e.jsx("p",{className:r(h.language,{[h.selected]:s===a}),children:s})},s))})})},Pe=()=>{const i=x(B),{isOpen:o,isVisible:a,popoverRef:n,handleTogglePopover:t,handleClosePopover:c,handleOutsideClick:l}=k();return e.jsxs("div",{className:_.wrapper,children:[e.jsxs("div",{className:_.container,children:[e.jsx("span",{className:_.line,children:"Price"}),e.jsxs("button",{type:"button",className:_.btn,onClick:t,children:[e.jsxs("span",{className:_.text,children:[i," ",i&&"$"]}),e.jsx("div",{className:_.iconContainer,children:e.jsx(j,{iconId:"icon-down",className:r(_.icon,{[_.iconRotate]:o})})})]})]}),o&&e.jsx(Re,{closePopover:c,handleOutsideClick:l,chosenPrice:i,isVisible:a,popoverRef:n})]})},ye="_container_1iqy1_1",Oe="_btn_1iqy1_15",g={container:ye,btn:Oe},Ee=()=>{const i=b(),o=()=>{i(N())};return e.jsxs("div",{className:g.container,children:[e.jsx(_e,{}),e.jsx(X,{}),e.jsx(Pe,{}),e.jsx("button",{type:"button",className:g.btn,onClick:o,children:"Refresh"})]})},Le="_container_10kdg_1",Ie={container:Le},Ve="_wrapper_stn8s_1",w={wrapper:Ve},qe=()=>e.jsx("div",{className:w.wrapper,children:e.jsx("p",{className:w.text,children:"We're sorry, but we couldn't load the teachers. Please refresh the page or try again later."})}),Ae=()=>{const i=x(L),o=x(I),a=f(),n=b();return v.useEffect(()=>{n(R()),n(N())},[a.pathname,n]),o?e.jsx(qe,{}):i?e.jsx(P,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:Ie.container,children:[e.jsx(Ee,{}),e.jsx(V,{})]})})};export{Ae as default};
//# sourceMappingURL=TeachersPage-erGe5Lir-DrGuyQ5T.js.map
