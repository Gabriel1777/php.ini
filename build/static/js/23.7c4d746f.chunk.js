(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[23],{1046:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(993),o=t(29),c=t(117),i=t(11),s=t(335),m=t(36),d=t(356),u=t(1026),p=t(1027),b=t(1024),g=t(1025),f=t(44),h=(t(347),t(46)),v=t(988),E=t(991),x=t(992),j=Object(f.h)((function(e){var a=e.data,t=e.rows,n=(Object(i.b)(),Object(x.a)()),l=n.page,o=n.rowsPerPage,c=n.setPage,s=n.setRowsPerPage;return r.a.createElement("div",{className:"flex flex-col w-full"},r.a.createElement(h.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(u.a,{"aria-labelledby":"tableTitle",className:"min-w-xl",stickyHeader:!0},r.a.createElement(v.a,{rows:t}),r.a.createElement(p.a,null,a.slice(l*o,l*o+o).map((function(e){return r.a.createElement(b.a,{key:e.id,className:"h-32 cursor-pointer",hover:!0},r.a.createElement(g.a,{component:"th",scope:"row"},e.animal_type),r.a.createElement(g.a,{component:"th",scope:"row"},e.animal_breed),r.a.createElement(g.a,{align:"center",component:"th",scope:"row"},e.average_price),r.a.createElement(g.a,{align:"center",component:"th",scope:"row"},e.average_weight),r.a.createElement(g.a,{align:"center",component:"th",scope:"row"},e.average_age),r.a.createElement(g.a,{align:"center",component:"th",scope:"row"},e.is_lote),r.a.createElement(g.a,{align:"center",component:"th",scope:"row"},e.quantity_of_lote))}))))),r.a.createElement(E.a,{count:a.length,page:l,rowsPerPage:o,setPage:c,setRowsPerPage:s}))})),w=[{id:"animal_type",label:"Tipo de animal"},{id:"animal_breed",label:"Raza"},{id:"average_price",label:"Precio promedio",align:"center"},{id:"average_weight",label:"Peso promedio",align:"center"},{id:"average_age",label:"Edad promedio",align:"center"},{id:"is_lote",label:"Lote",align:"center"},{id:"quantity_of_lote",label:"Cantidad",align:"center"}];var O=function(){var e=Object(i.b)(),a=Object(i.c)(d.c),t=Object(i.c)((function(e){return e.prices.searchText})),l=Object(i.c)((function(e){return e.prices.selectedStatus})),u=Object(n.useState)(!1),p=Object(o.a)(u,2),b=p[0],g=(p[1],Object(n.useState)(null)),f=Object(o.a)(g,2),h=f[0],v=f[1];return Object(n.useEffect)((function(){}),[e]),Object(n.useEffect)((function(){a&&v(function(){if(0===t.length&&"todos"===l)return a;var e=a;return"todos"!==l&&(e=e.filter((function(e){return e.status===l}))),e=m.a.filterArrayByString(e,t)}())}),[a,l,t]),h?b?r.a.createElement(s.a,null):0===h.length?r.a.createElement("div",{className:"flex items-center justify-center flex-1 h-full"},r.a.createElement(c.a,{color:"textSecondary",variant:"h5"},"No hay precios")):r.a.createElement(j,{data:h,rows:w}):null},y=t(4),S=t(15),k=t(961),P=t(898),N=t(910),C=t(962),R=t(963),_=t(1003),H=t(997),T=t(336),I=t(334),B=t(35),W=t(195),D=function(){var e=Object(i.b)(),a=Object(i.c)(B.e),t=Object(i.c)((function(e){return e.entities.animalTypes})),l=Object(i.c)((function(e){return e.entities.animalCategories})),s=Object(i.c)((function(e){return e.entities.animalSubcategories})),m=Object(n.useState)({category:0,subcategory:0,type:0}),u=Object(o.a)(m,2),p=u[0],b=u[1];Object(n.useEffect)((function(){0===t.length&&e(Object(I.d)()),0===l.length&&e(Object(I.b)())}),[e]),Object(n.useEffect)((function(){0!==p.category&&(e(Object(I.c)(p.category)),e(Object(d.b)(p)))}),[e,p.category]),Object(n.useEffect)((function(){e(Object(d.b)(p))}),[e,p.subcategory,p.type]);var g=function(e){var a=e.target,t=a.name,n=a.value;b(Object(S.a)(Object(S.a)({},p),{},Object(y.a)({},t,n)))};return r.a.createElement("div",{className:"flex flex-col justify-center w-full mt-16 space-y-20"},r.a.createElement("div",{className:"flex mt-24"},r.a.createElement(W.a,{animation:"transition.expandIn",delay:300},r.a.createElement(k.a,{className:"text-32 mr-16"},r.a.createElement(H.a,null))),r.a.createElement(W.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(c.a,{className:"sm:flex sm:mx-12 mx-0",variant:"h6"},"Precios"))),r.a.createElement("div",{className:"flex justify-between w-full"},r.a.createElement(R.a,{theme:a},r.a.createElement(W.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement("div",{className:"lg:flex-row lg:space-y-0 flex flex-col justify-between w-full h-full space-y-10"},r.a.createElement("div",{className:"lg:items-center md:flex-row md:space-y-0 md:space-x-8 flex flex-col w-full space-y-8"},r.a.createElement(P.a,{id:"category",label:"Categor\xeda",name:"category",variant:"outlined",fullWidth:!0,select:!0,onChange:g},l.map((function(e){return r.a.createElement(N.a,{key:e.id,value:e.id},e.name)}))),r.a.createElement(P.a,{disabled:0===s.length,id:"subcategory",label:"Subcategor\xeda",name:"subcategory",select:0!==s.length,variant:"outlined",fullWidth:!0,onChange:g},null===s||void 0===s?void 0:s.map((function(e){return r.a.createElement(N.a,{key:e.id,value:e.id},e.name)}))),r.a.createElement(P.a,{id:"type",label:"Tipo",name:"type",variant:"outlined",fullWidth:!0,select:!0,onChange:g},t.map((function(e){return r.a.createElement(N.a,{key:e.id,value:e.id},e.name)}))),r.a.createElement("div",{className:"flex h-full"},r.a.createElement(C.a,{className:"whitespace-nowrap w-full normal-case",color:"primary",startIcon:r.a.createElement(_.a,null),variant:"contained",onClick:function(){return window.open("".concat("https://api.colcagro.com.co","/api/v1/actions_on_animals/precios/export?token=").concat(T.a.getAccessToken()),"_blank")}},r.a.createElement("span",{className:"sm:flex hidden"},"Descargar CSV"),r.a.createElement("span",{className:"sm:hidden flex"},"Descargar")))))))))};a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-172 h-172 sm:h-172 sm:min-h-172 my-10"},content:r.a.createElement(O,null),header:r.a.createElement(D,null),innerScroll:!0}))}},988:function(e,a,t){"use strict";var n=t(1025),r=t(1023),l=t(1024),o=t(0),c=t.n(o);a.a=function(e){var a=e.rows;return c.a.createElement(r.a,null,c.a.createElement(l.a,{className:"h-64"},a.map((function(e){return c.a.createElement(n.a,{key:e.id,align:e.align||"left",className:"whitespace-nowrap",padding:e.disablePadding?"none":"default"},e.label)}),this)))}},991:function(e,a,t){"use strict";var n=t(1047),r=t(0),l=t.n(r);a.a=function(e){var a=e.count,t=e.page,r=e.rowsPerPage,o=e.setPage,c=e.setRowsPerPage;return l.a.createElement(n.a,{backIconButtonProps:{"aria-label":"P\xe1gina previa"},backIconButtonText:"P\xe1gina previa",className:"flex-shrink-0 overflow-x-auto",component:"div",count:a,labelRowsPerPage:"Registros por p\xe1gina",nextIconButtonProps:{"aria-label":"Siguiente p\xe1gina"},nextIconButtonText:"Siguiente p\xe1gina",page:t,rowsPerPage:r,onChangePage:function(e,a){o(a)},onChangeRowsPerPage:function(e){c(e.target.value)}})}},992:function(e,a,t){"use strict";var n=t(29),r=t(0);a.a=function(){var e=Object(r.useState)(0),a=Object(n.a)(e,2),t=a[0],l=a[1],o=Object(r.useState)(10),c=Object(n.a)(o,2);return{page:t,setPage:l,rowsPerPage:c[0],setRowsPerPage:c[1]}}},993:function(e,a,t){"use strict";t.d(a,"a",(function(){return w}));var n=t(4),r=t(909),l=t(6),o=t(0),c=t.n(o),i=t(45),s=t(963),m=t(35),d=t(11);var u=function(e){var a=Object(i.a)(),t=Object(d.c)(Object(m.c)(a.palette.primary.main));return c.a.createElement("div",{className:e.classes.header},e.header&&c.a.createElement(s.a,{theme:t},e.header))},p=t(29),b=t(91),g=t(982),f=t(983),h=t(46);var v=function(e){var a=Object(i.a)(),t=Object(d.c)(Object(m.c)(a.palette.primary.main)),n=e.classes;return c.a.createElement(c.a.Fragment,null,e.header&&c.a.createElement(s.a,{theme:t},c.a.createElement("div",{className:Object(l.a)(n.sidebarHeader,e.variant)},e.header)),e.content&&c.a.createElement(h.a,{className:n.sidebarContent,enable:e.innerScroll},e.content))};var E=c.a.forwardRef((function(e,a){var t=Object(o.useState)(!1),n=Object(p.a)(t,2),r=n[0],i=n[1],s=e.classes;Object(o.useImperativeHandle)(a,(function(){return{toggleSidebar:m}}));var m=function(){i(!r)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{lgUp:"permanent"===e.variant},c.a.createElement(f.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return m()},disableSwipeToOpen:!0,classes:{root:Object(l.a)(s.sidebarWrapper,e.variant),paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},c.a.createElement(v,e))),"permanent"===e.variant&&c.a.createElement(g.a,{mdDown:!0},c.a.createElement(b.a,{variant:"permanent",className:Object(l.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},c.a.createElement(v,e))))})),x=Object(r.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:256,backgroundColor:e.palette.background.paper,backgroundSize:"cover",borderBottom:"1px solid ".concat(e.palette.primary.main),pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:192,minHeight:192,maxHeight:192,display:"flex",color:e.palette.secondary.main},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:296,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:256,minHeight:256,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),j=c.a.forwardRef((function(e,a){var t=Object(o.useRef)(null),n=Object(o.useRef)(null),r=Object(o.useRef)(null),i=x(e),s=e.rightSidebarHeader||e.rightSidebarContent,m=e.leftSidebarHeader||e.leftSidebarContent;return c.a.useImperativeHandle(a,(function(){return{rootRef:r,toggleLeftSidebar:function(){t.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),c.a.createElement("div",{ref:r,className:Object(l.a)(i.root,e.innerScroll&&i.innerScroll)},c.a.createElement("div",{className:i.topBg}),c.a.createElement("div",{className:"container flex w-full"},m&&c.a.createElement(E,{ref:t,classes:i,content:e.leftSidebarContent,header:e.leftSidebarHeader,innerScroll:e.innerScroll,position:"left",rootRef:r,variant:e.leftSidebarVariant||"permanent"}),c.a.createElement("div",{className:Object(l.a)(i.contentWrapper,m&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},c.a.createElement(u,{classes:i,header:e.header}),c.a.createElement("div",{className:Object(l.a)(i.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&c.a.createElement("div",{className:i.toolbar},e.contentToolbar),e.content&&c.a.createElement(h.a,{className:i.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),s&&c.a.createElement(E,{ref:n,classes:i,content:e.rightSidebarContent,header:e.rightSidebarHeader,innerScroll:e.innerScroll,position:"right",rootRef:r,variant:e.rightSidebarVariant||"permanent"})))}));j.defaultProps={};var w=c.a.memo(j)}}]);