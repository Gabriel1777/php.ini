(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[10],{1002:function(e,a,t){"use strict";var n=t(2),r=t(9),c=t(0),l=(t(7),t(6)),o=t(12),i=c.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,s=e.className,m=Object(r.a)(e,["disableSpacing","classes","className"]);return c.createElement("div",Object(n.a)({className:Object(l.a)(i.root,s,!o&&i.spacing),ref:a},m))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(i)},1006:function(e,a,t){"use strict";var n=t(961),r=t(966),c=t(1013),l=t(0),o=t.n(l);function i(e){var a=e.text;return o.a.createElement(r.a,{placement:"top",title:a},o.a.createElement(n.a,{className:"text-red"},"place"))}a.a=function(e){var a=e.latitude,t=e.longitude;return o.a.createElement("div",{className:"w-full"},o.a.createElement("div",{className:"h-512 w-full"},o.a.createElement(c.a,{bootstrapURLKeys:{key:"AIzaSyCr5_KtmlHmwayvG_ss7wjbfEXsglTga2Q"},defaultCenter:[Number.parseFloat(a),Number.parseFloat(t)],defaultZoom:12},o.a.createElement(i,{lat:Number.parseFloat(a),lng:Number.parseFloat(t),text:"Hola"}))))}},1037:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(992),l=t(29),o=t(117),i=t(11),s=t(335),m=t(36),u=t(342),d=t(1025),p=t(1026),f=t(1023),b=t(1024),E=t(986),h=t(979),g=t(962),v=t(1028),j=t(989),w=t(987),x=t(44),y=t(46),O=t(988),N=t(990),k=t(991),C=Object(x.h)((function(e){var a=e.data,t=e.rows,n=Object(i.b)(),c=Object(k.a)(),l=c.page,o=c.rowsPerPage,s=c.setPage,m=c.setRowsPerPage;return r.a.createElement("div",{className:"flex flex-col w-full"},r.a.createElement(y.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(d.a,{"aria-labelledby":"tableTitle",className:"min-w-xl",stickyHeader:!0},r.a.createElement(O.a,{rows:t}),r.a.createElement(p.a,null,a.slice(l*o,l*o+o).map((function(e){return r.a.createElement(f.a,{key:e.id,className:"h-32 cursor-pointer",hover:!0},r.a.createElement(b.a,{component:"th",scope:"row"},e.id),r.a.createElement(b.a,{component:"th",scope:"row"},r.a.createElement(E.a,{alt:"conveyor img",src:e.photo})),r.a.createElement(b.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(h.a,{checked:4===e.status_id,disabled:2===e.status_id,inputProps:{"aria-label":"secondary checkbox"},name:"checkedA",onChange:function(){return n(Object(u.q)(e))}}))),r.a.createElement(b.a,{component:"th",scope:"row"},e.name),r.a.createElement(b.a,{component:"th",scope:"row"},e.identification_number),r.a.createElement(b.a,{component:"th",scope:"row"},e.address),r.a.createElement(b.a,{component:"th",scope:"row"},e.phone),r.a.createElement(b.a,{component:"th",scope:"row"},e.city_name),r.a.createElement(b.a,{component:"th",scope:"row"},e.email),r.a.createElement(b.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(g.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(j.c,null),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(u.j)({id:e.id,qualification:e.qualification}))}},"Ver"))),r.a.createElement(b.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(g.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(w.b,null),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(u.m)(e))}},"Ver info"))),r.a.createElement(b.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(h.a,{checked:1===e.status_id||4===e.status_id,inputProps:{"aria-label":"secondary checkbox"},name:"checkedA",onClick:function(){return n(Object(u.a)(e))}}))),r.a.createElement(b.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(g.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(v.c,null),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(u.l)(e))}},"Ver"))))}))))),r.a.createElement(N.a,{count:a.length,page:l,rowsPerPage:o,setPage:s,setRowsPerPage:m}))})),S=[{id:"id",label:"C\xf3digo Conductor"},{id:"photo",label:"Foto",align:"center"},{id:"outstanding",label:"Destacado",align:"center"},{id:"name",label:"Nombre"},{id:"identification_number",label:"C\xe9dula"},{id:"address",label:"Direcci\xf3n"},{id:"phone",label:"Tel\xe9fono Fijo"},{id:"city",label:"Ciudad"},{id:"email",label:"Correo Electr\xf3nico"},{id:"comments",label:"Comentarios"},{id:"vehicle_info",label:"Info Vehiculo",align:"center"},{id:"estado",label:"Estado"},{id:"location",label:"Ubicaci\xf3n",align:"center"}];var P=function(){var e=Object(i.b)(),a=Object(i.c)(u.n),t=Object(i.c)((function(e){return e.conveyors.searchText})),c=Object(i.c)((function(e){return e.conveyors.selectedStatus})),d=Object(n.useState)(!0),p=Object(l.a)(d,2),f=p[0],b=p[1],E=Object(n.useState)(null),h=Object(l.a)(E,2),g=h[0],v=h[1];return Object(n.useEffect)((function(){e(Object(u.i)()).then((function(){return b(!1)}))}),[e]),Object(n.useEffect)((function(){a&&v(function(){if(0===t.length&&"todos"===c)return a;var e=a;return"todos"!==c&&(e=e.filter((function(e){return e.status_id===c}))),e=m.a.filterArrayByString(e,t)}())}),[a,c,t]),g?f?r.a.createElement(s.a,null):0===g.length?r.a.createElement("div",{className:"flex items-center justify-center flex-1 h-full"},r.a.createElement(o.a,{color:"textSecondary",variant:"h5"},"No hay transportadores")):r.a.createElement(C,{data:g,rows:S}):null},_=t(961),I=t(963),R=t(997),T=t(994),H=t(995),D=t(336),F=t(334),W=t(35),B=t(195),V=function(){var e=Object(i.b)(),a=Object(i.c)(W.e),t=Object(i.c)((function(e){return e.entities.statuses})).filter((function(e){return"general"===e.type})),c=Object(i.c)((function(e){return e.conveyors.selectedStatus}));return Object(n.useEffect)((function(){0===t.length&&e(Object(F.g)())}),[e]),r.a.createElement("div",{className:"flex flex-col justify-center w-full mt-16 space-y-20"},r.a.createElement("div",{className:"flex mt-24"},r.a.createElement(B.a,{animation:"transition.expandIn",delay:300},r.a.createElement(_.a,{className:"text-32 mr-16"},r.a.createElement(R.a,null))),r.a.createElement(B.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(o.a,{className:"sm:flex sm:mx-12 mx-0",variant:"h6"},"Transportadores"))),r.a.createElement("div",{className:"flex justify-between w-full"},r.a.createElement(I.a,{theme:a},r.a.createElement(B.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement("div",{className:"lg:flex-row lg:space-y-0 flex flex-col justify-between w-full h-full space-y-10"},r.a.createElement("div",{className:"lg:items-center flex w-full space-x-8"},r.a.createElement(H.a,{actionCallback:u.o}),r.a.createElement(T.a,{actionCallback:u.p,data:t,selectedStatus:c})),r.a.createElement("div",{className:"flex h-full"},r.a.createElement(g.a,{className:"whitespace-nowrap w-full normal-case",color:"primary",startIcon:r.a.createElement(v.a,null),variant:"contained",onClick:function(){return window.open("".concat("https://api.colcagro.com.co","/api/conveyor/export?token=").concat(D.a.getAccessToken()),"_blank")}},r.a.createElement("span",{className:"sm:flex hidden"},"Descargar CSV"),r.a.createElement("span",{className:"sm:hidden flex"},"Descargar"))))))))},q=t(976),A=t(964),z=t(965),L=t(908),M=t(1027),U=[{id:"comment",label:"Comentario"},{id:"qualification",label:"Calificaci\xf3n"}];var J=function(e){var a=e.conveyorComments,t=e.qualification;return r.a.createElement("div",{className:"flex flex-col w-full space-x-8"},r.a.createElement("div",{className:"flex justify-center mt-8"},r.a.createElement(o.a,{className:"text-red-300",variant:"h6"},"Calificaci\xf3n dada al usuario: ",t)),r.a.createElement(y.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(d.a,{"aria-labelledby":"tableTitle"},r.a.createElement(O.a,{rows:U}),r.a.createElement(p.a,null,null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(f.a,{key:e.id},r.a.createElement(b.a,{component:"th",scope:"row"},e.description),r.a.createElement(b.a,{component:"th",scope:"row"},e.qualification))}))))))};var K=function(){var e=Object(i.b)(),a=Object(n.useState)(!0),t=Object(l.a)(a,2),c=t[0],m=t[1],d=Object(i.c)((function(e){return e.conveyors.conveyorComments})),p=Object(i.c)((function(e){return e.conveyors.conveyorCommentsDialog}));Object(n.useEffect)((function(){p.props.open&&e(Object(u.h)(p.data.id)).then((function(){return m(!1)}))}),[e,p]);var f=function(){e(Object(u.c)()),m(!0)};return r.a.createElement(q.a,Object.assign({classes:{paper:"m-0"}},p.props,{maxWidth:"md",fullWidth:!0,onClose:function(){return f()}}),r.a.createElement(A.a,{elevation:1,position:"static"},r.a.createElement(z.a,{className:"flex justify-between w-full"},r.a.createElement(o.a,{color:"inherit",variant:"subtitle1"},"Informaci\xf3n de comentarios"),r.a.createElement(L.a,{className:"cursor-pointer",onClick:function(){return f()}},r.a.createElement(w.a,null)))),r.a.createElement(M.a,{className:"p-0"},c?r.a.createElement(s.a,null):0===d.length?r.a.createElement("div",null,r.a.createElement("div",{className:"h-96 flex items-center justify-center"},r.a.createElement(o.a,{variant:"h6"},"No existen comentarios"))):r.a.createElement(J,{conveyorComments:d,qualification:p.data.qualification,onClick:function(){return f()}})))},G=t(1006);var Q=function(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.conveyors.locationDialog}));return r.a.createElement(q.a,Object.assign({classes:{paper:"m-8"}},a.props,{maxWidth:"md",fullWidth:!0,onClose:function(){return e(Object(u.e)())}}),r.a.createElement(A.a,{elevation:1,position:"static"},r.a.createElement(z.a,{className:"flex justify-between w-full"},r.a.createElement(o.a,{color:"inherit",variant:"subtitle1"},"Ubicaci\xf3n del transportador"),r.a.createElement(L.a,{className:"cursor-pointer",onClick:function(){return e(Object(u.e)())}},r.a.createElement(w.a,null)))),r.a.createElement(M.a,{classes:{root:"p-16"}},r.a.createElement(G.a,{latitude:a.data.latitude,longitude:a.data.longitude})))},X=t(15),Z=t(1002),Y=t(357),$=t(118),ee=[{id:"photo",label:"Foto"},{id:"name",label:"Nombre del veh\xedculo"},{id:"type_vehicle",label:"Tipo de veh\xedculo"},{id:"brand",label:"Marca"},{id:"plate",label:"Plata"},{id:"color",label:"Color"},{id:"capacity",label:"Capacidad"},{id:"photos",label:"Fotos",align:"center"},{id:"status",label:"Estado",align:"center"}],ae={name:"",breed:"",gender:"",weight:"",age:0,federated_iron:"",description:"",animal_type_id:0,animal_category_id:0,animal_subcategory_id:0,is_lote:!1,quantity_of_lote:0,vaccines:[],photos:[]};var te=function(e){var a,t,c=Object(i.b)(),l=Object(i.c)((function(e){return e.conveyors.errors})),s=Object(i.c)((function(e){return e.conveyors.vehiclesDialog})),m=Object($.c)(ae),v=(m.errors,m.form),x=(m.handleChange,m.handleSubmit,m.setErrors),y=m.setForm,N=(m.setInForm,Object(n.useCallback)((function(){"edit"===s.type&&s.data&&y(Object(X.a)({},s.data)),"new"===s.type&&y(Object(X.a)(Object(X.a)({},ae),s.data))}),[s.data,s.type,y]));return Object(n.useEffect)((function(){s.props.open&&N()}),[s.props.open,N]),Object(n.useEffect)((function(){l&&x(l)}),[l,x]),r.a.createElement("div",{className:"flex flex-col w-full"},0!==(null===(a=v.vehicles)||void 0===a?void 0:a.length)&&r.a.createElement(Y.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(d.a,{"aria-labelledby":"tableTitle",className:"min-w-xl",stickyHeader:!0},r.a.createElement(O.a,{rows:ee}),r.a.createElement(p.a,null,null===(t=v.vehicles)||void 0===t?void 0:t.map((function(e){return r.a.createElement(f.a,{key:e.name,className:"h-32 cursor-pointer",hover:!0},r.a.createElement(b.a,{component:"th",scope:"row"},r.a.createElement(E.a,{src:e.photos[0]})),r.a.createElement(b.a,{component:"th",scope:"row"},e.name),r.a.createElement(b.a,{component:"th",scope:"row"},e.type),r.a.createElement(b.a,{component:"th",scope:"row"},e.brand),r.a.createElement(b.a,{component:"th",scope:"row"},e.license_plate),r.a.createElement(b.a,{component:"th",scope:"row"},e.color),r.a.createElement(b.a,{component:"th",scope:"row"},e.capacity),r.a.createElement(b.a,{align:"center",component:"th",scope:"row"},r.a.createElement(g.a,{color:"secondary",endIcon:r.a.createElement(j.a,null),variant:"outlined",onClick:function(){return c(Object(u.k)(e.photos))}},"Ver")),r.a.createElement(b.a,{align:"center",component:"th",scope:"row"},r.a.createElement(h.a,{checked:1===e.status_id,inputProps:{"aria-label":"secondary checkbox"},name:"checkedA",onChange:function(){return c(Object(u.b)(e))}})))}))))),!v.vehicles&&r.a.createElement("div",{className:"h-92 flex items-center justify-center"},r.a.createElement(o.a,{variant:"h6"},"No hay veh\xedculos")),r.a.createElement(Z.a,{className:"justify-end"},r.a.createElement(g.a,{color:"primary",startIcon:r.a.createElement(w.a,null),variant:"outlined",onClick:e.onClick},"Cerrar")))};var ne=function(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.conveyors.vehiclesDialog}));return r.a.createElement(q.a,Object.assign({},a.props,{maxWidth:"lg",fullWidth:!0,onClose:function(){return e(Object(u.f)())}}),r.a.createElement(A.a,{elevation:1,position:"static"},r.a.createElement(z.a,{className:"flex justify-between w-full"},r.a.createElement(o.a,{color:"inherit",variant:"subtitle1"},"Datos de veh\xedculos"),r.a.createElement(L.a,{className:"cursor-pointer",onClick:function(){return e(Object(u.f)())}},r.a.createElement(w.a,null)))),r.a.createElement(M.a,null,r.a.createElement(te,{onClick:function(){return e(Object(u.f)())}})))},re={name:"",breed:"",gender:"",weight:"",age:0,federated_iron:"",description:"",animal_type_id:0,animal_category_id:0,animal_subcategory_id:0,is_lote:!1,quantity_of_lote:0,vaccines:[]};var ce=function(e){var a,t,c=Object(i.c)((function(e){return e.conveyors.detailPhotosDialog})),l=Object($.c)(re).setForm,s=Object(n.useCallback)((function(){"edit"===c.type&&c.data&&l(Object(X.a)({},c.data)),"new"===c.type&&l(Object(X.a)(Object(X.a)({},re),c.data))}),[c.data,c.type,l]);return Object(n.useEffect)((function(){c.props.open&&s()}),[c.props.open,s]),r.a.createElement(r.a.Fragment,null,"edit"===c.type&&(null===(a=c.data)||void 0===a?void 0:a.length)>0?r.a.createElement("div",{className:"md:max-w-xl lg:max-w-6xl flex flex-wrap px-8 mx-auto mt-4 overflow-hidden"},null===(t=c.data)||void 0===t?void 0:t.map((function(e){return r.a.createElement("div",{className:"w-1/2 px-8 my-8 overflow-hidden"},r.a.createElement("div",{className:"h-auto text-center text-black bg-white border border-gray-400 rounded shadow-lg"},r.a.createElement("img",{alt:"vehicle",src:"".concat(e,"?token=").concat(D.a.getAccessToken())})))}))):r.a.createElement("div",{className:"flex items-center justify-center h-64"},r.a.createElement(o.a,{variant:"h6"},"No se encuentran fotos registradas")),r.a.createElement(Z.a,{className:"justify-end"},r.a.createElement(g.a,{color:"primary",startIcon:r.a.createElement(w.a,null),variant:"outlined",onClick:e.onClick},"Cerrar")))};var le=function(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.conveyors.detailPhotosDialog}));return r.a.createElement(q.a,Object.assign({classes:{paper:"m-8"}},null===a||void 0===a?void 0:a.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e(Object(u.d)())}}),r.a.createElement(A.a,{elevation:1,position:"static"},r.a.createElement(z.a,{className:"flex justify-between w-full"},r.a.createElement(o.a,{color:"inherit",variant:"subtitle1"},"Fotos de veh\xedculos"),r.a.createElement(L.a,{className:"cursor-pointer",onClick:function(){return e(Object(u.d)())}},r.a.createElement(w.a,null)))),r.a.createElement(M.a,{classes:{root:"p-16"}},r.a.createElement(ce,{onClick:function(){return e(Object(u.d)())}})))};a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-172 h-172 sm:h-172 sm:min-h-172 my-10"},content:r.a.createElement(P,null),header:r.a.createElement(V,null),innerScroll:!0}),r.a.createElement(ne,null),r.a.createElement(Q,null),r.a.createElement(K,null),r.a.createElement(le,null))}},988:function(e,a,t){"use strict";var n=t(1024),r=t(1022),c=t(1023),l=t(0),o=t.n(l);a.a=function(e){var a=e.rows;return o.a.createElement(r.a,null,o.a.createElement(c.a,{className:"h-64"},a.map((function(e){return o.a.createElement(n.a,{key:e.id,align:e.align||"left",className:"whitespace-nowrap",padding:e.disablePadding?"none":"default"},e.label)}),this)))}},990:function(e,a,t){"use strict";var n=t(1046),r=t(0),c=t.n(r);a.a=function(e){var a=e.count,t=e.page,r=e.rowsPerPage,l=e.setPage,o=e.setRowsPerPage;return c.a.createElement(n.a,{backIconButtonProps:{"aria-label":"P\xe1gina previa"},backIconButtonText:"P\xe1gina previa",className:"flex-shrink-0 overflow-x-auto",component:"div",count:a,labelRowsPerPage:"Registros por p\xe1gina",nextIconButtonProps:{"aria-label":"Siguiente p\xe1gina"},nextIconButtonText:"Siguiente p\xe1gina",page:t,rowsPerPage:r,onChangePage:function(e,a){l(a)},onChangeRowsPerPage:function(e){o(e.target.value)}})}},991:function(e,a,t){"use strict";var n=t(29),r=t(0);a.a=function(){var e=Object(r.useState)(0),a=Object(n.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)(10),o=Object(n.a)(l,2);return{page:t,setPage:c,rowsPerPage:o[0],setRowsPerPage:o[1]}}},992:function(e,a,t){"use strict";t.d(a,"a",(function(){return x}));var n=t(4),r=t(909),c=t(6),l=t(0),o=t.n(l),i=t(45),s=t(963),m=t(35),u=t(11);var d=function(e){var a=Object(i.a)(),t=Object(u.c)(Object(m.c)(a.palette.primary.main));return o.a.createElement("div",{className:e.classes.header},e.header&&o.a.createElement(s.a,{theme:t},e.header))},p=t(29),f=t(91),b=t(982),E=t(983),h=t(46);var g=function(e){var a=Object(i.a)(),t=Object(u.c)(Object(m.c)(a.palette.primary.main)),n=e.classes;return o.a.createElement(o.a.Fragment,null,e.header&&o.a.createElement(s.a,{theme:t},o.a.createElement("div",{className:Object(c.a)(n.sidebarHeader,e.variant)},e.header)),e.content&&o.a.createElement(h.a,{className:n.sidebarContent,enable:e.innerScroll},e.content))};var v=o.a.forwardRef((function(e,a){var t=Object(l.useState)(!1),n=Object(p.a)(t,2),r=n[0],i=n[1],s=e.classes;Object(l.useImperativeHandle)(a,(function(){return{toggleSidebar:m}}));var m=function(){i(!r)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{lgUp:"permanent"===e.variant},o.a.createElement(E.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return m()},disableSwipeToOpen:!0,classes:{root:Object(c.a)(s.sidebarWrapper,e.variant),paper:Object(c.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},o.a.createElement(g,e))),"permanent"===e.variant&&o.a.createElement(b.a,{mdDown:!0},o.a.createElement(f.a,{variant:"permanent",className:Object(c.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(c.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},o.a.createElement(g,e))))})),j=Object(r.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:256,backgroundColor:e.palette.background.paper,backgroundSize:"cover",borderBottom:"1px solid ".concat(e.palette.primary.main),pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:192,minHeight:192,maxHeight:192,display:"flex",color:e.palette.secondary.main},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:296,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:256,minHeight:256,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),w=o.a.forwardRef((function(e,a){var t=Object(l.useRef)(null),n=Object(l.useRef)(null),r=Object(l.useRef)(null),i=j(e),s=e.rightSidebarHeader||e.rightSidebarContent,m=e.leftSidebarHeader||e.leftSidebarContent;return o.a.useImperativeHandle(a,(function(){return{rootRef:r,toggleLeftSidebar:function(){t.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),o.a.createElement("div",{ref:r,className:Object(c.a)(i.root,e.innerScroll&&i.innerScroll)},o.a.createElement("div",{className:i.topBg}),o.a.createElement("div",{className:"container flex w-full"},m&&o.a.createElement(v,{ref:t,classes:i,content:e.leftSidebarContent,header:e.leftSidebarHeader,innerScroll:e.innerScroll,position:"left",rootRef:r,variant:e.leftSidebarVariant||"permanent"}),o.a.createElement("div",{className:Object(c.a)(i.contentWrapper,m&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},o.a.createElement(d,{classes:i,header:e.header}),o.a.createElement("div",{className:Object(c.a)(i.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&o.a.createElement("div",{className:i.toolbar},e.contentToolbar),e.content&&o.a.createElement(h.a,{className:i.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),s&&o.a.createElement(v,{ref:n,classes:i,content:e.rightSidebarContent,header:e.rightSidebarHeader,innerScroll:e.innerScroll,position:"right",rootRef:r,variant:e.rightSidebarVariant||"permanent"})))}));w.defaultProps={};var x=o.a.memo(w)},994:function(e,a,t){"use strict";var n=t(898),r=t(960),c=t(961),l=t(910),o=t(0),i=t.n(o),s=t(989),m=t(11);a.a=function(e){var a=e.actionCallback,t=e.data,o=e.selectedStatus,u=Object(m.b)();return i.a.createElement(n.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:i.a.createElement(r.a,{position:"start"},i.a.createElement(c.a,null,i.a.createElement(s.d,null)))},placeholder:"Filtrar",value:o,variant:"outlined",select:!0,onChange:function(e){return u(a(e))}},i.a.createElement(l.a,{value:"todos"},"Todos"),t.map((function(e){return i.a.createElement(l.a,{key:e.id,value:e.id},e.name)})))}},995:function(e,a,t){"use strict";var n=t(29),r=t(898),c=t(960),l=t(961),o=t(0),i=t.n(o),s=t(11),m=t(118);a.a=function(e){var a=e.actionCallback,t=Object(s.b)(),u=Object(o.useState)(""),d=Object(n.a)(u,2),p=d[0],f=d[1],b=Object(m.a)(p,300);Object(o.useEffect)((function(){t(a(b))}),[t,b]);return i.a.createElement(r.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:i.a.createElement(c.a,{position:"start"},i.a.createElement(l.a,null,"search"))},placeholder:"Buscar",value:p,variant:"outlined",onChange:function(e){var a=e.target.value;f(a)}})}}}]);