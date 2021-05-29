(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[19],{1042:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(991),l=a(975),o=a(963),c=a(964),s=a(117),u=a(907),m=a(1026),d=a(986),p=a(11),f=a(334),b=a(351),g=a(15),h=a(897),v=a(909),E=a(1001),x=a(961),j=a(1007),O=a.n(j),w=a(1009),y=(a(1011),a(1008),a(446)),S=a(118),N=a(342);Object(w.registerPlugin)(O.a);var k={title:"",body:"",notificationType:0,users_id:[],subscriptions_id:[],data:"",image:""},C=[{id:1,name:"Grupo de usuarios",value:"group_users"},{id:2,name:"Grupo de suscripciones",value:"group_subscriptions"},{id:3,name:"Todas las suscripciones",value:"all_subscriptions"}],P=function(e){var t=Object(p.b)(),a=Object(p.c)(N.m),i=Object(p.c)((function(e){return e.notifications.errors})),l=Object(p.c)((function(e){return e.entities.subscriptionTypes})),o=Object(p.c)((function(e){return e.notifications.notificationDialog})),c=Object(S.c)(k,(function(){return I()})),s=c.errors,u=c.form,m=c.handleChange,j=c.handleSubmit,O=c.setErrors,P=c.setForm,T=c.setInForm,_=Object(n.useCallback)((function(){"edit"===o.type&&o.data&&P(Object(g.a)({},o.data)),"new"===o.type&&P(Object(g.a)(Object(g.a)({},k),o.data))}),[o.data,o.type,P]);Object(n.useEffect)((function(){o.props.open&&_()}),[o.props.open,_]),Object(n.useEffect)((function(){"group_subscriptions"===u.notificationType&&0===l.length&&t(Object(f.h)()),"group_users"===u.notificationType&&0===a.length&&t(Object(N.i)())}),[t,u.notificationType,l]),Object(n.useEffect)((function(){i&&O(i)}),[i,O]);var I=function(){t(Object(b.e)(u))};return r.a.createElement("form",{className:"md:overflow-hidden flex flex-col space-y-16",noValidate:!0,onSubmit:j},r.a.createElement("div",{className:"w-full"},r.a.createElement(w.FilePond,{allowMultiple:!1,credits:"",labelIdle:"Arrastra la imagen que desea subir",name:"files",onupdatefiles:function(e){T("image",e[0].file)}})),r.a.createElement("div",{className:"flex items-center mt-4"},r.a.createElement(h.a,{error:!!s.notificationType,helperText:s.notificationType&&s.notificationType,id:"notificationType",label:"Tipo de notificaci\xf3n",name:"notificationType",value:u.notificationType||"",variant:"outlined",fullWidth:!0,select:!0,onChange:m},C.map((function(e){return r.a.createElement(v.a,{key:e.id,value:e.value},e.name)})))),"group_subscriptions"===u.notificationType&&r.a.createElement("div",{className:"flex items-center w-full"},r.a.createElement(y.a,{className:"w-full",options:l.map((function(e){return{value:e.id,label:e.name}})),placeholder:"Seleccione los tipos de suscripciones",size:"small",textFieldProps:{variant:"outlined",error:!!s.subscriptions_id,helperText:s.subscriptions_id&&s.subscriptions_id},isMulti:!0,onChange:function(e){return T("subscriptions_id",e.map((function(e){return e.value})))}})),"group_users"===u.notificationType&&r.a.createElement("div",{className:"flex items-center"},r.a.createElement(y.a,{className:"w-full",options:a.map((function(e){return{value:e.id,label:e.name}})),placeholder:"Seleccione los usuarios",size:"small",textFieldProps:{variant:"outlined",error:!!s.users_id,helperText:s.users_id&&s.users_id},isMulti:!0,onChange:function(e){return T("users_id",e.map((function(e){return e.value})))}})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(h.a,{id:"title",label:"T\xedtulo del mensaje",name:"title",variant:"outlined",fullWidth:!0,onChange:m})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(h.a,{id:"body",label:"Cuerpo del mensaje",name:"body",variant:"outlined",fullWidth:!0,onChange:m})),r.a.createElement(E.a,{className:"justify-center p-8"},r.a.createElement("div",null,r.a.createElement(x.a,{className:"mr-16",color:"primary",startIcon:r.a.createElement(d.a,null),variant:"outlined",onClick:e.onClick},"Cancelar")),r.a.createElement("div",null,r.a.createElement(x.a,{color:"primary",startIcon:r.a.createElement(d.c,null),type:"submit",variant:"contained"},"Guardar"))))};var T=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.notifications.notificationDialog})),a=function(){e(Object(b.a)())};return r.a.createElement(l.a,Object.assign({classes:{paper:"m-8"}},t.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e()}}),r.a.createElement(o.a,{elevation:1,position:"static"},r.a.createElement(c.a,{className:"flex justify-between w-full"},r.a.createElement(s.a,{color:"inherit",variant:"subtitle1"},"Nueva notificaci\xf3n"),r.a.createElement(u.a,{className:"cursor-pointer",onClick:function(){return a()}},r.a.createElement(d.a,null)))),r.a.createElement(m.a,{classes:{root:"p-16"}},r.a.createElement(P,{onClick:function(){return a()}})))},_=a(29),I=a(335),R=a(36),H=a(1024),B=a(1025),W=a(1022),F=a(1023),D=a(985),V=(a(340),a(47)),z=a(987),A=a(989),M=a(990),G=function(e){var t=e.data,a=e.rows,n=(Object(p.b)(),Object(M.a)()),i=n.page,l=n.rowsPerPage,o=n.setPage,c=n.setRowsPerPage;return r.a.createElement("div",{className:"flex flex-col w-full"},r.a.createElement(V.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(H.a,{"aria-labelledby":"tableTitle",className:"min-w-xl",stickyHeader:!0},r.a.createElement(z.a,{rows:a}),r.a.createElement(B.a,null,t.slice(i*l,i*l+l).map((function(e){return r.a.createElement(W.a,{key:e.id,className:"h-32 cursor-pointer",hover:!0},r.a.createElement(F.a,{component:"th",scope:"row"},e.created_at),r.a.createElement(F.a,{component:"th",scope:"row"},r.a.createElement(D.a,{alt:"notification image",src:e.image})),r.a.createElement(F.a,{component:"th",scope:"row"},e.title),r.a.createElement(F.a,{component:"th",scope:"row"},e.notification_type),r.a.createElement(F.a,{component:"th",scope:"row"},e.body))}))))),r.a.createElement(A.a,{count:t.length,page:i,rowsPerPage:l,setPage:o,setRowsPerPage:c}))},J=[{id:"date",label:"Fecha"},{id:"image",label:"Foto"},{id:"title",label:"T\xedtulo"},{id:"notification_type",label:"Tipo de notificaci\xf3n"},{id:"message",label:"Mensaje"}];var L=function(){var e=Object(p.b)(),t=Object(p.c)(b.f),a=Object(p.c)((function(e){return e.notifications.searchText})),i=Object(p.c)((function(e){return e.notifications.selectedStatus})),l=Object(n.useState)(!0),o=Object(_.a)(l,2),c=o[0],u=o[1],m=Object(n.useState)(null),d=Object(_.a)(m,2),f=d[0],g=d[1];return Object(n.useEffect)((function(){e(Object(b.c)()).then((function(){return u(!1)}))}),[e]),Object(n.useEffect)((function(){t&&g(function(){if(0===a.length&&"todos"===i)return t;var e=t;return"todos"!==i&&(e=e.filter((function(e){return e.status_id===i}))),e=R.a.filterArrayByString(e,a)}())}),[t,i,a]),f?c?r.a.createElement(I.a,null):0===f.length?r.a.createElement("div",{className:"flex items-center justify-center flex-1 h-full"},r.a.createElement(s.a,{color:"textSecondary",variant:"h5"},"No hay notificaciones")):r.a.createElement(G,{data:f,rows:J}):null},q=a(960),U=a(962),K=a(1004),Q=a(996),X=(a(993),a(994)),Y=a(35),Z=a(176),$=function(){var e=Object(p.b)(),t=(Object(p.c)((function(e){return e.blogs.selectedStatus})),Object(p.c)(Y.e));return r.a.createElement("div",{className:"flex flex-col justify-center w-full mt-16 space-y-20"},r.a.createElement("div",{className:"flex mt-24"},r.a.createElement(Z.a,{animation:"transition.expandIn",delay:300},r.a.createElement(q.a,{className:"text-32 mr-16"},r.a.createElement(Q.a,null))),r.a.createElement(Z.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(s.a,{className:"sm:flex sm:mx-12 mx-0",variant:"h6"},"Notificaciones"))),r.a.createElement("div",{className:"flex justify-between w-full"},r.a.createElement(U.a,{theme:t},r.a.createElement(Z.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement("div",{className:"lg:flex-row lg:space-y-0 flex flex-col justify-between w-full h-full space-y-10"},r.a.createElement("div",{className:"lg:items-center flex w-full space-x-8"},r.a.createElement(X.a,{actionCallback:b.g})),r.a.createElement("div",{className:"flex h-full"},r.a.createElement(x.a,{className:"whitespace-nowrap w-full normal-case",color:"primary",startIcon:r.a.createElement(K.a,null),variant:"contained",onClick:function(){return e(Object(b.d)())}},r.a.createElement("span",{className:"sm:flex hidden"},"Agregar notificaci\xf3n"),r.a.createElement("span",{className:"sm:hidden flex"},"Agregar"))))))))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-172 h-172 sm:h-172 sm:min-h-172 my-10"},content:r.a.createElement(L,null),header:r.a.createElement($,null),innerScroll:!0}),r.a.createElement(T,null))}},987:function(e,t,a){"use strict";var n=a(1023),r=a(1021),i=a(1022),l=a(0),o=a.n(l);t.a=function(e){var t=e.rows;return o.a.createElement(r.a,null,o.a.createElement(i.a,{className:"h-64"},t.map((function(e){return o.a.createElement(n.a,{key:e.id,align:e.align||"left",className:"whitespace-nowrap",padding:e.disablePadding?"none":"default"},e.label)}),this)))}},989:function(e,t,a){"use strict";var n=a(1045),r=a(0),i=a.n(r);t.a=function(e){var t=e.count,a=e.page,r=e.rowsPerPage,l=e.setPage,o=e.setRowsPerPage;return i.a.createElement(n.a,{backIconButtonProps:{"aria-label":"P\xe1gina previa"},backIconButtonText:"P\xe1gina previa",className:"flex-shrink-0 overflow-x-auto",component:"div",count:t,labelRowsPerPage:"Registros por p\xe1gina",nextIconButtonProps:{"aria-label":"Siguiente p\xe1gina"},nextIconButtonText:"Siguiente p\xe1gina",page:a,rowsPerPage:r,onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){o(e.target.value)}})}},990:function(e,t,a){"use strict";var n=a(29),r=a(0);t.a=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),a=t[0],i=t[1],l=Object(r.useState)(10),o=Object(n.a)(l,2);return{page:a,setPage:i,rowsPerPage:o[0],setRowsPerPage:o[1]}}},991:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(4),r=a(908),i=a(6),l=a(0),o=a.n(l),c=a(46),s=a(962),u=a(35),m=a(11);var d=function(e){var t=Object(c.a)(),a=Object(m.c)(Object(u.c)(t.palette.primary.main));return o.a.createElement("div",{className:e.classes.header},e.header&&o.a.createElement(s.a,{theme:a},e.header))},p=a(29),f=a(91),b=a(981),g=a(982),h=a(47);var v=function(e){var t=Object(c.a)(),a=Object(m.c)(Object(u.c)(t.palette.primary.main)),n=e.classes;return o.a.createElement(o.a.Fragment,null,e.header&&o.a.createElement(s.a,{theme:a},o.a.createElement("div",{className:Object(i.a)(n.sidebarHeader,e.variant)},e.header)),e.content&&o.a.createElement(h.a,{className:n.sidebarContent,enable:e.innerScroll},e.content))};var E=o.a.forwardRef((function(e,t){var a=Object(l.useState)(!1),n=Object(p.a)(a,2),r=n[0],c=n[1],s=e.classes;Object(l.useImperativeHandle)(t,(function(){return{toggleSidebar:u}}));var u=function(){c(!r)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{lgUp:"permanent"===e.variant},o.a.createElement(g.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return u()},disableSwipeToOpen:!0,classes:{root:Object(i.a)(s.sidebarWrapper,e.variant),paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},o.a.createElement(v,e))),"permanent"===e.variant&&o.a.createElement(b.a,{mdDown:!0},o.a.createElement(f.a,{variant:"permanent",className:Object(i.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},o.a.createElement(v,e))))})),x=Object(r.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:256,backgroundColor:e.palette.background.paper,backgroundSize:"cover",borderBottom:"1px solid ".concat(e.palette.primary.main),pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:192,minHeight:192,maxHeight:192,display:"flex",color:e.palette.secondary.main},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:296,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:256,minHeight:256,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),j=o.a.forwardRef((function(e,t){var a=Object(l.useRef)(null),n=Object(l.useRef)(null),r=Object(l.useRef)(null),c=x(e),s=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return o.a.useImperativeHandle(t,(function(){return{rootRef:r,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),o.a.createElement("div",{ref:r,className:Object(i.a)(c.root,e.innerScroll&&c.innerScroll)},o.a.createElement("div",{className:c.topBg}),o.a.createElement("div",{className:"container flex w-full"},u&&o.a.createElement(E,{ref:a,classes:c,content:e.leftSidebarContent,header:e.leftSidebarHeader,innerScroll:e.innerScroll,position:"left",rootRef:r,variant:e.leftSidebarVariant||"permanent"}),o.a.createElement("div",{className:Object(i.a)(c.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},o.a.createElement(d,{classes:c,header:e.header}),o.a.createElement("div",{className:Object(i.a)(c.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&o.a.createElement("div",{className:c.toolbar},e.contentToolbar),e.content&&o.a.createElement(h.a,{className:c.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),s&&o.a.createElement(E,{ref:n,classes:c,content:e.rightSidebarContent,header:e.rightSidebarHeader,innerScroll:e.innerScroll,position:"right",rootRef:r,variant:e.rightSidebarVariant||"permanent"})))}));j.defaultProps={};var O=o.a.memo(j)},993:function(e,t,a){"use strict";var n=a(897),r=a(959),i=a(960),l=a(909),o=a(0),c=a.n(o),s=a(988),u=a(11);t.a=function(e){var t=e.actionCallback,a=e.data,o=e.selectedStatus,m=Object(u.b)();return c.a.createElement(n.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:c.a.createElement(r.a,{position:"start"},c.a.createElement(i.a,null,c.a.createElement(s.c,null)))},placeholder:"Filtrar",value:o,variant:"outlined",select:!0,onChange:function(e){return m(t(e))}},c.a.createElement(l.a,{value:"todos"},"Todos"),a.map((function(e){return c.a.createElement(l.a,{key:e.id,value:e.id},e.name)})))}},994:function(e,t,a){"use strict";var n=a(29),r=a(897),i=a(959),l=a(960),o=a(0),c=a.n(o),s=a(11),u=a(118);t.a=function(e){var t=e.actionCallback,a=Object(s.b)(),m=Object(o.useState)(""),d=Object(n.a)(m,2),p=d[0],f=d[1],b=Object(u.a)(p,300);Object(o.useEffect)((function(){a(t(b))}),[a,b]);return c.a.createElement(r.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:c.a.createElement(i.a,{position:"start"},c.a.createElement(l.a,null,"search"))},placeholder:"Buscar",value:p,variant:"outlined",onChange:function(e){var t=e.target.value;f(t)}})}}}]);