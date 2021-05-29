(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[9,24],{1001:function(e,a,t){"use strict";var n=t(2),r=t(9),l=t(0),c=(t(7),t(6)),o=t(12),i=l.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,s=e.className,m=Object(r.a)(e,["disableSpacing","classes","className"]);return l.createElement("div",Object(n.a)({className:Object(c.a)(i.root,s,!o&&i.spacing),ref:a},m))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(i)},1003:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=[{id:1,name:"Hembra",value:"hembra"},{id:2,name:"Macho",value:"macho"},{id:3,name:"Mixto",value:"mixto"}]},1005:function(e,a,t){"use strict";var n=t(960),r=t(965),l=t(1012),c=t(0),o=t.n(c);function i(e){var a=e.text;return o.a.createElement(r.a,{placement:"top",title:a},o.a.createElement(n.a,{className:"text-red"},"place"))}a.a=function(e){var a=e.latitude,t=e.longitude;return o.a.createElement("div",{className:"w-full"},o.a.createElement("div",{className:"h-512 w-full"},o.a.createElement(l.a,{bootstrapURLKeys:{key:"AIzaSyCr5_KtmlHmwayvG_ss7wjbfEXsglTga2Q"},defaultCenter:[Number.parseFloat(a),Number.parseFloat(t)],defaultZoom:12},o.a.createElement(i,{lat:Number.parseFloat(a),lng:Number.parseFloat(t),text:"Hola"}))))}},1018:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(1002);function r(e){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"}}]})(e)}},1032:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(991),c=t(29),o=t(975),i=t(963),s=t(964),m=t(117),u=t(907),d=t(1026),f=t(986),p=t(11),b=t(335),E=t(338),g=t(1024),v=t(1025),h=t(1023),j=t(1022),O=t(47),x=t(987),w=[{id:"description",label:"Comentario"},{id:"qualification",label:"Calificaci\xf3n"}];var y=function(e){var a=e.comments;return r.a.createElement("div",{className:"flex flex-col w-full"},r.a.createElement(O.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(g.a,{"aria-labelledby":"tableTitle"},r.a.createElement(x.a,{rows:w}),r.a.createElement(v.a,null,null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(j.a,{key:e.id},r.a.createElement(h.a,{component:"th",scope:"row"},e.description),r.a.createElement(h.a,{component:"th",scope:"row"},e.qualification))}))))))};var N=function(){var e=Object(p.b)(),a=Object(n.useState)(!0),t=Object(c.a)(a,2),l=t[0],g=t[1],v=Object(p.c)((function(e){return e.farms.farmComments})),h=Object(p.c)((function(e){return e.farms.farmCommentsDialog}));Object(n.useEffect)((function(){h.props.open&&e(Object(E.h)(h.data.id)).then((function(){return g(!1)}))}),[e,h]);var j=function(){e(Object(E.c)()),g(!0)};return r.a.createElement(o.a,Object.assign({classes:{paper:"m-0"}},h.props,{maxWidth:"lg",fullWidth:!0,onClose:function(){return j()}}),r.a.createElement(i.a,{elevation:1,position:"static"},r.a.createElement(s.a,{className:"flex justify-between w-full"},r.a.createElement(m.a,{color:"inherit",variant:"subtitle1"},"Informaci\xf3n de comentarios"),r.a.createElement(u.a,{className:"cursor-pointer",onClick:function(){return j()}},r.a.createElement(f.a,null)))),r.a.createElement(d.a,{className:"p-0"},l?r.a.createElement(b.a,null):0===v.length?r.a.createElement("div",null,r.a.createElement("div",{className:"h-96 flex items-center justify-center"},r.a.createElement(m.a,{variant:"h6"},"No existen comentarios"))):r.a.createElement(y,{comments:v,onClick:function(){return j()}})))},C=t(15),k=t(985),S=t(897),P=t(1001),_=t(961),I=t(118),W={name:"",breed:"",gender:"",weight:"",age:0,federated_iron:"",description:"",animal_type_id:0,animal_category_id:0,animal_subcategory_id:0,is_lote:!1,quantity_of_lote:0,vaccines:[],photos:[]};var H=function(e){Object(p.b)();var a=Object(p.c)((function(e){return e.farms.errors})),t=Object(p.c)((function(e){return e.farms.farmDialog})),l=Object(I.c)(W),c=(l.errors,l.form),o=(l.handleChange,l.handleSubmit),i=l.setErrors,s=l.setForm,m=(l.setInForm,Object(n.useCallback)((function(){"edit"===t.type&&t.data&&s(Object(C.a)({},t.data)),"new"===t.type&&s(Object(C.a)(Object(C.a)({},W),t.data))}),[t.data,t.type,s]));return Object(n.useEffect)((function(){t.props.open&&m()}),[t.props.open,m]),Object(n.useEffect)((function(){a&&i(a)}),[a,i]),r.a.createElement(r.a.Fragment,null,"edit"===t.type&&c.photos.length>0&&r.a.createElement("div",{className:"flex flex-col items-center justify-center"},r.a.createElement(k.a,{className:"h-192 object-fill w-full",src:c.photos[0],variant:"square"})),r.a.createElement("form",{className:"md:overflow-hidden flex flex-col space-y-16",noValidate:!0,onSubmit:o},r.a.createElement("div",{className:"flex items-center mt-16"},r.a.createElement(S.a,{id:"description",inputProps:{readOnly:!0},label:"Descripci\xf3n",name:"description",value:c.description,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(S.a,{id:"hectares",inputProps:{readOnly:!0},label:"Hect\xe1reas",name:"hectares",value:c.hectares,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(S.a,{id:"built_area",inputProps:{readOnly:!0},label:"\xc1rea construida",name:"built_area",value:c.built_area,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(S.a,{className:"mr-4",id:"bathrooms",inputProps:{readOnly:!0},label:"Ba\xf1os",name:"bathrooms",value:c.bathrooms,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(S.a,{className:"mr-4",id:"value",inputProps:{readOnly:!0},label:"Valor",name:"value",value:c.value,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(S.a,{className:"mr-4",id:"cityName",inputProps:{readOnly:!0},label:"Ciudad",name:"cityName",value:c.cityName,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(S.a,{className:"mr-4",id:"address",inputProps:{readOnly:!0},label:"Direcci\xf3n",name:"address",value:c.address,variant:"outlined",fullWidth:!0})),r.a.createElement(P.a,{className:"justify-end"},r.a.createElement(_.a,{color:"primary",startIcon:r.a.createElement(f.a,null),variant:"outlined",onClick:e.onClick},"Cerrar"))))};var D=function(){var e=Object(p.b)(),a=Object(p.c)((function(e){return e.farms.farmDialog}));return r.a.createElement(o.a,Object.assign({classes:{paper:"m-8"}},a.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e(Object(E.b)())}}),r.a.createElement(i.a,{elevation:1,position:"static"},r.a.createElement(s.a,{className:"flex justify-between w-full"},r.a.createElement(m.a,{color:"inherit",variant:"subtitle1"},"Datos de la finca"),r.a.createElement(u.a,{className:"cursor-pointer",onClick:function(){return e(Object(E.b)())}},r.a.createElement(f.a,null)))),r.a.createElement(d.a,{classes:{root:"p-16"}},r.a.createElement(H,{onClick:function(){return e(Object(E.b)())}})))},F=t(1005);var R=function(){var e=Object(p.b)(),a=Object(p.c)((function(e){return e.farms.locationDialog}));return r.a.createElement(o.a,Object.assign({classes:{paper:"m-8"}},a.props,{maxWidth:"md",fullWidth:!0,onClose:function(){return e(Object(E.d)())}}),r.a.createElement(i.a,{elevation:1,position:"static"},r.a.createElement(s.a,{className:"flex justify-between w-full"},r.a.createElement(m.a,{color:"inherit",variant:"subtitle1"},"Ubicaci\xf3n de la finca"),r.a.createElement(u.a,{className:"cursor-pointer",onClick:function(){return e(Object(E.d)())}},r.a.createElement(f.a,null)))),r.a.createElement(d.a,{classes:{root:"p-16"}},r.a.createElement(F.a,{latitude:a.data.latitude,longitude:a.data.longitude})))},T=(t(343),t(17),t(336),t(334)),V=(t(1003),{name:"",breed:"",gender:"",weight:"",age:0,federated_iron:"",description:"",animal_type_id:0,animal_category_id:0,animal_subcategory_id:0,is_lote:!1,quantity_of_lote:0,vaccines:[]});var q=function(e){Object(p.b)();var a=Object(p.c)((function(e){return e.farms.errors})),t=Object(p.c)((function(e){return e.farms.ownerDialog})),l=Object(I.c)(V),c=(l.errors,l.form),o=(l.handleChange,l.handleSubmit),i=l.setErrors,s=l.setForm,m=(l.setInForm,Object(n.useCallback)((function(){"edit"===t.type&&t.data&&s(Object(C.a)({},t.data)),"new"===t.type&&s(Object(C.a)(Object(C.a)({},V),t.data))}),[t.data,t.type,s]));return Object(n.useEffect)((function(){t.props.open&&m()}),[t.props.open,m]),Object(n.useEffect)((function(){a&&i(a)}),[a,i]),r.a.createElement(r.a.Fragment,null,"edit"===t.type&&r.a.createElement("div",{className:"flex flex-col items-center justify-center"},r.a.createElement(k.a,{className:"h-192 object-fill w-full",src:c.photo,variant:"square"})),r.a.createElement("form",{className:"md:overflow-hidden flex flex-col space-y-16",noValidate:!0,onSubmit:o},r.a.createElement("div",{className:"flex items-center mt-16"},r.a.createElement(S.a,{id:"name",inputProps:{readOnly:!0},label:"Nombre",name:"name",value:c.name,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(S.a,{id:"email",inputProps:{readOnly:!0},label:"Correo",name:"email",value:c.email,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(S.a,{id:"phone",inputProps:{readOnly:!0},label:"Celular",name:"phone",value:c.phone,variant:"outlined",fullWidth:!0})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(S.a,{className:"mr-4",id:"qualification",inputProps:{readOnly:!0},label:"Calificaci\xf3n",name:"qualification",value:c.qualification,variant:"outlined",fullWidth:!0})),r.a.createElement(P.a,{className:"justify-end"},r.a.createElement(_.a,{color:"primary",startIcon:r.a.createElement(f.a,null),variant:"outlined",onClick:e.onClick},"Cerrar"))))};var B=function(){var e=Object(p.b)(),a=Object(p.c)((function(e){return e.farms.ownerDialog}));return r.a.createElement(o.a,Object.assign({classes:{paper:"m-8"}},a.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e(Object(E.e)())}}),r.a.createElement(i.a,{elevation:1,position:"static"},r.a.createElement(s.a,{className:"flex justify-between w-full"},r.a.createElement(m.a,{color:"inherit",variant:"subtitle1"},"Datos del propietario"),r.a.createElement(u.a,{className:"cursor-pointer",onClick:function(){return e(Object(E.e)())}},r.a.createElement(f.a,null)))),r.a.createElement(d.a,{classes:{root:"p-16"}},r.a.createElement(q,{onClick:function(){return e(Object(E.e)())}})))},z={name:"",breed:"",gender:"",weight:"",age:0,federated_iron:"",description:"",animal_type_id:0,animal_category_id:0,animal_subcategory_id:0,is_lote:!1,quantity_of_lote:0,vaccines:[],photos:[]};var A=function(e){Object(p.b)();var a=Object(p.c)((function(e){return e.farms.errors})),t=Object(p.c)((function(e){return e.farms.photosDialog})),l=Object(I.c)(z),c=(l.errors,l.form),o=(l.handleChange,l.handleSubmit,l.setErrors),i=l.setForm,s=(l.setInForm,Object(n.useCallback)((function(){"edit"===t.type&&t.data&&i(Object(C.a)({},t.data)),"new"===t.type&&i(Object(C.a)(Object(C.a)({},z),t.data))}),[t.data,t.type,i]));return Object(n.useEffect)((function(){t.props.open&&s()}),[t.props.open,s]),Object(n.useEffect)((function(){a&&o(a)}),[a,o]),r.a.createElement(r.a.Fragment,null,"edit"===t.type&&c.photos.length>0?r.a.createElement("div",{className:"md:max-w-xl lg:max-w-6xl flex flex-wrap px-8 mx-auto mt-4 overflow-hidden"},c.photos.map((function(e){return r.a.createElement("div",{className:"w-1/2 px-8 my-8 overflow-hidden"},r.a.createElement("div",{className:"h-auto text-center text-black bg-white border border-gray-400 rounded shadow-lg"},r.a.createElement("img",{alt:"photo farm",src:e})))}))):r.a.createElement("div",{className:"flex items-center justify-center h-64"},r.a.createElement(m.a,{variant:"h6"},"No se encuentran fotos registradas")),r.a.createElement(P.a,{className:"justify-end"},r.a.createElement(_.a,{color:"primary",startIcon:r.a.createElement(f.a,null),variant:"outlined",onClick:e.onClick},"Cerrar")))};var M=function(){var e=Object(p.b)(),a=Object(p.c)((function(e){return e.farms.photosDialog}));return r.a.createElement(o.a,Object.assign({classes:{paper:"m-8"}},a.props,{maxWidth:"xs",fullWidth:!0,onClose:function(){return e(Object(E.f)())}}),r.a.createElement(i.a,{elevation:1,position:"static"},r.a.createElement(s.a,{className:"flex justify-between w-full"},r.a.createElement(m.a,{color:"inherit",variant:"subtitle1"},"Fotos de la finca"),r.a.createElement(u.a,{className:"cursor-pointer",onClick:function(){return e(Object(E.f)())}},r.a.createElement(f.a,null)))),r.a.createElement(d.a,{classes:{root:"p-16"}},r.a.createElement(A,{onClick:function(){return e(Object(E.f)())}})))},L=t(36),U=t(978),J=t(1018),K=t(1027),G=t(988),Q=t(44),X=t(337),Z=t(989),Y=t(990),$=Object(Q.h)((function(e){var a=e.data,t=e.rows,n=Object(p.b)(),l=Object(Y.a)(),c=l.page,o=l.rowsPerPage,i=l.setPage,s=l.setRowsPerPage;return r.a.createElement("div",{className:"flex flex-col w-full"},r.a.createElement(O.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(g.a,{"aria-labelledby":"tableTitle",className:"min-w-xl",stickyHeader:!0},r.a.createElement(x.a,{rows:t}),r.a.createElement(v.a,null,a.slice(c*o,c*o+o).map((function(e){return r.a.createElement(j.a,{key:e.id,className:"h-32 cursor-pointer",hover:!0},r.a.createElement(h.a,{component:"th",scope:"row"},e.id),r.a.createElement(h.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(U.a,{checked:4===e.status_id,disabled:2===e.status_id,inputProps:{"aria-label":"secondary checkbox"},name:"checkedA",onChange:function(){return n(Object(E.r)(e))}}))),r.a.createElement(h.a,{align:"center",component:"th",scope:"row"},e.agreement),r.a.createElement(h.a,{align:"center",component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(_.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(G.b,null),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(E.m)(e.owner))}},"Ver"))),r.a.createElement(h.a,{align:"center",component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(_.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(G.b,null),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(E.j)(e))}},"Ver"))),r.a.createElement(h.a,{align:"center",component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(_.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(G.b,null),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(E.n)(e))}},"Ver"))),r.a.createElement(h.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(J.a,{className:"text-xl cursor-pointer",onClick:function(){return window.open("".concat(e.contract,"?token=").concat(X.a.getAccessToken()),"_blank")}}))),r.a.createElement(h.a,{align:"center",component:"th",scope:"row"},e.qualification),r.a.createElement(h.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(_.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(G.b,null),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(E.k)({id:e.id,qualification:e.qualification}))}},"Ver"))),r.a.createElement(h.a,{align:"center",component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(U.a,{checked:1===e.status_id||4===e.status_id,inputProps:{"aria-label":"secondary checkbox"},name:"checkedB",onChange:function(){return n(Object(E.a)(e))}}))),r.a.createElement(h.a,{component:"th",scope:"row"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(_.a,{className:"normal-case",color:"secondary",startIcon:r.a.createElement(K.c,null),variant:"outlined",onClick:function(a){a.stopPropagation(),n(Object(E.l)(e))}},"Ver"))))}))))),r.a.createElement(Z.a,{count:a.length,page:c,rowsPerPage:o,setPage:i,setRowsPerPage:s}))})),ee=[{id:"id",label:"C\xf3digo"},{id:"outstanding",label:"Destacado",align:"center"},{id:"tipoConvenio",label:"Tipo de Convenio",align:"center"},{id:"infoPropietario",label:"Info Propietario",align:"center"},{id:"infoFinca",label:"Info de Finca",align:"center"},{id:"fotos",label:"Fotos",align:"center"},{id:"contrato",label:"Contrato",align:"center"},{id:"qualification_owner",label:"Calificaci\xf3n del propietario",align:"center"},{id:"comments",label:"Comentarios",align:"center"},{id:"estado",label:"Estado",align:"center"},{id:"location",label:"Ubicaci\xf3n",align:"center"}];var ae=function(){var e=Object(p.b)(),a=Object(p.c)(E.o),t=Object(p.c)((function(e){return e.farms.searchText})),l=Object(p.c)((function(e){return e.farms.selectedStatus})),o=Object(n.useState)(!0),i=Object(c.a)(o,2),s=i[0],u=i[1],d=Object(n.useState)(null),f=Object(c.a)(d,2),g=f[0],v=f[1];return Object(n.useEffect)((function(){e(Object(E.i)()).then((function(){return u(!1)}))}),[e]),Object(n.useEffect)((function(){a&&v(function(){if(0===t.length&&"todos"===l)return a;var e=a;return"todos"!==l&&(e=e.filter((function(e){return e.status_id===l}))),e=L.a.filterArrayByString(e,t)}())}),[a,l,t]),g?s?r.a.createElement(b.a,null):0===g.length?r.a.createElement("div",{className:"flex items-center justify-center flex-1 h-full"},r.a.createElement(m.a,{color:"textSecondary",variant:"h5"},"No hay fincas")):r.a.createElement($,{data:g,rows:ee}):null},te=t(960),ne=t(962),re=t(996),le=t(993),ce=t(994),oe=t(35),ie=t(176),se=function(){var e=Object(p.b)(),a=Object(p.c)(oe.e),t=Object(p.c)((function(e){return e.entities.statuses})).filter((function(e){return"general"===e.type})),l=Object(p.c)((function(e){return e.farms.selectedStatus}));return Object(n.useEffect)((function(){0===t.length&&e(Object(T.g)())}),[e]),r.a.createElement("div",{className:"flex flex-col justify-center w-full mt-16 space-y-20"},r.a.createElement("div",{className:"flex mt-24"},r.a.createElement(ie.a,{animation:"transition.expandIn",delay:300},r.a.createElement(te.a,{className:"text-32 mr-16"},r.a.createElement(re.a,null))),r.a.createElement(ie.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(m.a,{className:"sm:flex sm:mx-12 mx-0",variant:"h6"},"Fincas"))),r.a.createElement("div",{className:"flex justify-between w-full"},r.a.createElement(ne.a,{theme:a},r.a.createElement(ie.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement("div",{className:"lg:flex-row lg:space-y-0 flex flex-col justify-between w-full h-full space-y-10"},r.a.createElement("div",{className:"lg:items-center flex w-full space-x-8"},r.a.createElement(ce.a,{actionCallback:E.p}),r.a.createElement(le.a,{actionCallback:E.q,data:t,selectedStatus:l})),r.a.createElement("div",{className:"flex h-full"},r.a.createElement(_.a,{className:"whitespace-nowrap w-full normal-case",color:"primary",startIcon:r.a.createElement(K.a,null),variant:"contained",onClick:function(){return window.open("".concat("https://api.colcagro.com.co","/api/farm/export?token=").concat(X.a.getAccessToken()),"_blank")}},r.a.createElement("span",{className:"sm:flex hidden"},"Descargar CSV"),r.a.createElement("span",{className:"sm:hidden flex"},"Descargar"))))))))};a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-172 h-172 sm:h-172 sm:min-h-172 my-10"},content:r.a.createElement(ae,null),header:r.a.createElement(se,null),innerScroll:!0}),r.a.createElement(B,null),r.a.createElement(D,null),r.a.createElement(M,null),r.a.createElement(R,null),r.a.createElement(N,null))}},987:function(e,a,t){"use strict";var n=t(1023),r=t(1021),l=t(1022),c=t(0),o=t.n(c);a.a=function(e){var a=e.rows;return o.a.createElement(r.a,null,o.a.createElement(l.a,{className:"h-64"},a.map((function(e){return o.a.createElement(n.a,{key:e.id,align:e.align||"left",className:"whitespace-nowrap",padding:e.disablePadding?"none":"default"},e.label)}),this)))}},989:function(e,a,t){"use strict";var n=t(1045),r=t(0),l=t.n(r);a.a=function(e){var a=e.count,t=e.page,r=e.rowsPerPage,c=e.setPage,o=e.setRowsPerPage;return l.a.createElement(n.a,{backIconButtonProps:{"aria-label":"P\xe1gina previa"},backIconButtonText:"P\xe1gina previa",className:"flex-shrink-0 overflow-x-auto",component:"div",count:a,labelRowsPerPage:"Registros por p\xe1gina",nextIconButtonProps:{"aria-label":"Siguiente p\xe1gina"},nextIconButtonText:"Siguiente p\xe1gina",page:t,rowsPerPage:r,onChangePage:function(e,a){c(a)},onChangeRowsPerPage:function(e){o(e.target.value)}})}},990:function(e,a,t){"use strict";var n=t(29),r=t(0);a.a=function(){var e=Object(r.useState)(0),a=Object(n.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)(10),o=Object(n.a)(c,2);return{page:t,setPage:l,rowsPerPage:o[0],setRowsPerPage:o[1]}}},991:function(e,a,t){"use strict";t.d(a,"a",(function(){return x}));var n=t(4),r=t(908),l=t(6),c=t(0),o=t.n(c),i=t(46),s=t(962),m=t(35),u=t(11);var d=function(e){var a=Object(i.a)(),t=Object(u.c)(Object(m.c)(a.palette.primary.main));return o.a.createElement("div",{className:e.classes.header},e.header&&o.a.createElement(s.a,{theme:t},e.header))},f=t(29),p=t(91),b=t(981),E=t(982),g=t(47);var v=function(e){var a=Object(i.a)(),t=Object(u.c)(Object(m.c)(a.palette.primary.main)),n=e.classes;return o.a.createElement(o.a.Fragment,null,e.header&&o.a.createElement(s.a,{theme:t},o.a.createElement("div",{className:Object(l.a)(n.sidebarHeader,e.variant)},e.header)),e.content&&o.a.createElement(g.a,{className:n.sidebarContent,enable:e.innerScroll},e.content))};var h=o.a.forwardRef((function(e,a){var t=Object(c.useState)(!1),n=Object(f.a)(t,2),r=n[0],i=n[1],s=e.classes;Object(c.useImperativeHandle)(a,(function(){return{toggleSidebar:m}}));var m=function(){i(!r)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{lgUp:"permanent"===e.variant},o.a.createElement(E.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return m()},disableSwipeToOpen:!0,classes:{root:Object(l.a)(s.sidebarWrapper,e.variant),paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},o.a.createElement(v,e))),"permanent"===e.variant&&o.a.createElement(b.a,{mdDown:!0},o.a.createElement(p.a,{variant:"permanent",className:Object(l.a)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(l.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},o.a.createElement(v,e))))})),j=Object(r.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:256,backgroundColor:e.palette.background.paper,backgroundSize:"cover",borderBottom:"1px solid ".concat(e.palette.primary.main),pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:192,minHeight:192,maxHeight:192,display:"flex",color:e.palette.secondary.main},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:296,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:256,minHeight:256,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),O=o.a.forwardRef((function(e,a){var t=Object(c.useRef)(null),n=Object(c.useRef)(null),r=Object(c.useRef)(null),i=j(e),s=e.rightSidebarHeader||e.rightSidebarContent,m=e.leftSidebarHeader||e.leftSidebarContent;return o.a.useImperativeHandle(a,(function(){return{rootRef:r,toggleLeftSidebar:function(){t.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),o.a.createElement("div",{ref:r,className:Object(l.a)(i.root,e.innerScroll&&i.innerScroll)},o.a.createElement("div",{className:i.topBg}),o.a.createElement("div",{className:"container flex w-full"},m&&o.a.createElement(h,{ref:t,classes:i,content:e.leftSidebarContent,header:e.leftSidebarHeader,innerScroll:e.innerScroll,position:"left",rootRef:r,variant:e.leftSidebarVariant||"permanent"}),o.a.createElement("div",{className:Object(l.a)(i.contentWrapper,m&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},o.a.createElement(d,{classes:i,header:e.header}),o.a.createElement("div",{className:Object(l.a)(i.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&o.a.createElement("div",{className:i.toolbar},e.contentToolbar),e.content&&o.a.createElement(g.a,{className:i.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),s&&o.a.createElement(h,{ref:n,classes:i,content:e.rightSidebarContent,header:e.rightSidebarHeader,innerScroll:e.innerScroll,position:"right",rootRef:r,variant:e.rightSidebarVariant||"permanent"})))}));O.defaultProps={};var x=o.a.memo(O)},993:function(e,a,t){"use strict";var n=t(897),r=t(959),l=t(960),c=t(909),o=t(0),i=t.n(o),s=t(988),m=t(11);a.a=function(e){var a=e.actionCallback,t=e.data,o=e.selectedStatus,u=Object(m.b)();return i.a.createElement(n.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:i.a.createElement(r.a,{position:"start"},i.a.createElement(l.a,null,i.a.createElement(s.c,null)))},placeholder:"Filtrar",value:o,variant:"outlined",select:!0,onChange:function(e){return u(a(e))}},i.a.createElement(c.a,{value:"todos"},"Todos"),t.map((function(e){return i.a.createElement(c.a,{key:e.id,value:e.id},e.name)})))}},994:function(e,a,t){"use strict";var n=t(29),r=t(897),l=t(959),c=t(960),o=t(0),i=t.n(o),s=t(11),m=t(118);a.a=function(e){var a=e.actionCallback,t=Object(s.b)(),u=Object(o.useState)(""),d=Object(n.a)(u,2),f=d[0],p=d[1],b=Object(m.a)(f,300);Object(o.useEffect)((function(){t(a(b))}),[t,b]);return i.a.createElement(r.a,{className:"sm:min-w-128 md:min-w-256 lg:max-w-360 w-full",id:"outlined-start-adornment",InputProps:{startAdornment:i.a.createElement(l.a,{position:"start"},i.a.createElement(c.a,null,"search"))},placeholder:"Buscar",value:f,variant:"outlined",onChange:function(e){var a=e.target.value;p(a)}})}}}]);