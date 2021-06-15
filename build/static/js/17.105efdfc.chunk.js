(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[17],{1002:function(e,a,t){"use strict";var n=t(2),r=t(9),l=t(0),c=(t(7),t(6)),i=t(12),o=l.forwardRef((function(e,a){var t=e.disableSpacing,i=void 0!==t&&t,o=e.classes,s=e.className,m=Object(r.a)(e,["disableSpacing","classes","className"]);return l.createElement("div",Object(n.a)({className:Object(c.a)(o.root,s,!i&&o.spacing),ref:a},m))}));a.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(o)},1033:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(992),c=t(976),i=t(964),o=t(965),s=t(117),m=t(908),u=t(1027),d=t(987),f=t(11),p=t(341),b=t(15),E=t(986),v=t(898),g=t(957),h=t(981),j=t(1002),O=t(962),x=t(118),w=t(336),y={name:"",breed:"",gender:"",weight:"",age:0,federated_iron:"",description:"",animal_type_id:0,animal_category_id:0,animal_subcategory_id:0,is_lote:!1,quantity_of_lote:0,vaccines:[],photos:[]};var N=function(e){Object(f.b)();var a=Object(f.c)((function(e){return e.sales.errors})),t=Object(f.c)((function(e){return e.sales.animalDialog})),l=Object(x.c)(y),c=(l.errors,l.form),i=l.handleChange,o=l.handleSubmit,s=l.setErrors,m=l.setForm,u=(l.setInForm,Object(n.useCallback)((function(){"edit"===t.type&&t.data&&m(Object(b.a)({},t.data)),"new"===t.type&&m(Object(b.a)(Object(b.a)({},y),t.data))}),[t.data,t.type,m]));return Object(n.useEffect)((function(){t.props.open&&u()}),[t.props.open,u]),Object(n.useEffect)((function(){a&&s(a)}),[a,s]),r.a.createElement(r.a.Fragment,null,"edit"===t.type&&c.photos&&r.a.createElement("div",{className:"h-192 flex flex-col items-center justify-center space-y-10 overflow-y-auto"},c.photos.map((function(e){return r.a.createElement(E.a,{className:"h-192 object-fill w-full",src:"".concat(e,"?token=").concat(w.a.getAccessToken()),variant:"square"})}))),r.a.createElement("form",{className:"md:overflow-hidden flex flex-col space-y-16",noValidate:!0,onSubmit:o},r.a.createElement("div",{className:"flex items-center mt-16"},r.a.createElement(v.a,{id:"name",inputProps:{readOnly:!0},label:"Nombre",name:"name",value:c.name,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{id:"breed",inputProps:{readOnly:!0},label:"Raza",name:"breed",value:c.breed,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{id:"gender",inputProps:{readOnly:!0},label:"Sexo",name:"gender",value:c.gender,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{className:"mr-4",id:"weight",inputProps:{readOnly:!0},label:"Peso",name:"weight",value:c.weight,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{className:"mr-4",id:"age",inputProps:{readOnly:!0},label:"Edad",name:"age",value:c.weight,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{className:"mr-4",id:"federated_iron",inputProps:{readOnly:!0},label:"Hierro federado",name:"federated_iron",value:c.federated_iron,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{className:"mr-4",id:"description",inputProps:{readOnly:!0},label:"Descripci\xf3n",name:"description",value:c.description,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(g.a,{control:r.a.createElement(h.a,{checked:c.is_lote,name:"is_lote",disabled:!0,onChange:i}),label:"Es lote?"})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{className:"mr-4",id:"quantity_of_lote",inputProps:{readOnly:!0},label:"Cantidad por lote",name:"quantity_of_lote",value:c.quantity_of_lote,variant:"outlined",fullWidth:!0})),r.a.createElement(j.a,{className:"justify-end"},r.a.createElement(O.a,{color:"primary",startIcon:r.a.createElement(d.a,null),variant:"outlined",onClick:e.onClick},"Cerrar"))))};var C=function(){var e=Object(f.b)(),a=Object(f.c)((function(e){return e.sales.animalDialog}));return r.a.createElement(c.a,Object.assign({classes:{paper:"m-8"}},a.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e(Object(p.a)())}}),r.a.createElement(i.a,{elevation:1,position:"static"},r.a.createElement(o.a,{className:"flex justify-between w-full"},r.a.createElement(s.a,{color:"inherit",variant:"subtitle1"},"Datos del animal"),r.a.createElement(m.a,{className:"cursor-pointer",onClick:function(){return e(Object(p.a)())}},r.a.createElement(d.a,null)))),r.a.createElement(u.a,{classes:{root:"p-16"}},r.a.createElement(N,{onClick:function(){return e(Object(p.a)())}})))};var k=function(e){var a,t,n,l;return r.a.createElement("form",{className:"md:overflow-hidden flex flex-col space-y-16"},r.a.createElement("div",{className:"flex items-center mt-16"},r.a.createElement(v.a,{id:"name",inputProps:{readOnly:!0},label:"Nombre",name:"name",value:(null===(a=e.interested)||void 0===a?void 0:a.name)||"",variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{id:"breed",inputProps:{readOnly:!0},label:"Correo electr\xf3nico",name:"breed",value:(null===(t=e.interested)||void 0===t?void 0:t.email)||"",variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{id:"gender",inputProps:{readOnly:!0},label:"Tel\xe9fono",name:"gender",value:(null===(n=e.interested)||void 0===n?void 0:n.phone)||"",variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{className:"mr-4",id:"weight",inputProps:{readOnly:!0},label:"C\xe9dula",name:"weight",value:(null===(l=e.interested)||void 0===l?void 0:l.identification_number)||"",variant:"outlined",fullWidth:!0})),r.a.createElement(j.a,{className:"justify-end"},r.a.createElement(O.a,{color:"primary",startIcon:r.a.createElement(d.a,null),variant:"outlined",onClick:e.onClick},"Cerrar")))};var P=function(){var e=Object(f.b)(),a=Object(f.c)((function(e){return e.sales.interestedDetailDialog}));return r.a.createElement(c.a,Object.assign({classes:{paper:"m-0"}},a.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e(Object(p.b)())}}),r.a.createElement(i.a,{elevation:1,position:"static"},r.a.createElement(o.a,{className:"flex justify-between w-full"},r.a.createElement(s.a,{color:"inherit",variant:"subtitle1"},"Informaci\xf3n de interesado"),r.a.createElement(m.a,{className:"cursor-pointer",onClick:function(){return e(Object(p.b)())}},r.a.createElement(d.a,null)))),r.a.createElement(u.a,{className:"p-0"},r.a.createElement(k,{interested:a.data,onClick:function(){return e(Object(p.b)())}})))},S=t(1025),_=t(1026),W=t(1024),I=t(1023),D=t(989),R=t(47),V=t(988),T=(t(337),[{id:"name",label:"Nombre"},{id:"information",label:"Informaci\xf3n de interesado",align:"center"}]);var H=function(e){var a=e.interested,t=Object(f.b)();return r.a.createElement("div",{className:"flex flex-col w-full"},r.a.createElement(R.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(S.a,{"aria-labelledby":"tableTitle"},r.a.createElement(V.a,{rows:T}),r.a.createElement(_.a,null,null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(I.a,{key:e.id},r.a.createElement(W.a,{component:"th",scope:"row"},e.user.name),r.a.createElement(W.a,{align:"center",component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(O.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(D.c,null),variant:"outlined",onClick:function(a){a.stopPropagation(),t(Object(p.i)(e.user))}},"Ver"))))}))))))};var F=function(){var e,a,t,n=Object(f.b)(),l=Object(f.c)((function(e){return e.sales.interestedDialog}));return r.a.createElement(c.a,Object.assign({classes:{paper:"m-0"}},l.props,{maxWidth:"lg",fullWidth:!0,onClose:function(){return n(Object(p.c)())}}),r.a.createElement(i.a,{elevation:1,position:"static"},r.a.createElement(o.a,{className:"flex justify-between w-full"},r.a.createElement(s.a,{color:"inherit",variant:"subtitle1"},"Informaci\xf3n de interesados"),r.a.createElement(m.a,{className:"cursor-pointer",onClick:function(){return n(Object(p.c)())}},r.a.createElement(d.a,null)))),r.a.createElement(u.a,{className:"p-0"},0===(null===(e=l.data)||void 0===e||null===(a=e.userOffers)||void 0===a?void 0:a.length)?r.a.createElement("div",null,r.a.createElement("div",{className:"h-96 flex items-center justify-center"},r.a.createElement(s.a,{variant:"h6"},"No existen interesados"))):r.a.createElement(H,{interested:null===(t=l.data)||void 0===t?void 0:t.userOffers,onClick:function(){return n(Object(p.c)())}})))},B={};var q=function(e){Object(f.b)();var a=Object(f.c)((function(e){return e.sales.errors})),t=Object(f.c)((function(e){return e.sales.ownerDialog})),l=Object(x.c)(B),c=(l.errors,l.form),i=(l.handleChange,l.handleSubmit),o=l.setErrors,s=l.setForm,m=(l.setInForm,Object(n.useCallback)((function(){"edit"===t.type&&t.data&&s(Object(b.a)({},t.data)),"new"===t.type&&s(Object(b.a)(Object(b.a)({},B),t.data))}),[t.data,t.type,s]));return Object(n.useEffect)((function(){t.props.open&&m()}),[t.props.open,m]),Object(n.useEffect)((function(){a&&o(a)}),[a,o]),r.a.createElement(r.a.Fragment,null,"edit"===t.type&&c.photo&&r.a.createElement("div",{className:"flex flex-col items-center justify-center"},r.a.createElement(E.a,{className:"object-fill w-full h-full",src:c.photo,variant:"square"})),r.a.createElement("form",{className:"md:overflow-hidden flex flex-col space-y-16",noValidate:!0,onSubmit:i},r.a.createElement("div",{className:"flex items-center mt-16"},r.a.createElement(v.a,{id:"name",inputProps:{readOnly:!0},label:"Nombre",name:"name",value:c.name||"",variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{id:"email",inputProps:{readOnly:!0},label:"Correo electr\xf3nico",name:"email",value:c.email||"",variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{id:"phone",inputProps:{readOnly:!0},label:"Tel\xe9fono",name:"phone",value:c.phone||"",variant:"outlined",fullWidth:!0})),r.a.createElement(j.a,{className:"justify-end"},r.a.createElement(O.a,{color:"primary",startIcon:r.a.createElement(d.a,null),variant:"outlined",onClick:e.onClick},"Cerrar"))))};var A=function(){var e=Object(f.b)(),a=Object(f.c)((function(e){return e.sales.ownerDialog}));return r.a.createElement(c.a,Object.assign({classes:{paper:"m-8"}},a.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e(Object(p.d)())}}),r.a.createElement(i.a,{elevation:1,position:"static"},r.a.createElement(o.a,{className:"flex justify-between w-full"},r.a.createElement(s.a,{color:"inherit",variant:"subtitle1"},"Datos del propietario"),r.a.createElement(m.a,{className:"cursor-pointer",onClick:function(){return e(Object(p.d)())}},r.a.createElement(d.a,null)))),r.a.createElement(u.a,{classes:{root:"p-16"}},r.a.createElement(q,{onClick:function(){return e(Object(p.d)())}})))},L={name:"",breed:"",gender:"",weight:"",age:0,federated_iron:"",description:"",animal_type_id:0,animal_category_id:0,animal_subcategory_id:0,is_lote:!1,quantity_of_lote:0,vaccines:[],photos:[]};var z=function(e){Object(f.b)();var a=Object(f.c)((function(e){return e.sales.errors})),t=Object(f.c)((function(e){return e.sales.saleDialog})),l=Object(x.c)(L),c=(l.errors,l.form),i=(l.handleChange,l.handleSubmit),o=l.setErrors,s=l.setForm,m=(l.setInForm,Object(n.useCallback)((function(){"edit"===t.type&&t.data&&s(Object(b.a)({},t.data)),"new"===t.type&&s(Object(b.a)(Object(b.a)({},L),t.data))}),[t.data,t.type,s]));return Object(n.useEffect)((function(){t.props.open&&m()}),[t.props.open,m]),Object(n.useEffect)((function(){a&&o(a)}),[a,o]),r.a.createElement(r.a.Fragment,null,"edit"===t.type&&c.photo&&r.a.createElement("div",{className:"flex flex-col items-center justify-center"},r.a.createElement(E.a,{className:"h-192 object-fill w-full",src:c.photo,variant:"square"})),r.a.createElement("form",{className:"md:overflow-hidden flex flex-col space-y-16",noValidate:!0,onSubmit:i},r.a.createElement("div",{className:"flex items-center mt-16"},r.a.createElement(v.a,{id:"starts_date",inputProps:{readOnly:!0},label:"Fecha de inicio",name:"starts_date",value:c.start_date||"",variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{id:"ends_date",inputProps:{readOnly:!0},label:"Fecha de finalizaci\xf3n",name:"ends_date",value:c.end_date||"",variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{id:"price",inputProps:{readOnly:!0},label:"Valor",name:"price",value:c.price||"",variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{className:"mr-4",id:"weight",inputProps:{readOnly:!0},label:"Cantidad de interesados",name:"weight",value:c.weight||"",variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{className:"mr-4",id:"age",inputProps:{readOnly:!0},label:"N\xfamero de animales",name:"age",value:c.weight||"",variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{className:"mr-4",id:"city",inputProps:{readOnly:!0},label:"Ciudad",name:"city",value:c.city||"",variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(v.a,{className:"mr-4",id:"department",inputProps:{readOnly:!0},label:"Departamento",name:"department",value:c.department||"",variant:"outlined",fullWidth:!0})),r.a.createElement(j.a,{className:"justify-end"},r.a.createElement(O.a,{color:"primary",startIcon:r.a.createElement(d.a,null),variant:"outlined",onClick:e.onClick},"Cerrar"))))};var M=function(){var e=Object(f.b)(),a=Object(f.c)((function(e){return e.sales.saleDialog}));return r.a.createElement(c.a,Object.assign({classes:{paper:"m-8"}},a.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e(Object(p.e)())}}),r.a.createElement(i.a,{elevation:1,position:"static"},r.a.createElement(o.a,{className:"flex justify-between w-full"},r.a.createElement(s.a,{color:"inherit",variant:"subtitle1"},"Datos de la venta"),r.a.createElement(m.a,{className:"cursor-pointer",onClick:function(){return e(Object(p.e)())}},r.a.createElement(d.a,null)))),r.a.createElement(u.a,{classes:{root:"p-16"}},r.a.createElement(z,{onClick:function(){return e(Object(p.e)())}})))},J=t(29),U=t(335),G=(t(36),t(979)),K=t(961),Q=t(44),X=t(990),Y=t(991),Z=Object(Q.h)((function(e){var a=e.data,t=e.rows,n=Object(f.b)(),l=Object(Y.a)(),c=l.page,i=l.rowsPerPage,o=l.setPage,s=l.setRowsPerPage;return r.a.createElement("div",{className:"flex flex-col w-full"},r.a.createElement(R.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(S.a,{"aria-labelledby":"tableTitle",className:"min-w-xl",stickyHeader:!0},r.a.createElement(V.a,{rows:t}),r.a.createElement(_.a,null,a.slice(c*i,c*i+i).map((function(e){return r.a.createElement(I.a,{key:e.id,className:"h-32 cursor-pointer",hover:!0},r.a.createElement(W.a,{component:"th",scope:"row"},e.start_date),r.a.createElement(W.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(G.a,{checked:4===e.status_id,disabled:2===e.status_id,inputProps:{"aria-label":"secondary checkbox"},name:"checkedA",onChange:function(){return n(Object(p.p)(e))}}))),r.a.createElement(W.a,{component:"th",scope:"row"},e.owner.name),r.a.createElement(W.a,{component:"th",scope:"row"},e.owner.email),r.a.createElement(W.a,{component:"th",scope:"row"},e.animal_type_name),r.a.createElement(W.a,{className:"text-center",component:"th",scope:"row"},e.quantity),r.a.createElement(W.a,{className:"text-center",component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(O.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(K.a,null,r.a.createElement(D.c,null)),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(p.h)(e.animal))}},"Ver"))),r.a.createElement(W.a,{className:"text-center",component:"th",scope:"row"},e.price),r.a.createElement(W.a,{className:"text-center",component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(O.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(K.a,null,r.a.createElement(D.c,null)),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(p.k)(e.owner))}},"Ver"))),r.a.createElement(W.a,{className:"text-center",component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(O.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(K.a,null,r.a.createElement(D.c,null)),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(p.l)(e))}},"Ver"))),r.a.createElement(W.a,{className:"text-center",component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(O.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(K.a,null,r.a.createElement(D.c,null)),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(p.j)(e))}},"Ver"))),r.a.createElement(W.a,{className:"text-center",component:"th",scope:"row"},e.status_name))}))))),r.a.createElement(X.a,{count:a.length,page:c,rowsPerPage:i,setPage:o,setRowsPerPage:s}))})),$=t(17),ee=[{id:"start_date",label:"Fecha Subida"},{id:"outstanding",label:"Destacar",align:"center"},{id:"owner_name",label:"Nombre"},{id:"owner_email",label:"Email"},{id:"animal_type",label:"Tipo de Animal"},{id:"quantity",label:"N\xfamero de Animales",align:"center"},{id:"animal",label:"Animal",align:"center"},{id:"price",label:"Valor",align:"center"},{id:"owner_information",label:"Informaci\xf3n Propietario",align:"center"},{id:"sale_info",label:"Informaci\xf3n Venta",align:"center"},{id:"user_offers",label:"Interesados",align:"center"},{id:"status",label:"Estado",align:"center"}];var ae=function(){var e=Object(f.b)(),a=Object(f.c)(p.m),t=Object(f.c)((function(e){return e.sales.searchText})),l=Object(f.c)((function(e){return e.sales.selectedStatus})),c=Object(n.useState)(!0),i=Object(J.a)(c,2),o=i[0],m=i[1],u=Object(n.useState)(null),d=Object(J.a)(u,2),b=d[0],E=d[1];return Object(n.useEffect)((function(){e(Object(p.g)()).then((function(){return m(!1)}))}),[e]),Object(n.useEffect)((function(){a&&E(0===t.length&&"todos"===l?a:$.a.filter(a,(function(e){return"todos"===l&&(e.owner_name.toLowerCase().includes(t.toLowerCase())||e.owner_email.toLowerCase().includes(t.toLowerCase())?e:void 0)})))}),[a,l,t]),b?o?r.a.createElement(U.a,null):0===b.length?r.a.createElement("div",{className:"flex items-center justify-center flex-1 h-full"},r.a.createElement(s.a,{color:"textSecondary",variant:"h5"},"No hay ventas")):r.a.createElement(Z,{data:b,rows:ee}):null},te=t(963),ne=t(1003),re=t(997),le=t(994),ce=t(995),ie=t(334),oe=t(35),se=t(176),me=function(){var e=Object(f.b)(),a=Object(f.c)(oe.e),t=Object(f.c)((function(e){return e.entities.statuses})).filter((function(e){return"acciones en animales"===e.type||"Venta"===e.type})),l=Object(f.c)((function(e){return e.sales.selectedStatus}));return Object(n.useEffect)((function(){0===t.length&&e(Object(ie.g)())}),[e]),r.a.createElement("div",{className:"flex flex-col justify-center w-full mt-16 space-y-20"},r.a.createElement("div",{className:"flex mt-24"},r.a.createElement(se.a,{animation:"transition.expandIn",delay:300},r.a.createElement(K.a,{className:"text-32 mr-16"},r.a.createElement(re.a,null))),r.a.createElement(se.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(s.a,{className:"sm:flex sm:mx-12 mx-0",variant:"h6"},"Ventas"))),r.a.createElement("div",{className:"flex justify-between w-full"},r.a.createElement(te.a,{theme:a},r.a.createElement(se.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement("div",{className:"lg:flex-row lg:space-y-0 flex flex-col justify-between w-full h-full space-y-10"},r.a.createElement("div",{className:"lg:items-center flex w-full space-x-8"},r.a.createElement(ce.a,{actionCallback:p.n}),r.a.createElement(le.a,{actionCallback:p.o,data:t,selectedStatus:l})),r.a.createElement("div",{className:"flex h-full"},r.a.createElement(O.a,{className:"whitespace-nowrap w-full normal-case",color:"primary",startIcon:r.a.createElement(ne.a,null),variant:"contained",onClick:function(){return window.open("".concat("https://api.colcagro.com.co","/api/v1/actions_on_animals/venta/export?token=").concat(w.a.getAccessToken()),"_blank")}},r.a.createElement("span",{className:"sm:flex hidden"},"Descargar CSV"),r.a.createElement("span",{className:"sm:hidden flex"},"Descargar"))))))))};a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-172 h-172 sm:h-172 sm:min-h-172 my-10"},content:r.a.createElement(ae,null),header:r.a.createElement(me,null),innerScroll:!0}),r.a.createElement(C,null),r.a.createElement(M,null),r.a.createElement(A,null),r.a.createElement(F,null),r.a.createElement(P,null))}},988:function(e,a,t){"use strict";var n=t(1024),r=t(1022),l=t(1023),c=t(0),i=t.n(c);a.a=function(e){var a=e.rows;return i.a.createElement(r.a,null,i.a.createElement(l.a,{className:"h-64"},a.map((function(e){return i.a.createElement(n.a,{key:e.id,align:e.align||"left",className:"whitespace-nowrap",padding:e.disablePadding?"none":"default"},e.label)}),this)))}},990:function(e,a,t){"use strict";var n=t(1046),r=t(0),l=t.n(r);a.a=function(e){var a=e.count,t=e.page,r=e.rowsPerPage,c=e.setPage,i=e.setRowsPerPage;return l.a.createElement(n.a,{backIconButtonProps:{"aria-label":"P\xe1gina previa"},backIconButtonText:"P\xe1gina previa",className:"flex-shrink-0 overflow-x-auto",component:"div",count:a,labelRowsPerPage:"Registros por p\xe1gina",nextIconButtonProps:{"aria-label":"Siguiente p\xe1gina"},nextIconButtonText:"Siguiente p\xe1gina",page:t,rowsPerPage:r,onChangePage:function(e,a){c(a)},onChangeRowsPerPage:function(e){i(e.target.value)}})}},991:function(e,a,t){"use strict";var n=t(29),r=t(0);a.a=function(){var e=Object(r.useState)(0),a=Object(n.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)(10),i=Object(n.a)(c,2);return{page:t,setPage:l,rowsPerPage:i[0],setRowsPerPage:i[1]}}},992:function(e,a,t){"use strict";t.d(a,"a",(function(){return x}));var n=t(4),r=t(909),l=t(6),c=t(0),i=t.n(c),o=t(46),s=t(963),m=t(35),u=t(11);var d=function(e){var a=Object(o.a)(),t=Object(u.c)(Object(m.c)(a.palette.primary.main));return i.a.createElement("div",{className:e.classes.header},e.header&&i.a.createElement(s.a,{theme:t},e.header))},f=t(29),p=t(91),b=t(982),E=t(983),v=t(47);var g=function(e){var a=Object(o.a)(),t=Object(u.c)(Object(m.c)(a.palette.primary.main)),n=e.classes;return i.a.createElement(i.a.Fragment,null,e.header&&i.a.createElement(s.a,{theme:t},i.a.createElement("div",{className:Object(l.a)(n.sidebarHeader,e.variant)},e.header)),e.content&&i.a.createElement(v.a,{className:n.sidebarContent,enable:e.innerScroll},e.content))};var h=i.a.forwardRef((function(e,a){var t=Object(c.useState)(!1),n=Object(f.a)(t,2),r=n[0],o=n[1],s=e.classes;Object(c.useImperativeHandle)(a,(function(){return{toggleSidebar:m}}));var m=function(){o(!r)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{lgUp:"permanent"===e.variant},i.a.createElement(E.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return m()},disableSwipeToOpen:!0,classes:{root:Object(l.a)(s.sidebarWrapper,e.variant),paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},i.a.createElement(g,e))),"permanent"===e.variant&&i.a.createElement(b.a,{mdDown:!0},i.a.createElement(p.a,{variant:"permanent",className:Object(l.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},i.a.createElement(g,e))))})),j=Object(r.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:256,backgroundColor:e.palette.background.paper,backgroundSize:"cover",borderBottom:"1px solid ".concat(e.palette.primary.main),pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:192,minHeight:192,maxHeight:192,display:"flex",color:e.palette.secondary.main},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:296,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:256,minHeight:256,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),O=i.a.forwardRef((function(e,a){var t=Object(c.useRef)(null),n=Object(c.useRef)(null),r=Object(c.useRef)(null),o=j(e),s=e.rightSidebarHeader||e.rightSidebarContent,m=e.leftSidebarHeader||e.leftSidebarContent;return i.a.useImperativeHandle(a,(function(){return{rootRef:r,toggleLeftSidebar:function(){t.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),i.a.createElement("div",{ref:r,className:Object(l.a)(o.root,e.innerScroll&&o.innerScroll)},i.a.createElement("div",{className:o.topBg}),i.a.createElement("div",{className:"container flex w-full"},m&&i.a.createElement(h,{ref:t,classes:o,content:e.leftSidebarContent,header:e.leftSidebarHeader,innerScroll:e.innerScroll,position:"left",rootRef:r,variant:e.leftSidebarVariant||"permanent"}),i.a.createElement("div",{className:Object(l.a)(o.contentWrapper,m&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},i.a.createElement(d,{classes:o,header:e.header}),i.a.createElement("div",{className:Object(l.a)(o.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&i.a.createElement("div",{className:o.toolbar},e.contentToolbar),e.content&&i.a.createElement(v.a,{className:o.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),s&&i.a.createElement(h,{ref:n,classes:o,content:e.rightSidebarContent,header:e.rightSidebarHeader,innerScroll:e.innerScroll,position:"right",rootRef:r,variant:e.rightSidebarVariant||"permanent"})))}));O.defaultProps={};var x=i.a.memo(O)},994:function(e,a,t){"use strict";var n=t(898),r=t(960),l=t(961),c=t(910),i=t(0),o=t.n(i),s=t(989),m=t(11);a.a=function(e){var a=e.actionCallback,t=e.data,i=e.selectedStatus,u=Object(m.b)();return o.a.createElement(n.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:o.a.createElement(r.a,{position:"start"},o.a.createElement(l.a,null,o.a.createElement(s.d,null)))},placeholder:"Filtrar",value:i,variant:"outlined",select:!0,onChange:function(e){return u(a(e))}},o.a.createElement(c.a,{value:"todos"},"Todos"),t.map((function(e){return o.a.createElement(c.a,{key:e.id,value:e.id},e.name)})))}},995:function(e,a,t){"use strict";var n=t(29),r=t(898),l=t(960),c=t(961),i=t(0),o=t.n(i),s=t(11),m=t(118);a.a=function(e){var a=e.actionCallback,t=Object(s.b)(),u=Object(i.useState)(""),d=Object(n.a)(u,2),f=d[0],p=d[1],b=Object(m.a)(f,300);Object(i.useEffect)((function(){t(a(b))}),[t,b]);return o.a.createElement(r.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:o.a.createElement(l.a,{position:"start"},o.a.createElement(c.a,null,"search"))},placeholder:"Buscar",value:f,variant:"outlined",onChange:function(e){var a=e.target.value;p(a)}})}}}]);