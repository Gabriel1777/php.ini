(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[20],{1002:function(e,a,t){"use strict";var n=t(2),r=t(9),l=t(0),i=(t(7),t(6)),c=t(12),o=l.forwardRef((function(e,a){var t=e.disableSpacing,c=void 0!==t&&t,o=e.classes,s=e.className,u=Object(r.a)(e,["disableSpacing","classes","className"]);return l.createElement("div",Object(n.a)({className:Object(i.a)(o.root,s,!c&&o.spacing),ref:a},u))}));a.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(o)},1045:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(993),i=t(976),c=t(964),o=t(965),s=t(117),u=t(908),m=t(1028),d=t(987),p=t(11),b=t(345),f=t(15),g=t(898),v=t(910),h=t(1002),E=t(962),x=t(118),j=t(334),O=[{id:1,value:"mensual",name:"Mensual"},{id:2,value:"trimestral",name:"Trimestral"},{id:3,value:"semestral",name:"Semestral"},{id:4,value:"anual",name:"Anual"}],w={subscription_type_id:0,description:"",value:0,modality:"",number_publications:0,value_additional_item:0},y=function(e){var a=Object(p.b)(),t=Object(p.c)((function(e){return e.subscriptions.errors})),l=Object(p.c)((function(e){return e.entities.subscriptionTypes})),i=Object(p.c)((function(e){return e.subscriptions.subscriptionDialog})),c=Object(x.c)(w,(function(){return k()})),o=c.errors,s=c.form,u=c.handleChange,m=c.handleSubmit,y=c.setErrors,S=c.setForm,N=(c.setInForm,Object(n.useCallback)((function(){"edit"===i.type&&i.data&&S(Object(f.a)({},i.data)),"new"===i.type&&S(Object(f.a)(Object(f.a)({},w),i.data))}),[i.data,i.type,S]));Object(n.useEffect)((function(){i.props.open&&N()}),[i.props.open,N]),Object(n.useEffect)((function(){0===l.length&&a(Object(j.j)())}),[a,l]),Object(n.useEffect)((function(){t&&y(t)}),[t,y]);var k=function(){return"new"===i.type?a(Object(b.h)(s)):a(Object(b.l)(s))};return r.a.createElement("form",{className:"md:overflow-hidden flex flex-col space-y-16",noValidate:!0,onSubmit:m},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(g.a,{error:!!o.subscription_type_id,helperText:o.subscription_type_id&&o.subscription_type_id,id:"subscription_type_id",label:"Tipo de suscripci\xf3n",name:"subscription_type_id",value:s.subscription_type_id||"",variant:"outlined",fullWidth:!0,select:!0,onChange:u},l.map((function(e){return r.a.createElement(v.a,{key:e.id,value:e.id},e.name)})))),r.a.createElement("div",{className:"flex items-center mt-4"},r.a.createElement(g.a,{error:!!o.description,helperText:o.description&&o.description,id:"description",label:"Descripci\xf3n",name:"description",value:s.description,variant:"outlined",fullWidth:!0,onChange:u})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(g.a,{error:!!o.value,helperText:o.value&&o.value,id:"value",label:"Valor",name:"value",value:s.value,variant:"outlined",fullWidth:!0,onChange:u})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(g.a,{error:!!o.modality,helperText:o.modality&&o.modality,id:"modality",label:"Modalidad",name:"modality",value:s.modality||"",variant:"outlined",fullWidth:!0,select:!0,onChange:u},O.map((function(e){return r.a.createElement(v.a,{key:e.id,value:e.value},e.name)})))),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(g.a,{error:!!o.number_publications,helperText:o.number_publications&&o.number_publications,id:"number_publications",label:"Cantidad de publicaciones",name:"number_publications",value:s.number_publications,variant:"outlined",fullWidth:!0,onChange:u})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(g.a,{error:!!o.value_additional_item,helperText:o.value_additional_item&&o.value_additional_item,id:"value_additional_item",label:"Valor item adicional",name:"value_additional_item",value:s.value_additional_item,variant:"outlined",fullWidth:!0,onChange:u})),r.a.createElement(h.a,{className:"justify-center p-8"},r.a.createElement("div",null,r.a.createElement(E.a,{className:"mr-16",color:"primary",startIcon:r.a.createElement(d.a,null),variant:"outlined",onClick:e.onClick},"Cancelar")),r.a.createElement("div",null,r.a.createElement(E.a,{color:"primary",startIcon:r.a.createElement(d.c,null),type:"submit",variant:"contained"},"Guardar"))))};var S=function(){var e=Object(p.b)(),a=Object(p.c)((function(e){return e.subscriptions.subscriptionDialog})),t=function(){return"new"===a.type?e(Object(b.c)()):e(Object(b.b)())};return r.a.createElement(i.a,Object.assign({classes:{paper:"m-8"}},a.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return t()}}),r.a.createElement(c.a,{elevation:1,position:"static"},r.a.createElement(o.a,{className:"flex justify-between w-full"},r.a.createElement(s.a,{color:"inherit",variant:"subtitle1"},"new"===a.type?"Nueva suscripci\xf3n":"Editar suscripci\xf3n"),r.a.createElement(u.a,{className:"cursor-pointer",onClick:function(){return t()}},r.a.createElement(d.a,null)))),r.a.createElement(m.a,{classes:{root:"p-16"}},r.a.createElement(y,{onClick:function(){return t()}})))},N=t(29),k=t(335),C=t(36),_=t(1026),P=t(1027),T=t(1024),I=t(1025),R=t(979),H=t(46),W=t(988),B=t(991),D=t(992),V=function(e){var a=e.data,t=e.rows,n=Object(p.b)(),l=Object(D.a)(),i=l.page,c=l.rowsPerPage,o=l.setPage,s=l.setRowsPerPage;return r.a.createElement("div",{className:"flex flex-col w-full"},r.a.createElement(H.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(_.a,{"aria-labelledby":"tableTitle",className:"min-w-xl",stickyHeader:!0},r.a.createElement(W.a,{rows:t}),r.a.createElement(P.a,null,a.slice(i*c,i*c+c).map((function(e){return r.a.createElement(T.a,{key:e.id,className:"h-32 cursor-pointer",hover:!0},r.a.createElement(I.a,{component:"th",scope:"row"},e.description),r.a.createElement(I.a,{component:"th",scope:"row"},e.subscription_type_name),r.a.createElement(I.a,{component:"th",scope:"row"},e.modality),r.a.createElement(I.a,{component:"th",scope:"row"},e.value),r.a.createElement(I.a,{className:"text-center",component:"th",scope:"row"},e.number_publications),r.a.createElement(I.a,{className:"text-center",component:"th",scope:"row"},e.value_additional_item),r.a.createElement(I.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(R.a,{checked:1===e.status_id,inputProps:{"aria-label":"secondary checkbox"},name:"checkedA",onClick:function(){return n(Object(b.a)(e.id))}}))),r.a.createElement(I.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(E.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(d.b,null),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(b.f)(e))}},"Editar"))))}))))),r.a.createElement(B.a,{count:a.length,page:i,rowsPerPage:c,setPage:o,setRowsPerPage:s}))},A=[{id:"description",label:"Descripci\xf3n"},{id:"subscription_type",label:"Tipo de suscripci\xf3n"},{id:"modality",label:"Modalidad"},{id:"value",label:"Valor"},{id:"number_publications",label:"Cantidad Publicaciones"},{id:"value_additional_item",label:"Valor item adicional"},{id:"estado",label:"Estado",align:"center"},{id:"accion",label:"Acci\xf3n",align:"center"}];var M=function(){var e=Object(p.b)(),a=Object(p.c)(b.i),t=Object(p.c)((function(e){return e.subscriptions.searchText})),l=Object(p.c)((function(e){return e.subscriptions.selectedStatus})),i=Object(n.useState)(!0),c=Object(N.a)(i,2),o=c[0],u=c[1],m=Object(n.useState)(null),d=Object(N.a)(m,2),f=d[0],g=d[1];return Object(n.useEffect)((function(){e(Object(b.e)()).then((function(){return u(!1)}))}),[e]),Object(n.useEffect)((function(){a&&g(function(){if(0===t.length&&"todos"===l)return a;var e=a;return"todos"!==l&&(e=e.filter((function(e){return e.status_id===l}))),e=C.a.filterArrayByString(e,t)}())}),[a,l,t]),f?o?r.a.createElement(k.a,null):0===f.length?r.a.createElement("div",{className:"flex items-center justify-center flex-1 h-full"},r.a.createElement(s.a,{color:"textSecondary",variant:"h5"},"No hay suscripciones")):r.a.createElement(V,{data:f,rows:A}):null},F=t(961),z=t(963),L=t(1003),J=t(997),G=t(994),U=t(995),q=t(35),K=t(195),Q=function(){var e=Object(p.b)(),a=Object(p.c)(q.e),t=Object(p.c)((function(e){return e.entities.statuses})).filter((function(e){return"general"===e.type})),l=Object(p.c)((function(e){return e.subscriptions.selectedStatus}));return Object(n.useEffect)((function(){0===t.length&&e(Object(j.i)())}),[e]),r.a.createElement("div",{className:"flex flex-col justify-center w-full mt-16 space-y-20"},r.a.createElement("div",{className:"flex mt-24"},r.a.createElement(K.a,{animation:"transition.expandIn",delay:300},r.a.createElement(F.a,{className:"text-32 mr-16"},r.a.createElement(J.a,null))),r.a.createElement(K.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(s.a,{className:"sm:flex sm:mx-12 mx-0",variant:"h6"},"Suscripciones"))),r.a.createElement("div",{className:"flex justify-between w-full"},r.a.createElement(z.a,{theme:a},r.a.createElement(K.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement("div",{className:"lg:flex-row lg:space-y-0 flex flex-col justify-between w-full h-full space-y-10"},r.a.createElement("div",{className:"lg:items-center flex w-full space-x-8"},r.a.createElement(U.a,{actionCallback:b.j}),r.a.createElement(G.a,{actionCallback:b.k,data:t,selectedStatus:l})),r.a.createElement("div",{className:"flex h-full"},r.a.createElement(E.a,{className:"whitespace-nowrap w-full normal-case",color:"primary",startIcon:r.a.createElement(L.b,null),variant:"contained",onClick:function(){return e(Object(b.g)())}},r.a.createElement("span",{className:"sm:flex hidden"},"Agregar suscripci\xf3n"),r.a.createElement("span",{className:"sm:hidden flex"},"Agregar"))))))))};a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-172 h-172 sm:h-172 sm:min-h-172 my-10"},content:r.a.createElement(M,null),header:r.a.createElement(Q,null),innerScroll:!0}),r.a.createElement(S,null))}},988:function(e,a,t){"use strict";var n=t(1025),r=t(1023),l=t(1024),i=t(0),c=t.n(i);a.a=function(e){var a=e.rows;return c.a.createElement(r.a,null,c.a.createElement(l.a,{className:"h-64"},a.map((function(e){return c.a.createElement(n.a,{key:e.id,align:e.align||"left",className:"whitespace-nowrap",padding:e.disablePadding?"none":"default"},e.label)}),this)))}},991:function(e,a,t){"use strict";var n=t(1047),r=t(0),l=t.n(r);a.a=function(e){var a=e.count,t=e.page,r=e.rowsPerPage,i=e.setPage,c=e.setRowsPerPage;return l.a.createElement(n.a,{backIconButtonProps:{"aria-label":"P\xe1gina previa"},backIconButtonText:"P\xe1gina previa",className:"flex-shrink-0 overflow-x-auto",component:"div",count:a,labelRowsPerPage:"Registros por p\xe1gina",nextIconButtonProps:{"aria-label":"Siguiente p\xe1gina"},nextIconButtonText:"Siguiente p\xe1gina",page:t,rowsPerPage:r,onChangePage:function(e,a){i(a)},onChangeRowsPerPage:function(e){c(e.target.value)}})}},992:function(e,a,t){"use strict";var n=t(29),r=t(0);a.a=function(){var e=Object(r.useState)(0),a=Object(n.a)(e,2),t=a[0],l=a[1],i=Object(r.useState)(10),c=Object(n.a)(i,2);return{page:t,setPage:l,rowsPerPage:c[0],setRowsPerPage:c[1]}}},993:function(e,a,t){"use strict";t.d(a,"a",(function(){return O}));var n=t(4),r=t(909),l=t(6),i=t(0),c=t.n(i),o=t(45),s=t(963),u=t(35),m=t(11);var d=function(e){var a=Object(o.a)(),t=Object(m.c)(Object(u.c)(a.palette.primary.main));return c.a.createElement("div",{className:e.classes.header},e.header&&c.a.createElement(s.a,{theme:t},e.header))},p=t(29),b=t(91),f=t(982),g=t(983),v=t(46);var h=function(e){var a=Object(o.a)(),t=Object(m.c)(Object(u.c)(a.palette.primary.main)),n=e.classes;return c.a.createElement(c.a.Fragment,null,e.header&&c.a.createElement(s.a,{theme:t},c.a.createElement("div",{className:Object(l.a)(n.sidebarHeader,e.variant)},e.header)),e.content&&c.a.createElement(v.a,{className:n.sidebarContent,enable:e.innerScroll},e.content))};var E=c.a.forwardRef((function(e,a){var t=Object(i.useState)(!1),n=Object(p.a)(t,2),r=n[0],o=n[1],s=e.classes;Object(i.useImperativeHandle)(a,(function(){return{toggleSidebar:u}}));var u=function(){o(!r)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{lgUp:"permanent"===e.variant},c.a.createElement(g.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return u()},disableSwipeToOpen:!0,classes:{root:Object(l.a)(s.sidebarWrapper,e.variant),paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},c.a.createElement(h,e))),"permanent"===e.variant&&c.a.createElement(f.a,{mdDown:!0},c.a.createElement(b.a,{variant:"permanent",className:Object(l.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},c.a.createElement(h,e))))})),x=Object(r.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:256,backgroundColor:e.palette.background.paper,backgroundSize:"cover",borderBottom:"1px solid ".concat(e.palette.primary.main),pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:192,minHeight:192,maxHeight:192,display:"flex",color:e.palette.secondary.main},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:296,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:256,minHeight:256,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),j=c.a.forwardRef((function(e,a){var t=Object(i.useRef)(null),n=Object(i.useRef)(null),r=Object(i.useRef)(null),o=x(e),s=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return c.a.useImperativeHandle(a,(function(){return{rootRef:r,toggleLeftSidebar:function(){t.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),c.a.createElement("div",{ref:r,className:Object(l.a)(o.root,e.innerScroll&&o.innerScroll)},c.a.createElement("div",{className:o.topBg}),c.a.createElement("div",{className:"container flex w-full"},u&&c.a.createElement(E,{ref:t,classes:o,content:e.leftSidebarContent,header:e.leftSidebarHeader,innerScroll:e.innerScroll,position:"left",rootRef:r,variant:e.leftSidebarVariant||"permanent"}),c.a.createElement("div",{className:Object(l.a)(o.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},c.a.createElement(d,{classes:o,header:e.header}),c.a.createElement("div",{className:Object(l.a)(o.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&c.a.createElement("div",{className:o.toolbar},e.contentToolbar),e.content&&c.a.createElement(v.a,{className:o.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),s&&c.a.createElement(E,{ref:n,classes:o,content:e.rightSidebarContent,header:e.rightSidebarHeader,innerScroll:e.innerScroll,position:"right",rootRef:r,variant:e.rightSidebarVariant||"permanent"})))}));j.defaultProps={};var O=c.a.memo(j)},994:function(e,a,t){"use strict";var n=t(898),r=t(960),l=t(961),i=t(910),c=t(0),o=t.n(c),s=t(989),u=t(11);a.a=function(e){var a=e.actionCallback,t=e.data,c=e.placeholder,m=e.selectedStatus,d=Object(u.b)();return o.a.createElement(n.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:o.a.createElement(r.a,{position:"start"},o.a.createElement(l.a,null,o.a.createElement(s.d,null)))},label:c,value:m,variant:"outlined",select:!0,onChange:function(e){return d(a(e))}},o.a.createElement(i.a,{value:"todos"},"Todos"),t.map((function(e){return o.a.createElement(i.a,{key:e.id,value:e.id},e.name)})))}},995:function(e,a,t){"use strict";var n=t(29),r=t(898),l=t(960),i=t(961),c=t(0),o=t.n(c),s=t(11),u=t(118);a.a=function(e){var a=e.actionCallback,t=Object(s.b)(),m=Object(c.useState)(""),d=Object(n.a)(m,2),p=d[0],b=d[1],f=Object(u.a)(p,300);Object(c.useEffect)((function(){t(a(f))}),[t,f]);return o.a.createElement(r.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:o.a.createElement(l.a,{position:"start"},o.a.createElement(i.a,null,"search"))},placeholder:"Buscar",value:p,variant:"outlined",onChange:function(e){var a=e.target.value;b(a)}})}}}]);