(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[11],{1002:function(e,a,t){"use strict";var n=t(2),r=t(9),l=t(0),c=(t(7),t(6)),o=t(12),i=l.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,s=e.className,u=Object(r.a)(e,["disableSpacing","classes","className"]);return l.createElement("div",Object(n.a)({className:Object(c.a)(i.root,s,!o&&i.spacing),ref:a},u))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(i)},1005:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=[{id:1,name:"Hembra",value:"hembra"},{id:2,name:"Macho",value:"macho"},{id:3,name:"Mixto",value:"mixto"}]},1041:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(992),c=t(976),o=t(964),i=t(965),s=t(117),u=t(908),m=t(1028),d=t(987),p=t(11),f=t(349),b=t(15),g=t(1002),h=t(962),v=t(118),E=t(336),j={name:"",breed:"",gender:"",weight:"",age:0,federated_iron:"",description:"",animal_type_id:0,animal_category_id:0,animal_subcategory_id:0,is_lote:!1,quantity_of_lote:0,vaccines:[],photos:[]};var x=function(e){Object(p.b)();var a,t=Object(p.c)((function(e){return e.supplies.errors})),l=Object(p.c)((function(e){return e.supplies.photosDialog})),c=Object(v.c)(j),o=(c.errors,c.form),i=(c.handleChange,c.handleSubmit,c.setErrors),u=c.setForm,m=(c.setInForm,Object(n.useCallback)((function(){"edit"===l.type&&l.data&&u(Object(b.a)({},l.data)),"new"===l.type&&u(Object(b.a)(Object(b.a)({},j),l.data))}),[l.data,l.type,u]));return Object(n.useEffect)((function(){l.props.open&&m()}),[l.props.open,m]),Object(n.useEffect)((function(){t&&i(t)}),[t,i]),r.a.createElement(r.a.Fragment,null,"edit"===l.type&&(null===(a=o.images)||void 0===a?void 0:a.length)>0?r.a.createElement("div",{className:"md:max-w-xl lg:max-w-6xl flex flex-wrap px-8 mx-auto mt-4 overflow-hidden"},o.images.map((function(e){return r.a.createElement("div",{className:"w-1/2 px-8 my-8 overflow-hidden"},r.a.createElement("div",{className:"h-auto text-center text-black bg-white border border-gray-400 rounded shadow-lg"},r.a.createElement("img",{alt:"photo supply",src:e})))}))):r.a.createElement("div",{className:"flex items-center justify-center h-64"},r.a.createElement(s.a,{variant:"h6"},"No se encuentran fotos registradas")),r.a.createElement(g.a,{className:"justify-end"},r.a.createElement(h.a,{color:"primary",startIcon:r.a.createElement(d.a,null),variant:"outlined",onClick:e.onClick},"Cerrar")))};var O=function(){var e=Object(p.b)(),a=Object(p.c)((function(e){return e.supplies.photosDialog}));return r.a.createElement(c.a,Object.assign({classes:{paper:"m-8"}},a.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e(Object(f.b)())}}),r.a.createElement(o.a,{elevation:1,position:"static"},r.a.createElement(i.a,{className:"flex justify-between w-full"},r.a.createElement(s.a,{color:"inherit",variant:"subtitle1"},"Fotos de los insumos"),r.a.createElement(u.a,{className:"cursor-pointer",onClick:function(){return e(Object(f.b)())}},r.a.createElement(d.a,null)))),r.a.createElement(m.a,{classes:{root:"p-16"}},r.a.createElement(x,{onClick:function(){return e(Object(f.b)())}})))},w=t(986),y=t(898),k=(t(345),t(17),t(337),t(334)),S=(t(1005),{name:"",breed:"",gender:"",weight:"",age:0,federated_iron:"",description:"",animal_type_id:0,animal_category_id:0,animal_subcategory_id:0,is_lote:!1,quantity_of_lote:0,vaccines:[]});var N=function(e){Object(p.b)();var a=Object(p.c)((function(e){return e.supplies.errors})),t=Object(p.c)((function(e){return e.supplies.providerDialog})),l=Object(v.c)(S),c=(l.errors,l.form),o=(l.handleChange,l.handleSubmit),i=l.setErrors,s=l.setForm,u=(l.setInForm,Object(n.useCallback)((function(){"edit"===t.type&&t.data&&s(Object(b.a)({},t.data)),"new"===t.type&&s(Object(b.a)(Object(b.a)({},S),t.data))}),[t.data,t.type,s]));return Object(n.useEffect)((function(){t.props.open&&u()}),[t.props.open,u]),Object(n.useEffect)((function(){a&&i(a)}),[a,i]),r.a.createElement(r.a.Fragment,null,"edit"===t.type&&r.a.createElement("div",{className:"flex flex-col items-center justify-center"},r.a.createElement(w.a,{className:"object-fill w-full h-full",src:c.provider_photo,variant:"square"})),r.a.createElement("form",{className:"md:overflow-hidden flex flex-col space-y-16",noValidate:!0,onSubmit:o},r.a.createElement("div",{className:"flex items-center mt-16"},r.a.createElement(y.a,{id:"name",inputProps:{readOnly:!0},label:"Nombre",name:"name",value:c.provider_name,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(y.a,{id:"email",inputProps:{readOnly:!0},label:"Correo",name:"email",value:c.provider_email,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(y.a,{id:"phone",inputProps:{readOnly:!0},label:"Celular",name:"phone",value:c.provider_phone,variant:"outlined",fullWidth:!0})),r.a.createElement(g.a,{className:"justify-end"},r.a.createElement(h.a,{color:"primary",startIcon:r.a.createElement(d.a,null),variant:"outlined",onClick:e.onClick},"Cerrar"))))};var C=function(){var e=Object(p.b)(),a=Object(p.c)((function(e){return e.supplies.providerDialog}));return r.a.createElement(c.a,Object.assign({classes:{paper:"m-8"}},a.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e(Object(f.c)())}}),r.a.createElement(o.a,{elevation:1,position:"static"},r.a.createElement(i.a,{className:"flex justify-between w-full"},r.a.createElement(s.a,{color:"inherit",variant:"subtitle1"},"Informaci\xf3n del proveedor"),r.a.createElement(u.a,{className:"cursor-pointer",onClick:function(){return e(Object(f.c)())}},r.a.createElement(d.a,null)))),r.a.createElement(m.a,{classes:{root:"p-16"}},r.a.createElement(N,{onClick:function(){return e(Object(f.c)())}})))},P=t(29),_=t(335),I=t(36),R=t(1026),H=t(1027),D=t(1024),T=t(1025),W=t(979),B=t(989),F=t(44),V=t(46),A=t(988),M=t(990),q=t(991),z=Object(F.h)((function(e){var a=e.data,t=e.rows,n=Object(p.b)(),l=Object(q.a)(),c=l.page,o=l.rowsPerPage,i=l.setPage,s=l.setRowsPerPage;return r.a.createElement("div",{className:"flex flex-col w-full"},r.a.createElement(V.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(R.a,{"aria-labelledby":"tableTitle",className:"min-w-xl",stickyHeader:!0},r.a.createElement(A.a,{rows:t}),r.a.createElement(H.a,null,a.slice(c*o,c*o+o).map((function(e){return r.a.createElement(D.a,{key:e.id,className:"h-32 cursor-pointer",hover:!0},r.a.createElement(T.a,{component:"th",scope:"row"},e.id),r.a.createElement(T.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(W.a,{checked:4===e.status_id,disabled:2===e.status_id,inputProps:{"aria-label":"secondary checkbox"},name:"checkedA",onChange:function(){return n(Object(f.k)(e))}}))),r.a.createElement(T.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(h.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(B.c,null),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(f.g)(e))}},"Ver"))),r.a.createElement(T.a,{component:"th",scope:"row"},e.category_name),r.a.createElement(T.a,{component:"th",scope:"row"},e.subscription_name),r.a.createElement(T.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(h.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(B.c,null),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(f.f)(e))}},"Ver"))),r.a.createElement(T.a,{component:"th",scope:"row"},e.description),r.a.createElement(T.a,{component:"th",scope:"row"},e.brand),r.a.createElement(T.a,{component:"th",scope:"row"},e.value),r.a.createElement(T.a,{component:"th",scope:"row"},e.city_name),r.a.createElement(T.a,{component:"th",scope:"row"},e.provider_qualification),r.a.createElement(T.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(W.a,{checked:1===e.status_id||4===e.status_id,inputProps:{"aria-label":"secondary checkbox"},name:"checkedA",onChange:function(){return n(Object(f.a)(e))}}))))}))))),r.a.createElement(M.a,{count:a.length,page:c,rowsPerPage:o,setPage:i,setRowsPerPage:s}))})),L=[{id:"id",label:"C\xf3digo Insumo"},{id:"outstanding",label:"Destacado",align:"center"},{id:"owner_info",label:"Info Proveedor",align:"center"},{id:"category_name",label:"Categor\xeda"},{id:"subcategoria",label:"Subcategor\xeda"},{id:"photos",label:"Fotos",align:"center"},{id:"descripcion",label:"Descripci\xf3n"},{id:"brand",label:"Marca"},{id:"value",label:"Valor"},{id:"city_name",label:"Ciudad"},{id:"qualification_provider",label:"Calificaci\xf3n del proveedor",align:"center"},{id:"estado",label:"Estado",align:"center"}];var J=function(){var e=Object(p.b)(),a=Object(p.c)(f.h),t=Object(p.c)((function(e){return e.supplies.searchText})),l=Object(p.c)((function(e){return e.supplies.selectedStatus})),c=Object(n.useState)(!0),o=Object(P.a)(c,2),i=o[0],u=o[1],m=Object(n.useState)(null),d=Object(P.a)(m,2),b=d[0],g=d[1];return Object(n.useEffect)((function(){e(Object(f.e)()).then((function(){return u(!1)}))}),[e]),Object(n.useEffect)((function(){a&&g(function(){if(0===t.length&&"todos"===l)return a;var e=a;return"todos"!==l&&(e=e.filter((function(e){return e.status_id===l}))),e=I.a.filterArrayByString(e,t)}())}),[a,l,t]),b?i?r.a.createElement(_.a,null):0===b.length?r.a.createElement("div",{className:"flex items-center justify-center flex-1 h-full"},r.a.createElement(s.a,{color:"textSecondary",variant:"h5"},"No hay insumos")):r.a.createElement(z,{data:b,rows:L}):null},U=t(961),G=t(963),K=t(1029),Q=t(997),X=t(994),Y=t(995),Z=t(35),$=t(195),ee=function(){var e=Object(p.b)(),a=Object(p.c)(Z.e),t=Object(p.c)((function(e){return e.entities.statuses})).filter((function(e){return"general"===e.type})),l=Object(p.c)((function(e){return e.supplies.selectedStatus}));return Object(n.useEffect)((function(){0===t.length&&e(Object(k.g)())}),[e]),r.a.createElement("div",{className:"flex flex-col justify-center w-full mt-16 space-y-20"},r.a.createElement("div",{className:"flex mt-24"},r.a.createElement($.a,{animation:"transition.expandIn",delay:300},r.a.createElement(U.a,{className:"text-32 mr-16"},r.a.createElement(Q.a,null))),r.a.createElement($.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(s.a,{className:"sm:flex sm:mx-12 mx-0",variant:"h6"},"Insumos"))),r.a.createElement("div",{className:"flex justify-between w-full"},r.a.createElement(G.a,{theme:a},r.a.createElement($.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement("div",{className:"lg:flex-row lg:space-y-0 flex flex-col justify-between w-full h-full space-y-10"},r.a.createElement("div",{className:"lg:items-center flex w-full space-x-8"},r.a.createElement(Y.a,{actionCallback:f.i}),r.a.createElement(X.a,{actionCallback:f.j,data:t,selectedStatus:l})),r.a.createElement("div",{className:"flex h-full"},r.a.createElement(h.a,{className:"whitespace-nowrap w-full normal-case",color:"primary",startIcon:r.a.createElement(K.a,null),variant:"contained",onClick:function(){return window.open("".concat("https://api.colcagro.com.co","/api/supply/export?token=").concat(E.a.getAccessToken()),"_blank")}},r.a.createElement("span",{className:"sm:flex hidden"},"Descargar CSV"),r.a.createElement("span",{className:"sm:hidden flex"},"Descargar"))))))))};a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-172 h-172 sm:h-172 sm:min-h-172 my-10"},content:r.a.createElement(J,null),header:r.a.createElement(ee,null),innerScroll:!0}),r.a.createElement(C,null),r.a.createElement(O,null))}},988:function(e,a,t){"use strict";var n=t(1025),r=t(1023),l=t(1024),c=t(0),o=t.n(c);a.a=function(e){var a=e.rows;return o.a.createElement(r.a,null,o.a.createElement(l.a,{className:"h-64"},a.map((function(e){return o.a.createElement(n.a,{key:e.id,align:e.align||"left",className:"whitespace-nowrap",padding:e.disablePadding?"none":"default"},e.label)}),this)))}},990:function(e,a,t){"use strict";var n=t(1047),r=t(0),l=t.n(r);a.a=function(e){var a=e.count,t=e.page,r=e.rowsPerPage,c=e.setPage,o=e.setRowsPerPage;return l.a.createElement(n.a,{backIconButtonProps:{"aria-label":"P\xe1gina previa"},backIconButtonText:"P\xe1gina previa",className:"flex-shrink-0 overflow-x-auto",component:"div",count:a,labelRowsPerPage:"Registros por p\xe1gina",nextIconButtonProps:{"aria-label":"Siguiente p\xe1gina"},nextIconButtonText:"Siguiente p\xe1gina",page:t,rowsPerPage:r,onChangePage:function(e,a){c(a)},onChangeRowsPerPage:function(e){o(e.target.value)}})}},991:function(e,a,t){"use strict";var n=t(29),r=t(0);a.a=function(){var e=Object(r.useState)(0),a=Object(n.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)(10),o=Object(n.a)(c,2);return{page:t,setPage:l,rowsPerPage:o[0],setRowsPerPage:o[1]}}},992:function(e,a,t){"use strict";t.d(a,"a",(function(){return O}));var n=t(4),r=t(909),l=t(6),c=t(0),o=t.n(c),i=t(45),s=t(963),u=t(35),m=t(11);var d=function(e){var a=Object(i.a)(),t=Object(m.c)(Object(u.c)(a.palette.primary.main));return o.a.createElement("div",{className:e.classes.header},e.header&&o.a.createElement(s.a,{theme:t},e.header))},p=t(29),f=t(91),b=t(982),g=t(983),h=t(46);var v=function(e){var a=Object(i.a)(),t=Object(m.c)(Object(u.c)(a.palette.primary.main)),n=e.classes;return o.a.createElement(o.a.Fragment,null,e.header&&o.a.createElement(s.a,{theme:t},o.a.createElement("div",{className:Object(l.a)(n.sidebarHeader,e.variant)},e.header)),e.content&&o.a.createElement(h.a,{className:n.sidebarContent,enable:e.innerScroll},e.content))};var E=o.a.forwardRef((function(e,a){var t=Object(c.useState)(!1),n=Object(p.a)(t,2),r=n[0],i=n[1],s=e.classes;Object(c.useImperativeHandle)(a,(function(){return{toggleSidebar:u}}));var u=function(){i(!r)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{lgUp:"permanent"===e.variant},o.a.createElement(g.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return u()},disableSwipeToOpen:!0,classes:{root:Object(l.a)(s.sidebarWrapper,e.variant),paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},o.a.createElement(v,e))),"permanent"===e.variant&&o.a.createElement(b.a,{mdDown:!0},o.a.createElement(f.a,{variant:"permanent",className:Object(l.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},o.a.createElement(v,e))))})),j=Object(r.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:256,backgroundColor:e.palette.background.paper,backgroundSize:"cover",borderBottom:"1px solid ".concat(e.palette.primary.main),pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:192,minHeight:192,maxHeight:192,display:"flex",color:e.palette.secondary.main},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:296,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:256,minHeight:256,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),x=o.a.forwardRef((function(e,a){var t=Object(c.useRef)(null),n=Object(c.useRef)(null),r=Object(c.useRef)(null),i=j(e),s=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return o.a.useImperativeHandle(a,(function(){return{rootRef:r,toggleLeftSidebar:function(){t.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),o.a.createElement("div",{ref:r,className:Object(l.a)(i.root,e.innerScroll&&i.innerScroll)},o.a.createElement("div",{className:i.topBg}),o.a.createElement("div",{className:"container flex w-full"},u&&o.a.createElement(E,{ref:t,classes:i,content:e.leftSidebarContent,header:e.leftSidebarHeader,innerScroll:e.innerScroll,position:"left",rootRef:r,variant:e.leftSidebarVariant||"permanent"}),o.a.createElement("div",{className:Object(l.a)(i.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},o.a.createElement(d,{classes:i,header:e.header}),o.a.createElement("div",{className:Object(l.a)(i.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&o.a.createElement("div",{className:i.toolbar},e.contentToolbar),e.content&&o.a.createElement(h.a,{className:i.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),s&&o.a.createElement(E,{ref:n,classes:i,content:e.rightSidebarContent,header:e.rightSidebarHeader,innerScroll:e.innerScroll,position:"right",rootRef:r,variant:e.rightSidebarVariant||"permanent"})))}));x.defaultProps={};var O=o.a.memo(x)},994:function(e,a,t){"use strict";var n=t(898),r=t(960),l=t(961),c=t(910),o=t(0),i=t.n(o),s=t(989),u=t(11);a.a=function(e){var a=e.actionCallback,t=e.data,o=e.selectedStatus,m=Object(u.b)();return i.a.createElement(n.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:i.a.createElement(r.a,{position:"start"},i.a.createElement(l.a,null,i.a.createElement(s.d,null)))},placeholder:"Filtrar",value:o,variant:"outlined",select:!0,onChange:function(e){return m(a(e))}},i.a.createElement(c.a,{value:"todos"},"Todos"),t.map((function(e){return i.a.createElement(c.a,{key:e.id,value:e.id},e.name)})))}},995:function(e,a,t){"use strict";var n=t(29),r=t(898),l=t(960),c=t(961),o=t(0),i=t.n(o),s=t(11),u=t(118);a.a=function(e){var a=e.actionCallback,t=Object(s.b)(),m=Object(o.useState)(""),d=Object(n.a)(m,2),p=d[0],f=d[1],b=Object(u.a)(p,300);Object(o.useEffect)((function(){t(a(b))}),[t,b]);return i.a.createElement(r.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:i.a.createElement(l.a,{position:"start"},i.a.createElement(c.a,null,"search"))},placeholder:"Buscar",value:p,variant:"outlined",onChange:function(e){var a=e.target.value;f(a)}})}}}]);