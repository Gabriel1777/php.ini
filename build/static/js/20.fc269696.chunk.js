(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[20],{1043:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(991),c=a(29),o=a(117),i=a(11),s=a(334),u=a(36),m=a(348),d=a(1026),p=a(1027),f=a(1024),b=a(1025),g=a(962),h=a(987),v=a(46),E=a(988),x=a(992),j=a(993),O=function(e){var t=e.data,a=e.rows,n=Object(i.b)(),l=Object(j.a)(),c=l.page,o=l.rowsPerPage,s=l.setPage,u=l.setRowsPerPage;return r.a.createElement("div",{className:"flex flex-col w-full"},r.a.createElement(v.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(d.a,{"aria-labelledby":"tableTitle",className:"min-w-xl",stickyHeader:!0},r.a.createElement(E.a,{rows:a}),r.a.createElement(p.a,null,t.slice(c*o,c*o+o).map((function(e){return r.a.createElement(f.a,{key:e.id,className:"h-32 cursor-pointer",hover:!0},r.a.createElement(b.a,{component:"th",scope:"row"},e.code),r.a.createElement(b.a,{className:"text-center",component:"th",scope:"row"},e.value),r.a.createElement(b.a,{component:"th",scope:"row"},e.expiration_date),r.a.createElement(b.a,{className:"text-center",component:"th",scope:"row"},e.maximum_uses),r.a.createElement(b.a,{className:"text-center",component:"th",scope:"row"},e.validated),r.a.createElement(b.a,{className:"text-center",component:"th",scope:"row"},e.redeemed),r.a.createElement(b.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(g.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(h.b,null),variant:"outlined",onClick:function(t){t.stopPropagation(),n(Object(m.e)(e))}},"Editar"))))}))))),r.a.createElement(x.a,{count:t.length,page:c,rowsPerPage:o,setPage:s,setRowsPerPage:u}))},w=a(17),y=[{id:"code",label:"C\xf3digo"},{id:"value",label:"Valor",align:"center"},{id:"expiration_date",label:"Fecha de Vencimiento"},{id:"maximum_uses",label:"Maximo de usos",align:"center"},{id:"validated",label:"Cantidad Validados",align:"center"},{id:"redeemed",label:"Cantidad Redimidos",align:"center"},{id:"acciones",label:"Acciones",align:"center"}];var S=function(){var e=Object(i.b)(),t=Object(i.c)(m.h),a=Object(i.c)((function(e){return e.coupons.searchText})),l=Object(i.c)((function(e){return e.coupons.selectedStatus})),d=Object(n.useState)(!0),p=Object(c.a)(d,2),f=p[0],b=p[1],g=Object(n.useState)(null),h=Object(c.a)(g,2),v=h[0],E=h[1];return Object(n.useEffect)((function(){e(Object(m.d)()).then((function(){return b(!1)}))}),[e]),Object(n.useEffect)((function(){t&&E(function(){if(0===a.length&&"todos"===l)return t;var e=t;return"todos"!==l&&(e=e.filter((function(e){return e.status_id===l}))),e=u.a.filterArrayByString(e,a)}())}),[t,l,a]),v?f?r.a.createElement(s.a,null):0===v.length?r.a.createElement("div",{className:"flex items-center justify-center flex-1 h-full"},r.a.createElement(o.a,{color:"textSecondary",variant:"h5"},"No hay cupones")):r.a.createElement(O,{data:v,rows:y}):null},N=a(961),C=a(963),k=a(1003),_=a(997),P=(a(994),a(995)),T=a(335),I=a(35),R=a(195),H=function(){var e=Object(i.b)(),t=Object(i.c)(I.e),a=Object(i.c)((function(e){return e.entities.statuses})).filter((function(e){return"general"===e.type}));Object(i.c)((function(e){return e.coupons.selectedStatus}));return Object(n.useEffect)((function(){0===a.length&&e(Object(T.i)())}),[e]),r.a.createElement("div",{className:"flex flex-col justify-center w-full mt-16 space-y-20"},r.a.createElement("div",{className:"flex mt-24"},r.a.createElement(R.a,{animation:"transition.expandIn",delay:300},r.a.createElement(N.a,{className:"text-32 mr-16"},r.a.createElement(_.a,null))),r.a.createElement(R.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(o.a,{className:"sm:flex sm:mx-12 mx-0",variant:"h6"},"Cupones"))),r.a.createElement("div",{className:"flex justify-between w-full"},r.a.createElement(C.a,{theme:t},r.a.createElement(R.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement("div",{className:"lg:flex-row lg:space-y-0 flex flex-col justify-between w-full h-full space-y-10"},r.a.createElement("div",{className:"lg:items-center flex w-full space-x-8"},r.a.createElement(P.a,{actionCallback:m.i})),r.a.createElement("div",{className:"flex h-full"},r.a.createElement(g.a,{className:"whitespace-nowrap w-full normal-case",color:"primary",startIcon:r.a.createElement(k.b,null),variant:"contained",onClick:function(){return e(Object(m.f)())}},r.a.createElement("span",{className:"sm:flex hidden"},"Agregar cup\xf3n"),r.a.createElement("span",{className:"sm:hidden flex"},"Agregar"))))))))},W=a(976),B=a(964),V=a(965),F=a(908),D=a(1028),A=a(118),z=a(15),M=a(898),J=a(910),L=a(1002),G=a(1032),U=a(346),q={code:"",expiration_date:new Date,value:0,maximum_uses:0,only_per_charge:!1,subscriptions_id:[],coupon_type_id:0};var K=function(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.coupons.errors})),l=Object(i.c)((function(e){return e.coupons.couponDialog})),c=Object(i.c)((function(e){return e.entities})),o=c.couponTypes,s=c.subscriptionTypes,u=Object(A.c)(q,(function(){return O()})),d=u.errors,p=u.form,f=u.handleChange,b=u.handleSubmit,v=(u.resetForm,u.setErrors),E=u.setForm,x=u.setInForm,j=Object(n.useCallback)((function(){"edit"===l.type&&l.data&&E(Object(z.a)({},l.data)),"new"===l.type&&E(Object(z.a)(Object(z.a)({},q),l.data))}),[l.data,l.type,E]);Object(n.useEffect)((function(){l.props.open&&j()}),[l.props.open,j]),Object(n.useEffect)((function(){a&&v(a)}),[a,v]);var O=function(){"new"===l.type?t(Object(m.g)(p)):t(Object(m.j)(p))};return r.a.createElement("form",{className:"md:overflow-hidden flex flex-col space-y-16",noValidate:!0,onSubmit:b},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(M.a,{error:!!d.coupon_type_id,helperText:d.coupon_type_id||d.coupon_type_id,id:"coupon_type_id",label:"Tipo de cup\xf3n",name:"coupon_type_id",value:p.coupon_type_id||"",variant:"outlined",fullWidth:!0,select:!0,onChange:f},o.map((function(e){return r.a.createElement(J.a,{key:e.id,value:e.id},e.type)})))),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(U.a,{className:"w-full",options:s.map((function(e){return{value:e.id,label:e.name}})),placeholder:"Seleccione los tipos de suscripciones",size:"small",textFieldProps:{variant:"outlined",error:!!d.subscriptions_id,helperText:d.subscriptions_id&&d.subscriptions_id},value:p.subscriptions_id.map((function(e){var t=w.a.find(s,{id:e});return t&&{value:e,label:t.name}})),isMulti:!0,onChange:function(e){return x("subscriptions_id",e.map((function(e){return e.value})))}})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(M.a,{error:!!d.code,helperText:d.code||d.code,id:"code",label:"C\xf3digo",name:"code",value:p.code||"",variant:"outlined",fullWidth:!0,onChange:f})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(M.a,{error:!!d.value,helperText:d.value&&d.value,id:"value",label:"Valor",name:"value",value:p.value,variant:"outlined",fullWidth:!0,onChange:f})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(M.a,{error:!!d.maximum_uses,helperText:d.maximum_uses&&d.maximum_uses,id:"maximum_uses",label:"M\xe1ximo de usos",name:"maximum_uses",value:p.maximum_uses,variant:"outlined",fullWidth:!0,onChange:f})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(G.a,{error:!!d.expiration_date,helperText:d.expiration_date&&d.expiration_date,id:"expiration_date",inputVariant:"outlined",label:"Fecha de expiraci\xf3n",name:"expiration_date",value:p.expiration_date,autoOk:!0,fullWidth:!0,onChange:function(e){return x("expiration_date",e)}})),r.a.createElement(L.a,{className:"justify-center p-8"},r.a.createElement(g.a,{className:"mr-16",color:"primary",startIcon:r.a.createElement(h.a,null),variant:"outlined",onClick:e.onClick},"Cancelar"),r.a.createElement(g.a,{color:"primary",startIcon:r.a.createElement(h.c,null),type:"submit",variant:"contained"},"Guardar")))};var Q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.entities})),a=t.couponTypes,l=t.subscriptionTypes,c=Object(i.c)((function(e){return e.coupons.couponDialog}));Object(A.c)({}).resetForm,Object(n.useEffect)((function(){0===l.length&&e(Object(T.j)()),0===a.length&&e(Object(T.g)())}),[e]);var s=function(){return"new"===c.type?e(Object(m.b)()):e(Object(m.a)())};return r.a.createElement(W.a,Object.assign({classes:{paper:"m-8"}},c.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e(s())}}),r.a.createElement(B.a,{elevation:1,position:"static"},r.a.createElement(V.a,{className:"flex justify-between w-full"},r.a.createElement(o.a,{color:"inherit",variant:"subtitle1"},"new"===c.type?"Nuevo cup\xf3n":"Editar cup\xf3n"),r.a.createElement(F.a,{className:"cursor-pointer",onClick:function(){return e(s())}},r.a.createElement(h.a,null)))),r.a.createElement(D.a,{classes:{root:"p-16"}},r.a.createElement(K,{onClick:function(){return e(s())}})))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-172 h-172 sm:h-172 sm:min-h-172 my-10"},content:r.a.createElement(S,null),header:r.a.createElement(H,null),innerScroll:!0}),r.a.createElement(Q,null))}},988:function(e,t,a){"use strict";var n=a(1025),r=a(1023),l=a(1024),c=a(0),o=a.n(c);t.a=function(e){var t=e.rows;return o.a.createElement(r.a,null,o.a.createElement(l.a,{className:"h-64"},t.map((function(e){return o.a.createElement(n.a,{key:e.id,align:e.align||"left",className:"whitespace-nowrap",padding:e.disablePadding?"none":"default"},e.label)}),this)))}},991:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(4),r=a(909),l=a(6),c=a(0),o=a.n(c),i=a(45),s=a(963),u=a(35),m=a(11);var d=function(e){var t=Object(i.a)(),a=Object(m.c)(Object(u.c)(t.palette.primary.main));return o.a.createElement("div",{className:e.classes.header},e.header&&o.a.createElement(s.a,{theme:a},e.header))},p=a(29),f=a(91),b=a(982),g=a(983),h=a(46);var v=function(e){var t=Object(i.a)(),a=Object(m.c)(Object(u.c)(t.palette.primary.main)),n=e.classes;return o.a.createElement(o.a.Fragment,null,e.header&&o.a.createElement(s.a,{theme:a},o.a.createElement("div",{className:Object(l.a)(n.sidebarHeader,e.variant)},e.header)),e.content&&o.a.createElement(h.a,{className:n.sidebarContent,enable:e.innerScroll},e.content))};var E=o.a.forwardRef((function(e,t){var a=Object(c.useState)(!1),n=Object(p.a)(a,2),r=n[0],i=n[1],s=e.classes;Object(c.useImperativeHandle)(t,(function(){return{toggleSidebar:u}}));var u=function(){i(!r)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{lgUp:"permanent"===e.variant},o.a.createElement(g.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return u()},disableSwipeToOpen:!0,classes:{root:Object(l.a)(s.sidebarWrapper,e.variant),paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},o.a.createElement(v,e))),"permanent"===e.variant&&o.a.createElement(b.a,{mdDown:!0},o.a.createElement(f.a,{variant:"permanent",className:Object(l.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},o.a.createElement(v,e))))})),x=Object(r.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:256,backgroundColor:e.palette.background.paper,backgroundSize:"cover",borderBottom:"1px solid ".concat(e.palette.primary.main),pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:192,minHeight:192,maxHeight:192,display:"flex",color:e.palette.secondary.main},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:296,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:256,minHeight:256,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),j=o.a.forwardRef((function(e,t){var a=Object(c.useRef)(null),n=Object(c.useRef)(null),r=Object(c.useRef)(null),i=x(e),s=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return o.a.useImperativeHandle(t,(function(){return{rootRef:r,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),o.a.createElement("div",{ref:r,className:Object(l.a)(i.root,e.innerScroll&&i.innerScroll)},o.a.createElement("div",{className:i.topBg}),o.a.createElement("div",{className:"container flex w-full"},u&&o.a.createElement(E,{ref:a,classes:i,content:e.leftSidebarContent,header:e.leftSidebarHeader,innerScroll:e.innerScroll,position:"left",rootRef:r,variant:e.leftSidebarVariant||"permanent"}),o.a.createElement("div",{className:Object(l.a)(i.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},o.a.createElement(d,{classes:i,header:e.header}),o.a.createElement("div",{className:Object(l.a)(i.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&o.a.createElement("div",{className:i.toolbar},e.contentToolbar),e.content&&o.a.createElement(h.a,{className:i.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),s&&o.a.createElement(E,{ref:n,classes:i,content:e.rightSidebarContent,header:e.rightSidebarHeader,innerScroll:e.innerScroll,position:"right",rootRef:r,variant:e.rightSidebarVariant||"permanent"})))}));j.defaultProps={};var O=o.a.memo(j)},992:function(e,t,a){"use strict";var n=a(1047),r=a(0),l=a.n(r);t.a=function(e){var t=e.count,a=e.page,r=e.rowsPerPage,c=e.setPage,o=e.setRowsPerPage;return l.a.createElement(n.a,{backIconButtonProps:{"aria-label":"P\xe1gina previa"},backIconButtonText:"P\xe1gina previa",className:"flex-shrink-0 overflow-x-auto",component:"div",count:t,labelRowsPerPage:"Registros por p\xe1gina",nextIconButtonProps:{"aria-label":"Siguiente p\xe1gina"},nextIconButtonText:"Siguiente p\xe1gina",page:a,rowsPerPage:r,onChangePage:function(e,t){c(t)},onChangeRowsPerPage:function(e){o(e.target.value)}})}},993:function(e,t,a){"use strict";var n=a(29),r=a(0);t.a=function(){var e=Object(r.useState)(0),t=Object(n.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(10),o=Object(n.a)(c,2);return{page:a,setPage:l,rowsPerPage:o[0],setRowsPerPage:o[1]}}},994:function(e,t,a){"use strict";var n=a(898),r=a(960),l=a(961),c=a(910),o=a(0),i=a.n(o),s=a(989),u=a(11);t.a=function(e){var t=e.actionCallback,a=e.data,o=e.placeholder,m=e.selectedStatus,d=Object(u.b)();return i.a.createElement(n.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:i.a.createElement(r.a,{position:"start"},i.a.createElement(l.a,null,i.a.createElement(s.d,null)))},label:o,value:m,variant:"outlined",select:!0,onChange:function(e){return d(t(e))}},i.a.createElement(c.a,{value:"todos"},"Todos"),a.map((function(e){return i.a.createElement(c.a,{key:e.id,value:e.id},e.name)})))}},995:function(e,t,a){"use strict";var n=a(29),r=a(898),l=a(960),c=a(961),o=a(0),i=a.n(o),s=a(11),u=a(118);t.a=function(e){var t=e.actionCallback,a=Object(s.b)(),m=Object(o.useState)(""),d=Object(n.a)(m,2),p=d[0],f=d[1],b=Object(u.a)(p,300);Object(o.useEffect)((function(){a(t(b))}),[a,b]);return i.a.createElement(r.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:i.a.createElement(l.a,{position:"start"},i.a.createElement(c.a,null,"search"))},placeholder:"Buscar",value:p,variant:"outlined",onChange:function(e){var t=e.target.value;f(t)}})}}}]);