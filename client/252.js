(self.webpackChunk=self.webpackChunk||[]).push([[252],{17393:function(e,n,r){"use strict";var t=r(27378),o=r(14935),a=r(88922),i=r(7338),l=r(26904),c=r(89870),s=r.n(c);n.Z=function(e){var n=e.img,r=e.noIdText,c=e.title,d=e.withIdText,p=e.buttonText,m=e.link,A=(0,o.UO)().id,u=(0,o.s0)(),f=(0,a.$G)().t;return t.createElement("div",{className:s().NoItemBannerWrapper},t.createElement("div",{className:s().NoItemBannerContent},t.createElement("h3",{className:s().NoItemBannerTitle},f(c)),t.createElement("img",{className:s().NoItemBannerImg,src:"".concat(i.B3,"/").concat(n),alt:"no duties banner"}),t.createElement("p",{className:s().NoItemBannerText},f(A?d:r)),t.createElement("div",{className:s().NoItemBannerButtons},t.createElement(l.Z,{onClick:function(){u(A?"/".concat(m,"/create/").concat(A):"/".concat(m,"/create"))},text:f(p)}))))}},71726:function(e,n,r){"use strict";var t=r(27378),o=r(7338),a=r(88922),i=r(12693),l=r(67926),c=r(60042),s=r.n(c),d=r(83732),p=r(58864),m=r.n(p);n.Z=function(e){var n,r=e.participants,c=e.neighborhoodId,p=e.onParticipantRemove,A=e.onParticipantAdd,u=(0,i.C)(d.d),f=null===(n=(0,i.C)((function(e){return e.userNeighborhoods.entities[c]})))||void 0===n?void 0:n.members,x=(0,i.C)((function(e){return(0,l.$)(e,f)})),C=(0,a.$G)().t;return t.createElement("div",{className:m().ModalWrapper},t.createElement("h3",{className:m().ModalTitle},C("members",{value:r.length})),t.createElement("ul",{className:m().ModalMembersList},x.map((function(e){return t.createElement("li",{className:m().ModalMemberItem,key:"member-menu-".concat(e._id)},t.createElement("img",{src:"".concat(o.B3,"/").concat(e.avatar),alt:"".concat(e.fullName," avatar"),loading:"lazy",className:m().ModalMemberAvatar}),t.createElement("p",{className:m().ModalMemberName},e.fullName),(null==u?void 0:u._id)!==e._id&&t.createElement("span",{className:s()(r.includes(e._id)?"icon-cross":"icon-plus",m().ModalMemberIcon),onClick:function(){return r.includes(e._id)?p(e._id):A(e._id)}}))}))))}},24252:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var t=r(27378),o=r(3981),a=r(26904),i=r(88922),l=r(14935),c=r(12693),s=r(67981),d=r(73470).$.getSelectors((function(e){return e.duties})).selectAll,p=r(17393),m=r(65809),A=r(48421),u=r(97874),f=r(97716),x=r(7338),C=r(44825),g=r(43793),b=r(83732),h=r(60042),B=r.n(h),$=r(47690),y=r(97011),D=r(91567),v=r.n(D),M=function(e){var n=e.dutyMark,r=(0,t.useId)(),o=(0,c.C)(b.d),a=(0,t.useState)(!1),l=(0,m.Z)(a,2),d=l[0],p=l[1],A=(0,c.C)((function(e){return e.members.entities[n.author_id]})),u=(null==o?void 0:o._id)===n.author_id,f=(0,i.$G)().t,h=function(){p(!d)};return t.createElement(t.Fragment,null,d&&t.createElement($.Z,{withCloseIcon:!0,outsideHandler:h,closeFunc:h},t.createElement(y.Z,{itemId:n._id,action:s.gO,text:f("deleteMarkText"),onClose:h})),t.createElement("div",{className:v().DutyMark,"data-tooltip-id":r},t.createElement("img",{src:"".concat(x.B3,"/").concat(A.avatar),alt:"".concat(A.fullName," avatar"),onClick:u?h:null,"data-tooltip-id":"anys",className:B()(v().DutyMarkImage,u&&v().DutyMarkImageAuthor)})),t.createElement(C.u,{style:{zIndex:1001,maxWidth:"150px"},id:r,place:"top",content:f("dutyMarkCreated",{author:A.fullName,date:(0,g.default)(new Date(n.createdAt),"HH:mm dd/MM/yyyy")})}))},w=r(25394),k=r(40034),_=r(71726),I=r(16340),E=r.n(I),N=function(e){var n=e.duty,r=(0,t.useState)(!1),o=(0,m.Z)(r,2),a=o[0],d=o[1],p=(0,t.useState)(!1),A=(0,m.Z)(p,2),u=A[0],f=A[1],x=(0,l.s0)(),C=(0,c.T)(),g=(0,i.$G)().t,b=function(){d(!a)},h=function(){f(!u)};return t.createElement(t.Fragment,null,u&&t.createElement($.Z,{withCloseIcon:!0,outsideHandler:h,closeFunc:h},t.createElement(_.Z,{participants:n.participants,neighborhoodId:n.neighborhood,onParticipantAdd:function(e){C((0,s.M2)({dutyId:n._id,participantId:e}))},onParticipantRemove:function(e){C((0,s.$p)({dutyId:n._id,participantId:e}))}})),a&&t.createElement($.Z,{withCloseIcon:!0,outsideHandler:b},t.createElement(y.Z,{itemId:n._id,action:s.Lq,text:g("areUWantDeleteDuty"),onClose:b})),t.createElement("ul",{className:E().DutyMenuList},t.createElement("li",{className:E().DutyMenuItem,onClick:h},g("participants")),t.createElement("li",{className:E().DutyMenuItem,onClick:function(){x("/duties/edit/".concat(n._id))}},g("edit")),t.createElement("li",{className:B()(E().DutyMenuItem,E().DutyMenuItemDanger),onClick:b},g("delete"))))},W=r(3951),T=r.n(W),z=function(e){var n=e.duty,r=(0,l.UO)().id,o=(0,t.useState)(null),d=(0,m.Z)(o,2),p=d[0],x=d[1],C=(0,t.useState)(!1),g=(0,m.Z)(C,2),h=g[0],B=g[1],$=(0,c.C)(b.d),y=(0,c.C)((function(e){return e.neighborhoods.entities[n.neighborhood]})),D=new Date,v=new Date(D.setMonth(D.getMonth())),_=new Date(D.setMonth(D.getMonth()-1)),I=(null==$?void 0:$._id)===n.author,E=(0,i.$G)().t,W=(0,c.T)(),z=function(e){var r=null;return n.dutyMarks.forEach((function(n){if((0,u.default)((0,f.default)(n.date.toString()),e))return r=n,null})),r};return t.createElement("article",{className:T().DutyWrapper},t.createElement("div",{className:T().DutyContent},t.createElement("div",{className:T().DutyMenuWrapper},I&&t.createElement(k.v,null,t.createElement(N,{duty:n}))),t.createElement("div",{className:T().DutyTitleWrapper},t.createElement("h3",{className:T().DutyTitle},n.name),!r&&t.createElement("h3",{className:T().DutyNeighborhoodName},y.name)),t.createElement("div",{className:T().Calendar},t.createElement(A.ZP,{onChange:function(e){x(e)},tileDisabled:function(e){var n=e.date;return n<_||n>v},tileContent:function(e){var r,o=e.date;if(null!=n&&null!==(r=n.dutyMarks)&&void 0!==r&&r.length){var a=z(o);if(a)return t.createElement(M,{dutyMark:a})}return null},value:p,showFixedNumberOfWeeks:!0,prev2Label:null,next2Label:null,maxDetail:"month",view:"month"})),t.createElement("div",{className:T().DutyButtonWrapper},t.createElement(a.Z,{onClick:function(){B(!0),W((0,s.oO)({date:p,duty_id:n._id,neighborhood_id:n.neighborhood.toString()})).unwrap().catch(w.D).finally((function(){B(!1),x(null)}))},disabled:!p||h||Boolean(z(p)),text:E("addMark")}))))},Z=(0,t.memo)(z),S=r(77167),G=r.n(S),L=function(){var e=(0,c.C)(d);return t.createElement("div",{className:G().DutiesList},e.map((function(e){return t.createElement(Z,{duty:e,key:e._id})})))},U=r(99907),Y=r(16733),P=r.n(Y),j=function(){(0,U.W)();var e=(0,l.UO)().id,n=(0,c.C)(d),r=(0,c.C)((function(e){return e.duties.isLoading})),m=(0,l.s0)(),A=(0,c.T)(),u=(0,i.$G)().t;return(0,t.useEffect)((function(){A(e?(0,s.Ts)(e):(0,s.Ts)(""))}),[e]),t.createElement("div",{className:P().DutiesPageWrapper},t.createElement("div",{className:P().DutiesControls},t.createElement("div",{className:P().DutiesTitleWrapper},t.createElement("h3",null,u("duties")),t.createElement(o.Z,{link:"/duties"})),t.createElement("div",{className:P().DebtsButtons},t.createElement(a.Z,{onClick:function(){m(e?"/duties/create/".concat(e):"/duties/create")},text:u("createDuty"),icon:"icon-plus"}))),t.createElement("div",{className:P().DutiesContentHolder},!r&&Boolean(!n.length)&&t.createElement(p.Z,{link:"duties",img:"banner15.png",title:"noDutiesBannerText",withIdText:"noDutiesText",noIdText:"noDutiesText",buttonText:"createDuty"}),t.createElement("span",null),!r&&t.createElement("div",{className:P().DutiesContentWrapper},t.createElement(L,null))))}},67926:function(e,n,r){"use strict";r.d(n,{$:function(){return t}});var t=(0,r(61166).P1)([function(e){return e.members},function(e,n){return n}],(function(e,n){return n.map((function(n){return e.entities[n]}))}))},34367:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,".NoItemBannerWrapper_L07wo{margin-top:60px;display:flex;justify-content:center;box-sizing:border-box}.NoItemBannerContent_cFXER{background-color:#fff;border-radius:20px;padding:20px 15px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 10px}@media screen and (min-width: 744px){.NoItemBannerContent_cFXER{max-width:670px;padding:20px 35px}}.NoItemBannerTitle_xIHyG{font-size:32px;font-weight:700;line-height:24px;color:#0f0f10;font-size:24px;color:#485268;text-align:center}.NoItemBannerImg_v1kzC{max-height:200px}@media screen and (min-width: 744px){.NoItemBannerImg_v1kzC{max-height:300px}}.NoItemBannerText_Xphio{text-align:center}.NoItemBannerButtons_nbNtm{flex-grow:1;display:flex;flex-direction:column;gap:20px;margin:20px 0;width:100%}@media screen and (min-width: 744px){.NoItemBannerButtons_nbNtm{gap:35px;flex-direction:row}}\n","",{version:3,sources:["webpack://./components/NoItemBanner/NoItemBanner.module.scss","webpack://./styles/_variables.scss","webpack://./styles/_mixins.scss"],names:[],mappings:"AAGA,2BACE,eAAgB,CAChB,YAAa,CACb,sBAAuB,CACvB,qBAAsB,CACvB,2BAGC,qBCJoB,CDKpB,kBAAmB,CACnB,iBAAkB,CAClB,YAAa,CACb,qBAAsB,CACtB,kBAAmB,CACnB,sBAAuB,CACvB,aAAc,CAMf,qCAdD,2BAWI,eAAgB,CAChB,iBAAkB,CAErB,CAED,yBELE,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,aDFwB,CDMxB,cAAe,CACf,aCN8B,CDO9B,iBAAkB,CACnB,uBAGC,gBAAiB,CAKlB,qCAND,uBAII,gBAAiB,CAEpB,CAED,wBACE,iBAAkB,CACnB,2BAGC,WAAY,CACZ,YAAa,CACb,qBAAsB,CACtB,QAAS,CACT,aAAc,CACd,UAAW,CAMZ,qCAZD,2BASI,QAAS,CACT,kBAAmB,CAEtB",sourcesContent:['@import "@src/styles/variables";\n@import "@src/styles/mixins";\n\n.NoItemBannerWrapper {\n  margin-top: 60px;\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n}\n\n.NoItemBannerContent {\n  background-color: $component-bg;\n  border-radius: 20px;\n  padding: 20px 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10px;\n\n  @include for-tablet {\n    max-width: 670px;\n    padding: 20px 35px;\n  }\n}\n\n.NoItemBannerTitle {\n  @include title;\n  font-size: 24px;\n  color: $title-light-text-color;\n  text-align: center;\n}\n\n.NoItemBannerImg {\n  max-height: 200px;\n\n  @include for-tablet {\n    max-height: 300px;\n  }\n}\n\n.NoItemBannerText {\n  text-align: center;\n}\n\n.NoItemBannerButtons {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 20px 0;\n  width: 100%;\n\n  @include for-tablet {\n    gap: 35px;\n    flex-direction: row;\n  }\n}\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n",'@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n'],sourceRoot:""}]),i.locals={NoItemBannerWrapper:"NoItemBannerWrapper_L07wo",NoItemBannerContent:"NoItemBannerContent_cFXER",NoItemBannerTitle:"NoItemBannerTitle_xIHyG",NoItemBannerImg:"NoItemBannerImg_v1kzC",NoItemBannerText:"NoItemBannerText_Xphio",NoItemBannerButtons:"NoItemBannerButtons_nbNtm"},n.default=i},88083:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,".ModalWrapper_zEsek{background-color:#fff;padding:20px 30px;position:relative;display:flex;flex-direction:column;border-radius:5px;max-width:300px;min-width:300px}@media screen and (min-width: 744px){.ModalWrapper_zEsek{min-width:450px;max-width:500px}}.ModalTitle_RB0kB{font-size:32px;font-weight:700;line-height:24px;color:#0f0f10;font-size:22px;color:#485268;text-align:center;margin:5px 0}.ModalMembersList_LUL0I{list-style:none;margin:20px 0 0;padding:0}.ModalMemberItem_uaZCN{display:flex;align-items:center}.ModalMemberItem_uaZCN:not(:last-child){padding-bottom:10px;margin-bottom:10px;border-bottom:1px solid #dee2ed}.ModalMemberAvatar_RASbd{margin-right:10px;max-width:40px;max-height:40px;min-width:40px;min-height:40px}.ModalMemberName_HVxB9{flex-grow:1;font-weight:600;font-size:14px;margin:0}.ModalMemberMenu_hz1eO{width:20px}.ModalMemberIcon_mt13D{color:#bfc5d1;cursor:pointer;transition:all 0.2s}.ModalMemberIcon_mt13D:hover{color:#333a4a}\n","",{version:3,sources:["webpack://./components/ParticipantManager/ParticipantManager.module.scss","webpack://./styles/_variables.scss","webpack://./styles/_mixins.scss"],names:[],mappings:"AAGA,oBACE,qBCGoB,CDFpB,iBAAkB,CAClB,iBAAkB,CAClB,YAAa,CACb,qBAAsB,CACtB,iBAAkB,CAClB,eAAgB,CAChB,eAAgB,CAMjB,qCAdD,oBAWI,eAAgB,CAChB,eAAgB,CAEnB,CAED,kBEEE,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,aDFwB,CDDxB,cAAe,CACf,aCC8B,CDA9B,iBAAkB,CAClB,YAAa,CACd,wBAGC,eAAgB,CAChB,eAAgB,CAChB,SAAU,CACX,uBAGC,YAAa,CACb,kBAAmB,CAFrB,wCAKI,mBAAoB,CACpB,kBAAmB,CACnB,+BCzBkB,CD0BnB,yBAID,iBAAkB,CAClB,cAAe,CACf,eAAgB,CAChB,cAAe,CACf,eAAgB,CACjB,uBAGC,WAAY,CACZ,eAAgB,CAChB,cAAe,CACf,QAAS,CACV,uBAGC,UAAW,CACZ,uBAGC,aC7CwB,CD8CxB,cAAe,CACf,mBAAoB,CAHtB,6BAMI,aCjDgB",sourcesContent:['@import "@src/styles/variables";\n@import "@src/styles/mixins";\n\n.ModalWrapper {\n  background-color: $component-bg;\n  padding: 20px 30px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  max-width: 300px;\n  min-width: 300px;\n\n  @include for-tablet {\n    min-width: 450px;\n    max-width: 500px;\n  }\n}\n\n.ModalTitle {\n  @include title;\n  font-size: 22px;\n  color: $title-light-text-color;\n  text-align: center;\n  margin: 5px 0;\n}\n\n.ModalMembersList {\n  list-style: none;\n  margin: 20px 0 0;\n  padding: 0;\n}\n\n.ModalMemberItem {\n  display: flex;\n  align-items: center;\n\n  &:not(:last-child) {\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    border-bottom: 1px solid $border-color;\n  }\n}\n\n.ModalMemberAvatar {\n  margin-right: 10px;\n  max-width: 40px;\n  max-height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n}\n\n.ModalMemberName {\n  flex-grow: 1;\n  font-weight: 600;\n  font-size: 14px;\n  margin: 0;\n}\n\n.ModalMemberMenu {\n  width: 20px;\n}\n\n.ModalMemberIcon {\n  color: $light-text-color;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    color: $text-color;\n  }\n}\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n",'@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n'],sourceRoot:""}]),i.locals={ModalWrapper:"ModalWrapper_zEsek",ModalTitle:"ModalTitle_RB0kB",ModalMembersList:"ModalMembersList_LUL0I",ModalMemberItem:"ModalMemberItem_uaZCN",ModalMemberAvatar:"ModalMemberAvatar_RASbd",ModalMemberName:"ModalMemberName_HVxB9",ModalMemberMenu:"ModalMemberMenu_hz1eO",ModalMemberIcon:"ModalMemberIcon_mt13D"},n.default=i},41700:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,".DutiesList_LrFuv{display:grid;grid-template-columns:100%;gap:20px}@media screen and (min-width: 744px){.DutiesList_LrFuv{grid-template-columns:calc(50% - 10px) calc(50% - 10px)}}@media screen and (min-width: 1260px){.DutiesList_LrFuv{gap:30px;grid-template-columns:calc(33% - 10px) calc(33% - 10px) calc(33% - 10px)}}\n","",{version:3,sources:["webpack://./pages/DutiesPage/DutiesList/DutiesList.module.scss","webpack://./styles/_mixins.scss"],names:[],mappings:"AAGA,kBACE,YAAa,CACb,0BAA2B,CAC3B,QAAS,CAUV,qCAbD,kBAMI,uDAAwD,CAO3D,CCDC,sCDZF,kBAUI,QAAS,CACT,wEAAyE,CAE5E",sourcesContent:['@import "@src/styles/variables";\n@import "@src/styles/mixins";\n\n.DutiesList {\n  display: grid;\n  grid-template-columns: 100%;\n  gap: 20px;\n\n  @include for-tablet() {\n    grid-template-columns: calc(50% - 10px) calc(50% - 10px);\n  }\n\n  @include for-desktop() {\n    gap: 30px;\n    grid-template-columns: calc(33% - 10px) calc(33% - 10px) calc(33% - 10px);\n  }\n}\n','@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n'],sourceRoot:""}]),i.locals={DutiesList:"DutiesList_LrFuv"},n.default=i},80679:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,"@media screen and (min-width: 744px){.DutiesPageWrapper_sNBHP{width:calc(100vw - 80px)}}@media screen and (min-width: 744px){.DutiesContentHolder_R3bRL{padding:88px 16px 16px 16px}}.DutiesControls_aYCWC{background-color:#fff;display:flex;justify-content:space-between;height:auto;border-bottom:1px solid #dee2ed;padding:10px 15px 10px 15px;flex-direction:column}@media screen and (min-width: 744px){.DutiesControls_aYCWC{position:fixed;top:60px;z-index:9;width:calc(100vw - 80px);padding:10px 25px 10px 35px;flex-direction:row;align-items:center;height:72px}}.DutiesTitleWrapper_zl0YZ{display:flex;align-items:center}.DutiesTitleWrapper_zl0YZ h3{font-size:24px;margin:0 0 10px;display:none;line-height:24px}@media screen and (min-width: 744px){.DutiesTitleWrapper_zl0YZ h3{margin:0 25px 0 0;display:block}}.DutiesTitleWrapper_zl0YZ div{display:none}@media screen and (min-width: 1260px){.DutiesTitleWrapper_zl0YZ div{display:flex}}.DutiesContentWrapper_SbjC7{max-width:1360px;margin:0 auto;display:grid;padding:16px;gap:20px}@media screen and (min-width: 1260px){.DutiesContentWrapper_SbjC7{padding:unset}}\n","",{version:3,sources:["webpack://./styles/_mixins.scss","webpack://./pages/DutiesPage/DutiesPage.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAGE,qCCAF,yBAEI,wBAAyB,CAE5B,CDJC,qCCMF,2BAEI,2BAA4B,CAE/B,CAED,sBACE,qBCToB,CDUpB,YAAa,CACb,6BAA8B,CAC9B,WAAY,CACZ,+BCLoB,CDMpB,2BAA4B,CAC5B,qBAAsB,CAYvB,qCAnBD,sBAUI,cAAe,CACf,QCagB,CDZhB,SAAU,CACV,wBAAyB,CACzB,2BAA4B,CAC5B,kBAAmB,CACnB,kBAAmB,CACnB,WCSuB,CDP1B,CAED,0BACE,YAAa,CACb,kBAAmB,CAFrB,6BAKI,cAAe,CACf,eAAgB,CAChB,YAAa,CACb,gBAAiB,CAMlB,qCAdH,6BAWM,iBAAkB,CAClB,aAAc,CAEjB,CAdH,8BAiBI,YAAa,CAKd,sCAtBH,8BAoBM,YAAa,CAEhB,CAGH,4BACE,gBAAiB,CACjB,aAAc,CACd,YAAa,CACb,YAAa,CACb,QAAS,CAKV,sCAVD,4BAQI,aAAc,CAEjB",sourcesContent:['@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n',"@import '@src/styles/variables';\n@import '@src/styles/mixins';\n\n.DutiesPageWrapper {\n  @include for-tablet {\n    width: calc(100vw - 80px);\n  }\n}\n\n.DutiesContentHolder {\n  @include for-tablet {\n    padding: 88px 16px 16px 16px;\n  }\n}\n\n.DutiesControls {\n  background-color: $component-bg;\n  display: flex;\n  justify-content: space-between;\n  height: auto;\n  border-bottom: 1px solid $border-color;\n  padding: 10px 15px 10px 15px;\n  flex-direction: column;\n\n  @include for-tablet {\n    position: fixed;\n    top: $header-height;\n    z-index: 9;\n    width: calc(100vw - 80px);\n    padding: 10px 25px 10px 35px;\n    flex-direction: row;\n    align-items: center;\n    height: $page-controls-height;\n  }\n}\n\n.DutiesTitleWrapper {\n  display: flex;\n  align-items: center;\n\n  h3 {\n    font-size: 24px;\n    margin: 0 0 10px;\n    display: none;\n    line-height: 24px;\n\n    @include for-tablet {\n      margin: 0 25px 0 0;\n      display: block;\n    }\n  }\n\n  div {\n    display: none;\n\n    @include for-desktop {\n      display: flex;\n    }\n  }\n}\n\n.DutiesContentWrapper {\n  max-width: 1360px;\n  margin: 0 auto;\n  display: grid;\n  padding: 16px;\n  gap: 20px;\n\n  @include for-desktop {\n    padding: unset;\n  }\n}\n","$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={DutiesPageWrapper:"DutiesPageWrapper_sNBHP",DutiesContentHolder:"DutiesContentHolder_R3bRL",DutiesControls:"DutiesControls_aYCWC",DutiesTitleWrapper:"DutiesTitleWrapper_zl0YZ",DutiesContentWrapper:"DutiesContentWrapper_SbjC7"},n.default=i},63504:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,"@keyframes appear_oA3Kl{0%{opacity:0}100%{opacity:1}}.DutyWrapper_HaniA{position:relative;animation:appear_oA3Kl 0.2s}.DutyMenuWrapper_XJvMA{position:absolute;right:15px;top:10px;cursor:pointer}@media screen and (min-width: 744px){.DutyMenuWrapper_XJvMA{right:25px}}.DutyContent_vWBbz{background-color:#fff;border-radius:10px;border:1px solid transparent;padding:25px 15px;margin-bottom:20px;transition:all 0.3s;position:relative;gap:20px}@media screen and (min-width: 744px){.DutyContent_vWBbz{padding:25px}}.DutyTitleWrapper_1QiMG{display:flex;justify-content:space-between;align-items:center;margin:0 0 10px}.DutyTitle_RyXes{font-size:32px;font-weight:700;line-height:24px;color:#0f0f10;font-size:18px;margin:0}.DutyNeighborhoodName_njUm5{font-size:32px;font-weight:700;line-height:24px;color:#0f0f10;margin:0;font-size:14px;font-weight:500;color:#bfc5d1}.DutyButtonWrapper_jaR2c{margin-top:20px}.DutyButtonWrapper_jaR2c button{height:38px}\n","",{version:3,sources:["webpack://./pages/DutiesPage/DutyCard/DutyCard.module.scss","webpack://./styles/_variables.scss","webpack://./styles/_mixins.scss"],names:[],mappings:"AAGA,wBACE,GACE,SAAU,CAGZ,KACE,SAAU,CAAA,CAId,mBACE,iBAAkB,CAClB,2BAAsB,CACvB,uBAGC,iBAAkB,CAClB,UAAW,CACX,QAAS,CACT,cAAe,CAKhB,qCATD,uBAOI,UAAW,CAEd,CAED,mBACE,qBCvBoB,CDwBpB,kBAAmB,CACnB,4BAA6B,CAC7B,iBAAkB,CAClB,kBAAmB,CACnB,mBAAoB,CACpB,iBAAkB,CAClB,QAAS,CAKV,qCAbD,mBAWI,YAAa,CAEhB,CAED,wBACE,YAAa,CACb,6BAA8B,CAC9B,kBAAmB,CACnB,eAAgB,CACjB,iBE5BC,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,aDFwB,CD+BxB,cAAe,CACf,QAAS,CACV,4BElCC,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,aDFwB,CDqCxB,QAAS,CACT,cAAe,CACf,eAAgB,CAChB,aC3CwB,CD4CzB,yBAGC,eAAgB,CADlB,gCAII,WAAY",sourcesContent:['@import "@src/styles/mixins";\n@import "@src/styles/variables";\n\n@keyframes appear {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.DutyWrapper {\n  position: relative;\n  animation: appear 0.2s;\n}\n\n.DutyMenuWrapper {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n  cursor: pointer;\n\n  @include for-tablet() {\n    right: 25px;\n  }\n}\n\n.DutyContent {\n  background-color: $component-bg;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  padding: 25px 15px;\n  margin-bottom: 20px;\n  transition: all 0.3s;\n  position: relative;\n  gap: 20px;\n\n  @include for-tablet() {\n    padding: 25px;\n  }\n}\n\n.DutyTitleWrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 0 10px;\n}\n\n.DutyTitle {\n  @include title();\n  font-size: 18px;\n  margin: 0;\n}\n\n.DutyNeighborhoodName {\n  @include title();\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: $light-text-color;\n}\n\n.DutyButtonWrapper {\n  margin-top: 20px;\n\n  button {\n    height: 38px;\n  }\n}\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n",'@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n'],sourceRoot:""}]),i.locals={DutyWrapper:"DutyWrapper_HaniA",appear:"appear_oA3Kl",DutyMenuWrapper:"DutyMenuWrapper_XJvMA",DutyContent:"DutyContent_vWBbz",DutyTitleWrapper:"DutyTitleWrapper_1QiMG",DutyTitle:"DutyTitle_RyXes",DutyNeighborhoodName:"DutyNeighborhoodName_njUm5",DutyButtonWrapper:"DutyButtonWrapper_jaR2c"},n.default=i},43383:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,"@keyframes appear_dUZo6{0%{opacity:0}100%{opacity:1}}.DutyMark_I4Gt5{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:34px;height:34px;z-index:10}.DutyMarkImage_zHd2K{width:34px;height:34px;border:2px solid transparent;background-color:#fff;border-radius:50%;animation:appear_dUZo6 0.2s}.DutyMarkImage--author_oaKZD{cursor:pointer}.DutyMarkImage--author_oaKZD:hover{background-color:#278981;border-color:#278981}\n","",{version:3,sources:["webpack://./pages/DutiesPage/DutyCard/DutyMark/DutyMark.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,wBACE,GACE,SAAU,CAGZ,KACE,SAAU,CAAA,CAId,gBACE,iBAAkB,CAClB,OAAQ,CACR,QAAS,CACT,+BAA+B,CAC/B,UAAW,CACX,WAAY,CACZ,UAAW,CACZ,qBAGC,UAAW,CACX,WAAY,CACZ,4BAA6B,CAC7B,qBCnBoB,CDoBpB,iBAAkB,CAClB,2BAAsB,CAEtB,6BACE,cAAe,CADhB,mCAIG,wBCtBuB,CDuBvB,oBCvBuB",sourcesContent:['@import "@src/styles/variables";\n\n@keyframes appear {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.DutyMark {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  width: 34px;\n  height: 34px;\n  z-index: 10;\n}\n\n.DutyMarkImage {\n  width: 34px;\n  height: 34px;\n  border: 2px solid transparent;\n  background-color: $component-bg;\n  border-radius: 50%;\n  animation: appear 0.2s;\n\n  &--author {\n    cursor: pointer;\n\n    &:hover {\n      background-color: $primary-color-hover;\n      border-color: $primary-color-hover;\n    }\n  }\n}\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={DutyMark:"DutyMark_I4Gt5",DutyMarkImage:"DutyMarkImage_zHd2K",appear:"appear_dUZo6","DutyMarkImage--author":"DutyMarkImage--author_oaKZD",DutyMarkImageAuthor:"DutyMarkImage--author_oaKZD"},n.default=i},35343:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,".DutyMenuList_nvQTf{list-style:none;margin:0;padding:0}.DutyMenuItem_ekTUE{padding:10px;user-select:none}.DutyMenuItem_ekTUE:hover{background-color:#fbfbfb}.DutyMenuItem_ekTUE:not(:last-child){border-bottom:1px solid #eeeff3}.DutyMenuItem--danger_aWrhS{color:#f14f4f}\n","",{version:3,sources:["webpack://./pages/DutiesPage/DutyCard/DutyMenu/DutyMenu.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,oBACE,eAAgB,CAChB,QAAS,CACT,SAAU,CACX,oBAGC,YAAa,CACb,gBAAiB,CAFnB,0BAKI,wBCXyB,CDM7B,qCASI,+BCZoB,CDarB,4BAGC,aCIkB",sourcesContent:['@import "@src/styles/variables";\r\n\r\n.DutyMenuList {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.DutyMenuItem {\r\n  padding: 10px;\r\n  user-select: none;\r\n\r\n  &:hover {\r\n    background-color: $content-color-hover;\r\n  }\r\n\r\n  &:not(:last-child) {\r\n    border-bottom: 1px solid $light-bg-color;\r\n  }\r\n\r\n  &--danger {\r\n    color: $danger-color;\r\n  }\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={DutyMenuList:"DutyMenuList_nvQTf",DutyMenuItem:"DutyMenuItem_ekTUE","DutyMenuItem--danger":"DutyMenuItem--danger_aWrhS",DutyMenuItemDanger:"DutyMenuItem--danger_aWrhS"},n.default=i},89870:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),l=r(38060),c=r(54865),s=r(34367);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=c,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=l,t(s,d),e.exports=s&&s.locals||{}},58864:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),l=r(38060),c=r(54865),s=r(88083);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=c,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=l,t(s,d),e.exports=s&&s.locals||{}},77167:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),l=r(38060),c=r(54865),s=r(41700);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=c,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=l,t(s,d),e.exports=s&&s.locals||{}},16733:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),l=r(38060),c=r(54865),s=r(80679);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=c,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=l,t(s,d),e.exports=s&&s.locals||{}},3951:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),l=r(38060),c=r(54865),s=r(63504);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=c,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=l,t(s,d),e.exports=s&&s.locals||{}},91567:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),l=r(38060),c=r(54865),s=r(43383);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=c,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=l,t(s,d),e.exports=s&&s.locals||{}},16340:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),l=r(38060),c=r(54865),s=r(35343);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=c,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=l,t(s,d),e.exports=s&&s.locals||{}}}]);
//# sourceMappingURL=252.js.map